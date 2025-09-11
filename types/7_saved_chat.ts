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

import { Api } from "../2_tl.ts";
import type { SavedDialog } from "../tl/1_telegram_api.ts";
import { peerToChatId } from "../tl/2_telegram.ts";
import { type ChatP, constructChatP, type PeerGetter } from "./1_chat_p.ts";
import type { StickerSetNameGetter } from "./1_sticker.ts";
import { constructMessage, type Message, type MessageGetter } from "./6_message.ts";
import { unreachable } from "jsr:@std/assert@1.0.13/unreachable";

/** Information on a saved chat. */
export interface SavedChat {
  /** The chat. */
  chat: ChatP;
  /** The chat's last saved message. */
  lastMessage: Message;
  /** Whether the chat is pinned. */
  pinned: boolean;
}

export async function constructSavedChat(dialog: SavedDialog, result: Api.messages_savedDialogs | Api.messages_savedDialogsSlice, getPeer: PeerGetter, getMessage: MessageGetter, getStickerSetName: StickerSetNameGetter): Promise<SavedChat> {
  const message = result.messages.find((v) => v.id === dialog.top_message);
  if (message === undefined) {
    unreachable();
  }
  const dialogId = peerToChatId(dialog.peer);
  const chat_ = (dialog.peer._ === "peerUser" ? result.users : result.chats).find((v) => peerToChatId(v) === dialogId);
  if (chat_ === undefined || Api.isOneOf(["userEmpty", "chatEmpty"], chat_)) {
    unreachable();
  }
  const chat = constructChatP(chat_);
  const lastMessage = await constructMessage(message, getPeer, getMessage, getStickerSetName, false);
  const pinned = "pinned" in dialog ? !!dialog.pinned : false;
  return {
    chat,
    lastMessage,
    pinned,
  };
}
