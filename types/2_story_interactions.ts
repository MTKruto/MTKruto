import { types } from "../2_tl.ts";
import { constructStoryReaction, StoryReaction } from "./1_story_reaction.ts";

/** The interactions made with a story. */
export interface StoryInteractions {
  reactions?: StoryReaction[];
  reactionCount?: number;
  views: number;
  forwards: number;
}

export function constructStoryInteractions(views_: types.StoryViews): StoryInteractions {
  const views = views_.views_count;
  const forwards = views_.forwards_count ?? 0;
  const reactionCount = views_.reactions_count;
  const reactions = views_.reactions ? views_.reactions.map(constructStoryReaction) : undefined;
  return { reactions, reactionCount, views, forwards };
}
