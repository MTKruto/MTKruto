import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { ChatPhoto, constructChatPhoto } from "./0_chat_photo.ts";

export enum ChatType {
  Private = "private",
  Group = "group",
  Supergroup = "supergroup",
  Channel = "channel",
}

export declare namespace Chat {
  export interface Base {
    type: ChatType;
    id: number;
    photo?: ChatPhoto;
  }

  export interface Private extends Base {
    type: ChatType.Private;
    isBot?: boolean;
    firstName: string;
    lastName?: string;
    username?: string;
    also?: string[];
    photo?: ChatPhoto.User;
    isScam: boolean;
    isFake: boolean;
    isSupport: boolean;
    isVerified: boolean;
    isRestricted?: boolean;
    restrictionReason?: types.RestrictionReason[];
  }

  export interface Group extends Base {
    type: ChatType.Group;
    title: string;
    photo?: ChatPhoto.Chat;
    isCreator: boolean;
  }

  export interface ChannelBase {
    title: string;
    username?: string;
    also?: string[];
    photo?: ChatPhoto.Chat;
    isScam: boolean;
    isFake: boolean;
    isVerified: boolean;
    isRestricted: boolean;
    restrictionReason?: types.RestrictionReason[];
  }

  export interface Channel extends ChannelBase {
    type: ChatType.Channel;
    title: string;
    username?: string;
    also?: string[];
  }

  export interface Supergroup extends ChannelBase {
    type: ChatType.Supergroup;
  }
}

export type Chat = Chat.Private | Chat.Group | Chat.Supergroup | Chat.Channel;

export function constructChat(chat: types.User): Chat.Private;
export function constructChat(chat: types.Chat): Chat.Group;
export function constructChat(chat: types.Channel): Chat.Supergroup | Chat.Channel;
export function constructChat(chat: types.User | types.Chat | types.Channel): Chat {
  if (chat instanceof types.User) {
    const chat_: Chat.Private = {
      type: ChatType.Private,
      isBot: chat.bot || false,
      id: Number(chat.id),
      firstName: chat.firstName || "",
      lastName: chat.lastName,
      isScam: chat.scam || false,
      isFake: chat.fake || false,
      isSupport: chat.support || false,
      isVerified: chat.verified || false,
    };

    if (chat_.isBot) {
      chat_.isRestricted = chat.restricted || false;
      chat_.restrictionReason = chat.restrictionReason?.map((v) => v[as](types.RestrictionReason));
    }

    if (chat.photo instanceof types.UserProfilePhoto) {
      chat_.photo = constructChatPhoto(chat.photo);
    }

    return chat_;
  } else if (chat instanceof types.Chat) {
    const chat_: Chat.Group = {
      type: ChatType.Group,
      id: Number(-chat.id),
      title: chat.title,
      isCreator: chat.creator || false,
    };

    if (chat.photo instanceof types.ChatPhoto) {
      chat_.photo = constructChatPhoto(chat.photo);
    }

    return chat_;
  } else if (chat instanceof types.Channel) {
    let chat_: Chat.Supergroup | Chat.Channel;
    const {
      title,
      scam: isScam = false,
      fake: isFake = false,
      verified: isVerified = false,
      restricted: isRestricted = false,
    } = chat;
    if (chat.megagroup) {
      chat_ = { type: ChatType.Supergroup, title, isScam, isFake, isVerified, isRestricted };
    } else {
      chat_ = { type: ChatType.Channel, title, isScam, isFake, isVerified, isRestricted };
    }

    chat_.username = chat.username;
    chat_.also = chat.usernames?.map((v) => v[as](types.Username)).map((v) => v.username);
    if (chat_.isRestricted) {
      chat_.restrictionReason = chat.restrictionReason?.map((v) => v[as](types.RestrictionReason));
    }

    if (chat.photo instanceof types.ChatPhoto) {
      chat_.photo = constructChatPhoto(chat.photo);
    }

    return chat_;
  } else {
    throw new TypeError("Unreachable");
  }
}
