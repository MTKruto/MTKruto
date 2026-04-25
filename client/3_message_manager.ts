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

import { contentType, startsWith, unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { encodeText, fromUnixTimestamp, getLogger, getRandomId, type Logger } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { getDc } from "../3_transport.ts";
import { constructBlockedUserList, constructChatAction, constructMessageDraft, constructMessageReactionList, constructMiniAppInfo, constructSavedChats, constructSummarizedText, constructVoiceTranscription, deserializeFileId, type FileId, type InputChecklistItem, type InputMedia, type InputPollOption, type MessageList, messageSearchFilterToTlObject, type PriceTag, type SelfDestructOption, selfDestructOptionToInt, type VoiceTranscription } from "../3_types.ts";
import { assertMessageType, type ChatActionType, constructMessage as constructMessage_, deserializeInlineMessageId, type FileSource, FileType, type ID, type Message, type MessageEntity, messageEntityToTlObject, type ParseMode, type Reaction, reactionEqual, reactionToTlObject, replyMarkupToTlObject, type Update, type UsernameResolver } from "../3_types.ts";
import { parseHtml } from "./0_html.ts";
import { parseMarkdown } from "./0_markdown.ts";
import type { _BusinessConnectionIdCommon, _ReplyMarkupCommon, _SendCommon, _SpoilCommon, AddReactionParams, DeleteMessagesParams, EditInlineMessageCaptionParams, EditInlineMessageMediaParams, EditInlineMessageTextParams, EditMessageCaptionParams, EditMessageLiveLocationParams, EditMessageMediaParams, EditMessageReplyMarkupParams, EditMessageTextParams, ForwardMessagesParams, GetBlockedUsersParams, GetHistoryParams, GetMessageReactionsParams, GetSavedChatsParams, GetSavedMessagesParams, OpenMiniAppParams, PinMessageParams, SearchMessagesParams, SendAnimationParams, SendAudioParams, SendChatActionParams, SendChecklistParams as SendChecklistParams, SendContactParams, SendDiceParams, SendDocumentParams, SendInvoiceParams, SendLocationParams, SendMediaGroupParams, SendMessageDraftParams, SendMessageParams, SendPhotoParams, SendPollParams, SendStickerParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetReactionsParams, StartBotParams, StopPollParams, SummarizeTextParams, UnpinMessageParams, UnpinMessagesParams } from "./0_params.ts";
import type { UpdateProcessor } from "./0_update_processor.ts";
import { canBeInputChannel, checkArray, checkMessageId, checkPhotoName, checkStickerName, getLimit, getUsername, isHttpUrl, toInputChannel } from "./0_utilities.ts";
import type { C as C_ } from "./1_types.ts";
import type { FileManager } from "./2_file_manager.ts";

const FALLBACK_MIME_TYPE = "application/octet-stream";
const STICKER_MIME_TYPES = ["image/webp", "video/webm", "application/x-tgsticker"];
const ANIMATION_MIME_TYPES = ["image/gif", "video/mp4"];
const AUDIO_MIME_TYPES = ["audio/mpeg", "audio/mp4"];
const VOICE_MIME_TYPES = ["audio/ogg", "audio/mpeg", "audio/mp4"];
const VIDEO_MIME_TYPES = ["video/mp4"];
const VIDEO_NOTE_MIME_TYPES = ["video/mp4"];

interface C extends C_ {
  fileManager: FileManager;
}

const messageManagerUpdates = [
  "updateNewMessage",
  "updateNewChannelMessage",
  "updateEditMessage",
  "updateNewScheduledMessage",
  "updateEditChannelMessage",
  "updateBotNewBusinessMessage",
  "updateBotEditBusinessMessage",
  "updateBotDeleteBusinessMessage",
  "updateDeleteMessages",
  "updateDeleteChannelMessages",
  "updateDeleteScheduledMessages",
  "updateTranscribedAudio",
  "updateUserTyping",
  "updateChatUserTyping",
  "updateChannelUserTyping",
] as const;

type MessageManagerUpdate = Api.Types[(typeof messageManagerUpdates)[number]];

export class MessageManager implements UpdateProcessor<MessageManagerUpdate, true> {
  #c: C;
  #LresolveFileId: Logger;

  constructor(c: C) {
    this.#c = c;

    const L = getLogger("MessageManager").client(c.id);
    this.#LresolveFileId = L.branch("resolveFileId");
  }

  async getMessages(chatId: ID, messageIds: number[]) {
    checkArray(messageIds, checkMessageId);
    const peer = await this.#c.getInputPeer(chatId);
    let messages_ = new Array<Api.Message>();
    const chatId_ = await this.#c.getInputPeerChatId(peer);
    let shouldFetch = false;
    for (const messageId of messageIds) {
      const message = await this.#c.messageStorage.getMessage(chatId_, messageId);
      if (message === null) {
        messages_ = [];
        shouldFetch = true;
        break;
      } else {
        messages_.push(message);
      }
    }
    if (shouldFetch) {
      if (canBeInputChannel(peer)) {
        messages_ = await this.#c.invoke({ _: "channels.getMessages", channel: toInputChannel(peer), id: messageIds.map((v) => ({ _: "inputMessageID", id: v })) }).then((v) => Api.as("messages.channelMessages", v).messages);
      } else {
        messages_ = await this.#c.invoke({
          _: "messages.getMessages",
          id: messageIds.map((v) => ({ _: "inputMessageID", id: v })),
        }).then((v) => Api.as("messages.messages", v).messages);
      }
    }
    const messages = new Array<Message>();
    for (const message_ of messages_) {
      if (Api.is("messageEmpty", message_)) {
        continue;
      }
      const message = await this.constructMessage(message_);
      if (message.chat.id === chatId_) {
        messages.push(message);
      }
    }
    return messages;
  }

  async getMessageWithReply(chatId: ID, messageId: number) {
    const message = await this.getMessage(chatId, messageId);
    if (message !== null && message.replyToMessageId) {
      message.replyToMessage = await this.getMessage(chatId, message.replyToMessageId) ?? undefined;
    }
    return message;
  }

  async getMessage(chatId: ID, messageId: number) {
    const messages = await this.getMessages(chatId, [messageId]);
    return messages[0] ?? null;
  }

  static parseText(text: string, entities: MessageEntity[], parseMode: ParseMode): [string, MessageEntity[]] {
    switch (parseMode) {
      case null:
        break;
      case "HTML": {
        const [newText, entitiesToPush] = parseHtml(text);
        text = newText;
        for (const entity of entitiesToPush) {
          entities.push(entity);
        }
        break;
      }
      case "Markdown": {
        const [newText, entitiesToPush] = parseMarkdown(text);
        text = newText;
        for (const entity of entitiesToPush) {
          entities.push(entity);
        }
        break;
      }
      default:
        unreachable();
    }

    text = text.trimEnd();
    for (const entity of entities) {
      while (text[entity.offset + (entity.length - 1)] === undefined) {
        --entity.length;
      }
    }

    if (!text.length) {
      throw new InputError("Text must not be empty.");
    }

    return [text, entities];
  }

  #checkParams(params?: _BusinessConnectionIdCommon | _SendCommon | _ReplyMarkupCommon) {
    if (params && "replyMarkup" in params && params.replyMarkup !== undefined) {
      this.#c.storage.assertBot("replyMarkup");
    }
    if (params && "businessConnectionId" in params && params.businessConnectionId !== undefined) {
      this.#c.storage.assertBot("businessConnectionId");
    }
    if (params && "sendAs" in params && params.sendAs !== undefined) {
      this.#c.storage.assertUser("sendAs");
    }
    if (params && "sendAt" in params && params.sendAt !== undefined) {
      this.#c.storage.assertUser("businessConsendAtnectionId");
    }
  }

  parseText(text_: string, params?: { parseMode?: ParseMode; entities?: MessageEntity[] }) {
    const [text, entities_] = MessageManager.parseText(text_, params?.entities ?? [], params?.parseMode ?? this.#c.parseMode);
    const entities = entities_?.length > 0 ? entities_.map((v) => messageEntityToTlObject(v, this.#c.getPeer)) : undefined;
    return [text, entities] as const;
  }

  async updatesToMessages(chatId: ID, updates: Api.Updates, businessConnectionId?: string) {
    const messages = new Array<Message>();

    if (Api.is("updates", updates)) {
      for (const update of updates.updates) {
        if ("message" in update && Api.is("messageEmpty", update.message)) {
          continue;
        }
        if (Api.is("updateNewMessage", update) || Api.is("updateEditMessage", update) || Api.is("updateNewScheduledMessage", update)) {
          const message = await this.constructMessage(update.message);
          if (Api.is("updateNewScheduledMessage", update)) {
            message.isScheduled = true;
          }
          messages.push(message);
        } else if (Api.is("updateNewChannelMessage", update) || Api.is("updateEditChannelMessage", update)) {
          messages.push(await this.constructMessage(update.message));
        } else if (Api.is("updateBotNewBusinessMessage", update)) {
          messages.push(await this.constructMessage(update.message, false, { connectionId: businessConnectionId ?? update.connection_id, replyToMessage: update.reply_to_message }));
        } else if (Api.is("updateBotEditBusinessMessage", update)) {
          messages.push(await this.constructMessage(update.message, false, { connectionId: businessConnectionId ?? update.connection_id, replyToMessage: update.reply_to_message }));
        }
      }
    } else if (Api.is("updateShortSentMessage", updates)) {
      const message = await this.getMessage(chatId, updates.id);
      if (message !== null) {
        messages.push(message);
      }
    }

    return messages;
  }

  async constructMessage(message_: Api.Message, r?: boolean, business?: { connectionId: string; replyToMessage?: Api.Message }) {
    const mediaPoll = "media" in message_ && Api.is("messageMediaPoll", message_.media) ? message_.media : null;
    const pollId = mediaPoll?.poll.id;
    let poll: Api.poll | null = null;
    let pollResults: Api.pollResults | null = null;
    if (pollId) {
      [poll, pollResults] = await Promise.all([this.#c.messageStorage.getPoll(pollId), this.#c.messageStorage.getPollResults(pollId)]);
    }
    const message = await constructMessage_(message_, this.#c.getPeer, this.getMessage.bind(this), this.#c.fileManager.getStickerSetName.bind(this.#c.fileManager), r, business, poll ?? undefined, pollResults ?? undefined);
    if (!poll && mediaPoll) {
      await this.#c.messageStorage.setPoll(mediaPoll.poll.id, mediaPoll.poll);
    }
    if (!pollResults && mediaPoll) {
      await this.#c.messageStorage.setPollResults(mediaPoll.poll.id, mediaPoll.results);
    }
    return message;
  }

  async forwardMessages(from: ID, to: ID, messageIds: number[], params?: ForwardMessagesParams) {
    checkArray(messageIds, checkMessageId);
    const result = await this.#c.invoke({ _: "messages.forwardMessages", from_peer: await this.#c.getInputPeer(from), to_peer: await this.#c.getInputPeer(to), id: messageIds, random_id: messageIds.map(() => getRandomId()), silent: params?.isSilent || undefined, top_msg_id: params?.messageThreadId, noforwards: params?.isContentProtected || undefined, send_as: params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined, drop_author: params?.isSenderNameDropped || undefined, drop_media_captions: params?.isCaptionDropped || undefined });

    return await this.updatesToMessages(to, result);
  }

  async getHistory(chatId: ID, params?: GetHistoryParams) {
    this.#c.storage.assertUser("getHistory");
    const limit = getLimit(params?.limit);
    let offsetId = params?.offsetId ?? 0;
    if (offsetId < 0) {
      offsetId = 0;
    }
    let offsetDate = params?.offsetDate ?? 0;
    if (offsetDate < 0) {
      offsetDate = 0;
    }
    const peer = await this.#c.getInputPeer(chatId);
    const messages = new Array<Message>();
    if (messages.length > 0) {
      offsetId = messages[messages.length - 1].id; // TODO: track id of oldest message and don't send requests for it
    }
    const result = await this.#c.invoke({
      _: "messages.getHistory",
      peer: peer,
      offset_id: offsetId,
      offset_date: offsetDate,
      add_offset: params?.addOffset ?? 0,
      limit,
      max_id: 0,
      min_id: 0,
      hash: 0n,
    }, { takeoutId: params?.takeoutId });

    if (!("messages" in result)) {
      unreachable();
    }
    for (const message_ of result.messages) {
      const message = await this.constructMessage(message_, false);
      messages.push(message);
    }
    return messages;
  }

  usernameResolver: UsernameResolver = async (v) => {
    const inputPeer = await this.#c.getInputPeer(v).then((v) => Api.as("inputPeerUser", v));
    return { ...inputPeer, _: "inputUser" };
  };

  async #constructReplyMarkup(params?: Pick<SendMessageParams, "replyMarkup">) {
    if (params?.replyMarkup) {
      this.#c.storage.assertBot("replyMarkup");
      return await replyMarkupToTlObject(params.replyMarkup, this.usernameResolver.bind(this));
    }
  }

  async #resolveSendAs(params?: Pick<SendMessageParams, "sendAs">) {
    const sendAs = params?.sendAs;
    if (sendAs !== undefined) {
      this.#c.storage.assertUser("sendAs");
      return sendAs ? await this.#c.getInputPeer(sendAs) : undefined;
    }
  }

  async sendMessageDraft(chatId: ID, draftId: number, text: string, params?: SendMessageDraftParams) {
    this.#c.storage.assertBot("sendMessageDraft");
    const [message, entities] = this.parseText(text, params);
    const peer = await this.#c.getInputPeer(chatId);
    await this.#c.invoke({
      _: "messages.setTyping",
      peer,
      action: { _: "sendMessageTextDraftAction", random_id: BigInt(draftId), text: { _: "textWithEntities", text: message, entities: entities ?? [] } },
      top_msg_id: params?.messageThreadId,
    });
  }

  async sendMessage(
    chatId: ID,
    text: string,
    params?: SendMessageParams,
  ) {
    this.#checkParams(params);
    const [message, entities] = this.parseText(text, params);

    const replyMarkup = await this.#constructReplyMarkup(params);

    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const noWebpage = params?.linkPreview?.isDisabled ? true : undefined;
    const invertMedia = params?.linkPreview?.isAboveText ? true : undefined;
    const silent = params?.isSilent ? true : undefined;
    const noforwards = params?.isContentProtected ? true : undefined;
    const sendAs = await this.#resolveSendAs(params);
    const effect = params?.effectId ? BigInt(params.effectId) : undefined;
    const schedule_date = params?.sendAt;
    const allow_paid_floodskip = params?.isPaidBroadcast ? true : undefined;

    let result: Api.Updates;
    if (!noWebpage && params?.linkPreview?.url) {
      result = await this.#c.invoke({
        _: "messages.sendMedia",
        peer,
        random_id: randomId,
        media: {
          _: "inputMediaWebPage",
          url: params.linkPreview.url,
          force_large_media: params.linkPreview.mediaSize === "large" ? true : undefined,
          force_small_media: params.linkPreview.mediaSize === "small" ? true : undefined,
          optional: message.length ? undefined : true,
        },
        message,
        invert_media: invertMedia,
        silent,
        noforwards,
        reply_to: await this.#constructReplyTo(params),
        send_as: sendAs,
        entities,
        reply_markup: replyMarkup,
        effect,
        schedule_date,
        allow_paid_floodskip,
      }, { businessConnectionId: params?.businessConnectionId });
    } else {
      result = await this.#c.invoke(
        {
          _: "messages.sendMessage",
          peer,
          random_id: randomId,
          message,
          no_webpage: noWebpage,
          invert_media: invertMedia,
          silent,
          noforwards,
          reply_to: await this.#constructReplyTo(params),
          send_as: sendAs,
          entities,
          reply_markup: replyMarkup,
          effect,
          schedule_date,
          allow_paid_floodskip,
        },
        { businessConnectionId: params?.businessConnectionId },
      );
    }

    const message_ = (await this.updatesToMessages(chatId, result, params?.businessConnectionId))[0];
    return assertMessageType(message_, "text");
  }

  async #constructReplyTo(params?: _SendCommon) {
    const topMsgId = params?.messageThreadId;
    if (!params?.replyTo) {
      if (topMsgId) {
        return { _: "inputReplyToMessage", reply_to_msg_id: topMsgId, top_msg_id: topMsgId } as Api.inputReplyToMessage;
      } else {
        return undefined;
      }
    }
    if ("messageId" in params.replyTo) {
      return { _: "inputReplyToMessage", reply_to_msg_id: params.replyTo.messageId, top_msg_id: topMsgId, quote_text: params.replyTo.quote?.text, quote_entities: await Promise.all(params.replyTo.quote?.entities.map((v) => messageEntityToTlObject(v, this.#c.getPeer)) ?? []), quote_offset: params.replyTo.quote?.offset } as Api.inputReplyToMessage;
    } else {
      return { _: "inputReplyToStory", peer: await this.#c.getInputPeer(params.replyTo.chatId), story_id: params.replyTo.storyId } as Api.inputReplyToStory;
    }
  }

  async sendVenue(chatId: ID, latitude: number, longitude: number, title: string, address: string, params?: SendVenueParams) {
    this.#checkParams(params);
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.isSilent ? true : undefined;
    const noforwards = params?.isContentProtected ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined;
    const replyMarkup = await this.#constructReplyMarkup(params);

    const result = await this.#c.invoke({
      _: "messages.sendMedia",
      peer,
      random_id: randomId,
      silent,
      noforwards,
      reply_to: await this.#constructReplyTo(params),
      send_as: sendAs,
      reply_markup: replyMarkup,
      media: {
        _: "inputMediaVenue",
        geo_point: {
          _: "inputGeoPoint",
          lat: latitude,
          long: longitude,
        },
        title,
        address,
        venue_id: params?.foursquareId ?? "",
        venue_type: params?.foursquareType ?? "",
        provider: "foursquare",
      },
      message: "",
      effect: params?.effectId ? BigInt(params.effectId) : undefined,
      schedule_date: params?.sendAt,
      allow_paid_floodskip: params?.isPaidBroadcast ? true : undefined,
    }, { businessConnectionId: params?.businessConnectionId });

    const message = (await this.updatesToMessages(chatId, result, params?.businessConnectionId))[0];
    return assertMessageType(message, "venue");
  }

  async sendContact(chatId: ID, firstName: string, number: string, params?: SendContactParams) {
    this.#checkParams(params);
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.isSilent ? true : undefined;
    const noforwards = params?.isContentProtected ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined;
    const replyMarkup = await this.#constructReplyMarkup(params);

    const result = await this.#c.invoke(
      {
        _: "messages.sendMedia",
        peer,
        random_id: randomId,
        silent,
        noforwards,
        reply_to: await this.#constructReplyTo(params),
        send_as: sendAs,
        reply_markup: replyMarkup,
        media: {
          _: "inputMediaContact",
          phone_number: number,
          first_name: firstName,
          last_name: params?.lastName ?? "",
          vcard: params?.vcard ?? "",
        },
        message: "",
        effect: params?.effectId ? BigInt(params.effectId) : undefined,
        schedule_date: params?.sendAt,
        allow_paid_floodskip: params?.isPaidBroadcast ? true : undefined,
      },
      { businessConnectionId: params?.businessConnectionId },
    );

    const message = (await this.updatesToMessages(chatId, result, params?.businessConnectionId))[0];
    return assertMessageType(message, "contact");
  }

  async sendDice(chatId: ID, params?: SendDiceParams) {
    this.#checkParams(params);
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.isSilent ? true : undefined;
    const noforwards = params?.isContentProtected ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined;
    const replyMarkup = await this.#constructReplyMarkup(params);

    const result = await this.#c.invoke({
      _: "messages.sendMedia",
      peer,
      random_id: randomId,
      silent,
      noforwards,
      reply_to: await this.#constructReplyTo(params),
      send_as: sendAs,
      reply_markup: replyMarkup,
      media: {
        _: "inputMediaDice",
        emoticon: params?.emoji ?? "🎲",
      },
      message: "",
      effect: params?.effectId ? BigInt(params.effectId) : undefined,
      schedule_date: params?.sendAt,
      allow_paid_floodskip: params?.isPaidBroadcast ? true : undefined,
    }, { businessConnectionId: params?.businessConnectionId });

    const message = (await this.updatesToMessages(chatId, result, params?.businessConnectionId))[0];
    return assertMessageType(message, "dice");
  }

  async sendLocation(chatId: ID, latitude: number, longitude: number, params?: SendLocationParams) {
    this.#checkParams(params);
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.isSilent ? true : undefined;
    const noforwards = params?.isContentProtected ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined;
    const replyMarkup = await this.#constructReplyMarkup(params);

    const result = await this.#c.invoke(
      {
        _: "messages.sendMedia",
        peer,
        random_id: randomId,
        silent,
        noforwards,
        reply_to: await this.#constructReplyTo(params),
        send_as: sendAs,
        reply_markup: replyMarkup,
        media: params?.livePeriod !== undefined
          ? ({
            _: "inputMediaGeoLive",
            geo_point: {
              _: "inputGeoPoint",
              lat: latitude,
              long: longitude,
              accuracy_radius: params?.horizontalAccuracy,
            },
            heading: params?.heading,
            period: params.livePeriod,
            proximity_notification_radius: params?.proximityAlertRadius,
          })
          : ({
            _: "inputMediaGeoPoint",
            geo_point: {
              _: "inputGeoPoint",
              lat: latitude,
              long: longitude,
              accuracy_radius: params?.horizontalAccuracy,
            },
          }),
        message: "",
        effect: params?.effectId ? BigInt(params.effectId) : undefined,
        schedule_date: params?.sendAt,
        allow_paid_floodskip: params?.isPaidBroadcast ? true : undefined,
      },
      { businessConnectionId: params?.businessConnectionId },
    );

    const message = (await this.updatesToMessages(chatId, result, params?.businessConnectionId))[0];
    return assertMessageType(message, "location");
  }

  async sendVideoNote(chatId: ID, audio: FileSource, params?: SendVideoNoteParams) {
    this.#checkParams(params);
    const message = await this.#sendDocumentInner(
      chatId,
      audio,
      params,
      FileType.VideoNote,
      [
        { _: "documentAttributeVideo", round_message: true, w: params?.length ?? 0, h: params?.length ?? 0, duration: params?.duration ?? 0 },
      ],
      false,
      VIDEO_NOTE_MIME_TYPES,
      () => "video_note.mp4",
    );
    return assertMessageType(message, "videoNote");
  }

  async sendAudio(chatId: ID, audio: FileSource, params?: SendAudioParams) {
    this.#checkParams(params);
    const message = await this.#sendDocumentInner(
      chatId,
      audio,
      params,
      FileType.Audio,
      [
        { _: "documentAttributeAudio", duration: params?.duration ?? 0, performer: params?.performer, title: params?.title },
      ],
      undefined,
      AUDIO_MIME_TYPES,
      (firstPart) => {
        if (MessageManager.#isM4a(firstPart)) {
          return "audio.m4a";
        } else {
          return "audio.mp3";
        }
      },
    );
    return assertMessageType(message, "audio");
  }

  static #isM4a(firstPart: Uint8Array) {
    return firstPart.length >= 10 && startsWith(firstPart.subarray(4), new Uint8Array([0x66, 0x74, 0x79, 0x70, 0x4D, 0x34]));
  }

  async sendVoice(chatId: ID, voice: FileSource, params?: SendVoiceParams) {
    this.#checkParams(params);
    const message = await this.#sendDocumentInner(
      chatId,
      voice,
      params,
      FileType.VoiceNote,
      [
        { _: "documentAttributeAudio", voice: true, duration: params?.duration ?? 0 },
      ],
      undefined,
      VOICE_MIME_TYPES,
      (firstPart) => {
        if (startsWith(firstPart, new Uint8Array([0x4F, 0x67, 0x67]))) {
          return "voice.ogg";
        } else if (MessageManager.#isM4a(firstPart)) {
          return "voice.m4a";
        } else {
          return "voice.mp3";
        }
      },
    );
    return assertMessageType(message, "voice");
  }

  async sendAnimation(chatId: ID, animation: FileSource, params?: SendAnimationParams) {
    this.#checkParams(params);
    const message = await this.#sendDocumentInner(
      chatId,
      animation,
      params,
      FileType.Animation,
      [
        { _: "documentAttributeAnimated" },
        { _: "documentAttributeVideo", supports_streaming: true, w: params?.width ?? 0, h: params?.height ?? 0, duration: params?.duration ?? 0 },
      ],
      undefined,
      ANIMATION_MIME_TYPES,
      (firstPart) => {
        if (startsWith(firstPart, new Uint8Array([0x47, 0x49, 0x46]))) {
          return "file.gif";
        } else {
          return "file.mp4";
        }
      },
    );
    return assertMessageType(message, "animation");
  }

  async sendVideo(chatId: ID, video: FileSource, params?: SendVideoParams) {
    this.#checkParams(params);
    const message = await this.#sendDocumentInner(
      chatId,
      video,
      params,
      FileType.Video,
      [
        { _: "documentAttributeVideo", supports_streaming: params?.supportsStreaming ? true : undefined, w: params?.width ?? 0, h: params?.height ?? 0, duration: params?.duration ?? 0 },
      ],
      undefined,
      VIDEO_MIME_TYPES,
      () => "video.mp4",
    );
    return assertMessageType(message, "video");
  }

  async #sendDocumentInner(chatId: ID, document: FileSource, params: SendDocumentParams & _SpoilCommon | undefined, fileType: FileType, otherAttribs: Api.DocumentAttribute[], urlSupported = true, expectedMimeTypes?: string[], createName?: (firstPart: Uint8Array) => string) {
    let media: Api.InputMedia | null = null;
    const spoiler = params?.hasSpoiler ? true : undefined;
    const ttl_seconds = params && "selfDestruct" in params && typeof params.selfDestruct !== undefined ? selfDestructOptionToInt(params.selfDestruct as SelfDestructOption) : undefined;

    if (typeof document === "string") {
      const fileId = this.resolveFileId(document, fileType);
      if (fileId !== null) {
        media = { _: "inputMediaDocument", id: { ...fileId, _: "inputDocument" }, spoiler, query: otherAttribs.find((v): v is Api.documentAttributeSticker => Api.is("documentAttributeSticker", v))?.alt || undefined, ttl_seconds };
      }
    }

    if (media === null) {
      if (typeof document === "string" && isHttpUrl(document)) {
        if (!urlSupported) {
          throw new InputError("URL not supported.");
        }
        media = { _: "inputMediaDocumentExternal", url: document, spoiler, ttl_seconds };
      } else {
        let mimeType: string | undefined;
        const file = await this.#c.fileManager.upload(document, params, (name, firstPart) => {
          if (!params?.fileName && firstPart && createName) {
            name = createName(firstPart);
          }
          mimeType = params?.mimeType ?? contentType(name.split(".").slice(-1)[0]);
          if (name.endsWith(".tgs") && fileType === FileType.Document) {
            name += "-";
          }
          return name;
        });
        mimeType ??= FALLBACK_MIME_TYPE;
        if (mimeType && expectedMimeTypes && !expectedMimeTypes.includes(mimeType)) {
          unreachable();
        }
        if (Api.is("inputFileStoryDocument", file)) {
          unreachable();
        }
        let thumb: Api.InputFile | undefined = undefined;
        if (params?.thumbnail) {
          thumb = await this.#c.fileManager.upload(params.thumbnail, { chunkSize: params?.chunkSize, signal: params?.signal });
        }
        media = { _: "inputMediaUploadedDocument", file, thumb, spoiler, attributes: [{ _: "documentAttributeFilename", file_name: file.name }, ...otherAttribs], mime_type: mimeType, force_file: fileType === FileType.Document ? true : undefined, ttl_seconds };
      }
    }

    const message = await this.#sendMedia(chatId, media, params);
    return message;
  }

  async sendDocument(chatId: ID, document: FileSource, params?: SendDocumentParams) {
    this.#checkParams(params);
    const message = await this.#sendDocumentInner(chatId, document, params, FileType.Document, []);
    return assertMessageType(message, "document");
  }

  async sendSticker(chatId: ID, sticker: FileSource, params?: SendStickerParams) {
    this.#checkParams(params);
    const message = await this.#sendDocumentInner(chatId, sticker, params, FileType.Sticker, [{ _: "documentAttributeSticker", alt: params?.emoji || "", stickerset: { _: "inputStickerSetEmpty" } }], undefined, STICKER_MIME_TYPES, checkStickerName);
    return assertMessageType(message, "sticker");
  }

  async sendPhoto(chatId: ID, photo: FileSource, params?: SendPhotoParams) {
    this.#checkParams(params);
    let media: Api.InputMedia | null = null;
    const spoiler = params?.hasSpoiler ? true : undefined;
    const ttl_seconds = params && "selfDestruct" in params && params.selfDestruct !== undefined ? selfDestructOptionToInt(params.selfDestruct) : undefined;

    if (typeof photo === "string") {
      const fileId = this.resolveFileId(photo, [FileType.Photo, FileType.ProfilePhoto]);
      if (fileId !== null) {
        media = { _: "inputMediaPhoto", id: { ...fileId, _: "inputPhoto" }, spoiler, ttl_seconds };
      }
    }

    if (media === null) {
      if (typeof photo === "string" && isHttpUrl(photo)) {
        media = { _: "inputMediaPhotoExternal", url: photo, spoiler, ttl_seconds: (params && "selfDestruct" in params && params.selfDestruct !== undefined) ? selfDestructOptionToInt(params.selfDestruct) : undefined };
      } else {
        const file = await this.#c.fileManager.upload(photo, params, checkPhotoName(params), false);
        media = { _: "inputMediaUploadedPhoto", file, spoiler, ttl_seconds: (params && "selfDestruct" in params && params.selfDestruct !== undefined) ? selfDestructOptionToInt(params.selfDestruct) : undefined };
      }
    }

    const message = await this.#sendMedia(chatId, media, params);
    return assertMessageType(message, "photo");
  }

  async #sendMedia(chatId: ID, media: Api.InputMedia, params: SendPhotoParams | undefined) {
    if (params?.starCount !== undefined) {
      if (params.starCount <= 0) {
        throw new InputError("starCount cannot be zero or negative");
      }
      media = { _: "inputMediaPaidMedia", stars_amount: BigInt(params.starCount), extended_media: [media] };
    }
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.isSilent ? true : undefined;
    const noforwards = params?.isContentProtected ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined;
    const replyMarkup = await this.#constructReplyMarkup(params);

    const caption_ = params?.caption;
    const parseResult = caption_ !== undefined ? this.parseText(caption_, { parseMode: params?.parseMode, entities: params?.captionEntities }) : undefined;

    const caption = parseResult?.[0];
    const captionEntities = parseResult?.[1];

    const result = await this.#c.invoke(
      {
        _: "messages.sendMedia",
        peer,
        random_id: randomId,
        silent,
        noforwards,
        reply_markup: replyMarkup,
        reply_to: await this.#constructReplyTo(params),
        send_as: sendAs,
        media,
        message: caption ?? "",
        entities: captionEntities,
        effect: params?.effectId ? BigInt(params.effectId) : undefined,
        schedule_date: params?.sendAt,
        allow_paid_floodskip: params?.isPaidBroadcast ? true : undefined,
      },
      { businessConnectionId: params?.businessConnectionId },
    );

    return (await this.updatesToMessages(chatId, result, params?.businessConnectionId))[0];
  }

  resolveFileId(maybeFileId: string, expectedFileType: FileType | FileType[]) {
    expectedFileType = Array.isArray(expectedFileType) ? expectedFileType : [expectedFileType];
    let fileId: FileId | null = null;
    try {
      fileId = deserializeFileId(maybeFileId);
    } catch (err) {
      this.#LresolveFileId.warning(err);
    }
    if (fileId !== null) {
      if (!expectedFileType.includes(fileId.type)) {
        unreachable();
      }
      return {
        id: "id" in fileId.location ? fileId.location.id : unreachable(),
        access_hash: fileId.location.accessHash,
        file_reference: fileId.fileReference ?? new Uint8Array(),
      };
    }
    return null;
  }

  async sendPoll(chatId: ID, question: string, options: InputPollOption[], params?: SendPollParams) {
    this.#checkParams(params);
    question = question?.trim();
    if (!question) {
      throw new Error("Question must not be empty.");
    }
    if (!Array.isArray(options) || options.length < 2) {
      throw new Error("There must be at least two options.");
    }
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.isSilent ? true : undefined;
    const noforwards = params?.isContentProtected ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined;
    const replyMarkup = await this.#constructReplyMarkup(params);

    const explanation = params?.explanation;
    const parseResult = explanation !== undefined ? this.parseText(explanation, { parseMode: params?.explanationParseMode, entities: params?.explanationEntities }) : undefined;

    const solution = parseResult?.[0];
    const solutionEntities = parseResult?.[1];

    const answers: Api.pollAnswer[] = options.map((v, i) => {
      const text = v.text;
      const entities = v.entities;
      const parseResult = this.parseText(text, { parseMode: v.parseMode, entities });
      return ({ _: "pollAnswer", option: encodeText(String(i)), text: { _: "textWithEntities", text: parseResult[0], entities: parseResult[1] ?? [] } });
    });

    const questionParseResult = this.parseText(question, { parseMode: params?.questionParseMode, entities: params?.questionEntities });
    const poll: Api.poll = { _: "poll", id: getRandomId(), answers, question: { _: "textWithEntities", text: questionParseResult[0], entities: questionParseResult[1] ?? [] }, closed: params?.isClosed ? true : undefined, close_date: params?.closeDate, close_period: params?.openPeriod ? params.openPeriod : undefined, multiple_choice: params?.isMultipleAnswersAllowed ? true : undefined, public_voters: params?.isAnonymous === false ? true : undefined, quiz: params?.type === "quiz" ? true : undefined, hash: 0n, revoting_disabled: params?.isRevotingAllowed === false ? true : undefined, shuffle_answers: params?.isShuffled ? true : undefined, hide_results_until_close: params?.isResultHidden ? true : undefined, open_answers: params?.isAddingOptionsAllowed ? true : undefined };

    const media: Api.inputMediaPoll = { _: "inputMediaPoll", poll, correct_answers: params?.correctOptionIndexes, solution, solution_entities: solutionEntities };

    const description = params?.description;
    const parseResult2 = description !== undefined ? this.parseText(description, { parseMode: params?.descriptionParseMode, entities: params?.descriptionEntities }) : undefined;
    const caption = parseResult2?.[0];
    const entities = parseResult2?.[1];

    const result = await this.#c.invoke(
      {
        _: "messages.sendMedia",
        peer,
        random_id: randomId,
        silent,
        noforwards,
        reply_markup: replyMarkup,
        reply_to: await this.#constructReplyTo(params),
        send_as: sendAs,
        media,
        message: caption ?? "",
        entities,
        effect: params?.effectId ? BigInt(params.effectId) : undefined,
        schedule_date: params?.sendAt,
        allow_paid_floodskip: params?.isPaidBroadcast ? true : undefined,
      },
      { businessConnectionId: params?.businessConnectionId },
    );

    const message = (await this.updatesToMessages(chatId, result, params?.businessConnectionId))[0];
    return assertMessageType(message, "poll");
  }

  async sendChecklist(chatId: ID, title: string, items: InputChecklistItem[], params?: SendChecklistParams) {
    this.#checkParams(params);
    title = title?.trim();
    if (!title) {
      throw new Error("Title must not be empty.");
    }
    if (!Array.isArray(items) || items.length < 1) {
      throw new Error("There must be at least one item.");
    }
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.isSilent ? true : undefined;
    const noforwards = params?.isContentProtected ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined;

    const list: Api.todoItem[] = items.map((v, i) => {
      const text = v.text;
      const entities = v.entities;
      const parseResult = this.parseText(text, { parseMode: v.parseMode, entities });
      return ({ _: "todoItem", id: i + 1, title: { _: "textWithEntities", text: parseResult[0], entities: parseResult[1] ?? [] } });
    });

    const titleParseResult = this.parseText(title, { parseMode: params?.titleParseMode, entities: params?.titleEntities });
    const todo: Api.todoList = {
      _: "todoList",
      title: { _: "textWithEntities", text: titleParseResult[0], entities: titleParseResult[1] ?? [] },
      list,
      others_can_append: params?.isExtendableByOthers ? true : undefined,
      others_can_complete: params?.isCompletableByOthers ? true : undefined,
    };

    const media: Api.inputMediaTodo = { _: "inputMediaTodo", todo };

    const result = await this.#c.invoke(
      {
        _: "messages.sendMedia",
        peer,
        random_id: randomId,
        silent,
        noforwards,
        reply_to: await this.#constructReplyTo(params),
        send_as: sendAs,
        media,
        message: "",
        effect: params?.effectId ? BigInt(params.effectId) : undefined,
        schedule_date: params?.sendAt,
        allow_paid_floodskip: params?.isPaidBroadcast ? true : undefined,
      },
      { businessConnectionId: params?.businessConnectionId },
    );

    const message = (await this.updatesToMessages(chatId, result, params?.businessConnectionId))[0];
    return assertMessageType(message, "checklist");
  }

  async editMessageReplyMarkup(
    chatId: ID,
    messageId: number,
    params?: EditMessageReplyMarkupParams,
  ) {
    this.#checkParams(params);
    const result = await this.#c.invoke({
      _: "messages.editMessage",
      id: checkMessageId(messageId),
      peer: await this.#c.getInputPeer(chatId),
      reply_markup: await this.#constructReplyMarkup(params),
    }, { businessConnectionId: params?.businessConnectionId });

    const message_ = (await this.updatesToMessages(chatId, result))[0];
    return message_;
  }

  async editInlineMessageReplyMarkup(
    inlineMessageId: string,
    params?: EditMessageReplyMarkupParams,
  ) {
    const id = await deserializeInlineMessageId(inlineMessageId);

    await this.#c.invoke({
      _: "messages.editInlineBotMessage",
      id,
      reply_markup: await this.#constructReplyMarkup(params),
    }, { dc: getDc(id.dc_id) });
  }

  async editMessageText(
    chatId: ID,
    messageId: number,
    text: string,
    params?: EditMessageTextParams,
  ) {
    this.#checkParams(params);
    {
      const message = await this.getMessage(chatId, messageId);
      if (!message) {
        throw new InputError("Message not found.");
      }
      if (message.type !== "link" && message.type !== "text") {
        throw new InputError("The referenced message is not a text message.");
      }
    }
    const [message, entities] = this.parseText(text, params);
    if (!message) {
      throw new InputError("Message text cannot be empty.");
    }
    if (params?.linkPreview && params.linkPreview.type !== "input") {
      throw new InputError("Expected link preview of type input.");
    }
    const noWebpage = params?.linkPreview && params.linkPreview.type === "input" && params.linkPreview.isDisabled ? true : undefined;
    const invertMedia = params?.linkPreview?.isAboveText ? true : undefined;

    let media: Api.InputMedia | undefined = undefined;
    if (!noWebpage && params?.linkPreview?.url) {
      media = { _: "inputMediaWebPage", url: params.linkPreview.url, force_large_media: params.linkPreview.mediaSize === "large" ? true : undefined, force_small_media: params.linkPreview.mediaSize === "small" ? true : undefined, optional: message.length ? undefined : true };
    }

    const result = await this.#c.invoke({
      _: "messages.editMessage",
      id: checkMessageId(messageId),
      peer: await this.#c.getInputPeer(chatId),
      entities,
      message,
      media,
      no_webpage: noWebpage,
      invert_media: invertMedia,
      reply_markup: await this.#constructReplyMarkup(params),
    }, { businessConnectionId: params?.businessConnectionId });

    const message_ = (await this.updatesToMessages(chatId, result))[0];
    return assertMessageType(message_, "text");
  }

  static #CAPTIONABLE_MESSAGE_TYPES = ["photo", "document", "video", "animation", "voice", "audio", "video"] as const;
  async editMessageCaption(chatId: ID, messageId: number, params?: EditMessageCaptionParams) {
    let canHaveCaption = false;
    const message_ = await this.getMessage(chatId, messageId);
    if (!message_) {
      throw new InputError("Message not found.");
    }
    for (const type of MessageManager.#CAPTIONABLE_MESSAGE_TYPES) {
      if (message_.type !== type) {
        canHaveCaption = true;
      }
    }
    if (!canHaveCaption) {
      throw new InputError("The referenced message cannot have a caption.");
    }

    const [message, entities] = this.parseText(params?.caption ?? "", params);

    const result = await this.#c.invoke({
      _: "messages.editMessage",
      id: checkMessageId(messageId),
      peer: await this.#c.getInputPeer(chatId),
      entities: message ? entities : [],
      message,
      reply_markup: await this.#constructReplyMarkup(params),
    }, { businessConnectionId: params?.businessConnectionId });

    return (await this.updatesToMessages(chatId, result))[0];
  }

  async #editInlineMessageTextInner(inlineMessageId: string, text: string, params?: EditMessageTextParams, allowEmpty = true) {
    this.#checkParams(params);
    const [message, entities] = this.parseText(text, params);
    if (!allowEmpty && !message) {
      throw new InputError("Message text cannot be empty.");
    }

    const id = await deserializeInlineMessageId(inlineMessageId);
    if (params?.linkPreview && params.linkPreview.type !== "input") {
      throw new InputError("Expected link preview of type input.");
    }
    const noWebpage = params?.linkPreview && params.linkPreview.type === "input" && params.linkPreview.isDisabled ? true : undefined;
    const invertMedia = params?.linkPreview?.isAboveText ? true : undefined;

    let media: Api.InputMedia | undefined = undefined;
    if (!noWebpage && params?.linkPreview?.url) {
      media = { _: "inputMediaWebPage", url: params.linkPreview.url, force_large_media: params.linkPreview.mediaSize === "large" ? true : undefined, force_small_media: params.linkPreview.mediaSize === "small" ? true : undefined, optional: message.length ? undefined : true };
    }

    await this.#c.invoke({
      _: "messages.editInlineBotMessage",
      id,
      entities,
      message,
      media,
      no_webpage: noWebpage,
      invert_media: invertMedia,
      reply_markup: await this.#constructReplyMarkup(params),
    }, { dc: getDc(id.dc_id) });
  }

  async editInlineMessageText(inlineMessageId: string, text: string, params?: EditInlineMessageTextParams) {
    await this.#editInlineMessageTextInner(inlineMessageId, text, params, false);
  }

  async editInlineMessageCaption(inlineMessageId: string, params?: EditInlineMessageCaptionParams) {
    await this.#editInlineMessageTextInner(inlineMessageId, params?.caption ?? "", params);
  }

  async #resolveInputMediaInner(document: FileSource, media: InputMedia, fileType: FileType, otherAttribs: Api.DocumentAttribute[]) {
    let media_: Exclude<Api.InputMedia, Api.inputMediaEmpty> | null = null;
    const spoiler = "hasSpoiler" in media && media.hasSpoiler ? true : undefined;

    if (typeof document === "string") {
      const fileId = this.resolveFileId(document, fileType);
      if (fileId !== null) {
        media_ = { _: "inputMediaDocument", id: { ...fileId, _: "inputDocument" }, spoiler, query: otherAttribs.find((v): v is Api.documentAttributeSticker => Api.is("documentAttributeSticker", v))?.alt || undefined };
      }
    }

    if (media_ === null) {
      if (typeof document === "string" && isHttpUrl(document)) {
        media_ = { _: "inputMediaDocumentExternal", url: document, spoiler };
      } else {
        let mimeType: string;
        const file = await this.#c.fileManager.upload(document, media, (name) => {
          mimeType = media?.mimeType ?? contentType(name.split(".").slice(-1)[0]) ?? FALLBACK_MIME_TYPE;
          if (name.endsWith(".tgs") && fileType === FileType.Document) {
            name += "-";
          }
          return name;
        });
        if (Api.is("inputFileStoryDocument", file)) {
          unreachable();
        }
        let thumb: Api.InputFile | undefined = undefined;
        if ("thumbnail" in media && media.thumbnail) {
          thumb = await this.#c.fileManager.upload(media.thumbnail, { chunkSize: media?.chunkSize, signal: media?.signal });
        }
        media_ = { _: "inputMediaUploadedDocument", file, thumb, spoiler, attributes: [{ _: "documentAttributeFilename", file_name: file.name }, ...otherAttribs], mime_type: mimeType!, force_file: fileType === FileType.Document ? true : undefined };
      }
    }

    return media_;
  }
  async #resolveInputMedia(media: InputMedia) {
    if ("animation" in media) {
      return await this.#resolveInputMediaInner(media.animation, media, FileType.Animation, [
        { _: "documentAttributeAnimated" },
        { _: "documentAttributeVideo", supports_streaming: true, w: media?.width ?? 0, h: media?.height ?? 0, duration: media?.duration ?? 0 },
      ]);
    } else if ("audio" in media) {
      return await this.#resolveInputMediaInner(media.audio, media, FileType.Audio, [
        { _: "documentAttributeAudio", duration: media?.duration ?? 0, performer: media?.performer, title: media?.title },
      ]);
    } else if ("document" in media) {
      return await this.#resolveInputMediaInner(media.document, media, FileType.Document, []);
    } else if ("photo" in media) {
      let media_: Api.InputMedia | null = null;
      const spoiler = media.hasSpoiler ? true : undefined;
      const ttl_seconds = "selfDestruct" in media && media.selfDestruct !== undefined ? selfDestructOptionToInt(media.selfDestruct) : undefined;

      if (typeof media.photo === "string") {
        const fileId = this.resolveFileId(media.photo, [FileType.Photo, FileType.ProfilePhoto]);
        if (fileId !== null) {
          media_ = { _: "inputMediaPhoto", id: { ...fileId, _: "inputPhoto" }, spoiler, ttl_seconds };
        }
      }

      if (media_ === null) {
        if (typeof media.photo === "string" && isHttpUrl(media.photo)) {
          media_ = { _: "inputMediaPhotoExternal", url: media.photo, spoiler };
        } else {
          const file = await this.#c.fileManager.upload(media.photo, media, null, false);
          media_ = { _: "inputMediaUploadedPhoto", file, spoiler, ttl_seconds };
        }
      }

      return media_;
    } else if ("video" in media) {
      const ttl_seconds = "selfDestruct" in media && media.selfDestruct !== undefined ? selfDestructOptionToInt(media.selfDestruct) : undefined;
      const media_ = await this.#resolveInputMediaInner(media.video, media, FileType.Video, [
        { _: "documentAttributeVideo", supports_streaming: media?.supportsStreaming ? true : undefined, w: media?.width ?? 0, h: media?.height ?? 0, duration: media?.duration ?? 0 },
      ]);
      media_.ttl_seconds = ttl_seconds;
      return media_;
    } else {
      unreachable();
    }
  }
  async #resolveInputMediaUpload(media: InputMedia, businessConnectionId?: string): Promise<Api.InputMedia> {
    const inputMedia = await this.#resolveInputMedia(media);
    if (Api.is("inputMediaUploadedPhoto", inputMedia) || Api.is("inputMediaUploadedDocument", inputMedia)) {
      const messageMedia = await this.#c.invoke({
        _: "messages.uploadMedia",
        peer: { _: "inputPeerSelf" },
        media: inputMedia,
        business_connection_id: businessConnectionId,
      });
      if (("photo" in messageMedia) && Api.is("photo", messageMedia.photo)) {
        return {
          _: "inputMediaPhoto",
          id: {
            _: "inputPhoto",
            id: messageMedia.photo.id,
            access_hash: messageMedia.photo.access_hash,
            file_reference: messageMedia.photo.file_reference,
          },
          spoiler: "hasSpoiler" in media && media.hasSpoiler ? true : undefined,
        };
      } else if ("document" in messageMedia && Api.is("document", messageMedia.document)) {
        return {
          _: "inputMediaDocument",
          id: { _: "inputDocument", id: messageMedia.document.id, access_hash: messageMedia.document.access_hash, file_reference: messageMedia.document.file_reference },
          spoiler: "hasSpoiler" in media && media.hasSpoiler ? true : undefined,
        };
      } else {
        unreachable();
      }
    }

    return inputMedia;
  }

  async editMessageMedia(
    chatId: ID,
    messageId: number,
    media: InputMedia,
    params?: EditMessageMediaParams,
  ) {
    this.#checkParams(params);
    const message = await this.getMessage(chatId, messageId);
    if (!message) {
      throw new InputError("Message not found.");
    }
    if (!("animation" in message) && !("audio" in message) && !("document" in message) && !("photo" in message) && !("video" in message)) {
      throw new InputError("Unexpected message type.");
    }
    const [text, entities] = media.caption !== undefined ? this.parseText(media.caption, { entities: media.captionEntities, parseMode: media.parseMode }) : ["", []];
    const result = await this.#c.invoke({
      _: "messages.editMessage",
      peer: await this.#c.getInputPeer(chatId),
      id: messageId,
      media: await this.#resolveInputMedia(media),
      reply_markup: await this.#constructReplyMarkup(params),
      message: text,
      entities,
    }, { businessConnectionId: params?.businessConnectionId });

    const message_ = (await this.updatesToMessages(chatId, result))[0];
    return message_;
  }

  async editInlineMessageMedia(inlineMessageId: string, media: InputMedia, params?: EditInlineMessageMediaParams) {
    this.#checkParams(params);
    this.#c.storage.assertBot("editInlineMessageMedia");
    const id = await deserializeInlineMessageId(inlineMessageId);
    await this.#c.invoke({
      _: "messages.editInlineBotMessage",
      id,
      media: await this.#resolveInputMediaUpload(media),
      reply_markup: await this.#constructReplyMarkup(params),
    }, { dc: getDc(id.dc_id) });
  }

  async deleteMessages(chatId: ID, messageIds: number[], params?: DeleteMessagesParams) {
    checkArray(messageIds, checkMessageId);
    const peer = await this.#c.getInputPeer(chatId);
    if (canBeInputChannel(peer)) {
      await this.#c.invoke({ _: "channels.deleteMessages", channel: toInputChannel(peer), id: messageIds });
    } else {
      await this.#c.invoke({ _: "messages.deleteMessages", id: messageIds, revoke: params?.onlyForMe ? undefined : true });
    }
  }

  async deleteScheduledMessages(chatId: ID, messageIds: number[]) {
    this.#c.storage.assertUser("sendScheduledMessage");
    checkArray(messageIds, checkMessageId);
    const peer = await this.#c.getInputPeer(chatId);
    await this.#c.invoke({ _: "messages.deleteScheduledMessages", peer, id: messageIds });
  }

  async deleteScheduledMessage(chatId: ID, messageId: number) {
    this.#c.storage.assertUser("deleteScheduledMessage");
    return await this.deleteScheduledMessages(chatId, [messageId]);
  }

  async sendScheduledMessages(chatId: ID, messageIds: number[]) {
    this.#c.storage.assertUser("sendScheduledMessages");
    checkArray(messageIds, checkMessageId);
    const peer = await this.#c.getInputPeer(chatId);
    const result = await this.#c.invoke({ _: "messages.sendScheduledMessages", peer, id: messageIds });
    return await this.updatesToMessages(chatId, result);
  }

  async sendScheduledMessage(chatId: ID, messageId: number) {
    this.#c.storage.assertUser("sendScheduledMessage");
    return (await this.sendScheduledMessages(chatId, [messageId]))[0];
  }

  async deleteChatMemberMessages(chatId: ID, memberId: ID) {
    this.#c.storage.assertUser("deleteChatMemberMessages");
    const channel = await this.#c.getInputChannel(chatId);
    const participant = await this.#c.getInputPeer(memberId);
    await this.#c.invoke({ _: "channels.deleteParticipantHistory", channel, participant });
  }

  async pinMessage(chatId: ID, messageId: number, params?: PinMessageParams) {
    this.#checkParams(params);
    await this.#c.invoke({ _: "messages.updatePinnedMessage", peer: await this.#c.getInputPeer(chatId), id: checkMessageId(messageId), silent: params?.isSilent ? true : undefined, pm_oneside: params?.bothSides ? undefined : true });
  }

  async unpinMessage(chatId: ID, messageId: number, params?: UnpinMessageParams) {
    this.#checkParams(params);
    await this.#c.invoke({ _: "messages.updatePinnedMessage", peer: await this.#c.getInputPeer(chatId), id: checkMessageId(messageId), unpin: true }, { businessConnectionId: params?.businessConnectionId });
  }

  async unpinMessages(chatId: ID, params?: UnpinMessagesParams) {
    await this.#c.invoke({
      _: "messages.unpinAllMessages",
      peer: await this.#c.getInputPeer(chatId),
      top_msg_id: params?.topicId,
    });
  }

  async #sendReaction(chatId: ID, messageId: number, reactions: Reaction[], params?: AddReactionParams) {
    await this.#c.invoke({ _: "messages.sendReaction", peer: await this.#c.getInputPeer(chatId), msg_id: checkMessageId(messageId), reaction: reactions.map((v) => reactionToTlObject(v)), big: params?.isBig ? true : undefined, add_to_recent: params?.addToRecents ? true : undefined });
  }

  async setReactions(chatId: ID, messageId: number, reactions: Reaction[], params?: SetReactionsParams) {
    await this.#sendReaction(chatId, messageId, reactions, params);
  }

  async addReaction(chatId: ID, messageId: number, reaction: Reaction, params?: AddReactionParams) {
    const message = await this.getMessage(chatId, messageId);
    if (!message) {
      throw new InputError("Message not found.");
    }
    const chosenReactions = (message.reactions ?? []).filter((v) => v.isChosen);
    for (const r of chosenReactions) {
      if (reactionEqual(r.reaction, reaction)) {
        return;
      }
    }
    const reactions = [reaction, ...chosenReactions.map((v) => v.reaction)];
    await this.setReactions(chatId, messageId, reactions, params);
  }

  async removeReaction(chatId: ID, messageId: number, reaction: Reaction) {
    const message = await this.getMessage(chatId, messageId);
    if (!message) {
      throw new InputError("Message not found.");
    }
    const chosenReactions = (message.reactions ?? []).filter((v) => v.isChosen);
    for (const r of chosenReactions) {
      if (reactionEqual(r.reaction, reaction)) {
        const reactions = chosenReactions.filter((v) => v !== r).map((v) => v.reaction);
        await this.setReactions(chatId, messageId, reactions);
        break;
      }
    }
  }

  async clearRecentReactions() {
    this.#c.storage.assertUser("clearRecentReactions");
    await this.#c.invoke({ _: "messages.clearRecentReactions" });
  }

  canHandleUpdate(update: Api.Update): update is MessageManagerUpdate {
    return Api.isOneOf(messageManagerUpdates, update);
  }

  async handleUpdate(update: MessageManagerUpdate): Promise<Update | null> {
    if (Api.is("updateNewMessage", update) || Api.is("updateNewChannelMessage", update) || Api.is("updateEditMessage", update) || Api.is("updateEditChannelMessage", update)) {
      if (Api.is("message", update.message) || Api.is("messageService", update.message)) {
        const chatId = Api.peerToChatId(update.message.peer_id);
        await this.#c.messageStorage.setMessage(chatId, update.message.id, update.message);
      }
    }

    if (
      Api.isOneOf([
        "updateNewMessage",
        "updateNewChannelMessage",
        "updateEditMessage",
        "updateEditChannelMessage",
        "updateBotNewBusinessMessage",
        "updateBotEditBusinessMessage",
        "updateNewScheduledMessage",
      ], update)
    ) {
      if (!(Api.is("messageEmpty", update.message))) {
        const isOutgoing = update.message.out;
        let shouldIgnore = false;
        if (isOutgoing) {
          if ("connection_id" in update && update.connection_id === "") {
            shouldIgnore = true;
          } else {
            shouldIgnore = !this.#c.outgoingMessages;
          }
        }
        if (!shouldIgnore) {
          const business = "connection_id" in update ? { connectionId: update.connection_id, replyToMessage: update.reply_to_message } : undefined;
          const message = await this.constructMessage(update.message, undefined, business);
          if (Api.is("updateNewMessage", update) || Api.is("updateNewChannelMessage", update) || Api.is("updateBotNewBusinessMessage", update)) {
            return { type: "message", message };
          } else if (Api.is("updateNewScheduledMessage", update)) {
            message.isScheduled = true;
            return { type: "scheduledMessage", scheduledMessage: message };
          } else {
            return { type: "editedMessage", editedMessage: message };
          }
        }
      }
    }

    if (Api.is("updateDeleteMessages", update)) {
      const deletedMessages = new Array<{ chatId: number; messageId: number }>();
      for (const messageId of update.messages) {
        const chatId = await this.#c.messageStorage.getMessageChat(messageId);
        if (chatId) {
          deletedMessages.push({ chatId, messageId });
        }
      }
      if (deletedMessages.length > 0) {
        return { type: "deletedMessages", deletedMessages };
      }
    } else if (Api.is("updateDeleteChannelMessages", update)) {
      const chatId = Api.getChannelChatId(update.channel_id);
      const deletedMessages = new Array<{ chatId: number; messageId: number }>();
      for (const messageId of update.messages) {
        const message = await this.#c.messageStorage.getMessage(chatId, messageId);
        if (message !== null) {
          deletedMessages.push({ chatId, messageId });
        }
      }
      return { type: "deletedMessages", deletedMessages };
    } else if (Api.is("updateDeleteScheduledMessages", update)) {
      const chatId = Api.peerToChatId(update.peer);
      const deletedMessages = update.messages.map((v) => ({ chatId, messageId: v }));
      return { type: "deletedMessages", deletedMessages, isScheduled: true };
    } else if (Api.is("updateBotDeleteBusinessMessage", update)) {
      const chatId = Api.peerToChatId(update.peer);
      const deletedMessages = update.messages.map((v) => ({ chatId, messageId: v }));
      return { type: "deletedMessages", deletedMessages, businessConnectionId: update.connection_id };
    }

    if (Api.is("updateTranscribedAudio", update)) {
      const voiceTranscription = constructVoiceTranscription(update);
      await this.#c.messageStorage.setVoiceTranscription(voiceTranscription);
      return { type: "voiceTranscription", voiceTranscription };
    }

    if (Api.isOneOf(["updateUserTyping", "updateChatUserTyping", "updateChannelUserTyping"], update)) {
      const chatAction = constructChatAction(update);
      if (chatAction !== null) {
        return { type: "chatAction", chatAction };
      }
    }

    if (Api.is("updateUserTyping", update)) {
      const messageDraft = constructMessageDraft(update);
      if (messageDraft !== null) {
        return { type: "messageDraft", messageDraft };
      }
    }

    return null;
  }

  async sendChatAction(chatId: ID, action: ChatActionType, params?: SendChatActionParams) {
    this.#checkParams(params);
    let action_: Api.SendMessageAction;
    switch (action.type) {
      case "typing":
        action_ = { _: "sendMessageTypingAction" };
        break;
      case "uploadingPhoto":
        action_ = { _: "sendMessageUploadPhotoAction", progress: action.progress ?? 0 };
        break;
      case "recordingVideo":
        action_ = { _: "sendMessageRecordVideoAction" };
        break;
      case "uploadingVideo":
        action_ = { _: "sendMessageUploadVideoAction", progress: action.progress ?? 0 };
        break;
      case "recordingVoice":
        action_ = { _: "sendMessageRecordAudioAction" };
        break;
      case "uploadingAudio":
        action_ = { _: "sendMessageUploadAudioAction", progress: action.progress ?? 0 };
        break;
      case "uploadingDocument":
        action_ = { _: "sendMessageUploadDocumentAction", progress: action.progress ?? 0 };
        break;
      case "choosingSticker":
        action_ = { _: "sendMessageChooseStickerAction" };
        break;
      case "choosingLocation":
        action_ = { _: "sendMessageGeoLocationAction" };
        break;
      case "recordingVideoNote":
        action_ = { _: "sendMessageRecordRoundAction" };
        break;
      case "uploadingVideoNote":
        action_ = { _: "sendMessageUploadRoundAction", progress: action.progress ?? 0 };
        break;
      case "playingGame":
        action_ = { _: "sendMessageGamePlayAction" };
        break;
      case "cancel":
        action_ = { _: "sendMessageCancelAction" };
        break;
      default:
        throw new InputError(`Invalid chat action: ${action}`);
    }
    await this.#c.invoke({ _: "messages.setTyping", peer: await this.#c.getInputPeer(chatId), action: action_, top_msg_id: params?.messageThreadId }, { businessConnectionId: params?.businessConnectionId });
  }

  async searchMessages(params?: SearchMessagesParams): Promise<MessageList> {
    this.#c.storage.assertUser("searchMessages");
    const peer: Api.InputPeer = params?.chatId === undefined ? { _: "inputPeerEmpty" } : await this.#c.getInputPeer(params.chatId);
    const query = params?.query ?? "";
    const result = await this.#c.invoke({
      _: "messages.search",
      peer,
      q: query,
      add_offset: params?.addOffset ?? 0,
      filter: messageSearchFilterToTlObject(params?.filter ?? "empty"),
      hash: 0n,
      limit: getLimit(params?.limit),
      max_date: 0,
      max_id: 0,
      min_date: 0,
      min_id: 0,
      offset_id: params?.offset ? params.offset : 0,
      from_id: params?.from ? await this.#c.getInputPeer(params.from) : undefined,
    });
    if (!("messages" in result)) {
      unreachable();
    }
    const count = "count" in result ? result.count : result.messages.length;
    const messages = new Array<Message>();
    for (const message_ of result.messages) {
      const message = await this.constructMessage(message_, false);
      messages.push(message);
    }
    return { messages, count };
  }

  async blockUser(userId: ID) {
    this.#c.storage.assertUser("blockUser");
    const id = await this.#c.getInputPeer(userId);
    await this.#c.invoke({ _: "contacts.block", id });
  }

  async unblockUser(userId: ID) {
    this.#c.storage.assertUser("unblockUser");
    const id = await this.#c.getInputPeer(userId);
    await this.#c.invoke({ _: "contacts.unblock", id });
  }

  async getBlockedUsers(params?: GetBlockedUsersParams) {
    this.#c.storage.assertUser("getBlockedUsers");
    const my_stories_from = params?.isBlockedFromViewingStories ? true : undefined;
    const offset = params?.offset ?? 0;
    const limit = getLimit(params?.limit);
    const result = await this.#c.invoke({ _: "contacts.getBlocked", my_stories_from, offset, limit });
    return constructBlockedUserList(result, this.#c.getPeer);
  }

  async setChatStickerSet(chatId: ID, setName: string) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.setStickers", channel, stickerset: { _: "inputStickerSetShortName", short_name: setName } });
  }

  async deleteChatStickerSet(chatId: ID) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.setStickers", channel, stickerset: { _: "inputStickerSetEmpty" } });
  }

  async stopPoll(chatId: ID, messageId: number, params?: StopPollParams) {
    this.#checkParams(params);
    const message = await this.getMessage(chatId, messageId);
    if (!message) {
      throw new InputError("Message not found.");
    }
    if (!("poll" in message)) {
      throw new InputError("Message is not a poll.");
    }
    if (message.poll.isClosed) {
      throw new InputError("Poll is already stopped.");
    }

    const result = await this.#c.invoke({
      _: "messages.editMessage",
      peer: await this.#c.getInputPeer(chatId),
      id: messageId,
      media: { _: "inputMediaPoll", poll: { _: "poll", id: BigInt(message.poll.id), closed: true, question: { _: "textWithEntities", text: "", entities: [] }, answers: [], hash: 0n } },
      reply_markup: await this.#constructReplyMarkup(params),
    }, { businessConnectionId: params?.businessConnectionId });

    const message_ = (await this.updatesToMessages(chatId, result))[0];
    return assertMessageType(message_, "poll").poll;
  }

  async editMessageLiveLocation(chatId: ID, messageId: number, latitude: number, longitude: number, params?: EditMessageLiveLocationParams) {
    this.#checkParams(params);
    const message = await this.getMessage(chatId, messageId);
    if (message && "location" in message && message.location.livePeriod) {
      const result = await this.#c.invoke({
        _: "messages.editMessage",
        peer: await this.#c.getInputPeer(chatId),
        id: messageId,
        media: { _: "inputMediaGeoLive", geo_point: { _: "inputGeoPoint", lat: latitude, long: longitude, accuracy_radius: params?.horizontalAccuracy }, heading: params?.heading, proximity_notification_radius: params?.proximityAlertRadius },
        reply_markup: await this.#constructReplyMarkup(params),
      }, { businessConnectionId: params?.businessConnectionId });

      const message = (await this.updatesToMessages(chatId, result))[0];
      return assertMessageType(message, "location");
    }
    unreachable();
  }

  async editInlineMessageLiveLocation(inlineMessageId: string, latitude: number, longitude: number, params?: EditMessageLiveLocationParams) {
    this.#checkParams(params);
    this.#c.storage.assertBot("editInlineMessageLiveLocation");
    const id = await deserializeInlineMessageId(inlineMessageId);
    await this.#c.invoke({
      _: "messages.editInlineBotMessage",
      id,
      media: { _: "inputMediaGeoLive", geo_point: { _: "inputGeoPoint", lat: latitude, long: longitude, accuracy_radius: params?.horizontalAccuracy }, heading: params?.heading, proximity_notification_radius: params?.proximityAlertRadius },
      reply_markup: await this.#constructReplyMarkup(params),
    }, { dc: getDc(id.dc_id) });
  }

  async sendInvoice(chatId: ID, title: string, description: string, payload: string, currency: string, prices: PriceTag[], params?: SendInvoiceParams) {
    this.#c.storage.assertBot("sendInvoice");
    this.#checkParams(params);
    if (title.length < 1) {
      throw new InputError("Invoice title cannot be empty.");
    }
    if (description.length < 1) {
      throw new InputError("Invoice description cannot be empty.");
    }
    if (title.length > 32) {
      throw new InputError("Invoice title is too long.");
    }
    if (description.length > 255) {
      throw new InputError("Invoice description is too long.");
    }
    const invoice: Api.invoice = {
      _: "invoice",
      currency,
      prices: prices.map((v) => ({ _: "labeledPrice", label: v.label, amount: BigInt(v.amount) })),
      max_tip_amount: params?.maxTipAmount ? BigInt(params.maxTipAmount) : undefined,
      suggested_tip_amounts: params?.suggestedTipAmounts?.map(BigInt),
      name_requested: params?.needName || undefined,
      phone_requested: params?.needPhoneNumber || undefined,
      email_requested: params?.needEmail || undefined,
      shipping_address_requested: params?.needShippingAddress || undefined,
      email_to_provider: params?.sendEmailToProvider || undefined,
      phone_to_provider: params?.sendPhoneNumberToProvider || undefined,
      flexible: params?.isFlexible || undefined,
    };

    const message = await this.#sendMedia(
      chatId,
      {
        _: "inputMediaInvoice",
        title,
        description,
        invoice,
        start_param: params?.startParameter,
        payload: encodeText(payload),
        provider_data: { _: "dataJSON", data: params?.providerData ?? "null" },
        provider: params?.providerToken ?? "",
        photo: params?.photoUrl
          ? {
            _: "inputWebDocument",
            url: params.photoUrl,
            size: params.photoSize ?? 0,
            mime_type: "image/jpeg", // TODO: guess from URL
            attributes: [{
              _: "documentAttributeImageSize",
              w: params?.photoWidth ?? 0,
              h: params?.photoHeight ?? 0,
            }],
          }
          : undefined,
      },
      params,
    );
    return assertMessageType(message, "invoice");
  }

  async sendMediaGroup(chatId: ID, media: InputMedia[], params?: SendMediaGroupParams) {
    this.#checkParams(params);
    {
      if (!Array.isArray(media) || !media.length) {
        throw new InputError("Media group must not be empty.");
      }
      const firstMediaType = media[0]!.type;
      for (const media_ of media) {
        const thisMediaType = media_.type;
        if (thisMediaType === "animation") {
          throw new InputError("Media groups cannot consist of animations.");
        }
        if ((firstMediaType === "video" || firstMediaType === "photo") && (thisMediaType !== "video" && thisMediaType !== "photo")) {
          throw new InputError(`Media of the type ${firstMediaType} cannot be mixed with those of the type ${thisMediaType}.`);
        }
        if (firstMediaType !== "video" && firstMediaType !== "photo" && firstMediaType !== thisMediaType) {
          throw new InputError(`Media of the type ${firstMediaType} cannot be mixed with other types.`);
        }
      }
    }

    const multiMedia: Api.inputSingleMedia[] = new Array<Api.InputSingleMedia>();
    for (const v of media) {
      const randomId = getRandomId();
      const [message, entities] = v.caption !== undefined ? this.parseText(v.caption, { entities: v.captionEntities, parseMode: v.parseMode }) : ["", []];
      multiMedia.push({ _: "inputSingleMedia", message, entities, random_id: randomId, media: await this.#resolveInputMedia(v) });
    }

    const peer = await this.#c.getInputPeer(chatId);
    for (const [i, media_] of multiMedia.entries()) {
      if (Api.is("inputMediaUploadedPhoto", media_.media)) {
        const result = Api.as("messageMediaPhoto", await this.#c.invoke({ _: "messages.uploadMedia", media: media_.media, peer }));
        const photo = Api.as("photo", result.photo);
        multiMedia[i] = { ...media_, media: { _: "inputMediaPhoto", id: { ...photo, _: "inputPhoto" } } };
      } else if (Api.is("inputMediaUploadedDocument", media_.media)) {
        const result = Api.as("messageMediaDocument", await this.#c.invoke({ _: "messages.uploadMedia", media: media_.media, peer }));
        const document = Api.as("document", result.document);
        multiMedia[i] = { ...media_, media: { _: "inputMediaDocument", id: { ...document, _: "inputDocument" } } };
      }
    }

    const silent = params?.isSilent ? true : undefined;
    const noforwards = params?.isContentProtected ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined;

    const result = await this.#c.invoke({
      _: "messages.sendMultiMedia",
      peer,
      multi_media: multiMedia,
      effect: params?.effectId ? BigInt(params.effectId) : undefined,
      noforwards,
      silent,
      send_as: sendAs,
      reply_to: await this.#constructReplyTo(params),
      allow_paid_floodskip: params?.isPaidBroadcast ? true : undefined,
    });

    return await this.updatesToMessages(chatId, result);
  }

  async readMessages(chatId: ID, untilMessageId: number) {
    this.#c.storage.assertUser("readMessages");
    const peer = await this.#c.getInputPeer(chatId);
    const max_id = untilMessageId;
    await this.#c.invoke({ _: "messages.readHistory", peer, max_id });
  }

  async startBot(botId: ID, params?: StartBotParams) {
    this.#c.storage.assertUser("startBot");
    const start_param = params?.deeplink?.trim() || "";
    if (params?.chatId !== undefined && !start_param) {
      throw new InputError("deeplink cannot be unspecified while chatId is specified.");
    }
    if (!params?.deeplink) {
      return await this.sendMessage(botId, "/start");
    }
    const bot = await this.#c.getInputUser(botId);
    const peer = await this.#c.getInputPeer(params?.chatId || botId);
    const result = await this.#c.invoke({ _: "messages.startBot", bot, peer, random_id: getRandomId(), start_param });
    return (await this.updatesToMessages(botId, result))[0];
  }

  async transcribeVoice(chatId: ID, messageId: number) {
    this.#c.storage.assertUser("transcribeVoice");
    const message = await this.getMessage(chatId, messageId);
    if (message === null) {
      throw new InputError("Message not found.");
    }
    if (message.type !== "voice") {
      throw new InputError("Message not voice.");
    }
    const cachedTranscription = await this.#getCachedVoiceTranscription(message);
    if (cachedTranscription) {
      return cachedTranscription;
    }
    const peer = await this.#c.getInputPeer(chatId);
    const result = await this.#c.invoke({ _: "messages.transcribeAudio", peer, msg_id: messageId });
    return await this.#cacheVoiceTranscription(message, constructVoiceTranscription(result));
  }

  async #getCachedVoiceTranscription(message: Message) {
    const reference = await this.#c.messageStorage.getVoiceTranscriptionReference(message.chat.id, message.id, fromUnixTimestamp(message.editDate ?? message.date));
    if (!reference) {
      return null;
    }
    const voiceTranscription = await this.#c.messageStorage.getVoiceTranscription(reference);
    if (!voiceTranscription || !voiceTranscription.isCompleted) {
      return null;
    }
    return voiceTranscription;
  }

  async #cacheVoiceTranscription(message: Message, voiceTranscription: VoiceTranscription) {
    await this.#c.messageStorage.setVoiceTranscriptionReference(message.chat.id, message.id, fromUnixTimestamp(message.editDate ?? message.date), BigInt(voiceTranscription.id));
    await this.#c.messageStorage.setVoiceTranscription(voiceTranscription);
    return voiceTranscription;
  }

  async resolveMessageLink(link: string) {
    const parseResult = MessageManager.parseMessageLink(link);
    if (parseResult === null) {
      throw new InputError("Invalid message link.");
    }
    const [chatId, messageId] = parseResult;
    return await this.getMessage(chatId, messageId);
  }

  static parseMessageLink(link: string): [ID, number] | null {
    let url: URL;
    try {
      url = new URL(link);
    } catch (err) {
      if (err instanceof TypeError) {
        try {
          url = new URL("https://" + link);
        } catch (err) {
          if (err instanceof TypeError) {
            return null;
          } else {
            throw err;
          }
        }
      } else {
        throw err;
      }
    }
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }
    if (url.host !== "t.me") {
      return null;
    }
    const parts = url.pathname.split("/").filter((v) => v);
    if (parts.length < 2) {
      return null;
    }
    if (!isNaN(Number(parts[0]))) {
      return null;
    }
    let peer: ID, id: number;
    if (parts[0] === "c") {
      if (parts.length < 3 || parts.length > 4) {
        return null;
      }
      [peer, id] = [Number(parts[1]), Number(parts[parts.length - 1])];
      if (isNaN(peer)) {
        return null;
      }
      if (isNaN(Number(parts[2]))) {
        return null;
      }
      peer = Api.getChannelChatId(BigInt(peer));
    } else {
      if (parts.length > 3) {
        return null;
      }
      [peer, id] = [parts[0], Number(parts[parts.length - 1])];
      if (isNaN(Number(parts[1]))) {
        return null;
      }
    }
    if (isNaN(id)) {
      return null;
    }
    if (typeof peer === "string") {
      try {
        if (getUsername(peer) !== peer) {
          return null;
        }
      } catch (err) {
        if (err instanceof InputError) {
          return null;
        } else {
          throw err;
        }
      }
    }
    return [peer, id];
  }

  async openMiniApp(botId: ID, chatId: ID, params?: OpenMiniAppParams) {
    this.#c.storage.assertUser("openMiniApp");
    const from_bot_menu = params?.isFromMenu ? true : undefined;
    const silent = params?.isSilent ? true : undefined;
    const compact = params?.mode === "compact" ? true : undefined;
    const fullscreen = params?.mode === "fullscreen" ? true : undefined;
    const peer = await this.#c.getInputPeer(chatId);
    const bot = await this.#c.getInputUser(botId);
    const url = params?.url;
    const start_param = params?.startParameter;
    const theme_params: Api.dataJSON | undefined = params?.themeParameters ? { _: "dataJSON", data: params.themeParameters } : undefined;
    const platform = this.#c.langPack ?? "";
    const reply_to = await this.#constructReplyTo(params);
    const send_as = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined;
    const result = await this.#c.invoke({
      _: "messages.requestWebView",
      from_bot_menu,
      silent,
      compact,
      fullscreen,
      peer,
      bot,
      url,
      start_param,
      theme_params,
      platform,
      reply_to,
      send_as,
    });
    return constructMiniAppInfo(result);
  }

  async getSavedMessages(chatId: ID, params?: GetSavedMessagesParams) {
    this.#c.storage.assertUser("getSavedMessages");
    const peer = await this.#c.getInputPeer(chatId);
    const limit = getLimit(params?.limit);
    let offsetId = params?.offsetId ?? 0;
    if (offsetId < 0) {
      offsetId = 0;
    }
    let offsetDate = params?.offsetDate ?? 0;
    if (offsetDate < 0) {
      offsetDate = 0;
    }
    const result = await this.#c.invoke({
      _: "messages.getSavedHistory",
      peer,
      limit,
      offset_id: offsetId,
      offset_date: offsetDate,
      add_offset: params?.addOffset ?? 0,
      hash: 0n,
      max_id: 0,
      min_id: 0,
    });

    if (!("messages" in result)) {
      unreachable();
    }
    const messages = new Array<Message>();
    for (const message_ of result.messages) {
      const message = await this.constructMessage(message_, false);
      messages.push(message);
    }
    return messages;
  }

  async getSavedChats(params?: GetSavedChatsParams) {
    const limit = getLimit(params?.limit);
    let offsetId = params?.offsetId ?? 0;
    if (offsetId < 0) {
      offsetId = 0;
    }
    let offsetDate = params?.offsetDate ?? 0;
    if (offsetDate < 0) {
      offsetDate = 0;
    }
    let offsetPeer: Api.InputPeer = { _: "inputPeerEmpty" };
    if (params?.offsetChatId !== undefined) {
      offsetPeer = await this.#c.getInputPeer(params.offsetChatId);
    }
    const result = await this.#c.invoke({
      _: "messages.getSavedDialogs",
      hash: 0n,
      limit,
      offset_date: offsetDate,
      offset_id: offsetId,
      offset_peer: offsetPeer,
      exclude_pinned: params?.excludePinned || undefined,
    });
    return constructSavedChats(result, this.#c.getPeer, this.getMessage.bind(this), this.#c.fileManager.getStickerSetName.bind(this.#c.fileManager));
  }

  async getMessageReactions(chatId: ID, messageId: number, params?: GetMessageReactionsParams) {
    this.#c.storage.assertUser("getMessageReactions");
    const peer = await this.#c.getInputPeer(chatId);
    const id = messageId;
    const reactions = params?.reaction ? reactionToTlObject(params.reaction) : undefined;
    const offset = params?.offset;
    const limit = getLimit(params?.limit);
    const messageReactionsList = await this.#c.invoke({
      _: "messages.getMessageReactionsList",
      peer,
      id,
      reactions,
      offset,
      limit,
    });
    return constructMessageReactionList(messageReactionsList);
  }

  async setDefaultReaction(reaction: Reaction) {
    this.#c.storage.assertUser("setDefaultReaction");
    await this.#c.invoke({ _: "messages.setDefaultReaction", reaction: reactionToTlObject(reaction) });
  }

  async clearDrafts() {
    this.#c.storage.assertUser("clearDrafts");
    await this.#c.invoke({ _: "messages.clearAllDrafts" });
  }

  async summarizeText(chatId: ID, messageId: number, params?: SummarizeTextParams) {
    this.#c.storage.assertUser("summarizeText");
    const peer = await this.#c.getInputPeer(chatId);
    const result = await this.#c.invoke({ _: "messages.summarizeText", peer, id: messageId, to_lang: params?.languageCode });
    return constructSummarizedText(result);
  }
}
