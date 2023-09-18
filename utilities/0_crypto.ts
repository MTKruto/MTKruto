import { ctr256Decrypt, ctr256Encrypt } from "../0_deps.ts";

export class CTR {
  state = new Uint8Array(1);

  constructor(public readonly key: Uint8Array, public iv: Uint8Array) {
  }

  encrypt(data: Uint8Array) {
    const v = new Uint8Array(data); // TODO: don't copy
    const [iv, state] = ctr256Encrypt(
      v,
      this.key,
      this.iv,
      this.state,
    );
    this.iv = iv;
    this.state = state;
    return v;
  }

  decrypt(data: Uint8Array) {
    const v = new Uint8Array(data); // TODO: don't copy
    const [iv, state] = ctr256Decrypt(
      v,
      this.key,
      this.iv,
      this.state,
    );
    this.iv = iv;
    this.state = state;
    return v;
  }
}
