import { UNREACHABLE } from "../1_utilities.ts";
import { enums, types } from "../2_tl.ts";
import { EntityGetter } from "./1__getters.ts";

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
      UNREACHABLE();
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

export async function storyPrivacyToTlObject(privacy: StoryPrivacy, getEntity: EntityGetter) {
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
      UNREACHABLE();
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
