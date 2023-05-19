import { id, MaybeVectorTLObject } from "./1_tl_object.ts";
import { TLReader } from "./3_tl_reader.ts";
import { TLWriter } from "./3_tl_writer.ts";
import { RPCResult } from "./4_rpc_result.ts";

// TODO: test
function calculateLength(object: MaybeVectorTLObject) {
  let length = 0;
  if (Array.isArray(object)) {
    length += 32 / 8; // vector constructor
    length += 32 / 8; // number of items
    for (const item of object) {
      length += calculateLength(item);
    }
  } else {
    length += object.serialize().length;
  }
  return length;
}

export class Message {
  constructor(
    public readonly id: bigint,
    public readonly seqNo: number,
    public readonly body: MaybeVectorTLObject | RPCResult,
  ) {
  }

  serialize() {
    if (this.body instanceof RPCResult) {
      throw new Error("Not applicable");
    }
    return new TLWriter()
      .writeInt64(this.id)
      .writeInt32(this.seqNo)
      .writeInt32(calculateLength(this.body))
      .writeObject(this.body)
      .buffer;
  }

  static deserialize(reader: TLReader) {
    const id_ = reader.readInt64();
    const seqNo = reader.readInt32();
    const length = reader.readInt32();
    reader = new TLReader(reader.read(length));
    const cid = reader.readInt32(false);
    let body: MaybeVectorTLObject | RPCResult;
    {
      if (cid == RPCResult[id]) {
        body = RPCResult.deserialize(reader.buffer);
      } else {
        body = reader.readObject(cid);
      }
    }
    return new Message(id_, seqNo, body);
  }
}
