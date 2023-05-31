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
