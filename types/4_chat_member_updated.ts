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
import { ChatP, PeerGetter } from "./1_chat_p.ts";
import { constructUser2, User } from "./2_user.ts";
import { ChatMember, constructChatMember } from "./3_chat_member.ts";
import { constructInviteLink, InviteLink } from "./3_invite_link.ts";

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
  const userPeer = getPeer({ _: "peerUser", user_id: update.actor_id });
  if (!peer || !userPeer) {
    unreachable();
  }
  const chat = peer[0];
  const from = constructUser2(userPeer[0]);
  const date = update.date;
  // TODO
  const oldChatMember = constructChatMember(update.prev_participant ?? ({ _: "channelParticipantLeft", peer: userPeer }), getPeer);
  const newChatMember = constructChatMember(update.new_participant ?? ({ _: "channelParticipantLeft", peer: userPeer }), getPeer);
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
