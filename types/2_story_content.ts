import { UNREACHABLE } from "../1_utilities.ts";
import { as, enums, types } from "../2_tl.ts";
import { FileId, FileType, serializeFileId, toUniqueFileId } from "./_file_id.ts";
import { constructPhoto, Photo } from "./1_photo.ts";
import { constructVideo, Video } from "./1_video.ts";

/** @unlisted */
export interface StoryContentPhoto {
  photo: Photo;
}

/** @unlisted */
export interface StoryContentVideo {
  video: Video;
}

/** @unlisted */
export interface StoryContentUnsupported {
  unsupported: true;
}

/** A story content. */
export type StoryContent = StoryContentPhoto | StoryContentVideo | StoryContentUnsupported;

export function constructStoryContent(media: enums.MessageMedia): StoryContent {
  if (media instanceof types.MessageMediaPhoto) {
    if (!media.photo) {
      UNREACHABLE();
    }
    const photo = constructPhoto(media.photo[as](types.Photo));
    return { photo };
  } else if (media instanceof types.MessageMediaDocument) {
    const document = media.document;
    if (!(document instanceof types.Document)) {
      UNREACHABLE();
    }

    const video = document.attributes.find((v): v is types.DocumentAttributeVideo => v instanceof types.DocumentAttributeVideo);
    if (!video) {
      UNREACHABLE();
    }
    const fileId_: FileId = { type: FileType.Video, dcId: document.dc_id, fileReference: document.file_reference, location: { type: "common", id: document.id, accessHash: document.access_hash } };
    const fileUniqueId = toUniqueFileId(fileId_);
    const fileId = serializeFileId(fileId_);

    const video_ = constructVideo(document, video, undefined, fileId, fileUniqueId);
    return { video: video_ };
  } else {
    UNREACHABLE();
  }
}
