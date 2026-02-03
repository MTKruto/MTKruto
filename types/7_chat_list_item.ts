/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
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
import { Api } from "../2_tl.ts";
import { type ChatP, constructChatP, type PeerGetter } from "./1_chat_p.ts";
import type { StickerSetNameGetter } from "./1_sticker.ts";
import { constructMessage, type Message, type MessageGetter } from "./6_message.ts";

export interface ChatListItem {
  chat: ChatP;
  lastMessage?: Omit<Message, "replyToMessage">;
}

export async function constructChatListItem(dialog: Api.Dialog, dialogs: Api.messages_dialogs | Api.messages_dialogsSlice | Api.messages_peerDialogs, getPeer: PeerGetter, getMessage: MessageGetter, getStickerSetName: StickerSetNameGetter): Promise<ChatListItem> {
  const topMessage_ = dialogs.messages.find((v) => "id" in v && v.id === dialog.top_message);
  const lastMessage = topMessage_ ? await constructMessage(topMessage_, getPeer, getMessage, getStickerSetName, false) : undefined;
  const userId = "user_id" in dialog.peer ? dialog.peer.user_id : null;
  const chatId = "chat_id" in dialog.peer ? dialog.peer.chat_id : null;
  const channelId = "channel_id" in dialog.peer ? dialog.peer.channel_id : null;
  const chat__ = chatId !== null ? dialogs.chats.find((v) => Api.is("chat", v) && v.id === chatId) : channelId !== null ? dialogs.chats.find((v) => Api.isOneOf(["channel", "channelForbidden"], v) && v.id === channelId) : userId !== null ? dialogs.users.find((v) => Api.is("user", v) && v.id === userId) : unreachable();
  if (!chat__) {
    unreachable();
  }
  return cleanObject({
    chat: constructChatP(chat__),
    lastMessage,
  });
}
