import { gunzip } from "../deps.ts";
import { MaybePromise } from "../types.ts";
import { ackThreshold, DEFAULT_APP_VERSION, DEFAULT_DEVICE_MODEL, DEFAULT_LANG_CODE, DEFAULT_LANG_PACK, DEFAULT_SYSTEM_LANG_CODE, DEFAULT_SYSTEM_VERSION, LAYER } from "../constants.ts";
import { getRandomBigInt } from "../utilities/0_bigint.ts";
import { decryptMessage, encryptMessage, getMessageId } from "../utilities/1_message.ts";
import { checkPassword } from "../utilities/1_password.ts";
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

export const restartAuth = Symbol();

export interface AuthorizeUserParams<S = string> {
  phone: S | (() => MaybePromise<S>);
  code: S | (() => MaybePromise<S>);
  password: S | (() => MaybePromise<S>);
}

export type UpdatesHandler = null | ((client: Client, update: types.Updates) => MaybePromise<void>);

export interface ClientParams {
  /**
   * The transport provider to use. Defaults to `defaultTransportProvider`.
   */
  transportProvider?: TransportProvider;
  /**
   * The app_version parameter to be passed to initConnection when calling `authorize`.
   */
  appVersion?: string;
  /**
   * The device_version parameter to be passed to initConnection when calling `authorize`.
   */
  deviceModel?: string;
  /**
   * The lang_code parameter to be passed to initConnection when calling `authorize`.
   */
  langCode?: string;
  /**
   * The lang_pack parameter to be passed to initConnection when calling `authorize`.
   */
  langPack?: string;
  /**
   * The system_lang_cde parameter to be passed to initConnection when calling `authorize`.
   */
  systemLangCode?: string;
  /**
   * The system_version parameter to be passed to initConnection when calling `authorize`.
   */
  systemVersion?: string;
}

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

  /**
   * Constructs the client.
   *
   * @param session The session provider to use. Defaults to in-memory session.
   * @param apiId App's API ID from [my.telegram.org](https://my.telegram.org/apps). Defaults to 0 (unset).
   * @param apiHash App's API hash from [my.telegram.org/apps](https://my.telegram.org/apps). Default to empty string (unset).
   * @param params Other parameters.
   */
  constructor(
    public readonly session: Session = new SessionMemory(),
    public readonly apiId = 0,
    public readonly apiHash = "",
    params?: ClientParams,
  ) {
    super(params?.transportProvider);

    this.appVersion = params?.appVersion ?? DEFAULT_APP_VERSION;
    this.deviceModel = params?.deviceModel ?? DEFAULT_DEVICE_MODEL;
    this.langCode = params?.langCode ?? DEFAULT_LANG_CODE;
    this.langPack = params?.langPack ?? DEFAULT_LANG_PACK;
    this.systemLangCode = params?.systemLangCode ?? DEFAULT_SYSTEM_LANG_CODE;
    this.systemVersion = params?.systemVersion ?? DEFAULT_SYSTEM_VERSION;
  }

  private shouldLoadSession = true;

  /**
   * Sets the DC and resets the auth key stored in the session provider
   * if the stored DC was not the same as the `dc` parameter.
   *
   * @param dc The DC to change to.
   */
  setDc(dc: DC) {
    if (this.session.dc != dc) {
      this.session.dc = dc;
      this.session.authKey = null;
      if (this.shouldLoadSession) {
        this.shouldLoadSession = false;
      }
    }
    super.setDc(dc);
  }

  /**
   * Loads the session if `setDc` was not called, initializes and connnects
   * a `ClientPlain` to generate auth key if there was none, and connects the client.
   * Before establishing the connection, the session is saved.
   */
  async connect() {
    if (this.shouldLoadSession) {
      await this.session.load();
      this.shouldLoadSession = false;
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

  /**
   * Calls [initConnection](1) and authorizes the client with one of the following:
   *
   * - Bot token (`string`)
   * - Exported authorization (`types.AuthExportedAuthorization`)
   * - User authorization handlers (`AuthorizeUserParams`)
   *
   * if the current auth key doesn't throw AUTH_KEY_UNREGISTERED when calling [updates.getState](2).
   *
   * Notes:
   * 1. Requires the `apiId` and `apiHash` paramters to be passed when constructing the client.
   * 2. Reconnects the client to the appropriate DC in case of MIGRATE_X errors.
   * 3. The parameters passed to the [initConnection][1] call can be configured with the last parameter of the constructor.
   *
   * [1]: https://core.telegram.org/method/initConnection
   * [2]: https://core.telegram.org/method/updates.getState
   */
  async authorize(params: string | types.AuthExportedAuthorization | AuthorizeUserParams) {
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

    const handlePassword = async (err: unknown) => {
      params = params as AuthorizeUserParams;
      if (err instanceof types.RPCError && err.errorMessage == "SESSION_PASSWORD_NEEDED") {
        while (true) {
          const ap = await this.invoke(new functions.AccountGetPassword());

          if (ap.currentAlgo instanceof types.PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow) {
            try {
              const password = typeof params.password === "string" ? params.password : await params.password();
              const input = await checkPassword(password, ap);

              await this.invoke(new functions.AuthCheckPassword({ password: input }));
              break;
            } catch (err) {
              if (err instanceof types.RPCError && err.errorMessage == "PASSWORD_HASH_INVALID") {
                continue;
              } else {
                throw err;
              }
            }
          } else {
            throw new Error(`Handling ${ap.currentAlgo?.constructor.name} not implemented`);
          }
        }
      } else {
        throw err;
      }
    };

    try {
      await this.invoke(new functions.UpdatesGetState());
      return;
    } catch (err) {
      if (!(err instanceof types.RPCError) || err.errorMessage != "AUTH_KEY_UNREGISTERED") {
        throw err;
      }
    }

    let signedIn = false;
    let phoneNumber: string | null = null;

    try {
      if (params instanceof types.AuthExportedAuthorization) {
        await this.invoke(new functions.AuthImportAuthorization({ id: params.id, bytes: params.bytes }));
      } else if (typeof params == "object") {
        while (true) {
          if (signedIn) {
            break;
          }

          try {
            try {
              phoneNumber = typeof params.phone === "string" ? params.phone : await params.phone();
              const sentCode = await this.invoke(
                new functions.AuthSendCode({
                  apiId: this.apiId,
                  apiHash: this.apiHash,
                  phoneNumber,
                  settings: new types.CodeSettings(),
                }),
              );

              if (sentCode instanceof types.AuthSentCode) {
                while (true) {
                  const phoneCode = typeof params.code === "string" ? params.code : await params.code();
                  try {
                    const auth = await this.invoke(new functions.AuthSignIn({ phoneNumber, phoneCode, phoneCodeHash: sentCode.phoneCodeHash }));
                    if (auth instanceof types.AuthAuthorizationSignUpRequired) {
                      throw new Error("Sign up not supported");
                    } else {
                      signedIn = true;
                      break;
                    }
                  } catch (err) {
                    if (err instanceof types.RPCError && err.errorMessage == "PHONE_CODE_INVALID") {
                      continue;
                    } else {
                      throw err;
                    }
                  }
                }
              } else {
                throw new Error(`Handling ${sentCode.constructor.name} not implemented`);
              }
            } catch (err) {
              await handlePassword(err);
            }
          } catch (err) {
            if (err == restartAuth) {
              continue;
            } else {
              throw err;
            }
          }
        }
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
          if (typeof params === "object" && phoneNumber != null) {
            params = Object.assign({}, params) as AuthorizeUserParams;
            params.phone = phoneNumber;
          }
          await this.authorize(params);
        } else {
          await handlePassword(err);
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
          (await this.session.authKeyId)!,
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

  /**
   * Invokes a function waiting and returning its reply if the second parameter is not `true`. Requires the client
   * to be connected.
   *
   * @param function_ The function to invoke.
   */
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
        (await this.session.authKeyId)!,
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

  /**
   * Alias for `invoke` with its second parameter being `true`.
   */
  send<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T) {
    return this.invoke(function_, true);
  }
}
