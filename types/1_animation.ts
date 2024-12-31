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
import { Api, is } from "../2_tl.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

/** An animation file (GIF or H.264/MPEG-4 AVC video without sound). */
export interface Animation {
  /** A file identifier that can be used to download or reuse this file. */
  fileId: string;
  /** A file identifier that can be used to identify this file. */
  fileUniqueId: string;
  /** The width of the animation. */
  width: number;
  /** The height of the animation. */
  height: number;
  /** Duration of the animation in seconds. */
  duration: number;
  /** Thumbnails of the animation. */
  thumbnails: Thumbnail[];
  /** The original file name. */
  fileName?: string;
  /** MIME type of the file. */
  mimeType: string;
  /** Size of the file in bytes. */
  fileSize: number;
}

export function constructAnimation(document: Api.document, videoAttribute: Api.documentAttributeVideo | undefined, fileAttribute: Api.documentAttributeFilename | undefined, fileId: string, fileUniqueId: string): Animation {
  return cleanObject({
    fileId,
    fileUniqueId,
    width: videoAttribute?.w ?? 0,
    height: videoAttribute?.h ?? 0,
    duration: videoAttribute?.duration ?? 0,
    thumbnails: document.thumbs ? document.thumbs.map((v) => is("photoSize", v) ? constructThumbnail(v, document) : null).filter((v) => v) as Thumbnail[] : [],
    fileName: fileAttribute?.file_name,
    mimeType: document.mime_type,
    fileSize: Number(document.size),
  });
}
