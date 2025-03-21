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
import { ObjectDefinition, schema as schema_ } from "./0_api.ts";
import { TLWriter } from "./2_tl_writer.ts";

const schema = structuredClone(schema_);

const testObject1: ObjectDefinition = [
  0x01010101,
  [["string", "string"]],
  "TestObject",
];
schema.testObject1 = testObject1;

const testObject2: ObjectDefinition = [
  0x10101010,
  [
    ["boolean1", "Bool"],
    ["boolean2", "Bool"],
    ["int", "int"],
    ["long", "long"],
    ["int128", "int128"],
    ["int256", "int256"],
    ["string", "string"],
    ["bytes", "bytes"],
    ["flags", "#"],
    ["flag1", "flags.0?true"],
    ["flag2", "flags.1?Vector<testObject1>"],
    ["flag3", "flags.3?long"],
  ],
  "TestObject",
];
schema.testObject2 = testObject2;

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

  const actual = new TLWriter()
    .serialize({
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
    } as any, schema)
    .buffer;

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

  const actual = new TLWriter()
    .serialize({
      _: "videoSize",
      type: "u",
      w: 800,
      h: 800,
      size: 261256,
      video_start_ts: 2.305921,
    })
    .buffer;
  assertEquals(actual, expected);
});
