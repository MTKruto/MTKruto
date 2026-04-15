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

import { cleanObject } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";
import { peerToChatId } from "../tl/2_telegram.ts";
import { type ChatActionType, constructChatActionType } from "./0_chat_action_type.ts";

/** A sign of a possible action by a member of a conversation. */
export interface ChatAction {
  /** The type of the action. */
  type: ChatActionType;
  /** The identifier of the chat where the action was made. */
  chatId: number;
  /** The identifier of the sender of the action. */
  fromId: number;
  /** The identifier of a thread where the action was made. */
  messageThreadId?: number;
}

export function constructChatAction(update: Api.updateUserTyping | Api.updateChatUserTyping | Api.updateChannelUserTyping): ChatAction | null {
  const type = constructChatActionType(update.action);
  if (type === null) {
    return null;
  }

  const chatId = peerToChatId(update);
  const fromId = peerToChatId("user_id" in update ? { _: "peerUser", user_id: update.user_id } : update.from_id);

  const messageThreadId = "top_msg_id" in update ? update.top_msg_id : undefined;

  return cleanObject({ type, chatId, fromId, messageThreadId });
}
