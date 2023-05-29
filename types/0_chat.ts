import { ZERO_CHANNEL_ID } from "../constants.ts";
import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";

export class Chat {
  id: number;
  firstName?: string;
  lastName?: string;
  title?: string;
  username?: string;
  also?: string[];
  isVerified = false;
  isForum = false;
  bio?: string;
  description?: string;
  isScam?: boolean;
  isFake?: boolean;
  isCreator?: boolean;
  isRestricted?: boolean;
  linkedChatId?: number;

  constructor(chat: types.User, full?: types.UserFull);
  constructor(chat: types.Chat, full?: types.ChatFull);
  constructor(chat: types.Channel, full?: types.ChannelFull);
  constructor(chat: types.User | types.Chat | types.Channel, full?: types.UserFull | types.ChatFull | types.ChannelFull) {
    if (chat instanceof types.User && (!full || full instanceof types.UserFull)) {
      this.id = Number(chat.id);
      this.firstName = chat.firstName || "";
      this.lastName = chat.lastName;
      this.bio = full?.about;
      this.isScam = chat.scam || false;
      this.isFake = chat.fake || false;
      if (chat.bot) {
        this.isRestricted = chat.restricted || false;
      }
    } else if (chat instanceof types.Chat && (!full || full instanceof types.ChatFull)) {
      this.id = Number(-chat.id);
      this.title = chat.title;
      this.description = full?.about;
      this.isCreator = chat.creator || false;
    } else if (chat instanceof types.Channel && (!full || full instanceof types.ChannelFull)) {
      this.id = -(-ZERO_CHANNEL_ID + Number(chat.id));
      this.title = chat.title;
      this.username = chat.username;
      if (chat.usernames) {
        this.also = chat.usernames.map((v) => v[as](types.Username)).map((v) => v.username);
      }
      this.isVerified = chat.verified || false;
      this.isForum = chat.forum || false;
      this.description = full?.about;
      this.isScam = chat.scam || false;
      this.isFake = chat.fake || false;
      this.isCreator = chat.creator || false;
      this.isRestricted = chat.restricted || false;
      if (full?.linkedChatId) {
        this.linkedChatId = Number(full.linkedChatId);
      }
    } else {
      throw new Error("Unexpected types");
    }
  }
}
