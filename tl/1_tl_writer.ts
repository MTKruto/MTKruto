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

import { concat } from "../0_deps.ts";
import { TLError } from "../0_errors.ts";
import { analyzeOptionalParam, BOOL_FALSE, BOOL_TRUE, getOptionalParamInnerType, getVectorItemType, isOptionalParam, repr, VECTOR } from "./0_utilities.ts";
import type { Schema } from "./0_types.ts";
import { intToBytes } from "../utilities/0_int.ts";
import { encodeText } from "../1_utilities.ts";

export class TLWriter {
  protected _buffer: Uint8Array<ArrayBuffer> = new Uint8Array();
  #path = "";

  constructor() {
  }

  get buffer(): Uint8Array<ArrayBuffer> {
    return this._buffer;
  }

  write(buffer: Uint8Array): typeof this {
    this._buffer = concat([this._buffer, buffer]);
    return this;
  }

  writeInt24(int: number, isSigned = true): typeof this {
    this.write(intToBytes(int, 24 / 8, { isSigned, path: this.#path }));
    return this;
  }

  writeInt32(int: number, isSigned = true): typeof this {
    this.write(intToBytes(int, 32 / 8, { isSigned, path: this.#path }));
    return this;
  }

  writeInt64(int: bigint, isSigned = true): typeof this {
    this.write(intToBytes(int, 64 / 8, { isSigned, path: this.#path }));
    return this;
  }

  writeDouble(double: number): typeof this {
    const buffer = new Uint8Array(8);
    new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength).setFloat64(0, double, true);
    this.write(buffer);
    return this;
  }

  writeInt128(int: bigint, isSigned = true): typeof this {
    this.write(intToBytes(int, 128 / 8, { isSigned, path: this.#path }));
    return this;
  }

  writeInt256(int: bigint, isSigned = true): typeof this {
    this.write(intToBytes(int, 256 / 8, { isSigned, path: this.#path }));
    return this;
  }

  writeBytes(bytes: Uint8Array): typeof this {
    let padding: number;
    if (bytes.length > 253) {
      this.write(new Uint8Array([254]));
      this.writeInt24(bytes.length);
      padding = bytes.length % 4;
    } else {
      this.write(new Uint8Array([bytes.length]));
      padding = (bytes.length + 1) % 4;
    }
    this.write(bytes);
    if (padding > 0) {
      padding = 4 - padding;
      this.write(new Uint8Array(padding));
    }
    return this;
  }

  writeString(string: string): typeof this {
    this.writeBytes(encodeText(string));
    return this;
  }

  writeObject(value: any, schema: Schema): typeof this {
    this.#serialize(value._, value, schema);
    return this;
  }

  #serialize(type: string, value: any, schema: Schema) {
    if (this.#serializePrimitive(type, value)) {
      return;
    }
    if (this.#serializeVector(type, value, schema)) {
      return;
    }

    const maybeDefinition = schema.definitions[value._];
    if (!maybeDefinition) {
      throw new TLError(`Unknown constructor: ${value._}`, this.#path);
    }
    if (type !== "!X" && !this.#isTypeValid(type, value, schema)) {
      throw new TLError(`Expected ${type} but instead got ${value._}`, this.#path);
    }
    const type__ = value as any;
    const [id, parameters_] = maybeDefinition;
    this.writeInt32(id, false);

    for (let [name, type] of parameters_.values()) {
      if (isOptionalParam(type) && type__[name] === undefined) {
        continue;
      }

      if (type === "#") {
        let flags = 0;
        const flagField_ = name;

        for (const [name, type] of parameters_) {
          if (isOptionalParam(type)) {
            const { flagField, bitIndex } = analyzeOptionalParam(type);

            if (flagField === flagField_) {
              if (type__[name] !== undefined) {
                flags |= 1 << bitIndex;
              }
            }
          }
        }
        this.writeInt32(flags);
        continue;
      }

      const parent = this.#path;
      this.#path = `${parent ? `${parent} ` : ""}[${value._}.]${name}`;

      if (type__[name] === undefined && !isOptionalParam(type)) {
        throw new TLError("Missing required field", this.#path);
      }

      if (isOptionalParam(type)) {
        type = getOptionalParamInnerType(type);
      }
      this.#serialize(type, type__[name], schema);
    }

    return;
  }

  #serializeVector(type: string, value: any, schema: Schema) {
    const itemType = getVectorItemType(type);
    if (!itemType) {
      return false;
    }
    if (!Array.isArray(value)) {
      throw new TLError(`Expected an array but received ${repr(value)}`, this.#path);
    }
    this.writeInt32(VECTOR, false);
    this.writeInt32(value.length);
    for (const item of value) {
      this.#serialize(itemType, item, schema);
    }
    return true;
  }

  #serializePrimitive(type: string, value: any) {
    const valueRepr = repr(value);

    switch (type) {
      case "bytes":
        if ((value instanceof Uint8Array)) {
          this.writeBytes(value);
        } else {
          throw new TLError(`Expected Uint8Array but received ${valueRepr}`, this.#path);
        }
        return true;
      case "int128":
        if (typeof value === "bigint") {
          this.writeInt128(value);
        } else {
          throw new TLError(`Expected bigint but received ${valueRepr}`, this.#path);
        }
        return true;
      case "int256":
        if (typeof value === "bigint") {
          this.writeInt256(value);
        } else {
          throw new TLError(`Expected bigint but received ${valueRepr}`, this.#path);
        }
        return true;
      case "long":
        if (typeof value === "bigint") {
          this.writeInt64(value);
        } else {
          throw new TLError(`Expected bigint but received ${valueRepr}`, this.#path);
        }
        return true;
      case "Bool":
        if (typeof value === "boolean") {
          if (value) {
            this.writeInt32(BOOL_TRUE);
          } else {
            this.writeInt32(BOOL_FALSE);
          }
        } else {
          throw new TLError(`Expected boolean but received ${valueRepr}`, this.#path);
        }
        return true;
      case "int":
        //
        if (value === null) {
          value = 0;
        }
        //
        if (typeof value === "number") {
          if (value % 1 === 0) {
            this.writeInt32(value);
          } else {
            throw new TLError("Expected an integer value but received a floating point", this.#path);
          }
        } else {
          throw new TLError(`Expected number but received ${valueRepr}`, this.#path);
        }
        return true;
      case "double":
        //
        if (value === null) {
          value = 0;
        }
        //
        if (typeof value === "number") {
          this.writeDouble(value);
        } else {
          throw new TLError(`Expected number but received ${valueRepr}`, this.#path);
        }
        return true;
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
        return true;
      case "true":
        if (value !== true) {
          throw new TLError(`Expected \`true\` but received ${valueRepr}`, this.#path);
        }
        return true;
      default:
        return false;
    }
  }

  #isTypeValid(type: string, value: any, schema: Schema) {
    if (type === value._) {
      return true;
    }
    return schema.definitions[value._]?.[2] === type;
  }
}
