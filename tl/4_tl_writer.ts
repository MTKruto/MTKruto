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

import { TLRawWriter } from "./0_tl_raw_writer.ts";
import { VECTOR } from "./1_utilities.ts";
import { serialize } from "./2_serialize.ts";
import { ReadObject } from "./3_tl_reader.ts";

export class TLWriter extends TLRawWriter {
  writeObject(object: ReadObject): typeof this {
    if (Array.isArray(object)) {
      this.writeInt32(VECTOR, false);
      this.writeInt32(object.length);
      for (const item of object) {
        this.writeObject(item);
      }
    } else if (typeof object === "boolean") {
      if (object) {
        this.writeInt32(0x997275B5, false);
      } else {
        this.writeInt32(0xBC799737, false);
      }
    } else {
      this.write(serialize(object));
    }
    return this;
  }
}
