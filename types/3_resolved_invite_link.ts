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
