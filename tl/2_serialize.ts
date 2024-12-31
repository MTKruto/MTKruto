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
import { AnyObject, flags, getType } from "./0_api.ts";
import { TLRawWriter } from "./0_tl_raw_writer.ts";
import { analyzeOptionalParam, assertIsValidType, getOptionalParamInnerType, isOptionalParam } from "./1_utilities.ts";

function serializeSingleParam(
  writer: TLRawWriter,
  value: any,
  type: unknown,
  ntype: string,
  debugInfo: string,
) {
  if (isOptionalParam(ntype)) {
    ntype = getOptionalParamInnerType(ntype);
  }
  const valueRepr = value == null ? null : (typeof value === "object" && "_" in value) ? value._ : value.constructor.name;

  if (type == Uint8Array) {
    if ((value instanceof Uint8Array)) {
      writer.writeBytes(value);
      return writer.buffer;
    } else {
      throw new TypeError(`Expected Uint8Array but received ${valueRepr} ${debugInfo}`);
    }
  }

  switch (type) {
    case "bigint":
      if (typeof value === "bigint") {
        if (ntype == "int128") {
          writer.writeInt128(value);
        } else if (ntype === "int256") {
          writer.writeInt256(value);
        } else {
          writer.writeInt64(value);
        }
      } else {
        throw new TypeError(`Expected bigint but received ${valueRepr} ${debugInfo}`);
      }
      break;
    case "boolean":
      if (typeof value === "boolean") {
        if (value) {
          writer.writeInt32(0x997275B5);
        } else {
          writer.writeInt32(0xBC799737);
        }
      } else {
        throw new TypeError(`Expected boolean but received ${valueRepr} ${debugInfo}`);
      }
      break;
    case "number":
      //
      if (value == null) {
        value = 0;
      }
      //
      if (typeof value === "number") {
        if (ntype == "double") {
          writer.writeDouble(value);
        } else {
          writer.writeInt32(value);
        }
      } else {
        throw new TypeError(`Expected number but received ${valueRepr} ${debugInfo}`);
      }
      break;
    case "string":
      if (typeof value === "string") {
        writer.writeString(value);
      } else if (value instanceof Uint8Array) {
        writer.writeBytes(value);
      } else {
        writer.writeString("");
      }
      // else {
      //   throw new TypeError(`Expected string or Uint8Array but received ${valueRepr}`);
      // }
      break;
    case "true":
      if (value !== true) {
        throw new TypeError(`Expected true but received ${valueRepr} ${debugInfo}`);
      }
      break;
    default:
      // null = !X (generic)
      if (type != null && typeof type !== "string") {
        throw new TypeError(`Unexpected type: ${type} ${debugInfo}`);
      }
      writer.write(serialize(value));
  }

  return writer.buffer;
}

export function serialize(type_: AnyObject): Uint8Array {
  assertIsValidType(type_);
  const maybeParameters = getType(type_._);
  if (!maybeParameters) {
    throw new Error(`Unknown type: ${type_._}`);
  }
  const type__ = type_ as any;
  const writer = new TLRawWriter();
  const [id, parameters_] = maybeParameters;
  writer.writeInt32(id, false);

  for (const [i, [name, type, ntype]] of parameters_.entries()) {
    if (isOptionalParam(ntype) && type__[name] === undefined) {
      continue;
    }

    const debugInfo = `[0x${id.toString(16).toUpperCase()}::${i}]`;

    if (type == flags) {
      let flags = 0;
      const flagField_ = name;

      for (const [name, _, ntype] of parameters_) {
        if (isOptionalParam(ntype)) {
          const { flagField, bitIndex } = analyzeOptionalParam(ntype);

          if (flagField == flagField_) {
            if (type__[name] !== undefined) {
              flags |= 1 << bitIndex;
            }
          }
        }
      }
      writer.writeInt32(flags);
      continue;
    }

    if (type__[name] === undefined && !isOptionalParam(ntype)) {
      throw new Error(`Missing required parameter: ${name}`);
    }

    if (type instanceof Array) {
      const itemsType = type[0];
      if (!Array.isArray(type__[name])) {
        throw new TypeError("Expected array");
      }
      writer.writeInt32(0x1CB5C415); // vector constructor
      writer.writeInt32(type__[name].length);
      for (const item of type__[name]) {
        serializeSingleParam(writer, item, itemsType, ntype, debugInfo);
      }
      continue;
    }

    serializeSingleParam(writer, type__[name], type, ntype, debugInfo);
  }

  return writer.buffer;
}
