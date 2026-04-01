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

export function ipv4ToBytes(ipv4: string): number[] {
  return ipv4.split(".").map(Number);
}

// https://jsr.io/@std/net/1.0.6/unstable_ip.ts
export function ipv6ToBytes(ipv6: string): number[] {
  const expandedIpv6 = expandIpv6(ipv6);
  if (expandedIpv6 === null) {
    throw new TypeError("Invalid IPv6");
  }

  return expandedIpv6ToBytes(expandedIpv6);
}

function expandIpv6(addr: string): string | null {
  if (addr.includes(".")) {
    const parts = addr.split(":");
    const ipv4Part = parts.pop();
    if (!ipv4Part) {
      return null;
    }
    const ipv4Bytes = ipv4Part!.split(".").map(Number);
    if (ipv4Bytes.length !== 4) {
      return null;
    }
    const ipv4Hex = ((ipv4Bytes[0]! << 8) | ipv4Bytes[1]!).toString(16).padStart(4, "0") +
      ":" +
      ((ipv4Bytes[2]! << 8) | ipv4Bytes[3]!).toString(16).padStart(4, "0");
    addr = parts.join(":") + ":" + ipv4Hex;
  }

  let expanded = addr;

  // Handle ::
  if (expanded.includes("::")) {
    const parts = expanded.split("::");
    const leftParts = parts[0] ? parts[0].split(":") : [];
    const rightParts = parts[1] ? parts[1].split(":") : [];
    const missingParts = 8 - leftParts.length - rightParts.length;

    expanded = leftParts
      .concat(new Array(missingParts).fill("0"))
      .concat(rightParts)
      .join(":");
  }

  // Pad each hextet to 4 digits
  return expanded
    .split(":")
    .map((hextet) => hextet.padStart(4, "0"))
    .join(":");
}

function expandedIpv6ToBytes(expandedIPv6: string): number[] {
  const hextets = expandedIPv6.split(":");
  const bytes: number[] = [];

  for (const hextet of hextets) {
    const value = parseInt(hextet, 16);
    bytes.push((value >> 8) & 0xff, value & 0xff);
  }

  return bytes;
}
