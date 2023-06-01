import { UNREACHABLE } from "../utilities/0_control.ts";
import * as types from "../tl/2_types.ts";
import { constructWebAppInfo, WebAppInfo } from "./0_web_app_info.ts";

export declare namespace InlineKeyboardButton {
  export interface Base {
    text: string;
  }

  export interface URL extends Base {
    url: string;
  }

  export interface Callback extends Base {
    callbackData: string;
  }

  export interface WebApp extends Base {
    webApp: WebAppInfo;
  }

  export interface SwitchInline extends Base {
    switchInlineQuery: string;
  }

  export interface SwitchInlineCurrent extends Base {
    switchInlineQueryCurrentChat: string;
  }

  export interface Pay extends Base {
    pay: boolean;
  }
}

export type InlineKeyboardButton =
  | InlineKeyboardButton.URL
  | InlineKeyboardButton.Callback
  | InlineKeyboardButton.WebApp
  | InlineKeyboardButton.SwitchInline
  | InlineKeyboardButton.SwitchInlineCurrent
  | InlineKeyboardButton.Pay;

export function constructInlineKeybaordButton(button_: types.TypeKeyboardButton): InlineKeyboardButton {
  if (button_ instanceof types.KeyboardButtonURL) {
    return { text: button_.text, url: button_.url };
  } else if (button_ instanceof types.KeyboardButtonCallback) {
    return { text: button_.text, callbackData: new TextDecoder().decode(button_.data) };
  } else if (button_ instanceof types.KeyboardButtonWebView || button_ instanceof types.KeyboardButtonSimpleWebView) {
    return { text: button_.text, webApp: constructWebAppInfo(button_.url) };
  } else if (button_ instanceof types.KeyboardButtonSwitchInline) {
    if (button_.samePeer) {
      return { text: button_.text, switchInlineQueryCurrentChat: button_.query };
    } else {
      return { text: button_.text, switchInlineQuery: button_.query };
    }
  } else if (button_ instanceof types.KeyboardButtonBuy) {
    return { text: button_.text, pay: true };
  } else {
    UNREACHABLE();
  }
}
