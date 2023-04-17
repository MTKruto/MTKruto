import { MaybePromise } from "../types.ts";
import { CTR } from "../utilities/0_crypto.ts";

export abstract class Transport {
  protected initialized = false;
  protected obfuscationParameters: { encryptionCTR: CTR; decryptionCTR: CTR } | null = null;

  protected encrypt(buffer: Uint8Array) {
    if (this.obfuscationParameters) {
      return this.obfuscationParameters.encryptionCTR.encrypt(buffer);
    } else {
      return buffer;
    }
  }

  protected decrypt(buffer: Uint8Array) {
    if (this.obfuscationParameters) {
      return this.obfuscationParameters.decryptionCTR.decrypt(buffer);
    } else {
      return buffer;
    }
  }

  abstract initialize(): MaybePromise<void>;
  abstract receive(): MaybePromise<Uint8Array>;
  abstract send(buffer: Uint8Array): MaybePromise<void>;
  abstract deinitialize(): MaybePromise<void>;
}
