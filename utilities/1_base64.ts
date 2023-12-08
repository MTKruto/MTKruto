import { decodeBase64, encodeBase64 } from "../0_deps.ts";
import { mod } from "./0_bigint.ts";

export function base64EncodeUrlSafe(data: ArrayBuffer | string) {
  return encodeBase64(data).replace(/=*$/, "").replaceAll("+", "-").replaceAll("/", "_");
}

export function base64DecodeUrlSafe(data: string) {
  data = data.replaceAll("_", "/").replaceAll("-", "+");
  if (data.length != 4) {
    data += "=".repeat(mod(-data.length, 4));
  }
  return decodeBase64(data);
}
