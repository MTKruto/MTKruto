import { MaybePromise } from "../types.ts";
import { DC } from "../transport/transport_provider.ts";
import { sha1 } from "../utilities/0_hash.ts";
import { bigIntFromBuffer } from "../utilities/0_bigint.ts";

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
}
