import { debug, gunzip } from "../deps.ts";
import { MaybePromise } from "../types.ts";
import { ackThreshold, DEFAULT_APP_VERSION, DEFAULT_DEVICE_MODEL, DEFAULT_INITIAL_DC, DEFAULT_LANG_CODE, DEFAULT_LANG_PACK, DEFAULT_SYSTEM_LANG_CODE, DEFAULT_SYSTEM_VERSION, LAYER, MAX_CHANNEL_ID, MAX_CHAT_ID, USERNAME_TTL, ZERO_CHANNEL_ID } from "../constants.ts";
import { bigIntFromBuffer, getRandomBigInt, getRandomId } from "../utilities/0_bigint.ts";
import { parseHtml } from "../utilities/0_html.ts";
import { decryptMessage, encryptMessage, getMessageId } from "../utilities/1_message.ts";
import { checkPassword } from "../utilities/1_password.ts";
import { as, MaybeVectorTLObject } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import * as functions from "../tl/3_functions.ts";
import { TLReader } from "../tl/3_tl_reader.ts";
import { RPCResult } from "../tl/4_rpc_result.ts";
import { Message } from "../tl/5_message.ts";
import { MessageContainer } from "../tl/6_message_container.ts";
import { ClientAbstract } from "./client_abstract.ts";
import { ClientPlain } from "./client_plain.ts";
import { Storage } from "../storage/storage.ts";
import { StorageMemory } from "../storage/storage_memory.ts";
import { DC, TransportProvider } from "../transport/transport_provider.ts";
import { sha1 } from "../utilities/0_hash.ts";
import { MessageEntity, messageEntityToTlObject } from "../types/0_message_entity.ts";
import { constructMessage } from "../types/3_message.ts";

const d = debug("client");

export const restartAuth = Symbol();

export enum ParseMode {
  None = "none",
  HTML = "html",
}

export interface AuthorizeUserParams<S = string> {
  phone: S | (() => MaybePromise<S>);
  code: S | (() => MaybePromise<S>);
  password: S | (() => MaybePromise<S>);
}

export type UpdatesHandler = null | ((client: Client, update: types.Updates) => MaybePromise<void>);

export interface ClientParams {
  /**
   * Default parse mode. Defauls to `ParseMode.None`.
   */
  parseMode?: ParseMode;
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
  private auth: { key: Uint8Array; id: bigint } | null = null;
  private sessionId = getRandomBigInt(8, true, false);
  private state = { salt: 0n, seqNo: 0 };
  private promises = new Map<bigint, { resolve: (obj: MaybeVectorTLObject) => void; reject: (err: MaybeVectorTLObject) => void }>();
  private toAcknowledge = new Set<bigint>();
  public updatesHandler: UpdatesHandler = null;

  public readonly parseMode: ParseMode;

  public readonly appVersion: string;
  public readonly deviceModel: string;
  public readonly langCode: string;
  public readonly langPack: string;
  public readonly systemLangCode: string;
  public readonly systemVersion: string;

  /**
   * Constructs the client.
   *
   * @param storage The storage provider to use. Defaults to memory storage.
   * @param apiId App's API ID from [my.telegram.org](https://my.telegram.org/apps). Defaults to 0 (unset).
   * @param apiHash App's API hash from [my.telegram.org/apps](https://my.telegram.org/apps). Default to empty string (unset).
   * @param params Other parameters.
   */
  constructor(
    public readonly storage: Storage = new StorageMemory(),
    public readonly apiId = 0,
    public readonly apiHash = "",
    params?: ClientParams,
  ) {
    super(params?.transportProvider);

    this.parseMode = params?.parseMode ?? ParseMode.None;

    this.appVersion = params?.appVersion ?? DEFAULT_APP_VERSION;
    this.deviceModel = params?.deviceModel ?? DEFAULT_DEVICE_MODEL;
    this.langCode = params?.langCode ?? DEFAULT_LANG_CODE;
    this.langPack = params?.langPack ?? DEFAULT_LANG_PACK;
    this.systemLangCode = params?.systemLangCode ?? DEFAULT_SYSTEM_LANG_CODE;
    this.systemVersion = params?.systemVersion ?? DEFAULT_SYSTEM_VERSION;
  }

  private storageInited = false;

  /**
   * Sets the DC and resets the auth key stored in the session provider
   * if the stored DC was not the same as the `dc` parameter.
   *
   * @param dc The DC to change to.
   */
  async setDc(dc: DC) {
    if (!this.storageInited) {
      await this.storage.init();
      this.storageInited = true;
    }
    if (await this.storage.getDc() != dc) {
      await this.storage.setDc(dc);
      await this.storage.setAuthKey(null);
    }
    super.setDc(dc);
  }

  private async setAuth(key: Uint8Array) {
    const hash = await sha1(key);
    const id = bigIntFromBuffer(hash.slice(-8), true, false);
    this.auth = { key, id };
  }

  /**
   * Loads the session if `setDc` was not called, initializes and connnects
   * a `ClientPlain` to generate auth key if there was none, and connects the client.
   * Before establishing the connection, the session is saved.
   */
  async connect() {
    if (!this.storageInited) {
      await this.storage.init();
      this.storageInited = true;
    }
    const authKey = await this.storage.getAuthKey();
    if (authKey == null) {
      const plain = new ClientPlain(this.transportProvider);
      const dc = await this.storage.getDc();
      if (dc != null) {
        plain.setDc(dc);
      }
      await plain.connect();
      const { authKey, salt } = await plain.createAuthKey();
      await plain.disconnect();
      await this.storage.setAuthKey(authKey);
      await this.setAuth(authKey);
      this.state.salt = salt;
    } else {
      await this.setAuth(authKey);
    }
    const dc = await this.storage.getDc();
    if (dc != null) {
      await this.setDc(dc);
    }
    await super.connect();
    if (dc == null) {
      await this.storage.setDc(DEFAULT_INITIAL_DC);
    }
    d("enrypted client connected");
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
    d("authorizing with %s", typeof params === "string" ? "bot token" : params instanceof types.AuthExportedAuthorization ? "exported authorization" : "AuthorizeUserParams");

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
    d("connection inited");

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
              d("authorized as user");
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
      d("already authorized");
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
        d("authorization imported");
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
              d("verification code sent");

              if (sentCode instanceof types.AuthSentCode) {
                while (true) {
                  const phoneCode = typeof params.code === "string" ? params.code : await params.code();
                  try {
                    const auth = await this.invoke(new functions.AuthSignIn({ phoneNumber, phoneCode, phoneCodeHash: sentCode.phoneCodeHash }));
                    if (auth instanceof types.AuthAuthorizationSignUpRequired) {
                      throw new Error("Sign up not supported");
                    } else {
                      signedIn = true;
                      d("authorized as user");
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
        d("authorized as bot");
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
          d("migrated to DC%s", newDc);
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
    if (!this.auth) {
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
          this.auth.key,
          this.auth.id,
          this.sessionId,
        );
      } catch (err) {
        d("failed to decrypt message: %o", err);
        continue;
      }
      const messages = decrypted instanceof MessageContainer ? decrypted.messages : [decrypted];

      for (const message of messages) {
        let body = message.body;
        if (body instanceof types.GZIPPacked) {
          body = new TLReader(gunzip(body.packedData)).readObject();
        }
        d("received %s", body.constructor.name);
        if (body instanceof types.Updates) {
          this.processUpdates(body);
        } else if (message.body instanceof RPCResult) {
          let result = message.body.result;
          if (result instanceof types.GZIPPacked) {
            result = new TLReader(gunzip(result.packedData)).readObject();
          }
          if (result instanceof types.RPCError) {
            d("RPCResult: %d %s", result.errorCode, result.errorMessage);
          } else {
            d("RPCResult: %s", result.constructor.name);
          }
          const promise = this.promises.get(message.body.messageId);
          if (promise) {
            if (result instanceof types.RPCError) {
              promise.reject(result);
            } else {
              if (result instanceof types.Updates) {
                await this.processChats(result.chats);
                await this.processUsers(result.users);
              }
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
      } catch (err) {
        d("ping loop error: %o", err);
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
    if (!this.auth) {
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
        this.auth.key,
        this.auth.id,
        this.state.salt,
        this.sessionId,
      ),
    );
    d("invoked %s", function_.constructor.name);

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

  private async processChats(chats: types.TypeChat[]) {
    for (const chat of chats) {
      if (chat instanceof types.Channel && chat.accessHash) {
        await this.storage.setChannelAccessHash(chat.id, chat.accessHash);
        if (chat.username) {
          await this.storage.updateUsernames("channel", chat.id, [chat.username]);
        }
        if (chat.usernames) {
          await this.storage.updateUsernames("channel", chat.id, chat.usernames.map((v) => v[as](types.Username)).map((v) => v.username));
        }
      }
    }
  }

  private async processUsers(users: types.TypeUser[]) {
    for (const user of users) {
      if (user instanceof types.User && user.accessHash) {
        await this.storage.setUserAccessHash(user.id, user.accessHash);
        if (user.username) {
          await this.storage.updateUsernames("user", user.id, [user.username]);
        }
        if (user.usernames) {
          await this.storage.updateUsernames("user", user.id, user.usernames.map((v) => v[as](types.Username)).map((v) => v.username));
        }
      }
    }
  }

  private async processUpdates(updates: types.Updates) {
    try {
      await this.processChats(updates.chats);
      await this.processUsers(updates.users);
      for (const update of updates.updates) {
        if (update instanceof types.UpdateUserName) {
          await this.storage.updateUsernames("user", update.userId, update.usernames.map((v) => v[as](types.Username)).map((v) => v.username));
        }
      }

      await this.updatesHandler?.(this, updates);
    } catch (err) {
      console.error("Error processing updates:", err);
    }
  }

  async getInputPeer(id: string | number) {
    if (typeof id === "string") {
      if (!id.startsWith("@")) {
        throw new Error("Expected username to start with @");
      } else {
        id = id.slice(1);
        if (!id) {
          throw new Error("Empty username");
        }
        let userId = 0n;
        let channelId = 0n;
        const maybeUsername = await this.storage.getUsername(id);
        if (maybeUsername != null && Date.now() - maybeUsername[2].getTime() < USERNAME_TTL) {
          const [type, id] = maybeUsername;
          if (type == "user") {
            userId = id;
          } else {
            channelId = id;
          }
        } else {
          const resolved = await this.invoke(new functions.ContactsResolveUsername({ username: id }));
          await this.processChats(resolved.chats);
          await this.processUsers(resolved.users);
          if (resolved.peer instanceof types.PeerUser) {
            userId = resolved.peer.userId;
          } else if (resolved.peer instanceof types.PeerChannel) {
            channelId = resolved.peer.channelId;
          } else {
            throw new Error("Unreachable");
          }
        }
        if (userId) {
          const accessHash = await this.storage.getUserAccessHash(userId);
          return new types.InputPeerUser({ userId, accessHash: accessHash ?? 0n });
        } else if (channelId) {
          const accessHash = await this.storage.getChannelAccessHash(channelId);
          return new types.InputPeerChannel({ channelId, accessHash: accessHash ?? 0n });
        } else {
          throw new Error("Unreachable");
        }
      }
    } else if (id > 0) {
      const id_ = BigInt(id);
      const accessHash = await this.storage.getUserAccessHash(id_);
      return new types.InputPeerUser({ userId: id_, accessHash: accessHash ?? 0n });
    } else if (-MAX_CHAT_ID <= id) {
      return new types.InputPeerChat({ chatId: BigInt(Math.abs(id)) });
    } else if (ZERO_CHANNEL_ID - MAX_CHANNEL_ID <= id && id != ZERO_CHANNEL_ID) {
      const id_ = BigInt(Math.abs(id - ZERO_CHANNEL_ID));
      const accessHash = await this.storage.getChannelAccessHash(id_);
      return new types.InputPeerChannel({ channelId: id_, accessHash: accessHash ?? 0n });
    } else {
      throw new Error("ID format unknown or not implemented");
    }
  }

  async sendMessage(
    chatId: number | string,
    text: string,
    params?: {
      parseMode?: ParseMode;
      entities?: MessageEntity[];
      disableWebPagePreview?: boolean;
      disableNotification?: boolean;
      protectContent?: boolean;
      replyToMessageId?: number;
      messageThreadId?: number;
      sendAs?: number | string;
    },
  ) {
    const entities_ = params?.entities ?? [];
    const parseMode = params?.parseMode ?? this.parseMode;
    switch (parseMode) {
      case ParseMode.None:
        break;
      case ParseMode.HTML: {
        const [newText, entitiesToPush] = parseHtml(text);
        text = newText;
        for (const entity of entitiesToPush) {
          entities_.push(entity);
        }
      }
    }

    const peer = await this.getInputPeer(chatId);
    const randomId = getRandomId();
    const message = text;
    const noWebpage = params?.disableWebPagePreview ? true : undefined;
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const replyToMsgId = params?.replyToMessageId;
    const topMsgId = params?.messageThreadId;
    const sendAs = params?.sendAs ? await this.getInputPeer(params.sendAs) : undefined;
    const entities = entities_?.length > 0 ? entities_.map((v) => messageEntityToTlObject(v)) : undefined;

    const updates = await this.invoke(
      new functions.MessagesSendMessage({
        peer,
        randomId,
        message,
        noWebpage,
        silent,
        noforwards,
        replyToMsgId,
        topMsgId,
        sendAs,
        entities,
      }),
    ).then((v) => v[as](types.Updates));

    for (const update of updates.updates) {
      if (update instanceof types.UpdateNewMessage) {
        return constructMessage(update.message[as](types.Message), updates.users, updates.chats);
      } else if (update instanceof types.UpdateNewChannelMessage) {
        return constructMessage(update.message[as](types.Message), updates.users, updates.chats);
      }
    }

    throw new Error("Unreachable");
  }
}
