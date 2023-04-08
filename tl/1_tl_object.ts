import { TLRawReader } from "./0_tl_raw_reader.ts";
import { TLRawWriter } from "./0_tl_raw_writer.ts";

type MaybeArrayOf<T> = T | T[];
type MaybeInArray<T> = T | [T];

export type ParamDesc = [
  string,
  MaybeInArray<
    | typeof TLObject
    | typeof Uint8Array
    | "string"
    | "number"
    | "bigint"
    | "boolean"
    | "true"
  >,
  string,
][];

type Param =
  | null
  | MaybeArrayOf<
    | string
    | number
    | bigint
    | boolean
    | Uint8Array
    | TLObject
  >;

export type Params = [
  Param,
  MaybeInArray<
    | typeof TLObject
    | typeof Uint8Array
    | "string"
    | "number"
    | "bigint"
    | "boolean"
    | "true"
  >,
  string,
][];

export const id = Symbol("id");

export const params = Symbol("params");

export const paramDesc = Symbol("paramDesc");

export abstract class TLObject {
  protected abstract get [id](): number;
  protected abstract get [params](): Params;

  protected static get [paramDesc](): ParamDesc {
    throw new Error("Unimplemented");
  }

  serialize() {
    const writer = new TLRawWriter();
    writer.writeInt32(this[id]);

    for (const [value, type, note] of this[params]) {
      if (type instanceof Array) {
        throw new Error("Unimplemented");
      }
      if (type instanceof TLObject) {
        throw new Error("Unimplemented");
      }

      if (type == Uint8Array) {
        if ((value instanceof Uint8Array)) {
          writer.writeBytes(value);
        } else {
          throw new Error("Expected Uint8Array");
        }
      }

      switch (type) {
        case "bigint":
          if (typeof value === "bigint") {
            if (note == "int128") {
              writer.writeInt128(value);
            } else if (note === "int256") {
              writer.writeInt256(value);
            } else {
              writer.writeInt64(value);
            }
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
          } else if (value instanceof Uint8Array) {
            writer.writeBytes(value);
          } else {
            throw new Error("Expected string or Uint8Array");
          }
          break;
        case "true":
          if (value === true) {
            writer.writeInt32(0x997275b5);
          } else {
            throw new Error("Expected true");
          }
      }
    }

    return writer.buffer;
  }
}

export interface TLObjectConstructor<T = TLObject> {
  new (params: Record<string, Param>): T;
  [paramDesc]: ParamDesc;
}

export function deserialize<T extends TLObjectConstructor<InstanceType<T>>>(
  buffer: Uint8Array,
  paramDesc: ParamDesc,
  constructor: T,
): InstanceType<T> {
  const reader = new TLRawReader(buffer);
  const params: Record<string, Param> = {};
  for (const [name, type, note] of paramDesc) {
    if (type instanceof Array) {
      throw new Error("Unimplemented");
    }
    if (type instanceof TLObject) {
      throw new Error("Unimplemented");
    }

    if (type == Uint8Array) {
      params[name] = reader.readBytes();
    }

    switch (type) {
      case "bigint":
        if (note == "int128") {
          params[name] = reader.readInt128();
        } else if (note === "int256") {
          params[name] = reader.readInt256();
        } else {
          params[name] = reader.readInt64();
        }
        break;
      case "boolean":
        params[name] = reader.readInt32() == 0x997275b5;
        break;
      case "number":
        params[name] = reader.readInt32();
        break;
      case "string":
        params[name] = reader.readString();
        break;
      case "true":
        if (reader.readInt32() == 0x997275b5) {
          params[name] = true;
        }
    }
  }

  return new constructor(params);
}
