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
  thumbnails: Thumbnail[];
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
    thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.PhotoSize ? constructThumbnail(v, document) : null).filter((v) => v) as Thumbnail[] : [],
  };
}
