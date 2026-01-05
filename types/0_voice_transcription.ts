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

/** An audio transcription. */
export interface VoiceTranscription {
  /** The identifier of the transcription. */
  id: string;
  /** Whether the transciption is complete. */
  done: boolean;
  /** The transcription result. */
  text: string;
}

export function constructVoiceTranscription(transcribedAudio: Api.messages_TranscribedAudio | Api.updateTranscribedAudio): VoiceTranscription {
  return {
    id: String(transcribedAudio.transcription_id),
    done: !transcribedAudio.pending,
    text: transcribedAudio.text,
  };
}
