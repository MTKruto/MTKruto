import { decodeBase64, encodeBase64 } from "../0_deps.ts";
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

export const WEB_STORAGE_PREFIX_EXP = /^[\d\w]+$/;

export function toString(value: unknown): string {
  if (typeof value === "boolean") {
    return `${ValueType.Boolean}${Number(value)}`;
  } else if (typeof value === "number") {
    return `${ValueType.Number}${value}`;
  } else if (typeof value === "string") {
    return `${ValueType.String}${value}`;
  } else if (typeof value == "bigint") {
    return `${ValueType.BigInt}${value}`;
  } else if (value instanceof Date) {
    return `${ValueType.Date}${value.getTime()}`;
  } else if (value instanceof Uint8Array) {
    return `${ValueType.Uint8Array}${encodeBase64(value)}`;
  } else if (Array.isArray(value)) {
    const items = value.map((v) => {
      if (typeof v === "string" || v instanceof Uint8Array || Array.isArray(v)) {
        const s = toString(v).slice(1);
        return String(typeof v === "string" ? ValueType.String : v instanceof Uint8Array ? ValueType.Uint8Array : ValueType.Array) + toString(s.length).slice(1) + "\n" + s;
      } else {
        return toString(v);
      }
    });
    return `${ValueType.Array}${items.join("\n")}`;
  } else {
    UNREACHABLE();
  }
}

export function fromString<T>(string: string): T {
  const [type, value] = [Number(string[0]) as ValueType, string.slice(1)];
  switch (type) {
    case ValueType.Boolean:
      return Boolean(Number(value)) as T;
    case ValueType.Number:
      return Number(value) as T;
    case ValueType.String:
      return value as T;
    case ValueType.BigInt:
      return BigInt(value) as T;
    case ValueType.Date:
      return new Date(Number(value)) as T;
    case ValueType.Uint8Array:
      return decodeBase64(value) as T;
    case ValueType.Array: {
      const arr = [];
      for (let i = 0; i < value.length; ++i) {
        const type = Number(value[i]) as ValueType;
        let value_ = "";
        while (value[++i] != "\n") {
          value_ += value[i];
          if (i == value.length - 1) {
            break;
          }
        }

        switch (type) {
          case ValueType.String:
          case ValueType.Uint8Array:
          case ValueType.Array: {
            const len = Number(value_);
            ++i;
            value_ = value.slice(i, i + Number(value_));
            i += len;
          }
        }
        arr.push(fromString(`${type}${value_}`));
      }
      return arr as T;
    }
  }
}

export function fixKey(key: readonly StorageKeyPart[]) {
  return key.map((v) => typeof v === "bigint" ? String(ValueType.BigInt) + String(v) : typeof v === "string" ? String(ValueType.String) + v : v);
}
export function restoreKey(key: readonly StorageKeyPart[]) {
  return key.map((v) => {
    if (typeof v === "string") {
      const t = Number(v[0]);
      if (t == ValueType.BigInt) {
        return BigInt(v.slice(1));
      } else if (t == ValueType.String) {
        return v.slice(1);
      } else {
        return v;
      }
    } else {
      return v;
    }
  });
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

export function isInRange(key: StorageKeyPart[], start: readonly StorageKeyPart[], end: readonly StorageKeyPart[]) {
  for (const [i, part] of key.entries()) {
    const left = start[i];
    const right = end[i];
    if (left === undefined || right === undefined) {
      return false;
    }
    if (part >= left && part <= right) {
      continue;
    }
    return false;
  }
  return true;
}
