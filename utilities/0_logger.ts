/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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

// deno-lint-ignore-file no-explicit-any
let verbosity = Number("LOG_VERBOSITY" in globalThis ? (globalThis as any).LOG_VERBOSITY : "Deno" in globalThis ? (globalThis as any).Deno.env.get("LOG_VERBOSITY") : "process" in globalThis ? (globalThis as any).process.env.LOG : "") || 0;
export function setLogVerbosity(verbosity_: number) {
  verbosity = verbosity_;
}
let provider: LoggingProvider = console;

export interface LoggingProvider {
  error(...args: any[]): void;
  warn(...args: any[]): void;
  info(...args: any[]): void;
  debug(...args: any[]): void;
  log(...args: any[]): void;
}

export function setLoggingProvider(provider_: LoggingProvider) {
  provider = provider_;
}

export const ERROR = 1;
export const WARNING = 2;
export const INFO = 3;
export const DEBUG = 4;
export const TRACE = 5;
export const IN = 10;
export const OUT = 10;
export const IN_BIN = 20;
export const OUT_BIN = 20;

const INA = ">".repeat(6);
const OUTA = "<".repeat(6);
function toHex(p: Uint8Array) {
  let s = "";
  for (const b of p) {
    s += b.toString(16).toUpperCase().padStart(2, "0");
  }
  return s;
}
export function getLogger(scope: string) {
  return {
    client(id: number) {
      return getLogger(`${id.toString().padStart(2)} ${scope}`);
    },
    branch(name: string) {
      return getLogger(`${scope}::${name}`);
    },
    error(...args: any[]) {
      this.log(ERROR, ...args);
    },
    warning(...args: any[]) {
      this.log(WARNING, ...args);
    },
    info(...args: any[]) {
      this.log(INFO, ...args);
    },
    debug(...args: any[]) {
      this.log(DEBUG, ...args);
    },
    trace(...args: any[]) {
      this.log(TRACE, ...args);
    },
    in(...args: any[]) {
      this.log(IN, INA, ...args);
    },
    out(...args: any[]) {
      this.log(OUT, OUTA, ...args);
    },
    inBin(p: Uint8Array) {
      if (verbosity < IN_BIN) { // So it is not converted to hex
        return;
      }
      this.log(IN_BIN, INA, toHex(p));
    },
    outBin(p: Uint8Array) {
      if (verbosity < OUT_BIN) { // So it is not unnecessarilly converted to hex
        return;
      }
      this.log(OUT_BIN, OUTA, toHex(p));
    },
    log(verbosity_: number, ...args: any[]) {
      if (verbosity < verbosity_) {
        return;
      }
      let fn: typeof provider["log"];
      switch (verbosity_) {
        case ERROR:
          fn = provider.error;
          break;
        case WARNING:
          fn = provider.warn;
          break;
        case INFO:
          fn = provider.info;
          break;
        case DEBUG:
          fn = provider.debug;
          break;
        default:
          fn = provider.log;
      }
      fn(`[${verbosity_} ${scope}]`, ...args);
    },
  };
}

export type Logger = ReturnType<typeof getLogger>;
