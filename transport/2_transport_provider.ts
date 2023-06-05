import { Connection } from "../connection/0_connection.ts";
import { ConnectionWebSocket } from "../connection/1_connection_web_socket.ts";
import { Transport } from "./0_transport.ts";
import { TransportIntermediate } from "./1_transport_intermediate.ts";

export type DC = "1" | "2" | "3" | "4" | "5" | "1-test" | "2-test" | "3-test";

export interface TransportProviderParams {
  dc?: DC;
  cdn: boolean;
}

export type TransportProvider = { initialDc: DC; createTransport: (params: TransportProviderParams) => { connection: Connection; transport: Transport; dcId: number } };

export interface TransportProviderCreatorParams {
  initialDc: DC;
}

export type TransportProviderCreator = (params: TransportProviderCreatorParams) => TransportProvider;

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
export const defaultTransportProvider: TransportProviderCreator = ({ initialDc, wss }: TransportProviderCreatorParams & { wss?: boolean }): TransportProvider => {
  return {
    initialDc,
    createTransport: ({ dc, cdn }) => {
      dc ??= initialDc;
      wss ??= typeof location !== "undefined" && location.protocol == "http:" ? false : true;
      const url = `${wss ? "wss" : "ws"}://${dcToNameMap[dc]}${cdn ? "-1" : ""}.web.telegram.org/${dc.endsWith("-test") ? "apiws_test" : "apiws"}`;
      const connection = new ConnectionWebSocket(url);
      const transport = new TransportIntermediate(connection, true);
      const dcId = Number(dc[0]) + (dc.endsWith("-test") ? 10_000 : 0) * (cdn ? -1 : 1);
      return { connection, transport, dcId };
    },
  };
};
