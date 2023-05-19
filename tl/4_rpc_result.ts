import { id, MaybeVectorTLObject } from "./1_tl_object.ts";
import { TLReader } from "./3_tl_reader.ts";

export class RPCResult {
  static get [id]() {
    return 0xF35C6D01;
  }

  constructor(
    public readonly messageId: bigint,
    public readonly result: MaybeVectorTLObject,
  ) {
  }

  static deserialize(buffer: Uint8Array) {
    const reader = new TLReader(buffer);
    const messageId = reader.readInt64();
    const result = reader.readObject();
    return new RPCResult(messageId, result);
  }
}
