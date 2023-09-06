import { types } from "../2_tl.ts";
import { constructThumbnail, Thumbnail } from "./0_thumbnail.ts";

/** This object represents an audio file to be treated as music by the Telegram clients. */
export interface Audio {
  /** Identifier for this file, which can be used to download or reuse the file */
  fileId: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different users and bots. Can't be used to download or reuse the file. */
  fileUniqueId: string;
  /** Duration of the audio in seconds as defined by sender */
  duration: number;
  /** Performer of the audio as defined by sender or by audio tags */
  performer?: string;
  /** Title of the audio as defined by sender or by audio tags */
  title?: string;
  /** MIME type of the file as defined by sender */
  mimeType: string;
  /** File size in bytes */
  fileSize: number;
  /** Thumbnail of the album cover to which the music file belongs */
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
