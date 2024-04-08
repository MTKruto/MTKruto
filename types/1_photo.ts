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
import { PhotoSourceType } from "./_file_id.ts";
import { FileId, FileType, serializeFileId, toUniqueFileId } from "./_file_id.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

/** A photo. */
export interface Photo {
  /** A file identifier that can be used to download or reuse this file. */
  fileId: string;
  /** A file identifier that can be used to identify this file. */
  fileUniqueId: string;
  /** Photo width */
  width: number;
  /** Photo height */
  height: number;
  /** Size of the file in bytes. */
  fileSize: number;
  thumbnails: Thumbnail[];
}

export function constructPhoto(photo: types.Photo): Photo {
  const sizes = photo.sizes
    .map((v) => {
      if (v instanceof types.PhotoSizeProgressive) {
        return new types.PhotoSize({ type: v.type, w: v.w, h: v.h, size: Math.max(...v.sizes) });
      } else {
        return v;
      }
    })
    .filter((v): v is types.PhotoSize => v instanceof types.PhotoSize)
    .sort((a, b) => a.size - b.size);

  const largest = sizes.slice(-1)[0];
  const { dc_id: dcId, id, access_hash: accessHash, file_reference: fileReference } = photo;
  const fileId_: FileId = {
    type: FileType.Photo,
    dcId,
    fileReference,
    location: {
      type: "photo",
      id,
      accessHash,
      source: {
        type: PhotoSourceType.Thumbnail,
        fileType: FileType.Photo,
        thumbnailType: largest.type.charCodeAt(0),
      },
    },
  };

  return {
    fileId: serializeFileId(fileId_),
    fileUniqueId: toUniqueFileId(fileId_),
    width: largest.w,
    height: largest.h,
    fileSize: largest.size,
    thumbnails: sizes.slice(0, -1).map((v) => constructThumbnail(v, photo)),
  };
}
