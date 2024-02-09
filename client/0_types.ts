import { enums, functions, types } from "../2_tl.ts";
import { Storage } from "../3_storage.ts";
import { ConnectionState, EntityGetter, ID, ParseMode, Update } from "../3_types.ts";

type Functions = typeof functions;
type Keys = keyof Functions;
// deno-lint-ignore no-explicit-any
type AnyFunc = (...args: any) => any;
type Promisify<T extends AnyFunc> = (...args: Parameters<T>) => Promise<ReturnType<T>>;
export type Api = { [K in Keys]: Functions[K] extends { __F: AnyFunc } ? Promisify<Functions[K]["__F"]> : { [K_ in keyof Functions[K]]: Functions[K][K_] extends { __F: AnyFunc } ? Promisify<Functions[K][K_]["__F"]> : Functions[K][K_] } };

interface ApiFactory {
  (dcId?: number): { api: Api; connect: () => Promise<void>; disconnect: () => Promise<void> };
}

export interface C {
  api: Api;
  storage: Storage;
  messageStorage: Storage;
  guaranteeUpdateDelivery: boolean;
  setConnectionState: (connectionState: ConnectionState) => void;
  resetConnectionState: () => void;
  getSelfId: () => Promise<number>;
  getInputPeer: (id: ID) => Promise<enums.InputPeer>;
  getInputChannel: (id: ID) => Promise<types.InputChannel>;
  getEntity: EntityGetter;
  handleUpdate: (update: Update) => void;
  parseMode: ParseMode;
  apiFactory: ApiFactory;
  ignoreOutgoing: boolean | null;
  cdn: boolean;
  dropPendingUpdates?: boolean;
}

export class ConnectionError extends Error {
  //
}
