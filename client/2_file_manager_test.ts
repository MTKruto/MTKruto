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

import { assertThrows } from "../0_test_deps.ts";
import { kilobyte, megabyte } from "../1_utilities.ts";
import { FileManager } from "./2_file_manager.ts";

Deno.test("validateChunkSize", async (t) => {
  const MAX = 512 * kilobyte;
  await t.step("max", () => {
    assertThrows(() => FileManager.validateChunkSize(1 * megabyte, MAX));
  });
  await t.step("0", () => {
    assertThrows(() => FileManager.validateChunkSize(0, MAX));
  });
  await t.step("<0", () => {
    assertThrows(() => FileManager.validateChunkSize(-128 * kilobyte, MAX));
  });
  await t.step("floating point", () => {
    assertThrows(() => FileManager.validateChunkSize(127.9 * kilobyte, MAX));
  });
  await t.step("not divisible by 1024", () => {
    assertThrows(() => FileManager.validateChunkSize(130 * (kilobyte + 1), MAX));
  });
  await t.step("ok", () => {
    FileManager.validateChunkSize(128 * kilobyte, MAX);
  });
});
