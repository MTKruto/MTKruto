import { assertMessageType, MessageTypes, Update, UpdateIntersection, UpdateMap, User } from "../3_types.ts";
import { WithUpdate } from "./0_utilities.ts";

type MaybePromise<T> = T | Promise<T>;

export type NextFunction = () => Promise<void>;

export type MiddlewareFn<C> = (
  ctx: C,
  next: NextFunction,
) => MaybePromise<unknown>;

export interface MiddlewareObj<C> {
  middleware: () => MiddlewareFn<C>;
}
export type Middleware<C> =
  | MiddlewareFn<C>
  | MiddlewareObj<C>;

export function flatten<C>(mw: Middleware<C>): MiddlewareFn<C> {
  return typeof mw === "function" ? mw : (ctx, next) => mw.middleware()(ctx, next);
}

export function concat<C = Update>(
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

export function skip<C>(_ctx: C, next: NextFunction) {
  return next();
}

export class Composer<C extends { me?: User }> implements MiddlewareObj<C> {
  #handle: MiddlewareFn<C>;
  #prefixes?: string | string[];

  set prefixes(value: string | string[]) {
    if (this.#prefixes !== undefined) {
      throw new Error("Prefixes already set");
    }
    this.#prefixes = value;
  }

  constructor(...middleware: Middleware<C>[]) {
    this.#handle = middleware.length == 0 ? skip : middleware.map(flatten).reduce(concat);
  }

  middleware() {
    return this.#handle;
  }

  use(...middleware: Middleware<UpdateIntersection<C>>[]) {
    const composer = new Composer(...middleware);
    this.#handle = concat(this.#handle, flatten(composer));
    return composer;
  }

  branch(predicate: (ctx: UpdateIntersection<C>) => MaybePromise<boolean>, trueHandler_: Middleware<UpdateIntersection<C>>, falseHandler_: Middleware<UpdateIntersection<C>>) {
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
    predicate: (ctx: UpdateIntersection<C>) => ctx is D,
    ...middleware: Middleware<D>[]
  ): Composer<D>;
  filter(
    predicate: (ctx: UpdateIntersection<C>) => MaybePromise<boolean>,
    ...middleware: Middleware<UpdateIntersection<C>>[]
  ): Composer<C>;
  filter(
    predicate: (ctx: UpdateIntersection<C>) => MaybePromise<boolean>,
    ...middleware: Middleware<UpdateIntersection<C>>[]
  ) {
    const composer = new Composer(...middleware);
    this.branch(predicate, composer, skip);
    return composer;
  }

  on<T extends keyof UpdateMap, F extends string, K extends keyof MessageTypes>(
    filter: T extends "message" | "editedMessage" ? T | [T, K, ...F[]] : T,
    ...middleawre: Middleware<WithUpdate<C, T, K, F>>[]
  ) {
    const type = typeof filter === "string" ? filter : filter[0];
    let keys = Array.isArray(filter) ? filter.slice(1) : [];
    let messageType: keyof MessageTypes | null = null;
    if (type == "message") {
      messageType = keys[0] as keyof MessageTypes;
      keys = keys.slice(1);
    }
    return this.filter((ctx): ctx is WithUpdate<C, T, K, F> => {
      if (type in ctx) {
        if (messageType != null) {
          // deno-lint-ignore ban-ts-comment
          // @ts-ignore
          assertMessageType(ctx[type], messageType);
        }
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

  command(
    commands: string | RegExp | (string | RegExp)[] | {
      names: string | RegExp | (string | RegExp)[];
      prefixes: string | string[];
    },
    ...middleawre: Middleware<WithUpdate<C, "message", "text">>[]
  ) {
    const commands__ = typeof commands === "object" && "names" in commands ? commands.names : commands;
    const commands_ = Array.isArray(commands__) ? commands__ : [commands__];
    const prefixes_ = typeof commands === "object" && "prefixes" in commands ? commands.prefixes : (this.#prefixes ?? []);
    const prefixes = Array.isArray(prefixes_) ? prefixes_ : [prefixes_];
    for (const left of prefixes) {
      for (const right of prefixes) {
        if (left == right) {
          continue;
        }
        if (left.startsWith(right) || right.startsWith(left)) {
          throw new Error("Intersecting prefixes");
        }
      }
    }
    return this.on(["message", "text"]).filter((ctx) => {
      const prefixes_ = prefixes.length == 0 ? [!ctx.me?.isBot ? "\\" : "/"] : prefixes;
      if (prefixes_.length == 0) {
        return false;
      }
      const cmd = ctx.message.text.split(/\s/, 1)[0];
      const prefix = prefixes_.find((v) => cmd.startsWith(v));
      if (prefix === undefined) {
        return false;
      }
      if (cmd.includes("@")) {
        const username = cmd.split("@", 2)[1];
        if (username.toLowerCase() !== ctx.me!.username?.toLowerCase()) {
          return false;
        }
      }
      const command_ = cmd.split("@", 1)[0].split(prefix, 2)[1].toLowerCase();
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
