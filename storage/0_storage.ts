import { bigIntFromBuffer, MaybePromise, rleDecode, rleEncode, sha1, UNREACHABLE, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { enums, serialize, TLObject, TLReader, types } from "../2_tl.ts";
import { DC } from "../3_transport.ts";

const KPARTS__DC = ["dc"];
const KPARTS__AUTH_KEY = ["authKey"];
const KPARTS__CHANNEL_ACCESS_HASH = (v: bigint) => ["channelAccessHash", v];
const KPARTS__USER_ACCESS_HASH = (v: bigint) => ["userAccessHash", v];
const KPARTS__USERNAME = (v: string) => ["username", v];
const KPARTS__STATE = ["state"];
const KPARTS__CHANNEL_PTS = (v: bigint) => ["channelPts", v];
const KPARTS__PEER = (type: string, id: bigint) => ["peer", type, id];
const KPARTS__ACCOUNT_TYPE = ["accountType"];
const KPARTS__STICKER_SET_NAME = (id: bigint, accessHash: bigint) => ["stickerSetName", id, accessHash];
const KPARTS_MESSAGE = (chatId: number, messageId: number) => ["messages", chatId, messageId];
const KPARTS_MESSAGES = (chatId: number) => ["messages", chatId];
const KPARTS_MESSAGE_REF = (messageId: number) => ["messageRefs", messageId];
const KPARTS_HAS_ALL_CHATS = (listId: number) => ["hasAllChats", listId];
const KPARTS_CHATS = (listId: number) => ["chats", listId];
const KPARTS_CHAT = (listId: number, chatId: number) => ["chats", listId, chatId];
const KPARTS_PINNED_CHATS = (listId: number) => ["pinnedChats", listId];
const KPARTS_SERVER_SALT = ["serverSalt"];
const KPARTS_FILE = (fileId: bigint) => ["files", fileId];
const KPARTS_FILE_PART = (fileId: bigint, n: number) => ["fileParts", fileId, n];
const KPARTS_CEMOJI = (id: bigint) => ["customEmojiDocuments", id];

export type StorageKeyPart = string | number | bigint;

export type GetManyFilter = { prefix: readonly StorageKeyPart[] } | { start: readonly StorageKeyPart[]; end: readonly StorageKeyPart[] };

export abstract class Storage {
  #_authKeyId: bigint | null = null;

  abstract init(): MaybePromise<void>;
  // TODO: digest keys in prod?
  abstract set(key: readonly StorageKeyPart[], value: unknown): MaybePromise<void>;
  abstract incr(key: readonly StorageKeyPart[], by: number): MaybePromise<void>;
  abstract get<T>(key: readonly StorageKeyPart[]): MaybePromise<T | null>;
  abstract getMany<T>(prefix: GetManyFilter, params?: { limit?: number; reverse?: boolean }): MaybePromise<Generator<[readonly StorageKeyPart[], T]> | AsyncGenerator<[readonly StorageKeyPart[], T]>>;
  abstract get supportsFiles(): boolean;
  abstract branch(id: string): Storage;

  setDc(dc: DC | null) {
    return this.set(KPARTS__DC, dc);
  }

  getDc() {
    return this.get<DC>(KPARTS__DC);
  }

  async #resetAuthKeyId(authKey: Uint8Array | null) {
    if (authKey != null) {
      this.#_authKeyId = await sha1(authKey).then((hash) => bigIntFromBuffer(hash.slice(-8), true, false));
    } else {
      this.#_authKeyId = null;
    }
  }

  async getAuthKey() {
    const authKey = await this.get<Uint8Array>(KPARTS__AUTH_KEY);
    await this.#resetAuthKeyId(authKey);
    return authKey;
  }

  async setAuthKey(authKey: Uint8Array | null) {
    await this.set(KPARTS__AUTH_KEY, authKey);
    await this.#resetAuthKeyId(authKey);
  }

  get authKeyId() {
    return this.#_authKeyId;
  }

  setChannelAccessHash(id: bigint, accessHash: bigint) {
    return this.set(KPARTS__CHANNEL_ACCESS_HASH(id), accessHash);
  }

  getChannelAccessHash(id: bigint) {
    return this.get<bigint>(KPARTS__CHANNEL_ACCESS_HASH(id));
  }

  setUserAccessHash(id: bigint, accessHash: bigint) {
    return this.set(KPARTS__USER_ACCESS_HASH(id), accessHash);
  }

  getUserAccessHash(id: bigint) {
    return this.get<bigint>(KPARTS__USER_ACCESS_HASH(id));
  }

  async updateUsernames(type: "user" | "channel", id: bigint, usernames: string[]) {
    for (let username of usernames) {
      username = username.toLowerCase();
      await this.set(KPARTS__USERNAME(username), [type, id, new Date()]);
    }
  }

  async getUsername(username: string) {
    username = username.toLowerCase();
    return await this.get<["user" | "channel", bigint, Date]>(KPARTS__USERNAME(username));
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
    await this.setTlObject(KPARTS__STATE, state);
  }

  async getState() {
    return await this.getTlObject(KPARTS__STATE) as enums.updates.State | null;
  }

  async setMessage(chatId: number, messageId: number, message: enums.Message | null) {
    if (chatId > ZERO_CHANNEL_ID) {
      await this.set(KPARTS_MESSAGE_REF(messageId), message == null ? null : chatId);
    }
    await this.setTlObject(KPARTS_MESSAGE(chatId, messageId), message);
  }

  async deleteMessages() {
    const maybePromises = new Array<MaybePromise<void>>();
    for await (const [k, o] of await this.getMany({ prefix: ["messageRefs"] })) {
      maybePromises.push(Promise.all<void>([this.set(k, null), o == null ? Promise.resolve() : this.set(KPARTS_MESSAGE(o as number, k[1] as number), null)]).then(() => {}));
    }
    await Promise.all(maybePromises.filter((v) => v instanceof Promise));
  }

  getMessageChat(messageId: number) {
    return this.get<number>(KPARTS_MESSAGE_REF(messageId));
  }

  async getMessage(chatId: number, messageId: number) {
    return await this.getTlObject(KPARTS_MESSAGE(chatId, messageId)) as enums.Message | null;
  }

  async getLastMessage(chatId: number) {
    for await (const [_, buffer] of await this.getMany<Uint8Array>({ prefix: KPARTS_MESSAGES(chatId) }, { limit: 1, reverse: true })) {
      return await this.getTlObject(buffer) as enums.Message;
    }
    return null;
  }

  async setChannelPts(channelId: bigint, pts: number) {
    await this.set(KPARTS__CHANNEL_PTS(channelId), pts);
  }

  getChannelPts(channelId: bigint) {
    return this.get<number>(KPARTS__CHANNEL_PTS(channelId));
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
    await this.set(KPARTS__PEER(type, entity.id), rleEncode(entity[serialize]()));
  }

  async removeEntity(entity: types.User | types.Channel | types.ChannelForbidden | types.Chat | types.ChatForbidden) {
    const type = this.#getEntityType(entity);
    await this.set(KPARTS__PEER(type, entity.id), null);
  }

  async getEntity(type: "channel", id: bigint): Promise<types.Channel | types.ChannelForbidden | null>;
  async getEntity(type: "chat", id: bigint): Promise<types.Chat | types.ChatForbidden | null>;
  async getEntity(type: "user", id: bigint): Promise<types.User | null>;
  async getEntity(type: "channel" | "chat" | "user", id: bigint): Promise<types.Channel | types.ChannelForbidden | types.Chat | types.ChatForbidden | types.User | null>;
  async getEntity(type: "channel" | "chat" | "user", id: bigint) {
    const peer_ = await this.get<Uint8Array>(KPARTS__PEER(type, id));
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
        await this.set(KPARTS__ACCOUNT_TYPE, type);
      }
    }
  }

  getAccountType() {
    return this.get<"user" | "bot">(KPARTS__ACCOUNT_TYPE);
  }

  async updateStickerSetName(id: bigint, accessHash: bigint, name: string) {
    await this.set(KPARTS__STICKER_SET_NAME(id, accessHash), [name, new Date()]);
  }

  getStickerSetName(id: bigint, accessHash: bigint) {
    return this.get<[string, Date]>(KPARTS__STICKER_SET_NAME(id, accessHash));
  }

  async setServerSalt(serverSalt: bigint) {
    await this.set(KPARTS_SERVER_SALT, serverSalt);
  }

  getServerSalt() {
    return this.get<bigint>(KPARTS_SERVER_SALT);
  }

  async setChat(listId: number, chatId: number, pinned: number, topMessageId: number, topMessageDate: Date) {
    await this.set(KPARTS_CHAT(listId, chatId), [pinned, topMessageId, topMessageDate]);
  }

  async getChats(listId: number) {
    const chats = new Array<{ chatId: number; pinned: number; topMessageId: number; topMessageDate: Date }>();
    for await (const [key, value] of await this.getMany<[number, number, Date]>({ prefix: KPARTS_CHATS(listId) })) {
      if (key.length != 3 || typeof key[2] !== "number") {
        continue;
      }
      chats.push({ chatId: key[2], pinned: value[0], topMessageId: value[1], topMessageDate: value[2] });
    }
    return chats;
  }

  async removeChats(listId: number) {
    for await (const [key] of await this.getMany({ prefix: KPARTS_CHATS(listId) })) {
      await this.set(key, null);
    }
    await this.setHasAllChats(listId, false);
    await this.setPinnedChats(listId, null);
  }

  async setHasAllChats(listId: number, hasAllChats: boolean) {
    await this.set(KPARTS_HAS_ALL_CHATS(listId), hasAllChats);
  }

  async hasAllChats(listId: number) {
    const v = await this.get<boolean>(KPARTS_HAS_ALL_CHATS(listId));
    return v == true;
  }

  async setPinnedChats(listId: number, chatIds: number[] | null) {
    await this.set(KPARTS_PINNED_CHATS(listId), chatIds);
  }

  async getPinnedChats(listId: number) {
    return await this.get<number[]>(KPARTS_PINNED_CHATS(listId));
  }

  async getHistory(chatId: number, offsetId: number, limit: number) {
    if (offsetId == 0) {
      offsetId = Infinity;
    }
    ++limit;
    const messages = new Array<enums.Message>();
    for await (const [_, buffer] of await this.getMany<Uint8Array>({ start: KPARTS_MESSAGE(chatId, 0), end: KPARTS_MESSAGE(chatId, offsetId) }, { limit, reverse: true })) {
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
    return await this.get<number>(KPARTS_FILE(id));
  }

  async *iterFileParts(id: bigint, partCount: number) {
    if (!this.supportsFiles) {
      return;
    }
    for (let i = 0; i < partCount; i++) {
      const part = await this.get<Uint8Array>(KPARTS_FILE_PART(id, i));
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
    await this.set(KPARTS_FILE_PART(id, index), bytes);
  }

  async setFilePartCount(id: bigint, partCount: number) {
    if (!this.supportsFiles) {
      return;
    }
    await this.set(KPARTS_FILE(id), partCount);
  }

  async setCustomEmojiDocument(id: bigint, document: types.Document) {
    await this.set(KPARTS_CEMOJI(id), [rleEncode(document[serialize]()), new Date()]);
  }

  async getCustomEmojiDocument(id: bigint) {
    const v = await this.get<[Uint8Array, Date]>(KPARTS_CEMOJI(id));
    if (v != null) {
      return [await this.getTlObject([0]), v[1]] as [types.Document, Date];
    } else {
      return null;
    }
  }
}
