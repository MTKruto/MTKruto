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

import { Api } from "../2_tl.ts";
import { type FileId, FileType, PhotoSourceType, serializeFileId, toUniqueFileId } from "./_file_id.ts";
import type { Thumbnail } from "./0_thumbnail.ts";

/** A partial sticker (or emoji) set. */
export interface StickerSetP {
  /** The unique identifier of the set. */
  id: string;
  /** The set's slug. */
  name: string;
  /** The set's title. */
  title: string;
  /** The type of the set. */
  type: "regular" | "mask" | "customEmoji";
  /** Thumbnails if available. */
  thumbnails: Thumbnail[];
  /** Whether the emojis in the set are adaptive. */
  isAdaptive: boolean;
  /** Whether the emojis in the set can be set as channel status. */
  canSetAsChannelStatus: boolean;
  /** Whether the current account is the creator of the set. */
  isCreator: boolean;
  /** Whether the set is official. */
  isOfficial: boolean;
  /** Whether the set is archived. */
  isArchived: boolean;
  /** A point in time when the set was added to the current account. */
  addedAt?: number;
}

export function constructStickerSetP(stickerSet: Api.StickerSet): StickerSetP {
  const type: StickerSetP["type"] = stickerSet.emojis ? "customEmoji" : stickerSet.masks ? "mask" : "regular";
  const name = stickerSet.short_name;
  const title = stickerSet.title;
  const thumbnails = new Array<Thumbnail>();

  const thumb = stickerSet.thumbs?.[0];
  if (thumb !== undefined && stickerSet.thumb_version !== undefined && stickerSet.thumb_dc_id !== undefined && Api.is("photoSize", thumb)) {
    const fileId: FileId = {
      type: FileType.Photo,
      dcId: stickerSet.thumb_dc_id,
      location: {
        type: "photo",
        source: {
          type: PhotoSourceType.StickerSetThumbnailVersion,
          stickerSetId: stickerSet.id,
          stickerSetAccessHash: stickerSet.access_hash,
          version: stickerSet.thumb_version,
        },
        id: 0n,
        accessHash: 0n,
      },
    };
    thumbnails.push({
      fileId: serializeFileId(fileId),
      fileUniqueId: toUniqueFileId(fileId),
      width: thumb.w,
      height: thumb.h,
      fileSize: thumb.size,
    });
  }

  const adaptive = !!stickerSet.text_color;
  const canSetAsChannelStatus = !!stickerSet.channel_emoji_status;
  const creator = !!stickerSet.creator;
  const official = !!stickerSet.official;
  const archived = !!stickerSet.archived;

  const stickerSet_: StickerSetP = {
    id: String(stickerSet.id),
    type,
    name,
    title,
    thumbnails,
    isAdaptive: adaptive,
    canSetAsChannelStatus,
    isCreator: creator,
    isOfficial: official,
    isArchived: archived,
  };
  if (stickerSet.installed_date) {
    stickerSet_.addedAt = stickerSet.installed_date;
  }

  return stickerSet_;
}
