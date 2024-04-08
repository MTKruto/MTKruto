/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
import { rleDecode, rleEncode } from "./0_rle.ts";

Deno.test("rleEncode", () => {
  const actual = rleEncode(new TextEncoder().encode("\x00".repeat(1000) + "\x01"));
  const expected = new Uint8Array([0, 255, 0, 255, 0, 255, 0, 235, 1]);
  assertEquals(actual, expected);
});

Deno.test("rleDecode", () => {
  const actual = rleDecode(new Uint8Array([0, 255, 0, 255, 0, 200, 3, 2, 1, 0, 2]));
  const expected = new Uint8Array([...new TextEncoder().encode("\x00".repeat(710)), 3, 2, 1, 0, 0]);
  assertEquals(actual, expected);
});
