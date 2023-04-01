import { concat } from "./buffer.ts";
import { ExtendedDataView } from "./extended_data_view.ts";

export function readBytes(buffer: Uint8Array) {
  let L = buffer[0];

  if (L <= 253) {
    return buffer.slice(1, L + 1);
  }

  const dataView = new ExtendedDataView(buffer.buffer);
  L = dataView.getInt24(0);

  return buffer.slice(4).slice(0, L);
}

export function toString(bigint: bigint) {
  const arr = new Array<number>();
  const string = bigint.toString(16);
  for (let i = 0; i < string.length; i += 2) {
    let byte = parseInt(string.substring(i, i + 2), 16);
    if (byte > 127) {
      byte = -(~byte & 0xFF) - 1;
    }
    arr.push(byte);
  }
  const buffer = new Uint8Array([arr.length, ...arr]);
  return new Uint8Array([...buffer, ...new Uint8Array(8 - buffer.length)]);
}

export function bytesToString(bytes: Uint8Array) {
  let padding = 0;

  if (bytes.length <= 253) {
    padding = (bytes.length + 1) % 4;
  } else {
    padding = bytes.length % 4;
  }

  if (padding > 0) {
    padding = 4 - padding;
  }

  if (bytes.length <= 253) {
    return concat(
      new Uint8Array([bytes.length]),
      bytes,
      new Uint8Array(padding),
    );
  } else {
    const length = new Uint8Array(3);

    length[0] = (bytes.length & 0xff0000) >>> 16;
    length[1] = (bytes.length & 0x00ff00) >>> 8;
    length[2] = bytes.length & 0x0000ff;

    return concat(
      new Uint8Array([254]),
      length.reverse(),
      bytes,
      new Uint8Array(padding),
    );
  }
}

export function bytesToInt(bytes: Uint8Array) {
  return BigInt(
    "0x" +
      [...bytes].map((v) => v.toString(16).padStart(2, "0")).join(""),
  );
}

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
