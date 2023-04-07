// deno-lint-ignore-file no-explicit-any
import { schema } from "./schema.ts";

let entries = schema
  .methods
  .map((
    v: any,
  ) => [BigInt(v.id), JSON.parse(JSON.stringify({ ...v, id: undefined }))]);
export const METHOD_MAP = new Map(entries);

export const METHOD_ID_MAP = new Map(
  schema
    .methods
    .map((v: any) => [v.method, BigInt(v.id)]),
);

entries = schema
  .constructors
  .map((
    v: any,
  ) => [BigInt(v.id), JSON.parse(JSON.stringify({ ...v, id: undefined }))]);
export const CONSTRUCTOR_MAP = new Map(entries);

export const CONSTRUCTOR_ID_MAP = new Map(
  schema
    .constructors
    .map((v: any) => [v.method, BigInt(v.id)]),
);
