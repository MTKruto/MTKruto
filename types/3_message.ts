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
  threadId?: number;
  from?: User;
  senderChat?: Chat;
  date?: Date;
  chat: Chat;
  forwardFrom?: User;
  forwardFromChat?: Chat;
  forwardId?: number;
  forwardSignature?: string;
  forwardSenderName?: string;
  forwardDate?: Date;
  isTopicMessage: boolean;
  isAutomaticForward?: boolean;
  replyToMessage?: Omit<Message, "replyToMessage">;
  viaBot?: User;
  editDate?: Date;
  hasProtectedContent: boolean;
  mediaGroupId?: string;
  authorSignature?: string;
  text?: string;
  entities?: MessageEntity[];
  caption?: string;
  captionEntities?: MessageEntity[];
  hasMediaSpoiler?: boolean;
  views?: number;
  replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
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

  const message: Message = {
    id: message_.id,
    chat: chat_,
    views: message_.views,
    isTopicMessage: false,
    hasProtectedContent: message_.noforwards || false
  };

  if (message_.media instanceof types.MessageMediaPhoto || message_.media instanceof types.MessageMediaDocument) {
    message.hasMediaSpoiler = message_.media.spoiler || false;
  }

  if (message_.groupedId != undefined) {
    message.mediaGroupId = String(message_.groupedId)
  }

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

  // message_.

  if (getMessage && message_.replyTo instanceof types.MessageReplyHeader) {
    if (message_.replyTo.forumTopic) {
      message.isTopicMessage = true;
    }
    const replyToMessage = await getMessage(message.chat.id, message_.replyTo.replyToMsgId);
    if (replyToMessage) {
      message.replyToMessage = replyToMessage;
      message.threadId = message_.replyTo.replyToTopId;
    } else {
      d("couldn't get replied message");
    }
  }

  if (message_.viaBotId != undefined) {
    const viaBot = await getEntity(new types.PeerUser({ userId: message_.viaBotId }));
    if (viaBot) {
      message.viaBot = constructUser(viaBot);
    } else {
      UNREACHABLE();
    }
  }

  if (message_.postAuthor != undefined) {
    message.authorSignature = message_.postAuthor
  }

  if (message_.fwdFrom instanceof types.MessageFwdHeader) {
    message.isAutomaticForward = message_.fwdFrom.savedFromPeer != undefined && message_.fwdFrom.savedFromMsgId != undefined;
    message.forwardSenderName = message_.fwdFrom.fromName;
    message.forwardId = message_.fwdFrom.channelPost;
    message.forwardSignature = message_.fwdFrom.postAuthor;
    message.forwardDate = new Date(message_.date * 1_000);
    if (message_.fwdFrom.fromId instanceof types.PeerUser) {
      const entity = await getEntity(message_.fwdFrom.fromId);
      if (entity) {
        message.forwardFrom = constructUser(entity);
      } else {
        UNREACHABLE();
      }
    } else if (message_.fwdFrom.fromId instanceof types.PeerChat) {
      const entity = await getEntity(message_.fwdFrom.fromId);
      if (entity) {
        message.forwardFromChat = constructChat(entity);
      } else {
        UNREACHABLE();
      }
    } else if (message_.fwdFrom.fromId instanceof types.PeerChannel) {
      const entity = await getEntity(message_.fwdFrom.fromId);
      if (entity) {
        message.forwardFromChat = constructChat(entity);
      } else {
        UNREACHABLE();
      }
    } else {
      UNREACHABLE();
    }
  }

  return cleanObject(message);
}
