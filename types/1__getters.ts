import { MaybePromise } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { ID } from "./0_id.ts";

/** @unlisted */
export interface EntityGetter {
  (peer: types.PeerUser): MaybePromise<types.User | null>;
  (peer: types.PeerChat): MaybePromise<types.Chat | types.ChatForbidden | null>;
  (peer: types.PeerChannel): MaybePromise<types.Channel | types.ChannelForbidden | null>;
  (peer: types.PeerUser | types.PeerChat | types.PeerChannel): MaybePromise<types.User | types.Chat | types.ChatForbidden | types.Channel | types.ChannelForbidden | null>;
}

/** @unlisted */
export interface InputPeerGetter {
  (id: ID): Promise<types.InputPeerUser | types.InputPeerChannel | types.InputPeerChat>;
}

/** @unlisted */
export interface UsernameResolver {
  (username: string): MaybePromise<types.InputUser>;
}
