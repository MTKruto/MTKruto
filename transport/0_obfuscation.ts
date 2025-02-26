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

import { concat } from "../0_deps.ts";
import { bufferFromBigInt, CTR } from "../1_utilities.ts";
import { Connection } from "../2_connection.ts";

export async function getObfuscationParameters(protocol: number, connection: Connection) {
  let init: Uint8Array<ArrayBuffer>;

  while (true) {
    init = concat([crypto.getRandomValues(new Uint8Array(56)), bufferFromBigInt(protocol, 4, false), crypto.getRandomValues(new Uint8Array(4))]);

    if (init[0] == 0xEF) {
      continue;
    }

    const dataView = new DataView(init.buffer, init.byteOffset, init.byteLength);
    const firstInt = dataView.getInt32(0);
    if ([0x44414548, 0x54534F50, 0x20544547, 0x4954504F, 0x02010316, 0xDDDDDDDD, 0xEEEEEEEE].includes(firstInt)) {
      continue;
    }

    const secondInt = dataView.getInt32(4);
    if (secondInt == 0x00000000) {
      continue;
    }

    break;
  }

  const encryptKey = init.slice(8, 8 + 32);
  const encryptIv = init.slice(40, 40 + 16);

  const importedEncryptedKey = await CTR.importKey(encryptKey);
  const encryptionCTR = new CTR(importedEncryptedKey, encryptIv);

  const encryptedInit = await encryptionCTR.call(init);

  const initRev = new Uint8Array(init).reverse();
  const decryptKey = initRev.slice(8, 8 + 32);
  const decryptIv = initRev.slice(40, 40 + 16);

  const importedDecryptKey = await CTR.importKey(decryptKey);
  const decryptionCTR = new CTR(importedDecryptKey, decryptIv);

  await connection.write(concat([init.subarray(0, 56), encryptedInit.subarray(56, 56 + 8)]));

  return { encryptionCTR, decryptionCTR };
}
