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
  | InlineKeyboardButton.SwitchInline
  | InlineKeyboardButton.SwitchInlineCurrent
  | InlineKeyboardButton.Pay;
