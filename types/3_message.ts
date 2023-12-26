import { debug } from "../0_deps.ts";
import { cleanObject, MaybePromise, UNREACHABLE, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { as, enums, types } from "../2_tl.ts";
import { FileID, FileType, FileUniqueID, FileUniqueType } from "./0__file_id.ts";
import { Audio, constructAudio } from "./0_audio.ts";
import { constructContact, Contact } from "./0_contact.ts";
import { constructDice, Dice } from "./0_dice.ts";
import { constructForceReply, ForceReply } from "./0_force_reply.ts";
import { constructLocation, Location } from "./0_location.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";
import { constructReplyKeyboardRemove, ReplyKeyboardRemove } from "./0_reply_keyboard_remove.ts";
import { constructVenue, Venue } from "./0_venue.ts";
import { constructVoice, Voice } from "./0_voice.ts";
import { EntityGetter } from "./1__getters.ts";
import { Animation, constructAnimation } from "./1_animation.ts";
import { ChatP, constructChatP } from "./1_chat_p.ts";
import { constructDocument, Document } from "./1_document.ts";
import { constructReplyQuote, ReplyQuote } from "./1_reply_quote.ts";
import { constructPhoto, Photo } from "./1_photo.ts";
import { constructPoll, Poll } from "./1_poll.ts";
import { constructSticker, Sticker, StickerSetNameGetter } from "./1_sticker.ts";
import { constructUser, User } from "./1_user.ts";
import { constructVideoNote, VideoNote } from "./1_video_note.ts";
import { constructVideo, Video } from "./1_video.ts";
import { constructMessageReaction, MessageReaction } from "./1_message_reaction.ts";
import { constructGiveaway, Giveaway } from "./1_giveaway.ts";
import { constructGame, Game } from "./2_game.ts";
import { constructReplyKeyboardMarkup, ReplyKeyboardMarkup } from "./2_reply_keyboard_markup.ts";
import { constructInlineKeyboardMarkup, InlineKeyboardMarkup } from "./3_inline_keyboard_markup.ts";

const d = debug("types/Message");

/** Properties shared between all message types. */
export interface MessageBase {
  out: boolean;
  id: number;
  threadId?: number;
  from?: User;
  senderChat?: ChatP;
  date: Date;
  chat: ChatP;
  link?: string;
  forwardFrom?: User;
  forwardFromChat?: ChatP;
  forwardId?: number;
  forwardSignature?: string;
  forwardSenderName?: string;
  forwardDate?: Date;
  isTopicMessage: boolean;
  isAutomaticForward?: boolean;
  replyToMessage?: Message;
  replyToMessageId?: number;
  reactions?: MessageReaction[];
  replyQuote?: ReplyQuote;
  viaBot?: User;
  editDate?: Date;
  hasProtectedContent?: boolean;
  mediaGroupId?: string;
  authorSignature?: string;
  views?: number;
  replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/** Properties shared between media message types. */
export interface MessageMediaBase extends MessageBase {
  caption?: string;
  captionEntities?: MessageEntity[];
  hasMediaSpoiler?: boolean;
}

// begin message types

export interface MessageText extends MessageBase {
  text: string;
  entities: MessageEntity[];
}

export interface MessagePhoto extends MessageMediaBase {
  photo: Photo;
}

export interface MessageDocument extends MessageMediaBase {
  document: Document;
}

export interface MessageVideo extends MessageMediaBase {
  video: Video;
}

export interface MessageSticker extends MessageBase {
  sticker: Sticker;
}

export interface MessageAnimation extends MessageMediaBase {
  animation: Animation;
}

export interface MessageVoice extends MessageMediaBase {
  voice: Voice;
}

export interface MessageAudio extends MessageMediaBase {
  audio: Audio;
}

export interface MessageDice extends MessageBase {
  dice: Dice;
}

export interface MessageVideoNote extends MessageBase {
  videoNote: VideoNote;
}

export interface MessageContact extends MessageBase {
  contact: Contact;
}

export interface MessageGame extends MessageBase {
  game: Game;
}

export interface MessagePoll extends MessageBase {
  poll: Poll;
}

export interface MessageVenue extends MessageBase {
  venue: Venue;
}

export interface MessageLocation extends MessageBase {
  location: Location;
}

export interface MessageNewChatMembers extends MessageBase {
  newChatMembers: User[];
}

export interface MessageLeftChatMember extends MessageBase {
  leftChatMember: User;
}

export interface MessageNewChatTitle extends MessageBase {
  newChatTitle: string;
}

export interface MessageNewChatPhoto extends MessageBase {
  newChatPhoto: Photo;
}

export interface MessageDeletedChatPhoto extends MessageBase {
  deletedChatPhoto: true;
}

export interface MessageGroupCreated extends MessageBase {
  groupCreated: true;
  newChatMembers: User[];
}

export interface MessageSupergroupCreated extends MessageBase {
  supergroupCreated: true;
}

export interface MessageChannelCreated extends MessageBase {
  channelCreated: true;
}

export interface MessageAutoDeleteTimerChanged extends MessageBase {
  newAutoDeleteTime: number;
}

export interface MessageChatMigratedTo extends MessageBase {
  chatMigratedTo: number;
}

export interface MessageChatMigratedFrom extends MessageBase {
  chatMigratedFrom: number;
}

export interface MessagePinnedMessage extends MessageBase {
  pinnedMessage: Message;
}

export interface MessageUserShared extends MessageBase {
  userShared: { requestId: number; userId: number };
}

export interface MessageWriteAccessAllowed extends MessageBase {
  writeAccessAllowed: { webAppName?: string };
}

export interface MessageForumTopicCreated extends MessageBase {
  forumTopicCreated: { name: string; iconColor: string; iconCutsomEmojiId?: string };
}

export interface MessageForumTopicEdited extends MessageBase {
  forumTopicEdited: { name: string; iconCutsomEmojiId?: string };
}

export interface MessageForumTopicClosed extends MessageBase {
  forumTopicClosed: true;
}

export interface MessageForumTopicReopened extends MessageBase {
  forumTopicReopened: true;
}

export interface MessageVideoChatScheduled extends MessageBase {
  videoChatScheduled: { startDate: Date };
}

export interface MessageVideoChatStarted extends MessageBase {
  videoChatStarted: true;
}

export interface MessageVideoChatEnded extends MessageBase {
  videoChatEnded: { duration: number };
}

export interface MessageGiveaway extends MessageBase {
  giveaway: Giveaway;
}

// message type map

export interface MessageTypes {
  text: MessageText;
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
}

const keys: Record<keyof MessageTypes, [string, ...string[]]> = {
  text: ["text"],
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
};
export function assertMessageType<T extends keyof MessageTypes>(message: Message, type: T) {
  for (const key of keys[type]) {
    if (!(key in message) || message[key as keyof typeof message] === undefined) {
      UNREACHABLE();
    }
  }
  return message as MessageTypes[T];
}

export type Message =
  | MessageText
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
  | MessageGiveaway;

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
      d("couldn't get replied message");
    }
  }

  return { replyToMessage: undefined, threadId: undefined, isTopicMessage: undefined };
}

async function constructServiceMessage(message_: types.MessageService, chat: ChatP, getEntity: EntityGetter, getMessage: Message_MessageGetter): Promise<Message> {
  const message: MessageBase = {
    out: message_.out ?? false,
    id: message_.id,
    chat: chat,
    date: new Date(message_.date * 1_000),
    isTopicMessage: false,
  };

  Object.assign(message, await getSender(message_, getEntity));

  if (message_.action instanceof types.MessageActionChatAddUser) {
    const newChatMembers = new Array<User>();
    for (const user_ of message_.action.users) {
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
    } else {
      UNREACHABLE();
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
      } else {
        UNREACHABLE();
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
      UNREACHABLE();
    }
  } else if (message_.action instanceof types.MessageActionChatMigrateTo) {
    const chatMigratedTo = ZERO_CHANNEL_ID + Number(-message_.action.channel_id);
    return { ...message, chatMigratedTo };
  } else if (message_.action instanceof types.MessageActionChannelMigrateFrom) {
    const chatMigratedFrom = Number(-message_.action.chat_id);
    return { ...message, chatMigratedFrom };
  } else if (message_.action instanceof types.MessageActionPinMessage) {
    const { replyToMessage } = await getReply(message_, chat, getMessage);
    if (!replyToMessage) {
      UNREACHABLE();
    }
    const pinnedMessage = replyToMessage;
    return { ...message, pinnedMessage };
  } else if (message_.action instanceof types.MessageActionRequestedPeer) {
    const user = message_.action.peers[0][as](types.PeerUser);
    const userShared = { requestId: message_.action.button_id, userId: Number(user.user_id) };
    return { ...message, userShared };
  } else if (message_.action instanceof types.MessageActionBotAllowed) {
    const webAppName = message_.action.app ? message_.action.app[as](types.BotApp).title : undefined;
    const writeAccessAllowed = { webAppName };
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
  } else {
    UNREACHABLE();
  }
}

export async function constructMessage(
  message_: enums.Message,
  getEntity: EntityGetter,
  getMessage: Message_MessageGetter,
  getStickerSetName: StickerSetNameGetter,
  getReply_ = true,
) {
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

  const message: MessageBase = {
    out: message_.out ?? false,
    id: message_.id,
    chat: chat_,
    link,
    date: new Date(message_.date * 1_000),
    views: message_.views,
    isTopicMessage: false,
    hasProtectedContent: message_.noforwards || false,
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
  if (getReply_) {
    Object.assign(message, await getReply(message_, chat_, getMessage));
  }
  Object.assign(message, await getSender(message_, getEntity));

  if (message_.reply_markup) {
    if (message_.reply_markup instanceof types.ReplyKeyboardMarkup) {
      message.replyMarkup = constructReplyKeyboardMarkup(message_.reply_markup);
    } else if (message_.reply_markup instanceof types.ReplyInlineMarkup) {
      message.replyMarkup = constructInlineKeyboardMarkup(message_.reply_markup);
    } else if (message_.reply_markup instanceof types.ReplyKeyboardHide) {
      message.replyMarkup = constructReplyKeyboardRemove(message_.reply_markup);
    } else if (message_.reply_markup instanceof types.ReplyKeyboardForceReply) {
      message.replyMarkup = constructForceReply(message_.reply_markup);
    } else {
      UNREACHABLE();
    }
  }

  if (message_.via_bot_id != undefined) {
    const viaBot = await getEntity(new types.PeerUser({ user_id: message_.via_bot_id }));
    if (viaBot) {
      message.viaBot = constructUser(viaBot);
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
    message.forwardDate = new Date(message_.fwd_from.date * 1_000);
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
    message.editDate = new Date(message_.edit_date * 1_000);
  }

  if (message_.message && message_.media === undefined) {
    return {
      ...message,
      text: message_.message,
      entities: message_.entities?.map(constructMessageEntity).filter((v): v is NonNullable<typeof v> => !!v) ?? [],
    };
  }

  const messageMedia: MessageMediaBase = {
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
      const getFileId = (type: FileType) =>
        new FileID(null, null, type, document.dc_id, {
          mediaId: document.id,
          accessHash: document.access_hash,
          fileReference: document.file_reference,
        }).encode();
      const fileUniqueId = new FileUniqueID(FileUniqueType.Document, { mediaId: document.id }).encode();

      const animated = document.attributes.find((v): v is types.DocumentAttributeAnimated => v instanceof types.DocumentAttributeAnimated);
      const audio = document.attributes.find((v): v is types.DocumentAttributeAudio => v instanceof types.DocumentAttributeAudio);
      const fileName = document.attributes.find((v): v is types.DocumentAttributeFilename => v instanceof types.DocumentAttributeFilename);
      const sticker = document.attributes.find((v): v is types.DocumentAttributeSticker => v instanceof types.DocumentAttributeSticker);
      const video = document.attributes.find((v): v is types.DocumentAttributeVideo => v instanceof types.DocumentAttributeVideo);

      if (animated) {
        const animation = constructAnimation(document, video, fileName, getFileId(FileType.Animation), fileUniqueId);
        m = { ...messageMedia, animation };
      } else if (video) {
        if (video.round_message) {
          const videoNote = constructVideoNote(document, video, getFileId(FileType.VideoNote), fileUniqueId);
          m = { ...message, videoNote };
        } else {
          const video_ = constructVideo(document, video, fileName?.file_name, getFileId(FileType.Video), fileUniqueId);
          m = { ...messageMedia, video: video_ };
        }
      } else if (audio) {
        if (audio.voice) {
          const voice = constructVoice(document, audio, getFileId(FileType.Voice), fileUniqueId);
          m = { ...messageMedia, voice };
        } else {
          const audio_ = constructAudio(document, audio, getFileId(FileType.Audio), fileUniqueId);
          m = { ...messageMedia, audio: audio_ };
        }
      } else if (sticker) {
        const sticker = await constructSticker(document, getFileId(FileType.Sticker), fileUniqueId, getStickerSetName);
        m = { ...message, sticker };
      } else if (fileName) {
        const document_ = constructDocument(document, fileName, getFileId(FileType.Document), fileUniqueId);
        m = { ...messageMedia, document: document_ };
      } else {
        const document_ = constructDocument(document, new types.DocumentAttributeFilename({ file_name: "Unknown" }), getFileId(FileType.Document), fileUniqueId);
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
    UNREACHABLE(); // TODO: implement
  } else if (message_.media instanceof types.MessageMediaGiveaway) {
    const giveaway = constructGiveaway(message_.media);
    m = { ...message, giveaway };
  } else {
    // not implemented
    UNREACHABLE();
  }

  if (m == null) {
    UNREACHABLE();
  }

  return cleanObject(m);
}
