/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
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
import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { type Birthday, constructBirthday } from "./0_birthday.ts";
import { constructLocation, type Location } from "./0_location.ts";
import { constructOpeningHours, type OpeningHours } from "./0_opening_hours.ts";
import type { ChatPChannel, ChatPGroup, ChatPPrivate, ChatPSupergroup, PeerGetter } from "./1_chat_p.ts";
import { constructPhoto, type Photo } from "./1_photo.ts";

/** @unlisted */
export interface ChatBase {
  /** The chat's photo. */
  photo?: Photo;
}

/** @unlisted */
export interface ChatChannel extends ChatBase, ChatPChannel {
  /** The channel's video chat ID. */
  videoChatId?: string;
}

/** @unlisted */
export interface ChatSupergroup extends ChatBase, ChatPSupergroup {
  /** The chat's video chat ID. */
  videoChatId?: string;
}

/** @unlisted */
export interface ChatGroup extends ChatBase, ChatPGroup {
  /** The chat's video chat ID. */
  videoChatId?: string;
}

/** @unlisted */
export interface ChatPrivate extends ChatBase, Omit<ChatPPrivate, "photo"> {
  /** The user's birthday. */
  birthday?: Birthday;
  /** The written address of the business. */
  address?: string;
  /** The exact location of the business. */
  location?: Location;
  /** The opening hours of the business. */
  openingHours?: OpeningHours;
}

/**
 * A chat with more fields.
 */
export type Chat = ChatChannel | ChatSupergroup | ChatGroup | ChatPrivate;

export function constructChat(fullChat: Api.userFull | Api.chatFull | Api.channelFull, getPeer: PeerGetter): Chat {
  if (Api.is("userFull", fullChat)) {
    const peer = getPeer({ _: "peerUser", user_id: fullChat.id });
    if (!peer) unreachable();
    return cleanObject({
      ...peer[0],
      birthday: fullChat.birthday ? constructBirthday(fullChat.birthday) : undefined,
      photo: fullChat.profile_photo && Api.is("photo", fullChat.profile_photo) ? constructPhoto(fullChat.profile_photo) : undefined,
      address: fullChat.business_location?.address,
      location: fullChat.business_location?.geo_point && Api.is("geoPoint", fullChat.business_location.geo_point) ? constructLocation(fullChat.business_location.geo_point) : undefined,
      openingHours: fullChat.business_work_hours ? constructOpeningHours(fullChat.business_work_hours) : undefined,
    });
  } else if (Api.is("chatFull", fullChat)) {
    const peer = getPeer({ _: "peerChat", chat_id: fullChat.id });
    if (peer === null) unreachable();
    return cleanObject({
      ...peer[0],
      photo: fullChat.chat_photo && Api.is("photo", fullChat.chat_photo) ? constructPhoto(fullChat.chat_photo) : undefined,
      videoChatId: Api.is("inputGroupCall", fullChat.call) ? String(fullChat.call.id) : undefined,
    });
  } else if (Api.is("channelFull", fullChat)) {
    const peer = getPeer({ _: "peerChannel", channel_id: fullChat.id });
    if (peer === null) unreachable();
    return cleanObject({
      ...peer[0],
      photo: fullChat.chat_photo && Api.is("photo", fullChat.chat_photo) ? constructPhoto(fullChat.chat_photo) : undefined,
      videoChatId: Api.is("inputGroupCall", fullChat.call) ? String(fullChat.call.id) : undefined,
    });
  }
  unreachable();
}
