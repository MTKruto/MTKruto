import { assertEquals } from "../0_deps.ts";
import { bufferFromBigInt } from "../1_utilities.ts";
import { concat } from "./0_buffer.ts";

Deno.test("concat", () => {
  const iterations = 1_000;

  for (let i = 0; i < iterations; i++) {
    const x = crypto.getRandomValues(new Uint8Array(32));
    const y = crypto.getRandomValues(new Uint8Array(32));
    const z = crypto.getRandomValues(new Uint8Array(32));

    assertEquals(concat(x, y, z), new Uint8Array([...x, ...y, ...z]));
  }
});

Deno.test("bufferFromBigInt", () => {
  assertEquals(bufferFromBigInt(-6203395183255650816n, 64 / 8, true, true), new Uint8Array([0, 126, 173, 164, 242, 28, 233, 169]));
});
