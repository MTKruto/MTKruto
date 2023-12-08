import { CTR, MaybePromise } from "../1_utilities.ts";

export abstract class Transport {
  protected obfuscationParameters: { encryptionCTR: CTR; decryptionCTR: CTR } | null = null;

  protected encrypt(buffer: Uint8Array) {
    if (this.obfuscationParameters) {
      this.obfuscationParameters.encryptionCTR.call(buffer);
    }
  }

  protected decrypt(buffer: Uint8Array) {
    if (this.obfuscationParameters) {
      this.obfuscationParameters.decryptionCTR.call(buffer);
    }
  }

  abstract get initialized(): boolean;
  abstract initialize(): MaybePromise<void>;
  abstract receive(): MaybePromise<Uint8Array>;
  abstract send(buffer: Uint8Array): MaybePromise<void>;
  abstract deinitialize(): MaybePromise<void>;
}
