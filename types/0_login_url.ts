/** A login URL. */
export interface LoginUrl {
  /** The login URL. */
  url: string;
  /** New text of the button in forwarded messages. */
  forwardText?: string;
  /** Username of a bot, which will be used for user authorization. */
  botUsername?: string;
  /** Pass True to request the permission for your bot to send messages to the user. */
  requestWriteAccess?: boolean;
}
