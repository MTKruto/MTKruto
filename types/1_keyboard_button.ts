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
import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { type ButtonStyle, buttonStyleToTlObject, constructButtonStyle } from "./0_button_style.ts";
import { type ChatAdministratorRights, chatAdministratorRightsToTlObject, constructChatAdministratorRights } from "./0_chat_administrator_rights.ts";

/** @unlisted */
export interface _KeyboardButtonBase {
  text: string;
  style?: ButtonStyle;
}

/** @unlisted */
export interface KeyboardButtonText {
  type: "text";
  text: string;
  style?: ButtonStyle;
}

/** @unlisted */
export interface KeyboardButtonRequestUser extends _KeyboardButtonBase {
  type: "requestUser";
  requestId: number;
  isBot?: boolean;
  isPremium?: boolean;
}

/** @unlisted */
export interface KeyboardButtonRequestChat extends _KeyboardButtonBase {
  type: "requestChat";
  requestId: number;
  isChannel: boolean;
  isForum?: boolean;
  hasUsername?: boolean;
  isOwner?: boolean;
  userAdministratorRights?: ChatAdministratorRights;
  botAdministratorRights?: ChatAdministratorRights;
  isBotMember?: boolean;
}

/** @unlisted */
export interface KeyboardButtonRequestContact extends _KeyboardButtonBase {
  type: "requestContact";
}

/** @unlisted */
export interface KeyboardButtonRequestLocation extends _KeyboardButtonBase {
  type: "requestLocation";
}

/** @unlisted */
export interface KeyboardButtonRequestPoll extends _KeyboardButtonBase {
  type: "requestPoll";
  /** If a type is not specified, the user will be allowed to choose either type. */
  pollType?: "regular" | "quiz";
}

/** @unlisted */
export interface KeyboardButtonMiniApp extends _KeyboardButtonBase {
  type: "miniApp";
  /** An HTTPS URL of the mini app to be opened with additional data. */
  url: string;
}

/** Any type of a custom keyboard's button. */
export type KeyboardButton =
  | KeyboardButtonText
  | KeyboardButtonRequestUser
  | KeyboardButtonRequestChat
  | KeyboardButtonRequestContact
  | KeyboardButtonRequestLocation
  | KeyboardButtonRequestPoll
  | KeyboardButtonMiniApp;

export function constructKeyboardButton(button_: Api.KeyboardButton): KeyboardButton {
  const text = button_.text;
  const style = constructButtonStyle(button_.style);
  if (Api.is("buttonTypeDefault", button_.type)) {
    return cleanObject({ type: "text", text, style });
  } else if (Api.is("buttonTypeRequestPeer", button_.type)) {
    if (Api.is("requestPeerTypeUser", button_.type.peer_type)) {
      return cleanObject({
        type: "requestUser",
        text,
        style,
        requestId: button_.type.button_id,
        isBot: button_.type.peer_type.bot,
        isPremium: button_.type.peer_type.premium,
      });
    } else if (Api.is("requestPeerTypeChat", button_.type.peer_type)) {
      const button: KeyboardButtonRequestChat = {
        type: "requestChat",
        text,
        requestId: button_.type.button_id,
        isChannel: false, // GUESS
        isForum: button_.type.peer_type.forum,
        hasUsername: button_.type.peer_type.has_username,
        isOwner: button_.type.peer_type.creator || false,
        isBotMember: button_.type.peer_type.bot_participant || false,
      };
      if (button_.type.peer_type.bot_admin_rights) {
        button.botAdministratorRights = constructChatAdministratorRights(button_.type.peer_type.bot_admin_rights);
      }
      if (button_.type.peer_type.user_admin_rights) {
        button.userAdministratorRights = constructChatAdministratorRights(button_.type.peer_type.user_admin_rights);
      }
      if (style) {
        button.style = style;
      }
      return button;
    } else if (Api.is("requestPeerTypeBroadcast", button_.type.peer_type)) {
      const button: KeyboardButtonRequestChat = {
        type: "requestChat",
        text,
        requestId: button_.type.button_id,
        isChannel: true, // GUESS
        isOwner: button_.type.peer_type.creator || false,
        hasUsername: button_.type.peer_type.has_username,
      };
      if (button_.type.peer_type.bot_admin_rights) {
        button.botAdministratorRights = constructChatAdministratorRights(button_.type.peer_type.bot_admin_rights);
      }
      if (button_.type.peer_type.user_admin_rights) {
        button.userAdministratorRights = constructChatAdministratorRights(button_.type.peer_type.user_admin_rights);
      }
      if (style) {
        button.style = style;
      }
      return button;
    } else {
      unreachable();
    }
  } else if (Api.is("buttonTypeRequestPhone", button_.type)) {
    return cleanObject({ type: "requestContact", text, style });
  } else if (Api.is("buttonTypeRequestGeoLocation", button_.type)) {
    return cleanObject({ type: "requestLocation", text, style });
  } else if (Api.is("buttonTypeRequestPoll", button_.type)) {
    const button: KeyboardButtonRequestPoll = { type: "requestPoll", text };
    if (style) {
      button.style = style;
    }
    if (button_.type.quiz) {
      button.pollType = "quiz";
    }
    return button;
  } else if (Api.is("buttonTypeSimpleWebView", button_.type)) {
    return cleanObject({ type: "miniApp", text, style, url: button_.type.url });
  } else {
    unreachable();
  }
}

export function keyboardButtonToTlObject(button: KeyboardButton): Api.KeyboardButton {
  const style = buttonStyleToTlObject(button.style);
  switch (button.type) {
    case "text":
      return { _: "keyboardButton", text: button.text, style, type: { _: "buttonTypeDefault" } };
    case "requestUser":
      return {
        _: "keyboardButton",
        text: button.text,
        style,
        type: { _: "buttonTypeRequestPeer", button_id: button.requestId, peer_type: { _: "requestPeerTypeUser", bot: button.isBot, premium: button.isPremium }, max_quantity: 1 },
      };
    case "requestChat":
      if (!button.isChannel) { // GUESS
        return {
          _: "keyboardButton",
          text: button.text,
          style,
          type: {
            _: "buttonTypeRequestPeer",
            button_id: button.requestId,
            peer_type: { _: "requestPeerTypeChat", forum: button.isForum, has_username: button.hasUsername, creator: button.isOwner || undefined, bot_participant: button.isBotMember || undefined, bot_admin_rights: button.botAdministratorRights ? chatAdministratorRightsToTlObject(button.botAdministratorRights) : undefined, user_admin_rights: button.userAdministratorRights ? chatAdministratorRightsToTlObject(button.userAdministratorRights) : undefined },
            max_quantity: 1,
          },
        };
      } else {
        return {
          _: "keyboardButton",
          text: button.text,
          style,
          type: {
            _: "buttonTypeRequestPeer",
            button_id: button.requestId,
            peer_type: { _: "requestPeerTypeBroadcast", has_username: button.hasUsername, creator: button.isOwner || undefined, bot_admin_rights: button.botAdministratorRights ? chatAdministratorRightsToTlObject(button.botAdministratorRights) : undefined, user_admin_rights: button.userAdministratorRights ? chatAdministratorRightsToTlObject(button.userAdministratorRights) : undefined },
            max_quantity: 1,
          },
        };
      }
    case "requestContact":
      return {
        _: "keyboardButton",
        text: button.text,
        style,
        type: { _: "buttonTypeRequestPhone" },
      };
    case "requestLocation":
      return {
        _: "keyboardButton",
        text: button.text,
        style,
        type: { _: "buttonTypeRequestGeoLocation" },
      };
    case "requestPoll":
      return {
        _: "keyboardButton",
        text: button.text,
        style,
        type: { _: "buttonTypeRequestPoll", quiz: button.pollType === undefined ? undefined : button.pollType === "quiz" },
      };
    case "miniApp":
      return {
        _: "keyboardButton",
        text: button.text,
        style,
        type: { _: "buttonTypeSimpleWebView", url: button.url },
      };
  }
}
