/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
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

import type { Api } from "../2_tl.ts";

/** An authorization session. */
export interface AuthorizationSession {
  id: string;
  date: number;
  lastActivity: number;
  isCurrent: boolean;
  isOfficialApp: boolean;
  isPasswordPending: boolean;
  isEncryptedRequestsDisabled: boolean;
  isCallRequestsDisabled: boolean;
  isUnconfirmed: boolean;
  deviceModel: string;
  platform: string;
  systemVersion: string;
  apiId: number;
  appName: string;
  appVersion: string;
  ipAddress: string;
  country: string;
  region: string;
}

export function constructAuthorizationSession(authorization: Api.Authorization): AuthorizationSession {
  return {
    id: String(authorization.hash),
    date: authorization.date_created,
    lastActivity: authorization.date_active,
    isCurrent: authorization.current || false,
    isOfficialApp: authorization.official_app || false,
    isPasswordPending: authorization.password_pending || false,
    isEncryptedRequestsDisabled: authorization.encrypted_requests_disabled || false,
    isCallRequestsDisabled: authorization.call_requests_disabled || false,
    isUnconfirmed: authorization.unconfirmed || false,
    deviceModel: authorization.device_model,
    platform: authorization.platform,
    systemVersion: authorization.system_version,
    apiId: authorization.api_id,
    appName: authorization.app_name,
    appVersion: authorization.app_version,
    ipAddress: authorization.ip,
    country: authorization.country,
    region: authorization.region,
  };
}
