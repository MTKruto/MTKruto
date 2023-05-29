import * as types from "../tl/2_types.ts";

export enum MessageEntityType {
  Mention = "mention",
  Hashtag = "hashtag",
  BotCommand = "bot_command",
  URL = "url",
  EmailAddress = "email_address",
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

export interface MessageEntityBase {
  offset: number;
  length: number;
}

export interface MessageEntityMention extends MessageEntityBase {
  type: MessageEntityType.Mention;
}

export interface MessageEntityHashtag extends MessageEntityBase {
  type: MessageEntityType.Hashtag;
}

export interface MessageEntityBotCommand extends MessageEntityBase {
  type: MessageEntityType.BotCommand;
}

export interface MessageEntityURL extends MessageEntityBase {
  type: MessageEntityType.URL;
}

export interface MessageEntityEmailAddress extends MessageEntityBase {
  type: MessageEntityType.EmailAddress;
}

export interface MessageEntityBold extends MessageEntityBase {
  type: MessageEntityType.Bold;
}

export interface MessageEntityItalic extends MessageEntityBase {
  type: MessageEntityType.Italic;
}

export interface MessageEntityPre extends MessageEntityBase {
  type: MessageEntityType.Pre;
  language: string;
}

export interface MessageEntityCode extends MessageEntityBase {
  type: MessageEntityType.Code;
}

export interface MessageEntityTextURL extends MessageEntityBase {
  type: MessageEntityType.TextURL;
  url: string;
}

export interface MessageEntityMentionName extends MessageEntityBase {
  type: MessageEntityType.MentionName;
  userId: number;
}

export interface MessageEntityCashtag extends MessageEntityBase {
  type: MessageEntityType.Cashtag;
}

export interface MessageEntityPhone extends MessageEntityBase {
  type: MessageEntityType.Phone;
}

export interface MessageEntityUnderline extends MessageEntityBase {
  type: MessageEntityType.Underline;
}

export interface MessageEntityStrike extends MessageEntityBase {
  type: MessageEntityType.Strike;
}

export interface MessageEntityBlockquote extends MessageEntityBase {
  type: MessageEntityType.Blockquote;
}

export interface MessageEntityBankCard extends MessageEntityBase {
  type: MessageEntityType.BankCard;
}

export interface MessageEntitySpoiler extends MessageEntityBase {
  type: MessageEntityType.Spoiler;
}

export interface MessageEntityCustomEmoji extends MessageEntityBase {
  type: MessageEntityType.CustomEmoji;
  documentId: bigint;
}

export type MessageEntity =
  | MessageEntityMention
  | MessageEntityHashtag
  | MessageEntityBotCommand
  | MessageEntityURL
  | MessageEntityEmailAddress
  | MessageEntityBold
  | MessageEntityItalic
  | MessageEntityCode
  | MessageEntityPre
  | MessageEntityTextURL
  | MessageEntityMentionName
  | MessageEntityCashtag
  | MessageEntityPhone
  | MessageEntityUnderline
  | MessageEntityStrike
  | MessageEntityBlockquote
  | MessageEntityBankCard
  | MessageEntitySpoiler
  | MessageEntityCustomEmoji;

export function fromTlObject(obj: types.TypeMessageEntity): MessageEntity | null {
  if (obj instanceof types.MessageEntityMention) {
    return { type: MessageEntityType.Mention, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityHashtag) {
    return { type: MessageEntityType.Hashtag, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityBotCommand) {
    return { type: MessageEntityType.BotCommand, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityURL) {
    return { type: MessageEntityType.URL, offset: obj.offset, length: obj.length };
  } else if (obj instanceof types.MessageEntityEmail) {
    return { type: MessageEntityType.EmailAddress, offset: obj.offset, length: obj.length };
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
    return { type: MessageEntityType.CustomEmoji, offset: obj.offset, length: obj.length, documentId: obj.documentId };
  } else {
    return null;
  }
}
