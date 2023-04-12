import { assertEquals } from "../deps.ts";
import { analyzeOptionalParam, isOptionalParam } from "../utilities/1_tl.ts";
import { TLRawReader } from "./0_tl_raw_reader.ts";
import { TLRawWriter } from "./0_tl_raw_writer.ts";

type MaybeArrayOf<T> = T | T[];
type MaybeInArray<T> = T | [T];

export type ParamDesc = ([
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
] | [string, typeof flags, "#"])[];

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

export const flags = Symbol("flags");

export type Params = ([
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
] | [string, typeof flags, "#"])[];

export const id = Symbol("id");

export const params = Symbol("params");

export const paramDesc = Symbol("paramDesc");

function serializeSingleParam(
  writer: TLRawWriter,
  value: Param,
  type:
    | typeof TLObject
    | typeof Uint8Array
    | "string"
    | "number"
    | "bigint"
    | "boolean"
    | "true",
  ntype: string,
) {
  if (isTLObjectConstructor(type)) {
    if (
      (type.name == "TypeX" && value instanceof TLObject) ||
      value instanceof type
    ) {
      writer.write(value.serialize());
      return;
    } else {
      throw new Error("a");
    }
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
        if (ntype == "int128") {
          writer.writeInt128(value);
        } else if (ntype === "int256") {
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
export abstract class TLObject {
  protected abstract get [id](): number;
  protected abstract get [params](): Params;

  protected static get [paramDesc](): ParamDesc {
    // unimpl
    return [];
  }

  serialize() {
    const writer = new TLRawWriter();
    writer.writeInt32(this[id], false);

    for (const [value, type, ntype] of this[params]) {
      if (isOptionalParam(ntype) && value == null) {
        continue;
      }

      if (type == flags) {
        let flags = 0;
        const flagField_ = value;

        for (const [value, _, ntype] of this[params]) {
          if (isOptionalParam(ntype)) {
            const { flagField, bitIndex } = analyzeOptionalParam(ntype);

            if (flagField == flagField_) {
              if (value != null) {
                flags |= 1 << bitIndex;
              }
            }
          }
        }
        writer.writeInt32(flags);
        continue;
      }

      if (type instanceof Array) {
        const itemsType = type[0];
        if (!Array.isArray(value)) {
          throw new Error("Expected array");
        }
        writer.writeInt32(0x1cb5c415); // vector constructor
        writer.writeInt32(value.length);
        for (const item of value) {
          serializeSingleParam(writer, item, itemsType, ntype);
        }
        continue;
      }

      serializeSingleParam(writer, value, type, ntype);
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
    | typeof TLObject
    | typeof Uint8Array
    | "string"
    | "number"
    | "bigint"
    | "boolean"
    | "true",
  ntype: string,
) {
  if (isTLObjectConstructor(type)) {
    return deserialize(
      reader,
      type[paramDesc],
      type as unknown as TLObjectConstructor,
    );
  }

  if (type == Uint8Array) {
    return reader.readBytes();
  } else {
    switch (type) {
      case "bigint":
        if (ntype == "int128") {
          return reader.readInt128();
        } else if (ntype === "int256") {
          return reader.readInt256();
        } else {
          return reader.readInt64();
        }
      case "boolean":
        return reader.readInt32(false) == 0x997275b5;
      case "number":
        return reader.readInt32();
      case "string":
        return reader.readString();
      case "true":
        if (reader.readInt32(false) == 0x997275b5) {
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
  const flagFields: Record<string, number> = {};
  for (const [name, type, ntype] of paramDesc) {
    if (isOptionalParam(ntype)) {
      const { flagField, bitIndex } = analyzeOptionalParam(ntype);
      const bits = flagFields[flagField];
      if ((bits & (1 << bitIndex)) == 0) {
        continue;
      }
    }

    if (type == flags && ntype == "#") {
      flagFields[name] = reader.readInt32();
      continue;
    }

    if (isTLObjectConstructor(type)) {
      throw new Error("Unimplemented");
    }

    if (type instanceof Array) {
      assertEquals(reader.readInt32(false), 0x1cb5c415);
      const count = reader.readInt32();
      const items = new Array<
        NonNullable<ReturnType<typeof deserializeSingleParam>>
      >();
      for (let i = 0; i < count; i++) {
        items.push(deserializeSingleParam(reader, type[0], ntype)!);
      }
      params[name] = items;
      continue;
    }

    const value = deserializeSingleParam(reader, type, ntype);
    if (value) {
      params[name] = value;
    }
  }

  return new constructor(params);
}
