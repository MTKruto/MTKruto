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
const KPARTS_MESSAGE_REF = (messageId: number) => ["messageRefs", messageId];

export type StorageKeyPart = string | number | bigint;

export abstract class Storage {
  #_authKeyId: bigint | null = null;

  abstract init(): MaybePromise<void>;
  // TODO: digest keys in prod?
  abstract set(key: readonly StorageKeyPart[], value: unknown): MaybePromise<void>;
  abstract incr(key: readonly StorageKeyPart[], by: number): MaybePromise<void>;
  abstract get<T>(key: readonly StorageKeyPart[]): MaybePromise<T | null>;
  abstract getMany<T>(prefix: readonly StorageKeyPart[]): MaybePromise<Generator<[readonly StorageKeyPart[], T]> | AsyncGenerator<[readonly StorageKeyPart[], T]>>;

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

  async getTLObject(key: readonly StorageKeyPart[]) {
    const buffer = await this.get<Uint8Array>(key);
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
    return await this.getTLObject(KPARTS__STATE) as enums.updates.State | null;
  }

  async setMessage(chatId: number, messageId: number, message: enums.Message | null) {
    if (chatId > ZERO_CHANNEL_ID) {
      await this.set(KPARTS_MESSAGE_REF(messageId), message == null ? null : chatId);
    }
    await this.setTlObject(KPARTS_MESSAGE(chatId, messageId), message);
  }

  async deleteMessages() {
    const maybePromises = new Array<MaybePromise<void>>();
    for await (const [k, o] of await this.getMany(["messageRefs"])) {
      maybePromises.push(Promise.all<void>([this.set(k, null), o == null ? Promise.resolve() : this.set(KPARTS_MESSAGE(o as number, k[1] as number), null)]).then(() => {}));
    }
    await Promise.all(maybePromises.filter((v) => v instanceof Promise));
  }

  getMessageChat(messageId: number) {
    return this.get<number>(KPARTS_MESSAGE_REF(messageId));
  }

  async getMessage(chatId: number, messageId: number) {
    return await this.getTLObject(KPARTS_MESSAGE(chatId, messageId)) as enums.Message | null;
  }

  async setChannelPts(channelId: bigint, pts: number) {
    await this.set(KPARTS__CHANNEL_PTS(channelId), pts);
  }

  getChannelPts(channelId: bigint) {
    return this.get<number>(KPARTS__CHANNEL_PTS(channelId));
  }

  async setEntity(peer: types.Channel): Promise<void>;
  async setEntity(peer: types.Chat): Promise<void>;
  async setEntity(peer: types.User): Promise<void>;
  async setEntity(peer: types.User | types.Channel | types.Chat) {
    const type = peer instanceof types.Channel ? "channel" : peer instanceof types.Chat ? "chat" : peer instanceof types.User ? "user" : UNREACHABLE();
    await this.set(KPARTS__PEER(type, peer.id), rleEncode(peer[serialize]()));
  }

  async getEntity(type: "channel", id: bigint): Promise<types.Channel | null>;
  async getEntity(type: "chat", id: bigint): Promise<types.Chat | null>;
  async getEntity(type: "user", id: bigint): Promise<types.User | null>;
  async getEntity(type: "channel" | "chat" | "user", id: bigint): Promise<types.Channel | types.Chat | types.User | null>;
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
    await this.set(["serverSalt"], serverSalt);
  }

  getServerSalt() {
    return this.get<bigint>(["serverSalt"]);
  }

  getHistory(chatId: number, offsetId: 0, limit: number) {
    this.getMany()
  }
}
