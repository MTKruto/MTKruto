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

import { getLogger, type Logger } from "./1_logger.ts";

export class Queue {
  #logger: Logger;
  functions = new Array<() => Promise<void>>();
  #throw: boolean;

  constructor(name: string, throw_ = false) {
    this.#logger = getLogger(`q/${name}`);
    this.#throw = throw_;
  }

  add(fn: () => Promise<void>) {
    this.functions.push(fn);
    this.#check();
  }

  #busy = false;
  #check() {
    if (this.#busy) {
      return;
    } else {
      this.#busy = true;
    }
    const fn = this.functions.shift();
    if (fn !== undefined) {
      const promise = fn()
        .finally(() => {
          this.#busy = false;
          this.#check();
        });
      if (!this.#throw) {
        promise.catch((err) => {
          this.#logger.error((typeof err === "object" && err !== null && "stack" in err) ? err.stack : err);
        });
      }
    } else {
      this.#busy = false;
    }
  }
}
