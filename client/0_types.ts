import { MaybePromise } from "../1_utilities.ts";
import { functions, types } from "../2_tl.ts";
import { Storage } from "../3_storage.ts";
import { ConnectionState, ID, Message, Update } from "../3_types.ts";

type Functions = typeof functions;
type Keys = keyof Functions;
// deno-lint-ignore no-explicit-any
type AnyFunc = (...args: any) => any;
type Promisify<T extends AnyFunc> = (...args: Parameters<T>) => Promise<ReturnType<T>>;
export type Api = { [K in Keys]: Functions[K] extends { __F: AnyFunc } ? Promisify<Functions[K]["__F"]> : { [K_ in keyof Functions[K]]: Functions[K][K_] extends { __F: AnyFunc } ? Promisify<Functions[K][K_]["__F"]> : Functions[K][K_] } };

export interface C {
  api: Api;
  storage: Storage;
  guaranteeUpdateDelivery: boolean;
  setConnectionState: (connectionState: ConnectionState) => void;
  resetConnectionState: () => void;
  getSelfId: () => Promise<number>;
  getInputPeer: (id: ID) => Promise<types.InputPeerChat | types.InputPeerUser | types.InputPeerChannel>;
  getLastMessage: (chatId: ID) => Promise<Message | null>;
  getEntity(peer: types.PeerUser): Promise<types.User | null>;
  getEntity(peer: types.PeerChat): Promise<types.Chat | types.ChatForbidden | null>;
  getEntity(peer: types.PeerChannel): Promise<types.Channel | types.ChannelForbidden | null>;
  getEntity(peer: types.PeerUser | types.PeerChat | types.PeerChannel): Promise<types.User | types.Chat | types.ChatForbidden | types.Channel | types.ChannelForbidden | null>;
  getEntity(peer: types.PeerUser | types.PeerChat | types.PeerChannel): Promise<types.Chat | types.ChatForbidden | types.Channel | types.ChannelForbidden | types.User | null>;
  getMessage(chatId: number, messageId: number): MaybePromise<Message | null>;
  getStickerSetName: (inputStickerSet: types.InputStickerSetID) => MaybePromise<string>;
  queueDispatchMainBoxUpdate: (update: Update) => void;
}
