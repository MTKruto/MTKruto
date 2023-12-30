/**
 * The client is not connected.
 * @unlisted
 */
export type ConnectionStateNotConnected = "notConnected";

/**
 * The client is connected but recovering from an update gap.
 * @unlisted
 */
export type ConnectionStateUpdating = "updating";

/**
 * The client is connected and not recovering from an update gap.
 * @unlisted
 */
export type ConnectionStateReady = "ready";

/** A client's connection state. */
export type ConnectionState = ConnectionStateNotConnected | ConnectionStateUpdating | ConnectionStateReady;
