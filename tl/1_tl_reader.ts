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

import { decodeText, intFromBytes } from "../1_utilities.ts";
import { TLError } from "../0_errors.ts";
import type { ObjectDefinition, Schema } from "./0_types.ts";
import { analyzeOptionalParam, BOOL_FALSE, BOOL_TRUE, constructorIdToHex, getOptionalParamInnerType, getVectorItemType, isOptionalParam, VECTOR, X } from "./0_utilities.ts";

export class TLReader {
  #path = new Array<string>();

  constructor(protected _buffer: Uint8Array) {
  }

  get buffer(): Uint8Array {
    return this._buffer;
  }

  read(byteCount: number): Uint8Array<ArrayBuffer> {
    if (this._buffer.byteLength < byteCount) {
      throw new TLError("No data remaining", this.#path);
    }

    const buffer = this._buffer.slice(0, byteCount);
    this._buffer = this._buffer.subarray(byteCount);
    return buffer;
  }

  unread(count: number) {
    const newOffest = this._buffer.byteOffset - count;
    if (newOffest < 0) {
      throw new TLError("No data has been read", this.#path);
    }

    this._buffer = new Uint8Array(this._buffer.buffer, newOffest);
  }

  readInt24(isSigned = true): number {
    const buffer = this.read(24 / 8);
    return Number(intFromBytes(buffer, { isSigned }));
  }

  readInt32(isSigned = true): number {
    const buffer = this.read(32 / 8);
    return Number(intFromBytes(buffer, { isSigned }));
  }

  unreadInt32() {
    this.unread(32 / 8);
  }

  readInt64(isSigned = true): bigint {
    const buffer = this.read(64 / 8);
    return intFromBytes(buffer, { isSigned });
  }

  readDouble(): number {
    const buffer = this.read(8);
    return new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength).getFloat64(0, true);
  }

  readInt128(isSigned = true): bigint {
    const buffer = this.read(128 / 8);
    return intFromBytes(buffer, { isSigned });
  }

  readInt256(isSigned = true): bigint {
    const buffer = this.read(256 / 8);
    return intFromBytes(buffer, { isSigned });
  }

  readBytes(): Uint8Array<ArrayBuffer> {
    let L = this.read(1)[0];
    let padding: number;
    if (L > 253) {
      L = this.readInt24();
      padding = L % 4;
    } else {
      padding = (L + 1) % 4;
    }
    const bytes = this.read(L);
    if (padding > 0) {
      padding = 4 - padding;
      this.read(padding);
    }
    return bytes;
  }

  readString(): string {
    return decodeText(this.readBytes());
  }

  async readType(name: string, schema: Schema): Promise<any> {
    if (isOptionalParam(name)) {
      name = getOptionalParamInnerType(name);
    }
    const primitive = this.#deserializePrimitive(name);
    if (primitive !== undefined) {
      return primitive;
    }
    const id = this.readInt32(false);
    if (name === X) {
      const typeName = schema.identifierToName[id];
      if (!typeName) {
        throw new TLError(`Unknown constructor ID: ${constructorIdToHex(id)}`, this.#path);
      }
      this.unreadInt32();
      return await this.readType(typeName, schema);
    }
    if (id === VECTOR) {
      return await this.#deserializeVector(name, schema);
    }
    const definition = schema.definitions[name];
    if (definition) {
      return await this.#deserializeType(name, definition, id, schema);
    }
    const deserializedEnum = await this.#deserializeEnum(name, id, schema);
    if (deserializedEnum !== undefined) {
      return deserializedEnum;
    }
    throw new TLError(`Unknown type: ${name}#${constructorIdToHex(id)}`, this.#path);
  }

  async #deserializeEnum(type: string, id: number, schema: Schema) {
    const name = schema.identifierToName[id];
    if (!name) {
      return;
    }
    const definition = schema.definitions[name];
    if (definition[2] !== type) {
      return;
    }
    return await this.#deserializeType(name, definition, id, schema);
  }

  async #deserializeType(type: string, desc: ObjectDefinition, id: number, schema: Schema) {
    if (desc[0] !== id) {
      throw new TLError(`Expected constructor with ID ${constructorIdToHex(desc[0])} but received ${constructorIdToHex(id)}`, this.#path);
    }

    let isFirstPathElementExisting = false;
    const type_: Record<string, any> = { _: type };
    const flagFields: Record<string, number> = {};
    for (const [name, fieldType] of desc[1]) {
      if (isOptionalParam(fieldType)) {
        const { flagField, bitIndex } = analyzeOptionalParam(fieldType);
        const bits = flagFields[flagField];
        if ((bits & (1 << bitIndex)) === 0) {
          continue;
        }
      }

      if (fieldType === "#") {
        flagFields[name] = this.readInt32();
        continue;
      }

      const pathElement = `[${type}.]${name}`;
      if (isFirstPathElementExisting) {
        this.#path[this.#path.length - 1] = pathElement;
      } else {
        this.#path.push(pathElement);
        isFirstPathElementExisting = true;
      }

      const value = await this.readType(fieldType, schema);
      if (typeof value !== "boolean" || value) {
        type_[name] = value;
      }
    }

    return type_;
  }

  async #deserializeVector(type: string, schema: Schema) {
    const itemType = getVectorItemType(type);
    if (!itemType) {
      throw new TLError(`Expected Vector but received ${type}`, this.#path);
    }
    const size = this.readInt32();
    const array = new Array<any>();
    for (let i = 0; i < size; ++i) {
      array.push(await this.readType(itemType, schema));
    }
    return array;
  }

  #deserializePrimitive(type: string) {
    switch (type) {
      case "bytes":
        return this.readBytes();
      case "int128":
        return this.readInt128();
      case "int256":
        return this.readInt256();
      case "double":
        return this.readDouble();
      case "long":
        return this.readInt64();
      case "true":
        return true;
      case "int":
        return this.readInt32();
      case "Bool": {
        const id = this.readInt32(false);
        if (id === BOOL_TRUE) {
          return true;
        } else if (id === BOOL_FALSE) {
          return false;
        } else {
          throw new TLError(`Expected boolTrue or boolFalse but received ${constructorIdToHex(id)}`, this.#path);
        }
      }
      case "string":
        return this.readString();
    }
  }
}
