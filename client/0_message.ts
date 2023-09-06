import { assertEquals, ige256Decrypt, ige256Encrypt } from "../0_deps.ts";
import { bufferFromBigInt, concat, sha256 } from "../1_utilities.ts";
import { id, Message, MessageContainer, RPCResult, serialize, TLObject, TLReader, TLWriter } from "../2_tl.ts";

export function getMessageId(lastMsgId: bigint) {
  const now = new Date().getTime() / 1000 + 0;
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

export async function encryptMessage(message: Message, authKey: Uint8Array, authKeyId: bigint, salt: bigint, sessionId: bigint) {
  const encoded = (message.body as TLObject)[serialize]();

  const payloadWriter = new TLWriter();

  payloadWriter.writeInt64(salt);
  payloadWriter.writeInt64(sessionId);
  payloadWriter.writeInt64(message.id);
  payloadWriter.writeInt32(message.seqNo);
  payloadWriter.writeInt32(encoded.length);
  payloadWriter.write(encoded);
  payloadWriter.write(new Uint8Array(payloadWriter.buffer.length + 12 % 16 + 12));

  let payload = payloadWriter.buffer;
  while (true) {
    if (payload.length % 16 == 0 && (payload.length) % 4 == 0) {
      break;
    }
    payload = concat(payload, new Uint8Array(1));
  }

  const messageKey = (await sha256(concat(authKey.slice(88, 120), payload))).slice(8, 24);

  const a = await sha256(concat(messageKey, authKey.slice(0, 36)));
  const b = await sha256(concat(authKey.slice(40, 76), messageKey));

  const aesKey = concat(a.slice(0, 8), b.slice(8, 24), a.slice(24, 32));
  const aesIV = concat(b.slice(0, 8), a.slice(8, 24), b.slice(24, 32));

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

  const a = await sha256(concat(messageKey, authKey.slice(8, 44)));
  const b = await sha256(concat(authKey.slice(48, 84), messageKey));

  const aesKey = concat(a.slice(0, 8), b.slice(8, 24), a.slice(24, 32));
  const aesIv = concat(b.slice(0, 8), a.slice(8, 24), b.slice(24, 32));

  const plaintext = ige256Decrypt(reader.buffer, aesKey, aesIv);
  assertEquals(plaintext.buffer.byteLength % 4, 0);

  let plainReader = new TLReader(plaintext);

  const _salt = plainReader.readInt64();
  const _sessionId_ = plainReader.readInt64(false);

  const mid = plainReader.readInt64();
  const seqno = plainReader.readInt32();
  const length = plainReader.readInt32();
  plainReader = new TLReader(plainReader.read(length));

  const cid = plainReader.readInt32(false);

  if (cid == MessageContainer[id]) {
    return MessageContainer.deserialize(plainReader.buffer);
  } else if (cid == RPCResult[id]) {
    const body = RPCResult.deserialize(plainReader.buffer);
    return new Message(mid, seqno, body);
  } else {
    const body = plainReader.readObject(cid);
    return new Message(mid, seqno, body);
  }
}
