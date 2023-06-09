import { as } from "../tl/1_tl_object.ts";
import * as types from "../tl/2_types.ts";
import { cleanObject } from "../utilities/0_object.ts";
import { FileID, FileType, FileUniqueID, FileUniqueType } from "./!0_file_id.ts";
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
  const game_ = media_.game[as](types.Game);
  const document_ = game_.document ? game_.document[as](types.Document) : undefined;
  return cleanObject({
    title: game_.title,
    description: game_.description,
    photo: constructPhoto(game_.photo[as](types.Photo)),
    animation: document_
      ? constructAnimation(
        document_,
        document_.attributes.find((v) => v instanceof types.DocumentAttributeVideo) as types.DocumentAttributeVideo,
        new FileID(null, null, FileType.Animation, document_.dcId, {
          mediaId: document_.id,
          accessHash: document_.accessHash,
          fileReference: document_.fileReference,
        }).encode(),
        new FileUniqueID(FileUniqueType.Document, { mediaId: document_.id }).encode(),
      )
      : undefined,
  });
}
