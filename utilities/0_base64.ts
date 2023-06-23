import { base64Decode, base64Encode } from "../deps.ts";

// TODO: test
export function base64EncodeUrlSafe(data: ArrayBuffer | string) {
  return base64Encode(data).replace(/=*$/, "").replaceAll("+", "-").replaceAll("/", "_");
}

export function base64DecodeUrlSafe(data: string) {
  data = data.replaceAll("_", "/").replaceAll("-", "+");
  if (data.length != 4) {
    data += "=".repeat(4 - data.length % 4);
  }
  return base64Decode(data);
}
