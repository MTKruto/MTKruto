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

import type { Api, Mtproto } from "../2_tl.ts";
import type { AlbumStoryList, AppSupport, AvailableReactions, Birthday, BlockedUserList, BotCommand, BotTokenCheckResult, BusinessConnection, CallbackQueryAnswer, CallbackQueryQuestion, Chat, ChatActionType, ChatListItem, ChatMember, ChatP, ChatPChannel, ChatPGroup, ChatPPrivate, ChatPSupergroup, ChatSettings, ClaimedGifts, CodeCheckResult, Country, FailedInvitation, FileSource, Gift, GiftCollection, ID, InactiveChat, InlineQueryAnswer, InlineQueryResult, InputChecklistItem, InputEmojiStatus, InputGift, InputMedia, InputPollOption, InputStoryContent, InviteLink, JoinRequest, LeftChannelList, LinkPreview, LiveStreamChannel, Message, MessageAnimation, MessageAudio, MessageChecklist, MessageContact, MessageDice, MessageDocument, MessageInvoice, MessageList, MessageLocation, MessagePhoto, MessagePoll, MessageReactionList, MessageSticker, MessageText, MessageVenue, MessageVideo, MessageVideoNote, MessageVoice, MiniAppInfo, NetworkStatistics, PasswordCheckResult, Poll, PriceTag, Reaction, SavedChats, SlowModeDuration, StarAmount, Sticker, StickerSet, Story, StoryAlbum, SummarizedText, Timezone, Topic, Translation, User, VideoChat, VideoChatActive, VideoChatScheduled, VoiceTranscription } from "../3_types.ts";
import type { AddBotToAttachmentsMenuParams, AddChatMemberParams, AddContactParams, AddReactionParams, AnswerCallbackQueryParams, AnswerInlineQueryParams, AnswerPreCheckoutQueryParams, ApproveJoinRequestsParams, BanChatMemberParams, CheckUsernameParams, CreateChannelParams, CreateGroupParams, CreateInviteLinkParams, CreateStoryParams, CreateSupergroupParams, CreateTopicParams, DeclineJoinRequestsParams, DeleteMessageParams, DeleteMessagesParams, DownloadLiveStreamSegmentParams, DownloadParams, EditInlineMessageCaptionParams, EditInlineMessageMediaParams, EditInlineMessageTextParams, EditMessageCaptionParams, EditMessageLiveLocationParams, EditMessageMediaParams, EditMessageReplyMarkupParams, EditMessageTextParams, EditTopicParams, EnableSignaturesParams, EndTakeoutSessionParams, ForwardMessagesParams, GetBlockedUsersParams, GetChatMembersParams, GetChatsParams, GetClaimedGiftsParams, GetCommonChatsParams, GetCreatedInviteLinksParams, GetHistoryParams, GetJoinRequestsParams, GetLeftChannelsParams, GetLinkPreviewParams, GetMessageReactionsParams, GetMyCommandsParams, GetSavedChatsParams, GetSavedMessagesParams, GetTranslationsParams, InvokeParams, JoinVideoChatParams, OpenChatParams, OpenMiniAppParams, PinMessageParams, PromoteChatMemberParams, ResolveUsernameParams, ScheduleVideoChatParams, SearchMessagesParams, SendAnimationParams, SendAudioParams, SendChecklistParams, SendContactParams, SendDiceParams, SendDocumentParams, SendGiftParams, SendInlineQueryParams, SendInvoiceParams, SendLocationParams, SendMediaGroupParams, SendMessageDraftParams, SendMessageParams, SendPhotoParams, SendPollParams, SendStickerParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetBirthdayParams, SetChatMemberRightsParams, SetChatMemberTagParams, SetChatPhotoParams, SetContactNoteParams, SetEmojiStatusParams, SetLocationParams, SetMyCommandsParams, SetNameColorParams, SetPersonalChannelParams, SetProfileColorParams, SetReactionsParams, SetWorkingHoursParams, SignInParams, StartBotParams, StartTakeoutSessionParams, StartVideoChatParams, StopPollParams, SummarizeTextParams, UnpinMessageParams, UnpinMessagesParams, UpdateChecklistParams, UpdateProfileParams, UpdateProfilePhotoParams, UpdateProfileVideoParams } from "./0_params.ts";

/**
 * A generic MTKruto client.
 */
export abstract class ClientGeneric {
  abstract connect(): Promise<void>;

  abstract disconnect(): Promise<void>;

  abstract start(params?: SignInParams): Promise<void>;

  abstract invoke<T extends Api.AnyFunction | Mtproto.ping, R = T extends Mtproto.ping ? Mtproto.pong : T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T, params?: InvokeParams): Promise<R>;

  /**
   * Send a user verification code.
   *
   * @param phoneNumber The phone number to send the code to.
   * @method ac
   */
  abstract sendCode(phoneNumber: string): Promise<void>;

  /**
   * Check if a code entered by the user was the same as the verification code.
   *
   * @param code A code entered by the user.
   * @method ac
   */
  abstract checkCode(code: string): Promise<CodeCheckResult>;

  /**
   * Get the user account password's hint.
   *
   * @method ac
   */
  abstract getPasswordHint(): Promise<string | null>;

  /**
   * Check whether a password entered by the user is the same as the account's one.
   *
   * @param password The password to check
   * @returns The result of the check.
   * @method ac
   */
  abstract checkPassword(password: string): Promise<PasswordCheckResult>;

  /**
   * Check whether a bot token is valid.
   *
   * @param password The password to check
   * @returns The result of the check.
   * @method ac
   */
  abstract checkBotToken(botToken: string): Promise<BotTokenCheckResult>;

  /**
   * Signs in using the provided parameters if not already signed in.
   * If no parameters are provided, the credentials will be prompted in runtime.
   *
   * Notes:
   * 1. Requires the `apiId` and `apiHash` paramters to be passed when constructing the client.
   * 3. Reconnects the client to the appropriate DC in case of MIGRATE_X errors.
   */
  abstract signIn(params?: SignInParams): Promise<void>;

  abstract signOut(): Promise<void>;

  abstract exportAuthString(): Promise<string>;

  abstract importAuthString(authString: string): Promise<void>;

  /**
   * Get a chat's inputPeer. Useful when calling API functions directly.
   *
   * @param id The identifier of a chat.
   */
  abstract getInputPeer(id: ID): Promise<Api.InputPeer>;

  /**
   * Get a channel or a supergroup's inputChannel. Useful when calling API functions directly.
   *
   * @param id The identifier of the channel or the supergroup.
   */
  abstract getInputChannel(id: ID): Promise<Api.inputChannel | Api.inputChannelFromMessage>;

  /**
   * Get a user's inputUser. Useful when calling API functions directly.
   *
   * @param id The identifier of the user.
   */
  abstract getInputUser(id: ID): Promise<Api.inputUserSelf | Api.inputUser | Api.inputUserFromMessage>;

  //
  // ========================= ACCOUNT ========================= //
  //

  /**
   * Get information on the currently authorized user.
   *
   * @method ac
   * @returns Information on the currently authorized user.
   */
  abstract getMe(): Promise<User>;

  /**
   * Show a username in the current account, a bot account, a supergroup, or a channel's profile. User-only.
   *
   * @method ac
   * @param id `"me"`, a bot ID, a supergroup ID, or a channel ID.
   * @param username The username to show.
   */
  abstract showUsername(id: ID, username: string): Promise<void>;

  /**
   * Hide a username from the current account, a bot account, a supergroup, or a channel's profile. User-only.
   *
   * @method ac
   * @param id `"me"`, a bot ID, a supergroup ID, or a channel ID.
   * @param username The username to hide.
   */
  abstract hideUsername(id: ID, username: string): Promise<void>;

  /**
   * Reorder the usernames of the current account, a bot account, a supergroup, or a channel's profile. User-only.
   *
   * @method ac
   * @param id `"me"`, a bot ID, a supergroup ID, or a channel ID.
   * @param order The new order to use.
   * @returns Whether the order was changed.
   */
  abstract reorderUsernames(id: ID, order: string[]): Promise<boolean>;

  /**
   * Hide all usernames from a supergroup or a channel's profile. User-only.
   *
   * @method ac
   * @param id A supergroup ID or a channel ID.
   * @returns Whether any username was hidden.
   */
  abstract hideUsernames(id: ID): Promise<boolean>;

  /**
   * Check the availability of a username. User-only.
   *
   * @method ac
   * @param username The username to check.
   * @returns Whether the username is available.
   */
  abstract checkUsername(username: string, params?: CheckUsernameParams): Promise<boolean>;

  /**
   * Set the username of the current account. User-only.
   *
   * @method ac
   * @param username The username to set.
   */
  abstract setUsername(username: string): Promise<void>;

  /**
   * Remove the current account's username. User-only.
   *
   * @method ac
   */
  abstract removeUsername(): Promise<void>;

  /**
   * Get a business connection. Bot-only.
   *
   * @method ac
   * @param id The identifier of the business connection.
   * @cache
   */
  abstract getBusinessConnection(id: string): Promise<BusinessConnection>;

  /**
   * Set the current account's online status. User-only.
   *
   * @method ac
   * @param isOnline The new online status.
   */
  abstract setIsOnline(isOnline: boolean): Promise<void>;

  /**
   * Set the current account's emoji status. User-only.
   *
   * @method ac
   * @param emojiStatus The emoji or gift to set as the new emoji status.
   */
  abstract setEmojiStatus(emojiStatus: InputEmojiStatus, params?: SetEmojiStatusParams): Promise<void>;

  /**
   * Remove the current account's emoji status. User-only.
   *
   * @method ac
   */
  abstract removeEmojiStatus(): Promise<void>;

  /**
   * Set the emoji status of a channel. User-only.
   *
   * @method ac
   * @param chatId The identifier of a channel.
   * @param emojiStatus The emoji or gift to set as the new emoji status.
   */
  abstract setChannelEmojiStatus(chatId: ID, emojiStatus: InputEmojiStatus, params?: SetEmojiStatusParams): Promise<void>;

  /**
   * Remove the emoji status of a channel. User-only.
   *
   * @method ac
   * @param chatId The identifier of a channel.
   */
  abstract removeChannelEmojiStatus(chatId: ID): Promise<void>;

  /**
   * Set the emoji status of a bot's user. Bot-only.
   *
   * @method ac
   * @param userId The identifier of a user of the bot.
   * @param emojiStatus The emoji or gift to set as the new emoji status.
   */
  abstract setUserEmojiStatus(userId: ID, emojiStatus: InputEmojiStatus, params?: SetEmojiStatusParams): Promise<void>;

  /**
   * Remove the emoji status of a bot's user. Bot-only.
   *
   * @method ac
   * @param userId The identifier of a user of the bot.
   */
  abstract removeUserEmojiStatus(userId: ID): Promise<void>;

  /**
   * Update the profile of the current user. At least one parameter must be specified. User-only.
   *
   * @method ac
   */
  abstract updateProfile(params?: UpdateProfileParams): Promise<void>;

  /**
   * Update the profile photo of the current user.
   *
   * @method ac
   * @param photo The photo to set as profile photo.
   */
  abstract updateProfilePhoto(photo: FileSource, params?: UpdateProfilePhotoParams): Promise<void>;

  /**
   * Update the profile video of the current user.
   *
   * @method ac
   * @param video The video to set as profile video.
   */
  abstract updateProfileVideo(video: FileSource, params?: UpdateProfileVideoParams): Promise<void>;

  /**
   * Set the birthday of the current user. User-only.
   *
   * @method ac
   */
  abstract setBirthday(params?: SetBirthdayParams): Promise<void>;

  /**
   * Set the personal channel of the current user. User-only.
   *
   * @method ac
   */
  abstract setPersonalChannel(params?: SetPersonalChannelParams): Promise<void>;

  /**
   * Set the name color of the current user. User-only.
   *
   * @method ac
   * @param color The identifier of the color to set.
   */
  abstract setNameColor(color: number, params?: SetNameColorParams): Promise<void>;

  /**
   * Set the profile color of the current user. User-only.
   *
   * @method ac
   * @param color The identifier of the color to set.
   */
  abstract setProfileColor(color: number, params?: SetProfileColorParams): Promise<void>;

  /**
   * Set the location of the current user. User-only.
   *
   * @method ac
   */
  abstract setLocation(params?: SetLocationParams): Promise<void>;

  /**
   * Set the working hours of the current user. User-only.
   *
   * @method ac
   */
  abstract setWorkingHours(params?: SetWorkingHoursParams): Promise<void>;

  /**
   * Enable sponsored messages on the current user. User-only.
   *
   * @method ac
   */
  abstract enableSponsoredMessages(): Promise<void>;

  /**
   * Disable sponsored messages on the current user. User-only.
   *
   * @method ac
   */
  abstract disableSponsoredMessages(): Promise<void>;

  /**
   * Pause the business bot in a chat. User-only.
   *
   * @method ac
   * @param chatId The identifier of a chat.
   */
  abstract pauseBusinessBotConnection(chatId: ID): Promise<void>;

  /**
   * Resume the business bot in a chat. User-only.
   *
   * @method ac
   * @param chatId The identifier of a chat.
   */
  abstract resumeBusinessBotConnection(chatId: ID): Promise<void>;

  /**
   * Resolve a username.
   *
   * @method ac
   * @param username The username to resolve.
   */
  abstract resolveUsername(username: string, params?: ResolveUsernameParams): Promise<ChatP>;

  /**
   * Resolve a phone number. User-only.
   *
   * @method ac
   * @param username The phone number to resolve.
   */
  abstract resolvePhoneNumber(phoneNumber: string): Promise<User>;

  /**
   * Set the list of close friends. User-only.
   *
   * @method ac
   * @param userIds The identifiers of users to set as close friends.
   */
  abstract setCloseFriends(userIds: ID[]): Promise<void>;

  /**
   * Suggest a birthday. User-only.
   *
   * @method ac
   * @param userId The identifier of the user to suggest a birthday for.
   * @param birthday The birthday to suggest.
   */
  abstract suggestBirthday(userId: ID, birthday: Birthday): Promise<void>;

  /**
   * Block a user. User-only.
   *
   * @method ac
   * @param userId The identifier of the user to block.
   */
  abstract blockUser(userId: ID): Promise<void>;

  /**
   * Unblock a user. User-only.
   *
   * @method ac
   * @param userId The identifier of the user to unblock.
   */
  abstract unblockUser(userId: ID): Promise<void>;

  /**
   * Get blocked users. User-only.
   *
   * @method ac
   */
  abstract getBlockedUsers(params?: GetBlockedUsersParams): Promise<BlockedUserList>;

  /**
   * Add a bot to the attachments menu. User-only.
   *
   * @method ac
   * @param botId The identifier of the bot to add to the attachments menu.
   */
  abstract addBotToAttachmentsMenu(botId: ID, params?: AddBotToAttachmentsMenuParams): Promise<void>;

  /**
   * Remove a bot from the attachments menu. User-only.
   *
   * @method ac
   * @param botId The identifier of the bot to remove from the attachments menu.
   */
  abstract removeBotFromAttachmentsMenu(botId: ID): Promise<void>;

  /**
   * Get app support. User-only.
   *
   * @method ac
   */
  abstract getAppSupport(): Promise<AppSupport>;

  /**
   * Get app support name. User-only.
   *
   * @method ac
   */
  abstract getAppSupportName(): Promise<string>;

  /**
   * Get owned bots. User-only.
   *
   * @method ac
   */
  abstract getOwnedBots(): Promise<User[]>;

  /**
   * Get timezones. User-only.
   *
   * @method ac
   */
  abstract getTimezones(): Promise<Timezone[]>;

  /**
   * Get countries. User-only.
   *
   * @method ac
   */
  abstract getCountries(languageCode: string): Promise<Country[]>;

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
  abstract sendMessage(chatId: ID, text: string, params?: SendMessageParams): Promise<MessageText>;

  /**
   * Stream a drafted text message. Bot-only.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the message to.
   * @param draftId The identifier of the draft.
   * @param text The message's text.
   */
  abstract sendMessageDraft(chatId: ID, draftId: number, text: string, params?: SendMessageDraftParams): Promise<void>;

  /**
   * Send a photo.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the photo to.
   * @param photo The photo to send.
   * @returns The sent photo.
   */
  abstract sendPhoto(chatId: ID, photo: FileSource, params?: SendPhotoParams): Promise<MessagePhoto>;

  /**
   * Send a document.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the document to.
   * @param document The document to send.
   * @returns The sent document.
   */
  abstract sendDocument(chatId: ID, document: FileSource, params?: SendDocumentParams): Promise<MessageDocument>;

  /**
   * Send a sticker.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the sticker to.
   * @param document The sticker to send.
   * @returns The sent sticker.
   */
  abstract sendSticker(chatId: ID, sticker: FileSource, params?: SendStickerParams): Promise<MessageSticker>;

  /**
   * Send a video.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the video to.
   * @param video The video to send.
   * @returns The sent video.
   */
  abstract sendVideo(chatId: ID, video: FileSource, params?: SendVideoParams): Promise<MessageVideo>;

  /**
   * Send an animation.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the animation to.
   * @param animation The animation to send.
   * @returns The sent animation.
   */
  abstract sendAnimation(chatId: ID, animation: FileSource, params?: SendAnimationParams): Promise<MessageAnimation>;

  /**
   * Send a voice message.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the voice message to.
   * @param voice The voice to send.
   * @returns The sent voice message.
   */
  abstract sendVoice(chatId: ID, voice: FileSource, params?: SendVoiceParams): Promise<MessageVoice>;

  /**
   * Send an audio file.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the audio file to.
   * @param audio The audio to send.
   * @returns The sent audio filr.
   */
  abstract sendAudio(chatId: ID, audio: FileSource, params?: SendAudioParams): Promise<MessageAudio>;

  /**
   * Send a media group.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the media group to.
   * @param media The media to include in the media group. Animations are not allowed. All of them must be of the same media type, but an exception is that photos and videos can be mixed.
   * @returns The sent messages.
   */
  abstract sendMediaGroup(chatId: ID, media: InputMedia[], params?: SendMediaGroupParams): Promise<Message[]>;

  /**
   * Send a video note.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the video note to.
   * @param videoNote The video note to send.
   * @returns The sent video note.
   */
  abstract sendVideoNote(chatId: ID, videoNote: FileSource, params?: SendVideoNoteParams): Promise<MessageVideoNote>;

  /**
   * Send a location.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the location to.
   * @param latitude The location's latitude.
   * @param longitude The location's longitude.
   * @returns The sent location.
   */
  abstract sendLocation(chatId: ID, latitude: number, longitude: number, params?: SendLocationParams): Promise<MessageLocation>;

  /**
   * Send a contact.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the contact to.
   * @param firstName The contact's first name.
   * @param number The contact's phone number.
   * @returns The sent contact.
   */
  abstract sendContact(chatId: ID, firstName: string, number: string, params?: SendContactParams): Promise<MessageContact>;

  /**
   * Send a dice.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the dice to.
   * @returns The sent dice.
   */
  abstract sendDice(chatId: ID, params?: SendDiceParams): Promise<MessageDice>;

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
  abstract sendVenue(chatId: ID, latitude: number, longitude: number, title: string, address: string, params?: SendVenueParams): Promise<MessageVenue>;

  /**
   * Send a poll.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the poll to.
   * @param question The poll's question.
   * @param options The poll's options.
   * @returns The sent poll.
   */
  abstract sendPoll(chatId: ID, question: string, options: InputPollOption[], params?: SendPollParams): Promise<MessagePoll>;

  /**
   * Send a checklist. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the checklist to.
   * @param title The checklist's title.
   * @param items The checklist's items.
   * @returns The sent checklist.
   */
  abstract sendChecklist(chatId: ID, title: string, items: InputChecklistItem[], params?: SendChecklistParams): Promise<MessageChecklist>;

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
  abstract sendInvoice(chatId: ID, title: string, description: string, payload: string, currency: string, prices: PriceTag[], params?: SendInvoiceParams): Promise<MessageInvoice>;

  /**
   * Edit a message's text.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message.
   * @param text The new text of the message.
   * @returns The edited text message.
   */
  abstract editMessageText(chatId: ID, messageId: number, text: string, params?: EditMessageTextParams): Promise<MessageText>;

  /**
   * Edit a message's caption.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message.
   * @param text The new caption of the message.
   * @returns The edited message.
   */
  abstract editMessageCaption(chatId: ID, messageId: number, params?: EditMessageCaptionParams): Promise<Message>;

  /**
   * Edit a message's media.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message.
   * @param media The new media of the message.
   * @returns The edited message.
   */
  abstract editMessageMedia(chatId: ID, messageId: number, media: InputMedia, params?: EditMessageMediaParams): Promise<Message>;

  /**
   * Edit an inline message's media.
   *
   * @method ms
   * @param inlineMessageId The identifier of the inline message.
   * @param media The new media of the message.
   */
  abstract editInlineMessageMedia(inlineMessageId: string, media: InputMedia, params?: EditInlineMessageMediaParams): Promise<void>;

  /**
   * Edit an inline message's text. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The identifier of the inline message.
   * @param text The new text of the message.
   */
  abstract editInlineMessageText(inlineMessageId: string, text: string, params?: EditInlineMessageTextParams): Promise<void>;

  /**
   * Edit an inline message's caption. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The identifier of the inline message.
   */
  abstract editInlineMessageCaption(inlineMessageId: string, params?: EditInlineMessageCaptionParams): Promise<void>;

  /**
   * Edit a message's reply markup.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message.
   * @returns The edited message.
   */
  abstract editMessageReplyMarkup(
    chatId: ID,
    messageId: number,
    params?: EditMessageReplyMarkupParams,
  ): Promise<Message>;

  /**
   * Edit an inline message's reply markup. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The identifier of the inline message.
   */
  abstract editInlineMessageReplyMarkup(inlineMessageId: string, params?: EditMessageReplyMarkupParams): Promise<void>;

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
  abstract editMessageLiveLocation(
    chatId: ID,
    messageId: number,
    latitude: number,
    longitude: number,
    params?: EditMessageLiveLocationParams,
  ): Promise<MessageLocation>;

  /**
   * Edit an inline message's live location. Bot-only.
   *
   * @method ms
   * @param inlineMessageId The identifier of the inline message.
   * @param latitude The new latitude.
   * @param longitude The new longitude.
   * @returns The edited location message.
   */
  abstract editInlineMessageLiveLocation(
    inlineMessageId: string,
    latitude: number,
    longitude: number,
    params?: EditMessageLiveLocationParams,
  ): Promise<void>;

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
  abstract getMessages(chatId: ID, messageIds: number[]): Promise<Message[]>;

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
  abstract getMessage(chatId: ID, messageId: number): Promise<Message | null>;

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
  abstract resolveMessageLink(link: string): Promise<Message | null>;

  /**
   * Delete multiple messages.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageIds The identifiers of the messages to delete.
   */
  abstract deleteMessages(chatId: ID, messageIds: number[], params?: DeleteMessagesParams): Promise<void>;

  /**
   * Delete a single message.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message to delete.
   */
  abstract deleteMessage(chatId: ID, messageId: number, params?: DeleteMessageParams): Promise<void>;

  /**
   * Delete all messages sent by a specific member of a chat. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  abstract deleteChatMemberMessages(chatId: ID, memberId: ID): Promise<void>;

  /**
   * Delete multiple scheduled messages.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageIds The identifiers of the scheduled messages to delete.
   */
  abstract deleteScheduledMessages(chatId: ID, messageIds: number[]): Promise<void>;

  /**
   * Delete a scheduled message.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the scheduled message to delete.
   */
  abstract deleteScheduledMessage(chatId: ID, messageId: number): Promise<void>;

  /**
   * Send multiple scheduled messages before their schedule.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageIds The identifiers of the scheduled messages to send.
   */
  abstract sendScheduledMessages(chatId: ID, messageIds: number[]): Promise<Message[]>;

  /**
   * Send a scheduled message before its schedule.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the scheduled message to send.
   */
  abstract sendScheduledMessage(chatId: ID, messageId: number): Promise<Message>;

  /**
   * Pin a message in a chat.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the message.
   */
  abstract pinMessage(chatId: ID, messageId: number, params?: PinMessageParams): Promise<void>;

  /**
   * Unpin a pinned message.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the message.
   */
  abstract unpinMessage(chatId: ID, messageId: number, params?: UnpinMessageParams): Promise<void>;

  /**
   * Unpin all pinned messages.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   */
  abstract unpinMessages(chatId: ID, params?: UnpinMessagesParams): Promise<void>;

  /**
   * Forward multiple messages.
   *
   * @method ms
   * @param from The identifier of a chat to forward the messages from.
   * @param to The identifier of a chat to forward the messages to.
   * @param messageIds The identifiers of the messages to forward.
   * @returns The forwarded messages.
   */
  abstract forwardMessages(from: ID, to: ID, messageIds: number[], params?: ForwardMessagesParams): Promise<Message[]>;

  /**
   * Forward a single message.
   *
   * @method ms
   * @param from The identifier of a chat to forward the message from.
   * @param to The identifier of a chat to forward the message to.
   * @param messageId The identifier of the message to forward.
   * @returns The forwarded message.
   */
  abstract forwardMessage(from: ID, to: ID, messageId: number, params?: ForwardMessagesParams): Promise<Message>;

  /**
   * Stop a poll.
   *
   * @method ms
   * @param chatId The chat that includes the poll.
   * @param messageId The idenfifier of the poll's message.
   * @returns The new state of the poll.
   */
  abstract stopPoll(chatId: ID, messageId: number, params?: StopPollParams): Promise<Poll>;

  /**
   * Send a chat action.
   *
   * @method ms
   * @param chatId The identifier of a chat to send the chat action to.
   * @param action The chat action.
   * @param messageThreadId The thread to send the chat action to.
   */
  abstract sendChatAction(chatId: ID, action: ChatActionType, params?: { messageThreadId?: number }): Promise<void>;

  /**
   * Search for messages. User-only.
   *
   * @method ms
   */
  abstract searchMessages(params?: SearchMessagesParams): Promise<MessageList>;

  /**
   * Mark messages as read. User-only.
   *
   * @method ms
   * @param chatId The identifier of the chat which the messages belong to.
   * @param untilMessageId The identifier of the message that will be marked as read, along with any other unread messages before it.
   */
  abstract readMessages(chatId: ID, untilMessageId: number): Promise<void>;

  /**
   * Start a bot. User-only.
   *
   * @method ms
   * @param botId The identifier of the bot to start.
   * @returns The start message.
   */
  abstract startBot(botId: number, params?: StartBotParams): Promise<Message>;

  /**
   * Transcribe a voice message. User-only.
   *
   * @method ms
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message.
   * @cache
   */
  abstract transcribeVoice(chatId: ID, messageId: number): Promise<VoiceTranscription>;

  /**
   * Get a sticker set.
   *
   * @method ms
   * @param name The name of the sticker set or its link.
   */
  abstract getStickerSet(name: string): Promise<StickerSet>;

  /*
   * Get the link preview for a message that is about to be sent. User-only.
   *
   * @method ms
   * @param text The message's text.
   */
  abstract getLinkPreview(text: string, params?: GetLinkPreviewParams): Promise<LinkPreview | null>;

  /**
   * Open a mini app. User-only.
   *
   * @method ms
   * @param botId The identifier of a bot with the mini app.
   * @param chatId The identifier of the chat from which the mini app is opened.
   * @cache
   */
  abstract openMiniApp(botId: ID, chatId: ID, params?: OpenMiniAppParams): Promise<MiniAppInfo>;

  /**
   * Get a progress ID that can be passed to relevant send* methods to receive upload progress updates for them.
   *
   * @method ms
   * @cache
   */
  abstract getProgressId(): Promise<string>;

  /**
   * Get messages saved from a specific chat.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   */
  abstract getSavedMessages(chatId: ID, params?: GetSavedMessagesParams): Promise<Message[]>;

  /**
   * Get a list of saved chats.
   *
   * @method ms
   */
  abstract getSavedChats(params?: GetSavedChatsParams): Promise<SavedChats>;

  /**
   * Get a list of reactions made to a message. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the message.
   */
  abstract getMessageReactions(chatId: ID, messageId: number, params?: GetMessageReactionsParams): Promise<MessageReactionList>;

  /**
   * Set a reaction as default. User-only.
   *
   * @method ms
   * @param reaction The reaction to set as default.
   */
  abstract setDefaultReaction(reaction: Reaction): Promise<void>;

  /**
   * Clear all message drafts. User-only.
   *
   * @method ms
   */
  abstract clearDrafts(): Promise<void>;

  /**
   * Summarize a message's text. User-only.
   *
   * @method ms
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of a message.
   */
  abstract summarizeText(chatId: ID, messageId: number, params?: SummarizeTextParams): Promise<SummarizedText>;

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
  abstract vote(chatId: ID, messageId: number, optionIndexes: number[]): Promise<void>;

  /**
   * Retract a vote. User-only.
   *
   * @method pl
   * @param chatId The identifier of the chat that includes the poll.
   * @param messageId The identifier of the message that includes the poll.
   */
  abstract retractVote(chatId: ID, messageId: number): Promise<void>;

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
  abstract addToChecklist(chatId: ID, messageId: number, items: InputChecklistItem[]): Promise<void>;

  /**
   * Update a checklist. User-only.
   *
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the checklist message.
   * @method cl
   */
  abstract updateChecklist(chatId: ID, messageId: number, params?: UpdateChecklistParams): Promise<void>;

  /**
   * Check multiple items of a checklist. User-only.
   *
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the checklist message.
   * @param items The identifiers of the items to check.
   * @method cl
   */
  abstract checkChecklistItems(chatId: ID, messageId: number, items: number[]): Promise<void>;

  /**
   * Uncheck multiple items of a checklist. User-only.
   *
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the checklist message.
   * @param items The identifiers of the items to uncheck.
   * @method cl
   */
  abstract uncheckChecklistItems(chatId: ID, messageId: number, items: number[]): Promise<void>;

  /**
   * Check a single item of a checklist. User-only.
   *
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the checklist message.
   * @param item The identifier of the item to check.
   * @method cl
   */
  abstract checkChecklistItem(chatId: ID, messageId: number, item: number): Promise<void>;

  /**
   * Uncheck a single item of a checklist. User-only.
   *
   * @param chatId The identifier of a chat.
   * @param messageId The identifier of the checklist message.
   * @param item The identifier of the item to uncheck.
   * @method cl
   */
  abstract uncheckChecklistItem(chatId: ID, messageId: number, item: number): Promise<void>;

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
  abstract downloadChunk(fileId: string, params?: DownloadParams): Promise<Uint8Array>;

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
  abstract download(fileId: string, params?: DownloadParams): AsyncGenerator<Uint8Array, void, unknown>;

  /**
   * Get custom emoji documents for download.
   *
   * @method fs
   * @param id Identifier of one or more of custom emojis.
   * @returns The custom emoji documents.
   * @cache
   */
  abstract getCustomEmojiStickers(id: string | string[]): Promise<Sticker[]>;

  //
  // ========================= CHATS ========================= //
  //

  /**
   * Get chats from a chat list. User-only.
   *
   * @method ch
   */
  abstract getChats(params?: GetChatsParams): Promise<ChatListItem[]>;

  /**
   * Get pinned chats from a chat list. User-only.
   *
   * @method ch
   * @param from The chat list to get the pinned chats from. Defaults to main.
   */
  abstract getPinnedChats(from?: "archived" | "main"): Promise<ChatListItem[]>;

  /**
   * Get a chat.
   *
   * @method ch
   * @cache
   */
  abstract getChat(chatId: ID): Promise<Chat>;

  /**
   * Get chat history. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  abstract getHistory(chatId: ID, params?: GetHistoryParams): Promise<Message[]>;

  /**
   * Set a chat's available reactions. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param availableReactions The new available reactions.
   */
  abstract setAvailableReactions(chatId: ID, availableReactions: AvailableReactions): Promise<void>;

  /**
   * Set a chat's photo.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param photo A photo to set as the chat's photo.
   */
  abstract setChatPhoto(chatId: ID, photo: FileSource, params?: SetChatPhotoParams): Promise<void>;

  /**
   * Delete a chat's photo.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  abstract deleteChatPhoto(chatId: ID): Promise<void>;

  /**
   * Ban a member from a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param memberId The identifier of the member.
   */
  abstract banChatMember(chatId: ID, memberId: ID, params?: BanChatMemberParams): Promise<void>;

  /**
   * Unban a member from a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  abstract unbanChatMember(chatId: ID, memberId: ID): Promise<void>;

  /**
   * Kick a member from a chat. Same as a banChatMember call followed by unbanChatMember.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  abstract kickChatMember(chatId: ID, memberId: ID): Promise<void>;

  /**
   * Set the rights of a chat member.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a supergroup.
   * @param memberId The identifier of the member.
   */
  abstract setChatMemberRights(chatId: ID, memberId: ID, params?: SetChatMemberRightsParams): Promise<void>;

  /**
   * Get the administrators of a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @returns The chat's administrators.
   */
  abstract getChatAdministrators(chatId: ID): Promise<ChatMember[]>;

  /**
   * Enable join requests in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a channel or a supergroup.
   */
  abstract enableJoinRequests(chatId: ID): Promise<void>;

  /**
   * Disable join requests in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a channel or a supergroup.
   */
  abstract disableJoinRequests(chatId: ID): Promise<void>;

  /**
   * Get inactive chats. User-only.
   *
   * @method ch
   * @retuns A list of inactive chats the current user is member of.
   */
  abstract getInactiveChats(): Promise<InactiveChat[]>;

  /**
   * Get the invite links created for a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @returns The invite links created for the chat. This might be a subset of the results if they were less than `limit`. The parameters `afterDate` and `afterInviteLink` can be used for pagination.
   */
  abstract getCreatedInviteLinks(chatId: ID, params?: GetCreatedInviteLinksParams): Promise<InviteLink[]>;

  /**
   * Join a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  abstract joinChat(chatId: ID): Promise<void>;

  /**
   * Leave a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  abstract leaveChat(chatId: ID): Promise<void>;

  /**
   * Get information on a user's chat membership.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param userId The identifier of the user.
   */
  abstract getChatMember(chatId: ID, userId: ID): Promise<ChatMember>;

  /**
   * Get the members of a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  abstract getChatMembers(chatId: ID, params?: GetChatMembersParams): Promise<ChatMember[]>;

  /**
   * Set a chat's sticker set.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a supergroup.
   * @param setName The name of the set.
   */
  abstract setChatStickerSet(chatId: ID, setName: string): Promise<void>;

  /**
   * Delete a chat's sticker set.
   *
   * @method ch
   * @param chatId The identifier of a chat. Must be a supergroup.
   */
  abstract deleteChatStickerSet(chatId: ID): Promise<void>;

  /**
   * Set the number of boosts required to circument a chat's default restrictions. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param boosts The number of boosts required to circumvent its restrictions.
   */
  abstract setBoostsRequiredToCircumventRestrictions(chatId: ID, boosts: number): Promise<void>;

  /**
   * Create an invite link.
   *
   * @method ch
   * @param chatId The identifier of a chat to create the invite link for.
   * @returns The newly created invite link.
   */
  abstract createInviteLink(chatId: ID, params?: CreateInviteLinkParams): Promise<InviteLink>;

  /**
   * Approve a join request.
   *
   * @method ch
   * @param chatId The identifier of a chat with the join request.
   * @param userId The user who made the join request.
   */
  abstract approveJoinRequest(chatId: ID, userId: ID): Promise<void>;

  /**
   * Decline a join request.
   *
   * @method ch
   * @param chatId The identifier of a chat with the join request.
   * @param userId The user who made the join request.
   */
  abstract declineJoinRequest(chatId: ID, userId: ID): Promise<void>;

  /**
   * Approve all join requests. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat with the join requests.
   */
  abstract approveJoinRequests(chatId: ID, params?: ApproveJoinRequestsParams): Promise<void>;

  /**
   * Decline all join requests. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat with the join requests.
   */
  abstract declineJoinRequests(chatId: ID, params?: DeclineJoinRequestsParams): Promise<void>;

  /**
   * Get pending join requests in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat with the join requests.
   */
  abstract getJoinRequests(chatId: ID, params?: GetJoinRequestsParams): Promise<JoinRequest[]>;

  /**
   * Add a single user to a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat to add the user to.
   * @param userId The identifier of the user to add to the chat.
   * @returns An array of FailedInvitation that has at most a length of 1. If empty, it means that the user was added.
   */
  abstract addChatMember(chatId: ID, userId: ID, params?: AddChatMemberParams): Promise<FailedInvitation[]>;

  /**
   * Add multiple users at once to a channel or a supergroup.
   *
   * @method ch
   * @param chatId The identifier of the channel or supergroup to add the users to.
   * @param userId The identifiers of the users to add to the channel or supergroup.
   * @returns An array of FailedInvitation that has at most a length that is the same as that of the parameter userIds. If empty, it means that all the provided users were added.
   */
  abstract addChatMembers(chatId: ID, userIds: ID[]): Promise<FailedInvitation[]>;

  /**
   * Open a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat to open.
   */
  abstract openChat(chatId: ID, params?: OpenChatParams): Promise<void>;

  /**
   * Close a chat previously opened by openChat.
   *
   * @method ch
   * @param chatId The identifier of a chat to close.
   */
  abstract closeChat(chatId: ID): Promise<void>;

  /**
   * Create a group. User-only.
   *
   * @method ch
   * @param title The title of the group.
   * @returns The created group.
   */
  abstract createGroup(title: string, params?: CreateGroupParams): Promise<ChatPGroup>;

  /**
   * Create a supergroup. User-only.
   *
   * @method ch
   * @param title The title of the supergroup.
   * @returns The created supergroup.
   */
  abstract createSupergroup(title: string, params?: CreateSupergroupParams): Promise<ChatPSupergroup>;

  /**
   * Create a channel. User-only.
   *
   * @method ch
   * @param title The title of the channel.
   * @returns The created channel.
   */
  abstract createChannel(title: string, params?: CreateChannelParams): Promise<ChatPChannel>;

  /**
   * Set the time to live of the messages of a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param messageTtl The time to live of the messages in seconds.
   */
  abstract setMessageTtl(chatId: ID, messageTtl: number): Promise<void>;

  /**
   * Archive multiple chats. User-only.
   *
   * @method ch
   * @param chatIds The identifiers of the chats to archive.
   */
  abstract archiveChats(chatIds: ID[]): Promise<void>;

  /**
   * Archive a single chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  abstract archiveChat(chatId: ID): Promise<void>;

  /**
   * Unarchive multiple chats. User-only.
   *
   * @method ch
   * @param chatIds The identifiers of the chats to unarchive.
   */
  abstract unarchiveChats(chatIds: ID[]): Promise<void>;

  /**
   * Unarchive a single chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  abstract unarchiveChat(chatId: ID): Promise<void>;

  /**
   * Get common chats between a user and the current one. User-only.
   *
   * @method ch
   * @param userId The identifier of the user to get the common chats with them.
   */
  abstract getCommonChats(userId: ID, params?: GetCommonChatsParams): Promise<ChatP[]>;

  /**
   * Get the settings of a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  abstract getChatSettings(chatId: ID): Promise<ChatSettings>;

  /**
   * Disable business bots in a private chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the private chat to disable business bots in.
   */
  abstract disableBusinessBots(chatId: ID): Promise<void>;

  /**
   * Enable business bots in a private chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of the private chat to enable business bots in.
   */
  abstract enableBusinessBots(chatId: ID): Promise<void>;

  /**
   * Disable slow mode in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group to disable slow mode in.
   */
  abstract disableSlowMode(chatId: ID): Promise<void>;

  /**
   * Change slow mode in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group to change slow mode in.
   * @param duration New slow mode duration.
   */
  abstract setSlowMode(chatId: ID, duration: SlowModeDuration): Promise<void>;

  /**
   * Change the title of a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param title The new title.
   */
  abstract setChatTitle(chatId: ID, title: string): Promise<void>;

  /**
   * Change the description of a chat.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param description The new description.
   */
  abstract setChatDescription(chatId: ID, description: string): Promise<void>;

  /**
   * Hide the member list of a group to non-admins. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   */
  abstract hideMemberList(chatId: ID): Promise<void>;

  /**
   * Show the member list of a group to non-admins. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   */
  abstract showMemberList(chatId: ID): Promise<void>;

  /**
   * Enable topics in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   * @param isShownAsTabs Whether topics should be displayed as tabs.
   */
  abstract enableTopics(chatId: ID, isShownAsTabs: boolean): Promise<void>;

  /**
   * Disable topics in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   */
  abstract disableTopics(chatId: ID): Promise<void>;

  /**
   * Enable automatic anti-spam in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   */
  abstract enableAntispam(chatId: ID): Promise<void>;

  /**
   * Disable automatic anti-spam in a group. User-only.
   *
   * @method ch
   * @param chatId The identifier of the group.
   */
  abstract disableAntispam(chatId: ID): Promise<void>;

  /**
   * Enable post signatures in a channel. User-only.
   *
   * @method ch
   * @param chatId The identifier of the channel.
   */
  abstract enableSignatures(chatId: ID, params?: EnableSignaturesParams): Promise<void>;

  /**
   * Disable post signatures in a channel. User-only.
   *
   * @method ch
   * @param chatId The identifier of the channel.
   */
  abstract disableSignatures(chatId: ID): Promise<void>;

  /**
   * Delete a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  abstract deleteChat(chatId: ID): Promise<void>;

  /**
   * Get discussion chat suggestions. User-only.
   *
   * @method ch
   */
  abstract getDiscussionChatSuggestions(): Promise<ChatP[]>;

  /**
   * Set a channel's discussion chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a channel.
   * @param discussionChatId The identifier of a chat to use as discussion for the channel.
   */
  abstract setDiscussionChat(chatId: ID, discussionChatId: ID): Promise<void>;

  /**
   * Transfer the ownership of a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param userId The identifier of the new owner.
   * @param password The password of the current account.
   */
  abstract transferChatOwnership(chatId: ID, userId: ID, password: string): Promise<void>;

  /**
   * Create a forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param title The title of the topic.
   * @returns The created topic.
   */
  abstract createTopic(chatId: ID, title: string, params?: CreateTopicParams): Promise<Topic>;

  /**
   * Edit a forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param topicId The identifier of the topic.
   * @param title The new title of the topic.
   * @returns The new topic.
   */
  abstract editTopic(chatId: ID, topicId: number, title: string, params?: EditTopicParams): Promise<Topic>;

  /**
   * Hide the general forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  abstract hideGeneralTopic(chatId: ID): Promise<void>;

  /**
   * Show the general forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  abstract showGeneralTopic(chatId: ID): Promise<void>;

  /**
   * Close a forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param topicId The identifier of the topic.
   */
  abstract closeTopic(chatId: ID, topicId: number): Promise<void>;

  /**
   * Reopen a forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param topicId The identifier of the topic.
   */
  abstract reopenTopic(chatId: ID, topicId: number): Promise<void>;

  /**
   * Pin a forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param topicId The identifier of the topic.
   */
  abstract pinTopic(chatId: ID, topicId: number): Promise<void>;

  /**
   * Unpin a forum topic.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param topicId The identifier of the topic.
   */
  abstract unpinTopic(chatId: ID, topicId: number): Promise<void>;

  /**
   * Promote a chat member.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param userId The identifier of the user to promote.
   */
  abstract promoteChatMember(chatId: ID, userId: ID, params?: PromoteChatMemberParams): Promise<void>;

  /**
   * Change the tag of a chat member.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param userId The identifier of the user that is a member of the chat.
   */
  abstract setChatMemberTag(chatId: ID, userId: ID, params?: SetChatMemberTagParams): Promise<void>;

  /**
   * Enable sharing in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  abstract enableSharing(chatId: ID): Promise<void>;

  /**
   * Disable sharing in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  abstract disableSharing(chatId: ID): Promise<void>;

  /**
   * Get recommended channels. User-only.
   *
   * @method ch
   * @returns A list of recommended channels.
   */
  abstract getRecommendedChannels(): Promise<ChatPChannel[]>;

  /**
   * Get similar channels. User-only.
   *
   * @method ch
   * @param chatId The identifier of a channel to get similar channels for.
   * @returns A list of similar channels.
   */
  abstract getSimilarChannels(chatId: ID): Promise<ChatPChannel[]>;

  /**
   * Get similar bots. User-only.
   *
   * @method ch
   * @param chatId The identifier of a bot to get similar bots for.
   * @returns A list of similar bots.
   */
  abstract getSimilarBots(chatId: ID): Promise<ChatPPrivate[]>;

  /**
   * Get the count of online members in a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @returns The count of online members in the chat.
   */
  abstract getOnlineCount(chatId: ID): Promise<number>;

  /**
   * Enable chat history for new members. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  abstract enableChatHistoryForNewMembers(chatId: ID): Promise<void>;

  /**
   * Disable chat history for new members. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   */
  abstract disableChatHistoryForNewMembers(chatId: ID): Promise<void>;

  /**
   * Set the default send as chat of a chat. User-only.
   *
   * @method ch
   * @param chatId The identifier of a chat.
   * @param sendAs The new default send as chat.
   */
  abstract setDefaultSendAs(chatId: ID, sendAs: ID): Promise<void>;

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
  abstract sendCallbackQuery(botId: ID, messageId: number, question: CallbackQueryQuestion): Promise<CallbackQueryAnswer>;

  /**
   * Answer a callback query. Bot-only.
   *
   * @method cq
   * @param id ID of the callback query to answer.
   */
  abstract answerCallbackQuery(id: string, params?: AnswerCallbackQueryParams): Promise<void>;

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
  abstract sendInlineQuery(botId: ID, chatId: ID, params?: SendInlineQueryParams): Promise<InlineQueryAnswer>;

  /**
   * Answer an inline query. Bot-only.
   *
   * @method iq
   * @param id The identifier of the inline query to answer.
   * @param results The results to answer with.
   */
  abstract answerInlineQuery(id: string, results: InlineQueryResult[], params?: AnswerInlineQueryParams): Promise<void>;

  //
  // ========================= BOTS ========================= //
  //

  /**
   * Set the bot's description in the given language. Bot-only.
   *
   * @method bo
   */
  abstract setMyDescription(params?: { description?: string; languageCode?: string }): Promise<void>;

  /**
   * Set the bot's name in the given language. Bot-only.
   *
   * @method bo
   */
  abstract setMyName(params?: { name?: string; languageCode?: string }): Promise<void>;

  /**
   * Set the bot's short description in the given language. Bot-only.
   *
   * @method bo
   */
  abstract setMyShortDescription(params?: { shortDescription?: string; languageCode?: string }): Promise<void>;

  /**
   * Get the bot's description in the given language. Bot-only.
   *
   * @method bo
   * @returns The current bot's description in the specified language.
   */
  abstract getMyDescription(params?: { languageCode?: string }): Promise<string>;

  /**
   * Get the bot's name in the given language. Bot-only.
   *
   * @method bo
   * @returns The current bot's name in the specified language.
   */
  abstract getMyName(params?: { languageCode?: string }): Promise<string>;

  /**
   * Get the bot's short description in the given language. Bot-only.
   *
   * @method bo
   * @returns The current bot's short description in the specified language.
   */
  abstract getMyShortDescription(params?: { languageCode?: string }): Promise<string>;

  /**
   * Set the bot's commands in the given scope and/or language. Bot-only.
   *
   * @method bo
   * @param commands The commands to set.
   */
  abstract setMyCommands(commands: BotCommand[], params?: SetMyCommandsParams): Promise<void>;

  /**
   * Get the bot's commands in the given scope and/or language. Bot-only.
   *
   * @method bo
   * @returns The current bot's commands in the specified language.
   */
  abstract getMyCommands(params?: GetMyCommandsParams): Promise<BotCommand[]>;

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
  abstract setReactions(chatId: ID, messageId: number, reactions: Reaction[], params?: SetReactionsParams): Promise<void>;

  /**
   * Make a reaction to a message.
   *
   * @method re
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message to add the reaction to.
   * @param reaction The reaction to add.
   */
  abstract addReaction(chatId: ID, messageId: number, reaction: Reaction, params?: AddReactionParams): Promise<void>;

  /**
   * Undo a reaction made to a message.
   *
   * @method re
   * @param chatId The identifier of the chat which the message belongs to.
   * @param messageId The identifier of the message which the reaction was made to.
   * @param reaction The reaction to remove.
   */
  abstract removeReaction(chatId: ID, messageId: number, reaction: Reaction): Promise<void>;

  /**
   * Clear recent reactions. User-only.
   *
   * @method re
   */
  abstract clearRecentReactions(): Promise<void>;

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
  abstract createStory(chatId: ID, content: InputStoryContent, params?: CreateStoryParams): Promise<Story>;

  /**
   * Retrieve multiple stories. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyIds The identifiers of the stories to retrieve.
   * @returns The retrieved stories.
   */
  abstract getStories(chatId: ID, storyIds: number[]): Promise<Story[]>;

  /**
   * Retrieve a single story. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyId The identifier of the story to retrieve.
   * @returns The retrieved story.
   */
  abstract getStory(chatId: ID, storyId: number): Promise<Story | null>;

  /**
   * Delete multiple stories. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyIds The identifiers of the stories to delete.
   */
  abstract deleteStories(chatId: ID, storyIds: number[]): Promise<void>;

  /**
   * Delete a single story. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyId The identifier of the story to delete.
   */
  abstract deleteStory(chatId: ID, storyId: number): Promise<void>;
  /**
   * Add multiple stories to highlights. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyIds The identifiers of the stories to add to highlights.
   */
  abstract addStoriesToHighlights(chatId: ID, storyIds: number[]): Promise<void>;

  /**
   * Add a single story to highlights. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyId The identifier of the story to add to highlights.
   */
  abstract addStoryToHighlights(chatId: ID, storyId: number): Promise<void>;

  /**
   * Remove multiple stories from highlights. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyIds The identifiers of the stories to remove from highlights.
   */
  abstract removeStoriesFromHighlights(chatId: ID, storyIds: number[]): Promise<void>;

  /**
   * Remove a single story from highlights. User-only.
   *
   * @method st
   * @param chatId The identifier of a chat.
   * @param storyId The identifier of the story to remove from highlights.
   */
  abstract removeStoryFromHighlights(chatId: ID, storyId: number): Promise<void>;

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
  abstract createStoryAlbum(chatId: ID, name: string, storyIds: number[]): Promise<StoryAlbum>;

  /**
   * Set the name of a story album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including the album.
   * @param albumId The identifier of the album to rename.
   * @param name The new name of the album.
   */
  abstract setStoryAlbumName(chatId: ID, albumId: number, name: string): Promise<StoryAlbum>;

  /**
   * Add multiple stories to an album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including the album.
   * @param albumId The identifier of an album.
   * @param storyIds The identifiers of the stories to add.
   */
  abstract addStoriesToAlbum(chatId: ID, albumId: number, storyIds: number[]): Promise<StoryAlbum>;

  /**
   * Add a single story to an album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including the album.
   * @param albumId The identifier of an album.
   * @param storyIds The identifier of the story to add.
   */
  abstract addStoryToAlbum(chatId: ID, albumId: number, storyId: number): Promise<StoryAlbum>;

  /**
   * Remove multiple stories from an album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including the album.
   * @param albumId The identifier of an album.
   * @param storyIds The identifiers of the stories to remove.
   */
  abstract removeStoriesFromAlbum(chatId: ID, albumId: number, storyIds: number[]): Promise<StoryAlbum>;

  /**
   * Remove a single story from an album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including the album.
   * @param albumId The identifier of an album.
   * @param storyIds The identifier of the story to remove.
   */
  abstract removeStoryFromAlbum(chatId: ID, albumId: number, storyId: number): Promise<StoryAlbum>;

  /**
   * Reorder stories in an album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including the album.
   * @param albumId The identifier of an album.
   * @param storyIds The new order of stories.
   */
  abstract reorderStoriesInAlbum(chatId: ID, albumId: number, storyIds: number[]): Promise<StoryAlbum>;

  /**
   * Get story albums in a chat. User-only.
   *
   * @method sa
   * @param chatId The identifier of a chat including albums.
   */
  abstract getStoryAlbums(chatId: ID): Promise<StoryAlbum[]>;

  /**
   * Get stories inside an album. User-only.
   *
   * @method sa
   * @param chatId The identifier of the chat including albums.
   * @param albumId The identifier of an album.
   */
  abstract getStoriesInAlbum(chatId: ID, albumId: number): Promise<AlbumStoryList>;

  //
  // ========================= NETWORK STATISTICS ========================= //
  //

  /**
   * Get network statistics. This might not always be available.
   *
   * @method ns
   */
  abstract getNetworkStatistics(): Promise<NetworkStatistics>;

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
  abstract startVideoChat(chatId: ID, params?: StartVideoChatParams): Promise<VideoChatActive>;

  /**
   * Schedule a video chat. User-only.
   *
   * @method vc
   * @param chatId The identifier of a chat to schedule the video chat in.
   * @param startAt A point in time within the future in which the video chat will be started.
   * @returns The scheduled video chat.
   */
  abstract scheduleVideoChat(chatId: ID, startAt: number, params?: ScheduleVideoChatParams): Promise<VideoChatScheduled>;

  /**
   * Join a video chat. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   * @param params_ WebRTC connection parameters.
   * @returns Parameters to be passed to the used WebRTC library.
   */
  abstract joinVideoChat(id: string, params_: string, params?: JoinVideoChatParams): Promise<string>;

  /**
   * Leave a video chat. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   */
  abstract leaveVideoChat(id: string): Promise<void>;

  /**
   * Join a live stream. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   */
  abstract joinLiveStream(id: string): Promise<void>;

  /**
   * Get a video chat. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   * @cache
   */
  abstract getVideoChat(id: string): Promise<VideoChat>;

  /**
   * Get live stream channels. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   */
  abstract getLiveStreamChannels(id: string): Promise<LiveStreamChannel[]>;

  /**
   * Download a live stream segment. User-only.
   *
   * @method vc
   * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
   * @param channelId Stream channel ID.
   * @param scale Stream channel scale.
   * @param timestamp Millisecond timestamp of the chunk to download.
   */
  abstract downloadLiveStreamSegment(id: string, channelId: number, scale: number, timestamp: number, params?: DownloadLiveStreamSegmentParams): Promise<Uint8Array>;

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
  abstract answerPreCheckoutQuery(preCheckoutQueryId: string, ok: boolean, params?: AnswerPreCheckoutQueryParams): Promise<void>;

  /**
   * Refund a star payment. Bot-only.
   *
   * @method pa
   * @param userId The identifier of the user that was charged.
   * @param telegramPaymentChargeId The identifier of the charge.
   */
  abstract refundStarPayment(userId: ID, telegramPaymentChargeId: string): Promise<void>;

  /**
   * Get the star balance of a chat.
   *
   * @method pa
   * @param chatId The identifier of the chat to get the star balance for.
   */
  abstract getStarBalance(chatId: ID): Promise<StarAmount>;

  /**
   * Get the TON balance of a chat.
   *
   * @method pa
   * @param chatId The identifier of the chat to get the TON balance for.
   */
  abstract getTonBalance(chatId: ID): Promise<number>;

  //
  // ========================= CONTACTS ========================= //
  //

  /**
   * Get contacts. User-only.
   *
   * @method co
   */
  abstract getContacts(): Promise<User[]>;

  /**
   * Delete multiple contacts. User-only.
   *
   * @method co
   * @param userIds The identifiers of contacts to delete.
   */
  abstract deleteContacts(userIds: ID[]): Promise<void>;

  /**
   * Delete a single contact. User-only.
   *
   * @method co
   * @param userId The identifier of the contact to delete.
   */
  abstract deleteContact(userId: ID): Promise<void>;

  /**
   * Add a contact. User-only.
   *
   * @method co
   * @param userId The identifier of the user to add as contact.
   * @param firstName The contact's first name.
   */
  abstract addContact(userId: ID, firstName: string, params?: AddContactParams): Promise<void>;

  /**
   * Set a contact note.
   *
   * @method co
   * @param userId The identifier of the user to update the note for.
   */
  abstract setContactNote(userId: ID, params?: SetContactNoteParams): Promise<void>;

  //
  // ========================= TRANSLATIONS ========================= //
  //

  /**
   * Get translations. User-only.
   *
   * @method ta
   * @cache
   */
  abstract getTranslations(params?: GetTranslationsParams): Promise<Translation[]>;

  //
  // ========================= GIFTS ========================= //
  //

  /**
   * Get available gifts.
   *
   * @method gf
   */
  abstract getGifts(): Promise<Gift[]>;

  /**
   * Get gifts claimed by a user or a channel. User-only.
   *
   * @method gf
   * @param chatId The identifier of a user or a channel to get gifts for.
   */
  abstract getClaimedGifts(chatId: ID, params?: GetClaimedGiftsParams): Promise<ClaimedGifts>;

  /**
   * Send a gift.
   *
   * @method gf
   * @param chatId The identifier of a user or a channel to send the gift to.
   * @param giftId The identifier of the gift to send.
   */
  abstract sendGift(chatId: ID, giftId: string, params?: SendGiftParams): Promise<void>;

  /**
   * Sell a gift.
   *
   * @method gf
   * @param gift The gift to sell.
   */
  abstract sellGift(gift: InputGift): Promise<void>;

  /**
   * Craft gifts.
   *
   * @method gf
   * @param gifts The gifts to craft.
   */
  abstract craftGifts(gifts: InputGift[]): Promise<void>;

  /**
   * Get a gift using its slug.
   *
   * @method gf
   * @param slug The slug of a gift.
   */
  abstract getGift(slug: string): Promise<Gift>;

  /**
   * Transfer a gift. User-only.
   *
   * @method gf
   * @param chatId The identifier of a chat to transfer the gift to.
   * @param gift The gift to transfer.
   */
  abstract transferGift(chatId: ID, gift: InputGift): Promise<void>;

  //
  // ========================= GIFT COLLECTIONS ========================= //
  //

  /**
   * Get gift collections of a chat. User-only.
   *
   * @method gc
   * @param chatId The identifier of a chat to get gift collections for.
   */
  abstract getGiftCollections(chatId: ID): Promise<GiftCollection[]>;

  /**
   * Create a gift collection. User-only.
   *
   * @method gc
   * @param chatId The identifier of a chat to create the gift collection in.
   * @param name The name of the collection.
   * @param gifts The collection's initial gifts.
   */
  abstract createGiftCollection(chatId: ID, name: string, gifts: InputGift[]): Promise<GiftCollection>;

  /**
   * Set the name of a gift collection. User-only.
   *
   * @method gc
   * @param chatId The identifier of the chat that includes the gift collection.
   * @param collectionId The identifier of a gift collection.
   * @param name The gift collection's new name.
   */
  abstract setGiftCollectionName(chatId: ID, collectionId: number, name: string): Promise<GiftCollection>;

  /**
   * Add gifts to a gift collection. User-only.
   *
   * @method gc
   * @param chatId The identifier of the chat that includes the gift collection.
   * @param collectionId The identifier of a gift collection.
   * @param gifts The gifts to add to the collection.
   */
  abstract addGiftsToCollection(chatId: ID, collectionId: number, gifts: InputGift[]): Promise<GiftCollection>;

  /**
   * Remove gifts from a gift collection. User-only.
   *
   * @method gc
   * @param chatId The identifier of the chat that includes the gift collection.
   * @param collectionId The identifier of a gift collection.
   * @param gifts The gifts to remove from the collection.
   */
  abstract removeGiftsFromCollection(chatId: ID, collectionId: number, gifts: InputGift[]): Promise<GiftCollection>;

  /**
   * Reorder gifts in a gift collection. User-only.
   *
   * @method gc
   * @param chatId The identifier of the chat that includes the gift collection.
   * @param collectionId The identifier of a gift collection.
   * @param gifts The gifts to remove from the collection.
   */
  abstract reorderGiftsInCollection(chatId: ID, collectionId: number, gifts: InputGift[]): Promise<GiftCollection>;

  /**
   * Delete a gift collection. User-only.
   *
   * @method gc
   * @param chatId The identifier of the chat that includes the gift collection.
   * @param collectionId The identifier of a gift collection.
   */
  abstract deleteGiftCollection(chatId: ID, collectionId: number): Promise<void>;

  //
  // ========================= TAKEOUTS ========================= //
  //

  /**
   * Start a takeout session. User-only.
   *
   * @method to
   * @returns The identifier of the takeout session.
   */
  abstract startTakeoutSession(params?: StartTakeoutSessionParams): Promise<string>;

  /**
   * End a takeout session. User-only.
   *
   * @method to
   * @param takeoutId The identifier of a takeout session.
   */
  abstract endTakeoutSession(takeoutId: string, params?: EndTakeoutSessionParams): Promise<void>;

  /**
   * Get left channels. User-only.
   *
   * @method to
   * @param takeoutId The identifier of a takeout session.
   */
  abstract getLeftChannels(takeoutId: string, params?: GetLeftChannelsParams): Promise<LeftChannelList>;
}
