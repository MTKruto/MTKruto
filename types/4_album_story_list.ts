/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
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

import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import type { PeerGetter } from "./1_chat_p.ts";
import { constructStory, type Story } from "./3_story.ts";

/** A list of stories in a specific album. */
export interface AlbumStoryList {
  /** The stories. */
  stories: Story[];
  /** The identifiers of the pinned stories. */
  pinnedStoryIds: number[];
  /** The total number of stories in this album. */
  count: number;
}

export function constructAlbumStoryList(result: Api.stories_stories, peer: Api.peerUser | Api.peerChat | Api.peerChannel, getPeer: PeerGetter): AlbumStoryList {
  const stories = result.stories.filter((v) => Api.is("storyItem", v)).map((v) => constructStory(v, peer, getPeer));
  const pinnedStoryIds = result.pinned_to_top ?? [];
  const count = result.count;
  return cleanObject({
    stories,
    pinnedStoryIds,
    count,
  });
}
