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
import { constructRichTextButton, type RichTextButton, richTextButtonToTlObject } from "./1_rich_text_button.ts";
import { constructDateTimeFormat, timeFormatToTlObject } from "./2_message_entity.ts";
import type { UsernameResolver } from "./_getters.ts";

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
  /** The plain text. */
  text: string;
}

/**
 * A rich text component that has its child bold.
 * @unlisted
 */
export interface RichTextComponentBold {
  type: "bold";
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A rich text component that has its child italic.
 * @unlisted
 */
export interface RichTextComponentItalic {
  type: "italic";
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A rich text component that has its child underlined.
 * @unlisted
 */
export interface RichTextComponentUnderline {
  type: "underline";
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A rich text component that has its child struck through.
 * @unlisted
 */
export interface RichTextComponentStrikethrough {
  type: "strikethrough";
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A fixed rich text component.
 * @unlisted
 */
export interface RichTextComponentFixed {
  type: "fixed";
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A rich text component that opens a URL when clicked.
 * @unlisted
 */
export interface RichTextComponentLink {
  type: "link";
  url: string;
  linkPreviewId?: string;
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A rich text component that opens the email address represented by its child when clicked.
 * @unlisted
 */
export interface RichTextComponentEmail {
  type: "email";
  /** The component's inner text. */
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
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A rich text component that has its child in the superscript.
 * @unlisted
 */
export interface RichTextComponentSuperscript {
  type: "superscript";
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A rich text component that has its child marked.
 * @unlisted
 */
export interface RichTextComponentMarked {
  type: "marked";
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A rich text component that links to a phone number.
 * @unlisted
 */
export interface RichTextComponentPhoneNumberLink {
  type: "phoneNumberLink";
  phoneNumber: string;
  /** The component's inner text. */
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
  /** The component's inner text. */
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
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A rich text component that mentions a username.
 * @unlisted
 */
export interface RichTextComponentMention {
  type: "mention";
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A hashtag rich text component.
 * @unlisted
 */
export interface RichTextComponentHashtag {
  type: "hashtag";
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A bot command rich text component.
 * @unlisted
 */
export interface RichTextComponentBotCommand {
  type: "botCommand";
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A cashtag rich text component.
 * @unlisted
 */
export interface RichTextComponentCashtag {
  type: "cashtag";
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A rich text component that opens the URL represented by its child when clicked.
 * @unlisted
 */
export interface RichTextComponentUrl {
  type: "url";
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A rich text component that links to an email address.
 * @unlisted
 */
export interface RichTextComponentEmailLink {
  type: "emailLink";
  email: string;
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A rich text component that opens the phone number represented by its child when clicked.
 * @unlisted
 */
export interface RichTextComponentPhone {
  type: "phoneNumber";
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A bank card rich text component.
 * @unlisted
 */
export interface RichTextComponentBankCard {
  type: "bankCard";
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A rich text component that mentions a user with a custom text.
 * @unlisted
 */
export interface RichTextComponentTextMention {
  type: "textMention";
  userId: number;
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A datetime rich text component.
 * @unlisted
 */
export interface RichTextComponentDateTime {
  type: "dateTime";
  format?: string;
  date: number;
  /** The component's inner text. */
  text: RichTextComponent;
}

/**
 * A button rich text component.
 * @unlisted
 */
export interface RichTextComponentButton {
  type: "button";
  /** The component's inner text. */
  text: RichTextComponent;
  /** The button. */
  button: RichTextButton;
}

/** Any type of rich text component. */
export type RichTextComponent = RichTextComponentEmpty | RichTextComponentPlain | RichTextComponentBold | RichTextComponentItalic | RichTextComponentUnderline | RichTextComponentStrikethrough | RichTextComponentFixed | RichTextComponentLink | RichTextComponentEmailLink | RichTextComponentConcatenate | RichTextComponentSubscript | RichTextComponentSuperscript | RichTextComponentMarked | RichTextComponentPhoneNumberLink | RichTextComponentPhoto | RichTextComponentAnchor | RichTextComponentMath | RichTextComponentCustomEmoji | RichTextComponentSpoiler | RichTextComponentMention | RichTextComponentHashtag | RichTextComponentBotCommand | RichTextComponentCashtag | RichTextComponentUrl | RichTextComponentEmail | RichTextComponentPhone | RichTextComponentBankCard | RichTextComponentTextMention | RichTextComponentDateTime | RichTextComponentButton;

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
      return cleanObject({ type: "dateTime", format: constructDateTimeFormat(rt) || undefined, date: rt.date, text: constructRichTextComponent(rt.text, photos) });
    case "textButton":
      return cleanObject({ type: "button", text: constructRichTextComponent(rt.text, photos), button: constructRichTextButton(rt.type, rt.style) });
  }

  unreachable();
}

export async function richTextComponentToTlObject(rtc: RichTextComponent, usernameResolver: UsernameResolver): Promise<Api.RichText> {
  switch (rtc.type) {
    case "empty":
      return { _: "textEmpty" };
    case "plain":
      return { _: "textPlain", text: rtc.text };
    case "bold":
      return { _: "textBold", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "italic":
      return { _: "textItalic", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "underline":
      return { _: "textUnderline", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "strikethrough":
      return { _: "textStrike", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "fixed":
      return { _: "textFixed", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "link":
      return { _: "textUrl", url: rtc.url, webpage_id: BigInt(rtc.linkPreviewId ?? "0"), text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "emailLink":
      return { _: "textEmail", email: rtc.email, text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "concatenate":
      return { _: "textConcat", texts: await Promise.all(rtc.components.map((v) => richTextComponentToTlObject(v, usernameResolver))) };
    case "subscript":
      return { _: "textSubscript", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "superscript":
      return { _: "textSuperscript", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "marked":
      return { _: "textMarked", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "phoneNumberLink":
      return { _: "textPhone", phone: rtc.phoneNumber, text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "photo": {
      const fileId = deserializeFileId(rtc.fileId);
      if (!("id" in fileId.location)) {
        unreachable();
      }
      return { _: "textImage", document_id: fileId.location.id, w: rtc.width, h: rtc.height };
    }
    case "anchor":
      return { _: "textAnchor", name: rtc.name, text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "math":
      return { _: "textMath", source: rtc.code };
    case "customEmoji":
      return { _: "textCustomEmoji", document_id: BigInt(rtc.customEmojiId), alt: rtc.alt };
    case "spoiler":
      return { _: "textSpoiler", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "mention":
      return { _: "textMention", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "hashtag":
      return { _: "textHashtag", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "botCommand":
      return { _: "textBotCommand", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "cashtag":
      return { _: "textCashtag", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "url":
      return { _: "textAutoUrl", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "email":
      return { _: "textAutoEmail", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "phoneNumber":
      return { _: "textAutoPhone", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "bankCard":
      return { _: "textBankCard", text: await richTextComponentToTlObject(rtc.text, usernameResolver) };
    case "textMention":
      return { _: "textMentionName", text: await richTextComponentToTlObject(rtc.text, usernameResolver), user_id: BigInt(rtc.userId) };
    case "dateTime": {
      const obj: Api.textDate = { _: "textDate", text: await richTextComponentToTlObject(rtc.text, usernameResolver), date: rtc.date };
      timeFormatToTlObject(rtc.format ?? "", obj);
      return obj;
    }
    case "button": {
      const obj: Api.textButton = { _: "textButton", text: await richTextComponentToTlObject(rtc.text, usernameResolver), style: { _: "richButtonStyle", bg_danger: rtc.button.style === "danger" || undefined, bg_primary: rtc.button.style === "primary" || undefined, bg_success: rtc.button.style === "success" || undefined, link: rtc.button.style === "link" || undefined }, type: await richTextButtonToTlObject(rtc.button, usernameResolver) };
      return obj;
    }
  }
}
