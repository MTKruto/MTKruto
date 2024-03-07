import { cleanObject, getColorFromPeerId } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { ChatPhotoUser, constructChatPhoto } from "./0_chat_photo.ts";

/** A user. */
export interface User {
  /** Unique identifier for this user or bot */
  id: number;
  /** Identifier of color that can be displayed instead of the user's photo. */
  color: number;
  /** Whether this is a bot’s chat. */
  isBot: boolean;
  /** User's or bot's first name. */
  firstName: string;
  /** User's or bot's last name. */
  lastName?: string;
  /** User's or bot's username. */
  username?: string;
  /** Additional usernames. */
  also?: string[];
  /** The user's photo. */
  photo?: ChatPhotoUser;
  /** [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the user's language. */
  languageCode?: string;
  /** Whether the user has been identified as scam. */
  isScam: boolean;
  /** Whether the user has been identified as an impersonator. */
  isFake: boolean;
  /** Whether the user is a Telegram Premium user. */
  isPremium: boolean;
  /** Whether the user has been verified. */
  isVerified: boolean;
  /** Whether the user is official support. */
  isSupport: boolean;
  /** Whether the user added the bot to the attachment menu. */
  addedToAttachmentMenu: boolean;
}

export function constructUser(user_: types.User): User {
  const id = Number(user_.id);
  const usernames = user_.usernames?.map((v) => v.username);
  const username = user_.username ?? usernames?.shift();
  const user: User = {
    id,
    color: user_.color?.color !== undefined ? user_.color.color : getColorFromPeerId(id),
    isBot: user_.bot || false,
    firstName: user_.first_name || "",
    lastName: user_.last_name,
    username: username,
    also: usernames?.filter((v) => v != username),
    languageCode: user_.lang_code,
    isScam: user_.scam || false,
    isFake: user_.fake || false,
    isPremium: user_.premium || false,
    isVerified: user_.verified || false,
    isSupport: user_.support || false,
    addedToAttachmentMenu: user_.attach_menu_enabled || false,
  };
  if (user_.photo instanceof types.UserProfilePhoto) {
    user.photo = constructChatPhoto(user_.photo, user.id, user_.access_hash ?? 0n);
  }

  return cleanObject(user);
}
