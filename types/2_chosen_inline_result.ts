import { base64EncodeUrlSafe, cleanObject, UNREACHABLE } from "../1_utilities.ts";
import { serialize, types } from "../2_tl.ts";
import { constructLocation, Location } from "./0_location.ts";
import { EntityGetter } from "./1__getters.ts";
import { constructUser, User } from "./1_user.ts";

/** A chosen inline result. */
export interface ChosenInlineResult {
  /** The identifier of the inline result that was chosen. */
  resultId: string;
  /** The user who chose the result. */
  from: User;
  /** The location of the user who chose the result. */
  location?: Location;
  /** Identifier of the sent inline message. */
  inlineMessageId?: string;
  /** The query that was used to obtain the result. */
  query: string;
}

export async function constructChosenInlineResult(ubis: types.UpdateBotInlineSend, getEntity: EntityGetter): Promise<ChosenInlineResult> {
  const entity = await getEntity(new types.PeerUser(ubis));
  if (!entity || !(entity instanceof types.User)) {
    UNREACHABLE();
  }
  return cleanObject({
    resultId: ubis.id,
    from: constructUser(entity),
    location: ubis.geo instanceof types.GeoPoint ? constructLocation(ubis.geo) : undefined,
    inlineMessageId: ubis.msg_id === undefined ? undefined : base64EncodeUrlSafe(ubis.msg_id[serialize]()),
    query: ubis.query,
  });
}
