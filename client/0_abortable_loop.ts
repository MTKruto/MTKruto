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

import { drop, type MaybePromise } from "../1_utilities.ts";

export class AbortableLoop {
  #body: (signal: AbortSignal) => MaybePromise<void>;
  #onError: (err: unknown) => void;
  #postAbort?: () => MaybePromise<void>;

  constructor(body: (signal: AbortSignal) => MaybePromise<void>, onError: (err: unknown) => void, postAbort?: () => MaybePromise<void>) {
    this.#body = body;
    this.#onError = onError;
    this.#postAbort = postAbort;
  }

  #controller?: AbortController;

  abort() {
    this.#controller?.abort();
  }

  start() {
    drop(this.#loop());
  }

  async #loop() {
    this.#controller?.abort();
    const controller = this.#controller = new AbortController();
    do {
      try {
        await this.#body(controller.signal);
      } catch (err) {
        if (!controller.signal.aborted) {
          this.#onError(err);
        }
      }
    } while (!controller.signal.aborted);
    if (this.#postAbort !== undefined) {
      try {
        await this.#postAbort();
      } catch (err) {
        this.#onError(err);
      }
    }
  }
}
