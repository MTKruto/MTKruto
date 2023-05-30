import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { ChatPhoto, ChatPhotoChat, ChatPhotoUser, constructChatPhoto } from "./0_chat_photo.ts";

export enum ChatType {
  Private = "private",
  Group = "group",
  Supergroup = "supergroup",
  Channel = "channel",
}

export interface ChatBase {
  type: ChatType;
  id: number;
  photo?: ChatPhoto;
}

export interface ChatPrivate extends ChatBase {
  type: ChatType.Private;
  isBot?: boolean;
  firstName: string;
  lastName?: string;
  username?: string;
  also?: string[];
  photo?: ChatPhotoUser;
  isScam: boolean;
  isFake: boolean;
  isRestricted?: boolean;
  restrictionReason?: types.RestrictionReason[];
}

export interface ChatGroup extends ChatBase {
  type: ChatType.Group;
  title: string;
  photo?: ChatPhotoChat;
  isCreator: boolean;
}

export interface ChatChannelBase {
  title: string;
  username?: string;
  also?: string[];
  photo?: ChatPhotoChat;
  isRestricted: boolean;
  restrictionReason?: types.RestrictionReason[];
}

export interface ChatChannel extends ChatChannelBase {
  type: ChatType.Channel;
  title: string;
  username?: string;
  also?: string[];
}

export interface ChatSupergroup extends ChatChannelBase {
  type: ChatType.Supergroup;
}

export type Chat = ChatPrivate | ChatGroup | ChatSupergroup | ChatChannel;

export function constructChat(chat: types.User): ChatPrivate;
export function constructChat(chat: types.Chat): ChatGroup;
export function constructChat(chat: types.Channel): ChatSupergroup | ChatChannel;
export function constructChat(chat: types.User | types.Chat | types.Channel): Chat {
  if (chat instanceof types.User) {
    const chat_: ChatPrivate = {
      type: ChatType.Private,
      isBot: chat.bot || false,
      id: Number(chat.id),
      firstName: chat.firstName || "",
      lastName: chat.lastName,
      isScam: chat.scam || false,
      isFake: chat.fake || false,
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
    const chat_: ChatGroup = {
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
    let chat_: ChatSupergroup | ChatChannel;
    if (chat.megagroup) {
      chat_ = { type: ChatType.Supergroup, title: chat.title, isRestricted: chat.restricted || false };
    } else {
      chat_ = { type: ChatType.Channel, title: chat.title, isRestricted: chat.restricted || false };
    }

    chat_.username = chat.username;
    chat_.also = chat.usernames?.map((v) => v[as](types.Username)).map((v) => v.username);
    chat_.restrictionReason = chat.restrictionReason?.map((v) => v[as](types.RestrictionReason));

    if (chat.photo instanceof types.ChatPhoto) {
      chat_.photo = constructChatPhoto(chat.photo);
    }

    return chat_;
  } else {
    throw new TypeError("Unreachable");
  }
}
