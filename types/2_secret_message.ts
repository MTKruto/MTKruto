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

import { cleanObject } from "../1_utilities.ts";
import { Api, SecretChats } from "../2_tl.ts";
import { PhotoSourceType, serializeFileId, toUniqueFileId } from "../3_types.ts";
import { type FileId, FileType } from "./_file_id.ts";
import type { Contact } from "./0_contact.ts";
import type { Location } from "./0_location.ts";
import { constructSecretMessageEntity, type SecretMessageEntity } from "./0_secret_message_entity.ts";
import type { Voice } from "./0_voice.ts";
import type { Animation } from "./1_animation.ts";
import type { Audio } from "./1_audio.ts";
import type { Document } from "./1_document.ts";
import type { Photo } from "./1_photo.ts";
import { constructSticker3, type Sticker } from "./1_sticker.ts";
import type { Venue } from "./1_venue.ts";
import type { VideoNote } from "./1_video_note.ts";
import type { Video } from "./1_video.ts";

/** @unlisted */
export interface _SecretMessageBase {
  /** The identifier of the secret chat that the message belongs to. */
  chatId: number;
  /** The message's identifier. */
  id: string;
  /** The identifier of the message that this message replies to. */
  replyToMessageId?: string;
  /** Whether the message was sent silently. */
  isSilent: boolean;
  /** The message's time-to-live. */
  ttl: number;
  /** The name of the inline bot that was used to send the message. */
  viaBot?: string;
}

export interface _SecretMessageMediaBase extends _SecretMessageBase {
  /** The message's media group ID. */
  mediaGroupId?: string;
  /** The message's caption. */
  caption: string;
  /** The entities of the message's caption. */
  entities: SecretMessageEntity[];
}

/**
 * A secret text message.
 * @unlisted
 */
export interface SecretMessageText extends _SecretMessageBase {
  type: "text";
  /** The message's text. */
  text: string;
  /** The entities of the message's text. */
  entities: SecretMessageEntity[];
}

/**
 * A secret message sharing a location.
 * @unlisted
 */
export interface SecretMessageLocation extends _SecretMessageBase {
  type: "location";
  /** The location. */
  location: Location;
}

/**
 * A secret message sharing a contact.
 * @unlisted
 */
export interface SecretMessageContact extends _SecretMessageBase {
  type: "contact";
  /** The contact. */
  contact: Contact;
}

/**
 * A secret message sharing a venue.
 * @unlisted
 */
export interface SecretMessageVenue extends _SecretMessageBase {
  type: "venue";
  /** The venue. */
  venue: Venue;
}

/**
 * A secret message sharing a web page.
 * @unlisted
 */
export interface SecretMessageWebPage extends _SecretMessageBase {
  type: "webPage";
  /** The URL of the web page. */
  url: string;
  /** The message's caption. */
  caption: string;
  /** The entities of the message's caption. */
  entities: SecretMessageEntity[];
}

/**
 * A secret message sharing a photo.
 * @unlisted
 */
export interface SecretMessagePhoto extends _SecretMessageMediaBase {
  type: "photo";
  /** The photo included in the message. */
  photo: Photo;
}

/**
 * A secret message sharing a video.
 * @unlisted
 */
export interface SecretMessageVideo extends _SecretMessageMediaBase {
  type: "video";
  /** The video included in the message. */
  video: Video;
}

/**
 * A secret message sharing a video note.
 * @unlisted
 */
export interface SecretMessageVideoNote extends _SecretMessageMediaBase {
  type: "videoNote";
  /** The video note included in the message. */
  videoNote: VideoNote;
}

/**
 * A secret message sharing an audio.
 * @unlisted
 */
export interface SecretMessageAudio extends _SecretMessageMediaBase {
  type: "audio";
  /** The audio included in the message. */
  audio: Audio;
}

/**
 * A secret message sharing a document.
 * @unlisted
 */
export interface SecretMessageDocument extends _SecretMessageMediaBase {
  type: "document";
  /** The document included in the message. */
  document: Document;
}

/**
 * A secret message sharing a sticker.
 * @unlisted
 */
export interface SecretMessageSticker extends _SecretMessageBase {
  type: "sticker";
  /** The sticker included in the message. */
  sticker: Sticker;
}

/**
 * A secret message sharing an animation.
 * @unlisted
 */
export interface SecretMessageAnimation extends _SecretMessageMediaBase {
  type: "animation";
  /** The animation included in the message. */
  animation: Animation;
}

/**
 * A secret message sharing a voice.
 * @unlisted
 */
export interface SecretMessageVoice extends _SecretMessageMediaBase {
  type: "voice";
  /** The voice included in the message. */
  voice: Voice;
}

/** Any type of secret message. */
export type SecretMessage = SecretMessageText | SecretMessageLocation | SecretMessageContact | SecretMessageVenue | SecretMessageWebPage | SecretMessagePhoto | SecretMessageVideo | SecretMessageVideoNote | SecretMessageAudio | SecretMessageDocument | SecretMessageSticker | SecretMessageAnimation | SecretMessageVoice;

export function constructSecretMessage(chatId: number, message: SecretChats.decryptedMessage, encryptedMessage: Api.EncryptedMessage): SecretMessage {
  const isSilent = !!message.silent;
  const id = String(message.random_id);
  const text = message.message;
  const entities = (message.entities ?? []).map(constructSecretMessageEntity).filter((v) => v !== null);
  const mediaGroupId = message.grouped_id ? String(message.grouped_id) : undefined;
  const replyToMessageId = message.reply_to_random_id ? String(message.reply_to_random_id) : undefined;
  const ttl = message.ttl;
  const viaBot = message.via_bot_name;
  const messageBase = { chatId, id, isSilent, replyToMessageId, ttl, viaBot };

  function getFileIds(type: FileType) {
    let fileId_: FileId;
    if (SecretChats.is("decryptedMessageMediaExternalDocument", message.media)) {
      fileId_ = {
        type,
        dcId: message.media.dc_id,
        location: {
          type: "common",
          id: message.media.id,
          accessHash: message.media.access_hash,
        },
      };
    } else {
      const file = Api.as("encryptedFile", Api.as("encryptedMessage", encryptedMessage).file);
      fileId_ = {
        type: FileType.Encrypted,
        dcId: file.dc_id,
        location: {
          type: "common",
          id: file.id,
          accessHash: file.access_hash,
        },
      };
    }
    const fileId = serializeFileId(fileId_);
    const fileUniqueId = toUniqueFileId(fileId_);
    return { fileId, fileUniqueId };
  }

  if (message.media) {
    switch (message.media._) {
      case "decryptedMessageMediaGeoPoint": {
        const location: Location = { latitude: message.media.lat, longitude: message.media.long };
        return cleanObject({
          type: "location",
          ...messageBase,
          location,
        });
      }
      case "decryptedMessageMediaContact": {
        const contact: Contact = cleanObject({ firstName: message.media.first_name, lastName: message.media.last_name || undefined, phoneNumber: message.media.phone_number, userId: message.media.user_id });
        return cleanObject({
          type: "contact",
          ...messageBase,
          contact,
        });
      }
      case "decryptedMessageMediaPhoto": {
        const file = Api.as("encryptedFile", Api.as("encryptedMessage", encryptedMessage).file);
        const fileId_: FileId = {
          type: FileType.Encrypted,
          dcId: file.dc_id,
          location: {
            type: "photo",
            id: file.id,
            accessHash: file.access_hash,
            source: {
              type: PhotoSourceType.Thumbnail,
              fileType: FileType.EncryptedThumbnail,
              thumbnailType: "t".charCodeAt(0),
            },
          },
        };
        const fileId = serializeFileId(fileId_);
        const fileUniqueId = toUniqueFileId(fileId_);
        const photo: Photo = {
          fileId,
          fileUniqueId,
          width: message.media.w,
          height: message.media.h,
          fileSize: message.media.size,
          thumbnails: [],
        };
        return cleanObject({
          type: "photo",
          ...messageBase,
          photo,
          mediaGroupId,
          caption: text,
          entities,
        });
      }

      case "decryptedMessageMediaAudio": {
        const { fileId, fileUniqueId } = getFileIds(FileType.Audio);
        const audio: Audio = cleanObject({
          fileId,
          fileUniqueId,
          duration: message.media.duration,
          mimeType: message.media.mime_type,
          fileSize: message.media.size,
          thumbnails: [],
        });
        return cleanObject({
          type: "audio",
          ...messageBase,
          audio,
          mediaGroupId,
          caption: text,
          entities,
        });
      }
      case "decryptedMessageMediaDocument8": {
        const { fileId, fileUniqueId } = getFileIds(FileType.Document);
        const document: Document = cleanObject({
          fileId,
          fileUniqueId,
          thumbnails: [],
          fileName: message.media.file_name,
          mimeType: message.media.mime_type,
          fileSize: message.media.size,
        });
        return cleanObject({
          type: "document",
          ...messageBase,
          document,
          mediaGroupId,
          caption: text,
          entities,
        });
      }
      case "decryptedMessageMediaExternalDocument":
      case "decryptedMessageMediaDocument46":
      case "decryptedMessageMediaDocument": {
        const animated = message.media.attributes.find((v): v is SecretChats.documentAttributeAnimated => SecretChats.is("documentAttributeAnimated", v));
        const audio = message.media.attributes.find((v): v is SecretChats.documentAttributeAudio => SecretChats.is("documentAttributeAudio", v));
        const fileName = message.media.attributes.find((v): v is SecretChats.documentAttributeFilename => SecretChats.is("documentAttributeFilename", v));
        const sticker = message.media.attributes.find((v): v is SecretChats.documentAttributeSticker => SecretChats.is("documentAttributeSticker", v));
        const video = message.media.attributes.find((v): v is SecretChats.documentAttributeVideo => SecretChats.is("documentAttributeVideo", v));

        if (sticker) {
          const { fileId, fileUniqueId } = getFileIds(FileType.Sticker);
          const sticker = constructSticker3(message.media, fileId, fileUniqueId);
          return cleanObject({
            type: "sticker",
            ...messageBase,
            sticker,
          });
        } else if (animated) {
          const { fileId, fileUniqueId } = getFileIds(FileType.Animation);
          const animation: Animation = {
            fileId,
            fileUniqueId,
            width: video?.w ?? 0,
            height: video?.h ?? 0,
            duration: video?.duration ?? 0,
            thumbnails: [],
            fileName: fileName?.file_name,
            mimeType: message.media.mime_type,
            fileSize: Number(message.media.size),
          };
          return cleanObject({
            type: "animation",
            ...messageBase,
            animation,
            mediaGroupId,
            caption: text,
            entities,
          });
        } else if (video) {
          if (video.round_message) {
            const { fileId, fileUniqueId } = getFileIds(FileType.VideoNote);
            const videoNote: VideoNote = {
              fileId,
              fileUniqueId,
              length: video.w,
              duration: video.duration,
              thumbnails: [],
              fileName: fileName?.file_name,
              fileSize: Number(message.media.size),
            };
            return cleanObject({
              type: "videoNote",
              ...messageBase,
              videoNote,
              mediaGroupId,
              caption: text,
              entities,
            });
          } else {
            const { fileId, fileUniqueId } = getFileIds(FileType.Video);
            const video_: Video = {
              fileId,
              fileUniqueId,
              width: video.w,
              height: video.h,
              duration: video.duration,
              thumbnails: [],
              fileName: fileName?.file_name,
              mimeType: message.media.mime_type,
              fileSize: Number(message.media.size),
            };
            return cleanObject({
              type: "video",
              ...messageBase,
              video: video_,
              mediaGroupId,
              caption: text,
              entities,
            });
          }
        } else if (audio) {
          if (audio.voice) {
            const { fileId, fileUniqueId } = getFileIds(FileType.Audio);
            const voice: Voice = {
              fileId,
              fileUniqueId,
              duration: audio.duration,
              mimeType: message.media.mime_type,
              fileSize: Number(message.media.size),
            };
            return cleanObject({
              type: "voice",
              ...messageBase,
              voice,
              mediaGroupId,
              caption: text,
              entities,
            });
          } else {
            const { fileId, fileUniqueId } = getFileIds(FileType.Audio);
            const audio_: Audio = {
              fileId,
              fileUniqueId,
              duration: audio.duration,
              performer: audio.performer,
              title: audio.title,
              mimeType: message.media.mime_type,
              fileSize: Number(message.media.size),
              thumbnails: [],
            };

            return cleanObject({
              type: "audio",
              ...messageBase,
              audio: audio_,
              mediaGroupId,
              caption: text,
              entities,
            });
          }
        } else {
          const { fileId, fileUniqueId } = getFileIds(FileType.Document);
          const document: Document = {
            fileId,
            fileUniqueId,
            thumbnails: [],
            fileName: fileName?.file_name ?? "unknown",
            mimeType: message.media.mime_type,
            fileSize: Number(message.media.size),
          };

          return cleanObject({
            type: "document",
            ...messageBase,
            document,
            mediaGroupId,
            caption: text,
            entities,
          });
        }
      }
      case "decryptedMessageMediaVideo":
        break;
      case "decryptedMessageMediaVenue": {
        const venue: Venue = cleanObject({ title: message.media.title, address: message.media.address, location: { latitude: message.media.lat, longitude: message.media.long }, foursquareId: message.media.venue_id || undefined });
        return cleanObject({
          type: "venue",
          ...messageBase,
          venue,
        });
      }
      case "decryptedMessageMediaWebPage": {
        const url = message.media.url;
        return cleanObject({
          type: "webPage",
          ...messageBase,
          url,
          caption: text,
          entities,
        });
      }
    }
  }

  return cleanObject({
    type: "text",
    ...messageBase,
    text,
    entities,
  });
}
