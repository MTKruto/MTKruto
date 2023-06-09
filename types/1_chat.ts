import { ZERO_CHANNEL_ID } from "../constants.ts";
import { UNREACHABLE } from "../utilities/0_control.ts";
import { cleanObject } from "../utilities/0_object.ts";
import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { getIdColor } from "./!0_id_color.ts";
import { ChatPhoto, constructChatPhoto } from "./0_chat_photo.ts";

export enum ChatType {
  Private = "private",
  Group = "group",
  Supergroup = "supergroup",
  Channel = "channel",
}

export declare namespace Chat {
  export interface Base {
    /** Type of chat, can be either “private”, “group”, “supergroup” or “channel” */
    type: ChatType;
    /** Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    id: number;
    idColor: string;
    /** Chat photo. */
    photo?: ChatPhoto;
  }

  export interface Private extends Base {
    type: ChatType.Private;
    /** True, if this user is a bot */
    isBot?: boolean;
    /** First name of the other party in a private chat */
    firstName: string;
    /** Last name of the other party in a private chat */
    lastName?: string;
    /** Username, for private chats, supergroups and channels if available */
    username?: string;
    /** Additional usernames */
    also?: string[];
    /** Chat photo. */
    photo?: ChatPhoto.User;
    /** True, if the user is a scam user */
    isScam: boolean;
    /** True, if this user was reported by many users as a fake or scam user: be careful when interacting with them. */
    isFake: boolean;
    /** True, if the user is an official support user */
    isSupport: boolean;
    /** True, if the user is verified */
    isVerified: boolean;
    /** True, if the access to the user must be restricted for the reason specified in `restriction_reason` */
    isRestricted?: boolean;
    /** Contains the reason why access to the user must be restricted. */
    restrictionReason?: types.RestrictionReason[];
  }

  export interface Group extends Base {
    type: ChatType.Group;
    /** Title, for supergroups, channels and group chats */
    title: string;
    /** Chat photo. */
    photo?: ChatPhoto.Chat;
    /** True, if the user is creator of the chat */
    isCreator: boolean;
  }

  export interface ChannelBase extends Base {
    /** Title, for supergroups, channels and group chats */
    title: string;
    /** Username, for private chats, supergroups and channels if available */
    username?: string;
    /** Additional usernames */
    also?: string[];
    /** Chat photo. */
    photo?: ChatPhoto.Chat;
    /** True, if the user is a scam user */
    isScam: boolean;
    /** True, if this user was reported by many users as a fake or scam user: be careful when interacting with them. */
    isFake: boolean;
    /** True, if the user is verified */
    isVerified: boolean;
    /** True, if the access to the user must be restricted for the reason specified in `restriction_reason` */
    isRestricted: boolean;
    /** Contains the reason why access to the user must be restricted. */
    restrictionReason?: types.RestrictionReason[];
  }

  export interface Channel extends ChannelBase {
    type: ChatType.Channel;
    /** Title, for supergroups, channels and group chats */
    title: string;
    /** Username, for private chats, supergroups and channels if available */
    username?: string;
    /** Additional usernames */
    also?: string[];
  }

  export interface Supergroup extends ChannelBase {
    type: ChatType.Supergroup;
    /** True, if the supergroup chat is a forum (has [topics](https://telegram.org/blog/topics-in-groups-collectible-usernames#topics-in-groups) enabled) */
    isForum: boolean;
  }
}

/** This object represents a chat. */
export type Chat = Chat.Private | Chat.Group | Chat.Supergroup | Chat.Channel;

export function constructChat(chat: types.User): Chat.Private;
export function constructChat(chat: types.Chat): Chat.Group;
export function constructChat(chat: types.Channel): Chat.Supergroup | Chat.Channel;
export function constructChat(chat: types.User | types.Chat | types.Channel): Chat {
  if (chat instanceof types.User) {
    const id = Number(chat.id);
    const chat_: Chat.Private = {
      type: ChatType.Private,
      isBot: chat.bot || false,
      id,
      idColor: getIdColor(id),
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
      chat_.photo = constructChatPhoto(chat.photo, chat_.id, chat.accessHash ?? 0n);
    }

    return cleanObject(chat_);
  } else if (chat instanceof types.Chat) {
    const id = Number(-chat.id);
    const chat_: Chat.Group = {
      type: ChatType.Group,
      id,
      idColor: getIdColor(id),
      title: chat.title,
      isCreator: chat.creator || false,
    };

    if (chat.photo instanceof types.ChatPhoto) {
      chat_.photo = constructChatPhoto(chat.photo, chat_.id, 0n);
    }

    return cleanObject(chat_);
  } else if (chat instanceof types.Channel) {
    let chat_: Chat.Supergroup | Chat.Channel;
    const {
      title,
      scam: isScam = false,
      fake: isFake = false,
      verified: isVerified = false,
      restricted: isRestricted = false,
    } = chat;
    const id = ZERO_CHANNEL_ID + -Number(chat.id);
    if (chat.megagroup) {
      chat_ = {
        id,
        idColor: getIdColor(id),
        type: ChatType.Supergroup,
        title,
        isScam,
        isFake,
        isVerified,
        isRestricted,
        isForum: chat.forum || false,
      };
    } else {
      const id = ZERO_CHANNEL_ID + -Number(chat.id);
      chat_ = {
        id,
        idColor: getIdColor(id),
        type: ChatType.Channel,
        title,
        isScam,
        isFake,
        isVerified,
        isRestricted,
      };
    }

    chat_.username = chat.username;
    chat_.also = chat.usernames?.map((v) => v[as](types.Username)).map((v) => v.username);
    if (chat_.isRestricted) {
      chat_.restrictionReason = chat.restrictionReason?.map((v) => v[as](types.RestrictionReason));
    }

    if (chat.photo instanceof types.ChatPhoto) {
      chat_.photo = constructChatPhoto(chat.photo, chat_.id, chat.accessHash ?? 0n);
    }

    return cleanObject(chat_);
  } else {
    UNREACHABLE();
  }
}
