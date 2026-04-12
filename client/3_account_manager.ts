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
import { type Birthday, birthdayToTlObject, type BotTokenCheckResult, type CodeCheckResult, constructAppSupport, constructCountry, constructEmojiStatus, constructInactiveChat, constructProfilePhotoList, constructTimezone, constructUser, constructUser2, type FileSource, type ID, type InputEmojiStatus, type PasswordCheckResult, type Update, workingHoursToTlObject } from "../3_types.ts";
import type { AddBotToAttachmentsMenuParams, CheckUsernameParams, GetProfilePhotosParams, ResolveUsernameParams, SetBirthdayParams, SetEmojiStatusParams, SetLocationParams, SetNameColorParams, SetPersonalChannelParams, SetProfileColorParams, SetWorkingHoursParams, UpdateProfileParams, UpdateProfilePhotoParams, UpdateProfileVideoParams } from "./0_params.ts";
import { checkPassword } from "./0_password.ts";
import type { UpdateProcessor } from "./0_update_processor.ts";
import { canBeInputChannel, canBeInputUser, checkPhotoName, getLimit, toInputChannel, toInputUser } from "./0_utilities.ts";
import type { C as C_ } from "./1_types.ts";
import type { FileManager } from "./2_file_manager.ts";

type C = C_ & { fileManager: FileManager };

const accountManagerUpdates = [
  "updateUserEmojiStatus",
] as const;

type AccountManagerUpdate = Api.Types[(typeof accountManagerUpdates)[number]];

export class AccountManager implements UpdateProcessor<AccountManagerUpdate, false> {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  canHandleUpdate(update: Api.Update): update is Api.updateUserEmojiStatus {
    return Api.isOneOf(accountManagerUpdates, update);
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
    const channel = params?.chatId ? await this.#c.getInputChannel(params.chatId) : undefined;
    if (channel) {
      return await this.#c.invoke({ _: "channels.checkUsername", channel, username });
    } else {
      return await this.#c.invoke({ _: "account.checkUsername", username });
    }
  }

  async setUsername(username: string) {
    this.#c.storage.assertUser("setUsername");
    await this.#c.invoke({ _: "account.updateUsername", username });
  }

  async removeUsername() {
    this.#c.storage.assertUser("removeUsername");
    await this.#c.invoke({ _: "account.updateUsername", username: "" });
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

  async setIsOnline(isOnline: boolean) {
    this.#c.storage.assertUser("setOnline");
    await this.#c.invoke({ _: "account.updateStatus", offline: !isOnline });
  }

  async setEmojiStatus(emojiStatus: InputEmojiStatus, params?: SetEmojiStatusParams) {
    this.#c.storage.assertUser("setEmojiStatus");
    let emoji_status: Api.EmojiStatus;
    const until = params?.until;
    if (emojiStatus.type === "customEmoji") {
      const document_id = BigInt(emojiStatus.customEmojiId);
      emoji_status = { _: "emojiStatus", document_id, until };
    } else {
      emoji_status = { _: "inputEmojiStatusCollectible", collectible_id: BigInt(emojiStatus.giftId), until };
    }
    await this.#c.invoke({ _: "account.updateEmojiStatus", emoji_status });
  }

  async removeEmojiStatus() {
    this.#c.storage.assertUser("removeEmojiStatus");
    await this.#c.invoke({ _: "account.updateEmojiStatus", emoji_status: { _: "emojiStatusEmpty" } });
  }

  async setChannelEmojiStatus(chatId: ID, emojiStatus: InputEmojiStatus, params?: SetEmojiStatusParams) {
    this.#c.storage.assertUser("setChannelEmojiStatus");
    const channel = await this.#c.getInputChannel(chatId);
    const until = params?.until;
    let emoji_status: Api.EmojiStatus;
    if (emojiStatus.type === "customEmoji") {
      const document_id = BigInt(emojiStatus.customEmojiId);
      emoji_status = { _: "emojiStatus", document_id, until };
    } else {
      emoji_status = { _: "inputEmojiStatusCollectible", collectible_id: BigInt(emojiStatus.giftId), until };
    }
    await this.#c.invoke({ _: "channels.updateEmojiStatus", channel, emoji_status });
  }

  async removeChannelEmojiStatus(chatId: ID) {
    this.#c.storage.assertUser("removeChannelEmojiStatus");
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.updateEmojiStatus", channel, emoji_status: { _: "emojiStatusEmpty" } });
  }

  async setUserEmojiStatus(userId: ID, emojiStatus: InputEmojiStatus, params?: SetEmojiStatusParams) {
    this.#c.storage.assertBot("setUserEmojiStatus");
    const user_id = await this.#c.getInputUser(userId);
    const until = params?.until;
    let emoji_status: Api.EmojiStatus;
    if (emojiStatus.type === "customEmoji") {
      const document_id = BigInt(emojiStatus.customEmojiId);
      emoji_status = { _: "emojiStatus", document_id, until };
    } else {
      emoji_status = { _: "inputEmojiStatusCollectible", collectible_id: BigInt(emojiStatus.giftId), until };
    }
    await this.#c.invoke({ _: "bots.updateUserEmojiStatus", user_id, emoji_status });
  }

  async removeUserEmojiStatus(userId: ID) {
    this.#c.storage.assertBot("removeUserEmojiStatus");
    const user_id = await this.#c.getInputUser(userId);
    await this.#c.invoke({ _: "bots.updateUserEmojiStatus", user_id, emoji_status: { _: "emojiStatusEmpty" } });
  }

  async setBotCanSetEmojiStatus(botId: ID, canSetEmojiStatus: boolean) {
    this.#c.storage.assertUser("setBotCanSetEmojiStatus");
    const bot = await this.#c.getInputUser(botId);
    const enabled = canSetEmojiStatus;
    await this.#c.invoke({ _: "bots.toggleUserEmojiStatusPermission", bot, enabled });
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

  async setWorkingHours(params?: SetWorkingHoursParams) {
    this.#c.storage.assertUser("setWorkingHours");
    let business_work_hours: Api.businessWorkHours | undefined;
    if (params?.workingHours) {
      business_work_hours = workingHoursToTlObject(params.workingHours);
    }
    await this.#c.invoke({ _: "account.updateBusinessWorkHours", business_work_hours });
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
        type: "signedIn",
        userId: Number(Api.as("auth.authorization", auth).user.id),
      };
    } catch (err) {
      if (err instanceof PhoneCodeInvalid) {
        return {
          type: "invalidCode",
        };
      } else if (err instanceof SessionPasswordNeeded) {
        return { type: "passwordRequired" };
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
        type: "signedIn",
        userId: Number(Api.as("auth.authorization", auth).user.id),
      };
    } catch (err) {
      if (err instanceof PasswordHashInvalid) {
        return {
          type: "invalidPassword",
        };
      } else {
        throw err;
      }
    }
  }

  async checkBotToken(botToken: string, apiId: number, apiHash: string): Promise<BotTokenCheckResult> {
    const auth = await this.#c.invoke({ _: "auth.importBotAuthorization", api_id: apiId, api_hash: apiHash, bot_auth_token: botToken, flags: 0 });
    return {
      type: "signedIn",
      userId: Number(Api.as("auth.authorization", auth).user.id),
    };
  }

  async #setIsSponsoredMessagesEnabled(isEnabled: boolean) {
    await this.#c.invoke({ _: "account.toggleSponsoredMessages", enabled: isEnabled });
  }

  async enableSponsoredMessages() {
    this.#c.storage.assertUser("enableSponsoredMessages");
    await this.#setIsSponsoredMessagesEnabled(true);
  }

  async disableSponsoredMessages() {
    this.#c.storage.assertUser("disableSponsoredMessages");
    await this.#setIsSponsoredMessagesEnabled(false);
  }

  async #setIsBusinessBotConnectionPaused(chatId: ID, isPaused: boolean) {
    const peer = await this.#c.getInputPeer(chatId);
    await this.#c.invoke({ _: "account.toggleConnectedBotPaused", peer, paused: isPaused });
  }

  async pauseBusinessBotConnection(chatId: ID) {
    this.#c.storage.assertUser("pauseBusinessBotConnection");
    await this.#setIsBusinessBotConnectionPaused(chatId, true);
  }

  async resumeBusinessBotConnection(chatId: ID) {
    this.#c.storage.assertUser("resumeBusinessBotConnection");
    await this.#setIsBusinessBotConnectionPaused(chatId, false);
  }

  handleUpdate(update: Api.updateUserEmojiStatus): Update {
    const userId = Number(update.user_id);
    if (Api.is("emojiStatusEmpty", update.emoji_status)) {
      return { type: "emojiStatusRemoved", userId };
    } else {
      const emojiStatus = constructEmojiStatus(update.emoji_status);
      return { type: "emojiStatus", emojiStatus, userId };
    }
  }

  async resolveUsername(username: string, params?: ResolveUsernameParams) {
    const result = await this.#c.invoke({ _: "contacts.resolveUsername", username, referer: params?.referrer });
    const chatP = this.#c.getPeer(result.peer)?.[0];
    if (!chatP) {
      unreachable();
    }

    return chatP;
  }

  async resolvePhoneNumber(phoneNumber: string) {
    this.#c.storage.assertUser("resolvePhoneNumber");
    const result = await this.#c.invoke({ _: "contacts.resolvePhone", phone: phoneNumber });
    const chatP = this.#c.getPeer(result.peer)?.[0];
    if (!chatP || chatP.type !== "private") {
      unreachable();
    }

    return constructUser2(chatP);
  }

  async setCloseFriends(userIds: ID[]) {
    this.#c.storage.assertUser("setCloseFriends");
    const inputUsers = await Promise.all(userIds.map((v) => this.#c.getInputUser(v)));
    const id = inputUsers.map((v) => Api.as("inputUser", v).user_id);
    await this.#c.invoke({ _: "contacts.editCloseFriends", id });
  }

  async suggestBirthday(userId: ID, birthday_: Birthday) {
    this.#c.storage.assertUser("suggestBirthday");
    const id = await this.#c.getInputUser(userId);
    const birthday = birthdayToTlObject(birthday_);
    await this.#c.invoke({ _: "users.suggestBirthday", id, birthday });
  }

  async #toggleBotAddedtoAttachmentsMenu(botId: ID, isWriteAllowed: boolean, enabled: boolean) {
    const bot = await this.#c.getInputUser(botId);
    await this.#c.invoke({ _: "messages.toggleBotInAttachMenu", bot, write_allowed: isWriteAllowed ? true : undefined, enabled });
  }

  async addBotToAttachmentsMenu(botId: ID, params?: AddBotToAttachmentsMenuParams) {
    this.#c.storage.assertUser("addBotToAttachmentsMenu");
    await this.#toggleBotAddedtoAttachmentsMenu(botId, params?.isWriteAllowed ?? false, true);
  }

  async removeBotFromAttachmentsMenu(botId: ID) {
    this.#c.storage.assertUser("addBotToAttachmentsMenu");
    await this.#toggleBotAddedtoAttachmentsMenu(botId, false, false);
  }

  async getAppSupport() {
    this.#c.storage.assertUser("getAppSupport");
    const result = await this.#c.invoke({ _: "help.getSupport" });
    return constructAppSupport(result);
  }

  async getAppSupportName() {
    this.#c.storage.assertUser("getAppSupportName");
    const result = await this.#c.invoke({ _: "help.getSupportName" });
    return result.name;
  }

  async getOwnedBots() {
    this.#c.storage.assertUser("getOwnedBots");
    const result = await this.#c.invoke({ _: "bots.getAdminedBots" });
    return result.map((v) => Api.as("user", v)).map(constructUser);
  }

  async getTimezones() {
    this.#c.storage.assertUser("getTimezones");
    const result = Api.as("help.timezonesList", await this.#c.invoke({ _: "help.getTimezonesList", hash: 0 }));
    return result.timezones.map(constructTimezone);
  }

  async getCountries(languageCode: string) {
    this.#c.storage.assertUser("getCountries");
    const result = Api.as("help.countriesList", await this.#c.invoke({ _: "help.getCountriesList", hash: 0, lang_code: languageCode }));
    return result.countries.map(constructCountry);
  }

  async updateProfilePhoto(photo: FileSource, params?: UpdateProfilePhotoParams) {
    const file = await this.#c.fileManager.upload(photo, params, checkPhotoName(params));
    await this.#c.invoke({ _: "photos.uploadProfilePhoto", fallback: params?.isPublic ? true : undefined, file });
  }

  async updateProfileVideo(photo: FileSource, params?: UpdateProfileVideoParams) {
    const video = await this.#c.fileManager.upload(photo, params, () => "video.mp4");
    await this.#c.invoke({ _: "photos.uploadProfilePhoto", fallback: params?.isPublic ? true : undefined, video, video_start_ts: params?.thumbnailTimestamp });
  }

  async getProfilePhotos(userId: ID, params?: GetProfilePhotosParams) {
    const user_id = await this.#c.getInputUser(userId);
    const offset = params?.offset ?? 0;
    const limit = getLimit(params?.limit);
    const result = await this.#c.invoke({ _: "photos.getUserPhotos", user_id, offset, limit, max_id: 0n });
    return constructProfilePhotoList(result);
  }
}
