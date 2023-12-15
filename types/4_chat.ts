import { cleanObject, UNREACHABLE, ZERO_CHANNEL_ID } from "../1_utilities.ts";
import { enums, peerToChatId, types } from "../2_tl.ts";
import { ChatP, constructChatP } from "./1_chat_p.ts";
import { ChatPhoto, constructChatPhoto } from "./0_chat_photo.ts";
import { constructMessage, Message, MessageGetter } from "./3_message.ts";
import { StickerSetNameGetter } from "./1_sticker.ts";
import { EntityGetter } from "./1__getters.ts";

export declare namespace Chat {
  interface Base {
    order: string;
    lastMessage?: Message;
    pinned: number;
  }

  interface Channel extends Base, ChatP.Channel {
    also?: string[];
    photo?: ChatPhoto.Chat;
  }

  interface Supergroup extends Base, ChatP.Supergroup {
    also?: string[];
    photo?: ChatPhoto.Chat;
  }

  interface Group extends Base, ChatP.Group {
    photo?: ChatPhoto.Chat;
  }

  interface Private extends Base, ChatP.Private {
    also?: string[];
    photo?: ChatPhoto.User;
  }
}

export type Chat = Chat.Channel | Chat.Supergroup | Chat.Group | Chat.Private;

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
    UNREACHABLE();
  }
  let photo: ChatPhoto | undefined = undefined;
  if (entity.photo instanceof types.UserProfilePhoto) {
    photo = constructChatPhoto(entity.photo, chatP.id, "access_hash" in entity ? entity.access_hash ?? 0n : 0n);
  } else if (entity.photo instanceof types.ChatPhoto) {
    photo = constructChatPhoto(entity.photo, chatP.id, "access_hash" in entity ? entity.access_hash ?? 0n : 0n);
  }
  return { chatP, also, photo };
}

export function getChatOrder(lastMessage: Message | undefined, pinned: number) {
  const p = pinned == -1 ? "" : `P${100 - pinned}`;
  if (!lastMessage) {
    return p + "0";
  }
  return p + String((BigInt(Math.floor(lastMessage.date.getTime())) << 32n) + BigInt(lastMessage.id));
}
export async function constructChat(dialog: enums.Dialog, dialogs: types.messages.Dialogs | types.messages.DialogsSlice, pinnedChats: number[], getEntity: EntityGetter, getMessage: MessageGetter<"replyToMessage">, getStickerSetName: StickerSetNameGetter): Promise<Chat> {
  const topMessage_ = dialogs.messages.find((v) => "id" in v && v.id == dialog.top_message);
  if (!topMessage_) {
    UNREACHABLE();
  }
  const pinned = pinnedChats.indexOf(peerToChatId(dialog.peer));
  const lastMessage = await constructMessage(topMessage_, getEntity, getMessage, getStickerSetName, false);
  const order = getChatOrder(lastMessage, pinned);
  const userId = "user_id" in dialog.peer ? dialog.peer.user_id : null;
  const chatId = "chat_id" in dialog.peer ? dialog.peer.chat_id : null;
  const channelId = "channel_id" in dialog.peer ? dialog.peer.channel_id : null;
  const chat__ = chatId != null ? dialogs.chats.find((v) => v instanceof types.Chat && v.id == chatId) : channelId != null ? dialogs.chats.find((v) => v instanceof types.Channel && v.id == channelId) : userId != null ? dialogs.users.find((v) => v instanceof types.User && v.id == userId) : UNREACHABLE();
  if (!chat__) {
    UNREACHABLE();
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
    return cleanObject({ ...chatP, order, lastMessage, also, photo: photo as ChatPhoto.User, pinned });
  } else {
    UNREACHABLE();
  }
}

export async function constructChat2(chatId: number, pinned: number, lastMessage: Message | undefined, getEntity: EntityGetter): Promise<Chat | null> {
  let chatPAlsoPhoto: ReturnType<typeof getChatPAlsoPhoto> | null = null;
  if (chatId < ZERO_CHANNEL_ID) {
    const entity = await getEntity(new types.PeerChannel({ channel_id: BigInt(Math.abs(chatId - ZERO_CHANNEL_ID)) }));
    if (entity != null) {
      chatPAlsoPhoto = getChatPAlsoPhoto(entity);
    }
  } else if (chatId < 0) {
    const entity = await getEntity(new types.PeerChat({ chat_id: BigInt(Math.abs(chatId)) }));
    if (entity != null) {
      chatPAlsoPhoto = getChatPAlsoPhoto(entity);
    }
  } else {
    const entity = await getEntity(new types.PeerUser({ user_id: BigInt(chatId) }));
    if (entity != null) {
      chatPAlsoPhoto = getChatPAlsoPhoto(entity);
    }
  }
  if (chatPAlsoPhoto == null) {
    return null;
  }
  const order = getChatOrder(lastMessage, pinned);

  const { also, photo, chatP } = chatPAlsoPhoto;
  if (chatP.type == "group") {
    return cleanObject({ ...chatP, order, lastMessage, photo, pinned });
  } else if (chatP.type == "supergroup") {
    return cleanObject({ ...chatP, order, lastMessage, also, photo, pinned });
  } else if (chatP.type == "channel") {
    return cleanObject({ ...chatP, order, lastMessage, also, photo, pinned });
  } else if (chatP.type == "private") {
    return cleanObject({ ...chatP, order, lastMessage, also, photo: photo as ChatPhoto.User, pinned });
  } else {
    UNREACHABLE();
  }
}

export async function constructChat3(chatId: number, pinned: number, lastMessageId: number, getEntity: EntityGetter, getMessage: MessageGetter<"replyToMessage">): Promise<Chat | null> {
  const lastMessage_ = lastMessageId > 0 ? await getMessage(chatId, lastMessageId) : null;
  const lastMessage = lastMessage_ == null ? undefined : lastMessage_;

  return await constructChat2(chatId, pinned, lastMessage, getEntity);
}
