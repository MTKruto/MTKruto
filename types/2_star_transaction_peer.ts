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

/** @unlisted */
export interface StarTransactionPeerUnsupported {
  /** @discriminator */
  type: "unsupported";
}

/** @unlisted */
export interface StarTransactionPeerAppStore {
  /** @discriminator */
  type: "appStore";
}

/** @unlisted */
export interface StarTransactionPeerPlayMarket {
  /** @discriminator */
  type: "playMarket";
}

/** @unlisted */
export interface StarTransactionPeerPremiumBot {
  /** @discriminator */
  type: "premiumBot";
}

/** @unlisted */
export interface StarTransactionPeerFragment {
  /** @discriminator */
  type: "fragment";
}

/** @unlisted */
export interface StarTransactionPeerChat {
  /** @discriminator */
  type: "chat";
  chat: ChatP;
}

/** @unlisted */
export interface StarTransactionPeerAds {
  /** @discriminator */
  type: "ads";
}

/** @unlisted */
export interface StarTransactionPeerApi {
  /** @discriminator */
  type: "api";
}

/** Any type of star transaction peer. */
export type StarTransactionPeer = StarTransactionPeerUnsupported | StarTransactionPeerAppStore | StarTransactionPeerPlayMarket | StarTransactionPeerPremiumBot | StarTransactionPeerFragment | StarTransactionPeerChat | StarTransactionPeerAds | StarTransactionPeerApi;

export function constructStarTransactionPeer(peer: Api.StarsTransactionPeer, getPeer: PeerGetter): StarTransactionPeer {
  switch (peer._) {
    case "starsTransactionPeerUnsupported":
      return { type: "unsupported" };
    case "starsTransactionPeerAppStore":
      return { type: "appStore" };
    case "starsTransactionPeerPlayMarket":
      return { type: "playMarket" };
    case "starsTransactionPeerPremiumBot":
      return { type: "premiumBot" };
    case "starsTransactionPeerFragment":
      return { type: "fragment" };
    case "starsTransactionPeer": {
      const chat = getPeer(peer.peer)?.[0];
      if (!chat) {
        unreachable();
      }
      return { type: "chat", chat };
    }
    case "starsTransactionPeerAds":
      return { type: "ads" };
    case "starsTransactionPeerAPI":
      return { type: "api" };
  }
}
