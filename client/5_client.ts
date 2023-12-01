import { debug, gunzip, Mutex } from "../0_deps.ts";
import { bigIntFromBuffer, cleanObject, drop, getRandomBigInt, getRandomId, MaybePromise, mod, mustPrompt, mustPromptOneOf, Queue, sha1, UNREACHABLE } from "../1_utilities.ts";
import { as, functions, getChannelChatId, Message_, MessageContainer, peerToChatId, ReadObject, RPCResult, TLError, TLReader, types } from "../2_tl.ts";
import { Storage, StorageMemory } from "../3_storage.ts";
import { DC } from "../3_transport.ts";
import { BotCommand, botCommandScopeToTlObject, CallbackQuery, ChatAction, ChatID, constructCallbackQuery, constructInlineQuery, constructMessage, constructUser, FileID, FileType, InlineQuery, InlineQueryResult, inlineQueryResultToTlObject, Message, MessageEntity, messageEntityToTlObject, ParseMode, replyMarkupToTlObject, ThumbnailSource, User, UsernameResolver } from "../3_types.ts";
import { ACK_THRESHOLD, APP_VERSION, CHANNEL_DIFFERENCE_LIMIT_BOT, CHANNEL_DIFFERENCE_LIMIT_USER, DEVICE_MODEL, LANG_CODE, LANG_PACK, LAYER, MAX_CHANNEL_ID, MAX_CHAT_ID, PublicKeys, STICKER_SET_NAME_TTL, SYSTEM_LANG_CODE, SYSTEM_VERSION, USERNAME_TTL, ZERO_CHANNEL_ID } from "../4_constants.ts";
import { AuthKeyUnregistered, FloodWait, Migrate, PasswordHashInvalid, PhoneNumberInvalid, SessionPasswordNeeded, upgradeInstance } from "../4_errors.ts";
import { parseHtml } from "./0_html.ts";
import { decryptMessage, encryptMessage, getMessageId } from "./0_message.ts";
import { checkPassword } from "./0_password.ts";
import { FileSource, getFileContents, getUsername, isChannelPtsUpdate, isHttpUrl, isPtsUpdate, resolve, With } from "./0_utilities.ts";
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
  me: undefined extends this["connectionState"] ? undefined extends this["authorizationState"] ? User : (User | undefined) : (User | undefined);
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
  #updateState?: types.updates_state;

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
  readonly #prefixes?: string | string[];

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
    this.#prefixes = params?.prefixes;

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

  #constructContext = async (update: Update) => {
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
    const me = update.connectionState !== undefined ? this.#lastGetMe : (update.authorizationState !== undefined && !update.authorizationState.authorized) ? this.#lastGetMe : await this.#getMe();
    return cleanObject({
      ...update,
      client: this as unknown as Client,
      me: me == null ? undefined : me,
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
    } as C, false);
  };

  #propagateConnectionState(connectionState: ConnectionState) {
    this.#handleUpdateQueue.add(async () => {
      await this.#handle(await this.#constructContext({ connectionState }), resolve);
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
    const state = await this.invoke(new functions.updates.getState());
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
        new functions.initConnection({
          api_id: this.apiId!,
          app_version: this.appVersion,
          device_model: this.deviceModel,
          lang_code: this.langCode,
          lang_pack: this.langPack,
          query: new functions.invokeWithLayer({
            layer: LAYER,
            query: new functions.help.getConfig(),
          }),
          system_lang_code: this.systemLangCode,
          system_version: this.systemVersion,
        }),
      );
      this.#connectionInited = true;
      d("connection inited");
    }
  }

  #lastPropagatedAuthorizationState: boolean | null = null;
  async #propagateAuthorizationState(authorized: boolean) {
    if (this.#lastPropagatedAuthorizationState != authorized) {
      await this.#handle(await this.#constructContext({ authorizationState: { authorized } }), resolve);
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
  async authorize(params?: string | types.auth_exportedAuthorization | AuthorizeUserParams) {
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

    dAuth("authorizing with %s", typeof params === "string" ? "bot token" : params instanceof types.auth_exportedAuthorization ? "exported authorization" : "AuthorizeUserParams");

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
          const auth = await this.invoke(new functions.auth.importBotAuthorization({ api_id: this.apiId, api_hash: this.apiHash, bot_auth_token: params, flags: 0 }));
          this.#selfId = Number(auth[as](types.auth_authorization).user.id);
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

    if (params instanceof types.auth_exportedAuthorization) {
      await this.invoke(new functions.auth.importAuthorization({ id: params.id, bytes: params.bytes }));
      dAuth("authorization imported");
      return;
    }

    auth: while (true) {
      try {
        let phone: string;
        let sentCode: types.auth_sentCode;
        while (true) {
          try {
            phone = typeof params.phone === "string" ? params.phone : await params.phone();
            const sendCode = () =>
              this.invoke(
                new functions.auth.sendCode({
                  phone_number: phone,
                  api_id: this.apiId!,
                  api_hash: this.apiHash!,
                  settings: new types.codeSettings(),
                }),
              ).then((v) => v[as](types.auth_sentCode));
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
              new functions.auth.signIn({
                phone_number: phone,
                phone_code: code,
                phone_code_hash: sentCode.phone_code_hash,
              }),
            );
            this.#selfId = Number(auth[as](types.auth_authorization).user.id);
            await this.storage.setAccountType("user");
            dAuth("authorized as user");
            await this.#propagateAuthorizationState(true);
            await this.#fetchState("authorize");
            return;
          } catch (err_) {
            if (err_ instanceof types.rpc_error && err_.error_message == "PHONE_CODE_INVALID") {
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
          const ap = await this.invoke(new functions.account.getPassword());
          if (!(ap.current_algo instanceof types.passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow)) {
            throw new Error(`Handling ${ap.current_algo?.constructor.name} not implemented`);
          }
          try {
            const password = typeof params.password === "string" ? params.password : await params.password(ap.hint ?? null);
            const input = await checkPassword(password, ap);

            const auth = await this.invoke(new functions.auth.checkPassword({ password: input }));
            this.#selfId = Number(auth[as](types.auth_authorization).user.id);
            await this.storage.setAccountType("user");
            dAuth("authorized as user");
            await this.#propagateAuthorizationState(true);
            await this.#fetchState("authorize");
            return;
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
  async start(params?: string | types.auth_exportedAuthorization | AuthorizeUserParams) {
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
          await this.send(new types.msgs_ack({ msg_ids: [...this.#toAcknowledge] }));
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
          if (body instanceof types.gzip_packed) {
            body = new TLReader(gunzip(body.packed_data)).readObject();
          }
          dRecv("received %s", body.constructor.name);
          if (body instanceof types._Updates || body instanceof types._Update) {
            this.#processUpdatesQueue.add(() => this.#processUpdates(body as types.updates | types.Update, true));
          } else if (body instanceof types.new_session_created) {
            this.#state.salt = body.server_salt;
            await this.storage.setServerSalt(this.#state.salt);
          } else if (message.body instanceof RPCResult) {
            let result = message.body.result;
            if (result instanceof types.gzip_packed) {
              result = new TLReader(gunzip(result.packed_data)).readObject();
            }
            if (result instanceof types.rpc_error) {
              dRecv("RPCResult: %d %s", result.error_code, result.error_message);
            } else {
              dRecv("RPCResult: %s", result.constructor.name);
            }
            const messageId = message.body.messageId;
            const resolvePromise = () => {
              const promise = this.#promises.get(messageId);
              if (promise) {
                if (result instanceof types.rpc_error) {
                  promise.reject(upgradeInstance(result));
                } else {
                  promise.resolve(result);
                }
                this.#promises.delete(messageId);
              }
            };
            if (result instanceof types._Updates || result instanceof types._Update) {
              this.#processUpdatesQueue.add(async () => {
                await this.#processUpdates(result as types.Updates | types.Update, true);
                resolvePromise();
              });
            } else {
              await this.processResult(result);
              resolvePromise();
            }
          } else if (message.body instanceof types.pong) {
            const promise = this.#promises.get(message.body.msg_id);
            if (promise) {
              promise.resolve(message.body);
              this.#promises.delete(message.body.msg_id);
            }
          } else if (message.body instanceof types.bad_server_salt) {
            d("server salt reassigned");
            this.#state.salt = message.body.new_server_salt;
            await this.storage.setServerSalt(this.#state.salt);
            const promise = this.#promises.get(message.body.bad_msg_id);
            if (promise) {
              promise.resolve(message.body);
              this.#promises.delete(message.body.bad_msg_id);
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
        await this.invoke(new functions.ping_delay_disconnect({ ping_id: getRandomBigInt(8, true, false), disconnect_delay: this.#pingInterval + 15 }));
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
        if (!(function_ instanceof functions.ping) && !(function_ instanceof types.msgs_ack)) {
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
              if (result instanceof types.bad_server_salt) {
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

        if (result instanceof types.bad_server_salt) {
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

  async #processChats(chats: types.Chat[]) {
    for (const chat of chats) {
      if (chat instanceof types.channel && chat.access_hash) {
        await this.storage.setEntity(chat);
        await this.storage.setChannelAccessHash(chat.id, chat.access_hash);
        if (chat.username) {
          await this.storage.updateUsernames("channel", chat.id, [chat.username]);
        }
        if (chat.usernames) {
          await this.storage.updateUsernames("channel", chat.id, chat.usernames.map((v) => v.username));
        }
      } else if (chat instanceof types.chat) {
        await this.storage.setEntity(chat);
      }
    }
  }

  async #processUsers(users: types.User[]) {
    for (const user of users) {
      if (user instanceof types.user && user.access_hash) {
        await this.storage.setEntity(user);
        await this.storage.setUserAccessHash(user.id, user.access_hash);
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

  async #processUpdates(updates_: types.Update | types.Updates, checkGap: boolean) {
    /// First, individual updates (Update[1]) and updateShort* are extracted from Updates.[2]
    ///
    /// If an updatesTooLong[3] was received, an update gap recovery is initiated and no further action will be taken.
    ///
    /// [1]: https://core.telegram.org/type/Update
    /// [2]: https://core.telegram.org/type/Updates
    /// [3]: https://core.telegram.org/constructor/updatesTooLong
    let updates: (types.Update | types.updateShortMessage | types.updateShortChatMessage | types.updateShortSentMessage)[];
    if (updates_ instanceof types.updatesCombined || updates_ instanceof types.updates) {
      updates = updates_.updates;
      const seq = updates_.seq;
      const seqStart = "seq_start" in updates_ ? updates_.seq_start : updates_.seq;
      if (checkGap) {
        if (seqStart == 0) {
          checkGap = false;
          d("seqStart=0");
        } else {
          const localState = await this.#getLocalState();
          const localSeq = localState.seq;

          if (localSeq + 1 == seqStart) {
            // The updates can be applied.
            localState.seq = seq;
            localState.date = updates_.date;
            await this.#setUpdateStateDate(updates_.date);
            await this.storage.setState(localState);
          } else if (localSeq + 1 > seqStart) {
            // The updates were already applied, and must be ignored.
            d("localSeq + 1 > seqStart");
            return;
          } else if (localSeq + 1 < seqStart) {
            // There's an updates gap that must be filled.
            await this.#recoverUpdateGap("localSeq + 1 < seqStart");
          }
        }
      }
    } else if (updates_ instanceof types.updateShort) {
      updates = [updates_.update];
    } else if (
      updates_ instanceof types.updateShortMessage ||
      updates_ instanceof types.updateShortChatMessage ||
      updates_ instanceof types.updateShortSentMessage
    ) {
      updates = [updates_];
    } else if (updates_ instanceof types.updatesTooLong) {
      await this.#recoverUpdateGap("updatesTooLong");
      return;
    } else if (updates_ instanceof types._Update) {
      updates = [updates_];
    } else {
      UNREACHABLE();
    }

    /// Then, we go through each Update and updateShort*, and see if they are order-sensitive.
    /// If they were, we check the local state to see if it is OK to process them right away.
    ///
    /// If we there was a gap, a recovery process will be initiated and the processing will be postponed.
    let localState: types.updates_state | null = null;
    let originalPts: number | null = null;
    const channelPtsMap = new Map<bigint, number>();
    for (const update of updates) {
      if (isPtsUpdate(update)) {
        if (update.pts == 0) {
          continue;
        }
        if (checkGap) {
          await this.checkGap(update.pts, update.pts_count);
        }
        localState ??= await this.#getLocalState();
        originalPts ??= localState.pts;
        if (localState.pts + update.pts_count > update.pts) {
          updates = updates.filter((v) => v != update);
        } else {
          localState.pts = update.pts;
        }
      } else if (isChannelPtsUpdate(update)) {
        if (update.pts == 0) {
          continue;
        }
        const ptsCount = update.pts_count;
        const channelId = update instanceof types.updateNewChannelMessage || update instanceof types.updateEditChannelMessage ? (update.message as types.message | types.messageService).peer_id[as](types.peerChannel).channel_id : update.channel_id;
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
    if (updates_ instanceof types.updates || updates_ instanceof types.updatesCombined) {
      await this.#processChats(updates_.chats);
      await this.#processUsers(updates_.users);
      await this.#setUpdateStateDate(updates_.date);
    } else if (updates_ instanceof types.updateShort) {
      await this.#setUpdateStateDate(updates_.date);
    }

    const updatesToHandle = new Array<types.Update>();
    for (const update of updates) {
      if (
        update instanceof types.updateShortMessage ||
        update instanceof types.updateShortChatMessage ||
        update instanceof types.updateShortSentMessage
      ) {
        await this.#setUpdateStateDate(update.date);
      } else if (update instanceof types.updateChannelTooLong) {
        if (update.pts != undefined) {
          await this.storage.setChannelPts(update.channel_id, update.pts);
        }
        await this.#recoverChannelUpdateGap(update.channel_id, "updateChannelTooLong");
      } else if (update instanceof types.updateUserName) {
        await this.storage.updateUsernames("user", update.user_id, update.usernames.map((v) => v.username));
      } else if (update instanceof types.updatePtsChanged) {
        await this.#fetchState("updatePtsChanged");
        if (this.#updateState) {
          await this.storage.setState(this.#updateState);
        } else {
          UNREACHABLE();
        }
      }
      if (isPtsUpdate(update)) {
        await this.#setUpdatePts(update.pts);
      } else if (isChannelPtsUpdate(update)) {
        let channelId: bigint | null = null;
        if ("channel_id" in update) {
          channelId = update.channel_id;
        } else if ("peer_id" in update.message && update.message.peer_id !== undefined && "channel_id" in update.message.peer_id) {
          channelId = update.message.peer_id.channel_id;
        }
        if (channelId != null) {
          await this.storage.setChannelPts(channelId, update.pts);
        }
      }
      /// If there were any Update, they will be passed to the update handling queue.
      if (update instanceof types._Update) {
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

  async #setUpdatePts(pts: number) {
    const localState = await this.#getLocalState();
    localState.pts = pts;
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
        const difference = await this.invoke(new functions.updates.getDifference({ pts: state.pts, date: state.date, qts: state.qts ?? 0 }));
        if (difference instanceof types.updates_difference || difference instanceof types.updates_differenceSlice) {
          await this.#processChats(difference.chats);
          await this.#processUsers(difference.users);
          for (const message of difference.new_messages) {
            await this.#processUpdates(new types.updateNewMessage({ message, pts: 0, pts_count: 0 }), false);
          }
          for (const update of difference.other_updates) {
            await this.#processUpdates(update, false);
          }
          if (difference instanceof types.updates_difference) {
            await this.storage.setState(difference.state);
            dGap("recovered from update gap");
            break;
          } else if (difference instanceof types.updates_differenceSlice) {
            state = difference.intermediate_state;
          } else {
            UNREACHABLE();
          }
        } else if (difference instanceof types.updates_differenceTooLong) {
          await this.storage.deleteMessages();
          state.pts = difference.pts;
          dGap("received differenceTooLong");
        } else if (difference instanceof types.updates_differenceEmpty) {
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
      const { access_hash } = await this.getInputPeer(ZERO_CHANNEL_ID + -Number(channelId)).then((v) => v[as](types.inputPeerChannel));
      const difference = await this.invoke(
        new functions.updates.getChannelDifference({
          pts,
          channel: new types.inputChannel({ channel_id: channelId, access_hash }),
          filter: new types.channelMessagesFilterEmpty(),
          limit: await this.storage.getAccountType() == "user" ? CHANNEL_DIFFERENCE_LIMIT_USER : CHANNEL_DIFFERENCE_LIMIT_BOT,
        }),
      );
      if (difference instanceof types.updates_channelDifference) {
        await this.#processChats(difference.chats);
        await this.#processUsers(difference.users);
        for (const message of difference.new_messages) {
          await this.#processUpdates(new types.updateNewChannelMessage({ message, pts: 0, pts_count: 0 }), false);
        }
        for (const update of difference.other_updates) {
          await this.#processUpdates(update, false);
        }
        await this.storage.setChannelPts(channelId, difference.pts);
        dGapC("recovered from update gap [%o, %s]", channelId, source);
        break;
      } else if (difference instanceof types.updates_channelDifferenceTooLong) {
        // invalidate messages
        dGapC("received channelDifferenceTooLong");
        await this.#processChats(difference.chats);
        await this.#processUsers(difference.users);
        for (const message of difference.messages) {
          await this.#processUpdates(new types.updateNewChannelMessage({ message, pts: 0, pts_count: 0 }), false);
        }
        const pts_ = difference.dialog[as](types.dialog).pts;
        if (pts_ != undefined) {
          pts = pts_;
        } else {
          UNREACHABLE();
        }
        dGapC("processed channelDifferenceTooLong");
      } else if (difference instanceof types.updates_channelDifferenceEmpty) {
        dGapC("there was no update gap");
        break;
      }
    }
  }

  async getUserAccessHash(userId: bigint) {
    const users = await this.invoke(new functions.users.getUsers({ id: [new types.inputUser({ user_id: userId, access_hash: 0n })] }));
    return users[0]?.[as](types.user).access_hash ?? 0n;
  }

  async #getChannelAccessHash(channelId: bigint) {
    const channels = await this.invoke(new functions.channels.getChannels({ id: [new types.inputChannel({ channel_id: channelId, access_hash: 0n })] }));
    return channels.chats[0][as](types.channel).access_hash ?? 0n;
  }

  async getInputPeer(id: ChatID) {
    const inputPeer = await this.#getInputPeerInner(id);
    if ((inputPeer instanceof types.inputPeerUser || inputPeer instanceof types.inputPeerChannel && inputPeer.access_hash == 0n) && await this.storage.getAccountType() == "bot") {
      if ("channel_id" in inputPeer) {
        inputPeer.access_hash = await this.#getChannelAccessHash(inputPeer.channel_id);
      } else {
        inputPeer.access_hash = await this.getUserAccessHash(inputPeer.user_id);
        await this.storage.setUserAccessHash(inputPeer.user_id, inputPeer.access_hash);
      }
    }
    return inputPeer;
  }

  async #getInputPeerInner(id: ChatID) {
    if (typeof id === "string") {
      id = getUsername(id);
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
        const resolved = await this.invoke(new functions.contacts.resolveUsername({ username: id }));
        await this.#processChats(resolved.chats);
        await this.#processUsers(resolved.users);
        if (resolved.peer instanceof types.peerUser) {
          userId = resolved.peer.user_id;
        } else if (resolved.peer instanceof types.peerChannel) {
          channelId = resolved.peer.channel_id;
        } else {
          UNREACHABLE();
        }
      }
      if (userId) {
        const accessHash = await this.storage.getUserAccessHash(userId);
        return new types.inputPeerUser({ user_id: userId, access_hash: accessHash ?? 0n });
      } else if (channelId) {
        const accessHash = await this.storage.getChannelAccessHash(channelId);
        return new types.inputPeerChannel({ channel_id: channelId, access_hash: accessHash ?? 0n });
      } else {
        UNREACHABLE();
      }
    } else if (id > 0) {
      const id_ = BigInt(id);
      const accessHash = await this.storage.getUserAccessHash(id_);
      return new types.inputPeerUser({ user_id: id_, access_hash: accessHash ?? 0n });
    } else if (-MAX_CHAT_ID <= id) {
      return new types.inputPeerChat({ chat_id: BigInt(Math.abs(id)) });
    } else if (ZERO_CHANNEL_ID - MAX_CHANNEL_ID <= id && id != ZERO_CHANNEL_ID) {
      const id_ = BigInt(Math.abs(id - ZERO_CHANNEL_ID));
      const accessHash = await this.storage.getChannelAccessHash(id_);
      return new types.inputPeerChannel({ channel_id: id_, access_hash: accessHash ?? 0n });
    } else {
      throw new Error("ID format unknown or not implemented");
    }
  }

  private [getEntity](peer: types.peerUser): Promise<types.user | null>;
  private [getEntity](peer: types.peerChat): Promise<types.chat | null>;
  private [getEntity](peer: types.peerChannel): Promise<types.channel | null>;
  private [getEntity](peer: types.peerUser | types.peerChat | types.peerChannel) {
    const type = peer instanceof types.peerUser ? "user" : peer instanceof types.peerChat ? "chat" : peer instanceof types.peerChannel ? "channel" : UNREACHABLE();
    const id = peer instanceof types.peerUser ? peer.user_id : peer instanceof types.peerChat ? peer.chat_id : peer instanceof types.peerChannel ? peer.channel_id : UNREACHABLE();
    return this.storage.getEntity(type, id);
  }

  async processResult(result: ReadObject) {
    if (
      result instanceof types.messages_dialogs ||
      result instanceof types.messages_dialogsSlice ||
      result instanceof types.messages_messages ||
      result instanceof types.messages_messagesSlice ||
      result instanceof types.messages_channelMessages ||
      result instanceof types.messages_chatFull ||
      result instanceof types.contacts_found ||
      result instanceof types.account_privacyRules ||
      result instanceof types.contacts_resolvedPeer ||
      result instanceof types.channels_channelParticipants ||
      result instanceof types.channels_channelParticipant ||
      result instanceof types.messages_peerDialogs ||
      result instanceof types.contacts_topPeers ||
      result instanceof types.channels_adminLogResults ||
      result instanceof types.help_recentMeUrls ||
      result instanceof types.messages_inactiveChats ||
      result instanceof types.help_promoData ||
      result instanceof types.messages_messageViews ||
      result instanceof types.messages_discussionMessage ||
      result instanceof types.phone_groupCall ||
      result instanceof types.phone_groupParticipants ||
      result instanceof types.phone_joinAsPeers ||
      result instanceof types.messages_sponsoredMessages ||
      result instanceof types.messages_searchResultsCalendar ||
      result instanceof types.channels_sendAsPeers ||
      result instanceof types.users_userFull ||
      result instanceof types.messages_peerSettings ||
      result instanceof types.messages_messageReactionsList ||
      result instanceof types.messages_forumTopics ||
      result instanceof types.account_autoSaveSettings ||
      result instanceof types.chatlists_exportedInvites ||
      result instanceof types.chatlists_chatlistInviteAlready ||
      result instanceof types.chatlists_chatlistInvite ||
      result instanceof types.chatlists_chatlistUpdates ||
      result instanceof types.messages_chats ||
      result instanceof types.messages_chatsSlice
    ) {
      await this.#processChats(result.chats);
      if ("users" in result) {
        await this.#processUsers(result.users);
      }
    }

    if (result instanceof types.messages_messages) {
      for (const message of result.messages) {
        if (message instanceof types.message || message instanceof types.messageService) {
          await this.storage.setMessage(peerToChatId(message.peer_id), message.id, message);
        }
      }
    }
  }

  async #updatesToMessages(chatId: ChatID, updates: types.Updates) {
    const messages = new Array<Message>();

    if (updates instanceof types.updates) {
      for (const update of updates.updates) {
        if ("message" in update && update.message instanceof types.messageEmpty) {
          continue;
        }
        if (update instanceof types.updateNewMessage || update instanceof types.updateEditMessage) {
          messages.push(await constructMessage(update.message, this[getEntity].bind(this), this.getMessage.bind(this), this[getStickerSetName].bind(this)));
        } else if (update instanceof types.updateNewChannelMessage || update instanceof types.updateEditChannelMessage) {
          messages.push(await constructMessage(update.message, this[getEntity].bind(this), this.getMessage.bind(this), this[getStickerSetName].bind(this)));
        }
      }
    } else if (updates instanceof types.updateShortSentMessage || updates instanceof types.updateShortSentMessage) {
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
      new functions.messages.sendMessage({
        peer,
        random_id: randomId,
        message,
        no_webpage: noWebpage,
        silent,
        noforwards,
        reply_to: replyToMsgId !== undefined ? new types.inputReplyToMessage({ reply_to_msg_id: replyToMsgId, top_msg_id: topMsgId }) : undefined,
        send_as: sendAs,
        entities,
        reply_markup: replyMarkup,
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
      new functions.messages.editMessage({
        id: messageId,
        peer: await this.getInputPeer(chatId),
        entities,
        message,
        no_webpage: params?.disableWebPagePreview ? true : undefined,
        reply_markup: await this.#constructReplyMarkup(params),
      }),
    );

    const message_ = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return Client.#assertMsgHas(message_, "text");
  }

  async #getMessagesInner(chatId_: ChatID, messageIds: number[]) {
    const peer = await this.getInputPeer(chatId_);
    let messages_ = new Array<types.Message>();
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
      if (peer instanceof types.inputPeerChannel) {
        messages_ = await this.invoke(
          new functions.channels.getMessages({
            channel: new types.inputChannel({ channel_id: peer.channel_id, access_hash: peer.access_hash }),
            id: messageIds.map((v) => new types.inputMessageID({ id: v })),
          }),
        ).then((v) => v[as](types.messages_channelMessages).messages);
      } else {
        messages_ = await this.invoke(
          new functions.messages.getMessages({
            id: messageIds.map((v) => new types.inputMessageID({ id: v })),
          }),
        ).then((v) => v[as](types.messages_messages).messages);
      }
    }
    const messages = new Array<{ message: Omit<Message, "replyToMessage">; isReplyToMessage: boolean }>();
    for (const message_ of messages_) {
      if (message_ instanceof types.messageEmpty) {
        continue;
      }
      const message = await constructMessage(message_, this[getEntity].bind(this), null, this[getStickerSetName].bind(this));
      const isReplyToMessage = message_ instanceof types.message && message_.reply_to instanceof types.messageReplyHeader;
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

  async *#downloadInner(location: types.InputFileLocation, dcId: number, params?: { chunkSize?: number }) {
    const chunkSize = params?.chunkSize ?? 1024 * 1024;
    if (mod(chunkSize, 1024) != 0) {
      throw new Error("chunkSize must be divisible by 1024");
    }

    const exportedAuth = await this.invoke(new functions.auth.exportAuthorization({ dc_id: dcId }));
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
      const file = await (client ?? this).invoke(new functions.upload.getFile({ location, offset, limit }));

      if (file instanceof types.upload_file) {
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
        const location = new types.inputPeerPhotoFileLocation({ big: big ? true : undefined, peer, photo_id: fileId_.params.mediaId! });
        return this.#downloadInner(location, fileId_.dcId, params);
      }
      case FileType.Photo: {
        if (fileId_.params.mediaId == undefined || fileId_.params.accessHash == undefined || fileId_.params.fileReference == undefined || fileId_.params.thumbnailSize == undefined) {
          UNREACHABLE();
        }
        const location = new types.inputPhotoFileLocation({
          id: fileId_.params.mediaId,
          access_hash: fileId_.params.accessHash,
          file_reference: fileId_.params.fileReference,
          thumb_size: fileId_.params.thumbnailSize,
        });
        return this.#downloadInner(location, fileId_.dcId, params);
      }
      default:
        UNREACHABLE();
    }
  }

  private async [getStickerSetName](inputStickerSet: types.inputStickerSetID, hash = 0) {
    const maybeStickerSetName = await this.storage.getStickerSetName(inputStickerSet.id, inputStickerSet.access_hash);
    if (maybeStickerSetName != null && Date.now() - maybeStickerSetName[1].getTime() < STICKER_SET_NAME_TTL) {
      return maybeStickerSetName[0];
    } else {
      const stickerSet = await this.invoke(new functions.messages.getStickerSet({ stickerset: inputStickerSet, hash }));
      const name = stickerSet[as](types.messages_stickerSet).set.short_name;
      await this.storage.updateStickerSetName(inputStickerSet.id, inputStickerSet.access_hash, name);
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
      new functions.messages.forwardMessages({
        from_peer: await this.getInputPeer(from),
        to_peer: await this.getInputPeer(to),
        id: messageIds,
        random_id: messageIds.map(() => getRandomId()),
        silent: params?.disableNotification || undefined,
        top_msg_id: params?.messageThreadId,
        noforwards: params?.disableNotification || undefined,
        send_as: params?.sendAs ? await this.getInputPeer(params.sendAs) : undefined,
        drop_author: params?.dropSenderName || undefined,
        drop_media_captions: params?.dropCaption || undefined,
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

  #lastGetMe: User | null = null;
  async #getMe() {
    if (this.#lastGetMe != null) {
      return this.#lastGetMe;
    } else {
      const user = await this.getMe();
      this.#lastGetMe = user;
      return user;
    }
  }

  /**
   * Get information on the currently authorized user.
   *
   * @method
   */
  async getMe(): Promise<User> {
    const users = await this.invoke(new functions.users.getUsers({ id: [new types.inputUserSelf()] }));
    if (users.length < 1) {
      UNREACHABLE();
    }
    const user = constructUser(users[0][as](types.user));
    this.#lastGetMe = user;
    return user;
  }

  // TODO: log errors
  async #handleUpdate(update: types.Update) {
    if (update instanceof types.updateShortMessage) {
      update = new types.updateNewMessage({
        message: new types.message({
          out: update.out,
          mentioned: update.mentioned,
          media_unread: update.media_unread,
          silent: update.silent,
          id: update.id,
          from_id: update.out ? new types.peerUser({ user_id: await this.#getSelfId().then(BigInt) }) : new types.peerUser({ user_id: update.user_id }),
          peer_id: new types.peerChat({ chat_id: update.user_id }),
          message: update.message,
          date: update.date,
          fwd_from: update.fwd_from,
          via_bot_id: update.via_bot_id,
          reply_to: update.reply_to,
          entities: update.entities,
          ttl_period: update.ttl_period,
        }),
        pts: update.pts,
        pts_count: update.pts_count,
      });
    } else if (update instanceof types.updateShortChatMessage) {
      update = new types.updateNewMessage({
        message: new types.message({
          out: update.out,
          mentioned: update.mentioned,
          media_unread: update.media_unread,
          silent: update.silent,
          id: update.id,
          from_id: new types.peerUser({ user_id: update.from_id }),
          peer_id: new types.peerChat({ chat_id: update.chat_id }),
          fwd_from: update.fwd_from,
          via_bot_id: update.via_bot_id,
          reply_to: update.reply_to,
          date: update.date,
          message: update.message,
          entities: update.entities,
          ttl_period: update.ttl_period,
        }),
        pts: update.pts,
        pts_count: update.pts_count,
      });
    }

    if (update instanceof types.updateNewMessage || update instanceof types.updateNewMessage || update instanceof types.updateNewChannelMessage || update instanceof types.updateNewChannelMessage) {
      if (update.message instanceof types.message || update.message instanceof types.messageService) {
        await this.storage.setMessage(peerToChatId(update.message.peer_id), update.message.id, update.message);
      }
    }

    if (
      update instanceof types.updateNewMessage ||
      update instanceof types.updateNewChannelMessage ||
      update instanceof types.updateEditMessage ||
      update instanceof types.updateEditChannelMessage
    ) {
      const key = update instanceof types.updateNewMessage || update instanceof types.updateNewChannelMessage ? "message" : "editedMessage";
      if (!(update.message instanceof types.messageEmpty)) {
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
          await this.#handle(await this.#constructContext({ [key]: message }), resolve);
        }
      }
    }

    if (update instanceof types.updateDeleteMessages) {
      const deletedMessages = new Array<Message>();
      for (const messageId of update.messages) {
        const chatId = await this.storage.getMessageChat(messageId);
        if (chatId) {
          const message = await this.storage.getMessage(chatId, messageId);
          if (message != null && !(message instanceof types.messageEmpty)) {
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
        await this.#handle(await this.#constructContext({ deletedMessages: deletedMessages as [Message, ...Message[]] }), resolve);
      }
    } else if (update instanceof types.updateDeleteChannelMessages) {
      const chatId = getChannelChatId(update.channel_id);
      const deletedMessages = new Array<Message>();
      for (const messageId of update.messages) {
        const message = await this.storage.getMessage(chatId, messageId);
        if (message != null && !(message instanceof types.messageEmpty)) {
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
        await this.#handle(await this.#constructContext({ deletedMessages: deletedMessages as [Message, ...Message[]] }), resolve);
      }
    }

    if (update instanceof types.updateBotCallbackQuery || update instanceof types.updateInlineBotCallbackQuery) {
      await this.#handle(await this.#constructContext({ callbackQuery: await constructCallbackQuery(update, this[getEntity].bind(this), this[getMessageWithReply].bind(this)) }), resolve);
    } else if (update instanceof types.updateBotInlineQuery) {
      await this.#handle(await this.#constructContext({ inlineQuery: await constructInlineQuery(update, this[getEntity].bind(this)) }), resolve);
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
      new functions.messages.setBotCallbackAnswer({
        query_id: BigInt(id),
        cache_time: params?.cacheTime ?? 0,
        message: params?.text,
        alert: params?.alert ? true : undefined,
      }),
    );
  }

  #usernameResolver: UsernameResolver = async (v) => {
    const inputPeer = await this.getInputPeer(v).then((v) => v[as](types.inputPeerUser));
    return new types.inputUser(inputPeer);
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

    const answers = options.map((v, i) => new types.pollAnswer({ option: new Uint8Array([i]), text: v }));

    const poll = new types.poll({
      id: getRandomId(),
      answers,
      question,
      closed: params?.isClosed ? true : undefined,
      close_date: params?.closeDate ? Math.floor(params.closeDate.getTime() / 1000) : undefined,
      close_period: params?.openPeriod ? params.openPeriod : undefined,
      multiple_choice: params?.allowMultipleAnswers ? true : undefined,
      public_voters: params?.isAnonymous === false ? true : undefined,
      quiz: params?.type == "quiz" ? true : undefined,
    });

    const media = new types.inputMediaPoll({
      poll,
      correct_answers: params?.correctOptionIndex ? [new Uint8Array([params.correctOptionIndex])] : undefined,
      solution,
      solution_entities: solutionEntities,
    });

    const result = await this.invoke(
      new functions.messages.sendMedia({
        peer,
        random_id: randomId,
        silent,
        noforwards,
        reply_markup: replyMarkup,
        reply_to: replyToMsgId !== undefined ? new types.inputReplyToMessage({ reply_to_msg_id: replyToMsgId, top_msg_id: topMsgId }) : undefined,
        send_as: sendAs,
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
    let action_: types.SendMessageAction;
    switch (action) {
      case "type":
        action_ = new types.sendMessageTypingAction();
        break;
      case "uploadPhoto":
        action_ = new types.sendMessageUploadPhotoAction({ progress: 0 });
        break;
      case "recordVideo":
        action_ = new types.sendMessageRecordVideoAction();
        break;
      case "uploadVideo":
        action_ = new types.sendMessageRecordVideoAction();
        break;
      case "recordVoice":
        action_ = new types.sendMessageRecordAudioAction();
        break;
      case "uploadAudio":
        action_ = new types.sendMessageUploadAudioAction({ progress: 0 });
        break;
      case "uploadDocument":
        action_ = new types.sendMessageUploadDocumentAction({ progress: 0 });
        break;
      case "chooseSticker":
        action_ = new types.sendMessageChooseStickerAction();
        break;
      case "findLocation":
        action_ = new types.sendMessageGeoLocationAction();
        break;
      case "recordVideoNote":
        action_ = new types.sendMessageRecordRoundAction();
        break;
      case "uploadVideoNote":
        action_ = new types.sendMessageUploadRoundAction({ progress: 0 });
        break;
      default:
        throw new Error("Invalid chat action: " + action);
    }
    await this.invoke(new functions.messages.setTyping({ peer: await this.getInputPeer(chatId), action: action_, top_msg_id: params?.messageThreadId }));
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
              await client.invoke(new functions.upload.saveBigFilePart({ file_id: fileId, file_part: part, bytes, file_total_parts: partCount }));
            } else {
              await client.invoke(new functions.upload.saveFilePart({ file_id: fileId, bytes, file_part: part }));
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
      return new types.inputFileBig({ id: fileId, parts: contents.length / chunkSize, name });
    } else {
      return new types.inputFile({ id: fileId, name, parts: part, md5_checksum: "" });
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
      new functions.bots.setBotCommands({
        commands: commands.map((v) => new types.botCommand(v)),
        lang_code: params?.languageCode ?? "",
        scope: await botCommandScopeToTlObject(params?.scope ?? { type: "default" }, this.getInputPeer.bind(this)),
      }),
    );
  }

  /**
   * Get the bot's commands in the given scope and/or language. Bot-only.
   */
  async getMyCommands(params?: GetMyCommandsParams): Promise<BotCommand[]> {
    const commands_ = await this.invoke(
      new functions.bots.getBotCommands({
        lang_code: params?.languageCode ?? "",
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
      new functions.messages.setInlineBotResults({
        query_id: BigInt(id),
        results: await Promise.all(results.map((v) => inlineQueryResultToTlObject(v, this.#parseText.bind(this), this.#usernameResolver.bind(this)))),
        cache_time: params?.cacheTime ?? 300,
        private: params?.isPersonal ? true : undefined,
        switch_webview: params?.button && params.button.webApp ? new types.inlineBotWebView({ text: params.button.text, url: params.button.webApp.url }) : undefined,
        switch_pm: params?.button && params.button.startParameter ? new types.inlineBotSwitchPM({ text: params.button.text, start_param: params.button.startParameter }) : undefined,
        gallery: params?.isGallery ? true : undefined,
        next_offset: params?.nextOffset,
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
  ): Composer<D>;
  filter(
    predicate: (ctx: C) => MaybePromise<boolean>,
    ...middleware: Middleware<C>[]
  ): Composer<C>;
  filter(
    predicate: (ctx: C) => MaybePromise<boolean>,
    ...middleware: Middleware<C>[]
  ) {
    const composer = new Composer(...middleware);
    this.branch(predicate, composer, skip);
    return composer;
  }

  on<T extends keyof Update, F extends string>(
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

  command(
    commands: string | RegExp | (string | RegExp)[] | {
      names: string | RegExp | (string | RegExp)[];
      prefixes: string | string[];
    },
    ...middleawre: Middleware<FilterUpdate<C, "message", "text">>[]
  ) {
    const commands__ = typeof commands === "object" && "names" in commands ? commands.names : commands;
    const commands_ = Array.isArray(commands__) ? commands__ : [commands__];
    const prefixes_ = typeof commands === "object" && "prefixes" in commands ? commands.prefixes : (this.#prefixes ?? []);
    const prefixes = Array.isArray(prefixes_) ? prefixes_ : [prefixes_];
    for (const left of prefixes) {
      for (const right of prefixes) {
        if (left == right) {
          continue;
        }
        if (left.startsWith(right) || right.startsWith(left)) {
          throw new Error("Intersecting prefixes");
        }
      }
    }
    return this.on(["message", "text"]).filter((ctx) => {
      const prefixes_ = prefixes.length == 0 ? [!ctx.me?.isBot ? "\\" : "/"] : prefixes;
      if (prefixes_.length == 0) {
        return false;
      }
      const cmd = ctx.message.text.split(/\s/, 1)[0];
      const prefix = prefixes_.find((v) => cmd.startsWith(v));
      if (prefix === undefined) {
        return false;
      }
      if (cmd.includes("@")) {
        const username = cmd.split("@", 2)[1];
        if (username.toLowerCase() !== ctx.me!.username?.toLowerCase()) {
          return false;
        }
      }
      const command_ = cmd.split("@", 1)[0].split(prefix, 2)[1].toLowerCase();
      for (const command of commands_) {
        if (typeof command === "string" && (command.toLowerCase() == command_)) {
          return true;
        } else if (command instanceof RegExp && command.test(command_)) {
          return true;
        }
      }
      return false;
    }, ...middleawre);
  }
  //#endregion

  async #setMyInfo(info: Omit<ConstructorParameters<typeof functions["bots"]["setBotInfo"]>[0], "bot">) {
    await this.invoke(new functions.bots.setBotInfo({ bot: new types.inputUserSelf(), ...info }));
  }

  /**
   * Set the bot's description in the given language. Bot-only.
   *
   * @method
   */
  async setMyDescription({ description, languageCode }: { description?: string; languageCode?: string }) {
    await this.#assertBot("setMyDescription");
    await this.#setMyInfo({ description, lang_code: languageCode ?? "" });
  }

  /**
   * Set the bot's name in the given language. Bot-only.
   *
   * @method
   */
  async setMyName({ name, languageCode }: { name?: string; languageCode?: string }) {
    await this.#assertBot("setMyName");
    await this.#setMyInfo({ name, lang_code: languageCode ?? "" });
  }

  /**
   * Set the bot's short description in the given language. Bot-only.
   *
   * @method
   */
  async setMyShortDescription({ shortDescription: about, languageCode }: { shortDescription?: string; languageCode?: string }) {
    await this.#assertBot("setMyShortDescription");
    await this.#setMyInfo({ about, lang_code: languageCode ?? "" });
  }

  #getMyInfo(languageCode?: string | undefined) {
    return this.invoke(new functions.bots.getBotInfo({ bot: new types.inputUserSelf(), lang_code: languageCode ?? "" }));
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
    if (peer instanceof types.inputPeerChannel) {
      await this.invoke(new functions.channels.deleteMessages({ channel: new types.inputChannel(peer), id: messageIds }));
    } else {
      await this.invoke(new functions.messages.deleteMessages({ id: messageIds, revoke: params?.onlyForMe ? undefined : true }));
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
    let media: types.InputMedia | null = null;
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
        media = new types.inputMediaPhoto({
          id: new types.inputPhoto({
            id: fileId.params.mediaId,
            access_hash: fileId.params.accessHash,
            file_reference: fileId.params.fileReference,
          }),
          spoiler,
        });
      }
    }

    if (media == null) {
      if (typeof photo === "string" && isHttpUrl(photo)) {
        media = new types.inputMediaPhotoExternal({ url: photo, spoiler });
      } else {
        const [contents, fileName] = await getFileContents(photo);
        const file = await this.upload(contents, { fileName, chunkSize: params?.chunkSize, signal: params?.signal });
        media = new types.inputMediaUploadedPhoto({ file, spoiler });
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
      new functions.messages.sendMedia({
        peer,
        random_id: randomId,
        silent,
        noforwards,
        reply_markup: replyMarkup,
        reply_to: replyToMsgId !== undefined ? new types.inputReplyToMessage({ reply_to_msg_id: replyToMsgId, top_msg_id: topMsgId }) : undefined,
        send_as: sendAs,
        media,
        message: caption ?? "",
        entities: captionEntities,
      }),
    );

    const message = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return Client.#assertMsgHas(message, "photo");
  }
}
