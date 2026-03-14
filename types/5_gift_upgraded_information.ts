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
import type { ChatP, PeerGetter } from "./1_chat_p.ts";
import { constructGiftUpgraded, type GiftUpgraded } from "./4_gift.ts";

/** Information on an upgraded gift. */
export interface GiftUpgradedInformation {
  isUpgraded: boolean;
  isTransferred: boolean;
  isSaved: boolean;
  isRefunded: boolean;
  isPrepaidUpgrade: boolean;
  gift: GiftUpgraded;
  exportableAt?: number;
  transferPrice?: number;
  from?: ChatP;
  to?: ChatP;
  inputId?: string;
  resalePrice?: number;
  transferrableAt?: number;
  resellableAt?: number;
}

export function constructGiftUpgradedInformation(action: Api.messageActionStarGiftUnique, getPeer: PeerGetter): GiftUpgradedInformation {
  const isUpgraded = action.upgrade ? true : false;
  const isTransferred = action.transferred ? true : false;
  const isSaved = action.saved ? true : false;
  const isRefunded = action.refunded ? true : false;
  const isPrepaidUpgrade = action.prepaid_upgrade ? true : false;
  const gift = constructGiftUpgraded(Api.as("starGiftUnique", action.gift), getPeer);
  const exportableAt = action.can_export_at;
  const transferPrice = action.transfer_stars ? Number(action.transfer_stars) : undefined;
  const from = action.from_id ? getPeer(action.from_id)?.[0] : undefined;
  const to = action.peer ? getPeer(action.peer)?.[0] : undefined;
  const inputId = action.saved_id ? String(action.saved_id) : undefined;
  const resalePrice = action.resale_amount ? Number(action.resale_amount) : undefined;
  const transferrableAt = action.can_transfer_at;
  const resellableAt = action.can_resell_at;

  if ((action.from_id && !from) || (action.peer && !to)) {
    unreachable();
  }

  return cleanObject({
    isUpgraded,
    isTransferred,
    isSaved,
    isRefunded,
    isPrepaidUpgrade,
    gift,
    exportableAt,
    transferPrice,
    from,
    to,
    inputId,
    resalePrice,
    transferrableAt,
    resellableAt,
  });
}
