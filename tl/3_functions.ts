// deno-fmt-ignore-file
import { id, params, TLObject, Params, paramDesc, ParamDesc, flags } from "./1_tl_object.ts";
import { types, enums } from "./2_types.ts";

abstract class Function_<T> extends TLObject {
  __R: T = Symbol() as unknown as T; // virtual member
}

class req_pq_multi_ extends Function_<enums.ResPQ> {
  static __F = Symbol() as unknown as (params: { nonce: bigint }) => enums.ResPQ;
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

class req_DH_params_ extends Function_<enums.Server_DH_Params> {
  static __F = Symbol() as unknown as (params: { nonce: bigint; server_nonce: bigint; p: Uint8Array; q: Uint8Array; public_key_fingerprint: bigint; encrypted_data: Uint8Array }) => enums.Server_DH_Params;
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

class set_client_DH_params_ extends Function_<enums.Set_client_DH_params_answer> {
  static __F = Symbol() as unknown as (params: { nonce: bigint; server_nonce: bigint; encrypted_data: Uint8Array }) => enums.Set_client_DH_params_answer;
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

class rpc_drop_answer_ extends Function_<enums.RpcDropAnswer> {
  static __F = Symbol() as unknown as (params: { req_msg_id: bigint }) => enums.RpcDropAnswer;
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

class get_future_salts_ extends Function_<enums.FutureSalts> {
  static __F = Symbol() as unknown as (params: { num: number }) => enums.FutureSalts;
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

class ping_ extends Function_<enums.Pong> {
  static __F = Symbol() as unknown as (params: { ping_id: bigint }) => enums.Pong;
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

class ping_delay_disconnect_ extends Function_<enums.Pong> {
  static __F = Symbol() as unknown as (params: { ping_id: bigint; disconnect_delay: number }) => enums.Pong;
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

class destroy_session_ extends Function_<enums.DestroySessionRes> {
  static __F = Symbol() as unknown as (params: { session_id: bigint }) => enums.DestroySessionRes;
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

class destroy_auth_key_ extends Function_<enums.DestroyAuthKeyRes> {
  static __F = Symbol() as unknown as () => enums.DestroyAuthKeyRes;
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

class invokeAfterMsg_<T extends Function_<unknown>> extends Function_<T["__R"]> {
  static __F = Symbol() as unknown as <T extends Function_<unknown>>(params: { msg_id: bigint; query: T }) => T["__R"];
  msg_id: bigint;
  query: T;

  protected get [id]() {
    return 0xCB9F372D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msg_id", "bigint", "long"],
      ["query", types["TypeX"], "!X"],
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

class invokeAfterMsgs_<T extends Function_<unknown>> extends Function_<T["__R"]> {
  static __F = Symbol() as unknown as <T extends Function_<unknown>>(params: { msg_ids: Array<bigint>; query: T }) => T["__R"];
  msg_ids: Array<bigint>;
  query: T;

  protected get [id]() {
    return 0x3DC4B4F0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msg_ids", ["bigint"], "Vector<long>"],
      ["query", types["TypeX"], "!X"],
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

class initConnection_<T extends Function_<unknown>> extends Function_<T["__R"]> {
  static __F = Symbol() as unknown as <T extends Function_<unknown>>(params: { api_id: number; device_model: string; system_version: string; app_version: string; system_lang_code: string; lang_pack: string; lang_code: string; proxy?: enums.InputClientProxy; params?: enums.JSONValue; query: T }) => T["__R"];
  api_id: number;
  device_model: string;
  system_version: string;
  app_version: string;
  system_lang_code: string;
  lang_pack: string;
  lang_code: string;
  proxy?: enums.InputClientProxy;
  params?: enums.JSONValue;
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
      ["query", types["TypeX"], "!X"],
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

  constructor(params: { api_id: number; device_model: string; system_version: string; app_version: string; system_lang_code: string; lang_pack: string; lang_code: string; proxy?: enums.InputClientProxy; params?: enums.JSONValue; query: T }) {
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

class invokeWithLayer_<T extends Function_<unknown>> extends Function_<T["__R"]> {
  static __F = Symbol() as unknown as <T extends Function_<unknown>>(params: { layer: number; query: T }) => T["__R"];
  layer: number;
  query: T;

  protected get [id]() {
    return 0xDA9B0D0D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["layer", "number", "int"],
      ["query", types["TypeX"], "!X"],
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

class invokeWithoutUpdates_<T extends Function_<unknown>> extends Function_<T["__R"]> {
  static __F = Symbol() as unknown as <T extends Function_<unknown>>(params: { query: T }) => T["__R"];
  query: T;

  protected get [id]() {
    return 0xBF9459B7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["query", types["TypeX"], "!X"],
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

class invokeWithMessagesRange_<T extends Function_<unknown>> extends Function_<T["__R"]> {
  static __F = Symbol() as unknown as <T extends Function_<unknown>>(params: { range: enums.MessageRange; query: T }) => T["__R"];
  range: enums.MessageRange;
  query: T;

  protected get [id]() {
    return 0x365275F2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["range", types._MessageRange, "MessageRange"],
      ["query", types["TypeX"], "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.range, types._MessageRange, "MessageRange"],
      [this.query, types.TypeX, "!X"],
    ];
  }

  constructor(params: { range: enums.MessageRange; query: T }) {
    super();
    this.range = params.range;
    this.query = params.query;
  }
}

class invokeWithTakeout_<T extends Function_<unknown>> extends Function_<T["__R"]> {
  static __F = Symbol() as unknown as <T extends Function_<unknown>>(params: { takeout_id: bigint; query: T }) => T["__R"];
  takeout_id: bigint;
  query: T;

  protected get [id]() {
    return 0xACA9FD2E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["takeout_id", "bigint", "long"],
      ["query", types["TypeX"], "!X"],
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

class auth_sendCode_ extends Function_<enums.auth.SentCode> {
  static __F = Symbol() as unknown as (params: { phone_number: string; api_id: number; api_hash: string; settings: enums.CodeSettings }) => enums.auth.SentCode;
  phone_number: string;
  api_id: number;
  api_hash: string;
  settings: enums.CodeSettings;

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

  constructor(params: { phone_number: string; api_id: number; api_hash: string; settings: enums.CodeSettings }) {
    super();
    this.phone_number = params.phone_number;
    this.api_id = params.api_id;
    this.api_hash = params.api_hash;
    this.settings = params.settings;
  }
}

class auth_signUp_ extends Function_<enums.auth.Authorization> {
  static __F = Symbol() as unknown as (params: { phone_number: string; phone_code_hash: string; first_name: string; last_name: string }) => enums.auth.Authorization;
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

class auth_signIn_ extends Function_<enums.auth.Authorization> {
  static __F = Symbol() as unknown as (params: { phone_number: string; phone_code_hash: string; phone_code?: string; email_verification?: enums.EmailVerification }) => enums.auth.Authorization;
  phone_number: string;
  phone_code_hash: string;
  phone_code?: string;
  email_verification?: enums.EmailVerification;

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

  constructor(params: { phone_number: string; phone_code_hash: string; phone_code?: string; email_verification?: enums.EmailVerification }) {
    super();
    this.phone_number = params.phone_number;
    this.phone_code_hash = params.phone_code_hash;
    this.phone_code = params.phone_code;
    this.email_verification = params.email_verification;
  }
}

class auth_logOut_ extends Function_<enums.auth.LoggedOut> {
  static __F = Symbol() as unknown as () => enums.auth.LoggedOut;
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

class auth_resetAuthorizations_ extends Function_<boolean> {
  static __F = Symbol() as unknown as () => boolean;
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

class auth_exportAuthorization_ extends Function_<enums.auth.ExportedAuthorization> {
  static __F = Symbol() as unknown as (params: { dc_id: number }) => enums.auth.ExportedAuthorization;
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

class auth_importAuthorization_ extends Function_<enums.auth.Authorization> {
  static __F = Symbol() as unknown as (params: { id: bigint; bytes: Uint8Array }) => enums.auth.Authorization;
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

class auth_bindTempAuthKey_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { perm_auth_key_id: bigint; nonce: bigint; expires_at: number; encrypted_message: Uint8Array }) => boolean;
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

class auth_importBotAuthorization_ extends Function_<enums.auth.Authorization> {
  static __F = Symbol() as unknown as (params: { flags: number; api_id: number; api_hash: string; bot_auth_token: string }) => enums.auth.Authorization;
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

class auth_checkPassword_ extends Function_<enums.auth.Authorization> {
  static __F = Symbol() as unknown as (params: { password: enums.InputCheckPasswordSRP }) => enums.auth.Authorization;
  password: enums.InputCheckPasswordSRP;

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

  constructor(params: { password: enums.InputCheckPasswordSRP }) {
    super();
    this.password = params.password;
  }
}

class auth_requestPasswordRecovery_ extends Function_<enums.auth.PasswordRecovery> {
  static __F = Symbol() as unknown as () => enums.auth.PasswordRecovery;
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

class auth_recoverPassword_ extends Function_<enums.auth.Authorization> {
  static __F = Symbol() as unknown as (params: { code: string; new_settings?: enums.account.PasswordInputSettings }) => enums.auth.Authorization;
  code: string;
  new_settings?: enums.account.PasswordInputSettings;

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

  constructor(params: { code: string; new_settings?: enums.account.PasswordInputSettings }) {
    super();
    this.code = params.code;
    this.new_settings = params.new_settings;
  }
}

class auth_resendCode_ extends Function_<enums.auth.SentCode> {
  static __F = Symbol() as unknown as (params: { phone_number: string; phone_code_hash: string }) => enums.auth.SentCode;
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

class auth_cancelCode_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { phone_number: string; phone_code_hash: string }) => boolean;
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

class auth_dropTempAuthKeys_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { except_auth_keys: Array<bigint> }) => boolean;
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

class auth_exportLoginToken_ extends Function_<enums.auth.LoginToken> {
  static __F = Symbol() as unknown as (params: { api_id: number; api_hash: string; except_ids: Array<bigint> }) => enums.auth.LoginToken;
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

class auth_importLoginToken_ extends Function_<enums.auth.LoginToken> {
  static __F = Symbol() as unknown as (params: { token: Uint8Array }) => enums.auth.LoginToken;
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

class auth_acceptLoginToken_ extends Function_<enums.Authorization> {
  static __F = Symbol() as unknown as (params: { token: Uint8Array }) => enums.Authorization;
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

class auth_checkRecoveryPassword_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { code: string }) => boolean;
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

class auth_importWebTokenAuthorization_ extends Function_<enums.auth.Authorization> {
  static __F = Symbol() as unknown as (params: { api_id: number; api_hash: string; web_auth_token: string }) => enums.auth.Authorization;
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

class auth_requestFirebaseSms_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { phone_number: string; phone_code_hash: string; safety_net_token?: string; ios_push_secret?: string }) => boolean;
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

class auth_resetLoginEmail_ extends Function_<enums.auth.SentCode> {
  static __F = Symbol() as unknown as (params: { phone_number: string; phone_code_hash: string }) => enums.auth.SentCode;
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

class account_registerDevice_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { no_muted?: true; token_type: number; token: string; app_sandbox: boolean; secret: Uint8Array; other_uids: Array<bigint> }) => boolean;
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

class account_unregisterDevice_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { token_type: number; token: string; other_uids: Array<bigint> }) => boolean;
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

class account_updateNotifySettings_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputNotifyPeer; settings: enums.InputPeerNotifySettings }) => boolean;
  peer: enums.InputNotifyPeer;
  settings: enums.InputPeerNotifySettings;

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

  constructor(params: { peer: enums.InputNotifyPeer; settings: enums.InputPeerNotifySettings }) {
    super();
    this.peer = params.peer;
    this.settings = params.settings;
  }
}

class account_getNotifySettings_ extends Function_<enums.PeerNotifySettings> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputNotifyPeer }) => enums.PeerNotifySettings;
  peer: enums.InputNotifyPeer;

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

  constructor(params: { peer: enums.InputNotifyPeer }) {
    super();
    this.peer = params.peer;
  }
}

class account_resetNotifySettings_ extends Function_<boolean> {
  static __F = Symbol() as unknown as () => boolean;
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

class account_updateProfile_ extends Function_<enums.User> {
  static __F = Symbol() as unknown as (params?: { first_name?: string; last_name?: string; about?: string }) => enums.User;
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

class account_updateStatus_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { offline: boolean }) => boolean;
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

class account_getWallPapers_ extends Function_<enums.account.WallPapers> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.account.WallPapers;
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

class account_reportPeer_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; reason: enums.ReportReason; message: string }) => boolean;
  peer: enums.InputPeer;
  reason: enums.ReportReason;
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

  constructor(params: { peer: enums.InputPeer; reason: enums.ReportReason; message: string }) {
    super();
    this.peer = params.peer;
    this.reason = params.reason;
    this.message = params.message;
  }
}

class account_checkUsername_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { username: string }) => boolean;
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

class account_updateUsername_ extends Function_<enums.User> {
  static __F = Symbol() as unknown as (params: { username: string }) => enums.User;
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

class account_getPrivacy_ extends Function_<enums.account.PrivacyRules> {
  static __F = Symbol() as unknown as (params: { key: enums.InputPrivacyKey }) => enums.account.PrivacyRules;
  key: enums.InputPrivacyKey;

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

  constructor(params: { key: enums.InputPrivacyKey }) {
    super();
    this.key = params.key;
  }
}

class account_setPrivacy_ extends Function_<enums.account.PrivacyRules> {
  static __F = Symbol() as unknown as (params: { key: enums.InputPrivacyKey; rules: Array<enums.InputPrivacyRule> }) => enums.account.PrivacyRules;
  key: enums.InputPrivacyKey;
  rules: Array<enums.InputPrivacyRule>;

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

  constructor(params: { key: enums.InputPrivacyKey; rules: Array<enums.InputPrivacyRule> }) {
    super();
    this.key = params.key;
    this.rules = params.rules;
  }
}

class account_deleteAccount_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { reason: string; password?: enums.InputCheckPasswordSRP }) => boolean;
  reason: string;
  password?: enums.InputCheckPasswordSRP;

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

  constructor(params: { reason: string; password?: enums.InputCheckPasswordSRP }) {
    super();
    this.reason = params.reason;
    this.password = params.password;
  }
}

class account_getAccountTTL_ extends Function_<enums.AccountDaysTTL> {
  static __F = Symbol() as unknown as () => enums.AccountDaysTTL;
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

class account_setAccountTTL_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { ttl: enums.AccountDaysTTL }) => boolean;
  ttl: enums.AccountDaysTTL;

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

  constructor(params: { ttl: enums.AccountDaysTTL }) {
    super();
    this.ttl = params.ttl;
  }
}

class account_sendChangePhoneCode_ extends Function_<enums.auth.SentCode> {
  static __F = Symbol() as unknown as (params: { phone_number: string; settings: enums.CodeSettings }) => enums.auth.SentCode;
  phone_number: string;
  settings: enums.CodeSettings;

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

  constructor(params: { phone_number: string; settings: enums.CodeSettings }) {
    super();
    this.phone_number = params.phone_number;
    this.settings = params.settings;
  }
}

class account_changePhone_ extends Function_<enums.User> {
  static __F = Symbol() as unknown as (params: { phone_number: string; phone_code_hash: string; phone_code: string }) => enums.User;
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

class account_updateDeviceLocked_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { period: number }) => boolean;
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

class account_getAuthorizations_ extends Function_<enums.account.Authorizations> {
  static __F = Symbol() as unknown as () => enums.account.Authorizations;
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

class account_resetAuthorization_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => boolean;
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

class account_getPassword_ extends Function_<enums.account.Password> {
  static __F = Symbol() as unknown as () => enums.account.Password;
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

class account_getPasswordSettings_ extends Function_<enums.account.PasswordSettings> {
  static __F = Symbol() as unknown as (params: { password: enums.InputCheckPasswordSRP }) => enums.account.PasswordSettings;
  password: enums.InputCheckPasswordSRP;

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

  constructor(params: { password: enums.InputCheckPasswordSRP }) {
    super();
    this.password = params.password;
  }
}

class account_updatePasswordSettings_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { password: enums.InputCheckPasswordSRP; new_settings: enums.account.PasswordInputSettings }) => boolean;
  password: enums.InputCheckPasswordSRP;
  new_settings: enums.account.PasswordInputSettings;

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

  constructor(params: { password: enums.InputCheckPasswordSRP; new_settings: enums.account.PasswordInputSettings }) {
    super();
    this.password = params.password;
    this.new_settings = params.new_settings;
  }
}

class account_sendConfirmPhoneCode_ extends Function_<enums.auth.SentCode> {
  static __F = Symbol() as unknown as (params: { hash: string; settings: enums.CodeSettings }) => enums.auth.SentCode;
  hash: string;
  settings: enums.CodeSettings;

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

  constructor(params: { hash: string; settings: enums.CodeSettings }) {
    super();
    this.hash = params.hash;
    this.settings = params.settings;
  }
}

class account_confirmPhone_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { phone_code_hash: string; phone_code: string }) => boolean;
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

class account_getTmpPassword_ extends Function_<enums.account.TmpPassword> {
  static __F = Symbol() as unknown as (params: { password: enums.InputCheckPasswordSRP; period: number }) => enums.account.TmpPassword;
  password: enums.InputCheckPasswordSRP;
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

  constructor(params: { password: enums.InputCheckPasswordSRP; period: number }) {
    super();
    this.password = params.password;
    this.period = params.period;
  }
}

class account_getWebAuthorizations_ extends Function_<enums.account.WebAuthorizations> {
  static __F = Symbol() as unknown as () => enums.account.WebAuthorizations;
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

class account_resetWebAuthorization_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => boolean;
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

class account_resetWebAuthorizations_ extends Function_<boolean> {
  static __F = Symbol() as unknown as () => boolean;
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

class account_getAllSecureValues_ extends Function_<enums.SecureValue[]> {
  static __F = Symbol() as unknown as () => enums.SecureValue[];
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

class account_getSecureValue_ extends Function_<enums.SecureValue[]> {
  static __F = Symbol() as unknown as (params: { types: Array<enums.SecureValueType> }) => enums.SecureValue[];
  types: Array<enums.SecureValueType>;

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

  constructor(params: { types: Array<enums.SecureValueType> }) {
    super();
    this.types = params.types;
  }
}

class account_saveSecureValue_ extends Function_<enums.SecureValue> {
  static __F = Symbol() as unknown as (params: { value: enums.InputSecureValue; secure_secret_id: bigint }) => enums.SecureValue;
  value: enums.InputSecureValue;
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

  constructor(params: { value: enums.InputSecureValue; secure_secret_id: bigint }) {
    super();
    this.value = params.value;
    this.secure_secret_id = params.secure_secret_id;
  }
}

class account_deleteSecureValue_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { types: Array<enums.SecureValueType> }) => boolean;
  types: Array<enums.SecureValueType>;

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

  constructor(params: { types: Array<enums.SecureValueType> }) {
    super();
    this.types = params.types;
  }
}

class account_getAuthorizationForm_ extends Function_<enums.account.AuthorizationForm> {
  static __F = Symbol() as unknown as (params: { bot_id: bigint; scope: string; public_key: string }) => enums.account.AuthorizationForm;
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

class account_acceptAuthorization_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { bot_id: bigint; scope: string; public_key: string; value_hashes: Array<enums.SecureValueHash>; credentials: enums.SecureCredentialsEncrypted }) => boolean;
  bot_id: bigint;
  scope: string;
  public_key: string;
  value_hashes: Array<enums.SecureValueHash>;
  credentials: enums.SecureCredentialsEncrypted;

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

  constructor(params: { bot_id: bigint; scope: string; public_key: string; value_hashes: Array<enums.SecureValueHash>; credentials: enums.SecureCredentialsEncrypted }) {
    super();
    this.bot_id = params.bot_id;
    this.scope = params.scope;
    this.public_key = params.public_key;
    this.value_hashes = params.value_hashes;
    this.credentials = params.credentials;
  }
}

class account_sendVerifyPhoneCode_ extends Function_<enums.auth.SentCode> {
  static __F = Symbol() as unknown as (params: { phone_number: string; settings: enums.CodeSettings }) => enums.auth.SentCode;
  phone_number: string;
  settings: enums.CodeSettings;

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

  constructor(params: { phone_number: string; settings: enums.CodeSettings }) {
    super();
    this.phone_number = params.phone_number;
    this.settings = params.settings;
  }
}

class account_verifyPhone_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { phone_number: string; phone_code_hash: string; phone_code: string }) => boolean;
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

class account_sendVerifyEmailCode_ extends Function_<enums.account.SentEmailCode> {
  static __F = Symbol() as unknown as (params: { purpose: enums.EmailVerifyPurpose; email: string }) => enums.account.SentEmailCode;
  purpose: enums.EmailVerifyPurpose;
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

  constructor(params: { purpose: enums.EmailVerifyPurpose; email: string }) {
    super();
    this.purpose = params.purpose;
    this.email = params.email;
  }
}

class account_verifyEmail_ extends Function_<enums.account.EmailVerified> {
  static __F = Symbol() as unknown as (params: { purpose: enums.EmailVerifyPurpose; verification: enums.EmailVerification }) => enums.account.EmailVerified;
  purpose: enums.EmailVerifyPurpose;
  verification: enums.EmailVerification;

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

  constructor(params: { purpose: enums.EmailVerifyPurpose; verification: enums.EmailVerification }) {
    super();
    this.purpose = params.purpose;
    this.verification = params.verification;
  }
}

class account_initTakeoutSession_ extends Function_<enums.account.Takeout> {
  static __F = Symbol() as unknown as (params?: { contacts?: true; message_users?: true; message_chats?: true; message_megagroups?: true; message_channels?: true; files?: true; file_max_size?: bigint }) => enums.account.Takeout;
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

class account_finishTakeoutSession_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params?: { success?: true }) => boolean;
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

class account_confirmPasswordEmail_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { code: string }) => boolean;
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

class account_resendPasswordEmail_ extends Function_<boolean> {
  static __F = Symbol() as unknown as () => boolean;
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

class account_cancelPasswordEmail_ extends Function_<boolean> {
  static __F = Symbol() as unknown as () => boolean;
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

class account_getContactSignUpNotification_ extends Function_<boolean> {
  static __F = Symbol() as unknown as () => boolean;
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

class account_setContactSignUpNotification_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { silent: boolean }) => boolean;
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

class account_getNotifyExceptions_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params?: { compare_sound?: true; compare_stories?: true; peer?: enums.InputNotifyPeer }) => enums.Updates;
  compare_sound?: true;
  compare_stories?: true;
  peer?: enums.InputNotifyPeer;

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

  constructor(params?: { compare_sound?: true; compare_stories?: true; peer?: enums.InputNotifyPeer }) {
    super();
    this.compare_sound = params?.compare_sound;
    this.compare_stories = params?.compare_stories;
    this.peer = params?.peer;
  }
}

class account_getWallPaper_ extends Function_<enums.WallPaper> {
  static __F = Symbol() as unknown as (params: { wallpaper: enums.InputWallPaper }) => enums.WallPaper;
  wallpaper: enums.InputWallPaper;

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

  constructor(params: { wallpaper: enums.InputWallPaper }) {
    super();
    this.wallpaper = params.wallpaper;
  }
}

class account_uploadWallPaper_ extends Function_<enums.WallPaper> {
  static __F = Symbol() as unknown as (params: { for_chat?: true; file: enums.InputFile; mime_type: string; settings: enums.WallPaperSettings }) => enums.WallPaper;
  for_chat?: true;
  file: enums.InputFile;
  mime_type: string;
  settings: enums.WallPaperSettings;

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

  constructor(params: { for_chat?: true; file: enums.InputFile; mime_type: string; settings: enums.WallPaperSettings }) {
    super();
    this.for_chat = params.for_chat;
    this.file = params.file;
    this.mime_type = params.mime_type;
    this.settings = params.settings;
  }
}

class account_saveWallPaper_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { wallpaper: enums.InputWallPaper; unsave: boolean; settings: enums.WallPaperSettings }) => boolean;
  wallpaper: enums.InputWallPaper;
  unsave: boolean;
  settings: enums.WallPaperSettings;

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

  constructor(params: { wallpaper: enums.InputWallPaper; unsave: boolean; settings: enums.WallPaperSettings }) {
    super();
    this.wallpaper = params.wallpaper;
    this.unsave = params.unsave;
    this.settings = params.settings;
  }
}

class account_installWallPaper_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { wallpaper: enums.InputWallPaper; settings: enums.WallPaperSettings }) => boolean;
  wallpaper: enums.InputWallPaper;
  settings: enums.WallPaperSettings;

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

  constructor(params: { wallpaper: enums.InputWallPaper; settings: enums.WallPaperSettings }) {
    super();
    this.wallpaper = params.wallpaper;
    this.settings = params.settings;
  }
}

class account_resetWallPapers_ extends Function_<boolean> {
  static __F = Symbol() as unknown as () => boolean;
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

class account_getAutoDownloadSettings_ extends Function_<enums.account.AutoDownloadSettings> {
  static __F = Symbol() as unknown as () => enums.account.AutoDownloadSettings;
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

class account_saveAutoDownloadSettings_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { low?: true; high?: true; settings: enums.AutoDownloadSettings }) => boolean;
  low?: true;
  high?: true;
  settings: enums.AutoDownloadSettings;

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

  constructor(params: { low?: true; high?: true; settings: enums.AutoDownloadSettings }) {
    super();
    this.low = params.low;
    this.high = params.high;
    this.settings = params.settings;
  }
}

class account_uploadTheme_ extends Function_<enums.Document> {
  static __F = Symbol() as unknown as (params: { file: enums.InputFile; thumb?: enums.InputFile; file_name: string; mime_type: string }) => enums.Document;
  file: enums.InputFile;
  thumb?: enums.InputFile;
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

  constructor(params: { file: enums.InputFile; thumb?: enums.InputFile; file_name: string; mime_type: string }) {
    super();
    this.file = params.file;
    this.thumb = params.thumb;
    this.file_name = params.file_name;
    this.mime_type = params.mime_type;
  }
}

class account_createTheme_ extends Function_<enums.Theme> {
  static __F = Symbol() as unknown as (params: { slug: string; title: string; document?: enums.InputDocument; settings?: Array<enums.InputThemeSettings> }) => enums.Theme;
  slug: string;
  title: string;
  document?: enums.InputDocument;
  settings?: Array<enums.InputThemeSettings>;

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

  constructor(params: { slug: string; title: string; document?: enums.InputDocument; settings?: Array<enums.InputThemeSettings> }) {
    super();
    this.slug = params.slug;
    this.title = params.title;
    this.document = params.document;
    this.settings = params.settings;
  }
}

class account_updateTheme_ extends Function_<enums.Theme> {
  static __F = Symbol() as unknown as (params: { format: string; theme: enums.InputTheme; slug?: string; title?: string; document?: enums.InputDocument; settings?: Array<enums.InputThemeSettings> }) => enums.Theme;
  format: string;
  theme: enums.InputTheme;
  slug?: string;
  title?: string;
  document?: enums.InputDocument;
  settings?: Array<enums.InputThemeSettings>;

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

  constructor(params: { format: string; theme: enums.InputTheme; slug?: string; title?: string; document?: enums.InputDocument; settings?: Array<enums.InputThemeSettings> }) {
    super();
    this.format = params.format;
    this.theme = params.theme;
    this.slug = params.slug;
    this.title = params.title;
    this.document = params.document;
    this.settings = params.settings;
  }
}

class account_saveTheme_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { theme: enums.InputTheme; unsave: boolean }) => boolean;
  theme: enums.InputTheme;
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

  constructor(params: { theme: enums.InputTheme; unsave: boolean }) {
    super();
    this.theme = params.theme;
    this.unsave = params.unsave;
  }
}

class account_installTheme_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params?: { dark?: true; theme?: enums.InputTheme; format?: string; base_theme?: enums.BaseTheme }) => boolean;
  dark?: true;
  theme?: enums.InputTheme;
  format?: string;
  base_theme?: enums.BaseTheme;

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

  constructor(params?: { dark?: true; theme?: enums.InputTheme; format?: string; base_theme?: enums.BaseTheme }) {
    super();
    this.dark = params?.dark;
    this.theme = params?.theme;
    this.format = params?.format;
    this.base_theme = params?.base_theme;
  }
}

class account_getTheme_ extends Function_<enums.Theme> {
  static __F = Symbol() as unknown as (params: { format: string; theme: enums.InputTheme }) => enums.Theme;
  format: string;
  theme: enums.InputTheme;

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

  constructor(params: { format: string; theme: enums.InputTheme }) {
    super();
    this.format = params.format;
    this.theme = params.theme;
  }
}

class account_getThemes_ extends Function_<enums.account.Themes> {
  static __F = Symbol() as unknown as (params: { format: string; hash: bigint }) => enums.account.Themes;
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

class account_setContentSettings_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params?: { sensitive_enabled?: true }) => boolean;
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

class account_getContentSettings_ extends Function_<enums.account.ContentSettings> {
  static __F = Symbol() as unknown as () => enums.account.ContentSettings;
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

class account_getMultiWallPapers_ extends Function_<enums.WallPaper[]> {
  static __F = Symbol() as unknown as (params: { wallpapers: Array<enums.InputWallPaper> }) => enums.WallPaper[];
  wallpapers: Array<enums.InputWallPaper>;

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

  constructor(params: { wallpapers: Array<enums.InputWallPaper> }) {
    super();
    this.wallpapers = params.wallpapers;
  }
}

class account_getGlobalPrivacySettings_ extends Function_<enums.GlobalPrivacySettings> {
  static __F = Symbol() as unknown as () => enums.GlobalPrivacySettings;
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

class account_setGlobalPrivacySettings_ extends Function_<enums.GlobalPrivacySettings> {
  static __F = Symbol() as unknown as (params: { settings: enums.GlobalPrivacySettings }) => enums.GlobalPrivacySettings;
  settings: enums.GlobalPrivacySettings;

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

  constructor(params: { settings: enums.GlobalPrivacySettings }) {
    super();
    this.settings = params.settings;
  }
}

class account_reportProfilePhoto_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; photo_id: enums.InputPhoto; reason: enums.ReportReason; message: string }) => boolean;
  peer: enums.InputPeer;
  photo_id: enums.InputPhoto;
  reason: enums.ReportReason;
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

  constructor(params: { peer: enums.InputPeer; photo_id: enums.InputPhoto; reason: enums.ReportReason; message: string }) {
    super();
    this.peer = params.peer;
    this.photo_id = params.photo_id;
    this.reason = params.reason;
    this.message = params.message;
  }
}

class account_resetPassword_ extends Function_<enums.account.ResetPasswordResult> {
  static __F = Symbol() as unknown as () => enums.account.ResetPasswordResult;
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

class account_declinePasswordReset_ extends Function_<boolean> {
  static __F = Symbol() as unknown as () => boolean;
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

class account_getChatThemes_ extends Function_<enums.account.Themes> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.account.Themes;
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

class account_setAuthorizationTTL_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { authorization_ttl_days: number }) => boolean;
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

class account_changeAuthorizationSettings_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { confirmed?: true; hash: bigint; encrypted_requests_disabled?: boolean; call_requests_disabled?: boolean }) => boolean;
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

class account_getSavedRingtones_ extends Function_<enums.account.SavedRingtones> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.account.SavedRingtones;
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

class account_saveRingtone_ extends Function_<enums.account.SavedRingtone> {
  static __F = Symbol() as unknown as (params: { id: enums.InputDocument; unsave: boolean }) => enums.account.SavedRingtone;
  id: enums.InputDocument;
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

  constructor(params: { id: enums.InputDocument; unsave: boolean }) {
    super();
    this.id = params.id;
    this.unsave = params.unsave;
  }
}

class account_uploadRingtone_ extends Function_<enums.Document> {
  static __F = Symbol() as unknown as (params: { file: enums.InputFile; file_name: string; mime_type: string }) => enums.Document;
  file: enums.InputFile;
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

  constructor(params: { file: enums.InputFile; file_name: string; mime_type: string }) {
    super();
    this.file = params.file;
    this.file_name = params.file_name;
    this.mime_type = params.mime_type;
  }
}

class account_updateEmojiStatus_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { emoji_status: enums.EmojiStatus }) => boolean;
  emoji_status: enums.EmojiStatus;

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

  constructor(params: { emoji_status: enums.EmojiStatus }) {
    super();
    this.emoji_status = params.emoji_status;
  }
}

class account_getDefaultEmojiStatuses_ extends Function_<enums.account.EmojiStatuses> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.account.EmojiStatuses;
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

class account_getRecentEmojiStatuses_ extends Function_<enums.account.EmojiStatuses> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.account.EmojiStatuses;
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

class account_clearRecentEmojiStatuses_ extends Function_<boolean> {
  static __F = Symbol() as unknown as () => boolean;
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

class account_reorderUsernames_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { order: Array<string> }) => boolean;
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

class account_toggleUsername_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { username: string; active: boolean }) => boolean;
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

class account_getDefaultProfilePhotoEmojis_ extends Function_<enums.EmojiList> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.EmojiList;
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

class account_getDefaultGroupPhotoEmojis_ extends Function_<enums.EmojiList> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.EmojiList;
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

class account_getAutoSaveSettings_ extends Function_<enums.account.AutoSaveSettings> {
  static __F = Symbol() as unknown as () => enums.account.AutoSaveSettings;
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

class account_saveAutoSaveSettings_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { users?: true; chats?: true; broadcasts?: true; peer?: enums.InputPeer; settings: enums.AutoSaveSettings }) => boolean;
  users?: true;
  chats?: true;
  broadcasts?: true;
  peer?: enums.InputPeer;
  settings: enums.AutoSaveSettings;

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

  constructor(params: { users?: true; chats?: true; broadcasts?: true; peer?: enums.InputPeer; settings: enums.AutoSaveSettings }) {
    super();
    this.users = params.users;
    this.chats = params.chats;
    this.broadcasts = params.broadcasts;
    this.peer = params.peer;
    this.settings = params.settings;
  }
}

class account_deleteAutoSaveExceptions_ extends Function_<boolean> {
  static __F = Symbol() as unknown as () => boolean;
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

class account_invalidateSignInCodes_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { codes: Array<string> }) => boolean;
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

class account_updateColor_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params?: { for_profile?: true; color?: number; background_emoji_id?: bigint }) => boolean;
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

class account_getDefaultBackgroundEmojis_ extends Function_<enums.EmojiList> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.EmojiList;
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

class users_getUsers_ extends Function_<enums.User[]> {
  static __F = Symbol() as unknown as (params: { id: Array<enums.InputUser> }) => enums.User[];
  id: Array<enums.InputUser>;

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

  constructor(params: { id: Array<enums.InputUser> }) {
    super();
    this.id = params.id;
  }
}

class users_getFullUser_ extends Function_<enums.users.UserFull> {
  static __F = Symbol() as unknown as (params: { id: enums.InputUser }) => enums.users.UserFull;
  id: enums.InputUser;

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

  constructor(params: { id: enums.InputUser }) {
    super();
    this.id = params.id;
  }
}

class users_setSecureValueErrors_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { id: enums.InputUser; errors: Array<enums.SecureValueError> }) => boolean;
  id: enums.InputUser;
  errors: Array<enums.SecureValueError>;

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

  constructor(params: { id: enums.InputUser; errors: Array<enums.SecureValueError> }) {
    super();
    this.id = params.id;
    this.errors = params.errors;
  }
}

class contacts_getContactIDs_ extends Function_<number[]> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => number[];
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

class contacts_getStatuses_ extends Function_<enums.ContactStatus[]> {
  static __F = Symbol() as unknown as () => enums.ContactStatus[];
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

class contacts_getContacts_ extends Function_<enums.contacts.Contacts> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.contacts.Contacts;
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

class contacts_importContacts_ extends Function_<enums.contacts.ImportedContacts> {
  static __F = Symbol() as unknown as (params: { contacts: Array<enums.InputContact> }) => enums.contacts.ImportedContacts;
  contacts: Array<enums.InputContact>;

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

  constructor(params: { contacts: Array<enums.InputContact> }) {
    super();
    this.contacts = params.contacts;
  }
}

class contacts_deleteContacts_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { id: Array<enums.InputUser> }) => enums.Updates;
  id: Array<enums.InputUser>;

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

  constructor(params: { id: Array<enums.InputUser> }) {
    super();
    this.id = params.id;
  }
}

class contacts_deleteByPhones_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { phones: Array<string> }) => boolean;
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

class contacts_block_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { my_stories_from?: true; id: enums.InputPeer }) => boolean;
  my_stories_from?: true;
  id: enums.InputPeer;

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

  constructor(params: { my_stories_from?: true; id: enums.InputPeer }) {
    super();
    this.my_stories_from = params.my_stories_from;
    this.id = params.id;
  }
}

class contacts_unblock_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { my_stories_from?: true; id: enums.InputPeer }) => boolean;
  my_stories_from?: true;
  id: enums.InputPeer;

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

  constructor(params: { my_stories_from?: true; id: enums.InputPeer }) {
    super();
    this.my_stories_from = params.my_stories_from;
    this.id = params.id;
  }
}

class contacts_getBlocked_ extends Function_<enums.contacts.Blocked> {
  static __F = Symbol() as unknown as (params: { my_stories_from?: true; offset: number; limit: number }) => enums.contacts.Blocked;
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

class contacts_search_ extends Function_<enums.contacts.Found> {
  static __F = Symbol() as unknown as (params: { q: string; limit: number }) => enums.contacts.Found;
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

class contacts_resolveUsername_ extends Function_<enums.contacts.ResolvedPeer> {
  static __F = Symbol() as unknown as (params: { username: string }) => enums.contacts.ResolvedPeer;
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

class contacts_getTopPeers_ extends Function_<enums.contacts.TopPeers> {
  static __F = Symbol() as unknown as (params: { correspondents?: true; bots_pm?: true; bots_inline?: true; phone_calls?: true; forward_users?: true; forward_chats?: true; groups?: true; channels?: true; offset: number; limit: number; hash: bigint }) => enums.contacts.TopPeers;
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

class contacts_resetTopPeerRating_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { category: enums.TopPeerCategory; peer: enums.InputPeer }) => boolean;
  category: enums.TopPeerCategory;
  peer: enums.InputPeer;

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

  constructor(params: { category: enums.TopPeerCategory; peer: enums.InputPeer }) {
    super();
    this.category = params.category;
    this.peer = params.peer;
  }
}

class contacts_resetSaved_ extends Function_<boolean> {
  static __F = Symbol() as unknown as () => boolean;
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

class contacts_getSaved_ extends Function_<enums.SavedContact[]> {
  static __F = Symbol() as unknown as () => enums.SavedContact[];
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

class contacts_toggleTopPeers_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { enabled: boolean }) => boolean;
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

class contacts_addContact_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { add_phone_privacy_exception?: true; id: enums.InputUser; first_name: string; last_name: string; phone: string }) => enums.Updates;
  add_phone_privacy_exception?: true;
  id: enums.InputUser;
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

  constructor(params: { add_phone_privacy_exception?: true; id: enums.InputUser; first_name: string; last_name: string; phone: string }) {
    super();
    this.add_phone_privacy_exception = params.add_phone_privacy_exception;
    this.id = params.id;
    this.first_name = params.first_name;
    this.last_name = params.last_name;
    this.phone = params.phone;
  }
}

class contacts_acceptContact_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { id: enums.InputUser }) => enums.Updates;
  id: enums.InputUser;

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

  constructor(params: { id: enums.InputUser }) {
    super();
    this.id = params.id;
  }
}

class contacts_getLocated_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { background?: true; geo_point: enums.InputGeoPoint; self_expires?: number }) => enums.Updates;
  background?: true;
  geo_point: enums.InputGeoPoint;
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

  constructor(params: { background?: true; geo_point: enums.InputGeoPoint; self_expires?: number }) {
    super();
    this.background = params.background;
    this.geo_point = params.geo_point;
    this.self_expires = params.self_expires;
  }
}

class contacts_blockFromReplies_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { delete_message?: true; delete_history?: true; report_spam?: true; msg_id: number }) => enums.Updates;
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

class contacts_resolvePhone_ extends Function_<enums.contacts.ResolvedPeer> {
  static __F = Symbol() as unknown as (params: { phone: string }) => enums.contacts.ResolvedPeer;
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

class contacts_exportContactToken_ extends Function_<enums.ExportedContactToken> {
  static __F = Symbol() as unknown as () => enums.ExportedContactToken;
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

class contacts_importContactToken_ extends Function_<enums.User> {
  static __F = Symbol() as unknown as (params: { token: string }) => enums.User;
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

class contacts_editCloseFriends_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { id: Array<bigint> }) => boolean;
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

class contacts_setBlocked_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { my_stories_from?: true; id: Array<enums.InputPeer>; limit: number }) => boolean;
  my_stories_from?: true;
  id: Array<enums.InputPeer>;
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

  constructor(params: { my_stories_from?: true; id: Array<enums.InputPeer>; limit: number }) {
    super();
    this.my_stories_from = params.my_stories_from;
    this.id = params.id;
    this.limit = params.limit;
  }
}

class messages_getMessages_ extends Function_<enums.messages.Messages> {
  static __F = Symbol() as unknown as (params: { id: Array<enums.InputMessage> }) => enums.messages.Messages;
  id: Array<enums.InputMessage>;

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

  constructor(params: { id: Array<enums.InputMessage> }) {
    super();
    this.id = params.id;
  }
}

class messages_getDialogs_ extends Function_<enums.messages.Dialogs> {
  static __F = Symbol() as unknown as (params: { exclude_pinned?: true; folder_id?: number; offset_date: number; offset_id: number; offset_peer: enums.InputPeer; limit: number; hash: bigint }) => enums.messages.Dialogs;
  exclude_pinned?: true;
  folder_id?: number;
  offset_date: number;
  offset_id: number;
  offset_peer: enums.InputPeer;
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

  constructor(params: { exclude_pinned?: true; folder_id?: number; offset_date: number; offset_id: number; offset_peer: enums.InputPeer; limit: number; hash: bigint }) {
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

class messages_getHistory_ extends Function_<enums.messages.Messages> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; offset_id: number; offset_date: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) => enums.messages.Messages;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; offset_id: number; offset_date: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) {
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

class messages_search_ extends Function_<enums.messages.Messages> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; q: string; from_id?: enums.InputPeer; top_msg_id?: number; filter: enums.MessagesFilter; min_date: number; max_date: number; offset_id: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) => enums.messages.Messages;
  peer: enums.InputPeer;
  q: string;
  from_id?: enums.InputPeer;
  top_msg_id?: number;
  filter: enums.MessagesFilter;
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

  constructor(params: { peer: enums.InputPeer; q: string; from_id?: enums.InputPeer; top_msg_id?: number; filter: enums.MessagesFilter; min_date: number; max_date: number; offset_id: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) {
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

class messages_readHistory_ extends Function_<enums.messages.AffectedMessages> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; max_id: number }) => enums.messages.AffectedMessages;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; max_id: number }) {
    super();
    this.peer = params.peer;
    this.max_id = params.max_id;
  }
}

class messages_deleteHistory_ extends Function_<enums.messages.AffectedHistory> {
  static __F = Symbol() as unknown as (params: { just_clear?: true; revoke?: true; peer: enums.InputPeer; max_id: number; min_date?: number; max_date?: number }) => enums.messages.AffectedHistory;
  just_clear?: true;
  revoke?: true;
  peer: enums.InputPeer;
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

  constructor(params: { just_clear?: true; revoke?: true; peer: enums.InputPeer; max_id: number; min_date?: number; max_date?: number }) {
    super();
    this.just_clear = params.just_clear;
    this.revoke = params.revoke;
    this.peer = params.peer;
    this.max_id = params.max_id;
    this.min_date = params.min_date;
    this.max_date = params.max_date;
  }
}

class messages_deleteMessages_ extends Function_<enums.messages.AffectedMessages> {
  static __F = Symbol() as unknown as (params: { revoke?: true; id: Array<number> }) => enums.messages.AffectedMessages;
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

class messages_receivedMessages_ extends Function_<enums.ReceivedNotifyMessage[]> {
  static __F = Symbol() as unknown as (params: { max_id: number }) => enums.ReceivedNotifyMessage[];
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

class messages_setTyping_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; top_msg_id?: number; action: enums.SendMessageAction }) => boolean;
  peer: enums.InputPeer;
  top_msg_id?: number;
  action: enums.SendMessageAction;

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

  constructor(params: { peer: enums.InputPeer; top_msg_id?: number; action: enums.SendMessageAction }) {
    super();
    this.peer = params.peer;
    this.top_msg_id = params.top_msg_id;
    this.action = params.action;
  }
}

class messages_sendMessage_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { no_webpage?: true; silent?: true; background?: true; clear_draft?: true; noforwards?: true; update_stickersets_order?: true; invert_media?: true; peer: enums.InputPeer; reply_to?: enums.InputReplyTo; message: string; random_id: bigint; reply_markup?: enums.ReplyMarkup; entities?: Array<enums.MessageEntity>; schedule_date?: number; send_as?: enums.InputPeer }) => enums.Updates;
  no_webpage?: true;
  silent?: true;
  background?: true;
  clear_draft?: true;
  noforwards?: true;
  update_stickersets_order?: true;
  invert_media?: true;
  peer: enums.InputPeer;
  reply_to?: enums.InputReplyTo;
  message: string;
  random_id: bigint;
  reply_markup?: enums.ReplyMarkup;
  entities?: Array<enums.MessageEntity>;
  schedule_date?: number;
  send_as?: enums.InputPeer;

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

  constructor(params: { no_webpage?: true; silent?: true; background?: true; clear_draft?: true; noforwards?: true; update_stickersets_order?: true; invert_media?: true; peer: enums.InputPeer; reply_to?: enums.InputReplyTo; message: string; random_id: bigint; reply_markup?: enums.ReplyMarkup; entities?: Array<enums.MessageEntity>; schedule_date?: number; send_as?: enums.InputPeer }) {
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

class messages_sendMedia_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { silent?: true; background?: true; clear_draft?: true; noforwards?: true; update_stickersets_order?: true; invert_media?: true; peer: enums.InputPeer; reply_to?: enums.InputReplyTo; media: enums.InputMedia; message: string; random_id: bigint; reply_markup?: enums.ReplyMarkup; entities?: Array<enums.MessageEntity>; schedule_date?: number; send_as?: enums.InputPeer }) => enums.Updates;
  silent?: true;
  background?: true;
  clear_draft?: true;
  noforwards?: true;
  update_stickersets_order?: true;
  invert_media?: true;
  peer: enums.InputPeer;
  reply_to?: enums.InputReplyTo;
  media: enums.InputMedia;
  message: string;
  random_id: bigint;
  reply_markup?: enums.ReplyMarkup;
  entities?: Array<enums.MessageEntity>;
  schedule_date?: number;
  send_as?: enums.InputPeer;

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

  constructor(params: { silent?: true; background?: true; clear_draft?: true; noforwards?: true; update_stickersets_order?: true; invert_media?: true; peer: enums.InputPeer; reply_to?: enums.InputReplyTo; media: enums.InputMedia; message: string; random_id: bigint; reply_markup?: enums.ReplyMarkup; entities?: Array<enums.MessageEntity>; schedule_date?: number; send_as?: enums.InputPeer }) {
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

class messages_forwardMessages_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { silent?: true; background?: true; with_my_score?: true; drop_author?: true; drop_media_captions?: true; noforwards?: true; from_peer: enums.InputPeer; id: Array<number>; random_id: Array<bigint>; to_peer: enums.InputPeer; top_msg_id?: number; schedule_date?: number; send_as?: enums.InputPeer }) => enums.Updates;
  silent?: true;
  background?: true;
  with_my_score?: true;
  drop_author?: true;
  drop_media_captions?: true;
  noforwards?: true;
  from_peer: enums.InputPeer;
  id: Array<number>;
  random_id: Array<bigint>;
  to_peer: enums.InputPeer;
  top_msg_id?: number;
  schedule_date?: number;
  send_as?: enums.InputPeer;

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

  constructor(params: { silent?: true; background?: true; with_my_score?: true; drop_author?: true; drop_media_captions?: true; noforwards?: true; from_peer: enums.InputPeer; id: Array<number>; random_id: Array<bigint>; to_peer: enums.InputPeer; top_msg_id?: number; schedule_date?: number; send_as?: enums.InputPeer }) {
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

class messages_reportSpam_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer }) => boolean;
  peer: enums.InputPeer;

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

  constructor(params: { peer: enums.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

class messages_getPeerSettings_ extends Function_<enums.messages.PeerSettings> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer }) => enums.messages.PeerSettings;
  peer: enums.InputPeer;

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

  constructor(params: { peer: enums.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

class messages_report_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: Array<number>; reason: enums.ReportReason; message: string }) => boolean;
  peer: enums.InputPeer;
  id: Array<number>;
  reason: enums.ReportReason;
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

  constructor(params: { peer: enums.InputPeer; id: Array<number>; reason: enums.ReportReason; message: string }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.reason = params.reason;
    this.message = params.message;
  }
}

class messages_getChats_ extends Function_<enums.messages.Chats> {
  static __F = Symbol() as unknown as (params: { id: Array<bigint> }) => enums.messages.Chats;
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

class messages_getFullChat_ extends Function_<enums.messages.ChatFull> {
  static __F = Symbol() as unknown as (params: { chat_id: bigint }) => enums.messages.ChatFull;
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

class messages_editChatTitle_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { chat_id: bigint; title: string }) => enums.Updates;
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

class messages_editChatPhoto_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { chat_id: bigint; photo: enums.InputChatPhoto }) => enums.Updates;
  chat_id: bigint;
  photo: enums.InputChatPhoto;

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

  constructor(params: { chat_id: bigint; photo: enums.InputChatPhoto }) {
    super();
    this.chat_id = params.chat_id;
    this.photo = params.photo;
  }
}

class messages_addChatUser_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { chat_id: bigint; user_id: enums.InputUser; fwd_limit: number }) => enums.Updates;
  chat_id: bigint;
  user_id: enums.InputUser;
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

  constructor(params: { chat_id: bigint; user_id: enums.InputUser; fwd_limit: number }) {
    super();
    this.chat_id = params.chat_id;
    this.user_id = params.user_id;
    this.fwd_limit = params.fwd_limit;
  }
}

class messages_deleteChatUser_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { revoke_history?: true; chat_id: bigint; user_id: enums.InputUser }) => enums.Updates;
  revoke_history?: true;
  chat_id: bigint;
  user_id: enums.InputUser;

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

  constructor(params: { revoke_history?: true; chat_id: bigint; user_id: enums.InputUser }) {
    super();
    this.revoke_history = params.revoke_history;
    this.chat_id = params.chat_id;
    this.user_id = params.user_id;
  }
}

class messages_createChat_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { users: Array<enums.InputUser>; title: string; ttl_period?: number }) => enums.Updates;
  users: Array<enums.InputUser>;
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

  constructor(params: { users: Array<enums.InputUser>; title: string; ttl_period?: number }) {
    super();
    this.users = params.users;
    this.title = params.title;
    this.ttl_period = params.ttl_period;
  }
}

class messages_getDhConfig_ extends Function_<enums.messages.DhConfig> {
  static __F = Symbol() as unknown as (params: { version: number; random_length: number }) => enums.messages.DhConfig;
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

class messages_requestEncryption_ extends Function_<enums.EncryptedChat> {
  static __F = Symbol() as unknown as (params: { user_id: enums.InputUser; random_id: number; g_a: Uint8Array }) => enums.EncryptedChat;
  user_id: enums.InputUser;
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

  constructor(params: { user_id: enums.InputUser; random_id: number; g_a: Uint8Array }) {
    super();
    this.user_id = params.user_id;
    this.random_id = params.random_id;
    this.g_a = params.g_a;
  }
}

class messages_acceptEncryption_ extends Function_<enums.EncryptedChat> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputEncryptedChat; g_b: Uint8Array; key_fingerprint: bigint }) => enums.EncryptedChat;
  peer: enums.InputEncryptedChat;
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

  constructor(params: { peer: enums.InputEncryptedChat; g_b: Uint8Array; key_fingerprint: bigint }) {
    super();
    this.peer = params.peer;
    this.g_b = params.g_b;
    this.key_fingerprint = params.key_fingerprint;
  }
}

class messages_discardEncryption_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { delete_history?: true; chat_id: number }) => boolean;
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

class messages_setEncryptedTyping_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputEncryptedChat; typing: boolean }) => boolean;
  peer: enums.InputEncryptedChat;
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

  constructor(params: { peer: enums.InputEncryptedChat; typing: boolean }) {
    super();
    this.peer = params.peer;
    this.typing = params.typing;
  }
}

class messages_readEncryptedHistory_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputEncryptedChat; max_date: number }) => boolean;
  peer: enums.InputEncryptedChat;
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

  constructor(params: { peer: enums.InputEncryptedChat; max_date: number }) {
    super();
    this.peer = params.peer;
    this.max_date = params.max_date;
  }
}

class messages_sendEncrypted_ extends Function_<enums.messages.SentEncryptedMessage> {
  static __F = Symbol() as unknown as (params: { silent?: true; peer: enums.InputEncryptedChat; random_id: bigint; data: Uint8Array }) => enums.messages.SentEncryptedMessage;
  silent?: true;
  peer: enums.InputEncryptedChat;
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

  constructor(params: { silent?: true; peer: enums.InputEncryptedChat; random_id: bigint; data: Uint8Array }) {
    super();
    this.silent = params.silent;
    this.peer = params.peer;
    this.random_id = params.random_id;
    this.data = params.data;
  }
}

class messages_sendEncryptedFile_ extends Function_<enums.messages.SentEncryptedMessage> {
  static __F = Symbol() as unknown as (params: { silent?: true; peer: enums.InputEncryptedChat; random_id: bigint; data: Uint8Array; file: enums.InputEncryptedFile }) => enums.messages.SentEncryptedMessage;
  silent?: true;
  peer: enums.InputEncryptedChat;
  random_id: bigint;
  data: Uint8Array;
  file: enums.InputEncryptedFile;

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

  constructor(params: { silent?: true; peer: enums.InputEncryptedChat; random_id: bigint; data: Uint8Array; file: enums.InputEncryptedFile }) {
    super();
    this.silent = params.silent;
    this.peer = params.peer;
    this.random_id = params.random_id;
    this.data = params.data;
    this.file = params.file;
  }
}

class messages_sendEncryptedService_ extends Function_<enums.messages.SentEncryptedMessage> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputEncryptedChat; random_id: bigint; data: Uint8Array }) => enums.messages.SentEncryptedMessage;
  peer: enums.InputEncryptedChat;
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

  constructor(params: { peer: enums.InputEncryptedChat; random_id: bigint; data: Uint8Array }) {
    super();
    this.peer = params.peer;
    this.random_id = params.random_id;
    this.data = params.data;
  }
}

class messages_receivedQueue_ extends Function_<bigint[]> {
  static __F = Symbol() as unknown as (params: { max_qts: number }) => bigint[];
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

class messages_reportEncryptedSpam_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputEncryptedChat }) => boolean;
  peer: enums.InputEncryptedChat;

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

  constructor(params: { peer: enums.InputEncryptedChat }) {
    super();
    this.peer = params.peer;
  }
}

class messages_readMessageContents_ extends Function_<enums.messages.AffectedMessages> {
  static __F = Symbol() as unknown as (params: { id: Array<number> }) => enums.messages.AffectedMessages;
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

class messages_getStickers_ extends Function_<enums.messages.Stickers> {
  static __F = Symbol() as unknown as (params: { emoticon: string; hash: bigint }) => enums.messages.Stickers;
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

class messages_getAllStickers_ extends Function_<enums.messages.AllStickers> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.messages.AllStickers;
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

class messages_getWebPagePreview_ extends Function_<enums.MessageMedia> {
  static __F = Symbol() as unknown as (params: { message: string; entities?: Array<enums.MessageEntity> }) => enums.MessageMedia;
  message: string;
  entities?: Array<enums.MessageEntity>;

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

  constructor(params: { message: string; entities?: Array<enums.MessageEntity> }) {
    super();
    this.message = params.message;
    this.entities = params.entities;
  }
}

class messages_exportChatInvite_ extends Function_<enums.ExportedChatInvite> {
  static __F = Symbol() as unknown as (params: { legacy_revoke_permanent?: true; request_needed?: true; peer: enums.InputPeer; expire_date?: number; usage_limit?: number; title?: string }) => enums.ExportedChatInvite;
  legacy_revoke_permanent?: true;
  request_needed?: true;
  peer: enums.InputPeer;
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

  constructor(params: { legacy_revoke_permanent?: true; request_needed?: true; peer: enums.InputPeer; expire_date?: number; usage_limit?: number; title?: string }) {
    super();
    this.legacy_revoke_permanent = params.legacy_revoke_permanent;
    this.request_needed = params.request_needed;
    this.peer = params.peer;
    this.expire_date = params.expire_date;
    this.usage_limit = params.usage_limit;
    this.title = params.title;
  }
}

class messages_checkChatInvite_ extends Function_<enums.ChatInvite> {
  static __F = Symbol() as unknown as (params: { hash: string }) => enums.ChatInvite;
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

class messages_importChatInvite_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { hash: string }) => enums.Updates;
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

class messages_getStickerSet_ extends Function_<enums.messages.StickerSet> {
  static __F = Symbol() as unknown as (params: { stickerset: enums.InputStickerSet; hash: number }) => enums.messages.StickerSet;
  stickerset: enums.InputStickerSet;
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

  constructor(params: { stickerset: enums.InputStickerSet; hash: number }) {
    super();
    this.stickerset = params.stickerset;
    this.hash = params.hash;
  }
}

class messages_installStickerSet_ extends Function_<enums.messages.StickerSetInstallResult> {
  static __F = Symbol() as unknown as (params: { stickerset: enums.InputStickerSet; archived: boolean }) => enums.messages.StickerSetInstallResult;
  stickerset: enums.InputStickerSet;
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

  constructor(params: { stickerset: enums.InputStickerSet; archived: boolean }) {
    super();
    this.stickerset = params.stickerset;
    this.archived = params.archived;
  }
}

class messages_uninstallStickerSet_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { stickerset: enums.InputStickerSet }) => boolean;
  stickerset: enums.InputStickerSet;

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

  constructor(params: { stickerset: enums.InputStickerSet }) {
    super();
    this.stickerset = params.stickerset;
  }
}

class messages_startBot_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { bot: enums.InputUser; peer: enums.InputPeer; random_id: bigint; start_param: string }) => enums.Updates;
  bot: enums.InputUser;
  peer: enums.InputPeer;
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

  constructor(params: { bot: enums.InputUser; peer: enums.InputPeer; random_id: bigint; start_param: string }) {
    super();
    this.bot = params.bot;
    this.peer = params.peer;
    this.random_id = params.random_id;
    this.start_param = params.start_param;
  }
}

class messages_getMessagesViews_ extends Function_<enums.messages.MessageViews> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: Array<number>; increment: boolean }) => enums.messages.MessageViews;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; id: Array<number>; increment: boolean }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.increment = params.increment;
  }
}

class messages_editChatAdmin_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { chat_id: bigint; user_id: enums.InputUser; is_admin: boolean }) => boolean;
  chat_id: bigint;
  user_id: enums.InputUser;
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

  constructor(params: { chat_id: bigint; user_id: enums.InputUser; is_admin: boolean }) {
    super();
    this.chat_id = params.chat_id;
    this.user_id = params.user_id;
    this.is_admin = params.is_admin;
  }
}

class messages_migrateChat_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { chat_id: bigint }) => enums.Updates;
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

class messages_searchGlobal_ extends Function_<enums.messages.Messages> {
  static __F = Symbol() as unknown as (params: { folder_id?: number; q: string; filter: enums.MessagesFilter; min_date: number; max_date: number; offset_rate: number; offset_peer: enums.InputPeer; offset_id: number; limit: number }) => enums.messages.Messages;
  folder_id?: number;
  q: string;
  filter: enums.MessagesFilter;
  min_date: number;
  max_date: number;
  offset_rate: number;
  offset_peer: enums.InputPeer;
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

  constructor(params: { folder_id?: number; q: string; filter: enums.MessagesFilter; min_date: number; max_date: number; offset_rate: number; offset_peer: enums.InputPeer; offset_id: number; limit: number }) {
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

class messages_reorderStickerSets_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { masks?: true; emojis?: true; order: Array<bigint> }) => boolean;
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

class messages_getDocumentByHash_ extends Function_<enums.Document> {
  static __F = Symbol() as unknown as (params: { sha256: Uint8Array; size: bigint; mime_type: string }) => enums.Document;
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

class messages_getSavedGifs_ extends Function_<enums.messages.SavedGifs> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.messages.SavedGifs;
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

class messages_saveGif_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { id: enums.InputDocument; unsave: boolean }) => boolean;
  id: enums.InputDocument;
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

  constructor(params: { id: enums.InputDocument; unsave: boolean }) {
    super();
    this.id = params.id;
    this.unsave = params.unsave;
  }
}

class messages_getInlineBotResults_ extends Function_<enums.messages.BotResults> {
  static __F = Symbol() as unknown as (params: { bot: enums.InputUser; peer: enums.InputPeer; geo_point?: enums.InputGeoPoint; query: string; offset: string }) => enums.messages.BotResults;
  bot: enums.InputUser;
  peer: enums.InputPeer;
  geo_point?: enums.InputGeoPoint;
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

  constructor(params: { bot: enums.InputUser; peer: enums.InputPeer; geo_point?: enums.InputGeoPoint; query: string; offset: string }) {
    super();
    this.bot = params.bot;
    this.peer = params.peer;
    this.geo_point = params.geo_point;
    this.query = params.query;
    this.offset = params.offset;
  }
}

class messages_setInlineBotResults_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { gallery?: true; private?: true; query_id: bigint; results: Array<enums.InputBotInlineResult>; cache_time: number; next_offset?: string; switch_pm?: enums.InlineBotSwitchPM; switch_webview?: enums.InlineBotWebView }) => boolean;
  gallery?: true;
  private?: true;
  query_id: bigint;
  results: Array<enums.InputBotInlineResult>;
  cache_time: number;
  next_offset?: string;
  switch_pm?: enums.InlineBotSwitchPM;
  switch_webview?: enums.InlineBotWebView;

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

  constructor(params: { gallery?: true; private?: true; query_id: bigint; results: Array<enums.InputBotInlineResult>; cache_time: number; next_offset?: string; switch_pm?: enums.InlineBotSwitchPM; switch_webview?: enums.InlineBotWebView }) {
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

class messages_sendInlineBotResult_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { silent?: true; background?: true; clear_draft?: true; hide_via?: true; peer: enums.InputPeer; reply_to?: enums.InputReplyTo; random_id: bigint; query_id: bigint; id: string; schedule_date?: number; send_as?: enums.InputPeer }) => enums.Updates;
  silent?: true;
  background?: true;
  clear_draft?: true;
  hide_via?: true;
  peer: enums.InputPeer;
  reply_to?: enums.InputReplyTo;
  random_id: bigint;
  query_id: bigint;
  id: string;
  schedule_date?: number;
  send_as?: enums.InputPeer;

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

  constructor(params: { silent?: true; background?: true; clear_draft?: true; hide_via?: true; peer: enums.InputPeer; reply_to?: enums.InputReplyTo; random_id: bigint; query_id: bigint; id: string; schedule_date?: number; send_as?: enums.InputPeer }) {
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

class messages_getMessageEditData_ extends Function_<enums.messages.MessageEditData> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: number }) => enums.messages.MessageEditData;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; id: number }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

class messages_editMessage_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { no_webpage?: true; invert_media?: true; peer: enums.InputPeer; id: number; message?: string; media?: enums.InputMedia; reply_markup?: enums.ReplyMarkup; entities?: Array<enums.MessageEntity>; schedule_date?: number }) => enums.Updates;
  no_webpage?: true;
  invert_media?: true;
  peer: enums.InputPeer;
  id: number;
  message?: string;
  media?: enums.InputMedia;
  reply_markup?: enums.ReplyMarkup;
  entities?: Array<enums.MessageEntity>;
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

  constructor(params: { no_webpage?: true; invert_media?: true; peer: enums.InputPeer; id: number; message?: string; media?: enums.InputMedia; reply_markup?: enums.ReplyMarkup; entities?: Array<enums.MessageEntity>; schedule_date?: number }) {
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

class messages_editInlineBotMessage_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { no_webpage?: true; invert_media?: true; id: enums.InputBotInlineMessageID; message?: string; media?: enums.InputMedia; reply_markup?: enums.ReplyMarkup; entities?: Array<enums.MessageEntity> }) => boolean;
  no_webpage?: true;
  invert_media?: true;
  id: enums.InputBotInlineMessageID;
  message?: string;
  media?: enums.InputMedia;
  reply_markup?: enums.ReplyMarkup;
  entities?: Array<enums.MessageEntity>;

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

  constructor(params: { no_webpage?: true; invert_media?: true; id: enums.InputBotInlineMessageID; message?: string; media?: enums.InputMedia; reply_markup?: enums.ReplyMarkup; entities?: Array<enums.MessageEntity> }) {
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

class messages_getBotCallbackAnswer_ extends Function_<enums.messages.BotCallbackAnswer> {
  static __F = Symbol() as unknown as (params: { game?: true; peer: enums.InputPeer; msg_id: number; data?: Uint8Array; password?: enums.InputCheckPasswordSRP }) => enums.messages.BotCallbackAnswer;
  game?: true;
  peer: enums.InputPeer;
  msg_id: number;
  data?: Uint8Array;
  password?: enums.InputCheckPasswordSRP;

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

  constructor(params: { game?: true; peer: enums.InputPeer; msg_id: number; data?: Uint8Array; password?: enums.InputCheckPasswordSRP }) {
    super();
    this.game = params.game;
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.data = params.data;
    this.password = params.password;
  }
}

class messages_setBotCallbackAnswer_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { alert?: true; query_id: bigint; message?: string; url?: string; cache_time: number }) => boolean;
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

class messages_getPeerDialogs_ extends Function_<enums.messages.PeerDialogs> {
  static __F = Symbol() as unknown as (params: { peers: Array<enums.InputDialogPeer> }) => enums.messages.PeerDialogs;
  peers: Array<enums.InputDialogPeer>;

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

  constructor(params: { peers: Array<enums.InputDialogPeer> }) {
    super();
    this.peers = params.peers;
  }
}

class messages_saveDraft_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { no_webpage?: true; invert_media?: true; reply_to?: enums.InputReplyTo; peer: enums.InputPeer; message: string; entities?: Array<enums.MessageEntity>; media?: enums.InputMedia }) => boolean;
  no_webpage?: true;
  invert_media?: true;
  reply_to?: enums.InputReplyTo;
  peer: enums.InputPeer;
  message: string;
  entities?: Array<enums.MessageEntity>;
  media?: enums.InputMedia;

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

  constructor(params: { no_webpage?: true; invert_media?: true; reply_to?: enums.InputReplyTo; peer: enums.InputPeer; message: string; entities?: Array<enums.MessageEntity>; media?: enums.InputMedia }) {
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

class messages_getAllDrafts_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as () => enums.Updates;
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

class messages_getFeaturedStickers_ extends Function_<enums.messages.FeaturedStickers> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.messages.FeaturedStickers;
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

class messages_readFeaturedStickers_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { id: Array<bigint> }) => boolean;
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

class messages_getRecentStickers_ extends Function_<enums.messages.RecentStickers> {
  static __F = Symbol() as unknown as (params: { attached?: true; hash: bigint }) => enums.messages.RecentStickers;
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

class messages_saveRecentSticker_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { attached?: true; id: enums.InputDocument; unsave: boolean }) => boolean;
  attached?: true;
  id: enums.InputDocument;
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

  constructor(params: { attached?: true; id: enums.InputDocument; unsave: boolean }) {
    super();
    this.attached = params.attached;
    this.id = params.id;
    this.unsave = params.unsave;
  }
}

class messages_clearRecentStickers_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params?: { attached?: true }) => boolean;
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

class messages_getArchivedStickers_ extends Function_<enums.messages.ArchivedStickers> {
  static __F = Symbol() as unknown as (params: { masks?: true; emojis?: true; offset_id: bigint; limit: number }) => enums.messages.ArchivedStickers;
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

class messages_getMaskStickers_ extends Function_<enums.messages.AllStickers> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.messages.AllStickers;
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

class messages_getAttachedStickers_ extends Function_<enums.StickerSetCovered[]> {
  static __F = Symbol() as unknown as (params: { media: enums.InputStickeredMedia }) => enums.StickerSetCovered[];
  media: enums.InputStickeredMedia;

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

  constructor(params: { media: enums.InputStickeredMedia }) {
    super();
    this.media = params.media;
  }
}

class messages_setGameScore_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { edit_message?: true; force?: true; peer: enums.InputPeer; id: number; user_id: enums.InputUser; score: number }) => enums.Updates;
  edit_message?: true;
  force?: true;
  peer: enums.InputPeer;
  id: number;
  user_id: enums.InputUser;
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

  constructor(params: { edit_message?: true; force?: true; peer: enums.InputPeer; id: number; user_id: enums.InputUser; score: number }) {
    super();
    this.edit_message = params.edit_message;
    this.force = params.force;
    this.peer = params.peer;
    this.id = params.id;
    this.user_id = params.user_id;
    this.score = params.score;
  }
}

class messages_setInlineGameScore_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { edit_message?: true; force?: true; id: enums.InputBotInlineMessageID; user_id: enums.InputUser; score: number }) => boolean;
  edit_message?: true;
  force?: true;
  id: enums.InputBotInlineMessageID;
  user_id: enums.InputUser;
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

  constructor(params: { edit_message?: true; force?: true; id: enums.InputBotInlineMessageID; user_id: enums.InputUser; score: number }) {
    super();
    this.edit_message = params.edit_message;
    this.force = params.force;
    this.id = params.id;
    this.user_id = params.user_id;
    this.score = params.score;
  }
}

class messages_getGameHighScores_ extends Function_<enums.messages.HighScores> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: number; user_id: enums.InputUser }) => enums.messages.HighScores;
  peer: enums.InputPeer;
  id: number;
  user_id: enums.InputUser;

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

  constructor(params: { peer: enums.InputPeer; id: number; user_id: enums.InputUser }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.user_id = params.user_id;
  }
}

class messages_getInlineGameHighScores_ extends Function_<enums.messages.HighScores> {
  static __F = Symbol() as unknown as (params: { id: enums.InputBotInlineMessageID; user_id: enums.InputUser }) => enums.messages.HighScores;
  id: enums.InputBotInlineMessageID;
  user_id: enums.InputUser;

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

  constructor(params: { id: enums.InputBotInlineMessageID; user_id: enums.InputUser }) {
    super();
    this.id = params.id;
    this.user_id = params.user_id;
  }
}

class messages_getCommonChats_ extends Function_<enums.messages.Chats> {
  static __F = Symbol() as unknown as (params: { user_id: enums.InputUser; max_id: bigint; limit: number }) => enums.messages.Chats;
  user_id: enums.InputUser;
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

  constructor(params: { user_id: enums.InputUser; max_id: bigint; limit: number }) {
    super();
    this.user_id = params.user_id;
    this.max_id = params.max_id;
    this.limit = params.limit;
  }
}

class messages_getWebPage_ extends Function_<enums.messages.WebPage> {
  static __F = Symbol() as unknown as (params: { url: string; hash: number }) => enums.messages.WebPage;
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

class messages_toggleDialogPin_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { pinned?: true; peer: enums.InputDialogPeer }) => boolean;
  pinned?: true;
  peer: enums.InputDialogPeer;

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

  constructor(params: { pinned?: true; peer: enums.InputDialogPeer }) {
    super();
    this.pinned = params.pinned;
    this.peer = params.peer;
  }
}

class messages_reorderPinnedDialogs_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { force?: true; folder_id: number; order: Array<enums.InputDialogPeer> }) => boolean;
  force?: true;
  folder_id: number;
  order: Array<enums.InputDialogPeer>;

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

  constructor(params: { force?: true; folder_id: number; order: Array<enums.InputDialogPeer> }) {
    super();
    this.force = params.force;
    this.folder_id = params.folder_id;
    this.order = params.order;
  }
}

class messages_getPinnedDialogs_ extends Function_<enums.messages.PeerDialogs> {
  static __F = Symbol() as unknown as (params: { folder_id: number }) => enums.messages.PeerDialogs;
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

class messages_setBotShippingResults_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { query_id: bigint; error?: string; shipping_options?: Array<enums.ShippingOption> }) => boolean;
  query_id: bigint;
  error?: string;
  shipping_options?: Array<enums.ShippingOption>;

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

  constructor(params: { query_id: bigint; error?: string; shipping_options?: Array<enums.ShippingOption> }) {
    super();
    this.query_id = params.query_id;
    this.error = params.error;
    this.shipping_options = params.shipping_options;
  }
}

class messages_setBotPrecheckoutResults_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { success?: true; query_id: bigint; error?: string }) => boolean;
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

class messages_uploadMedia_ extends Function_<enums.MessageMedia> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; media: enums.InputMedia }) => enums.MessageMedia;
  peer: enums.InputPeer;
  media: enums.InputMedia;

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

  constructor(params: { peer: enums.InputPeer; media: enums.InputMedia }) {
    super();
    this.peer = params.peer;
    this.media = params.media;
  }
}

class messages_sendScreenshotNotification_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; reply_to: enums.InputReplyTo; random_id: bigint }) => enums.Updates;
  peer: enums.InputPeer;
  reply_to: enums.InputReplyTo;
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

  constructor(params: { peer: enums.InputPeer; reply_to: enums.InputReplyTo; random_id: bigint }) {
    super();
    this.peer = params.peer;
    this.reply_to = params.reply_to;
    this.random_id = params.random_id;
  }
}

class messages_getFavedStickers_ extends Function_<enums.messages.FavedStickers> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.messages.FavedStickers;
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

class messages_faveSticker_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { id: enums.InputDocument; unfave: boolean }) => boolean;
  id: enums.InputDocument;
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

  constructor(params: { id: enums.InputDocument; unfave: boolean }) {
    super();
    this.id = params.id;
    this.unfave = params.unfave;
  }
}

class messages_getUnreadMentions_ extends Function_<enums.messages.Messages> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; top_msg_id?: number; offset_id: number; add_offset: number; limit: number; max_id: number; min_id: number }) => enums.messages.Messages;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; top_msg_id?: number; offset_id: number; add_offset: number; limit: number; max_id: number; min_id: number }) {
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

class messages_readMentions_ extends Function_<enums.messages.AffectedHistory> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; top_msg_id?: number }) => enums.messages.AffectedHistory;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; top_msg_id?: number }) {
    super();
    this.peer = params.peer;
    this.top_msg_id = params.top_msg_id;
  }
}

class messages_getRecentLocations_ extends Function_<enums.messages.Messages> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; limit: number; hash: bigint }) => enums.messages.Messages;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; limit: number; hash: bigint }) {
    super();
    this.peer = params.peer;
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

class messages_sendMultiMedia_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { silent?: true; background?: true; clear_draft?: true; noforwards?: true; update_stickersets_order?: true; invert_media?: true; peer: enums.InputPeer; reply_to?: enums.InputReplyTo; multi_media: Array<enums.InputSingleMedia>; schedule_date?: number; send_as?: enums.InputPeer }) => enums.Updates;
  silent?: true;
  background?: true;
  clear_draft?: true;
  noforwards?: true;
  update_stickersets_order?: true;
  invert_media?: true;
  peer: enums.InputPeer;
  reply_to?: enums.InputReplyTo;
  multi_media: Array<enums.InputSingleMedia>;
  schedule_date?: number;
  send_as?: enums.InputPeer;

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

  constructor(params: { silent?: true; background?: true; clear_draft?: true; noforwards?: true; update_stickersets_order?: true; invert_media?: true; peer: enums.InputPeer; reply_to?: enums.InputReplyTo; multi_media: Array<enums.InputSingleMedia>; schedule_date?: number; send_as?: enums.InputPeer }) {
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

class messages_uploadEncryptedFile_ extends Function_<enums.EncryptedFile> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputEncryptedChat; file: enums.InputEncryptedFile }) => enums.EncryptedFile;
  peer: enums.InputEncryptedChat;
  file: enums.InputEncryptedFile;

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

  constructor(params: { peer: enums.InputEncryptedChat; file: enums.InputEncryptedFile }) {
    super();
    this.peer = params.peer;
    this.file = params.file;
  }
}

class messages_searchStickerSets_ extends Function_<enums.messages.FoundStickerSets> {
  static __F = Symbol() as unknown as (params: { exclude_featured?: true; q: string; hash: bigint }) => enums.messages.FoundStickerSets;
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

class messages_getSplitRanges_ extends Function_<enums.MessageRange[]> {
  static __F = Symbol() as unknown as () => enums.MessageRange[];
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

class messages_markDialogUnread_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { unread?: true; peer: enums.InputDialogPeer }) => boolean;
  unread?: true;
  peer: enums.InputDialogPeer;

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

  constructor(params: { unread?: true; peer: enums.InputDialogPeer }) {
    super();
    this.unread = params.unread;
    this.peer = params.peer;
  }
}

class messages_getDialogUnreadMarks_ extends Function_<enums.DialogPeer[]> {
  static __F = Symbol() as unknown as () => enums.DialogPeer[];
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

class messages_clearAllDrafts_ extends Function_<boolean> {
  static __F = Symbol() as unknown as () => boolean;
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

class messages_updatePinnedMessage_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { silent?: true; unpin?: true; pm_oneside?: true; peer: enums.InputPeer; id: number }) => enums.Updates;
  silent?: true;
  unpin?: true;
  pm_oneside?: true;
  peer: enums.InputPeer;
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

  constructor(params: { silent?: true; unpin?: true; pm_oneside?: true; peer: enums.InputPeer; id: number }) {
    super();
    this.silent = params.silent;
    this.unpin = params.unpin;
    this.pm_oneside = params.pm_oneside;
    this.peer = params.peer;
    this.id = params.id;
  }
}

class messages_sendVote_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; msg_id: number; options: Array<Uint8Array> }) => enums.Updates;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; msg_id: number; options: Array<Uint8Array> }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.options = params.options;
  }
}

class messages_getPollResults_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; msg_id: number }) => enums.Updates;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; msg_id: number }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
  }
}

class messages_getOnlines_ extends Function_<enums.ChatOnlines> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer }) => enums.ChatOnlines;
  peer: enums.InputPeer;

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

  constructor(params: { peer: enums.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

class messages_editChatAbout_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; about: string }) => boolean;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; about: string }) {
    super();
    this.peer = params.peer;
    this.about = params.about;
  }
}

class messages_editChatDefaultBannedRights_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; banned_rights: enums.ChatBannedRights }) => enums.Updates;
  peer: enums.InputPeer;
  banned_rights: enums.ChatBannedRights;

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

  constructor(params: { peer: enums.InputPeer; banned_rights: enums.ChatBannedRights }) {
    super();
    this.peer = params.peer;
    this.banned_rights = params.banned_rights;
  }
}

class messages_getEmojiKeywords_ extends Function_<enums.EmojiKeywordsDifference> {
  static __F = Symbol() as unknown as (params: { lang_code: string }) => enums.EmojiKeywordsDifference;
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

class messages_getEmojiKeywordsDifference_ extends Function_<enums.EmojiKeywordsDifference> {
  static __F = Symbol() as unknown as (params: { lang_code: string; from_version: number }) => enums.EmojiKeywordsDifference;
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

class messages_getEmojiKeywordsLanguages_ extends Function_<enums.EmojiLanguage[]> {
  static __F = Symbol() as unknown as (params: { lang_codes: Array<string> }) => enums.EmojiLanguage[];
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

class messages_getEmojiURL_ extends Function_<enums.EmojiURL> {
  static __F = Symbol() as unknown as (params: { lang_code: string }) => enums.EmojiURL;
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

class messages_getSearchCounters_ extends Function_<enums.messages.SearchCounter[]> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; top_msg_id?: number; filters: Array<enums.MessagesFilter> }) => enums.messages.SearchCounter[];
  peer: enums.InputPeer;
  top_msg_id?: number;
  filters: Array<enums.MessagesFilter>;

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

  constructor(params: { peer: enums.InputPeer; top_msg_id?: number; filters: Array<enums.MessagesFilter> }) {
    super();
    this.peer = params.peer;
    this.top_msg_id = params.top_msg_id;
    this.filters = params.filters;
  }
}

class messages_requestUrlAuth_ extends Function_<enums.UrlAuthResult> {
  static __F = Symbol() as unknown as (params?: { peer?: enums.InputPeer; msg_id?: number; button_id?: number; url?: string }) => enums.UrlAuthResult;
  peer?: enums.InputPeer;
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

  constructor(params?: { peer?: enums.InputPeer; msg_id?: number; button_id?: number; url?: string }) {
    super();
    this.peer = params?.peer;
    this.msg_id = params?.msg_id;
    this.button_id = params?.button_id;
    this.url = params?.url;
  }
}

class messages_acceptUrlAuth_ extends Function_<enums.UrlAuthResult> {
  static __F = Symbol() as unknown as (params?: { write_allowed?: true; peer?: enums.InputPeer; msg_id?: number; button_id?: number; url?: string }) => enums.UrlAuthResult;
  write_allowed?: true;
  peer?: enums.InputPeer;
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

  constructor(params?: { write_allowed?: true; peer?: enums.InputPeer; msg_id?: number; button_id?: number; url?: string }) {
    super();
    this.write_allowed = params?.write_allowed;
    this.peer = params?.peer;
    this.msg_id = params?.msg_id;
    this.button_id = params?.button_id;
    this.url = params?.url;
  }
}

class messages_hidePeerSettingsBar_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer }) => boolean;
  peer: enums.InputPeer;

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

  constructor(params: { peer: enums.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

class messages_getScheduledHistory_ extends Function_<enums.messages.Messages> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; hash: bigint }) => enums.messages.Messages;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; hash: bigint }) {
    super();
    this.peer = params.peer;
    this.hash = params.hash;
  }
}

class messages_getScheduledMessages_ extends Function_<enums.messages.Messages> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => enums.messages.Messages;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

class messages_sendScheduledMessages_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => enums.Updates;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

class messages_deleteScheduledMessages_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => enums.Updates;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

class messages_getPollVotes_ extends Function_<enums.messages.VotesList> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: number; option?: Uint8Array; offset?: string; limit: number }) => enums.messages.VotesList;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; id: number; option?: Uint8Array; offset?: string; limit: number }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.option = params.option;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

class messages_toggleStickerSets_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { uninstall?: true; archive?: true; unarchive?: true; stickersets: Array<enums.InputStickerSet> }) => boolean;
  uninstall?: true;
  archive?: true;
  unarchive?: true;
  stickersets: Array<enums.InputStickerSet>;

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

  constructor(params: { uninstall?: true; archive?: true; unarchive?: true; stickersets: Array<enums.InputStickerSet> }) {
    super();
    this.uninstall = params.uninstall;
    this.archive = params.archive;
    this.unarchive = params.unarchive;
    this.stickersets = params.stickersets;
  }
}

class messages_getDialogFilters_ extends Function_<enums.DialogFilter[]> {
  static __F = Symbol() as unknown as () => enums.DialogFilter[];
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

class messages_getSuggestedDialogFilters_ extends Function_<enums.DialogFilterSuggested[]> {
  static __F = Symbol() as unknown as () => enums.DialogFilterSuggested[];
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

class messages_updateDialogFilter_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { id: number; filter?: enums.DialogFilter }) => boolean;
  id: number;
  filter?: enums.DialogFilter;

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

  constructor(params: { id: number; filter?: enums.DialogFilter }) {
    super();
    this.id = params.id;
    this.filter = params.filter;
  }
}

class messages_updateDialogFiltersOrder_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { order: Array<number> }) => boolean;
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

class messages_getOldFeaturedStickers_ extends Function_<enums.messages.FeaturedStickers> {
  static __F = Symbol() as unknown as (params: { offset: number; limit: number; hash: bigint }) => enums.messages.FeaturedStickers;
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

class messages_getReplies_ extends Function_<enums.messages.Messages> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; msg_id: number; offset_id: number; offset_date: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) => enums.messages.Messages;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; msg_id: number; offset_id: number; offset_date: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) {
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

class messages_getDiscussionMessage_ extends Function_<enums.messages.DiscussionMessage> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; msg_id: number }) => enums.messages.DiscussionMessage;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; msg_id: number }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
  }
}

class messages_readDiscussion_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; msg_id: number; read_max_id: number }) => boolean;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; msg_id: number; read_max_id: number }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.read_max_id = params.read_max_id;
  }
}

class messages_unpinAllMessages_ extends Function_<enums.messages.AffectedHistory> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; top_msg_id?: number }) => enums.messages.AffectedHistory;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; top_msg_id?: number }) {
    super();
    this.peer = params.peer;
    this.top_msg_id = params.top_msg_id;
  }
}

class messages_deleteChat_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { chat_id: bigint }) => boolean;
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

class messages_deletePhoneCallHistory_ extends Function_<enums.messages.AffectedFoundMessages> {
  static __F = Symbol() as unknown as (params?: { revoke?: true }) => enums.messages.AffectedFoundMessages;
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

class messages_checkHistoryImport_ extends Function_<enums.messages.HistoryImportParsed> {
  static __F = Symbol() as unknown as (params: { import_head: string }) => enums.messages.HistoryImportParsed;
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

class messages_initHistoryImport_ extends Function_<enums.messages.HistoryImport> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; file: enums.InputFile; media_count: number }) => enums.messages.HistoryImport;
  peer: enums.InputPeer;
  file: enums.InputFile;
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

  constructor(params: { peer: enums.InputPeer; file: enums.InputFile; media_count: number }) {
    super();
    this.peer = params.peer;
    this.file = params.file;
    this.media_count = params.media_count;
  }
}

class messages_uploadImportedMedia_ extends Function_<enums.MessageMedia> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; import_id: bigint; file_name: string; media: enums.InputMedia }) => enums.MessageMedia;
  peer: enums.InputPeer;
  import_id: bigint;
  file_name: string;
  media: enums.InputMedia;

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

  constructor(params: { peer: enums.InputPeer; import_id: bigint; file_name: string; media: enums.InputMedia }) {
    super();
    this.peer = params.peer;
    this.import_id = params.import_id;
    this.file_name = params.file_name;
    this.media = params.media;
  }
}

class messages_startHistoryImport_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; import_id: bigint }) => boolean;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; import_id: bigint }) {
    super();
    this.peer = params.peer;
    this.import_id = params.import_id;
  }
}

class messages_getExportedChatInvites_ extends Function_<enums.messages.ExportedChatInvites> {
  static __F = Symbol() as unknown as (params: { revoked?: true; peer: enums.InputPeer; admin_id: enums.InputUser; offset_date?: number; offset_link?: string; limit: number }) => enums.messages.ExportedChatInvites;
  revoked?: true;
  peer: enums.InputPeer;
  admin_id: enums.InputUser;
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

  constructor(params: { revoked?: true; peer: enums.InputPeer; admin_id: enums.InputUser; offset_date?: number; offset_link?: string; limit: number }) {
    super();
    this.revoked = params.revoked;
    this.peer = params.peer;
    this.admin_id = params.admin_id;
    this.offset_date = params.offset_date;
    this.offset_link = params.offset_link;
    this.limit = params.limit;
  }
}

class messages_getExportedChatInvite_ extends Function_<enums.messages.ExportedChatInvite> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; link: string }) => enums.messages.ExportedChatInvite;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; link: string }) {
    super();
    this.peer = params.peer;
    this.link = params.link;
  }
}

class messages_editExportedChatInvite_ extends Function_<enums.messages.ExportedChatInvite> {
  static __F = Symbol() as unknown as (params: { revoked?: true; peer: enums.InputPeer; link: string; expire_date?: number; usage_limit?: number; request_needed?: boolean; title?: string }) => enums.messages.ExportedChatInvite;
  revoked?: true;
  peer: enums.InputPeer;
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

  constructor(params: { revoked?: true; peer: enums.InputPeer; link: string; expire_date?: number; usage_limit?: number; request_needed?: boolean; title?: string }) {
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

class messages_deleteRevokedExportedChatInvites_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; admin_id: enums.InputUser }) => boolean;
  peer: enums.InputPeer;
  admin_id: enums.InputUser;

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

  constructor(params: { peer: enums.InputPeer; admin_id: enums.InputUser }) {
    super();
    this.peer = params.peer;
    this.admin_id = params.admin_id;
  }
}

class messages_deleteExportedChatInvite_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; link: string }) => boolean;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; link: string }) {
    super();
    this.peer = params.peer;
    this.link = params.link;
  }
}

class messages_getAdminsWithInvites_ extends Function_<enums.messages.ChatAdminsWithInvites> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer }) => enums.messages.ChatAdminsWithInvites;
  peer: enums.InputPeer;

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

  constructor(params: { peer: enums.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

class messages_getChatInviteImporters_ extends Function_<enums.messages.ChatInviteImporters> {
  static __F = Symbol() as unknown as (params: { requested?: true; peer: enums.InputPeer; link?: string; q?: string; offset_date: number; offset_user: enums.InputUser; limit: number }) => enums.messages.ChatInviteImporters;
  requested?: true;
  peer: enums.InputPeer;
  link?: string;
  q?: string;
  offset_date: number;
  offset_user: enums.InputUser;
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

  constructor(params: { requested?: true; peer: enums.InputPeer; link?: string; q?: string; offset_date: number; offset_user: enums.InputUser; limit: number }) {
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

class messages_setHistoryTTL_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; period: number }) => enums.Updates;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; period: number }) {
    super();
    this.peer = params.peer;
    this.period = params.period;
  }
}

class messages_checkHistoryImportPeer_ extends Function_<enums.messages.CheckedHistoryImportPeer> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer }) => enums.messages.CheckedHistoryImportPeer;
  peer: enums.InputPeer;

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

  constructor(params: { peer: enums.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

class messages_setChatTheme_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; emoticon: string }) => enums.Updates;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; emoticon: string }) {
    super();
    this.peer = params.peer;
    this.emoticon = params.emoticon;
  }
}

class messages_getMessageReadParticipants_ extends Function_<enums.ReadParticipantDate[]> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; msg_id: number }) => enums.ReadParticipantDate[];
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; msg_id: number }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
  }
}

class messages_getSearchResultsCalendar_ extends Function_<enums.messages.SearchResultsCalendar> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; filter: enums.MessagesFilter; offset_id: number; offset_date: number }) => enums.messages.SearchResultsCalendar;
  peer: enums.InputPeer;
  filter: enums.MessagesFilter;
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

  constructor(params: { peer: enums.InputPeer; filter: enums.MessagesFilter; offset_id: number; offset_date: number }) {
    super();
    this.peer = params.peer;
    this.filter = params.filter;
    this.offset_id = params.offset_id;
    this.offset_date = params.offset_date;
  }
}

class messages_getSearchResultsPositions_ extends Function_<enums.messages.SearchResultsPositions> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; filter: enums.MessagesFilter; offset_id: number; limit: number }) => enums.messages.SearchResultsPositions;
  peer: enums.InputPeer;
  filter: enums.MessagesFilter;
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

  constructor(params: { peer: enums.InputPeer; filter: enums.MessagesFilter; offset_id: number; limit: number }) {
    super();
    this.peer = params.peer;
    this.filter = params.filter;
    this.offset_id = params.offset_id;
    this.limit = params.limit;
  }
}

class messages_hideChatJoinRequest_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { approved?: true; peer: enums.InputPeer; user_id: enums.InputUser }) => enums.Updates;
  approved?: true;
  peer: enums.InputPeer;
  user_id: enums.InputUser;

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

  constructor(params: { approved?: true; peer: enums.InputPeer; user_id: enums.InputUser }) {
    super();
    this.approved = params.approved;
    this.peer = params.peer;
    this.user_id = params.user_id;
  }
}

class messages_hideAllChatJoinRequests_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { approved?: true; peer: enums.InputPeer; link?: string }) => enums.Updates;
  approved?: true;
  peer: enums.InputPeer;
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

  constructor(params: { approved?: true; peer: enums.InputPeer; link?: string }) {
    super();
    this.approved = params.approved;
    this.peer = params.peer;
    this.link = params.link;
  }
}

class messages_toggleNoForwards_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; enabled: boolean }) => enums.Updates;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; enabled: boolean }) {
    super();
    this.peer = params.peer;
    this.enabled = params.enabled;
  }
}

class messages_saveDefaultSendAs_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; send_as: enums.InputPeer }) => boolean;
  peer: enums.InputPeer;
  send_as: enums.InputPeer;

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

  constructor(params: { peer: enums.InputPeer; send_as: enums.InputPeer }) {
    super();
    this.peer = params.peer;
    this.send_as = params.send_as;
  }
}

class messages_sendReaction_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { big?: true; add_to_recent?: true; peer: enums.InputPeer; msg_id: number; reaction?: Array<enums.Reaction> }) => enums.Updates;
  big?: true;
  add_to_recent?: true;
  peer: enums.InputPeer;
  msg_id: number;
  reaction?: Array<enums.Reaction>;

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

  constructor(params: { big?: true; add_to_recent?: true; peer: enums.InputPeer; msg_id: number; reaction?: Array<enums.Reaction> }) {
    super();
    this.big = params.big;
    this.add_to_recent = params.add_to_recent;
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.reaction = params.reaction;
  }
}

class messages_getMessagesReactions_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => enums.Updates;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

class messages_getMessageReactionsList_ extends Function_<enums.messages.MessageReactionsList> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: number; reaction?: enums.Reaction; offset?: string; limit: number }) => enums.messages.MessageReactionsList;
  peer: enums.InputPeer;
  id: number;
  reaction?: enums.Reaction;
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

  constructor(params: { peer: enums.InputPeer; id: number; reaction?: enums.Reaction; offset?: string; limit: number }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.reaction = params.reaction;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

class messages_setChatAvailableReactions_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; available_reactions: enums.ChatReactions }) => enums.Updates;
  peer: enums.InputPeer;
  available_reactions: enums.ChatReactions;

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

  constructor(params: { peer: enums.InputPeer; available_reactions: enums.ChatReactions }) {
    super();
    this.peer = params.peer;
    this.available_reactions = params.available_reactions;
  }
}

class messages_getAvailableReactions_ extends Function_<enums.messages.AvailableReactions> {
  static __F = Symbol() as unknown as (params: { hash: number }) => enums.messages.AvailableReactions;
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

class messages_setDefaultReaction_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { reaction: enums.Reaction }) => boolean;
  reaction: enums.Reaction;

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

  constructor(params: { reaction: enums.Reaction }) {
    super();
    this.reaction = params.reaction;
  }
}

class messages_translateText_ extends Function_<enums.messages.TranslatedText> {
  static __F = Symbol() as unknown as (params: { peer?: enums.InputPeer; id?: Array<number>; text?: Array<enums.TextWithEntities>; to_lang: string }) => enums.messages.TranslatedText;
  peer?: enums.InputPeer;
  id?: Array<number>;
  text?: Array<enums.TextWithEntities>;
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

  constructor(params: { peer?: enums.InputPeer; id?: Array<number>; text?: Array<enums.TextWithEntities>; to_lang: string }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.text = params.text;
    this.to_lang = params.to_lang;
  }
}

class messages_getUnreadReactions_ extends Function_<enums.messages.Messages> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; top_msg_id?: number; offset_id: number; add_offset: number; limit: number; max_id: number; min_id: number }) => enums.messages.Messages;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; top_msg_id?: number; offset_id: number; add_offset: number; limit: number; max_id: number; min_id: number }) {
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

class messages_readReactions_ extends Function_<enums.messages.AffectedHistory> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; top_msg_id?: number }) => enums.messages.AffectedHistory;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; top_msg_id?: number }) {
    super();
    this.peer = params.peer;
    this.top_msg_id = params.top_msg_id;
  }
}

class messages_searchSentMedia_ extends Function_<enums.messages.Messages> {
  static __F = Symbol() as unknown as (params: { q: string; filter: enums.MessagesFilter; limit: number }) => enums.messages.Messages;
  q: string;
  filter: enums.MessagesFilter;
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

  constructor(params: { q: string; filter: enums.MessagesFilter; limit: number }) {
    super();
    this.q = params.q;
    this.filter = params.filter;
    this.limit = params.limit;
  }
}

class messages_getAttachMenuBots_ extends Function_<enums.AttachMenuBots> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.AttachMenuBots;
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

class messages_getAttachMenuBot_ extends Function_<enums.AttachMenuBotsBot> {
  static __F = Symbol() as unknown as (params: { bot: enums.InputUser }) => enums.AttachMenuBotsBot;
  bot: enums.InputUser;

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

  constructor(params: { bot: enums.InputUser }) {
    super();
    this.bot = params.bot;
  }
}

class messages_toggleBotInAttachMenu_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { write_allowed?: true; bot: enums.InputUser; enabled: boolean }) => boolean;
  write_allowed?: true;
  bot: enums.InputUser;
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

  constructor(params: { write_allowed?: true; bot: enums.InputUser; enabled: boolean }) {
    super();
    this.write_allowed = params.write_allowed;
    this.bot = params.bot;
    this.enabled = params.enabled;
  }
}

class messages_requestWebView_ extends Function_<enums.WebViewResult> {
  static __F = Symbol() as unknown as (params: { from_bot_menu?: true; silent?: true; peer: enums.InputPeer; bot: enums.InputUser; url?: string; start_param?: string; theme_params?: enums.DataJSON; platform: string; reply_to?: enums.InputReplyTo; send_as?: enums.InputPeer }) => enums.WebViewResult;
  from_bot_menu?: true;
  silent?: true;
  peer: enums.InputPeer;
  bot: enums.InputUser;
  url?: string;
  start_param?: string;
  theme_params?: enums.DataJSON;
  platform: string;
  reply_to?: enums.InputReplyTo;
  send_as?: enums.InputPeer;

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

  constructor(params: { from_bot_menu?: true; silent?: true; peer: enums.InputPeer; bot: enums.InputUser; url?: string; start_param?: string; theme_params?: enums.DataJSON; platform: string; reply_to?: enums.InputReplyTo; send_as?: enums.InputPeer }) {
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

class messages_prolongWebView_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { silent?: true; peer: enums.InputPeer; bot: enums.InputUser; query_id: bigint; reply_to?: enums.InputReplyTo; send_as?: enums.InputPeer }) => boolean;
  silent?: true;
  peer: enums.InputPeer;
  bot: enums.InputUser;
  query_id: bigint;
  reply_to?: enums.InputReplyTo;
  send_as?: enums.InputPeer;

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

  constructor(params: { silent?: true; peer: enums.InputPeer; bot: enums.InputUser; query_id: bigint; reply_to?: enums.InputReplyTo; send_as?: enums.InputPeer }) {
    super();
    this.silent = params.silent;
    this.peer = params.peer;
    this.bot = params.bot;
    this.query_id = params.query_id;
    this.reply_to = params.reply_to;
    this.send_as = params.send_as;
  }
}

class messages_requestSimpleWebView_ extends Function_<enums.SimpleWebViewResult> {
  static __F = Symbol() as unknown as (params: { from_switch_webview?: true; from_side_menu?: true; bot: enums.InputUser; url?: string; start_param?: string; theme_params?: enums.DataJSON; platform: string }) => enums.SimpleWebViewResult;
  from_switch_webview?: true;
  from_side_menu?: true;
  bot: enums.InputUser;
  url?: string;
  start_param?: string;
  theme_params?: enums.DataJSON;
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

  constructor(params: { from_switch_webview?: true; from_side_menu?: true; bot: enums.InputUser; url?: string; start_param?: string; theme_params?: enums.DataJSON; platform: string }) {
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

class messages_sendWebViewResultMessage_ extends Function_<enums.WebViewMessageSent> {
  static __F = Symbol() as unknown as (params: { bot_query_id: string; result: enums.InputBotInlineResult }) => enums.WebViewMessageSent;
  bot_query_id: string;
  result: enums.InputBotInlineResult;

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

  constructor(params: { bot_query_id: string; result: enums.InputBotInlineResult }) {
    super();
    this.bot_query_id = params.bot_query_id;
    this.result = params.result;
  }
}

class messages_sendWebViewData_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { bot: enums.InputUser; random_id: bigint; button_text: string; data: string }) => enums.Updates;
  bot: enums.InputUser;
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

  constructor(params: { bot: enums.InputUser; random_id: bigint; button_text: string; data: string }) {
    super();
    this.bot = params.bot;
    this.random_id = params.random_id;
    this.button_text = params.button_text;
    this.data = params.data;
  }
}

class messages_transcribeAudio_ extends Function_<enums.messages.TranscribedAudio> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; msg_id: number }) => enums.messages.TranscribedAudio;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; msg_id: number }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
  }
}

class messages_rateTranscribedAudio_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; msg_id: number; transcription_id: bigint; good: boolean }) => boolean;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; msg_id: number; transcription_id: bigint; good: boolean }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.transcription_id = params.transcription_id;
    this.good = params.good;
  }
}

class messages_getCustomEmojiDocuments_ extends Function_<enums.Document[]> {
  static __F = Symbol() as unknown as (params: { document_id: Array<bigint> }) => enums.Document[];
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

class messages_getEmojiStickers_ extends Function_<enums.messages.AllStickers> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.messages.AllStickers;
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

class messages_getFeaturedEmojiStickers_ extends Function_<enums.messages.FeaturedStickers> {
  static __F = Symbol() as unknown as (params: { hash: bigint }) => enums.messages.FeaturedStickers;
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

class messages_reportReaction_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: number; reaction_peer: enums.InputPeer }) => boolean;
  peer: enums.InputPeer;
  id: number;
  reaction_peer: enums.InputPeer;

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

  constructor(params: { peer: enums.InputPeer; id: number; reaction_peer: enums.InputPeer }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.reaction_peer = params.reaction_peer;
  }
}

class messages_getTopReactions_ extends Function_<enums.messages.Reactions> {
  static __F = Symbol() as unknown as (params: { limit: number; hash: bigint }) => enums.messages.Reactions;
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

class messages_getRecentReactions_ extends Function_<enums.messages.Reactions> {
  static __F = Symbol() as unknown as (params: { limit: number; hash: bigint }) => enums.messages.Reactions;
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

class messages_clearRecentReactions_ extends Function_<boolean> {
  static __F = Symbol() as unknown as () => boolean;
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

class messages_getExtendedMedia_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => enums.Updates;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

class messages_setDefaultHistoryTTL_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { period: number }) => boolean;
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

class messages_getDefaultHistoryTTL_ extends Function_<enums.DefaultHistoryTTL> {
  static __F = Symbol() as unknown as () => enums.DefaultHistoryTTL;
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

class messages_sendBotRequestedPeer_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; msg_id: number; button_id: number; requested_peer: enums.InputPeer }) => enums.Updates;
  peer: enums.InputPeer;
  msg_id: number;
  button_id: number;
  requested_peer: enums.InputPeer;

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

  constructor(params: { peer: enums.InputPeer; msg_id: number; button_id: number; requested_peer: enums.InputPeer }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.button_id = params.button_id;
    this.requested_peer = params.requested_peer;
  }
}

class messages_getEmojiGroups_ extends Function_<enums.messages.EmojiGroups> {
  static __F = Symbol() as unknown as (params: { hash: number }) => enums.messages.EmojiGroups;
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

class messages_getEmojiStatusGroups_ extends Function_<enums.messages.EmojiGroups> {
  static __F = Symbol() as unknown as (params: { hash: number }) => enums.messages.EmojiGroups;
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

class messages_getEmojiProfilePhotoGroups_ extends Function_<enums.messages.EmojiGroups> {
  static __F = Symbol() as unknown as (params: { hash: number }) => enums.messages.EmojiGroups;
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

class messages_searchCustomEmoji_ extends Function_<enums.EmojiList> {
  static __F = Symbol() as unknown as (params: { emoticon: string; hash: bigint }) => enums.EmojiList;
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

class messages_togglePeerTranslations_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { disabled?: true; peer: enums.InputPeer }) => boolean;
  disabled?: true;
  peer: enums.InputPeer;

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

  constructor(params: { disabled?: true; peer: enums.InputPeer }) {
    super();
    this.disabled = params.disabled;
    this.peer = params.peer;
  }
}

class messages_getBotApp_ extends Function_<enums.messages.BotApp> {
  static __F = Symbol() as unknown as (params: { app: enums.InputBotApp; hash: bigint }) => enums.messages.BotApp;
  app: enums.InputBotApp;
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

  constructor(params: { app: enums.InputBotApp; hash: bigint }) {
    super();
    this.app = params.app;
    this.hash = params.hash;
  }
}

class messages_requestAppWebView_ extends Function_<enums.AppWebViewResult> {
  static __F = Symbol() as unknown as (params: { write_allowed?: true; peer: enums.InputPeer; app: enums.InputBotApp; start_param?: string; theme_params?: enums.DataJSON; platform: string }) => enums.AppWebViewResult;
  write_allowed?: true;
  peer: enums.InputPeer;
  app: enums.InputBotApp;
  start_param?: string;
  theme_params?: enums.DataJSON;
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

  constructor(params: { write_allowed?: true; peer: enums.InputPeer; app: enums.InputBotApp; start_param?: string; theme_params?: enums.DataJSON; platform: string }) {
    super();
    this.write_allowed = params.write_allowed;
    this.peer = params.peer;
    this.app = params.app;
    this.start_param = params.start_param;
    this.theme_params = params.theme_params;
    this.platform = params.platform;
  }
}

class messages_setChatWallPaper_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { for_both?: true; revert?: true; peer: enums.InputPeer; wallpaper?: enums.InputWallPaper; settings?: enums.WallPaperSettings; id?: number }) => enums.Updates;
  for_both?: true;
  revert?: true;
  peer: enums.InputPeer;
  wallpaper?: enums.InputWallPaper;
  settings?: enums.WallPaperSettings;
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

  constructor(params: { for_both?: true; revert?: true; peer: enums.InputPeer; wallpaper?: enums.InputWallPaper; settings?: enums.WallPaperSettings; id?: number }) {
    super();
    this.for_both = params.for_both;
    this.revert = params.revert;
    this.peer = params.peer;
    this.wallpaper = params.wallpaper;
    this.settings = params.settings;
    this.id = params.id;
  }
}

class messages_searchEmojiStickerSets_ extends Function_<enums.messages.FoundStickerSets> {
  static __F = Symbol() as unknown as (params: { exclude_featured?: true; q: string; hash: bigint }) => enums.messages.FoundStickerSets;
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

class updates_getState_ extends Function_<enums.updates.State> {
  static __F = Symbol() as unknown as () => enums.updates.State;
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

class updates_getDifference_ extends Function_<enums.updates.Difference> {
  static __F = Symbol() as unknown as (params: { pts: number; pts_limit?: number; pts_total_limit?: number; date: number; qts: number; qts_limit?: number }) => enums.updates.Difference;
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

class updates_getChannelDifference_ extends Function_<enums.updates.ChannelDifference> {
  static __F = Symbol() as unknown as (params: { force?: true; channel: enums.InputChannel; filter: enums.ChannelMessagesFilter; pts: number; limit: number }) => enums.updates.ChannelDifference;
  force?: true;
  channel: enums.InputChannel;
  filter: enums.ChannelMessagesFilter;
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

  constructor(params: { force?: true; channel: enums.InputChannel; filter: enums.ChannelMessagesFilter; pts: number; limit: number }) {
    super();
    this.force = params.force;
    this.channel = params.channel;
    this.filter = params.filter;
    this.pts = params.pts;
    this.limit = params.limit;
  }
}

class photos_updateProfilePhoto_ extends Function_<enums.photos.Photo> {
  static __F = Symbol() as unknown as (params: { fallback?: true; bot?: enums.InputUser; id: enums.InputPhoto }) => enums.photos.Photo;
  fallback?: true;
  bot?: enums.InputUser;
  id: enums.InputPhoto;

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

  constructor(params: { fallback?: true; bot?: enums.InputUser; id: enums.InputPhoto }) {
    super();
    this.fallback = params.fallback;
    this.bot = params.bot;
    this.id = params.id;
  }
}

class photos_uploadProfilePhoto_ extends Function_<enums.photos.Photo> {
  static __F = Symbol() as unknown as (params?: { fallback?: true; bot?: enums.InputUser; file?: enums.InputFile; video?: enums.InputFile; video_start_ts?: number; video_emoji_markup?: enums.VideoSize }) => enums.photos.Photo;
  fallback?: true;
  bot?: enums.InputUser;
  file?: enums.InputFile;
  video?: enums.InputFile;
  video_start_ts?: number;
  video_emoji_markup?: enums.VideoSize;

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

  constructor(params?: { fallback?: true; bot?: enums.InputUser; file?: enums.InputFile; video?: enums.InputFile; video_start_ts?: number; video_emoji_markup?: enums.VideoSize }) {
    super();
    this.fallback = params?.fallback;
    this.bot = params?.bot;
    this.file = params?.file;
    this.video = params?.video;
    this.video_start_ts = params?.video_start_ts;
    this.video_emoji_markup = params?.video_emoji_markup;
  }
}

class photos_deletePhotos_ extends Function_<bigint[]> {
  static __F = Symbol() as unknown as (params: { id: Array<enums.InputPhoto> }) => bigint[];
  id: Array<enums.InputPhoto>;

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

  constructor(params: { id: Array<enums.InputPhoto> }) {
    super();
    this.id = params.id;
  }
}

class photos_getUserPhotos_ extends Function_<enums.photos.Photos> {
  static __F = Symbol() as unknown as (params: { user_id: enums.InputUser; offset: number; max_id: bigint; limit: number }) => enums.photos.Photos;
  user_id: enums.InputUser;
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

  constructor(params: { user_id: enums.InputUser; offset: number; max_id: bigint; limit: number }) {
    super();
    this.user_id = params.user_id;
    this.offset = params.offset;
    this.max_id = params.max_id;
    this.limit = params.limit;
  }
}

class photos_uploadContactProfilePhoto_ extends Function_<enums.photos.Photo> {
  static __F = Symbol() as unknown as (params: { suggest?: true; save?: true; user_id: enums.InputUser; file?: enums.InputFile; video?: enums.InputFile; video_start_ts?: number; video_emoji_markup?: enums.VideoSize }) => enums.photos.Photo;
  suggest?: true;
  save?: true;
  user_id: enums.InputUser;
  file?: enums.InputFile;
  video?: enums.InputFile;
  video_start_ts?: number;
  video_emoji_markup?: enums.VideoSize;

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

  constructor(params: { suggest?: true; save?: true; user_id: enums.InputUser; file?: enums.InputFile; video?: enums.InputFile; video_start_ts?: number; video_emoji_markup?: enums.VideoSize }) {
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

class upload_saveFilePart_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { file_id: bigint; file_part: number; bytes: Uint8Array }) => boolean;
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

class upload_getFile_ extends Function_<enums.upload.File> {
  static __F = Symbol() as unknown as (params: { precise?: true; cdn_supported?: true; location: enums.InputFileLocation; offset: bigint; limit: number }) => enums.upload.File;
  precise?: true;
  cdn_supported?: true;
  location: enums.InputFileLocation;
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

  constructor(params: { precise?: true; cdn_supported?: true; location: enums.InputFileLocation; offset: bigint; limit: number }) {
    super();
    this.precise = params.precise;
    this.cdn_supported = params.cdn_supported;
    this.location = params.location;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

class upload_saveBigFilePart_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { file_id: bigint; file_part: number; file_total_parts: number; bytes: Uint8Array }) => boolean;
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

class upload_getWebFile_ extends Function_<enums.upload.WebFile> {
  static __F = Symbol() as unknown as (params: { location: enums.InputWebFileLocation; offset: number; limit: number }) => enums.upload.WebFile;
  location: enums.InputWebFileLocation;
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

  constructor(params: { location: enums.InputWebFileLocation; offset: number; limit: number }) {
    super();
    this.location = params.location;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

class upload_getCdnFile_ extends Function_<enums.upload.CdnFile> {
  static __F = Symbol() as unknown as (params: { file_token: Uint8Array; offset: bigint; limit: number }) => enums.upload.CdnFile;
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

class upload_reuploadCdnFile_ extends Function_<enums.FileHash[]> {
  static __F = Symbol() as unknown as (params: { file_token: Uint8Array; request_token: Uint8Array }) => enums.FileHash[];
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

class upload_getCdnFileHashes_ extends Function_<enums.FileHash[]> {
  static __F = Symbol() as unknown as (params: { file_token: Uint8Array; offset: bigint }) => enums.FileHash[];
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

class upload_getFileHashes_ extends Function_<enums.FileHash[]> {
  static __F = Symbol() as unknown as (params: { location: enums.InputFileLocation; offset: bigint }) => enums.FileHash[];
  location: enums.InputFileLocation;
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

  constructor(params: { location: enums.InputFileLocation; offset: bigint }) {
    super();
    this.location = params.location;
    this.offset = params.offset;
  }
}

class help_getConfig_ extends Function_<enums.Config> {
  static __F = Symbol() as unknown as () => enums.Config;
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

class help_getNearestDc_ extends Function_<enums.NearestDc> {
  static __F = Symbol() as unknown as () => enums.NearestDc;
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

class help_getAppUpdate_ extends Function_<enums.help.AppUpdate> {
  static __F = Symbol() as unknown as (params: { source: string }) => enums.help.AppUpdate;
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

class help_getInviteText_ extends Function_<enums.help.InviteText> {
  static __F = Symbol() as unknown as () => enums.help.InviteText;
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

class help_getSupport_ extends Function_<enums.help.Support> {
  static __F = Symbol() as unknown as () => enums.help.Support;
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

class help_getAppChangelog_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { prev_app_version: string }) => enums.Updates;
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

class help_setBotUpdatesStatus_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { pending_updates_count: number; message: string }) => boolean;
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

class help_getCdnConfig_ extends Function_<enums.CdnConfig> {
  static __F = Symbol() as unknown as () => enums.CdnConfig;
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

class help_getRecentMeUrls_ extends Function_<enums.help.RecentMeUrls> {
  static __F = Symbol() as unknown as (params: { referer: string }) => enums.help.RecentMeUrls;
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

class help_getTermsOfServiceUpdate_ extends Function_<enums.help.TermsOfServiceUpdate> {
  static __F = Symbol() as unknown as () => enums.help.TermsOfServiceUpdate;
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

class help_acceptTermsOfService_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { id: enums.DataJSON }) => boolean;
  id: enums.DataJSON;

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

  constructor(params: { id: enums.DataJSON }) {
    super();
    this.id = params.id;
  }
}

class help_getDeepLinkInfo_ extends Function_<enums.help.DeepLinkInfo> {
  static __F = Symbol() as unknown as (params: { path: string }) => enums.help.DeepLinkInfo;
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

class help_getAppConfig_ extends Function_<enums.help.AppConfig> {
  static __F = Symbol() as unknown as (params: { hash: number }) => enums.help.AppConfig;
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

class help_saveAppLog_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { events: Array<enums.InputAppEvent> }) => boolean;
  events: Array<enums.InputAppEvent>;

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

  constructor(params: { events: Array<enums.InputAppEvent> }) {
    super();
    this.events = params.events;
  }
}

class help_getPassportConfig_ extends Function_<enums.help.PassportConfig> {
  static __F = Symbol() as unknown as (params: { hash: number }) => enums.help.PassportConfig;
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

class help_getSupportName_ extends Function_<enums.help.SupportName> {
  static __F = Symbol() as unknown as () => enums.help.SupportName;
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

class help_getUserInfo_ extends Function_<enums.help.UserInfo> {
  static __F = Symbol() as unknown as (params: { user_id: enums.InputUser }) => enums.help.UserInfo;
  user_id: enums.InputUser;

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

  constructor(params: { user_id: enums.InputUser }) {
    super();
    this.user_id = params.user_id;
  }
}

class help_editUserInfo_ extends Function_<enums.help.UserInfo> {
  static __F = Symbol() as unknown as (params: { user_id: enums.InputUser; message: string; entities: Array<enums.MessageEntity> }) => enums.help.UserInfo;
  user_id: enums.InputUser;
  message: string;
  entities: Array<enums.MessageEntity>;

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

  constructor(params: { user_id: enums.InputUser; message: string; entities: Array<enums.MessageEntity> }) {
    super();
    this.user_id = params.user_id;
    this.message = params.message;
    this.entities = params.entities;
  }
}

class help_getPromoData_ extends Function_<enums.help.PromoData> {
  static __F = Symbol() as unknown as () => enums.help.PromoData;
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

class help_hidePromoData_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer }) => boolean;
  peer: enums.InputPeer;

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

  constructor(params: { peer: enums.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

class help_dismissSuggestion_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; suggestion: string }) => boolean;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; suggestion: string }) {
    super();
    this.peer = params.peer;
    this.suggestion = params.suggestion;
  }
}

class help_getCountriesList_ extends Function_<enums.help.CountriesList> {
  static __F = Symbol() as unknown as (params: { lang_code: string; hash: number }) => enums.help.CountriesList;
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

class help_getPremiumPromo_ extends Function_<enums.help.PremiumPromo> {
  static __F = Symbol() as unknown as () => enums.help.PremiumPromo;
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

class help_getPeerColors_ extends Function_<enums.help.PeerColors> {
  static __F = Symbol() as unknown as (params: { hash: number }) => enums.help.PeerColors;
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

class help_getPeerProfileColors_ extends Function_<enums.help.PeerColors> {
  static __F = Symbol() as unknown as (params: { hash: number }) => enums.help.PeerColors;
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

class channels_readHistory_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; max_id: number }) => boolean;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; max_id: number }) {
    super();
    this.channel = params.channel;
    this.max_id = params.max_id;
  }
}

class channels_deleteMessages_ extends Function_<enums.messages.AffectedMessages> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; id: Array<number> }) => enums.messages.AffectedMessages;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; id: Array<number> }) {
    super();
    this.channel = params.channel;
    this.id = params.id;
  }
}

class channels_reportSpam_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; participant: enums.InputPeer; id: Array<number> }) => boolean;
  channel: enums.InputChannel;
  participant: enums.InputPeer;
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

  constructor(params: { channel: enums.InputChannel; participant: enums.InputPeer; id: Array<number> }) {
    super();
    this.channel = params.channel;
    this.participant = params.participant;
    this.id = params.id;
  }
}

class channels_getMessages_ extends Function_<enums.messages.Messages> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; id: Array<enums.InputMessage> }) => enums.messages.Messages;
  channel: enums.InputChannel;
  id: Array<enums.InputMessage>;

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

  constructor(params: { channel: enums.InputChannel; id: Array<enums.InputMessage> }) {
    super();
    this.channel = params.channel;
    this.id = params.id;
  }
}

class channels_getParticipants_ extends Function_<enums.channels.ChannelParticipants> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; filter: enums.ChannelParticipantsFilter; offset: number; limit: number; hash: bigint }) => enums.channels.ChannelParticipants;
  channel: enums.InputChannel;
  filter: enums.ChannelParticipantsFilter;
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

  constructor(params: { channel: enums.InputChannel; filter: enums.ChannelParticipantsFilter; offset: number; limit: number; hash: bigint }) {
    super();
    this.channel = params.channel;
    this.filter = params.filter;
    this.offset = params.offset;
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

class channels_getParticipant_ extends Function_<enums.channels.ChannelParticipant> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; participant: enums.InputPeer }) => enums.channels.ChannelParticipant;
  channel: enums.InputChannel;
  participant: enums.InputPeer;

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

  constructor(params: { channel: enums.InputChannel; participant: enums.InputPeer }) {
    super();
    this.channel = params.channel;
    this.participant = params.participant;
  }
}

class channels_getChannels_ extends Function_<enums.messages.Chats> {
  static __F = Symbol() as unknown as (params: { id: Array<enums.InputChannel> }) => enums.messages.Chats;
  id: Array<enums.InputChannel>;

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

  constructor(params: { id: Array<enums.InputChannel> }) {
    super();
    this.id = params.id;
  }
}

class channels_getFullChannel_ extends Function_<enums.messages.ChatFull> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel }) => enums.messages.ChatFull;
  channel: enums.InputChannel;

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

  constructor(params: { channel: enums.InputChannel }) {
    super();
    this.channel = params.channel;
  }
}

class channels_createChannel_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { broadcast?: true; megagroup?: true; for_import?: true; forum?: true; title: string; about: string; geo_point?: enums.InputGeoPoint; address?: string; ttl_period?: number }) => enums.Updates;
  broadcast?: true;
  megagroup?: true;
  for_import?: true;
  forum?: true;
  title: string;
  about: string;
  geo_point?: enums.InputGeoPoint;
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

  constructor(params: { broadcast?: true; megagroup?: true; for_import?: true; forum?: true; title: string; about: string; geo_point?: enums.InputGeoPoint; address?: string; ttl_period?: number }) {
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

class channels_editAdmin_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; user_id: enums.InputUser; admin_rights: enums.ChatAdminRights; rank: string }) => enums.Updates;
  channel: enums.InputChannel;
  user_id: enums.InputUser;
  admin_rights: enums.ChatAdminRights;
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

  constructor(params: { channel: enums.InputChannel; user_id: enums.InputUser; admin_rights: enums.ChatAdminRights; rank: string }) {
    super();
    this.channel = params.channel;
    this.user_id = params.user_id;
    this.admin_rights = params.admin_rights;
    this.rank = params.rank;
  }
}

class channels_editTitle_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; title: string }) => enums.Updates;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; title: string }) {
    super();
    this.channel = params.channel;
    this.title = params.title;
  }
}

class channels_editPhoto_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; photo: enums.InputChatPhoto }) => enums.Updates;
  channel: enums.InputChannel;
  photo: enums.InputChatPhoto;

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

  constructor(params: { channel: enums.InputChannel; photo: enums.InputChatPhoto }) {
    super();
    this.channel = params.channel;
    this.photo = params.photo;
  }
}

class channels_checkUsername_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; username: string }) => boolean;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; username: string }) {
    super();
    this.channel = params.channel;
    this.username = params.username;
  }
}

class channels_updateUsername_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; username: string }) => boolean;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; username: string }) {
    super();
    this.channel = params.channel;
    this.username = params.username;
  }
}

class channels_joinChannel_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel }) => enums.Updates;
  channel: enums.InputChannel;

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

  constructor(params: { channel: enums.InputChannel }) {
    super();
    this.channel = params.channel;
  }
}

class channels_leaveChannel_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel }) => enums.Updates;
  channel: enums.InputChannel;

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

  constructor(params: { channel: enums.InputChannel }) {
    super();
    this.channel = params.channel;
  }
}

class channels_inviteToChannel_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; users: Array<enums.InputUser> }) => enums.Updates;
  channel: enums.InputChannel;
  users: Array<enums.InputUser>;

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

  constructor(params: { channel: enums.InputChannel; users: Array<enums.InputUser> }) {
    super();
    this.channel = params.channel;
    this.users = params.users;
  }
}

class channels_deleteChannel_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel }) => enums.Updates;
  channel: enums.InputChannel;

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

  constructor(params: { channel: enums.InputChannel }) {
    super();
    this.channel = params.channel;
  }
}

class channels_exportMessageLink_ extends Function_<enums.ExportedMessageLink> {
  static __F = Symbol() as unknown as (params: { grouped?: true; thread?: true; channel: enums.InputChannel; id: number }) => enums.ExportedMessageLink;
  grouped?: true;
  thread?: true;
  channel: enums.InputChannel;
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

  constructor(params: { grouped?: true; thread?: true; channel: enums.InputChannel; id: number }) {
    super();
    this.grouped = params.grouped;
    this.thread = params.thread;
    this.channel = params.channel;
    this.id = params.id;
  }
}

class channels_toggleSignatures_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

class channels_getAdminedPublicChannels_ extends Function_<enums.messages.Chats> {
  static __F = Symbol() as unknown as (params?: { by_location?: true; check_limit?: true }) => enums.messages.Chats;
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

class channels_editBanned_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; participant: enums.InputPeer; banned_rights: enums.ChatBannedRights }) => enums.Updates;
  channel: enums.InputChannel;
  participant: enums.InputPeer;
  banned_rights: enums.ChatBannedRights;

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

  constructor(params: { channel: enums.InputChannel; participant: enums.InputPeer; banned_rights: enums.ChatBannedRights }) {
    super();
    this.channel = params.channel;
    this.participant = params.participant;
    this.banned_rights = params.banned_rights;
  }
}

class channels_getAdminLog_ extends Function_<enums.channels.AdminLogResults> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; q: string; events_filter?: enums.ChannelAdminLogEventsFilter; admins?: Array<enums.InputUser>; max_id: bigint; min_id: bigint; limit: number }) => enums.channels.AdminLogResults;
  channel: enums.InputChannel;
  q: string;
  events_filter?: enums.ChannelAdminLogEventsFilter;
  admins?: Array<enums.InputUser>;
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

  constructor(params: { channel: enums.InputChannel; q: string; events_filter?: enums.ChannelAdminLogEventsFilter; admins?: Array<enums.InputUser>; max_id: bigint; min_id: bigint; limit: number }) {
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

class channels_setStickers_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; stickerset: enums.InputStickerSet }) => boolean;
  channel: enums.InputChannel;
  stickerset: enums.InputStickerSet;

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

  constructor(params: { channel: enums.InputChannel; stickerset: enums.InputStickerSet }) {
    super();
    this.channel = params.channel;
    this.stickerset = params.stickerset;
  }
}

class channels_readMessageContents_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; id: Array<number> }) => boolean;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; id: Array<number> }) {
    super();
    this.channel = params.channel;
    this.id = params.id;
  }
}

class channels_deleteHistory_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { for_everyone?: true; channel: enums.InputChannel; max_id: number }) => enums.Updates;
  for_everyone?: true;
  channel: enums.InputChannel;
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

  constructor(params: { for_everyone?: true; channel: enums.InputChannel; max_id: number }) {
    super();
    this.for_everyone = params.for_everyone;
    this.channel = params.channel;
    this.max_id = params.max_id;
  }
}

class channels_togglePreHistoryHidden_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

class channels_getLeftChannels_ extends Function_<enums.messages.Chats> {
  static __F = Symbol() as unknown as (params: { offset: number }) => enums.messages.Chats;
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

class channels_getGroupsForDiscussion_ extends Function_<enums.messages.Chats> {
  static __F = Symbol() as unknown as () => enums.messages.Chats;
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

class channels_setDiscussionGroup_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { broadcast: enums.InputChannel; group: enums.InputChannel }) => boolean;
  broadcast: enums.InputChannel;
  group: enums.InputChannel;

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

  constructor(params: { broadcast: enums.InputChannel; group: enums.InputChannel }) {
    super();
    this.broadcast = params.broadcast;
    this.group = params.group;
  }
}

class channels_editCreator_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; user_id: enums.InputUser; password: enums.InputCheckPasswordSRP }) => enums.Updates;
  channel: enums.InputChannel;
  user_id: enums.InputUser;
  password: enums.InputCheckPasswordSRP;

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

  constructor(params: { channel: enums.InputChannel; user_id: enums.InputUser; password: enums.InputCheckPasswordSRP }) {
    super();
    this.channel = params.channel;
    this.user_id = params.user_id;
    this.password = params.password;
  }
}

class channels_editLocation_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; geo_point: enums.InputGeoPoint; address: string }) => boolean;
  channel: enums.InputChannel;
  geo_point: enums.InputGeoPoint;
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

  constructor(params: { channel: enums.InputChannel; geo_point: enums.InputGeoPoint; address: string }) {
    super();
    this.channel = params.channel;
    this.geo_point = params.geo_point;
    this.address = params.address;
  }
}

class channels_toggleSlowMode_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; seconds: number }) => enums.Updates;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; seconds: number }) {
    super();
    this.channel = params.channel;
    this.seconds = params.seconds;
  }
}

class channels_getInactiveChannels_ extends Function_<enums.messages.InactiveChats> {
  static __F = Symbol() as unknown as () => enums.messages.InactiveChats;
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

class channels_convertToGigagroup_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel }) => enums.Updates;
  channel: enums.InputChannel;

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

  constructor(params: { channel: enums.InputChannel }) {
    super();
    this.channel = params.channel;
  }
}

class channels_viewSponsoredMessage_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; random_id: Uint8Array }) => boolean;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; random_id: Uint8Array }) {
    super();
    this.channel = params.channel;
    this.random_id = params.random_id;
  }
}

class channels_getSponsoredMessages_ extends Function_<enums.messages.SponsoredMessages> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel }) => enums.messages.SponsoredMessages;
  channel: enums.InputChannel;

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

  constructor(params: { channel: enums.InputChannel }) {
    super();
    this.channel = params.channel;
  }
}

class channels_getSendAs_ extends Function_<enums.channels.SendAsPeers> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer }) => enums.channels.SendAsPeers;
  peer: enums.InputPeer;

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

  constructor(params: { peer: enums.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

class channels_deleteParticipantHistory_ extends Function_<enums.messages.AffectedHistory> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; participant: enums.InputPeer }) => enums.messages.AffectedHistory;
  channel: enums.InputChannel;
  participant: enums.InputPeer;

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

  constructor(params: { channel: enums.InputChannel; participant: enums.InputPeer }) {
    super();
    this.channel = params.channel;
    this.participant = params.participant;
  }
}

class channels_toggleJoinToSend_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

class channels_toggleJoinRequest_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

class channels_reorderUsernames_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; order: Array<string> }) => boolean;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; order: Array<string> }) {
    super();
    this.channel = params.channel;
    this.order = params.order;
  }
}

class channels_toggleUsername_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; username: string; active: boolean }) => boolean;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; username: string; active: boolean }) {
    super();
    this.channel = params.channel;
    this.username = params.username;
    this.active = params.active;
  }
}

class channels_deactivateAllUsernames_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel }) => boolean;
  channel: enums.InputChannel;

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

  constructor(params: { channel: enums.InputChannel }) {
    super();
    this.channel = params.channel;
  }
}

class channels_toggleForum_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

class channels_createForumTopic_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; title: string; icon_color?: number; icon_emoji_id?: bigint; random_id: bigint; send_as?: enums.InputPeer }) => enums.Updates;
  channel: enums.InputChannel;
  title: string;
  icon_color?: number;
  icon_emoji_id?: bigint;
  random_id: bigint;
  send_as?: enums.InputPeer;

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

  constructor(params: { channel: enums.InputChannel; title: string; icon_color?: number; icon_emoji_id?: bigint; random_id: bigint; send_as?: enums.InputPeer }) {
    super();
    this.channel = params.channel;
    this.title = params.title;
    this.icon_color = params.icon_color;
    this.icon_emoji_id = params.icon_emoji_id;
    this.random_id = params.random_id;
    this.send_as = params.send_as;
  }
}

class channels_getForumTopics_ extends Function_<enums.messages.ForumTopics> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; q?: string; offset_date: number; offset_id: number; offset_topic: number; limit: number }) => enums.messages.ForumTopics;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; q?: string; offset_date: number; offset_id: number; offset_topic: number; limit: number }) {
    super();
    this.channel = params.channel;
    this.q = params.q;
    this.offset_date = params.offset_date;
    this.offset_id = params.offset_id;
    this.offset_topic = params.offset_topic;
    this.limit = params.limit;
  }
}

class channels_getForumTopicsByID_ extends Function_<enums.messages.ForumTopics> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; topics: Array<number> }) => enums.messages.ForumTopics;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; topics: Array<number> }) {
    super();
    this.channel = params.channel;
    this.topics = params.topics;
  }
}

class channels_editForumTopic_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; topic_id: number; title?: string; icon_emoji_id?: bigint; closed?: boolean; hidden?: boolean }) => enums.Updates;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; topic_id: number; title?: string; icon_emoji_id?: bigint; closed?: boolean; hidden?: boolean }) {
    super();
    this.channel = params.channel;
    this.topic_id = params.topic_id;
    this.title = params.title;
    this.icon_emoji_id = params.icon_emoji_id;
    this.closed = params.closed;
    this.hidden = params.hidden;
  }
}

class channels_updatePinnedForumTopic_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; topic_id: number; pinned: boolean }) => enums.Updates;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; topic_id: number; pinned: boolean }) {
    super();
    this.channel = params.channel;
    this.topic_id = params.topic_id;
    this.pinned = params.pinned;
  }
}

class channels_deleteTopicHistory_ extends Function_<enums.messages.AffectedHistory> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; top_msg_id: number }) => enums.messages.AffectedHistory;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; top_msg_id: number }) {
    super();
    this.channel = params.channel;
    this.top_msg_id = params.top_msg_id;
  }
}

class channels_reorderPinnedForumTopics_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { force?: true; channel: enums.InputChannel; order: Array<number> }) => enums.Updates;
  force?: true;
  channel: enums.InputChannel;
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

  constructor(params: { force?: true; channel: enums.InputChannel; order: Array<number> }) {
    super();
    this.force = params.force;
    this.channel = params.channel;
    this.order = params.order;
  }
}

class channels_toggleAntiSpam_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

class channels_reportAntiSpamFalsePositive_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; msg_id: number }) => boolean;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; msg_id: number }) {
    super();
    this.channel = params.channel;
    this.msg_id = params.msg_id;
  }
}

class channels_toggleParticipantsHidden_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

class channels_clickSponsoredMessage_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; random_id: Uint8Array }) => boolean;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; random_id: Uint8Array }) {
    super();
    this.channel = params.channel;
    this.random_id = params.random_id;
  }
}

class channels_updateColor_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; color: number; background_emoji_id?: bigint }) => enums.Updates;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; color: number; background_emoji_id?: bigint }) {
    super();
    this.channel = params.channel;
    this.color = params.color;
    this.background_emoji_id = params.background_emoji_id;
  }
}

class channels_toggleViewForumAsMessages_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates;
  channel: enums.InputChannel;
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

  constructor(params: { channel: enums.InputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

class channels_getChannelRecommendations_ extends Function_<enums.messages.Chats> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel }) => enums.messages.Chats;
  channel: enums.InputChannel;

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

  constructor(params: { channel: enums.InputChannel }) {
    super();
    this.channel = params.channel;
  }
}

class bots_sendCustomRequest_ extends Function_<enums.DataJSON> {
  static __F = Symbol() as unknown as (params: { custom_method: string; params: enums.DataJSON }) => enums.DataJSON;
  custom_method: string;
  params: enums.DataJSON;

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

  constructor(params: { custom_method: string; params: enums.DataJSON }) {
    super();
    this.custom_method = params.custom_method;
    this.params = params.params;
  }
}

class bots_answerWebhookJSONQuery_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { query_id: bigint; data: enums.DataJSON }) => boolean;
  query_id: bigint;
  data: enums.DataJSON;

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

  constructor(params: { query_id: bigint; data: enums.DataJSON }) {
    super();
    this.query_id = params.query_id;
    this.data = params.data;
  }
}

class bots_setBotCommands_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { scope: enums.BotCommandScope; lang_code: string; commands: Array<enums.BotCommand> }) => boolean;
  scope: enums.BotCommandScope;
  lang_code: string;
  commands: Array<enums.BotCommand>;

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

  constructor(params: { scope: enums.BotCommandScope; lang_code: string; commands: Array<enums.BotCommand> }) {
    super();
    this.scope = params.scope;
    this.lang_code = params.lang_code;
    this.commands = params.commands;
  }
}

class bots_resetBotCommands_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { scope: enums.BotCommandScope; lang_code: string }) => boolean;
  scope: enums.BotCommandScope;
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

  constructor(params: { scope: enums.BotCommandScope; lang_code: string }) {
    super();
    this.scope = params.scope;
    this.lang_code = params.lang_code;
  }
}

class bots_getBotCommands_ extends Function_<enums.BotCommand[]> {
  static __F = Symbol() as unknown as (params: { scope: enums.BotCommandScope; lang_code: string }) => enums.BotCommand[];
  scope: enums.BotCommandScope;
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

  constructor(params: { scope: enums.BotCommandScope; lang_code: string }) {
    super();
    this.scope = params.scope;
    this.lang_code = params.lang_code;
  }
}

class bots_setBotMenuButton_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { user_id: enums.InputUser; button: enums.BotMenuButton }) => boolean;
  user_id: enums.InputUser;
  button: enums.BotMenuButton;

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

  constructor(params: { user_id: enums.InputUser; button: enums.BotMenuButton }) {
    super();
    this.user_id = params.user_id;
    this.button = params.button;
  }
}

class bots_getBotMenuButton_ extends Function_<enums.BotMenuButton> {
  static __F = Symbol() as unknown as (params: { user_id: enums.InputUser }) => enums.BotMenuButton;
  user_id: enums.InputUser;

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

  constructor(params: { user_id: enums.InputUser }) {
    super();
    this.user_id = params.user_id;
  }
}

class bots_setBotBroadcastDefaultAdminRights_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { admin_rights: enums.ChatAdminRights }) => boolean;
  admin_rights: enums.ChatAdminRights;

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

  constructor(params: { admin_rights: enums.ChatAdminRights }) {
    super();
    this.admin_rights = params.admin_rights;
  }
}

class bots_setBotGroupDefaultAdminRights_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { admin_rights: enums.ChatAdminRights }) => boolean;
  admin_rights: enums.ChatAdminRights;

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

  constructor(params: { admin_rights: enums.ChatAdminRights }) {
    super();
    this.admin_rights = params.admin_rights;
  }
}

class bots_setBotInfo_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { bot?: enums.InputUser; lang_code: string; name?: string; about?: string; description?: string }) => boolean;
  bot?: enums.InputUser;
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

  constructor(params: { bot?: enums.InputUser; lang_code: string; name?: string; about?: string; description?: string }) {
    super();
    this.bot = params.bot;
    this.lang_code = params.lang_code;
    this.name = params.name;
    this.about = params.about;
    this.description = params.description;
  }
}

class bots_getBotInfo_ extends Function_<enums.bots.BotInfo> {
  static __F = Symbol() as unknown as (params: { bot?: enums.InputUser; lang_code: string }) => enums.bots.BotInfo;
  bot?: enums.InputUser;
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

  constructor(params: { bot?: enums.InputUser; lang_code: string }) {
    super();
    this.bot = params.bot;
    this.lang_code = params.lang_code;
  }
}

class bots_reorderUsernames_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { bot: enums.InputUser; order: Array<string> }) => boolean;
  bot: enums.InputUser;
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

  constructor(params: { bot: enums.InputUser; order: Array<string> }) {
    super();
    this.bot = params.bot;
    this.order = params.order;
  }
}

class bots_toggleUsername_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { bot: enums.InputUser; username: string; active: boolean }) => boolean;
  bot: enums.InputUser;
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

  constructor(params: { bot: enums.InputUser; username: string; active: boolean }) {
    super();
    this.bot = params.bot;
    this.username = params.username;
    this.active = params.active;
  }
}

class bots_canSendMessage_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { bot: enums.InputUser }) => boolean;
  bot: enums.InputUser;

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

  constructor(params: { bot: enums.InputUser }) {
    super();
    this.bot = params.bot;
  }
}

class bots_allowSendMessage_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { bot: enums.InputUser }) => enums.Updates;
  bot: enums.InputUser;

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

  constructor(params: { bot: enums.InputUser }) {
    super();
    this.bot = params.bot;
  }
}

class bots_invokeWebViewCustomMethod_ extends Function_<enums.DataJSON> {
  static __F = Symbol() as unknown as (params: { bot: enums.InputUser; custom_method: string; params: enums.DataJSON }) => enums.DataJSON;
  bot: enums.InputUser;
  custom_method: string;
  params: enums.DataJSON;

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

  constructor(params: { bot: enums.InputUser; custom_method: string; params: enums.DataJSON }) {
    super();
    this.bot = params.bot;
    this.custom_method = params.custom_method;
    this.params = params.params;
  }
}

class payments_getPaymentForm_ extends Function_<enums.payments.PaymentForm> {
  static __F = Symbol() as unknown as (params: { invoice: enums.InputInvoice; theme_params?: enums.DataJSON }) => enums.payments.PaymentForm;
  invoice: enums.InputInvoice;
  theme_params?: enums.DataJSON;

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

  constructor(params: { invoice: enums.InputInvoice; theme_params?: enums.DataJSON }) {
    super();
    this.invoice = params.invoice;
    this.theme_params = params.theme_params;
  }
}

class payments_getPaymentReceipt_ extends Function_<enums.payments.PaymentReceipt> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; msg_id: number }) => enums.payments.PaymentReceipt;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; msg_id: number }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
  }
}

class payments_validateRequestedInfo_ extends Function_<enums.payments.ValidatedRequestedInfo> {
  static __F = Symbol() as unknown as (params: { save?: true; invoice: enums.InputInvoice; info: enums.PaymentRequestedInfo }) => enums.payments.ValidatedRequestedInfo;
  save?: true;
  invoice: enums.InputInvoice;
  info: enums.PaymentRequestedInfo;

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

  constructor(params: { save?: true; invoice: enums.InputInvoice; info: enums.PaymentRequestedInfo }) {
    super();
    this.save = params.save;
    this.invoice = params.invoice;
    this.info = params.info;
  }
}

class payments_sendPaymentForm_ extends Function_<enums.payments.PaymentResult> {
  static __F = Symbol() as unknown as (params: { form_id: bigint; invoice: enums.InputInvoice; requested_info_id?: string; shipping_option_id?: string; credentials: enums.InputPaymentCredentials; tip_amount?: bigint }) => enums.payments.PaymentResult;
  form_id: bigint;
  invoice: enums.InputInvoice;
  requested_info_id?: string;
  shipping_option_id?: string;
  credentials: enums.InputPaymentCredentials;
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

  constructor(params: { form_id: bigint; invoice: enums.InputInvoice; requested_info_id?: string; shipping_option_id?: string; credentials: enums.InputPaymentCredentials; tip_amount?: bigint }) {
    super();
    this.form_id = params.form_id;
    this.invoice = params.invoice;
    this.requested_info_id = params.requested_info_id;
    this.shipping_option_id = params.shipping_option_id;
    this.credentials = params.credentials;
    this.tip_amount = params.tip_amount;
  }
}

class payments_getSavedInfo_ extends Function_<enums.payments.SavedInfo> {
  static __F = Symbol() as unknown as () => enums.payments.SavedInfo;
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

class payments_clearSavedInfo_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params?: { credentials?: true; info?: true }) => boolean;
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

class payments_getBankCardData_ extends Function_<enums.payments.BankCardData> {
  static __F = Symbol() as unknown as (params: { number: string }) => enums.payments.BankCardData;
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

class payments_exportInvoice_ extends Function_<enums.payments.ExportedInvoice> {
  static __F = Symbol() as unknown as (params: { invoice_media: enums.InputMedia }) => enums.payments.ExportedInvoice;
  invoice_media: enums.InputMedia;

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

  constructor(params: { invoice_media: enums.InputMedia }) {
    super();
    this.invoice_media = params.invoice_media;
  }
}

class payments_assignAppStoreTransaction_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { receipt: Uint8Array; purpose: enums.InputStorePaymentPurpose }) => enums.Updates;
  receipt: Uint8Array;
  purpose: enums.InputStorePaymentPurpose;

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

  constructor(params: { receipt: Uint8Array; purpose: enums.InputStorePaymentPurpose }) {
    super();
    this.receipt = params.receipt;
    this.purpose = params.purpose;
  }
}

class payments_assignPlayMarketTransaction_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { receipt: enums.DataJSON; purpose: enums.InputStorePaymentPurpose }) => enums.Updates;
  receipt: enums.DataJSON;
  purpose: enums.InputStorePaymentPurpose;

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

  constructor(params: { receipt: enums.DataJSON; purpose: enums.InputStorePaymentPurpose }) {
    super();
    this.receipt = params.receipt;
    this.purpose = params.purpose;
  }
}

class payments_canPurchasePremium_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { purpose: enums.InputStorePaymentPurpose }) => boolean;
  purpose: enums.InputStorePaymentPurpose;

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

  constructor(params: { purpose: enums.InputStorePaymentPurpose }) {
    super();
    this.purpose = params.purpose;
  }
}

class payments_getPremiumGiftCodeOptions_ extends Function_<enums.PremiumGiftCodeOption[]> {
  static __F = Symbol() as unknown as (params?: { boost_peer?: enums.InputPeer }) => enums.PremiumGiftCodeOption[];
  boost_peer?: enums.InputPeer;

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

  constructor(params?: { boost_peer?: enums.InputPeer }) {
    super();
    this.boost_peer = params?.boost_peer;
  }
}

class payments_checkGiftCode_ extends Function_<enums.payments.CheckedGiftCode> {
  static __F = Symbol() as unknown as (params: { slug: string }) => enums.payments.CheckedGiftCode;
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

class payments_applyGiftCode_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { slug: string }) => enums.Updates;
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

class payments_getGiveawayInfo_ extends Function_<enums.payments.GiveawayInfo> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; msg_id: number }) => enums.payments.GiveawayInfo;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; msg_id: number }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
  }
}

class payments_launchPrepaidGiveaway_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; giveaway_id: bigint; purpose: enums.InputStorePaymentPurpose }) => enums.Updates;
  peer: enums.InputPeer;
  giveaway_id: bigint;
  purpose: enums.InputStorePaymentPurpose;

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

  constructor(params: { peer: enums.InputPeer; giveaway_id: bigint; purpose: enums.InputStorePaymentPurpose }) {
    super();
    this.peer = params.peer;
    this.giveaway_id = params.giveaway_id;
    this.purpose = params.purpose;
  }
}

class stickers_createStickerSet_ extends Function_<enums.messages.StickerSet> {
  static __F = Symbol() as unknown as (params: { masks?: true; animated?: true; videos?: true; emojis?: true; text_color?: true; user_id: enums.InputUser; title: string; short_name: string; thumb?: enums.InputDocument; stickers: Array<enums.InputStickerSetItem>; software?: string }) => enums.messages.StickerSet;
  masks?: true;
  animated?: true;
  videos?: true;
  emojis?: true;
  text_color?: true;
  user_id: enums.InputUser;
  title: string;
  short_name: string;
  thumb?: enums.InputDocument;
  stickers: Array<enums.InputStickerSetItem>;
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

  constructor(params: { masks?: true; animated?: true; videos?: true; emojis?: true; text_color?: true; user_id: enums.InputUser; title: string; short_name: string; thumb?: enums.InputDocument; stickers: Array<enums.InputStickerSetItem>; software?: string }) {
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

class stickers_removeStickerFromSet_ extends Function_<enums.messages.StickerSet> {
  static __F = Symbol() as unknown as (params: { sticker: enums.InputDocument }) => enums.messages.StickerSet;
  sticker: enums.InputDocument;

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

  constructor(params: { sticker: enums.InputDocument }) {
    super();
    this.sticker = params.sticker;
  }
}

class stickers_changeStickerPosition_ extends Function_<enums.messages.StickerSet> {
  static __F = Symbol() as unknown as (params: { sticker: enums.InputDocument; position: number }) => enums.messages.StickerSet;
  sticker: enums.InputDocument;
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

  constructor(params: { sticker: enums.InputDocument; position: number }) {
    super();
    this.sticker = params.sticker;
    this.position = params.position;
  }
}

class stickers_addStickerToSet_ extends Function_<enums.messages.StickerSet> {
  static __F = Symbol() as unknown as (params: { stickerset: enums.InputStickerSet; sticker: enums.InputStickerSetItem }) => enums.messages.StickerSet;
  stickerset: enums.InputStickerSet;
  sticker: enums.InputStickerSetItem;

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

  constructor(params: { stickerset: enums.InputStickerSet; sticker: enums.InputStickerSetItem }) {
    super();
    this.stickerset = params.stickerset;
    this.sticker = params.sticker;
  }
}

class stickers_setStickerSetThumb_ extends Function_<enums.messages.StickerSet> {
  static __F = Symbol() as unknown as (params: { stickerset: enums.InputStickerSet; thumb?: enums.InputDocument; thumb_document_id?: bigint }) => enums.messages.StickerSet;
  stickerset: enums.InputStickerSet;
  thumb?: enums.InputDocument;
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

  constructor(params: { stickerset: enums.InputStickerSet; thumb?: enums.InputDocument; thumb_document_id?: bigint }) {
    super();
    this.stickerset = params.stickerset;
    this.thumb = params.thumb;
    this.thumb_document_id = params.thumb_document_id;
  }
}

class stickers_checkShortName_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { short_name: string }) => boolean;
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

class stickers_suggestShortName_ extends Function_<enums.stickers.SuggestedShortName> {
  static __F = Symbol() as unknown as (params: { title: string }) => enums.stickers.SuggestedShortName;
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

class stickers_changeSticker_ extends Function_<enums.messages.StickerSet> {
  static __F = Symbol() as unknown as (params: { sticker: enums.InputDocument; emoji?: string; mask_coords?: enums.MaskCoords; keywords?: string }) => enums.messages.StickerSet;
  sticker: enums.InputDocument;
  emoji?: string;
  mask_coords?: enums.MaskCoords;
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

  constructor(params: { sticker: enums.InputDocument; emoji?: string; mask_coords?: enums.MaskCoords; keywords?: string }) {
    super();
    this.sticker = params.sticker;
    this.emoji = params.emoji;
    this.mask_coords = params.mask_coords;
    this.keywords = params.keywords;
  }
}

class stickers_renameStickerSet_ extends Function_<enums.messages.StickerSet> {
  static __F = Symbol() as unknown as (params: { stickerset: enums.InputStickerSet; title: string }) => enums.messages.StickerSet;
  stickerset: enums.InputStickerSet;
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

  constructor(params: { stickerset: enums.InputStickerSet; title: string }) {
    super();
    this.stickerset = params.stickerset;
    this.title = params.title;
  }
}

class stickers_deleteStickerSet_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { stickerset: enums.InputStickerSet }) => boolean;
  stickerset: enums.InputStickerSet;

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

  constructor(params: { stickerset: enums.InputStickerSet }) {
    super();
    this.stickerset = params.stickerset;
  }
}

class phone_getCallConfig_ extends Function_<enums.DataJSON> {
  static __F = Symbol() as unknown as () => enums.DataJSON;
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

class phone_requestCall_ extends Function_<enums.phone.PhoneCall> {
  static __F = Symbol() as unknown as (params: { video?: true; user_id: enums.InputUser; random_id: number; g_a_hash: Uint8Array; protocol: enums.PhoneCallProtocol }) => enums.phone.PhoneCall;
  video?: true;
  user_id: enums.InputUser;
  random_id: number;
  g_a_hash: Uint8Array;
  protocol: enums.PhoneCallProtocol;

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

  constructor(params: { video?: true; user_id: enums.InputUser; random_id: number; g_a_hash: Uint8Array; protocol: enums.PhoneCallProtocol }) {
    super();
    this.video = params.video;
    this.user_id = params.user_id;
    this.random_id = params.random_id;
    this.g_a_hash = params.g_a_hash;
    this.protocol = params.protocol;
  }
}

class phone_acceptCall_ extends Function_<enums.phone.PhoneCall> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPhoneCall; g_b: Uint8Array; protocol: enums.PhoneCallProtocol }) => enums.phone.PhoneCall;
  peer: enums.InputPhoneCall;
  g_b: Uint8Array;
  protocol: enums.PhoneCallProtocol;

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

  constructor(params: { peer: enums.InputPhoneCall; g_b: Uint8Array; protocol: enums.PhoneCallProtocol }) {
    super();
    this.peer = params.peer;
    this.g_b = params.g_b;
    this.protocol = params.protocol;
  }
}

class phone_confirmCall_ extends Function_<enums.phone.PhoneCall> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPhoneCall; g_a: Uint8Array; key_fingerprint: bigint; protocol: enums.PhoneCallProtocol }) => enums.phone.PhoneCall;
  peer: enums.InputPhoneCall;
  g_a: Uint8Array;
  key_fingerprint: bigint;
  protocol: enums.PhoneCallProtocol;

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

  constructor(params: { peer: enums.InputPhoneCall; g_a: Uint8Array; key_fingerprint: bigint; protocol: enums.PhoneCallProtocol }) {
    super();
    this.peer = params.peer;
    this.g_a = params.g_a;
    this.key_fingerprint = params.key_fingerprint;
    this.protocol = params.protocol;
  }
}

class phone_receivedCall_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPhoneCall }) => boolean;
  peer: enums.InputPhoneCall;

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

  constructor(params: { peer: enums.InputPhoneCall }) {
    super();
    this.peer = params.peer;
  }
}

class phone_discardCall_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { video?: true; peer: enums.InputPhoneCall; duration: number; reason: enums.PhoneCallDiscardReason; connection_id: bigint }) => enums.Updates;
  video?: true;
  peer: enums.InputPhoneCall;
  duration: number;
  reason: enums.PhoneCallDiscardReason;
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

  constructor(params: { video?: true; peer: enums.InputPhoneCall; duration: number; reason: enums.PhoneCallDiscardReason; connection_id: bigint }) {
    super();
    this.video = params.video;
    this.peer = params.peer;
    this.duration = params.duration;
    this.reason = params.reason;
    this.connection_id = params.connection_id;
  }
}

class phone_setCallRating_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { user_initiative?: true; peer: enums.InputPhoneCall; rating: number; comment: string }) => enums.Updates;
  user_initiative?: true;
  peer: enums.InputPhoneCall;
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

  constructor(params: { user_initiative?: true; peer: enums.InputPhoneCall; rating: number; comment: string }) {
    super();
    this.user_initiative = params.user_initiative;
    this.peer = params.peer;
    this.rating = params.rating;
    this.comment = params.comment;
  }
}

class phone_saveCallDebug_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPhoneCall; debug: enums.DataJSON }) => boolean;
  peer: enums.InputPhoneCall;
  debug: enums.DataJSON;

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

  constructor(params: { peer: enums.InputPhoneCall; debug: enums.DataJSON }) {
    super();
    this.peer = params.peer;
    this.debug = params.debug;
  }
}

class phone_sendSignalingData_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPhoneCall; data: Uint8Array }) => boolean;
  peer: enums.InputPhoneCall;
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

  constructor(params: { peer: enums.InputPhoneCall; data: Uint8Array }) {
    super();
    this.peer = params.peer;
    this.data = params.data;
  }
}

class phone_createGroupCall_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { rtmp_stream?: true; peer: enums.InputPeer; random_id: number; title?: string; schedule_date?: number }) => enums.Updates;
  rtmp_stream?: true;
  peer: enums.InputPeer;
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

  constructor(params: { rtmp_stream?: true; peer: enums.InputPeer; random_id: number; title?: string; schedule_date?: number }) {
    super();
    this.rtmp_stream = params.rtmp_stream;
    this.peer = params.peer;
    this.random_id = params.random_id;
    this.title = params.title;
    this.schedule_date = params.schedule_date;
  }
}

class phone_joinGroupCall_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { muted?: true; video_stopped?: true; call: enums.InputGroupCall; join_as: enums.InputPeer; invite_hash?: string; params: enums.DataJSON }) => enums.Updates;
  muted?: true;
  video_stopped?: true;
  call: enums.InputGroupCall;
  join_as: enums.InputPeer;
  invite_hash?: string;
  params: enums.DataJSON;

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

  constructor(params: { muted?: true; video_stopped?: true; call: enums.InputGroupCall; join_as: enums.InputPeer; invite_hash?: string; params: enums.DataJSON }) {
    super();
    this.muted = params.muted;
    this.video_stopped = params.video_stopped;
    this.call = params.call;
    this.join_as = params.join_as;
    this.invite_hash = params.invite_hash;
    this.params = params.params;
  }
}

class phone_leaveGroupCall_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { call: enums.InputGroupCall; source: number }) => enums.Updates;
  call: enums.InputGroupCall;
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

  constructor(params: { call: enums.InputGroupCall; source: number }) {
    super();
    this.call = params.call;
    this.source = params.source;
  }
}

class phone_inviteToGroupCall_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { call: enums.InputGroupCall; users: Array<enums.InputUser> }) => enums.Updates;
  call: enums.InputGroupCall;
  users: Array<enums.InputUser>;

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

  constructor(params: { call: enums.InputGroupCall; users: Array<enums.InputUser> }) {
    super();
    this.call = params.call;
    this.users = params.users;
  }
}

class phone_discardGroupCall_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { call: enums.InputGroupCall }) => enums.Updates;
  call: enums.InputGroupCall;

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

  constructor(params: { call: enums.InputGroupCall }) {
    super();
    this.call = params.call;
  }
}

class phone_toggleGroupCallSettings_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { reset_invite_hash?: true; call: enums.InputGroupCall; join_muted?: boolean }) => enums.Updates;
  reset_invite_hash?: true;
  call: enums.InputGroupCall;
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

  constructor(params: { reset_invite_hash?: true; call: enums.InputGroupCall; join_muted?: boolean }) {
    super();
    this.reset_invite_hash = params.reset_invite_hash;
    this.call = params.call;
    this.join_muted = params.join_muted;
  }
}

class phone_getGroupCall_ extends Function_<enums.phone.GroupCall> {
  static __F = Symbol() as unknown as (params: { call: enums.InputGroupCall; limit: number }) => enums.phone.GroupCall;
  call: enums.InputGroupCall;
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

  constructor(params: { call: enums.InputGroupCall; limit: number }) {
    super();
    this.call = params.call;
    this.limit = params.limit;
  }
}

class phone_getGroupParticipants_ extends Function_<enums.phone.GroupParticipants> {
  static __F = Symbol() as unknown as (params: { call: enums.InputGroupCall; ids: Array<enums.InputPeer>; sources: Array<number>; offset: string; limit: number }) => enums.phone.GroupParticipants;
  call: enums.InputGroupCall;
  ids: Array<enums.InputPeer>;
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

  constructor(params: { call: enums.InputGroupCall; ids: Array<enums.InputPeer>; sources: Array<number>; offset: string; limit: number }) {
    super();
    this.call = params.call;
    this.ids = params.ids;
    this.sources = params.sources;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

class phone_checkGroupCall_ extends Function_<number[]> {
  static __F = Symbol() as unknown as (params: { call: enums.InputGroupCall; sources: Array<number> }) => number[];
  call: enums.InputGroupCall;
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

  constructor(params: { call: enums.InputGroupCall; sources: Array<number> }) {
    super();
    this.call = params.call;
    this.sources = params.sources;
  }
}

class phone_toggleGroupCallRecord_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { start?: true; video?: true; call: enums.InputGroupCall; title?: string; video_portrait?: boolean }) => enums.Updates;
  start?: true;
  video?: true;
  call: enums.InputGroupCall;
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

  constructor(params: { start?: true; video?: true; call: enums.InputGroupCall; title?: string; video_portrait?: boolean }) {
    super();
    this.start = params.start;
    this.video = params.video;
    this.call = params.call;
    this.title = params.title;
    this.video_portrait = params.video_portrait;
  }
}

class phone_editGroupCallParticipant_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { call: enums.InputGroupCall; participant: enums.InputPeer; muted?: boolean; volume?: number; raise_hand?: boolean; video_stopped?: boolean; video_paused?: boolean; presentation_paused?: boolean }) => enums.Updates;
  call: enums.InputGroupCall;
  participant: enums.InputPeer;
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

  constructor(params: { call: enums.InputGroupCall; participant: enums.InputPeer; muted?: boolean; volume?: number; raise_hand?: boolean; video_stopped?: boolean; video_paused?: boolean; presentation_paused?: boolean }) {
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

class phone_editGroupCallTitle_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { call: enums.InputGroupCall; title: string }) => enums.Updates;
  call: enums.InputGroupCall;
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

  constructor(params: { call: enums.InputGroupCall; title: string }) {
    super();
    this.call = params.call;
    this.title = params.title;
  }
}

class phone_getGroupCallJoinAs_ extends Function_<enums.phone.JoinAsPeers> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer }) => enums.phone.JoinAsPeers;
  peer: enums.InputPeer;

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

  constructor(params: { peer: enums.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

class phone_exportGroupCallInvite_ extends Function_<enums.phone.ExportedGroupCallInvite> {
  static __F = Symbol() as unknown as (params: { can_self_unmute?: true; call: enums.InputGroupCall }) => enums.phone.ExportedGroupCallInvite;
  can_self_unmute?: true;
  call: enums.InputGroupCall;

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

  constructor(params: { can_self_unmute?: true; call: enums.InputGroupCall }) {
    super();
    this.can_self_unmute = params.can_self_unmute;
    this.call = params.call;
  }
}

class phone_toggleGroupCallStartSubscription_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { call: enums.InputGroupCall; subscribed: boolean }) => enums.Updates;
  call: enums.InputGroupCall;
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

  constructor(params: { call: enums.InputGroupCall; subscribed: boolean }) {
    super();
    this.call = params.call;
    this.subscribed = params.subscribed;
  }
}

class phone_startScheduledGroupCall_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { call: enums.InputGroupCall }) => enums.Updates;
  call: enums.InputGroupCall;

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

  constructor(params: { call: enums.InputGroupCall }) {
    super();
    this.call = params.call;
  }
}

class phone_saveDefaultGroupCallJoinAs_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; join_as: enums.InputPeer }) => boolean;
  peer: enums.InputPeer;
  join_as: enums.InputPeer;

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

  constructor(params: { peer: enums.InputPeer; join_as: enums.InputPeer }) {
    super();
    this.peer = params.peer;
    this.join_as = params.join_as;
  }
}

class phone_joinGroupCallPresentation_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { call: enums.InputGroupCall; params: enums.DataJSON }) => enums.Updates;
  call: enums.InputGroupCall;
  params: enums.DataJSON;

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

  constructor(params: { call: enums.InputGroupCall; params: enums.DataJSON }) {
    super();
    this.call = params.call;
    this.params = params.params;
  }
}

class phone_leaveGroupCallPresentation_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { call: enums.InputGroupCall }) => enums.Updates;
  call: enums.InputGroupCall;

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

  constructor(params: { call: enums.InputGroupCall }) {
    super();
    this.call = params.call;
  }
}

class phone_getGroupCallStreamChannels_ extends Function_<enums.phone.GroupCallStreamChannels> {
  static __F = Symbol() as unknown as (params: { call: enums.InputGroupCall }) => enums.phone.GroupCallStreamChannels;
  call: enums.InputGroupCall;

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

  constructor(params: { call: enums.InputGroupCall }) {
    super();
    this.call = params.call;
  }
}

class phone_getGroupCallStreamRtmpUrl_ extends Function_<enums.phone.GroupCallStreamRtmpUrl> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; revoke: boolean }) => enums.phone.GroupCallStreamRtmpUrl;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; revoke: boolean }) {
    super();
    this.peer = params.peer;
    this.revoke = params.revoke;
  }
}

class phone_saveCallLog_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPhoneCall; file: enums.InputFile }) => boolean;
  peer: enums.InputPhoneCall;
  file: enums.InputFile;

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

  constructor(params: { peer: enums.InputPhoneCall; file: enums.InputFile }) {
    super();
    this.peer = params.peer;
    this.file = params.file;
  }
}

class langpack_getLangPack_ extends Function_<enums.LangPackDifference> {
  static __F = Symbol() as unknown as (params: { lang_pack: string; lang_code: string }) => enums.LangPackDifference;
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

class langpack_getStrings_ extends Function_<enums.LangPackString[]> {
  static __F = Symbol() as unknown as (params: { lang_pack: string; lang_code: string; keys: Array<string> }) => enums.LangPackString[];
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

class langpack_getDifference_ extends Function_<enums.LangPackDifference> {
  static __F = Symbol() as unknown as (params: { lang_pack: string; lang_code: string; from_version: number }) => enums.LangPackDifference;
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

class langpack_getLanguages_ extends Function_<enums.LangPackLanguage[]> {
  static __F = Symbol() as unknown as (params: { lang_pack: string }) => enums.LangPackLanguage[];
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

class langpack_getLanguage_ extends Function_<enums.LangPackLanguage> {
  static __F = Symbol() as unknown as (params: { lang_pack: string; lang_code: string }) => enums.LangPackLanguage;
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

class folders_editPeerFolders_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { folder_peers: Array<enums.InputFolderPeer> }) => enums.Updates;
  folder_peers: Array<enums.InputFolderPeer>;

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

  constructor(params: { folder_peers: Array<enums.InputFolderPeer> }) {
    super();
    this.folder_peers = params.folder_peers;
  }
}

class stats_getBroadcastStats_ extends Function_<enums.stats.BroadcastStats> {
  static __F = Symbol() as unknown as (params: { dark?: true; channel: enums.InputChannel }) => enums.stats.BroadcastStats;
  dark?: true;
  channel: enums.InputChannel;

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

  constructor(params: { dark?: true; channel: enums.InputChannel }) {
    super();
    this.dark = params.dark;
    this.channel = params.channel;
  }
}

class stats_loadAsyncGraph_ extends Function_<enums.StatsGraph> {
  static __F = Symbol() as unknown as (params: { token: string; x?: bigint }) => enums.StatsGraph;
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

class stats_getMegagroupStats_ extends Function_<enums.stats.MegagroupStats> {
  static __F = Symbol() as unknown as (params: { dark?: true; channel: enums.InputChannel }) => enums.stats.MegagroupStats;
  dark?: true;
  channel: enums.InputChannel;

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

  constructor(params: { dark?: true; channel: enums.InputChannel }) {
    super();
    this.dark = params.dark;
    this.channel = params.channel;
  }
}

class stats_getMessagePublicForwards_ extends Function_<enums.messages.Messages> {
  static __F = Symbol() as unknown as (params: { channel: enums.InputChannel; msg_id: number; offset_rate: number; offset_peer: enums.InputPeer; offset_id: number; limit: number }) => enums.messages.Messages;
  channel: enums.InputChannel;
  msg_id: number;
  offset_rate: number;
  offset_peer: enums.InputPeer;
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

  constructor(params: { channel: enums.InputChannel; msg_id: number; offset_rate: number; offset_peer: enums.InputPeer; offset_id: number; limit: number }) {
    super();
    this.channel = params.channel;
    this.msg_id = params.msg_id;
    this.offset_rate = params.offset_rate;
    this.offset_peer = params.offset_peer;
    this.offset_id = params.offset_id;
    this.limit = params.limit;
  }
}

class stats_getMessageStats_ extends Function_<enums.stats.MessageStats> {
  static __F = Symbol() as unknown as (params: { dark?: true; channel: enums.InputChannel; msg_id: number }) => enums.stats.MessageStats;
  dark?: true;
  channel: enums.InputChannel;
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

  constructor(params: { dark?: true; channel: enums.InputChannel; msg_id: number }) {
    super();
    this.dark = params.dark;
    this.channel = params.channel;
    this.msg_id = params.msg_id;
  }
}

class stats_getStoryStats_ extends Function_<enums.stats.StoryStats> {
  static __F = Symbol() as unknown as (params: { dark?: true; peer: enums.InputPeer; id: number }) => enums.stats.StoryStats;
  dark?: true;
  peer: enums.InputPeer;
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

  constructor(params: { dark?: true; peer: enums.InputPeer; id: number }) {
    super();
    this.dark = params.dark;
    this.peer = params.peer;
    this.id = params.id;
  }
}

class stats_getStoryPublicForwards_ extends Function_<enums.stats.PublicForwards> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: number; offset: string; limit: number }) => enums.stats.PublicForwards;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; id: number; offset: string; limit: number }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

class chatlists_exportChatlistInvite_ extends Function_<enums.chatlists.ExportedChatlistInvite> {
  static __F = Symbol() as unknown as (params: { chatlist: enums.InputChatlist; title: string; peers: Array<enums.InputPeer> }) => enums.chatlists.ExportedChatlistInvite;
  chatlist: enums.InputChatlist;
  title: string;
  peers: Array<enums.InputPeer>;

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

  constructor(params: { chatlist: enums.InputChatlist; title: string; peers: Array<enums.InputPeer> }) {
    super();
    this.chatlist = params.chatlist;
    this.title = params.title;
    this.peers = params.peers;
  }
}

class chatlists_deleteExportedInvite_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { chatlist: enums.InputChatlist; slug: string }) => boolean;
  chatlist: enums.InputChatlist;
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

  constructor(params: { chatlist: enums.InputChatlist; slug: string }) {
    super();
    this.chatlist = params.chatlist;
    this.slug = params.slug;
  }
}

class chatlists_editExportedInvite_ extends Function_<enums.ExportedChatlistInvite> {
  static __F = Symbol() as unknown as (params: { chatlist: enums.InputChatlist; slug: string; title?: string; peers?: Array<enums.InputPeer> }) => enums.ExportedChatlistInvite;
  chatlist: enums.InputChatlist;
  slug: string;
  title?: string;
  peers?: Array<enums.InputPeer>;

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

  constructor(params: { chatlist: enums.InputChatlist; slug: string; title?: string; peers?: Array<enums.InputPeer> }) {
    super();
    this.chatlist = params.chatlist;
    this.slug = params.slug;
    this.title = params.title;
    this.peers = params.peers;
  }
}

class chatlists_getExportedInvites_ extends Function_<enums.chatlists.ExportedInvites> {
  static __F = Symbol() as unknown as (params: { chatlist: enums.InputChatlist }) => enums.chatlists.ExportedInvites;
  chatlist: enums.InputChatlist;

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

  constructor(params: { chatlist: enums.InputChatlist }) {
    super();
    this.chatlist = params.chatlist;
  }
}

class chatlists_checkChatlistInvite_ extends Function_<enums.chatlists.ChatlistInvite> {
  static __F = Symbol() as unknown as (params: { slug: string }) => enums.chatlists.ChatlistInvite;
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

class chatlists_joinChatlistInvite_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { slug: string; peers: Array<enums.InputPeer> }) => enums.Updates;
  slug: string;
  peers: Array<enums.InputPeer>;

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

  constructor(params: { slug: string; peers: Array<enums.InputPeer> }) {
    super();
    this.slug = params.slug;
    this.peers = params.peers;
  }
}

class chatlists_getChatlistUpdates_ extends Function_<enums.chatlists.ChatlistUpdates> {
  static __F = Symbol() as unknown as (params: { chatlist: enums.InputChatlist }) => enums.chatlists.ChatlistUpdates;
  chatlist: enums.InputChatlist;

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

  constructor(params: { chatlist: enums.InputChatlist }) {
    super();
    this.chatlist = params.chatlist;
  }
}

class chatlists_joinChatlistUpdates_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { chatlist: enums.InputChatlist; peers: Array<enums.InputPeer> }) => enums.Updates;
  chatlist: enums.InputChatlist;
  peers: Array<enums.InputPeer>;

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

  constructor(params: { chatlist: enums.InputChatlist; peers: Array<enums.InputPeer> }) {
    super();
    this.chatlist = params.chatlist;
    this.peers = params.peers;
  }
}

class chatlists_hideChatlistUpdates_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { chatlist: enums.InputChatlist }) => boolean;
  chatlist: enums.InputChatlist;

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

  constructor(params: { chatlist: enums.InputChatlist }) {
    super();
    this.chatlist = params.chatlist;
  }
}

class chatlists_getLeaveChatlistSuggestions_ extends Function_<enums.Peer[]> {
  static __F = Symbol() as unknown as (params: { chatlist: enums.InputChatlist }) => enums.Peer[];
  chatlist: enums.InputChatlist;

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

  constructor(params: { chatlist: enums.InputChatlist }) {
    super();
    this.chatlist = params.chatlist;
  }
}

class chatlists_leaveChatlist_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { chatlist: enums.InputChatlist; peers: Array<enums.InputPeer> }) => enums.Updates;
  chatlist: enums.InputChatlist;
  peers: Array<enums.InputPeer>;

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

  constructor(params: { chatlist: enums.InputChatlist; peers: Array<enums.InputPeer> }) {
    super();
    this.chatlist = params.chatlist;
    this.peers = params.peers;
  }
}

class stories_canSendStory_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer }) => boolean;
  peer: enums.InputPeer;

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

  constructor(params: { peer: enums.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

class stories_sendStory_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { pinned?: true; noforwards?: true; fwd_modified?: true; peer: enums.InputPeer; media: enums.InputMedia; media_areas?: Array<enums.MediaArea>; caption?: string; entities?: Array<enums.MessageEntity>; privacy_rules: Array<enums.InputPrivacyRule>; random_id: bigint; period?: number; fwd_from_id?: enums.InputPeer; fwd_from_story?: number }) => enums.Updates;
  pinned?: true;
  noforwards?: true;
  fwd_modified?: true;
  peer: enums.InputPeer;
  media: enums.InputMedia;
  media_areas?: Array<enums.MediaArea>;
  caption?: string;
  entities?: Array<enums.MessageEntity>;
  privacy_rules: Array<enums.InputPrivacyRule>;
  random_id: bigint;
  period?: number;
  fwd_from_id?: enums.InputPeer;
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

  constructor(params: { pinned?: true; noforwards?: true; fwd_modified?: true; peer: enums.InputPeer; media: enums.InputMedia; media_areas?: Array<enums.MediaArea>; caption?: string; entities?: Array<enums.MessageEntity>; privacy_rules: Array<enums.InputPrivacyRule>; random_id: bigint; period?: number; fwd_from_id?: enums.InputPeer; fwd_from_story?: number }) {
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

class stories_editStory_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: number; media?: enums.InputMedia; media_areas?: Array<enums.MediaArea>; caption?: string; entities?: Array<enums.MessageEntity>; privacy_rules?: Array<enums.InputPrivacyRule> }) => enums.Updates;
  peer: enums.InputPeer;
  id: number;
  media?: enums.InputMedia;
  media_areas?: Array<enums.MediaArea>;
  caption?: string;
  entities?: Array<enums.MessageEntity>;
  privacy_rules?: Array<enums.InputPrivacyRule>;

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

  constructor(params: { peer: enums.InputPeer; id: number; media?: enums.InputMedia; media_areas?: Array<enums.MediaArea>; caption?: string; entities?: Array<enums.MessageEntity>; privacy_rules?: Array<enums.InputPrivacyRule> }) {
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

class stories_deleteStories_ extends Function_<number[]> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => number[];
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

class stories_togglePinned_ extends Function_<number[]> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: Array<number>; pinned: boolean }) => number[];
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; id: Array<number>; pinned: boolean }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.pinned = params.pinned;
  }
}

class stories_getAllStories_ extends Function_<enums.stories.AllStories> {
  static __F = Symbol() as unknown as (params?: { next?: true; hidden?: true; state?: string }) => enums.stories.AllStories;
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

class stories_getPinnedStories_ extends Function_<enums.stories.Stories> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; offset_id: number; limit: number }) => enums.stories.Stories;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; offset_id: number; limit: number }) {
    super();
    this.peer = params.peer;
    this.offset_id = params.offset_id;
    this.limit = params.limit;
  }
}

class stories_getStoriesArchive_ extends Function_<enums.stories.Stories> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; offset_id: number; limit: number }) => enums.stories.Stories;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; offset_id: number; limit: number }) {
    super();
    this.peer = params.peer;
    this.offset_id = params.offset_id;
    this.limit = params.limit;
  }
}

class stories_getStoriesByID_ extends Function_<enums.stories.Stories> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => enums.stories.Stories;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

class stories_toggleAllStoriesHidden_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { hidden: boolean }) => boolean;
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

class stories_readStories_ extends Function_<number[]> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; max_id: number }) => number[];
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; max_id: number }) {
    super();
    this.peer = params.peer;
    this.max_id = params.max_id;
  }
}

class stories_incrementStoryViews_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => boolean;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

class stories_getStoryViewsList_ extends Function_<enums.stories.StoryViewsList> {
  static __F = Symbol() as unknown as (params: { just_contacts?: true; reactions_first?: true; peer: enums.InputPeer; q?: string; id: number; offset: string; limit: number }) => enums.stories.StoryViewsList;
  just_contacts?: true;
  reactions_first?: true;
  peer: enums.InputPeer;
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

  constructor(params: { just_contacts?: true; reactions_first?: true; peer: enums.InputPeer; q?: string; id: number; offset: string; limit: number }) {
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

class stories_getStoriesViews_ extends Function_<enums.stories.StoryViews> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => enums.stories.StoryViews;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

class stories_exportStoryLink_ extends Function_<enums.ExportedStoryLink> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: number }) => enums.ExportedStoryLink;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; id: number }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

class stories_report_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; id: Array<number>; reason: enums.ReportReason; message: string }) => boolean;
  peer: enums.InputPeer;
  id: Array<number>;
  reason: enums.ReportReason;
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

  constructor(params: { peer: enums.InputPeer; id: Array<number>; reason: enums.ReportReason; message: string }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.reason = params.reason;
    this.message = params.message;
  }
}

class stories_activateStealthMode_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params?: { past?: true; future?: true }) => enums.Updates;
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

class stories_sendReaction_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as (params: { add_to_recent?: true; peer: enums.InputPeer; story_id: number; reaction: enums.Reaction }) => enums.Updates;
  add_to_recent?: true;
  peer: enums.InputPeer;
  story_id: number;
  reaction: enums.Reaction;

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

  constructor(params: { add_to_recent?: true; peer: enums.InputPeer; story_id: number; reaction: enums.Reaction }) {
    super();
    this.add_to_recent = params.add_to_recent;
    this.peer = params.peer;
    this.story_id = params.story_id;
    this.reaction = params.reaction;
  }
}

class stories_getPeerStories_ extends Function_<enums.stories.PeerStories> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer }) => enums.stories.PeerStories;
  peer: enums.InputPeer;

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

  constructor(params: { peer: enums.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

class stories_getAllReadPeerStories_ extends Function_<enums.Updates> {
  static __F = Symbol() as unknown as () => enums.Updates;
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

class stories_getPeerMaxIDs_ extends Function_<number[]> {
  static __F = Symbol() as unknown as (params: { id: Array<enums.InputPeer> }) => number[];
  id: Array<enums.InputPeer>;

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

  constructor(params: { id: Array<enums.InputPeer> }) {
    super();
    this.id = params.id;
  }
}

class stories_getChatsToSend_ extends Function_<enums.messages.Chats> {
  static __F = Symbol() as unknown as () => enums.messages.Chats;
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

class stories_togglePeerStoriesHidden_ extends Function_<boolean> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; hidden: boolean }) => boolean;
  peer: enums.InputPeer;
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

  constructor(params: { peer: enums.InputPeer; hidden: boolean }) {
    super();
    this.peer = params.peer;
    this.hidden = params.hidden;
  }
}

class premium_getBoostsList_ extends Function_<enums.premium.BoostsList> {
  static __F = Symbol() as unknown as (params: { gifts?: true; peer: enums.InputPeer; offset: string; limit: number }) => enums.premium.BoostsList;
  gifts?: true;
  peer: enums.InputPeer;
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

  constructor(params: { gifts?: true; peer: enums.InputPeer; offset: string; limit: number }) {
    super();
    this.gifts = params.gifts;
    this.peer = params.peer;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

class premium_getMyBoosts_ extends Function_<enums.premium.MyBoosts> {
  static __F = Symbol() as unknown as () => enums.premium.MyBoosts;
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

class premium_applyBoost_ extends Function_<enums.premium.MyBoosts> {
  static __F = Symbol() as unknown as (params: { slots?: Array<number>; peer: enums.InputPeer }) => enums.premium.MyBoosts;
  slots?: Array<number>;
  peer: enums.InputPeer;

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

  constructor(params: { slots?: Array<number>; peer: enums.InputPeer }) {
    super();
    this.slots = params.slots;
    this.peer = params.peer;
  }
}

class premium_getBoostsStatus_ extends Function_<enums.premium.BoostsStatus> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer }) => enums.premium.BoostsStatus;
  peer: enums.InputPeer;

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

  constructor(params: { peer: enums.InputPeer }) {
    super();
    this.peer = params.peer;
  }
}

class premium_getUserBoosts_ extends Function_<enums.premium.BoostsList> {
  static __F = Symbol() as unknown as (params: { peer: enums.InputPeer; user_id: enums.InputUser }) => enums.premium.BoostsList;
  peer: enums.InputPeer;
  user_id: enums.InputUser;

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

  constructor(params: { peer: enums.InputPeer; user_id: enums.InputUser }) {
    super();
    this.peer = params.peer;
    this.user_id = params.user_id;
  }
}

export const functions = {
  Function: Function_,
  req_pq_multi: req_pq_multi_,
  req_DH_params: req_DH_params_,
  set_client_DH_params: set_client_DH_params_,
  rpc_drop_answer: rpc_drop_answer_,
  get_future_salts: get_future_salts_,
  ping: ping_,
  ping_delay_disconnect: ping_delay_disconnect_,
  destroy_session: destroy_session_,
  destroy_auth_key: destroy_auth_key_,
  invokeAfterMsg: invokeAfterMsg_,
  invokeAfterMsgs: invokeAfterMsgs_,
  initConnection: initConnection_,
  invokeWithLayer: invokeWithLayer_,
  invokeWithoutUpdates: invokeWithoutUpdates_,
  invokeWithMessagesRange: invokeWithMessagesRange_,
  invokeWithTakeout: invokeWithTakeout_,
  auth: {
    sendCode: auth_sendCode_,
    signUp: auth_signUp_,
    signIn: auth_signIn_,
    logOut: auth_logOut_,
    resetAuthorizations: auth_resetAuthorizations_,
    exportAuthorization: auth_exportAuthorization_,
    importAuthorization: auth_importAuthorization_,
    bindTempAuthKey: auth_bindTempAuthKey_,
    importBotAuthorization: auth_importBotAuthorization_,
    checkPassword: auth_checkPassword_,
    requestPasswordRecovery: auth_requestPasswordRecovery_,
    recoverPassword: auth_recoverPassword_,
    resendCode: auth_resendCode_,
    cancelCode: auth_cancelCode_,
    dropTempAuthKeys: auth_dropTempAuthKeys_,
    exportLoginToken: auth_exportLoginToken_,
    importLoginToken: auth_importLoginToken_,
    acceptLoginToken: auth_acceptLoginToken_,
    checkRecoveryPassword: auth_checkRecoveryPassword_,
    importWebTokenAuthorization: auth_importWebTokenAuthorization_,
    requestFirebaseSms: auth_requestFirebaseSms_,
    resetLoginEmail: auth_resetLoginEmail_,
  },
  account: {
    registerDevice: account_registerDevice_,
    unregisterDevice: account_unregisterDevice_,
    updateNotifySettings: account_updateNotifySettings_,
    getNotifySettings: account_getNotifySettings_,
    resetNotifySettings: account_resetNotifySettings_,
    updateProfile: account_updateProfile_,
    updateStatus: account_updateStatus_,
    getWallPapers: account_getWallPapers_,
    reportPeer: account_reportPeer_,
    checkUsername: account_checkUsername_,
    updateUsername: account_updateUsername_,
    getPrivacy: account_getPrivacy_,
    setPrivacy: account_setPrivacy_,
    deleteAccount: account_deleteAccount_,
    getAccountTTL: account_getAccountTTL_,
    setAccountTTL: account_setAccountTTL_,
    sendChangePhoneCode: account_sendChangePhoneCode_,
    changePhone: account_changePhone_,
    updateDeviceLocked: account_updateDeviceLocked_,
    getAuthorizations: account_getAuthorizations_,
    resetAuthorization: account_resetAuthorization_,
    getPassword: account_getPassword_,
    getPasswordSettings: account_getPasswordSettings_,
    updatePasswordSettings: account_updatePasswordSettings_,
    sendConfirmPhoneCode: account_sendConfirmPhoneCode_,
    confirmPhone: account_confirmPhone_,
    getTmpPassword: account_getTmpPassword_,
    getWebAuthorizations: account_getWebAuthorizations_,
    resetWebAuthorization: account_resetWebAuthorization_,
    resetWebAuthorizations: account_resetWebAuthorizations_,
    getAllSecureValues: account_getAllSecureValues_,
    getSecureValue: account_getSecureValue_,
    saveSecureValue: account_saveSecureValue_,
    deleteSecureValue: account_deleteSecureValue_,
    getAuthorizationForm: account_getAuthorizationForm_,
    acceptAuthorization: account_acceptAuthorization_,
    sendVerifyPhoneCode: account_sendVerifyPhoneCode_,
    verifyPhone: account_verifyPhone_,
    sendVerifyEmailCode: account_sendVerifyEmailCode_,
    verifyEmail: account_verifyEmail_,
    initTakeoutSession: account_initTakeoutSession_,
    finishTakeoutSession: account_finishTakeoutSession_,
    confirmPasswordEmail: account_confirmPasswordEmail_,
    resendPasswordEmail: account_resendPasswordEmail_,
    cancelPasswordEmail: account_cancelPasswordEmail_,
    getContactSignUpNotification: account_getContactSignUpNotification_,
    setContactSignUpNotification: account_setContactSignUpNotification_,
    getNotifyExceptions: account_getNotifyExceptions_,
    getWallPaper: account_getWallPaper_,
    uploadWallPaper: account_uploadWallPaper_,
    saveWallPaper: account_saveWallPaper_,
    installWallPaper: account_installWallPaper_,
    resetWallPapers: account_resetWallPapers_,
    getAutoDownloadSettings: account_getAutoDownloadSettings_,
    saveAutoDownloadSettings: account_saveAutoDownloadSettings_,
    uploadTheme: account_uploadTheme_,
    createTheme: account_createTheme_,
    updateTheme: account_updateTheme_,
    saveTheme: account_saveTheme_,
    installTheme: account_installTheme_,
    getTheme: account_getTheme_,
    getThemes: account_getThemes_,
    setContentSettings: account_setContentSettings_,
    getContentSettings: account_getContentSettings_,
    getMultiWallPapers: account_getMultiWallPapers_,
    getGlobalPrivacySettings: account_getGlobalPrivacySettings_,
    setGlobalPrivacySettings: account_setGlobalPrivacySettings_,
    reportProfilePhoto: account_reportProfilePhoto_,
    resetPassword: account_resetPassword_,
    declinePasswordReset: account_declinePasswordReset_,
    getChatThemes: account_getChatThemes_,
    setAuthorizationTTL: account_setAuthorizationTTL_,
    changeAuthorizationSettings: account_changeAuthorizationSettings_,
    getSavedRingtones: account_getSavedRingtones_,
    saveRingtone: account_saveRingtone_,
    uploadRingtone: account_uploadRingtone_,
    updateEmojiStatus: account_updateEmojiStatus_,
    getDefaultEmojiStatuses: account_getDefaultEmojiStatuses_,
    getRecentEmojiStatuses: account_getRecentEmojiStatuses_,
    clearRecentEmojiStatuses: account_clearRecentEmojiStatuses_,
    reorderUsernames: account_reorderUsernames_,
    toggleUsername: account_toggleUsername_,
    getDefaultProfilePhotoEmojis: account_getDefaultProfilePhotoEmojis_,
    getDefaultGroupPhotoEmojis: account_getDefaultGroupPhotoEmojis_,
    getAutoSaveSettings: account_getAutoSaveSettings_,
    saveAutoSaveSettings: account_saveAutoSaveSettings_,
    deleteAutoSaveExceptions: account_deleteAutoSaveExceptions_,
    invalidateSignInCodes: account_invalidateSignInCodes_,
    updateColor: account_updateColor_,
    getDefaultBackgroundEmojis: account_getDefaultBackgroundEmojis_,
  },
  users: {
    getUsers: users_getUsers_,
    getFullUser: users_getFullUser_,
    setSecureValueErrors: users_setSecureValueErrors_,
  },
  contacts: {
    getContactIDs: contacts_getContactIDs_,
    getStatuses: contacts_getStatuses_,
    getContacts: contacts_getContacts_,
    importContacts: contacts_importContacts_,
    deleteContacts: contacts_deleteContacts_,
    deleteByPhones: contacts_deleteByPhones_,
    block: contacts_block_,
    unblock: contacts_unblock_,
    getBlocked: contacts_getBlocked_,
    search: contacts_search_,
    resolveUsername: contacts_resolveUsername_,
    getTopPeers: contacts_getTopPeers_,
    resetTopPeerRating: contacts_resetTopPeerRating_,
    resetSaved: contacts_resetSaved_,
    getSaved: contacts_getSaved_,
    toggleTopPeers: contacts_toggleTopPeers_,
    addContact: contacts_addContact_,
    acceptContact: contacts_acceptContact_,
    getLocated: contacts_getLocated_,
    blockFromReplies: contacts_blockFromReplies_,
    resolvePhone: contacts_resolvePhone_,
    exportContactToken: contacts_exportContactToken_,
    importContactToken: contacts_importContactToken_,
    editCloseFriends: contacts_editCloseFriends_,
    setBlocked: contacts_setBlocked_,
  },
  messages: {
    getMessages: messages_getMessages_,
    getDialogs: messages_getDialogs_,
    getHistory: messages_getHistory_,
    search: messages_search_,
    readHistory: messages_readHistory_,
    deleteHistory: messages_deleteHistory_,
    deleteMessages: messages_deleteMessages_,
    receivedMessages: messages_receivedMessages_,
    setTyping: messages_setTyping_,
    sendMessage: messages_sendMessage_,
    sendMedia: messages_sendMedia_,
    forwardMessages: messages_forwardMessages_,
    reportSpam: messages_reportSpam_,
    getPeerSettings: messages_getPeerSettings_,
    report: messages_report_,
    getChats: messages_getChats_,
    getFullChat: messages_getFullChat_,
    editChatTitle: messages_editChatTitle_,
    editChatPhoto: messages_editChatPhoto_,
    addChatUser: messages_addChatUser_,
    deleteChatUser: messages_deleteChatUser_,
    createChat: messages_createChat_,
    getDhConfig: messages_getDhConfig_,
    requestEncryption: messages_requestEncryption_,
    acceptEncryption: messages_acceptEncryption_,
    discardEncryption: messages_discardEncryption_,
    setEncryptedTyping: messages_setEncryptedTyping_,
    readEncryptedHistory: messages_readEncryptedHistory_,
    sendEncrypted: messages_sendEncrypted_,
    sendEncryptedFile: messages_sendEncryptedFile_,
    sendEncryptedService: messages_sendEncryptedService_,
    receivedQueue: messages_receivedQueue_,
    reportEncryptedSpam: messages_reportEncryptedSpam_,
    readMessageContents: messages_readMessageContents_,
    getStickers: messages_getStickers_,
    getAllStickers: messages_getAllStickers_,
    getWebPagePreview: messages_getWebPagePreview_,
    exportChatInvite: messages_exportChatInvite_,
    checkChatInvite: messages_checkChatInvite_,
    importChatInvite: messages_importChatInvite_,
    getStickerSet: messages_getStickerSet_,
    installStickerSet: messages_installStickerSet_,
    uninstallStickerSet: messages_uninstallStickerSet_,
    startBot: messages_startBot_,
    getMessagesViews: messages_getMessagesViews_,
    editChatAdmin: messages_editChatAdmin_,
    migrateChat: messages_migrateChat_,
    searchGlobal: messages_searchGlobal_,
    reorderStickerSets: messages_reorderStickerSets_,
    getDocumentByHash: messages_getDocumentByHash_,
    getSavedGifs: messages_getSavedGifs_,
    saveGif: messages_saveGif_,
    getInlineBotResults: messages_getInlineBotResults_,
    setInlineBotResults: messages_setInlineBotResults_,
    sendInlineBotResult: messages_sendInlineBotResult_,
    getMessageEditData: messages_getMessageEditData_,
    editMessage: messages_editMessage_,
    editInlineBotMessage: messages_editInlineBotMessage_,
    getBotCallbackAnswer: messages_getBotCallbackAnswer_,
    setBotCallbackAnswer: messages_setBotCallbackAnswer_,
    getPeerDialogs: messages_getPeerDialogs_,
    saveDraft: messages_saveDraft_,
    getAllDrafts: messages_getAllDrafts_,
    getFeaturedStickers: messages_getFeaturedStickers_,
    readFeaturedStickers: messages_readFeaturedStickers_,
    getRecentStickers: messages_getRecentStickers_,
    saveRecentSticker: messages_saveRecentSticker_,
    clearRecentStickers: messages_clearRecentStickers_,
    getArchivedStickers: messages_getArchivedStickers_,
    getMaskStickers: messages_getMaskStickers_,
    getAttachedStickers: messages_getAttachedStickers_,
    setGameScore: messages_setGameScore_,
    setInlineGameScore: messages_setInlineGameScore_,
    getGameHighScores: messages_getGameHighScores_,
    getInlineGameHighScores: messages_getInlineGameHighScores_,
    getCommonChats: messages_getCommonChats_,
    getWebPage: messages_getWebPage_,
    toggleDialogPin: messages_toggleDialogPin_,
    reorderPinnedDialogs: messages_reorderPinnedDialogs_,
    getPinnedDialogs: messages_getPinnedDialogs_,
    setBotShippingResults: messages_setBotShippingResults_,
    setBotPrecheckoutResults: messages_setBotPrecheckoutResults_,
    uploadMedia: messages_uploadMedia_,
    sendScreenshotNotification: messages_sendScreenshotNotification_,
    getFavedStickers: messages_getFavedStickers_,
    faveSticker: messages_faveSticker_,
    getUnreadMentions: messages_getUnreadMentions_,
    readMentions: messages_readMentions_,
    getRecentLocations: messages_getRecentLocations_,
    sendMultiMedia: messages_sendMultiMedia_,
    uploadEncryptedFile: messages_uploadEncryptedFile_,
    searchStickerSets: messages_searchStickerSets_,
    getSplitRanges: messages_getSplitRanges_,
    markDialogUnread: messages_markDialogUnread_,
    getDialogUnreadMarks: messages_getDialogUnreadMarks_,
    clearAllDrafts: messages_clearAllDrafts_,
    updatePinnedMessage: messages_updatePinnedMessage_,
    sendVote: messages_sendVote_,
    getPollResults: messages_getPollResults_,
    getOnlines: messages_getOnlines_,
    editChatAbout: messages_editChatAbout_,
    editChatDefaultBannedRights: messages_editChatDefaultBannedRights_,
    getEmojiKeywords: messages_getEmojiKeywords_,
    getEmojiKeywordsDifference: messages_getEmojiKeywordsDifference_,
    getEmojiKeywordsLanguages: messages_getEmojiKeywordsLanguages_,
    getEmojiURL: messages_getEmojiURL_,
    getSearchCounters: messages_getSearchCounters_,
    requestUrlAuth: messages_requestUrlAuth_,
    acceptUrlAuth: messages_acceptUrlAuth_,
    hidePeerSettingsBar: messages_hidePeerSettingsBar_,
    getScheduledHistory: messages_getScheduledHistory_,
    getScheduledMessages: messages_getScheduledMessages_,
    sendScheduledMessages: messages_sendScheduledMessages_,
    deleteScheduledMessages: messages_deleteScheduledMessages_,
    getPollVotes: messages_getPollVotes_,
    toggleStickerSets: messages_toggleStickerSets_,
    getDialogFilters: messages_getDialogFilters_,
    getSuggestedDialogFilters: messages_getSuggestedDialogFilters_,
    updateDialogFilter: messages_updateDialogFilter_,
    updateDialogFiltersOrder: messages_updateDialogFiltersOrder_,
    getOldFeaturedStickers: messages_getOldFeaturedStickers_,
    getReplies: messages_getReplies_,
    getDiscussionMessage: messages_getDiscussionMessage_,
    readDiscussion: messages_readDiscussion_,
    unpinAllMessages: messages_unpinAllMessages_,
    deleteChat: messages_deleteChat_,
    deletePhoneCallHistory: messages_deletePhoneCallHistory_,
    checkHistoryImport: messages_checkHistoryImport_,
    initHistoryImport: messages_initHistoryImport_,
    uploadImportedMedia: messages_uploadImportedMedia_,
    startHistoryImport: messages_startHistoryImport_,
    getExportedChatInvites: messages_getExportedChatInvites_,
    getExportedChatInvite: messages_getExportedChatInvite_,
    editExportedChatInvite: messages_editExportedChatInvite_,
    deleteRevokedExportedChatInvites: messages_deleteRevokedExportedChatInvites_,
    deleteExportedChatInvite: messages_deleteExportedChatInvite_,
    getAdminsWithInvites: messages_getAdminsWithInvites_,
    getChatInviteImporters: messages_getChatInviteImporters_,
    setHistoryTTL: messages_setHistoryTTL_,
    checkHistoryImportPeer: messages_checkHistoryImportPeer_,
    setChatTheme: messages_setChatTheme_,
    getMessageReadParticipants: messages_getMessageReadParticipants_,
    getSearchResultsCalendar: messages_getSearchResultsCalendar_,
    getSearchResultsPositions: messages_getSearchResultsPositions_,
    hideChatJoinRequest: messages_hideChatJoinRequest_,
    hideAllChatJoinRequests: messages_hideAllChatJoinRequests_,
    toggleNoForwards: messages_toggleNoForwards_,
    saveDefaultSendAs: messages_saveDefaultSendAs_,
    sendReaction: messages_sendReaction_,
    getMessagesReactions: messages_getMessagesReactions_,
    getMessageReactionsList: messages_getMessageReactionsList_,
    setChatAvailableReactions: messages_setChatAvailableReactions_,
    getAvailableReactions: messages_getAvailableReactions_,
    setDefaultReaction: messages_setDefaultReaction_,
    translateText: messages_translateText_,
    getUnreadReactions: messages_getUnreadReactions_,
    readReactions: messages_readReactions_,
    searchSentMedia: messages_searchSentMedia_,
    getAttachMenuBots: messages_getAttachMenuBots_,
    getAttachMenuBot: messages_getAttachMenuBot_,
    toggleBotInAttachMenu: messages_toggleBotInAttachMenu_,
    requestWebView: messages_requestWebView_,
    prolongWebView: messages_prolongWebView_,
    requestSimpleWebView: messages_requestSimpleWebView_,
    sendWebViewResultMessage: messages_sendWebViewResultMessage_,
    sendWebViewData: messages_sendWebViewData_,
    transcribeAudio: messages_transcribeAudio_,
    rateTranscribedAudio: messages_rateTranscribedAudio_,
    getCustomEmojiDocuments: messages_getCustomEmojiDocuments_,
    getEmojiStickers: messages_getEmojiStickers_,
    getFeaturedEmojiStickers: messages_getFeaturedEmojiStickers_,
    reportReaction: messages_reportReaction_,
    getTopReactions: messages_getTopReactions_,
    getRecentReactions: messages_getRecentReactions_,
    clearRecentReactions: messages_clearRecentReactions_,
    getExtendedMedia: messages_getExtendedMedia_,
    setDefaultHistoryTTL: messages_setDefaultHistoryTTL_,
    getDefaultHistoryTTL: messages_getDefaultHistoryTTL_,
    sendBotRequestedPeer: messages_sendBotRequestedPeer_,
    getEmojiGroups: messages_getEmojiGroups_,
    getEmojiStatusGroups: messages_getEmojiStatusGroups_,
    getEmojiProfilePhotoGroups: messages_getEmojiProfilePhotoGroups_,
    searchCustomEmoji: messages_searchCustomEmoji_,
    togglePeerTranslations: messages_togglePeerTranslations_,
    getBotApp: messages_getBotApp_,
    requestAppWebView: messages_requestAppWebView_,
    setChatWallPaper: messages_setChatWallPaper_,
    searchEmojiStickerSets: messages_searchEmojiStickerSets_,
  },
  updates: {
    getState: updates_getState_,
    getDifference: updates_getDifference_,
    getChannelDifference: updates_getChannelDifference_,
  },
  photos: {
    updateProfilePhoto: photos_updateProfilePhoto_,
    uploadProfilePhoto: photos_uploadProfilePhoto_,
    deletePhotos: photos_deletePhotos_,
    getUserPhotos: photos_getUserPhotos_,
    uploadContactProfilePhoto: photos_uploadContactProfilePhoto_,
  },
  upload: {
    saveFilePart: upload_saveFilePart_,
    getFile: upload_getFile_,
    saveBigFilePart: upload_saveBigFilePart_,
    getWebFile: upload_getWebFile_,
    getCdnFile: upload_getCdnFile_,
    reuploadCdnFile: upload_reuploadCdnFile_,
    getCdnFileHashes: upload_getCdnFileHashes_,
    getFileHashes: upload_getFileHashes_,
  },
  help: {
    getConfig: help_getConfig_,
    getNearestDc: help_getNearestDc_,
    getAppUpdate: help_getAppUpdate_,
    getInviteText: help_getInviteText_,
    getSupport: help_getSupport_,
    getAppChangelog: help_getAppChangelog_,
    setBotUpdatesStatus: help_setBotUpdatesStatus_,
    getCdnConfig: help_getCdnConfig_,
    getRecentMeUrls: help_getRecentMeUrls_,
    getTermsOfServiceUpdate: help_getTermsOfServiceUpdate_,
    acceptTermsOfService: help_acceptTermsOfService_,
    getDeepLinkInfo: help_getDeepLinkInfo_,
    getAppConfig: help_getAppConfig_,
    saveAppLog: help_saveAppLog_,
    getPassportConfig: help_getPassportConfig_,
    getSupportName: help_getSupportName_,
    getUserInfo: help_getUserInfo_,
    editUserInfo: help_editUserInfo_,
    getPromoData: help_getPromoData_,
    hidePromoData: help_hidePromoData_,
    dismissSuggestion: help_dismissSuggestion_,
    getCountriesList: help_getCountriesList_,
    getPremiumPromo: help_getPremiumPromo_,
    getPeerColors: help_getPeerColors_,
    getPeerProfileColors: help_getPeerProfileColors_,
  },
  channels: {
    readHistory: channels_readHistory_,
    deleteMessages: channels_deleteMessages_,
    reportSpam: channels_reportSpam_,
    getMessages: channels_getMessages_,
    getParticipants: channels_getParticipants_,
    getParticipant: channels_getParticipant_,
    getChannels: channels_getChannels_,
    getFullChannel: channels_getFullChannel_,
    createChannel: channels_createChannel_,
    editAdmin: channels_editAdmin_,
    editTitle: channels_editTitle_,
    editPhoto: channels_editPhoto_,
    checkUsername: channels_checkUsername_,
    updateUsername: channels_updateUsername_,
    joinChannel: channels_joinChannel_,
    leaveChannel: channels_leaveChannel_,
    inviteToChannel: channels_inviteToChannel_,
    deleteChannel: channels_deleteChannel_,
    exportMessageLink: channels_exportMessageLink_,
    toggleSignatures: channels_toggleSignatures_,
    getAdminedPublicChannels: channels_getAdminedPublicChannels_,
    editBanned: channels_editBanned_,
    getAdminLog: channels_getAdminLog_,
    setStickers: channels_setStickers_,
    readMessageContents: channels_readMessageContents_,
    deleteHistory: channels_deleteHistory_,
    togglePreHistoryHidden: channels_togglePreHistoryHidden_,
    getLeftChannels: channels_getLeftChannels_,
    getGroupsForDiscussion: channels_getGroupsForDiscussion_,
    setDiscussionGroup: channels_setDiscussionGroup_,
    editCreator: channels_editCreator_,
    editLocation: channels_editLocation_,
    toggleSlowMode: channels_toggleSlowMode_,
    getInactiveChannels: channels_getInactiveChannels_,
    convertToGigagroup: channels_convertToGigagroup_,
    viewSponsoredMessage: channels_viewSponsoredMessage_,
    getSponsoredMessages: channels_getSponsoredMessages_,
    getSendAs: channels_getSendAs_,
    deleteParticipantHistory: channels_deleteParticipantHistory_,
    toggleJoinToSend: channels_toggleJoinToSend_,
    toggleJoinRequest: channels_toggleJoinRequest_,
    reorderUsernames: channels_reorderUsernames_,
    toggleUsername: channels_toggleUsername_,
    deactivateAllUsernames: channels_deactivateAllUsernames_,
    toggleForum: channels_toggleForum_,
    createForumTopic: channels_createForumTopic_,
    getForumTopics: channels_getForumTopics_,
    getForumTopicsByID: channels_getForumTopicsByID_,
    editForumTopic: channels_editForumTopic_,
    updatePinnedForumTopic: channels_updatePinnedForumTopic_,
    deleteTopicHistory: channels_deleteTopicHistory_,
    reorderPinnedForumTopics: channels_reorderPinnedForumTopics_,
    toggleAntiSpam: channels_toggleAntiSpam_,
    reportAntiSpamFalsePositive: channels_reportAntiSpamFalsePositive_,
    toggleParticipantsHidden: channels_toggleParticipantsHidden_,
    clickSponsoredMessage: channels_clickSponsoredMessage_,
    updateColor: channels_updateColor_,
    toggleViewForumAsMessages: channels_toggleViewForumAsMessages_,
    getChannelRecommendations: channels_getChannelRecommendations_,
  },
  bots: {
    sendCustomRequest: bots_sendCustomRequest_,
    answerWebhookJSONQuery: bots_answerWebhookJSONQuery_,
    setBotCommands: bots_setBotCommands_,
    resetBotCommands: bots_resetBotCommands_,
    getBotCommands: bots_getBotCommands_,
    setBotMenuButton: bots_setBotMenuButton_,
    getBotMenuButton: bots_getBotMenuButton_,
    setBotBroadcastDefaultAdminRights: bots_setBotBroadcastDefaultAdminRights_,
    setBotGroupDefaultAdminRights: bots_setBotGroupDefaultAdminRights_,
    setBotInfo: bots_setBotInfo_,
    getBotInfo: bots_getBotInfo_,
    reorderUsernames: bots_reorderUsernames_,
    toggleUsername: bots_toggleUsername_,
    canSendMessage: bots_canSendMessage_,
    allowSendMessage: bots_allowSendMessage_,
    invokeWebViewCustomMethod: bots_invokeWebViewCustomMethod_,
  },
  payments: {
    getPaymentForm: payments_getPaymentForm_,
    getPaymentReceipt: payments_getPaymentReceipt_,
    validateRequestedInfo: payments_validateRequestedInfo_,
    sendPaymentForm: payments_sendPaymentForm_,
    getSavedInfo: payments_getSavedInfo_,
    clearSavedInfo: payments_clearSavedInfo_,
    getBankCardData: payments_getBankCardData_,
    exportInvoice: payments_exportInvoice_,
    assignAppStoreTransaction: payments_assignAppStoreTransaction_,
    assignPlayMarketTransaction: payments_assignPlayMarketTransaction_,
    canPurchasePremium: payments_canPurchasePremium_,
    getPremiumGiftCodeOptions: payments_getPremiumGiftCodeOptions_,
    checkGiftCode: payments_checkGiftCode_,
    applyGiftCode: payments_applyGiftCode_,
    getGiveawayInfo: payments_getGiveawayInfo_,
    launchPrepaidGiveaway: payments_launchPrepaidGiveaway_,
  },
  stickers: {
    createStickerSet: stickers_createStickerSet_,
    removeStickerFromSet: stickers_removeStickerFromSet_,
    changeStickerPosition: stickers_changeStickerPosition_,
    addStickerToSet: stickers_addStickerToSet_,
    setStickerSetThumb: stickers_setStickerSetThumb_,
    checkShortName: stickers_checkShortName_,
    suggestShortName: stickers_suggestShortName_,
    changeSticker: stickers_changeSticker_,
    renameStickerSet: stickers_renameStickerSet_,
    deleteStickerSet: stickers_deleteStickerSet_,
  },
  phone: {
    getCallConfig: phone_getCallConfig_,
    requestCall: phone_requestCall_,
    acceptCall: phone_acceptCall_,
    confirmCall: phone_confirmCall_,
    receivedCall: phone_receivedCall_,
    discardCall: phone_discardCall_,
    setCallRating: phone_setCallRating_,
    saveCallDebug: phone_saveCallDebug_,
    sendSignalingData: phone_sendSignalingData_,
    createGroupCall: phone_createGroupCall_,
    joinGroupCall: phone_joinGroupCall_,
    leaveGroupCall: phone_leaveGroupCall_,
    inviteToGroupCall: phone_inviteToGroupCall_,
    discardGroupCall: phone_discardGroupCall_,
    toggleGroupCallSettings: phone_toggleGroupCallSettings_,
    getGroupCall: phone_getGroupCall_,
    getGroupParticipants: phone_getGroupParticipants_,
    checkGroupCall: phone_checkGroupCall_,
    toggleGroupCallRecord: phone_toggleGroupCallRecord_,
    editGroupCallParticipant: phone_editGroupCallParticipant_,
    editGroupCallTitle: phone_editGroupCallTitle_,
    getGroupCallJoinAs: phone_getGroupCallJoinAs_,
    exportGroupCallInvite: phone_exportGroupCallInvite_,
    toggleGroupCallStartSubscription: phone_toggleGroupCallStartSubscription_,
    startScheduledGroupCall: phone_startScheduledGroupCall_,
    saveDefaultGroupCallJoinAs: phone_saveDefaultGroupCallJoinAs_,
    joinGroupCallPresentation: phone_joinGroupCallPresentation_,
    leaveGroupCallPresentation: phone_leaveGroupCallPresentation_,
    getGroupCallStreamChannels: phone_getGroupCallStreamChannels_,
    getGroupCallStreamRtmpUrl: phone_getGroupCallStreamRtmpUrl_,
    saveCallLog: phone_saveCallLog_,
  },
  langpack: {
    getLangPack: langpack_getLangPack_,
    getStrings: langpack_getStrings_,
    getDifference: langpack_getDifference_,
    getLanguages: langpack_getLanguages_,
    getLanguage: langpack_getLanguage_,
  },
  folders: {
    editPeerFolders: folders_editPeerFolders_,
  },
  stats: {
    getBroadcastStats: stats_getBroadcastStats_,
    loadAsyncGraph: stats_loadAsyncGraph_,
    getMegagroupStats: stats_getMegagroupStats_,
    getMessagePublicForwards: stats_getMessagePublicForwards_,
    getMessageStats: stats_getMessageStats_,
    getStoryStats: stats_getStoryStats_,
    getStoryPublicForwards: stats_getStoryPublicForwards_,
  },
  chatlists: {
    exportChatlistInvite: chatlists_exportChatlistInvite_,
    deleteExportedInvite: chatlists_deleteExportedInvite_,
    editExportedInvite: chatlists_editExportedInvite_,
    getExportedInvites: chatlists_getExportedInvites_,
    checkChatlistInvite: chatlists_checkChatlistInvite_,
    joinChatlistInvite: chatlists_joinChatlistInvite_,
    getChatlistUpdates: chatlists_getChatlistUpdates_,
    joinChatlistUpdates: chatlists_joinChatlistUpdates_,
    hideChatlistUpdates: chatlists_hideChatlistUpdates_,
    getLeaveChatlistSuggestions: chatlists_getLeaveChatlistSuggestions_,
    leaveChatlist: chatlists_leaveChatlist_,
  },
  stories: {
    canSendStory: stories_canSendStory_,
    sendStory: stories_sendStory_,
    editStory: stories_editStory_,
    deleteStories: stories_deleteStories_,
    togglePinned: stories_togglePinned_,
    getAllStories: stories_getAllStories_,
    getPinnedStories: stories_getPinnedStories_,
    getStoriesArchive: stories_getStoriesArchive_,
    getStoriesByID: stories_getStoriesByID_,
    toggleAllStoriesHidden: stories_toggleAllStoriesHidden_,
    readStories: stories_readStories_,
    incrementStoryViews: stories_incrementStoryViews_,
    getStoryViewsList: stories_getStoryViewsList_,
    getStoriesViews: stories_getStoriesViews_,
    exportStoryLink: stories_exportStoryLink_,
    report: stories_report_,
    activateStealthMode: stories_activateStealthMode_,
    sendReaction: stories_sendReaction_,
    getPeerStories: stories_getPeerStories_,
    getAllReadPeerStories: stories_getAllReadPeerStories_,
    getPeerMaxIDs: stories_getPeerMaxIDs_,
    getChatsToSend: stories_getChatsToSend_,
    togglePeerStoriesHidden: stories_togglePeerStoriesHidden_,
  },
  premium: {
    getBoostsList: premium_getBoostsList_,
    getMyBoosts: premium_getMyBoosts_,
    applyBoost: premium_applyBoost_,
    getBoostsStatus: premium_getBoostsStatus_,
    getUserBoosts: premium_getUserBoosts_,
  },
};
export declare namespace functions {
  type Function<T> = Function_<T>;
  type req_pq_multi = req_pq_multi_;
  type req_DH_params = req_DH_params_;
  type set_client_DH_params = set_client_DH_params_;
  type rpc_drop_answer = rpc_drop_answer_;
  type get_future_salts = get_future_salts_;
  type ping = ping_;
  type ping_delay_disconnect = ping_delay_disconnect_;
  type destroy_session = destroy_session_;
  type destroy_auth_key = destroy_auth_key_;
  type invokeAfterMsg<T extends Function<unknown>> = invokeAfterMsg_<T>;
  type invokeAfterMsgs<T extends Function<unknown>> = invokeAfterMsgs_<T>;
  type initConnection<T extends Function<unknown>> = initConnection_<T>;
  type invokeWithLayer<T extends Function<unknown>> = invokeWithLayer_<T>;
  type invokeWithoutUpdates<T extends Function<unknown>> = invokeWithoutUpdates_<T>;
  type invokeWithMessagesRange<T extends Function<unknown>> = invokeWithMessagesRange_<T>;
  type invokeWithTakeout<T extends Function<unknown>> = invokeWithTakeout_<T>;
  namespace auth {
    type sendCode = auth_sendCode_;
    type signUp = auth_signUp_;
    type signIn = auth_signIn_;
    type logOut = auth_logOut_;
    type resetAuthorizations = auth_resetAuthorizations_;
    type exportAuthorization = auth_exportAuthorization_;
    type importAuthorization = auth_importAuthorization_;
    type bindTempAuthKey = auth_bindTempAuthKey_;
    type importBotAuthorization = auth_importBotAuthorization_;
    type checkPassword = auth_checkPassword_;
    type requestPasswordRecovery = auth_requestPasswordRecovery_;
    type recoverPassword = auth_recoverPassword_;
    type resendCode = auth_resendCode_;
    type cancelCode = auth_cancelCode_;
    type dropTempAuthKeys = auth_dropTempAuthKeys_;
    type exportLoginToken = auth_exportLoginToken_;
    type importLoginToken = auth_importLoginToken_;
    type acceptLoginToken = auth_acceptLoginToken_;
    type checkRecoveryPassword = auth_checkRecoveryPassword_;
    type importWebTokenAuthorization = auth_importWebTokenAuthorization_;
    type requestFirebaseSms = auth_requestFirebaseSms_;
    type resetLoginEmail = auth_resetLoginEmail_;
  }
  namespace account {
    type registerDevice = account_registerDevice_;
    type unregisterDevice = account_unregisterDevice_;
    type updateNotifySettings = account_updateNotifySettings_;
    type getNotifySettings = account_getNotifySettings_;
    type resetNotifySettings = account_resetNotifySettings_;
    type updateProfile = account_updateProfile_;
    type updateStatus = account_updateStatus_;
    type getWallPapers = account_getWallPapers_;
    type reportPeer = account_reportPeer_;
    type checkUsername = account_checkUsername_;
    type updateUsername = account_updateUsername_;
    type getPrivacy = account_getPrivacy_;
    type setPrivacy = account_setPrivacy_;
    type deleteAccount = account_deleteAccount_;
    type getAccountTTL = account_getAccountTTL_;
    type setAccountTTL = account_setAccountTTL_;
    type sendChangePhoneCode = account_sendChangePhoneCode_;
    type changePhone = account_changePhone_;
    type updateDeviceLocked = account_updateDeviceLocked_;
    type getAuthorizations = account_getAuthorizations_;
    type resetAuthorization = account_resetAuthorization_;
    type getPassword = account_getPassword_;
    type getPasswordSettings = account_getPasswordSettings_;
    type updatePasswordSettings = account_updatePasswordSettings_;
    type sendConfirmPhoneCode = account_sendConfirmPhoneCode_;
    type confirmPhone = account_confirmPhone_;
    type getTmpPassword = account_getTmpPassword_;
    type getWebAuthorizations = account_getWebAuthorizations_;
    type resetWebAuthorization = account_resetWebAuthorization_;
    type resetWebAuthorizations = account_resetWebAuthorizations_;
    type getAllSecureValues = account_getAllSecureValues_;
    type getSecureValue = account_getSecureValue_;
    type saveSecureValue = account_saveSecureValue_;
    type deleteSecureValue = account_deleteSecureValue_;
    type getAuthorizationForm = account_getAuthorizationForm_;
    type acceptAuthorization = account_acceptAuthorization_;
    type sendVerifyPhoneCode = account_sendVerifyPhoneCode_;
    type verifyPhone = account_verifyPhone_;
    type sendVerifyEmailCode = account_sendVerifyEmailCode_;
    type verifyEmail = account_verifyEmail_;
    type initTakeoutSession = account_initTakeoutSession_;
    type finishTakeoutSession = account_finishTakeoutSession_;
    type confirmPasswordEmail = account_confirmPasswordEmail_;
    type resendPasswordEmail = account_resendPasswordEmail_;
    type cancelPasswordEmail = account_cancelPasswordEmail_;
    type getContactSignUpNotification = account_getContactSignUpNotification_;
    type setContactSignUpNotification = account_setContactSignUpNotification_;
    type getNotifyExceptions = account_getNotifyExceptions_;
    type getWallPaper = account_getWallPaper_;
    type uploadWallPaper = account_uploadWallPaper_;
    type saveWallPaper = account_saveWallPaper_;
    type installWallPaper = account_installWallPaper_;
    type resetWallPapers = account_resetWallPapers_;
    type getAutoDownloadSettings = account_getAutoDownloadSettings_;
    type saveAutoDownloadSettings = account_saveAutoDownloadSettings_;
    type uploadTheme = account_uploadTheme_;
    type createTheme = account_createTheme_;
    type updateTheme = account_updateTheme_;
    type saveTheme = account_saveTheme_;
    type installTheme = account_installTheme_;
    type getTheme = account_getTheme_;
    type getThemes = account_getThemes_;
    type setContentSettings = account_setContentSettings_;
    type getContentSettings = account_getContentSettings_;
    type getMultiWallPapers = account_getMultiWallPapers_;
    type getGlobalPrivacySettings = account_getGlobalPrivacySettings_;
    type setGlobalPrivacySettings = account_setGlobalPrivacySettings_;
    type reportProfilePhoto = account_reportProfilePhoto_;
    type resetPassword = account_resetPassword_;
    type declinePasswordReset = account_declinePasswordReset_;
    type getChatThemes = account_getChatThemes_;
    type setAuthorizationTTL = account_setAuthorizationTTL_;
    type changeAuthorizationSettings = account_changeAuthorizationSettings_;
    type getSavedRingtones = account_getSavedRingtones_;
    type saveRingtone = account_saveRingtone_;
    type uploadRingtone = account_uploadRingtone_;
    type updateEmojiStatus = account_updateEmojiStatus_;
    type getDefaultEmojiStatuses = account_getDefaultEmojiStatuses_;
    type getRecentEmojiStatuses = account_getRecentEmojiStatuses_;
    type clearRecentEmojiStatuses = account_clearRecentEmojiStatuses_;
    type reorderUsernames = account_reorderUsernames_;
    type toggleUsername = account_toggleUsername_;
    type getDefaultProfilePhotoEmojis = account_getDefaultProfilePhotoEmojis_;
    type getDefaultGroupPhotoEmojis = account_getDefaultGroupPhotoEmojis_;
    type getAutoSaveSettings = account_getAutoSaveSettings_;
    type saveAutoSaveSettings = account_saveAutoSaveSettings_;
    type deleteAutoSaveExceptions = account_deleteAutoSaveExceptions_;
    type invalidateSignInCodes = account_invalidateSignInCodes_;
    type updateColor = account_updateColor_;
    type getDefaultBackgroundEmojis = account_getDefaultBackgroundEmojis_;
  }
  namespace users {
    type getUsers = users_getUsers_;
    type getFullUser = users_getFullUser_;
    type setSecureValueErrors = users_setSecureValueErrors_;
  }
  namespace contacts {
    type getContactIDs = contacts_getContactIDs_;
    type getStatuses = contacts_getStatuses_;
    type getContacts = contacts_getContacts_;
    type importContacts = contacts_importContacts_;
    type deleteContacts = contacts_deleteContacts_;
    type deleteByPhones = contacts_deleteByPhones_;
    type block = contacts_block_;
    type unblock = contacts_unblock_;
    type getBlocked = contacts_getBlocked_;
    type search = contacts_search_;
    type resolveUsername = contacts_resolveUsername_;
    type getTopPeers = contacts_getTopPeers_;
    type resetTopPeerRating = contacts_resetTopPeerRating_;
    type resetSaved = contacts_resetSaved_;
    type getSaved = contacts_getSaved_;
    type toggleTopPeers = contacts_toggleTopPeers_;
    type addContact = contacts_addContact_;
    type acceptContact = contacts_acceptContact_;
    type getLocated = contacts_getLocated_;
    type blockFromReplies = contacts_blockFromReplies_;
    type resolvePhone = contacts_resolvePhone_;
    type exportContactToken = contacts_exportContactToken_;
    type importContactToken = contacts_importContactToken_;
    type editCloseFriends = contacts_editCloseFriends_;
    type setBlocked = contacts_setBlocked_;
  }
  namespace messages {
    type getMessages = messages_getMessages_;
    type getDialogs = messages_getDialogs_;
    type getHistory = messages_getHistory_;
    type search = messages_search_;
    type readHistory = messages_readHistory_;
    type deleteHistory = messages_deleteHistory_;
    type deleteMessages = messages_deleteMessages_;
    type receivedMessages = messages_receivedMessages_;
    type setTyping = messages_setTyping_;
    type sendMessage = messages_sendMessage_;
    type sendMedia = messages_sendMedia_;
    type forwardMessages = messages_forwardMessages_;
    type reportSpam = messages_reportSpam_;
    type getPeerSettings = messages_getPeerSettings_;
    type report = messages_report_;
    type getChats = messages_getChats_;
    type getFullChat = messages_getFullChat_;
    type editChatTitle = messages_editChatTitle_;
    type editChatPhoto = messages_editChatPhoto_;
    type addChatUser = messages_addChatUser_;
    type deleteChatUser = messages_deleteChatUser_;
    type createChat = messages_createChat_;
    type getDhConfig = messages_getDhConfig_;
    type requestEncryption = messages_requestEncryption_;
    type acceptEncryption = messages_acceptEncryption_;
    type discardEncryption = messages_discardEncryption_;
    type setEncryptedTyping = messages_setEncryptedTyping_;
    type readEncryptedHistory = messages_readEncryptedHistory_;
    type sendEncrypted = messages_sendEncrypted_;
    type sendEncryptedFile = messages_sendEncryptedFile_;
    type sendEncryptedService = messages_sendEncryptedService_;
    type receivedQueue = messages_receivedQueue_;
    type reportEncryptedSpam = messages_reportEncryptedSpam_;
    type readMessageContents = messages_readMessageContents_;
    type getStickers = messages_getStickers_;
    type getAllStickers = messages_getAllStickers_;
    type getWebPagePreview = messages_getWebPagePreview_;
    type exportChatInvite = messages_exportChatInvite_;
    type checkChatInvite = messages_checkChatInvite_;
    type importChatInvite = messages_importChatInvite_;
    type getStickerSet = messages_getStickerSet_;
    type installStickerSet = messages_installStickerSet_;
    type uninstallStickerSet = messages_uninstallStickerSet_;
    type startBot = messages_startBot_;
    type getMessagesViews = messages_getMessagesViews_;
    type editChatAdmin = messages_editChatAdmin_;
    type migrateChat = messages_migrateChat_;
    type searchGlobal = messages_searchGlobal_;
    type reorderStickerSets = messages_reorderStickerSets_;
    type getDocumentByHash = messages_getDocumentByHash_;
    type getSavedGifs = messages_getSavedGifs_;
    type saveGif = messages_saveGif_;
    type getInlineBotResults = messages_getInlineBotResults_;
    type setInlineBotResults = messages_setInlineBotResults_;
    type sendInlineBotResult = messages_sendInlineBotResult_;
    type getMessageEditData = messages_getMessageEditData_;
    type editMessage = messages_editMessage_;
    type editInlineBotMessage = messages_editInlineBotMessage_;
    type getBotCallbackAnswer = messages_getBotCallbackAnswer_;
    type setBotCallbackAnswer = messages_setBotCallbackAnswer_;
    type getPeerDialogs = messages_getPeerDialogs_;
    type saveDraft = messages_saveDraft_;
    type getAllDrafts = messages_getAllDrafts_;
    type getFeaturedStickers = messages_getFeaturedStickers_;
    type readFeaturedStickers = messages_readFeaturedStickers_;
    type getRecentStickers = messages_getRecentStickers_;
    type saveRecentSticker = messages_saveRecentSticker_;
    type clearRecentStickers = messages_clearRecentStickers_;
    type getArchivedStickers = messages_getArchivedStickers_;
    type getMaskStickers = messages_getMaskStickers_;
    type getAttachedStickers = messages_getAttachedStickers_;
    type setGameScore = messages_setGameScore_;
    type setInlineGameScore = messages_setInlineGameScore_;
    type getGameHighScores = messages_getGameHighScores_;
    type getInlineGameHighScores = messages_getInlineGameHighScores_;
    type getCommonChats = messages_getCommonChats_;
    type getWebPage = messages_getWebPage_;
    type toggleDialogPin = messages_toggleDialogPin_;
    type reorderPinnedDialogs = messages_reorderPinnedDialogs_;
    type getPinnedDialogs = messages_getPinnedDialogs_;
    type setBotShippingResults = messages_setBotShippingResults_;
    type setBotPrecheckoutResults = messages_setBotPrecheckoutResults_;
    type uploadMedia = messages_uploadMedia_;
    type sendScreenshotNotification = messages_sendScreenshotNotification_;
    type getFavedStickers = messages_getFavedStickers_;
    type faveSticker = messages_faveSticker_;
    type getUnreadMentions = messages_getUnreadMentions_;
    type readMentions = messages_readMentions_;
    type getRecentLocations = messages_getRecentLocations_;
    type sendMultiMedia = messages_sendMultiMedia_;
    type uploadEncryptedFile = messages_uploadEncryptedFile_;
    type searchStickerSets = messages_searchStickerSets_;
    type getSplitRanges = messages_getSplitRanges_;
    type markDialogUnread = messages_markDialogUnread_;
    type getDialogUnreadMarks = messages_getDialogUnreadMarks_;
    type clearAllDrafts = messages_clearAllDrafts_;
    type updatePinnedMessage = messages_updatePinnedMessage_;
    type sendVote = messages_sendVote_;
    type getPollResults = messages_getPollResults_;
    type getOnlines = messages_getOnlines_;
    type editChatAbout = messages_editChatAbout_;
    type editChatDefaultBannedRights = messages_editChatDefaultBannedRights_;
    type getEmojiKeywords = messages_getEmojiKeywords_;
    type getEmojiKeywordsDifference = messages_getEmojiKeywordsDifference_;
    type getEmojiKeywordsLanguages = messages_getEmojiKeywordsLanguages_;
    type getEmojiURL = messages_getEmojiURL_;
    type getSearchCounters = messages_getSearchCounters_;
    type requestUrlAuth = messages_requestUrlAuth_;
    type acceptUrlAuth = messages_acceptUrlAuth_;
    type hidePeerSettingsBar = messages_hidePeerSettingsBar_;
    type getScheduledHistory = messages_getScheduledHistory_;
    type getScheduledMessages = messages_getScheduledMessages_;
    type sendScheduledMessages = messages_sendScheduledMessages_;
    type deleteScheduledMessages = messages_deleteScheduledMessages_;
    type getPollVotes = messages_getPollVotes_;
    type toggleStickerSets = messages_toggleStickerSets_;
    type getDialogFilters = messages_getDialogFilters_;
    type getSuggestedDialogFilters = messages_getSuggestedDialogFilters_;
    type updateDialogFilter = messages_updateDialogFilter_;
    type updateDialogFiltersOrder = messages_updateDialogFiltersOrder_;
    type getOldFeaturedStickers = messages_getOldFeaturedStickers_;
    type getReplies = messages_getReplies_;
    type getDiscussionMessage = messages_getDiscussionMessage_;
    type readDiscussion = messages_readDiscussion_;
    type unpinAllMessages = messages_unpinAllMessages_;
    type deleteChat = messages_deleteChat_;
    type deletePhoneCallHistory = messages_deletePhoneCallHistory_;
    type checkHistoryImport = messages_checkHistoryImport_;
    type initHistoryImport = messages_initHistoryImport_;
    type uploadImportedMedia = messages_uploadImportedMedia_;
    type startHistoryImport = messages_startHistoryImport_;
    type getExportedChatInvites = messages_getExportedChatInvites_;
    type getExportedChatInvite = messages_getExportedChatInvite_;
    type editExportedChatInvite = messages_editExportedChatInvite_;
    type deleteRevokedExportedChatInvites = messages_deleteRevokedExportedChatInvites_;
    type deleteExportedChatInvite = messages_deleteExportedChatInvite_;
    type getAdminsWithInvites = messages_getAdminsWithInvites_;
    type getChatInviteImporters = messages_getChatInviteImporters_;
    type setHistoryTTL = messages_setHistoryTTL_;
    type checkHistoryImportPeer = messages_checkHistoryImportPeer_;
    type setChatTheme = messages_setChatTheme_;
    type getMessageReadParticipants = messages_getMessageReadParticipants_;
    type getSearchResultsCalendar = messages_getSearchResultsCalendar_;
    type getSearchResultsPositions = messages_getSearchResultsPositions_;
    type hideChatJoinRequest = messages_hideChatJoinRequest_;
    type hideAllChatJoinRequests = messages_hideAllChatJoinRequests_;
    type toggleNoForwards = messages_toggleNoForwards_;
    type saveDefaultSendAs = messages_saveDefaultSendAs_;
    type sendReaction = messages_sendReaction_;
    type getMessagesReactions = messages_getMessagesReactions_;
    type getMessageReactionsList = messages_getMessageReactionsList_;
    type setChatAvailableReactions = messages_setChatAvailableReactions_;
    type getAvailableReactions = messages_getAvailableReactions_;
    type setDefaultReaction = messages_setDefaultReaction_;
    type translateText = messages_translateText_;
    type getUnreadReactions = messages_getUnreadReactions_;
    type readReactions = messages_readReactions_;
    type searchSentMedia = messages_searchSentMedia_;
    type getAttachMenuBots = messages_getAttachMenuBots_;
    type getAttachMenuBot = messages_getAttachMenuBot_;
    type toggleBotInAttachMenu = messages_toggleBotInAttachMenu_;
    type requestWebView = messages_requestWebView_;
    type prolongWebView = messages_prolongWebView_;
    type requestSimpleWebView = messages_requestSimpleWebView_;
    type sendWebViewResultMessage = messages_sendWebViewResultMessage_;
    type sendWebViewData = messages_sendWebViewData_;
    type transcribeAudio = messages_transcribeAudio_;
    type rateTranscribedAudio = messages_rateTranscribedAudio_;
    type getCustomEmojiDocuments = messages_getCustomEmojiDocuments_;
    type getEmojiStickers = messages_getEmojiStickers_;
    type getFeaturedEmojiStickers = messages_getFeaturedEmojiStickers_;
    type reportReaction = messages_reportReaction_;
    type getTopReactions = messages_getTopReactions_;
    type getRecentReactions = messages_getRecentReactions_;
    type clearRecentReactions = messages_clearRecentReactions_;
    type getExtendedMedia = messages_getExtendedMedia_;
    type setDefaultHistoryTTL = messages_setDefaultHistoryTTL_;
    type getDefaultHistoryTTL = messages_getDefaultHistoryTTL_;
    type sendBotRequestedPeer = messages_sendBotRequestedPeer_;
    type getEmojiGroups = messages_getEmojiGroups_;
    type getEmojiStatusGroups = messages_getEmojiStatusGroups_;
    type getEmojiProfilePhotoGroups = messages_getEmojiProfilePhotoGroups_;
    type searchCustomEmoji = messages_searchCustomEmoji_;
    type togglePeerTranslations = messages_togglePeerTranslations_;
    type getBotApp = messages_getBotApp_;
    type requestAppWebView = messages_requestAppWebView_;
    type setChatWallPaper = messages_setChatWallPaper_;
    type searchEmojiStickerSets = messages_searchEmojiStickerSets_;
  }
  namespace updates {
    type getState = updates_getState_;
    type getDifference = updates_getDifference_;
    type getChannelDifference = updates_getChannelDifference_;
  }
  namespace photos {
    type updateProfilePhoto = photos_updateProfilePhoto_;
    type uploadProfilePhoto = photos_uploadProfilePhoto_;
    type deletePhotos = photos_deletePhotos_;
    type getUserPhotos = photos_getUserPhotos_;
    type uploadContactProfilePhoto = photos_uploadContactProfilePhoto_;
  }
  namespace upload {
    type saveFilePart = upload_saveFilePart_;
    type getFile = upload_getFile_;
    type saveBigFilePart = upload_saveBigFilePart_;
    type getWebFile = upload_getWebFile_;
    type getCdnFile = upload_getCdnFile_;
    type reuploadCdnFile = upload_reuploadCdnFile_;
    type getCdnFileHashes = upload_getCdnFileHashes_;
    type getFileHashes = upload_getFileHashes_;
  }
  namespace help {
    type getConfig = help_getConfig_;
    type getNearestDc = help_getNearestDc_;
    type getAppUpdate = help_getAppUpdate_;
    type getInviteText = help_getInviteText_;
    type getSupport = help_getSupport_;
    type getAppChangelog = help_getAppChangelog_;
    type setBotUpdatesStatus = help_setBotUpdatesStatus_;
    type getCdnConfig = help_getCdnConfig_;
    type getRecentMeUrls = help_getRecentMeUrls_;
    type getTermsOfServiceUpdate = help_getTermsOfServiceUpdate_;
    type acceptTermsOfService = help_acceptTermsOfService_;
    type getDeepLinkInfo = help_getDeepLinkInfo_;
    type getAppConfig = help_getAppConfig_;
    type saveAppLog = help_saveAppLog_;
    type getPassportConfig = help_getPassportConfig_;
    type getSupportName = help_getSupportName_;
    type getUserInfo = help_getUserInfo_;
    type editUserInfo = help_editUserInfo_;
    type getPromoData = help_getPromoData_;
    type hidePromoData = help_hidePromoData_;
    type dismissSuggestion = help_dismissSuggestion_;
    type getCountriesList = help_getCountriesList_;
    type getPremiumPromo = help_getPremiumPromo_;
    type getPeerColors = help_getPeerColors_;
    type getPeerProfileColors = help_getPeerProfileColors_;
  }
  namespace channels {
    type readHistory = channels_readHistory_;
    type deleteMessages = channels_deleteMessages_;
    type reportSpam = channels_reportSpam_;
    type getMessages = channels_getMessages_;
    type getParticipants = channels_getParticipants_;
    type getParticipant = channels_getParticipant_;
    type getChannels = channels_getChannels_;
    type getFullChannel = channels_getFullChannel_;
    type createChannel = channels_createChannel_;
    type editAdmin = channels_editAdmin_;
    type editTitle = channels_editTitle_;
    type editPhoto = channels_editPhoto_;
    type checkUsername = channels_checkUsername_;
    type updateUsername = channels_updateUsername_;
    type joinChannel = channels_joinChannel_;
    type leaveChannel = channels_leaveChannel_;
    type inviteToChannel = channels_inviteToChannel_;
    type deleteChannel = channels_deleteChannel_;
    type exportMessageLink = channels_exportMessageLink_;
    type toggleSignatures = channels_toggleSignatures_;
    type getAdminedPublicChannels = channels_getAdminedPublicChannels_;
    type editBanned = channels_editBanned_;
    type getAdminLog = channels_getAdminLog_;
    type setStickers = channels_setStickers_;
    type readMessageContents = channels_readMessageContents_;
    type deleteHistory = channels_deleteHistory_;
    type togglePreHistoryHidden = channels_togglePreHistoryHidden_;
    type getLeftChannels = channels_getLeftChannels_;
    type getGroupsForDiscussion = channels_getGroupsForDiscussion_;
    type setDiscussionGroup = channels_setDiscussionGroup_;
    type editCreator = channels_editCreator_;
    type editLocation = channels_editLocation_;
    type toggleSlowMode = channels_toggleSlowMode_;
    type getInactiveChannels = channels_getInactiveChannels_;
    type convertToGigagroup = channels_convertToGigagroup_;
    type viewSponsoredMessage = channels_viewSponsoredMessage_;
    type getSponsoredMessages = channels_getSponsoredMessages_;
    type getSendAs = channels_getSendAs_;
    type deleteParticipantHistory = channels_deleteParticipantHistory_;
    type toggleJoinToSend = channels_toggleJoinToSend_;
    type toggleJoinRequest = channels_toggleJoinRequest_;
    type reorderUsernames = channels_reorderUsernames_;
    type toggleUsername = channels_toggleUsername_;
    type deactivateAllUsernames = channels_deactivateAllUsernames_;
    type toggleForum = channels_toggleForum_;
    type createForumTopic = channels_createForumTopic_;
    type getForumTopics = channels_getForumTopics_;
    type getForumTopicsByID = channels_getForumTopicsByID_;
    type editForumTopic = channels_editForumTopic_;
    type updatePinnedForumTopic = channels_updatePinnedForumTopic_;
    type deleteTopicHistory = channels_deleteTopicHistory_;
    type reorderPinnedForumTopics = channels_reorderPinnedForumTopics_;
    type toggleAntiSpam = channels_toggleAntiSpam_;
    type reportAntiSpamFalsePositive = channels_reportAntiSpamFalsePositive_;
    type toggleParticipantsHidden = channels_toggleParticipantsHidden_;
    type clickSponsoredMessage = channels_clickSponsoredMessage_;
    type updateColor = channels_updateColor_;
    type toggleViewForumAsMessages = channels_toggleViewForumAsMessages_;
    type getChannelRecommendations = channels_getChannelRecommendations_;
  }
  namespace bots {
    type sendCustomRequest = bots_sendCustomRequest_;
    type answerWebhookJSONQuery = bots_answerWebhookJSONQuery_;
    type setBotCommands = bots_setBotCommands_;
    type resetBotCommands = bots_resetBotCommands_;
    type getBotCommands = bots_getBotCommands_;
    type setBotMenuButton = bots_setBotMenuButton_;
    type getBotMenuButton = bots_getBotMenuButton_;
    type setBotBroadcastDefaultAdminRights = bots_setBotBroadcastDefaultAdminRights_;
    type setBotGroupDefaultAdminRights = bots_setBotGroupDefaultAdminRights_;
    type setBotInfo = bots_setBotInfo_;
    type getBotInfo = bots_getBotInfo_;
    type reorderUsernames = bots_reorderUsernames_;
    type toggleUsername = bots_toggleUsername_;
    type canSendMessage = bots_canSendMessage_;
    type allowSendMessage = bots_allowSendMessage_;
    type invokeWebViewCustomMethod = bots_invokeWebViewCustomMethod_;
  }
  namespace payments {
    type getPaymentForm = payments_getPaymentForm_;
    type getPaymentReceipt = payments_getPaymentReceipt_;
    type validateRequestedInfo = payments_validateRequestedInfo_;
    type sendPaymentForm = payments_sendPaymentForm_;
    type getSavedInfo = payments_getSavedInfo_;
    type clearSavedInfo = payments_clearSavedInfo_;
    type getBankCardData = payments_getBankCardData_;
    type exportInvoice = payments_exportInvoice_;
    type assignAppStoreTransaction = payments_assignAppStoreTransaction_;
    type assignPlayMarketTransaction = payments_assignPlayMarketTransaction_;
    type canPurchasePremium = payments_canPurchasePremium_;
    type getPremiumGiftCodeOptions = payments_getPremiumGiftCodeOptions_;
    type checkGiftCode = payments_checkGiftCode_;
    type applyGiftCode = payments_applyGiftCode_;
    type getGiveawayInfo = payments_getGiveawayInfo_;
    type launchPrepaidGiveaway = payments_launchPrepaidGiveaway_;
  }
  namespace stickers {
    type createStickerSet = stickers_createStickerSet_;
    type removeStickerFromSet = stickers_removeStickerFromSet_;
    type changeStickerPosition = stickers_changeStickerPosition_;
    type addStickerToSet = stickers_addStickerToSet_;
    type setStickerSetThumb = stickers_setStickerSetThumb_;
    type checkShortName = stickers_checkShortName_;
    type suggestShortName = stickers_suggestShortName_;
    type changeSticker = stickers_changeSticker_;
    type renameStickerSet = stickers_renameStickerSet_;
    type deleteStickerSet = stickers_deleteStickerSet_;
  }
  namespace phone {
    type getCallConfig = phone_getCallConfig_;
    type requestCall = phone_requestCall_;
    type acceptCall = phone_acceptCall_;
    type confirmCall = phone_confirmCall_;
    type receivedCall = phone_receivedCall_;
    type discardCall = phone_discardCall_;
    type setCallRating = phone_setCallRating_;
    type saveCallDebug = phone_saveCallDebug_;
    type sendSignalingData = phone_sendSignalingData_;
    type createGroupCall = phone_createGroupCall_;
    type joinGroupCall = phone_joinGroupCall_;
    type leaveGroupCall = phone_leaveGroupCall_;
    type inviteToGroupCall = phone_inviteToGroupCall_;
    type discardGroupCall = phone_discardGroupCall_;
    type toggleGroupCallSettings = phone_toggleGroupCallSettings_;
    type getGroupCall = phone_getGroupCall_;
    type getGroupParticipants = phone_getGroupParticipants_;
    type checkGroupCall = phone_checkGroupCall_;
    type toggleGroupCallRecord = phone_toggleGroupCallRecord_;
    type editGroupCallParticipant = phone_editGroupCallParticipant_;
    type editGroupCallTitle = phone_editGroupCallTitle_;
    type getGroupCallJoinAs = phone_getGroupCallJoinAs_;
    type exportGroupCallInvite = phone_exportGroupCallInvite_;
    type toggleGroupCallStartSubscription = phone_toggleGroupCallStartSubscription_;
    type startScheduledGroupCall = phone_startScheduledGroupCall_;
    type saveDefaultGroupCallJoinAs = phone_saveDefaultGroupCallJoinAs_;
    type joinGroupCallPresentation = phone_joinGroupCallPresentation_;
    type leaveGroupCallPresentation = phone_leaveGroupCallPresentation_;
    type getGroupCallStreamChannels = phone_getGroupCallStreamChannels_;
    type getGroupCallStreamRtmpUrl = phone_getGroupCallStreamRtmpUrl_;
    type saveCallLog = phone_saveCallLog_;
  }
  namespace langpack {
    type getLangPack = langpack_getLangPack_;
    type getStrings = langpack_getStrings_;
    type getDifference = langpack_getDifference_;
    type getLanguages = langpack_getLanguages_;
    type getLanguage = langpack_getLanguage_;
  }
  namespace folders {
    type editPeerFolders = folders_editPeerFolders_;
  }
  namespace stats {
    type getBroadcastStats = stats_getBroadcastStats_;
    type loadAsyncGraph = stats_loadAsyncGraph_;
    type getMegagroupStats = stats_getMegagroupStats_;
    type getMessagePublicForwards = stats_getMessagePublicForwards_;
    type getMessageStats = stats_getMessageStats_;
    type getStoryStats = stats_getStoryStats_;
    type getStoryPublicForwards = stats_getStoryPublicForwards_;
  }
  namespace chatlists {
    type exportChatlistInvite = chatlists_exportChatlistInvite_;
    type deleteExportedInvite = chatlists_deleteExportedInvite_;
    type editExportedInvite = chatlists_editExportedInvite_;
    type getExportedInvites = chatlists_getExportedInvites_;
    type checkChatlistInvite = chatlists_checkChatlistInvite_;
    type joinChatlistInvite = chatlists_joinChatlistInvite_;
    type getChatlistUpdates = chatlists_getChatlistUpdates_;
    type joinChatlistUpdates = chatlists_joinChatlistUpdates_;
    type hideChatlistUpdates = chatlists_hideChatlistUpdates_;
    type getLeaveChatlistSuggestions = chatlists_getLeaveChatlistSuggestions_;
    type leaveChatlist = chatlists_leaveChatlist_;
  }
  namespace stories {
    type canSendStory = stories_canSendStory_;
    type sendStory = stories_sendStory_;
    type editStory = stories_editStory_;
    type deleteStories = stories_deleteStories_;
    type togglePinned = stories_togglePinned_;
    type getAllStories = stories_getAllStories_;
    type getPinnedStories = stories_getPinnedStories_;
    type getStoriesArchive = stories_getStoriesArchive_;
    type getStoriesByID = stories_getStoriesByID_;
    type toggleAllStoriesHidden = stories_toggleAllStoriesHidden_;
    type readStories = stories_readStories_;
    type incrementStoryViews = stories_incrementStoryViews_;
    type getStoryViewsList = stories_getStoryViewsList_;
    type getStoriesViews = stories_getStoriesViews_;
    type exportStoryLink = stories_exportStoryLink_;
    type report = stories_report_;
    type activateStealthMode = stories_activateStealthMode_;
    type sendReaction = stories_sendReaction_;
    type getPeerStories = stories_getPeerStories_;
    type getAllReadPeerStories = stories_getAllReadPeerStories_;
    type getPeerMaxIDs = stories_getPeerMaxIDs_;
    type getChatsToSend = stories_getChatsToSend_;
    type togglePeerStoriesHidden = stories_togglePeerStoriesHidden_;
  }
  namespace premium {
    type getBoostsList = premium_getBoostsList_;
    type getMyBoosts = premium_getMyBoosts_;
    type applyBoost = premium_applyBoost_;
    type getBoostsStatus = premium_getBoostsStatus_;
    type getUserBoosts = premium_getUserBoosts_;
  }
}
