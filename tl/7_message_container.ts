import { id } from "./1_tl_object.ts";
import { TLReader } from "./3_tl_reader.ts";
import { TLWriter } from "./4_tl_writer.ts";
import { Message } from "./6_message.ts";

export class MessageContainer {
  static get [id]() {
    return 0x73F1F8DC;
  }

  constructor(public messages: Message[]) {
  }

  serialize() {
    const writer = new TLWriter();
    writer.writeInt32(MessageContainer[id]);
    writer.writeInt32(this.messages.length);
    for (const message of this.messages) {
      writer.write(message.serialize());
    }
    return writer.buffer;
  }

  static deserialize(buffer: Uint8Array) {
    const reader = new TLReader(buffer);
    const length = reader.readInt32();
    const messages = new Array<Message>();
    for (let i = 0; i < length; i++) {
      messages.push(Message.deserialize(reader));
    }
    return new MessageContainer(messages);
  }
}
