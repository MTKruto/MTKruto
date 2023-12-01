// deno-fmt-ignore-file
import { id, params, TLObject, Params, paramDesc, ParamDesc, flags } from "./1_tl_object.ts";
import * as types from "./2_types.ts";

export abstract class Function<T> extends TLObject {
  __R: T = Symbol() as unknown as T; // virtual member
}

export class req_pq_multi extends Function<types.ResPQ> {
  nonce: bigint;

  protected get [id]() {
    return 0xBE7E8EF1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["nonce", "bigint", "int128"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.nonce, "bigint", "int128"],
    ];
  }

  constructor(params: { nonce: bigint }) {
    super();
    this.nonce = params.nonce;
  }
}

export class req_DH_params extends Function<types.Server_DH_Params> {
  nonce: bigint;
  server_nonce: bigint;
  p: Uint8Array;
  q: Uint8Array;
  public_key_fingerprint: bigint;
  encrypted_data: Uint8Array;

  protected get [id]() {
    return 0xD712E4BE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["nonce", "bigint", "int128"],
      ["server_nonce", "bigint", "int128"],
      ["p", Uint8Array, "bytes"],
      ["q", Uint8Array, "bytes"],
      ["public_key_fingerprint", "bigint", "long"],
      ["encrypted_data", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.nonce, "bigint", "int128"],
      [this.server_nonce, "bigint", "int128"],
      [this.p, Uint8Array, "bytes"],
      [this.q, Uint8Array, "bytes"],
      [this.public_key_fingerprint, "bigint", "long"],
      [this.encrypted_data, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { nonce: bigint; server_nonce: bigint; p: Uint8Array; q: Uint8Array; public_key_fingerprint: bigint; encrypted_data: Uint8Array }) {
    super();
    this.nonce = params.nonce;
    this.server_nonce = params.server_nonce;
    this.p = params.p;
    this.q = params.q;
    this.public_key_fingerprint = params.public_key_fingerprint;
    this.encrypted_data = params.encrypted_data;
  }
}

export class set_client_DH_params extends Function<types.Set_client_DH_params_answer> {
  nonce: bigint;
  server_nonce: bigint;
  encrypted_data: Uint8Array;

  protected get [id]() {
    return 0xF5045F1F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["nonce", "bigint", "int128"],
      ["server_nonce", "bigint", "int128"],
      ["encrypted_data", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.nonce, "bigint", "int128"],
      [this.server_nonce, "bigint", "int128"],
      [this.encrypted_data, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { nonce: bigint; server_nonce: bigint; encrypted_data: Uint8Array }) {
    super();
    this.nonce = params.nonce;
    this.server_nonce = params.server_nonce;
    this.encrypted_data = params.encrypted_data;
  }
}

export class rpc_drop_answer extends Function<types.RpcDropAnswer> {
  req_msg_id: bigint;

  protected get [id]() {
    return 0x58E4A740;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["req_msg_id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.req_msg_id, "bigint", "long"],
    ];
  }

  constructor(params: { req_msg_id: bigint }) {
    super();
    this.req_msg_id = params.req_msg_id;
  }
}

export class get_future_salts extends Function<types.FutureSalts> {
  num: number;

  protected get [id]() {
    return 0xB921BD04;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["num", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.num, "number", "int"],
    ];
  }

  constructor(params: { num: number }) {
    super();
    this.num = params.num;
  }
}

export class ping extends Function<types.Pong> {
  ping_id: bigint;

  protected get [id]() {
    return 0x7ABE77EC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["ping_id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.ping_id, "bigint", "long"],
    ];
  }

  constructor(params: { ping_id: bigint }) {
    super();
    this.ping_id = params.ping_id;
  }
}

export class ping_delay_disconnect extends Function<types.Pong> {
  ping_id: bigint;
  disconnect_delay: number;

  protected get [id]() {
    return 0xF3427B8C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["ping_id", "bigint", "long"],
      ["disconnect_delay", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.ping_id, "bigint", "long"],
      [this.disconnect_delay, "number", "int"],
    ];
  }

  constructor(params: { ping_id: bigint; disconnect_delay: number }) {
    super();
    this.ping_id = params.ping_id;
    this.disconnect_delay = params.disconnect_delay;
  }
}

export class destroy_session extends Function<types.DestroySessionRes> {
  session_id: bigint;

  protected get [id]() {
    return 0xE7512126;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["session_id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.session_id, "bigint", "long"],
    ];
  }

  constructor(params: { session_id: bigint }) {
    super();
    this.session_id = params.session_id;
  }
}

export class destroy_auth_key extends Function<types.DestroyAuthKeyRes> {
  protected get [id]() {
    return 0xD1435160;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class invokeAfterMsg<T extends Function<unknown>> extends Function<T["__R"]> {
  msg_id: bigint;
  query: T;

  protected get [id]() {
    return 0xCB9F372D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msg_id", "bigint", "long"],
      ["query", types.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.msg_id, "bigint", "long"],
      [this.query, types.TypeX, "!X"],
    ];
  }

  constructor(params: { msg_id: bigint; query: T }) {
    super();
    this.msg_id = params.msg_id;
    this.query = params.query;
  }
}

export class invokeAfterMsgs<T extends Function<unknown>> extends Function<T["__R"]> {
  msg_ids: Array<bigint>;
  query: T;

  protected get [id]() {
    return 0x3DC4B4F0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msg_ids", ["bigint"], "Vector<long>"],
      ["query", types.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.msg_ids, ["bigint"], "Vector<long>"],
      [this.query, types.TypeX, "!X"],
    ];
  }

  constructor(params: { msg_ids: Array<bigint>; query: T }) {
    super();
    this.msg_ids = params.msg_ids;
    this.query = params.query;
  }
}

export class initConnection<T extends Function<unknown>> extends Function<T["__R"]> {
  api_id: number;
  device_model: string;
  system_version: string;
  app_version: string;
  system_lang_code: string;
  lang_pack: string;
  lang_code: string;
  proxy?: types.InputClientProxy;
  params?: types.JSONValue;
  query: T;

  protected get [id]() {
    return 0xC1CD5EA9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["api_id", "number", "int"],
      ["device_model", "string", "string"],
      ["system_version", "string", "string"],
      ["app_version", "string", "string"],
      ["system_lang_code", "string", "string"],
      ["lang_pack", "string", "string"],
      ["lang_code", "string", "string"],
      ["proxy", types._InputClientProxy, "flags.0?InputClientProxy"],
      ["params", types._JSONValue, "flags.1?JSONValue"],
      ["query", types.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.api_id, "number", "int"],
      [this.device_model, "string", "string"],
      [this.system_version, "string", "string"],
      [this.app_version, "string", "string"],
      [this.system_lang_code, "string", "string"],
      [this.lang_pack, "string", "string"],
      [this.lang_code, "string", "string"],
      [this.proxy ?? null, types._InputClientProxy, "flags.0?InputClientProxy"],
      [this.params ?? null, types._JSONValue, "flags.1?JSONValue"],
      [this.query, types.TypeX, "!X"],
    ];
  }

  constructor(params: { api_id: number; device_model: string; system_version: string; app_version: string; system_lang_code: string; lang_pack: string; lang_code: string; proxy?: types.InputClientProxy; params?: types.JSONValue; query: T }) {
    super();
    this.api_id = params.api_id;
    this.device_model = params.device_model;
    this.system_version = params.system_version;
    this.app_version = params.app_version;
    this.system_lang_code = params.system_lang_code;
    this.lang_pack = params.lang_pack;
    this.lang_code = params.lang_code;
    this.proxy = params.proxy;
    this.params = params.params;
    this.query = params.query;
  }
}

export class invokeWithLayer<T extends Function<unknown>> extends Function<T["__R"]> {
  layer: number;
  query: T;

  protected get [id]() {
    return 0xDA9B0D0D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["layer", "number", "int"],
      ["query", types.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.layer, "number", "int"],
      [this.query, types.TypeX, "!X"],
    ];
  }

  constructor(params: { layer: number; query: T }) {
    super();
    this.layer = params.layer;
    this.query = params.query;
  }
}

export class invokeWithoutUpdates<T extends Function<unknown>> extends Function<T["__R"]> {
  query: T;

  protected get [id]() {
    return 0xBF9459B7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["query", types.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.query, types.TypeX, "!X"],
    ];
  }

  constructor(params: { query: T }) {
    super();
    this.query = params.query;
  }
}

export class invokeWithMessagesRange<T extends Function<unknown>> extends Function<T["__R"]> {
  range: types.MessageRange;
  query: T;

  protected get [id]() {
    return 0x365275F2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["range", types._MessageRange, "MessageRange"],
      ["query", types.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.range, types._MessageRange, "MessageRange"],
      [this.query, types.TypeX, "!X"],
    ];
  }

  constructor(params: { range: types.MessageRange; query: T }) {
    super();
    this.range = params.range;
    this.query = params.query;
  }
}

export class invokeWithTakeout<T extends Function<unknown>> extends Function<T["__R"]> {
  takeout_id: bigint;
  query: T;

  protected get [id]() {
    return 0xACA9FD2E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["takeout_id", "bigint", "long"],
      ["query", types.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.takeout_id, "bigint", "long"],
      [this.query, types.TypeX, "!X"],
    ];
  }

  constructor(params: { takeout_id: bigint; query: T }) {
    super();
    this.takeout_id = params.takeout_id;
    this.query = params.query;
  }
}

export class auth_sendCode extends Function<types.auth_SentCode> {
  phone_number: string;
  api_id: number;
  api_hash: string;
  settings: types.CodeSettings;

  protected get [id]() {
    return 0xA677244F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phone_number", "string", "string"],
      ["api_id", "number", "int"],
      ["api_hash", "string", "string"],
      ["settings", types._CodeSettings, "CodeSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phone_number, "string", "string"],
      [this.api_id, "number", "int"],
      [this.api_hash, "string", "string"],
      [this.settings, types._CodeSettings, "CodeSettings"],
    ];
  }

  constructor(params: { phone_number: string; api_id: number; api_hash: string; settings: types.CodeSettings }) {
    super();
    this.phone_number = params.phone_number;
    this.api_id = params.api_id;
    this.api_hash = params.api_hash;
    this.settings = params.settings;
  }
}

export class auth_signUp extends Function<types.auth_Authorization> {
  phone_number: string;
  phone_code_hash: string;
  first_name: string;
  last_name: string;

  protected get [id]() {
    return 0x80EEE427;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phone_number", "string", "string"],
      ["phone_code_hash", "string", "string"],
      ["first_name", "string", "string"],
      ["last_name", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phone_number, "string", "string"],
      [this.phone_code_hash, "string", "string"],
      [this.first_name, "string", "string"],
      [this.last_name, "string", "string"],
    ];
  }

  constructor(params: { phone_number: string; phone_code_hash: string; first_name: string; last_name: string }) {
    super();
    this.phone_number = params.phone_number;
    this.phone_code_hash = params.phone_code_hash;
    this.first_name = params.first_name;
    this.last_name = params.last_name;
  }
}

export class auth_signIn extends Function<types.auth_Authorization> {
  phone_number: string;
  phone_code_hash: string;
  phone_code?: string;
  email_verification?: types.EmailVerification;

  protected get [id]() {
    return 0x8D52A951;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["phone_number", "string", "string"],
      ["phone_code_hash", "string", "string"],
      ["phone_code", "string", "flags.0?string"],
      ["email_verification", types._EmailVerification, "flags.1?EmailVerification"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.phone_number, "string", "string"],
      [this.phone_code_hash, "string", "string"],
      [this.phone_code ?? null, "string", "flags.0?string"],
      [this.email_verification ?? null, types._EmailVerification, "flags.1?EmailVerification"],
    ];
  }

  constructor(params: { phone_number: string; phone_code_hash: string; phone_code?: string; email_verification?: types.EmailVerification }) {
    super();
    this.phone_number = params.phone_number;
    this.phone_code_hash = params.phone_code_hash;
    this.phone_code = params.phone_code;
    this.email_verification = params.email_verification;
  }
}

export class auth_logOut extends Function<types.auth_LoggedOut> {
  protected get [id]() {
    return 0x3E72BA19;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class auth_resetAuthorizations extends Function<boolean> {
  protected get [id]() {
    return 0x9FAB0D1A;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class auth_exportAuthorization extends Function<types.auth_ExportedAuthorization> {
  dc_id: number;

  protected get [id]() {
    return 0xE5BFFFCD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["dc_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.dc_id, "number", "int"],
    ];
  }

  constructor(params: { dc_id: number }) {
    super();
    this.dc_id = params.dc_id;
  }
}

export class auth_importAuthorization extends Function<types.auth_Authorization> {
  id: bigint;
  bytes: Uint8Array;

  protected get [id]() {
    return 0xA57A7DAD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["bytes", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.bytes, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { id: bigint; bytes: Uint8Array }) {
    super();
    this.id = params.id;
    this.bytes = params.bytes;
  }
}

export class auth_bindTempAuthKey extends Function<boolean> {
  perm_auth_key_id: bigint;
  nonce: bigint;
  expires_at: number;
  encrypted_message: Uint8Array;

  protected get [id]() {
    return 0xCDD42A05;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["perm_auth_key_id", "bigint", "long"],
      ["nonce", "bigint", "long"],
      ["expires_at", "number", "int"],
      ["encrypted_message", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.perm_auth_key_id, "bigint", "long"],
      [this.nonce, "bigint", "long"],
      [this.expires_at, "number", "int"],
      [this.encrypted_message, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { perm_auth_key_id: bigint; nonce: bigint; expires_at: number; encrypted_message: Uint8Array }) {
    super();
    this.perm_auth_key_id = params.perm_auth_key_id;
    this.nonce = params.nonce;
    this.expires_at = params.expires_at;
    this.encrypted_message = params.encrypted_message;
  }
}

export class auth_importBotAuthorization extends Function<types.auth_Authorization> {
  flags: number;
  api_id: number;
  api_hash: string;
  bot_auth_token: string;

  protected get [id]() {
    return 0x67A3FF2C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", "number", "int"],
      ["api_id", "number", "int"],
      ["api_hash", "string", "string"],
      ["bot_auth_token", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.flags, "number", "int"],
      [this.api_id, "number", "int"],
      [this.api_hash, "string", "string"],
      [this.bot_auth_token, "string", "string"],
    ];
  }

  constructor(params: { flags: number; api_id: number; api_hash: string; bot_auth_token: string }) {
    super();
    this.flags = params.flags;
    this.api_id = params.api_id;
    this.api_hash = params.api_hash;
    this.bot_auth_token = params.bot_auth_token;
  }
}

export class auth_checkPassword extends Function<types.auth_Authorization> {
  password: types.InputCheckPasswordSRP;

  protected get [id]() {
    return 0xD18B4D16;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["password", types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.password, types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  constructor(params: { password: types.InputCheckPasswordSRP }) {
    super();
    this.password = params.password;
  }
}

export class auth_requestPasswordRecovery extends Function<types.auth_PasswordRecovery> {
  protected get [id]() {
    return 0xD897BC66;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class auth_recoverPassword extends Function<types.auth_Authorization> {
  code: string;
  new_settings?: types.account_PasswordInputSettings;

  protected get [id]() {
    return 0x37096C70;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["code", "string", "string"],
      ["new_settings", types._account_PasswordInputSettings, "flags.0?account.PasswordInputSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.code, "string", "string"],
      [this.new_settings ?? null, types._account_PasswordInputSettings, "flags.0?account.PasswordInputSettings"],
    ];
  }

  constructor(params: { code: string; new_settings?: types.account_PasswordInputSettings }) {
    super();
    this.code = params.code;
    this.new_settings = params.new_settings;
  }
}

export class auth_resendCode extends Function<types.auth_SentCode> {
  phone_number: string;
  phone_code_hash: string;

  protected get [id]() {
    return 0x3EF1A9BF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phone_number", "string", "string"],
      ["phone_code_hash", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phone_number, "string", "string"],
      [this.phone_code_hash, "string", "string"],
    ];
  }

  constructor(params: { phone_number: string; phone_code_hash: string }) {
    super();
    this.phone_number = params.phone_number;
    this.phone_code_hash = params.phone_code_hash;
  }
}

export class auth_cancelCode extends Function<boolean> {
  phone_number: string;
  phone_code_hash: string;

  protected get [id]() {
    return 0x1F040578;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phone_number", "string", "string"],
      ["phone_code_hash", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phone_number, "string", "string"],
      [this.phone_code_hash, "string", "string"],
    ];
  }

  constructor(params: { phone_number: string; phone_code_hash: string }) {
    super();
    this.phone_number = params.phone_number;
    this.phone_code_hash = params.phone_code_hash;
  }
}

export class auth_dropTempAuthKeys extends Function<boolean> {
  except_auth_keys: Array<bigint>;

  protected get [id]() {
    return 0x8E48A188;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["except_auth_keys", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.except_auth_keys, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { except_auth_keys: Array<bigint> }) {
    super();
    this.except_auth_keys = params.except_auth_keys;
  }
}

export class auth_exportLoginToken extends Function<types.auth_LoginToken> {
  api_id: number;
  api_hash: string;
  except_ids: Array<bigint>;

  protected get [id]() {
    return 0xB7E085FE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["api_id", "number", "int"],
      ["api_hash", "string", "string"],
      ["except_ids", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.api_id, "number", "int"],
      [this.api_hash, "string", "string"],
      [this.except_ids, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { api_id: number; api_hash: string; except_ids: Array<bigint> }) {
    super();
    this.api_id = params.api_id;
    this.api_hash = params.api_hash;
    this.except_ids = params.except_ids;
  }
}

export class auth_importLoginToken extends Function<types.auth_LoginToken> {
  token: Uint8Array;

  protected get [id]() {
    return 0x95AC5CE4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["token", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.token, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { token: Uint8Array }) {
    super();
    this.token = params.token;
  }
}

export class auth_acceptLoginToken extends Function<types.Authorization> {
  token: Uint8Array;

  protected get [id]() {
    return 0xE894AD4D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["token", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.token, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { token: Uint8Array }) {
    super();
    this.token = params.token;
  }
}

export class auth_checkRecoveryPassword extends Function<boolean> {
  code: string;

  protected get [id]() {
    return 0x0D36BF79;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["code", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.code, "string", "string"],
    ];
  }

  constructor(params: { code: string }) {
    super();
    this.code = params.code;
  }
}

export class auth_importWebTokenAuthorization extends Function<types.auth_Authorization> {
  api_id: number;
  api_hash: string;
  web_auth_token: string;

  protected get [id]() {
    return 0x2DB873A9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["api_id", "number", "int"],
      ["api_hash", "string", "string"],
      ["web_auth_token", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.api_id, "number", "int"],
      [this.api_hash, "string", "string"],
      [this.web_auth_token, "string", "string"],
    ];
  }

  constructor(params: { api_id: number; api_hash: string; web_auth_token: string }) {
    super();
    this.api_id = params.api_id;
    this.api_hash = params.api_hash;
    this.web_auth_token = params.web_auth_token;
  }
}

export class auth_requestFirebaseSms extends Function<boolean> {
  phone_number: string;
  phone_code_hash: string;
  safety_net_token?: string;
  ios_push_secret?: string;

  protected get [id]() {
    return 0x89464B50;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["phone_number", "string", "string"],
      ["phone_code_hash", "string", "string"],
      ["safety_net_token", "string", "flags.0?string"],
      ["ios_push_secret", "string", "flags.1?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.phone_number, "string", "string"],
      [this.phone_code_hash, "string", "string"],
      [this.safety_net_token ?? null, "string", "flags.0?string"],
      [this.ios_push_secret ?? null, "string", "flags.1?string"],
    ];
  }

  constructor(params: { phone_number: string; phone_code_hash: string; safety_net_token?: string; ios_push_secret?: string }) {
    super();
    this.phone_number = params.phone_number;
    this.phone_code_hash = params.phone_code_hash;
    this.safety_net_token = params.safety_net_token;
    this.ios_push_secret = params.ios_push_secret;
  }
}

export class auth_resetLoginEmail extends Function<types.auth_SentCode> {
  phone_number: string;
  phone_code_hash: string;

  protected get [id]() {
    return 0x7E960193;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phone_number", "string", "string"],
      ["phone_code_hash", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phone_number, "string", "string"],
      [this.phone_code_hash, "string", "string"],
    ];
  }

  constructor(params: { phone_number: string; phone_code_hash: string }) {
    super();
    this.phone_number = params.phone_number;
    this.phone_code_hash = params.phone_code_hash;
  }
}

export class account_registerDevice extends Function<boolean> {
  no_muted?: true;
  token_type: number;
  token: string;
  app_sandbox: boolean;
  secret: Uint8Array;
  other_uids: Array<bigint>;

  protected get [id]() {
    return 0xEC86017A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["no_muted", "true", "flags.0?true"],
      ["token_type", "number", "int"],
      ["token", "string", "string"],
      ["app_sandbox", "boolean", "Bool"],
      ["secret", Uint8Array, "bytes"],
      ["other_uids", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.no_muted ?? null, "true", "flags.0?true"],
      [this.token_type, "number", "int"],
      [this.token, "string", "string"],
      [this.app_sandbox, "boolean", "Bool"],
      [this.secret, Uint8Array, "bytes"],
      [this.other_uids, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { no_muted?: true; token_type: number; token: string; app_sandbox: boolean; secret: Uint8Array; other_uids: Array<bigint> }) {
    super();
    this.no_muted = params.no_muted;
    this.token_type = params.token_type;
    this.token = params.token;
    this.app_sandbox = params.app_sandbox;
    this.secret = params.secret;
    this.other_uids = params.other_uids;
  }
}

export class account_unregisterDevice extends Function<boolean> {
  token_type: number;
  token: string;
  other_uids: Array<bigint>;

  protected get [id]() {
    return 0x6A0D3206;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["token_type", "number", "int"],
      ["token", "string", "string"],
      ["other_uids", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.token_type, "number", "int"],
      [this.token, "string", "string"],
      [this.other_uids, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { token_type: number; token: string; other_uids: Array<bigint> }) {
    super();
    this.token_type = params.token_type;
    this.token = params.token;
    this.other_uids = params.other_uids;
  }
}

export class account_updateNotifySettings extends Function<boolean> {
  peer: types.InputNotifyPeer;
  settings: types.InputPeerNotifySettings;

  protected get [id]() {
    return 0x84BE5B93;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputNotifyPeer, "InputNotifyPeer"],
      ["settings", types._InputPeerNotifySettings, "InputPeerNotifySettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputNotifyPeer, "InputNotifyPeer"],
      [this.settings, types._InputPeerNotifySettings, "InputPeerNotifySettings"],
    ];
  }

  constructor(params: { peer: types.InputNotifyPeer; settings: types.InputPeerNotifySettings }) {
    super();
    this.peer = params.peer;
    this.settings = params.settings;
  }
}

export class account_getNotifySettings extends Function<types.PeerNotifySettings> {
  peer: types.InputNotifyPeer;

  protected get [id]() {
    return 0x12B3AD31;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputNotifyPeer, "InputNotifyPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputNotifyPeer, "InputNotifyPeer"],
    ];
  }

  constructor(params: { peer: types.InputNotifyPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class account_resetNotifySettings extends Function<boolean> {
  protected get [id]() {
    return 0xDB7E1747;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_updateProfile extends Function<types.User> {
  first_name?: string;
  last_name?: string;
  about?: string;

  protected get [id]() {
    return 0x78515775;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["first_name", "string", "flags.0?string"],
      ["last_name", "string", "flags.1?string"],
      ["about", "string", "flags.2?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.first_name ?? null, "string", "flags.0?string"],
      [this.last_name ?? null, "string", "flags.1?string"],
      [this.about ?? null, "string", "flags.2?string"],
    ];
  }

  constructor(params?: { first_name?: string; last_name?: string; about?: string }) {
    super();
    this.first_name = params?.first_name;
    this.last_name = params?.last_name;
    this.about = params?.about;
  }
}

export class account_updateStatus extends Function<boolean> {
  offline: boolean;

  protected get [id]() {
    return 0x6628562C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["offline", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offline, "boolean", "Bool"],
    ];
  }

  constructor(params: { offline: boolean }) {
    super();
    this.offline = params.offline;
  }
}

export class account_getWallPapers extends Function<types.account_WallPapers> {
  hash: bigint;

  protected get [id]() {
    return 0x07967D36;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class account_reportPeer extends Function<boolean> {
  peer: types.InputPeer;
  reason: types.ReportReason;
  message: string;

  protected get [id]() {
    return 0xC5BA3D86;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["reason", types._ReportReason, "ReportReason"],
      ["message", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.reason, types._ReportReason, "ReportReason"],
      [this.message, "string", "string"],
    ];
  }

  constructor(params: { peer: types.InputPeer; reason: types.ReportReason; message: string }) {
    super();
    this.peer = params.peer;
    this.reason = params.reason;
    this.message = params.message;
  }
}

export class account_checkUsername extends Function<boolean> {
  username: string;

  protected get [id]() {
    return 0x2714D86C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["username", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.username, "string", "string"],
    ];
  }

  constructor(params: { username: string }) {
    super();
    this.username = params.username;
  }
}

export class account_updateUsername extends Function<types.User> {
  username: string;

  protected get [id]() {
    return 0x3E0BDD7C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["username", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.username, "string", "string"],
    ];
  }

  constructor(params: { username: string }) {
    super();
    this.username = params.username;
  }
}

export class account_getPrivacy extends Function<types.account_PrivacyRules> {
  key: types.InputPrivacyKey;

  protected get [id]() {
    return 0xDADBC950;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["key", types._InputPrivacyKey, "InputPrivacyKey"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.key, types._InputPrivacyKey, "InputPrivacyKey"],
    ];
  }

  constructor(params: { key: types.InputPrivacyKey }) {
    super();
    this.key = params.key;
  }
}

export class account_setPrivacy extends Function<types.account_PrivacyRules> {
  key: types.InputPrivacyKey;
  rules: Array<types.InputPrivacyRule>;

  protected get [id]() {
    return 0xC9F81CE8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["key", types._InputPrivacyKey, "InputPrivacyKey"],
      ["rules", [types._InputPrivacyRule], "Vector<InputPrivacyRule>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.key, types._InputPrivacyKey, "InputPrivacyKey"],
      [this.rules, [types._InputPrivacyRule], "Vector<InputPrivacyRule>"],
    ];
  }

  constructor(params: { key: types.InputPrivacyKey; rules: Array<types.InputPrivacyRule> }) {
    super();
    this.key = params.key;
    this.rules = params.rules;
  }
}

export class account_deleteAccount extends Function<boolean> {
  reason: string;
  password?: types.InputCheckPasswordSRP;

  protected get [id]() {
    return 0xA2C0CF74;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["reason", "string", "string"],
      ["password", types._InputCheckPasswordSRP, "flags.0?InputCheckPasswordSRP"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.reason, "string", "string"],
      [this.password ?? null, types._InputCheckPasswordSRP, "flags.0?InputCheckPasswordSRP"],
    ];
  }

  constructor(params: { reason: string; password?: types.InputCheckPasswordSRP }) {
    super();
    this.reason = params.reason;
    this.password = params.password;
  }
}

export class account_getAccountTTL extends Function<types.AccountDaysTTL> {
  protected get [id]() {
    return 0x08FC711D;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_setAccountTTL extends Function<boolean> {
  ttl: types.AccountDaysTTL;

  protected get [id]() {
    return 0x2442485E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["ttl", types._AccountDaysTTL, "AccountDaysTTL"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.ttl, types._AccountDaysTTL, "AccountDaysTTL"],
    ];
  }

  constructor(params: { ttl: types.AccountDaysTTL }) {
    super();
    this.ttl = params.ttl;
  }
}

export class account_sendChangePhoneCode extends Function<types.auth_SentCode> {
  phone_number: string;
  settings: types.CodeSettings;

  protected get [id]() {
    return 0x82574AE5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phone_number", "string", "string"],
      ["settings", types._CodeSettings, "CodeSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phone_number, "string", "string"],
      [this.settings, types._CodeSettings, "CodeSettings"],
    ];
  }

  constructor(params: { phone_number: string; settings: types.CodeSettings }) {
    super();
    this.phone_number = params.phone_number;
    this.settings = params.settings;
  }
}

export class account_changePhone extends Function<types.User> {
  phone_number: string;
  phone_code_hash: string;
  phone_code: string;

  protected get [id]() {
    return 0x70C32EDB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phone_number", "string", "string"],
      ["phone_code_hash", "string", "string"],
      ["phone_code", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phone_number, "string", "string"],
      [this.phone_code_hash, "string", "string"],
      [this.phone_code, "string", "string"],
    ];
  }

  constructor(params: { phone_number: string; phone_code_hash: string; phone_code: string }) {
    super();
    this.phone_number = params.phone_number;
    this.phone_code_hash = params.phone_code_hash;
    this.phone_code = params.phone_code;
  }
}

export class account_updateDeviceLocked extends Function<boolean> {
  period: number;

  protected get [id]() {
    return 0x38DF3532;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["period", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.period, "number", "int"],
    ];
  }

  constructor(params: { period: number }) {
    super();
    this.period = params.period;
  }
}

export class account_getAuthorizations extends Function<types.account_Authorizations> {
  protected get [id]() {
    return 0xE320C158;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_resetAuthorization extends Function<boolean> {
  hash: bigint;

  protected get [id]() {
    return 0xDF77F3BC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class account_getPassword extends Function<types.account_Password> {
  protected get [id]() {
    return 0x548A30F5;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_getPasswordSettings extends Function<types.account_PasswordSettings> {
  password: types.InputCheckPasswordSRP;

  protected get [id]() {
    return 0x9CD4EAF9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["password", types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.password, types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  constructor(params: { password: types.InputCheckPasswordSRP }) {
    super();
    this.password = params.password;
  }
}

export class account_updatePasswordSettings extends Function<boolean> {
  password: types.InputCheckPasswordSRP;
  new_settings: types.account_PasswordInputSettings;

  protected get [id]() {
    return 0xA59B102F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["password", types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
      ["new_settings", types._account_PasswordInputSettings, "account.PasswordInputSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.password, types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
      [this.new_settings, types._account_PasswordInputSettings, "account.PasswordInputSettings"],
    ];
  }

  constructor(params: { password: types.InputCheckPasswordSRP; new_settings: types.account_PasswordInputSettings }) {
    super();
    this.password = params.password;
    this.new_settings = params.new_settings;
  }
}

export class account_sendConfirmPhoneCode extends Function<types.auth_SentCode> {
  hash: string;
  settings: types.CodeSettings;

  protected get [id]() {
    return 0x1B3FAA88;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "string", "string"],
      ["settings", types._CodeSettings, "CodeSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "string", "string"],
      [this.settings, types._CodeSettings, "CodeSettings"],
    ];
  }

  constructor(params: { hash: string; settings: types.CodeSettings }) {
    super();
    this.hash = params.hash;
    this.settings = params.settings;
  }
}

export class account_confirmPhone extends Function<boolean> {
  phone_code_hash: string;
  phone_code: string;

  protected get [id]() {
    return 0x5F2178C3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phone_code_hash", "string", "string"],
      ["phone_code", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phone_code_hash, "string", "string"],
      [this.phone_code, "string", "string"],
    ];
  }

  constructor(params: { phone_code_hash: string; phone_code: string }) {
    super();
    this.phone_code_hash = params.phone_code_hash;
    this.phone_code = params.phone_code;
  }
}

export class account_getTmpPassword extends Function<types.account_TmpPassword> {
  password: types.InputCheckPasswordSRP;
  period: number;

  protected get [id]() {
    return 0x449E0B51;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["password", types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
      ["period", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.password, types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
      [this.period, "number", "int"],
    ];
  }

  constructor(params: { password: types.InputCheckPasswordSRP; period: number }) {
    super();
    this.password = params.password;
    this.period = params.period;
  }
}

export class account_getWebAuthorizations extends Function<types.account_WebAuthorizations> {
  protected get [id]() {
    return 0x182E6D6F;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_resetWebAuthorization extends Function<boolean> {
  hash: bigint;

  protected get [id]() {
    return 0x2D01B9EF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class account_resetWebAuthorizations extends Function<boolean> {
  protected get [id]() {
    return 0x682D2594;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_getAllSecureValues extends Function<types.SecureValue[]> {
  protected get [id]() {
    return 0xB288BC7D;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_getSecureValue extends Function<types.SecureValue[]> {
  types: Array<types.SecureValueType>;

  protected get [id]() {
    return 0x73665BC2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["types", [types._SecureValueType], "Vector<SecureValueType>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.types, [types._SecureValueType], "Vector<SecureValueType>"],
    ];
  }

  constructor(params: { types: Array<types.SecureValueType> }) {
    super();
    this.types = params.types;
  }
}

export class account_saveSecureValue extends Function<types.SecureValue> {
  value: types.InputSecureValue;
  secure_secret_id: bigint;

  protected get [id]() {
    return 0x899FE31D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["value", types._InputSecureValue, "InputSecureValue"],
      ["secure_secret_id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.value, types._InputSecureValue, "InputSecureValue"],
      [this.secure_secret_id, "bigint", "long"],
    ];
  }

  constructor(params: { value: types.InputSecureValue; secure_secret_id: bigint }) {
    super();
    this.value = params.value;
    this.secure_secret_id = params.secure_secret_id;
  }
}

export class account_deleteSecureValue extends Function<boolean> {
  types: Array<types.SecureValueType>;

  protected get [id]() {
    return 0xB880BC4B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["types", [types._SecureValueType], "Vector<SecureValueType>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.types, [types._SecureValueType], "Vector<SecureValueType>"],
    ];
  }

  constructor(params: { types: Array<types.SecureValueType> }) {
    super();
    this.types = params.types;
  }
}

export class account_getAuthorizationForm extends Function<types.account_AuthorizationForm> {
  bot_id: bigint;
  scope: string;
  public_key: string;

  protected get [id]() {
    return 0xA929597A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot_id", "bigint", "long"],
      ["scope", "string", "string"],
      ["public_key", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot_id, "bigint", "long"],
      [this.scope, "string", "string"],
      [this.public_key, "string", "string"],
    ];
  }

  constructor(params: { bot_id: bigint; scope: string; public_key: string }) {
    super();
    this.bot_id = params.bot_id;
    this.scope = params.scope;
    this.public_key = params.public_key;
  }
}

export class account_acceptAuthorization extends Function<boolean> {
  bot_id: bigint;
  scope: string;
  public_key: string;
  value_hashes: Array<types.SecureValueHash>;
  credentials: types.SecureCredentialsEncrypted;

  protected get [id]() {
    return 0xF3ED4C73;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot_id", "bigint", "long"],
      ["scope", "string", "string"],
      ["public_key", "string", "string"],
      ["value_hashes", [types._SecureValueHash], "Vector<SecureValueHash>"],
      ["credentials", types._SecureCredentialsEncrypted, "SecureCredentialsEncrypted"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot_id, "bigint", "long"],
      [this.scope, "string", "string"],
      [this.public_key, "string", "string"],
      [this.value_hashes, [types._SecureValueHash], "Vector<SecureValueHash>"],
      [this.credentials, types._SecureCredentialsEncrypted, "SecureCredentialsEncrypted"],
    ];
  }

  constructor(params: { bot_id: bigint; scope: string; public_key: string; value_hashes: Array<types.SecureValueHash>; credentials: types.SecureCredentialsEncrypted }) {
    super();
    this.bot_id = params.bot_id;
    this.scope = params.scope;
    this.public_key = params.public_key;
    this.value_hashes = params.value_hashes;
    this.credentials = params.credentials;
  }
}

export class account_sendVerifyPhoneCode extends Function<types.auth_SentCode> {
  phone_number: string;
  settings: types.CodeSettings;

  protected get [id]() {
    return 0xA5A356F9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phone_number", "string", "string"],
      ["settings", types._CodeSettings, "CodeSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phone_number, "string", "string"],
      [this.settings, types._CodeSettings, "CodeSettings"],
    ];
  }

  constructor(params: { phone_number: string; settings: types.CodeSettings }) {
    super();
    this.phone_number = params.phone_number;
    this.settings = params.settings;
  }
}

export class account_verifyPhone extends Function<boolean> {
  phone_number: string;
  phone_code_hash: string;
  phone_code: string;

  protected get [id]() {
    return 0x4DD3A7F6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phone_number", "string", "string"],
      ["phone_code_hash", "string", "string"],
      ["phone_code", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phone_number, "string", "string"],
      [this.phone_code_hash, "string", "string"],
      [this.phone_code, "string", "string"],
    ];
  }

  constructor(params: { phone_number: string; phone_code_hash: string; phone_code: string }) {
    super();
    this.phone_number = params.phone_number;
    this.phone_code_hash = params.phone_code_hash;
    this.phone_code = params.phone_code;
  }
}

export class account_sendVerifyEmailCode extends Function<types.account_SentEmailCode> {
  purpose: types.EmailVerifyPurpose;
  email: string;

  protected get [id]() {
    return 0x98E037BB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["purpose", types._EmailVerifyPurpose, "EmailVerifyPurpose"],
      ["email", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.purpose, types._EmailVerifyPurpose, "EmailVerifyPurpose"],
      [this.email, "string", "string"],
    ];
  }

  constructor(params: { purpose: types.EmailVerifyPurpose; email: string }) {
    super();
    this.purpose = params.purpose;
    this.email = params.email;
  }
}

export class account_verifyEmail extends Function<types.account_EmailVerified> {
  purpose: types.EmailVerifyPurpose;
  verification: types.EmailVerification;

  protected get [id]() {
    return 0x032DA4CF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["purpose", types._EmailVerifyPurpose, "EmailVerifyPurpose"],
      ["verification", types._EmailVerification, "EmailVerification"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.purpose, types._EmailVerifyPurpose, "EmailVerifyPurpose"],
      [this.verification, types._EmailVerification, "EmailVerification"],
    ];
  }

  constructor(params: { purpose: types.EmailVerifyPurpose; verification: types.EmailVerification }) {
    super();
    this.purpose = params.purpose;
    this.verification = params.verification;
  }
}

export class account_initTakeoutSession extends Function<types.account_Takeout> {
  contacts?: true;
  message_users?: true;
  message_chats?: true;
  message_megagroups?: true;
  message_channels?: true;
  files?: true;
  file_max_size?: bigint;

  protected get [id]() {
    return 0x8EF3EAB0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["contacts", "true", "flags.0?true"],
      ["message_users", "true", "flags.1?true"],
      ["message_chats", "true", "flags.2?true"],
      ["message_megagroups", "true", "flags.3?true"],
      ["message_channels", "true", "flags.4?true"],
      ["files", "true", "flags.5?true"],
      ["file_max_size", "bigint", "flags.5?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.contacts ?? null, "true", "flags.0?true"],
      [this.message_users ?? null, "true", "flags.1?true"],
      [this.message_chats ?? null, "true", "flags.2?true"],
      [this.message_megagroups ?? null, "true", "flags.3?true"],
      [this.message_channels ?? null, "true", "flags.4?true"],
      [this.files ?? null, "true", "flags.5?true"],
      [this.file_max_size ?? null, "bigint", "flags.5?long"],
    ];
  }

  constructor(params?: { contacts?: true; message_users?: true; message_chats?: true; message_megagroups?: true; message_channels?: true; files?: true; file_max_size?: bigint }) {
    super();
    this.contacts = params?.contacts;
    this.message_users = params?.message_users;
    this.message_chats = params?.message_chats;
    this.message_megagroups = params?.message_megagroups;
    this.message_channels = params?.message_channels;
    this.files = params?.files;
    this.file_max_size = params?.file_max_size;
  }
}

export class account_finishTakeoutSession extends Function<boolean> {
  success?: true;

  protected get [id]() {
    return 0x1D2652EE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["success", "true", "flags.0?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.success ?? null, "true", "flags.0?true"],
    ];
  }

  constructor(params?: { success?: true }) {
    super();
    this.success = params?.success;
  }
}

export class account_confirmPasswordEmail extends Function<boolean> {
  code: string;

  protected get [id]() {
    return 0x8FDF1920;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["code", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.code, "string", "string"],
    ];
  }

  constructor(params: { code: string }) {
    super();
    this.code = params.code;
  }
}

export class account_resendPasswordEmail extends Function<boolean> {
  protected get [id]() {
    return 0x7A7F2A15;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_cancelPasswordEmail extends Function<boolean> {
  protected get [id]() {
    return 0xC1CBD5B6;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_getContactSignUpNotification extends Function<boolean> {
  protected get [id]() {
    return 0x9F07C728;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_setContactSignUpNotification extends Function<boolean> {
  silent: boolean;

  protected get [id]() {
    return 0xCFF43F61;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["silent", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.silent, "boolean", "Bool"],
    ];
  }

  constructor(params: { silent: boolean }) {
    super();
    this.silent = params.silent;
  }
}

export class account_getNotifyExceptions extends Function<types.Updates> {
  compare_sound?: true;
  compare_stories?: true;
  peer?: types.InputNotifyPeer;

  protected get [id]() {
    return 0x53577479;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["compare_sound", "true", "flags.1?true"],
      ["compare_stories", "true", "flags.2?true"],
      ["peer", types._InputNotifyPeer, "flags.0?InputNotifyPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.compare_sound ?? null, "true", "flags.1?true"],
      [this.compare_stories ?? null, "true", "flags.2?true"],
      [this.peer ?? null, types._InputNotifyPeer, "flags.0?InputNotifyPeer"],
    ];
  }

  constructor(params?: { compare_sound?: true; compare_stories?: true; peer?: types.InputNotifyPeer }) {
    super();
    this.compare_sound = params?.compare_sound;
    this.compare_stories = params?.compare_stories;
    this.peer = params?.peer;
  }
}

export class account_getWallPaper extends Function<types.WallPaper> {
  wallpaper: types.InputWallPaper;

  protected get [id]() {
    return 0xFC8DDBEA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["wallpaper", types._InputWallPaper, "InputWallPaper"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.wallpaper, types._InputWallPaper, "InputWallPaper"],
    ];
  }

  constructor(params: { wallpaper: types.InputWallPaper }) {
    super();
    this.wallpaper = params.wallpaper;
  }
}

export class account_uploadWallPaper extends Function<types.WallPaper> {
  for_chat?: true;
  file: types.InputFile;
  mime_type: string;
  settings: types.WallPaperSettings;

  protected get [id]() {
    return 0xE39A8F03;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["for_chat", "true", "flags.0?true"],
      ["file", types._InputFile, "InputFile"],
      ["mime_type", "string", "string"],
      ["settings", types._WallPaperSettings, "WallPaperSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.for_chat ?? null, "true", "flags.0?true"],
      [this.file, types._InputFile, "InputFile"],
      [this.mime_type, "string", "string"],
      [this.settings, types._WallPaperSettings, "WallPaperSettings"],
    ];
  }

  constructor(params: { for_chat?: true; file: types.InputFile; mime_type: string; settings: types.WallPaperSettings }) {
    super();
    this.for_chat = params.for_chat;
    this.file = params.file;
    this.mime_type = params.mime_type;
    this.settings = params.settings;
  }
}

export class account_saveWallPaper extends Function<boolean> {
  wallpaper: types.InputWallPaper;
  unsave: boolean;
  settings: types.WallPaperSettings;

  protected get [id]() {
    return 0x6C5A5B37;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["wallpaper", types._InputWallPaper, "InputWallPaper"],
      ["unsave", "boolean", "Bool"],
      ["settings", types._WallPaperSettings, "WallPaperSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.wallpaper, types._InputWallPaper, "InputWallPaper"],
      [this.unsave, "boolean", "Bool"],
      [this.settings, types._WallPaperSettings, "WallPaperSettings"],
    ];
  }

  constructor(params: { wallpaper: types.InputWallPaper; unsave: boolean; settings: types.WallPaperSettings }) {
    super();
    this.wallpaper = params.wallpaper;
    this.unsave = params.unsave;
    this.settings = params.settings;
  }
}

export class account_installWallPaper extends Function<boolean> {
  wallpaper: types.InputWallPaper;
  settings: types.WallPaperSettings;

  protected get [id]() {
    return 0xFEED5769;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["wallpaper", types._InputWallPaper, "InputWallPaper"],
      ["settings", types._WallPaperSettings, "WallPaperSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.wallpaper, types._InputWallPaper, "InputWallPaper"],
      [this.settings, types._WallPaperSettings, "WallPaperSettings"],
    ];
  }

  constructor(params: { wallpaper: types.InputWallPaper; settings: types.WallPaperSettings }) {
    super();
    this.wallpaper = params.wallpaper;
    this.settings = params.settings;
  }
}

export class account_resetWallPapers extends Function<boolean> {
  protected get [id]() {
    return 0xBB3B9804;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_getAutoDownloadSettings extends Function<types.account_AutoDownloadSettings> {
  protected get [id]() {
    return 0x56DA0B3F;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_saveAutoDownloadSettings extends Function<boolean> {
  low?: true;
  high?: true;
  settings: types.AutoDownloadSettings;

  protected get [id]() {
    return 0x76F36233;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["low", "true", "flags.0?true"],
      ["high", "true", "flags.1?true"],
      ["settings", types._AutoDownloadSettings, "AutoDownloadSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.low ?? null, "true", "flags.0?true"],
      [this.high ?? null, "true", "flags.1?true"],
      [this.settings, types._AutoDownloadSettings, "AutoDownloadSettings"],
    ];
  }

  constructor(params: { low?: true; high?: true; settings: types.AutoDownloadSettings }) {
    super();
    this.low = params.low;
    this.high = params.high;
    this.settings = params.settings;
  }
}

export class account_uploadTheme extends Function<types.Document> {
  file: types.InputFile;
  thumb?: types.InputFile;
  file_name: string;
  mime_type: string;

  protected get [id]() {
    return 0x1C3DB333;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["file", types._InputFile, "InputFile"],
      ["thumb", types._InputFile, "flags.0?InputFile"],
      ["file_name", "string", "string"],
      ["mime_type", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.file, types._InputFile, "InputFile"],
      [this.thumb ?? null, types._InputFile, "flags.0?InputFile"],
      [this.file_name, "string", "string"],
      [this.mime_type, "string", "string"],
    ];
  }

  constructor(params: { file: types.InputFile; thumb?: types.InputFile; file_name: string; mime_type: string }) {
    super();
    this.file = params.file;
    this.thumb = params.thumb;
    this.file_name = params.file_name;
    this.mime_type = params.mime_type;
  }
}

export class account_createTheme extends Function<types.Theme> {
  slug: string;
  title: string;
  document?: types.InputDocument;
  settings?: Array<types.InputThemeSettings>;

  protected get [id]() {
    return 0x652E4400;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["slug", "string", "string"],
      ["title", "string", "string"],
      ["document", types._InputDocument, "flags.2?InputDocument"],
      ["settings", [types._InputThemeSettings], "flags.3?Vector<InputThemeSettings>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.slug, "string", "string"],
      [this.title, "string", "string"],
      [this.document ?? null, types._InputDocument, "flags.2?InputDocument"],
      [this.settings ?? null, [types._InputThemeSettings], "flags.3?Vector<InputThemeSettings>"],
    ];
  }

  constructor(params: { slug: string; title: string; document?: types.InputDocument; settings?: Array<types.InputThemeSettings> }) {
    super();
    this.slug = params.slug;
    this.title = params.title;
    this.document = params.document;
    this.settings = params.settings;
  }
}

export class account_updateTheme extends Function<types.Theme> {
  format: string;
  theme: types.InputTheme;
  slug?: string;
  title?: string;
  document?: types.InputDocument;
  settings?: Array<types.InputThemeSettings>;

  protected get [id]() {
    return 0x2BF40CCC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["format", "string", "string"],
      ["theme", types._InputTheme, "InputTheme"],
      ["slug", "string", "flags.0?string"],
      ["title", "string", "flags.1?string"],
      ["document", types._InputDocument, "flags.2?InputDocument"],
      ["settings", [types._InputThemeSettings], "flags.3?Vector<InputThemeSettings>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.format, "string", "string"],
      [this.theme, types._InputTheme, "InputTheme"],
      [this.slug ?? null, "string", "flags.0?string"],
      [this.title ?? null, "string", "flags.1?string"],
      [this.document ?? null, types._InputDocument, "flags.2?InputDocument"],
      [this.settings ?? null, [types._InputThemeSettings], "flags.3?Vector<InputThemeSettings>"],
    ];
  }

  constructor(params: { format: string; theme: types.InputTheme; slug?: string; title?: string; document?: types.InputDocument; settings?: Array<types.InputThemeSettings> }) {
    super();
    this.format = params.format;
    this.theme = params.theme;
    this.slug = params.slug;
    this.title = params.title;
    this.document = params.document;
    this.settings = params.settings;
  }
}

export class account_saveTheme extends Function<boolean> {
  theme: types.InputTheme;
  unsave: boolean;

  protected get [id]() {
    return 0xF257106C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["theme", types._InputTheme, "InputTheme"],
      ["unsave", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.theme, types._InputTheme, "InputTheme"],
      [this.unsave, "boolean", "Bool"],
    ];
  }

  constructor(params: { theme: types.InputTheme; unsave: boolean }) {
    super();
    this.theme = params.theme;
    this.unsave = params.unsave;
  }
}

export class account_installTheme extends Function<boolean> {
  dark?: true;
  theme?: types.InputTheme;
  format?: string;
  base_theme?: types.BaseTheme;

  protected get [id]() {
    return 0xC727BB3B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["dark", "true", "flags.0?true"],
      ["theme", types._InputTheme, "flags.1?InputTheme"],
      ["format", "string", "flags.2?string"],
      ["base_theme", types._BaseTheme, "flags.3?BaseTheme"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.dark ?? null, "true", "flags.0?true"],
      [this.theme ?? null, types._InputTheme, "flags.1?InputTheme"],
      [this.format ?? null, "string", "flags.2?string"],
      [this.base_theme ?? null, types._BaseTheme, "flags.3?BaseTheme"],
    ];
  }

  constructor(params?: { dark?: true; theme?: types.InputTheme; format?: string; base_theme?: types.BaseTheme }) {
    super();
    this.dark = params?.dark;
    this.theme = params?.theme;
    this.format = params?.format;
    this.base_theme = params?.base_theme;
  }
}

export class account_getTheme extends Function<types.Theme> {
  format: string;
  theme: types.InputTheme;

  protected get [id]() {
    return 0x3A5869EC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["format", "string", "string"],
      ["theme", types._InputTheme, "InputTheme"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.format, "string", "string"],
      [this.theme, types._InputTheme, "InputTheme"],
    ];
  }

  constructor(params: { format: string; theme: types.InputTheme }) {
    super();
    this.format = params.format;
    this.theme = params.theme;
  }
}

export class account_getThemes extends Function<types.account_Themes> {
  format: string;
  hash: bigint;

  protected get [id]() {
    return 0x7206E458;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["format", "string", "string"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.format, "string", "string"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { format: string; hash: bigint }) {
    super();
    this.format = params.format;
    this.hash = params.hash;
  }
}

export class account_setContentSettings extends Function<boolean> {
  sensitive_enabled?: true;

  protected get [id]() {
    return 0xB574B16B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["sensitive_enabled", "true", "flags.0?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.sensitive_enabled ?? null, "true", "flags.0?true"],
    ];
  }

  constructor(params?: { sensitive_enabled?: true }) {
    super();
    this.sensitive_enabled = params?.sensitive_enabled;
  }
}

export class account_getContentSettings extends Function<types.account_ContentSettings> {
  protected get [id]() {
    return 0x8B9B4DAE;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_getMultiWallPapers extends Function<types.WallPaper[]> {
  wallpapers: Array<types.InputWallPaper>;

  protected get [id]() {
    return 0x65AD71DC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["wallpapers", [types._InputWallPaper], "Vector<InputWallPaper>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.wallpapers, [types._InputWallPaper], "Vector<InputWallPaper>"],
    ];
  }

  constructor(params: { wallpapers: Array<types.InputWallPaper> }) {
    super();
    this.wallpapers = params.wallpapers;
  }
}

export class account_getGlobalPrivacySettings extends Function<types.GlobalPrivacySettings> {
  protected get [id]() {
    return 0xEB2B4CF6;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_setGlobalPrivacySettings extends Function<types.GlobalPrivacySettings> {
  settings: types.GlobalPrivacySettings;

  protected get [id]() {
    return 0x1EDAAAC2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["settings", types._GlobalPrivacySettings, "GlobalPrivacySettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.settings, types._GlobalPrivacySettings, "GlobalPrivacySettings"],
    ];
  }

  constructor(params: { settings: types.GlobalPrivacySettings }) {
    super();
    this.settings = params.settings;
  }
}

export class account_reportProfilePhoto extends Function<boolean> {
  peer: types.InputPeer;
  photo_id: types.InputPhoto;
  reason: types.ReportReason;
  message: string;

  protected get [id]() {
    return 0xFA8CC6F5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["photo_id", types._InputPhoto, "InputPhoto"],
      ["reason", types._ReportReason, "ReportReason"],
      ["message", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.photo_id, types._InputPhoto, "InputPhoto"],
      [this.reason, types._ReportReason, "ReportReason"],
      [this.message, "string", "string"],
    ];
  }

  constructor(params: { peer: types.InputPeer; photo_id: types.InputPhoto; reason: types.ReportReason; message: string }) {
    super();
    this.peer = params.peer;
    this.photo_id = params.photo_id;
    this.reason = params.reason;
    this.message = params.message;
  }
}

export class account_resetPassword extends Function<types.account_ResetPasswordResult> {
  protected get [id]() {
    return 0x9308CE1B;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_declinePasswordReset extends Function<boolean> {
  protected get [id]() {
    return 0x4C9409F6;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_getChatThemes extends Function<types.account_Themes> {
  hash: bigint;

  protected get [id]() {
    return 0xD638DE89;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class account_setAuthorizationTTL extends Function<boolean> {
  authorization_ttl_days: number;

  protected get [id]() {
    return 0xBF899AA0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["authorization_ttl_days", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.authorization_ttl_days, "number", "int"],
    ];
  }

  constructor(params: { authorization_ttl_days: number }) {
    super();
    this.authorization_ttl_days = params.authorization_ttl_days;
  }
}

export class account_changeAuthorizationSettings extends Function<boolean> {
  confirmed?: true;
  hash: bigint;
  encrypted_requests_disabled?: boolean;
  call_requests_disabled?: boolean;

  protected get [id]() {
    return 0x40F48462;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["confirmed", "true", "flags.3?true"],
      ["hash", "bigint", "long"],
      ["encrypted_requests_disabled", "boolean", "flags.0?Bool"],
      ["call_requests_disabled", "boolean", "flags.1?Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.confirmed ?? null, "true", "flags.3?true"],
      [this.hash, "bigint", "long"],
      [this.encrypted_requests_disabled ?? null, "boolean", "flags.0?Bool"],
      [this.call_requests_disabled ?? null, "boolean", "flags.1?Bool"],
    ];
  }

  constructor(params: { confirmed?: true; hash: bigint; encrypted_requests_disabled?: boolean; call_requests_disabled?: boolean }) {
    super();
    this.confirmed = params.confirmed;
    this.hash = params.hash;
    this.encrypted_requests_disabled = params.encrypted_requests_disabled;
    this.call_requests_disabled = params.call_requests_disabled;
  }
}

export class account_getSavedRingtones extends Function<types.account_SavedRingtones> {
  hash: bigint;

  protected get [id]() {
    return 0xE1902288;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class account_saveRingtone extends Function<types.account_SavedRingtone> {
  id: types.InputDocument;
  unsave: boolean;

  protected get [id]() {
    return 0x3DEA5B03;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types._InputDocument, "InputDocument"],
      ["unsave", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types._InputDocument, "InputDocument"],
      [this.unsave, "boolean", "Bool"],
    ];
  }

  constructor(params: { id: types.InputDocument; unsave: boolean }) {
    super();
    this.id = params.id;
    this.unsave = params.unsave;
  }
}

export class account_uploadRingtone extends Function<types.Document> {
  file: types.InputFile;
  file_name: string;
  mime_type: string;

  protected get [id]() {
    return 0x831A83A2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["file", types._InputFile, "InputFile"],
      ["file_name", "string", "string"],
      ["mime_type", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.file, types._InputFile, "InputFile"],
      [this.file_name, "string", "string"],
      [this.mime_type, "string", "string"],
    ];
  }

  constructor(params: { file: types.InputFile; file_name: string; mime_type: string }) {
    super();
    this.file = params.file;
    this.file_name = params.file_name;
    this.mime_type = params.mime_type;
  }
}

export class account_updateEmojiStatus extends Function<boolean> {
  emoji_status: types.EmojiStatus;

  protected get [id]() {
    return 0xFBD3DE6B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["emoji_status", types._EmojiStatus, "EmojiStatus"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.emoji_status, types._EmojiStatus, "EmojiStatus"],
    ];
  }

  constructor(params: { emoji_status: types.EmojiStatus }) {
    super();
    this.emoji_status = params.emoji_status;
  }
}

export class account_getDefaultEmojiStatuses extends Function<types.account_EmojiStatuses> {
  hash: bigint;

  protected get [id]() {
    return 0xD6753386;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class account_getRecentEmojiStatuses extends Function<types.account_EmojiStatuses> {
  hash: bigint;

  protected get [id]() {
    return 0x0F578105;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class account_clearRecentEmojiStatuses extends Function<boolean> {
  protected get [id]() {
    return 0x18201AAE;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_reorderUsernames extends Function<boolean> {
  order: Array<string>;

  protected get [id]() {
    return 0xEF500EAB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["order", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.order, ["string"], "Vector<string>"],
    ];
  }

  constructor(params: { order: Array<string> }) {
    super();
    this.order = params.order;
  }
}

export class account_toggleUsername extends Function<boolean> {
  username: string;
  active: boolean;

  protected get [id]() {
    return 0x58D6B376;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["username", "string", "string"],
      ["active", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.username, "string", "string"],
      [this.active, "boolean", "Bool"],
    ];
  }

  constructor(params: { username: string; active: boolean }) {
    super();
    this.username = params.username;
    this.active = params.active;
  }
}

export class account_getDefaultProfilePhotoEmojis extends Function<types.EmojiList> {
  hash: bigint;

  protected get [id]() {
    return 0xE2750328;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class account_getDefaultGroupPhotoEmojis extends Function<types.EmojiList> {
  hash: bigint;

  protected get [id]() {
    return 0x915860AE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class account_getAutoSaveSettings extends Function<types.account_AutoSaveSettings> {
  protected get [id]() {
    return 0xADCBBCDA;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_saveAutoSaveSettings extends Function<boolean> {
  users?: true;
  chats?: true;
  broadcasts?: true;
  peer?: types.InputPeer;
  settings: types.AutoSaveSettings;

  protected get [id]() {
    return 0xD69B8361;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["users", "true", "flags.0?true"],
      ["chats", "true", "flags.1?true"],
      ["broadcasts", "true", "flags.2?true"],
      ["peer", types._InputPeer, "flags.3?InputPeer"],
      ["settings", types._AutoSaveSettings, "AutoSaveSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.users ?? null, "true", "flags.0?true"],
      [this.chats ?? null, "true", "flags.1?true"],
      [this.broadcasts ?? null, "true", "flags.2?true"],
      [this.peer ?? null, types._InputPeer, "flags.3?InputPeer"],
      [this.settings, types._AutoSaveSettings, "AutoSaveSettings"],
    ];
  }

  constructor(params: { users?: true; chats?: true; broadcasts?: true; peer?: types.InputPeer; settings: types.AutoSaveSettings }) {
    super();
    this.users = params.users;
    this.chats = params.chats;
    this.broadcasts = params.broadcasts;
    this.peer = params.peer;
    this.settings = params.settings;
  }
}

export class account_deleteAutoSaveExceptions extends Function<boolean> {
  protected get [id]() {
    return 0x53BC0020;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class account_invalidateSignInCodes extends Function<boolean> {
  codes: Array<string>;

  protected get [id]() {
    return 0xCA8AE8BA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["codes", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.codes, ["string"], "Vector<string>"],
    ];
  }

  constructor(params: { codes: Array<string> }) {
    super();
    this.codes = params.codes;
  }
}

export class account_updateColor extends Function<boolean> {
  for_profile?: true;
  color?: number;
  background_emoji_id?: bigint;

  protected get [id]() {
    return 0x7CEFA15D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["for_profile", "true", "flags.1?true"],
      ["color", "number", "flags.2?int"],
      ["background_emoji_id", "bigint", "flags.0?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.for_profile ?? null, "true", "flags.1?true"],
      [this.color ?? null, "number", "flags.2?int"],
      [this.background_emoji_id ?? null, "bigint", "flags.0?long"],
    ];
  }

  constructor(params?: { for_profile?: true; color?: number; background_emoji_id?: bigint }) {
    super();
    this.for_profile = params?.for_profile;
    this.color = params?.color;
    this.background_emoji_id = params?.background_emoji_id;
  }
}

export class account_getDefaultBackgroundEmojis extends Function<types.EmojiList> {
  hash: bigint;

  protected get [id]() {
    return 0xA60AB9CE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class users_getUsers extends Function<types.User[]> {
  id: Array<types.InputUser>;

  protected get [id]() {
    return 0x0D91A548;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [types._InputUser], "Vector<InputUser>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [types._InputUser], "Vector<InputUser>"],
    ];
  }

  constructor(params: { id: Array<types.InputUser> }) {
    super();
    this.id = params.id;
  }
}

export class users_getFullUser extends Function<types.users_UserFull> {
  id: types.InputUser;

  protected get [id]() {
    return 0xB60F5918;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types._InputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types._InputUser, "InputUser"],
    ];
  }

  constructor(params: { id: types.InputUser }) {
    super();
    this.id = params.id;
  }
}

export class users_setSecureValueErrors extends Function<boolean> {
  id: types.InputUser;
  errors: Array<types.SecureValueError>;

  protected get [id]() {
    return 0x90C894B5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types._InputUser, "InputUser"],
      ["errors", [types._SecureValueError], "Vector<SecureValueError>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types._InputUser, "InputUser"],
      [this.errors, [types._SecureValueError], "Vector<SecureValueError>"],
    ];
  }

  constructor(params: { id: types.InputUser; errors: Array<types.SecureValueError> }) {
    super();
    this.id = params.id;
    this.errors = params.errors;
  }
}

export class contacts_getContactIDs extends Function<number[]> {
  hash: bigint;

  protected get [id]() {
    return 0x7ADC669D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class contacts_getStatuses extends Function<types.ContactStatus[]> {
  protected get [id]() {
    return 0xC4A353EE;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class contacts_getContacts extends Function<types.contacts_Contacts> {
  hash: bigint;

  protected get [id]() {
    return 0x5DD69E12;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class contacts_importContacts extends Function<types.contacts_ImportedContacts> {
  contacts: Array<types.InputContact>;

  protected get [id]() {
    return 0x2C800BE5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["contacts", [types._InputContact], "Vector<InputContact>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.contacts, [types._InputContact], "Vector<InputContact>"],
    ];
  }

  constructor(params: { contacts: Array<types.InputContact> }) {
    super();
    this.contacts = params.contacts;
  }
}

export class contacts_deleteContacts extends Function<types.Updates> {
  id: Array<types.InputUser>;

  protected get [id]() {
    return 0x096A0E00;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [types._InputUser], "Vector<InputUser>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [types._InputUser], "Vector<InputUser>"],
    ];
  }

  constructor(params: { id: Array<types.InputUser> }) {
    super();
    this.id = params.id;
  }
}

export class contacts_deleteByPhones extends Function<boolean> {
  phones: Array<string>;

  protected get [id]() {
    return 0x1013FD9E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phones", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phones, ["string"], "Vector<string>"],
    ];
  }

  constructor(params: { phones: Array<string> }) {
    super();
    this.phones = params.phones;
  }
}

export class contacts_block extends Function<boolean> {
  my_stories_from?: true;
  id: types.InputPeer;

  protected get [id]() {
    return 0x2E2E8734;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["my_stories_from", "true", "flags.0?true"],
      ["id", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.my_stories_from ?? null, "true", "flags.0?true"],
      [this.id, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { my_stories_from?: true; id: types.InputPeer }) {
    super();
    this.my_stories_from = params.my_stories_from;
    this.id = params.id;
  }
}

export class contacts_unblock extends Function<boolean> {
  my_stories_from?: true;
  id: types.InputPeer;

  protected get [id]() {
    return 0xB550D328;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["my_stories_from", "true", "flags.0?true"],
      ["id", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.my_stories_from ?? null, "true", "flags.0?true"],
      [this.id, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { my_stories_from?: true; id: types.InputPeer }) {
    super();
    this.my_stories_from = params.my_stories_from;
    this.id = params.id;
  }
}

export class contacts_getBlocked extends Function<types.contacts_Blocked> {
  my_stories_from?: true;
  offset: number;
  limit: number;

  protected get [id]() {
    return 0x9A868F80;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["my_stories_from", "true", "flags.0?true"],
      ["offset", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.my_stories_from ?? null, "true", "flags.0?true"],
      [this.offset, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { my_stories_from?: true; offset: number; limit: number }) {
    super();
    this.my_stories_from = params.my_stories_from;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class contacts_search extends Function<types.contacts_Found> {
  q: string;
  limit: number;

  protected get [id]() {
    return 0x11F812D8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["q", "string", "string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.q, "string", "string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { q: string; limit: number }) {
    super();
    this.q = params.q;
    this.limit = params.limit;
  }
}

export class contacts_resolveUsername extends Function<types.contacts_ResolvedPeer> {
  username: string;

  protected get [id]() {
    return 0xF93CCBA3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["username", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.username, "string", "string"],
    ];
  }

  constructor(params: { username: string }) {
    super();
    this.username = params.username;
  }
}

export class contacts_getTopPeers extends Function<types.contacts_TopPeers> {
  correspondents?: true;
  bots_pm?: true;
  bots_inline?: true;
  phone_calls?: true;
  forward_users?: true;
  forward_chats?: true;
  groups?: true;
  channels?: true;
  offset: number;
  limit: number;
  hash: bigint;

  protected get [id]() {
    return 0x973478B6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["correspondents", "true", "flags.0?true"],
      ["bots_pm", "true", "flags.1?true"],
      ["bots_inline", "true", "flags.2?true"],
      ["phone_calls", "true", "flags.3?true"],
      ["forward_users", "true", "flags.4?true"],
      ["forward_chats", "true", "flags.5?true"],
      ["groups", "true", "flags.10?true"],
      ["channels", "true", "flags.15?true"],
      ["offset", "number", "int"],
      ["limit", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.correspondents ?? null, "true", "flags.0?true"],
      [this.bots_pm ?? null, "true", "flags.1?true"],
      [this.bots_inline ?? null, "true", "flags.2?true"],
      [this.phone_calls ?? null, "true", "flags.3?true"],
      [this.forward_users ?? null, "true", "flags.4?true"],
      [this.forward_chats ?? null, "true", "flags.5?true"],
      [this.groups ?? null, "true", "flags.10?true"],
      [this.channels ?? null, "true", "flags.15?true"],
      [this.offset, "number", "int"],
      [this.limit, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { correspondents?: true; bots_pm?: true; bots_inline?: true; phone_calls?: true; forward_users?: true; forward_chats?: true; groups?: true; channels?: true; offset: number; limit: number; hash: bigint }) {
    super();
    this.correspondents = params.correspondents;
    this.bots_pm = params.bots_pm;
    this.bots_inline = params.bots_inline;
    this.phone_calls = params.phone_calls;
    this.forward_users = params.forward_users;
    this.forward_chats = params.forward_chats;
    this.groups = params.groups;
    this.channels = params.channels;
    this.offset = params.offset;
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

export class contacts_resetTopPeerRating extends Function<boolean> {
  category: types.TopPeerCategory;
  peer: types.InputPeer;

  protected get [id]() {
    return 0x1AE373AC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["category", types._TopPeerCategory, "TopPeerCategory"],
      ["peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.category, types._TopPeerCategory, "TopPeerCategory"],
      [this.peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { category: types.TopPeerCategory; peer: types.InputPeer }) {
    super();
    this.category = params.category;
    this.peer = params.peer;
  }
}

export class contacts_resetSaved extends Function<boolean> {
  protected get [id]() {
    return 0x879537F1;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class contacts_getSaved extends Function<types.SavedContact[]> {
  protected get [id]() {
    return 0x82F1E39F;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class contacts_toggleTopPeers extends Function<boolean> {
  enabled: boolean;

  protected get [id]() {
    return 0x8514BDDA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { enabled: boolean }) {
    super();
    this.enabled = params.enabled;
  }
}

export class contacts_addContact extends Function<types.Updates> {
  add_phone_privacy_exception?: true;
  id: types.InputUser;
  first_name: string;
  last_name: string;
  phone: string;

  protected get [id]() {
    return 0xE8F463D0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["add_phone_privacy_exception", "true", "flags.0?true"],
      ["id", types._InputUser, "InputUser"],
      ["first_name", "string", "string"],
      ["last_name", "string", "string"],
      ["phone", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.add_phone_privacy_exception ?? null, "true", "flags.0?true"],
      [this.id, types._InputUser, "InputUser"],
      [this.first_name, "string", "string"],
      [this.last_name, "string", "string"],
      [this.phone, "string", "string"],
    ];
  }

  constructor(params: { add_phone_privacy_exception?: true; id: types.InputUser; first_name: string; last_name: string; phone: string }) {
    super();
    this.add_phone_privacy_exception = params.add_phone_privacy_exception;
    this.id = params.id;
    this.first_name = params.first_name;
    this.last_name = params.last_name;
    this.phone = params.phone;
  }
}

export class contacts_acceptContact extends Function<types.Updates> {
  id: types.InputUser;

  protected get [id]() {
    return 0xF831A20F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types._InputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types._InputUser, "InputUser"],
    ];
  }

  constructor(params: { id: types.InputUser }) {
    super();
    this.id = params.id;
  }
}

export class contacts_getLocated extends Function<types.Updates> {
  background?: true;
  geo_point: types.InputGeoPoint;
  self_expires?: number;

  protected get [id]() {
    return 0xD348BC44;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["background", "true", "flags.1?true"],
      ["geo_point", types._InputGeoPoint, "InputGeoPoint"],
      ["self_expires", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.background ?? null, "true", "flags.1?true"],
      [this.geo_point, types._InputGeoPoint, "InputGeoPoint"],
      [this.self_expires ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { background?: true; geo_point: types.InputGeoPoint; self_expires?: number }) {
    super();
    this.background = params.background;
    this.geo_point = params.geo_point;
    this.self_expires = params.self_expires;
  }
}

export class contacts_blockFromReplies extends Function<types.Updates> {
  delete_message?: true;
  delete_history?: true;
  report_spam?: true;
  msg_id: number;

  protected get [id]() {
    return 0x29A8962C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["delete_message", "true", "flags.0?true"],
      ["delete_history", "true", "flags.1?true"],
      ["report_spam", "true", "flags.2?true"],
      ["msg_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.delete_message ?? null, "true", "flags.0?true"],
      [this.delete_history ?? null, "true", "flags.1?true"],
      [this.report_spam ?? null, "true", "flags.2?true"],
      [this.msg_id, "number", "int"],
    ];
  }

  constructor(params: { delete_message?: true; delete_history?: true; report_spam?: true; msg_id: number }) {
    super();
    this.delete_message = params.delete_message;
    this.delete_history = params.delete_history;
    this.report_spam = params.report_spam;
    this.msg_id = params.msg_id;
  }
}

export class contacts_resolvePhone extends Function<types.contacts_ResolvedPeer> {
  phone: string;

  protected get [id]() {
    return 0x8AF94344;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phone", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phone, "string", "string"],
    ];
  }

  constructor(params: { phone: string }) {
    super();
    this.phone = params.phone;
  }
}

export class contacts_exportContactToken extends Function<types.ExportedContactToken> {
  protected get [id]() {
    return 0xF8654027;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class contacts_importContactToken extends Function<types.User> {
  token: string;

  protected get [id]() {
    return 0x13005788;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["token", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.token, "string", "string"],
    ];
  }

  constructor(params: { token: string }) {
    super();
    this.token = params.token;
  }
}

export class contacts_editCloseFriends extends Function<boolean> {
  id: Array<bigint>;

  protected get [id]() {
    return 0xBA6705F0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { id: Array<bigint> }) {
    super();
    this.id = params.id;
  }
}

export class contacts_setBlocked extends Function<boolean> {
  my_stories_from?: true;
  id: Array<types.InputPeer>;
  limit: number;

  protected get [id]() {
    return 0x94C65C76;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["my_stories_from", "true", "flags.0?true"],
      ["id", [types._InputPeer], "Vector<InputPeer>"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.my_stories_from ?? null, "true", "flags.0?true"],
      [this.id, [types._InputPeer], "Vector<InputPeer>"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { my_stories_from?: true; id: Array<types.InputPeer>; limit: number }) {
    super();
    this.my_stories_from = params.my_stories_from;
    this.id = params.id;
    this.limit = params.limit;
  }
}

export class messages_getMessages extends Function<types.messages_Messages> {
  id: Array<types.InputMessage>;

  protected get [id]() {
    return 0x63C66506;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [types._InputMessage], "Vector<InputMessage>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [types._InputMessage], "Vector<InputMessage>"],
    ];
  }

  constructor(params: { id: Array<types.InputMessage> }) {
    super();
    this.id = params.id;
  }
}

export class messages_getDialogs extends Function<types.messages_Dialogs> {
  exclude_pinned?: true;
  folder_id?: number;
  offset_date: number;
  offset_id: number;
  offset_peer: types.InputPeer;
  limit: number;
  hash: bigint;

  protected get [id]() {
    return 0xA0F4CB4F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["exclude_pinned", "true", "flags.0?true"],
      ["folder_id", "number", "flags.1?int"],
      ["offset_date", "number", "int"],
      ["offset_id", "number", "int"],
      ["offset_peer", types._InputPeer, "InputPeer"],
      ["limit", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.exclude_pinned ?? null, "true", "flags.0?true"],
      [this.folder_id ?? null, "number", "flags.1?int"],
      [this.offset_date, "number", "int"],
      [this.offset_id, "number", "int"],
      [this.offset_peer, types._InputPeer, "InputPeer"],
      [this.limit, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { exclude_pinned?: true; folder_id?: number; offset_date: number; offset_id: number; offset_peer: types.InputPeer; limit: number; hash: bigint }) {
    super();
    this.exclude_pinned = params.exclude_pinned;
    this.folder_id = params.folder_id;
    this.offset_date = params.offset_date;
    this.offset_id = params.offset_id;
    this.offset_peer = params.offset_peer;
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

export class messages_getHistory extends Function<types.messages_Messages> {
  peer: types.InputPeer;
  offset_id: number;
  offset_date: number;
  add_offset: number;
  limit: number;
  max_id: number;
  min_id: number;
  hash: bigint;

  protected get [id]() {
    return 0x4423E6C5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["offset_id", "number", "int"],
      ["offset_date", "number", "int"],
      ["add_offset", "number", "int"],
      ["limit", "number", "int"],
      ["max_id", "number", "int"],
      ["min_id", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.offset_id, "number", "int"],
      [this.offset_date, "number", "int"],
      [this.add_offset, "number", "int"],
      [this.limit, "number", "int"],
      [this.max_id, "number", "int"],
      [this.min_id, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { peer: types.InputPeer; offset_id: number; offset_date: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) {
    super();
    this.peer = params.peer;
    this.offset_id = params.offset_id;
    this.offset_date = params.offset_date;
    this.add_offset = params.add_offset;
    this.limit = params.limit;
    this.max_id = params.max_id;
    this.min_id = params.min_id;
    this.hash = params.hash;
  }
}

export class messages_search extends Function<types.messages_Messages> {
  peer: types.InputPeer;
  q: string;
  from_id?: types.InputPeer;
  top_msg_id?: number;
  filter: types.MessagesFilter;
  min_date: number;
  max_date: number;
  offset_id: number;
  add_offset: number;
  limit: number;
  max_id: number;
  min_id: number;
  hash: bigint;

  protected get [id]() {
    return 0xA0FDA762;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "InputPeer"],
      ["q", "string", "string"],
      ["from_id", types._InputPeer, "flags.0?InputPeer"],
      ["top_msg_id", "number", "flags.1?int"],
      ["filter", types._MessagesFilter, "MessagesFilter"],
      ["min_date", "number", "int"],
      ["max_date", "number", "int"],
      ["offset_id", "number", "int"],
      ["add_offset", "number", "int"],
      ["limit", "number", "int"],
      ["max_id", "number", "int"],
      ["min_id", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.q, "string", "string"],
      [this.from_id ?? null, types._InputPeer, "flags.0?InputPeer"],
      [this.top_msg_id ?? null, "number", "flags.1?int"],
      [this.filter, types._MessagesFilter, "MessagesFilter"],
      [this.min_date, "number", "int"],
      [this.max_date, "number", "int"],
      [this.offset_id, "number", "int"],
      [this.add_offset, "number", "int"],
      [this.limit, "number", "int"],
      [this.max_id, "number", "int"],
      [this.min_id, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { peer: types.InputPeer; q: string; from_id?: types.InputPeer; top_msg_id?: number; filter: types.MessagesFilter; min_date: number; max_date: number; offset_id: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) {
    super();
    this.peer = params.peer;
    this.q = params.q;
    this.from_id = params.from_id;
    this.top_msg_id = params.top_msg_id;
    this.filter = params.filter;
    this.min_date = params.min_date;
    this.max_date = params.max_date;
    this.offset_id = params.offset_id;
    this.add_offset = params.add_offset;
    this.limit = params.limit;
    this.max_id = params.max_id;
    this.min_id = params.min_id;
    this.hash = params.hash;
  }
}

export class messages_readHistory extends Function<types.messages_AffectedMessages> {
  peer: types.InputPeer;
  max_id: number;

  protected get [id]() {
    return 0x0E306D3A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["max_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.max_id, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; max_id: number }) {
    super();
    this.peer = params.peer;
    this.max_id = params.max_id;
  }
}

export class messages_deleteHistory extends Function<types.messages_AffectedHistory> {
  just_clear?: true;
  revoke?: true;
  peer: types.InputPeer;
  max_id: number;
  min_date?: number;
  max_date?: number;

  protected get [id]() {
    return 0xB08F922A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["just_clear", "true", "flags.0?true"],
      ["revoke", "true", "flags.1?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["max_id", "number", "int"],
      ["min_date", "number", "flags.2?int"],
      ["max_date", "number", "flags.3?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.just_clear ?? null, "true", "flags.0?true"],
      [this.revoke ?? null, "true", "flags.1?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.max_id, "number", "int"],
      [this.min_date ?? null, "number", "flags.2?int"],
      [this.max_date ?? null, "number", "flags.3?int"],
    ];
  }

  constructor(params: { just_clear?: true; revoke?: true; peer: types.InputPeer; max_id: number; min_date?: number; max_date?: number }) {
    super();
    this.just_clear = params.just_clear;
    this.revoke = params.revoke;
    this.peer = params.peer;
    this.max_id = params.max_id;
    this.min_date = params.min_date;
    this.max_date = params.max_date;
  }
}

export class messages_deleteMessages extends Function<types.messages_AffectedMessages> {
  revoke?: true;
  id: Array<number>;

  protected get [id]() {
    return 0xE58E95D2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["revoke", "true", "flags.0?true"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.revoke ?? null, "true", "flags.0?true"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { revoke?: true; id: Array<number> }) {
    super();
    this.revoke = params.revoke;
    this.id = params.id;
  }
}

export class messages_receivedMessages extends Function<types.ReceivedNotifyMessage[]> {
  max_id: number;

  protected get [id]() {
    return 0x05A954C0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["max_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.max_id, "number", "int"],
    ];
  }

  constructor(params: { max_id: number }) {
    super();
    this.max_id = params.max_id;
  }
}

export class messages_setTyping extends Function<boolean> {
  peer: types.InputPeer;
  top_msg_id?: number;
  action: types.SendMessageAction;

  protected get [id]() {
    return 0x58943EE2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "InputPeer"],
      ["top_msg_id", "number", "flags.0?int"],
      ["action", types._SendMessageAction, "SendMessageAction"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.top_msg_id ?? null, "number", "flags.0?int"],
      [this.action, types._SendMessageAction, "SendMessageAction"],
    ];
  }

  constructor(params: { peer: types.InputPeer; top_msg_id?: number; action: types.SendMessageAction }) {
    super();
    this.peer = params.peer;
    this.top_msg_id = params.top_msg_id;
    this.action = params.action;
  }
}

export class messages_sendMessage extends Function<types.Updates> {
  no_webpage?: true;
  silent?: true;
  background?: true;
  clear_draft?: true;
  noforwards?: true;
  update_stickersets_order?: true;
  invert_media?: true;
  peer: types.InputPeer;
  reply_to?: types.InputReplyTo;
  message: string;
  random_id: bigint;
  reply_markup?: types.ReplyMarkup;
  entities?: Array<types.MessageEntity>;
  schedule_date?: number;
  send_as?: types.InputPeer;

  protected get [id]() {
    return 0x280D096F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["no_webpage", "true", "flags.1?true"],
      ["silent", "true", "flags.5?true"],
      ["background", "true", "flags.6?true"],
      ["clear_draft", "true", "flags.7?true"],
      ["noforwards", "true", "flags.14?true"],
      ["update_stickersets_order", "true", "flags.15?true"],
      ["invert_media", "true", "flags.16?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["reply_to", types._InputReplyTo, "flags.0?InputReplyTo"],
      ["message", "string", "string"],
      ["random_id", "bigint", "long"],
      ["reply_markup", types._ReplyMarkup, "flags.2?ReplyMarkup"],
      ["entities", [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
      ["schedule_date", "number", "flags.10?int"],
      ["send_as", types._InputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.no_webpage ?? null, "true", "flags.1?true"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.background ?? null, "true", "flags.6?true"],
      [this.clear_draft ?? null, "true", "flags.7?true"],
      [this.noforwards ?? null, "true", "flags.14?true"],
      [this.update_stickersets_order ?? null, "true", "flags.15?true"],
      [this.invert_media ?? null, "true", "flags.16?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.reply_to ?? null, types._InputReplyTo, "flags.0?InputReplyTo"],
      [this.message, "string", "string"],
      [this.random_id, "bigint", "long"],
      [this.reply_markup ?? null, types._ReplyMarkup, "flags.2?ReplyMarkup"],
      [this.entities ?? null, [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
      [this.schedule_date ?? null, "number", "flags.10?int"],
      [this.send_as ?? null, types._InputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { no_webpage?: true; silent?: true; background?: true; clear_draft?: true; noforwards?: true; update_stickersets_order?: true; invert_media?: true; peer: types.InputPeer; reply_to?: types.InputReplyTo; message: string; random_id: bigint; reply_markup?: types.ReplyMarkup; entities?: Array<types.MessageEntity>; schedule_date?: number; send_as?: types.InputPeer }) {
    super();
    this.no_webpage = params.no_webpage;
    this.silent = params.silent;
    this.background = params.background;
    this.clear_draft = params.clear_draft;
    this.noforwards = params.noforwards;
    this.update_stickersets_order = params.update_stickersets_order;
    this.invert_media = params.invert_media;
    this.peer = params.peer;
    this.reply_to = params.reply_to;
    this.message = params.message;
    this.random_id = params.random_id;
    this.reply_markup = params.reply_markup;
    this.entities = params.entities;
    this.schedule_date = params.schedule_date;
    this.send_as = params.send_as;
  }
}

export class messages_sendMedia extends Function<types.Updates> {
  silent?: true;
  background?: true;
  clear_draft?: true;
  noforwards?: true;
  update_stickersets_order?: true;
  invert_media?: true;
  peer: types.InputPeer;
  reply_to?: types.InputReplyTo;
  media: types.InputMedia;
  message: string;
  random_id: bigint;
  reply_markup?: types.ReplyMarkup;
  entities?: Array<types.MessageEntity>;
  schedule_date?: number;
  send_as?: types.InputPeer;

  protected get [id]() {
    return 0x72CCC23D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.5?true"],
      ["background", "true", "flags.6?true"],
      ["clear_draft", "true", "flags.7?true"],
      ["noforwards", "true", "flags.14?true"],
      ["update_stickersets_order", "true", "flags.15?true"],
      ["invert_media", "true", "flags.16?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["reply_to", types._InputReplyTo, "flags.0?InputReplyTo"],
      ["media", types._InputMedia, "InputMedia"],
      ["message", "string", "string"],
      ["random_id", "bigint", "long"],
      ["reply_markup", types._ReplyMarkup, "flags.2?ReplyMarkup"],
      ["entities", [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
      ["schedule_date", "number", "flags.10?int"],
      ["send_as", types._InputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.background ?? null, "true", "flags.6?true"],
      [this.clear_draft ?? null, "true", "flags.7?true"],
      [this.noforwards ?? null, "true", "flags.14?true"],
      [this.update_stickersets_order ?? null, "true", "flags.15?true"],
      [this.invert_media ?? null, "true", "flags.16?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.reply_to ?? null, types._InputReplyTo, "flags.0?InputReplyTo"],
      [this.media, types._InputMedia, "InputMedia"],
      [this.message, "string", "string"],
      [this.random_id, "bigint", "long"],
      [this.reply_markup ?? null, types._ReplyMarkup, "flags.2?ReplyMarkup"],
      [this.entities ?? null, [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
      [this.schedule_date ?? null, "number", "flags.10?int"],
      [this.send_as ?? null, types._InputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { silent?: true; background?: true; clear_draft?: true; noforwards?: true; update_stickersets_order?: true; invert_media?: true; peer: types.InputPeer; reply_to?: types.InputReplyTo; media: types.InputMedia; message: string; random_id: bigint; reply_markup?: types.ReplyMarkup; entities?: Array<types.MessageEntity>; schedule_date?: number; send_as?: types.InputPeer }) {
    super();
    this.silent = params.silent;
    this.background = params.background;
    this.clear_draft = params.clear_draft;
    this.noforwards = params.noforwards;
    this.update_stickersets_order = params.update_stickersets_order;
    this.invert_media = params.invert_media;
    this.peer = params.peer;
    this.reply_to = params.reply_to;
    this.media = params.media;
    this.message = params.message;
    this.random_id = params.random_id;
    this.reply_markup = params.reply_markup;
    this.entities = params.entities;
    this.schedule_date = params.schedule_date;
    this.send_as = params.send_as;
  }
}

export class messages_forwardMessages extends Function<types.Updates> {
  silent?: true;
  background?: true;
  with_my_score?: true;
  drop_author?: true;
  drop_media_captions?: true;
  noforwards?: true;
  from_peer: types.InputPeer;
  id: Array<number>;
  random_id: Array<bigint>;
  to_peer: types.InputPeer;
  top_msg_id?: number;
  schedule_date?: number;
  send_as?: types.InputPeer;

  protected get [id]() {
    return 0xC661BBC4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.5?true"],
      ["background", "true", "flags.6?true"],
      ["with_my_score", "true", "flags.8?true"],
      ["drop_author", "true", "flags.11?true"],
      ["drop_media_captions", "true", "flags.12?true"],
      ["noforwards", "true", "flags.14?true"],
      ["from_peer", types._InputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
      ["random_id", ["bigint"], "Vector<long>"],
      ["to_peer", types._InputPeer, "InputPeer"],
      ["top_msg_id", "number", "flags.9?int"],
      ["schedule_date", "number", "flags.10?int"],
      ["send_as", types._InputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.background ?? null, "true", "flags.6?true"],
      [this.with_my_score ?? null, "true", "flags.8?true"],
      [this.drop_author ?? null, "true", "flags.11?true"],
      [this.drop_media_captions ?? null, "true", "flags.12?true"],
      [this.noforwards ?? null, "true", "flags.14?true"],
      [this.from_peer, types._InputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
      [this.random_id, ["bigint"], "Vector<long>"],
      [this.to_peer, types._InputPeer, "InputPeer"],
      [this.top_msg_id ?? null, "number", "flags.9?int"],
      [this.schedule_date ?? null, "number", "flags.10?int"],
      [this.send_as ?? null, types._InputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { silent?: true; background?: true; with_my_score?: true; drop_author?: true; drop_media_captions?: true; noforwards?: true; from_peer: types.InputPeer; id: Array<number>; random_id: Array<bigint>; to_peer: types.InputPeer; top_msg_id?: number; schedule_date?: number; send_as?: types.InputPeer }) {
    super();
    this.silent = params.silent;
    this.background = params.background;
    this.with_my_score = params.with_my_score;
    this.drop_author = params.drop_author;
    this.drop_media_captions = params.drop_media_captions;
    this.noforwards = params.noforwards;
    this.from_peer = params.from_peer;
    this.id = params.id;
    this.random_id = params.random_id;
    this.to_peer = params.to_peer;
    this.top_msg_id = params.top_msg_id;
    this.schedule_date = params.schedule_date;
    this.send_as = params.send_as;
  }
}

export class messages_reportSpam extends Function<boolean> {
  peer: types.InputPeer;

  protected get [id]() {
    return 0xCF1592DB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class messages_getPeerSettings extends Function<types.messages_PeerSettings> {
  peer: types.InputPeer;

  protected get [id]() {
    return 0xEFD9A6A2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class messages_report extends Function<boolean> {
  peer: types.InputPeer;
  id: Array<number>;
  reason: types.ReportReason;
  message: string;

  protected get [id]() {
    return 0x8953AB4E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
      ["reason", types._ReportReason, "ReportReason"],
      ["message", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
      [this.reason, types._ReportReason, "ReportReason"],
      [this.message, "string", "string"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: Array<number>; reason: types.ReportReason; message: string }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.reason = params.reason;
    this.message = params.message;
  }
}

export class messages_getChats extends Function<types.messages_Chats> {
  id: Array<bigint>;

  protected get [id]() {
    return 0x49E9528F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { id: Array<bigint> }) {
    super();
    this.id = params.id;
  }
}

export class messages_getFullChat extends Function<types.messages_ChatFull> {
  chat_id: bigint;

  protected get [id]() {
    return 0xAEB00B34;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chat_id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "bigint", "long"],
    ];
  }

  constructor(params: { chat_id: bigint }) {
    super();
    this.chat_id = params.chat_id;
  }
}

export class messages_editChatTitle extends Function<types.Updates> {
  chat_id: bigint;
  title: string;

  protected get [id]() {
    return 0x73783FFD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chat_id", "bigint", "long"],
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "bigint", "long"],
      [this.title, "string", "string"],
    ];
  }

  constructor(params: { chat_id: bigint; title: string }) {
    super();
    this.chat_id = params.chat_id;
    this.title = params.title;
  }
}

export class messages_editChatPhoto extends Function<types.Updates> {
  chat_id: bigint;
  photo: types.InputChatPhoto;

  protected get [id]() {
    return 0x35DDD674;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chat_id", "bigint", "long"],
      ["photo", types._InputChatPhoto, "InputChatPhoto"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "bigint", "long"],
      [this.photo, types._InputChatPhoto, "InputChatPhoto"],
    ];
  }

  constructor(params: { chat_id: bigint; photo: types.InputChatPhoto }) {
    super();
    this.chat_id = params.chat_id;
    this.photo = params.photo;
  }
}

export class messages_addChatUser extends Function<types.Updates> {
  chat_id: bigint;
  user_id: types.InputUser;
  fwd_limit: number;

  protected get [id]() {
    return 0xF24753E3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chat_id", "bigint", "long"],
      ["user_id", types._InputUser, "InputUser"],
      ["fwd_limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "bigint", "long"],
      [this.user_id, types._InputUser, "InputUser"],
      [this.fwd_limit, "number", "int"],
    ];
  }

  constructor(params: { chat_id: bigint; user_id: types.InputUser; fwd_limit: number }) {
    super();
    this.chat_id = params.chat_id;
    this.user_id = params.user_id;
    this.fwd_limit = params.fwd_limit;
  }
}

export class messages_deleteChatUser extends Function<types.Updates> {
  revoke_history?: true;
  chat_id: bigint;
  user_id: types.InputUser;

  protected get [id]() {
    return 0xA2185CAB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["revoke_history", "true", "flags.0?true"],
      ["chat_id", "bigint", "long"],
      ["user_id", types._InputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.revoke_history ?? null, "true", "flags.0?true"],
      [this.chat_id, "bigint", "long"],
      [this.user_id, types._InputUser, "InputUser"],
    ];
  }

  constructor(params: { revoke_history?: true; chat_id: bigint; user_id: types.InputUser }) {
    super();
    this.revoke_history = params.revoke_history;
    this.chat_id = params.chat_id;
    this.user_id = params.user_id;
  }
}

export class messages_createChat extends Function<types.Updates> {
  users: Array<types.InputUser>;
  title: string;
  ttl_period?: number;

  protected get [id]() {
    return 0x0034A818;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["users", [types._InputUser], "Vector<InputUser>"],
      ["title", "string", "string"],
      ["ttl_period", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.users, [types._InputUser], "Vector<InputUser>"],
      [this.title, "string", "string"],
      [this.ttl_period ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { users: Array<types.InputUser>; title: string; ttl_period?: number }) {
    super();
    this.users = params.users;
    this.title = params.title;
    this.ttl_period = params.ttl_period;
  }
}

export class messages_getDhConfig extends Function<types.messages_DhConfig> {
  version: number;
  random_length: number;

  protected get [id]() {
    return 0x26CF8950;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["version", "number", "int"],
      ["random_length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.version, "number", "int"],
      [this.random_length, "number", "int"],
    ];
  }

  constructor(params: { version: number; random_length: number }) {
    super();
    this.version = params.version;
    this.random_length = params.random_length;
  }
}

export class messages_requestEncryption extends Function<types.EncryptedChat> {
  user_id: types.InputUser;
  random_id: number;
  g_a: Uint8Array;

  protected get [id]() {
    return 0xF64DAF43;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["user_id", types._InputUser, "InputUser"],
      ["random_id", "number", "int"],
      ["g_a", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.user_id, types._InputUser, "InputUser"],
      [this.random_id, "number", "int"],
      [this.g_a, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { user_id: types.InputUser; random_id: number; g_a: Uint8Array }) {
    super();
    this.user_id = params.user_id;
    this.random_id = params.random_id;
    this.g_a = params.g_a;
  }
}

export class messages_acceptEncryption extends Function<types.EncryptedChat> {
  peer: types.InputEncryptedChat;
  g_b: Uint8Array;
  key_fingerprint: bigint;

  protected get [id]() {
    return 0x3DBC0415;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputEncryptedChat, "InputEncryptedChat"],
      ["g_b", Uint8Array, "bytes"],
      ["key_fingerprint", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputEncryptedChat, "InputEncryptedChat"],
      [this.g_b, Uint8Array, "bytes"],
      [this.key_fingerprint, "bigint", "long"],
    ];
  }

  constructor(params: { peer: types.InputEncryptedChat; g_b: Uint8Array; key_fingerprint: bigint }) {
    super();
    this.peer = params.peer;
    this.g_b = params.g_b;
    this.key_fingerprint = params.key_fingerprint;
  }
}

export class messages_discardEncryption extends Function<boolean> {
  delete_history?: true;
  chat_id: number;

  protected get [id]() {
    return 0xF393AEA0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["delete_history", "true", "flags.0?true"],
      ["chat_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.delete_history ?? null, "true", "flags.0?true"],
      [this.chat_id, "number", "int"],
    ];
  }

  constructor(params: { delete_history?: true; chat_id: number }) {
    super();
    this.delete_history = params.delete_history;
    this.chat_id = params.chat_id;
  }
}

export class messages_setEncryptedTyping extends Function<boolean> {
  peer: types.InputEncryptedChat;
  typing: boolean;

  protected get [id]() {
    return 0x791451ED;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputEncryptedChat, "InputEncryptedChat"],
      ["typing", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputEncryptedChat, "InputEncryptedChat"],
      [this.typing, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: types.InputEncryptedChat; typing: boolean }) {
    super();
    this.peer = params.peer;
    this.typing = params.typing;
  }
}

export class messages_readEncryptedHistory extends Function<boolean> {
  peer: types.InputEncryptedChat;
  max_date: number;

  protected get [id]() {
    return 0x7F4B690A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputEncryptedChat, "InputEncryptedChat"],
      ["max_date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputEncryptedChat, "InputEncryptedChat"],
      [this.max_date, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputEncryptedChat; max_date: number }) {
    super();
    this.peer = params.peer;
    this.max_date = params.max_date;
  }
}

export class messages_sendEncrypted extends Function<types.messages_SentEncryptedMessage> {
  silent?: true;
  peer: types.InputEncryptedChat;
  random_id: bigint;
  data: Uint8Array;

  protected get [id]() {
    return 0x44FA7A15;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.0?true"],
      ["peer", types._InputEncryptedChat, "InputEncryptedChat"],
      ["random_id", "bigint", "long"],
      ["data", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.0?true"],
      [this.peer, types._InputEncryptedChat, "InputEncryptedChat"],
      [this.random_id, "bigint", "long"],
      [this.data, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { silent?: true; peer: types.InputEncryptedChat; random_id: bigint; data: Uint8Array }) {
    super();
    this.silent = params.silent;
    this.peer = params.peer;
    this.random_id = params.random_id;
    this.data = params.data;
  }
}

export class messages_sendEncryptedFile extends Function<types.messages_SentEncryptedMessage> {
  silent?: true;
  peer: types.InputEncryptedChat;
  random_id: bigint;
  data: Uint8Array;
  file: types.InputEncryptedFile;

  protected get [id]() {
    return 0x5559481D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.0?true"],
      ["peer", types._InputEncryptedChat, "InputEncryptedChat"],
      ["random_id", "bigint", "long"],
      ["data", Uint8Array, "bytes"],
      ["file", types._InputEncryptedFile, "InputEncryptedFile"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.0?true"],
      [this.peer, types._InputEncryptedChat, "InputEncryptedChat"],
      [this.random_id, "bigint", "long"],
      [this.data, Uint8Array, "bytes"],
      [this.file, types._InputEncryptedFile, "InputEncryptedFile"],
    ];
  }

  constructor(params: { silent?: true; peer: types.InputEncryptedChat; random_id: bigint; data: Uint8Array; file: types.InputEncryptedFile }) {
    super();
    this.silent = params.silent;
    this.peer = params.peer;
    this.random_id = params.random_id;
    this.data = params.data;
    this.file = params.file;
  }
}

export class messages_sendEncryptedService extends Function<types.messages_SentEncryptedMessage> {
  peer: types.InputEncryptedChat;
  random_id: bigint;
  data: Uint8Array;

  protected get [id]() {
    return 0x32D439A4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputEncryptedChat, "InputEncryptedChat"],
      ["random_id", "bigint", "long"],
      ["data", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputEncryptedChat, "InputEncryptedChat"],
      [this.random_id, "bigint", "long"],
      [this.data, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { peer: types.InputEncryptedChat; random_id: bigint; data: Uint8Array }) {
    super();
    this.peer = params.peer;
    this.random_id = params.random_id;
    this.data = params.data;
  }
}

export class messages_receivedQueue extends Function<bigint[]> {
  max_qts: number;

  protected get [id]() {
    return 0x55A5BB66;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["max_qts", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.max_qts, "number", "int"],
    ];
  }

  constructor(params: { max_qts: number }) {
    super();
    this.max_qts = params.max_qts;
  }
}

export class messages_reportEncryptedSpam extends Function<boolean> {
  peer: types.InputEncryptedChat;

  protected get [id]() {
    return 0x4B0C8C0F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputEncryptedChat, "InputEncryptedChat"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputEncryptedChat, "InputEncryptedChat"],
    ];
  }

  constructor(params: { peer: types.InputEncryptedChat }) {
    super();
    this.peer = params.peer;
  }
}

export class messages_readMessageContents extends Function<types.messages_AffectedMessages> {
  id: Array<number>;

  protected get [id]() {
    return 0x36A73F77;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { id: Array<number> }) {
    super();
    this.id = params.id;
  }
}

export class messages_getStickers extends Function<types.messages_Stickers> {
  emoticon: string;
  hash: bigint;

  protected get [id]() {
    return 0xD5A5D3A1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["emoticon", "string", "string"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.emoticon, "string", "string"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { emoticon: string; hash: bigint }) {
    super();
    this.emoticon = params.emoticon;
    this.hash = params.hash;
  }
}

export class messages_getAllStickers extends Function<types.messages_AllStickers> {
  hash: bigint;

  protected get [id]() {
    return 0xB8A0A1A8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class messages_getWebPagePreview extends Function<types.MessageMedia> {
  message: string;
  entities?: Array<types.MessageEntity>;

  protected get [id]() {
    return 0x8B68B0CC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["message", "string", "string"],
      ["entities", [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.message, "string", "string"],
      [this.entities ?? null, [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
    ];
  }

  constructor(params: { message: string; entities?: Array<types.MessageEntity> }) {
    super();
    this.message = params.message;
    this.entities = params.entities;
  }
}

export class messages_exportChatInvite extends Function<types.ExportedChatInvite> {
  legacy_revoke_permanent?: true;
  request_needed?: true;
  peer: types.InputPeer;
  expire_date?: number;
  usage_limit?: number;
  title?: string;

  protected get [id]() {
    return 0xA02CE5D5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["legacy_revoke_permanent", "true", "flags.2?true"],
      ["request_needed", "true", "flags.3?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["expire_date", "number", "flags.0?int"],
      ["usage_limit", "number", "flags.1?int"],
      ["title", "string", "flags.4?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.legacy_revoke_permanent ?? null, "true", "flags.2?true"],
      [this.request_needed ?? null, "true", "flags.3?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.expire_date ?? null, "number", "flags.0?int"],
      [this.usage_limit ?? null, "number", "flags.1?int"],
      [this.title ?? null, "string", "flags.4?string"],
    ];
  }

  constructor(params: { legacy_revoke_permanent?: true; request_needed?: true; peer: types.InputPeer; expire_date?: number; usage_limit?: number; title?: string }) {
    super();
    this.legacy_revoke_permanent = params.legacy_revoke_permanent;
    this.request_needed = params.request_needed;
    this.peer = params.peer;
    this.expire_date = params.expire_date;
    this.usage_limit = params.usage_limit;
    this.title = params.title;
  }
}

export class messages_checkChatInvite extends Function<types.ChatInvite> {
  hash: string;

  protected get [id]() {
    return 0x3EADB1BB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "string", "string"],
    ];
  }

  constructor(params: { hash: string }) {
    super();
    this.hash = params.hash;
  }
}

export class messages_importChatInvite extends Function<types.Updates> {
  hash: string;

  protected get [id]() {
    return 0x6C50051C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "string", "string"],
    ];
  }

  constructor(params: { hash: string }) {
    super();
    this.hash = params.hash;
  }
}

export class messages_getStickerSet extends Function<types.messages_StickerSet> {
  stickerset: types.InputStickerSet;
  hash: number;

  protected get [id]() {
    return 0xC8A0EC74;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", types._InputStickerSet, "InputStickerSet"],
      ["hash", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, types._InputStickerSet, "InputStickerSet"],
      [this.hash, "number", "int"],
    ];
  }

  constructor(params: { stickerset: types.InputStickerSet; hash: number }) {
    super();
    this.stickerset = params.stickerset;
    this.hash = params.hash;
  }
}

export class messages_installStickerSet extends Function<types.messages_StickerSetInstallResult> {
  stickerset: types.InputStickerSet;
  archived: boolean;

  protected get [id]() {
    return 0xC78FE460;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", types._InputStickerSet, "InputStickerSet"],
      ["archived", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, types._InputStickerSet, "InputStickerSet"],
      [this.archived, "boolean", "Bool"],
    ];
  }

  constructor(params: { stickerset: types.InputStickerSet; archived: boolean }) {
    super();
    this.stickerset = params.stickerset;
    this.archived = params.archived;
  }
}

export class messages_uninstallStickerSet extends Function<boolean> {
  stickerset: types.InputStickerSet;

  protected get [id]() {
    return 0xF96E55DE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", types._InputStickerSet, "InputStickerSet"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, types._InputStickerSet, "InputStickerSet"],
    ];
  }

  constructor(params: { stickerset: types.InputStickerSet }) {
    super();
    this.stickerset = params.stickerset;
  }
}

export class messages_startBot extends Function<types.Updates> {
  bot: types.InputUser;
  peer: types.InputPeer;
  random_id: bigint;
  start_param: string;

  protected get [id]() {
    return 0xE6DF7378;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", types._InputUser, "InputUser"],
      ["peer", types._InputPeer, "InputPeer"],
      ["random_id", "bigint", "long"],
      ["start_param", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, types._InputUser, "InputUser"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.random_id, "bigint", "long"],
      [this.start_param, "string", "string"],
    ];
  }

  constructor(params: { bot: types.InputUser; peer: types.InputPeer; random_id: bigint; start_param: string }) {
    super();
    this.bot = params.bot;
    this.peer = params.peer;
    this.random_id = params.random_id;
    this.start_param = params.start_param;
  }
}

export class messages_getMessagesViews extends Function<types.messages_MessageViews> {
  peer: types.InputPeer;
  id: Array<number>;
  increment: boolean;

  protected get [id]() {
    return 0x5784D3E1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
      ["increment", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
      [this.increment, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: Array<number>; increment: boolean }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.increment = params.increment;
  }
}

export class messages_editChatAdmin extends Function<boolean> {
  chat_id: bigint;
  user_id: types.InputUser;
  is_admin: boolean;

  protected get [id]() {
    return 0xA85BD1C2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chat_id", "bigint", "long"],
      ["user_id", types._InputUser, "InputUser"],
      ["is_admin", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "bigint", "long"],
      [this.user_id, types._InputUser, "InputUser"],
      [this.is_admin, "boolean", "Bool"],
    ];
  }

  constructor(params: { chat_id: bigint; user_id: types.InputUser; is_admin: boolean }) {
    super();
    this.chat_id = params.chat_id;
    this.user_id = params.user_id;
    this.is_admin = params.is_admin;
  }
}

export class messages_migrateChat extends Function<types.Updates> {
  chat_id: bigint;

  protected get [id]() {
    return 0xA2875319;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chat_id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "bigint", "long"],
    ];
  }

  constructor(params: { chat_id: bigint }) {
    super();
    this.chat_id = params.chat_id;
  }
}

export class messages_searchGlobal extends Function<types.messages_Messages> {
  folder_id?: number;
  q: string;
  filter: types.MessagesFilter;
  min_date: number;
  max_date: number;
  offset_rate: number;
  offset_peer: types.InputPeer;
  offset_id: number;
  limit: number;

  protected get [id]() {
    return 0x4BC6589A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["folder_id", "number", "flags.0?int"],
      ["q", "string", "string"],
      ["filter", types._MessagesFilter, "MessagesFilter"],
      ["min_date", "number", "int"],
      ["max_date", "number", "int"],
      ["offset_rate", "number", "int"],
      ["offset_peer", types._InputPeer, "InputPeer"],
      ["offset_id", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.folder_id ?? null, "number", "flags.0?int"],
      [this.q, "string", "string"],
      [this.filter, types._MessagesFilter, "MessagesFilter"],
      [this.min_date, "number", "int"],
      [this.max_date, "number", "int"],
      [this.offset_rate, "number", "int"],
      [this.offset_peer, types._InputPeer, "InputPeer"],
      [this.offset_id, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { folder_id?: number; q: string; filter: types.MessagesFilter; min_date: number; max_date: number; offset_rate: number; offset_peer: types.InputPeer; offset_id: number; limit: number }) {
    super();
    this.folder_id = params.folder_id;
    this.q = params.q;
    this.filter = params.filter;
    this.min_date = params.min_date;
    this.max_date = params.max_date;
    this.offset_rate = params.offset_rate;
    this.offset_peer = params.offset_peer;
    this.offset_id = params.offset_id;
    this.limit = params.limit;
  }
}

export class messages_reorderStickerSets extends Function<boolean> {
  masks?: true;
  emojis?: true;
  order: Array<bigint>;

  protected get [id]() {
    return 0x78337739;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["masks", "true", "flags.0?true"],
      ["emojis", "true", "flags.1?true"],
      ["order", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.masks ?? null, "true", "flags.0?true"],
      [this.emojis ?? null, "true", "flags.1?true"],
      [this.order, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { masks?: true; emojis?: true; order: Array<bigint> }) {
    super();
    this.masks = params.masks;
    this.emojis = params.emojis;
    this.order = params.order;
  }
}

export class messages_getDocumentByHash extends Function<types.Document> {
  sha256: Uint8Array;
  size: bigint;
  mime_type: string;

  protected get [id]() {
    return 0xB1F2061F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["sha256", Uint8Array, "bytes"],
      ["size", "bigint", "long"],
      ["mime_type", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.sha256, Uint8Array, "bytes"],
      [this.size, "bigint", "long"],
      [this.mime_type, "string", "string"],
    ];
  }

  constructor(params: { sha256: Uint8Array; size: bigint; mime_type: string }) {
    super();
    this.sha256 = params.sha256;
    this.size = params.size;
    this.mime_type = params.mime_type;
  }
}

export class messages_getSavedGifs extends Function<types.messages_SavedGifs> {
  hash: bigint;

  protected get [id]() {
    return 0x5CF09635;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class messages_saveGif extends Function<boolean> {
  id: types.InputDocument;
  unsave: boolean;

  protected get [id]() {
    return 0x327A30CB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types._InputDocument, "InputDocument"],
      ["unsave", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types._InputDocument, "InputDocument"],
      [this.unsave, "boolean", "Bool"],
    ];
  }

  constructor(params: { id: types.InputDocument; unsave: boolean }) {
    super();
    this.id = params.id;
    this.unsave = params.unsave;
  }
}

export class messages_getInlineBotResults extends Function<types.messages_BotResults> {
  bot: types.InputUser;
  peer: types.InputPeer;
  geo_point?: types.InputGeoPoint;
  query: string;
  offset: string;

  protected get [id]() {
    return 0x514E999D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["bot", types._InputUser, "InputUser"],
      ["peer", types._InputPeer, "InputPeer"],
      ["geo_point", types._InputGeoPoint, "flags.0?InputGeoPoint"],
      ["query", "string", "string"],
      ["offset", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.bot, types._InputUser, "InputUser"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.geo_point ?? null, types._InputGeoPoint, "flags.0?InputGeoPoint"],
      [this.query, "string", "string"],
      [this.offset, "string", "string"],
    ];
  }

  constructor(params: { bot: types.InputUser; peer: types.InputPeer; geo_point?: types.InputGeoPoint; query: string; offset: string }) {
    super();
    this.bot = params.bot;
    this.peer = params.peer;
    this.geo_point = params.geo_point;
    this.query = params.query;
    this.offset = params.offset;
  }
}

export class messages_setInlineBotResults extends Function<boolean> {
  gallery?: true;
  private?: true;
  query_id: bigint;
  results: Array<types.InputBotInlineResult>;
  cache_time: number;
  next_offset?: string;
  switch_pm?: types.InlineBotSwitchPM;
  switch_webview?: types.InlineBotWebView;

  protected get [id]() {
    return 0xBB12A419;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["gallery", "true", "flags.0?true"],
      ["private", "true", "flags.1?true"],
      ["query_id", "bigint", "long"],
      ["results", [types._InputBotInlineResult], "Vector<InputBotInlineResult>"],
      ["cache_time", "number", "int"],
      ["next_offset", "string", "flags.2?string"],
      ["switch_pm", types._InlineBotSwitchPM, "flags.3?InlineBotSwitchPM"],
      ["switch_webview", types._InlineBotWebView, "flags.4?InlineBotWebView"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.gallery ?? null, "true", "flags.0?true"],
      [this.private ?? null, "true", "flags.1?true"],
      [this.query_id, "bigint", "long"],
      [this.results, [types._InputBotInlineResult], "Vector<InputBotInlineResult>"],
      [this.cache_time, "number", "int"],
      [this.next_offset ?? null, "string", "flags.2?string"],
      [this.switch_pm ?? null, types._InlineBotSwitchPM, "flags.3?InlineBotSwitchPM"],
      [this.switch_webview ?? null, types._InlineBotWebView, "flags.4?InlineBotWebView"],
    ];
  }

  constructor(params: { gallery?: true; private?: true; query_id: bigint; results: Array<types.InputBotInlineResult>; cache_time: number; next_offset?: string; switch_pm?: types.InlineBotSwitchPM; switch_webview?: types.InlineBotWebView }) {
    super();
    this.gallery = params.gallery;
    this.private = params.private;
    this.query_id = params.query_id;
    this.results = params.results;
    this.cache_time = params.cache_time;
    this.next_offset = params.next_offset;
    this.switch_pm = params.switch_pm;
    this.switch_webview = params.switch_webview;
  }
}

export class messages_sendInlineBotResult extends Function<types.Updates> {
  silent?: true;
  background?: true;
  clear_draft?: true;
  hide_via?: true;
  peer: types.InputPeer;
  reply_to?: types.InputReplyTo;
  random_id: bigint;
  query_id: bigint;
  id: string;
  schedule_date?: number;
  send_as?: types.InputPeer;

  protected get [id]() {
    return 0xF7BC68BA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.5?true"],
      ["background", "true", "flags.6?true"],
      ["clear_draft", "true", "flags.7?true"],
      ["hide_via", "true", "flags.11?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["reply_to", types._InputReplyTo, "flags.0?InputReplyTo"],
      ["random_id", "bigint", "long"],
      ["query_id", "bigint", "long"],
      ["id", "string", "string"],
      ["schedule_date", "number", "flags.10?int"],
      ["send_as", types._InputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.background ?? null, "true", "flags.6?true"],
      [this.clear_draft ?? null, "true", "flags.7?true"],
      [this.hide_via ?? null, "true", "flags.11?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.reply_to ?? null, types._InputReplyTo, "flags.0?InputReplyTo"],
      [this.random_id, "bigint", "long"],
      [this.query_id, "bigint", "long"],
      [this.id, "string", "string"],
      [this.schedule_date ?? null, "number", "flags.10?int"],
      [this.send_as ?? null, types._InputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { silent?: true; background?: true; clear_draft?: true; hide_via?: true; peer: types.InputPeer; reply_to?: types.InputReplyTo; random_id: bigint; query_id: bigint; id: string; schedule_date?: number; send_as?: types.InputPeer }) {
    super();
    this.silent = params.silent;
    this.background = params.background;
    this.clear_draft = params.clear_draft;
    this.hide_via = params.hide_via;
    this.peer = params.peer;
    this.reply_to = params.reply_to;
    this.random_id = params.random_id;
    this.query_id = params.query_id;
    this.id = params.id;
    this.schedule_date = params.schedule_date;
    this.send_as = params.send_as;
  }
}

export class messages_getMessageEditData extends Function<types.messages_MessageEditData> {
  peer: types.InputPeer;
  id: number;

  protected get [id]() {
    return 0xFDA68D36;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: number }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class messages_editMessage extends Function<types.Updates> {
  no_webpage?: true;
  invert_media?: true;
  peer: types.InputPeer;
  id: number;
  message?: string;
  media?: types.InputMedia;
  reply_markup?: types.ReplyMarkup;
  entities?: Array<types.MessageEntity>;
  schedule_date?: number;

  protected get [id]() {
    return 0x48F71778;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["no_webpage", "true", "flags.1?true"],
      ["invert_media", "true", "flags.16?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["message", "string", "flags.11?string"],
      ["media", types._InputMedia, "flags.14?InputMedia"],
      ["reply_markup", types._ReplyMarkup, "flags.2?ReplyMarkup"],
      ["entities", [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
      ["schedule_date", "number", "flags.15?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.no_webpage ?? null, "true", "flags.1?true"],
      [this.invert_media ?? null, "true", "flags.16?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.message ?? null, "string", "flags.11?string"],
      [this.media ?? null, types._InputMedia, "flags.14?InputMedia"],
      [this.reply_markup ?? null, types._ReplyMarkup, "flags.2?ReplyMarkup"],
      [this.entities ?? null, [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
      [this.schedule_date ?? null, "number", "flags.15?int"],
    ];
  }

  constructor(params: { no_webpage?: true; invert_media?: true; peer: types.InputPeer; id: number; message?: string; media?: types.InputMedia; reply_markup?: types.ReplyMarkup; entities?: Array<types.MessageEntity>; schedule_date?: number }) {
    super();
    this.no_webpage = params.no_webpage;
    this.invert_media = params.invert_media;
    this.peer = params.peer;
    this.id = params.id;
    this.message = params.message;
    this.media = params.media;
    this.reply_markup = params.reply_markup;
    this.entities = params.entities;
    this.schedule_date = params.schedule_date;
  }
}

export class messages_editInlineBotMessage extends Function<boolean> {
  no_webpage?: true;
  invert_media?: true;
  id: types.InputBotInlineMessageID;
  message?: string;
  media?: types.InputMedia;
  reply_markup?: types.ReplyMarkup;
  entities?: Array<types.MessageEntity>;

  protected get [id]() {
    return 0x83557DBA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["no_webpage", "true", "flags.1?true"],
      ["invert_media", "true", "flags.16?true"],
      ["id", types._InputBotInlineMessageID, "InputBotInlineMessageID"],
      ["message", "string", "flags.11?string"],
      ["media", types._InputMedia, "flags.14?InputMedia"],
      ["reply_markup", types._ReplyMarkup, "flags.2?ReplyMarkup"],
      ["entities", [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.no_webpage ?? null, "true", "flags.1?true"],
      [this.invert_media ?? null, "true", "flags.16?true"],
      [this.id, types._InputBotInlineMessageID, "InputBotInlineMessageID"],
      [this.message ?? null, "string", "flags.11?string"],
      [this.media ?? null, types._InputMedia, "flags.14?InputMedia"],
      [this.reply_markup ?? null, types._ReplyMarkup, "flags.2?ReplyMarkup"],
      [this.entities ?? null, [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
    ];
  }

  constructor(params: { no_webpage?: true; invert_media?: true; id: types.InputBotInlineMessageID; message?: string; media?: types.InputMedia; reply_markup?: types.ReplyMarkup; entities?: Array<types.MessageEntity> }) {
    super();
    this.no_webpage = params.no_webpage;
    this.invert_media = params.invert_media;
    this.id = params.id;
    this.message = params.message;
    this.media = params.media;
    this.reply_markup = params.reply_markup;
    this.entities = params.entities;
  }
}

export class messages_getBotCallbackAnswer extends Function<types.messages_BotCallbackAnswer> {
  game?: true;
  peer: types.InputPeer;
  msg_id: number;
  data?: Uint8Array;
  password?: types.InputCheckPasswordSRP;

  protected get [id]() {
    return 0x9342CA07;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["game", "true", "flags.1?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["msg_id", "number", "int"],
      ["data", Uint8Array, "flags.0?bytes"],
      ["password", types._InputCheckPasswordSRP, "flags.2?InputCheckPasswordSRP"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.game ?? null, "true", "flags.1?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.msg_id, "number", "int"],
      [this.data ?? null, Uint8Array, "flags.0?bytes"],
      [this.password ?? null, types._InputCheckPasswordSRP, "flags.2?InputCheckPasswordSRP"],
    ];
  }

  constructor(params: { game?: true; peer: types.InputPeer; msg_id: number; data?: Uint8Array; password?: types.InputCheckPasswordSRP }) {
    super();
    this.game = params.game;
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.data = params.data;
    this.password = params.password;
  }
}

export class messages_setBotCallbackAnswer extends Function<boolean> {
  alert?: true;
  query_id: bigint;
  message?: string;
  url?: string;
  cache_time: number;

  protected get [id]() {
    return 0xD58F130A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["alert", "true", "flags.1?true"],
      ["query_id", "bigint", "long"],
      ["message", "string", "flags.0?string"],
      ["url", "string", "flags.2?string"],
      ["cache_time", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.alert ?? null, "true", "flags.1?true"],
      [this.query_id, "bigint", "long"],
      [this.message ?? null, "string", "flags.0?string"],
      [this.url ?? null, "string", "flags.2?string"],
      [this.cache_time, "number", "int"],
    ];
  }

  constructor(params: { alert?: true; query_id: bigint; message?: string; url?: string; cache_time: number }) {
    super();
    this.alert = params.alert;
    this.query_id = params.query_id;
    this.message = params.message;
    this.url = params.url;
    this.cache_time = params.cache_time;
  }
}

export class messages_getPeerDialogs extends Function<types.messages_PeerDialogs> {
  peers: Array<types.InputDialogPeer>;

  protected get [id]() {
    return 0xE470BCFD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peers", [types._InputDialogPeer], "Vector<InputDialogPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peers, [types._InputDialogPeer], "Vector<InputDialogPeer>"],
    ];
  }

  constructor(params: { peers: Array<types.InputDialogPeer> }) {
    super();
    this.peers = params.peers;
  }
}

export class messages_saveDraft extends Function<boolean> {
  no_webpage?: true;
  invert_media?: true;
  reply_to?: types.InputReplyTo;
  peer: types.InputPeer;
  message: string;
  entities?: Array<types.MessageEntity>;
  media?: types.InputMedia;

  protected get [id]() {
    return 0x7FF3B806;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["no_webpage", "true", "flags.1?true"],
      ["invert_media", "true", "flags.6?true"],
      ["reply_to", types._InputReplyTo, "flags.4?InputReplyTo"],
      ["peer", types._InputPeer, "InputPeer"],
      ["message", "string", "string"],
      ["entities", [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
      ["media", types._InputMedia, "flags.5?InputMedia"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.no_webpage ?? null, "true", "flags.1?true"],
      [this.invert_media ?? null, "true", "flags.6?true"],
      [this.reply_to ?? null, types._InputReplyTo, "flags.4?InputReplyTo"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.message, "string", "string"],
      [this.entities ?? null, [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
      [this.media ?? null, types._InputMedia, "flags.5?InputMedia"],
    ];
  }

  constructor(params: { no_webpage?: true; invert_media?: true; reply_to?: types.InputReplyTo; peer: types.InputPeer; message: string; entities?: Array<types.MessageEntity>; media?: types.InputMedia }) {
    super();
    this.no_webpage = params.no_webpage;
    this.invert_media = params.invert_media;
    this.reply_to = params.reply_to;
    this.peer = params.peer;
    this.message = params.message;
    this.entities = params.entities;
    this.media = params.media;
  }
}

export class messages_getAllDrafts extends Function<types.Updates> {
  protected get [id]() {
    return 0x6A3F8D65;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class messages_getFeaturedStickers extends Function<types.messages_FeaturedStickers> {
  hash: bigint;

  protected get [id]() {
    return 0x64780B14;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class messages_readFeaturedStickers extends Function<boolean> {
  id: Array<bigint>;

  protected get [id]() {
    return 0x5B118126;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { id: Array<bigint> }) {
    super();
    this.id = params.id;
  }
}

export class messages_getRecentStickers extends Function<types.messages_RecentStickers> {
  attached?: true;
  hash: bigint;

  protected get [id]() {
    return 0x9DA9403B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["attached", "true", "flags.0?true"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.attached ?? null, "true", "flags.0?true"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { attached?: true; hash: bigint }) {
    super();
    this.attached = params.attached;
    this.hash = params.hash;
  }
}

export class messages_saveRecentSticker extends Function<boolean> {
  attached?: true;
  id: types.InputDocument;
  unsave: boolean;

  protected get [id]() {
    return 0x392718F8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["attached", "true", "flags.0?true"],
      ["id", types._InputDocument, "InputDocument"],
      ["unsave", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.attached ?? null, "true", "flags.0?true"],
      [this.id, types._InputDocument, "InputDocument"],
      [this.unsave, "boolean", "Bool"],
    ];
  }

  constructor(params: { attached?: true; id: types.InputDocument; unsave: boolean }) {
    super();
    this.attached = params.attached;
    this.id = params.id;
    this.unsave = params.unsave;
  }
}

export class messages_clearRecentStickers extends Function<boolean> {
  attached?: true;

  protected get [id]() {
    return 0x8999602D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["attached", "true", "flags.0?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.attached ?? null, "true", "flags.0?true"],
    ];
  }

  constructor(params?: { attached?: true }) {
    super();
    this.attached = params?.attached;
  }
}

export class messages_getArchivedStickers extends Function<types.messages_ArchivedStickers> {
  masks?: true;
  emojis?: true;
  offset_id: bigint;
  limit: number;

  protected get [id]() {
    return 0x57F17692;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["masks", "true", "flags.0?true"],
      ["emojis", "true", "flags.1?true"],
      ["offset_id", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.masks ?? null, "true", "flags.0?true"],
      [this.emojis ?? null, "true", "flags.1?true"],
      [this.offset_id, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { masks?: true; emojis?: true; offset_id: bigint; limit: number }) {
    super();
    this.masks = params.masks;
    this.emojis = params.emojis;
    this.offset_id = params.offset_id;
    this.limit = params.limit;
  }
}

export class messages_getMaskStickers extends Function<types.messages_AllStickers> {
  hash: bigint;

  protected get [id]() {
    return 0x640F82B8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class messages_getAttachedStickers extends Function<types.StickerSetCovered[]> {
  media: types.InputStickeredMedia;

  protected get [id]() {
    return 0xCC5B67CC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["media", types._InputStickeredMedia, "InputStickeredMedia"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.media, types._InputStickeredMedia, "InputStickeredMedia"],
    ];
  }

  constructor(params: { media: types.InputStickeredMedia }) {
    super();
    this.media = params.media;
  }
}

export class messages_setGameScore extends Function<types.Updates> {
  edit_message?: true;
  force?: true;
  peer: types.InputPeer;
  id: number;
  user_id: types.InputUser;
  score: number;

  protected get [id]() {
    return 0x8EF8ECC0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["edit_message", "true", "flags.0?true"],
      ["force", "true", "flags.1?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["user_id", types._InputUser, "InputUser"],
      ["score", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.edit_message ?? null, "true", "flags.0?true"],
      [this.force ?? null, "true", "flags.1?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.user_id, types._InputUser, "InputUser"],
      [this.score, "number", "int"],
    ];
  }

  constructor(params: { edit_message?: true; force?: true; peer: types.InputPeer; id: number; user_id: types.InputUser; score: number }) {
    super();
    this.edit_message = params.edit_message;
    this.force = params.force;
    this.peer = params.peer;
    this.id = params.id;
    this.user_id = params.user_id;
    this.score = params.score;
  }
}

export class messages_setInlineGameScore extends Function<boolean> {
  edit_message?: true;
  force?: true;
  id: types.InputBotInlineMessageID;
  user_id: types.InputUser;
  score: number;

  protected get [id]() {
    return 0x15AD9F64;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["edit_message", "true", "flags.0?true"],
      ["force", "true", "flags.1?true"],
      ["id", types._InputBotInlineMessageID, "InputBotInlineMessageID"],
      ["user_id", types._InputUser, "InputUser"],
      ["score", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.edit_message ?? null, "true", "flags.0?true"],
      [this.force ?? null, "true", "flags.1?true"],
      [this.id, types._InputBotInlineMessageID, "InputBotInlineMessageID"],
      [this.user_id, types._InputUser, "InputUser"],
      [this.score, "number", "int"],
    ];
  }

  constructor(params: { edit_message?: true; force?: true; id: types.InputBotInlineMessageID; user_id: types.InputUser; score: number }) {
    super();
    this.edit_message = params.edit_message;
    this.force = params.force;
    this.id = params.id;
    this.user_id = params.user_id;
    this.score = params.score;
  }
}

export class messages_getGameHighScores extends Function<types.messages_HighScores> {
  peer: types.InputPeer;
  id: number;
  user_id: types.InputUser;

  protected get [id]() {
    return 0xE822649D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["user_id", types._InputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.user_id, types._InputUser, "InputUser"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: number; user_id: types.InputUser }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.user_id = params.user_id;
  }
}

export class messages_getInlineGameHighScores extends Function<types.messages_HighScores> {
  id: types.InputBotInlineMessageID;
  user_id: types.InputUser;

  protected get [id]() {
    return 0x0F635E1B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types._InputBotInlineMessageID, "InputBotInlineMessageID"],
      ["user_id", types._InputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types._InputBotInlineMessageID, "InputBotInlineMessageID"],
      [this.user_id, types._InputUser, "InputUser"],
    ];
  }

  constructor(params: { id: types.InputBotInlineMessageID; user_id: types.InputUser }) {
    super();
    this.id = params.id;
    this.user_id = params.user_id;
  }
}

export class messages_getCommonChats extends Function<types.messages_Chats> {
  user_id: types.InputUser;
  max_id: bigint;
  limit: number;

  protected get [id]() {
    return 0xE40CA104;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["user_id", types._InputUser, "InputUser"],
      ["max_id", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.user_id, types._InputUser, "InputUser"],
      [this.max_id, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { user_id: types.InputUser; max_id: bigint; limit: number }) {
    super();
    this.user_id = params.user_id;
    this.max_id = params.max_id;
    this.limit = params.limit;
  }
}

export class messages_getWebPage extends Function<types.messages_WebPage> {
  url: string;
  hash: number;

  protected get [id]() {
    return 0x8D9692A3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
      ["hash", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
      [this.hash, "number", "int"],
    ];
  }

  constructor(params: { url: string; hash: number }) {
    super();
    this.url = params.url;
    this.hash = params.hash;
  }
}

export class messages_toggleDialogPin extends Function<boolean> {
  pinned?: true;
  peer: types.InputDialogPeer;

  protected get [id]() {
    return 0xA731E257;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pinned", "true", "flags.0?true"],
      ["peer", types._InputDialogPeer, "InputDialogPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pinned ?? null, "true", "flags.0?true"],
      [this.peer, types._InputDialogPeer, "InputDialogPeer"],
    ];
  }

  constructor(params: { pinned?: true; peer: types.InputDialogPeer }) {
    super();
    this.pinned = params.pinned;
    this.peer = params.peer;
  }
}

export class messages_reorderPinnedDialogs extends Function<boolean> {
  force?: true;
  folder_id: number;
  order: Array<types.InputDialogPeer>;

  protected get [id]() {
    return 0x3B1ADF37;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["force", "true", "flags.0?true"],
      ["folder_id", "number", "int"],
      ["order", [types._InputDialogPeer], "Vector<InputDialogPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.force ?? null, "true", "flags.0?true"],
      [this.folder_id, "number", "int"],
      [this.order, [types._InputDialogPeer], "Vector<InputDialogPeer>"],
    ];
  }

  constructor(params: { force?: true; folder_id: number; order: Array<types.InputDialogPeer> }) {
    super();
    this.force = params.force;
    this.folder_id = params.folder_id;
    this.order = params.order;
  }
}

export class messages_getPinnedDialogs extends Function<types.messages_PeerDialogs> {
  folder_id: number;

  protected get [id]() {
    return 0xD6B94DF2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["folder_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.folder_id, "number", "int"],
    ];
  }

  constructor(params: { folder_id: number }) {
    super();
    this.folder_id = params.folder_id;
  }
}

export class messages_setBotShippingResults extends Function<boolean> {
  query_id: bigint;
  error?: string;
  shipping_options?: Array<types.ShippingOption>;

  protected get [id]() {
    return 0xE5F672FA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["query_id", "bigint", "long"],
      ["error", "string", "flags.0?string"],
      ["shipping_options", [types._ShippingOption], "flags.1?Vector<ShippingOption>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.query_id, "bigint", "long"],
      [this.error ?? null, "string", "flags.0?string"],
      [this.shipping_options ?? null, [types._ShippingOption], "flags.1?Vector<ShippingOption>"],
    ];
  }

  constructor(params: { query_id: bigint; error?: string; shipping_options?: Array<types.ShippingOption> }) {
    super();
    this.query_id = params.query_id;
    this.error = params.error;
    this.shipping_options = params.shipping_options;
  }
}

export class messages_setBotPrecheckoutResults extends Function<boolean> {
  success?: true;
  query_id: bigint;
  error?: string;

  protected get [id]() {
    return 0x09C2DD95;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["success", "true", "flags.1?true"],
      ["query_id", "bigint", "long"],
      ["error", "string", "flags.0?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.success ?? null, "true", "flags.1?true"],
      [this.query_id, "bigint", "long"],
      [this.error ?? null, "string", "flags.0?string"],
    ];
  }

  constructor(params: { success?: true; query_id: bigint; error?: string }) {
    super();
    this.success = params.success;
    this.query_id = params.query_id;
    this.error = params.error;
  }
}

export class messages_uploadMedia extends Function<types.MessageMedia> {
  peer: types.InputPeer;
  media: types.InputMedia;

  protected get [id]() {
    return 0x519BC2B1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["media", types._InputMedia, "InputMedia"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.media, types._InputMedia, "InputMedia"],
    ];
  }

  constructor(params: { peer: types.InputPeer; media: types.InputMedia }) {
    super();
    this.peer = params.peer;
    this.media = params.media;
  }
}

export class messages_sendScreenshotNotification extends Function<types.Updates> {
  peer: types.InputPeer;
  reply_to: types.InputReplyTo;
  random_id: bigint;

  protected get [id]() {
    return 0xA1405817;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["reply_to", types._InputReplyTo, "InputReplyTo"],
      ["random_id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.reply_to, types._InputReplyTo, "InputReplyTo"],
      [this.random_id, "bigint", "long"],
    ];
  }

  constructor(params: { peer: types.InputPeer; reply_to: types.InputReplyTo; random_id: bigint }) {
    super();
    this.peer = params.peer;
    this.reply_to = params.reply_to;
    this.random_id = params.random_id;
  }
}

export class messages_getFavedStickers extends Function<types.messages_FavedStickers> {
  hash: bigint;

  protected get [id]() {
    return 0x04F1AAA9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class messages_faveSticker extends Function<boolean> {
  id: types.InputDocument;
  unfave: boolean;

  protected get [id]() {
    return 0xB9FFC55B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types._InputDocument, "InputDocument"],
      ["unfave", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types._InputDocument, "InputDocument"],
      [this.unfave, "boolean", "Bool"],
    ];
  }

  constructor(params: { id: types.InputDocument; unfave: boolean }) {
    super();
    this.id = params.id;
    this.unfave = params.unfave;
  }
}

export class messages_getUnreadMentions extends Function<types.messages_Messages> {
  peer: types.InputPeer;
  top_msg_id?: number;
  offset_id: number;
  add_offset: number;
  limit: number;
  max_id: number;
  min_id: number;

  protected get [id]() {
    return 0xF107E790;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "InputPeer"],
      ["top_msg_id", "number", "flags.0?int"],
      ["offset_id", "number", "int"],
      ["add_offset", "number", "int"],
      ["limit", "number", "int"],
      ["max_id", "number", "int"],
      ["min_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.top_msg_id ?? null, "number", "flags.0?int"],
      [this.offset_id, "number", "int"],
      [this.add_offset, "number", "int"],
      [this.limit, "number", "int"],
      [this.max_id, "number", "int"],
      [this.min_id, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; top_msg_id?: number; offset_id: number; add_offset: number; limit: number; max_id: number; min_id: number }) {
    super();
    this.peer = params.peer;
    this.top_msg_id = params.top_msg_id;
    this.offset_id = params.offset_id;
    this.add_offset = params.add_offset;
    this.limit = params.limit;
    this.max_id = params.max_id;
    this.min_id = params.min_id;
  }
}

export class messages_readMentions extends Function<types.messages_AffectedHistory> {
  peer: types.InputPeer;
  top_msg_id?: number;

  protected get [id]() {
    return 0x36E5BF4D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "InputPeer"],
      ["top_msg_id", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.top_msg_id ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; top_msg_id?: number }) {
    super();
    this.peer = params.peer;
    this.top_msg_id = params.top_msg_id;
  }
}

export class messages_getRecentLocations extends Function<types.messages_Messages> {
  peer: types.InputPeer;
  limit: number;
  hash: bigint;

  protected get [id]() {
    return 0x702A40E0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["limit", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.limit, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { peer: types.InputPeer; limit: number; hash: bigint }) {
    super();
    this.peer = params.peer;
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

export class messages_sendMultiMedia extends Function<types.Updates> {
  silent?: true;
  background?: true;
  clear_draft?: true;
  noforwards?: true;
  update_stickersets_order?: true;
  invert_media?: true;
  peer: types.InputPeer;
  reply_to?: types.InputReplyTo;
  multi_media: Array<types.InputSingleMedia>;
  schedule_date?: number;
  send_as?: types.InputPeer;

  protected get [id]() {
    return 0x456E8987;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.5?true"],
      ["background", "true", "flags.6?true"],
      ["clear_draft", "true", "flags.7?true"],
      ["noforwards", "true", "flags.14?true"],
      ["update_stickersets_order", "true", "flags.15?true"],
      ["invert_media", "true", "flags.16?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["reply_to", types._InputReplyTo, "flags.0?InputReplyTo"],
      ["multi_media", [types._InputSingleMedia], "Vector<InputSingleMedia>"],
      ["schedule_date", "number", "flags.10?int"],
      ["send_as", types._InputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.background ?? null, "true", "flags.6?true"],
      [this.clear_draft ?? null, "true", "flags.7?true"],
      [this.noforwards ?? null, "true", "flags.14?true"],
      [this.update_stickersets_order ?? null, "true", "flags.15?true"],
      [this.invert_media ?? null, "true", "flags.16?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.reply_to ?? null, types._InputReplyTo, "flags.0?InputReplyTo"],
      [this.multi_media, [types._InputSingleMedia], "Vector<InputSingleMedia>"],
      [this.schedule_date ?? null, "number", "flags.10?int"],
      [this.send_as ?? null, types._InputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { silent?: true; background?: true; clear_draft?: true; noforwards?: true; update_stickersets_order?: true; invert_media?: true; peer: types.InputPeer; reply_to?: types.InputReplyTo; multi_media: Array<types.InputSingleMedia>; schedule_date?: number; send_as?: types.InputPeer }) {
    super();
    this.silent = params.silent;
    this.background = params.background;
    this.clear_draft = params.clear_draft;
    this.noforwards = params.noforwards;
    this.update_stickersets_order = params.update_stickersets_order;
    this.invert_media = params.invert_media;
    this.peer = params.peer;
    this.reply_to = params.reply_to;
    this.multi_media = params.multi_media;
    this.schedule_date = params.schedule_date;
    this.send_as = params.send_as;
  }
}

export class messages_uploadEncryptedFile extends Function<types.EncryptedFile> {
  peer: types.InputEncryptedChat;
  file: types.InputEncryptedFile;

  protected get [id]() {
    return 0x5057C497;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputEncryptedChat, "InputEncryptedChat"],
      ["file", types._InputEncryptedFile, "InputEncryptedFile"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputEncryptedChat, "InputEncryptedChat"],
      [this.file, types._InputEncryptedFile, "InputEncryptedFile"],
    ];
  }

  constructor(params: { peer: types.InputEncryptedChat; file: types.InputEncryptedFile }) {
    super();
    this.peer = params.peer;
    this.file = params.file;
  }
}

export class messages_searchStickerSets extends Function<types.messages_FoundStickerSets> {
  exclude_featured?: true;
  q: string;
  hash: bigint;

  protected get [id]() {
    return 0x35705B8A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["exclude_featured", "true", "flags.0?true"],
      ["q", "string", "string"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.exclude_featured ?? null, "true", "flags.0?true"],
      [this.q, "string", "string"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { exclude_featured?: true; q: string; hash: bigint }) {
    super();
    this.exclude_featured = params.exclude_featured;
    this.q = params.q;
    this.hash = params.hash;
  }
}

export class messages_getSplitRanges extends Function<types.MessageRange[]> {
  protected get [id]() {
    return 0x1CFF7E08;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class messages_markDialogUnread extends Function<boolean> {
  unread?: true;
  peer: types.InputDialogPeer;

  protected get [id]() {
    return 0xC286D98F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["unread", "true", "flags.0?true"],
      ["peer", types._InputDialogPeer, "InputDialogPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.unread ?? null, "true", "flags.0?true"],
      [this.peer, types._InputDialogPeer, "InputDialogPeer"],
    ];
  }

  constructor(params: { unread?: true; peer: types.InputDialogPeer }) {
    super();
    this.unread = params.unread;
    this.peer = params.peer;
  }
}

export class messages_getDialogUnreadMarks extends Function<types.DialogPeer[]> {
  protected get [id]() {
    return 0x22E24E22;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class messages_clearAllDrafts extends Function<boolean> {
  protected get [id]() {
    return 0x7E58EE9C;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class messages_updatePinnedMessage extends Function<types.Updates> {
  silent?: true;
  unpin?: true;
  pm_oneside?: true;
  peer: types.InputPeer;
  id: number;

  protected get [id]() {
    return 0xD2AAF7EC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.0?true"],
      ["unpin", "true", "flags.1?true"],
      ["pm_oneside", "true", "flags.2?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.0?true"],
      [this.unpin ?? null, "true", "flags.1?true"],
      [this.pm_oneside ?? null, "true", "flags.2?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, "number", "int"],
    ];
  }

  constructor(params: { silent?: true; unpin?: true; pm_oneside?: true; peer: types.InputPeer; id: number }) {
    super();
    this.silent = params.silent;
    this.unpin = params.unpin;
    this.pm_oneside = params.pm_oneside;
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class messages_sendVote extends Function<types.Updates> {
  peer: types.InputPeer;
  msg_id: number;
  options: Array<Uint8Array>;

  protected get [id]() {
    return 0x10EA6184;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["msg_id", "number", "int"],
      ["options", [Uint8Array], "Vector<bytes>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.msg_id, "number", "int"],
      [this.options, [Uint8Array], "Vector<bytes>"],
    ];
  }

  constructor(params: { peer: types.InputPeer; msg_id: number; options: Array<Uint8Array> }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.options = params.options;
  }
}

export class messages_getPollResults extends Function<types.Updates> {
  peer: types.InputPeer;
  msg_id: number;

  protected get [id]() {
    return 0x73BB643B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["msg_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.msg_id, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; msg_id: number }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
  }
}

export class messages_getOnlines extends Function<types.ChatOnlines> {
  peer: types.InputPeer;

  protected get [id]() {
    return 0x6E2BE050;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class messages_editChatAbout extends Function<boolean> {
  peer: types.InputPeer;
  about: string;

  protected get [id]() {
    return 0xDEF60797;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["about", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.about, "string", "string"],
    ];
  }

  constructor(params: { peer: types.InputPeer; about: string }) {
    super();
    this.peer = params.peer;
    this.about = params.about;
  }
}

export class messages_editChatDefaultBannedRights extends Function<types.Updates> {
  peer: types.InputPeer;
  banned_rights: types.ChatBannedRights;

  protected get [id]() {
    return 0xA5866B41;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["banned_rights", types._ChatBannedRights, "ChatBannedRights"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.banned_rights, types._ChatBannedRights, "ChatBannedRights"],
    ];
  }

  constructor(params: { peer: types.InputPeer; banned_rights: types.ChatBannedRights }) {
    super();
    this.peer = params.peer;
    this.banned_rights = params.banned_rights;
  }
}

export class messages_getEmojiKeywords extends Function<types.EmojiKeywordsDifference> {
  lang_code: string;

  protected get [id]() {
    return 0x35A0E062;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["lang_code", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.lang_code, "string", "string"],
    ];
  }

  constructor(params: { lang_code: string }) {
    super();
    this.lang_code = params.lang_code;
  }
}

export class messages_getEmojiKeywordsDifference extends Function<types.EmojiKeywordsDifference> {
  lang_code: string;
  from_version: number;

  protected get [id]() {
    return 0x1508B6AF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["lang_code", "string", "string"],
      ["from_version", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.lang_code, "string", "string"],
      [this.from_version, "number", "int"],
    ];
  }

  constructor(params: { lang_code: string; from_version: number }) {
    super();
    this.lang_code = params.lang_code;
    this.from_version = params.from_version;
  }
}

export class messages_getEmojiKeywordsLanguages extends Function<types.EmojiLanguage[]> {
  lang_codes: Array<string>;

  protected get [id]() {
    return 0x4E9963B2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["lang_codes", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.lang_codes, ["string"], "Vector<string>"],
    ];
  }

  constructor(params: { lang_codes: Array<string> }) {
    super();
    this.lang_codes = params.lang_codes;
  }
}

export class messages_getEmojiURL extends Function<types.EmojiURL> {
  lang_code: string;

  protected get [id]() {
    return 0xD5B10C26;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["lang_code", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.lang_code, "string", "string"],
    ];
  }

  constructor(params: { lang_code: string }) {
    super();
    this.lang_code = params.lang_code;
  }
}

export class messages_getSearchCounters extends Function<types.messages_SearchCounter[]> {
  peer: types.InputPeer;
  top_msg_id?: number;
  filters: Array<types.MessagesFilter>;

  protected get [id]() {
    return 0x00AE7CC1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "InputPeer"],
      ["top_msg_id", "number", "flags.0?int"],
      ["filters", [types._MessagesFilter], "Vector<MessagesFilter>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.top_msg_id ?? null, "number", "flags.0?int"],
      [this.filters, [types._MessagesFilter], "Vector<MessagesFilter>"],
    ];
  }

  constructor(params: { peer: types.InputPeer; top_msg_id?: number; filters: Array<types.MessagesFilter> }) {
    super();
    this.peer = params.peer;
    this.top_msg_id = params.top_msg_id;
    this.filters = params.filters;
  }
}

export class messages_requestUrlAuth extends Function<types.UrlAuthResult> {
  peer?: types.InputPeer;
  msg_id?: number;
  button_id?: number;
  url?: string;

  protected get [id]() {
    return 0x198FB446;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "flags.1?InputPeer"],
      ["msg_id", "number", "flags.1?int"],
      ["button_id", "number", "flags.1?int"],
      ["url", "string", "flags.2?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer ?? null, types._InputPeer, "flags.1?InputPeer"],
      [this.msg_id ?? null, "number", "flags.1?int"],
      [this.button_id ?? null, "number", "flags.1?int"],
      [this.url ?? null, "string", "flags.2?string"],
    ];
  }

  constructor(params?: { peer?: types.InputPeer; msg_id?: number; button_id?: number; url?: string }) {
    super();
    this.peer = params?.peer;
    this.msg_id = params?.msg_id;
    this.button_id = params?.button_id;
    this.url = params?.url;
  }
}

export class messages_acceptUrlAuth extends Function<types.UrlAuthResult> {
  write_allowed?: true;
  peer?: types.InputPeer;
  msg_id?: number;
  button_id?: number;
  url?: string;

  protected get [id]() {
    return 0xB12C7125;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["write_allowed", "true", "flags.0?true"],
      ["peer", types._InputPeer, "flags.1?InputPeer"],
      ["msg_id", "number", "flags.1?int"],
      ["button_id", "number", "flags.1?int"],
      ["url", "string", "flags.2?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.write_allowed ?? null, "true", "flags.0?true"],
      [this.peer ?? null, types._InputPeer, "flags.1?InputPeer"],
      [this.msg_id ?? null, "number", "flags.1?int"],
      [this.button_id ?? null, "number", "flags.1?int"],
      [this.url ?? null, "string", "flags.2?string"],
    ];
  }

  constructor(params?: { write_allowed?: true; peer?: types.InputPeer; msg_id?: number; button_id?: number; url?: string }) {
    super();
    this.write_allowed = params?.write_allowed;
    this.peer = params?.peer;
    this.msg_id = params?.msg_id;
    this.button_id = params?.button_id;
    this.url = params?.url;
  }
}

export class messages_hidePeerSettingsBar extends Function<boolean> {
  peer: types.InputPeer;

  protected get [id]() {
    return 0x4FACB138;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class messages_getScheduledHistory extends Function<types.messages_Messages> {
  peer: types.InputPeer;
  hash: bigint;

  protected get [id]() {
    return 0xF516760B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { peer: types.InputPeer; hash: bigint }) {
    super();
    this.peer = params.peer;
    this.hash = params.hash;
  }
}

export class messages_getScheduledMessages extends Function<types.messages_Messages> {
  peer: types.InputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0xBDBB0464;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class messages_sendScheduledMessages extends Function<types.Updates> {
  peer: types.InputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0xBD38850A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class messages_deleteScheduledMessages extends Function<types.Updates> {
  peer: types.InputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0x59AE2B16;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class messages_getPollVotes extends Function<types.messages_VotesList> {
  peer: types.InputPeer;
  id: number;
  option?: Uint8Array;
  offset?: string;
  limit: number;

  protected get [id]() {
    return 0xB86E380E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["option", Uint8Array, "flags.0?bytes"],
      ["offset", "string", "flags.1?string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.option ?? null, Uint8Array, "flags.0?bytes"],
      [this.offset ?? null, "string", "flags.1?string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: number; option?: Uint8Array; offset?: string; limit: number }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.option = params.option;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class messages_toggleStickerSets extends Function<boolean> {
  uninstall?: true;
  archive?: true;
  unarchive?: true;
  stickersets: Array<types.InputStickerSet>;

  protected get [id]() {
    return 0xB5052FEA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["uninstall", "true", "flags.0?true"],
      ["archive", "true", "flags.1?true"],
      ["unarchive", "true", "flags.2?true"],
      ["stickersets", [types._InputStickerSet], "Vector<InputStickerSet>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.uninstall ?? null, "true", "flags.0?true"],
      [this.archive ?? null, "true", "flags.1?true"],
      [this.unarchive ?? null, "true", "flags.2?true"],
      [this.stickersets, [types._InputStickerSet], "Vector<InputStickerSet>"],
    ];
  }

  constructor(params: { uninstall?: true; archive?: true; unarchive?: true; stickersets: Array<types.InputStickerSet> }) {
    super();
    this.uninstall = params.uninstall;
    this.archive = params.archive;
    this.unarchive = params.unarchive;
    this.stickersets = params.stickersets;
  }
}

export class messages_getDialogFilters extends Function<types.DialogFilter[]> {
  protected get [id]() {
    return 0xF19ED96D;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class messages_getSuggestedDialogFilters extends Function<types.DialogFilterSuggested[]> {
  protected get [id]() {
    return 0xA29CD42C;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class messages_updateDialogFilter extends Function<boolean> {
  id: number;
  filter?: types.DialogFilter;

  protected get [id]() {
    return 0x1AD4A04A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["id", "number", "int"],
      ["filter", types._DialogFilter, "flags.0?DialogFilter"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.id, "number", "int"],
      [this.filter ?? null, types._DialogFilter, "flags.0?DialogFilter"],
    ];
  }

  constructor(params: { id: number; filter?: types.DialogFilter }) {
    super();
    this.id = params.id;
    this.filter = params.filter;
  }
}

export class messages_updateDialogFiltersOrder extends Function<boolean> {
  order: Array<number>;

  protected get [id]() {
    return 0xC563C1E4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["order", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.order, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { order: Array<number> }) {
    super();
    this.order = params.order;
  }
}

export class messages_getOldFeaturedStickers extends Function<types.messages_FeaturedStickers> {
  offset: number;
  limit: number;
  hash: bigint;

  protected get [id]() {
    return 0x7ED094A1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["limit", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.limit, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { offset: number; limit: number; hash: bigint }) {
    super();
    this.offset = params.offset;
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

export class messages_getReplies extends Function<types.messages_Messages> {
  peer: types.InputPeer;
  msg_id: number;
  offset_id: number;
  offset_date: number;
  add_offset: number;
  limit: number;
  max_id: number;
  min_id: number;
  hash: bigint;

  protected get [id]() {
    return 0x22DDD30C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["msg_id", "number", "int"],
      ["offset_id", "number", "int"],
      ["offset_date", "number", "int"],
      ["add_offset", "number", "int"],
      ["limit", "number", "int"],
      ["max_id", "number", "int"],
      ["min_id", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.msg_id, "number", "int"],
      [this.offset_id, "number", "int"],
      [this.offset_date, "number", "int"],
      [this.add_offset, "number", "int"],
      [this.limit, "number", "int"],
      [this.max_id, "number", "int"],
      [this.min_id, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { peer: types.InputPeer; msg_id: number; offset_id: number; offset_date: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.offset_id = params.offset_id;
    this.offset_date = params.offset_date;
    this.add_offset = params.add_offset;
    this.limit = params.limit;
    this.max_id = params.max_id;
    this.min_id = params.min_id;
    this.hash = params.hash;
  }
}

export class messages_getDiscussionMessage extends Function<types.messages_DiscussionMessage> {
  peer: types.InputPeer;
  msg_id: number;

  protected get [id]() {
    return 0x446972FD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["msg_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.msg_id, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; msg_id: number }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
  }
}

export class messages_readDiscussion extends Function<boolean> {
  peer: types.InputPeer;
  msg_id: number;
  read_max_id: number;

  protected get [id]() {
    return 0xF731A9F4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["msg_id", "number", "int"],
      ["read_max_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.msg_id, "number", "int"],
      [this.read_max_id, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; msg_id: number; read_max_id: number }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.read_max_id = params.read_max_id;
  }
}

export class messages_unpinAllMessages extends Function<types.messages_AffectedHistory> {
  peer: types.InputPeer;
  top_msg_id?: number;

  protected get [id]() {
    return 0xEE22B9A8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "InputPeer"],
      ["top_msg_id", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.top_msg_id ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; top_msg_id?: number }) {
    super();
    this.peer = params.peer;
    this.top_msg_id = params.top_msg_id;
  }
}

export class messages_deleteChat extends Function<boolean> {
  chat_id: bigint;

  protected get [id]() {
    return 0x5BD0EE50;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chat_id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "bigint", "long"],
    ];
  }

  constructor(params: { chat_id: bigint }) {
    super();
    this.chat_id = params.chat_id;
  }
}

export class messages_deletePhoneCallHistory extends Function<types.messages_AffectedFoundMessages> {
  revoke?: true;

  protected get [id]() {
    return 0xF9CBE409;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["revoke", "true", "flags.0?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.revoke ?? null, "true", "flags.0?true"],
    ];
  }

  constructor(params?: { revoke?: true }) {
    super();
    this.revoke = params?.revoke;
  }
}

export class messages_checkHistoryImport extends Function<types.messages_HistoryImportParsed> {
  import_head: string;

  protected get [id]() {
    return 0x43FE19F3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["import_head", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.import_head, "string", "string"],
    ];
  }

  constructor(params: { import_head: string }) {
    super();
    this.import_head = params.import_head;
  }
}

export class messages_initHistoryImport extends Function<types.messages_HistoryImport> {
  peer: types.InputPeer;
  file: types.InputFile;
  media_count: number;

  protected get [id]() {
    return 0x34090C3B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["file", types._InputFile, "InputFile"],
      ["media_count", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.file, types._InputFile, "InputFile"],
      [this.media_count, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; file: types.InputFile; media_count: number }) {
    super();
    this.peer = params.peer;
    this.file = params.file;
    this.media_count = params.media_count;
  }
}

export class messages_uploadImportedMedia extends Function<types.MessageMedia> {
  peer: types.InputPeer;
  import_id: bigint;
  file_name: string;
  media: types.InputMedia;

  protected get [id]() {
    return 0x2A862092;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["import_id", "bigint", "long"],
      ["file_name", "string", "string"],
      ["media", types._InputMedia, "InputMedia"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.import_id, "bigint", "long"],
      [this.file_name, "string", "string"],
      [this.media, types._InputMedia, "InputMedia"],
    ];
  }

  constructor(params: { peer: types.InputPeer; import_id: bigint; file_name: string; media: types.InputMedia }) {
    super();
    this.peer = params.peer;
    this.import_id = params.import_id;
    this.file_name = params.file_name;
    this.media = params.media;
  }
}

export class messages_startHistoryImport extends Function<boolean> {
  peer: types.InputPeer;
  import_id: bigint;

  protected get [id]() {
    return 0xB43DF344;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["import_id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.import_id, "bigint", "long"],
    ];
  }

  constructor(params: { peer: types.InputPeer; import_id: bigint }) {
    super();
    this.peer = params.peer;
    this.import_id = params.import_id;
  }
}

export class messages_getExportedChatInvites extends Function<types.messages_ExportedChatInvites> {
  revoked?: true;
  peer: types.InputPeer;
  admin_id: types.InputUser;
  offset_date?: number;
  offset_link?: string;
  limit: number;

  protected get [id]() {
    return 0xA2B5A3F6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["revoked", "true", "flags.3?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["admin_id", types._InputUser, "InputUser"],
      ["offset_date", "number", "flags.2?int"],
      ["offset_link", "string", "flags.2?string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.revoked ?? null, "true", "flags.3?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.admin_id, types._InputUser, "InputUser"],
      [this.offset_date ?? null, "number", "flags.2?int"],
      [this.offset_link ?? null, "string", "flags.2?string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { revoked?: true; peer: types.InputPeer; admin_id: types.InputUser; offset_date?: number; offset_link?: string; limit: number }) {
    super();
    this.revoked = params.revoked;
    this.peer = params.peer;
    this.admin_id = params.admin_id;
    this.offset_date = params.offset_date;
    this.offset_link = params.offset_link;
    this.limit = params.limit;
  }
}

export class messages_getExportedChatInvite extends Function<types.messages_ExportedChatInvite> {
  peer: types.InputPeer;
  link: string;

  protected get [id]() {
    return 0x73746F5C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["link", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.link, "string", "string"],
    ];
  }

  constructor(params: { peer: types.InputPeer; link: string }) {
    super();
    this.peer = params.peer;
    this.link = params.link;
  }
}

export class messages_editExportedChatInvite extends Function<types.messages_ExportedChatInvite> {
  revoked?: true;
  peer: types.InputPeer;
  link: string;
  expire_date?: number;
  usage_limit?: number;
  request_needed?: boolean;
  title?: string;

  protected get [id]() {
    return 0xBDCA2F75;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["revoked", "true", "flags.2?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["link", "string", "string"],
      ["expire_date", "number", "flags.0?int"],
      ["usage_limit", "number", "flags.1?int"],
      ["request_needed", "boolean", "flags.3?Bool"],
      ["title", "string", "flags.4?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.revoked ?? null, "true", "flags.2?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.link, "string", "string"],
      [this.expire_date ?? null, "number", "flags.0?int"],
      [this.usage_limit ?? null, "number", "flags.1?int"],
      [this.request_needed ?? null, "boolean", "flags.3?Bool"],
      [this.title ?? null, "string", "flags.4?string"],
    ];
  }

  constructor(params: { revoked?: true; peer: types.InputPeer; link: string; expire_date?: number; usage_limit?: number; request_needed?: boolean; title?: string }) {
    super();
    this.revoked = params.revoked;
    this.peer = params.peer;
    this.link = params.link;
    this.expire_date = params.expire_date;
    this.usage_limit = params.usage_limit;
    this.request_needed = params.request_needed;
    this.title = params.title;
  }
}

export class messages_deleteRevokedExportedChatInvites extends Function<boolean> {
  peer: types.InputPeer;
  admin_id: types.InputUser;

  protected get [id]() {
    return 0x56987BD5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["admin_id", types._InputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.admin_id, types._InputUser, "InputUser"],
    ];
  }

  constructor(params: { peer: types.InputPeer; admin_id: types.InputUser }) {
    super();
    this.peer = params.peer;
    this.admin_id = params.admin_id;
  }
}

export class messages_deleteExportedChatInvite extends Function<boolean> {
  peer: types.InputPeer;
  link: string;

  protected get [id]() {
    return 0xD464A42B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["link", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.link, "string", "string"],
    ];
  }

  constructor(params: { peer: types.InputPeer; link: string }) {
    super();
    this.peer = params.peer;
    this.link = params.link;
  }
}

export class messages_getAdminsWithInvites extends Function<types.messages_ChatAdminsWithInvites> {
  peer: types.InputPeer;

  protected get [id]() {
    return 0x3920E6EF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class messages_getChatInviteImporters extends Function<types.messages_ChatInviteImporters> {
  requested?: true;
  peer: types.InputPeer;
  link?: string;
  q?: string;
  offset_date: number;
  offset_user: types.InputUser;
  limit: number;

  protected get [id]() {
    return 0xDF04DD4E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["requested", "true", "flags.0?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["link", "string", "flags.1?string"],
      ["q", "string", "flags.2?string"],
      ["offset_date", "number", "int"],
      ["offset_user", types._InputUser, "InputUser"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.requested ?? null, "true", "flags.0?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.link ?? null, "string", "flags.1?string"],
      [this.q ?? null, "string", "flags.2?string"],
      [this.offset_date, "number", "int"],
      [this.offset_user, types._InputUser, "InputUser"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { requested?: true; peer: types.InputPeer; link?: string; q?: string; offset_date: number; offset_user: types.InputUser; limit: number }) {
    super();
    this.requested = params.requested;
    this.peer = params.peer;
    this.link = params.link;
    this.q = params.q;
    this.offset_date = params.offset_date;
    this.offset_user = params.offset_user;
    this.limit = params.limit;
  }
}

export class messages_setHistoryTTL extends Function<types.Updates> {
  peer: types.InputPeer;
  period: number;

  protected get [id]() {
    return 0xB80E5FE4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["period", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.period, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; period: number }) {
    super();
    this.peer = params.peer;
    this.period = params.period;
  }
}

export class messages_checkHistoryImportPeer extends Function<types.messages_CheckedHistoryImportPeer> {
  peer: types.InputPeer;

  protected get [id]() {
    return 0x5DC60F03;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class messages_setChatTheme extends Function<types.Updates> {
  peer: types.InputPeer;
  emoticon: string;

  protected get [id]() {
    return 0xE63BE13F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["emoticon", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.emoticon, "string", "string"],
    ];
  }

  constructor(params: { peer: types.InputPeer; emoticon: string }) {
    super();
    this.peer = params.peer;
    this.emoticon = params.emoticon;
  }
}

export class messages_getMessageReadParticipants extends Function<types.ReadParticipantDate[]> {
  peer: types.InputPeer;
  msg_id: number;

  protected get [id]() {
    return 0x31C1C44F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["msg_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.msg_id, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; msg_id: number }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
  }
}

export class messages_getSearchResultsCalendar extends Function<types.messages_SearchResultsCalendar> {
  peer: types.InputPeer;
  filter: types.MessagesFilter;
  offset_id: number;
  offset_date: number;

  protected get [id]() {
    return 0x49F0BDE9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["filter", types._MessagesFilter, "MessagesFilter"],
      ["offset_id", "number", "int"],
      ["offset_date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.filter, types._MessagesFilter, "MessagesFilter"],
      [this.offset_id, "number", "int"],
      [this.offset_date, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; filter: types.MessagesFilter; offset_id: number; offset_date: number }) {
    super();
    this.peer = params.peer;
    this.filter = params.filter;
    this.offset_id = params.offset_id;
    this.offset_date = params.offset_date;
  }
}

export class messages_getSearchResultsPositions extends Function<types.messages_SearchResultsPositions> {
  peer: types.InputPeer;
  filter: types.MessagesFilter;
  offset_id: number;
  limit: number;

  protected get [id]() {
    return 0x6E9583A3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["filter", types._MessagesFilter, "MessagesFilter"],
      ["offset_id", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.filter, types._MessagesFilter, "MessagesFilter"],
      [this.offset_id, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; filter: types.MessagesFilter; offset_id: number; limit: number }) {
    super();
    this.peer = params.peer;
    this.filter = params.filter;
    this.offset_id = params.offset_id;
    this.limit = params.limit;
  }
}

export class messages_hideChatJoinRequest extends Function<types.Updates> {
  approved?: true;
  peer: types.InputPeer;
  user_id: types.InputUser;

  protected get [id]() {
    return 0x7FE7E815;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["approved", "true", "flags.0?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["user_id", types._InputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.approved ?? null, "true", "flags.0?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.user_id, types._InputUser, "InputUser"],
    ];
  }

  constructor(params: { approved?: true; peer: types.InputPeer; user_id: types.InputUser }) {
    super();
    this.approved = params.approved;
    this.peer = params.peer;
    this.user_id = params.user_id;
  }
}

export class messages_hideAllChatJoinRequests extends Function<types.Updates> {
  approved?: true;
  peer: types.InputPeer;
  link?: string;

  protected get [id]() {
    return 0xE085F4EA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["approved", "true", "flags.0?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["link", "string", "flags.1?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.approved ?? null, "true", "flags.0?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.link ?? null, "string", "flags.1?string"],
    ];
  }

  constructor(params: { approved?: true; peer: types.InputPeer; link?: string }) {
    super();
    this.approved = params.approved;
    this.peer = params.peer;
    this.link = params.link;
  }
}

export class messages_toggleNoForwards extends Function<types.Updates> {
  peer: types.InputPeer;
  enabled: boolean;

  protected get [id]() {
    return 0xB11EAFA2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: types.InputPeer; enabled: boolean }) {
    super();
    this.peer = params.peer;
    this.enabled = params.enabled;
  }
}

export class messages_saveDefaultSendAs extends Function<boolean> {
  peer: types.InputPeer;
  send_as: types.InputPeer;

  protected get [id]() {
    return 0xCCFDDF96;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["send_as", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.send_as, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.InputPeer; send_as: types.InputPeer }) {
    super();
    this.peer = params.peer;
    this.send_as = params.send_as;
  }
}

export class messages_sendReaction extends Function<types.Updates> {
  big?: true;
  add_to_recent?: true;
  peer: types.InputPeer;
  msg_id: number;
  reaction?: Array<types.Reaction>;

  protected get [id]() {
    return 0xD30D78D4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["big", "true", "flags.1?true"],
      ["add_to_recent", "true", "flags.2?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["msg_id", "number", "int"],
      ["reaction", [types._Reaction], "flags.0?Vector<Reaction>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.big ?? null, "true", "flags.1?true"],
      [this.add_to_recent ?? null, "true", "flags.2?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.msg_id, "number", "int"],
      [this.reaction ?? null, [types._Reaction], "flags.0?Vector<Reaction>"],
    ];
  }

  constructor(params: { big?: true; add_to_recent?: true; peer: types.InputPeer; msg_id: number; reaction?: Array<types.Reaction> }) {
    super();
    this.big = params.big;
    this.add_to_recent = params.add_to_recent;
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.reaction = params.reaction;
  }
}

export class messages_getMessagesReactions extends Function<types.Updates> {
  peer: types.InputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0x8BBA90E6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class messages_getMessageReactionsList extends Function<types.messages_MessageReactionsList> {
  peer: types.InputPeer;
  id: number;
  reaction?: types.Reaction;
  offset?: string;
  limit: number;

  protected get [id]() {
    return 0x461B3F48;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["reaction", types._Reaction, "flags.0?Reaction"],
      ["offset", "string", "flags.1?string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.reaction ?? null, types._Reaction, "flags.0?Reaction"],
      [this.offset ?? null, "string", "flags.1?string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: number; reaction?: types.Reaction; offset?: string; limit: number }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.reaction = params.reaction;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class messages_setChatAvailableReactions extends Function<types.Updates> {
  peer: types.InputPeer;
  available_reactions: types.ChatReactions;

  protected get [id]() {
    return 0xFEB16771;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["available_reactions", types._ChatReactions, "ChatReactions"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.available_reactions, types._ChatReactions, "ChatReactions"],
    ];
  }

  constructor(params: { peer: types.InputPeer; available_reactions: types.ChatReactions }) {
    super();
    this.peer = params.peer;
    this.available_reactions = params.available_reactions;
  }
}

export class messages_getAvailableReactions extends Function<types.messages_AvailableReactions> {
  hash: number;

  protected get [id]() {
    return 0x18DEA0AC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "number", "int"],
    ];
  }

  constructor(params: { hash: number }) {
    super();
    this.hash = params.hash;
  }
}

export class messages_setDefaultReaction extends Function<boolean> {
  reaction: types.Reaction;

  protected get [id]() {
    return 0x4F47A016;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["reaction", types._Reaction, "Reaction"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.reaction, types._Reaction, "Reaction"],
    ];
  }

  constructor(params: { reaction: types.Reaction }) {
    super();
    this.reaction = params.reaction;
  }
}

export class messages_translateText extends Function<types.messages_TranslatedText> {
  peer?: types.InputPeer;
  id?: Array<number>;
  text?: Array<types.TextWithEntities>;
  to_lang: string;

  protected get [id]() {
    return 0x63183030;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "flags.0?InputPeer"],
      ["id", ["number"], "flags.0?Vector<int>"],
      ["text", [types._TextWithEntities], "flags.1?Vector<TextWithEntities>"],
      ["to_lang", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer ?? null, types._InputPeer, "flags.0?InputPeer"],
      [this.id ?? null, ["number"], "flags.0?Vector<int>"],
      [this.text ?? null, [types._TextWithEntities], "flags.1?Vector<TextWithEntities>"],
      [this.to_lang, "string", "string"],
    ];
  }

  constructor(params: { peer?: types.InputPeer; id?: Array<number>; text?: Array<types.TextWithEntities>; to_lang: string }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.text = params.text;
    this.to_lang = params.to_lang;
  }
}

export class messages_getUnreadReactions extends Function<types.messages_Messages> {
  peer: types.InputPeer;
  top_msg_id?: number;
  offset_id: number;
  add_offset: number;
  limit: number;
  max_id: number;
  min_id: number;

  protected get [id]() {
    return 0x3223495B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "InputPeer"],
      ["top_msg_id", "number", "flags.0?int"],
      ["offset_id", "number", "int"],
      ["add_offset", "number", "int"],
      ["limit", "number", "int"],
      ["max_id", "number", "int"],
      ["min_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.top_msg_id ?? null, "number", "flags.0?int"],
      [this.offset_id, "number", "int"],
      [this.add_offset, "number", "int"],
      [this.limit, "number", "int"],
      [this.max_id, "number", "int"],
      [this.min_id, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; top_msg_id?: number; offset_id: number; add_offset: number; limit: number; max_id: number; min_id: number }) {
    super();
    this.peer = params.peer;
    this.top_msg_id = params.top_msg_id;
    this.offset_id = params.offset_id;
    this.add_offset = params.add_offset;
    this.limit = params.limit;
    this.max_id = params.max_id;
    this.min_id = params.min_id;
  }
}

export class messages_readReactions extends Function<types.messages_AffectedHistory> {
  peer: types.InputPeer;
  top_msg_id?: number;

  protected get [id]() {
    return 0x54AA7F8E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "InputPeer"],
      ["top_msg_id", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.top_msg_id ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; top_msg_id?: number }) {
    super();
    this.peer = params.peer;
    this.top_msg_id = params.top_msg_id;
  }
}

export class messages_searchSentMedia extends Function<types.messages_Messages> {
  q: string;
  filter: types.MessagesFilter;
  limit: number;

  protected get [id]() {
    return 0x107E31A0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["q", "string", "string"],
      ["filter", types._MessagesFilter, "MessagesFilter"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.q, "string", "string"],
      [this.filter, types._MessagesFilter, "MessagesFilter"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { q: string; filter: types.MessagesFilter; limit: number }) {
    super();
    this.q = params.q;
    this.filter = params.filter;
    this.limit = params.limit;
  }
}

export class messages_getAttachMenuBots extends Function<types.AttachMenuBots> {
  hash: bigint;

  protected get [id]() {
    return 0x16FCC2CB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class messages_getAttachMenuBot extends Function<types.AttachMenuBotsBot> {
  bot: types.InputUser;

  protected get [id]() {
    return 0x77216192;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", types._InputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, types._InputUser, "InputUser"],
    ];
  }

  constructor(params: { bot: types.InputUser }) {
    super();
    this.bot = params.bot;
  }
}

export class messages_toggleBotInAttachMenu extends Function<boolean> {
  write_allowed?: true;
  bot: types.InputUser;
  enabled: boolean;

  protected get [id]() {
    return 0x69F59D69;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["write_allowed", "true", "flags.0?true"],
      ["bot", types._InputUser, "InputUser"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.write_allowed ?? null, "true", "flags.0?true"],
      [this.bot, types._InputUser, "InputUser"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { write_allowed?: true; bot: types.InputUser; enabled: boolean }) {
    super();
    this.write_allowed = params.write_allowed;
    this.bot = params.bot;
    this.enabled = params.enabled;
  }
}

export class messages_requestWebView extends Function<types.WebViewResult> {
  from_bot_menu?: true;
  silent?: true;
  peer: types.InputPeer;
  bot: types.InputUser;
  url?: string;
  start_param?: string;
  theme_params?: types.DataJSON;
  platform: string;
  reply_to?: types.InputReplyTo;
  send_as?: types.InputPeer;

  protected get [id]() {
    return 0x269DC2C1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["from_bot_menu", "true", "flags.4?true"],
      ["silent", "true", "flags.5?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["bot", types._InputUser, "InputUser"],
      ["url", "string", "flags.1?string"],
      ["start_param", "string", "flags.3?string"],
      ["theme_params", types._DataJSON, "flags.2?DataJSON"],
      ["platform", "string", "string"],
      ["reply_to", types._InputReplyTo, "flags.0?InputReplyTo"],
      ["send_as", types._InputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.from_bot_menu ?? null, "true", "flags.4?true"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.bot, types._InputUser, "InputUser"],
      [this.url ?? null, "string", "flags.1?string"],
      [this.start_param ?? null, "string", "flags.3?string"],
      [this.theme_params ?? null, types._DataJSON, "flags.2?DataJSON"],
      [this.platform, "string", "string"],
      [this.reply_to ?? null, types._InputReplyTo, "flags.0?InputReplyTo"],
      [this.send_as ?? null, types._InputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { from_bot_menu?: true; silent?: true; peer: types.InputPeer; bot: types.InputUser; url?: string; start_param?: string; theme_params?: types.DataJSON; platform: string; reply_to?: types.InputReplyTo; send_as?: types.InputPeer }) {
    super();
    this.from_bot_menu = params.from_bot_menu;
    this.silent = params.silent;
    this.peer = params.peer;
    this.bot = params.bot;
    this.url = params.url;
    this.start_param = params.start_param;
    this.theme_params = params.theme_params;
    this.platform = params.platform;
    this.reply_to = params.reply_to;
    this.send_as = params.send_as;
  }
}

export class messages_prolongWebView extends Function<boolean> {
  silent?: true;
  peer: types.InputPeer;
  bot: types.InputUser;
  query_id: bigint;
  reply_to?: types.InputReplyTo;
  send_as?: types.InputPeer;

  protected get [id]() {
    return 0xB0D81A83;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.5?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["bot", types._InputUser, "InputUser"],
      ["query_id", "bigint", "long"],
      ["reply_to", types._InputReplyTo, "flags.0?InputReplyTo"],
      ["send_as", types._InputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.bot, types._InputUser, "InputUser"],
      [this.query_id, "bigint", "long"],
      [this.reply_to ?? null, types._InputReplyTo, "flags.0?InputReplyTo"],
      [this.send_as ?? null, types._InputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { silent?: true; peer: types.InputPeer; bot: types.InputUser; query_id: bigint; reply_to?: types.InputReplyTo; send_as?: types.InputPeer }) {
    super();
    this.silent = params.silent;
    this.peer = params.peer;
    this.bot = params.bot;
    this.query_id = params.query_id;
    this.reply_to = params.reply_to;
    this.send_as = params.send_as;
  }
}

export class messages_requestSimpleWebView extends Function<types.SimpleWebViewResult> {
  from_switch_webview?: true;
  from_side_menu?: true;
  bot: types.InputUser;
  url?: string;
  start_param?: string;
  theme_params?: types.DataJSON;
  platform: string;

  protected get [id]() {
    return 0x1A46500A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["from_switch_webview", "true", "flags.1?true"],
      ["from_side_menu", "true", "flags.2?true"],
      ["bot", types._InputUser, "InputUser"],
      ["url", "string", "flags.3?string"],
      ["start_param", "string", "flags.4?string"],
      ["theme_params", types._DataJSON, "flags.0?DataJSON"],
      ["platform", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.from_switch_webview ?? null, "true", "flags.1?true"],
      [this.from_side_menu ?? null, "true", "flags.2?true"],
      [this.bot, types._InputUser, "InputUser"],
      [this.url ?? null, "string", "flags.3?string"],
      [this.start_param ?? null, "string", "flags.4?string"],
      [this.theme_params ?? null, types._DataJSON, "flags.0?DataJSON"],
      [this.platform, "string", "string"],
    ];
  }

  constructor(params: { from_switch_webview?: true; from_side_menu?: true; bot: types.InputUser; url?: string; start_param?: string; theme_params?: types.DataJSON; platform: string }) {
    super();
    this.from_switch_webview = params.from_switch_webview;
    this.from_side_menu = params.from_side_menu;
    this.bot = params.bot;
    this.url = params.url;
    this.start_param = params.start_param;
    this.theme_params = params.theme_params;
    this.platform = params.platform;
  }
}

export class messages_sendWebViewResultMessage extends Function<types.WebViewMessageSent> {
  bot_query_id: string;
  result: types.InputBotInlineResult;

  protected get [id]() {
    return 0x0A4314F5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot_query_id", "string", "string"],
      ["result", types._InputBotInlineResult, "InputBotInlineResult"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot_query_id, "string", "string"],
      [this.result, types._InputBotInlineResult, "InputBotInlineResult"],
    ];
  }

  constructor(params: { bot_query_id: string; result: types.InputBotInlineResult }) {
    super();
    this.bot_query_id = params.bot_query_id;
    this.result = params.result;
  }
}

export class messages_sendWebViewData extends Function<types.Updates> {
  bot: types.InputUser;
  random_id: bigint;
  button_text: string;
  data: string;

  protected get [id]() {
    return 0xDC0242C8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", types._InputUser, "InputUser"],
      ["random_id", "bigint", "long"],
      ["button_text", "string", "string"],
      ["data", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, types._InputUser, "InputUser"],
      [this.random_id, "bigint", "long"],
      [this.button_text, "string", "string"],
      [this.data, "string", "string"],
    ];
  }

  constructor(params: { bot: types.InputUser; random_id: bigint; button_text: string; data: string }) {
    super();
    this.bot = params.bot;
    this.random_id = params.random_id;
    this.button_text = params.button_text;
    this.data = params.data;
  }
}

export class messages_transcribeAudio extends Function<types.messages_TranscribedAudio> {
  peer: types.InputPeer;
  msg_id: number;

  protected get [id]() {
    return 0x269E9A49;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["msg_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.msg_id, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; msg_id: number }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
  }
}

export class messages_rateTranscribedAudio extends Function<boolean> {
  peer: types.InputPeer;
  msg_id: number;
  transcription_id: bigint;
  good: boolean;

  protected get [id]() {
    return 0x7F1D072F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["msg_id", "number", "int"],
      ["transcription_id", "bigint", "long"],
      ["good", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.msg_id, "number", "int"],
      [this.transcription_id, "bigint", "long"],
      [this.good, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: types.InputPeer; msg_id: number; transcription_id: bigint; good: boolean }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.transcription_id = params.transcription_id;
    this.good = params.good;
  }
}

export class messages_getCustomEmojiDocuments extends Function<types.Document[]> {
  document_id: Array<bigint>;

  protected get [id]() {
    return 0xD9AB0F54;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["document_id", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.document_id, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { document_id: Array<bigint> }) {
    super();
    this.document_id = params.document_id;
  }
}

export class messages_getEmojiStickers extends Function<types.messages_AllStickers> {
  hash: bigint;

  protected get [id]() {
    return 0xFBFCA18F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class messages_getFeaturedEmojiStickers extends Function<types.messages_FeaturedStickers> {
  hash: bigint;

  protected get [id]() {
    return 0x0ECF6736;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { hash: bigint }) {
    super();
    this.hash = params.hash;
  }
}

export class messages_reportReaction extends Function<boolean> {
  peer: types.InputPeer;
  id: number;
  reaction_peer: types.InputPeer;

  protected get [id]() {
    return 0x3F64C076;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["reaction_peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.reaction_peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: number; reaction_peer: types.InputPeer }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.reaction_peer = params.reaction_peer;
  }
}

export class messages_getTopReactions extends Function<types.messages_Reactions> {
  limit: number;
  hash: bigint;

  protected get [id]() {
    return 0xBB8125BA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["limit", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.limit, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { limit: number; hash: bigint }) {
    super();
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

export class messages_getRecentReactions extends Function<types.messages_Reactions> {
  limit: number;
  hash: bigint;

  protected get [id]() {
    return 0x39461DB2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["limit", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.limit, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { limit: number; hash: bigint }) {
    super();
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

export class messages_clearRecentReactions extends Function<boolean> {
  protected get [id]() {
    return 0x9DFEEFB4;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class messages_getExtendedMedia extends Function<types.Updates> {
  peer: types.InputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0x84F80814;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class messages_setDefaultHistoryTTL extends Function<boolean> {
  period: number;

  protected get [id]() {
    return 0x9EB51445;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["period", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.period, "number", "int"],
    ];
  }

  constructor(params: { period: number }) {
    super();
    this.period = params.period;
  }
}

export class messages_getDefaultHistoryTTL extends Function<types.DefaultHistoryTTL> {
  protected get [id]() {
    return 0x658B7188;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class messages_sendBotRequestedPeer extends Function<types.Updates> {
  peer: types.InputPeer;
  msg_id: number;
  button_id: number;
  requested_peer: types.InputPeer;

  protected get [id]() {
    return 0xFE38D01B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["msg_id", "number", "int"],
      ["button_id", "number", "int"],
      ["requested_peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.msg_id, "number", "int"],
      [this.button_id, "number", "int"],
      [this.requested_peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.InputPeer; msg_id: number; button_id: number; requested_peer: types.InputPeer }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.button_id = params.button_id;
    this.requested_peer = params.requested_peer;
  }
}

export class messages_getEmojiGroups extends Function<types.messages_EmojiGroups> {
  hash: number;

  protected get [id]() {
    return 0x7488CE5B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "number", "int"],
    ];
  }

  constructor(params: { hash: number }) {
    super();
    this.hash = params.hash;
  }
}

export class messages_getEmojiStatusGroups extends Function<types.messages_EmojiGroups> {
  hash: number;

  protected get [id]() {
    return 0x2ECD56CD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "number", "int"],
    ];
  }

  constructor(params: { hash: number }) {
    super();
    this.hash = params.hash;
  }
}

export class messages_getEmojiProfilePhotoGroups extends Function<types.messages_EmojiGroups> {
  hash: number;

  protected get [id]() {
    return 0x21A548F3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "number", "int"],
    ];
  }

  constructor(params: { hash: number }) {
    super();
    this.hash = params.hash;
  }
}

export class messages_searchCustomEmoji extends Function<types.EmojiList> {
  emoticon: string;
  hash: bigint;

  protected get [id]() {
    return 0x2C11C0D7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["emoticon", "string", "string"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.emoticon, "string", "string"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { emoticon: string; hash: bigint }) {
    super();
    this.emoticon = params.emoticon;
    this.hash = params.hash;
  }
}

export class messages_togglePeerTranslations extends Function<boolean> {
  disabled?: true;
  peer: types.InputPeer;

  protected get [id]() {
    return 0xE47CB579;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["disabled", "true", "flags.0?true"],
      ["peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.disabled ?? null, "true", "flags.0?true"],
      [this.peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { disabled?: true; peer: types.InputPeer }) {
    super();
    this.disabled = params.disabled;
    this.peer = params.peer;
  }
}

export class messages_getBotApp extends Function<types.messages_BotApp> {
  app: types.InputBotApp;
  hash: bigint;

  protected get [id]() {
    return 0x34FDC5C3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["app", types._InputBotApp, "InputBotApp"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.app, types._InputBotApp, "InputBotApp"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { app: types.InputBotApp; hash: bigint }) {
    super();
    this.app = params.app;
    this.hash = params.hash;
  }
}

export class messages_requestAppWebView extends Function<types.AppWebViewResult> {
  write_allowed?: true;
  peer: types.InputPeer;
  app: types.InputBotApp;
  start_param?: string;
  theme_params?: types.DataJSON;
  platform: string;

  protected get [id]() {
    return 0x8C5A3B3C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["write_allowed", "true", "flags.0?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["app", types._InputBotApp, "InputBotApp"],
      ["start_param", "string", "flags.1?string"],
      ["theme_params", types._DataJSON, "flags.2?DataJSON"],
      ["platform", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.write_allowed ?? null, "true", "flags.0?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.app, types._InputBotApp, "InputBotApp"],
      [this.start_param ?? null, "string", "flags.1?string"],
      [this.theme_params ?? null, types._DataJSON, "flags.2?DataJSON"],
      [this.platform, "string", "string"],
    ];
  }

  constructor(params: { write_allowed?: true; peer: types.InputPeer; app: types.InputBotApp; start_param?: string; theme_params?: types.DataJSON; platform: string }) {
    super();
    this.write_allowed = params.write_allowed;
    this.peer = params.peer;
    this.app = params.app;
    this.start_param = params.start_param;
    this.theme_params = params.theme_params;
    this.platform = params.platform;
  }
}

export class messages_setChatWallPaper extends Function<types.Updates> {
  for_both?: true;
  revert?: true;
  peer: types.InputPeer;
  wallpaper?: types.InputWallPaper;
  settings?: types.WallPaperSettings;
  id?: number;

  protected get [id]() {
    return 0x8FFACAE1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["for_both", "true", "flags.3?true"],
      ["revert", "true", "flags.4?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["wallpaper", types._InputWallPaper, "flags.0?InputWallPaper"],
      ["settings", types._WallPaperSettings, "flags.2?WallPaperSettings"],
      ["id", "number", "flags.1?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.for_both ?? null, "true", "flags.3?true"],
      [this.revert ?? null, "true", "flags.4?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.wallpaper ?? null, types._InputWallPaper, "flags.0?InputWallPaper"],
      [this.settings ?? null, types._WallPaperSettings, "flags.2?WallPaperSettings"],
      [this.id ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(params: { for_both?: true; revert?: true; peer: types.InputPeer; wallpaper?: types.InputWallPaper; settings?: types.WallPaperSettings; id?: number }) {
    super();
    this.for_both = params.for_both;
    this.revert = params.revert;
    this.peer = params.peer;
    this.wallpaper = params.wallpaper;
    this.settings = params.settings;
    this.id = params.id;
  }
}

export class messages_searchEmojiStickerSets extends Function<types.messages_FoundStickerSets> {
  exclude_featured?: true;
  q: string;
  hash: bigint;

  protected get [id]() {
    return 0x92B4494C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["exclude_featured", "true", "flags.0?true"],
      ["q", "string", "string"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.exclude_featured ?? null, "true", "flags.0?true"],
      [this.q, "string", "string"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { exclude_featured?: true; q: string; hash: bigint }) {
    super();
    this.exclude_featured = params.exclude_featured;
    this.q = params.q;
    this.hash = params.hash;
  }
}

export class updates_getState extends Function<types.updates_State> {
  protected get [id]() {
    return 0xEDD4882A;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class updates_getDifference extends Function<types.updates_Difference> {
  pts: number;
  pts_limit?: number;
  pts_total_limit?: number;
  date: number;
  qts: number;
  qts_limit?: number;

  protected get [id]() {
    return 0x19C2F763;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pts", "number", "int"],
      ["pts_limit", "number", "flags.1?int"],
      ["pts_total_limit", "number", "flags.0?int"],
      ["date", "number", "int"],
      ["qts", "number", "int"],
      ["qts_limit", "number", "flags.2?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pts, "number", "int"],
      [this.pts_limit ?? null, "number", "flags.1?int"],
      [this.pts_total_limit ?? null, "number", "flags.0?int"],
      [this.date, "number", "int"],
      [this.qts, "number", "int"],
      [this.qts_limit ?? null, "number", "flags.2?int"],
    ];
  }

  constructor(params: { pts: number; pts_limit?: number; pts_total_limit?: number; date: number; qts: number; qts_limit?: number }) {
    super();
    this.pts = params.pts;
    this.pts_limit = params.pts_limit;
    this.pts_total_limit = params.pts_total_limit;
    this.date = params.date;
    this.qts = params.qts;
    this.qts_limit = params.qts_limit;
  }
}

export class updates_getChannelDifference extends Function<types.updates_ChannelDifference> {
  force?: true;
  channel: types.InputChannel;
  filter: types.ChannelMessagesFilter;
  pts: number;
  limit: number;

  protected get [id]() {
    return 0x03173D78;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["force", "true", "flags.0?true"],
      ["channel", types._InputChannel, "InputChannel"],
      ["filter", types._ChannelMessagesFilter, "ChannelMessagesFilter"],
      ["pts", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.force ?? null, "true", "flags.0?true"],
      [this.channel, types._InputChannel, "InputChannel"],
      [this.filter, types._ChannelMessagesFilter, "ChannelMessagesFilter"],
      [this.pts, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { force?: true; channel: types.InputChannel; filter: types.ChannelMessagesFilter; pts: number; limit: number }) {
    super();
    this.force = params.force;
    this.channel = params.channel;
    this.filter = params.filter;
    this.pts = params.pts;
    this.limit = params.limit;
  }
}

export class photos_updateProfilePhoto extends Function<types.photos_Photo> {
  fallback?: true;
  bot?: types.InputUser;
  id: types.InputPhoto;

  protected get [id]() {
    return 0x09E82039;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["fallback", "true", "flags.0?true"],
      ["bot", types._InputUser, "flags.1?InputUser"],
      ["id", types._InputPhoto, "InputPhoto"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.fallback ?? null, "true", "flags.0?true"],
      [this.bot ?? null, types._InputUser, "flags.1?InputUser"],
      [this.id, types._InputPhoto, "InputPhoto"],
    ];
  }

  constructor(params: { fallback?: true; bot?: types.InputUser; id: types.InputPhoto }) {
    super();
    this.fallback = params.fallback;
    this.bot = params.bot;
    this.id = params.id;
  }
}

export class photos_uploadProfilePhoto extends Function<types.photos_Photo> {
  fallback?: true;
  bot?: types.InputUser;
  file?: types.InputFile;
  video?: types.InputFile;
  video_start_ts?: number;
  video_emoji_markup?: types.VideoSize;

  protected get [id]() {
    return 0x0388A3B5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["fallback", "true", "flags.3?true"],
      ["bot", types._InputUser, "flags.5?InputUser"],
      ["file", types._InputFile, "flags.0?InputFile"],
      ["video", types._InputFile, "flags.1?InputFile"],
      ["video_start_ts", "number", "flags.2?double"],
      ["video_emoji_markup", types._VideoSize, "flags.4?VideoSize"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.fallback ?? null, "true", "flags.3?true"],
      [this.bot ?? null, types._InputUser, "flags.5?InputUser"],
      [this.file ?? null, types._InputFile, "flags.0?InputFile"],
      [this.video ?? null, types._InputFile, "flags.1?InputFile"],
      [this.video_start_ts ?? null, "number", "flags.2?double"],
      [this.video_emoji_markup ?? null, types._VideoSize, "flags.4?VideoSize"],
    ];
  }

  constructor(params?: { fallback?: true; bot?: types.InputUser; file?: types.InputFile; video?: types.InputFile; video_start_ts?: number; video_emoji_markup?: types.VideoSize }) {
    super();
    this.fallback = params?.fallback;
    this.bot = params?.bot;
    this.file = params?.file;
    this.video = params?.video;
    this.video_start_ts = params?.video_start_ts;
    this.video_emoji_markup = params?.video_emoji_markup;
  }
}

export class photos_deletePhotos extends Function<bigint[]> {
  id: Array<types.InputPhoto>;

  protected get [id]() {
    return 0x87CF7F2F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [types._InputPhoto], "Vector<InputPhoto>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [types._InputPhoto], "Vector<InputPhoto>"],
    ];
  }

  constructor(params: { id: Array<types.InputPhoto> }) {
    super();
    this.id = params.id;
  }
}

export class photos_getUserPhotos extends Function<types.photos_Photos> {
  user_id: types.InputUser;
  offset: number;
  max_id: bigint;
  limit: number;

  protected get [id]() {
    return 0x91CD32A8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["user_id", types._InputUser, "InputUser"],
      ["offset", "number", "int"],
      ["max_id", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.user_id, types._InputUser, "InputUser"],
      [this.offset, "number", "int"],
      [this.max_id, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { user_id: types.InputUser; offset: number; max_id: bigint; limit: number }) {
    super();
    this.user_id = params.user_id;
    this.offset = params.offset;
    this.max_id = params.max_id;
    this.limit = params.limit;
  }
}

export class photos_uploadContactProfilePhoto extends Function<types.photos_Photo> {
  suggest?: true;
  save?: true;
  user_id: types.InputUser;
  file?: types.InputFile;
  video?: types.InputFile;
  video_start_ts?: number;
  video_emoji_markup?: types.VideoSize;

  protected get [id]() {
    return 0xE14C4A71;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["suggest", "true", "flags.3?true"],
      ["save", "true", "flags.4?true"],
      ["user_id", types._InputUser, "InputUser"],
      ["file", types._InputFile, "flags.0?InputFile"],
      ["video", types._InputFile, "flags.1?InputFile"],
      ["video_start_ts", "number", "flags.2?double"],
      ["video_emoji_markup", types._VideoSize, "flags.5?VideoSize"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.suggest ?? null, "true", "flags.3?true"],
      [this.save ?? null, "true", "flags.4?true"],
      [this.user_id, types._InputUser, "InputUser"],
      [this.file ?? null, types._InputFile, "flags.0?InputFile"],
      [this.video ?? null, types._InputFile, "flags.1?InputFile"],
      [this.video_start_ts ?? null, "number", "flags.2?double"],
      [this.video_emoji_markup ?? null, types._VideoSize, "flags.5?VideoSize"],
    ];
  }

  constructor(params: { suggest?: true; save?: true; user_id: types.InputUser; file?: types.InputFile; video?: types.InputFile; video_start_ts?: number; video_emoji_markup?: types.VideoSize }) {
    super();
    this.suggest = params.suggest;
    this.save = params.save;
    this.user_id = params.user_id;
    this.file = params.file;
    this.video = params.video;
    this.video_start_ts = params.video_start_ts;
    this.video_emoji_markup = params.video_emoji_markup;
  }
}

export class upload_saveFilePart extends Function<boolean> {
  file_id: bigint;
  file_part: number;
  bytes: Uint8Array;

  protected get [id]() {
    return 0xB304A621;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["file_id", "bigint", "long"],
      ["file_part", "number", "int"],
      ["bytes", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.file_id, "bigint", "long"],
      [this.file_part, "number", "int"],
      [this.bytes, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { file_id: bigint; file_part: number; bytes: Uint8Array }) {
    super();
    this.file_id = params.file_id;
    this.file_part = params.file_part;
    this.bytes = params.bytes;
  }
}

export class upload_getFile extends Function<types.upload_File> {
  precise?: true;
  cdn_supported?: true;
  location: types.InputFileLocation;
  offset: bigint;
  limit: number;

  protected get [id]() {
    return 0xBE5335BE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["precise", "true", "flags.0?true"],
      ["cdn_supported", "true", "flags.1?true"],
      ["location", types._InputFileLocation, "InputFileLocation"],
      ["offset", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.precise ?? null, "true", "flags.0?true"],
      [this.cdn_supported ?? null, "true", "flags.1?true"],
      [this.location, types._InputFileLocation, "InputFileLocation"],
      [this.offset, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { precise?: true; cdn_supported?: true; location: types.InputFileLocation; offset: bigint; limit: number }) {
    super();
    this.precise = params.precise;
    this.cdn_supported = params.cdn_supported;
    this.location = params.location;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class upload_saveBigFilePart extends Function<boolean> {
  file_id: bigint;
  file_part: number;
  file_total_parts: number;
  bytes: Uint8Array;

  protected get [id]() {
    return 0xDE7B673D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["file_id", "bigint", "long"],
      ["file_part", "number", "int"],
      ["file_total_parts", "number", "int"],
      ["bytes", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.file_id, "bigint", "long"],
      [this.file_part, "number", "int"],
      [this.file_total_parts, "number", "int"],
      [this.bytes, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { file_id: bigint; file_part: number; file_total_parts: number; bytes: Uint8Array }) {
    super();
    this.file_id = params.file_id;
    this.file_part = params.file_part;
    this.file_total_parts = params.file_total_parts;
    this.bytes = params.bytes;
  }
}

export class upload_getWebFile extends Function<types.upload_WebFile> {
  location: types.InputWebFileLocation;
  offset: number;
  limit: number;

  protected get [id]() {
    return 0x24E6818D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["location", types._InputWebFileLocation, "InputWebFileLocation"],
      ["offset", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.location, types._InputWebFileLocation, "InputWebFileLocation"],
      [this.offset, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { location: types.InputWebFileLocation; offset: number; limit: number }) {
    super();
    this.location = params.location;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class upload_getCdnFile extends Function<types.upload_CdnFile> {
  file_token: Uint8Array;
  offset: bigint;
  limit: number;

  protected get [id]() {
    return 0x395F69DA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["file_token", Uint8Array, "bytes"],
      ["offset", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.file_token, Uint8Array, "bytes"],
      [this.offset, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { file_token: Uint8Array; offset: bigint; limit: number }) {
    super();
    this.file_token = params.file_token;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class upload_reuploadCdnFile extends Function<types.FileHash[]> {
  file_token: Uint8Array;
  request_token: Uint8Array;

  protected get [id]() {
    return 0x9B2754A8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["file_token", Uint8Array, "bytes"],
      ["request_token", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.file_token, Uint8Array, "bytes"],
      [this.request_token, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { file_token: Uint8Array; request_token: Uint8Array }) {
    super();
    this.file_token = params.file_token;
    this.request_token = params.request_token;
  }
}

export class upload_getCdnFileHashes extends Function<types.FileHash[]> {
  file_token: Uint8Array;
  offset: bigint;

  protected get [id]() {
    return 0x91DC3F31;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["file_token", Uint8Array, "bytes"],
      ["offset", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.file_token, Uint8Array, "bytes"],
      [this.offset, "bigint", "long"],
    ];
  }

  constructor(params: { file_token: Uint8Array; offset: bigint }) {
    super();
    this.file_token = params.file_token;
    this.offset = params.offset;
  }
}

export class upload_getFileHashes extends Function<types.FileHash[]> {
  location: types.InputFileLocation;
  offset: bigint;

  protected get [id]() {
    return 0x9156982A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["location", types._InputFileLocation, "InputFileLocation"],
      ["offset", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.location, types._InputFileLocation, "InputFileLocation"],
      [this.offset, "bigint", "long"],
    ];
  }

  constructor(params: { location: types.InputFileLocation; offset: bigint }) {
    super();
    this.location = params.location;
    this.offset = params.offset;
  }
}

export class help_getConfig extends Function<types.Config> {
  protected get [id]() {
    return 0xC4F9186B;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class help_getNearestDc extends Function<types.NearestDc> {
  protected get [id]() {
    return 0x1FB33026;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class help_getAppUpdate extends Function<types.help_AppUpdate> {
  source: string;

  protected get [id]() {
    return 0x522D5A7D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["source", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.source, "string", "string"],
    ];
  }

  constructor(params: { source: string }) {
    super();
    this.source = params.source;
  }
}

export class help_getInviteText extends Function<types.help_InviteText> {
  protected get [id]() {
    return 0x4D392343;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class help_getSupport extends Function<types.help_Support> {
  protected get [id]() {
    return 0x9CDF08CD;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class help_getAppChangelog extends Function<types.Updates> {
  prev_app_version: string;

  protected get [id]() {
    return 0x9010EF6F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prev_app_version", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prev_app_version, "string", "string"],
    ];
  }

  constructor(params: { prev_app_version: string }) {
    super();
    this.prev_app_version = params.prev_app_version;
  }
}

export class help_setBotUpdatesStatus extends Function<boolean> {
  pending_updates_count: number;
  message: string;

  protected get [id]() {
    return 0xEC22CFCD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["pending_updates_count", "number", "int"],
      ["message", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.pending_updates_count, "number", "int"],
      [this.message, "string", "string"],
    ];
  }

  constructor(params: { pending_updates_count: number; message: string }) {
    super();
    this.pending_updates_count = params.pending_updates_count;
    this.message = params.message;
  }
}

export class help_getCdnConfig extends Function<types.CdnConfig> {
  protected get [id]() {
    return 0x52029342;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class help_getRecentMeUrls extends Function<types.help_RecentMeUrls> {
  referer: string;

  protected get [id]() {
    return 0x3DC0F114;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["referer", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.referer, "string", "string"],
    ];
  }

  constructor(params: { referer: string }) {
    super();
    this.referer = params.referer;
  }
}

export class help_getTermsOfServiceUpdate extends Function<types.help_TermsOfServiceUpdate> {
  protected get [id]() {
    return 0x2CA51FD1;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class help_acceptTermsOfService extends Function<boolean> {
  id: types.DataJSON;

  protected get [id]() {
    return 0xEE72F79A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types._DataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types._DataJSON, "DataJSON"],
    ];
  }

  constructor(params: { id: types.DataJSON }) {
    super();
    this.id = params.id;
  }
}

export class help_getDeepLinkInfo extends Function<types.help_DeepLinkInfo> {
  path: string;

  protected get [id]() {
    return 0x3FEDC75F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["path", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.path, "string", "string"],
    ];
  }

  constructor(params: { path: string }) {
    super();
    this.path = params.path;
  }
}

export class help_getAppConfig extends Function<types.help_AppConfig> {
  hash: number;

  protected get [id]() {
    return 0x61E3F854;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "number", "int"],
    ];
  }

  constructor(params: { hash: number }) {
    super();
    this.hash = params.hash;
  }
}

export class help_saveAppLog extends Function<boolean> {
  events: Array<types.InputAppEvent>;

  protected get [id]() {
    return 0x6F02F748;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["events", [types._InputAppEvent], "Vector<InputAppEvent>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.events, [types._InputAppEvent], "Vector<InputAppEvent>"],
    ];
  }

  constructor(params: { events: Array<types.InputAppEvent> }) {
    super();
    this.events = params.events;
  }
}

export class help_getPassportConfig extends Function<types.help_PassportConfig> {
  hash: number;

  protected get [id]() {
    return 0xC661AD08;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "number", "int"],
    ];
  }

  constructor(params: { hash: number }) {
    super();
    this.hash = params.hash;
  }
}

export class help_getSupportName extends Function<types.help_SupportName> {
  protected get [id]() {
    return 0xD360E72C;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class help_getUserInfo extends Function<types.help_UserInfo> {
  user_id: types.InputUser;

  protected get [id]() {
    return 0x038A08D3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["user_id", types._InputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.user_id, types._InputUser, "InputUser"],
    ];
  }

  constructor(params: { user_id: types.InputUser }) {
    super();
    this.user_id = params.user_id;
  }
}

export class help_editUserInfo extends Function<types.help_UserInfo> {
  user_id: types.InputUser;
  message: string;
  entities: Array<types.MessageEntity>;

  protected get [id]() {
    return 0x66B91B70;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["user_id", types._InputUser, "InputUser"],
      ["message", "string", "string"],
      ["entities", [types._MessageEntity], "Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.user_id, types._InputUser, "InputUser"],
      [this.message, "string", "string"],
      [this.entities, [types._MessageEntity], "Vector<MessageEntity>"],
    ];
  }

  constructor(params: { user_id: types.InputUser; message: string; entities: Array<types.MessageEntity> }) {
    super();
    this.user_id = params.user_id;
    this.message = params.message;
    this.entities = params.entities;
  }
}

export class help_getPromoData extends Function<types.help_PromoData> {
  protected get [id]() {
    return 0xC0977421;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class help_hidePromoData extends Function<boolean> {
  peer: types.InputPeer;

  protected get [id]() {
    return 0x1E251C95;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class help_dismissSuggestion extends Function<boolean> {
  peer: types.InputPeer;
  suggestion: string;

  protected get [id]() {
    return 0xF50DBAA1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["suggestion", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.suggestion, "string", "string"],
    ];
  }

  constructor(params: { peer: types.InputPeer; suggestion: string }) {
    super();
    this.peer = params.peer;
    this.suggestion = params.suggestion;
  }
}

export class help_getCountriesList extends Function<types.help_CountriesList> {
  lang_code: string;
  hash: number;

  protected get [id]() {
    return 0x735787A8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["lang_code", "string", "string"],
      ["hash", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.lang_code, "string", "string"],
      [this.hash, "number", "int"],
    ];
  }

  constructor(params: { lang_code: string; hash: number }) {
    super();
    this.lang_code = params.lang_code;
    this.hash = params.hash;
  }
}

export class help_getPremiumPromo extends Function<types.help_PremiumPromo> {
  protected get [id]() {
    return 0xB81B93D4;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class help_getPeerColors extends Function<types.help_PeerColors> {
  hash: number;

  protected get [id]() {
    return 0xDA80F42F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "number", "int"],
    ];
  }

  constructor(params: { hash: number }) {
    super();
    this.hash = params.hash;
  }
}

export class help_getPeerProfileColors extends Function<types.help_PeerColors> {
  hash: number;

  protected get [id]() {
    return 0xABCFA9FD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "number", "int"],
    ];
  }

  constructor(params: { hash: number }) {
    super();
    this.hash = params.hash;
  }
}

export class channels_readHistory extends Function<boolean> {
  channel: types.InputChannel;
  max_id: number;

  protected get [id]() {
    return 0xCC104937;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["max_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.max_id, "number", "int"],
    ];
  }

  constructor(params: { channel: types.InputChannel; max_id: number }) {
    super();
    this.channel = params.channel;
    this.max_id = params.max_id;
  }
}

export class channels_deleteMessages extends Function<types.messages_AffectedMessages> {
  channel: types.InputChannel;
  id: Array<number>;

  protected get [id]() {
    return 0x84C1FD4E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { channel: types.InputChannel; id: Array<number> }) {
    super();
    this.channel = params.channel;
    this.id = params.id;
  }
}

export class channels_reportSpam extends Function<boolean> {
  channel: types.InputChannel;
  participant: types.InputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0xF44A8315;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["participant", types._InputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.participant, types._InputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { channel: types.InputChannel; participant: types.InputPeer; id: Array<number> }) {
    super();
    this.channel = params.channel;
    this.participant = params.participant;
    this.id = params.id;
  }
}

export class channels_getMessages extends Function<types.messages_Messages> {
  channel: types.InputChannel;
  id: Array<types.InputMessage>;

  protected get [id]() {
    return 0xAD8C9A23;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["id", [types._InputMessage], "Vector<InputMessage>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.id, [types._InputMessage], "Vector<InputMessage>"],
    ];
  }

  constructor(params: { channel: types.InputChannel; id: Array<types.InputMessage> }) {
    super();
    this.channel = params.channel;
    this.id = params.id;
  }
}

export class channels_getParticipants extends Function<types.channels_ChannelParticipants> {
  channel: types.InputChannel;
  filter: types.ChannelParticipantsFilter;
  offset: number;
  limit: number;
  hash: bigint;

  protected get [id]() {
    return 0x77CED9D0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["filter", types._ChannelParticipantsFilter, "ChannelParticipantsFilter"],
      ["offset", "number", "int"],
      ["limit", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.filter, types._ChannelParticipantsFilter, "ChannelParticipantsFilter"],
      [this.offset, "number", "int"],
      [this.limit, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { channel: types.InputChannel; filter: types.ChannelParticipantsFilter; offset: number; limit: number; hash: bigint }) {
    super();
    this.channel = params.channel;
    this.filter = params.filter;
    this.offset = params.offset;
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

export class channels_getParticipant extends Function<types.channels_ChannelParticipant> {
  channel: types.InputChannel;
  participant: types.InputPeer;

  protected get [id]() {
    return 0xA0AB6CC6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["participant", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.participant, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { channel: types.InputChannel; participant: types.InputPeer }) {
    super();
    this.channel = params.channel;
    this.participant = params.participant;
  }
}

export class channels_getChannels extends Function<types.messages_Chats> {
  id: Array<types.InputChannel>;

  protected get [id]() {
    return 0x0A7F6BBB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [types._InputChannel], "Vector<InputChannel>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [types._InputChannel], "Vector<InputChannel>"],
    ];
  }

  constructor(params: { id: Array<types.InputChannel> }) {
    super();
    this.id = params.id;
  }
}

export class channels_getFullChannel extends Function<types.messages_ChatFull> {
  channel: types.InputChannel;

  protected get [id]() {
    return 0x08736A09;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: types.InputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class channels_createChannel extends Function<types.Updates> {
  broadcast?: true;
  megagroup?: true;
  for_import?: true;
  forum?: true;
  title: string;
  about: string;
  geo_point?: types.InputGeoPoint;
  address?: string;
  ttl_period?: number;

  protected get [id]() {
    return 0x91006707;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["broadcast", "true", "flags.0?true"],
      ["megagroup", "true", "flags.1?true"],
      ["for_import", "true", "flags.3?true"],
      ["forum", "true", "flags.5?true"],
      ["title", "string", "string"],
      ["about", "string", "string"],
      ["geo_point", types._InputGeoPoint, "flags.2?InputGeoPoint"],
      ["address", "string", "flags.2?string"],
      ["ttl_period", "number", "flags.4?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.broadcast ?? null, "true", "flags.0?true"],
      [this.megagroup ?? null, "true", "flags.1?true"],
      [this.for_import ?? null, "true", "flags.3?true"],
      [this.forum ?? null, "true", "flags.5?true"],
      [this.title, "string", "string"],
      [this.about, "string", "string"],
      [this.geo_point ?? null, types._InputGeoPoint, "flags.2?InputGeoPoint"],
      [this.address ?? null, "string", "flags.2?string"],
      [this.ttl_period ?? null, "number", "flags.4?int"],
    ];
  }

  constructor(params: { broadcast?: true; megagroup?: true; for_import?: true; forum?: true; title: string; about: string; geo_point?: types.InputGeoPoint; address?: string; ttl_period?: number }) {
    super();
    this.broadcast = params.broadcast;
    this.megagroup = params.megagroup;
    this.for_import = params.for_import;
    this.forum = params.forum;
    this.title = params.title;
    this.about = params.about;
    this.geo_point = params.geo_point;
    this.address = params.address;
    this.ttl_period = params.ttl_period;
  }
}

export class channels_editAdmin extends Function<types.Updates> {
  channel: types.InputChannel;
  user_id: types.InputUser;
  admin_rights: types.ChatAdminRights;
  rank: string;

  protected get [id]() {
    return 0xD33C8902;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["user_id", types._InputUser, "InputUser"],
      ["admin_rights", types._ChatAdminRights, "ChatAdminRights"],
      ["rank", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.user_id, types._InputUser, "InputUser"],
      [this.admin_rights, types._ChatAdminRights, "ChatAdminRights"],
      [this.rank, "string", "string"],
    ];
  }

  constructor(params: { channel: types.InputChannel; user_id: types.InputUser; admin_rights: types.ChatAdminRights; rank: string }) {
    super();
    this.channel = params.channel;
    this.user_id = params.user_id;
    this.admin_rights = params.admin_rights;
    this.rank = params.rank;
  }
}

export class channels_editTitle extends Function<types.Updates> {
  channel: types.InputChannel;
  title: string;

  protected get [id]() {
    return 0x566DECD0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.title, "string", "string"],
    ];
  }

  constructor(params: { channel: types.InputChannel; title: string }) {
    super();
    this.channel = params.channel;
    this.title = params.title;
  }
}

export class channels_editPhoto extends Function<types.Updates> {
  channel: types.InputChannel;
  photo: types.InputChatPhoto;

  protected get [id]() {
    return 0xF12E57C9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["photo", types._InputChatPhoto, "InputChatPhoto"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.photo, types._InputChatPhoto, "InputChatPhoto"],
    ];
  }

  constructor(params: { channel: types.InputChannel; photo: types.InputChatPhoto }) {
    super();
    this.channel = params.channel;
    this.photo = params.photo;
  }
}

export class channels_checkUsername extends Function<boolean> {
  channel: types.InputChannel;
  username: string;

  protected get [id]() {
    return 0x10E6BD2C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["username", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.username, "string", "string"],
    ];
  }

  constructor(params: { channel: types.InputChannel; username: string }) {
    super();
    this.channel = params.channel;
    this.username = params.username;
  }
}

export class channels_updateUsername extends Function<boolean> {
  channel: types.InputChannel;
  username: string;

  protected get [id]() {
    return 0x3514B3DE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["username", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.username, "string", "string"],
    ];
  }

  constructor(params: { channel: types.InputChannel; username: string }) {
    super();
    this.channel = params.channel;
    this.username = params.username;
  }
}

export class channels_joinChannel extends Function<types.Updates> {
  channel: types.InputChannel;

  protected get [id]() {
    return 0x24B524C5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: types.InputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class channels_leaveChannel extends Function<types.Updates> {
  channel: types.InputChannel;

  protected get [id]() {
    return 0xF836AA95;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: types.InputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class channels_inviteToChannel extends Function<types.Updates> {
  channel: types.InputChannel;
  users: Array<types.InputUser>;

  protected get [id]() {
    return 0x199F3A6C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["users", [types._InputUser], "Vector<InputUser>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.users, [types._InputUser], "Vector<InputUser>"],
    ];
  }

  constructor(params: { channel: types.InputChannel; users: Array<types.InputUser> }) {
    super();
    this.channel = params.channel;
    this.users = params.users;
  }
}

export class channels_deleteChannel extends Function<types.Updates> {
  channel: types.InputChannel;

  protected get [id]() {
    return 0xC0111FE3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: types.InputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class channels_exportMessageLink extends Function<types.ExportedMessageLink> {
  grouped?: true;
  thread?: true;
  channel: types.InputChannel;
  id: number;

  protected get [id]() {
    return 0xE63FADEB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["grouped", "true", "flags.0?true"],
      ["thread", "true", "flags.1?true"],
      ["channel", types._InputChannel, "InputChannel"],
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.grouped ?? null, "true", "flags.0?true"],
      [this.thread ?? null, "true", "flags.1?true"],
      [this.channel, types._InputChannel, "InputChannel"],
      [this.id, "number", "int"],
    ];
  }

  constructor(params: { grouped?: true; thread?: true; channel: types.InputChannel; id: number }) {
    super();
    this.grouped = params.grouped;
    this.thread = params.thread;
    this.channel = params.channel;
    this.id = params.id;
  }
}

export class channels_toggleSignatures extends Function<types.Updates> {
  channel: types.InputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0x1F69B606;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.InputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class channels_getAdminedPublicChannels extends Function<types.messages_Chats> {
  by_location?: true;
  check_limit?: true;

  protected get [id]() {
    return 0xF8B036AF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["by_location", "true", "flags.0?true"],
      ["check_limit", "true", "flags.1?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.by_location ?? null, "true", "flags.0?true"],
      [this.check_limit ?? null, "true", "flags.1?true"],
    ];
  }

  constructor(params?: { by_location?: true; check_limit?: true }) {
    super();
    this.by_location = params?.by_location;
    this.check_limit = params?.check_limit;
  }
}

export class channels_editBanned extends Function<types.Updates> {
  channel: types.InputChannel;
  participant: types.InputPeer;
  banned_rights: types.ChatBannedRights;

  protected get [id]() {
    return 0x96E6CD81;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["participant", types._InputPeer, "InputPeer"],
      ["banned_rights", types._ChatBannedRights, "ChatBannedRights"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.participant, types._InputPeer, "InputPeer"],
      [this.banned_rights, types._ChatBannedRights, "ChatBannedRights"],
    ];
  }

  constructor(params: { channel: types.InputChannel; participant: types.InputPeer; banned_rights: types.ChatBannedRights }) {
    super();
    this.channel = params.channel;
    this.participant = params.participant;
    this.banned_rights = params.banned_rights;
  }
}

export class channels_getAdminLog extends Function<types.channels_AdminLogResults> {
  channel: types.InputChannel;
  q: string;
  events_filter?: types.ChannelAdminLogEventsFilter;
  admins?: Array<types.InputUser>;
  max_id: bigint;
  min_id: bigint;
  limit: number;

  protected get [id]() {
    return 0x33DDF480;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channel", types._InputChannel, "InputChannel"],
      ["q", "string", "string"],
      ["events_filter", types._ChannelAdminLogEventsFilter, "flags.0?ChannelAdminLogEventsFilter"],
      ["admins", [types._InputUser], "flags.1?Vector<InputUser>"],
      ["max_id", "bigint", "long"],
      ["min_id", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channel, types._InputChannel, "InputChannel"],
      [this.q, "string", "string"],
      [this.events_filter ?? null, types._ChannelAdminLogEventsFilter, "flags.0?ChannelAdminLogEventsFilter"],
      [this.admins ?? null, [types._InputUser], "flags.1?Vector<InputUser>"],
      [this.max_id, "bigint", "long"],
      [this.min_id, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { channel: types.InputChannel; q: string; events_filter?: types.ChannelAdminLogEventsFilter; admins?: Array<types.InputUser>; max_id: bigint; min_id: bigint; limit: number }) {
    super();
    this.channel = params.channel;
    this.q = params.q;
    this.events_filter = params.events_filter;
    this.admins = params.admins;
    this.max_id = params.max_id;
    this.min_id = params.min_id;
    this.limit = params.limit;
  }
}

export class channels_setStickers extends Function<boolean> {
  channel: types.InputChannel;
  stickerset: types.InputStickerSet;

  protected get [id]() {
    return 0xEA8CA4F9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["stickerset", types._InputStickerSet, "InputStickerSet"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.stickerset, types._InputStickerSet, "InputStickerSet"],
    ];
  }

  constructor(params: { channel: types.InputChannel; stickerset: types.InputStickerSet }) {
    super();
    this.channel = params.channel;
    this.stickerset = params.stickerset;
  }
}

export class channels_readMessageContents extends Function<boolean> {
  channel: types.InputChannel;
  id: Array<number>;

  protected get [id]() {
    return 0xEAB5DC38;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { channel: types.InputChannel; id: Array<number> }) {
    super();
    this.channel = params.channel;
    this.id = params.id;
  }
}

export class channels_deleteHistory extends Function<types.Updates> {
  for_everyone?: true;
  channel: types.InputChannel;
  max_id: number;

  protected get [id]() {
    return 0x9BAA9647;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["for_everyone", "true", "flags.0?true"],
      ["channel", types._InputChannel, "InputChannel"],
      ["max_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.for_everyone ?? null, "true", "flags.0?true"],
      [this.channel, types._InputChannel, "InputChannel"],
      [this.max_id, "number", "int"],
    ];
  }

  constructor(params: { for_everyone?: true; channel: types.InputChannel; max_id: number }) {
    super();
    this.for_everyone = params.for_everyone;
    this.channel = params.channel;
    this.max_id = params.max_id;
  }
}

export class channels_togglePreHistoryHidden extends Function<types.Updates> {
  channel: types.InputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0xEABBB94C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.InputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class channels_getLeftChannels extends Function<types.messages_Chats> {
  offset: number;

  protected get [id]() {
    return 0x8341ECC0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
    ];
  }

  constructor(params: { offset: number }) {
    super();
    this.offset = params.offset;
  }
}

export class channels_getGroupsForDiscussion extends Function<types.messages_Chats> {
  protected get [id]() {
    return 0xF5DAD378;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class channels_setDiscussionGroup extends Function<boolean> {
  broadcast: types.InputChannel;
  group: types.InputChannel;

  protected get [id]() {
    return 0x40582BB2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["broadcast", types._InputChannel, "InputChannel"],
      ["group", types._InputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.broadcast, types._InputChannel, "InputChannel"],
      [this.group, types._InputChannel, "InputChannel"],
    ];
  }

  constructor(params: { broadcast: types.InputChannel; group: types.InputChannel }) {
    super();
    this.broadcast = params.broadcast;
    this.group = params.group;
  }
}

export class channels_editCreator extends Function<types.Updates> {
  channel: types.InputChannel;
  user_id: types.InputUser;
  password: types.InputCheckPasswordSRP;

  protected get [id]() {
    return 0x8F38CD1F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["user_id", types._InputUser, "InputUser"],
      ["password", types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.user_id, types._InputUser, "InputUser"],
      [this.password, types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  constructor(params: { channel: types.InputChannel; user_id: types.InputUser; password: types.InputCheckPasswordSRP }) {
    super();
    this.channel = params.channel;
    this.user_id = params.user_id;
    this.password = params.password;
  }
}

export class channels_editLocation extends Function<boolean> {
  channel: types.InputChannel;
  geo_point: types.InputGeoPoint;
  address: string;

  protected get [id]() {
    return 0x58E63F6D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["geo_point", types._InputGeoPoint, "InputGeoPoint"],
      ["address", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.geo_point, types._InputGeoPoint, "InputGeoPoint"],
      [this.address, "string", "string"],
    ];
  }

  constructor(params: { channel: types.InputChannel; geo_point: types.InputGeoPoint; address: string }) {
    super();
    this.channel = params.channel;
    this.geo_point = params.geo_point;
    this.address = params.address;
  }
}

export class channels_toggleSlowMode extends Function<types.Updates> {
  channel: types.InputChannel;
  seconds: number;

  protected get [id]() {
    return 0xEDD49EF0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["seconds", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.seconds, "number", "int"],
    ];
  }

  constructor(params: { channel: types.InputChannel; seconds: number }) {
    super();
    this.channel = params.channel;
    this.seconds = params.seconds;
  }
}

export class channels_getInactiveChannels extends Function<types.messages_InactiveChats> {
  protected get [id]() {
    return 0x11E831EE;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class channels_convertToGigagroup extends Function<types.Updates> {
  channel: types.InputChannel;

  protected get [id]() {
    return 0x0B290C69;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: types.InputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class channels_viewSponsoredMessage extends Function<boolean> {
  channel: types.InputChannel;
  random_id: Uint8Array;

  protected get [id]() {
    return 0xBEAEDB94;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["random_id", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.random_id, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { channel: types.InputChannel; random_id: Uint8Array }) {
    super();
    this.channel = params.channel;
    this.random_id = params.random_id;
  }
}

export class channels_getSponsoredMessages extends Function<types.messages_SponsoredMessages> {
  channel: types.InputChannel;

  protected get [id]() {
    return 0xEC210FBF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: types.InputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class channels_getSendAs extends Function<types.channels_SendAsPeers> {
  peer: types.InputPeer;

  protected get [id]() {
    return 0x0DC770EE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class channels_deleteParticipantHistory extends Function<types.messages_AffectedHistory> {
  channel: types.InputChannel;
  participant: types.InputPeer;

  protected get [id]() {
    return 0x367544DB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["participant", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.participant, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { channel: types.InputChannel; participant: types.InputPeer }) {
    super();
    this.channel = params.channel;
    this.participant = params.participant;
  }
}

export class channels_toggleJoinToSend extends Function<types.Updates> {
  channel: types.InputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0xE4CB9580;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.InputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class channels_toggleJoinRequest extends Function<types.Updates> {
  channel: types.InputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0x4C2985B6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.InputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class channels_reorderUsernames extends Function<boolean> {
  channel: types.InputChannel;
  order: Array<string>;

  protected get [id]() {
    return 0xB45CED1D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["order", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.order, ["string"], "Vector<string>"],
    ];
  }

  constructor(params: { channel: types.InputChannel; order: Array<string> }) {
    super();
    this.channel = params.channel;
    this.order = params.order;
  }
}

export class channels_toggleUsername extends Function<boolean> {
  channel: types.InputChannel;
  username: string;
  active: boolean;

  protected get [id]() {
    return 0x50F24105;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["username", "string", "string"],
      ["active", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.username, "string", "string"],
      [this.active, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.InputChannel; username: string; active: boolean }) {
    super();
    this.channel = params.channel;
    this.username = params.username;
    this.active = params.active;
  }
}

export class channels_deactivateAllUsernames extends Function<boolean> {
  channel: types.InputChannel;

  protected get [id]() {
    return 0x0A245DD3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: types.InputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class channels_toggleForum extends Function<types.Updates> {
  channel: types.InputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0xA4298B29;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.InputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class channels_createForumTopic extends Function<types.Updates> {
  channel: types.InputChannel;
  title: string;
  icon_color?: number;
  icon_emoji_id?: bigint;
  random_id: bigint;
  send_as?: types.InputPeer;

  protected get [id]() {
    return 0xF40C0224;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channel", types._InputChannel, "InputChannel"],
      ["title", "string", "string"],
      ["icon_color", "number", "flags.0?int"],
      ["icon_emoji_id", "bigint", "flags.3?long"],
      ["random_id", "bigint", "long"],
      ["send_as", types._InputPeer, "flags.2?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channel, types._InputChannel, "InputChannel"],
      [this.title, "string", "string"],
      [this.icon_color ?? null, "number", "flags.0?int"],
      [this.icon_emoji_id ?? null, "bigint", "flags.3?long"],
      [this.random_id, "bigint", "long"],
      [this.send_as ?? null, types._InputPeer, "flags.2?InputPeer"],
    ];
  }

  constructor(params: { channel: types.InputChannel; title: string; icon_color?: number; icon_emoji_id?: bigint; random_id: bigint; send_as?: types.InputPeer }) {
    super();
    this.channel = params.channel;
    this.title = params.title;
    this.icon_color = params.icon_color;
    this.icon_emoji_id = params.icon_emoji_id;
    this.random_id = params.random_id;
    this.send_as = params.send_as;
  }
}

export class channels_getForumTopics extends Function<types.messages_ForumTopics> {
  channel: types.InputChannel;
  q?: string;
  offset_date: number;
  offset_id: number;
  offset_topic: number;
  limit: number;

  protected get [id]() {
    return 0x0DE560D1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channel", types._InputChannel, "InputChannel"],
      ["q", "string", "flags.0?string"],
      ["offset_date", "number", "int"],
      ["offset_id", "number", "int"],
      ["offset_topic", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channel, types._InputChannel, "InputChannel"],
      [this.q ?? null, "string", "flags.0?string"],
      [this.offset_date, "number", "int"],
      [this.offset_id, "number", "int"],
      [this.offset_topic, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { channel: types.InputChannel; q?: string; offset_date: number; offset_id: number; offset_topic: number; limit: number }) {
    super();
    this.channel = params.channel;
    this.q = params.q;
    this.offset_date = params.offset_date;
    this.offset_id = params.offset_id;
    this.offset_topic = params.offset_topic;
    this.limit = params.limit;
  }
}

export class channels_getForumTopicsByID extends Function<types.messages_ForumTopics> {
  channel: types.InputChannel;
  topics: Array<number>;

  protected get [id]() {
    return 0xB0831EB9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["topics", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.topics, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { channel: types.InputChannel; topics: Array<number> }) {
    super();
    this.channel = params.channel;
    this.topics = params.topics;
  }
}

export class channels_editForumTopic extends Function<types.Updates> {
  channel: types.InputChannel;
  topic_id: number;
  title?: string;
  icon_emoji_id?: bigint;
  closed?: boolean;
  hidden?: boolean;

  protected get [id]() {
    return 0xF4DFA185;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channel", types._InputChannel, "InputChannel"],
      ["topic_id", "number", "int"],
      ["title", "string", "flags.0?string"],
      ["icon_emoji_id", "bigint", "flags.1?long"],
      ["closed", "boolean", "flags.2?Bool"],
      ["hidden", "boolean", "flags.3?Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channel, types._InputChannel, "InputChannel"],
      [this.topic_id, "number", "int"],
      [this.title ?? null, "string", "flags.0?string"],
      [this.icon_emoji_id ?? null, "bigint", "flags.1?long"],
      [this.closed ?? null, "boolean", "flags.2?Bool"],
      [this.hidden ?? null, "boolean", "flags.3?Bool"],
    ];
  }

  constructor(params: { channel: types.InputChannel; topic_id: number; title?: string; icon_emoji_id?: bigint; closed?: boolean; hidden?: boolean }) {
    super();
    this.channel = params.channel;
    this.topic_id = params.topic_id;
    this.title = params.title;
    this.icon_emoji_id = params.icon_emoji_id;
    this.closed = params.closed;
    this.hidden = params.hidden;
  }
}

export class channels_updatePinnedForumTopic extends Function<types.Updates> {
  channel: types.InputChannel;
  topic_id: number;
  pinned: boolean;

  protected get [id]() {
    return 0x6C2D9026;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["topic_id", "number", "int"],
      ["pinned", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.topic_id, "number", "int"],
      [this.pinned, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.InputChannel; topic_id: number; pinned: boolean }) {
    super();
    this.channel = params.channel;
    this.topic_id = params.topic_id;
    this.pinned = params.pinned;
  }
}

export class channels_deleteTopicHistory extends Function<types.messages_AffectedHistory> {
  channel: types.InputChannel;
  top_msg_id: number;

  protected get [id]() {
    return 0x34435F2D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["top_msg_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.top_msg_id, "number", "int"],
    ];
  }

  constructor(params: { channel: types.InputChannel; top_msg_id: number }) {
    super();
    this.channel = params.channel;
    this.top_msg_id = params.top_msg_id;
  }
}

export class channels_reorderPinnedForumTopics extends Function<types.Updates> {
  force?: true;
  channel: types.InputChannel;
  order: Array<number>;

  protected get [id]() {
    return 0x2950A18F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["force", "true", "flags.0?true"],
      ["channel", types._InputChannel, "InputChannel"],
      ["order", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.force ?? null, "true", "flags.0?true"],
      [this.channel, types._InputChannel, "InputChannel"],
      [this.order, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { force?: true; channel: types.InputChannel; order: Array<number> }) {
    super();
    this.force = params.force;
    this.channel = params.channel;
    this.order = params.order;
  }
}

export class channels_toggleAntiSpam extends Function<types.Updates> {
  channel: types.InputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0x68F3E4EB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.InputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class channels_reportAntiSpamFalsePositive extends Function<boolean> {
  channel: types.InputChannel;
  msg_id: number;

  protected get [id]() {
    return 0xA850A693;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["msg_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.msg_id, "number", "int"],
    ];
  }

  constructor(params: { channel: types.InputChannel; msg_id: number }) {
    super();
    this.channel = params.channel;
    this.msg_id = params.msg_id;
  }
}

export class channels_toggleParticipantsHidden extends Function<types.Updates> {
  channel: types.InputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0x6A6E7854;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.InputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class channels_clickSponsoredMessage extends Function<boolean> {
  channel: types.InputChannel;
  random_id: Uint8Array;

  protected get [id]() {
    return 0x18AFBC93;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["random_id", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.random_id, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { channel: types.InputChannel; random_id: Uint8Array }) {
    super();
    this.channel = params.channel;
    this.random_id = params.random_id;
  }
}

export class channels_updateColor extends Function<types.Updates> {
  channel: types.InputChannel;
  color: number;
  background_emoji_id?: bigint;

  protected get [id]() {
    return 0x621A201F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channel", types._InputChannel, "InputChannel"],
      ["color", "number", "int"],
      ["background_emoji_id", "bigint", "flags.0?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channel, types._InputChannel, "InputChannel"],
      [this.color, "number", "int"],
      [this.background_emoji_id ?? null, "bigint", "flags.0?long"],
    ];
  }

  constructor(params: { channel: types.InputChannel; color: number; background_emoji_id?: bigint }) {
    super();
    this.channel = params.channel;
    this.color = params.color;
    this.background_emoji_id = params.background_emoji_id;
  }
}

export class channels_toggleViewForumAsMessages extends Function<types.Updates> {
  channel: types.InputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0x9738BB15;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.InputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class channels_getChannelRecommendations extends Function<types.messages_Chats> {
  channel: types.InputChannel;

  protected get [id]() {
    return 0x83B70D97;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: types.InputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class bots_sendCustomRequest extends Function<types.DataJSON> {
  custom_method: string;
  params: types.DataJSON;

  protected get [id]() {
    return 0xAA2769ED;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["custom_method", "string", "string"],
      ["params", types._DataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.custom_method, "string", "string"],
      [this.params, types._DataJSON, "DataJSON"],
    ];
  }

  constructor(params: { custom_method: string; params: types.DataJSON }) {
    super();
    this.custom_method = params.custom_method;
    this.params = params.params;
  }
}

export class bots_answerWebhookJSONQuery extends Function<boolean> {
  query_id: bigint;
  data: types.DataJSON;

  protected get [id]() {
    return 0xE6213F4D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["query_id", "bigint", "long"],
      ["data", types._DataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.query_id, "bigint", "long"],
      [this.data, types._DataJSON, "DataJSON"],
    ];
  }

  constructor(params: { query_id: bigint; data: types.DataJSON }) {
    super();
    this.query_id = params.query_id;
    this.data = params.data;
  }
}

export class bots_setBotCommands extends Function<boolean> {
  scope: types.BotCommandScope;
  lang_code: string;
  commands: Array<types.BotCommand>;

  protected get [id]() {
    return 0x0517165A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["scope", types._BotCommandScope, "BotCommandScope"],
      ["lang_code", "string", "string"],
      ["commands", [types._BotCommand], "Vector<BotCommand>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.scope, types._BotCommandScope, "BotCommandScope"],
      [this.lang_code, "string", "string"],
      [this.commands, [types._BotCommand], "Vector<BotCommand>"],
    ];
  }

  constructor(params: { scope: types.BotCommandScope; lang_code: string; commands: Array<types.BotCommand> }) {
    super();
    this.scope = params.scope;
    this.lang_code = params.lang_code;
    this.commands = params.commands;
  }
}

export class bots_resetBotCommands extends Function<boolean> {
  scope: types.BotCommandScope;
  lang_code: string;

  protected get [id]() {
    return 0x3D8DE0F9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["scope", types._BotCommandScope, "BotCommandScope"],
      ["lang_code", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.scope, types._BotCommandScope, "BotCommandScope"],
      [this.lang_code, "string", "string"],
    ];
  }

  constructor(params: { scope: types.BotCommandScope; lang_code: string }) {
    super();
    this.scope = params.scope;
    this.lang_code = params.lang_code;
  }
}

export class bots_getBotCommands extends Function<types.BotCommand[]> {
  scope: types.BotCommandScope;
  lang_code: string;

  protected get [id]() {
    return 0xE34C0DD6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["scope", types._BotCommandScope, "BotCommandScope"],
      ["lang_code", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.scope, types._BotCommandScope, "BotCommandScope"],
      [this.lang_code, "string", "string"],
    ];
  }

  constructor(params: { scope: types.BotCommandScope; lang_code: string }) {
    super();
    this.scope = params.scope;
    this.lang_code = params.lang_code;
  }
}

export class bots_setBotMenuButton extends Function<boolean> {
  user_id: types.InputUser;
  button: types.BotMenuButton;

  protected get [id]() {
    return 0x4504D54F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["user_id", types._InputUser, "InputUser"],
      ["button", types._BotMenuButton, "BotMenuButton"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.user_id, types._InputUser, "InputUser"],
      [this.button, types._BotMenuButton, "BotMenuButton"],
    ];
  }

  constructor(params: { user_id: types.InputUser; button: types.BotMenuButton }) {
    super();
    this.user_id = params.user_id;
    this.button = params.button;
  }
}

export class bots_getBotMenuButton extends Function<types.BotMenuButton> {
  user_id: types.InputUser;

  protected get [id]() {
    return 0x9C60EB28;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["user_id", types._InputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.user_id, types._InputUser, "InputUser"],
    ];
  }

  constructor(params: { user_id: types.InputUser }) {
    super();
    this.user_id = params.user_id;
  }
}

export class bots_setBotBroadcastDefaultAdminRights extends Function<boolean> {
  admin_rights: types.ChatAdminRights;

  protected get [id]() {
    return 0x788464E1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["admin_rights", types._ChatAdminRights, "ChatAdminRights"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.admin_rights, types._ChatAdminRights, "ChatAdminRights"],
    ];
  }

  constructor(params: { admin_rights: types.ChatAdminRights }) {
    super();
    this.admin_rights = params.admin_rights;
  }
}

export class bots_setBotGroupDefaultAdminRights extends Function<boolean> {
  admin_rights: types.ChatAdminRights;

  protected get [id]() {
    return 0x925EC9EA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["admin_rights", types._ChatAdminRights, "ChatAdminRights"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.admin_rights, types._ChatAdminRights, "ChatAdminRights"],
    ];
  }

  constructor(params: { admin_rights: types.ChatAdminRights }) {
    super();
    this.admin_rights = params.admin_rights;
  }
}

export class bots_setBotInfo extends Function<boolean> {
  bot?: types.InputUser;
  lang_code: string;
  name?: string;
  about?: string;
  description?: string;

  protected get [id]() {
    return 0x10CF3123;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["bot", types._InputUser, "flags.2?InputUser"],
      ["lang_code", "string", "string"],
      ["name", "string", "flags.3?string"],
      ["about", "string", "flags.0?string"],
      ["description", "string", "flags.1?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.bot ?? null, types._InputUser, "flags.2?InputUser"],
      [this.lang_code, "string", "string"],
      [this.name ?? null, "string", "flags.3?string"],
      [this.about ?? null, "string", "flags.0?string"],
      [this.description ?? null, "string", "flags.1?string"],
    ];
  }

  constructor(params: { bot?: types.InputUser; lang_code: string; name?: string; about?: string; description?: string }) {
    super();
    this.bot = params.bot;
    this.lang_code = params.lang_code;
    this.name = params.name;
    this.about = params.about;
    this.description = params.description;
  }
}

export class bots_getBotInfo extends Function<types.bots_BotInfo> {
  bot?: types.InputUser;
  lang_code: string;

  protected get [id]() {
    return 0xDCD914FD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["bot", types._InputUser, "flags.0?InputUser"],
      ["lang_code", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.bot ?? null, types._InputUser, "flags.0?InputUser"],
      [this.lang_code, "string", "string"],
    ];
  }

  constructor(params: { bot?: types.InputUser; lang_code: string }) {
    super();
    this.bot = params.bot;
    this.lang_code = params.lang_code;
  }
}

export class bots_reorderUsernames extends Function<boolean> {
  bot: types.InputUser;
  order: Array<string>;

  protected get [id]() {
    return 0x9709B1C2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", types._InputUser, "InputUser"],
      ["order", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, types._InputUser, "InputUser"],
      [this.order, ["string"], "Vector<string>"],
    ];
  }

  constructor(params: { bot: types.InputUser; order: Array<string> }) {
    super();
    this.bot = params.bot;
    this.order = params.order;
  }
}

export class bots_toggleUsername extends Function<boolean> {
  bot: types.InputUser;
  username: string;
  active: boolean;

  protected get [id]() {
    return 0x053CA973;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", types._InputUser, "InputUser"],
      ["username", "string", "string"],
      ["active", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, types._InputUser, "InputUser"],
      [this.username, "string", "string"],
      [this.active, "boolean", "Bool"],
    ];
  }

  constructor(params: { bot: types.InputUser; username: string; active: boolean }) {
    super();
    this.bot = params.bot;
    this.username = params.username;
    this.active = params.active;
  }
}

export class bots_canSendMessage extends Function<boolean> {
  bot: types.InputUser;

  protected get [id]() {
    return 0x1359F4E6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", types._InputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, types._InputUser, "InputUser"],
    ];
  }

  constructor(params: { bot: types.InputUser }) {
    super();
    this.bot = params.bot;
  }
}

export class bots_allowSendMessage extends Function<types.Updates> {
  bot: types.InputUser;

  protected get [id]() {
    return 0xF132E3EF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", types._InputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, types._InputUser, "InputUser"],
    ];
  }

  constructor(params: { bot: types.InputUser }) {
    super();
    this.bot = params.bot;
  }
}

export class bots_invokeWebViewCustomMethod extends Function<types.DataJSON> {
  bot: types.InputUser;
  custom_method: string;
  params: types.DataJSON;

  protected get [id]() {
    return 0x087FC5E7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", types._InputUser, "InputUser"],
      ["custom_method", "string", "string"],
      ["params", types._DataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, types._InputUser, "InputUser"],
      [this.custom_method, "string", "string"],
      [this.params, types._DataJSON, "DataJSON"],
    ];
  }

  constructor(params: { bot: types.InputUser; custom_method: string; params: types.DataJSON }) {
    super();
    this.bot = params.bot;
    this.custom_method = params.custom_method;
    this.params = params.params;
  }
}

export class payments_getPaymentForm extends Function<types.payments_PaymentForm> {
  invoice: types.InputInvoice;
  theme_params?: types.DataJSON;

  protected get [id]() {
    return 0x37148DBB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["invoice", types._InputInvoice, "InputInvoice"],
      ["theme_params", types._DataJSON, "flags.0?DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.invoice, types._InputInvoice, "InputInvoice"],
      [this.theme_params ?? null, types._DataJSON, "flags.0?DataJSON"],
    ];
  }

  constructor(params: { invoice: types.InputInvoice; theme_params?: types.DataJSON }) {
    super();
    this.invoice = params.invoice;
    this.theme_params = params.theme_params;
  }
}

export class payments_getPaymentReceipt extends Function<types.payments_PaymentReceipt> {
  peer: types.InputPeer;
  msg_id: number;

  protected get [id]() {
    return 0x2478D1CC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["msg_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.msg_id, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; msg_id: number }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
  }
}

export class payments_validateRequestedInfo extends Function<types.payments_ValidatedRequestedInfo> {
  save?: true;
  invoice: types.InputInvoice;
  info: types.PaymentRequestedInfo;

  protected get [id]() {
    return 0xB6C8F12B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["save", "true", "flags.0?true"],
      ["invoice", types._InputInvoice, "InputInvoice"],
      ["info", types._PaymentRequestedInfo, "PaymentRequestedInfo"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.save ?? null, "true", "flags.0?true"],
      [this.invoice, types._InputInvoice, "InputInvoice"],
      [this.info, types._PaymentRequestedInfo, "PaymentRequestedInfo"],
    ];
  }

  constructor(params: { save?: true; invoice: types.InputInvoice; info: types.PaymentRequestedInfo }) {
    super();
    this.save = params.save;
    this.invoice = params.invoice;
    this.info = params.info;
  }
}

export class payments_sendPaymentForm extends Function<types.payments_PaymentResult> {
  form_id: bigint;
  invoice: types.InputInvoice;
  requested_info_id?: string;
  shipping_option_id?: string;
  credentials: types.InputPaymentCredentials;
  tip_amount?: bigint;

  protected get [id]() {
    return 0x2D03522F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["form_id", "bigint", "long"],
      ["invoice", types._InputInvoice, "InputInvoice"],
      ["requested_info_id", "string", "flags.0?string"],
      ["shipping_option_id", "string", "flags.1?string"],
      ["credentials", types._InputPaymentCredentials, "InputPaymentCredentials"],
      ["tip_amount", "bigint", "flags.2?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.form_id, "bigint", "long"],
      [this.invoice, types._InputInvoice, "InputInvoice"],
      [this.requested_info_id ?? null, "string", "flags.0?string"],
      [this.shipping_option_id ?? null, "string", "flags.1?string"],
      [this.credentials, types._InputPaymentCredentials, "InputPaymentCredentials"],
      [this.tip_amount ?? null, "bigint", "flags.2?long"],
    ];
  }

  constructor(params: { form_id: bigint; invoice: types.InputInvoice; requested_info_id?: string; shipping_option_id?: string; credentials: types.InputPaymentCredentials; tip_amount?: bigint }) {
    super();
    this.form_id = params.form_id;
    this.invoice = params.invoice;
    this.requested_info_id = params.requested_info_id;
    this.shipping_option_id = params.shipping_option_id;
    this.credentials = params.credentials;
    this.tip_amount = params.tip_amount;
  }
}

export class payments_getSavedInfo extends Function<types.payments_SavedInfo> {
  protected get [id]() {
    return 0x227D824B;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class payments_clearSavedInfo extends Function<boolean> {
  credentials?: true;
  info?: true;

  protected get [id]() {
    return 0xD83D70C1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["credentials", "true", "flags.0?true"],
      ["info", "true", "flags.1?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.credentials ?? null, "true", "flags.0?true"],
      [this.info ?? null, "true", "flags.1?true"],
    ];
  }

  constructor(params?: { credentials?: true; info?: true }) {
    super();
    this.credentials = params?.credentials;
    this.info = params?.info;
  }
}

export class payments_getBankCardData extends Function<types.payments_BankCardData> {
  number: string;

  protected get [id]() {
    return 0x2E79D779;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["number", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.number, "string", "string"],
    ];
  }

  constructor(params: { number: string }) {
    super();
    this.number = params.number;
  }
}

export class payments_exportInvoice extends Function<types.payments_ExportedInvoice> {
  invoice_media: types.InputMedia;

  protected get [id]() {
    return 0x0F91B065;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["invoice_media", types._InputMedia, "InputMedia"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.invoice_media, types._InputMedia, "InputMedia"],
    ];
  }

  constructor(params: { invoice_media: types.InputMedia }) {
    super();
    this.invoice_media = params.invoice_media;
  }
}

export class payments_assignAppStoreTransaction extends Function<types.Updates> {
  receipt: Uint8Array;
  purpose: types.InputStorePaymentPurpose;

  protected get [id]() {
    return 0x80ED747D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["receipt", Uint8Array, "bytes"],
      ["purpose", types._InputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.receipt, Uint8Array, "bytes"],
      [this.purpose, types._InputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  constructor(params: { receipt: Uint8Array; purpose: types.InputStorePaymentPurpose }) {
    super();
    this.receipt = params.receipt;
    this.purpose = params.purpose;
  }
}

export class payments_assignPlayMarketTransaction extends Function<types.Updates> {
  receipt: types.DataJSON;
  purpose: types.InputStorePaymentPurpose;

  protected get [id]() {
    return 0xDFFD50D3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["receipt", types._DataJSON, "DataJSON"],
      ["purpose", types._InputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.receipt, types._DataJSON, "DataJSON"],
      [this.purpose, types._InputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  constructor(params: { receipt: types.DataJSON; purpose: types.InputStorePaymentPurpose }) {
    super();
    this.receipt = params.receipt;
    this.purpose = params.purpose;
  }
}

export class payments_canPurchasePremium extends Function<boolean> {
  purpose: types.InputStorePaymentPurpose;

  protected get [id]() {
    return 0x9FC19EB6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["purpose", types._InputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.purpose, types._InputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  constructor(params: { purpose: types.InputStorePaymentPurpose }) {
    super();
    this.purpose = params.purpose;
  }
}

export class payments_getPremiumGiftCodeOptions extends Function<types.PremiumGiftCodeOption[]> {
  boost_peer?: types.InputPeer;

  protected get [id]() {
    return 0x2757BA54;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["boost_peer", types._InputPeer, "flags.0?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.boost_peer ?? null, types._InputPeer, "flags.0?InputPeer"],
    ];
  }

  constructor(params?: { boost_peer?: types.InputPeer }) {
    super();
    this.boost_peer = params?.boost_peer;
  }
}

export class payments_checkGiftCode extends Function<types.payments_CheckedGiftCode> {
  slug: string;

  protected get [id]() {
    return 0x8E51B4C1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["slug", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.slug, "string", "string"],
    ];
  }

  constructor(params: { slug: string }) {
    super();
    this.slug = params.slug;
  }
}

export class payments_applyGiftCode extends Function<types.Updates> {
  slug: string;

  protected get [id]() {
    return 0xF6E26854;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["slug", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.slug, "string", "string"],
    ];
  }

  constructor(params: { slug: string }) {
    super();
    this.slug = params.slug;
  }
}

export class payments_getGiveawayInfo extends Function<types.payments_GiveawayInfo> {
  peer: types.InputPeer;
  msg_id: number;

  protected get [id]() {
    return 0xF4239425;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["msg_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.msg_id, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; msg_id: number }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
  }
}

export class payments_launchPrepaidGiveaway extends Function<types.Updates> {
  peer: types.InputPeer;
  giveaway_id: bigint;
  purpose: types.InputStorePaymentPurpose;

  protected get [id]() {
    return 0x5FF58F20;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["giveaway_id", "bigint", "long"],
      ["purpose", types._InputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.giveaway_id, "bigint", "long"],
      [this.purpose, types._InputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  constructor(params: { peer: types.InputPeer; giveaway_id: bigint; purpose: types.InputStorePaymentPurpose }) {
    super();
    this.peer = params.peer;
    this.giveaway_id = params.giveaway_id;
    this.purpose = params.purpose;
  }
}

export class stickers_createStickerSet extends Function<types.messages_StickerSet> {
  masks?: true;
  animated?: true;
  videos?: true;
  emojis?: true;
  text_color?: true;
  user_id: types.InputUser;
  title: string;
  short_name: string;
  thumb?: types.InputDocument;
  stickers: Array<types.InputStickerSetItem>;
  software?: string;

  protected get [id]() {
    return 0x9021AB67;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["masks", "true", "flags.0?true"],
      ["animated", "true", "flags.1?true"],
      ["videos", "true", "flags.4?true"],
      ["emojis", "true", "flags.5?true"],
      ["text_color", "true", "flags.6?true"],
      ["user_id", types._InputUser, "InputUser"],
      ["title", "string", "string"],
      ["short_name", "string", "string"],
      ["thumb", types._InputDocument, "flags.2?InputDocument"],
      ["stickers", [types._InputStickerSetItem], "Vector<InputStickerSetItem>"],
      ["software", "string", "flags.3?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.masks ?? null, "true", "flags.0?true"],
      [this.animated ?? null, "true", "flags.1?true"],
      [this.videos ?? null, "true", "flags.4?true"],
      [this.emojis ?? null, "true", "flags.5?true"],
      [this.text_color ?? null, "true", "flags.6?true"],
      [this.user_id, types._InputUser, "InputUser"],
      [this.title, "string", "string"],
      [this.short_name, "string", "string"],
      [this.thumb ?? null, types._InputDocument, "flags.2?InputDocument"],
      [this.stickers, [types._InputStickerSetItem], "Vector<InputStickerSetItem>"],
      [this.software ?? null, "string", "flags.3?string"],
    ];
  }

  constructor(params: { masks?: true; animated?: true; videos?: true; emojis?: true; text_color?: true; user_id: types.InputUser; title: string; short_name: string; thumb?: types.InputDocument; stickers: Array<types.InputStickerSetItem>; software?: string }) {
    super();
    this.masks = params.masks;
    this.animated = params.animated;
    this.videos = params.videos;
    this.emojis = params.emojis;
    this.text_color = params.text_color;
    this.user_id = params.user_id;
    this.title = params.title;
    this.short_name = params.short_name;
    this.thumb = params.thumb;
    this.stickers = params.stickers;
    this.software = params.software;
  }
}

export class stickers_removeStickerFromSet extends Function<types.messages_StickerSet> {
  sticker: types.InputDocument;

  protected get [id]() {
    return 0xF7760F51;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["sticker", types._InputDocument, "InputDocument"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.sticker, types._InputDocument, "InputDocument"],
    ];
  }

  constructor(params: { sticker: types.InputDocument }) {
    super();
    this.sticker = params.sticker;
  }
}

export class stickers_changeStickerPosition extends Function<types.messages_StickerSet> {
  sticker: types.InputDocument;
  position: number;

  protected get [id]() {
    return 0xFFB6D4CA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["sticker", types._InputDocument, "InputDocument"],
      ["position", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.sticker, types._InputDocument, "InputDocument"],
      [this.position, "number", "int"],
    ];
  }

  constructor(params: { sticker: types.InputDocument; position: number }) {
    super();
    this.sticker = params.sticker;
    this.position = params.position;
  }
}

export class stickers_addStickerToSet extends Function<types.messages_StickerSet> {
  stickerset: types.InputStickerSet;
  sticker: types.InputStickerSetItem;

  protected get [id]() {
    return 0x8653FEBE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", types._InputStickerSet, "InputStickerSet"],
      ["sticker", types._InputStickerSetItem, "InputStickerSetItem"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, types._InputStickerSet, "InputStickerSet"],
      [this.sticker, types._InputStickerSetItem, "InputStickerSetItem"],
    ];
  }

  constructor(params: { stickerset: types.InputStickerSet; sticker: types.InputStickerSetItem }) {
    super();
    this.stickerset = params.stickerset;
    this.sticker = params.sticker;
  }
}

export class stickers_setStickerSetThumb extends Function<types.messages_StickerSet> {
  stickerset: types.InputStickerSet;
  thumb?: types.InputDocument;
  thumb_document_id?: bigint;

  protected get [id]() {
    return 0xA76A5392;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["stickerset", types._InputStickerSet, "InputStickerSet"],
      ["thumb", types._InputDocument, "flags.0?InputDocument"],
      ["thumb_document_id", "bigint", "flags.1?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.stickerset, types._InputStickerSet, "InputStickerSet"],
      [this.thumb ?? null, types._InputDocument, "flags.0?InputDocument"],
      [this.thumb_document_id ?? null, "bigint", "flags.1?long"],
    ];
  }

  constructor(params: { stickerset: types.InputStickerSet; thumb?: types.InputDocument; thumb_document_id?: bigint }) {
    super();
    this.stickerset = params.stickerset;
    this.thumb = params.thumb;
    this.thumb_document_id = params.thumb_document_id;
  }
}

export class stickers_checkShortName extends Function<boolean> {
  short_name: string;

  protected get [id]() {
    return 0x284B3639;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["short_name", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.short_name, "string", "string"],
    ];
  }

  constructor(params: { short_name: string }) {
    super();
    this.short_name = params.short_name;
  }
}

export class stickers_suggestShortName extends Function<types.stickers_SuggestedShortName> {
  title: string;

  protected get [id]() {
    return 0x4DAFC503;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.title, "string", "string"],
    ];
  }

  constructor(params: { title: string }) {
    super();
    this.title = params.title;
  }
}

export class stickers_changeSticker extends Function<types.messages_StickerSet> {
  sticker: types.InputDocument;
  emoji?: string;
  mask_coords?: types.MaskCoords;
  keywords?: string;

  protected get [id]() {
    return 0xF5537EBC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["sticker", types._InputDocument, "InputDocument"],
      ["emoji", "string", "flags.0?string"],
      ["mask_coords", types._MaskCoords, "flags.1?MaskCoords"],
      ["keywords", "string", "flags.2?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.sticker, types._InputDocument, "InputDocument"],
      [this.emoji ?? null, "string", "flags.0?string"],
      [this.mask_coords ?? null, types._MaskCoords, "flags.1?MaskCoords"],
      [this.keywords ?? null, "string", "flags.2?string"],
    ];
  }

  constructor(params: { sticker: types.InputDocument; emoji?: string; mask_coords?: types.MaskCoords; keywords?: string }) {
    super();
    this.sticker = params.sticker;
    this.emoji = params.emoji;
    this.mask_coords = params.mask_coords;
    this.keywords = params.keywords;
  }
}

export class stickers_renameStickerSet extends Function<types.messages_StickerSet> {
  stickerset: types.InputStickerSet;
  title: string;

  protected get [id]() {
    return 0x124B1C00;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", types._InputStickerSet, "InputStickerSet"],
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, types._InputStickerSet, "InputStickerSet"],
      [this.title, "string", "string"],
    ];
  }

  constructor(params: { stickerset: types.InputStickerSet; title: string }) {
    super();
    this.stickerset = params.stickerset;
    this.title = params.title;
  }
}

export class stickers_deleteStickerSet extends Function<boolean> {
  stickerset: types.InputStickerSet;

  protected get [id]() {
    return 0x87704394;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", types._InputStickerSet, "InputStickerSet"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, types._InputStickerSet, "InputStickerSet"],
    ];
  }

  constructor(params: { stickerset: types.InputStickerSet }) {
    super();
    this.stickerset = params.stickerset;
  }
}

export class phone_getCallConfig extends Function<types.DataJSON> {
  protected get [id]() {
    return 0x55451FA9;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class phone_requestCall extends Function<types.phone_PhoneCall> {
  video?: true;
  user_id: types.InputUser;
  random_id: number;
  g_a_hash: Uint8Array;
  protocol: types.PhoneCallProtocol;

  protected get [id]() {
    return 0x42FF96ED;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["video", "true", "flags.0?true"],
      ["user_id", types._InputUser, "InputUser"],
      ["random_id", "number", "int"],
      ["g_a_hash", Uint8Array, "bytes"],
      ["protocol", types._PhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.video ?? null, "true", "flags.0?true"],
      [this.user_id, types._InputUser, "InputUser"],
      [this.random_id, "number", "int"],
      [this.g_a_hash, Uint8Array, "bytes"],
      [this.protocol, types._PhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  constructor(params: { video?: true; user_id: types.InputUser; random_id: number; g_a_hash: Uint8Array; protocol: types.PhoneCallProtocol }) {
    super();
    this.video = params.video;
    this.user_id = params.user_id;
    this.random_id = params.random_id;
    this.g_a_hash = params.g_a_hash;
    this.protocol = params.protocol;
  }
}

export class phone_acceptCall extends Function<types.phone_PhoneCall> {
  peer: types.InputPhoneCall;
  g_b: Uint8Array;
  protocol: types.PhoneCallProtocol;

  protected get [id]() {
    return 0x3BD2B4A0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPhoneCall, "InputPhoneCall"],
      ["g_b", Uint8Array, "bytes"],
      ["protocol", types._PhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPhoneCall, "InputPhoneCall"],
      [this.g_b, Uint8Array, "bytes"],
      [this.protocol, types._PhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  constructor(params: { peer: types.InputPhoneCall; g_b: Uint8Array; protocol: types.PhoneCallProtocol }) {
    super();
    this.peer = params.peer;
    this.g_b = params.g_b;
    this.protocol = params.protocol;
  }
}

export class phone_confirmCall extends Function<types.phone_PhoneCall> {
  peer: types.InputPhoneCall;
  g_a: Uint8Array;
  key_fingerprint: bigint;
  protocol: types.PhoneCallProtocol;

  protected get [id]() {
    return 0x2EFE1722;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPhoneCall, "InputPhoneCall"],
      ["g_a", Uint8Array, "bytes"],
      ["key_fingerprint", "bigint", "long"],
      ["protocol", types._PhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPhoneCall, "InputPhoneCall"],
      [this.g_a, Uint8Array, "bytes"],
      [this.key_fingerprint, "bigint", "long"],
      [this.protocol, types._PhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  constructor(params: { peer: types.InputPhoneCall; g_a: Uint8Array; key_fingerprint: bigint; protocol: types.PhoneCallProtocol }) {
    super();
    this.peer = params.peer;
    this.g_a = params.g_a;
    this.key_fingerprint = params.key_fingerprint;
    this.protocol = params.protocol;
  }
}

export class phone_receivedCall extends Function<boolean> {
  peer: types.InputPhoneCall;

  protected get [id]() {
    return 0x17D54F61;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPhoneCall, "InputPhoneCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPhoneCall, "InputPhoneCall"],
    ];
  }

  constructor(params: { peer: types.InputPhoneCall }) {
    super();
    this.peer = params.peer;
  }
}

export class phone_discardCall extends Function<types.Updates> {
  video?: true;
  peer: types.InputPhoneCall;
  duration: number;
  reason: types.PhoneCallDiscardReason;
  connection_id: bigint;

  protected get [id]() {
    return 0xB2CBC1C0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["video", "true", "flags.0?true"],
      ["peer", types._InputPhoneCall, "InputPhoneCall"],
      ["duration", "number", "int"],
      ["reason", types._PhoneCallDiscardReason, "PhoneCallDiscardReason"],
      ["connection_id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.video ?? null, "true", "flags.0?true"],
      [this.peer, types._InputPhoneCall, "InputPhoneCall"],
      [this.duration, "number", "int"],
      [this.reason, types._PhoneCallDiscardReason, "PhoneCallDiscardReason"],
      [this.connection_id, "bigint", "long"],
    ];
  }

  constructor(params: { video?: true; peer: types.InputPhoneCall; duration: number; reason: types.PhoneCallDiscardReason; connection_id: bigint }) {
    super();
    this.video = params.video;
    this.peer = params.peer;
    this.duration = params.duration;
    this.reason = params.reason;
    this.connection_id = params.connection_id;
  }
}

export class phone_setCallRating extends Function<types.Updates> {
  user_initiative?: true;
  peer: types.InputPhoneCall;
  rating: number;
  comment: string;

  protected get [id]() {
    return 0x59EAD627;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["user_initiative", "true", "flags.0?true"],
      ["peer", types._InputPhoneCall, "InputPhoneCall"],
      ["rating", "number", "int"],
      ["comment", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.user_initiative ?? null, "true", "flags.0?true"],
      [this.peer, types._InputPhoneCall, "InputPhoneCall"],
      [this.rating, "number", "int"],
      [this.comment, "string", "string"],
    ];
  }

  constructor(params: { user_initiative?: true; peer: types.InputPhoneCall; rating: number; comment: string }) {
    super();
    this.user_initiative = params.user_initiative;
    this.peer = params.peer;
    this.rating = params.rating;
    this.comment = params.comment;
  }
}

export class phone_saveCallDebug extends Function<boolean> {
  peer: types.InputPhoneCall;
  debug: types.DataJSON;

  protected get [id]() {
    return 0x277ADD7E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPhoneCall, "InputPhoneCall"],
      ["debug", types._DataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPhoneCall, "InputPhoneCall"],
      [this.debug, types._DataJSON, "DataJSON"],
    ];
  }

  constructor(params: { peer: types.InputPhoneCall; debug: types.DataJSON }) {
    super();
    this.peer = params.peer;
    this.debug = params.debug;
  }
}

export class phone_sendSignalingData extends Function<boolean> {
  peer: types.InputPhoneCall;
  data: Uint8Array;

  protected get [id]() {
    return 0xFF7A9383;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPhoneCall, "InputPhoneCall"],
      ["data", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPhoneCall, "InputPhoneCall"],
      [this.data, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { peer: types.InputPhoneCall; data: Uint8Array }) {
    super();
    this.peer = params.peer;
    this.data = params.data;
  }
}

export class phone_createGroupCall extends Function<types.Updates> {
  rtmp_stream?: true;
  peer: types.InputPeer;
  random_id: number;
  title?: string;
  schedule_date?: number;

  protected get [id]() {
    return 0x48CDC6D8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["rtmp_stream", "true", "flags.2?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["random_id", "number", "int"],
      ["title", "string", "flags.0?string"],
      ["schedule_date", "number", "flags.1?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.rtmp_stream ?? null, "true", "flags.2?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.random_id, "number", "int"],
      [this.title ?? null, "string", "flags.0?string"],
      [this.schedule_date ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(params: { rtmp_stream?: true; peer: types.InputPeer; random_id: number; title?: string; schedule_date?: number }) {
    super();
    this.rtmp_stream = params.rtmp_stream;
    this.peer = params.peer;
    this.random_id = params.random_id;
    this.title = params.title;
    this.schedule_date = params.schedule_date;
  }
}

export class phone_joinGroupCall extends Function<types.Updates> {
  muted?: true;
  video_stopped?: true;
  call: types.InputGroupCall;
  join_as: types.InputPeer;
  invite_hash?: string;
  params: types.DataJSON;

  protected get [id]() {
    return 0xB132FF7B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["muted", "true", "flags.0?true"],
      ["video_stopped", "true", "flags.2?true"],
      ["call", types._InputGroupCall, "InputGroupCall"],
      ["join_as", types._InputPeer, "InputPeer"],
      ["invite_hash", "string", "flags.1?string"],
      ["params", types._DataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.muted ?? null, "true", "flags.0?true"],
      [this.video_stopped ?? null, "true", "flags.2?true"],
      [this.call, types._InputGroupCall, "InputGroupCall"],
      [this.join_as, types._InputPeer, "InputPeer"],
      [this.invite_hash ?? null, "string", "flags.1?string"],
      [this.params, types._DataJSON, "DataJSON"],
    ];
  }

  constructor(params: { muted?: true; video_stopped?: true; call: types.InputGroupCall; join_as: types.InputPeer; invite_hash?: string; params: types.DataJSON }) {
    super();
    this.muted = params.muted;
    this.video_stopped = params.video_stopped;
    this.call = params.call;
    this.join_as = params.join_as;
    this.invite_hash = params.invite_hash;
    this.params = params.params;
  }
}

export class phone_leaveGroupCall extends Function<types.Updates> {
  call: types.InputGroupCall;
  source: number;

  protected get [id]() {
    return 0x500377F9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types._InputGroupCall, "InputGroupCall"],
      ["source", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types._InputGroupCall, "InputGroupCall"],
      [this.source, "number", "int"],
    ];
  }

  constructor(params: { call: types.InputGroupCall; source: number }) {
    super();
    this.call = params.call;
    this.source = params.source;
  }
}

export class phone_inviteToGroupCall extends Function<types.Updates> {
  call: types.InputGroupCall;
  users: Array<types.InputUser>;

  protected get [id]() {
    return 0x7B393160;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types._InputGroupCall, "InputGroupCall"],
      ["users", [types._InputUser], "Vector<InputUser>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types._InputGroupCall, "InputGroupCall"],
      [this.users, [types._InputUser], "Vector<InputUser>"],
    ];
  }

  constructor(params: { call: types.InputGroupCall; users: Array<types.InputUser> }) {
    super();
    this.call = params.call;
    this.users = params.users;
  }
}

export class phone_discardGroupCall extends Function<types.Updates> {
  call: types.InputGroupCall;

  protected get [id]() {
    return 0x7A777135;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types._InputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types._InputGroupCall, "InputGroupCall"],
    ];
  }

  constructor(params: { call: types.InputGroupCall }) {
    super();
    this.call = params.call;
  }
}

export class phone_toggleGroupCallSettings extends Function<types.Updates> {
  reset_invite_hash?: true;
  call: types.InputGroupCall;
  join_muted?: boolean;

  protected get [id]() {
    return 0x74BBB43D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["reset_invite_hash", "true", "flags.1?true"],
      ["call", types._InputGroupCall, "InputGroupCall"],
      ["join_muted", "boolean", "flags.0?Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.reset_invite_hash ?? null, "true", "flags.1?true"],
      [this.call, types._InputGroupCall, "InputGroupCall"],
      [this.join_muted ?? null, "boolean", "flags.0?Bool"],
    ];
  }

  constructor(params: { reset_invite_hash?: true; call: types.InputGroupCall; join_muted?: boolean }) {
    super();
    this.reset_invite_hash = params.reset_invite_hash;
    this.call = params.call;
    this.join_muted = params.join_muted;
  }
}

export class phone_getGroupCall extends Function<types.phone_GroupCall> {
  call: types.InputGroupCall;
  limit: number;

  protected get [id]() {
    return 0x041845DB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types._InputGroupCall, "InputGroupCall"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types._InputGroupCall, "InputGroupCall"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { call: types.InputGroupCall; limit: number }) {
    super();
    this.call = params.call;
    this.limit = params.limit;
  }
}

export class phone_getGroupParticipants extends Function<types.phone_GroupParticipants> {
  call: types.InputGroupCall;
  ids: Array<types.InputPeer>;
  sources: Array<number>;
  offset: string;
  limit: number;

  protected get [id]() {
    return 0xC558D8AB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types._InputGroupCall, "InputGroupCall"],
      ["ids", [types._InputPeer], "Vector<InputPeer>"],
      ["sources", ["number"], "Vector<int>"],
      ["offset", "string", "string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types._InputGroupCall, "InputGroupCall"],
      [this.ids, [types._InputPeer], "Vector<InputPeer>"],
      [this.sources, ["number"], "Vector<int>"],
      [this.offset, "string", "string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { call: types.InputGroupCall; ids: Array<types.InputPeer>; sources: Array<number>; offset: string; limit: number }) {
    super();
    this.call = params.call;
    this.ids = params.ids;
    this.sources = params.sources;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class phone_checkGroupCall extends Function<number[]> {
  call: types.InputGroupCall;
  sources: Array<number>;

  protected get [id]() {
    return 0xB59CF977;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types._InputGroupCall, "InputGroupCall"],
      ["sources", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types._InputGroupCall, "InputGroupCall"],
      [this.sources, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { call: types.InputGroupCall; sources: Array<number> }) {
    super();
    this.call = params.call;
    this.sources = params.sources;
  }
}

export class phone_toggleGroupCallRecord extends Function<types.Updates> {
  start?: true;
  video?: true;
  call: types.InputGroupCall;
  title?: string;
  video_portrait?: boolean;

  protected get [id]() {
    return 0xF128C708;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["start", "true", "flags.0?true"],
      ["video", "true", "flags.2?true"],
      ["call", types._InputGroupCall, "InputGroupCall"],
      ["title", "string", "flags.1?string"],
      ["video_portrait", "boolean", "flags.2?Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.start ?? null, "true", "flags.0?true"],
      [this.video ?? null, "true", "flags.2?true"],
      [this.call, types._InputGroupCall, "InputGroupCall"],
      [this.title ?? null, "string", "flags.1?string"],
      [this.video_portrait ?? null, "boolean", "flags.2?Bool"],
    ];
  }

  constructor(params: { start?: true; video?: true; call: types.InputGroupCall; title?: string; video_portrait?: boolean }) {
    super();
    this.start = params.start;
    this.video = params.video;
    this.call = params.call;
    this.title = params.title;
    this.video_portrait = params.video_portrait;
  }
}

export class phone_editGroupCallParticipant extends Function<types.Updates> {
  call: types.InputGroupCall;
  participant: types.InputPeer;
  muted?: boolean;
  volume?: number;
  raise_hand?: boolean;
  video_stopped?: boolean;
  video_paused?: boolean;
  presentation_paused?: boolean;

  protected get [id]() {
    return 0xA5273ABF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["call", types._InputGroupCall, "InputGroupCall"],
      ["participant", types._InputPeer, "InputPeer"],
      ["muted", "boolean", "flags.0?Bool"],
      ["volume", "number", "flags.1?int"],
      ["raise_hand", "boolean", "flags.2?Bool"],
      ["video_stopped", "boolean", "flags.3?Bool"],
      ["video_paused", "boolean", "flags.4?Bool"],
      ["presentation_paused", "boolean", "flags.5?Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.call, types._InputGroupCall, "InputGroupCall"],
      [this.participant, types._InputPeer, "InputPeer"],
      [this.muted ?? null, "boolean", "flags.0?Bool"],
      [this.volume ?? null, "number", "flags.1?int"],
      [this.raise_hand ?? null, "boolean", "flags.2?Bool"],
      [this.video_stopped ?? null, "boolean", "flags.3?Bool"],
      [this.video_paused ?? null, "boolean", "flags.4?Bool"],
      [this.presentation_paused ?? null, "boolean", "flags.5?Bool"],
    ];
  }

  constructor(params: { call: types.InputGroupCall; participant: types.InputPeer; muted?: boolean; volume?: number; raise_hand?: boolean; video_stopped?: boolean; video_paused?: boolean; presentation_paused?: boolean }) {
    super();
    this.call = params.call;
    this.participant = params.participant;
    this.muted = params.muted;
    this.volume = params.volume;
    this.raise_hand = params.raise_hand;
    this.video_stopped = params.video_stopped;
    this.video_paused = params.video_paused;
    this.presentation_paused = params.presentation_paused;
  }
}

export class phone_editGroupCallTitle extends Function<types.Updates> {
  call: types.InputGroupCall;
  title: string;

  protected get [id]() {
    return 0x1CA6AC0A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types._InputGroupCall, "InputGroupCall"],
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types._InputGroupCall, "InputGroupCall"],
      [this.title, "string", "string"],
    ];
  }

  constructor(params: { call: types.InputGroupCall; title: string }) {
    super();
    this.call = params.call;
    this.title = params.title;
  }
}

export class phone_getGroupCallJoinAs extends Function<types.phone_JoinAsPeers> {
  peer: types.InputPeer;

  protected get [id]() {
    return 0xEF7C213A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class phone_exportGroupCallInvite extends Function<types.phone_ExportedGroupCallInvite> {
  can_self_unmute?: true;
  call: types.InputGroupCall;

  protected get [id]() {
    return 0xE6AA647F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["can_self_unmute", "true", "flags.0?true"],
      ["call", types._InputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.can_self_unmute ?? null, "true", "flags.0?true"],
      [this.call, types._InputGroupCall, "InputGroupCall"],
    ];
  }

  constructor(params: { can_self_unmute?: true; call: types.InputGroupCall }) {
    super();
    this.can_self_unmute = params.can_self_unmute;
    this.call = params.call;
  }
}

export class phone_toggleGroupCallStartSubscription extends Function<types.Updates> {
  call: types.InputGroupCall;
  subscribed: boolean;

  protected get [id]() {
    return 0x219C34E6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types._InputGroupCall, "InputGroupCall"],
      ["subscribed", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types._InputGroupCall, "InputGroupCall"],
      [this.subscribed, "boolean", "Bool"],
    ];
  }

  constructor(params: { call: types.InputGroupCall; subscribed: boolean }) {
    super();
    this.call = params.call;
    this.subscribed = params.subscribed;
  }
}

export class phone_startScheduledGroupCall extends Function<types.Updates> {
  call: types.InputGroupCall;

  protected get [id]() {
    return 0x5680E342;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types._InputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types._InputGroupCall, "InputGroupCall"],
    ];
  }

  constructor(params: { call: types.InputGroupCall }) {
    super();
    this.call = params.call;
  }
}

export class phone_saveDefaultGroupCallJoinAs extends Function<boolean> {
  peer: types.InputPeer;
  join_as: types.InputPeer;

  protected get [id]() {
    return 0x575E1F8C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["join_as", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.join_as, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.InputPeer; join_as: types.InputPeer }) {
    super();
    this.peer = params.peer;
    this.join_as = params.join_as;
  }
}

export class phone_joinGroupCallPresentation extends Function<types.Updates> {
  call: types.InputGroupCall;
  params: types.DataJSON;

  protected get [id]() {
    return 0xCBEA6BC4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types._InputGroupCall, "InputGroupCall"],
      ["params", types._DataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types._InputGroupCall, "InputGroupCall"],
      [this.params, types._DataJSON, "DataJSON"],
    ];
  }

  constructor(params: { call: types.InputGroupCall; params: types.DataJSON }) {
    super();
    this.call = params.call;
    this.params = params.params;
  }
}

export class phone_leaveGroupCallPresentation extends Function<types.Updates> {
  call: types.InputGroupCall;

  protected get [id]() {
    return 0x1C50D144;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types._InputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types._InputGroupCall, "InputGroupCall"],
    ];
  }

  constructor(params: { call: types.InputGroupCall }) {
    super();
    this.call = params.call;
  }
}

export class phone_getGroupCallStreamChannels extends Function<types.phone_GroupCallStreamChannels> {
  call: types.InputGroupCall;

  protected get [id]() {
    return 0x1AB21940;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types._InputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types._InputGroupCall, "InputGroupCall"],
    ];
  }

  constructor(params: { call: types.InputGroupCall }) {
    super();
    this.call = params.call;
  }
}

export class phone_getGroupCallStreamRtmpUrl extends Function<types.phone_GroupCallStreamRtmpUrl> {
  peer: types.InputPeer;
  revoke: boolean;

  protected get [id]() {
    return 0xDEB3ABBF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["revoke", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.revoke, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: types.InputPeer; revoke: boolean }) {
    super();
    this.peer = params.peer;
    this.revoke = params.revoke;
  }
}

export class phone_saveCallLog extends Function<boolean> {
  peer: types.InputPhoneCall;
  file: types.InputFile;

  protected get [id]() {
    return 0x41248786;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPhoneCall, "InputPhoneCall"],
      ["file", types._InputFile, "InputFile"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPhoneCall, "InputPhoneCall"],
      [this.file, types._InputFile, "InputFile"],
    ];
  }

  constructor(params: { peer: types.InputPhoneCall; file: types.InputFile }) {
    super();
    this.peer = params.peer;
    this.file = params.file;
  }
}

export class langpack_getLangPack extends Function<types.LangPackDifference> {
  lang_pack: string;
  lang_code: string;

  protected get [id]() {
    return 0xF2F2330A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["lang_pack", "string", "string"],
      ["lang_code", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.lang_pack, "string", "string"],
      [this.lang_code, "string", "string"],
    ];
  }

  constructor(params: { lang_pack: string; lang_code: string }) {
    super();
    this.lang_pack = params.lang_pack;
    this.lang_code = params.lang_code;
  }
}

export class langpack_getStrings extends Function<types.LangPackString[]> {
  lang_pack: string;
  lang_code: string;
  keys: Array<string>;

  protected get [id]() {
    return 0xEFEA3803;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["lang_pack", "string", "string"],
      ["lang_code", "string", "string"],
      ["keys", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.lang_pack, "string", "string"],
      [this.lang_code, "string", "string"],
      [this.keys, ["string"], "Vector<string>"],
    ];
  }

  constructor(params: { lang_pack: string; lang_code: string; keys: Array<string> }) {
    super();
    this.lang_pack = params.lang_pack;
    this.lang_code = params.lang_code;
    this.keys = params.keys;
  }
}

export class langpack_getDifference extends Function<types.LangPackDifference> {
  lang_pack: string;
  lang_code: string;
  from_version: number;

  protected get [id]() {
    return 0xCD984AA5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["lang_pack", "string", "string"],
      ["lang_code", "string", "string"],
      ["from_version", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.lang_pack, "string", "string"],
      [this.lang_code, "string", "string"],
      [this.from_version, "number", "int"],
    ];
  }

  constructor(params: { lang_pack: string; lang_code: string; from_version: number }) {
    super();
    this.lang_pack = params.lang_pack;
    this.lang_code = params.lang_code;
    this.from_version = params.from_version;
  }
}

export class langpack_getLanguages extends Function<types.LangPackLanguage[]> {
  lang_pack: string;

  protected get [id]() {
    return 0x42C6978F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["lang_pack", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.lang_pack, "string", "string"],
    ];
  }

  constructor(params: { lang_pack: string }) {
    super();
    this.lang_pack = params.lang_pack;
  }
}

export class langpack_getLanguage extends Function<types.LangPackLanguage> {
  lang_pack: string;
  lang_code: string;

  protected get [id]() {
    return 0x6A596502;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["lang_pack", "string", "string"],
      ["lang_code", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.lang_pack, "string", "string"],
      [this.lang_code, "string", "string"],
    ];
  }

  constructor(params: { lang_pack: string; lang_code: string }) {
    super();
    this.lang_pack = params.lang_pack;
    this.lang_code = params.lang_code;
  }
}

export class folders_editPeerFolders extends Function<types.Updates> {
  folder_peers: Array<types.InputFolderPeer>;

  protected get [id]() {
    return 0x6847D0AB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["folder_peers", [types._InputFolderPeer], "Vector<InputFolderPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.folder_peers, [types._InputFolderPeer], "Vector<InputFolderPeer>"],
    ];
  }

  constructor(params: { folder_peers: Array<types.InputFolderPeer> }) {
    super();
    this.folder_peers = params.folder_peers;
  }
}

export class stats_getBroadcastStats extends Function<types.stats_BroadcastStats> {
  dark?: true;
  channel: types.InputChannel;

  protected get [id]() {
    return 0xAB42441A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["dark", "true", "flags.0?true"],
      ["channel", types._InputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.dark ?? null, "true", "flags.0?true"],
      [this.channel, types._InputChannel, "InputChannel"],
    ];
  }

  constructor(params: { dark?: true; channel: types.InputChannel }) {
    super();
    this.dark = params.dark;
    this.channel = params.channel;
  }
}

export class stats_loadAsyncGraph extends Function<types.StatsGraph> {
  token: string;
  x?: bigint;

  protected get [id]() {
    return 0x621D5FA0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["token", "string", "string"],
      ["x", "bigint", "flags.0?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.token, "string", "string"],
      [this.x ?? null, "bigint", "flags.0?long"],
    ];
  }

  constructor(params: { token: string; x?: bigint }) {
    super();
    this.token = params.token;
    this.x = params.x;
  }
}

export class stats_getMegagroupStats extends Function<types.stats_MegagroupStats> {
  dark?: true;
  channel: types.InputChannel;

  protected get [id]() {
    return 0xDCDF8607;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["dark", "true", "flags.0?true"],
      ["channel", types._InputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.dark ?? null, "true", "flags.0?true"],
      [this.channel, types._InputChannel, "InputChannel"],
    ];
  }

  constructor(params: { dark?: true; channel: types.InputChannel }) {
    super();
    this.dark = params.dark;
    this.channel = params.channel;
  }
}

export class stats_getMessagePublicForwards extends Function<types.messages_Messages> {
  channel: types.InputChannel;
  msg_id: number;
  offset_rate: number;
  offset_peer: types.InputPeer;
  offset_id: number;
  limit: number;

  protected get [id]() {
    return 0x5630281B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["msg_id", "number", "int"],
      ["offset_rate", "number", "int"],
      ["offset_peer", types._InputPeer, "InputPeer"],
      ["offset_id", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.msg_id, "number", "int"],
      [this.offset_rate, "number", "int"],
      [this.offset_peer, types._InputPeer, "InputPeer"],
      [this.offset_id, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { channel: types.InputChannel; msg_id: number; offset_rate: number; offset_peer: types.InputPeer; offset_id: number; limit: number }) {
    super();
    this.channel = params.channel;
    this.msg_id = params.msg_id;
    this.offset_rate = params.offset_rate;
    this.offset_peer = params.offset_peer;
    this.offset_id = params.offset_id;
    this.limit = params.limit;
  }
}

export class stats_getMessageStats extends Function<types.stats_MessageStats> {
  dark?: true;
  channel: types.InputChannel;
  msg_id: number;

  protected get [id]() {
    return 0xB6E0A3F5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["dark", "true", "flags.0?true"],
      ["channel", types._InputChannel, "InputChannel"],
      ["msg_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.dark ?? null, "true", "flags.0?true"],
      [this.channel, types._InputChannel, "InputChannel"],
      [this.msg_id, "number", "int"],
    ];
  }

  constructor(params: { dark?: true; channel: types.InputChannel; msg_id: number }) {
    super();
    this.dark = params.dark;
    this.channel = params.channel;
    this.msg_id = params.msg_id;
  }
}

export class stats_getStoryStats extends Function<types.stats_StoryStats> {
  dark?: true;
  peer: types.InputPeer;
  id: number;

  protected get [id]() {
    return 0x374FEF40;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["dark", "true", "flags.0?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.dark ?? null, "true", "flags.0?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, "number", "int"],
    ];
  }

  constructor(params: { dark?: true; peer: types.InputPeer; id: number }) {
    super();
    this.dark = params.dark;
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class stats_getStoryPublicForwards extends Function<types.stats_PublicForwards> {
  peer: types.InputPeer;
  id: number;
  offset: string;
  limit: number;

  protected get [id]() {
    return 0xA6437EF6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["offset", "string", "string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.offset, "string", "string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: number; offset: string; limit: number }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class chatlists_exportChatlistInvite extends Function<types.chatlists_ExportedChatlistInvite> {
  chatlist: types.InputChatlist;
  title: string;
  peers: Array<types.InputPeer>;

  protected get [id]() {
    return 0x8472478E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatlist", types._InputChatlist, "InputChatlist"],
      ["title", "string", "string"],
      ["peers", [types._InputPeer], "Vector<InputPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatlist, types._InputChatlist, "InputChatlist"],
      [this.title, "string", "string"],
      [this.peers, [types._InputPeer], "Vector<InputPeer>"],
    ];
  }

  constructor(params: { chatlist: types.InputChatlist; title: string; peers: Array<types.InputPeer> }) {
    super();
    this.chatlist = params.chatlist;
    this.title = params.title;
    this.peers = params.peers;
  }
}

export class chatlists_deleteExportedInvite extends Function<boolean> {
  chatlist: types.InputChatlist;
  slug: string;

  protected get [id]() {
    return 0x719C5C5E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatlist", types._InputChatlist, "InputChatlist"],
      ["slug", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatlist, types._InputChatlist, "InputChatlist"],
      [this.slug, "string", "string"],
    ];
  }

  constructor(params: { chatlist: types.InputChatlist; slug: string }) {
    super();
    this.chatlist = params.chatlist;
    this.slug = params.slug;
  }
}

export class chatlists_editExportedInvite extends Function<types.ExportedChatlistInvite> {
  chatlist: types.InputChatlist;
  slug: string;
  title?: string;
  peers?: Array<types.InputPeer>;

  protected get [id]() {
    return 0x653DB63D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["chatlist", types._InputChatlist, "InputChatlist"],
      ["slug", "string", "string"],
      ["title", "string", "flags.1?string"],
      ["peers", [types._InputPeer], "flags.2?Vector<InputPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.chatlist, types._InputChatlist, "InputChatlist"],
      [this.slug, "string", "string"],
      [this.title ?? null, "string", "flags.1?string"],
      [this.peers ?? null, [types._InputPeer], "flags.2?Vector<InputPeer>"],
    ];
  }

  constructor(params: { chatlist: types.InputChatlist; slug: string; title?: string; peers?: Array<types.InputPeer> }) {
    super();
    this.chatlist = params.chatlist;
    this.slug = params.slug;
    this.title = params.title;
    this.peers = params.peers;
  }
}

export class chatlists_getExportedInvites extends Function<types.chatlists_ExportedInvites> {
  chatlist: types.InputChatlist;

  protected get [id]() {
    return 0xCE03DA83;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatlist", types._InputChatlist, "InputChatlist"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatlist, types._InputChatlist, "InputChatlist"],
    ];
  }

  constructor(params: { chatlist: types.InputChatlist }) {
    super();
    this.chatlist = params.chatlist;
  }
}

export class chatlists_checkChatlistInvite extends Function<types.chatlists_ChatlistInvite> {
  slug: string;

  protected get [id]() {
    return 0x41C10FFF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["slug", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.slug, "string", "string"],
    ];
  }

  constructor(params: { slug: string }) {
    super();
    this.slug = params.slug;
  }
}

export class chatlists_joinChatlistInvite extends Function<types.Updates> {
  slug: string;
  peers: Array<types.InputPeer>;

  protected get [id]() {
    return 0xA6B1E39A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["slug", "string", "string"],
      ["peers", [types._InputPeer], "Vector<InputPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.slug, "string", "string"],
      [this.peers, [types._InputPeer], "Vector<InputPeer>"],
    ];
  }

  constructor(params: { slug: string; peers: Array<types.InputPeer> }) {
    super();
    this.slug = params.slug;
    this.peers = params.peers;
  }
}

export class chatlists_getChatlistUpdates extends Function<types.chatlists_ChatlistUpdates> {
  chatlist: types.InputChatlist;

  protected get [id]() {
    return 0x89419521;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatlist", types._InputChatlist, "InputChatlist"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatlist, types._InputChatlist, "InputChatlist"],
    ];
  }

  constructor(params: { chatlist: types.InputChatlist }) {
    super();
    this.chatlist = params.chatlist;
  }
}

export class chatlists_joinChatlistUpdates extends Function<types.Updates> {
  chatlist: types.InputChatlist;
  peers: Array<types.InputPeer>;

  protected get [id]() {
    return 0xE089F8F5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatlist", types._InputChatlist, "InputChatlist"],
      ["peers", [types._InputPeer], "Vector<InputPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatlist, types._InputChatlist, "InputChatlist"],
      [this.peers, [types._InputPeer], "Vector<InputPeer>"],
    ];
  }

  constructor(params: { chatlist: types.InputChatlist; peers: Array<types.InputPeer> }) {
    super();
    this.chatlist = params.chatlist;
    this.peers = params.peers;
  }
}

export class chatlists_hideChatlistUpdates extends Function<boolean> {
  chatlist: types.InputChatlist;

  protected get [id]() {
    return 0x66E486FB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatlist", types._InputChatlist, "InputChatlist"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatlist, types._InputChatlist, "InputChatlist"],
    ];
  }

  constructor(params: { chatlist: types.InputChatlist }) {
    super();
    this.chatlist = params.chatlist;
  }
}

export class chatlists_getLeaveChatlistSuggestions extends Function<types.Peer[]> {
  chatlist: types.InputChatlist;

  protected get [id]() {
    return 0xFDBCD714;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatlist", types._InputChatlist, "InputChatlist"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatlist, types._InputChatlist, "InputChatlist"],
    ];
  }

  constructor(params: { chatlist: types.InputChatlist }) {
    super();
    this.chatlist = params.chatlist;
  }
}

export class chatlists_leaveChatlist extends Function<types.Updates> {
  chatlist: types.InputChatlist;
  peers: Array<types.InputPeer>;

  protected get [id]() {
    return 0x74FAE13A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatlist", types._InputChatlist, "InputChatlist"],
      ["peers", [types._InputPeer], "Vector<InputPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatlist, types._InputChatlist, "InputChatlist"],
      [this.peers, [types._InputPeer], "Vector<InputPeer>"],
    ];
  }

  constructor(params: { chatlist: types.InputChatlist; peers: Array<types.InputPeer> }) {
    super();
    this.chatlist = params.chatlist;
    this.peers = params.peers;
  }
}

export class stories_canSendStory extends Function<boolean> {
  peer: types.InputPeer;

  protected get [id]() {
    return 0xC7DFDFDD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class stories_sendStory extends Function<types.Updates> {
  pinned?: true;
  noforwards?: true;
  fwd_modified?: true;
  peer: types.InputPeer;
  media: types.InputMedia;
  media_areas?: Array<types.MediaArea>;
  caption?: string;
  entities?: Array<types.MessageEntity>;
  privacy_rules: Array<types.InputPrivacyRule>;
  random_id: bigint;
  period?: number;
  fwd_from_id?: types.InputPeer;
  fwd_from_story?: number;

  protected get [id]() {
    return 0xE4E6694B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pinned", "true", "flags.2?true"],
      ["noforwards", "true", "flags.4?true"],
      ["fwd_modified", "true", "flags.7?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["media", types._InputMedia, "InputMedia"],
      ["media_areas", [types._MediaArea], "flags.5?Vector<MediaArea>"],
      ["caption", "string", "flags.0?string"],
      ["entities", [types._MessageEntity], "flags.1?Vector<MessageEntity>"],
      ["privacy_rules", [types._InputPrivacyRule], "Vector<InputPrivacyRule>"],
      ["random_id", "bigint", "long"],
      ["period", "number", "flags.3?int"],
      ["fwd_from_id", types._InputPeer, "flags.6?InputPeer"],
      ["fwd_from_story", "number", "flags.6?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pinned ?? null, "true", "flags.2?true"],
      [this.noforwards ?? null, "true", "flags.4?true"],
      [this.fwd_modified ?? null, "true", "flags.7?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.media, types._InputMedia, "InputMedia"],
      [this.media_areas ?? null, [types._MediaArea], "flags.5?Vector<MediaArea>"],
      [this.caption ?? null, "string", "flags.0?string"],
      [this.entities ?? null, [types._MessageEntity], "flags.1?Vector<MessageEntity>"],
      [this.privacy_rules, [types._InputPrivacyRule], "Vector<InputPrivacyRule>"],
      [this.random_id, "bigint", "long"],
      [this.period ?? null, "number", "flags.3?int"],
      [this.fwd_from_id ?? null, types._InputPeer, "flags.6?InputPeer"],
      [this.fwd_from_story ?? null, "number", "flags.6?int"],
    ];
  }

  constructor(params: { pinned?: true; noforwards?: true; fwd_modified?: true; peer: types.InputPeer; media: types.InputMedia; media_areas?: Array<types.MediaArea>; caption?: string; entities?: Array<types.MessageEntity>; privacy_rules: Array<types.InputPrivacyRule>; random_id: bigint; period?: number; fwd_from_id?: types.InputPeer; fwd_from_story?: number }) {
    super();
    this.pinned = params.pinned;
    this.noforwards = params.noforwards;
    this.fwd_modified = params.fwd_modified;
    this.peer = params.peer;
    this.media = params.media;
    this.media_areas = params.media_areas;
    this.caption = params.caption;
    this.entities = params.entities;
    this.privacy_rules = params.privacy_rules;
    this.random_id = params.random_id;
    this.period = params.period;
    this.fwd_from_id = params.fwd_from_id;
    this.fwd_from_story = params.fwd_from_story;
  }
}

export class stories_editStory extends Function<types.Updates> {
  peer: types.InputPeer;
  id: number;
  media?: types.InputMedia;
  media_areas?: Array<types.MediaArea>;
  caption?: string;
  entities?: Array<types.MessageEntity>;
  privacy_rules?: Array<types.InputPrivacyRule>;

  protected get [id]() {
    return 0xB583BA46;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["media", types._InputMedia, "flags.0?InputMedia"],
      ["media_areas", [types._MediaArea], "flags.3?Vector<MediaArea>"],
      ["caption", "string", "flags.1?string"],
      ["entities", [types._MessageEntity], "flags.1?Vector<MessageEntity>"],
      ["privacy_rules", [types._InputPrivacyRule], "flags.2?Vector<InputPrivacyRule>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.media ?? null, types._InputMedia, "flags.0?InputMedia"],
      [this.media_areas ?? null, [types._MediaArea], "flags.3?Vector<MediaArea>"],
      [this.caption ?? null, "string", "flags.1?string"],
      [this.entities ?? null, [types._MessageEntity], "flags.1?Vector<MessageEntity>"],
      [this.privacy_rules ?? null, [types._InputPrivacyRule], "flags.2?Vector<InputPrivacyRule>"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: number; media?: types.InputMedia; media_areas?: Array<types.MediaArea>; caption?: string; entities?: Array<types.MessageEntity>; privacy_rules?: Array<types.InputPrivacyRule> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.media = params.media;
    this.media_areas = params.media_areas;
    this.caption = params.caption;
    this.entities = params.entities;
    this.privacy_rules = params.privacy_rules;
  }
}

export class stories_deleteStories extends Function<number[]> {
  peer: types.InputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0xAE59DB5F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class stories_togglePinned extends Function<number[]> {
  peer: types.InputPeer;
  id: Array<number>;
  pinned: boolean;

  protected get [id]() {
    return 0x9A75A1EF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
      ["pinned", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
      [this.pinned, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: Array<number>; pinned: boolean }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.pinned = params.pinned;
  }
}

export class stories_getAllStories extends Function<types.stories_AllStories> {
  next?: true;
  hidden?: true;
  state?: string;

  protected get [id]() {
    return 0xEEB0D625;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["next", "true", "flags.1?true"],
      ["hidden", "true", "flags.2?true"],
      ["state", "string", "flags.0?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.next ?? null, "true", "flags.1?true"],
      [this.hidden ?? null, "true", "flags.2?true"],
      [this.state ?? null, "string", "flags.0?string"],
    ];
  }

  constructor(params?: { next?: true; hidden?: true; state?: string }) {
    super();
    this.next = params?.next;
    this.hidden = params?.hidden;
    this.state = params?.state;
  }
}

export class stories_getPinnedStories extends Function<types.stories_Stories> {
  peer: types.InputPeer;
  offset_id: number;
  limit: number;

  protected get [id]() {
    return 0x5821A5DC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["offset_id", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.offset_id, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; offset_id: number; limit: number }) {
    super();
    this.peer = params.peer;
    this.offset_id = params.offset_id;
    this.limit = params.limit;
  }
}

export class stories_getStoriesArchive extends Function<types.stories_Stories> {
  peer: types.InputPeer;
  offset_id: number;
  limit: number;

  protected get [id]() {
    return 0xB4352016;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["offset_id", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.offset_id, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; offset_id: number; limit: number }) {
    super();
    this.peer = params.peer;
    this.offset_id = params.offset_id;
    this.limit = params.limit;
  }
}

export class stories_getStoriesByID extends Function<types.stories_Stories> {
  peer: types.InputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0x5774CA74;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class stories_toggleAllStoriesHidden extends Function<boolean> {
  hidden: boolean;

  protected get [id]() {
    return 0x7C2557C4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hidden", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hidden, "boolean", "Bool"],
    ];
  }

  constructor(params: { hidden: boolean }) {
    super();
    this.hidden = params.hidden;
  }
}

export class stories_readStories extends Function<number[]> {
  peer: types.InputPeer;
  max_id: number;

  protected get [id]() {
    return 0xA556DAC8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["max_id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.max_id, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; max_id: number }) {
    super();
    this.peer = params.peer;
    this.max_id = params.max_id;
  }
}

export class stories_incrementStoryViews extends Function<boolean> {
  peer: types.InputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0xB2028AFB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class stories_getStoryViewsList extends Function<types.stories_StoryViewsList> {
  just_contacts?: true;
  reactions_first?: true;
  peer: types.InputPeer;
  q?: string;
  id: number;
  offset: string;
  limit: number;

  protected get [id]() {
    return 0x7ED23C57;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["just_contacts", "true", "flags.0?true"],
      ["reactions_first", "true", "flags.2?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["q", "string", "flags.1?string"],
      ["id", "number", "int"],
      ["offset", "string", "string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.just_contacts ?? null, "true", "flags.0?true"],
      [this.reactions_first ?? null, "true", "flags.2?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.q ?? null, "string", "flags.1?string"],
      [this.id, "number", "int"],
      [this.offset, "string", "string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { just_contacts?: true; reactions_first?: true; peer: types.InputPeer; q?: string; id: number; offset: string; limit: number }) {
    super();
    this.just_contacts = params.just_contacts;
    this.reactions_first = params.reactions_first;
    this.peer = params.peer;
    this.q = params.q;
    this.id = params.id;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class stories_getStoriesViews extends Function<types.stories_StoryViews> {
  peer: types.InputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0x28E16CC8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class stories_exportStoryLink extends Function<types.ExportedStoryLink> {
  peer: types.InputPeer;
  id: number;

  protected get [id]() {
    return 0x7B8DEF20;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, "number", "int"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: number }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class stories_report extends Function<boolean> {
  peer: types.InputPeer;
  id: Array<number>;
  reason: types.ReportReason;
  message: string;

  protected get [id]() {
    return 0x1923FA8C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
      ["reason", types._ReportReason, "ReportReason"],
      ["message", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
      [this.reason, types._ReportReason, "ReportReason"],
      [this.message, "string", "string"],
    ];
  }

  constructor(params: { peer: types.InputPeer; id: Array<number>; reason: types.ReportReason; message: string }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.reason = params.reason;
    this.message = params.message;
  }
}

export class stories_activateStealthMode extends Function<types.Updates> {
  past?: true;
  future?: true;

  protected get [id]() {
    return 0x57BBD166;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["past", "true", "flags.0?true"],
      ["future", "true", "flags.1?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.past ?? null, "true", "flags.0?true"],
      [this.future ?? null, "true", "flags.1?true"],
    ];
  }

  constructor(params?: { past?: true; future?: true }) {
    super();
    this.past = params?.past;
    this.future = params?.future;
  }
}

export class stories_sendReaction extends Function<types.Updates> {
  add_to_recent?: true;
  peer: types.InputPeer;
  story_id: number;
  reaction: types.Reaction;

  protected get [id]() {
    return 0x7FD736B2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["add_to_recent", "true", "flags.0?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["story_id", "number", "int"],
      ["reaction", types._Reaction, "Reaction"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.add_to_recent ?? null, "true", "flags.0?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.story_id, "number", "int"],
      [this.reaction, types._Reaction, "Reaction"],
    ];
  }

  constructor(params: { add_to_recent?: true; peer: types.InputPeer; story_id: number; reaction: types.Reaction }) {
    super();
    this.add_to_recent = params.add_to_recent;
    this.peer = params.peer;
    this.story_id = params.story_id;
    this.reaction = params.reaction;
  }
}

export class stories_getPeerStories extends Function<types.stories_PeerStories> {
  peer: types.InputPeer;

  protected get [id]() {
    return 0x2C4ADA50;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class stories_getAllReadPeerStories extends Function<types.Updates> {
  protected get [id]() {
    return 0x9B5AE7F9;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class stories_getPeerMaxIDs extends Function<number[]> {
  id: Array<types.InputPeer>;

  protected get [id]() {
    return 0x535983C3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [types._InputPeer], "Vector<InputPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [types._InputPeer], "Vector<InputPeer>"],
    ];
  }

  constructor(params: { id: Array<types.InputPeer> }) {
    super();
    this.id = params.id;
  }
}

export class stories_getChatsToSend extends Function<types.messages_Chats> {
  protected get [id]() {
    return 0xA56A8B60;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class stories_togglePeerStoriesHidden extends Function<boolean> {
  peer: types.InputPeer;
  hidden: boolean;

  protected get [id]() {
    return 0xBD0415C4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["hidden", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.hidden, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: types.InputPeer; hidden: boolean }) {
    super();
    this.peer = params.peer;
    this.hidden = params.hidden;
  }
}

export class premium_getBoostsList extends Function<types.premium_BoostsList> {
  gifts?: true;
  peer: types.InputPeer;
  offset: string;
  limit: number;

  protected get [id]() {
    return 0x60F67660;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["gifts", "true", "flags.0?true"],
      ["peer", types._InputPeer, "InputPeer"],
      ["offset", "string", "string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.gifts ?? null, "true", "flags.0?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.offset, "string", "string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { gifts?: true; peer: types.InputPeer; offset: string; limit: number }) {
    super();
    this.gifts = params.gifts;
    this.peer = params.peer;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class premium_getMyBoosts extends Function<types.premium_MyBoosts> {
  protected get [id]() {
    return 0x0BE77B4A;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class premium_applyBoost extends Function<types.premium_MyBoosts> {
  slots?: Array<number>;
  peer: types.InputPeer;

  protected get [id]() {
    return 0x6B7DA746;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["slots", ["number"], "flags.0?Vector<int>"],
      ["peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.slots ?? null, ["number"], "flags.0?Vector<int>"],
      [this.peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { slots?: Array<number>; peer: types.InputPeer }) {
    super();
    this.slots = params.slots;
    this.peer = params.peer;
  }
}

export class premium_getBoostsStatus extends Function<types.premium_BoostsStatus> {
  peer: types.InputPeer;

  protected get [id]() {
    return 0x042F1F61;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class premium_getUserBoosts extends Function<types.premium_BoostsList> {
  peer: types.InputPeer;
  user_id: types.InputUser;

  protected get [id]() {
    return 0x39854D1F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["user_id", types._InputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.user_id, types._InputUser, "InputUser"],
    ];
  }

  constructor(params: { peer: types.InputPeer; user_id: types.InputUser }) {
    super();
    this.peer = params.peer;
    this.user_id = params.user_id;
  }
}

