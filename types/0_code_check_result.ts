/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
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

/**
 * The code was correct, but an additional password is required to sign in.
 * @unlisted
 */
export interface CodeCheckResultPasswordRequired {
  /** @discriminator */
  type: "password_required";
}

/**
 * The code entered was incorrect.
 * @unlisted
 */
export interface CodeCheckResultInvalidCode {
  /** @discriminator */
  type: "invalid_code";
}

/**
 * The code was correct. The user was signed in.
 * @unlisted
 */
export interface CodeCheckResultSignedIn {
  /** @discriminator */
  type: "signed_in";
  userId: number;
}

/** The result after checking a sent code. */
export type CodeCheckResult = CodeCheckResultPasswordRequired | CodeCheckResultInvalidCode | CodeCheckResultSignedIn;
