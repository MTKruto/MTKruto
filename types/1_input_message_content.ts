import { MessageEntity } from "./0_message_entity.ts";
import { ParseMode } from "./0_parse_mode.ts";
import { PriceTag } from "./0_price_tag.ts";

/**
 * A message content that shares a contact.
 * @unlisted
 */
export interface InputMessageContentContact {
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
export interface InputMessageContentLocation {
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
export interface InputMessageContentVenue {
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
export interface InputMessageContentText {
  messageText: string;
  parseMode?: ParseMode;
  entities?: MessageEntity[];
  disableWebPagePreview?: boolean;
}

/** @unlisted */
export interface InputMessageContentInvoice {
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

/** The content of a message to be returned as an inline query result. */
export type InputMessageContent = InputMessageContentText | InputMessageContentLocation | InputMessageContentVenue | InputMessageContentContact | InputMessageContentInvoice;
