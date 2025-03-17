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

import { unreachable } from "../0_deps.ts";
import { cleanObject, fromUnixTimestamp, getLogger, MaybePromise, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { Api, as, is } from "../2_tl.ts";
import { FileId, FileType, toUniqueFileId } from "./_file_id.ts";
import { serializeFileId } from "./_file_id.ts";
import { EntityGetter } from "./_getters.ts";
import { constructContact, Contact } from "./0_contact.ts";
import { constructDice, Dice } from "./0_dice.ts";
import { constructInvoice, Invoice } from "./0_invoice.ts";
import { constructLinkPreview, LinkPreview } from "./0_link_preview.ts";
import { constructLocation, Location } from "./0_location.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";
import { constructRefundedPayment, RefundedPayment } from "./0_refunded_payment.ts";
import { constructVoice, Voice } from "./0_voice.ts";
import { Animation, constructAnimation } from "./1_animation.ts";
import { Audio, constructAudio } from "./1_audio.ts";
import { ChatP, constructChatP } from "./1_chat_p.ts";
import { constructDocument, Document } from "./1_document.ts";
import { constructGiveaway, Giveaway } from "./1_giveaway.ts";
import { constructMessageReaction, MessageReaction } from "./1_message_reaction.ts";
import { constructPhoto, Photo } from "./1_photo.ts";
import { constructReplyQuote, ReplyQuote } from "./1_reply_quote.ts";
import { constructSticker, Sticker, StickerSetNameGetter } from "./1_sticker.ts";
import { constructUser, User } from "./1_user.ts";
import { constructVenue, Venue } from "./1_venue.ts";
import { constructVideoNote, VideoNote } from "./1_video_note.ts";
import { constructVideo, Video } from "./1_video.ts";
import { constructForwardHeader, ForwardHeader } from "./2_forward_header.ts";
import { constructGame, Game } from "./2_game.ts";
import { constructPoll, Poll } from "./2_poll.ts";
import { constructSuccessfulPayment, SuccessfulPayment } from "./2_successful_payment.ts";
import { constructReplyMarkup, ReplyMarkup } from "./3_reply_markup.ts";

const L = getLogger("Message");

/**
 * Properties shared between all message types.
 * @unlisted
 */
export interface _MessageBase {
  /** Whether the message is outgoing (sent by the current user). */
  out: boolean;
  /** The identifier of the message. */
  id: number;
  /** The identifier of the message's thread. */
  threadId?: number;
  /** The user who sent the message. */
  from?: User;
  /** The chat which the message was sent on behalf of. */
  senderChat?: ChatP;
  /** The point in time in which the message was sent. */
  date: Date;
  /** The chat where the message was sent to. */
  chat: ChatP;
  /** A link to the message. */
  link?: string;
  /** Information on the original message. */
  forwardFrom?: ForwardHeader;
  /** Whether the message was sent in a topic thread. */
  isTopicMessage: boolean;
  /** Whether the message is an automatic forward. */
  isAutomaticForward?: boolean;
  /** The message that is being replied to. Not always available even if a message is being replied to. */
  replyToMessage?: Message;
  /** The identifier of the message that is being replied to. */
  replyToMessageId?: number;
  /** The reactions of the message. */
  reactions?: MessageReaction[];
  /** The part of the message that is being replied to. */
  replyQuote?: ReplyQuote;
  /** The inline bot that was used to send this message. */
  viaBot?: User;
  /** The point in time in which the message's last edit was made. */
  editDate?: Date;
  /** Whether the contents of the message is protected. */
  hasProtectedContent?: boolean;
  /** The identifier of the message's media group. */
  mediaGroupId?: string;
  /** The signature of the message. */
  authorSignature?: string;
  /** The number of times the message was viewed. */
  views?: number;
  /** The number of times the message was forwarded. */
  forwards?: number;
  /** The message's reply markup. */
  replyMarkup?: ReplyMarkup;
  /** The identifier of a business conection that the message was sent in. */
  businessConnectionId?: string;
  /** The number of the boosts made by the sender of the message. */
  senderBoostCount?: number;
  /** The identifier of the business connection in which the message was sent.*/
  viaBusinessBot?: User;
  /** The identifier of the message effect that has been attached to the message. */
  effectId?: string;
  /** Whether the message is scheduled. */
  scheduled?: boolean;
}

/**
 * Properties shared between media message types.
 * @unlisted
 */
export interface _MessageMediaBase extends _MessageBase {
  caption?: string;
  captionEntities?: MessageEntity[];
  hasMediaSpoiler?: boolean;
}

// begin message types

/**
 * A text message.
 * @unlisted
 */
export interface MessageText extends _MessageBase {
  /**
   * The text included in the message
   * @discriminator
   */
  text: string;
  /**
   * Entities of the text
   * @discriminator
   */
  entities: MessageEntity[];
  /** The message's link preview. */
  linkPreview?: LinkPreview;
}

/**
 * A message with a link preview only.
 * @unlisted
 */
export interface MessageLink extends _MessageBase {
  /** @discriminator */
  linkPreview: LinkPreview & { url: NonNullable<LinkPreview["url"]> };
}

/** @unlisted */
export interface MessagePhoto extends _MessageMediaBase {
  /** The photo included in the message
   * @discriminator
   */
  photo: Photo;
}

/**
 * A document message.
 * @unlisted
 */
export interface MessageDocument extends _MessageMediaBase {
  /**
   * The document included in the message
   * @discriminator
   */
  document: Document;
}

/**
 * A video message.
 * @unlisted
 */
export interface MessageVideo extends _MessageMediaBase {
  /**
   * The video included in the message
   * @discriminator
   */
  video: Video;
}

/**
 * A sticker message.
 * @unlisted
 */
export interface MessageSticker extends _MessageBase {
  /**
   * The sticker included in the message
   * @discriminator
   */
  sticker: Sticker;
}

/**
 * An animation message. Animations are GIFs or H.264/MPEG-4 AVC videos without sound.
 * @unlisted
 */
export interface MessageAnimation extends _MessageMediaBase {
  /**
   * The animation included in the message
   * @discriminator
   */
  animation: Animation;
}

/**
 * A voice message.
 * @unlisted
 */
export interface MessageVoice extends _MessageMediaBase {
  /**
   * The voice included in the message
   * @discriminator
   */
  voice: Voice;
}

/**
 * An audio message.
 * @unlisted
 */
export interface MessageAudio extends _MessageMediaBase {
  /**
   * The audio included in the message
   * @discriminator
   */
  audio: Audio;
}

/**
 * A dice message.
 * @unlisted
 */
export interface MessageDice extends _MessageBase {
  /**
   * The dice included in the message
   * @discriminator
   */
  dice: Dice;
}

/**
 * A video note message.
 * @unlisted
 */
export interface MessageVideoNote extends _MessageBase {
  /**
   * The video note included in the message
   * @discriminator
   */
  videoNote: VideoNote;
}

/**
 * A contact message.
 * @unlisted
 */
export interface MessageContact extends _MessageBase {
  /**
   * The contact included in the message
   * @discriminator
   */
  contact: Contact;
}

/**
 * A game message.
 * @unlisted
 */
export interface MessageGame extends _MessageBase {
  /**
   * The game included in the message
   * @discriminator
   */
  game: Game;
}

/**
 * A poll message.
 * @unlisted
 */
export interface MessagePoll extends _MessageBase {
  /**
   * The poll included in the message
   * @discriminator
   */
  poll: Poll;
}

/**
 * An invoice message.
 * @unlisted
 */
export interface MessageInvoice extends _MessageBase {
  /**
   * The invoice included in the message
   * @discriminator
   */
  invoice: Invoice;
}

/**
 * A venue message.
 * @unlisted
 */
export interface MessageVenue extends _MessageBase {
  /**
   * The venue included in the message
   * @discriminator
   */
  venue: Venue;
}

/**
 * A location message.
 * @unlisted
 */
export interface MessageLocation extends _MessageBase {
  /**
   * The location included in the message
   * @discriminator
   */
  location: Location;
}

/**
 * A message that is received when new members join a chat.
 * @unlisted
 */
export interface MessageNewChatMembers extends _MessageBase {
  /**
   * The new members of the chat
   * @discriminator
   */
  newChatMembers: User[];
}

/**
 * A message that is received when a member leaves a chat.
 * @unlisted
 */
export interface MessageLeftChatMember extends _MessageBase {
  /**
   * The member who left the chat
   * @discriminator
   */
  leftChatMember: User;
}

/**
 * A message that is received when a chat's title is changed.
 * @unlisted
 */
export interface MessageNewChatTitle extends _MessageBase {
  /**
   * The new title of the chat
   * @discriminator
   */
  newChatTitle: string;
}

/**
 * A message that is received when a chat's photo is changed.
 * @unlisted
 */
export interface MessageNewChatPhoto extends _MessageBase {
  /**
   * The new photo of the chat
   * @discriminator
   */
  newChatPhoto: Photo;
}

/**
 * A message that is received when a chat's photo is removed.
 * @unlisted
 */
export interface MessageDeletedChatPhoto extends _MessageBase {
  /** @discriminator */
  deletedChatPhoto: true;
}

/**
 * A message that is received by user accounts when a group is created.
 * While bots don't receive them, they are able to see them if someone replies to them.
 * @unlisted
 */
export interface MessageGroupCreated extends _MessageBase {
  /** @discriminator */
  groupCreated: true;
  /**
   * The initial members of the group.
   * @discriminator
   */
  newChatMembers: User[];
}

/**
 * A message that is received by user accounts when a supergroup is created.
 * While bots don't receive them, they are able to see them if someone replies to them.
 * @unlisted
 */
export interface MessageSupergroupCreated extends _MessageBase {
  /** @discriminator */
  supergroupCreated: true;
}

/**
 * A message that is received by user accounts when a channel is created.
 * While bots don't receive them, they are able to see them if someone replies to them.
 * @unlisted
 */
export interface MessageChannelCreated extends _MessageBase {
  /** @discriminator */
  channelCreated: true;
}

/**
 * A message that is received when a chat's auto-delete timer is changed.
 * @unlisted
 */
export interface MessageAutoDeleteTimerChanged extends _MessageBase {
  /**
   * The new auto-delete time in seconds
   * @discriminator
   */
  newAutoDeleteTime: number;
}

/**
 * A message that is received when a supergroup is created as a result of a group migration.
 * @unlisted
 */
export interface MessageChatMigratedTo extends _MessageBase {
  /**
   * The supergroup's ID
   * @discriminator
   */
  chatMigratedTo: number;
}

/**
 * A message that is received when a group is migrated to a supergroup.
 * @unlisted
 */
export interface MessageChatMigratedFrom extends _MessageBase {
  /**
   * The group's ID
   * @discriminator
   */
  chatMigratedFrom: number;
}

/**
 * A message that is received when a message is pinned in a chat.
 * @unlisted
 */
export interface MessagePinnedMessage extends _MessageBase {
  /**
   * The message that was pinned
   * @discriminator
   */
  pinnedMessage: Message;
}

/**
 * A message that is received when a bot account receives a shared user.
 * @unlisted
 */
export interface MessageUserShared extends _MessageBase {
  /** @discriminator */
  userShared: { requestId: number; userId: number };
}

/**
 * A message that is received when a bot is allowed to message a user.
 * @unlisted
 */
export interface MessageWriteAccessAllowed extends _MessageBase {
  /** @discriminator */
  writeAccessAllowed: { miniAppName?: string };
}

/**
 * A message that is received when a new topic is created in a forum.
 * @unlisted
 */
export interface MessageForumTopicCreated extends _MessageBase {
  /** @discriminator */
  forumTopicCreated: { name: string; color: number; customEmojiId?: string };
}

/**
 * A message that is received when a topic is edited in a forum.
 * @unlisted
 */
export interface MessageForumTopicEdited extends _MessageBase {
  /** @discriminator */
  forumTopicEdited: { name: string; customEmojiId?: string };
}

/**
 * A message that is received when a topic is closed in a forum.
 * @unlisted
 */
export interface MessageForumTopicClosed extends _MessageBase {
  /** @discriminator */
  forumTopicClosed: true;
}

/**
 * A message that is received when a topic is reopened in a forum.
 * @unlisted
 */
export interface MessageForumTopicReopened extends _MessageBase {
  /** @discriminator */
  forumTopicReopened: true;
}

/**
 * A message that is received when a video chat is scheduled in a chat.
 * @unlisted
 */
export interface MessageVideoChatScheduled extends _MessageBase {
  /** @discriminator */
  videoChatScheduled: { startDate: Date };
}

/**
 * A message that is received when a video chat is started in a chat.
 * @unlisted
 */
export interface MessageVideoChatStarted extends _MessageBase {
  /** @discriminator */
  videoChatStarted: true;
}

/**
 * A message that is received when a video chat is ended in a chat.
 * @unlisted
 */
export interface MessageVideoChatEnded extends _MessageBase {
  /** @discriminator */
  videoChatEnded: { duration: number };
}

/**
 * A message that is received when a giveaway is started in a chat.
 * @unlisted
 */
export interface MessageGiveaway extends _MessageBase {
  /** @discriminator */
  giveaway: Giveaway;
}

/**
 * An unsupported message.
 * @unlisted
 */
export interface MessageUnsupported extends _MessageBase {
  /** @discriminator */
  unsupported: true;
}

/**
 * A payment was successfully received. Bot-only.
 * @unlisted
 */
export interface MessageSuccessfulPayment extends _MessageBase {
  /** @discriminator */
  successfulPayment: SuccessfulPayment;
}

/**
 * A payment was successfully refunded. Bot-only.
 * @unlisted
 */
export interface MessageRefundedPayment extends _MessageBase {
  /** @discriminator */
  refundedPayment: RefundedPayment;
}

// message type map

/** @unlisted */
export interface MessageTypes {
  text: MessageText;
  link: MessageLink;
  photo: MessagePhoto;
  document: MessageDocument;
  video: MessageVideo;
  sticker: MessageSticker;
  animation: MessageAnimation;
  voice: MessageVoice;
  audio: MessageAudio;
  dice: MessageDice;
  videoNote: MessageVideoNote;
  contact: MessageContact;
  game: MessageGame;
  poll: MessagePoll;
  invoice: MessageInvoice;
  venue: MessageVenue;
  location: MessageLocation;
  newChatMembers: MessageNewChatMembers;
  leftChatMember: MessageLeftChatMember;
  newChatTitle: MessageNewChatTitle;
  newChatPhoto: MessageNewChatPhoto;
  deletedChatPhoto: MessageDeletedChatPhoto;
  groupCreated: MessageGroupCreated;
  supergroupCreated: MessageSupergroupCreated;
  channelCreated: MessageChannelCreated;
  newAutoDeleteTime: MessageAutoDeleteTimerChanged;
  chatMigratedTo: MessageChatMigratedTo;
  chatMigratedFrom: MessageChatMigratedFrom;
  pinnedMessage: MessagePinnedMessage;
  userShared: MessageUserShared;
  writeAccessAllowed: MessageWriteAccessAllowed;
  forumTopicCreated: MessageForumTopicCreated;
  forumTopicEdited: MessageForumTopicEdited;
  forumTopicClosed: MessageForumTopicClosed;
  forumTopicReopened: MessageForumTopicReopened;
  videoChatScheduled: MessageVideoChatScheduled;
  videoChatStarted: MessageVideoChatStarted;
  videoChatEnded: MessageVideoChatEnded;
  giveaway: MessageGiveaway;
  unsupported: MessageUnsupported;
  successfulPayment: MessageSuccessfulPayment;
  refundedPayment: MessageRefundedPayment;
}

const keys: Record<keyof MessageTypes, [string, ...string[]]> = {
  text: ["text"],
  link: ["linkPreview"],
  photo: ["photo"],
  document: ["document"],
  video: ["video"],
  sticker: ["sticker"],
  animation: ["animation"],
  voice: ["voice"],
  audio: ["audio"],
  dice: ["dice"],
  videoNote: ["videoNote"],
  contact: ["contact"],
  game: ["game"],
  poll: ["poll"],
  invoice: ["invoice"],
  venue: ["venue"],
  location: ["location"],
  newChatMembers: ["newChatMembers"],
  leftChatMember: ["leftChatMember"],
  newChatTitle: ["newChatTitle"],
  newChatPhoto: ["newChatPhoto"],
  deletedChatPhoto: ["deletedChatPhoto"],
  groupCreated: ["groupCreated", "newChatMembers"],
  supergroupCreated: ["supergroupCreated"],
  channelCreated: ["channelCreated"],
  newAutoDeleteTime: ["newAutoDeleteTime"],
  chatMigratedTo: ["chatMigratedTo"],
  chatMigratedFrom: ["chatMigratedFrom"],
  pinnedMessage: ["pinnedMessage"],
  userShared: ["userShared"],
  writeAccessAllowed: ["writeAccessAllowed"],
  forumTopicCreated: ["forumTopicCreated"],
  forumTopicEdited: ["forumTopicEdited"],
  forumTopicClosed: ["forumTopicClosed"],
  forumTopicReopened: ["forumTopicReopened"],
  videoChatScheduled: ["videoChatScheduled"],
  videoChatStarted: ["videoChatStarted"],
  videoChatEnded: ["videoChatEnded"],
  giveaway: ["giveaway"],
  unsupported: ["unsupported"],
  successfulPayment: ["successfulPayment"],
  refundedPayment: ["refundedPayment"],
};
export function isMessageType<T extends keyof MessageTypes>(message: Message, type: T): message is MessageTypes[T] {
  for (const key of keys[type]) {
    if (!(key in message) || message[key as keyof typeof message] === undefined) {
      return false;
    }
  }
  return true;
}
export function assertMessageType<T extends keyof MessageTypes>(message: Message, type: T): MessageTypes[T] {
  if (!isMessageType(message, type)) {
    unreachable();
  }
  return message;
}

/** Any type of message. */
export type Message =
  | MessageText
  | MessageLink
  | MessagePhoto
  | MessageDocument
  | MessageVideo
  | MessageSticker
  | MessageAnimation
  | MessageVoice
  | MessageAudio
  | MessageDice
  | MessageVideoNote
  | MessageContact
  | MessageGame
  | MessagePoll
  | MessageInvoice
  | MessageVenue
  | MessageLocation
  | MessageNewChatMembers
  | MessageLeftChatMember
  | MessageNewChatTitle
  | MessageNewChatPhoto
  | MessageDeletedChatPhoto
  | MessageGroupCreated
  | MessageSupergroupCreated
  | MessageChannelCreated
  | MessageAutoDeleteTimerChanged
  | MessageChatMigratedTo
  | MessageChatMigratedFrom
  | MessagePinnedMessage
  | MessageUserShared
  | MessageWriteAccessAllowed
  | MessageForumTopicCreated
  | MessageForumTopicEdited
  | MessageForumTopicClosed
  | MessageForumTopicReopened
  | MessageVideoChatScheduled
  | MessageVideoChatStarted
  | MessageVideoChatEnded
  | MessageGiveaway
  | MessageUnsupported
  | MessageSuccessfulPayment
  | MessageRefundedPayment;

/** @unlisted */
export interface MessageGetter {
  (chatId: number, messageId: number): MaybePromise<Message | null>;
}

type Message_MessageGetter = MessageGetter | null;

async function getSender(message_: Api.message | Api.messageService, getEntity: EntityGetter) {
  if (is("peerUser", message_.from_id)) {
    const entity = await getEntity(message_.from_id);
    if (entity) {
      return { from: constructUser(entity) };
    } else {
      unreachable();
    }
  } else if (is("peerChannel", message_.from_id)) {
    const entity = await getEntity(message_.from_id);
    if (entity) {
      return { senderChat: constructChatP(entity) };
    } else {
      unreachable();
    }
  } else if (is("peerUser", message_.peer_id)) {
    const entity = await getEntity(message_.peer_id);
    if (entity) {
      return { from: constructUser(entity) };
    } else {
      unreachable();
    }
  }
}

async function getReply(message_: Api.message | Api.messageService, chat: ChatP, getMessage: Message_MessageGetter) {
  if (getMessage && is("messageReplyHeader", message_.reply_to) && message_.reply_to.reply_to_msg_id) {
    let isTopicMessage = false;
    if (message_.reply_to.forum_topic) {
      isTopicMessage = true;
    }
    const replyToMessage = await getMessage(chat.id, message_.reply_to.reply_to_msg_id);
    if (replyToMessage) {
      return { replyToMessage, threadId: message_.reply_to.reply_to_top_id, isTopicMessage };
    } else {
      L.warning("couldn't get replied message");
    }
  }

  return { replyToMessage: undefined, threadId: undefined, isTopicMessage: false };
}

async function constructServiceMessage(message_: Api.messageService, chat: ChatP, getEntity: EntityGetter, getMessage: Message_MessageGetter, getReply_: boolean): Promise<Message> {
  const message: _MessageBase = {
    out: message_.out ?? false,
    id: message_.id,
    chat,
    date: fromUnixTimestamp(message_.date),
    isTopicMessage: message_.reply_to && is("messageReplyHeader", message_.reply_to) && message_.reply_to.forum_topic ? true : false,
  };

  if (is("messageReplyHeader", message_.reply_to) && message_.reply_to.reply_to_msg_id) {
    message.replyToMessageId = message_.reply_to.reply_to_top_id;
    message.replyToMessageId = message_.reply_to.reply_to_msg_id;
  }
  if (getReply_) {
    Object.assign(message, await getReply(message_, chat, getMessage));
  }

  Object.assign(message, await getSender(message_, getEntity));

  if (is("messageActionChatAddUser", message_.action) || is("messageActionChatJoinedByLink", message_.action) || is("messageActionChatJoinedByRequest", message_.action)) {
    const newChatMembers = new Array<User>();
    const users = "users" in message_.action ? message_.action.users : [message_.from_id && "user_id" in message_.from_id ? message_.from_id.user_id : unreachable()];
    for (const user_ of users) {
      const entity = await getEntity({ _: "peerUser", user_id: user_ });
      if (entity) {
        const user = constructUser(entity);
        newChatMembers.push(user);
      } else {
        unreachable();
      }
    }
    return { ...message, newChatMembers };
  } else if (is("messageActionChatDeleteUser", message_.action)) {
    const entity = await getEntity({ _: "peerUser", user_id: message_.action.user_id });
    if (entity) {
      const user = constructUser(entity);
      const leftChatMember = user;
      return { ...message, leftChatMember };
    }
  } else if (is("messageActionChatEditTitle", message_.action)) {
    const newChatTitle = message_.action.title;
    return { ...message, newChatTitle };
  } else if (is("messageActionChatEditPhoto", message_.action)) {
    const newChatPhoto = constructPhoto(as("photo", message_.action.photo));
    return { ...message, newChatPhoto };
  } else if (is("messageActionChatDeletePhoto", message_.action)) {
    const deletedChatPhoto = true;
    return { ...message, deletedChatPhoto };
  } else if (is("messageActionChatCreate", message_.action)) {
    const groupCreated = true;
    const newChatMembers = new Array<User>();
    for (const user_ of message_.action.users) {
      const entity = await getEntity({ _: "peerUser", user_id: user_ });
      if (entity) {
        const user = constructUser(entity);
        newChatMembers.push(user);
      }
    }
    return { ...message, groupCreated, newChatMembers };
  } else if (is("messageActionChannelCreate", message_.action)) {
    if (message.chat.type == "channel") {
      const channelCreated = true;
      return { ...message, channelCreated };
    } else if (message.chat.type == "supergroup") {
      const supergroupCreated = true;
      return { ...message, supergroupCreated };
    } else {
      // unreachable();
    }
  } else if (is("messageActionChatMigrateTo", message_.action)) {
    const chatMigratedTo = ZERO_CHANNEL_ID + Number(-message_.action.channel_id);
    return { ...message, chatMigratedTo };
  } else if (is("messageActionChannelMigrateFrom", message_.action)) {
    const chatMigratedFrom = Number(-message_.action.chat_id);
    return { ...message, chatMigratedFrom };
  } else if (is("messageActionPinMessage", message_.action)) {
    const { replyToMessage } = await getReply(message_, chat, getMessage);
    if (replyToMessage) {
      const pinnedMessage = replyToMessage;
      return { ...message, pinnedMessage };
    }
  } else if (is("messageActionRequestedPeer", message_.action)) {
    const user = as("peerUser", message_.action.peers[0]);
    const userShared = { requestId: message_.action.button_id, userId: Number(user.user_id) };
    return { ...message, userShared };
  } else if (is("messageActionBotAllowed", message_.action)) {
    const miniAppName = message_.action.app ? as("botApp", message_.action.app).title : undefined;
    const writeAccessAllowed = { miniAppName };
    return { ...message, writeAccessAllowed };
  } else if (is("messageActionTopicCreate", message_.action)) {
    const forumTopicCreated = {
      name: message_.action.title,
      color: message_.action.icon_color,
      cutsomEmojiId: message_.action.icon_emoji_id ? String(message_.action.icon_emoji_id) : undefined,
    };
    return { ...message, forumTopicCreated };
  } else if (is("messageActionTopicEdit", message_.action)) {
    if (message_.action.closed) {
      const forumTopicClosed = true;
      return { ...message, forumTopicClosed };
    } else if (message_.action.title || message_.action.icon_emoji_id) {
      const forumTopicEdited = {
        name: message_.action.title ?? "",
        customEmojiId: message_.action.icon_emoji_id ? String(message_.action.icon_emoji_id) : undefined,
      };
      return { ...message, forumTopicEdited };
    } else {
      const forumTopicReopened = true;
      return { ...message, forumTopicReopened };
    }
  } else if (is("messageActionGroupCallScheduled", message_.action)) {
    const videoChatScheduled = { startDate: new Date(message_.action.schedule_date * 1000) };
    return { ...message, videoChatScheduled };
  } else if (is("messageActionGroupCall", message_.action)) {
    if (message_.action.duration) {
      const videoChatEnded = { duration: message_.action.duration };

      return { ...message, videoChatEnded };
    } else {
      const videoChatStarted = true;
      return { ...message, videoChatStarted };
    }
  } else if (is("messageActionSetMessagesTTL", message_.action)) {
    const newAutoDeleteTime = message_.action.period || 0;
    return { ...message, newAutoDeleteTime };
  } else if (is("messageActionPaymentSentMe", message_.action)) {
    const successfulPayment = constructSuccessfulPayment(message_.action);
    return { ...message, successfulPayment };
  } else if (is("messageActionPaymentRefunded", message_.action)) {
    const refundedPayment = constructRefundedPayment(message_.action);
    return { ...message, refundedPayment };
  }
  return { ...message, unsupported: true };
}

export async function constructMessage(
  message_: Api.Message,
  getEntity: EntityGetter,
  getMessage: Message_MessageGetter,
  getStickerSetName: StickerSetNameGetter,
  getReply_ = true,
  business?: { connectionId: string; replyToMessage?: Api.Message },
  poll?: Api.poll,
  pollResults?: Api.pollResults,
): Promise<Message> {
  if (!(is("message", message_)) && !(is("messageService", message_))) {
    unreachable();
  }

  let link: string | undefined;
  let chat_: ChatP | null = null;
  if (is("peerUser", message_.peer_id)) {
    const entity = await getEntity(message_.peer_id);
    if (entity) {
      chat_ = constructChatP(entity);
    } else {
      unreachable();
    }
  } else if (is("peerChat", message_.peer_id)) {
    const entity = await getEntity(message_.peer_id);
    if (entity) {
      chat_ = constructChatP(entity);
    } else {
      unreachable();
    }
  } else if (is("peerChannel", message_.peer_id)) {
    const reply_to_top_id = message_.reply_to && is("messageReplyHeader", message_.reply_to) && message_.reply_to.reply_to_top_id;
    const threadId = reply_to_top_id && typeof reply_to_top_id === "number" ? reply_to_top_id + "/" : "";
    link = `https://t.me/c/${message_.peer_id.channel_id}/${threadId}${message_.id}`;
    const entity = await getEntity(message_.peer_id);
    if (entity) {
      chat_ = constructChatP(entity);
      if (chat_.username) {
        link = link.replace(`/c/${message_.peer_id.channel_id}/`, `/${chat_.username}/`);
      }
    } else {
      unreachable();
    }
  } else {
    unreachable();
  }

  if (is("messageService", message_)) {
    return await constructServiceMessage(message_, chat_, getEntity, getMessage, getReply_);
  }

  const message: _MessageBase = {
    out: message_.out ?? false,
    id: message_.id,
    chat: chat_,
    link,
    date: fromUnixTimestamp(message_.date),
    views: message_.views,
    forwards: message_.forwards,
    isTopicMessage: message_.reply_to && is("messageReplyHeader", message_.reply_to) && message_.reply_to.forum_topic ? true : false,
    hasProtectedContent: message_.noforwards || false,
    senderBoostCount: message_.from_boosts_applied,
    effectId: message_.effect ? String(message_.effect) : undefined,
    scheduled: message_.from_scheduled ? true : undefined,
  };

  if (message_.reactions) {
    const recentReactions = message_.reactions.recent_reactions ?? [];
    message.reactions = message_.reactions.results.map((v) => constructMessageReaction(v, recentReactions));
  }

  if (is("messageReplyHeader", message_.reply_to) && message_.reply_to.reply_to_msg_id) {
    if (message_.reply_to.quote) {
      message.replyQuote = constructReplyQuote(message_.reply_to.quote_text, message_.reply_to.quote_offset, message_.reply_to.quote_entities);
    }
    message.threadId = message_.reply_to.reply_to_top_id;
    message.replyToMessageId = message_.reply_to.reply_to_msg_id;
  }
  if (business) {
    message.businessConnectionId = business.connectionId;
    if (business.replyToMessage) {
      message.replyToMessageId = business.replyToMessage.id;
      message.replyToMessage = await constructMessage(business.replyToMessage, getEntity, getMessage, getStickerSetName, false, { connectionId: business.connectionId });
    }
  } else if (getReply_) {
    Object.assign(message, await getReply(message_, chat_, getMessage));
  }
  Object.assign(message, await getSender(message_, getEntity));

  if (message_.reply_markup) {
    message.replyMarkup = constructReplyMarkup(message_.reply_markup);
  }

  if (message_.via_bot_id != undefined) {
    const viaBot = await getEntity({ _: "peerUser", user_id: message_.via_bot_id });
    if (viaBot) {
      message.viaBot = constructUser(viaBot);
    } else {
      unreachable();
    }
  }
  if (message_.via_business_bot_id != undefined) {
    const viaBusinessBot = await getEntity({ _: "peerUser", user_id: message_.via_business_bot_id });
    if (viaBusinessBot) {
      message.viaBusinessBot = constructUser(viaBusinessBot);
    } else {
      unreachable();
    }
  }

  if (message_.post_author != undefined) {
    message.authorSignature = message_.post_author;
  }

  if (is("messageFwdHeader", message_.fwd_from)) {
    message.isAutomaticForward = message_.fwd_from.saved_from_peer != undefined && message_.fwd_from.saved_from_msg_id != undefined;
    message.forwardFrom = await constructForwardHeader(message_.fwd_from, getEntity);
  }

  if (message_.grouped_id != undefined) {
    message.mediaGroupId = String(message_.grouped_id);
  }

  if (message_.edit_date != undefined) {
    message.editDate = fromUnixTimestamp(message_.edit_date);
  }

  const messageText = {
    ...message,
    text: message_.message,
    entities: message_.entities?.map(constructMessageEntity).filter((v): v is NonNullable<typeof v> => !!v) ?? [],
  };

  if (message_.message && message_.media === undefined) {
    return cleanObject(messageText);
  }

  const messageMedia: _MessageMediaBase = {
    ...message,
    caption: message_.message,
    captionEntities: message_.entities?.map(constructMessageEntity).filter((v): v is NonNullable<typeof v> => !!v) ?? [],
  };

  if (is("messageMediaPhoto", message_.media) || is("messageMediaDocument", message_.media)) {
    messageMedia.hasMediaSpoiler = message_.media.spoiler || false;
  }

  let m: Message | null = null;

  if (is("messageMediaPhoto", message_.media)) {
    if (!message_.media.photo) {
      unreachable();
    }
    const photo = constructPhoto(as("photo", message_.media.photo));
    m = { ...messageMedia, photo };
  } else if (is("messageMediaDice", message_.media)) {
    const dice = constructDice(message_.media);
    m = { ...message, dice };
  } else if (is("messageMediaDocument", message_.media)) {
    const { document } = message_.media;
    if (is("document", document)) {
      const getFileId = (type: FileType): FileId => (
        {
          type,
          dcId: document.dc_id,
          fileReference: document.file_reference,
          location: { type: "common", id: document.id, accessHash: document.access_hash },
        }
      );

      const animated = document.attributes.find((v): v is Api.documentAttributeAnimated => is("documentAttributeAnimated", v));
      const audio = document.attributes.find((v): v is Api.documentAttributeAudio => is("documentAttributeAudio", v));
      const fileName = document.attributes.find((v): v is Api.documentAttributeFilename => is("documentAttributeFilename", v));
      const sticker = document.attributes.find((v): v is Api.documentAttributeSticker => is("documentAttributeSticker", v));
      const video = document.attributes.find((v): v is Api.documentAttributeVideo => is("documentAttributeVideo", v));

      if (animated) {
        const fileId = getFileId(FileType.Animation);
        const animation = constructAnimation(document, video, fileName, serializeFileId(fileId), toUniqueFileId(fileId));
        m = { ...messageMedia, animation };
      } else if (video) {
        if (video.round_message) {
          const fileId = getFileId(FileType.VideoNote);
          const videoNote = constructVideoNote(document, video, serializeFileId(fileId), toUniqueFileId(fileId));
          m = { ...message, videoNote };
        } else {
          const fileId = getFileId(FileType.Video);
          const video_ = constructVideo(document, video, fileName?.file_name, serializeFileId(fileId), toUniqueFileId(fileId));
          m = { ...messageMedia, video: video_ };
        }
      } else if (audio) {
        if (audio.voice) {
          const fileId = getFileId(FileType.VoiceNote);
          const voice = constructVoice(document, audio, serializeFileId(fileId), toUniqueFileId(fileId));
          m = { ...messageMedia, voice };
        } else {
          const fileId = getFileId(FileType.Audio);
          const audio_ = constructAudio(document, audio, serializeFileId(fileId), toUniqueFileId(fileId));
          m = { ...messageMedia, audio: audio_ };
        }
      } else if (sticker) {
        const fileId = getFileId(FileType.Sticker);
        const sticker = await constructSticker(document, serializeFileId(fileId), toUniqueFileId(fileId), getStickerSetName);
        m = { ...message, sticker };
      } else {
        const fileId = getFileId(FileType.Document);
        const document_ = constructDocument(document, fileName ?? ({ _: "documentAttributeFilename", file_name: "Unknown" }), serializeFileId(fileId), toUniqueFileId(fileId));
        m = { ...messageMedia, document: document_ };
      }
    }
  } else if (is("messageMediaContact", message_.media)) {
    const contact = constructContact(message_.media);
    m = { ...messageMedia, contact };
  } else if (is("messageMediaGame", message_.media)) {
    const game = constructGame(message_.media);
    m = { ...message, game };
  } else if (is("messageMediaPoll", message_.media)) {
    if (poll) {
      message_.media.poll = poll;
    }
    if (pollResults) {
      message_.media.results = pollResults;
    }
    const poll_ = constructPoll(message_.media);
    m = { ...message, poll: poll_ };
  } else if (is("messageMediaVenue", message_.media)) {
    const venue = constructVenue(message_.media);
    m = { ...message, venue };
  } else if (is("messageMediaGeo", message_.media) || is("messageMediaGeoLive", message_.media)) {
    const location = constructLocation(message_.media);
    m = { ...message, location };
  } else if (is("messageMediaWebPage", message_.media)) {
    const linkPreview = constructLinkPreview(message_.media, message_.invert_media);
    if (message_.message) {
      m = { ...messageText, linkPreview };
    } else {
      m = { ...message, linkPreview: { ...linkPreview, url: linkPreview.url ? linkPreview.url : unreachable() } };
    }
  } else if (is("messageMediaGiveaway", message_.media)) {
    const giveaway = constructGiveaway(message_.media);
    m = { ...message, giveaway };
  } else if (is("messageMediaInvoice", message_.media)) {
    const invoice = constructInvoice(message_.media);
    m = { ...message, invoice };
  }

  if (m == null) {
    const unsupported = true;
    m = { ...message, unsupported };
  }

  return cleanObject(m);
}
