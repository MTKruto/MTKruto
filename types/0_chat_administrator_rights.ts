import * as types from "../tl/2_types.ts";

export interface ChatAdministratorRights {
  isAnonymous: boolean;
  canManageChat: boolean;
  canDeleteMessages: boolean;
  canManageVideoChats: boolean;
  canRestrictMembers: boolean;
  canPromoteMembers: boolean;
  canChangeInfo: boolean;
  canInviteUsers: boolean;
  canPostMessages?: boolean;
  canEditMessages?: boolean;
  canPinMessages?: boolean;
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
