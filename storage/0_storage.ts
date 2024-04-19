/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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

import { AssertionError, unreachable } from "../0_deps.ts";
import { base64DecodeUrlSafe, base64EncodeUrlSafe, bigIntFromBuffer, MaybePromise, rleDecode, rleEncode, sha1, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { AnyEntity, enums, peerToChatId, ReadObject, serialize, TLObject, TLReader, TLWriter, types } from "../2_tl.ts";
import { DC } from "../3_transport.ts";

// key parts
export const K = {
  connection: {
    P: (string: string): string => `connection.${string}`,
    apiId: (): StorageKeyPart[] => [K.connection.P("apiId")],
  },
  session: {
    P: (string: string): string => `session.${string}`,
    serverSalt: (): StorageKeyPart[] => [K.session.P("serverSalt")],
  },
  auth: {
    P: (string: string): string => `auth.${string}`,
    dc: (): StorageKeyPart[] => [K.auth.P("dc")],
    key: (): StorageKeyPart[] => [K.auth.P("key")],
    accountId: (): StorageKeyPart[] => [K.auth.P("accountId")],
    accountType: (): StorageKeyPart[] => [K.auth.P("accountType")],
  },
  updates: {
    P: (string: string): string => `updates.${string}`,
    state: (): StorageKeyPart[] => [K.updates.P("state")],
    all: (): StorageKeyPart[] => [K.updates.P("updates")],
    updates: (boxId: bigint): StorageKeyPart[] => [...K.updates.all(), boxId],
    update: (boxId: bigint, id: bigint): StorageKeyPart[] => [...K.updates.updates(boxId), id],
    channelPts: (channelId: bigint): StorageKeyPart[] => [K.updates.P("channelPts"), channelId],
  },
  cache: {
    P: (string: string): string => `cache.${string}`,
    usernames: (): StorageKeyPart[] => [K.cache.P("username")],
    username: (v: string): StorageKeyPart[] => [...K.cache.usernames(), v],
    peers: (): StorageKeyPart[] => [K.cache.P("peer")],
    peer: (id: number): StorageKeyPart[] => [...K.cache.peers(), id],
    stickerSetNames: (): StorageKeyPart[] => [K.cache.P("stickerSetNames")],
    stickerSetName: (id: bigint, accessHash: bigint): StorageKeyPart[] => [...K.cache.stickerSetNames(), id, accessHash],
    files: (): StorageKeyPart[] => [K.cache.P("files")],
    file: (fileId: bigint): StorageKeyPart[] => [...K.cache.files(), fileId],
    fileParts: (): StorageKeyPart[] => [K.cache.P("fileParts")],
    filePart: (fileId: bigint, n: number): StorageKeyPart[] => [...K.cache.fileParts(), fileId, n],
    customEmojiDocuments: (): StorageKeyPart[] => [K.cache.P("customEmojiDocuments")],
    customEmojiDocument: (id: bigint): StorageKeyPart[] => [...K.cache.customEmojiDocuments(), id],
    businessConnections: (): StorageKeyPart[] => [K.cache.P("businessConnections")],
    businessConnection: (id: string): StorageKeyPart[] => [...K.cache.businessConnections(), id],
    inlineQueryResults: (userId: number, chatId: number, query: string, offset: string) => [K.cache.P('inlineQueryResults'), userId, chatId, query, offset]
  },
  messages: {
    P: (string: string): string => `messages.${string}`,
    messages: (chatId: number): StorageKeyPart[] => [K.messages.P("messages"), chatId],
    message: (chatId: number, messageId: number): StorageKeyPart[] => [...K.messages.messages(chatId), messageId],
    allMessageRefs: (): StorageKeyPart[] => [K.messages.P("messageRefs")],
    messageRef: (messageId: number): StorageKeyPart[] => [...K.messages.allMessageRefs(), messageId],
  },
  chatlists: {
    P: (string: string): string => `chatlists.${string}`,
    hasAllChats: (listId: number): StorageKeyPart[] => [K.chatlists.P("hasAllChats"), listId],
    chats: (listId: number): StorageKeyPart[] => [K.chatlists.P("chats"), listId],
    chat: (listId: number, chatId: number): StorageKeyPart[] => [...K.chatlists.chats(listId), chatId],
    pinnedChats: (listId: number): StorageKeyPart[] => [K.chatlists.P("pinnedChats"), listId],
  },
};

export type StorageKeyPart = string | number | bigint;

export type GetManyFilter = { prefix: readonly StorageKeyPart[] } | { start: readonly StorageKeyPart[]; end: readonly StorageKeyPart[] };

export abstract class Storage {
  #authKeyId: bigint | null = null;

  abstract initialize(): MaybePromise<void>;
  // TODO: digest keys in prod?
  abstract set(key: readonly StorageKeyPart[], value: unknown): MaybePromise<void>;
  abstract incr(key: readonly StorageKeyPart[], by: number): MaybePromise<void>;
  abstract get<T>(key: readonly StorageKeyPart[]): MaybePromise<T | null>;
  abstract getMany<T>(prefix: GetManyFilter, params?: { limit?: number; reverse?: boolean }): MaybePromise<Generator<[readonly StorageKeyPart[], T]> | AsyncGenerator<[readonly StorageKeyPart[], T]>>;
  abstract get supportsFiles(): boolean;
  abstract branch(id: string): Storage;

  get isMemoryStorage(): boolean {
    return false;
  }

  async setDc(dc: DC | null) {
    await this.set(K.auth.dc(), dc);
  }

  getDc(): MaybePromise<DC | null> {
    return this.get<DC>(K.auth.dc());
  }

  async #resetAuthKeyId(authKey: Uint8Array | null) {
    if (authKey != null) {
      this.#authKeyId = await sha1(authKey).then((hash) => bigIntFromBuffer(hash.subarray(-8), true, false));
    } else {
      this.#authKeyId = null;
    }
  }

  async getAuthKey(): Promise<Uint8Array | null> {
    const authKey = await this.get<Uint8Array>(K.auth.key());
    await this.#resetAuthKeyId(authKey);
    return authKey;
  }

  async setAuthKey(authKey: Uint8Array | null) {
    await this.set(K.auth.key(), authKey);
    await this.#resetAuthKeyId(authKey);
  }

  get authKeyId(): bigint | null {
    return this.#authKeyId;
  }

  async exportAuthString(apiId_?: number | null): Promise<string> {
    if (typeof apiId_ === "number") {
      await this.setApiId(apiId_);
    }
    const [dc, authKey, apiId, accountId, accountType] = await Promise.all([this.getDc(), this.getAuthKey(), this.getApiId(), this.getAccountId(), this.getAccountType()]);
    if (dc == null || authKey == null || apiId == null || accountId == null || accountType == null) {
      throw new Error("Not authorized");
    }
    const writer = new TLWriter();
    writer.writeString(dc);
    writer.writeBytes(authKey);
    writer.writeInt32(apiId);
    writer.write(new Uint8Array([accountType == "bot" ? 1 : 0]));
    writer.writeInt64(BigInt(accountId));
    const data = rleEncode(writer.buffer);
    return base64EncodeUrlSafe(data);
  }

  async importAuthString(string: string) {
    const data = rleDecode(base64DecodeUrlSafe(string));
    const reader = new TLReader(data);
    const dc = reader.readString();
    const authKey = reader.readBytes();
    const apiId = reader.readInt32();
    const isBot = reader.read(1)[0];
    const accountId = Number(reader.readInt64());
    await this.setAccountId(accountId);
    await this.setAccountType(isBot ? "bot" : "user");
    await this.setApiId(apiId);
    await this.setDc(dc as DC);
    await this.setAuthKey(authKey);
  }

  async getChannelAccessHash(id: number): Promise<bigint | null> {
    const channel = await this.getEntity(id);
    if (channel) {
      if (!(channel instanceof types.Channel) && !(channel instanceof types.ChannelForbidden)) {
        unreachable();
      }
      return typeof channel.access_hash === "bigint" ? channel.access_hash : null;
    } else {
      return null;
    }
  }

  async getUserAccessHash(id: number): Promise<bigint | null> {
    const user = await this.getEntity(id);
    if (user) {
      if (!(user instanceof types.User)) {
        unreachable();
      }
      return typeof user.access_hash === "bigint" ? user.access_hash : null;
    } else {
      return null;
    }
  }

  async updateUsernames(id: number, usernames: string[]) {
    for (let username of usernames) {
      username = username.toLowerCase();
      await this.set(K.cache.username(username), [id, new Date()]);
    }
  }

  async getUsername(username: string): Promise<[number, Date] | null> {
    username = username.toLowerCase();
    return await this.get<[number, Date]>(K.cache.username(username));
  }

  async setTlObject(key: readonly StorageKeyPart[], value: TLObject | null) {
    if (value == null) {
      await this.set(key, null);
    } else {
      await this.set(key, this.isMemoryStorage ? value : rleEncode(value[serialize]()));
    }
  }

  async getTlObject(keyOrBuffer: TLObject | Uint8Array | readonly StorageKeyPart[]): Promise<ReadObject | null> {
    const buffer = (keyOrBuffer instanceof Uint8Array || keyOrBuffer instanceof TLObject) ? keyOrBuffer : await this.get<Uint8Array>(keyOrBuffer);
    if (buffer != null) {
      if (buffer instanceof Uint8Array) {
        return new TLReader(rleDecode(buffer)).readObject();
      } else {
        return buffer;
      }
    } else {
      return null;
    }
  }

  async setState(state: enums.updates.State) {
    await this.setTlObject(K.updates.state(), state);
  }

  async getState(): Promise<enums.updates.State | null> {
    return await this.getTlObject(K.updates.state()) as enums.updates.State | null;
  }

  async setMessage(chatId: number, messageId: number, message: enums.Message | null) {
    if (chatId > ZERO_CHANNEL_ID) {
      await this.set(K.messages.messageRef(messageId), message == null ? null : chatId);
    }
    await this.setTlObject(K.messages.message(chatId, messageId), message);
  }

  async deleteMessages() {
    const maybePromises = new Array<MaybePromise<void>>();
    for await (const [k, o] of await this.getMany({ prefix: K.messages.allMessageRefs() })) {
      maybePromises.push(Promise.all<void>([this.set(k, null), o == null ? Promise.resolve() : this.set(K.messages.message(o as number, k[1] as number), null)]).then(() => {}));
    }
    await Promise.all(maybePromises.filter((v) => v instanceof Promise));
  }

  getMessageChat(messageId: number): MaybePromise<number | null> {
    return this.get<number>(K.messages.messageRef(messageId));
  }

  async getMessage(chatId: number, messageId: number): Promise<enums.Message | null> {
    return await this.getTlObject(K.messages.message(chatId, messageId)) as enums.Message | null;
  }

  async getLastMessage(chatId: number): Promise<enums.Message | null> {
    for await (const [_, buffer] of await this.getMany<Uint8Array>({ prefix: K.messages.messages(chatId) }, { limit: 1, reverse: true })) {
      return await this.getTlObject(buffer) as enums.Message;
    }
    return null;
  }

  async setChannelPts(channelId: bigint, pts: number) {
    await this.set(K.updates.channelPts(channelId), pts);
  }

  getChannelPts(channelId: bigint): MaybePromise<number | null> {
    return this.get<number>(K.updates.channelPts(channelId));
  }

  async setEntity(entity: AnyEntity) {
    await this.set(K.cache.peer(peerToChatId(entity)), [this.isMemoryStorage ? entity : rleEncode(entity[serialize]()), new Date()]);
  }

  async getEntity(key: number): Promise<ReadObject | null> {
    const peer_ = await this.get<[Uint8Array, Date]>(K.cache.peer(key));
    if (peer_ != null) {
      const [obj_] = peer_;
      return await this.getTlObject(obj_);
    } else {
      return null;
    }
  }

  async setAccountId(accountId: number) {
    await this.set(K.auth.accountId(), accountId);
  }

  #accountId: number | null = null;
  async getAccountId(): Promise<number | null> {
    if (this.#accountId != null) {
      return this.#accountId;
    } else {
      return (this.#accountId = await this.get<number>(K.auth.accountId()));
    }
  }

  async setAccountType(type: "user" | "bot") {
    try {
      await this.getAccountType();
      unreachable();
    } catch (err) {
      if (!(err instanceof AssertionError)) {
        throw err;
      } else {
        await this.set(K.auth.accountType(), type);
      }
    }
  }

  #accountType: "user" | "bot" | null = null;
  async getAccountType(): Promise<"user" | "bot" | null> {
    if (this.#accountType != null) {
      return this.#accountType;
    } else {
      return this.#accountType = await this.get<"user" | "bot">(K.auth.accountType());
    }
  }

  async updateStickerSetName(id: bigint, accessHash: bigint, name: string) {
    await this.set(K.cache.stickerSetName(id, accessHash), [name, new Date()]);
  }

  getStickerSetName(id: bigint, accessHash: bigint): MaybePromise<[string, Date] | null> {
    return this.get<[string, Date]>(K.cache.stickerSetName(id, accessHash));
  }

  async setServerSalt(serverSalt: bigint) {
    await this.set(K.session.serverSalt(), serverSalt);
  }

  getServerSalt(): MaybePromise<bigint | null> {
    return this.get<bigint>(K.session.serverSalt());
  }

  async setChat(listId: number, chatId: number, pinned: number, topMessageId: number, topMessageDate: Date) {
    await this.set(K.chatlists.chat(listId, chatId), [pinned, topMessageId, topMessageDate]);
  }

  async getChats(listId: number): Promise<{ chatId: number; pinned: number; topMessageId: number; topMessageDate: Date }[]> {
    const chats = new Array<{ chatId: number; pinned: number; topMessageId: number; topMessageDate: Date }>();
    for await (const [key, value] of await this.getMany<[number, number, Date]>({ prefix: K.chatlists.chats(listId) })) {
      if (key.length != 3 || typeof key[2] !== "number") {
        continue;
      }
      chats.push({ chatId: key[2], pinned: value[0], topMessageId: value[1], topMessageDate: value[2] });
    }
    return chats;
  }

  async removeChats(listId: number) {
    for await (const [key] of await this.getMany({ prefix: K.chatlists.chats(listId) })) {
      await this.set(key, null);
    }
    await this.setHasAllChats(listId, false);
    await this.setPinnedChats(listId, null);
  }

  async setHasAllChats(listId: number, hasAllChats: boolean) {
    await this.set(K.chatlists.hasAllChats(listId), hasAllChats);
  }

  async hasAllChats(listId: number): Promise<boolean> {
    const v = await this.get<boolean>(K.chatlists.hasAllChats(listId));
    return v == true;
  }

  async setPinnedChats(listId: number, chatIds: number[] | null) {
    await this.set(K.chatlists.pinnedChats(listId), chatIds);
  }

  async getPinnedChats(listId: number): Promise<number[] | null> {
    return await this.get<number[]>(K.chatlists.pinnedChats(listId));
  }

  async getHistory(chatId: number, offsetId: number, limit: number): Promise<enums.Message[]> {
    if (offsetId == 0) {
      offsetId = Infinity;
    }
    ++limit;
    const messages = new Array<enums.Message>();
    for await (const [_, buffer] of await this.getMany<Uint8Array>({ start: K.messages.message(chatId, 0), end: K.messages.message(chatId, offsetId) }, { limit, reverse: true })) {
      const message = await this.getTlObject(buffer) as enums.Message;
      if ("id" in message && message.id == offsetId) {
        continue;
      }
      messages.push(message);
    }
    return messages;
  }

  async getFile(id: bigint): Promise<[number, number] | null> {
    if (!this.supportsFiles) {
      return null;
    }
    return await this.get<[number, number]>(K.cache.file(id));
  }

  async *iterFileParts(id: bigint, partCount: number, offset: number): AsyncGenerator<Uint8Array> {
    if (!this.supportsFiles) {
      return;
    }
    for (let i = offset; i < partCount; i++) {
      const part = await this.get<Uint8Array>(K.cache.filePart(id, i));
      if (part == null) {
        continue;
      }
      yield part;
    }
  }

  async saveFilePart(id: bigint, index: number, bytes: Uint8Array) {
    if (!this.supportsFiles) {
      return;
    }
    await this.set(K.cache.filePart(id, index), bytes);
  }

  async setFilePartCount(id: bigint, partCount: number, chunkSize: number) {
    if (!this.supportsFiles) {
      return;
    }
    await this.set(K.cache.file(id), [partCount, chunkSize]);
  }

  async setCustomEmojiDocument(id: bigint, document: types.Document) {
    await this.set(K.cache.customEmojiDocument(id), [this.isMemoryStorage ? document : rleEncode(document[serialize]()), new Date()]);
  }

  async getCustomEmojiDocument(id: bigint): Promise<[types.Document, Date] | null> {
    const v = await this.get<[Uint8Array, Date]>(K.cache.customEmojiDocument(id));
    if (v != null) {
      return [await this.getTlObject(v[0]), v[1]] as [types.Document, Date];
    } else {
      return null;
    }
  }

  async setBusinessConnection(id: string, connection: types.BotBusinessConnection | null) {
    await this.set(K.cache.businessConnection(id), connection == null ? null : this.isMemoryStorage ? connection : rleEncode(connection[serialize]()));
  }

  async getBusinessConnection(id: string): Promise<types.BotBusinessConnection | null> {
    const v = await this.get<Uint8Array>(K.cache.businessConnection(id));
    if (v != null) {
      return await this.getTlObject(v) as types.BotBusinessConnection;
    } else {
      return null;
    }
  }

  async setInlineQueryResults(userId: number, chatId: number, query: string, offset:string, results:types.messages.BotResults){
    const peer_ = await this.get<[Uint8Array, Date]>(K.cache.inlineQueryResults(userId, chatId, query, offset));
    if (peer_ != null) {
      const [obj_,date] = peer_;
      return [await this.getTlObject(obj_) as types.messages.BotResults, date];
    } else {
      return null;
    }
  }
  async getInlineQueryResults(userId: number, chatId: number, query: string, offset:string): Promise<[types.messages.BotResults, Date] | null> {
    const peer_ = await this.get<[Uint8Array, Date]>(K.cache.inlineQueryResults(userId, chatId, query, offset));
    if (peer_ != null) {
      const [obj_,date] = peer_;
      return [await this.getTlObject(obj_) as types.messages.BotResults, date];
    } else {
      return null;
    }
  }


  #getUpdateId(update: enums.Update) {
    let id = BigInt(Date.now()) << 32n;
    if ("pts" in update && update.pts) {
      id |= BigInt(update.pts);
    } else {
      id |= BigInt(0xFFFFFFFFn);
    }
    return id;
  }
  async setUpdate(boxId: bigint, update: enums.Update) {
    await this.setTlObject(K.updates.update(boxId, this.#getUpdateId(update)), update);
  }

  async deleteUpdates() {
    const maybePromises = new Array<MaybePromise<void>>();
    for await (const [k] of await this.getMany({ prefix: K.updates.all() })) {
      maybePromises.push(this.set(k, null));
    }
    await Promise.all(maybePromises.filter((v) => v instanceof Promise));
  }

  async getFirstUpdate(boxId: bigint): Promise<[readonly StorageKeyPart[], enums.Update] | null> {
    for await (const [key, update] of await this.getMany<Uint8Array>({ prefix: K.updates.updates(boxId) }, { limit: 1 })) {
      return [key, await this.getTlObject(update).then((v) => v as enums.Update)];
    }
    return null;
  }

  async assertUser(source: string) {
    if (await this.getAccountType() != "user") {
      throw new Error(`${source}: not user a client`);
    }
  }

  async assertBot(source: string) {
    if (await this.getAccountType() != "bot") {
      throw new Error(`${source}: not a bot client`);
    }
  }

  async deleteFiles() {
    if (!this.supportsFiles) {
      return;
    }

    for await (const [key] of await this.getMany({ prefix: K.cache.fileParts() })) {
      await this.set(key, null);
    }

    for await (const [key] of await this.getMany({ prefix: K.cache.files() })) {
      await this.set(key, null);
    }
  }

  async deleteCustomEmojiDocuments() {
    for await (const [key] of await this.getMany({ prefix: K.cache.customEmojiDocuments() })) {
      await this.set(key, null);
    }
  }

  async deleteBusinessConnections() {
    for await (const [key] of await this.getMany({ prefix: K.cache.businessConnections() })) {
      await this.set(key, null);
    }
  }

  async deleteStickerSetNames() {
    for await (const [key] of await this.getMany({ prefix: K.cache.stickerSetNames() })) {
      await this.set(key, null);
    }
  }

  async deletePeers() {
    for await (const [key] of await this.getMany({ prefix: K.cache.peers() })) {
      await this.set(key, null);
    }
  }

  async deleteUsernames() {
    for await (const [key] of await this.getMany({ prefix: K.cache.usernames() })) {
      await this.set(key, null);
    }
  }

  async clear() {
    await Promise.all([
      this.deleteMessages(),
      this.removeChats(0),
      this.removeChats(1),
      this.deleteUpdates(),
      this.deleteFiles(),
      this.deleteCustomEmojiDocuments(),
      this.deleteBusinessConnections(),
      this.deleteStickerSetNames(),
      this.deletePeers(),
      this.deleteUsernames(),
    ]);
  }

  async setApiId(apiId: number) {
    await this.set(K.connection.apiId(), apiId);
  }

  async getApiId(): Promise<number | null> {
    return await this.get<number>(K.connection.apiId());
  }
}
