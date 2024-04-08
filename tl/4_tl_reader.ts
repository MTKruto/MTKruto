/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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

import { TLError, TLRawReader } from "./0_tl_raw_reader.ts";
import { paramDesc, TLObject } from "./1_tl_object.ts";
import { map } from "./2_types.ts";
import { deserialize } from "./3_deserialize.ts";

export type ReadObject = boolean | TLObject | Array<ReadObject | TLObject>;

export class TLReader extends TLRawReader {
  readObject(id?: number): ReadObject {
    if (!id) {
      id = this.readInt32(false);
    }
    if (id == 0x1CB5C415) {
      const count = this.readInt32();
      const items = new Array<ReadObject>();
      for (let i = 0; i < count; i++) {
        items.push(this.readObject());
      }
      return items;
    } else if (id == 0x997275b5) {
      return true;
    } else if (id == 0xbc799737) {
      return false;
    }
    const constructor = map.get(id);
    if (constructor) {
      return deserialize(this, constructor[paramDesc], constructor);
    }
    throw new TLError(`Unknown constructor ${id.toString(16)}`);
  }
}
