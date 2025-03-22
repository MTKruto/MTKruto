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
import { cleanObject, fromUnixTimestamp } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { EntityGetter } from "./_getters.ts";
import { ChatP, constructChatP } from "./1_chat_p.ts";
import { constructUser, User } from "./1_user.ts";
import { constructInviteLink, InviteLink } from "./2_invite_link.ts";

/** A join request. */
export interface JoinRequest {
  /** The chat that the user requested to join. */
  chat: ChatP;
  /** The user who made the join request. */
  user: User;
  /** The point in time in which the join request was made. */
  date: Date;
  /** The bio of the user who made the join request. */
  bio?: string;
  /** The invite link that the user used to make the join request. */
  inviteLink?: InviteLink;
}

export async function constructJoinRequest(update: Api.updateBotChatInviteRequester, getEntity: EntityGetter): Promise<JoinRequest> {
  const chat_ = await getEntity(update.peer);
  if (!chat_) {
    unreachable();
  }
  const chat = constructChatP(chat_);
  const user_ = await getEntity({ _: "peerUser", user_id: update.user_id });
  if (!user_) {
    unreachable();
  }
  const user = constructUser(user_);
  const inviteLink = update.invite && Api.is("chatInviteExported", update.invite) ? await constructInviteLink(update.invite, getEntity) : undefined;
  return cleanObject({
    chat,
    user,
    date: fromUnixTimestamp(update.date),
    bio: update.about,
    inviteLink,
  });
}
