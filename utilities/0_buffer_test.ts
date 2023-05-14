import { assertEquals } from "../deps.ts";
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
