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

const prefix = "MTKRUTO__";

// deno-lint-ignore no-explicit-any
const global_ = globalThis as any;
export function getString(name: string): string | null {
  const globalName = prefix + name;
  if (globalName in global_) {
    const value = global_[globalName];
    if (value) {
      const string = value + "";
      if (string) {
        return string;
      }
    }
    return null;
  } else if ("Deno" in global_) {
    return global_.Deno.env.get(name) ?? null;
  } else if ("process" in global_) {
    return global_.process.env[name] ?? null;
  } else {
    return null;
  }
}

export function getNumber(name: string) {
  const value = getString(name);
  if (value == null) {
    return null;
  }
  const number = Number(value);
  if (isNaN(number)) {
    return null;
  } else {
    return number;
  }
}
