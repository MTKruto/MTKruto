export declare namespace CodeCheckResult {
  /** The code was correct, but an additional password is required to sign in. */
  export interface PasswordRequired {
    type: "password_required";
  }

  /** The code entered was incorrect. */
  export interface InvalidCode {
    type: "invalid_code";
  }

  /** The code was correct. The user was signed in. */
  export interface SignedIn {
    type: "signed_in";
    userId: number;
  }
}

/** A result after checking a sent code. */
export type CodeCheckResult = CodeCheckResult.PasswordRequired | CodeCheckResult.InvalidCode | CodeCheckResult.SignedIn;
