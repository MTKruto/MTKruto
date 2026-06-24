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

import { unreachable } from "../0_deps.ts";
import type { Api } from "../2_tl.ts";

/** @unlisted */
export interface ReportReasonSpam {
  type: "spam";
}

/** @unlisted */
export interface ReportReasonViolence {
  type: "violence";
}

/** @unlisted */
export interface ReportReasonPornography {
  type: "pornography";
}

/** @unlisted */
export interface ReportReasonChildAbuse {
  type: "childAbuse";
}

/** @unlisted */
export interface ReportReasonOther {
  type: "other";
}

/** @unlisted */
export interface ReportReasonCopyright {
  type: "copyright";
}

/** @unlisted */
export interface ReportReasonLocationIrrelevant {
  type: "locationIrrelevant";
}

/** @unlisted */
export interface ReportReasonFake {
  type: "fake";
}

/** @unlisted */
export interface ReportReasonIllegalDrugs {
  type: "illegalDrugs";
}

/** @unlisted */
export interface ReportReasonPersonalDetails {
  type: "personalDetails";
}

/** Any type of report reason. */
export type ReportReason = ReportReasonSpam | ReportReasonViolence | ReportReasonPornography | ReportReasonChildAbuse | ReportReasonOther | ReportReasonCopyright | ReportReasonLocationIrrelevant | ReportReasonFake | ReportReasonIllegalDrugs | ReportReasonPersonalDetails;

export function reportReasonToTlObject(reportReason: ReportReason): Api.ReportReason {
  switch (reportReason.type) {
    case "spam":
      return { _: "inputReportReasonSpam" };
    case "violence":
      return { _: "inputReportReasonViolence" };
    case "pornography":
      return { _: "inputReportReasonPornography" };
    case "childAbuse":
      return { _: "inputReportReasonChildAbuse" };
    case "other":
      return { _: "inputReportReasonOther" };
    case "copyright":
      return { _: "inputReportReasonCopyright" };
    case "locationIrrelevant":
      return { _: "inputReportReasonGeoIrrelevant" };
    case "fake":
      return { _: "inputReportReasonFake" };
    case "illegalDrugs":
      return { _: "inputReportReasonIllegalDrugs" };
    case "personalDetails":
      return { _: "inputReportReasonPersonalDetails" };
  }

  unreachable();
}
