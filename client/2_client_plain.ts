import { assertEquals, assertInstanceOf, debug, factorize, ige256Decrypt, ige256Encrypt } from "../0_deps.ts";
import { bigIntFromBuffer, bufferFromBigInt, concat, getRandomBigInt, modExp, rsaPad, sha1, UNREACHABLE } from "../1_utilities.ts";
import { functions, serialize, TLReader, types } from "../2_tl.ts";
import { PUBLIC_KEYS, PublicKeys } from "../4_constants.ts";
import { getMessageId, packUnencryptedMessage, unpackUnencryptedMessage } from "./0_message.ts";
import { ClientAbstract, ClientAbstractParams } from "./1_client_abstract.ts";

const d = debug("ClientPlain/createAuthKey");

export interface ClientPlainParams extends ClientAbstractParams {
  /**
   * MTProto public keys to use in the `[keyId, [key, exponent]][]` format. Don't set this unless you know what you are doing. Defaults to Telegram servers' public keys.
   */
  publicKeys?: PublicKeys;
}

export class ClientPlain extends ClientAbstract {
  private readonly publicKeys: PublicKeys;
  private lastMsgId = 0n;

  constructor(params?: ClientPlainParams) {
    super(params);
    this.publicKeys = params?.publicKeys ?? PUBLIC_KEYS;
  }

  async invoke<T extends functions.Function<unknown>>(function_: T): Promise<T["__R"]> {
    if (!this.transport) {
      throw new Error("Not connected");
    }
    const msgId = this.lastMsgId = getMessageId(this.lastMsgId);
    await this.transport.transport.send(packUnencryptedMessage(function_[serialize](), msgId));
    const buffer = await this.transport.transport.receive();
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
    d("auth key creation started");

    let resPq: types.ResPQ | null = null;
    for (let i = 0; i < 10; i++) {
      try {
        d("req_pq_multi [%d]", i + 1);
        resPq = await this.invoke(new functions.ReqPQMulti({ nonce }));

        assertInstanceOf(resPq, types.ResPQ);
        assertEquals(resPq.nonce, nonce);
        d("got res_pq");
        break;
      } catch (err) {
        d("req_pq_multi error: %o", err);
      }
    }
    if (!resPq) {
      UNREACHABLE();
    }

    const pq_ = bigIntFromBuffer(resPq.pq, false, false);
    const [p_, q_] = factorize(pq_);
    d("factorized pq");
    const p = bufferFromBigInt(p_, 4, false, false);
    const q = bufferFromBigInt(q_, 4, false, false);

    let publicKeyFingerprint: bigint | undefined;
    let publicKey: [bigint, bigint] | undefined;

    for (const fingerprint of resPq.serverPublicKeyFingerprints) {
      const maybePublicKey = this.publicKeys.find(([k]) => (k == fingerprint));
      if (maybePublicKey) {
        publicKeyFingerprint = fingerprint;
        publicKey = maybePublicKey[1];
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
      new types.PQInnerDataDC({
        pq,
        p,
        q,
        dc,
        newNonce,
        nonce,
        serverNonce,
      })[serialize](),
      publicKey,
    );

    const dhParams = await this.invoke(
      new functions.ReqDHParams({
        nonce,
        serverNonce,
        p,
        q,
        publicKeyFingerprint,
        encryptedData,
      }),
    );

    assertInstanceOf(dhParams, types.ServerDHParamsOK);
    d("got server_DH_params_ok");

    const newNonce_ = bufferFromBigInt(newNonce, 32, true, true);
    const serverNonce_ = bufferFromBigInt(serverNonce, 16, true, true);
    const tmpAesKey = concat(await sha1(concat(newNonce_, serverNonce_)), (await sha1(concat(serverNonce_, newNonce_))).slice(0, 0 + 12));
    const tmpAesIv = concat((await sha1(concat(serverNonce_, newNonce_))).slice(12, 12 + 8), await sha1(concat(newNonce_, newNonce_)), newNonce_.slice(0, 0 + 4));
    const answerWithHash = ige256Decrypt(dhParams.encryptedAnswer, tmpAesKey, tmpAesIv);

    const dhInnerData = new TLReader(answerWithHash.slice(20)).readObject();
    assertInstanceOf(dhInnerData, types.ServerDHInnerData);
    const { g, gA: gA_, dhPrime: dhPrime_ } = dhInnerData;
    const gA = bigIntFromBuffer(gA_, false, false);
    const dhPrime = bigIntFromBuffer(dhPrime_, false, false);

    const b = getRandomBigInt(256, false, false);
    const gB = modExp(BigInt(g), b, dhPrime);

    const data = new types.ClientDHInnerData({
      nonce,
      serverNonce,
      retryId: 0n,
      gB: bufferFromBigInt(gB, 256, false, false),
    })[serialize]();

    let dataWithHash = concat(await sha1(data), data);

    while (dataWithHash.length % 16 != 0) {
      dataWithHash = concat(dataWithHash, new Uint8Array(1));
    }

    encryptedData = ige256Encrypt(dataWithHash, tmpAesKey, tmpAesIv);

    const dhGenOk = await this.invoke(new functions.SetClientDHParams({ nonce, serverNonce, encryptedData }));
    assertInstanceOf(dhGenOk, types.DHGenOK);
    d("got dh_gen_ok");

    const serverNonceSlice = serverNonce_.slice(0, 8);
    const salt = newNonce_.slice(0, 0 + 8).map((v, i) => v ^ serverNonceSlice[i]);

    const authKey_ = modExp(gA, b, dhPrime);
    const authKey = bufferFromBigInt(authKey_, 256, false, false);

    d("auth key created");

    return {
      authKey,
      salt: bigIntFromBuffer(salt, true, false),
    };
  }
}
