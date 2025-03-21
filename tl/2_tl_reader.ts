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

import { TLError, TLRawReader } from "./0_tl_raw_reader.ts";
import { AnyObject, getObjectIdentifier, ObjectDefinition } from "./0_api.ts";
import { unreachable } from "../0_deps.ts";
import { gunzip } from "../1_utilities.ts";
import { analyzeOptionalParam, BOOL_FALSE, BOOL_TRUE, getOptionalParamInnerType, getVectorItemType, GZIP_PACKED, isOptionalParam, VECTOR, X } from "./1_utilities.ts";
import { Api } from "../2_tl.ts";

export type ReadObject = boolean | number | bigint | string | Uint8Array | AnyObject | Array<ReadObject>;

export class TLReader extends TLRawReader {
  async deserialize(type: string): Promise<ReadObject> {
    if (isOptionalParam(type)) {
      type = getOptionalParamInnerType(type);
    }
    const primitive = this.#deserializePrimitive(type);
    if (primitive !== undefined) {
      return primitive;
    }
    const id = this.readInt32(false);
    if (id == GZIP_PACKED) {
      const buffer = await gunzip(this.readBytes());
      return await new TLReader(buffer).deserialize(type);
    }
    if (type == X) {
      const typeName = getObjectIdentifier(id);
      if (!typeName) {
        throw new TLError(`Unknown constructor: ${id.toString(16)}`);
      }
      this.unreadInt32();
      return await this.deserialize(typeName);
    }
    if (id == VECTOR) {
      return await this.#deserializeVector(type);
    }
    const type_ = Api.schema[type];
    if (type_) {
      return await this.#deserializeType(type, type_, id) as ReadObject;
    }
    const deserializedEnum = await this.#deserializeEnum(type, id);
    if (deserializedEnum !== undefined) {
      return deserializedEnum as ReadObject;
    }
    unreachable(`unknown type: ${type} id ${id}`);
  }

  async #deserializeEnum(type: string, id: number) {
    const name = getObjectIdentifier(id);
    if (!name) {
      return;
    }
    const definition = Api.schema[name];
    if (definition[2] != type) {
      return;
    }
    return await this.#deserializeType(name, definition, id);
  }

  async #deserializeType(type: string, desc: ObjectDefinition, id: number) {
    if (desc[0] != id) {
      throw new TLError(`Expected constructor ${desc[0].toString(16)} but got ${id}`);
    }

    const type_: Record<string, any> = { _: type };
    const flagFields: Record<string, number> = {};
    for (const [name, type] of desc[1]) {
      if (isOptionalParam(type)) {
        const { flagField, bitIndex } = analyzeOptionalParam(type);
        const bits = flagFields[flagField];
        if ((bits & (1 << bitIndex)) == 0) {
          continue;
        }
      }

      if (type == "#") {
        flagFields[name] = this.readInt32();
        continue;
      }
      const value = await this.deserialize(type);
      if (typeof value !== "boolean" || value) {
        type_[name] = value;
      }
    }

    return type_;
  }

  async #deserializeVector(type: string) {
    const itemType = getVectorItemType(type);
    if (!itemType) {
      throw new TLError(`Expected Vector but received ${type}`);
    }
    const size = this.readInt32();
    const array = new Array<any>();
    for (let i = 0; i < size; ++i) {
      array.push(await this.deserialize(itemType));
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
        if (id == BOOL_TRUE) {
          return true;
        } else if (id == BOOL_FALSE) {
          return false;
        } else {
          unreachable(`expected boolTrue or boolFalse but got ${id}`);
        }
        break;
      }
      case "string":
        return this.readString();
    }
  }
}
