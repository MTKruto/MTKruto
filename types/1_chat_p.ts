import { cleanObject, getColorFromPeerId, UNREACHABLE, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { constructRestrictionReason, RestrictionReason } from "./0_restriction_reason.ts";

/** @unlisted */
export type ChatType =
  | "private"
  | "group"
  | "supergroup"
  | "channel";

/** @unlisted */
export interface ChatPBase {
  /** The identifier of the chat. */
  id: number;
  /** The type of the chat. */
  type: ChatType;
  /** Identifier of a color that can be displayed instead of the chat's photo. */
  color: number;
}

/** @unlisted */
export interface ChatPPrivate extends ChatPBase {
  type: "private";
  /** Whether this is a bot's chat. */
  isBot?: boolean;
  /** The first name of the user. */
  firstName: string;
  /** The last name of the user. */
  lastName?: string;
  /** The user's main username. */
  username?: string;
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

/** @unlisted */
export interface ChatPGroup extends ChatPBase {
  type: "group";
  /** The title of the chat. */
  title: string;
  /** Whether the current user is the owner of the chat. */
  isCreator: boolean;
}

/** @unlisted */
export interface ChatPChannelBase extends ChatPBase {
  /** The title of the chat or channel. */
  title: string;
  /** The main username of the chat or channel. */
  username?: string;
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

/** @unlisted */
export interface ChatPChannel extends ChatPChannelBase {
  type: "channel";
}

/** @unlisted */
export interface ChatPSupergroup extends ChatPChannelBase {
  type: "supergroup";
  /** Whether the chat is a forum. */
  isForum: boolean;
}

/**
 * This object represents a chat.
 * @unlisted
 */
export type ChatP = ChatPPrivate | ChatPGroup | ChatPSupergroup | ChatPChannel;

export function constructChatP(chat: types.User): ChatPPrivate;
export function constructChatP(chat: types.Chat | types.ChatForbidden): ChatPGroup;
export function constructChatP(chat: types.Channel | types.ChannelForbidden): ChatPSupergroup | ChatPChannel;
export function constructChatP(chat: types.User | types.Chat | types.ChatForbidden | types.Channel | types.ChannelForbidden): ChatP {
  if (chat instanceof types.User) {
    const id = Number(chat.id);
    const chat_: ChatPPrivate = {
      id,
      type: "private",
      isBot: chat.bot || false,
      color: chat.color?.color !== undefined ? chat.color.color : getColorFromPeerId(id),
      firstName: chat.first_name || "",
      lastName: chat.last_name,
      isScam: chat.scam || false,
      isFake: chat.fake || false,
      isSupport: chat.support || false,
      isVerified: chat.verified || false,
    };

    if (chat_.isBot) {
      chat_.isRestricted = chat.restricted || false;
      chat_.restrictionReason = chat.restriction_reason;
    }

    return cleanObject(chat_);
  } else if (chat instanceof types.Chat || chat instanceof types.ChatForbidden) {
    const id = Number(-chat.id);
    const chat_: ChatPGroup = {
      id,
      type: "group",
      color: getColorFromPeerId(id),
      title: chat.title,
      isCreator: false,
    };

    if (chat instanceof types.Chat) {
      chat_.isCreator = chat.creator || false;
    }

    return cleanObject(chat_);
  } else if (chat instanceof types.Channel || types.ChannelForbidden) {
    let chat_: ChatPSupergroup | ChatPChannel;
    const id = ZERO_CHANNEL_ID + -Number(chat.id);
    if (chat instanceof types.ChannelForbidden) {
      const { title } = chat;
      if (chat.megagroup) {
        return { id, color: getColorFromPeerId(id), title, type: "supergroup", isScam: false, isFake: false, isVerified: false, isRestricted: false, isForum: false };
      } else {
        return { id, color: getColorFromPeerId(id), title, type: "channel", isScam: false, isFake: false, isVerified: false, isRestricted: false };
      }
    }
    const {
      title,
      scam: isScam = false,
      fake: isFake = false,
      verified: isVerified = false,
      restricted: isRestricted = false,
    } = chat;
    if (chat.megagroup) {
      chat_ = {
        id,
        color: chat.color?.color !== undefined ? chat.color.color : getColorFromPeerId(id),
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
        color: chat.color?.color !== undefined ? chat.color.color : getColorFromPeerId(id),
        type: "channel",
        title,
        isScam,
        isFake,
        isVerified,
        isRestricted,
      };
    }

    chat_.username = chat.username ?? chat.usernames?.[0].username;
    if (chat_.isRestricted) {
      chat_.restrictionReason = (chat.restriction_reason ?? []).map(constructRestrictionReason);
    }

    return cleanObject(chat_);
  } else {
    UNREACHABLE();
  }
}
