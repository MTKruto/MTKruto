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

export abstract class MtkrutoError extends Error {
}

export class ConnectionError extends MtkrutoError {
  constructor(...args: ConstructorParameters<typeof Error>) {
    super(...args);
    this.name = "ConnectionError";
  }
}

export class AccessError extends MtkrutoError {
  constructor(...args: ConstructorParameters<typeof Error>) {
    super(...args);
    this.name = "AccessError";
  }
}

export class InputError extends MtkrutoError {
  constructor(...args: ConstructorParameters<typeof Error>) {
    super(...args);
    this.name = "InputError";
  }
}

export class TransportError extends MtkrutoError {
  constructor(public readonly code: number) {
    super(`Transport error: ${code}`);
    this.name = "TransportError";
  }
}

export class TLError extends MtkrutoError {
  override name = "TLError";
  #path: string[];

  constructor(message: string, path: string[]) {
    super(`${message}${path.length ? ` at ${path.join(" ")}` : ""}`);
    this.#path = path;
  }

  get path(): string[] {
    return this.#path;
  }
}
