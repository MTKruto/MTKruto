import { TLObject } from "./1_tl_object.ts";
import { Function, Ping } from "./3_functions.ts";
import { assert } from "../deps.ts";

Deno.test("instanceof", () => {
  const ping = new Ping({ pingId: 0xFFn });
  assert(ping instanceof TLObject);
  assert(ping instanceof Function);
});
