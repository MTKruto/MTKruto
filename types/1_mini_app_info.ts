/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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

import { cleanObject } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";
import type { MiniAppMode } from "./0_mini_app_mode.ts";

/** The necessary information to launch a mini app. */
export interface MiniAppInfo {
  /** An HTTPS URL of the mini app. */
  url: string;
  /** The mode to launch the mini app in. */
  mode: MiniAppMode;
  /** The identifier of the mini app session. */
  queryId?: string;
}

export function constructMiniAppInfo(result: Api.webViewResultUrl): MiniAppInfo {
  return cleanObject({
    url: result.url,
    mode: result.fullscreen ? "fullscreen" : result.fullsize ? "default" : "compact",
    queryId: result.query_id ? String(result.query_id) : undefined,
  });
}
