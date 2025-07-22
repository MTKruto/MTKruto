/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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
import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";
import { PeerGetter } from "./1_chat_p.ts";
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
  date: number;
  edited: boolean;
  content: StoryContent;
  interactiveAreas: StoryInteractiveArea[];
  highlighted: boolean;
  interactions?: StoryInteractions;
  privacy?: StoryPrivacy;
  caption?: string;
  captionEntities?: MessageEntity[];
}

export function constructStory(story: Api.storyItem, peer: Api.peerUser | Api.peerChat | Api.peerChannel, getPeer: PeerGetter): Story {
  const id = story.id;
  const entity = getPeer(peer);
  if (!entity) {
    unreachable();
  }
  const chat = constructChatP(entity);
  const date = story.date;
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
