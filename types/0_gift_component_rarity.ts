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
import type { Api } from "../2_tl.ts";

/** @unlisted */
export interface GiftComponentRarityPerMille {
  type: "perMille";
  perMille: number;
}

/** @unlisted */
export interface GiftComponentRarityUncommon {
  type: "uncommon";
}

/** @unlisted */
export interface GiftComponentRarityRare {
  type: "rare";
}

/** @unlisted */
export interface GiftComponentRarityEpic {
  type: "epic";
}

/** @unlisted */
export interface GiftComponentRarityLegendary {
  type: "legendary";
}

export type GiftComponentRarity = GiftComponentRarityPerMille | GiftComponentRarityUncommon | GiftComponentRarityRare | GiftComponentRarityEpic | GiftComponentRarityLegendary;

export function constructGiftComponentRarity(rarity: Api.StarGiftAttributeRarity): GiftComponentRarity {
  switch (rarity._) {
    case "starGiftAttributeRarity":
      return {
        type: "perMille",
        perMille: rarity.permille,
      };
    case "starGiftAttributeRarityUncommon":
      return {
        type: "uncommon",
      };
    case "starGiftAttributeRarityRare":
      return {
        type: "rare",
      };
    case "starGiftAttributeRarityEpic":
      return { type: "epic" };
    case "starGiftAttributeRarityLegendary":
      return { type: "legendary" };
    default:
      unreachable();
  }
}
