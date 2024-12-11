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

import { MaybePromise } from "../1_utilities.ts";
import { BotCommandScope, ChatListItem, ChatMemberRights, FileSource, ID, InlineQueryResultButton, LinkPreview, MessageEntity, MessageSearchFilter, ParseMode, ReplyMarkup, SelfDestructOption, StoryInteractiveArea, StoryPrivacy } from "../3_types.ts";
import { ReplyTo } from "../types/2_reply_to.ts";

export interface AnswerCallbackQueryParams {
  /** A text to be shown to the user. */
  text?: string;
  /** Whether to show the text as an alert (popup). */
  alert?: boolean;
  /** A URL to be opened. */
  url?: string;
  /** TTL of answer caches in seconds. */
  cacheTime?: number;
}

export interface SignInParamsUser<S = string> {
  /** A user phone number or a function that returns it. */
  phone: S | (() => MaybePromise<S>);
  /** A verification code or a function that returns it. */
  code: S | (() => MaybePromise<S>);
  /** An account password or a function that returns it. */
  password: S | ((hint: string | null) => MaybePromise<S>);
}

export interface SignInParamsBot {
  /** A bot token. */
  botToken: string;
}

export type SignInParams = SignInParamsUser | SignInParamsBot;

export interface _BusinessConnectionIdCommon {
  /** The identifier of a business connection ID to perform the action on. Bot-only. */
  businessConnectionId?: string;
}

export interface _ReplyMarkupCommon {
  /** The reply markup of the message. Bot-only. */
  replyMarkup?: ReplyMarkup;
}

export interface _PaidBroadcastCommon {
  paidBroadcast?: boolean;
}

export interface _SendCommon extends _BusinessConnectionIdCommon, _PaidBroadcastCommon {
  /** Whether to send the message in a silent way without making a sound on the recipients' clients. */
  disableNotification?: boolean;
  /** Whether to protect the contents of the message from copying and forwarding. */
  protectContent?: boolean;
  /** Information on what the message is replying to. */
  replyTo?: ReplyTo;
  /** The identifier of a thread to send the message to. */
  messageThreadId?: number;
  /** The identifier of a chat to send the message on behalf of. User-only. */
  sendAs?: ID;
  /** The identifier of a message effect to be attached to the message. */
  effectId?: number;
  /** If specified, the message will be scheduled to be sent at that date. User-only. */
  sendAt?: Date;
}
export interface SendMessageParams extends _SendCommon, _ReplyMarkupCommon {
  /** The parse mode to use. If not provided, the default parse mode will be used. */
  parseMode?: ParseMode;
  /** The message's entities. */
  entities?: MessageEntity[];
  /** The message's link preview. */
  linkPreview?: LinkPreview;
}

export interface SendChatActionParams extends _BusinessConnectionIdCommon {
  messageThreadId?: number;
}

export interface EditMessageParams extends _BusinessConnectionIdCommon, _ReplyMarkupCommon {
  /** The parse mode to use. If not provided, the default parse mode will be used. */
  parseMode?: ParseMode;
  /** The message's entities. */
  entities?: MessageEntity[];
  /** The message's link preview. */
  linkPreview?: LinkPreview;
}

export interface EditMessageReplyMarkupParams extends _BusinessConnectionIdCommon, _ReplyMarkupCommon {
}

export interface EditMessageMediaParams extends _BusinessConnectionIdCommon, _ReplyMarkupCommon {
}

export interface EditInlineMessageMediaParams extends _ReplyMarkupCommon {
}

export interface ForwardMessagesParams extends Omit<_SendCommon, "replyToMessageId" | "replyMarkup"> {
  /** Whether to not include the original sender of the message that is going to be forwarded. */
  dropSenderName?: boolean;
  /** Whether to not include the original caption of the message that is going to be forwarded. */
  dropCaption?: boolean;
}

export interface SendPollParams extends _SendCommon, _ReplyMarkupCommon {
  /** The entities of the poll's question. */
  questionEntities?: MessageEntity[];
  /** The parse mode to use for the poll's question. If not provided, the default parse mode will be used. */
  questionParseMode?: ParseMode;
  /** The parse mode to use for the poll's options. If not provided, the default parse mode will be used. */
  optionParseMode?: ParseMode;
  /** Whether the poll should be anonymous. */
  isAnonymous?: boolean;
  /** The type of the poll. */
  type?: "quiz" | "regular";
  /** Whether multiple selections should be allowed. Only valid for regular polls. */
  allowMultipleAnswers?: boolean;
  /** Index of the correct option. Required for quiz polls. */
  correctOptionIndex?: number;
  /** A text that will be shown to the user when the poll is answered. Only valid for quiz polls. */
  explanation?: string;
  /** The parse mode to use for the explanation. If not provided, the default parse mode will be used. */
  explanationParseMode?: ParseMode;
  /** The explanation's entities. */
  explanationEntities?: MessageEntity[];
  /** Duration of the poll in seconds. Must be in the range of 5-600. Cannot be used simultaneously with `closeDate`. */
  openPeriod?: number;
  /** The time in which the poll will be closed. Must be at least 5 seconds in the future, and no more than 600. Cannot be used simultaneously with `openPeriod`. */
  closeDate?: Date;
  /** Whether the poll should be closed as soon as it is sent, allowing no answers. */
  isClosed?: boolean;
}

export interface SendInvoiceParams extends _SendCommon, _ReplyMarkupCommon {
  providerToken?: string;
  maxTipAmount?: number;
  suggestedTipAmounts?: number[];
  startParameter?: string;
  providerData?: string;
  photoUrl?: string;
  photoSize?: number;
  photoWidth?: number;
  photoHeight?: number;
  needName?: boolean;
  needPhoneNumber?: boolean;
  needEmail?: boolean;
  needShippingAddress?: boolean;
  sendPhoneNumberToProvider?: boolean;
  sendEmailToProvider?: boolean;
  flexible?: boolean;
}

export interface DownloadParams {
  /** Size of each download chunk in bytes. */
  chunkSize?: number;
  /** Download offset in bytes. */
  offset?: number;
  /** Download abort signal. */
  signal?: AbortSignal;
}

export interface _UploadCommon {
  /** The file name to assign if applicable. */
  fileName?: string;
  /** The file's size. */
  fileSize?: number;
  /** The mime type to assign if applicable. */
  mimeType?: string;
  /** Size of each upload chunk in bytes. */
  chunkSize?: number;
  /** Upload abort signal. */
  signal?: AbortSignal;
}

export interface AnswerInlineQueryParams {
  /** TTL of the caches of the results in seconds. Defaults to 300. */
  cacheTime?: number;
  /** Whether the result caches should only be for the user who made the inline query. */
  isPersonal?: boolean;
  /** A parameter to be passed to the same query next time when the user’s client asks for more results. Can’t be longer than 64 bytes. */
  nextOffset?: string;
  isGallery?: boolean;
  /** A button to be shown along with the results. */
  button?: InlineQueryResultButton;
}

export interface SetMyCommandsParams {
  /** A two-letter ISO 639-1 language code. If not set, the command details will be updated for users having an unsupported language. */
  languageCode?: string;
  /** The scope in which the commands are available. */
  scope?: BotCommandScope;
}

export type GetMyCommandsParams = SetMyCommandsParams;

export interface DeleteMessagesParams {
  /** Whether to delete the messages only for this side. */
  onlyForMe?: boolean;
}

export interface DeleteMessageParams {
  /** Whether to delete the message only for this side. */
  onlyForMe?: boolean;
}

export interface _CaptionCommon {
  /** The caption to attach. */
  caption?: string;
  /** The caption's entities. */
  captionEntities?: MessageEntity[];
  /** The parse mode to use for the caption. If not provided, the default parse mode will be used. */
  parseMode?: ParseMode;
}
export interface _SpoilCommon {
  /** Whether to mark the media as a spoiler. */
  hasSpoiler?: boolean;
}
export interface _StarCount {
  /** The amount of stars that will be required to unlock the media. */
  starCount?: number;
}
export interface SendPhotoParams extends _CaptionCommon, _SpoilCommon, _UploadCommon, _SendCommon, _ReplyMarkupCommon, _StarCount {
  /** The photo's self-destruct preference. */
  selfDestruct?: SelfDestructOption;
}

export interface SetChatPhotoParams extends _UploadCommon {
}

export interface _ThumbnailCommon {
  /** A thumbnail to assign. Cannot be a URL. */
  thumbnail?: FileSource;
}
export interface SendDocumentParams extends _CaptionCommon, _ThumbnailCommon, _UploadCommon, _SendCommon {
}

export interface SendStickerParams extends _UploadCommon, _SendCommon {
  /** Emoji to bind to the sticker. */
  emoji?: string;
}

export interface SendVideoParams extends _CaptionCommon, _ThumbnailCommon, _SpoilCommon, _UploadCommon, _SendCommon, _StarCount {
  /** The duration of the video in seconds. */
  duration?: number;
  /** The width of the photo in pixels. */
  width?: number;
  /** The height of the photo in pixels. */
  height?: number;
  /** Whether the video is suitable for streaming. */
  supportsStreaming?: boolean;
  /** The video's self-destruct preference. */
  selfDestruct?: SelfDestructOption;
}

export interface SendAnimationParams extends _CaptionCommon, _ThumbnailCommon, _SpoilCommon, _UploadCommon, _SendCommon {
  /** The duration of the animation in seconds. */
  duration?: number;
  /** The width of the animation file. */
  width?: number;
  /** The height of the animation file. */
  height?: number;
}

export interface SendVoiceParams extends _CaptionCommon, _ThumbnailCommon, _UploadCommon, _SendCommon {
  /** The duration of the voice message in seconds. */
  duration?: number;
}

export interface SendAudioParams extends _CaptionCommon, _ThumbnailCommon, _UploadCommon, _SendCommon {
  /** The duration of the audio file in seconds. */
  duration?: number;
  /** Names of the entities that are being featured in the audio. */
  performer?: string;
  /** The title of the audio. */
  title?: string;
}

export interface SendVideoNoteParams extends _CaptionCommon, _ThumbnailCommon, _UploadCommon, _SendCommon {
  /** The duration of the video note in seconds. */
  duration?: number;
  /** The video's width and height (diameter). */
  length?: number;
}

export interface SendMediaGroupParams extends _SendCommon {
}

export interface SendLocationParams extends _SendCommon, _ReplyMarkupCommon {
  /** The accuracy radius of the location in meters. Must be in the range of 0-1500. */
  horizontalAccuracy?: number;
  /** The duration in which the location can be updated in seconds. Must be in the range of 80-864,000. */
  livePeriod?: number;
  /** The direction which the user is moving towards. Must be in the range of 1-350. */
  heading?: number;
  /** The maximum distance for proximity alerts on approaching another chat member in meters. Must be in the range 1-100,000. */
  proximityAlertRadius?: number;
}

export interface SendVenueParams extends _SendCommon, _ReplyMarkupCommon {
  /** Foursquare identifier of the venue. */
  foursquareId?: string;
  /** Foursquare type of the venue, if known. For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream". */
  foursquareType?: string;
}

export interface SendContactParams extends _SendCommon, _ReplyMarkupCommon {
  /** The contact's last name. */
  lastName?: string;
  /** Additional information in the vCard format. */
  vcard?: string;
}

export interface SendDiceParams extends _SendCommon, _ReplyMarkupCommon {
  /** The type of the dice. Can be 🎲, 🎯, 🏀, ⚽, 🎳, 🎰. Defaults to 🎲. */
  emoji?: "🎲" | "🎯" | "🏀" | "⚽" | "🎳" | "🎰";
}

export interface ReplyParams {
  /** Whether to quote the message that is to be replied. Enabled by default for non-private chats. */
  quote?: boolean;
}

export interface GetHistoryParams {
  /** The identifier of a message. If specified, the chat history will be fetched from that message. */
  fromMessageId?: number;
  /** The maximum number of results to return. Must be in the range of 1-100. Defaults to 100. */
  limit?: number;
}

export interface SetReactionsParams {
  /** Whether to make the new reactions more notable. */
  big?: boolean;
}

export interface AddReactionParams {
  /** Whether to make the new reaction more notable. */
  big?: boolean;
  /** Whether to add the reaction to recent reactions. */
  addToRecents?: boolean;
}

export interface GetChatsParams {
  /** The chat list to get the chats from. Defaults to main. */
  from?: "main" | "archived";
  /** The last chat to get chats after. */
  after?: ChatListItem;
  /** The maximum number of results to return. Must be in the range of 1-100. Defaults to 100. */
  limit?: number;
}

export interface PinMessageParams extends _BusinessConnectionIdCommon {
  /** Whether to pin the message for both sides. For private chats only. */
  bothSides?: boolean;
  /** Whether to silently pin the message. */
  disableNotification?: boolean;
}

export interface UnpinMessageParams extends _BusinessConnectionIdCommon {
}

export interface BanChatMemberParams {
  /** A point in time within the future in which the ban will be reverted. */
  untilDate?: Date;
  /** Whether to delete all of the user's messages. */
  deleteMessages?: boolean;
}

export interface SetChatMemberRightsParams {
  /** The member's new rights. All fields default to `true` if the chat's default member rights allow. This means that this method is the same as unbanChatMember if this parameter is not provided or all of its fields are `true`. */
  rights?: ChatMemberRights;
  /** A point in time within the future in which the restriction will be reverted. */
  untilDate?: Date;
}

export interface CreateStoryParams extends _CaptionCommon, _UploadCommon {
  /** The story's interactive areas. */
  interactiveAreas?: StoryInteractiveArea[];
  /** The story's privacy settings. */
  privacy?: StoryPrivacy;
  /** The period in which the story will be active. */
  activeFor?: number;
  /** Whether to add the story to highlights. */
  highlight?: boolean;
  /** Whether to protect the contents of the story from copying and forwarding. */
  protectContent?: boolean;
}

export interface SearchMessagesParams {
  /** If set, only messages sent by `from` are returned. */
  from?: ID;
  /** A search filter to apply. */
  filter?: MessageSearchFilter;
  /** A message identifier to start searching after. */
  after?: number;
  /** The identifier of a message thread to search in. */
  threadId?: number;
  /** The maximum number of results to return. Must be in the range of 1-100. Defaults to 100. */
  limit?: number;
}

export interface CreateInviteLinkParams {
  /** An optional title to be attached to the link that can only be seen by admins. */
  title?: string;
  /** A point in time within the future in which the invite link will be invalidated. */
  expireAt?: Date;
  /** The times the invite link can be used. Cannot be specified while `requireApproval` is `true`. */
  limit?: number;
  /** Whether an admin must explicitly approve join requests originating from this invite link. Cannot be `true` while `limit` is specified. */
  requireApproval?: boolean;
}

export interface GetCreatedInviteLinksParams {
  /** The identifier of an admin. If specified, only invite links created by this admin will be returned. */
  by?: ID;
  /** The maximum number of results to return. Must be in the range 1-100. Defaults to 100. */
  limit?: number;
  /** Whether only revoked invite links must be returned. */
  revoked?: boolean;
  /** Only get the invite links created after a specific date. */
  afterDate?: Date;
  /** Only get the invite links created after a specific invite link. */
  afterInviteLink?: string;
}

export interface StopPollParams extends _BusinessConnectionIdCommon, _ReplyMarkupCommon {
}

export interface EditMessageLiveLocationParams extends _BusinessConnectionIdCommon, _ReplyMarkupCommon {
  /** The accuracy radius of the location in meters. Must be in the range of 0-1500. */
  horizontalAccuracy?: number;
  /** The direction which the user is moving towards. Must be in the range of 1-350. */
  heading?: number;
  /** The maximum distance for proximity alerts on approaching another chat member in meters. Must be in the range 1-100,000. */
  proximityAlertRadius?: number;
}

export interface SendInlineQueryParams {
  /** The inline query's text. Defaults to empty string. */
  query?: string;
  /** Bot-provided pagination offset. */
  offset?: string;
}

export interface StartVideoChatParams {
  /** The video chat's title. */
  title?: string;
  /** Whether this is going to be a live stream. */
  liveStream?: boolean;
}

export interface ScheduleVideoChatParams extends StartVideoChatParams {
}

export interface JoinVideoChatParams {
  /** The identifier of a chat to join the video chat on behalf of. */
  joinAs?: ID;
  /** Invite hash. */
  inviteHash?: string;
  /** Whether to enable audio. Enabled by default. */
  audio?: boolean;
  /** Whether to enable video. Enabled by default. */
  video?: boolean;
}

export interface DownloadLiveStreamChunkParams {
  /** Video quality. */
  quality?: "low" | "medium" | "high";
  /** Download abort signal. */
  signal?: AbortSignal;
}

export interface AnswerPreCheckoutQueryParams {
  error?: string;
}

export interface ApproveJoinRequestsParams {
  /** If specified, only join requests initiated from this invite link will be approved. */
  inviteLink?: string;
}

export interface DeclineJoinRequestsParams {
  /** If specified, only join requests initiated from this invite link will be declined. */
  inviteLink?: string;
}

export interface AddChatMemberParams {
  /** The number of current messages to make visible to the user that is about to be added. */
  historyLimit?: number;
}

export interface GetChatMembersParams {
  offset?: number;
  limit?: number;
}

export interface CreateGroupParams {
  /** Users to invite after creating the group. */
  users?: ID[];
  /** Time to live of the messages of the group that is to be created in seconds. */
  messageTtl?: number;
}

export interface CreateSupergroupParams {
  /** The description of the supergroup that is to be created. */
  description?: string;
  /** Whether a forum should be created. */
  forum?: boolean;
  /** Time to live of the messages of the supergroup that is to be created in seconds. */
  messageTtl?: number;
}

export interface CreateChannelParams {
  /** The description of the channel that is to be created. */
  description?: string;
  /** Time to live of the messages of the channel that is to be created in seconds. */
  messageTtl?: number;
}

export interface StartBotParams {
  /** A deeplink to follow. */
  deeplink?: string;
  /** If specified, the bot will be started in that chat instead of its own private chat. */
  chatId?: ID;
}

export interface SetEmojiStatusParams {
  /** If specified, the emoji status will be unset in that date. */
  until?: Date;
}

export interface AddContactParams {
  firstName?: string;
  lastName?: string;
  sharePhoneNumber?: boolean;
}
