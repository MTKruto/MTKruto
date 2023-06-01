import { cleanObject } from "../utilities/0_object.ts";
import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { ChatPhoto, constructChatPhoto } from "./0_chat_photo.ts";

export interface User {
  id: number;
  isBot: boolean;
  firstName: string;
  lastName?: string;
  username?: string;
  also?: string[];
  photo?: ChatPhoto.User;
  languageCode?: string;
  isScam: boolean;
  isFake: boolean;
  isPremium: boolean;
  isVerified: boolean;
  isSupport: boolean;
  addedToAttachmentMenu: boolean;
}

export function constructUser(user_: types.User) {
  const user: User = {
    id: Number(user_.id),
    isBot: user_.bot || false,
    firstName: user_.firstName || "",
    lastName: user_.lastName,
    username: user_.username,
    also: user_.usernames?.map((v) => v[as](types.Username)).map((v) => v.username),
    languageCode: user_.langCode,
    isScam: user_.scam || false,
    isFake: user_.fake || false,
    isPremium: user_.premium || false,
    isVerified: user_.verified || false,
    isSupport: user_.support || false,
    addedToAttachmentMenu: user_.attachMenuEnabled || false,
  };
  if (user_.photo instanceof types.UserProfilePhoto) {
    user.photo = constructChatPhoto(user_.photo);
  }
  return cleanObject(user);
}
