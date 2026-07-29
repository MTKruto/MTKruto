/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { assertEquals } from "../0_deps.ts";
import { assertThrows } from "../0_test_deps.ts";
import { ByteQueue } from "./0_byte_queue.ts";

Deno.test("ByteQueue reads across chunk boundaries", () => {
  const queue = new ByteQueue();
  queue.push(new Uint8Array([1, 2]));
  queue.push(new Uint8Array([3, 4, 5]));

  const first = new Uint8Array(4);
  queue.read(first);
  assertEquals(first, new Uint8Array([1, 2, 3, 4]));
  assertEquals(queue.length, 1);

  const second = new Uint8Array(1);
  queue.read(second);
  assertEquals(second, new Uint8Array([5]));
  assertEquals(queue.length, 0);
});

Deno.test("ByteQueue preserves data after partially reading a chunk", () => {
  const queue = new ByteQueue();
  queue.push(new Uint8Array([1, 2, 3, 4]));

  const first = new Uint8Array(1);
  queue.read(first);
  queue.push(new Uint8Array([5, 6]));

  const rest = new Uint8Array(5);
  queue.read(rest);
  assertEquals(rest, new Uint8Array([2, 3, 4, 5, 6]));
});

Deno.test("ByteQueue rejects oversized reads and can be cleared", () => {
  const queue = new ByteQueue();
  queue.push(new Uint8Array([1, 2]));
  assertThrows(() => queue.read(new Uint8Array(3)), RangeError);
  assertEquals(queue.length, 2);

  queue.clear();
  assertEquals(queue.length, 0);
});
