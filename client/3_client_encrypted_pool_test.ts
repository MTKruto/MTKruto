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

import { assertEquals } from "../0_deps.ts";
import { ClientEncrypted } from "./2_client_encrypted.ts";
import { ClientEncryptedPool } from "./3_client_encrypted_pool.ts";

Deno.test("ClientEncryptedPool", () => {
  const pool = new ClientEncryptedPool();
  const clients = new Array(3).fill(null).map(() => new ClientEncrypted("1", 0));
  for (const client of clients) {
    pool.add(client);
  }
  for (let i = 0; i < 10; ++i) {
    assertEquals(pool.nextClient(), clients[0]);
    assertEquals(pool.nextClient(), clients[1]);
    assertEquals(pool.nextClient(), clients[2]);
  }
});
