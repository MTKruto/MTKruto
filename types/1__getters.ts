import { MaybePromise } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { ChatID } from "./0_chat_id.ts";

export interface EntityGetter {
  (peer: types.peerUser): MaybePromise<types.user | null>;
  (peer: types.peerChat): MaybePromise<types.chat | null>;
  (peer: types.peerChannel): MaybePromise<types.channel | null>;
}

export interface InputPeerGetter {
  (id: ChatID): Promise<types.inputPeerUser | types.inputPeerChannel | types.inputPeerChat>;
}

export interface UsernameResolver {
  (username: string): MaybePromise<types.inputUser>;
}
