/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { assertEquals, concat, ige256Decrypt, ige256Encrypt } from "../0_deps.ts";
import { bufferFromBigInt, mod, sha256, toUnixTimestamp } from "../1_utilities.ts";
import { deserializeMessage, message, serializeMessage, TLReader, TLWriter } from "../2_tl.ts";

export function getMessageId(lastMsgId: bigint, difference: number) {
  const now = toUnixTimestamp(new Date()) + difference;
  const nanoseconds = Math.floor((now - Math.floor(now)) * 1e9);
  let newMsgId = (BigInt(Math.floor(now)) <<
    32n) ||
    (BigInt(nanoseconds) << 2n);
  if (lastMsgId >= newMsgId) {
    newMsgId = lastMsgId + 4n;
  }
  return newMsgId;
}

export function packUnencryptedMessage(data: Uint8Array, messageId: bigint) {
  const writer = new TLWriter();
  writer.writeInt64(0n); // auth key
  writer.writeInt64(messageId);
  writer.writeInt32(data.length);
  writer.write(data);
  return writer.buffer;
}
export function unpackUnencryptedMessage(buffer: Uint8Array) {
  const reader = new TLReader(buffer);
  const _authKeyId = reader.readInt64();
  const messageId = reader.readInt64();
  const messageLength = reader.readInt32();
  const message = reader.read(messageLength);

  return { messageId, message };
}

export async function encryptMessage(message: message, authKey: Uint8Array, authKeyId: bigint, salt: bigint, sessionId: bigint) {
  const payloadWriter = new TLWriter();

  payloadWriter.writeInt64(salt);
  payloadWriter.writeInt64(sessionId);
  payloadWriter.write(await serializeMessage(message));
  payloadWriter.write(new Uint8Array(mod(-(payloadWriter.buffer.length + 12), 16) + 12));

  const payload = payloadWriter.buffer;

  const messageKey = (await sha256(concat([authKey.subarray(88, 120), payload]))).subarray(8, 24);

  const a = await sha256(concat([messageKey, authKey.subarray(0, 36)]));
  const b = await sha256(concat([authKey.subarray(40, 76), messageKey]));

  const aesKey = concat([a.subarray(0, 8), b.subarray(8, 24), a.subarray(24, 32)]);
  const aesIV = concat([b.subarray(0, 8), a.subarray(8, 24), b.subarray(24, 32)]);

  const messageWriter = new TLWriter();

  messageWriter.writeInt64(authKeyId);
  messageWriter.write(messageKey);
  messageWriter.write(ige256Encrypt(payload, aesKey, aesIV));

  return messageWriter.buffer;
}
export async function decryptMessage(buffer: Uint8Array, authKey: Uint8Array, authKeyId: bigint, _sessionId: bigint) {
  const reader = new TLReader(buffer);
  assertEquals(reader.readInt64(false), authKeyId);

  const messageKey_ = reader.readInt128();
  const messageKey = bufferFromBigInt(messageKey_, 16, true, true);

  const a = await sha256(concat([messageKey, authKey.subarray(8, 44)]));
  const b = await sha256(concat([authKey.subarray(48, 84), messageKey]));

  const aesKey = concat([a.subarray(0, 8), b.subarray(8, 24), a.subarray(24, 32)]);
  const aesIv = concat([b.subarray(0, 8), a.subarray(8, 24), b.subarray(24, 32)]);

  const plaintext = ige256Decrypt(reader.buffer, aesKey, aesIv);
  assertEquals(plaintext.buffer.byteLength % 4, 0);

  const plainReader = new TLReader(plaintext);

  const _salt = plainReader.readInt64();
  const _sessionId_ = plainReader.readInt64(false);

  return deserializeMessage(plainReader);
}
