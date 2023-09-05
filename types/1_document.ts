import * as types from "../tl/2_types.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

/** This object represents a general file (as opposed to [photos](https://corefork.telegram.org/bots/api#photosize), [voice messages](https://corefork.telegram.org/bots/api#voice) and [audio files](https://corefork.telegram.org/bots/api#audio)). */
export interface Document {
  /** Identifier for this file, which can be used to download or reuse the file */
  fileId: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  fileUniqueId: string;
  /** Document thumbnail as defined by sender */
  thumbnails: Thumbnail[];
  /** Original filename as defined by sender */
  fileName: string;
  /** MIME type of the file as defined by sender */
  mimeType: string;
  /** File size in bytes */
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
