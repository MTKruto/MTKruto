export interface WorkerRequest {
  clientId: number;
  id: number;
  method: "initClient" | string;
  args: unknown[];
}
