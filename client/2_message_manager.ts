import { contentType, debug } from "../0_deps.ts";
import { getRandomId, toUnixTimestamp, UNREACHABLE } from "../1_utilities.ts";
import { as, enums, peerToChatId, types } from "../2_tl.ts";
import { assertMessageType, constructMessage as constructMessage_, FileID, FileSource, FileType, ID, Message, MessageEntity, messageEntityToTlObject, ParseMode, replyMarkupToTlObject, UsernameResolver } from "../3_types.ts";
import { STICKER_SET_NAME_TTL } from "../4_constants.ts";
import { parseHtml } from "./0_html.ts";
import { _SendCommon, DeleteMessagesParams, EditMessageParams, EditMessageReplyMarkupParams, ForwardMessagesParams, GetHistoryParams, PinMessageParams, SendAnimationParams, SendAudioParams, SendContactParams, SendDiceParams, SendDocumentParams, SendLocationParams, SendMessageParams, SendPhotoParams, SendPollParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams } from "./0_params.ts";
import { C as C_ } from "./0_types.ts";
import { getFileContents, isHttpUrl } from "./0_utilities.ts";
import { FileManager } from "./1_file_manager.ts";

const d = debug("MessageManager");

interface C extends C_ {
  fileManager: FileManager;
}

export class MessageManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async getMessages(chatId: ID, messageIds: number[]) {
    const peer = await this.#c.getInputPeer(chatId);
    let messages_ = new Array<enums.Message>();
    const chatId_ = peerToChatId(peer);
    let shouldFetch = false;
    for (const messageId of messageIds) {
      const message = await this.#c.storage.getMessage(chatId_, messageId);
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

  #parseText(text: string, params?: { parseMode?: ParseMode; entities?: MessageEntity[] }) {
    const entities_ = params?.entities ?? [];
    const parseMode = params?.parseMode ?? this.#c.parseMode;
    switch (parseMode) {
      case null:
        break;
      case "HTML": {
        const [newText, entitiesToPush] = parseHtml(text);
        text = newText;
        for (const entity of entitiesToPush) {
          entities_.push(entity);
        }
        break;
      }
      default:
        UNREACHABLE();
    }
    const entities = entities_?.length > 0 ? entities_.map((v) => messageEntityToTlObject(v)) : undefined;
    return [text, entities] as const;
  }

  async #updatesToMessages(chatId: ID, updates: enums.Updates) {
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

  async getStickerSetName(inputStickerSet: types.InputStickerSetID, hash = 0) {
    const maybeStickerSetName = await this.#c.storage.getStickerSetName(inputStickerSet.id, inputStickerSet.access_hash);
    if (maybeStickerSetName != null && Date.now() - maybeStickerSetName[1].getTime() < STICKER_SET_NAME_TTL) {
      return maybeStickerSetName[0];
    } else {
      const stickerSet = await this.#c.api.messages.getStickerSet({ stickerset: inputStickerSet, hash });
      const name = stickerSet[as](types.messages.StickerSet).set.short_name;
      await this.#c.storage.updateStickerSetName(inputStickerSet.id, inputStickerSet.access_hash, name);
      return name;
    }
  }

  async constructMessage(message_: enums.Message, r?: boolean) {
    return await constructMessage_(message_, this.#c.getEntity, this.getMessage.bind(this), this.getStickerSetName.bind(this), r);
  }

  async forwardMessages(from: ID, to: ID, messageIds: number[], params?: ForwardMessagesParams) {
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

  async getHistory(chatId: ID, params?: GetHistoryParams) {
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
    for (const message_ of await this.#c.storage.getHistory(peerToChatId(peer), offsetId, limit)) {
      const message = await this.constructMessage(message_, false);
      messages.push(message);
    }
    if (messages.length < limit) {
      d("have only %d messages but need %d more", messages.length, limit - messages.length);
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
        UNREACHABLE();
      }
      for (const message_ of result.messages) {
        const message = await this.constructMessage(message_, false);
        messages.push(message);
      }
    }
    return messages;
  }

  #usernameResolver: UsernameResolver = async (v) => {
    const inputPeer = await this.#c.getInputPeer(v).then((v) => v[as](types.InputPeerUser));
    return new types.InputUser(inputPeer);
  };

  async #constructReplyMarkup(params?: Pick<SendMessageParams, "replyMarkup">) {
    if (params?.replyMarkup) {
      await this.#c.storage.assertBot("replyMarkup");
      return replyMarkupToTlObject(params.replyMarkup, this.#usernameResolver.bind(this));
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
    const [message, entities] = this.#parseText(text, params);

    const replyMarkup = await this.#constructReplyMarkup(params);

    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const noWebpage = params?.disableWebPagePreview ? true : undefined;
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = await this.#resolveSendAs(params);

    const result = await this.#c.api.messages.sendMessage({
      peer,
      random_id: randomId,
      message,
      no_webpage: noWebpage,
      silent,
      noforwards,
      reply_to: this.#constructReplyTo(params),
      send_as: sendAs,
      entities,
      reply_markup: replyMarkup,
    });

    const message_ = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return assertMessageType(message_, "text");
  }

  #constructReplyTo(params?: _SendCommon) {
    const topMsgId = params?.messageThreadId;
    const replyToMsgId = params?.replyToMessageId;
    return replyToMsgId !== undefined ? new types.InputReplyToMessage({ reply_to_msg_id: replyToMsgId, top_msg_id: topMsgId, quote_text: params?.replyQuote?.text, quote_entities: params?.replyQuote?.entities.map(messageEntityToTlObject), quote_offset: params?.replyQuote?.offset }) : undefined;
  }

  async sendVenue(chatId: ID, latitude: number, longitude: number, title: string, address: string, params?: SendVenueParams) {
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const result = await this.#c.api.messages.sendMedia({
      peer,
      random_id: randomId,
      silent,
      noforwards,
      reply_to: this.#constructReplyTo(params),
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
    });

    const message = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return assertMessageType(message, "venue");
  }

  async sendContact(chatId: ID, firstName: string, number: string, params?: SendContactParams) {
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const result = await this.#c.api.messages.sendMedia({
      peer,
      random_id: randomId,
      silent,
      noforwards,
      reply_to: this.#constructReplyTo(params),
      send_as: sendAs,
      reply_markup: replyMarkup,
      media: new types.InputMediaContact({
        phone_number: number,
        first_name: firstName,
        last_name: params?.lastName ?? "",
        vcard: params?.vcard ?? "",
      }),
      message: "",
    });

    const message = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return assertMessageType(message, "contact");
  }

  async sendDice(chatId: ID, params?: SendDiceParams) {
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const result = await this.#c.api.messages.sendMedia({
      peer,
      random_id: randomId,
      silent,
      noforwards,
      reply_to: this.#constructReplyTo(params),
      send_as: sendAs,
      reply_markup: replyMarkup,
      media: new types.InputMediaDice({
        emoticon: params?.emoji ?? "🎲",
      }),
      message: "",
    });

    const message = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return assertMessageType(message, "dice");
  }

  async sendLocation(chatId: ID, latitude: number, longitude: number, params?: SendLocationParams) {
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const result = await this.#c.api.messages.sendMedia({
      peer,
      random_id: randomId,
      silent,
      noforwards,
      reply_to: this.#constructReplyTo(params),
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
    });

    const message = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
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
    const message = await this.#sendDocumentInner(chatId, voice, params, FileType.Voice, [
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

  async #sendDocumentInner(chatId: ID, document: FileSource, params: SendDocumentParams | undefined, fileType: FileType, otherAttribs: enums.DocumentAttribute[], urlSupported = false) {
    let media: enums.InputMedia | null = null;
    const spoiler = params?.hasSpoiler ? true : undefined;

    if (typeof document === "string") {
      const fileId = this.#resolveFileId(document, fileType);
      if (fileId != null) {
        media = new types.InputMediaDocument({
          id: new types.InputDocument(fileId),
          spoiler,
        });
      }
    }

    if (media == null) {
      if (typeof document === "string" && isHttpUrl(document)) {
        if (!urlSupported) {
          throw new Error("URL not supported");
        }
        media = new types.InputMediaDocumentExternal({ url: document, spoiler });
      } else {
        const [contents, fileName_] = await getFileContents(document);
        const fileName = params?.fileName ?? fileName_;
        const mimeType = params?.mimeType ?? contentType(fileName.split(".").slice(-1)[0]) ?? "application/octet-stream";
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

  async sendPhoto(chatId: ID, photo: FileSource, params?: SendPhotoParams) {
    let media: enums.InputMedia | null = null;
    const spoiler = params?.hasSpoiler ? true : undefined;

    if (typeof photo === "string") {
      const fileId = this.#resolveFileId(photo, FileType.Photo);
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
    const parseResult = caption_ !== undefined ? this.#parseText(caption_, { parseMode: params?.parseMode, entities: params?.captionEntities }) : undefined;

    const caption = parseResult === undefined ? undefined : parseResult[0];
    const captionEntities = parseResult === undefined ? undefined : parseResult[1];

    const result = await this.#c.api.messages.sendMedia({
      peer,
      random_id: randomId,
      silent,
      noforwards,
      reply_markup: replyMarkup,
      reply_to: this.#constructReplyTo(params),
      send_as: sendAs,
      media,
      message: caption ?? "",
      entities: captionEntities,
    });

    return await this.#updatesToMessages(chatId, result).then((v) => v[0]);
  }

  #resolveFileId(maybeFileId: string, expectedFileType: FileType) {
    let fileId: FileID | null = null;
    try {
      fileId = FileID.decode(maybeFileId);
    } catch (err) {
      d("fileId: %o", err);
    }
    if (fileId != null) {
      if (fileId.fileType != expectedFileType) {
        UNREACHABLE();
      }
      if (fileId.params.mediaId == undefined || fileId.params.accessHash == undefined || fileId.params.fileReference == undefined) {
        UNREACHABLE();
      }
      return {
        id: fileId.params.mediaId,
        access_hash: fileId.params.accessHash,
        file_reference: fileId.params.fileReference,
      };
    }
    return null;
  }

  async sendPoll(chatId: ID, question: string, options: [string, string, ...string[]], params?: SendPollParams) {
    const peer = await this.#c.getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await this.#c.getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await this.#constructReplyMarkup(params);

    const explanation = params?.explanation;
    const parseResult = explanation !== undefined ? this.#parseText(explanation, { parseMode: params?.explanationParseMode, entities: params?.explanationEntities }) : undefined;

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

    const result = await this.#c.api.messages.sendMedia({
      peer,
      random_id: randomId,
      silent,
      noforwards,
      reply_markup: replyMarkup,
      reply_to: this.#constructReplyTo(params),
      send_as: sendAs,
      media,
      message: "",
    });

    const message = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return assertMessageType(message, "poll");
  }

  async editMessageReplyMarkup(
    chatId: ID,
    messageId: number,
    params?: EditMessageReplyMarkupParams,
  ) {
    const result = await this.#c.api.messages.editMessage({
      id: messageId,
      peer: await this.#c.getInputPeer(chatId),
      reply_markup: await this.#constructReplyMarkup(params),
    });

    const message_ = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return message_;
  }

  async editMessageText(
    chatId: ID,
    messageId: number,
    text: string,
    params?: EditMessageParams,
  ) {
    const [message, entities] = this.#parseText(text, params);

    const result = await this.#c.api.messages.editMessage({
      id: messageId,
      peer: await this.#c.getInputPeer(chatId),
      entities,
      message,
      no_webpage: params?.disableWebPagePreview ? true : undefined,
      reply_markup: await this.#constructReplyMarkup(params),
    });

    const message_ = await this.#updatesToMessages(chatId, result).then((v) => v[0]);
    return assertMessageType(message_, "text");
  }

  async deleteMessages(chatId: ID, messageIds: number[], params?: DeleteMessagesParams) {
    const peer = await this.#c.getInputPeer(chatId);
    if (peer instanceof types.InputPeerChannel) {
      await this.#c.api.channels.deleteMessages({ channel: new types.InputChannel(peer), id: messageIds });
    } else {
      await this.#c.api.messages.deleteMessages({ id: messageIds, revoke: params?.onlyForMe ? undefined : true });
    }
  }

  async deleteChatMemberMessages(chatId: ID, memberId: ID) {
    const channel = await this.#c.getInputPeer(chatId);
    if (!(channel instanceof types.InputPeerChannel)) {
      throw new Error("Invalid chat ID");
    }
    const participant = await this.#c.getInputPeer(memberId);
    await this.#c.api.channels.deleteParticipantHistory({ channel: new types.InputChannel(channel), participant });
  }

  async pinMessage(chatId: ID, messageId: number, params?: PinMessageParams) {
    await this.#c.api.messages.updatePinnedMessage({
      peer: await this.#c.getInputPeer(chatId),
      id: messageId,
      silent: params?.disableNotification ? true : undefined,
      pm_oneside: params?.bothSides ? undefined : true,
    });
  }

  async unpinMessage(chatId: ID, messageId: number) {
    await this.#c.api.messages.updatePinnedMessage({
      peer: await this.#c.getInputPeer(chatId),
      id: messageId,
      unpin: true,
    });
  }

  async unpinMessages(chatId: ID) {
    await this.#c.api.messages.unpinAllMessages({ peer: await this.#c.getInputPeer(chatId) });
  }
}
