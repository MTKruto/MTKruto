import { debug } from "../deps.ts";
import { UNREACHABLE } from "../utilities/0_control.ts";
import { cleanObject } from "../utilities/0_object.ts";
import { MaybePromise } from "../utilities/0_types.ts";
import * as types from "../tl/2_types.ts";
import { constructForceReply, ForceReply } from "./0_force_reply.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";
import { constructReplyKeyboardRemove, ReplyKeyboardRemove } from "./0_reply_keyboard_remove.ts";
import { Chat, constructChat } from "./1_chat.ts";
import { constructUser, User } from "./1_user.ts";
import { constructInlineKeyboardMarkup, InlineKeyboardMarkup } from "./2_inline_keyboard_markup.ts";
import { constructReplyKeyboardMarkup, ReplyKeyboardMarkup } from "./2_reply_keyboard_markup.ts";

const d = debug("types/Message");

export interface Message {
  id: number;
  from?: User;
  chat: Chat;
  text?: string;
  caption?: string;
  entities?: MessageEntity[];
  captionEntities?: MessageEntity[];
  date?: Date;
  editDate?: Date;
  views?: number;
  replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
  replyToMessage?: Omit<Message, "replyToMessage">;
}

export async function constructMessage(
  message_: types.Message,
  getEntity: { (peer: types.PeerUser): MaybePromise<types.User | null>; (peer: types.PeerChat): MaybePromise<types.Chat | null>; (peer: types.PeerChannel): MaybePromise<types.Channel | null> },
  getMessage: { (chatId: number, messageId: number): MaybePromise<Omit<Message, "replyToMessage"> | null> } | null,
) {
  let chat_: Chat | null = null;
  if (message_.peerId instanceof types.PeerUser) {
    const entity = await getEntity(message_.peerId);
    if (entity) {
      chat_ = constructChat(entity);
    } else {
      UNREACHABLE();
    }
  } else if (message_.peerId instanceof types.PeerChat) {
    const entity = await getEntity(message_.peerId);
    if (entity) {
      chat_ = constructChat(entity);
    } else {
      UNREACHABLE();
    }
  } else if (message_.peerId instanceof types.PeerChannel) {
    const entity = await getEntity(message_.peerId);
    if (entity) {
      chat_ = constructChat(entity);
    } else {
      UNREACHABLE();
    }
  } else {
    UNREACHABLE();
  }

  const message: Message = { id: message_.id, chat: chat_, views: message_.views };

  if (message_.fromId instanceof types.PeerUser) {
    const entity = await getEntity(message_.fromId);
    if (entity) {
      message.from = constructUser(entity);
    } else {
      UNREACHABLE();
    }
  }
  if (message_.message) {
    if (message_.media == undefined) {
      message.text = message_.message;
    } else {
      message.caption = message_.message;
    }
  }
  if (message_.entities != undefined) {
    if (message_.media == undefined) {
      message.entities = message_.entities.map(constructMessageEntity).filter((v) => v) as MessageEntity[];
    } else {
      message.captionEntities = message_.entities.map(constructMessageEntity).filter((v) => v) as MessageEntity[];
    }
  }
  message.date = new Date(message_.date * 1_000);
  if (message_.editDate != undefined) {
    message.editDate = new Date(message_.editDate * 1_000);
  }

  if (message_.replyMarkup) {
    if (message_.replyMarkup instanceof types.ReplyKeyboardMarkup) {
      message.replyMarkup = constructReplyKeyboardMarkup(message_.replyMarkup);
    } else if (message_.replyMarkup instanceof types.ReplyInlineMarkup) {
      message.replyMarkup = constructInlineKeyboardMarkup(message_.replyMarkup);
    } else if (message_.replyMarkup instanceof types.ReplyKeyboardHide) {
      message.replyMarkup = constructReplyKeyboardRemove(message_.replyMarkup);
    } else if (message_.replyMarkup instanceof types.ReplyKeyboardForceReply) {
      message.replyMarkup = constructForceReply(message_.replyMarkup);
    } else {
      UNREACHABLE();
    }
  }

  if (getMessage && message_.replyTo instanceof types.MessageReplyHeader) {
    const replyToMessage = await getMessage(message.chat.id, message_.replyTo.replyToMsgId);
    if (replyToMessage) {
      message.replyToMessage = replyToMessage;
    } else {
      d("couldn't get replied message");
    }
  }

  return cleanObject(message);
}
