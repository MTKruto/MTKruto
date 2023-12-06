import { base64EncodeUrlSafe, UNREACHABLE } from "../1_utilities.ts";
import { serialize, types } from "../2_tl.ts";
import { constructLocation, Location } from "./0_location.ts";
import { EntityGetter } from "./1__getters.ts";
import { constructUser, User } from "./1_user.ts";

export interface ChosenInlineResult {
  resultId: string;
  from: User;
  location?: Location;
  inlineMessageId?: string;
  query: string;
}

export async function constructChosenInlineResult(ubis: types.UpdateBotInlineSend, getEntity: EntityGetter): Promise<ChosenInlineResult> {
  const entity = await getEntity(new types.PeerUser(ubis));
  if (!entity || !(entity instanceof types.User)) {
    UNREACHABLE();
  }
  return {
    resultId: ubis.id,
    from: constructUser(entity),
    location: ubis.geo instanceof types.GeoPoint ? constructLocation(ubis.geo) : undefined,
    inlineMessageId: ubis.msg_id === undefined ? undefined : base64EncodeUrlSafe(ubis.msg_id[serialize]()),
    query: ubis.query,
  };
}
