import { VECTOR_CONSTRUCTOR } from "../1_utilities.ts";
import { TLRawWriter } from "./0_tl_raw_writer.ts";
import { serialize } from "./1_tl_object.ts";
import { ReadObject } from "./4_tl_reader.ts";

export class TLWriter extends TLRawWriter {
  writeObject(object: ReadObject): typeof this {
    if (Array.isArray(object)) {
      this.writeInt32(VECTOR_CONSTRUCTOR, false);
      this.writeInt32(object.length);
      for (const item of object) {
        this.writeObject(item);
      }
    } else if (typeof object === "boolean") {
      if (object) {
        this.writeInt32(0x997275b5, false);
      } else {
        this.writeInt32(0xbc799737, false);
      }
    } else {
      this.write(object[serialize]());
    }
    return this;
  }
}
