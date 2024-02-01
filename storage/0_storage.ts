import { bigIntFromBuffer, MaybePromise, rleDecode, rleEncode, sha1, UNREACHABLE, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { enums, serialize, TLObject, TLReader, types } from "../2_tl.ts";
import { DC } from "../3_transport.ts";

// key parts
const K = {
  session: {
    P: (string: string) => `session.${string}`,
    serverSalt: () => [K.session.P("serverSalt")],
  },
  auth: {
    P: (string: string) => `auth.${string}`,
    dc: () => [K.auth.P("dc")],
    key: () => [K.auth.P("key")],
    accountType: () => [K.auth.P("accountType")],
  },
  updates: {
    P: (string: string) => `updates.${string}`,
    state: () => [K.updates.P("state")],
    all: () => [K.updates.P("updates")],
    updates: (boxId: bigint) => [...K.updates.all(), boxId],
    update: (boxId: bigint, id: bigint) => [...K.updates.updates(boxId), id],
    channelPts: (channelId: bigint) => [K.updates.P("channelPts"), channelId],
  },
  cache: {
    P: (string: string) => `cache.${string}`,
    usernames: () => [K.cache.P("username")],
    username: (v: string) => [...K.cache.usernames(), v],
    peers: () => [K.cache.P("peer")],
    peer: (type: string, id: bigint) => [...K.cache.peers(), type, id],
    stickerSetNames: () => [K.cache.P("stickerSetNames")],
    stickerSetName: (id: bigint, accessHash: bigint) => [...K.cache.stickerSetNames(), id, accessHash],
    files: () => [K.cache.P("files")],
    file: (fileId: bigint) => [...K.cache.files(), fileId],
    fileParts: () => [K.cache.P("fileParts")],
    filePart: (fileId: bigint, n: number) => [...K.cache.fileParts(), fileId, n],
    customEmojiDocuments: () => [K.cache.P("customEmojiDocuments")],
    customEmojiDocument: (id: bigint) => [...K.cache.customEmojiDocuments(), id],
  },
  messages: {
    P: (string: string) => `chatlists.${string}`,
    messages: (chatId: number) => [K.messages.P("messages"), chatId],
    message: (chatId: number, messageId: number) => [...K.messages.messages(chatId), messageId],
    allMessageRefs: () => [K.messages.P("messageRefs")],
    messageRef: (messageId: number) => [...K.messages.allMessageRefs(), messageId],
  },
  chatlists: {
    P: (string: string) => `chatlists.${string}`,
    hasAllChats: (listId: number) => [K.chatlists.P("hasAllChats"), listId],
    chats: (listId: number) => [K.chatlists.P("chats"), listId],
    chat: (listId: number, chatId: number) => [...K.chatlists.chats(listId), chatId],
    pinnedChats: (listId: number) => [K.chatlists.P("pinnedChats"), listId],
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

  setDc(dc: DC | null) {
    return this.set(K.auth.dc(), dc);
  }

  getDc() {
    return this.get<DC>(K.auth.dc());
  }

  async #resetAuthKeyId(authKey: Uint8Array | null) {
    if (authKey != null) {
      this.#authKeyId = await sha1(authKey).then((hash) => bigIntFromBuffer(hash.subarray(-8), true, false));
    } else {
      this.#authKeyId = null;
    }
  }

  async getAuthKey() {
    const authKey = await this.get<Uint8Array>(K.auth.key());
    await this.#resetAuthKeyId(authKey);
    return authKey;
  }

  async setAuthKey(authKey: Uint8Array | null) {
    await this.set(K.auth.key(), authKey);
    await this.#resetAuthKeyId(authKey);
  }

  get authKeyId() {
    return this.#authKeyId;
  }

  async getChannelAccessHash(id: bigint) {
    const channel = await this.getEntity("channel", id);
    if (channel) {
      return typeof channel.access_hash === "bigint" ? channel.access_hash : null;
    } else {
      return null;
    }
  }

  async getUserAccessHash(id: bigint) {
    const user = await this.getEntity("user", id);
    if (user) {
      return typeof user.access_hash === "bigint" ? user.access_hash : null;
    } else {
      return null;
    }
  }

  async updateUsernames(type: "user" | "channel", id: bigint, usernames: string[]) {
    for (let username of usernames) {
      username = username.toLowerCase();
      await this.set(K.cache.username(username), [type, id, new Date()]);
    }
  }

  async getUsername(username: string) {
    username = username.toLowerCase();
    return await this.get<["user" | "channel", bigint, Date]>(K.cache.username(username));
  }

  async setTlObject(key: readonly StorageKeyPart[], value: TLObject | null) {
    if (value == null) {
      await this.set(key, null);
    } else {
      await this.set(key, rleEncode(value[serialize]()));
    }
  }

  async getTlObject(keyOrBuffer: Uint8Array | readonly StorageKeyPart[]) {
    const buffer = keyOrBuffer instanceof Uint8Array ? keyOrBuffer : await this.get<Uint8Array>(keyOrBuffer);
    if (buffer != null) {
      return new TLReader(rleDecode(buffer)).readObject();
    } else {
      return null;
    }
  }

  async setState(state: enums.updates.State) {
    await this.setTlObject(K.updates.state(), state);
  }

  async getState() {
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

  getMessageChat(messageId: number) {
    return this.get<number>(K.messages.messageRef(messageId));
  }

  async getMessage(chatId: number, messageId: number) {
    return await this.getTlObject(K.messages.message(chatId, messageId)) as enums.Message | null;
  }

  async getLastMessage(chatId: number) {
    for await (const [_, buffer] of await this.getMany<Uint8Array>({ prefix: K.messages.messages(chatId) }, { limit: 1, reverse: true })) {
      return await this.getTlObject(buffer) as enums.Message;
    }
    return null;
  }

  async setChannelPts(channelId: bigint, pts: number) {
    await this.set(K.updates.channelPts(channelId), pts);
  }

  getChannelPts(channelId: bigint) {
    return this.get<number>(K.updates.channelPts(channelId));
  }

  #getEntityType(entity: types.Channel | types.ChannelForbidden | types.Chat | types.ChatForbidden | types.User) {
    if (entity instanceof types.Channel || entity instanceof types.ChannelForbidden) {
      return "channel";
    } else if (entity instanceof types.Chat || entity instanceof types.ChatForbidden) {
      return "chat";
    } else if (entity instanceof types.User) {
      return "user";
    } else {
      UNREACHABLE();
    }
  }

  async setEntity(entity: types.User | types.Channel | types.ChannelForbidden | types.Chat | types.ChatForbidden) {
    const type = this.#getEntityType(entity);
    await this.set(K.cache.peer(type, entity.id), rleEncode(entity[serialize]()));
  }

  async getEntity(type: "channel", id: bigint): Promise<types.Channel | types.ChannelForbidden | null>;
  async getEntity(type: "chat", id: bigint): Promise<types.Chat | types.ChatForbidden | null>;
  async getEntity(type: "user", id: bigint): Promise<types.User | null>;
  async getEntity(type: "channel" | "chat" | "user", id: bigint): Promise<types.Channel | types.ChannelForbidden | types.Chat | types.ChatForbidden | types.User | null>;
  async getEntity(type: "channel" | "chat" | "user", id: bigint) {
    const peer_ = await this.get<Uint8Array>(K.cache.peer(type, id));
    if (peer_ != null) {
      return new TLReader(rleDecode(peer_)).readObject();
    } else {
      return null;
    }
  }

  async setAccountType(type: "user" | "bot") {
    try {
      await this.getAccountType();
      UNREACHABLE();
    } catch (err) {
      if (!(err instanceof Error) || !(err.message == "Unreachable")) {
        throw err;
      } else {
        await this.set(K.auth.accountType(), type);
      }
    }
  }

  #accountType: "user" | "bot" | null = null;
  async getAccountType() {
    if (this.#accountType != null) {
      return this.#accountType;
    } else {
      return this.#accountType = await this.get<"user" | "bot">(K.auth.accountType());
    }
  }

  async updateStickerSetName(id: bigint, accessHash: bigint, name: string) {
    await this.set(K.cache.stickerSetName(id, accessHash), [name, new Date()]);
  }

  getStickerSetName(id: bigint, accessHash: bigint) {
    return this.get<[string, Date]>(K.cache.stickerSetName(id, accessHash));
  }

  async setServerSalt(serverSalt: bigint) {
    await this.set(K.session.serverSalt(), serverSalt);
  }

  getServerSalt() {
    return this.get<bigint>(K.session.serverSalt());
  }

  async setChat(listId: number, chatId: number, pinned: number, topMessageId: number, topMessageDate: Date) {
    await this.set(K.chatlists.chat(listId, chatId), [pinned, topMessageId, topMessageDate]);
  }

  async getChats(listId: number) {
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

  async hasAllChats(listId: number) {
    const v = await this.get<boolean>(K.chatlists.hasAllChats(listId));
    return v == true;
  }

  async setPinnedChats(listId: number, chatIds: number[] | null) {
    await this.set(K.chatlists.pinnedChats(listId), chatIds);
  }

  async getPinnedChats(listId: number) {
    return await this.get<number[]>(K.chatlists.pinnedChats(listId));
  }

  async getHistory(chatId: number, offsetId: number, limit: number) {
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

  async getFile(id: bigint) {
    if (!this.supportsFiles) {
      return null;
    }
    return await this.get<[number, number]>(K.cache.file(id));
  }

  async *iterFileParts(id: bigint, partCount: number, offset: number) {
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
    await this.set(K.cache.customEmojiDocument(id), [rleEncode(document[serialize]()), new Date()]);
  }

  async getCustomEmojiDocument(id: bigint) {
    const v = await this.get<[Uint8Array, Date]>(K.cache.customEmojiDocument(id));
    if (v != null) {
      return [await this.getTlObject([0]), v[1]] as [types.Document, Date];
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

  async getFirstUpdate(boxId: bigint) {
    for await (const [key, update] of await this.getMany<Uint8Array>({ prefix: K.updates.updates(boxId) }, { limit: 1 })) {
      return [key, await this.getTlObject(update).then((v) => v as enums.Update)] as const;
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
      this.deleteStickerSetNames(),
      this.deletePeers(),
      this.deleteUsernames(),
    ]);
  }
}
