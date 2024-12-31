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

import { assertEquals } from "../0_deps.ts";
import { Api } from "../2_tl.ts";
import { calculateLength } from "./5_message.ts";

Deno.test("calculateLength", () => {
  const resPq: Api.resPQ = {
    _: "resPQ", // 4 cid
    nonce: 1n, // 16 long
    server_nonce: 2n, // 16 long
    pq: new Uint8Array(1024), // 4 len, 1024 bytes
    server_public_key_fingerprints: [ // 4 vector cid, 4 vector len
      1n, // 8 long
      2n, // 8 long
      3n, // 8 long
    ],
  };
  const user: Api.user = {
    _: "user", // 4 cid
    id: 0n, // 8 long
    // 4 flags, 4 flags2
  };

  const resPqExpectedLength = 1096;
  const userExpectedLength = 20;

  assertEquals(calculateLength(resPq), resPqExpectedLength);
  assertEquals(calculateLength(user), userExpectedLength);
});
