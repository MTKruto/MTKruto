import { Connection } from "../connection/0_connection.ts";
import { ConnectionHTTP } from "../connection/1_connection_http.ts";
import { ConnectionWebSocket } from "../connection/1_connection_web_socket.ts";
import { Transport } from "./0_transport.ts";
import { TransportPiped } from "./1_transport_piped.ts";
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

export type TransportProviderCreator<E = Record<never, never>> = (params: TransportProviderCreatorParams & E) => TransportProvider;

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
export const webSocketTransportProvider: TransportProviderCreator<{ wss?: boolean }> = ({ initialDc, wss }) => {
  return {
    initialDc,
    createTransport: ({ dc, cdn }) => {
      dc ??= initialDc;
      wss ??= typeof location !== "undefined" && location.protocol == "http:" ? false : true;
      const url = `${wss ? "wss" : "ws"}://${dcToNameMap[dc]}${cdn ? "-1" : ""}.web.telegram.org/${dc.endsWith("-test") ? "apiws_test" : "apiws"}`;
      const connection = new ConnectionWebSocket(url);
      const transport = new TransportIntermediate(connection, true);
      const dcId = getDcId(dc, cdn);
      return { connection, transport, dcId };
    },
  };
};

const dcToIPv4Map: Record<DC, string> = {
  "1": "149.154.175.50",
  "1-test": "149.154.175.10",
  "2": "149.154.167.51",
  "2-test": "149.154.167.40",
  "3": "149.154.175.100",
  "3-test": "149.154.175.117",
  "4": "149.154.167.91",
  "5": "149.154.171.5",
};
const dcToIPv6Map: Record<DC, string> = {
  "1": "[2001:b28:f23d:f001::a]",
  "1-test": "[2001:b28:f23d:f001::e]",
  "2": "[2001:67c:4e8:f002::a]",
  "2-test": "[2001:67c:4e8:f002::e]",
  "3": "[2001:b28:f23d:f003::a]",
  "3-test": "[2001:b28:f23d:f003::e]",
  "4": "[2001:67c:4e8:f004::a]",
  "5": "[2001:b28:f23f:f005::a]",
};
export const httpTransportProvider: TransportProviderCreator<{ secure?: boolean; v6?: boolean }> = ({ initialDc, secure, v6 }) => {
  return {
    initialDc,
    createTransport({ dc, cdn }) {
      dc ??= initialDc;
      const url = secure ? `https://${dcToNameMap[dc]}${cdn ? "-1" : ""}.web.telegram.org/${dc.endsWith("-test") ? "apiw1_test" : "apiw1"}` : `http://${(v6 ? dcToIPv6Map : dcToIPv4Map)[dc]}/${dc.endsWith("-test") ? "api_test" : "api"}`;
      const connection = new ConnectionHTTP(url);
      const transport = new TransportPiped(connection);
      const dcId = getDcId(dc, cdn);
      return { connection, transport, dcId };
    },
  };
};
