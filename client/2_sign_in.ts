import { unreachable } from "../0_deps.ts";
import { type Logger, mustPrompt, mustPromptOneOf } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { PhoneNumberInvalid } from "../3_errors.ts";
import { InputError } from "../4_errors.ts";
import type { SignInParams } from "./0_params.ts";
import type { ClientGeneric } from "./1_client_generic.ts";

export const restartAuth = Symbol("restartAuth");

export async function signIn(client: ClientGeneric, logger: Logger, params: SignInParams | undefined) {
  try {
    await client.getMe();
    return;
  } catch (err) {
    if ((!(err instanceof InputError))) {
      throw err;
    }
  }

  if (typeof params === "undefined") {
    const loginType = mustPromptOneOf("Do you want to sign in as a bot [b] or as a user [u]?", ["b", "u"] as const);
    if (loginType === "b") {
      params = { botToken: mustPrompt("Bot token:") };
    } else {
      params = { phone: () => mustPrompt("Phone number:"), code: () => mustPrompt("Verification code:"), password: () => mustPrompt("Password:") };
    }
  }

  logger.debug("signing in with", typeof params === "string" ? "bot token" : Api.is("auth.exportedAuthorization", params) ? "exported authorization" : "AuthorizeUserParams");

  if (params && "botToken" in params) {
    const result = await client.checkBotToken(params.botToken);
    if (result.type === "signed_in") {
      return;
    } else {
      unreachable();
    }
  }

  auth: while (true) {
    try {
      let phone: string;
      while (true) {
        try {
          phone = typeof params.phone === "string" ? params.phone : await params.phone();
          await client.sendCode(phone);
          break;
        } catch (err) {
          if (err instanceof PhoneNumberInvalid) {
            continue;
          } else {
            throw err;
          }
        }
      }
      logger.debug("verification code sent");

      code: while (true) {
        const code = typeof params.code === "string" ? params.code : await params.code();
        const codeCheckResult = await client.checkCode(code);
        if (codeCheckResult.type === "signed_in") {
          return;
        } else if (codeCheckResult.type === "invalid_code") {
          continue code;
        } else if (codeCheckResult.type === "password_required") {
          break code;
        } else {
          unreachable();
        }
      }

      const passwordHint = await client.getPasswordHint();
      password: while (true) {
        const password = typeof params.password === "string" ? params.password : await params.password(passwordHint);
        const passwordCheckResult = await client.checkPassword(password);
        if (passwordCheckResult.type === "signed_in") {
          return;
        } else if (passwordCheckResult.type === "invalid_password") {
          continue password;
        } else {
          unreachable();
        }
      }
    } catch (err) {
      if (err === restartAuth) {
        continue auth;
      } else {
        throw err;
      }
    }
  }
}
