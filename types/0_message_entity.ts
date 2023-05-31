import * as types from "../tl/2_types.ts";

export declare namespace MessageEntity {
  export enum Type {
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

  export interface Base {
    offset: number;
    length: number;
  }

  export interface Mention extends Base {
    type: MessageEntity.Type.Mention;
  }

  export interface Hashtag extends Base {
    type: MessageEntity.Type.Hashtag;
  }

  export interface BotCommand extends Base {
    type: MessageEntity.Type.BotCommand;
  }

  export interface URL extends Base {
    type: MessageEntity.Type.URL;
  }

  export interface EmailAddress extends Base {
    type: MessageEntity.Type.Email;
  }

  export interface Bold extends Base {
    type: MessageEntity.Type.Bold;
  }

  export interface Italic extends Base {
    type: MessageEntity.Type.Italic;
  }

  export interface Pre extends Base {
    type: MessageEntity.Type.Pre;
    language: string;
  }

  export interface Code extends Base {
    type: MessageEntity.Type.Code;
  }

  export interface TextURL extends Base {
    type: MessageEntity.Type.TextURL;
    url: string;
  }

  export interface MentionName extends Base {
    type: MessageEntity.Type.MentionName;
    userId: number;
  }

  export interface Cashtag extends Base {
    type: MessageEntity.Type.Cashtag;
  }

  export interface Phone extends Base {
    type: MessageEntity.Type.Phone;
  }

  export interface Underline extends Base {
    type: MessageEntity.Type.Underline;
  }

  export interface Strike extends Base {
    type: MessageEntity.Type.Strike;
  }

  export interface Blockquote extends Base {
    type: MessageEntity.Type.Blockquote;
  }

  export interface BankCard extends Base {
    type: MessageEntity.Type.BankCard;
  }

  export interface Spoiler extends Base {
    type: MessageEntity.Type.Spoiler;
  }

  export interface CustomEmoji extends Base {
    type: Type.CustomEmoji;
    documentId: bigint;
  }
}

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
    return { type: MessageEntity.Type.Mention, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityHashtag) {
    return { type: MessageEntity.Type.Hashtag, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityBotCommand) {
    return { type: MessageEntity.Type.BotCommand, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityURL) {
    return { type: MessageEntity.Type.URL, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityEmail) {
    return { type: MessageEntity.Type.Email, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityBold) {
    return { type: MessageEntity.Type.Bold, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityItalic) {
    return { type: MessageEntity.Type.Italic, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityCode) {
    return { type: MessageEntity.Type.Code, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityPre) {
    return { type: MessageEntity.Type.Pre, offset: obj.offset, length: obj.length, language: obj.language };
  } else if (obj instanceof types.MessageEntityTextURL) {
    return { type: MessageEntity.Type.TextURL, offset: obj.offset, length: obj.length, url: obj.url };
  } else if (obj instanceof types.MessageEntityMentionName) {
    return { type: MessageEntity.Type.MentionName, offset: obj.offset, length: obj.length, userId: Number(obj.userId) };
  } else if (obj instanceof types.MessageEntityCashtag) {
    return { type: MessageEntity.Type.Cashtag, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityPhone) {
    return { type: MessageEntity.Type.Phone, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityUnderline) {
    return { type: MessageEntity.Type.Underline, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityStrike) {
    return { type: MessageEntity.Type.Strike, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityBlockquote) {
    return { type: MessageEntity.Type.Blockquote, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityBankCard) {
    return { type: MessageEntity.Type.BankCard, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntitySpoiler) {
    return { type: MessageEntity.Type.Spoiler, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityCustomEmoji) {
    return { type: MessageEntity.Type.CustomEmoji, offset: obj.offset, length: obj.length, documentId: obj.documentId };
  } else {
    return null;
  }
}

export function messageEntityToTlObject(entity: MessageEntity) {
  const { offset, length } = entity;
  switch (entity.type) {
    case MessageEntity.Type.Mention:
      return new types.MessageEntityMention({ offset, length });
    case MessageEntity.Type.Hashtag:
      return new types.MessageEntityHashtag({ offset, length });
    case MessageEntity.Type.BotCommand:
      return new types.MessageEntityBotCommand({ offset, length });
    case MessageEntity.Type.URL:
      return new types.MessageEntityURL({ offset, length });
    case MessageEntity.Type.Email:
      return new types.MessageEntityEmail({ offset, length });
    case MessageEntity.Type.Bold:
      return new types.MessageEntityBold({ offset, length });
    case MessageEntity.Type.Italic:
      return new types.MessageEntityItalic({ offset, length });
    case MessageEntity.Type.Code:
      return new types.MessageEntityCode({ offset, length });
    case MessageEntity.Type.Pre:
      return new types.MessageEntityPre({ offset, length, language: entity.language });
    case MessageEntity.Type.TextURL:
      return new types.MessageEntityTextURL({ offset, length, url: entity.url });
    case MessageEntity.Type.MentionName:
      return new types.MessageEntityMentionName({ offset, length, userId: BigInt(entity.userId) });
    case MessageEntity.Type.Cashtag:
      return new types.MessageEntityCashtag({ offset, length });
    case MessageEntity.Type.Phone:
      return new types.MessageEntityPhone({ offset, length });
    case MessageEntity.Type.Underline:
      return new types.MessageEntityUnderline({ offset, length });
    case MessageEntity.Type.Strike:
      return new types.MessageEntityStrike({ offset, length });
    case MessageEntity.Type.Blockquote:
      return new types.MessageEntityBlockquote({ offset, length });
    case MessageEntity.Type.BankCard:
      return new types.MessageEntityBankCard({ offset, length });
    case MessageEntity.Type.Spoiler:
      return new types.MessageEntitySpoiler({ offset, length });
    case MessageEntity.Type.CustomEmoji:
      return new types.MessageEntityCustomEmoji({ offset, length, documentId: entity.documentId });
  }
}
