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

import { delay, MINUTE, SECOND, unreachable } from "../0_deps.ts";
import { AccessError, ConnectionError, InputError } from "../0_errors.ts";
import { cleanObject, drop, getLogger, Logger, MaybePromise, mustPrompt, mustPromptOneOf, Mutex, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { Storage, StorageMemory } from "../2_storage.ts";
import { Api, Mtproto } from "../2_tl.ts";
import { DC, getDcId, TransportProvider } from "../3_transport.ts";
import { BotCommand, BusinessConnection, CallbackQueryAnswer, CallbackQueryQuestion, Chat, ChatAction, ChatListItem, ChatMember, ChatP, type ChatPChannel, type ChatPGroup, type ChatPSupergroup, ChatSettings, ClaimedGifts, ConnectionState, constructUser, FailedInvitation, FileSource, Gift, ID, InactiveChat, InlineQueryAnswer, InlineQueryResult, InputMedia, InputStoryContent, InviteLink, LiveStreamChannel, Message, MessageAnimation, MessageAudio, MessageContact, MessageDice, MessageDocument, MessageInvoice, MessageLocation, MessagePhoto, MessagePoll, MessageSticker, MessageText, MessageVenue, MessageVideo, MessageVideoNote, MessageVoice, NetworkStatistics, ParseMode, Poll, PriceTag, Reaction, ReplyTo, SlowModeDuration, Sticker, Story, Topic, Translation, Update, User, VideoChat, VideoChatActive, VideoChatScheduled, VoiceTranscription } from "../3_types.ts";
import { APP_VERSION, DEVICE_MODEL, INITIAL_DC, LANG_CODE, LANG_PACK, MAX_CHANNEL_ID, MAX_CHAT_ID, PublicKeys, SYSTEM_LANG_CODE, SYSTEM_VERSION, USERNAME_TTL } from "../4_constants.ts";
import { AuthKeyUnregistered, FloodWait, Migrate, PasswordHashInvalid, PhoneNumberInvalid, SessionPasswordNeeded, SessionRevoked } from "../4_errors.ts";
import { PhoneCodeInvalid } from "../4_errors.ts";
import { AddChatMemberParams, AddContactParams, AddReactionParams, AnswerCallbackQueryParams, AnswerInlineQueryParams, AnswerPreCheckoutQueryParams, ApproveJoinRequestsParams, BanChatMemberParams, type CreateChannelParams, type CreateGroupParams, CreateInviteLinkParams, CreateStoryParams, type CreateSupergroupParams, CreateTopicParams, DeclineJoinRequestsParams, DeleteMessageParams, DeleteMessagesParams, DownloadLiveStreamChunkParams, DownloadParams, EditInlineMessageCaptionParams, EditInlineMessageMediaParams, EditInlineMessageTextParams, EditMessageCaptionParams, EditMessageLiveLocationParams, EditMessageMediaParams, EditMessageReplyMarkupParams, EditMessageTextParams, EditTopicParams, ForwardMessagesParams, GetChatMembersParams, GetChatsParams, GetClaimedGiftsParams, GetCommonChatsParams, GetCreatedInviteLinksParams, GetHistoryParams, GetMyCommandsParams, GetTranslationsParams, InvokeParams, JoinVideoChatParams, PinMessageParams, ReplyParams, ScheduleVideoChatParams, SearchMessagesParams, SendAnimationParams, SendAudioParams, SendContactParams, SendDiceParams, SendDocumentParams, SendGiftParams, SendInlineQueryParams, SendInvoiceParams, SendLocationParams, SendMediaGroupParams, SendMessageParams, SendPhotoParams, SendPollParams, SendStickerParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetBirthdayParams, SetChatMemberRightsParams, SetChatPhotoParams, SetEmojiStatusParams, SetLocationParams, SetMyCommandsParams, SetNameColorParams, SetPersonalChannelParams, SetProfileColorParams, SetReactionsParams, SetSignaturesEnabledParams, SignInParams, type StartBotParams, StartVideoChatParams, StopPollParams, UnpinMessageParams, UpdateProfileParams } from "./0_params.ts";
import { checkPassword } from "./0_password.ts";
import { StorageOperations } from "./0_storage_operations.ts";
import { canBeInputChannel, canBeInputUser, DOWNLOAD_POOL_SIZE, getUsername, resolve, toInputChannel, toInputUser} from "./0_utilities.ts";
import { ClientPlainParams } from "./1_client_plain.ts";
import { Composer as Composer_, Middleware, MiddlewareFn, MiddlewareObj, NextFunction } from "./1_composer.ts";
import { AccountManager } from "./2_account_manager.ts";
import { BotInfoManager } from "./2_bot_info_manager.ts";
import { BusinessConnectionManager } from "./2_business_connection_manager.ts";
import { ClientEncrypted } from "./2_client_encrypted.ts";
import { FileManager } from "./2_file_manager.ts";
import { NetworkStatisticsManager } from "./2_network_statistics_manager.ts";
import { PaymentManager } from "./2_payment_manager.ts";
import { ReactionManager } from "./2_reaction_manager.ts";
import { TranslationsManager } from "./2_translations_manager.ts";
import { UpdateManager } from "./2_update_manager.ts";
import { ClientEncryptedPool } from "./3_client_encrypted_pool.ts";
import { MessageManager } from "./3_message_manager.ts";
import { VideoChatManager } from "./3_video_chat_manager.ts";
import { CallbackQueryManager } from "./4_callback_query_manager.ts";
import { ChatListManager } from "./4_chat_list_manager.ts";
import { ChatManager } from "./4_chat_manager.ts";
import { ForumManager } from "./4_forum_manager.ts";
import { GiftManager } from "./4_gift_manager.ts";
import { InlineQueryManager } from "./4_inline_query_manager.ts";
import { PollManager } from "./4_poll_manager.ts";
import { StoryManager } from "./4_story_manager.ts";

export interface Context {
  /** The client that received the update. */
  client: Client;
  /** The currently signed in user. */
  me?: User;
  /** Resolves to `message`, `editedMessage`, or the `message` field of `callbackQuery`. */
  msg?: Message;
  /** Resolves to `msg?.chat`. */
  chat?: ChatP;
  /** Resolves to the `from` field of `message`, `editedMessage`, `callbackQuery`, or `inlineQuery`. */
  from?: User;
  /** Resolves to `msg?.senderChat`. */
  senderChat?: ChatP;
  toJSON: () => Update;
  /** Context-aware alias for `client.sendMessage()`. */
  reply: (text: string, params?: Omit<SendMessageParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageText>;
  /** Context-aware alias for `client.sendPoll()`. */
  replyPoll: (question: string, options: string[], params?: Omit<SendPollParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessagePoll>;
  /** Context-aware alias for `client.sendPhoto()`. */
  replyPhoto: (photo: FileSource, params?: Omit<SendPhotoParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessagePhoto>;
  /** Context-aware alias for `client.sendMediaGroup()`. */
  replyMediaGroup: (media: InputMedia[], params?: Omit<SendMediaGroupParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<Message[]>;
  /** Context-aware alias for `client.sendInvoice()`. */
  replyInvoice: (title: string, description: string, payload: string, currency: string, prices: PriceTag[], params?: Omit<SendInvoiceParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageInvoice>;
  /** Context-aware alias for `client.sendDocument()`. */
  replyDocument: (document: FileSource, params?: Omit<SendDocumentParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageDocument>;
  /** Context-aware alias for `client.sendSticker()`. */
  replySticker: (sticker: FileSource, params?: Omit<SendStickerParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageSticker>;
  /** Context-aware alias for `client.sendLocation()`. */
  replyLocation: (latitude: number, longitude: number, params?: Omit<SendLocationParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageLocation>;
  /** Context-aware alias for `client.sendDice()`. */
  replyDice: (params?: Omit<SendDiceParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageDice>;
  /** Context-aware alias for `client.sendVenue()`. */
  replyVenue: (latitude: number, longitude: number, title: string, address: string, params?: Omit<SendVenueParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageVenue>;
  /** Context-aware alias for `client.sendContact()`. */
  replyContact: (firstName: string, number: string, params?: Omit<SendContactParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageContact>;
  /** Context-aware alias for `client.sendVideo()`. */
  replyVideo: (video: FileSource, params?: Omit<SendVideoParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageVideo>;
  /** Context-aware alias for `client.sendAnimation()`. */
  replyAnimation: (animation: FileSource, params?: Omit<SendAnimationParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageAnimation>;
  /** Context-aware alias for `client.sendVoice()`. */
  replyVoice: (voice: FileSource, params?: Omit<SendVoiceParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageVoice>;
  /** Context-aware alias for `client.sendAudio()`. */
  replyAudio: (audio: FileSource, params?: Omit<SendAudioParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageAudio>;
  /** Context-aware alias for `client.sendPoll()`. */
  replyVideoNote: (videoNote: FileSource, params?: Omit<SendVideoNoteParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageVideoNote>;
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
  editInlineMessageText: (text: string, params?: EditInlineMessageTextParams) => Promise<void>;
  /** Context-aware alias for `client.editInlineMessageCaption()`. */
  editInlineMessageCaption: (params?: EditInlineMessageCaptionParams) => Promise<void>;
  /** Context-aware alias for `client.editInlineMessageMedia()`. */
  editInlineMessageMedia: (media: InputMedia, params?: EditInlineMessageMediaParams) => Promise<void>;
  /** Context-aware alias for `client.editInlineMessageLiveLocation()`. */
  editInlineMessageLiveLocation: (latitude: number, longitude: number, params?: EditMessageLiveLocationParams) => Promise<void>;
  /** Context-aware alias for `client.editInlineMessageReplyMarkup()`. */
  editInlineMessageReplyMarkup: (params?: EditMessageReplyMarkupParams) => Promise<void>;
  /** Context-aware alias for `client.editMessageText()`. */
  editMessageText: (messageId: number, text: string, params?: EditMessageTextParams) => Promise<MessageText>;
  /** Context-aware alias for `client.editMessageCaption()`. */
  editMessageCaption: (messageId: number, params?: EditMessageCaptionParams) => Promise<Message>;
  /** Context-aware alias for `client.editMessageMedia()`. */
  editMessageMedia: (messageId: number, media: InputMedia, params?: EditMessageMediaParams) => Promise<Message>;
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
  /** Context-aware alias for `client.readMessages()`. */
  read(): Promise<void>;
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
  /** Context-aware alias for `client.getChatMember()`. */
  getChatMembers: (params?: GetChatMembersParams) => Promise<ChatMember[]>;
  /** Context-aware alias for `client.setChatStickerSet()`. */
  setChatStickerSet: (setName: string) => Promise<void>;
  /** Context-aware alias for `client.deleteChatStickerSet()`. */
  deleteChatStickerSet: () => Promise<void>;
  /** Context-aware alias for `client.getBusinessConnection()`. */
  getBusinessConnection: () => Promise<BusinessConnection>;
  /** Context-aware alias for `client.answerPreCheckoutQuery()`. */
  answerPreCheckoutQuery: (ok: boolean, params?: AnswerPreCheckoutQueryParams) => Promise<void>;
  /** Context-aware alias for `client.approveJoinRequest()`. */
  approveJoinRequest: () => Promise<void>;
  /** Context-aware alias for `client.declineJoinRequest()`. */
  declineJoinRequest: () => Promise<void>;
}

export class Composer<C extends Context = Context> extends Composer_<C> {
}
export { type Middleware, type MiddlewareFn, type MiddlewareObj, type NextFunction };

function skipInvoke<C extends Context>(): InvokeErrorHandler<Client<C>> {
  return (_ctx, next) => next();
}
export interface InvokeErrorHandler<C> {
  (ctx: { client: C; error: unknown; function: Api.AnyFunction | Mtproto.ping; n: number }, next: NextFunction<boolean>): MaybePromise<boolean>;
}

export const restartAuth = Symbol("restartAuth");
export const handleMigrationError = Symbol("handleMigrationError");

// global Client ID counter for logs
let id = 0;

const getEntity = Symbol();

export interface ClientParams extends ClientPlainParams {
  /** The storage provider to use. Defaults to memory storage. Passing a string constructs a memory storage with the string being the auth string. */
  storage?: Storage;
  /** App's API ID from [my.telegram.org/apps](https://my.telegram.org/apps). Required if no account was previously authorized. */
  apiId?: number;
  /** App's API hash from [my.telegram.org/apps](https://my.telegram.org/apps). Required if no account was previously authorized. */
  apiHash?: string;
  /** A parse mode to use when the `parseMode` parameter is not specified when sending or editing messages. Defaults to `ParseMode.None`. */
  parseMode?: ParseMode;
  /** The app_version parameter to be passed to initConnection. It is recommended that this parameter is changed if users are authorized. Defaults to _MTKruto_. */
  appVersion?: string;
  /** The device_version parameter to be passed to initConnection. The default varies by the current runtime. */
  deviceModel?: string;
  /** The client's language to be used for fetching translations. Defaults to the runtime's language or `"en"`. */
  language?: string;
  /** The client's platform to be used for fetching translations. Defaults to an empty string. */
  platform?: string;
  /** The system_lang_code parameter to be passed to initConnection. Defaults to the runtime's language or `"en"`. */
  systemLangCode?: string;
  /** The system_version parameter to be passed to initConnection. The default varies by the current runtime. */
  systemVersion?: string;
  /** Whether to use default handlers. Defaults to `true`. */
  defaultHandlers?: boolean;
  /** What types of outgoing messages should be received. `business` is only valid for bots. Defaults to `business` for bots, and `all` for users. */
  outgoingMessages?: "none" | "business" | "all";
  /** Default command prefixes. Defaults to `"/"` for bots and `"\"` for users. This option must be set separately for nested composers. */
  prefixes?: string | string[];
  /** Whether to guarantee that order-sensitive updates are delivered at least once before delivering next ones. Useful mainly for clients providing a user interface à la Telegram Desktop. Defaults to `false`. */
  guaranteeUpdateDelivery?: boolean;
  /** Whether to not handle updates received when the client was not running. Defaults to `true` for bots, and `false` for users. */
  dropPendingUpdates?: boolean;
  /**
   * Whether to persist cache to the provided storage, and not memory. Defaults to `false`.
   *
   * Explicitly setting this option to `true` is highly recommended if:
   *
   * - User accounts are authorized.
   * - Less memory usage is demanded.
   * - The client does not usually have a large uptime.
   *
   * When the provided storage takes advantage of memory, nothing changes, even if set to `true`.
   */
  persistCache?: boolean;
  /** Whether to disable receiving updates. UpdateConnectionState and UpdatesAuthorizationState will always be received. Defaults to `false`. */
  disableUpdates?: boolean;
  /** An auth string to automatically import. Can be overriden by a later importAuthString call. */
  authString?: string;
}

/**
 * An MTKruto client.
 */
export class Client<C extends Context = Context> extends Composer<C> {
  #clients = new Array<ClientEncrypted>();
  #downloadPools: Partial<Record<DC, ClientEncryptedPool>> = {};
  #uploadPools: Partial<Record<DC, ClientEncryptedPool>> = {};
  #guaranteeUpdateDelivery: boolean;
  // 2_
  #accountManager: AccountManager;
  #botInfoManager: BotInfoManager;
  #businessConnectionManager: BusinessConnectionManager;
  #fileManager: FileManager;
  #networkStatisticsManager: NetworkStatisticsManager;
  #paymentManager: PaymentManager;
  #reactionManager: ReactionManager;
  #translationsManager: TranslationsManager;
  #updateManager: UpdateManager;
  // 3_
  #messageManager: MessageManager;
  #videoChatManager: VideoChatManager;
  // 4_
  #callbackQueryManager: CallbackQueryManager;
  #chatListManager: ChatListManager;
  #chatManager: ChatManager;
  #forumManager: ForumManager;
  #giftManager: GiftManager;
  #inlineQueryManager: InlineQueryManager;
  #pollManager: PollManager;
  #storyManager: StoryManager;

  // deno-lint-ignore no-explicit-any
  #managers?: Record<string, any>;
  // deno-lint-ignore no-explicit-any
  get managers(): Record<string, any> {
    return this.#managers ?? (this.#managers ??= {
      // 2_
      accountManager: this.#accountManager,
      botInfoManager: this.#botInfoManager,
      businessConnectionManager: this.#businessConnectionManager,
      fileManager: this.#fileManager,
      networkStatisticsManager: this.#networkStatisticsManager,
      paymentManager: this.#paymentManager,
      reactionManager: this.#reactionManager,
      translationsManager: this.#translationsManager,
      updateManager: this.#updateManager,
      // 3_
      messageManager: this.#messageManager,
      videoChatManager: this.#videoChatManager,
      // 4_
      callbackQueryManager: this.#callbackQueryManager,
      chatListManager: this.#chatListManager,
      chatManager: this.#chatManager,
      forumManager: this.#forumManager,
      giftManager: this.#giftManager,
      inlineQueryManager: this.#inlineQueryManager,
      pollManager: this.#pollManager,
      storyManager: this.#storyManager,
    });
  }

  #storage_: Storage;
  #messageStorage_: Storage;
  public readonly storage: StorageOperations;
  public readonly messageStorage: StorageOperations;
  #parseMode: ParseMode;

  #apiId: number;
  #apiHash: string;
  #transportProvider?: TransportProvider;
  public readonly appVersion: string;
  public readonly deviceModel: string;
  public readonly language: string;
  public readonly platform: string;
  public readonly systemLangCode: string;
  public readonly systemVersion: string;
  readonly #publicKeys?: PublicKeys;
  readonly #outgoingMessages: NonNullable<ClientParams["outgoingMessages"]> | null;
  #persistCache: boolean;
  #disableUpdates: boolean;
  #authString?: string;

  #L: Logger;
  #LsignIn: Logger;
  #LupdateGapRecoveryLoop: Logger;
  #LhandleMigrationError: Logger;
  #Lmin: Logger;

  /**
   * Constructs the client.
   */
  constructor(params?: ClientParams) {
    super();

    this.#apiId = params?.apiId ?? 0;
    this.#apiHash = params?.apiHash ?? "";
    this.#transportProvider = params?.transportProvider;
    this.#storage_ = params?.storage || new StorageMemory();
    this.#persistCache = params?.persistCache ?? false;
    if (!this.#persistCache) {
      this.#messageStorage_ = new StorageMemory();
    } else {
      this.#messageStorage_ = this.#storage_;
    }
    this.storage = new StorageOperations(this.#storage_);
    this.messageStorage = new StorageOperations(this.#messageStorage_);
    this.#parseMode = params?.parseMode ?? null;
    this.#disableUpdates = params?.disableUpdates ?? false;
    this.#authString = params?.authString;

    this.appVersion = params?.appVersion ?? APP_VERSION;
    this.deviceModel = params?.deviceModel ?? DEVICE_MODEL;
    this.language = params?.language ?? LANG_CODE;
    this.platform = params?.platform ?? LANG_PACK;
    this.systemLangCode = params?.systemLangCode ?? SYSTEM_LANG_CODE;
    this.systemVersion = params?.systemVersion ?? SYSTEM_VERSION;
    this.#publicKeys = params?.publicKeys;
    this.#outgoingMessages = params?.outgoingMessages ?? null;
    if (params?.prefixes) {
      this.prefixes = params?.prefixes;
    }
    this.#guaranteeUpdateDelivery = params?.guaranteeUpdateDelivery ?? false;

    const L = this.#L = getLogger("Client").client(id++);
    this.#LsignIn = L.branch("signIn");
    this.#LupdateGapRecoveryLoop = L.branch("updateGapRecoveryLoop");
    this.#LhandleMigrationError = L.branch("[handleMigrationError]");
    this.#Lmin = L.branch("min");

    const c = {
      id,
      getUploadPoolSize: this.#getUploadPoolSize.bind(this),
      invoke: async <T extends Api.AnyFunction | Mtproto.ping, R = T extends Mtproto.ping ? Mtproto.pong : T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T, params?: InvokeParams & { businessConnectionId?: string }): Promise<R> => {
        if (params?.businessConnectionId) {
          if (Mtproto.is("ping", function_)) {
            unreachable();
          }
          return await this.invoke({ _: "invokeWithBusinessConnection", connection_id: params.businessConnectionId, query: function_ }, params);
        } else {
          return await this.invoke(function_, params);
        }
      },
      storage: this.storage,
      messageStorage: this.messageStorage,
      guaranteeUpdateDelivery: this.#guaranteeUpdateDelivery,
      setConnectionState: this.#propagateConnectionState.bind(this),
      resetConnectionState: () => this.#stateChangeHandler(this.connected),
      getSelfId: this.#getSelfId.bind(this),
      getIsPremium: this.#getIsPremium.bind(this),
      getInputPeer: this.getInputPeer.bind(this),
      getInputChannel: this.getInputChannel.bind(this),
      getInputUser: this.getInputUser.bind(this),
      getInputPeerChatId: this.#getInputPeerChatId.bind(this),
      getEntity: this[getEntity].bind(this),
      handleUpdate: this.#queueHandleCtxUpdate.bind(this),
      parseMode: this.#parseMode,
      outgoingMessages: this.#outgoingMessages,
      dropPendingUpdates: params?.dropPendingUpdates,
      disconnected: () => this.disconnected,
      langPack: this.platform,
      langCode: this.language,
    };

    // 2_
    this.#accountManager = new AccountManager(c);
    this.#botInfoManager = new BotInfoManager(c);
    this.#businessConnectionManager = new BusinessConnectionManager(c);
    const fileManager = this.#fileManager = new FileManager(c);
    this.#networkStatisticsManager = new NetworkStatisticsManager(c);
    this.#paymentManager = new PaymentManager(c);
    this.#reactionManager = new ReactionManager(c);
    this.#translationsManager = new TranslationsManager(c);
    this.#updateManager = new UpdateManager(c);
    // 3_
    const messageManager = this.#messageManager = new MessageManager({ ...c, fileManager });
    this.#videoChatManager = new VideoChatManager({ ...c, fileManager });
    // 4_
    this.#callbackQueryManager = new CallbackQueryManager({ ...c, messageManager });
    this.#chatListManager = new ChatListManager({ ...c, fileManager, messageManager });
    this.#chatManager = new ChatManager({ ...c, fileManager, messageManager });
    this.#forumManager = new ForumManager({ ...c, messageManager });
    this.#giftManager = new GiftManager({ ...c, messageManager });
    this.#inlineQueryManager = new InlineQueryManager({ ...c, messageManager });
    this.#pollManager = new PollManager({ ...c, messageManager });
    this.#storyManager = new StoryManager({ ...c, fileManager, messageManager });

    this.#updateManager.setUpdateHandler(this.#handleUpdate.bind(this));

    if (params?.defaultHandlers ?? true) {
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

  #setMainClient(client: ClientEncrypted) {
    this.#disconnectAllClients();
    this.#clients = [client];
    client.handlers.onUpdate = (updates) => {
      this.#updateManager.processUpdates(updates, true, null);
      this.#lastUpdates = new Date();
    };
    client.handlers.onDeserializationError = async () => {
      await this.#updateManager.recoverUpdateGap("deserialization error");
    };
    client.handlers.onNewServerSalt = async (serverSalt) => {
      await this.storage.setServerSalt(serverSalt);
    };
    client.onConnectionStateChange = this.#onConnectionStateChange.bind(this);
  }

  #newClient(dc: DC, main: boolean, cdn: boolean) {
    const client = new ClientEncrypted(dc, this.#apiId, {
      appVersion: this.appVersion,
      deviceModel: this.deviceModel,
      langCode: this.language,
      langPack: this.platform,
      systemLangCode: this.systemLangCode,
      systemVersion: this.systemVersion,
      transportProvider: this.#transportProvider,
      cdn,
      disableUpdates: !main || cdn,
      publicKeys: this.#publicKeys,
    });
    client.connectionCallback = this.#networkStatisticsManager.getTransportReadWriteCallback(cdn);
    return client;
  }

  #disconnectAllClients() {
    for (const client of this.#clients) {
      client.disconnect();
    }
    for (const pool of Object.values(this.#downloadPools)) {
      pool.disconnect();
    }
    for (const pool of Object.values(this.#uploadPools)) {
      pool.disconnect();
    }
  }

  get #client(): ClientEncrypted | undefined {
    return this.#clients[0];
  }

  // direct ClientEncrypted property proxies
  get connected(): boolean {
    return this.#client?.connected ?? false;
  }
  get disconnected(): boolean {
    return this.#client?.disconnected ?? true;
  }

  #constructContext = async (update: Update) => {
    const msg = "message" in update ? update.message : "editedMessage" in update ? update.editedMessage : "scheduledMessage" in update ? update.scheduledMessage : "callbackQuery" in update ? update.callbackQuery.message : undefined;
    const reactions = "messageInteractions" in update ? update.messageInteractions : undefined;
    const mustGetMsg = () => {
      if (msg !== undefined) {
        return { chatId: msg.chat.id, messageId: msg.id, businessConnectionId: msg.businessConnectionId, senderId: (msg.from ?? msg.senderChat)?.id, userId: msg.from?.id };
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
    const chat_ = "messageReactions" in update ? update.messageReactions.chat : "messageReactionCount" in update ? update.messageReactionCount.chat : "chatMember" in update ? update.chatMember.chat : "joinRequest" in update ? update.joinRequest.chat : "story" in update ? update.story.chat : undefined;
    const chat = chat_ ?? msg?.chat;
    const from = "callbackQuery" in update ? update.callbackQuery.from : "inlineQuery" in update ? update.inlineQuery.from : "chatMember" in update ? update.chatMember.from : "messageReactions" in update ? update.messageReactions.user : "preCheckoutQuery" in update ? update.preCheckoutQuery.from : "joinRequest" in update ? update.joinRequest.user : "businessConnection" in update ? update.businessConnection.user : msg?.from ? msg.from : undefined;
    const senderChat = msg?.senderChat;
    const getReplyTo = (quote: boolean | undefined, chatId: number, messageId: number): ReplyTo | undefined => {
      if ("story" in update) {
        return { chatId: update.story.chat.id, storyId: update.story.id };
      }
      const isPrivate = chatId > 0;
      const shouldQuote = quote === undefined ? !isPrivate : quote;
      return shouldQuote ? { messageId } : undefined;
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
        const replyTo = getReplyTo(params?.quote, chatId, messageId);
        return this.sendMessage(chatId, text, { ...params, replyTo, businessConnectionId });
      },
      replyPoll: (question, options, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyTo = getReplyTo(params?.quote, chatId, messageId);
        return this.sendPoll(chatId, question, options, { ...params, replyTo, businessConnectionId });
      },
      replyPhoto: (photo, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyTo = getReplyTo(params?.quote, chatId, messageId);
        return this.sendPhoto(chatId, photo, { ...params, replyTo, businessConnectionId });
      },
      replyMediaGroup: (media, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyTo = getReplyTo(params?.quote, chatId, messageId);
        return this.sendMediaGroup(chatId, media, { ...params, replyTo, businessConnectionId });
      },
      replyInvoice: (title, description, payload, currency, prices, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyTo = getReplyTo(params?.quote, chatId, messageId);
        return this.sendInvoice(chatId, title, description, payload, currency, prices, { ...params, replyTo, businessConnectionId });
      },
      replyDocument: (document, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyTo = getReplyTo(params?.quote, chatId, messageId);
        return this.sendDocument(chatId, document, { ...params, replyTo, businessConnectionId });
      },
      replySticker: (sticker, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyTo = getReplyTo(params?.quote, chatId, messageId);
        return this.sendSticker(chatId, sticker, { ...params, replyTo, businessConnectionId });
      },
      replyContact: (firstName, number, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyTo = getReplyTo(params?.quote, chatId, messageId);
        return this.sendContact(chatId, firstName, number, { ...params, replyTo, businessConnectionId });
      },
      replyLocation: (latitude, longitude, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyTo = getReplyTo(params?.quote, chatId, messageId);
        return this.sendLocation(chatId, latitude, longitude, { ...params, replyTo, businessConnectionId });
      },
      replyDice: (params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyTo = getReplyTo(params?.quote, chatId, messageId);
        return this.sendDice(chatId, { ...params, replyTo, businessConnectionId });
      },
      replyVenue: (latitude, longitude, title, address, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyTo = getReplyTo(params?.quote, chatId, messageId);
        return this.sendVenue(chatId, latitude, longitude, title, address, { ...params, replyTo, businessConnectionId });
      },
      replyVideo: (video, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyTo = getReplyTo(params?.quote, chatId, messageId);
        return this.sendVideo(chatId, video, { ...params, replyTo, businessConnectionId });
      },
      replyAnimation: (document, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyTo = getReplyTo(params?.quote, chatId, messageId);
        return this.sendAnimation(chatId, document, { ...params, replyTo, businessConnectionId });
      },
      replyVoice: (document, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyTo = getReplyTo(params?.quote, chatId, messageId);
        return this.sendVoice(chatId, document, { ...params, replyTo, businessConnectionId });
      },
      replyAudio: (document, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyTo = getReplyTo(params?.quote, chatId, messageId);
        return this.sendAudio(chatId, document, { ...params, replyTo, businessConnectionId });
      },
      replyVideoNote: (videoNote, params) => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        const replyTo = getReplyTo(params?.quote, chatId, messageId);
        return this.sendVideoNote(chatId, videoNote, { ...params, replyTo, businessConnectionId });
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
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        return this.pinMessage(chatId, messageId, { ...params, businessConnectionId });
      },
      unpin: () => {
        const { chatId, messageId, businessConnectionId } = mustGetMsg();
        return this.unpinMessage(chatId, messageId, { businessConnectionId });
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
      editInlineMessageMedia: (media, params) => {
        const inlineMessageId = mustGetInlineMsgId();
        return this.editInlineMessageMedia(inlineMessageId, media, params);
      },
      editInlineMessageCaption: (params) => {
        const inlineMessageId = mustGetInlineMsgId();
        return this.editInlineMessageCaption(inlineMessageId, params);
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
      editMessageCaption: (messageId, params) => {
        const { chatId } = mustGetMsg();
        return this.editMessageCaption(chatId, messageId, params);
      },
      editMessageMedia: (messageId, media, params) => {
        const { chatId } = mustGetMsg();
        return this.editMessageMedia(chatId, messageId, media, params);
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
      read: () => {
        const { chatId, messageId } = mustGetMsg();
        return this.readMessages(chatId, messageId);
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
      getChatMembers: (params) => {
        const { chatId } = mustGetMsg();
        return this.getChatMembers(chatId, params);
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
      answerPreCheckoutQuery: (ok, params) => {
        if (!("preCheckoutQuery" in update)) {
          unreachable();
        }
        return this.answerPreCheckoutQuery(update.preCheckoutQuery.id, ok, params);
      },
      approveJoinRequest: () => {
        const { chatId, userId } = mustGetMsg();
        if (!userId) {
          unreachable();
        }
        return this.approveJoinRequest(chatId, userId);
      },
      declineJoinRequest: () => {
        const { chatId, userId } = mustGetMsg();
        if (!userId) {
          unreachable();
        }
        return this.declineJoinRequest(chatId, userId);
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
    if (this.#lastPropagatedConnectionState != connectionState) {
      this.#propagateConnectionState(connectionState);
    }
  }).bind(this);

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

  #connectMutex = new Mutex();
  /**
   * Loads the session if `setDc` was not called, initializes and connnects
   * a `ClientPlain` to generate auth key if there was none, and connects the client.
   * Before establishing the connection, the session is saved.
   */
  async connect() {
    const unlock = await this.#connectMutex.lock();
    try {
      if (this.connected) {
        return;
      }
      await this.#initStorage();
      if (this.#authString && !this.#authStringImported) {
        await this.importAuthString(this.#authString);
      }
      const [authKey, dc] = await Promise.all([this.storage.getAuthKey(), this.storage.getDc()]);
      if (authKey != null && dc != null) {
        if (!this.#client || this.#client.dc != dc) {
          this.#client?.disconnect();
          this.#setMainClient(this.#newClient(dc, true, false));
        }
        await this.#client!.setAuthKey(authKey);
        if (this.#client!.serverSalt == 0n) {
          this.#client!.serverSalt = await this.storage.getServerSalt() ?? 0n;
        }
      } else {
        const dc = await this.storage.getDc() ?? INITIAL_DC;
        if (!this.#client || this.#client.dc != dc) {
          this.#client?.disconnect();
          this.#setMainClient(this.#newClient(dc, true, false));
        }
      }
      await this.#client!.connect();
      await Promise.all([this.storage.setAuthKey(this.#client!.authKey), this.storage.setDc(this.#client!.dc), this.storage.setServerSalt(this.#client!.serverSalt)]);
      this.#startUpdateGapRecoveryLoop();
      this.#startClientDisconnectionLoop();
    } finally {
      unlock();
    }
  }

  async [handleMigrationError](err: Migrate) {
    let newDc = String(err.dc);
    if (Math.abs(getDcId(this.#client!.dc, this.#client!.cdn)) >= 10_000) {
      newDc += "-test";
    }
    this.disconnect();
    await this.storage.setDc(newDc as DC);
    await this.storage.setAuthKey(null);
    await this.connect();
    this.#LhandleMigrationError.debug(`migrated to DC${newDc}`);
  }

  disconnect() {
    this.#disconnectAllClients();
    this.#clientDisconnectionLoopAbortController?.abort();
    this.#updateGapRecoveryLoopAbortController?.abort();
    this.#updateManager.closeAllChats();
  }

  #lastPropagatedAuthorizationState: boolean | null = null;
  async #propagateAuthorizationState(authorized: boolean) {
    if (this.#lastPropagatedAuthorizationState != authorized) {
      await this.#handleCtxUpdate({ authorizationState: { authorized } });
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

  async #getIsPremium() {
    const maybeIsPremium = await this.storage.getIsPremium();
    if (maybeIsPremium != null) {
      return maybeIsPremium;
    }
    return this.#lastGetMe?.isPremium ?? false;
  }

  #lastUpdates = new Date();
  #updateGapRecoveryLoopAbortController?: AbortController;
  #startUpdateGapRecoveryLoop() {
    drop(this.#updateGapRecoveryLoop());
  }
  async #updateGapRecoveryLoop() {
    this.#updateGapRecoveryLoopAbortController?.abort();
    const controller = this.#updateGapRecoveryLoopAbortController = new AbortController();
    while (this.connected) {
      try {
        await delay(60 * SECOND, { signal: controller.signal });
        if (!this.connected) {
          break;
        }
        controller.signal.throwIfAborted();
        if (Date.now() - this.#lastUpdates.getTime() >= 15 * MINUTE) {
          drop(
            this.#updateManager.recoverUpdateGap("lastUpdates").then(() => {
              this.#lastUpdates = new Date();
            }),
          );
        }
      } catch (err) {
        if (err instanceof DOMException && err.name == "AbortError") {
          break;
        } else if (!this.connected) {
          break;
        }
        this.#LupdateGapRecoveryLoop.error(err);
      }
    }
  }

  #clientDisconnectionLoopAbortController?: AbortController;
  #startClientDisconnectionLoop() {
    drop(this.#clientDisconnectionLoop());
  }
  async #clientDisconnectionLoop() {
    const controller = this.#clientDisconnectionLoopAbortController = new AbortController();
    while (this.connected) {
      try {
        await delay(60 * SECOND, { signal: controller.signal });
        if (!this.connected) {
          break;
        }
        controller.signal.throwIfAborted();
        const now = Date.now();
        const disconnectAfter = 5 * MINUTE;
        this.#clients.map((client, i) => {
          if (i > 0 && !client.disconnected && client.lastRequest && now - client.lastRequest.getTime() >= disconnectAfter) {
            client?.disconnect();
          }
        });
      } catch (err) {
        if (err instanceof DOMException && err.name == "AbortError") {
          break;
        } else if (!this.connected) {
          break;
        }
      }
    }
  }

  /**
   * Signs in using the provided parameters if not already signed in.
   * If no parameters are provided, the credentials will be prompted in runtime.
   *
   * Notes:
   * 1. Requires the `apiId` and `apiHash` paramters to be passed when constructing the client.
   * 3. Reconnects the client to the appropriate DC in case of MIGRATE_X errors.
   */
  async signIn(params?: SignInParams) {
    try {
      await this.#updateManager.fetchState("signIn");
      await this.#propagateAuthorizationState(true);
      drop(this.#updateManager.recoverUpdateGap("signIn"));
      this.#LsignIn.debug("already signed in");
      return;
    } catch (err) {
      if (!(err instanceof AuthKeyUnregistered) && !(err instanceof SessionRevoked)) {
        throw err;
      }
    }

    if (!this.#apiId) {
      throw new InputError("apiId not set");
    }
    if (!this.#apiHash) {
      throw new InputError("apiHash not set");
    }

    if (typeof params === "undefined") {
      const loginType = mustPromptOneOf("Do you want to login as bot [b] or user [u]?", ["b", "u"] as const);
      if (loginType == "b") {
        params = { botToken: mustPrompt("Bot token:") };
      } else {
        params = { phone: () => mustPrompt("Phone number:"), code: () => mustPrompt("Verification code:"), password: () => mustPrompt("Password:") };
      }
    }

    this.#LsignIn.debug("authorizing with", typeof params === "string" ? "bot token" : Api.is("auth.exportedAuthorization", params) ? "exported authorization" : "AuthorizeUserParams");

    if (params && "botToken" in params) {
      while (true) {
        try {
          const auth = await this.invoke({ _: "auth.importBotAuthorization", api_id: this.#apiId, api_hash: this.#apiHash, bot_auth_token: params.botToken, flags: 0 });
          await this.storage.setAccountId(Number(Api.as("auth.authorization", auth).user.id));
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
      this.#LsignIn.debug("authorized as bot");
      await this.#propagateAuthorizationState(true);
      await this.#updateManager.fetchState("authorize");
      return;
    }

    auth: while (true) {
      try {
        let phone: string;
        let sentCode: Api.auth_sentCode;
        while (true) {
          try {
            phone = typeof params.phone === "string" ? params.phone : await params.phone();
            const sendCode = () =>
              this.invoke({
                _: "auth.sendCode",
                phone_number: phone,
                api_id: this.#apiId,
                api_hash: this.#apiHash,
                settings: { _: "codeSettings" },
              }).then((v) => Api.as("auth.sentCode", v));
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
        this.#LsignIn.debug("verification code sent");

        let err: unknown;
        code: while (true) {
          const code = typeof params.code === "string" ? params.code : await params.code();
          try {
            const auth = await this.invoke({
              _: "auth.signIn",
              phone_number: phone,
              phone_code: code,
              phone_code_hash: sentCode.phone_code_hash,
            });
            await this.storage.setAccountId(Number(Api.as("auth.authorization", auth).user.id));
            await this.storage.setAccountType("user");
            this.#LsignIn.debug("signed in as user");
            await this.#propagateAuthorizationState(true);
            await this.#updateManager.fetchState("signIn");
            return;
          } catch (err_) {
            if (err_ instanceof PhoneCodeInvalid) {
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
          const ap = await this.invoke({ _: "account.getPassword" });
          if (!(Api.is("passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow", ap.current_algo))) {
            throw new Error(`Handling ${ap.current_algo?._} not implemented`);
          }
          try {
            const password = typeof params.password === "string" ? params.password : await params.password(ap.hint ?? null);
            const input = await checkPassword(password, ap);

            const auth = await this.invoke({ _: "auth.checkPassword", password: input });
            await this.storage.setAccountId(Number(Api.as("auth.authorization", auth).user.id));
            await this.storage.setAccountType("user");
            this.#LsignIn.debug("signed in as user");
            await this.#propagateAuthorizationState(true);
            await this.#updateManager.fetchState("signIn");
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

  async signOut() {
    try {
      await Promise.all([
        this.storage.reset(),
        this.invoke({ _: "auth.logOut" }).then(() => {
          this.#propagateAuthorizationState(false);
        }),
      ]);
    } finally {
      this.#lastGetMe = null;
      this.disconnect();
      await this.connect();
    }
  }

  /**
   * Same as calling `.connect()` followed by `.signIn(params)`.
   */
  async start(params?: SignInParams) {
    await this.connect();
    await this.signIn(params);
  }

  async #getClient(params: InvokeParams) {
    let client: ClientEncrypted;
    switch (params.type) {
      case undefined:
        client = await this.#getMainClient(params.dc);
        break;
      case "download":
        client = await this.#getDownloadClient(params.dc);
        break;
      case "upload":
        client = await this.#getUploadClient();
        break;
    }
    if (client !== this.#client && !this.disconnected && client.disconnected) {
      await client.connect();
    }
    return client;
  }

  #getMainClientMutex = new Mutex();
  async #getMainClient(dc?: DC) {
    if (dc === undefined || dc == this.#client?.dc) {
      return this.#client!;
    }
    let client = this.#clients.find((v) => v.dc == dc);
    if (client) {
      return client;
    }
    const unlock = await this.#getMainClientMutex.lock();
    client = this.#clients.find((v) => v.dc == dc);
    if (client) {
      return client;
    }
    try {
      client = this.#newClient(dc, false, false);
      await this.#setupClient(client);
      this.#clients.push(client);
      return client;
    } finally {
      unlock();
    }
  }

  async #getDownloadClient(dc?: DC) {
    dc ??= this.#client!.dc;
    const pool = this.#downloadPools[dc] ??= new ClientEncryptedPool();
    if (!pool.size) {
      if (!pool.size) {
        for (let i = 0; i < DOWNLOAD_POOL_SIZE; ++i) {
          pool.add(this.#newClient(dc, false, true));
        }
      }
    }
    const client = pool.nextClient();
    if (client.authKey.length) {
      return client;
    }
    await this.#setupClient(client);
    return client;
  }

  async #getUploadPoolSize() {
    const dc = this.#client!.dc;
    return (dc != "2" && dc != "4") || await this.#getIsPremium() ? 8 : 4;
  }

  async #getUploadClient() {
    const dc = this.#client!.dc;
    const poolSize = await this.#getUploadPoolSize();
    const pool = this.#uploadPools[dc] ??= new ClientEncryptedPool();
    if (!pool.size) {
      for (let i = 0; i < poolSize; ++i) {
        pool.add(await this.#newClient(dc, false, true));
      }
    }
    const client = pool.nextClient();
    if (client.authKey.length) {
      return client;
    }
    await this.#setupClient(client);
    return client;
  }

  async #setupClient(client: ClientEncrypted) {
    const storage = client.dc == this.#client!.dc ? this.storage : new StorageOperations(this.storage.provider.branch(client.dc + (client.cdn ? "_cdn" : "")));
    const [authKey, serverSalt] = await Promise.all([storage.getAuthKey(), storage.getServerSalt()]);
    if (authKey) {
      await client.setAuthKey(authKey);
      if (serverSalt) {
        client.serverSalt = serverSalt;
      }
    }
    await client.connect();
    if (!authKey) {
      await this.#importAuthorization(client);
    }
    await storage.setAuthKey(client.authKey);
    if (client.dc !== this.#client!.dc) {
      await storage.setServerSalt(client.serverSalt);
      client.handlers.onNewServerSalt = async (serverSalt) => {
        await storage.setServerSalt(serverSalt);
      };
    }
  }

  async #importAuthorization(client: ClientEncrypted) {
    if (this.#client!.dc == client.dc && this.#client!.cdn == client.cdn) {
      const [authKey, serverSalt] = await Promise.all([this.storage.getAuthKey(), this.storage.getServerSalt()]);
      if (authKey) {
        await client.setAuthKey(authKey);
        if (serverSalt) {
          client.serverSalt = serverSalt;
        }
      }
      return;
    }
    const exportedAuthorization = await this.#client!.invoke({ _: "auth.exportAuthorization", dc_id: getDcId(client.dc, client.cdn) });
    await client.invoke({ ...exportedAuthorization, _: "auth.importAuthorization" });
  }

  async #invoke<T extends Api.AnyFunction | Mtproto.ping, R = T extends Mtproto.ping ? Mtproto.pong : T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T, params?: InvokeParams): Promise<R> {
    if (!this.#client) {
      throw new ConnectionError("Not connected.");
    }
    let n = 1;
    let client: ClientEncrypted;
    while (true) {
      client = params ? await this.#getClient(params) : this.#client!;
      const main = client === this.#client;
      try {
        const result = await client.invoke(function_);
        if (main) {
          try {
            await this.#updateManager.processResult(result as Api.DeserializedType);
          } catch (err) {
            this.#L.error("failed to process result:", err);
          }
          if (Api.isOfEnum("Update", result) || Api.isOfEnum("Updates", result)) {
            return new Promise<R>((resolve) => {
              this.#updateManager.processUpdates(result, true, null, () => resolve(result as R));
            });
          }
        }
        return result as R;
      } catch (err) {
        if (err instanceof AuthKeyUnregistered && !main) {
          await this.#importAuthorization(client);
          continue;
        } else if (err instanceof ConnectionError && !main && !this.disconnected) {
          continue;
        } else if (await this.#handleInvokeError(Object.freeze({ client: this, error: err, function: function_, n: n++ }), () => Promise.resolve(false))) {
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
  invoke: {
    <T extends Api.AnyFunction | Mtproto.ping, R = T extends Mtproto.ping ? Mtproto.pong : T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T, params?: InvokeParams): Promise<R>;
    use: (handler: InvokeErrorHandler<Client<C>>) => void;
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

  exportAuthString(): Promise<string> {
    return this.storage.exportAuthString(this.#apiId);
  }

  #authStringImported = false;
  async importAuthString(authString: string) {
    if (this.connected) {
      throw new Error("Cannot import auth string while the client is connected");
    }
    await this.#initStorage();
    await this.storage.importAuthString(authString);
    this.#authStringImported = true;
    if (!this.#apiId) {
      this.#apiId = await this.storage.getApiId() ?? 0;
    }
  }

  async #getUserAccessHash(userId: bigint) {
    const users = await this.invoke({ _: "users.getUsers", id: [{ _: "inputUser", user_id: userId, access_hash: 0n }] });
    const user = Api.as("user", users[0]);
    if (user) {
      await this.messageStorage.setEntity(user);
    }
    return user?.access_hash ?? 0n;
  }

  async #getChannelAccessHash(channelId: bigint) {
    const channels = await this.invoke({ _: "channels.getChannels", id: [{ _: "inputChannel", channel_id: channelId, access_hash: 0n }] });
    const channel = Api.as("channel", channels.chats[0]);
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
  async getInputPeer(id: ID): Promise<Api.InputPeer> {
    if (id === "me" || id == await this.#getSelfId()) {
      return { _: "inputPeerSelf" };
    }
    const inputPeer = await this.#getInputPeerInner(id);
    if (((Api.is("inputPeerUser", inputPeer) || Api.is("inputPeerChannel", inputPeer)) && inputPeer.access_hash == 0n) && await this.storage.getAccountType() == "bot") {
      if ("channel_id" in inputPeer) {
        inputPeer.access_hash = await this.#getChannelAccessHash(inputPeer.channel_id);
      } else {
        inputPeer.access_hash = await this.#getUserAccessHash(inputPeer.user_id);
      }
    }
    if ((Api.is("inputPeerUser", inputPeer) || Api.is("inputPeerChannel", inputPeer)) && inputPeer.access_hash == 0n && await this.storage.getAccountType() == "user") {
      throw new AccessError(`Cannot access the chat ${id} because there is no access hash for it.`);
    }
    return inputPeer;
  }

  async #getInputPeerChatId(inputPeer: Api.InputPeer | Api.InputUser | Api.InputChannel) {
    if (Api.isOneOf(["inputPeerSelf", "inputUserSelf"], inputPeer)) {
      return await this.#getSelfId();
    } else if (Api.isOneOf(["inputPeerEmpty", "inputUserEmpty", "inputChannelEmpty"], inputPeer)) {
      unreachable();
    } else {
      return Api.peerToChatId(inputPeer);
    }
  }

  /**
   * Get a channel or a supergroup's inputChannel. Useful when calling API functions directly.
   *
   * @param id The identifier of the channel or the supergroup.
   */
  async getInputChannel(id: ID): Promise<Api.inputChannel | Api.inputChannelFromMessage> {
    const inputPeer = await this.getInputPeer(id);
    if (!canBeInputChannel(inputPeer)) {
      throw new TypeError(`The chat ${id} is not a channel neither a supergroup.`);
    }
    return toInputChannel(inputPeer);
  }

  /**
   * Get a user's inputUser. Useful when calling API functions directly.
   *
   * @param id The identifier of the user.
   */
  async getInputUser(id: ID): Promise<Api.inputUserSelf | Api.inputUser | Api.inputUserFromMessage> {
    const inputPeer = await this.getInputPeer(id);
    if (!canBeInputUser(inputPeer)) {
      throw new TypeError(`The chat ${id} is not a private chat.`);
    }
    return toInputUser(inputPeer);
  }

  async #getInputPeerInner(id: ID) {
    const idn = Number(id);
    if (!isNaN(idn)) {
      id = idn;
    }
    let peer: Api.InputPeer;
    if (typeof id === "string") {
      id = getUsername(id);
      let resolvedId = 0;
      const maybeUsername = await this.messageStorage.getUsername(id);
      if (maybeUsername != null && Date.now() - maybeUsername[1].getTime() < USERNAME_TTL) {
        const [id] = maybeUsername;
        resolvedId = id;
      } else {
        const resolved = await this.invoke({ _: "contacts.resolveUsername", username: id });
        await this.#updateManager.processChats(resolved.chats, resolved);
        await this.#updateManager.processUsers(resolved.users, resolved);
        if (Api.is("peerUser", resolved.peer)) {
          resolvedId = Api.peerToChatId(resolved.peer);
        } else if (Api.is("peerChannel", resolved.peer)) {
          resolvedId = Api.peerToChatId(resolved.peer);
        } else {
          unreachable();
        }
      }
      const resolvedIdType = Api.getChatIdPeerType(resolvedId);
      if (resolvedIdType == "user") {
        const accessHash = await this.messageStorage.getUserAccessHash(resolvedId);

        peer = { _: "inputPeerUser", user_id: Api.chatIdToPeerId(resolvedId), access_hash: accessHash ?? 0n } as Api.inputPeerUser;
      } else if (resolvedIdType == "channel") {
        const accessHash = await this.messageStorage.getChannelAccessHash(resolvedId);
        peer = { _: "inputPeerChannel", channel_id: Api.chatIdToPeerId(resolvedId), access_hash: accessHash ?? 0n } as Api.inputPeerChannel;
      } else {
        unreachable();
      }
    } else if (id > 0) {
      const accessHash = await this.messageStorage.getUserAccessHash(id);
      peer = { _: "inputPeerUser", user_id: Api.chatIdToPeerId(id), access_hash: accessHash ?? 0n } as Api.inputPeerUser;
    } else if (-MAX_CHAT_ID <= id) {
      peer = { _: "inputPeerChat", chat_id: BigInt(Math.abs(id)) } as Api.inputPeerChat;
    } else if (ZERO_CHANNEL_ID - MAX_CHANNEL_ID <= id && id != ZERO_CHANNEL_ID) {
      const accessHash = await this.messageStorage.getChannelAccessHash(id);
      peer = { _: "inputPeerChannel", channel_id: Api.chatIdToPeerId(id), access_hash: accessHash ?? 0n } as Api.inputPeerChannel;
    } else {
      throw new InputError("The ID is of an format unknown.");
    }

    if (!Api.is("inputPeerChat", peer) && !peer.access_hash) {
      const chatId = Api.peerToChatId(peer);
      const minPeerReference = await this.messageStorage.getLastMinPeerReference(chatId);
      if (minPeerReference) {
        const minInputPeer = await this.#getMinInputPeer(canBeInputChannel(peer) ? "channel" : "user", { ...minPeerReference, senderId: chatId });
        if (minInputPeer) {
          this.#Lmin.debug("resolved input min peer", minInputPeer);
          peer = minInputPeer;
        }
      }
    }

    return peer;
  }

  async #getMinInputPeer(type: "user" | "channel", reference: { chatId: number; senderId: number; messageId: number }): Promise<Api.inputPeerUserFromMessage | Api.inputPeerChannelFromMessage | null> {
    const entity = await this.messageStorage.getEntity(reference.chatId);
    if (Api.isOneOf(["channel", "channelForbidden"], entity) && entity.access_hash) {
      const peer: Api.inputPeerChannel = { _: "inputPeerChannel", channel_id: entity.id, access_hash: entity.access_hash };
      if (type == "user") {
        return { _: "inputPeerUserFromMessage", peer, msg_id: reference.messageId, user_id: Api.chatIdToPeerId(reference.senderId) };
      } else {
        return { _: "inputPeerChannelFromMessage", peer, msg_id: reference.messageId, channel_id: Api.chatIdToPeerId(reference.senderId) };
      }
    } else {
      return null;
    }
  }

  private [getEntity](peer: Api.peerUser): Promise<Api.user | null>;
  private [getEntity](peer: Api.peerChat): Promise<Api.chat | Api.chatForbidden | null>;
  private [getEntity](peer: Api.peerChannel): Promise<Api.channel | Api.channelForbidden | null>;
  private [getEntity](peer: Api.peerUser | Api.peerChat | Api.peerChannel): Promise<Api.user | Api.chat | Api.chatForbidden | Api.channel | Api.channelForbidden | null>;
  private async [getEntity](peer: Api.peerUser | Api.peerChat | Api.peerChannel) {
    const id = Api.peerToChatId(peer);
    const entity = await this.messageStorage.getEntity(id);
    if (entity == null && await this.storage.getAccountType() == "bot" && Api.is("peerUser", peer) || Api.is("peerChannel", peer)) {
      await this.getInputPeer(id);
    } else {
      return entity;
    }
    return await this.messageStorage.getEntity(id);
  }

  async #handleCtxUpdate(update: Update) {
    if (this.#disableUpdates && !("authorizationState" in update) && !("connectionState" in update)) {
      return;
    }
    try {
      await this.middleware()(await this.#constructContext(update), resolve);
    } catch (err) {
      this.#L.error("Failed to handle update:", err);
    }
  }

  #queueHandleCtxUpdate(update: Update) {
    this.#updateManager.getHandleUpdateQueue(UpdateManager.MAIN_BOX_ID).add(async () => {
      await this.#handleCtxUpdate(update);
    });
  }

  async #handleUpdate(update: Api.Update) {
    const promises = new Array<() => Promise<unknown>>();
    if (Api.is("updateUserName", update)) {
      await this.messageStorage.updateUsernames(Number(update.user_id), update.usernames.map((v) => v.username));
      const peer: Api.peerUser = { ...update, _: "peerUser" };
      const entity = await this[getEntity](peer);
      if (entity != null) {
        entity.usernames = update.usernames;
        entity.first_name = update.first_name;
        entity.last_name = update.last_name;
        await this.messageStorage.setEntity(entity);
      }
    }

    if (this.#messageManager.canHandleUpdate(update)) {
      promises.push(async () => {
        const ctxUpdate = await this.#messageManager.handleUpdate(update);
        if (!ctxUpdate) {
          return;
        }
        try {
          await this.#handleCtxUpdate(ctxUpdate);
        } finally {
          if ("deletedMessages" in ctxUpdate) {
            for (const { chatId, messageId } of ctxUpdate.deletedMessages) {
              await this.messageStorage.setMessage(chatId, messageId, null);
              await this.#chatListManager.reassignChatLastMessage(chatId);
            }
          }
        }
      });
    }

    if (this.#chatManager.canHandleUpdate(update)) {
      promises.push(async () => {
        const ctxUpdate = await this.#chatManager.handleUpdate(update);
        if (ctxUpdate) {
          await this.#handleCtxUpdate(ctxUpdate);
        }
      });
    }

    if (this.#pollManager.canHandleUpdate(update)) {
      promises.push(async () => {
        const ctxUpdate = await this.#pollManager.handleUpdate(update);
        if (ctxUpdate) {
          await this.#handleCtxUpdate(ctxUpdate);
        }
      });
    }

    if (this.#videoChatManager.canHandleUpdate(update)) {
      promises.push(async () => {
        const ctxUpdate = await this.#videoChatManager.handleUpdate(update);
        if (ctxUpdate) {
          await this.#handleCtxUpdate(ctxUpdate);
        }
      });
    }

    if (this.#callbackQueryManager.canHandleUpdate(update)) {
      promises.push(async () => this.#handleCtxUpdate(await this.#callbackQueryManager.handleUpdate(update)));
    }

    if (this.#inlineQueryManager.canHandleUpdate(update)) {
      promises.push(async () => this.#handleCtxUpdate(await this.#inlineQueryManager.handleUpdate(update)));
    }

    if (this.#reactionManager.canHandleUpdate(update)) {
      promises.push(async () => {
        const upd = await this.#reactionManager.handleUpdate(update);
        if (upd) {
          await this.#handleCtxUpdate(upd);
        }
      });
    }

    if (this.#chatListManager.canHandleUpdate(update)) {
      promises.push(() => this.#chatListManager.handleUpdate(update));
    }

    if (this.#storyManager.canHandleUpdate(update)) {
      promises.push(async () => {
        const ctxUpdate = await this.#storyManager.handleUpdate(update);
        if (ctxUpdate) {
          await this.#handleCtxUpdate(ctxUpdate);
        }
      });
    }

    if (this.#businessConnectionManager.canHandleUpdate(update)) {
      promises.push(async () => this.#handleCtxUpdate(await this.#businessConnectionManager.handleUpdate(update)));
    }

    if (this.#storyManager.canHandleUpdate(update)) {
      promises.push(async () => {
        const ctxUpdate = await this.#storyManager.handleUpdate(update);
        if (ctxUpdate) {
          await this.#handleCtxUpdate(ctxUpdate);
        }
      });
    }

    if (this.#paymentManager.canHandleUpdate(update)) {
      promises.push(async () => {
        const ctxUpdate = await this.#paymentManager.handleUpdate(update);
        if (ctxUpdate) {
          await this.#handleCtxUpdate(ctxUpdate);
        }
      });
    }

    if (this.#translationsManager.canHandleUpdate(update)) {
      promises.push(async () => {
        const ctxUpdate = await this.#translationsManager.handleUpdate(update);
        if (ctxUpdate) {
          await this.#handleCtxUpdate(ctxUpdate);
        }
      });
    }

    return () => Promise.all(promises.map((v) => v()));
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

  #previouslyConnected = false;
  #lastConnectionState = false;
  #onConnectionStateChange(connected: boolean) {
    if (this.#lastConnectionState != connected) {
      if (connected) {
        if (this.#previouslyConnected) {
          drop(this.#updateManager.recoverUpdateGap("reconnect"));
        }
        this.#previouslyConnected = true;
      }
      const connectionState = connected ? "ready" : "notConnected";
      this.#queueHandleCtxUpdate({ connectionState });
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
    let user_ = await this[getEntity]({ _: "peerUser", user_id: BigInt(await this.#getSelfId()) });
    if (user_ == null) {
      const users = await this.invoke({ _: "users.getUsers", id: [{ _: "inputUserSelf" }] });
      user_ = Api.as("user", users[0]);
      await this.messageStorage.setEntity(user_);
      await this.storage.setIsPremium(user_.premium ?? false);
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
   * Hide all usernames from a supergroup or a channel's profile. User-only.
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

  /**
   * Set the current account's online status. User-only.
   *
   * @method ac
   * @param online The new online status.
   */
  async setOnline(online: boolean): Promise<void> {
    await this.#accountManager.setOnline(online);
  }

  /**
   * Set the current account's emoji status. User-only.
   *
   * @method ac
   * @param id The identifier of the emoji to be used as the new status.
   */
  async setEmojiStatus(id: string, params?: SetEmojiStatusParams) {
    await this.#accountManager.setEmojiStatus(id, params);
  }

  /**
   * Set the emoji status of a bot's user. Bot-only.
   *
   * @method ac
   * @param userId The identifier of a user of the bot.
   * @param id The identifier of the emoji to be used as the new status.
   */
  async setUserEmojiStatus(userId: ID, id: string, params?: SetEmojiStatusParams) {
    await this.#accountManager.setUserEmojiStatus(userId, id, params);
  }

  /**
   * Update the profile of the current user. At least one parameter must be specified. User-only.
   *
   * @method ac
   */
  async updateProfile(params?: UpdateProfileParams): Promise<void> {
    await this.#accountManager.updateProfile(params);
  }

  /**
   * Set the birthday of the current user. User-only.
   *
   * @method ac
   */
  async setBirthday(params?: SetBirthdayParams): Promise<void> {
    await this.#accountManager.setBirthday(params);
  }

  /**
   * Set the personal channel of the current user. User-only.
   *
   * @method ac
   */
  async setPersonalChannel(params?: SetPersonalChannelParams): Promise<void> {
    await this.#accountManager.setPersonalChannel(params);
  }

  /**
   * Set the name color of the current user. User-only.
   *
   * @method ac
   * @param color The identifier of the color to set.
   */
  async setNameColor(color: number, params?: SetNameColorParams): Promise<void> {
    await this.#accountManager.setNameColor(color, params);
  }

  /**
   * Set the profile color of the current user. User-only.
   *
   * @method ac
   * @param color The identifier of the color to set.
   */
  async setProfileColor(color: number, params?: SetProfileColorParams): Promise<void> {
    await this.#accountManager.setProfileColor(color, params);
  }

  /**
   * Set the location of the current user. User-only.
   *
   * @method ac
   */
  async setLocation(params?: SetLocationParams): Promise<void> {
    await this.#accountManager.setLocation(params);
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
   * Send a media group.
   *
   * @method ms
   * @param chatId The chat to send the media group to.
   * @param media The media to include in the media group. Animations are not allowed. All of them must be of the same media type, but an exception is that photos and videos can be mixed.
   * @returns The sent messages.
   */
  async sendMediaGroup(chatId: ID, media: InputMedia[], params?: SendMediaGroupParams): Promise<Message[]> {
    return await this.#messageManager.sendMediaGroup(chatId, media, params);
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
  async sendPoll(chatId: ID, question: string, options: string[], params?: SendPollParams): Promise<MessagePoll> {
    return await this.#messageManager.sendPoll(chatId, question, options, params);
  }

  /**
   * Send an invoice. Bot-only.
   *
   * @method ms
   * @param chatId The chat to send the invoice to.
   * @param title The invoice's title.
   * @param description The invoice's description.
   * @param payload The invoice's payload.
   * @param currency The invoice's currency.
   * @param prices The invoice's price tags.
   * @returns The sent invoice.
   */
  async sendInvoice(chatId: ID, title: string, description: string, payload: string, currency: string, prices: PriceTag[], params?: SendInvoiceParams): Promise<MessageInvoice> {
    return await this.#messageManager.sendInvoice(chatId, title, description, payload, currency, prices, params);
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
  async editMessageText(chatId: ID, messageId: number, text: string, params?: EditMessageTextParams): Promise<MessageText> {
    return await this.#messageManager.editMessageText(chatId, messageId, text, params);
  }

  /**
   * Edit a message's caption.
   *
   * @method ms
   * @param chatId The identifier of the chat that contains the message.
   * @param messageId The message's identifier.
   * @param text The new caption of the message.
   * @returns The edited message.
   */
  async editMessageCaption(chatId: ID, messageId: number, params?: EditMessageCaptionParams): Promise<Message> {
    return await this.#messageManager.editMessageCaption(chatId, messageId, params);
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
   * @param media The new media of the message.
   */
  async editInlineMessageMedia(inlineMessageId: string, media: InputMedia, params?: EditInlineMessageMediaParams): Promise<void> {
    await this.#messageManager.editInlineMessageMedia(inlineMessageId, media, params);
  }

  /**
   * Edit an inline message's text. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The inline message's identifier.
   * @param text The new text of the message.
   */
  async editInlineMessageText(inlineMessageId: string, text: string, params?: EditInlineMessageTextParams): Promise<void> {
    await this.#messageManager.editInlineMessageText(inlineMessageId, text, params);
  }

  /**
   * Edit an inline message's caption. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The inline message's identifier.
   */
  async editInlineMessageCaption(inlineMessageId: string, params?: EditInlineMessageCaptionParams): Promise<void> {
    await this.#messageManager.editInlineMessageCaption(inlineMessageId, params);
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
   * Retrieve a message using its link.
   *
   * @method ms
   * @param link A message link.
   * @example ```ts
   * const message = await client.resolveMessageLink("https://t.me/MTKruto/212");
   * ```
   * @returns The message that was linked to.
   */
  async resolveMessageLink(link: string): Promise<Message | null> {
    return await this.#messageManager.resolveMessageLink(link);
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
   * Delete multiple scheduled messages.
   *
   * @method ms
   * @param chatId The identifier of the chat that contains the scheduled messages.
   * @param messageIds The identifiers of the scheduled messages to delete.
   */
  async deleteScheduledMessages(chatId: ID, messageIds: number[]) {
    await this.#messageManager.deleteScheduledMessages(chatId, messageIds);
  }

  /**
   * Delete a scheduled message.
   *
   * @method ms
   * @param chatId The identifier of the chat that contains the scheduled message.
   * @param messageId The identifier of the scheduled message to delete.
   */
  async deleteScheduledMessage(chatId: ID, messageId: number) {
    await this.#messageManager.deleteScheduledMessage(chatId, messageId);
  }

  /**
   * Send multiple scheduled messages before their schedule.
   *
   * @method ms
   * @param chatId The identifier of the chat that contains the scheduled messages.
   * @param messageIds The identifiers of the scheduled messages to send.
   */
  async sendScheduledMessages(chatId: ID, messageIds: number[]): Promise<Message[]> {
    return await this.#messageManager.sendScheduledMessages(chatId, messageIds);
  }

  /**
   * Send a scheduled message before its schedule.
   *
   * @method ms
   * @param chatId The identifier of the chat that contains the scheduled message.
   * @param messageId The identifier of the scheduled message to send.
   */
  async sendScheduledMessage(chatId: ID, messageId: number): Promise<Message> {
    return await this.#messageManager.sendScheduledMessage(chatId, messageId);
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
  async unpinMessage(chatId: ID, messageId: number, params?: UnpinMessageParams) {
    await this.#messageManager.unpinMessage(chatId, messageId, params);
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
    return (await this.forwardMessages(from, to, [messageId], params))[0];
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

  /**
   * Mark messages as read. User-only.
   *
   * @method ms
   * @param chatId The identifier of the chat that includes the messages.
   * @param untilMessageId The identifier of a message that will be marked as read, along with any other unread messages before it.
   */
  async readMessages(chatId: number, untilMessageId: number): Promise<void> {
    await this.#messageManager.readMessages(chatId, untilMessageId);
  }

  /**
   * Start a bot. User-only.
   *
   * @method ms
   * @param botId The identifier of the bot to start.
   * @returns The start message.
   */
  async startBot(botId: number, params?: StartBotParams): Promise<Message> {
    return await this.#messageManager.startBot(botId, params);
  }

  /**
   * Transcribe a voice message. User-only.
   *
   * @method ms
   * @param chatId The identifier of the chat that includes the message.
   * @param messageId The identifier of the message.
   */
  async transcribeVoice(chatId: ID, messageId: number): Promise<VoiceTranscription> {
    return await this.#messageManager.transcribeVoice(chatId, messageId);
  }

  //
  // ========================= POLLS ========================= //
  //

  /**
   * Cast a vote. User-only.
   *
   * @method pl
   * @param chatId The identifier of the chat that includes the poll.
   * @param messageId The identifier of the message that includes the poll.
   * @param optionIndexes The indexes of the options to cast for.
   */
  async vote(chatId: ID, messageId: number, optionIndexes: number[]) {
    await this.#pollManager.vote(chatId, messageId, optionIndexes);
  }

  /**
   * Retract a vote. User-only.
   *
   * @method pl
   * @param chatId The identifier of the chat that includes the poll.
   * @param messageId The identifier of the message that includes the poll.
   */
  async retractVote(chatId: ID, messageId: number) {
    await this.#pollManager.retractVote(chatId, messageId);
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
  async getChats(params?: GetChatsParams): Promise<ChatListItem[]> {
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
    await this.#chatManager.setAvailableReactions(chatId, availableReactions);
  }

  /**
   * Set a chat's photo.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   * @param photo A photo to set as the chat's photo.
   */
  async setChatPhoto(chatId: number, photo: FileSource, params?: SetChatPhotoParams) {
    await this.#chatManager.setChatPhoto(chatId, photo, params);
  }

  /**
   * Delete a chat's photo.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   */
  async deleteChatPhoto(chatId: number) {
    await this.#chatManager.deleteChatPhoto(chatId);
  }

  /**
   * Ban a member from a chat.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   * @param memberId The identifier of the member.
   */
  async banChatMember(chatId: ID, memberId: ID, params?: BanChatMemberParams) {
    await this.#chatManager.banChatMember(chatId, memberId, params);
  }

  /**
   * Unban a member from a chat.
   *
   * @method ch
   * @param chatId The identifier of the chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  async unbanChatMember(chatId: ID, memberId: ID) {
    await this.#chatManager.unbanChatMember(chatId, memberId);
  }

  /**
   * Kick a member from a chat. Same as a banChatMember call followed by unbanChatMember.
   *
   * @method ch
   * @param chatId The identifier of the chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  async kickChatMember(chatId: ID, memberId: ID) {
    await this.#chatManager.banChatMember(chatId, memberId);
    await this.#chatManager.unbanChatMember(chatId, memberId);
  }

  /**
   * Set the rights of a chat member.
   *
   * @method ch
   * @param chatId The identifier of the chat. Must be a supergroup.
   * @param memberId The identifier of a member.
   */
  async setChatMemberRights(chatId: ID, memberId: ID, params?: SetChatMemberRightsParams) {
    await this.#chatManager.setChatMemberRights(chatId, memberId, params);
  }

  /**
   * Get the administrators of a chat.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   * @returns The chat's administrators.
   */
  async getChatAdministrators(chatId: ID): Promise<ChatMember[]> {
    return await this.#chatListManager.getChatAdministrators(chatId);
  }

  /**
   * Enable join requests in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat. Must be a channel or a supergroup.
   */
  async enableJoinRequests(chatId: ID) {
    await this.#chatManager.enableJoinRequests(chatId);
  }

  /**
   * Disable join requests in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat. Must be a channel or a supergroup.
   */
  async disableJoinRequests(chatId: ID) {
    await this.#chatManager.disableJoinRequests(chatId);
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
    return await this.#chatManager.getCreatedInviteLinks(chatId, params);
  }

  /**
   * Join a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat to join.
   */
  async joinChat(chatId: ID) {
    await this.#chatManager.joinChat(chatId);
  }

  /**
   * Leave a chat.
   *
   * @method ch
   * @param chatId The identifier of the chat to leave.
   */
  async leaveChat(chatId: ID) {
    await this.#chatManager.leaveChat(chatId);
  }

  /**
   * Get information on a user's chat membership.
   *
   * @method ch
   * @param chatId The identifier of a chat that includes the user.
   * @param userId The identifier of the user.
   */
  async getChatMember(chatId: ID, userId: ID): Promise<ChatMember> {
    return await this.#chatListManager.getChatMember(chatId, userId);
  }

  /**
   * Get the members of a chat.
   *
   * @method ch
   * @param chatId The chat to get its members.
   */
  async getChatMembers(chatId: ID, params?: GetChatMembersParams): Promise<ChatMember[]> {
    return await this.#chatListManager.getChatMembers(chatId, params);
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
    await this.#chatManager.setBoostsRequiredToCircumventRestrictions(chatId, boosts);
  }

  /**
   * Create an invite link.
   *
   * @method ch
   * @param chatId The identifier of the chat to create the invite link for.
   * @returns The newly created invite link.
   */
  async createInviteLink(chatId: ID, params?: CreateInviteLinkParams): Promise<InviteLink> {
    return await this.#chatManager.createInviteLink(chatId, params);
  }

  /**
   * Approve a join request.
   *
   * @method ch
   * @param chatId The identifier of the chat that contains the join request.
   * @param userId The user who made the join request.
   */
  async approveJoinRequest(chatId: ID, userId: ID): Promise<void> {
    await this.#chatManager.approveJoinRequest(chatId, userId);
  }

  /**
   * Decline a join request.
   *
   * @method ch
   * @param chatId The identifier of the chat that contains the join request.
   * @param userId The user who made the join request.
   */
  async declineJoinRequest(chatId: ID, userId: ID): Promise<void> {
    await this.#chatManager.declineJoinRequest(chatId, userId);
  }

  /**
   * Approve all join requests. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat that contains the join requests.
   */
  async approveJoinRequests(chatId: ID, params?: ApproveJoinRequestsParams): Promise<void> {
    await this.#chatManager.approveJoinRequests(chatId, params);
  }

  /**
   * Decline all join requests. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat that contains the join requests.
   */
  async declineJoinRequests(chatId: ID, params?: DeclineJoinRequestsParams): Promise<void> {
    await this.#chatManager.declineJoinRequests(chatId, params);
  }

  /**
   * Add a single user to a chat.
   *
   * @method ch
   * @param chatId The identifier of the chat to add the user to.
   * @param userId The identifier of the user to add to the chat.
   * @returns An array of FailedInvitation that has at most a length of 1. If empty, it means that the user was added.
   */
  async addChatMember(chatId: ID, userId: ID, params?: AddChatMemberParams): Promise<FailedInvitation[]> {
    return await this.#chatManager.addChatMember(chatId, userId, params);
  }

  /**
   * Add multiple users at once to a channel or a supergroup.
   *
   * @method ch
   * @param chatId The identifier of the channel or supergroup to add the users to.
   * @param userId The identifiers of the users to add to the channel or supergroup.
   */
  async addChatMembers(chatId: ID, userIds: ID[]): Promise<FailedInvitation[]> {
    return await this.#chatManager.addChatMembers(chatId, userIds);
  }

  /**
   * Open a chat. User-only.
   *
   * @method ch
   * @param chatId The chat to open.
   */
  async openChat(chatId: ID): Promise<void> {
    await this.#updateManager.openChat(chatId);
  }

  /**
   * Close a chat previously opened by openChat. User-only.
   *
   * @method ch
   * @param chatId The chat to close.
   */
  async closeChat(chatId: ID): Promise<void> {
    await this.#updateManager.closeChat(chatId);
  }

  /**
   * Create a group. User-only.
   *
   * @method ch
   * @param title The title of the group.
   * @returns The created group.
   */
  async createGroup(title: string, params?: CreateGroupParams): Promise<ChatPGroup> {
    return await this.#chatListManager.createGroup(title, params);
  }

  /**
   * Create a supergroup. User-only.
   *
   * @method ch
   * @param title The title of the supergroup.
   * @returns The created supergroup.
   */
  async createSupergroup(title: string, params?: CreateSupergroupParams): Promise<ChatPSupergroup> {
    return await this.#chatListManager.createSupergroup(title, params);
  }

  /**
   * Create a channel. User-only.
   *
   * @method ch
   * @param title The title of the channel.
   * @returns The created channel.
   */
  async createChannel(title: string, params?: CreateChannelParams): Promise<ChatPChannel> {
    return await this.#chatListManager.createChannel(title, params);
  }

  /**
   * Set the time to live of the messages of a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   * @param messageTtl The time to live of the messages in seconds.
   */
  async setMessageTtl(chatId: ID, messageTtl: number): Promise<void> {
    await this.#chatListManager.setMessageTtl(chatId, messageTtl);
  }

  /**
   * Archive multiple chats. User-only.
   *
   * @method ch
   * @param chatIds The identifiers of the chats to archive.
   */
  async archiveChats(chatIds: ID[]): Promise<void> {
    await this.#chatListManager.archiveChats(chatIds);
  }

  /**
   * Archive a single chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat to archive.
   */
  async archiveChat(chatId: ID): Promise<void> {
    await this.#chatListManager.archiveChat(chatId);
  }

  /**
   * Unarchive multiple chats. User-only.
   *
   * @method ch
   * @param chatIds The identifiers of the chats to unarchive.
   */
  async unarchiveChats(chatIds: ID[]): Promise<void> {
    await this.#chatListManager.unarchiveChats(chatIds);
  }

  /**
   * Unarchive a single chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat to unarchive.
   */
  async unarchiveChat(chatId: ID): Promise<void> {
    await this.#chatListManager.unarchiveChat(chatId);
  }

  /**
   * Get common chats between a user and the current one. User-only.
   *
   * @method ch
   * @param userId The identifier of the user to get the common chats with them.
   */
  async getCommonChats(userId: ID, params?: GetCommonChatsParams): Promise<ChatP[]> {
    return await this.#chatListManager.getCommonChats(userId, params);
  }

  /**
   * Get the settings of a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat to get the settings for.
   */
  async getChatSettings(chatId: ID): Promise<ChatSettings> {
    return await this.#chatListManager.getChatSettings(chatId);
  }

  /**
   * Disable business bots in a private chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the private chat to disable business bots in.
   */
  async disableBusinessBots(chatId: ID): Promise<void> {
    await this.#chatListManager.disableBusinessBots(chatId);
  }

  /**
   * Enable business bots in a private chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the private chat to enable business bots in.
   */
  async enableBusinessBots(chatId: ID): Promise<void> {
    await this.#chatListManager.enableBusinessBots(chatId);
  }

  /**
   * Disable slow mode in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group to disable slow mode in.
   */
  async disableSlowMode(chatId: ID): Promise<void> {
    await this.#chatManager.disableSlowMode(chatId);
  }

  /**
   * Change slow mode in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group to change slow mode in.
   * @param duration New slow mode duration.
   */
  async setSlowMode(chatId: ID, duration: SlowModeDuration): Promise<void> {
    await this.#chatManager.setSlowMode(chatId, duration);
  }

  /**
   * Change the title of a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param title The new title.
   */
  async setChatTitle(chatId: ID, title: string): Promise<void> {
    await this.#chatManager.setChatTitle(chatId, title);
  }

  /**
   * Change the description of a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param description The new description.
   */
  async setChatDescription(chatId: ID, description: string): Promise<void> {
    await this.#chatManager.setChatDescription(chatId, description);
  }

  /**
   * Hide or show the member list of a group to non-admins. User-only.
   *
   * @method ch
   * @param chatId The identifier of a group.
   * @param visible Whether the member list of the group should be visible.
   */
  async setMemberListVisibility(chatId: ID, visible: boolean): Promise<void> {
    await this.#chatManager.setMemberListVisibility(chatId, visible);
  }

  /**
   * Enable or disable topics in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of a group.
   * @param enabled Whether topics should be enabled in the group.
   */
  async setTopicsEnabled(chatId: ID, enabled: boolean): Promise<void> {
    await this.#chatManager.setTopicsEnabled(chatId, enabled);
  }

  /**
   * Enable or disable automatic anti-spam in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of a group.
   * @param enabled Whether automatic anti-spam should be enabled in the group.
   */
  async setAntispamEnabled(chatId: ID, enabled: boolean): Promise<void> {
    await this.#chatManager.setAntispamEnabled(chatId, enabled);
  }

  /**
   * Enable or disable post signatures in a channel. User-only.
   *
   * @method ch
   * @param chatId The identifier of a channel.
   * @param enabled Whether post signatures should be enabled in the channel.
   */
  async setSignaturesEnabled(chatId: ID, enabled: boolean, params?: SetSignaturesEnabledParams): Promise<void> {
    await this.#chatManager.setSignaturesEnabled(chatId, enabled, params);
  }

  /**
   * Delete a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat to delete.
   */
  async deleteChat(chatId: ID): Promise<void> {
    await this.#chatManager.deleteChat(chatId);
  }

  /**
   * Get discussion chat suggestions. User-only.
   *
   * @method ch
   */
  async getDiscussionChatSuggestions(): Promise<ChatP[]> {
    return await this.#chatManager.getDiscussionChatSuggestions();
  }

  /**
   * Set a channel's discussion chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a channel.
   * @param discussionChatId The identifier of the chat to use as discussion for the channel.
   */
  async setDiscussionChat(chatId: ID, discussionChatId: ID): Promise<void> {
    await this.#chatManager.setDiscussionChat(chatId, discussionChatId);
  }

  /**
   * Transfer the ownership of a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param userId The identifier of the new owner.
   * @param password The password of the current account.
   */
  async transferChatOwnership(chatId: ID, userId: ID, password: string): Promise<void> {
    await this.#chatManager.transferChatOwnership(chatId, userId, password);
  }

  /**
   * Create a forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param title The title of the topic.
   * @returns The created topic.
   */
  async createTopic(chatId: ID, title: string, params?: CreateTopicParams): Promise<Topic> {
    return await this.#forumManager.createTopic(chatId, title, params);
  }

  /**
   * Edit a forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param topicId The identifier of the topic.
   * @param title The new title of the topic.
   * @returns The new topic.
   */
  async editTopic(chatId: ID, topicId: number, title: string, params?: EditTopicParams): Promise<Topic> {
    return await this.#forumManager.editTopic(chatId, topicId, title, params);
  }

  /**
   * Hide the general forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async hideGeneralTopic(chatId: ID): Promise<void> {
    await this.#forumManager.hideGeneralTopic(chatId);
  }

  /**
   * Show the general forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async showGeneralTopic(chatId: ID): Promise<void> {
    await this.#forumManager.showGeneralTopic(chatId);
  }

  /**
   * Close a forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param topicId The identifier of the topic.
   */
  async closeTopic(chatId: ID, topicId: number): Promise<void> {
    await this.#forumManager.closeTopic(chatId, topicId);
  }

  /**
   * Reopen a forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param topicId The identifier of the topic.
   */
  async reopenTopic(chatId: ID, topicId: number): Promise<void> {
    await this.#forumManager.reopenTopic(chatId, topicId);
  }

  /**
   * Pin a forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param topicId The identifier of the topic.
   */
  async pinTopic(chatId: ID, topicId: number): Promise<void> {
    await this.#forumManager.pinTopic(chatId, topicId);
  }

  /**
   * Unpin a forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param topicId The identifier of the topic.
   */
  async unpinTopic(chatId: ID, topicId: number): Promise<void> {
    await this.#forumManager.unpinTopic(chatId, topicId);
  }

  //
  // ========================= CALLBACK QUERIES ========================= //
  //

  /**
   * Send a callback query. User-only.
   *
   * @method cq
   * @param chatId The chat that includes the messsage.
   * @param messageId The message that includes at a button responsible for the callback query question.
   * @param question The callback query's question.
   * @returns The bot's answer to the callback query.
   */
  async sendCallbackQuery(chatId: ID, messageId: number, question: CallbackQueryQuestion): Promise<CallbackQueryAnswer> {
    return await this.#callbackQueryManager.sendCallbackQuery(chatId, messageId, question);
  }

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
   * Send an inline query. User-only.
   *
   * @method iq
   * @param userId The ID of the bot to send the inline query to.
   * @param chatId The ID of the chat from which the inline query is sent.
   * @returns The bot's answer to the inline query.
   */
  async sendInlineQuery(userId: ID, chatId: ID, params?: SendInlineQueryParams): Promise<InlineQueryAnswer> {
    return await this.#inlineQueryManager.sendInlineQuery(userId, chatId, params);
  }

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

  //
  // ========================= VIDEO CHATS ========================= //
  //

  /**
   * Start a video chat. User-only.
   *
   * @method vc
   * @param chatId The chat to start the video chat in.
   * @returns The started video chat.
   */
  async startVideoChat(chatId: ID, params?: StartVideoChatParams): Promise<VideoChatActive> {
    return await this.#videoChatManager.startVideoChat(chatId, params);
  }

  /**
   * Schedule a video chat. User-only.
   *
   * @method vc
   * @param chatId The chat to schedule the video chat in.
   * @param startAt A point in time within the future in which the video chat will be started.
   * @returns The scheduled video chat.
   */
  async scheduleVideoChat(chatId: ID, startAt: Date, params?: ScheduleVideoChatParams): Promise<VideoChatScheduled> {
    return await this.#videoChatManager.scheduleVideoChat(chatId, startAt, params);
  }

  /**
   * Join a video chat. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   * @param params_ WebRTC connection parameters.
   * @returns Parameters to be passed to the used WebRTC library.
   */
  async joinVideoChat(id: string, params_: string, params?: JoinVideoChatParams): Promise<string> {
    return await this.#videoChatManager.joinVideoChat(id, params_, params);
  }

  /**
   * Leave a video chat. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   */
  async leaveVideoChat(id: string): Promise<void> {
    await this.#videoChatManager.leaveVideoChat(id);
  }

  /**
   * Join a live stream. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   */
  async joinLiveStream(id: string): Promise<void> {
    await this.#videoChatManager.joinLiveStream(id);
  }

  /**
   * Get a video chat. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   */
  async getVideoChat(id: string): Promise<VideoChat> {
    return await this.#videoChatManager.getVideoChat(id);
  }

  /**
   * Get live stream channels. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   */
  async getLiveStreamChannels(id: string): Promise<LiveStreamChannel[]> {
    return await this.#videoChatManager.getLiveStreamChannels(id);
  }

  /**
   * Download a live stream chunk. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   * @param channelId Stream channel ID.
   * @param scale Stream channel scale.
   * @param timestamp Millisecond timestamp of the chunk to download.
   */
  async *downloadLiveStreamChunk(id: string, channelId: number, scale: number, timestamp: number, params?: DownloadLiveStreamChunkParams): AsyncGenerator<Uint8Array, void, unknown> {
    yield* this.#videoChatManager.downloadLiveStreamChunk(id, channelId, scale, timestamp, params);
  }

  //
  // ========================= PAYMENTS ========================= //
  //

  /**
   * Answer a pre-checkout query. Bot-only.
   *
   * @method pa
   * @param preCheckoutQueryId The identifier of the pre-checkout query.
   * @param ok Whether the checkout is going to be processed.
   */
  async answerPreCheckoutQuery(preCheckoutQueryId: string, ok: boolean, params?: AnswerPreCheckoutQueryParams): Promise<void> {
    await this.#paymentManager.answerPreCheckoutQuery(preCheckoutQueryId, ok, params);
  }

  /**
   * Refund a star payment. Bot-only.
   *
   * @method pa
   * @param userId The identifier of the user that was charged.
   * @param telegramPaymentChargeId The identifier of the charge.
   */
  async refundStarPayment(userId: ID, telegramPaymentChargeId: string): Promise<void> {
    await this.#paymentManager.refundStarPayment(userId, telegramPaymentChargeId);
  }

  //
  // ========================= CONTACTS ========================= //
  //

  /**
   * Get contacts. User-only.
   *
   * @method co
   */
  async getContacts(): Promise<User[]> {
    return await this.#accountManager.getContacts();
  }

  /**
   * Delete multiple contacts. User-only.
   *
   * @method co
   * @param userIds The identifiers of contacts to delete.
   */
  async deleteContacts(userIds: ID[]): Promise<void> {
    await this.#accountManager.deleteContacts(userIds);
  }

  /**
   * Delete a single contact. User-only.
   *
   * @method co
   * @param userId The identifier of the contact to delete.
   */
  async deleteContact(userId: ID): Promise<void> {
    await this.#accountManager.deleteContact(userId);
  }

  /**
   * Add a contact. User-only.
   *
   * @method co
   * @param userId The identifier of a user to add as contact.
   */
  async addContact(userId: ID, params?: AddContactParams): Promise<void> {
    await this.#accountManager.addContact(userId, params);
  }

  //
  // ========================= TRANSLATIONS ========================= //
  //

  /**
   * Get translations. User-only.
   *
   * @method ta
   */
  async getTranslations(params?: GetTranslationsParams): Promise<Translation[]> {
    return await this.#translationsManager.getTranslations(params);
  }

  //
  // ========================= GIFTS ========================= //
  //

  /**
   * Get available gifts.
   *
   * @method gf
   */
  async getGifts(): Promise<Gift[]> {
    return await this.#giftManager.getGifts();
  }

  /**
   * Get gifts claimed by a user or a channel. User-only.
   *
   * @method gf
   * @param chatId The identifier of a user or a channel to get gifts for.
   */
  async getClaimedGifts(chatId: ID, params?: GetClaimedGiftsParams): Promise<ClaimedGifts> {
    return await this.#giftManager.getClaimedGifts(chatId, params);
  }

  /**
   * Send a gift.
   *
   * @method gf
   * @param chatId The identifier of a user or a channel to send the gift to.
   * @param giftId The identifier of the gift to send.
   */
  async sendGift(chatId: ID, giftId: string, params?: SendGiftParams): Promise<void> {
    await this.#giftManager.sendGift(chatId, giftId, params);
  }

  /**
   * Sell a gift.
   *
   * @method gf
   * @param userId The identifier of the user that sent the gift.
   * @param messageId The identifier of the service message announcing the receival of the gift.
   */
  async sellGift(userId: ID, messageId: number): Promise<void> {
    await this.#giftManager.sellGift(userId, messageId);
  }
}
