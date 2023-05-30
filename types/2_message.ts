import * as types from "../tl/2_types.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";
import { constructUser, User } from "./0_user.ts";
import { Chat, constructChat } from "./1_chat.ts";

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
}

export function constructMessage(message_: types.Message, users: types.TypeUser[], chats: types.TypeChat[]) {
  let chat_: Chat | null = null;
  if (message_.peerId instanceof types.PeerUser) {
    for (const user of users) {
      if (user instanceof types.User && user.id == message_.peerId.userId) {
        chat_ = constructChat(user);
        break;
      }
    }
  } else if (message_.peerId instanceof types.PeerChat) {
    for (const chat of chats) {
      if (chat instanceof types.Chat && chat.id == message_.peerId.chatId) {
        chat_ = constructChat(chat);
        break;
      }
    }
  } else if (message_.peerId instanceof types.PeerChannel) {
    for (const chat of chats) {
      if (chat instanceof types.Channel && chat.id == message_.peerId.channelId) {
        chat_ = constructChat(chat);
        break;
      }
    }
  }
  if (!chat_) {
    throw new Error("Unreachable");
  }

  const message: Message = { id: message_.id, chat: chat_ };

  if (message_.fromId instanceof types.PeerUser) {
    for (const user of users) {
      if (user instanceof types.User && user.id == message_.fromId.userId) {
        message.from = constructUser(user);
        break;
      }
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

  if (message_.views != undefined) {
    message.views = message_.views;
  }

  return message;
}
