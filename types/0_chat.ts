import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";

export enum ChatType {
  Private = "private",
  Group = "group",
  Supergroup = "supergroup",
  Channel = "channel",
}

export interface ChatBase {
  type: ChatType;
  id: number;
}

export interface ChatPrivate extends ChatBase {
  type: ChatType.Private;
  isBot?: boolean;
  firstName: string;
  lastName?: string;
  bio?: string;
  username?: string;
  also?: string[];
  isScam: boolean;
  isFake: boolean;
  isRestricted?: boolean;
  restrictionReason?: types.RestrictionReason[];
}

export interface ChatGroup extends ChatBase {
  type: ChatType.Group;
  title: string;
}

export interface ChatChannelBase {
  title: string;
  description?: string;
  username?: string;
  also?: string[];
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

export function constructChat(chat: types.User, full?: types.UserFull): ChatPrivate;
export function constructChat(chat: types.Chat, full?: types.ChatFull): ChatGroup;
export function constructChat(chat: types.Channel, full?: types.ChannelFull): ChatSupergroup | ChatChannel;
export function constructChat(chat: types.User | types.Chat | types.Channel, full?: types.UserFull | types.ChatFull | types.ChannelFull): Chat {
  if (chat instanceof types.User && (!full || full instanceof types.UserFull)) {
    return {
      type: ChatType.Private,
      isBot: chat.bot || false,
      id: Number(chat.id),
      firstName: chat.firstName || "",
      lastName: chat.lastName,
      isScam: chat.scam || false,
      isFake: chat.fake || false,
      isRestricted: chat.restricted || false,
      restrictionReason: chat.restrictionReason?.map((v) => v[as](types.RestrictionReason)),
    };
  } else if (chat instanceof types.Chat && (!full || full instanceof types.ChatFull)) {
    return {
      type: ChatType.Group,
      id: Number(-chat.id),
      title: chat.title,
    };
  } else if (chat instanceof types.Channel && (!full || full instanceof types.ChannelFull)) {
    const title = chat.title;
    const username = chat.username;
    const also = chat.usernames?.map((v) => v[as](types.Username)).map((v) => v.username);
    if (chat.megagroup) {
      return { type: ChatType.Supergroup, title, username, also };
    } else {
      return { type: ChatType.Channel, title, username, also };
    }
  } else {
    throw new TypeError("Unreachable");
  }
}
