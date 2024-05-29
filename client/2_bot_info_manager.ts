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

import { Api } from "../2_tl.ts";
import { BotCommand, botCommandScopeToTlObject } from "../3_types.ts";
import { GetMyCommandsParams, SetMyCommandsParams } from "./0_params.ts";
import { C } from "./1_types.ts";

export class BotInfoManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async #setMyInfo(info: Omit<Api.bots_setBotInfo, "_" | "bot">) {
    await this.#c.invoke({ _: "bots.setBotInfo", ...info });
  }

  async setMyDescription(params?: { description?: string; languageCode?: string }) {
    await this.#c.storage.assertBot("setMyDescription");
    await this.#setMyInfo({ description: params?.description, lang_code: params?.languageCode ?? "" });
  }

  async setMyName(params?: { name?: string; languageCode?: string }) {
    await this.#c.storage.assertBot("setMyName");
    await this.#setMyInfo({ name: params?.name, lang_code: params?.languageCode ?? "" });
  }

  async setMyShortDescription(params?: { shortDescription?: string; languageCode?: string }) {
    await this.#c.storage.assertBot("setMyShortDescription");
    await this.#setMyInfo({ about: params?.shortDescription, lang_code: params?.languageCode ?? "" });
  }

  #getMyInfo(languageCode?: string | undefined) {
    return this.#c.invoke({ _: "bots.getBotInfo", lang_code: languageCode ?? "" });
  }

  async getMyDescription(params?: { languageCode?: string }): Promise<string> {
    await this.#c.storage.assertBot("getMyDescription");
    return (await this.#getMyInfo(params?.languageCode)).description;
  }

  async getMyName(params?: { languageCode?: string }): Promise<string> {
    await this.#c.storage.assertBot("getMyName");
    return (await this.#getMyInfo(params?.languageCode)).description;
  }

  async getMyShortDescription(params?: { languageCode?: string }): Promise<string> {
    await this.#c.storage.assertBot("getMyShortDescription");
    return (await this.#getMyInfo(params?.languageCode)).about;
  }

  async getMyCommands(params?: GetMyCommandsParams): Promise<BotCommand[]> {
    await this.#c.storage.assertBot("getMyCommands");
    const commands_ = await this.#c.invoke({
      _: "bots.getBotCommands",
      lang_code: params?.languageCode ?? "",
      scope: await botCommandScopeToTlObject(params?.scope ?? { type: "default" }, this.#c.getInputPeer),
    });
    return commands_.map((v) => ({ command: v.command, description: v.description }));
  }

  async setMyCommands(commands: BotCommand[], params?: SetMyCommandsParams) {
    await this.#c.storage.assertBot("setMyCommands");
    await this.#c.invoke({
      _: "bots.setBotCommands",
      commands: commands.map((v) => ({ ...v, _: "botCommand" })),
      lang_code: params?.languageCode ?? "",
      scope: await botCommandScopeToTlObject(params?.scope ?? { type: "default" }, this.#c.getInputPeer),
    });
  }
}
