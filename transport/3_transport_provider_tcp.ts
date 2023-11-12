import { ConnectionTCP } from "../connection/1_connection_tcp.ts";
import { TransportAbridged } from "./1_transport_abridged.ts";
import { getDcId, getDcIps, TransportProvider } from "./2_transport_provider.ts";

export function transportProviderTcp(
  params?: { ipv6?: boolean; obfuscated?: boolean },
): TransportProvider {
  return ({ dc, cdn }) => {
    const connection = new ConnectionTCP(
      getDcIps(dc, params?.ipv6 ? "ipv6" : "ipv4")[0],
      80,
    );
    const transport = new TransportAbridged(connection, params?.obfuscated);
    return { connection, transport, dcId: getDcId(dc, cdn) };
  };
}
