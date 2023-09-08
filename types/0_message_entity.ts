import { types } from "../2_tl.ts";

export type MessageEntityType =
  | "mention"
  | "hashtag"
  | "botCommand"
  | "url"
  | "email"
  | "bold"
  | "italic"
  | "code"
  | "pre"
  | "textLink"
  | "textMention"
  | "cashtag"
  | "phoneNumber"
  | "underline"
  | "strikethrough"
  | "blockquote"
  | "bankCard"
  | "spoiler"
  | "customEmoji";

export declare namespace MessageEntity {
  export interface Base {
    type: MessageEntityType;
    /** Offset in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length) to the start of the entity */
    offset: number;
    /** Length of the entity in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length) */
    length: number;
  }

  export interface Mention extends Base {
    type: "mention";
  }

  export interface Hashtag extends Base {
    type: "hashtag";
  }

  export interface BotCommand extends Base {
    type: "botCommand";
  }

  export interface URL extends Base {
    type: "url";
  }

  export interface EmailAddress extends Base {
    type: "email";
  }

  export interface Bold extends Base {
    type: "bold";
  }

  export interface Italic extends Base {
    type: "italic";
  }

  export interface Pre extends Base {
    type: "pre";
    /** For "pre" only, the programming language of the entity text */
    language: string;
  }

  export interface Code extends Base {
    type: "code";
  }

  export interface TextLink extends Base {
    type: "textLink";
    /** For "textLink" only, URL that will be opened after user taps on the text */
    url: string;
  }

  export interface TextMention extends Base {
    type: "textMention";
    /** For "textMention" only, the ID of the mentioned user */
    userId: number;
  }

  export interface Cashtag extends Base {
    type: "cashtag";
  }

  export interface PhoneNumber extends Base {
    type: "phoneNumber";
  }

  export interface Underline extends Base {
    type: "underline";
  }

  export interface Strikethrough extends Base {
    type: "strikethrough";
  }

  export interface Blockquote extends Base {
    type: "blockquote";
  }

  export interface BankCard extends Base {
    type: "bankCard";
  }

  export interface Spoiler extends Base {
    type: "spoiler";
  }

  export interface CustomEmoji extends Base {
    type: "customEmoji";
    /** For "customEmoji" only, unique identifier of the custom emoji */
    customEmojiId: string;
  }
}

/** This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc. */
export type MessageEntity =
  | MessageEntity.Mention
  | MessageEntity.Hashtag
  | MessageEntity.BotCommand
  | MessageEntity.URL
  | MessageEntity.EmailAddress
  | MessageEntity.Bold
  | MessageEntity.Italic
  | MessageEntity.Code
  | MessageEntity.Pre
  | MessageEntity.TextLink
  | MessageEntity.TextMention
  | MessageEntity.Cashtag
  | MessageEntity.PhoneNumber
  | MessageEntity.Underline
  | MessageEntity.Strikethrough
  | MessageEntity.Blockquote
  | MessageEntity.BankCard
  | MessageEntity.Spoiler
  | MessageEntity.CustomEmoji;

export function constructMessageEntity(obj: types.TypeMessageEntity): MessageEntity | null {
  if (obj instanceof types.MessageEntityMention) {
    return { type: "mention", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityHashtag) {
    return { type: "hashtag", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityBotCommand) {
    return { type: "botCommand", offset: obj.offset ?? 0, length: obj.length };
  } else if (obj instanceof types.MessageEntityURL) {
    return { type: "url", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityEmail) {
    return { type: "email", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityBold) {
    return { type: "bold", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityItalic) {
    return { type: "italic", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityCode) {
    return { type: "code", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityPre) {
    return { type: "pre", offset: obj.offset, length: obj.length, language: obj.language };
  } else if (obj instanceof types.MessageEntityTextURL) {
    return { type: "textLink", offset: obj.offset, length: obj.length, url: obj.url };
  } else if (obj instanceof types.MessageEntityMentionName) {
    return { type: "textMention", offset: obj.offset, length: obj.length, userId: Number(obj.userId) };
  } else if (obj instanceof types.MessageEntityCashtag) {
    return { type: "cashtag", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityPhone) {
    return { type: "phoneNumber", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityUnderline) {
    return { type: "underline", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityStrike) {
    return { type: "strikethrough", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityBlockquote) {
    return { type: "blockquote", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityBankCard) {
    return { type: "bankCard", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntitySpoiler) {
    return { type: "spoiler", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityCustomEmoji) {
    return { type: "customEmoji", offset: obj.offset, length: obj.length, customEmojiId: String(obj.documentId) };
  } else {
    return null;
  }
}

export function messageEntityToTlObject(entity: MessageEntity) {
  const { offset, length } = entity;
  switch (entity.type) {
    case "mention":
      return new types.MessageEntityMention({ offset, length });
    case "hashtag":
      return new types.MessageEntityHashtag({ offset, length });
    case "botCommand":
      return new types.MessageEntityBotCommand({ offset, length });
    case "url":
      return new types.MessageEntityURL({ offset, length });
    case "email":
      return new types.MessageEntityEmail({ offset, length });
    case "bold":
      return new types.MessageEntityBold({ offset, length });
    case "italic":
      return new types.MessageEntityItalic({ offset, length });
    case "code":
      return new types.MessageEntityCode({ offset, length });
    case "pre":
      return new types.MessageEntityPre({ offset, length, language: entity.language });
    case "textLink":
      return new types.MessageEntityTextURL({ offset, length, url: entity.url });
    case "textMention":
      return new types.MessageEntityMentionName({ offset, length, userId: BigInt(entity.userId) });
    case "cashtag":
      return new types.MessageEntityCashtag({ offset, length });
    case "phoneNumber":
      return new types.MessageEntityPhone({ offset, length });
    case "underline":
      return new types.MessageEntityUnderline({ offset, length });
    case "strikethrough":
      return new types.MessageEntityStrike({ offset, length });
    case "blockquote":
      return new types.MessageEntityBlockquote({ offset, length });
    case "bankCard":
      return new types.MessageEntityBankCard({ offset, length });
    case "spoiler":
      return new types.MessageEntitySpoiler({ offset, length });
    case "customEmoji":
      return new types.MessageEntityCustomEmoji({ offset, length, documentId: BigInt(entity.customEmojiId) });
  }
}
