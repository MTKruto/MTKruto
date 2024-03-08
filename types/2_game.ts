import { cleanObject } from "../1_utilities.ts";
import { as, types } from "../2_tl.ts";
import { FileId, FileType, serializeFileId, toUniqueFileId } from "./0__file_id.ts";
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

export function constructGame(media_: types.MessageMediaGame): Game {
  const game_ = media_.game;
  const document_ = game_.document ? game_.document[as](types.Document) : undefined;
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
    photo: constructPhoto(game_.photo[as](types.Photo)),
    animation: fileId_ && document_
      ? constructAnimation(
        document_,
        document_.attributes.find((v): v is types.DocumentAttributeVideo => v instanceof types.DocumentAttributeVideo)!,
        document_.attributes.find((v): v is types.DocumentAttributeFilename => v instanceof types.DocumentAttributeFilename)!,
        serializeFileId(fileId_),
        toUniqueFileId(fileId_),
      )
      : undefined,
  });
}
