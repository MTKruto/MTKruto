import { unreachable } from "../0_deps.ts";
import { cleanObject } from "../1_utilities.ts";
import { chatIdToPeer, enums, peerToChatId, types } from "../2_tl.ts";
import { EntityGetter } from "./_getters.ts";
import { ChatPhoto, ChatPhotoChat, ChatPhotoUser, constructChatPhoto } from "./0_chat_photo.ts";
import { ChatP, ChatPChannel, ChatPGroup, ChatPPrivate, ChatPSupergroup, constructChatP } from "./1_chat_p.ts";
import { StickerSetNameGetter } from "./1_sticker.ts";
import { constructMessage, Message, MessageGetter } from "./4_message.ts";

/** @unlisted */
export interface _ChatBase {
  order: string;
  lastMessage?: Omit<Message, "replyToMessage">;
  pinned: number;
}

/** @unlisted */
export interface ChatChannel extends _ChatBase, ChatPChannel {
  also?: string[];
  photo?: ChatPhotoChat;
}

/** @unlisted */
export interface ChatSupergroup extends _ChatBase, ChatPSupergroup {
  also?: string[];
  photo?: ChatPhotoChat;
}

/** @unlisted */
export interface ChatGroup extends _ChatBase, ChatPGroup {
  photo?: ChatPhotoChat;
}

/** @unlisted */
export interface ChatPrivate extends _ChatBase, ChatPPrivate {
  also?: string[];
  photo?: ChatPhotoUser;
}

/**
 * A chat with more fields.
 */
export type Chat = ChatChannel | ChatSupergroup | ChatGroup | ChatPrivate;

function getChatPAlsoPhoto(entity: enums.User | enums.Chat | undefined) {
  let chatP: ChatP;
  let also: string[] | undefined = undefined;
  if (entity instanceof types.User) {
    chatP = constructChatP(entity);
    also = "usernames" in entity ? entity.usernames?.map((v) => v.username).filter((v) => v != ("username" in chatP ? chatP.username : "")) : undefined;
  } else if (entity instanceof types.Chat) {
    chatP = constructChatP(entity);
  } else if (entity instanceof types.Channel) {
    chatP = constructChatP(entity);
    also = "usernames" in entity ? entity.usernames?.map((v) => v.username).filter((v) => v != ("username" in chatP ? chatP.username : "")) : undefined;
  } else {
    unreachable();
  }
  let photo: ChatPhoto | undefined = undefined;
  if (entity.photo instanceof types.UserProfilePhoto) {
    photo = constructChatPhoto(entity.photo, chatP.id, "access_hash" in entity ? entity.access_hash ?? 0n : 0n);
  } else if (entity.photo instanceof types.ChatPhoto) {
    photo = constructChatPhoto(entity.photo, chatP.id, "access_hash" in entity ? entity.access_hash ?? 0n : 0n);
  }
  return { chatP, also, photo };
}

export function getChatOrder(lastMessage: Omit<Message, "replyToMessage"> | undefined, pinned: number): string {
  const p = pinned == -1 ? "" : `P${100 - pinned}`;
  if (!lastMessage) {
    return p + "0";
  }
  return p + String((BigInt(Math.floor(lastMessage.date.getTime())) << 32n) + BigInt(lastMessage.id));
}
export async function constructChat(dialog: enums.Dialog, dialogs: types.messages.Dialogs | types.messages.DialogsSlice, pinnedChats: number[], getEntity: EntityGetter, getMessage: MessageGetter, getStickerSetName: StickerSetNameGetter): Promise<Chat> {
  const topMessage_ = dialogs.messages.find((v) => "id" in v && v.id == dialog.top_message);
  if (!topMessage_) {
    unreachable();
  }
  const pinned = pinnedChats.indexOf(peerToChatId(dialog.peer));
  const lastMessage = await constructMessage(topMessage_, getEntity, getMessage, getStickerSetName, false);
  const order = getChatOrder(lastMessage, pinned);
  const userId = "user_id" in dialog.peer ? dialog.peer.user_id : null;
  const chatId = "chat_id" in dialog.peer ? dialog.peer.chat_id : null;
  const channelId = "channel_id" in dialog.peer ? dialog.peer.channel_id : null;
  const chat__ = chatId != null ? dialogs.chats.find((v) => v instanceof types.Chat && v.id == chatId) : channelId != null ? dialogs.chats.find((v) => v instanceof types.Channel && v.id == channelId) : userId != null ? dialogs.users.find((v) => v instanceof types.User && v.id == userId) : unreachable();
  if (!chat__) {
    unreachable();
  }
  const chat_ = chat__ as types.User | types.Channel | types.Chat;
  const { chatP, also, photo } = getChatPAlsoPhoto(chat_);
  if (chatP.type == "group") {
    return cleanObject({ ...chatP, order, lastMessage, photo, pinned });
  } else if (chatP.type == "supergroup") {
    return cleanObject({ ...chatP, order, lastMessage, also, photo, pinned });
  } else if (chatP.type == "channel") {
    return cleanObject({ ...chatP, order, lastMessage, also, photo, pinned });
  } else if (chatP.type == "private") {
    return cleanObject({ ...chatP, order, lastMessage, also, photo: photo as ChatPhotoUser, pinned });
  } else {
    unreachable();
  }
}

export function constructChat2(entity: types.User | types.Chat | types.ChatForbidden | types.Channel | types.ChannelForbidden, pinned: number, lastMessage: Omit<Message, "replyToMessage"> | undefined): Chat {
  const chatPAlsoPhoto = getChatPAlsoPhoto(entity);
  const order = getChatOrder(lastMessage, pinned);

  const { also, photo, chatP } = chatPAlsoPhoto;
  if (chatP.type == "group") {
    return cleanObject({ ...chatP, order, lastMessage, photo, pinned });
  } else if (chatP.type == "supergroup") {
    return cleanObject({ ...chatP, order, lastMessage, also, photo, pinned });
  } else if (chatP.type == "channel") {
    return cleanObject({ ...chatP, order, lastMessage, also, photo, pinned });
  } else if (chatP.type == "private") {
    return cleanObject({ ...chatP, order, lastMessage, also, photo: photo as ChatPhotoUser, pinned });
  } else {
    unreachable();
  }
}

export async function constructChat3(chatId: number, pinned: number, lastMessage: Omit<Message, "replyToMessage"> | undefined, getEntity: EntityGetter): Promise<Chat | null> {
  const peer = chatIdToPeer(chatId);
  const entity = await getEntity(peer);
  if (entity == null) {
    return null;
  } else {
    return constructChat2(entity, pinned, lastMessage);
  }
}

export async function constructChat4(chatId: number, pinned: number, lastMessageId: number, getEntity: EntityGetter, getMessage: MessageGetter): Promise<Chat | null> {
  const lastMessage_ = lastMessageId > 0 ? await getMessage(chatId, lastMessageId) : null;
  const lastMessage = lastMessage_ == null ? undefined : lastMessage_;

  return await constructChat3(chatId, pinned, lastMessage, getEntity);
}
