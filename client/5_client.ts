import { debug, gunzip, Mutex } from "../0_deps.ts";
import { bigIntFromBuffer, drop, getRandomBigInt, getRandomId, mustPrompt, mustPromptOneOf, Queue, sha1, UNREACHABLE } from "../1_utilities.ts";
import { as, functions, getChannelChatId, Message_, MessageContainer, peerToChatId, ReadObject, RPCResult, TLError, TLReader, types } from "../2_tl.ts";
import { Storage, StorageMemory } from "../3_storage.ts";
import { DC } from "../3_transport.ts";
import { constructCallbackQuery, constructInlineQuery, constructMessage, constructUser, FileID, FileType, forceReplyToTlObject, inlineKeyboardMarkupToTlObject, Message, MessageEntity, messageEntityToTlObject, replyKeyboardMarkupToTlObject, replyKeyboardRemoveToTlObject, ThumbnailSource } from "../3_types.ts";
import { ACK_THRESHOLD, APP_VERSION, CHANNEL_DIFFERENCE_LIMIT_BOT, CHANNEL_DIFFERENCE_LIMIT_USER, DEVICE_MODEL, LANG_CODE, LANG_PACK, LAYER, MAX_CHANNEL_ID, MAX_CHAT_ID, PublicKeys, STICKER_SET_NAME_TTL, SYSTEM_LANG_CODE, SYSTEM_VERSION, USERNAME_TTL, ZERO_CHANNEL_ID } from "../4_constants.ts";
import { isChannelPtsUpdate, isPtsUpdate, resolve } from "./0_utilities.ts";
import { decryptMessage, encryptMessage, getMessageId } from "./0_message.ts";
import { checkPassword } from "./0_password.ts";
import { parseHtml } from "./0_html.ts";
import { ClientPlain } from "./2_client_plain.ts";
import { ClientAbstract } from "./1_client_abstract.ts";
import { AnswerCallbackQueryParams, AuthorizeUserParams, ChatID, ClientParams, ConnectionState, EditMessageParams, ForwardMessagesParams, Handler, HandlerFn, ParseMode, SendMessagesParams, SendPollParams } from "./3_types.ts";
import { call } from "./4_composer.ts";

const d = debug("Client");
const dGap = debug("Client/recoverUpdateGap");
const dGapC = debug("Client/recoverChannelUpdateGap");
const dAuth = debug("Client/authorize");
const dRecv = debug("Client/receiveLoop");

export const getEntity = Symbol();
export const getStickerSetName = Symbol();
export const handleMigrationError = Symbol();
export const getMessageWithReply = Symbol();

export const restartAuth = Symbol();

export class Client extends ClientAbstract {
  private auth: { key: Uint8Array; id: bigint } | null = null;
  private sessionId = getRandomBigInt(8, true, false);
  private state = { salt: 0n, seqNo: 0 };
  private promises = new Map<bigint, { resolve: (obj: ReadObject) => void; reject: (err: ReadObject) => void }>();
  private toAcknowledge = new Set<bigint>();
  private updateState?: types.UpdatesState;

  public readonly parseMode: ParseMode;

  public readonly appVersion: string;
  public readonly deviceModel: string;
  public readonly langCode: string;
  public readonly langPack: string;
  public readonly systemLangCode: string;
  public readonly systemVersion: string;
  private readonly publicKeys?: PublicKeys;
  private readonly autoStart: boolean;

  /**
   * Constructs the client.
   *
   * @param storage The storage provider to use. Defaults to memory storage.
   * @param apiId App's API ID from [my.telegram.org](https://my.telegram.org/apps). Defaults to 0 (unset).
   * @param apiHash App's API hash from [my.telegram.org/apps](https://my.telegram.org/apps). Defaults to empty string (unset).
   * @param params Other parameters.
   */
  constructor(
    public readonly storage: Storage = new StorageMemory(),
    public readonly apiId: number | null = 0,
    public readonly apiHash: string | null = "",
    params?: ClientParams,
  ) {
    super(params);

    this.parseMode = params?.parseMode ?? "none";

    this.appVersion = params?.appVersion ?? APP_VERSION;
    this.deviceModel = params?.deviceModel ?? DEVICE_MODEL;
    this.langCode = params?.langCode ?? LANG_CODE;
    this.langPack = params?.langPack ?? LANG_PACK;
    this.systemLangCode = params?.systemLangCode ?? SYSTEM_LANG_CODE;
    this.systemVersion = params?.systemVersion ?? SYSTEM_VERSION;
    this.publicKeys = params?.publicKeys;
    this.autoStart = params?.autoStart ?? true;
  }

  private propagateConnectionState(connectionState: ConnectionState) {
    return this._handler({ connectionState }, resolve);
  }

  private lastPropagatedConnectionState: ConnectionState | null = null;
  protected stateChangeHandler = ((connected: boolean) => {
    this.connectMutex.acquire().then(async (release) => {
      try {
        const connectionState = connected ? "ready" : "not-connected";
        if (this.connected == connected && this.lastPropagatedConnectionState != connectionState) {
          await this.propagateConnectionState(connectionState);
          this.lastPropagatedConnectionState = connectionState;
        }
      } finally {
        release();
      }
    });
  }).bind(this);

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
      await this.storage.getAuthKey();
    }
    super.setDc(dc);
  }

  private async setAuth(key: Uint8Array) {
    const hash = await sha1(key);
    const id = bigIntFromBuffer(hash.slice(-8), true, false);
    this.auth = { key, id };
  }

  private connectMutex = new Mutex();
  /**
   * Loads the session if `setDc` was not called, initializes and connnects
   * a `ClientPlain` to generate auth key if there was none, and connects the client.
   * Before establishing the connection, the session is saved.
   */
  async connect() {
    if (this.connected) {
      return;
    }
    const release = await this.connectMutex.acquire();
    try {
      if (!this.storageInited) {
        await this.storage.init();
        this.storageInited = true;
      }
      const authKey = await this.storage.getAuthKey();
      if (authKey == null) {
        const plain = new ClientPlain({ initialDc: this.initialDc, transportProvider: this.transportProvider, cdn: this.cdn, publicKeys: this.publicKeys });
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
        await this.storage.setDc(this.initialDc);
      }
      d("encrypted client connected");
      drop(this.receiveLoop());
      drop(this.pingLoop());
    } finally {
      release();
    }
  }

  private async assertUser(source: string) {
    if (await this.storage.getAccountType() != "user") {
      throw new Error(`${source}: not user a client`);
    }
  }

  private async assertBot(source: string) {
    if (await this.storage.getAccountType() != "bot") {
      throw new Error(`${source}: not a bot client`);
    }
  }

  private async fetchState(source: string) {
    const state = await this.invoke(new functions.UpdatesGetState());
    this.updateState = state;
    d("state fetched [%s]", source);
  }

  async [handleMigrationError](err: types.RPCError) {
    const match = err.errorMessage.match(/MIGRATE_(\d)$/);
    if (match) {
      let newDc = match[1];
      if (Math.abs(this.dcId) >= 10_000) {
        newDc += "-test";
      }
      await this.reconnect(newDc as DC);
      d("migrated to DC%s", newDc);
    } else {
      UNREACHABLE();
    }
  }

  private connectionInited = false;
  disconnect() {
    this.connectionInited = false;
    return super.disconnect();
  }
  private async initConnection() {
    if (!this.connectionInited) {
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
      this.connectionInited = true;
      d("connection inited");
    }
  }

  private lastPropagatedAuthorizationState: boolean | null = null;
  private async propagateAuthorizationState(authorized: boolean) {
    if (this.lastPropagatedAuthorizationState != authorized) {
      await this._handler({ authorizationState: { authorized } }, resolve);
      this.lastPropagatedAuthorizationState = authorized;
    }
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

    await this.initConnection();

    try {
      await this.fetchState("authorize");
      await this.propagateAuthorizationState(true);
      d("already authorized");
      return;
    } catch (err) {
      if (!(err instanceof types.RPCError) || err.errorMessage != "AUTH_KEY_UNREGISTERED") {
        throw err;
      }
    }

    if (typeof params === "string") {
      while (true) {
        try {
          await this.invoke(new functions.AuthImportBotAuthorization({ apiId: this.apiId, apiHash: this.apiHash, botAuthToken: params, flags: 0 }));
          await this.storage.setAccountType("bot");
          break;
        } catch (err) {
          if (err instanceof types.RPCError) {
            const match = err.errorMessage.match(/MIGRATE_(\d)$/);
            if (match) {
              await this[handleMigrationError](err);
              await this.initConnection();
              continue;
            } else {
              throw err;
            }
          } else {
            throw err;
          }
        }
      }
      dAuth("authorized as bot");
      await this.propagateAuthorizationState(true);
      await this.fetchState("authorize");
      return;
    }

    if (params instanceof types.AuthExportedAuthorization) {
      await this.invoke(new functions.AuthImportAuthorization({ id: params.id, bytes: params.bytes }));
      dAuth("authorization imported");
      return;
    }

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
          if (err instanceof types.RPCError) {
            const match = err.errorMessage.match(/MIGRATE_(\d)$/);
            if (match) {
              await this[handleMigrationError](err);
              await this.initConnection();
              sentCode = await sendCode();
            } else {
              throw err;
            }
          } else {
            throw err;
          }
        }
        break;
      } catch (err) {
        if (err instanceof types.RPCError && err.errorMessage == "PHONE_NUMBER_INVALID") {
          continue;
        } else {
          throw err;
        }
      }
    }
    dAuth("verification code sent");

    let err: unknown;
    while (true) {
      const code = typeof params.code === "string" ? params.code : await params.code();
      try {
        await this.invoke(
          new functions.AuthSignIn({
            phoneNumber: phone,
            phoneCode: code,
            phoneCodeHash: sentCode.phoneCodeHash,
          }),
        );
        await this.storage.setAccountType("user");
        dAuth("authorized as user");
        await this.propagateAuthorizationState(true);
        await this.fetchState("authorize");
        return;
      } catch (err_) {
        if (err_ instanceof types.RPCError && err_.errorMessage == "PHONE_CODE_INVALID") {
          continue;
        } else {
          err = err_;
          break;
        }
      }
    }

    if (!(err instanceof types.RPCError && err.errorMessage == "SESSION_PASSWORD_NEEDED")) {
      throw err;
    }

    while (true) {
      const ap = await this.invoke(new functions.AccountGetPassword());
      if (!(ap.currentAlgo instanceof types.PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow)) {
        throw new Error(`Handling ${ap.currentAlgo?.constructor.name} not implemented`);
      }
      try {
        const password = typeof params.password === "string" ? params.password : await params.password(ap.hint ?? null);
        const input = await checkPassword(password, ap);

        await this.invoke(new functions.AuthCheckPassword({ password: input }));
        await this.storage.setAccountType("user");
        dAuth("authorized as user");
        await this.propagateAuthorizationState(true);
        await this.fetchState("authorize");
        break;
      } catch (err) {
        if (err instanceof types.RPCError && err.errorMessage == "PASSWORD_HASH_INVALID") {
          continue;
        } else {
          throw err;
        }
      }
    }
  }

  /**
   * Same as calling `.connect()` followed by `.authorize(params)`.
   */
  async start(params?: string | types.AuthExportedAuthorization | AuthorizeUserParams) {
    await this.connect();
    await this.initConnection();

    try {
      await this.fetchState("authorize");
      d("already authorized");
      await this.propagateAuthorizationState(true);
      return;
    } catch (err) {
      if (!(err instanceof types.RPCError) || err.errorMessage != "AUTH_KEY_UNREGISTERED") {
        throw err;
      }
    }

    await this.authorize(params);
  }

  private async receiveLoop() {
    if (!this.auth || !this.transport) {
      throw new Error("Not connected");
    }

    while (this.connected) {
      try {
        if (this.toAcknowledge.size >= ACK_THRESHOLD) {
          await this.send(new types.MsgsAck({ msgIds: [...this.toAcknowledge] }));
          this.toAcknowledge.clear();
        }

        const buffer = await this.transport.transport.receive();

        let decrypted;
        try {
          decrypted = await (decryptMessage(
            buffer,
            this.auth.key,
            this.auth.id,
            this.sessionId,
          ));
        } catch (err) {
          dRecv("failed to decrypt message: %o", err);
          drop(this.recoverUpdateGap("decryption"));
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
            this.processUpdatesQueue.add(() => this.processUpdates(body as types.Updates | types.TypeUpdate));
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
              const promise = this.promises.get(messageId);
              if (promise) {
                if (result instanceof types.RPCError) {
                  promise.reject(result);
                } else {
                  promise.resolve(result);
                }
                this.promises.delete(messageId);
              }
            };
            if (result instanceof types._TypeUpdates || result instanceof types._TypeUpdate) {
              this.processUpdatesQueue.add(async () => {
                await this.processUpdates(result as types.TypeUpdates | types.TypeUpdate);
                resolvePromise();
              });
            } else {
              await this.processResult(result);
              resolvePromise();
            }
          } else if (message.body instanceof types.Pong) {
            const promise = this.promises.get(message.body.msgId);
            if (promise) {
              promise.resolve(message.body);
              this.promises.delete(message.body.msgId);
            }
          } else if (message.body instanceof types.BadServerSalt) {
            d("server salt reassigned");
            this.state.salt = message.body.newServerSalt;
            const promise = this.promises.get(message.body.badMsgId);
            if (promise) {
              promise.resolve(message.body);
              this.promises.delete(message.body.badMsgId);
            }
          }

          this.toAcknowledge.add(message.id);
        }
      } catch (err) {
        if (!this.connected) {
          break;
        } else if (err instanceof TLError) {
          dRecv("failed to deserialize: %o", err);
          drop(this.recoverUpdateGap("deserialize"));
        } else {
          throw err;
        }
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

  private autoStarted = false;
  private lastMsgId = 0n;
  /**
   * Invokes a function waiting and returning its reply if the second parameter is not `true`. Requires the client
   * to be connected.
   *
   * @param function_ The function to invoke.
   */
  async invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T): Promise<T extends functions.Function<unknown> ? T["__R"] : void>;
  async invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait: true): Promise<void>;
  async invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait?: boolean): Promise<T | void> {
    if (!this.auth || !this.transport) {
      if (this.autoStart && !this.autoStarted) {
        await this.start();
      } else {
        throw new Error("Not connected");
      }
    }
    if (!this.auth || !this.transport) {
      UNREACHABLE();
    }

    let seqNo = this.state.seqNo * 2;
    if (!(function_ instanceof functions.Ping) && !(function_ instanceof types.MsgsAck)) {
      seqNo++;
      this.state.seqNo++;
    }

    const messageId = this.lastMsgId = getMessageId(this.lastMsgId);
    const message = new Message_(messageId, seqNo, function_);
    await this.transport.transport.send(
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

    let result;

    try {
      result = await new Promise<ReadObject>((resolve, reject) => {
        this.promises.set(message.id, { resolve, reject });
      });
    } catch (err) {
      if (err instanceof types.RPCError && err.errorMessage == "AUTH_KEY_UNREGISTERED") {
        await this.propagateAuthorizationState(false);
      }
      throw err;
    }

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

  private async processUsers(users: types.TypeUser[]) {
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

  private handleUpdateQueue = new Queue("handleUpdate");
  private processUpdatesQueue = new Queue("processUpdates");

  private async checkGap(pts: number, ptsCount: number, assertNoGap: boolean) {
    const localState = await this.getLocalState();
    if (localState.pts + ptsCount < pts) {
      if (assertNoGap) {
        UNREACHABLE();
      } else {
        await this.recoverUpdateGap("processUpdates");
      }
    }
  }
  private async checkChannelGap(channelId: bigint, pts: number, ptsCount: number, assertNoGap: boolean) {
    let localPts = await this.storage.getChannelPts(channelId);
    if (!localPts) {
      localPts = pts - ptsCount;
    }
    if (localPts + ptsCount < pts) {
      if (assertNoGap) {
        UNREACHABLE();
      } else {
        await this.recoverChannelUpdateGap(channelId, "processUpdates");
      }
    }
  }
  private async processUpdates(updates_: types.TypeUpdate | types.TypeUpdates, assertNoGap = false) {
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
      await this.recoverUpdateGap("updatesTooLong");
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
        await this.checkGap(update.pts, update.ptsCount, assertNoGap);
        localState ??= await this.getLocalState();
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
        const ptsCount = "ptsCount" in update ? update.ptsCount : 1;
        const channelId = update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditChannelMessage ? (update.message as types.Message | types.MessageService).peerId[as](types.PeerChannel).channelId : update.channelId;
        await this.checkChannelGap(channelId, update.pts, ptsCount, assertNoGap);
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
    if (!assertNoGap) {
      if (localState != null && originalPts != null && localState.pts != originalPts) {
        await this.storage.setState(localState);
      }
      for (const [channelId, pts] of channelPtsMap.entries()) {
        await this.storage.setChannelPts(channelId, pts);
      }
    }

    /// We process the updates when we are sure there is no gap.
    if (updates_ instanceof types.Updates || updates_ instanceof types.UpdatesCombined) {
      await this.processChats(updates_.chats);
      await this.processUsers(updates_.users);
      await this.setUpdateStateDate(updates_.date);
    } else if (updates_ instanceof types.UpdateShort) {
      await this.setUpdateStateDate(updates_.date);
    }

    const updatesToHandle = new Array<types.TypeUpdate>();
    for (const update of updates) {
      if (
        update instanceof types.UpdateShortMessage ||
        update instanceof types.UpdateShortChatMessage ||
        update instanceof types.UpdateShortSentMessage
      ) {
        await this.setUpdateStateDate(update.date);
      } else if (update instanceof types.UpdateChannelTooLong) {
        if (update.pts != undefined) {
          await this.storage.setChannelPts(update.channelId, update.pts);
        }
        await this.recoverChannelUpdateGap(update.channelId, "updateChannelTooLong");
      } else if (update instanceof types.UpdateUserName) {
        await this.storage.updateUsernames("user", update.userId, update.usernames.map((v) => v.username));
      } else if (update instanceof types.UpdatePtsChanged) {
        await this.fetchState("updatePtsChanged");
        if (this.updateState) {
          await this.storage.setState(this.updateState);
        } else {
          UNREACHABLE();
        }
      }
      /// If there were any Update, they will be passed to the update handling queue.
      if (update instanceof types._TypeUpdate) {
        updatesToHandle.push(update);
      }
    }

    this.handleUpdateQueue.add(async () => {
      for (const update of updatesToHandle) {
        await this.handleUpdate(update);
      }
    });
  }

  private async setUpdateStateDate(date: number) {
    const localState = await this.getLocalState();
    localState.date = date;
    await this.storage.setState(localState);
  }

  private async getLocalState() {
    let localState = await this.storage.getState();
    if (!localState) {
      if (this.updateState) {
        localState = this.updateState;
        await this.storage.setState(localState);
      } else {
        await this.fetchState("getLocalState");
        if (this.updateState) {
          localState = this.updateState;
          await this.storage.setState(localState);
        } else {
          UNREACHABLE();
        }
      }
    }
    return localState;
  }
  private async recoverUpdateGap(source: string) {
    dGap("recovering from update gap [%s]", source);

    await this.propagateConnectionState("updating");

    try {
      let state = await this.getLocalState();
      while (true) {
        const difference = await this.invoke(new functions.UpdatesGetDifference({ pts: state.pts, date: state.date, qts: state.qts ?? 0 }));
        if (difference instanceof types.UpdatesDifference || difference instanceof types.UpdatesDifferenceSlice) {
          await this.processChats(difference.chats);
          await this.processUsers(difference.users);
          for (const message of difference.newMessages) {
            await this.processUpdates(new types.UpdateNewMessage({ message, pts: 0, ptsCount: 0 }), true);
          }
          for (const update of difference.otherUpdates) {
            await this.processUpdates(update, true);
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
          // TODO: we actually do now
          // stored messages should be invalidated in case we store messages in the future
          state.pts = difference.pts;
          dGap("received differenceTooLong");
        } else if (difference instanceof types.UpdatesDifferenceEmpty) {
          await this.setUpdateStateDate(difference.date);
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

  private async recoverChannelUpdateGap(channelId: bigint, source: string) {
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
        await this.processChats(difference.chats);
        await this.processUsers(difference.users);
        for (const message of difference.newMessages) {
          await this.processUpdates(new types.UpdateNewChannelMessage({ message, pts: 0, ptsCount: 0 }), true);
        }
        for (const update of difference.otherUpdates) {
          await this.processUpdates(update, true);
        }
        await this.storage.setChannelPts(channelId, difference.pts);
        dGapC("recovered from update gap [%o, %s]", channelId, source);
        break;
      } else if (difference instanceof types.UpdatesChannelDifferenceTooLong) {
        // invalidate messages
        dGapC("received channelDifferenceTooLong");
        await this.processChats(difference.chats);
        await this.processUsers(difference.users);
        for (const message of difference.messages) {
          await this.processUpdates(new types.UpdateNewChannelMessage({ message, pts: 0, ptsCount: 0 }), true);
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

  private async getUserAccessHash(userId: bigint) {
    const users = await this.invoke(new functions.UsersGetUsers({ id: [new types.InputUser({ userId, accessHash: 0n })] }));
    return users[0][as](types.User).accessHash ?? 0n;
  }

  private async getChannelAccessHash(channelId: bigint) {
    const channels = await this.invoke(new functions.ChannelsGetChannels({ id: [new types.InputChannel({ channelId, accessHash: 0n })] }));
    return channels.chats[0][as](types.Channel).accessHash ?? 0n;
  }

  async getInputPeer(id: ChatID) {
    const inputPeer = await this.getInputPeerInner(id);
    if (inputPeer instanceof types.InputPeerUser || inputPeer instanceof types.InputPeerChannel && inputPeer.accessHash == 0n && await this.storage.getAccountType() == "bot") {
      if ("channelId" in inputPeer) {
        inputPeer.accessHash = await this.getChannelAccessHash(inputPeer.channelId);
      } else {
        inputPeer.accessHash = await this.getUserAccessHash(inputPeer.userId);
        await this.storage.setUserAccessHash(inputPeer.userId, inputPeer.accessHash);
      }
    }
    return inputPeer;
  }

  private async getInputPeerInner(id: ChatID) {
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

  [getEntity](peer: types.PeerUser): Promise<types.User | null>;
  [getEntity](peer: types.PeerChat): Promise<types.Chat | null>;
  [getEntity](peer: types.PeerChannel): Promise<types.Channel | null>;
  [getEntity](peer: types.PeerUser | types.PeerChat | types.PeerChannel) {
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
      await this.processChats(result.chats);
      if ("users" in result) {
        await this.processUsers(result.users);
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

  private async updatesToMessages(chatId: ChatID, updates: types.TypeUpdates) {
    const messages = new Array<Message>();

    if (updates instanceof types.Updates) {
      for (const update of updates.updates) {
        if (update instanceof types.UpdateNewMessage) {
          messages.push(await constructMessage(update.message, this[getEntity].bind(this), this.getMessage.bind(this), this[getStickerSetName].bind(this)));
        } else if (update instanceof types.UpdateNewChannelMessage) {
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

  private async resolveSendAs(params?: Pick<SendMessagesParams, "sendAs">) {
    await this.assertUser("sendAs");
    return params?.sendAs ? await this.getInputPeer(params.sendAs) : undefined;
  }

  /**
   * Send a text message.
   *
   * @param chatId The chat to send the message to.
   * @param text The message's text.
   */
  async sendMessage(
    chatId: ChatID,
    text: string,
    params?: SendMessagesParams,
  ) {
    const [message, entities] = this.parseText(text, params);

    const replyMarkup = await this.constructReplyMarkup(params);

    const peer = await this.getInputPeer(chatId);
    const randomId = getRandomId();
    const noWebpage = params?.disableWebPagePreview ? true : undefined;
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const replyToMsgId = params?.replyToMessageId;
    const topMsgId = params?.messageThreadId;
    const sendAs = await this.resolveSendAs(params);

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

    return await this.updatesToMessages(chatId, result).then((v) => v[0]);
  }

  private parseText(text: string, params?: { parseMode?: ParseMode; entities?: MessageEntity[] }) {
    const entities_ = params?.entities ?? [];
    const parseMode = params?.parseMode ?? this.parseMode;
    switch (parseMode) {
      case "none":
        break;
      case "html": {
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
   * @param chatId The chat where the message is.
   * @param messageId The ID of the message.
   * @param text The new text of the message.
   */
  async editMessageText(
    chatId: ChatID,
    messageId: number,
    text: string,
    params?: EditMessageParams,
  ) { // TODO: return edited message?
    const [message, entities] = this.parseText(text, params);

    await this.invoke(
      new functions.MessagesEditMessage({
        id: messageId,
        peer: await this.getInputPeer(chatId),
        entities,
        message,
        noWebpage: params?.disableWebPagePreview ? true : undefined,
        replyMarkup: await this.constructReplyMarkup(params),
      }),
    );
  }

  private async getMessagesInner(chatId_: ChatID, messageIds: number[]) {
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
      const message = await constructMessage(message_, this[getEntity].bind(this), null, this[getStickerSetName].bind(this));
      const isReplyToMessage = message_ instanceof types.Message && message_.replyTo instanceof types.MessageReplyHeader;
      messages.push({ message, isReplyToMessage });
    }
    return messages;
  }

  /**
   * Retrieve multiple messages.
   *
   * @param chatId The identifier of the chat to retrieve the messages from.
   * @param messageIds The identifiers of the messages to retrieve.
   */
  async getMessages(chatId_: ChatID, messageIds: number[]) {
    return await this.getMessagesInner(chatId_, messageIds).then((v) => v.map((v) => v.message));
  }

  async [getMessageWithReply](chatId: ChatID, messageId: number): Promise<Message | null> {
    const messages = await this.getMessagesInner(chatId, [messageId]);
    return messages[0]?.message ?? null;
  }

  /**
   * Retrieve a single message.
   *
   * @param chatId The identifier of the chat to retrieve the message from.
   * @param messageId The identifier of the message to retrieve.
   */
  async getMessage(chatId: ChatID, messageId: number): Promise<Omit<Message, "replyToMessage"> | null> {
    const messages = await this.getMessages(chatId, [messageId]);
    return messages[0] ?? null;
  }

  private async *downloadInner(location: types.TypeInputFileLocation, dcId?: number) {
    let client: Client | null = null;
    if (dcId != undefined && dcId != this.dcId) {
      const exportedAuth = await this.invoke(new functions.AuthExportAuthorization({ dcId }));
      client = new Client(new StorageMemory(), this.apiId, this.apiHash, {
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
    }

    const limit = 1024 * 1024;
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
   * @param fileId The identifier of the file to download.
   */
  async download(fileId: string) {
    const fileId_ = FileID.decode(fileId);
    switch (fileId_.fileType) {
      case FileType.ChatPhoto: {
        const big = fileId_.params.thumbnailSource == ThumbnailSource.ChatPhotoBig;
        const peer = await this.getInputPeer(fileId_.params.chatId!);
        const location = new types.InputPeerPhotoFileLocation({ big: big ? true : undefined, peer, photoId: fileId_.params.mediaId! });
        return this.downloadInner(location);
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
        return this.downloadInner(location);
      }
      default:
        UNREACHABLE();
    }
  }

  async [getStickerSetName](inputStickerSet: types.InputStickerSetID, hash = 0) {
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
   * @param from The identifier of the chat to forward the messages from.
   * @param to The identifier of the chat to forward the messages to.
   * @param messageIds The identifiers of the messages to forward.
   */
  async forwardMessages(from: ChatID, to: ChatID, messageIds: number[], params?: ForwardMessagesParams) {
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

    return await this.updatesToMessages(to, result);
  }

  /**
   * Forward a single message.
   *
   * @param from The identifier of the chat to forward the message from.
   * @param to The identifier of the chat to forward the message to.
   * @param messageId The identifier of the message to forward.
   */
  async forwardMessage(from: ChatID, to: ChatID, messageId: number, params?: ForwardMessagesParams) {
    return await this.forwardMessages(from, to, [messageId], params).then((v) => v[0]);
  }

  /**
   * Get information on the currently authorized user.
   */
  async getMe() {
    const users = await this.invoke(new functions.UsersGetUsers({ id: [new types.InputUserSelf()] }));
    if (users.length < 1) {
      UNREACHABLE();
    }
    return constructUser(users[0][as](types.User));
  }

  // TODO: log errors
  private async handleUpdate(update: types.TypeUpdate) {
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
      const message = await constructMessage(
        update.message,
        this[getEntity].bind(this),
        this.getMessage.bind(this),
        this[getStickerSetName].bind(this),
      );
      await this._handler({ [key]: message }, resolve);
    }

    if (update instanceof types.UpdateDeleteMessages) {
      const deletedMessages = new Array<Message>();
      for (const messageId of update.messages) {
        const chatId = await this.storage.getMessageChat(messageId);
        if (chatId) {
          const message = await this.storage.getMessage(chatId, messageId);
          if (message != null) {
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
        await this._handler({ deletedMessages: deletedMessages as [Message, ...Message[]] }, resolve);
      }
    } else if (update instanceof types.UpdateDeleteChannelMessages) {
      const chatId = getChannelChatId(update.channelId);
      const deletedMessages = new Array<Message>();
      for (const messageId of update.messages) {
        const message = await this.storage.getMessage(chatId, messageId);
        if (message) {
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
        await this._handler({ deletedMessages: deletedMessages as [Message, ...Message[]] }, resolve);
      }
    }

    if (update instanceof types.UpdateBotCallbackQuery || update instanceof types.UpdateInlineBotCallbackQuery) {
      await this._handler({ callbackQuery: await constructCallbackQuery(update, this[getEntity].bind(this), this[getMessageWithReply].bind(this)) }, resolve);
    } else if (update instanceof types.UpdateBotInlineQuery) {
      await this._handler({ inlineQuery: await constructInlineQuery(update, this[getEntity].bind(this)) }, resolve);
    }
  }

  private _handler: HandlerFn = (_upd, next) => {
    next();
  };

  set handler(handler: Handler) {
    this._handler = call(handler);
  }

  /**
   * Answer a callback query. Bot-only.
   *
   * @param id ID of the callback query to answer.
   */
  async answerCallbackQuery(id: string, params?: AnswerCallbackQueryParams) {
    await this.assertBot("answerCallbackQuery");
    await this.invoke(
      new functions.MessagesSetBotCallbackAnswer({
        queryId: BigInt(id),
        cacheTime: params?.cacheTime ?? 0,
        message: params?.text,
        alert: params?.alert ? true : undefined,
      }),
    );
  }

  private async constructReplyMarkup(params?: Pick<SendMessagesParams, "replyMarkup">) {
    let replyMarkup: types.TypeReplyMarkup | undefined = undefined;
    if (params?.replyMarkup) {
      await this.assertBot("replyMarkup");
      if ("inlineKeyboard" in params.replyMarkup) {
        replyMarkup = await inlineKeyboardMarkupToTlObject(params.replyMarkup, async (v) => {
          const inputPeer = await this.getInputPeer(v).then((v) => v[as](types.InputPeerUser));
          return new types.InputUser({ userId: inputPeer.userId, accessHash: inputPeer.accessHash });
        });
      } else if ("keyboard" in params.replyMarkup) {
        replyMarkup = replyKeyboardMarkupToTlObject(params.replyMarkup);
      } else if ("removeKeyboard" in params.replyMarkup) {
        replyMarkup = replyKeyboardRemoveToTlObject(params.replyMarkup);
      } else if ("forceReply" in params.replyMarkup) {
        replyMarkup = forceReplyToTlObject(params.replyMarkup);
      } else {
        throw new Error("The replyMarkup parameter has an unexpected type");
      }
    }
    return replyMarkup;
  }

  async sendPoll(chatId: ChatID, question: string, options: [string, string, ...string[]], params?: SendPollParams) {
    const peer = await this.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const replyToMsgId = params?.replyToMessageId;
    const topMsgId = params?.messageThreadId;
    const sendAs = params?.sendAs ? await this.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.constructReplyMarkup(params);

    const explanation = params?.explanation;
    const parseResult = explanation !== undefined ? this.parseText(explanation, { parseMode: params?.explanationParseMode, entities: params?.explanationEntities }) : undefined;

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

    return await this.updatesToMessages(chatId, result).then((v) => v[0]);
  }
}
