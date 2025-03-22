// deno-lint-ignore-file no-explicit-any

import { unreachable } from "../0_deps.ts";
import { Schema } from "./0_types.ts";

export function isValidObject(object: any, schema: Schema) {
  return object != null && typeof object === "object" && typeof object._ === "string" && schema.definitions[object._] !== undefined;
}
export function assertIsValidObject(object: any, schema: Schema) {
  if (!isValidObject(object, schema)) {
    unreachable();
  }
}

export function is(typeName: string, value: any, schema: Schema) {
  if (!isValidObject(value, schema)) {
    return false;
  } else {
    return value._ === typeName;
  }
}
export function isOneOf(names: string[], value: unknown, schema: Schema) {
  return names.some((v) => is(v, value, schema));
}
export function isOfEnum(name: string, value: any, schema: Schema) {
  return isValidType(value, schema) && schema.definitions[value._][2] == enumName;
}
export function as(name: string, value: unknown, schema: Schema) {
  if (is(name, value, schema)) {
    return value;
  } else {
    unreachable();
  }
}

export function mustGetReturnType(name: string, schema: Schema): string {
  const type = schema.definitions[name];
  if (!type || !type[2]) {
    unreachable();
  }
  return type[2];
}
