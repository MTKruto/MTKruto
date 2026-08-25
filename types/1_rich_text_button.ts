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
import type { LoginUrl } from "./0_login_url.ts";

/** @unlisted */
export interface _RichTextButtonBase {
  /** The style of the button. */
  style?: "danger" | "success" | "primary" | "link";
}

/**
 * An inline keyboard button that, when pressed, opens the specified URL.
 * @unlisted
 */
export interface RichTextButtonURL extends _RichTextButtonBase {
  /** The URL to open. */
  type: "url";
  url: string;
}

/**
 * An inline keyboard button that, when pressed, sends back the specified callback data.
 * @unlisted
 */
export interface RichTextButtonCallback extends _RichTextButtonBase {
  type: "callbackData";
  /** The callback data to send back. */
  callbackData: string;
}

/**
 * An inline keyboard button that, when pressed, launches the specified mini app.
 * @unlisted
 */
/** @unlisted */
export interface RichTextButtonMiniApp extends _RichTextButtonBase {
  type: "miniApp";
  /** An HTTPS URL of the mini app to be opened with additional data. */
  url: string;
}

/**
 * An inline keyboard button that, when pressed, logs the user into the specified URL.
 * @unlisted
 */
export interface RichTextButtonLogin extends _RichTextButtonBase {
  type: "loginUrl";
  /** The URL to log into. */
  loginUrl: LoginUrl;
}

/**
 * An inline keyboard button that, when pressed, switches to inline mode in a chat chosen by the user.
 * @unlisted
 */
export interface RichTextButtonSwitchInline extends _RichTextButtonBase {
  type: "switchInlineQuery";
  /** The query to type into the user's message box once switched to inline. */
  inlineQuery: string;
}

/**
 * An inline keyboard button that, when pressed, switches to inline mode in the current chat.
 * @unlisted
 */
export interface RichTextButtonSwitchInlineCurrent extends _RichTextButtonBase {
  type: "switchInlineQueryCurrentChat";
  /** The query to type into the user's message box once switched to inline. */
  inlineQuery: string;
}

/**
 * An inline keyboard button that, when pressed, switches to inline mode in a chat chosen by the user from a limited subset of chats.
 * @unlisted
 */
export interface RichTextButtonSwitchInlineChosen extends _RichTextButtonBase {
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
export interface RichTextButtonGame extends _RichTextButtonBase {
  type: "callbackGame";
}

/**
 * An inline keyboard button that, when pressed, initiates a payment.
 * @unlisted
 */
export interface RichTextButtonPay extends _RichTextButtonBase {
  type: "pay";
}

/**
 * An inline keyboard button that, when pressed, copies the text inside its `textToCopy` field.
 * @unlisted
 */
export interface RichTextButtonCopy extends _RichTextButtonBase {
  type: "copy";
  textToCopy: string;
}

/**
 * A disabled inline keyboard button.
 * @unlisted
 */
export interface RichTextButtonDisabled extends _RichTextButtonBase {
  type: "disabled";
}

/** Any type of an inline keyboard's button. */
export type RichTextButton =
  | RichTextButtonURL
  | RichTextButtonCallback
  | RichTextButtonMiniApp
  | RichTextButtonLogin
  | RichTextButtonSwitchInline
  | RichTextButtonSwitchInlineCurrent
  | RichTextButtonSwitchInlineChosen
  | RichTextButtonGame
  | RichTextButtonPay
  | RichTextButtonCopy
  | RichTextButtonDisabled;

export function constructRichTextButton(button_: Api.InlineButtonType, style_: Api.richButtonStyle | undefined): RichTextButton {
  let style: _RichTextButtonBase["style"] | undefined;
  if (style_) {
    if (style_.bg_danger) {
      style = "danger";
    } else if (style_.bg_primary) {
      style = "primary";
    } else if (style_.bg_success) {
      style = "success";
    } else if (style_.link) {
      style = "link";
    }
  }
  if (Api.is("inlineButtonTypeUrl", button_)) {
    return cleanObject({ type: "url", style, url: button_.url });
  } else if (Api.is("inlineButtonTypeCallback", button_)) {
    return cleanObject({ type: "callbackData", style, callbackData: decodeText(button_.data) });
  } else if (Api.is("inlineButtonTypeWebView", button_)) {
    return cleanObject({ type: "miniApp", style, url: button_.url });
  } else if (Api.is("inlineButtonTypeUrlAuth", button_)) {
    return cleanObject({ type: "loginUrl", style, loginUrl: { url: button_.url, forwardText: button_.fwd_text } });
  } else if (Api.is("inlineButtonTypeSwitchInline", button_)) {
    if (button_.same_peer) {
      return cleanObject({ type: "switchInlineQueryCurrentChat", style, inlineQuery: button_.query });
    } else if (button_.peer_types && button_.peer_types.length) {
      const isUser = button_.peer_types.some((v) => v._ === "inlineQueryPeerTypeBotPM") || undefined;
      const isBot = button_.peer_types.some((v) => v._ === "inlineQueryPeerTypeSameBotPM" || v._ === "inlineQueryPeerTypeBotPM") || undefined;
      const isGroup = button_.peer_types.some((v) => v._ === "inlineQueryPeerTypeChat" || v._ === "inlineQueryPeerTypeMegagroup") || undefined;
      const isChannel = button_.peer_types.some((v) => v._ === "inlineQueryPeerTypeBroadcast") || undefined;
      return cleanObject({
        type: "switchInlineQueryChosenChats",

        style,
        inlineQuery: button_.query,
        isUser,
        isBot,
        isGroup,
        isChannel,
      });
    } else {
      return cleanObject({ type: "switchInlineQuery", style, inlineQuery: button_.query });
    }
  } else if (Api.is("inlineButtonTypeBuy", button_)) {
    return cleanObject({ type: "pay", style });
  } else if (Api.is("inlineButtonTypeGame", button_)) {
    return cleanObject({ type: "callbackGame", style });
  } else if (Api.is("inlineButtonTypeCopy", button_)) {
    return cleanObject({ type: "copy", style, textToCopy: button_.copy_text });
  } else if (Api.is("inlineButtonTypeDisabled", button_)) {
    return cleanObject({ type: "disabled", style });
  } else {
    unreachable();
  }
}

export async function richTextButtonToTlObject(button: RichTextButton, usernameResolver: UsernameResolver): Promise<Api.InlineButtonType> {
  switch (button.type) {
    case "url":
      return { _: "inlineButtonTypeUrl", url: button.url };
    case "callbackData":
      return { _: "inlineButtonTypeCallback", data: encodeText(button.callbackData) };
    case "miniApp":
      return { _: "inlineButtonTypeWebView", url: button.url };
    case "loginUrl":
      return { _: "inputInlineButtonTypeUrlAuth", url: button.loginUrl.url, fwd_text: button.loginUrl.forwardText, bot: button.loginUrl.botUsername ? await usernameResolver(button.loginUrl.botUsername) : { _: "inputUserSelf" }, request_write_access: button.loginUrl.requestWriteAccess || undefined };
    case "switchInlineQuery":
      return { _: "inlineButtonTypeSwitchInline", query: button.inlineQuery };
    case "switchInlineQueryCurrentChat":
      return { _: "inlineButtonTypeSwitchInline", query: button.inlineQuery, same_peer: true };
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
      return { _: "inlineButtonTypeSwitchInline", query: button.inlineQuery, peer_types: peerTypes };
    }
    case "callbackGame":
      return { _: "inlineButtonTypeGame" };
    case "pay":
      return { _: "inlineButtonTypeBuy" };
    case "copy":
      return { _: "inlineButtonTypeCopy", copy_text: button.textToCopy };
    case "disabled":
      return { _: "inlineButtonTypeDisabled" };
  }
}
