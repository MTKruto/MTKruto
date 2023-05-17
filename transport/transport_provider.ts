import { Connection } from "../connection/connection.ts";
import { ConnectionWebSocket } from "../connection/connection_web_socket.ts";
import { Transport } from "./transport.ts";
import { TransportIntermediate } from "./transport_intermediate.ts";

export interface TransportProviderParams {
  dc: "1" | "2" | "3" | "4" | "5" | "1-test" | "2-test" | "3-test";
  cdn: boolean;
}

export type TransportProvider = (params: TransportProviderParams) => { connection: Connection; transport: Transport; dcId: number };

export const defaultDc: TransportProviderParams["dc"] = "2-test";
const dcToNameMap: Record<TransportProviderParams["dc"], string> = {
  "1": "pluto",
  "1-test": "pluto",
  "2": "venus",
  "2-test": "venus",
  "3": "aurora",
  "3-test": "aurora",
  "4": "vesta",
  "5": "flora",
};
export function defaultTransportProvider(wss?: boolean): TransportProvider {
  return ({ dc, cdn }) => {
    wss ??= typeof location !== "undefined" && location.protocol == "http:" ? false : true;
    const url = `${wss ? "wss" : "ws"}://${dcToNameMap[dc]}${cdn ? "-1" : ""}.web.telegram.org/${dc.endsWith("-test") ? "apiws_test" : "apiws"}`;
    const connection = new ConnectionWebSocket(url);
    const transport = new TransportIntermediate(connection, true);
    const dcId = Number(dc[0]) + (dc.endsWith("-test") ? 10_000 : 0) * (cdn ? -1 : 1);
    return { connection, transport, dcId };
  };
}
