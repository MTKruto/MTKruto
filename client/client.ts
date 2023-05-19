import { gunzip } from "../deps.ts";
import { MaybePromise } from "../types.ts";
import { ackThreshold, DEFAULT_APP_VERSION, DEFAULT_DEVICE_MODEL, DEFAULT_LANG_CODE, DEFAULT_LANG_PACK, DEFAULT_SYSTEM_LANG_CODE, DEFAULT_SYSTEM_VERSION, LAYER } from "../constants.ts";
import { getRandomBigInt } from "../utilities/0_bigint.ts";
import { decryptMessage, encryptMessage, getMessageId } from "../utilities/1_message.ts";
import { MaybeVectorTLObject } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import * as functions from "../tl/3_functions.ts";
import { TLReader } from "../tl/3_tl_reader.ts";
import { RPCResult } from "../tl/4_rpc_result.ts";
import { Message } from "../tl/5_message.ts";
import { MessageContainer } from "../tl/6_message_container.ts";
import { ClientAbstract } from "./client_abstract.ts";
import { ClientPlain } from "./client_plain.ts";
import { Session } from "../session/session.ts";
import { SessionMemory } from "../session/session_memory.ts";
import { DC, TransportProvider } from "../transport/transport_provider.ts";

export interface AuthorizeUserParams<S = string, N = { first: S; last: S }> {
  phone: S | (() => MaybePromise<S>);
  code: S | (() => MaybePromise<S>);
  password: S | (() => MaybePromise<S>);
  names: N | (() => MaybePromise<N>);
}

export type UpdatesHandler = null | ((client: Client, update: types.Updates) => MaybePromise<void>);

export class Client extends ClientAbstract {
  private sessionId = getRandomBigInt(8, true, false);
  private state = { salt: 0n, seqNo: 0 };
  private promises = new Map<bigint, { resolve: (obj: MaybeVectorTLObject) => void; reject: (err: MaybeVectorTLObject) => void }>();
  private toAcknowledge = new Set<bigint>();
  public updatesHandler: UpdatesHandler = null;

  public readonly appVersion: string;
  public readonly deviceModel: string;
  public readonly langCode: string;
  public readonly langPack: string;
  public readonly systemLangCode: string;
  public readonly systemVersion: string;

  constructor(
    public readonly session: Session = new SessionMemory(),
    public readonly apiId = 0,
    public readonly apiHash = "",
    params?: {
      transportProvider?: TransportProvider;
      appVersion?: string;
      deviceModel?: string;
      langCode?: string;
      langPack?: string;
      systemLangCode?: string;
      systemVersion?: string;
    },
  ) {
    super(params?.transportProvider);

    this.appVersion = params?.appVersion ?? DEFAULT_APP_VERSION;
    this.deviceModel = params?.deviceModel ?? DEFAULT_DEVICE_MODEL;
    this.langCode = params?.langCode ?? DEFAULT_LANG_CODE;
    this.langPack = params?.langPack ?? DEFAULT_LANG_PACK;
    this.systemLangCode = params?.systemLangCode ?? DEFAULT_SYSTEM_LANG_CODE;
    this.systemVersion = params?.systemVersion ?? DEFAULT_SYSTEM_VERSION;
  }

  setDc(dc: DC) {
    if (this.session.dc != dc) {
      this.session.dc = dc;
      this.session.authKey = null;
    }
    super.setDc(dc);
  }

  private sessionLoaded = false;
  async connect() {
    if (!this.sessionLoaded) {
      await this.session.load();
      this.sessionLoaded = true;
    }
    if (this.session.authKey == null) {
      const plain = new ClientPlain(this.transportProvider);
      if (this.session.dc != null) {
        plain.setDc(this.session.dc);
      }
      await plain.connect();
      const { authKey, salt } = await plain.createAuthKey();
      await plain.disconnect();
      this.state.salt = salt;
      this.session.authKey = authKey;
    }
    if (this.session.dc != null) {
      this.setDc(this.session.dc);
    }
    await this.session.save();
    await super.connect();
    // logger().debug("Client connected");
    this.receiveLoop();
    this.pingLoop();
  }

  async authorize(params: string | AuthorizeUserParams) {
    if (!this.apiId) {
      throw new Error("apiId not set");
    }
    if (!this.apiHash) {
      throw new Error("apiHash not set");
    }

    await this.invoke(
      new functions.InitConnection({
        apiId: this.apiId,
        appVersion: this.appVersion,
        deviceModel: this.deviceModel,
        langCode: this.langCode,
        langPack: this.langPack,
        query: new functions.InvokeWithLayer({
          layer: LAYER,
          query: new functions.HelpGetConfig(),
        }),
        systemLangCode: this.systemLangCode,
        systemVersion: this.systemVersion,
      }),
    );

    try {
      await this.invoke(new functions.UpdatesGetState());
      return;
    } catch (err) {
      if (!(err instanceof types.RPCError) || err.errorMessage != "AUTH_KEY_UNREGISTERED") {
        throw err;
      }
    }

    try {
      if (typeof params == "object") {
        throw new Error("Not implemented");
      } else {
        await this.invoke(new functions.AuthImportBotAuthorization({ apiId: this.apiId, apiHash: this.apiHash, botAuthToken: params, flags: 0 }));
      }
    } catch (err) {
      if (err instanceof types.RPCError) {
        const match = err.errorMessage.match(/MIGRATE_(\d)$/);
        if (match) {
          let newDc = match[1];
          if (Math.abs(this.dcId) >= 10_000) {
            newDc += "-test";
          }
          await this.reconnect(newDc as DC);
          await this.authorize(params);
        } else {
          throw err;
        }
      } else {
        throw err;
      }
    }
  }

  private async receiveLoop() {
    if (!this.session.authKey) {
      throw new Error("Not connected");
    }

    while (this.connected) {
      if (this.toAcknowledge.size >= ackThreshold) {
        await this.send(new types.MsgsAck({ msgIds: [...this.toAcknowledge] }));
        this.toAcknowledge.clear();
      }

      let buffer: Uint8Array;
      try {
        buffer = await this.transport.receive();
      } catch (err) {
        if (!this.connected) {
          break;
        } else {
          throw err;
        }
      }

      let decrypted: Message | MessageContainer;
      try {
        decrypted = await decryptMessage(
          buffer,
          this.session.authKey,
          this.sessionId,
        );
      } catch (_err) {
        // logger().error(`Failed to decrypt message: ${err}`);
        continue;
      }
      const messages = decrypted instanceof MessageContainer ? decrypted.messages : [decrypted];

      for (const message of messages) {
        let body = message.body;
        if (body instanceof types.GZIPPacked) {
          body = new TLReader(gunzip(body.packedData)).readObject();
        }
        // logger().debug(`Received ${body.constructor.name}`);
        if (body instanceof types.Updates) {
          this.updatesHandler?.(this, body);
        } else if (message.body instanceof RPCResult) {
          let result = message.body.result;
          if (result instanceof types.GZIPPacked) {
            result = new TLReader(gunzip(result.packedData)).readObject();
          }
          const promise = this.promises.get(message.body.messageId);
          if (promise) {
            if (result instanceof types.RPCError) {
              promise.reject(result);
            } else {
              promise.resolve(result);
            }
            this.promises.delete(message.body.messageId);
          }
        } else if (message.body instanceof types.Pong) {
          const promise = this.promises.get(message.body.msgId);
          if (promise) {
            promise.resolve(message.body);
            this.promises.delete(message.body.msgId);
          }
        } else if (message.body instanceof types.BadMsgNotification || message.body instanceof types.BadServerSalt) {
          if (message.body instanceof types.BadServerSalt) {
            this.state.salt = message.body.newServerSalt;
          }
          const promise = this.promises.get(message.body.badMsgId);
          if (promise) {
            promise.resolve(message.body);
            this.promises.delete(message.body.badMsgId);
          }
        }

        this.toAcknowledge.add(message.id);
      }
    }
  }

  private async pingLoop() {
    while (this.connected) {
      try {
        await this.invoke(new functions.Ping({ pingId: getRandomBigInt(8, true, false) }));
      } catch (_err) {
        // logger().error(`Failed to invoke ping: ${err}`);
      }
      await new Promise((r) => setTimeout(r, 60 * 1_000));
    }
  }

  async invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T): Promise<T extends functions.Function<unknown> ? T["__R"] : void>;
  async invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait: true): Promise<void>;
  async invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait?: boolean): Promise<T | void> {
    if (!this.session.authKey) {
      throw new Error("Not connected");
    }

    let seqNo = this.state.seqNo * 2;
    if (!(function_ instanceof functions.Ping) && !(function_ instanceof types.MsgsAck)) {
      seqNo++;
      this.state.seqNo++;
    }
    const message = new Message(getMessageId(), seqNo, function_);
    await this.transport.send(
      await encryptMessage(
        message,
        this.session.authKey,
        this.state.salt,
        this.sessionId,
      ),
    );
    // logger().debug(`Invoked ${function_.constructor.name}`);

    if (noWait) {
      return;
    }

    const result = await new Promise<MaybeVectorTLObject>((resolve, reject) => {
      this.promises.set(message.id, { resolve, reject });
    });

    if (result instanceof types.BadServerSalt) {
      return await this.invoke(function_) as T;
    } else {
      return result as T;
    }
  }

  send<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T) {
    return this.invoke(function_, true);
  }
}
