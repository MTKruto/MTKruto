/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
import { enums, types } from "../2_tl.ts";
import { EntityGetter } from "./_getters.ts";

/** @unlisted */
export interface StoryPrivacyEveryone {
  everyoneExcept: number[];
}

/** @unlisted */
export interface StoryPrivacyConctacts {
  contactsExcept: number[];
}

/** @unlisted */
export interface StoryPrivacyCloseFriends {
  closeFriends: true;
}

/** @unlisted */
export interface StoryPrivacyOnly {
  only: number[];
}

/** A story's privacy choice. */
export type StoryPrivacy =
  | StoryPrivacyEveryone
  | StoryPrivacyConctacts
  | StoryPrivacyCloseFriends
  | StoryPrivacyOnly;

async function resolveUsers(ids: number[], getEntity: EntityGetter) {
  const users = new Array<types.InputUser>();
  for (const id of ids) {
    const entity = await getEntity(new types.PeerUser({ user_id: BigInt(id) }));
    if (!(entity instanceof types.User)) {
      unreachable();
    } else {
      users.push(new types.InputUser({ user_id: entity.id, access_hash: entity.access_hash ?? 0n }));
    }
  }
  return users;
}
async function restrict(users_: number[], rules: enums.InputPrivacyRule[], getEntity: EntityGetter) {
  if (users_.length) {
    const users = await resolveUsers(users_, getEntity);
    rules.push(new types.InputPrivacyValueDisallowUsers({ users }));
  }
}

export async function storyPrivacyToTlObject(privacy: StoryPrivacy, getEntity: EntityGetter): Promise<enums.InputPrivacyRule[]> {
  const rules = new Array<enums.InputPrivacyRule>();
  if ("everyoneExcept" in privacy) {
    await restrict(privacy.everyoneExcept, rules, getEntity);
    rules.push(new types.InputPrivacyValueAllowAll());
  } else if ("contactsExcept" in privacy) {
    await restrict(privacy.contactsExcept, rules, getEntity);
    rules.push(new types.InputPrivacyValueAllowContacts());
  } else if ("closeFriends" in privacy) {
    rules.push(new types.InputPrivacyValueAllowCloseFriends());
  } else if ("only" in privacy) {
    if (!privacy.only.length) {
      unreachable();
    }
    const users = await resolveUsers(privacy.only, getEntity);
    rules.push(new types.InputPrivacyValueAllowUsers({ users }));
  }
  return rules;
}

export function constructStoryPrivacy(privacy: enums.PrivacyRule[]): StoryPrivacy {
  const except = privacy.find((v): v is types.PrivacyValueDisallowUsers => v instanceof types.PrivacyValueDisallowUsers)?.users?.map(Number) ?? [];
  if (privacy.some((v) => v instanceof types.PrivacyValueAllowAll)) {
    return { everyoneExcept: except };
  } else if (privacy.some((v) => v instanceof types.PrivacyValueAllowContacts)) {
    return { contactsExcept: except };
  } else if (privacy.some((v) => v instanceof types.PrivacyValueAllowCloseFriends)) {
    return { closeFriends: true };
  }

  const only = privacy.find((v): v is types.PrivacyValueAllowUsers => v instanceof types.PrivacyValueAllowUsers)?.users?.map(Number) ?? [];
  return { only };
}
