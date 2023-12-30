import { NetworkStatisticsEntry } from "./0_network_statistics_entry.ts";

export interface NetworkStatistics {
  messages: NetworkStatisticsEntry;
  cdn: NetworkStatisticsEntry;
}
