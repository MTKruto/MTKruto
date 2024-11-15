import { assertEquals } from "../0_deps.ts";
import { CTR } from "./1_crypto.ts";
import { __getCtr256StateValues, createCtr256State, ctr256, type Ctr256State, destroyCtr256State, init as initTgCrypto } from "jsr:@roj/tgcrypto@0.4.1";

await initTgCrypto();

const key = new Uint8Array(32);
const iv = new Uint8Array(16);
const payload = new Uint8Array(3);

Deno.test("equality", async () => {
  const ctr = new CTR(await CTR.importKey(key), iv);
  const ctrOld = new CTROld(key, iv);

  for (let i = 0; i < 20_000; ++i) {
    await ctr.call(payload);
    ctrOld.call(new Uint8Array(payload));

    const { iv } = __getCtr256StateValues(ctrOld.state);

    assertEquals(ctr.iv, iv);
  }
});

class CTROld {
  #key: Uint8Array;
  #state: Ctr256State;

  get state() {
    return this.#state;
  }

  constructor(key: Uint8Array, iv: Uint8Array) {
    this.#state = createCtr256State(iv);
    this.#key = key;
  }

  /** This must not be called after destroying. */
  call(data: Uint8Array) {
    ctr256(data, this.#key, this.#state);
  }

  destroy() {
    destroyCtr256State(this.#state);
  }
}
