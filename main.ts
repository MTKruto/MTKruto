import {
  assert,
  assertEquals,
  assertExists,
  assertInstanceOf,
  factorize,
  ige256Decrypt,
  ige256Encrypt,
} from "./deps.ts";
import { Client } from "./client.ts";
import {
  ReqDHParams,
  ReqPqMulti,
  SetClientDHParams,
} from "./tl/3_functions.ts";
import {
  bigIntFromBuffer,
  getRandomBigInt,
  modExp,
} from "./utilities/0_bigint.ts";
import {
  ClientDHInnerData,
  DhGenOk,
  PQInnerDataDc,
  ResPQ,
  ServerDHInnerData,
  ServerDHParamsOk,
} from "./tl/2_constructors.ts";
import {
  bufferFromBigInt,
  concat,
  sha1,
  sha256,
} from "./utilities/0_buffer.ts";
import { publicKeys } from "./constants.ts";
import { TLReader } from "./tl/3_tl_reader.ts";

async function rsaPad(data: Uint8Array, fingerprint: bigint) {
  assert(data.length <= 144);

  const publicKey = publicKeys.get(fingerprint);
  assertExists(publicKey);
  const [serverKey, exponent] = publicKey;

  let keyAesEncryptedInt: bigint;
  let tries = 0;

  do {
    if (++tries == 10) {
      throw new Error("Out of tries");
    }

    const dataWithPadding = concat(data, new Uint8Array(192 - data.length));
    const dataPadReversed = new Uint8Array(dataWithPadding).reverse();

    const tempKey = crypto.getRandomValues(new Uint8Array(32));

    // deno-fmt-ignore
    const dataWithHash = concat(dataPadReversed, await sha256(concat(tempKey, dataWithPadding)));
    // deno-fmt-ignore
    const aesEncrypted = ige256Encrypt(dataWithHash, tempKey, new Uint8Array(32));

    const aesEncryptedSha256 = await sha256(aesEncrypted);
    const tempKeyXor = tempKey.map((v, i) => v ^ aesEncryptedSha256[i]);

    const keyAesEncrypted = concat(tempKeyXor, aesEncrypted);
    assertEquals(keyAesEncrypted.length, 256);

    keyAesEncryptedInt = bigIntFromBuffer(keyAesEncrypted, false, false);
  } while (keyAesEncryptedInt >= serverKey);

  const encryptedDataInt = modExp(keyAesEncryptedInt, exponent, serverKey);
  const encryptedData = bufferFromBigInt(encryptedDataInt, 256, false, false);
  assertEquals(encryptedData.length, 256);

  return encryptedData;
}
async function createAuthKey(client: Client) {
  let nonce = getRandomBigInt(16, false, true);

  const resPq = await client.invoke(new ReqPqMulti({ nonce }));

  assertInstanceOf(resPq, ResPQ);
  assertEquals(resPq.nonce, nonce);
  nonce = resPq.nonce;

  const pq_ = bigIntFromBuffer(resPq.pq, false, false);
  const [p_, q_] = factorize(pq_);
  const p = bufferFromBigInt(p_.valueOf(), 4, false, false);
  const q = bufferFromBigInt(q_.valueOf(), 4, false, false);

  const publicKeyFingerprint = resPq.serverPublicKeyFingerprints[0];

  const dc = client.dcId;
  const pq = resPq.pq;
  const serverNonce = resPq.serverNonce;
  const newNonce = getRandomBigInt(32, true, true);
  let encryptedData = await rsaPad(
    new PQInnerDataDc({
      pq,
      p,
      q,
      dc,
      newNonce,
      nonce,
      serverNonce,
    }).serialize(),
    publicKeyFingerprint,
  );

  const dhParams = await client.invoke(
    new ReqDHParams({
      nonce,
      serverNonce,
      p,
      q,
      publicKeyFingerprint,
      encryptedData,
    }),
  );

  assertInstanceOf(dhParams, ServerDHParamsOk);

  const newNonce_ = bufferFromBigInt(newNonce, 32, true, true);
  const serverNonce_ = bufferFromBigInt(serverNonce, 16, true, true);
  // deno-fmt-ignore
  const tmpAesKey = concat(await sha1(concat(newNonce_, serverNonce_)), (await sha1(concat(serverNonce_, newNonce_))).slice(0, 0 + 12));
  // deno-fmt-ignore
  const tmpAesIv = concat((await sha1(concat(serverNonce_, newNonce_))).slice(12, 12 + 8), await sha1(concat(newNonce_, newNonce_)), newNonce_.slice(0, 0 + 4));
  // deno-fmt-ignore
  const answerWithHash = ige256Decrypt(dhParams.encryptedAnswer, tmpAesKey, tmpAesIv);

  const dhInnerData = new TLReader(answerWithHash.slice(20)).readObject();
  assertInstanceOf(dhInnerData, ServerDHInnerData);
  const { g, gA: gA_, dhPrime: dhPrime_ } = dhInnerData;
  const gA = bigIntFromBuffer(gA_, false, false);
  const dhPrime = bigIntFromBuffer(dhPrime_, false, false);

  const b = getRandomBigInt(256, false, false);
  const gB = modExp(BigInt(g), dhPrime, b);

  const data = new ClientDHInnerData({
    nonce,
    serverNonce,
    retryId: 0n,
    gB: bufferFromBigInt(gB, 256, false, false),
  }).serialize();

  let dataWithHash = concat(await sha1(data), data);

  while (dataWithHash.length % 16 != 0) {
    dataWithHash = concat(dataWithHash, new Uint8Array(1));
  }

  encryptedData = ige256Encrypt(dataWithHash, tmpAesKey, tmpAesIv);

  // deno-fmt-ignore
  const dhGenOk = await client.invoke(new SetClientDHParams({ nonce, serverNonce, encryptedData }));
  assertInstanceOf(dhGenOk, DhGenOk);

  const serverNonceSlice = serverNonce_.slice(0, 8);
  const salt = newNonce_.slice(0, 0 + 8).map((v, i) => v ^ serverNonceSlice[i]);

  const authKey_ = modExp(gA, dhPrime, b);
  const authKey = bufferFromBigInt(authKey_, 256, false, false);
  const authKeyId = (await sha1(authKey)).slice(-8);

  return {
    authKey,
    authKeyId: bigIntFromBuffer(authKeyId, true, false),
    salt: bigIntFromBuffer(salt, true, false),
  };
}

const client = new Client(true);
await client.connect();

console.log(await createAuthKey(client));
