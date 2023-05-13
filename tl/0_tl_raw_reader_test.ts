import { assertEquals } from "../deps_t.ts";
import { TLRawReader } from "./0_tl_raw_reader.ts";

Deno.test("TLRawReader", async (t) => {
  const buffer = new Uint8Array([0x00, 0xff, 0xff, 0xff, 0x01, 0x00, 0x80, 0xcc, 0xee, 0xff, 0xff, 0xff, 0xff, 0xfe, 0xff]);
  const reader = new TLRawReader(buffer);

  await t.step("read", () => {
    assertEquals(reader.read(1), new Uint8Array([0]));
  });

  await t.step("readInt24", () => {
    assertEquals(reader.readInt24(false), 0xff_ff_ff);
    assertEquals(reader.readInt24(), -8388607);
  });

  await t.step("readInt32", () => {
    assertEquals(reader.readInt32(false), 0xff_ff_ee_cc);
    assertEquals(reader.readInt32(), -0x010001);
  });
});
