import { UNREACHABLE } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { constructLocation, Location } from "./0_location.ts";
import { EntityGetter } from "./1__getters.ts";
import { constructUser, User } from "./1_user.ts";

export interface InlineQuery {
  /** Unique identifier for this query */
  id: string;
  /** The user who made this query */
  from: User;
  /** The text of the query */
  query: string;
  /** Result offset */
  offset: string;
  /** Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat */
  chatType?: "sender" | "private" | "group" | "supergroup" | "channel";
  /** The location of the user who made this query */
  location?: Location;
}

export async function constructInlineQuery(query_: types.UpdateBotInlineQuery, getEntity: EntityGetter): Promise<InlineQuery> {
  const user_ = await getEntity(new types.PeerUser({ userId: query_.userId }));
  if (user_ == null) {
    UNREACHABLE();
  }

  const user = constructUser(user_);

  let chatType: InlineQuery["chatType"] | undefined;
  if (query_.peerType !== undefined) {
    if (query_.peerType instanceof types.InlineQueryPeerTypeSameBotPM) {
      chatType = "private";
    } else if (query_.peerType instanceof types.InlineQueryPeerTypeBotPM || query_.peerType instanceof types.InlineQueryPeerTypePM) {
      chatType = "sender";
    } else if (query_.peerType instanceof types.InlineQueryPeerTypeChat) {
      chatType = "group";
    } else if (query_.peerType instanceof types.InlineQueryPeerTypeMegagroup) {
      chatType = "supergroup";
    } else if (query_.peerType instanceof types.InlineQueryPeerTypeBroadcast) {
      chatType = "channel";
    } else {
      UNREACHABLE();
    }
  }

  const location = query_.geo !== undefined && query_.geo instanceof types.GeoPoint ? constructLocation(query_.geo) : undefined;

  return {
    id: String(query_.queryId),
    from: user,
    query: query_.query,
    offset: query_.offset,
    chatType,
    location,
  };
}
