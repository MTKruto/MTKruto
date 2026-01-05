/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { assertEquals } from "../0_deps.ts";
import { CTR } from "./1_crypto.ts";
import { __getCtr256StateValues, createCtr256State, ctr256, type Ctr256State, destroyCtr256State, init as initTgCrypto } from "jsr:@roj/tgcrypto@0.4.1";

const key = new Uint8Array(32);
const iv = new Uint8Array(16);

Deno.test("equality", async () => {
  await initTgCrypto();
  const ctr = new CTR(await CTR.importKey(key), iv);
  const ctrOld = new CTROld(key, iv);

  for (let i = 0; i < 10_000; ++i) {
    const payload = new Uint8Array(i + 1);
    const ctrResult = await ctr.call(payload);
    const ctrOldResult = new Uint8Array(payload);
    ctrOld.call(ctrOldResult);
    assertEquals(ctrResult, ctrOldResult);

    const ctrOld_state = __getCtr256StateValues(ctrOld.state);
    assertEquals(ctr._state.iv, ctrOld_state.iv);
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
