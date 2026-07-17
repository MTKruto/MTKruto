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
import { SecretChats } from "../2_tl.ts";

/** @unlisted */
export interface _SecretMessageEntityBase {
  /** The offset of the entity. */
  offset: number;
  /** The length of the entity. */
  length: number;
}

/**
 * A message entity that highlights a user mention.
 * @unlisted
 */
export interface SecretMessageEntityMention extends _SecretMessageEntityBase {
  type: "mention";
}

/**
 * A message entity that highlights a hashtag.
 * @unlisted
 */
export interface SecretMessageEntityHashtag extends _SecretMessageEntityBase {
  type: "hashtag";
}

/**
 * A message entity that highlights a bot command.
 * @unlisted
 */
export interface SecretMessageEntityBotCommand extends _SecretMessageEntityBase {
  type: "botCommand";
}

/**
 * A message entity that highlights a URL.
 * @unlisted
 */
export interface SecretMessageEntityURL extends _SecretMessageEntityBase {
  type: "url";
}

/**
 * A message entity that marks an email address.
 * @unlisted
 */
export interface SecretMessageEntityEmailAddress extends _SecretMessageEntityBase {
  type: "email";
}

/**
 * A message entity that marks text as bold.
 * @unlisted
 */
export interface SecretMessageEntityBold extends _SecretMessageEntityBase {
  type: "bold";
}

/**
 * A message entity that marks text as italic.
 * @unlisted
 */
export interface SecretMessageEntityItalic extends _SecretMessageEntityBase {
  type: "italic";
}

/**
 * A preformatted message entity.
 * @unlisted
 */
export interface SecretMessageEntityPre extends _SecretMessageEntityBase {
  type: "pre";
  /** The language identifier of the code. */
  language: string;
}

/**
 * A code message entity.
 * @unlisted
 */
export interface SecretMessageEntityCode extends _SecretMessageEntityBase {
  type: "code";
}

/**
 * A hyperlink message entity.
 * @unlisted
 */
export interface SecretMessageEntityTextLink extends _SecretMessageEntityBase {
  type: "textLink";
  /** A URL that will be opened after the text is tapped. */
  url: string;
}

/**
 * A text mention message entity.
 * @unlisted
 */
export interface SecretMessageEntityTextMention extends _SecretMessageEntityBase {
  type: "textMention";
  /** The identifier of the user to mention. */
  userId: number;
}

/**
 * A message entity that highlights a cashtag.
 * @unlisted
 */
export interface SecretMessageEntityCashtag extends _SecretMessageEntityBase {
  type: "cashtag";
}

/**
 * A message entity that highlights a phone number.
 * @unlisted
 */
export interface SecretMessageEntityPhoneNumber extends _SecretMessageEntityBase {
  type: "phoneNumber";
}

/**
 * A message entity that marks text as underline.
 * @unlisted
 */
export interface SecretMessageEntityUnderline extends _SecretMessageEntityBase {
  type: "underline";
}

/**
 * A message entity that marks text as strikethrough.
 * @unlisted
 */
export interface SecretMessageEntityStrikethrough extends _SecretMessageEntityBase {
  type: "strikethrough";
}

/** @unlisted */
export interface SecretMessageEntityBlockquote extends _SecretMessageEntityBase {
  type: "blockquote";
}

/**
 * A message entity that highlights a bank card number.
 * @unlisted
 */
export interface SecretMessageEntityBankCard extends _SecretMessageEntityBase {
  type: "bankCard";
}

/**
 * A message entity that marks text as spoiler.
 * @unlisted
 */
export interface SecretMessageEntitySpoiler extends _SecretMessageEntityBase {
  type: "spoiler";
}

/**
 * A custom emoji message entity.
 * @unlisted
 */
export interface SecretMessageEntityCustomEmoji extends _SecretMessageEntityBase {
  type: "customEmoji";
  /** The identifier of the custom emoji. */
  customEmojiId: string;
}

/** Any type of secret message entity. */
export type SecretMessageEntity =
  | SecretMessageEntityMention
  | SecretMessageEntityHashtag
  | SecretMessageEntityBotCommand
  | SecretMessageEntityURL
  | SecretMessageEntityEmailAddress
  | SecretMessageEntityBold
  | SecretMessageEntityItalic
  | SecretMessageEntityCode
  | SecretMessageEntityPre
  | SecretMessageEntityTextLink
  | SecretMessageEntityTextMention
  | SecretMessageEntityCashtag
  | SecretMessageEntityPhoneNumber
  | SecretMessageEntityUnderline
  | SecretMessageEntityStrikethrough
  | SecretMessageEntityBlockquote
  | SecretMessageEntityBankCard
  | SecretMessageEntitySpoiler
  | SecretMessageEntityCustomEmoji;

export function constructSecretMessageEntity(obj: SecretChats.MessageEntity): SecretMessageEntity | null {
  if (SecretChats.is("messageEntityMention", obj)) {
    return { type: "mention", offset: obj.offset, length: obj.length };
  } else if (SecretChats.is("messageEntityHashtag", obj)) {
    return { type: "hashtag", offset: obj.offset, length: obj.length };
  } else if (SecretChats.is("messageEntityBotCommand", obj)) {
    return { type: "botCommand", offset: obj.offset ?? 0, length: obj.length };
  } else if (SecretChats.is("messageEntityUrl", obj)) {
    return { type: "url", offset: obj.offset, length: obj.length };
  } else if (SecretChats.is("messageEntityEmail", obj)) {
    return { type: "email", offset: obj.offset, length: obj.length };
  } else if (SecretChats.is("messageEntityBold", obj)) {
    return { type: "bold", offset: obj.offset, length: obj.length };
  } else if (SecretChats.is("messageEntityItalic", obj)) {
    return { type: "italic", offset: obj.offset, length: obj.length };
  } else if (SecretChats.is("messageEntityCode", obj)) {
    return { type: "code", offset: obj.offset, length: obj.length };
  } else if (SecretChats.is("messageEntityPre", obj)) {
    return { type: "pre", offset: obj.offset, length: obj.length, language: obj.language };
  } else if (SecretChats.is("messageEntityTextUrl", obj)) {
    return { type: "textLink", offset: obj.offset, length: obj.length, url: obj.url };
  } else if (SecretChats.is("messageEntityMentionName", obj)) {
    return { type: "textMention", offset: obj.offset, length: obj.length, userId: Number(obj.user_id) };
  } else if (SecretChats.is("messageEntityCashtag", obj)) {
    return { type: "cashtag", offset: obj.offset, length: obj.length };
  } else if (SecretChats.is("messageEntityPhone", obj)) {
    return { type: "phoneNumber", offset: obj.offset, length: obj.length };
  } else if (SecretChats.is("messageEntityUnderline", obj)) {
    return { type: "underline", offset: obj.offset, length: obj.length };
  } else if (SecretChats.is("messageEntityStrike", obj)) {
    return { type: "strikethrough", offset: obj.offset, length: obj.length };
  } else if (SecretChats.is("messageEntityBlockquote", obj)) {
    return cleanObject({ type: "blockquote", offset: obj.offset, length: obj.length } as const);
  } else if (SecretChats.is("messageEntityBankCard", obj)) {
    return { type: "bankCard", offset: obj.offset, length: obj.length };
  } else if (SecretChats.is("messageEntitySpoiler", obj)) {
    return { type: "spoiler", offset: obj.offset, length: obj.length };
  } else if (SecretChats.is("messageEntityCustomEmoji", obj)) {
    return { type: "customEmoji", offset: obj.offset, length: obj.length, customEmojiId: String(obj.document_id) };
  } else {
    return null;
  }
}

export function secretMessageEntityToTlObject(entity: SecretMessageEntity): SecretChats.MessageEntity {
  const { offset, length } = entity;
  switch (entity.type) {
    case "mention":
      return { _: "messageEntityMention", offset, length };
    case "hashtag":
      return { _: "messageEntityHashtag", offset, length };
    case "botCommand":
      return { _: "messageEntityBotCommand", offset, length };
    case "url":
      return { _: "messageEntityUrl", offset, length };
    case "email":
      return { _: "messageEntityEmail", offset, length };
    case "bold":
      return { _: "messageEntityBold", offset, length };
    case "italic":
      return { _: "messageEntityItalic", offset, length };
    case "code":
      return { _: "messageEntityCode", offset, length };
    case "pre":
      return { _: "messageEntityPre", offset, length, language: entity.language };
    case "textLink": {
      try {
        const url = new URL(entity.url);
        if (url.protocol === "tg:" && url.hostname === "user" && (url.pathname === "/" || url.pathname === "")) {
          const id = Number(url.searchParams.get("id"));
          if (!isNaN(id)) {
            return { _: "messageEntityMentionName", offset, length, user_id: id };
          }
        }
      } catch {
        //
      }
      return { _: "messageEntityTextUrl", offset, length, url: entity.url };
    }
    case "textMention": {
      return { _: "messageEntityMentionName", offset, length, user_id: entity.userId };
    }
    case "cashtag":
      return { _: "messageEntityCashtag", offset, length };
    case "phoneNumber":
      return { _: "messageEntityPhone", offset, length };
    case "underline":
      return { _: "messageEntityUnderline", offset, length };
    case "strikethrough":
      return { _: "messageEntityStrike", offset, length };
    case "blockquote":
      return { _: "messageEntityBlockquote", offset, length };
    case "bankCard":
      return { _: "messageEntityBankCard", offset, length };
    case "spoiler":
      return { _: "messageEntitySpoiler", offset, length };
    case "customEmoji":
      return { _: "messageEntityCustomEmoji", offset, length, document_id: BigInt(entity.customEmojiId) };
  }
}

const priorities: Record<SecretMessageEntity["type"], number> = {
  "mention": 50,
  "hashtag": 50,
  "botCommand": 50,
  "url": 50,
  "email": 50,
  "bold": 90,
  "italic": 91,
  "code": 20,
  "pre": 11,
  "textLink": 49,
  "textMention": 49,
  "cashtag": 50,
  "phoneNumber": 50,
  "underline": 92,
  "strikethrough": 93,
  "blockquote": 0,
  "bankCard": 50,
  "spoiler": 94,
  "customEmoji": 99,
};
export function sortSecretMessageEntities(entities: SecretMessageEntity[]): SecretMessageEntity[] {
  return entities.sort(({ offset, type, length }, other) => {
    if (offset !== other.offset) {
      return offset < other.offset ? -1 : 1;
    }
    if (length !== other.length) {
      return length > other.length ? -1 : 1;
    }
    const priority = priorities[type];
    const otherPriority = priorities[other.type];
    return priority < otherPriority ? -1 : 1;
  });
}
