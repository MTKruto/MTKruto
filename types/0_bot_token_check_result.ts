export declare namespace BotTokenCheckResult {
  /** The bot token was correct. The bot was signed in. */
  export interface SignedIn {
    type: "signed_in";
    userId: number;
  }
}

/** A result after checking a sent code. */
export type BotTokenCheckResult = BotTokenCheckResult.SignedIn;
