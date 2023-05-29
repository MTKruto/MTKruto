import { MessageEntityCustomEmoji } from "../tl/2_types.ts";

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
  type: MessageEntityType.TextURL;
  userId: number;
}

export interface MessageEntityCashtag extends MessageEntityBase {
  type: MessageEntityType.TextURL;
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

export interface MessageCustomEmoji extends MessageEntityBase {
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
