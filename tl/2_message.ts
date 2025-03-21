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

import { TLReader } from "./1_tl_reader.ts";
import { TLWriter } from "./1_tl_writer.ts";

// message msg_id:long seqno:int bytes:int body:Object = Message;

export interface message {
  _: "message";
  msg_id: bigint;
  seqno: number;
  body: Uint8Array | msg_container;
}

export async function serializeMessage(message: message): Promise<Uint8Array> {
  let body: Uint8Array;
  if (message.body instanceof Uint8Array) {
    body = message.body;
  } else {
    body = await serializeMsgContainer(message.body);
  }
  const writer = new TLWriter()
    .writeInt64(message.msg_id)
    .writeInt32(message.seqno)
    .writeInt32(body.length)
    .write(body);
  return writer.buffer;
}

export async function deserializeMessage(reader: TLReader): Promise<message> {
  const id_ = reader.readInt64();
  const seqno = reader.readInt32();
  const length = reader.readInt32();
  reader = new TLReader(reader.read(length));
  const reader2 = new TLReader(reader.buffer);
  const id = reader2.readInt32(false);
  let body: message["body"];
  {
    if (id == MSG_CONTAINER_CONSTRUCTOR) {
      body = await deserializeMsgContainer(reader2.buffer);
    } else {
      body = reader.buffer;
    }
  }
  return { _: "message", msg_id: id_, seqno, body };
}

// msg_container#73f1f8dc messages:vector<%Message> = MessageContainer;

export interface msg_container {
  _: "msg_container";
  messages: message[];
}

export const MSG_CONTAINER_CONSTRUCTOR = 0x73F1F8DC;

export async function serializeMsgContainer(msgContainer: msg_container): Promise<Uint8Array> {
  const writer = new TLWriter();
  writer.writeInt32(MSG_CONTAINER_CONSTRUCTOR, false);
  writer.writeInt32(msgContainer.messages.length);
  for (const message of msgContainer.messages) {
    writer.write(await serializeMessage(message));
  }
  return writer.buffer;
}

export async function deserializeMsgContainer(buffer: Uint8Array): Promise<msg_container> {
  const reader = new TLReader(buffer);
  const length = reader.readInt32();
  const messages = new Array<message>();
  for (let i = 0; i < length; i++) {
    messages.push(await deserializeMessage(reader));
  }
  return { _: "msg_container", messages };
}
