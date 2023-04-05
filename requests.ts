import { Transport } from "./transport/transport.ts";
import {
  bigIntFromBuffer,
  getRandomBigInt,
  modExp,
} from "./utilities/0_bigint.ts";
import { sha1, sha256 } from "./utilities/3_hash.ts";
import {
  deserializeString,
  packUnencryptedMessage,
  serializeString,
} from "./utilities/4_tl.ts";
import { bufferFromBigInt, concat, xor } from "./utilities/1_buffer.ts";
import { ExtendedDataView } from "./utilities/2_extended_data_view.ts";
import {
  assertEquals,
  factorize,
  ige256Decrypt,
  ige256Encrypt,
  randomBigIntBits,
} from "./deps.ts";

const req_pq_multi = 0xbe7e8ef1;
const p_q_inner_data = 0x83c95aec;
const req_DH_params = 0xd712e4be;
const client_DH_inner_data = 0x6643b654;
const set_client_DH_params = 0xf5045f1f;

const PUBLIC_KEYS = [
  {
    f: 0xd09d1d85de64fd85n,
    n: 0xe8bb3305c0b52c6cf2afdf7637313489e63e05268e5badb601af417786472e5f93b85438968e20e6729a301c0afc121bf7151f834436f7fda680847a66bf64accec78ee21c0b316f0edafe2f41908da7bd1f4a5107638eeb67040ace472a14f90d9f7c2b7def99688ba3073adb5750bb02964902a359fe745d8170e36876d4fd8a5d41b2a76cbff9a13267eb9580b2d06d10357448d20d9da2191cb5d8c93982961cdfdeda629e37f1fb09a0722027696032fe61ed663db7a37f6f263d370f69db53a0dc0a1748bdaaff6209d5645485e6e001d1953255757e4b8e42813347b11da6ab500fd0ace7e6dfa3736199ccaf9397ed0745a427dcfa6cd67bcb1acff3n,
    e: 0x10001n,
  },
  {
    f: 0xb25898df208d2603n,
    n: 0xc8c11d635691fac091dd9489aedced2932aa8a0bcefef05fa800892d9b52ed03200865c9e97211cb2ee6c7ae96d3fb0e15aeffd66019b44a08a240cfdd2868a85e1f54d6fa5deaa041f6941ddf302690d61dc476385c2fa655142353cb4e4b59f6e5b6584db76fe8b1370263246c010c93d011014113ebdf987d093f9d37c2be48352d69a1683f8f6e6c2167983c761e3ab169fde5daaa12123fa1beab621e4da5935e9c198f82f35eae583a99386d8110ea6bd1abb0f568759f62694419ea5f69847c43462abef858b4cb5edc84e7b9226cd7bd7e183aa974a712c079dde85b9dc063b8a5c08e8f859c0ee5dcd824c7807f20153361a7f63cfd2a433a1be7f5n,
    e: 0x10001n,
  },
  {
    f: 0xb0419d69dc08a72cn,
    n: 0xCE04512E9D3DBB6EA8DFEE9B560C3C48E406E7852DD9640A019FCDA0FB65F69A4264B60CCAC82162A954A27A1CE764CD81389DD07D314A2E7B078F403E6D9DE57346772F603D9383A0835674070E35CD7FB965747F8B27EE69F4B191CA003B40D9D22AC574A35A2C23E5A79B185069106752979720B1DC6E8C8E5F3FE667CA45B5CB7033612AA08F92A67BA04345DDC8F5603688A9559F1BDA2F053BD2C498510DE0AB528FED53BCAE548F40D36EACC292D1D3AEE5AA06C87185397BC73CAF642F731B9C9323F8D658B9C0484F42EF77438113265CC6AE883063A8B7FC89B183B48192C6A423E96AAA80169965B79B0C497623577CD5086B386D4CA5C44B3DFDn,
    e: 0x010001n,
  },
];

export async function reqPqMulti(transport: Transport) {
  const nonce = randomBigIntBits(16 * 8);

  await transport.send(
    packUnencryptedMessage(
      concat(
        bufferFromBigInt(req_pq_multi, 4),
        bufferFromBigInt(nonce, 16),
      ),
    ),
  );

  const buffer = await transport.receive();
  const dataView = new ExtendedDataView(buffer.buffer);

  const _authKeyId = dataView.getBigUint64(0, true);
  const _messageId = dataView.getBigUint64(8, true);
  const _messageLength = dataView.getUint32(16, true);
  const _constructorId = dataView.getUint32(20, true);
  const nonce_ = dataView.getBigUint128(24, true);
  assertEquals(nonce, nonce_);
  const serverNonce = dataView.getBigUint128(40, true);
  const pq_ = deserializeString(buffer.slice(56, 56 + 12));
  const _vectorConstructor = dataView.getUint32(68, true);
  const _count = dataView.getUint32(72, true);
  const publicKeyFingerprint = dataView.getBigUint64(76, true);

  const pq = bigIntFromBuffer(pq_);

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

  let data = concat(
    bufferFromBigInt(p_q_inner_data, 4),
    serializeString(pqBytes),
    serializeString(p.valueOf(), 4),
    serializeString(q.valueOf(), 4),
    bufferFromBigInt(nonce, 16),
    bufferFromBigInt(serverNonce, 16),
    bufferFromBigInt(newNonce, 32),
  );

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

    iKeyAesEncrypted = bigIntFromBuffer(keyAesEncrypted);
  } while (iKeyAesEncrypted >= serverKey);
  /// The value of key_aes_encrypted is compared with the RSA-modulus of server_pubkey as a big-endian 2048-bit (256-byte) unsigned integer. If key_aes_encrypted turns out to be greater than or equal to the RSA modulus, the previous steps starting from the generation of new random temp_key are repeated.
  // if (iKeyAesEncrypted >= serverKey) {
  //   throw new Error("bigger");
  // }

  /// Otherwise the final step is performed:
  /// Step 8
  /// encrypted_data := RSA(key_aes_encrypted, server_pubkey); — 256-byte big-endian integer is elevated to the requisite power from the RSA public key modulo the RSA modulus, and the result is stored as a big-endian integer consisting of exactly 256 bytes (with leading zero bytes if required).
  const encrypedData = modExp(iKeyAesEncrypted, exponent, serverKey);

  assertEquals(bufferFromBigInt(encrypedData, 256, false).length, 256);
  /// End step 8

  const encryptedDataBuf = bufferFromBigInt(encrypedData, 256, false);

  await transport.send(packUnencryptedMessage(
    concat(
      bufferFromBigInt(req_DH_params, 4),
      bufferFromBigInt(nonce, 16),
      bufferFromBigInt(serverNonce, 16),
      serializeString(p.valueOf(), 4),
      serializeString(q.valueOf(), 4),
      bufferFromBigInt(publicKeyFingerprint, 8),
      serializeString(encryptedDataBuf),
    ),
  ));

  const buffer = await transport.receive();
  let dataView = new ExtendedDataView(buffer.buffer);

  const _authKeyId = dataView.getBigUint64(0, true);
  const _messageId = dataView.getBigUint64(8, true);
  const _messageLength = dataView.getUint32(16, true);
  const _constructorId = dataView.getUint32(20, true);
  const _nonce_ = dataView.getBigUint128(24, true);
  const _serverNonce_ = dataView.getBigUint128(40, true);
  const encryptedAnswer = deserializeString(buffer.slice(56, 56 + 596));

  const tmpAesKey = concat(
    await sha1(
      concat(
        bufferFromBigInt(newNonce, 32),
        bufferFromBigInt(serverNonce, 16),
      ),
    ),
    (await sha1(
      concat(
        bufferFromBigInt(serverNonce, 16),
        bufferFromBigInt(newNonce, 32),
      ),
    )).slice(0, 12),
  );

  const tmpAesIv = concat(
    (await sha1(concat(
      bufferFromBigInt(serverNonce, 16),
      bufferFromBigInt(newNonce, 32),
    ))).slice(12, 12 + 8),
    await sha1(concat(
      bufferFromBigInt(newNonce, 32),
      bufferFromBigInt(newNonce, 32),
    )),
    bufferFromBigInt(newNonce, 32).slice(0, 4),
  );

  const answer = ige256Decrypt(encryptedAnswer, tmpAesKey, tmpAesIv).slice(20);

  dataView = new ExtendedDataView(answer.buffer);

  const _constructorId_ = dataView.getUint32(0, true);
  const __nonce = dataView.getBigUint128(4, true);
  const __serverNonce = dataView.getBigUint128(20, true);
  const g = dataView.getUint32(36, true);
  const dhPrime = deserializeString(answer.slice(40, 40 + 260));
  const gA = deserializeString(answer.slice(300, 300 + 260));
  const _serverTime = dataView.getUint32(560);

  const b = getRandomBigInt(256);

  const gB = modExp(BigInt(g), b, bigIntFromBuffer(dhPrime));

  data = concat(
    bufferFromBigInt(client_DH_inner_data, 4),
    bufferFromBigInt(nonce, 16),
    bufferFromBigInt(serverNonce, 16),
    bufferFromBigInt(0, 8),
    serializeString(bufferFromBigInt(gB, 256, false)),
  );

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
    concat(
      bufferFromBigInt(set_client_DH_params, 4),
      bufferFromBigInt(nonce, 16),
      bufferFromBigInt(serverNonce, 16),
      serializeString(encryptedData),
    ),
  ));

  const authKey = modExp(bigIntFromBuffer(gA), b, bigIntFromBuffer(dhPrime));

  return authKey;
}
