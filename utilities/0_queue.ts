export class Queue {
  private functions = new Array<() => Promise<void>>();

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
      fn().finally(() => {
        this.busy = false;
        this.check();
      });
    } else {
      this.busy = false;
    }
  }
}
