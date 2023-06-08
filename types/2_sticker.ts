import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { Thumbnail } from "./0_thumbnail.ts";
import { MaskPosition } from "./1_mask_position.ts";

export interface Sticker {
  fileId: string;
  fileUniqueId: string;
  type: "regular" | "mask" | "custom_emoji";
  width: number;
  height: number;
  isAnimated: boolean;
  isVideo: boolean;
  thumbnail: Thumbnail;
  emoji?: string;
  setName?: string;
  premiumAnimation?: File;
  maskPosition?: MaskPosition;
  customEmojiId?: string;
  needsRepainting?: boolean;
  fileSize?: number;
}

export function constructSticker(document: types.Document) {
}
