import { Connection, ConnectionWebSocket } from "../2_connection.ts";
import { Transport } from "./0_transport.ts";
import { TransportIntermediate } from "./1_transport_intermediate.ts";

export type DC = "1" | "2" | "3" | "4" | "5" | "1-test" | "2-test" | "3-test";

export interface TransportProviderParams {
  dc: DC;
  cdn: boolean;
}

export type TransportProvider = (params: TransportProviderParams) => { connection: Connection; transport: Transport; dcId: number };

const dcToNameMap: Record<DC, string> = {
  "1": "pluto",
  "1-test": "pluto",
  "2": "venus",
  "2-test": "venus",
  "3": "aurora",
  "3-test": "aurora",
  "4": "vesta",
  "5": "flora",
};
function getDcId(dc: DC, cdn: boolean) {
  return Number(dc[0]) + (dc.endsWith("-test") ? 10_000 : 0) * (cdn ? -1 : 1);
}
export const webSocketTransportProvider = (params?: { wss?: boolean }): TransportProvider => {
  return ({ dc, cdn }) => {
    params ??= {};
    params.wss ??= typeof location !== "undefined" && location.protocol == "http:" && location.hostname != "localhost" ? false : true;
    const url = `${params.wss ? "wss" : "ws"}://${dcToNameMap[dc]}${cdn ? "-1" : ""}.web.telegram.org/${dc.endsWith("-test") ? "apiws_test" : "apiws"}`;
    const connection = new ConnectionWebSocket(url);
    const transport = new TransportIntermediate(connection, true);
    const dcId = getDcId(dc, cdn);
    return { connection, transport, dcId };
  };
};
