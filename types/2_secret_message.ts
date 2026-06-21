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
import type { Api, SecretChats } from "../2_tl.ts";
import type { Contact } from "./0_contact.ts";
import type { Location } from "./0_location.ts";
import { constructSecretMessageEntity, type SecretMessageEntity } from "./0_secret_message_entity.ts";
import type { Venue } from "./1_venue.ts";

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

/** Any type of secret message. */
export type SecretMessage = SecretMessageText | SecretMessageLocation | SecretMessageContact | SecretMessageVenue | SecretMessageWebPage;

export function constructSecretMessage(chatId: number, message: SecretChats.decryptedMessage, _encryptedMessage: Api.EncryptedMessage): SecretMessage {
  const isSilent = !!message.silent;
  const id = String(message.random_id);
  const text = message.message;
  const entities = (message.entities ?? []).map(constructSecretMessageEntity).filter((v) => v !== null);
  const mediaGroupId = message.grouped_id ? String(message.grouped_id) : undefined;
  const replyToMessageId = message.reply_to_random_id ? String(message.reply_to_random_id) : undefined;
  const ttl = message.ttl;
  const viaBot = message.via_bot_name;
  const messageBase = { chatId, id, mediaGroupId, isSilent, replyToMessageId, ttl, viaBot };

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
      case "decryptedMessageMediaAudio":
      case "decryptedMessageMediaExternalDocument":
      case "decryptedMessageMediaPhoto":
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
      case "decryptedMessageMediaDocument":
    }
  }

  return cleanObject({
    type: "text",
    ...messageBase,
    text,
    entities,
  });
}
