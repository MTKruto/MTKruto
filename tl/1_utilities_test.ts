import { assert, assertEquals, assertFalse, assertThrows } from "../0_deps.ts";
import { analyzeOptionalParam, isOptionalParam } from "./1_utilities.ts";

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
