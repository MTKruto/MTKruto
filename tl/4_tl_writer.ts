import { VECTOR_CONSTRUCTOR } from "../constants.ts";
import { TLRawWriter } from "./0_tl_raw_writer.ts";
import { serialize } from "./1_tl_object.ts";
import { ReadObject } from "./3_tl_reader.ts";

export class TLWriter extends TLRawWriter {
  writeObject(object: ReadObject) {
    if (Array.isArray(object)) {
      this.writeInt32(VECTOR_CONSTRUCTOR, false);
      this.writeInt32(object.length);
      for (const item of object) {
        this.writeObject(item);
      }
    } else {
      this.write(object[serialize]());
    }
    return this;
  }
}
