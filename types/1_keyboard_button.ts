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
import { Api } from "../2_tl.ts";
import { type ChatAdministratorRights, chatAdministratorRightsToTlObject, constructChatAdministratorRights } from "./0_chat_administrator_rights.ts";
import type { KeyboardButtonPollType } from "./0_keyboard_button_poll_type.ts";
import type { MiniAppButtonInfo } from "./0_mini_app_button_info.ts";

/** @unlisted */
export interface KeyboardButtonText {
  /** @discriminator */
  text: string;
}

/** @unlisted */
export interface KeyboardButtonRequestUser extends KeyboardButtonText {
  /** @discriminator */
  requestUser: {
    requestId: number;
    userIsBot?: boolean;
    userIsPremium?: boolean;
  };
}

/** @unlisted */
export interface KeyboardButtonRequestChat extends KeyboardButtonText {
  /** @discriminator */
  requestChat: {
    requestId: number;
    chatIsChannel: boolean;
    chatIsForum?: boolean;
    chatHasUsername?: boolean;
    chatIsCreated?: boolean;
    userAdministratorRights?: ChatAdministratorRights;
    botAdministratorRights?: ChatAdministratorRights;
    botIsMember?: boolean;
  };
}

/** @unlisted */
export interface KeyboardButtonRequestContact extends KeyboardButtonText {
  /** @discriminator */
  requestContact: true;
}

/** @unlisted */
export interface KeyboardButtonRequestLocation extends KeyboardButtonText {
  /** @discriminator */
  requestLocation: true;
}

/** @unlisted */
export interface KeyboardButtonRequestPoll extends KeyboardButtonText {
  /** @discriminator */
  requestPoll: KeyboardButtonPollType;
}

/** @unlisted */
export interface KeyboardButtonMiniApp extends KeyboardButtonText {
  /** @discriminator */
  miniApp: MiniAppButtonInfo;
}

/** A button of a custom keyboard. */
export type KeyboardButton =
  | KeyboardButtonText
  | KeyboardButtonRequestUser
  | KeyboardButtonRequestChat
  | KeyboardButtonRequestContact
  | KeyboardButtonRequestLocation
  | KeyboardButtonRequestPoll
  | KeyboardButtonMiniApp;

export function constructKeyboardButton(button_: Api.KeyboardButton): KeyboardButton {
  if (Api.is("keyboardButton", button_)) {
    return { text: button_.text };
  } else if (Api.is("keyboardButtonRequestPeer", button_)) {
    if (Api.is("requestPeerTypeUser", button_.peer_type)) {
      return {
        text: button_.text,
        requestUser: {
          requestId: button_.button_id,
          userIsBot: button_.peer_type.bot || false,
          userIsPremium: button_.peer_type.premium || false,
        },
      };
    } else if (Api.is("requestPeerTypeChat", button_.peer_type)) {
      const button: KeyboardButtonRequestChat = {
        text: button_.text,
        requestChat: {
          requestId: button_.button_id,
          chatIsChannel: false, // GUESS
          chatIsForum: button_.peer_type.forum || false,
          chatHasUsername: button_.peer_type.has_username || false,
          chatIsCreated: button_.peer_type.creator || false,
          botIsMember: button_.peer_type.bot_participant || false,
        },
      };
      if (button_.peer_type.bot_admin_rights) {
        button.requestChat.botAdministratorRights = constructChatAdministratorRights(button_.peer_type.bot_admin_rights);
      }
      if (button_.peer_type.user_admin_rights) {
        button.requestChat.userAdministratorRights = constructChatAdministratorRights(button_.peer_type.user_admin_rights);
      }
      return button;
    } else if (Api.is("requestPeerTypeBroadcast", button_.peer_type)) {
      const button: KeyboardButtonRequestChat = {
        text: button_.text,
        requestChat: {
          requestId: button_.button_id,
          chatIsChannel: true, // GUESS
          chatIsCreated: button_.peer_type.creator || false,
          chatHasUsername: button_.peer_type.has_username || false,
        },
      };
      if (button_.peer_type.bot_admin_rights) {
        button.requestChat.botAdministratorRights = constructChatAdministratorRights(button_.peer_type.bot_admin_rights);
      }
      if (button_.peer_type.user_admin_rights) {
        button.requestChat.userAdministratorRights = constructChatAdministratorRights(button_.peer_type.user_admin_rights);
      }
      return button;
    } else {
      unreachable();
    }
  } else if (Api.is("keyboardButtonRequestPhone", button_)) {
    return { text: button_.text, requestContact: true };
  } else if (Api.is("keyboardButtonRequestGeoLocation", button_)) {
    return { text: button_.text, requestLocation: true };
  } else if (Api.is("keyboardButtonRequestPoll", button_)) {
    const button: KeyboardButtonRequestPoll = { text: button_.text, requestPoll: {} };

    if (button_.quiz) {
      button.requestPoll.type = "quiz";
    }

    return button;
  } else if (Api.is("keyboardButtonWebView", button_) || Api.is("keyboardButtonSimpleWebView", button_)) {
    return { text: button_.text, miniApp: { url: button_.url } };
  } else {
    unreachable();
  }
}

export function keyboardButtonToTlObject(button: KeyboardButton): Api.KeyboardButton {
  if ("requestUser" in button) {
    return { _: "keyboardButtonRequestPeer", text: button.text, button_id: button.requestUser.requestId, peer_type: ({ _: "requestPeerTypeUser", bot: button.requestUser.userIsBot, premium: button.requestUser.userIsPremium }), max_quantity: 1 };
  } else if ("requestChat" in button) {
    if (!button.requestChat.chatIsChannel) { // GUESS
      return { _: "keyboardButtonRequestPeer", text: button.text, button_id: button.requestChat.requestId, peer_type: ({ _: "requestPeerTypeChat", forum: button.requestChat.chatIsForum, has_username: button.requestChat.chatHasUsername, creator: button.requestChat.chatIsCreated || undefined, bot_participant: button.requestChat.botIsMember || undefined, bot_admin_rights: button.requestChat.botAdministratorRights ? chatAdministratorRightsToTlObject(button.requestChat.botAdministratorRights) : undefined, user_admin_rights: button.requestChat.userAdministratorRights ? chatAdministratorRightsToTlObject(button.requestChat.userAdministratorRights) : undefined }), max_quantity: 1 };
    } else {
      return { _: "keyboardButtonRequestPeer", text: button.text, button_id: button.requestChat.requestId, peer_type: ({ _: "requestPeerTypeBroadcast", has_username: button.requestChat.chatHasUsername, creator: button.requestChat.chatIsCreated || undefined, bot_admin_rights: button.requestChat.botAdministratorRights ? chatAdministratorRightsToTlObject(button.requestChat.botAdministratorRights) : undefined, user_admin_rights: button.requestChat.userAdministratorRights ? chatAdministratorRightsToTlObject(button.requestChat.userAdministratorRights) : undefined }), max_quantity: 1 };
    }
  } else if ("requestContact" in button) {
    return { _: "keyboardButtonRequestPhone", text: button.text };
  } else if ("requestLocation" in button) {
    return { _: "keyboardButtonRequestGeoLocation", text: button.text };
  } else if ("requestPoll" in button) {
    return { _: "keyboardButtonRequestPoll", text: button.text, quiz: button.requestPoll.type === "quiz" };
  } else if ("miniApp" in button) {
    return { _: "keyboardButtonWebView", text: button.text, url: button.miniApp.url };
  } else {
    return { _: "keyboardButton", text: button.text };
  }
}
