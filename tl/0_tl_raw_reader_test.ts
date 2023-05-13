import { assertEquals } from "../deps_t.ts";
import { TLRawReader } from "./0_tl_raw_reader.ts";

Deno.test("TLRawReader", async (t) => {
  // deno-fmt-ignore
  const buffer = new Uint8Array([
    0x00, // read 1
    0xFF, 0xFF, 0xFF, // uint24
    0x01, 0x00, 0x80, // int24
    0xCC, 0xEE, 0xFF, 0xFF, // uint32
    0xFF, 0xFF, 0xFE, 0xFF, // int32
    0x68, 0xFF, 0x98, 0x88, 0xDD, 0xCC, 0xFF, 0xEE, // uint64
    0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80, // int64
    0x8D, 0x03, 0xBD, 0x3C, 0x55, 0x22, 0xA5, 0x05, 0xD6, 0xDC, 0xC4, 0x66, 0xF5, 0x3E, 0x00, 0xD0, // uint128
    0x17, 0xB3, 0x50, 0x37, 0x1C, 0xAD, 0x8A, 0xDF, 0xE5, 0x02, 0x96, 0x48, 0x24, 0xC6, 0x6E, 0x07, // int128
    0x5D, 0xA9, 0x9E, 0xC6, 0xB0, 0xD6, 0x82, 0x3F, 0xE8, 0x43, 0x78, 0x19, 0xFD, 0x3D, 0x25, 0xAB, 0x13, 0xEB, 0x8A, 0x60, 0x4F, 0xA7, 0xB1, 0x3B, 0x17, 0x9C, 0x70, 0x2B, 0xCA, 0xDD, 0x1D, 0xEC, // uint256
    0xFC, 0x99, 0xB0, 0x57, 0xDA, 0x4B, 0x6E, 0xFD, 0x35, 0x34, 0x69, 0xEC, 0x59, 0x24, 0x40, 0x60, 0x41, 0x98, 0x0D, 0x97, 0xA6, 0xA2, 0x96, 0x1E, 0x95, 0xCE, 0xC6, 0xEF, 0x78, 0x95, 0xB9, 0x5F, // int256
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
    assertEquals(reader.readInt24(false), 0xFFFFFF);
    assertEquals(reader.readInt24(), -8388607);

    await t.step("buffer", () => {
      const read = 1 + (3 * 2);
      assertEquals(reader.buffer.length, buffer.length - read);
      assertEquals(reader.buffer, buffer.slice(read));
    });
  });

  await t.step("readInt32", async (t) => {
    assertEquals(reader.readInt32(false), 0xFFFFEECC);
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

  await t.step("readInt128", async (t) => {
    assertEquals(reader.readInt128(false), 276480700075363207293378760200953856909n);
    assertEquals(reader.readInt128(), 9879767416712888958949374238624101143n);

    await t.step("buffer", () => {
      const read = 1 + (3 * 2) + (4 * 2) + (8 * 2) + (16 * 2);
      assertEquals(reader.buffer.length, buffer.length - read);
      assertEquals(reader.buffer, buffer.slice(read));
    });
  })


  await t.step("readInt256", async (t) => {
    assertEquals(reader.readInt256(false), 106798601566956061778213567770381794524206942780088236271152238178577682442589n);
    assertEquals(reader.readInt256(), 43297618943045001998167677499050563319748616773287013753630609307270848223740n);

    await t.step("buffer", () => {
      const read = 1 + (3 * 2) + (4 * 2) + (8 * 2) + (16 * 2) + (32 * 2);
      assertEquals(reader.buffer.length, buffer.length - read);
      assertEquals(reader.buffer, buffer.slice(read));
    });
  })
});
