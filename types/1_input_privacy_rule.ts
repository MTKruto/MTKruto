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
import type { Api } from "../2_tl.ts";
import { chatIdToPeerId, inputPeerToPeer, peerToChatId } from "../tl/2_telegram.ts";
import type { ID } from "./0_id.ts";

/**
 * A privacy rule that allows or disallows contacts.
 * @unlisted
 */
export interface InputPrivacyRuleContacts {
  type: "contacts";
  /** Whether contacts are allowed. */
  isAllowed: boolean;
}

/**
 * A privacy rule that allows or disallows everybody.
 * @unlisted
 */
export interface InputPrivacyRuleEverybody {
  type: "everybody";
  /** Whether everybody is allowed. */
  isAllowed: boolean;
}

/**
 * A privacy rule that allows or disallows specific users.
 * @unlisted
 */
export interface InputPrivacyRuleUsers {
  type: "users";
  /** A list of user identifiers. */
  usersId: ID[];
  /** Whether the users are allowed. */
  isAllowed: boolean;
}

/**
 * A privacy rule that allows close friends.
 * @unlisted
 */
export interface InputPrivacyRuleCloseFriends {
  type: "closeFriends";
}

/**
 * A privacy rule that allows premium users.
 * @unlisted
 */
export interface InputPrivacyRulePremium {
  type: "premium";
}

/**
 * A privacy rule that allows or disallows bots.
 * @unlisted
 */
export interface InputPrivacyRuleBots {
  type: "bots";
  /** Whether bots are allowed. */
  isAllowed: boolean;
}

/**
 * A privacy rule that allows or disallows members of specific chats.
 * @unlisted
 */
export interface InputPrivacyRuleChatMembers {
  type: "chatMembers";
  /** A list of chats. */
  chatIds: ID[];
  /** Whether members of the chats are allowed. */
  isAllowed: boolean;
}

/** Any type of input privacy rule. */
export type InputPrivacyRule = InputPrivacyRuleContacts | InputPrivacyRuleEverybody | InputPrivacyRuleUsers | InputPrivacyRuleCloseFriends | InputPrivacyRulePremium | InputPrivacyRuleBots | InputPrivacyRuleChatMembers;

export async function inputPrivacyRuleToTlObject(ipr: InputPrivacyRule, getInputUser: (id: ID) => Promise<Api.InputUser>, getInputPeer: (id: ID) => Promise<Api.InputPeer>): Promise<Api.InputPrivacyRule> {
  switch (ipr.type) {
    case "contacts":
      if (ipr.isAllowed) {
        return { _: "inputPrivacyValueAllowContacts" };
      } else {
        return { _: "inputPrivacyValueDisallowContacts" };
      }
    case "everybody":
      if (ipr.isAllowed) {
        return { _: "inputPrivacyValueAllowAll" };
      } else {
        return { _: "inputPrivacyValueDisallowAll" };
      }
    case "users": {
      const users = await Promise.all(ipr.usersId.map(getInputUser));
      if (ipr.isAllowed) {
        return { _: "inputPrivacyValueAllowUsers", users };
      } else {
        return { _: "inputPrivacyValueDisallowUsers", users };
      }
    }
    case "chatMembers": {
      const chats = (await Promise.all(ipr.chatIds.map(getInputPeer))).map(inputPeerToPeer).map(peerToChatId).map(chatIdToPeerId);
      if (ipr.isAllowed) {
        return { _: "inputPrivacyValueAllowChatParticipants", chats };
      } else {
        return { _: "inputPrivacyValueDisallowChatParticipants", chats };
      }
    }
    case "closeFriends":
      return { _: "inputPrivacyValueAllowCloseFriends" };
    case "premium":
      return { _: "inputPrivacyValueAllowPremium" };
    case "bots":
      if (ipr.isAllowed) {
        return { _: "inputPrivacyValueAllowBots" };
      } else {
        return { _: "inputPrivacyValueDisallowBots" };
      }
  }

  unreachable();
}
