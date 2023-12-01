import { types } from "../2_tl.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

export interface Document {
  /** A file identifier that can be used to download or reuse this file. */
  fileId: string;
  /** A file identifier that can be used to identify this file. */
  fileUniqueId: string;
  /** Thumbnails of the document. */
  thumbnails: Thumbnail[];
  /** The original file name. */
  fileName: string;
  /** MIME type of the file. */
  mimeType: string;
  /** Size of the file in bytes. */
  fileSize: number;
}

export function constructDocument(document: types.document, fileNameAttribute: types.documentAttributeFilename, fileId: string, fileUniqueId: string): Document {
  return {
    fileId,
    fileUniqueId,
    thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.photoSize ? constructThumbnail(v, document) : null).filter((v) => v) as Thumbnail[] : [],
    fileName: fileNameAttribute.file_name,
    mimeType: document.mime_type,
    fileSize: Number(document.size),
  };
}
