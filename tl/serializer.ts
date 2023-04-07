// deno-lint-ignore-file no-explicit-any
import { bigIntFromBuffer } from "../utilities/0_bigint.ts";
import { bufferFromBigInt, concat } from "../utilities/0_buffer.ts";
import { serializeString } from "../utilities/1_tl.ts";
import {
  CONSTRUCTOR_ID_MAP,
  CONSTRUCTOR_MAP,
  METHOD_ID_MAP,
  METHOD_MAP,
} from "./maps.ts";

export function serialize(idS: string, params: Record<string, any>) {
  const id = CONSTRUCTOR_ID_MAP.get(idS) ?? METHOD_ID_MAP.get(idS);
  console.log({ id });
  const obj = (CONSTRUCTOR_MAP.get(id) ?? METHOD_MAP.get(id)) as any;
  if (!obj) {
    throw new Error(`${idS} not found`);
  }

  let buffer = bufferFromBigInt(id as any, 4, true, true);

  for (const param of obj.params) {
    const val = params[param.name];
    if (val == undefined) {
      throw new Error(`Missing parameter ${param.name}`);
    }
    switch (param.type) {
      case "int":
        if (typeof val != "bigint" && typeof val != "number") {
          throw new Error(
            `Expected ${param.name} to be bigint or number but got ${typeof val}`,
          );
        }
        buffer = concat(buffer, bufferFromBigInt(val, 4, true, true));
        break;
      case "string":
        if (!(val instanceof Uint8Array) && typeof val != "string") {
          throw new Error(
            `Expected ${param.name} to be string or Uint8Array but got ${typeof val}`,
          );
        }
        buffer = concat(
          buffer,
          serializeString(
            typeof val === "string" ? new TextEncoder().encode(val) : val,
          ),
        );
        break;
      default:
        throw new Error(`Unimplemented param type ${param.type}`);
    }
  }

  return buffer;
}

