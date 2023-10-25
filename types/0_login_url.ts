export interface LoginUrl {
  /** An HTTPS URL to be opened with the authorization data appended to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. */
  url: string;
  /** A different text to use for the button when the message is forwarded. */
  forwardText?: string;
  /** Username of a bot, which will be used for user authorization. See [Learn more.](https://core.telegram.org/widgets/login#setting-up-a-bot) If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. [Learn more.](https://core.telegram.org/widgets/login#linking-your-domain-to-the-bot) */
  botUsername?: string;
  /** Whether to ask the user to allow messages to be received from the specified bot. */
  requestWriteAccess?: boolean;
}
