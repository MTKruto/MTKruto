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

import { unreachable } from "../0_deps.ts";
import { enums, types } from "../2_tl.ts";

export type MessageSearchFilter =
  | "empty"
  | "animations"
  | "audios"
  | "documents"
  | "photos"
  | "videos"
  | "voiceMessages"
  | "photosAndVideos"
  | "links"
  | "chatPhotos"
  | "videoNotes"
  | "voiceMessagesAndVideoNotes"
  | "mentions"
  | "pinned";

export function messageSearchFilterToTlObject(filter: MessageSearchFilter): enums.MessagesFilter {
  switch (filter) {
    case "empty":
      return new types.InputMessagesFilterEmpty();
    case "animations":
      return new types.InputMessagesFilterGif();
    case "audios":
      return new types.InputMessagesFilterMusic();
    case "documents":
      return new types.InputMessagesFilterDocument();
    case "photos":
      return new types.InputMessagesFilterPhotos();
    case "videos":
      return new types.InputMessagesFilterVideo();
    case "voiceMessages":
      return new types.InputMessagesFilterVoice();
    case "photosAndVideos":
      return new types.InputMessagesFilterPhotoVideo();
    case "links":
      return new types.InputMessagesFilterUrl();
    case "chatPhotos":
      return new types.InputMessagesFilterChatPhotos();
    case "videoNotes":
      return new types.InputMessagesFilterRoundVideo();
    case "voiceMessagesAndVideoNotes":
      return new types.InputMessagesFilterRoundVoice();
    case "mentions":
      return new types.InputMessagesFilterMyMentions();
    case "pinned":
      return new types.InputMessagesFilterPinned();
    default:
      unreachable();
  }
}
