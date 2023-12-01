import { UNREACHABLE } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { ChatAdministratorRights, chatAdministratorRightsToTlObject, constructChatAdministratorRights } from "./0_chat_administrator_rights.ts";
import { KeyboardButtonPollType } from "./0_keyboard_button_poll_type.ts";
import { WebAppInfo } from "./0_web_app_info.ts";

export declare namespace KeyboardButton {
  export interface Text {
    /** The button's text. */
    text: string;
  }

  /** This object defines the criteria used to request a suitable user. The identifier of the selected user will be shared with the bot when the corresponding button is pressed. */
  export interface RequestUser extends Text {
    /** If specified, pressing the button will open a list of suitable users. Tapping on any user will send their identifier to the bot in a "user_shared" service message. Available in private chats only. */
    requestUser: {
      /** Signed 32-bit identifier of the request */
      requestId: number;
      /** Pass True to request a bot, pass False to request a regular user. If not specified, no additional restrictions are applied. */
      userIsBot?: boolean;
      /** Pass True to request a premium user, pass False to request a non-premium user. If not specified, no additional restrictions are applied. */
      userIsPremium?: boolean;
    };
  }

  /** This object defines the criteria used to request a suitable chat. The identifier of the selected chat will be shared with the bot when the corresponding button is pressed. */
  export interface RequestChat extends Text {
    /** If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a "chat_shared" service message. Available in private chats only. */
    requestChat: {
      /** Signed 32-bit identifier of the request */
      requestId: number;
      /** Pass True to request a channel chat, pass False to request a group or a supergroup chat. */
      chatIsChannel: boolean;
      /** Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied. */
      chatIsForum?: boolean;
      /** Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied. */
      chatHasUsername?: boolean;
      /** Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied. */
      chatIsCreated?: boolean;
      /** A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of _bot_administrator_rights_. If not specified, no additional restrictions are applied. */
      userAdministratorRights?: ChatAdministratorRights;
      /** A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of _user_administrator_rights_. If not specified, no additional restrictions are applied. */
      botAdministratorRights?: ChatAdministratorRights;
      /** Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied. */
      botIsMember?: boolean;
    };
  }

  export interface RequestContact extends Text {
    /** If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only. */
    requestContact: true;
  }

  export interface RequestLocation extends Text {
    /** If True, the user's current location will be sent when the button is pressed. Available in private chats only. */
    requestLocation: true;
  }

  export interface RequestPoll extends Text {
    /** If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only. */
    requestPoll: KeyboardButtonPollType;
  }

  export interface WebApp extends Text {
    /** If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a "web_app_data" service message. Available in private chats only. */
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

export function constructKeyboardButton(button_: types.KeyboardButton): KeyboardButton {
  if (button_ instanceof types.keyboardButton) {
    return { text: button_.text };
  } else if (button_ instanceof types.keyboardButtonRequestPeer) {
    if (button_.peer_type instanceof types.requestPeerTypeUser) {
      return {
        text: button_.text,
        requestUser: {
          requestId: button_.button_id,
          userIsBot: button_.peer_type.bot || false,
          userIsPremium: button_.peer_type.premium || false,
        },
      };
    } else if (button_.peer_type instanceof types.requestPeerTypeChat) {
      const button: KeyboardButton.RequestChat = {
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
    } else if (button_.peer_type instanceof types.requestPeerTypeBroadcast) {
      const button: KeyboardButton.RequestChat = {
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
      UNREACHABLE();
    }
  } else if (button_ instanceof types.keyboardButtonRequestPhone) {
    return { text: button_.text, requestContact: true };
  } else if (button_ instanceof types.keyboardButtonRequestGeoLocation) {
    return { text: button_.text, requestLocation: true };
  } else if (button_ instanceof types.keyboardButtonRequestPoll) {
    const button: KeyboardButton.RequestPoll = { text: button_.text, requestPoll: {} };

    if (button_.quiz) {
      button.requestPoll.type = "quiz";
    }

    return button;
  } else if (button_ instanceof types.keyboardButtonWebView || button_ instanceof types.keyboardButtonSimpleWebView) {
    return { text: button_.text, webApp: { url: button_.url } };
  } else {
    UNREACHABLE();
  }
}

export function keyboardButtonToTlObject(button: KeyboardButton) {
  if ("requestUser" in button) {
    return new types.keyboardButtonRequestPeer({
      text: button.text,
      button_id: button.requestUser.requestId,
      peer_type: new types.requestPeerTypeUser({ bot: button.requestUser.userIsBot, premium: button.requestUser.userIsPremium }),
    });
  } else if ("requestChat" in button) {
    if (!button.requestChat.chatIsChannel) { // GUESS
      return new types.keyboardButtonRequestPeer({
        text: button.text,
        button_id: button.requestChat.requestId,
        peer_type: new types.requestPeerTypeChat({
          forum: button.requestChat.chatIsForum,
          has_username: button.requestChat.chatHasUsername,
          creator: button.requestChat.chatIsCreated || undefined,
          bot_participant: button.requestChat.botIsMember || undefined,
          bot_admin_rights: button.requestChat.botAdministratorRights ? chatAdministratorRightsToTlObject(button.requestChat.botAdministratorRights) : undefined,
          user_admin_rights: button.requestChat.userAdministratorRights ? chatAdministratorRightsToTlObject(button.requestChat.userAdministratorRights) : undefined,
        }),
      });
    } else {
      return new types.keyboardButtonRequestPeer({
        text: button.text,
        button_id: button.requestChat.requestId,
        peer_type: new types.requestPeerTypeBroadcast({
          has_username: button.requestChat.chatHasUsername,
          creator: button.requestChat.chatIsCreated || undefined,
          bot_admin_rights: button.requestChat.botAdministratorRights ? chatAdministratorRightsToTlObject(button.requestChat.botAdministratorRights) : undefined,
          user_admin_rights: button.requestChat.userAdministratorRights ? chatAdministratorRightsToTlObject(button.requestChat.userAdministratorRights) : undefined,
        }),
      });
    }
  } else if ("requestContact" in button) {
    return new types.keyboardButtonRequestPhone({ text: button.text });
  } else if ("requestLocation" in button) {
    return new types.keyboardButtonRequestGeoLocation({ text: button.text });
  } else if ("requestPoll" in button) {
    return new types.keyboardButtonRequestPoll({ text: button.text, quiz: button.requestPoll.type == "quiz" });
  } else if ("webApp" in button) {
    return new types.keyboardButtonWebView({ text: button.text, url: button.webApp.url });
  } else {
    return new types.keyboardButton({ text: button.text });
  }
}
