import { ctr256Decrypt, ctr256Encrypt } from "../deps.ts";

export class CTR {
  state = new Uint8Array(1);

  constructor(public readonly key: Uint8Array, public iv: Uint8Array) {
  }

  encrypt(data: Uint8Array) {
    const [encrypted, iv, state] = ctr256Encrypt(
      data,
      this.key,
      this.iv,
      this.state,
    );
    this.iv = iv;
    this.state = state;
    return encrypted;
  }

  decrypt(data: Uint8Array) {
    const [decrypted, iv, state] = ctr256Decrypt(
      data,
      this.key,
      this.iv,
      this.state,
    );
    this.iv = iv;
    this.state = state;
    return decrypted;
  }
}
