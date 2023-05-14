import { assert, assertEquals, assertFalse, assertThrows } from "../deps.ts";
import { analyzeOptionalParam, isOptionalParam } from "./1_tl_object.ts";

Deno.test("isOptionalParam", () => {
  assert(isOptionalParam("flags.8?string"));
  assertFalse(isOptionalParam("long"));
});

Deno.test("analyzeOptionalParam", () => {
  assertThrows(() => analyzeOptionalParam("long"));

  const { flagField, bitIndex } = analyzeOptionalParam("flags.0?long");

  assertEquals(flagField, "flags");
  assertEquals(bitIndex, 0);
});
