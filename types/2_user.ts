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

import { cleanObject, getColorFromPeerId } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { type ChatPhoto, constructChatPhoto } from "./0_chat_photo.ts";
import type { RestrictionReason } from "./0_restriction_reason.ts";
import type { ChatPPrivate } from "./1_chat_p.ts";

/** A user. */
export interface User {
  /** Unique identifier for this user or bot */
  id: number;
  /** Identifier of color that can be displayed instead of the user's photo. */
  color: number;
  /** Whether the user is a bot. */
  isBot: boolean;
  /** The first name of the user. */
  firstName: string;
  /** The last name of the user. */
  lastName?: string;
  /** The user’s main username. */
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
  /** Whether the user is a bot that has a main mini app. */
  hasMainMiniApp?: boolean;
}

export function constructUser(user_: Api.user): User {
  const id = Number(user_.id);
  const usernames = user_.usernames?.map((v) => v.username);
  const username = user_.username ?? usernames?.shift();
  const user: User = {
    id,
    color: user_.color?.color !== undefined ? user_.color.color : getColorFromPeerId(id),
    isBot: user_.bot || false,
    firstName: user_.first_name || "",
    lastName: user_.last_name,
    username: username,
    also: usernames?.filter((v) => v !== username),
    languageCode: user_.lang_code,
    isScam: user_.scam || false,
    isFake: user_.fake || false,
    isPremium: user_.premium || false,
    isVerified: user_.verified || false,
    isSupport: user_.support || false,
    isRestricted: user_.restricted || false,
    restrictionReason: user_.restriction_reason,
    addedToAttachmentMenu: user_.bot ? user_.attach_menu_enabled || false : undefined,
    hasMainMiniApp: user_.bot ? user_.bot_has_main_app || false : undefined,
  };
  if (Api.is("userProfilePhoto", user_.photo)) {
    user.photo = constructChatPhoto(user_.photo, user.id, user_.access_hash ?? 0n);
  }

  return cleanObject(user);
}

export function constructUser2(chatP: ChatPPrivate): User {
  const user: User = {
    id: chatP.id,
    color: chatP.color,
    isBot: chatP.isBot,
    firstName: chatP.firstName,
    lastName: chatP.lastName,
    username: chatP.username,
    also: chatP.also,
    photo: chatP.photo,
    languageCode: chatP.languageCode,
    isScam: chatP.isScam,
    isFake: chatP.isFake,
    isPremium: chatP.isPremium,
    isVerified: chatP.isVerified,
    isSupport: chatP.isSupport,
    isRestricted: chatP.isRestricted,
    restrictionReason: chatP.restrictionReason,
    addedToAttachmentMenu: chatP.addedToAttachmentMenu,
    hasMainMiniApp: chatP.hasMainMiniApp,
  };
  return cleanObject(user);
}
