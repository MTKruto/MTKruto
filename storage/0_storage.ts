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

import type { MaybePromise } from "../1_utilities.ts";

export type StorageKeyPart = string | number | bigint;

export type GetManyFilter = { prefix: readonly StorageKeyPart[] } | { start: readonly StorageKeyPart[]; end: readonly StorageKeyPart[] };

export interface Storage {
  initialize(): MaybePromise<void>;
  set(key: readonly StorageKeyPart[], value: unknown): MaybePromise<void>;
  incr(key: readonly StorageKeyPart[], by: number): MaybePromise<void>;
  get<T>(key: readonly StorageKeyPart[]): MaybePromise<T | null>;
  getMany<T>(prefix: GetManyFilter, params?: { limit?: number; reverse?: boolean }): MaybePromise<Generator<[readonly StorageKeyPart[], T]> | AsyncGenerator<[readonly StorageKeyPart[], T]>>;
  branch(id: string): Storage;
  supportsFiles: boolean;
  mustSerialize: boolean;
  isMemory: boolean;
}
