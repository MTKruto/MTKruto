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

import { id, name } from "./1_tl_object.ts";
import { ReadObject, TLReader } from "./4_tl_reader.ts";

export class RPCResult {
  static get [id](): number {
    return 0xF35C6D01;
  }

  get [name](): string {
    return "rpc_result";
  }

  constructor(
    public readonly messageId: bigint,
    public readonly result: ReadObject,
  ) {
  }

  static deserialize(buffer: Uint8Array): RPCResult {
    const reader = new TLReader(buffer);
    const messageId = reader.readInt64();
    const result = reader.readObject();
    return new RPCResult(messageId, result);
  }
}
