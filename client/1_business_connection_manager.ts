import { as, enums, types } from "../2_tl.ts";
import { constructBusinessConnection, Update } from "../3_types.ts";
import { C } from "./0_types.ts";

export type BusinessConnectionManagerUpdate = types.UpdateBotBusinessConnect;

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

  static canHandleUpdate(update: enums.Update): update is BusinessConnectionManagerUpdate {
    return update instanceof types.UpdateBotBusinessConnect;
  }

  async handleUpdate(update: BusinessConnectionManagerUpdate): Promise<Update> {
    if (update.connection.disabled) {
      await this.#c.messageStorage.setBusinessConnection(update.connection.connection_id, null);
    } else {
      await this.#c.messageStorage.setBusinessConnection(update.connection.connection_id, update.connection);
    }
    const businessConnection = await constructBusinessConnection(update.connection, this.#c.getEntity);
    return { businessConnection };
  }
}
