import { MaybePromise } from "../types.ts";

export abstract class Connection {
  abstract read(p: Uint8Array): MaybePromise<void>;
  abstract write(p: Uint8Array): MaybePromise<void>;
}
