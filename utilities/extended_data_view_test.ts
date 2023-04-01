import { assertEquals } from "../deps.ts";
import { ExtendedDataView } from "./extended_data_view.ts";

Deno.test("ExtendedDataView", async (t) => {
  const dataView = new ExtendedDataView(
    // deno-fmt-ignore
    new Uint8Array([0x5F, 0xB6, 0x4A, 0xEB, 0x4D, 0x65, 0xAE, 0xC9, 0x02, 0x05, 0xBD, 0x76, 0x55, 0x9A, 0xAF, 0x29]).buffer,
  );

  await t.step("getBigUint128", () => {
    assertEquals(
      dataView.getBigUint128(0, false),
      127223177168702480293718884489214209833n,
    );

    assertEquals(
      dataView.getBigUint128(0, true),
      55410130039645663495847359609135871583n,
    );
  });

  await t.step("setBigUint128", () => {
    const dataView = new ExtendedDataView(new Uint8Array(16).buffer);
    dataView.setBigUint128(0, 127223177168702480293718884489214209833n);
    assertEquals(
      dataView.getBigUint128(0, false),
      127223177168702480293718884489214209833n,
    );

    dataView.setBigUint128(0, 55410130039645663495847359609135871583n, true);
    assertEquals(
      dataView.getBigUint128(0, true),
      55410130039645663495847359609135871583n,
    );
  });
});
