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

export type ColorName = "red" | "orange" | "violet" | "green" | "cyan" | "blue" | "pink" | "combination 1" | "combination 2" | "combination 3" | "combination 4" | "combination 5" | "combination 6" | "combination 7" | "combination 8" | "combination 9" | "combination 10" | "combination 11" | "combination 12" | "combination 13" | "combination 14";

export function getColorFromPeerId(id: number): number {
  id = Number(String(id).replaceAll("-100", "-"));
  if (id < 0) {
    id = -id;
  }
  return Math.floor(id % 7);
}

export function getColorName(id: number): ColorName {
  switch (id) {
    case 0:
      return "red";
    case 1:
      return "orange";
    case 2:
      return "violet";
    case 3:
      return "green";
    case 4:
      return "cyan";
    case 5:
      return "blue";
    case 6:
      return "pink";
    case 7:
      return "combination 1";
    case 8:
      return "combination 2";
    case 9:
      return "combination 3";
    case 10:
      return "combination 4";
    case 11:
      return "combination 5";
    case 12:
      return "combination 6";
    case 13:
      return "combination 7";
    case 14:
      return "combination 8";
    case 15:
      return "combination 9";
    case 16:
      return "combination 10";
    case 17:
      return "combination 11";
    case 18:
      return "combination 12";
    case 19:
      return "combination 13";
    case 20:
      return "combination 14";
    default:
      return "blue";
  }
}
