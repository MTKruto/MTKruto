// deno-lint-ignore-file no-explicit-any

import { Schema } from "./0_types.ts";

function isValidObject(object: any, schema: Schema) {
  return object != null && typeof object === "object" && typeof object._ === "string" && schema.definitions[object._] !== undefined;
}
export function assertIsValidObject<T>(object: unknown, schema: Schema): asserts object is T {
  if (!isValidObject(object, schema)) {
    throw new Error("Invalid object");
  }
}
