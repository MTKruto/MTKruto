import { MaybePromise } from "../1_utilities.ts";

abstract class Foundation {
  abstract get connected(): boolean;
  stateChangeHandler?: (connected: boolean) => void;
  abstract open(): MaybePromise<void>;
  abstract write(p: Uint8Array): MaybePromise<void>;
  abstract close(): MaybePromise<void>;
  callback?: { read(count: number): void; write(count: number): void };
}

export abstract class ConnectionUnframed extends Foundation {
  readonly type = "framed" as const;
  abstract read(p: Uint8Array): MaybePromise<void>;
}

export abstract class ConnectionFramed extends Foundation {
  readonly type = "framed" as const;
  abstract read(): MaybePromise<Uint8Array>;
}

export type Connection = ConnectionUnframed | ConnectionFramed;
