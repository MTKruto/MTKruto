import { ConnectionWebSocket } from "../2_connection.ts";
import { TransportIntermediate } from "./1_transport_intermediate.ts";
import { DC, getDcId, TransportProvider } from "./2_transport_provider.ts";

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
export const transportProviderWebSocket = (params?: { wss?: boolean }): TransportProvider => {
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
