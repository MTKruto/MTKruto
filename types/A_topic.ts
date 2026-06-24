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
import type { ChatP, PeerGetter } from "./1_chat_p.ts";
import type { Message, MessageForumTopicCreated, MessageForumTopicEdited } from "./9_message.ts";

/**
 * An active forum topic.
 * @unlisted
 */
export interface TopicActive {
  type: "active";
  /** The ID of the topic. */
  id: number;
  /** The point in time when the topic was created. */
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

/**
 * An active forum topic.
 * @unlisted
 */
export interface TopicDeleted {
  type: "deleted";
  /** The ID of the topic. */
  id: number;
}

/** Any type of forum topic. */
export type Topic = TopicActive | TopicDeleted;

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
  let customEmojiId = forumTopicCreated.forumTopicCreated.customEmojiId;
  if (forumTopicEdited) {
    name = forumTopicEdited.forumTopicEdited.name;
    customEmojiId = forumTopicEdited.forumTopicEdited.customEmojiId;
  }
  return cleanObject({
    type: "active",
    id,
    date,
    creator: creator!,
    isGeneral,
    isClosed,
    isHidden,
    name,
    color,
    customEmojiId,
    isDeleted: false,
  });
}

export function constructTopic2(ft: Api.ForumTopic, getPeer: PeerGetter): Topic {
  if (Api.is("forumTopicDeleted", ft)) {
    return {
      type: "deleted",
      id: ft.id,
    };
  }
  const peer = getPeer(ft.from_id);
  if (peer === null) {
    unreachable();
  }

  const id = ft.id;
  const date = ft.date;
  const creator = peer[0];
  const isGeneral = id === 1;
  const isClosed = !!ft.closed;
  const isHidden = !!ft.hidden;
  const name = ft.title;
  const color = ft.icon_color;
  const customEmojiId = ft.icon_emoji_id ? String(ft.icon_emoji_id) : undefined;
  return cleanObject({
    type: "active",
    id,
    date,
    creator,
    isGeneral,
    isClosed,
    isHidden,
    name,
    color,
    customEmojiId,
    isDeleted: false,
  });
}
