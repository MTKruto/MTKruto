import { unreachable } from "../0_deps.ts";
import { toJSON } from "../2_tl.ts";
import type { ChatAction, FileSource, ID, InlineQueryResult, InputMedia, PriceTag, Reaction, ReplyTo, Update, User } from "../3_types.ts";
import type { AddReactionParams, AnswerCallbackQueryParams, AnswerInlineQueryParams, AnswerPreCheckoutQueryParams, BanChatMemberParams, CreateInviteLinkParams, DeleteMessagesParams, EditInlineMessageCaptionParams, EditInlineMessageMediaParams, EditInlineMessageTextParams, EditMessageCaptionParams, EditMessageLiveLocationParams, EditMessageMediaParams, EditMessageReplyMarkupParams, EditMessageTextParams, ForwardMessagesParams, GetChatMembersParams, GetCreatedInviteLinksParams, PinMessageParams, PromoteChatMemberParams, ReplyParams, SearchMessagesParams, SendAnimationParams, SendAudioParams, SendContactParams, SendDiceParams, SendDocumentParams, SendInvoiceParams, SendLocationParams, SendMediaGroupParams, SendMessageParams, SendPhotoParams, SendPollParams, SendStickerParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetChatMemberRightsParams, SetChatPhotoParams, SetReactionsParams, UnpinMessageParams } from "./0_params.ts";
import type { ClientGeneric } from "./1_client_generic.ts";

export class Context {
  #client: ClientGeneric;
  #me?: User;
  #update: Update;

  constructor(client: ClientGeneric, me: User | undefined, update: Update) {
    this.#client = client;
    this.#me = me;
    this.#update = update;
  }

  get update() {
    return this.#update;
  }

  get me() {
    return this.#me;
  }

  get client() {
    return this.#client;
  }

  get msg() {
    return "message" in this.update ? this.update.message : "editedMessage" in this.update ? this.update.editedMessage : "scheduledMessage" in this.update ? this.update.scheduledMessage : "callbackQuery" in this.update ? this.update.callbackQuery.message : undefined;
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

  get chat() {
    return this.msg?.chat ?? ("messageReactions" in this.update ? this.update.messageReactions.chat : "messageReactionCount" in this.update ? this.update.messageReactionCount.chat : "chatMember" in this.update ? this.update.chatMember.chat : "myChatMember" in this.update ? this.update.myChatMember.chat : "joinRequest" in this.update ? this.update.joinRequest.chat : "story" in this.update ? this.update.story.chat : undefined);
  }

  get from() {
    const from = "callbackQuery" in this.update ? this.update.callbackQuery.from : "inlineQuery" in this.update ? this.update.inlineQuery.from : "chatMember" in this.update ? this.update.chatMember.from : "myChatMember" in this.update ? this.update.myChatMember.from : "messageReactions" in this.update ? this.update.messageReactions.user : "preCheckoutQuery" in this.update ? this.update.preCheckoutQuery.from : "joinRequest" in this.update ? this.update.joinRequest.from : "businessConnection" in this.update ? this.update.businessConnection.user : "pollAnswer" in this.update ? this.update.pollAnswer.from : this.msg?.from;
    return from;
  }

  toJSON() {
    if ("update" in this.update) {
      return { update: toJSON(this.update.update) };
    } else {
      return this.update;
    }
  }

  reply(text: string, params?: Omit<SendMessageParams, "replyTo" | "businessConnectionId"> & ReplyParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return this.client.sendMessage(chatId, text, { ...params, replyTo, businessConnectionId });
  }

  replyPoll(question: string, options: string[], params?: Omit<SendPollParams, "replyTo" | "businessConnectionId"> & ReplyParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return this.client.sendPoll(chatId, question, options, { ...params, replyTo, businessConnectionId });
  }

  replyPhoto(photo: FileSource, params?: Omit<SendPhotoParams, "replyTo" | "businessConnectionId"> & ReplyParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return this.client.sendPhoto(chatId, photo, { ...params, replyTo, businessConnectionId });
  }

  replyMediaGroup(media: InputMedia[], params?: Omit<SendMediaGroupParams, "replyTo" | "businessConnectionId"> & ReplyParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return this.client.sendMediaGroup(chatId, media, { ...params, replyTo, businessConnectionId });
  }

  replyInvoice(title: string, description: string, payload: string, currency: string, prices: PriceTag[], params?: Omit<SendInvoiceParams, "replyTo" | "businessConnectionId"> & ReplyParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return this.client.sendInvoice(chatId, title, description, payload, currency, prices, { ...params, replyTo, businessConnectionId });
  }

  replyDocument(document: FileSource, params?: Omit<SendDocumentParams, "replyTo" | "businessConnectionId"> & ReplyParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return this.client.sendDocument(chatId, document, { ...params, replyTo, businessConnectionId });
  }

  replySticker(sticker: FileSource, params?: Omit<SendStickerParams, "replyTo" | "businessConnectionId"> & ReplyParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return this.client.sendSticker(chatId, sticker, { ...params, replyTo, businessConnectionId });
  }

  replyLocation(latitude: number, longitude: number, params?: Omit<SendLocationParams, "replyTo" | "businessConnectionId"> & ReplyParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return this.client.sendLocation(chatId, latitude, longitude, { ...params, replyTo, businessConnectionId });
  }

  replyDice(params?: Omit<SendDiceParams, "replyTo" | "businessConnectionId"> & ReplyParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return this.client.sendDice(chatId, { ...params, replyTo, businessConnectionId });
  }

  replyVenue(latitude: number, longitude: number, title: string, address: string, params?: Omit<SendVenueParams, "replyTo" | "businessConnectionId"> & ReplyParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return this.client.sendVenue(chatId, latitude, longitude, title, address, { ...params, replyTo, businessConnectionId });
  }

  replyContact(firstName: string, number: string, params?: Omit<SendContactParams, "replyTo" | "businessConnectionId"> & ReplyParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return this.client.sendContact(chatId, firstName, number, { ...params, replyTo, businessConnectionId });
  }

  replyVideo(video: FileSource, params?: Omit<SendVideoParams, "replyTo" | "businessConnectionId"> & ReplyParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return this.client.sendVideo(chatId, video, { ...params, replyTo, businessConnectionId });
  }

  replyAnimation(animation: FileSource, params?: Omit<SendAnimationParams, "replyTo" | "businessConnectionId"> & ReplyParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return this.client.sendAnimation(chatId, animation, { ...params, replyTo, businessConnectionId });
  }

  replyVoice(voice: FileSource, params?: Omit<SendVoiceParams, "replyTo" | "businessConnectionId"> & ReplyParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return this.client.sendVoice(chatId, voice, { ...params, replyTo, businessConnectionId });
  }

  replyAudio(audio: FileSource, params?: Omit<SendAudioParams, "replyTo" | "businessConnectionId"> & ReplyParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return this.client.sendAudio(chatId, audio, { ...params, replyTo, businessConnectionId });
  }

  replyVideoNote(videoNote: FileSource, params?: Omit<SendVideoNoteParams, "replyTo" | "businessConnectionId"> & ReplyParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    const replyTo = this.#getReplyTo(params?.quote, chatId, messageId);
    return this.client.sendVideoNote(chatId, videoNote, { ...params, replyTo, businessConnectionId });
  }

  delete() {
    const { chatId, messageId } = this.#mustGetMsg();
    return this.client.deleteMessage(chatId, messageId);
  }

  forward(to: ID, params?: ForwardMessagesParams) {
    const { chatId, messageId } = this.#mustGetMsg();
    return this.client.forwardMessage(chatId, to, messageId, params);
  }

  pin(params?: PinMessageParams) {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    return this.client.pinMessage(chatId, messageId, { ...params, businessConnectionId });
  }

  unpin() {
    const { chatId, messageId, businessConnectionId } = this.#mustGetMsg();
    return this.client.unpinMessage(chatId, messageId, { businessConnectionId });
  }

  banSender(params?: BanChatMemberParams) {
    const { chatId, senderId } = this.#mustGetMsg();
    if (!senderId) {
      unreachable();
    }
    return this.client.banChatMember(chatId, senderId, params);
  }

  kickSender() {
    const { chatId, senderId } = this.#mustGetMsg();
    if (!senderId) {
      unreachable();
    }
    return this.client.kickChatMember(chatId, senderId);
  }

  setSenderRights(params?: SetChatMemberRightsParams) {
    const { chatId, senderId } = this.#mustGetMsg();
    if (!senderId) {
      unreachable();
    }
    return this.client.setChatMemberRights(chatId, senderId, params);
  }

  getChatAdministrators() {
    const chatId = this.#mustGetChatId();
    return this.client.getChatAdministrators(chatId);
  }

  react(reactions: Reaction[], params?: SetReactionsParams) {
    const { chatId, messageId } = this.#mustGetMsg();
    return this.client.setReactions(chatId, messageId, reactions, params);
  }

  sendChatAction(action: ChatAction, params?: { messageThreadId?: number }) {
    const chatId = this.#mustGetChatId();
    return this.client.sendChatAction(chatId, action, params);
  }

  editInlineMessageText(text: string, params?: EditInlineMessageTextParams) {
    const inlineMessageId = this.#mustGetInlineMsgId();
    return this.client.editInlineMessageText(inlineMessageId, text, params);
  }

  editInlineMessageCaption(params?: EditInlineMessageCaptionParams) {
    const inlineMessageId = this.#mustGetInlineMsgId();
    return this.client.editInlineMessageCaption(inlineMessageId, params);
  }

  editInlineMessageMedia(media: InputMedia, params?: EditInlineMessageMediaParams) {
    const inlineMessageId = this.#mustGetInlineMsgId();
    return this.client.editInlineMessageMedia(inlineMessageId, media, params);
  }

  editInlineMessageLiveLocation(latitude: number, longitude: number, params?: EditMessageLiveLocationParams) {
    const inlineMessageId = this.#mustGetInlineMsgId();
    return this.client.editInlineMessageLiveLocation(inlineMessageId, latitude, longitude, params);
  }

  editInlineMessageReplyMarkup(params?: EditMessageReplyMarkupParams) {
    const inlineMessageId = this.#mustGetInlineMsgId();
    return this.client.editInlineMessageReplyMarkup(inlineMessageId, params);
  }

  editMessageText(messageId: number, text: string, params?: EditMessageTextParams) {
    const chatId = this.#mustGetChatId();
    return this.client.editMessageText(chatId, messageId, text, params);
  }

  editMessageCaption(messageId: number, params?: EditMessageCaptionParams) {
    const chatId = this.#mustGetChatId();
    return this.client.editMessageCaption(chatId, messageId, params);
  }

  editMessageMedia(messageId: number, media: InputMedia, params?: EditMessageMediaParams) {
    const chatId = this.#mustGetChatId();
    return this.client.editMessageMedia(chatId, messageId, media, params);
  }

  editMessageLiveLocation(messageId: number, latitude: number, longitude: number, params?: EditMessageLiveLocationParams) {
    const chatId = this.#mustGetChatId();
    return this.client.editMessageLiveLocation(chatId, messageId, latitude, longitude, params);
  }

  editMessageReplyMarkup(messageId: number, params?: EditMessageReplyMarkupParams) {
    const chatId = this.#mustGetChatId();
    return this.client.editMessageReplyMarkup(chatId, messageId, params);
  }

  answerCallbackQuery(params?: AnswerCallbackQueryParams) {
    if (!("callbackQuery" in this.update)) {
      unreachable();
    }
    return this.client.answerCallbackQuery(this.update.callbackQuery.id, params);
  }

  answerInlineQuery(results: InlineQueryResult[], params?: AnswerInlineQueryParams) {
    if (!("inlineQuery" in this.update)) {
      unreachable();
    }
    return this.client.answerInlineQuery(this.update.inlineQuery.id, results, params);
  }

  getMessage(messageId: number) {
    const chatId = this.#mustGetChatId();
    return this.client.getMessage(chatId, messageId);
  }

  getMessages(messageIds: number[]) {
    const chatId = this.#mustGetChatId();
    return this.client.getMessages(chatId, messageIds);
  }

  forwardMessage(to: ID, messageId: number, params?: ForwardMessagesParams) {
    const chatId = this.#mustGetChatId();
    return this.client.forwardMessage(chatId, to, messageId, params);
  }

  forwardMessages(to: ID, messageIds: number[], params?: ForwardMessagesParams) {
    const chatId = this.#mustGetChatId();
    return this.client.forwardMessages(chatId, to, messageIds, params);
  }

  deleteMessage(messageId: number, params?: DeleteMessagesParams) {
    const chatId = this.#mustGetChatId();
    return this.client.deleteMessage(chatId, messageId, params);
  }

  deleteMessages(messageIds: number[], params?: DeleteMessagesParams) {
    const chatId = this.#mustGetChatId();
    return this.client.deleteMessages(chatId, messageIds, params);
  }

  pinMessage(messageId: number, params?: PinMessageParams) {
    const chatId = this.#mustGetChatId();
    return this.client.pinMessage(chatId, messageId, params);
  }

  unpinMessage(messageId: number) {
    const chatId = this.#mustGetChatId();
    return this.client.unpinMessage(chatId, messageId);
  }

  unpinMessages() {
    const chatId = this.#mustGetChatId();
    return this.client.unpinMessages(chatId);
  }

  setAvailableReactions(availableReactions: "none" | "all" | Reaction[]) {
    const chatId = this.#mustGetChatId();
    return this.client.setAvailableReactions(chatId, availableReactions);
  }

  addReaction(messageId: number, reaction: Reaction, params?: AddReactionParams) {
    const chatId = this.#mustGetChatId();
    return this.client.addReaction(chatId, messageId, reaction, params);
  }

  removeReaction(messageId: number, reaction: Reaction) {
    const chatId = this.#mustGetChatId();
    return this.client.removeReaction(chatId, messageId, reaction);
  }

  setReactions(messageId: number, reactions: Reaction[], params?: SetReactionsParams) {
    const chatId = this.#mustGetChatId();
    return this.client.setReactions(chatId, messageId, reactions, params);
  }

  read() {
    const { chatId, messageId } = this.#mustGetMsg();
    return this.client.readMessages(chatId, messageId);
  }

  setChatPhoto(photo: FileSource, params?: SetChatPhotoParams) {
    const chatId = this.#mustGetChatId();
    return this.client.setChatPhoto(chatId, photo, params);
  }

  deletChatPhoto() {
    const chatId = this.#mustGetChatId();
    return this.client.deleteChatPhoto(chatId);
  }

  banChatMember(memberId: ID, params?: BanChatMemberParams) {
    const chatId = this.#mustGetChatId();
    return this.client.banChatMember(chatId, memberId, params);
  }

  unbanChatMember(memberId: ID) {
    const chatId = this.#mustGetChatId();
    return this.client.unbanChatMember(chatId, memberId);
  }

  kickChatMember(memberId: ID) {
    const chatId = this.#mustGetChatId();
    return this.client.kickChatMember(chatId, memberId);
  }

  setChatMemberRights(memberId: ID, params?: SetChatMemberRightsParams) {
    const chatId = this.#mustGetChatId();
    return this.client.setChatMemberRights(chatId, memberId, params);
  }

  promoteChatMember(userId: ID, params?: PromoteChatMemberParams) {
    const chatId = this.#mustGetChatId();
    return this.client.promoteChatMember(chatId, userId, params);
  }

  deleteChatMemberMessages(userId: ID) {
    const chatId = this.#mustGetChatId();
    return this.client.deleteChatMemberMessages(chatId, userId);
  }

  searchMessages(params?: Omit<SearchMessagesParams, "chatId">) {
    const chatId = this.#mustGetChatId();
    params ??= {};
    (params as SearchMessagesParams).chatId = chatId;
    return this.client.searchMessages(params);
  }

  setBoostsRequiredToCircumventRestrictions(boosts: number) {
    const chatId = this.#mustGetChatId();
    return this.client.setBoostsRequiredToCircumventRestrictions(chatId, boosts);
  }

  createInviteLink(params?: CreateInviteLinkParams) {
    const chatId = this.#mustGetChatId();
    return this.client.createInviteLink(chatId, params);
  }

  getCreatedInviteLinks(params?: GetCreatedInviteLinksParams) {
    const chatId = this.#mustGetChatId();
    return this.client.getCreatedInviteLinks(chatId, params);
  }

  leaveChat() {
    const chatId = this.#mustGetChatId();
    return this.client.leaveChat(chatId);
  }

  blockUser() {
    return this.client.blockUser(this.#mustGetUserId());
  }

  unblockUser() {
    return this.client.unblockUser(this.#mustGetUserId());
  }

  getChatMember(userId: ID) {
    const chatId = this.#mustGetChatId();
    return this.client.getChatMember(chatId, userId);
  }

  getChatMembers(params?: GetChatMembersParams) {
    const chatId = this.#mustGetChatId();
    return this.client.getChatMembers(chatId, params);
  }

  setChatStickerSet(setName: string) {
    const chatId = this.#mustGetChatId();
    return this.client.setChatStickerSet(chatId, setName);
  }

  deleteChatStickerSet() {
    const chatId = this.#mustGetChatId();
    return this.client.deleteChatStickerSet(chatId);
  }

  getBusinessConnection() {
    const { businessConnectionId } = this.#mustGetMsg();
    if (!businessConnectionId) {
      unreachable();
    }
    return this.client.getBusinessConnection(businessConnectionId);
  }

  answerPreCheckoutQuery(ok: boolean, params?: AnswerPreCheckoutQueryParams) {
    if (!("preCheckoutQuery" in this.update)) {
      unreachable();
    }
    return this.client.answerPreCheckoutQuery(this.update.preCheckoutQuery.id, ok, params);
  }

  approveJoinRequest() {
    const { chatId, userId } = this.#mustGetMsg();
    if (!userId) {
      unreachable();
    }
    return this.client.approveJoinRequest(chatId, userId);
  }

  declineJoinRequest() {
    const { chatId, userId } = this.#mustGetMsg();
    if (!userId) {
      unreachable();
    }
    return this.client.declineJoinRequest(chatId, userId);
  }
}
