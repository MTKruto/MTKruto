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

/** @unlisted */
export interface BusinessAwayMessageScheduleAlways {
  type: "always";
}

/** @unlisted */
export interface BusinessAwayMessageScheduleOutsideWorkingHours {
  type: "outsideWorkingHours";
}

/** @unlisted */
export interface BusinessAwayMessageScheduleCustom {
  type: "custom";
  startsAt: number;
  endsAt: number;
}

/** The schedule for a business away message. */
export type BusinessAwayMessageSchedule = BusinessAwayMessageScheduleAlways | BusinessAwayMessageScheduleOutsideWorkingHours | BusinessAwayMessageScheduleCustom;

export function businessAwayMessageScheduleToTlObject(schedule: BusinessAwayMessageSchedule): Api.BusinessAwayMessageSchedule {
  switch (schedule.type) {
    case "always":
      return { _: "businessAwayMessageScheduleAlways" };
    case "outsideWorkingHours":
      return { _: "businessAwayMessageScheduleOutsideWorkHours" };
    case "custom":
      return { _: "businessAwayMessageScheduleCustom", start_date: schedule.startsAt, end_date: schedule.endsAt };
  }
}
