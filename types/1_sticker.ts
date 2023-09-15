import { MaybePromise } from "../1_utilities.ts";
import { as, types } from "../2_tl.ts";
import { constructMaskPosition, MaskPosition } from "./0_mask_position.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

/** This object represents a sticker. */
export interface Sticker {
  /** Identifier for this file, which can be used to download or reuse the file */
  fileId: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different users and bots. Can't be used to download or reuse the file. */
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

export type StickerSetNameGetter = (inputStickerSet: types.InputStickerSetID) => MaybePromise<string>;

export async function constructSticker(document: types.Document, fileId: string, fileUniqueId: string, getStickerSetName: StickerSetNameGetter): Promise<Sticker> {
  const stickerAttribute = document.attributes.find((v): v is types.DocumentAttributeSticker => v instanceof types.DocumentAttributeSticker)!;
  const imageSizeAttribute = document.attributes.find((v): v is types.DocumentAttributeImageSize => v instanceof types.DocumentAttributeImageSize)!;
  const videoAttribute = document.attributes.find((v): v is types.DocumentAttributeVideo => v instanceof types.DocumentAttributeVideo)!;
  const setName = await getStickerSetName(stickerAttribute.stickerset[as](types.InputStickerSetID));

  return {
    fileId,
    fileUniqueId,
    // TODO: custom emoji type?
    type: stickerAttribute.mask ? "mask" : "regular",
    width: imageSizeAttribute ? imageSizeAttribute.w : videoAttribute ? videoAttribute.w : 512,
    height: imageSizeAttribute ? imageSizeAttribute.h : videoAttribute ? videoAttribute.h : 512,
    isAnimated: document.mimeType == "application/x-tgsticker",
    isVideo: document.mimeType == "video/webm",
    thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.PhotoSize ? constructThumbnail(v, document) : null).filter((v) => v) as Thumbnail[] : [],
    emoji: stickerAttribute.alt || undefined,
    setName,
    premiumAnimation: undefined, // TODO
    maskPosition: stickerAttribute.maskCoords ? constructMaskPosition(stickerAttribute.maskCoords) : undefined,
    customEmojiId: undefined, // TODO
    needsRepainting: undefined, // TODO
    fileSize: Number(document.size),
  };
}
