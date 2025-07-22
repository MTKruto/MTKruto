/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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
import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { FileId, FileType, serializeFileId, toUniqueFileId } from "./_file_id.ts";
import { Audio, constructAudio } from "./1_audio.ts";
import { PeerGetter } from "./1_chat_p.ts";
import { constructDocument, Document } from "./1_document.ts";
import { constructPhoto, Photo } from "./1_photo.ts";
import { constructGift, Gift } from "./4_gift.ts";

/**
 * A link preview to be passed as an input.
 * @unlisted
 */
export interface InputLinkPreview {
  /** @discriminator */
  type: "input";
  /** Whether link preview is disabled. */
  disable?: boolean;
  /** The URL of the preview. */
  url?: string;
  /** Wether the media is to be shown in a small size. */
  smallMedia?: boolean;
  /** Whether the media is to be shown in a large size. */
  largeMedia?: boolean;
  /** Whether the preview is to be shown above the message's text. */
  aboveText?: boolean;
}

/**
 * A link preview.
 * @unlisted
 */
export interface _LinkPreviewBase {
  /** The ID of the link preview. */
  id: string;
  /** Wether the media is to be shown in a small size. */
  smallMedia: boolean;
  /** Whether the media is to be shown in a large size. */
  largeMedia: boolean;
  /** Whether the preview is to be shown above the message's text. */
  aboveText: boolean;
}

/**
 * A link preview that is being loaded.
 * @unlisted
 */
export interface LinkPreviewLoading extends _LinkPreviewBase {
  /** @discriminator */
  type: "loading";
  /** The URL of the link preview. */
  url?: string;
  /** The point in time in which the link preview started to load. */
  date: number;
}

/**
 * A link preview that was not loaded.
 * @unlisted
 */
export interface LinkPreviewNotLoaded extends _LinkPreviewBase {
  /** @discriminator */
  type: "notLoaded";
  /** The URL of the link preview. */
  url?: string;
}

/** @unlisted */
export interface _LinkPreviewLoadedBase extends _LinkPreviewBase {
  /** The URL of the link preview. */
  url: string;
}

/**
 * A link preview of an unknown type.
 * @unlisted
 */

export interface LinkPreviewUnknown extends _LinkPreviewLoadedBase {
  /** @discriminator */
  type: "unknown";
}

/**
 * An embedded video link preview.
 * @unlisted
 */

export interface LinkPreviewPhoto extends _LinkPreviewLoadedBase {
  /** @discriminator */
  type: "photo";
  photo: Photo;
}

/** An embedded video link preview.
 * @unlisted
 */

export interface _LinkPreviewEmbeddedBase extends _LinkPreviewLoadedBase {
  embedUrl: string;
  width: number;
  height: number;
  duration: number;
}

/**
 *  An embedded video link preview.
 * @unlisted
 */

export interface LinkPreviewEmbeddedVideo extends _LinkPreviewEmbeddedBase {
  /** @discriminator */
  type: "embeddedVideo";
  thumbnail?: Photo;
}

/**
 * An embedded video link preview.
 * @unlisted
 */

export interface LinkPreviewExternalVideo extends _LinkPreviewEmbeddedBase {
  /** @discriminator */
  type: "externalVideo";
  mimeType: string;
  width: number;
  height: number;
  duration: number;
}

/** A video link preview.
 * @unlisted
 */
export interface LinkPreviewVideo extends _LinkPreviewLoadedBase {
  /** @discriminator */
  type: "video";
  video: Document;
  startTimestamp?: number;
  thumbnail?: Photo;
}

/**
 * An embedded audio link preview.
 * @unlisted
 */
export interface LinkPreviewEmbeddedAudio extends _LinkPreviewEmbeddedBase {
  /** @discriminator */
  type: "embeddedAudio";
  duration: number;
  width: number;
  height: number;
}

/**
 * An external audio link preview.
 * @unlisted
 */
export interface LinkPreviewExternalAudio extends _LinkPreviewEmbeddedBase {
  /** @discriminator */
  type: "externalAudio";
  mimeType: string;
  duration: number;
}

/**
 * An audio link preview.
 * @unlisted
 */
export interface LinkPreviewAudio extends _LinkPreviewLoadedBase {
  /** @discriminator */
  type: "audio";
  audio: Audio;
}

/**
 * An gift link preview.
 * @unlisted
 */
export interface LinkPreviewGift extends _LinkPreviewLoadedBase {
  /** @discriminator */
  type: "gift";
  gift: Gift;
}

/**
 * A link preview that was loaded.
 * @unlisted
 */
export type LinkPreviewLoaded =
  | LinkPreviewUnknown
  | LinkPreviewPhoto
  | LinkPreviewEmbeddedVideo
  | LinkPreviewExternalVideo
  | LinkPreviewVideo
  | LinkPreviewEmbeddedAudio
  | LinkPreviewExternalAudio
  | LinkPreviewAudio
  | LinkPreviewGift;

export type LinkPreview = InputLinkPreview | LinkPreviewLoading | LinkPreviewNotLoaded | LinkPreviewLoaded;

export function constructLinkPreview(media: Api.messageMediaWebPage, invert: boolean | undefined, getPeer: PeerGetter): LinkPreview {
  if (Api.is("webPageNotModified", media.webpage)) {
    unreachable();
  }
  const id = String(media.webpage.id);
  const smallMedia = !!media.force_small_media;
  const largeMedia = !!media.force_large_media;
  const aboveText = !!invert;

  switch (media.webpage._) {
    case "webPagePending":
      return cleanObject({
        type: "loading",
        id,
        date: media.webpage.date,
        url: media.webpage.url,
        smallMedia,
        largeMedia,
        aboveText,
      });
    case "webPageEmpty":
      return cleanObject({
        type: "notLoaded",
        id,
        url: media.webpage.url,
        smallMedia,
        largeMedia,
        aboveText,
      });
  }
  const url = media.webpage.url;
  let linkPreview: LinkPreview = {
    type: "unknown",
    id,
    url,
    smallMedia,
    largeMedia,
    aboveText,
  };

  switch (media.webpage.type) {
    case "video":
      if (media.webpage.embed_type === "iframe") {
        linkPreview = {
          type: "embeddedVideo",
          id,
          url,
          smallMedia,
          largeMedia,
          aboveText,
          embedUrl: media.webpage.embed_url ?? "",
          width: media.webpage.embed_width ?? 0,
          height: media.webpage.embed_height ?? 0,
          duration: media.webpage.duration ?? 0,
          thumbnail: media.webpage.photo ? constructPhoto(Api.as("photo", media.webpage.photo)) : undefined,
        };
        break;
      } else if (media.webpage.document) {
        const document = Api.as("document", media.webpage.document);
        const fileId: FileId = {
          type: FileType.Video,
          dcId: document.dc_id,
          fileReference: document.file_reference,
          location: { type: "common", id: document.id, accessHash: document.access_hash },
        };
        const startTimestamp = Number(new URL(media.webpage.url).searchParams.get("t")) || undefined;
        const fileName = document.attributes.find((v): v is Api.documentAttributeFilename => Api.is("documentAttributeFilename", v));

        linkPreview = {
          type: "video",
          id,
          url,
          smallMedia,
          largeMedia,
          aboveText,
          video: constructDocument(document, fileName ?? { _: "documentAttributeFilename", file_name: "Unknown" }, serializeFileId(fileId), toUniqueFileId(fileId)),
          startTimestamp,
          thumbnail: media.webpage.video_cover_photo ? media.webpage.photo ? constructPhoto(Api.as("photo", media.webpage.photo)) : undefined : undefined,
        };
        break;
      } else if (media.webpage.embed_url) {
        linkPreview = {
          type: "externalVideo",
          id,
          url,
          smallMedia,
          largeMedia,
          aboveText,
          embedUrl: media.webpage.embed_url ?? "",
          mimeType: media.webpage.embed_type ?? "",
          width: media.webpage.embed_width ?? 0,
          height: media.webpage.embed_height ?? 0,
          duration: media.webpage.duration ?? 0,
        };
        break;
      } else if (media.webpage.photo) {
        linkPreview = {
          type: "photo",
          id,
          url,
          smallMedia,
          largeMedia,
          aboveText,
          photo: constructPhoto(Api.as("photo", media.webpage.photo)),
        };
        break;
      }
      /* falls through */
    case "audio":
      if (media.webpage.embed_type === "iframe") {
        linkPreview = {
          type: "embeddedAudio",
          id,
          url,
          smallMedia,
          largeMedia,
          aboveText,
          embedUrl: media.webpage.embed_url ?? "",
          width: media.webpage.embed_width ?? 0,
          height: media.webpage.embed_height ?? 0,
          duration: media.webpage.duration ?? 0,
        };
        break;
      } else if (media.webpage.document) {
        const document = Api.as("document", media.webpage.document);
        const fileId: FileId = {
          type: FileType.Audio,
          dcId: document.dc_id,
          fileReference: document.file_reference,
          location: { type: "common", id: document.id, accessHash: document.access_hash },
        };
        const audio = document.attributes.find((v): v is Api.documentAttributeAudio => Api.is("documentAttributeAudio", v));
        linkPreview = {
          type: "audio",
          id,
          url,
          smallMedia,
          largeMedia,
          aboveText,
          audio: constructAudio(document, audio, serializeFileId(fileId), toUniqueFileId(fileId)),
        };
        break;
      } else if (media.webpage.embed_url) {
        linkPreview = {
          type: "externalAudio",
          id,
          url,
          smallMedia,
          largeMedia,
          aboveText,
          embedUrl: media.webpage.embed_url,
          mimeType: media.webpage.embed_type ?? "",
          width: media.webpage.embed_width ?? 0,
          height: media.webpage.embed_height ?? 0,
          duration: media.webpage.duration ?? 0,
        };
        break;
      } else if (media.webpage.photo) {
        linkPreview = {
          type: "photo",
          id,
          url,
          smallMedia,
          largeMedia,
          aboveText,
          photo: constructPhoto(Api.as("photo", media.webpage.photo)),
        };
        break;
      }
      break;
    case "telegram_nft": {
      const gift = media.webpage.attributes?.find((v) => Api.is("webPageAttributeUniqueStarGift", v))?.gift;
      if (gift) {
        linkPreview = {
          type: "gift",
          id,
          url,
          smallMedia,
          largeMedia,
          aboveText,
          gift: constructGift(gift, getEntity),
        };
        break;
      }
    }
  }

  return cleanObject(linkPreview);
}
