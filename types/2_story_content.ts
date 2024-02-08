import { UNREACHABLE } from "../1_utilities.ts";
import { as, enums, types } from "../2_tl.ts";
import { constructPhoto, Photo } from "./1_photo.ts";
import { constructVideo, Video } from "./1_video.ts";
import { FileID, FileType, FileUniqueID, FileUniqueType } from "./0__file_id.ts";

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
    const fileUniqueId = new FileUniqueID(FileUniqueType.Document, { mediaId: document.id }).encode();
    const fileId = new FileID(null, null, FileType.Video, document.dc_id, {
      mediaId: document.id,
      accessHash: document.access_hash,
      fileReference: document.file_reference,
    }).encode();

    const video_ = constructVideo(document, video, undefined, fileId, fileUniqueId);
    return { video: video_ };
  } else {
    UNREACHABLE();
  }
}
