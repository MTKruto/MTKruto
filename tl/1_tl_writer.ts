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

import { TLError } from "../0_errors.ts";
import { analyzeOptionalParam, BOOL_FALSE, BOOL_TRUE, getOptionalParamInnerType, getVectorItemType, isOptionalParam, repr, VECTOR } from "./0_utilities.ts";
import type { Schema } from "./0_types.ts";
import { intToBytes } from "../utilities/0_int.ts";
import { encodeText } from "../1_utilities.ts";

export class TLWriter {
  protected _buffer: Uint8Array<ArrayBuffer> = new Uint8Array(256);
  #view = new DataView(this._buffer.buffer);
  #length = 0;
  #path = new Array<string>();

  constructor() {
  }

  get buffer(): Uint8Array<ArrayBuffer> {
    if (this._buffer.byteLength !== this.#length) {
      this._buffer = this._buffer.slice(0, this.#length);
      this.#view = new DataView(this._buffer.buffer);
    }
    return this._buffer;
  }

  write(buffer: Uint8Array): typeof this {
    this.#ensureCapacity(buffer.byteLength);
    this._buffer.set(buffer, this.#length);
    this.#length += buffer.byteLength;
    return this;
  }

  #ensureCapacity(byteCount: number) {
    const requiredLength = this.#length + byteCount;
    if (requiredLength <= this._buffer.byteLength) {
      return;
    }

    const buffer = new Uint8Array(Math.max(requiredLength, this._buffer.byteLength * 2, 256));
    buffer.set(this._buffer.subarray(0, this.#length));
    this._buffer = buffer;
    this.#view = new DataView(buffer.buffer);
  }

  #ensureIntegerInRange(int: number | bigint, byteCount: number, isSigned: boolean) {
    if (typeof int === "number" && !Number.isInteger(int)) {
      throw new TLError("Expected an integer.", this.#path);
    }
    const limit = typeof int === "number" ? 2 ** (byteCount * 8 - (isSigned ? 1 : 0)) : 1n << BigInt(byteCount * 8 - (isSigned ? 1 : 0));
    if (int < (isSigned ? -limit : 0) || int >= limit) {
      throw new TLError(`The provided integer is too big for int${byteCount * 8}.`, this.#path);
    }
  }

  writeInt24(int: number, isSigned = true): typeof this {
    this.#ensureIntegerInRange(int, 24 / 8, isSigned);
    this.#ensureCapacity(3);
    this._buffer[this.#length++] = int;
    this._buffer[this.#length++] = int >>> 8;
    this._buffer[this.#length++] = int >>> 16;
    return this;
  }

  writeInt32(int: number, isSigned = true): typeof this {
    this.#ensureIntegerInRange(int, 32 / 8, isSigned);
    this.#ensureCapacity(4);
    isSigned ? this.#view.setInt32(this.#length, int, true) : this.#view.setUint32(this.#length, int, true);
    this.#length += 4;
    return this;
  }

  writeInt64(int: bigint, isSigned = true): typeof this {
    this.#ensureIntegerInRange(int, 64 / 8, isSigned);
    this.#ensureCapacity(8);
    isSigned ? this.#view.setBigInt64(this.#length, int, true) : this.#view.setBigUint64(this.#length, int, true);
    this.#length += 8;
    return this;
  }

  writeDouble(double: number): typeof this {
    this.#ensureCapacity(8);
    this.#view.setFloat64(this.#length, double, true);
    this.#length += 8;
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
    const headerLength = bytes.byteLength > 253 ? 4 : 1;
    if (headerLength === 4) {
      this.#ensureIntegerInRange(bytes.byteLength, 3, false);
    }
    const padding = (4 - (headerLength + bytes.byteLength) % 4) % 4;
    this.#ensureCapacity(headerLength + bytes.byteLength + padding);
    if (bytes.byteLength > 253) {
      this._buffer[this.#length++] = 254;
      this._buffer[this.#length++] = bytes.byteLength;
      this._buffer[this.#length++] = bytes.byteLength >>> 8;
      this._buffer[this.#length++] = bytes.byteLength >>> 16;
    } else {
      this._buffer[this.#length++] = bytes.byteLength;
    }
    this._buffer.set(bytes, this.#length);
    this.#length += bytes.byteLength;
    this._buffer.fill(0, this.#length, this.#length + padding);
    this.#length += padding;
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

  #serialize(type: string, value: any, schema: Schema, writesConstructorId = true) {
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
    if (writesConstructorId) {
      this.writeInt32(id, false);
    }

    let isFirstPathElementExisting = false;
    const flagFields: Record<string, number> = {};
    for (const [name, type] of parameters_) {
      if (type === "#") {
        flagFields[name] ??= 0;
      } else if (type__[name] !== undefined && isOptionalParam(type)) {
        const { flagField, bitIndex } = analyzeOptionalParam(type, this.#path);
        flagFields[flagField] |= 1 << bitIndex;
      }
    }

    for (let [name, type] of parameters_) {
      if (isOptionalParam(type) && type__[name] === undefined) {
        continue;
      }

      if (type === "#") {
        this.writeInt32(flagFields[name]);
        continue;
      }

      const pathElement = `[${value._}.]${name}`;
      if (isFirstPathElementExisting) {
        this.#path[this.#path.length - 1] = pathElement;
      } else {
        this.#path.push(pathElement);
        isFirstPathElementExisting = true;
      }

      if (type__[name] === undefined && !isOptionalParam(type)) {
        throw new TLError("Missing required field", this.#path);
      }

      if (isOptionalParam(type)) {
        type = getOptionalParamInnerType(type);
      }
      this.#serializeField(type, type__[name], schema);
    }

    for (const [name, type] of parameters_.values()) {
      if (type === "#" || !isOptionalParam(type) || type__[name] !== undefined) {
        continue;
      }

      const pathElement = `[${value._}.]${name}`;
      if (isFirstPathElementExisting) {
        this.#path[this.#path.length - 1] = pathElement;
      }

      const { flagField, bitIndex } = analyzeOptionalParam(type, this.#path);
      if ((flagFields[flagField] & (1 << bitIndex)) !== 0) {
        throw new TLError("Missing required field", this.#path);
      }
    }
  }

  #serializeField(type: string, value: any, schema: Schema) {
    this.#serialize(type, value, schema, schema.definitions[type] === undefined);
  }

  #serializeVector(type: string, value: any, schema: Schema) {
    const itemType = getVectorItemType(type);
    if (!itemType) {
      return false;
    }
    if (!Array.isArray(value)) {
      throw new TLError(`Expected an array but received ${repr(value)}`, this.#path);
    }
    if (!itemType.isBare) {
      this.writeInt32(VECTOR, false);
    }
    this.writeInt32(value.length);
    for (const item of value) {
      this.#serializeField(itemType.type, item, schema);
    }
    return true;
  }

  #serializePrimitive(type: string, value: any) {
    switch (type) {
      case "bytes":
        if ((value instanceof Uint8Array)) {
          this.writeBytes(value);
        } else {
          throw new TLError(`Expected Uint8Array but received ${repr(value)}`, this.#path);
        }
        return true;
      case "int128":
        if (typeof value === "bigint") {
          this.writeInt128(value);
        } else {
          throw new TLError(`Expected bigint but received ${repr(value)}`, this.#path);
        }
        return true;
      case "int256":
        if (typeof value === "bigint") {
          this.writeInt256(value);
        } else {
          throw new TLError(`Expected bigint but received ${repr(value)}`, this.#path);
        }
        return true;
      case "long":
        if (typeof value === "bigint") {
          this.writeInt64(value);
        } else {
          throw new TLError(`Expected bigint but received ${repr(value)}`, this.#path);
        }
        return true;
      case "Bool":
        if (typeof value === "boolean") {
          if (value) {
            this.writeInt32(BOOL_TRUE, false);
          } else {
            this.writeInt32(BOOL_FALSE, false);
          }
        } else {
          throw new TLError(`Expected boolean but received ${repr(value)}`, this.#path);
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
          throw new TLError(`Expected number but received ${repr(value)}`, this.#path);
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
          throw new TLError(`Expected number but received ${repr(value)}`, this.#path);
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
          throw new TLError(`Expected \`true\` but received ${repr(value)}`, this.#path);
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
