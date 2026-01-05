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
import { type ChatAdministratorRights, constructChatAdministratorRights } from "./0_chat_administrator_rights.ts";
import { type ChatMemberRights, constructChatMemberRights } from "./0_chat_member_rights.ts";
import type { ChatP, PeerGetter } from "./1_chat_p.ts";

/** @unlisted */
export type ChatMemberStatus = "creator" | "administrator" | "member" | "restricted" | "left" | "banned";

/** @unlisted */
export interface _ChatMemberBase {
  status: ChatMemberStatus;
  member: ChatP;
}

/** @unlisted */
export interface ChatMemberCreator extends _ChatMemberBase {
  status: "creator";
  isAnonymous: boolean;
  title?: string;
}

/** @unlisted */
export interface ChatMemberAdministrator extends _ChatMemberBase {
  status: "administrator";
  rights: ChatAdministratorRights;
  title?: string;
}

/** @unlisted */
export interface ChatMemberMember extends _ChatMemberBase {
  status: "member";
  until?: number;
}

/** @unlisted */
export interface ChatMemberRestricted extends _ChatMemberBase {
  status: "restricted";
  isMember: boolean;
  rights: ChatMemberRights;
  until?: number;
}

/** @unlisted */
export interface ChatMemberLeft extends _ChatMemberBase {
  status: "left";
}

/** @unlisted */
export interface ChatMemberBanned extends _ChatMemberBase {
  status: "banned";
  until?: number;
}

/** A chat member. */
export type ChatMember = ChatMemberCreator | ChatMemberAdministrator | ChatMemberMember | ChatMemberRestricted | ChatMemberLeft | ChatMemberBanned;

export function constructChatMember(member: ChatP, participant: Api.ChannelParticipant | Api.ChatParticipant | (Omit<Api.ChannelParticipant, "peer"> & { peer: ReturnType<typeof getPeer> }), getPeer: PeerGetter): ChatMember {
  const peer = "user_id" in participant ? getPeer({ ...participant, _: "peerUser" }) : "peer" in participant ? Array.isArray(participant.peer) ? participant.peer : Api.is("peerUser", participant.peer) ? getPeer(participant.peer) : unreachable() : unreachable(); // TODO: support other peer types
  if (peer === null || peer[0].type !== "private") unreachable();
  if (Api.is("channelParticipant", participant) || Api.is("chatParticipant", participant)) {
    return {
      status: "member",
      member,
    };
  } else if (Api.is("channelParticipantCreator", participant)) {
    return cleanObject({
      status: "creator",
      member,
      isAnonymous: participant.admin_rights.anonymous ? true : false,
      title: participant.rank,
    });
  } else if (Api.is("channelParticipantAdmin", participant)) {
    return cleanObject({
      status: "administrator",
      member,
      rights: constructChatAdministratorRights(participant.admin_rights),
      title: participant.rank,
    });
  } else if (Api.is("channelParticipantBanned", participant)) {
    const until = participant.banned_rights.until_date ? participant.banned_rights.until_date : undefined;
    if (!participant.banned_rights.view_messages) {
      participant.peer;
      return cleanObject({
        status: "banned",
        member,
        until,
      });
    }
    const isMember = participant.left ? true : false;
    const rights = constructChatMemberRights(participant.banned_rights);
    return cleanObject({
      status: "restricted",
      member,
      isMember,
      rights,
      until,
    });
  } else if (Api.is("channelParticipantSelf", participant)) {
    const until = participant.subscription_until_date ? participant.subscription_until_date : undefined;
    return cleanObject({
      status: "member",
      member,
      until,
    });
  } else if (Api.is("channelParticipantLeft", participant)) {
    return { status: "left", member };
  } else if (Api.is("chatParticipantAdmin", participant)) {
    return cleanObject({
      status: "administrator",
      member,
      rights: {
        isAnonymous: false,
        canManageChat: true,
        canDeleteMessages: true,
        canManageVideoChats: false,
        canRestrictMembers: true,
        canPromoteMembers: false,
        canChangeInfo: true,
        canInviteUsers: true,
        canPostMessages: false,
        canEditMessages: false,
        canPinMessages: true,
        canManageTopics: false,
        canDeleteStories: false,
        canEditStories: false,
        canManageDirectMessages: false,
        canPostStories: false,
      },
    });
  } else if (Api.is("chatParticipantCreator", participant)) {
    return cleanObject({
      status: "creator",
      member,
      isAnonymous: false,
    });
  } else {
    unreachable();
  }
}
