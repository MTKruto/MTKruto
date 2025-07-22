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

import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { constructReaction, Reaction } from "./0_reaction.ts";
import { PeerGetter } from "./1_chat_p.ts";
import { ChatP } from "./1_chat_p.ts";
import { constructUser2, User } from "./2_user.ts";

/** The reactions of a user to a messages in a group. */
export interface MessageReactions {
  /** The chat containing the message the user reacted to. */
  chat: ChatP;
  /** The message's identifier. */
  messageId: number;
  /** The user who changed their reactions to the message. Unset if done on behalf of a chat. */
  user?: User;
  /** The chat that changed its reactions to the message. Unset if done on behalf of a user. */
  actorChat?: ChatP;
  /** The point in time in which the change was made. */
  date: number;
  /** The previous reactions. */
  oldReactions: Reaction[];
  /** The current reactions. */
  newReactions: Reaction[];
}

export function constructMessageReactions(update: Api.updateBotMessageReaction, getPeer: PeerGetter): MessageReactions | null {
  const date = update.date;
  const oldReactions = update.old_reactions.map((v) => constructReaction(v));
  const newReactions = update.new_reactions.map((v) => constructReaction(v));
  const messageId = update.msg_id;

  let peer = getPeer(update.peer);
  if (!peer) {
    return null;
  }
  const chat = peer[0];

  let user: User | undefined = undefined;
  let actorChat: ChatP | undefined = undefined;

  peer = getPeer(update.actor);
  if (!peer) {
    return null;
  }
  if (peer[0].type === "private") {
    user = constructUser2(peer[0]);
  } else {
    actorChat = peer[0];
  }

  return cleanObject({
    chat,
    messageId,
    user,
    actorChat,
    date,
    oldReactions,
    newReactions,
  });
}
