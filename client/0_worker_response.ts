export interface WorkerError {
  name: "TelegramError" | "ConnectionError" | "AccessError" | "InputError" | "TransportError" | "TLError";
  // deno-lint-ignore no-explicit-any
  args: any;
}

export declare namespace WorkerResponse {
  export interface Base {
    clientId: number;
    id: number;
  }

  export interface Error extends Base {
    isError: true;
    data: WorkerError;
  }

  export interface Data extends Base {
    isError: false;
    data: unknown;
  }
}

export type WorkerResponse = WorkerResponse.Error | WorkerResponse.Data;
