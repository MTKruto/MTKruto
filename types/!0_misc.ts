import { MaybePromise } from "../utilities/0_types.ts";
import * as types from "../tl/2_types.ts";

export interface EntityGetter {
  (peer: types.PeerUser): MaybePromise<types.User | null>;
  (peer: types.PeerChat): MaybePromise<types.Chat | null>;
  (peer: types.PeerChannel): MaybePromise<types.Channel | null>;
}
