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
    0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80, // int64
    0x8d, 0x3, 0xbd, 0x3c, 0x55, 0x22, 0xa5, 0x5, 0xd6, 0xdc, 0xc4, 0x66, 0xf5, 0x3e, 0x0, 0xd0, // uint128
    0x17, 0xb3, 0x50, 0x37, 0x1c, 0xad, 0x8a, 0xdf, 0xe5, 0x2, 0x96, 0x48, 0x24, 0xc6, 0x6e, 0x7, // int128
    0x5d, 0xa9, 0x9e, 0xc6, 0xb0, 0xd6, 0x82, 0x3f, 0xe8, 0x43, 0x78, 0x19, 0xfd, 0x3d, 0x25, 0xab, 0x13, 0xeb, 0x8a, 0x60, 0x4f, 0xa7, 0xb1, 0x3b, 0x17, 0x9c, 0x70, 0x2b, 0xca, 0xdd, 0x1d, 0xec, // uint256
    0xfc, 0x99, 0xb0, 0x57, 0xda, 0x4b, 0x6e, 0xfd, 0x35, 0x34, 0x69, 0xec, 0x59, 0x24, 0x40, 0x60, 0x41, 0x98, 0xd, 0x97, 0xa6, 0xa2, 0x96, 0x1e, 0x95, 0xce, 0xc6, 0xef, 0x78, 0x95, 0xb9, 0x5f // int256
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
