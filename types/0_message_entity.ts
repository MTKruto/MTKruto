import { enums, types } from "../2_tl.ts";

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
    /** The language identifier of the code. */
    language: string;
  }

  export interface Code extends Base {
    type: "code";
  }

  export interface TextLink extends Base {
    type: "textLink";
    /** A URL that will be opened after the text is tapped. */
    url: string;
  }

  export interface TextMention extends Base {
    type: "textMention";
    /** The identifier of the user to mention. */
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
    /** The identifier of the custom emoji. */
    customEmojiId: string;
  }
}

/** A single entity of a message's text or caption. */
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

export function constructMessageEntity(obj: enums.MessageEntity): MessageEntity | null {
  if (obj instanceof types.messageEntityMention) {
    return { type: "mention", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.messageEntityHashtag) {
    return { type: "hashtag", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.messageEntityBotCommand) {
    return { type: "botCommand", offset: obj.offset ?? 0, length: obj.length };
  } else if (obj instanceof types.messageEntityUrl) {
    return { type: "url", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.messageEntityEmail) {
    return { type: "email", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.messageEntityBold) {
    return { type: "bold", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.messageEntityItalic) {
    return { type: "italic", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.messageEntityCode) {
    return { type: "code", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.messageEntityPre) {
    return { type: "pre", offset: obj.offset, length: obj.length, language: obj.language };
  } else if (obj instanceof types.messageEntityTextUrl) {
    return { type: "textLink", offset: obj.offset, length: obj.length, url: obj.url };
  } else if (obj instanceof types.messageEntityMentionName) {
    return { type: "textMention", offset: obj.offset, length: obj.length, userId: Number(obj.user_id) };
  } else if (obj instanceof types.messageEntityCashtag) {
    return { type: "cashtag", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.messageEntityPhone) {
    return { type: "phoneNumber", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.messageEntityUnderline) {
    return { type: "underline", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.messageEntityStrike) {
    return { type: "strikethrough", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.messageEntityBlockquote) {
    return { type: "blockquote", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.messageEntityBankCard) {
    return { type: "bankCard", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.messageEntitySpoiler) {
    return { type: "spoiler", offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.messageEntityCustomEmoji) {
    return { type: "customEmoji", offset: obj.offset, length: obj.length, customEmojiId: String(obj.document_id) };
  } else {
    return null;
  }
}

export function messageEntityToTlObject(entity: MessageEntity) {
  const { offset, length } = entity;
  switch (entity.type) {
    case "mention":
      return new types.messageEntityMention({ offset, length });
    case "hashtag":
      return new types.messageEntityHashtag({ offset, length });
    case "botCommand":
      return new types.messageEntityBotCommand({ offset, length });
    case "url":
      return new types.messageEntityUrl({ offset, length });
    case "email":
      return new types.messageEntityEmail({ offset, length });
    case "bold":
      return new types.messageEntityBold({ offset, length });
    case "italic":
      return new types.messageEntityItalic({ offset, length });
    case "code":
      return new types.messageEntityCode({ offset, length });
    case "pre":
      return new types.messageEntityPre({ offset, length, language: entity.language });
    case "textLink":
      return new types.messageEntityTextUrl({ offset, length, url: entity.url });
    case "textMention":
      return new types.messageEntityMentionName({ offset, length, user_id: BigInt(entity.userId) });
    case "cashtag":
      return new types.messageEntityCashtag({ offset, length });
    case "phoneNumber":
      return new types.messageEntityPhone({ offset, length });
    case "underline":
      return new types.messageEntityUnderline({ offset, length });
    case "strikethrough":
      return new types.messageEntityStrike({ offset, length });
    case "blockquote":
      return new types.messageEntityBlockquote({ offset, length });
    case "bankCard":
      return new types.messageEntityBankCard({ offset, length });
    case "spoiler":
      return new types.messageEntitySpoiler({ offset, length });
    case "customEmoji":
      return new types.messageEntityCustomEmoji({ offset, length, document_id: BigInt(entity.customEmojiId) });
  }
}
