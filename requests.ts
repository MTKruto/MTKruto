import { Transport } from "./transport/transport.ts";
import { packUnencryptedMessage } from "./utilities/1_tl.ts";
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
import { TLRawReader } from "./tl/0_tl_raw_reader.ts";
import {
  ClientDHInnerData,
  map,
  PQInnerData,
  ServerDHParamsOk,
} from "./tl/2_constructors.ts";
import {
  ReqDHParams,
  ReqPqMulti,
  SetClientDHParams,
} from "./tl/3_functions.ts";
import { deserialize, paramDesc } from "./tl/1_tl_object.ts";
import { assertInstanceOf } from "https://deno.land/std@0.181.0/testing/asserts.ts";

const PUBLIC_KEYS = [
  {
    f: -0x2f62e27a219b027bn,
    n: 0xe8bb3305c0b52c6cf2afdf7637313489e63e05268e5badb601af417786472e5f93b85438968e20e6729a301c0afc121bf7151f834436f7fda680847a66bf64accec78ee21c0b316f0edafe2f41908da7bd1f4a5107638eeb67040ace472a14f90d9f7c2b7def99688ba3073adb5750bb02964902a359fe745d8170e36876d4fd8a5d41b2a76cbff9a13267eb9580b2d06d10357448d20d9da2191cb5d8c93982961cdfdeda629e37f1fb09a0722027696032fe61ed663db7a37f6f263d370f69db53a0dc0a1748bdaaff6209d5645485e6e001d1953255757e4b8e42813347b11da6ab500fd0ace7e6dfa3736199ccaf9397ed0745a427dcfa6cd67bcb1acff3n,
    e: 0x10001n,
  },
  {
    f: -0x4da76720df72d9fdn,
    n: 0xc8c11d635691fac091dd9489aedced2932aa8a0bcefef05fa800892d9b52ed03200865c9e97211cb2ee6c7ae96d3fb0e15aeffd66019b44a08a240cfdd2868a85e1f54d6fa5deaa041f6941ddf302690d61dc476385c2fa655142353cb4e4b59f6e5b6584db76fe8b1370263246c010c93d011014113ebdf987d093f9d37c2be48352d69a1683f8f6e6c2167983c761e3ab169fde5daaa12123fa1beab621e4da5935e9c198f82f35eae583a99386d8110ea6bd1abb0f568759f62694419ea5f69847c43462abef858b4cb5edc84e7b9226cd7bd7e183aa974a712c079dde85b9dc063b8a5c08e8f859c0ee5dcd824c7807f20153361a7f63cfd2a433a1be7f5n,
    e: 0x10001n,
  },
  {
    f: -0x4fbe629623f758d4n,
    n: 0xCE04512E9D3DBB6EA8DFEE9B560C3C48E406E7852DD9640A019FCDA0FB65F69A4264B60CCAC82162A954A27A1CE764CD81389DD07D314A2E7B078F403E6D9DE57346772F603D9383A0835674070E35CD7FB965747F8B27EE69F4B191CA003B40D9D22AC574A35A2C23E5A79B185069106752979720B1DC6E8C8E5F3FE667CA45B5CB7033612AA08F92A67BA04345DDC8F5603688A9559F1BDA2F053BD2C498510DE0AB528FED53BCAE548F40D36EACC292D1D3AEE5AA06C87185397BC73CAF642F731B9C9323F8D658B9C0484F42EF77438113265CC6AE883063A8B7FC89B183B48192C6A423E96AAA80169965B79B0C497623577CD5086B386D4CA5C44B3DFDn,
    e: 0x10001n,
  },
];

export async function reqPqMulti(transport: Transport) {
  const nonce = getRandomBigInt(16, false, true);

  await transport.send(
    packUnencryptedMessage(
      new ReqPqMulti({ nonce }).serialize(),
    ),
  );

  const buffer = await transport.receive();
  const reader = new TLRawReader(buffer);

  const _authKeyId = reader.readInt64();
  const _messageId = reader.readInt64();
  const _messageLength = reader.readInt32();
  const _constructorId = reader.readInt32();

  const nonce_ = reader.readInt128();
  assertEquals(nonce, nonce_);
  const serverNonce = reader.readInt128();
  const pq_ = reader.readBytes();
  const _vectorConstructor = reader.readInt32();
  const _count = reader.readInt32();
  const publicKeyFingerprint = reader.readInt64();

  const pq = bigIntFromBuffer(pq_, false, true);

  return { nonce, serverNonce, publicKeyFingerprint, pq, pqBytes: pq_ };
}

export async function getDHParams(
  transport: Transport,
  pq: bigint,
  pqBytes: Uint8Array,
  nonce: bigint,
  serverNonce: bigint,
  publicKeyFingerprint: bigint,
) {
  const key = PUBLIC_KEYS.find((v) => v.f == publicKeyFingerprint);
  if (!key) {
    throw new Error("Key not found");
  }
  const { n: serverKey, e: exponent } = key;
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

  const encryptedDataBuf = bufferFromBigInt(encrypedData, 256, false, true);

  assertEquals(encryptedDataBuf.length, 256);
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
  let reader = new TLRawReader(buffer);

  const _authKeyId = reader.readInt64();
  const _messageId = reader.readInt64();
  const _messageLength = reader.readInt32();
  const _constructorId = reader.readInt32(false);
  const constructor = map.get(_constructorId);

  if (!constructor) {
    throw new Error("Unexpected constructor");
  }
  const response = deserialize(
    reader.buffer,
    constructor[paramDesc],
    constructor,
  );

  assertInstanceOf(response, ServerDHParamsOk);
  const { encryptedAnswer } = response;

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

  const _answer = ige256Decrypt(encryptedAnswer, tmpAesKey, tmpAesIv).slice(20);

  reader = new TLRawReader(buffer);

  const _constructorId_ = reader.readInt32();
  const __nonce = reader.readInt128();
  const __serverNonce = reader.readInt128();
  const g = reader.readInt32();
  const dhPrime = reader.readBytes();
  const gA = reader.readBytes();
  const _serverTime = reader.readInt32();

  const b = getRandomBigInt(256, false, false);

  const gB = modExp(BigInt(g), b, bigIntFromBuffer(dhPrime, false, true));

  data = new ClientDHInnerData({
    nonce,
    serverNonce,
    retryId: 0n,
    gB: bufferFromBigInt(gB, 256, false, true),
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

  const authKey = modExp(
    bigIntFromBuffer(gA, false, true),
    b,
    bigIntFromBuffer(dhPrime, false, true),
  );

  return authKey;
}
