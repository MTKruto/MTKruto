import { BetterDataView, concat } from "./utils.ts";

export function readBytes(buffer: Uint8Array) {
  let L = buffer[0];

  if (L <= 253) {
    return buffer.slice(1, L + 1);
  }

  const dataView = new BetterDataView(buffer.buffer);
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
