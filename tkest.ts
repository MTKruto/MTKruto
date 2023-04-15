import { bigIntFromBuffer } from "./utilities/0_bigint.ts";
import { bufferFromBigInt } from "./utilities/0_buffer.ts";

function xor(a: Uint8Array, b: Uint8Array) {
  return bufferFromBigInt(
    bigIntFromBuffer(a, false) ^ bigIntFromBuffer(b, false),
    a.length,
    false,
  );
}

console.log(xor(new Uint8Array([1, 2, 32]), new Uint8Array([2, 1, 43])));
console.log(
  new Uint8Array([1, 2, 32]).map((v, i) => v ^ new Uint8Array([2, 1, 43])[i]),
);
