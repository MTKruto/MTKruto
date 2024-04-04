import { fromUnixTimestamp } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { EntityGetter } from "./_getters.ts";
import { constructUser, User } from "./1_user.ts";

export interface BusinessConnection {
  id: string;
  user: User;
  date: Date;
  canReply: boolean;
  isEnabled: boolean;
}

export async function constructBusinessConnection(connection: types.BotBusinessConnection, getEntity: EntityGetter): Promise<BusinessConnection> {
  return {
    id: connection.connection_id,
    user: constructUser((await getEntity(new types.PeerUser(connection)))!),
    date: fromUnixTimestamp(connection.date),
    canReply: !!connection.can_reply,
    isEnabled: !connection.disabled,
  };
}
