import { cleanObject, fromUnixTimestamp, UNREACHABLE } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";
import { EntityGetter } from "./1__getters.ts";
import { ChatP, constructChatP } from "./1_chat_p.ts";
import { constructStoryInteractiveArea, StoryInteractiveArea } from "./1_story_interactive_area.ts";
import { constructStoryPrivacy } from "./1_story_privacy.ts";
import { StoryPrivacy } from "./1_story_privacy.ts";
import { StoryContent } from "./2_story_content.ts";
import { constructStoryContent } from "./2_story_content.ts";

export interface Story {
  out: boolean;
  id: number;
  chat: ChatP;
  date: Date;
  edited: boolean;
  content: StoryContent;
  interactiveAreas: StoryInteractiveArea[];
  highlighted: boolean;
  privacy?: StoryPrivacy;
  caption?: string;
  captionEntities?: MessageEntity[];
}

export async function constructStory(story: types.StoryItem, peer: types.PeerUser | types.PeerChat | types.PeerChannel, getEntity: EntityGetter): Promise<Story> {
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
  const caption = story.caption;
  const captionEntities = story.entities?.map(constructMessageEntity).filter((v): v is NonNullable<typeof v> => !!v);
  const privacy = story.privacy ? constructStoryPrivacy(story.privacy) : undefined;

  return cleanObject({
    out: story.out ? true : false,
    id,
    chat,
    date,
    content,
    edited: story.edited ? true : false,
    interactiveAreas,
    highlighted,
    privacy,
    caption,
    captionEntities,
  });
}
