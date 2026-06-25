/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
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
import { drop, getLogger, type Logger, MAX_MONOFORUM_CHANNEL_ID, type MaybePromise, Mutex, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { type Storage, StorageMemory } from "../2_storage.ts";
import { Api, Mtproto } from "../2_tl.ts";
import { type DC, getDcId, type TransportProvider } from "../3_transport.ts";
import { type AlbumStoryList, type Animation, type AppSupport, type AuthorizationSession, type AvailableReactions, type Birthday, type BlockedUserList, type BotAccessSettings, type BotCommand, type BotTokenCheckResult, type BusinessConnection, type CallbackQueryAnswer, type CallbackQueryQuestion, type Chat, type ChatActionType, type ChatListItem, type ChatMember, type ChatP, type ChatPChannel, type ChatPGroup, type ChatPPrivate, type ChatPSupergroup, type ChatSettings, type ClaimedGifts, type CodeCheckResult, type ConnectedWebsite, type ConnectionState, constructChatP, constructUser2, type Country, type FailedInvitation, type FileSource, type Gift, type GiftCollection, type ID, type InactiveChat, type InlineQueryAnswer, type InlineQueryResult, type InputChecklistItem, type InputEmojiStatus, type InputGift, type InputMedia, type InputPollOption, type InputRichText, type InputSticker, type InputStoryContent, type InviteLink, type JoinRequest, type LeftChannelList, type LinkPreview, type LiveStreamChannel, type Message, type MessageAnimation, type MessageAudio, type MessageChecklist, type MessageContact, type MessageCounters, type MessageDice, type MessageDocument, type MessageInvoice, type MessageList, type MessageLivePhoto, type MessageLocation, type MessagePhoto, type MessagePoll, type MessageReactionList, type MessageRichText, type MessageSticker, type MessageText, type MessageVenue, type MessageVideo, type MessageVideoNote, type MessageViewer, type MessageVoice, type MiniAppInfo, type NetworkStatistics, type ParseMode, type PasswordCheckResult, type Poll, type PollVoterList, type PremiumSubscriptionDuration, type PriceTag, type ProfilePhotoList, type Reaction, type RecentActionsEntry, type ReportReason, type RichText, type SavedChats, type SecretChat, type SlowModeDuration, type StarAmount, type StarTransactionList, type Sticker, type StickerSet, type Story, type StoryAlbum, type StoryReportResult, type SummarizedText, type TextToTranslate, type Timezone, type Topic, type TopicList, type TopicListItem, type TranslatedText, type Translation, type Update, type User, type VideoChat, type VideoChatActive, type VideoChatScheduled, type VoiceTranscription } from "../3_types.ts";
import { APP_VERSION, DEVICE_MODEL, INITIAL_DC, LANG_CODE, LANG_PACK, MAX_CHANNEL_ID, MAX_CHAT_ID, PHONE_NUMBER_TTL, type PublicKeys, SYSTEM_LANG_CODE, SYSTEM_VERSION, USERNAME_TTL } from "../4_constants.ts";
import { AuthKeyUnregistered, FloodWait, Migrate, SessionRevoked } from "../4_errors.ts";
import { AbortableLoop } from "./0_abortable_loop.ts";
import type { AddBotToAttachmentsMenuParams, AddChatMemberParams, AddContactParams, AddReactionParams, AddStickerToStickerSetParams, AnswerCallbackQueryParams, AnswerInlineQueryParams, AnswerPreCheckoutQueryParams, ApproveJoinRequestsParams, BanChatMemberParams, CheckUsernameParams, CreateChannelParams, CreateGroupParams, CreateInviteLinkParams, CreateStickerSetParams, CreateStoryParams, CreateSupergroupParams, CreateTopicParams, DeclineJoinRequestsParams, DeleteAccountParams, DeleteMessageParams, DeleteMessagesParams, DownloadLiveStreamSegmentParams, DownloadParams, EditInlineMessageCaptionParams, EditInlineMessageMediaParams, EditInlineMessageRichTextParams, EditInlineMessageTextParams, EditMessageCaptionParams, EditMessageLiveLocationParams, EditMessageMediaParams, EditMessageReplyMarkupParams, EditMessageRichTextParams, EditMessageTextParams, EditTopicParams, EnableSignaturesParams, EndSecretChatParams, EndTakeoutSessionParams, ForwardMessagesParams, GetAdministeredChatsParams, GetBlockedUsersParams, GetChatMembersParams, GetChatsParams, GetClaimedGiftsParams, GetCommonChatsParams, GetCreatedInviteLinksParams, GetHistoryParams, GetJoinRequestsParams, GetLeftChannelsParams, GetLinkPreviewParams, GetMessageReactionsParams, GetMyCommandsParams, GetPollVotersParams, GetProfilePhotosParams, GetRecentActionsParams, GetSavedChatsParams, GetSavedMessagesParams, GetStarTransactionsParams, GetTopicsParams, GetTranslationsParams, GiftPremiumSubscriptionParams, InvokeParams, JoinVideoChatParams, MarkAllMentionsAsReadParams, OpenChatParams, OpenMiniAppParams, PinMessageParams, PromoteChatMemberParams, RemoveProfilePhotoParams, ReplaceStickerInStickerSetParams, ReportChatParams, ReportStoryParams, ResolveUsernameParams, ScheduleVideoChatParams, SearchMessagesParams, SendAnimationParams, SendAudioParams, SendChecklistParams, SendContactParams, SendDiceParams, SendDocumentParams, SendGiftParams, SendInlineQueryParams, SendInvoiceParams, SendLivePhotoParams, SendLocationParams, SendMediaGroupParams, SendMessageDraftParams, SendMessageParams, SendPhotoParams, SendPollParams, SendRichTextDraftParams, SendRichTextParams, SendSecretAnimationParams, SendSecretAudioParams, SendSecretContactParams, SendSecretDocumentParams, SendSecretLocationParams, SendSecretMessageParams, SendSecretPhotoParams, SendSecretStickerParams, SendSecretVenueParams, SendSecretVideoNoteParams, SendSecretVideoParams, SendSecretVoiceParams, SendStickerParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetBirthdayParams, SetChatMemberRightsParams, SetChatMemberTagParams, SetChatPhotoParams, SetContactNoteParams, SetEmojiStatusParams, SetLocationParams, SetManagedBotAccessSettingsParams, SetMyCommandsParams, SetNameColorParams, SetPersonalChannelParams, SetProfileColorParams, SetReactionsParams, SetWorkingHoursParams, SignInParams, StartBotParams, StartTakeoutSessionParams, StartVideoChatParams, StopPollParams, SummarizeTextParams, TranslateTextParams, UnpinMessageParams, UnpinMessagesParams, UpdateChecklistParams, UpdateProfileParams, UpdateProfilePhotoParams, UpdateProfileVideoParams } from "./0_params.ts";
import { StorageOperations } from "./0_storage_operations.ts";
import { canBeInputChannel, canBeInputUser, DOWNLOAD_POOL_SIZE, getUsername, toInputChannel, toInputUser } from "./0_utilities.ts";
import type { ClientGeneric } from "./1_client_generic.ts";
import type { ClientPlainParams } from "./1_client_plain.ts";
import { type InvokeErrorHandler, skipInvoke } from "./1_invoke_middleware.ts";
import { BotInfoManager } from "./2_bot_info_manager.ts";
import { BusinessConnectionManager } from "./2_business_connection_manager.ts";
import { ClientEncrypted } from "./2_client_encrypted.ts";
import { FileManager } from "./2_file_manager.ts";
import { GiftCollectionManager } from "./2_gift_collection_manager.ts";
import { ManagedBotManager } from "./2_managed_bot_manager.ts";
import { NetworkStatisticsManager } from "./2_network_statistics_manager.ts";
import { PaymentManager } from "./2_payment_manager.ts";
import { ReactionManager } from "./2_reaction_manager.ts";
import { signIn } from "./2_sign_in.ts";
import { StoryAlbumManager } from "./2_story_album_manager.ts";
import { TakeoutManager } from "./2_takeout_manager.ts";
import { TranslationsManager } from "./2_translations_manager.ts";
import { UpdateManager } from "./2_update_manager.ts";
import { AccountManager } from "./3_account_manager.ts";
import { ClientEncryptedPool } from "./3_client_encrypted_pool.ts";
import { MessageManager } from "./3_message_manager.ts";
import { SecretChatManager } from "./3_secret_chat_manager.ts";
import { StickerSetManager } from "./3_sticker_set_manager.ts";
import { VideoChatManager } from "./3_video_chat_manager.ts";
import { CallbackQueryManager } from "./4_callback_query_manager.ts";
import { ChatListManager } from "./4_chat_list_manager.ts";
import { ChatManager } from "./4_chat_manager.ts";
import { ChecklistManager } from "./4_checklist_manager.ts";
import { ContactManager } from "./4_contact_manager.ts";
import type { Context } from "./4_context.ts";
import { ForumManager } from "./4_forum_manager.ts";
import { GiftManager } from "./4_gift_manager.ts";
import { InlineQueryManager } from "./4_inline_query_manager.ts";
import { LinkPreviewManager } from "./4_link_preview_manager.ts";
import { PollManager } from "./4_poll_manager.ts";
import { StoryManager } from "./4_story_manager.ts";
import { Composer } from "./5_composer.ts";

export { restartAuth } from "./2_sign_in.ts";

export const handleMigrationError = Symbol("handleMigrationError");

// global Client ID counter for logs
let id = 0;

const getPeer = Symbol();

const mustGetPeer = Symbol();

export interface ClientParams extends ClientPlainParams {
  /** The storage provider to use. Defaults to memory storage. */
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
  /** Whether outgoing messages should be sent as high-level updates. Outgoing bot business messages will never be sent. Defaults to `false`. */
  outgoingMessages?: boolean;
  /** Whether to guarantee that order-sensitive updates are delivered at least once before delivering next ones. Useful mainly for clients providing a user interface à la Telegram Desktop. Defaults to `false`. */
  guaranteeUpdateDelivery?: boolean;
  /** Whether to ignore updates received while the client was not running. Defaults to `true` for bots and `false` for users. */
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
  /** Whether to disable receiving updates. UpdateConnectionState and UpdateAuthorizationState will always be received. Defaults to `false`. */
  disableUpdates?: boolean;
  /** An auth string to automatically import. Can be overridden by a later importAuthString call. */
  authString?: string;
  /** The first DC to connect to. This is commonly used to decide whether to connect to test or production servers. It is not necessarily the DC that the client will directly connect to or is currently connected to. Defaults to the default initial DC. */
  initialDc?: DC;
  /** Whether perfect forward secrecy should be enabled. Defaults to `false`. */
  isPerfectForwardSecrecyEnabled?: boolean;
}

/** An MTKruto client. */
export class Client<C extends Context = Context> extends Composer<C> implements ClientGeneric {
  #clients = new Array<ClientEncrypted>();
  #downloadPools: Partial<Record<DC, ClientEncryptedPool>> = {};
  #uploadPools: Partial<Record<DC, ClientEncryptedPool>> = {};
  #guaranteeUpdateDelivery: boolean;
  // 2_
  #botInfoManager: BotInfoManager;
  #businessConnectionManager: BusinessConnectionManager;
  #fileManager: FileManager;
  #giftCollectionManager: GiftCollectionManager;
  #managedBotManager: ManagedBotManager;
  #networkStatisticsManager: NetworkStatisticsManager;
  #paymentManager: PaymentManager;
  #reactionManager: ReactionManager;
  #storyAlbumManager: StoryAlbumManager;
  #takeoutManager: TakeoutManager;
  #translationsManager: TranslationsManager;
  #updateManager: UpdateManager;
  // 3_
  #accountManager: AccountManager;
  #messageManager: MessageManager;
  #secretChatManager: SecretChatManager;
  #stickerSetManager: StickerSetManager;
  #videoChatManager: VideoChatManager;
  // 4_
  #callbackQueryManager: CallbackQueryManager;
  #chatListManager: ChatListManager;
  #chatManager: ChatManager;
  #checklistManager: ChecklistManager;
  #contactManager: ContactManager;
  #forumManager: ForumManager;
  #giftManager: GiftManager;
  #inlineQueryManager: InlineQueryManager;
  #linkPreviewManager: LinkPreviewManager;
  #pollManager: PollManager;
  #storyManager: StoryManager;

  // deno-lint-ignore no-explicit-any
  #managers?: Record<string, any>;
  // deno-lint-ignore no-explicit-any
  get managers(): Record<string, any> {
    return this.#managers ?? (this.#managers ??= {
      // 2_
      botInfoManager: this.#botInfoManager,
      businessConnectionManager: this.#businessConnectionManager,
      fileManager: this.#fileManager,
      giftCollectionManager: this.#giftCollectionManager,
      managedBotManager: this.#managedBotManager,
      networkStatisticsManager: this.#networkStatisticsManager,
      paymentManager: this.#paymentManager,
      reactionManager: this.#reactionManager,
      storyAlbumManager: this.#storyAlbumManager,
      takeoutManager: this.#takeoutManager,
      translationsManager: this.#translationsManager,
      updateManager: this.#updateManager,
      // 3_
      accountManager: this.#accountManager,
      messageManager: this.#messageManager,
      secretChatManager: this.#secretChatManager,
      stickerSetManager: this.#stickerSetManager,
      videoChatManager: this.#videoChatManager,
      // 4_
      callbackQueryManager: this.#callbackQueryManager,
      chatListManager: this.#chatListManager,
      chatManager: this.#chatManager,
      checklistManager: this.#checklistManager,
      contactManager: this.#contactManager,
      forumManager: this.#forumManager,
      giftManager: this.#giftManager,
      inlineQueryManager: this.#inlineQueryManager,
      linkPreviewManager: this.#linkPreviewManager,
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
  readonly #outgoingMessages: NonNullable<ClientParams["outgoingMessages"]>;
  #persistCache: boolean;
  #disableUpdates: boolean;
  #isPerfectForwardSecrecyEnabled?: boolean;
  #authString?: string;
  #initialDc: DC;

  #L: Logger;
  #LsignIn: Logger;
  #LupdateGapRecoveryLoop: Logger;
  #LstorageWriteLoop: Logger;
  #LhandleMigrationError: Logger;
  #Lmin: Logger;

  /** Constructs the client. */
  constructor(params?: ClientParams) {
    super();

    this.#apiId = params?.apiId ?? 0;
    this.#apiHash = params?.apiHash ?? "";
    this.#transportProvider = params?.transportProvider;
    this.#initialDc = params?.initialDc ?? INITIAL_DC;
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

    this.#isPerfectForwardSecrecyEnabled = params?.isPerfectForwardSecrecyEnabled;
    this.appVersion = params?.appVersion ?? APP_VERSION;
    this.deviceModel = params?.deviceModel ?? DEVICE_MODEL;
    this.language = params?.language ?? LANG_CODE;
    this.platform = params?.platform ?? LANG_PACK;
    this.systemLangCode = params?.systemLangCode ?? SYSTEM_LANG_CODE;
    this.systemVersion = params?.systemVersion ?? SYSTEM_VERSION;
    this.#publicKeys = params?.publicKeys;
    this.#outgoingMessages = params?.outgoingMessages ?? false;
    this.#guaranteeUpdateDelivery = params?.guaranteeUpdateDelivery ?? false;

    const L = this.#L = getLogger("Client").client(id++);
    this.#LsignIn = L.branch("signIn");
    this.#LupdateGapRecoveryLoop = L.branch("updateGapRecoveryLoop");
    this.#LstorageWriteLoop = L.branch("storageWriteLoop");
    this.#LhandleMigrationError = L.branch("[handleMigrationError]");
    this.#Lmin = L.branch("min");

    const c = {
      id,
      getUploadPoolSize: this.#getUploadPoolSize.bind(this),
      invoke: async <T extends Api.AnyFunction | Mtproto.ping, R = T extends Mtproto.ping ? Mtproto.pong : T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T, params?: InvokeParams & { businessConnectionId?: string; takeoutId?: string }): Promise<R> => {
        if (params?.businessConnectionId) {
          if (Mtproto.is("ping", function_)) {
            unreachable();
          }
          return await this.invoke({ _: "invokeWithBusinessConnection", connection_id: params.businessConnectionId, query: function_ }, params);
        } else if (params?.takeoutId) {
          if (Mtproto.is("ping", function_)) {
            unreachable();
          }
          return await this.invoke({ _: "invokeWithTakeout", takeout_id: BigInt(params.takeoutId), query: function_ }, params);
        } else {
          return await this.invoke(function_, params);
        }
      },
      storage: this.storage,
      messageStorage: this.messageStorage,
      guaranteeUpdateDelivery: this.#guaranteeUpdateDelivery,
      setConnectionState: this.#propagateConnectionState.bind(this),
      resetConnectionState: () => this.#stateChangeHandler(this.isConnected),
      getSelfId: this.#getSelfId.bind(this),
      getIsPremium: this.#getIsPremium.bind(this),
      getInputPeer: this.getInputPeer.bind(this),
      getInputChannel: this.getInputChannel.bind(this),
      getInputUser: this.getInputUser.bind(this),
      getInputPeerChatId: this.#getInputPeerChatId.bind(this),
      inputPeerToPeer: this.#inputPeerToPeer.bind(this),
      getPeer: this[mustGetPeer].bind(this),
      handleUpdate: this.#queueHandleCtxUpdate.bind(this),
      parseMode: this.#parseMode,
      outgoingMessages: this.#outgoingMessages,
      dropPendingUpdates: params?.dropPendingUpdates,
      isDisconnected: () => this.isDisconnected,
      langPack: this.platform,
      langCode: this.language,
    };

    // 2_
    this.#botInfoManager = new BotInfoManager(c);
    this.#businessConnectionManager = new BusinessConnectionManager(c);
    const fileManager = this.#fileManager = new FileManager(c);
    this.#giftCollectionManager = new GiftCollectionManager(c);
    this.#managedBotManager = new ManagedBotManager(c);
    this.#networkStatisticsManager = new NetworkStatisticsManager(c);
    this.#paymentManager = new PaymentManager(c);
    this.#reactionManager = new ReactionManager(c);
    this.#storyAlbumManager = new StoryAlbumManager(c);
    this.#takeoutManager = new TakeoutManager(c);
    this.#translationsManager = new TranslationsManager(c);
    this.#updateManager = new UpdateManager(c);
    // 3_
    this.#accountManager = new AccountManager({ ...c, fileManager });
    const messageManager = this.#messageManager = new MessageManager({ ...c, fileManager });
    this.#secretChatManager = new SecretChatManager({ ...c, fileManager });
    this.#stickerSetManager = new StickerSetManager({ ...c, fileManager });
    this.#videoChatManager = new VideoChatManager({ ...c, fileManager });
    // 4_
    this.#callbackQueryManager = new CallbackQueryManager({ ...c, messageManager });
    this.#chatListManager = new ChatListManager({ ...c, fileManager, messageManager });
    this.#chatManager = new ChatManager({ ...c, fileManager, messageManager });
    this.#checklistManager = new ChecklistManager({ ...c, messageManager });
    this.#contactManager = new ContactManager({ ...c, messageManager });
    this.#forumManager = new ForumManager({ ...c, messageManager });
    this.#giftManager = new GiftManager({ ...c, messageManager });
    this.#inlineQueryManager = new InlineQueryManager({ ...c, messageManager });
    this.#linkPreviewManager = new LinkPreviewManager({ ...c, messageManager });
    this.#pollManager = new PollManager({ ...c, fileManager, messageManager });
    this.#storyManager = new StoryManager({ ...c, fileManager, messageManager });

    this.#updateManager.setUpdateHandler(this.#handleUpdate.bind(this));

    if (params?.defaultHandlers ?? true) {
      this.invoke.use(async ({ error }, next) => {
        if (error instanceof FloodWait && error.seconds <= 10) {
          L.warning("sleeping for", error.seconds, "because of:", error);
          await delay(error.seconds * SECOND);
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

  #newClient(dc: DC, main: boolean, isMedia: boolean) {
    const client = new ClientEncrypted(dc, this.#apiId, {
      appVersion: this.appVersion,
      deviceModel: this.deviceModel,
      langCode: this.language,
      langPack: this.platform,
      systemLangCode: this.systemLangCode,
      systemVersion: this.systemVersion,
      transportProvider: this.#transportProvider,
      isMedia,
      disableUpdates: !main || isMedia,
      publicKeys: this.#publicKeys,
      isPerfectForwardSecrecyEnabled: this.#isPerfectForwardSecrecyEnabled,
    });
    client.connectionCallback = this.#networkStatisticsManager.getTransportReadWriteCallback(isMedia);
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
  get isConnected(): boolean {
    return this.#client?.isConnected ?? false;
  }
  get isDisconnected(): boolean {
    return this.#client?.isDisconnected ?? true;
  }

  #propagateConnectionState(connectionState: ConnectionState) {
    this.#queueHandleCtxUpdate({ type: "connectionState", connectionState });
    this.#lastPropagatedConnectionState = connectionState;
  }

  #lastPropagatedConnectionState: ConnectionState | null = null;
  #stateChangeHandler: (isConnected: boolean) => void = ((isConnected: boolean) => {
    const connectionState = isConnected ? "ready" : "notConnected";
    if (this.#lastPropagatedConnectionState !== connectionState) {
      this.#propagateConnectionState(connectionState);
    }
  }).bind(this);

  #storageInited = false;
  async #initStorage() {
    if (!this.#storageInited) {
      await this.storage.initialize();
      if (!this.#guaranteeUpdateDelivery) {
        await this.storage.deleteUpdates();
        await this.storage.commit(true);
      }
      await this.#secretChatManager.loadSecretChats();
      this.#storageInited = true;
    }
  }

  #connectMutex = new Mutex();
  /**
   * Loads the session if `setDc` was not called, initializes and connects
   * a `ClientPlain` to generate auth key if there was none, and connects the client.
   * Before establishing the connection, the session is saved.
   */
  async connect() {
    const unlock = await this.#connectMutex.lock();
    try {
      if (this.isConnected) {
        return;
      }
      await this.#initStorage();
      if (this.#authString && !this.#authStringImported) {
        await this.importAuthString(this.#authString);
      }
      const auth = this.storage.auth.mustGet();
      if (auth.authKey !== null && auth.dc !== null) {
        if (!this.#client || this.#client.dc !== auth.dc) {
          this.#client?.disconnect();
          this.#setMainClient(this.#newClient(auth.dc, true, false));
        }
        await this.#client!.setAuthKey(auth.authKey);
        if (this.#client!.serverSalt === 0n) {
          this.#client!.serverSalt = await this.storage.getServerSalt() ?? 0n;
        }
      } else {
        const dc = auth.dc ?? this.#initialDc;
        if (!this.#client || this.#client.dc !== dc) {
          this.#client?.disconnect();
          this.#setMainClient(this.#newClient(dc, true, false));
        }
      }
      await this.#client!.connect();
      await this.storage.auth.update((v) => {
        v.authKey = this.#client!.authKey;
        v.dc = this.#client!.dc;
      });
      await this.storage.setServerSalt(this.#client!.serverSalt);
      this.#updateGapRecoveryLoop.start();
      this.#clientDisconnectionLoop.start();
      if (!this.#messageStorage_.isMemory) {
        this.#storageWriteLoop.start();
      } else {
        this.#L.debug("not starting storageWriteLoop");
      }
      await this.storage.commit(true);
    } finally {
      unlock();
    }
  }

  async [handleMigrationError](err: Migrate) {
    let newDc = String(err.dc);
    if (Math.abs(getDcId(this.#client!.dc, this.#client!.isMedia)) >= 10_000) {
      newDc += "-test";
    }
    this.disconnect();
    await this.storage.auth.update((v) => {
      v.authKey = null;
      v.dc = newDc as DC;
    });
    await this.connect();
    this.#LhandleMigrationError.debug(`migrated to DC${newDc}`);
  }

  async disconnect() {
    this.#disconnectAllClients();
    this.#clientDisconnectionLoop.abort();
    this.#updateGapRecoveryLoop.abort();
    this.#storageWriteLoop.abort();
    this.#updateManager.closeAllChats();
    await this.storage.commit(true);
    await this.messageStorage.commit(true);
  }

  #lastPropagatedAuthorizationState: boolean | null = null;
  async #propagateAuthorizationState(authorized: boolean) {
    if (this.#lastPropagatedAuthorizationState !== authorized) {
      await this.#handleCtxUpdate({ type: "authorizationState", authorizationState: { isAuthorized: authorized } });
      this.#lastPropagatedAuthorizationState = authorized;
    }
  }

  async #getSelfId() {
    const id = await this.storage.getAccountId();
    if (id === null) {
      throw new Error("Unauthorized");
    }
    return id;
  }

  async #getIsPremium() {
    const maybeIsPremium = await this.storage.getIsPremium();
    if (maybeIsPremium !== null) {
      return maybeIsPremium;
    }
    return this.#lastGetMe?.isPremium ?? false;
  }

  #lastUpdates = new Date();
  #updateGapRecoveryLoop = new AbortableLoop(async (loop, signal) => {
    await delay(60 * SECOND, { signal });
    if (!this.isConnected) {
      loop.abort();
      return;
    }
    if (Date.now() - this.#lastUpdates.getTime() >= 15 * MINUTE) {
      drop(
        this.#updateManager.recoverUpdateGap("lastUpdates").then(() => {
          this.#lastUpdates = new Date();
        }),
      );
    }
  }, (loop, err) => {
    if (!this.isConnected) {
      loop.abort();
    } else {
      this.#LupdateGapRecoveryLoop.error(err);
    }
  });

  #clientDisconnectionLoop = new AbortableLoop(async (loop, signal) => {
    await delay(60 * SECOND, { signal });
    if (!this.isConnected) {
      loop.abort();
      return;
    }
    const now = Date.now();
    const disconnectAfter = 5 * MINUTE;
    for (const [i, client] of this.#clients.entries()) {
      if (i > 0 && !client.isDisconnected && client.lastRequest && now - client.lastRequest.getTime() >= disconnectAfter) {
        client?.disconnect();
      }
    }
  }, (loop) => {
    if (!this.isConnected) {
      loop.abort();
    }
  });

  #storageWriteLoop = new AbortableLoop(async (_loop, signal) => {
    await delay(5 * SECOND, { signal });
    await this.messageStorage.commit();
    await this.storage.commit();
  }, (err) => {
    this.#LstorageWriteLoop.error(err);
  });

  async #checkAuthorization() {
    if (this.#lastGetMe) {
      return this.#lastGetMe;
    }

    try {
      await this.#updateManager.fetchState("#checkAuthorization");
      const me = await this.#getMe();
      await this.#propagateAuthorizationState(true);
      drop(this.#updateManager.recoverUpdateGap("#checkAuthorization"));
      return me;
    } catch (err) {
      if (!(err instanceof AuthKeyUnregistered) && !(err instanceof SessionRevoked)) {
        throw err;
      }
    }
  }

  /**
   * Send a user verification code.
   *
   * @param phoneNumber The phone number to send the code to.
   * @method ac
   */
  async sendCode(phoneNumber: string) {
    const me = await this.#checkAuthorization();
    if (me) {
      return;
    }

    try {
      await this.#accountManager.sendCode(phoneNumber, this.#apiId, this.#apiHash);
    } catch (err) {
      if (err instanceof Migrate) {
        await this[handleMigrationError](err);
        await this.#accountManager.sendCode(phoneNumber, this.#apiId, this.#apiHash);
      } else {
        throw err;
      }
    }
  }

  /**
   * Allow a bot to set custom emoji status. User-only.
   *
   * @param botId The user identifier of the bot.
   * @method ac
   */
  async allowBotToSetCustomEmojiStatus(botId: ID): Promise<void> {
    return await this.#accountManager.allowBotToSetCustomEmojiStatus(botId);
  }

  /**
   * Disallow a bot to set custom emoji status. User-only.
   *
   * @param botId The user identifier of the bot.
   * @method ac
   */
  async disallowBotToSetCustomEmojiStatus(botId: ID): Promise<void> {
    return await this.#accountManager.disallowBotToSetCustomEmojiStatus(botId);
  }

  /**
   * Check if a code entered by the user was the same as the verification code.
   *
   * @param code A code entered by the user.
   * @method ac
   */
  async checkCode(code: string): Promise<CodeCheckResult> {
    const result = await this.#accountManager.checkCode(code);
    if (result.type === "signedIn") {
      await this.storage.auth.update((v) => {
        v.userId = result.userId;
        v.isBot = false;
      });
      this.#LsignIn.debug("signed in as user");
      await this.#propagateAuthorizationState(true);
      await this.#updateManager.fetchState("checkCode");
    }

    return result;
  }

  /**
   * Get the user account password's hint.
   *
   * @method ac
   */
  async getPasswordHint(): Promise<string | null> {
    return await this.#accountManager.getPasswordHint();
  }

  /**
   * Check whether a password entered by the user is the same as the account's one.
   *
   * @param password The password to check.
   * @returns The result of the check.
   * @method ac
   */
  async checkPassword(password: string): Promise<PasswordCheckResult> {
    const result = await this.#accountManager.checkPassword(password);
    if (result.type === "signedIn") {
      await this.storage.auth.update((v) => {
        v.userId = result.userId;
        v.isBot = false;
      });
      await this.storage.commit(true);
      this.#LsignIn.debug("signed in as user");
      await this.#propagateAuthorizationState(true);
      await this.#updateManager.fetchState("checkPassword");
    }

    return result;
  }

  /**
   * Check whether a bot token is valid.
   *
   * @param botToken The bot token to check
   * @returns The result of the check.
   * @method ac
   */
  async checkBotToken(botToken: string): Promise<BotTokenCheckResult> {
    const me = await this.#checkAuthorization();
    if (me) {
      return {
        type: "signedIn",
        userId: me.id,
      };
    }

    while (true) {
      try {
        const result = await this.#accountManager.checkBotToken(botToken, this.#apiId, this.#apiHash);
        if (result.type === "signedIn") {
          await this.storage.auth.update((v) => {
            v.userId = result.userId;
            v.isBot = true;
          });
          await this.storage.commit(true);
          this.#LsignIn.debug("signed in as bot");
          await this.#propagateAuthorizationState(true);
          await this.#updateManager.fetchState("checkBotToken");
        }

        return result;
      } catch (err) {
        if (err instanceof Migrate) {
          await this[handleMigrationError](err);
          continue;
        } else {
          throw err;
        }
      }
    }
  }

  /**
   * Signs in using the provided parameters if not already signed in.
   * If no parameters are provided, the credentials will be prompted in runtime.
   *
   * Notes:
   * 1. Requires the `apiId` and `apiHash` parameters to be passed when constructing the client.
   * 3. Reconnects the client to the appropriate DC in case of MIGRATE_X errors.
   */
  async signIn(params?: SignInParams) {
    await signIn(this, this.#LsignIn, params);
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

  /** Same as calling `.connect()` followed by `.signIn(params)`. */
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
    if (client !== this.#client && !this.isDisconnected && client.isDisconnected) {
      await client.connect();
    }
    return client;
  }

  #getMainClientMutex = new Mutex();
  async #getMainClient(dc?: DC) {
    if (dc === undefined || dc === this.#client?.dc) {
      return this.#client!;
    }
    let client = this.#clients.find((v) => v.dc === dc);
    if (client) {
      return client;
    }
    const unlock = await this.#getMainClientMutex.lock();
    client = this.#clients.find((v) => v.dc === dc);
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
    if (client.authKey.byteLength) {
      return client;
    }
    await this.#setupClient(client);
    return client;
  }

  async #getUploadPoolSize() {
    const dc = this.#client!.dc;
    return (dc !== "2" && dc !== "4") || await this.#getIsPremium() ? 8 : 4;
  }

  async #getUploadClient() {
    const dc = this.#client!.dc;
    const poolSize = await this.#getUploadPoolSize();
    const pool = this.#uploadPools[dc] ??= new ClientEncryptedPool();
    if (!pool.size) {
      for (let i = 0; i < poolSize; ++i) {
        pool.add(this.#newClient(dc, false, true));
      }
    }
    const client = pool.nextClient();
    if (client.authKey.byteLength) {
      return client;
    }
    await this.#setupClient(client);
    return client;
  }

  async #setupClient(client: ClientEncrypted) {
    const storage = client.dc === this.#client!.dc ? this.storage : new StorageOperations(this.storage.provider.branch(client.dc + (client.isMedia ? "_media" : "")));
    await storage.initialize();
    const auth = storage.auth.mustGet();
    const serverSalt = await storage.getServerSalt();
    if (auth.authKey !== null) {
      await client.setAuthKey(auth.authKey);
      if (serverSalt) {
        client.serverSalt = serverSalt;
      }
    }
    await client.connect();
    if (auth.authKey === null) {
      await this.#importAuthorization(client);
    }
    await storage.auth.update((v) => v.authKey = client.authKey);
    if (client.dc !== this.#client!.dc) {
      await storage.setServerSalt(client.serverSalt);
      client.handlers.onNewServerSalt = async (serverSalt) => {
        await storage.setServerSalt(serverSalt);
      };
    }
  }

  async #importAuthorization(client: ClientEncrypted) {
    if (this.#client!.dc === client.dc && this.#client!.isMedia === client.isMedia) {
      const auth = this.storage.auth.mustGet();
      const serverSalt = await this.storage.getServerSalt();
      if (auth.authKey !== null) {
        await client.setAuthKey(auth.authKey);
        if (serverSalt) {
          client.serverSalt = serverSalt;
        }
      }
      return;
    }
    const exportedAuthorization = await this.#client!.invoke({ _: "auth.exportAuthorization", dc_id: getDcId(client.dc, client.isMedia) });
    await client.invoke({ ...exportedAuthorization, _: "auth.importAuthorization" });
  }

  async #invoke<T extends Api.AnyFunction | Mtproto.ping, R = T extends Mtproto.ping ? Mtproto.pong : T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T, params?: InvokeParams): Promise<R> {
    if (!this.#client) {
      throw new ConnectionError("The connection is not open.");
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
              this.#updateManager.processUpdates(result, true, Mtproto.is("ping", function_) ? null : function_, () => resolve(result as R));
            });
          }
        }
        return result as R;
      } catch (err) {
        if (err instanceof AuthKeyUnregistered && !main) {
          await this.#importAuthorization(client);
          continue;
        } else if (err instanceof ConnectionError && !main && !this.isDisconnected) {
          continue;
        } else if (await this.#handleInvokeError(Object.freeze({ client: this, error: err, function: function_, n: n++ }), () => Promise.resolve(false))) {
          continue;
        } else {
          throw err;
        }
      }
    }
  }

  #handleInvokeError = skipInvoke<Client<C>>();

  /**
   * Invokes a function waiting and returning its reply.
   * Requires the client to be connected.
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
            if (result !== null) return result;
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
    if (this.isConnected) {
      throw new Error("Cannot import auth string while the client is connected");
    }
    await this.#initStorage();
    await this.storage.importAuthString(authString);
    this.#authStringImported = true;
    if (!this.#apiId) {
      this.#apiId = this.storage.auth.mustGet().apiId;
    }
  }

  async #getUserAccessHash(userId: bigint) {
    const users = await this.invoke({ _: "users.getUsers", id: [{ _: "inputUser", user_id: userId, access_hash: 0n }] });
    const user = Api.is("user", users[0]) ? users[0] : undefined;
    return user?.access_hash ?? 0n;
  }

  async #getChannelAccessHash(channelId: bigint) {
    const channels = await this.invoke({ _: "channels.getChannels", id: [{ _: "inputChannel", channel_id: channelId, access_hash: 0n }] });
    const channel = Api.is("channel", channels.chats[0]) ? channels.chats[0] : undefined;
    return channel?.access_hash ?? 0n;
  }

  /**
   * Get a chat's inputPeer. Useful when calling API functions directly.
   *
   * @param id The identifier of a chat.
   */
  async getInputPeer(id: ID): Promise<Api.InputPeer> {
    if (id === "me" || id === await this.#getSelfId()) {
      return { _: "inputPeerSelf" };
    }
    const inputPeer = await this.#getInputPeerInner(id);
    if (((Api.is("inputPeerUser", inputPeer) || Api.is("inputPeerChannel", inputPeer)) && inputPeer.access_hash === 0n) && this.storage.isBot) {
      if ("channel_id" in inputPeer) {
        inputPeer.access_hash = await this.#getChannelAccessHash(inputPeer.channel_id);
      } else {
        inputPeer.access_hash = await this.#getUserAccessHash(inputPeer.user_id);
      }
    }
    if ((Api.is("inputPeerUser", inputPeer) || Api.is("inputPeerChannel", inputPeer)) && inputPeer.access_hash === 0n) {
      throw new AccessError(`The chat ${id} cannot be accessed.`);
    }
    return inputPeer;
  }

  async #inputPeerToPeer(inputPeer: Api.InputPeer): Promise<Api.Peer> {
    if (Api.is("inputPeerSelf", inputPeer)) {
      return { _: "peerUser", user_id: BigInt(await this.#getSelfId()) };
    } else {
      return Api.inputPeerToPeer(inputPeer);
    }
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
      throw new TypeError(`The chat ${id} is neither a channel nor a supergroup.`);
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
    let peer: Api.InputPeer;
    if (typeof id === "string") {
      let resolvedId = 0;
      if (id[0] === "+" || !isNaN(Number(id[0]))) {
        if (id[0] === "+") {
          id = id.slice(1);
          const maybePhoneNumber = await this.messageStorage.phoneNumbers.get([id]);
          if (maybePhoneNumber !== null && Date.now() - maybePhoneNumber[1].getTime() < PHONE_NUMBER_TTL) {
            const [id] = maybePhoneNumber;
            resolvedId = id;
          } else {
            const resolved = await this.invoke({ _: "contacts.resolvePhone", phone: id });
            this.#updateManager.processChats(resolved.chats, resolved);
            this.#updateManager.processUsers(resolved.users, resolved);
            resolvedId = Api.peerToChatId(resolved.peer);
            this.messageStorage.phoneNumbers.set([id], [resolvedId, new Date()]);
          }
        }
      } else {
        id = getUsername(id);
        const maybeUsername = await this.messageStorage.usernames.get([id.toLowerCase()]);
        if (maybeUsername !== null && Date.now() - maybeUsername[1].getTime() < USERNAME_TTL) {
          const [id] = maybeUsername;
          resolvedId = id;
        } else {
          const resolved = await this.invoke({ _: "contacts.resolveUsername", username: id });
          this.#updateManager.processChats(resolved.chats, resolved);
          this.#updateManager.processUsers(resolved.users, resolved);
          if (Api.is("peerUser", resolved.peer)) {
            resolvedId = Api.peerToChatId(resolved.peer);
          } else if (Api.is("peerChannel", resolved.peer)) {
            resolvedId = Api.peerToChatId(resolved.peer);
          } else {
            unreachable();
          }
          this.messageStorage.usernames.set([id.toLowerCase()], [resolvedId, new Date()]);
        }
      }
      const resolvedIdType = Api.getChatIdPeerType(resolvedId);
      if (resolvedIdType === "user") {
        const accessHash = await this.messageStorage.getUserAccessHash(resolvedId);
        peer = { _: "inputPeerUser", user_id: Api.chatIdToPeerId(resolvedId), access_hash: accessHash ?? 0n } as Api.inputPeerUser;
      } else if (resolvedIdType === "channel") {
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
    } else if (ZERO_CHANNEL_ID - MAX_CHANNEL_ID <= id && id !== ZERO_CHANNEL_ID) {
      const accessHash = await this.messageStorage.getChannelAccessHash(id);
      peer = { _: "inputPeerChannel", channel_id: Api.chatIdToPeerId(id), access_hash: accessHash ?? 0n } as Api.inputPeerChannel;
    } else if (ZERO_CHANNEL_ID - MAX_MONOFORUM_CHANNEL_ID <= id) {
      const accessHash = await this.messageStorage.getChannelAccessHash(id);
      peer = { _: "inputPeerChannel", channel_id: Api.chatIdToPeerId(id), access_hash: accessHash ?? 0n } as Api.inputPeerChannel;
    } else {
      throw new InputError("The ID is of an unknown format.");
    }

    if (!Api.is("inputPeerChat", peer) && !peer.access_hash) {
      // TODO
      // const chatId = Api.peerToChatId(peer);
      // const minPeerReference = await this.messageStorage.getLastMinPeerReference(chatId);
      // if (minPeerReference) {
      //   const minInputPeer = await this.#getMinInputPeer(canBeInputChannel(peer) ? "channel" : "user", { ...minPeerReference, senderId: chatId });
      //   if (minInputPeer) {
      //     this.#Lmin.debug("resolved input min peer", minInputPeer);
      //     peer = minInputPeer;
      //   }
      // }
    }

    return peer;
  }

  async #getMinInputPeer(type: "user" | "channel", reference: { chatId: number; senderId: number; messageId: number }): Promise<Api.inputPeerUserFromMessage | Api.inputPeerChannelFromMessage | null> {
    const peer_ = await this.messageStorage.peers.get([reference.chatId]);
    if (peer_ !== null && (peer_[0].type === "channel" || peer_[0].type === "supergroup")) {
      const peer: Api.inputPeerChannel = { _: "inputPeerChannel", channel_id: BigInt(peer_[0].id), access_hash: peer_[1] };
      if (type === "user") {
        return { _: "inputPeerUserFromMessage", peer, msg_id: reference.messageId, user_id: Api.chatIdToPeerId(reference.senderId) };
      } else {
        return { _: "inputPeerChannelFromMessage", peer, msg_id: reference.messageId, channel_id: Api.chatIdToPeerId(reference.senderId) };
      }
    } else {
      return null;
    }
  }

  private [getPeer](peer: Api.peerUser): Promise<[ChatPPrivate, bigint] | null>;
  private [getPeer](peer: Api.peerChat): Promise<[ChatPGroup, bigint] | null>;
  private [getPeer](peer: Api.peerChannel): Promise<[ChatPChannel, bigint] | null>;
  private [getPeer](peer: Api.peerUser | Api.peerChat | Api.peerChannel): Promise<[ChatP, bigint] | null>;
  private async [getPeer](peer: Api.peerUser | Api.peerChat | Api.peerChannel) {
    const id = Api.peerToChatId(peer);
    const entity = await this.messageStorage.peers.get([id]);
    if (entity === null) {
      if (entity === null && this.storage.isBot && Api.is("peerUser", peer) || Api.is("peerChannel", peer)) {
        await this.getInputPeer(id);
      } else {
        return entity;
      }
    }
    return await this.messageStorage.peers.get([id]);
  }

  private [mustGetPeer](peer: Api.peerUser): [ChatPPrivate, bigint] | null;
  private [mustGetPeer](peer: Api.peerChat): [ChatPGroup, bigint] | null;
  private [mustGetPeer](peer: Api.peerChannel): [ChatPChannel, bigint] | null;
  private [mustGetPeer](peer: Api.peerUser | Api.peerChat | Api.peerChannel): [ChatP, bigint] | null;
  private [mustGetPeer](peer: Api.peerUser | Api.peerChat | Api.peerChannel) {
    return this.messageStorage.peers.mustGet([Api.peerToChatId(peer)]);
  }

  async #handleCtxUpdate(update: Update) {
    if (this.#disableUpdates && !("authorizationState" in update) && !("connectionState" in update)) {
      return;
    }
    try {
      await this.handleUpdate(this, update);
    } catch (err) {
      this.#L.error("Failed to handle update:", err);
      throw err;
    }
  }

  #queueHandleCtxUpdate(update: Update) {
    this.#updateManager.getHandleUpdateQueue(UpdateManager.MAIN_BOX_ID).add(async () => {
      await this.#handleCtxUpdate(update);
    });
  }

  async #handleUpdate(update: Api.Update) {
    const maybePromises = new Array<() => MaybePromise<Update | null>>();
    if (Api.is("updateUserName", update)) {
      const value: [number, Date] = [Number(update.user_id), new Date()];
      for (const username_ of update.usernames) {
        const username = username_.username.toLowerCase();
        this.messageStorage.usernames.set([username], value);
      }
      const peer: Api.peerUser = { ...update, _: "peerUser" };
      const peer_ = await this[getPeer](peer);
      if (peer_ !== null) {
        const username = update.usernames[0];
        if (username !== undefined) {
          peer_[0].username = username.username;
          const also = update.usernames.filter((v) => v !== username);
          if (also.length) {
            peer_[0].also = also.map((v) => v.username);
          } else {
            delete peer_[0].also;
          }
        } else {
          delete peer_[0].username;
        }
        this.messageStorage.setPeer2(peer_[0], peer_[1]);
      }
    }

    if (this.#messageManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#messageManager.handleUpdate(update));
    }

    if (this.#chatManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#chatManager.handleUpdate(update));
    }

    if (this.#pollManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#pollManager.handleUpdate(update));
    }

    if (this.#videoChatManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#videoChatManager.handleUpdate(update));
    }

    if (this.#callbackQueryManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#callbackQueryManager.handleUpdate(update));
    }

    if (this.#inlineQueryManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#inlineQueryManager.handleUpdate(update));
    }

    if (this.#linkPreviewManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#linkPreviewManager.handleUpdate(update));
    }

    if (this.#reactionManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#reactionManager.handleUpdate(update));
    }

    if (this.#chatListManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#chatListManager.handleUpdate(update));
    }

    if (this.#storyManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#storyManager.handleUpdate(update));
    }

    if (this.#businessConnectionManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#businessConnectionManager.handleUpdate(update));
    }

    if (this.#storyManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#storyManager.handleUpdate(update));
    }

    if (this.#paymentManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#paymentManager.handleUpdate(update));
    }

    if (this.#translationsManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#translationsManager.handleUpdate(update));
    }

    if (this.#botInfoManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#botInfoManager.handleUpdate(update));
    }

    if (this.#accountManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#accountManager.handleUpdate(update));
    }

    if (this.#secretChatManager.canHandleUpdate(update)) {
      maybePromises.push(() => this.#secretChatManager.handleUpdate(update));
    }

    return () =>
      Promise.resolve().then(async () => {
        const updates: Array<Update> = [{ type: "update", update }];
        for (const maybePromise of maybePromises) {
          try {
            const value = maybePromise();
            const update = value instanceof Promise ? await value : value;
            if (update) {
              updates.push(update);
            }
          } catch (err) {
            this.#L.error("failed to construct update:", err);
          }
        }

        for (const update of updates) {
          try {
            await this.#handleCtxUpdate(update);
          } finally {
            if ("deletedMessages" in update) {
              for (const { chatId, messageId } of update.deletedMessages) {
                await this.messageStorage.setMessage(chatId, messageId, null);
              }
            }
          }
        }
      });
  }

  #lastGetMe: User | null = null;
  async #getMe() {
    if (this.#lastGetMe !== null) {
      return this.#lastGetMe;
    } else {
      const user = await this.#getMeInner();
      this.#lastGetMe = user;
      return user;
    }
  }

  async #getMeInner() {
    let chatP = (await this[getPeer]({ _: "peerUser", user_id: BigInt(await this.#getSelfId()) }))?.[0] ?? null;
    if (chatP === null) {
      const users = await this.invoke({ _: "users.getUsers", id: [{ _: "inputUserSelf" }] });
      chatP = constructChatP(Api.as("user", users[0]));
      await this.storage.setIsPremium(chatP.isPremium);
    }
    const user = constructUser2(chatP);
    this.#lastGetMe = user;
    return user;
  }

  #previouslyConnected = false;
  #lastConnectionState = false;
  #onConnectionStateChange(isConnected: boolean) {
    if (this.#lastConnectionState !== isConnected) {
      if (isConnected) {
        if (this.#previouslyConnected) {
          drop(this.#updateManager.recoverUpdateGap("reconnect"));
        }
        this.#previouslyConnected = true;
      }
      const connectionState = isConnected ? "ready" : "notConnected";
      this.#queueHandleCtxUpdate({ type: "connectionState", connectionState });
    }
  }

  //
  // ========================= ACCOUNT ========================= //
  //

  /**
   * Add a bot to the attachments menu. User-only.
   *
   * @method ac
   * @param botId The identifier of the bot to add to the attachments menu.
   */
  async addBotToAttachmentsMenu(botId: ID, params?: AddBotToAttachmentsMenuParams): Promise<void> {
    return await this.#accountManager.addBotToAttachmentsMenu(botId, params);
  }

  /**
   * Block a user. User-only.
   *
   * @method ac
   * @param userId The identifier of the user to block.
   */
  async blockUser(userId: ID) {
    await this.#messageManager.blockUser(userId);
  }

  /**
   * Check the availability of a username. User-only.
   *
   * @method ac
   * @param username The username to check.
   * @returns Whether the username is available.
   */
  async checkUsername(username: string, params?: CheckUsernameParams): Promise<boolean> {
    return await this.#accountManager.checkUsername(username, params);
  }

  /**
   * Clear recent emoji statuses. User-only.
   *
   * @method ac
   */
  async clearRecentEmojiStatuses(): Promise<void> {
    return await this.#accountManager.clearRecentEmojiStatuses();
  }

  /**
   * Delete the current account. User-only.
   *
   * @method ac
   * @param reason The reason of the deletion.
   */
  async deleteAccount(reason: string, params?: DeleteAccountParams): Promise<void> {
    return await this.#accountManager.deleteAccount(reason, params);
  }

  /**
   * Disable sponsored messages on the current user. User-only.
   *
   * @method ac
   */
  async disableSponsoredMessages(): Promise<void> {
    await this.#accountManager.disableSponsoredMessages();
  }

  /**
   * Disconnect a connected website. User-only.
   *
   * @method ac
   * @param id The identifier of a connected website.
   */
  async disconnectConnectedWebsite(id: string): Promise<void> {
    return await this.#accountManager.disconnectConnectedWebsite(id);
  }

  /**
   * Disconnect all connected websites. User-only.
   *
   * @method ac
   */
  async disconnectConnectedWebsites(): Promise<void> {
    return await this.#accountManager.disconnectConnectedWebsites();
  }

  /**
   * Enable sponsored messages on the current user. User-only.
   *
   * @method ac
   */
  async enableSponsoredMessages(): Promise<void> {
    await this.#accountManager.enableSponsoredMessages();
  }

  /**
   * Get the current account's TTL. User-only.
   *
   * @method ac
   * @returns The current account's TTL in days.
   */
  async getAccountTtl(): Promise<number> {
    return await this.#accountManager.getAccountTtl();
  }

  /**
   * Get app support. User-only.
   *
   * @method ac
   */
  async getAppSupport(): Promise<AppSupport> {
    return await this.#accountManager.getAppSupport();
  }

  /**
   * Get app support name. User-only.
   *
   * @method ac
   */
  async getAppSupportName(): Promise<string> {
    return await this.#accountManager.getAppSupportName();
  }

  /**
   * Get the authorization sessions. User-only.
   *
   * @method ac
   */
  async getAuthorizationSessions(): Promise<AuthorizationSession[]> {
    return await this.#accountManager.getAuthorizationSessions();
  }

  /**
   * Get blocked users. User-only.
   *
   * @method ac
   */
  async getBlockedUsers(params?: GetBlockedUsersParams): Promise<BlockedUserList> {
    return await this.#messageManager.getBlockedUsers(params);
  }

  /**
   * Get a business connection. Bot-only.
   *
   * @method ac
   * @param id The identifier of the business connection.
   * @cache
   */
  async getBusinessConnection(id: string): Promise<BusinessConnection> {
    return await this.#businessConnectionManager.getBusinessConnection(id);
  }

  /**
   * Get connected websites. User-only.
   *
   * @method ac
   */
  async getConnectedWebsites(): Promise<ConnectedWebsite[]> {
    return await this.#accountManager.getConnectedWebsites();
  }

  /**
   * Get countries. User-only.
   *
   * @method ac
   */
  async getCountries(languageCode: string): Promise<Country[]> {
    return await this.#accountManager.getCountries(languageCode);
  }

  /**
   * Get the country code for the current user based on its IP address. User-only.
   *
   * @method ac
   */
  async getCountryCode(): Promise<string> {
    return await this.#accountManager.getCountryCode();
  }

  /**
   * Get information on the currently authorized user.
   *
   * @method ac
   * @returns Information on the currently authorized user.
   */
  async getMe(): Promise<User> {
    if (this.#lastGetMe === null) {
      const me = await this.#checkAuthorization();
      if (!me) {
        throw new InputError("Not signed in.");
      } else {
        return me;
      }
    }

    return await this.#getMeInner();
  }

  /**
   * Get owned bots. User-only.
   *
   * @method ac
   */
  async getOwnedBots(): Promise<User[]> {
    return await this.#accountManager.getOwnedBots();
  }

  /**
   * Get the profile photos of a user.
   *
   * @method ac
   * @param userId The identifier of a user.
   */
  async getProfilePhotos(userId: ID, params?: GetProfilePhotosParams): Promise<ProfilePhotoList> {
    return await this.#accountManager.getProfilePhotos(userId, params);
  }

  /**
   * Get timezones. User-only.
   *
   * @method ac
   */
  async getTimezones(): Promise<Timezone[]> {
    return await this.#accountManager.getTimezones();
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
   * Hide all usernames from a supergroup or a channel's profile. User-only.
   *
   * @method ac
   * @param id A supergroup ID or a channel ID.
   * @returns Whether any username was hidden.
   */
  async hideUsernames(id: ID): Promise<boolean> {
    return await this.#accountManager.hideUsernames(id);
  }

  /**
   * Pause the business bot in a chat. User-only.
   *
   * @method ac
   * @param chatId The identifier of a chat.
   */
  async pauseBusinessBotConnection(chatId: ID): Promise<void> {
    await this.#accountManager.pauseBusinessBotConnection(chatId);
  }

  /**
   * Remove an authorization session. User-only.
   *
   * @method ac
   * @param id The identifier of the authorization session to remove.
   */
  async removeAuthorizationSession(id: string): Promise<void> {
    return await this.#accountManager.removeAuthorizationSession(id);
  }

  /**
   * Remove all authorization sessions except for the current one. User-only.
   *
   * @method ac
   */
  async removeAuthorizationSessions(): Promise<void> {
    return await this.#accountManager.removeAuthorizationSessions();
  }

  /**
   * Remove a bot from the attachments menu. User-only.
   *
   * @method ac
   * @param botId The identifier of the bot to remove from the attachments menu.
   */
  async removeBotFromAttachmentsMenu(botId: ID): Promise<void> {
    return await this.#accountManager.removeBotFromAttachmentsMenu(botId);
  }

  /**
   * Remove the emoji status of a channel. User-only.
   *
   * @method ac
   * @param chatId The identifier of a channel.
   */
  async removeChannelEmojiStatus(chatId: ID): Promise<void> {
    await this.#accountManager.removeChannelEmojiStatus(chatId);
  }

  /**
   * Remove the current account's emoji status. User-only.
   *
   * @method ac
   */
  async removeEmojiStatus(): Promise<void> {
    await this.#accountManager.removeEmojiStatus();
  }

  /**
   * Remove the profile video of the current user or a bot managed by the current user.
   *
   * @method ac
   */
  async removeProfilePhoto(params?: RemoveProfilePhotoParams): Promise<void> {
    return await this.#accountManager.removeProfilePhoto(params);
  }

  /**
   * Remove the emoji status of a bot's user. Bot-only.
   *
   * @method ac
   * @param userId The identifier of a user of the bot.
   */
  async removeUserEmojiStatus(userId: ID): Promise<void> {
    await this.#accountManager.removeUserEmojiStatus(userId);
  }

  /**
   * Remove the current account's username. User-only.
   *
   * @method ac
   */
  async removeUsername(): Promise<void> {
    await this.#accountManager.removeUsername();
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
   * Resolve a phone number. User-only.
   *
   * @method ac
   * @param phoneNumber The phone number to resolve.
   */
  async resolvePhoneNumber(phoneNumber: string): Promise<User> {
    return await this.#accountManager.resolvePhoneNumber(phoneNumber);
  }

  /**
   * Resolve a username.
   *
   * @method ac
   * @param username The username to resolve.
   */
  async resolveUsername(username: string, params?: ResolveUsernameParams): Promise<ChatP> {
    return await this.#accountManager.resolveUsername(username, params);
  }

  /**
   * Resume the business bot in a chat. User-only.
   *
   * @method ac
   * @param chatId The identifier of a chat.
   */
  async resumeBusinessBotConnection(chatId: ID): Promise<void> {
    await this.#accountManager.resumeBusinessBotConnection(chatId);
  }

  /**
   * Set the current account's TTL. User-only.
   *
   * @method ac
   * @param dayCount The current account's TTL in days.
   */
  async setAccountTtl(dayCount: number): Promise<void> {
    return await this.#accountManager.setAccountTtl(dayCount);
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
   * Set the emoji status of a channel. User-only.
   *
   * @method ac
   * @param chatId The identifier of a channel.
   * @param emojiStatus The emoji or gift to set as the new emoji status.
   */
  async setChannelEmojiStatus(chatId: ID, emojiStatus: InputEmojiStatus, params?: SetEmojiStatusParams): Promise<void> {
    await this.#accountManager.setChannelEmojiStatus(chatId, emojiStatus, params);
  }

  /**
   * Set the list of close friends. User-only.
   *
   * @method ac
   * @param userIds The identifiers of users to set as close friends.
   */
  async setCloseFriends(userIds: ID[]): Promise<void> {
    await this.#accountManager.setCloseFriends(userIds);
  }

  /**
   * Set the current account's emoji status. User-only.
   *
   * @method ac
   * @param emojiStatus The emoji or gift to set as the new emoji status.
   */
  async setEmojiStatus(emojiStatus: InputEmojiStatus, params?: SetEmojiStatusParams) {
    await this.#accountManager.setEmojiStatus(emojiStatus, params);
  }

  /**
   * Set the current account's online status. User-only.
   *
   * @method ac
   * @param isOnline The new online status.
   */
  async setIsOnline(isOnline: boolean): Promise<void> {
    await this.#accountManager.setIsOnline(isOnline);
  }

  /**
   * Set the location of the current user. User-only.
   *
   * @method ac
   */
  async setLocation(params?: SetLocationParams): Promise<void> {
    await this.#accountManager.setLocation(params);
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
   * Set the personal channel of the current user. User-only.
   *
   * @method ac
   */
  async setPersonalChannel(params?: SetPersonalChannelParams): Promise<void> {
    await this.#accountManager.setPersonalChannel(params);
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
   * Set the emoji status of a bot's user. Bot-only.
   *
   * @method ac
   * @param userId The identifier of a user of the bot.
   * @param emojiStatus The emoji or gift to set as the new emoji status.
   */
  async setUserEmojiStatus(userId: ID, emojiStatus: InputEmojiStatus, params?: SetEmojiStatusParams) {
    await this.#accountManager.setUserEmojiStatus(userId, emojiStatus, params);
  }

  /**
   * Set the username of the current account. User-only.
   *
   * @method ac
   * @param username The username to set.
   */
  async setUsername(username: string): Promise<void> {
    await this.#accountManager.setUsername(username);
  }

  /**
   * Set the working hours of the current user. User-only.
   *
   * @method ac
   */
  async setWorkingHours(params?: SetWorkingHoursParams): Promise<void> {
    await this.#accountManager.setWorkingHours(params);
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
   * Suggest a birthday. User-only.
   *
   * @method ac
   * @param userId The identifier of the user to suggest a birthday for.
   * @param birthday The birthday to suggest.
   */
  async suggestBirthday(userId: ID, birthday: Birthday): Promise<void> {
    await this.#accountManager.suggestBirthday(userId, birthday);
  }

  /**
   * Unblock a user. User-only.
   *
   * @method ac
   * @param userId The identifier of the user to unblock.
   */
  async unblockUser(userId: ID) {
    await this.#messageManager.unblockUser(userId);
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
   * Update the profile photo of the current user or a bot managed by the current user.
   *
   * @method ac
   * @param photo The photo to set as profile photo.
   */
  async updateProfilePhoto(photo: FileSource, params?: UpdateProfilePhotoParams): Promise<void> {
    await this.#accountManager.updateProfilePhoto(photo, params);
  }

  /**
   * Update the profile video of the current user or a bot managed by the current user.
   *
   * @method ac
   * @param video The video to set as profile video.
   */
  async updateProfileVideo(video: FileSource, params?: UpdateProfileVideoParams): Promise<void> {
    return await this.#accountManager.updateProfileVideo(video, params);
  }

  //
  // ========================= MESSAGES ========================= //
  //

  /**
   * Add a sticker to favorites. User-only.
   *
   * @method ms
   * @param fileId The file identifier of the sticker.
   */
  async addStickerToFavorites(fileId: string): Promise<void> {
    return await this.#messageManager.addStickerToFavorites(fileId);
  }

  /**
   * Add a sticker to recents. User-only.
   *
   * @method ms
   * @param fileId The file identifier of the sticker.
   */
  async addStickerToRecents(fileId: string): Promise<void> {
    return await this.#messageManager.addStickerToRecents(fileId);
  }

  /**
   * Clear all message drafts. User-only.
   *
   * @method ms
   */
  async clearDrafts(): Promise<void> {
    await this.#messageManager.clearDrafts();
  }

  /**
   * Clear recent stickers. User-only.
   *
   * @method ms
   */
  async clearRecentStickers(): Promise<void> {
    return await this.#messageManager.clearRecentStickers();
  }

  /**
   * Delete all messages sent by a specific member of a chat. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  async deleteChatMemberMessages(chatId: ID, memberId: ID) {
    await this.#messageManager.deleteChatMemberMessages(chatId, memberId);
  }

  /**
   * Delete a single message.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message to delete.
   */
  async deleteMessage(chatId: ID, messageId: number, params?: DeleteMessageParams) {
    await this.#messageManager.deleteMessages(chatId, [messageId], params);
  }

  /**
   * Delete multiple messages.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageIds The identifiers of the messages to delete.
   */
  async deleteMessages(chatId: ID, messageIds: number[], params?: DeleteMessagesParams) {
    await this.#messageManager.deleteMessages(chatId, messageIds, params);
  }

  /**
   * Delete a scheduled message. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the scheduled message to delete.
   */
  async deleteScheduledMessage(chatId: ID, messageId: number) {
    await this.#messageManager.deleteScheduledMessage(chatId, messageId);
  }

  /**
   * Delete multiple scheduled messages. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageIds The identifiers of the scheduled messages to delete.
   */
  async deleteScheduledMessages(chatId: ID, messageIds: number[]) {
    await this.#messageManager.deleteScheduledMessages(chatId, messageIds);
  }

  /**
   * Edit an inline message's caption. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The identifier of the inline message.
   */
  async editInlineMessageCaption(inlineMessageId: string, params?: EditInlineMessageCaptionParams): Promise<void> {
    await this.#messageManager.editInlineMessageCaption(inlineMessageId, params);
  }

  /**
   * Edit an inline message's live location. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The identifier of the inline message.
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
   * Edit an inline message's media. User-only.
   *
   * @method ms
   * @param inlineMessageId The identifier of the inline message.
   * @param media The new media of the message.
   */
  async editInlineMessageMedia(inlineMessageId: string, media: InputMedia, params?: EditInlineMessageMediaParams): Promise<void> {
    await this.#messageManager.editInlineMessageMedia(inlineMessageId, media, params);
  }

  /**
   * Edit an inline message's reply markup. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The identifier of the inline message.
   */
  async editInlineMessageReplyMarkup(inlineMessageId: string, params?: EditMessageReplyMarkupParams) {
    await this.#messageManager.editInlineMessageReplyMarkup(inlineMessageId, params);
  }

  /**
   * Edit an inline message's rich text. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The identifier of the inline message.
   * @param richText The new rich text of the message.
   */
  async editInlineMessageRichText(inlineMessageId: string, richText: InputRichText, params?: EditInlineMessageRichTextParams): Promise<void> {
    return await this.#messageManager.editInlineMessageRichText(inlineMessageId, richText, params);
  }

  /**
   * Edit an inline message's text. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The identifier of the inline message.
   * @param text The new text of the message.
   */
  async editInlineMessageText(inlineMessageId: string, text: string, params?: EditInlineMessageTextParams): Promise<void> {
    await this.#messageManager.editInlineMessageText(inlineMessageId, text, params);
  }

  /**
   * Edit a message's caption.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message.
   * @returns The edited message.
   */
  async editMessageCaption(chatId: ID, messageId: number, params?: EditMessageCaptionParams): Promise<Message> {
    return await this.#messageManager.editMessageCaption(chatId, messageId, params);
  }

  /**
   * Edit a message's live location.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message.
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
   * Edit a message's media.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message.
   * @param media The new media of the message.
   * @returns The edited message.
   */
  async editMessageMedia(chatId: ID, messageId: number, media: InputMedia, params?: EditMessageMediaParams): Promise<Message> {
    return await this.#messageManager.editMessageMedia(chatId, messageId, media, params);
  }

  /**
   * Edit a message's reply markup.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message.
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
   * Edit a message's rich text.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message.
   * @param richText The new rich text of the message.
   * @returns The edited rich text message.
   */
  async editMessageRichText(chatId: ID, messageId: number, richText: InputRichText, params?: EditMessageRichTextParams): Promise<MessageRichText> {
    return await this.#messageManager.editMessageRichText(chatId, messageId, richText, params);
  }

  /**
   * Edit a message's text.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message.
   * @param text The new text of the message.
   * @returns The edited text message.
   */
  async editMessageText(chatId: ID, messageId: number, text: string, params?: EditMessageTextParams): Promise<MessageText> {
    return await this.#messageManager.editMessageText(chatId, messageId, text, params);
  }

  /**
   * Forward a single message.
   *
   * @method ms
   * @param from The identifier of a chat to forward the message from.
   * @param to The identifier of a chat to forward the message to.
   * @param messageId The identifier of the message to forward.
   * @returns The forwarded message.
   */
  async forwardMessage(from: ID, to: ID, messageId: number, params?: ForwardMessagesParams): Promise<Message> {
    return (await this.forwardMessages(from, to, [messageId], params))[0];
  }

  /**
   * Forward multiple messages.
   *
   * @method ms
   * @param from The identifier of a chat to forward the messages from.
   * @param to The identifier of a chat to forward the messages to.
   * @param messageIds The identifiers of the messages to forward.
   * @returns The forwarded messages.
   */
  async forwardMessages(from: ID, to: ID, messageIds: number[], params?: ForwardMessagesParams): Promise<Message[]> {
    return await this.#messageManager.forwardMessages(from, to, messageIds, params);
  }

  /**
   * Get favorite stickers. User-only.
   *
   * @method ms
   */
  async getFavoriteStickers(): Promise<Sticker[]> {
    return await this.#messageManager.getFavoriteStickers();
  }

  /**
   * Get the link preview for a message that is about to be sent. User-only.
   *
   * @method ms
   * @param text The message's text.
   */
  async getLinkPreview(text: string, params?: GetLinkPreviewParams): Promise<LinkPreview | null> {
    return await this.#linkPreviewManager.getLinkPreview(text, params);
  }

  /**
   * Retrieve a single message.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the message to retrieve.
   * @example ```ts
   * const message = await client.getMessage("@MTKruto", 212);
   * ```
   * @returns The retrieved message.
   * @cache
   */
  async getMessage(chatId: ID, messageId: number): Promise<Message | null> {
    return await this.#messageManager.getMessage(chatId, messageId);
  }

  /**
   * Get the counters of a single message. User-only.
   *
   * @method ms
   * @param chatId The identifier of the chat including the message.
   * @param messageId The identifier of the message.
   */
  async getMessageCounters(chatId: ID, messageId: number): Promise<MessageCounters> {
    return await this.#messageManager.getMessageCounters(chatId, messageId);
  }

  /**
   * Get a list of reactions made to a message. User-only.
   *
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the message.
   * @method ms
   */
  async getMessageReactions(chatId: ID, messageId: number, params?: GetMessageReactionsParams): Promise<MessageReactionList> {
    return await this.#messageManager.getMessageReactions(chatId, messageId, params);
  }

  /**
   * Get a message's read date. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the message.
   */
  async getMessageReadDate(chatId: ID, messageId: number): Promise<number> {
    return await this.#messageManager.getMessageReadDate(chatId, messageId);
  }

  /**
   * Retrieve multiple messages.
   *
   * @method ms
   * @param chatId The identifier of a chat to retrieve the messages from.
   * @param messageIds The identifiers of the messages to retrieve.
   * @example ```ts
   * const message = await client.getMessages("@MTKruto", [210, 212]);
   * ```
   * @returns The retrieved messages.
   * @cache
   */
  async getMessages(chatId: ID, messageIds: number[]): Promise<Message[]> {
    return await this.#messageManager.getMessages(chatId, messageIds);
  }

  /**
   * Get the counters of multiple messages. User-only.
   *
   * @method ms
   * @param chatId The identifier of the chat including the messages.
   * @param messageIds The identifiers of the messages.
   */
  async getMessagesCounters(chatId: ID, messageIds: number[]): Promise<MessageCounters[]> {
    return await this.#messageManager.getMessagesCounters(chatId, messageIds);
  }

  /**
   * Get a message's viewers. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the message.
   * @returns The message's viewers.
   */
  async getMessageViewers(chatId: ID, messageId: number): Promise<MessageViewer[]> {
    return await this.#messageManager.getMessageViewers(chatId, messageId);
  }

  /**
   * Get a progress ID that can be passed to relevant send* methods to receive upload progress updates for them.
   *
   * @method ms
   * @cache
   */
  async getProgressId(): Promise<string> {
    return await this.#fileManager.getProgressId();
  }

  /**
   * Get recent stickers. User-only.
   *
   * @method ms
   */
  async getRecentStickers(): Promise<Sticker[]> {
    return await this.#messageManager.getRecentStickers();
  }

  /**
   * Get a message's full rich text. User-only.
   *
   * @method ms
   * @param chatId The identifier of the chat including the message.
   * @param messageId The identifier of the message.
   */
  async getRichText(chatId: ID, messageId: number): Promise<RichText | null> {
    return await this.#messageManager.getRichText(chatId, messageId);
  }

  /**
   * Get saved animations. User-only.
   *
   * @method ms
   */
  async getSavedAnimations(): Promise<Animation[]> {
    return await this.#messageManager.getSavedAnimations();
  }

  /**
   * Get a list of saved chats.
   *
   * @method ms
   */
  async getSavedChats(params?: GetSavedChatsParams): Promise<SavedChats> {
    return await this.#messageManager.getSavedChats(params);
  }

  /**
   * Get messages saved from a specific chat. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   */
  async getSavedMessages(chatId: ID, params?: GetSavedMessagesParams): Promise<Message[]> {
    return await this.#messageManager.getSavedMessages(chatId, params);
  }

  /**
   * Get the scheduled messages of a chat. User-only.
   *
   * @method ms
   * @param chatId The identifier of the chat including the scheduled messages.
   */
  async getScheduledMessages(chatId: ID): Promise<Message[]> {
    return await this.#messageManager.getScheduledMessages(chatId);
  }

  /**
   * Open a mini app. User-only.
   *
   * @method ms
   * @param botId The identifier of a bot with the mini app.
   * @param chatId The identifier of the chat from which the mini app is opened.
   * @cache
   */
  async openMiniApp(botId: ID, chatId: ID, params?: OpenMiniAppParams): Promise<MiniAppInfo> {
    return await this.#messageManager.openMiniApp(botId, chatId, params);
  }

  /**
   * Pin a message in a chat.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the message.
   */
  async pinMessage(chatId: ID, messageId: number, params?: PinMessageParams) {
    await this.#messageManager.pinMessage(chatId, messageId, params);
  }

  /**
   * Mark messages as read. User-only.
   *
   * @method ms
   * @param chatId The identifier of the chat which the messages belong to.
   * @param untilMessageId The identifier of the message that will be marked as read, along with any other unread messages before it.
   */
  async readMessages(chatId: ID, untilMessageId: number): Promise<void> {
    await this.#messageManager.readMessages(chatId, untilMessageId);
  }

  /**
   * Remove a sticker from favorites. User-only.
   *
   * @method ms
   * @param fileId The file identifier of the sticker.
   */
  async removeStickerFromFavorites(fileId: string): Promise<void> {
    return await this.#messageManager.removeStickerFromFavorites(fileId);
  }

  /**
   * Remove a sticker from recents. User-only.
   *
   * @method ms
   * @param fileId The file identifier of the sticker.
   */
  async removeStickerFromRecents(fileId: string): Promise<void> {
    return await this.#messageManager.removeStickerFromRecents(fileId);
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
   * Save an animation. User-only.
   *
   * @method ms
   * @param fileId The file identifier of the animation.
   */
  async saveAnimation(fileId: string): Promise<void> {
    return await this.#messageManager.saveAnimation(fileId);
  }

  /**
   * Search for messages. User-only.
   *
   * @method ms
   */
  async searchMessages(params?: SearchMessagesParams): Promise<MessageList> {
    return await this.#messageManager.searchMessages(params);
  }

  /**
   * Send an animation.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the animation to.
   * @param animation The animation to send.
   * @returns The sent animation.
   */
  async sendAnimation(chatId: ID, animation: FileSource, params?: SendAnimationParams): Promise<MessageAnimation> {
    return await this.#messageManager.sendAnimation(chatId, animation, params);
  }

  /**
   * Send an audio file.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the audio file to.
   * @param audio The audio to send.
   * @returns The sent audio file.
   */
  async sendAudio(chatId: ID, audio: FileSource, params?: SendAudioParams): Promise<MessageAudio> {
    return await this.#messageManager.sendAudio(chatId, audio, params);
  }

  /**
   * Send a chat action.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the chat action to.
   * @param action The chat action.
   */
  async sendChatAction(chatId: ID, action: ChatActionType, params?: { messageThreadId?: number }) {
    await this.#messageManager.sendChatAction(chatId, action, params);
  }

  /**
   * Send a checklist.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the checklist to.
   * @param title The checklist's title.
   * @param items The checklist's items.
   * @returns The sent checklist.
   */
  async sendChecklist(chatId: ID, title: string, items: InputChecklistItem[], params?: SendChecklistParams): Promise<MessageChecklist> {
    return await this.#messageManager.sendChecklist(chatId, title, items, params);
  }

  /**
   * Send a contact.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the contact to.
   * @param firstName The contact's first name.
   * @param phoneNumber The contact's phone number.
   * @returns The sent contact.
   */
  async sendContact(chatId: ID, firstName: string, phoneNumber: string, params?: SendContactParams): Promise<MessageContact> {
    return await this.#messageManager.sendContact(chatId, firstName, phoneNumber, params);
  }

  /**
   * Send a dice.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the dice to.
   * @returns The sent dice.
   */
  async sendDice(chatId: ID, params?: SendDiceParams): Promise<MessageDice> {
    return await this.#messageManager.sendDice(chatId, params);
  }

  /**
   * Send a document.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the document to.
   * @param document The document to send.
   * @returns The sent document.
   */
  async sendDocument(chatId: ID, document: FileSource, params?: SendDocumentParams): Promise<MessageDocument> {
    return await this.#messageManager.sendDocument(chatId, document, params);
  }

  /**
   * Send an invoice. Bot-only.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the invoice to.
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
   * Send a live photo.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the photo to.
   * @param photo The photo to send.
   * @param video The video version of the photo.
   * @returns The sent live photo.
   */
  async sendLivePhoto(chatId: ID, photo: FileSource, video: FileSource, params?: SendLivePhotoParams): Promise<MessageLivePhoto> {
    return await this.#messageManager.sendLivePhoto(chatId, photo, video, params);
  }

  /**
   * Send a location.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the location to.
   * @param latitude The location's latitude.
   * @param longitude The location's longitude.
   * @returns The sent location.
   */
  async sendLocation(chatId: ID, latitude: number, longitude: number, params?: SendLocationParams): Promise<MessageLocation> {
    return await this.#messageManager.sendLocation(chatId, latitude, longitude, params);
  }

  /**
   * Send a media group.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the media group to.
   * @param media The media to include in the media group. Animations are not allowed. All of them must be of the same media type, but an exception is that photos and videos can be mixed.
   * @returns The sent messages.
   */
  async sendMediaGroup(chatId: ID, media: InputMedia[], params?: SendMediaGroupParams): Promise<Message[]> {
    return await this.#messageManager.sendMediaGroup(chatId, media, params);
  }

  /**
   * Send a text message.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the message to.
   * @param text The message's text.
   * @returns The sent text message.
   */
  async sendMessage(chatId: ID, text: string, params?: SendMessageParams): Promise<MessageText> {
    return await this.#messageManager.sendMessage(chatId, text, params);
  }

  /**
   * Stream a drafted text message. Bot-only.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the message to.
   * @param draftId The identifier of the draft.
   * @param text The message's text.
   */
  async sendMessageDraft(chatId: ID, draftId: number, text: string, params?: SendMessageDraftParams) {
    await this.#messageManager.sendMessageDraft(chatId, draftId, text, params);
  }

  /**
   * Send a photo.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the photo to.
   * @param photo The photo to send.
   * @returns The sent photo.
   */
  async sendPhoto(chatId: ID, photo: FileSource, params?: SendPhotoParams): Promise<MessagePhoto> {
    return await this.#messageManager.sendPhoto(chatId, photo, params);
  }

  /**
   * Send a poll.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the poll to.
   * @param question The poll's question.
   * @param options The poll's options.
   * @returns The sent poll.
   */
  async sendPoll(chatId: ID, question: string, options: InputPollOption[], params?: SendPollParams): Promise<MessagePoll> {
    return await this.#messageManager.sendPoll(chatId, question, options, params);
  }

  /**
   * Send a rich text message.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the message to.
   * @param richText The message's rich text.
   * @returns The sent rich text message.
   */
  async sendRichText(chatId: ID, richText: InputRichText, params?: SendRichTextParams): Promise<MessageRichText> {
    return await this.#messageManager.sendRichText(chatId, richText, params);
  }

  /**
   * Stream a drafted rich text message. Bot-only.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the message to.
   * @param draftId The identifier of the draft.
   * @param richText The message's rich text.
   */
  async sendRichTextDraft(chatId: ID, draftId: number, richText: InputRichText, params?: SendRichTextDraftParams): Promise<void> {
    return await this.#messageManager.sendRichTextDraft(chatId, draftId, richText, params);
  }

  /**
   * Send a scheduled message before its schedule. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the scheduled message to send.
   */
  async sendScheduledMessage(chatId: ID, messageId: number): Promise<Message> {
    return await this.#messageManager.sendScheduledMessage(chatId, messageId);
  }

  /**
   * Send multiple scheduled messages before their schedule. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageIds The identifiers of the scheduled messages to send.
   */
  async sendScheduledMessages(chatId: ID, messageIds: number[]): Promise<Message[]> {
    return await this.#messageManager.sendScheduledMessages(chatId, messageIds);
  }

  /**
   * Send a screenshot notification. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param replyToMessageId The identifier of the message.
   */
  async sendScreenshotNotification(chatId: ID, replyToMessageId: number): Promise<void> {
    return await this.#messageManager.sendScreenshotNotification(chatId, replyToMessageId);
  }

  /**
   * Send a sticker.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the sticker to.
   * @param sticker The sticker to send.
   * @returns The sent sticker.
   */
  async sendSticker(chatId: ID, sticker: FileSource, params?: SendStickerParams): Promise<MessageSticker> {
    return await this.#messageManager.sendSticker(chatId, sticker, params);
  }

  /**
   * Send a venue.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the venue to.
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
   * Send a video.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the video to.
   * @param video The video to send.
   * @returns The sent video.
   */
  async sendVideo(chatId: ID, video: FileSource, params?: SendVideoParams): Promise<MessageVideo> {
    return await this.#messageManager.sendVideo(chatId, video, params);
  }

  /**
   * Send a video note.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the video note to.
   * @param videoNote The video note to send.
   * @returns The sent video note.
   */
  async sendVideoNote(chatId: ID, videoNote: FileSource, params?: SendVideoNoteParams): Promise<MessageVideoNote> {
    return await this.#messageManager.sendVideoNote(chatId, videoNote, params);
  }

  /**
   * Send a voice message.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the voice message to.
   * @param voice The voice to send.
   * @returns The sent voice message.
   */
  async sendVoice(chatId: ID, voice: FileSource, params?: SendVoiceParams): Promise<MessageVoice> {
    return await this.#messageManager.sendVoice(chatId, voice, params);
  }

  /**
   * Set a reaction as default. User-only.
   *
   * @method ms
   * @param reaction The reaction to set as default.
   */
  async setDefaultReaction(reaction: Reaction): Promise<void> {
    await this.#messageManager.setDefaultReaction(reaction);
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
   * Stop a poll.
   *
   * @method ms
   * @param chatId The chat that includes the poll.
   * @param messageId The identifier of the poll's message.
   * @returns The new state of the poll.
   */
  async stopPoll(chatId: ID, messageId: number, params?: StopPollParams): Promise<Poll> {
    return await this.#messageManager.stopPoll(chatId, messageId, params);
  }

  /**
   * Summarize a message's text. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of a message.
   */
  async summarizeText(chatId: ID, messageId: number, params?: SummarizeTextParams): Promise<SummarizedText> {
    return await this.#messageManager.summarizeText(chatId, messageId, params);
  }

  /**
   * Transcribe a voice message. User-only.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message.
   * @cache
   */
  async transcribeVoice(chatId: ID, messageId: number): Promise<VoiceTranscription> {
    return await this.#messageManager.transcribeVoice(chatId, messageId);
  }

  /**
   * Translate a single text. User-only.
   *
   * @method ms
   * @param toLanguage The code of the language to translate into.
   * @param chatId The identifier of the chat including the message.
   * @param messageId The identifier of the message to translate.
   */
  async translateMessage(toLanguage: string, chatId: ID, messageId: number, params?: TranslateTextParams): Promise<TranslatedText> {
    return await this.#messageManager.translateMessage(toLanguage, chatId, messageId, params);
  }

  /**
   * Translate multiple texts. User-only.
   *
   * @method ms
   * @param toLanguage The code of the language to translate into.
   * @param chatId The identifier of the chat including the messages.
   * @param messageIds The identifiers of the messages to translate.
   */
  async translateMessages(toLanguage: string, chatId: ID, messageIds: number[], params?: TranslateTextParams): Promise<TranslatedText[]> {
    return await this.#messageManager.translateMessages(toLanguage, chatId, messageIds, params);
  }

  /**
   * Translate a single text. User-only.
   *
   * @method ms
   * @param toLanguage The code of the language to translate into.
   * @param text The text to translate.
   */
  async translateText(toLanguage: string, text: TextToTranslate, params?: TranslateTextParams): Promise<TranslatedText> {
    return await this.#messageManager.translateText(toLanguage, text, params);
  }

  /**
   * Translate multiple texts. User-only.
   *
   * @method ms
   * @param toLanguage The code of the language to translate into.
   * @param texts The texts to translate.
   */
  async translateTexts(toLanguage: string, texts: TextToTranslate[], params?: TranslateTextParams): Promise<TranslatedText[]> {
    return await this.#messageManager.translateTexts(toLanguage, texts, params);
  }

  /**
   * Unpin a pinned message.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the message.
   */
  async unpinMessage(chatId: ID, messageId: number, params?: UnpinMessageParams) {
    await this.#messageManager.unpinMessage(chatId, messageId, params);
  }

  /**
   * Unpin all pinned messages.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   */
  async unpinMessages(chatId: ID, params?: UnpinMessagesParams) {
    await this.#messageManager.unpinMessages(chatId, params);
  }

  /**
   * Unsave an animation. User-only.
   *
   * @method ms
   * @param fileId The file identifier of the animation.
   */
  async unsaveAnimation(fileId: string): Promise<void> {
    return await this.#messageManager.unsaveAnimation(fileId);
  }

  /**
   * View a single message. User-only.
   *
   * @method ms
   * @param chatId The identifier of the chat including the message.
   * @param messageId The identifier of the message.
   */
  async viewMessage(chatId: ID, messageId: number): Promise<void> {
    return await this.#messageManager.viewMessage(chatId, messageId);
  }

  /**
   * View multiple messages. User-only.
   *
   * @method ms
   * @param chatId The identifier of the chat including the messages.
   * @param messageIds The identifiers of the messages.
   */
  async viewMessages(chatId: ID, messageIds: number[]): Promise<void> {
    return await this.#messageManager.viewMessages(chatId, messageIds);
  }

  //
  // ========================= POLLS ========================= //
  //

  /**
   * Add an option to a poll. User-only.
   *
   * @method pl
   * @param chatId The identifier of the chat that includes the poll.
   * @param messageId The identifier of the message that includes the poll.
   * @param option The option to add.
   */
  async addPollOption(chatId: ID, messageId: number, option: InputPollOption) {
    await this.#pollManager.addPollOption(chatId, messageId, option);
  }

  /**
   * Get poll voters. User-only.
   *
   * @method pl
   * @param chatId The identifier of the chat that includes the poll.
   * @param messageId The identifier of the message that includes the poll.
   */
  async getPollVoters(chatId: ID, messageId: number, params?: GetPollVotersParams): Promise<PollVoterList> {
    return await this.#pollManager.getPollVoters(chatId, messageId, params);
  }

  /**
   * Remove an option from a poll. User-only.
   *
   * @method pl
   * @param chatId The identifier of the chat that includes the poll.
   * @param messageId The identifier of the message that includes the poll.
   * @param optionIndex The index of the option to remove.
   */
  async removePollOption(chatId: ID, messageId: number, optionIndex: number) {
    await this.#pollManager.removePollOption(chatId, messageId, optionIndex);
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

  //
  // ========================= CHECKLISTS ========================= //
  //

  /**
   * Add items to a checklist. User-only.
   *
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the checklist message.
   * @param items The items to add.
   * @method cl
   */
  async addToChecklist(chatId: ID, messageId: number, items: InputChecklistItem[]): Promise<void> {
    await this.#checklistManager.addToChecklist(chatId, messageId, items);
  }

  /**
   * Check a single item of a checklist. User-only.
   *
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the checklist message.
   * @param item The identifier of the item to check.
   * @method cl
   */
  async checkChecklistItem(chatId: ID, messageId: number, item: number): Promise<void> {
    await this.#checklistManager.checkChecklistItem(chatId, messageId, item);
  }

  /**
   * Check multiple items of a checklist. User-only.
   *
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the checklist message.
   * @param items The identifiers of the items to check.
   * @method cl
   */
  async checkChecklistItems(chatId: ID, messageId: number, items: number[]): Promise<void> {
    await this.#checklistManager.checkChecklistItems(chatId, messageId, items);
  }

  /**
   * Uncheck a single item of a checklist. User-only.
   *
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the checklist message.
   * @param item The identifier of the item to uncheck.
   * @method cl
   */
  async uncheckChecklistItem(chatId: ID, messageId: number, item: number): Promise<void> {
    await this.#checklistManager.uncheckChecklistItem(chatId, messageId, item);
  }

  /**
   * Uncheck multiple items of a checklist. User-only.
   *
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the checklist message.
   * @param items The identifiers of the items to uncheck.
   * @method cl
   */
  async uncheckChecklistItems(chatId: ID, messageId: number, items: number[]): Promise<void> {
    await this.#checklistManager.uncheckChecklistItems(chatId, messageId, items);
  }

  /**
   * Update a checklist. User-only.
   *
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the checklist message.
   * @method cl
   */
  async updateChecklist(chatId: ID, messageId: number, params?: UpdateChecklistParams): Promise<void> {
    await this.#checklistManager.updateChecklist(chatId, messageId, params);
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
   * @cache file
   */
  async *download(fileId: string, params?: DownloadParams): AsyncGenerator<Uint8Array, void, unknown> {
    for await (const chunk of this.#fileManager.download(fileId, params)) {
      yield chunk;
    }
  }

  /**
   * Download a chunk of a file.
   *
   * @method fs
   * @param fileId The identifier of a file.
   * @example ```ts
   * const chunk = await client.downloadChunk(fileId, { chunkSize: 256 * 1024 });
   * ```
   * @returns The downloaded chunk.
   * @cache file
   */
  async downloadChunk(fileId: string, params?: DownloadParams): Promise<Uint8Array> {
    const controller = new AbortController();
    for await (const chunk of this.#fileManager.download(fileId, { ...params, signal: controller.signal })) {
      controller.abort();
      return chunk;
    }

    unreachable();
  }

  /**
   * Get custom emoji documents for download.
   *
   * @method fs
   * @param id Identifier of one or more of custom emojis.
   * @returns The custom emoji documents.
   * @cache
   */
  async getCustomEmojiStickers(id: string | string[]): Promise<Sticker[]> {
    return await this.#fileManager.getCustomEmojiStickers(id);
  }

  //
  // ========================= CHATS ========================= //
  //

  /**
   * Add a single user to a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat to add the user to.
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
   * @param userIds The identifiers of the users to add to the channel or supergroup.
   * @returns An array of FailedInvitation that has at most a length that is the same as that of the parameter userIds. If empty, it means that all the provided users were added.
   */
  async addChatMembers(chatId: ID, userIds: ID[]): Promise<FailedInvitation[]> {
    return await this.#chatManager.addChatMembers(chatId, userIds);
  }

  /**
   * Approve a join request.
   *
   * @method ch
   * @param chatId The identifier of a chat with the join request.
   * @param userId The user who made the join request.
   */
  async approveJoinRequest(chatId: ID, userId: ID): Promise<void> {
    await this.#chatManager.approveJoinRequest(chatId, userId);
  }

  /**
   * Approve all join requests. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat with the join requests.
   */
  async approveJoinRequests(chatId: ID, params?: ApproveJoinRequestsParams): Promise<void> {
    await this.#chatManager.approveJoinRequests(chatId, params);
  }

  /**
   * Archive a single chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async archiveChat(chatId: ID): Promise<void> {
    await this.#chatListManager.archiveChat(chatId);
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
   * Ban a member from a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param memberId The identifier of the member.
   */
  async banChatMember(chatId: ID, memberId: ID, params?: BanChatMemberParams) {
    await this.#chatManager.banChatMember(chatId, memberId, params);
  }

  /**
   * Close a chat previously opened by openChat.
   *
   * @method ch
   * @param chatId The identifier of a chat to close.
   */
  async closeChat(chatId: ID): Promise<void> {
    await this.#updateManager.closeChat(chatId);
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
   * Create an invite link.
   *
   * @method ch
   * @param chatId The identifier of a chat to create the invite link for.
   * @returns The newly created invite link.
   */
  async createInviteLink(chatId: ID, params?: CreateInviteLinkParams): Promise<InviteLink> {
    return await this.#chatManager.createInviteLink(chatId, params);
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
   * Decline a join request.
   *
   * @method ch
   * @param chatId The identifier of a chat with the join request.
   * @param userId The user who made the join request.
   */
  async declineJoinRequest(chatId: ID, userId: ID): Promise<void> {
    await this.#chatManager.declineJoinRequest(chatId, userId);
  }

  /**
   * Decline all join requests. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat with the join requests.
   */
  async declineJoinRequests(chatId: ID, params?: DeclineJoinRequestsParams): Promise<void> {
    await this.#chatManager.declineJoinRequests(chatId, params);
  }

  /**
   * Delete a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async deleteChat(chatId: ID): Promise<void> {
    await this.#chatManager.deleteChat(chatId);
  }

  /**
   * Delete a chat's photo.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async deleteChatPhoto(chatId: ID) {
    await this.#chatManager.deleteChatPhoto(chatId);
  }

  /**
   * Delete a chat's sticker set.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a supergroup.
   */
  async deleteChatStickerSet(chatId: ID) {
    await this.#messageManager.deleteChatStickerSet(chatId);
  }

  /**
   * Delete a forum topic.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   * @param topicId The identifier of the topic.
   */
  async deleteTopic(chatId: ID, topicId: number): Promise<void> {
    return await this.#forumManager.deleteTopic(chatId, topicId);
  }

  /**
   * Disable automatic anti-spam in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   */
  async disableAntispam(chatId: ID): Promise<void> {
    await this.#chatManager.disableAntispam(chatId);
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
   * Disable chat history for new members. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async disableChatHistoryForNewMembers(chatId: ID): Promise<void> {
    await this.#chatManager.disableChatHistoryForNewMembers(chatId);
  }

  /**
   * Disable join requests in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a channel or a supergroup.
   */
  async disableJoinRequests(chatId: ID) {
    await this.#chatManager.disableJoinRequests(chatId);
  }

  /**
   * Disable sharing in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async disableSharing(chatId: ID): Promise<void> {
    await this.#chatManager.disableSharing(chatId);
  }

  /**
   * Disable post signatures in a channel. User-only.
   *
   * @method ch
   * @param chatId The identifier of the channel.
   */
  async disableSignatures(chatId: ID): Promise<void> {
    await this.#chatManager.disableSignatures(chatId);
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
   * Disable topics in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   */
  async disableTopics(chatId: ID): Promise<void> {
    await this.#chatManager.disableTopics(chatId);
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
   * Enable automatic anti-spam in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   */
  async enableAntispam(chatId: ID): Promise<void> {
    await this.#chatManager.enableAntispam(chatId);
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
   * Enable chat history for new members. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async enableChatHistoryForNewMembers(chatId: ID): Promise<void> {
    await this.#chatManager.enableChatHistoryForNewMembers(chatId);
  }

  /**
   * Enable join requests in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a channel or a supergroup.
   */
  async enableJoinRequests(chatId: ID) {
    await this.#chatManager.enableJoinRequests(chatId);
  }

  /**
   * Enable sharing in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async enableSharing(chatId: ID): Promise<void> {
    await this.#chatManager.enableSharing(chatId);
  }

  /**
   * Enable post signatures in a channel. User-only.
   *
   * @method ch
   * @param chatId The identifier of the channel.
   */
  async enableSignatures(chatId: ID, params?: EnableSignaturesParams): Promise<void> {
    await this.#chatManager.enableSignatures(chatId, params);
  }

  /**
   * Enable topics in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   * @param isShownAsTabs Whether topics should be displayed as tabs.
   */
  async enableTopics(chatId: ID, isShownAsTabs: boolean): Promise<void> {
    await this.#chatManager.enableTopics(chatId, isShownAsTabs);
  }

  /**
   * Get administered chats. User-only.
   *
   * @method ch
   * @returns A list of administered chats.
   */
  async getAdministeredChats(params?: GetAdministeredChatsParams): Promise<ChatP[]> {
    return await this.#chatManager.getAdministeredChats(params);
  }

  /**
   * Get a chat.
   *
   * @method ch
   * @cache
   */
  async getChat(chatId: ID): Promise<Chat> {
    return await this.#chatListManager.getChat(chatId);
  }

  /**
   * Get the administrators of a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @returns The chat's administrators.
   */
  async getChatAdministrators(chatId: ID): Promise<ChatMember[]> {
    return await this.#chatListManager.getChatAdministrators(chatId);
  }

  /**
   * Get information on a user's chat membership.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param userId The identifier of the user.
   */
  async getChatMember(chatId: ID, userId: ID): Promise<ChatMember> {
    return await this.#chatListManager.getChatMember(chatId, userId);
  }

  /**
   * Get the members of a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async getChatMembers(chatId: ID, params?: GetChatMembersParams): Promise<ChatMember[]> {
    return await this.#chatListManager.getChatMembers(chatId, params);
  }

  /**
   * Get a partial chat.
   *
   * @method ch
   * @cache
   */
  async getChatP(chatId: ID): Promise<ChatP> {
    const inputPeer = await this.getInputPeer(chatId);
    const peer = await this.#inputPeerToPeer(inputPeer);
    const chatP = await this[getPeer](peer);
    if (chatP === null) {
      throw new InputError("Chat not found.");
    }
    return chatP[0];
  }

  /**
   * Get chats from a chat list. User-only.
   *
   * @method ch
   */
  async getChats(params?: GetChatsParams): Promise<ChatListItem[]> {
    return await this.#chatListManager.getChats(params?.from, params?.after, params?.limit);
  }

  /**
   * Get the settings of a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async getChatSettings(chatId: ID): Promise<ChatSettings> {
    return await this.#chatListManager.getChatSettings(chatId);
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
   * Get the invite links created for a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @returns The invite links created for the chat. This might be a subset of the results if they were less than `limit`. The parameters `afterDate` and `afterInviteLink` can be used for pagination.
   */
  async getCreatedInviteLinks(chatId: ID, params?: GetCreatedInviteLinksParams): Promise<InviteLink[]> {
    return await this.#chatManager.getCreatedInviteLinks(chatId, params);
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
   * Get chat history. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async getHistory(chatId: ID, params?: GetHistoryParams): Promise<Message[]> {
    return await this.#messageManager.getHistory(chatId, params);
  }

  /**
   * Get inactive chats. User-only.
   *
   * @method ch
   * @returns A list of inactive chats the current user is a member of.
   */
  async getInactiveChats(): Promise<InactiveChat[]> {
    return await this.#accountManager.getInactiveChats();
  }

  /**
   * Get pending join requests in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat with the join requests.
   */
  async getJoinRequests(chatId: ID, params?: GetJoinRequestsParams): Promise<JoinRequest[]> {
    return await this.#chatManager.getJoinRequests(chatId, params);
  }

  /**
   * Get the count of online members in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @returns The count of online members in the chat.
   */
  async getOnlineCount(chatId: ID): Promise<number> {
    return await this.#chatManager.getOnlineCount(chatId);
  }

  /**
   * Get pinned chats from a chat list. User-only.
   *
   * @method ch
   * @param from The chat list to get the pinned chats from. Defaults to main.
   */
  async getPinnedChats(from?: "archived" | "main"): Promise<ChatListItem[]> {
    return await this.#chatListManager.getPinnedChats(from);
  }

  /**
   * Get the recent actions of a channel or a supergroup. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   */
  async getRecentActions(chatId: ID, params?: GetRecentActionsParams): Promise<RecentActionsEntry[]> {
    return await this.#chatManager.getRecentActions(chatId, params);
  }

  /**
   * Get recommended channels. User-only.
   *
   * @method ch
   * @returns A list of recommended channels.
   */
  async getRecommendedChannels(): Promise<ChatPChannel[]> {
    return await this.#chatManager.getRecommendedChannels();
  }

  /**
   * Get similar bots. User-only.
   *
   * @method ch
   * @param chatId The identifier of a bot to get similar bots for.
   * @returns A list of similar bots.
   */
  async getSimilarBots(chatId: ID): Promise<ChatPPrivate[]> {
    return await this.#chatManager.getSimilarBots(chatId);
  }

  /**
   * Get similar channels. User-only.
   *
   * @method ch
   * @param chatId The identifier of a channel to get similar channels for.
   * @returns A list of similar channels.
   */
  async getSimilarChannels(chatId: ID): Promise<ChatPChannel[]> {
    return await this.#chatManager.getSimilarChannels(chatId);
  }

  /**
   * Get a topic of a forum chat by its identifier. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   * @param topicId The identifier of the topic.
   */
  async getTopic(chatId: ID, topicId: number): Promise<TopicListItem | null> {
    return await this.#forumManager.getTopic(chatId, topicId);
  }

  /**
   * Get the topics of a forum chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   */
  async getTopics(chatId: ID, params?: GetTopicsParams): Promise<TopicList> {
    return await this.#forumManager.getTopics(chatId, params);
  }

  /**
   * Get topics of a forum chat by their identifiers. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   * @param topicIds The identifiers of the topics.
   */
  async getTopicsById(chatId: ID, topicIds: number[]): Promise<TopicList> {
    return await this.#forumManager.getTopicsById(chatId, topicIds);
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
   * Hide the member list of a group to non-admins. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   */
  async hideMemberList(chatId: ID): Promise<void> {
    await this.#chatManager.hideMemberList(chatId);
  }

  /**
   * Join a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async joinChat(chatId: ID) {
    await this.#chatManager.joinChat(chatId);
  }

  /**
   * Kick a member from a chat. Same as a banChatMember call followed by unbanChatMember.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  async kickChatMember(chatId: ID, memberId: ID) {
    await this.#chatManager.banChatMember(chatId, memberId);
    await this.#chatManager.unbanChatMember(chatId, memberId);
  }

  /**
   * Leave a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async leaveChat(chatId: ID) {
    await this.#chatManager.leaveChat(chatId);
  }

  /**
   * Mark all mentions in a chat as read. User-only.
   *
   * @method ch
   * @param chatId The identifier of the chat.
   */
  async markAllMentionsAsRead(chatId: ID, params?: MarkAllMentionsAsReadParams): Promise<void> {
    return await this.#chatManager.markAllMentionsAsRead(chatId, params);
  }

  /**
   * Mark a chat as read. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async markChatAsRead(chatId: ID): Promise<void> {
    return await this.#chatManager.markChatAsRead(chatId);
  }

  /**
   * Mark a chat as unread. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async markChatAsUnread(chatId: ID): Promise<void> {
    return await this.#chatManager.markChatAsUnread(chatId);
  }

  /**
   * Open a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat to open.
   */
  async openChat(chatId: ID, params?: OpenChatParams): Promise<void> {
    await this.#updateManager.openChat(chatId, params);
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
   * Promote a chat member.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param userId The identifier of the user to promote.
   */
  async promoteChatMember(chatId: ID, userId: ID, params?: PromoteChatMemberParams): Promise<void> {
    await this.#chatManager.promoteChatMember(chatId, userId, params);
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
   * Report a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat to report.
   * @param reason The reason of the report.
   */
  async reportChat(chatId: ID, reason: ReportReason, params?: ReportChatParams): Promise<void> {
    return await this.#chatManager.reportChat(chatId, reason, params);
  }

  /**
   * Set a chat's available reactions. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param availableReactions The new available reactions.
   */
  async setAvailableReactions(chatId: ID, availableReactions: AvailableReactions) {
    await this.#chatManager.setAvailableReactions(chatId, availableReactions);
  }

  /**
   * Set the number of boosts required to circumvent a chat's default restrictions. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param boosts The number of boosts required to circumvent its restrictions.
   */
  async setBoostsRequiredToCircumventRestrictions(chatId: ID, boosts: number) {
    await this.#chatManager.setBoostsRequiredToCircumventRestrictions(chatId, boosts);
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
   * Set the rights of a chat member.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  async setChatMemberRights(chatId: ID, memberId: ID, params?: SetChatMemberRightsParams) {
    await this.#chatManager.setChatMemberRights(chatId, memberId, params);
  }

  /**
   * Change the tag of a chat member.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param userId The identifier of the user that is a member of the chat.
   */
  async setChatMemberTag(chatId: ID, userId: ID, params?: SetChatMemberTagParams): Promise<void> {
    await this.#chatManager.setChatMemberTag(chatId, userId, params);
  }

  /**
   * Set a chat's photo.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param photo A photo to set as the chat's photo.
   */
  async setChatPhoto(chatId: ID, photo: FileSource, params?: SetChatPhotoParams) {
    await this.#chatManager.setChatPhoto(chatId, photo, params);
  }

  /**
   * Set a chat's sticker set.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a supergroup.
   * @param setName The name of the set.
   */
  async setChatStickerSet(chatId: ID, setName: string) {
    await this.#messageManager.setChatStickerSet(chatId, setName);
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
   * Set the default send as chat of a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param sendAs The new default send as chat.
   */
  async setDefaultSendAs(chatId: ID, sendAs: ID): Promise<void> {
    await this.#chatManager.setDefaultSendAs(chatId, sendAs);
  }

  /**
   * Set a channel's discussion chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a channel.
   * @param discussionChatId The identifier of a chat to use as discussion for the channel.
   */
  async setDiscussionChat(chatId: ID, discussionChatId: ID): Promise<void> {
    await this.#chatManager.setDiscussionChat(chatId, discussionChatId);
  }

  /**
   * Set the time to live of the messages of a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param messageTtl The time to live of the messages in seconds.
   */
  async setMessageTtl(chatId: ID, messageTtl: number): Promise<void> {
    await this.#chatListManager.setMessageTtl(chatId, messageTtl);
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
   * Show the general forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async showGeneralTopic(chatId: ID): Promise<void> {
    await this.#forumManager.showGeneralTopic(chatId);
  }

  /**
   * Show the member list of a group to non-admins. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   */
  async showMemberList(chatId: ID): Promise<void> {
    await this.#chatManager.showMemberList(chatId);
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
   * Unarchive a single chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async unarchiveChat(chatId: ID): Promise<void> {
    await this.#chatListManager.unarchiveChat(chatId);
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
   * Unban a member from a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  async unbanChatMember(chatId: ID, memberId: ID) {
    await this.#chatManager.unbanChatMember(chatId, memberId);
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
   * Answer a callback query. Bot-only.
   *
   * @method cq
   * @param id ID of the callback query to answer.
   */
  async answerCallbackQuery(id: string, params?: AnswerCallbackQueryParams) {
    await this.#callbackQueryManager.answerCallbackQuery(id, params);
  }

  /**
   * Send a callback query. User-only.
   *
   * @method cq
   * @param botId The identifier of the bot to send the callback query to.
   * @param messageId The identifier of the message that includes a button responsible for the callback query question.
   * @param question The callback query's question.
   * @returns The bot's answer to the callback query.
   * @cache
   */
  async sendCallbackQuery(botId: ID, messageId: number, question: CallbackQueryQuestion): Promise<CallbackQueryAnswer> {
    return await this.#callbackQueryManager.sendCallbackQuery(botId, messageId, question);
  }

  //
  // ========================= INLINE QUERIES ========================= //
  //

  /**
   * Answer an inline query. Bot-only.
   *
   * @method iq
   * @param id The identifier of the inline query to answer.
   * @param results The results to answer with.
   */
  async answerInlineQuery(id: string, results: InlineQueryResult[], params?: AnswerInlineQueryParams) {
    await this.#inlineQueryManager.answerInlineQuery(id, results, params);
  }

  /**
   * Send an inline query. User-only.
   *
   * @method iq
   * @param botId The identifier of a bot to send the inline query to.
   * @param chatId The identifier of the chat from which the inline query is sent.
   * @returns The bot's answer to the inline query.
   * @cache
   */
  async sendInlineQuery(botId: ID, chatId: ID, params?: SendInlineQueryParams): Promise<InlineQueryAnswer> {
    return await this.#inlineQueryManager.sendInlineQuery(botId, chatId, params);
  }

  //
  // ========================= BOTS ========================= //
  //

  /**
   * Get the bot's commands in the given scope and/or language. Bot-only.
   *
   * @method bo
   * @returns The current bot's commands in the specified language.
   */
  async getMyCommands(params?: GetMyCommandsParams): Promise<BotCommand[]> {
    return await this.#botInfoManager.getMyCommands(params);
  }

  /**
   * Get the bot's description in the given language. Bot-only.
   *
   * @method bo
   * @returns The current bot's description in the specified language.
   */
  async getMyDescription(params?: { languageCode?: string }): Promise<string> {
    return await this.#botInfoManager.getMyDescription(params);
  }

  /**
   * Get the bot's name in the given language. Bot-only.
   *
   * @method bo
   * @returns The current bot's name in the specified language.
   */
  async getMyName(params?: { languageCode?: string }): Promise<string> {
    return await this.#botInfoManager.getMyName(params);
  }

  /**
   * Get the bot's short description in the given language. Bot-only.
   *
   * @method bo
   * @returns The current bot's short description in the specified language.
   */
  async getMyShortDescription(params?: { languageCode?: string }): Promise<string> {
    return await this.#botInfoManager.getMyShortDescription(params);
  }

  /**
   * Set the bot's commands in the given scope and/or language. Bot-only.
   *
   * @method bo
   * @param commands The commands to set.
   */
  async setMyCommands(commands: BotCommand[], params?: SetMyCommandsParams) {
    await this.#botInfoManager.setMyCommands(commands, params);
  }

  /**
   * Set the bot's description in the given language. Bot-only.
   *
   * @method bo
   */
  async setMyDescription(params?: { description?: string; languageCode?: string }) {
    await this.#botInfoManager.setMyDescription(params);
  }

  /**
   * Set the bot's name in the given language. Bot-only.
   *
   * @method bo
   */
  async setMyName(params?: { name?: string; languageCode?: string }) {
    await this.#botInfoManager.setMyName(params);
  }

  /**
   * Set the bot's short description in the given language. Bot-only.
   *
   * @method bo
   */
  async setMyShortDescription(params?: { shortDescription?: string; languageCode?: string }) {
    await this.#botInfoManager.setMyShortDescription(params);
  }

  //
  // ========================= REACTIONS ========================= //
  //

  /**
   * Make a reaction to a message.
   *
   * @method re
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message to add the reaction to.
   * @param reaction The reaction to add.
   */
  async addReaction(chatId: ID, messageId: number, reaction: Reaction, params?: AddReactionParams) {
    await this.#messageManager.addReaction(chatId, messageId, reaction, params);
  }

  /**
   * Clear recent reactions. User-only.
   *
   * @method re
   */
  async clearRecentReactions(): Promise<void> {
    return await this.#messageManager.clearRecentReactions();
  }

  /**
   * Undo a reaction made to a message.
   *
   * @method re
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message which the reaction was made to.
   * @param reaction The reaction to remove.
   */
  async removeReaction(chatId: ID, messageId: number, reaction: Reaction) {
    await this.#messageManager.removeReaction(chatId, messageId, reaction);
  }

  /**
   * Undo a reaction by another user.
   *
   * @method re
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message which the reaction was made to.
   * @param userId The identifier of the user who made the reaction.
   */
  async removeUserReaction(chatId: ID, messageId: number, userId: ID): Promise<void> {
    return await this.#messageManager.removeUserReaction(chatId, messageId, userId);
  }

  /**
   * Undo recent reactions to messages made by another user.
   *
   * @method re
   * @param chatId The identifier of the chat which the messages belong to.
   * @param userId The identifier of the user who made the reactions.
   */
  async removeUserReactions(chatId: ID, userId: ID): Promise<void> {
    return await this.#messageManager.removeUserReactions(chatId, userId);
  }

  /**
   * Change reactions made to a message.
   *
   * @method re
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message to add the reaction to.
   * @param reactions The new reactions.
   */
  async setReactions(chatId: ID, messageId: number, reactions: Reaction[], params?: SetReactionsParams) {
    await this.#messageManager.setReactions(chatId, messageId, reactions, params);
  }

  //
  // ========================= STORIES ========================= //
  //

  /**
   * Add multiple stories to highlights. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyIds The identifiers of the stories to add to highlights.
   */
  async addStoriesToHighlights(chatId: ID, storyIds: number[]) {
    await this.#storyManager.addStoriesToHighlights(chatId, storyIds);
  }

  /**
   * Add a single story to highlights. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyId The identifier of the story to add to highlights.
   */
  async addStoryToHighlights(chatId: ID, storyId: number) {
    await this.#storyManager.addStoryToHighlights(chatId, storyId);
  }

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
   * Delete multiple stories. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyIds The identifiers of the stories to delete.
   */
  async deleteStories(chatId: ID, storyIds: number[]) {
    await this.#storyManager.deleteStories(chatId, storyIds);
  }

  /**
   * Delete a single story. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyId The identifier of the story to delete.
   */
  async deleteStory(chatId: ID, storyId: number) {
    await this.#storyManager.deleteStory(chatId, storyId);
  }

  /**
   * Retrieve multiple stories. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyIds The identifiers of the stories to retrieve.
   * @returns The retrieved stories.
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
   * @param chatId The identifier of a chat.
   * @param storyId The identifier of the story to retrieve.
   * @returns The retrieved story.
   */
  async getStory(chatId: ID, storyId: number): Promise<Story | null> {
    return await this.#storyManager.getStory(chatId, storyId);
  }

  /**
   * Remove multiple stories from highlights. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyIds The identifiers of the stories to remove from highlights.
   */
  async removeStoriesFromHighlights(chatId: ID, storyIds: number[]) {
    await this.#storyManager.removeStoriesFromHighlights(chatId, storyIds);
  }

  /**
   * Remove a single story from highlights. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyId The identifier of the story to remove from highlights.
   */
  async removeStoryFromHighlights(chatId: ID, storyId: number) {
    await this.#storyManager.removeStoryFromHighlights(chatId, storyId);
  }

  /**
   * Report multiple stories. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat that posted the stories.
   * @param storyIds The identifiers of the stories to report.
   */
  async reportStories(chatId: ID, storyIds: number[], params?: ReportStoryParams): Promise<StoryReportResult> {
    return await this.#storyManager.reportStories(chatId, storyIds, params);
  }

  /**
   * Report a single story. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat that posted the story.
   * @param storyId The identifier of the story to report.
   */
  async reportStory(chatId: ID, storyId: number, params?: ReportStoryParams): Promise<StoryReportResult> {
    return await this.#storyManager.reportStory(chatId, storyId, params);
  }

  //
  // ========================= STORY ALBUMS ========================= //
  //

  /**
   * Add multiple stories to an album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including the album.
   * @param albumId The identifier of an album.
   * @param storyIds The identifiers of the stories to add.
   */
  async addStoriesToAlbum(chatId: ID, albumId: number, storyIds: number[]): Promise<StoryAlbum> {
    return await this.#storyAlbumManager.addStoriesToAlbum(chatId, albumId, storyIds);
  }

  /**
   * Add a single story to an album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including the album.
   * @param albumId The identifier of an album.
   * @param storyId The identifier of the story to add.
   */
  async addStoryToAlbum(chatId: ID, albumId: number, storyId: number): Promise<StoryAlbum> {
    return await this.#storyAlbumManager.addStoryToAlbum(chatId, albumId, storyId);
  }

  /**
   * Create a story album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat to create the album in.
   * @param name The name of the album.
   * @param storyIds The initial stories inside the album.
   */
  async createStoryAlbum(chatId: ID, name: string, storyIds: number[]): Promise<StoryAlbum> {
    return await this.#storyAlbumManager.createStoryAlbum(chatId, name, storyIds);
  }

  /**
   * Get stories inside an album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including albums.
   * @param albumId The identifier of an album.
   */
  async getStoriesInAlbum(chatId: ID, albumId: number): Promise<AlbumStoryList> {
    return await this.#storyAlbumManager.getStoriesInAlbum(chatId, albumId);
  }

  /**
   * Get story albums in a chat. User-only.
   *
   * @method sa
   * @param chatId The identifier of a chat including albums.
   */
  async getStoryAlbums(chatId: ID): Promise<StoryAlbum[]> {
    return await this.#storyAlbumManager.getStoryAlbums(chatId);
  }

  /**
   * Remove multiple stories from an album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including the album.
   * @param albumId The identifier of an album.
   * @param storyIds The identifiers of the stories to remove.
   */
  async removeStoriesFromAlbum(chatId: ID, albumId: number, storyIds: number[]): Promise<StoryAlbum> {
    return await this.#storyAlbumManager.removeStoriesFromAlbum(chatId, albumId, storyIds);
  }

  /**
   * Remove a single story from an album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including the album.
   * @param albumId The identifier of an album.
   * @param storyId The identifier of the story to remove.
   */
  async removeStoryFromAlbum(chatId: ID, albumId: number, storyId: number): Promise<StoryAlbum> {
    return await this.#storyAlbumManager.removeStoryFromAlbum(chatId, albumId, storyId);
  }

  /**
   * Reorder stories in an album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including the album.
   * @param albumId The identifier of an album.
   * @param storyIds The new order of stories.
   */
  async reorderStoriesInAlbum(chatId: ID, albumId: number, storyIds: number[]): Promise<StoryAlbum> {
    return await this.#storyAlbumManager.reorderStoriesInAlbum(chatId, albumId, storyIds);
  }

  /**
   * Set the name of a story album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including the album.
   * @param albumId The identifier of the album to rename.
   * @param name The new name of the album.
   */
  async setStoryAlbumName(chatId: ID, albumId: number, name: string): Promise<StoryAlbum> {
    return await this.#storyAlbumManager.setStoryAlbumName(chatId, albumId, name);
  }

  //
  // ========================= NETWORK STATISTICS ========================= //
  //

  /**
   * Get network statistics. This might not always be available.
   *
   * @method ns
   */
  async getNetworkStatistics(): Promise<NetworkStatistics> {
    return await this.#networkStatisticsManager.getNetworkStatistics();
  }

  //
  // ========================= VIDEO CHATS ========================= //
  //

  /**
   * Download a live stream segment. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   * @param channelId Stream channel ID.
   * @param scale Stream channel scale.
   * @param timestamp Millisecond timestamp of the chunk to download.
   */
  async downloadLiveStreamSegment(id: string, channelId: number, scale: number, timestamp: number, params?: DownloadLiveStreamSegmentParams): Promise<Uint8Array> {
    return await this.#videoChatManager.downloadLiveStreamSegment(id, channelId, scale, timestamp, params);
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
   * Get a video chat. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   * @cache
   */
  async getVideoChat(id: string): Promise<VideoChat> {
    return await this.#videoChatManager.getVideoChat(id);
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
   * Schedule a video chat. User-only.
   *
   * @method vc
   * @param chatId The identifier of a chat to schedule the video chat in.
   * @param startAt A point in time in the future when the video chat will be started.
   * @returns The scheduled video chat.
   */
  async scheduleVideoChat(chatId: ID, startAt: number, params?: ScheduleVideoChatParams): Promise<VideoChatScheduled> {
    return await this.#videoChatManager.scheduleVideoChat(chatId, startAt, params);
  }

  /**
   * Start a video chat. User-only.
   *
   * @method vc
   * @param chatId The identifier of a chat to start the video chat in.
   * @returns The started video chat.
   */
  async startVideoChat(chatId: ID, params?: StartVideoChatParams): Promise<VideoChatActive> {
    return await this.#videoChatManager.startVideoChat(chatId, params);
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
   * Get the star balance of a chat.
   *
   * @method pa
   * @param chatId The identifier of the chat to get the star balance for.
   */
  async getStarBalance(chatId: ID): Promise<StarAmount> {
    return await this.#paymentManager.getStarBalance(chatId);
  }

  /**
   * Get star transactions.
   *
   * @method pa
   * @param chatId The identifier of the chat to get star transactions for.
   */
  async getStarTransactions(chatId: ID, params?: GetStarTransactionsParams): Promise<StarTransactionList> {
    return await this.#paymentManager.getStarTransactions(chatId, params);
  }

  /**
   * Get the TON balance of a chat.
   *
   * @method pa
   * @param chatId The identifier of the chat to get the TON balance for.
   */
  async getTonBalance(chatId: ID): Promise<number> {
    return await this.#paymentManager.getTonBalance(chatId);
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
   * Add a contact. User-only.
   *
   * @method co
   * @param userId The identifier of the user to add as contact.
   * @param firstName The contact's first name.
   */
  async addContact(userId: ID, firstName: string, params?: AddContactParams): Promise<void> {
    await this.#contactManager.addContact(userId, firstName, params);
  }

  /**
   * Delete a single contact. User-only.
   *
   * @method co
   * @param userId The identifier of the contact to delete.
   */
  async deleteContact(userId: ID): Promise<void> {
    await this.#contactManager.deleteContact(userId);
  }

  /**
   * Delete multiple contacts. User-only.
   *
   * @method co
   * @param userIds The identifiers of contacts to delete.
   */
  async deleteContacts(userIds: ID[]): Promise<void> {
    await this.#contactManager.deleteContacts(userIds);
  }

  /**
   * Get contacts. User-only.
   *
   * @method co
   */
  async getContacts(): Promise<User[]> {
    return await this.#contactManager.getContacts();
  }

  /**
   * Set a contact note. User-only.
   *
   * @method co
   * @param userId The identifier of the user to update the note for.
   */
  async setContactNote(userId: ID, params?: SetContactNoteParams) {
    await this.#contactManager.setContactNote(userId, params);
  }

  //
  // ========================= TRANSLATIONS ========================= //
  //

  /**
   * Get translations. User-only.
   *
   * @method ta
   * @cache
   */
  async getTranslations(params?: GetTranslationsParams): Promise<Translation[]> {
    return await this.#translationsManager.getTranslations(params);
  }

  //
  // ========================= GIFTS ========================= //
  //

  /**
   * Craft gifts.
   *
   * @method gf
   * @param gifts The gifts to craft.
   */
  async craftGifts(gifts: InputGift[]): Promise<void> {
    await this.#giftManager.craftGifts(gifts);
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
   * Get a gift using its slug.
   *
   * @method gf
   * @param slug The slug of a gift.
   */
  async getGift(slug: string): Promise<Gift> {
    return await this.#giftManager.getGift(slug);
  }

  /**
   * Get available gifts.
   *
   * @method gf
   */
  async getGifts(): Promise<Gift[]> {
    return await this.#giftManager.getGifts();
  }

  /**
   * Gift a Telegram Premium subscription. Bot-only.
   *
   * @method gf
   * @param userId The identifier of a user to gift the Telegram Premium subscription to.
   * @param duration The duration of the subscription.
   */
  async giftPremiumSubscription(userId: ID, duration: PremiumSubscriptionDuration, params?: GiftPremiumSubscriptionParams): Promise<void> {
    return await this.#giftManager.giftPremiumSubscription(userId, duration, params);
  }

  /**
   * Sell a gift.
   *
   * @method gf
   * @param gift The gift to sell.
   */
  async sellGift(gift: InputGift): Promise<void> {
    await this.#giftManager.sellGift(gift);
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
   * Transfer a gift. User-only.
   *
   * @method gf
   * @param chatId The identifier of a chat to transfer the gift to.
   * @param gift The gift to transfer.
   */
  async transferGift(chatId: ID, gift: InputGift): Promise<void> {
    return await this.#giftManager.transferGift(chatId, gift);
  }

  //
  // ========================= GIFT COLLECTIONS ========================= //
  //

  /**
   * Add gifts to a gift collection. User-only.
   *
   * @method gc
   * @param chatId The identifier of the chat that includes the gift collection.
   * @param collectionId The identifier of a gift collection.
   * @param gifts The gifts to add to the collection.
   */
  async addGiftsToCollection(chatId: ID, collectionId: number, gifts: InputGift[]): Promise<GiftCollection> {
    return await this.#giftCollectionManager.addGiftsToCollection(chatId, collectionId, gifts);
  }

  /**
   * Create a gift collection. User-only.
   *
   * @method gc
   * @param chatId The identifier of a chat to create the gift collection in.
   * @param name The name of the collection.
   * @param gifts The collection's initial gifts.
   */
  async createGiftCollection(chatId: ID, name: string, gifts: InputGift[]): Promise<GiftCollection> {
    return await this.#giftCollectionManager.createGiftCollection(chatId, name, gifts);
  }

  /**
   * Delete a gift collection. User-only.
   *
   * @method gc
   * @param chatId The identifier of the chat that includes the gift collection.
   * @param collectionId The identifier of a gift collection.
   */
  async deleteGiftCollection(chatId: ID, collectionId: number): Promise<void> {
    return await this.#giftCollectionManager.deleteGiftCollection(chatId, collectionId);
  }

  /**
   * Get gift collections of a chat. User-only.
   *
   * @method gc
   * @param chatId The identifier of a chat to get gift collections for.
   */
  async getGiftCollections(chatId: ID): Promise<GiftCollection[]> {
    return await this.#giftCollectionManager.getGiftCollections(chatId);
  }

  /**
   * Remove gifts from a gift collection. User-only.
   *
   * @method gc
   * @param chatId The identifier of the chat that includes the gift collection.
   * @param collectionId The identifier of a gift collection.
   * @param gifts The gifts to remove from the collection.
   */
  async removeGiftsFromCollection(chatId: ID, collectionId: number, gifts: InputGift[]): Promise<GiftCollection> {
    return await this.#giftCollectionManager.removeGiftsFromCollection(chatId, collectionId, gifts);
  }

  /**
   * Reorder gift collections. User-only.
   *
   * @method gc
   * @param chatId The identifier of the chat that includes the gift collection.
   * @param collectionIds The identifiers of the gift collections.
   */
  async reorderGiftCollections(chatId: ID, collectionIds: number[]): Promise<void> {
    return await this.#giftCollectionManager.reorderGiftCollections(chatId, collectionIds);
  }

  /**
   * Reorder gifts in a gift collection. User-only.
   *
   * @method gc
   * @param chatId The identifier of the chat that includes the gift collection.
   * @param collectionId The identifier of a gift collection.
   * @param gifts The new order of gifts.
   */
  async reorderGiftsInCollection(chatId: ID, collectionId: number, gifts: InputGift[]): Promise<GiftCollection> {
    return await this.#giftCollectionManager.reorderGiftsInCollection(chatId, collectionId, gifts);
  }

  /**
   * Set the name of a gift collection. User-only.
   *
   * @method gc
   * @param chatId The identifier of the chat that includes the gift collection.
   * @param collectionId The identifier of a gift collection.
   * @param name The gift collection's new name.
   */
  async setGiftCollectionName(chatId: ID, collectionId: number, name: string): Promise<GiftCollection> {
    return await this.#giftCollectionManager.setGiftCollectionName(chatId, collectionId, name);
  }

  //
  // ========================= TAKEOUTS ========================= //
  //

  /**
   * End a takeout session. User-only.
   *
   * @method to
   * @param takeoutId The identifier of a takeout session.
   */
  async endTakeoutSession(takeoutId: string, params?: EndTakeoutSessionParams): Promise<void> {
    await this.#takeoutManager.endTakeoutSession(takeoutId, params);
  }

  /**
   * Get left channels. User-only.
   *
   * @method to
   * @param takeoutId The identifier of a takeout session.
   */
  async getLeftChannels(takeoutId: string, params?: GetLeftChannelsParams): Promise<LeftChannelList> {
    return await this.#takeoutManager.getLeftChannels(takeoutId, params);
  }

  /**
   * Start a takeout session. User-only.
   *
   * @method to
   * @returns The identifier of the takeout session.
   */
  async startTakeoutSession(params?: StartTakeoutSessionParams): Promise<string> {
    return await this.#takeoutManager.startTakeoutSession(params);
  }

  //
  // ========================= STICKER SETS ========================= //
  //

  /**
   * Add a sticker to a sticker set.
   *
   * @method ss
   * @param slug The slug of the sticker set or its link.
   * @param sticker The sticker to add.
   */
  async addStickerToStickerSet(slug: string, sticker: InputSticker, params?: AddStickerToStickerSetParams): Promise<void> {
    return await this.#stickerSetManager.addStickerToStickerSet(slug, sticker, params);
  }

  /**
   * Change the position of a sticker in its set.
   *
   * @method ss
   * @param fileId The identifier of the sticker.
   * @param position The new position of the sticker.
   */
  async changeStickerPositionInStickerSet(fileId: string, position: number): Promise<void> {
    return await this.#stickerSetManager.changeStickerPositionInStickerSet(fileId, position);
  }

  /**
   * Check the availability of a sticker set slug.
   *
   * @method ss
   * @param slug The slug of the sticker set or its link.
   * @returns Whether the slug is available.
   */
  async checkStickerSetSlug(slug: string): Promise<boolean> {
    return await this.#stickerSetManager.checkStickerSetSlug(slug);
  }

  /**
   * Create a sticker set.
   *
   * @method ss
   * @param name The sticker set's name.
   * @param slug The sticker set's slug.
   * @param stickers The initial stickers of the set.
   */
  async createStickerSet(name: string, slug: string, stickers: InputSticker[], params?: CreateStickerSetParams): Promise<StickerSet> {
    return await this.#stickerSetManager.createStickerSet(name, slug, stickers, params);
  }

  /**
   * Delete a sticker set.
   *
   * @method ss
   * @param slug The slug of the sticker set or its link.
   */
  async deleteStickerSet(slug: string): Promise<void> {
    return await this.#stickerSetManager.deleteStickerSet(slug);
  }

  /**
   * Get a dice sticker set.
   *
   * @method ss
   * @param emoji The emoji of the dice.
   */
  async getDiceStickerSet(emoji: string): Promise<StickerSet> {
    return await this.#stickerSetManager.getDiceStickerSet(emoji);
  }

  /**
   * Get a sticker set.
   *
   * @method ss
   * @param slug The slug of the sticker set or its link.
   */
  async getStickerSet(slug: string): Promise<StickerSet> {
    return await this.#stickerSetManager.getStickerSet(slug);
  }

  /**
   * Remove a sticker from its set.
   *
   * @method ss
   * @param fileId The identifier of the sticker.
   */
  async removeStickerFromStickerSet(fileId: string): Promise<void> {
    return await this.#stickerSetManager.removeStickerFromStickerSet(fileId);
  }

  /**
   * Replace a sticker's emoji.
   *
   * @method ss
   * @param fileId The identifier of the sticker.
   * @param emoji The new emoji to use for the sticker.
   */
  async replaceStickerEmoji(fileId: string, emoji: string): Promise<void> {
    return await this.#stickerSetManager.replaceStickerEmoji(fileId, emoji);
  }

  /**
   * Replace a sticker in a sticker set.
   *
   * @method ss
   * @param currentStickerFileId The identifier of the current sticker.
   * @param newSticker The new sticker to use.
   */
  async replaceStickerInStickerSet(currentStickerFileId: string, newSticker: InputSticker, params?: ReplaceStickerInStickerSetParams): Promise<void> {
    return await this.#stickerSetManager.replaceStickerInStickerSet(currentStickerFileId, newSticker, params);
  }

  /**
   * Set a custom emoji as a sticker set's thumbnail.
   *
   * @method ss
   * @param slug The slug of the sticker set or its link.
   * @param customEmojiId The identifier of the custom emoji to use as thumbnail.
   */
  async setCustomEmojiAsStickerSetThumbnail(slug: string, customEmojiId: string): Promise<void> {
    return await this.#stickerSetManager.setCustomEmojiAsStickerSetThumbnail(slug, customEmojiId);
  }

  /**
   * Set a sticker set's thumbnail.
   *
   * @method ss
   * @param slug The slug of the sticker set or its link.
   * @param thumbnail The new thumbnail of the sticker set.
   */
  async setStickerSetThumbnail(slug: string, thumbnail: FileSource): Promise<void> {
    return await this.#stickerSetManager.setStickerSetThumbnail(slug, thumbnail);
  }

  /**
   * Set the title of a sticker set.
   *
   * @method ss
   * @param slug The slug of the sticker set or its link.
   * @param title The sticker set's new title.
   */
  async setStickerSetTitle(slug: string, title: string): Promise<void> {
    return await this.#stickerSetManager.setStickerSetTitle(slug, title);
  }

  /**
   * Suggest a sticker set slug from its title.
   *
   * @method ss
   * @param title A title of a sticker set.
   * @returns The suggested slug.
   */
  async suggestStickerSetSlug(title: string): Promise<string> {
    return await this.#stickerSetManager.suggestStickerSetSlug(title);
  }

  //
  // ========================= MANAGED BOTS ========================= //
  //

  /**
   * Set the access settings of a managed bot. Bot-only.
   *
   * @method mb
   * @param userId The identifier of the bot user.
   */
  async getManagedBotAccessSettings(userId: ID): Promise<BotAccessSettings> {
    return await this.#managedBotManager.getManagedBotAccessSettings(userId);
  }

  /**
   * Get the token of a managed bot. Bot-only.
   *
   * @method mb
   * @param userId The identifier of the bot user.
   * @returns The managed bot's token.
   */
  async getManagedBotToken(userId: ID): Promise<string> {
    return await this.#managedBotManager.getManagedBotToken(userId);
  }

  /**
   * Revoke the token of a managed bot. Bot-only.
   *
   * @method mb
   * @param userId The identifier of the bot user.
   * @returns The managed bot's new token.
   */
  async revokeManagedBotToken(userId: ID): Promise<string> {
    return await this.#managedBotManager.revokeManagedBotToken(userId);
  }

  /**
   * Set the access settings of a managed bot. Bot-only.
   *
   * @method mb
   * @param userId The identifier of the bot user.
   * @param isAccessRestricted Whether access is restricted to specific users.
   */
  async setManagedBotAccessSettings(userId: ID, isAccessRestricted: boolean, params?: SetManagedBotAccessSettingsParams): Promise<void> {
    return await this.#managedBotManager.setManagedBotAccessSettings(userId, isAccessRestricted, params);
  }

  //
  // ========================= GUEST QUERIES ========================= //
  //

  /**
   * Answer a guest query. Bot-only.
   *
   * @method gq
   * @param id The identifier of the guest query to answer.
   * @returns The identifier of the sent message.
   */
  async answerGuestQuery(id: string, result: InlineQueryResult): Promise<string> {
    return await this.#messageManager.answerGuestQuery(id, result);
  }

  //
  // ========================= SECRET CHATS ========================= //
  //

  /**
   * Accept a secret chat. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   */
  async acceptSecretChat(id: number): Promise<SecretChat> {
    return await this.#secretChatManager.acceptSecretChat(id);
  }

  /**
   * End a secret chat. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   */
  async endSecretChat(id: number, params?: EndSecretChatParams): Promise<SecretChat> {
    return await this.#secretChatManager.endSecretChat(id, params);
  }

  /**
   * Request a secret chat. User-only.
   *
   * @method sc
   * @param chatId The identifier of a chat.
   */
  async requestSecretChat(chatId: ID): Promise<SecretChat> {
    return await this.#secretChatManager.requestSecretChat(chatId);
  }

  /**
   * Send an animation to a secret chat. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   * @param animation The animation to send.
   */
  async sendSecretAnimation(id: number, animation: FileSource, params?: SendSecretAnimationParams): Promise<void> {
    return await this.#secretChatManager.sendSecretAnimation(id, animation, params);
  }

  /**
   * Send an audio file to a secret chat. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   * @param audio The audio file to send.
   */
  async sendSecretAudio(id: number, audio: FileSource, params?: SendSecretAudioParams): Promise<void> {
    return await this.#secretChatManager.sendSecretAudio(id, audio, params);
  }

  /**
   * Send a cancel typing action to a secret chat. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   */
  async sendSecretCancelTypingAction(id: number): Promise<void> {
    return await this.#secretChatManager.sendSecretTypingAction(id);
  }

  /**
   * Send a contact to a secret chat. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   * @param firstName The contact's first name.
   * @param phoneNumber The contact's phone number.
   */
  async sendSecretContact(id: number, firstName: string, phoneNumber: string, params?: SendSecretContactParams): Promise<void> {
    return await this.#secretChatManager.sendSecretContact(id, firstName, phoneNumber, params);
  }

  /**
   * Send a document to a secret chat. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   * @param document The document to send.
   */
  async sendSecretDocument(id: number, document: FileSource, params?: SendSecretDocumentParams): Promise<void> {
    return await this.#secretChatManager.sendSecretDocument(id, document, params);
  }

  /**
   * Send a location to a secret chat. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   * @param latitude The location's latitude.
   * @param longitude The location's longitude.
   */
  async sendSecretLocation(id: number, latitude: number, longitude: number, params?: SendSecretLocationParams): Promise<void> {
    return await this.#secretChatManager.sendSecretLocation(id, latitude, longitude, params);
  }

  /**
   * Send a message to a secret chat. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   * @param text The message's text.
   */
  async sendSecretMessage(id: number, text: string, params?: SendSecretMessageParams): Promise<void> {
    return await this.#secretChatManager.sendSecretMessage(id, text, params);
  }

  /**
   * Send a photo to a secret chat. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   * @param photo The photo to send.
   */
  async sendSecretPhoto(id: number, photo: FileSource, params?: SendSecretPhotoParams): Promise<void> {
    return await this.#secretChatManager.sendSecretPhoto(id, photo, params);
  }

  /**
   * Send a secret chat screenshot notification. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   * @param messageIds Identifiers of messages.
   */
  async sendSecretScreenshotNotification(id: number, messageIds: string[]): Promise<void> {
    return await this.#secretChatManager.sendSecretScreenshotNotification(id, messageIds);
  }

  /**
   * Send a sticker to a secret chat. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   * @param sticker The sticker to send.
   */
  async sendSecretSticker(id: number, sticker: Sticker, params?: SendSecretStickerParams): Promise<void> {
    return await this.#secretChatManager.sendSecretSticker(id, sticker, params);
  }

  /**
   * Send a typing action to a secret chat. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   */
  async sendSecretTypingAction(id: number): Promise<void> {
    return await this.#secretChatManager.sendSecretCancelTypingAction(id);
  }

  /**
   * Send a venue to a secret chat. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   * @param latitude The latitude of the venue.
   * @param longitude The longitude of the venue.
   * @param title The title of the venue.
   * @param address The written address of the venue.
   */
  async sendSecretVenue(id: number, latitude: number, longitude: number, title: string, address: string, params?: SendSecretVenueParams): Promise<void> {
    return await this.#secretChatManager.sendSecretVenue(id, latitude, longitude, title, address, params);
  }

  /**
   * Send a video to a secret chat. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   * @param video The video to send.
   */
  async sendSecretVideo(id: number, video: FileSource, params?: SendSecretVideoParams): Promise<void> {
    return await this.#secretChatManager.sendSecretVideo(id, video, params);
  }

  /**
   * Send a video note to a secret chat. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   * @param videoNote The video note to send.
   */
  async sendSecretVideoNote(id: number, videoNote: FileSource, params?: SendSecretVideoNoteParams): Promise<void> {
    return await this.#secretChatManager.sendSecretVideoNote(id, videoNote, params);
  }

  /**
   * Send a voice message to a secret chat. User-only.
   *
   * @method sc
   * @param id The identifier of the secret chat.
   * @param voice The voice message to send.
   */
  async sendSecretVoice(id: number, voice: FileSource, params?: SendSecretVoiceParams): Promise<void> {
    return await this.#secretChatManager.sendSecretVoice(id, voice, params);
  }
}
