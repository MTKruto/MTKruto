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
import { AnyObject, getType, getTypeName } from "./0_api.ts";
import { deserialize } from "./2_deserialize.ts";

export type ReadObject = boolean | AnyObject | Array<ReadObject>;

export class TLReader extends TLRawReader {
  readObject(id?: number): ReadObject {
    if (!id) {
      id = this.readInt32(false);
    }
    if (id == 0x1CB5C415) {
      const count = this.readInt32();
      const items = new Array<any>();
      for (let i = 0; i < count; i++) {
        items.push(this.readObject());
      }
      return items;
    } else if (id == 0x997275b5) {
      return true;
    } else if (id == 0xbc799737) {
      return false;
    }
    const constructor = getTypeName(id);
    if (constructor) {
      return deserialize(this, getType(constructor)![1], constructor);
    }
    throw new TLError(`Unknown constructor ${id.toString(16)}`);
  }
}
