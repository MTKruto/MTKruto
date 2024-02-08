import { ID } from "./0_id.ts";

/** @unlisted */
export interface StoryPrivacyEveryone {
  everyoneExcept: ID[];
}

/** @unlisted */
export interface StoryPrivacyConctacts {
  contactsExcept: ID[];
}

/** @unlisted */
export interface StoryPrivacyCloseFriends {
  closeFriends: true;
}

/** @unlisted */
export interface StoryPrivacyOnly {
  only: ID[];
}

export type StoryPrivacy =
  | StoryPrivacyEveryone
  | StoryPrivacyConctacts
  | StoryPrivacyCloseFriends
  | StoryPrivacyOnly;
