import { cleanObject, fromUnixTimestamp, UNREACHABLE } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { EntityGetter } from "./1__getters.ts";
import { constructChatP } from "./1_chat_p.ts";
import { ChatP } from "./1_chat_p.ts";
import { constructUser, User } from "./1_user.ts";
import { ChatMember, constructChatMember } from "./2_chat_member.ts";
import { constructInviteLink } from "./2_invite_link.ts";
import { InviteLink } from "./2_invite_link.ts";

export interface ChatMemberUpdated {
  /** The chat in which the change was made. */
  chat: ChatP;
  /** The one who made the change. */
  from: User;
  /** The point of time in which the chat member's status was changed. */
  date: Date;
  /** The old status of the chat member. */
  oldChatMember: ChatMember;
  /** The new status of the chat member. */
  newChatMember: ChatMember;
  /** The invite link used to join. */
  inviteLink?: InviteLink;
  /** Whether the user joined from a shared folder. */
  viaSharedFolder?: boolean;
}

export async function constructChatMemberUpdated(update: types.UpdateChannelParticipant | types.UpdateChatParticipant, getEntity: EntityGetter): Promise<ChatMemberUpdated> {
  if (!update.prev_participant && !update.new_participant) {
    UNREACHABLE();
  }
  const chat_ = await getEntity("channel_id" in update ? new types.PeerChannel(update) : new types.PeerChat(update));
  const from_ = await getEntity(new types.PeerUser({ user_id: update.actor_id }));
  if (!chat_ || !from_) {
    UNREACHABLE();
  }
  const userPeer = new types.PeerUser(update);
  const chat = constructChatP(chat_);
  const from = constructUser(from_);
  const date = fromUnixTimestamp(update.date);
  const oldChatMember = await constructChatMember(update.prev_participant ?? new types.ChannelParticipantLeft({ peer: userPeer }), getEntity);
  const newChatMember = await constructChatMember(update.new_participant ?? new types.ChannelParticipantLeft({ peer: userPeer }), getEntity);
  const viaSharedFolder = "via_chatlist" in update ? update.via_chatlist ? true : update.invite ? false : undefined : undefined;
  const inviteLink = (update.invite && update.invite instanceof types.ChatInviteExported) ? await constructInviteLink(update.invite, getEntity) : undefined;
  return cleanObject({
    chat,
    from,
    date,
    oldChatMember,
    newChatMember,
    viaSharedFolder,
    inviteLink,
  });
}
