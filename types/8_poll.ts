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

import { equals } from "../0_deps.ts";
import { cleanObject, decodeText } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import type { PeerGetter } from "./1_chat_p.ts";
import type { StickerSetNameGetter } from "./1_sticker.ts";
import { constructMessageEntity, type MessageEntity } from "./2_message_entity.ts";
import { constructPollMedia, type PollMedia } from "./6_poll_media.ts";
import { constructPollOption, type PollOption } from "./7_poll_option.ts";

/** A poll. */
export interface Poll {
  /** The identifier of the poll. */
  id: string;
  /** The poll's question. */
  question: string;
  /** The entities of the poll's question. */
  questionEntities: MessageEntity[];
  /** The poll's media. */
  media?: PollMedia;
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
  /** The indexes of the correct options. */
  correctOptionIndexes?: number[];
  /** A text that is shown to the user when the poll is answered. */
  explanation?: string;
  /** The explanation's entities. */
  explanationEntities?: MessageEntity[];
  /** The explanation's media. */
  explanationMedia?: PollMedia;
  /** Duration of the poll in seconds. */
  openPeriod?: number;
  /** The time when the poll will be closed. */
  closeDate?: number;
  /** The codes of the countries where the poll is available. */
  countries?: string[];
}

export async function constructPoll(media_: Api.messageMediaPoll, getStickerSetName: StickerSetNameGetter, getPeer: PeerGetter): Promise<Poll> {
  const poll = media_.poll;

  const correctOptions = media_.results.results?.filter((v) => v.correct).map((v) => v.option);
  const correctOptionIndexes = correctOptions !== undefined ? poll.answers.filter((v) => correctOptions.some((v_) => equals(v_, Api.as("pollAnswer", v).option))).map((v) => decodeText(Api.as("pollAnswer", v).option)).map(Number) : undefined;
  return cleanObject({
    id: String(poll.id),
    question: poll.question.text,
    questionEntities: poll.question.entities.map(constructMessageEntity).filter((v): v is MessageEntity => v !== null),
    media: media_.attached_media ? await constructPollMedia(media_.attached_media, getStickerSetName, getPeer) : undefined,
    options: await Promise.all(poll.answers.map((v) => constructPollOption(v, media_.results.results ?? [], getStickerSetName, getPeer))),
    totalVoterCount: media_.results.total_voters ?? 0,
    isClosed: poll.closed || false,
    isAnonymous: !poll.public_voters,
    type: poll.quiz ? "quiz" : "regular",
    allowMultipleAnswers: poll.quiz ? undefined : poll.multiple_choice || false,
    correctOptionIndexes,
    explanation: media_.results.solution,
    explanationEntities: media_.results.solution_entities?.map(constructMessageEntity).filter((v): v is MessageEntity => v !== null),
    explanationMedia: media_.results.solution_media ? await constructPollMedia(media_.results.solution_media, getStickerSetName, getPeer) : undefined,
    openPeriod: poll.close_period,
    closeDate: poll.close_date,
    countries: poll.countries_iso2,
  });
}
