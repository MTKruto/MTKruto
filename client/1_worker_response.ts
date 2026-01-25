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

import type { WorkerError } from "./0_worker_error.ts";

export declare namespace WorkerResponse {
  export interface Base {
    type: "response";
    clientId: string;
    id: string;
  }

  export interface Error extends Base {
    isError: true;
    data: WorkerError;
  }

  export interface Data extends Base {
    isError: false;
    data: unknown;
  }
}

export type WorkerResponse = WorkerResponse.Error | WorkerResponse.Data;
