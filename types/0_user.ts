import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";

export interface User {
  id: number;
  isBot: boolean;
  firstName: string;
  lastName?: string;
  username?: string;
  also?: string[];
  languageCode?: string;
  isPremium: boolean;
  addedToAttachmentMenu: boolean;
}

export function constructUser(user_: types.User) {
  const user: User = {
    id: Number(user_.id),
    isBot: user_.bot || false,
    firstName: user_.firstName || "",
    lastName: user_.lastName,
    username: user_.username,
    languageCode: user_.langCode,
    isPremium: user_.premium || false,
    addedToAttachmentMenu: user_.attachMenuEnabled || false,
  };

  if (user_.usernames) {
    user.also = user_.usernames.map((v) => v[as](types.Username)).map((v) => v.username);
  }

  return user;
}
