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

import { assert, assertEquals } from "../0_deps.ts";
import { assertNotEquals } from "../0_test_deps.ts";
import { fixKey, fromString, isInRange, toString } from "./1_utilities.ts";

function eq(v: unknown) {
  assertEquals(fromString(toString(v)), v);
}
Deno.test("fromString(toString)", async (t) => {
  await t.step("Boolean", () => {
    eq(true);
    eq(false);
  });

  await t.step("Number", () => {
    eq(Number.MIN_SAFE_INTEGER);
    eq(Number.MAX_SAFE_INTEGER);
    for (let i = 0; i < 1000; ++i) {
      eq(i);
    }
  });

  await t.step("String", () => {
    eq("Hello, world!");
    eq("Hello, world!".repeat(13 + 1024));
  });

  await t.step("BigInt", () => {
    for (let i = 0n; i < 2121n; ++i) {
      eq(i);
    }
  });

  await t.step("Date", () => {
    eq(new Date());
  });

  await t.step("Uint8Array", () => {
    for (let i = 0; i < 1024; ++i) {
      eq(crypto.getRandomValues(new Uint8Array(i)));
    }
  });

  await t.step("Array", () => {
    eq([1, 2, 3, 4, "Hello\na\nb", 12n, true, false, [new Uint8Array(1024)]]);
  });

  await t.step("Map", () => {
    eq({ a: 1, "b\na\n": 2, 1: 1 });
  });

  await t.step("peer", () => {
    eq([{ title: "" }, 123n]);
  });
});

Deno.test("fixKey uniqueness", () => {
  assertNotEquals(fixKey(["a", "1234"]), fixKey(["a", 1234n]));
  assertNotEquals(fixKey(["a", 1234]), fixKey(["a", 1234n]));
  assertNotEquals(fixKey(["a", "1234"]), fixKey(["a", 1234]));
});

Deno.test("isInRange", () => {
  assert(isInRange(["items", "B"], ["items", "A"], ["items", "T"]));
  assert(isInRange(["items", "B", 0], ["items", "A"], ["items", "T"]));
  assert(!isInRange(["items", "Z"], ["items", "A"], ["items", "T"]));
});
