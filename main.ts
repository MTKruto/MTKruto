import { getDHParams, reqPqMulti } from "./requests.ts";
// import { ConnectionWebSocket } from "./connection/connection_web_socket.ts";
import { ConnectionTCP } from "./connection/connection_tcp.ts";
import { getMessageId, readBufferFromBigInt } from "./utilities/4_tl.ts";
import { sha1, sha256 } from "./utilities/3_hash.ts";
import { mod } from "./utilities/0_bigint.ts";
import { concat } from "./utilities/1_buffer.ts";
import { assertEquals, igeEncrypt, randomBigIntBits } from "./deps.ts";
import { Abridged } from "./transport/abridged.ts";

const connection = new ConnectionTCP("127.0.0.1", 4430);
// const connection = new ConnectionWebSocket("ws://127.0.0.1:8000/apiws");
// const connection = new ConnectionWebSocket(
//   "wss://vesta.web.telegram.org:443/apiws",
// );
// const connection = new TCP("149.154.167.40", 80);
const transport = new Abridged(connection, false);

await connection.open();

await transport.initialize();

const { pq, pqBytes, serverNonce, nonce, publicKeyFingerprint } =
  await reqPqMulti(transport);

Deno.exit();

const authKey = await getDHParams(
  transport,
  pq,
  pqBytes,
  nonce,
  serverNonce,
  publicKeyFingerprint,
);

const authKeyBuffer = readBufferFromBigInt(authKey, 256, false);

const authKeyId = (await sha1(authKeyBuffer)).slice(-8);

const ping = 0x7abe77ec;

const pingId = readBufferFromBigInt(0, 8);

const salt = randomBigIntBits(64);
const sessionId = randomBigIntBits(64);
const messageId = getMessageId();
const seqNo = readBufferFromBigInt(1, 4);
const messageData = concat(readBufferFromBigInt(ping, 4), pingId);
const messageDataLength = readBufferFromBigInt(messageData.length, 4);

let message = concat(
  readBufferFromBigInt(salt, 8),
  readBufferFromBigInt(sessionId, 8),
  readBufferFromBigInt(messageId, 8),
  seqNo,
  messageDataLength,
  messageData,
);

const padding = new Uint8Array(mod(-(message.length + 12), 16) + 12);

crypto.getRandomValues(padding);

message = concat(message, padding);

const x = 0;

// const middleSha256 = (await sha256(message)).slice(8).slice(0, -8);
const authKeySubstr = authKeyBuffer.slice(88 + x, 88 + 32 + x);
const randomPadding = new Uint8Array(mod(-(message.length + 12), 16) + 12);
const msgKeyLarge = concat(authKeySubstr, messageData, randomPadding);
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

const encryptedMessage = igeEncrypt(message, aesKey, aesIv);

// let x = 0 if outgoing else 8

const sha256_a = await sha256(concat(msgKey, authKeyBuffer.slice(x, x + 36)));
const sha256_b = await sha256(
  concat(authKeyBuffer.slice(x + 40, x + 76), msgKey),
);

const aes_key = concat(
  sha256_a.slice(0, 8),
  sha256_b.slice(8, 24),
  sha256_a.slice(24, 32),
);
const aes_iv = concat(
  sha256_b.slice(0, 8),
  sha256_a.slice(8, 24),
  sha256_b.slice(24, 32),
);

assertEquals(aes_key, aesKey);
assertEquals(aes_iv, aesIv);

await transport.send(
  concat(authKeyId, msgKey, encryptedMessage),
);
