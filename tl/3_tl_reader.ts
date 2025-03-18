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

import { TLRawReader } from "./0_tl_raw_reader.ts";
import { AnyObject, getEnum, getType, Parameters, Types } from "./0_api.ts";
import { analyzeOptionalParam, getOptionalParamInnerType, isOptionalParam } from "../2_tl.ts";
import { unreachable } from "../0_deps.ts";
import { gunzip } from "../1_utilities.ts";
import { BOOL_FALSE, BOOL_TRUE, GZIP_PACKED, VECTOR } from "./1_utilities.ts";

export type ReadObject = boolean | AnyObject | Array<ReadObject>;

export class TLReader extends TLRawReader {
  async deserialize(type: string): Promise<any> {
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
    if (id == VECTOR) {
      return await this.#deserializeVector(type);
    }
    const enum_ = getEnum(type);
    if (enum_) {
      return await this.#deserializeEnum(enum_, id);
    }
    const type_ = getType(type);
    if (type_) {
      return await this.#deserializeType(type, type_, id);
    }
    unreachable(`unknown type: ${type}`);
  }

  async #deserializeEnum(enum_: (keyof Types)[], id: number) {
    const validTypes: [string, Parameters | undefined][] = enum_.map((v) => [v, getType(v)]);
    const type = validTypes.find((v) => v[1] && v[1][0] == id);
    if (!type || !type[1]) {
      unreachable(`constructor not in enum: ${id.toString(16)}`);
    }
    return await this.#deserializeType(type[0], type[1], id);
  }

  async #deserializeType(type: string, desc: Parameters, id: number) {
    if (desc[0] != id) {
      unreachable(`expected constructor ${desc[0].toString(16)} but got ${id}`);
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
    if (!type.startsWith("Vector<")) {
      unreachable();
    }
    type = type.slice("Vector<".length).slice(0, -1);
    const size = this.readInt32();
    const array = new Array<any>();
    for (let i = 0; i < size; ++i) {
      array.push(await this.deserialize(type));
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
