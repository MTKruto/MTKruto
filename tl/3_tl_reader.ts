import { TLRawReader } from "./0_tl_raw_reader.ts";
import { paramDesc } from "./1_tl_object.ts";
import { map } from "./2_constructors.ts";
import { deserialize } from "./3_tl_object_deserializer.ts";

export class TLReader extends TLRawReader {
  readObject(id?: number) {
    if (!id) {
      id = this.readInt32(false);
    }
    const constructor = map.get(id);
    if (constructor) {
      return deserialize(this, constructor[paramDesc], constructor);
    }
    throw new Error(`Uknown constructor ${id.toString(16)}`);
  }
}
