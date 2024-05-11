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

import { unreachable } from "../0_deps.ts";
import { second } from "./0_units.ts";

export function drop(maybePromise: unknown) {
  if (maybePromise !== undefined && maybePromise != null && typeof maybePromise === "object" && maybePromise instanceof Promise) {
    maybePromise.catch(() => {});
  }
}

export function mustPrompt(message: string) {
  const result = prompt(message);
  if (result == null) {
    throw unreachable();
  } else {
    return result;
  }
}

export function mustPromptNumber(message: string) {
  let result = Number(BigInt(mustPrompt(message)));
  while (isNaN(result)) {
    console.log("Expected a number.");
    result = Number(BigInt(mustPrompt(message)));
  }
  return result;
}

export function mustPromptOneOf<T extends readonly string[]>(message: string, choices: T): T[number] {
  let result = prompt(message);
  while (result == null || !choices.includes(result)) {
    result = prompt(message);
  }
  return result;
}

export const ZERO_CHANNEL_ID = -1000000000000;

export const VECTOR_CONSTRUCTOR = 0x1CB5C415;

export function toUnixTimestamp(date: Date) {
  return Math.floor(date.getTime() / second);
}

export function fromUnixTimestamp(date: number) {
  return new Date(date * second);
}

export async function* iterateReadableStream(stream: ReadableStream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
