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

import type { Document } from "./1_document.ts";
import type { Photo } from "./1_photo.ts";
import type { PageBlock } from "./4_page_block.ts";

/** A message's rich text. */
export interface RichText {
  /** The blocks of the rich text. */
  blocks: PageBlock[];
  /** Whether the rich text is right-to-left. */
  isRtl: boolean;
  /** Whether the rich text is partial. */
  isPartial: boolean;
  /** The photos included in the rich text. */
  photos: Photo[];
  /** The documents included in the rich text. */
  documents: Document[];
}
