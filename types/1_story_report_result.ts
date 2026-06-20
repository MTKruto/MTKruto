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
import { base64EncodeUrlSafe } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";
import { constructStoryReportOption, type StoryReportOption } from "./0_story_report_option.ts";

/** @unlisted */
export interface StoryReportResultOptionRequired {
  type: "optionRequired";
  title: string;
  options: StoryReportOption[];
}

/** @unlisted */
export interface StoryReportResultTextRequired {
  type: "textRequired";
  option: string;
  isOptional: boolean;
}

/** @unlisted */
export interface StoryReportResultReported {
  type: "reported";
}

export type StoryReportResult = StoryReportResultOptionRequired | StoryReportResultTextRequired | StoryReportResultReported;

export function constructStoryReportResult(rr: Api.ReportResult): StoryReportResult {
  switch (rr._) {
    case "reportResultChooseOption": {
      const title = rr.title;
      const options = rr.options.map(constructStoryReportOption);
      return { type: "optionRequired", title, options };
    }
    case "reportResultAddComment":
      return { type: "textRequired", option: base64EncodeUrlSafe(rr.option), isOptional: !!rr.optional };
    case "reportResultReported":
      return { type: "reported" };
  }

  unreachable();
}
