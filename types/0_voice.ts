import * as types from "../tl/2_types.ts";

export interface Voice {
  fileId: string;
  fileUniqueId: string;
  duration: number;
  mimeType: string;
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
