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
import { constructMiniAppButtonInfo, type MiniAppButtonInfo } from "./0_mini_app_button_info.ts";

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
   * @discriminator
   */
  url: string;
}

/**
 * An inline keyboard button that, when pressed, sends back the specified callback data.
 * @unlisted
 */
export interface InlineKeyboardButtonCallback extends _InlineKeyboardButtonBase {
  /**
   * The callback data to send back.
   * @discriminator
   */
  callbackData: string;
}

/**
 * An inline keyboard button that, when pressed, launches the specified mini app.
 * @unlisted
 */
/** @unlisted */
export interface InlineKeyboardButtonMiniApp extends _InlineKeyboardButtonBase {
  /**
   * The mini app to launch.
   * @discriminator
   */
  miniApp: MiniAppButtonInfo;
}

/**
 * An inline keyboard button that, when pressed, logs the user into the specified URL.
 * @unlisted
 */
export interface InlineKeyboardButtonLogin extends _InlineKeyboardButtonBase {
  /**
   * The URL to log into.
   * @discriminator
   */
  loginUrl: LoginUrl;
}

/**
 * An inline keyboard button that, when pressed, switches to inline mode in a chat chosen by the user.
 * @unlisted
 */
export interface InlineKeyboardButtonSwitchInline extends _InlineKeyboardButtonBase {
  /**
   * The query to type into the user's message box once switched to inline.
   * @discriminator
   */
  switchInlineQuery: string;
}

/**
 * An inline keyboard button that, when pressed, switches to inline mode in the current chat.
 * @unlisted
 */
export interface InlineKeyboardButtonSwitchInlineCurrent extends _InlineKeyboardButtonBase {
  /**
   * The query to type into the user's message box once switched to inline.
   * @discriminator
   */
  switchInlineQueryCurrentChat: string;
}

/**
 * An inline keyboard button that, when pressed, switches to inline mode in a chat chosen by the user from a limited subset of chats.
 * @unlisted
 */
export interface InlineKeyboardButtonSwitchInlineChosen extends _InlineKeyboardButtonBase {
  /** @discriminator */
  switchInlineQueryChosenChats: {
    query: string;
    allowUsers?: boolean;
    allowBots?: boolean;
    allowGroups?: boolean;
    allowChannels?: boolean;
  };
}

/**
 * An inline keyboard button that, when pressed, launches the bot's game.
 * @unlisted
 */
export interface InlineKeyboardButtonGame extends _InlineKeyboardButtonBase {
  /** @discriminator */
  callbackGame: Record<never, never>;
}

/**
 * An inline keyboard that, when pressed, initiates a payment.
 * @unlisted
 */
export interface InlineKeyboardButtonPay extends _InlineKeyboardButtonBase {
  /** @discriminator */
  pay: boolean;
}

/**
 * An inline keyboard that, when pressed, copies the text inside its `copy` field.
 * @unlisted
 */
export interface InlineKeyboardButtonCopy extends _InlineKeyboardButtonBase {
  /** @discriminator */
  copy: string;
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
  const style = constructButtonStyle(button_.style);
  if (Api.is("keyboardButtonUrl", button_)) {
    return cleanObject({ text: button_.text, url: button_.url, style });
  } else if (Api.is("keyboardButtonCallback", button_)) {
    return cleanObject({ text: button_.text, callbackData: decodeText(button_.data), style });
  } else if (Api.is("keyboardButtonWebView", button_) || Api.is("keyboardButtonSimpleWebView", button_)) {
    return cleanObject({ text: button_.text, miniApp: constructMiniAppButtonInfo(button_.url), style });
  } else if (Api.is("keyboardButtonUrlAuth", button_)) {
    return cleanObject({ text: button_.text, loginUrl: { url: button_.url, forwardText: button_.fwd_text }, style });
  } else if (Api.is("keyboardButtonSwitchInline", button_)) {
    if (button_.same_peer) {
      return cleanObject({ text: button_.text, switchInlineQueryCurrentChat: button_.query, style });
    } else if (button_.peer_types && button_.peer_types.length) {
      const allowUsers = button_.peer_types.some((v) => v._ === "inlineQueryPeerTypeBotPM") || undefined;
      const allowBots = button_.peer_types.some((v) => v._ === "inlineQueryPeerTypeSameBotPM" || v._ === "inlineQueryPeerTypeBotPM") || undefined;
      const allowGroups = button_.peer_types.some((v) => v._ === "inlineQueryPeerTypeChat" || v._ === "inlineQueryPeerTypeMegagroup") || undefined;
      const allowChannels = button_.peer_types.some((v) => v._ === "inlineQueryPeerTypeBroadcast") || undefined;
      return cleanObject({ text: button_.text, switchInlineQueryChosenChats: { query: button_.query, allowUsers, allowBots, allowGroups, allowChannels }, style });
    } else {
      return cleanObject({ text: button_.text, switchInlineQuery: button_.query, style });
    }
  } else if (Api.is("keyboardButtonBuy", button_)) {
    return cleanObject({ text: button_.text, pay: true, style });
  } else if (Api.is("keyboardButtonGame", button_)) {
    return cleanObject({ text: button_.text, callbackGame: {}, style });
  } else if (Api.is("keyboardButtonCopy", button_)) {
    return cleanObject({ text: button_.text, copy: button_.copy_text, style });
  } else if (Api.is("keyboardButtonRequestPeer", button_)) {
    unreachable();
  } else {
    unreachable();
  }
}

export async function inlineKeyboardButtonToTlObject(button: InlineKeyboardButton, usernameResolver: UsernameResolver): Promise<Api.KeyboardButton> {
  const style = buttonStyleToTlObject(button.style);
  if ("url" in button) {
    return { _: "keyboardButtonUrl", text: button.text, url: button.url, style };
  } else if ("callbackData" in button) {
    return { _: "keyboardButtonCallback", text: button.text, data: encodeText(button.callbackData), style };
  } else if ("miniApp" in button) {
    return { _: "keyboardButtonWebView", text: button.text, url: button.miniApp.url, style };
  } else if ("loginUrl" in button) {
    return {
      _: "inputKeyboardButtonUrlAuth",
      text: button.text,
      url: button.loginUrl.url,
      fwd_text: button.loginUrl.forwardText,
      bot: button.loginUrl.botUsername ? await usernameResolver(button.loginUrl.botUsername) : { _: "inputUserSelf" },
      request_write_access: button.loginUrl.requestWriteAccess || undefined,
      style,
    };
  } else if ("switchInlineQuery" in button) {
    return { _: "keyboardButtonSwitchInline", text: button.text, query: button.switchInlineQuery, style };
  } else if ("switchInlineQueryCurrentChat" in button) {
    return { _: "keyboardButtonSwitchInline", text: button.text, query: button.switchInlineQueryCurrentChat, same_peer: true, style };
  } else if ("switchInlineQueryChosenChats" in button) {
    const peerTypes = new Array<Api.InlineQueryPeerType>();
    const { allowUsers, allowBots, allowGroups, allowChannels } = button.switchInlineQueryChosenChats;
    if (!allowUsers && !allowBots && !allowGroups && !allowChannels) {
      throw new InputError("switchInlineQueryChosenChats: At least one chat type must be allowed.");
    }
    if (allowUsers) {
      peerTypes.push({ _: "inlineQueryPeerTypeBotPM" });
    }
    if (allowBots) {
      peerTypes.push({ _: "inlineQueryPeerTypeSameBotPM" }, { _: "inlineQueryPeerTypeBotPM" });
    }
    if (allowGroups) {
      peerTypes.push({ _: "inlineQueryPeerTypeChat" }, { _: "inlineQueryPeerTypeMegagroup" });
    }
    if (allowChannels) {
      peerTypes.push({ _: "inlineQueryPeerTypeBroadcast" });
    }
    return { _: "keyboardButtonSwitchInline", text: button.text, query: button.switchInlineQueryChosenChats.query, peer_types: peerTypes, style };
  } else if ("pay" in button) {
    return { _: "keyboardButtonBuy", text: button.text, style };
  } else if ("copy" in button) {
    return { _: "keyboardButtonCopy", text: button.text, copy_text: button.copy, style };
  } else {
    unreachable();
  }
}
