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
import { type FileId, FileType, serializeFileId, toUniqueFileId } from "../3_types.ts";
import { constructDocument } from "./1_document.ts";
import { constructPhoto } from "./1_photo.ts";
import type { StoryAlbumIcon } from "./2_story_album_icon.ts";

/** A story album. */
export interface StoryAlbum {
  /** The identifier of the album. */
  id: number;
  /** The name of the album. */
  name: string;
  /** The icon of the album. */
  icon?: StoryAlbumIcon;
}

export function constructStoryAlbum(album: Api.StoryAlbum): StoryAlbum {
  let icon: StoryAlbumIcon | undefined;
  if (album.icon_photo) {
    icon = {
      type: "photo",
      photo: constructPhoto(Api.as("photo", album.icon_photo)),
    };
  } else if (Api.is("document", album.icon_video)) {
    const fileId: FileId = {
      type: FileType.Video,
      dcId: album.icon_video.dc_id,
      fileReference: album.icon_video.file_reference,
      location: { type: "common", id: album.icon_video.id, accessHash: album.icon_video.access_hash },
    };
    icon = {
      type: "video",
      video: constructDocument(album.icon_video, { _: "documentAttributeFilename", file_name: "video.mp4" }, serializeFileId(fileId), toUniqueFileId(fileId)),
    };
  }
  return cleanObject({
    id: album.album_id,
    name: album.title,
    icon,
  });
}
