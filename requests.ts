import { Transport } from "./transport/transport.ts";
import {
  packUnencryptedMessage,
  unpackUnencryptedMessage,
} from "./utilities/1_tl.ts";
import {
  bigIntFromBuffer,
  getRandomBigInt,
  modExp,
} from "./utilities/0_bigint.ts";
import { sha1, sha256 } from "./utilities/0_hash.ts";
import { bufferFromBigInt, concat, xor } from "./utilities/0_buffer.ts";
import {
  assertEquals,
  factorize,
  ige256Decrypt,
  ige256Encrypt,
  randomBigIntBits,
} from "./deps.ts";
import {
  ClientDHInnerData,
  DhGenOk,
  PQInnerData,
  ResPQ,
  ServerDHInnerData,
  ServerDHParamsOk,
} from "./tl/2_constructors.ts";
import {
  ReqDHParams,
  ReqPqMulti,
  SetClientDHParams,
} from "./tl/3_functions.ts";
import { assertInstanceOf } from "https://deno.land/std@0.181.0/testing/asserts.ts";
import { TLReader } from "./tl/3_tl_reader.ts";
import { publicKeys } from "./constants.ts";

export async function reqPqMulti(transport: Transport) {
  const messageIds = new Array<bigint>();
  const nonce = getRandomBigInt(16, false, true);

  await transport.send(
    packUnencryptedMessage(
      new ReqPqMulti({ nonce }).serialize(),
    ),
  );

  const buffer = await transport.receive();
  const { message, messageId } = unpackUnencryptedMessage(buffer);
  messageIds.push(messageId);
  const reader = new TLReader(message);

  const obj = reader.readObject();

  assertInstanceOf(obj, ResPQ);

  const { nonce: nonce_, serverPublicKeyFingerprints, serverNonce, pq: pq_ } =
    obj;
  assertEquals(nonce, nonce_);
  const publicKeyFingerprint = serverPublicKeyFingerprints[0];

  const pq = bigIntFromBuffer(pq_, false, false);

  return {
    nonce,
    serverNonce,
    publicKeyFingerprint,
    pq,
    pqBytes: pq_,
    messageIds,
  };
}

export async function getDHParams(
  transport: Transport,
  pq: bigint,
  pqBytes: Uint8Array,
  nonce: bigint,
  serverNonce: bigint,
  publicKeyFingerprint: bigint,
) {
  const messageIds = new Array<bigint>();

  const key = publicKeys.get(publicKeyFingerprint);
  if (!key) {
    throw new Error("Key not found");
  }
  const [serverKey, exponent] = key;
  const [p, q] = factorize(pq);
  const newNonce = randomBigIntBits(32 * 8);

  let data = new PQInnerData({
    pq: pqBytes,
    p: bufferFromBigInt(p.valueOf(), 4, false),
    q: bufferFromBigInt(q.valueOf(), 4, false),
    nonce,
    serverNonce,
    newNonce,
  }).serialize();

  /// Step 1
  /// data_with_padding := data + random_padding_bytes; — where random_padding_bytes are chosen so that the resulting length of data_with_padding is precisely 192 bytes, and data is the TL-serialized data to be encrypted as before. One has to check that data is not longer than 144 bytes.
  const randomPaddingBytes = new Uint8Array(192 - data.length);
  crypto.getRandomValues(randomPaddingBytes);

  const dataWithPadding = concat(data, randomPaddingBytes);
  /// End step 1

  // Step 2
  /// data_pad_reversed := BYTE_REVERSE(data_with_padding); — is obtained from data_with_padding by reversing the byte order.
  const dataPadReversed = [...dataWithPadding].reverse();
  /// End step 2

  let iKeyAesEncrypted = 0n;
  let retries = 0;

  do {
    if (++retries == 20) {
      throw new Error("Out of tries");
    }
    /// Step 3
    /// a random 32-byte temp_key is generated.
    const tempKey = new Uint8Array(32);
    crypto.getRandomValues(tempKey);
    /// End step 3

    /// Step 4
    /// data_with_hash := data_pad_reversed + SHA256(temp_key + data_with_padding); — after this assignment, data_with_hash is exactly 224 bytes long.
    const dataWithHash = concat(
      new Uint8Array(dataPadReversed),
      await sha256(
        concat(tempKey, dataWithPadding),
      ),
    );
    assertEquals(dataWithHash.length, 224);
    /// End step 4

    /// Step 5
    /// - aes_encrypted := AES256_IGE(data_with_hash, temp_key, 0); — AES256-IGE encryption with zero IV.
    const aesEncrypted = ige256Encrypt(
      dataWithHash,
      tempKey,
      new Uint8Array(32),
    );
    /// End step 5

    /// Step 6
    /// - temp_key_xor := temp_key XOR SHA256(aes_encrypted); — adjusted key, 32 bytes
    const tempKeyXor = xor(
      tempKey,
      await sha256(aesEncrypted),
    );
    assertEquals(tempKeyXor.length, 32);
    /// End step 6

    /// Step 7
    /// key_aes_encrypted := temp_key_xor + aes_encrypted; — exactly 256 bytes (2048 bits) long
    const keyAesEncrypted = concat(tempKeyXor, aesEncrypted);

    assertEquals(keyAesEncrypted.length, 256);
    /// End step 7

    iKeyAesEncrypted = bigIntFromBuffer(keyAesEncrypted, false, false);
  } while (iKeyAesEncrypted >= serverKey);
  /// The value of key_aes_encrypted is compared with the RSA-modulus of server_pubkey as a big-endian 2048-bit (256-byte) unsigned integer. If key_aes_encrypted turns out to be greater than or equal to the RSA modulus, the previous steps starting from the generation of new random temp_key are repeated.
  // if (iKeyAesEncrypted >= serverKey) {
  //   throw new Error("bigger");
  // }

  /// Otherwise the final step is performed:
  /// Step 8
  /// encrypted_data := RSA(key_aes_encrypted, server_pubkey); — 256-byte big-endian integer is elevated to the requisite power from the RSA public key modulo the RSA modulus, and the result is stored as a big-endian integer consisting of exactly 256 bytes (with leading zero bytes if required).
  const encrypedData = modExp(iKeyAesEncrypted, exponent, serverKey);

  const encryptedDataBuf = bufferFromBigInt(encrypedData, 256, false);

  assertEquals(bufferFromBigInt(encrypedData, 256, false).length, 256);
  /// End step 8

  await transport.send(packUnencryptedMessage(
    new ReqDHParams({
      nonce,
      serverNonce,
      p: bufferFromBigInt(p.valueOf(), 4, false),
      q: bufferFromBigInt(q.valueOf(), 4, false),
      publicKeyFingerprint,
      encryptedData: encryptedDataBuf,
    }).serialize(),
  ));

  const buffer = await transport.receive();
  const { message, messageId } = unpackUnencryptedMessage(buffer);
  messageIds.push(messageId);
  let reader = new TLReader(message);
  let object = reader.readObject();

  assertInstanceOf(object, ServerDHParamsOk);
  const { encryptedAnswer } = object;

  const tmpAesKey = concat(
    await sha1(
      concat(
        bufferFromBigInt(newNonce, 32, true, true),
        bufferFromBigInt(serverNonce, 16, true, true),
      ),
    ),
    (await sha1(
      concat(
        bufferFromBigInt(serverNonce, 16, true, true),
        bufferFromBigInt(newNonce, 32, true, true),
      ),
    )).slice(0, 12),
  );

  const tmpAesIv = concat(
    (await sha1(concat(
      bufferFromBigInt(serverNonce, 16, true, true),
      bufferFromBigInt(newNonce, 32, true, true),
    ))).slice(12, 12 + 8),
    await sha1(concat(
      bufferFromBigInt(newNonce, 32, true, true),
      bufferFromBigInt(newNonce, 32, true, true),
    )),
    bufferFromBigInt(newNonce, 32, true, true).slice(0, 4),
  );

  const answer = ige256Decrypt(encryptedAnswer, tmpAesKey, tmpAesIv).slice(20);

  reader = new TLReader(answer);

  object = reader.readObject();
  assertInstanceOf(object, ServerDHInnerData);

  const { g, dhPrime, gA, serverTime } = object;

  const b = getRandomBigInt(256);

  const gB = modExp(BigInt(g), b, bigIntFromBuffer(dhPrime, false, false));
  data = new ClientDHInnerData({
    nonce,
    serverNonce,
    retryId: 0n,
    gB: bufferFromBigInt(gB, 256, false, false),
  }).serialize();

  let dataWithHash = concat(await sha1(data), data);

  let padding = dataWithHash.length % 16;
  if (padding > 0) {
    padding = 16 - padding;
  }
  const randomBytes = new Uint8Array(padding);
  crypto.getRandomValues(randomBytes);
  dataWithHash = concat(dataWithHash, randomBytes);

  const encryptedData = ige256Encrypt(dataWithHash, tmpAesKey, tmpAesIv);

  await transport.send(packUnencryptedMessage(
    new SetClientDHParams({ nonce, serverNonce, encryptedData })
      .serialize(),
  ));

  {
    const buffer = await transport.receive();
    const { message, messageId } = unpackUnencryptedMessage(buffer);
    messageIds.push(messageId);
    const reader = new TLReader(message);
    const object = reader.readObject();

    assertInstanceOf(object, DhGenOk);
  }

  const authKey = modExp(
    bigIntFromBuffer(gA, false, false),
    b,
    bigIntFromBuffer(dhPrime, false, false),
  );

  return { authKey, messageIds, serverTime };
}
