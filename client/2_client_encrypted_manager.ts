import { ClientEncrypted } from "./1_client_encrypted.ts";
import { DC } from "../3_transport.ts";

export class ClientEncryptedManager {
  #mainClients = new Array<ClientEncrypted>();
  #downloadClients = new Map<DC, ClientEncrypted>();
  #uploadClients = new Map<DC, ClientEncrypted>();

  getClient(dc: DC, type: "main" | "download" | "upload") {
    switch (type) {
      case "main":
        return this.#getMainClient(dc);
      case "download":
        return this.#getDownloadClient(dc);
      case "upload":
        return this.#getUploadClient(dc);
    }
  }

  #getMainClient(dc: DC) {
  }

  #getDownloadClient(dc: DC) {
  }

  #getUploadClient(dc: DC) {
  }
}
