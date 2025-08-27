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

import { decodeBase64, encodeBase64 } from "../0_deps.ts";
import { mod } from "./0_bigint.ts";

export function base64EncodeUrlSafe(data: Uint8Array | ArrayBuffer | string) {
  return encodeBase64(data).replace(/=*$/, "").replaceAll("+", "-").replaceAll("/", "_");
}

export function base64DecodeUrlSafe(data: string) {
  data = data.replaceAll("_", "/").replaceAll("-", "+");
  if (data.length !== 4) {
    data += "=".repeat(mod(-data.length, 4));
  }
  return decodeBase64(data);
}
