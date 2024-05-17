/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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

import { Api } from "../2_tl.ts";
import { constructReaction, Reaction } from "./0_reaction.ts";

/** The count of a specific reaction. */
export interface ReactionCount {
  /** The type of the reaction. */
  reaction: Reaction;
  /** Number of times the reaction was added. */
  count: number;
}

export function constructReactionCount(reaction_: Api.reactionCount): ReactionCount {
  const reaction = constructReaction(reaction_.reaction);
  const count = reaction_.count;
  return { reaction, count };
}
