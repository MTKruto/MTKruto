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

import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

/** An audio file. */
export interface Audio {
  /** A file identifier that can be used to download or reuse this file. */
  fileId: string;
  /** A file identifier that can be used to identify this file. */
  fileUniqueId: string;
  /** Duration of the audio in seconds. */
  duration: number;
  /** Authors of the audio. */
  performer?: string;
  /** Title of the audio. */
  title?: string;
  /** MIME type of the file. */
  mimeType: string;
  /** Size of the file in bytes. */
  fileSize: number;
  /** Thumbnails of the album cover to which the music file belongs. */
  thumbnails: Thumbnail[];
}

export function constructAudio(document: Api.document, audioAttribute: Api.documentAttributeAudio | undefined, fileId: string, fileUniqueId: string): Audio {
  return cleanObject({
    fileId,
    fileUniqueId,
    duration: audioAttribute?.duration ?? 0,
    performer: audioAttribute?.performer,
    title: audioAttribute?.title,
    mimeType: document.mime_type,
    fileSize: Number(document.size),
    thumbnails: document.thumbs ? document.thumbs.map((v) => Api.is("photoSize", v) ? constructThumbnail(v, document) : null).filter((v) => v) as Thumbnail[] : [],
  });
}
