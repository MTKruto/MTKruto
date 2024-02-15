import { cleanObject } from "../1_utilities.ts";
import { types } from "../2_tl.ts";

/** A link preview. */
export interface LinkPreview {
  /** Whether link preview is disabled. */
  disable?: boolean;
  /** The URL of the preview. */
  url?: string;
  /** Wether the media is to be shown in a small size. */
  smallMedia?: boolean;
  /** Whether the media is to be shown in a large size. */
  largeMedia?: boolean;
  /** Whether the preview is to be shown above the message's text. */
  aboveText?: boolean;
}

export function constructLinkPreview(media: types.MessageMediaWebPage, invert?: boolean): LinkPreview {
  return cleanObject({
    url: "url" in media.webpage ? media.webpage.url : undefined,
    smallMedia: media.force_small_media ? true : undefined,
    largeMedia: media.force_large_media ? true : undefined,
    putAboveText: !!invert,
  });
}
