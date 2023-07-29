import { debug, gunzip, Mutex, MutexInterface } from "../deps.ts";
import { ACK_THRESHOLD, APP_VERSION, CHANNEL_DIFFERENCE_LIMIT_BOT, CHANNEL_DIFFERENCE_LIMIT_USER, DEVICE_MODEL, LANG_CODE, LANG_PACK, LAYER, MAX_CHANNEL_ID, MAX_CHAT_ID, PublicKeys, STICKER_SET_NAME_TTL, SYSTEM_LANG_CODE, SYSTEM_VERSION, USERNAME_TTL, ZERO_CHANNEL_ID } from "../constants.ts";
import { bigIntFromBuffer, getRandomBigInt, getRandomId } from "../utilities/0_bigint.ts";
import { UNREACHABLE } from "../utilities/0_control.ts";
import { sha1 } from "../utilities/0_hash.ts";
import { MaybePromise } from "../utilities/0_types.ts";
import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import * as functions from "../tl/3_functions.ts";
import { ReadObject, TLReader } from "../tl/3_tl_reader.ts";
import { RPCResult } from "../tl/5_rpc_result.ts";
import { Message as Message_ } from "../tl/6_message.ts"; // MTProto API message
import { MessageContainer } from "../tl/7_message_container.ts";
import { Storage } from "../storage/0_storage.ts";
import { StorageMemory } from "../storage/1_storage_memory.ts";
import { DC, TransportProvider } from "../transport/2_transport_provider.ts";
import { FileID, FileType, ThumbnailSource } from "../types/!0_file_id.ts";
import { MessageEntity, messageEntityToTlObject } from "../types/0_message_entity.ts";
import { ReplyKeyboardRemove, replyKeyboardRemoveToTlObject } from "../types/0_reply_keyboard_remove.ts";
import { ForceReply, forceReplyToTlObject } from "../types/0_force_reply.ts";
import { ReplyKeyboardMarkup, replyKeyboardMarkupToTlObject } from "../types/2_reply_keyboard_markup.ts";
import { InlineKeyboardMarkup, inlineKeyboardMarkupToTlObject } from "../types/2_inline_keyboard_markup.ts";
import { constructMessage, Message } from "../types/3_message.ts"; // high-level wrapper for Telegram API's message
import { decryptMessage, encryptMessage, getMessageId } from "./0_message.ts";
import { parseHtml } from "./0_html.ts";
import { checkPassword } from "./0_password.ts";
import { ClientAbstract } from "./1_client_abstract.ts";
import { ClientPlain } from "./2_client_plain.ts";
import { drop, mustPrompt, mustPromptOneOf } from "../utilities/1_misc.ts";
import { getChannelChatId, peerToChatId } from "./0_utilities.ts";
import { constructUser } from "../types/1_user.ts";

const d = debug("Client");
const dGap = debug("Client/recoverUpdateGap");
const dGapC = debug("Client/recoverChannelUpdateGap");
const dAuth = debug("Client/authorize");
const dRecv = debug("Client/receiveLoop");

const UPDATE_GAP = Symbol();
export const getEntity = Symbol();
export const getStickerSetName = Symbol();
export const handleMigrationError = Symbol();

export const restartAuth = Symbol();

export enum ParseMode {
  None = "none",
  HTML = "html",
}

export interface AuthorizeUserParams<S = string> {
  phone: S | (() => MaybePromise<S>);
  code: S | (() => MaybePromise<S>);
  password: S | ((hint: string | null) => MaybePromise<S>);
}

export type UpdateHandler = null | ((client: Client, update: types.TypeUpdate) => MaybePromise<void>);

export interface ClientParams {
  /**
   * Default parse mode. Defauls to `ParseMode.None`.
   */
  parseMode?: ParseMode;
  /**
   * The transport provider to use. Defaults to `webSocketTransportProvider`.
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
  /**
   * MTProto public keys to use in the `[keyId, [key, exponent]][]` format. Don't set this unless you know what you are doing.
   */
  publicKeys?: PublicKeys;
  /**
   * Whether to automatically call `start` with no parameters in the first `invoke` call.
   */
  autoStart?: boolean;
}

/**
 * A chat identifier as provided by MTKruto or a string starting with a @ that is followed by a username.
 */
export type ChatID = number | string;

export interface SendMessagesParams {
  /**
   * The parse mode to use. If not provided, the default parse mode will be used.
   */
  parseMode?: ParseMode;
  /**
   * The message's entities.
   */
  entities?: MessageEntity[];
  /**
   * Whether to disable web page previews in the message that is to be sent.
   */
  disableWebPagePreview?: boolean;
  /**
   * Whether to send the message in a silent way without making a sound on the recipients' clients.
   */
  disableNotification?: boolean;
  /**
   * Whether to protect the contents of the message from copying and forwarding.
   */
  protectContent?: boolean;
  /**
   * The identifier of a message to reply to.
   */
  replyToMessageId?: number;
  /**
   * The identifier of a thread to send the message to.
   */
  messageThreadId?: number;
  /**
   * The identifier of the chat to send the message on behalf of.
   */
  sendAs?: ChatID;
  /**
   * The reply markup of the message.
   */
  replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface ForwardMessagesParams {
  messageThreadId?: number;
  /**
   * Whether to forward the message in a silent way without making a sound on the recipients' clients.
   */
  disableNotification?: boolean;
  /**
   * Whether to protect the contents of the forwarded message from copying and forwarding.
   */
  protectContent?: boolean;
  /**
   * The identifier of the chat to forward the message on behalf of.
   */
  sendAs?: ChatID;
  /**
   * Whether to not include the original sender of the message that is going to be forwarded.
   */
  dropSenderName?: boolean;
  /**
   * Whether to not include the original caption of the message that is going to be forwarded.
   */
  dropCaption?: boolean;
}

export class Client extends ClientAbstract {
  private auth: { key: Uint8Array; id: bigint } | null = null;
  private sessionId = getRandomBigInt(8, true, false);
  private state = { salt: 0n, seqNo: 0 };
  private promises = new Map<bigint, { resolve: (obj: ReadObject) => void; reject: (err: ReadObject) => void }>();
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
  private readonly publicKeys?: PublicKeys;
  private readonly autoStart: boolean;

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
    public readonly apiId: number | null = 0,
    public readonly apiHash: string | null = "",
    params?: ClientParams,
    cdn = false,
  ) {
    super(params?.transportProvider, cdn);

    this.parseMode = params?.parseMode ?? ParseMode.None;

    this.appVersion = params?.appVersion ?? APP_VERSION;
    this.deviceModel = params?.deviceModel ?? DEVICE_MODEL;
    this.langCode = params?.langCode ?? LANG_CODE;
    this.langPack = params?.langPack ?? LANG_PACK;
    this.systemLangCode = params?.systemLangCode ?? SYSTEM_LANG_CODE;
    this.systemVersion = params?.systemVersion ?? SYSTEM_VERSION;
    this.publicKeys = params?.publicKeys;
    this.autoStart = params?.autoStart ?? true;
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
      await this.storage.getAuthKey();
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
      const plain = new ClientPlain(this.transportProvider, this.publicKeys);
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
      await this.storage.setDc(this.transportProvider.initialDc);
    }
    d("encrypted client connected");
    drop(this.receiveLoop());
    drop(this.pingLoop());
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
        params = { phone: () => mustPrompt("Phone number:"), code: () => mustPrompt("Verification code:"), password: () => mustPrompt(`Password:`) };
      }
    }

    dAuth("authorizing with %s", typeof params === "string" ? "bot token" : params instanceof types.AuthExportedAuthorization ? "exported authorization" : "AuthorizeUserParams");

    const initConnection = async () => {
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
      d("connection inited");
    };

    await initConnection();

    try {
      await this.fetchState("authorize");
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
              await initConnection();
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
              await initConnection();
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

    try {
      await this.fetchState("authorize");
      d("already authorized");
      return;
    } catch (err) {
      if (!(err instanceof types.RPCError) || err.errorMessage != "AUTH_KEY_UNREGISTERED") {
        throw err;
      }
    }

    await this.authorize(params);
  }

  private async receiveLoop() {
    if (!this.auth) {
      throw new Error("Not connected");
    }

    while (this.connected) {
      try {
        if (this.toAcknowledge.size >= ACK_THRESHOLD) {
          await this.send(new types.MsgsAck({ msgIds: [...this.toAcknowledge] }));
          this.toAcknowledge.clear();
        }

        const buffer = await this.transport.receive();

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
          if (body instanceof types.Updates || body instanceof types.TypeUpdate) {
            drop(this.processUpdates(body));
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
            if (result instanceof types.TypeUpdates || result instanceof types.TypeUpdate) {
              this.processUpdates(result).then(resolvePromise).catch();
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
      } catch (err) {
        if (!this.connected) {
          break;
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
    if (!this.auth) {
      if (this.autoStart && !this.autoStarted) {
        await this.start();
      } else {
        throw new Error("Not connected");
      }
    }
    if (!this.auth) {
      UNREACHABLE();
    }

    let seqNo = this.state.seqNo * 2;
    if (!(function_ instanceof functions.Ping) && !(function_ instanceof types.MsgsAck)) {
      seqNo++;
      this.state.seqNo++;
    }

    const messageId = this.lastMsgId = getMessageId(this.lastMsgId);
    const message = new Message_(messageId, seqNo, function_);
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

    const result = await new Promise<ReadObject>((resolve, reject) => {
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

  private updateApplicationMutex = new Mutex();
  private async applyUpdateNoGap(update: types.TypeUpdate, usePts = true): Promise<void> {
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
        if (update.pts != 0 && update.ptsCount != 0) {
          const localState = await this.getLocalState();
          if (localState.pts + update.ptsCount > update.pts) {
            // the update is already applied
            return;
          } else if (localState.pts + update.ptsCount < update.pts) {
            // there is an update gap that needs to be filled
            throw UPDATE_GAP;
          }

          localState.pts = update.pts;
          d("applied update with pts %d", update.pts);
          await this.storage.setState(localState);
        }
      } else if (
        usePts &&
        (
          (update instanceof types.UpdateNewChannelMessage) ||
          (update instanceof types.UpdateDeleteChannelMessages) ||
          (update instanceof types.UpdateEditChannelMessage) ||
          (update instanceof types.UpdateChannelWebPage)
        )
      ) {
        const channelId = update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditChannelMessage ? (update.message as types.Message | types.MessageService).peerId[as](types.PeerChannel).channelId : update.channelId;
        let localPts = await this.storage.getChannelPts(channelId);
        if (!localPts) {
          localPts = update.pts - update.ptsCount;
        }
        if (localPts + update.ptsCount > update.pts) {
          // already applied
          return;
        } else if (localPts + update.ptsCount < update.pts) {
          // should call channelGetDifference
          throw UPDATE_GAP;
        }
        d("applied update with pts %d", update.pts);
        await this.storage.setChannelPts(channelId, update.pts);
      }

      if (update instanceof types.UpdateNewMessage || update instanceof types.UpdateNewMessage || update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateNewChannelMessage) {
        if (update.message instanceof types.Message || update.message instanceof types.MessageService) {
          await this.storage.setMessage(peerToChatId(update.message.peerId), update.message.id, update.message);
        }
      } else if (update instanceof types.UpdateDeleteChannelMessages) {
        for (const message of update.messages) {
          await this.storage.setMessage(getChannelChatId(update.channelId), message, null);
        }
      } else if (update instanceof types.UpdateDeleteMessages) {
        for (const message of update.messages) {
          const chatId = await this.storage.getMessageChat(message);
          if (chatId) {
            await this.storage.setMessage(chatId, message, null);
          }
        }
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
          const channelId = update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditChannelMessage ? (update.message as types.Message | types.MessageService).peerId[as](types.PeerChannel).channelId : update.channelId;
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

  private updateProcessLock = new Mutex();
  private async processUpdates(updates: types.TypeUpdate | types.TypeUpdates, release?: MutexInterface.Releaser) {
    release ??= await this.updateProcessLock.acquire();
    try {
      if (updates instanceof types.TypeUpdates) {
        if (updates instanceof types.Updates) {
          await this.processChats(updates.chats);
          await this.processUsers(updates.users);
          await this.setUpdateStateDate(updates.date);
          for (const update of updates.updates) {
            await this.processUpdates(update, release);
          }
        } else if (
          updates instanceof types.UpdateShortMessage ||
          updates instanceof types.UpdateShortChatMessage ||
          updates instanceof types.UpdateShortSentMessage
        ) {
          await this.setUpdateStateDate(updates.date);
          await this.applyUpdate(updates);
        } else if (updates instanceof types.UpdatesTooLong) {
          await this.recoverUpdateGap("updatesTooLong");
        } else if (updates instanceof types.UpdatesCombined) {
          await this.setUpdateStateDate(updates.date);
          await this.processChats(updates.chats);
          await this.processUsers(updates.users);
          for (const update of updates.updates) {
            await this.processUpdates(update, release);
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
        } else if (updates instanceof types.UpdatePtsChanged) {
          await this.fetchState("updatePtsChanged");
          if (this.updateState) {
            await this.storage.setState(this.updateState);
          } else {
            UNREACHABLE();
          }
        }
        await this.applyUpdate(updates);
      }
    } catch (err) {
      d("error processing updates: %O", err);
    } finally {
      release();
    }
  }

  private async setUpdateStateDate(date: number) {
    const release = await this.updateApplicationMutex.acquire();
    try {
      const localState = await this.getLocalState();
      localState.date = date;
      await this.storage.setState(localState);
    } finally {
      release();
    }
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
  private updateGapRecoveryMutex = new Mutex();
  private async recoverUpdateGap(source: string) {
    dGap("recovering from update gap [%s]", source);
    const release = await this.updateGapRecoveryMutex.acquire();
    try {
      let state = await this.getLocalState();
      while (true) {
        const difference = await this.invoke(new functions.UpdatesGetDifference({ pts: state.pts, date: state.date, qts: state.qts ?? 0 }));
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
            await this.storage.setState(difference.state[as](types.UpdatesState));
            dGap("recovered from update gap");
            break;
          } else if (difference instanceof types.UpdatesDifferenceSlice) {
            state = difference.intermediateState[as](types.UpdatesState);
          } else {
            UNREACHABLE();
          }
        } else if (difference instanceof types.UpdatesDifferenceTooLong) {
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
      release();
    }
  }

  private async recoverChannelUpdateGap(channelId: bigint, source: string) {
    dGapC("recovering channel update gap [%o, %s]", channelId, source);
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
          dGapC("recovered from update gap [%o, %s]", channelId, source);
          break;
        } else if (difference instanceof types.UpdatesChannelDifferenceTooLong) {
          // invalidate messages
          dGapC("received channelDifferenceTooLong");
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
          dGapC("processed channelDifferenceTooLong");
        } else if (difference instanceof types.UpdatesChannelDifferenceEmpty) {
          dGapC("there was no update gap");
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
      result instanceof types.ChatlistsChatlistUpdates
    ) {
      await this.processChats(result.chats);
      await this.processUsers(result.users);
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

  /**
   * Retrieve multiple messages.
   *
   * @param chatId The identifier of the chat to retrieve the messages from.
   * @param messageIds The identifiers of the messages to retrieve.
   */
  async getMessages(chatId_: ChatID, messageIds: number[]) {
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
    const messages = new Array<Omit<Message, "replyToMessage">>();
    for (const message_ of messages_) {
      messages.push(await constructMessage(message_, this[getEntity].bind(this), null, this[getStickerSetName].bind(this)));
    }
    return messages;
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
      }, true);
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
      const name = stickerSet[as](types.MessagesStickerSet).set[as](types.StickerSet).shortName;
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
}
