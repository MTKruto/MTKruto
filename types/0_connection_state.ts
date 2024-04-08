/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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
