export * from "https://deno.land/std@0.217.0/assert/mod.ts";

export * as path from "https://deno.land/std@0.217.0/path/mod.ts";

export { decodeBase64, encodeBase64 } from "https://deno.land/std@0.217.0/encoding/base64.ts";

import { contentType as contentType_ } from "https://deno.land/std@0.217.0/media_types/content_type.ts";
export const contentType: typeof contentType_ = (extentionOrType) => {
  if (extentionOrType == "tgs") {
    return "application/x-tgsticker";
  } else {
    return contentType_(extentionOrType);
  }
};
import { extension as extension_ } from "https://deno.land/std@0.217.0/media_types/extension.ts";
export function extension(mimeType: string) {
  if (mimeType == "application/x-tgsticker") {
    return "tgs";
  } else {
    return extension_(mimeType) || "unknown";
  }
}

export { ctr256, factorize, ige256Decrypt, ige256Encrypt, init as initTgCrypto } from "https://deno.land/x/tgcrypto@0.3.3/mod.ts";

export { gunzip, gzip } from "https://raw.githubusercontent.com/MTKruto/compress/main/mod.ts";

export { Parser } from "https://deno.land/x/html_parser@v0.1.3/src/mod.ts";
