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
  let length = 0;
  for (let i = 0; i < s.length;) {
    if (s[i] !== 0) {
      length++;
      i++;
    } else {
      let count = 0;
      while (i < s.length && s[i] === 0 && count < 255) {
        count++;
        i++;
      }
      length += 2;
    }
  }

  const r = new Uint8Array(length);
  let offset = 0;
  for (let i = 0; i < s.length;) {
    if (s[i] !== 0) {
      r[offset++] = s[i++];
    } else {
      let count = 0;
      while (i < s.length && s[i] === 0 && count < 255) {
        count++;
        i++;
      }
      r[offset++] = 0;
      r[offset++] = count;
    }
  }
  return r;
}

export function rleDecode(s: Uint8Array) {
  let length = 0;
  let z = false;
  for (let i = 0; i < s.length; i++) {
    const b = s[i];
    if (!b) {
      z = true;
    } else if (z) {
      length += b;
      z = false;
    } else {
      length++;
    }
  }

  const r = new Uint8Array(length);
  let offset = 0;
  z = false;
  for (let i = 0; i < s.length; i++) {
    const b = s[i];
    if (!b) {
      z = true;
    } else if (z) {
      offset += b;
      z = false;
    } else {
      r[offset++] = b;
    }
  }
  return r;
}
