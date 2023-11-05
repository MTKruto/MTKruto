import { debug } from "../0_deps.ts";

export class Queue {
  #d: ReturnType<typeof debug>;
  functions = new Array<() => Promise<void>>();

  constructor(name: string) {
    this.#d = debug(`q/${name}`);
  }

  add(fn: () => Promise<void>) {
    this.functions.push(fn);
    this.#check();
  }

  #busy = false;
  #check() {
    if (this.#busy) {
      return;
    } else {
      this.#busy = true;
    }
    const fn = this.functions.shift();
    if (fn !== undefined) {
      fn()
        .catch((err) => {
          this.#d("%o", "stack" in err ? err.stack : err);
        })
        .finally(() => {
          this.#busy = false;
          this.#check();
        });
    } else {
      this.#busy = false;
    }
  }
}
