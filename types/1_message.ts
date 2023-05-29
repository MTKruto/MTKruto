import * as types from "../tl/2_types.ts";
import { fromTlObject, MessageEntity } from "./0_message_entity.ts";

export class Message {
  id: number;
  text: string | null = null;
  caption: string | null = null;
  entities: MessageEntity[] | null = null;
  captionEntities: MessageEntity[] | null = null;
  date: Date;
  editDate: Date | null = null;
  views: number | null = null;

  constructor(message: types.Message) {
    this.id = message.id;
    if (message.message) {
      if (message.media == undefined) {
        this.text = message.message;
      } else {
        this.caption = message.message;
      }
    }
    if (message.entities != undefined) {
      if (message.media == undefined) {
        this.entities = message.entities.map(fromTlObject).filter((v) => v) as MessageEntity[];
      } else {
        this.captionEntities = message.entities.map(fromTlObject).filter((v) => v) as MessageEntity[];
      }
    }
    this.date = new Date(message.date * 1_000);
    if (message.editDate != undefined) {
      this.editDate = new Date(message.editDate * 1_000);
    }
    if (message.views != undefined) {
      this.views = message.views;
    }
  }
}
