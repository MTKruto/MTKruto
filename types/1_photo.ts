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
import { getPhotoFileId } from "./_file_id.ts";
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

export function constructPhoto(photo: Api.photo): Photo {
  const { sizes, largest } = getPhotoSizes(photo);
  return {
    ...getPhotoFileId(photo),
    width: largest.w,
    height: largest.h,
    fileSize: largest.size,
    thumbnails: sizes.slice(0, -1).map((v) => constructThumbnail(v, photo)),
  };
}

export function getPhotoSizes(photo: Api.photo): { sizes: Api.photoSize[]; largest: Api.photoSize } {
  const sizes = photo.sizes
    .map((v) => {
      if (Api.is("photoSizeProgressive", v)) {
        return { _: "photoSize", type: v.type, w: v.w, h: v.h, size: Math.max(...v.sizes) };
      } else {
        return v;
      }
    })
    .filter((v): v is Api.photoSize => Api.is("photoSize", v))
    .sort((a, b) => a.size - b.size);
  const largest = sizes.slice(-1)[0];
  return { sizes, largest };
}
