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

import { assertEquals } from "../0_deps.ts";
import { TLReader } from "./1_tl_reader.ts";
import { TLWriter } from "./1_tl_writer.ts";
import { deserializeMessage, type message, writeMessage } from "./2_message.ts";

function serializeMessage(message: message) {
  const writer = new TLWriter();
  writeMessage(writer, message);
  return writer.buffer;
}

Deno.test("writeMessage writes to an existing writer", () => {
  const message: message = { _: "message", msg_id: 1n, seqno: 2, body: new Uint8Array([3, 4, 5, 6]) };
  const writer = new TLWriter();
  writer.writeInt32(7);
  writeMessage(writer, message);
  assertEquals(writer.buffer.subarray(4), serializeMessage(message));
});

Deno.test("deserializeMessage returns a body view", () => {
  const message: message = { _: "message", msg_id: 1n, seqno: 2, body: new Uint8Array([3, 4, 5, 6]) };
  const buffer = serializeMessage(message);
  const deserialized = deserializeMessage(new TLReader(buffer));
  assertEquals(deserialized, message);

  (deserialized.body as Uint8Array)[0] = 7;
  assertEquals(buffer[16], 7);
});

Deno.test("message container round trip", () => {
  const child: message = { _: "message", msg_id: 1n, seqno: 2, body: new Uint8Array([3, 4, 5, 6]) };
  const nested: message = { _: "message", msg_id: 7n, seqno: 8, body: { _: "msg_container", messages: [child] } };
  const message: message = { _: "message", msg_id: 9n, seqno: 10, body: { _: "msg_container", messages: [child, nested] } };
  assertEquals(deserializeMessage(new TLReader(serializeMessage(message))), message);
});
