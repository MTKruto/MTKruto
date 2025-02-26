/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { CTR, MaybePromise } from "../1_utilities.ts";

export abstract class Transport {
  protected obfuscationParameters: { encryptionCTR: CTR; decryptionCTR: CTR } | null = null;

  protected async encrypt(buffer: Uint8Array<ArrayBuffer>): Promise<Uint8Array> {
    if (this.obfuscationParameters) {
      return await this.obfuscationParameters.encryptionCTR.call(buffer);
    } else {
      return buffer;
    }
  }

  protected async decrypt(buffer: Uint8Array<ArrayBuffer>): Promise<Uint8Array<ArrayBuffer>> {
    if (this.obfuscationParameters) {
      return await this.obfuscationParameters.decryptionCTR.call(buffer);
    } else {
      return buffer;
    }
  }

  abstract get initialized(): boolean;
  abstract initialize(): MaybePromise<void>;
  abstract receive(): MaybePromise<Uint8Array>;
  abstract send(buffer: Uint8Array): MaybePromise<void>;
  deinitialize(): MaybePromise<void> {
    if (this.obfuscationParameters) {
      this.obfuscationParameters = null;
    }
  }
}
