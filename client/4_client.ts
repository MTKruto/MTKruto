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

import { unreachable } from "../0_deps.ts";
import { AccessError, InputError } from "../0_errors.ts";
import { cleanObject, drop, getLogger, getRandomId, Logger, MaybePromise, mustPrompt, mustPromptOneOf, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { as, chatIdToPeerId, enums, functions, getChatIdPeerType, name, peerToChatId, types } from "../2_tl.ts";
import { Storage, StorageMemory } from "../3_storage.ts";
import { DC } from "../3_transport.ts";
import { BotCommand, BusinessConnection, Chat, ChatAction, ChatMember, ChatP, ConnectionState, constructUser, FileSource, ID, InactiveChat, InlineQueryResult, InputMedia, InputStoryContent, InviteLink, Message, MessageAnimation, MessageAudio, MessageContact, MessageDice, MessageDocument, MessageLocation, MessagePhoto, MessagePoll, MessageSticker, MessageText, MessageVenue, MessageVideo, MessageVideoNote, MessageVoice, NetworkStatistics, ParseMode, Poll, Reaction, Sticker, Story, Update, User } from "../3_types.ts";
import { APP_VERSION, DEVICE_MODEL, LANG_CODE, LANG_PACK, LAYER, MAX_CHANNEL_ID, MAX_CHAT_ID, PublicKeys, SYSTEM_LANG_CODE, SYSTEM_VERSION, USERNAME_TTL } from "../4_constants.ts";
import { AuthKeyUnregistered, ConnectionNotInited, FloodWait, Migrate, PasswordHashInvalid, PhoneNumberInvalid, SessionPasswordNeeded } from "../4_errors.ts";
import { _SendCommon, AddReactionParams, AnswerCallbackQueryParams, AnswerInlineQueryParams, AuthorizeUserParams, BanChatMemberParams, CreateInviteLinkParams, CreateStoryParams, DeleteMessageParams, DeleteMessagesParams, DownloadParams, EditMessageLiveLocationParams, EditMessageMediaParams, EditMessageParams, EditMessageReplyMarkupParams, ForwardMessagesParams, GetChatsParams, GetCreatedInviteLinksParams, GetHistoryParams, GetMyCommandsParams, PinMessageParams, ReplyParams, SearchMessagesParams, SendAnimationParams, SendAudioParams, SendContactParams, SendDiceParams, SendDocumentParams, SendLocationParams, SendMessageParams, SendPhotoParams, SendPollParams, SendStickerParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetChatMemberRightsParams, SetChatPhotoParams, SetMyCommandsParams, SetReactionsParams, StopPollParams } from "./0_params.ts";
import { checkPassword } from "./0_password.ts";
import { Api } from "./0_types.ts";
import { getUsername, isMtprotoFunction, resolve } from "./0_utilities.ts";
import { AccountManager } from "./1_account_manager.ts";
import { BotInfoManager } from "./1_bot_info_manager.ts";
import { BusinessConnectionManager } from "./1_business_connection_manager.ts";
import { ClientEncrypted } from "./1_client_encrypted.ts";
import { ClientPlain, ClientPlainParams } from "./1_client_plain.ts";
import { Composer as Composer_, NextFunction } from "./1_composer.ts";
import { FileManager } from "./1_file_manager.ts";
import { NetworkStatisticsManager } from "./1_network_statistics_manager.ts";
import { ReactionManager } from "./1_reaction_manager.ts";
import { UpdateManager } from "./1_update_manager.ts";
import { MessageManager } from "./2_message_manager.ts";
import { CallbackQueryManager } from "./3_callback_query_manager.ts";
import { ChatListManager } from "./3_chat_list_manager.ts";
import { InlineQueryManager } from "./3_inline_query_manager.ts";
import { StoryManager } from "./3_story_manager.ts";

export interface Context {
  /** The client that received the update. */
  client: Client;
  /** The currently authorized user. */
  me?: User;
  /** Resolves to `message`, `editedMessage`, or the `message` field of `callbackQuery`. */
  msg?: Message;
  /** Resolves to `msg?.chat`. TODO */
  chat?: ChatP;
  /** Resolves to the `from` field of `message`, `editedMessage`, `callbackQuery`, or `inlineQuery`. */
  from?: User;
  /** Resolves to `msg?.senderChat`. */
  senderChat?: ChatP;
  toJSON: () => Update;
  /** Context-aware alias for `client.sendMessage()`. */
  reply: (text: string, params?: Omit<SendMessageParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageText>;
  /** Context-aware alias for `client.sendPoll()`. */
  replyPoll: (question: string, options: [string, string, ...string[]], params?: Omit<SendPollParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessagePoll>;
  /** Context-aware alias for `client.sendPhoto()`. */
  replyPhoto: (photo: FileSource, params?: Omit<SendPhotoParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessagePhoto>;
  /** Context-aware alias for `client.sendDocument()`. */
  replyDocument: (document: FileSource, params?: Omit<SendDocumentParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageDocument>;
  /** Context-aware alias for `client.sendSticker()`. */
  replySticker: (sticker: FileSource, params?: Omit<SendStickerParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageSticker>;
  /** Context-aware alias for `client.sendLocation()`. */
  replyLocation: (latitude: number, longitude: number, params?: Omit<SendLocationParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageLocation>;
  /** Context-aware alias for `client.sendDice()`. */
  replyDice: (params?: Omit<SendDiceParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageDice>;
  /** Context-aware alias for `client.sendVenue()`. */
  replyVenue: (latitude: number, longitude: number, title: string, address: string, params?: Omit<SendVenueParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageVenue>;
  /** Context-aware alias for `client.sendContact()`. */
  replyContact: (firstName: string, number: string, params?: Omit<SendContactParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageContact>;
  /** Context-aware alias for `client.sendVideo()`. */
  replyVideo: (video: FileSource, params?: Omit<SendVideoParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageVideo>;
  /** Context-aware alias for `client.sendAnimation()`. */
  replyAnimation: (animation: FileSource, params?: Omit<SendAnimationParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageAnimation>;
  /** Context-aware alias for `client.sendVoice()`. */
  replyVoice: (voice: FileSource, params?: Omit<SendVoiceParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageVoice>;
  /** Context-aware alias for `client.sendAudio()`. */
  replyAudio: (audio: FileSource, params?: Omit<SendAudioParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageAudio>;
  /** Context-aware alias for `client.sendPoll()`. */
  replyVideoNote: (videoNote: FileSource, params?: Omit<SendVideoNoteParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageVideoNote>;
  /** Context-aware alias for `client.deleteMessage()`. */
  delete: () => Promise<void>;
  /** Context-aware alias for `client.forwardMessage()`. */
  forward: (to: ID, params?: ForwardMessagesParams) => Promise<this["msg"]>;
  /** Context-aware alias for `client.pinMessage()`. */
  pin: (params?: PinMessageParams) => Promise<void>;
  /** Context-aware alias for `client.unpinMessage()`. */
  unpin: (params?: PinMessageParams) => Promise<void>;
  /** Context-aware alias for `client.banChatMember()`. */
  banSender: (params?: BanChatMemberParams) => Promise<void>;
  /** Context-aware alias for `client.kickChatMember()`. */
  kickSender: () => Promise<void>;
  /** Context-aware alias for `client.setChatMemberRights()`. */
  setSenderRights: (params?: SetChatMemberRightsParams) => Promise<void>;
  /** Context-aware alias for `client.getChatAdministrators()`. */
  getChatAdministrators: () => Promise<ChatMember[]>;
  /** Context-aware alias for `client.setReactions()`. */
  react: (reactions: Reaction[], params?: SetReactionsParams) => Promise<void>;
  /** Context-aware alias for `client.sendChatAction()`. */
  sendChatAction: (action: ChatAction, params?: { messageThreadId?: number }) => Promise<void>;
  /** Context-aware alias for `client.editInlineMessageText()`. */
  editInlineMessageText: (text: string, params?: EditMessageParams) => Promise<void>;
  /** Context-aware alias for `client.editInlineMessageLiveLocation()`. */
  editInlineMessageLiveLocation: (latitude: number, longitude: number, params?: EditMessageLiveLocationParams) => Promise<void>;
  /** Context-aware alias for `client.editInlineMessageReplyMarkup()`. */
  editInlineMessageReplyMarkup: (params?: EditMessageReplyMarkupParams) => Promise<void>;
  /** Context-aware alias for `client.editMessageText()`. */
  editMessageText: (messageId: number, text: string, params?: EditMessageParams) => Promise<MessageText>;
  /** Context-aware alias for `client.editMessageLiveLocation()`. */
  editMessageLiveLocation: (messageId: number, latitude: number, longitude: number, params?: EditMessageLiveLocationParams) => Promise<MessageLocation>;
  /** Context-aware alias for `client.editMessageReplyMarkup()`. */
  editMessageReplyMarkup: (messageId: number, params?: EditMessageReplyMarkupParams) => Promise<Message>;
  /** Context-aware alias for `client.answerCallbackQuery()`. */
  answerCallbackQuery: (params?: AnswerCallbackQueryParams) => Promise<void>;
  /** Context-aware alias for `client.answerInlineQuery()`. */
  answerInlineQuery: (results: InlineQueryResult[], params?: AnswerInlineQueryParams) => Promise<void>;
  /** Context-aware alias for `client.getMessage()`. */
  getMessage: (messageId: number) => Promise<Message | null>;
  /** Context-aware alias for `client.getMessages()`. */
  getMessages: (messageIds: number[]) => Promise<Message[]>;
  /** Context-aware alias for `client.forwardMessage()`. */
  forwardMessage: (to: ID, messageId: number, params?: ForwardMessagesParams) => Promise<Message>;
  /** Context-aware alias for `client.forwardMessages()`. */
  forwardMessages: (to: ID, messageIds: number[], params?: ForwardMessagesParams) => Promise<Message[]>;
  /** Context-aware alias for `client.deleteMessage()`. */
  deleteMessage: (messageId: number, params?: DeleteMessagesParams) => Promise<void>;
  /** Context-aware alias for `client.deleteMessages()`. */
  deleteMessages: (messageIds: number[], params?: DeleteMessagesParams) => Promise<void>;
  /** Context-aware alias for `client.pinMessage()`. */
  pinMessage: (messageId: number, params?: PinMessageParams) => Promise<void>;
  /** Context-aware alias for `client.unpinMessage()`. */
  unpinMessage: (messageId: number) => Promise<void>;
  /** Context-aware alias for `client.unpinMessages()`. */
  unpinMessages: () => Promise<void>;
  /** Context-aware alias for `client.setAvailableReactions()`. */
  setAvailableReactions: (availableReactions: "none" | "all" | Reaction[]) => Promise<void>;
  /** Context-aware alias for `client.addReaction()`. */
  addReaction: (messageId: number, reaction: Reaction, params?: AddReactionParams) => Promise<void>;
  /** Context-aware alias for `client.removeReaction()`. */
  removeReaction: (messageId: number, reaction: Reaction) => Promise<void>;
  /** Context-aware alias for `client.setReactions()`. */
  setReactions: (messageId: number, reactions: Reaction[], params?: SetReactionsParams) => Promise<void>;
  /** Context-aware alias for `client.setChatPhoto()`. */
  setChatPhoto: (photo: FileSource, params?: SetChatPhotoParams) => Promise<void>;
  /** Context-aware alias for `client.deleteChatPhoto()`. */
  deleteChatPhoto: () => Promise<void>;
  /** Context-aware alias for `client.banChatMember()`. */
  banChatMember: (memberId: ID, params?: BanChatMemberParams) => Promise<void>;
  /** Context-aware alias for `client.unbanChatMember()`. */
  unbanChatMember: (memberId: ID) => Promise<void>;
  /** Context-aware alias for `client.kickChatMember()`. */
  kickChatMember: (memberId: ID) => Promise<void>;
  /** Context-aware alias for `client.setChatMemberRights()`. */
  setChatMemberRights: (memberId: ID, params?: SetChatMemberRightsParams) => Promise<void>;
  /** Context-aware alias for `client.deleteChatMemberMessages()`. */
  deleteChatMemberMessages: (userId: ID) => Promise<void>;
  /** Context-aware alias for `client.searchMessages()`. */
  searchMessages: (query: string, params?: SearchMessagesParams) => Promise<Message[]>;
  /** Context-aware alias for `client.setBoostsRequiredToCircumventRestrictions()`. */
  setBoostsRequiredToCircumventRestrictions: (boosts: number) => Promise<void>;
  /** Context-aware alias for `client.createInviteLink()`. */
  createInviteLink: (params?: CreateInviteLinkParams) => Promise<InviteLink>;
  /** Context-aware alias for `client.getCreatedInviteLinks()`. */
  getCreatedInviteLinks: (params?: GetCreatedInviteLinksParams) => Promise<InviteLink[]>;
  /** Context-aware alias for `client.leaveChat()`. */
  leave: () => Promise<void>;
  /** Context-aware alias for `client.blockUser()`. */
  block: () => Promise<void>;
  /** Context-aware alias for `client.unblockUser()`. */
  unblock: () => Promise<void>;
  /** Context-aware alias for `client.getChatMember()`. */
  getChatMember: (userId: ID) => Promise<ChatMember>;
  /** Context-aware alias for `client.setChatStickerSet()`. */
  setChatStickerSet: (setName: string) => Promise<void>;
  /** Context-aware alias for `client.deleteChatStickerSet()`. */
  deleteChatStickerSet: () => Promise<void>;
  /** Context-aware alias for `client.getBusinessConnection()`. */
  getBusinessConnection: () => Promise<BusinessConnection>;
}

export class Composer<C extends Context = Context> extends Composer_<C> {
}

function skipInvoke<C extends Context>(): InvokeErrorHandler<Client<C>> {
  return (_ctx, next) => next();
}
export interface InvokeErrorHandler<C> {
  (ctx: { client: C; error: unknown; function: types.Type | functions.Function<unknown>; n: number }, next: NextFunction<boolean>): MaybePromise<boolean>;
}

export const restartAuth = Symbol("restartAuth");
export const handleMigrationError = Symbol("handleMigrationError");

// global Client ID counter for logs
let id = 0;

const getEntity = Symbol();
const functionNamespaces = Object.entries(functions).filter(([, v]) => !(v instanceof Function)).map(([k]) => k);

export interface ClientParams extends ClientPlainParams {
  /** A parse mode to use when the `parseMode` parameter is not specified when sending or editing messages. Defauls to `ParseMode.None`. */
  parseMode?: ParseMode;
  /** The app_version parameter to be passed to initConnection when calling `authorize`. It is recommended that this parameter is changed if users are authorized. Defaults to "MTKruto" followed by this version of MTKruto. */
  appVersion?: string;
  /** The device_version parameter to be passed to initConnection when calling `authorize`. The default varies by the current runtime. */
  deviceModel?: string;
  /** The lang_code parameter to be passed to initConnection when calling `authorize`. Defaults to the runtime's language or `"en"`. */
  langCode?: string;
  /** The lang_pack parameter to be passed to initConnection when calling `authorize`. Defaults to an empty string. */
  langPack?: string;
  /** The system_lang_cde parameter to be passed to initConnection when calling `authorize`. Defaults to the runtime's language or `"en"`. */
  systemLangCode?: string;
  /** The system_version parameter to be passed to initConnection when calling `authorize`. The default varies by the current runtime. */
  systemVersion?: string;
  /** Whether to use default handlers. Defaults to `true`. */
  defaultHandlers?: boolean;
  /** Whether to ignore outgoing messages. Defaults to `true` for bots, and `false` for users. */
  ignoreOutgoing?: boolean;
  /** Default command prefixes. Defaults to `"/"` for bots and `"\"` for users. This option must be set separately for nested composers. */
  prefixes?: string | string[];
  /** Whether to guarantee that order-sensitive updates are delivered at least once before delivering next ones. Useful mainly for clients providing a user interface à la Telegram Desktop. Defaults to `false`. */
  guaranteeUpdateDelivery?: boolean;
  /** Whether to not handle updates received when the client was not running. Defaults to `true` for bots, and `false` for users. */
  dropPendingUpdates?: boolean;
  /** Whether to store messages. Defaults to `false`. */
  storeMessages?: boolean;
}
/**
 * An MTKruto client.
 */
export class Client<C extends Context = Context> extends Composer<C> {
  #client: ClientEncrypted;
  #guaranteeUpdateDelivery: boolean;
  #updateManager: UpdateManager;
  #networkStatisticsManager: NetworkStatisticsManager;
  #botInfoManager: BotInfoManager;
  #fileManager: FileManager;
  #reactionManager: ReactionManager;
  #businessConnectionManager: BusinessConnectionManager;
  #messageManager: MessageManager;
  #storyManager: StoryManager;
  #callbackQueryManager: CallbackQueryManager;
  #inlineQueryManager: InlineQueryManager;
  #chatListManager: ChatListManager;
  #accountManager: AccountManager;

  public readonly storage: Storage;
  public readonly messageStorage: Storage;
  #parseMode: ParseMode;

  public readonly appVersion: string;
  public readonly deviceModel: string;
  public readonly langCode: string;
  public readonly langPack: string;
  public readonly systemLangCode: string;
  public readonly systemVersion: string;
  readonly #publicKeys?: PublicKeys;
  readonly #ignoreOutgoing: boolean | null;
  #storeMessages: boolean;

  #Lauthorize: Logger;
  #LpingLoop: Logger;
  #LhandleMigrationError: Logger;
  #L$initConncetion: Logger;

  /**
   * Constructs the client.
   *
   * @param storage The storage provider to use. Defaults to memory storage. Passing a string constructs a memory storage with the string being the auth string.
   * @param apiId App's API ID from [my.telegram.org](https://my.telegram.org/apps). Defaults to 0 (unset).
   * @param apiHash App's API hash from [my.telegram.org/apps](https://my.telegram.org/apps). Defaults to empty string (unset).
   */
  constructor(
    storage?: Storage | string | null,
    public readonly apiId: number | null = 0,
    public readonly apiHash: string | null = "",
    params?: ClientParams,
  ) {
    super();
    this.#client = new ClientEncrypted(params);
    this.#client.stateChangeHandler = this.#stateChangeHandler.bind(this);
    this.#client.handlers = {
      serverSaltReassigned: async (newServerSalt) => {
        await this.storage.setServerSalt(newServerSalt);
      },
      updates: (updates, call, callback) => {
        this.#updateManager.processUpdates(updates, true, call, callback);
        this.#lastUpdates = new Date();
      },
      result: async (result, callback) => {
        await this.#updateManager.processResult(result);
        callback();
      },
      error: async (_err, source) => {
        switch (source) {
          case "deserialization":
            await this.#updateManager.recoverUpdateGap(source);
            break;
          case "decryption":
            try {
              await this.disconnect();
            } catch {
              //
            }
            await this.connect();
            await this.#updateManager.recoverUpdateGap(source);
            break;
        }
      },
    };

    this.storage = typeof storage === "string" ? new StorageMemory(storage) : storage ?? new StorageMemory();
    this.#storeMessages = params?.storeMessages ?? false;
    if (!this.#storeMessages) {
      this.messageStorage = new StorageMemory();
    } else {
      this.messageStorage = this.storage;
    }
    this.#parseMode = params?.parseMode ?? null;

    this.appVersion = params?.appVersion ?? APP_VERSION;
    this.deviceModel = params?.deviceModel ?? DEVICE_MODEL;
    this.langCode = params?.langCode ?? LANG_CODE;
    this.langPack = params?.langPack ?? LANG_PACK;
    this.systemLangCode = params?.systemLangCode ?? SYSTEM_LANG_CODE;
    this.systemVersion = params?.systemVersion ?? SYSTEM_VERSION;
    this.#publicKeys = params?.publicKeys;
    this.#ignoreOutgoing = params?.ignoreOutgoing ?? null;
    if (params?.prefixes) {
      this.prefixes = params?.prefixes;
    }
    this.#guaranteeUpdateDelivery = params?.guaranteeUpdateDelivery ?? false;

    const L = getLogger("Client").client(id++);
    this.#Lauthorize = L.branch("authorize");
    this.#LpingLoop = L.branch("pingLoop");
    this.#LhandleMigrationError = L.branch("[handleMigrationError]");
    this.#L$initConncetion = L.branch("#initConnection");

    const c = {
      id,
      api: this.api,
      invoke: async <T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>, R = T extends functions.Function<unknown> ? T["__R"] : void>(function_: T, businessConnectionId: string | undefined): Promise<R> => {
        if (businessConnectionId) {
          return await this.api.invokeWithBusinessConnection({ connection_id: businessConnectionId, query: function_ as functions.Function<unknown> }) as R;
        } else {
          return await this.invoke(function_) as R;
        }
      },
      storage: this.storage,
      messageStorage: this.messageStorage,
      guaranteeUpdateDelivery: this.#guaranteeUpdateDelivery,
      setConnectionState: this.#propagateConnectionState.bind(this),
      resetConnectionState: () => this.#stateChangeHandler(this.connected),
      getSelfId: this.#getSelfId.bind(this),
      getInputPeer: this.getInputPeer.bind(this),
      getInputChannel: this.getInputChannel.bind(this),
      getInputUser: this.getInputUser.bind(this),
      getEntity: this[getEntity].bind(this),
      handleUpdate: this.#queueHandleCtxUpdate.bind(this),
      parseMode: this.#parseMode,
      apiFactory: (dcId?: number) => {
        const client = new Client((!dcId || dcId == this.#client.dcId) ? this.storage : this.storage.branch(`download_client_${dcId}`), this.apiId, this.apiHash, {
          transportProvider: this.#client.transportProvider,
          appVersion: this.appVersion,
          deviceModel: this.deviceModel,
          langCode: this.langCode,
          langPack: this.langPack,
          systemLangCode: this.systemLangCode,
          systemVersion: this.systemVersion,
          cdn: true,
        });

        client.#client.serverSalt = this.#client.serverSalt;

        client.invoke.use(async (ctx, next) => {
          if (ctx.error instanceof AuthKeyUnregistered && dcId) {
            try {
              const exportedAuth = await this.api.auth.exportAuthorization({ dc_id: dcId });
              await client.api.auth.importAuthorization(exportedAuth);
              return true;
            } catch (err) {
              throw err;
            }
          } else {
            return await next();
          }
        });

        return {
          api: client.api,
          connect: async () => {
            await client.connect();

            if (dcId && dcId != this.#client.dcId) {
              let dc = String(dcId);
              if (this.#client.dcId < 0) {
                dc += "-test";
              }
              await client.setDc(dc as DC);
            }
          },
          disconnect: client.disconnect.bind(client),
        };
      },
      cdn: params?.cdn ?? false,
      ignoreOutgoing: this.#ignoreOutgoing,
      dropPendingUpdates: params?.dropPendingUpdates,
    };
    this.#updateManager = new UpdateManager(c);
    this.#networkStatisticsManager = new NetworkStatisticsManager(c);
    this.#botInfoManager = new BotInfoManager(c);
    this.#fileManager = new FileManager(c);
    this.#reactionManager = new ReactionManager(c);
    this.#businessConnectionManager = new BusinessConnectionManager(c);
    this.#messageManager = new MessageManager({ ...c, fileManager: this.#fileManager });
    this.#callbackQueryManager = new CallbackQueryManager({ ...c, messageManager: this.#messageManager });
    this.#storyManager = new StoryManager({ ...c, fileManager: this.#fileManager, messageManager: this.#messageManager });
    this.#inlineQueryManager = new InlineQueryManager({ ...c, messageManager: this.#messageManager });
    this.#chatListManager = new ChatListManager({ ...c, fileManager: this.#fileManager, messageManager: this.#messageManager });
    this.#accountManager = new AccountManager(c);
    this.#updateManager.setUpdateHandler(this.#handleUpdate.bind(this));

    const transportProvider = this.#client.transportProvider;
    this.#client.transportProvider = (params) => {
      const transport = transportProvider(params);
      transport.connection.callback = this.#networkStatisticsManager.getTransportReadWriteCallback();
      return transport;
    };

    if (params?.defaultHandlers ?? true) {
      this.on("connectionState", ({ connectionState }, next) => {
        drop((async () => {
          if (connectionState == "notConnected") {
            if (this.disconnected) {
              L.debug("not reconnecting");
              return;
            }
            let delay = 5;
            while (!this.connected) {
              L.debug("reconnecting");
              try {
                await this.connect();
                L.debug("reconnected");
                drop(this.#updateManager.recoverUpdateGap("reconnect"));
                break;
              } catch (err) {
                L.debug(`failed to reconnect, retrying in ${delay}:`, err);
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
          L.warning("sleeping for", error.seconds, "because of:", error);
          await new Promise((r) => setTimeout(r, 1000 * error.seconds));
          return true;
        } else {
          return next();
        }
      });
    }
  }

  // direct ClientEncrypted property proxies
  get connected(): boolean {
    return this.#client.connected;
  }
  get disconnected(): boolean {
    return this.#client.disconnected;
  }

  #namespaceProxies = (() => {
    // deno-lint-ignore no-explicit-any
    const proxies = {} as any;
    for (const name of functionNamespaces) {
      const ns = functions[name as keyof typeof functions];
      proxies[name] = new Proxy({}, {
        get: (_, key) => {
          if (key in ns) {
            // deno-lint-ignore no-explicit-any
            const func = ns[key as keyof typeof ns] as any;
            if (func instanceof Function) {
              // deno-lint-ignore no-explicit-any
              return (params: any) => {
                // deno-lint-ignore ban-ts-comment
                // @ts-ignore
                return this.invoke(new func(params));
              };
            } else {
              unreachable();
            }
          }
        },
        set() {
          return true;
        },
      });
    }
    return proxies;
  })();
  api: Api = new Proxy({} as unknown as Api, {
    get: (_, key) => {
      if (key in functions) {
        const func = functions[key as keyof typeof functions];
        if (func instanceof Function) {
          // deno-lint-ignore no-explicit-any
          return (params: any) => {
            // deno-lint-ignore ban-ts-comment
            // @ts-ignore
            return this.invoke(new func(params));
          };
        } else {
          return this.#namespaceProxies[key];
        }
      }
    },
    set() {
      return true;
    },
  });

  async #getApiId() {
    const apiId = this.apiId || await this.storage.getApiId();
    if (!apiId) {
      throw new Error("apiId not set");
    }
    return apiId;
  }

  #constructContext = async (update: Update) => {
    const msg = "message" in update ? update.message : "editedMessage" in update ? update.editedMessage : "callbackQuery" in update ? update.callbackQuery.message : undefined;
    const reactions = "messageInteractions" in update ? update.messageInteractions : undefined;
    const mustGetMsg = () => {
      if (msg !== undefined) {
        return { chatId: msg.chat.id, messageId: msg.id, businessConnectionId: msg.businessConnectionId, senderId: (msg.from ?? msg.senderChat)?.id };
      } else if (reactions !== undefined) {
        return { chatId: reactions.chatId, messageId: reactions.messageId };
      } else {
        unreachable();
      }
    };
    const mustGetUserId = () => {
      if (msg?.from) {
        return msg.from.id;
      } else if ("callbackQuery" in update) {
        return update.callbackQuery.from.id;
      } else if ("chosenInlineResult" in update) {
        return update.chosenInlineResult.from.id;
      } else {
        unreachable();
      }
    };
    const mustGetInlineMsgId = () => {
      if ("chosenInlineResult" in update) {
        if (update.chosenInlineResult.inlineMessageId) {
          return update.chosenInlineResult.inlineMessageId;
        }
      } else if ("callbackQuery" in update) {
        if (update.callbackQuery.inlineMessageId) {
          return update.callbackQuery.inlineMessageId;
        }
      }
      unreachable();
    };
    const chat_ = "messageReactions" in update ? update.messageReactions.chat : "messageReactionCount" in update ? update.messageReactionCount.chat : undefined;
    const chat = chat_ ?? msg?.chat;
    const from = "callbackQuery" in update ? update.callbackQuery.from : "inlineQuery" in update ? update.inlineQuery.from : "message" in update ? update.message.from : "editedMessage" in update ? update.editedMessage?.from : undefined;
    const senderChat = msg?.senderChat;
    const getReplyToMessageId = (quote: boolean | undefined, chatId: number, messageId: number) => {
      const isPrivate = chatId > 0;
      const shouldQuote = quote === undefined ? !isPrivate : quote;
      const replyToMessageId = shouldQuote ? messageId : undefined;
      return replyToMessageId;
    };
    const me = "connectionState" in update ? this.#lastGetMe : ("authorizationState" in update && !update.authorizationState.authorized) ? this.#lastGetMe : await this.#getMe();

    const context: Context = {
      ...update,
      client: this as unknown as Client,
      me: (me == null ? undefined : me) as C["me"],
      msg: msg as C["msg"],
      chat: chat as C["chat"],
      from: from as C["from"],
      senderChat: senderChat as C["senderChat"],
      get toJSON() {
        return () => update;
      },
      reply: (text, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendMessage(chatId, text, { ...params, replyToMessageId, businessConnectionId });
      },
      replyPoll: (question, options, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendPoll(chatId, question, options, { ...params, replyToMessageId, businessConnectionId });
      },
      replyPhoto: (photo, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendPhoto(chatId, photo, { ...params, replyToMessageId, businessConnectionId });
      },
      replyDocument: (document, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendDocument(chatId, document, { ...params, replyToMessageId, businessConnectionId });
      },
      replySticker: (sticker, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendSticker(chatId, sticker, { ...params, replyToMessageId, businessConnectionId });
      },
      replyContact: (firstName, number, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendContact(chatId, firstName, number, { ...params, replyToMessageId, businessConnectionId });
      },
      replyLocation: (latitude, longitude, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendLocation(chatId, latitude, longitude, { ...params, replyToMessageId, businessConnectionId });
      },
      replyDice: (params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendDice(chatId, { ...params, replyToMessageId, businessConnectionId });
      },
      replyVenue: (latitude, longitude, title, address, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendVenue(chatId, latitude, longitude, title, address, { ...params, replyToMessageId, businessConnectionId });
      },
      replyVideo: (video, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendVideo(chatId, video, { ...params, replyToMessageId, businessConnectionId });
      },
      replyAnimation: (document, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendAnimation(chatId, document, { ...params, replyToMessageId, businessConnectionId });
      },
      replyVoice: (document, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendVoice(chatId, document, { ...params, replyToMessageId, businessConnectionId });
      },
      replyAudio: (document, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendAudio(chatId, document, { ...params, replyToMessageId, businessConnectionId });
      },
      replyVideoNote: (videoNote, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
        return this.sendVideoNote(chatId, videoNote, { ...params, replyToMessageId, businessConnectionId });
      },
      delete: () => {
        const { chatId, messageId } = mustGetMsg();
        return this.deleteMessage(chatId, messageId);
      },
      forward: (to, params) => {
        const { chatId, messageId } = mustGetMsg();
        return this.forwardMessage(chatId, to, messageId, params) as unknown as ReturnType<C["forward"]>;
      },
      pin: (params) => {
        const { chatId, messageId } = mustGetMsg();
        return this.pinMessage(chatId, messageId, params);
      },
      unpin: () => {
        const { chatId, messageId } = mustGetMsg();
        return this.unpinMessage(chatId, messageId);
      },
      banSender: (params) => {
        const { chatId, senderId } = mustGetMsg();
        if (!senderId) {
          unreachable();
        }
        return this.banChatMember(chatId, senderId, params);
      },
      kickSender: () => {
        const { chatId, senderId } = mustGetMsg();
        if (!senderId) {
          unreachable();
        }
        return this.kickChatMember(chatId, senderId);
      },
      setSenderRights: (params) => {
        const { chatId, senderId } = mustGetMsg();
        if (!senderId) {
          unreachable();
        }
        return this.setChatMemberRights(chatId, senderId, params);
      },
      getChatAdministrators: () => {
        const { chatId } = mustGetMsg();
        return this.getChatAdministrators(chatId);
      },
      react: (reactions, params) => {
        const { chatId, messageId } = mustGetMsg();
        return this.setReactions(chatId, messageId, reactions, params);
      },
      answerCallbackQuery: (params) => {
        if (!("callbackQuery" in update)) {
          unreachable();
        }
        return this.answerCallbackQuery(update.callbackQuery.id, params);
      },
      answerInlineQuery: (results, params) => {
        if (!("inlineQuery" in update)) {
          unreachable();
        }
        return this.answerInlineQuery(update.inlineQuery.id, results, params);
      },
      sendChatAction: (chatAction, params) => {
        const { chatId } = mustGetMsg();
        return this.sendChatAction(chatId, chatAction, params);
      },
      editInlineMessageText: (text, params) => {
        const inlineMessageId = mustGetInlineMsgId();
        return this.editInlineMessageText(inlineMessageId, text, params);
      },
      editInlineMessageLiveLocation: (latitude, longitude, params) => {
        const inlineMessageId = mustGetInlineMsgId();
        return this.editInlineMessageLiveLocation(inlineMessageId, latitude, longitude, params);
      },
      editInlineMessageReplyMarkup: (params) => {
        const inlineMessageId = mustGetInlineMsgId();
        return this.editInlineMessageReplyMarkup(inlineMessageId, params);
      },
      editMessageText: (messageId, text, params) => {
        const { chatId } = mustGetMsg();
        return this.editMessageText(chatId, messageId, text, params);
      },
      editMessageLiveLocation: (messageId, latitude, longitude, params) => {
        const { chatId } = mustGetMsg();
        return this.editMessageLiveLocation(chatId, messageId, latitude, longitude, params);
      },
      editMessageReplyMarkup: (messageId, params) => {
        const { chatId } = mustGetMsg();
        return this.editMessageReplyMarkup(chatId, messageId, params);
      },
      getMessage: (messageId) => {
        const { chatId } = mustGetMsg();
        return this.getMessage(chatId, messageId);
      },
      getMessages: (messageIds) => {
        const { chatId } = mustGetMsg();
        return this.getMessages(chatId, messageIds);
      },
      forwardMessage: (to, messageId, params) => {
        const { chatId } = mustGetMsg();
        return this.forwardMessage(chatId, to, messageId, params);
      },
      forwardMessages: (to, messageIds, params) => {
        const { chatId } = mustGetMsg();
        return this.forwardMessages(chatId, to, messageIds, params);
      },
      deleteMessage: (messageId, params) => {
        const { chatId } = mustGetMsg();
        return this.deleteMessage(chatId, messageId, params);
      },
      deleteMessages: (messageIds, params) => {
        const { chatId } = mustGetMsg();
        return this.deleteMessages(chatId, messageIds, params);
      },
      pinMessage: (messageId, params) => {
        const { chatId } = mustGetMsg();
        return this.pinMessage(chatId, messageId, params);
      },
      unpinMessage: (messageId) => {
        const { chatId } = mustGetMsg();
        return this.unpinMessage(chatId, messageId);
      },
      unpinMessages: () => {
        const { chatId } = mustGetMsg();
        return this.unpinMessages(chatId);
      },
      setAvailableReactions: (availableReactions) => {
        const { chatId } = mustGetMsg();
        return this.setAvailableReactions(chatId, availableReactions);
      },
      addReaction: (messageId, reaction, params) => {
        const { chatId } = mustGetMsg();
        return this.addReaction(chatId, messageId, reaction, params);
      },
      removeReaction: (messageId, reaction) => {
        const { chatId } = mustGetMsg();
        return this.removeReaction(chatId, messageId, reaction);
      },
      setReactions: (messageId, reactions, params) => {
        const { chatId } = mustGetMsg();
        return this.setReactions(chatId, messageId, reactions, params);
      },
      setChatPhoto: (photo, params) => {
        const { chatId } = mustGetMsg();
        return this.setChatPhoto(chatId, photo, params);
      },
      deleteChatPhoto: () => {
        const { chatId } = mustGetMsg();
        return this.deleteChatPhoto(chatId);
      },
      banChatMember: (memberId, params) => {
        const { chatId } = mustGetMsg();
        return this.banChatMember(chatId, memberId, params);
      },
      unbanChatMember: (memberId) => {
        const { chatId } = mustGetMsg();
        return this.unbanChatMember(chatId, memberId);
      },
      kickChatMember: (memberId) => {
        const { chatId } = mustGetMsg();
        return this.kickChatMember(chatId, memberId);
      },
      setChatMemberRights: (memberId, params) => {
        const { chatId } = mustGetMsg();
        return this.setChatMemberRights(chatId, memberId, params);
      },
      deleteChatMemberMessages: (userId) => {
        const { chatId } = mustGetMsg();
        return this.deleteChatMemberMessages(chatId, userId);
      },
      searchMessages: (query, params) => {
        const { chatId } = mustGetMsg();
        return this.searchMessages(chatId, query, params);
      },
      setBoostsRequiredToCircumventRestrictions: (boosts) => {
        const { chatId } = mustGetMsg();
        return this.setBoostsRequiredToCircumventRestrictions(chatId, boosts);
      },
      createInviteLink: (params) => {
        const { chatId } = mustGetMsg();
        return this.createInviteLink(chatId, params);
      },
      getCreatedInviteLinks: (params) => {
        const { chatId } = mustGetMsg();
        return this.getCreatedInviteLinks(chatId, params);
      },
      leave: () => {
        const { chatId } = mustGetMsg();
        return this.leaveChat(chatId);
      },
      block: () => {
        return this.blockUser(mustGetUserId());
      },
      unblock: () => {
        return this.unblockUser(mustGetUserId());
      },
      getChatMember: (userId) => {
        const { chatId } = mustGetMsg();
        return this.getChatMember(chatId, userId);
      },
      setChatStickerSet: (setName) => {
        const { chatId } = mustGetMsg();
        return this.setChatStickerSet(chatId, setName);
      },
      deleteChatStickerSet: () => {
        const { chatId } = mustGetMsg();
        return this.deleteChatStickerSet(chatId);
      },
      getBusinessConnection: () => {
        const { businessConnectionId } = mustGetMsg();
        if (!businessConnectionId) {
          unreachable();
        }
        return this.getBusinessConnection(businessConnectionId);
      },
    };

    return cleanObject(context as C);
  };

  #propagateConnectionState(connectionState: ConnectionState) {
    this.#queueHandleCtxUpdate({ connectionState });
    this.#lastPropagatedConnectionState = connectionState;
  }

  #lastPropagatedConnectionState: ConnectionState | null = null;
  #stateChangeHandler: (connected: boolean) => void = ((connected: boolean) => {
    const connectionState = connected ? "ready" : "notConnected";
    if (this.connected == connected && this.#lastPropagatedConnectionState != connectionState) {
      this.#propagateConnectionState(connectionState);
    }
  }).bind(this);

  /**
   * Sets the DC and resets the auth key stored in the session provider
   * if the stored DC was not the same as the `dc` parameter.
   *
   * @param dc The DC to change to.
   */
  async setDc(dc: DC) {
    await this.#initStorage();
    if (await this.storage.getDc() != dc) {
      await this.storage.setDc(dc);
      await this.storage.setAuthKey(null);
      await this.storage.getAuthKey();
    }
    this.#client.setDc(dc);
  }

  #storageInited = false;
  async #initStorage() {
    if (!this.#storageInited) {
      await this.storage.initialize();
      if (!this.#guaranteeUpdateDelivery) {
        await this.storage.deleteUpdates();
      }
      this.#storageInited = true;
    }
  }

  /**
   * Loads the session if `setDc` was not called, initializes and connnects
   * a `ClientPlain` to generate auth key if there was none, and connects the client.
   * Before establishing the connection, the session is saved.
   */
  async connect() {
    await this.#initStorage();
    const [authKey, dc] = await Promise.all([this.storage.getAuthKey(), this.storage.getDc()]);
    if (authKey != null && dc != null) {
      await this.#client.setAuthKey(authKey);
      await this.#client.setDc(dc); // TODO: remove await
      if (this.#client.serverSalt == 0n) {
        this.#client.serverSalt = await this.storage.getServerSalt() ?? 0n;
      }
    } else {
      const plain = new ClientPlain({ initialDc: this.#client.initialDc, transportProvider: this.#client.transportProvider, cdn: this.#client.cdn, publicKeys: this.#publicKeys });
      const dc = await this.storage.getDc();
      if (dc != null) {
        plain.setDc(dc);
        this.#client.setDc(dc);
      }
      await plain.connect();
      const [authKey, serverSalt] = await plain.createAuthKey();
      drop(plain.disconnect());
      await this.#client.setAuthKey(authKey);
      this.#client.serverSalt = serverSalt;
    }
    await this.#client.connect();
    await Promise.all([this.storage.setAuthKey(this.#client.authKey), this.storage.setDc(this.#client.dc), this.storage.setServerSalt(this.#client.serverSalt)]);
  }

  async reconnect(dc?: DC) {
    await this.disconnect();
    if (dc) {
      await this.setDc(dc);
    }
    await this.connect();
  }

  async [handleMigrationError](err: Migrate) {
    let newDc = String(err.dc);
    if (Math.abs(this.#client.dcId) >= 10_000) {
      newDc += "-test";
    }
    await this.reconnect(newDc as DC);
    this.#LhandleMigrationError.debug(`migrated to DC${newDc}`);
  }

  #connectionInited = false;
  async disconnect() {
    this.#connectionInited = false;
    await this.#client.disconnect();
    this.#pingLoopAbortController?.abort();
  }

  #lastPropagatedAuthorizationState: boolean | null = null;
  async #propagateAuthorizationState(authorized: boolean) {
    if (this.#lastPropagatedAuthorizationState != authorized) {
      await this.middleware()(await this.#constructContext({ authorizationState: { authorized } }), resolve);
      this.#lastPropagatedAuthorizationState = authorized;
    }
  }

  async #getSelfId() {
    const id = await this.storage.getAccountId();
    if (id == null) {
      throw new Error("Unauthorized");
    }
    return id;
  }

  /**
   * Authorizes the client with one of the following:
   *
   * - Bot token (`string`)
   * - User authorization handlers (`AuthorizeUserParams`)
   *
   * if the current auth key doesn't throw AUTH_KEY_UNREGISTERED when calling [updates.getState](1).
   *
   * Notes:
   * 1. Requires the `apiId` and `apiHash` paramters to be passed when constructing the client.
   * 2. Reconnects the client to the appropriate DC in case of MIGRATE_X errors.
   *
   * [1]: https://core.telegram.org/method/updates.getState
   */
  async authorize(params?: string | AuthorizeUserParams) {
    try {
      await this.#updateManager.fetchState("authorize");
      await this.#propagateAuthorizationState(true);
      drop(this.#updateManager.recoverUpdateGap("authorize"));
      this.#Lauthorize.debug("already authorized");
      return;
    } catch (err) {
      if (!(err instanceof AuthKeyUnregistered)) {
        throw err;
      }
    }

    const apiId = await this.#getApiId();
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

    this.#Lauthorize.debug("authorizing with", typeof params === "string" ? "bot token" : params instanceof types.auth.ExportedAuthorization ? "exported authorization" : "AuthorizeUserParams");

    if (typeof params === "string") {
      while (true) {
        try {
          const auth = await this.api.auth.importBotAuthorization({ api_id: apiId, api_hash: this.apiHash, bot_auth_token: params, flags: 0 });
          await this.storage.setAccountId(Number(auth[as](types.auth.Authorization).user.id));
          await this.storage.setAccountType("bot");
          break;
        } catch (err) {
          if (err instanceof Migrate) {
            await this[handleMigrationError](err);
            continue;
          } else {
            throw err;
          }
        }
      }
      this.#Lauthorize.debug("authorized as bot");
      await this.#propagateAuthorizationState(true);
      await this.#updateManager.fetchState("authorize");
      return;
    }

    auth: while (true) {
      try {
        let phone: string;
        let sentCode: types.auth.SentCode;
        while (true) {
          try {
            phone = typeof params.phone === "string" ? params.phone : await params.phone();
            const sendCode = () =>
              this.api.auth.sendCode({
                phone_number: phone,
                api_id: this.apiId!,
                api_hash: this.apiHash!,
                settings: new types.CodeSettings(),
              }).then((v) => v[as](types.auth.SentCode));
            try {
              sentCode = await sendCode();
            } catch (err) {
              if (err instanceof Migrate) {
                await this[handleMigrationError](err);
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
        this.#Lauthorize.debug("verification code sent");

        let err: unknown;
        code: while (true) {
          const code = typeof params.code === "string" ? params.code : await params.code();
          try {
            const auth = await this.api.auth.signIn({
              phone_number: phone,
              phone_code: code,
              phone_code_hash: sentCode.phone_code_hash,
            });
            await this.storage.setAccountId(Number(auth[as](types.auth.Authorization).user.id));
            await this.storage.setAccountType("user");
            this.#Lauthorize.debug("authorized as user");
            await this.#propagateAuthorizationState(true);
            await this.#updateManager.fetchState("authorize");
            return;
          } catch (err_) {
            if (err_ instanceof types.Rpc_error && err_.error_message == "PHONE_CODE_INVALID") {
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
          const ap = await this.api.account.getPassword();
          if (!(ap.current_algo instanceof types.PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow)) {
            throw new Error(`Handling ${ap.current_algo?.[name]} not implemented`);
          }
          try {
            const password = typeof params.password === "string" ? params.password : await params.password(ap.hint ?? null);
            const input = await checkPassword(password, ap);

            const auth = await this.api.auth.checkPassword({ password: input });
            await this.storage.setAccountId(Number(auth[as](types.auth.Authorization).user.id));
            await this.storage.setAccountType("user");
            this.#Lauthorize.debug("authorized as user");
            await this.#propagateAuthorizationState(true);
            await this.#updateManager.fetchState("authorize");
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
   * Same as calling `.connect()` followed by `.authorize(params)`.
   */
  async start(params?: string | AuthorizeUserParams) {
    await this.connect();
    await this.authorize(params);
  }

  #pingLoopStarted = false;
  #pingLoopAbortController: AbortController | null = null;
  #pingInterval = 60 * 1_000; // 60 seconds
  #lastUpdates = new Date();
  #startPingLoop() {
    drop(this.#pingLoop());
  }
  async #pingLoop() {
    this.#pingLoopAbortController = new AbortController();
    while (this.connected) {
      try {
        await new Promise((resolve, reject) => {
          const timeout = setTimeout(resolve, this.#pingInterval);
          this.#pingLoopAbortController!.signal.onabort = () => {
            reject(this.#pingLoopAbortController?.signal.reason);
            clearTimeout(timeout);
          };
        });
        if (!this.connected) {
          continue;
        }
        this.#pingLoopAbortController.signal.throwIfAborted();
        await this.api.ping_delay_disconnect({ ping_id: getRandomId(), disconnect_delay: this.#pingInterval / 1_000 + 15 });
        if (Date.now() - this.#lastUpdates.getTime() >= 15 * 60 * 1_000) {
          drop(this.#updateManager.recoverUpdateGap("lastUpdates"));
        }
      } catch (err) {
        if (!this.connected) {
          continue;
        }
        this.#LpingLoop.error(err);
      }
    }
  }

  async #invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T): Promise<T extends functions.Function<unknown> ? T["__R"] : void>;
  async #invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait: true): Promise<void>;
  async #invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait?: boolean): Promise<T | void> {
    let n = 1;
    while (true) {
      try {
        if (function_ instanceof functions.Function && !this.#connectionInited && !isMtprotoFunction(function_)) {
          const result = await this.#client.invoke(
            new functions.initConnection({
              api_id: await this.#getApiId(),
              app_version: this.appVersion,
              device_model: this.deviceModel,
              lang_code: this.langCode,
              lang_pack: this.langPack,
              query: new functions.invokeWithLayer({
                layer: LAYER,
                query: function_,
              }),
              system_lang_code: this.systemLangCode,
              system_version: this.systemVersion,
            }),
            noWait,
          );
          this.#connectionInited = true;
          this.#L$initConncetion.debug("connection inited");
          return result as T | void;
        } else {
          return await this.#client.invoke(function_, noWait);
        }
      } catch (err) {
        if (err instanceof ConnectionNotInited) {
          this.#connectionInited = false;
          continue;
        } else if (await this.#handleInvokeError(Object.freeze({ client: this, error: err, function: function_, n: n++ }), () => Promise.resolve(false))) {
          continue;
        } else {
          throw err;
        }
      } finally {
        if (!this.#pingLoopStarted) {
          this.#startPingLoop();
          this.#pingLoopStarted = true;
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
  invoke: {
    <T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T): Promise<T extends functions.Function<unknown> ? T["__R"] : void>;
    <T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait: true): Promise<void>;
    <T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait?: boolean): Promise<T | void>;
    use(handler: InvokeErrorHandler<Client<C>>): void;
  } = Object.assign(
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
  send<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T): Promise<void> {
    return this.invoke(function_, true);
  }

  exportAuthString(): Promise<string> {
    return this.storage.exportAuthString(this.apiId);
  }

  async importAuthString(authString: string) {
    await this.#initStorage();
    await this.storage.importAuthString(authString);
  }

  async #getUserAccessHash(userId: bigint) {
    const users = await this.api.users.getUsers({ id: [new types.InputUser({ user_id: userId, access_hash: 0n })] });
    const user = users[0]?.[as](types.User);
    if (user) {
      await this.messageStorage.setEntity(user);
    }
    return user?.access_hash ?? 0n;
  }

  async #getChannelAccessHash(channelId: bigint) {
    const channels = await this.api.channels.getChannels({ id: [new types.InputChannel({ channel_id: channelId, access_hash: 0n })] });
    const channel = channels.chats[0][as](types.Channel);
    if (channel) {
      await this.messageStorage.setEntity(channel);
    }
    return channel?.access_hash ?? 0n;
  }

  /**
   * Get a chat's inputPeer. Useful when calling API functions directly.
   *
   * @param id The identifier of the chat.
   */
  async getInputPeer(id: ID): Promise<enums.InputPeer> {
    if (id === "me" || id == await this.#getSelfId()) {
      return new types.InputPeerSelf();
    }
    const inputPeer = await this.#getInputPeerInner(id);
    if ((inputPeer instanceof types.InputPeerUser || inputPeer instanceof types.InputPeerChannel && inputPeer.access_hash == 0n) && await this.storage.getAccountType() == "bot") {
      if ("channel_id" in inputPeer) {
        inputPeer.access_hash = await this.#getChannelAccessHash(inputPeer.channel_id);
      } else {
        inputPeer.access_hash = await this.#getUserAccessHash(inputPeer.user_id);
      }
    }
    if ((inputPeer instanceof types.InputPeerUser || inputPeer instanceof types.InputPeerChannel) && inputPeer.access_hash == 0n && await this.storage.getAccountType() == "user") {
      throw new AccessError(`Cannot access the chat ${id} because there is no access hash for it.`);
    }
    return inputPeer;
  }

  /**
   * Get a channel or a supergroup's inputChannel. Useful when calling API functions directly.
   *
   * @param id The identifier of the channel or the supergroup.
   */
  async getInputChannel(id: ID): Promise<types.InputChannel> {
    const inputPeer = await this.getInputPeer(id);
    if (!(inputPeer instanceof types.InputPeerChannel)) {
      throw new TypeError(`The chat ${id} is not a channel neither a supergroup.`);
    }
    return new types.InputChannel(inputPeer);
  }

  /**
   * Get a user's inputUser. Useful when calling API functions directly.
   *
   * @param id The identifier of the user.
   */
  async getInputUser(id: ID): Promise<types.InputUser> {
    const inputPeer = await this.getInputPeer(id);
    if (!(inputPeer instanceof types.InputPeerUser)) {
      throw new TypeError(`The chat ${id} is not a private chat.`);
    }
    return new types.InputUser(inputPeer);
  }

  async #getInputPeerInner(id: ID) {
    const idn = Number(id);
    if (!isNaN(idn)) {
      id = idn;
    }
    if (typeof id === "string") {
      id = getUsername(id);
      let resolvedId = 0;
      const maybeUsername = await this.messageStorage.getUsername(id);
      if (maybeUsername != null && Date.now() - maybeUsername[1].getTime() < USERNAME_TTL) {
        const [id] = maybeUsername;
        resolvedId = id;
      } else {
        const resolved = await this.api.contacts.resolveUsername({ username: id });
        await this.#updateManager.processChats(resolved.chats);
        await this.#updateManager.processUsers(resolved.users);
        if (resolved.peer instanceof types.PeerUser) {
          resolvedId = peerToChatId(resolved.peer);
        } else if (resolved.peer instanceof types.PeerChannel) {
          resolvedId = peerToChatId(resolved.peer);
        } else {
          unreachable();
        }
      }
      const resolvedIdType = getChatIdPeerType(resolvedId);
      if (resolvedIdType == "user") {
        const accessHash = await this.messageStorage.getUserAccessHash(resolvedId);
        return new types.InputPeerUser({ user_id: chatIdToPeerId(resolvedId), access_hash: accessHash ?? 0n });
      } else if (resolvedIdType == "channel") {
        const accessHash = await this.messageStorage.getChannelAccessHash(resolvedId);
        return new types.InputPeerChannel({ channel_id: chatIdToPeerId(resolvedId), access_hash: accessHash ?? 0n });
      } else {
        unreachable();
      }
    } else if (id > 0) {
      const accessHash = await this.messageStorage.getUserAccessHash(id);
      return new types.InputPeerUser({ user_id: chatIdToPeerId(id), access_hash: accessHash ?? 0n });
    } else if (-MAX_CHAT_ID <= id) {
      return new types.InputPeerChat({ chat_id: BigInt(Math.abs(id)) });
    } else if (ZERO_CHANNEL_ID - MAX_CHANNEL_ID <= id && id != ZERO_CHANNEL_ID) {
      const accessHash = await this.messageStorage.getChannelAccessHash(id);
      return new types.InputPeerChannel({ channel_id: chatIdToPeerId(id), access_hash: accessHash ?? 0n });
    } else {
      throw new InputError("The ID is of an format unknown.");
    }
  }

  private [getEntity](peer: types.PeerUser): Promise<types.User | null>;
  private [getEntity](peer: types.PeerChat): Promise<types.Chat | types.ChatForbidden | null>;
  private [getEntity](peer: types.PeerChannel): Promise<types.Channel | types.ChannelForbidden | null>;
  private [getEntity](peer: types.PeerUser | types.PeerChat | types.PeerChannel): Promise<types.User | types.Chat | types.ChatForbidden | types.Channel | types.ChannelForbidden | null>;
  private async [getEntity](peer: types.PeerUser | types.PeerChat | types.PeerChannel) {
    const id = peerToChatId(peer);
    const entity = await this.messageStorage.getEntity(id);
    if (entity == null && await this.storage.getAccountType() == "bot" && peer instanceof types.PeerUser || peer instanceof types.PeerChannel) {
      await this.getInputPeer(id);
    } else {
      return entity;
    }
    return await this.messageStorage.getEntity(id);
  }

  async #handleCtxUpdate(update: Update) {
    await this.middleware()(await this.#constructContext(update), resolve);
  }

  #queueHandleCtxUpdate(update: Update) {
    this.#updateManager.getHandleUpdateQueue(UpdateManager.MAIN_BOX_ID).add(async () => {
      await this.#handleCtxUpdate(update);
    });
  }

  async #handleUpdate(update: enums.Update) {
    const promises = new Array<Promise<unknown>>();
    if (update instanceof types.UpdateUserName) {
      await this.messageStorage.updateUsernames(Number(update.user_id), update.usernames.map((v) => v.username));
      const peer = new types.PeerUser(update);
      const entity = await this[getEntity](peer);
      if (entity != null) {
        entity.usernames = update.usernames;
        entity.first_name = update.first_name;
        entity.last_name = update.last_name;
        await this.messageStorage.setEntity(entity);
      }
    }

    if (MessageManager.canHandleUpdate(update)) {
      const update_ = await this.#messageManager.handleUpdate(update);
      if (update_) {
        promises.push((async () => {
          try {
            await this.#handleCtxUpdate(update_);
          } finally {
            if ("deletedMessages" in update_) {
              for (const { chatId, messageId } of update_.deletedMessages) {
                await this.messageStorage.setMessage(chatId, messageId, null);
                await this.#chatListManager.reassignChatLastMessage(chatId);
              }
            }
          }
        })());
      }
    }

    if (CallbackQueryManager.canHandleUpdate(update)) {
      promises.push(this.#handleCtxUpdate(await this.#callbackQueryManager.handleUpdate(update)));
    }

    if (InlineQueryManager.canHandleUpdate(update)) {
      promises.push(this.#handleCtxUpdate(await this.#inlineQueryManager.handleUpdate(update)));
    }

    if (ReactionManager.canHandleUpdate(update)) {
      const upd = await this.#reactionManager.handleUpdate(update);
      if (upd) {
        promises.push(this.#handleCtxUpdate(upd));
      }
    }

    if (ChatListManager.canHandleUpdate(update)) {
      await this.#chatListManager.handleUpdate(update);
    }

    if (StoryManager.canHandleUpdate(update)) {
      const upd = await this.#storyManager.handleUpdate(update);
      if (upd) {
        promises.push(this.#handleCtxUpdate(upd));
      }
    }

    if (BusinessConnectionManager.canHandleUpdate(update)) {
      promises.push(this.#handleCtxUpdate(await this.#businessConnectionManager.handleUpdate(update)));
    }

    return () => Promise.all(promises);
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

  //
  // ========================= ACCOUNT ========================= //
  //

  /**
   * Get information on the currently authorized user.
   *
   * @method ac
   */
  async getMe(): Promise<User> {
    let user_ = await this[getEntity](new types.PeerUser({ user_id: BigInt(await this.#getSelfId()) }));
    if (user_ == null) {
      const users = await this.api.users.getUsers({ id: [new types.InputUserSelf()] });
      user_ = users[0][as](types.User);
      await this.messageStorage.setEntity(user_);
    }
    const user = constructUser(user_);
    this.#lastGetMe = user;
    return user;
  }

  /**
   * Show a username in the current account, a bot account, a supergroup, or a channel's profile. User-only.
   *
   * @method ac
   * @param id `"me"`, a bot ID, a supergroup ID, or a channel ID.
   * @param username The username to show.
   */
  async showUsername(id: ID, username: string) {
    await this.#accountManager.showUsername(id, username);
  }

  /**
   * Hide a username from the current account, a bot account, a supergroup, or a channel's profile. User-only.
   *
   * @method ac
   * @param id `"me"`, a bot ID, a supergroup ID, or a channel ID.
   * @param username The username to hide.
   */
  async hideUsername(id: ID, username: string) {
    await this.#accountManager.hideUsername(id, username);
  }

  /**
   * Reorder the usernames of the current account, a bot account, a supergroup, or a channel's profile. User-only.
   *
   * @method ac
   * @param id `"me"`, a bot ID, a supergroup ID, or a channel ID.
   * @param order The new order to use.
   * @returns Whether the order was changed.
   */
  async reorderUsernames(id: ID, order: string[]): Promise<boolean> {
    return await this.#accountManager.reorderUsernames(id, order);
  }

  /**
   * Hide all usernames from the a supergroup or a channel's profile. User-only.
   *
   * @method ac
   * @param id A supergroup ID or a channel ID.
   */
  async hideUsernames(id: ID): Promise<boolean> {
    return await this.#accountManager.hideUsernames(id);
  }

  /**
   * Get a business connection. Bot-only.
   *
   * @method ac
   * @param id The identifier of the business connection.
   */
  async getBusinessConnection(id: string): Promise<BusinessConnection> {
    return await this.#businessConnectionManager.getBusinessConnection(id);
  }

  //
  // ========================= MESSAGES ========================= //
  //

  /**
   * Send a text message.
   *
   * @method ms
   * @param chatId The chat to send the message to.
   * @param text The message's text.
   * @returns The sent text message.
   */
  async sendMessage(chatId: ID, text: string, params?: SendMessageParams): Promise<MessageText> {
    return await this.#messageManager.sendMessage(chatId, text, params);
  }

  /**
   * Send a photo.
   *
   * @method ms
   * @param chatId The chat to send the photo to.
   * @param photo The photo to send.
   * @returns The sent photo.
   */
  async sendPhoto(chatId: ID, photo: FileSource, params?: SendPhotoParams): Promise<MessagePhoto> {
    return await this.#messageManager.sendPhoto(chatId, photo, params);
  }

  /**
   * Send a document.
   *
   * @method ms
   * @param chatId The chat to send the document to.
   * @param document The document to send.
   * @returns The sent document.
   */
  async sendDocument(chatId: ID, document: FileSource, params?: SendDocumentParams): Promise<MessageDocument> {
    return await this.#messageManager.sendDocument(chatId, document, params);
  }

  /**
   * Send a sticker.
   *
   * @method ms
   * @param chatId The chat to send the sticker to.
   * @param document The sticker to send.
   * @returns The sent sticker.
   */
  async sendSticker(chatId: ID, sticker: FileSource, params?: SendStickerParams): Promise<MessageSticker> {
    return await this.#messageManager.sendSticker(chatId, sticker, params);
  }

  /**
   * Send a video.
   *
   * @method ms
   * @param chatId The chat to send the video to.
   * @param video The video to send.
   * @returns The sent video.
   */
  async sendVideo(chatId: ID, video: FileSource, params?: SendVideoParams): Promise<MessageVideo> {
    return await this.#messageManager.sendVideo(chatId, video, params);
  }

  /**
   * Send an animation.
   *
   * @method ms
   * @param chatId The chat to send the animation to.
   * @param animation The animation to send.
   * @returns The sent animation.
   */
  async sendAnimation(chatId: ID, animation: FileSource, params?: SendAnimationParams): Promise<MessageAnimation> {
    return await this.#messageManager.sendAnimation(chatId, animation, params);
  }

  /**
   * Send a voice message.
   *
   * @method ms
   * @param chatId The chat to send the voice message to.
   * @param voice The voice to send.
   * @returns The sent voice message.
   */
  async sendVoice(chatId: ID, voice: FileSource, params?: SendVoiceParams): Promise<MessageVoice> {
    return await this.#messageManager.sendVoice(chatId, voice, params);
  }

  /**
   * Send an audio file.
   *
   * @method ms
   * @param chatId The chat to send the audio file to.
   * @param audio The audio to send.
   * @returns The sent audio filr.
   */
  async sendAudio(chatId: ID, audio: FileSource, params?: SendAudioParams): Promise<MessageAudio> {
    return await this.#messageManager.sendAudio(chatId, audio, params);
  }

  /**
   * Send a video note.
   *
   * @method ms
   * @param chatId The chat to send the video note to.
   * @param videoNote The video note to send.
   * @returns The sent video note.
   */
  async sendVideoNote(chatId: ID, videoNote: FileSource, params?: SendVideoNoteParams): Promise<MessageVideoNote> {
    return await this.#messageManager.sendVideoNote(chatId, videoNote, params);
  }

  /**
   * Send a location.
   *
   * @method ms
   * @param chatId The chat to send the location to.
   * @param latitude The location's latitude.
   * @param longitude The location's longitude.
   * @returns The sent location.
   */
  async sendLocation(chatId: ID, latitude: number, longitude: number, params?: SendLocationParams): Promise<MessageLocation> {
    return await this.#messageManager.sendLocation(chatId, latitude, longitude, params);
  }

  /**
   * Send a contact.
   *
   * @method ms
   * @param chatId The chat to send the contact to.
   * @param firstName The contact's first name.
   * @param number The contact's phone number.
   * @returns The sent contact.
   */
  async sendContact(chatId: ID, firstName: string, number: string, params?: SendContactParams): Promise<MessageContact> {
    return await this.#messageManager.sendContact(chatId, firstName, number, params);
  }

  /**
   * Send a dice.
   *
   * @method ms
   * @param chatId The chat to send the dice to.
   * @returns The sent dice.
   */
  async sendDice(chatId: ID, params?: SendDiceParams): Promise<MessageDice> {
    return await this.#messageManager.sendDice(chatId, params);
  }

  /**
   * Send a venue.
   *
   * @method ms
   * @param chatId The chat to send the venue to.
   * @param latitude The latitude of the venue.
   * @param longitude The longitude of the venue.
   * @param title The title of the venue.
   * @param address The written address of the venue.
   * @returns The sent venue.
   */
  async sendVenue(chatId: ID, latitude: number, longitude: number, title: string, address: string, params?: SendVenueParams): Promise<MessageVenue> {
    return await this.#messageManager.sendVenue(chatId, latitude, longitude, title, address, params);
  }

  /**
   * Send a poll.
   *
   * @method ms
   * @param chatId The chat to send the poll to.
   * @param question The poll's question.
   * @param options The poll's options.
   * @returns The sent poll.
   */
  async sendPoll(chatId: ID, question: string, options: [string, string, ...string[]], params?: SendPollParams): Promise<MessagePoll> {
    return await this.#messageManager.sendPoll(chatId, question, options, params);
  }

  /**
   * Edit a message's text.
   *
   * @method ms
   * @param chatId The identifier of the chat that contains the message.
   * @param messageId The message's identifier.
   * @param text The new text of the message.
   * @returns The edited text message.
   */
  async editMessageText(chatId: ID, messageId: number, text: string, params?: EditMessageParams): Promise<MessageText> {
    return await this.#messageManager.editMessageText(chatId, messageId, text, params);
  }

  /**
   * Edit a message's media.
   *
   * @method ms
   * @param chatId The identifier of the chat that contains the message.
   * @param messageId The message's identifier.
   * @param media The new media of the message.
   * @returns The edited message.
   */
  async editMessageMedia(chatId: ID, messageId: number, media: InputMedia, params?: EditMessageMediaParams): Promise<Message> {
    return await this.#messageManager.editMessageMedia(chatId, messageId, media, params);
  }

  /**
   * Edit an inline message's media.
   *
   * @method ms
   * @param inlineMessageId The inline message's identifier.
   */
  async editInlineMessageMedia(inlineMessageId: string, media: InputMedia, params?: EditMessageMediaParams): Promise<void> {
    await this.#messageManager.editInlineMessageMedia(inlineMessageId, media, params);
  }

  /**
   * Edit an inline message's text. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The inline message's identifier.
   * @param text The new text of the message.
   */
  async editInlineMessageText(inlineMessageId: string, text: string, params?: EditMessageParams): Promise<void> {
    await this.#messageManager.editInlineMessageText(inlineMessageId, text, params);
  }

  /**
   * Edit a message's reply markup.
   *
   * @method ms
   * @param chatId The identifier of the chat that contains the message.
   * @param messageId The message's identifier.
   * @returns The edited message.
   */
  async editMessageReplyMarkup(
    chatId: ID,
    messageId: number,
    params?: EditMessageReplyMarkupParams,
  ): Promise<Message> {
    return await this.#messageManager.editMessageReplyMarkup(chatId, messageId, params);
  }

  /**
   * Edit an inline message's reply markup. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The inline message's identifier.
   */
  async editInlineMessageReplyMarkup(inlineMessageId: string, params?: EditMessageReplyMarkupParams) {
    await this.#messageManager.editInlineMessageReplyMarkup(inlineMessageId, params);
  }

  /**
   * Edit a message's live location.
   *
   * @method ms
   * @param chatId The identifier of the chat that contains the messages.
   * @param messageId The message's identifier.
   * @param latitude The new latitude.
   * @param longitude The new longitude.
   * @returns The edited location message.
   */
  async editMessageLiveLocation(
    chatId: ID,
    messageId: number,
    latitude: number,
    longitude: number,
    params?: EditMessageLiveLocationParams,
  ): Promise<MessageLocation> {
    return await this.#messageManager.editMessageLiveLocation(chatId, messageId, latitude, longitude, params);
  }

  /**
   * Edit an inline message's live location. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The inline message's identifier.
   * @param latitude The new latitude.
   * @param longitude The new longitude.
   * @returns The edited location message.
   */
  async editInlineMessageLiveLocation(
    inlineMessageId: string,
    latitude: number,
    longitude: number,
    params?: EditMessageLiveLocationParams,
  ) {
    await this.#messageManager.editInlineMessageLiveLocation(inlineMessageId, latitude, longitude, params);
  }

  /**
   * Retrieve multiple messages.
   *
   * @method ms
   * @param chatId The identifier of the chat to retrieve the messages from.
   * @param messageIds The identifiers of the messages to retrieve.
   * @example ```ts
   * const message = await client.getMessages("@MTKruto", [210, 212]);
   * ```
   * @returns The retrieved messages.
   */
  async getMessages(chatId: ID, messageIds: number[]): Promise<Message[]> {
    return await this.#messageManager.getMessages(chatId, messageIds);
  }

  /**
   * Retrieve a single message.
   *
   * @method ms
   * @param chatId The identifier of the chat to retrieve the message from.
   * @param messageId The identifier of the message to retrieve.
   * @example ```ts
   * const message = await client.getMessage("@MTKruto", 212);
   * ```
   * @returns The retrieved message.
   */
  async getMessage(chatId: ID, messageId: number): Promise<Message | null> {
    return await this.#messageManager.getMessage(chatId, messageId);
  }

  /**
   * Delete multiple messages.
   *
   * @method ms
   * @param chatId The identifier of the chat that contains the messages.
   * @param messageIds The identifiers of the messages to delete.
   */
  async deleteMessages(chatId: ID, messageIds: number[], params?: DeleteMessagesParams) {
    await this.#messageManager.deleteMessages(chatId, messageIds, params);
  }

  /**
   * Delete a single message.
   *
   * @method ms
   * @param chatId The identifier of the chat that contains the message.
   * @param messageId The identifier of the message to delete.
   */
  async deleteMessage(chatId: ID, messageId: number, params?: DeleteMessageParams) {
    await this.#messageManager.deleteMessages(chatId, [messageId], params);
  }

  /**
   * Delete all messages sent by a specific member of a chat. User-only.
   *
   * @method ms
   * @param chatId The identifier of the chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  async deleteChatMemberMessages(chatId: ID, memberId: ID) {
    await this.#messageManager.deleteChatMemberMessages(chatId, memberId);
  }

  /**
   * Pin a message in a chat.
   *
   * @method ms
   * @param chatId The identifier of the chat that contains the message.
   * @param messageId The message's identifier.
   */
  async pinMessage(chatId: ID, messageId: number, params?: PinMessageParams) {
    await this.#messageManager.pinMessage(chatId, messageId, params);
  }

  /**
   * Unpin a pinned message.
   *
   * @method ms
   * @param chatId The identifier of the chat that contains the message.
   * @param messageId The message's identifier.
   */
  async unpinMessage(chatId: ID, messageId: number) {
    await this.#messageManager.unpinMessage(chatId, messageId);
  }

  /**
   * Unpin all pinned messages.
   *
   * @method ms
   * @param chatId The identifier of the chat.
   */
  async unpinMessages(chatId: ID) {
    await this.#messageManager.unpinMessages(chatId);
  }

  /**
   * Forward multiple messages.
   *
   * @method ms
   * @param from The identifier of the chat to forward the messages from.
   * @param to The identifier of the chat to forward the messages to.
   * @param messageIds The identifiers of the messages to forward.
   * @returns The forwarded messages.
   */
  async forwardMessages(from: ID, to: ID, messageIds: number[], params?: ForwardMessagesParams): Promise<Message[]> {
    return await this.#messageManager.forwardMessages(from, to, messageIds, params);
  }

  /**
   * Forward a single message.
   *
   * @method ms
   * @param from The identifier of the chat to forward the message from.
   * @param to The identifier of the chat to forward the message to.
   * @param messageId The identifier of the message to forward.
   * @returns The forwarded message.
   */
  async forwardMessage(from: ID, to: ID, messageId: number, params?: ForwardMessagesParams): Promise<Message> {
    return await this.forwardMessages(from, to, [messageId], params).then((v) => v[0]);
  }

  /**
   * Stop a poll.
   *
   * @method ms
   * @param chatId The chat that includes the poll.
   * @param messageId The idenfifier of the poll's message.
   * @returns The new state of the poll.
   */
  async stopPoll(chatId: ID, messageId: number, params?: StopPollParams): Promise<Poll> {
    return await this.#messageManager.stopPoll(chatId, messageId, params);
  }

  /**
   * Send a chat action.
   *
   * @method ms
   * @param chatId The chat to send the chat action to.
   * @param action The chat action.
   * @param messageThreadId The thread to send the chat action to.
   */
  async sendChatAction(chatId: ID, action: ChatAction, params?: { messageThreadId?: number }) {
    await this.#messageManager.sendChatAction(chatId, action, params);
  }

  /**
   * Search the messages of a chat. User-only.
   *
   * @method ms
   * @param chatId The identifier of the chat to search the messages in.
   * @param query The message search query.
   */
  async searchMessages(chatId: ID, query: string, params?: SearchMessagesParams): Promise<Message[]> {
    return await this.#messageManager.searchMessages(chatId, query, params);
  }

  //
  // ========================= FILES ========================= //
  //

  /**
   * Download a file.
   *
   * @method fs
   * @param fileId The identifier of the file to download.
   * @example ```ts
   * for await (const chunk of client.download(fileId, { chunkSize: 256 * 1024 })) {
   *   await outFile.write(chunk);
   * }
   * ```
   * @returns A generator yielding the contents of the file.
   */
  async *download(fileId: string, params?: DownloadParams): AsyncGenerator<Uint8Array, void, unknown> {
    for await (const chunk of this.#fileManager.download(fileId, params)) {
      yield chunk;
    }
  }

  /**
   * Get custom emoji documents for download.
   *
   * @method fs
   * @param id Identifier of one or more of custom emojis.
   * @returns The custom emoji documents.
   */
  async getCustomEmojiStickers(id: string | string[]): Promise<Sticker[]> {
    return await this.#fileManager.getCustomEmojiStickers(id);
  }

  //
  // ========================= CHATS ========================= //
  //

  /**
   * Get chats from a chat list. User-only.
   *
   * @method ch
   */
  async getChats(params?: GetChatsParams): Promise<Chat[]> {
    return await this.#chatListManager.getChats(params?.from, params?.after, params?.limit);
  }

  /**
   * Get a chat.
   *
   * @method ch
   */
  async getChat(chatId: ID): Promise<Chat> {
    return await this.#chatListManager.getChat(chatId);
  }

  /**
   * Get chat history. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat to get its history.
   */
  async getHistory(chatId: ID, params?: GetHistoryParams): Promise<Message[]> {
    return await this.#messageManager.getHistory(chatId, params);
  }

  /**
   * Set a chat's available reactions. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   * @param availableReactions The new available reactions.
   */
  async setAvailableReactions(chatId: ID, availableReactions: "none" | "all" | Reaction[]) {
    await this.#messageManager.setAvailableReactions(chatId, availableReactions);
  }

  /**
   * Set a chat's photo.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   * @param photo A photo to set as the chat's photo.
   */
  async setChatPhoto(chatId: number, photo: FileSource, params?: SetChatPhotoParams) {
    await this.#messageManager.setChatPhoto(chatId, photo, params);
  }

  /**
   * Delete a chat's photo.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   */
  async deleteChatPhoto(chatId: number) {
    await this.#messageManager.deleteChatPhoto(chatId);
  }

  /**
   * Ban a member from a chat.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   * @param memberId The identifier of the member.
   */
  async banChatMember(chatId: ID, memberId: ID, params?: BanChatMemberParams) {
    await this.#messageManager.banChatMember(chatId, memberId, params);
  }

  /**
   * Unban a member from a chat.
   *
   * @method ch
   * @param chatId The identifier of the chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  async unbanChatMember(chatId: ID, memberId: ID) {
    await this.#messageManager.unbanChatMember(chatId, memberId);
  }

  /**
   * Kick a member from a chat. Same as a banChatMember call followed by unbanChatMember.
   *
   * @method ch
   * @param chatId The identifier of the chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  async kickChatMember(chatId: ID, memberId: ID) {
    await this.#messageManager.banChatMember(chatId, memberId);
    await this.#messageManager.unbanChatMember(chatId, memberId);
  }

  /**
   * Set the rights of a chat member.
   *
   * @method ch
   * @param chatId The identifier of the chat. Must be a supergroup.
   * @param memberId The identifier of a member.
   */
  async setChatMemberRights(chatId: ID, memberId: ID, params?: SetChatMemberRightsParams) {
    await this.#messageManager.setChatMemberRights(chatId, memberId, params);
  }

  /**
   * Get the administrators of a chat.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   * @returns The chat's administrators.
   */
  async getChatAdministrators(chatId: ID): Promise<ChatMember[]> {
    return await this.#messageManager.getChatAdministrators(chatId);
  }

  /**
   * Enable join requests in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat. Must be a channel or a supergroup.
   */
  async enableJoinRequests(chatId: ID) {
    await this.#messageManager.enableJoinRequests(chatId);
  }

  /**
   * Disable join requests in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat. Must be a channel or a supergroup.
   */
  async disableJoinRequests(chatId: ID) {
    await this.#messageManager.disableJoinRequests(chatId);
  }

  /**
   * Get inactive chats. User-only.
   *
   * @method ch
   * @retuns A list of inactive chats the current user is member of.
   */
  async getInactiveChats(): Promise<InactiveChat[]> {
    return await this.#accountManager.getInactiveChats();
  }

  /**
   * Get the invite links created for a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   * @returns The invite links created for the chat. This might be a subset of the results if they were less than `limit`. The parameters `afterDate` and `afterInviteLink` can be used for pagination.
   */
  async getCreatedInviteLinks(chatId: ID, params?: GetCreatedInviteLinksParams): Promise<InviteLink[]> {
    return await this.#messageManager.getCreatedInviteLinks(chatId, params);
  }

  /**
   * Join a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat to join.
   */
  async joinChat(chatId: ID) {
    await this.#messageManager.joinChat(chatId);
  }

  /**
   * Leave a chat.
   *
   * @method ch
   * @param chatId The identifier of the chat to leave.
   */
  async leaveChat(chatId: ID) {
    await this.#messageManager.leaveChat(chatId);
  }

  /**
   * Get information on a user's chat membership.
   *
   * @method ch
   * @param chatId The identifier of a chat that includes the user.
   * @param userId The identifier of the user.
   */
  async getChatMember(chatId: ID, userId: ID): Promise<ChatMember> {
    return await this.#messageManager.getChatMember(chatId, userId);
  }

  /**
   * Set a chat's sticker set.
   *
   * @method ch
   * @param chatId The identifier of the chat. Must be a supergroup.
   * @param setName The name of the set.
   */
  async setChatStickerSet(chatId: ID, setName: string) {
    await this.#messageManager.setChatStickerSet(chatId, setName);
  }

  /**
   * Delete a chat's sticker set.
   *
   * @method ch
   * @param chatId The identifier of the chat. Must be a supergroup.
   */
  async deleteChatStickerSet(chatId: ID) {
    await this.#messageManager.deleteChatStickerSet(chatId);
  }

  /**
   * Set the number of boosts required to circument a chat's default restrictions. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   * @param boosts The number of boosts required to circumvent its restrictions.
   */
  async setBoostsRequiredToCircumventRestrictions(chatId: ID, boosts: number) {
    await this.#messageManager.setBoostsRequiredToCircumventRestrictions(chatId, boosts);
  }

  /**
   * Create an invite link.
   *
   * @method ch
   * @param chatId The identifier of the chat to create the invite link for.
   * @returns The newly created invite link.
   */
  async createInviteLink(chatId: ID, params?: CreateInviteLinkParams): Promise<InviteLink> {
    return await this.#messageManager.createInviteLink(chatId, params);
  }

  //
  // ========================= CALLBACK QUERIES ========================= //
  //

  /**
   * Answer a callback query. Bot-only.
   *
   * @method cq
   * @param id ID of the callback query to answer.
   */
  async answerCallbackQuery(id: string, params?: AnswerCallbackQueryParams) {
    await this.#callbackQueryManager.answerCallbackQuery(id, params);
  }

  //
  // ========================= INLINE QUERIES ========================= //
  //

  /**
   * Answer an inline query. Bot-only.
   *
   * @method iq
   * @param id The ID of the inline query to answer.
   * @param results The results to answer with.
   */
  async answerInlineQuery(id: string, results: InlineQueryResult[], params?: AnswerInlineQueryParams) {
    await this.#inlineQueryManager.answerInlineQuery(id, results, params);
  }

  //
  // ========================= BOTS ========================= //
  //

  /**
   * Set the bot's description in the given language. Bot-only.
   *
   * @method bs
   */
  async setMyDescription(params?: { description?: string; languageCode?: string }) {
    await this.#botInfoManager.setMyDescription(params);
  }

  /**
   * Set the bot's name in the given language. Bot-only.
   *
   * @method bs
   */
  async setMyName(params?: { name?: string; languageCode?: string }) {
    await this.#botInfoManager.setMyName(params);
  }

  /**
   * Set the bot's short description in the given language. Bot-only.
   *
   * @method bs
   */
  async setMyShortDescription(params?: { shortDescription?: string; languageCode?: string }) {
    await this.#botInfoManager.setMyShortDescription(params);
  }

  /**
   * Get the bot's description in the given language. Bot-only.
   *
   * @method bs
   * @returns The current bot's description in the specified language.
   */
  async getMyDescription(params?: { languageCode?: string }): Promise<string> {
    return await this.#botInfoManager.getMyDescription(params);
  }

  /**
   * Get the bot's name in the given language. Bot-only.
   *
   * @method bs
   * @returns The current bot's name in the specified language.
   */
  async getMyName(params?: { languageCode?: string }): Promise<string> {
    return await this.#botInfoManager.getMyName(params);
  }

  /**
   * Get the bot's short description in the given language. Bot-only.
   *
   * @method bs
   * @returns The current bot's short description in the specified language.
   */
  async getMyShortDescription(params?: { languageCode?: string }): Promise<string> {
    return await this.#botInfoManager.getMyShortDescription(params);
  }

  /**
   * Set the bot's commands in the given scope and/or language. Bot-only.
   *
   * @method bs
   * @param commands The commands to set.
   */
  async setMyCommands(commands: BotCommand[], params?: SetMyCommandsParams) {
    await this.#botInfoManager.setMyCommands(commands, params);
  }

  /**
   * Get the bot's commands in the given scope and/or language. Bot-only.
   *
   * @method bs
   * @returns The current bot's commands in the specified language.
   */
  async getMyCommands(params?: GetMyCommandsParams): Promise<BotCommand[]> {
    return await this.#botInfoManager.getMyCommands(params);
  }

  //
  // ========================= REACTIONS ========================= //
  //

  /**
   * Change reactions made to a message.
   *
   * @method re
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message to add the reaction to.
   * @param reactions The new reactions.
   */
  async setReactions(chatId: number, messageId: number, reactions: Reaction[], params?: SetReactionsParams) {
    await this.#messageManager.setReactions(chatId, messageId, reactions, params);
  }

  /**
   * Make a reaction to a message.
   *
   * @method re
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message to add the reaction to.
   * @param reaction The reaction to add.
   */
  async addReaction(chatId: number, messageId: number, reaction: Reaction, params?: AddReactionParams) {
    await this.#messageManager.addReaction(chatId, messageId, reaction, params);
  }

  /**
   * Undo a reaction made to a message.
   *
   * @method re
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message which the reaction was made to.
   * @param reaction The reaction to remove.
   */
  async removeReaction(chatId: number, messageId: number, reaction: Reaction) {
    await this.#messageManager.removeReaction(chatId, messageId, reaction);
  }

  //
  // ========================= STORIES ========================= //
  //

  /**
   * Create a story. User-only.
   *
   * @method st
   * @param content The content of the story.
   * @returns The created story.
   */
  async createStory(chatId: ID, content: InputStoryContent, params?: CreateStoryParams): Promise<Story> {
    return await this.#storyManager.createStory(chatId, content, params);
  }

  /**
   * Retrieve multiple stories. User-only.
   *
   * @method st
   * @param chatId The identifier of the chat to retrieve the stories from.
   * @param storyIds The identifiers of the stories to retrieve.
   */
  async getStories(chatId: ID, storyIds: number[]): Promise<Story[]> {
    if (!storyIds.length) {
      return [];
    }
    return await this.#storyManager.getStories(chatId, storyIds);
  }

  /**
   * Retrieve a single story. User-only.
   *
   * @method st
   * @param chatId The identifier of the chat to retrieve the story from.
   * @param storyId The identifier of the story to retrieve.
   * @returns The retrieved story.
   */
  async getStory(chatId: ID, storyId: number): Promise<Story | null> {
    return await this.#storyManager.getStory(chatId, storyId);
  }

  /**
   * Delete multiple stories. User-only.
   *
   * @method st
   * @param chatId The identifier of the chat to delete the stories from.
   * @param storyIds The identifiers of the stories to delete.
   */
  async deleteStories(chatId: ID, storyIds: number[]) {
    await this.#storyManager.deleteStories(chatId, storyIds);
  }

  /**
   * Delete a single story. User-only.
   *
   * @method st
   * @param chatId The identifier of the chat to delete the story from.
   * @param storyId The identifier of the story to delete.
   */
  async deleteStory(chatId: ID, storyId: number) {
    await this.#storyManager.deleteStory(chatId, storyId);
  }

  /**
   * Add multiple stories to highlights. User-only.
   *
   * @method st
   * @param chatId The identifier of the chat that has the stories.
   * @param storyIds The identifiers of the stories to add to highlights.
   */
  async addStoriesToHighlights(chatId: ID, storyIds: number[]) {
    await this.#storyManager.addStoriesToHighlights(chatId, storyIds);
  }

  /**
   * Add a single story to highlights. User-only.
   *
   * @method st
   * @param chatId The identifier of the chat that has the story.
   * @param storyId The identifier of the story to add to highlights.
   */
  async addStoryToHighlights(chatId: ID, storyId: number) {
    await this.#storyManager.addStoryToHighlights(chatId, storyId);
  }

  /**
   * Remove multiple stories from highlights. User-only.
   *
   * @method st
   * @param chatId The identifier of the chat that has the stories.
   * @param storyIds The identifiers of the stories to remove from highlights.
   */
  async removeStoriesFromHighlights(chatId: ID, storyIds: number[]) {
    await this.#storyManager.removeStoriesFromHighlights(chatId, storyIds);
  }

  /**
   * Remove a single story from highlights. User-only.
   *
   * @method st
   * @param chatId The identifier of the chat that has the story.
   * @param storyId The identifier of the story to remove from highlights.
   */
  async removeStoryFromHighlights(chatId: ID, storyId: number) {
    await this.#storyManager.removeStoryFromHighlights(chatId, storyId);
  }

  //
  // ========================= MISC ========================= //
  //

  /**
   * Get network statistics. This might not always be available.
   *
   * @method mc
   */
  async getNetworkStatistics(): Promise<NetworkStatistics> {
    return await this.#networkStatisticsManager.getNetworkStatistics();
  }

  /**
   * Block a user. User-only.
   *
   * @method mc
   * @param userId The identifier of the user to block.
   */
  async blockUser(userId: ID) {
    await this.#messageManager.blockUser(userId);
  }

  /**
   * Unblock a user. User-only.
   *
   * @method mc
   * @param userId The identifier of the user to unblock.
   */
  async unblockUser(userId: ID) {
    await this.#messageManager.unblockUser(userId);
  }
}
