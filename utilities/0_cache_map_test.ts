import { assertEquals, assertThrows } from "../0_deps.ts";
import { CacheMap } from "./0_cache_map.ts";

Deno.test("throws when invalid limit is provided", () => {
  assertThrows(() => {
    // deno-lint-ignore ban-ts-comment
    // @ts-expect-error
    new CacheMap();
  });
  assertThrows(() => {
    new CacheMap(-1);
  });
  assertThrows(() => {
    new CacheMap(0);
  });
});

Deno.test("size does not exceed limit", () => {
  const limit = 100;
  const cacheMap = new CacheMap<number, 0>(limit);
  assertEquals(cacheMap.size, 0);
  for (let i = 0; i < 1000; i++) {
    cacheMap.set(i, 0);
    if (i < 99) {
      assertEquals(cacheMap.size, i + 1);
    } else {
      assertEquals(cacheMap.size, limit);
    }
  }
});
