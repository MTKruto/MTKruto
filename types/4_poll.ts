/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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

import { cleanObject } from "../1_utilities.ts";
import type { Api } from "../2_tl.ts";
import { constructMessageEntity, type MessageEntity } from "./2_message_entity.ts";
import { constructPollOption, type PollOption } from "./3_poll_option.ts";

/** A poll. */
export interface Poll {
  /** The identifier of the poll. */
  id: string;
  /** The poll's question. */
  question: string;
  /** The entities of the poll's question. */
  questionEntities: MessageEntity[];
  /** The poll's options. */
  options: PollOption[];
  /** The number of users who have participated in the poll. */
  totalVoterCount: number;
  /** Whether the poll is closed. */
  isClosed: boolean;
  /** Whether the poll is anonymous. */
  isAnonymous: boolean;
  /** The type of the poll. */
  type: "regular" | "quiz";
  /** Whether the poll allows multiple answers. */
  allowMultipleAnswers?: boolean;
  /** Index of the correct option. */
  correctOptionIndex?: number;
  /** A text that is shown to the user when the poll is answered. */
  explanation?: string;
  /** The explanation's entities. */
  explanationEntities?: MessageEntity[];
  /** Duration of the poll in seconds. */
  openPeriod?: number;
  /** The time in which the poll will be closed. */
  closeDate?: number;
}

export function constructPoll(media_: Api.messageMediaPoll): Poll {
  const poll = media_.poll;
  const correctOption = media_.results.results?.find((v) => v.correct)?.option;
  const correctOptionIndex = correctOption !== undefined ? poll.answers.findIndex((v) => v.option.every((v, i) => correctOption[i] == v)) : undefined;
  return cleanObject({
    id: String(poll.id),
    question: poll.question.text,
    questionEntities: poll.question.entities.map(constructMessageEntity).filter((v): v is MessageEntity => v != null),
    options: poll.answers.map((v) => constructPollOption(v, media_.results.results ?? [])),
    totalVoterCount: media_.results.total_voters ?? 0,
    isClosed: poll.closed || false,
    isAnonymous: !poll.public_voters,
    type: poll.quiz ? "quiz" : "regular",
    allowMultipleAnswers: poll.quiz ? undefined : poll.multiple_choice || false,
    correctOptionIndex,
    explanation: media_.results.solution,
    explanationEntities: media_.results.solution_entities?.map(constructMessageEntity).filter((v): v is MessageEntity => v != null),
    openPeriod: poll.close_period,
    closeDate: poll.close_date,
  });
}
