import { unreachable } from "../0_deps.ts";
import { peerToChatId, types } from "../2_tl.ts";
import { constructReaction, Reaction } from "./0_reaction.ts";

/** Represents a type of reaction made to a message. */
export interface MessageReaction {
  /** The type of the reaction. */
  reaction: Reaction;
  /** The number of those who made this reaction. */
  count: number;
  /** A list of identifiers of users who recently made this reaction. */
  choosers: number[];
  /** Whether the current user made this reaction. */
  chosen: boolean;
}

export function constructMessageReaction(reaction_: types.ReactionCount, recentReactions: types.MessagePeerReaction[]): MessageReaction {
  const choosers = recentReactions
    .filter((v) => {
      if (reaction_.reaction instanceof types.ReactionEmoji) {
        return v.reaction instanceof types.ReactionEmoji && v.reaction.emoticon == reaction_.reaction.emoticon;
      } else if (reaction_.reaction instanceof types.ReactionCustomEmoji) {
        return v.reaction instanceof types.ReactionCustomEmoji && v.reaction.document_id == reaction_.reaction.document_id;
      } else {
        unreachable();
      }
    })
    .map((v) => peerToChatId(v.peer_id));
  const reaction = constructReaction(reaction_.reaction);
  const count = reaction_.count;
  const chosen = reaction_.chosen_order !== undefined ? true : false;
  return { reaction, count, choosers, chosen };
}
