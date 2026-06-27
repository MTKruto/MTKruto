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
import type { ChatP, PeerGetter } from "./1_chat_p.ts";
import { constructUser2, type User } from "./2_user.ts";

/**
 * A privacy rule that allows or disallows contacts.
 * @unlisted
 */
export interface PrivacyRuleContacts {
  type: "contacts";
  /** Whether contacts are allowed. */
  isAllowed: boolean;
}

/**
 * A privacy rule that allows or disallows everybody.
 * @unlisted
 */
export interface PrivacyRuleEverybody {
  type: "everybody";
  /** Whether everybody is allowed. */
  isAllowed: boolean;
}

/**
 * A privacy rule that allows or disallows specific users.
 * @unlisted
 */
export interface PrivacyRuleUsers {
  type: "users";
  /** A list of users. */
  users: User[];
  /** Whether the users are allowed. */
  isAllowed: boolean;
}

/**
 * A privacy rule that allows close friends.
 * @unlisted
 */
export interface PrivacyRuleCloseFriends {
  type: "closeFriends";
}

/**
 * A privacy rule that allows premium users.
 * @unlisted
 */
export interface PrivacyRulePremium {
  type: "premium";
}

/**
 * A privacy rule that allows or disallows bots.
 * @unlisted
 */
export interface PrivacyRuleBots {
  type: "bots";
  /** Whether bots are allowed. */
  isAllowed: boolean;
}

/**
 * A privacy rule that allows or disallows members of specific chats.
 * @unlisted
 */
export interface PrivacyRuleChatMembers {
  type: "chatMembers";
  /** A list of chats. */
  chats: ChatP[];
  /** Whether members of the chats are allowed. */
  isAllowed: boolean;
}

/** Any type of privacy rule. */
export type PrivacyRule = PrivacyRuleContacts | PrivacyRuleEverybody | PrivacyRuleUsers | PrivacyRuleCloseFriends | PrivacyRulePremium | PrivacyRuleBots | PrivacyRuleChatMembers;

export function constructPrivacyRule(pr: Api.PrivacyRule, getPeer: PeerGetter): PrivacyRule {
  switch (pr._) {
    case "privacyValueAllowContacts":
      return { type: "contacts", isAllowed: true };
    case "privacyValueAllowAll":
      return { type: "everybody", isAllowed: true };
    case "privacyValueAllowUsers": {
      const users = pr.users.map((v) => getPeer({ _: "peerUser", user_id: v })).filter((v) => v !== null).map((v) => v[0]).map(constructUser2);
      return { type: "users", users, isAllowed: true };
    }
    case "privacyValueDisallowContacts":
      return { type: "contacts", isAllowed: false };
    case "privacyValueDisallowAll":
      return { type: "everybody", isAllowed: false };
    case "privacyValueDisallowUsers": {
      const users = pr.users.map((v) => getPeer({ _: "peerUser", user_id: v })).filter((v) => v !== null).map((v) => v[0]).map(constructUser2);
      return { type: "users", users, isAllowed: false };
    }
    case "privacyValueAllowChatParticipants": {
      const chats = pr.chats.map((v) => getPeer({ _: "peerChannel", channel_id: v }) || getPeer({ _: "peerChat", chat_id: v })).filter((v) => v !== null).map((v) => v[0]);
      return { type: "chatMembers", chats, isAllowed: true };
    }
    case "privacyValueDisallowChatParticipants": {
      const chats = pr.chats.map((v) => getPeer({ _: "peerChannel", channel_id: v }) || getPeer({ _: "peerChat", chat_id: v })).filter((v) => v !== null).map((v) => v[0]);
      return { type: "chatMembers", chats, isAllowed: false };
    }
    case "privacyValueAllowCloseFriends":
      return { type: "closeFriends" };
    case "privacyValueAllowPremium":
      return { type: "premium" };
    case "privacyValueAllowBots":
      return { type: "bots", isAllowed: true };
    case "privacyValueDisallowBots":
      return { type: "bots", isAllowed: false };
  }

  unreachable();
}
