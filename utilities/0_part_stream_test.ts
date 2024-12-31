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
import { PartStream } from "./0_part_stream.ts";

const chunkSize = 1024;

const n = () => crypto.getRandomValues(new Uint8Array(chunkSize));
const buffers = [n(), n(), n(), n()];

Deno.test("exact", async () => {
  // @ts-ignore: lib
  const stream = ReadableStream.from(buffers)
    .pipeThrough(new PartStream(chunkSize));

  let i = 0;
  const expectedTotalParts = [-1, -1, -1, 4];
  for await (const part of stream) {
    assertEquals(part.small, false);
    assertEquals(part.part, i);
    assertEquals(part.totalParts, expectedTotalParts[i]);
    assertEquals(part.bytes, buffers[i++]);
  }
});

Deno.test("small", async () => {
  // @ts-ignore: lib
  const stream = ReadableStream.from(buffers.slice(0, 1))
    .pipeThrough(new PartStream(chunkSize));

  let i = 0;
  for await (const part of stream) {
    assertEquals(i++, 0);
    assertEquals(part.small, true);
    assertEquals(part.part, 0);
    assertEquals(part.bytes, buffers[0]);
    assertEquals(part.totalParts, 1);
  }
});

Deno.test("small 2", async () => {
  const buffers = [new Uint8Array(chunkSize - 20)];
  // @ts-ignore: lib
  const stream = ReadableStream.from(buffers)
    .pipeThrough(new PartStream(chunkSize));

  let i = 0;
  for await (const part of stream) {
    assertEquals(i++, 0);
    assertEquals(part.small, true);
    assertEquals(part.part, 0);
    assertEquals(part.bytes, buffers[0]);
    assertEquals(part.totalParts, 1);
  }
});
