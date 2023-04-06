export async function sha256(payload: Uint8Array) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", payload));
}

export async function sha1(payload: Uint8Array) {
  return new Uint8Array(await crypto.subtle.digest("SHA-1", payload));
}
