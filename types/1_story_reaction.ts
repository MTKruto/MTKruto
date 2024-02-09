import { types } from "../2_tl.ts";
import { constructReaction, Reaction } from "./0_reaction.ts";

/** Represents a type of reaction made to a story. */
export interface StoryReaction {
  /** The type of the reaction. */
  reaction: Reaction;
  /** The number of those who made this reaction. */
  count: number;
  /** Whether the current user made this reaction. */
  chosen: boolean;
}

export function constructStoryReaction(reaction_: types.ReactionCount): StoryReaction {
  const reaction = constructReaction(reaction_.reaction);
  const count = reaction_.count;
  const chosen = reaction_.chosen_order !== undefined ? true : false;
  return { reaction, count, chosen };
}
