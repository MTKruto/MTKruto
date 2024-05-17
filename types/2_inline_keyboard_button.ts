/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { unreachable } from "../0_deps.ts";
import { Api, is } from "../2_tl.ts";
import { UsernameResolver } from "./_getters.ts";
import { LoginUrl } from "./0_login_url.ts";
import { constructMiniAppInfo, MiniAppInfo } from "./0_mini_app_info.ts";

/** @unlisted */
export interface _InlineKeyboardButtonBase {
  text: string;
}

/** @unlisted */
export interface InlineKeyboardButtonURL extends _InlineKeyboardButtonBase {
  /** @discriminator */
  url: string;
}

/** @unlisted */
export interface InlineKeyboardButtonCallback extends _InlineKeyboardButtonBase {
  /** @discriminator */
  callbackData: string;
}

/** @unlisted */
export interface InlineKeyboardButtonMiniApp extends _InlineKeyboardButtonBase {
  /** @discriminator */
  miniApp: MiniAppInfo;
}

/** @unlisted */
export interface InlineKeyboardButtonLogin extends _InlineKeyboardButtonBase {
  /** @discriminator */
  loginUrl: LoginUrl;
}

/** @unlisted */
export interface InlineKeyboardButtonSwitchInline extends _InlineKeyboardButtonBase {
  /** @discriminator */
  switchInlineQuery: string;
}

/** @unlisted */
export interface InlineKeyboardButtonSwitchInlineCurrent extends _InlineKeyboardButtonBase {
  /** @discriminator */
  switchInlineQueryCurrentChat: string;
}

/** @unlisted */
export interface InlineKeyboardButtonGame extends _InlineKeyboardButtonBase {
  /** @discriminator */
  callbackGame: Record<never, never>;
}

/** @unlisted */
export interface InlineKeyboardButtonPay extends _InlineKeyboardButtonBase {
  /** @discriminator */
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

export function constructInlineKeyboardButton(button_: Api.KeyboardButton): InlineKeyboardButton {
  if (is("keyboardButtonUrl", button_)) {
    return { text: button_.text, url: button_.url };
  } else if (is("keyboardButtonCallback", button_)) {
    return { text: button_.text, callbackData: new TextDecoder().decode(button_.data) };
  } else if (is("keyboardButtonWebView", button_) || is("keyboardButtonSimpleWebView", button_)) {
    return { text: button_.text, miniApp: constructMiniAppInfo(button_.url) };
  } else if (is("keyboardButtonUrlAuth", button_)) {
    return { text: button_.text, loginUrl: { url: button_.url, forwardText: button_.fwd_text } };
  } else if (is("keyboardButtonSwitchInline", button_)) {
    if (button_.same_peer) {
      return { text: button_.text, switchInlineQueryCurrentChat: button_.query };
    } else {
      return { text: button_.text, switchInlineQuery: button_.query };
    }
  } else if (is("keyboardButtonBuy", button_)) {
    return { text: button_.text, pay: true };
  } else if (is("keyboardButtonGame", button_)) {
    return { text: button_.text, callbackGame: {} };
  } else {
    unreachable();
  }
}

export async function inlineKeyboardButtonToTlObject(button: InlineKeyboardButton, usernameResolver: UsernameResolver): Promise<Api.KeyboardButton> {
  if ("url" in button) {
    return { _: "keyboardButtonUrl", text: button.text, url: button.url };
  } else if ("callbackData" in button) {
    return { _: "keyboardButtonCallback", text: button.text, data: new TextEncoder().encode(button.callbackData) };
  } else if ("miniApp" in button) {
    return { _: "keyboardButtonWebView", text: button.text, url: button.miniApp.url };
  } else if ("loginUrl" in button) {
    return { _: "inputKeyboardButtonUrlAuth", text: button.text, url: button.loginUrl.url, fwd_text: button.loginUrl.forwardText, bot: button.loginUrl.botUsername ? await usernameResolver(button.loginUrl.botUsername) : { _: "inputUserSelf" }, request_write_access: button.loginUrl.requestWriteAccess || undefined };
  } else if ("switchInlineQuery" in button) {
    return { _: "keyboardButtonSwitchInline", text: button.text, query: button.switchInlineQuery };
  } else if ("switchInlineQueryCurrentChat" in button) {
    return { _: "keyboardButtonSwitchInline", text: button.text, query: button.switchInlineQueryCurrentChat, same_peer: true };
  } else if ("pay" in button) {
    return { _: "keyboardButtonBuy", text: button.text };
  } else {
    unreachable();
  }
}
