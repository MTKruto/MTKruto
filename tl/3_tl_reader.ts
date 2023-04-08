import { TLRawReader } from "./0_tl_raw_reader.ts";
import { deserialize, paramDesc } from "./1_tl_object.ts";
import { map } from "./2_constructors.ts";

export class TLReader extends TLRawReader {
  readObject() {
    const id = this.readInt32(false);
    const constructor = map.get(id);
    if (constructor) {
      return deserialize(this, constructor[paramDesc], constructor);
    }
    throw new Error("Unexpected constructor");
  }
}
