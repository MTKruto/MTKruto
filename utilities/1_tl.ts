import { assertEquals } from "https://deno.land/std@0.181.0/testing/asserts.ts";
import { ige256Decrypt, ige256Encrypt } from "../../tgcrypto_wasm/dist/mod.ts";
import { TLRawReader } from "../tl/0_tl_raw_reader.ts";
import { TLRawWriter } from "../tl/0_tl_raw_writer.ts";
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
export function unpackUnencryptedMessage(buffer: Uint8Array) {
  const reader = new TLRawReader(buffer);
  const _authKeyId = reader.readInt64();
  const messageId = reader.readInt64();
  const messageLength = reader.readInt32();
  const message = reader.read(messageLength);

  return { messageId, message };
}

const sessionId = getRandomBigInt(8, true, false);
export async function packEncryptedMessage(data: Uint8Array, authKey: bigint, salt:bigint) {
  const messageId = getMessageId();
  const messageDataLength = data.length;

  const writer = new TLRawWriter();

  writer.writeInt64(salt);
  writer.writeInt64(sessionId);
  writer.writeInt64(messageId);
  writer.writeInt32(7);
  writer.writeInt32(messageDataLength);
  writer.write(data);

  let message = writer.buffer;

  assertEquals(writer.buffer, message);

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
export async function unpackEncryptedMessage(
  buffer: Uint8Array,
  authKey_: bigint,
) {
  const authKey = bufferFromBigInt(authKey_, 256, false, false);

  let reader = new TLRawReader(buffer);
  const _authKeyId = reader.readInt64();
  const msgKey_ = reader.readInt128();
  const msgKey = bufferFromBigInt(msgKey_, 16, true, true);

  const x = 8;

  const sha256A = await sha256(concat(msgKey, authKey.slice(x, x + 36)));
  const sha256B = await sha256(
    concat(authKey.slice(40 + x, 40 + x + 36), msgKey),
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

  const decrypted = ige256Decrypt(reader.buffer, aesKey, aesIv);
  reader = new TLRawReader(decrypted);

  const _salt = reader.readInt64();
  const _sessionId = reader.readInt64();
  const messageId = reader.readInt64();
  const _seqNo = reader.readInt32();
  const messageLength = reader.readInt32(false);
  const message = reader.read(messageLength);

  return { messageId, message };
}
