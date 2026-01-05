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

export function rleEncode(s: Uint8Array) {
  const r = new Array<number>();
  let n = 0;

  for (const b of s) {
    if (!b) {
      if (n === 255) {
        r.push(0);
        r.push(n);
        n = 1;
      } else {
        n++;
      }
    } else {
      if (n) {
        r.push(0);
        r.push(n);
        n = 0;
      }

      r.push(b);
    }
  }

  if (n) {
    r.push(0);
    r.push(n);
  }

  return new Uint8Array(r);
}

export function rleDecode(s: Uint8Array) {
  const r = new Array<number>();
  let z = false;

  for (const b of s) {
    if (!b) {
      z = true;
      continue;
    }

    if (z) {
      for (let i = 0; i < b; i++) {
        r.push(0);
      }
      z = false;
    } else {
      r.push(b);
    }
  }

  return new Uint8Array(r);
}
