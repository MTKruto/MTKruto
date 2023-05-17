import { MaybePromise } from "../types.ts";
import { TransportProviderParams } from "../transport/transport_provider.ts";

export abstract class Session {
  dc: TransportProviderParams["dc"] | null = null;
  authKey: Uint8Array | null = null;
  abstract load(): MaybePromise<void>;
  abstract save(): MaybePromise<void>;
}
