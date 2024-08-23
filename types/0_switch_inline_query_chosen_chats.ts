export interface SwitchInlineQueryChosenChats {
  /** The query to type into the user's message box once switched to inline. */
  query: string;
  /** Whether the user should be allowed to pick chats with users. */
  allowUsers?: boolean;
  /** Whether the user should be allowed to pick chats with bots. */
  allowBots?: boolean;
  /** Whether the user should be allowed to pick group chats. */
  allowGroups?: boolean;
  /** Whether the user should be allowed to pick channels. */
  allowChannels?: boolean;
}
