import { ConnectionError, TransportError } from "../0_errors.ts";
import { bigIntFromBuffer } from "../1_utilities.ts";
import { TLReader } from "../tl/1_tl_reader.ts";
import { TLWriter } from "../tl/1_tl_writer.ts";
import { Session } from "./1_session.ts";

export class SessionPlain extends Session implements Session {
  async send(data: Uint8Array) {
    if (!this.connected) {
      throw new ConnectionError("Not connected.");
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

  async receive() {
    if (!this.connected) {
      throw new ConnectionError("Not connected.");
    }

    const buffer = await this.transport.transport.receive();
    if (buffer.length == 4) {
      const int = bigIntFromBuffer(buffer, true, true);
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
