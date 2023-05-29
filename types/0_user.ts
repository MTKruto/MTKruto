import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";

export class User {
  id: number;
  isBot: boolean;
  firstName: string;
  lastName?: string;
  username?: string;
  also?: string[];
  languageCode?: string;
  isPremium: boolean;
  addedToAttachmentMenu: boolean;

  constructor(user: types.User) {
    this.id = Number(user.id);
    this.isBot = user.bot || false;
    this.firstName = user.firstName || "";
    this.lastName = user.lastName;
    this.username = user.username;
    if (user.usernames) {
      this.also = user.usernames.map((v) => v[as](types.Username)).map((v) => v.username);
    }
    this.languageCode = user.langCode;
    this.isPremium = user.premium || false;
    this.addedToAttachmentMenu = user.attachMenuEnabled || false;
  }
}
