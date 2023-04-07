import { ige256Encrypt } from "../../tgcrypto_wasm/dist/mod.ts";
import { getRandomBigInt, mod } from "./0_bigint.ts";
import { bufferFromBigInt, concat, sha1, sha256 } from "./0_buffer.ts";

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
