/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
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
import type { ChatP, Update, User } from "../3_types.ts";
import type { NextFunction } from "./0_utilities.ts";
import type { ClientGeneric } from "./1_client_generic.ts";
import type { FilterQuery, WithChatType, WithFilter } from "./3_filters.ts";
import { Context, type ContextCommands } from "./4_context.ts";

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

export function skip<C>(_ctx: C, next: NextFunction): Promise<void> {
  return next();
}

export class Composer<C extends Context> implements MiddlewareObj<C> {
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

  #lastGetMe?: User;
  async handleUpdate(client: ClientGeneric, update: Update) {
    if (!this.#lastGetMe && !("connectionState" in update) && (!("authorizationState" in update) || ("authorizationState" in update && update.authorizationState.isAuthorized))) {
      this.#lastGetMe = await client.getMe();
    }

    const ctx = new Context(client, this.#lastGetMe, update);
    const next = () => Promise.resolve();
    await this.#handle(ctx as C, next);
  }

  middleware(): MiddlewareFn<C> {
    return this.#handle;
  }

  use(...middleware: Middleware<C>[]): Composer<C> {
    const composer = new Composer(...middleware);
    this.#handle = concat(this.#handle, flatten(composer));
    return composer;
  }

  branch(predicate: (ctx: C) => MaybePromise<boolean>, trueHandler_: Middleware<C>, falseHandler_: Middleware<C>): Composer<C> {
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

  on<Q extends FilterQuery>(
    filter: Q,
    ...middleware: Middleware<WithFilter<C, Q>>[]
  ): Composer<WithFilter<C, Q>> {
    return this.filter((ctx) => ctx.hasFilterQuery(filter), ...middleware);
  }

  command(
    commands: ContextCommands,
    ...middleware: Middleware<WithFilter<C, "message:text">>[]
  ): Composer<WithFilter<C, "message:text">> {
    return this.filter(Context.has.command(commands, this.#prefixes), ...middleware);
  }

  callbackQuery(
    data: string | RegExp | (string | RegExp)[],
    ...middleware: Middleware<WithFilter<C, "callbackQuery:data">>[]
  ): Composer<WithFilter<C, "callbackQuery:data">> {
    return this.filter(Context.has.callbackQuery(data), ...middleware);
  }

  inlineQuery(
    queries: string | RegExp | (string | RegExp)[],
    ...middleware: Middleware<WithFilter<C, "inlineQuery">>[]
  ): Composer<WithFilter<C, "inlineQuery">> {
    return this.filter(Context.has.inlineQuery(queries), ...middleware);
  }

  chatType<T extends ChatP["type"]>(chatType: T | T[], ...middleware: Middleware<WithChatType<C, T>>[]): Composer<WithChatType<C, T>> {
    return this.filter(Context.has.chatType(chatType), ...middleware);
  }
}
