import { UNREACHABLE } from "../1_utilities.ts";
import { enums, types } from "../2_tl.ts";
import { LoginUrl } from "./0_login_url.ts";
import { constructWebAppInfo, WebAppInfo } from "./0_web_app_info.ts";
import { UsernameResolver } from "./1__getters.ts";

export declare namespace InlineKeyboardButton {
  export interface Base {
    /** Label text on the button */
    text: string;
  }

  export interface URL extends Base {
    /** HTTP or tg:// URL to be opened when the button is pressed. Links `tg://user?id=<user_id>` can be used to mention a user by their ID without using a username, if this is allowed by their privacy settings. */
    url: string;
  }

  export interface Callback extends Base {
    /** Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes */
    callbackData: string;
  }

  export interface WebApp extends Base {
    /** Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. */
    webApp: WebAppInfo;
  }

  export interface Login extends Base {
    /** An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the [Telegram Login Widget](https://core.telegram.org/widgets/login). */
    loginUrl: LoginUrl;
  }

  export interface SwitchInline extends Base {
    /** If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. */
    switchInlineQuery: string;
  }

  export interface SwitchInlineCurrent extends Base {
    /** If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted. */
    switchInlineQueryCurrentChat: string;
  }

  export interface Game extends Base {
    callbackGame: Record<never, never>;
  }

  export interface Pay extends Base {
    /** Specify True to send a Pay button */
    pay: boolean;
  }
}

/** This object represents one button of an inline keyboard. You **must** use exactly one of the optional fields. */
export type InlineKeyboardButton =
  | InlineKeyboardButton.URL
  | InlineKeyboardButton.Callback
  | InlineKeyboardButton.WebApp
  | InlineKeyboardButton.Login
  | InlineKeyboardButton.SwitchInline
  | InlineKeyboardButton.SwitchInlineCurrent
  | InlineKeyboardButton.Game
  | InlineKeyboardButton.Pay;

export function constructInlineKeyboardButton(button_: enums.KeyboardButton): InlineKeyboardButton {
  if (button_ instanceof types.keyboardButtonUrl) {
    return { text: button_.text, url: button_.url };
  } else if (button_ instanceof types.keyboardButtonCallback) {
    return { text: button_.text, callbackData: new TextDecoder().decode(button_.data) };
  } else if (button_ instanceof types.keyboardButtonWebView || button_ instanceof types.keyboardButtonSimpleWebView) {
    return { text: button_.text, webApp: constructWebAppInfo(button_.url) };
  } else if (button_ instanceof types.keyboardButtonUrlAuth) {
    return { text: button_.text, loginUrl: { url: button_.url, forwardText: button_.fwd_text } };
  } else if (button_ instanceof types.keyboardButtonSwitchInline) {
    if (button_.same_peer) {
      return { text: button_.text, switchInlineQueryCurrentChat: button_.query };
    } else {
      return { text: button_.text, switchInlineQuery: button_.query };
    }
  } else if (button_ instanceof types.keyboardButtonBuy) {
    return { text: button_.text, pay: true };
  } else if (button_ instanceof types.keyboardButtonGame) {
    return { text: button_.text, callbackGame: {} };
  } else {
    UNREACHABLE();
  }
}

export async function inlineKeyboardButtonToTlObject(button: InlineKeyboardButton, usernameResolver: UsernameResolver) {
  if ("url" in button) {
    return new types.keyboardButtonUrl({ text: button.text, url: button.url });
  } else if ("callbackData" in button) {
    return new types.keyboardButtonCallback({ text: button.text, data: new TextEncoder().encode(button.callbackData) });
  } else if ("webApp" in button) {
    return new types.keyboardButtonWebView({ text: button.text, url: button.webApp.url });
  } else if ("loginUrl" in button) {
    return new types.inputKeyboardButtonUrlAuth({
      text: button.text,
      url: button.loginUrl.url,
      fwd_text: button.loginUrl.forwardText,
      bot: button.loginUrl.botUsername ? await usernameResolver(button.loginUrl.botUsername) : new types.inputUserSelf(),
      request_write_access: button.loginUrl.requestWriteAccess || undefined,
    });
  } else if ("switchInlineQuery" in button) {
    return new types.keyboardButtonSwitchInline({ text: button.text, query: button.switchInlineQuery });
  } else if ("switchInlineQueryCurrentChat" in button) {
    return new types.keyboardButtonSwitchInline({ text: button.text, query: button.switchInlineQueryCurrentChat, same_peer: true });
  } else if ("pay" in button) {
    return new types.keyboardButtonBuy({ text: button.text });
  } else {
    UNREACHABLE();
  }
}
