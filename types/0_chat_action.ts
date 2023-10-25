/** A sign of a possible action by a member of a conversation. */
export type ChatAction =
  | "type"
  | "uploadPhoto"
  | "recordVideo"
  | "uploadVideo"
  | "recordVoice"
  | "uploadAudio"
  | "uploadDocument"
  | "chooseSticker"
  | "findLocation"
  | "recordVideoNote"
  | "uploadVideoNote";
