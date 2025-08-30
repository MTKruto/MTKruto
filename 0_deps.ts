/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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

export { assert } from "jsr:@std/assert@1.0.14/assert";
export { assertFalse } from "jsr:@std/assert@1.0.14/false";
export { assertEquals } from "jsr:@std/assert@1.0.14/equals";
export { unreachable } from "jsr:@std/assert@1.0.14/unreachable";
export { AssertionError } from "jsr:@std/assert@1.0.14/assertion-error";

export { join } from "jsr:@std/path@1.1.2/join";
export { extname } from "jsr:@std/path@1.1.2/extname";
export { basename } from "jsr:@std/path@1.1.2/basename";
export { toFileUrl } from "jsr:@std/path@1.1.2/to-file-url";
export { isAbsolute } from "jsr:@std/path@1.1.2/is-absolute";

export { delay, pooledMap } from "jsr:@std/async@1.0.14";

export { concat } from "jsr:@std/bytes@1.0.6/concat";

export { LruCache } from "jsr:@std/cache@0.2.0/lru-cache";

export { iterateReader } from "jsr:@std/io@0.225.2/iterate-reader";

export { format } from "jsr:@std/datetime@0.225.5/format";

export { MINUTE, SECOND } from "jsr:@std/datetime@0.225.5/constants";

export { toArrayBuffer } from "jsr:@std/streams@1.0.11/to-array-buffer";

export { decodeBase64, encodeBase64 } from "jsr:@std/encoding@1.0.7/base64";

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

export { Parser } from "npm:htmlparser2@10.0.0";
