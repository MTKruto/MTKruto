import { debug } from "../deps.ts";
import { UNREACHABLE } from "../utilities/0_control.ts";
import { cleanObject } from "../utilities/0_object.ts";
import { MaybePromise } from "../utilities/0_types.ts";
import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { constructForceReply, ForceReply } from "./0_force_reply.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";
import { constructReplyKeyboardRemove, ReplyKeyboardRemove } from "./0_reply_keyboard_remove.ts";
import { Chat, ChatType, constructChat } from "./1_chat.ts";
import { constructUser, User } from "./1_user.ts";
import { constructInlineKeyboardMarkup, InlineKeyboardMarkup } from "./2_inline_keyboard_markup.ts";
import { constructReplyKeyboardMarkup, ReplyKeyboardMarkup } from "./2_reply_keyboard_markup.ts";
import { constructSticker, Sticker, StickerSetNameGetter } from "./1_sticker.ts";
import { constructPhoto, Photo } from "./1_photo.ts";
import { constructDocument, Document } from "./1_document.ts";
import { constructVideo, Video } from "./1_video.ts";
import { constructVideoNote, VideoNote } from "./1_video_note.ts";
import { Animation, constructAnimation } from "./1_animation.ts";
import { Audio, constructAudio } from "./0_audio.ts";
import { constructVoice, Voice } from "./0_voice.ts";
import { constructDice, Dice } from "./0_dice.ts";
import { FileID, FileType, FileUniqueID, FileUniqueType } from "./!0_file_id.ts";
import { constructContact, Contact } from "./0_contact.ts";
import { constructGame, Game } from "./2_game.ts";
import { constructVenue, Venue } from "./0_venue.ts";
import { constructLocation, Location } from "./0_location.ts";
import { ZERO_CHANNEL_ID } from "../constants.ts";

const d = debug("types/Message");

/** This object represents a message. */
export interface Message {
  /** Unique message identifier inside this chat */
  id: number;
  /** Optional. Unique identifier of a message thread to which the message belongs; for supergroups only */
  threadId?: number;
  /** Optional. Sender of the message; empty for messages sent to channels. For backward compatibility, the field contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat. */
  from?: User;
  /** Optional. Sender of the message, sent on behalf of a chat. For example, the channel itself for channel posts, the supergroup itself for messages from anonymous group administrators, the linked channel for messages automatically forwarded to the discussion group. For backward compatibility, the field from contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat. */
  senderChat?: Chat;
  /** Date the message was sent in Unix time */
  date?: Date;
  /** Conversation the message belongs to */
  chat: Chat;
  /** Optional. For forwarded messages, sender of the original message */
  forwardFrom?: User;
  /** Optional. For messages forwarded from channels or from anonymous administrators, information about the original sender chat */
  forwardFromChat?: Chat;
  /** Optional. For messages forwarded from channels, identifier of the original message in the channel */
  forwardId?: number;
  /** Optional. For forwarded messages that were originally sent in channels or by an anonymous chat administrator, signature of the message sender if present */
  forwardSignature?: string;
  /** Optional. Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages */
  forwardSenderName?: string;
  /** Optional. For forwarded messages, date the original message was sent in Unix time */
  forwardDate?: Date;
  /** Optional. True, if the message is sent to a forum topic */
  isTopicMessage: boolean;
  /** Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group */
  isAutomaticForward?: boolean;
  /** Optional. For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply. */
  replyToMessage?: Omit<Message, "replyToMessage">;
  /** Optional. Bot through which the message was sent */
  viaBot?: User;
  /** Optional. Date the message was last edited in Unix time */
  editDate?: Date;
  /** Optional. True, if the message can't be forwarded */
  hasProtectedContent?: boolean;
  /** Optional. The unique identifier of a media message group this message belongs to */
  mediaGroupId?: string;
  /** Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator */
  authorSignature?: string;
  /** Optional. For text messages, the actual UTF-8 text of the message */
  text?: string;
  /** Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text */
  entities?: MessageEntity[];
  /** Optional. Caption for the animation, audio, document, photo, video or voice */
  caption?: string;
  /** Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption */
  captionEntities?: MessageEntity[];
  /** Optional. True, if the message media is covered by a spoiler animation */
  hasMediaSpoiler?: boolean;
  /** Optional. View count for channel posts */
  views?: number;
  /** Optional. Inline keyboard attached to the message. `login_url` buttons are represented as ordinary `url` buttons. */
  replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
  /** Optional. Message is a photo, available sizes of the photo */
  photo?: Photo;
  document?: Document;
  video?: Video;
  sticker?: Sticker;
  animation?: Animation;
  voice?: Voice;
  audio?: Audio;
  dice?: Dice;
  videoNote?: VideoNote;
  contact?: Contact;
  game?: Game;
  venue?: Venue;
  location?: Location;
  newChatMembers?: User[];
  leftChatMember?: User;
  newChatTitle?: string;
  newChatPhoto?: Photo;
  deletedChatPhoto?: true;
  groupCreated?: true;
  supergroupCreated?: true;
  channelCreated?: true;
  // TODO: messageAutoDeleteTimerChanged?: { messageAutoDeleteTime: number };
  chatMigratedTo?: number;
  chatMigratedFrom?: number;
  pinnedMessage?: Message;
  userShared?: { requestId: number; userId: number };
  writeAccessAllowed?: { webAppName?: string };
  forumTopicCreated?: { name: string; iconColor: string; iconCutsomEmojiId?: string };
  forumTopicEdited?: { name?: string; iconCutsomEmojiId?: string };
  forumTopicClosed?: Record<never, never>;
  forumTopicReopened?: Record<never, never>;
  videoChatScheduled?: { startDate: Date };
  videoChatStarted?: Record<never, never>;
  videoChatEnded?: { duration: number };
}

interface EntityGetter {
  (peer: types.PeerUser): MaybePromise<types.User | null>;
  (peer: types.PeerChat): MaybePromise<types.Chat | null>;
  (peer: types.PeerChannel): MaybePromise<types.Channel | null>;
}

type MessageGetter = { (chatId: number, messageId: number): MaybePromise<Omit<Message, "replyToMessage"> | null> } | null;

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

async function getReply(message_: types.Message | types.MessageService, chat: Chat, getMessage: MessageGetter) {
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

async function constructServiceMessage(message_: types.MessageService, chat: Chat, getEntity: EntityGetter, getMessage: MessageGetter) {
  const message: Message = {
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
  getMessage: MessageGetter,
  getStickerSetName: StickerSetNameGetter,
) {
  if (!(message_ instanceof types.Message) && !(message_ instanceof types.MessageService)) {
    UNREACHABLE();
  }

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
    id: message_.id,
    chat: chat_,
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
    } else {
      UNREACHABLE();
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

        const animated = document.attributes.find((v) => v instanceof types.DocumentAttributeAnimated) as types.DocumentAttributeAnimated | undefined;
        const audio = document.attributes.find((v) => v instanceof types.DocumentAttributeAudio) as types.DocumentAttributeAudio | undefined;
        const fileName = document.attributes.find((v) => v instanceof types.DocumentAttributeFilename) as types.DocumentAttributeFilename | undefined;
        const sticker = document.attributes.find((v) => v instanceof types.DocumentAttributeSticker) as types.DocumentAttributeSticker | undefined;
        const video = document.attributes.find((v) => v instanceof types.DocumentAttributeVideo) as types.DocumentAttributeVideo | undefined;

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
    } else if (message_.media instanceof types.MessageMediaVenue) {
      message.venue = constructVenue(message_.media);
    } else if (message_.media instanceof types.MessageMediaGeo || message_.media instanceof types.MessageMediaGeoLive) {
      message.location = constructLocation(message_.media);
    } else {
      console.log(message_.media);
      // not implemented
      UNREACHABLE();
    }
  }

  return cleanObject(message);
}
