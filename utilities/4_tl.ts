import { concat,bufferFromBigInt } from "./1_buffer.ts";
import { ExtendedDataView } from "./2_extended_data_view.ts";

export function deserializeString(buffer: Uint8Array) {
  let L = buffer[0];
  if (L <= 253) {
    return buffer.slice(1, L + 1);
  }

  const dataView = new ExtendedDataView(buffer.buffer);
  L = dataView.getInt24(0);

  return buffer.slice(4).slice(0, L);
}

export function serializeString(bytes: bigint, byteLength: number): Uint8Array;
export function serializeString(bytes: Uint8Array): Uint8Array;
export function serializeString(
  bytes: Uint8Array | bigint,
  byteLength?: number,
) {
  if (typeof bytes === "bigint") {
    if (!byteLength) {
      throw new Error("byteLength is unspecified");
    } else {
      bytes = bufferFromBigInt(bytes, byteLength, false);
    }
  }

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
  const message = concat(
    bufferFromBigInt(0x00, 8),
    bufferFromBigInt(getMessageId(), 8),
    bufferFromBigInt(data.length, 4),
    data,
  );
  return message;
}
