import { gunzip, gzip } from "../deps.ts";
import { TLObject } from "./1_tl_object.ts";
import { TLReader } from "./3_tl_reader.ts";
import { TLWriter } from "./3_tl_writer.ts";
import { RPCResult } from "./5_rpc_result.ts";

export class GZIPPacked {
  static get cid() {
    return 0x3072cfa1;
  }

  constructor(public readonly packedData: TLObject) {
  }

  serialize() {
    return new TLWriter()
      .writeInt32(GZIPPacked.cid)
      .writeBytes(gzip(this.packedData.serialize()))
      .buffer;
  }

  static deserialize(reader: TLReader) {
    const packedDataCompressed = reader.readBytes();
    reader = new TLReader(gunzip(packedDataCompressed));
    const packedData = reader.readObject();
    return new GZIPPacked(packedData);
  }

  static readPossiblyCompressedObject(reader: TLReader): TLObject {
    let object: TLObject;
    {
      const cid = reader.readInt32(false);
      if (cid == GZIPPacked.cid) {
        object = GZIPPacked.deserialize(reader).packedData;
      } else {
        object = reader.readObject(cid);
      }
    }
    return object;
  }
}
