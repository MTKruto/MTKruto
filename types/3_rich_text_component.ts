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
import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { deserializeFileId } from "./_file_id.ts";
import { constructPhoto } from "./1_photo.ts";
import { constructDateTimeFormat, timeFormatToTlObject } from "./2_message_entity.ts";

/**
 * An empty rich text component.
 * @unlisted
 */
export interface RichTextComponentEmpty {
  type: "empty";
}

/**
 * A plain rich text component.
 * @unlisted
 */
export interface RichTextComponentPlain {
  type: "plain";
  text: string;
}

/**
 * A rich text component that has its child bold.
 * @unlisted
 */
export interface RichTextComponentBold {
  type: "bold";
  text: RichTextComponent;
}

/**
 * A rich text component that has its child italic.
 * @unlisted
 */
export interface RichTextComponentItalic {
  type: "italic";
  text: RichTextComponent;
}

/**
 * A rich text component that has its child underlined.
 * @unlisted
 */
export interface RichTextComponentUnderline {
  type: "underline";
  text: RichTextComponent;
}

/**
 * A rich text component that has its child struck through.
 * @unlisted
 */
export interface RichTextComponentStrikethrough {
  type: "strikethrough";
  text: RichTextComponent;
}

/**
 * A fixed rich text component.
 * @unlisted
 */
export interface RichTextComponentFixed {
  type: "fixed";
  text: RichTextComponent;
}

/**
 * A rich text component that opens a URL when clicked.
 * @unlisted
 */
export interface RichTextComponentLink {
  type: "link";
  url: string;
  linkPreviewId: string;
  text: RichTextComponent;
}

/**
 * A rich text component that opens the email address represented by its child when clicked.
 * @unlisted
 */
export interface RichTextComponentEmail {
  type: "email";
  text: RichTextComponent;
}

/**
 * A rich text component for concatenating other rich text components.
 * @unlisted
 */
export interface RichTextComponentConcatenate {
  type: "concatenate";
  components: RichTextComponent[];
}

/**
 * A rich text component that has its child in the subscript.
 * @unlisted
 */
export interface RichTextComponentSubscript {
  type: "subscript";
  text: RichTextComponent;
}

/**
 * A rich text component that has its child in the superscript.
 * @unlisted
 */
export interface RichTextComponentSuperscript {
  type: "superscript";
  text: RichTextComponent;
}

/**
 * A rich text component that has its child marked.
 * @unlisted
 */
export interface RichTextComponentMarked {
  type: "marked";
  text: RichTextComponent;
}

/**
 * A rich text component that links to a phone number.
 * @unlisted
 */
export interface RichTextComponentPhoneNumberLink {
  type: "phoneNumberLink";
  phoneNumber: string;
  text: RichTextComponent;
}

/**
 * A rich text component that displays an inline photo.
 * @unlisted
 */
export interface RichTextComponentPhoto {
  type: "photo";
  fileId: string;
  width: number;
  height: number;
}

/**
 * An anchor rich text component.
 * @unlisted
 */
export interface RichTextComponentAnchor {
  type: "anchor";
  name: string;
  text: RichTextComponent;
}

/**
 * A rich text component that displays a mathematical expression.
 * @unlisted
 */
export interface RichTextComponentMath {
  type: "math";
  code: string;
}

/**
 * A rich text component that displays a custom emoji.
 * @unlisted
 */
export interface RichTextComponentCustomEmoji {
  type: "customEmoji";
  customEmojiId: string;
  alt: string;
}

/**
 * A rich text component that displays a spoiler.
 * @unlisted
 */
export interface RichTextComponentSpoiler {
  type: "spoiler";
  text: RichTextComponent;
}

/**
 * A rich text component that mentions a username.
 * @unlisted
 */
export interface RichTextComponentMention {
  type: "mention";
  text: RichTextComponent;
}

/**
 * A hashtag rich text component.
 * @unlisted
 */
export interface RichTextComponentHashtag {
  type: "hashtag";
  text: RichTextComponent;
}

/**
 * A bot command rich text component.
 * @unlisted
 */
export interface RichTextComponentBotCommand {
  type: "botCommand";
  text: RichTextComponent;
}

/**
 * A cashtag rich text component.
 * @unlisted
 */
export interface RichTextComponentCashtag {
  type: "cashtag";
  text: RichTextComponent;
}

/**
 * A rich text component that opens the URL represented by its child when clicked.
 * @unlisted
 */
export interface RichTextComponentUrl {
  type: "url";
  text: RichTextComponent;
}

/**
 * A rich text component that links to an email address.
 * @unlisted
 */
export interface RichTextComponentEmailLink {
  type: "emailLink";
  email: string;
  text: RichTextComponent;
}

/**
 * A rich text component that opens the phone number represented by its child when clicked.
 * @unlisted
 */
export interface RichTextComponentPhone {
  type: "phoneNumber";
  text: RichTextComponent;
}

/**
 * A bank card rich text component.
 * @unlisted
 */
export interface RichTextComponentBankCard {
  type: "bankCard";
  text: RichTextComponent;
}

/**
 * A rich text component that mentions a user with a custom text.
 * @unlisted
 */
export interface RichTextComponentTextMention {
  type: "textMention";
  userId: number;
  text: RichTextComponent;
}

/**
 * A datetime text component.
 * @unlisted
 */
export interface RichTextComponentDateTime {
  type: "dateTime";
  format?: string;
  date: number;
  text: RichTextComponent;
}

/** Any type of rich text component. */
export type RichTextComponent = RichTextComponentEmpty | RichTextComponentPlain | RichTextComponentBold | RichTextComponentItalic | RichTextComponentUnderline | RichTextComponentStrikethrough | RichTextComponentFixed | RichTextComponentLink | RichTextComponentEmailLink | RichTextComponentConcatenate | RichTextComponentSubscript | RichTextComponentSuperscript | RichTextComponentMarked | RichTextComponentPhoneNumberLink | RichTextComponentPhoto | RichTextComponentAnchor | RichTextComponentMath | RichTextComponentCustomEmoji | RichTextComponentSpoiler | RichTextComponentMention | RichTextComponentHashtag | RichTextComponentBotCommand | RichTextComponentCashtag | RichTextComponentUrl | RichTextComponentEmail | RichTextComponentPhone | RichTextComponentBankCard | RichTextComponentTextMention | RichTextComponentDateTime;

export function constructRichTextComponent(rt: Api.RichText, photos: Api.Photo[]): RichTextComponent {
  switch (rt._) {
    case "textMention":
      return { type: "mention", text: constructRichTextComponent(rt.text, photos) };
    case "textEmpty":
      return { type: "empty" };
    case "textPlain":
      return { type: "plain", text: rt.text };
    case "textBold":
      return { type: "bold", text: constructRichTextComponent(rt.text, photos) };
    case "textItalic":
      return { type: "italic", text: constructRichTextComponent(rt.text, photos) };
    case "textUnderline":
      return { type: "underline", text: constructRichTextComponent(rt.text, photos) };
    case "textStrike":
      return { type: "strikethrough", text: constructRichTextComponent(rt.text, photos) };
    case "textFixed":
      return { type: "fixed", text: constructRichTextComponent(rt.text, photos) };
    case "textUrl":
      return { type: "link", url: rt.url, linkPreviewId: String(rt.webpage_id), text: constructRichTextComponent(rt.text, photos) };
    case "textEmail":
      return { type: "emailLink", email: rt.email, text: constructRichTextComponent(rt.text, photos) };
    case "textConcat":
      return { type: "concatenate", components: rt.texts.map((v) => constructRichTextComponent(v, photos)) };
    case "textSubscript":
      return { type: "subscript", text: constructRichTextComponent(rt.text, photos) };
    case "textSuperscript":
      return { type: "superscript", text: constructRichTextComponent(rt.text, photos) };
    case "textMarked":
      return { type: "marked", text: constructRichTextComponent(rt.text, photos) };
    case "textPhone":
      return { type: "phoneNumberLink", phoneNumber: rt.phone, text: constructRichTextComponent(rt.text, photos) };
    case "textImage": {
      const photo = Api.as("photo", photos.find((v) => v.id === rt.document_id));
      const fileId = constructPhoto(photo).fileId;
      return { type: "photo", fileId, width: rt.w, height: rt.h };
    }
    case "textAnchor":
      return { type: "anchor", name: rt.name, text: constructRichTextComponent(rt.text, photos) };
    case "textMath":
      return { type: "math", code: rt.source };
    case "textCustomEmoji":
      return { type: "customEmoji", customEmojiId: String(rt.document_id), alt: rt.alt };
    case "textSpoiler":
      return { type: "spoiler", text: constructRichTextComponent(rt.text, photos) };
    case "textHashtag":
      return { type: "hashtag", text: constructRichTextComponent(rt.text, photos) };
    case "textBotCommand":
      return { type: "botCommand", text: constructRichTextComponent(rt.text, photos) };
    case "textCashtag":
      return { type: "cashtag", text: constructRichTextComponent(rt.text, photos) };
    case "textAutoUrl":
      return { type: "url", text: constructRichTextComponent(rt.text, photos) };
    case "textAutoEmail":
      return { type: "email", text: constructRichTextComponent(rt.text, photos) };
    case "textAutoPhone":
      return { type: "phoneNumber", text: constructRichTextComponent(rt.text, photos) };
    case "textBankCard":
      return { type: "bankCard", text: constructRichTextComponent(rt.text, photos) };
    case "textMentionName":
      return { type: "textMention", userId: Number(rt.user_id), text: constructRichTextComponent(rt.text, photos) };
    case "textDate":
      return cleanObject({ type: "dateTime", isRelative: !!rt.relative, format: constructDateTimeFormat(rt) || undefined, date: rt.date, text: constructRichTextComponent(rt.text, photos) });
  }

  unreachable();
}

export function richTextComponentToTlObject(rtc: RichTextComponent): Api.RichText {
  switch (rtc.type) {
    case "empty":
      return { _: "textEmpty" };
    case "plain":
      return { _: "textPlain", text: rtc.text };
    case "bold":
      return { _: "textBold", text: richTextComponentToTlObject(rtc.text) };
    case "italic":
      return { _: "textItalic", text: richTextComponentToTlObject(rtc.text) };
    case "underline":
      return { _: "textUnderline", text: richTextComponentToTlObject(rtc.text) };
    case "strikethrough":
      return { _: "textStrike", text: richTextComponentToTlObject(rtc.text) };
    case "fixed":
      return { _: "textFixed", text: richTextComponentToTlObject(rtc.text) };
    case "link":
      return { _: "textUrl", url: rtc.url, webpage_id: BigInt(rtc.linkPreviewId), text: richTextComponentToTlObject(rtc.text) };
    case "emailLink":
      return { _: "textEmail", email: rtc.email, text: richTextComponentToTlObject(rtc.text) };
    case "concatenate":
      return { _: "textConcat", texts: rtc.components.map(richTextComponentToTlObject) };
    case "subscript":
      return { _: "textSubscript", text: richTextComponentToTlObject(rtc.text) };
    case "superscript":
      return { _: "textSuperscript", text: richTextComponentToTlObject(rtc.text) };
    case "marked":
      return { _: "textMarked", text: richTextComponentToTlObject(rtc.text) };
    case "phoneNumberLink":
      return { _: "textPhone", phone: rtc.phoneNumber, text: richTextComponentToTlObject(rtc.text) };
    case "photo": {
      const fileId = deserializeFileId(rtc.fileId);
      if (!("id" in fileId.location)) {
        unreachable();
      }
      return { _: "textImage", document_id: fileId.location.id, w: rtc.width, h: rtc.height };
    }
    case "anchor":
      return { _: "textAnchor", name: rtc.name, text: richTextComponentToTlObject(rtc.text) };
    case "math":
      return { _: "textMath", source: rtc.code };
    case "customEmoji":
      return { _: "textCustomEmoji", document_id: BigInt(rtc.customEmojiId), alt: rtc.alt };
    case "spoiler":
      return { _: "textSpoiler", text: richTextComponentToTlObject(rtc.text) };
    case "mention":
      return { _: "textMention", text: richTextComponentToTlObject(rtc.text) };
    case "hashtag":
      return { _: "textHashtag", text: richTextComponentToTlObject(rtc.text) };
    case "botCommand":
      return { _: "textBotCommand", text: richTextComponentToTlObject(rtc.text) };
    case "cashtag":
      return { _: "textCashtag", text: richTextComponentToTlObject(rtc.text) };
    case "url":
      return { _: "textAutoUrl", text: richTextComponentToTlObject(rtc.text) };
    case "email":
      return { _: "textAutoEmail", text: richTextComponentToTlObject(rtc.text) };
    case "phoneNumber":
      return { _: "textAutoPhone", text: richTextComponentToTlObject(rtc.text) };
    case "bankCard":
      return { _: "textBankCard", text: richTextComponentToTlObject(rtc.text) };
    case "textMention":
      return { _: "textMentionName", text: richTextComponentToTlObject(rtc.text), user_id: BigInt(rtc.userId) };
    case "dateTime": {
      const obj: Api.textDate = { _: "textDate", text: richTextComponentToTlObject(rtc.text), date: rtc.date };
      timeFormatToTlObject(rtc.format ?? "", obj);
      return obj;
    }
  }
}
