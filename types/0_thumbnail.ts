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

import { Api } from "../2_tl.ts";
import { FileId, FileType, PhotoSourceType, serializeFileId, toUniqueFileId } from "./_file_id.ts";

/** A file or sticker thumbnail. */
export interface Thumbnail {
  /** A file identifier that can be used to download or reuse the thumbnail. */
  fileId: string;
  /** A file identifier that can be used to identify the thumbnail. */
  fileUniqueId: string;
  /** The width of the thumbnail. */
  width: number;
  /** The height of the thumbnail. */
  height: number;
  /** Size of the file in bytes. */
  fileSize: number;
}

export function constructThumbnail(size: Api.photoSize, file: Api.document | Api.photo): Thumbnail {
  const type = is("photo", file) ? FileType.Photo : FileType.Thumbnail;
  const fileType = is("photo", file) ? FileType.Photo : FileType.Document;

  const fileId_: FileId = {
    type,
    dcId: file.dc_id,
    fileReference: file.file_reference,
    location: { type: "photo", id: file.id, accessHash: file.access_hash, source: { type: PhotoSourceType.Thumbnail, fileType, thumbnailType: size.type.charCodeAt(0) } },
  };

  return {
    fileId: serializeFileId(fileId_),
    fileUniqueId: toUniqueFileId(fileId_),
    width: size.w,
    height: size.h,
    fileSize: size.size,
  };
}
