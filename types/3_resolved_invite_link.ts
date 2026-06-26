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

/** A resolved invite link. */
export interface ResolvedInviteLink {
  /** The type of the chat. */
  type: "group" | "supergroup" | "channel";
  /** Whether the chat is public. */
  isPublic: boolean;
  /** Whether approval is needed by an admin of the chat prior to joining. */
  isApprovalNeeded: boolean;
  /** Whether the chat is verified. */
  isVerified: boolean;
  /** Whether the chat has been identified as a scam. */
  isScam: boolean;
  /** Whether the chat has been identifier as a fake. */
  isFake: boolean;
  /** Whether no repayment is required to join the chat. */
  isAlreadySubscribed: boolean;
  /** The title of the chat. */
  title: string;
  /** The description of the chat. */
  description?: string;
  /** The chat's photo. */
  photo?: Photo;
  /** The chat's member count. */
  memberCount: number;
  /** A preview of the chat's members. */
  members: User[];
  /** The chat's color. */
  color: number;
  /** The chat's subscription period. */
  subscriptionPeriod?: number;
  /** The chat's subscription price. */
  subscriptionPrice?: number;
  /** The chat verification bot's identifier. */
  verificationBotId?: number;
  /** The chat verification's custom emoji identifier. */
  verificationCustomEmojiId?: number;
  /** The chat verification's description. */
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
