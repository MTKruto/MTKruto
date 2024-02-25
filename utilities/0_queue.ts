import { getLogger, Logger } from "../1_utilities.ts";

export class Queue {
  #logger: Logger;
  functions = new Array<() => Promise<void>>();

  constructor(name: string) {
    this.#logger = getLogger(`q/${name}`);
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
          this.#logger.error((typeof err === "object" && err != null && "stack" in err) ? err.stack : err);
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
