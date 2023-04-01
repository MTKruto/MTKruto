export function toBigEndian(number: number | bigint, byteLength: number) {
  const buffer = new ArrayBuffer(byteLength);
  const dataView = new DataView(buffer);
  if (typeof number === "number") {
    if (byteLength > 3) {
      dataView.setUint32(0, number, false);
    } else {
      dataView.setUint16(0, number, false);
    }
  } else {
    dataView.setBigUint64(0, number, false);
  }
  return new Uint8Array(buffer);
}

const getRandomByte = () => BigInt(Math.floor(Math.random() * 0xff));
export function getRandomBigInt(byteLength: number) {
  let int = getRandomByte();
  for (let i = 0; i < byteLength; i++) {
    int <<= 8n;
    int |= getRandomByte();
  }
  return int;
}

let lastMsgId = 0n;
export function getMessageId() {
  const now = new Date().getTime() / 1000 + 0;
  const nanoseconds = Math.floor((now - Math.floor(now)) * 1e9);
  let newMsgId = (BigInt(Math.floor(now)) <<
    32n) ||
    (BigInt(nanoseconds) << 2n);
  if (lastMsgId >= (newMsgId)) {
    newMsgId = lastMsgId + 4n;
  }
  lastMsgId = newMsgId;
  return newMsgId;
}
export function packUnencryptedMessage(data: Uint8Array) {
  const message = new Uint8Array([
    ...readBufferFromBigInt(0x00, 8),
    ...readBufferFromBigInt(getMessageId(), 8),
    ...readBufferFromBigInt(data.length, 4),
    ...data,
  ]);
  return message;
}

export class BetterDataView extends DataView {
  getInt24(byteOffset: number, littleEndian?: boolean) {
    const bytes = new Uint8Array(this.buffer.slice(byteOffset, byteOffset + 3));

    if (littleEndian) {
      return (bytes[3] << 16) | (bytes[2] << 8) | bytes[1];
    } else {
      return bytes[1] |
        (bytes[2] << 8) |
        (bytes[3] << 16);
    }
  }

  getBigUint128(byteOffset: number, littleEndian?: boolean) {
    const first = this.getBigUint64(byteOffset, littleEndian);
    const second = this.getBigUint64(byteOffset + 8, littleEndian);

    if (littleEndian) {
      return (second << 64n) + first;
    } else {
      return (first << 64n) + second;
    }
  }

  setBigUint128(byteOffset: number, value: bigint, littleEndian?: boolean) {
    const bottomMask = (1n << 64n) - 1n;
    const topMask = ~bottomMask;
    const second = value & bottomMask;
    const first = (value & topMask) >> 64n;

    this.setBigUint64(byteOffset, littleEndian ? second : first, littleEndian);
    this.setBigUint64(
      byteOffset + 8,
      littleEndian ? first : second,
      littleEndian,
    );
  }

  getBigUint256(byteOffset: number, littleEndian?: boolean) {
    const first = this.getBigUint128(byteOffset, littleEndian);
    const second = this.getBigUint128(byteOffset + 16, littleEndian);

    if (littleEndian) {
      return (second >> 128n) + first;
    } else {
      return (first << 128n) + second;
    }
  }

  setBigUint256(byteOffset: number, value: bigint, littleEndian?: boolean) {
    const bottomMask = (1n << 128n) - 1n;
    const topMask = ~bottomMask;
    const second = value & bottomMask;
    const first = (value & topMask) >> 128n;

    this.setBigUint128(byteOffset, littleEndian ? second : first, littleEndian);
    this.setBigUint128(
      byteOffset + 16,
      littleEndian ? first : second,
      littleEndian,
    );
  }
}

const fromHexString = (hexString: string) =>
  Uint8Array.from(
    hexString.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16)),
  );

export function readBufferFromBigInt(
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
  let littleBuffer = fromHexString(hex);

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

export function xor(a: Uint8Array, b: Uint8Array) {
  const bytes = new Array<number>();
  for (const i in a) {
    bytes.push(a[i] ^ b[i]);
  }
  return Uint8Array.from(bytes);
}

export async function sha256(payload: Uint8Array) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", payload));
}

export async function sha1(payload: Uint8Array) {
  return new Uint8Array(await crypto.subtle.digest("SHA-1", payload));
}

export function modExp(
  a: bigint,
  b: bigint,
  n: bigint,
) {
  a %= n;
  let result = 1n;
  let x = a;
  while (b > 0n) {
    const leastSignificantBit = b % 2n;
    b /= 2n;
    if (leastSignificantBit == 1n) {
      result *= x;
      result %= n;
    }
    x *= x;
    x %= n;
  }
  return result;
}

export function concat(...buffers: [Uint8Array, Uint8Array, ...Uint8Array[]]) {
  return new Uint8Array(buffers.map((v) => Array.from(v)).flat());
}

export function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}
