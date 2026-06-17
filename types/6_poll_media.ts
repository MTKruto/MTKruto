/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { unreachable } from "../0_deps.ts";
import { Api } from "../2_tl.ts";
import { type FileId, FileType, serializeFileId, toUniqueFileId } from "./_file_id.ts";
import { constructLocation, type Location } from "./0_location.ts";
import { type Animation, constructAnimation } from "./1_animation.ts";
import type { PeerGetter } from "./1_chat_p.ts";
import { constructPhoto, type Photo } from "./1_photo.ts";
import { constructSticker, type Sticker, type StickerSetNameGetter } from "./1_sticker.ts";
import { constructVenue, type Venue } from "./1_venue.ts";
import { constructVideo, type Video } from "./1_video.ts";
import { constructLinkPreview, type LinkPreview } from "./5_link_preview.ts";

/** @unlisted */
export interface PollMediaAnimation {
  type: "animation";
  /** The animation. */
  animation: Animation;
}

/** @unlisted */
export interface PollMediaPhoto {
  type: "photo";
  /** The photo. */
  photo: Photo;
}

/** @unlisted */
export interface PollMediaVideo {
  type: "video";
  /** The video. */
  video: Video;
}

/** @unlisted */
export interface PollMediaSticker {
  type: "sticker";
  /** The sticker. */
  sticker: Sticker;
}

/** @unlisted */
export interface PollMediaVenue {
  type: "venue";
  /** The venue. */
  venue: Venue;
}

/** @unlisted */
export interface PollMediaLink {
  type: "link";
  /** The URL. */
  url: string;
  /** The link preview. */
  linkPreview: LinkPreview;
}

/** @unlisted */
export interface PollMediaLivePhoto {
  type: "livePhoto";
  /** The photo. */
  photo: Photo;
  /** The video version of the photo. */
  video: Video;
}

/** @unlisted */
export interface PollMediaLocation {
  type: "location";
  /** The the location. */
  location: Location;
}

/** Any type of poll option media. */
export type PollMedia = PollMediaAnimation | PollMediaPhoto | PollMediaVideo | PollMediaSticker | PollMediaLivePhoto | PollMediaLocation | PollMediaVenue | PollMediaLink;

export async function constructPollMedia(media: Api.MessageMedia, getStickerSetName: StickerSetNameGetter, getPeer: PeerGetter): Promise<PollMedia> {
  switch (media._) {
    case "messageMediaPhoto": {
      let photo: Photo | undefined;
      if (media.photo) {
        photo = constructPhoto(Api.as("photo", media.photo));
      }
      if (media.video) {
        const document = Api.as("document", media.video);
        const fileId: FileId = {
          type: FileType.Video,
          dcId: document.dc_id,
          location: {
            type: "common",
            id: document.id,
            accessHash: document.access_hash,
          },
          fileReference: document.file_reference,
        };
        const video = constructVideo(document, document.attributes.find((v) => Api.is("documentAttributeVideo", v))!, document.attributes.find((v) => Api.is("documentAttributeFilename", v))?.file_name, serializeFileId(fileId), toUniqueFileId(fileId));
        if (photo) {
          return { type: "livePhoto", photo, video };
        } else {
          return { type: "video", video };
        }
      }
      if (!photo) {
        unreachable();
      }
      return { type: "photo", photo };
    }
    case "messageMediaGeo":
      return { type: "location", location: constructLocation(media) };
    case "messageMediaDocument": {
      const document = Api.as("document", media.document);
      const videoAttribute = document.attributes.find((v) => Api.is("documentAttributeVideo", v));
      const fileNameAttribute = document.attributes.find((v) => Api.is("documentAttributeFilename", v));
      const stickerAttribute = document.attributes.find((v) => Api.is("documentAttributeSticker", v));
      const isAnimation = document.attributes.some((v) => Api.is("documentAttributeAnimated", v));

      const fileId: FileId = {
        type: FileType.None,
        dcId: document.dc_id,
        location: { type: "common", id: document.id, accessHash: document.access_hash },
        fileReference: document.file_reference,
      };
      if (isAnimation) {
        fileId.type = FileType.Animation;
        return { type: "animation", animation: constructAnimation(document, videoAttribute, fileNameAttribute, serializeFileId(fileId), toUniqueFileId(fileId)) };
      } else if (videoAttribute) {
        fileId.type = FileType.Video;
        return { type: "video", video: constructVideo(document, videoAttribute, fileNameAttribute?.file_name, serializeFileId(fileId), toUniqueFileId(fileId)) };
      } else if (stickerAttribute) {
        fileId.type = FileType.Sticker;
        return { type: "sticker", sticker: await constructSticker(document, serializeFileId(fileId), toUniqueFileId(fileId), getStickerSetName) };
      } else {
        unreachable();
      }
      break;
    }
    case "messageMediaWebPage":
      if (Api.isOneOf(["webPageEmpty", "webPageNotModified"], media.webpage) || !media.webpage.url) {
        unreachable();
      }
      return { type: "link", url: media.webpage.url, linkPreview: constructLinkPreview(media, undefined, getPeer) };
    case "messageMediaVenue":
      return { type: "venue", venue: constructVenue(media) };
  }

  unreachable();
}
