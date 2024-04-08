/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
