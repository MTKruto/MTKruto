import { assertEquals } from "../deps.ts";
import { ExtendedDataView } from "./0_extended_data_view.ts";

Deno.test("ExtendedDataView", async (t) => {
  const dataView = new ExtendedDataView(
    // deno-fmt-ignore
    new Uint8Array([0x5f, 0xb6, 0x4a, 0xeb, 0x4d, 0x65, 0xae, 0xc9, 0x02, 0x05, 0xbd, 0x76, 0x55, 0x9a, 0xaf, 0x29]).buffer,
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

  await t.step("getInt23", () => {
    assertEquals(dataView.getInt24(1, false), 0xb64aeb);
    assertEquals(dataView.getInt24(1, true), 0xeb4ab6);
  });
});
