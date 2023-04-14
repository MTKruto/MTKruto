import { TLRawWriter } from "./0_tl_raw_writer.ts";
import { TLObject } from "./1_tl_object.ts";

export class TLWriter extends TLRawWriter {
  writeObject(object: TLObject) {
    this.write(object.serialize());
    return this;
  }
}
