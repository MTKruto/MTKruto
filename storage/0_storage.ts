import { MaybePromise } from "../utilities/0_types.ts";
import { UNREACHABLE } from "../utilities/0_control.ts";
import { sha1 } from "../utilities/0_hash.ts";
import { bigIntFromBuffer } from "../utilities/0_bigint.ts";
import { DC } from "../transport/2_transport_provider.ts";
import { serialize } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { TLReader } from "../tl/3_tl_reader.ts";

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

export type StorageKeyPart = string | number | bigint | Uint8Array;

export abstract class Storage {
  private _authKeyId: bigint | null = null;

  abstract init(): MaybePromise<void>;
  // TODO: digest keys in prod
  abstract set(key: readonly StorageKeyPart[], value: unknown): MaybePromise<void>;
  abstract get<T>(key: readonly StorageKeyPart[]): MaybePromise<T | null>;

  setDc(dc: DC | null) {
    return this.set(KPARTS__DC, dc);
  }

  getDc() {
    return this.get<DC>(KPARTS__DC);
  }

  private async resetAuthKeyId(authKey: Uint8Array | null) {
    if (authKey != null) {
      this._authKeyId = await sha1(authKey).then((hash) => bigIntFromBuffer(hash.slice(-8), true, false));
    } else {
      this._authKeyId = null;
    }
  }

  async getAuthKey() {
    const authKey = await this.get<Uint8Array>(KPARTS__AUTH_KEY);
    await this.resetAuthKeyId(authKey);
    return authKey;
  }

  async setAuthKey(authKey: Uint8Array | null) {
    await this.set(KPARTS__AUTH_KEY, authKey);
    await this.resetAuthKeyId(authKey);
  }

  get authKeyId() {
    return this._authKeyId;
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
      await this.set(KPARTS__USERNAME(username), [type, String(id), new Date()]);
    }
  }

  getUsername(username: string) {
    username = username.toLowerCase();
    return this.get<["user" | "channel", bigint, Date]>(KPARTS__USERNAME(username));
  }

  async setState(state: types.UpdatesState) {
    await this.set(KPARTS__STATE, state[serialize]());
  }

  async getState() {
    const state = await this.get<Uint8Array>(KPARTS__STATE);
    if (state != null) {
      return new TLReader(state).readObject() as types.UpdatesState;
    } else {
      return null;
    }
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
    await this.set(KPARTS__PEER(type, peer.id), peer[serialize]());
  }

  async getEntity(type: "channel", id: bigint): Promise<types.Channel | null>;
  async getEntity(type: "chat", id: bigint): Promise<types.Chat | null>;
  async getEntity(type: "user", id: bigint): Promise<types.User | null>;
  async getEntity(type: "channel" | "chat" | "user", id: bigint): Promise<types.Channel | types.Chat | types.User | null>;
  async getEntity(type: "channel" | "chat" | "user", id: bigint) {
    const peer_ = await this.get<Uint8Array>(KPARTS__PEER(type, id));
    if (peer_ != null) {
      return new TLReader(peer_).readObject();
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
}
