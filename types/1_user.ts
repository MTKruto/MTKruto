import { cleanObject } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { ChatPhoto, constructChatPhoto } from "./0_chat_photo.ts";
import { Color, getColor } from "./0_color.ts";

/** This object represents a Telegram user or bot. */
export interface User {
  /** Unique identifier for this user or bot */
  id: number;
  color: Color;
  /** True, if this user is a bot */
  isBot: boolean;
  /** User's or bot's first name */
  firstName: string;
  /** User's or bot's last name */
  lastName?: string;
  /** User's or bot's username */
  username?: string;
  /** Additional usernames */
  also?: string[];
  /** Chat photo */
  photo?: ChatPhoto.User;
  /** [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the user's language */
  languageCode?: string;
  /** True, if the user is a scam user */
  isScam: boolean;
  /** True, if this user was reported by many users as a fake or scam user: be careful when interacting with them. */
  isFake: boolean;
  /** True, if this user is a Telegram Premium user */
  isPremium: boolean;
  /** True, if the user is verified */
  isVerified: boolean;
  /** True, if the user is an official support user */
  isSupport: boolean;
  /** True, if this user added the bot to the attachment menu */
  addedToAttachmentMenu: boolean;
}

export function constructUser(user_: types.User) {
  const id = Number(user_.id);
  const user: User = {
    id,
    color: getColor(id),
    isBot: user_.bot || false,
    firstName: user_.firstName || "",
    lastName: user_.lastName,
    username: user_.username,
    also: user_.usernames?.map((v) => v.username),
    languageCode: user_.langCode,
    isScam: user_.scam || false,
    isFake: user_.fake || false,
    isPremium: user_.premium || false,
    isVerified: user_.verified || false,
    isSupport: user_.support || false,
    addedToAttachmentMenu: user_.attachMenuEnabled || false,
  };
  if (user_.photo instanceof types.UserProfilePhoto) {
    user.photo = constructChatPhoto(user_.photo, user.id, user_.accessHash ?? 0n);
  }

  return cleanObject(user);
}
