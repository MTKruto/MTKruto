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

import { assertEquals } from "../0_deps.ts";
import { TLRawReader } from "./0_tl_raw_reader.ts";
import { analyzeOptionalParam, getOptionalParamInnerType, isOptionalParam } from "./1_utilities.ts";
import { AnyType, flags, getType, getTypeName } from "./0_api.ts";

function deserializeSingleParam(
  reader: TLRawReader,
  type: unknown,
  ntype: string,
): any {
  if (isOptionalParam(ntype)) {
    ntype = getOptionalParamInnerType(ntype);
  }
  if (type == Uint8Array) {
    return reader.readBytes();
  } else {
    switch (type) {
      case "bigint":
        if (ntype == "int128") {
          return reader.readInt128();
        } else if (ntype === "int256") {
          return reader.readInt256();
        } else {
          return reader.readInt64();
        }
      case "boolean":
        return reader.readInt32(false) == 0x997275B5;
      case "number":
        if (ntype == "double") {
          return reader.readDouble();
        } else {
          return reader.readInt32();
        }
      case "string":
        return reader.readString();
      case "true":
        return true;
      default: {
        const cid = reader.readInt32(false);
        const name = getTypeName(cid);
        if (!name) {
          throw new Error(`Constructor with ID 0x${cid.toString(16).toUpperCase()} not found`);
        }

        return deserialize(
          reader,
          getType(name)![1],
          name,
        );
      }
    }
  }
}
export function deserialize(
  reader: TLRawReader,
  paramDesc: [string, unknown, string][],
  name: string,
): AnyType {
  const type_: Record<string, any> = { _: name };
  const flagFields: Record<string, number> = {};
  for (const [name, type, ntype] of paramDesc) {
    if (isOptionalParam(ntype)) {
      const { flagField, bitIndex } = analyzeOptionalParam(ntype);
      const bits = flagFields[flagField];
      if ((bits & (1 << bitIndex)) == 0) {
        continue;
      }
    }

    if (type == flags && ntype == "#") {
      flagFields[name] = reader.readInt32();
      continue;
    }

    if (type instanceof Array) {
      assertEquals(reader.readInt32(false), 0x1CB5C415);
      const count = reader.readInt32();
      const items = new Array<
        NonNullable<ReturnType<typeof deserializeSingleParam>>
      >();
      for (let i = 0; i < count; i++) {
        items.push(deserializeSingleParam(reader, type[0], ntype)!);
      }
      type_[name] = items;
      continue;
    }

    const value = deserializeSingleParam(reader, type, ntype);
    if (typeof value !== "boolean" || value) {
      type_[name] = value;
    }
  }

  return type_ as AnyType;
}
