export class Mutex {
  constructor(private release = Promise.resolve()) {
  }

  async acquire() {
    await this.release;
    return await new Promise<() => void>((resolve) =>
      this.release = new Promise<void>((r) => {
        resolve(r);
      })
    );
  }
}
