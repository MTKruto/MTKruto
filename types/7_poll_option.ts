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
import { decodeText } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import type { PeerGetter } from "../3_types.ts";
import type { StickerSetNameGetter } from "./1_sticker.ts";
import { constructMessageEntity, type MessageEntity } from "./2_message_entity.ts";
import { constructPollMedia, type PollMedia } from "./6_poll_media.ts";

/** A poll option. */
export interface PollOption {
  /** The identifier of the option. */
  id: string;
  /** The option's text (1-100 characters). */
  text: string;
  /** The entities of the option's text. */
  entities: MessageEntity[];
  /** Number of users that voted this option. */
  voterCount: number;
  /** Whether this option has been chosen. */
  isChosen: boolean;
  /** The option's media. */
  media?: PollMedia;
}

export async function constructPollOption(option: Api.PollAnswer, results: Array<Api.PollAnswerVoters>, getStickerSetName: StickerSetNameGetter, getPeer: PeerGetter): Promise<PollOption> {
  const pollAnswer = Api.as("pollAnswer", option);
  const result = results.find((v) => equals(v.option, pollAnswer.option));
  const id = decodeText(pollAnswer.option);
  return {
    id,
    text: option.text.text,
    entities: option.text.entities?.map(constructMessageEntity).filter((v): v is MessageEntity => v !== null),
    voterCount: result?.voters ?? 0,
    isChosen: result?.chosen ?? false,
    media: pollAnswer.media ? await constructPollMedia(pollAnswer.media, getStickerSetName, getPeer) : undefined,
  };
}
