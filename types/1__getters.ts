import { MaybePromise } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { ChatID } from "./0_chat_id.ts";

export interface EntityGetter {
  (peer: types.PeerUser): MaybePromise<types.User | null>;
  (peer: types.PeerChat): MaybePromise<types.Chat | null>;
  (peer: types.PeerChannel): MaybePromise<types.Channel | null>;
}

export interface InputPeerGetter {
  (id: ChatID): Promise<types.InputPeerUser | types.InputPeerChannel | types.InputPeerChat>;
}
