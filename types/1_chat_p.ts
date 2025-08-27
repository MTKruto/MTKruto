/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { unreachable } from "../0_deps.ts";
import { cleanObject, getColorFromPeerId, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { type ChatPhoto, constructChatPhoto } from "./0_chat_photo.ts";
import { constructRestrictionReason, type RestrictionReason } from "./0_restriction_reason.ts";

/** @unlisted */
export type ChatType =
  | "private"
  | "group"
  | "supergroup"
  | "channel";

/** @unlisted */
export interface _ChatPBase {
  /** The identifier of the chat. */
  id: number;
  /** The type of the chat. */
  type: ChatType;
  /** Identifier of a color that can be displayed instead of the chat's photo. */
  color: number;
}

/** @unlisted */
export interface ChatPPrivate extends _ChatPBase {
  /** @discriminator */
  type: "private";
  /** Whether this is a bot's chat. */
  isBot: boolean;
  /** The first name of the user. */
  firstName: string;
  /** The last name of the user. */
  lastName?: string;
  /** The user's main username. */
  username?: string;
  /** The user's additional usernames. */
  also?: string[];
  /** The user's profile photo. */
  photo?: ChatPhoto;
  /** The user's [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag). */
  languageCode?: string;
  /** Whether the user has been identified as scam. */
  isScam: boolean;
  /** Whether the user has been identified as an impersonator. */
  isFake: boolean;
  /** Whether the user is subscribed to Telegram Premium. */
  isPremium: boolean;
  /** Whether the user has been verified. */
  isVerified: boolean;
  /** Whether the user is official support. */
  isSupport: boolean;
  /** Whether the user has been restricted. */
  isRestricted: boolean;
  /** The reason why the user has been restricted. */
  restrictionReason?: RestrictionReason[];
  /** Whether the user is a bot that has been added to the attachment menu by the current user. */
  addedToAttachmentMenu?: boolean;
  /** Whether the user is a bot that has been added to the attachment menu by the current user. */
  hasMainMiniApp?: boolean;
}

/** @unlisted */
export interface ChatPGroup extends _ChatPBase {
  /** @discriminator */
  type: "group";
  /** The title of the chat. */
  title: string;
  /** Whether the current user is the owner of the chat. */
  isCreator: boolean;
}

/** @unlisted */
export interface ChatPChannelBase extends _ChatPBase {
  /** The title of the chat or channel. */
  title: string;
  /** The main username of the chat or channel. */
  username?: string;
  /** The chat or channel's additional usernames. */
  also?: string[];
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
  /** @discriminator */
  type: "channel";
}

/** @unlisted */
export interface ChatPSupergroup extends ChatPChannelBase {
  /** @discriminator */
  type: "supergroup";
  /** Whether the chat is a forum. */
  isForum: boolean;
}

/**
 * A chat with lesser fields.
 */
export type ChatP = ChatPPrivate | ChatPGroup | ChatPSupergroup | ChatPChannel;

export function constructChatP(chat: Api.user): ChatPPrivate;
export function constructChatP(chat: Api.chat | Api.chatForbidden): ChatPGroup;
export function constructChatP(chat: Api.channel | Api.channelForbidden): ChatPSupergroup | ChatPChannel;
export function constructChatP(chat: Api.user | Api.chat | Api.chatForbidden | Api.channel | Api.channelForbidden): ChatP;
export function constructChatP(chat: Api.user | Api.chat | Api.chatForbidden | Api.channel | Api.channelForbidden): ChatP {
  if (Api.is("user", chat)) {
    const id = Number(chat.id);
    const usernames = chat.usernames?.map((v) => v.username);
    const username = chat.username ?? usernames?.shift();
    const chat_: ChatPPrivate = {
      id,
      type: "private",
      isBot: chat.bot || false,
      color: chat.color?.color !== undefined ? chat.color.color : getColorFromPeerId(id),
      firstName: chat.first_name || "",
      lastName: chat.last_name,
      username,
      languageCode: chat.lang_code,
      also: usernames?.filter((v) => v != username),
      isScam: chat.scam || false,
      isFake: chat.fake || false,
      isPremium: chat.premium || false,
      isVerified: chat.verified || false,
      isSupport: chat.support || false,
      isRestricted: chat.restricted || false,
      restrictionReason: chat.restriction_reason,
      addedToAttachmentMenu: chat.bot ? chat.attach_menu_enabled || false : undefined,
      hasMainMiniApp: chat.bot ? chat.attach_menu_enabled || false : undefined,
    };
    if (Api.is("userProfilePhoto", chat.photo)) {
      chat_.photo = constructChatPhoto(chat.photo, chat_.id, chat.access_hash ?? 0n);
    }

    return cleanObject(chat_);
  } else if (Api.is("chat", chat) || Api.is("chatForbidden", chat)) {
    const id = Number(-chat.id);
    const chat_: ChatPGroup = {
      id,
      type: "group",
      color: getColorFromPeerId(id),
      title: chat.title,
      isCreator: false,
    };

    if (Api.is("chat", chat)) {
      chat_.isCreator = chat.creator || false;
    }

    return cleanObject(chat_);
  } else if (Api.is("channel", chat) || Api.is("channelForbidden", chat)) {
    let chat_: ChatPSupergroup | ChatPChannel;
    const id = ZERO_CHANNEL_ID + -Number(chat.id);
    if (Api.is("channelForbidden", chat)) {
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
    chat_.also = chat.usernames?.map((v) => v.username).filter((v) => v != chat_.username);
    if (chat_.isRestricted) {
      chat_.restrictionReason = (chat.restriction_reason ?? []).map(constructRestrictionReason);
    }

    return cleanObject(chat_);
  } else {
    unreachable();
  }
}

/** @unlisted */
export interface PeerGetter {
  (peer: Api.peerUser): [ChatPPrivate, bigint] | null;
  (peer: Api.peerChat): [ChatPGroup, bigint] | null;
  (peer: Api.peerChannel): [ChatPChannel | ChatPSupergroup, bigint] | null;
  (peer: Api.peerUser | Api.peerChat | Api.peerChannel): [ChatP, bigint] | null;
}

export function isChatPUser(chatP: ChatP): chatP is ChatPPrivate {
  return chatP.type === "private";
}
