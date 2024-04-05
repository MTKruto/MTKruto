import { unreachable } from "../0_deps.ts";
import { types } from "../2_tl.ts";
import { constructInactiveChat, ID } from "../3_types.ts";
import { C } from "./0_types.ts";

export class AccountManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  async #toggleUsername(id: ID, username: string, active: boolean) {
    const peer = await this.#c.getInputPeer(id);
    if (peer instanceof types.InputPeerSelf) {
      await this.#c.api.account.toggleUsername({ username, active });
    } else if (peer instanceof types.InputPeerUser) {
      await this.#c.api.bots.toggleUsername({ bot: new types.InputUser(peer), username, active });
    } else if (peer instanceof types.InputPeerChannel) {
      await this.#c.api.channels.toggleUsername({ channel: new types.InputChannel(peer), username, active });
    } else {
      unreachable();
    }
  }

  async showUsername(id: ID, username: string) {
    await this.#c.storage.assertUser("showUsername");
    await this.#toggleUsername(id, username, true);
  }

  async hideUsername(id: ID, username: string) {
    await this.#c.storage.assertUser("hideUsername");
    await this.#toggleUsername(id, username, false);
  }

  async reorderUsernames(id: ID, order: string[]) {
    await this.#c.storage.assertUser("reorderUsernames");
    const peer = await this.#c.getInputPeer(id);
    if (peer instanceof types.InputPeerSelf) {
      return await this.#c.api.account.reorderUsernames({ order });
    } else if (peer instanceof types.InputPeerUser) {
      return await this.#c.api.bots.reorderUsernames({ bot: new types.InputUser(peer), order });
    } else if (peer instanceof types.InputPeerChannel) {
      return await this.#c.api.channels.reorderUsernames({ channel: new types.InputChannel(peer), order });
    } else {
      unreachable();
    }
  }

  async hideUsernames(id: ID) {
    await this.#c.storage.assertUser("hideUsernames");
    const peer = await this.#c.getInputPeer(id);
    if (peer instanceof types.InputPeerChannel) {
      return await this.#c.api.channels.deactivateAllUsernames({ channel: new types.InputChannel(peer) });
    } else {
      unreachable();
    }
  }

  async getInactiveChats() {
    await this.#c.storage.assertUser("getInactiveChats");
    const { chats, dates } = await this.#c.api.channels.getInactiveChannels();
    return chats.map((v, i) => constructInactiveChat(v, dates[i]));
  }
}
