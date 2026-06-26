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

/** A privacy setting key. */
export type PrivacySettingKey =
  | "phoneNumber"
  | "bio"
  | "birthday"
  | "profilePhoto"
  | "forwards"
  | "invitation"
  | "findByPhoneNumber"
  | "voiceMessage"
  | "paidMessageException"
  | "peerToPeerCall"
  | "gifts"
  | "savedMusic"
  | "phoneCall"
  | "lastSeen";

export function privacySettingKeyToTlObject(key: PrivacySettingKey): Api.InputPrivacyKey {
  switch (key) {
    case "phoneNumber":
      return { _: "inputPrivacyKeyPhoneNumber" };
    case "bio":
      return { _: "inputPrivacyKeyAbout" };
    case "birthday":
      return { _: "inputPrivacyKeyBirthday" };
    case "profilePhoto":
      return { _: "inputPrivacyKeyProfilePhoto" };
    case "forwards":
      return { _: "inputPrivacyKeyForwards" };
    case "invitation":
      return { _: "inputPrivacyKeyChatInvite" };
    case "findByPhoneNumber":
      return { _: "inputPrivacyKeyAddedByPhone" };
    case "voiceMessage":
      return { _: "inputPrivacyKeyVoiceMessages" };
    case "paidMessageException":
      return { _: "inputPrivacyKeyNoPaidMessages" };
    case "peerToPeerCall":
      return { _: "inputPrivacyKeyPhoneP2P" };
    case "gifts":
      return { _: "inputPrivacyKeyStarGiftsAutoSave" };
    case "savedMusic":
      return { _: "inputPrivacyKeySavedMusic" };
    case "phoneCall":
      return { _: "inputPrivacyKeyPhoneCall" };
    case "lastSeen":
      return { _: "inputPrivacyKeyStatusTimestamp" };
  }

  unreachable();
}
