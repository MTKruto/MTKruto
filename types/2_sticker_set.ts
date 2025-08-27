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
import { type FileId, FileType, PhotoSourceType, serializeFileId, toUniqueFileId } from "./_file_id.ts";
import type { Thumbnail } from "./0_thumbnail.ts";
import { constructSticker2, type Sticker } from "./1_sticker.ts";

/** A sticker (or emoji) set. */
export interface StickerSet {
  /** The unique identifier of the set. */
  id: string;
  /** The set's slug. */
  name: string;
  /** The set's title. */
  title: string;
  /** The type of the set. */
  type: "regular" | "mask" | "customEmoji";
  /** The stickers (or emojis) in the set. */
  stickers: Sticker[];
  /** Thumbnails if available. */
  thumbnails: Thumbnail[];
  /** Whether the emojis in the set are adaptive. */
  adaptive: boolean;
  /** Whether the emojis in the set can be set as channel status. */
  canSetAsChannelStatus: boolean;
  /** Whether the current account is the creator of the set. */
  creator: boolean;
  /** Whether the set is official. */
  official: boolean;
  /** Whether the set is archived. */
  archived: boolean;
  /** A point in time in which the set was added to the current account. */
  addedAt?: number;
}

export function constructStickerSet(stickerSet: Api.messages_StickerSet): StickerSet {
  if (!Api.is("messages.stickerSet", stickerSet)) {
    unreachable();
  }
  const type: StickerSet["type"] = stickerSet.set.emojis ? "customEmoji" : stickerSet.set.masks ? "mask" : "regular";
  const name = stickerSet.set.short_name;
  const title = stickerSet.set.title;
  const stickers = stickerSet.documents.map((v) => {
    if (!Api.is("document", v)) {
      unreachable();
    }
    const fileId: FileId = {
      type: FileType.Sticker,
      dcId: v.dc_id,
      fileReference: v.file_reference,
      location: { type: "common", id: v.id, accessHash: v.access_hash },
    };
    return constructSticker2(v, serializeFileId(fileId), toUniqueFileId(fileId), name);
  });
  const thumbnails = new Array<Thumbnail>();

  const thumb = stickerSet.set.thumbs?.[0];
  if (thumb !== undefined && stickerSet.set.thumb_version !== undefined && stickerSet.set.thumb_dc_id !== undefined && Api.is("photoSize", thumb)) {
    const fileId: FileId = {
      type: FileType.Photo,
      dcId: stickerSet.set.thumb_dc_id,
      location: {
        type: "photo",
        source: {
          type: PhotoSourceType.StickerSetThumbnailVersion,
          stickerSetId: stickerSet.set.id,
          stickerSetAccessHash: stickerSet.set.access_hash,
          version: stickerSet.set.thumb_version,
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

  const adaptive = !!stickerSet.set.text_color;
  const canSetAsChannelStatus = !!stickerSet.set.channel_emoji_status;
  const creator = !!stickerSet.set.creator;
  const official = !!stickerSet.set.official;
  const archived = !!stickerSet.set.archived;

  const stickerSet_: StickerSet = {
    id: String(stickerSet.set.id),
    type,
    name,
    title,
    stickers,
    thumbnails,
    adaptive,
    canSetAsChannelStatus,
    creator,
    official,
    archived,
  };
  if (stickerSet.set.installed_date) {
    stickerSet_.addedAt = stickerSet.set.installed_date;
  }

  return stickerSet_;
}
