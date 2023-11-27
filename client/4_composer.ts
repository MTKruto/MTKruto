import { User } from "../3_types.ts";
import { FilterableUpdates, FilterUpdate, Update as Update_ } from "./3_types.ts";

interface Update extends Update_ {
  me: undefined extends this["connectionState"] ? undefined extends this["authorizationState"] ? User : (User | undefined) : (User | undefined);
}

type MaybePromise<T> = T | Promise<T>;

export type NextFunction = () => Promise<void>;

export type MiddlewareFn<C extends Update = Update> = (
  ctx: C,
  next: NextFunction,
) => MaybePromise<unknown>;

export interface MiddlewareObj<C extends Update = Update> {
  middleware: () => MiddlewareFn<C>;
}
export type Middleware<C extends Update = Update> =
  | MiddlewareFn<C>
  | MiddlewareObj<C>;

export function flatten<C extends Update = Update>(mw: Middleware<C>): MiddlewareFn<C> {
  return typeof mw === "function" ? mw : (ctx, next) => mw.middleware()(ctx, next);
}

export function concat<C extends Update = Update>(
  left: MiddlewareFn<C>,
  right: MiddlewareFn<C>,
): MiddlewareFn<C> {
  return async (ctx, next) => {
    let called = false;
    await left(ctx, async () => {
      if (called) {
        return;
      } else {
        called = true;
        await right(ctx, next);
      }
    });
  };
}

export const skip: MiddlewareFn = (_ctx, next) => next();

export class Composer<C extends Update> implements MiddlewareObj<C> {
  #handle: MiddlewareFn<C>;

  constructor(...middleware: Middleware<C>[]) {
    this.#handle = middleware.length == 0 ? skip : middleware.map(flatten).reduce(concat);
  }

  middleware() {
    return this.#handle;
  }

  use(...middleware: Middleware<C>[]) {
    const composer = new Composer(...middleware);
    this.#handle = concat(this.#handle, flatten(composer));
    return composer;
  }

  branch(predicate: (ctx: C) => MaybePromise<boolean>, trueHandler_: Middleware<C>, falseHandler_: Middleware<C>) {
    const trueHandler = flatten(trueHandler_);
    const falseHandler = flatten(falseHandler_);
    return this.use(async (upd, next) => {
      if (await predicate(upd)) {
        await trueHandler(upd, next);
      } else {
        await falseHandler(upd, next);
      }
    });
  }

  filter<D extends C>(
    predicate: (ctx: C) => ctx is D,
    ...middleware: Middleware<D>[]
  ): Composer<D>;
  filter(
    predicate: (ctx: C) => MaybePromise<boolean>,
    ...middleware: Middleware<C>[]
  ): Composer<C>;
  filter(
    predicate: (ctx: C) => MaybePromise<boolean>,
    ...middleware: Middleware<C>[]
  ) {
    const composer = new Composer(...middleware);
    this.branch(predicate, composer, skip);
    return composer;
  }

  on<T extends keyof Update, F extends keyof NonNullable<Update[T]>>(
    filter: T extends FilterableUpdates ? T | [T, F, ...F[]] : T,
    ...middleawre: Middleware<FilterUpdate<C, T, F>>[]
  ) {
    const type = typeof filter === "string" ? filter : filter[0];
    const keys = Array.isArray(filter) ? filter.slice(1) : [];
    return this.filter((ctx): ctx is FilterUpdate<C, T, F> => {
      if (type in ctx) {
        if (keys.length > 0) {
          for (const key of keys) {
            // deno-lint-ignore ban-ts-comment
            // @ts-ignore
            if (!(key in ctx[type])) {
              return false;
            }
          }
        }
        return true;
      } else {
        return false;
      }
    }, ...middleawre);
  }

  command(commands: string | RegExp | (string | RegExp)[], ...middleawre: Middleware<FilterUpdate<C, "message", "text">>[]) {
    const commands_ = Array.isArray(commands) ? commands : [commands];
    return this.on(["message", "text"]).filter((ctx) => {
      const botCommand = ctx.message.entities?.find((v) => v.type == "botCommand");
      if (!botCommand) {
        return false;
      }
      const cmd = ctx.message.text!.slice(botCommand.offset, botCommand.offset + botCommand.length);
      if (cmd.includes("@")) {
        const username = cmd.split("@")[1];
        if (username.toLowerCase() !== ctx.me!.username?.toLowerCase()) {
          return false;
        }
      }
      const command_ = cmd.split("@")[0].split("/")[1].toLowerCase();
      for (const command of commands_) {
        if (typeof command === "string" && (command.toLowerCase() == command_)) {
          return true;
        } else if (command instanceof RegExp && command.test(command_)) {
          return true;
        }
      }
      return false;
    }, ...middleawre);
  }
}
