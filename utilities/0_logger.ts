// deno-lint-ignore-file no-explicit-any
let verbosity = Number("LOG_VERBOSITY" in globalThis ? (globalThis as any).LOG_VERBOSITY : typeof Deno !== undefined ? (Deno as any).env.get("LOG_VERBOSITY") : "process" in globalThis ? (globalThis as any).process.env.LOG : "") || 0;
export function setLogVerbosity(verbosity_: number) {
  verbosity = verbosity_;
}

export const ERROR = 1;
export const WARNING = 2;
export const INFO = 3;
export const DEBUG = 4;
export const TRACE = 5;

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
    log(verbosity_: number, ...args: any[]) {
      if (verbosity < verbosity_) {
        return;
      }
      let fn: typeof console["log"];
      switch (verbosity_) {
        case ERROR:
          fn = console.error;
          break;
        case WARNING:
          fn = console.warn;
          break;
        case INFO:
          fn = console.info;
          break;
        case DEBUG:
          fn = console.debug;
          break;
        default:
          fn = console.log;
      }
      fn(`[${verbosity} ${scope}]`, ...args);
    },
  };
}

export type Logger = ReturnType<typeof getLogger>;
