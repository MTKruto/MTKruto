import { TLObject } from "./1_tl_object.ts";
import { TLReader } from "./3_tl_reader.ts";
import { GZIPPacked } from "./4_gzip_packed.ts";

export class RPCResult {
 static get cid() {
    return 0xf35c6d01;
  }

  constructor(
    public readonly messageId: bigint,
    public readonly result: TLObject,
  ) {
  }

  static deserialize(buffer: Uint8Array) {
    const reader = new TLReader(buffer);
    const messageId = reader.readInt64();
    const result = GZIPPacked.readPossiblyCompressedObject(reader);
    return new RPCResult(messageId, result);
  }
}
