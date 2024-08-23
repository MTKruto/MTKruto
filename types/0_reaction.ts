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

import { unreachable } from "../0_deps.ts";
import { Api, is } from "../2_tl.ts";

/**
 * A regular reaction.
 * @unlisted
 */
export interface ReactionEmoji {
  type: "emoji";
  emoji: string;
}

/**
 * A custom reaction.
 * @unlisted
 */
export interface ReactionCustom {
  type: "custom";
  id: string;
}

/**
 * A paid (star) reaction.
 * @unlisted
 */
export interface ReactionPaid {
  type: "paid";
}

/** A reaction type. */
export type Reaction = ReactionEmoji | ReactionCustom | ReactionPaid;

export function constructReaction(reaction: Api.Reaction): Reaction {
  if (is("reactionEmoji", reaction)) {
    return { type: "emoji", emoji: reaction.emoticon };
  } else if (is("reactionCustomEmoji", reaction)) {
    return { type: "custom", id: String(reaction.document_id) };
  } else if (is("reactionPaid", reaction)) {
    return { type: "paid" };
  } else {
    unreachable();
  }
}

export function reactionToTlObject(reaction: Reaction): Api.Reaction {
  return reaction.type == "emoji" ? ({ _: "reactionEmoji", emoticon: reaction.emoji }) : reaction.type == "custom" ? ({ _: "reactionCustomEmoji", document_id: BigInt(reaction.id) }) : { _: "reactionPaid" };
}

export function reactionEqual(left: Reaction, right: Reaction): boolean {
  if (left.type == "emoji") {
    if (right.type == "emoji" && left.emoji == right.emoji) {
      return true;
    }
  } else if (left.type == "custom") {
    if (right.type == "custom" && left.id == right.id) {
      return true;
    }
  }
  return false;
}
