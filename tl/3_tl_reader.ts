import { TLRawReader } from "./0_tl_raw_reader.ts";
import { paramDesc, TLObject } from "./1_tl_object.ts";
import { map } from "./2_types.ts";
import { deserialize } from "./3_tl_object_deserializer.ts";

export type ReadObject = TLObject | Array<ReadObject | TLObject>;

export class TLReader extends TLRawReader {
  readObject(id?: number): ReadObject {
    if (!id) {
      id = this.readInt32(false);
    }
    if (id == 0x1CB5C415) {
      const count = this.readInt32();
      const items = new Array<ReadObject>();
      for (let i = 0; i < count; i++) {
        items.push(this.readObject());
      }
      return items;
    }
    const constructor = map.get(id);
    if (constructor) {
      return deserialize(this, constructor[paramDesc], constructor);
    }
    throw new Error(`Unknown constructor ${id.toString(16)}`);
  }
}
