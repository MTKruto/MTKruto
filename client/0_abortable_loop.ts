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

import { drop, type MaybePromise } from "../1_utilities.ts";

export class AbortableLoop {
  #body: (loop: AbortableLoop, signal: AbortSignal) => MaybePromise<void>;
  #onError: (loop: AbortableLoop, err: unknown) => void;

  constructor(body: (loop: AbortableLoop, signal: AbortSignal) => MaybePromise<void>, onError: (loop: AbortableLoop, err: unknown) => void) {
    this.#body = body;
    this.#onError = onError;
  }

  #controller?: AbortController;

  abort() {
    this.#controller?.abort();
  }

  start() {
    if (this.#controller === undefined) {
      drop(this.#loop());
    }
  }

  async #loop() {
    this.#controller?.abort();
    const controller = this.#controller = new AbortController();
    try {
      do {
        try {
          await this.#body(this, controller.signal);
        } catch (err) {
          if (!controller.signal.aborted) {
            this.#onError(this, err);
          }
        }
      } while (!controller.signal.aborted);
    } finally {
      this.#controller = undefined;
    }
  }
}
