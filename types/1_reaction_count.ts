import { types } from "../2_tl.ts";
import { constructReaction, Reaction } from "./0_reaction.ts";

export interface ReactionCount {
  reaction: Reaction;
  count: number;
}

export function constructReactionCount(reaction_: types.ReactionCount): ReactionCount {
  const reaction = constructReaction(reaction_.reaction);
  const count = reaction_.count;
  return { reaction, count };
}
