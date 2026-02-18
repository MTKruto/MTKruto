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
import type { ChatP } from "./1_chat_p.ts";
import type { Message, MessageForumTopicCreated, MessageForumTopicEdited } from "./6_message.ts";

/** A forum topic. */
export interface Topic {
  /** The ID of the topic. */
  id: number;
  /** The point in time in which the topic was created. */
  date: number;
  /** The creator of the topic. */
  creator: ChatP;
  /** Whether this is the general topic. */
  isGeneral: boolean;
  /** Whether the topic is closed. */
  isClosed: boolean;
  /** Whether the topic is hidden. */
  isHidden: boolean;
  /** The name of the topic. */
  name: string;
  /** The color of the topic. */
  color: number;
  /** The icon of the topic. */
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
