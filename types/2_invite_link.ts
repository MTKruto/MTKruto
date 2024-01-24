import { cleanObject, fromUnixTimestamp, UNREACHABLE } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { EntityGetter } from "./1__getters.ts";
import { constructUser, User } from "./1_user.ts";

/** A chat invite link. */
export interface InviteLink {
  /** The link itself. */
  inviteLink: string;
  /** The user who created the invite link. */
  creator: User;
  /** Whether the invite link requires explicit approval from administrators. */
  createsJoinRequest: boolean;
  // TODO: primary?
  /** Whether the invite link is revoked. */
  revoked: boolean;
  /** An optional name. */
  name?: string;
  /** The point of time in which the invite link is expired at. */
  expiresAt?: Date;
  /** The number of times the invite link can be used. */
  limit?: number;
  /** The number of pending join requests from this invite link. */
  pendingJoinRequestCount?: number;
}

export async function constructInviteLink(inviteLink_: types.ChatInviteExported, getEntity: EntityGetter): Promise<InviteLink> {
  const entity = await getEntity(new types.PeerUser({ user_id: inviteLink_.admin_id }));
  if (!entity) {
    UNREACHABLE();
  }
  const inviteLink = inviteLink_.link;
  const creator = constructUser(entity);
  const createsJoinRequest = inviteLink_.request_needed ? true : false;
  const revoked = inviteLink_.revoked ? true : false;
  const name = inviteLink_.title;
  const expiresAt = inviteLink_.expire_date ? fromUnixTimestamp(inviteLink_.expire_date) : undefined;
  const limit = inviteLink_.usage_limit ? inviteLink_.usage_limit : undefined;
  const pendingJoinRequestCount = inviteLink_.requested;
  return cleanObject({
    inviteLink,
    creator,
    createsJoinRequest,
    revoked,
    name,
    expiresAt,
    limit,
    pendingJoinRequestCount,
  });
}
