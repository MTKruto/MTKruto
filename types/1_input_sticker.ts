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

import type { FileSource } from "./0_file_source.ts";

/** An input sticker. */
export interface InputSticker {
  /** The sticker to upload. */
  sticker: FileSource;
  /** The sticker's emoji representations. */
  emoji: string;
  /** The file name to assign if applicable. */
  fileName?: string;
  /** The file's size. */
  fileSize?: number;
  /** The mime type to assign if applicable. */
  mimeType?: string;
  /** Size of each upload chunk in bytes. */
  chunkSize?: number;
  /** Upload abort signal. */
  signal?: AbortSignal;
  /** A progress ID retrieved from the method getProgressId. If specified, updates on the upload progress will be sent. */
  progressId?: string;
}
