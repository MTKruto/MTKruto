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

import { unreachable } from "../0_deps.ts";
import { gcd, getRandomId, mod } from "./0_int.ts";

function getRandomNumberInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function factorize(pq: bigint): [bigint, bigint] {
  if (pq < 4n) {
    throw new RangeError("Expected a composite positive integer.");
  }
  if ((pq & 1n) === 0n) {
    return [2n, pq / 2n];
  }

  const one = 1n;
  const batchSize = 128;
  for (let attempt = 0; attempt < 16; ++attempt) {
    const c = BigInt(getRandomNumberInRange(1, 32));
    let y = mod(getRandomId(), pq - 1n) + one;
    let x = 0n;
    let savedY = 0n;
    let divisor = one;
    let product = one;
    let cycleLength = 1;

    while (divisor === one && cycleLength <= 1 << 20) {
      x = y;
      for (let i = 0; i < cycleLength; ++i) {
        y = (y * y + c) % pq;
      }

      let offset = 0;
      while (offset < cycleLength && divisor === one) {
        savedY = y;
        const end = Math.min(batchSize, cycleLength - offset);
        for (let i = 0; i < end; ++i) {
          y = (y * y + c) % pq;
          product = product * (x > y ? x - y : y - x) % pq;
        }
        divisor = gcd(product, pq);
        offset += end;
      }
      cycleLength *= 2;
    }

    if (divisor === one) {
      continue;
    }
    if (divisor === pq) {
      do {
        savedY = (savedY * savedY + c) % pq;
        divisor = gcd(x > savedY ? x - savedY : savedY - x, pq);
      } while (divisor === one);
    }

    if (divisor > one && divisor < pq && pq % divisor === 0n) {
      const other = pq / divisor;
      return divisor < other ? [divisor, other] : [other, divisor];
    }
  }

  unreachable();
}
