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
import { cleanObject, decodeText } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { constructStarAmount, type StarAmount } from "./0_star_amount.ts";
import type { ChatP, PeerGetter } from "./1_chat_p.ts";
import { constructStarTransactionPeer, type StarTransactionPeer } from "./2_star_transaction_peer.ts";
import { constructGift, type Gift } from "./4_gift.ts";

/** A star transaction. */
export interface StarTransaction {
  isRefund: boolean;
  isPending: boolean;
  isFailed: boolean;
  isGift: boolean;
  isReaction: boolean;
  isGiftUpgrade: boolean;
  isBusinessTransfer: boolean;
  isGiftResale: boolean;
  isPostSearch: boolean;
  isGiftPrepaidUpgrade: boolean;
  isGiftDetailDrop: boolean;
  isPhoneGroupMessage: boolean;
  isGiftAuctionBid: boolean;
  isOffer: boolean;
  id: string;
  amount: StarAmount;
  date: number;
  peer: StarTransactionPeer;
  title?: string;
  description?: string;
  transactionDate?: number;
  transactionUrl?: string;
  botPayload?: string;
  messageId?: number;
  subscriptionPeriod?: number;
  giveawayMessageId?: number;
  gift?: Gift;
  broadcastNumber?: number;
  starrefCommissionPerMille?: number;
  starrefChat?: ChatP;
  starrefAmount?: StarAmount;
  paidMessages?: number;
  premiumGiftMonthCount?: number;
  adsProceedsFromDate?: number;
  adsProceedsToDate?: number;
}

export function constructStarTransaction(starTransaction: Api.StarsTransaction, getPeer: PeerGetter): StarTransaction {
  let starrefChat: ChatP | undefined;
  if (starTransaction.starref_peer) {
    starrefChat = getPeer(starTransaction.starref_peer)?.[0];
    if (!starrefChat) {
      unreachable();
    }
  }

  return cleanObject({
    isRefund: starTransaction.refund ?? false,
    isPending: starTransaction.pending ?? false,
    isFailed: starTransaction.failed ?? false,
    isGift: starTransaction.gift ?? false,
    isReaction: starTransaction.reaction ?? false,
    isGiftUpgrade: starTransaction.stargift_upgrade ?? false,
    isBusinessTransfer: starTransaction.business_transfer ?? false,
    isGiftResale: starTransaction.stargift_resale ?? false,
    isPostSearch: starTransaction.posts_search ?? false,
    isGiftPrepaidUpgrade: starTransaction.stargift_prepaid_upgrade ?? false,
    isGiftDetailDrop: starTransaction.stargift_drop_original_details ?? false,
    isPhoneGroupMessage: starTransaction.phonegroup_message ?? false,
    isGiftAuctionBid: starTransaction.stargift_auction_bid ?? false,
    isOffer: starTransaction.offer ?? false,
    id: starTransaction.id,
    amount: constructStarAmount(Api.as("starsAmount", starTransaction.amount)),
    date: starTransaction.date,
    peer: constructStarTransactionPeer(starTransaction.peer, getPeer),
    title: starTransaction.title,
    description: starTransaction.description,
    transactionDate: starTransaction.transaction_date,
    transactionUrl: starTransaction.transaction_url,
    botPayload: starTransaction.bot_payload ? decodeText(starTransaction.bot_payload) : undefined,
    messageId: starTransaction.msg_id,
    subscriptionPeriod: starTransaction.subscription_period,
    giveawayMessageId: starTransaction.giveaway_post_id,
    gift: starTransaction.stargift ? constructGift(starTransaction.stargift, getPeer) : undefined,
    broadcastNumber: starTransaction.floodskip_number,
    starrefCommissionPerMille: starTransaction.starref_commission_permille,
    starrefChat,
    starrefAmount: starTransaction.starref_amount ? constructStarAmount(Api.as("starsAmount", starTransaction.starref_amount)) : undefined,
    paidMessages: starTransaction.paid_messages,
    premiumGiftMonthCount: starTransaction.premium_gift_months,
    adsProceedsFromDate: starTransaction.ads_proceeds_from_date,
    adsProceedsToDate: starTransaction.ads_proceeds_to_date,
  });
}
