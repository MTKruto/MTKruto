import { UNREACHABLE } from "../1_utilities.ts";
import { enums, types } from "../2_tl.ts";
import { LoginUrl } from "./0_login_url.ts";
import { constructMiniAppInfo, MiniAppInfo } from "./0_mini_app_info.ts";
import { UsernameResolver } from "./1__getters.ts";

/** @unlisted */
export interface _InlineKeyboardButtonBase {
  text: string;
}

/** @unlisted */
export interface InlineKeyboardButtonURL extends _InlineKeyboardButtonBase {
  url: string;
}

/** @unlisted */
export interface InlineKeyboardButtonCallback extends _InlineKeyboardButtonBase {
  callbackData: string;
}

/** @unlisted */
export interface InlineKeyboardButtonMiniApp extends _InlineKeyboardButtonBase {
  miniApp: MiniAppInfo;
}

/** @unlisted */
export interface InlineKeyboardButtonLogin extends _InlineKeyboardButtonBase {
  loginUrl: LoginUrl;
}

/** @unlisted */
export interface InlineKeyboardButtonSwitchInline extends _InlineKeyboardButtonBase {
  switchInlineQuery: string;
}

/** @unlisted */
export interface InlineKeyboardButtonSwitchInlineCurrent extends _InlineKeyboardButtonBase {
  switchInlineQueryCurrentChat: string;
}

/** @unlisted */
export interface InlineKeyboardButtonGame extends _InlineKeyboardButtonBase {
  callbackGame: Record<never, never>;
}

/** @unlisted */
export interface InlineKeyboardButtonPay extends _InlineKeyboardButtonBase {
  pay: boolean;
}

/** A button of an inline keyboard. */
export type InlineKeyboardButton =
  | InlineKeyboardButtonURL
  | InlineKeyboardButtonCallback
  | InlineKeyboardButtonMiniApp
  | InlineKeyboardButtonLogin
  | InlineKeyboardButtonSwitchInline
  | InlineKeyboardButtonSwitchInlineCurrent
  | InlineKeyboardButtonGame
  | InlineKeyboardButtonPay;

export function constructInlineKeyboardButton(button_: enums.KeyboardButton): InlineKeyboardButton {
  if (button_ instanceof types.KeyboardButtonUrl) {
    return { text: button_.text, url: button_.url };
  } else if (button_ instanceof types.KeyboardButtonCallback) {
    return { text: button_.text, callbackData: new TextDecoder().decode(button_.data) };
  } else if (button_ instanceof types.KeyboardButtonWebView || button_ instanceof types.KeyboardButtonSimpleWebView) {
    return { text: button_.text, miniApp: constructMiniAppInfo(button_.url) };
  } else if (button_ instanceof types.KeyboardButtonUrlAuth) {
    return { text: button_.text, loginUrl: { url: button_.url, forwardText: button_.fwd_text } };
  } else if (button_ instanceof types.KeyboardButtonSwitchInline) {
    if (button_.same_peer) {
      return { text: button_.text, switchInlineQueryCurrentChat: button_.query };
    } else {
      return { text: button_.text, switchInlineQuery: button_.query };
    }
  } else if (button_ instanceof types.KeyboardButtonBuy) {
    return { text: button_.text, pay: true };
  } else if (button_ instanceof types.KeyboardButtonGame) {
    return { text: button_.text, callbackGame: {} };
  } else {
    UNREACHABLE();
  }
}

export async function inlineKeyboardButtonToTlObject(button: InlineKeyboardButton, usernameResolver: UsernameResolver): Promise<enums.KeyboardButton> {
  if ("url" in button) {
    return new types.KeyboardButtonUrl({ text: button.text, url: button.url });
  } else if ("callbackData" in button) {
    return new types.KeyboardButtonCallback({ text: button.text, data: new TextEncoder().encode(button.callbackData) });
  } else if ("miniApp" in button) {
    return new types.KeyboardButtonWebView({ text: button.text, url: button.miniApp.url });
  } else if ("loginUrl" in button) {
    return new types.InputKeyboardButtonUrlAuth({
      text: button.text,
      url: button.loginUrl.url,
      fwd_text: button.loginUrl.forwardText,
      bot: button.loginUrl.botUsername ? await usernameResolver(button.loginUrl.botUsername) : new types.InputUserSelf(),
      request_write_access: button.loginUrl.requestWriteAccess || undefined,
    });
  } else if ("switchInlineQuery" in button) {
    return new types.KeyboardButtonSwitchInline({ text: button.text, query: button.switchInlineQuery });
  } else if ("switchInlineQueryCurrentChat" in button) {
    return new types.KeyboardButtonSwitchInline({ text: button.text, query: button.switchInlineQueryCurrentChat, same_peer: true });
  } else if ("pay" in button) {
    return new types.KeyboardButtonBuy({ text: button.text });
  } else {
    UNREACHABLE();
  }
}
