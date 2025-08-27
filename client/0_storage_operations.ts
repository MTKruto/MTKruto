/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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

import { LruCache, MINUTE, unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { awaitablePooledMap, base64DecodeUrlSafe, base64EncodeUrlSafe, bigIntFromBuffer, getLogger, type Logger, type MaybePromise, rleDecode, rleEncode, sha1, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import type { Storage, StorageKeyPart } from "../2_storage.ts";
import { Api, TLReader, TLWriter, X } from "../2_tl.ts";
import type { DC } from "../3_transport.ts";
import { type ChatP, constructChatP, type Translation, type VoiceTranscription } from "../3_types.ts";

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
    isPremium: (): StorageKeyPart[] => [K.auth.P("isPremium")],
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
    peers: (): StorageKeyPart[] => [K.cache.P("peers")],
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
    inlineQueryAnswers: (): StorageKeyPart[] => [K.cache.P("inlineQueryResults")],
    inlineQueryAnswer: (userId: number, chatId: number, query: string, offset: string): StorageKeyPart[] => [...K.cache.inlineQueryAnswers(), userId, chatId, query, offset],
    callbackQueryAnswers: (): StorageKeyPart[] => [K.cache.P("callbackQueryAnswers")],
    callbackQueryAnswer: (chatId: number, messageId: number, question: string): StorageKeyPart[] => [...K.cache.callbackQueryAnswers(), chatId, messageId, question],
    fullChats: (): StorageKeyPart[] => [K.cache.P("fullChats")],
    fullChat: (chatId: number): StorageKeyPart[] => [...K.cache.fullChats(), chatId],
    groupCalls: (): StorageKeyPart[] => [K.cache.P("groupCalls")],
    groupCall: (id: bigint): StorageKeyPart[] => [...K.cache.groupCalls(), id],
    groupCallAccessHashes: (): StorageKeyPart[] => [K.cache.P("groupCallAccessHashes")],
    groupCallAccessHash: (id: bigint): StorageKeyPart[] => [...K.cache.groupCallAccessHashes(), id],
    minPeerReferences: (): StorageKeyPart[] => [K.cache.P("minPeerReferences")],
    minPeerReference: (senderId: number, chatId: number) => [...K.cache.minPeerReferences(), senderId, chatId],
    minPeerReferenceSender: (senderId: number) => [...K.cache.minPeerReferences(), senderId],
    allTranslations: () => [K.cache.P("translations")],
    platformTranslations: (platform: string) => [...K.cache.allTranslations(), platform],
    translations: (platform: string, language: string) => [...K.cache.platformTranslations(platform), language],
    pollResults: () => [K.cache.P("pollResults")],
    pollResult: (pollId: bigint) => [...K.cache.pollResults(), pollId],
    polls: () => [K.cache.P("polls")],
    poll: (pollId: bigint) => [...K.cache.polls(), pollId],
    voiceTranscriptions: () => [K.cache.P("voiceTranscriptions")],
    voiceTranscription: (transcriptionId: bigint) => [...K.cache.voiceTranscriptions(), transcriptionId],
    voiceTranscriptionReferences: () => [K.cache.P("voiceTranscriptions")],
    voiceTranscriptionReference: (chatId: number, messageId: number, messageEditDate: number) => [...K.cache.voiceTranscriptionReferences(), chatId, messageId, messageEditDate],
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

export class StorageOperations {
  #storage: Storage;
  #supportsFiles: boolean;
  #mustSerialize: boolean;
  #authKeyId: bigint | null = null;
  #L: Logger;

  constructor(storage: Storage) {
    this.#storage = storage;
    this.#supportsFiles = storage.supportsFiles;
    this.#mustSerialize = storage.mustSerialize;
    this.#L = getLogger("StorageOperations");
  }

  get provider(): Storage {
    return this.#storage;
  }

  get supportsFiles(): boolean {
    return this.#storage.supportsFiles;
  }

  async initialize() {
    await this.#storage.initialize();
    await this.getAccountType();
  }

  set(...args: Parameters<Storage["set"]>): ReturnType<Storage["set"]> {
    return this.#storage.set(...args);
  }

  incr(...args: Parameters<Storage["incr"]>): ReturnType<Storage["incr"]> {
    return this.#storage.incr(...args);
  }

  get<T>(...args: Parameters<Storage["get"]>): ReturnType<Storage["get"]> {
    return this.#storage.get<T>(...args);
  }

  #oncePromises: Record<string, Promise<unknown>> = {};
  async #once(key: string, promise: () => Promise<unknown>) {
    await this.#oncePromises[key] ?? (this.#oncePromises[key] = promise().finally(() => {
      delete this.#oncePromises[key];
    }));
  }

  getMany<T>(...args: Parameters<Storage["getMany"]>): ReturnType<Storage["getMany"]> {
    return this.#storage.getMany<T>(...args);
  }

  async setDc(dc: DC | null) {
    await this.#storage.set(K.auth.dc(), dc);
  }

  getDc(): MaybePromise<DC | null> {
    return this.#storage.get<DC>(K.auth.dc());
  }

  async #resetAuthKeyId(authKey: Uint8Array | null) {
    if (authKey != null) {
      this.#authKeyId = bigIntFromBuffer((await sha1(authKey)).subarray(-8), true, false);
    } else {
      this.#authKeyId = null;
    }
  }

  async getAuthKey(): Promise<Uint8Array<ArrayBuffer> | null> {
    const authKey = await this.#storage.get<Uint8Array<ArrayBuffer>>(K.auth.key());
    await this.#resetAuthKeyId(authKey);
    return authKey;
  }

  async setAuthKey(authKey: Uint8Array | null) {
    await this.#storage.set(K.auth.key(), authKey);
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
    const peer = await this.getPeer(id);
    if (peer?.[0].type === "channel" || peer?.[0].type === "supergroup") {
      return peer[1];
    } else {
      // TODO: get min peer reference
      return null;
    }
  }

  async getUserAccessHash(id: number): Promise<bigint | null> {
    const peer = await this.getPeer(id);
    if (peer?.[0].type === "private") {
      return peer[1];
    } else {
      // TODO: get min peer reference
      return null;
    }
  }

  #usernamesToCommit = new Map<string, [number, Date]>();
  #usernames = new LruCache<string, [number, Date] | null>(20_000);
  updateUsernames(id: number, usernames: string[]) {
    for (let username of usernames) {
      username = username.toLowerCase();
      const value: [number, Date] = [id, new Date()];
      !this.#storage.isMemory && this.#usernamesToCommit.set(username, value);
      this.#usernames.set(username, value);
    }
  }

  async #commitUsernames() {
    if (this.#storage.isMemory) {
      return;
    }
    await this.#once("commitUsernames", async () => {
      await awaitablePooledMap(2, this.#usernamesToCommit, async ([username, value]) => await this.#storage.set(K.cache.username(username), value));
      this.#usernamesToCommit.clear();
    });
  }

  #lastCommit: Date | null = null;
  async commit(force = false) {
    if (this.#storage.isMemory) {
      return;
    }
    const pending = this.#peersToCommit.size + this.#usernamesToCommit.size;
    if (pending <= 0) {
      this.#L.debug("nothing to commit");
      return;
    }
    let commit = false;
    if (force) {
      this.#L.debug("committing because force = true");
      commit = true;
    } else {
      if (!commit && pending >= 1_000) {
        this.#L.debug("committing because pending writes >= threshold");
        commit = true;
      } else if (this.#lastCommit === null) {
        this.#L.debug("committing because there is no last commit");
        commit = true;
      } else if (Date.now() - this.#lastCommit.getTime() >= 5 * MINUTE) {
        this.#L.debug("committing because last commit is older than threshold");
        commit = true;
      } else {
        this.#L.debug("not committing");
      }
    }
    if (commit) {
      await Promise.all([this.#commitPeers(), this.#commitUsernames()]);
      this.#lastCommit = new Date();
    }
  }

  async getUsername(username: string): Promise<[number, Date] | null> {
    username = username.toLowerCase();
    return await this.#storage.get<[number, Date]>(K.cache.username(username));
  }

  async setTlObject(key: readonly StorageKeyPart[], value: Api.AnyType | null) {
    if (value == null) {
      await this.#storage.set(key, null);
    } else {
      await this.#storage.set(key, this.#mustSerialize ? [value._, rleEncode(Api.serializeObject(value))] : (value as unknown));
    }
  }

  async getTlObject(keyOrBuffer: Api.AnyType | Uint8Array | readonly StorageKeyPart[]): Promise<Api.DeserializedType | null> {
    // @ts-ignore: TBD
    const buffer = (keyOrBuffer instanceof Uint8Array || Api.isValidObject(keyOrBuffer)) ? keyOrBuffer : await this.#storage.get<[string, Uint8Array]>(keyOrBuffer);
    if (buffer != null) {
      if (buffer instanceof Uint8Array) {
        return await Api.deserializeType(X, rleDecode(buffer));
      } else if (Array.isArray(buffer)) {
        return await Api.deserializeType(buffer[0], rleDecode(buffer[1]));
      } else {
        return buffer;
      }
    } else {
      return null;
    }
  }

  async setState(state: Api.updates_State) {
    await this.setTlObject(K.updates.state(), state);
  }

  async getState(): Promise<Api.updates_State | null> {
    return await this.getTlObject(K.updates.state()) as Api.updates_State | null;
  }

  async setMessage(chatId: number, messageId: number, message: Api.Message | null) {
    if (chatId > ZERO_CHANNEL_ID) {
      await this.#storage.set(K.messages.messageRef(messageId), message == null ? null : chatId);
    }
    await this.setTlObject(K.messages.message(chatId, messageId), message);
  }

  async deleteMessages() {
    const maybePromises = new Array<MaybePromise<unknown>>();
    for await (const [k, o] of await this.#storage.getMany({ prefix: K.messages.allMessageRefs() })) {
      maybePromises.push(Promise.all([this.#storage.set(k, null), o == null ? Promise.resolve() : this.#storage.set(K.messages.message(o as number, k[1] as number), null)]));
    }
    await Promise.all(maybePromises.filter((v) => v instanceof Promise));
  }

  getMessageChat(messageId: number): MaybePromise<number | null> {
    return this.#storage.get<number>(K.messages.messageRef(messageId));
  }

  async getMessage(chatId: number, messageId: number): Promise<Api.Message | null> {
    return await this.getTlObject(K.messages.message(chatId, messageId)) as Api.Message | null;
  }

  async getLastMessage(chatId: number): Promise<Api.Message | null> {
    for await (const [_, buffer] of await this.#storage.getMany<Uint8Array>({ prefix: K.messages.messages(chatId) }, { limit: 1, reverse: true })) {
      return await this.getTlObject(buffer) as Api.Message;
    }
    return null;
  }

  async setChannelPts(channelId: bigint, pts: number) {
    await this.#storage.set(K.updates.channelPts(channelId), pts);
  }

  getChannelPts(channelId: bigint): MaybePromise<number | null> {
    return this.#storage.get<number>(K.updates.channelPts(channelId));
  }

  #peersToCommit = new Map<number, [ChatP, bigint]>();
  #peers = new LruCache<number, [ChatP, bigint] | null>(50_000);
  setPeer(peer_: Api.user | Api.chat | Api.chatForbidden | Api.channel | Api.channelForbidden) {
    const chatP = constructChatP(peer_);
    this.setPeer2(chatP, "access_hash" in peer_ ? peer_.access_hash ?? 0n : 0n);
  }

  setPeer2(chatP: ChatP, accessHash: bigint) {
    const peer: [ChatP, bigint] = [chatP, accessHash];
    !this.#storage.isMemory && this.#peersToCommit.set(chatP.id, peer);
    this.#peers.set(chatP.id, peer);
  }

  async #commitPeers() {
    if (this.#storage.isMemory) {
      return;
    }
    await this.#once("commitPeers", async () => {
      await awaitablePooledMap(2, this.#peersToCommit, async ([id, chat]) => await this.#storage.set(K.cache.peer(id), chat));
      this.#peersToCommit.clear();
    });
  }

  async getPeer(chatId: number): Promise<[ChatP, bigint] | null> {
    const maybeChat = this.#peers.get(chatId);
    if (maybeChat !== undefined) {
      return maybeChat;
    }
    await this.#once(`getPeer-${chatId}`, async () => {
      const peer = await this.#storage.get<[ChatP, bigint]>(K.cache.peer(chatId));
      this.#peers.set(chatId, peer);
    });
    return this.mustGetPeer(chatId);
  }

  mustGetPeer(chatId: number): [ChatP, bigint] | null {
    const peer = this.#peers.get(chatId);
    if (peer === undefined) {
      unreachable();
    }
    return peer;
  }

  async deletePeers() {
    for await (const [key] of await this.#storage.getMany({ prefix: K.cache.peers() })) {
      await this.#storage.set(key, null);
    }
  }

  async setAccountId(accountId: number) {
    await this.#storage.set(K.auth.accountId(), accountId);
  }

  #accountId: number | null = null;
  async getAccountId(): Promise<number | null> {
    if (this.#accountId != null) {
      return this.#accountId;
    } else {
      return (this.#accountId = await this.#storage.get<number>(K.auth.accountId()));
    }
  }

  async setAccountType(type: "user" | "bot") {
    await this.#storage.set(K.auth.accountType(), type);
    await this.getAccountType();
  }

  #accountType: "user" | "bot" | null = null;
  async getAccountType(): Promise<"user" | "bot" | null> {
    if (this.#accountType != null) {
      return this.#accountType;
    } else {
      return this.#accountType = await this.#storage.get<"user" | "bot">(K.auth.accountType());
    }
  }

  get accountType(): "user" | "bot" {
    if (this.#accountType == null) {
      unreachable();
    }
    return this.#accountType;
  }

  async setIsPremium(isPremium: boolean) {
    await this.#storage.set(K.auth.isPremium(), isPremium);
  }

  async getIsPremium(): Promise<boolean | null> {
    return await this.#storage.get<boolean>(K.auth.isPremium());
  }

  async updateStickerSetName(id: bigint, accessHash: bigint, name: string) {
    await this.#storage.set(K.cache.stickerSetName(id, accessHash), [name, new Date()]);
  }

  getStickerSetName(id: bigint, accessHash: bigint): MaybePromise<[string, Date] | null> {
    return this.#storage.get<[string, Date]>(K.cache.stickerSetName(id, accessHash));
  }

  async setServerSalt(serverSalt: bigint) {
    await this.#storage.set(K.session.serverSalt(), serverSalt);
  }

  getServerSalt(): MaybePromise<bigint | null> {
    return this.#storage.get<bigint>(K.session.serverSalt());
  }

  async setChatlistChat(listId: number, chatId: number, pinned: number, topMessageId: number, topMessageDate: Date) {
    await this.#storage.set(K.chatlists.chat(listId, chatId), [pinned, topMessageId, topMessageDate]);
  }

  async getChats(listId: number): Promise<{ chatId: number; pinned: number; topMessageId: number; topMessageDate: Date }[]> {
    const chats = new Array<{ chatId: number; pinned: number; topMessageId: number; topMessageDate: Date }>();
    for await (const [key, value] of await this.#storage.getMany<[number, number, Date]>({ prefix: K.chatlists.chats(listId) })) {
      if (key.length != 3 || typeof key[2] !== "number") {
        continue;
      }
      chats.push({ chatId: key[2], pinned: value[0], topMessageId: value[1], topMessageDate: value[2] });
    }
    return chats;
  }

  async removeChats(listId: number) {
    for await (const [key] of await this.#storage.getMany({ prefix: K.chatlists.chats(listId) })) {
      await this.#storage.set(key, null);
    }
    await this.setHasAllChats(listId, false);
    await this.setPinnedChats(listId, null);
  }

  async setHasAllChats(listId: number, hasAllChats: boolean) {
    await this.#storage.set(K.chatlists.hasAllChats(listId), hasAllChats);
  }

  async hasAllChats(listId: number): Promise<boolean> {
    const v = await this.#storage.get<boolean>(K.chatlists.hasAllChats(listId));
    return v == true;
  }

  async setPinnedChats(listId: number, chatIds: number[] | null) {
    await this.#storage.set(K.chatlists.pinnedChats(listId), chatIds);
  }

  async getPinnedChats(listId: number): Promise<number[] | null> {
    return await this.#storage.get<number[]>(K.chatlists.pinnedChats(listId));
  }

  async getHistory(chatId: number, offsetId: number, limit: number): Promise<Api.Message[]> {
    if (offsetId == 0) {
      offsetId = Infinity;
    }
    ++limit;
    const messages = new Array<Api.Message>();
    for await (const [_, buffer] of await this.#storage.getMany<Uint8Array>({ start: K.messages.message(chatId, 0), end: K.messages.message(chatId, offsetId) }, { limit, reverse: true })) {
      const message = await this.getTlObject(buffer) as Api.Message;
      if ("id" in message && message.id == offsetId) {
        continue;
      }
      messages.push(message);
    }
    return messages;
  }

  async getFile(id: bigint): Promise<[number, number] | null> {
    if (!this.#supportsFiles) {
      return null;
    }
    return await this.#storage.get<[number, number]>(K.cache.file(id));
  }

  async *iterFileParts(id: bigint, partCount: number, offset: number, signal: AbortSignal | undefined): AsyncGenerator<Uint8Array> {
    if (!this.#supportsFiles) {
      return;
    }
    for (let i = offset; i < partCount; i++) {
      signal?.throwIfAborted();
      const part = await this.#storage.get<Uint8Array>(K.cache.filePart(id, i));
      if (part == null) {
        continue;
      }
      yield part;
    }
  }

  async saveFilePart(id: bigint, index: number, bytes: Uint8Array) {
    if (!this.#supportsFiles) {
      return;
    }
    await this.#storage.set(K.cache.filePart(id, index), bytes);
  }

  async setFilePartCount(id: bigint, partCount: number, chunkSize: number) {
    if (!this.#supportsFiles) {
      return;
    }
    await this.#storage.set(K.cache.file(id), [partCount, chunkSize]);
  }

  async setCustomEmojiDocument(id: bigint, document: Api.document) {
    await this.#storage.set(K.cache.customEmojiDocument(id), [this.#mustSerialize ? rleEncode(Api.serializeObject(document)) : document, new Date()]);
  }

  async getCustomEmojiDocument(id: bigint): Promise<[Api.document, Date] | null> {
    const v = await this.#storage.get<[Uint8Array, Date]>(K.cache.customEmojiDocument(id));
    if (v != null) {
      return [await this.getTlObject(v[0]), v[1]] as [Api.document, Date];
    } else {
      return null;
    }
  }

  async setBusinessConnection(id: string, connection: Api.botBusinessConnection | null) {
    await this.#storage.set(K.cache.businessConnection(id), connection == null ? null : this.#mustSerialize ? rleEncode(Api.serializeObject(connection)) : connection);
  }

  async getBusinessConnection(id: string): Promise<Api.botBusinessConnection | null> {
    const v = await this.#storage.get<Uint8Array>(K.cache.businessConnection(id));
    if (v != null) {
      return await this.getTlObject(v) as Api.botBusinessConnection;
    } else {
      return null;
    }
  }

  async setInlineQueryAnswer(userId: number, chatId: number, query: string, offset: string, results: Api.messages_botResults, date: Date) {
    await this.#storage.set(K.cache.inlineQueryAnswer(userId, chatId, query, offset), [this.#mustSerialize ? rleEncode(Api.serializeObject(results)) : results, date]);
  }

  async getInlineQueryAnswer(userId: number, chatId: number, query: string, offset: string): Promise<[Api.messages_botResults, Date] | null> {
    const peer_ = await this.#storage.get<[Uint8Array, Date]>(K.cache.inlineQueryAnswer(userId, chatId, query, offset));
    if (peer_ != null) {
      const [obj_, date] = peer_;
      return [Api.as("messages.botResults", await this.getTlObject(obj_)), date];
    } else {
      return null;
    }
  }

  async setCallbackQueryAnswer(chatId: number, messageId: number, question: string, answer: Api.messages_botCallbackAnswer) {
    await this.#storage.set(K.cache.callbackQueryAnswer(chatId, messageId, question), [this.#mustSerialize ? rleEncode(Api.serializeObject(answer)) : answer, new Date()]);
  }

  async getCallbackQueryAnswer(chatId: number, messageId: number, question: string): Promise<[Api.messages_botCallbackAnswer, Date] | null> {
    const peer_ = await this.#storage.get<[Uint8Array, Date]>(K.cache.callbackQueryAnswer(chatId, messageId, question));
    if (peer_ != null) {
      const [obj_, date] = peer_;
      return [Api.as("messages.botCallbackAnswer", await this.getTlObject(obj_)), date];
    } else {
      return null;
    }
  }

  async setFullChat(chatId: number, fullChat: Api.userFull | Api.channelFull | Api.chatFull | null) {
    await this.setTlObject(K.cache.fullChat(chatId), fullChat);
  }

  async getFullChat(chatId: number): Promise<Api.userFull | Api.channelFull | Api.chatFull | null> {
    return await this.getTlObject(K.cache.fullChat(chatId)) as Api.userFull | Api.channelFull | Api.chatFull | null;
  }

  async setGroupCall(id: bigint, groupCall: Api.groupCall | null) {
    await this.setTlObject(K.cache.groupCall(id), groupCall);
  }

  async getGroupCall(id: bigint): Promise<Api.groupCall | null> {
    return await this.getTlObject(K.cache.groupCall(id)) as Api.groupCall | null;
  }

  async setGroupCallAccessHash(id: bigint, accessHash: bigint | null) {
    await this.#storage.set(K.cache.groupCallAccessHash(id), accessHash);
  }

  async getGroupCallAccessHash(id: bigint): Promise<bigint | null> {
    return await this.#storage.get(K.cache.groupCallAccessHash(id));
  }

  #getUpdateId(update: Api.Update) {
    let id = BigInt(Date.now()) << 32n;
    if ("pts" in update && update.pts) {
      id |= BigInt(update.pts);
    } else {
      id |= BigInt(0xFFFFFFFFn);
    }
    return id;
  }
  async setUpdate(boxId: bigint, update: Api.Update) {
    await this.setTlObject(K.updates.update(boxId, this.#getUpdateId(update)), update);
  }

  async deleteUpdates() {
    const maybePromises = new Array<MaybePromise<void>>();
    for await (const [k] of await this.#storage.getMany({ prefix: K.updates.all() })) {
      maybePromises.push(this.#storage.set(k, null));
    }
    await Promise.all(maybePromises.filter((v) => v instanceof Promise));
  }

  async getFirstUpdate(boxId: bigint): Promise<[readonly StorageKeyPart[], Api.Update] | null> {
    for await (const [key, update] of await this.#storage.getMany<Uint8Array>({ prefix: K.updates.updates(boxId) }, { limit: 1 })) {
      return [key, (await this.getTlObject(update)) as Api.Update];
    }
    return null;
  }

  assertUser(source: string) {
    if (this.accountType != "user") {
      throw new InputError(`${source}: not user a client`);
    }
  }

  assertBot(source: string) {
    if (this.accountType != "bot") {
      throw new InputError(`${source}: not a bot client`);
    }
  }

  async deleteFiles() {
    if (!this.#supportsFiles) {
      return;
    }

    for await (const [key] of await this.#storage.getMany({ prefix: K.cache.fileParts() })) {
      await this.#storage.set(key, null);
    }

    for await (const [key] of await this.#storage.getMany({ prefix: K.cache.files() })) {
      await this.#storage.set(key, null);
    }
  }

  async deleteCustomEmojiDocuments() {
    for await (const [key] of await this.#storage.getMany({ prefix: K.cache.customEmojiDocuments() })) {
      await this.#storage.set(key, null);
    }
  }

  async deleteBusinessConnections() {
    for await (const [key] of await this.#storage.getMany({ prefix: K.cache.businessConnections() })) {
      await this.#storage.set(key, null);
    }
  }

  async deleteInlineQueryAnswers() {
    for await (const [key] of await this.#storage.getMany({ prefix: K.cache.inlineQueryAnswers() })) {
      await this.#storage.set(key, null);
    }
  }

  async deleteCallbackQueryAnswers() {
    for await (const [key] of await this.#storage.getMany({ prefix: K.cache.callbackQueryAnswers() })) {
      await this.#storage.set(key, null);
    }
  }

  async deleteFullChats() {
    for await (const [key] of await this.#storage.getMany({ prefix: K.cache.fullChats() })) {
      await this.#storage.set(key, null);
    }
  }

  async deleteGroupCalls() {
    for await (const [key] of await this.#storage.getMany({ prefix: K.cache.groupCalls() })) {
      await this.#storage.set(key, null);
    }
  }

  async deleteStickerSetNames() {
    for await (const [key] of await this.#storage.getMany({ prefix: K.cache.stickerSetNames() })) {
      await this.#storage.set(key, null);
    }
  }

  async deleteUsernames() {
    for await (const [key] of await this.#storage.getMany({ prefix: K.cache.usernames() })) {
      await this.#storage.set(key, null);
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
      this.deleteInlineQueryAnswers(),
      this.deleteCallbackQueryAnswers(),
      this.deleteFullChats(),
      this.deleteGroupCalls(),
      this.deleteStickerSetNames(),
      this.deletePeers(),
      this.deleteUsernames(),
      this.deleteTranslations(),
      this.deletePollResults(),
      this.deletePolls(),
      this.deleteVoiceTranscriptions(),
      this.deleteVoiceTranscriptionReferences(),
    ]);
  }

  async setApiId(apiId: number) {
    await this.#storage.set(K.connection.apiId(), apiId);
  }

  async getApiId(): Promise<number | null> {
    return await this.#storage.get<number>(K.connection.apiId());
  }

  async reset() {
    for await (const [key] of await this.#storage.getMany({ prefix: [] })) {
      await this.#storage.set(key, null);
    }
  }

  async setMinPeerReference(chatId: number, senderId: number, messageId: number) {
    await this.#storage.set(K.cache.minPeerReference(senderId, chatId), [{ chatId, messageId }, new Date()]);
  }

  async getLastMinPeerReference(senderId: number): Promise<{ chatId: number; messageId: number } | null> {
    const references = new Array<[{ chatId: number; messageId: number }, Date]>();
    for await (const [, reference] of await this.#storage.getMany<[{ chatId: number; messageId: number }, Date]>({ prefix: K.cache.minPeerReferenceSender(senderId) })) {
      references.push(reference);
    }
    return references.sort((a, b) => b[1].getTime() - a[1].getTime())[0]?.[0] ?? null;
  }

  async deleteTranslations() {
    const maybePromises = new Array<MaybePromise<unknown>>();
    for await (const [key] of await this.#storage.getMany({ prefix: K.cache.allTranslations() })) {
      maybePromises.push(this.#storage.set(key, null));
    }
    await Promise.all(maybePromises);
  }

  async getTranslations(platform: string, language: string): Promise<[number, Translation[], Date] | null> {
    return await this.#storage.get<[number, Translation[], Date]>(K.cache.translations(platform, language));
  }

  async setTranslations(platform: string, language: string, version: number, translations: Translation[]) {
    await this.#storage.set(K.cache.translations(platform, language), [version, translations, new Date()]);
  }

  async setPollResults(pollId: bigint, pollResults: Api.pollResults) {
    await this.setTlObject(K.cache.pollResult(pollId), pollResults);
  }

  async getPollResults(pollId: bigint): Promise<Api.pollResults | null> {
    return await this.getTlObject(K.cache.pollResult(pollId)) as Api.pollResults | null;
  }

  async deletePollResults() {
    const maybePromises = new Array<MaybePromise<unknown>>();
    for await (const [key] of await this.#storage.getMany({ prefix: K.cache.pollResults() })) {
      maybePromises.push(this.#storage.set(key, null));
    }
    await Promise.all(maybePromises);
  }

  async setPoll(pollId: bigint, poll: Api.poll) {
    await this.setTlObject(K.cache.poll(pollId), poll);
  }

  async getPoll(pollId: bigint): Promise<Api.poll | null> {
    return await this.getTlObject(K.cache.poll(pollId)) as Api.poll | null;
  }

  async deletePolls() {
    const maybePromises = new Array<MaybePromise<unknown>>();
    for await (const [key] of await this.#storage.getMany({ prefix: K.cache.polls() })) {
      maybePromises.push(this.#storage.set(key, null));
    }
    await Promise.all(maybePromises);
  }

  async setVoiceTranscription(voiceTranscription: VoiceTranscription) {
    await this.set(K.cache.voiceTranscription(BigInt(voiceTranscription.id)), voiceTranscription);
  }

  async getVoiceTranscription(transcriptionId: bigint): Promise<VoiceTranscription | null> {
    return await this.get(K.cache.voiceTranscription(transcriptionId)) as Promise<VoiceTranscription | null>;
  }

  async deleteVoiceTranscriptions() {
    const maybePromises = new Array<MaybePromise<unknown>>();
    for await (const [key] of await this.#storage.getMany({ prefix: K.cache.voiceTranscriptions() })) {
      maybePromises.push(this.#storage.set(key, null));
    }
    await Promise.all(maybePromises);
  }

  async setVoiceTranscriptionReference(chatId: number, messageId: number, messageEditDate: Date, transcriptionId: bigint) {
    await this.set(K.cache.voiceTranscriptionReference(chatId, messageId, messageEditDate.getTime()), transcriptionId);
  }

  async getVoiceTranscriptionReference(chatId: number, messageId: number, messageEditDate: Date): Promise<bigint | null> {
    return await this.get(K.cache.voiceTranscriptionReference(chatId, messageId, messageEditDate.getTime())) as Promise<bigint | null>;
  }

  async deleteVoiceTranscriptionReferences() {
    const maybePromises = new Array<MaybePromise<unknown>>();
    for await (const [key] of await this.#storage.getMany({ prefix: K.cache.voiceTranscriptions() })) {
      maybePromises.push(this.#storage.set(key, null));
    }
    await Promise.all(maybePromises);
  }
}
