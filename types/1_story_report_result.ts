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

/**
 * A story report result indicating that a report option is required to complete the report.
 * @unlisted
 */
export interface StoryReportResultOptionRequired {
  type: "optionRequired";
  /** The title of the report result. */
  title: string;
  /** The available report options. */
  options: StoryReportOption[];
}

/**
 * A story report result indicating that a text is required to complete the report.
 * @unlisted
 */
export interface StoryReportResultTextRequired {
  type: "textRequired";
  /** The identifier of the option requiring text. */
  option: string;
  /** Whether the text is optional. */
  isOptional: boolean;
}

/**
 * A story report result indicating that the story was reported.
 * @unlisted
 */
export interface StoryReportResultReported {
  type: "reported";
}

/** Any type of story report result. */
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
