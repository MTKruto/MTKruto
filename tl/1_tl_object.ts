import { assertEquals } from "https://deno.land/std@0.181.0/testing/asserts.ts";
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
function isTLObjectConstructor(t: unknown): t is typeof TLObject {
  // deno-lint-ignore no-explicit-any
  return (t as any)[paramDesc] instanceof Array;
}

function deserializeSingleParam(
  reader: TLRawReader,
  type:
    | typeof Uint8Array
    | "string"
    | "number"
    | "bigint"
    | "boolean"
    | "true",
  note: string,
) {
  if (type == Uint8Array) {
    return reader.readBytes();
  } else {
    switch (type) {
      case "bigint":
        if (note == "int128") {
          return reader.readInt128();
        } else if (note === "int256") {
          return reader.readInt256();
        } else {
          return reader.readInt64();
        }
      case "boolean":
        return reader.readInt32() == 0x997275b5;
      case "number":
        return reader.readInt32();
      case "string":
        return reader.readString();
      case "true":
        if (reader.readInt32() == 0x997275b5) {
          return true;
        } else {
          return undefined;
        }
      default:
        throw new Error(`Unexpected type ${type}`);
    }
  }
}
export function deserialize<T extends TLObjectConstructor<InstanceType<T>>>(
  reader: TLRawReader,
  paramDesc: ParamDesc,
  constructor: T,
): InstanceType<T> {
  const params: Record<string, Param> = {};
  for (const [name, type, note] of paramDesc) {
    if (isTLObjectConstructor(type)) {
      throw new Error("Unimplemented");
    }
    if (type instanceof Array) {
      assertEquals(reader.readInt32(), 0x1cb5c415);
      const count = reader.readInt32();
      const items = new Array<
        NonNullable<ReturnType<typeof deserializeSingleParam>>
      >();
      for (let i = 0; i < count; i++) {
        if (isTLObjectConstructor(type[0])) {
          throw new Error("Unimplemented");
        } else {
          items.push(deserializeSingleParam(reader, type[0], note)!);
        }
      }
      params[name] = items;
      continue;
    }

    const value = deserializeSingleParam(reader, type, note);
    if (value) {
      params[name] = value;
    }
  }

  return new constructor(params);
}
