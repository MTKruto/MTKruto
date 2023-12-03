import { UNREACHABLE } from "./1_utilities.ts";
import { map } from "./3_errors.ts";
import { types } from "./2_tl.ts";

export * from "./3_errors.ts";

export class FloodWait extends types.Rpc_error {
  seconds: number;

  constructor(params: { error_code: number; error_message: string }) {
    super(params);
    const p = params.error_message.split("_");
    this.seconds = Number(p[p.length - 1]);
    if (isNaN(this.seconds)) {
      UNREACHABLE();
    }
  }
}

export class Migrate extends types.Rpc_error {
  dc: number;

  constructor(params: { error_code: number; error_message: string }) {
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

export function upgradeInstance(error: types.Rpc_error) {
  for (const [k, v] of Object.entries(prefixMap)) {
    if (error.error_message.startsWith(k)) {
      return new v(error);
    }
  }
  for (const [k, v] of Object.entries(map)) {
    if (error.error_message == k) {
      return new v(error);
    }
  }
  return error;
}
