import { UNREACHABLE } from "../utilities/0_control.ts";
import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { ChatAdministratorRights, chatAdministratorRightsToTlObject, constructChatAdministratorRights } from "./0_chat_administrator_rights.ts";
import { KeyboardButtonPollType } from "./0_keyboard_button_poll_type.ts";
import { WebAppInfo } from "./0_web_app_info.ts";

export declare namespace KeyboardButton {
  export interface Text {
    /** Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed */
    text: string;
  }

  /** This object defines the criteria used to request a suitable user. The identifier of the selected user will be shared with the bot when the corresponding button is pressed. [More about requesting users](https://core.telegram.org/bots/features#chat-and-user-selection) */
  export interface RequestUser extends Text {
    /** Optional. If specified, pressing the button will open a list of suitable users. Tapping on any user will send their identifier to the bot in a “user_shared” service message. Available in private chats only. */
    requestUser: {
      /** Signed 32-bit identifier of the request, which will be received back in the [UserShared](https://core.telegram.org/bots/api#usershared) object. Must be unique within the message */
      requestId: number;
      /** Optional. Pass True to request a bot, pass False to request a regular user. If not specified, no additional restrictions are applied. */
      userIsBot?: boolean;
      /** Optional. Pass True to request a premium user, pass False to request a non-premium user. If not specified, no additional restrictions are applied. */
      userIsPremium?: boolean;
    };
  }

  /** This object defines the criteria used to request a suitable chat. The identifier of the selected chat will be shared with the bot when the corresponding button is pressed. [More about requesting chats](https://core.telegram.org/bots/features#chat-and-user-selection) */
  export interface RequestChat extends Text {
    /** Optional. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a “chat_shared” service message. Available in private chats only. */
    requestChat: {
      /** Signed 32-bit identifier of the request, which will be received back in the [ChatShared](https://core.telegram.org/bots/api#chatshared) object. Must be unique within the message */
      requestId: number;
      /** Pass True to request a channel chat, pass False to request a group or a supergroup chat. */
      chatIsChannel: boolean;
      /** Optional. Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied. */
      chatIsForum?: boolean;
      /** Optional. Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied. */
      chatHasUsername?: boolean;
      /** Optional. Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied. */
      chatIsCreated?: boolean;
      /** Optional. A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of _bot_administrator_rights_. If not specified, no additional restrictions are applied. */
      userAdministratorRights?: ChatAdministratorRights;
      /** Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of _user_administrator_rights_. If not specified, no additional restrictions are applied. */
      botAdministratorRights?: ChatAdministratorRights;
      /** Optional. Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied. */
      botIsMember?: boolean;
    };
  }

  export interface RequestContact extends Text {
    /** Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only. */
    requestContact: true;
  }

  export interface RequestLocation extends Text {
    /** Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only. */
    requestLocation: true;
  }

  export interface RequestPoll extends Text {
    /** Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only. */
    requestPoll: KeyboardButtonPollType;
  }

  export interface WebApp extends Text {
    /** Optional. If specified, the described [Web App](https://core.telegram.org/bots/webapps) will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only. */
    webApp: WebAppInfo;
  }
}

/** This object represents one button of the reply keyboard. For simple text buttons, _String_ can be used instead of this object to specify the button text. The optional fields _web_app_, _request_user_, _request_chat_, _request_contact_, _request_location_, and _request_poll_ are mutually exclusive. */
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
