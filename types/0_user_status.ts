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

import type { Api } from "../2_tl.ts";

/**
 * A user status indicating that the user is currently online.
 * @unlisted
 */
export interface UserStatusOnline {
  /** @discriminator */
  type: "online";
}

/**
 * A user status indicating that the user is currently offline.
 * @unlisted
 */
export interface UserStatusOffline {
  /** @discriminator */
  type: "offline";
  /** A point in time in which the user was last seen online. */
  lastSeenAt: number;
}

/**
 * A user status indictating that the user was last seen online recently.
 * @unlisted
 */
export interface UserStatusLastSeenRecently {
  /** @discriminator */
  type: "lastSeenRecently";
}

/**
 * A user status indictating that the user was last seen online around a week ago.
 * @unlisted
 */
export interface UserStatusLastSeenLastWeek {
  /** @discriminator */
  type: "lastSeenLastWeek";
}

/**
 * A user status indictating that the user was last seen online around a month ago.
 * @unlisted
 */
export interface UserStatusLastSeenLastMonth {
  /** @discriminator */
  type: "lastSeenLastMonth";
}

export type UserStatus = UserStatusOnline | UserStatusOffline | UserStatusLastSeenRecently | UserStatusLastSeenLastWeek | UserStatusLastSeenLastMonth;

export function constructUserStatus(userStatus: Api.UserStatus): UserStatus {
  switch (userStatus._) {
    case "userStatusEmpty":
      return { type: "lastSeenRecently" };
    case "userStatusOnline":
      return { type: "online" };
    case "userStatusOffline":
      return { type: "offline", lastSeenAt: userStatus.was_online };
    case "userStatusRecently":
      return { type: "lastSeenRecently" };
    case "userStatusLastWeek":
      return { type: "lastSeenLastWeek" };
    case "userStatusLastMonth":
      return { type: "lastSeenLastMonth" };
  }
}
