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

import { unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { type Api, toJSON } from "../2_tl.ts";
import type { AvailableReactions, BusinessConnection, CallbackQuery, Chat, ChatActionType, ChatMember, ChatP, ChatPChannel, ChatPGroup, ChatPPrivate, ChatPSupergroup, ChatSettings, ChosenInlineResult, ClaimedGifts, FailedInvitation, FileSource, ID, InlineQuery, InlineQueryResult, InputChecklistItem, InputMedia, InputPollOption, InputStoryContent, InviteLink, JoinRequest, Message, MessageAnimation, MessageAudio, MessageChecklist, MessageContact, MessageDice, MessageDocument, MessageInvoice, MessageList, MessageLocation, MessagePhoto, MessagePoll, MessageReactionList, MessageSticker, MessageText, MessageVenue, MessageVideo, MessageVideoNote, MessageVoice, Poll, PriceTag, Reaction, ReplyTo, SlowModeDuration, Story, Topic, Update, User, VideoChatActive, VideoChatScheduled, VoiceTranscription } from "../3_types.ts";
import type { GuestQuery } from "../types/7_guest_query.ts";
import type { AddChatMemberParams, AddContactParams, AddReactionParams, AnswerCallbackQueryParams, AnswerInlineQueryParams, AnswerPreCheckoutQueryParams, ApproveJoinRequestsParams, BanChatMemberParams, CreateInviteLinkParams, CreateStoryParams, CreateTopicParams, DeclineJoinRequestsParams, DeleteMessagesParams, EditInlineMessageCaptionParams, EditInlineMessageMediaParams, EditInlineMessageTextParams, EditMessageCaptionParams, EditMessageLiveLocationParams, EditMessageMediaParams, EditMessageReplyMarkupParams, EditMessageTextParams, EditTopicParams, EnableSignaturesParams, ForwardMessagesParams, GetChatMembersParams, GetClaimedGiftsParams, GetCreatedInviteLinksParams, GetHistoryParams, GetJoinRequestsParams, GetSavedMessagesParams, PinMessageParams, PromoteChatMemberParams, ReplyParams, ScheduleVideoChatParams, SearchMessagesParams, SendAnimationParams, SendAudioParams, SendChecklistParams, SendContactParams, SendDiceParams, SendDocumentParams, SendGiftParams, SendInvoiceParams, SendLocationParams, SendMediaGroupParams, SendMessageDraftParams, SendMessageParams, SendPhotoParams, SendPollParams, SendStickerParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetChatMemberRightsParams, SetChatMemberTagParams, SetChatPhotoParams, SetReactionsParams, StartVideoChatParams, StopPollParams, UpdateChecklistParams } from "./0_params.ts";
import type { ClientGeneric } from "./1_client_generic.ts";
import { type FilterQuery, match, type WithChatType, type WithFilter } from "./3_filters.ts";

export type ContextCommands = string | RegExp | (string | RegExp)[] | {
  names: string | RegExp | (string | RegExp)[];
  prefixes: string | string[];
};

interface StaticHas {
  filterQuery<Q extends FilterQuery>(filter: Q): <C extends Context>(ctx: C) => ctx is WithFilter<typeof ctx, Q>;
  command(commands: ContextCommands, fallbackPrefixes: string | string[] | undefined): <C extends Context>(ctx: C) => ctx is WithFilter<typeof ctx, "message:text">;
  callbackQuery(data: string | RegExp | (string | RegExp)[]): <C extends Context>(ctx: C) => ctx is WithFilter<typeof ctx, "callbackQuery:data">;
  inlineQuery(queries: string | RegExp | (string | RegExp)[]): <C extends Context>(ctx: C) => ctx is WithFilter<typeof ctx, "inlineQuery">;
  chosenInlineResult(queries: string | RegExp | (string | RegExp)[]): <C extends Context>(ctx: C) => ctx is WithFilter<typeof ctx, "chosenInlineResult">;
  chatType<T extends ChatP["type"]>(chatType: T | T[]): <C extends Context>(ctx: C) => ctx is WithChatType<typeof ctx, T>;
}

const staticHas: StaticHas = {
  filterQuery<Q extends FilterQuery>(filter: Q) {
    return <C extends Context>(ctx: C): ctx is WithFilter<typeof ctx, Q> => {
      return match(filter, ctx.update);
    };
  },
  command(commands: ContextCommands, fallbackPrefixes: string | string[] | undefined) {
    const hasText = staticHas.filterQuery("message:text");
    const commands__ = typeof commands === "object" && "names" in commands ? commands.names : commands;
    const commands_ = Array.isArray(commands__) ? commands__ : [commands__];
    const prefixes_ = typeof commands === "object" && "prefixes" in commands ? commands.prefixes : (fallbackPrefixes ?? []);
    const prefixes = Array.isArray(prefixes_) ? prefixes_ : [prefixes_];
    for (const left of prefixes) {
      for (const right of prefixes) {
        if (left === right) {
          continue;
        }
        if (left.startsWith(right) || right.startsWith(left)) {
          throw new InputError("Intersecting prefixes");
        }
      }
    }

    return <C extends Context>(ctx: C): ctx is WithFilter<typeof ctx, "message:text"> => {
      if (!hasText(ctx)) {
        return false;
      }
      const prefixes_ = prefixes.length === 0 ? [!ctx.me?.isBot ? "\\" : "/"] : prefixes;
      if (prefixes_.length === 0) {
        return false;
      }
      const cmd = ctx.update.message.text.split(/\s/, 1)[0];
      const prefix = prefixes_.find((v) => cmd.startsWith(v));
      if (prefix === undefined) {
        return false;
      }
      if (cmd.includes("@")) {
        const username = cmd.split("@", 2)[1];
        if (username.toLowerCase() !== ctx.me!.username?.toLowerCase()) {
          return false;
        }
      }
      const command_ = cmd.split("@", 1)[0].split(prefix, 2)[1].toLowerCase();
      for (const command of commands_) {
        if (typeof command === "string" && (command.toLowerCase() === command_)) {
          return true;
        } else if (command instanceof RegExp && command.test(command_)) {
          return true;
        }
      }
      return false;
    };
  },
  callbackQuery(data: string | RegExp | (string | RegExp)[]) {
    const hasCallbackQueryData = staticHas.filterQuery("callbackQuery:data");
    const data_ = Array.isArray(data) ? data : [data];
    return <C extends Context>(ctx: C): ctx is WithFilter<typeof ctx, "callbackQuery:data"> => {
      if (!hasCallbackQueryData(ctx)) {
        return false;
      }

      for (const data of data_) {
        if (typeof data === "string" && data === ctx.update.callbackQuery.data) {
          return true;
        } else if (data instanceof RegExp && data.test(ctx.update.callbackQuery.data)) {
          return true;
        }
      }
      return false;
    };
  },
  inlineQuery(queries: string | RegExp | (string | RegExp)[]) {
    const hasInlineQuery = staticHas.filterQuery("inlineQuery");
    const queries_ = Array.isArray(queries) ? queries : [queries];
    return <C extends Context>(ctx: C): ctx is WithFilter<typeof ctx, "inlineQuery"> => {
      if (!hasInlineQuery(ctx)) {
        return false;
      }

      for (const query of queries_) {
        if (typeof query === "string" && query === ctx.update.inlineQuery.query) {
          return true;
        } else if (query instanceof RegExp && query.test(ctx.update.inlineQuery.query)) {
          return true;
        }
      }
      return false;
    };
  },
  chosenInlineResult(queries: string | RegExp | (string | RegExp)[]) {
    const hasChosenInlineResult = staticHas.filterQuery("chosenInlineResult");
    const queries_ = Array.isArray(queries) ? queries : [queries];
    return <C extends Context>(ctx: C): ctx is WithFilter<typeof ctx, "chosenInlineResult"> => {
      if (!hasChosenInlineResult(ctx)) {
        return false;
      }

      for (const query of queries_) {
        if (typeof query === "string" && query === ctx.update.chosenInlineResult.query) {
          return true;
        } else if (query instanceof RegExp && query.test(ctx.update.chosenInlineResult.query)) {
          return true;
        }
      }
      return false;
    };
  },
  chatType<T extends ChatP["type"]>(chatType: T | T[]) {
    const set = new Set<ChatP["type"]>(Array.isArray(chatType) ? chatType : [chatType]);
    return <C extends Context>(ctx: C): ctx is WithChatType<typeof ctx, T> => {
      return ctx.chat !== undefined && set.has(ctx.chat.type);
    };
  },
};

/**
 * The context object that is passed to the client's update handlers.
 *
 * It wraps the {@link Update} type with shortcuts and method aliases.
 */
export class Context {
  #client: ClientGeneric;
  #me?: User;
  #update: Update;

  constructor(client: ClientGeneric, me: User | undefined, update: Update) {
    this.#client = client;
    this.#me = me;
    this.#update = update;
  }

  static has: StaticHas = staticHas;

  get update(): Update {
    return this.#update;
  }

  get me(): User | undefined {
    return this.#me;
  }

  get client(): ClientGeneric {
    return this.#client;
  }

  get msg(): Message | undefined {
    return "message" in this.update ? this.update.message : "editedMessage" in this.update ? this.update.editedMessage : "scheduledMessage" in this.update ? this.update.scheduledMessage : "callbackQuery" in this.update ? this.update.callbackQuery.message : "guestQuery" in this.update ? this.update.guestQuery.message : undefined;
  }

  get message(): Message | undefined {
    return "message" in this.update ? this.update.message : undefined;
  }

  get editedMessage(): Message | undefined {
    return "editedMessage" in this.update ? this.update.editedMessage : undefined;
  }

  get guestQuery(): GuestQuery | undefined {
    return "guestQuery" in this.update ? this.update.guestQuery : undefined;
  }

  get callbackQuery(): CallbackQuery | undefined {
    return "callbackQuery" in this.update ? this.update.callbackQuery : undefined;
  }

  get inlineQuery(): InlineQuery | undefined {
    return "inlineQuery" in this.update ? this.update.inlineQuery : undefined;
  }

  get chosenInlineResult(): ChosenInlineResult | undefined {
    return "chosenInlineResult" in this.update ? this.update.chosenInlineResult : undefined;
  }

  #mustGetMsg() {
    if (this.msg !== undefined) {
      return { chatId: this.msg.chat.id, messageId: this.msg.id, businessConnectionId: this.msg.businessConnectionId, senderId: this.msg.from?.id, userId: this.msg.from?.id };
    }

    const reactions = "messageInteractions" in this.update ? this.update.messageInteractions : undefined;
    if (reactions !== undefined) {
      return { chatId: reactions.chatId, messageId: reactions.messageId };
    } else {
      unreachable();
    }
  }

  #mustGetChatId() {
    if (this.chat) {
      return this.chat.id;
    } else {
      unreachable();
    }
  }

  #mustGetUserId() {
    if (this.msg?.from) {
      return this.msg.from.id;
    } else if ("callbackQuery" in this.update) {
      return this.update.callbackQuery.from.id;
    } else if ("chosenInlineResult" in this.update) {
      return this.update.chosenInlineResult.from.id;
    } else {
      unreachable();
    }
  }

  #mustGetInlineMsgId() {
    if ("chosenInlineResult" in this.update) {
      if (this.update.chosenInlineResult.inlineMessageId) {
        return this.update.chosenInlineResult.inlineMessageId;
      }
    } else if ("callbackQuery" in this.update) {
      if (this.update.callbackQuery.inlineMessageId) {
        return this.update.callbackQuery.inlineMessageId;
      }
    }
    unreachable();
  }

  #getReplyTo = (isQuoted: boolean | undefined, chatId: number, messageId: number): { messageThreadId?: number; replyTo?: ReplyTo } => {
    if (this.update.type === "story") {
      return { replyTo: { type: "story", chatId: this.update.story.chat.id, storyId: this.update.story.id } };
    }

    let messageThreadId = undefined;
    switch (this.update.type) {
      case "message":
        messageThreadId = this.update.message.threadId;
        break;
      case "editedMessage":
        messageThreadId = this.update.editedMessage.threadId;
        break;
      case "scheduledMessage":
        messageThreadId = this.update.scheduledMessage.threadId;
        break;
    }

    const isPrivate = chatId > 0;
    const shouldQuote = isQuoted === undefined ? !isPrivate : isQuoted;
    return { messageThreadId, replyTo: shouldQuote ? { type: "message", messageId } : undefined };
  };

  get chat(): ChatP | undefined {
    if (this.msg !== undefined) {
      return this.msg.chat;
    }

    switch (this.update.type) {
      case "messageReactions":
        return this.update.messageReactions.chat;
      case "messageReactionCount":
        return this.update.messageReactionCount.chat;
      case "chatMember":
        return this.update.chatMember.chat;
      case "myChatMember":
        return this.update.myChatMember.chat;
      case "joinRequest":
        return this.update.joinRequest.chat;
      case "story":
        return this.update.story.chat;
      case "newChat":
        return this.update.newChat.chat;
      case "editedChat":
        return this.update.editedChat.chat;
    }

    return undefined;
  }

  get chatId(): number | undefined {
    if (this.chat !== undefined) {
      return this.chat.id;
    }

    switch (this.update.type) {
      case "deletedStory":
        return this.update.deletedStory.chatId;
      case "messageInteractions":
        return this.update.messageInteractions.chatId;
      case "deletedChat":
        return this.update.deletedChat.chatId;
      case "botCommands":
        return this.update.botCommands.chatId;
      case "chatAction":
        return this.update.chatAction.chatId;
    }

    return undefined;
  }

  get from(): User | ChatPGroup | ChatPSupergroup | ChatPChannel | undefined {
    switch (this.update.type) {
      case "callbackQuery":
        return this.update.callbackQuery.from;
      case "inlineQuery":
        return this.update.inlineQuery.from;
      case "chatMember":
        return this.update.chatMember.from;
      case "myChatMember":
        return this.update.myChatMember.from;
      case "messageReactions":
        return this.update.messageReactions.user;
      case "preCheckoutQuery":
        return this.update.preCheckoutQuery.from;
      case "joinRequest":
        return this.update.joinRequest.from;
      case "businessConnection":
        return this.update.businessConnection.user;
      case "pollAnswer":
        return this.update.pollAnswer.from;
    }

    return this.msg?.from;
  }

  hasFilterQuery<Q extends FilterQuery>(filter: Q): this is WithFilter<typeof this, Q> {
    return Context.has.filterQuery(filter)(this);
  }

  hasCommand(commands: ContextCommands, fallbackPrefixes: string | string[] | undefined): this is WithFilter<typeof this, "message:text"> {
    return Context.has.command(commands, fallbackPrefixes)(this);
  }

  hasCallbackQuery(data: string | RegExp | (string | RegExp)[]): this is WithFilter<typeof this, "callbackQuery:data"> {
    return Context.has.callbackQuery(data)(this);
  }

  hasInlineQuery(queries: string | RegExp | (string | RegExp)[]): this is WithFilter<typeof this, "inlineQuery"> {
    return Context.has.inlineQuery(queries)(this);
  }

  hasChosenInlineResult(queries: string | RegExp | (string | RegExp)[]): this is WithFilter<typeof this, "chosenInlineResult"> {
    return Context.has.chosenInlineResult(queries)(this);
  }

  hasChatType<T extends ChatP["type"]>(chatType: T | T[]): this is WithChatType<typeof this, T> {
    return Context.has.chatType(chatType)(this);
  }

  /**
   * Returns a representation of the update held in the context that can be converted to JSON.
   *
   * @returns A representation of the update in a way that can be converted to JSON.
   */
  toJSON(): Update | { update: Api.Update } {
    if ("update" in this.update) {
      return { update: toJSON(this.update.update) };
    } else {
      return this.update;
    }
  }

  /** Context-aware alias for {@link Client.addContact}. */
  async addAsContact(firstName: string, params?: AddContactParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.addContact(chatId, firstName, params);
  }

  /** Context-aware alias for {@link Client.addChatMember}. */
  async addMember(userId: ID, params?: AddChatMemberParams): Promise<FailedInvitation[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.addChatMember(chatId, userId, params);
  }

  /** Context-aware alias for {@link Client.addChatMembers}. */
  async addMembers(userIds: ID[]): Promise<FailedInvitation[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.addChatMembers(chatId, userIds);
  }

  /** Context-aware alias for {@link Client.addReaction}. */
  async addReaction(messageId: number, reaction: Reaction, params?: AddReactionParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.addReaction(chatId, messageId, reaction, params);
  }

  /** Context-aware alias for {@link Client.addStoriesToHighlights}. */
  async addStoriesToHighlights(storyIds: number[]): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.addStoriesToHighlights(chatId, storyIds);
  }

  /** Context-aware alias for {@link Client.addStoryToHighlights}. */
  async addStoryToHighlights(storyId: number): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.addStoryToHighlights(chatId, storyId);
  }

  /** Context-aware alias for {@link Client.addToChecklist}. */
  async addToChecklist(messageId: number, items: InputChecklistItem[]): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.addToChecklist(chatId, messageId, items);
  }

  /** Context-aware alias for {@link Client.answerCallbackQuery}. */
  async answerCallbackQuery(params?: AnswerCallbackQueryParams): Promise<void> {
    if (!("callbackQuery" in this.update)) {
      unreachable();
    }
    return await this.client.answerCallbackQuery(this.update.callbackQuery.id, params);
  }

  /** Context-aware alias for {@link Client.answerGuestQuery}. */
  async answerGuestQuery(result: InlineQueryResult): Promise<string> {
    if (!("guestQuery" in this.update)) {
      unreachable();
    }
    return await this.client.answerGuestQuery(this.update.guestQuery.id, result);
  }

  /** Context-aware alias for {@link Client.answerInlineQuery}. */
  async answerInlineQuery(results: InlineQueryResult[], params?: AnswerInlineQueryParams): Promise<void> {
    if (!("inlineQuery" in this.update)) {
      unreachable();
    }
    return await this.client.answerInlineQuery(this.update.inlineQuery.id, results, params);
  }

  /** Context-aware alias for {@link Client.answerPreCheckoutQuery}. */
  async answerPreCheckoutQuery(ok: boolean, params?: AnswerPreCheckoutQueryParams): Promise<void> {
    if (!("preCheckoutQuery" in this.update)) {
      unreachable();
    }
    return await this.client.answerPreCheckoutQuery(this.update.preCheckoutQuery.id, ok, params);
  }

  /** Context-aware alias for {@link Client.approveJoinRequest}. */
  async approveJoinRequest(): Promise<void> {
    const { chatId, userId } = this.#mustGetMsg();
    if (!userId) {
      unreachable();
    }
    return await this.client.approveJoinRequest(chatId, userId);
  }

  /** Context-aware alias for {@link Client.approveJoinRequests}. */
  async approveJoinRequests(params?: ApproveJoinRequestsParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.approveJoinRequests(chatId, params);
  }

  /** Context-aware alias for {@link Client.archiveChat}. */
  async archive(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.archiveChat(chatId);
  }

  /** Context-aware alias for {@link Client.banChatMember}. */
  async banChatMember(memberId: ID, params?: BanChatMemberParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.banChatMember(chatId, memberId, params);
  }

  /** Context-aware alias for {@link Client.banChatMember}. */
  async banSender(params?: BanChatMemberParams): Promise<void> {
    const { chatId, senderId } = this.#mustGetMsg();
    if (!senderId) {
      unreachable();
    }
    return await this.client.banChatMember(chatId, senderId, params);
  }

  /** Context-aware alias for {@link Client.blockUser}. */
  async blockUser(): Promise<void> {
    return await this.client.blockUser(this.#mustGetUserId());
  }

  /** Context-aware alias for {@link Client.checkChecklistItem}. */
  async checkChecklistItem(messageId: number, item: number): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.checkChecklistItem(chatId, messageId, item);
  }

  /** Context-aware alias for {@link Client.checkChecklistItems}. */
  async checkChecklistItems(messageId: number, items: number[]): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.checkChecklistItems(chatId, messageId, items);
  }

  /** Context-aware alias for {@link Client.closeChat}. */
  async close(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.closeChat(chatId);
  }

  /** Context-aware alias for {@link Client.closeTopic}. */
  async closeTopic(topicId: number): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.closeTopic(chatId, topicId);
  }

  /** Context-aware alias for {@link Client.createInviteLink}. */
  async createInviteLink(params?: CreateInviteLinkParams): Promise<InviteLink> {
    const chatId = this.#mustGetChatId();
    return await this.client.createInviteLink(chatId, params);
  }

  /** Context-aware alias for {@link Client.createStory}. */
  async createStory(content: InputStoryContent, params?: CreateStoryParams): Promise<Story> {
    const chatId = this.#mustGetChatId();
    return await this.client.createStory(chatId, content, params);
  }

  /** Context-aware alias for {@link Client.createTopic}. */
  async createTopic(title: string, params?: CreateTopicParams): Promise<Topic> {
    const chatId = this.#mustGetChatId();
    return await this.client.createTopic(chatId, title, params);
  }

  /** Context-aware alias for {@link Client.declineJoinRequest}. */
  async declineJoinRequest(): Promise<void> {
    const { chatId, userId } = this.#mustGetMsg();
    if (!userId) {
      unreachable();
    }
    return await this.client.declineJoinRequest(chatId, userId);
  }

  /** Context-aware alias for {@link Client.declineJoinRequests}. */
  async declineJoinRequests(params?: DeclineJoinRequestsParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.declineJoinRequests(chatId, params);
  }

  /** Context-aware alias for {@link Client.deleteChatPhoto}. */
  async deleteChatPhoto(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.deleteChatPhoto(chatId);
  }

  /** Context-aware alias for {@link Client.deleteMessage}. */
  async delete(): Promise<void> {
    const { chatId, messageId } = this.#mustGetMsg();
    return await this.client.deleteMessage(chatId, messageId);
  }

  /** Context-aware alias for {@link Client.deleteChat}. */
  async deleteChat(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.deleteChat(chatId);
  }

  /** Context-aware alias for {@link Client.deleteChatMemberMessages}. */
  async deleteChatMemberMessages(userId: ID): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.deleteChatMemberMessages(chatId, userId);
  }

  /** Context-aware alias for {@link Client.deleteChatStickerSet}. */
  async deleteChatStickerSet(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.deleteChatStickerSet(chatId);
  }

  /** Context-aware alias for {@link Client.deleteMessage}. */
  async deleteMessage(messageId: number, params?: DeleteMessagesParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.deleteMessage(chatId, messageId, params);
  }

  /** Context-aware alias for {@link Client.deleteMessages}. */
  async deleteMessages(messageIds: number[], params?: DeleteMessagesParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.deleteMessages(chatId, messageIds, params);
  }

  /** Context-aware alias for {@link Client.deleteScheduledMessage}. */
  async deleteScheduledMessage(messageId: number): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.deleteScheduledMessage(chatId, messageId);
  }

  /** Context-aware alias for {@link Client.deleteScheduledMessages}. */
  async deleteScheduledMessages(messageIds: number[]): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.deleteScheduledMessages(chatId, messageIds);
  }

  /** Context-aware alias for {@link Client.deleteStories}. */
  async deleteStories(storyIds: number[]): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.deleteStories(chatId, storyIds);
  }

  /** Context-aware alias for {@link Client.deleteStory}. */
  async deleteStory(storyId: number): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.deleteStory(chatId, storyId);
  }

  /** Context-aware alias for {@link Client.disableAntispam}. */
  async disableAntispam(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.disableAntispam(chatId);
  }

  /** Context-aware alias for {@link Client.disableBusinessBots}. */
  async disableBusinessBots(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.disableBusinessBots(chatId);
  }

  /** Context-aware alias for {@link Client.disableJoinRequests}. */
  async disableJoinRequests(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.disableJoinRequests(chatId);
  }

  /** Context-aware alias for {@link Client.disableSharing}. */
  async disableSharing(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.disableSharing(chatId);
  }

  /** Context-aware alias for {@link Client.disableSignatures}. */
  async disableSignatures(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.disableSignatures(chatId);
  }

  /** Context-aware alias for {@link Client.disableSlowMode}. */
  async disableSlowMode(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.disableSlowMode(chatId);
  }

  /** Context-aware alias for {@link Client.disableTopics}. */
  async disableTopics(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.disableTopics(chatId);
  }

  /** Context-aware alias for {@link Client.editInlineMessageCaption}. */
  async editInlineMessageCaption(params?: EditInlineMessageCaptionParams): Promise<void> {
    const inlineMessageId = this.#mustGetInlineMsgId();
    return await this.client.editInlineMessageCaption(inlineMessageId, params);
  }

  /** Context-aware alias for {@link Client.editInlineMessageLiveLocation}. */
  async editInlineMessageLiveLocation(latitude: number, longitude: number, params?: EditMessageLiveLocationParams): Promise<void> {
    const inlineMessageId = this.#mustGetInlineMsgId();
    return await this.client.editInlineMessageLiveLocation(inlineMessageId, latitude, longitude, params);
  }

  /** Context-aware alias for {@link Client.editInlineMessageMedia}. */
  async editInlineMessageMedia(media: InputMedia, params?: EditInlineMessageMediaParams): Promise<void> {
    const inlineMessageId = this.#mustGetInlineMsgId();
    return await this.client.editInlineMessageMedia(inlineMessageId, media, params);
  }

  /** Context-aware alias for {@link Client.editInlineMessageReplyMarkup}. */
  async editInlineMessageReplyMarkup(params?: EditMessageReplyMarkupParams): Promise<void> {
    const inlineMessageId = this.#mustGetInlineMsgId();
    return await this.client.editInlineMessageReplyMarkup(inlineMessageId, params);
  }

  /** Context-aware alias for {@link Client.editInlineMessageText}. */
  async editInlineMessageText(text: string, params?: EditInlineMessageTextParams): Promise<void> {
    const inlineMessageId = this.#mustGetInlineMsgId();
    return await this.client.editInlineMessageText(inlineMessageId, text, params);
  }

  /** Context-aware alias for {@link Client.editMessageCaption}. */
  async editMessageCaption(messageId: number, params?: EditMessageCaptionParams): Promise<Message> {
    const chatId = this.#mustGetChatId();
    return await this.client.editMessageCaption(chatId, messageId, params);
  }

  /** Context-aware alias for {@link Client.editMessageLiveLocation}. */
  async editMessageLiveLocation(messageId: number, latitude: number, longitude: number, params?: EditMessageLiveLocationParams): Promise<Message> {
    const chatId = this.#mustGetChatId();
    return await this.client.editMessageLiveLocation(chatId, messageId, latitude, longitude, params);
  }

  /** Context-aware alias for {@link Client.editMessageMedia}. */
  async editMessageMedia(messageId: number, media: InputMedia, params?: EditMessageMediaParams): Promise<Message> {
    const chatId = this.#mustGetChatId();
    return await this.client.editMessageMedia(chatId, messageId, media, params);
  }

  /** Context-aware alias for {@link Client.editMessageReplyMarkup}. */
  async editMessageReplyMarkup(messageId: number, params?: EditMessageReplyMarkupParams): Promise<Message> {
    const chatId = this.#mustGetChatId();
    return await this.client.editMessageReplyMarkup(chatId, messageId, params);
  }

  /** Context-aware alias for {@link Client.editMessageText}. */
  async editMessageText(messageId: number, text: string, params?: EditMessageTextParams): Promise<MessageText> {
    const chatId = this.#mustGetChatId();
    return await this.client.editMessageText(chatId, messageId, text, params);
  }

  /** Context-aware alias for {@link Client.editTopic}. */
  async editTopic(topicId: number, title: string, params?: EditTopicParams): Promise<Topic> {
    const chatId = this.#mustGetChatId();
    return await this.client.editTopic(chatId, topicId, title, params);
  }

  /** Context-aware alias for {@link Client.enableAntispam}. */
  async enableAntispam(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.enableAntispam(chatId);
  }

  /** Context-aware alias for {@link Client.enableBusinessBots}. */
  async enableBusinessBots(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.enableBusinessBots(chatId);
  }

  /** Context-aware alias for {@link Client.enableJoinRequests}. */
  async enableJoinRequests(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.enableJoinRequests(chatId);
  }

  /** Context-aware alias for {@link Client.enableSharing}. */
  async enableSharing(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.enableSharing(chatId);
  }

  /** Context-aware alias for {@link Client.enableSignatures}. */
  async enableSignatures(params?: EnableSignaturesParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.enableSignatures(chatId, params);
  }

  /** Context-aware alias for {@link Client.enableTopics}. */
  async enableTopics(isShownAsTabs: boolean): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.enableTopics(chatId, isShownAsTabs);
  }

  /** Context-aware alias for {@link Client.forwardMessage}. */
  async forward(to: ID, params?: ForwardMessagesParams): Promise<Message> {
    const { chatId, messageId } = this.#mustGetMsg();
    return await this.client.forwardMessage(chatId, to, messageId, params);
  }

  /** Context-aware alias for {@link Client.forwardMessage}. */
  async forwardMessage(to: ID, messageId: number, params?: ForwardMessagesParams): Promise<Message> {
    const chatId = this.#mustGetChatId();
    return await this.client.forwardMessage(chatId, to, messageId, params);
  }

  /** Context-aware alias for {@link Client.forwardMessages}. */
  async forwardMessages(to: ID, messageIds: number[], params?: ForwardMessagesParams): Promise<Message[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.forwardMessages(chatId, to, messageIds, params);
  }

  /** Context-aware alias for {@link Client.getBusinessConnection}. */
  async getBusinessConnection(): Promise<BusinessConnection> {
    const { businessConnectionId } = this.#mustGetMsg();
    if (!businessConnectionId) {
      unreachable();
    }
    return await this.client.getBusinessConnection(businessConnectionId);
  }

  /** Context-aware alias for {@link Client.getChat}. */
  async getChat(): Promise<Chat> {
    const chatId = this.#mustGetChatId();
    return await this.client.getChat(chatId);
  }

  /** Context-aware alias for {@link Client.getChatAdministrators}. */
  async getChatAdministrators(): Promise<ChatMember[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.getChatAdministrators(chatId);
  }

  /** Context-aware alias for {@link Client.getChatMember}. */
  async getChatMember(userId: ID): Promise<ChatMember> {
    const chatId = this.#mustGetChatId();
    return await this.client.getChatMember(chatId, userId);
  }

  /** Context-aware alias for {@link Client.getChatMembers}. */
  async getChatMembers(params?: GetChatMembersParams): Promise<ChatMember[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.getChatMembers(chatId, params);
  }

  /** Context-aware alias for {@link Client.getChatSettings}. */
  async getChatSettings(): Promise<ChatSettings> {
    const chatId = this.#mustGetChatId();
    return await this.client.getChatSettings(chatId);
  }

  /** Context-aware alias for {@link Client.getClaimedGifts}. */
  async getClaimedGifts(params?: GetClaimedGiftsParams): Promise<ClaimedGifts> {
    const chatId = this.#mustGetChatId();
    return await this.client.getClaimedGifts(chatId, params);
  }

  /** Context-aware alias for {@link Client.getChatSettings}. */
  async getCommonChats(): Promise<ChatP[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.getCommonChats(chatId);
  }

  /** Context-aware alias for {@link Client.getCreatedInviteLinks}. */
  async getCreatedInviteLinks(params?: GetCreatedInviteLinksParams): Promise<InviteLink[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.getCreatedInviteLinks(chatId, params);
  }

  /** Context-aware alias for {@link Client.getHistory}. */
  async getHistory(params?: GetHistoryParams): Promise<Message[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.getHistory(chatId, params);
  }

  /** Context-aware alias for {@link Client.getJoinRequests}. */
  async getJoinRequests(params?: GetJoinRequestsParams): Promise<JoinRequest[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.getJoinRequests(chatId, params);
  }

  /** Context-aware alias for {@link Client.getMessage}. */
  async getMessage(messageId: number): Promise<Message | null> {
    const chatId = this.#mustGetChatId();
    return await this.client.getMessage(chatId, messageId);
  }

  /** Context-aware alias for {@link Client.getMessageReactions}. */
  async getMessageReactions(messageId: number): Promise<MessageReactionList> {
    const chatId = this.#mustGetChatId();
    return await this.client.getMessageReactions(chatId, messageId);
  }

  /** Context-aware alias for {@link Client.getMessages}. */
  async getMessages(messageIds: number[]): Promise<Message[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.getMessages(chatId, messageIds);
  }

  /** Context-aware alias for {@link Client.getSavedMessages}. */
  async getSavedMessages(params?: GetSavedMessagesParams): Promise<Message[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.getSavedMessages(chatId, params);
  }

  /** Context-aware alias for {@link Client.getSimilarBots}. */
  async getSimilarBots(): Promise<ChatPPrivate[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.getSimilarBots(chatId);
  }

  /** Context-aware alias for {@link Client.getSimilarChannels}. */
  async getSimilarChannels(): Promise<ChatPChannel[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.getSimilarChannels(chatId);
  }

  /** Context-aware alias for {@link Client.getStories}. */
  async getStories(storyIds: number[]): Promise<Story[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.getStories(chatId, storyIds);
  }

  /** Context-aware alias for {@link Client.getStory}. */
  async getStory(storyId: number): Promise<Story | null> {
    const chatId = this.#mustGetChatId();
    return await this.client.getStory(chatId, storyId);
  }

  /** Context-aware alias for {@link Client.sendGift}. */
  async gift(giftId: string, params?: SendGiftParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.sendGift(chatId, giftId, params);
  }

  /** Context-aware alias for {@link Client.hideGeneralTopic}. */
  async hideGeneralTopic(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.hideGeneralTopic(chatId);
  }

  /** Context-aware alias for {@link Client.hideMemberList}. */
  async hideMemberList(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.hideMemberList(chatId);
  }

  /** Context-aware alias for {@link Client.kickChatMember}. */
  async kickChatMember(memberId: ID): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.kickChatMember(chatId, memberId);
  }

  /** Context-aware alias for {@link Client.kickChatMember}. */
  async kickSender(): Promise<void> {
    const { chatId, senderId } = this.#mustGetMsg();
    if (!senderId) {
      unreachable();
    }
    return await this.client.kickChatMember(chatId, senderId);
  }

  /** Context-aware alias for {@link Client.leaveChat}. */
  async leaveChat(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.leaveChat(chatId);
  }

  /** Context-aware alias for {@link Client.openChat}. */
  async open(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.openChat(chatId);
  }

  /** Context-aware alias for {@link Client.pauseBusinessBotConnection}. */
  async pauseBusinessBotConnection(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.pauseBusinessBotConnection(chatId);
  }

  /** Context-aware alias for {@link Client.pinMessage}. */
  async pin(params?: PinMessageParams): Promise<void> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    return await this.client.pinMessage(chatId, messageId, { ...params, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.pinMessage}. */
  async pinMessage(messageId: number, params?: PinMessageParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.pinMessage(chatId, messageId, params);
  }

  /** Context-aware alias for {@link Client.pinTopic}. */
  async pinTopic(topicId: number): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.pinTopic(chatId, topicId);
  }

  /** Context-aware alias for {@link Client.promoteChatMember}. */
  async promoteChatMember(userId: ID, params?: PromoteChatMemberParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.promoteChatMember(chatId, userId, params);
  }

  /** Context-aware alias for {@link Client.setReactions}. */
  async react(reactions: Reaction[], params?: SetReactionsParams): Promise<void> {
    const { chatId, messageId } = this.#mustGetMsg();
    return await this.client.setReactions(chatId, messageId, reactions, params);
  }

  /** Context-aware alias for {@link Client.readMessages}. */
  async read(): Promise<void> {
    const { chatId, messageId } = this.#mustGetMsg();
    return await this.client.readMessages(chatId, messageId);
  }

  /** Context-aware alias for {@link Client.refundStarPayment}. */
  async refundStarPayment(telegramPaymentChargeId: string): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.refundStarPayment(chatId, telegramPaymentChargeId);
  }

  /** Context-aware alias for {@link Client.deleteContact}. */
  async removeAsContact(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.deleteContact(chatId);
  }

  /** Context-aware alias for {@link Client.removeReaction}. */
  async removeReaction(messageId: number, reaction: Reaction): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.removeReaction(chatId, messageId, reaction);
  }

  /** Context-aware alias for {@link Client.removeUserReaction}. */
  async removeUserReaction(messageId: number, userId: ID): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.removeUserReaction(chatId, messageId, userId);
  }

  /** Context-aware alias for {@link Client.removeUserReactions}. */
  async removeUserReactions(userId: ID): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.removeUserReactions(chatId, userId);
  }

  /** Context-aware alias for {@link Client.removeStoriesFromHighlights}. */
  async removeStoriesFromHighlights(storyIds: number[]): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.removeStoriesFromHighlights(chatId, storyIds);
  }

  /** Context-aware alias for {@link Client.removeStoryFromHighlights}. */
  async removeStoryFromHighlights(storyId: number): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.removeStoryFromHighlights(chatId, storyId);
  }

  /** Context-aware alias for {@link Client.reopenTopic}. */
  async reopenTopic(topicId: number): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.reopenTopic(chatId, topicId);
  }

  /** Context-aware alias for {@link Client.sendMessage}. */
  async reply(text: string, params?: Omit<SendMessageParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<MessageText> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendMessage(chatId, text, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.sendAnimation}. */
  async replyAnimation(animation: FileSource, params?: Omit<SendAnimationParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<MessageAnimation> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendAnimation(chatId, animation, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.sendAudio}. */
  async replyAudio(audio: FileSource, params?: Omit<SendAudioParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<MessageAudio> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendAudio(chatId, audio, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.sendChecklist}. */
  async replyChecklist(title: string, items: InputChecklistItem[], params?: Omit<SendChecklistParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<MessageChecklist> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendChecklist(chatId, title, items, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.sendContact}. */
  async replyContact(firstName: string, number: string, params?: Omit<SendContactParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<MessageContact> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendContact(chatId, firstName, number, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.sendDice}. */
  async replyDice(params?: Omit<SendDiceParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<MessageDice> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendDice(chatId, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.sendDocument}. */
  async replyDocument(document: FileSource, params?: Omit<SendDocumentParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<MessageDocument> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendDocument(chatId, document, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.sendMessageDraft}. */
  async replyDraft(draftId: number, text: string, params?: Omit<SendMessageDraftParams, "messageThreadId"> & ReplyParams): Promise<void> {
    const { chatId, messageId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendMessageDraft(chatId, draftId, text, { ...params, ...replyTo });
  }

  /** Context-aware alias for {@link Client.sendInvoice}. */
  async replyInvoice(title: string, description: string, payload: string, currency: string, prices: PriceTag[], params?: Omit<SendInvoiceParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<MessageInvoice> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendInvoice(chatId, title, description, payload, currency, prices, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.sendLocation}. */
  async replyLocation(latitude: number, longitude: number, params?: Omit<SendLocationParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<MessageLocation> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendLocation(chatId, latitude, longitude, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.sendMediaGroup}. */
  async replyMediaGroup(media: InputMedia[], params?: Omit<SendMediaGroupParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<Message[]> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendMediaGroup(chatId, media, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.sendPhoto}. */
  async replyPhoto(photo: FileSource, params?: Omit<SendPhotoParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<MessagePhoto> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendPhoto(chatId, photo, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.sendPoll}. */
  async replyPoll(question: string, options: InputPollOption[], params?: Omit<SendPollParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<MessagePoll> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendPoll(chatId, question, options, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.sendSticker}. */
  async replySticker(sticker: FileSource, params?: Omit<SendStickerParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<MessageSticker> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendSticker(chatId, sticker, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.sendVenue}. */
  async replyVenue(latitude: number, longitude: number, title: string, address: string, params?: Omit<SendVenueParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<MessageVenue> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendVenue(chatId, latitude, longitude, title, address, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.sendVideo}. */
  async replyVideo(video: FileSource, params?: Omit<SendVideoParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<MessageVideo> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendVideo(chatId, video, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.sendVideoNote}. */
  async replyVideoNote(videoNote: FileSource, params?: Omit<SendVideoNoteParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<MessageVideoNote> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendVideoNote(chatId, videoNote, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.sendVoice}. */
  async replyVoice(voice: FileSource, params?: Omit<SendVoiceParams, "replyTo" | "messageThreadId" | "businessConnectionId"> & ReplyParams): Promise<MessageVoice> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.isQuoted, chatId, messageId);
    return await this.client.sendVoice(chatId, voice, { ...params, ...replyTo, businessConnectionId });
  }

  /** Context-aware alias for {@link Client.resumeBusinessBotConnection}. */
  async resumeBusinessBotConnection(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.resumeBusinessBotConnection(chatId);
  }

  /** Context-aware alias for {@link Client.scheduleVideoChat}. */
  async scheduleVideoChat(startAt: number, params?: ScheduleVideoChatParams): Promise<VideoChatScheduled> {
    const chatId = this.#mustGetChatId();
    return await this.client.scheduleVideoChat(chatId, startAt, params);
  }

  /** Context-aware alias for {@link Client.searchMessages}. */
  async searchMessages(params?: Omit<SearchMessagesParams, "chatId">): Promise<MessageList> {
    const chatId = this.#mustGetChatId();
    params ??= {};
    (params as SearchMessagesParams).chatId = chatId;
    return await this.client.searchMessages(params);
  }

  /** Context-aware alias for {@link Client.sendChatAction}. */
  async sendChatAction(action: ChatActionType, params?: { messageThreadId?: number }): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.sendChatAction(chatId, action, params);
  }

  /** Context-aware alias for {@link Client.sendScheduledMessage}. */
  async sendScheduledMessage(messageId: number): Promise<Message> {
    const chatId = this.#mustGetChatId();
    return await this.client.sendScheduledMessage(chatId, messageId);
  }

  /** Context-aware alias for {@link Client.setAvailableReactions}. */
  async setAvailableReactions(availableReactions: AvailableReactions): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setAvailableReactions(chatId, availableReactions);
  }

  /** Context-aware alias for {@link Client.setBoostsRequiredToCircumventRestrictions}. */
  async setBoostsRequiredToCircumventRestrictions(boosts: number): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setBoostsRequiredToCircumventRestrictions(chatId, boosts);
  }

  /** Context-aware alias for {@link Client.setChatDescription}. */
  async setChatDescription(description: string): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setChatDescription(chatId, description);
  }

  /** Context-aware alias for {@link Client.setChatMemberRights}. */
  async setChatMemberRights(memberId: ID, params?: SetChatMemberRightsParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setChatMemberRights(chatId, memberId, params);
  }

  /** Context-aware alias for {@link Client.setChatPhoto}. */
  async setChatPhoto(photo: FileSource, params?: SetChatPhotoParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setChatPhoto(chatId, photo, params);
  }

  /** Context-aware alias for {@link Client.setChatStickerSet}. */
  async setChatStickerSet(setName: string): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setChatStickerSet(chatId, setName);
  }

  /** Context-aware alias for {@link Client.setChatTitle}. */
  async setChatTitle(title: string): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setChatTitle(chatId, title);
  }

  /** Context-aware alias for {@link Client.setDiscussionChat}. */
  async setDiscussionChat(discussionChatId: ID): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setDiscussionChat(chatId, discussionChatId);
  }

  /** Context-aware alias for {@link Client.setChatMemberTag}. */
  async setMemberTag(params?: SetChatMemberTagParams): Promise<void> {
    const { chatId, userId } = this.#mustGetMsg();
    if (!userId) {
      unreachable();
    }
    return await this.client.setChatMemberTag(chatId, userId, params);
  }

  /** Context-aware alias for {@link Client.setMessageTtl}. */
  async setMessageTtl(messageTtl: number): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setMessageTtl(chatId, messageTtl);
  }

  /** Context-aware alias for {@link Client.setReactions}. */
  async setReactions(messageId: number, reactions: Reaction[], params?: SetReactionsParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setReactions(chatId, messageId, reactions, params);
  }

  /** Context-aware alias for {@link Client.setChatMemberRights}. */
  async setSenderRights(params?: SetChatMemberRightsParams): Promise<void> {
    const { chatId, senderId } = this.#mustGetMsg();
    if (!senderId) {
      unreachable();
    }
    return await this.client.setChatMemberRights(chatId, senderId, params);
  }

  /** Context-aware alias for {@link Client.setSlowMode}. */
  async setSlowMode(duration: SlowModeDuration): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setSlowMode(chatId, duration);
  }

  /** Context-aware alias for {@link Client.showGeneralTopic}. */
  async showGeneralTopic(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.showGeneralTopic(chatId);
  }

  /** Context-aware alias for {@link Client.showMemberList}. */
  async showMemberList(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.showMemberList(chatId);
  }

  /** Context-aware alias for {@link Client.startVideoChat}. */
  async startVideoChat(params?: StartVideoChatParams): Promise<VideoChatActive> {
    const chatId = this.#mustGetChatId();
    return await this.client.startVideoChat(chatId, params);
  }

  /** Context-aware alias for {@link Client.stopPoll}. */
  async stopPoll(messageId: number, params?: StopPollParams): Promise<Poll> {
    const chatId = this.#mustGetChatId();
    return await this.client.stopPoll(chatId, messageId, params);
  }

  /** Context-aware alias for {@link Client.transcribeVoice}. */
  async transcribeVoice(messageId: number): Promise<VoiceTranscription> {
    const chatId = this.#mustGetChatId();
    return await this.client.transcribeVoice(chatId, messageId);
  }

  /** Context-aware alias for {@link Client.transferChatOwnership}. */
  async transferOwnership(userId: ID, password: string): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.transferChatOwnership(chatId, userId, password);
  }

  /** Context-aware alias for {@link Client.unarchiveChat}. */
  async unarchive(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.unarchiveChat(chatId);
  }

  /** Context-aware alias for {@link Client.unbanChatMember}. */
  async unbanChatMember(memberId: ID): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.unbanChatMember(chatId, memberId);
  }

  /** Context-aware alias for {@link Client.unblockUser}. */
  async unblockUser(): Promise<void> {
    return await this.client.unblockUser(this.#mustGetUserId());
  }

  /** Context-aware alias for {@link Client.uncheckChecklistItem}. */
  async uncheckChecklistItem(messageId: number, item: number): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.uncheckChecklistItem(chatId, messageId, item);
  }

  /** Context-aware alias for {@link Client.uncheckChecklistItems}. */
  async uncheckChecklistItems(messageId: number, items: number[]): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.uncheckChecklistItems(chatId, messageId, items);
  }

  /** Context-aware alias for {@link Client.unpinMessage}. */
  async unpin(): Promise<void> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    return await this.client.unpinMessage(chatId, messageId, { businessConnectionId });
  }

  /** Context-aware alias for {@link Client.unpinMessage}. */
  async unpinMessage(messageId: number): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.unpinMessage(chatId, messageId);
  }

  /** Context-aware alias for {@link Client.unpinMessages}. */
  async unpinMessages(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.unpinMessages(chatId);
  }

  /** Context-aware alias for {@link Client.unpinTopic}. */
  async unpinTopic(topicId: number): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.unpinTopic(chatId, topicId);
  }

  /** Context-aware alias for {@link Client.updateChecklist}. */
  async updateChecklist(messageId: number, params?: UpdateChecklistParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.updateChecklist(chatId, messageId, params);
  }
}
