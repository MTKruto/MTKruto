import { MaybePromise } from "../utilities/0_types.ts";

export abstract class Connection {
  abstract get connected(): boolean;
  abstract open(): MaybePromise<void>;
  abstract read(p: Uint8Array): MaybePromise<void>;
  abstract write(p: Uint8Array): MaybePromise<void>;
  abstract close(): MaybePromise<void>;
}
