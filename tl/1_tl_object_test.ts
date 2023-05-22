import { assert, assertEquals, assertFalse, assertThrows } from "../deps.ts";
import { analyzeOptionalParam, flags, id, isOptionalParam, ParamDesc, paramDesc, Params, params, TLObject } from "./1_tl_object.ts";

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

Deno.test("serialize", () => {
  abstract class TypeTestObject1 extends TLObject {
    //
  }

  class TestObject1 extends TypeTestObject1 {
    string: string;

    protected get [id]() {
      return 0x01010101;
    }

    static get [paramDesc](): ParamDesc {
      return [
        ["string", "string", "string"],
      ];
    }

    protected get [params](): Params {
      return [
        [this.string, "string", "string"],
      ];
    }

    constructor(params: { string: string }) {
      super();
      this.string = params.string;
    }
  }

  class TestObject2 extends TLObject {
    boolean1: boolean;
    boolean2: boolean;
    int: number;
    long: bigint;
    int128: bigint;
    int256: bigint;
    string: string;
    bytes: Uint8Array;
    flag1?: true;
    flag2?: TypeTestObject1[];
    flag3?: bigint;

    protected get [id]() {
      return 0x10101010;
    }

    static get [paramDesc](): ParamDesc {
      return [
        ["boolean1", "boolean", "Bool"],
        ["boolean2", "boolean", "Bool"],
        ["int", "number", "int"],
        ["long", "bigint", "long"],
        ["int128", "bigint", "int128"],
        ["int256", "bigint", "int256"],
        ["string", "string", "string"],
        ["bytes", Uint8Array, "bytes"],
        ["flags", flags, "#"],
        ["flag1", "true", "flags.0?true"],
        ["flag2", ["string"], "flags.1?Vector<string>"],
        ["flag3", "bigint", "flags.3?long"],
      ];
    }

    protected get [params](): Params {
      return [
        [this.boolean1, "boolean", "Bool"],
        [this.boolean2, "boolean", "Bool"],
        [this.int, "number", "int"],
        [this.long, "bigint", "long"],
        [this.int128, "bigint", "int128"],
        [this.int256, "bigint", "int256"],
        [this.string, "string", "string"],
        [this.bytes, Uint8Array, "bytes"],
        ["flags", flags, "#"],
        [this.flag1 ?? null, "true", "flags.0?true"],
        [this.flag2 ?? null, [TypeTestObject1], "flags.1?Vector<TestObject2>"],
        [this.flag3 ?? null, "bigint", "flags.3?long"],
      ];
    }

    constructor(params: { boolean1: boolean; boolean2: boolean; int: number; long: bigint; int128: bigint; int256: bigint; string: string; bytes: Uint8Array; flag1?: true; flag2?: TypeTestObject1[]; flag3?: bigint }) {
      super();
      this.boolean1 = params.boolean1;
      this.boolean2 = params.boolean2;
      this.int = params.int;
      this.long = params.long;
      this.int128 = params.int128;
      this.int256 = params.int256;
      this.string = params.string;
      this.bytes = params.bytes;
      this.flag1 = params.flag1;
      this.flag2 = params.flag2;
      this.flag3 = params.flag3;
    }
  }

  // deno-fmt-ignore
  const expected = new Uint8Array([
    0x10, 0x10, 0x10, 0x10, 0xB5, 0x75, 0x72, 0x99,
    0x37, 0x97, 0x79, 0xBC, 0xD2, 0x04, 0x00, 0x00,
    0x34, 0x33, 0x33, 0x33, 0x33, 0x33, 0x33, 0xF3,
    0x01, 0xF0, 0x77, 0xC8, 0xC9, 0xF7, 0x24, 0x97,
    0x5A, 0x82, 0xD4, 0x07, 0x12, 0x94, 0x67, 0x02,
    0xAB, 0x4A, 0xA5, 0xE0, 0x76, 0xF9, 0xE9, 0xFA,
    0x99, 0x8E, 0xDB, 0xF1, 0x1E, 0x82, 0x14, 0xD6,
    0xAE, 0xEC, 0xEB, 0x46, 0x95, 0xF3, 0x84, 0xB4,
    0x4F, 0x52, 0x06, 0xAB, 0x7B, 0xB8, 0x49, 0x4B,
    0x07, 0x4D, 0x54, 0x4B, 0x72, 0x75, 0x74, 0x6F,
    0x04, 0x00, 0x00, 0x01, 0x01, 0x00, 0x00, 0x00,
    0x03, 0x00, 0x00, 0x00, 0xB5, 0x75, 0x72, 0x99,
    0x15, 0xC4, 0xB5, 0x1C, 0x02, 0x00, 0x00, 0x00,
    0x01, 0x01, 0x01, 0x01, 0x07, 0x4D, 0x54, 0x4B,
    0x72, 0x75, 0x74, 0x6F, 0x01, 0x01, 0x01, 0x01,
    0x07, 0x4D, 0x54, 0x4B, 0x72, 0x75, 0x74, 0x6F
  ]);

  const actual = new TestObject2({
    boolean1: true,
    boolean2: false,
    int: 1234,
    long: -922337203685477580n,
    int128: 3196265793150487616775634918212890625n,
    int256: 34053716734886053108720723919265766388580600074269200372509658336639404296875n,
    string: "MTKruto",
    bytes: new Uint8Array([256, 256, 1, 1]),
    flag1: true,
    flag2: [new TestObject1({ string: "MTKruto" }), new TestObject1({ string: "MTKruto" })],
  }).serialize();

  assertEquals(actual, expected);
});
