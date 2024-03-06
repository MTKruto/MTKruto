/** A login URL. */
export interface LoginUrl {
  /** An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. */
  url: string;
  /** New text of the button in forwarded messages. */
  forwardText?: string;
  /** Username of a bot, which will be used for user authorization. */
  botUsername?: string;
  /** Pass True to request the permission for your bot to send messages to the user. */
  requestWriteAccess?: boolean;
}
