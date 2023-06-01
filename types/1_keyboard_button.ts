import { UNREACHABLE } from "../utilities/0_control.ts";
import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { ChatAdministratorRights, chatAdministratorRightsToTlObject, constructChatAdministratorRights } from "./0_chat_administrator_rights.ts";
import { KeyboardButtonPollType } from "./0_keyboard_button_poll_type.ts";
import { WebAppInfo } from "./0_web_app_info.ts";

export declare namespace KeyboardButton {
  export interface Text {
    text: string;
  }

  export interface RequestUser extends Text {
    requestUser: {
      requestId: number;
      userIsBot?: boolean;
      userIsPremium?: boolean;
    };
  }

  export interface RequestChat extends Text {
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

  export interface RequestContact extends Text {
    requestContact: true;
  }

  export interface RequestLocation extends Text {
    requestLocation: true;
  }

  export interface RequestPoll extends Text {
    requestPoll: KeyboardButtonPollType;
  }

  export interface WebApp extends Text {
    webApp: WebAppInfo;
  }
}

export type KeyboardButton =
  | KeyboardButton.Text
  | KeyboardButton.RequestUser
  | KeyboardButton.RequestChat
  | KeyboardButton.RequestContact
  | KeyboardButton.RequestLocation
  | KeyboardButton.RequestPoll
  | KeyboardButton.WebApp;

export function constructKeyboardButton(button_: types.TypeKeyboardButton): KeyboardButton {
  if (button_ instanceof types.KeyboardButton) {
    return { text: button_.text };
  } else if (button_ instanceof types.KeyboardButtonRequestPeer) {
    if (button_.peerType instanceof types.RequestPeerTypeUser) {
      return {
        text: button_.text,
        requestUser: {
          requestId: button_.buttonId,
          userIsBot: button_.peerType.bot || false,
          userIsPremium: button_.peerType.premium || false,
        },
      };
    } else if (button_.peerType instanceof types.RequestPeerTypeChat) {
      const button: KeyboardButton.RequestChat = {
        text: button_.text,
        requestChat: {
          requestId: button_.buttonId,
          chatIsChannel: false, // GUESS
          chatIsForum: button_.peerType.forum || false,
          chatHasUsername: button_.peerType.hasUsername || false,
          chatIsCreated: button_.peerType.creator || false,
          botIsMember: button_.peerType.botParticipant || false,
        },
      };
      if (button_.peerType.botAdminRights) {
        button.requestChat.botAdministratorRights = constructChatAdministratorRights(button_.peerType.botAdminRights[as](types.ChatAdminRights));
      }
      if (button_.peerType.userAdminRights) {
        button.requestChat.userAdministratorRights = constructChatAdministratorRights(button_.peerType.userAdminRights[as](types.ChatAdminRights));
      }
      return button;
    } else if (button_.peerType instanceof types.RequestPeerTypeBroadcast) {
      const button: KeyboardButton.RequestChat = {
        text: button_.text,
        requestChat: {
          requestId: button_.buttonId,
          chatIsChannel: true, // GUESS
          chatIsCreated: button_.peerType.creator || false,
          chatHasUsername: button_.peerType.hasUsername || false,
        },
      };
      if (button_.peerType.botAdminRights) {
        button.requestChat.botAdministratorRights = constructChatAdministratorRights(button_.peerType.botAdminRights[as](types.ChatAdminRights));
      }
      if (button_.peerType.userAdminRights) {
        button.requestChat.userAdministratorRights = constructChatAdministratorRights(button_.peerType.userAdminRights[as](types.ChatAdminRights));
      }
      return button;
    } else {
      UNREACHABLE();
    }
  } else if (button_ instanceof types.KeyboardButtonRequestPhone) {
    return { text: button_.text, requestContact: true };
  } else if (button_ instanceof types.KeyboardButtonRequestGeoLocation) {
    return { text: button_.text, requestLocation: true };
  } else if (button_ instanceof types.KeyboardButtonRequestPoll) {
    const button: KeyboardButton.RequestPoll = { text: button_.text, requestPoll: {} };

    if (button_.quiz) {
      button.requestPoll.type = "quiz";
    }

    return button;
  } else if (button_ instanceof types.KeyboardButtonWebView || button_ instanceof types.KeyboardButtonSimpleWebView) {
    return { text: button_.text, webApp: { url: button_.url } };
  } else {
    UNREACHABLE();
  }
}

export function keyboardButtonToTlObject(button: KeyboardButton) {
  if ("requestUser" in button) {
    return new types.KeyboardButtonRequestPeer({
      text: button.text,
      buttonId: button.requestUser.requestId,
      peerType: new types.RequestPeerTypeUser({ bot: button.requestUser.userIsBot, premium: button.requestUser.userIsPremium }),
    });
  } else if ("requestChat" in button) {
    if (!button.requestChat.chatIsChannel) { // GUESS
      return new types.KeyboardButtonRequestPeer({
        text: button.text,
        buttonId: button.requestChat.requestId,
        peerType: new types.RequestPeerTypeChat({
          forum: button.requestChat.chatIsForum,
          hasUsername: button.requestChat.chatHasUsername,
          creator: button.requestChat.chatIsCreated || undefined,
          botParticipant: button.requestChat.botIsMember || undefined,
          botAdminRights: button.requestChat.botAdministratorRights ? chatAdministratorRightsToTlObject(button.requestChat.botAdministratorRights) : undefined,
          userAdminRights: button.requestChat.userAdministratorRights ? chatAdministratorRightsToTlObject(button.requestChat.userAdministratorRights) : undefined,
        }),
      });
    } else {
      return new types.KeyboardButtonRequestPeer({
        text: button.text,
        buttonId: button.requestChat.requestId,
        peerType: new types.RequestPeerTypeBroadcast({
          hasUsername: button.requestChat.chatHasUsername,
          creator: button.requestChat.chatIsCreated || undefined,
          botAdminRights: button.requestChat.botAdministratorRights ? chatAdministratorRightsToTlObject(button.requestChat.botAdministratorRights) : undefined,
          userAdminRights: button.requestChat.userAdministratorRights ? chatAdministratorRightsToTlObject(button.requestChat.userAdministratorRights) : undefined,
        }),
      });
    }
  } else if ("requestContact" in button) {
    return new types.KeyboardButtonRequestPhone({ text: button.text });
  } else if ("requestLocation" in button) {
    return new types.KeyboardButtonRequestGeoLocation({ text: button.text });
  } else if ("requestPoll" in button) {
    return new types.KeyboardButtonRequestPoll({ text: button.text, quiz: button.requestPoll.type == "quiz" });
  } else if ("webApp" in button) {
    return new types.KeyboardButtonWebView({ text: button.text, url: button.webApp.url });
  } else {
    UNREACHABLE();
  }
}
