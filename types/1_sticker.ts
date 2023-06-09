import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { MaybePromise } from "../utilities/0_types.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";
import { constructMaskPosition, MaskPosition } from "./0_mask_position.ts";

export interface Sticker {
  fileId: string;
  fileUniqueId: string;
  type: "regular" | "mask" | "custom_emoji";
  width: number;
  height: number;
  isAnimated: boolean;
  isVideo: boolean;
  thumbnails: Thumbnail[];
  emoji?: string;
  setName?: string;
  premiumAnimation?: File;
  maskPosition?: MaskPosition;
  customEmojiId?: string;
  needsRepainting?: boolean;
  fileSize?: number;
}

export type StickerSetNameGetter = (inputStickerSet: types.InputStickerSetID) => MaybePromise<string>;

export async function constructSticker(document: types.Document, fileId: string, fileUniqueId: string, getStickerSetName: StickerSetNameGetter): Promise<Sticker> {
  const stickerAttribute = document.attributes.find((v) => v instanceof types.DocumentAttributeSticker) as types.DocumentAttributeSticker;
  const imageSizeAttribute = document.attributes.find((v) => v instanceof types.DocumentAttributeImageSize) as types.DocumentAttributeImageSize;
  const videoAttribute = document.attributes.find((v) => v instanceof types.DocumentAttributeVideo) as types.DocumentAttributeVideo;
  const setName = await getStickerSetName(stickerAttribute.stickerset[as](types.InputStickerSetID));

  return {
    fileId,
    fileUniqueId,
    // TODO: custom_emoji type?
    type: stickerAttribute.mask ? "mask" : "regular",
    width: imageSizeAttribute ? imageSizeAttribute.w : videoAttribute ? videoAttribute.w : 512,
    height: imageSizeAttribute ? imageSizeAttribute.h : videoAttribute ? videoAttribute.h : 512,
    isAnimated: document.mimeType == "application/x-tgsticker",
    isVideo: document.mimeType == "video/webm",
    thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.PhotoSize ? constructThumbnail(v, document) : null).filter((v) => v) as Thumbnail[] : [],
    setName,
    premiumAnimation: undefined, // TODO
    maskPosition: stickerAttribute.maskCoords ? constructMaskPosition(stickerAttribute.maskCoords[as](types.MaskCoords)) : undefined,
    customEmojiId: undefined, // TODO
    needsRepainting: undefined, // TODO
    fileSize: Number(document.size),
  };
}
