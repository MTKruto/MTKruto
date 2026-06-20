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

import type { Schema } from "./0_types.ts";

declare const R: unique symbol;

export type Function = { [R]?: unknown };

export type ReturnType<T> = T extends Function ? NonNullable<T[typeof R]> : never;

export interface true_ {
  _: "true";
}

export interface decryptedMessage8 {
  _: "decryptedMessage8";
  random_id: bigint;
  random_bytes: Uint8Array<ArrayBuffer>;
  message: string;
  media: DecryptedMessageMedia;
}

export interface decryptedMessageService8 {
  _: "decryptedMessageService8";
  random_id: bigint;
  random_bytes: Uint8Array<ArrayBuffer>;
  action: DecryptedMessageAction;
}

export interface decryptedMessageMediaEmpty {
  _: "decryptedMessageMediaEmpty";
}

export interface decryptedMessageMediaPhoto8 {
  _: "decryptedMessageMediaPhoto8";
  thumb: Uint8Array<ArrayBuffer>;
  thumb_w: number;
  thumb_h: number;
  w: number;
  h: number;
  size: number;
  key: Uint8Array<ArrayBuffer>;
  iv: Uint8Array<ArrayBuffer>;
}

export interface decryptedMessageMediaVideo8 {
  _: "decryptedMessageMediaVideo8";
  thumb: Uint8Array<ArrayBuffer>;
  thumb_w: number;
  thumb_h: number;
  duration: number;
  w: number;
  h: number;
  size: number;
  key: Uint8Array<ArrayBuffer>;
  iv: Uint8Array<ArrayBuffer>;
}

export interface decryptedMessageMediaGeoPoint {
  _: "decryptedMessageMediaGeoPoint";
  lat: number;
  long: number;
}

export interface decryptedMessageMediaContact {
  _: "decryptedMessageMediaContact";
  phone_number: string;
  first_name: string;
  last_name: string;
  user_id: number;
}

export interface decryptedMessageActionSetMessageTTL {
  _: "decryptedMessageActionSetMessageTTL";
  ttl_seconds: number;
}

export interface decryptedMessageMediaDocument8 {
  _: "decryptedMessageMediaDocument8";
  thumb: Uint8Array<ArrayBuffer>;
  thumb_w: number;
  thumb_h: number;
  file_name: string;
  mime_type: string;
  size: number;
  key: Uint8Array<ArrayBuffer>;
  iv: Uint8Array<ArrayBuffer>;
}

export interface decryptedMessageMediaAudio8 {
  _: "decryptedMessageMediaAudio8";
  duration: number;
  size: number;
  key: Uint8Array<ArrayBuffer>;
  iv: Uint8Array<ArrayBuffer>;
}

export interface decryptedMessageActionReadMessages {
  _: "decryptedMessageActionReadMessages";
  random_ids: Array<bigint>;
}

export interface decryptedMessageActionDeleteMessages {
  _: "decryptedMessageActionDeleteMessages";
  random_ids: Array<bigint>;
}

export interface decryptedMessageActionScreenshotMessages {
  _: "decryptedMessageActionScreenshotMessages";
  random_ids: Array<bigint>;
}

export interface decryptedMessageActionFlushHistory {
  _: "decryptedMessageActionFlushHistory";
}

export interface decryptedMessage23 {
  _: "decryptedMessage23";
  random_id: bigint;
  ttl: number;
  message: string;
  media: DecryptedMessageMedia;
}

export interface decryptedMessageService {
  _: "decryptedMessageService";
  random_id: bigint;
  action: DecryptedMessageAction;
}

export interface decryptedMessageMediaVideo23 {
  _: "decryptedMessageMediaVideo23";
  thumb: Uint8Array<ArrayBuffer>;
  thumb_w: number;
  thumb_h: number;
  duration: number;
  mime_type: string;
  w: number;
  h: number;
  size: number;
  key: Uint8Array<ArrayBuffer>;
  iv: Uint8Array<ArrayBuffer>;
}

export interface decryptedMessageMediaAudio {
  _: "decryptedMessageMediaAudio";
  duration: number;
  mime_type: string;
  size: number;
  key: Uint8Array<ArrayBuffer>;
  iv: Uint8Array<ArrayBuffer>;
}

export interface decryptedMessageLayer {
  _: "decryptedMessageLayer";
  random_bytes: Uint8Array<ArrayBuffer>;
  layer: number;
  in_seq_no: number;
  out_seq_no: number;
  message: DecryptedMessage;
}

export interface sendMessageTypingAction {
  _: "sendMessageTypingAction";
}

export interface sendMessageCancelAction {
  _: "sendMessageCancelAction";
}

export interface sendMessageRecordVideoAction {
  _: "sendMessageRecordVideoAction";
}

export interface sendMessageUploadVideoAction {
  _: "sendMessageUploadVideoAction";
}

export interface sendMessageRecordAudioAction {
  _: "sendMessageRecordAudioAction";
}

export interface sendMessageUploadAudioAction {
  _: "sendMessageUploadAudioAction";
}

export interface sendMessageUploadPhotoAction {
  _: "sendMessageUploadPhotoAction";
}

export interface sendMessageUploadDocumentAction {
  _: "sendMessageUploadDocumentAction";
}

export interface sendMessageGeoLocationAction {
  _: "sendMessageGeoLocationAction";
}

export interface sendMessageChooseContactAction {
  _: "sendMessageChooseContactAction";
}

export interface decryptedMessageActionResend {
  _: "decryptedMessageActionResend";
  start_seq_no: number;
  end_seq_no: number;
}

export interface decryptedMessageActionNotifyLayer {
  _: "decryptedMessageActionNotifyLayer";
  layer: number;
}

export interface decryptedMessageActionTyping {
  _: "decryptedMessageActionTyping";
  action: SendMessageAction;
}

export interface decryptedMessageActionRequestKey {
  _: "decryptedMessageActionRequestKey";
  exchange_id: bigint;
  g_a: Uint8Array<ArrayBuffer>;
}

export interface decryptedMessageActionAcceptKey {
  _: "decryptedMessageActionAcceptKey";
  exchange_id: bigint;
  g_b: Uint8Array<ArrayBuffer>;
  key_fingerprint: bigint;
}

export interface decryptedMessageActionAbortKey {
  _: "decryptedMessageActionAbortKey";
  exchange_id: bigint;
}

export interface decryptedMessageActionCommitKey {
  _: "decryptedMessageActionCommitKey";
  exchange_id: bigint;
  key_fingerprint: bigint;
}

export interface decryptedMessageActionNoop {
  _: "decryptedMessageActionNoop";
}

export interface documentAttributeImageSize {
  _: "documentAttributeImageSize";
  w: number;
  h: number;
}

export interface documentAttributeAnimated {
  _: "documentAttributeAnimated";
}

export interface documentAttributeSticker23 {
  _: "documentAttributeSticker23";
}

export interface documentAttributeVideo23 {
  _: "documentAttributeVideo23";
  duration: number;
  w: number;
  h: number;
}

export interface documentAttributeAudio23 {
  _: "documentAttributeAudio23";
  duration: number;
}

export interface documentAttributeFilename {
  _: "documentAttributeFilename";
  file_name: string;
}

export interface photoSizeEmpty {
  _: "photoSizeEmpty";
  type: string;
}

export interface photoSize {
  _: "photoSize";
  type: string;
  location: FileLocation;
  w: number;
  h: number;
  size: number;
}

export interface photoCachedSize {
  _: "photoCachedSize";
  type: string;
  location: FileLocation;
  w: number;
  h: number;
  bytes: Uint8Array<ArrayBuffer>;
}

export interface fileLocationUnavailable {
  _: "fileLocationUnavailable";
  volume_id: bigint;
  local_id: number;
  secret: bigint;
}

export interface fileLocation {
  _: "fileLocation";
  dc_id: number;
  volume_id: bigint;
  local_id: number;
  secret: bigint;
}

export interface decryptedMessageMediaExternalDocument {
  _: "decryptedMessageMediaExternalDocument";
  id: bigint;
  access_hash: bigint;
  date: number;
  mime_type: string;
  size: number;
  thumb: PhotoSize;
  dc_id: number;
  attributes: Array<DocumentAttribute>;
}

export interface documentAttributeAudio45 {
  _: "documentAttributeAudio45";
  duration: number;
  title: string;
  performer: string;
}

export interface decryptedMessage46 {
  _: "decryptedMessage46";
  random_id: bigint;
  ttl: number;
  message: string;
  media?: DecryptedMessageMedia;
  entities?: Array<MessageEntity>;
  via_bot_name?: string;
  reply_to_random_id?: bigint;
}

export interface decryptedMessageMediaPhoto {
  _: "decryptedMessageMediaPhoto";
  thumb: Uint8Array<ArrayBuffer>;
  thumb_w: number;
  thumb_h: number;
  w: number;
  h: number;
  size: number;
  key: Uint8Array<ArrayBuffer>;
  iv: Uint8Array<ArrayBuffer>;
  caption: string;
}

export interface decryptedMessageMediaVideo {
  _: "decryptedMessageMediaVideo";
  thumb: Uint8Array<ArrayBuffer>;
  thumb_w: number;
  thumb_h: number;
  duration: number;
  mime_type: string;
  w: number;
  h: number;
  size: number;
  key: Uint8Array<ArrayBuffer>;
  iv: Uint8Array<ArrayBuffer>;
  caption: string;
}

export interface decryptedMessageMediaDocument46 {
  _: "decryptedMessageMediaDocument46";
  thumb: Uint8Array<ArrayBuffer>;
  thumb_w: number;
  thumb_h: number;
  mime_type: string;
  size: number;
  key: Uint8Array<ArrayBuffer>;
  iv: Uint8Array<ArrayBuffer>;
  attributes: Array<DocumentAttribute>;
  caption: string;
}

export interface documentAttributeSticker {
  _: "documentAttributeSticker";
  alt: string;
  stickerset: InputStickerSet;
}

export interface documentAttributeAudio {
  _: "documentAttributeAudio";
  voice?: true;
  duration: number;
  title?: string;
  performer?: string;
  waveform?: Uint8Array<ArrayBuffer>;
}

export interface messageEntityUnknown {
  _: "messageEntityUnknown";
  offset: number;
  length: number;
}

export interface messageEntityMention {
  _: "messageEntityMention";
  offset: number;
  length: number;
}

export interface messageEntityHashtag {
  _: "messageEntityHashtag";
  offset: number;
  length: number;
}

export interface messageEntityBotCommand {
  _: "messageEntityBotCommand";
  offset: number;
  length: number;
}

export interface messageEntityUrl {
  _: "messageEntityUrl";
  offset: number;
  length: number;
}

export interface messageEntityEmail {
  _: "messageEntityEmail";
  offset: number;
  length: number;
}

export interface messageEntityBold {
  _: "messageEntityBold";
  offset: number;
  length: number;
}

export interface messageEntityItalic {
  _: "messageEntityItalic";
  offset: number;
  length: number;
}

export interface messageEntityCode {
  _: "messageEntityCode";
  offset: number;
  length: number;
}

export interface messageEntityPre {
  _: "messageEntityPre";
  offset: number;
  length: number;
  language: string;
}

export interface messageEntityTextUrl {
  _: "messageEntityTextUrl";
  offset: number;
  length: number;
  url: string;
}

export interface messageEntityMentionName {
  _: "messageEntityMentionName";
  offset: number;
  length: number;
  user_id: number;
}

export interface messageEntityPhone {
  _: "messageEntityPhone";
  offset: number;
  length: number;
}

export interface messageEntityCashtag {
  _: "messageEntityCashtag";
  offset: number;
  length: number;
}

export interface messageEntityBankCard {
  _: "messageEntityBankCard";
  offset: number;
  length: number;
}

export interface inputStickerSetShortName {
  _: "inputStickerSetShortName";
  short_name: string;
}

export interface inputStickerSetEmpty {
  _: "inputStickerSetEmpty";
}

export interface decryptedMessageMediaVenue {
  _: "decryptedMessageMediaVenue";
  lat: number;
  long: number;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
}

export interface decryptedMessageMediaWebPage {
  _: "decryptedMessageMediaWebPage";
  url: string;
}

export interface sendMessageRecordRoundAction {
  _: "sendMessageRecordRoundAction";
}

export interface sendMessageUploadRoundAction {
  _: "sendMessageUploadRoundAction";
}

export interface documentAttributeVideo {
  _: "documentAttributeVideo";
  round_message?: true;
  duration: number;
  w: number;
  h: number;
}

export interface decryptedMessage {
  _: "decryptedMessage";
  silent?: true;
  random_id: bigint;
  ttl: number;
  message: string;
  media?: DecryptedMessageMedia;
  entities?: Array<MessageEntity>;
  via_bot_name?: string;
  reply_to_random_id?: bigint;
  grouped_id?: bigint;
}

export interface messageEntityUnderline {
  _: "messageEntityUnderline";
  offset: number;
  length: number;
}

export interface messageEntityStrike {
  _: "messageEntityStrike";
  offset: number;
  length: number;
}

export interface messageEntityBlockquote {
  _: "messageEntityBlockquote";
  offset: number;
  length: number;
}

export interface decryptedMessageMediaDocument {
  _: "decryptedMessageMediaDocument";
  thumb: Uint8Array<ArrayBuffer>;
  thumb_w: number;
  thumb_h: number;
  mime_type: string;
  size: bigint;
  key: Uint8Array<ArrayBuffer>;
  iv: Uint8Array<ArrayBuffer>;
  attributes: Array<DocumentAttribute>;
  caption: string;
}

export interface messageEntitySpoiler {
  _: "messageEntitySpoiler";
  offset: number;
  length: number;
}

export interface messageEntityCustomEmoji {
  _: "messageEntityCustomEmoji";
  offset: number;
  length: number;
  document_id: bigint;
}

export interface Types {
  "true": true_;
  "decryptedMessage8": decryptedMessage8;
  "decryptedMessageService8": decryptedMessageService8;
  "decryptedMessageMediaEmpty": decryptedMessageMediaEmpty;
  "decryptedMessageMediaPhoto8": decryptedMessageMediaPhoto8;
  "decryptedMessageMediaVideo8": decryptedMessageMediaVideo8;
  "decryptedMessageMediaGeoPoint": decryptedMessageMediaGeoPoint;
  "decryptedMessageMediaContact": decryptedMessageMediaContact;
  "decryptedMessageActionSetMessageTTL": decryptedMessageActionSetMessageTTL;
  "decryptedMessageMediaDocument8": decryptedMessageMediaDocument8;
  "decryptedMessageMediaAudio8": decryptedMessageMediaAudio8;
  "decryptedMessageActionReadMessages": decryptedMessageActionReadMessages;
  "decryptedMessageActionDeleteMessages": decryptedMessageActionDeleteMessages;
  "decryptedMessageActionScreenshotMessages": decryptedMessageActionScreenshotMessages;
  "decryptedMessageActionFlushHistory": decryptedMessageActionFlushHistory;
  "decryptedMessage23": decryptedMessage23;
  "decryptedMessageService": decryptedMessageService;
  "decryptedMessageMediaVideo23": decryptedMessageMediaVideo23;
  "decryptedMessageMediaAudio": decryptedMessageMediaAudio;
  "decryptedMessageLayer": decryptedMessageLayer;
  "sendMessageTypingAction": sendMessageTypingAction;
  "sendMessageCancelAction": sendMessageCancelAction;
  "sendMessageRecordVideoAction": sendMessageRecordVideoAction;
  "sendMessageUploadVideoAction": sendMessageUploadVideoAction;
  "sendMessageRecordAudioAction": sendMessageRecordAudioAction;
  "sendMessageUploadAudioAction": sendMessageUploadAudioAction;
  "sendMessageUploadPhotoAction": sendMessageUploadPhotoAction;
  "sendMessageUploadDocumentAction": sendMessageUploadDocumentAction;
  "sendMessageGeoLocationAction": sendMessageGeoLocationAction;
  "sendMessageChooseContactAction": sendMessageChooseContactAction;
  "decryptedMessageActionResend": decryptedMessageActionResend;
  "decryptedMessageActionNotifyLayer": decryptedMessageActionNotifyLayer;
  "decryptedMessageActionTyping": decryptedMessageActionTyping;
  "decryptedMessageActionRequestKey": decryptedMessageActionRequestKey;
  "decryptedMessageActionAcceptKey": decryptedMessageActionAcceptKey;
  "decryptedMessageActionAbortKey": decryptedMessageActionAbortKey;
  "decryptedMessageActionCommitKey": decryptedMessageActionCommitKey;
  "decryptedMessageActionNoop": decryptedMessageActionNoop;
  "documentAttributeImageSize": documentAttributeImageSize;
  "documentAttributeAnimated": documentAttributeAnimated;
  "documentAttributeSticker23": documentAttributeSticker23;
  "documentAttributeVideo23": documentAttributeVideo23;
  "documentAttributeAudio23": documentAttributeAudio23;
  "documentAttributeFilename": documentAttributeFilename;
  "photoSizeEmpty": photoSizeEmpty;
  "photoSize": photoSize;
  "photoCachedSize": photoCachedSize;
  "fileLocationUnavailable": fileLocationUnavailable;
  "fileLocation": fileLocation;
  "decryptedMessageMediaExternalDocument": decryptedMessageMediaExternalDocument;
  "documentAttributeAudio45": documentAttributeAudio45;
  "decryptedMessage46": decryptedMessage46;
  "decryptedMessageMediaPhoto": decryptedMessageMediaPhoto;
  "decryptedMessageMediaVideo": decryptedMessageMediaVideo;
  "decryptedMessageMediaDocument46": decryptedMessageMediaDocument46;
  "documentAttributeSticker": documentAttributeSticker;
  "documentAttributeAudio": documentAttributeAudio;
  "messageEntityUnknown": messageEntityUnknown;
  "messageEntityMention": messageEntityMention;
  "messageEntityHashtag": messageEntityHashtag;
  "messageEntityBotCommand": messageEntityBotCommand;
  "messageEntityUrl": messageEntityUrl;
  "messageEntityEmail": messageEntityEmail;
  "messageEntityBold": messageEntityBold;
  "messageEntityItalic": messageEntityItalic;
  "messageEntityCode": messageEntityCode;
  "messageEntityPre": messageEntityPre;
  "messageEntityTextUrl": messageEntityTextUrl;
  "messageEntityMentionName": messageEntityMentionName;
  "messageEntityPhone": messageEntityPhone;
  "messageEntityCashtag": messageEntityCashtag;
  "messageEntityBankCard": messageEntityBankCard;
  "inputStickerSetShortName": inputStickerSetShortName;
  "inputStickerSetEmpty": inputStickerSetEmpty;
  "decryptedMessageMediaVenue": decryptedMessageMediaVenue;
  "decryptedMessageMediaWebPage": decryptedMessageMediaWebPage;
  "sendMessageRecordRoundAction": sendMessageRecordRoundAction;
  "sendMessageUploadRoundAction": sendMessageUploadRoundAction;
  "documentAttributeVideo": documentAttributeVideo;
  "decryptedMessage": decryptedMessage;
  "messageEntityUnderline": messageEntityUnderline;
  "messageEntityStrike": messageEntityStrike;
  "messageEntityBlockquote": messageEntityBlockquote;
  "decryptedMessageMediaDocument": decryptedMessageMediaDocument;
  "messageEntitySpoiler": messageEntitySpoiler;
  "messageEntityCustomEmoji": messageEntityCustomEmoji;
}

export interface Enums {
  "True": True;
  "DecryptedMessage": DecryptedMessage;
  "DecryptedMessageMedia": DecryptedMessageMedia;
  "DecryptedMessageAction": DecryptedMessageAction;
  "DecryptedMessageLayer": DecryptedMessageLayer;
  "SendMessageAction": SendMessageAction;
  "DocumentAttribute": DocumentAttribute;
  "PhotoSize": PhotoSize;
  "FileLocation": FileLocation;
  "MessageEntity": MessageEntity;
  "InputStickerSet": InputStickerSet;
}

export type AnyType = Types[keyof Types];

export type AnyObject = AnyType;

export type True = true_;

export type DecryptedMessage = decryptedMessage8 | decryptedMessageService8 | decryptedMessage23 | decryptedMessageService | decryptedMessage46 | decryptedMessage;

export type DecryptedMessageMedia = decryptedMessageMediaEmpty | decryptedMessageMediaPhoto8 | decryptedMessageMediaVideo8 | decryptedMessageMediaGeoPoint | decryptedMessageMediaContact | decryptedMessageMediaDocument8 | decryptedMessageMediaAudio8 | decryptedMessageMediaVideo23 | decryptedMessageMediaAudio | decryptedMessageMediaExternalDocument | decryptedMessageMediaPhoto | decryptedMessageMediaVideo | decryptedMessageMediaDocument46 | decryptedMessageMediaVenue | decryptedMessageMediaWebPage | decryptedMessageMediaDocument;

export type DecryptedMessageAction = decryptedMessageActionSetMessageTTL | decryptedMessageActionReadMessages | decryptedMessageActionDeleteMessages | decryptedMessageActionScreenshotMessages | decryptedMessageActionFlushHistory | decryptedMessageActionResend | decryptedMessageActionNotifyLayer | decryptedMessageActionTyping | decryptedMessageActionRequestKey | decryptedMessageActionAcceptKey | decryptedMessageActionAbortKey | decryptedMessageActionCommitKey | decryptedMessageActionNoop;

export type DecryptedMessageLayer = decryptedMessageLayer;

export type SendMessageAction = sendMessageTypingAction | sendMessageCancelAction | sendMessageRecordVideoAction | sendMessageUploadVideoAction | sendMessageRecordAudioAction | sendMessageUploadAudioAction | sendMessageUploadPhotoAction | sendMessageUploadDocumentAction | sendMessageGeoLocationAction | sendMessageChooseContactAction | sendMessageRecordRoundAction | sendMessageUploadRoundAction;

export type DocumentAttribute = documentAttributeImageSize | documentAttributeAnimated | documentAttributeSticker23 | documentAttributeVideo23 | documentAttributeAudio23 | documentAttributeFilename | documentAttributeAudio45 | documentAttributeSticker | documentAttributeAudio | documentAttributeVideo;

export type PhotoSize = photoSizeEmpty | photoSize | photoCachedSize;

export type FileLocation = fileLocationUnavailable | fileLocation;

export type MessageEntity = messageEntityUnknown | messageEntityMention | messageEntityHashtag | messageEntityBotCommand | messageEntityUrl | messageEntityEmail | messageEntityBold | messageEntityItalic | messageEntityCode | messageEntityPre | messageEntityTextUrl | messageEntityMentionName | messageEntityPhone | messageEntityCashtag | messageEntityBankCard | messageEntityUnderline | messageEntityStrike | messageEntityBlockquote | messageEntitySpoiler | messageEntityCustomEmoji;

export type InputStickerSet = inputStickerSetShortName | inputStickerSetEmpty;

export const schema = Object.freeze({
  definitions: {
    true: [
      0x3FEDD339,
      [],
      "True",
    ],
    decryptedMessage8: [
      0x1F814F1F,
      [
        ["random_id", "long"],
        ["random_bytes", "bytes"],
        ["message", "string"],
        ["media", "DecryptedMessageMedia"],
      ],
      "DecryptedMessage",
    ],
    decryptedMessageService8: [
      0xAA48327D,
      [
        ["random_id", "long"],
        ["random_bytes", "bytes"],
        ["action", "DecryptedMessageAction"],
      ],
      "DecryptedMessage",
    ],
    decryptedMessageMediaEmpty: [
      0x089F5C4A,
      [],
      "DecryptedMessageMedia",
    ],
    decryptedMessageMediaPhoto8: [
      0x32798A8C,
      [
        ["thumb", "bytes"],
        ["thumb_w", "int"],
        ["thumb_h", "int"],
        ["w", "int"],
        ["h", "int"],
        ["size", "int"],
        ["key", "bytes"],
        ["iv", "bytes"],
      ],
      "DecryptedMessageMedia",
    ],
    decryptedMessageMediaVideo8: [
      0x4CEE6EF3,
      [
        ["thumb", "bytes"],
        ["thumb_w", "int"],
        ["thumb_h", "int"],
        ["duration", "int"],
        ["w", "int"],
        ["h", "int"],
        ["size", "int"],
        ["key", "bytes"],
        ["iv", "bytes"],
      ],
      "DecryptedMessageMedia",
    ],
    decryptedMessageMediaGeoPoint: [
      0x35480A59,
      [
        ["lat", "double"],
        ["long", "double"],
      ],
      "DecryptedMessageMedia",
    ],
    decryptedMessageMediaContact: [
      0x588A0A97,
      [
        ["phone_number", "string"],
        ["first_name", "string"],
        ["last_name", "string"],
        ["user_id", "int"],
      ],
      "DecryptedMessageMedia",
    ],
    decryptedMessageActionSetMessageTTL: [
      0xA1733AEC,
      [
        ["ttl_seconds", "int"],
      ],
      "DecryptedMessageAction",
    ],
    decryptedMessageMediaDocument8: [
      0xB095434B,
      [
        ["thumb", "bytes"],
        ["thumb_w", "int"],
        ["thumb_h", "int"],
        ["file_name", "string"],
        ["mime_type", "string"],
        ["size", "int"],
        ["key", "bytes"],
        ["iv", "bytes"],
      ],
      "DecryptedMessageMedia",
    ],
    decryptedMessageMediaAudio8: [
      0x6080758F,
      [
        ["duration", "int"],
        ["size", "int"],
        ["key", "bytes"],
        ["iv", "bytes"],
      ],
      "DecryptedMessageMedia",
    ],
    decryptedMessageActionReadMessages: [
      0x0C4F40BE,
      [
        ["random_ids", "Vector<long>"],
      ],
      "DecryptedMessageAction",
    ],
    decryptedMessageActionDeleteMessages: [
      0x65614304,
      [
        ["random_ids", "Vector<long>"],
      ],
      "DecryptedMessageAction",
    ],
    decryptedMessageActionScreenshotMessages: [
      0x8AC1F475,
      [
        ["random_ids", "Vector<long>"],
      ],
      "DecryptedMessageAction",
    ],
    decryptedMessageActionFlushHistory: [
      0x6719E45C,
      [],
      "DecryptedMessageAction",
    ],
    decryptedMessage23: [
      0x204D3878,
      [
        ["random_id", "long"],
        ["ttl", "int"],
        ["message", "string"],
        ["media", "DecryptedMessageMedia"],
      ],
      "DecryptedMessage",
    ],
    decryptedMessageService: [
      0x73164160,
      [
        ["random_id", "long"],
        ["action", "DecryptedMessageAction"],
      ],
      "DecryptedMessage",
    ],
    decryptedMessageMediaVideo23: [
      0x524A415D,
      [
        ["thumb", "bytes"],
        ["thumb_w", "int"],
        ["thumb_h", "int"],
        ["duration", "int"],
        ["mime_type", "string"],
        ["w", "int"],
        ["h", "int"],
        ["size", "int"],
        ["key", "bytes"],
        ["iv", "bytes"],
      ],
      "DecryptedMessageMedia",
    ],
    decryptedMessageMediaAudio: [
      0x57E0A9CB,
      [
        ["duration", "int"],
        ["mime_type", "string"],
        ["size", "int"],
        ["key", "bytes"],
        ["iv", "bytes"],
      ],
      "DecryptedMessageMedia",
    ],
    decryptedMessageLayer: [
      0x1BE31789,
      [
        ["random_bytes", "bytes"],
        ["layer", "int"],
        ["in_seq_no", "int"],
        ["out_seq_no", "int"],
        ["message", "DecryptedMessage"],
      ],
      "DecryptedMessageLayer",
    ],
    sendMessageTypingAction: [
      0x16BF744E,
      [],
      "SendMessageAction",
    ],
    sendMessageCancelAction: [
      0xFD5EC8F5,
      [],
      "SendMessageAction",
    ],
    sendMessageRecordVideoAction: [
      0xA187D66F,
      [],
      "SendMessageAction",
    ],
    sendMessageUploadVideoAction: [
      0x92042FF7,
      [],
      "SendMessageAction",
    ],
    sendMessageRecordAudioAction: [
      0xD52F73F7,
      [],
      "SendMessageAction",
    ],
    sendMessageUploadAudioAction: [
      0xE6AC8A6F,
      [],
      "SendMessageAction",
    ],
    sendMessageUploadPhotoAction: [
      0x990A3C1A,
      [],
      "SendMessageAction",
    ],
    sendMessageUploadDocumentAction: [
      0x8FAEE98E,
      [],
      "SendMessageAction",
    ],
    sendMessageGeoLocationAction: [
      0x176F8BA1,
      [],
      "SendMessageAction",
    ],
    sendMessageChooseContactAction: [
      0x628CBC6F,
      [],
      "SendMessageAction",
    ],
    decryptedMessageActionResend: [
      0x511110B0,
      [
        ["start_seq_no", "int"],
        ["end_seq_no", "int"],
      ],
      "DecryptedMessageAction",
    ],
    decryptedMessageActionNotifyLayer: [
      0xF3048883,
      [
        ["layer", "int"],
      ],
      "DecryptedMessageAction",
    ],
    decryptedMessageActionTyping: [
      0xCCB27641,
      [
        ["action", "SendMessageAction"],
      ],
      "DecryptedMessageAction",
    ],
    decryptedMessageActionRequestKey: [
      0xF3C9611B,
      [
        ["exchange_id", "long"],
        ["g_a", "bytes"],
      ],
      "DecryptedMessageAction",
    ],
    decryptedMessageActionAcceptKey: [
      0x6FE1735B,
      [
        ["exchange_id", "long"],
        ["g_b", "bytes"],
        ["key_fingerprint", "long"],
      ],
      "DecryptedMessageAction",
    ],
    decryptedMessageActionAbortKey: [
      0xDD05EC6B,
      [
        ["exchange_id", "long"],
      ],
      "DecryptedMessageAction",
    ],
    decryptedMessageActionCommitKey: [
      0xEC2E0B9B,
      [
        ["exchange_id", "long"],
        ["key_fingerprint", "long"],
      ],
      "DecryptedMessageAction",
    ],
    decryptedMessageActionNoop: [
      0xA82FDD63,
      [],
      "DecryptedMessageAction",
    ],
    documentAttributeImageSize: [
      0x6C37C15C,
      [
        ["w", "int"],
        ["h", "int"],
      ],
      "DocumentAttribute",
    ],
    documentAttributeAnimated: [
      0x11B58939,
      [],
      "DocumentAttribute",
    ],
    documentAttributeSticker23: [
      0xFB0A5727,
      [],
      "DocumentAttribute",
    ],
    documentAttributeVideo23: [
      0x5910CCCB,
      [
        ["duration", "int"],
        ["w", "int"],
        ["h", "int"],
      ],
      "DocumentAttribute",
    ],
    documentAttributeAudio23: [
      0x051448E5,
      [
        ["duration", "int"],
      ],
      "DocumentAttribute",
    ],
    documentAttributeFilename: [
      0x15590068,
      [
        ["file_name", "string"],
      ],
      "DocumentAttribute",
    ],
    photoSizeEmpty: [
      0x0E17E23C,
      [
        ["type", "string"],
      ],
      "PhotoSize",
    ],
    photoSize: [
      0x77BFB61B,
      [
        ["type", "string"],
        ["location", "FileLocation"],
        ["w", "int"],
        ["h", "int"],
        ["size", "int"],
      ],
      "PhotoSize",
    ],
    photoCachedSize: [
      0xE9A734FA,
      [
        ["type", "string"],
        ["location", "FileLocation"],
        ["w", "int"],
        ["h", "int"],
        ["bytes", "bytes"],
      ],
      "PhotoSize",
    ],
    fileLocationUnavailable: [
      0x7C596B46,
      [
        ["volume_id", "long"],
        ["local_id", "int"],
        ["secret", "long"],
      ],
      "FileLocation",
    ],
    fileLocation: [
      0x53D69076,
      [
        ["dc_id", "int"],
        ["volume_id", "long"],
        ["local_id", "int"],
        ["secret", "long"],
      ],
      "FileLocation",
    ],
    decryptedMessageMediaExternalDocument: [
      0xFA95B0DD,
      [
        ["id", "long"],
        ["access_hash", "long"],
        ["date", "int"],
        ["mime_type", "string"],
        ["size", "int"],
        ["thumb", "PhotoSize"],
        ["dc_id", "int"],
        ["attributes", "Vector<DocumentAttribute>"],
      ],
      "DecryptedMessageMedia",
    ],
    documentAttributeAudio45: [
      0xDED218E0,
      [
        ["duration", "int"],
        ["title", "string"],
        ["performer", "string"],
      ],
      "DocumentAttribute",
    ],
    decryptedMessage46: [
      0x36B091DE,
      [
        ["flags", "#"],
        ["random_id", "long"],
        ["ttl", "int"],
        ["message", "string"],
        ["media", "flags.9?DecryptedMessageMedia"],
        ["entities", "flags.7?Vector<MessageEntity>"],
        ["via_bot_name", "flags.11?string"],
        ["reply_to_random_id", "flags.3?long"],
      ],
      "DecryptedMessage",
    ],
    decryptedMessageMediaPhoto: [
      0xF1FA8D78,
      [
        ["thumb", "bytes"],
        ["thumb_w", "int"],
        ["thumb_h", "int"],
        ["w", "int"],
        ["h", "int"],
        ["size", "int"],
        ["key", "bytes"],
        ["iv", "bytes"],
        ["caption", "string"],
      ],
      "DecryptedMessageMedia",
    ],
    decryptedMessageMediaVideo: [
      0x970C8C0E,
      [
        ["thumb", "bytes"],
        ["thumb_w", "int"],
        ["thumb_h", "int"],
        ["duration", "int"],
        ["mime_type", "string"],
        ["w", "int"],
        ["h", "int"],
        ["size", "int"],
        ["key", "bytes"],
        ["iv", "bytes"],
        ["caption", "string"],
      ],
      "DecryptedMessageMedia",
    ],
    decryptedMessageMediaDocument46: [
      0x7AFE8AE2,
      [
        ["thumb", "bytes"],
        ["thumb_w", "int"],
        ["thumb_h", "int"],
        ["mime_type", "string"],
        ["size", "int"],
        ["key", "bytes"],
        ["iv", "bytes"],
        ["attributes", "Vector<DocumentAttribute>"],
        ["caption", "string"],
      ],
      "DecryptedMessageMedia",
    ],
    documentAttributeSticker: [
      0x3A556302,
      [
        ["alt", "string"],
        ["stickerset", "InputStickerSet"],
      ],
      "DocumentAttribute",
    ],
    documentAttributeAudio: [
      0x9852F9C6,
      [
        ["flags", "#"],
        ["voice", "flags.10?true"],
        ["duration", "int"],
        ["title", "flags.0?string"],
        ["performer", "flags.1?string"],
        ["waveform", "flags.2?bytes"],
      ],
      "DocumentAttribute",
    ],
    messageEntityUnknown: [
      0xBB92BA95,
      [
        ["offset", "int"],
        ["length", "int"],
      ],
      "MessageEntity",
    ],
    messageEntityMention: [
      0xFA04579D,
      [
        ["offset", "int"],
        ["length", "int"],
      ],
      "MessageEntity",
    ],
    messageEntityHashtag: [
      0x6F635B0D,
      [
        ["offset", "int"],
        ["length", "int"],
      ],
      "MessageEntity",
    ],
    messageEntityBotCommand: [
      0x6CEF8AC7,
      [
        ["offset", "int"],
        ["length", "int"],
      ],
      "MessageEntity",
    ],
    messageEntityUrl: [
      0x6ED02538,
      [
        ["offset", "int"],
        ["length", "int"],
      ],
      "MessageEntity",
    ],
    messageEntityEmail: [
      0x64E475C2,
      [
        ["offset", "int"],
        ["length", "int"],
      ],
      "MessageEntity",
    ],
    messageEntityBold: [
      0xBD610BC9,
      [
        ["offset", "int"],
        ["length", "int"],
      ],
      "MessageEntity",
    ],
    messageEntityItalic: [
      0x826F8B60,
      [
        ["offset", "int"],
        ["length", "int"],
      ],
      "MessageEntity",
    ],
    messageEntityCode: [
      0x28A20571,
      [
        ["offset", "int"],
        ["length", "int"],
      ],
      "MessageEntity",
    ],
    messageEntityPre: [
      0x73924BE0,
      [
        ["offset", "int"],
        ["length", "int"],
        ["language", "string"],
      ],
      "MessageEntity",
    ],
    messageEntityTextUrl: [
      0x76A6D327,
      [
        ["offset", "int"],
        ["length", "int"],
        ["url", "string"],
      ],
      "MessageEntity",
    ],
    messageEntityMentionName: [
      0x352DCA58,
      [
        ["offset", "int"],
        ["length", "int"],
        ["user_id", "int"],
      ],
      "MessageEntity",
    ],
    messageEntityPhone: [
      0x9B69E34B,
      [
        ["offset", "int"],
        ["length", "int"],
      ],
      "MessageEntity",
    ],
    messageEntityCashtag: [
      0x4C4E743F,
      [
        ["offset", "int"],
        ["length", "int"],
      ],
      "MessageEntity",
    ],
    messageEntityBankCard: [
      0x761E6AF4,
      [
        ["offset", "int"],
        ["length", "int"],
      ],
      "MessageEntity",
    ],
    inputStickerSetShortName: [
      0x861CC8A0,
      [
        ["short_name", "string"],
      ],
      "InputStickerSet",
    ],
    inputStickerSetEmpty: [
      0xFFB62B95,
      [],
      "InputStickerSet",
    ],
    decryptedMessageMediaVenue: [
      0x8A0DF56F,
      [
        ["lat", "double"],
        ["long", "double"],
        ["title", "string"],
        ["address", "string"],
        ["provider", "string"],
        ["venue_id", "string"],
      ],
      "DecryptedMessageMedia",
    ],
    decryptedMessageMediaWebPage: [
      0xE50511D8,
      [
        ["url", "string"],
      ],
      "DecryptedMessageMedia",
    ],
    sendMessageRecordRoundAction: [
      0x88F27FBC,
      [],
      "SendMessageAction",
    ],
    sendMessageUploadRoundAction: [
      0xBB718624,
      [],
      "SendMessageAction",
    ],
    documentAttributeVideo: [
      0x0EF02CE6,
      [
        ["flags", "#"],
        ["round_message", "flags.0?true"],
        ["duration", "int"],
        ["w", "int"],
        ["h", "int"],
      ],
      "DocumentAttribute",
    ],
    decryptedMessage: [
      0x91CC4674,
      [
        ["flags", "#"],
        ["silent", "flags.5?true"],
        ["random_id", "long"],
        ["ttl", "int"],
        ["message", "string"],
        ["media", "flags.9?DecryptedMessageMedia"],
        ["entities", "flags.7?Vector<MessageEntity>"],
        ["via_bot_name", "flags.11?string"],
        ["reply_to_random_id", "flags.3?long"],
        ["grouped_id", "flags.17?long"],
      ],
      "DecryptedMessage",
    ],
    messageEntityUnderline: [
      0x9C4E7E8B,
      [
        ["offset", "int"],
        ["length", "int"],
      ],
      "MessageEntity",
    ],
    messageEntityStrike: [
      0xBF0693D4,
      [
        ["offset", "int"],
        ["length", "int"],
      ],
      "MessageEntity",
    ],
    messageEntityBlockquote: [
      0x020DF5D0,
      [
        ["offset", "int"],
        ["length", "int"],
      ],
      "MessageEntity",
    ],
    decryptedMessageMediaDocument: [
      0x6ABD9782,
      [
        ["thumb", "bytes"],
        ["thumb_w", "int"],
        ["thumb_h", "int"],
        ["mime_type", "string"],
        ["size", "long"],
        ["key", "bytes"],
        ["iv", "bytes"],
        ["attributes", "Vector<DocumentAttribute>"],
        ["caption", "string"],
      ],
      "DecryptedMessageMedia",
    ],
    messageEntitySpoiler: [
      0x32CA960F,
      [
        ["offset", "int"],
        ["length", "int"],
      ],
      "MessageEntity",
    ],
    messageEntityCustomEmoji: [
      0xC8CF05F8,
      [
        ["offset", "int"],
        ["length", "int"],
        ["document_id", "long"],
      ],
      "MessageEntity",
    ],
  },
  identifierToName: {
    [0x3FEDD339]: "true",
    [0x1F814F1F]: "decryptedMessage8",
    [0xAA48327D]: "decryptedMessageService8",
    [0x089F5C4A]: "decryptedMessageMediaEmpty",
    [0x32798A8C]: "decryptedMessageMediaPhoto8",
    [0x4CEE6EF3]: "decryptedMessageMediaVideo8",
    [0x35480A59]: "decryptedMessageMediaGeoPoint",
    [0x588A0A97]: "decryptedMessageMediaContact",
    [0xA1733AEC]: "decryptedMessageActionSetMessageTTL",
    [0xB095434B]: "decryptedMessageMediaDocument8",
    [0x6080758F]: "decryptedMessageMediaAudio8",
    [0x0C4F40BE]: "decryptedMessageActionReadMessages",
    [0x65614304]: "decryptedMessageActionDeleteMessages",
    [0x8AC1F475]: "decryptedMessageActionScreenshotMessages",
    [0x6719E45C]: "decryptedMessageActionFlushHistory",
    [0x204D3878]: "decryptedMessage23",
    [0x73164160]: "decryptedMessageService",
    [0x524A415D]: "decryptedMessageMediaVideo23",
    [0x57E0A9CB]: "decryptedMessageMediaAudio",
    [0x1BE31789]: "decryptedMessageLayer",
    [0x16BF744E]: "sendMessageTypingAction",
    [0xFD5EC8F5]: "sendMessageCancelAction",
    [0xA187D66F]: "sendMessageRecordVideoAction",
    [0x92042FF7]: "sendMessageUploadVideoAction",
    [0xD52F73F7]: "sendMessageRecordAudioAction",
    [0xE6AC8A6F]: "sendMessageUploadAudioAction",
    [0x990A3C1A]: "sendMessageUploadPhotoAction",
    [0x8FAEE98E]: "sendMessageUploadDocumentAction",
    [0x176F8BA1]: "sendMessageGeoLocationAction",
    [0x628CBC6F]: "sendMessageChooseContactAction",
    [0x511110B0]: "decryptedMessageActionResend",
    [0xF3048883]: "decryptedMessageActionNotifyLayer",
    [0xCCB27641]: "decryptedMessageActionTyping",
    [0xF3C9611B]: "decryptedMessageActionRequestKey",
    [0x6FE1735B]: "decryptedMessageActionAcceptKey",
    [0xDD05EC6B]: "decryptedMessageActionAbortKey",
    [0xEC2E0B9B]: "decryptedMessageActionCommitKey",
    [0xA82FDD63]: "decryptedMessageActionNoop",
    [0x6C37C15C]: "documentAttributeImageSize",
    [0x11B58939]: "documentAttributeAnimated",
    [0xFB0A5727]: "documentAttributeSticker23",
    [0x5910CCCB]: "documentAttributeVideo23",
    [0x051448E5]: "documentAttributeAudio23",
    [0x15590068]: "documentAttributeFilename",
    [0x0E17E23C]: "photoSizeEmpty",
    [0x77BFB61B]: "photoSize",
    [0xE9A734FA]: "photoCachedSize",
    [0x7C596B46]: "fileLocationUnavailable",
    [0x53D69076]: "fileLocation",
    [0xFA95B0DD]: "decryptedMessageMediaExternalDocument",
    [0xDED218E0]: "documentAttributeAudio45",
    [0x36B091DE]: "decryptedMessage46",
    [0xF1FA8D78]: "decryptedMessageMediaPhoto",
    [0x970C8C0E]: "decryptedMessageMediaVideo",
    [0x7AFE8AE2]: "decryptedMessageMediaDocument46",
    [0x3A556302]: "documentAttributeSticker",
    [0x9852F9C6]: "documentAttributeAudio",
    [0xBB92BA95]: "messageEntityUnknown",
    [0xFA04579D]: "messageEntityMention",
    [0x6F635B0D]: "messageEntityHashtag",
    [0x6CEF8AC7]: "messageEntityBotCommand",
    [0x6ED02538]: "messageEntityUrl",
    [0x64E475C2]: "messageEntityEmail",
    [0xBD610BC9]: "messageEntityBold",
    [0x826F8B60]: "messageEntityItalic",
    [0x28A20571]: "messageEntityCode",
    [0x73924BE0]: "messageEntityPre",
    [0x76A6D327]: "messageEntityTextUrl",
    [0x352DCA58]: "messageEntityMentionName",
    [0x9B69E34B]: "messageEntityPhone",
    [0x4C4E743F]: "messageEntityCashtag",
    [0x761E6AF4]: "messageEntityBankCard",
    [0x861CC8A0]: "inputStickerSetShortName",
    [0xFFB62B95]: "inputStickerSetEmpty",
    [0x8A0DF56F]: "decryptedMessageMediaVenue",
    [0xE50511D8]: "decryptedMessageMediaWebPage",
    [0x88F27FBC]: "sendMessageRecordRoundAction",
    [0xBB718624]: "sendMessageUploadRoundAction",
    [0x0EF02CE6]: "documentAttributeVideo",
    [0x91CC4674]: "decryptedMessage",
    [0x9C4E7E8B]: "messageEntityUnderline",
    [0xBF0693D4]: "messageEntityStrike",
    [0x020DF5D0]: "messageEntityBlockquote",
    [0x6ABD9782]: "decryptedMessageMediaDocument",
    [0x32CA960F]: "messageEntitySpoiler",
    [0xC8CF05F8]: "messageEntityCustomEmoji",
  },
}) as unknown as Schema;
