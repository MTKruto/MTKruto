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

import { contentType, unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { getLogger, getRandomId, Logger, toUnixTimestamp } from "../1_utilities.ts";
import { Api, as, getChannelChatId, is, isOneOf, peerToChatId } from "../2_tl.ts";
import { constructChatMemberUpdated, constructFailedInvitation, constructInviteLink, constructJoinRequest, deserializeFileId, FileId, InputMedia, isMessageType, PollOption, PriceTag, SelfDestructOption, selfDestructOptionToInt } from "../3_types.ts";
import { assertMessageType, ChatAction, chatMemberRightsToTlObject, constructMessage as constructMessage_, deserializeInlineMessageId, FileSource, FileType, ID, Message, MessageEntity, messageEntityToTlObject, ParseMode, Reaction, reactionEqual, reactionToTlObject, replyMarkupToTlObject, Update, UsernameResolver } from "../3_types.ts";
import { messageSearchFilterToTlObject } from "../types/0_message_search_filter.ts";
import { parseHtml } from "./0_html.ts";
import { parseMarkdown } from "./0_markdown.ts";
import { _BusinessConnectionIdCommon, _ReplyMarkupCommon, _SendCommon, _SpoilCommon, AddChatMemberParams, AddReactionParams, ApproveJoinRequestsParams, BanChatMemberParams, CreateInviteLinkParams, DeclineJoinRequestsParams, DeleteMessagesParams, EditInlineMessageMediaParams, EditMessageCaptionParams, EditMessageLiveLocationParams, EditMessageMediaParams, EditMessageParams, EditMessageReplyMarkupParams, ForwardMessagesParams, GetCreatedInviteLinksParams, GetHistoryParams, PinMessageParams, SearchMessagesParams, SendAnimationParams, SendAudioParams, SendChatActionParams, SendContactParams, SendDiceParams, SendDocumentParams, SendInvoiceParams, SendLocationParams, SendMediaGroupParams, SendMessageParams, SendPhotoParams, SendPollParams, SendStickerParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetChatMemberRightsParams, SetChatPhotoParams, SetReactionsParams, type StartBotParams, StopPollParams, UnpinMessageParams } from "./0_params.ts";
import { canBeInputChannel, canBeInputUser, checkArray, checkMessageId, isHttpUrl, toInputChannel, toInputUser } from "./0_utilities.ts";
import { C as C_ } from "./1_types.ts";
import { FileManager } from "./2_file_manager.ts";

const FALLBACK_MIME_TYPE = "application/octet-stream";
const STICKER_MIME_TYPES = ["image/webp", "video/webm", "application/x-tgsticker"];

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
  "updateChannelParticipant",
  "updateChatParticipant",
  "updateBotChatInviteRequester",
] as const;

type MessageManagerUpdate = Api.Types[(typeof messageManagerUpdates)[number]];

export class MessageManager {
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
      if (message == null) {
        messages_ = [];
        shouldFetch = true;
        break;
      } else {
        messages_.push(message);
      }
    }
    if (shouldFetch) {
      if (canBeInputChannel(peer)) {
        messages_ = await this.#c.invoke({ _: "channels.getMessages", channel: toInputChannel(peer), id: messageIds.map((v) => ({ _: "inputMessageID", id: v })) }).then((v) => as("messages.channelMessages", v).messages);
      } else {
        messages_ = await this.#c.invoke({
          _: "messages.getMessages",
          id: messageIds.map((v) => ({ _: "inputMessageID", id: v })),
        }).then((v) => as("messages.messages", v).messages);
      }
    }
    const messages = new Array<Message>();
    for (const message_ of messages_) {
      if (is("messageEmpty", message_)) {
        continue;
      }
      const message = await this.constructMessage(message_);
      messages.push(message);
    }
    return messages;
  }

  async getMessageWithReply(chatId: ID, messageId: number) {
    const message = await this.getMessage(chatId, messageId);
    if (message != null && message.replyToMessageId) {
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

  async parseText(text_: string, params?: { parseMode?: ParseMode; entities?: MessageEntity[] }) {
    const [text, entities_] = MessageManager.parseText(text_, params?.entities ?? [], params?.parseMode ?? this.#c.parseMode);
    const entities = entities_?.length > 0 ? await Promise.all(entities_.map((v) => messageEntityToTlObject(v, this.#c.getEntity))) : undefined;
    return [text, entities] as const;
  }

  async #updatesToMessages(chatId: ID, updates: Api.Updates, businessConnectionId?: string) {
    const messages = new Array<Message>();

    if (is("updates", updates)) {
      for (const update of updates.updates) {
        if ("message" in update && is("messageEmpty", update.message)) {
          continue;
        }
        if (is("updateNewMessage", update) || is("updateEditMessage", update) || is("updateNewScheduledMessage", update)) {
          const message = await this.constructMessage(update.message);
          if (is("updateNewScheduledMessage", update)) {
            message.scheduled = true;
          }
          messages.push(message);
        } else if (is("updateNewChannelMessage", update) || is("updateEditChannelMessage", update)) {
          messages.push(await this.constructMessage(update.message));
        } else if (is("updateBotNewBusinessMessage", update)) {
          messages.push(await this.constructMessage(update.message, false, { connectionId: businessConnectionId ?? update.connection_id, replyToMessage: update.reply_to_message }));
        } else if (is("updateBotEditBusinessMessage", update)) {
          messages.push(await this.constructMessage(update.message, false, { connectionId: businessConnectionId ?? update.connection_id, replyToMessage: update.reply_to_message }));
        }
      }
    } else if (is("updateShortSentMessage", updates)) {
      const message = await this.getMessage(chatId, updates.id);
      if (message != null) {
        messages.push(message);
      }
    }

    return messages;
  }

  async constructMessage(message_: Api.Message, r?: boolean, business?: { connectionId: string; replyToMessage?: Api.Message }) {
    const mediaPoll = "media" in message_ && is("messageMediaPoll", message_.media) ? message_.media : null;
    const pollId = mediaPoll?.poll.id;
    let poll: Api.poll | null = null;
    let pollResults: Api.pollResults | null = null;
    if (pollId) {
      [poll, pollResults] = await Promise.all([this.#c.messageStorage.getPoll(pollId), this.#c.messageStorage.getPollResults(pollId)]);
    }
    const message = await constructMessage_(message_, this.#c.getEntity, this.getMessage.bind(this), this.#c.fileManager.getStickerSetName.bind(this.#c.fileManager), r, business, poll ?? undefined, pollResults ?? undefined);
    if (!poll && mediaPoll) {
      await this.#c.storage.setPoll(mediaPoll.poll.id, mediaPoll.poll);
    }
    if (!pollResults && mediaPoll) {
      await this.#c.storage.setPollResults(mediaPoll.poll.id, mediaPoll.results);
    }
    return message;
  }

  async forwardMessages(from: ID, to: ID, messageIds: number[], params?: ForwardMessagesParams) {
    checkArray(messageIds, checkMessageId);
    const result = await this.#c.invoke({ _: "messages.forwardMessages", from_peer: await this.#c.getInputPeer(from), to_peer: await this.#c.getInputPeer(to), id: messageIds, random_id: messageIds.map(() => getRandomId()), silent: params?.disableNotification || undefined, top_msg_id: params?.messageThreadId, noforwards: params?.disableNotification || undefined, send_as: params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined, drop_author: params?.dropSenderName || undefined, drop_media_captions: params?.dropCaption || undefined });

    return await this.#updatesToMessages(to, result);
  }

  async getHistory(chatId: ID, params?: GetHistoryParams) { // TODO: get from database properly
    this.#c.storage.assertUser("getHistory");
    let limit = params?.limit ?? 100;
    if (limit <= 0) {
      limit = 1;
    } else if (limit > 100) {
      limit = 100;
    }
    let offsetId = params?.fromMessageId ?? 0;
    if (offsetId < 0) {
      offsetId = 0;
    }
    const peer = await this.#c.getInputPeer(chatId);
    const messages = new Array<Message>();
    if (messages.length > 0) {
      offsetId = messages[messages.length - 1].id; // TODO: track id of oldest message and don't send requests for it
    }
    const result = await this.#c.invoke({ _: "messages.getHistory", peer: peer, offset_id: offsetId, offset_date: 0, add_offset: 0, limit, max_id: 0, min_id: 0, hash: 0n });

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
    const inputPeer = await this.#c.getInputPeer(v).then((v) => as("inputPeerUser", v));
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

  async sendMessage(
    chatId: ID,
    text: string,
    params?: SendMessageParams,
  ) {
    this.#checkParams(params);
    const [message, entities] = await this.parseText(text, params);

    const replyMarkup = await this.#constructReplyMarkup(params);

    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const noWebpage = params?.linkPreview?.disable ? true : undefined;
    const invertMedia = params?.linkPreview?.aboveText ? true : undefined;
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = await this.#resolveSendAs(params);
    const effect = params?.effectId ? BigInt(params.effectId) : undefined;
    const schedule_date = params?.sendAt ? toUnixTimestamp(params.sendAt) : undefined;
    const allow_paid_floodskip = params?.paidBroadcast ? true : undefined;

    let result: Api.Updates;
    if (!noWebpage && params?.linkPreview?.url) {
      result = await this.#c.invoke({
        _: "messages.sendMedia",
        peer,
        random_id: randomId,
        media: ({
          _: "inputMediaWebPage",
          url: params.linkPreview.url,
          force_large_media: params.linkPreview.largeMedia ? true : undefined,
          force_small_media: params.linkPreview.smallMedia ? true : undefined,
          optional: message.length ? undefined : true,
        }),
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
      }, params?.businessConnectionId);
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
        params?.businessConnectionId,
      );
    }

    const message_ = (await this.#updatesToMessages(chatId, result, params?.businessConnectionId))[0];
    return assertMessageType(message_, "text");
  }

  async #constructReplyTo(params?: _SendCommon) {
    const topMsgId = params?.messageThreadId;
    if (!params?.replyTo) {
      if (topMsgId) {
        return { _: "inputReplyToMessage", reply_to_msg_id: topMsgId } as Api.inputReplyToMessage;
      } else {
        return undefined;
      }
    }
    if ("messageId" in params.replyTo) {
      return { _: "inputReplyToMessage", reply_to_msg_id: params.replyTo.messageId, top_msg_id: topMsgId, quote_text: params.replyTo.quote?.text, quote_entities: await Promise.all(params.replyTo.quote?.entities.map((v) => messageEntityToTlObject(v, this.#c.getEntity)) ?? []), quote_offset: params.replyTo.quote?.offset } as Api.inputReplyToMessage;
    } else {
      return { _: "inputReplyToStory", peer: await this.#c.getInputPeer(params.replyTo.chatId), story_id: params.replyTo.storyId } as Api.inputReplyToStory;
    }
  }

  async sendVenue(chatId: ID, latitude: number, longitude: number, title: string, address: string, params?: SendVenueParams) {
    this.#checkParams(params);
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
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
      media: ({
        _: "inputMediaVenue",
        geo_point: ({
          _: "inputGeoPoint",
          lat: latitude,
          long: longitude,
        }),
        title,
        address,
        venue_id: params?.foursquareId ?? "",
        venue_type: params?.foursquareType ?? "",
        provider: "foursquare",
      }),
      message: "",
      effect: params?.effectId ? BigInt(params.effectId) : undefined,
      schedule_date: params?.sendAt ? toUnixTimestamp(params.sendAt) : undefined,
      allow_paid_floodskip: params?.paidBroadcast ? true : undefined,
    }, params?.businessConnectionId);

    const message = (await this.#updatesToMessages(chatId, result, params?.businessConnectionId))[0];
    return assertMessageType(message, "venue");
  }

  async sendContact(chatId: ID, firstName: string, number: string, params?: SendContactParams) {
    this.#checkParams(params);
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
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
        media: ({
          _: "inputMediaContact",
          phone_number: number,
          first_name: firstName,
          last_name: params?.lastName ?? "",
          vcard: params?.vcard ?? "",
        }),
        message: "",
        effect: params?.effectId ? BigInt(params.effectId) : undefined,
        schedule_date: params?.sendAt ? toUnixTimestamp(params.sendAt) : undefined,
        allow_paid_floodskip: params?.paidBroadcast ? true : undefined,
      },
      params?.businessConnectionId,
    );

    const message = (await this.#updatesToMessages(chatId, result, params?.businessConnectionId))[0];
    return assertMessageType(message, "contact");
  }

  async sendDice(chatId: ID, params?: SendDiceParams) {
    this.#checkParams(params);
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
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
      media: ({
        _: "inputMediaDice",
        emoticon: params?.emoji ?? "🎲",
      }),
      message: "",
      effect: params?.effectId ? BigInt(params.effectId) : undefined,
      schedule_date: params?.sendAt ? toUnixTimestamp(params.sendAt) : undefined,
      allow_paid_floodskip: params?.paidBroadcast ? true : undefined,
    }, params?.businessConnectionId);

    const message = (await this.#updatesToMessages(chatId, result, params?.businessConnectionId))[0];
    return assertMessageType(message, "dice");
  }

  async sendLocation(chatId: ID, latitude: number, longitude: number, params?: SendLocationParams) {
    this.#checkParams(params);
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
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
            geo_point: ({
              _: "inputGeoPoint",
              lat: latitude,
              long: longitude,
              accuracy_radius: params?.horizontalAccuracy,
            }),
            heading: params?.heading,
            period: params.livePeriod,
            proximity_notification_radius: params?.proximityAlertRadius,
          })
          : ({
            _: "inputMediaGeoPoint",
            geo_point: ({
              _: "inputGeoPoint",
              lat: latitude,
              long: longitude,
              accuracy_radius: params?.horizontalAccuracy,
            }),
          }),
        message: "",
        effect: params?.effectId ? BigInt(params.effectId) : undefined,
        schedule_date: params?.sendAt ? toUnixTimestamp(params.sendAt) : undefined,
        allow_paid_floodskip: params?.paidBroadcast ? true : undefined,
      },
      params?.businessConnectionId,
    );

    const message = (await this.#updatesToMessages(chatId, result, params?.businessConnectionId))[0];
    return assertMessageType(message, "location");
  }

  async sendVideoNote(chatId: ID, audio: FileSource, params?: SendVideoNoteParams) {
    this.#checkParams(params);
    const message = await this.#sendDocumentInner(chatId, audio, params, FileType.VideoNote, [
      { _: "documentAttributeVideo", round_message: true, w: params?.length ?? 0, h: params?.length ?? 0, duration: params?.duration ?? 0 },
    ], false);
    return assertMessageType(message, "videoNote");
  }

  async sendAudio(chatId: ID, audio: FileSource, params?: SendAudioParams) {
    this.#checkParams(params);
    const message = await this.#sendDocumentInner(chatId, audio, params, FileType.Audio, [
      { _: "documentAttributeAudio", duration: params?.duration ?? 0, performer: params?.performer, title: params?.title },
    ]);
    return assertMessageType(message, "audio");
  }

  async sendVoice(chatId: ID, voice: FileSource, params?: SendVoiceParams) {
    this.#checkParams(params);
    const message = await this.#sendDocumentInner(chatId, voice, params, FileType.VoiceNote, [
      { _: "documentAttributeAudio", voice: true, duration: params?.duration ?? 0 },
    ]);
    return assertMessageType(message, "voice");
  }

  async sendAnimation(chatId: ID, animation: FileSource, params?: SendAnimationParams) {
    this.#checkParams(params);
    const message = await this.#sendDocumentInner(chatId, animation, params, FileType.Animation, [
      { _: "documentAttributeAnimated" },
      { _: "documentAttributeVideo", supports_streaming: true, w: params?.width ?? 0, h: params?.height ?? 0, duration: params?.duration ?? 0 },
    ]);
    return assertMessageType(message, "animation");
  }

  async sendVideo(chatId: ID, video: FileSource, params?: SendVideoParams) {
    this.#checkParams(params);
    const message = await this.#sendDocumentInner(chatId, video, params, FileType.Video, [
      { _: "documentAttributeVideo", supports_streaming: params?.supportsStreaming ? true : undefined, w: params?.width ?? 0, h: params?.height ?? 0, duration: params?.duration ?? 0 },
    ]);
    return assertMessageType(message, "video");
  }

  async #sendDocumentInner(chatId: ID, document: FileSource, params: SendDocumentParams & _SpoilCommon | undefined, fileType: FileType, otherAttribs: Api.DocumentAttribute[], urlSupported = true, expectedMimeTypes?: string[]) {
    let media: Api.InputMedia | null = null;
    const spoiler = params?.hasSpoiler ? true : undefined;
    const ttl_seconds = params && "selfDestruct" in params && typeof params.selfDestruct !== undefined ? selfDestructOptionToInt(params.selfDestruct as SelfDestructOption) : undefined;

    if (typeof document === "string") {
      const fileId = this.resolveFileId(document, fileType);
      if (fileId != null) {
        media = { _: "inputMediaDocument", id: { ...fileId, _: "inputDocument" }, spoiler, query: otherAttribs.find((v): v is Api.documentAttributeSticker => is("documentAttributeSticker", v))?.alt || undefined, ttl_seconds };
      }
    }

    if (media == null) {
      if (typeof document === "string" && isHttpUrl(document)) {
        if (!urlSupported) {
          throw new InputError("URL not supported.");
        }
        media = { _: "inputMediaDocumentExternal", url: document, spoiler, ttl_seconds };
      } else {
        let mimeType: string;
        const file = await this.#c.fileManager.upload(document, params, (name) => {
          mimeType = params?.mimeType ?? contentType(name.split(".").slice(-1)[0]) ?? FALLBACK_MIME_TYPE;
          if (expectedMimeTypes && !expectedMimeTypes.includes(mimeType)) {
            unreachable();
          }
          if (name.endsWith(".tgs") && fileType == FileType.Document) {
            name += "-";
          }
          return name;
        });
        if (is("inputFileStoryDocument", file)) {
          unreachable();
        }
        let thumb: Api.InputFile | undefined = undefined;
        if (params?.thumbnail) {
          thumb = await this.#c.fileManager.upload(params.thumbnail, { chunkSize: params?.chunkSize, signal: params?.signal });
        }
        media = { _: "inputMediaUploadedDocument", file, thumb, spoiler, attributes: [{ _: "documentAttributeFilename", file_name: file.name }, ...otherAttribs], mime_type: mimeType!, force_file: fileType == FileType.Document ? true : undefined, ttl_seconds };
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
    const message = await this.#sendDocumentInner(chatId, sticker, params, FileType.Sticker, [{ _: "documentAttributeSticker", alt: params?.emoji || "", stickerset: { _: "inputStickerSetEmpty" } }], undefined, STICKER_MIME_TYPES);
    return assertMessageType(message, "sticker");
  }

  async sendPhoto(chatId: ID, photo: FileSource, params?: SendPhotoParams) {
    this.#checkParams(params);
    let media: Api.InputMedia | null = null;
    const spoiler = params?.hasSpoiler ? true : undefined;
    const ttl_seconds = params && "selfDestruct" in params && params.selfDestruct !== undefined ? selfDestructOptionToInt(params.selfDestruct) : undefined;

    if (typeof photo === "string") {
      const fileId = this.resolveFileId(photo, [FileType.Photo, FileType.ProfilePhoto]);
      if (fileId != null) {
        media = { _: "inputMediaPhoto", id: { ...fileId, _: "inputPhoto" }, spoiler, ttl_seconds };
      }
    }

    if (media == null) {
      if (typeof photo === "string" && isHttpUrl(photo)) {
        media = { _: "inputMediaPhotoExternal", url: photo, spoiler, ttl_seconds: (params && "selfDestruct" in params && params.selfDestruct !== undefined) ? selfDestructOptionToInt(params.selfDestruct) : undefined };
      } else {
        const file = await this.#c.fileManager.upload(photo, params, null, false);
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
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined;
    const replyMarkup = await this.#constructReplyMarkup(params);

    const caption_ = params?.caption;
    const parseResult = caption_ !== undefined ? await this.parseText(caption_, { parseMode: params?.parseMode, entities: params?.captionEntities }) : undefined;

    const caption = parseResult === undefined ? undefined : parseResult[0];
    const captionEntities = parseResult === undefined ? undefined : parseResult[1];

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
        schedule_date: params?.sendAt ? toUnixTimestamp(params.sendAt) : undefined,
        allow_paid_floodskip: params?.paidBroadcast ? true : undefined,
      },
      params?.businessConnectionId,
    );

    return (await this.#updatesToMessages(chatId, result, params?.businessConnectionId))[0];
  }

  resolveFileId(maybeFileId: string, expectedFileType: FileType | FileType[]) {
    expectedFileType = Array.isArray(expectedFileType) ? expectedFileType : [expectedFileType];
    let fileId: FileId | null = null;
    try {
      fileId = deserializeFileId(maybeFileId);
    } catch (err) {
      this.#LresolveFileId.warning(err);
    }
    if (fileId != null) {
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

  async sendPoll(chatId: ID, question: string, options: (string | PollOption)[], params?: SendPollParams) {
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
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined;
    const replyMarkup = await this.#constructReplyMarkup(params);

    const explanation = params?.explanation;
    const parseResult = explanation !== undefined ? await this.parseText(explanation, { parseMode: params?.explanationParseMode, entities: params?.explanationEntities }) : undefined;

    const solution = parseResult === undefined ? undefined : parseResult[0];
    const solutionEntities = parseResult === undefined ? undefined : parseResult[1];

    const answers: Api.pollAnswer[] = await Promise.all(options.map(async (v, i) => {
      const text = typeof v === "string" ? v : v.text;
      const entities = typeof v === "string" ? [] : v.entities;
      const parseResult = await this.parseText(text, { parseMode: params?.optionParseMode, entities: entities });
      return ({ _: "pollAnswer", option: new Uint8Array([i]), text: { _: "textWithEntities", text: parseResult[0], entities: parseResult[1] ?? [] } });
    }));

    const questionParseResult = await this.parseText(question, { parseMode: params?.questionParseMode, entities: params?.questionEntities });
    const poll: Api.poll = { _: "poll", id: getRandomId(), answers, question: { _: "textWithEntities", text: questionParseResult[0], entities: questionParseResult[1] ?? [] }, closed: params?.isClosed ? true : undefined, close_date: params?.closeDate ? toUnixTimestamp(params.closeDate) : undefined, close_period: params?.openPeriod ? params.openPeriod : undefined, multiple_choice: params?.allowMultipleAnswers ? true : undefined, public_voters: params?.isAnonymous === false ? true : undefined, quiz: params?.type == "quiz" ? true : undefined };

    const media: Api.inputMediaPoll = { _: "inputMediaPoll", poll, correct_answers: params?.correctOptionIndex ? [new Uint8Array([params.correctOptionIndex])] : undefined, solution, solution_entities: solutionEntities };

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
        message: "",
        effect: params?.effectId ? BigInt(params.effectId) : undefined,
        schedule_date: params?.sendAt ? toUnixTimestamp(params.sendAt) : undefined,
        allow_paid_floodskip: params?.paidBroadcast ? true : undefined,
      },
      params?.businessConnectionId,
    );

    const message = (await this.#updatesToMessages(chatId, result, params?.businessConnectionId))[0];
    return assertMessageType(message, "poll");
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
    }, params?.businessConnectionId);

    const message_ = (await this.#updatesToMessages(chatId, result))[0];
    return message_;
  }

  async editInlineMessageReplyMarkup(
    inlineMessageId: string,
    params?: EditMessageReplyMarkupParams,
  ) {
    const id = deserializeInlineMessageId(inlineMessageId);

    await this.#c.invoke({ _: "messages.editInlineBotMessage", id, reply_markup: await this.#constructReplyMarkup(params) });
  }

  async editMessageText(
    chatId: ID,
    messageId: number,
    text: string,
    params?: EditMessageParams,
  ) {
    this.#checkParams(params);
    {
      const message = await this.getMessage(chatId, messageId);
      if (!message) {
        throw new InputError("Message not found.");
      }
      if (!isMessageType(message, "link") && !isMessageType(message, "text")) {
        throw new InputError("The referenced message is not a text message.");
      }
    }
    const [message, entities] = await this.parseText(text, params);
    const noWebpage = params?.linkPreview?.disable ? true : undefined;
    const invertMedia = params?.linkPreview?.aboveText ? true : undefined;

    let media: Api.InputMedia | undefined = undefined;
    if (!noWebpage && params?.linkPreview?.url) {
      media = { _: "inputMediaWebPage", url: params.linkPreview.url, force_large_media: params.linkPreview.largeMedia ? true : undefined, force_small_media: params.linkPreview.smallMedia ? true : undefined, optional: message.length ? undefined : true };
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
    }, params?.businessConnectionId);

    const message_ = (await this.#updatesToMessages(chatId, result))[0];
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
      if (isMessageType(message_, type)) {
        canHaveCaption = true;
      }
    }
    if (!canHaveCaption) {
      throw new InputError("The referenced message cannot have a caption.");
    }

    const [message, entities] = await this.parseText(params?.caption ?? "", params);

    const result = await this.#c.invoke({
      _: "messages.editMessage",
      id: checkMessageId(messageId),
      peer: await this.#c.getInputPeer(chatId),
      entities: message ? entities : [],
      message,
      reply_markup: await this.#constructReplyMarkup(params),
    }, params?.businessConnectionId);

    return (await this.#updatesToMessages(chatId, result))[0];
  }

  async editInlineMessageText(inlineMessageId: string, text: string, params?: EditMessageParams) {
    this.#checkParams(params);
    const [message, entities] = await this.parseText(text, params);

    const id = deserializeInlineMessageId(inlineMessageId);
    const noWebpage = params?.linkPreview?.disable ? true : undefined;
    const invertMedia = params?.linkPreview?.aboveText ? true : undefined;

    let media: Api.InputMedia | undefined = undefined;
    if (!noWebpage && params?.linkPreview?.url) {
      media = { _: "inputMediaWebPage", url: params.linkPreview.url, force_large_media: params.linkPreview.largeMedia ? true : undefined, force_small_media: params.linkPreview.smallMedia ? true : undefined, optional: message.length ? undefined : true };
    }

    await this.#c.invoke({ _: "messages.editInlineBotMessage", id, entities, message, media, no_webpage: noWebpage, invert_media: invertMedia, reply_markup: await this.#constructReplyMarkup(params) });
  }

  async #resolveInputMediaInner(document: FileSource, media: InputMedia, fileType: FileType, otherAttribs: Api.DocumentAttribute[]) {
    let media_: Exclude<Api.InputMedia, Api.inputMediaEmpty> | null = null;
    const spoiler = "hasSpoiler" in media && media.hasSpoiler ? true : undefined;

    if (typeof document === "string") {
      const fileId = this.resolveFileId(document, fileType);
      if (fileId != null) {
        media_ = { _: "inputMediaDocument", id: { ...fileId, _: "inputDocument" }, spoiler, query: otherAttribs.find((v): v is Api.documentAttributeSticker => is("documentAttributeSticker", v))?.alt || undefined };
      }
    }

    if (media_ == null) {
      if (typeof document === "string" && isHttpUrl(document)) {
        media_ = { _: "inputMediaDocumentExternal", url: document, spoiler };
      } else {
        let mimeType: string;
        const file = await this.#c.fileManager.upload(document, media, (name) => {
          mimeType = media?.mimeType ?? contentType(name.split(".").slice(-1)[0]) ?? FALLBACK_MIME_TYPE;
          if (name.endsWith(".tgs") && fileType == FileType.Document) {
            name += "-";
          }
          return name;
        });
        if (is("inputFileStoryDocument", file)) {
          unreachable();
        }
        let thumb: Api.InputFile | undefined = undefined;
        if ("thumbnail" in media && media.thumbnail) {
          thumb = await this.#c.fileManager.upload(media.thumbnail, { chunkSize: media?.chunkSize, signal: media?.signal });
        }
        media_ = { _: "inputMediaUploadedDocument", file, thumb, spoiler, attributes: [{ _: "documentAttributeFilename", file_name: file.name }, ...otherAttribs], mime_type: mimeType!, force_file: fileType == FileType.Document ? true : undefined };
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
        if (fileId != null) {
          media_ = { _: "inputMediaPhoto", id: { ...fileId, _: "inputPhoto" }, spoiler, ttl_seconds };
        }
      }

      if (media_ == null) {
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
    const [text, entities] = media.caption !== undefined ? await this.parseText(media.caption, { entities: media.captionEntities, parseMode: media.parseMode }) : ["", []];
    const result = await this.#c.invoke({
      _: "messages.editMessage",
      peer: await this.#c.getInputPeer(chatId),
      id: messageId,
      media: await this.#resolveInputMedia(media),
      reply_markup: await this.#constructReplyMarkup(params),
      message: text,
      entities,
    }, params?.businessConnectionId);

    const message_ = (await this.#updatesToMessages(chatId, result))[0];
    return message_;
  }

  async editInlineMessageMedia(inlineMessageId: string, media: InputMedia, params?: EditInlineMessageMediaParams) {
    this.#checkParams(params);
    this.#c.storage.assertBot("editInlineMessageMedia");
    const id = deserializeInlineMessageId(inlineMessageId);
    await this.#c.invoke({ _: "messages.editInlineBotMessage", id, media: await this.#resolveInputMedia(media), reply_markup: await this.#constructReplyMarkup(params) });
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
    return await this.#updatesToMessages(chatId, result);
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
    await this.#c.invoke({ _: "messages.updatePinnedMessage", peer: await this.#c.getInputPeer(chatId), id: checkMessageId(messageId), silent: params?.disableNotification ? true : undefined, pm_oneside: params?.bothSides ? undefined : true });
  }

  async unpinMessage(chatId: ID, messageId: number, params?: UnpinMessageParams) {
    this.#checkParams(params);
    await this.#c.invoke({ _: "messages.updatePinnedMessage", peer: await this.#c.getInputPeer(chatId), id: checkMessageId(messageId), unpin: true }, params?.businessConnectionId);
  }

  async unpinMessages(chatId: ID) {
    await this.#c.invoke({ _: "messages.unpinAllMessages", peer: await this.#c.getInputPeer(chatId) });
  }

  async setAvailableReactions(chatId: ID, availableReactions: "none" | "all" | Reaction[]) {
    await this.#c.invoke({ _: "messages.setChatAvailableReactions", peer: await this.#c.getInputPeer(chatId), available_reactions: availableReactions == "none" ? { _: "chatReactionsNone" } : availableReactions == "all" ? { _: "chatReactionsAll" } : Array.isArray(availableReactions) ? ({ _: "chatReactionsSome", reactions: availableReactions.map((v) => reactionToTlObject(v)) }) : unreachable() });
  }

  async #sendReaction(chatId: ID, messageId: number, reactions: Reaction[], params?: AddReactionParams) {
    await this.#c.invoke({ _: "messages.sendReaction", peer: await this.#c.getInputPeer(chatId), msg_id: checkMessageId(messageId), reaction: reactions.map((v) => reactionToTlObject(v)), big: params?.big ? true : undefined, add_to_recent: params?.addToRecents ? true : undefined });
  }

  async setReactions(chatId: ID, messageId: number, reactions: Reaction[], params?: SetReactionsParams) {
    await this.#sendReaction(chatId, messageId, reactions, params);
  }

  async addReaction(chatId: ID, messageId: number, reaction: Reaction, params?: AddReactionParams) {
    const message = await this.getMessage(chatId, messageId);
    if (!message) {
      throw new InputError("Message not found.");
    }
    const chosenReactions = (message.reactions ?? []).filter((v) => v.chosen);
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
    const chosenReactions = (message.reactions ?? []).filter((v) => v.chosen);
    for (const r of chosenReactions) {
      if (reactionEqual(r.reaction, reaction)) {
        const reactions = chosenReactions.filter((v) => v != r).map((v) => v.reaction);
        await this.setReactions(chatId, messageId, reactions);
        break;
      }
    }
  }

  static canHandleUpdate(update: Api.Update): update is MessageManagerUpdate {
    return isOneOf(messageManagerUpdates, update);
  }

  async handleUpdate(update: MessageManagerUpdate): Promise<Update | null> {
    if (is("updateNewMessage", update) || is("updateNewChannelMessage", update) || is("updateEditMessage", update) || is("updateEditChannelMessage", update)) {
      if (is("message", update.message) || is("messageService", update.message)) {
        const chatId = peerToChatId(update.message.peer_id);
        await this.#c.messageStorage.setMessage(chatId, update.message.id, update.message);
      }
    }

    if (
      is("updateNewMessage", update) ||
      is("updateNewChannelMessage", update) ||
      is("updateEditMessage", update) ||
      is("updateEditChannelMessage", update) ||
      is("updateBotNewBusinessMessage", update) ||
      is("updateBotEditBusinessMessage", update) ||
      is("updateNewScheduledMessage", update)
    ) {
      if (!(is("messageEmpty", update.message))) {
        const isOutgoing = update.message.out;
        let shouldIgnore = false;
        if (isOutgoing) {
          if (this.#c.outgoingMessages == null) {
            this.#c.outgoingMessages = this.#c.storage.accountType == "user" ? "all" : "business";
          }
          if (this.#c.outgoingMessages == "none") {
            shouldIgnore = true;
          } else if (this.#c.outgoingMessages == "business") {
            if (!is("updateBotNewBusinessMessage", update) && !is("updateBotEditBusinessMessage", update)) {
              shouldIgnore = true;
            }
          }
        }
        if (!shouldIgnore) {
          const business = "connection_id" in update ? { connectionId: update.connection_id, replyToMessage: update.reply_to_message } : undefined;
          const message = await this.constructMessage(update.message, undefined, business);
          if (is("updateNewMessage", update) || is("updateNewChannelMessage", update) || is("updateBotNewBusinessMessage", update)) {
            return { message };
          } else if (is("updateNewScheduledMessage", update)) {
            message.scheduled = true;
            return { scheduledMessage: message };
          } else {
            return { editedMessage: message };
          }
        }
      }
    }

    if (is("updateDeleteMessages", update)) {
      const deletedMessages = new Array<{ chatId: number; messageId: number }>();
      for (const messageId of update.messages) {
        const chatId = await this.#c.messageStorage.getMessageChat(messageId);
        if (chatId) {
          deletedMessages.push({ chatId, messageId });
        }
      }
      if (deletedMessages.length > 0) {
        return { deletedMessages };
      }
    } else if (is("updateDeleteChannelMessages", update)) {
      const chatId = getChannelChatId(update.channel_id);
      const deletedMessages = new Array<{ chatId: number; messageId: number }>();
      for (const messageId of update.messages) {
        const message = await this.#c.messageStorage.getMessage(chatId, messageId);
        if (message != null) {
          deletedMessages.push({ chatId, messageId });
        }
      }
      return { deletedMessages };
    } else if (is("updateDeleteScheduledMessages", update)) {
      const chatId = peerToChatId(update.peer);
      const deletedMessages = update.messages.map((v) => ({ chatId, messageId: v }));
      return { deletedMessages, scheduled: true };
    } else if (is("updateBotDeleteBusinessMessage", update)) {
      const chatId = peerToChatId(update.peer);
      const deletedMessages = update.messages.map((v) => ({ chatId, messageId: v }));
      return { deletedMessages, businessConnectionId: update.connection_id };
    }

    if (is("updateChannelParticipant", update) || is("updateChatParticipant", update)) {
      const chatMember = await constructChatMemberUpdated(update, this.#c.getEntity);
      const selfId = await this.#c.getSelfId();
      if (chatMember.oldChatMember.user.id == selfId) {
        return { myChatMember: chatMember };
      } else {
        return { chatMember };
      }
    }

    if (is("updateBotChatInviteRequester", update)) {
      const joinRequest = await constructJoinRequest(update, this.#c.getEntity);
      return { joinRequest };
    }

    return null;
  }

  async sendChatAction(chatId: ID, action: ChatAction, params?: SendChatActionParams) {
    this.#checkParams(params);
    let action_: Api.SendMessageAction;
    switch (action) {
      case "type":
        action_ = { _: "sendMessageTypingAction" };
        break;
      case "uploadPhoto":
        action_ = { _: "sendMessageUploadPhotoAction", progress: 0 };
        break;
      case "recordVideo":
        action_ = { _: "sendMessageRecordVideoAction" };
        break;
      case "uploadVideo":
        action_ = { _: "sendMessageRecordVideoAction" };
        break;
      case "recordVoice":
        action_ = { _: "sendMessageRecordAudioAction" };
        break;
      case "uploadAudio":
        action_ = { _: "sendMessageUploadAudioAction", progress: 0 };
        break;
      case "uploadDocument":
        action_ = { _: "sendMessageUploadDocumentAction", progress: 0 };
        break;
      case "chooseSticker":
        action_ = { _: "sendMessageChooseStickerAction" };
        break;
      case "findLocation":
        action_ = { _: "sendMessageGeoLocationAction" };
        break;
      case "recordVideoNote":
        action_ = { _: "sendMessageRecordRoundAction" };
        break;
      case "uploadVideoNote":
        action_ = { _: "sendMessageUploadRoundAction", progress: 0 };
        break;
      default:
        throw new InputError(`Invalid chat action: ${action}`);
    }
    await this.#c.invoke({ _: "messages.setTyping", peer: await this.#c.getInputPeer(chatId), action: action_, top_msg_id: params?.messageThreadId }, params?.businessConnectionId);
  }

  async deleteChatPhoto(chatId: number) {
    const peer = await this.#c.getInputPeer(chatId);
    if (!(canBeInputChannel(peer)) && !(is("inputPeerChat", peer))) {
      unreachable();
    }

    if (canBeInputChannel(peer)) {
      await this.#c.invoke({ _: "channels.editPhoto", channel: toInputChannel(peer), photo: { _: "inputChatPhotoEmpty" } });
    } else if (is("inputPeerChat", peer)) {
      await this.#c.invoke({ _: "messages.editChatPhoto", chat_id: peer.chat_id, photo: { _: "inputChatPhotoEmpty" } });
    }
  }

  async setChatPhoto(chatId: number, photo: FileSource, params?: SetChatPhotoParams): Promise<void> {
    const peer = await this.#c.getInputPeer(chatId);
    if (!(canBeInputChannel(peer)) && !(is("inputPeerChat", peer))) {
      unreachable();
    }

    const file = await this.#c.fileManager.upload(photo, params);
    const photo_: Api.inputChatUploadedPhoto = { _: "inputChatUploadedPhoto", file };

    if (canBeInputChannel(peer)) {
      await this.#c.invoke({ _: "channels.editPhoto", channel: toInputChannel(peer), photo: photo_ });
    } else if (is("inputPeerChat", peer)) {
      await this.#c.invoke({ _: "messages.editChatPhoto", chat_id: peer.chat_id, photo: photo_ });
    }
  }

  async banChatMember(chatId: ID, memberId: ID, params?: BanChatMemberParams) {
    const chat = await this.#c.getInputPeer(chatId);
    if (!(is("inputPeerChannel", chat)) && !(is("inputPeerChat", chat))) {
      throw new InputError("Expected a channel, supergroup, or group ID.");
    }
    const member = await this.#c.getInputPeer(memberId);
    if (is("inputPeerChannel", chat)) {
      if (params?.deleteMessages) {
        try {
          await this.deleteChatMemberMessages(chatId, memberId);
        } catch {
          //
        }
      }
      await this.#c.invoke({
        _: "channels.editBanned",
        channel: { ...chat, _: "inputChannel" },
        participant: member,
        banned_rights: ({
          _: "chatBannedRights",
          until_date: params?.untilDate ? toUnixTimestamp(params.untilDate) : 0,
          view_messages: true,
          send_messages: true,
          send_media: true,
          send_stickers: true,
          send_gifs: true,
          send_games: true,
          send_inline: true,
          embed_links: true,
        }),
      });
    } else if (is("inputPeerChat", chat)) {
      if (!canBeInputUser(member)) {
        throw new InputError(`Invalid user ID: ${memberId}`);
      }
      await this.#c.invoke({ _: "messages.deleteChatUser", chat_id: chat.chat_id, user_id: toInputUser(member), revoke_history: params?.deleteMessages ? true : undefined });
    }
  }

  async unbanChatMember(chatId: ID, memberId: ID) {
    const channel = await this.#c.getInputChannel(chatId);
    const member = await this.#c.getInputPeer(memberId);
    await this.#c.invoke({ _: "channels.editBanned", channel, participant: member, banned_rights: ({ _: "chatBannedRights", until_date: 0 }) });
  }

  async setChatMemberRights(chatId: ID, memberId: ID, params?: SetChatMemberRightsParams) {
    const channel = await this.#c.getInputChannel(chatId);
    const member = await this.#c.getInputPeer(memberId);
    await this.#c.invoke({ _: "channels.editBanned", channel, participant: member, banned_rights: chatMemberRightsToTlObject(params?.rights, params?.untilDate) });
  }

  async #toggleJoinRequests(chatId: ID, enabled: boolean) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.toggleJoinRequest", channel, enabled });
  }
  async enableJoinRequests(chatId: ID) {
    this.#c.storage.assertUser("enableJoinRequests");
    await this.#toggleJoinRequests(chatId, true);
  }
  async disableJoinRequests(chatId: ID) {
    this.#c.storage.assertUser("disableJoinRequests");
    await this.#toggleJoinRequests(chatId, false);
  }

  async approveJoinRequest(chatId: ID, userId: ID) {
    await this.#c.invoke({
      _: "messages.hideChatJoinRequest",
      peer: await this.#c.getInputPeer(chatId),
      user_id: await this.#c.getInputUser(userId),
      approved: true,
    });
  }
  async declineJoinRequest(chatId: ID, userId: ID) {
    await this.#c.invoke({
      _: "messages.hideChatJoinRequest",
      peer: await this.#c.getInputPeer(chatId),
      user_id: await this.#c.getInputUser(userId),
    });
  }

  async approveJoinRequests(chatId: ID, params?: ApproveJoinRequestsParams) {
    this.#c.storage.assertUser("approveJoinRequests");
    await this.#c.invoke({
      _: "messages.hideAllChatJoinRequests",
      peer: await this.#c.getInputPeer(chatId),
      approved: true,
      link: params?.inviteLink,
    });
  }
  async declineJoinRequests(chatId: ID, params?: DeclineJoinRequestsParams) {
    this.#c.storage.assertUser("declineJoinRequests");
    await this.#c.invoke({
      _: "messages.hideAllChatJoinRequests",
      peer: await this.#c.getInputPeer(chatId),
      link: params?.inviteLink,
    });
  }

  async searchMessages(chatId: ID, query: string, params?: SearchMessagesParams) {
    this.#c.storage.assertUser("searchMessages");
    const result = await this.#c.invoke({ _: "messages.search", peer: await this.#c.getInputPeer(chatId), q: query, add_offset: 0, filter: messageSearchFilterToTlObject(params?.filter ?? "empty"), hash: 0n, limit: params?.limit ?? 100, max_date: 0, max_id: 0, min_date: 0, min_id: 0, offset_id: params?.after ? params.after : 0, from_id: params?.from ? await this.#c.getInputPeer(params.from) : undefined });
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

  async setBoostsRequiredToCircumventRestrictions(chatId: ID, boosts: number) {
    await this.#c.storage.assertUser("setBoostsRequiredToCircumventRestrictions");
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.invoke({ _: "channels.setBoostsToUnblockRestrictions", channel, boosts });
  }

  async createInviteLink(chatId: ID, params?: CreateInviteLinkParams) {
    if (params?.requireApproval && params?.limit) {
      throw new InputError("requireApproval cannot be true while limit is specified.");
    }
    const result = await this.#c.invoke({ _: "messages.exportChatInvite", peer: await this.#c.getInputPeer(chatId), title: params?.title, expire_date: params?.expireAt ? toUnixTimestamp(params.expireAt) : undefined, request_needed: params?.requireApproval ? true : undefined, usage_limit: params?.limit });
    return await constructInviteLink(as("chatInviteExported", result), this.#c.getEntity);
  }

  async getCreatedInviteLinks(chatId: ID, params?: GetCreatedInviteLinksParams) {
    this.#c.storage.assertUser("getCreatedInviteLinks");
    const { invites } = await this.#c.invoke({ _: "messages.getExportedChatInvites", peer: await this.#c.getInputPeer(chatId), revoked: params?.revoked ? true : undefined, admin_id: params?.by ? await this.#c.getInputUser(params.by) : { _: "inputUserEmpty" }, limit: params?.limit ?? 100, offset_date: params?.afterDate ? toUnixTimestamp(params.afterDate) : undefined, offset_link: params?.afterInviteLink });
    return await Promise.all(invites.map((v) => as("chatInviteExported", v)).map((v) => constructInviteLink(v, this.#c.getEntity)));
  }

  async joinChat(chatId: ID) {
    this.#c.storage.assertUser("joinChat");
    const peer = await this.#c.getInputPeer(chatId);
    if (canBeInputUser(peer)) {
      throw new InputError("Cannot join private chats.");
    } else if (canBeInputChannel(peer)) {
      await this.#c.invoke({ _: "channels.joinChannel", channel: toInputChannel(peer) });
    } else if (is("inputPeerChat", peer)) {
      await this.#c.invoke({ _: "messages.addChatUser", chat_id: peer.chat_id, user_id: { _: "inputUserSelf" }, fwd_limit: 0 }); // TODO: use potential high-level method for adding participants to chats
    } else {
      unreachable();
    }
  }

  async leaveChat(chatId: ID) {
    const peer = await this.#c.getInputPeer(chatId);
    if (canBeInputUser(peer)) {
      throw new InputError("Cannot leave private chats.");
    } else if (canBeInputChannel(peer)) {
      await this.#c.invoke({ _: "channels.leaveChannel", channel: toInputChannel(peer) });
    } else if (is("inputPeerChat", peer)) {
      await this.#c.invoke({ _: "messages.deleteChatUser", chat_id: peer.chat_id, user_id: { _: "inputUserSelf" } }); // TODO: use potential high-level method for adding participants to chats
    } else {
      unreachable();
    }
  }

  async blockUser(userId: ID) {
    this.#c.storage.assertUser("blockUser");
    const id = await this.#c.getInputPeer(userId);
    if (!(is("user", id))) {
      throw new InputError("Only users can be blocked or unblocked.");
    }
    await this.#c.invoke({ _: "contacts.block", id });
  }

  async unblockUser(userId: ID) {
    this.#c.storage.assertUser("unblockUser");
    const id = await this.#c.getInputPeer(userId);
    if (!(is("user", id))) {
      throw new InputError("Only users can be blocked or unblocked.");
    }
    await this.#c.invoke({ _: "contacts.unblock", id });
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
      media: ({ _: "inputMediaPoll", poll: ({ _: "poll", id: BigInt(message.poll.id), closed: true, question: { _: "textWithEntities", text: "", entities: [] }, answers: [] }) }),
      reply_markup: await this.#constructReplyMarkup(params),
    }, params?.businessConnectionId);

    const message_ = (await this.#updatesToMessages(chatId, result))[0];
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
        media: ({ _: "inputMediaGeoLive", geo_point: ({ _: "inputGeoPoint", lat: latitude, long: longitude, accuracy_radius: params?.horizontalAccuracy }), heading: params?.heading, proximity_notification_radius: params?.proximityAlertRadius }),
        reply_markup: await this.#constructReplyMarkup(params),
      }, params?.businessConnectionId);

      const message = (await this.#updatesToMessages(chatId, result))[0];
      return assertMessageType(message, "location");
    }
    unreachable();
  }

  async editInlineMessageLiveLocation(inlineMessageId: string, latitude: number, longitude: number, params?: EditMessageLiveLocationParams) {
    this.#checkParams(params);
    this.#c.storage.assertBot("editInlineMessageLiveLocation");
    const id = deserializeInlineMessageId(inlineMessageId);
    await this.#c.invoke({ _: "messages.editInlineBotMessage", id, media: ({ _: "inputMediaGeoLive", geo_point: ({ _: "inputGeoPoint", lat: latitude, long: longitude, accuracy_radius: params?.horizontalAccuracy }), heading: params?.heading, proximity_notification_radius: params?.proximityAlertRadius }), reply_markup: await this.#constructReplyMarkup(params) });
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
      flexible: params?.flexible || undefined,
    };

    const message = await this.#sendMedia(
      chatId,
      {
        _: "inputMediaInvoice",
        title,
        description,
        invoice,
        start_param: params?.startParameter,
        payload: new TextEncoder().encode(payload),
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

  async addChatMember(chatId: ID, userId: ID, params?: AddChatMemberParams) {
    this.#c.storage.assertUser("addChatMember");
    const chat = await this.#c.getInputPeer(chatId);
    if (isOneOf(["inputPeerEmpty", "inputPeerSelf", "inputPeerUser", "inputPeerUserFromMessage"], chat)) {
      throw new InputError("Cannot add members to private chats");
    }
    const user = await this.#c.getInputUser(userId);
    if (is("inputPeerChat", chat)) {
      const result = await this.#c.invoke({ _: "messages.addChatUser", chat_id: chat.chat_id, user_id: user, fwd_limit: params?.historyLimit ?? 0 });
      return result.missing_invitees.map(constructFailedInvitation);
    } else if (is("inputPeerChannel", chat)) {
      const result = await this.#c.invoke({ _: "channels.inviteToChannel", channel: { ...chat, _: "inputChannel" }, users: [user] });
      return result.missing_invitees.map(constructFailedInvitation);
    }
    unreachable();
  }

  async addChatMembers(chatId: ID, userIds: ID[]) {
    this.#c.storage.assertUser("addChatMembers");
    const chat = await this.#c.getInputPeer(chatId);
    if (isOneOf(["inputPeerEmpty", "inputPeerSelf", "inputPeerUser", "inputPeerUserFromMessage"], chat)) {
      throw new InputError("Cannot add members to private chats");
    }
    const users = new Array<Api.inputUserSelf | Api.inputUser | Api.inputUserFromMessage>();
    for (const userId of userIds) {
      users.push(await this.#c.getInputUser(userId));
    }
    if (is("inputPeerChat", chat)) {
      throw new InputError("addChatMembers cannot be used with basic groups");
    } else if (canBeInputChannel(chat)) {
      const result = await this.#c.invoke({ _: "channels.inviteToChannel", channel: toInputChannel(chat), users });
      return result.missing_invitees.map(constructFailedInvitation);
    }
    unreachable();
  }

  async sendMediaGroup(chatId: ID, media: InputMedia[], params?: SendMediaGroupParams) {
    this.#checkParams(params);
    {
      if (!Array.isArray(media) || !media.length) {
        throw new InputError("Media group must not be empty.");
      }
      // deno-lint-ignore no-explicit-any
      const firstMedia = (media as any)?.[0];
      const firstMediaType = firstMedia?.animation !== undefined ? "animation" : firstMedia?.audio !== undefined ? "audio" : firstMedia?.photo !== undefined ? "photo" : firstMedia?.video !== undefined ? "video" : "document";
      for (const media_ of media) {
        // deno-lint-ignore no-explicit-any
        const thisMediaType = (media_ as any)?.animation !== undefined ? "animation" : (media_ as any)?.audio !== undefined ? "audio" : (media_ as any)?.photo !== undefined ? "photo" : (media_ as any)?.video !== undefined ? "video" : "document";
        if (thisMediaType == "animation") {
          throw new InputError("Media groups cannot consist of animations.");
        }
        if ((firstMediaType == "video" || firstMediaType == "photo") && (thisMediaType != "video" && thisMediaType != "photo")) {
          throw new InputError(`Media of the type ${firstMediaType} cannot be mixed with those of the type ${thisMediaType}.`);
        }
        if (firstMediaType != "video" && firstMediaType != "photo" && firstMediaType != thisMediaType) {
          throw new InputError(`Media of the type ${firstMediaType} cannot be mixed with other types.`);
        }
      }
    }

    const multiMedia: Api.inputSingleMedia[] = new Array<Api.InputSingleMedia>();
    for (const v of media) {
      const randomId = getRandomId();
      const [message, entities] = v.caption !== undefined ? await this.parseText(v.caption, { entities: v.captionEntities, parseMode: v.parseMode }) : ["", []];
      multiMedia.push({ _: "inputSingleMedia", message, entities, random_id: randomId, media: await this.#resolveInputMedia(v) });
    }

    const peer = await this.#c.getInputPeer(chatId);
    for (const [i, media_] of multiMedia.entries()) {
      if (is("inputMediaUploadedPhoto", media_.media)) {
        const result = as("messageMediaPhoto", await this.#c.invoke({ _: "messages.uploadMedia", media: media_.media, peer }));
        const photo = as("photo", result.photo);
        multiMedia[i] = { ...media_, media: { _: "inputMediaPhoto", id: { ...photo, _: "inputPhoto" } } };
      } else if (is("inputMediaUploadedDocument", media_.media)) {
        const result = as("messageMediaDocument", await this.#c.invoke({ _: "messages.uploadMedia", media: media_.media, peer }));
        const document = as("document", result.document);
        multiMedia[i] = { ...media_, media: { _: "inputMediaDocument", id: { ...document, _: "inputDocument" } } };
      }
    }

    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
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
      allow_paid_floodskip: params?.paidBroadcast ? true : undefined,
    });

    return await this.#updatesToMessages(chatId, result);
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
    return (await this.#updatesToMessages(botId, result))[0];
  }
}
