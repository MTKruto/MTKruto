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
import { cleanObject, getLogger, type MaybePromise, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { type FileId, FileType, toUniqueFileId } from "./_file_id.ts";
import { serializeFileId } from "./_file_id.ts";
import { type ChecklistChanged, constructChecklistChanged } from "./0_checklist_changed.ts";
import { constructContact, type Contact } from "./0_contact.ts";
import { constructDice, type Dice } from "./0_dice.ts";
import { constructInvoice, type Invoice } from "./0_invoice.ts";
import { constructLocation, type Location } from "./0_location.ts";
import { constructRefundedPayment, type RefundedPayment } from "./0_refunded_payment.ts";
import { constructSelfDestructOption, type SelfDestructOption } from "./0_self_destruct_option.ts";
import { constructVoice, type Voice } from "./0_voice.ts";
import { type Animation, constructAnimation } from "./1_animation.ts";
import { type Audio, constructAudio } from "./1_audio.ts";
import { type ChatP, isChatPUser, type PeerGetter } from "./1_chat_p.ts";
import { constructDocument, type Document } from "./1_document.ts";
import { constructGiveaway, type Giveaway } from "./1_giveaway.ts";
import { constructMessageReaction, type MessageReaction } from "./1_message_reaction.ts";
import { constructPhoto, type Photo } from "./1_photo.ts";
import { constructSticker, type Sticker, type StickerSetNameGetter } from "./1_sticker.ts";
import { constructVenue, type Venue } from "./1_venue.ts";
import { constructVideoNote, type VideoNote } from "./1_video_note.ts";
import { constructVideo, type Video } from "./1_video.ts";
import { constructMessageEntity, type MessageEntity } from "./2_message_entity.ts";
import { constructReplyMarkup, type ReplyMarkup } from "./2_reply_markup.ts";
import { constructSuccessfulPayment, type SuccessfulPayment } from "./2_successful_payment.ts";
import { constructUser2, type User } from "./2_user.ts";
import { type ChecklistItem, constructChecklistItem } from "./3_checklist_item.ts";
import { constructForwardHeader, type ForwardHeader } from "./3_forward_header.ts";
import { constructGame, type Game } from "./3_game.ts";
import { constructPollOption, type PollOption } from "./3_poll_option.ts";
import { constructReplyQuote, type ReplyQuote } from "./3_reply_quote.ts";
import { type Checklist, constructChecklist } from "./4_checklist.ts";
import { constructPoll, type Poll } from "./4_poll.ts";
import { constructGiftNonUpgradedInformation, type GiftNonUpgradedInformation } from "./5_gift_non_upgraded_information.ts";
import { constructGiftUpgradedInformation, type GiftUpgradedInformation } from "./5_gift_upgraded_information.ts";
import { constructLinkPreview, type LinkPreview } from "./5_link_preview.ts";

const L = getLogger("Message");

/**
 * Properties shared between all message types.
 * @unlisted
 */
export interface _MessageBase {
  /** Whether the message is outgoing (sent by the current user). */
  isOutgoing: boolean;
  /** The identifier of the message. */
  id: number;
  /** The identifier of the message's thread. */
  threadId?: number;
  /** The sender of the message. */
  from: ChatP;
  /** The point in time in which the message was sent. */
  date: number;
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
  editDate?: number;
  /** Whether the contents of the message is protected. */
  hasProtectedContent?: boolean;
  /** The identifier of the message's media group. */
  mediaGroupId?: string;
  /** The signature of the message. */
  authorSignature?: string;
  /** The member tag of the sender of the message. */
  tag?: string;
  /** The number of times the message was viewed. */
  views?: number;
  /** The number of times the message was forwarded. */
  forwards?: number;
  /** The message's reply markup. */
  replyMarkup?: ReplyMarkup;
  /** The identifier of a business connection that the message was sent in. */
  businessConnectionId?: string;
  /** The number of the boosts made by the sender of the message. */
  senderBoostCount?: number;
  /** The identifier of the business connection in which the message was sent. */
  viaBusinessBot?: User;
  /** The identifier of the message effect that has been attached to the message. */
  effectId?: string;
  /** Whether the message is scheduled. */
  isScheduled?: boolean;
  /** The message's self-destruct preference. */
  selfDestruct?: SelfDestructOption;
}

/**
 * Properties shared between media message types.
 * @unlisted
 */
export interface _MessageMediaBase extends _MessageBase {
  /** The media's caption. */
  caption?: string;
  /** The entities of the media's caption. */
  captionEntities?: MessageEntity[];
  /** Whether the media is a spoiler. */
  isSpoiler?: boolean;
}

// begin message types

/**
 * A text message.
 * @unlisted
 */
export interface MessageText extends _MessageBase {
  type: "text";
  /** The text included in the message. */
  text: string;
  /** The text's entities. */
  entities: MessageEntity[];
  /** The message's link preview. */
  linkPreview?: LinkPreview;
}

/**
 * A message with a link preview only.
 * @unlisted
 */
export interface MessageLink extends _MessageBase {
  type: "link";
  linkPreview: LinkPreview;
}

/** @unlisted */
export interface MessagePhoto extends _MessageMediaBase {
  type: "photo";
  /** The photo included in the message. */
  photo: Photo;
}

/**
 * A document message.
 * @unlisted
 */
export interface MessageDocument extends _MessageMediaBase {
  type: "document";
  /** The document included in the message. */
  document: Document;
}

/**
 * A video message.
 * @unlisted
 */
export interface MessageVideo extends _MessageMediaBase {
  type: "video";
  /** The video included in the message. */
  video: Video;
}

/**
 * A sticker message.
 * @unlisted
 */
export interface MessageSticker extends _MessageBase {
  type: "sticker";
  /** The sticker included in the message. */
  sticker: Sticker;
}

/**
 * An animation message. Animations are GIFs or H.264/MPEG-4 AVC videos without sound.
 * @unlisted
 */
export interface MessageAnimation extends _MessageMediaBase {
  type: "animation";
  /** The animation included in the message. */
  animation: Animation;
}

/**
 * A voice message.
 * @unlisted
 */
export interface MessageVoice extends _MessageMediaBase {
  type: "voice";
  /** The voice included in the message. */
  voice: Voice;
}

/**
 * An audio message.
 * @unlisted
 */
export interface MessageAudio extends _MessageMediaBase {
  type: "audio";
  /** The audio included in the message. */
  audio: Audio;
}

/**
 * A dice message.
 * @unlisted
 */
export interface MessageDice extends _MessageBase {
  type: "dice";
  /** The dice included in the message. */
  dice: Dice;
}

/**
 * A video note message.
 * @unlisted
 */
export interface MessageVideoNote extends _MessageBase {
  type: "videoNote";
  /** The video note included in the message. */
  videoNote: VideoNote;
}

/**
 * A contact message.
 * @unlisted
 */
export interface MessageContact extends _MessageBase {
  type: "contact";
  /** The contact included in the message. */
  contact: Contact;
}

/**
 * A game message.
 * @unlisted
 */
export interface MessageGame extends _MessageBase {
  type: "game";
  /** The game included in the message. */
  game: Game;
}

/**
 * A poll message.
 * @unlisted
 */
export interface MessagePoll extends _MessageBase {
  type: "poll";
  /** The poll included in the message. */
  poll: Poll;
}

/**
 * A checklist message.
 * @unlisted
 */
export interface MessageChecklist extends _MessageBase {
  type: "checklist";
  /** The checklist included in the message. */
  checklist: Checklist;
}

/**
 * An invoice message.
 * @unlisted
 */
export interface MessageInvoice extends _MessageBase {
  type: "invoice";
  /** The invoice included in the message. */
  invoice: Invoice;
}

/**
 * A venue message.
 * @unlisted
 */
export interface MessageVenue extends _MessageBase {
  type: "venue";
  /** The venue included in the message. */
  venue: Venue;
}

/**
 * A location message.
 * @unlisted
 */
export interface MessageLocation extends _MessageBase {
  type: "location";
  /** The location included in the message. */
  location: Location;
}

/**
 * A message that is received when new members join a chat.
 * @unlisted
 */
export interface MessageNewChatMembers extends _MessageBase {
  type: "newChatMembers";
  /** The new members of the chat. */
  newChatMembers: User[];
}

/**
 * A message that is received when a member leaves a chat.
 * @unlisted
 */
export interface MessageLeftChatMember extends _MessageBase {
  type: "leftChatMember";
  /** The member who left the chat. */
  leftChatMember: User;
}

/**
 * A message that is received when a chat's title is changed.
 * @unlisted
 */
export interface MessageNewChatTitle extends _MessageBase {
  type: "newChatTitle";
  /** The new title of the chat. */
  newChatTitle: string;
}

/**
 * A message that is received when a chat's photo is changed.
 * @unlisted
 */
export interface MessageNewChatPhoto extends _MessageBase {
  type: "newChatPhoto";
  /** The new photo of the chat */
  newChatPhoto: Photo;
}

/**
 * A message that is received when a chat's photo is removed.
 * @unlisted
 */
export interface MessageDeletedChatPhoto extends _MessageBase {
  type: "deletedChatPhoto";
}

/**
 * A message that is received by user accounts when a group is created.
 * While bots don't receive them, they are able to see them if someone replies to them.
 * @unlisted
 */
export interface MessageGroupCreated extends _MessageBase {
  type: "groupCreated";
  /** The initial members of the group. */
  newChatMembers: User[];
}

/**
 * A message that is received by user accounts when a supergroup is created.
 * While bots don't receive them, they are able to see them if someone replies to them.
 * @unlisted
 */
export interface MessageSupergroupCreated extends _MessageBase {
  type: "supergroupCreated";
}

/**
 * A message that is received by user accounts when a channel is created.
 * While bots don't receive them, they are able to see them if someone replies to them.
 * @unlisted
 */
export interface MessageChannelCreated extends _MessageBase {
  type: "channelCreated";
}

/**
 * A message that is received when a chat's auto-delete timer is changed.
 * @unlisted
 */
export interface MessageAutoDeleteTimerChanged extends _MessageBase {
  type: "newAutoDeleteTime";
  /** The new auto-delete time in seconds. */
  newAutoDeleteTime: number;
}

/**
 * A message that is received when a supergroup is created as a result of a group migration.
 * @unlisted
 */
export interface MessageChatMigratedTo extends _MessageBase {
  type: "chatMigratedTo";
  /** The supergroup's ID. */
  chatMigratedTo: number;
}

/**
 * A message that is received when a group is migrated to a supergroup.
 * @unlisted
 */
export interface MessageChatMigratedFrom extends _MessageBase {
  type: "chatMigratedFrom";
  /** The group's ID. */
  chatMigratedFrom: number;
}

/**
 * A message that is received when a message is pinned in a chat.
 * @unlisted
 */
export interface MessagePinnedMessage extends _MessageBase {
  type: "pinnedMessage";
  /** The message that was pinned. */
  pinnedMessage: Message;
}

/**
 * A message that is received when a bot account receives a shared user.
 * @unlisted
 */
export interface MessageUserShared extends _MessageBase {
  type: "userShared";
  userShared: { requestId: number; userId: number };
}

/**
 * A message that is received when a bot is allowed to message a user.
 * @unlisted
 */
export interface MessageWriteAccessAllowed extends _MessageBase {
  type: "writeAccessAllowed";
  writeAccessAllowed: { miniAppName?: string };
}

/**
 * A message that is received when a new topic is created in a forum.
 * @unlisted
 */
export interface MessageForumTopicCreated extends _MessageBase {
  type: "forumTopicCreated";
  /** Information on the created forum topic. */
  forumTopicCreated: { name: string; color: number; customEmojiId?: string };
}

/**
 * A message that is received when a topic is edited in a forum.
 * @unlisted
 */
export interface MessageForumTopicEdited extends _MessageBase {
  type: "forumTopicEdited";
  forumTopicEdited: { name: string; customEmojiId?: string };
}

/**
 * A message that is received when a topic is closed in a forum.
 * @unlisted
 */
export interface MessageForumTopicClosed extends _MessageBase {
  type: "forumTopicClosed";
}

/**
 * A message that is received when a topic is reopened in a forum.
 * @unlisted
 */
export interface MessageForumTopicReopened extends _MessageBase {
  type: "forumTopicReopened";
}

/**
 * A message that is received when a video chat is scheduled in a chat.
 * @unlisted
 */
export interface MessageVideoChatScheduled extends _MessageBase {
  type: "videoChatScheduled";
  /** Information on the scheduled video chat. */
  videoChatScheduled: { startDate: number };
}

/**
 * A message that is received when a video chat is started in a chat.
 * @unlisted
 */
export interface MessageVideoChatStarted extends _MessageBase {
  type: "videoChatStarted";
}

/**
 * A message that is received when a video chat is ended in a chat.
 * @unlisted
 */
export interface MessageVideoChatEnded extends _MessageBase {
  type: "videoChatEnded";
  /** Information on the ended video chat. */
  videoChatEnded: { duration: number };
}

/**
 * A message that is received when a giveaway is started in a chat.
 * @unlisted
 */
export interface MessageGiveaway extends _MessageBase {
  type: "giveaway";
  /** Information on the giveaway. */
  giveaway: Giveaway;
}

/**
 * An unsupported message.
 * @unlisted
 */
export interface MessageUnsupported extends _MessageBase {
  type: "unsupported";
}

/**
 * A payment was successfully received. Bot-only.
 * @unlisted
 */
export interface MessageSuccessfulPayment extends _MessageBase {
  type: "successfulPayment";
  /** Information on the successful payment. */
  successfulPayment: SuccessfulPayment;
}

/**
 * A payment was successfully refunded. Bot-only.
 * @unlisted
 */
export interface MessageRefundedPayment extends _MessageBase {
  type: "refundedPayment";
  /** Information on the refunded payment. */
  refundedPayment: RefundedPayment;
}

/**
 * A checklist was changed.
 * @unlisted
 */
export interface MessageChecklistChanged extends _MessageBase {
  type: "checklistChanged";
  /** The checklist's changes. */
  checklistChanged: ChecklistChanged;
}

/**
 * A checklist was extended.
 * @unlisted
 */
export interface MessageChecklistExtended extends _MessageBase {
  type: "checklistExtended";
  /** The checklist's new items. */
  checklistExtended: ChecklistItem[];
}

/**
 * An action related to a non-upgraded gift.
 * @unlisted
 */
export interface MessageGiftNonUpgraded extends _MessageBase {
  type: "giftNonUpgraded";
  /** Information on the non-upgraded gift. */
  giftNonUpgraded: GiftNonUpgradedInformation;
}

/**
 * An action related an upgraded gift.
 * @unlisted
 */
export interface MessageGiftUpgraded extends _MessageBase {
  type: "giftUpgraded";
  /** Information on the upgraded gift. */
  giftUpgraded: GiftUpgradedInformation;
}

/**
 * An option was added to a poll.
 * @unlisted
 */
export interface MessagePollOptionAdded extends _MessageBase {
  type: "pollOptionAdded";
  /** The option that was added. */
  pollOptionAdded: PollOption;
}

/**
 * An option was removed from a poll.
 * @unlisted
 */
export interface MessagePollOptionRemoved extends _MessageBase {
  type: "pollOptionRemoved";
  /** The option that was added. */
  pollOptionRemoved: PollOption;
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
  checklist: MessageChecklist;
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
  checklistChanged: MessageChecklistChanged;
  checklistExtended: MessageChecklistExtended;
  giftNonUpgraded: MessageGiftNonUpgraded;
  giftUpgraded: MessageGiftUpgraded;
  pollOptionAdded: MessagePollOptionAdded;
  pollOptionRemoved: MessagePollOptionRemoved;
}

export const messageTypes: (keyof MessageTypes)[] = [
  "text",
  "link",
  "photo",
  "document",
  "video",
  "sticker",
  "animation",
  "voice",
  "audio",
  "dice",
  "videoNote",
  "contact",
  "game",
  "poll",
  "checklist",
  "invoice",
  "venue",
  "location",
  "newChatMembers",
  "leftChatMember",
  "newChatTitle",
  "newChatPhoto",
  "deletedChatPhoto",
  "groupCreated",
  "supergroupCreated",
  "channelCreated",
  "newAutoDeleteTime",
  "chatMigratedTo",
  "chatMigratedFrom",
  "pinnedMessage",
  "userShared",
  "writeAccessAllowed",
  "forumTopicCreated",
  "forumTopicEdited",
  "forumTopicClosed",
  "forumTopicReopened",
  "videoChatScheduled",
  "videoChatStarted",
  "videoChatEnded",
  "giveaway",
  "unsupported",
  "successfulPayment",
  "refundedPayment",
  "checklistChanged",
  "checklistExtended",
  "giftNonUpgraded",
  "giftUpgraded",
  "pollOptionRemoved",
  "pollOptionAdded",
];
export function assertMessageType<T extends keyof MessageTypes>(message: Message, type: T): MessageTypes[T] {
  if (message.type !== type) {
    unreachable();
  }
  return message as MessageTypes[T];
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
  | MessageChecklist
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
  | MessageRefundedPayment
  | MessageChecklistChanged
  | MessageChecklistExtended
  | MessageGiftNonUpgraded
  | MessageGiftUpgraded
  | MessagePollOptionAdded
  | MessagePollOptionRemoved;

/** @unlisted */
export interface MessageGetter {
  (chatId: number, messageId: number): MaybePromise<Message | null>;
}

type Message_MessageGetter = MessageGetter | null;

function getSender(message_: Api.message | Api.messageService, getPeer: PeerGetter) {
  const peer = message_.from_id ?? message_.peer_id;
  if (Api.isOneOf(["peerChannel", "peerUser"], peer)) {
    const peer_ = getPeer(peer);
    if (peer_) {
      return { from: peer_[0] };
    } else {
      unreachable();
    }
  } else {
    unreachable();
  }
}

async function getReply(message_: Api.message | Api.messageService, chat: ChatP, getMessage: Message_MessageGetter) {
  if (getMessage && Api.is("messageReplyHeader", message_.reply_to) && message_.reply_to.reply_to_msg_id) {
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

async function constructServiceMessage(message_: Api.messageService, chat: ChatP, getPeer: PeerGetter, getMessage: Message_MessageGetter, getReply_: boolean): Promise<Message> {
  const message: _MessageBase = {
    isOutgoing: message_.out ?? false,
    id: message_.id,
    chat,
    date: message_.date,
    isTopicMessage: message_.reply_to && Api.is("messageReplyHeader", message_.reply_to) && message_.reply_to.forum_topic ? true : false,
    ...getSender(message_, getPeer),
  };

  if (Api.is("messageReplyHeader", message_.reply_to) && message_.reply_to.reply_to_msg_id) {
    message.replyToMessageId = message_.reply_to.reply_to_top_id;
    message.replyToMessageId = message_.reply_to.reply_to_msg_id;
  }
  if (getReply_) {
    Object.assign(message, await getReply(message_, chat, getMessage));
  }

  if (Api.is("messageActionChatAddUser", message_.action) || Api.is("messageActionChatJoinedByLink", message_.action) || Api.is("messageActionChatJoinedByRequest", message_.action)) {
    const newChatMembers = new Array<User>();
    const users = "users" in message_.action ? message_.action.users : [message_.from_id && "user_id" in message_.from_id ? message_.from_id.user_id : unreachable()];
    for (const user_ of users) {
      const peer = getPeer({ _: "peerUser", user_id: user_ });
      if (peer && isChatPUser(peer[0])) {
        const user = constructUser2(peer[0]);
        newChatMembers.push(user);
      } else {
        unreachable();
      }
    }
    return { ...message, newChatMembers, type: "newChatMembers" };
  } else if (Api.is("messageActionChatDeleteUser", message_.action)) {
    const peer = getPeer({ _: "peerUser", user_id: message_.action.user_id });
    if (peer) {
      const user = constructUser2(peer[0]);
      const leftChatMember = user;
      return { ...message, leftChatMember, type: "leftChatMember" };
    }
  } else if (Api.is("messageActionChatEditTitle", message_.action)) {
    const newChatTitle = message_.action.title;
    return { ...message, newChatTitle, type: "newChatTitle" };
  } else if (Api.is("messageActionChatEditPhoto", message_.action)) {
    const newChatPhoto = constructPhoto(Api.as("photo", message_.action.photo));
    return { ...message, newChatPhoto, type: "newChatPhoto" };
  } else if (Api.is("messageActionChatDeletePhoto", message_.action)) {
    return { ...message, type: "deletedChatPhoto" };
  } else if (Api.is("messageActionChatCreate", message_.action)) {
    const newChatMembers = new Array<User>();
    for (const user_ of message_.action.users) {
      const peer = getPeer({ _: "peerUser", user_id: user_ });
      if (peer) {
        const user = constructUser2(peer[0]);
        newChatMembers.push(user);
      }
    }
    return { ...message, newChatMembers, type: "groupCreated" };
  } else if (Api.is("messageActionChannelCreate", message_.action)) {
    if (message.chat.type === "channel") {
      return { ...message, type: "channelCreated" };
    } else if (message.chat.type === "supergroup") {
      return { ...message, type: "supergroupCreated" };
    } else {
      // unreachable();
    }
  } else if (Api.is("messageActionChatMigrateTo", message_.action)) {
    const chatMigratedTo = ZERO_CHANNEL_ID + Number(-message_.action.channel_id);
    return { ...message, chatMigratedTo, type: "chatMigratedTo" };
  } else if (Api.is("messageActionChannelMigrateFrom", message_.action)) {
    const chatMigratedFrom = Number(-message_.action.chat_id);
    return { ...message, chatMigratedFrom, type: "chatMigratedFrom" };
  } else if (Api.is("messageActionPinMessage", message_.action)) {
    const { replyToMessage } = await getReply(message_, chat, getMessage);
    if (replyToMessage) {
      const pinnedMessage = replyToMessage;
      return { ...message, pinnedMessage, type: "pinnedMessage" };
    }
  } else if (Api.is("messageActionRequestedPeer", message_.action)) {
    const user = Api.as("peerUser", message_.action.peers[0]);
    const userShared = { requestId: message_.action.button_id, userId: Number(user.user_id) };
    return { ...message, userShared, type: "userShared" };
  } else if (Api.is("messageActionBotAllowed", message_.action)) {
    const miniAppName = message_.action.app ? Api.as("botApp", message_.action.app).title : undefined;
    const writeAccessAllowed = { miniAppName };
    return { ...message, writeAccessAllowed, type: "writeAccessAllowed" };
  } else if (Api.is("messageActionTopicCreate", message_.action)) {
    const forumTopicCreated = {
      name: message_.action.title,
      color: message_.action.icon_color,
      customEmojiId: message_.action.icon_emoji_id ? String(message_.action.icon_emoji_id) : undefined,
    };
    return { ...message, forumTopicCreated, type: "forumTopicCreated" };
  } else if (Api.is("messageActionTopicEdit", message_.action)) {
    if (message_.action.closed) {
      return { ...message, type: "forumTopicClosed" };
    } else if (message_.action.title || message_.action.icon_emoji_id) {
      const forumTopicEdited = {
        name: message_.action.title ?? "",
        customEmojiId: message_.action.icon_emoji_id ? String(message_.action.icon_emoji_id) : undefined,
      };
      return { ...message, forumTopicEdited, type: "forumTopicEdited" };
    } else {
      return { ...message, type: "forumTopicReopened" };
    }
  } else if (Api.is("messageActionGroupCallScheduled", message_.action)) {
    const videoChatScheduled = { startDate: message_.action.schedule_date };
    return { ...message, videoChatScheduled, type: "videoChatScheduled" };
  } else if (Api.is("messageActionGroupCall", message_.action)) {
    if (message_.action.duration) {
      const videoChatEnded = { duration: message_.action.duration };

      return { ...message, videoChatEnded, type: "videoChatEnded" };
    } else {
      return { ...message, type: "videoChatStarted" };
    }
  } else if (Api.is("messageActionSetMessagesTTL", message_.action)) {
    const newAutoDeleteTime = message_.action.period || 0;
    return { ...message, newAutoDeleteTime, type: "newAutoDeleteTime" };
  } else if (Api.is("messageActionPaymentSentMe", message_.action)) {
    const successfulPayment = constructSuccessfulPayment(message_.action);
    return { ...message, successfulPayment, type: "successfulPayment" };
  } else if (Api.is("messageActionPaymentRefunded", message_.action)) {
    const refundedPayment = constructRefundedPayment(message_.action);
    return { ...message, refundedPayment, type: "refundedPayment" };
  } else if (Api.is("messageActionTodoCompletions", message_.action)) {
    const checklistChanged = constructChecklistChanged(message_.action);
    return { ...message, checklistChanged, type: "checklistChanged" };
  } else if (Api.is("messageActionTodoAppendTasks", message_.action)) {
    const checklistExtended = message_.action.list.map((v) => constructChecklistItem(v, [], getPeer));
    return { ...message, checklistExtended, type: "checklistExtended" };
  } else if (Api.is("messageActionStarGift", message_.action)) {
    const giftNonUpgraded = constructGiftNonUpgradedInformation(message_.action, getPeer);
    return { ...message, giftNonUpgraded, type: "giftNonUpgraded" };
  } else if (Api.is("messageActionStarGiftUnique", message_.action)) {
    const giftUpgraded = constructGiftUpgradedInformation(message_.action, getPeer);
    return { ...message, giftUpgraded, type: "giftUpgraded" };
  } else if (Api.is("messageActionPollAppendAnswer", message_.action)) {
    const pollOptionAdded = constructPollOption(message_.action.answer, []);
    return { ...message, pollOptionAdded, type: "pollOptionAdded" };
  } else if (Api.is("messageActionPollDeleteAnswer", message_.action)) {
    const pollOptionRemoved = constructPollOption(message_.action.answer, []);
    return { ...message, pollOptionRemoved, type: "pollOptionRemoved" };
  }
  return { ...message, type: "unsupported" };
}

export async function constructMessage(
  message_: Api.Message,
  getPeer: PeerGetter,
  getMessage: Message_MessageGetter,
  getStickerSetName: StickerSetNameGetter,
  getReply_ = true,
  business?: { connectionId: string; replyToMessage?: Api.Message },
  poll?: Api.poll,
  pollResults?: Api.pollResults,
): Promise<Message> {
  if (!(Api.is("message", message_)) && !(Api.is("messageService", message_))) {
    unreachable();
  }

  let link: string | undefined;
  const chat_: ChatP | null = getPeer(message_.peer_id)?.[0] ?? null;
  if (chat_ === null) {
    unreachable();
  }

  if (Api.is("peerChannel", message_.peer_id)) {
    const reply_to_top_id = message_.reply_to && Api.is("messageReplyHeader", message_.reply_to) && message_.reply_to.reply_to_top_id;
    const threadId = reply_to_top_id && typeof reply_to_top_id === "number" ? reply_to_top_id + "/" : "";
    link = `https://t.me/c/${message_.peer_id.channel_id}/${threadId}${message_.id}`;
    if ("username" in chat_ && chat_.username) {
      link = link.replace(`/c/${message_.peer_id.channel_id}/`, `/${chat_.username}/`);
    }
  }

  if (Api.is("messageService", message_)) {
    return cleanObject(await constructServiceMessage(message_, chat_, getPeer, getMessage, getReply_));
  }

  const message: _MessageBase = {
    isOutgoing: message_.out ?? false,
    id: message_.id,
    chat: chat_,
    link,
    date: message_.date,
    views: message_.views,
    forwards: message_.forwards,
    isTopicMessage: message_.reply_to && Api.is("messageReplyHeader", message_.reply_to) && message_.reply_to.forum_topic ? true : false,
    hasProtectedContent: message_.noforwards || false,
    senderBoostCount: message_.from_boosts_applied,
    effectId: message_.effect ? String(message_.effect) : undefined,
    isScheduled: message_.from_scheduled ? true : undefined,
    ...await getSender(message_, getPeer),
  };

  if (message_.reactions) {
    const recentReactions = message_.reactions.recent_reactions ?? [];
    message.reactions = message_.reactions.results.map((v) => constructMessageReaction(v, recentReactions));
  }

  if (Api.is("messageReplyHeader", message_.reply_to) && message_.reply_to.reply_to_msg_id) {
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
      message.replyToMessage = await constructMessage(business.replyToMessage, getPeer, getMessage, getStickerSetName, false, { connectionId: business.connectionId });
    }
  } else if (getReply_) {
    Object.assign(message, await getReply(message_, chat_, getMessage));
  }

  if (message_.reply_markup) {
    message.replyMarkup = constructReplyMarkup(message_.reply_markup);
  }

  if (message_.via_bot_id !== undefined) {
    const peer = getPeer({ _: "peerUser", user_id: message_.via_bot_id });
    if (peer) {
      message.viaBot = constructUser2(peer[0]);
    } else {
      unreachable();
    }
  }
  if (message_.via_business_bot_id !== undefined) {
    const peer = getPeer({ _: "peerUser", user_id: message_.via_business_bot_id });
    if (peer) {
      message.viaBusinessBot = constructUser2(peer[0]);
    } else {
      unreachable();
    }
  }

  if (message_.post_author !== undefined) {
    message.authorSignature = message_.post_author;
  }

  if (message_.from_rank !== undefined) {
    message.tag = message_.from_rank;
  }

  if (Api.is("messageFwdHeader", message_.fwd_from)) {
    message.isAutomaticForward = message_.fwd_from.saved_from_peer !== undefined && message_.fwd_from.saved_from_msg_id !== undefined;
    message.forwardFrom = constructForwardHeader(message_.fwd_from, getPeer);
  }

  if (message_.grouped_id !== undefined) {
    message.mediaGroupId = String(message_.grouped_id);
  }

  if (message_.edit_date) {
    message.editDate = message_.edit_date;
  }

  const messageText = {
    ...message,
    text: message_.message,
    entities: message_.entities?.map(constructMessageEntity).filter((v): v is NonNullable<typeof v> => !!v) ?? [],
  };

  if (message_.message && message_.media === undefined) {
    return cleanObject({ type: "text", ...messageText });
  }

  const messageMedia: _MessageMediaBase = {
    ...message,
    caption: message_.message,
    captionEntities: message_.entities?.map(constructMessageEntity).filter((v): v is NonNullable<typeof v> => !!v) ?? [],
  };

  if (message_.media && "ttl_seconds" in message_.media && typeof message_.media.ttl_seconds === "number") {
    messageMedia.selfDestruct = constructSelfDestructOption(message_.media.ttl_seconds);
  }

  if (Api.is("messageMediaPhoto", message_.media) || Api.is("messageMediaDocument", message_.media)) {
    messageMedia.isSpoiler = message_.media.spoiler || false;
  }

  let m: Message | null = null;

  if (Api.is("messageMediaPhoto", message_.media)) {
    if (!message_.media.photo) {
      unreachable();
    }
    const photo = constructPhoto(Api.as("photo", message_.media.photo));
    m = { type: "photo", ...messageMedia, photo };
  } else if (Api.is("messageMediaDice", message_.media)) {
    const dice = constructDice(message_.media);
    m = { type: "dice", ...message, dice };
  } else if (Api.is("messageMediaDocument", message_.media)) {
    const { document } = message_.media;
    if (Api.is("document", document)) {
      const getFileId = (type: FileType): FileId => (
        {
          type,
          dcId: document.dc_id,
          fileReference: document.file_reference,
          location: { type: "common", id: document.id, accessHash: document.access_hash },
        }
      );

      const animated = document.attributes.find((v): v is Api.documentAttributeAnimated => Api.is("documentAttributeAnimated", v));
      const audio = document.attributes.find((v): v is Api.documentAttributeAudio => Api.is("documentAttributeAudio", v));
      const fileName = document.attributes.find((v): v is Api.documentAttributeFilename => Api.is("documentAttributeFilename", v));
      const sticker = document.attributes.find((v): v is Api.documentAttributeSticker => Api.is("documentAttributeSticker", v));
      const video = document.attributes.find((v): v is Api.documentAttributeVideo => Api.is("documentAttributeVideo", v));
      if (sticker) {
        const fileId = getFileId(FileType.Sticker);
        const sticker = await constructSticker(document, serializeFileId(fileId), toUniqueFileId(fileId), getStickerSetName);
        m = { type: "sticker", ...message, sticker };
      } else if (animated) {
        const fileId = getFileId(FileType.Animation);
        const animation = constructAnimation(document, video, fileName, serializeFileId(fileId), toUniqueFileId(fileId));
        m = { type: "animation", ...messageMedia, animation };
      } else if (video) {
        if (video.round_message) {
          const fileId = getFileId(FileType.VideoNote);
          const videoNote = constructVideoNote(document, video, serializeFileId(fileId), toUniqueFileId(fileId));
          m = { type: "videoNote", ...message, videoNote };
        } else {
          const fileId = getFileId(FileType.Video);
          const video_ = constructVideo(document, video, fileName?.file_name, serializeFileId(fileId), toUniqueFileId(fileId));
          m = { type: "video", ...messageMedia, video: video_ };
        }
      } else if (audio) {
        if (audio.voice) {
          const fileId = getFileId(FileType.VoiceNote);
          const voice = constructVoice(document, audio, serializeFileId(fileId), toUniqueFileId(fileId));
          m = { type: "voice", ...messageMedia, voice };
        } else {
          const fileId = getFileId(FileType.Audio);
          const audio_ = constructAudio(document, audio, serializeFileId(fileId), toUniqueFileId(fileId));
          m = { type: "audio", ...messageMedia, audio: audio_ };
        }
      } else {
        const fileId = getFileId(FileType.Document);
        const document_ = constructDocument(document, fileName ?? ({ _: "documentAttributeFilename", file_name: "Unknown" }), serializeFileId(fileId), toUniqueFileId(fileId));
        m = { type: "document", ...messageMedia, document: document_ };
      }
    }
  } else if (Api.is("messageMediaContact", message_.media)) {
    const contact = constructContact(message_.media);
    m = { type: "contact", ...messageMedia, contact };
  } else if (Api.is("messageMediaGame", message_.media)) {
    const game = constructGame(message_.media);
    m = { type: "game", ...message, game };
  } else if (Api.is("messageMediaPoll", message_.media)) {
    if (poll) {
      message_.media.poll = poll;
    }
    if (pollResults) {
      message_.media.results = pollResults;
    }
    const poll_ = constructPoll(message_.media);
    m = { type: "poll", ...message, poll: poll_ };
  } else if (Api.is("messageMediaToDo", message_.media)) {
    const checklist = constructChecklist(message_.media.todo, message_.media.completions ?? [], getPeer);
    m = { type: "checklist", ...message, checklist };
  } else if (Api.is("messageMediaVenue", message_.media)) {
    const venue = constructVenue(message_.media);
    m = { type: "venue", ...message, venue };
  } else if (Api.is("messageMediaGeo", message_.media) || Api.is("messageMediaGeoLive", message_.media)) {
    const location = constructLocation(message_.media);
    m = { type: "location", ...message, location };
  } else if (Api.is("messageMediaWebPage", message_.media)) {
    const linkPreview = constructLinkPreview(message_.media, message_.invert_media, getPeer);
    if (message_.message) {
      m = { type: "link", ...messageText, linkPreview };
    } else {
      m = { type: "link", ...message, linkPreview: { ...linkPreview, url: linkPreview.url ? linkPreview.url : unreachable() } };
    }
  } else if (Api.is("messageMediaGiveaway", message_.media)) {
    const giveaway = constructGiveaway(message_.media);
    m = { type: "giveaway", ...message, giveaway };
  } else if (Api.is("messageMediaInvoice", message_.media)) {
    const invoice = constructInvoice(message_.media);
    m = { type: "invoice", ...message, invoice };
  }

  if (m === null) {
    m = { type: "unsupported", ...message };
  }

  return cleanObject(m);
}
