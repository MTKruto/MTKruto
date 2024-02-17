import { UNREACHABLE } from "../1_utilities.ts";
import { types } from "../2_tl.ts";

export type MessageSearchFilter =
  | "empty"
  | "animations"
  | "audios"
  | "documents"
  | "photos"
  | "videos"
  | "voiceMessages"
  | "photosAndVideos"
  | "links"
  | "chatPhotos"
  | "videoNotes"
  | "voiceMessagesAndVideoNotes"
  | "mentions"
  | "pinned";

export function messageSearchFilterToTlObject(filter: MessageSearchFilter) {
  switch (filter) {
    case "empty":
      return new types.InputMessagesFilterEmpty();
    case "animations":
      return new types.InputMessagesFilterGif();
    case "audios":
      return new types.InputMessagesFilterMusic();
    case "documents":
      return new types.InputMessagesFilterDocument();
    case "photos":
      return new types.InputMessagesFilterPhotos();
    case "videos":
      return new types.InputMessagesFilterVideo();
    case "voiceMessages":
      return new types.InputMessagesFilterVoice();
    case "photosAndVideos":
      return new types.InputMessagesFilterPhotoVideo();
    case "links":
      return new types.InputMessagesFilterUrl();
    case "chatPhotos":
      return new types.InputMessagesFilterChatPhotos();
    case "videoNotes":
      return new types.InputMessagesFilterRoundVideo();
    case "voiceMessagesAndVideoNotes":
      return new types.InputMessagesFilterRoundVoice();
    case "mentions":
      return new types.InputMessagesFilterMyMentions();
    case "pinned":
      return new types.InputMessagesFilterPinned();
    default:
      UNREACHABLE();
  }
}
