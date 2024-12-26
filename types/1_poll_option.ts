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

import { Api } from "../2_tl.ts";
import { constructMessageEntity, MessageEntity } from "./0_message_entity.ts";

/** A poll option. */
export interface PollOption {
  /** The option's text (1-100 characters). */
  text: string;
  /** The entities of the option's text. */
  entities: MessageEntity[];
  /** Number of users that voted this option. */
  voterCount: number;
  /** Whether this option has been chosen. */
  chosen: boolean;
}

export function constructPollOption(option: Api.PollAnswer, results: Array<Api.PollAnswerVoters>): PollOption {
  const result = results.find((v) => v.option.every((v, i) => option.option[i] == v));
  return {
    text: option.text.text,
    entities: option.text.entities?.map(constructMessageEntity).filter((v): v is MessageEntity => v != null),
    voterCount: result?.voters ?? 0,
    chosen: result?.chosen ?? false,
  };
}
