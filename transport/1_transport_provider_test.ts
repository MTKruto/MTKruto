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
import { getDcId } from "./1_transport_provider.ts";

Deno.test("getDcId", () => {
  assertEquals(getDcId("1", false), 1);
  assertEquals(getDcId("2", false), 2);
  assertEquals(getDcId("3", false), 3);
  assertEquals(getDcId("4", false), 4);
  assertEquals(getDcId("5", false), 5);
  assertEquals(getDcId("1-test", false), 10_001);
  assertEquals(getDcId("2-test", false), 10_002);
  assertEquals(getDcId("3-test", false), 10_003);
  assertEquals(getDcId("1", true), -1);
  assertEquals(getDcId("2", true), -2);
  assertEquals(getDcId("3", true), -3);
  assertEquals(getDcId("4", true), -4);
  assertEquals(getDcId("5", true), -5);
  assertEquals(getDcId("1-test", true), -10_001);
  assertEquals(getDcId("2-test", true), -10_002);
  assertEquals(getDcId("3-test", true), -10_003);
});
