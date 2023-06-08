import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";
import { constructMaskPosition, MaskPosition } from "./1_mask_position.ts";

export interface Sticker {
  fileId: string;
  fileUniqueId: string;
  type: "regular" | "mask" | "custom_emoji";
  width: number;
  height: number;
  isAnimated: boolean;
  isVideo: boolean;
  thumbnail?: Thumbnail;
  emoji?: string;
  setName?: string;
  premiumAnimation?: File;
  maskPosition?: MaskPosition;
  customEmojiId?: string;
  needsRepainting?: boolean;
  fileSize?: number;
}

export function constructSticker(document: types.Document, fileId: string, fileUniqueId: string): Sticker {
  const stickerAttribute = document.attributes.find((v) => v instanceof types.DocumentAttributeSticker) as types.DocumentAttributeSticker;
  const imageSizeAttributes = document.attributes.find((v) => v instanceof types.DocumentAttributeImageSize) as types.DocumentAttributeImageSize;
  const videoAttributes = document.attributes.find((v) => v instanceof types.DocumentAttributeVideo) as types.DocumentAttributeVideo;

  return {
    fileId,
    fileUniqueId,
    type: stickerAttribute.mask ? "mask" : "regular",
    width: imageSizeAttributes ? imageSizeAttributes.w : videoAttributes ? videoAttributes.w : 512,
    height: imageSizeAttributes ? imageSizeAttributes.h : videoAttributes ? videoAttributes.h : 512,
    isAnimated: document.mimeType == "application/x-tgsticker",
    isVideo: document.mimeType == "video/webm",
    thumbnail: document.thumbs ? constructThumbnail(document.thumbs[0][as](types.PhotoSize), document) : undefined,
    setName: "TODO",
    premiumAnimation: undefined, // TODO
    maskPosition: stickerAttribute.maskCoords ? constructMaskPosition(stickerAttribute.maskCoords[as](types.MaskCoords)) : undefined,
    customEmojiId: undefined, // TODO
    needsRepainting: undefined, // TODO
    fileSize: Number(document.size),
  };
}
