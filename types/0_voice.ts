import * as types from "../tl/2_types.ts";

/** This object represents a voice note. */
export interface Voice {
  /** Identifier for this file, which can be used to download or reuse the file */
  fileId: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  fileUniqueId: string;
  /** Duration of the audio in seconds as defined by sender */
  duration: number;
  /** MIME type of the file as defined by sender */
  mimeType: string;
  /** File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
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
