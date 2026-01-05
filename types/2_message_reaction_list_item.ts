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
import { Api } from "../2_tl.ts";
import { constructReaction, type Reaction } from "./0_reaction.ts";
import { type ChatP, constructChatP } from "./1_chat_p.ts";

/** An item in a reaction list. */
export interface MessageReactionListItem {
  /** The entity that made the reaction. */
  chat: ChatP;
  /** The point in time in which the reaction was made. */
  date: number;
  /** The reaction that was made. */
  reaction: Reaction;
  /** Whether this is a big reaction. */
  big: boolean;
  /** Whether the reaction is unread. */
  unread: boolean;
  /** Whether the current user made this reaction. */
  isCreator: boolean;
}

export function constructMessageReactionListItem(messagePeerReaction: Api.MessagePeerReaction, list: Api.messages_MessageReactionsList): MessageReactionListItem {
  let chat_: Api.Chat | Api.User;
  const peerId = messagePeerReaction.peer_id;
  if (Api.is("peerChannel", peerId)) {
    chat_ = list.chats.find((v) => v.id === peerId.channel_id)!;
  } else if (Api.is("peerUser", peerId)) {
    chat_ = list.users.find((v) => v.id === peerId.user_id)!;
  } else {
    unreachable();
  }
  const chat = constructChatP(chat_);
  const date = messagePeerReaction.date;
  const reaction = constructReaction(messagePeerReaction.reaction);
  const big = !!messagePeerReaction.big;
  const isCreator = !!messagePeerReaction.my;
  const unread = !!messagePeerReaction.unread;
  return {
    chat,
    date,
    reaction,
    big,
    isCreator,
    unread,
  };
}
