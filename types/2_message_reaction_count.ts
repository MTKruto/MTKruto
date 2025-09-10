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

import type { Api } from "../2_tl.ts";
import type { ChatP, PeerGetter } from "./1_chat_p.ts";
import { constructReactionCount, type ReactionCount } from "./1_reaction_count.ts";

/** Information on the reactions made to a channel post. */
export interface MessageReactionCount {
  /** The chat containing the message. */
  chat: ChatP;
  /** The message's identifier. */
  messageId: number;
  /** The point in time in which the change was made. */
  date: number;
  /** The reactions made to the post. */
  reactions: ReactionCount[];
}

export function constructMessageReactionCount(update: Api.updateBotMessageReactions, getPeer: PeerGetter): MessageReactionCount | null {
  const date = update.date;
  const reactions = update.reactions.map((v) => constructReactionCount(v));
  const peer = getPeer(update.peer);
  if (peer) {
    const messageId = update.msg_id;
    const messageReactionCount = { chat: peer[0], messageId, date, reactions };
    return messageReactionCount;
  } else {
    return null;
  }
}
