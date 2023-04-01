import { MaybePromise } from "../types.ts";

export abstract class Transport {
  abstract receive(): MaybePromise<Uint8Array>;
  abstract send(buffer: Uint8Array): Promise<void> | void;
}
