import { cleanObject } from "../1_utilities.ts";
import { as, types } from "../2_tl.ts";
import { FileID, FileType, FileUniqueID, FileUniqueType } from "./0__file_id.ts";
import { MessageEntity } from "./0_message_entity.ts";
import { Animation, constructAnimation } from "./1_animation.ts";
import { constructPhoto, Photo } from "./1_photo.ts";

export interface Game {
  title: string;
  description: string;
  photo: Photo;
  text?: string;
  textEntities?: MessageEntity[];
  animation?: Animation;
}

export function constructGame(media_: types.MessageMediaGame): Game {
  const game_ = media_.game;
  const document_ = game_.document ? game_.document[as](types.Document) : undefined;
  return cleanObject({
    title: game_.title,
    description: media_.game.description,
    photo: constructPhoto(game_.photo[as](types.Photo)),
    animation: document_
      ? constructAnimation(
        document_,
        document_.attributes.find((v): v is types.DocumentAttributeVideo => v instanceof types.DocumentAttributeVideo)!,
        document_.attributes.find((v): v is types.DocumentAttributeFilename => v instanceof types.DocumentAttributeFilename)!,
        new FileID(null, null, FileType.Animation, document_.dc_id, {
          mediaId: document_.id,
          accessHash: document_.access_hash,
          fileReference: document_.file_reference,
        }).encode(),
        new FileUniqueID(FileUniqueType.Document, { mediaId: document_.id }).encode(),
      )
      : undefined,
  });
}
