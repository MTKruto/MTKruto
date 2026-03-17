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
import { Api } from "../2_tl.ts";
import { peerToChatId } from "../tl/2_telegram.ts";
import { constructMessageEntity, type MessageEntity } from "./2_message_entity.ts";

/** A message draft. */
export interface MessageDraft {
  /** The ID of the draft. */
  id: string;
  /** The identifier of the bot which sent the message draft. */
  fromId: number;
  /** The draft's text. */
  text: string;
  /** The draft text's entities. */
  entities: MessageEntity[];
  /** The identifier of a thread in which the draft was sent. */
  messageThreadId?: number;
}

export function constructMessageDraft(action: Api.updateUserTyping): MessageDraft | null {
  if (!Api.is("sendMessageTextDraftAction", action.action)) {
    return null;
  }

  const fromId = peerToChatId(action);

  const id = String(action.action.random_id);
  const text = action.action.text.text;
  const entities = action.action.text.entities.map((v) => constructMessageEntity(v)).filter((v) => v !== null);
  const messageThreadId = action.top_msg_id;

  return cleanObject({
    id,
    fromId,
    text,
    entities,
    messageThreadId,
  });
}
