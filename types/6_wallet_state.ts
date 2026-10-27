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

import { base64EncodeUrlSafe, cleanObject } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";
import { getTonAmount } from "./5_ton_transaction.ts";

/**
 * A user's wallet state.
 */
export interface WalletState {
  /** The wallet's address. */
  address: string;
  /** The wallet's public key. */
  publicKey: string;
  /** Whether backup is enabled. */
  isBackupEnabled: boolean;
  /** Whether the secret phrase is exportable. */
  isSecretPhraseExportable: boolean;
  /** Whether backup is enableable. */
  isBackupEnableable: boolean;
  /** The balance of the wallet. */
  balance: number;
}

export function constructWalletState(wua: Api.walletState): WalletState {
  const address = wua.address;
  const publicKey = base64EncodeUrlSafe(wua.public_key);
  const isBackupEnabled = !!wua.backup_enabled;
  const isSecretPhraseExportable = !!wua.can_export_phrase;
  const isBackupEnableable = !!wua.can_enable_backup;
  const balance = getTonAmount({ _: "starsTonAmount", amount: wua.balance });

  return cleanObject({
    address,
    publicKey,
    isBackupEnabled,
    isSecretPhraseExportable,
    isBackupEnableable,
    balance,
  });
}
