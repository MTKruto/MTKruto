/** A login URL. */
export interface LoginUrl {
  /** The login URL. */
  url: string;
  /** A different text for the login button that will be shown when the message is forwarded. */
  forwardText?: string;
  /** The username of the bot that performs the authorization. */
  botUsername?: string;
  /** Pass True to request the permission for your bot to send messages to the user. */
  requestWriteAccess?: boolean;
}
