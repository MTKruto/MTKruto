/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { assertEquals, concat } from "../0_deps.ts";
import { h, isGoodModExpFirst, pad, pbkdf2, ph1, ph2, sh } from "./0_password.ts";

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
  const expected = new Uint8Array([179, 122, 167, 179, 131, 40, 22, 220, 248, 18, 214, 230, 94, 115, 163, 71, 0, 194, 61, 44, 106, 141, 114, 36, 8, 240, 97, 69, 249, 81, 16, 115]);
  assertEquals(await ph2(password, salt1, salt2), expected);
});

Deno.test("isGoodModExpFirst", () => {
  assertEquals(
    isGoodModExpFirst(
      13686833992622021392971598592271655158408442693860338430320072469766396934020404967308953540728016049536418808315356324375497892593355331314125527206026998688730253729663541140087610160826708422424686218570079472482756726256776925005593071153582208468655805202373942515614540231491066770397289083019006619961749573776446290947788477884966375038307477509829651573100326595443246171704940503978702931857288149565321907963930403800558816745506117739828555720683890820692673323816529133822088866674509885513601238224004037032673458494313572916173227361146329011732993120022667208230700485356481595876539621429995854207904n,
      25135566567101483196994790440833279750474660393232382279277736257066266618532493517139001963526957179514521981877335815379755618191324858392834843718048308951653115284529736874534289456833723962912807104017411854314007953484461899139734367756070456068592886771130491355511301923675421649355211882120329692353507392677087555292357140606251171702417804959957862991259464749806480821163999054978911727901705780417863120490095024926067731615229486812312187386108568833026386220686253160504779704721744600638258183939573405528962511242337923530869616215532193967628076922234051908977996352800560160181197923404454023908443n,
    ),
    true,
  );
  assertEquals(isGoodModExpFirst(49n, 7n), false);
});

Deno.test("pad", () => {
  const expectedLength = 256;

  {
    const bigint = 1n;
    const expected = concat([new Uint8Array(255), new Uint8Array([1])]);
    const result = pad(bigint);
    assertEquals(result.length, expectedLength);
    assertEquals(result, expected);
  }

  {
    // deno-fmt-ignore
    const buffer = new Uint8Array([
      208, 156, 208, 162, 208,
      154, 209, 128, 209, 131,
      209, 130, 208, 190
    ]);
    const expected = concat([new Uint8Array(256 - buffer.length), buffer]);
    const result = pad(buffer);
    assertEquals(result.length, expectedLength);
    assertEquals(result, expected);
  }
});
