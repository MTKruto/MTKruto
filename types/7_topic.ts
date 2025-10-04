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
import type { ChatP } from "./1_chat_p.ts";
import type { Message, MessageForumTopicCreated, MessageForumTopicEdited } from "./6_message.ts";

export interface Topic {
  id: number;
  date: number;
  creator: ChatP;
  isGeneral: boolean;
  isClosed: boolean;
  isHidden: boolean;
  name: string;
  color: number;
  customEmojiId?: string;
}

export function constructTopic(message: Message): Topic {
  let forumTopicCreated: MessageForumTopicCreated | undefined;
  let forumTopicEdited: MessageForumTopicEdited | undefined;
  if ("forumTopicCreated" in message) {
    forumTopicCreated = message;
  } else if (message.replyToMessage && "forumTopicCreated" in message.replyToMessage) {
    forumTopicCreated = message.replyToMessage;
  } else {
    unreachable();
  }
  if ("forumTopicEdited" in message) {
    forumTopicEdited = message;
  }
  const id = forumTopicCreated.id;
  const date = forumTopicCreated.date;
  const creator = forumTopicCreated.from ? forumTopicCreated.from : message.from;
  const isGeneral = forumTopicCreated.id === 1;
  const isClosed = false;
  const isHidden = false;
  let name = forumTopicCreated.forumTopicCreated.name;
  const color = forumTopicCreated.forumTopicCreated.color;
  let customEmoijId = forumTopicCreated.forumTopicCreated.customEmojiId;
  if (forumTopicEdited) {
    name = forumTopicEdited.forumTopicEdited.name;
    customEmoijId = forumTopicEdited.forumTopicEdited.customEmojiId;
  }
  return cleanObject({
    id,
    date,
    creator: creator!,
    isGeneral,
    isClosed,
    isHidden,
    name,
    color,
    customEmoijId,
  });
}
