import { UNREACHABLE } from "../1_utilities.ts";
import { Connection } from "../2_connection.ts";
import { Transport } from "./0_transport.ts";

export type DC = "1" | "2" | "3" | "4" | "5" | "1-test" | "2-test" | "3-test";
export function getDcIps(dc: DC, version: "ipv4" | "ipv6"): [string, ...string[]] {
  switch (version) {
    case "ipv4":
      switch (dc) {
        case "1":
          return ["149.154.175.50"];
        case "2":
          return ["149.154.167.51", "95.161.76.100"];
        case "3":
          return ["149.154.175.100"];
        case "4":
          return ["149.154.167.91"];
        case "5":
          return ["149.154.171.5"];
        case "1-test":
          return ["149.154.175.10"];
        case "2-test":
          return ["149.154.167.40"];
        case "3-test":
          return ["149.154.175.117"];
        default:
          UNREACHABLE();
      }
      break;
    case "ipv6":
      switch (dc) {
        case "1":
          return ["2001:b28:f23d:f001::a"];
        case "2":
          return ["2001:67c:4e8:f002::a"];
        case "3":
          return ["2001:b28:f23d:f003::a"];
        case "4":
          return ["2001:67c:4e8:f004::a"];
        case "5":
          return ["2001:b28:f23f:f005::a"];
        case "1-test":
          return ["2001:b28:f23d:f001::e"];
        case "2-test":
          return ["2001:67c:4e8:f002::e"];
        case "3-test":
          return ["2001:b28:f23d:f003::e"];
        default:
          UNREACHABLE();
      }
      break;
    default:
      UNREACHABLE();
  }
}

export interface TransportProviderParams {
  dc: DC;
  cdn: boolean;
}

export type TransportProvider = (params: TransportProviderParams) => { connection: Connection; transport: Transport; dcId: number };

export function getDcId(dc: DC, cdn: boolean): number {
  return Number(dc[0]) + (dc.endsWith("-test") ? 10_000 : 0) * (cdn ? -1 : 1);
}
