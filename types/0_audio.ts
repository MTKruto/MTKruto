import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

export interface Audio {
  fileId: string;
  fileUniqueId: string;
  duration: number;
  performer?: string;
  title?: string;
  mimeType: string;
  fileSize: number;
  thumbnail?: Thumbnail;
}

export function constructAudio(document: types.Document, audioAttribute: types.DocumentAttributeAudio | undefined, fileId: string, fileUniqueId: string): Audio {
  return {
    fileId,
    fileUniqueId,
    duration: audioAttribute?.duration ?? 0,
    performer: audioAttribute?.performer,
    title: audioAttribute?.title,
    mimeType: document.mimeType,
    fileSize: Number(document.size),
    thumbnail: document.thumbs ? constructThumbnail(document.thumbs[0][as](types.PhotoSize), document) : undefined,
  };
}
