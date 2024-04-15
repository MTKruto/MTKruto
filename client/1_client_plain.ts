/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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

import { assertEquals, assertInstanceOf, concat, ige256Decrypt, ige256Encrypt, unreachable } from "../0_deps.ts";
import { ConnectionError, TransportError } from "../0_errors.ts";
import { bigIntFromBuffer, bufferFromBigInt, factorize, getLogger, getRandomBigInt, modExp, rsaPad, sha1 } from "../1_utilities.ts";
import { functions, serialize, TLReader, types } from "../2_tl.ts";
import { PUBLIC_KEYS, PublicKeys } from "../4_constants.ts";
import { ClientAbstract, ClientAbstractParams } from "./0_client_abstract.ts";
import { getMessageId, packUnencryptedMessage, unpackUnencryptedMessage } from "./0_message.ts";

const L = getLogger("ClientPlain");
const LcreateAuthKey = L.branch("createAuthKey");

export interface ClientPlainParams extends ClientAbstractParams {
  /**
   * MTProto public keys to use in the `[keyId, [key, exponent]][]` format. Don't set this unless you know what you are doing. Defaults to Telegram servers' public keys.
   */
  publicKeys?: PublicKeys;
}

/**
 * An MTProto client for making plain connections. Most users won't need to interact with this. Used internally for creating authorization keys.
 */
export class ClientPlain extends ClientAbstract {
  readonly #publicKeys: PublicKeys;
  #lastMsgId = 0n; // TODO: refactor

  constructor(params?: ClientPlainParams) {
    super(params);
    this.#publicKeys = params?.publicKeys ?? PUBLIC_KEYS;
  }

  async invoke<T extends functions.Function<unknown>>(function_: T): Promise<T["__R"]> {
    if (!this.transport) {
      throw new ConnectionError("Not connected.");
    }
    const msgId = this.#lastMsgId = getMessageId(this.#lastMsgId);

    const payload = packUnencryptedMessage(function_[serialize](), msgId);
    await this.transport.transport.send(payload);
    L.out(function_);
    L.outBin(payload);

    const buffer = await this.transport.transport.receive();
    L.inBin(payload);
    if (buffer.length == 4) {
      const int = bigIntFromBuffer(buffer, true, true);
      throw new TransportError(Number(int));
    }
    const { message } = unpackUnencryptedMessage(buffer);
    const reader = new TLReader(message);
    const result = reader.readObject();
    L.in(result);
    return result;
  }

  async createAuthKey(): Promise<[Uint8Array, bigint]> {
    const nonce = getRandomBigInt(16, false, true);
    LcreateAuthKey.debug("auth key creation started");

    let resPq: types.ResPQ | null = null;
    for (let i = 0; i < 10; i++) {
      try {
        LcreateAuthKey.debug(`req_pq_multi [${i + 1}]`);
        resPq = await this.invoke(new functions.req_pq_multi({ nonce }));

        assertInstanceOf(resPq, types.ResPQ);
        assertEquals(resPq.nonce, nonce);
        LcreateAuthKey.debug("got res_pq");
        break;
      } catch (err) {
        LcreateAuthKey.debug("req_pq_multi error:", err);
      }
    }
    if (!resPq) {
      unreachable();
    }

    const pq_ = bigIntFromBuffer(resPq.pq, false, false);
    LcreateAuthKey.debug(`pq=${pq_}`);
    const [p_, q_] = factorize(pq_);
    LcreateAuthKey.debug("factorized pq");
    LcreateAuthKey.debug(`p=${p_}, q=${q_}`);
    const p = bufferFromBigInt(p_, 4, false, false);
    const q = bufferFromBigInt(q_, 4, false, false);

    let publicKeyFingerprint: bigint | undefined;
    let publicKey: [bigint, bigint] | undefined;

    for (const fingerprint of resPq.server_public_key_fingerprints) {
      const maybePublicKey = this.#publicKeys.find(([k]) => (k == fingerprint));
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
    const serverNonce = resPq.server_nonce;
    const newNonce = getRandomBigInt(32, false, true);
    let encryptedData = await rsaPad(
      new types.P_q_inner_data_dc({
        pq,
        p,
        q,
        dc,
        new_nonce: newNonce,
        nonce,
        server_nonce: serverNonce,
      })[serialize](),
      publicKey,
    );

    const dhParams = await this.invoke(
      new functions.req_DH_params({
        nonce,
        server_nonce: serverNonce,
        p,
        q,
        public_key_fingerprint: publicKeyFingerprint,
        encrypted_data: encryptedData,
      }),
    );

    assertInstanceOf(dhParams, types.Server_DH_params_ok);
    LcreateAuthKey.debug("got server_DH_params_ok");

    const newNonce_ = bufferFromBigInt(newNonce, 32, true, true);
    const serverNonce_ = bufferFromBigInt(serverNonce, 16, true, true);
    const tmpAesKey = concat([await sha1(concat([newNonce_, serverNonce_])), (await sha1(concat([serverNonce_, newNonce_]))).subarray(0, 0 + 12)]);
    const tmpAesIv = concat([(await sha1(concat([serverNonce_, newNonce_]))).subarray(12, 12 + 8), await sha1(concat([newNonce_, newNonce_])), newNonce_.subarray(0, 0 + 4)]);
    const answerWithHash = ige256Decrypt(dhParams.encrypted_answer, tmpAesKey, tmpAesIv);

    const dhInnerData = new TLReader(answerWithHash.slice(20)).readObject();
    assertInstanceOf(dhInnerData, types.Server_DH_inner_data);
    const { g, g_a: gA_, dh_prime: dhPrime_ } = dhInnerData;
    const gA = bigIntFromBuffer(gA_, false, false);
    const dhPrime = bigIntFromBuffer(dhPrime_, false, false);

    const b = getRandomBigInt(256, false, false);
    const gB = modExp(BigInt(g), b, dhPrime);

    const data = new types.Client_DH_inner_data({
      nonce,
      server_nonce: serverNonce,
      retry_id: 0n,
      g_b: bufferFromBigInt(gB, 256, false, false),
    })[serialize]();

    let dataWithHash = concat([await sha1(data), data]);

    while (dataWithHash.length % 16 != 0) {
      dataWithHash = concat([dataWithHash, new Uint8Array(1)]);
    }

    encryptedData = ige256Encrypt(dataWithHash, tmpAesKey, tmpAesIv);

    const dhGenOk = await this.invoke(new functions.set_client_DH_params({ nonce, server_nonce: serverNonce, encrypted_data: encryptedData }));
    assertInstanceOf(dhGenOk, types.Dh_gen_ok);
    LcreateAuthKey.debug("got dh_gen_ok");

    const serverNonceSlice = serverNonce_.subarray(0, 8);
    const salt = newNonce_.subarray(0, 0 + 8).map((v, i) => v ^ serverNonceSlice[i]);

    const authKey_ = modExp(gA, b, dhPrime);
    const authKey = bufferFromBigInt(authKey_, 256, false, false);

    LcreateAuthKey.debug("auth key created");

    return [authKey, bigIntFromBuffer(salt, true, false)];
  }
}
