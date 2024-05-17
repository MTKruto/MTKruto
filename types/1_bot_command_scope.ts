/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
import { Api, is } from "../2_tl.ts";
import { InputPeerGetter } from "./_getters.ts";
import { ID } from "./0_id.ts";

/** @unlisted */
export interface BotCommandScopeDefault {
  type: "default";
}

/** @unlisted */
export interface BotCommandScopeAllPrivateChats {
  type: "allPrivateChats";
}

/** @unlisted */
export interface BotCommandScopeAllGroupChats {
  type: "allGroupChats";
}

/** @unlisted */
export interface BotCommandScopeAllChatAdministrators {
  type: "allChatAdministrators";
}

/** @unlisted */
export interface BotCommandScopeChat {
  type: "chat";
  chatId: ID;
}

/** @unlisted */
export interface BotCommandScopeChatAdministrators {
  type: "chatAdministrators";
  chatId: ID;
}

/** @unlisted */
export interface BotCommandScopeChatMember {
  type: "chatMember";
  chatId: ID;
  userId: number;
}

/** A type specifying where bot commads are available. */
export type BotCommandScope = BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember;

export async function botCommandScopeToTlObject(scope: BotCommandScope, getInputPeer: InputPeerGetter): Promise<Api.BotCommandScope> {
  switch (scope.type) {
    case "default":
      return { _: "botCommandScopeDefault" };
    case "allPrivateChats":
      return { _: "botCommandScopeUsers" };
    case "allGroupChats":
      return { _: "botCommandScopeChats" };
    case "allChatAdministrators":
      return { _: "botCommandScopeChatAdmins" };
    case "chat":
      return { _: "botCommandScopePeer", peer: await getInputPeer(scope.chatId) };
    case "chatAdministrators":
      return { _: "botCommandScopePeerAdmins", peer: await getInputPeer(scope.chatId) };
    case "chatMember": {
      const user = await getInputPeer(scope.userId);
      if (!(is("inputPeerUser", user))) {
        unreachable();
      }
      return { _: "botCommandScopePeerUser", peer: await getInputPeer(scope.chatId), user_id: ({ _: "inputUser", user_id: user.user_id, access_hash: user.access_hash }) };
    }
    default:
      unreachable();
  }
}
