import { assertEquals } from "../0_deps.ts";
import { TLRawReader } from "./0_tl_raw_reader.ts";
import { analyzeOptionalParam, flags, isOptionalParam, isTLObjectConstructor, Param, ParamDesc, paramDesc, TLObject, TLObjectConstructor } from "./1_tl_object.ts";
import { map } from "./2_types.ts";

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
    const cid = reader.readInt32(false);
    const constructor = map.get(cid);
    if (!constructor) {
      throw new Error(`Constructor with ID ${cid.toString(16)} not found`);
    }
    return deserialize(
      reader,
      constructor[paramDesc],
      constructor,
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
        return reader.readInt32(false) == 0x997275B5;
      case "number":
        if (ntype == "double") {
          return reader.readDouble();
        } else {
          return reader.readInt32();
        }
      case "string":
        return reader.readString();
      case "true":
        return true;
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

    if (type instanceof Array) {
      assertEquals(reader.readInt32(false), 0x1CB5C415);
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
    if (typeof value !== "boolean" || value) {
      params[name] = value;
    }
  }

  return new constructor(params);
}
