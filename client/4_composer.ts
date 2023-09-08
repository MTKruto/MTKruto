import { MaybePromise } from "../1_utilities.ts";
import { resolve } from "./0_utilities.ts";
import { FilterableUpdates, FilterUpdate, Handler, HandlerFn, HandlerObj, Update } from "./3_types.ts";

export function call(handler: Handler): HandlerFn {
  if ("handle" in handler) {
    return handler.handle;
  } else {
    return handler;
  }
}

function concat(what: Handler, with_: Handler): HandlerFn {
  return async (upd, next) => {
    let called = false;
    await call(what)(upd, async () => {
      if (called) return;
      called = true;
      await call(with_)(upd, next);
    });
  };
}

function reduce(...handlers: Handler[]) {
  if (handlers.length == 0) {
    return resolve;
  }
  return handlers.reduce((a, b) => concat(a, b));
}

export class Composer<U extends Update = Update> implements HandlerObj<U> {
  constructor(...handlers: Handler<U>[]) {
    this.use(...handlers);
  }

  get handle() {
    return this._handle;
  }

  private _handle: HandlerFn = resolve;

  use(...handlers: Handler<U>[]) {
    const handle = this.handle;
    this._handle = concat(handle, reduce(...handlers));
    return this;
  }

  branch(predicate: (upd: U) => MaybePromise<boolean>, trueHandler: Handler<U>, falseHandler: Handler<U>) {
    return this.use(async (upd, next) => {
      if (await predicate(upd)) {
        await call(trueHandler)(upd, next);
      } else {
        await call(falseHandler)(upd, next);
      }
    });
  }

  filter<D extends U>(
    predicate: (ctx: U) => ctx is D,
    ...middleware: Handler<D>[]
  ): Composer<D>;
  filter(
    predicate: (ctx: U) => MaybePromise<boolean>,
    ...middleware: Handler<U>[]
  ): Composer<U>;
  filter(
    predicate: (ctx: U) => MaybePromise<boolean>,
    ...middleware: Handler<U>[]
  ) {
    const composer = new Composer(...middleware);
    this.branch(predicate, composer, resolve);
    return composer;
  }

  on<T extends keyof U, F extends keyof NonNullable<U[T]>>(
    filter: T extends FilterableUpdates ? T | [T, F, ...F[]] : T,
    ...handlers: Handler<FilterUpdate<U, T, F>>[]
  ) {
    // deno-lint-ignore ban-ts-comment
    // @ts-ignore
    const type = typeof filter === "string" ? filter : filter[0];
    const keys = Array.isArray(filter) ? filter.slice(1) : [];
    return this.filter((update): update is FilterUpdate<U, T, F> => {
      if (type in update) {
        if (keys.length > 0) {
          for (const key of keys) {
            // deno-lint-ignore ban-ts-comment
            // @ts-ignore
            if (!(key in update[type])) {
              return false;
            }
          }
        }
        return true;
      } else {
        return false;
      }
    }, ...handlers);
  }
}
