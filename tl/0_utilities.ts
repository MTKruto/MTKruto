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

import { assertEquals, assertFalse } from "../0_deps.ts";

export function isOptionalParam(ntype: string): boolean {
  return ntype.includes("?");
}
export function getOptionalParamInnerType(ntype: string): string {
  return ntype.split("?")[1];
}
export function analyzeOptionalParam(ntype: string): { flagField: string; bitIndex: number } {
  if (!isOptionalParam(ntype)) {
    throw new Error("Parameter not optional");
  }

  const flagField = ntype.split(".")[0];
  assertEquals(typeof flagField, "string");

  const bitIndex = Number(ntype.split("?")[0].split(".")[1]);
  assertFalse(isNaN(bitIndex));

  return { flagField, bitIndex };
}

export function repr(value: unknown): string | null {
  return value === undefined ? "undefined" : value === null ? null : (typeof value === "object" && "_" in value) ? value._ as string : value.constructor.name;
}

export function getVectorItemType(type: string): string | null {
  if (!type.startsWith(VECTOR_PREFIX) || !type.endsWith(VECTOR_SUFFIX)) {
    return null;
  }
  return type.slice(VECTOR_PREFIX.length).slice(0, -1 * VECTOR_SUFFIX.length);
}
const VECTOR_PREFIX = "Vector<";
const VECTOR_SUFFIX = ">";

export const X = "X";
export const VECTOR = 0x1CB5C415;
export const BOOL_TRUE = 0x997275b5;
export const BOOL_FALSE = 0xbc799737;
