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

import { decodeText } from "../1_utilities.ts";
import { TLError } from "../0_errors.ts";
import type { ObjectDefinition, Schema } from "./0_types.ts";
import { analyzeOptionalParam, BOOL_FALSE, BOOL_TRUE, constructorIdToHex, getOptionalParamInnerType, getVectorItemType, isOptionalParam, VECTOR, X } from "./0_utilities.ts";

export class TLReader {
  #path = new Array<string>();
  protected _buffer: Uint8Array;
  #view: DataView;
  #offset = 0;

  constructor(buffer: Uint8Array) {
    this._buffer = buffer;
    this.#view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  }

  get buffer(): Uint8Array {
    return this._buffer.subarray(this.#offset);
  }

  read(byteCount: number): Uint8Array<ArrayBuffer> {
    const buffer = this.#readView(byteCount).slice();
    return buffer;
  }

  /** Reads bytes without copying them. The returned view aliases the input buffer. */
  readView(byteCount: number): Uint8Array {
    return this.#readView(byteCount);
  }

  #readView(byteCount: number): Uint8Array<ArrayBufferLike> {
    if (this._buffer.byteLength - this.#offset < byteCount) {
      throw new TLError("No data remaining", this.#path);
    }

    const buffer = this._buffer.subarray(this.#offset, this.#offset + byteCount);
    this.#offset += byteCount;
    return buffer;
  }

  #readDataViewOffset(byteCount: number): number {
    if (this._buffer.byteLength - this.#offset < byteCount) {
      throw new TLError("No data remaining", this.#path);
    }

    const offset = this.#offset;
    this.#offset += byteCount;
    return offset;
  }

  unread(count: number) {
    const newOffset = this.#offset - count;
    if (newOffset < 0) {
      throw new TLError("No data has been read", this.#path);
    }

    this.#offset = newOffset;
  }

  readInt24(isSigned = true): number {
    const buffer = this.#readView(24 / 8);
    const value = buffer[0] | (buffer[1] << 8) | (buffer[2] << 16);
    return isSigned ? (value << 8) >> 8 : value;
  }

  readInt32(isSigned = true): number {
    const offset = this.#readDataViewOffset(32 / 8);
    return isSigned ? this.#view.getInt32(offset, true) : this.#view.getUint32(offset, true);
  }

  unreadInt32() {
    this.unread(32 / 8);
  }

  readInt64(isSigned = true): bigint {
    const offset = this.#readDataViewOffset(64 / 8);
    return isSigned ? this.#view.getBigInt64(offset, true) : this.#view.getBigUint64(offset, true);
  }

  readDouble(): number {
    return this.#view.getFloat64(this.#readDataViewOffset(8), true);
  }

  readInt128(isSigned = true): bigint {
    return this.#readLargeInt(128 / 8, isSigned);
  }

  readInt256(isSigned = true): bigint {
    return this.#readLargeInt(256 / 8, isSigned);
  }

  #readLargeInt(byteCount: number, isSigned: boolean): bigint {
    const offset = this.#readDataViewOffset(byteCount);
    let value = 0n;
    for (let i = offset + byteCount - 8; i >= offset; i -= 8) {
      value = (value << 64n) | this.#view.getBigUint64(i, true);
    }
    if (isSigned && (this._buffer[offset + byteCount - 1] & 0x80) !== 0) {
      value -= 1n << BigInt(byteCount * 8);
    }
    return value;
  }

  readBytes(): Uint8Array<ArrayBuffer> {
    return this.#readBytesView().slice();
  }

  #readBytesView(): Uint8Array<ArrayBufferLike> {
    let L = this.#readView(1)[0];
    let padding: number;
    if (L > 253) {
      L = this.readInt24(false);
      padding = L % 4;
    } else {
      padding = (L + 1) % 4;
    }
    const bytes = this.#readView(L);
    if (padding > 0) {
      padding = 4 - padding;
      this.#readView(padding);
    }
    return bytes;
  }

  readString(): string {
    return decodeText(this.#readBytesView());
  }

  readType(name: string, schema: Schema): any {
    if (isOptionalParam(name)) {
      name = getOptionalParamInnerType(name);
    }
    const primitive = this.#deserializePrimitive(name);
    if (primitive !== undefined) {
      return primitive;
    }
    return this.#readNonPrimitiveType(name, schema);
  }

  readResult(name: string, schema: Schema): any {
    return this.#readField(name, schema);
  }

  #readNonPrimitiveType(name: string, schema: Schema): any {
    if (getVectorItemType(name)) {
      return this.#deserializeVector(name, schema);
    }
    const id = this.readInt32(false);
    if (name === X) {
      if (id === BOOL_TRUE) {
        return true;
      } else if (id === BOOL_FALSE) {
        return false;
      }
      const typeName = schema.identifierToName[id];
      if (!typeName) {
        throw new TLError(`Unknown constructor ID: ${constructorIdToHex(id)}`, this.#path);
      }
      const definition = schema.definitions[typeName];
      if (!definition) {
        throw new TLError(`Unknown type: ${typeName}#${constructorIdToHex(id)}`, this.#path);
      }
      return this.#deserializeType(typeName, definition, id, schema);
    }
    const definition = schema.definitions[name];
    if (definition) {
      return this.#deserializeType(name, definition, id, schema);
    }
    const deserializedEnum = this.#deserializeEnum(name, id, schema);
    if (deserializedEnum !== undefined) {
      return deserializedEnum;
    }
    throw new TLError(`Unknown type: ${name}#${constructorIdToHex(id)}`, this.#path);
  }

  #deserializeEnum(type: string, id: number, schema: Schema) {
    const name = schema.identifierToName[id];
    if (!name) {
      return;
    }
    const definition = schema.definitions[name];
    if (definition[2] !== type) {
      return;
    }
    return this.#deserializeType(name, definition, id, schema);
  }

  #deserializeType(type: string, desc: ObjectDefinition, id: number, schema: Schema) {
    if (desc[0] !== id) {
      throw new TLError(`Expected constructor with ID ${constructorIdToHex(desc[0])} but received ${constructorIdToHex(id)}`, this.#path);
    }

    return this.#deserializeTypeFields(type, desc, schema);
  }

  #readField(name: string, schema: Schema): any {
    if (isOptionalParam(name)) {
      name = getOptionalParamInnerType(name);
    }
    const primitive = this.#deserializePrimitive(name);
    if (primitive !== undefined) {
      return primitive;
    }
    const definition = schema.definitions[name];
    if (definition) {
      return this.#deserializeTypeFields(name, definition, schema);
    }
    return this.#readNonPrimitiveType(name, schema);
  }

  #deserializeTypeFields(type: string, desc: ObjectDefinition, schema: Schema) {
    let isFirstPathElementExisting = false;
    const type_: Record<string, any> = { _: type };
    let flagFields: Record<string, number> | undefined;
    for (const [name, fieldType] of desc[1]) {
      if (isOptionalParam(fieldType)) {
        const { flagField, bitIndex } = analyzeOptionalParam(fieldType, this.#path);
        const bits = flagFields?.[flagField] ?? 0;
        if ((bits & (1 << bitIndex)) === 0) {
          continue;
        }
      }

      if (fieldType === "#") {
        (flagFields ??= {})[name] = this.readInt32();
        continue;
      }

      const pathElement = `[${type}.]${name}`;
      if (isFirstPathElementExisting) {
        this.#path[this.#path.length - 1] = pathElement;
      } else {
        this.#path.push(pathElement);
        isFirstPathElementExisting = true;
      }

      const value = this.#readField(fieldType, schema);
      type_[name] = value;
    }

    return type_;
  }

  #deserializeVector(type: string, schema: Schema) {
    const vectorType = getVectorItemType(type);
    if (!vectorType) {
      throw new TLError(`Expected vector but received ${type}`, this.#path);
    }
    if (!vectorType.isBare) {
      const id = this.readInt32(false);
      if (id !== VECTOR) {
        throw new TLError(`Expected constructor with ID ${constructorIdToHex(VECTOR)} but received ${constructorIdToHex(id)}`, this.#path);
      }
    }
    const size = this.readInt32();
    const array = new Array<any>(size);
    for (let i = 0; i < size; ++i) {
      array[i] = this.#readField(vectorType.type, schema);
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
