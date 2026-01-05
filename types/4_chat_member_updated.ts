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
import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import type { ChatP, PeerGetter } from "./1_chat_p.ts";
import { type ChatMember, constructChatMember } from "./2_chat_member.ts";
import { constructUser2, type User } from "./2_user.ts";
import { constructInviteLink, type InviteLink } from "./3_invite_link.ts";

/** Changes made to a chat member. */
export interface ChatMemberUpdated {
  /** The chat in which the change was made. */
  chat: ChatP;
  /** The one who made the change. */
  from: User;
  /** The point in time in which the chat member's status was changed. */
  date: number;
  /** The old status of the chat member. */
  oldChatMember: ChatMember;
  /** The new status of the chat member. */
  newChatMember: ChatMember;
  /** The invite link used to join. */
  inviteLink?: InviteLink;
  /** Whether the user joined from a shared folder. */
  viaSharedFolder?: boolean;
}

export function constructChatMemberUpdated(update: Api.updateChannelParticipant | Api.updateChatParticipant, getPeer: PeerGetter): ChatMemberUpdated {
  if (!update.prev_participant && !update.new_participant) {
    unreachable();
  }
  const peer = getPeer("channel_id" in update ? { channel_id: update.channel_id, _: "peerChannel" } : { chat_id: update.chat_id, _: "peerChat" });
  const actorPeer = getPeer({ _: "peerUser", user_id: update.actor_id });
  const memberPeer = getPeer(update.new_participant && "peer" in update.new_participant ? update.new_participant.peer : update.prev_participant && "peer" in update.prev_participant ? update.prev_participant.peer : { _: "peerUser", user_id: update.user_id });
  if (!peer || !memberPeer || !actorPeer) {
    unreachable();
  }
  const chat = peer[0];
  const from = constructUser2(actorPeer[0]);
  const date = update.date;
  const oldChatMember = constructChatMember(memberPeer[0], update.prev_participant ?? ({ _: "channelParticipantLeft", peer: memberPeer }), getPeer);
  const newChatMember = constructChatMember(memberPeer[0], update.new_participant ?? ({ _: "channelParticipantLeft", peer: memberPeer }), getPeer);
  const viaSharedFolder = "via_chatlist" in update ? update.via_chatlist ? true : update.invite ? false : undefined : undefined;
  const inviteLink = (update.invite && Api.is("chatInviteExported", update.invite)) ? constructInviteLink(update.invite, getPeer) : undefined;
  return cleanObject({
    chat,
    from,
    date,
    oldChatMember,
    newChatMember,
    viaSharedFolder,
    inviteLink,
  });
}
