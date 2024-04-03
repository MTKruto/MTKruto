import { as, types } from "../2_tl.ts";
import { constructBusinessConnection } from "../3_types.ts";
import { C } from "./0_types.ts";

export class BusinessConnectionManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async getBusinessConnection(id: string) {
    const connection_ = await this.#c.messageStorage.getBusinessConnection(id);
    if (!connection_) {
      const connection_ = await this.#c.api.account.getBotBusinessConnection({ connection_id: id })
        .then((v) => v[as](types.Updates))
        .then((v) => v.updates[0][as](types.UpdateBotBusinessConnect).connection);
      await this.#c.messageStorage.setBusinessConnection(id, connection_);
      return await constructBusinessConnection(connection_, this.#c.getEntity);
    } else {
      return await constructBusinessConnection(connection_, this.#c.getEntity);
    }
  }
}
