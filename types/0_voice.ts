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

import { Api } from "../2_tl.ts";

/** A voice note. */
export interface Voice {
  /** A file identifier that can be used to download or reuse this file. */
  fileId: string;
  /** A file identifier that can be used to identify this file. */
  fileUniqueId: string;
  /** Duration of the audio in seconds. */
  duration: number;
  /** MIME type of the file. */
  mimeType: string;
  /** Size of the file in bytes. */
  fileSize: number;
}

export function constructVoice(document: Api.document, audioAttributes: Api.documentAttributeAudio, fileId: string, fileUniqueId: string): Voice {
  return {
    fileId,
    fileUniqueId,
    duration: audioAttributes.duration,
    mimeType: document.mime_type,
    fileSize: Number(document.size),
  };
}
