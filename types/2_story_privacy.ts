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
import { Api } from "../2_tl.ts";
import type { PeerGetter } from "./1_chat_p.ts";

/** @unlisted */
export interface StoryPrivacyEveryone {
  /** @discriminator */
  everyoneExcept: number[];
}

/** @unlisted */
export interface StoryPrivacyConctacts {
  /** @discriminator */
  contactsExcept: number[];
}

/** @unlisted */
export interface StoryPrivacyCloseFriends {
  /** @discriminator */
  closeFriends: true;
}

/** @unlisted */
export interface StoryPrivacyOnly {
  /** @discriminator */
  only: number[];
}

/** A story's privacy choice. */
export type StoryPrivacy =
  | StoryPrivacyEveryone
  | StoryPrivacyConctacts
  | StoryPrivacyCloseFriends
  | StoryPrivacyOnly;

function resolveUsers(ids: number[], getPeer: PeerGetter) {
  const users = new Array<Api.inputUser>();
  for (const id of ids) {
    const peer = getPeer({ _: "peerUser", user_id: BigInt(id) });
    if (!peer) {
      unreachable();
    } else {
      users.push({ _: "inputUser", user_id: BigInt(peer[0].id), access_hash: peer[1] });
    }
  }
  return users;
}
function restrict(users_: number[], rules: Api.InputPrivacyRule[], getPeer: PeerGetter) {
  if (users_.length) {
    const users = resolveUsers(users_, getPeer);
    rules.push({ _: "inputPrivacyValueDisallowUsers", users });
  }
}

export function storyPrivacyToTlObject(privacy: StoryPrivacy, getPeer: PeerGetter): Api.InputPrivacyRule[] {
  const rules = new Array<Api.InputPrivacyRule>();
  if ("everyoneExcept" in privacy) {
    restrict(privacy.everyoneExcept, rules, getPeer);
    rules.push({ _: "inputPrivacyValueAllowAll" });
  } else if ("contactsExcept" in privacy) {
    restrict(privacy.contactsExcept, rules, getPeer);
    rules.push({ _: "inputPrivacyValueAllowContacts" });
  } else if ("closeFriends" in privacy) {
    rules.push({ _: "inputPrivacyValueAllowCloseFriends" });
  } else if ("only" in privacy) {
    if (!privacy.only.length) {
      unreachable();
    }
    const users = resolveUsers(privacy.only, getPeer);
    rules.push({ _: "inputPrivacyValueAllowUsers", users });
  }
  return rules;
}

export function constructStoryPrivacy(privacy: Api.PrivacyRule[]): StoryPrivacy {
  const except = privacy.find((v): v is Api.privacyValueDisallowUsers => Api.is("privacyValueDisallowUsers", v))?.users?.map(Number) ?? [];
  if (privacy.some((v) => Api.is("privacyValueAllowAll", v))) {
    return { everyoneExcept: except };
  } else if (privacy.some((v) => Api.is("privacyValueAllowContacts", v))) {
    return { contactsExcept: except };
  } else if (privacy.some((v) => Api.is("privacyValueAllowCloseFriends", v))) {
    return { closeFriends: true };
  }

  const only = privacy.find((v): v is Api.privacyValueAllowUsers => Api.is("privacyValueAllowUsers", v))?.users?.map(Number) ?? [];
  return { only };
}
