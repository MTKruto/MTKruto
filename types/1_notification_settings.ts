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

import { cleanObject } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";
import { constructNotificationSound, type NotificationSound } from "./0_notification_sound.ts";

/** A chat's notification settings. */
export interface NotificationSettings {
  showsPreviews?: boolean;
  isSilent?: boolean;
  muteUntil?: number;
  iosSound?: NotificationSound;
  androidSound?: NotificationSound;
  otherPlatformsSound?: NotificationSound;
  mutesStories?: boolean;
  hidesStories?: boolean;
  iosStorySound?: NotificationSound;
  androidStorySound?: NotificationSound;
  otherPlatformsStorySound?: NotificationSound;
}

export function constructNotificationSettings(pns: Api.PeerNotifySettings): NotificationSettings {
  return cleanObject({
    showsPreviews: pns.show_previews,
    silent: pns.silent,
    muteUntil: pns.mute_until,
    iosSound: pns.ios_sound ? constructNotificationSound(pns.ios_sound) : undefined,
    androidSound: pns.android_sound ? constructNotificationSound(pns.android_sound) : undefined,
    otherPlatformsSound: pns.other_sound ? constructNotificationSound(pns.other_sound) : undefined,
    mutesStories: pns.stories_muted,
    hidesStories: pns.stories_hide_sender,
    iosStorySound: pns.stories_ios_sound ? constructNotificationSound(pns.stories_ios_sound) : undefined,
    androidStorySound: pns.stories_android_sound ? constructNotificationSound(pns.stories_android_sound) : undefined,
    otherPlatformsStorySound: pns.stories_other_sound ? constructNotificationSound(pns.stories_other_sound) : undefined,
  });
}
