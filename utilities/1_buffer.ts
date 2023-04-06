export async function sha256(payload: Uint8Array) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", payload));
}

export async function sha1(payload: Uint8Array) {
  return new Uint8Array(await crypto.subtle.digest("SHA-1", payload));
}

export function xor(a: Uint8Array, b: Uint8Array) {
  const bytes = new Array<number>();
  for (const i in a) {
    bytes.push(a[i] ^ b[i]);
  }
  return Uint8Array.from(bytes);
}

export function concat(...buffers: [Uint8Array, Uint8Array, ...Uint8Array[]]) {
  return new Uint8Array(buffers.map((v) => Array.from(v)).flat());
}

const bufferFromHexString = (hexString: string) =>
  Uint8Array.from(
    hexString.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16)),
  );
export function bufferFromBigInt(
  bigIntVar: bigint | number,
  bytesNumber: number,
  little = true,
  signed = false,
) {
  bigIntVar = BigInt(
    typeof bigIntVar === "number" ? Math.ceil(bigIntVar) : bigIntVar,
  );
  const bitLength = bigIntVar.toString(2).length;

  const bytes = Math.ceil(bitLength / 8);

  if (bytesNumber < bytes) {
    throw new Error("OverflowError: int too big to convert");
  }

  if (!signed && bigIntVar < 0n) {
    throw new Error("Cannot convert to unsigned");
  }

  let below = false;
  if (bigIntVar < 0n) {
    below = true;
    bigIntVar = bigIntVar < 0 ? bigIntVar * -1n : bigIntVar;
  }

  const hex = bigIntVar.toString(16).padStart(bytesNumber * 2, "0");
  let littleBuffer = bufferFromHexString(hex);

  if (little) {
    littleBuffer = littleBuffer.reverse();
  }

  if (signed && below) {
    if (little) {
      let reminder = false;
      if (littleBuffer[0] !== 0) {
        littleBuffer[0] -= 1;
      }
      for (let i = 0; i < littleBuffer.length; i++) {
        if (littleBuffer[i] === 0) {
          reminder = true;
          continue;
        }
        if (reminder) {
          littleBuffer[i] -= 1;
          reminder = false;
        }
        littleBuffer[i] = 255 - littleBuffer[i];
      }
    } else {
      littleBuffer[littleBuffer.length - 1] = 256 -
        littleBuffer[littleBuffer.length - 1];
      for (let i = 0; i < littleBuffer.length - 1; i++) {
        littleBuffer[i] = 255 - littleBuffer[i];
      }
    }
  }
  return littleBuffer;
}
