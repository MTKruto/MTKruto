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

import { AccessError, ConnectionError, InputError, TLError, TransportError } from "../0_errors.ts";
import { getLogger } from "../1_utilities.ts";
import { TelegramError, type TelegramErrorParams } from "../3_errors.ts";
import { constructTelegramError } from "../4_errors.ts";

export interface WorkerError {
  name: "TelegramError" | "ConnectionError" | "AccessError" | "InputError" | "TransportError" | "TLError";
  // deno-lint-ignore no-explicit-any
  args: any;
}

const logger = getLogger("serializeWorkerError");
export function serializeWorkerError(err: unknown): WorkerError {
  logger.trace(err);
  if (err instanceof TelegramError) {
    const arg: TelegramErrorParams = {
      error_code: err.errorCode,
      error_message: err.errorMessage,
      call: err.cause,
    };
    return {
      name: "TelegramError",
      args: [arg],
    };
  } else if (err instanceof TLError) {
    return {
      name: "TLError",
      args: [err.originalMessage, err.path],
    };
  } else if (err instanceof TransportError) {
    return {
      name: "TransportError",
      args: [err.code],
    };
  } else if (err instanceof Error) {
    return {
      // deno-lint-ignore no-explicit-any
      name: err.name as unknown as any,
      args: [err.message],
    };
  } else {
    return {
      // deno-lint-ignore no-explicit-any
      name: "Error" as unknown as any, // unknown error
      args: [err],
    };
  }
}

export function deserializeWorkerError(error: WorkerError) {
  switch (error.name) {
    case "TelegramError":
      return constructTelegramError({
        _: "rpc_error",
        error_code: error.args[0].error_code,
        error_message: error.args[0].error_message,
      }, error.args.call);
    case "ConnectionError":
      return new ConnectionError(error.args[0]);
    case "AccessError":
      return new AccessError(error.args[0]);
    case "InputError":
      return new InputError(error.args[0]);
    case "TransportError":
      return new TransportError(error.args[0]);
    case "TLError":
      return new TLError(error.args[0], error.args[1]);
    default:
      return new TypeError("Unknown error");
  }
}
