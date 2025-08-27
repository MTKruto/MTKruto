import { drop, type MaybePromise } from "../1_utilities.ts";

export class AbortableLoop {
  #body: (signal: AbortSignal) => MaybePromise<void>;
  #onError: (err: unknown) => void;
  #postAbort?: () => MaybePromise<void>;

  constructor(body: (signal: AbortSignal) => MaybePromise<void>, onError: (err: unknown) => void, postAbort?: () => MaybePromise<void>) {
    this.#body = body;
    this.#onError = onError;
    this.#postAbort = postAbort;
  }

  #controller?: AbortController;

  abort() {
    this.#controller?.abort();
  }

  start() {
    drop(this.#loop());
  }

  async #loop() {
    this.#controller?.abort();
    const controller = this.#controller = new AbortController();
    do {
      try {
        await this.#body(controller.signal);
      } catch (err) {
        if (!controller.signal.aborted) {
          this.#onError(err);
        }
      }
    } while (!controller.signal.aborted);
    if (this.#postAbort !== undefined) {
      try {
        await this.#postAbort();
      } catch (err) {
        this.#onError(err);
      }
    }
  }
}
