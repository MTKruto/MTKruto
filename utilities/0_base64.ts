import { base64Decode, base64Encode } from "../deps.ts";

// TODO: test
export function base64EncodeUrlSafe(data: ArrayBuffer | string) {
  return base64Encode(data).replace(/=*$/, "").replaceAll("+", "-").replaceAll("/", "_");
}

export function base64DecodeUrlSafe(data: string) {
  data = data.replaceAll("_", "/").replaceAll("-", "+");
  return base64Decode(data + "=".repeat(data.length % 4));
}
