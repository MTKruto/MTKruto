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

import { id, name, serialize } from "./1_tl_object.ts";
import { TLReader } from "./4_tl_reader.ts";
import { TLWriter } from "./5_tl_writer.ts";
import { calculateLength, Message_ } from "./7_message.ts";

export class MessageContainer {
  static get [id](): number {
    return 0x73F1F8DC;
  }

  get [name](): string {
    return "msg_container";
  }

  constructor(public readonly id: bigint, public readonly seqNo: number, public messages: Message_[]) {
  }

  [serialize](): Uint8Array {
    const writer = new TLWriter();
    writer.writeInt64(this.id);
    writer.writeInt32(this.seqNo);
    writer.writeInt32(8 + this.messages.map(calculateLength).reduce((a, b) => a + b));
    writer.writeInt32(MessageContainer[id], false);
    writer.writeInt32(this.messages.length);
    for (const message of this.messages) {
      writer.write(message[serialize]());
    }
    return writer.buffer;
  }

  static deserialize(buffer: Uint8Array): Message_[] {
    const reader = new TLReader(buffer);
    const length = reader.readInt32();
    const messages = new Array<Message_>();
    for (let i = 0; i < length; i++) {
      messages.push(Message_.deserialize(reader));
    }
    return messages;
  }
}
