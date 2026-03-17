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
import type { Api } from "../2_tl.ts";
import { chatIdToPeer, peerToChatId } from "../tl/2_telegram.ts";
import { type ChatActionType, constructChatActionType } from "./0_chat_action_type.ts";
import type { ChatP, PeerGetter } from "./1_chat_p.ts";

/** A sign of a possible action by a member of a conversation. */
export interface ChatAction {
  /** The type of the action. */
  type: ChatActionType;
  /** The chat in which the action was made. */
  chat: ChatP;
  /** The sender of the action. */
  from: ChatP;
  /** The identifier of a thread in which the action was made. */
  messageThreadId?: number;
}

export function constructChatAction(update: Api.updateUserTyping | Api.updateChatUserTyping | Api.updateChannelUserTyping, getPeer: PeerGetter): ChatAction | null {
  const type = constructChatActionType(update.action);
  if (type === null) {
    return null;
  }

  const chat = getPeer(chatIdToPeer(peerToChatId(update)))?.[0];
  if (!chat) {
    unreachable();
  }
  const from = getPeer("user_id" in update ? { _: "peerUser", user_id: update.user_id } : update.from_id)?.[0];
  if (!from) {
    unreachable();
  }

  const messageThreadId = "top_msg_id" in update ? update.top_msg_id : undefined;

  return cleanObject({ type, from, chat, messageThreadId });
}
