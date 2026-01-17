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

export declare namespace PasswordCheckResult {
  /** The password entered was incorrect. */
  export interface InvalidPassword {
    type: "invalid_password";
  }

  /** The password was correct. The user was signed in. */
  export interface SignedIn {
    type: "signed_in";
    userId: number;
  }
}

/** A result after checking a sent code. */
export type PasswordCheckResult = PasswordCheckResult.InvalidPassword | PasswordCheckResult.SignedIn;
