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

import { assert, assertEquals, concat, ige256Encrypt } from "../0_deps.ts";
import { bigIntFromBuffer, modExp } from "./0_bigint.ts";
import { bufferFromBigInt } from "./0_buffer.ts";
import { sha256 } from "./0_hash.ts";

export async function rsaPad(data: Uint8Array, [serverKey, exponent]: [bigint, bigint]) {
  assert(data.length <= 144);

  let keyAesEncryptedInt: bigint;
  let tries = 0;

  do {
    if (++tries == 10) {
      throw new Error("Out of tries");
    }

    const dataWithPadding = concat([data, new Uint8Array(192 - data.length)]);
    const dataPadReversed = new Uint8Array(dataWithPadding).reverse();

    const tempKey = crypto.getRandomValues(new Uint8Array(32));

    const dataWithHash = concat([dataPadReversed, await sha256(concat([tempKey, dataWithPadding]))]);
    const aesEncrypted = ige256Encrypt(dataWithHash, tempKey, new Uint8Array(32));

    const aesEncryptedSha256 = await sha256(aesEncrypted);
    const tempKeyXor = tempKey.map((v, i) => v ^ aesEncryptedSha256[i]);

    const keyAesEncrypted = concat([tempKeyXor, aesEncrypted]);
    assertEquals(keyAesEncrypted.length, 256);

    keyAesEncryptedInt = bigIntFromBuffer(keyAesEncrypted, false, false);
  } while (keyAesEncryptedInt >= serverKey);

  const encryptedDataInt = modExp(keyAesEncryptedInt, exponent, serverKey);
  const encryptedData = bufferFromBigInt(encryptedDataInt, 256, false, false);
  assertEquals(encryptedData.length, 256);

  return encryptedData;
}
