import { UNREACHABLE } from "../1_utilities.ts";
import { enums, types } from "../2_tl.ts";

export declare namespace Reaction {
  interface Emoji {
    type: "emoji";
    emoji: string;
  }

  interface CustomEmoji {
    type: "customEmoji";
    id: string;
  }
}

export type Reaction = Reaction.Emoji | Reaction.CustomEmoji;

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
