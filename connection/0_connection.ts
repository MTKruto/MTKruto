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

import { MaybePromise } from "../1_utilities.ts";

abstract class Foundation {
  abstract get connected(): boolean;
  stateChangeHandler?: (connected: boolean) => void;
  abstract open(): MaybePromise<void>;
  abstract write(p: Uint8Array): MaybePromise<void>;
  abstract close(): MaybePromise<void>;
  callback?: { read(count: number): void; write(count: number): void };
}

export abstract class ConnectionUnframed extends Foundation {
  readonly type = "framed" as const;
  abstract read(p: Uint8Array): MaybePromise<void>;
}

export abstract class ConnectionFramed extends Foundation {
  readonly type = "framed" as const;
  abstract read(): MaybePromise<Uint8Array>;
}

export type Connection = ConnectionUnframed | ConnectionFramed;
