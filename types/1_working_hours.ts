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

import { MINUTE } from "../0_deps.ts";
import type { Api } from "../2_tl.ts";
import type { WorkingHourInterval } from "./0_working_hour_interval.ts";

/** The working hours of a business. */
export interface WorkingHours {
  /** The timezone of the working hours. */
  timezone: string;
  /** The working hours. */
  intervals: WorkingHourInterval[];
}

export function constructWorkingHours(hours: Api.businessWorkHours): WorkingHours {
  return {
    timezone: hours.timezone_id,
    intervals: hours.weekly_open.map((v) => ({ startsAt: v.start_minute * MINUTE, endsAt: v.end_minute * MINUTE })),
  };
}

export function workingHoursToTlObject(workingHours: WorkingHours): Api.businessWorkHours {
  return {
    _: "businessWorkHours",
    timezone_id: workingHours.timezone,
    weekly_open: workingHours.intervals.map((v) => ({ _: "businessWeeklyOpen", start_minute: ~~(v.startsAt / MINUTE), end_minute: ~~(v.endsAt / MINUTE) })),
  };
}
