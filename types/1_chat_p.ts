import { cleanObject, getColorFromPeerId, UNREACHABLE, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { constructRestrictionReason, RestrictionReason } from "./0_restriction_reason.ts";

export type ChatType =
  | "private"
  | "group"
  | "supergroup"
  | "channel";

export declare namespace ChatP {
  export interface Base {
    /** The identifier of the chat. */
    id: number;
    /** The type of the chat. */
    type: ChatType;
    /** Identifier of a color that can be displayed instead of the chat's photo. */
    color: number;
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
    /** Whether the current user is the owner of the chat. */
    isCreator: boolean;
  }

  export interface ChannelBase extends Base {
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
export type ChatP = ChatP.Private | ChatP.Group | ChatP.Supergroup | ChatP.Channel;

export function constructChatP(chat: types.User): ChatP.Private;
export function constructChatP(chat: types.Chat): ChatP.Group;
export function constructChatP(chat: types.Channel): ChatP.Supergroup | ChatP.Channel;
export function constructChatP(chat: types.User | types.Chat | types.Channel): ChatP {
  if (chat instanceof types.User) {
    const id = Number(chat.id);
    const chat_: ChatP.Private = {
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
  } else if (chat instanceof types.Chat) {
    const id = Number(-chat.id);
    const chat_: ChatP.Group = {
      id,
      type: "group",
      color: getColorFromPeerId(id),
      title: chat.title,
      isCreator: chat.creator || false,
    };

    return cleanObject(chat_);
  } else if (chat instanceof types.Channel) {
    let chat_: ChatP.Supergroup | ChatP.Channel;
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
