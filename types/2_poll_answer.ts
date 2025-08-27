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
import { decodeText } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { ChatP, PeerGetter } from "./1_chat_p.ts";

/** An answer to a poll. */
export interface PollAnswer {
  /** The identifier of the poll that was responded to. */
  pollId: string;
  /** The user who responded to the poll. */
  from: ChatP;
  /** The indexes of the options chosen by the user. */
  optionIndexes: number[];
}

export function constructPollAnswer(update: Api.updateMessagePollVote, getPeer: PeerGetter): PollAnswer {
  const pollId = String(update.poll_id);
  const peer = getPeer(update.peer);
  if (!peer) {
    unreachable();
  }
  const from = peer[0];
  const optionIndexes = update.options.map((v) => Number(decodeText(v)));
  return {
    pollId,
    from,
    optionIndexes,
  };
}
