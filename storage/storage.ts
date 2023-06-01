import { MaybePromise } from "../utilities/0_types.ts";
import { sha1 } from "../utilities/0_hash.ts";
import { bigIntFromBuffer } from "../utilities/0_bigint.ts";
import { DC } from "../transport/transport_provider.ts";

export abstract class Storage {
  private _authKeyId: bigint | null = null;

  abstract init(): MaybePromise<void>;
  abstract set(key: string, value: string | null): MaybePromise<void>;
  abstract get(key: string): MaybePromise<string | null>;

  setDc(dc: DC | null) {
    return this.set("dc", dc);
  }

  async getDc() {
    return await this.get("dc") as DC | null;
  }

  private async resetAuthKeyId(authKey: Uint8Array | null) {
    if (authKey != null) {
      this._authKeyId = await sha1(authKey).then((hash) => bigIntFromBuffer(hash.slice(-8), true, false));
    } else {
      this._authKeyId = null;
    }
  }

  async getAuthKey() {
    const authKey_ = await this.get("authKey");
    const authKey = authKey_ == null ? null : new Uint8Array(authKey_.split(/([0-9a-f]{2})/).filter((v: string) => v).map((v: string) => parseInt(v, 16)));
    await this.resetAuthKeyId(authKey);
    return authKey;
  }

  async setAuthKey(authKey: Uint8Array | null) {
    await this.set("authKey", authKey == null ? null : Array.from(authKey).map((v) => v.toString(16)).map((v) => v.padStart(2, "0")).join(""));
    await this.resetAuthKeyId(authKey);
  }

  get authKeyId() {
    return this._authKeyId;
  }

  private readonly channelAccessHash__ = "channelAccessHash__";
  setChannelAccessHash(id: bigint, accessHash: bigint) {
    return this.set(`${this.channelAccessHash__}${id}`, String(accessHash));
  }

  async getChannelAccessHash(id: bigint) {
    const accessHash = await this.get(`${this.channelAccessHash__}${id}`);
    if (accessHash != null) {
      return BigInt(accessHash);
    } else {
      return null;
    }
  }

  private readonly userAccessHash__ = "userAccessHash__";
  setUserAccessHash(id: bigint, accessHash: bigint) {
    return this.set(`${this.userAccessHash__}${id}`, String(accessHash));
  }

  async getUserAccessHash(id: bigint) {
    const accessHash = await this.get(`${this.userAccessHash__}${id}`);
    if (accessHash != null) {
      return BigInt(accessHash);
    } else {
      return null;
    }
  }

  private readonly username__ = "username__";
  async updateUsernames(type: "user" | "channel", id: bigint, usernames: string[]) {
    for (let username of usernames) {
      username = username.toLowerCase();
      await this.set(`${this.username__}${username}`, JSON.stringify([type, String(id), new Date()]));
    }
  }

  async getUsername(username: string) {
    username = username.toLowerCase();
    const username_ = await this.get(`${this.username__}${username}`);
    if (username_ != null) {
      const [type, id, updatedAt] = JSON.parse(username_);
      return [type as "user" | "channel", BigInt(id), new Date(updatedAt)] as const;
    } else {
      return null;
    }
  }
}
