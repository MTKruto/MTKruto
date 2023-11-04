import { cleanObject, UNREACHABLE } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { ZERO_CHANNEL_ID } from "../4_constants.ts";
import { ChatPhoto, constructChatPhoto } from "./0_chat_photo.ts";
import { Color, getColorFromColorId, getColorFromPeerId } from "./0_color.ts";
import { constructRestrictionReason, RestrictionReason } from "./0_restriction_reason.ts";

export type ChatType =
  | "private"
  | "group"
  | "supergroup"
  | "channel";

export declare namespace Chat {
  export interface Base {
    /** The type of the chat. */
    type: ChatType;
    /** The identifier of the chat. */
    id: number;
    /** A color that can be displayed instead of the chat's photo. */
    color: Color;
    /** The chat's photo. */
    photo?: ChatPhoto;
  }

  export interface Private extends Base {
    type: "private";
    /** Whether this is a bot's chat. */
    isBot?: boolean;
    /** The first name of the user. */
    firstName: string;
    /** The last name of the user. */
    lastName?: string;
    /** The user's main username. */
    username?: string;
    /** The user's other usernames. */
    also?: string[];
    /** The user's profile photo. */
    photo?: ChatPhoto.User;
    /** Whether the user has been identified as scam. */
    isScam: boolean;
    /** Whether the user has been identified as an impersonator. */
    isFake: boolean;
    /** Whether the user is official support. */
    isSupport: boolean;
    /** Whether the user has been verified. */
    isVerified: boolean;
    /** Whether the user has been restricted. */
    isRestricted?: boolean;
    /** The reason why the user has been restricted. */
    restrictionReason?: RestrictionReason[];
  }

  export interface Group extends Base {
    type: "group";
    /** The title of the chat. */
    title: string;
    /** The chat's photo. */
    photo?: ChatPhoto.Chat;
    /** Whether the current user is the owner of the chat. */
    isCreator: boolean;
  }

  export interface ChannelBase extends Base {
    /** The title of the chat or channel. */
    title: string;
    /** The main username of the chat or channel. */
    username?: string;
    /** The other usernames of the chat or channel. */
    also?: string[];
    /** The chat or channel's photo. */
    photo?: ChatPhoto.Chat;
    /** Whether the chat or channel has been identified as scam. */
    isScam: boolean;
    /** Whether the chat or channel has been identified as an impersonator. */
    isFake: boolean;
    /** Whether the chat or channel has been verified. */
    isVerified: boolean;
    /** Whether the chat or channel has been restricted. */
    isRestricted: boolean;
    /** The reason why the chat or channel has been restricted. */
    restrictionReason?: RestrictionReason[];
  }

  export interface Channel extends ChannelBase {
    type: "channel";
  }

  export interface Supergroup extends ChannelBase {
    type: "supergroup";
    /** Whether the chat is a forum. */
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
      type: "private",
      isBot: chat.bot || false,
      id,
      color: chat.color !== undefined ? getColorFromColorId(chat.color) : getColorFromPeerId(id),
      firstName: chat.firstName || "",
      lastName: chat.lastName,
      isScam: chat.scam || false,
      isFake: chat.fake || false,
      isSupport: chat.support || false,
      isVerified: chat.verified || false,
    };

    if (chat_.isBot) {
      chat_.isRestricted = chat.restricted || false;
      chat_.restrictionReason = chat.restrictionReason;
    }

    if (chat.photo instanceof types.UserProfilePhoto) {
      chat_.photo = constructChatPhoto(chat.photo, chat_.id, chat.accessHash ?? 0n);
    }

    return cleanObject(chat_);
  } else if (chat instanceof types.Chat) {
    const id = Number(-chat.id);
    const chat_: Chat.Group = {
      type: "group",
      id,
      color: getColorFromPeerId(id),
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
        color: chat.color !== undefined ? getColorFromColorId(chat.color) : getColorFromPeerId(id),
        type: "supergroup",
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
        color: chat.color !== undefined ? getColorFromColorId(chat.color) : getColorFromPeerId(id),
        type: "channel",
        title,
        isScam,
        isFake,
        isVerified,
        isRestricted,
      };
    }

    chat_.username = chat.username;
    chat_.also = chat.usernames?.map((v) => v.username);
    if (chat_.isRestricted) {
      chat_.restrictionReason = (chat.restrictionReason ?? []).map(constructRestrictionReason);
    }

    if (chat.photo instanceof types.ChatPhoto) {
      chat_.photo = constructChatPhoto(chat.photo, chat_.id, chat.accessHash ?? 0n);
    }

    return cleanObject(chat_);
  } else {
    UNREACHABLE();
  }
}
