import { WebAppInfo } from "./0_web_app_info.ts";

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
