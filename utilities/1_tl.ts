import { ige256Encrypt } from "../../tgcrypto_wasm/dist/mod.ts";
import { getRandomBigInt, mod } from "./0_bigint.ts";
import { bufferFromBigInt, concat, sha1, sha256 } from "./0_buffer.ts";
import { ExtendedDataView } from "./0_extended_data_view.ts";

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

export async function packEncryptedMessage(data: Uint8Array, authKey: bigint) {
  const salt = getRandomBigInt(8);
  const sessionId = getRandomBigInt(8);
  const messageId = getMessageId();
  const seqNo = bufferFromBigInt(1, 4);
  const messageDataLength = bufferFromBigInt(data.length, 4);

  let message = concat(
    bufferFromBigInt(salt, 8),
    bufferFromBigInt(sessionId, 8),
    bufferFromBigInt(messageId, 8),
    seqNo,
    messageDataLength,
    data,
  );

  const padding = new Uint8Array(mod(-(message.length + 12), 16) + 12);

  crypto.getRandomValues(padding);

  message = concat(message, padding);

  const x = 0;

  const authKeyBuffer = bufferFromBigInt(authKey, 256, false);
  const authKeyId = (await sha1(authKeyBuffer)).slice(-8);

  // const middleSha256 = (await sha256(message)).slice(8).slice(0, -8);
  const authKeySubstr = authKeyBuffer.slice(88 + x, 88 + 32 + x);
  const randomPadding = new Uint8Array(mod(-(message.length + 12), 16) + 12);
  const msgKeyLarge = concat(authKeySubstr, data, randomPadding);
  const msgKey = msgKeyLarge.slice(8, 8 + 16);

  const sha256A = await sha256(concat(msgKey, authKeyBuffer.slice(x, x + 36)));
  const sha256B = await sha256(
    concat(authKeyBuffer.slice(40 + x, 40 + x + 36), msgKey),
  );
  const aesKey = concat(
    sha256A.slice(0, 8),
    sha256B.slice(8, 8 + 16),
    sha256A.slice(24, 24 + 8),
  );
  const aesIv = concat(
    sha256B.slice(0, 8),
    sha256A.slice(8, 8 + 16),
    sha256B.slice(24, 24 + 8),
  );

  const encryptedMessage = ige256Encrypt(message, aesKey, aesIv);
  return concat(authKeyId, msgKey, encryptedMessage);
}
