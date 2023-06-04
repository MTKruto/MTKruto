import { debug, gunzip, Mutex, queue } from "../deps.ts";
import { ackThreshold, CHANNEL_DIFFERENCE_LIMIT_BOT, CHANNEL_DIFFERENCE_LIMIT_USER, DEFAULT_APP_VERSION, DEFAULT_DEVICE_MODEL, DEFAULT_INITIAL_DC, DEFAULT_LANG_CODE, DEFAULT_LANG_PACK, DEFAULT_SYSTEM_LANG_CODE, DEFAULT_SYSTEM_VERSION, LAYER, MAX_CHANNEL_ID, MAX_CHAT_ID, USERNAME_TTL, ZERO_CHANNEL_ID } from "../constants.ts";
import { bigIntFromBuffer, getRandomBigInt, getRandomId } from "../utilities/0_bigint.ts";
import { UNREACHABLE } from "../utilities/0_control.ts";
import { sha1 } from "../utilities/0_hash.ts";
import { parseHtml } from "../utilities/0_html.ts";
import { MaybePromise } from "../utilities/0_types.ts";
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
import { MessageEntity, messageEntityToTlObject } from "../types/0_message_entity.ts";
import { ReplyKeyboardRemove, replyKeyboardRemoveToTlObject } from "../types/0_reply_keyboard_remove.ts";
import { ForceReply, forceReplyToTlObject } from "../types/0_force_reply.ts";
import { ReplyKeyboardMarkup, replyKeyboardMarkupToTlObject } from "../types/2_reply_keyboard_markup.ts";
import { InlineKeyboardMarkup, inlineKeyboardMarkupToTlObject } from "../types/2_inline_keyboard_markup.ts";
import { constructMessage } from "../types/3_message.ts";

const d = debug("client");
const dRecoverUpdateGap = debug("client_recoverUpdateGap");
const dRecoverChannelUpdateGap = debug("client_recoverChannelUpdateGap");

const UPDATE_GAP = Symbol();
export const getEntity = Symbol();

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

export type UpdateHandler = null | ((client: Client, update: types.TypeUpdate) => MaybePromise<void>);

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
  private updateState?: types.UpdatesState;
  public updateHandler: UpdateHandler = null;

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

  private async fetchState() {
    const state = await this.invoke(new functions.UpdatesGetState());
    this.updateState = state;
    d("state fetched");
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
              await this.storage.setAccountType("user");
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
      await this.fetchState();
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
                      await this.storage.setAccountType("user");
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
        await this.storage.setAccountType("bot");
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
    } finally {
      try {
        await this.fetchState();
      } catch (_err) {
        //
      }
    }
  }

  private messageProcessQueue = queue(async (message: Message) => {
    let body = message.body;
    if (body instanceof types.GZIPPacked) {
      body = new TLReader(gunzip(body.packedData)).readObject();
    }
    d("received %s", body.constructor.name);
    if (body instanceof types.Updates || body instanceof types.TypeUpdate) {
      await this.processUpdates(body);
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
      if (result instanceof types.Updates || result instanceof types.TypeUpdate) {
        await this.processUpdates(result);
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
  }, 2);
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
        this.messageProcessQueue.push(message);
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
        await this.storage.setEntity(chat);
        await this.storage.setChannelAccessHash(chat.id, chat.accessHash);
        if (chat.username) {
          await this.storage.updateUsernames("channel", chat.id, [chat.username]);
        }
        if (chat.usernames) {
          await this.storage.updateUsernames("channel", chat.id, chat.usernames.map((v) => v[as](types.Username)).map((v) => v.username));
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
          await this.storage.updateUsernames("user", user.id, user.usernames.map((v) => v[as](types.Username)).map((v) => v.username));
        }
      }
    }
  }

  updateQueue = queue((update: types.TypeMessage | types.TypeUpdate) => {
    if (update instanceof types.UpdateNewMessage) {
      //
    } else if (update instanceof types.UpdateDeleteMessages) {
      //
    } else if (update instanceof types.UpdateReadHistoryInbox) {
      //
    } else if (update instanceof types.UpdateReadHistoryOutbox) {
      //
    } else if (update instanceof types.UpdateWebPage) {
      //
    } else if (update instanceof types.UpdateReadMessagesContents) {
      //
    } else if (update instanceof types.UpdateNewChannelMessage) {
      //
    } else if (update instanceof types.UpdateDeleteChannelMessages) {
      //
    } else if (update instanceof types.UpdateEditChannelMessage) {
      //
    } else if (update instanceof types.UpdateEditMessage) {
      //
    } else if (update instanceof types.UpdateChannelWebPage) {
      //
    } else if (update instanceof types.UpdateFolderPeers) {
      //
    } else if (update instanceof types.UpdatePinnedMessages) {
      //
    } else if (update instanceof types.UpdatePinnedChannelMessages) {
      //
    } else if (update instanceof types.UpdateShortMessage) {
      //
    } else if (update instanceof types.UpdateShortChatMessage) {
      //
    } else if (update instanceof types.UpdateShortSentMessage) {
      //
    } else {
      UNREACHABLE();
    }
  }, 1);

  private updateApplicationMutex = new Mutex();
  private async applyUpdateNoGap(update: types.TypeUpdate, usePts = true): Promise<void> {
    d("apply update");
    const release = await this.updateApplicationMutex.acquire();

    try {
      if (
        (update instanceof types.UpdateNewMessage) ||
        (update instanceof types.UpdateDeleteMessages) ||
        (update instanceof types.UpdateReadHistoryInbox) ||
        (update instanceof types.UpdateReadHistoryOutbox) ||
        (update instanceof types.UpdateWebPage) ||
        (update instanceof types.UpdateReadMessagesContents) ||
        (update instanceof types.UpdateEditMessage) ||
        (update instanceof types.UpdateFolderPeers) ||
        (update instanceof types.UpdatePinnedMessages) ||
        (update instanceof types.UpdatePinnedChannelMessages) ||
        (update instanceof types.UpdateShortMessage) ||
        (update instanceof types.UpdateShortChatMessage) ||
        (update instanceof types.UpdateShortSentMessage)
      ) {
        const localState = await this.getLocalState();
        if (localState.pts + update.ptsCount > update.pts) {
          // the update is already applied
          return;
        } else if (localState.pts + update.ptsCount < update.pts) {
          // there is an update gap that needs to be filled
          throw UPDATE_GAP;
        }

        localState.pts = update.pts;
        await this.storage.setState(localState);
      } else if (
        usePts &&
        (
          (update instanceof types.UpdateNewChannelMessage) ||
          (update instanceof types.UpdateDeleteChannelMessages) ||
          (update instanceof types.UpdateEditChannelMessage) ||
          (update instanceof types.UpdateChannelWebPage)
        )
      ) {
        const channelId = update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditChannelMessage ? update.message[as](types.Message).peerId[as](types.PeerChannel).channelId : update.channelId;
        let localPts = await this.storage.getChannelPts(channelId);
        d("localPts=%d", localPts);
        if (!localPts) {
          localPts = update.pts - update.ptsCount;
          d("localPts not found");
        }
        if (localPts + update.ptsCount > update.pts) {
          // already applied
          return;
        } else if (localPts + update.ptsCount < update.pts) {
          d("localPts=%d ptsCount=%d pts=%d", localPts, update.ptsCount, update.pts);
          d("%d + %d < %d", localPts, update.ptsCount, update.pts);
          // should call channelGetDifference
          throw UPDATE_GAP;
        }
        await this.storage.setChannelPts(channelId, update.pts);
      }

      // apply update (call listeners)
      this.updateHandler?.(this, update);
    } finally {
      release();
    }
  }

  private async applyUpdate(update: types.TypeUpdate | types.TypeUpdates): Promise<void> {
    if (
      update instanceof types.TypeUpdates &&
      !(update instanceof types.UpdateShortMessage) &&
      !(update instanceof types.UpdateShortChatMessage) &&
      !(update instanceof types.UpdateShortSentMessage)
    ) {
      // other constructors inheriting Updates are not applicable
      UNREACHABLE();
    }
    if (update instanceof types.TypeUpdate && update instanceof types.UpdateChannelTooLong) {
      // updateChannelTooLong is not applicable
      UNREACHABLE();
    }
    // can't apply updates when filling gap
    const release = await this.updateGapRecoveryMutex.acquire();
    try {
      await this.applyUpdateNoGap(update);
      release();
    } catch (err) {
      release();
      if (err == UPDATE_GAP) {
        if (
          (update instanceof types.UpdateNewChannelMessage) ||
          (update instanceof types.UpdateDeleteChannelMessages) ||
          (update instanceof types.UpdateEditChannelMessage) ||
          (update instanceof types.UpdateChannelWebPage)
        ) {
          const channelId = update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditChannelMessage ? update.message[as](types.Message).peerId[as](types.PeerChannel).channelId : update.channelId;
          await this.recoverChannelUpdateGap(channelId, "applyUpdate");
        } else if (
          (update instanceof types.UpdateNewMessage) ||
          (update instanceof types.UpdateDeleteMessages) ||
          (update instanceof types.UpdateReadHistoryInbox) ||
          (update instanceof types.UpdateReadHistoryOutbox) ||
          (update instanceof types.UpdateWebPage) ||
          (update instanceof types.UpdateReadMessagesContents) ||
          (update instanceof types.UpdateEditMessage) ||
          (update instanceof types.UpdateFolderPeers) ||
          (update instanceof types.UpdatePinnedMessages) ||
          (update instanceof types.UpdatePinnedChannelMessages) ||
          (update instanceof types.UpdateShortMessage) ||
          (update instanceof types.UpdateShortChatMessage) ||
          (update instanceof types.UpdateShortSentMessage)
        ) {
          await this.recoverUpdateGap("applyUpdate");
        } else {
          // can't detect update gap from other types of updates
          UNREACHABLE();
        }
        // just for integrity
        const release = await this.updateGapRecoveryMutex.acquire();
        try {
          await this.applyUpdateNoGap(update);
        } catch (err) {
          if (err == UPDATE_GAP) {
            // the gap must have been filled until now
            UNREACHABLE();
          } else {
            throw err;
          }
        } finally {
          release();
        }
      } else {
        throw err;
      }
    }
  }

  private async processUpdates(updates: types.TypeUpdate | types.TypeUpdates) {
    try {
      if (updates instanceof types.TypeUpdates) {
        if (updates instanceof types.Updates) {
          await this.processChats(updates.chats);
          await this.processUsers(updates.users);
          for (const update of updates.updates) {
            await this.processUpdates(update);
          }
        } else if (
          updates instanceof types.UpdateShortMessage ||
          updates instanceof types.UpdateShortChatMessage ||
          updates instanceof types.UpdateShortSentMessage
        ) {
          await this.applyUpdate(updates);
        } else if (updates instanceof types.UpdatesTooLong) {
          await this.recoverUpdateGap("updatesTooLong");
        } else if (updates instanceof types.UpdatesCombined) {
          await this.processChats(updates.chats);
          await this.processUsers(updates.users);
          for (const update of updates.updates) {
            await this.processUpdates(update);
          }
        }
      } else if (updates instanceof types.TypeUpdate && updates instanceof types.UpdateChannelTooLong) {
        if (updates.pts != undefined) {
          await this.storage.setChannelPts(updates.channelId, updates.pts);
        }
        await this.recoverChannelUpdateGap(updates.channelId, "updateChannelTooLong");
      } else {
        if (updates instanceof types.UpdateUserName) {
          await this.storage.updateUsernames("user", updates.userId, updates.usernames.map((v) => v[as](types.Username)).map((v) => v.username));
        }
        await this.applyUpdate(updates);
      }
    } catch (err) {
      d("error processing updates: %O", err);
    }
  }

  private async getLocalState() {
    let localState = await this.storage.getState();
    if (!localState) {
      if (this.updateState) {
        localState = this.updateState;
        await this.storage.setState(localState);
      } else {
        UNREACHABLE();
      }
    }
    return localState;
  }
  private updateGapRecoveryMutex = new Mutex();
  private async recoverUpdateGap(source: string) {
    dRecoverUpdateGap("recovering from update gap [%s]", source);
    const release = await this.updateGapRecoveryMutex.acquire();
    try {
      let state = await this.getLocalState();
      while (true) {
        const difference = await this.invoke(new functions.UpdatesGetDifference({ pts: state.pts, date: state.date, qts: state.qts }));
        if (difference instanceof types.UpdatesDifference || difference instanceof types.UpdatesDifferenceSlice) {
          await this.processChats(difference.chats);
          await this.processUsers(difference.users);
          for (const message of difference.newMessages) {
            await this.applyUpdateNoGap(new types.UpdateNewMessage({ message, pts: 0, ptsCount: 0 }));
          }
          for (const update of difference.otherUpdates) {
            await this.applyUpdateNoGap(update);
          }
          if (difference instanceof types.UpdatesDifference) {
            dRecoverUpdateGap("recovered from update gap");
            break;
          } else if (difference instanceof types.UpdatesDifferenceSlice) {
            state = difference.intermediateState[as](types.UpdatesState);
          } else {
            UNREACHABLE();
          }
        } else if (difference instanceof types.UpdatesDifferenceTooLong) {
          // stored messages should be invalidated in case we store messages in the future
          state.pts = difference.pts;
          dRecoverUpdateGap("received differenceTooLong");
        } else if (difference instanceof types.UpdatesDifferenceEmpty) {
          dRecoverUpdateGap("there was no update gap");
          break;
        } else {
          UNREACHABLE();
        }
      }
    } finally {
      release();
    }
  }

  private async recoverChannelUpdateGap(channelId: bigint, source: string) {
    dRecoverChannelUpdateGap("recovering channel update gap [%o, %s]", channelId, source);
    const release = await this.updateGapRecoveryMutex.acquire();
    try {
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
            await this.applyUpdateNoGap(new types.UpdateNewChannelMessage({ message, pts: 0, ptsCount: 0 }), false);
          }
          for (const update of difference.otherUpdates) {
            await this.applyUpdateNoGap(update, false);
          }
          await this.storage.setChannelPts(channelId, difference.pts);
          dRecoverChannelUpdateGap("recovered from update gap");
          break;
        } else if (difference instanceof types.UpdatesChannelDifferenceTooLong) {
          // invalidate messages
          dRecoverChannelUpdateGap("received channelDifferenceTooLong");
          await this.processChats(difference.chats);
          await this.processUsers(difference.users);
          for (const message of difference.messages) {
            await this.applyUpdateNoGap(new types.UpdateNewChannelMessage({ message, pts: 0, ptsCount: 0 }), false);
          }
          const pts_ = difference.dialog[as](types.Dialog).pts;
          if (pts_ != undefined) {
            pts = pts_;
          } else {
            UNREACHABLE();
          }
          dRecoverChannelUpdateGap("processed channelDifferenceTooLong");
        } else if (difference instanceof types.UpdatesChannelDifferenceEmpty) {
          dRecoverChannelUpdateGap("there was no update gap");
          break;
        }
      }
    } finally {
      release();
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
      replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
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

    let replyMarkup: types.TypeReplyMarkup | undefined = undefined;
    if (params?.replyMarkup) {
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
        replyMarkup,
      }),
    ).then((v) => v[as](types.Updates));

    for (const update of updates.updates) {
      if (update instanceof types.UpdateNewMessage) {
        return constructMessage(update.message[as](types.Message), this[getEntity].bind(this));
      } else if (update instanceof types.UpdateNewChannelMessage) {
        return constructMessage(update.message[as](types.Message), this[getEntity].bind(this));
      }
    }

    UNREACHABLE();
  }
}
