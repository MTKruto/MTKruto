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

import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { constructPhoto, type Photo } from "./1_photo.ts";
import { constructUser, type User } from "./2_user.ts";

export interface ResolvedInviteLink {
  type: "group" | "supergroup" | "channel";
  isPublic: boolean;
  isApprovalNeeded: boolean;
  isVerified: boolean;
  isScam: boolean;
  isFake: boolean;
  isAlreadySubscribed: boolean;
  title: string;
  description?: string;
  photo?: Photo;
  memberCount: number;
  members: User[];
  color: number;
  subscriptionPeriod?: number;
  subscriptionPrice?: number;
  verificationBotId?: number;
  verificationCustomEmojiId?: number;
  verificationDescription?: string;
}

export function constructResolvedInviteLink(il: Api.chatInvite): ResolvedInviteLink {
  return cleanObject({
    type: il.megagroup ? "supergroup" : il.channel ? "channel" : "group",
    isPublic: !!il.public,
    isApprovalNeeded: !!il.request_needed,
    isVerified: !!il.verified,
    isScam: !!il.scam,
    isFake: !!il.fake,
    isAlreadySubscribed: !!il.can_refulfill_subscription,
    title: il.title,
    description: il.about || undefined,
    photo: Api.is("photo", il.photo) ? constructPhoto(il.photo) : undefined,
    memberCount: il.participants_count,
    members: (il.participants ?? []).map((v) => constructUser(Api.as("user", v))),
    color: il.color,
    subscriptionPeriod: il.subscription_pricing?.period,
    subscriptionPrice: il.subscription_pricing?.amount ? Number(il.subscription_pricing.amount) : undefined,
    verificationBotId: il.bot_verification?.bot_id ? Number(il.bot_verification.bot_id) : undefined,
    verificationCustomEmojIid: il.bot_verification?.icon ? String(il.bot_verification.icon) : undefined,
    verificationDescription: il.bot_verification?.description,
  });
}
