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

import { contentType, unreachable } from "../0_deps.ts";
import { InputError } from "../0_errors.ts";
import { getLogger, getRandomId, Logger, toUnixTimestamp } from "../1_utilities.ts";
import { as, enums, functions, getChannelChatId, peerToChatId, types } from "../2_tl.ts";
import { constructChatMemberUpdated, constructInviteLink, deserializeFileId, FileId } from "../3_types.ts";
import { assertMessageType, ChatAction, ChatMember, chatMemberRightsToTlObject, constructChatMember, constructMessage as constructMessage_, deserializeInlineMessageId, FileSource, FileType, ID, Message, MessageEntity, messageEntityToTlObject, ParseMode, Reaction, reactionEqual, reactionToTlObject, replyMarkupToTlObject, Update, UsernameResolver } from "../3_types.ts";
import { messageSearchFilterToTlObject } from "../types/0_message_search_filter.ts";
import { parseHtml } from "./0_html.ts";
import { parseMarkdown } from "./0_markdown.ts";
import { _SendCommon, AddReactionParams, BanChatMemberParams, CreateInviteLinkParams, DeleteMessagesParams, EditMessageLiveLocationParams, EditMessageParams, EditMessageReplyMarkupParams, ForwardMessagesParams, GetCreatedInviteLinksParams, GetHistoryParams, PinMessageParams, SearchMessagesParams, SendAnimationParams, SendAudioParams, SendChatActionParams, SendContactParams, SendDiceParams, SendDocumentParams, SendLocationParams, SendMessageParams, SendPhotoParams, SendPollParams, SendStickerParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetChatMemberRightsParams, SetChatPhotoParams, SetReactionsParams, StopPollParams } from "./0_params.ts";
import { C as C_ } from "./0_types.ts";
import { checkMessageId } from "./0_utilities.ts";
import { checkArray } from "./0_utilities.ts";
import { getFileContents, isHttpUrl } from "./0_utilities.ts";
import { FileManager } from "./1_file_manager.ts";

const FALLBACK_MIME_TYPE = "application/octet-stream";
const STICKER_MIME_TYPES = ["image/webp", "video/webm", "application/x-tgsticker"];

interface C extends C_ {
  fileManager: FileManager;
}

type MessageManagerUpdate =
  | types.UpdateNewMessage
  | types.UpdateNewChannelMessage
  | types.UpdateEditMessage
  | types.UpdateEditChannelMessage
  | types.UpdateBotNewBusinessMessage
  | types.UpdateBotEditBusinessMessage
  | types.UpdateBotDeleteBusinessMessage
  | types.UpdateDeleteMessages
  | types.UpdateDeleteChannelMessages
  | types.UpdateChannelParticipant
  | types.UpdateChatParticipant;

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
    let messages_ = new Array<enums.Message>();
    const chatId_ = peerToChatId(peer);
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
      if (peer instanceof types.InputPeerChannel) {
        messages_ = await this.#c.api.channels.getMessages({
          channel: new types.InputChannel(peer),
          id: messageIds.map((v) => new types.InputMessageID({ id: v })),
        }).then((v) => v[as](types.messages.ChannelMessages).messages);
      } else {
        messages_ = await this.#c.api.messages.getMessages({
          id: messageIds.map((v) => new types.InputMessageID({ id: v })),
        }).then((v) => v[as](types.messages.Messages).messages);
      }
    }
    const messages = new Array<Message>();
    for (const message_ of messages_) {
      if (message_ instanceof types.MessageEmpty) {
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

  async parseText(text_: string, params?: { parseMode?: ParseMode; entities?: MessageEntity[] }) {
    const [text, entities_] = MessageManager.parseText(text_, params?.entities ?? [], params?.parseMode ?? this.#c.parseMode);
    const entities = entities_?.length > 0 ? await Promise.all(entities_.map((v) => messageEntityToTlObject(v, this.#c.getEntity))) : undefined;
    return [text, entities] as const;
  }

  async #updatesToMessages(chatId: ID, updates: enums.Updates, businessConnectionId?: string) {
    const messages = new Array<Message>();

    if (updates instanceof types.Updates) {
      for (const update of updates.updates) {
        if ("message" in update && update.message instanceof types.MessageEmpty) {
          continue;
        }
        if (update instanceof types.UpdateNewMessage || update instanceof types.UpdateEditMessage) {
          messages.push(await this.constructMessage(update.message));
        } else if (update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditChannelMessage) {
          messages.push(await this.constructMessage(update.message));
        } else if (update instanceof types.UpdateBotNewBusinessMessage) {
          messages.push(await this.constructMessage(update.message, false, { connectionId: businessConnectionId ?? update.connection_id, replyToMessage: update.reply_to_message }));
        } else if (update instanceof types.UpdateBotEditBusinessMessage) {
          messages.push(await this.constructMessage(update.message, false, { connectionId: businessConnectionId ?? update.connection_id, replyToMessage: update.reply_to_message }));
        }
      }
    } else if (updates instanceof types.UpdateShortSentMessage) {
      const message = await this.getMessage(chatId, updates.id);
      if (message != null) {
        messages.push(message);
      }
    }

    return messages;
  }

  async constructMessage(message_: enums.Message, r?: boolean, business?: { connectionId: string; replyToMessage?: enums.Message }) {
    return await constructMessage_(message_, this.#c.getEntity, this.getMessage.bind(this), this.#c.fileManager.getStickerSetName.bind(this.#c.fileManager), r, business);
  }

  async forwardMessages(from: ID, to: ID, messageIds: number[], params?: ForwardMessagesParams) {
    checkArray(messageIds, checkMessageId);
    const result = await this.#c.api.messages.forwardMessages({
      from_peer: await this.#c.getInputPeer(from),
      to_peer: await this.#c.getInputPeer(to),
      id: messageIds,
      random_id: messageIds.map(() => getRandomId()),
      silent: params?.disableNotification || undefined,
      top_msg_id: params?.messageThreadId,
      noforwards: params?.disableNotification || undefined,
      send_as: params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined,
      drop_author: params?.dropSenderName || undefined,
      drop_media_captions: params?.dropCaption || undefined,
    });

    return await this.#updatesToMessages(to, result);
  }

  async getHistory(chatId: ID, params?: GetHistoryParams) { // TODO: get from database properly
    await this.#c.storage.assertUser("getHistory");
    let limit = params?.limit ?? 100;
    if (limit <= 0) {
      limit = 1;
    } else if (limit > 100) {
      limit = 100;
    }
    let offsetId = params?.after?.id ?? 0;
    if (offsetId < 0) {
      offsetId = 0;
    }
    const peer = await this.#c.getInputPeer(chatId);
    const messages = new Array<Message>();
    if (messages.length > 0) {
      offsetId = messages[messages.length - 1].id; // TODO: track id of oldest message and don't send requests for it
    }
    const result = await this.#c.api.messages.getHistory({
      peer: peer,
      offset_id: offsetId,
      offset_date: 0,
      add_offset: 0,
      limit,
      max_id: 0,
      min_id: 0,
      hash: 0n,
    });

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
    const inputPeer = await this.#c.getInputPeer(v).then((v) => v[as](types.InputPeerUser));
    return new types.InputUser(inputPeer);
  };

  async #constructReplyMarkup(params?: Pick<SendMessageParams, "replyMarkup">) {
    if (params?.replyMarkup) {
      await this.#c.storage.assertBot("replyMarkup");
      return replyMarkupToTlObject(params.replyMarkup, this.usernameResolver.bind(this));
    }
  }

  async #resolveSendAs(params?: Pick<SendMessageParams, "sendAs">) {
    const sendAs = params?.sendAs;
    if (sendAs !== undefined) {
      await this.#c.storage.assertUser("sendAs");
      return sendAs ? await this.#c.getInputPeer(sendAs) : undefined;
    }
  }

  async sendMessage(
    chatId: ID,
    text: string,
    params?: SendMessageParams,
  ) {
    const [message, entities] = await this.parseText(text, params);

    const replyMarkup = await this.#constructReplyMarkup(params);

    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const noWebpage = params?.linkPreview?.disable ? true : undefined;
    const invertMedia = params?.linkPreview?.aboveText ? true : undefined;
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = await this.#resolveSendAs(params);

    let result: enums.Updates;
    if (!noWebpage && params?.linkPreview?.url) {
      result = await this.#c.invoke(
        new functions.messages.sendMedia({
          peer,
          random_id: randomId,
          media: new types.InputMediaWebPage({
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
        }),
        params?.businessConnectionId,
      );
    } else {
      result = await this.#c.invoke(
        new functions.messages.sendMessage({
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
        }),
        params?.businessConnectionId,
      );
    }

    const message_ = await this.#updatesToMessages(chatId, result, params?.businessConnectionId).then((v) => v[0]);
    return assertMessageType(message_, "text");
  }

  async #constructReplyTo(params?: _SendCommon) {
    const topMsgId = params?.messageThreadId;
    const replyToMsgId = params?.replyToMessageId;
    return replyToMsgId !== undefined ? new types.InputReplyToMessage({ reply_to_msg_id: replyToMsgId, top_msg_id: topMsgId, quote_text: params?.replyQuote?.text, quote_entities: await Promise.all(params?.replyQuote?.entities.map((v) => messageEntityToTlObject(v, this.#c.getEntity)) ?? []), quote_offset: params?.replyQuote?.offset }) : undefined;
  }

  async sendVenue(chatId: ID, latitude: number, longitude: number, title: string, address: string, params?: SendVenueParams) {
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const result = await this.#c.invoke(
      new functions.messages.sendMedia({
        peer,
        random_id: randomId,
        silent,
        noforwards,
        reply_to: await this.#constructReplyTo(params),
        send_as: sendAs,
        reply_markup: replyMarkup,
        media: new types.InputMediaVenue({
          geo_point: new types.InputGeoPoint({
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
      }),
      params?.businessConnectionId,
    );

    const message = await this.#updatesToMessages(chatId, result, params?.businessConnectionId).then((v) => v[0]);
    return assertMessageType(message, "venue");
  }

  async sendContact(chatId: ID, firstName: string, number: string, params?: SendContactParams) {
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const result = await this.#c.invoke(
      new functions.messages.sendMedia({
        peer,
        random_id: randomId,
        silent,
        noforwards,
        reply_to: await this.#constructReplyTo(params),
        send_as: sendAs,
        reply_markup: replyMarkup,
        media: new types.InputMediaContact({
          phone_number: number,
          first_name: firstName,
          last_name: params?.lastName ?? "",
          vcard: params?.vcard ?? "",
        }),
        message: "",
      }),
      params?.businessConnectionId,
    );

    const message = await this.#updatesToMessages(chatId, result, params?.businessConnectionId).then((v) => v[0]);
    return assertMessageType(message, "contact");
  }

  async sendDice(chatId: ID, params?: SendDiceParams) {
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const result = await this.#c.invoke(
      new functions.messages.sendMedia({
        peer,
        random_id: randomId,
        silent,
        noforwards,
        reply_to: await this.#constructReplyTo(params),
        send_as: sendAs,
        reply_markup: replyMarkup,
        media: new types.InputMediaDice({
          emoticon: params?.emoji ?? "🎲",
        }),
        message: "",
      }),
      params?.businessConnectionId,
    );

    const message = await this.#updatesToMessages(chatId, result, params?.businessConnectionId).then((v) => v[0]);
    return assertMessageType(message, "dice");
  }

  async sendLocation(chatId: ID, latitude: number, longitude: number, params?: SendLocationParams) {
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const result = await this.#c.invoke(
      new functions.messages.sendMedia({
        peer,
        random_id: randomId,
        silent,
        noforwards,
        reply_to: await this.#constructReplyTo(params),
        send_as: sendAs,
        reply_markup: replyMarkup,
        media: params?.livePeriod !== undefined
          ? new types.InputMediaGeoLive({
            geo_point: new types.InputGeoPoint({
              lat: latitude,
              long: longitude,
              accuracy_radius: params?.horizontalAccuracy,
            }),
            heading: params?.heading,
            period: params.livePeriod,
            proximity_notification_radius: params?.proximityAlertRadius,
          })
          : new types.InputMediaGeoPoint({
            geo_point: new types.InputGeoPoint({
              lat: latitude,
              long: longitude,
              accuracy_radius: params?.horizontalAccuracy,
            }),
          }),
        message: "",
      }),
      params?.businessConnectionId,
    );

    const message = await this.#updatesToMessages(chatId, result, params?.businessConnectionId).then((v) => v[0]);
    return assertMessageType(message, "location");
  }

  async sendVideoNote(chatId: ID, audio: FileSource, params?: SendVideoNoteParams) {
    const message = await this.#sendDocumentInner(chatId, audio, params, FileType.VideoNote, [
      new types.DocumentAttributeVideo({
        round_message: true,
        w: params?.length ?? 0,
        h: params?.length ?? 0,
        duration: params?.duration ?? 0,
      }),
    ], false);
    return assertMessageType(message, "videoNote");
  }

  async sendAudio(chatId: ID, audio: FileSource, params?: SendAudioParams) {
    const message = await this.#sendDocumentInner(chatId, audio, params, FileType.Audio, [
      new types.DocumentAttributeAudio({
        duration: params?.duration ?? 0,
        performer: params?.performer,
        title: params?.title,
      }),
    ]);
    return assertMessageType(message, "audio");
  }

  async sendVoice(chatId: ID, voice: FileSource, params?: SendVoiceParams) {
    const message = await this.#sendDocumentInner(chatId, voice, params, FileType.VoiceNote, [
      new types.DocumentAttributeAudio({
        voice: true,
        duration: params?.duration ?? 0,
      }),
    ]);
    return assertMessageType(message, "voice");
  }

  async sendAnimation(chatId: ID, animation: FileSource, params?: SendAnimationParams) {
    const message = await this.#sendDocumentInner(chatId, animation, params, FileType.Animation, [
      new types.DocumentAttributeAnimated(),
      new types.DocumentAttributeVideo({
        supports_streaming: true,
        w: params?.width ?? 0,
        h: params?.height ?? 0,
        duration: params?.duration ?? 0,
      }),
    ]);
    return assertMessageType(message, "animation");
  }

  async sendVideo(chatId: ID, video: FileSource, params?: SendVideoParams) {
    const message = await this.#sendDocumentInner(chatId, video, params, FileType.Video, [
      new types.DocumentAttributeVideo({
        supports_streaming: params?.supportsStreaming ? true : undefined,
        w: params?.width ?? 0,
        h: params?.height ?? 0,
        duration: params?.duration ?? 0,
      }),
    ]);
    return assertMessageType(message, "video");
  }

  async #sendDocumentInner(chatId: ID, document: FileSource, params: SendDocumentParams | undefined, fileType: FileType, otherAttribs: enums.DocumentAttribute[], urlSupported = false, expectedMimeTypes?: string[]) {
    let media: enums.InputMedia | null = null;
    const spoiler = params?.hasSpoiler ? true : undefined;

    if (typeof document === "string") {
      const fileId = this.resolveFileId(document, fileType);
      if (fileId != null) {
        media = new types.InputMediaDocument({
          id: new types.InputDocument(fileId),
          spoiler,
          query: otherAttribs.find((v): v is types.DocumentAttributeSticker => v instanceof types.DocumentAttributeSticker)?.alt || undefined,
        });
      }
    }

    if (media == null) {
      if (typeof document === "string" && isHttpUrl(document)) {
        if (!urlSupported) {
          throw new InputError("URL not supported.");
        }
        media = new types.InputMediaDocumentExternal({ url: document, spoiler });
      } else {
        const [contents, fileName_] = await getFileContents(document);
        let fileName = params?.fileName ?? fileName_;
        const mimeType = params?.mimeType ?? contentType(fileName.split(".").slice(-1)[0]) ?? FALLBACK_MIME_TYPE;
        if (expectedMimeTypes && !expectedMimeTypes.includes(mimeType)) {
          unreachable();
        }
        if (fileName.endsWith(".tgs") && fileType == FileType.Document) {
          fileName += "-";
        }
        const file = await this.#c.fileManager.upload(contents, { fileName, chunkSize: params?.chunkSize, signal: params?.signal });
        let thumb: enums.InputFile | undefined = undefined;
        if (params?.thumbnail) {
          const [thumbContents, fileName__] = await getFileContents(params.thumbnail);
          thumb = await this.#c.fileManager.upload(thumbContents, { fileName: fileName__, chunkSize: params?.chunkSize, signal: params?.signal });
        }
        media = new types.InputMediaUploadedDocument({
          file,
          thumb,
          spoiler,
          attributes: [new types.DocumentAttributeFilename({ file_name: fileName }), ...otherAttribs],
          mime_type: mimeType,
          force_file: fileType == FileType.Document ? true : undefined,
        });
      }
    }

    const message = await this.#sendMedia(chatId, media, params);
    return message;
  }

  async sendDocument(chatId: ID, document: FileSource, params?: SendDocumentParams) {
    const message = await this.#sendDocumentInner(chatId, document, params, FileType.Document, []);
    return assertMessageType(message, "document");
  }

  async sendSticker(chatId: ID, sticker: FileSource, params?: SendStickerParams) {
    const message = await this.#sendDocumentInner(chatId, sticker, params, FileType.Sticker, [new types.DocumentAttributeSticker({ alt: params?.emoji || "", stickerset: new types.InputStickerSetEmpty() })], undefined, STICKER_MIME_TYPES);
    return assertMessageType(message, "sticker");
  }

  async sendPhoto(chatId: ID, photo: FileSource, params?: SendPhotoParams) {
    let media: enums.InputMedia | null = null;
    const spoiler = params?.hasSpoiler ? true : undefined;

    if (typeof photo === "string") {
      const fileId = this.resolveFileId(photo, [FileType.Photo, FileType.ProfilePhoto]);
      if (fileId != null) {
        media = new types.InputMediaPhoto({
          id: new types.InputPhoto(fileId),
          spoiler,
        });
      }
    }

    if (media == null) {
      if (typeof photo === "string" && isHttpUrl(photo)) {
        media = new types.InputMediaPhotoExternal({ url: photo, spoiler });
      } else {
        const [contents, fileName] = await getFileContents(photo);
        const file = await this.#c.fileManager.upload(contents, { fileName, chunkSize: params?.chunkSize, signal: params?.signal });
        media = new types.InputMediaUploadedPhoto({ file, spoiler });
      }
    }

    const message = await this.#sendMedia(chatId, media, params);
    return assertMessageType(message, "photo");
  }

  async #sendMedia(chatId: ID, media: enums.InputMedia, params: SendPhotoParams | undefined) {
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const caption_ = params?.caption;
    const parseResult = caption_ !== undefined ? await this.parseText(caption_, { parseMode: params?.parseMode, entities: params?.captionEntities }) : undefined;

    const caption = parseResult === undefined ? undefined : parseResult[0];
    const captionEntities = parseResult === undefined ? undefined : parseResult[1];

    const result = await this.#c.invoke(
      new functions.messages.sendMedia({
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
      }),
      params?.businessConnectionId,
    );

    return await this.#updatesToMessages(chatId, result, params?.businessConnectionId).then((v) => v[0]);
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

  async sendPoll(chatId: ID, question: string, options: [string, string, ...string[]], params?: SendPollParams) {
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
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const explanation = params?.explanation;
    const parseResult = explanation !== undefined ? await this.parseText(explanation, { parseMode: params?.explanationParseMode, entities: params?.explanationEntities }) : undefined;

    const solution = parseResult === undefined ? undefined : parseResult[0];
    const solutionEntities = parseResult === undefined ? undefined : parseResult[1];

    const answers = options.map((v, i) => new types.PollAnswer({ option: new Uint8Array([i]), text: v }));

    const poll = new types.Poll({
      id: getRandomId(),
      answers,
      question,
      closed: params?.isClosed ? true : undefined,
      close_date: params?.closeDate ? toUnixTimestamp(params.closeDate) : undefined,
      close_period: params?.openPeriod ? params.openPeriod : undefined,
      multiple_choice: params?.allowMultipleAnswers ? true : undefined,
      public_voters: params?.isAnonymous === false ? true : undefined,
      quiz: params?.type == "quiz" ? true : undefined,
    });

    const media = new types.InputMediaPoll({
      poll,
      correct_answers: params?.correctOptionIndex ? [new Uint8Array([params.correctOptionIndex])] : undefined,
      solution,
      solution_entities: solutionEntities,
    });

    const result = await this.#c.invoke(
      new functions.messages.sendMedia({
        peer,
        random_id: randomId,
        silent,
        noforwards,
        reply_markup: replyMarkup,
        reply_to: await this.#constructReplyTo(params),
        send_as: sendAs,
        media,
        message: "",
      }),
      params?.businessConnectionId,
    );

    const message = await this.#updatesToMessages(chatId, result, params?.businessConnectionId).then((v) => v[0]);
    return assertMessageType(message, "poll");
  }

  async editMessageReplyMarkup(
    chatId: ID,
    messageId: number,
    params?: EditMessageReplyMarkupParams,
  ) {
    const result = await this.#c.api.messages.editMessage({
      id: checkMessageId(messageId),
      peer: await this.#c.getInputPeer(chatId),
      reply_markup: await this.#constructReplyMarkup(params),
    });

    const message_ = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return message_;
  }

  async editInlineMessageReplyMarkup(
    inlineMessageId: string,
    params?: EditMessageReplyMarkupParams,
  ) {
    const id = deserializeInlineMessageId(inlineMessageId);

    await this.#c.api.messages.editInlineBotMessage({
      id,
      reply_markup: await this.#constructReplyMarkup(params),
    });
  }

  async editMessageText(
    chatId: ID,
    messageId: number,
    text: string,
    params?: EditMessageParams,
  ) {
    const [message, entities] = await this.parseText(text, params);
    const noWebpage = params?.linkPreview?.disable ? true : undefined;
    const invertMedia = params?.linkPreview?.aboveText ? true : undefined;

    let media: enums.InputMedia | undefined = undefined;
    if (!noWebpage && params?.linkPreview?.url) {
      media = new types.InputMediaWebPage({
        url: params.linkPreview.url,
        force_large_media: params.linkPreview.largeMedia ? true : undefined,
        force_small_media: params.linkPreview.smallMedia ? true : undefined,
        optional: message.length ? undefined : true,
      });
    }

    const result = await this.#c.api.messages.editMessage({
      id: checkMessageId(messageId),
      peer: await this.#c.getInputPeer(chatId),
      entities,
      message,
      media,
      no_webpage: noWebpage,
      invert_media: invertMedia,
      reply_markup: await this.#constructReplyMarkup(params),
    });

    const message_ = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return assertMessageType(message_, "text");
  }

  async editInlineMessageText(inlineMessageId: string, text: string, params?: EditMessageParams) {
    const [message, entities] = await this.parseText(text, params);

    const id = deserializeInlineMessageId(inlineMessageId);
    const noWebpage = params?.linkPreview?.disable ? true : undefined;
    const invertMedia = params?.linkPreview?.aboveText ? true : undefined;

    let media: enums.InputMedia | undefined = undefined;
    if (!noWebpage && params?.linkPreview?.url) {
      media = new types.InputMediaWebPage({
        url: params.linkPreview.url,
        force_large_media: params.linkPreview.largeMedia ? true : undefined,
        force_small_media: params.linkPreview.smallMedia ? true : undefined,
        optional: message.length ? undefined : true,
      });
    }

    await this.#c.api.messages.editInlineBotMessage({
      id,
      entities,
      message,
      media,
      no_webpage: noWebpage,
      invert_media: invertMedia,
      reply_markup: await this.#constructReplyMarkup(params),
    });
  }

  async deleteMessages(chatId: ID, messageIds: number[], params?: DeleteMessagesParams) {
    checkArray(messageIds, checkMessageId);
    const peer = await this.#c.getInputPeer(chatId);
    if (peer instanceof types.InputPeerChannel) {
      await this.#c.api.channels.deleteMessages({ channel: new types.InputChannel(peer), id: messageIds });
    } else {
      await this.#c.api.messages.deleteMessages({ id: messageIds, revoke: params?.onlyForMe ? undefined : true });
    }
  }

  async deleteChatMemberMessages(chatId: ID, memberId: ID) {
    const channel = await this.#c.getInputChannel(chatId);
    const participant = await this.#c.getInputPeer(memberId);
    await this.#c.api.channels.deleteParticipantHistory({ channel, participant });
  }

  async pinMessage(chatId: ID, messageId: number, params?: PinMessageParams) {
    await this.#c.api.messages.updatePinnedMessage({
      peer: await this.#c.getInputPeer(chatId),
      id: checkMessageId(messageId),
      silent: params?.disableNotification ? true : undefined,
      pm_oneside: params?.bothSides ? undefined : true,
    });
  }

  async unpinMessage(chatId: ID, messageId: number) {
    await this.#c.api.messages.updatePinnedMessage({
      peer: await this.#c.getInputPeer(chatId),
      id: checkMessageId(messageId),
      unpin: true,
    });
  }

  async unpinMessages(chatId: ID) {
    await this.#c.api.messages.unpinAllMessages({ peer: await this.#c.getInputPeer(chatId) });
  }

  async setAvailableReactions(chatId: ID, availableReactions: "none" | "all" | Reaction[]) {
    // TODO: sync with storage
    await this.#c.api.messages.setChatAvailableReactions({
      peer: await this.#c.getInputPeer(chatId),
      available_reactions: availableReactions == "none" ? new types.ChatReactionsNone() : availableReactions == "all" ? new types.ChatReactionsAll() : Array.isArray(availableReactions) ? new types.ChatReactionsSome({ reactions: availableReactions.map((v) => v.type == "emoji" ? new types.ReactionEmoji({ emoticon: v.emoji }) : new types.ReactionCustomEmoji({ document_id: BigInt(v.id) })) }) : unreachable(),
    });
  }

  async #sendReaction(chatId: number, messageId: number, reactions: Reaction[], params?: AddReactionParams) {
    await this.#c.api.messages.sendReaction({
      peer: await this.#c.getInputPeer(chatId),
      msg_id: checkMessageId(messageId),
      reaction: reactions.map((v) => reactionToTlObject(v)),
      big: params?.big ? true : undefined,
      add_to_recent: params?.addToRecents ? true : undefined,
    });
  }

  async setReactions(chatId: number, messageId: number, reactions: Reaction[], params?: SetReactionsParams) {
    await this.#sendReaction(chatId, messageId, reactions, params);
  }

  async addReaction(chatId: number, messageId: number, reaction: Reaction, params?: AddReactionParams) {
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

  async removeReaction(chatId: number, messageId: number, reaction: Reaction) {
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

  static canHandleUpdate(update: enums.Update): update is MessageManagerUpdate {
    return update instanceof types.UpdateNewMessage ||
      update instanceof types.UpdateNewChannelMessage ||
      update instanceof types.UpdateEditMessage ||
      update instanceof types.UpdateEditChannelMessage ||
      update instanceof types.UpdateBotNewBusinessMessage ||
      update instanceof types.UpdateBotEditBusinessMessage ||
      update instanceof types.UpdateBotDeleteBusinessMessage ||
      update instanceof types.UpdateDeleteMessages ||
      update instanceof types.UpdateDeleteChannelMessages ||
      update instanceof types.UpdateChannelParticipant ||
      update instanceof types.UpdateChatParticipant;
  }

  async handleUpdate(update: MessageManagerUpdate): Promise<Update | null> {
    if (update instanceof types.UpdateNewMessage || update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditMessage || update instanceof types.UpdateEditChannelMessage) {
      if (update.message instanceof types.Message || update.message instanceof types.MessageService) {
        const chatId = peerToChatId(update.message.peer_id);
        await this.#c.messageStorage.setMessage(chatId, update.message.id, update.message);
      }
    }

    if (
      update instanceof types.UpdateNewMessage ||
      update instanceof types.UpdateNewChannelMessage ||
      update instanceof types.UpdateEditMessage ||
      update instanceof types.UpdateEditChannelMessage ||
      update instanceof types.UpdateBotNewBusinessMessage ||
      update instanceof types.UpdateBotEditBusinessMessage
    ) {
      if (!(update.message instanceof types.MessageEmpty)) {
        const isOutgoing = update.message.out;
        let shouldIgnore = isOutgoing ? (await this.#c.storage.getAccountType()) == "user" ? false : true : false;
        if (this.#c.ignoreOutgoing != null && isOutgoing) {
          shouldIgnore = this.#c.ignoreOutgoing;
        }
        if (!shouldIgnore) {
          const business = "connection_id" in update ? { connectionId: update.connection_id, replyToMessage: update.reply_to_message } : undefined;
          const message = await this.constructMessage(update.message, undefined, business);
          if (update instanceof types.UpdateNewMessage || update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateBotNewBusinessMessage) {
            return ({ message });
          } else {
            return ({ editedMessage: message });
          }
        }
      }
    }

    if (update instanceof types.UpdateDeleteMessages) {
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
    } else if (update instanceof types.UpdateDeleteChannelMessages) {
      const chatId = getChannelChatId(update.channel_id);
      const deletedMessages = new Array<{ chatId: number; messageId: number }>();
      for (const messageId of update.messages) {
        const message = await this.#c.messageStorage.getMessage(chatId, messageId);
        if (message != null) {
          deletedMessages.push({ chatId, messageId });
        }
      }
      return { deletedMessages };
    } else if (update instanceof types.UpdateBotDeleteBusinessMessage) {
      const chatId = peerToChatId(update.peer);
      const deletedMessages = update.messages.map((v) => ({ chatId, messageId: v }));
      return { deletedMessages, businessConnectionId: update.connection_id };
    }

    if (update instanceof types.UpdateChannelParticipant || update instanceof types.UpdateChatParticipant) {
      const chatMember = await constructChatMemberUpdated(update, this.#c.getEntity);
      const selfId = await this.#c.getSelfId();
      if (chatMember.oldChatMember.user.id == selfId) {
        return { myChatMember: chatMember };
      } else {
        return { chatMember };
      }
    }

    return null;
  }

  async sendChatAction(chatId: ID, action: ChatAction, params?: SendChatActionParams) {
    let action_: enums.SendMessageAction;
    switch (action) {
      case "type":
        action_ = new types.SendMessageTypingAction();
        break;
      case "uploadPhoto":
        action_ = new types.SendMessageUploadPhotoAction({ progress: 0 });
        break;
      case "recordVideo":
        action_ = new types.SendMessageRecordVideoAction();
        break;
      case "uploadVideo":
        action_ = new types.SendMessageRecordVideoAction();
        break;
      case "recordVoice":
        action_ = new types.SendMessageRecordAudioAction();
        break;
      case "uploadAudio":
        action_ = new types.SendMessageUploadAudioAction({ progress: 0 });
        break;
      case "uploadDocument":
        action_ = new types.SendMessageUploadDocumentAction({ progress: 0 });
        break;
      case "chooseSticker":
        action_ = new types.SendMessageChooseStickerAction();
        break;
      case "findLocation":
        action_ = new types.SendMessageGeoLocationAction();
        break;
      case "recordVideoNote":
        action_ = new types.SendMessageRecordRoundAction();
        break;
      case "uploadVideoNote":
        action_ = new types.SendMessageUploadRoundAction({ progress: 0 });
        break;
      default:
        throw new InputError(`Invalid chat action: ${action}`);
    }
    await this.#c.invoke(new functions.messages.setTyping({ peer: await this.#c.getInputPeer(chatId), action: action_, top_msg_id: params?.messageThreadId }), params?.businessConnectionId);
  }

  async deleteChatPhoto(chatId: number) {
    const peer = await this.#c.getInputPeer(chatId);
    if (!(peer instanceof types.InputPeerChannel) && !(peer instanceof types.InputPeerChat)) {
      unreachable();
    }

    if (peer instanceof types.InputPeerChannel) {
      await this.#c.api.channels.editPhoto({ channel: new types.InputChannel(peer), photo: new types.InputChatPhotoEmpty() });
    } else if (peer instanceof types.InputPeerChat) {
      await this.#c.api.messages.editChatPhoto({ chat_id: peer.chat_id, photo: new types.InputChatPhotoEmpty() });
    }
  }

  async setChatPhoto(chatId: number, photo: FileSource, params?: SetChatPhotoParams): Promise<void> {
    const peer = await this.#c.getInputPeer(chatId);
    if (!(peer instanceof types.InputPeerChannel) && !(peer instanceof types.InputPeerChat)) {
      unreachable();
    }

    const [contents, fileName] = await getFileContents(photo);
    const file = await this.#c.fileManager.upload(contents, { fileName: params?.fileName ?? fileName, chunkSize: params?.chunkSize, signal: params?.signal });
    const photo_ = new types.InputChatUploadedPhoto({ file });

    if (peer instanceof types.InputPeerChannel) {
      await this.#c.api.channels.editPhoto({ channel: new types.InputChannel(peer), photo: photo_ });
    } else if (peer instanceof types.InputPeerChat) {
      await this.#c.api.messages.editChatPhoto({ chat_id: peer.chat_id, photo: photo_ });
    }
  }

  async banChatMember(chatId: ID, memberId: ID, params?: BanChatMemberParams) {
    const chat = await this.#c.getInputPeer(chatId);
    if (!(chat instanceof types.InputPeerChannel) && !(chat instanceof types.InputPeerChat)) {
      throw new InputError("Expected a channel, supergroup, or group ID.");
    }
    const member = await this.#c.getInputPeer(memberId);
    if (chat instanceof types.InputPeerChannel) {
      if (params?.deleteMessages) {
        try {
          await this.deleteChatMemberMessages(chatId, memberId);
        } catch {
          //
        }
      }
      await this.#c.api.channels.editBanned({
        channel: new types.InputChannel(chat),
        participant: member,
        banned_rights: new types.ChatBannedRights({
          until_date: params?.untilDate ? toUnixTimestamp(params.untilDate) : 0, // todo
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
    } else if (chat instanceof types.InputPeerChat) {
      if (!(member instanceof types.InputPeerUser)) {
        throw new InputError(`Invalid user ID: ${memberId}`);
      }
      await this.#c.api.messages.deleteChatUser({
        chat_id: chat.chat_id,
        user_id: new types.InputUser(member),
        revoke_history: params?.deleteMessages ? true : undefined,
      });
    }
  }

  async unbanChatMember(chatId: ID, memberId: ID) {
    const channel = await this.#c.getInputChannel(chatId);
    const member = await this.#c.getInputPeer(memberId);
    await this.#c.api.channels.editBanned({
      channel,
      participant: member,
      banned_rights: new types.ChatBannedRights({ until_date: 0 }),
    });
  }

  async setChatMemberRights(chatId: ID, memberId: ID, params?: SetChatMemberRightsParams) {
    const channel = await this.#c.getInputChannel(chatId);
    const member = await this.#c.getInputPeer(memberId);
    await this.#c.api.channels.editBanned({
      channel,
      participant: member,
      banned_rights: chatMemberRightsToTlObject(params?.rights, params?.untilDate),
    });
  }

  async getChatAdministrators(chatId: ID) {
    const peer = await this.#c.getInputPeer(chatId);
    if (peer instanceof types.InputPeerChannel) {
      const channel = new types.InputChannel(peer);
      const participants = await this.#c.api.channels.getParticipants({
        channel,
        filter: new types.ChannelParticipantsAdmins(),
        offset: 0,
        limit: 100,
        hash: 0n,
      });
      if (participants instanceof types.channels.ChannelParticipantsNotModified) {
        unreachable();
      }
      const chatMembers = new Array<ChatMember>();
      for (const p of participants.participants) {
        chatMembers.push(await constructChatMember(p, this.#c.getEntity));
      }
      return chatMembers;
    } else if (peer instanceof types.InputPeerChat) {
      const fullChat = await this.#c.api.messages.getFullChat(peer); // TODO: full chat cache
      if (!(fullChat.full_chat instanceof types.ChatFull) || !(fullChat.full_chat.participants instanceof types.ChatParticipants)) {
        unreachable();
      }
      const chatMembers = new Array<ChatMember>();
      for (const p of fullChat.full_chat.participants.participants) {
        chatMembers.push(await constructChatMember(p, this.#c.getEntity));
      }
      return chatMembers;
    } else {
      unreachable();
    }
  }

  async #toggleJoinRequests(chatId: ID, enabled: boolean) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.api.channels.toggleJoinRequest({ channel, enabled });
  }
  async enableJoinRequests(chatId: ID) {
    await this.#c.storage.assertUser("enableJoinRequests");
    await this.#toggleJoinRequests(chatId, true);
  }
  async disableJoinRequests(chatId: ID) {
    await this.#c.storage.assertUser("disableJoinRequests");
    await this.#toggleJoinRequests(chatId, false);
  }

  async searchMessages(chatId: ID, query: string, params?: SearchMessagesParams) {
    const result = await this.#c.api.messages.search({
      peer: await this.#c.getInputPeer(chatId),
      q: query,
      add_offset: 0,
      filter: messageSearchFilterToTlObject(params?.filter ?? "empty"),
      hash: 0n,
      limit: params?.limit ?? 100,
      max_date: 0,
      max_id: 0,
      min_date: 0,
      min_id: 0,
      offset_id: params?.after ? params.after : 0,
      from_id: params?.from ? await this.#c.getInputPeer(params.from) : undefined,
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

  async setBoostsRequiredToCircumventRestrictions(chatId: ID, boosts: number) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.api.channels.setBoostsToUnblockRestrictions({ channel, boosts });
  }

  async createInviteLink(chatId: ID, params?: CreateInviteLinkParams) {
    if (params?.requireApproval && params?.limit) {
      throw new InputError("requireApproval cannot be true while limit is specified.");
    }
    const result = await this.#c.api.messages.exportChatInvite({
      peer: await this.#c.getInputPeer(chatId),
      title: params?.title,
      expire_date: params?.expireAt ? toUnixTimestamp(params.expireAt) : undefined,
      request_needed: params?.requireApproval ? true : undefined,
      usage_limit: params?.limit,
    });
    return await constructInviteLink(result[as](types.ChatInviteExported), this.#c.getEntity);
  }

  async getCreatedInviteLinks(chatId: ID, params?: GetCreatedInviteLinksParams) {
    await this.#c.storage.assertUser("getCreatedInviteLinks");
    const { invites } = await this.#c.api.messages.getExportedChatInvites({
      peer: await this.#c.getInputPeer(chatId),
      revoked: params?.revoked ? true : undefined,
      admin_id: params?.by ? await this.#c.getInputUser(params.by) : new types.InputUserEmpty(),
      limit: params?.limit ?? 100,
      offset_date: params?.afterDate ? toUnixTimestamp(params.afterDate) : undefined,
      offset_link: params?.afterInviteLink,
    });
    return await Promise.all(invites.map((v) => v[as](types.ChatInviteExported)).map((v) => constructInviteLink(v, this.#c.getEntity)));
  }

  async joinChat(chatId: ID) {
    await this.#c.storage.assertUser("joinChat");
    const peer = await this.#c.getInputPeer(chatId);
    if (peer instanceof types.InputPeerUser) {
      throw new InputError("Cannot join private chats.");
    } else if (peer instanceof types.InputPeerChannel) {
      await this.#c.api.channels.joinChannel({ channel: new types.InputChannel(peer) });
    } else if (peer instanceof types.InputPeerChat) {
      await this.#c.api.messages.addChatUser({ chat_id: peer.chat_id, user_id: new types.InputUserSelf(), fwd_limit: 0 }); // TODO: use potential high-level method for adding participants to chats
    } else {
      unreachable();
    }
  }

  async leaveChat(chatId: ID) {
    const peer = await this.#c.getInputPeer(chatId);
    if (peer instanceof types.InputPeerUser) {
      throw new InputError("Cannot leave private chats.");
    } else if (peer instanceof types.InputPeerChannel) {
      await this.#c.api.channels.leaveChannel({ channel: new types.InputChannel(peer) });
    } else if (peer instanceof types.InputPeerChat) {
      await this.#c.api.messages.deleteChatUser({ chat_id: peer.chat_id, user_id: new types.InputUserSelf() }); // TODO: use potential high-level method for adding participants to chats
    } else {
      unreachable();
    }
  }

  async blockUser(userId: ID) {
    await this.#c.storage.assertUser("blockUser");
    const id = await this.#c.getInputPeer(userId);
    if (!(id instanceof types.User)) {
      throw new InputError("Only users can be blocked or unblocked.");
    }
    await this.#c.api.contacts.block({ id });
  }

  async unblockUser(userId: ID) {
    await this.#c.storage.assertUser("unblockUser");
    const id = await this.#c.getInputPeer(userId);
    if (!(id instanceof types.User)) {
      throw new InputError("Only users can be blocked or unblocked.");
    }
    await this.#c.api.contacts.unblock({ id });
  }

  async getChatMember(chatId: ID, userId: ID) {
    const peer = await this.#c.getInputPeer(chatId);

    if (peer instanceof types.InputPeerChannel) {
      const { participant } = await this.#c.api.channels.getParticipant({
        channel: new types.InputChannel(peer),
        participant: await this.#c.getInputPeer(userId),
      });
      return await constructChatMember(participant, this.#c.getEntity);
    } else if (peer instanceof types.InputPeerChat) {
      const user = await this.#c.getInputUser(userId);
      const fullChat = await this.#c.api.messages.getFullChat(peer).then((v) => v.full_chat[as](types.ChatFull));
      const participant = fullChat.participants[as](types.ChatParticipants).participants.find((v) => v.user_id == user.user_id)!;
      return await constructChatMember(participant, this.#c.getEntity);
    } else {
      throw new InputError("Expected a channel, supergroup, or group ID. Got a user ID instead.");
    }
  }

  async setChatStickerSet(chatId: ID, setName: string) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.api.channels.setStickers({ channel, stickerset: new types.InputStickerSetShortName({ short_name: setName }) });
  }

  async deleteChatStickerSet(chatId: ID) {
    const channel = await this.#c.getInputChannel(chatId);
    await this.#c.api.channels.setStickers({ channel, stickerset: new types.InputStickerSetEmpty() });
  }

  async stopPoll(chatId: ID, messageId: number, params?: StopPollParams) {
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

    const result = await this.#c.api.messages.editMessage({
      peer: await this.#c.getInputPeer(chatId),
      id: messageId,
      media: new types.InputMediaPoll({
        poll: new types.Poll({
          id: BigInt(message.poll.id),
          closed: true,
          question: "",
          answers: [],
        }),
      }),
      reply_markup: await this.#constructReplyMarkup(params),
    });

    const message_ = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return assertMessageType(message_, "poll").poll;
  }

  async editMessageLiveLocation(chatId: ID, messageId: number, latitude: number, longitude: number, params?: EditMessageLiveLocationParams) {
    const message = await this.getMessage(chatId, messageId);
    if (message && "location" in message && message.location.livePeriod) {
      const result = await this.#c.api.messages.editMessage({
        peer: await this.#c.getInputPeer(chatId),
        id: messageId,
        media: new types.InputMediaGeoLive({
          geo_point: new types.InputGeoPoint({
            lat: latitude,
            long: longitude,
            accuracy_radius: params?.horizontalAccuracy,
          }),
          heading: params?.heading,
          proximity_notification_radius: params?.proximityAlertRadius,
        }),
        reply_markup: await this.#constructReplyMarkup(params),
      });

      const message = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
      return assertMessageType(message, "location");
    }
    unreachable();
  }

  async editInlineMessageLiveLocation(inlineMessageId: string, latitude: number, longitude: number, params?: EditMessageLiveLocationParams) {
    await this.#c.storage.assertBot("editInlineMessageLiveLocation");
    const id = deserializeInlineMessageId(inlineMessageId);
    await this.#c.api.messages.editInlineBotMessage({
      id,
      media: new types.InputMediaGeoLive({
        geo_point: new types.InputGeoPoint({
          lat: latitude,
          long: longitude,
          accuracy_radius: params?.horizontalAccuracy,
        }),
        heading: params?.heading,
        proximity_notification_radius: params?.proximityAlertRadius,
      }),
      reply_markup: await this.#constructReplyMarkup(params),
    });
  }
}
