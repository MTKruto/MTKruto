export async function sha256(payload: Uint8Array) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", payload));
}

export async function sha1(payload: Uint8Array) {
  return new Uint8Array(await crypto.subtle.digest("SHA-1", payload));
}

export function xor(a: Uint8Array, b: Uint8Array) {
  const bytes = new Array<number>();
  for (const i in a) {
    bytes.push(a[i] ^ b[i]);
  }
  return Uint8Array.from(bytes);
}

export function concat(...buffers: [Uint8Array, Uint8Array, ...Uint8Array[]]) {
  return new Uint8Array(buffers.map((v) => Array.from(v)).flat());
}
