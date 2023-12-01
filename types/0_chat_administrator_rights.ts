import { enums, types } from "../2_tl.ts";

/** The rights of a chat administrator. */
export interface ChatAdministratorRights {
  /** Whether the admininistrator's presence in the chat is hidden. */
  isAnonymous: boolean;
  /** Whether the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and surpass slow mode. */
  canManageChat: boolean;
  /** Whether the administrator can delete messages of other users. */
  canDeleteMessages: boolean;
  /** Whether the administrator can manage video chats. */
  canManageVideoChats: boolean;
  /** Whether the administrator can restrict, ban or unban chat members. */
  canRestrictMembers: boolean;
  /** Whether the administrator can promote regular members to admininistrators. */
  canPromoteMembers: boolean;
  /** Whether the administrator can change the name of the chat, its photo, description and some other settings. */
  canChangeInfo: boolean;
  /** Whether the administrator can invite users to the chat. */
  canInviteUsers: boolean;
  /** Whether the administrator can make posts in the channel. Only available for channels. */
  canPostMessages?: boolean;
  /** Whether the administrator can pin posts and edit posts they didn't send. Only available for channels. */
  canEditMessages?: boolean;
  /** Whether the administrator can pin messages. Only available for groups and supergroups. */
  canPinMessages?: boolean;
  /** Whether the administrator can manage topics. Only available for supergroups. */
  canManageTopics?: boolean;
}

export function constructChatAdministratorRights(rights_: enums.ChatAdminRights) {
  const rights: ChatAdministratorRights = {
    isAnonymous: rights_.anonymous || false,
    canManageChat: rights_.other || false,
    canDeleteMessages: rights_.delete_messages || false,
    canManageVideoChats: rights_.manage_call || false,
    canRestrictMembers: rights_.ban_users || false,
    canPromoteMembers: rights_.add_admins || false,
    canChangeInfo: rights_.change_info || false,
    canInviteUsers: rights_.invite_users || false,
  };

  if (rights_.post_messages) {
    rights.canPostMessages = rights_.post_messages;
  }
  if (rights_.edit_messages) {
    rights.canEditMessages = rights_.edit_messages;
  }
  if (rights_.pin_messages) {
    rights.canPinMessages = rights_.pin_messages;
  }
  if (rights_.manage_topics) {
    rights.canManageTopics = rights_.manage_topics;
  }

  return rights;
}

export function chatAdministratorRightsToTlObject(rights: ChatAdministratorRights) {
  return new types.chatAdminRights({
    anonymous: rights.isAnonymous || undefined,
    other: rights.canManageChat || undefined,
    delete_messages: rights.canDeleteMessages || undefined,
    manage_call: rights.canManageChat || undefined,
    ban_users: rights.canRestrictMembers || undefined,
    add_admins: rights.canPromoteMembers || undefined,
    change_info: rights.canChangeInfo || undefined,
    invite_users: rights.canInviteUsers || undefined,
  });
}
