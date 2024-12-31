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

import { assertEquals, assertThrows } from "../0_deps.ts";
import { getUsername } from "./0_utilities.ts";

Deno.test("getUsername", () => {
  const validUsernames = ["pic", "telegram", "p_ic", "test12345", "a".repeat(32)];
  const invalidUsernames = ["_pic", "2pic", "a__c", "a".repeat(33), "têst"];

  for (const username of validUsernames) {
    assertEquals(getUsername(username), username);
    assertEquals(getUsername("@" + username), username);
    assertEquals(getUsername("https://t.me/" + username), username);
    assertEquals(getUsername(`https://${username}.t.me`), username);
    assertThrows(() => getUsername(`https://${username}.${username}.t.me`));
    assertEquals(getUsername("https://telegram.me/" + username), username);
    assertEquals(getUsername("https://telegram.me/" + username + "/a"), username);
    assertEquals(getUsername("https://telegram.dog/" + username + "/b"), username);
  }

  for (const username of invalidUsernames) {
    assertThrows(() => getUsername(username), username);
    assertThrows(() => getUsername("@" + username), username);
    assertThrows(() => getUsername("https://t.me/" + username), username);
    assertThrows(() => getUsername(`https://${username}.t.me`), username);
    assertThrows(() => getUsername("https://telegram.me/" + username), username);
    assertThrows(() => getUsername("https://telegram.dog/" + username), username);
  }
});
