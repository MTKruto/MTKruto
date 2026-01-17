export declare namespace PasswordCheckResult {
  /** The password entered was incorrect. */
  export interface InvalidPassword {
    type: "invalid_password";
  }

  /** The password was correct. The user was signed in. */
  export interface SignedIn {
    type: "signed_in";
    userId: number;
  }
}

/** A result after checking a sent code. */
export type PasswordCheckResult = PasswordCheckResult.InvalidPassword | PasswordCheckResult.SignedIn;
