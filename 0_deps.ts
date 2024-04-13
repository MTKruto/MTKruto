/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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

// connection/1_connection_tcp.ts must be updated too when updating std.
export * from "https://deno.land/std@0.222.1/assert/mod.ts";

export * as path from "https://deno.land/std@0.222.1/path/mod.ts";

export { decodeBase64, encodeBase64 } from "https://deno.land/std@0.222.1/encoding/base64.ts";

import { contentType as contentType_ } from "https://deno.land/std@0.222.1/media_types/content_type.ts";
export const contentType: typeof contentType_ = (extentionOrType) => {
  if (extentionOrType == "tgs") {
    return "application/x-tgsticker";
  } else {
    return contentType_(extentionOrType);
  }
};
import { extension as extension_ } from "https://deno.land/std@0.222.1/media_types/extension.ts";
export function extension(mimeType: string) {
  if (mimeType == "application/x-tgsticker") {
    return "tgs";
  } else {
    return extension_(mimeType) || "unknown";
  }
}

export { createCtr256State, ctr256, type Ctr256State, destroyCtr256State, ige256Decrypt, ige256Encrypt, init as initTgCrypto } from "https://deno.land/x/tgcrypto@0.4.1/mod.ts";

export { gunzip, gzip } from "https://raw.githubusercontent.com/MTKruto/compress/main/mod.ts";

export { Parser } from "https://deno.land/x/html_parser@v0.1.3/src/mod.ts";
