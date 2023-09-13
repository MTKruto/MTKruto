import { ChatID } from "./0_chat_id.ts";
import { types } from "../2_tl.ts";
import { InputPeerGetter } from "./1__getters.ts";
import { UNREACHABLE } from "../1_utilities.ts";

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
      return new types.BotCommandScopeDefault();
    case "allPrivateChats":
      return new types.BotCommandScopeUsers();
    case "allGroupChats":
      return new types.BotCommandScopeChats();
    case "allChatAdministrators":
      return new types.BotCommandScopeChatAdmins();
    case "chat":
      return new types.BotCommandScopePeer({ peer: await getInputPeer(scope.chatId) });
    case "chatAdministrators":
      return new types.BotCommandScopePeerAdmins({ peer: await getInputPeer(scope.chatId) });
    case "chatMember": {
      const user = await getInputPeer(scope.userId);
      if (!(user instanceof types.InputPeerUser)) {
        UNREACHABLE();
      }
      return new types.BotCommandScopePeerUser({ peer: await getInputPeer(scope.chatId), userId: new types.InputUser({ userId: user.userId, accessHash: user.accessHash }) });
    }
    default:
      UNREACHABLE();
  }
}
