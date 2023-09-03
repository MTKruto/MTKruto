import { debug } from "../deps.ts";

export class Queue {
  private d: ReturnType<typeof debug>;
  private functions = new Array<() => Promise<void>>();

  constructor(name: string) {
    this.d = debug(`q/${name}`);
  }

  add(fn: () => Promise<void>) {
    this.functions.push(fn);
    this.check();
  }

  private busy = false;
  private check() {
    if (this.busy) {
      return;
    } else {
      this.busy = true;
    }
    const fn = this.functions.shift();
    if (fn !== undefined) {
      fn()
        .catch((err) => {
          this.d("%o", err);
        })
        .finally(() => {
          this.busy = false;
          this.check();
        });
    } else {
      this.busy = false;
    }
  }
}
