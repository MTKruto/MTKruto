import { ctr256 } from "../0_deps.ts";

export class CTR {
  state: Uint8Array = new Uint8Array(1);

  constructor(public readonly key: Uint8Array, public iv: Uint8Array) {
  }

  call(data: Uint8Array) {
    ctr256(data, this.key, this.iv, this.state);
  }
}
