import { UNREACHABLE } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { ChatID } from "./0_chat_id.ts";
import { InputPeerGetter } from "./1__getters.ts";

export declare namespace BotCommandScope {
  export interface Default {
    type: "default";
  }

  export interface AllPrivateChats {
    type: "allPrivateChats";
  }

  export interface AllGroupChats {
    type: "allGroupChats";
  }

  export interface AllChatAdministrators {
    type: "allChatAdministrators";
  }

  export interface Chat {
    type: "chat";
    chatId: ChatID;
  }

  export interface ChatAdministrators {
    type: "chatAdministrators";
    chatId: ChatID;
  }

  export interface ChatMember {
    type: "chatMember";
    chatId: ChatID;
    userId: number;
  }
}

export type BotCommandScope = BotCommandScope.Default | BotCommandScope.AllPrivateChats | BotCommandScope.AllGroupChats | BotCommandScope.AllChatAdministrators | BotCommandScope.Chat | BotCommandScope.ChatAdministrators | BotCommandScope.ChatMember;

export async function botCommandScopeToTlObject(scope: BotCommandScope, getInputPeer: InputPeerGetter) {
  switch (scope.type) {
    case "default":
      return new types.botCommandScopeDefault();
    case "allPrivateChats":
      return new types.botCommandScopeUsers();
    case "allGroupChats":
      return new types.botCommandScopeChats();
    case "allChatAdministrators":
      return new types.botCommandScopeChatAdmins();
    case "chat":
      return new types.botCommandScopePeer({ peer: await getInputPeer(scope.chatId) });
    case "chatAdministrators":
      return new types.botCommandScopePeerAdmins({ peer: await getInputPeer(scope.chatId) });
    case "chatMember": {
      const user = await getInputPeer(scope.userId);
      if (!(user instanceof types.inputPeerUser)) {
        UNREACHABLE();
      }
      return new types.botCommandScopePeerUser({ peer: await getInputPeer(scope.chatId), user_id: new types.inputUser({ user_id: user.user_id, access_hash: user.access_hash }) });
    }
    default:
      UNREACHABLE();
  }
}
