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
import { cleanObject } from "../1_utilities.ts";
import { Api, chatIdToPeer, is, peerToChatId } from "../2_tl.ts";
import { EntityGetter } from "./_getters.ts";
import { ChatP, constructChatP } from "./1_chat_p.ts";
import { StickerSetNameGetter } from "./1_sticker.ts";
import { constructMessage, Message, MessageGetter } from "./4_message.ts";

export interface ChatListItem {
  chat: ChatP;
  order: string;
  pinned: number;
  lastMessage?: Omit<Message, "replyToMessage">;
}

export function getChatListItemOrder(lastMessage: Omit<Message, "replyToMessage"> | undefined, pinned: number): string {
  const p = pinned == -1 ? "" : `P${100 - pinned}`;
  if (!lastMessage) {
    return p + "0";
  }
  return p + String((BigInt(Math.floor(lastMessage.date.getTime())) << 32n) + BigInt(lastMessage.id));
}

export async function constructChatListItem(chatId: number, pinned: number, lastMessageId: number, getEntity: EntityGetter, getMessage: MessageGetter): Promise<ChatListItem | null> {
  const entity = await getEntity(chatIdToPeer(chatId));
  if (entity == null) {
    return null;
  }

  const lastMessage_ = lastMessageId > 0 ? await getMessage(chatId, lastMessageId) : null;
  const lastMessage = lastMessage_ == null ? undefined : lastMessage_;

  return cleanObject({
    chat: constructChatP(entity),
    order: getChatListItemOrder(lastMessage, pinned),
    pinned,
    lastMessage,
  });
}

export function constructChatListItem2(entity: Api.user | Api.chat | Api.chatForbidden | Api.channel | Api.channelForbidden, pinned: number, lastMessage: Omit<Message, "replyToMessage"> | undefined): ChatListItem {
  return cleanObject({
    chat: constructChatP(entity),
    order: getChatListItemOrder(lastMessage, pinned),
    pinned,
    lastMessage,
  });
}

export async function constructChatListItem3(chatId: number, pinned: number, lastMessage: Omit<Message, "replyToMessage"> | undefined, getEntity: EntityGetter): Promise<ChatListItem | null> {
  const entity = await getEntity(chatIdToPeer(chatId));
  if (entity == null) {
    return null;
  }
  return cleanObject({
    chat: constructChatP(entity),
    order: getChatListItemOrder(lastMessage, pinned),
    pinned,
    lastMessage,
  });
}

export async function constructChatListItem4(dialog: Api.Dialog, dialogs: Api.messages_dialogs | Api.messages_dialogsSlice, pinnedChats: number[], getEntity: EntityGetter, getMessage: MessageGetter, getStickerSetName: StickerSetNameGetter): Promise<ChatListItem> {
  const topMessage_ = dialogs.messages.find((v) => "id" in v && v.id == dialog.top_message);
  if (!topMessage_) {
    unreachable();
  }
  const pinned = pinnedChats.indexOf(peerToChatId(dialog.peer));
  const lastMessage = await constructMessage(topMessage_, getEntity, getMessage, getStickerSetName, false);
  const order = getChatListItemOrder(lastMessage, pinned);
  const userId = "user_id" in dialog.peer ? dialog.peer.user_id : null;
  const chatId = "chat_id" in dialog.peer ? dialog.peer.chat_id : null;
  const channelId = "channel_id" in dialog.peer ? dialog.peer.channel_id : null;
  const chat__ = chatId != null ? dialogs.chats.find((v) => is("chat", v) && v.id == chatId) : channelId != null ? dialogs.chats.find((v) => is("channel", v) && v.id == channelId) : userId != null ? dialogs.users.find((v) => is("user", v) && v.id == userId) : unreachable();
  if (!chat__) {
    unreachable();
  }
  return cleanObject({
    chat: constructChatP(chat__ as Api.user | Api.channel | Api.chat),
    order,
    lastMessage,
    pinned,
  });
}
