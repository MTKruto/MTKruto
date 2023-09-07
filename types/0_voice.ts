import { types } from "../2_tl.ts";

/** This object represents a voice note. */
export interface Voice {
  /** Identifier for this file, which can be used to download or reuse the file */
  fileId: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different users and bots. Can't be used to download or reuse the file. */
  fileUniqueId: string;
  /** Duration of the audio in seconds as defined by sender */
  duration: number;
  /** MIME type of the file as defined by sender */
  mimeType: string;
  /** File size in bytes */
  fileSize: number;
}

export function constructVoice(document: types.Document, audioAttributes: types.DocumentAttributeAudio, fileId: string, fileUniqueId: string): Voice {
  return {
    fileId,
    fileUniqueId,
    duration: audioAttributes.duration,
    mimeType: document.mimeType,
    fileSize: Number(document.size),
  };
}
