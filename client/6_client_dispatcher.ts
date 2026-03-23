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

import { getLogger, type Logger } from "../1_utilities.ts";
import type { Api, Mtproto } from "../2_tl.ts";
import type { DC } from "../3_transport.ts";
import type { AppSupport, AvailableReactions, Birthday, BlockedUserList, BotCommand, BotTokenCheckResult, BusinessConnection, CallbackQueryAnswer, CallbackQueryQuestion, Chat, ChatActionType, ChatListItem, ChatMember, ChatP, ChatPChannel, ChatPGroup, ChatPPrivate, ChatPSupergroup, ChatSettings, ClaimedGifts, CodeCheckResult, Country, FailedInvitation, FileSource, Gift, GiftCollection, ID, InactiveChat, InlineQueryAnswer, InlineQueryResult, InputChecklistItem, InputEmojiStatus, InputGift, InputMedia, InputPollOption, InputStoryContent, InviteLink, JoinRequest, LeftChannelList, LinkPreview, LiveStreamChannel, Message, MessageAnimation, MessageAudio, MessageChecklist, MessageContact, MessageDice, MessageDocument, MessageInvoice, MessageList, MessageLocation, MessagePhoto, MessagePoll, MessageReactionList, MessageSticker, MessageText, MessageVenue, MessageVideo, MessageVideoNote, MessageVoice, MiniAppInfo, NetworkStatistics, ParseMode, PasswordCheckResult, Poll, PriceTag, Reaction, SavedChats, SlowModeDuration, Sticker, StickerSet, Story, StoryAlbum, Timezone, Topic, Translation, Update, User, VideoChat, VideoChatActive, VideoChatScheduled, VoiceTranscription } from "../3_types.ts";
import { DOWNLOAD_MAX_CHUNK_SIZE } from "../4_constants.ts";
import type { AlbumStoryList } from "../types/4_album_story_list.ts";
import type { AddBotToAttachmentsMenuParams, AddChatMemberParams, AddContactParams, AddReactionParams, AnswerCallbackQueryParams, AnswerInlineQueryParams, AnswerPreCheckoutQueryParams, ApproveJoinRequestsParams, BanChatMemberParams, CheckUsernameParams, CreateChannelParams, CreateGroupParams, CreateInviteLinkParams, CreateStoryParams, CreateSupergroupParams, CreateTopicParams, DeclineJoinRequestsParams, DeleteMessageParams, DeleteMessagesParams, DownloadLiveStreamSegmentParams, DownloadParams, EditInlineMessageCaptionParams, EditInlineMessageMediaParams, EditInlineMessageTextParams, EditMessageCaptionParams, EditMessageLiveLocationParams, EditMessageMediaParams, EditMessageReplyMarkupParams, EditMessageTextParams, EditTopicParams, EnableSignaturesParams, EndTakeoutSessionParams, ForwardMessagesParams, GetBlockedUsersParams, GetChatMembersParams, GetChatsParams, GetClaimedGiftsParams, GetCommonChatsParams, GetCreatedInviteLinksParams, GetHistoryParams, GetJoinRequestsParams, GetLeftChannelsParams, GetLinkPreviewParams, GetMessageReactionsParams, GetMyCommandsParams, GetSavedChatsParams, GetSavedMessagesParams, GetTranslationsParams, InvokeParams, JoinVideoChatParams, OpenChatParams, OpenMiniAppParams, PinMessageParams, PromoteChatMemberParams, ResolveUsernameParams, ScheduleVideoChatParams, SearchMessagesParams, SendAnimationParams, SendAudioParams, SendChecklistParams, SendContactParams, SendDiceParams, SendDocumentParams, SendGiftParams, SendInlineQueryParams, SendInvoiceParams, SendLocationParams, SendMediaGroupParams, SendMessageDraftParams, SendMessageParams, SendPhotoParams, SendPollParams, SendStickerParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetBirthdayParams, SetChatMemberRightsParams, SetChatMemberTagParams, SetChatPhotoParams, SetContactNoteParams, SetEmojiStatusParams, SetLocationParams, SetMyCommandsParams, SetNameColorParams, SetPersonalChannelParams, SetProfileColorParams, SetReactionsParams, SetWorkingHoursParams, SignInParams, StartBotParams, StartTakeoutSessionParams, StartVideoChatParams, StopPollParams, UnpinMessageParams, UnpinMessagesParams, UpdateChecklistParams, UpdateProfileParams } from "./0_params.ts";
import { deserializeWorkerError, type WorkerError } from "./0_worker_error.ts";
import type { WorkerRequest } from "./0_worker_request.ts";
import type { ClientGeneric } from "./1_client_generic.ts";
import { type InvokeErrorHandler, skipInvoke } from "./1_invoke_middleware.ts";
import type { WorkerResponse } from "./1_worker_response.ts";
import { signIn } from "./2_sign_in.ts";
import type { Context } from "./4_context.ts";
import { Composer } from "./5_composer.ts";

export interface ClientDispatcherParams {
  /** The storage provider to use. Defaults to memory storage. */
  storage?: "memory" | "indexeddb" | "denokv";
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
  /**
   * The first DC to connect to. This is commonly used to decide whether to connect to test or production servers. It is not necessarily the DC that the client will directly connect to or is currently connected to. Defaults to the default initial DC.
   */
  initialDc?: DC;
}

export class ClientDispatcher<C extends Context = Context> extends Composer<C> implements ClientGeneric {
  #worker: Worker | MessagePort;
  #id: string;
  #L: Logger;
  #LsignIn: Logger;

  // deno-lint-ignore no-explicit-any
  #pendingRequests = new Map<string, PromiseWithResolvers<any>>();

  constructor(worker: Worker | MessagePort, id: string) {
    super();

    this.#worker = worker;
    this.#id = id;
    this.#L = getLogger("ClientDispatcher").branch(this.#id);
    this.#LsignIn = this.#L.branch("signIn");
  }

  /** @internal */
  async handleResponse(response: WorkerResponse) {
    if (response.clientId !== this.#id) {
      return;
    }

    this.#L.debug("handling response message", response);

    if (response.isError) {
      this.#pendingRequests.get(response.id)?.reject(deserializeWorkerError(response.data));
      this.#pendingRequests.delete(response.id);
    } else {
      if (response.id === "") {
        try {
          await this.handleUpdate(this, response.data as Update);
        } catch (err) {
          this.#L.error("Error handling update:", err);
        }
      } else {
        this.#pendingRequests.get(response.id)?.resolve(response.data);
        this.#pendingRequests.delete(response.id);
      }
    }
  }

  get id(): string {
    return this.#id;
  }

  async #dispatch(method: string, ...args: unknown[]) {
    // deno-lint-ignore no-explicit-any
    const promiseWithResolvers = Promise.withResolvers<any>();

    const id = crypto.randomUUID();
    this.#pendingRequests.set(id, promiseWithResolvers);

    const request: WorkerRequest = {
      type: "request",
      clientId: this.#id,
      id,
      method,
      args,
    };
    this.#L.debug("posted message to worker", request);
    this.#worker.postMessage(request);

    return await promiseWithResolvers.promise;
  }

  #isInited = false;
  async init(params?: ClientDispatcherParams): Promise<void> {
    if (this.#isInited) {
      return;
    }
    this.#isInited = true;

    return await this.#dispatch("initClient", params);
  }

  async connect(): Promise<void> {
    return await this.#dispatch("connect");
  }

  async disconnect(): Promise<void> {
    return await this.#dispatch("disconnect");
  }

  async start(params?: SignInParams) {
    await this.connect();
    await this.signIn(params);
  }

  async #invoke<T extends Api.AnyFunction | Mtproto.ping, R = T extends Mtproto.ping ? Mtproto.pong : T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T, params?: InvokeParams): Promise<R> {
    let n = 1;
    while (true) {
      try {
        return await this.#dispatch("invoke", function_, params);
      } catch (err) {
        if (await this.#handleInvokeError(Object.freeze({ client: this, error: err, function: function_, n: n++ }), () => Promise.resolve(false))) {
          continue;
        } else {
          throw err;
        }
      }
    }
  }

  #handleInvokeError = skipInvoke<ClientDispatcher<C>>();

  /** @internal */
  async handleInvokeError(request: WorkerRequest): Promise<boolean> {
    const args = request.args[0] as { error: WorkerError; function: Api.AnyFunction | Mtproto.ping; n: number };
    return await this.#handleInvokeError({
      client: this,
      error: deserializeWorkerError(args.error),
      function: args.function,
      n: args.n,
    }, () => Promise.resolve(false));
  }

  /**
   * Invokes a function waiting and returning its reply.
   * Requires the client to be connected.
   *
   * @param function_ The function to invoke.
   */
  invoke: {
    <T extends Api.AnyFunction | Mtproto.ping, R = T extends Mtproto.ping ? Mtproto.pong : T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T, params?: InvokeParams): Promise<R>;
    use: (handler: InvokeErrorHandler<ClientDispatcher<C>>) => void;
  } = Object.assign(
    this.#invoke,
    {
      use: (handler: InvokeErrorHandler<ClientDispatcher<C>>) => {
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

  /**
   * Send a user verification code.
   *
   * @param phoneNumber The phone number to send the code to.
   * @method ac
   */
  async sendCode(phoneNumber: string): Promise<void> {
    return await this.#dispatch("sendCode", phoneNumber);
  }

  /**
   * Check if a code entered by the user was the same as the verification code.
   *
   * @param code A code entered by the user.
   * @method ac
   */
  async checkCode(code: string): Promise<CodeCheckResult> {
    return await this.#dispatch("checkCode", code);
  }

  /**
   * Get the user account password's hint.
   *
   * @method ac
   */
  async getPasswordHint(): Promise<string | null> {
    return await this.#dispatch("getPasswordHint");
  }

  /**
   * Check whether a password entered by the user is the same as the account's one.
   *
   * @param password The password to check
   * @returns The result of the check.
   * @method ac
   */
  async checkPassword(password: string): Promise<PasswordCheckResult> {
    return await this.#dispatch("checkPassword", password);
  }

  /**
   * Check whether a bot token is valid.
   *
   * @param password The password to check
   * @returns The result of the check.
   * @method ac
   */
  async checkBotToken(botToken: string): Promise<BotTokenCheckResult> {
    return await this.#dispatch("checkBotToken", botToken);
  }

  /**
   * Signs in using the provided parameters if not already signed in.
   * If no parameters are provided, the credentials will be prompted in runtime.
   *
   * Notes:
   * 1. Requires the `apiId` and `apiHash` paramters to be passed when constructing the client.
   * 3. Reconnects the client to the appropriate DC in case of MIGRATE_X errors.
   */
  async signIn(params?: SignInParams): Promise<void> {
    await signIn(this, this.#LsignIn, params);
  }

  async signOut(): Promise<void> {
    return await this.#dispatch("signOut");
  }

  async exportAuthString(): Promise<string> {
    return await this.#dispatch("exportAuthString");
  }

  async importAuthString(authString: string): Promise<void> {
    return await this.#dispatch("importAuthString", authString);
  }

  /**
   * Get a chat's inputPeer. Useful when calling API functions directly.
   *
   * @param id The identifier of a chat.
   */
  async getInputPeer(id: ID): Promise<Api.InputPeer> {
    return await this.#dispatch("getInputPeer", id);
  }

  /**
   * Get a channel or a supergroup's inputChannel. Useful when calling API functions directly.
   *
   * @param id The identifier of the channel or the supergroup.
   */
  async getInputChannel(id: ID): Promise<Api.inputChannel | Api.inputChannelFromMessage> {
    return await this.#dispatch("getInputChannel", id);
  }

  /**
   * Get a user's inputUser. Useful when calling API functions directly.
   *
   * @param id The identifier of the user.
   */
  async getInputUser(id: ID): Promise<Api.inputUserSelf | Api.inputUser | Api.inputUserFromMessage> {
    return await this.#dispatch("getInputUser", id);
  }

  //
  // ========================= ACCOUNT ========================= //
  //

  /**
   * Get information on the currently authorized user.
   *
   * @method ac
   * @returns Information on the currently authorized user.
   */
  async getMe(): Promise<User> {
    return await this.#dispatch("getMe");
  }

  /**
   * Show a username in the current account, a bot account, a supergroup, or a channel's profile. User-only.
   *
   * @method ac
   * @param id `"me"`, a bot ID, a supergroup ID, or a channel ID.
   * @param username The username to show.
   */
  async showUsername(id: ID, username: string): Promise<void> {
    return await this.#dispatch("showUsername", id, username);
  }

  /**
   * Hide a username from the current account, a bot account, a supergroup, or a channel's profile. User-only.
   *
   * @method ac
   * @param id `"me"`, a bot ID, a supergroup ID, or a channel ID.
   * @param username The username to hide.
   */
  async hideUsername(id: ID, username: string): Promise<void> {
    return await this.#dispatch("hideUsername", id, username);
  }

  /**
   * Check the availability of a username. User-only.
   *
   * @method ac
   * @param username The username to check.
   * @returns Whether the username is available.
   */
  async checkUsername(username: string, params?: CheckUsernameParams): Promise<boolean> {
    return await this.#dispatch("checkUsername", username, params);
  }

  /**
   * Set the username of the current account. User-only.
   *
   * @method ac
   * @param username The username to set.
   */
  async setUsername(username: string): Promise<void> {
    return await this.#dispatch("setUsername", username);
  }

  /**
   * Remove the current account's username. User-only.
   *
   * @method ac
   */
  async removeUsername(): Promise<void> {
    return await this.#dispatch("removeUsername");
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
    return await this.#dispatch("reorderUsernames", id, order);
  }

  /**
   * Hide all usernames from a supergroup or a channel's profile. User-only.
   *
   * @method ac
   * @param id A supergroup ID or a channel ID.
   * @returns Whether any username was hidden.
   */
  async hideUsernames(id: ID): Promise<boolean> {
    return await this.#dispatch("hideUsernames", id);
  }

  /**
   * Get a business connection. Bot-only.
   *
   * @method ac
   * @param id The identifier of the business connection.
   * @cache
   */
  async getBusinessConnection(id: string): Promise<BusinessConnection> {
    return await this.#dispatch("getBusinessConnection", id);
  }

  /**
   * Set the current account's online status. User-only.
   *
   * @method ac
   * @param isOnline The new online status.
   */
  async setIsOnline(isOnline: boolean): Promise<void> {
    return await this.#dispatch("setOnline", isOnline);
  }

  /**
   * Set the current account's emoji status. User-only.
   *
   * @method ac
   * @param emojiStatus The emoji or gift to set as the new emoji status.
   */
  async setEmojiStatus(emojiStatus: InputEmojiStatus, params?: SetEmojiStatusParams): Promise<void> {
    return await this.#dispatch("setEmojiStatus", emojiStatus, params);
  }

  /**
   * Remove the current account's emoji status. User-only.
   *
   * @method ac
   */
  async removeEmojiStatus(): Promise<void> {
    return await this.#dispatch("removeEmojiStatus");
  }

  /**
   * Set the emoji status of a channel. User-only.
   *
   * @method ac
   * @param chatId The identifier of a channel.
   * @param emojiStatus The emoji or gift to set as the new emoji status.
   */
  async setChannelEmojiStatus(chatId: ID, emojiStatus: InputEmojiStatus, params?: SetEmojiStatusParams): Promise<void> {
    return await this.#dispatch("setChannelEmojiStatus", chatId, emojiStatus, params);
  }

  /**
   * Remove the emoji status of a channel. User-only.
   *
   * @method ac
   * @param chatId The identifier of a channel.
   */
  async removeChannelEmojiStatus(chatId: ID): Promise<void> {
    return await this.#dispatch("removeChannelEmojiStatus", chatId);
  }

  /**
   * Set the emoji status of a bot's user. Bot-only.
   *
   * @method ac
   * @param userId The identifier of a user of the bot.
   * @param emojiStatus The emoji or gift to set as the new emoji status.
   */
  async setUserEmojiStatus(userId: ID, emojiStatus: InputEmojiStatus, params?: SetEmojiStatusParams): Promise<void> {
    return await this.#dispatch("setUserEmojiStatus", userId, emojiStatus, params);
  }

  /**
   * Remove the emoji status of a bot's user. Bot-only.
   *
   * @method ac
   * @param userId The identifier of a user of the bot.
   */
  async removeUserEmojiStatus(userId: ID): Promise<void> {
    return await this.#dispatch("removeUserEmojiStatus", userId);
  }

  /**
   * Update the profile of the current user. At least one parameter must be specified. User-only.
   *
   * @method ac
   */
  async updateProfile(params?: UpdateProfileParams): Promise<void> {
    return await this.#dispatch("updateProfile", params);
  }

  /**
   * Set the birthday of the current user. User-only.
   *
   * @method ac
   */
  async setBirthday(params?: SetBirthdayParams): Promise<void> {
    return await this.#dispatch("setBirthday", params);
  }

  /**
   * Set the personal channel of the current user. User-only.
   *
   * @method ac
   */
  async setPersonalChannel(params?: SetPersonalChannelParams): Promise<void> {
    return await this.#dispatch("setPersonalChannel", params);
  }

  /**
   * Set the name color of the current user. User-only.
   *
   * @method ac
   * @param color The identifier of the color to set.
   */
  async setNameColor(color: number, params?: SetNameColorParams): Promise<void> {
    return await this.#dispatch("setNameColor", color, params);
  }

  /**
   * Set the profile color of the current user. User-only.
   *
   * @method ac
   * @param color The identifier of the color to set.
   */
  async setProfileColor(color: number, params?: SetProfileColorParams): Promise<void> {
    return await this.#dispatch("setProfileColor", color, params);
  }

  /**
   * Set the location of the current user. User-only.
   *
   * @method ac
   */
  async setLocation(params?: SetLocationParams): Promise<void> {
    return await this.#dispatch("setLocation", params);
  }

  /**
   * Set the working hours of the current user. User-only.
   *
   * @method ac
   */
  async setWorkingHours(params?: SetWorkingHoursParams): Promise<void> {
    return await this.#dispatch("setWorkingHours", params);
  }

  /**
   * Enable sponsored messages on the current user. User-only.
   *
   * @method ac
   */
  async enableSponsoredMessages(): Promise<void> {
    return await this.#dispatch("enableSponsoredMessages");
  }

  /**
   * Disable sponsored messages on the current user. User-only.
   *
   * @method ac
   */
  async disableSponsoredMessages(): Promise<void> {
    return await this.#dispatch("disableSponsoredMessages");
  }

  /**
   * Pause the business bot in a chat. User-only.
   *
   * @method ac
   * @param chatId The identifier of a chat.
   */
  async pauseBusinessBotConnection(chatId: ID): Promise<void> {
    return await this.#dispatch("pauseBusinessBotConnection", chatId);
  }

  /**
   * Resume the business bot in a chat. User-only.
   *
   * @method ac
   * @param chatId The identifier of a chat.
   */
  async resumeBusinessBotConnection(chatId: ID): Promise<void> {
    return await this.#dispatch("resumeBusinessBotConnection", chatId);
  }

  /**
   * Resolve a username.
   *
   * @method ac
   * @param username The username to resolve.
   */
  async resolveUsername(username: string, params?: ResolveUsernameParams): Promise<ChatP> {
    return await this.#dispatch("resolveUsername", username, params);
  }

  /**
   * Resolve a phone number. User-only.
   *
   * @method ac
   * @param username The phone number to resolve.
   */
  async resolvePhoneNumber(phoneNumber: string): Promise<User> {
    return await this.#dispatch("resolvePhoneNumber", phoneNumber);
  }

  /**
   * Set the list of close friends. User-only.
   *
   * @method ac
   * @param userIds The identifiers of users to set as close friends.
   */
  async setCloseFriends(userIds: ID[]): Promise<void> {
    return await this.#dispatch("setCloseFriends", userIds);
  }

  /**
   * Suggest a birthday. User-only.
   *
   * @method ac
   * @param userId The identifier of the user to suggest a birthday for.
   * @param birthday The birthday to suggest.
   */
  async suggestBirthday(userId: ID, birthday: Birthday): Promise<void> {
    return await this.#dispatch("suggestBirthday", userId, birthday);
  }

  /**
   * Block a user. User-only.
   *
   * @method ac
   * @param userId The identifier of the user to block.
   */
  async blockUser(userId: ID): Promise<void> {
    return await this.#dispatch("blockUser", userId);
  }

  /**
   * Unblock a user. User-only.
   *
   * @method ac
   * @param userId The identifier of the user to unblock.
   */
  async unblockUser(userId: ID): Promise<void> {
    return await this.#dispatch("unblockUser", userId);
  }

  /**
   * Get blocked users. User-only.
   *
   * @method ac
   */
  async getBlockedUsers(params?: GetBlockedUsersParams): Promise<BlockedUserList> {
    return await this.#dispatch("getBlockedUsers", params);
  }

  /**
   * Add a bot to the attachments menu. User-only.
   *
   * @method ac
   * @param botId The identifier of the bot to add to the attachments menu.
   */
  async addBotToAttachmentsMenu(botId: ID, params?: AddBotToAttachmentsMenuParams): Promise<void> {
    return await this.#dispatch("addBotToAttachmentsMenu", botId, params);
  }

  /**
   * Remove a bot from the attachments menu. User-only.
   *
   * @method ac
   * @param botId The identifier of the bot to remove from the attachments menu.
   */
  async removeBotFromAttachmentsMenu(botId: ID): Promise<void> {
    return await this.#dispatch("removeBotFromAttachmentsMenu", botId);
  }

  /**
   * Get app support. User-only.
   *
   * @method ac
   */
  async getAppSupport(): Promise<AppSupport> {
    return await this.#dispatch("getAppSupport");
  }

  /**
   * Get app support name. User-only.
   *
   * @method ac
   */
  async getAppSupportName(): Promise<string> {
    return await this.#dispatch("getAppSupportName");
  }

  /**
   * Get owned bots. User-only.
   *
   * @method ac
   */
  async getOwnedBots(): Promise<User[]> {
    return await this.#dispatch("getOwnedBots");
  }

  /**
   * Get timezones. User-only.
   *
   * @method ac
   */
  async getTimezones(): Promise<Timezone[]> {
    return await this.#dispatch("getTimezones");
  }

  /**
   * Get countries. User-only.
   *
   * @method ac
   */
  async getCountries(languageCode: string): Promise<Country[]> {
    return await this.#dispatch("getCountries", languageCode);
  }

  //
  // ========================= MESSAGES ========================= //
  //

  /**
   * Send a text message.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the message to.
   * @param text The message's text.
   * @returns The sent text message.
   */
  async sendMessage(chatId: ID, text: string, params?: SendMessageParams): Promise<MessageText> {
    return await this.#dispatch("sendMessage", chatId, text, params);
  }

  /**
   * Stream a drafted text message. Bot-only.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the message to.
   * @param draftId The identifier of the draft.
   * @param text The message's text.
   */
  async sendMessageDraft(chatId: ID, draftId: number, text: string, params?: SendMessageDraftParams): Promise<void> {
    return await this.#dispatch("sendMessageDraft", chatId, draftId, text, params);
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
    return await this.#dispatch("sendPhoto", chatId, photo, params);
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
    return await this.#dispatch("sendDocument", chatId, document, params);
  }

  /**
   * Send a sticker.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the sticker to.
   * @param document The sticker to send.
   * @returns The sent sticker.
   */
  async sendSticker(chatId: ID, sticker: FileSource, params?: SendStickerParams): Promise<MessageSticker> {
    return await this.#dispatch("sendSticker", chatId, sticker, params);
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
    return await this.#dispatch("sendVideo", chatId, video, params);
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
    return await this.#dispatch("sendAnimation", chatId, animation, params);
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
    return await this.#dispatch("sendVoice", chatId, voice, params);
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
    return await this.#dispatch("sendAudio", chatId, audio, params);
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
    return await this.#dispatch("sendMediaGroup", chatId, media, params);
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
    return await this.#dispatch("sendVideoNote", chatId, videoNote, params);
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
    return await this.#dispatch("sendLocation", chatId, latitude, longitude, params);
  }

  /**
   * Send a contact.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the contact to.
   * @param firstName The contact's first name.
   * @param number The contact's phone number.
   * @returns The sent contact.
   */
  async sendContact(chatId: ID, firstName: string, number: string, params?: SendContactParams): Promise<MessageContact> {
    return await this.#dispatch("sendContact", chatId, firstName, number, params);
  }

  /**
   * Send a dice.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the dice to.
   * @returns The sent dice.
   */
  async sendDice(chatId: ID, params?: SendDiceParams): Promise<MessageDice> {
    return await this.#dispatch("sendDice", chatId, params);
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
    return await this.#dispatch("sendVenue", chatId, latitude, longitude, title, address, params);
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
    return await this.#dispatch("sendPoll", chatId, question, options, params);
  }

  /**
   * Send a checklist. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the checklist to.
   * @param title The checklist's title.
   * @param items The checklist's items.
   * @returns The sent checklist.
   */
  async sendChecklist(chatId: ID, title: string, items: InputChecklistItem[], params?: SendChecklistParams): Promise<MessageChecklist> {
    return await this.#dispatch("sendChecklist", chatId, title, items, params);
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
    return await this.#dispatch("sendInvoice", chatId, title, description, payload, currency, prices, params);
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
    return await this.#dispatch("editMessageText", chatId, messageId, text, params);
  }

  /**
   * Edit a message's caption.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message.
   * @param text The new caption of the message.
   * @returns The edited message.
   */
  async editMessageCaption(chatId: ID, messageId: number, params?: EditMessageCaptionParams): Promise<Message> {
    return await this.#dispatch("editMessageCaption", chatId, messageId, params);
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
    return await this.#dispatch("editMessageMedia", chatId, messageId, media, params);
  }

  /**
   * Edit an inline message's media.
   *
   * @method ms
   * @param inlineMessageId The identifier of the inline message.
   * @param media The new media of the message.
   */
  async editInlineMessageMedia(inlineMessageId: string, media: InputMedia, params?: EditInlineMessageMediaParams): Promise<void> {
    return await this.#dispatch("editInlineMessageMedia", inlineMessageId, media, params);
  }

  /**
   * Edit an inline message's text. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The identifier of the inline message.
   * @param text The new text of the message.
   */
  async editInlineMessageText(inlineMessageId: string, text: string, params?: EditInlineMessageTextParams): Promise<void> {
    return await this.#dispatch("editInlineMessageText", inlineMessageId, text, params);
  }

  /**
   * Edit an inline message's caption. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The identifier of the inline message.
   */
  async editInlineMessageCaption(inlineMessageId: string, params?: EditInlineMessageCaptionParams): Promise<void> {
    return await this.#dispatch("editInlineMessageCaption", inlineMessageId, params);
  }

  /**
   * Edit a message's reply markup.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message.
   * @returns The edited message.
   */
  async editMessageReplyMarkup(chatId: ID, messageId: number, params?: EditMessageReplyMarkupParams): Promise<Message> {
    return await this.#dispatch("editMessageReplyMarkup", chatId, messageId, params);
  }

  /**
   * Edit an inline message's reply markup. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The identifier of the inline message.
   */
  async editInlineMessageReplyMarkup(inlineMessageId: string, params?: EditMessageReplyMarkupParams): Promise<void> {
    return await this.#dispatch("editInlineMessageReplyMarkup", inlineMessageId, params);
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
  async editMessageLiveLocation(chatId: ID, messageId: number, latitude: number, longitude: number, params?: EditMessageLiveLocationParams): Promise<MessageLocation> {
    return await this.#dispatch("editMessageLiveLocation", chatId, messageId, latitude, longitude, params);
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
  async editInlineMessageLiveLocation(inlineMessageId: string, latitude: number, longitude: number, params?: EditMessageLiveLocationParams): Promise<void> {
    return await this.#dispatch("editInlineMessageLiveLocation", inlineMessageId, latitude, longitude, params);
  }

  /**
   * Retrieve multiple messages.
   *
   * @method ms
   * @param chatId The identifier of a chat to retrieve the messages from.
   * @param messageIds The identifiers of the messages to retrieve.
   * @example ```ts
   * const message = await client.getMessages("@MTKruto", [210, 212]): Promise<void>;
   * ```
   * @returns The retrieved messages.
   * @cache
   */
  async getMessages(chatId: ID, messageIds: number[]): Promise<Message[]> {
    return await this.#dispatch("getMessages", chatId, messageIds);
  }

  /**
   * Retrieve a single message.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the message to retrieve.
   * @example ```ts
   * const message = await client.getMessage("@MTKruto", 212): Promise<void>;
   * ```
   * @returns The retrieved message.
   * @cache
   */
  async getMessage(chatId: ID, messageId: number): Promise<Message | null> {
    return await this.#dispatch("getMessage", chatId, messageId);
  }

  /**
   * Retrieve a message using its link.
   *
   * @method ms
   * @param link A message link.
   * @example ```ts
   * const message = await client.resolveMessageLink("https://t.me/MTKruto/212"): Promise<void>;
   * ```
   * @returns The message that was linked to.
   */
  async resolveMessageLink(link: string): Promise<Message | null> {
    return await this.#dispatch("resolveMessageLink", link);
  }

  /**
   * Delete multiple messages.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageIds The identifiers of the messages to delete.
   */
  async deleteMessages(chatId: ID, messageIds: number[], params?: DeleteMessagesParams): Promise<void> {
    return await this.#dispatch("deleteMessages", chatId, messageIds, params);
  }

  /**
   * Delete a single message.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message to delete.
   */
  async deleteMessage(chatId: ID, messageId: number, params?: DeleteMessageParams): Promise<void> {
    return await this.#dispatch("deleteMessage", chatId, messageId, params);
  }

  /**
   * Delete all messages sent by a specific member of a chat. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  async deleteChatMemberMessages(chatId: ID, memberId: ID): Promise<void> {
    return await this.#dispatch("deleteChatMemberMessages", chatId, memberId);
  }

  /**
   * Delete multiple scheduled messages.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageIds The identifiers of the scheduled messages to delete.
   */
  async deleteScheduledMessages(chatId: ID, messageIds: number[]): Promise<void> {
    return await this.#dispatch("deleteScheduledMessages", chatId, messageIds);
  }

  /**
   * Delete a scheduled message.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the scheduled message to delete.
   */
  async deleteScheduledMessage(chatId: ID, messageId: number): Promise<void> {
    return await this.#dispatch("deleteScheduledMessage", chatId, messageId);
  }

  /**
   * Send multiple scheduled messages before their schedule.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageIds The identifiers of the scheduled messages to send.
   */
  async sendScheduledMessages(chatId: ID, messageIds: number[]): Promise<Message[]> {
    return await this.#dispatch("sendScheduledMessages", chatId, messageIds);
  }

  /**
   * Send a scheduled message before its schedule.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the scheduled message to send.
   */
  async sendScheduledMessage(chatId: ID, messageId: number): Promise<Message> {
    return await this.#dispatch("sendScheduledMessage", chatId, messageId);
  }

  /**
   * Pin a message in a chat.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the message.
   */
  async pinMessage(chatId: ID, messageId: number, params?: PinMessageParams): Promise<void> {
    return await this.#dispatch("pinMessage", chatId, messageId, params);
  }

  /**
   * Unpin a pinned message.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the message.
   */
  async unpinMessage(chatId: ID, messageId: number, params?: UnpinMessageParams): Promise<void> {
    return await this.#dispatch("unpinMessage", chatId, messageId, params);
  }

  /**
   * Unpin all pinned messages.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   */
  async unpinMessages(chatId: ID, params?: UnpinMessagesParams): Promise<void> {
    return await this.#dispatch("unpinMessages", chatId, params);
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
    return await this.#dispatch("forwardMessages", from, to, messageIds, params);
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
    return await this.#dispatch("forwardMessage", from, to, messageId, params);
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
    return await this.#dispatch("stopPoll", chatId, messageId, params);
  }

  /**
   * Send a chat action.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the chat action to.
   * @param action The chat action.
   * @param messageThreadId The thread to send the chat action to.
   */
  async sendChatAction(chatId: ID, action: ChatActionType, params?: { messageThreadId?: number }): Promise<void> {
    return await this.#dispatch("sendChatAction", chatId, action, params);
  }

  /**
   * Search for messages. User-only.
   *
   * @method ms
   */
  async searchMessages(params?: SearchMessagesParams): Promise<MessageList> {
    return await this.#dispatch("searchMessages", params);
  }

  /**
   * Mark messages as read. User-only.
   *
   * @method ms
   * @param chatId The identifier of the chat which the messages belong to.
   * @param untilMessageId The identifier of the message that will be marked as read, along with any other unread messages before it.
   */
  async readMessages(chatId: ID, untilMessageId: number): Promise<void> {
    return await this.#dispatch("readMessages", chatId, untilMessageId);
  }

  /**
   * Start a bot. User-only.
   *
   * @method ms
   * @param botId The identifier of the bot to start.
   * @returns The start message.
   */
  async startBot(botId: number, params?: StartBotParams): Promise<Message> {
    return await this.#dispatch("startBot", botId, params);
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
    return await this.#dispatch("transcribeVoice", chatId, messageId);
  }

  /**
   * Get a sticker set.
   *
   * @method ms
   * @param name The name of the sticker set or its link.
   */
  async getStickerSet(name: string): Promise<StickerSet> {
    return await this.#dispatch("getStickerSet", name);
  }

  /*
   * Get the link preview for a message that is about to be sent. User-only.
   *
   * @method ms
   * @param text The message's text.
   */
  async getLinkPreview(text: string, params?: GetLinkPreviewParams): Promise<LinkPreview | null> {
    return await this.#dispatch("getLinkPreview", text, params);
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
    return await this.#dispatch("openMiniApp", botId, chatId, params);
  }

  /**
   * Get a progress ID that can be passed to relevant send* methods to receive upload progress updates for them.
   *
   * @method ms
   * @cache
   */
  async getProgressId(): Promise<string> {
    return await this.#dispatch("getProgressId");
  }

  /**
   * Get messages saved from a specific chat.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   */
  async getSavedMessages(chatId: ID, params?: GetSavedMessagesParams): Promise<Message[]> {
    return await this.#dispatch("getSavedMessages", chatId, params);
  }

  /**
   * Get a list of saved chats.
   *
   * @method ms
   */
  async getSavedChats(params?: GetSavedChatsParams): Promise<SavedChats> {
    return await this.#dispatch("getSavedChats", params);
  }

  /**
   * Get a list of reactions made to a message. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the message.
   */
  async getMessageReactions(chatId: ID, messageId: number, params?: GetMessageReactionsParams): Promise<MessageReactionList> {
    return await this.#dispatch("getMessageReactions", chatId, messageId, params);
  }

  /**
   * Set a reaction as default. User-only.
   *
   * @mehod ms
   * @param reaction The reaction to set as default.
   */
  async setDefaultReaction(reaction: Reaction): Promise<void> {
    return await this.#dispatch("setDefaultReaction", reaction);
  }

  /**
   * Clear all message drafts. User-only.
   *
   * @mehod ms
   */
  async clearDrafts(): Promise<void> {
    return await this.#dispatch("clearAllDrafts");
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
  async vote(chatId: ID, messageId: number, optionIndexes: number[]): Promise<void> {
    return await this.#dispatch("vote", chatId, messageId, optionIndexes);
  }

  /**
   * Retract a vote. User-only.
   *
   * @method pl
   * @param chatId The identifier of the chat that includes the poll.
   * @param messageId The identifier of the message that includes the poll.
   */
  async retractVote(chatId: ID, messageId: number): Promise<void> {
    return await this.#dispatch("retractVote", chatId, messageId);
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
    return await this.#dispatch("addToChecklist", chatId, messageId, items);
  }

  /**
   * Update a checklist. User-only.
   *
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the checklist message.
   * @method cl
   */
  async updateChecklist(chatId: ID, messageId: number, params?: UpdateChecklistParams): Promise<void> {
    return await this.#dispatch("updateChecklist", chatId, messageId, params);
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
    return await this.#dispatch("checkChecklistItems", chatId, messageId, items);
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
    return await this.#dispatch("uncheckChecklistItems", chatId, messageId, items);
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
    return await this.#dispatch("checkChecklistItem", chatId, messageId, item);
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
    return await this.#dispatch("uncheckChecklistItem", chatId, messageId, item);
  }

  //
  // ========================= FILES ========================= //
  //

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
    return await this.#dispatch("downloadChunk", fileId, params);
  }

  /**
   * Download a file.
   *
   * @method fs
   * @param fileId The identifier of the file to download.
   * @example ```ts
   * for await (const chunk of client.download(fileId, { chunkSize: 256 * 1024 })) {
   *   await outFile.write(chunk): Promise<void>;
   * }
   * ```
   * @returns A generator yielding the contents of the file.
   * @cache file
   */
  async *download(fileId: string, params?: DownloadParams): AsyncGenerator<Uint8Array, void, unknown> {
    let offset = 0;
    const chunkSize = params?.chunkSize ?? DOWNLOAD_MAX_CHUNK_SIZE;

    while (true) {
      const chunk = await this.downloadChunk(fileId, { chunkSize, offset });
      yield chunk;

      if (chunk.length < chunkSize) {
        break;
      } else {
        offset += chunk.length;
      }
    }
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
    return await this.#dispatch("getCustomEmojiStickers", id);
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
    return await this.#dispatch("getChats", params);
  }

  /**
   * Get pinned chats from a chat list. User-only.
   *
   * @method ch
   * @param from The chat list to get the pinned chats from. Defaults to main.
   */
  async getPinnedChats(from?: "archived" | "main"): Promise<ChatListItem[]> {
    return await this.#dispatch("getPinnedChats", from);
  }

  /**
   * Get a chat.
   *
   * @method ch
   * @cache
   */
  async getChat(chatId: ID): Promise<Chat> {
    return await this.#dispatch("getChat", chatId);
  }

  /**
   * Get chat history. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async getHistory(chatId: ID, params?: GetHistoryParams): Promise<Message[]> {
    return await this.#dispatch("getHistory", chatId, params);
  }

  /**
   * Set a chat's available reactions. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param availableReactions The new available reactions.
   */
  async setAvailableReactions(chatId: ID, availableReactions: AvailableReactions): Promise<void> {
    return await this.#dispatch("setAvailableReactions", chatId, availableReactions);
  }

  /**
   * Set a chat's photo.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param photo A photo to set as the chat's photo.
   */
  async setChatPhoto(chatId: ID, photo: FileSource, params?: SetChatPhotoParams): Promise<void> {
    return await this.#dispatch("setChatPhoto", chatId, photo, params);
  }

  /**
   * Delete a chat's photo.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async deleteChatPhoto(chatId: ID): Promise<void> {
    return await this.#dispatch("deleteChatPhoto", chatId);
  }

  /**
   * Ban a member from a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param memberId The identifier of the member.
   */
  async banChatMember(chatId: ID, memberId: ID, params?: BanChatMemberParams): Promise<void> {
    return await this.#dispatch("banChatMember", chatId, memberId, params);
  }

  /**
   * Unban a member from a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  async unbanChatMember(chatId: ID, memberId: ID): Promise<void> {
    return await this.#dispatch("unbanChatMember", chatId, memberId);
  }

  /**
   * Kick a member from a chat. Same as a banChatMember call followed by unbanChatMember.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  async kickChatMember(chatId: ID, memberId: ID): Promise<void> {
    return await this.#dispatch("kickChatMember", chatId, memberId);
  }

  /**
   * Set the rights of a chat member.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  async setChatMemberRights(chatId: ID, memberId: ID, params?: SetChatMemberRightsParams): Promise<void> {
    return await this.#dispatch("setChatMemberRights", chatId, memberId, params);
  }

  /**
   * Get the administrators of a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @returns The chat's administrators.
   */
  async getChatAdministrators(chatId: ID): Promise<ChatMember[]> {
    return await this.#dispatch("getChatAdministrators", chatId);
  }

  /**
   * Enable join requests in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a channel or a supergroup.
   */
  async enableJoinRequests(chatId: ID): Promise<void> {
    return await this.#dispatch("enableJoinRequests", chatId);
  }

  /**
   * Disable join requests in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a channel or a supergroup.
   */
  async disableJoinRequests(chatId: ID): Promise<void> {
    return await this.#dispatch("disableJoinRequests", chatId);
  }

  /**
   * Get inactive chats. User-only.
   *
   * @method ch
   * @retuns A list of inactive chats the current user is member of.
   */
  async getInactiveChats(): Promise<InactiveChat[]> {
    return await this.#dispatch("getInactiveChats");
  }

  /**
   * Get the invite links created for a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @returns The invite links created for the chat. This might be a subset of the results if they were less than `limit`. The parameters `afterDate` and `afterInviteLink` can be used for pagination.
   */
  async getCreatedInviteLinks(chatId: ID, params?: GetCreatedInviteLinksParams): Promise<InviteLink[]> {
    return await this.#dispatch("getCreatedInviteLinks", chatId, params);
  }

  /**
   * Join a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async joinChat(chatId: ID): Promise<void> {
    return await this.#dispatch("joinChat", chatId);
  }

  /**
   * Leave a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async leaveChat(chatId: ID): Promise<void> {
    return await this.#dispatch("leaveChat", chatId);
  }

  /**
   * Get information on a user's chat membership.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param userId The identifier of the user.
   */
  async getChatMember(chatId: ID, userId: ID): Promise<ChatMember> {
    return await this.#dispatch("getChatMember", chatId, userId);
  }

  /**
   * Get the members of a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async getChatMembers(chatId: ID, params?: GetChatMembersParams): Promise<ChatMember[]> {
    return await this.#dispatch("getChatMembers", chatId, params);
  }

  /**
   * Set a chat's sticker set.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a supergroup.
   * @param setName The name of the set.
   */
  async setChatStickerSet(chatId: ID, setName: string): Promise<void> {
    return await this.#dispatch("setChatStickerSet", chatId, setName);
  }

  /**
   * Delete a chat's sticker set.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a supergroup.
   */
  async deleteChatStickerSet(chatId: ID): Promise<void> {
    return await this.#dispatch("deleteChatStickerSet", chatId);
  }

  /**
   * Set the number of boosts required to circument a chat's default restrictions. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param boosts The number of boosts required to circumvent its restrictions.
   */
  async setBoostsRequiredToCircumventRestrictions(chatId: ID, boosts: number): Promise<void> {
    return await this.#dispatch("setBoostsRequiredToCircumventRestrictions", chatId, boosts);
  }

  /**
   * Create an invite link.
   *
   * @method ch
   * @param chatId The identifier of a chat to create the invite link for.
   * @returns The newly created invite link.
   */
  async createInviteLink(chatId: ID, params?: CreateInviteLinkParams): Promise<InviteLink> {
    return await this.#dispatch("createInviteLink", chatId, params);
  }

  /**
   * Approve a join request.
   *
   * @method ch
   * @param chatId The identifier of a chat with the join request.
   * @param userId The user who made the join request.
   */
  async approveJoinRequest(chatId: ID, userId: ID): Promise<void> {
    return await this.#dispatch("approveJoinRequest", chatId, userId);
  }

  /**
   * Decline a join request.
   *
   * @method ch
   * @param chatId The identifier of a chat with the join request.
   * @param userId The user who made the join request.
   */
  async declineJoinRequest(chatId: ID, userId: ID): Promise<void> {
    return await this.#dispatch("declineJoinRequest", chatId, userId);
  }

  /**
   * Approve all join requests. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat with the join requests.
   */
  async approveJoinRequests(chatId: ID, params?: ApproveJoinRequestsParams): Promise<void> {
    return await this.#dispatch("approveJoinRequests", chatId, params);
  }

  /**
   * Decline all join requests. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat with the join requests.
   */
  async declineJoinRequests(chatId: ID, params?: DeclineJoinRequestsParams): Promise<void> {
    return await this.#dispatch("declineJoinRequests", chatId, params);
  }

  /**
   * Get pending join requests in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat with the join requests.
   */
  async getJoinRequests(chatId: ID, params?: GetJoinRequestsParams): Promise<JoinRequest[]> {
    return await this.#dispatch("getJoinRequests", chatId, params);
  }

  /**
   * Add a single user to a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat to add the user to.
   * @param userId The identifier of the user to add to the chat.
   * @returns An array of FailedInvitation that has at most a length of 1. If empty, it means that the user was added.
   */
  async addChatMember(chatId: ID, userId: ID, params?: AddChatMemberParams): Promise<FailedInvitation[]> {
    return await this.#dispatch("addChatMember", chatId, userId, params);
  }

  /**
   * Add multiple users at once to a channel or a supergroup.
   *
   * @method ch
   * @param chatId The identifier of the channel or supergroup to add the users to.
   * @param userId The identifiers of the users to add to the channel or supergroup.
   * @returns An array of FailedInvitation that has at most a length that is the same as that of the parameter userIds. If empty, it means that all the provided users were added.
   */
  async addChatMembers(chatId: ID, userIds: ID[]): Promise<FailedInvitation[]> {
    return await this.#dispatch("addChatMembers", chatId, userIds);
  }

  /**
   * Open a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat to open.
   */
  async openChat(chatId: ID, params?: OpenChatParams): Promise<void> {
    return await this.#dispatch("openChat", chatId, params);
  }

  /**
   * Close a chat previously opened by openChat.
   *
   * @method ch
   * @param chatId The identifier of a chat to close.
   */
  async closeChat(chatId: ID): Promise<void> {
    return await this.#dispatch("closeChat", chatId);
  }

  /**
   * Create a group. User-only.
   *
   * @method ch
   * @param title The title of the group.
   * @returns The created group.
   */
  async createGroup(title: string, params?: CreateGroupParams): Promise<ChatPGroup> {
    return await this.#dispatch("createGroup", title, params);
  }

  /**
   * Create a supergroup. User-only.
   *
   * @method ch
   * @param title The title of the supergroup.
   * @returns The created supergroup.
   */
  async createSupergroup(title: string, params?: CreateSupergroupParams): Promise<ChatPSupergroup> {
    return await this.#dispatch("createSupergroup", title, params);
  }

  /**
   * Create a channel. User-only.
   *
   * @method ch
   * @param title The title of the channel.
   * @returns The created channel.
   */
  async createChannel(title: string, params?: CreateChannelParams): Promise<ChatPChannel> {
    return await this.#dispatch("createChannel", title, params);
  }

  /**
   * Set the time to live of the messages of a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param messageTtl The time to live of the messages in seconds.
   */
  async setMessageTtl(chatId: ID, messageTtl: number): Promise<void> {
    return await this.#dispatch("setMessageTtl", chatId, messageTtl);
  }

  /**
   * Archive multiple chats. User-only.
   *
   * @method ch
   * @param chatIds The identifiers of the chats to archive.
   */
  async archiveChats(chatIds: ID[]): Promise<void> {
    return await this.#dispatch("archiveChats", chatIds);
  }

  /**
   * Archive a single chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async archiveChat(chatId: ID): Promise<void> {
    return await this.#dispatch("archiveChat", chatId);
  }

  /**
   * Unarchive multiple chats. User-only.
   *
   * @method ch
   * @param chatIds The identifiers of the chats to unarchive.
   */
  async unarchiveChats(chatIds: ID[]): Promise<void> {
    return await this.#dispatch("unarchiveChats", chatIds);
  }

  /**
   * Unarchive a single chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async unarchiveChat(chatId: ID): Promise<void> {
    return await this.#dispatch("unarchiveChat", chatId);
  }

  /**
   * Get common chats between a user and the current one. User-only.
   *
   * @method ch
   * @param userId The identifier of the user to get the common chats with them.
   */
  async getCommonChats(userId: ID, params?: GetCommonChatsParams): Promise<ChatP[]> {
    return await this.#dispatch("getCommonChats", userId, params);
  }

  /**
   * Get the settings of a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async getChatSettings(chatId: ID): Promise<ChatSettings> {
    return await this.#dispatch("getChatSettings", chatId);
  }

  /**
   * Disable business bots in a private chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the private chat to disable business bots in.
   */
  async disableBusinessBots(chatId: ID): Promise<void> {
    return await this.#dispatch("disableBusinessBots", chatId);
  }

  /**
   * Enable business bots in a private chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the private chat to enable business bots in.
   */
  async enableBusinessBots(chatId: ID): Promise<void> {
    return await this.#dispatch("enableBusinessBots", chatId);
  }

  /**
   * Disable slow mode in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group to disable slow mode in.
   */
  async disableSlowMode(chatId: ID): Promise<void> {
    return await this.#dispatch("disableSlowMode", chatId);
  }

  /**
   * Change slow mode in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group to change slow mode in.
   * @param duration New slow mode duration.
   */
  async setSlowMode(chatId: ID, duration: SlowModeDuration): Promise<void> {
    return await this.#dispatch("setSlowMode", chatId, duration);
  }

  /**
   * Change the title of a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param title The new title.
   */
  async setChatTitle(chatId: ID, title: string): Promise<void> {
    return await this.#dispatch("setChatTitle", chatId, title);
  }

  /**
   * Change the description of a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param description The new description.
   */
  async setChatDescription(chatId: ID, description: string): Promise<void> {
    return await this.#dispatch("setChatDescription", chatId, description);
  }

  /**
   * Hide the member list of a group to non-admins. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   */
  async hideMemberList(chatId: ID): Promise<void> {
    return await this.#dispatch("hideMemberList", chatId);
  }

  /**
   * Show the member list of a group to non-admins. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   */
  async showMemberList(chatId: ID): Promise<void> {
    return await this.#dispatch("showMemberList", chatId);
  }

  /**
   * Enable topics in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   * @param isShownAsTabs Whether topics should be displayed as tabs.
   */
  async enableTopics(chatId: ID, isShownAsTabs: boolean): Promise<void> {
    return await this.#dispatch("enableTopics", chatId, isShownAsTabs);
  }

  /**
   * Disable topics in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   */
  async disableTopics(chatId: ID): Promise<void> {
    return await this.#dispatch("disableTopics", chatId);
  }

  /**
   * Enable automatic anti-spam in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   */
  async enableAntispam(chatId: ID): Promise<void> {
    return await this.#dispatch("enableAntispam", chatId);
  }

  /**
   * Disable automatic anti-spam in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   */
  async disableAntispam(chatId: ID): Promise<void> {
    return await this.#dispatch("disableAntispam", chatId);
  }

  /**
   * Enable post signatures in a channel. User-only.
   *
   * @method ch
   * @param chatId The identifier of the channel.
   */
  async enableSignatures(chatId: ID, params?: EnableSignaturesParams): Promise<void> {
    return await this.#dispatch("enableSignatures", chatId, params);
  }

  /**
   * Disable post signatures in a channel. User-only.
   *
   * @method ch
   * @param chatId The identifier of the channel.
   */
  async disableSignatures(chatId: ID): Promise<void> {
    return await this.#dispatch("disableSignatures", chatId);
  }

  /**
   * Delete a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async deleteChat(chatId: ID): Promise<void> {
    return await this.#dispatch("deleteChat", chatId);
  }

  /**
   * Get discussion chat suggestions. User-only.
   *
   * @method ch
   */
  async getDiscussionChatSuggestions(): Promise<ChatP[]> {
    return await this.#dispatch("getDiscussionChatSuggestions");
  }

  /**
   * Set a channel's discussion chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a channel.
   * @param discussionChatId The identifier of a chat to use as discussion for the channel.
   */
  async setDiscussionChat(chatId: ID, discussionChatId: ID): Promise<void> {
    return await this.#dispatch("setDiscussionChat", chatId, discussionChatId);
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
    return await this.#dispatch("transferChatOwnership", chatId, userId, password);
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
    return await this.#dispatch("createTopic", chatId, title, params);
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
    return await this.#dispatch("editTopic", chatId, topicId, title, params);
  }

  /**
   * Hide the general forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async hideGeneralTopic(chatId: ID): Promise<void> {
    return await this.#dispatch("hideGeneralTopic", chatId);
  }

  /**
   * Show the general forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async showGeneralTopic(chatId: ID): Promise<void> {
    return await this.#dispatch("showGeneralTopic", chatId);
  }

  /**
   * Close a forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param topicId The identifier of the topic.
   */
  async closeTopic(chatId: ID, topicId: number): Promise<void> {
    return await this.#dispatch("closeTopic", chatId, topicId);
  }

  /**
   * Reopen a forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param topicId The identifier of the topic.
   */
  async reopenTopic(chatId: ID, topicId: number): Promise<void> {
    return await this.#dispatch("reopenTopic", chatId, topicId);
  }

  /**
   * Pin a forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param topicId The identifier of the topic.
   */
  async pinTopic(chatId: ID, topicId: number): Promise<void> {
    return await this.#dispatch("pinTopic", chatId, topicId);
  }

  /**
   * Unpin a forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param topicId The identifier of the topic.
   */
  async unpinTopic(chatId: ID, topicId: number): Promise<void> {
    return await this.#dispatch("unpinTopic", chatId, topicId);
  }

  /**
   * Promote a chat member.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param userId The identifier of the user to promote.
   */
  async promoteChatMember(chatId: ID, userId: ID, params?: PromoteChatMemberParams): Promise<void> {
    return await this.#dispatch("promoteChatMember", chatId, userId, params);
  }

  /**
   * Change the tag of a chat member.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param userId The identifier of the user that is a member of the chat.
   */
  async setChatMemberTag(chatId: ID, userId: ID, params?: SetChatMemberTagParams): Promise<void> {
    return await this.#dispatch("setChatMemberTag", chatId, userId, params);
  }

  /**
   * Enable sharing in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async enableSharing(chatId: ID): Promise<void> {
    return await this.#dispatch("enableSharing", chatId);
  }

  /**
   * Disable sharing in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async disableSharing(chatId: ID): Promise<void> {
    return await this.#dispatch("disableSharing", chatId);
  }

  /**
   * Get recommended channels. User-only.
   *
   * @method ch
   * @returns A list of recommended channels.
   */
  async getRecommendedChannels(): Promise<ChatPChannel[]> {
    return await this.#dispatch("getRecommendedChannels");
  }

  /**
   * Get similar channels. User-only.
   *
   * @method ch
   * @param chatId The identifier of a channel to get similar channels for.
   * @returns A list of similar channels.
   */
  async getSimilarChannels(chatId: ID): Promise<ChatPChannel[]> {
    return await this.#dispatch("getSimilarChannels", chatId);
  }

  /**
   * Get similar bots. User-only.
   *
   * @method ch
   * @param chatId The identifier of a bot to get similar bots for.
   * @returns A list of similar bots.
   */
  async getSimilarBots(chatId: ID): Promise<ChatPPrivate[]> {
    return await this.#dispatch("getSimilarBots", chatId);
  }

  /**
   * Get the count of online members in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @returns The count of online members in the chat.
   */
  async getOnlineCount(chatId: ID): Promise<number> {
    return await this.#dispatch("getOnlineCount", chatId);
  }

  /**
   * Enable chat history for new members. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async enableChatHistoryForNewMembers(chatId: ID): Promise<void> {
    return await this.#dispatch("enableChatHistoryForNewMembers", chatId);
  }

  /**
   * Disable chat history for new members. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  async disableChatHistoryForNewMembers(chatId: ID): Promise<void> {
    return await this.#dispatch("disableChatHistoryForNewMembers", chatId);
  }

  /**
   * Set the default send as chat of a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param sendAs The new default send as chat.
   */
  async setDefaultSendAs(chatId: ID, sendAs: ID): Promise<void> {
    return await this.#dispatch("setDefaultSendAs", chatId, sendAs);
  }

  //
  // ========================= CALLBACK QUERIES ========================= //
  //

  /**
   * Send a callback query. User-only.
   *
   * @method cq
   * @param botId The identifier of the bot to send the callback query to.
   * @param messageId The identifier of the message that includes at a button responsible for the callback query question.
   * @param question The callback query's question.
   * @returns The bot's answer to the callback query.
   * @cache
   */
  async sendCallbackQuery(botId: ID, messageId: number, question: CallbackQueryQuestion): Promise<CallbackQueryAnswer> {
    return await this.#dispatch("sendCallbackQuery", botId, messageId, question);
  }

  /**
   * Answer a callback query. Bot-only.
   *
   * @method cq
   * @param id ID of the callback query to answer.
   */
  async answerCallbackQuery(id: string, params?: AnswerCallbackQueryParams): Promise<void> {
    return await this.#dispatch("answerCallbackQuery", id, params);
  }

  //
  // ========================= INLINE QUERIES ========================= //
  //

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
    return await this.#dispatch("sendInlineQuery", botId, chatId, params);
  }

  /**
   * Answer an inline query. Bot-only.
   *
   * @method iq
   * @param id The identifier of the inline query to answer.
   * @param results The results to answer with.
   */
  async answerInlineQuery(id: string, results: InlineQueryResult[], params?: AnswerInlineQueryParams): Promise<void> {
    return await this.#dispatch("answerInlineQuery", id, results, params);
  }

  //
  // ========================= BOTS ========================= //
  //

  /**
   * Set the bot's description in the given language. Bot-only.
   *
   * @method bo
   */
  async setMyDescription(params?: { description?: string; languageCode?: string }): Promise<void> {
    return await this.#dispatch("setMyDescription", params);
  }

  /**
   * Set the bot's name in the given language. Bot-only.
   *
   * @method bo
   */
  async setMyName(params?: { name?: string; languageCode?: string }): Promise<void> {
    return await this.#dispatch("setMyName", params);
  }

  /**
   * Set the bot's short description in the given language. Bot-only.
   *
   * @method bo
   */
  async setMyShortDescription(params?: { shortDescription?: string; languageCode?: string }): Promise<void> {
    return await this.#dispatch("setMyShortDescription", params);
  }

  /**
   * Get the bot's description in the given language. Bot-only.
   *
   * @method bo
   * @returns The current bot's description in the specified language.
   */
  async getMyDescription(params?: { languageCode?: string }): Promise<string> {
    return await this.#dispatch("getMyDescription", params);
  }

  /**
   * Get the bot's name in the given language. Bot-only.
   *
   * @method bo
   * @returns The current bot's name in the specified language.
   */
  async getMyName(params?: { languageCode?: string }): Promise<string> {
    return await this.#dispatch("getMyName", params);
  }

  /**
   * Get the bot's short description in the given language. Bot-only.
   *
   * @method bo
   * @returns The current bot's short description in the specified language.
   */
  async getMyShortDescription(params?: { languageCode?: string }): Promise<string> {
    return await this.#dispatch("getMyShortDescription", params);
  }

  /**
   * Set the bot's commands in the given scope and/or language. Bot-only.
   *
   * @method bo
   * @param commands The commands to set.
   */
  async setMyCommands(commands: BotCommand[], params?: SetMyCommandsParams): Promise<void> {
    return await this.#dispatch("setMyCommands", commands, params);
  }

  /**
   * Get the bot's commands in the given scope and/or language. Bot-only.
   *
   * @method bo
   * @returns The current bot's commands in the specified language.
   */
  async getMyCommands(params?: GetMyCommandsParams): Promise<BotCommand[]> {
    return await this.#dispatch("getMyCommands", params);
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
  async setReactions(chatId: ID, messageId: number, reactions: Reaction[], params?: SetReactionsParams): Promise<void> {
    return await this.#dispatch("setReactions", chatId, messageId, reactions, params);
  }

  /**
   * Make a reaction to a message.
   *
   * @method re
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message to add the reaction to.
   * @param reaction The reaction to add.
   */
  async addReaction(chatId: ID, messageId: number, reaction: Reaction, params?: AddReactionParams): Promise<void> {
    return await this.#dispatch("addReaction", chatId, messageId, reaction, params);
  }

  /**
   * Undo a reaction made to a message.
   *
   * @method re
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message which the reaction was made to.
   * @param reaction The reaction to remove.
   */
  async removeReaction(chatId: ID, messageId: number, reaction: Reaction): Promise<void> {
    return await this.#dispatch("removeReaction", chatId, messageId, reaction);
  }

  /**
   * Clear recent reactions. User-only.
   *
   * @method re
   */
  async clearRecentReactions(): Promise<void> {
    return await this.#dispatch("clearRecentReactions");
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
    return await this.#dispatch("createStory", chatId, content, params);
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
    return await this.#dispatch("getStories", chatId, storyIds);
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
    return await this.#dispatch("getStory", chatId, storyId);
  }

  /**
   * Delete multiple stories. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyIds The identifiers of the stories to delete.
   */
  async deleteStories(chatId: ID, storyIds: number[]): Promise<void> {
    return await this.#dispatch("deleteStories", chatId, storyIds);
  }

  /**
   * Delete a single story. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyId The identifier of the story to delete.
   */
  async deleteStory(chatId: ID, storyId: number): Promise<void> {
    return await this.#dispatch("deleteStory", chatId, storyId);
  }
  /**
   * Add multiple stories to highlights. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyIds The identifiers of the stories to add to highlights.
   */
  async addStoriesToHighlights(chatId: ID, storyIds: number[]): Promise<void> {
    return await this.#dispatch("addStoriesToHighlights", chatId, storyIds);
  }

  /**
   * Add a single story to highlights. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyId The identifier of the story to add to highlights.
   */
  async addStoryToHighlights(chatId: ID, storyId: number): Promise<void> {
    return await this.#dispatch("addStoryToHighlights", chatId, storyId);
  }

  /**
   * Remove multiple stories from highlights. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyIds The identifiers of the stories to remove from highlights.
   */
  async removeStoriesFromHighlights(chatId: ID, storyIds: number[]): Promise<void> {
    return await this.#dispatch("removeStoriesFromHighlights", chatId, storyIds);
  }

  /**
   * Remove a single story from highlights. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyId The identifier of the story to remove from highlights.
   */
  async removeStoryFromHighlights(chatId: ID, storyId: number): Promise<void> {
    return await this.#dispatch("removeStoryFromHighlights", chatId, storyId);
  }

  //
  // ========================= STORY ALBUMS ========================= //
  //

  /**
   * Create a story album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat to create the album in.
   * @param name The name of the album.
   * @param storyIds The initial stories inside the album.
   */
  async createStoryAlbum(chatId: ID, name: string, storyIds: number[]): Promise<StoryAlbum> {
    return await this.#dispatch("createStoryAlbum", chatId, name, storyIds);
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
    return await this.#dispatch("setStoryAlbumName", chatId, albumId, name);
  }

  /**
   * Add multiple stories to an album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including the album.
   * @param albumId The identifier of an album.
   * @param storyIds The identifiers of the stories to add.
   */
  async addStoriesToAlbum(chatId: ID, albumId: number, storyIds: number[]): Promise<StoryAlbum> {
    return await this.#dispatch("addStoriesToAlbum", chatId, albumId, storyIds);
  }

  /**
   * Add a single story to an album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including the album.
   * @param albumId The identifier of an album.
   * @param storyIds The identifier of the story to add.
   */
  async addStoryToAlbum(chatId: ID, albumId: number, storyId: number): Promise<StoryAlbum> {
    return await this.#dispatch("addStoryToAlbum", chatId, albumId, storyId);
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
    return await this.#dispatch("removeStoriesFromAlbum", chatId, albumId, storyIds);
  }

  /**
   * Remove a single story from an album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including the album.
   * @param albumId The identifier of an album.
   * @param storyIds The identifier of the story to remove.
   */
  async removeStoryFromAlbum(chatId: ID, albumId: number, storyId: number): Promise<StoryAlbum> {
    return await this.#dispatch("removeStoryFromAlbum", chatId, albumId, storyId);
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
    return await this.#dispatch("reorderStoriesInAlbum", chatId, albumId, storyIds);
  }

  /**
   * Get story albums in a chat. User-only.
   *
   * @method sa
   * @param chatId The identifier of a chat including albums.
   */
  async getStoryAlbums(chatId: ID): Promise<StoryAlbum[]> {
    return await this.#dispatch("getStoryAlbums", chatId);
  }

  /**
   * Get stories inside an album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including albums.
   * @param albumId The identifier of an album.
   */
  async getStoriesInAlbum(chatId: ID, albumId: number): Promise<AlbumStoryList> {
    return await this.#dispatch("getStoriesInAlbum", chatId, albumId);
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
    return await this.#dispatch("getNetworkStatistics");
  }

  //
  // ========================= VIDEO CHATS ========================= //
  //

  /**
   * Start a video chat. User-only.
   *
   * @method vc
   * @param chatId The identifier of a chat to start the video chat in.
   * @returns The started video chat.
   */
  async startVideoChat(chatId: ID, params?: StartVideoChatParams): Promise<VideoChatActive> {
    return await this.#dispatch("startVideoChat", chatId, params);
  }

  /**
   * Schedule a video chat. User-only.
   *
   * @method vc
   * @param chatId The identifier of a chat to schedule the video chat in.
   * @param startAt A point in time within the future in which the video chat will be started.
   * @returns The scheduled video chat.
   */
  async scheduleVideoChat(chatId: ID, startAt: number, params?: ScheduleVideoChatParams): Promise<VideoChatScheduled> {
    return await this.#dispatch("scheduleVideoChat", chatId, startAt, params);
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
    return await this.#dispatch("joinVideoChat", id, params_, params);
  }

  /**
   * Leave a video chat. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   */
  async leaveVideoChat(id: string): Promise<void> {
    return await this.#dispatch("leaveVideoChat", id);
  }

  /**
   * Join a live stream. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   */
  async joinLiveStream(id: string): Promise<void> {
    return await this.#dispatch("joinLiveStream", id);
  }

  /**
   * Get a video chat. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   * @cache
   */
  async getVideoChat(id: string): Promise<VideoChat> {
    return await this.#dispatch("getVideoChat", id);
  }

  /**
   * Get live stream channels. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   */
  async getLiveStreamChannels(id: string): Promise<LiveStreamChannel[]> {
    return await this.#dispatch("getLiveStreamChannels", id);
  }

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
    return await this.#dispatch("downloadLiveStreamSegment", id, channelId, scale, timestamp, params);
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
    return await this.#dispatch("answerPreCheckoutQuery", preCheckoutQueryId, ok, params);
  }

  /**
   * Refund a star payment. Bot-only.
   *
   * @method pa
   * @param userId The identifier of the user that was charged.
   * @param telegramPaymentChargeId The identifier of the charge.
   */
  async refundStarPayment(userId: ID, telegramPaymentChargeId: string): Promise<void> {
    return await this.#dispatch("refundStarPayment", userId, telegramPaymentChargeId);
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
    return await this.#dispatch("getContacts");
  }

  /**
   * Delete multiple contacts. User-only.
   *
   * @method co
   * @param userIds The identifiers of contacts to delete.
   */
  async deleteContacts(userIds: ID[]): Promise<void> {
    return await this.#dispatch("deleteContacts", userIds);
  }

  /**
   * Delete a single contact. User-only.
   *
   * @method co
   * @param userId The identifier of the contact to delete.
   */
  async deleteContact(userId: ID): Promise<void> {
    return await this.#dispatch("deleteContact", userId);
  }

  /**
   * Add a contact. User-only.
   *
   * @method co
   * @param userId The identifier of the user to add as contact.
   * @param firstName The contact's first name.
   */
  async addContact(userId: ID, firstName: string, params?: AddContactParams): Promise<void> {
    await this.#dispatch("addContcat", userId, firstName, params);
  }

  /**
   * Set a contact note.
   *
   * @method co
   * @param userId The identifier of the user to update the note for.
   */
  async setContactNote(userId: ID, params?: SetContactNoteParams) {
    await this.#dispatch("setContactNote", userId, params);
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
    return await this.#dispatch("getTranslations", params);
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
    return await this.#dispatch("getGifts");
  }

  /**
   * Get gifts claimed by a user or a channel. User-only.
   *
   * @method gf
   * @param chatId The identifier of a user or a channel to get gifts for.
   */
  async getClaimedGifts(chatId: ID, params?: GetClaimedGiftsParams): Promise<ClaimedGifts> {
    return await this.#dispatch("getClaimedGifts", chatId, params);
  }

  /**
   * Send a gift.
   *
   * @method gf
   * @param chatId The identifier of a user or a channel to send the gift to.
   * @param giftId The identifier of the gift to send.
   */
  async sendGift(chatId: ID, giftId: string, params?: SendGiftParams): Promise<void> {
    return await this.#dispatch("sendGift", chatId, giftId, params);
  }

  /**
   * Sell a gift.
   *
   * @method gf
   * @param gift The gift to sell.
   */
  async sellGift(gift: InputGift): Promise<void> {
    return await this.#dispatch("sellGift", gift);
  }

  /**
   * Craft gifts.
   *
   * @method gf
   * @param gifts The gifts to craft.
   */
  async craftGifts(gifts: InputGift[]): Promise<void> {
    return await this.#dispatch("craftGifts", gifts);
  }

  /**
   * Get a gift using its slug.
   *
   * @method gf
   * @param slug The slug of a gift.
   */
  async getGift(slug: string): Promise<Gift> {
    return await this.#dispatch("getGift", slug);
  }

  /**
   * Transfer a gift. User-only.
   *
   * @method gf
   * @param chatId The identifier of a chat to transfer the gift to.
   * @param gift The gift to transfer.
   */
  async transferGift(chatId: ID, gift: InputGift): Promise<void> {
    return await this.#dispatch("transferGift", chatId, gift);
  }

  //
  // ========================= GIFT COLLECTIONS ========================= //
  //

  /**
   * Get gift collections of a chat. User-only.
   *
   * @method gc
   * @param chatId The identifier of a chat to get gift collections for.
   */
  async getGiftCollections(chatId: ID): Promise<GiftCollection[]> {
    return await this.#dispatch("getGiftCollections", chatId);
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
    return await this.#dispatch("createGiftCollection", chatId, name, gifts);
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
    return await this.#dispatch("setGiftCollectionName", chatId, collectionId, name);
  }

  /**
   * Add gifts to a gift collection. User-only.
   *
   * @method gc
   * @param chatId The identifier of the chat that includes the gift collection.
   * @param collectionId The identifier of a gift collection.
   * @param gifts The gifts to add to the collection.
   */
  async addGiftsToCollection(chatId: ID, collectionId: number, gifts: InputGift[]): Promise<GiftCollection> {
    return await this.#dispatch("addGiftsToCollection", chatId, collectionId, gifts);
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
    return await this.#dispatch("removeGiftsFromCollection", chatId, collectionId, gifts);
  }

  /**
   * Reorder gifts in a gift collection. User-only.
   *
   * @method gc
   * @param chatId The identifier of the chat that includes the gift collection.
   * @param collectionId The identifier of a gift collection.
   * @param gifts The gifts to remove from the collection.
   */
  async reorderGiftsInCollection(chatId: ID, collectionId: number, gifts: InputGift[]): Promise<GiftCollection> {
    return await this.#dispatch("reorderGiftsInCollection", chatId, collectionId, gifts);
  }

  /**
   * Delete a gift collection. User-only.
   *
   * @method gc
   * @param chatId The identifier of the chat that includes the gift collection.
   * @param collectionId The identifier of a gift collection.
   */
  async deleteGiftCollection(chatId: ID, collectionId: number): Promise<void> {
    return await this.#dispatch("deleteGiftCollection", chatId, collectionId);
  }

  //
  // ========================= TAKEOUTS ========================= //
  //

  /**
   * Start a takeout session. User-only.
   *
   * @method to
   * @returns The identifier of the takeout session.
   */
  async startTakeoutSession(params?: StartTakeoutSessionParams): Promise<string> {
    return await this.#dispatch("startTakeoutSession", params);
  }

  /**
   * End a takeout session. User-only.
   *
   * @method to
   * @param takeoutId The identifier of a takeout session.
   */
  async endTakeoutSession(takeoutId: string, params?: EndTakeoutSessionParams): Promise<void> {
    return await this.#dispatch("endTakeoutSession", takeoutId, params);
  }

  /**
   * Get left channels. User-only.
   *
   * @method to
   * @param takeoutId The identifier of a takeout session.
   */
  async getLeftChannels(takeoutId: string, params?: GetLeftChannelsParams): Promise<LeftChannelList> {
    return await this.#dispatch("getLeftChannels", takeoutId, params);
  }
}
