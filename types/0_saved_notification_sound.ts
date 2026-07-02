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
import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { type FileId, FileType, serializeFileId, toUniqueFileId } from "./_file_id.ts";

/** A saved notification sound. */
export interface SavedNotificationSound {
  /** A file identifier that can be used to download or reuse the saved notification sound. */
  fileId: string;
  /** A file identifier that can be used to identify the saved notification sound. */
  fileUniqueId: string;
  /** The point in time when the saved notification sound was created. */
  date: number;
  /** The duration of the saved notification sound. */
  duration: number;
  /** The title of the saved notification sound. */
  title?: string;
  /** The arbitrary data of the saved notification sound. */
  data?: string;
}

export function constructSavedNotificationSound(ringtone: Api.Document): SavedNotificationSound {
  if (!Api.is("document", ringtone)) {
    unreachable();
  }

  const date = ringtone.date;
  const documentAttributeAudio = ringtone.attributes.find((v) => Api.is("documentAttributeAudio", v));
  const title = documentAttributeAudio?.title;
  const data = documentAttributeAudio?.performer;
  const duration = documentAttributeAudio?.duration ?? 0;
  const fileId_: FileId = {
    type: FileType.Ringtone,
    dcId: ringtone.dc_id,
    location: {
      type: "common",
      id: ringtone.id,
      accessHash: ringtone.access_hash,
    },
    fileReference: ringtone.file_reference,
  };
  const fileId = serializeFileId(fileId_);
  const fileUniqueId = toUniqueFileId(fileId_);

  return cleanObject({
    fileId,
    fileUniqueId,
    date,
    duration,
    title,
    data,
  });
}
