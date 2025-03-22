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

import { cleanObject, MaybePromise } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { constructMaskPosition, MaskPosition } from "./0_mask_position.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

/** A sticker. */
export interface Sticker {
  /** A file identifier that can be used to download or reuse this file. */
  fileId: string;
  /** A file identifier that can be used to identify this file. */
  fileUniqueId: string;
  /** Type of the sticker, currently one of "regular", "mask", "customEmoji". The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video. */
  type: "regular" | "mask" | "customEmoji";
  /** Sticker width */
  width: number;
  /** Sticker height */
  height: number;
  /** True, if the sticker is [animated](https://telegram.org/blog/animated-stickers) */
  isAnimated: boolean;
  /** True, if the sticker is a [video sticker](https://telegram.org/blog/video-stickers-better-reactions) */
  isVideo: boolean;
  /** Sticker thumbnail in the .WEBP or .JPG format */
  thumbnails: Thumbnail[];
  /** Emoji associated with the sticker */
  emoji?: string;
  /** Name of the sticker set to which the sticker belongs */
  setName?: string;
  /** For premium regular stickers, premium animation for the sticker */
  premiumAnimation?: File;
  /** For mask stickers, the position where the mask should be placed */
  maskPosition?: MaskPosition;
  /** For custom emoji stickers, unique identifier of the custom emoji */
  customEmojiId?: string;
  /** True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places */
  needsRepainting?: boolean;
  /** File size in bytes */
  fileSize?: number;
}

/** @unlisted */
export type StickerSetNameGetter = (inputStickerSet: Api.inputStickerSetID) => MaybePromise<string>;

export async function constructSticker(document: Api.document, fileId: string, fileUniqueId: string, getStickerSetName: StickerSetNameGetter, customEmojiId = ""): Promise<Sticker> {
  const stickerAttribute = document.attributes.find((v): v is Api.documentAttributeSticker => Api.is("documentAttributeSticker", v))!;
  const setName = is("inputStickerSetID", stickerAttribute.stickerset) ? await getStickerSetName(stickerAttribute.stickerset) : undefined;

  return constructSticker2(document, fileId, fileUniqueId, setName, customEmojiId);
}

export function constructSticker2(document: Api.document, fileId: string, fileUniqueId: string, setName: string | undefined, customEmojiId = ""): Sticker {
  const stickerAttribute = document.attributes.find((v): v is Api.documentAttributeSticker => Api.is("documentAttributeSticker", v))!;
  const imageSizeAttribute = document.attributes.find((v): v is Api.documentAttributeImageSize => Api.is("documentAttributeImageSize", v))!;
  const customEmojiAttribute = document.attributes.find((v): v is Api.documentAttributeCustomEmoji => Api.is("documentAttributeCustomEmoji", v));
  const videoAttribute = document.attributes.find((v): v is Api.documentAttributeVideo => Api.is("documentAttributeVideo", v))!;

  return cleanObject({
    fileId,
    fileUniqueId,
    type: customEmojiAttribute ? "customEmoji" : stickerAttribute.mask ? "mask" : "regular",
    width: imageSizeAttribute ? imageSizeAttribute.w : videoAttribute ? videoAttribute.w : 512,
    height: imageSizeAttribute ? imageSizeAttribute.h : videoAttribute ? videoAttribute.h : 512,
    isAnimated: document.mime_type == "application/x-tgsticker",
    isVideo: document.mime_type == "video/webm",
    thumbnails: document.thumbs ? document.thumbs.map((v) => Api.is("photoSize", v) ? constructThumbnail(v, document) : null).filter((v) => v) as Thumbnail[] : [],
    emoji: (customEmojiAttribute ? customEmojiAttribute.alt : stickerAttribute.alt) || undefined,
    setName,
    premiumAnimation: undefined, // TODO
    maskPosition: stickerAttribute ? stickerAttribute.mask_coords ? constructMaskPosition(stickerAttribute.mask_coords) : undefined : undefined,
    customEmojiId: customEmojiAttribute ? customEmojiId : undefined,
    needsRepainting: customEmojiAttribute ? Boolean(customEmojiAttribute.text_color) : undefined,
    fileSize: Number(document.size),
  });
}
