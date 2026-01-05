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

import type { ParseMode } from "./0_parse_mode.ts";
import type { PriceTag } from "./0_price_tag.ts";
import type { MessageEntity } from "./2_message_entity.ts";
import type { LinkPreview } from "./5_link_preview.ts";

/**
 * A message content that shares a contact.
 * @unlisted
 */
export interface MessageContentContact {
  type: "contact";
  /** The contact's phone number. */
  phoneNumber: string;
  /** The contact's first name. */
  firstName: string;
  /** The contact's last name. */
  lastName?: string;
  /** Additional information in the vCard format. */
  vcard?: string;
}

/**
 * A message content that shares a location.
 * @unlisted
 */
export interface MessageContentLocation {
  type: "text";
  /** The latitude of the location. */
  latitude: number;
  /** The longitude of the location. */
  longitude: number;
  /** The accuracy radius of the location in meters. Must be in the range of 0-1500. */
  horizontalAccuracy?: number;
  /** The duration in which the location can be updated in seconds. Must be in the range of 80-864,000. */
  livePeriod?: number;
  /** The direction which the user is moving towards. Must be in the range of 1-350. */
  heading?: number;
  /** The maximum distance for proximity alerts on approaching another chat member in meters. Must be in the range 1-100,000. */
  proximityAlertRadius?: number;
}

/**
 * A message content that shares a venue.
 * @unlisted
 */
export interface MessageContentVenue {
  type: "venue";
  /** The latitude of the venue. */
  latitude: number;
  /** The longitude of the venue. */
  longitude: number;
  /** The name of the venue. */
  title: string;
  /** The address of the venue. */
  address: string;
  /** The Foursquare identifier of the venue. */
  foursquareId?: string;
  /** The Foursquare type of the venue. */
  foursquareType?: string;
  /** The Google Places identifier of the venue. */
  googlePlaceId?: string;
  /** The Google Places type of the venue. */
  googlePlaceType?: string;
}

/** @unlisted */
export interface MessageContentText {
  type: "text";
  /** The message's text. */
  text: string;
  /** The parse mode to use. if omitted, the default parse mode will be used. */
  parseMode?: ParseMode;
  /** The message's entities. */
  entities?: MessageEntity[];
  /** The message's link preview. */
  linkPreview?: LinkPreview;
}

/** @unlisted */
export interface MessageContentInvoice {
  type: "invoice";
  title: string;
  description: string;
  payload: string;
  providerToken: string;
  currency: string;
  prices: PriceTag[];
  maxTipAmount?: number;
  suggestedTipAmounts?: number[];
  providerData?: string;
  photoUrl?: string;
  photoSize?: number;
  photoWidth?: number;
  photoHeight?: number;
  needName?: boolean;
  needPhoneNumber?: boolean;
  needEmail?: boolean;
  needShippingAAddress?: boolean;
  sendPhoneNumberToPorvider?: boolean;
  sendEmailToProvider?: boolean;
  isFlexible?: boolean;
}

/** The content of a message in an inline query result. */
export type MessageContent = MessageContentText | MessageContentLocation | MessageContentVenue | MessageContentContact | MessageContentInvoice;
