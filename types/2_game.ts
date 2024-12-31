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
import { Api, as, is } from "../2_tl.ts";
import { FileId, FileType, serializeFileId, toUniqueFileId } from "./_file_id.ts";
import { MessageEntity } from "./0_message_entity.ts";
import { Animation, constructAnimation } from "./1_animation.ts";
import { constructPhoto, Photo } from "./1_photo.ts";

/** A game. */
export interface Game {
  /** The title of the game. */
  title: string;
  /** The description of the game. */
  description: string;
  /** A photo that is displayed when the game is shared. */
  photo: Photo;
  /** A text that is displayed when the game is shared. */
  text?: string;
  /** The text's entities. */
  textEntities?: MessageEntity[];
  /** An animation that is displayed when the game is shared. */
  animation?: Animation;
}

export function constructGame(media_: Api.messageMediaGame): Game {
  const game_ = media_.game;
  const document_ = game_.document ? as("document", game_.document) : undefined;
  const fileId_: FileId | undefined = document_
    ? {
      type: FileType.Animation,
      dcId: document_.dc_id,
      fileReference: document_.file_reference,
      location: { type: "common", id: document_.id, accessHash: document_.access_hash },
    }
    : undefined;

  return cleanObject({
    title: game_.title,
    description: media_.game.description,
    photo: constructPhoto(as("photo", game_.photo)),
    animation: fileId_ && document_
      ? constructAnimation(
        document_,
        document_.attributes.find((v): v is Api.documentAttributeVideo => is("documentAttributeVideo", v))!,
        document_.attributes.find((v): v is Api.documentAttributeFilename => is("documentAttributeFilename", v))!,
        serializeFileId(fileId_),
        toUniqueFileId(fileId_),
      )
      : undefined,
  });
}
