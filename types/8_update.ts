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

import type { Api } from "../2_tl.ts";
import type { AuthorizationState } from "./0_authorization_state.ts";
import type { ConnectionState } from "./0_connection_state.ts";
import type { EmojiStatus } from "./0_emoji_status.ts";
import type { MessageReference } from "./0_message_reference.ts";
import type { StoryReference } from "./0_story_reference.ts";
import type { Translation } from "./0_translation.ts";
import type { UploadProgress } from "./0_upload_progress.ts";
import type { VideoChat } from "./0_video_chat.ts";
import type { VoiceTranscription } from "./0_voice_transcription.ts";
import type { BotCommands } from "./1_bot_commands.ts";
import type { ChatAction } from "./1_chat_action.ts";
import type { MessageInteractions } from "./2_message_interactions.ts";
import type { MessageReactionCount } from "./2_message_reaction_count.ts";
import type { PollAnswer } from "./2_poll_answer.ts";
import type { BusinessConnection } from "./3_business_connection.ts";
import type { ChosenInlineResult } from "./3_chosen_inline_result.ts";
import type { InlineQuery } from "./3_inline_query.ts";
import type { MessageDraft } from "./3_message_draft.ts";
import type { MessageReactions } from "./3_message_reactions.ts";
import type { PreCheckoutQuery } from "./3_pre_checkout_query.ts";
import type { Story } from "./3_story.ts";
import type { ChatMemberUpdated } from "./4_chat_member_updated.ts";
import type { JoinRequest } from "./4_join_request.ts";
import type { Poll } from "./4_poll.ts";
import type { LinkPreview } from "./5_link_preview.ts";
import type { Message } from "./6_message.ts";
import type { CallbackQuery } from "./7_callback_query.ts";
import type { ChatListItem } from "./7_chat_list_item.ts";

/**
 * A client's connection state was changed.
 *
 * ```
 * client.on("connectionState", (ctx) => {
 *   console.log("The client's connection state is now:", ctx.update.connectionState);
 * });
 * ```
 * @unlisted
 */
export interface UpdateConnectionState {
  type: "connectionState";
  /** The client's new connection state */
  connectionState: ConnectionState;
}

/**
 * A client's authorization state was changed.
 *
 * ```
 * client.on("authorizationState", async (ctx) => {
 *   if (ctx.update.authorizationState.authorized) {
 *     const me = await ctx.client.getMe();
 *     console.log("The client is now authorized as", me.firstName);
 *   } else {
 *     console.log("The client is no longer authorized.")
 *   }
 * });
 * ```
 * @unlisted
 */
export interface UpdateAuthorizationState {
  type: "authorizationState";
  /** The client's new authorization state */
  authorizationState: AuthorizationState;
}

/**
 * A low-level (Telegram API) update.
 *
 * ```
 * client.on("update", async (ctx) => {
 *   // ctx.update.update
 * });
 * ```
 * @unlisted
 */
export interface UpdateLowLevel {
  type: "update";
  /** The Telegram API update. */
  update: Api.Update;
}

/**
 * A message was sent or received.
 *
 * ```
 * // Handle text messages
 * client.on("message:text", (ctx) => {
 *   const receivedOrSent = ctx.update.message.out ? "sent" : "received";
 *   console.log("Just", receivedOrSent, "a text message:", ctx.update.message.text);
 * });
 *
 * // Handle other messages
 * client.on("message", (ctx) => {
 *   if (ctx.update.message.out) {
 *    console.log("Just sent a message.");
 *   }
 * });
 * ```
 *
 * Note that updates on outgoing messages are disabled by default for bots.
 * @unlisted
 */
export interface UpdateNewMessage {
  type: "message";
  /** The sent or received message */
  message: Message;
}

/**
 * A message was edited.
 *
 * ```
 * client.on("editedMessage", (ctx) => {
 *   console.log("A message was just edited.");
 *   // ctx.update.editedMessage
 * });
 * ```
 * @unlisted
 */
export interface UpdateMessageEdited {
  type: "editedMessage";
  /** The edited message. */
  editedMessage: Message;
}

/**
 * A message was scheduled. User-only.
 *
 * ```
 * client.on("scheduledMessage", (ctx) => {
 *   console.log("A message was just scheduled.");
 *   // ctx.update.scheduledMessage
 * });
 * ```
 * @unlisted
 */
export interface UpdateMessageScheduled {
  type: "scheduledMessage";
  /** The scheduled message. */
  scheduledMessage: Message;
}

/**
 * One or more messages were deleted.
 *
 * ```
 * client.on("deletedMessages", (ctx) => {
 *   for (const deletedMessage of ctx.update.deletedMessages) {
 *     console.log(deletedMessage);
 *   }
 * });
 * ```
 * @unlisted
 */
export interface UpdateMessagesDeleted {
  type: "deletedMessages";
  /** The deleted messages */
  deletedMessages: MessageReference[];
  isScheduled?: boolean;
  businessConnectionId?: string;
}

/**
 * A callback query was made (a user presses an inline button). Bot-only.
 *
 * ```
 * client.on("callbackQuery", async (ctx) => {
 *   await ctx.answerCallbackQuery(ctx.update.callbackQuery.data, { alert: true });
 * });
 * ```
 * @unlisted
 */
export interface UpdateCallbackQuery {
  type: "callbackQuery";
  /** The received callback query */
  callbackQuery: CallbackQuery;
}

/**
 * An inline query was received. Bot-only.
 *
 * ```
 * client.on("inlineQuery", (ctx) => {
 *   const { from, query } = ctx.update.inlineQuery;
 *   console.log("User", from.id, "sent an inline query:", query);
 * });
 * ```
 * @unlisted
 */
export interface UpdateInlineQuery {
  type: "inlineQuery";
  /** The received inline query */
  inlineQuery: InlineQuery;
}

/**
 * An inline query result was chosen. Bot-only.
 * @unlisted
 */
export interface UpdateChosenInlineResult {
  type: "chosenInlineResult";
  /** The chosen inline query result */
  chosenInlineResult: ChosenInlineResult;
}

/**
 * A new chat was added to the chat list. User-only.
 * @unlisted
 */
export interface UpdateNewChat {
  type: "newChat";
  /** The newly added chat */
  newChat: ChatListItem;
}

/**
 * A chat in the chat list was edited. User-only.
 * @unlisted
 */
export interface UpdateEditedChat {
  type: "editedChat";
  editedChat: ChatListItem;
}

/**
 * A chat was removed from the chat list. User-only.
 * @unlisted
 */
export interface UpdateDeletedChat {
  type: "deletedChat";
  /** The chat that was deleted */
  deletedChat: { chatId: number };
}

/**
 * The interactions of a message were updated. User-only.
 * @unlisted
 */
export interface UpdateMessageInteractions {
  type: "messageInteractions";
  /** The new message interactions */
  messageInteractions: MessageInteractions;
}

/**
 * The anonymous reactions made to a message were changed. Bot-only.
 * @unlisted
 */
export interface UpdateMessageReactionCount {
  type: "messageReactionCount";
  /** The new message reactions */
  messageReactionCount: MessageReactionCount;
}

/**
 * The reactions made to a message by a user were changed. Bot-only.
 * @unlisted
 */
export interface UpdateMessageReactions {
  type: "messageReactions";
  messageReactions: MessageReactions;
}

/**
 * The status of a chat member was changed.
 * @unlisted
 */
export interface UpdateChatMember {
  type: "chatMember";
  chatMember: ChatMemberUpdated;
}

/**
 * The status of the current account was changed in a chat.
 * @unlisted
 */
export interface UpdateMyChatMember {
  type: "myChatMember";
  myChatMember: ChatMemberUpdated;
}

/**
 * A story was deleted.
 *
 * ```
 * client.on("deletedStory", (ctx) => {
 *   console.log("The story", ctx.update.deletedStory, "was deleted");
 * });
 * ```
 * @unlisted
 */
export interface UpdateDeletedStory {
  type: "deletedStory";
  deletedStory: StoryReference;
}

/**
 * A story was posted.
 *
 * ```
 * client.on("story", (ctx) => {
 *   console.log("title" in ctx.chat ? ctx.chat.title : ctx.chat.firstName, "posted a story");
 *   console.log(ctx.update.story);
 * });
 * ```
 * @unlisted
 */
export interface UpdateNewStory {
  type: "story";
  story: Story;
}

/**
 * A business connection was added, modified, or removed.
 *
 * ```
 * client.on("businessConnection", (ctx) => {
 *   console.log("Business connection with", ctx.from.id, ctx.update.businessConnection.isEnabled ? "created" : "lost");
 *   console.log(ctx.update.businessConnection);
 * });
 * ```
 * @unlisted
 */
export interface UpdateBusinessConnection {
  type: "businessConnection";
  businessConnection: BusinessConnection;
}

/**
 * A video chat was started, scheduled, or ended.
 *
 * ```
 * client.on("videoChat", (ctx) => {
 *   console.log("Video chat", ctx.update.videoChat.type);
 *   console.log(ctx.update.videoChat);
 * });
 * ```
 * @unlisted
 */
export interface UpdateVideoChat {
  type: "videoChat";
  videoChat: VideoChat;
}

/** @unlisted */
export interface UpdatePreCheckoutQuery {
  type: "preCheckoutQuery";
  preCheckoutQuery: PreCheckoutQuery;
}

/**
 * A user requested to join a chat. Bot-only.
 * @unlisted
 */
export interface UpdateJoinRequest {
  type: "joinRequest";
  joinRequest: JoinRequest;
}

/**
 * Translations were updated.
 *
 * ```
 * client.on("translations", (ctx) => {
 *   console.log("Translations were just updated.");
 *   // ctx.update.translations
 * });
 * ```
 * @unlisted
 */
export interface UpdateTranslations {
  type: "translations";
  /** The new translations. */
  translations: Translation[];
  /** The platform of the translations that were updated. */
  platform: string;
  /** The language of the translations that were updated. */
  language: string;
}

/**
 * A poll was updated.
 *
 * ```
 * client.on("poll", (ctx) => {
 *   console.log("A poll just changed.");
 *   // ctx.update.poll
 * });
 * ```
 * @unlisted
 */
export interface UpdatePoll {
  type: "poll";
  /** The poll with its new state. */
  poll: Poll;
}

/**
 * A poll was answered.
 *
 * ```
 * client.on("pollAnswer", (ctx) => {
 *   console.log("A poll just got an answer.");
 *   // ctx.update.poll
 * });
 * ```
 * @unlisted
 */
export interface UpdatePollAnswer {
  type: "pollAnswer";
  /** The poll answer. */
  pollAnswer: PollAnswer;
}

/**
 * A voice transcription was updated.
 *
 * ```
 * client.on("voiceTranscription", (ctx) => {
 *   // ctx.update.voiceTranscription
 * });
 * ```
 * @unlisted
 */
export interface UpdateVoiceTranscription {
  type: "voiceTranscription";
  /** The new voice transcription. */
  voiceTranscription: VoiceTranscription;
}

/**
 * A link preview was updated.
 *
 * ```
 * client.on("linkPreview", (ctx) => {
 *   // ctx.update.linkPreview
 * });
 * ```
 * @unlisted
 */
export interface UpdateLinkPreview {
  type: "linkPreview";
  /** The new link preview. */
  linkPreview: LinkPreview;
}

/**
 * An upload has progressed.
 *
 * ```
 * client.on("uploadProgress", (ctx) => {
 *   // ctx.update.uploadProgress
 * });
 * ```
 * @unlisted
 */
export interface UpdateUploadProgress {
  type: "uploadProgress";
  /** The new progress of the upload. */
  uploadProgress: UploadProgress;
}

/**
 * A bot's list of commands changed. User-only.
 *
 * ```
 * client.on("botCommands", (ctx) => {
 *   // ctx.update.botCommands
 * });
 * ```
 * @unlisted
 */
export interface UpdateBotCommands {
  type: "botCommands";
  /** The new command list. */
  botCommands: BotCommands;
}

/**
 * A user's emoji status was changed. User-only.
 *
 * ```
 * client.on("emojiStatus", (ctx) => {
 *   // ctx.update.emojiStatus
 * });
 * ```
 * @unlisted
 */
export interface UpdateEmojiStatus {
  type: "emojiStatus";
  /** The new emoji status. */
  emojiStatus: EmojiStatus;
  userId: number;
}

/**
 * A user's emoji status was removed. User-only.
 *
 * ```
 * client.on("emojiStatusRemoved", (ctx) => {
 *   // ctx.update.emojiStatusRemoved
 * });
 * ```
 * @unlisted
 */
export interface UpdateEmojiStatusRemoved {
  type: "emojiStatusRemoved";
  emojiStatusRemoved: true;
  userId: number;
}

/**
 * A participant of a conversation made an action.
 *
 * ```
 * client.on("chatAction", (ctx) => {
 *   // ctx.update.chatAction
 * });
 * ```
 * @unlisted
 */
export interface UpdateChatAction {
  type: "chatAction";
  chatAction: ChatAction;
}

/**
 * A message draft was received. User-only.
 *
 * ```
 * client.on("messageDraft", (ctx) => {
 *   // ctx.update.messageDraft
 * });
 * ```
 * @unlisted
 */
export interface UpdateMessageDraft {
  type: "messageDraft";
  messageDraft: MessageDraft;
}

/** @unlisted */
export interface UpdateMap {
  message: UpdateNewMessage;
  editedMessage: UpdateMessageEdited;
  scheduledMessage: UpdateMessageScheduled;
  connectionState: UpdateConnectionState;
  authorizationState: UpdateAuthorizationState;
  update: UpdateLowLevel;
  deletedMessages: UpdateMessagesDeleted;
  callbackQuery: UpdateCallbackQuery;
  inlineQuery: UpdateInlineQuery;
  chosenInlineResult: UpdateChosenInlineResult;
  newChat: UpdateNewChat;
  editedChat: UpdateEditedChat;
  deletedChat: UpdateDeletedChat;
  messageInteractions: UpdateMessageInteractions;
  messageReactionCount: UpdateMessageReactionCount;
  messageReactions: UpdateMessageReactions;
  chatMember: UpdateChatMember;
  myChatMember: UpdateMyChatMember;
  deletedStory: UpdateDeletedStory;
  story: UpdateNewStory;
  businessConnection: UpdateBusinessConnection;
  videoChat: UpdateVideoChat;
  preCheckoutQuery: UpdatePreCheckoutQuery;
  joinRequest: UpdateJoinRequest;
  translations: UpdateTranslations;
  poll: UpdatePoll;
  pollAnswer: UpdatePollAnswer;
  voiceTranscription: UpdateVoiceTranscription;
  linkPreview: UpdateLinkPreview;
  uploadProgress: UpdateUploadProgress;
  botCommands: UpdateBotCommands;
  emojiStatus: UpdateEmojiStatus;
  emojiStatusRemoved: UpdateEmojiStatusRemoved;
  chatAction: UpdateChatAction;
  messageDraft: UpdateMessageDraft;
}

/** An incoming update. */
export type Update =
  | UpdateConnectionState
  | UpdateAuthorizationState
  | UpdateLowLevel
  | UpdateNewMessage
  | UpdateMessageEdited
  | UpdateMessageScheduled
  | UpdateMessagesDeleted
  | UpdateCallbackQuery
  | UpdateInlineQuery
  | UpdateChosenInlineResult
  | UpdateNewChat
  | UpdateEditedChat
  | UpdateDeletedChat
  | UpdateMessageInteractions
  | UpdateMessageReactionCount
  | UpdateMessageReactions
  | UpdateChatMember
  | UpdateMyChatMember
  | UpdateDeletedStory
  | UpdateNewStory
  | UpdateBusinessConnection
  | UpdateVideoChat
  | UpdatePreCheckoutQuery
  | UpdateJoinRequest
  | UpdateTranslations
  | UpdatePoll
  | UpdatePollAnswer
  | UpdateVoiceTranscription
  | UpdateLinkPreview
  | UpdateUploadProgress
  | UpdateBotCommands
  | UpdateEmojiStatus
  | UpdateEmojiStatusRemoved
  | UpdateChatAction
  | UpdateMessageDraft;
