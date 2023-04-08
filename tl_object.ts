import { TLWriter } from "./utilities/1_tl_writer.ts";

type MaybeArrayOf<T> = T | T[];
type MaybeInArray<T> = T | [T];

export type Params = [
  | null
  | MaybeArrayOf<
    | string
    | number
    | bigint
    | boolean
    | Uint8Array
    | TLObject
  >,
  MaybeInArray<
    | typeof TLObject
    | typeof Uint8Array
    | "string"
    | "number"
    | "bigint"
    | "boolean"
    | "true"
  >,
][];

export const id = Symbol("id");

export const params = Symbol("params");

export abstract class TLObject {
  protected abstract get [id](): number;
  protected abstract get [params](): Params;

  serialize() {
    const writer = new TLWriter();
    writer.writeInt32(this[id]);

    for (const [value, type] of this[params]) {
      if (type instanceof Array) {
        throw new Error("Unimplemented");
      }
      if (type instanceof TLObject) {
        throw new Error("Unimplemented");
      }

      if (type instanceof Uint8Array) {
        if ((value instanceof Uint8Array)) {
          writer.writeBytes(value);
        } else {
          throw new Error("Expected Uint8Array");
        }
      }

      switch (type) {
        case "bigint":
          if (typeof value === "bigint") {
            writer.writeInt64(value);
          } else {
            throw new Error("Expected bigint");
          }
          break;
        case "boolean":
          if (typeof value === "boolean") {
            if (value) {
              writer.writeInt32(0x997275b5);
            } else {
              writer.writeInt32(0xbc799737);
            }
          } else {
            throw new Error("Expected boolean");
          }
          break;
        case "number":
          if (typeof value === "number") {
            writer.writeInt32(value);
          } else {
            throw new Error("Expected number");
          }
          break;
        case "string":
          if (typeof value === "string") {
            writer.writeString(value);
          } else {
            throw new Error("Expected string");
          }
          break;
        case "true":
          if (value === true) {
            writer.writeInt32(0x997275b5);
          } else {
            throw new Error("Expected true");
          }
      }

      return writer.buffer;
    }
  }
}
