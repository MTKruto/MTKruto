import { UNREACHABLE } from "../1_utilities.ts";
import { enums, types } from "../2_tl.ts";

/** @unlisted */
export interface ReactionEmoji {
  type: "emoji";
  emoji: string;
}

/** @unlisted */
export interface ReactionCustomEmoji {
  type: "customEmoji";
  id: string;
}

/** A reaction type. */
export type Reaction = ReactionEmoji | ReactionCustomEmoji;

export function constructReaction(reaction: enums.Reaction): Reaction {
  if (reaction instanceof types.ReactionEmoji) {
    return { type: "emoji", emoji: reaction.emoticon };
  } else if (reaction instanceof types.ReactionCustomEmoji) {
    return { type: "customEmoji", id: String(reaction.document_id) };
  } else {
    UNREACHABLE();
  }
}

export function reactionToTlObject(reaction: Reaction): enums.Reaction {
  return reaction.type == "emoji" ? new types.ReactionEmoji({ emoticon: reaction.emoji }) : new types.ReactionCustomEmoji({ document_id: BigInt(reaction.id) });
}

export function reactionEqual(left: Reaction, right: Reaction): boolean {
  if (left.type == "emoji") {
    if (right.type == "emoji" && left.emoji == right.emoji) {
      return true;
    }
  } else if (left.type == "customEmoji") {
    if (right.type == "customEmoji" && left.id == right.id) {
      return true;
    }
  }
  return false;
}
