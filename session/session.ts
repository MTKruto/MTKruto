import { MaybePromise } from "../types.ts";
import { DC } from "../transport/transport_provider.ts";

export abstract class Session {
  dc: DC | null = null;
  authKey: Uint8Array | null = null;
  abstract load(): MaybePromise<void>;
  abstract save(): MaybePromise<void>;
}
