import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { constructChatAdministratorRights } from "./0_chat_administrator_rights.ts";
import { KeyboardButton } from "./1_keyboard_button.ts";

export interface ReplyKeyboardMarkup {
  keyboard: KeyboardButton[][];
  isPersistent?: boolean;
  resizeKeyboard?: boolean;
  oneTimeKeyboard?: boolean;
  inputFieldPlaceholder?: string;
  selective?: boolean;
}

export function constructReplyKeyboard(keyboard_: types.ReplyKeyboardMarkup) {
  const rows = new Array<KeyboardButton[]>();

  for (const row_ of keyboard_.rows.map((v) => v[as](types.KeyboardButtonRow))) {
    const row = new Array<KeyboardButton>();

    for (const button_ of row_.buttons) {
      if (button_ instanceof types.KeyboardButton) {
        row.push({ text: button_.text });
      } else if (button_ instanceof types.KeyboardButtonRequestPeer) {
        if (button_.peerType instanceof types.RequestPeerTypeUser) {
          row.push({
            text: button_.text,
            requestUser: {
              requestId: button_.buttonId,
              userIsBot: button_.peerType.bot || false,
              userIsPremium: button_.peerType.premium || false,
            },
          });
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
          row.push(button);
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
          row.push(button);
        } else {
          throw new Error("Unreachable");
        }
      } else if (button_ instanceof types.KeyboardButtonRequestPhone) {
        row.push({ text: button_.text, requestContact: true });
      } else if (button_ instanceof types.KeyboardButtonRequestGeoLocation) {
        row.push({ text: button_.text, requestLocation: true });
      } else if (button_ instanceof types.KeyboardButtonRequestPoll) {
        const button: KeyboardButton.RequestPoll = { text: button_.text, requestPoll: {} };

        if (button_.quiz) {
          button.requestPoll.type = "quiz";
        }

        row.push(button);
      } else if (button_ instanceof types.KeyboardButtonWebView || button_ instanceof types.KeyboardButtonSimpleWebView) {
        row.push({ text: button_.text, webApp: { url: button_.url } });
      } else {
        throw new Error("Unreachable");
      }
    }

    rows.push(row);
  }

  return rows;
}
