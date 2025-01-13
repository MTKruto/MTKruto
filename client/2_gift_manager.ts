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
import { is } from "../2_tl.ts";
import { constructGift, constructUserGifts, ID } from "../3_types.ts";
import { GetUserGiftsParams } from "./0_params.ts";
import { C } from "./1_types.ts";

export class GiftManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async getGifts() {
    const gifts = await this.#c.invoke({ _: "payments.getStarGifts", hash: 0 });
    if (!(is("payments.starGifts", gifts))) {
      unreachable();
    }
    return gifts.gifts.map(constructGift);
  }

  async getUserGifts(userId: ID, params?: GetUserGiftsParams) {
    this.#c.storage.assertUser("getUserGifts");
    const offset = params?.offset ?? "";
    let limit = params?.limit ?? 100;
    if (limit > 100) {
      limit = 100;
    }
    if (limit < 1) {
      limit = 1;
    }
    const user_id = await this.#c.getInputUser(userId);
    const result = await this.#c.invoke({ _: "payments.getUserStarGifts", user_id, offset, limit });
    return constructUserGifts(result);
  }
}
