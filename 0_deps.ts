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

export { assert } from "jsr:@std/assert@1.0.19/assert";
export { assertFalse } from "jsr:@std/assert@1.0.19/false";
export { assertEquals } from "jsr:@std/assert@1.0.19/equals";
export { unreachable } from "jsr:@std/assert@1.0.19/unreachable";
export { AssertionError } from "jsr:@std/assert@1.0.19/assertion-error";

export { join } from "jsr:@std/path@1.1.4/join";
export { extname } from "jsr:@std/path@1.1.4/extname";
export { basename } from "jsr:@std/path@1.1.4/basename";
export { toFileUrl } from "jsr:@std/path@1.1.4/to-file-url";
export { isAbsolute } from "jsr:@std/path@1.1.4/is-absolute";

export { delay, pooledMap } from "jsr:@std/async@1.2.0";

export { concat } from "jsr:@std/bytes@1.0.6/concat";

export { LruCache } from "jsr:@std/cache@0.2.2/lru-cache";

export { iterateReader } from "jsr:@std/io@0.225.3/iterate-reader";

export { format } from "jsr:@std/datetime@0.225.7/format";

export { MINUTE, SECOND } from "jsr:@std/datetime@0.225.7/constants";

export { toArrayBuffer } from "jsr:@std/streams@1.0.17/to-array-buffer";

export { decodeBase64, encodeBase64 } from "jsr:@std/encoding@1.0.10/base64";

export { encodeHex } from "jsr:@std/encoding@1.0.10/hex";

import { contentType as contentType_ } from "jsr:@std/media-types@1.1.0/content-type";
export const contentType: typeof contentType_ = (extentionOrType) => {
  if (extentionOrType === "tgs") {
    return "application/x-tgsticker";
  } else {
    return contentType_(extentionOrType);
  }
};
import { extension as extension_ } from "jsr:@std/media-types@1.1.0/extension";
export function extension(mimeType: string) {
  if (mimeType === "application/x-tgsticker") {
    return "tgs";
  } else {
    return extension_(mimeType) || "unknown";
  }
}

export { ige256Decrypt, ige256Encrypt, init as initTgCrypto } from "jsr:@roj/tgcrypto@1.0.1";
