import { cleanObject } from "../1_utilities.ts";
import { types } from "../2_tl.ts";

export interface LinkPreview {
  disable?: boolean;
  url?: string;
  smallMedia?: boolean;
  largeMedia?: boolean;
  putAboveText?: boolean;
}

export function constructLinkPreview(media: types.MessageMediaWebPage, invert?: boolean): LinkPreview {
  return cleanObject({
    url: "url" in media.webpage ? media.webpage.url : "",
    smallMedia: media.force_small_media ? true : undefined,
    largeMedia: media.force_large_media ? true : undefined,
    putAboveText: !!invert,
  });
}
