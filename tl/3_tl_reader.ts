import { TLRawReader } from "./0_tl_raw_reader.ts";
import { paramDesc } from "./1_tl_object.ts";
import { deserialize } from "./3_tl_object_deserializer.ts";
import { map } from "./2_constructors.ts";
import { gunzip } from "https://deno.land/x/compress@v0.4.5/zlib/mod.ts";

export class TLReader extends TLRawReader {
  readObject(id?: number) {
    if (!id) {
      id = this.readInt32(false);
    }
    if (id == 0x3072cfa1) {
      const data = this.readBytes();
      this._buffer = gunzip(data);
      id = this.readInt32(false);
    }
    const constructor = map.get(id);
    if (constructor) {
      return deserialize(this, constructor[paramDesc], constructor);
    }
    throw new Error(`Uknown constructor ${id.toString(16)}`);
  }
}
