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

import { gunzip } from "../1_utilities.ts";
import { AnyType } from "./0_api.ts";
import { is } from "./1_utilities.ts";
import { TLReader } from "./3_tl_reader.ts";

// rpc_result#f35c6d01 req_msg_id:long result:Object = RpcResult;

export const RPC_RESULT_ID = 0xF35C6D01;

export interface rpc_result {
  _: "rpc_result";
  req_msg_id: bigint;
  // deno-lint-ignore no-explicit-any
  result: any;
}

export async function deserializeRpcResult(buffer: Uint8Array): Promise<rpc_result> {
  const reader = new TLReader(buffer);
  const messageId = reader.readInt64();
  let result = reader.readObject();
  if (is("gzip_packed", result)) {
    result = new TLReader(await gunzip(result.packed_data)).readObject() as AnyType;
  }
  return { _: "rpc_result", req_msg_id: messageId, result };
}
