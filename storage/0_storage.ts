import { base64Decode, base64Encode } from "../deps.ts";
import { MaybePromise } from "../utilities/0_types.ts";
import { UNREACHABLE } from "../utilities/0_control.ts";
import { sha1 } from "../utilities/0_hash.ts";
import { bigIntFromBuffer } from "../utilities/0_bigint.ts";
import { DC } from "../transport/2_transport_provider.ts";
import { serialize } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { TLReader } from "../tl/3_tl_reader.ts";
import { rleDecode, rleEncode } from "../utilities/0_rle.ts";

export abstract class Storage {
  private _authKeyId: bigint | null = null;

  abstract init(): MaybePromise<void>;
  // TODO: digest keys in prod
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

  private readonly state__ = "state__";
  async setState(state: types.UpdatesState) {
    await this.set(
      this.state__,
      JSON.stringify({
        date: state.date,
        pts: state.pts,
        qts: state.qts,
        seq: state.seq,
        unreadCount: state.unreadCount,
      }),
    );
  }

  async getState() {
    const state__ = await this.get(this.state__);
    if (state__ != null) {
      const state_ = JSON.parse(state__);
      return new types.UpdatesState({
        date: state_.date,
        pts: state_.pts,
        qts: state_.qts,
        seq: state_.seq,
        unreadCount: state_.unreadCount,
      });
    } else {
      return null;
    }
  }

  private readonly channelPts__ = "channelPts__";
  async setChannelPts(channelId: bigint, pts: number) {
    await this.set(`${this.channelPts__}${channelId}`, String(pts));
  }

  async getChannelPts(channelId: bigint) {
    const pts = await this.get(`${this.channelPts__}${channelId}`);
    if (pts != null) {
      return Number(pts);
    } else {
      return null;
    }
  }

  private readonly peer__ = "peer__";
  async setEntity(peer: types.Channel): Promise<void>;
  async setEntity(peer: types.Chat): Promise<void>;
  async setEntity(peer: types.User): Promise<void>;
  async setEntity(peer: types.User | types.Channel | types.Chat) {
    const type = peer instanceof types.Channel ? "channel" : peer instanceof types.Chat ? "chat" : peer instanceof types.User ? "user" : UNREACHABLE();
    await this.set(`${this.peer__}${type}${peer.id}`, base64Encode(rleEncode(peer[serialize]())));
  }

  async getEntity(type: "channel", id: bigint): Promise<types.Channel | null>;
  async getEntity(type: "chat", id: bigint): Promise<types.Chat | null>;
  async getEntity(type: "user", id: bigint): Promise<types.User | null>;
  async getEntity(type: "channel" | "chat" | "user", id: bigint): Promise<types.Channel | types.Chat | types.User | null>;
  async getEntity(type: "channel" | "chat" | "user", id: bigint) {
    const peer_ = await this.get(`${this.peer__}${type}${id}`);
    if (peer_ != null) {
      const reader = new TLReader(rleDecode(base64Decode(peer_)));
      return reader.readObject();
    } else {
      return null;
    }
  }

  private readonly accountType__ = "accountType__";
  async setAccountType(type: "user" | "bot") {
    try {
      await this.getAccountType();
      UNREACHABLE();
    } catch (err) {
      if (!(err instanceof Error) || !(err.message == "Unreachable")) {
        throw err;
      } else {
        await this.set(this.accountType__, type);
      }
    }
  }

  async getAccountType() {
    const accountType = await this.get(this.accountType__);
    if (accountType != null) {
      return accountType as "user" | "bot";
    } else {
      UNREACHABLE();
    }
  }

  private readonly stickerSetName__ = "stickerSetName__";
  async updateStickerSetName(id: bigint, accessHash: bigint, name: string) {
    await this.set(`${this.stickerSetName__}${id}${accessHash}`, JSON.stringify([name, new Date()]));
  }

  async getStickerSetName(id: bigint, accessHash: bigint) {
    const stickerSetName_ = await this.get(`${this.stickerSetName__}${id}${accessHash}`);
    if (stickerSetName_ != null) {
      const [name, updatedAt] = JSON.parse(stickerSetName_);
      return [name, new Date(updatedAt)] as [string, Date];
    } else {
      return null;
    }
  }
}
