/** The rights of a chat member. */
export interface ChatMemberRights {
  /** Whether messages are allowed to be sent. */
  canSendMessages?: boolean;
  /** Whether audio files are allowed to be sent. */
  canSendAudio?: boolean;
  /** Whether files are allowed to be sent. */
  canSendDocuments?: boolean;
  /** Whether photos are allowed to be sent. */
  canSendPhotos?: boolean;
  /** Whether videos are allowed to be sent. */
  canSendVideos?: boolean;
  /** Whether video notes are allowed to be sent. */
  canSendVideoNotes?: boolean;
  /** Whether voice messages are allowed to be sent. */
  canSendVoice?: boolean;
  /** Whether polls are allowed to be sent. */
  canSendPolls?: boolean;
  /** Whether stickers are allowed to be sent. */
  canSendStickers?: boolean;
  /** Whether animations are allowed to be sent. */
  canSendAnimations?: boolean;
  /** Whether games are allowed to be sent. */
  canSendGames?: boolean;
  /** Whether inline bot results are allowed to be sent. */
  canSendInlineBotResults?: boolean;
  /** Whether it is allowed to add web page previews. */
  canAddWebPagePreviews?: boolean;
  /** Whether it is allowed to change the chat info. Ignored for supergroups. */
  canChangeInfo?: boolean;
  /** Whether it is allowed to invite users. */
  canInviteUsers?: boolean;
  /** Whether it is allowed to pin messages. */
  canPinMessages?: boolean;
  /** Whether it is allowed to manage topics. */
  canManageTopics?: boolean;
}
