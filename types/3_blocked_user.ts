/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
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
import type { Api } from "../2_tl.ts";
import type { PeerGetter } from "./1_chat_p.ts";
import { constructUser2, type User } from "./2_user.ts";

/** A blocked user. */
export interface BlockedUser {
  /** The blocked user. */
  user: User;
  /** The point in time when the user was blocked. */
  blockedAt: number;
}

export function constructBlockedUser(peerBlocked: Api.PeerBlocked, getPeer: PeerGetter): BlockedUser {
  const maybeChatP = getPeer(peerBlocked.peer_id);
  if (maybeChatP === null || maybeChatP[0].type !== "private") {
    unreachable();
  }

  const user = constructUser2(maybeChatP[0]);
  const blockedAt = peerBlocked.date;

  return {
    user,
    blockedAt,
  };
}
