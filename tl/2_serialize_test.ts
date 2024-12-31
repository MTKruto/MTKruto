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
import { _types, flags, Parameters } from "./0_api.ts";
import { serialize } from "./2_serialize.ts";

const testObject1: Parameters = [
  0x01010101,
  [["string", "string", "string"]],
];
_types!.set("testObject1", testObject1);

const testObject2: Parameters = [
  0x10101010,
  [
    ["boolean1", "boolean", "Bool"],
    ["boolean2", "boolean", "Bool"],
    ["int", "number", "int"],
    ["long", "bigint", "long"],
    ["int128", "bigint", "int128"],
    ["int256", "bigint", "int256"],
    ["string", "string", "string"],
    ["bytes", Uint8Array, "bytes"],
    ["flags", flags, "#"],
    ["flag1", "true", "flags.0?true"],
    ["flag2", ["testObject1"], "flags.1?Vector<string>"],
    ["flag3", "bigint", "flags.3?long"],
  ],
];
_types!.set("testObject2", testObject2);

Deno.test("serialize", () => {
  // deno-fmt-ignore
  const expected = new Uint8Array([
    0x10, 0x10, 0x10, 0x10, 0xB5, 0x75, 0x72, 0x99,
    0x37, 0x97, 0x79, 0xBC, 0xD2, 0x04, 0x00, 0x00,
    0x34, 0x33, 0x33, 0x33, 0x33, 0x33, 0x33, 0xF3,
    0x01, 0xF0, 0x77, 0xC8, 0xC9, 0xF7, 0x24, 0x97,
    0x5A, 0x82, 0xD4, 0x07, 0x12, 0x94, 0x67, 0x02,
    0xAB, 0x4A, 0xA5, 0xE0, 0x76, 0xF9, 0xE9, 0xFA,
    0x99, 0x8E, 0xDB, 0xF1, 0x1E, 0x82, 0x14, 0xD6,
    0xAE, 0xEC, 0xEB, 0x46, 0x95, 0xF3, 0x84, 0xB4,
    0x4F, 0x52, 0x06, 0xAB, 0x7B, 0xB8, 0x49, 0x4B,
    0x07, 0x4D, 0x54, 0x4B, 0x72, 0x75, 0x74, 0x6F,
    0x04, 0x00, 0x00, 0x01, 0x01, 0x00, 0x00, 0x00,
    0x03, 0x00, 0x00, 0x00, 0x15, 0xC4, 0xB5, 0x1C,
    0x02, 0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01,
    0x07, 0x4D, 0x54, 0x4B, 0x72, 0x75, 0x74, 0x6F,
    0x01, 0x01, 0x01, 0x01, 0x07, 0x4D, 0x54, 0x4B,
    0x72, 0x75, 0x74, 0x6F
  ]);

  const actual = serialize({
    _: "testObject2",
    boolean1: true,
    boolean2: false,
    int: 1234,
    long: -922337203685477580n,
    int128: 3196265793150487616775634918212890625n,
    int256: 34053716734886053108720723919265766388580600074269200372509658336639404296875n,
    string: "MTKruto",
    bytes: new Uint8Array([256, 256, 1, 1]),
    flag1: true,
    flag2: [{ _: "testObject1", string: "MTKruto" }, { _: "testObject1", string: "MTKruto" }],
    // deno-lint-ignore no-explicit-any
  } as any);

  assertEquals(actual, expected);
});

Deno.test("optional double", () => {
  // deno-fmt-ignore
  const expected = new Uint8Array([
    0x94, 0xb0, 0x33, 0xde,
    0x01, 0x00, 0x00, 0x00,
    0x01, 0x75, 0x00, 0x00,
    0x20, 0x03, 0x00, 0x00,
    0x20, 0x03, 0x00, 0x00,
    0x88, 0xfc, 0x03, 0x00,
    0xe5, 0x46, 0x91, 0xb5,
    0x86, 0x72, 0x02, 0x40
  ]);

  const actual = serialize({
    _: "videoSize",
    type: "u",
    w: 800,
    h: 800,
    size: 261256,
    video_start_ts: 2.305921,
  });
  assertEquals(actual, expected);
});
