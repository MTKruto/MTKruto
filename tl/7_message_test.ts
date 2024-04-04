import { assertEquals } from "../0_deps.ts";
import { types } from "../2_tl.ts";
import { calculateLength } from "./7_message.ts";

Deno.test("calculateLength", () => {
  const resPq = new types.ResPQ({ // 4 cid
    nonce: 1n, // 16 long
    server_nonce: 2n, // 16 long
    pq: new Uint8Array(1024), // 4 len, 1024 bytes
    server_public_key_fingerprints: [ // 4 vector cid, 4 vector len
      1n, // 8 long
      2n, // 8 long
      3n, // 8 long
    ],
  });
  const user = new types.User( // 4 cid
    { id: 0n }, // 8 long
  ); // 4 flags, 4 flags2
  const vector = [resPq, user];

  const resPqExpectedLength = 1096;
  const userExpectedLength = 20;
  const vectorExpectedLength = 1124;

  assertEquals(calculateLength(resPq), resPqExpectedLength);
  assertEquals(calculateLength(user), userExpectedLength);
  assertEquals(calculateLength(vector), vectorExpectedLength);
});
