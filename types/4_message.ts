import { cleanObject, fromUnixTimestamp, getLogger, MaybePromise, UNREACHABLE, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { as, enums, types } from "../2_tl.ts";
import { FileId, FileType, toUniqueFileId } from "./_file_id.ts";
import { serializeFileId } from "./_file_id.ts";
import { EntityGetter } from "./_getters.ts";
import { constructContact, Contact } from "./0_contact.ts";
import { constructDice, Dice } from "./0_dice.ts";
import { constructLinkPreview, LinkPreview } from "./0_link_preview.ts";
import { constructLocation, Location } from "./0_location.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";
import { constructVoice, Voice } from "./0_voice.ts";
import { Animation, constructAnimation } from "./1_animation.ts";
import { Audio, constructAudio } from "./1_audio.ts";
import { ChatP, constructChatP } from "./1_chat_p.ts";
import { constructDocument, Document } from "./1_document.ts";
import { constructGiveaway, Giveaway } from "./1_giveaway.ts";
import { constructMessageReaction, MessageReaction } from "./1_message_reaction.ts";
import { constructPhoto, Photo } from "./1_photo.ts";
import { constructPoll, Poll } from "./1_poll.ts";
import { constructReplyQuote, ReplyQuote } from "./1_reply_quote.ts";
import { constructSticker, Sticker, StickerSetNameGetter } from "./1_sticker.ts";
import { constructUser, User } from "./1_user.ts";
import { constructVenue, Venue } from "./1_venue.ts";
import { constructVideoNote, VideoNote } from "./1_video_note.ts";
import { constructVideo, Video } from "./1_video.ts";
import { constructGame, Game } from "./2_game.ts";
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
  /** The point of time in which the message was sent. */
  date: Date;
  /** The chat where the message was sent to. */
  chat: ChatP;
  /** A link to the message. */
  link?: string;
  /** The original sender of the message. */
  forwardFrom?: User;
  /** The original chat of the message. */
  forwardFromChat?: ChatP;
  /** The original identifier of the message. */
  forwardId?: number;
  /** The original signature of the message. */
  forwardSignature?: string;
  /** The name of the original sender of the message. */
  forwardSenderName?: string;
  /** The point of time in which the original message was sent. */
  forwardDate?: Date;
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
  /** The point of time in which the message's last edit was made. */
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
  businessConnectionId?: string;
  senderBoostCount?: number;
  viaBusinessBot?: User;
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
  /** The text included in the message. */
  text: string;
  /** Entities of the text. */
  entities: MessageEntity[];
  /** The message's link preview. */
  linkPreview?: LinkPreview;
}

/**
 * A message with a link preview only.
 * @unlisted
 */
export interface MessageLink extends _MessageBase {
  linkPreview: LinkPreview & { url: NonNullable<LinkPreview["url"]> };
}

/** @unlisted */
export interface MessagePhoto extends _MessageMediaBase {
  /** The photo included in the message. */
  photo: Photo;
}

/**
 * A document message.
 * @unlisted
 */
export interface MessageDocument extends _MessageMediaBase {
  /** The document included in the message. */
  document: Document;
}

/**
 * A video message.
 * @unlisted
 */
export interface MessageVideo extends _MessageMediaBase {
  /** The video included in the message. */
  video: Video;
}

/**
 * A sticker message.
 * @unlisted
 */
export interface MessageSticker extends _MessageBase {
  /** The sticker included in the message. */
  sticker: Sticker;
}

/**
 * An animation message. Animations are GIFs or H.264/MPEG-4 AVC videos without sound.
 * @unlisted
 */
export interface MessageAnimation extends _MessageMediaBase {
  /** The animation included in the message. */
  animation: Animation;
}

/**
 * A voice message.
 * @unlisted
 */
export interface MessageVoice extends _MessageMediaBase {
  /** The voice included in the message. */
  voice: Voice;
}

/**
 * An audio message.
 * @unlisted
 */
export interface MessageAudio extends _MessageMediaBase {
  /** The audio included in the message. */
  audio: Audio;
}

/**
 * A dice message.
 * @unlisted
 */
export interface MessageDice extends _MessageBase {
  /** The dice included in the message.  */
  dice: Dice;
}

/**
 * A video note message.
 * @unlisted
 */
export interface MessageVideoNote extends _MessageBase {
  /** The video note included in the message. */
  videoNote: VideoNote;
}

/**
 * A contact message.
 * @unlisted
 */
export interface MessageContact extends _MessageBase {
  /** The contact included in the message. */
  contact: Contact;
}

/**
 * A game message.
 * @unlisted
 */
export interface MessageGame extends _MessageBase {
  /** The game included in the message. */
  game: Game;
}

/**
 * A poll message.
 * @unlisted
 */
export interface MessagePoll extends _MessageBase {
  /** The poll included in the message. */
  poll: Poll;
}

/**
 * A venue message.
 * @unlisted
 */
export interface MessageVenue extends _MessageBase {
  /** The venue included in the message. */
  venue: Venue;
}

/**
 * A location message.
 * @unlisted
 */
export interface MessageLocation extends _MessageBase {
  /** The location included in the message. */
  location: Location;
}

/**
 * A message that is received when new members join a chat.
 * @unlisted
 */
export interface MessageNewChatMembers extends _MessageBase {
  /** The new members of the chat. */
  newChatMembers: User[];
}

/**
 * A message that is received when a member leaves a chat.
 * @unlisted
 */
export interface MessageLeftChatMember extends _MessageBase {
  /** The member who left the chat. */
  leftChatMember: User;
}

/**
 * A message that is received when a chat's title is changed.
 * @unlisted
 */
export interface MessageNewChatTitle extends _MessageBase {
  /** The new title of the chat. */
  newChatTitle: string;
}

/**
 * A message that is received when a chat's photo is changed.
 * @unlisted
 */
export interface MessageNewChatPhoto extends _MessageBase {
  /** The new photo of the chat. */
  newChatPhoto: Photo;
}

/**
 * A message that is received when a chat's photo is removed.
 * @unlisted
 */
export interface MessageDeletedChatPhoto extends _MessageBase {
  deletedChatPhoto: true;
}

/**
 * A message that is received by user accounts when a group is created.
 * While bots don't receive them, they are able to see them if someone replies to them.
 * @unlisted
 */
export interface MessageGroupCreated extends _MessageBase {
  groupCreated: true;
  /** The initial members of the group. */
  newChatMembers: User[];
}

/**
 * A message that is received by user accounts when a supergroup is created.
 * While bots don't receive them, they are able to see them if someone replies to them.
 * @unlisted
 */
export interface MessageSupergroupCreated extends _MessageBase {
  supergroupCreated: true;
}

/**
 * A message that is received by user accounts when a channel is created.
 * While bots don't receive them, they are able to see them if someone replies to them.
 * @unlisted
 */
export interface MessageChannelCreated extends _MessageBase {
  channelCreated: true;
}

/**
 * A message that is received when a chat's auto-delete timer is changed.
 * @unlisted
 */
export interface MessageAutoDeleteTimerChanged extends _MessageBase {
  /** The new auto-delete time in seconds. */
  newAutoDeleteTime: number;
}

/**
 * A message that is received when a supergroup is created as a result of a group migration.
 * @unlisted
 */
export interface MessageChatMigratedTo extends _MessageBase {
  /** The supergroup's ID. */
  chatMigratedTo: number;
}

/**
 * A message that is received when a group is migrated to a supergroup.
 * @unlisted
 */
export interface MessageChatMigratedFrom extends _MessageBase {
  /** The group's ID. */
  chatMigratedFrom: number;
}

/**
 * A message that is received when a message is pinned in a chat.
 * @unlisted
 */
export interface MessagePinnedMessage extends _MessageBase {
  /** The message that was pinned. */
  pinnedMessage: Message;
}

/**
 * A message that is received when a bot account receives a shared user.
 * @unlisted
 */
export interface MessageUserShared extends _MessageBase {
  userShared: { requestId: number; userId: number };
}

/**
 * A message that is received when a bot is allowed to message a user.
 * @unlisted
 */
export interface MessageWriteAccessAllowed extends _MessageBase {
  writeAccessAllowed: { miniAppName?: string };
}

/**
 * A message that is received when a new topic is created in a forum.
 * @unlisted
 */
export interface MessageForumTopicCreated extends _MessageBase {
  forumTopicCreated: { name: string; iconColor: string; iconCutsomEmojiId?: string };
}

/**
 * A message that is received when a topic is edited in a forum.
 * @unlisted
 */
export interface MessageForumTopicEdited extends _MessageBase {
  forumTopicEdited: { name: string; iconCutsomEmojiId?: string };
}

/**
 * A message that is received when a topic is closed in a forum.
 * @unlisted
 */
export interface MessageForumTopicClosed extends _MessageBase {
  forumTopicClosed: true;
}

/**
 * A message that is received when a topic is reopened in a forum.
 * @unlisted
 */
export interface MessageForumTopicReopened extends _MessageBase {
  forumTopicReopened: true;
}

/**
 * A message that is received when a video chat is scheduled in a chat.
 * @unlisted
 */
export interface MessageVideoChatScheduled extends _MessageBase {
  videoChatScheduled: { startDate: Date };
}

/**
 * A message that is received when a video chat is started in a chat.
 * @unlisted
 */
export interface MessageVideoChatStarted extends _MessageBase {
  videoChatStarted: true;
}

/**
 * A message that is received when a video chat is ended in a chat.
 * @unlisted
 */
export interface MessageVideoChatEnded extends _MessageBase {
  videoChatEnded: { duration: number };
}

/**
 * A message that is received when a giveaway is started in a chat.
 * @unlisted
 */
export interface MessageGiveaway extends _MessageBase {
  giveaway: Giveaway;
}

/**
 * An unsupported message.
 * @unlisted
 */
export interface MessageUnsupported extends _MessageBase {
  unsupported: true;
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
};
export function assertMessageType<T extends keyof MessageTypes>(message: Message, type: T): MessageTypes[T] {
  for (const key of keys[type]) {
    if (!(key in message) || message[key as keyof typeof message] === undefined) {
      UNREACHABLE();
    }
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
  | MessageUnsupported;

/** @unlisted */
export interface MessageGetter {
  (chatId: number, messageId: number): MaybePromise<Message | null>;
}

type Message_MessageGetter = MessageGetter | null;

async function getSender(message_: types.Message | types.MessageService, getEntity: EntityGetter) {
  if (message_.from_id instanceof types.PeerUser) {
    const entity = await getEntity(message_.from_id);
    if (entity) {
      return { from: constructUser(entity) };
    } else {
      UNREACHABLE();
    }
  } else if (message_.from_id instanceof types.PeerChannel) {
    const entity = await getEntity(message_.from_id);
    if (entity) {
      return { senderChat: constructChatP(entity) };
    } else {
      UNREACHABLE();
    }
  }
}

async function getReply(message_: types.Message | types.MessageService, chat: ChatP, getMessage: Message_MessageGetter) {
  if (getMessage && message_.reply_to instanceof types.MessageReplyHeader && message_.reply_to.reply_to_msg_id) {
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

  return { replyToMessage: undefined, threadId: undefined, isTopicMessage: undefined };
}

async function constructServiceMessage(message_: types.MessageService, chat: ChatP, getEntity: EntityGetter, getMessage: Message_MessageGetter): Promise<Message> {
  const message: _MessageBase = {
    out: message_.out ?? false,
    id: message_.id,
    chat: chat,
    date: fromUnixTimestamp(message_.date),
    isTopicMessage: false,
  };

  Object.assign(message, await getSender(message_, getEntity));

  if (message_.action instanceof types.MessageActionChatAddUser || message_.action instanceof types.MessageActionChatJoinedByLink || message_.action instanceof types.MessageActionChatJoinedByRequest) {
    const newChatMembers = new Array<User>();
    const users = "users" in message_.action ? message_.action.users : [message_.from_id && "user_id" in message_.from_id ? message_.from_id.user_id : UNREACHABLE()];
    for (const user_ of users) {
      const entity = await getEntity(new types.PeerUser({ user_id: user_ }));
      if (entity) {
        const user = constructUser(entity);
        newChatMembers.push(user);
      } else {
        UNREACHABLE();
      }
    }
    return { ...message, newChatMembers };
  } else if (message_.action instanceof types.MessageActionChatDeleteUser) {
    const entity = await getEntity(new types.PeerUser({ user_id: message_.action.user_id }));
    if (entity) {
      const user = constructUser(entity);
      const leftChatMember = user;
      return { ...message, leftChatMember };
    }
  } else if (message_.action instanceof types.MessageActionChatEditTitle) {
    const newChatTitle = message_.action.title;
    return { ...message, newChatTitle };
  } else if (message_.action instanceof types.MessageActionChatEditPhoto) {
    const newChatPhoto = constructPhoto(message_.action.photo[as](types.Photo));
    return { ...message, newChatPhoto };
  } else if (message_.action instanceof types.MessageActionChatDeletePhoto) {
    const deletedChatPhoto = true;
    return { ...message, deletedChatPhoto };
  } else if (message_.action instanceof types.MessageActionChatCreate) {
    const groupCreated = true;
    const newChatMembers = new Array<User>();
    for (const user_ of message_.action.users) {
      const entity = await getEntity(new types.PeerUser({ user_id: user_ }));
      if (entity) {
        const user = constructUser(entity);
        newChatMembers.push(user);
      }
    }
    return { ...message, groupCreated, newChatMembers };
  } else if (message_.action instanceof types.MessageActionChannelCreate) {
    if (message.chat.type == "channel") {
      const channelCreated = true;
      return { ...message, channelCreated };
    } else if (message.chat.type == "supergroup") {
      const supergroupCreated = true;
      return { ...message, supergroupCreated };
    } else {
      // UNREACHABLE();
    }
  } else if (message_.action instanceof types.MessageActionChatMigrateTo) {
    const chatMigratedTo = ZERO_CHANNEL_ID + Number(-message_.action.channel_id);
    return { ...message, chatMigratedTo };
  } else if (message_.action instanceof types.MessageActionChannelMigrateFrom) {
    const chatMigratedFrom = Number(-message_.action.chat_id);
    return { ...message, chatMigratedFrom };
  } else if (message_.action instanceof types.MessageActionPinMessage) {
    const { replyToMessage } = await getReply(message_, chat, getMessage);
    if (replyToMessage) {
      const pinnedMessage = replyToMessage;
      return { ...message, pinnedMessage };
    }
  } else if (message_.action instanceof types.MessageActionRequestedPeer) {
    const user = message_.action.peers[0][as](types.PeerUser);
    const userShared = { requestId: message_.action.button_id, userId: Number(user.user_id) };
    return { ...message, userShared };
  } else if (message_.action instanceof types.MessageActionBotAllowed) {
    const miniAppName = message_.action.app ? message_.action.app[as](types.BotApp).title : undefined;
    const writeAccessAllowed = { miniAppName };
    return { ...message, writeAccessAllowed };
  } else if (message_.action instanceof types.MessageActionTopicCreate) {
    const forumTopicCreated = {
      name: message_.action.title,
      iconColor: "#" + message_.action.icon_color.toString(16).padStart(6, "0"),
      iconCutsomEmojiId: message_.action.icon_emoji_id ? String(message_.action.icon_emoji_id) : undefined,
    };
    return { ...message, forumTopicCreated };
  } else if (message_.action instanceof types.MessageActionTopicEdit) {
    if (message_.action.closed) {
      const forumTopicClosed = true;
      return { ...message, forumTopicClosed };
    } else if (message_.action.title || message_.action.icon_emoji_id) {
      const forumTopicEdited = {
        name: message_.action.title ?? "",
        iconCutsomEmojiId: message_.action.icon_emoji_id ? String(message_.action.icon_emoji_id) : undefined,
      };
      return { ...message, forumTopicEdited };
    } else {
      const forumTopicReopened = true;
      return { ...message, forumTopicReopened };
    }
  } else if (message_.action instanceof types.MessageActionGroupCallScheduled) {
    const videoChatScheduled = { startDate: new Date(message_.action.schedule_date * 1000) };
    return { ...message, videoChatScheduled };
  } else if (message_.action instanceof types.MessageActionGroupCall) {
    if (message_.action.duration) {
      const videoChatEnded = { duration: message_.action.duration };

      return { ...message, videoChatEnded };
    } else {
      const videoChatStarted = true;
      return { ...message, videoChatStarted };
    }
  } else if (message_.action instanceof types.MessageActionSetMessagesTTL) {
    const newAutoDeleteTime = message_.action.period || 0;
    return { ...message, newAutoDeleteTime };
  }
  return { ...message, unsupported: true };
}

export async function constructMessage(
  message_: enums.Message,
  getEntity: EntityGetter,
  getMessage: Message_MessageGetter,
  getStickerSetName: StickerSetNameGetter,
  getReply_ = true,
  business?: { connectionId: string; replyToMessage?: enums.Message },
): Promise<Message> {
  if (!(message_ instanceof types.Message) && !(message_ instanceof types.MessageService)) {
    UNREACHABLE();
  }

  let link: string | undefined;
  let chat_: ChatP | null = null;
  if (message_.peer_id instanceof types.PeerUser) {
    const entity = await getEntity(message_.peer_id);
    if (entity) {
      chat_ = constructChatP(entity);
    } else {
      UNREACHABLE();
    }
  } else if (message_.peer_id instanceof types.PeerChat) {
    const entity = await getEntity(message_.peer_id);
    if (entity) {
      chat_ = constructChatP(entity);
    } else {
      UNREACHABLE();
    }
  } else if (message_.peer_id instanceof types.PeerChannel) {
    link = `https://t.me/c/${message_.peer_id.channel_id}/${message_.id}`;
    const entity = await getEntity(message_.peer_id);
    if (entity) {
      chat_ = constructChatP(entity);
    } else {
      UNREACHABLE();
    }
  } else {
    UNREACHABLE();
  }

  if (message_ instanceof types.MessageService) {
    return await constructServiceMessage(message_, chat_, getEntity, getMessage);
  }

  const message: _MessageBase = {
    out: message_.out ?? false,
    id: message_.id,
    chat: chat_,
    link,
    date: fromUnixTimestamp(message_.date),
    views: message_.views,
    forwards: message_.forwards,
    isTopicMessage: false,
    hasProtectedContent: message_.noforwards || false,
    senderBoostCount: message_.from_boosts_applied,
  };

  if (message_.reactions) {
    const recentReactions = message_.reactions.recent_reactions ?? [];
    message.reactions = message_.reactions.results.map((v) => constructMessageReaction(v, recentReactions));
  }

  if (message_.reply_to instanceof types.MessageReplyHeader && message_.reply_to.reply_to_msg_id) {
    if (message_.reply_to.quote) {
      message.replyQuote = constructReplyQuote(message_.reply_to.quote_text, message_.reply_to.quote_offset, message_.reply_to.quote_entities);
    }
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
    const viaBot = await getEntity(new types.PeerUser({ user_id: message_.via_bot_id }));
    if (viaBot) {
      message.viaBot = constructUser(viaBot);
    } else {
      UNREACHABLE();
    }
  }
  if (message_.via_business_bot_id != undefined) {
    const viaBusinessBot = await getEntity(new types.PeerUser({ user_id: message_.via_business_bot_id }));
    if (viaBusinessBot) {
      message.viaBusinessBot = constructUser(viaBusinessBot);
    } else {
      UNREACHABLE();
    }
  }

  if (message_.post_author != undefined) {
    message.authorSignature = message_.post_author;
  }

  if (message_.fwd_from instanceof types.MessageFwdHeader) {
    message.isAutomaticForward = message_.fwd_from.saved_from_peer != undefined && message_.fwd_from.saved_from_msg_id != undefined;
    message.forwardSenderName = message_.fwd_from.from_name;
    message.forwardId = message_.fwd_from.channel_post;
    message.forwardSignature = message_.fwd_from.post_author;
    message.forwardDate = fromUnixTimestamp(message_.fwd_from.date);
    if (message_.fwd_from.from_id instanceof types.PeerUser) {
      const entity = await getEntity(message_.fwd_from.from_id);
      if (entity) {
        message.forwardFrom = constructUser(entity);
      }
    } else if (message_.fwd_from.from_id instanceof types.PeerChat) {
      const entity = await getEntity(message_.fwd_from.from_id);
      if (entity) {
        message.forwardFromChat = constructChatP(entity);
      }
    } else if (message_.fwd_from.from_id instanceof types.PeerChannel) {
      const entity = await getEntity(message_.fwd_from.from_id);
      if (entity) {
        message.forwardFromChat = constructChatP(entity);
      }
    }
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
    return messageText;
  }

  const messageMedia: _MessageMediaBase = {
    ...message,
    caption: message_.message,
    captionEntities: message_.entities?.map(constructMessageEntity).filter((v): v is NonNullable<typeof v> => !!v) ?? [],
  };

  if (message_.media instanceof types.MessageMediaPhoto || message_.media instanceof types.MessageMediaDocument) {
    messageMedia.hasMediaSpoiler = message_.media.spoiler || false;
  }

  let m: Message | null = null;

  if (message_.media instanceof types.MessageMediaPhoto) {
    if (!message_.media.photo) {
      UNREACHABLE();
    }
    const photo = constructPhoto(message_.media.photo[as](types.Photo));
    m = { ...messageMedia, photo };
  } else if (message_.media instanceof types.MessageMediaDice) {
    const dice = constructDice(message_.media);
    m = { ...message, dice };
  } else if (message_.media instanceof types.MessageMediaDocument) {
    const { document } = message_.media;
    if (document instanceof types.Document) {
      const getFileId = (type: FileType): FileId => (
        {
          type,
          dcId: document.dc_id,
          fileReference: document.file_reference,
          location: { type: "common", id: document.id, accessHash: document.access_hash },
        }
      );

      const animated = document.attributes.find((v): v is types.DocumentAttributeAnimated => v instanceof types.DocumentAttributeAnimated);
      const audio = document.attributes.find((v): v is types.DocumentAttributeAudio => v instanceof types.DocumentAttributeAudio);
      const fileName = document.attributes.find((v): v is types.DocumentAttributeFilename => v instanceof types.DocumentAttributeFilename);
      const sticker = document.attributes.find((v): v is types.DocumentAttributeSticker => v instanceof types.DocumentAttributeSticker);
      const video = document.attributes.find((v): v is types.DocumentAttributeVideo => v instanceof types.DocumentAttributeVideo);

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
        const document_ = constructDocument(document, fileName ?? new types.DocumentAttributeFilename({ file_name: "Unknown" }), serializeFileId(fileId), toUniqueFileId(fileId));
        m = { ...messageMedia, document: document_ };
      }
    }
  } else if (message_.media instanceof types.MessageMediaContact) {
    const contact = constructContact(message_.media);
    m = { ...messageMedia, contact };
  } else if (message_.media instanceof types.MessageMediaGame) {
    const game = constructGame(message_.media);
    m = { ...message, game };
  } else if (message_.media instanceof types.MessageMediaPoll) {
    const poll = constructPoll(message_.media);
    m = { ...message, poll };
  } else if (message_.media instanceof types.MessageMediaVenue) {
    const venue = constructVenue(message_.media);
    m = { ...message, venue };
  } else if (message_.media instanceof types.MessageMediaGeo || message_.media instanceof types.MessageMediaGeoLive) {
    const location = constructLocation(message_.media);
    m = { ...message, location };
  } else if (message_.media instanceof types.MessageMediaWebPage) {
    const linkPreview = constructLinkPreview(message_.media, message_.invert_media);
    if (message_.message) {
      m = { ...messageText, linkPreview };
    } else {
      m = { ...message, linkPreview: { ...linkPreview, url: linkPreview.url ? linkPreview.url : UNREACHABLE() } };
    }
  } else if (message_.media instanceof types.MessageMediaGiveaway) {
    const giveaway = constructGiveaway(message_.media);
    m = { ...message, giveaway };
  }

  if (m == null) {
    const unsupported = true;
    m = { ...message, unsupported };
  }

  return cleanObject(m);
}
