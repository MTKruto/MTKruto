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

import { gunzip } from "../1_utilities.ts";
import { AnyObject, AnyType, schema, Types } from "./1_api.ts";
import { TLReader } from "./1_tl_reader.ts";
import { TLWriter } from "./1_tl_writer.ts";

export type DeserializedType = boolean | number | bigint | string | Uint8Array | AnyType | Array<DeserializedType>;

export async function deserializeTelegramType<T extends (keyof Types) | "X" | string>(name: T, bufferOrReader: TLReader | Uint8Array): Promise<T extends keyof Types ? Types[T] : DeserializedType> {
  const reader = bufferOrReader instanceof Uint8Array ? new TLReader(bufferOrReader) : bufferOrReader;
  const id = reader.readInt32(false);
  if (id == GZIP_PACKED) {
    const buffer = await gunzip(reader.readBytes());
    return await deserializeTelegramType(name, buffer);
  }
  reader.unreadInt32();
  return await reader.readType(name, schema);
}
export const GZIP_PACKED = 0x3072CFA1;
export const RPC_RESULT = 0xF35C6D01;

export function serializeTelegramObject(object: AnyObject): Uint8Array {
  return new TLWriter().writeObject(object, schema).buffer;
}
