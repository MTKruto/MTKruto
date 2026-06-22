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

import { cleanObject, type MaybePromise } from "../1_utilities.ts";
import { Api, SecretChats } from "../2_tl.ts";
import { constructMaskPosition, type MaskPosition } from "./0_mask_position.ts";
import { constructThumbnail, type Thumbnail } from "./0_thumbnail.ts";

/** A sticker. */
export interface Sticker {
  /** A file identifier that can be used to download or reuse this file. */
  fileId: string;
  /** A file identifier that can be used to identify this file. */
  fileUniqueId: string;
  /** Type of the sticker, currently one of "regular", "mask", "customEmoji". The type of the sticker is independent from its format, which is determined by the fields isAnimated and isVideo. */
  type: "regular" | "mask" | "customEmoji";
  /** The width of the sticker. */
  width: number;
  /** The height of the sticker. */
  height: number;
  /** Whether the sticker is animated. */
  isAnimated: boolean;
  /** Whether the sticker is a video. */
  isVideo: boolean;
  /** Thumbnails of the sticker in the WebP or JPG. */
  thumbnails: Thumbnail[];
  /** The emoji associated with the sticker. */
  emoji?: string;
  /** Name of the sticker set where the sticker belongs. */
  setName?: string;
  /** For mask stickers, the position where the mask should be placed */
  maskPosition?: MaskPosition;
  /** For custom emoji stickers, unique identifier of the custom emoji */
  customEmojiId?: string;
  /** Whether the sticker needs repainting. */
  isRepaintingNeeded?: boolean;
  /** File size in bytes */
  fileSize?: number;
}

/** @unlisted */
export type StickerSetNameGetter = (inputStickerSet: Api.inputStickerSetID) => MaybePromise<string | undefined>;

export async function constructSticker(document: Api.document, fileId: string, fileUniqueId: string, getStickerSetName: StickerSetNameGetter, customEmojiId = ""): Promise<Sticker> {
  const stickerAttribute = document.attributes.find((v): v is Api.documentAttributeSticker => Api.is("documentAttributeSticker", v));
  const setName = Api.is("inputStickerSetID", stickerAttribute?.stickerset) ? await getStickerSetName(stickerAttribute.stickerset) : undefined;

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
    isAnimated: document.mime_type === "application/x-tgsticker",
    isVideo: document.mime_type === "video/webm",
    thumbnails: document.thumbs ? document.thumbs.map((v) => Api.is("photoSize", v) ? constructThumbnail(v, document) : null).filter((v) => v) as Thumbnail[] : [],
    emoji: (customEmojiAttribute ? customEmojiAttribute.alt : stickerAttribute.alt) || undefined,
    setName,
    maskPosition: stickerAttribute ? stickerAttribute.mask_coords ? constructMaskPosition(stickerAttribute.mask_coords) : undefined : undefined,
    customEmojiId: customEmojiAttribute ? customEmojiId : undefined,
    isRepaintingNeeded: customEmojiAttribute ? !!customEmojiAttribute.text_color : undefined,
    fileSize: Number(document.size),
  });
}

export function constructSticker3(document: SecretChats.decryptedMessageMediaExternalDocument | SecretChats.decryptedMessageMediaDocument46 | SecretChats.decryptedMessageMediaDocument, fileId: string, fileUniqueId: string): Sticker {
  const stickerAttribute = document.attributes.find((v): v is SecretChats.documentAttributeSticker => SecretChats.is("documentAttributeSticker", v))!;
  const imageSizeAttribute = document.attributes.find((v): v is Api.documentAttributeImageSize => SecretChats.is("documentAttributeImageSize", v))!;
  const videoAttribute = document.attributes.find((v): v is SecretChats.documentAttributeVideo => SecretChats.is("documentAttributeVideo", v))!;

  return cleanObject({
    fileId,
    fileUniqueId,
    type: "regular",
    width: imageSizeAttribute ? imageSizeAttribute.w : videoAttribute ? videoAttribute.w : 512,
    height: imageSizeAttribute ? imageSizeAttribute.h : videoAttribute ? videoAttribute.h : 512,
    isAnimated: document.mime_type === "application/x-tgsticker",
    isVideo: document.mime_type === "video/webm",
    thumbnails: [],
    emoji: stickerAttribute.alt || undefined,
    setName: Api.is("inputStickerSetShortName", stickerAttribute.stickerset) ? stickerAttribute.stickerset.short_name : undefined,
    fileSize: Number(document.size),
  });
}
