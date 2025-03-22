/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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

import { assert, assertEquals, concat, ige256Decrypt, ige256Encrypt, unreachable } from "../0_deps.ts";
import { bigIntFromBuffer, bufferFromBigInt, factorize, getLogger, getRandomBigInt, modExp, rsaPad, sha1 } from "../1_utilities.ts";
import { Mtproto } from "../2_tl.ts";
import { DC, getDcId } from "../3_transport.ts";
import { PUBLIC_KEYS, PublicKeys } from "../4_constants.ts";
import { SessionPlain } from "../4_session.ts";
import { ClientAbstract, ClientAbstractParams } from "./0_client_abstract.ts";

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
export class ClientPlain extends ClientAbstract implements ClientAbstract {
  readonly #publicKeys: PublicKeys;
  #session: SessionPlain;
  #dc: DC;
  #cdn: boolean;

  constructor(dc: DC, params?: ClientPlainParams) {
    super(params);
    this.#publicKeys = params?.publicKeys ?? PUBLIC_KEYS;
    this.#session = new SessionPlain(dc, params);
    this.#dc = this.#session.dc;
    this.#cdn = this.#session.cdn;
  }

  get connected() {
    return this.#session.connected;
  }

  async connect() {
    await this.#session.connect();
  }

  disconnect() {
    this.#session.disconnect();
  }

  get disconnected() {
    return this.#session.disconnected;
  }

  async invoke<T extends Mtproto.AnyObject, R = T["_"] extends keyof Mtproto.Functions ? Mtproto.ReturnType<T> extends never ? Mtproto.ReturnType<Mtproto.Functions[T["_"]]> : never : never>(function_: T): Promise<R> {
    await this.#session.send(Mtproto.serializeObject(function_));
    const body = await this.#session.receive();
    return await Mtproto.deserializeType(Mtproto.mustGetReturnType(function_._), body) as R;
  }

  async createAuthKey(): Promise<[Uint8Array<ArrayBuffer>, bigint]> {
    const nonce = getRandomBigInt(16, false, true);
    LcreateAuthKey.debug("auth key creation started");

    let resPq: Mtproto.resPQ | null = null;
    for (let i = 0; i < 10; i++) {
      try {
        LcreateAuthKey.debug(`req_pq_multi [${i + 1}]`);
        resPq = await this.invoke({ _: "req_pq_multi", nonce });

        assert(Mtproto.is("resPQ", resPq));
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

    const dc = getDcId(this.#dc, this.#cdn);
    const pq = resPq.pq;
    const serverNonce = resPq.server_nonce;
    const newNonce = getRandomBigInt(32, false, true);
    let encryptedData = await rsaPad(
      Mtproto.serializeObject({
        _: "p_q_inner_data_dc",
        pq,
        p,
        q,
        dc,
        new_nonce: newNonce,
        nonce,
        server_nonce: serverNonce,
      }),
      publicKey,
    );

    const dhParams = await this.invoke({
      _: "req_DH_params",
      nonce,
      server_nonce: serverNonce,
      p,
      q,
      public_key_fingerprint: publicKeyFingerprint,
      encrypted_data: encryptedData,
    });

    assert(Mtproto.is("server_DH_params_ok", dhParams));
    LcreateAuthKey.debug("got server_DH_params_ok");

    const newNonce_ = bufferFromBigInt(newNonce, 32, true, true);
    const serverNonce_ = bufferFromBigInt(serverNonce, 16, true, true);
    const tmpAesKey = concat([await sha1(concat([newNonce_, serverNonce_])), (await sha1(concat([serverNonce_, newNonce_]))).subarray(0, 0 + 12)]);
    const tmpAesIv = concat([(await sha1(concat([serverNonce_, newNonce_]))).subarray(12, 12 + 8), await sha1(concat([newNonce_, newNonce_])), newNonce_.subarray(0, 0 + 4)]);
    const answerWithHash = ige256Decrypt(dhParams.encrypted_answer, tmpAesKey, tmpAesIv);

    const dhInnerData = await Mtproto.deserializeType("server_DH_inner_data", answerWithHash.slice(20));
    const { g, g_a: gA_, dh_prime: dhPrime_ } = dhInnerData;
    const gA = bigIntFromBuffer(gA_, false, false);
    const dhPrime = bigIntFromBuffer(dhPrime_, false, false);

    const b = getRandomBigInt(256, false, false);
    const gB = modExp(BigInt(g), b, dhPrime);

    const data = Mtproto.serializeObject({
      _: "client_DH_inner_data",
      nonce,
      server_nonce: serverNonce,
      retry_id: 0n,
      g_b: bufferFromBigInt(gB, 256, false, false),
    });

    let dataWithHash = concat([await sha1(data), data]);

    while (dataWithHash.length % 16 != 0) {
      dataWithHash = concat([dataWithHash, new Uint8Array(1)]);
    }

    encryptedData = ige256Encrypt(dataWithHash, tmpAesKey, tmpAesIv);

    const dhGenOk = await this.invoke({
      _: "set_client_DH_params",
      nonce,
      server_nonce: serverNonce,
      encrypted_data: encryptedData,
    });
    assert(Mtproto.is("dh_gen_ok", dhGenOk));
    LcreateAuthKey.debug("got dh_gen_ok");

    const serverNonceSlice = serverNonce_.subarray(0, 8);
    const salt = newNonce_.subarray(0, 0 + 8).map((v, i) => v ^ serverNonceSlice[i]);

    const authKey_ = modExp(gA, b, dhPrime);
    const authKey = bufferFromBigInt(authKey_, 256, false, false);

    LcreateAuthKey.debug("auth key created");

    return [authKey, bigIntFromBuffer(salt, true, false)];
  }
}
