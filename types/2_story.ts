import { fromUnixTimestamp, UNREACHABLE } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { EntityGetter } from "./1__getters.ts";
import { ChatP, constructChatP } from "./1_chat_p.ts";
import { InputStoryContent } from "./1_input_story_content.ts";
import { constructStoryInteractiveArea, StoryInteractiveArea } from "./1_story_interactive_area.ts";
import { constructStoryContent } from "./2_story_content.ts";

export interface Story {
  id: number;
  chat: ChatP;
  date: Date;
  content: InputStoryContent;
  interactiveAreas: StoryInteractiveArea[];
  highlighted: boolean;
}

export async function constructStory(story: types.StoryItem, peer: types.PeerUser | types.PeerChat | types.PeerChannel, getEntity: EntityGetter) {
  const id = story.id;
  const entity = await getEntity(peer);
  if (!entity) {
    UNREACHABLE();
  }
  const chat = constructChatP(entity);
  const date = fromUnixTimestamp(story.date);
  const interactiveAreas = (story.media_areas ?? []).map(constructStoryInteractiveArea);
  const highlighted = story.pinned ? true : false;
  const content = constructStoryContent(story.media);

  return {
    id,
    chat,
    date,
    content,
    interactiveAreas,
    highlighted,
  };
}
