/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { getLogger, Logger, toUnixTimestamp } from "../1_utilities.ts";
import { Api, is, isOneOf, peerToChatId } from "../2_tl.ts";
import { ChatListItem, ChatMember, constructChat, constructChatListItem, constructChatListItem3, constructChatListItem4, constructChatMember, getChatListItemOrder, ID } from "../3_types.ts";
import { C as C_ } from "./1_types.ts";
import { getChatListId } from "./0_utilities.ts";
import { FileManager } from "./2_file_manager.ts";
import { MessageManager } from "./3_message_manager.ts";

type C = C_ & { fileManager: FileManager; messageManager: MessageManager };

const chatListManagerUpdates = [
  "updateNewMessage",
  "updateNewChannelMessage",
  "updatePinnedDialogs",
  "updateFolderPeers",
  "updateChannel",
  "updateChat",
  "updateUser",
  "updateUserName",
] as const;

type ChatListManagerUpdate = Api.Types[(typeof chatListManagerUpdates)[number]];

export class ChatListManager {
  #c: C;

  #LgetChats: Logger;

  constructor(c: C) {
    this.#c = c;

    const L = getLogger("ChatListManager").client(c.id);
    this.#LgetChats = L.branch("getChats");
  }

  async #sendChatUpdate(chatId: number, added: boolean) {
    try {
      await this.#c.storage.assertUser("");
    } catch {
      return;
    }
    const [chat] = this.#getChatAnywhere(chatId);
    const update = chat === undefined ? { deletedChat: { chatId } } : added ? { newChat: chat } : { editedChat: chat };
    this.#c.handleUpdate(update);
  }

  async reassignChatLastMessage(chatId: number, add = false, sendUpdate = true) {
    try {
      await this.#c.storage.assertUser("");
    } catch {
      return () => Promise.resolve();
    }
    const [chat, listId] = this.#getChatAnywhere(chatId);
    if (!chat && !add) {
      return () => Promise.resolve();
    }

    const message_ = await this.#c.messageStorage.getLastMessage(chatId);
    if (message_ != null) {
      const message = await this.#c.messageManager.constructMessage(message_);
      if (chat) {
        chat.order = getChatListItemOrder(message, chat.pinned);
        chat.lastMessage = message;
        await this.#c.storage.setChat(listId, chatId, chat.pinned, message.id, message.date);
      } else {
        const pinnedChats = await this.#getPinnedChats(listId);
        const chat = await constructChatListItem3(chatId, pinnedChats.indexOf(chatId), message, this.#c.getEntity);
        if (chat == null) {
          unreachable();
        }
        this.#chats.set(chatId, chat);
        await this.#c.storage.setChat(listId, chatId, chat.pinned, chat.lastMessage?.id ?? 0, chat.lastMessage?.date ?? new Date(0));
      }
      if (sendUpdate) {
        return () => this.#sendChatUpdate(chatId, !chat);
      }
      return () => Promise.resolve();
    }

    const message = (await this.#c.messageManager.getHistory(chatId, { limit: 1 }))[0];
    if (message) {
      if (chat) {
        chat.order = getChatListItemOrder(message, chat.pinned);
        chat.lastMessage = message;
        await this.#c.storage.setChat(listId, chatId, chat.pinned, message.id, message.date);
      } else {
        const pinnedChats = await this.#getPinnedChats(listId);
        const chat = await constructChatListItem3(chatId, pinnedChats.indexOf(chatId), message, this.#c.getEntity);
        if (chat == null) {
          unreachable();
        }
        this.#chats.set(chatId, chat);
      }
      if (sendUpdate) {
        return () => this.#sendChatUpdate(chatId, !chat);
      }
      return () => Promise.resolve();
    }

    if (chat) {
      chat.order = getChatListItemOrder(undefined, chat.pinned);
      chat.lastMessage = undefined;
      if (sendUpdate) {
        return () => this.#sendChatUpdate(chatId, false);
      }
    }

    return () => Promise.resolve();
  }
  #chats = new Map<number, ChatListItem>();
  #archivedChats = new Map<number, ChatListItem>();
  #chatsLoadedFromStorage = false;
  #tryGetChatId(username: string) {
    username = username.toLowerCase();
    for (const chat of this.#chats.values()) {
      if ("username" in chat) {
        if (
          chat.username === username
          //     TODO
          //     ||
          //     chat.chat.also?.some((v) => v.toLowerCase() === username)
        ) {
          return chat.chat.id;
        }
      }
    }
    for (const chat of this.#archivedChats.values()) {
      if ("username" in chat) {
        if (
          chat.username === username
          //    TODO
          //    ||
          //   chat.also?.some((v) => v.toLowerCase() === username)
        ) {
          return chat.chat.id;
        }
      }
    }
    return null;
  }
  #getChatAnywhere(chatId: number): [ChatListItem | undefined, number] {
    let chat = this.#chats.get(chatId);
    if (chat) {
      return [chat, 0];
    }
    chat = this.#archivedChats.get(chatId);
    if (chat) {
      return [chat, 1];
    }
    return [undefined, -1];
  }
  #getChatList(listId: number) {
    switch (listId) {
      case 0:
        return this.#chats;
      case 1:
        return this.#archivedChats;
      default:
        throw new Error(`Invalid chat list: ${listId}`);
    }
  }

  async #loadChatsFromStorage() {
    const chats = await this.#c.storage.getChats(0);
    const archivedChats = await this.#c.storage.getChats(1);
    for (const { chatId, pinned, topMessageId } of chats) {
      const chat = await constructChatListItem(chatId, pinned, topMessageId, this.#c.getEntity, this.#c.messageManager.getMessage.bind(this.#c.messageManager));
      if (chat == null) {
        continue;
      }
      this.#chats.set(chat.chat.id, chat);
    }
    for (const { chatId, pinned, topMessageId } of archivedChats) {
      const chat = await constructChatListItem(chatId, pinned, topMessageId, this.#c.getEntity, this.#c.messageManager.getMessage.bind(this.#c.messageManager));
      if (chat == null) {
        continue;
      }
      this.#archivedChats.set(chat.chat.id, chat);
    }
    this.#chatsLoadedFromStorage = true;
  }
  #getLoadedChats(listId: number) {
    const chats_ = this.#getChatList(listId);

    const chats = new Array<ChatListItem>();
    for (const chat of chats_.values()) {
      chats.push(chat);
    }
    return chats
      .sort((a, b) => b.chat.id - a.chat.id)
      .sort((a, b) => b.order.localeCompare(a.order));
  }
  #pinnedChats = new Array<number>();
  #pinnedArchiveChats = new Array<number>();
  #storageHadPinnedChats = false;
  #pinnedChatsLoaded = false;
  async #loadPinnedChats() {
    const [pinnedChats, pinnedArchiveChats] = await Promise.all([this.#c.storage.getPinnedChats(0), this.#c.storage.getPinnedChats(1)]);
    if (pinnedChats != null && pinnedArchiveChats != null) {
      this.#pinnedChats = pinnedChats;
      this.#pinnedArchiveChats = pinnedArchiveChats;
      this.#storageHadPinnedChats = true;
    }
    this.#pinnedChatsLoaded = true;
  }
  async #fetchPinnedChats(listId: number | null = null) {
    if (listId == null || listId == 0) {
      const dialogs = await this.#c.invoke({ _: "messages.getPinnedDialogs", folder_id: 0 });
      const pinnedChats = new Array<number>();
      for (const dialog of dialogs.dialogs) {
        pinnedChats.push(peerToChatId(dialog.peer));
      }
      this.#pinnedChats = pinnedChats;
      await this.#c.storage.setPinnedChats(0, this.#pinnedChats);
    }
    if (listId == null || listId == 1) {
      const dialogs = await this.#c.invoke({ _: "messages.getPinnedDialogs", folder_id: 1 });
      const pinnedArchiveChats = new Array<number>();
      for (const dialog of dialogs.dialogs) {
        pinnedArchiveChats.push(peerToChatId(dialog.peer));
      }
      this.#pinnedArchiveChats = pinnedArchiveChats;
      await this.#c.storage.setPinnedChats(1, this.#pinnedArchiveChats);
    }
    if (listId != null && listId != 0 && listId != 1) {
      unreachable();
    }
  }
  async #getPinnedChats(listId: number) {
    if (!this.#pinnedChatsLoaded) {
      await this.#loadPinnedChats();
    }
    if (!this.#storageHadPinnedChats) {
      await this.#fetchPinnedChats();
    }
    switch (listId) {
      case 0:
        return this.#pinnedChats;
      case 1:
        return this.#pinnedArchiveChats;
      default:
        unreachable();
    }
  }
  async #updateOrAddChat(chatId: number) {
    const [chat, listId] = this.#getChatAnywhere(chatId);
    if (chat !== undefined) {
      const newChat = await constructChatListItem3(chatId, chat.pinned, chat.lastMessage, this.#c.getEntity);
      if (newChat != null) {
        this.#getChatList(listId).set(chatId, newChat);
        await this.#sendChatUpdate(chatId, false);
      }
    } else {
      const chat = await constructChatListItem(chatId, -1, -1, this.#c.getEntity, this.#c.messageManager.getMessage.bind(this.#c.messageManager));
      if (chat != null) {
        this.#getChatList(0).set(chatId, chat);
        await this.reassignChatLastMessage(chatId, false, false);
        await this.#sendChatUpdate(chatId, true);
      }
    }
  }

  async #removeChat(chatId: number) {
    const [chat, listId] = this.#getChatAnywhere(chatId);
    if (chat !== undefined) {
      this.#getChatList(listId).delete(chatId);
      await this.#sendChatUpdate(chatId, false);
    }
  }
  async #handleUpdateFolderPeers(update: Api.updateFolderPeers) {
    for (const { peer, folder_id: listId } of update.folder_peers) {
      const chatId = peerToChatId(peer);
      const [chat, currentListId] = this.#getChatAnywhere(chatId);
      if (chat !== undefined && listId != currentListId) {
        this.#getChatList(currentListId).delete(chatId);
        this.#getChatList(listId).set(chatId, chat);
        await this.#sendChatUpdate(chatId, true);
      }
    }
  }
  async #handleUpdatePinnedDialogs(update: Api.updatePinnedDialogs) {
    const listId = update.folder_id ?? 0;
    await this.#fetchPinnedChats(update.folder_id);
    const chats = this.#getChatList(listId);
    const pinnedChats = await this.#getPinnedChats(listId);
    for (const [i, chatId] of pinnedChats.entries()) {
      const chat = chats.get(chatId);
      if (chat !== undefined) {
        chat.order = getChatListItemOrder(chat.lastMessage, i);
        chat.pinned = i;
        await this.#sendChatUpdate(chatId, false);
      }
    }
    for (const chat of chats.values()) {
      if (chat.pinned != -1 && pinnedChats.indexOf(chat.chat.id) == -1) {
        chat.order = getChatListItemOrder(chat.lastMessage, -1);
        chat.pinned = -1;
        await this.#sendChatUpdate(chat.chat.id, false);
      }
    }
    await this.#c.storage.setPinnedChats(listId, await this.#getPinnedChats(listId));
  }

  async #handleUpdateChannel(update: Api.updateChannel) {
    const peer: Api.peerChannel = { ...update, _: "peerChannel" };
    const channel = await this.#c.getEntity(peer);
    const chatId = peerToChatId(peer);
    await this.#c.storage.setFullChat(chatId, null);
    if (channel != null && "left" in channel && channel.left) {
      await this.#removeChat(chatId);
    } else if (is("channelForbidden", channel)) {
      await this.#removeChat(chatId);
    } else if (is("channel", channel)) {
      await this.#updateOrAddChat(chatId);
    }
  }

  async #handleUpdateChat(update: Api.updateChat) { // TODO: handle deactivated (migration)
    const peer: Api.peerChat = { ...update, _: "peerChat" };
    const chat = await this.#c.getEntity(peer);
    const chatId = peerToChatId(peer);
    await this.#c.storage.setFullChat(chatId, null);
    if (chat != null && "left" in chat && chat.left) {
      await this.#removeChat(chatId);
    } else if (is("chatForbidden", chat)) {
      await this.#removeChat(chatId);
    } else if (is("chat", chat)) {
      await this.#updateOrAddChat(chatId);
    }
  }

  async #handleUpdateUser(update: Api.updateUser | Api.updateUserName) {
    const peer: Api.peerUser = { ...update, _: "peerUser" };
    const chat = await this.#c.getEntity(peer);
    const chatId = peerToChatId(peer);
    await this.#c.storage.setFullChat(chatId, null);
    if (chat != null) {
      await this.#updateOrAddChat(chatId);
    }
  }

  async #fetchChats(listId: number, limit: number, after?: ChatListItem) {
    const dialogs = await this.#c.invoke({ _: "messages.getDialogs", limit, offset_id: after?.lastMessage?.id ?? 0, offset_date: after?.lastMessage?.date ? toUnixTimestamp(after.lastMessage.date) : 0, offset_peer: after ? await this.#c.getInputPeer(after.chat.id) : { _: "inputPeerEmpty" }, hash: 0n, folder_id: listId });
    const pinnedChats = await this.#getPinnedChats(listId);
    if (!(is("messages.dialogs", dialogs)) && !(is("messages.dialogsSlice", dialogs))) {
      unreachable();
    }
    if (dialogs.dialogs.length < limit) {
      await this.#c.storage.setHasAllChats(listId, true);
    }
    const chats = this.#getChatList(listId);
    for (const dialog of dialogs.dialogs) {
      const chat = await constructChatListItem4(dialog, dialogs, pinnedChats, this.#c.getEntity, this.#c.messageManager.getMessage.bind(this.#c.messageManager), this.#c.fileManager.getStickerSetName.bind(this.#c.messageManager));
      chats.set(chat.chat.id, chat);
      await this.#c.storage.setChat(listId, chat.chat.id, chat.pinned, chat.lastMessage?.id ?? 0, chat.lastMessage?.date ?? new Date(0));
    }
  }

  async getChats(from: "archived" | "main" = "main", after?: ChatListItem, limit = 100): Promise<ChatListItem[]> {
    await this.#c.storage.assertUser("getChats");
    if (!this.#chatsLoadedFromStorage) {
      await this.#loadChatsFromStorage();
    }
    if (after && !this.#chats.get(after.chat.id)) {
      throw new InputError("Invalid after");
    }
    if (limit <= 0 || limit > 100) {
      limit = 100;
    }
    const listId = getChatListId(from);
    let chats = this.#getLoadedChats(listId);
    if (after) {
      chats = chats
        .filter((v) => v.order < after!.order);
    }
    if (chats.length < limit) {
      this.#LgetChats.debug(`have only ${chats.length} chats but ${limit - chats.length} more is needed`);
      if (!await this.#c.storage.hasAllChats(listId)) {
        await this.#fetchChats(listId, limit, after);
        return await this.getChats(from, after, limit);
      }
    }
    chats = chats.slice(0, limit);
    return chats;
  }

  static canHandleUpdate(update: Api.Update): update is ChatListManagerUpdate {
    return isOneOf(chatListManagerUpdates, update);
  }

  async handleUpdate(update: ChatListManagerUpdate) {
    if (is("updateNewMessage", update) || is("updateNewChannelMessage", update) || is("updateEditMessage", update) || is("updateEditChannelMessage", update)) {
      if (is("message", update.message) || is("messageService", update.message)) {
        const chatId = peerToChatId(update.message.peer_id);
        await this.reassignChatLastMessage(chatId);
      }
    } else if (is("updatePinnedDialogs", update)) {
      await this.#handleUpdatePinnedDialogs(update);
    } else if (is("updateFolderPeers", update)) {
      await this.#handleUpdateFolderPeers(update);
    } else if (is("updateChannel", update)) {
      await this.#handleUpdateChannel(update);
    } else if (is("updateChat", update)) {
      await this.#handleUpdateChat(update);
    } else if (is("updateUser", update) || is("updateUserName", update)) {
      await this.#handleUpdateUser(update);
    } else {
      unreachable();
    }
  }

  async #getFullChat(chatId: ID) {
    const inputPeer = await this.#c.getInputPeer(chatId);
    const chatId_ = peerToChatId(inputPeer);
    let fullChat = await this.#c.storage.getFullChat(chatId_);
    if (fullChat != null) {
      return fullChat;
    }
    if (is("inputPeerUser", inputPeer)) {
      fullChat = (await this.#c.invoke({ _: "users.getFullUser", id: { ...inputPeer, _: "inputUser" } })).full_user;
    } else if (is("inputPeerChat", inputPeer)) {
      fullChat = (await this.#c.invoke({ ...inputPeer, _: "messages.getFullChat" })).full_chat;
    } else if (is("inputPeerChannel", inputPeer)) {
      fullChat = (await this.#c.invoke({ _: "channels.getFullChannel", channel: { ...inputPeer, _: "inputChannel" } })).full_chat;
    }
    await this.#c.storage.setFullChat(chatId_, fullChat);
    if (fullChat != null && "call" in fullChat && fullChat.call) {
      await this.#c.storage.setGroupCallAccessHash(fullChat.call.id, fullChat.call.access_hash);
    }
    return fullChat;
  }

  async getChat(chatId: ID) {
    const fullChat = await this.#getFullChat(chatId);
    if (fullChat == null) {
      throw new InputError("Chat not found.");
    }
    return await constructChat(fullChat, this.#c.getEntity);
  }

  async getChatAdministrators(chatId: ID) {
    const peer = await this.#c.getInputPeer(chatId);
    if (is("inputPeerChannel", peer)) {
      const channel: Api.inputChannel = { ...peer, _: "inputChannel" };
      const participants = await this.#c.invoke({ _: "channels.getParticipants", channel, filter: { _: "channelParticipantsAdmins" }, offset: 0, limit: 100, hash: 0n });
      if (is("channels.channelParticipantsNotModified", participants)) {
        unreachable();
      }
      const chatMembers = new Array<ChatMember>();
      for (const p of participants.participants) {
        chatMembers.push(await constructChatMember(p, this.#c.getEntity));
      }
      return chatMembers;
    } else if (is("inputPeerChat", peer)) {
      const fullChat = await this.#getFullChat(chatId);
      if (!fullChat || !("participants" in fullChat) || !is("chatParticipants", fullChat.participants)) {
        unreachable();
      }
      const chatMembers = new Array<ChatMember>();
      for (const p of fullChat.participants.participants) {
        chatMembers.push(await constructChatMember(p, this.#c.getEntity));
      }
      return chatMembers;
    } else {
      unreachable();
    }
  }
}
