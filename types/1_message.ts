import * as types from "../tl/2_types.ts";
import { Chat } from "./0_chat.ts";
import { fromTlObject, MessageEntity } from "./0_message_entity.ts";
import { User } from "./0_user.ts";

export class Message {
  id: number;
  text: string | null = null;
  caption: string | null = null;
  entities: MessageEntity[] | null = null;
  captionEntities: MessageEntity[] | null = null;
  date: Date;
  editDate: Date | null = null;
  views: number | null = null;
  from?: User;
  chat?: Chat;

  constructor(message: types.Message, users: types.TypeUser[], chats: types.TypeChat[]) {
    this.id = message.id;
    if (message.fromId instanceof types.PeerUser) {
      for (const user of users) {
        if (user instanceof types.User && user.id == message.fromId.userId) {
          this.from = new User(user);
          break;
        }
      }
    }
    let chat_: Chat | null = null;
    if (message.peerId instanceof types.PeerUser) {
      for (const user of users) {
        if (user instanceof types.User && user.id == message.peerId.userId) {
          chat_ = new Chat(user);
          break;
        }
      }
    } else if (message.peerId instanceof types.PeerChat) {
      for (const chat of chats) {
        if (chat instanceof types.Chat && chat.id == message.peerId.chatId) {
          chat_ = new Chat(chat);
          break;
        }
      }
    } else if (message.peerId instanceof types.PeerChannel) {
      for (const chat of chats) {
        if (chat instanceof types.Channel && chat.id == message.peerId.channelId) {
          chat_ = new Chat(chat);
          break;
        }
      }
    }
    if (!chat_) {
      throw new Error("Unreachable");
    } else {
      this.chat = chat_;
    }
    if (message.message) {
      if (message.media == undefined) {
        this.text = message.message;
      } else {
        this.caption = message.message;
      }
    }
    if (message.entities != undefined) {
      if (message.media == undefined) {
        this.entities = message.entities.map(fromTlObject).filter((v) => v) as MessageEntity[];
      } else {
        this.captionEntities = message.entities.map(fromTlObject).filter((v) => v) as MessageEntity[];
      }
    }
    this.date = new Date(message.date * 1_000);
    if (message.editDate != undefined) {
      this.editDate = new Date(message.editDate * 1_000);
    }
    if (message.views != undefined) {
      this.views = message.views;
    }
  }
}
