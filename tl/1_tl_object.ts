import { assertEquals, assertFalse } from "../deps.ts";
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

export type Param =
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

export const length = Symbol("length");

export const serialize = Symbol();

export const as = Symbol();

export function isOptionalParam(ntype: string) {
  return ntype.includes("?");
}
export function analyzeOptionalParam(ntype: string) {
  if (!isOptionalParam(ntype)) {
    throw new Error("Parameter not optional");
  }

  const flagField = ntype.split(".")[0];
  assertEquals(typeof flagField, "string");

  const bitIndex = Number(ntype.split("?")[0].split(".")[1]);
  assertFalse(isNaN(bitIndex));

  return { flagField, bitIndex };
}

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
  const valueRepr = value == null ? null : value.constructor.name;
  if (isTLObjectConstructor(type)) {
    if (
      (type.name == "TypeX" && value instanceof TLObject) ||
      value instanceof type
    ) {
      writer.write(value[serialize]());
      return;
    } else {
      throw new TypeError(`Expected ${type.name} but received ${valueRepr}`);
    }
  }

  if (type == Uint8Array) {
    if ((value instanceof Uint8Array)) {
      writer.writeBytes(value);
    } else {
      throw new TypeError(`Expected Uint8Array but received ${valueRepr}`);
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
        throw new TypeError(`Expected bigint but received ${valueRepr}`);
      }
      break;
    case "boolean":
      if (typeof value === "boolean") {
        if (value) {
          writer.writeInt32(0x997275B5);
        } else {
          writer.writeInt32(0xBC799737);
        }
      } else {
        throw new TypeError(`Expected boolean but received ${valueRepr}`);
      }
      break;
    case "number":
      if (typeof value === "number") {
        writer.writeInt32(value);
      } else {
        throw new TypeError(`Expected number but received ${valueRepr}`);
      }
      break;
    case "string":
      if (typeof value === "string") {
        writer.writeString(value);
      } else if (value instanceof Uint8Array) {
        writer.writeBytes(value);
      } else {
        throw new TypeError(`Expected string or Uint8Array but received ${valueRepr}`);
      }
      break;
    case "true":
      if (value !== true) {
        throw new TypeError(`Expected true but received ${valueRepr}`);
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

  get [length]() {
    return this[serialize]().byteLength;
  }

  [serialize]() {
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
          throw new TypeError("Expected array");
        }
        writer.writeInt32(0x1CB5C415); // vector constructor
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

  [as]<T extends TLObjectConstructor<InstanceType<T>>>(constructor: T) {
    if (this instanceof constructor) {
      return this as InstanceType<T>;
    } else {
      throw new TypeError(`Expected ${constructor.name} but received ${this.constructor.name}`);
    }
  }
}

export interface TLObjectConstructor<T = TLObject> {
  // deno-lint-ignore no-explicit-any
  new (params: any): T;
  [paramDesc]: ParamDesc;
}
export function isTLObjectConstructor(t: unknown): t is typeof TLObject {
  // deno-lint-ignore no-explicit-any
  return (t as any)[paramDesc] instanceof Array;
}
