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
// deno-lint-ignore-file no-explicit-any

import { type AnyObject, type AnyType, type Enums, type Functions, schema, type Types } from "./1_mtproto_api.ts";
import { TLReader } from "./1_tl_reader.ts";
import { TLWriter } from "./1_tl_writer.ts";
import { as as as_, assertIsValidObject as assertIsValidObject_, is as is_, isOfEnum as isOfEnum_, isOneOf as isOneOf_, isValidObject as isValidObject_, mustGetReturnType as mustGetReturnType_ } from "./1_utilities.ts";

export * from "./1_mtproto_api.ts";

export type DeserializedType = boolean | number | bigint | string | Uint8Array | AnyType | Array<DeserializedType>;

export async function deserializeType<T extends (keyof Types) | "X" | string>(name: T, bufferOrReader: TLReader | Uint8Array): Promise<T extends keyof Types ? Types[T] : DeserializedType> {
  const reader = bufferOrReader instanceof Uint8Array ? new TLReader(bufferOrReader) : bufferOrReader;
  return await reader.readType(name, schema);
}

export function serializeObject(object: AnyObject): Uint8Array<ArrayBuffer> {
  return new TLWriter().writeObject(object, schema).buffer;
}

export function isValidObject(object: any): object is AnyType {
  return isValidObject_(object, schema);
}
export function assertIsValidObject(object: any): asserts object is AnyType {
  return assertIsValidObject_(object, schema);
}

export function is<S extends keyof (Types & Functions)>(name: S, value: unknown): value is S extends keyof Types ? Types[S] : S extends keyof Functions ? Functions[S] : never {
  return is_(name, value, schema);
}
export function isOneOf<S extends keyof (Types & Functions)>(names: S[] | readonly S[], value: unknown): value is S extends keyof Types ? Types[S] : S extends keyof Functions ? Functions[S] : never {
  return isOneOf_(names as S[], value, schema);
}
export function isOfEnum<S extends keyof Enums>(name: S, value: unknown): value is Enums[S] {
  return isOfEnum_(name, value, schema);
}
export function as<S extends keyof Types>(name: S, value: unknown): Types[S] {
  return as_(name, value, schema) as Types[S];
}

export function mustGetReturnType(name: string): string {
  return mustGetReturnType_(name, schema);
}
