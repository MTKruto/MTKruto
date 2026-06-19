import type { Api } from "../2_tl.ts";

export interface ReportReasonSpam {
  type: "spam";
}

export interface ReportReasonViolence {
  type: "violence";
}

export interface ReportReasonPornography {
  type: "pornography";
}

export interface ReportReasonChildAbuse {
  type: "childAbuse";
}

export interface ReportReasonOther {
  type: "other";
}

export interface ReportReasonCopyright {
  type: "copyright";
}

export interface ReportReasonLocationIrrelevant {
  type: "locationIrrelevant";
}

export interface ReportReasonFake {
  type: "fake";
}

export interface ReportReasonIllegalDrugs {
  type: "illegalDrugs";
}

export interface ReportReasonPersonalDetails {
  type: "personalDetails";
}

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
}
