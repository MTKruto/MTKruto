import { MaybePromise } from "../types.ts";
import { DC } from "../transport/transport_provider.ts";
import { sha1 } from "../utilities/0_hash.ts";
import { bigIntFromBuffer } from "../utilities/0_bigint.ts";

export abstract class Session {
  dc: DC | null = null;
  private _authKeyId: Promise<bigint | null> = Promise.resolve(null);
  private _authKey: Uint8Array | null = null;

  abstract load(): MaybePromise<void>;
  abstract save(): MaybePromise<void>;

  get authKeyId() {
    return this._authKeyId;
  }

  set authKey(authKey: Uint8Array | null) {
    this._authKey = authKey;

    if (authKey != null) {
      this._authKeyId = sha1(authKey).then((hash) => bigIntFromBuffer(hash.slice(-8), true, false));
    }
  }

  get authKey() {
    return this._authKey;
  }
}
