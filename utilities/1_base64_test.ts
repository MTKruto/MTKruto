import { assertEquals } from "../0_deps.ts";
import { base64DecodeUrlSafe, base64EncodeUrlSafe } from "./1_base64.ts";

Deno.test("base64DecodeUrlSafe", () => {
  const actual = base64DecodeUrlSafe("SUb1fI_Zk8tMiW8ngfVTCZP-aL0BK-357OUeLO4q4a7OB_ECNwm5FxtLir0Yf1d201cAKuZYNnuqAvrcXeFixyWKm3Wo7AlD2rVdPm6NPjuLd55M-wDCxvlRIxEQERZg2waoWg");
  // deno-fmt-ignore
  const expected = new Uint8Array([
       73,  70, 245, 124, 143, 217, 147, 203,  76, 137, 111,  39,
      129, 245,  83,   9, 147, 254, 104, 189,   1,  43, 237, 249,
      236, 229,  30,  44, 238,  42, 225, 174, 206,   7, 241,   2,
       55,   9, 185,  23,  27,  75, 138, 189,  24, 127,  87, 118,
      211,  87,   0,  42, 230,  88,  54, 123, 170,   2, 250, 220,
       93, 225,  98, 199,  37, 138, 155, 117, 168, 236,   9,  67,
      218, 181,  93,  62, 110, 141,  62,  59, 139, 119, 158,  76,
      251,   0, 194, 198, 249,  81,  35,  17,  16,  17,  22,  96,
      219,   6, 168,  90
  ]);

  assertEquals(actual, expected);

  {
    const actual = base64DecodeUrlSafe("aGk");
    const expected = new TextEncoder().encode("hi");

    assertEquals(actual, expected);
  }

  {
    const actual = base64DecodeUrlSafe("BQACAgIAAx0CYP-shwACCrNlcvay7RylgRqZg3bHIqJK51AniwACd0AAAtiPmEs1WGLRppumxB4AAwQAAx4E");
    const expected = new Uint8Array([5, 0, 2, 2, 2, 0, 3, 29, 2, 96, 255, 172, 135, 0, 2, 10, 179, 101, 114, 246, 178, 237, 28, 165, 129, 26, 153, 131, 118, 199, 34, 162, 74, 231, 80, 39, 139, 0, 2, 119, 64, 0, 2, 216, 143, 152, 75, 53, 88, 98, 209, 166, 155, 166, 196, 30, 0, 3, 4, 0, 3, 30, 4]);

    assertEquals(actual, expected);
  }
});

Deno.test("base64EncodeUrlSafe", () => {
  const actual = base64EncodeUrlSafe("hi");
  const expected = "aGk";

  assertEquals(actual, expected);

  {
    const actual = base64EncodeUrlSafe(
      // deno-fmt-ignore
      new Uint8Array([
             73,  70, 245, 124, 143, 217, 147, 203,  76, 137, 111,  39,
            129, 245,  83,   9, 147, 254, 104, 189,   1,  43, 237, 249,
            236, 229,  30,  44, 238,  42, 225, 174, 206,   7, 241,   2,
             55,   9, 185,  23,  27,  75, 138, 189,  24, 127,  87, 118,
            211,  87,   0,  42, 230,  88,  54, 123, 170,   2, 250, 220,
             93, 225,  98, 199,  37, 138, 155, 117, 168, 236,   9,  67,
            218, 181,  93,  62, 110, 141,  62,  59, 139, 119, 158,  76,
            251,   0, 194, 198, 249,  81,  35,  17,  16,  17,  22,  96,
            219,   6, 168,  90
        ]),
    );
    const expected = "SUb1fI_Zk8tMiW8ngfVTCZP-aL0BK-357OUeLO4q4a7OB_ECNwm5FxtLir0Yf1d201cAKuZYNnuqAvrcXeFixyWKm3Wo7AlD2rVdPm6NPjuLd55M-wDCxvlRIxEQERZg2waoWg";

    assertEquals(actual, expected);
  }
});
