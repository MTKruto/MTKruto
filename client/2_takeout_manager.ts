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

import { constructLeftChannelList, type LeftChannelList } from "../3_types.ts";
import type { EndTakeoutSessionParams, GetLeftChannelsParams, StartTakeoutSessionParams } from "./0_params.ts";
import type { C } from "./1_types.ts";

export class TakeoutManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async startTakeoutSession(params?: StartTakeoutSessionParams): Promise<string> {
    this.#c.storage.assertUser("startTakeoutSession");
    const result = await this.#c.invoke({ _: "account.initTakeoutSession", contacts: params?.isExportingContacts || undefined, message_users: params?.isExportingPrivateChats || undefined, message_chats: params?.isExportingGroupChats || undefined, message_megagroups: params?.isExportingSupergroupChats || undefined, message_channels: params?.isExportingChannelChats || undefined, files: params?.isExportingFiles || undefined, file_max_size: params?.maxFileSize ? BigInt(params.maxFileSize) : undefined });
    return String(result.id);
  }

  async endTakeoutSession(takeoutId: string, params?: EndTakeoutSessionParams) {
    this.#c.storage.assertUser("endTakeoutSession");
    await this.#c.invoke({ _: "account.finishTakeoutSession", success: !params?.isFailed || undefined }, { takeoutId });
  }

  async getLeftChannels(takeoutId: string, params?: GetLeftChannelsParams): Promise<LeftChannelList> {
    this.#c.storage.assertUser("getLeftChannels");
    const offset = params?.offset ?? 0;
    const result = await this.#c.invoke({ _: "channels.getLeftChannels", offset }, { takeoutId });
    return constructLeftChannelList(result);
  }
}
