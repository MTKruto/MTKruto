import { NetworkStatisticsEntry } from "./0_network_statistics_entry.ts";

/** A client's network statistics. */
export interface NetworkStatistics {
  messages: NetworkStatisticsEntry;
  cdn: NetworkStatisticsEntry;
}
