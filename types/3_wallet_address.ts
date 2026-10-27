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
import { base64EncodeUrlSafe, cleanObject } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";
import type { PeerGetter } from "./1_chat_p.ts";
import { constructUser2, type User } from "./2_user.ts";

/**
 * A user's wallet address.
 */
export interface WalletAddress {
  /** The wallet's address. */
  address: string;
  /** The wallet's public key. */
  publicKey: string;
  /** The owner of the wallet. */
  user?: User;
}

export function constructWalletAddress(wua: Api.walletUserAddress, getPeer: PeerGetter): WalletAddress {
  const address = wua.address;
  const publicKey = base64EncodeUrlSafe(wua.public_key);
  let user: User | undefined;
  if (wua.user_id) {
    const peer = getPeer({ _: "peerUser", user_id: wua.user_id });
    if (peer === null) unreachable();

    user = constructUser2(peer[0]);
  }

  return cleanObject({
    address,
    publicKey,
    user,
  });
}
