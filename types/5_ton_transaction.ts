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
import type { ChatP, PeerGetter } from "./1_chat_p.ts";
import { constructStarTransactionPeer, type StarTransactionPeer } from "./2_star_transaction_peer.ts";
import { constructGift, type Gift } from "./4_gift.ts";

/** A TON transaction. */
export interface TonTransaction {
  isRefund: boolean;
  isPending: boolean;
  isFailed: boolean;
  isGift: boolean;
  isGiftResale: boolean;
  isPostSearch: boolean;
  isGiftAuctionBid: boolean;
  isOffer: boolean;
  id: string;
  tonAmount: number;
  date: number;
  peer: StarTransactionPeer;
  title?: string;
  description?: string;
  transactionDate?: number;
  transactionUrl?: string;
  messageId?: number;
  gift?: Gift;
  starrefCommissionPerMille?: number;
  starrefChat?: ChatP;
  starrefTonAmount?: number;
  paidMessages?: number;
}

export function getTonAmount(tonAmount: Api.starsTonAmount): number {
  return Number(tonAmount.amount / 10000000n) / 100;
}

export function constructTonTransaction(starTransaction: Api.StarsTransaction, getPeer: PeerGetter): TonTransaction | null {
  if (!Api.is("starsTonAmount", starTransaction.amount)) {
    return null;
  }

  let starrefChat: ChatP | undefined;
  if (starTransaction.starref_peer) {
    starrefChat = getPeer(starTransaction.starref_peer)?.[0];
  }
  const starrefTonAmount = starTransaction.starref_amount && Api.is("starsTonAmount", starTransaction.starref_amount) ? getTonAmount(starTransaction.starref_amount) : undefined;

  return cleanObject({
    isRefund: starTransaction.refund ?? false,
    isPending: starTransaction.pending ?? false,
    isFailed: starTransaction.failed ?? false,
    isGift: starTransaction.gift ?? false,
    isGiftResale: starTransaction.stargift_resale ?? false,
    isPostSearch: starTransaction.posts_search ?? false,
    isGiftAuctionBid: starTransaction.stargift_auction_bid ?? false,
    isOffer: starTransaction.offer ?? false,
    id: starTransaction.id,
    tonAmount: getTonAmount(starTransaction.amount),
    date: starTransaction.date,
    peer: constructStarTransactionPeer(starTransaction.peer, getPeer),
    title: starTransaction.title,
    description: starTransaction.description,
    transactionDate: starTransaction.transaction_date,
    transactionUrl: starTransaction.transaction_url,
    messageId: starTransaction.msg_id,
    gift: starTransaction.stargift ? constructGift(starTransaction.stargift, getPeer) : undefined,
    starrefCommissionPerMille: starTransaction.starref_commission_permille,
    starrefChat,
    starrefTonAmount,
    paidMessages: starTransaction.paid_messages,
  });
}
