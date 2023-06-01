import { ChatAdministratorRights } from "./0_chat_administrator_rights.ts";
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
