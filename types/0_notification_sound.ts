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
import type { Api } from "../2_tl.ts";

/** @unlisted */
export interface NotificationSoundDefault {
  type: "default";
}

/** @unlisted */
export interface NotificationSoundNone {
  type: "none";
}

/** @unlisted */
export interface NotificationSoundLocal {
  type: "local";
  title: string;
  data: string;
}

/** @unlisted */
export interface NotificationSoundRingtone {
  type: "ringtone";
  id: string;
}

/** Any type of notification sound. */
export type NotificationSound = NotificationSoundDefault | NotificationSoundNone | NotificationSoundLocal | NotificationSoundRingtone;

export function constructNotificationSound(ns: Api.NotificationSound): NotificationSound {
  switch (ns._) {
    case "notificationSoundDefault":
      return { type: "default" };
    case "notificationSoundNone":
      return { type: "none" };
    case "notificationSoundLocal":
      return { type: "local", title: ns.title, data: ns.data };
    case "notificationSoundRingtone":
      return { type: "ringtone", id: String(ns.id) };
  }

  unreachable();
}

export function notificationSoundToTlObject(ns: NotificationSound): Api.NotificationSound {
  switch (ns.type) {
    case "default":
      return { _: "notificationSoundDefault" };
    case "none":
      return { _: "notificationSoundNone" };
    case "local":
      return { _: "notificationSoundLocal", title: ns.title, data: ns.data };
    case "ringtone":
      return { _: "notificationSoundRingtone", id: BigInt(ns.id) };
  }

  unreachable();
}
