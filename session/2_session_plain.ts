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

import { ConnectionError, TransportError } from "../0_errors.ts";
import { intFromBytes } from "../1_utilities.ts";
import { TLReader } from "../tl/1_tl_reader.ts";
import { TLWriter } from "../tl/1_tl_writer.ts";
import { Session } from "./1_session.ts";

export class SessionPlain extends Session implements Session {
  async send(data: Uint8Array): Promise<bigint> {
    if (!this.connected) {
      throw new ConnectionError("The connection is not open.");
    }
    const messageId = this.state.nextMessageId();

    const writer = new TLWriter();
    writer.writeInt64(0n); // auth key ID
    writer.writeInt64(messageId);
    writer.writeInt32(data.length);
    writer.write(data);

    const payload = writer.buffer;
    await this.transport.transport.send(payload);
    return messageId;
  }

  async receive(): Promise<Uint8Array> {
    if (!this.connected) {
      throw new ConnectionError("The connection is not open.");
    }

    const buffer = await this.transport.transport.receive();
    if (buffer.length === 4) {
      const int = intFromBytes(buffer);
      throw new TransportError(Number(int));
    }

    const reader = new TLReader(buffer);
    const _authKeyId = reader.readInt64();
    const _messageId = reader.readInt64();
    const dataLength = reader.readInt32();
    const data = reader.read(dataLength);

    return data;
  }
}
