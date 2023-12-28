import { UNREACHABLE } from "./1_utilities.ts";
import { ErrorWithCall, ErrorWithCallParams, map } from "./3_errors.ts";
import { TLObject, types } from "./2_tl.ts";

export * from "./3_errors.ts";

export class FloodWait extends ErrorWithCall {
  seconds: number;

  constructor(params: ErrorWithCallParams) {
    super(params);
    const p = params.error_message.split("_");
    this.seconds = Number(p[p.length - 1]);
    if (isNaN(this.seconds)) {
      UNREACHABLE();
    }
  }
}

export class Migrate extends ErrorWithCall {
  dc: number;

  constructor(params: ErrorWithCallParams) {
    super(params);
    const p = params.error_message.split("_");
    this.dc = Number(p[p.length - 1]);
    if (isNaN(this.dc)) {
      UNREACHABLE();
    }
  }
}

export class UserMigrate extends Migrate {
  //
}

export class PhoneMigrate extends Migrate {
  //
}

export class FileMigrate extends Migrate {
  //
}

export class StatsMigrate extends Migrate {
  //
}

const prefixMap = {
  "FILE_MIGRATE_": FileMigrate,
  "PHONE_MIGRATE_": PhoneMigrate,
  "USER_MIGRATE_": UserMigrate,
  "STATS_MIGRATE_": StatsMigrate,
  "FLOOD_WAIT_": FloodWait,
};

export function upgradeInstance(error: types.Rpc_error, call: TLObject) {
  for (const [k, v] of Object.entries(prefixMap)) {
    if (error.error_message.startsWith(k)) {
      return new v({ ...error, call });
    }
  }
  for (const [k, v] of Object.entries(map)) {
    if (error.error_message == k) {
      return new v({ ...error, call });
    }
  }
  return error;
}
