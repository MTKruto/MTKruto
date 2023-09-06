import { debug } from "../0_deps.ts";
import { cleanObject, MaybePromise, UNREACHABLE } from "../1_utilities.ts";
import { as, types } from "../2_tl.ts";
import { ZERO_CHANNEL_ID } from "../4_constants.ts";
import { EntityGetter } from "./!0_misc.ts";
import { FileID, FileType, FileUniqueID, FileUniqueType } from "./!0_file_id.ts";
import { constructForceReply, ForceReply } from "./0_force_reply.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";
import { Audio, constructAudio } from "./0_audio.ts";
import { constructContact, Contact } from "./0_contact.ts";
import { constructVoice, Voice } from "./0_voice.ts";
import { constructVenue, Venue } from "./0_venue.ts";
import { constructLocation, Location } from "./0_location.ts";
import { constructDice, Dice } from "./0_dice.ts";
import { constructReplyKeyboardRemove, ReplyKeyboardRemove } from "./0_reply_keyboard_remove.ts";
import { Chat, ChatType, constructChat } from "./1_chat.ts";
import { constructPhoto, Photo } from "./1_photo.ts";
import { constructDocument, Document } from "./1_document.ts";
import { constructVideo, Video } from "./1_video.ts";
import { constructVideoNote, VideoNote } from "./1_video_note.ts";
import { Animation, constructAnimation } from "./1_animation.ts";
import { constructUser, User } from "./1_user.ts";
import { constructPoll, Poll } from "./1_poll.ts";
import { constructSticker, Sticker, StickerSetNameGetter } from "./1_sticker.ts";
import { constructInlineKeyboardMarkup, InlineKeyboardMarkup } from "./2_inline_keyboard_markup.ts";
import { constructReplyKeyboardMarkup, ReplyKeyboardMarkup } from "./2_reply_keyboard_markup.ts";
import { constructGame, Game } from "./2_game.ts";

const d = debug("types/Message");

/** This object represents a message. */
export interface Message {
  /** Whether the message is outgoing */
  out: boolean;
  /** Unique message identifier inside this chat */
  id: number;
  /** Unique identifier of a message thread to which the message belongs; for supergroups only */
  threadId?: number;
  /** Sender of the message; empty for messages sent to channels. For backward compatibility, the field contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat. */
  from?: User;
  /** Sender of the message, sent on behalf of a chat. For example, the channel itself for channel posts, the supergroup itself for messages from anonymous group administrators, the linked channel for messages automatically forwarded to the discussion group. For backward compatibility, the field from contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat. */
  senderChat?: Chat;
  /** Date the message was sent in Unix time */
  date?: Date;
  /** Conversation the message belongs to */
  chat: Chat;
  /** A link to the message */
  link?: string;
  /** For forwarded messages, sender of the original message */
  forwardFrom?: User;
  /** For messages forwarded from channels or from anonymous administrators, information about the original sender chat */
  forwardFromChat?: Chat;
  /** For messages forwarded from channels, identifier of the original message in the channel */
  forwardId?: number;
  /** For forwarded messages that were originally sent in channels or by an anonymous chat administrator, signature of the message sender if present */
  forwardSignature?: string;
  /** Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages */
  forwardSenderName?: string;
  /** For forwarded messages, date the original message was sent in Unix time */
  forwardDate?: Date;
  /** True, if the message is sent to a forum topic */
  isTopicMessage: boolean;
  /** True, if the message is a channel post that was automatically forwarded to the connected discussion group */
  isAutomaticForward?: boolean;
  /** For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply. */
  replyToMessage?: Omit<Message, "replyToMessage">;
  /** Bot through which the message was sent */
  viaBot?: User;
  /** Date the message was last edited in Unix time */
  editDate?: Date;
  /** True, if the message can't be forwarded */
  hasProtectedContent?: boolean;
  /** The unique identifier of a media message group this message belongs to */
  mediaGroupId?: string;
  /** Signature of the post author for messages in channels, or the custom title of an anonymous group administrator */
  authorSignature?: string;
  /** For text messages, the actual UTF-8 text of the message */
  text?: string;
  /** For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text */
  entities?: MessageEntity[];
  /** Caption for the animation, audio, document, photo, video or voice */
  caption?: string;
  /** For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption */
  captionEntities?: MessageEntity[];
  /** True, if the message media is covered by a spoiler animation */
  hasMediaSpoiler?: boolean;
  /** View count for channel posts */
  views?: number;
  /** Inline keyboard attached to the message. `login_url` buttons are represented as ordinary `url` buttons. */
  replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
  /** Message is a photo, available sizes of the photo */
  photo?: Photo;
  /** Message is a general file, information about the file */
  document?: Document;
  /** Message is a video, information about the video */
  video?: Video;
  /** Message is a sticker, information about the sticker */
  sticker?: Sticker;
  /** Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set */
  animation?: Animation;
  /** Message is a voice message, information about the file */
  voice?: Voice;
  /** Message is an audio file, information about the file */
  audio?: Audio;
  /** Message is a dice with random value */
  dice?: Dice;
  /** Message is a [video note](https://telegram.org/blog/video-messages-and-telescope), information about the video message */
  videoNote?: VideoNote;
  /** Message is a shared contact, information about the contact */
  contact?: Contact;
  /** Message is a game, information about the game. */
  game?: Game;
  /** New poll state. Bots receive only updates about stopped polls and polls, which were sent by the bot. */
  poll?: Poll;
  /** Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set */
  venue?: Venue;
  /** Message is a shared location, information about the location */
  location?: Location;
  /** New members that were added to the group or supergroup and information about them (the bot itself may be one of these members) */
  newChatMembers?: User[];
  /** A member was removed from the group, information about them (this member may be the bot itself) */
  leftChatMember?: User;
  /** A chat title was changed to this value */
  newChatTitle?: string;
  /** A chat photo was change to this value */
  newChatPhoto?: Photo;
  /** Service message: the chat photo was deleted */
  deletedChatPhoto?: true;
  /** Service message: the group has been created */
  groupCreated?: true;
  /** Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup. */
  supergroupCreated?: true;
  /** Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel. */
  channelCreated?: true;
  // TODO: messageAutoDeleteTimerChanged?: { messageAutoDeleteTime: number };
  /** The group has been migrated to a supergroup with the specified identifier */
  chatMigratedTo?: number;
  /** The supergroup has been migrated from a group with the specified identifier */
  chatMigratedFrom?: number;
  /** Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply. */
  pinnedMessage?: Message;
  /** Service message: a user was shared with the bot */
  userShared?: { requestId: number; userId: number };
  /** Service message: the user allowed the bot added to the attachment menu to write messages */
  writeAccessAllowed?: { webAppName?: string };
  /** Service message: forum topic created */
  forumTopicCreated?: { name: string; iconColor: string; iconCutsomEmojiId?: string };
  /** Service message: forum topic edited */
  forumTopicEdited?: { name?: string; iconCutsomEmojiId?: string };
  /** Service message: forum topic closed */
  forumTopicClosed?: Record<never, never>;
  /** Service message: forum topic reopened */
  forumTopicReopened?: Record<never, never>;
  /** Service message: video chat scheduled */
  videoChatScheduled?: { startDate: Date };
  /** Service message: video chat started */
  videoChatStarted?: Record<never, never>;
  /** Service message: video chat ended */
  videoChatEnded?: { duration: number };
}

export interface MessageGetter<O extends keyof Message | null = null> {
  (chatId: number, messageId: number): MaybePromise<(O extends null ? Message : Omit<Message, "replyToMessage">) | null>;
}

type Message_MessageGetter = MessageGetter<"replyToMessage"> | null;

async function getSender(message_: types.Message | types.MessageService, getEntity: EntityGetter) {
  if (message_.fromId instanceof types.PeerUser) {
    const entity = await getEntity(message_.fromId);
    if (entity) {
      return { from: constructUser(entity) };
    } else {
      UNREACHABLE();
    }
  } else if (message_.fromId instanceof types.PeerChannel) {
    const entity = await getEntity(message_.fromId);
    if (entity) {
      return { senderChat: constructChat(entity) };
    } else {
      UNREACHABLE();
    }
  }
}

async function getReply(message_: types.Message | types.MessageService, chat: Chat, getMessage: Message_MessageGetter) {
  if (getMessage && message_.replyTo instanceof types.MessageReplyHeader) {
    let isTopicMessage = false;
    if (message_.replyTo.forumTopic) {
      isTopicMessage = true;
    }
    const replyToMessage = await getMessage(chat.id, message_.replyTo.replyToMsgId);
    if (replyToMessage) {
      return { replyToMessage, threadId: message_.replyTo.replyToTopId, isTopicMessage };
    } else {
      d("couldn't get replied message");
    }
  }

  return { replyToMessage: undefined, threadId: undefined, isTopicMessage: undefined };
}

async function constructServiceMessage(message_: types.MessageService, chat: Chat, getEntity: EntityGetter, getMessage: Message_MessageGetter) {
  const message: Message = {
    out: message_.out ?? false,
    id: message_.id,
    chat: chat,
    date: new Date(message_.date * 1_000),
    isTopicMessage: false,
  };

  Object.assign(message, await getSender(message_, getEntity));

  if (message_.action instanceof types.MessageActionChatAddUser) {
    message.newChatMembers = [];
    for (const user_ of message_.action.users) {
      const entity = await getEntity(new types.PeerUser({ userId: user_ }));
      if (entity) {
        const user = constructUser(entity);
        message.newChatMembers.push(user);
      } else {
        UNREACHABLE();
      }
    }
  } else if (message_.action instanceof types.MessageActionChatDeleteUser) {
    const entity = await getEntity(new types.PeerUser({ userId: message_.action.userId }));
    if (entity) {
      const user = constructUser(entity);
      message.leftChatMember = user;
    } else {
      UNREACHABLE();
    }
  } else if (message_.action instanceof types.MessageActionChatEditTitle) {
    message.newChatTitle = message_.action.title;
  } else if (message_.action instanceof types.MessageActionChatEditPhoto) {
    message.newChatPhoto = constructPhoto(message_.action.photo[as](types.Photo));
  } else if (message_.action instanceof types.MessageActionChatDeletePhoto) {
    message.deletedChatPhoto = true;
  } else if (message_.action instanceof types.MessageActionChatCreate) {
    message.groupCreated = true;
    message.newChatMembers = [];
    for (const user_ of message_.action.users) {
      const entity = await getEntity(new types.PeerUser({ userId: user_ }));
      if (entity) {
        const user = constructUser(entity);
        message.newChatMembers.push(user);
      } else {
        UNREACHABLE();
      }
    }
  } else if (message_.action instanceof types.MessageActionChannelCreate) {
    if (message.chat.type == ChatType.Channel) {
      message.channelCreated = true;
    } else if (message.chat.type == ChatType.Supergroup) {
      message.supergroupCreated = true;
    } else {
      UNREACHABLE();
    }
  } else if (message_.action instanceof types.MessageActionChatMigrateTo) {
    message.chatMigratedTo = ZERO_CHANNEL_ID + Number(-message_.action.channelId);
  } else if (message_.action instanceof types.MessageActionChannelMigrateFrom) {
    message.chatMigratedFrom = Number(-message_.action.chatId);
  } else if (message_.action instanceof types.MessageActionPinMessage) {
    const { replyToMessage } = await getReply(message_, chat, getMessage);
    message.pinnedMessage = replyToMessage;
  } else if (message_.action instanceof types.MessageActionRequestedPeer) {
    const user = message_.action.peer[as](types.PeerUser);
    message.userShared = { requestId: message_.action.buttonId, userId: Number(user.userId) };
  } else if (message_.action instanceof types.MessageActionBotAllowed) {
    const webAppName = message_.action.app ? message_.action.app[as](types.BotApp).title : undefined;
    message.writeAccessAllowed = { webAppName };
  } else if (message_.action instanceof types.MessageActionTopicCreate) {
    message.forumTopicCreated = {
      name: message_.action.title,
      iconColor: "#" + message_.action.iconColor.toString(16).padStart(6, "0"),
      iconCutsomEmojiId: message_.action.iconEmojiId ? String(message_.action.iconEmojiId) : undefined,
    };
  } else if (message_.action instanceof types.MessageActionTopicEdit) {
    if (message_.action.closed) {
      message.forumTopicClosed = {};
    } else if (message_.action.title || message_.action.iconEmojiId) {
      message.forumTopicEdited = {
        name: message_.action.title,
        iconCutsomEmojiId: message_.action.iconEmojiId ? String(message_.action.iconEmojiId) : undefined,
      };
    } else {
      message.forumTopicReopened = {};
    }
  } else if (message_.action instanceof types.MessageActionGroupCallScheduled) {
    message.videoChatScheduled = { startDate: new Date(message_.action.scheduleDate * 1000) };
  } else if (message_.action instanceof types.MessageActionGroupCall) {
    if (message_.action.duration) {
      message.videoChatEnded = { duration: message_.action.duration };
    } else {
      message.videoChatStarted = {};
    }
  }

  return cleanObject(message);
}

export async function constructMessage(
  message_: types.TypeMessage,
  getEntity: EntityGetter,
  getMessage: Message_MessageGetter,
  getStickerSetName: StickerSetNameGetter,
) {
  if (!(message_ instanceof types.Message) && !(message_ instanceof types.MessageService)) {
    UNREACHABLE();
  }

  let link: string | undefined;
  let chat_: Chat | null = null;
  if (message_.peerId instanceof types.PeerUser) {
    const entity = await getEntity(message_.peerId);
    if (entity) {
      chat_ = constructChat(entity);
    } else {
      UNREACHABLE();
    }
  } else if (message_.peerId instanceof types.PeerChat) {
    const entity = await getEntity(message_.peerId);
    if (entity) {
      chat_ = constructChat(entity);
    } else {
      UNREACHABLE();
    }
  } else if (message_.peerId instanceof types.PeerChannel) {
    link = `https://t.me/c/${message_.peerId.channelId}/${message_.id}`;
    const entity = await getEntity(message_.peerId);
    if (entity) {
      chat_ = constructChat(entity);
    } else {
      UNREACHABLE();
    }
  } else {
    UNREACHABLE();
  }

  if (message_ instanceof types.MessageService) {
    return await constructServiceMessage(message_, chat_, getEntity, getMessage);
  }

  const message: Message = {
    out: message_.out ?? false,
    id: message_.id,
    chat: chat_,
    link,
    date: new Date(message_.date * 1_000),
    views: message_.views,
    isTopicMessage: false,
    hasProtectedContent: message_.noforwards || false,
  };

  Object.assign(message, await getReply(message_, chat_, getMessage));
  Object.assign(message, await getSender(message_, getEntity));

  if (message_.media instanceof types.MessageMediaPhoto || message_.media instanceof types.MessageMediaDocument) {
    message.hasMediaSpoiler = message_.media.spoiler || false;
  }

  if (message_.groupedId != undefined) {
    message.mediaGroupId = String(message_.groupedId);
  }

  if (message_.message) {
    if (message_.media == undefined) {
      message.text = message_.message;
    } else {
      message.caption = message_.message;
    }
  }
  if (message_.entities != undefined) {
    if (message_.media == undefined) {
      message.entities = message_.entities.map(constructMessageEntity).filter((v) => v) as MessageEntity[];
    } else {
      message.captionEntities = message_.entities.map(constructMessageEntity).filter((v) => v) as MessageEntity[];
    }
  }

  if (message_.editDate != undefined) {
    message.editDate = new Date(message_.editDate * 1_000);
  }

  if (message_.replyMarkup) {
    if (message_.replyMarkup instanceof types.ReplyKeyboardMarkup) {
      message.replyMarkup = constructReplyKeyboardMarkup(message_.replyMarkup);
    } else if (message_.replyMarkup instanceof types.ReplyInlineMarkup) {
      message.replyMarkup = constructInlineKeyboardMarkup(message_.replyMarkup);
    } else if (message_.replyMarkup instanceof types.ReplyKeyboardHide) {
      message.replyMarkup = constructReplyKeyboardRemove(message_.replyMarkup);
    } else if (message_.replyMarkup instanceof types.ReplyKeyboardForceReply) {
      message.replyMarkup = constructForceReply(message_.replyMarkup);
    } else {
      UNREACHABLE();
    }
  }

  if (message_.viaBotId != undefined) {
    const viaBot = await getEntity(new types.PeerUser({ userId: message_.viaBotId }));
    if (viaBot) {
      message.viaBot = constructUser(viaBot);
    } else {
      UNREACHABLE();
    }
  }

  if (message_.postAuthor != undefined) {
    message.authorSignature = message_.postAuthor;
  }

  if (message_.fwdFrom instanceof types.MessageFwdHeader) {
    message.isAutomaticForward = message_.fwdFrom.savedFromPeer != undefined && message_.fwdFrom.savedFromMsgId != undefined;
    message.forwardSenderName = message_.fwdFrom.fromName;
    message.forwardId = message_.fwdFrom.channelPost;
    message.forwardSignature = message_.fwdFrom.postAuthor;
    message.forwardDate = new Date(message_.date * 1_000);
    if (message_.fwdFrom.fromId instanceof types.PeerUser) {
      const entity = await getEntity(message_.fwdFrom.fromId);
      if (entity) {
        message.forwardFrom = constructUser(entity);
      } else {
        UNREACHABLE();
      }
    } else if (message_.fwdFrom.fromId instanceof types.PeerChat) {
      const entity = await getEntity(message_.fwdFrom.fromId);
      if (entity) {
        message.forwardFromChat = constructChat(entity);
      } else {
        UNREACHABLE();
      }
    } else if (message_.fwdFrom.fromId instanceof types.PeerChannel) {
      const entity = await getEntity(message_.fwdFrom.fromId);
      if (entity) {
        message.forwardFromChat = constructChat(entity);
      } else {
        UNREACHABLE();
      }
    }
  }

  if (message_.media) {
    if (message_.media instanceof types.MessageMediaPhoto) {
      if (message_.media.photo instanceof types.Photo) {
        message.photo = constructPhoto(message_.media.photo);
      }
    } else if (message_.media instanceof types.MessageMediaDice) {
      message.dice = constructDice(message_.media);
    } else if (message_.media instanceof types.MessageMediaDocument) {
      const { document } = message_.media;
      if (document instanceof types.Document) {
        const getFileId = (type: FileType) =>
          new FileID(null, null, type, document.dcId, {
            mediaId: document.id,
            accessHash: document.accessHash,
            fileReference: document.fileReference,
          }).encode();
        const fileUniqueId = new FileUniqueID(FileUniqueType.Document, { mediaId: document.id }).encode();

        const animated = document.attributes.find((v): v is types.DocumentAttributeAnimated => v instanceof types.DocumentAttributeAnimated);
        const audio = document.attributes.find((v): v is types.DocumentAttributeAudio => v instanceof types.DocumentAttributeAudio);
        const fileName = document.attributes.find((v): v is types.DocumentAttributeFilename => v instanceof types.DocumentAttributeFilename);
        const sticker = document.attributes.find((v): v is types.DocumentAttributeSticker => v instanceof types.DocumentAttributeSticker);
        const video = document.attributes.find((v): v is types.DocumentAttributeVideo => v instanceof types.DocumentAttributeVideo);

        if (animated) {
          message.animation = constructAnimation(document, video, fileName, getFileId(FileType.Animation), fileUniqueId);
        } else if (video) {
          if (video.roundMessage) {
            message.videoNote = constructVideoNote(document, video, getFileId(FileType.VideoNote), fileUniqueId);
          } else {
            message.video = constructVideo(document, video, fileName?.fileName, getFileId(FileType.Video), fileUniqueId);
          }
        } else if (audio) {
          if (audio.voice) {
            message.voice = constructVoice(document, audio, getFileId(FileType.Voice), fileUniqueId);
          } else {
            message.audio = constructAudio(document, audio, getFileId(FileType.Audio), fileUniqueId);
          }
        } else if (sticker) {
          message.sticker = await constructSticker(document, getFileId(FileType.Sticker), fileUniqueId, getStickerSetName);
        } else if (fileName) {
          message.document = constructDocument(document, fileName, getFileId(FileType.Document), fileUniqueId);
        } else {
          UNREACHABLE();
        }
      }
    } else if (message_.media instanceof types.MessageMediaContact) {
      message.contact = constructContact(message_.media);
    } else if (message_.media instanceof types.MessageMediaGame) {
      message.game = constructGame(message_.media);
    } else if (message_.media instanceof types.MessageMediaPoll) {
      message.poll = constructPoll(message_.media);
    } else if (message_.media instanceof types.MessageMediaVenue) {
      message.venue = constructVenue(message_.media);
    } else if (message_.media instanceof types.MessageMediaGeo || message_.media instanceof types.MessageMediaGeoLive) {
      message.location = constructLocation(message_.media);
    } else if (message_.media instanceof types.MessageMediaWebPage) {
      //
    } else {
      // not implemented
      UNREACHABLE();
    }
  }

  return cleanObject(message);
}
