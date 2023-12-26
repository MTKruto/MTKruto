import { UNREACHABLE } from "../1_utilities.ts";
import { types } from "../2_tl.ts";
import { ChatID } from "./0_chat_id.ts";
import { InputPeerGetter } from "./1__getters.ts";

export interface BotCommandScopeDefault {
  type: "default";
}

export interface BotCommandScopeAllPrivateChats {
  type: "allPrivateChats";
}

export interface BotCommandScopeAllGroupChats {
  type: "allGroupChats";
}

export interface BotCommandScopeAllChatAdministrators {
  type: "allChatAdministrators";
}

export interface BotCommandScopeChat {
  type: "chat";
  chatId: ChatID;
}

export interface BotCommandScopeChatAdministrators {
  type: "chatAdministrators";
  chatId: ChatID;
}

export interface BotCommandScopeChatMember {
  type: "chatMember";
  chatId: ChatID;
  userId: number;
}

export type BotCommandScope = BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember;

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
      return new types.BotCommandScopePeerUser({ peer: await getInputPeer(scope.chatId), user_id: new types.InputUser({ user_id: user.user_id, access_hash: user.access_hash }) });
    }
    default:
      UNREACHABLE();
  }
}
