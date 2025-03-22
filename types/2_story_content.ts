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
import { FileId, FileType, serializeFileId, toUniqueFileId } from "./_file_id.ts";
import { constructPhoto, Photo } from "./1_photo.ts";
import { constructVideo, Video } from "./1_video.ts";

/** @unlisted */
export interface StoryContentPhoto {
  /** @discriminator */
  photo: Photo;
}

/** @unlisted */
export interface StoryContentVideo {
  /** @discriminator */
  video: Video;
}

/** @unlisted */
export interface StoryContentUnsupported {
  /** @discriminator */
  unsupported: true;
}

/** A story content. */
export type StoryContent = StoryContentPhoto | StoryContentVideo | StoryContentUnsupported;

export function constructStoryContent(media: Api.MessageMedia): StoryContent {
  if (Api.is("messageMediaPhoto", media)) {
    if (!media.photo) {
      unreachable();
    }
    const photo = constructPhoto(as("photo", media.photo));
    return { photo };
  } else if (Api.is("messageMediaDocument", media)) {
    const document = media.document;
    if (!(is("document", document))) {
      unreachable();
    }

    const video = document.attributes.find((v): v is Api.documentAttributeVideo => Api.is("documentAttributeVideo", v));
    if (!video) {
      unreachable();
    }
    const fileId_: FileId = { type: FileType.Video, dcId: document.dc_id, fileReference: document.file_reference, location: { type: "common", id: document.id, accessHash: document.access_hash } };
    const fileUniqueId = toUniqueFileId(fileId_);
    const fileId = serializeFileId(fileId_);

    const video_ = constructVideo(document, video, undefined, fileId, fileUniqueId);
    return { video: video_ };
  } else {
    unreachable();
  }
}
