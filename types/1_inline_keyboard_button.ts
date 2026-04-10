/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
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
import { InputError } from "../0_errors.ts";
import { cleanObject, decodeText, encodeText } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import type { UsernameResolver } from "./_getters.ts";
import { type ButtonStyle, buttonStyleToTlObject, constructButtonStyle } from "./0_button_style.ts";
import type { LoginUrl } from "./0_login_url.ts";

/** @unlisted */
export interface _InlineKeyboardButtonBase {
  /** The text of the button. */
  text: string;
  style?: ButtonStyle;
}

/**
 * An inline keyboard button that, when pressed, opens the specified URL.
 * @unlisted
 */
export interface InlineKeyboardButtonURL extends _InlineKeyboardButtonBase {
  /**
   * The URL to open.
   */
  type: "url";
  url: string;
}

/**
 * An inline keyboard button that, when pressed, sends back the specified callback data.
 * @unlisted
 */
export interface InlineKeyboardButtonCallback extends _InlineKeyboardButtonBase {
  type: "callbackData";
  /** The callback data to send back. */
  callbackData: string;
}

/**
 * An inline keyboard button that, when pressed, launches the specified mini app.
 * @unlisted
 */
/** @unlisted */
export interface InlineKeyboardButtonMiniApp extends _InlineKeyboardButtonBase {
  type: "miniApp";
  /** An HTTPS URL of the mini app to be opened with additional data. */
  url: string;
}

/**
 * An inline keyboard button that, when pressed, logs the user into the specified URL.
 * @unlisted
 */
export interface InlineKeyboardButtonLogin extends _InlineKeyboardButtonBase {
  type: "loginUrl";
  /** The URL to log into. */
  loginUrl: LoginUrl;
}

/**
 * An inline keyboard button that, when pressed, switches to inline mode in a chat chosen by the user.
 * @unlisted
 */
export interface InlineKeyboardButtonSwitchInline extends _InlineKeyboardButtonBase {
  type: "switchInlineQuery";
  /** The query to type into the user's message box once switched to inline. */
  inlineQuery: string;
}

/**
 * An inline keyboard button that, when pressed, switches to inline mode in the current chat.
 * @unlisted
 */
export interface InlineKeyboardButtonSwitchInlineCurrent extends _InlineKeyboardButtonBase {
  type: "switchInlineQueryCurrentChat";
  /**
   * The query to type into the user's message box once switched to inline.
   */
  inlineQuery: string;
}

/**
 * An inline keyboard button that, when pressed, switches to inline mode in a chat chosen by the user from a limited subset of chats.
 * @unlisted
 */
export interface InlineKeyboardButtonSwitchInlineChosen extends _InlineKeyboardButtonBase {
  type: "switchInlineQueryChosenChats";
  inlineQuery: string;
  isUser?: boolean;
  isBot?: boolean;
  isGroup?: boolean;
  isChannel?: boolean;
}

/**
 * An inline keyboard button that, when pressed, launches the bot's game.
 * @unlisted
 */
export interface InlineKeyboardButtonGame extends _InlineKeyboardButtonBase {
  type: "callbackGame";
}

/**
 * An inline keyboard that, when pressed, initiates a payment.
 * @unlisted
 */
export interface InlineKeyboardButtonPay extends _InlineKeyboardButtonBase {
  type: "pay";
}

/**
 * An inline keyboard that, when pressed, copies the text inside its `copy` field.
 * @unlisted
 */
export interface InlineKeyboardButtonCopy extends _InlineKeyboardButtonBase {
  type: "copy";
  textToCopy: string;
}

/** A button of an inline keyboard. */
export type InlineKeyboardButton =
  | InlineKeyboardButtonURL
  | InlineKeyboardButtonCallback
  | InlineKeyboardButtonMiniApp
  | InlineKeyboardButtonLogin
  | InlineKeyboardButtonSwitchInline
  | InlineKeyboardButtonSwitchInlineCurrent
  | InlineKeyboardButtonSwitchInlineChosen
  | InlineKeyboardButtonGame
  | InlineKeyboardButtonPay
  | InlineKeyboardButtonCopy;

export function constructInlineKeyboardButton(button_: Api.KeyboardButton): InlineKeyboardButton {
  const text = button_.text;
  const style = constructButtonStyle(button_.style);
  if (Api.is("keyboardButtonUrl", button_)) {
    return cleanObject({ type: "url", text, style, url: button_.url });
  } else if (Api.is("keyboardButtonCallback", button_)) {
    return cleanObject({ type: "callbackData", text, style, callbackData: decodeText(button_.data) });
  } else if (Api.is("keyboardButtonWebView", button_) || Api.is("keyboardButtonSimpleWebView", button_)) {
    return cleanObject({ type: "miniApp", text, style, url: button_.url });
  } else if (Api.is("keyboardButtonUrlAuth", button_)) {
    return cleanObject({ type: "loginUrl", text, style, loginUrl: { url: button_.url, forwardText: button_.fwd_text } });
  } else if (Api.is("keyboardButtonSwitchInline", button_)) {
    if (button_.same_peer) {
      return cleanObject({ type: "switchInlineQueryCurrentChat", text, style, inlineQuery: button_.query });
    } else if (button_.peer_types && button_.peer_types.length) {
      const allowUsers = button_.peer_types.some((v) => v._ === "inlineQueryPeerTypeBotPM") || undefined;
      const allowBots = button_.peer_types.some((v) => v._ === "inlineQueryPeerTypeSameBotPM" || v._ === "inlineQueryPeerTypeBotPM") || undefined;
      const allowGroups = button_.peer_types.some((v) => v._ === "inlineQueryPeerTypeChat" || v._ === "inlineQueryPeerTypeMegagroup") || undefined;
      const allowChannels = button_.peer_types.some((v) => v._ === "inlineQueryPeerTypeBroadcast") || undefined;
      return cleanObject({ type: "switchInlineQueryChosenChats", text, style, inlineQuery: button_.query, allowUsers, allowBots, allowGroups, allowChannels });
    } else {
      return cleanObject({ type: "switchInlineQuery", text, style, inlineQuery: button_.query });
    }
  } else if (Api.is("keyboardButtonBuy", button_)) {
    return cleanObject({ type: "pay", text, style });
  } else if (Api.is("keyboardButtonGame", button_)) {
    return cleanObject({ type: "callbackGame", text, style });
  } else if (Api.is("keyboardButtonCopy", button_)) {
    return cleanObject({ type: "copy", text, style, textToCopy: button_.copy_text });
  } else if (Api.is("keyboardButtonRequestPeer", button_)) {
    unreachable();
  } else {
    unreachable();
  }
}

export async function inlineKeyboardButtonToTlObject(button: InlineKeyboardButton, usernameResolver: UsernameResolver): Promise<Api.KeyboardButton> {
  const style = buttonStyleToTlObject(button.style);
  switch (button.type) {
    case "url":
      return { _: "keyboardButtonUrl", text: button.text, url: button.url, style };
    case "callbackData":
      return { _: "keyboardButtonCallback", text: button.text, data: encodeText(button.callbackData), style };
    case "miniApp":
      return { _: "keyboardButtonWebView", text: button.text, url: button.url, style };

    case "loginUrl":
      return {
        _: "inputKeyboardButtonUrlAuth",
        text: button.text,
        url: button.loginUrl.url,
        fwd_text: button.loginUrl.forwardText,
        bot: button.loginUrl.botUsername ? await usernameResolver(button.loginUrl.botUsername) : { _: "inputUserSelf" },
        request_write_access: button.loginUrl.requestWriteAccess || undefined,
        style,
      };
    case "switchInlineQuery":
      return { _: "keyboardButtonSwitchInline", text: button.text, query: button.inlineQuery, style };

    case "switchInlineQueryCurrentChat":
      return { _: "keyboardButtonSwitchInline", text: button.text, query: button.inlineQuery, same_peer: true, style };

    case "switchInlineQueryChosenChats": {
      const peerTypes = new Array<Api.InlineQueryPeerType>();
      const { isUser, isBot, isGroup, isChannel } = button;
      if (!isUser && !isBot && !isGroup && !isChannel) {
        throw new InputError("switchInlineQueryChosenChats: At least one chat type must be allowed.");
      }
      if (isUser) {
        peerTypes.push({ _: "inlineQueryPeerTypeBotPM" });
      }
      if (isBot) {
        peerTypes.push({ _: "inlineQueryPeerTypeSameBotPM" }, { _: "inlineQueryPeerTypeBotPM" });
      }
      if (isGroup) {
        peerTypes.push({ _: "inlineQueryPeerTypeChat" }, { _: "inlineQueryPeerTypeMegagroup" });
      }
      if (isChannel) {
        peerTypes.push({ _: "inlineQueryPeerTypeBroadcast" });
      }
      return { _: "keyboardButtonSwitchInline", text: button.text, query: button.inlineQuery, peer_types: peerTypes, style };
    }
    case "callbackGame":
      return { _: "keyboardButtonGame", text: button.text, style };
    case "pay":
      return { _: "keyboardButtonBuy", text: button.text, style };
    case "copy":
      return { _: "keyboardButtonCopy", text: button.text, copy_text: button.textToCopy, style };
  }
}
