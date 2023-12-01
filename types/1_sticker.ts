import { MaybePromise } from "../1_utilities.ts";
import { as, types } from "../2_tl.ts";
import { constructMaskPosition, MaskPosition } from "./0_mask_position.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

/** This object represents a sticker. */
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

export type StickerSetNameGetter = (inputStickerSet: types.inputStickerSetID) => MaybePromise<string>;

export async function constructSticker(document: types.document, fileId: string, fileUniqueId: string, getStickerSetName: StickerSetNameGetter): Promise<Sticker> {
  const stickerAttribute = document.attributes.find((v): v is types.documentAttributeSticker => v instanceof types.documentAttributeSticker)!;
  const imageSizeAttribute = document.attributes.find((v): v is types.documentAttributeImageSize => v instanceof types.documentAttributeImageSize)!;
  const videoAttribute = document.attributes.find((v): v is types.documentAttributeVideo => v instanceof types.documentAttributeVideo)!;
  const setName = await getStickerSetName(stickerAttribute.stickerset[as](types.inputStickerSetID));

  return {
    fileId,
    fileUniqueId,
    // TODO: custom emoji type?
    type: stickerAttribute.mask ? "mask" : "regular",
    width: imageSizeAttribute ? imageSizeAttribute.w : videoAttribute ? videoAttribute.w : 512,
    height: imageSizeAttribute ? imageSizeAttribute.h : videoAttribute ? videoAttribute.h : 512,
    isAnimated: document.mime_type == "application/x-tgsticker",
    isVideo: document.mime_type == "video/webm",
    thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.photoSize ? constructThumbnail(v, document) : null).filter((v) => v) as Thumbnail[] : [],
    emoji: stickerAttribute.alt || undefined,
    setName,
    premiumAnimation: undefined, // TODO
    maskPosition: stickerAttribute.mask_coords ? constructMaskPosition(stickerAttribute.mask_coords) : undefined,
    customEmojiId: undefined, // TODO
    needsRepainting: undefined, // TODO
    fileSize: Number(document.size),
  };
}
