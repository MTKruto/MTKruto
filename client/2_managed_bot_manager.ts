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

import { Api } from "../2_tl.ts";
import { type BotAccessSettings, constructBotAccessSettings, constructUser2, type ID, type Update } from "../3_types.ts";
import type { SetManagedBotAccessSettingsParams } from "./0_params.ts";
import type { UpdateProcessor } from "./0_update_processor.ts";
import type { C } from "./1_types.ts";

const managedBotManagerUpdates = [
  "updateManagedBot",
] as const;

type ManagedBotManagerUpdate = Api.Types[(typeof managedBotManagerUpdates)[number]];

export class ManagedBotManager implements UpdateProcessor<ManagedBotManagerUpdate> {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async getManagedBotToken(userId: ID): Promise<string> {
    this.#c.storage.assertBot("getManagedBotToken");
    const bot = await this.#c.getInputUser(userId);
    const result = await this.#c.invoke({ _: "bots.exportBotToken", bot, revoke: false });
    return result.token;
  }

  async revokeManagedBotToken(userId: ID): Promise<string> {
    this.#c.storage.assertBot("revokeManagedBotToken");
    const bot = await this.#c.getInputUser(userId);
    const result = await this.#c.invoke({ _: "bots.exportBotToken", bot, revoke: true });
    return result.token;
  }

  async setManagedBotAccessSettings(userId: ID, isAccessRestricted: boolean, params?: SetManagedBotAccessSettingsParams) {
    this.#c.storage.assertBot("setManagedBotAccessSettings");
    const bot = await this.#c.getInputUser(userId);
    const add_users = params?.usersWithAccess ? await Promise.all(params.usersWithAccess.map((v) => this.#c.getInputUser(v))) : undefined;
    await this.#c.invoke({ _: "bots.editAccessSettings", bot, add_users, restricted: isAccessRestricted || undefined });
  }

  async getManagedBotAccessSettings(userId: ID): Promise<BotAccessSettings> {
    this.#c.storage.assertBot("getManagedBotAccessSettings");
    const bot = await this.#c.getInputUser(userId);
    const result = await this.#c.invoke({ _: "bots.getAccessSettings", bot });
    return constructBotAccessSettings(result);
  }

  canHandleUpdate(update: Api.Update): update is ManagedBotManagerUpdate {
    return Api.isOneOf(managedBotManagerUpdates, update);
  }

  handleUpdate(update: ManagedBotManagerUpdate): Update | null {
    const maybeUser = this.#c.getPeer({ _: "peerUser", user_id: update.user_id });
    if (maybeUser === null) {
      return null;
    }
    const maybeBot = this.#c.getPeer({ _: "peerUser", user_id: update.bot_id });
    if (maybeBot === null) {
      return null;
    }

    const user = constructUser2(maybeUser[0]);
    const bot = constructUser2(maybeBot[0]);
    return { type: "managedBot", user, bot };
  }
}
