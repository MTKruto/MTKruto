import * as types from "../tl/2_types.ts";

/** Represents the rights of an administrator in a chat. */
export interface ChatAdministratorRights {
  /** True, if the user's presence in the chat is hidden */
  isAnonymous: boolean;
  /** True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege */
  canManageChat: boolean;
  /** True, if the administrator can delete messages of other users */
  canDeleteMessages: boolean;
  /** True, if the administrator can manage video chats */
  canManageVideoChats: boolean;
  /** True, if the administrator can restrict, ban or unban chat members */
  canRestrictMembers: boolean;
  /** True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
  canPromoteMembers: boolean;
  /** True, if the user is allowed to change the chat title, photo and other settings */
  canChangeInfo: boolean;
  /** True, if the user is allowed to invite new users to the chat */
  canInviteUsers: boolean;
  /** True, if the administrator can post in the channel; channels only */
  canPostMessages?: boolean;
  /** True, if the administrator can edit messages of other users and can pin messages; channels only */
  canEditMessages?: boolean;
  /** True, if the user is allowed to pin messages; groups and supergroups only */
  canPinMessages?: boolean;
  /** True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only */
  canManageTopics?: boolean;
}

export function constructChatAdministratorRights(rights_: types.ChatAdminRights) {
  const rights: ChatAdministratorRights = {
    isAnonymous: rights_.anonymous || false,
    canManageChat: rights_.other || false,
    canDeleteMessages: rights_.deleteMessages || false,
    canManageVideoChats: rights_.manageCall || false,
    canRestrictMembers: rights_.banUsers || false,
    canPromoteMembers: rights_.addAdmins || false,
    canChangeInfo: rights_.changeInfo || false,
    canInviteUsers: rights_.inviteUsers || false,
  };

  if (rights_.postMessages) {
    rights.canPostMessages = rights_.postMessages;
  }
  if (rights_.editMessages) {
    rights.canEditMessages = rights_.editMessages;
  }
  if (rights_.pinMessages) {
    rights.canPinMessages = rights_.pinMessages;
  }
  if (rights_.manageTopics) {
    rights.canManageTopics = rights_.manageTopics;
  }

  return rights;
}

export function chatAdministratorRightsToTlObject(rights: ChatAdministratorRights) {
  return new types.ChatAdminRights({
    anonymous: rights.isAnonymous || undefined,
    other: rights.canManageChat || undefined,
    deleteMessages: rights.canDeleteMessages || undefined,
    manageCall: rights.canManageChat || undefined,
    banUsers: rights.canRestrictMembers || undefined,
    addAdmins: rights.canPromoteMembers || undefined,
    changeInfo: rights.canChangeInfo || undefined,
    inviteUsers: rights.canInviteUsers || undefined,
  });
}
