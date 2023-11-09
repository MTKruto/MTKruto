import { assertEquals, assertNotEquals } from "../0_deps.ts";
import { fixKey, fromString, toString } from "./0_utilities.ts";

function eq(v: unknown) {
  assertEquals(fromString(toString(v)), v);
}
Deno.test("fromString(toString)", async (t) => {
  await t.step("Boolean", () => {
    eq(true);
    eq(false);
  });

  await t.step("Number", () => {
    eq(Number.MIN_SAFE_INTEGER);
    eq(Number.MAX_SAFE_INTEGER);
    for (let i = 0; i < 1000; ++i) {
      eq(i);
    }
  });

  await t.step("String", () => {
    eq("Hello, world!");
    eq("Hello, world!".repeat(13 + 1024));
  });

  await t.step("BigInt", () => {
    for (let i = 0n; i < 2121n; ++i) {
      eq(i);
    }
  });

  await t.step("Date", () => {
    eq(new Date());
  });

  await t.step("Uint8Array", () => {
    for (let i = 0; i < 1024; ++i) {
      eq(crypto.getRandomValues(new Uint8Array(i)));
    }
  });

  await t.step("Array", () => {
    eq([1, 2, 3, 4, "Hello", 12n, true, false, [new Uint8Array(1024)]]);
  });
});

Deno.test("fixKey uniqueness", () => {
  assertNotEquals(fixKey(["a", "1234"]), fixKey(["a", 1234n]));
  assertNotEquals(fixKey(["a", 1234]), fixKey(["a", 1234n]));
  assertNotEquals(fixKey(["a", "1234"]), fixKey(["a", 1234]));
});
