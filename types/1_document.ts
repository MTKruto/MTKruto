import * as types from "../tl/2_types.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

export interface Document {
  fileId: string;
  fileUniqueId: string;
  thumbnails: Thumbnail[];
  fileName: string;
  mimeType: string;
  fileSize: number;
}

export function constructDocument(document: types.Document, fileNameAttribute: types.DocumentAttributeFilename, fileId: string, fileUniqueId: string): Document {
  return {
    fileId,
    fileUniqueId,
    thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.PhotoSize ? constructThumbnail(v, document) : null).filter((v) => v) as Thumbnail[] : [],
    fileName: fileNameAttribute.fileName,
    mimeType: document.mimeType,
    fileSize: Number(document.size),
  };
}
