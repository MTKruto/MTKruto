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
// deno-lint-ignore-file no-explicit-any

import { unreachable } from "../0_deps.ts";
import type { Schema } from "./0_types.ts";

export function isValidObject(object: any, schema: Schema) {
  return object !== null && typeof object === "object" && typeof object._ === "string" && schema.definitions[object._] !== undefined;
}
export function assertIsValidObject(object: any, schema: Schema) {
  if (!isValidObject(object, schema)) {
    unreachable();
  }
}

export function is(typeName: string, value: any, schema: Schema) {
  return value !== null && typeof value === "object" && typeof value._ === "string" && value._ === typeName && schema.definitions[typeName] !== undefined;
}
export function isOneOf(names: string[], value: unknown, schema: Schema) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const typeName = (value as any)._;
  return typeof typeName === "string" && names.includes(typeName) && schema.definitions[typeName] !== undefined;
}
export function isOfEnum(name: string, value: any, schema: Schema) {
  return isValidObject(value, schema) && schema.definitions[value._][2] === name;
}
export function as(name: string, value: unknown, schema: Schema) {
  if (is(name, value, schema)) {
    return value;
  } else {
    unreachable();
  }
}

export function mustGetReturnType(name: string, schema: Schema): string {
  const type = schema.definitions[name];
  if (!type || !type[2]) {
    unreachable();
  }
  return type[2];
}
