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
import { constructGiftNonUpgraded } from "../3_types.ts";
import type { ChatP, PeerGetter } from "./1_chat_p.ts";
import { constructMessageEntity, type MessageEntity } from "./2_message_entity.ts";
import type { GiftNonUpgraded } from "./4_gift.ts";

/** Information on a non-upgraded gift. */
export interface GiftNonUpgradedInformation {
  isNameHidden: boolean;
  isSaved: boolean;
  isConverted: boolean;
  isUpgraded: boolean;
  isRefunded: boolean;
  isUpgradable: boolean;
  isPrepaidUpgrade: boolean;
  isUpgradedSeparately: boolean;
  gift: GiftNonUpgraded;
  message?: string;
  messageEntities?: MessageEntity[];
  conversionPrice?: number;
  upgradeMessageId?: number;
  upgradePrice?: number;
  from?: ChatP;
  to?: ChatP;
  inputId?: string;
  prepaidUpgradeHash?: string;
  giftMessageId?: number;
}

export function constructGiftNonUpgradedInformation(action: Api.messageActionStarGift, getPeer: PeerGetter): GiftNonUpgradedInformation {
  const isNameHidden = action.name_hidden ? true : false;
  const isSaved = action.saved ? true : false;
  const isConverted = action.converted ? true : false;
  const isUpgraded = action.upgraded ? true : false;
  const isRefunded = action.refunded ? true : false;
  const isUpgradable = action.can_upgrade ? true : false;
  const isPrepaidUpgrade = action.prepaid_upgrade ? true : false;
  const isUpgradedSeparately = action.upgrade_separate ? true : false;
  const gift = constructGiftNonUpgraded(Api.as("starGift", action.gift));
  const message = action.message?.text;
  const messageEntities = action.message?.entities.map((v) => constructMessageEntity(v)).filter((v) => v !== null);
  const conversionPrice = action.convert_stars ? Number(action.convert_stars) : undefined;
  const upgradeMessageId = action.upgrade_msg_id;
  const upgradePrice = action.upgrade_stars ? Number(action.upgrade_stars) : undefined;
  const from = action.from_id ? getPeer(action.from_id)?.[0] : undefined;
  const to = action.to_id ? getPeer(action.to_id)?.[0] : undefined;
  const inputId = action.saved_id ? String(action.saved_id) : undefined;
  const prepaidUpgradeHash = action.prepaid_upgrade_hash;
  const giftMessageId = action.gift_msg_id;

  if ((action.from_id && !from) || (action.to_id && !to)) {
    unreachable();
  }

  return cleanObject({
    isNameHidden,
    isSaved,
    isConverted,
    isUpgraded,
    isRefunded,
    isUpgradable,
    isPrepaidUpgrade,
    isUpgradedSeparately,
    gift,
    message,
    messageEntities,
    conversionPrice,
    upgradeMessageId,
    upgradePrice,
    from,
    to,
    inputId,
    prepaidUpgradeHash,
    giftMessageId,
  });
}
