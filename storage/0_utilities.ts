import { base64Decode, base64Encode } from "../0_deps.ts";
import { UNREACHABLE } from "../1_utilities.ts";
import { StorageKeyPart } from "./0_storage.ts";

export enum ValueType {
  Boolean,
  Number,
  String,
  BigInt,
  Date,
  Uint8Array,
  Array,
}

export function toString(value: unknown): string {
  if (typeof value === "boolean") {
    return JSON.stringify([ValueType.Boolean, value]);
  } else if (typeof value === "number") {
    return JSON.stringify([ValueType.Number, value]);
  } else if (typeof value === "string") {
    return JSON.stringify([ValueType.String, value]);
  } else if (typeof value == "bigint") {
    return JSON.stringify([ValueType.BigInt, String(value)]);
  } else if (value instanceof Date) {
    return JSON.stringify([ValueType.Date, value.getTime()]);
  } else if (value instanceof Uint8Array) {
    return JSON.stringify([ValueType.Uint8Array, base64Encode(value)]);
  } else if (Array.isArray(value)) {
    return JSON.stringify([ValueType.Array, value.map(toString)]);
  } else {
    UNREACHABLE();
  }
}

export function fromString<T>(string: string) {
  const [type, value] = JSON.parse(string);
  if (type == ValueType.Boolean || type == ValueType.Number || type == ValueType.String) {
    return value as T;
  } else if (type == ValueType.BigInt) {
    return BigInt(value) as T;
  } else if (type == ValueType.Date) {
    return new Date(value) as T;
  } else if (type == ValueType.Uint8Array) {
    return base64Decode(value);
  } else if (type == ValueType.Array) {
    return value.map(fromString);
  } else {
    UNREACHABLE();
  }
}

export function fixKey(key: readonly StorageKeyPart[]) {
  return key.map((v) => typeof v === "bigint" ? String(v) : v);
}

// Source: https://gist.github.com/inexorabletash/5462871
// deno-lint-ignore no-explicit-any
export function getPrefixKeyRange(prefix: any) {
  // Ensure prefix is a valid key itself:
  if (indexedDB.cmp(prefix, prefix) !== 0) throw new TypeError();

  const upperKey = successor(prefix);
  if (upperKey === undefined) return IDBKeyRange.lowerBound(prefix);
  return IDBKeyRange.bound(prefix, upperKey, false, true);
}
const MAX_DATE_VALUE = 8640000000000000;
const UPPER_BOUND = {
  NUMBER: new Date(-MAX_DATE_VALUE),
  DATE: "",
  STRING: [],
  ARRAY: undefined,
};
// deno-lint-ignore no-explicit-any
function successor(key: any) {
  if (typeof key === "number") {
    if (key === Infinity) return UPPER_BOUND.NUMBER;
    if (key === -Infinity) return -Number.MAX_VALUE;
    if (key === 0) return Number.MIN_VALUE;
    let epsilon = Math.abs(key);
    while (key + epsilon / 2 !== key) epsilon = epsilon / 2;
    return key + epsilon;
  }

  if (key instanceof Date) {
    if (key.valueOf() + 1 > MAX_DATE_VALUE) return UPPER_BOUND.DATE;
    return new Date(key.valueOf() + 1);
  }

  if (typeof key === "string") {
    let len = key.length;
    while (len > 0) {
      const head = key.substring(0, len - 1),
        tail = key.charCodeAt(len - 1);
      if (tail !== 0xffff) return head + String.fromCharCode(tail + 1);
      key = head;
      --len;
    }
    return UPPER_BOUND.STRING;
  }

  if (Array.isArray(key)) {
    key = key.slice(); // Operate on a copy.
    let len = key.length;
    while (len > 0) {
      const tail = successor(key.pop());
      if (tail !== undefined) {
        key.push(tail);
        return key;
      }
      --len;
    }
    return UPPER_BOUND.ARRAY;
  }

  throw new TypeError();
}
