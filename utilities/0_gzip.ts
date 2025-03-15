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

import { toArrayBuffer } from "../0_deps.ts";

export function gunzip(buffer: Uint8Array): Promise<Uint8Array> {
  return inner(buffer, new DecompressionStream("gzip"));
}

export function gzip(buffer: Uint8Array): Promise<Uint8Array> {
  return inner(buffer, new CompressionStream("gzip"));
}

async function inner(buffer: Uint8Array, transformStream: GenericTransformStream): Promise<Uint8Array> {
  let readable: ReadableStream;
  if (ReadableStream.from) {
    readable = ReadableStream.from([buffer]);
  } else {
    readable = new ReadableStream({
      pull(controller) {
        controller.enqueue(buffer);
        controller.close();
      },
    });
  }
  readable = readable.pipeThrough(transformStream);
  return new Uint8Array(await toArrayBuffer(readable));
}
