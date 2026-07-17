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
import type { PeerGetter } from "./1_chat_p.ts";
import { constructPhoto, type Photo } from "./1_photo.ts";
import { type CommunityChat, constructCommunityChat } from "./2_community_chat.ts";

/** A community. */
export interface Community {
  /** Whether the current user is the owner of the community. */
  isCreator: boolean;
  /** The identifier of the community. */
  id: number;
  /** The community's name. */
  name: string;
  /** The community's description. */
  description?: string;
  /** The community's photo. */
  photo?: Photo;
  /** Whether the current account has left the community. */
  isLeft: boolean;
  /** Whether the community is shown as one chat. */
  isShownAsOneChat: boolean;
  /** Rights of community administrators. */
  administratorRights?: ChatAdministratorRights;
  /** Default permissions of community members. */
  defaultPermissions?: ChatMemberRights;
  /** The number of administrators in the community. */
  adminCount: number;
  /** The chats in the community. */
  chats: CommunityChat[];
}

export function constructCommunity(community: Api.community, full: Api.communityFull, getPeer: PeerGetter): Community {
  if (community.min) {
    unreachable();
  }
  const isCreator = !!community.creator;
  const id = Number(community.id);
  const name = community.title;
  const description = full.about || undefined;
  const photo = Api.is("photoEmpty", full.chat_photo) ? undefined : constructPhoto(full.chat_photo);
  const isLeft = !!community.left;
  const isShownAsOneChat = !!community.collapsed_in_dialogs;
  const administratorRights = community.admin_rights ? constructChatAdministratorRights(community.admin_rights) : undefined;
  const defaultPermissions = community.default_banned_rights ? constructChatMemberRights(community.default_banned_rights) : undefined;
  const adminCount = full.admins_count ?? 0;
  const chats = full.linked_peers.map((v) => constructCommunityChat(v, getPeer));
  return cleanObject({
    isCreator,
    id,
    name,
    description,
    photo,
    isLeft,
    isShownAsOneChat,
    administratorRights,
    defaultPermissions,
    adminCount,
    chats,
  });
}
