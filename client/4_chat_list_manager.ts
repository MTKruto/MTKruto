/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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
import { fromUnixTimestamp } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { type ChatListItem, type ChatMember, type ChatP, type ChatPChannel, type ChatPSupergroup, constructChat, constructChatListItem, constructChatListItem3, constructChatListItem4, constructChatMember, constructChatP, constructChatSettings, getChatListItemOrder, type ID } from "../3_types.ts";
import type { CreateChannelParams, CreateGroupParams, CreateSupergroupParams, GetChatMembersParams, GetCommonChatsParams } from "./0_params.ts";
import type { UpdateProcessor } from "./0_update_processor.ts";
import { canBeInputChannel, canBeInputUser, getChatListId, getLimit, toInputChannel, toInputUser } from "./0_utilities.ts";
import type { C as C_ } from "./1_types.ts";
import type { FileManager } from "./2_file_manager.ts";
import type { MessageManager } from "./3_message_manager.ts";

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

export class ChatListManager implements UpdateProcessor<ChatListManagerUpdate, true> {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  #sendChatUpdate(chatId: number, added: boolean) {
    try {
      this.#c.storage.assertUser("");
    } catch {
      return;
    }
    const [chat] = this.#getChatAnywhere(chatId);
    const update = chat === undefined ? { deletedChat: { chatId } } : added ? { newChat: chat } : { editedChat: chat };
    this.#c.handleUpdate(update);
  }

  async reassignChatLastMessage(chatId: number, add = false, sendUpdate = true) {
    try {
      this.#c.storage.assertUser("");
    } catch {
      return () => Promise.resolve();
    }
    const [chat, listId] = this.#getChatAnywhere(chatId);
    if (!chat && !add) {
      return () => Promise.resolve();
    }

    const message_ = await this.#c.messageStorage.getLastMessage(chatId);
    if (message_ !== null) {
      const message = await this.#c.messageManager.constructMessage(message_);
      if (chat) {
        chat.order = getChatListItemOrder(message, chat.pinned);
        chat.lastMessage = message;
        await this.#c.storage.setChatlistChat(listId, chatId, chat.pinned, message.id, fromUnixTimestamp(message.date));
      } else {
        const pinnedChats = await this.#getPinnedChats(listId);
        const chat = constructChatListItem3(chatId, pinnedChats.indexOf(chatId), message, this.#c.getPeer);
        if (chat == null) {
          unreachable();
        }
        this.#chats.set(chatId, chat);
        await this.#c.storage.setChatlistChat(listId, chatId, chat.pinned, chat.lastMessage?.id ?? 0, fromUnixTimestamp(chat.lastMessage?.date ?? 0));
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
        await this.#c.storage.setChatlistChat(listId, chatId, chat.pinned, message.id, fromUnixTimestamp(message.date));
      } else {
        const pinnedChats = await this.#getPinnedChats(listId);
        const chat = constructChatListItem3(chatId, pinnedChats.indexOf(chatId), message, this.#c.getPeer);
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

  #pinnedChats = new Array<number>();
  #pinnedArchiveChats = new Array<number>();
  #storageHadPinnedChats = false;
  #pinnedChatsLoaded = false;
  async #loadPinnedChats() {
    const [pinnedChats, pinnedArchiveChats] = await Promise.all([this.#c.storage.getPinnedChats(0), this.#c.storage.getPinnedChats(1)]);
    if (pinnedChats !== null && pinnedArchiveChats !== null) {
      this.#pinnedChats = pinnedChats;
      this.#pinnedArchiveChats = pinnedArchiveChats;
      this.#storageHadPinnedChats = true;
    }
    this.#pinnedChatsLoaded = true;
  }
  async #fetchPinnedChats(listId: number | null = null) {
    if (listId === null || listId === 0) {
      const dialogs = await this.#c.invoke({ _: "messages.getPinnedDialogs", folder_id: 0 });
      const pinnedChats = new Array<number>();
      for (const dialog of dialogs.dialogs) {
        pinnedChats.push(Api.peerToChatId(dialog.peer));
      }
      this.#pinnedChats = pinnedChats;
      await this.#c.storage.setPinnedChats(0, this.#pinnedChats);
    }
    if (listId === null || listId === 1) {
      const dialogs = await this.#c.invoke({ _: "messages.getPinnedDialogs", folder_id: 1 });
      const pinnedArchiveChats = new Array<number>();
      for (const dialog of dialogs.dialogs) {
        pinnedArchiveChats.push(Api.peerToChatId(dialog.peer));
      }
      this.#pinnedArchiveChats = pinnedArchiveChats;
      await this.#c.storage.setPinnedChats(1, this.#pinnedArchiveChats);
    }
    if (listId !== null && listId !== 0 && listId !== 1) {
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
      const newChat = constructChatListItem3(chatId, chat.pinned, chat.lastMessage, this.#c.getPeer);
      if (newChat != null) {
        this.#getChatList(listId).set(chatId, newChat);
        this.#sendChatUpdate(chatId, false);
      }
    } else {
      const chat = await constructChatListItem(chatId, -1, -1, this.#c.getPeer, this.#c.messageManager.getMessage.bind(this.#c.messageManager));
      if (chat != null) {
        this.#getChatList(0).set(chatId, chat);
        await this.reassignChatLastMessage(chatId, false, false);
        this.#sendChatUpdate(chatId, true);
      }
    }
  }

  #removeChat(chatId: number) {
    const [chat, listId] = this.#getChatAnywhere(chatId);
    if (chat !== undefined) {
      this.#getChatList(listId).delete(chatId);
      this.#sendChatUpdate(chatId, false);
    }
  }
  #handleUpdateFolderPeers(update: Api.updateFolderPeers) {
    for (const { peer, folder_id: listId } of update.folder_peers) {
      const chatId = Api.peerToChatId(peer);
      const [chat, currentListId] = this.#getChatAnywhere(chatId);
      if (chat !== undefined && listId !== currentListId) {
        this.#getChatList(currentListId).delete(chatId);
        this.#getChatList(listId).set(chatId, chat);
        this.#sendChatUpdate(chatId, true);
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
      if (chat.pinned !== -1 && pinnedChats.indexOf(chat.chat.id) === -1) {
        chat.order = getChatListItemOrder(chat.lastMessage, -1);
        chat.pinned = -1;
        await this.#sendChatUpdate(chat.chat.id, false);
      }
    }
    await this.#c.storage.setPinnedChats(listId, await this.#getPinnedChats(listId));
  }

  async #handleUpdateChannel(update: Api.updateChannel) {
    const peer: Api.peerChannel = { ...update, _: "peerChannel" };
    const channel = await this.#c.getPeer(peer);
    const chatId = Api.peerToChatId(peer);
    await this.#c.storage.setFullChat(chatId, null);
    if (channel !== null && "left" in channel && channel.left) {
      this.#removeChat(chatId);
    } else if (Api.is("channelForbidden", channel)) {
      this.#removeChat(chatId);
    } else if (Api.is("channel", channel)) {
      await this.#updateOrAddChat(chatId);
    }
  }

  async #handleUpdateChat(update: Api.updateChat) { // TODO: handle deactivated (migration)
    const peer: Api.peerChat = { ...update, _: "peerChat" };
    const chat = await this.#c.getPeer(peer);
    const chatId = Api.peerToChatId(peer);
    await this.#c.storage.setFullChat(chatId, null);
    if (chat !== null && "left" in chat && chat.left) {
      await this.#removeChat(chatId);
    } else if (Api.is("chatForbidden", chat)) {
      await this.#removeChat(chatId);
    } else if (Api.is("chat", chat)) {
      await this.#updateOrAddChat(chatId);
    }
  }

  async #handleUpdateUser(update: Api.updateUser | Api.updateUserName) {
    const peer: Api.peerUser = { ...update, _: "peerUser" };
    const chat = await this.#c.getPeer(peer);
    const chatId = Api.peerToChatId(peer);
    await this.#c.storage.setFullChat(chatId, null);
    if (chat !== null) {
      await this.#updateOrAddChat(chatId);
    }
  }

  async getChats(from: "archived" | "main" = "main", after?: ChatListItem, limit = 100): Promise<ChatListItem[]> {
    this.#c.storage.assertUser("getChats");
    if (after && !this.#chats.get(after.chat.id)) {
      throw new InputError("Invalid after");
    }
    if (limit <= 0 || limit > 100) {
      limit = 100;
    }
    const listId = getChatListId(from);
    const dialogs = await this.#c.invoke({ _: "messages.getDialogs", limit, offset_id: after?.lastMessage?.id ?? 0, offset_date: after?.lastMessage?.date ?? 0, offset_peer: after ? await this.#c.getInputPeer(after.chat.id) : { _: "inputPeerEmpty" }, hash: 0n, folder_id: listId });
    const pinnedChats = await this.#getPinnedChats(listId);
    if (!(Api.is("messages.dialogs", dialogs)) && !(Api.is("messages.dialogsSlice", dialogs))) {
      unreachable();
    }
    if (dialogs.dialogs.length < limit) {
      await this.#c.storage.setHasAllChats(listId, true);
    }
    const chats = new Array<ChatListItem>();
    for (const dialog of dialogs.dialogs) {
      const chat = await constructChatListItem4(dialog, dialogs, pinnedChats, this.#c.getPeer, this.#c.messageManager.getMessage.bind(this.#c.messageManager), this.#c.fileManager.getStickerSetName.bind(this.#c.fileManager));
      chats.push(chat);
      await this.#c.storage.setChatlistChat(listId, chat.chat.id, chat.pinned, chat.lastMessage?.id ?? 0, fromUnixTimestamp(chat.lastMessage?.date ?? 0));
    }
    return chats;
  }

  canHandleUpdate(update: Api.Update): update is ChatListManagerUpdate {
    return Api.isOneOf(chatListManagerUpdates, update);
  }

  async handleUpdate(update: ChatListManagerUpdate) {
    if (Api.is("updateNewMessage", update) || Api.is("updateNewChannelMessage", update) || Api.is("updateEditMessage", update) || Api.is("updateEditChannelMessage", update)) {
      if (Api.is("message", update.message) || Api.is("messageService", update.message)) {
        const chatId = Api.peerToChatId(update.message.peer_id);
        await this.reassignChatLastMessage(chatId);
      }
    } else if (Api.is("updatePinnedDialogs", update)) {
      await this.#handleUpdatePinnedDialogs(update);
    } else if (Api.is("updateFolderPeers", update)) {
      this.#handleUpdateFolderPeers(update);
    } else if (Api.is("updateChannel", update)) {
      await this.#handleUpdateChannel(update);
    } else if (Api.is("updateChat", update)) {
      await this.#handleUpdateChat(update);
    } else if (Api.is("updateUser", update) || Api.is("updateUserName", update)) {
      await this.#handleUpdateUser(update);
    } else {
      unreachable();
    }
    return null;
  }

  async #getFullChat(chatId: ID) {
    const inputPeer = await this.#c.getInputPeer(chatId);
    const chatId_ = await this.#c.getInputPeerChatId(inputPeer);
    let fullChat = await this.#c.storage.getFullChat(chatId_);
    if (fullChat !== null) {
      return fullChat;
    }
    if (canBeInputUser(inputPeer)) {
      fullChat = (await this.#c.invoke({ _: "users.getFullUser", id: toInputUser(inputPeer) })).full_user;
    } else if (Api.is("inputPeerChat", inputPeer)) {
      fullChat = (await this.#c.invoke({ ...inputPeer, _: "messages.getFullChat" })).full_chat;
    } else if (canBeInputChannel(inputPeer)) {
      fullChat = (await this.#c.invoke({ _: "channels.getFullChannel", channel: toInputChannel(inputPeer) })).full_chat;
    }
    await this.#c.storage.setFullChat(chatId_, fullChat);
    if (fullChat !== null && "call" in fullChat && Api.is("inputGroupCall", fullChat.call)) {
      await this.#c.storage.setGroupCallAccessHash(fullChat.call.id, fullChat.call.access_hash);
    }
    return fullChat;
  }

  async getChat(chatId: ID) {
    const fullChat = await this.#getFullChat(chatId);
    if (fullChat === null) {
      throw new InputError("Chat not found.");
    }
    return constructChat(fullChat, this.#c.getPeer);
  }

  async getChatAdministrators(chatId: ID) {
    const peer = await this.#c.getInputPeer(chatId);
    if (canBeInputChannel(peer)) {
      const channel: Api.inputChannel | Api.inputChannelFromMessage = toInputChannel(peer);
      const participants = await this.#c.invoke({ _: "channels.getParticipants", channel, filter: { _: "channelParticipantsAdmins" }, offset: 0, limit: 100, hash: 0n });
      if (Api.is("channels.channelParticipantsNotModified", participants)) {
        unreachable();
      }
      const chatMembers = new Array<ChatMember>();
      for (const p of participants.participants) {
        chatMembers.push(constructChatMember(p, this.#c.getPeer));
      }
      return chatMembers;
    } else if (Api.is("inputPeerChat", peer)) {
      const fullChat = await this.#getFullChat(chatId);
      if (!fullChat || !("participants" in fullChat) || !Api.is("chatParticipants", fullChat.participants)) {
        unreachable();
      }
      const chatMembers = new Array<ChatMember>();
      for (const p of fullChat.participants.participants) {
        chatMembers.push(constructChatMember(p, this.#c.getPeer));
      }
      return chatMembers;
    } else {
      unreachable();
    }
  }

  async getChatMember(chatId: ID, userId: ID) {
    const peer = await this.#c.getInputPeer(chatId);

    if (canBeInputChannel(peer)) {
      const { participant } = await this.#c.invoke({ _: "channels.getParticipant", channel: toInputChannel(peer), participant: await this.#c.getInputPeer(userId) });
      return constructChatMember(participant, this.#c.getPeer);
    } else if (Api.is("inputPeerChat", peer)) {
      const user = await this.#c.getInputUser(userId);
      const userId_ = BigInt(await this.#c.getInputPeerChatId(user));
      const fullChat = await this.#c.invoke({ ...peer, _: "messages.getFullChat" }).then((v) => Api.as("chatFull", v.full_chat));
      const participant = Api.as("chatParticipants", fullChat.participants).participants.find((v) => v.user_id == userId_)!;
      return constructChatMember(participant, this.#c.getPeer);
    } else {
      throw new InputError("Expected a channel, supergroup, or group ID. Got a user ID instead.");
    }
  }

  async getChatMembers(chatId: ID, params?: GetChatMembersParams) {
    const peer = await this.#c.getInputPeer(chatId);
    if (canBeInputChannel(peer)) {
      const channel: Api.inputChannel | Api.inputChannelFromMessage = toInputChannel(peer);
      const participants = await this.#c.invoke({ _: "channels.getParticipants", channel, filter: { _: "channelParticipantsRecent" }, offset: params?.offset ?? 0, limit: getLimit(params?.limit), hash: 0n });
      if (Api.is("channels.channelParticipantsNotModified", participants)) {
        unreachable();
      }
      const chatMembers = new Array<ChatMember>();
      for (const p of participants.participants) {
        chatMembers.push(constructChatMember(p, this.#c.getPeer));
      }
      return chatMembers;
    } else if (Api.is("inputPeerChat", peer)) {
      const fullChat = await this.#getFullChat(chatId);
      if (!fullChat || !("participants" in fullChat) || !Api.is("chatParticipants", fullChat.participants)) {
        unreachable();
      }
      const chatMembers = new Array<ChatMember>();
      for (const p of fullChat.participants.participants) {
        chatMembers.push(constructChatMember(p, this.#c.getPeer));
      }
      return chatMembers;
    } else {
      unreachable();
    }
  }

  #checkChatTitle(title: string) {
    title = title.trim();
    if (!title) {
      throw new InputError("Title cannot be empty.");
    }
    return title;
  }

  async createGroup(title: string, params?: CreateGroupParams) {
    this.#c.storage.assertUser("createGroup");
    title = this.#checkChatTitle(title);
    const { updates } = await this.#c.invoke({
      _: "messages.createChat",
      title,
      users: await Promise.all((params?.users ?? []).map((v) => this.#c.getInputUser(v))),
      ttl_period: params?.messageTtl || undefined,
    });
    if (!("chats" in updates) || updates.chats.length < 1) {
      unreachable();
    }
    const chat = updates.chats[0];
    if (chat._ !== "chat") {
      unreachable();
    }
    return constructChatP(chat);
  }

  async #createChannel(type: "channel" | "supergroup", title: string, params?: CreateSupergroupParams | CreateChannelParams) {
    title = this.#checkChatTitle(title);
    const updates = await this.#c.invoke({
      _: "channels.createChannel",
      broadcast: type === "channel" ? true : undefined,
      megagroup: type === "supergroup" ? true : undefined,
      forum: params && ("forum" in params) && params.forum ? true : undefined,
      title,
      about: params?.description || "",
      ttl_period: params?.messageTtl || undefined,
    });
    if (!("chats" in updates) || updates.chats.length < 1) {
      unreachable();
    }
    const chat = updates.chats[0];
    if (chat._ !== "channel") {
      unreachable();
    }
    return constructChatP(chat);
  }

  async createSupergroup(title: string, params?: CreateSupergroupParams) {
    this.#c.storage.assertUser("createSupergroup");
    return (await this.#createChannel("supergroup", title, params)) as ChatPSupergroup;
  }

  async createChannel(title: string, params?: CreateChannelParams) {
    this.#c.storage.assertUser("createChannel");
    return (await this.#createChannel("channel", title, params)) as ChatPChannel;
  }

  async setMessageTtl(chatId: ID, messageTtl: number) {
    this.#c.storage.assertUser("setMessageTtl");
    const peer = await this.#c.getInputPeer(chatId);
    const period = messageTtl;
    await this.#c.invoke({ _: "messages.setHistoryTTL", peer, period });
  }

  async #moveChatsToFolder(chatIds: ID[], folderId: number) {
    const peers = await Promise.all(chatIds.map((v) => this.#c.getInputPeer(v)));
    const inputFolderPeers: Api.inputFolderPeer[] = peers.map((v) => ({ _: "inputFolderPeer", peer: v, folder_id: folderId }));
    await this.#c.invoke({ _: "folders.editPeerFolders", folder_peers: inputFolderPeers });
  }

  async archiveChats(chatIds: ID[]) {
    this.#c.storage.assertUser("archiveChats");
    await this.#moveChatsToFolder(chatIds, 1);
  }

  async archiveChat(chatId: ID) {
    this.#c.storage.assertUser("archiveChat");
    await this.archiveChats([chatId]);
  }

  async unarchiveChats(chatIds: ID[]) {
    this.#c.storage.assertUser("unarchiveChats");
    await this.#moveChatsToFolder(chatIds, 0);
  }

  async unarchiveChat(chatId: ID) {
    this.#c.storage.assertUser("unarchiveChat");
    await this.unarchiveChats([chatId]);
  }

  async getCommonChats(userId: ID, params?: GetCommonChatsParams) {
    this.#c.storage.assertUser("getCommonChats");
    const max_id = params?.fromChatId ? await this.#c.getInputPeerChatId(await this.#c.getInputPeer(params.fromChatId)) : 0;
    if (max_id < 0) {
      throw new InputError("fromChatId must be a chat identifier.");
    }
    const user_id = await this.#c.getInputUser(userId);
    const limit = getLimit(params?.limit);
    const result = await this.#c.invoke({ _: "messages.getCommonChats", user_id, max_id: Api.chatIdToPeerId(max_id), limit });
    const chats = new Array<ChatP>();
    for (const chat of result.chats) {
      if (!Api.is("chatEmpty", chat)) {
        chats.push(constructChatP(chat));
      }
    }
    return chats;
  }

  async getChatSettings(chatId: ID) {
    this.#c.storage.assertUser("getChatSettings");
    const peer = await this.#c.getInputPeer(chatId);
    const settings = await this.#c.invoke({ _: "messages.getPeerSettings", peer });
    return constructChatSettings(settings);
  }

  async #toggleBusinessBotsPaused(chatId: ID, paused: boolean) {
    const peer = await this.#c.getInputPeer(chatId);
    if (!canBeInputUser(peer)) {
      throw new InputError("A private chat was expected.");
    }
    await this.#c.invoke({ _: "account.toggleConnectedBotPaused", peer, paused });
  }

  async disableBusinessBots(chatId: ID) {
    this.#c.storage.assertUser("disableBusinessBots");
    await this.#toggleBusinessBotsPaused(chatId, true);
  }

  async enableBusinessBots(chatId: ID) {
    this.#c.storage.assertUser("enableBusinessBots");
    await this.#toggleBusinessBotsPaused(chatId, false);
  }
}
