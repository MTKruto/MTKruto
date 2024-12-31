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
import { Api } from "../2_tl.ts";

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

export function messageSearchFilterToTlObject(filter: MessageSearchFilter): Api.MessagesFilter {
  switch (filter) {
    case "empty":
      return { _: "inputMessagesFilterEmpty" };
    case "animations":
      return { _: "inputMessagesFilterGif" };
    case "audios":
      return { _: "inputMessagesFilterMusic" };
    case "documents":
      return { _: "inputMessagesFilterDocument" };
    case "photos":
      return { _: "inputMessagesFilterPhotos" };
    case "videos":
      return { _: "inputMessagesFilterVideo" };
    case "voiceMessages":
      return { _: "inputMessagesFilterVoice" };
    case "photosAndVideos":
      return { _: "inputMessagesFilterPhotoVideo" };
    case "links":
      return { _: "inputMessagesFilterUrl" };
    case "chatPhotos":
      return { _: "inputMessagesFilterChatPhotos" };
    case "videoNotes":
      return { _: "inputMessagesFilterRoundVideo" };
    case "voiceMessagesAndVideoNotes":
      return { _: "inputMessagesFilterRoundVoice" };
    case "mentions":
      return { _: "inputMessagesFilterMyMentions" };
    case "pinned":
      return { _: "inputMessagesFilterPinned" };
    default:
      unreachable();
  }
}
