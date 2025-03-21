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

export type SlowModeDuration =
  | "10s"
  | "30s"
  | "1m"
  | "5m"
  | "15m"
  | "1h";

export function slowModeDurationToSeconds(duration: SlowModeDuration): number {
  const amount = Number(duration.slice(0, -1));
  const unit = duration[duration.length - 1];
  if (unit == "s") {
    return amount;
  }
  const multiplyBy = unit == "h" ? 60 ** 2 : 60;
  return amount * multiplyBy;
}
