const encoder = new TextEncoder();
const decoder = new TextDecoder();

export function encodeText(decoded: string) {
  return encoder.encode(decoded);
}

export function decodeText(encoded: Uint8Array) {
  return decoder.decode(encoded);
}
