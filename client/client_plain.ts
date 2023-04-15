import {
  assertEquals,
  assertInstanceOf,
  factorize,
  ige256Decrypt,
  ige256Encrypt,
} from "../deps.ts";
import {
  bigIntFromBuffer,
  getRandomBigInt,
  modExp,
} from "../utilities/0_bigint.ts";
import { bufferFromBigInt, concat, sha1 } from "../utilities/0_buffer.ts";
import { rsaPad } from "../utilities/1_auth.ts";
import {
  packUnencryptedMessage,
  unpackUnencryptedMessage,
} from "../utilities/1_message.ts";
import {
  ClientDHInnerData,
  DhGenOk,
  PQInnerDataDc,
  ResPQ,
  ServerDHInnerData,
  ServerDHParamsOk,
} from "../tl/2_constructors.ts";
import {
  Function,
  ReqDHParams,
  ReqPqMulti,
  SetClientDHParams,
} from "../tl/3_functions.ts";
import { TLReader } from "../tl/3_tl_reader.ts";
import { ClientAbstract } from "./client_abstract.ts";

export class ClientPlain extends ClientAbstract {
  async invoke(function_: Function) {
    await this.transport.send(packUnencryptedMessage(function_.serialize()));
    const buffer = await this.transport.receive();
    if (buffer.length == 4) {
      const int = bigIntFromBuffer(buffer, true, true);
      if (int == -404n) {
        throw new Error("-404");
      }
    }
    const { message } = unpackUnencryptedMessage(buffer);
    const reader = new TLReader(message);
    return reader.readObject();
  }

  async createAuthKey() {
    let nonce = getRandomBigInt(16, true, true);

    const resPq = await this.invoke(new ReqPqMulti({ nonce }));

    assertInstanceOf(resPq, ResPQ);
    assertEquals(resPq.nonce, nonce);
    nonce = resPq.nonce;

    const pq_ = bigIntFromBuffer(resPq.pq, false, false);
    const [p_, q_] = factorize(pq_);
    const p = bufferFromBigInt(p_.valueOf(), 4, false, false);
    const q = bufferFromBigInt(q_.valueOf(), 4, false, false);

    const publicKeyFingerprint = resPq.serverPublicKeyFingerprints[2];

    const dc = this.dcId;
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

    const dhParams = await this.invoke(
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
    const gB = modExp(BigInt(g), b, dhPrime);

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
    const dhGenOk = await this.invoke(new SetClientDHParams({ nonce, serverNonce, encryptedData }));
    assertInstanceOf(dhGenOk, DhGenOk);

    const serverNonceSlice = serverNonce_.slice(0, 8);
    const salt = newNonce_.slice(0, 0 + 8).map((v, i) =>
      v ^ serverNonceSlice[i]
    );

    const authKey_ = modExp(gA, b, dhPrime);
    const authKey = bufferFromBigInt(authKey_, 256, false, false);
    const authKeyId = (await sha1(authKey)).slice(-8);

    return {
      authKey,
      authKeyId: bigIntFromBuffer(authKeyId, true, false),
      salt: bigIntFromBuffer(salt, true, false),
    };
  }
}
