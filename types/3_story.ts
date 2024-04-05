import { unreachable } from "../0_deps.ts";
import { cleanObject, fromUnixTimestamp } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { EntityGetter } from "./_getters.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";
import { ChatP, constructChatP } from "./1_chat_p.ts";
import { constructStoryPrivacy } from "./1_story_privacy.ts";
import { StoryPrivacy } from "./1_story_privacy.ts";
import { constructStoryContent, StoryContent } from "./2_story_content.ts";
import { constructStoryInteractions, StoryInteractions } from "./2_story_interactions.ts";
import { constructStoryInteractiveArea, StoryInteractiveArea } from "./2_story_interactive_area.ts";

/** A story. */
export interface Story {
  out: boolean;
  id: number;
  chat: ChatP;
  date: Date;
  edited: boolean;
  content: StoryContent;
  interactiveAreas: StoryInteractiveArea[];
  highlighted: boolean;
  interactions?: StoryInteractions;
  privacy?: StoryPrivacy;
  caption?: string;
  captionEntities?: MessageEntity[];
}

export async function constructStory(story: types.StoryItem, peer: types.PeerUser | types.PeerChat | types.PeerChannel, getEntity: EntityGetter): Promise<Story> {
  const id = story.id;
  const entity = await getEntity(peer);
  if (!entity) {
    unreachable();
  }
  const chat = constructChatP(entity);
  const date = fromUnixTimestamp(story.date);
  const interactiveAreas = (story.media_areas ?? []).map(constructStoryInteractiveArea);
  const highlighted = story.pinned ? true : false;
  const content = constructStoryContent(story.media);
  const caption = story.caption;
  const captionEntities = story.entities?.map(constructMessageEntity).filter((v): v is NonNullable<typeof v> => !!v);
  const privacy = story.privacy ? constructStoryPrivacy(story.privacy) : undefined;
  const interactions = story.views ? constructStoryInteractions(story.views) : undefined;

  return cleanObject({
    out: story.out ? true : false,
    id,
    chat,
    date,
    content,
    edited: story.edited ? true : false,
    interactiveAreas,
    highlighted,
    interactions,
    privacy,
    caption,
    captionEntities,
  });
}
