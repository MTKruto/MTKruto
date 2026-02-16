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
import { InputError } from "../0_errors.ts";
import { Api } from "../2_tl.ts";
import { PasswordHashInvalid, PhoneCodeInvalid, SessionPasswordNeeded } from "../3_errors.ts";
import { birthdayToTlObject, type BotTokenCheckResult, type CodeCheckResult, constructInactiveChat, constructUser, type ID, type PasswordCheckResult } from "../3_types.ts";
import type { AddContactParams, CheckUsernameParams, SetBirthdayParams, SetEmojiStatusParams, SetLocationParams, SetNameColorParams, SetPersonalChannelParams, SetProfileColorParams, UpdateProfileParams } from "./0_params.ts";
import { checkPassword } from "./0_password.ts";
import { canBeInputChannel, canBeInputUser, toInputChannel, toInputUser } from "./0_utilities.ts";
import type { C } from "./1_types.ts";

export class AccountManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async #toggleUsername(id: ID, username: string, active: boolean) {
    const peer = await this.#c.getInputPeer(id);
    if (Api.is("inputPeerSelf", peer)) {
      await this.#c.invoke({ _: "account.toggleUsername", username, active });
    } else if (canBeInputUser(peer)) {
      await this.#c.invoke({ _: "bots.toggleUsername", bot: toInputUser(peer), username, active });
    } else if (canBeInputChannel(peer)) {
      await this.#c.invoke({ _: "channels.toggleUsername", channel: toInputChannel(peer), username, active });
    } else {
      unreachable();
    }
  }

  async showUsername(id: ID, username: string) {
    this.#c.storage.assertUser("showUsername");
    await this.#toggleUsername(id, username, true);
  }

  async hideUsername(id: ID, username: string) {
    this.#c.storage.assertUser("hideUsername");
    await this.#toggleUsername(id, username, false);
  }

  async checkUsername(username: string, params?: CheckUsernameParams) {
    this.#c.storage.assertUser("checkUsername");
    const channel = params?.chat ? await this.#c.getInputChannel(params.chat) : undefined;
    if (channel) {
      return await this.#c.invoke({ _: "channels.checkUsername", channel, username });
    } else {
      return await this.#c.invoke({ _: "account.checkUsername", username });
    }
  }

  async reorderUsernames(id: ID, order: string[]) {
    this.#c.storage.assertUser("reorderUsernames");
    const peer = await this.#c.getInputPeer(id);
    if (Api.is("inputPeerSelf", peer)) {
      return await this.#c.invoke({ _: "account.reorderUsernames", order });
    } else if (canBeInputUser(peer)) {
      return await this.#c.invoke({ _: "bots.reorderUsernames", bot: toInputUser(peer), order });
    } else if (canBeInputChannel(peer)) {
      return await this.#c.invoke({ _: "channels.reorderUsernames", channel: toInputChannel(peer), order });
    } else {
      unreachable();
    }
  }

  async hideUsernames(id: ID) {
    this.#c.storage.assertUser("hideUsernames");
    const peer = await this.#c.getInputPeer(id);
    if (canBeInputChannel(peer)) {
      return await this.#c.invoke({ _: "channels.deactivateAllUsernames", channel: toInputChannel(peer) });
    } else {
      unreachable();
    }
  }

  async getInactiveChats() {
    this.#c.storage.assertUser("getInactiveChats");
    const { chats, dates } = await this.#c.invoke({ _: "channels.getInactiveChannels" });
    return chats.map((v, i) => constructInactiveChat(v, dates[i]));
  }

  async setOnline(online: boolean) {
    this.#c.storage.assertUser("setOnline");
    await this.#c.invoke({ _: "account.updateStatus", offline: !online });
  }

  async setEmojiStatus(id: string, params?: SetEmojiStatusParams) {
    this.#c.storage.assertUser("setEmojiStatus");
    const document_id = BigInt(id);
    const until = params?.until;
    const emoji_status: Api.EmojiStatus = { _: "emojiStatus", document_id, until };
    await this.#c.invoke({ _: "account.updateEmojiStatus", emoji_status });
  }

  async setUserEmojiStatus(userId: ID, id: string, params?: SetEmojiStatusParams) {
    this.#c.storage.assertBot("setUserEmojiStatus");
    const user_id = await this.#c.getInputUser(userId);
    const document_id = BigInt(id);
    const until = params?.until;
    const emoji_status: Api.EmojiStatus = { _: "emojiStatus", document_id, until };
    await this.#c.invoke({ _: "bots.updateUserEmojiStatus", user_id, emoji_status });
  }

  async setBotCanSetEmojiStatus(botId: ID, canSetEmojiStatus: boolean) {
    this.#c.storage.assertUser("setBotCanSetEmojiStatus");
    const bot = await this.#c.getInputUser(botId);
    const enabled = canSetEmojiStatus;
    await this.#c.invoke({ _: "bots.toggleUserEmojiStatusPermission", bot, enabled });
  }

  async getContacts() {
    this.#c.storage.assertUser("getContacts");
    const result = await this.#c.invoke({ _: "contacts.getContacts", hash: 0n });
    if (!Api.is("contacts.contacts", result)) {
      unreachable();
    }
    return result.users.map((v) => Api.is("user", v) ? constructUser(v) : null).filter((v) => v !== null);
  }

  async deleteContacts(userIds: ID[]) {
    this.#c.storage.assertUser("deleteContacts");
    const id = await Promise.all(userIds.map((v) => this.#c.getInputUser(v)));
    await this.#c.invoke({ _: "contacts.deleteContacts", id });
  }

  async deleteContact(userId: ID) {
    this.#c.storage.assertUser("deleteContact");
    await this.deleteContacts([userId]);
  }

  async addContact(userId: ID, params?: AddContactParams) {
    this.#c.storage.assertUser("addContact");
    const id = await this.#c.getInputUser(userId);
    if (!Api.is("inputPeerUser", id)) {
      unreachable();
    }
    const peer = this.#c.getPeer(Api.inputPeerToPeer(id));
    if (!peer || peer[0].type !== "private") {
      unreachable();
    }
    const first_name = params?.firstName ?? peer[0].firstName ?? "";
    const last_name = params?.lastName ?? peer[0].lastName ?? "";
    const phone = "";
    const add_phone_privacy_exception = params?.sharePhoneNumber ? true : undefined;
    await this.#c.invoke({ _: "contacts.addContact", add_phone_privacy_exception, id, first_name, last_name, phone });
  }

  async #getUserFull(chatId: ID): Promise<Api.userFull> {
    const inputPeer = await this.#c.getInputPeer(chatId);
    const chatId_ = await this.#c.getInputPeerChatId(inputPeer);
    let fullChat = await this.#c.messageStorage.getFullChat(chatId_);
    if (fullChat !== null) {
      if (!Api.is("userFull", fullChat)) {
        unreachable();
      }
      return fullChat;
    }
    if (canBeInputUser(inputPeer)) {
      fullChat = (await this.#c.invoke({ _: "users.getFullUser", id: toInputUser(inputPeer) })).full_user;
    } else {
      unreachable();
    }
    return fullChat;
  }
  async updateProfile(params?: UpdateProfileParams) {
    this.#c.storage.assertUser("updateProfile");
    const selfId = await this.#c.getSelfId();
    const userFull = await this.#getUserFull(selfId);
    const peer = this.#c.getPeer(Api.chatIdToPeer(selfId));
    if (!peer || peer[0].type !== "private") {
      unreachable();
    }
    params ??= {};
    if (params?.firstName) {
      params.firstName = params.firstName.trim();
    } else {
      params.firstName = peer[0].firstName;
    }
    if (params?.lastName) {
      params.lastName = params.lastName.trim();
    } else {
      params.lastName = peer[0].lastName;
    }
    if (params?.bio) {
      params.bio = params.bio.trim();
    } else {
      params.bio = userFull.about;
    }
    if (!params?.firstName && !params?.lastName && !params?.bio) {
      throw new InputError("At least one parameter must be specified.");
    }
    await this.#c.invoke({ _: "account.updateProfile", first_name: params.firstName, last_name: params.lastName, about: params.bio });
  }

  async setBirthday(params?: SetBirthdayParams) {
    this.#c.storage.assertUser("setBirthday");
    const birthday = params?.birthday ? birthdayToTlObject(params.birthday) : undefined;
    await this.#c.invoke({ _: "account.updateBirthday", birthday });
  }

  async setPersonalChannel(params?: SetPersonalChannelParams) {
    this.#c.storage.assertUser("setPersonalChannel");
    let channel: Api.InputChannel = { _: "inputChannelEmpty" };
    if (params?.chatId) {
      channel = await this.#c.getInputChannel(params.chatId);
    }
    await this.#c.invoke({ _: "account.updatePersonalChannel", channel });
  }

  async setNameColor(color: number, params?: SetNameColorParams) {
    this.#c.storage.assertUser("setNameColor");
    const background_emoji_id = params?.customEmojiId ? BigInt(params.customEmojiId) : undefined;
    await this.#c.invoke({ _: "account.updateColor", color: { _: "peerColor", color, background_emoji_id } });
  }

  async setProfileColor(color: number, params?: SetProfileColorParams) {
    this.#c.storage.assertUser("setProfileColor");
    const background_emoji_id = params?.customEmojiId ? BigInt(params.customEmojiId) : undefined;
    await this.#c.invoke({ _: "account.updateColor", for_profile: true, color: { _: "peerColor", color, background_emoji_id } });
  }

  async setLocation(params?: SetLocationParams) {
    this.#c.storage.assertUser("setLocation");
    let address = params?.address;
    if (typeof address === "string") {
      address = address.trim();
      if (!address.length) {
        throw new InputError("Address cannot be empty.");
      }
      if (address.length > 96) {
        throw new InputError("Address is too long.");
      }
    }
    let geo_point: Api.inputGeoPoint | undefined;
    if (params?.latitude && params.longitude) {
      geo_point = { _: "inputGeoPoint", lat: params.latitude, long: params.longitude };
    }
    await this.#c.invoke({ _: "account.updateBusinessLocation", address, geo_point });
  }

  #phoneNumber?: string;
  #sentCode?: Api.auth_sentCode;
  async sendCode(phoneNumber: string, apiId: number, apiHash: string) {
    this.#phoneNumber = phoneNumber;
    this.#sentCode = await this.#c.invoke({
      _: "auth.sendCode",
      phone_number: phoneNumber,
      api_id: apiId,
      api_hash: apiHash,
      settings: { _: "codeSettings" },
    }).then((v) => Api.as("auth.sentCode", v));
  }

  async checkCode(code: string): Promise<CodeCheckResult> {
    if (!this.#phoneNumber || !this.#sentCode) {
      throw new InputError("Invalid sent code identifier.");
    }

    try {
      const auth = await this.#c.invoke({
        _: "auth.signIn",
        phone_number: this.#phoneNumber,
        phone_code: code,
        phone_code_hash: this.#sentCode.phone_code_hash,
      });

      return {
        type: "signed_in",
        userId: Number(Api.as("auth.authorization", auth).user.id),
      };
    } catch (err) {
      if (err instanceof PhoneCodeInvalid) {
        return {
          type: "invalid_code",
        };
      } else if (err instanceof SessionPasswordNeeded) {
        return { type: "password_required" };
      } else {
        throw err;
      }
    }
  }

  async #getAccountPassword() {
    return await this.#c.invoke({ _: "account.getPassword" });
  }

  #ap?: Api.account_password;
  async getPasswordHint(): Promise<string | null> {
    if (!this.#ap) {
      this.#ap = await this.#getAccountPassword();
    }

    return this.#ap.hint ?? "";
  }

  async checkPassword(password: string): Promise<PasswordCheckResult> {
    const ap = this.#ap = await this.#getAccountPassword();

    try {
      const input = await checkPassword(password, ap);
      const auth = await this.#c.invoke({ _: "auth.checkPassword", password: input });

      return {
        type: "signed_in",
        userId: Number(Api.as("auth.authorization", auth).user.id),
      };
    } catch (err) {
      if (err instanceof PasswordHashInvalid) {
        return {
          type: "invalid_password",
        };
      } else {
        throw err;
      }
    }
  }

  async checkBotToken(botToken: string, apiId: number, apiHash: string): Promise<BotTokenCheckResult> {
    const auth = await this.#c.invoke({ _: "auth.importBotAuthorization", api_id: apiId, api_hash: apiHash, bot_auth_token: botToken, flags: 0 });
    return {
      type: "signed_in",
      userId: Number(Api.as("auth.authorization", auth).user.id),
    };
  }
}
