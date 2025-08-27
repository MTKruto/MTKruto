/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { InputError } from "../0_errors.ts";
import type { MaybePromise } from "../1_utilities.ts";
import type { Update, UpdateIntersection, User } from "../3_types.ts";
import { type FilterQuery, match, type WithFilter } from "./0_filters.ts";

export type NextFunction<T = void> = () => Promise<T>;

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
      throw new InputError("Prefixes already set");
    }
    this.#prefixes = value;
  }

  constructor(...middleware: Middleware<C>[]) {
    this.#handle = middleware.length === 0 ? skip : middleware.map(flatten).reduce(concat);
  }

  middleware(): MiddlewareFn<C> {
    return this.#handle;
  }

  use(...middleware: Middleware<C & UpdateIntersection>[]): Composer<C> {
    const composer = new Composer(...middleware);
    this.#handle = concat(this.#handle, flatten(composer));
    return composer;
  }

  branch(predicate: (ctx: C & UpdateIntersection) => MaybePromise<boolean>, trueHandler_: Middleware<C & UpdateIntersection>, falseHandler_: Middleware<C & UpdateIntersection>): Composer<C> {
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
    predicate: (ctx: C & UpdateIntersection) => ctx is D,
    ...middleware: Middleware<D>[]
  ): Composer<D>;
  filter(
    predicate: (ctx: C & UpdateIntersection) => MaybePromise<boolean>,
    ...middleware: Middleware<C & UpdateIntersection>[]
  ): Composer<C>;
  filter(
    predicate: (ctx: C & UpdateIntersection) => MaybePromise<boolean>,
    ...middleware: Middleware<C & UpdateIntersection>[]
  ) {
    const composer = new Composer(...middleware);
    this.branch(predicate, composer, skip);
    return composer;
  }

  on<Q extends FilterQuery>(
    filter: Q,
    ...middleware: Middleware<WithFilter<C, Q>>[]
  ): Composer<WithFilter<C, Q> & UpdateIntersection> {
    return this.filter((ctx): ctx is WithFilter<C, Q> & UpdateIntersection => {
      return match(filter, ctx);
    }, ...middleware);
  }

  command(
    commands: string | RegExp | (string | RegExp)[] | {
      names: string | RegExp | (string | RegExp)[];
      prefixes: string | string[];
    },
    ...middleware: Middleware<WithFilter<C, "message:text">>[]
  ): Composer<WithFilter<C, "message:text">> {
    const commands__ = typeof commands === "object" && "names" in commands ? commands.names : commands;
    const commands_ = Array.isArray(commands__) ? commands__ : [commands__];
    const prefixes_ = typeof commands === "object" && "prefixes" in commands ? commands.prefixes : (this.#prefixes ?? []);
    const prefixes = Array.isArray(prefixes_) ? prefixes_ : [prefixes_];
    for (const left of prefixes) {
      for (const right of prefixes) {
        if (left === right) {
          continue;
        }
        if (left.startsWith(right) || right.startsWith(left)) {
          throw new InputError("Intersecting prefixes");
        }
      }
    }
    return this.on("message:text").filter((ctx) => {
      const prefixes_ = prefixes.length === 0 ? [!ctx.me?.isBot ? "\\" : "/"] : prefixes;
      if (prefixes_.length === 0) {
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
        if (typeof command === "string" && (command.toLowerCase() === command_)) {
          return true;
        } else if (command instanceof RegExp && command.test(command_)) {
          return true;
        }
      }
      return false;
    }, ...middleware);
  }

  callbackQuery(
    data: string | RegExp | (string | RegExp)[],
    ...middleware: Middleware<WithFilter<C, "callbackQuery:data">>[]
  ): Composer<WithFilter<C, "callbackQuery:data">> {
    const data_ = Array.isArray(data) ? data : [data];
    return this.on("callbackQuery:data").filter((ctx) => {
      for (const data of data_) {
        if (typeof data === "string" && data === ctx.callbackQuery.data) {
          return true;
        } else if (data instanceof RegExp && data.test(ctx.callbackQuery.data)) {
          return true;
        }
      }
      return false;
    }, ...middleware);
  }

  inlineQuery(
    queries: string | RegExp | (string | RegExp)[],
    ...middleware: Middleware<WithFilter<C, "inlineQuery">>[]
  ): Composer<WithFilter<C, "inlineQuery">> {
    const queries_ = Array.isArray(queries) ? queries : [queries];
    return this.on("inlineQuery").filter((ctx) => {
      for (const query of queries_) {
        if (typeof query === "string" && query === ctx.inlineQuery.query) {
          return true;
        } else if (query instanceof RegExp && query.test(ctx.inlineQuery.query)) {
          return true;
        }
      }
      return false;
    }, ...middleware);
  }
}
