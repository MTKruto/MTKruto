import { MaybePromise } from "../types.ts";
import { ctr256 } from "../deps.ts";

export abstract class Transport {
  protected initialized = false;
  protected obfuscationParameters: {
    encryption: { key: Uint8Array; iv: Uint8Array };
    decryption: { key: Uint8Array; iv: Uint8Array };
  } | null = null;

  protected encrypt(buffer: Uint8Array) {
    if (this.obfuscationParameters) {
      return ctr256(
        buffer,
        this.obfuscationParameters.encryption.key,
        this.obfuscationParameters.encryption.iv,
      );
    } else {
      return buffer;
    }
  }

  protected decrypt(buffer: Uint8Array) {
    if (this.obfuscationParameters) {
      return ctr256(
        buffer,
        this.obfuscationParameters.decryption.key,
        this.obfuscationParameters.decryption.iv,
      );
    } else {
      return buffer;
    }
  }

  abstract initialize(): MaybePromise<void>;
  abstract receive(): MaybePromise<Uint8Array>;
  abstract send(buffer: Uint8Array): MaybePromise<void>;
}
