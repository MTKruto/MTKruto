import { length, TLObject } from "./1_tl_object.ts";
import { TLReader } from "./3_tl_reader.ts";
import { TLWriter } from "./3_tl_writer.ts";
import { GZIPPacked } from "./4_gzip_packed.ts";
import { RPCResult } from "./5_rpc_result.ts";

export class Message {
  constructor(
    public readonly id: bigint,
    public readonly seqNo: number,
    public readonly body: TLObject | RPCResult,
  ) {
  }

  serialize() {
    if (this.body instanceof RPCResult) {
      throw new Error('Not implemented')
    }
    return new TLWriter()
      .writeInt64(this.id)
      .writeInt32(this.seqNo)
      .writeInt32(this.body[length])
      .writeObject(this.body)
      .buffer;
  }

  static deserialize(reader: TLReader) {
    const id = reader.readInt64();
    const seqNo = reader.readInt32();
    const length = reader.readInt32();
    reader = new TLReader(reader.read(length));
    const body = GZIPPacked.readPossiblyCompressedObject(reader);
    return new Message(id, seqNo, body);
  }
}
