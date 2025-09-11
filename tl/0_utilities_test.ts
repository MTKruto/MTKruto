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

import { assert, assertEquals, assertFalse, encodeHex } from "../0_deps.ts";
import { assertThrows } from "../0_test_deps.ts";
import { analyzeOptionalParam, isOptionalParam, toJSON } from "./0_utilities.ts";

Deno.test("isOptionalParam", () => {
  assert(isOptionalParam("flags.8?string"));
  assertFalse(isOptionalParam("long"));
});

Deno.test("analyzeOptionalParam", () => {
  assertThrows(() => analyzeOptionalParam("long"));

  const { flagField, bitIndex } = analyzeOptionalParam("flags.0?long");

  assertEquals(flagField, "flags");
  assertEquals(bitIndex, 0);
});

Deno.test("toJSON", () => {
  assertEquals(toJSON(0n), { _: "bigint", bigint: "0" });

  const buffer = crypto.getRandomValues(new Uint8Array(1024));
  assertEquals(toJSON(buffer), { _: "buffer", buffer: encodeHex(buffer) });

  assertEquals(
    toJSON({
      _: "object",
      buffer,
      bigint: 1234n,
    }),
    {
      _: "object",
      buffer: { _: "buffer", buffer: encodeHex(buffer) },
      bigint: { _: "bigint", bigint: "1234" },
    },
  );
});
