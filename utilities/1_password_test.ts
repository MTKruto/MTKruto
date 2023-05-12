import { assertEquals } from "../deps_t.ts";
import { h, pbkdf2, ph1, ph2, sh } from "./1_password.ts";

Deno.test("h", async () => {
  const password = new Uint8Array([208, 156, 208, 162, 208, 154, 209, 128, 209, 131, 209, 130, 208, 190]);
  const expected = new Uint8Array([0, 190, 239, 66, 185, 152, 85, 58, 119, 141, 224, 129, 96, 216, 103, 224, 178, 211, 193, 130, 169, 223, 130, 101, 247, 212, 239, 174, 171, 158, 116, 115]);
  assertEquals(await h(password), expected);
});

Deno.test("sh", async () => {
  const password = new Uint8Array([208, 156, 208, 162, 208, 154, 209, 128, 209, 131, 209, 130, 208, 190]);
  const salt = new Uint8Array([124]);
  const expected = new Uint8Array([216, 117, 174, 109, 33, 226, 227, 236, 29, 115, 167, 132, 67, 104, 164, 189, 155, 26, 25, 81, 115, 139, 229, 24, 253, 71, 244, 223, 100, 233, 2, 228]);
  assertEquals(await sh(password, salt), expected);
});

Deno.test("ph1", async () => {
  const password = new Uint8Array([208, 156, 208, 162, 208, 154, 209, 128, 209, 131, 209, 130, 208, 190]);
  const salt1 = new Uint8Array([124]);
  const salt2 = new Uint8Array([45]);
  const expected = new Uint8Array([130, 220, 211, 76, 12, 85, 85, 56, 190, 80, 205, 32, 30, 230, 160, 132, 211, 130, 172, 211, 234, 119, 99, 206, 18, 121, 21, 71, 93, 33, 90, 247]);
  assertEquals(await ph1(password, salt1, salt2), expected);
});

Deno.test("pbkdf2", async () => {
  const password = new Uint8Array([208, 156, 208, 162, 208, 154, 209, 128, 209, 131, 209, 130, 208, 190]);
  const salt = new Uint8Array([124]);
  const iterations = 100_000;
  const expected = new Uint8Array([36, 208, 84, 120, 41, 187, 1, 218, 118, 44, 58, 188, 225, 194, 186, 7, 149, 111, 63, 165, 222, 205, 178, 68, 42, 65, 169, 202, 229, 73, 120, 160, 192, 80, 45, 240, 87, 92, 209, 21, 119, 247, 187, 158, 50, 165, 158, 97, 182, 41, 31, 223, 5, 132, 25, 247, 158, 50, 203, 171, 157, 134, 115, 21]);
  assertEquals(await pbkdf2(password, salt, iterations), expected);
});

Deno.test("ph2", async () => {
  // deno-fmt-ignore
  const password = new Uint8Array([
    208, 156, 208, 162, 208,
    154, 209, 128, 209, 131,
    209, 130, 208, 190
  ]);
  const salt1 = new Uint8Array([124]);
  const salt2 = new Uint8Array([45]);
  const expected = new Uint8Array([
    179,
    122,
    167,
    179,
    131,
    40,
    22,
    220,
    248,
    18,
    214,
    230,
    94,
    115,
    163,
    71,
    0,
    194,
    61,
    44,
    106,
    141,
    114,
    36,
    8,
    240,
    97,
    69,
    249,
    81,
    16,
    115,
  ]);
  assertEquals(await ph2(password, salt1, salt2), expected);
});
