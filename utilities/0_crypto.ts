import { ctr256 } from "../0_deps.ts";

export class CTR {
  state = new Uint8Array(1);

  constructor(public readonly key: Uint8Array, public iv: Uint8Array) {
  }

  call(data: Uint8Array) {
    const v = new Uint8Array(data); // TODO: don't copy
    ctr256(v, this.key, this.iv, this.state);
    return v;
  }
}
