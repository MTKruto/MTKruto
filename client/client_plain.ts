import { assertEquals, assertInstanceOf, factorize, ige256Decrypt, ige256Encrypt } from "../deps.ts";
import { publicKeys } from "../constants.ts";
import { bigIntFromBuffer, getRandomBigInt, modExp } from "../utilities/0_bigint.ts";
import { bufferFromBigInt, concat, sha1 } from "../utilities/0_buffer.ts";
import { rsaPad } from "../utilities/1_auth.ts";
import { packUnencryptedMessage, unpackUnencryptedMessage } from "../utilities/1_message.ts";
import { ClientDHInnerData, DHGenOK, PQInnerDataDC, ResPQ, ServerDHInnerData, ServerDHParamsOK } from "../tl/2_constructors.ts";
import { Function, ReqDHParams, ReqPQMulti, SetClientDHParams } from "../tl/3_functions.ts";
import { TLReader } from "../tl/3_tl_reader.ts";
import { ClientAbstract } from "./client_abstract.ts";
import { logger } from "../utilities/0_logger.ts";

export class ClientPlain extends ClientAbstract {
  async invoke<T extends Function<unknown>>(function_: T): Promise<T["__R"]> {
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
    const nonce = getRandomBigInt(16, false, true);
    logger().debug("Auth key creation started");

    const resPq = await this.invoke(new ReqPQMulti({ nonce }));

    assertInstanceOf(resPq, ResPQ);
    assertEquals(resPq.nonce, nonce);
    logger().debug("Got res_pq");

    const pq_ = bigIntFromBuffer(resPq.pq, false, false);
    const [p_, q_] = factorize(pq_);
    logger().debug("Factorized pq");
    const p = bufferFromBigInt(p_, 4, false, false);
    const q = bufferFromBigInt(q_, 4, false, false);

    let publicKeyFingerprint: bigint | undefined;
    let publicKey: [bigint, bigint] | undefined;

    for (const fingerprint of resPq.serverPublicKeyFingerprints) {
      const maybePublicKey = publicKeys.get(fingerprint);
      if (maybePublicKey) {
        publicKeyFingerprint = fingerprint;
        publicKey = maybePublicKey;
        break;
      }
    }

    if (!publicKeyFingerprint || !publicKey) {
      throw new Error("No corresponding public key found");
    }

    const dc = this.dcId;
    const pq = resPq.pq;
    const serverNonce = resPq.serverNonce;
    const newNonce = getRandomBigInt(32, false, true);
    let encryptedData = await rsaPad(
      new PQInnerDataDC({
        pq,
        p,
        q,
        dc,
        newNonce,
        nonce,
        serverNonce,
      }).serialize(),
      publicKey,
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

    assertInstanceOf(dhParams, ServerDHParamsOK);
    logger().debug("Got server_DH_params_ok");

    const newNonce_ = bufferFromBigInt(newNonce, 32, true, true);
    const serverNonce_ = bufferFromBigInt(serverNonce, 16, true, true);
    const tmpAesKey = concat(await sha1(concat(newNonce_, serverNonce_)), (await sha1(concat(serverNonce_, newNonce_))).slice(0, 0 + 12));
    const tmpAesIv = concat((await sha1(concat(serverNonce_, newNonce_))).slice(12, 12 + 8), await sha1(concat(newNonce_, newNonce_)), newNonce_.slice(0, 0 + 4));
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

    const dhGenOk = await this.invoke(new SetClientDHParams({ nonce, serverNonce, encryptedData }));
    assertInstanceOf(dhGenOk, DHGenOK);
    logger().debug("Got dh_gen_ok");

    const serverNonceSlice = serverNonce_.slice(0, 8);
    const salt = newNonce_.slice(0, 0 + 8).map((v, i) => v ^ serverNonceSlice[i]);

    const authKey_ = modExp(gA, b, dhPrime);
    const authKey = bufferFromBigInt(authKey_, 256, false, false);
    const authKeyId = (await sha1(authKey)).slice(-8);

    logger().debug("Auth key created");

    return {
      authKey,
      authKeyId: bigIntFromBuffer(authKeyId, true, false),
      salt: bigIntFromBuffer(salt, true, false),
    };
  }
}
