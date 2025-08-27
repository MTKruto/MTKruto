/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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
import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
<<<<<<< HEAD:types/4_join_request.ts
import { ChatP, PeerGetter } from "./1_chat_p.ts";
import { constructUser2, User } from "./2_user.ts";
import { constructInviteLink, InviteLink } from "./3_invite_link.ts";
=======
import type { EntityGetter } from "./_getters.ts";
import { type ChatP, constructChatP } from "./1_chat_p.ts";
import { constructUser, type User } from "./1_user.ts";
import { constructInviteLink, type InviteLink } from "./2_invite_link.ts";
>>>>>>> main:types/3_join_request.ts

/** A join request. */
export interface JoinRequest {
  /** The chat that the user requested to join. */
  chat: ChatP;
  /** The user who made the join request. */
  from: User;
  /** The point in time in which the join request was made. */
  date: number;
  /** The bio of the user who made the join request. Bot-only. */
  bio?: string;
  /** The invite link that the user used to make the join request. Bot-only. */
  inviteLink?: InviteLink;
}

export function constructJoinRequest(update: Api.updateBotChatInviteRequester, getPeer: PeerGetter): JoinRequest {
  const peer = getPeer(update.peer);
  if (!peer) {
    unreachable();
  }
  const chat = peer[0];
  const userPeer = getPeer({ _: "peerUser", user_id: update.user_id });
  if (!userPeer) {
    unreachable();
  }
  const from = constructUser2(userPeer[0]);
  const inviteLink = update.invite && Api.is("chatInviteExported", update.invite) ? constructInviteLink(update.invite, getPeer) : undefined;
  return cleanObject({
    chat,
    from,
    date: update.date,
    bio: update.about,
    inviteLink,
  });
}

export function constructJoinRequest2(peer: Api.Peer, inviteImporter: Api.ChatInviteImporter, getPeer: PeerGetter): JoinRequest {
  const peer_ = getPeer(peer);
  if (!peer_) {
    unreachable();
  }
  const chat = peer_[0];
  const userPeer = getPeer({ _: "peerUser", user_id: inviteImporter.user_id });
  if (!userPeer) {
    unreachable();
  }
  const from = constructUser2(userPeer[0]);
  return cleanObject({
    chat,
    from,
    date: inviteImporter.date,
    bio: inviteImporter.about,
  });
}
