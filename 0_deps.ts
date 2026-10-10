/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

export { assert } from "@std/assert/assert";
export { assertFalse } from "@std/assert/false";
export { assertEquals } from "@std/assert/equals";
export { unreachable } from "@std/assert/unreachable";
export { AssertionError } from "@std/assert/assertion-error";

export { join } from "@std/path/join";
export { extname } from "@std/path/extname";
export { basename } from "@std/path/basename";
export { toFileUrl } from "@std/path/to-file-url";
export { isAbsolute } from "@std/path/is-absolute";

export { delay } from "@std/async/delay";
export { pooledMap } from "@std/async/pool";

export { concat } from "@std/bytes/concat";
export { equals } from "@std/bytes/equals";
export { startsWith } from "@std/bytes/starts-with";

export { isIPv4, isIPv6 } from "@std/net/unstable-ip";

export { LruCache } from "@std/cache/lru-cache";

export { writeAll } from "@std/io/write-all";

export { format } from "@std/datetime/format";
export { MINUTE, SECOND, WEEK } from "@std/datetime/constants";

export { toArrayBuffer } from "@std/streams/to-array-buffer";

export { decodeHex, encodeHex } from "@std/encoding/hex";
export { decodeBase64, encodeBase64 } from "@std/encoding/base64";

import { contentType as contentType_ } from "@std/media-types/content-type";
export const contentType: typeof contentType_ = (extensionOrType) => {
  if (extensionOrType === "tgs") {
    return "application/x-tgsticker";
  } else {
    return contentType_(extensionOrType);
  }
};
import { extension as extension_ } from "@std/media-types/extension";
export function extension(mimeType: string) {
  if (mimeType === "application/x-tgsticker") {
    return "tgs";
  } else {
    return extension_(mimeType) || "unknown";
  }
}

export { crypto } from "@std/crypto";

import { ige256Decrypt as defaultIge256Decrypt, ige256Encrypt as defaultIge256Encrypt } from "@roj/tgcrypto";
export { init as initTgCrypto } from "@roj/tgcrypto";

export type Ige256 = (data: Uint8Array, key: Uint8Array, iv: Uint8Array) => Uint8Array<ArrayBuffer>;

let ige256Decrypt_: Ige256 = defaultIge256Decrypt;
let ige256Encrypt_: Ige256 = defaultIge256Encrypt;

export function ige256Decrypt(data: Uint8Array, key: Uint8Array, iv: Uint8Array): Uint8Array<ArrayBuffer> {
  return ige256Decrypt_(data, key, iv);
}

export function ige256Encrypt(data: Uint8Array, key: Uint8Array, iv: Uint8Array): Uint8Array<ArrayBuffer> {
  return ige256Encrypt_(data, key, iv);
}

export function setIge256Decrypt(ige256Decrypt: Ige256) {
  ige256Decrypt_ = ige256Decrypt;
}

export function setIge256Encrypt(ige256Encrypt: Ige256) {
  ige256Encrypt_ = ige256Encrypt;
}
