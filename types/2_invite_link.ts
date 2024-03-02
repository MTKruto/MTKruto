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
  /** Whether an admin must explicitly approve join requests originating from this invite link. */
  requiresApproval: boolean;
  // TODO: primary?
  /** Whether the invite link is revoked. */
  revoked: boolean;
  /** An optional title. */
  title?: string;
  /** The point of time in which the invite link is expired at. */
  expiresAt?: Date;
  /** The times the invite link can be used. */
  limit?: number;
  /** The number of pending join requests originating from this invite link. */
  pendingJoinRequestCount?: number;
}

export async function constructInviteLink(inviteLink_: types.ChatInviteExported, getEntity: EntityGetter): Promise<InviteLink> {
  const entity = await getEntity(new types.PeerUser({ user_id: inviteLink_.admin_id }));
  if (!entity) {
    UNREACHABLE();
  }
  const inviteLink = inviteLink_.link;
  const creator = constructUser(entity);
  const requiresApproval = inviteLink_.request_needed ? true : false;
  const revoked = inviteLink_.revoked ? true : false;
  const title = inviteLink_.title;
  const expiresAt = inviteLink_.expire_date ? fromUnixTimestamp(inviteLink_.expire_date) : undefined;
  const limit = inviteLink_.usage_limit ? inviteLink_.usage_limit : undefined;
  const pendingJoinRequestCount = inviteLink_.requested;
  return cleanObject({
    inviteLink,
    creator,
    requiresApproval,
    revoked,
    title,
    expiresAt,
    limit,
    pendingJoinRequestCount,
  });
}
