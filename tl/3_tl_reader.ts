import { TLError, TLRawReader } from "./0_tl_raw_reader.ts";
import { paramDesc, TLObject } from "./1_tl_object.ts";
import { map } from "./2_types.ts";
import { deserialize } from "./3_deserialize.ts";

export type ReadObject = boolean | TLObject | Array<ReadObject | TLObject>;

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
    } else if (id == 0x997275b5) {
      return true;
    } else if (id == 0xbc799737) {
      return false;
    }
    const constructor = map.get(id);
    if (constructor) {
      return deserialize(this, constructor[paramDesc], constructor);
    }
    throw new TLError(`Unknown constructor ${id.toString(16)}`);
  }
}
