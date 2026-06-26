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

import { assertEquals, assertFalse, encodeBase64, encodeHex } from "../0_deps.ts";
import { TLError } from "../0_errors.ts";

export function isOptionalParam(ntype: string): boolean {
  return ntype.includes("?");
}
export function getOptionalParamInnerType(ntype: string): string {
  return ntype.split("?")[1];
}
export function analyzeOptionalParam(ntype: string, path: string[]): { flagField: string; bitIndex: number } {
  if (!isOptionalParam(ntype)) {
    throw new TLError(`Parameter ${ntype} is not optional.`, path);
  }

  const flagField = ntype.split(".")[0];
  assertEquals(typeof flagField, "string");

  const bitIndex = Number(ntype.split("?")[0].split(".")[1]);
  assertFalse(isNaN(bitIndex));

  return { flagField, bitIndex };
}

export function repr(value: unknown): string | null {
  if (typeof value === "bigint") {
    return `${value}n`;
  } else if (typeof value === "string") {
    return `"${value}"`;
  } else if (typeof value === "number" || typeof value === "boolean") {
    return `${value}`;
  } else if (value === undefined) {
    return "undefined";
  } else if (value instanceof Uint8Array) {
    if (value.byteLength > 1024) {
      return `${value.byteLength} bytes`;
    } else {
      return `Uint8Array.fromBase64("${encodeBase64(value)}")`;
    }
  } else if (Array.isArray(value)) {
    if (value.length === 0) {
      return "[]";
    }
    return `[\n  ${value.map((value) => indentRepr(value)).join(",\n  ")}\n]`;
  } else if (value === null) {
    return value;
  } else if (typeof value === "object" && "_" in value) {
    let s = "{\n";
    for (const [k, v] of Object.entries(value)) {
      s += `  ${k}: ${indentRepr(v)},\n`;
    }
    s += "}";
    return s;
  } else {
    return value.constructor.name;
  }
}

function indentRepr(value: unknown): string {
  return `${repr(value)}`.replaceAll("\n", "\n  ");
}

// deno-lint-ignore no-explicit-any
export function toJSON(object: unknown): any {
  if (typeof object === "bigint") {
    return { _: "bigint", bigint: String(object) };
  } else if (object instanceof Uint8Array) {
    return { _: "buffer", buffer: encodeHex(object) };
  } else if (object === null) {
    return null;
  } else if (Array.isArray(object)) {
    return object.map(toJSON);
  } else if (typeof object === "object") {
    const newObject: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(object)) {
      newObject[key] = toJSON(value);
    }
    return newObject;
  } else {
    return object;
  }
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

export function constructorIdToHex(constructorId: number): string {
  return constructorId.toString(16);
}
