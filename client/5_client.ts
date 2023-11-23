import { debug, gunzip, Mutex } from "../0_deps.ts";
import { bigIntFromBuffer, drop, getRandomBigInt, getRandomId, MaybePromise, mod, mustPrompt, mustPromptOneOf, Queue, sha1, UNREACHABLE } from "../1_utilities.ts";
import { as, functions, getChannelChatId, Message_, MessageContainer, peerToChatId, ReadObject, RPCResult, TLError, TLReader, types } from "../2_tl.ts";
import { Storage, StorageMemory } from "../3_storage.ts";
import { DC } from "../3_transport.ts";
import { BotCommand, botCommandScopeToTlObject, CallbackQuery, ChatAction, ChatID, constructCallbackQuery, constructInlineQuery, constructMessage, constructUser, FileID, FileType, InlineQuery, InlineQueryResult, inlineQueryResultToTlObject, Message, MessageEntity, messageEntityToTlObject, ParseMode, replyMarkupToTlObject, ThumbnailSource, User, UsernameResolver } from "../3_types.ts";
import { ACK_THRESHOLD, APP_VERSION, CHANNEL_DIFFERENCE_LIMIT_BOT, CHANNEL_DIFFERENCE_LIMIT_USER, DEVICE_MODEL, LANG_CODE, LANG_PACK, LAYER, MAX_CHANNEL_ID, MAX_CHAT_ID, PublicKeys, STICKER_SET_NAME_TTL, SYSTEM_LANG_CODE, SYSTEM_VERSION, USERNAME_TTL, ZERO_CHANNEL_ID } from "../4_constants.ts";
import { AuthKeyUnregistered, FloodWait, Migrate, PasswordHashInvalid, PhoneNumberInvalid, SessionPasswordNeeded, upgradeInstance } from "../4_errors.ts";
import { parseHtml } from "./0_html.ts";
import { decryptMessage, encryptMessage, getMessageId } from "./0_message.ts";
import { checkPassword } from "./0_password.ts";
import { FileSource, getFileContents, isChannelPtsUpdate, isHttpUrl, isPtsUpdate, resolve, With } from "./0_utilities.ts";
import { ClientAbstract } from "./1_client_abstract.ts";
import { ClientPlain } from "./2_client_plain.ts";
import { AnswerCallbackQueryParams, AnswerInlineQueryParams, AuthorizeUserParams, ClientParams, ConnectionState, DeleteMessageParams, DeleteMessagesParams, DownloadParams, EditMessageParams, FilterableUpdates, FilterUpdate, ForwardMessagesParams, GetMyCommandsParams, InvokeErrorHandler, ReplyParams, SendMessageParams, SendPhotoParams, SendPollParams, SetMyCommandsParams, Update, UploadParams } from "./3_types.ts";
import { Composer, concat, flatten, Middleware, MiddlewareFn, skip } from "./4_composer.ts";

const d = debug("Client");
const dGap = debug("Client/recoverUpdateGap");
const dGapC = debug("Client/recoverChannelUpdateGap");
const dAuth = debug("Client/authorize");
const dRecv = debug("Client/receiveLoop");
const dUpload = debug("Client/upload");

const getEntity = Symbol();
const getStickerSetName = Symbol();
export const handleMigrationError = Symbol();
const getMessageWithReply = Symbol();

export interface Context extends Update {
  /** The client that received the update. */
  client: Client;
  /** Resolves to `ctx.message ?? ctx.editedMessage ?? ctx.callbackQuery?.message`. */
  msg: undefined extends this["message"] ? undefined extends this["editedMessage"] ? undefined extends this["callbackQuery"] ? never : this["callbackQuery"] extends With<CallbackQuery, "message"> ? this["callbackQuery"]["message"] : this["callbackQuery"] extends With<CallbackQuery, "inlineMessageId"> ? never : (Message | undefined) : this["editedMessage"] : this["message"];
  /** Resolves to `effectiveMessage?.chat`. */
  chat: this["msg"] extends never ? never : this["msg"]["chat"];
  /** Resolves to `(ctx.message ?? ctx.editedMessage)?.from ?? ctx.callbackQuery?.from ?? ctx.inlineQuery?.from`. */
  from: this["message"] extends Message ? this["message"]["from"] : this["editedMessage"] extends Message ? this["editedMessage"]["from"] : this["callbackQuery"] extends CallbackQuery ? this["callbackQuery"]["from"] : this["inlineQuery"] extends InlineQuery ? this["inlineQuery"]["from"] : never;
  /** Resolves to `effectiveMessage?.senderChat`. */
  senderChat: this["msg"] extends never ? never : this["msg"]["senderChat"];
  /** Reply the received message with a text message. */
  reply: (text: string, params?: Omit<SendMessageParams, "replyToMessageId"> & ReplyParams) => Promise<With<Message, "text">>;
  /** Reply the received message with a poll. */
  replyPoll: (question: string, options: [string, string, ...string[]], params?: Omit<SendPollParams, "replyToMessageId"> & ReplyParams) => Promise<With<Message, "poll">>;
  /** Reply the received message with a photo. */
  replyPhoto: (photo: FileSource, params?: Omit<SendPhotoParams, "replyToMessageId"> & ReplyParams) => Promise<With<Message, "photo">>;
  /** Delete the received message. */
  delete: () => Promise<void>;
  /** Forward the received message. */
  forward: (to: ChatID, params?: ForwardMessagesParams) => Promise<this["msg"]>;
  /** Send a chat action to the chat which the message was received from. */
  sendChatAction: (action: ChatAction, params?: { messageThreadId?: number }) => Promise<void>;
  /** Edit a message in the chat which the message was received from. */
  editMessageText: (messageId: number, text: string, params?: EditMessageParams) => Promise<With<Message, "text">>;
  /** Answer the received callback query. */
  answerCallbackQuery: (params?: AnswerCallbackQueryParams) => Promise<void>;
  /** Answer the received inline query. */
  answerInlineQuery: (results: InlineQueryResult[], params?: AnswerInlineQueryParams) => Promise<void>;
  /** Retrieve a single message of the chat which the message was received from. */
  getMessage: (messageId: number) => Promise<Omit<Message, "replyToMessage"> | null>;
  /** Retrieve multiple messages of the chat which the message was received from. */
  getMessages: (messageIds: number[]) => Promise<Omit<Message, "replyToMessage">[]>;
  /** Forward a message of the chat which the message was received from. */
  forwardMessage: (to: ChatID, messageId: number, params?: ForwardMessagesParams) => Promise<Message>;
  /** Forward multiple messages of the chat which the message was received from. */
  forwardMessages: (to: ChatID, messageIds: number[], params?: ForwardMessagesParams) => Promise<Message[]>;
  /** Delete a message in the chat which the message was received from. */
  deleteMessage: (messageId: number, params?: DeleteMessagesParams) => Promise<void>;
  /** Delete multiple messages in the chat which the message was received from. */
  deleteMessages: (messageIds: number[], params?: DeleteMessagesParams) => Promise<void>;
  toJSON: () => Update;
}

export function skipInvoke<C extends Context>(): InvokeErrorHandler<Client<C>> {
  return (_ctx, next) => next();
}

export const restartAuth = Symbol();

export class ConnectionError extends Error {
  //
}

export class Client<C extends Context = Context> extends ClientAbstract {
  #auth: { key: Uint8Array; id: bigint } | null = null;
  #sessionId = getRandomBigInt(8, true, false);
  #state = { salt: 0n, seqNo: 0 };
  #promises = new Map<bigint, { resolve: (obj: ReadObject) => void; reject: (err: ReadObject | Error) => void }>();
  #toAcknowledge = new Set<bigint>();
  #updateState?: types.UpdatesState;

  public readonly storage: Storage;
  public readonly parseMode: ParseMode;

  public readonly appVersion: string;
  public readonly deviceModel: string;
  public readonly langCode: string;
  public readonly langPack: string;
  public readonly systemLangCode: string;
  public readonly systemVersion: string;
  readonly #publicKeys?: PublicKeys;
  readonly #autoStart: boolean;
  readonly #ignoreOutgoing: boolean | null;

  /**
   * Constructs the client.
   *
   * @param storage The storage provider to use. Defaults to memory storage.
   * @param apiId App's API ID from [my.telegram.org](https://my.telegram.org/apps). Defaults to 0 (unset).
   * @param apiHash App's API hash from [my.telegram.org/apps](https://my.telegram.org/apps). Defaults to empty string (unset).
   */
  constructor(
    storage: Storage | null,
    public readonly apiId: number | null = 0,
    public readonly apiHash: string | null = "",
    params?: ClientParams,
  ) {
    super(params);

    this.storage = storage ?? new StorageMemory();
    this.parseMode = params?.parseMode ?? null;

    this.appVersion = params?.appVersion ?? APP_VERSION;
    this.deviceModel = params?.deviceModel ?? DEVICE_MODEL;
    this.langCode = params?.langCode ?? LANG_CODE;
    this.langPack = params?.langPack ?? LANG_PACK;
    this.systemLangCode = params?.systemLangCode ?? SYSTEM_LANG_CODE;
    this.systemVersion = params?.systemVersion ?? SYSTEM_VERSION;
    this.#publicKeys = params?.publicKeys;
    this.#autoStart = params?.autoStart ?? true;
    this.#ignoreOutgoing = params?.ignoreOutgoing ?? null;

    if (params?.defaultHandlers ?? true) {
      this.on("connectionState", ({ connectionState }, next) => {
        drop((async (): Promise<void> => {
          if (connectionState == "notConnected") {
            let delay = 5;
            while (!this.connected) {
              d("reconnecting");
              try {
                await this.connect();
                d("reconnected");
                break;
              } catch (err) {
                d("failed to reconnect, retrying in %d: %o", delay, err);
              }
              await new Promise((r) => setTimeout(r, delay * 1_000));
              if (delay < 15) {
                delay += 5;
              }
            }
          }
        })());
        return next();
      });

      this.invoke.use(async ({ error }, next) => {
        if (error instanceof FloodWait && error.seconds <= 10) {
          d("sleeping for %d because of: %o", error.seconds, error);
          await new Promise((r) => setTimeout(r, 1000 * error.seconds));
          return true;
        } else {
          return next();
        }
      });
    }
  }

  #constructContext = (update: Update) => {
    const msg = update.message ?? update.editedMessage ?? update.callbackQuery?.message;
    const mustGetMsg = () => {
      if (msg !== undefined) {
        return msg;
      } else {
        UNREACHABLE();
      }
    };
    const chat = msg?.chat;
    const from = update.callbackQuery?.from ?? update.inlineQuery?.from ?? update.message?.from ?? update.editedMessage?.from;
    const senderChat = msg?.senderChat;
    const getReplyToMessageId = (quote: boolean | undefined, effectiveMessage: Message) => {
      const shouldQuote = quote === undefined ? effectiveMessage.chat.type != "private" : quote;
      const replyToMessageId = shouldQuote ? effectiveMessage.id : undefined;
      return replyToMessageId;
    };
    return {
      ...update,
      client: this as unknown as Client,
      msg,
      chat,
      from,
      senderChat,
      reply: (text, params) => {
        const effectiveMessage = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, effectiveMessage);
        return this.sendMessage(effectiveMessage.chat.id, text, { ...params, replyToMessageId });
      },
      replyPoll: (question, options, params) => {
        const effectiveMessage = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, effectiveMessage);
        return this.sendPoll(effectiveMessage.chat.id, question, options, { ...params, replyToMessageId });
      },
      replyPhoto: (photo, params) => {
        const effectiveMessage = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, effectiveMessage);
        return this.sendPhoto(effectiveMessage.chat.id, photo, { ...params, replyToMessageId });
      },
      delete: () => {
        const effectiveMessage = mustGetMsg();
        return this.deleteMessage(effectiveMessage.chat.id, effectiveMessage.id);
      },
      forward: (to, params) => {
        const effectiveMessage = mustGetMsg();
        return this.forwardMessage(effectiveMessage.chat.id, to, effectiveMessage.id, params);
      },
      answerCallbackQuery: (params) => {
        const { callbackQuery } = update;
        if (callbackQuery === undefined) {
          UNREACHABLE();
        }
        return this.answerCallbackQuery(callbackQuery.id, params);
      },
      answerInlineQuery: (results, params) => {
        const { inlineQuery } = update;
        if (inlineQuery == undefined) {
          UNREACHABLE();
        }
        return this.answerInlineQuery(inlineQuery.id, results, params);
      },
      sendChatAction: (chatAction, params) => {
        const effectiveMessage = mustGetMsg();
        return this.sendChatAction(effectiveMessage.chat.id, chatAction, params);
      },
      editMessageText: (messageId, text, params) => {
        const effectiveMessage = mustGetMsg();
        return this.editMessageText(effectiveMessage.chat.id, messageId, text, params);
      },
      getMessage: (messageId) => {
        const effectiveMessage = mustGetMsg();
        return this.getMessage(effectiveMessage.chat.id, messageId);
      },
      getMessages: (messageIds) => {
        const effectiveMessage = mustGetMsg();
        return this.getMessages(effectiveMessage.chat.id, messageIds);
      },
      forwardMessage: (to, messageId, params) => {
        const effectiveMessage = mustGetMsg();
        return this.forwardMessage(effectiveMessage.chat.id, to, messageId, params);
      },
      forwardMessages: (to, messageIds, params) => {
        const effectiveMessage = mustGetMsg();
        return this.forwardMessages(effectiveMessage.chat.id, to, messageIds, params);
      },
      deleteMessage: (messageId, params) => {
        const effectiveMessage = mustGetMsg();
        return this.deleteMessage(effectiveMessage.chat.id, messageId, params);
      },
      deleteMessages: (messageIds, params) => {
        const effectiveMessage = mustGetMsg();
        return this.deleteMessages(effectiveMessage.chat.id, messageIds, params);
      },
      get toJSON() {
        return () => update;
      },
    } as C;
  };

  #propagateConnectionState(connectionState: ConnectionState) {
    this.#handleUpdateQueue.add(async () => {
      await this.#handle(this.#constructContext({ connectionState }), resolve);
    });
  }

  #lastPropagatedConnectionState: ConnectionState | null = null;
  protected stateChangeHandler = ((connected: boolean) => {
    this.#connectMutex.acquire().then((release) => {
      try {
        const connectionState = connected ? "ready" : "notConnected";
        if (this.connected == connected && this.#lastPropagatedConnectionState != connectionState) {
          this.#propagateConnectionState(connectionState);
          this.#lastPropagatedConnectionState = connectionState;
        }
      } finally {
        release();
      }
    });
  }).bind(this);

  #storageInited = false;

  /**
   * Sets the DC and resets the auth key stored in the session provider
   * if the stored DC was not the same as the `dc` parameter.
   *
   * @param dc The DC to change to.
   */
  async setDc(dc: DC) {
    if (!this.#storageInited) {
      await this.storage.init();
      this.#storageInited = true;
    }
    if (await this.storage.getDc() != dc) {
      await this.storage.setDc(dc);
      await this.storage.setAuthKey(null);
      await this.storage.getAuthKey();
    }
    super.setDc(dc);
  }

  async #setAuth(key: Uint8Array) {
    const hash = await sha1(key);
    const id = bigIntFromBuffer(hash.slice(-8), true, false);
    this.#auth = { key, id };
  }

  #authKeyWasCreated = true;
  #connectMutex = new Mutex();
  /**
   * Loads the session if `setDc` was not called, initializes and connnects
   * a `ClientPlain` to generate auth key if there was none, and connects the client.
   * Before establishing the connection, the session is saved.
   */
  async connect() {
    if (this.connected) {
      return;
    }
    const release = await this.#connectMutex.acquire();
    try {
      if (!this.#storageInited) {
        await this.storage.init();
        this.#storageInited = true;
      }
      const authKey = await this.storage.getAuthKey();
      if (authKey == null) {
        const plain = new ClientPlain({ initialDc: this.initialDc, transportProvider: this.transportProvider, cdn: this.cdn, publicKeys: this.#publicKeys });
        const dc = await this.storage.getDc();
        if (dc != null) {
          plain.setDc(dc);
        }
        await plain.connect();
        const { authKey, salt } = await plain.createAuthKey();
        await plain.disconnect();
        await this.storage.setAuthKey(authKey);
        await this.#setAuth(authKey);
        this.#state.salt = salt;
        await this.storage.setServerSalt(salt);
      } else {
        if (this.#state.salt == 0n) {
          this.#state.salt = await this.storage.getServerSalt() ?? 0n;
        }
        await this.#setAuth(authKey);
        this.#authKeyWasCreated = false;
      }
      const dc = await this.storage.getDc();
      if (dc != null) {
        await this.setDc(dc);
      }
      await super.connect();
      if (dc == null) {
        await this.storage.setDc(this.initialDc);
      }
      d("encrypted client connected");
      drop(this.#receiveLoop());
      if (this.#pingLoopStarted) {
        drop(this.#pingLoop());
      }
    } finally {
      release();
    }
  }

  async #assertUser(source: string) {
    if (await this.storage.getAccountType() != "user") {
      throw new Error(`${source}: not user a client`);
    }
  }

  async #assertBot(source: string) {
    if (await this.storage.getAccountType() != "bot") {
      throw new Error(`${source}: not a bot client`);
    }
  }

  async #fetchState(source: string) {
    const state = await this.invoke(new functions.UpdatesGetState());
    this.#updateState = state;
    d("state fetched [%s]", source);
  }

  async [handleMigrationError](err: Migrate) {
    let newDc = String(err.dc);
    if (Math.abs(this.dcId) >= 10_000) {
      newDc += "-test";
    }
    await this.reconnect(newDc as DC);
    d("migrated to DC%s", newDc);
  }

  #connectionInited = false;
  disconnect() {
    this.#connectionInited = false;
    return super.disconnect();
  }
  async #initConnection() {
    if (!this.#connectionInited) {
      await this.invoke(
        new functions.InitConnection({
          apiId: this.apiId!,
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
      this.#connectionInited = true;
      d("connection inited");
    }
  }

  #lastPropagatedAuthorizationState: boolean | null = null;
  async #propagateAuthorizationState(authorized: boolean) {
    if (this.#lastPropagatedAuthorizationState != authorized) {
      await this.#handle(this.#constructContext({ authorizationState: { authorized } }), resolve);
      this.#lastPropagatedAuthorizationState = authorized;
    }
  }

  #selfId: number | null = null;
  async #getSelfId() {
    if (this.#selfId == null) {
      this.#selfId = await this.getMe().then((v) => v.id);
    }
    return this.#selfId!;
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
  async authorize(params?: string | types.AuthExportedAuthorization | AuthorizeUserParams) {
    if (!this.apiId) {
      throw new Error("apiId not set");
    }
    if (!this.apiHash) {
      throw new Error("apiHash not set");
    }

    if (typeof params === "undefined") {
      const loginType = mustPromptOneOf("Do you want to login as bot [b] or user [u]?", ["b", "u"] as const);
      if (loginType == "b") {
        params = mustPrompt("Bot token:");
      } else {
        params = { phone: () => mustPrompt("Phone number:"), code: () => mustPrompt("Verification code:"), password: () => mustPrompt("Password:") };
      }
    }

    dAuth("authorizing with %s", typeof params === "string" ? "bot token" : params instanceof types.AuthExportedAuthorization ? "exported authorization" : "AuthorizeUserParams");

    await this.#initConnection();

    try {
      await this.#fetchState("authorize");
      await this.#propagateAuthorizationState(true);
      d("already authorized");
      return;
    } catch (err) {
      if (!(err instanceof AuthKeyUnregistered)) {
        throw err;
      }
    }

    if (typeof params === "string") {
      while (true) {
        try {
          const auth = await this.invoke(new functions.AuthImportBotAuthorization({ apiId: this.apiId, apiHash: this.apiHash, botAuthToken: params, flags: 0 }));
          this.#selfId = Number(auth[as](types.AuthAuthorization).user.id);
          await this.storage.setAccountType("bot");
          break;
        } catch (err) {
          if (err instanceof Migrate) {
            await this[handleMigrationError](err);
            await this.#initConnection();
            continue;
          } else {
            throw err;
          }
        }
      }
      dAuth("authorized as bot");
      await this.#propagateAuthorizationState(true);
      await this.#fetchState("authorize");
      return;
    }

    if (params instanceof types.AuthExportedAuthorization) {
      await this.invoke(new functions.AuthImportAuthorization({ id: params.id, bytes: params.bytes }));
      dAuth("authorization imported");
      return;
    }

    auth: while (true) {
      try {
        let phone: string;
        let sentCode: types.AuthSentCode;
        while (true) {
          try {
            phone = typeof params.phone === "string" ? params.phone : await params.phone();
            const sendCode = () =>
              this.invoke(
                new functions.AuthSendCode({
                  phoneNumber: phone,
                  apiId: this.apiId!,
                  apiHash: this.apiHash!,
                  settings: new types.CodeSettings(),
                }),
              ).then((v) => v[as](types.AuthSentCode));
            try {
              sentCode = await sendCode();
            } catch (err) {
              if (err instanceof Migrate) {
                await this[handleMigrationError](err);
                await this.#initConnection();
                sentCode = await sendCode();
              } else {
                throw err;
              }
            }
            break;
          } catch (err) {
            if (err instanceof PhoneNumberInvalid) {
              continue;
            } else {
              throw err;
            }
          }
        }
        dAuth("verification code sent");

        let err: unknown;
        code: while (true) {
          const code = typeof params.code === "string" ? params.code : await params.code();
          try {
            const auth = await this.invoke(
              new functions.AuthSignIn({
                phoneNumber: phone,
                phoneCode: code,
                phoneCodeHash: sentCode.phoneCodeHash,
              }),
            );
            this.#selfId = Number(auth[as](types.AuthAuthorization).user.id);
            await this.storage.setAccountType("user");
            dAuth("authorized as user");
            await this.#propagateAuthorizationState(true);
            await this.#fetchState("authorize");
            return;
          } catch (err_) {
            if (err_ instanceof types.RPCError && err_.errorMessage == "PHONE_CODE_INVALID") {
              continue code;
            } else {
              err = err_;
              break code;
            }
          }
        }

        if (!(err instanceof SessionPasswordNeeded)) {
          throw err;
        }

        password: while (true) {
          const ap = await this.invoke(new functions.AccountGetPassword());
          if (!(ap.currentAlgo instanceof types.PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow)) {
            throw new Error(`Handling ${ap.currentAlgo?.constructor.name} not implemented`);
          }
          try {
            const password = typeof params.password === "string" ? params.password : await params.password(ap.hint ?? null);
            const input = await checkPassword(password, ap);

            const auth = await this.invoke(new functions.AuthCheckPassword({ password: input }));
            this.#selfId = Number(auth[as](types.AuthAuthorization).user.id);
            await this.storage.setAccountType("user");
            dAuth("authorized as user");
            await this.#propagateAuthorizationState(true);
            await this.#fetchState("authorize");
            break password;
          } catch (err) {
            if (err instanceof PasswordHashInvalid) {
              continue password;
            } else {
              throw err;
            }
          }
        }
      } catch (err) {
        if (err == restartAuth) {
          continue auth;
        } else {
          throw err;
        }
      }
    }
  }

  /**
   * Same as calling `.connect()` followed by `.authorize(params)` if the session didn't have an auth key.
   */
  async start(params?: string | types.AuthExportedAuthorization | AuthorizeUserParams) {
    await this.connect();
    await this.#initConnection();

    if (!this.#authKeyWasCreated) {
      return;
    }

    try {
      await this.#fetchState("authorize");
      d("already authorized");
      await this.#propagateAuthorizationState(true);
      return;
    } catch (err) {
      if (!(err instanceof AuthKeyUnregistered)) {
        throw err;
      }
    }

    await this.authorize(params);
  }

  async #receiveLoop() {
    if (!this.#auth || !this.transport) {
      throw new ConnectionError("Not connected");
    }

    while (this.connected) {
      try {
        if (this.#toAcknowledge.size >= ACK_THRESHOLD) {
          await this.send(new types.MsgsAck({ msgIds: [...this.#toAcknowledge] }));
          this.#toAcknowledge.clear();
        }

        const buffer = await this.transport.transport.receive();

        let decrypted;
        try {
          decrypted = await (decryptMessage(
            buffer,
            this.#auth.key,
            this.#auth.id,
            this.#sessionId,
          ));
        } catch (err) {
          dRecv("failed to decrypt message: %o", err);
          drop(this.#recoverUpdateGap("decryption"));
          continue;
        }
        const messages = decrypted instanceof MessageContainer ? decrypted.messages : [decrypted];

        for (const message of messages) {
          let body = message.body;
          if (body instanceof types.GZIPPacked) {
            body = new TLReader(gunzip(body.packedData)).readObject();
          }
          dRecv("received %s", body.constructor.name);
          if (body instanceof types._TypeUpdates || body instanceof types._TypeUpdate) {
            this.#processUpdatesQueue.add(() => this.#processUpdates(body as types.Updates | types.TypeUpdate, true));
          } else if (body instanceof types.NewSessionCreated) {
            this.#state.salt = body.serverSalt;
            await this.storage.setServerSalt(this.#state.salt);
          } else if (message.body instanceof RPCResult) {
            let result = message.body.result;
            if (result instanceof types.GZIPPacked) {
              result = new TLReader(gunzip(result.packedData)).readObject();
            }
            if (result instanceof types.RPCError) {
              dRecv("RPCResult: %d %s", result.errorCode, result.errorMessage);
            } else {
              dRecv("RPCResult: %s", result.constructor.name);
            }
            const messageId = message.body.messageId;
            const resolvePromise = () => {
              const promise = this.#promises.get(messageId);
              if (promise) {
                if (result instanceof types.RPCError) {
                  promise.reject(upgradeInstance(result));
                } else {
                  promise.resolve(result);
                }
                this.#promises.delete(messageId);
              }
            };
            if (result instanceof types._TypeUpdates || result instanceof types._TypeUpdate) {
              this.#processUpdatesQueue.add(async () => {
                await this.#processUpdates(result as types.TypeUpdates | types.TypeUpdate, true);
                resolvePromise();
              });
            } else {
              await this.processResult(result);
              resolvePromise();
            }
          } else if (message.body instanceof types.Pong) {
            const promise = this.#promises.get(message.body.msgId);
            if (promise) {
              promise.resolve(message.body);
              this.#promises.delete(message.body.msgId);
            }
          } else if (message.body instanceof types.BadServerSalt) {
            d("server salt reassigned");
            this.#state.salt = message.body.newServerSalt;
            await this.storage.setServerSalt(this.#state.salt);
            const promise = this.#promises.get(message.body.badMsgId);
            if (promise) {
              promise.resolve(message.body);
              this.#promises.delete(message.body.badMsgId);
            }
          }

          this.#toAcknowledge.add(message.id);
        }
      } catch (err) {
        if (!this.connected) {
          break;
        } else if (err instanceof TLError) {
          dRecv("failed to deserialize: %o", err);
          drop(this.#recoverUpdateGap("deserialize"));
        } else {
          dRecv("uncaught error: %o", err);
        }
      }
    }

    if (!this.connected) {
      for (const { reject } of this.#promises.values()) {
        reject(new ConnectionError("Connection was closed"));
      }
    } else {
      UNREACHABLE();
    }
  }

  #pingInterval = 60 * 1_000; // 60 seconds
  async #pingLoop() {
    while (this.connected) {
      await new Promise((r) => setTimeout(r, this.#pingInterval));
      try {
        await this.invoke(new functions.PingDelayDisconnect({ pingId: getRandomBigInt(8, true, false), disconnectDelay: this.#pingInterval + 15 }));
      } catch (err) {
        d("ping loop error: %o", err);
      }
    }
  }

  #pingLoopStarted = false;
  #autoStarted = false;
  #lastMsgId = 0n;
  async #invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T): Promise<T extends functions.Function<unknown> ? T["__R"] : void>;
  async #invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait: true): Promise<void>;
  async #invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait?: boolean): Promise<T | void> {
    if (!this.#auth || !this.transport) {
      if (this.#autoStart && !this.#autoStarted) {
        await this.start();
      } else {
        throw new ConnectionError("Not connected");
      }
    }
    if (!this.#auth || !this.transport) {
      UNREACHABLE();
    }

    let n = 1;
    while (true) {
      try {
        let seqNo = this.#state.seqNo * 2;
        if (!(function_ instanceof functions.Ping) && !(function_ instanceof types.MsgsAck)) {
          seqNo++;
          this.#state.seqNo++;
        }

        const messageId = this.#lastMsgId = getMessageId(this.#lastMsgId);
        const message = new Message_(messageId, seqNo, function_);
        await this.transport.transport.send(
          await encryptMessage(
            message,
            this.#auth.key,
            this.#auth.id,
            this.#state.salt,
            this.#sessionId,
          ),
        );
        d("invoked %s", function_.constructor.name);

        if (noWait) {
          this.#promises.set(message.id, {
            resolve: (result) => {
              if (result instanceof types.BadServerSalt) {
                drop(this.invoke(function_, true));
              }
            },
            reject: () => {},
          });
          return;
        }

        let result;

        try {
          result = await new Promise<ReadObject>((resolve, reject) => {
            this.#promises.set(message.id, { resolve, reject });
          });
        } catch (err) {
          if (err instanceof AuthKeyUnregistered) {
            await this.#propagateAuthorizationState(false);
          }
          throw err;
        }

        if (result instanceof types.BadServerSalt) {
          return await this.invoke(function_) as T;
        } else {
          if (!this.#pingLoopStarted) {
            drop(this.#pingLoop());
            this.#pingLoopStarted = true;
          }
          return result as T;
        }
      } catch (err) {
        if (await this.#handleInvokeError(Object.freeze({ client: this, error: err, function: function_, n: n++ }), () => Promise.resolve(false))) {
          continue;
        } else {
          throw err;
        }
      }
    }
  }

  #handleInvokeError = skipInvoke<C>();

  /**
   * Invokes a function waiting and returning its reply if the second parameter is not `true`. Requires the client
   * to be connected.
   *
   * @param function_ The function to invoke.
   */
  invoke = Object.assign(
    this.#invoke,
    {
      use: (handler: InvokeErrorHandler<Client<C>>) => {
        const handle = this.#handleInvokeError;
        this.#handleInvokeError = async (ctx, next) => {
          let result: boolean | null = null;
          return await handle(ctx, async () => {
            if (result != null) return result;
            result = await handler(ctx, next);
            return result;
          });
        };
      },
    },
  );

  /**
   * Alias for `invoke` with its second parameter being `true`.
   */
  send<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T) {
    return this.invoke(function_, true);
  }

  async #processChats(chats: types.TypeChat[]) {
    for (const chat of chats) {
      if (chat instanceof types.Channel && chat.accessHash) {
        await this.storage.setEntity(chat);
        await this.storage.setChannelAccessHash(chat.id, chat.accessHash);
        if (chat.username) {
          await this.storage.updateUsernames("channel", chat.id, [chat.username]);
        }
        if (chat.usernames) {
          await this.storage.updateUsernames("channel", chat.id, chat.usernames.map((v) => v.username));
        }
      } else if (chat instanceof types.Chat) {
        await this.storage.setEntity(chat);
      }
    }
  }

  async #processUsers(users: types.TypeUser[]) {
    for (const user of users) {
      if (user instanceof types.User && user.accessHash) {
        await this.storage.setEntity(user);
        await this.storage.setUserAccessHash(user.id, user.accessHash);
        if (user.username) {
          await this.storage.updateUsernames("user", user.id, [user.username]);
        }
        if (user.usernames) {
          await this.storage.updateUsernames("user", user.id, user.usernames.map((v) => v.username));
        }
      }
    }
  }

  #handleUpdateQueue = new Queue("handleUpdate");
  #processUpdatesQueue = new Queue("processUpdates");

  async checkGap(pts: number, ptsCount: number) {
    const localState = await this.#getLocalState();
    if (localState.pts + ptsCount < pts) {
      await this.#recoverUpdateGap("processUpdates");
    }
  }
  async #checkChannelGap(channelId: bigint, pts: number, ptsCount: number) {
    let localPts = await this.storage.getChannelPts(channelId);
    if (!localPts) {
      localPts = pts - ptsCount;
    }
    if (localPts + ptsCount < pts) {
      await this.#recoverChannelUpdateGap(channelId, "processUpdates");
    }
  }

  async #processUpdates(updates_: types.TypeUpdate | types.TypeUpdates, checkGap: boolean) {
    /// First, individual updates (Update[1]) and updateShort* are extracted from Updates.[2]
    ///
    /// If an updatesTooLong[3] was received, an update gap recovery is initiated and no further action will be taken.
    ///
    /// [1]: https://core.telegram.org/type/Update
    /// [2]: https://core.telegram.org/type/Updates
    /// [3]: https://core.telegram.org/constructor/updatesTooLong
    let updates: (types.TypeUpdate | types.UpdateShortMessage | types.UpdateShortChatMessage | types.UpdateShortSentMessage)[];
    if (updates_ instanceof types.UpdatesCombined || updates_ instanceof types.Updates) {
      updates = updates_.updates;
    } else if (updates_ instanceof types.UpdateShort) {
      updates = [updates_.update];
    } else if (
      updates_ instanceof types.UpdateShortMessage ||
      updates_ instanceof types.UpdateShortChatMessage ||
      updates_ instanceof types.UpdateShortSentMessage
    ) {
      updates = [updates_];
    } else if (updates_ instanceof types.UpdatesTooLong) {
      await this.#recoverUpdateGap("updatesTooLong");
      return;
    } else if (updates_ instanceof types._TypeUpdate) {
      updates = [updates_];
    } else {
      UNREACHABLE();
    }

    /// Then, we go through each Update and updateShort*, and see if they are order-sensitive.
    /// If they were, we check the local state to see if it is OK to process them right away.
    ///
    /// If we there was a gap, a recovery process will be initiated and the processing will be postponed.
    let localState: types.UpdatesState | null = null;
    let originalPts: number | null = null;
    const channelPtsMap = new Map<bigint, number>();
    for (const update of updates) {
      if (isPtsUpdate(update)) {
        if (update.pts == 0) {
          continue;
        }
        if (checkGap) {
          await this.checkGap(update.pts, update.ptsCount);
        }
        localState ??= await this.#getLocalState();
        originalPts ??= localState.pts;
        if (localState.pts + update.ptsCount > update.pts) {
          updates = updates.filter((v) => v != update);
        } else {
          localState.pts = update.pts;
        }
      } else if (isChannelPtsUpdate(update)) {
        if (update.pts == 0) {
          continue;
        }
        const ptsCount = update.ptsCount;
        const channelId = update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditChannelMessage ? (update.message as types.Message | types.MessageService).peerId[as](types.PeerChannel).channelId : update.channelId;
        if (checkGap) {
          await this.#checkChannelGap(channelId, update.pts, ptsCount);
        }
        let currentPts: number | null | undefined = channelPtsMap.get(channelId);
        if (currentPts === undefined) {
          currentPts = await this.storage.getChannelPts(channelId);
        }
        currentPts ??= update.pts - ptsCount;
        if (currentPts + ptsCount > update.pts) {
          updates = updates.filter((v) => v != update);
        } else {
          channelPtsMap.set(channelId, update.pts);
        }
      }
    }

    /// We process the updates when we are sure there is no gap.
    if (updates_ instanceof types.Updates || updates_ instanceof types.UpdatesCombined) {
      await this.#processChats(updates_.chats);
      await this.#processUsers(updates_.users);
      await this.#setUpdateStateDate(updates_.date);
    } else if (updates_ instanceof types.UpdateShort) {
      await this.#setUpdateStateDate(updates_.date);
    }

    const updatesToHandle = new Array<types.TypeUpdate>();
    for (const update of updates) {
      if (
        update instanceof types.UpdateShortMessage ||
        update instanceof types.UpdateShortChatMessage ||
        update instanceof types.UpdateShortSentMessage
      ) {
        await this.#setUpdateStateDate(update.date);
      } else if (update instanceof types.UpdateChannelTooLong) {
        if (update.pts != undefined) {
          await this.storage.setChannelPts(update.channelId, update.pts);
        }
        await this.#recoverChannelUpdateGap(update.channelId, "updateChannelTooLong");
      } else if (update instanceof types.UpdateUserName) {
        await this.storage.updateUsernames("user", update.userId, update.usernames.map((v) => v.username));
      } else if (update instanceof types.UpdatePtsChanged) {
        await this.#fetchState("updatePtsChanged");
        if (this.#updateState) {
          await this.storage.setState(this.#updateState);
        } else {
          UNREACHABLE();
        }
      }
      /// If there were any Update, they will be passed to the update handling queue.
      if (update instanceof types._TypeUpdate) {
        updatesToHandle.push(update);
      }
    }

    this.#handleUpdateQueue.add(async () => {
      for (const update of updatesToHandle) {
        await this.#handleUpdate(update);
      }
    });
  }

  async #setUpdateStateDate(date: number) {
    const localState = await this.#getLocalState();
    localState.date = date;
    await this.storage.setState(localState);
  }

  async #getLocalState() {
    let localState = await this.storage.getState();
    if (!localState) {
      if (this.#updateState) {
        localState = this.#updateState;
        await this.storage.setState(localState);
      } else {
        await this.#fetchState("getLocalState");
        if (this.#updateState) {
          localState = this.#updateState;
          await this.storage.setState(localState);
        } else {
          UNREACHABLE();
        }
      }
    }
    return localState;
  }
  async #recoverUpdateGap(source: string) {
    dGap("recovering from update gap [%s]", source);

    this.#propagateConnectionState("updating");

    try {
      let state = await this.#getLocalState();
      while (true) {
        const difference = await this.invoke(new functions.UpdatesGetDifference({ pts: state.pts, date: state.date, qts: state.qts ?? 0 }));
        if (difference instanceof types.UpdatesDifference || difference instanceof types.UpdatesDifferenceSlice) {
          await this.#processChats(difference.chats);
          await this.#processUsers(difference.users);
          for (const message of difference.newMessages) {
            await this.#processUpdates(new types.UpdateNewMessage({ message, pts: 0, ptsCount: 0 }), false);
          }
          for (const update of difference.otherUpdates) {
            await this.#processUpdates(update, false);
          }
          if (difference instanceof types.UpdatesDifference) {
            await this.storage.setState(difference.state);
            dGap("recovered from update gap");
            break;
          } else if (difference instanceof types.UpdatesDifferenceSlice) {
            state = difference.intermediateState;
          } else {
            UNREACHABLE();
          }
        } else if (difference instanceof types.UpdatesDifferenceTooLong) {
          await this.storage.deleteMessages();
          state.pts = difference.pts;
          dGap("received differenceTooLong");
        } else if (difference instanceof types.UpdatesDifferenceEmpty) {
          await this.#setUpdateStateDate(difference.date);
          dGap("there was no update gap");
          break;
        } else {
          UNREACHABLE();
        }
      }
    } finally {
      this.stateChangeHandler(this.connected);
    }
  }

  async #recoverChannelUpdateGap(channelId: bigint, source: string) {
    dGapC("recovering channel update gap [%o, %s]", channelId, source);
    const pts_ = await this.storage.getChannelPts(channelId);
    let pts = pts_ == null ? 1 : pts_;
    while (true) {
      const { accessHash } = await this.getInputPeer(ZERO_CHANNEL_ID + -Number(channelId)).then((v) => v[as](types.InputPeerChannel));
      const difference = await this.invoke(
        new functions.UpdatesGetChannelDifference({
          pts,
          channel: new types.InputChannel({ channelId, accessHash: accessHash }),
          filter: new types.ChannelMessagesFilterEmpty(),
          limit: await this.storage.getAccountType() == "user" ? CHANNEL_DIFFERENCE_LIMIT_USER : CHANNEL_DIFFERENCE_LIMIT_BOT,
        }),
      );
      if (difference instanceof types.UpdatesChannelDifference) {
        await this.#processChats(difference.chats);
        await this.#processUsers(difference.users);
        for (const message of difference.newMessages) {
          await this.#processUpdates(new types.UpdateNewChannelMessage({ message, pts: 0, ptsCount: 0 }), false);
        }
        for (const update of difference.otherUpdates) {
          await this.#processUpdates(update, false);
        }
        await this.storage.setChannelPts(channelId, difference.pts);
        dGapC("recovered from update gap [%o, %s]", channelId, source);
        break;
      } else if (difference instanceof types.UpdatesChannelDifferenceTooLong) {
        // invalidate messages
        dGapC("received channelDifferenceTooLong");
        await this.#processChats(difference.chats);
        await this.#processUsers(difference.users);
        for (const message of difference.messages) {
          await this.#processUpdates(new types.UpdateNewChannelMessage({ message, pts: 0, ptsCount: 0 }), false);
        }
        const pts_ = difference.dialog[as](types.Dialog).pts;
        if (pts_ != undefined) {
          pts = pts_;
        } else {
          UNREACHABLE();
        }
        dGapC("processed channelDifferenceTooLong");
      } else if (difference instanceof types.UpdatesChannelDifferenceEmpty) {
        dGapC("there was no update gap");
        break;
      }
    }
  }

  async getUserAccessHash(userId: bigint) {
    const users = await this.invoke(new functions.UsersGetUsers({ id: [new types.InputUser({ userId, accessHash: 0n })] }));
    return users[0]?.[as](types.User).accessHash ?? 0n;
  }

  async #getChannelAccessHash(channelId: bigint) {
    const channels = await this.invoke(new functions.ChannelsGetChannels({ id: [new types.InputChannel({ channelId, accessHash: 0n })] }));
    return channels.chats[0][as](types.Channel).accessHash ?? 0n;
  }

  async getInputPeer(id: ChatID) {
    const inputPeer = await this.#getInputPeerInner(id);
    if ((inputPeer instanceof types.InputPeerUser || inputPeer instanceof types.InputPeerChannel && inputPeer.accessHash == 0n) && await this.storage.getAccountType() == "bot") {
      if ("channelId" in inputPeer) {
        inputPeer.accessHash = await this.#getChannelAccessHash(inputPeer.channelId);
      } else {
        inputPeer.accessHash = await this.getUserAccessHash(inputPeer.userId);
        await this.storage.setUserAccessHash(inputPeer.userId, inputPeer.accessHash);
      }
    }
    return inputPeer;
  }

  async #getInputPeerInner(id: ChatID) {
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
          await this.#processChats(resolved.chats);
          await this.#processUsers(resolved.users);
          if (resolved.peer instanceof types.PeerUser) {
            userId = resolved.peer.userId;
          } else if (resolved.peer instanceof types.PeerChannel) {
            channelId = resolved.peer.channelId;
          } else {
            UNREACHABLE();
          }
        }
        if (userId) {
          const accessHash = await this.storage.getUserAccessHash(userId);
          return new types.InputPeerUser({ userId, accessHash: accessHash ?? 0n });
        } else if (channelId) {
          const accessHash = await this.storage.getChannelAccessHash(channelId);
          return new types.InputPeerChannel({ channelId, accessHash: accessHash ?? 0n });
        } else {
          UNREACHABLE();
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

  private [getEntity](peer: types.PeerUser): Promise<types.User | null>;
  private [getEntity](peer: types.PeerChat): Promise<types.Chat | null>;
  private [getEntity](peer: types.PeerChannel): Promise<types.Channel | null>;
  private [getEntity](peer: types.PeerUser | types.PeerChat | types.PeerChannel) {
    const type = peer instanceof types.PeerUser ? "user" : peer instanceof types.PeerChat ? "chat" : peer instanceof types.PeerChannel ? "channel" : UNREACHABLE();
    const id = peer instanceof types.PeerUser ? peer.userId : peer instanceof types.PeerChat ? peer.chatId : peer instanceof types.PeerChannel ? peer.channelId : UNREACHABLE();
    return this.storage.getEntity(type, id);
  }

  async processResult(result: ReadObject) {
    if (
      result instanceof types.MessagesDialogs ||
      result instanceof types.MessagesDialogsSlice ||
      result instanceof types.MessagesMessages ||
      result instanceof types.MessagesMessagesSlice ||
      result instanceof types.MessagesChannelMessages ||
      result instanceof types.MessagesChatFull ||
      result instanceof types.ContactsFound ||
      result instanceof types.AccountPrivacyRules ||
      result instanceof types.ContactsResolvedPeer ||
      result instanceof types.ChannelsChannelParticipants ||
      result instanceof types.ChannelsChannelParticipant ||
      result instanceof types.MessagesPeerDialogs ||
      result instanceof types.ContactsTopPeers ||
      result instanceof types.ChannelsAdminLogResults ||
      result instanceof types.HelpRecentMeURLs ||
      result instanceof types.MessagesInactiveChats ||
      result instanceof types.HelpPromoData ||
      result instanceof types.MessagesMessageViews ||
      result instanceof types.MessagesDiscussionMessage ||
      result instanceof types.PhoneGroupCall ||
      result instanceof types.PhoneGroupParticipants ||
      result instanceof types.PhoneJoinAsPeers ||
      result instanceof types.MessagesSponsoredMessages ||
      result instanceof types.MessagesSearchResultsCalendar ||
      result instanceof types.ChannelsSendAsPeers ||
      result instanceof types.UsersUserFull ||
      result instanceof types.MessagesPeerSettings ||
      result instanceof types.MessagesMessageReactionsList ||
      result instanceof types.MessagesForumTopics ||
      result instanceof types.AccountAutoSaveSettings ||
      result instanceof types.ChatlistsExportedInvites ||
      result instanceof types.ChatlistsChatlistInviteAlready ||
      result instanceof types.ChatlistsChatlistInvite ||
      result instanceof types.ChatlistsChatlistUpdates ||
      result instanceof types.MessagesChats ||
      result instanceof types.MessagesChatsSlice
    ) {
      await this.#processChats(result.chats);
      if ("users" in result) {
        await this.#processUsers(result.users);
      }
    }

    if (result instanceof types.MessagesMessages) {
      for (const message of result.messages) {
        if (message instanceof types.Message || message instanceof types.MessageService) {
          await this.storage.setMessage(peerToChatId(message.peerId), message.id, message);
        }
      }
    }
  }

  async #updatesToMessages(chatId: ChatID, updates: types.TypeUpdates) {
    const messages = new Array<Message>();

    if (updates instanceof types.Updates) {
      for (const update of updates.updates) {
        if ("message" in update && update.message instanceof types.MessageEmpty) {
          continue;
        }
        if (update instanceof types.UpdateNewMessage || update instanceof types.UpdateEditMessage) {
          messages.push(await constructMessage(update.message, this[getEntity].bind(this), this.getMessage.bind(this), this[getStickerSetName].bind(this)));
        } else if (update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditChannelMessage) {
          messages.push(await constructMessage(update.message, this[getEntity].bind(this), this.getMessage.bind(this), this[getStickerSetName].bind(this)));
        }
      }
    } else if (updates instanceof types.UpdateShortSentMessage || updates instanceof types.UpdateShortSentMessage) {
      const message = await this.getMessage(chatId, updates.id);
      if (message != null) {
        messages.push(message);
      }
    }

    return messages;
  }

  async #resolveSendAs(params?: Pick<SendMessageParams, "sendAs">) {
    const sendAs = params?.sendAs;
    if (sendAs !== undefined) {
      await this.#assertUser("sendAs");
      return sendAs ? await this.getInputPeer(sendAs) : undefined;
    }
  }

  /**
   * Send a text message.
   *
   * @method
   * @param chatId The chat to send the message to.
   * @param text The message's text.
   * @returns The sent text message.
   */
  async sendMessage(
    chatId: ChatID,
    text: string,
    params?: SendMessageParams,
  ): Promise<With<Message, "text">> {
    const [message, entities] = this.#parseText(text, params);

    const replyMarkup = await this.#constructReplyMarkup(params);

    const peer = await this.getInputPeer(chatId);
    const randomId = getRandomId();
    const noWebpage = params?.disableWebPagePreview ? true : undefined;
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const replyToMsgId = params?.replyToMessageId;
    const topMsgId = params?.messageThreadId;
    const sendAs = await this.#resolveSendAs(params);

    const result = await this.invoke(
      new functions.MessagesSendMessage({
        peer,
        randomId,
        message,
        noWebpage,
        silent,
        noforwards,
        replyTo: replyToMsgId !== undefined ? new types.InputReplyToMessage({ replyToMsgId, topMsgId }) : undefined,
        sendAs,
        entities,
        replyMarkup,
      }),
    );

    const message_ = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return Client.#assertMsgHas(message_, "text");
  }

  #parseText(text: string, params?: { parseMode?: ParseMode; entities?: MessageEntity[] }) {
    const entities_ = params?.entities ?? [];
    const parseMode = params?.parseMode ?? this.parseMode;
    switch (parseMode) {
      case null:
        break;
      case "HTML": {
        const [newText, entitiesToPush] = parseHtml(text);
        text = newText;
        for (const entity of entitiesToPush) {
          entities_.push(entity);
        }
        break;
      }
      default:
        UNREACHABLE();
    }
    const entities = entities_?.length > 0 ? entities_.map((v) => messageEntityToTlObject(v)) : undefined;
    return [text, entities] as const;
  }

  /**
   * Edit a message's text.
   *
   * @method
   * @param chatId The chat where the message is.
   * @param messageId The ID of the message.
   * @param text The new text of the message.
   * @returns The edited text message.
   */
  async editMessageText(
    chatId: ChatID,
    messageId: number,
    text: string,
    params?: EditMessageParams,
  ): Promise<With<Message, "text">> {
    const [message, entities] = this.#parseText(text, params);

    const result = await this.invoke(
      new functions.MessagesEditMessage({
        id: messageId,
        peer: await this.getInputPeer(chatId),
        entities,
        message,
        noWebpage: params?.disableWebPagePreview ? true : undefined,
        replyMarkup: await this.#constructReplyMarkup(params),
      }),
    );

    const message_ = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return Client.#assertMsgHas(message_, "text");
  }

  async #getMessagesInner(chatId_: ChatID, messageIds: number[]) {
    const peer = await this.getInputPeer(chatId_);
    let messages_ = new Array<types.TypeMessage>();
    const chatId = peerToChatId(peer);
    let shouldFetch = false;
    for (const messageId of messageIds) {
      const message = await this.storage.getMessage(chatId, messageId);
      if (message == null) {
        messages_ = [];
        shouldFetch = true;
        break;
      } else {
        messages_.push(message);
      }
    }
    if (shouldFetch) {
      if (peer instanceof types.InputPeerChannel) {
        messages_ = await this.invoke(
          new functions.ChannelsGetMessages({
            channel: new types.InputChannel({ channelId: peer.channelId, accessHash: peer.accessHash }),
            id: messageIds.map((v) => new types.InputMessageID({ id: v })),
          }),
        ).then((v) => v[as](types.MessagesChannelMessages).messages);
      } else {
        messages_ = await this.invoke(
          new functions.MessagesGetMessages({
            id: messageIds.map((v) => new types.InputMessageID({ id: v })),
          }),
        ).then((v) => v[as](types.MessagesMessages).messages);
      }
    }
    const messages = new Array<{ message: Omit<Message, "replyToMessage">; isReplyToMessage: boolean }>();
    for (const message_ of messages_) {
      if (message_ instanceof types.MessageEmpty) {
        continue;
      }
      const message = await constructMessage(message_, this[getEntity].bind(this), null, this[getStickerSetName].bind(this));
      const isReplyToMessage = message_ instanceof types.Message && message_.replyTo instanceof types.MessageReplyHeader;
      messages.push({ message, isReplyToMessage });
    }
    return messages;
  }

  /**
   * Retrieve multiple messages.
   *
   * @method
   * @param chatId The identifier of the chat to retrieve the messages from.
   * @param messageIds The identifiers of the messages to retrieve.
   * @example ```ts
   * const message = await client.getMessages("@MTKruto", [210, 212]);
   * ```
   * @returns The retrieved messages.
   */
  async getMessages(chatId: ChatID, messageIds: number[]): Promise<Omit<Message, "replyToMessage">[]> {
    return await this.#getMessagesInner(chatId, messageIds).then((v) => v.map((v) => v.message));
  }

  private async [getMessageWithReply](chatId: ChatID, messageId: number): Promise<Message | null> {
    const messages = await this.#getMessagesInner(chatId, [messageId]);
    return messages[0]?.message ?? null;
  }

  /**
   * Retrieve a single message.
   *
   * @method
   * @param chatId The identifier of the chat to retrieve the message from.
   * @param messageId The identifier of the message to retrieve.
   * @example ```ts
   * const message = await client.getMessage("@MTKruto", 212);
   * ```
   * @returns The retrieved message.
   */
  async getMessage(chatId: ChatID, messageId: number): Promise<Omit<Message, "replyToMessage"> | null> {
    const messages = await this.getMessages(chatId, [messageId]);
    return messages[0] ?? null;
  }

  async *#downloadInner(location: types.TypeInputFileLocation, dcId: number, params?: { chunkSize?: number }) {
    const chunkSize = params?.chunkSize ?? 1024 * 1024;
    if (mod(chunkSize, 1024) != 0) {
      throw new Error("chunkSize must be divisible by 1024");
    }

    const exportedAuth = await this.invoke(new functions.AuthExportAuthorization({ dcId }));
    const client = new Client(new StorageMemory(), this.apiId, this.apiHash, {
      transportProvider: this.transportProvider,
      appVersion: this.appVersion,
      deviceModel: this.deviceModel,
      langCode: this.langCode,
      langPack: this.langPack,
      systemLangCode: this.systemLangCode,
      systemVersion: this.systemVersion,
      cdn: true,
    });
    let dc = String(dcId);
    if (this.dcId < 0) {
      dc += "-test";
    }
    await client.setDc(dc as DC);
    await client.connect();
    await client.authorize(exportedAuth);

    const limit = chunkSize;
    let offset = 0n;

    while (true) {
      const file = await (client ?? this).invoke(new functions.UploadGetFile({ location, offset, limit }));

      if (file instanceof types.UploadFile) {
        yield file.bytes;
        if (file.bytes.length < limit) {
          break;
        } else {
          offset += BigInt(file.bytes.length);
        }
      } else {
        UNREACHABLE();
      }
    }
  }

  /**
   * Download a file.
   *
   * @method
   * @param fileId The identifier of the file to download.
   * @example ```ts
   * for await (const chunk of client.download(fileId, { chunkSize: 256 * 1024 })) {
   *   await outFile.write(chunk);
   * }
   * ```
   * @returns A generator yielding the contents of the file.
   */
  async download(fileId: string, params?: DownloadParams): Promise<AsyncGenerator<Uint8Array, void, unknown>> {
    const fileId_ = FileID.decode(fileId);
    switch (fileId_.fileType) {
      case FileType.ChatPhoto: {
        const big = fileId_.params.thumbnailSource == ThumbnailSource.ChatPhotoBig;
        const peer = await this.getInputPeer(fileId_.params.chatId!);
        const location = new types.InputPeerPhotoFileLocation({ big: big ? true : undefined, peer, photoId: fileId_.params.mediaId! });
        return this.#downloadInner(location, fileId_.dcId, params);
      }
      case FileType.Photo: {
        if (fileId_.params.mediaId == undefined || fileId_.params.accessHash == undefined || fileId_.params.fileReference == undefined || fileId_.params.thumbnailSize == undefined) {
          UNREACHABLE();
        }
        const location = new types.InputPhotoFileLocation({
          id: fileId_.params.mediaId,
          accessHash: fileId_.params.accessHash,
          fileReference: fileId_.params.fileReference,
          thumbSize: fileId_.params.thumbnailSize,
        });
        return this.#downloadInner(location, fileId_.dcId, params);
      }
      default:
        UNREACHABLE();
    }
  }

  private async [getStickerSetName](inputStickerSet: types.InputStickerSetID, hash = 0) {
    const maybeStickerSetName = await this.storage.getStickerSetName(inputStickerSet.id, inputStickerSet.accessHash);
    if (maybeStickerSetName != null && Date.now() - maybeStickerSetName[1].getTime() < STICKER_SET_NAME_TTL) {
      return maybeStickerSetName[0];
    } else {
      const stickerSet = await this.invoke(new functions.MessagesGetStickerSet({ stickerset: inputStickerSet, hash }));
      const name = stickerSet[as](types.MessagesStickerSet).set.shortName;
      await this.storage.updateStickerSetName(inputStickerSet.id, inputStickerSet.accessHash, name);
      return name;
    }
  }

  /**
   * Forward multiple messages.
   *
   * @method
   * @param from The identifier of the chat to forward the messages from.
   * @param to The identifier of the chat to forward the messages to.
   * @param messageIds The identifiers of the messages to forward.
   * @returns The forwarded messages.
   */
  async forwardMessages(from: ChatID, to: ChatID, messageIds: number[], params?: ForwardMessagesParams): Promise<Message[]> {
    const result = await this.invoke(
      new functions.MessagesForwardMessages({
        fromPeer: await this.getInputPeer(from),
        toPeer: await this.getInputPeer(to),
        id: messageIds,
        randomId: messageIds.map(() => getRandomId()),
        silent: params?.disableNotification || undefined,
        topMsgId: params?.messageThreadId,
        noforwards: params?.disableNotification || undefined,
        sendAs: params?.sendAs ? await this.getInputPeer(params.sendAs) : undefined,
        dropAuthor: params?.dropSenderName || undefined,
        dropMediaCaptions: params?.dropCaption || undefined,
      }),
    );

    return await this.#updatesToMessages(to, result);
  }

  /**
   * Forward a single message.
   *
   * @method
   * @param from The identifier of the chat to forward the message from.
   * @param to The identifier of the chat to forward the message to.
   * @param messageId The identifier of the message to forward.
   * @returns The forwarded message.
   */
  async forwardMessage(from: ChatID, to: ChatID, messageId: number, params?: ForwardMessagesParams): Promise<Message> {
    return await this.forwardMessages(from, to, [messageId], params).then((v) => v[0]);
  }

  /**
   * Get information on the currently authorized user.
   *
   * @method
   */
  async getMe(): Promise<User> {
    const users = await this.invoke(new functions.UsersGetUsers({ id: [new types.InputUserSelf()] }));
    if (users.length < 1) {
      UNREACHABLE();
    }
    return constructUser(users[0][as](types.User));
  }

  // TODO: log errors
  async #handleUpdate(update: types.TypeUpdate) {
    if (update instanceof types.UpdateShortMessage) {
      update = new types.UpdateNewMessage({
        message: new types.Message({
          out: update.out,
          mentioned: update.mentioned,
          mediaUnread: update.mediaUnread,
          silent: update.silent,
          id: update.id,
          fromId: update.out ? new types.PeerUser({ userId: await this.#getSelfId().then(BigInt) }) : new types.PeerUser({ userId: update.userId }),
          peerId: new types.PeerChat({ chatId: update.userId }),
          message: update.message,
          date: update.date,
          fwdFrom: update.fwdFrom,
          viaBotId: update.viaBotId,
          replyTo: update.replyTo,
          entities: update.entities,
          ttlPeriod: update.ttlPeriod,
        }),
        pts: update.pts,
        ptsCount: update.ptsCount,
      });
    } else if (update instanceof types.UpdateShortChatMessage) {
      update = new types.UpdateNewMessage({
        message: new types.Message({
          out: update.out,
          mentioned: update.mentioned,
          mediaUnread: update.mediaUnread,
          silent: update.silent,
          id: update.id,
          fromId: new types.PeerUser({ userId: update.fromId }),
          peerId: new types.PeerChat({ chatId: update.chatId }),
          fwdFrom: update.fwdFrom,
          viaBotId: update.viaBotId,
          replyTo: update.replyTo,
          date: update.date,
          message: update.message,
          entities: update.entities,
          ttlPeriod: update.ttlPeriod,
        }),
        pts: update.pts,
        ptsCount: update.ptsCount,
      });
    }

    if (update instanceof types.UpdateNewMessage || update instanceof types.UpdateNewMessage || update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateNewChannelMessage) {
      if (update.message instanceof types.Message || update.message instanceof types.MessageService) {
        await this.storage.setMessage(peerToChatId(update.message.peerId), update.message.id, update.message);
      }
    }

    if (
      update instanceof types.UpdateNewMessage ||
      update instanceof types.UpdateNewChannelMessage ||
      update instanceof types.UpdateEditMessage ||
      update instanceof types.UpdateEditChannelMessage
    ) {
      const key = update instanceof types.UpdateNewMessage || update instanceof types.UpdateNewChannelMessage ? "message" : "editedMessage";
      if (!(update.message instanceof types.MessageEmpty)) {
        const isOutgoing = update.message.out;
        let shouldIgnore = isOutgoing ? (await this.storage.getAccountType()) == "user" ? false : true : false;
        if (this.#ignoreOutgoing != null && isOutgoing) {
          shouldIgnore = this.#ignoreOutgoing;
        }
        if (!shouldIgnore) {
          const message = await constructMessage(
            update.message,
            this[getEntity].bind(this),
            this.getMessage.bind(this),
            this[getStickerSetName].bind(this),
          );
          await this.#handle(this.#constructContext({ [key]: message }), resolve);
        }
      }
    }

    if (update instanceof types.UpdateDeleteMessages) {
      const deletedMessages = new Array<Message>();
      for (const messageId of update.messages) {
        const chatId = await this.storage.getMessageChat(messageId);
        if (chatId) {
          const message = await this.storage.getMessage(chatId, messageId);
          if (message != null && !(message instanceof types.MessageEmpty)) {
            deletedMessages.push(
              await constructMessage(
                message,
                this[getEntity].bind(this),
                this.getMessage.bind(this),
                this[getStickerSetName].bind(this),
              ),
            );
          }
          await this.storage.setMessage(chatId, messageId, null);
        }
      }
      if (deletedMessages.length > 0) {
        await this.#handle(this.#constructContext({ deletedMessages: deletedMessages as [Message, ...Message[]] }), resolve);
      }
    } else if (update instanceof types.UpdateDeleteChannelMessages) {
      const chatId = getChannelChatId(update.channelId);
      const deletedMessages = new Array<Message>();
      for (const messageId of update.messages) {
        const message = await this.storage.getMessage(chatId, messageId);
        if (message != null && !(message instanceof types.MessageEmpty)) {
          deletedMessages.push(
            await constructMessage(
              message,
              this[getEntity].bind(this),
              this.getMessage.bind(this),
              this[getStickerSetName].bind(this),
            ),
          );
        }
        await this.storage.setMessage(chatId, messageId, null);
      }
      if (deletedMessages.length > 0) {
        await this.#handle(this.#constructContext({ deletedMessages: deletedMessages as [Message, ...Message[]] }), resolve);
      }
    }

    if (update instanceof types.UpdateBotCallbackQuery || update instanceof types.UpdateInlineBotCallbackQuery) {
      await this.#handle(this.#constructContext({ callbackQuery: await constructCallbackQuery(update, this[getEntity].bind(this), this[getMessageWithReply].bind(this)) }), resolve);
    } else if (update instanceof types.UpdateBotInlineQuery) {
      await this.#handle(this.#constructContext({ inlineQuery: await constructInlineQuery(update, this[getEntity].bind(this)) }), resolve);
    }
  }

  /**
   * Answer a callback query. Bot-only.
   *
   * @method
   * @param id ID of the callback query to answer.
   */
  async answerCallbackQuery(id: string, params?: AnswerCallbackQueryParams) {
    await this.#assertBot("answerCallbackQuery");
    await this.invoke(
      new functions.MessagesSetBotCallbackAnswer({
        queryId: BigInt(id),
        cacheTime: params?.cacheTime ?? 0,
        message: params?.text,
        alert: params?.alert ? true : undefined,
      }),
    );
  }

  #usernameResolver: UsernameResolver = async (v) => {
    const inputPeer = await this.getInputPeer(v).then((v) => v[as](types.InputPeerUser));
    return new types.InputUser({ userId: inputPeer.userId, accessHash: inputPeer.accessHash });
  };

  async #constructReplyMarkup(params?: Pick<SendMessageParams, "replyMarkup">) {
    if (params?.replyMarkup) {
      await this.#assertBot("replyMarkup");
      return replyMarkupToTlObject(params.replyMarkup, this.#usernameResolver.bind(this));
    }
  }

  static #assertMsgHas<K extends keyof Message>(message: Message, key: K): With<Message, K> {
    if (!(key in message) || message[key] === undefined) {
      UNREACHABLE();
    }
    return message as With<Message, K>;
  }

  /**
   * Send a poll.
   *
   * @method
   * @param chatId The chat to send the poll to.
   * @param question The poll's question.
   * @param options The poll's options.
   * @returns The sent poll.
   */
  async sendPoll(chatId: ChatID, question: string, options: [string, string, ...string[]], params?: SendPollParams): Promise<With<Message, "poll">> {
    const peer = await this.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const replyToMsgId = params?.replyToMessageId;
    const topMsgId = params?.messageThreadId;
    const sendAs = params?.sendAs ? await this.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const explanation = params?.explanation;
    const parseResult = explanation !== undefined ? this.#parseText(explanation, { parseMode: params?.explanationParseMode, entities: params?.explanationEntities }) : undefined;

    const solution = parseResult === undefined ? undefined : parseResult[0];
    const solutionEntities = parseResult === undefined ? undefined : parseResult[1];

    const answers = options.map((v, i) => new types.PollAnswer({ option: new Uint8Array([i]), text: v }));

    const poll = new types.Poll({
      id: getRandomId(),
      answers,
      question,
      closed: params?.isClosed ? true : undefined,
      closeDate: params?.closeDate ? Math.floor(params.closeDate.getTime() / 1000) : undefined,
      closePeriod: params?.openPeriod ? params.openPeriod : undefined,
      multipleChoice: params?.allowMultipleAnswers ? true : undefined,
      publicVoters: params?.isAnonymous === false ? true : undefined,
      quiz: params?.type == "quiz" ? true : undefined,
    });

    const media = new types.InputMediaPoll({
      poll,
      correctAnswers: params?.correctOptionIndex ? [new Uint8Array([params.correctOptionIndex])] : undefined,
      solution,
      solutionEntities,
    });

    const result = await this.invoke(
      new functions.MessagesSendMedia({
        peer,
        randomId,
        silent,
        noforwards,
        replyMarkup,
        replyTo: replyToMsgId !== undefined ? new types.InputReplyToMessage({ replyToMsgId, topMsgId }) : undefined,
        sendAs,
        media,
        message: "",
      }),
    );

    const message = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return Client.#assertMsgHas(message, "poll");
  }

  /**
   * Send a chat action.
   *
   * @method
   * @param chatId The chat to send the chat action to.
   * @param action The chat action.
   * @param messageThreadId The thread to send the chat action to.
   */
  async sendChatAction(chatId: ChatID, action: ChatAction, params?: { messageThreadId?: number }) {
    let action_: types.TypeSendMessageAction;
    switch (action) {
      case "type":
        action_ = new types.SendMessageTypingAction();
        break;
      case "uploadPhoto":
        action_ = new types.SendMessageUploadPhotoAction({ progress: 0 });
        break;
      case "recordVideo":
        action_ = new types.SendMessageRecordVideoAction();
        break;
      case "uploadVideo":
        action_ = new types.SendMessageRecordVideoAction();
        break;
      case "recordVoice":
        action_ = new types.SendMessageRecordAudioAction();
        break;
      case "uploadAudio":
        action_ = new types.SendMessageUploadAudioAction({ progress: 0 });
        break;
      case "uploadDocument":
        action_ = new types.SendMessageUploadDocumentAction({ progress: 0 });
        break;
      case "chooseSticker":
        action_ = new types.SendMessageChooseStickerAction();
        break;
      case "findLocation":
        action_ = new types.SendMessageGeoLocationAction();
        break;
      case "recordVideoNote":
        action_ = new types.SendMessageRecordRoundAction();
        break;
      case "uploadVideoNote":
        action_ = new types.SendMessageUploadRoundAction({ progress: 0 });
        break;
      default:
        throw new Error("Invalid chat action: " + action);
    }
    await this.invoke(new functions.MessagesSetTyping({ peer: await this.getInputPeer(chatId), action: action_, topMsgId: params?.messageThreadId }));
  }

  /**
   * Upload a file.
   *
   * @method
   * @param contents The contents of the file.
   */
  async upload(contents: Uint8Array, params?: UploadParams) {
    const isBig = contents.length > 1048576; // 10 MB

    const chunkSize = params?.chunkSize ?? 512 * 1024;
    if (mod(chunkSize, 1024) != 0) {
      throw new Error("chunkSize must be divisible by 1024");
    }

    const signal = params?.signal;

    dUpload("uploading " + (isBig ? "big " : "") + "file of size " + contents.length + " with chunk size of " + chunkSize);

    const fileId = getRandomId();
    const name = params?.fileName ?? fileId.toString();

    const client = new Client(this.storage, this.apiId, this.apiHash, {
      transportProvider: this.transportProvider,
      appVersion: this.appVersion,
      deviceModel: this.deviceModel,
      langCode: this.langCode,
      langPack: this.langPack,
      systemLangCode: this.systemLangCode,
      systemVersion: this.systemVersion,
      cdn: true,
      initialDc: this.initialDc,
      autoStart: false,
    });
    signal?.addEventListener("abort", () => drop(client.disconnect()));
    client.#state.salt = this.#state.salt;
    await client.connect();
    let part = 0;
    const partCount = Math.ceil(contents.length / chunkSize);

    try {
      main: for (; part < partCount; part++) {
        chunk: while (true) {
          try {
            const start = part * chunkSize;
            const end = start + chunkSize;
            const bytes = contents.slice(start, end);
            if (bytes.length == 0) {
              continue main;
            }
            if (isBig) {
              await client.invoke(new functions.UploadSaveBigFilePart({ fileId, filePart: part, bytes, fileTotalParts: partCount }));
            } else {
              await client.invoke(new functions.UploadSaveFilePart({ fileId, bytes, filePart: part }));
            }
            dUpload((part + 1) + " out of " + partCount + " chunks have been uploaded so far");
            break chunk;
          } catch (err) {
            if (signal?.aborted) {
              break main;
            }
            if (err instanceof FloodWait) {
              dUpload("got a flood wait of " + err.seconds + " seconds");
              await new Promise((r) => setTimeout(r, err.seconds * 1000));
            } else if (err instanceof ConnectionError) {
              while (true) {
                try {
                  await new Promise((r) => setTimeout(r, 3000));
                  await client.connect();
                } catch {
                  if (signal?.aborted) {
                    break main;
                  }
                }
              }
            } else {
              throw err;
            }
          }
        }
      }
    } finally {
      drop(client.disconnect());
    }

    dUpload("uploaded all " + partCount + " chunk(s)");

    if (isBig) {
      return new types.InputFileBig({ id: fileId, parts: contents.length / chunkSize, name });
    } else {
      return new types.InputFile({ id: fileId, name, parts: part, md5Checksum: "" });
    }
  }

  /**
   * Set the bot's commands in the given scope and/or language. Bot-only.
   *
   * @method
   * @param commands The commands to set.
   */
  async setMyCommands(commands: BotCommand[], params?: SetMyCommandsParams) {
    await this.invoke(
      new functions.BotsSetBotCommands({
        commands: commands.map((v) => new types.BotCommand(v)),
        langCode: params?.languageCode ?? "",
        scope: await botCommandScopeToTlObject(params?.scope ?? { type: "default" }, this.getInputPeer.bind(this)),
      }),
    );
  }

  /**
   * Get the bot's commands in the given scope and/or language. Bot-only.
   */
  async getMyCommands(params?: GetMyCommandsParams): Promise<BotCommand[]> {
    const commands_ = await this.invoke(
      new functions.BotsGetBotCommands({
        langCode: params?.languageCode ?? "",
        scope: await botCommandScopeToTlObject(params?.scope ?? { type: "default" }, this.getInputPeer.bind(this)),
      }),
    );
    return commands_.map((v) => ({ command: v.command, description: v.description }));
  }

  /**
   * Answer an inline query. Bot-only.
   *
   * @method
   * @param id The ID of the inline query to answer.
   * @param results The results to answer with.
   */
  async answerInlineQuery(id: string, results: InlineQueryResult[], params?: AnswerInlineQueryParams) {
    await this.invoke(
      new functions.MessagesSetInlineBotResults({
        queryId: BigInt(id),
        results: await Promise.all(results.map((v) => inlineQueryResultToTlObject(v, this.#parseText.bind(this), this.#usernameResolver.bind(this)))),
        cacheTime: params?.cacheTime ?? 300,
        private: params?.isPersonal ? true : undefined,
        switchWebview: params?.button && params.button.webApp ? new types.InlineBotWebView({ text: params.button.text, url: params.button.webApp.url }) : undefined,
        switchPm: params?.button && params.button.startParameter ? new types.InlineBotSwitchPM({ text: params.button.text, startParam: params.button.startParameter }) : undefined,
        gallery: params?.isGallery ? true : undefined,
        nextOffset: params?.nextOffset,
      }),
    );
  }

  //#region Composer
  #handle: MiddlewareFn<C> = skip;

  use(...middleware: Middleware<C>[]) {
    const composer = new Composer(...middleware);
    this.#handle = concat(this.#handle, flatten(composer));
    return composer;
  }

  branch(predicate: (ctx: C) => MaybePromise<boolean>, trueHandler_: Middleware<C>, falseHandler_: Middleware<C>) {
    const trueHandler = flatten(trueHandler_);
    const falseHandler = flatten(falseHandler_);
    return this.use(async (upd, next) => {
      if (await predicate(upd)) {
        await trueHandler(upd, next);
      } else {
        await falseHandler(upd, next);
      }
    });
  }

  filter<D extends C>(
    predicate: (ctx: C) => ctx is D,
    ...middleware: Middleware<D>[]
  ): void;
  filter(
    predicate: (ctx: C) => MaybePromise<boolean>,
    ...middleware: Middleware<C>[]
  ): void;
  filter(
    predicate: (ctx: C) => MaybePromise<boolean>,
    ...middleware: Middleware<C>[]
  ) {
    return this.branch(predicate, middleware.length == 0 ? skip : middleware.map(flatten).reduce(concat), skip);
  }

  on<T extends keyof Update, F extends keyof NonNullable<Update[T]>>(
    filter: T extends FilterableUpdates ? T | [T, F, ...F[]] : T,
    ...middleawre: Middleware<FilterUpdate<C, T, F>>[]
  ) {
    const type = typeof filter === "string" ? filter : filter[0];
    const keys = Array.isArray(filter) ? filter.slice(1) : [];
    return this.filter((ctx): ctx is FilterUpdate<C, T, F> => {
      if (type in ctx) {
        if (keys.length > 0) {
          for (const key of keys) {
            // deno-lint-ignore ban-ts-comment
            // @ts-ignore
            if (!(key in ctx[type])) {
              return false;
            }
          }
        }
        return true;
      } else {
        return false;
      }
    }, ...middleawre);
  }
  //#endregion

  async #setMyInfo(info: Omit<ConstructorParameters<typeof functions["BotsSetBotInfo"]>[0], "bot">) {
    await this.invoke(new functions.BotsSetBotInfo({ bot: new types.InputUserSelf(), ...info }));
  }

  /**
   * Set the bot's description in the given language. Bot-only.
   *
   * @method
   */
  async setMyDescription({ description, languageCode }: { description?: string; languageCode?: string }) {
    await this.#assertBot("setMyDescription");
    await this.#setMyInfo({ description, langCode: languageCode ?? "" });
  }

  /**
   * Set the bot's name in the given language. Bot-only.
   *
   * @method
   */
  async setMyName({ name, languageCode }: { name?: string; languageCode?: string }) {
    await this.#assertBot("setMyName");
    await this.#setMyInfo({ name, langCode: languageCode ?? "" });
  }

  /**
   * Set the bot's short description in the given language. Bot-only.
   *
   * @method
   */
  async setMyShortDescription({ shortDescription: about, languageCode }: { shortDescription?: string; languageCode?: string }) {
    await this.#assertBot("setMyShortDescription");
    await this.#setMyInfo({ about, langCode: languageCode ?? "" });
  }

  #getMyInfo(languageCode?: string | undefined) {
    return this.invoke(new functions.BotsGetBotInfo({ bot: new types.InputUserSelf(), langCode: languageCode ?? "" }));
  }

  /**
   * Get the bot's description in the given language. Bot-only.
   *
   * @method
   */
  async getMyDescription(params?: { languageCode?: string }): Promise<string> {
    await this.#assertBot("getMyDescription");
    return await this.#getMyInfo(params?.languageCode).then((v) => v.description);
  }

  /**
   * Set the bot's name in the given language. Bot-only.
   *
   * @method
   */
  async getMyName(params?: { languageCode?: string }): Promise<string> {
    await this.#assertBot("getMyName");
    return await this.#getMyInfo(params?.languageCode).then((v) => v.description);
  }

  /**
   * Get the bot's short description in the given language. Bot-only.
   *
   * @method
   */
  async getMyShortDescription(params?: { languageCode?: string }): Promise<string> {
    await this.#assertBot("getMyShortDescription");
    return await this.#getMyInfo(params?.languageCode).then((v) => v.about);
  }

  /**
   * Delete multiple messages.
   *
   * @method
   * @param chatId The chat that contains the messages.
   * @param messageIds The identifier of the messages to delete.
   */
  async deleteMessages(chatId: ChatID, messageIds: number[], params?: DeleteMessagesParams): Promise<void> {
    const peer = await this.getInputPeer(chatId);
    if (peer instanceof types.InputPeerChannel) {
      await this.invoke(new functions.ChannelsDeleteMessages({ channel: new types.InputChannel(peer), id: messageIds }));
    } else {
      await this.invoke(new functions.MessagesDeleteMessages({ id: messageIds, revoke: params?.onlyForMe ? undefined : true }));
    }
  }

  /**
   * Delete a single message.
   *
   * @method
   * @param chatId The chat that contains the message.
   * @param messageId The identifier of the message to delete.
   */
  async deleteMessage(chatId: ChatID, messageId: number, params?: DeleteMessageParams): Promise<void> {
    await this.deleteMessages(chatId, [messageId], params);
  }

  /**
   * Send a photo.
   *
   * @method
   * @param chatId The chat to send the photo to.
   * @param photo The photo to send.
   */
  async sendPhoto(chatId: ChatID, photo: FileSource, params?: SendPhotoParams): Promise<With<Message, "photo">> {
    let media: types.TypeInputMedia | null = null;
    const spoiler = params?.hasSpoiler ? true : undefined;

    if (typeof photo === "string") {
      let fileId: FileID | null = null;
      try {
        fileId = FileID.decode(photo);
      } catch (err) {
        d("fileId: %o", err);
      }
      if (fileId != null) {
        if (fileId.fileType != FileType.Photo) {
          UNREACHABLE();
        }
        if (fileId.params.mediaId == undefined || fileId.params.accessHash == undefined || fileId.params.fileReference == undefined) {
          UNREACHABLE();
        }
        media = new types.InputMediaPhoto({
          id: new types.InputPhoto({
            id: fileId.params.mediaId,
            accessHash: fileId.params.accessHash,
            fileReference: fileId.params.fileReference,
          }),
          spoiler,
        });
      }
    }

    if (media == null) {
      if (typeof photo === "string" && isHttpUrl(photo)) {
        media = new types.InputMediaPhotoExternal({ url: photo, spoiler });
      } else {
        const [contents, fileName] = await getFileContents(photo);
        const file = await this.upload(contents, { fileName, chunkSize: params?.chunkSize, signal: params?.signal });
        media = new types.InputMediaUploadedPhoto({ file, spoiler });
      }
    }

    const peer = await this.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const replyToMsgId = params?.replyToMessageId;
    const topMsgId = params?.messageThreadId;
    const sendAs = params?.sendAs ? await this.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const caption_ = params?.caption;
    const parseResult = caption_ !== undefined ? this.#parseText(caption_, { parseMode: params?.parseMode, entities: params?.captionEntities }) : undefined;

    const caption = parseResult === undefined ? undefined : parseResult[0];
    const captionEntities = parseResult === undefined ? undefined : parseResult[1];

    const result = await this.invoke(
      new functions.MessagesSendMedia({
        peer,
        randomId,
        silent,
        noforwards,
        replyMarkup,
        replyTo: replyToMsgId !== undefined ? new types.InputReplyToMessage({ replyToMsgId, topMsgId }) : undefined,
        sendAs,
        media,
        message: caption ?? "",
        entities: captionEntities,
      }),
    );

    const message = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return Client.#assertMsgHas(message, "photo");
  }
}
