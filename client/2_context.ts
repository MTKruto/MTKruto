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
import { type Api, toJSON } from "../2_tl.ts";
import type { BusinessConnection, CallbackQuery, ChatAction, ChatMember, ChatP, ChatPChannel, ChatPGroup, ChatPSupergroup, ChosenInlineResult, FileSource, ID, InlineQuery, InlineQueryResult, InputMedia, InviteLink, Message, MessageAnimation, MessageAudio, MessageContact, MessageDice, MessageDocument, MessageInvoice, MessageLocation, MessagePhoto, MessagePoll, MessageSticker, MessageText, MessageVenue, MessageVideo, MessageVideoNote, MessageVoice, PriceTag, Reaction, ReplyTo, Update, User } from "../3_types.ts";
import type { AddReactionParams, AnswerCallbackQueryParams, AnswerInlineQueryParams, AnswerPreCheckoutQueryParams, BanChatMemberParams, CreateInviteLinkParams, DeleteMessagesParams, EditInlineMessageCaptionParams, EditInlineMessageMediaParams, EditInlineMessageTextParams, EditMessageCaptionParams, EditMessageLiveLocationParams, EditMessageMediaParams, EditMessageReplyMarkupParams, EditMessageTextParams, ForwardMessagesParams, GetChatMembersParams, GetCreatedInviteLinksParams, PinMessageParams, PromoteChatMemberParams, ReplyParams, SearchMessagesParams, SendAnimationParams, SendAudioParams, SendContactParams, SendDiceParams, SendDocumentParams, SendInvoiceParams, SendLocationParams, SendMediaGroupParams, SendMessageParams, SendPhotoParams, SendPollParams, SendStickerParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetChatMemberRightsParams, SetChatPhotoParams, SetReactionsParams } from "./0_params.ts";
import type { ClientGeneric } from "./1_client_generic.ts";

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
    return "message" in this.update ? this.update.message : "editedMessage" in this.update ? this.update.editedMessage : "scheduledMessage" in this.update ? this.update.scheduledMessage : "callbackQuery" in this.update ? this.update.callbackQuery.message : undefined;
  }

  get message(): Message | undefined {
    return "message" in this.update ? this.update.message : undefined;
  }

  get editedMessage(): Message | undefined {
    return "editedMessage" in this.update ? this.update.editedMessage : undefined;
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

  #getReplyTo = (quote: boolean | undefined, chatId: number, messageId: number): ReplyTo | undefined => {
    if ("story" in this.update) {
      return { chatId: this.update.story.chat.id, storyId: this.update.story.id };
    }
    const isPrivate = chatId > 0;
    const shouldQuote = quote === undefined ? !isPrivate : quote;
    return shouldQuote ? { messageId } : undefined;
  };

  get chat(): ChatP | undefined {
    return this.msg?.chat ?? ("messageReactions" in this.update ? this.update.messageReactions.chat : "messageReactionCount" in this.update ? this.update.messageReactionCount.chat : "chatMember" in this.update ? this.update.chatMember.chat : "myChatMember" in this.update ? this.update.myChatMember.chat : "joinRequest" in this.update ? this.update.joinRequest.chat : "story" in this.update ? this.update.story.chat : undefined);
  }

  get from(): User | ChatPGroup | ChatPSupergroup | ChatPChannel | undefined {
    const from = "callbackQuery" in this.update ? this.update.callbackQuery.from : "inlineQuery" in this.update ? this.update.inlineQuery.from : "chatMember" in this.update ? this.update.chatMember.from : "myChatMember" in this.update ? this.update.myChatMember.from : "messageReactions" in this.update ? this.update.messageReactions.user : "preCheckoutQuery" in this.update ? this.update.preCheckoutQuery.from : "joinRequest" in this.update ? this.update.joinRequest.from : "businessConnection" in this.update ? this.update.businessConnection.user : "pollAnswer" in this.update ? this.update.pollAnswer.from : this.msg?.from;
    return from;
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

  /**
   * Context-aware alias for {@link Client.sendMessage}.
   */
  async reply(text: string, params?: Omit<SendMessageParams, "replyTo" | "businessConnectionId"> & ReplyParams): Promise<MessageText> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return await this.client.sendMessage(chatId, text, { ...params, replyTo, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.sendPoll}.
   */
  async replyPoll(question: string, options: string[], params?: Omit<SendPollParams, "replyTo" | "businessConnectionId"> & ReplyParams): Promise<MessagePoll> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return await this.client.sendPoll(chatId, question, options, { ...params, replyTo, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.sendPhoto}.
   */
  async replyPhoto(photo: FileSource, params?: Omit<SendPhotoParams, "replyTo" | "businessConnectionId"> & ReplyParams): Promise<MessagePhoto> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return await this.client.sendPhoto(chatId, photo, { ...params, replyTo, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.sendMediaGroup}.
   */
  async replyMediaGroup(media: InputMedia[], params?: Omit<SendMediaGroupParams, "replyTo" | "businessConnectionId"> & ReplyParams): Promise<Message[]> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return await this.client.sendMediaGroup(chatId, media, { ...params, replyTo, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.sendInvoice}.
   */
  async replyInvoice(title: string, description: string, payload: string, currency: string, prices: PriceTag[], params?: Omit<SendInvoiceParams, "replyTo" | "businessConnectionId"> & ReplyParams): Promise<MessageInvoice> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return await this.client.sendInvoice(chatId, title, description, payload, currency, prices, { ...params, replyTo, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.sendDocument}.
   */
  async replyDocument(document: FileSource, params?: Omit<SendDocumentParams, "replyTo" | "businessConnectionId"> & ReplyParams): Promise<MessageDocument> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return await this.client.sendDocument(chatId, document, { ...params, replyTo, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.sendSticker}.
   */
  async replySticker(sticker: FileSource, params?: Omit<SendStickerParams, "replyTo" | "businessConnectionId"> & ReplyParams): Promise<MessageSticker> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return await this.client.sendSticker(chatId, sticker, { ...params, replyTo, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.sendLocation}.
   */
  async replyLocation(latitude: number, longitude: number, params?: Omit<SendLocationParams, "replyTo" | "businessConnectionId"> & ReplyParams): Promise<MessageLocation> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return await this.client.sendLocation(chatId, latitude, longitude, { ...params, replyTo, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.sendDice}.
   */
  async replyDice(params?: Omit<SendDiceParams, "replyTo" | "businessConnectionId"> & ReplyParams): Promise<MessageDice> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return await this.client.sendDice(chatId, { ...params, replyTo, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.sendVenue}.
   */
  async replyVenue(latitude: number, longitude: number, title: string, address: string, params?: Omit<SendVenueParams, "replyTo" | "businessConnectionId"> & ReplyParams): Promise<MessageVenue> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return await this.client.sendVenue(chatId, latitude, longitude, title, address, { ...params, replyTo, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.sendContact}.
   */
  async replyContact(firstName: string, number: string, params?: Omit<SendContactParams, "replyTo" | "businessConnectionId"> & ReplyParams): Promise<MessageContact> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return await this.client.sendContact(chatId, firstName, number, { ...params, replyTo, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.sendVideo}.
   */
  async replyVideo(video: FileSource, params?: Omit<SendVideoParams, "replyTo" | "businessConnectionId"> & ReplyParams): Promise<MessageVideo> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return await this.client.sendVideo(chatId, video, { ...params, replyTo, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.sendAnimation}.
   */
  async replyAnimation(animation: FileSource, params?: Omit<SendAnimationParams, "replyTo" | "businessConnectionId"> & ReplyParams): Promise<MessageAnimation> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return await this.client.sendAnimation(chatId, animation, { ...params, replyTo, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.sendVoice}.
   */
  async replyVoice(voice: FileSource, params?: Omit<SendVoiceParams, "replyTo" | "businessConnectionId"> & ReplyParams): Promise<MessageVoice> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return await this.client.sendVoice(chatId, voice, { ...params, replyTo, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.sendAudio}.
   */
  async replyAudio(audio: FileSource, params?: Omit<SendAudioParams, "replyTo" | "businessConnectionId"> & ReplyParams): Promise<MessageAudio> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return await this.client.sendAudio(chatId, audio, { ...params, replyTo, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.sendVideoNote}.
   */
  async replyVideoNote(videoNote: FileSource, params?: Omit<SendVideoNoteParams, "replyTo" | "businessConnectionId"> & ReplyParams): Promise<MessageVideoNote> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return await this.client.sendVideoNote(chatId, videoNote, { ...params, replyTo, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.deleteMessage}.
   */
  async delete(): Promise<void> {
    const { chatId, messageId } = this.#mustGetMsg();
    return await this.client.deleteMessage(chatId, messageId);
  }

  /**
   * Context-aware alias for {@link Client.forwardMessage}.
   */
  async forward(to: ID, params?: ForwardMessagesParams): Promise<Message> {
    const { chatId, messageId } = this.#mustGetMsg();
    return await this.client.forwardMessage(chatId, to, messageId, params);
  }

  /**
   * Context-aware alias for {@link Client.pinMessage}.
   */
  async pin(params?: PinMessageParams): Promise<void> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    return await this.client.pinMessage(chatId, messageId, { ...params, businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.unpinMessage}.
   */
  async unpin(): Promise<void> {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    return await this.client.unpinMessage(chatId, messageId, { businessConnectionId });
  }

  /**
   * Context-aware alias for {@link Client.banChatMember}.
   */
  async banSender(params?: BanChatMemberParams): Promise<void> {
    const { chatId, senderId } = this.#mustGetMsg();
    if (!senderId) {
      unreachable();
    }
    return await this.client.banChatMember(chatId, senderId, params);
  }

  /**
   * Context-aware alias for {@link Client.kickChatMember}.
   */
  async kickSender(): Promise<void> {
    const { chatId, senderId } = this.#mustGetMsg();
    if (!senderId) {
      unreachable();
    }
    return await this.client.kickChatMember(chatId, senderId);
  }

  /**
   * Context-aware alias for {@link Client.setChatMemberRights}.
   */
  async setSenderRights(params?: SetChatMemberRightsParams): Promise<void> {
    const { chatId, senderId } = this.#mustGetMsg();
    if (!senderId) {
      unreachable();
    }
    return await this.client.setChatMemberRights(chatId, senderId, params);
  }

  /**
   * Context-aware alias for {@link Client.getChatAdministrators}.
   */
  async getChatAdministrators(): Promise<ChatMember[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.getChatAdministrators(chatId);
  }

  /**
   * Context-aware alias for {@link Client.setReactions}.
   */
  async react(reactions: Reaction[], params?: SetReactionsParams): Promise<void> {
    const { chatId, messageId } = this.#mustGetMsg();
    return await this.client.setReactions(chatId, messageId, reactions, params);
  }

  /**
   * Context-aware alias for {@link Client.sendChatAction}.
   */
  async sendChatAction(action: ChatAction, params?: { messageThreadId?: number }): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.sendChatAction(chatId, action, params);
  }

  /**
   * Context-aware alias for {@link Client.editInlineMessageText}.
   */
  async editInlineMessageText(text: string, params?: EditInlineMessageTextParams): Promise<void> {
    const inlineMessageId = this.#mustGetInlineMsgId();
    return await this.client.editInlineMessageText(inlineMessageId, text, params);
  }

  /**
   * Context-aware alias for {@link Client.editInlineMessageCaption}.
   */
  async editInlineMessageCaption(params?: EditInlineMessageCaptionParams): Promise<void> {
    const inlineMessageId = this.#mustGetInlineMsgId();
    return await this.client.editInlineMessageCaption(inlineMessageId, params);
  }

  /**
   * Context-aware alias for {@link Client.editInlineMessageMedia}.
   */
  async editInlineMessageMedia(media: InputMedia, params?: EditInlineMessageMediaParams): Promise<void> {
    const inlineMessageId = this.#mustGetInlineMsgId();
    return await this.client.editInlineMessageMedia(inlineMessageId, media, params);
  }

  /**
   * Context-aware alias for {@link Client.editInlineMessageLiveLocation}.
   */
  async editInlineMessageLiveLocation(latitude: number, longitude: number, params?: EditMessageLiveLocationParams): Promise<void> {
    const inlineMessageId = this.#mustGetInlineMsgId();
    return await this.client.editInlineMessageLiveLocation(inlineMessageId, latitude, longitude, params);
  }

  /**
   * Context-aware alias for {@link Client.editInlineMessageReplyMarkup}.
   */
  async editInlineMessageReplyMarkup(params?: EditMessageReplyMarkupParams): Promise<void> {
    const inlineMessageId = this.#mustGetInlineMsgId();
    return await this.client.editInlineMessageReplyMarkup(inlineMessageId, params);
  }

  /**
   * Context-aware alias for {@link Client.editMessageText}.
   */
  async editMessageText(messageId: number, text: string, params?: EditMessageTextParams): Promise<MessageText> {
    const chatId = this.#mustGetChatId();
    return await this.client.editMessageText(chatId, messageId, text, params);
  }

  /**
   * Context-aware alias for {@link Client.editMessageCaption}.
   */
  async editMessageCaption(messageId: number, params?: EditMessageCaptionParams): Promise<Message> {
    const chatId = this.#mustGetChatId();
    return await this.client.editMessageCaption(chatId, messageId, params);
  }

  /**
   * Context-aware alias for {@link Client.editMessageMedia}.
   */
  async editMessageMedia(messageId: number, media: InputMedia, params?: EditMessageMediaParams): Promise<Message> {
    const chatId = this.#mustGetChatId();
    return await this.client.editMessageMedia(chatId, messageId, media, params);
  }

  /**
   * Context-aware alias for {@link Client.editMessageLiveLocation}.
   */
  async editMessageLiveLocation(messageId: number, latitude: number, longitude: number, params?: EditMessageLiveLocationParams): Promise<Message> {
    const chatId = this.#mustGetChatId();
    return await this.client.editMessageLiveLocation(chatId, messageId, latitude, longitude, params);
  }

  /**
   * Context-aware alias for {@link Client.editMessageReplyMarkup}.
   */
  async editMessageReplyMarkup(messageId: number, params?: EditMessageReplyMarkupParams): Promise<Message> {
    const chatId = this.#mustGetChatId();
    return await this.client.editMessageReplyMarkup(chatId, messageId, params);
  }

  /**
   * Context-aware alias for {@link Client.answerCallbackQuery}.
   */
  async answerCallbackQuery(params?: AnswerCallbackQueryParams): Promise<void> {
    if (!("callbackQuery" in this.update)) {
      unreachable();
    }
    return await this.client.answerCallbackQuery(this.update.callbackQuery.id, params);
  }

  /**
   * Context-aware alias for {@link Client.answerInlineQuery}.
   */
  async answerInlineQuery(results: InlineQueryResult[], params?: AnswerInlineQueryParams): Promise<void> {
    if (!("inlineQuery" in this.update)) {
      unreachable();
    }
    return await this.client.answerInlineQuery(this.update.inlineQuery.id, results, params);
  }

  /**
   * Context-aware alias for {@link Client.getMessage}.
   */
  async getMessage(messageId: number): Promise<Message | null> {
    const chatId = this.#mustGetChatId();
    return await this.client.getMessage(chatId, messageId);
  }

  /**
   * Context-aware alias for {@link Client.getMessages}.
   */
  async getMessages(messageIds: number[]): Promise<Message[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.getMessages(chatId, messageIds);
  }

  /**
   * Context-aware alias for {@link Client.forwardMessage}.
   */
  async forwardMessage(to: ID, messageId: number, params?: ForwardMessagesParams): Promise<Message> {
    const chatId = this.#mustGetChatId();
    return await this.client.forwardMessage(chatId, to, messageId, params);
  }

  /**
   * Context-aware alias for {@link Client.forwardMessages}.
   */
  async forwardMessages(to: ID, messageIds: number[], params?: ForwardMessagesParams): Promise<Message[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.forwardMessages(chatId, to, messageIds, params);
  }

  /**
   * Context-aware alias for {@link Client.deleteMessage}.
   */
  async deleteMessage(messageId: number, params?: DeleteMessagesParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.deleteMessage(chatId, messageId, params);
  }

  /**
   * Context-aware alias for {@link Client.deleteMessages}.
   */
  async deleteMessages(messageIds: number[], params?: DeleteMessagesParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.deleteMessages(chatId, messageIds, params);
  }

  /**
   * Context-aware alias for {@link Client.pinMessage}.
   */
  async pinMessage(messageId: number, params?: PinMessageParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.pinMessage(chatId, messageId, params);
  }

  /**
   * Context-aware alias for {@link Client.unpinMessage}.
   */
  async unpinMessage(messageId: number): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.unpinMessage(chatId, messageId);
  }

  /**
   * Context-aware alias for {@link Client.unpinMessages}.
   */
  async unpinMessages(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.unpinMessages(chatId);
  }

  /**
   * Context-aware alias for {@link Client.setAvailableReactions}.
   */
  async setAvailableReactions(availableReactions: "none" | "all" | Reaction[]): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setAvailableReactions(chatId, availableReactions);
  }

  /**
   * Context-aware alias for {@link Client.addReaction}.
   */
  async addReaction(messageId: number, reaction: Reaction, params?: AddReactionParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.addReaction(chatId, messageId, reaction, params);
  }

  /**
   * Context-aware alias for {@link Client.removeReaction}.
   */
  async removeReaction(messageId: number, reaction: Reaction): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.removeReaction(chatId, messageId, reaction);
  }

  /**
   * Context-aware alias for {@link Client.setReactions}.
   */
  async setReactions(messageId: number, reactions: Reaction[], params?: SetReactionsParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setReactions(chatId, messageId, reactions, params);
  }

  /**
   * Context-aware alias for {@link Client.readMessages}.
   */
  async read(): Promise<void> {
    const { chatId, messageId } = this.#mustGetMsg();
    return await this.client.readMessages(chatId, messageId);
  }

  /**
   * Context-aware alias for {@link Client.setChatPhoto}.
   */
  async setChatPhoto(photo: FileSource, params?: SetChatPhotoParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setChatPhoto(chatId, photo, params);
  }

  /**
   * Context-aware alias for {@link Client.deleteChatPhoto}.
   */
  async deletChatPhoto(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.deleteChatPhoto(chatId);
  }

  /**
   * Context-aware alias for {@link Client.banChatMember}.
   */
  async banChatMember(memberId: ID, params?: BanChatMemberParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.banChatMember(chatId, memberId, params);
  }

  /**
   * Context-aware alias for {@link Client.unbanChatMember}.
   */
  async unbanChatMember(memberId: ID): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.unbanChatMember(chatId, memberId);
  }

  /**
   * Context-aware alias for {@link Client.kickChatMember}.
   */
  async kickChatMember(memberId: ID): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.kickChatMember(chatId, memberId);
  }

  /**
   * Context-aware alias for {@link Client.setChatMemberRights}.
   */
  async setChatMemberRights(memberId: ID, params?: SetChatMemberRightsParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setChatMemberRights(chatId, memberId, params);
  }

  /**
   * Context-aware alias for {@link Client.promoteChatMember}.
   */
  async promoteChatMember(userId: ID, params?: PromoteChatMemberParams): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.promoteChatMember(chatId, userId, params);
  }

  /**
   * Context-aware alias for {@link Client.deleteChatMemberMessages}.
   */
  async deleteChatMemberMessages(userId: ID): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.deleteChatMemberMessages(chatId, userId);
  }

  /**
   * Context-aware alias for {@link Client.searchMessages}.
   */
  async searchMessages(params?: Omit<SearchMessagesParams, "chatId">): Promise<Message[]> {
    const chatId = this.#mustGetChatId();
    params ??= {};
    (params as SearchMessagesParams).chatId = chatId;
    return await this.client.searchMessages(params);
  }

  /**
   * Context-aware alias for {@link Client.setBoostsRequiredToCircumventRestrictions}.
   */
  async setBoostsRequiredToCircumventRestrictions(boosts: number): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setBoostsRequiredToCircumventRestrictions(chatId, boosts);
  }

  /**
   * Context-aware alias for {@link Client.createInviteLink}.
   */
  async createInviteLink(params?: CreateInviteLinkParams): Promise<InviteLink> {
    const chatId = this.#mustGetChatId();
    return await this.client.createInviteLink(chatId, params);
  }

  /**
   * Context-aware alias for {@link Client.getCreatedInviteLinks}.
   */
  async getCreatedInviteLinks(params?: GetCreatedInviteLinksParams): Promise<InviteLink[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.getCreatedInviteLinks(chatId, params);
  }

  /**
   * Context-aware alias for {@link Client.leaveChat}.
   */
  async leaveChat(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.leaveChat(chatId);
  }

  /**
   * Context-aware alias for {@link Client.blockUser}.
   */
  async blockUser(): Promise<void> {
    return await this.client.blockUser(this.#mustGetUserId());
  }

  /**
   * Context-aware alias for {@link Client.unblockUser}.
   */
  async unblockUser(): Promise<void> {
    return await this.client.unblockUser(this.#mustGetUserId());
  }

  /**
   * Context-aware alias for {@link Client.getChatMember}.
   */
  async getChatMember(userId: ID): Promise<ChatMember> {
    const chatId = this.#mustGetChatId();
    return await this.client.getChatMember(chatId, userId);
  }

  /**
   * Context-aware alias for {@link Client.getChatMembers}.
   */
  async getChatMembers(params?: GetChatMembersParams): Promise<ChatMember[]> {
    const chatId = this.#mustGetChatId();
    return await this.client.getChatMembers(chatId, params);
  }

  /**
   * Context-aware alias for {@link Client.setChatStickerSet}.
   */
  async setChatStickerSet(setName: string): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.setChatStickerSet(chatId, setName);
  }

  /**
   * Context-aware alias for {@link Client.deleteChatStickerSet}.
   */
  async deleteChatStickerSet(): Promise<void> {
    const chatId = this.#mustGetChatId();
    return await this.client.deleteChatStickerSet(chatId);
  }

  /**
   * Context-aware alias for {@link Client.getBusinessConnection}.
   */
  async getBusinessConnection(): Promise<BusinessConnection> {
    const { businessConnectionId } = this.#mustGetMsg();
    if (!businessConnectionId) {
      unreachable();
    }
    return await this.client.getBusinessConnection(businessConnectionId);
  }

  /**
   * Context-aware alias for {@link Client.answerPreCheckoutQuery}.
   */
  async answerPreCheckoutQuery(ok: boolean, params?: AnswerPreCheckoutQueryParams): Promise<void> {
    if (!("preCheckoutQuery" in this.update)) {
      unreachable();
    }
    return await this.client.answerPreCheckoutQuery(this.update.preCheckoutQuery.id, ok, params);
  }

  /**
   * Context-aware alias for {@link Client.approveJoinRequest}.
   */
  async approveJoinRequest(): Promise<void> {
    const { chatId, userId } = this.#mustGetMsg();
    if (!userId) {
      unreachable();
    }
    return await this.client.approveJoinRequest(chatId, userId);
  }

  /**
   * Context-aware alias for {@link Client.declineJoinRequest}.
   */
  async declineJoinRequest(): Promise<void> {
    const { chatId, userId } = this.#mustGetMsg();
    if (!userId) {
      unreachable();
    }
    return await this.client.declineJoinRequest(chatId, userId);
  }
}
