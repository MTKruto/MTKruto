import { assertEquals } from "../deps_t.ts";
import { TLRawReader } from "./0_tl_raw_reader.ts";

Deno.test("TLRawReader", async (t) => {
  // deno-fmt-ignore
  const buffer = new Uint8Array([
    0x00, // read 1
    0xff, 0xff, 0xff, // uint24
    0x01, 0x00, 0x80, // int24
    0xcc, 0xee, 0xff, 0xff, // uint32
    0xff, 0xff, 0xfe, 0xff, // int32
    0x68, 0xff, 0x98, 0x88, 0xdd, 0xcc, 0xff, 0xee, // uint64
    0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80 // int64
  ]);
  const bufferLength = buffer.length;
  const reader = new TLRawReader(buffer);

  await t.step("read", async (t) => {
    assertEquals(reader.read(1), new Uint8Array([0]));

    await t.step("buffer", () => {
      const read = 1;
      assertEquals(reader.buffer.length, bufferLength - read);
      assertEquals(reader.buffer, buffer.slice(read));
    });
  });

  await t.step("readInt24", async (t) => {
    assertEquals(reader.readInt24(false), 0xff_ff_ff);
    assertEquals(reader.readInt24(), -8388607);

    await t.step("buffer", () => {
      const read = 1 + (3 * 2);
      assertEquals(reader.buffer.length, buffer.length - read);
      assertEquals(reader.buffer, buffer.slice(read));
    });
  });

  await t.step("readInt32", async (t) => {
    assertEquals(reader.readInt32(false), 0xff_ff_ee_cc);
    assertEquals(reader.readInt32(), -0x010001);

    await t.step("buffer", () => {
      const read = 1 + (3 * 2) + (4 * 2);
      assertEquals(reader.buffer.length, buffer.length - read);
      assertEquals(reader.buffer, buffer.slice(read));
    });
  });

  await t.step("readInt64", async (t) => {
    assertEquals(reader.readInt64(false), 17221708751939633000n);
    assertEquals(reader.readInt64(), -9223372036854775807n);

    await t.step("buffer", () => {
      const read = 1 + (3 * 2) + (4 * 2) + (8 * 2);
      assertEquals(reader.buffer.length, buffer.length - read);
      assertEquals(reader.buffer, buffer.slice(read));
    });
  });
});
