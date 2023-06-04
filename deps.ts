export * from "https://deno.land/std@0.190.0/testing/asserts.ts";

export { ctr256Decrypt, ctr256Encrypt, factorize, ige256Decrypt, ige256Encrypt, init as initTgCrypto } from "https://deno.land/x/tgcrypto@0.1.3/mod.ts";

export { gunzip, gzip } from "https://raw.githubusercontent.com/MTKruto/compress/master/gzip/gzip.ts";

export { Mutex } from "https://esm.sh/async-mutex@0.4.0";

export { Parser } from "https://deno.land/x/html_parser@v0.1.3/src/mod.ts";

import { debug as debug_ } from "https://raw.githubusercontent.com/MTKruto/debug/master/mod.ts";

export const debug: typeof debug_ = (v) => debug_(`mtkruto__${v}`);

export { queue } from "https://deno.land/x/q@v0.0.1/mod.ts";

export { decode as base64Decode, encode as base64Encode } from "https://deno.land/std@0.190.0/encoding/base64.ts";
