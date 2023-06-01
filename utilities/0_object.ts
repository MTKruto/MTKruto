// deno-lint-ignore no-explicit-any
export function cleanObject<T extends Record<string, any>>(object: T): T {
  for (const [k, v] of Object.entries(object)) {
    switch (typeof v) {
      case "undefined":
        delete object[k];
        break;
      case "object":
        // @ts-ignore: this works, no idea why it complains
        object[k] = cleanObject(v);
    }
  }
  return object;
}
