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

Deno.test("downloadInner reads cached file from requested byte offset", async () => {
  const fileId = 1n;
  const chunkSize = 4 * kilobyte;
  const chunks = [
    new Uint8Array(chunkSize).fill(0),
    new Uint8Array(chunkSize).fill(1),
    new Uint8Array(2 * kilobyte).fill(2),
  ];
  let requestedOffset = -1;
  const manager = new FileManager({
    id: 0,
    storage: {
      supportsFiles: true,
      getFile(id: bigint) {
        assertEquals(id, fileId);
        return [chunks.length, chunkSize] as [number, number];
      },
      async *iterFileParts(id: bigint, partCount: number, offset: number, signal: AbortSignal | undefined) {
        signal?.throwIfAborted();
        assertEquals(id, fileId);
        assertEquals(partCount, chunks.length);
        requestedOffset = offset;
        for (let i = offset; i < partCount; ++i) {
          yield chunks[i];
        }
      },
    },
  } as never);

  const location = { _: "inputDocumentFileLocation", id: fileId, access_hash: 0n, file_reference: new Uint8Array(), thumb_size: "" } as const;
  const parts = new Array<Uint8Array>();
  for await (const chunk of manager.downloadInner(location, 1, { offset: 5 * kilobyte })) {
    parts.push(chunk);
  }

  assertEquals(requestedOffset, 1);
  assertEquals(parts.map((v) => v.byteLength), [3 * kilobyte, 2 * kilobyte]);
  assertEquals(parts.map((v) => v[0]), [1, 2]);
});
