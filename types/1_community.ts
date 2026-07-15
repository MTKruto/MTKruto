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
import { type ChatPhoto, constructChatPhoto } from "./0_chat_photo.ts";

export interface Community {
  isCreator: boolean;
  id: number;
  name: string;
  photo?: ChatPhoto;
  isLeft: boolean;
  isShownAsOneChat: boolean;
  administratorRights?: ChatAdministratorRights;
  defaultPermissions?: ChatMemberRights;
}

export function constructCommunity(community: Api.community): Community {
  if (community.min) {
    unreachable();
  }
  const isCreator = !!community.creator;
  const id = Number(community.id);
  const name = community.title;
  const photo = Api.is("chatPhotoEmpty", community.photo) ? undefined : constructChatPhoto(community.photo, Api.getChannelChatId(community.id), community.access_hash ?? 0n);
  const isLeft = !!community.left;
  const isShownAsOneChat = !!community.collapsed_in_dialogs;
  const administratorRights = community.admin_rights ? constructChatAdministratorRights(community.admin_rights) : undefined;
  const defaultPermissions = community.default_banned_rights ? constructChatMemberRights(community.default_banned_rights) : undefined;
  return cleanObject({ isCreator, id, name, photo, isLeft, isShownAsOneChat, administratorRights, defaultPermissions });
}
