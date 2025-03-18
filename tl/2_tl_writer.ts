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

import { BOOL_FALSE, VECTOR } from "../2_tl.ts";
import { AnyObject, getType } from "./0_api.ts";
import { TLRawWriter } from "./0_tl_raw_writer.ts";
import { analyzeOptionalParam, assertIsValidType, BOOL_TRUE, getOptionalParamInnerType, isOptionalParam } from "./1_utilities.ts";

export class TLWriter extends TLRawWriter {
  serialize(type_: AnyObject) {
    assertIsValidType(type_);
    const maybeParameters = getType(type_._);
    if (!maybeParameters) {
      throw new Error(`Unknown type: ${type_._}`);
    }
    const type__ = type_ as any;
    const writer = new TLRawWriter();
    const [id, parameters_] = maybeParameters;
    writer.writeInt32(id, false);

    for (let [i, [name, type]] of parameters_.entries()) {
      if (isOptionalParam(type) && type__[name] === undefined) {
        continue;
      }

      const debugInfo = `[0x${id.toString(16).toUpperCase()}::${i}]`;

      if (type == "#") {
        let flags = 0;
        const flagField_ = name;

        for (const [name, type] of parameters_) {
          if (isOptionalParam(type)) {
            const { flagField, bitIndex } = analyzeOptionalParam(type);

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

      if (type__[name] === undefined && !isOptionalParam(type)) {
        throw new Error(`Missing required parameter: ${name}`);
      }

      if (type.startsWith("Vector<")) {
        type = type.slice("Vector<".length).slice(0, -1);
        if (!Array.isArray(type__[name])) {
          throw new TypeError("Expected array");
        }
        writer.writeInt32(VECTOR); // vector constructor
        writer.writeInt32(type__[name].length);
        for (const item of type__[name]) {
          this.#serializePrimitive(item, type, debugInfo);
        }
        continue;
      }

      this.#serializePrimitive(type__[name], type, debugInfo);
    }

    return this;
  }

  #serializePrimitive(
    value: any,
    type: string,
    debugInfo: string,
  ) {
    if (isOptionalParam(type)) {
      type = getOptionalParamInnerType(type);
    }
    const valueRepr = value == null ? null : (typeof value === "object" && "_" in value) ? value._ : value.constructor.name;

    switch (type) {
      case "bytes":
        if ((value instanceof Uint8Array)) {
          this.writeBytes(value);
          return;
        } else {
          throw new TypeError(`Expected Uint8Array but received ${valueRepr} ${debugInfo}`);
        }
      case "int128":
        if (typeof value === "bigint") {
          this.writeInt128(value);
        } else {
          throw new TypeError(`Expected bigint but received ${valueRepr} ${debugInfo}`);
        }
        break;
      case "int256":
        if (typeof value === "bigint") {
          this.writeInt256(value);
        } else {
          throw new TypeError(`Expected bigint but received ${valueRepr} ${debugInfo}`);
        }
        break;
      case "long":
        if (typeof value === "bigint") {
          this.writeInt64(value);
        } else {
          throw new TypeError(`Expected bigint but received ${valueRepr} ${debugInfo}`);
        }
        break;
      case "Bool":
        if (typeof value === "boolean") {
          if (value) {
            this.writeInt32(BOOL_TRUE);
          } else {
            this.writeInt32(BOOL_FALSE);
          }
        } else {
          throw new TypeError(`Expected boolean but received ${valueRepr} ${debugInfo}`);
        }
        break;
      case "int":
        //
        if (value == null) {
          value = 0;
        }
        //
        if (typeof value === "number") {
          this.writeInt32(value);
        } else {
          throw new TypeError(`Expected number but received ${valueRepr} ${debugInfo}`);
        }
        break;
      case "double":
        //
        if (value == null) {
          value = 0;
        }
        //
        if (typeof value === "number") {
          this.writeDouble(value);
        } else {
          throw new TypeError(`Expected number but received ${valueRepr} ${debugInfo}`);
        }
        break;
      case "string":
        if (typeof value === "string") {
          this.writeString(value);
        } else if (value instanceof Uint8Array) {
          this.writeBytes(value);
        } else {
          this.writeString("");
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
        this.serialize(value);
    }
  }
}
