/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { unreachable } from "../0_deps.ts";
import { cleanObject, fromUnixTimestamp } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { EntityGetter } from "./_getters.ts";
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
  /** A point in time within the future in which the ban will be reverted. */
  expiresAt?: Date;
  /** The times the invite link can be used. */
  limit?: number;
  /** The number of pending join requests originating from this invite link. */
  pendingJoinRequestCount?: number;
}

export async function constructInviteLink(inviteLink_: types.ChatInviteExported, getEntity: EntityGetter): Promise<InviteLink> {
  const entity = await getEntity(new types.PeerUser({ user_id: inviteLink_.admin_id }));
  if (!entity) {
    unreachable();
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
