export class Mutex {
  #untilUnlock = Promise.resolve();

  async lock() {
    await this.#untilUnlock;
    return new Promise<() => void>((resolve0) => {
      this.#untilUnlock = new Promise<void>((resolve1) => {
        resolve0(resolve1);
      });
    });
  }
}
