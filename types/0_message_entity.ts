import * as types from "../tl/2_types.ts";

export enum MessageEntityType {
  Mention = "mention",
  Hashtag = "hashtag",
  BotCommand = "bot_command",
  URL = "url",
  Email = "email",
  Bold = "bold",
  Italic = "italic",
  Code = "code",
  Pre = "pre",
  TextURL = "text_url",
  MentionName = "mention_name",
  Cashtag = "cashtag",
  Phone = "phone",
  Underline = "underline",
  Strike = "strike",
  Blockquote = "blockquote",
  BankCard = "bank_card",
  Spoiler = "spoiler",
  CustomEmoji = "custom_emoji",
}

export declare namespace MessageEntity {
  export interface Base {
    /** Offset in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length) to the start of the entity */
    offset: number;
    /** Length of the entity in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length) */
    length: number;
  }

  export interface Mention extends Base {
    type: MessageEntityType.Mention;
  }

  export interface Hashtag extends Base {
    type: MessageEntityType.Hashtag;
  }

  export interface BotCommand extends Base {
    type: MessageEntityType.BotCommand;
  }

  export interface URL extends Base {
    type: MessageEntityType.URL;
  }

  export interface EmailAddress extends Base {
    type: MessageEntityType.Email;
  }

  export interface Bold extends Base {
    type: MessageEntityType.Bold;
  }

  export interface Italic extends Base {
    type: MessageEntityType.Italic;
  }

  export interface Pre extends Base {
    type: MessageEntityType.Pre;
    /** For “pre” only, the programming language of the entity text */
    language: string;
  }

  export interface Code extends Base {
    type: MessageEntityType.Code;
  }

  export interface TextURL extends Base {
    type: MessageEntityType.TextURL;
    /** For “text_link” only, URL that will be opened after user taps on the text */
    url: string;
  }

  export interface MentionName extends Base {
    type: MessageEntityType.MentionName;
    /** For “text_mention” only, the ID of the mentioned user */
    userId: number;
  }

  export interface Cashtag extends Base {
    type: MessageEntityType.Cashtag;
  }

  export interface Phone extends Base {
    type: MessageEntityType.Phone;
  }

  export interface Underline extends Base {
    type: MessageEntityType.Underline;
  }

  export interface Strike extends Base {
    type: MessageEntityType.Strike;
  }

  export interface Blockquote extends Base {
    type: MessageEntityType.Blockquote;
  }

  export interface BankCard extends Base {
    type: MessageEntityType.BankCard;
  }

  export interface Spoiler extends Base {
    type: MessageEntityType.Spoiler;
  }

  export interface CustomEmoji extends Base {
    type: MessageEntityType.CustomEmoji;
    /** For “custom_emoji” only, unique identifier of the custom emoji */
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
  | MessageEntity.TextURL
  | MessageEntity.MentionName
  | MessageEntity.Cashtag
  | MessageEntity.Phone
  | MessageEntity.Underline
  | MessageEntity.Strike
  | MessageEntity.Blockquote
  | MessageEntity.BankCard
  | MessageEntity.Spoiler
  | MessageEntity.CustomEmoji;

export function constructMessageEntity(obj: types.TypeMessageEntity): MessageEntity | null {
  if (obj instanceof types.MessageEntityMention) {
    return { type: MessageEntityType.Mention, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityHashtag) {
    return { type: MessageEntityType.Hashtag, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityBotCommand) {
    return { type: MessageEntityType.BotCommand, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityURL) {
    return { type: MessageEntityType.URL, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityEmail) {
    return { type: MessageEntityType.Email, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityBold) {
    return { type: MessageEntityType.Bold, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityItalic) {
    return { type: MessageEntityType.Italic, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityCode) {
    return { type: MessageEntityType.Code, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityPre) {
    return { type: MessageEntityType.Pre, offset: obj.offset, length: obj.length, language: obj.language };
  } else if (obj instanceof types.MessageEntityTextURL) {
    return { type: MessageEntityType.TextURL, offset: obj.offset, length: obj.length, url: obj.url };
  } else if (obj instanceof types.MessageEntityMentionName) {
    return { type: MessageEntityType.MentionName, offset: obj.offset, length: obj.length, userId: Number(obj.userId) };
  } else if (obj instanceof types.MessageEntityCashtag) {
    return { type: MessageEntityType.Cashtag, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityPhone) {
    return { type: MessageEntityType.Phone, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityUnderline) {
    return { type: MessageEntityType.Underline, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityStrike) {
    return { type: MessageEntityType.Strike, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityBlockquote) {
    return { type: MessageEntityType.Blockquote, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityBankCard) {
    return { type: MessageEntityType.BankCard, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntitySpoiler) {
    return { type: MessageEntityType.Spoiler, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityCustomEmoji) {
    return { type: MessageEntityType.CustomEmoji, offset: obj.offset, length: obj.length, customEmojiId: String(obj.documentId) };
  } else {
    return null;
  }
}

export function messageEntityToTlObject(entity: MessageEntity) {
  const { offset, length } = entity;
  switch (entity.type) {
    case MessageEntityType.Mention:
      return new types.MessageEntityMention({ offset, length });
    case MessageEntityType.Hashtag:
      return new types.MessageEntityHashtag({ offset, length });
    case MessageEntityType.BotCommand:
      return new types.MessageEntityBotCommand({ offset, length });
    case MessageEntityType.URL:
      return new types.MessageEntityURL({ offset, length });
    case MessageEntityType.Email:
      return new types.MessageEntityEmail({ offset, length });
    case MessageEntityType.Bold:
      return new types.MessageEntityBold({ offset, length });
    case MessageEntityType.Italic:
      return new types.MessageEntityItalic({ offset, length });
    case MessageEntityType.Code:
      return new types.MessageEntityCode({ offset, length });
    case MessageEntityType.Pre:
      return new types.MessageEntityPre({ offset, length, language: entity.language });
    case MessageEntityType.TextURL:
      return new types.MessageEntityTextURL({ offset, length, url: entity.url });
    case MessageEntityType.MentionName:
      return new types.MessageEntityMentionName({ offset, length, userId: BigInt(entity.userId) });
    case MessageEntityType.Cashtag:
      return new types.MessageEntityCashtag({ offset, length });
    case MessageEntityType.Phone:
      return new types.MessageEntityPhone({ offset, length });
    case MessageEntityType.Underline:
      return new types.MessageEntityUnderline({ offset, length });
    case MessageEntityType.Strike:
      return new types.MessageEntityStrike({ offset, length });
    case MessageEntityType.Blockquote:
      return new types.MessageEntityBlockquote({ offset, length });
    case MessageEntityType.BankCard:
      return new types.MessageEntityBankCard({ offset, length });
    case MessageEntityType.Spoiler:
      return new types.MessageEntitySpoiler({ offset, length });
    case MessageEntityType.CustomEmoji:
      return new types.MessageEntityCustomEmoji({ offset, length, documentId: BigInt(entity.customEmojiId) });
  }
}
