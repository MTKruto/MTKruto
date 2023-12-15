export * from "https://deno.land/std@0.209.0/assert/mod.ts";

export * as path from "https://deno.land/std@0.209.0/path/mod.ts";

export { decodeBase64, encodeBase64 } from "https://deno.land/std@0.209.0/encoding/base64.ts";

export { contentType } from "https://deno.land/std@0.209.0/media_types/content_type.ts";

export { ctr256, factorize, ige256Decrypt, ige256Encrypt, init as initTgCrypto } from "https://deno.land/x/tgcrypto@0.3.3/mod.ts";

export { gunzip, gzip } from "https://raw.githubusercontent.com/MTKruto/compress/main/gzip/gzip.ts";

export { Mutex, type MutexInterface } from "https://esm.sh/async-mutex@0.4.0";

export { Parser } from "https://deno.land/x/html_parser@v0.1.3/src/mod.ts";

import { debug as debug_ } from "https://raw.githubusercontent.com/MTKruto/debug/main/mod.ts";

export const debug: typeof debug_ = (v) => debug_(v);
