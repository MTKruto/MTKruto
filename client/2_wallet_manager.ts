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

import { InputError } from "../0_errors.ts";
import { Api } from "../2_tl.ts";
import { constructWalletAddress, constructWalletState, type ID, type WalletAddress, type WalletState } from "../3_types.ts";
import type { C } from "./1_types.ts";

export class WalletManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async getWalletAddresses(userId: ID): Promise<WalletAddress[]> {
    this.#c.storage.assertUser("getWalletAddresses");
    const inputUser = await this.#c.getInputUser(userId);
    const result = await this.#c.invoke({
      _: "wallet.getUserAddresses",
      addresses: [],
      id: [inputUser],
    });

    return result.addresses.map((v) => constructWalletAddress(v, this.#c.getPeer));
  }

  async getWalletState(): Promise<WalletState> {
    this.#c.storage.assertUser("getWalletState");
    const result = await this.#c.invoke({ _: "wallet.getState" });
    if (Api.is("walletStateEmpty", result)) {
      throw new InputError("Wallet state is unavailable.");
    }

    return constructWalletState(result);
  }
}
