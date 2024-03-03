// deno-fmt-ignore-file
import { id, params, TLObject, Params, paramDesc, ParamDesc, flags, name } from "./1_tl_object.ts";
import { types, enums } from "./2_types.ts";

export abstract class Function_<T> extends TLObject {
  __R: T = null as unknown as T; // virtual member
}

export class req_pq_multi_ extends Function_<enums.ResPQ> {
  static __F: (params: { nonce: bigint }) => enums.ResPQ = null as unknown as (params: { nonce: bigint }) => enums.ResPQ;
  nonce: bigint;

  protected get [id](): number {
    return 0xBE7E8EF1;
  }

  static get [name](): string {
    return "req_pq_multi"
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

export class req_DH_params_ extends Function_<enums.Server_DH_Params> {
  static __F: (params: { nonce: bigint; server_nonce: bigint; p: Uint8Array; q: Uint8Array; public_key_fingerprint: bigint; encrypted_data: Uint8Array }) => enums.Server_DH_Params = null as unknown as (params: { nonce: bigint; server_nonce: bigint; p: Uint8Array; q: Uint8Array; public_key_fingerprint: bigint; encrypted_data: Uint8Array }) => enums.Server_DH_Params;
  nonce: bigint;
  server_nonce: bigint;
  p: Uint8Array;
  q: Uint8Array;
  public_key_fingerprint: bigint;
  encrypted_data: Uint8Array;

  protected get [id](): number {
    return 0xD712E4BE;
  }

  static get [name](): string {
    return "req_DH_params"
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

export class set_client_DH_params_ extends Function_<enums.Set_client_DH_params_answer> {
  static __F: (params: { nonce: bigint; server_nonce: bigint; encrypted_data: Uint8Array }) => enums.Set_client_DH_params_answer = null as unknown as (params: { nonce: bigint; server_nonce: bigint; encrypted_data: Uint8Array }) => enums.Set_client_DH_params_answer;
  nonce: bigint;
  server_nonce: bigint;
  encrypted_data: Uint8Array;

  protected get [id](): number {
    return 0xF5045F1F;
  }

  static get [name](): string {
    return "set_client_DH_params"
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

export class rpc_drop_answer_ extends Function_<enums.RpcDropAnswer> {
  static __F: (params: { req_msg_id: bigint }) => enums.RpcDropAnswer = null as unknown as (params: { req_msg_id: bigint }) => enums.RpcDropAnswer;
  req_msg_id: bigint;

  protected get [id](): number {
    return 0x58E4A740;
  }

  static get [name](): string {
    return "rpc_drop_answer"
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

export class get_future_salts_ extends Function_<enums.FutureSalts> {
  static __F: (params: { num: number }) => enums.FutureSalts = null as unknown as (params: { num: number }) => enums.FutureSalts;
  num: number;

  protected get [id](): number {
    return 0xB921BD04;
  }

  static get [name](): string {
    return "get_future_salts"
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

export class ping_ extends Function_<enums.Pong> {
  static __F: (params: { ping_id: bigint }) => enums.Pong = null as unknown as (params: { ping_id: bigint }) => enums.Pong;
  ping_id: bigint;

  protected get [id](): number {
    return 0x7ABE77EC;
  }

  static get [name](): string {
    return "ping"
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

export class ping_delay_disconnect_ extends Function_<enums.Pong> {
  static __F: (params: { ping_id: bigint; disconnect_delay: number }) => enums.Pong = null as unknown as (params: { ping_id: bigint; disconnect_delay: number }) => enums.Pong;
  ping_id: bigint;
  disconnect_delay: number;

  protected get [id](): number {
    return 0xF3427B8C;
  }

  static get [name](): string {
    return "ping_delay_disconnect"
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

export class destroy_session_ extends Function_<enums.DestroySessionRes> {
  static __F: (params: { session_id: bigint }) => enums.DestroySessionRes = null as unknown as (params: { session_id: bigint }) => enums.DestroySessionRes;
  session_id: bigint;

  protected get [id](): number {
    return 0xE7512126;
  }

  static get [name](): string {
    return "destroy_session"
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

export class destroy_auth_key_ extends Function_<enums.DestroyAuthKeyRes> {
  static __F: () => enums.DestroyAuthKeyRes = null as unknown as () => enums.DestroyAuthKeyRes;
  protected get [id](): number {
    return 0xD1435160;
  }

  static get [name](): string {
    return "destroy_auth_key"
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

/** Invokes a query after successful completion of one of the previous queries. */
export class invokeAfterMsg_<T extends Function_<unknown>> extends Function_<T["__R"]> {
  static __F: <T extends Function_<unknown>>(params: { msg_id: bigint; query: T }) => T["__R"] = null as unknown as <T extends Function_<unknown>>(params: { msg_id: bigint; query: T }) => T["__R"];
  /** Message identifier on which a current query depends */
  msg_id: bigint;
  /** The query itself */
  query: T;

  protected get [id](): number {
    return 0xCB9F372D;
  }

  static get [name](): string {
    return "invokeAfterMsg"
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

/** Invokes a query after a successful completion of previous queries */
export class invokeAfterMsgs_<T extends Function_<unknown>> extends Function_<T["__R"]> {
  static __F: <T extends Function_<unknown>>(params: { msg_ids: Array<bigint>; query: T }) => T["__R"] = null as unknown as <T extends Function_<unknown>>(params: { msg_ids: Array<bigint>; query: T }) => T["__R"];
  /** List of messages on which a current query depends */
  msg_ids: Array<bigint>;
  /** The query itself */
  query: T;

  protected get [id](): number {
    return 0x3DC4B4F0;
  }

  static get [name](): string {
    return "invokeAfterMsgs"
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

/** Initialize connection */
export class initConnection_<T extends Function_<unknown>> extends Function_<T["__R"]> {
  static __F: <T extends Function_<unknown>>(params: { api_id: number; device_model: string; system_version: string; app_version: string; system_lang_code: string; lang_pack: string; lang_code: string; proxy?: enums.InputClientProxy; params?: enums.JSONValue; query: T }) => T["__R"] = null as unknown as <T extends Function_<unknown>>(params: { api_id: number; device_model: string; system_version: string; app_version: string; system_lang_code: string; lang_pack: string; lang_code: string; proxy?: enums.InputClientProxy; params?: enums.JSONValue; query: T }) => T["__R"];
  /** Application identifier (see. [App configuration](https://core.telegram.org/myapp)) */
  api_id: number;
  /** Device model */
  device_model: string;
  /** Operation system version */
  system_version: string;
  /** Application version */
  app_version: string;
  /** Code for the language used on the device's OS, ISO 639-1 standard */
  system_lang_code: string;
  /** Language pack to use */
  lang_pack: string;
  /** Code for the language used on the client, ISO 639-1 standard */
  lang_code: string;
  /** Info about an MTProto proxy */
  proxy?: enums.InputClientProxy;
  /** Additional initConnection parameters.  
  For now, only the `tz_offset` field is supported, for specifying timezone offset in seconds. */
  params?: enums.JSONValue;
  /** The query itself */
  query: T;

  protected get [id](): number {
    return 0xC1CD5EA9;
  }

  static get [name](): string {
    return "initConnection"
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

/** Invoke the specified query using the specified API [layer](https://core.telegram.org/api/invoking#layers) */
export class invokeWithLayer_<T extends Function_<unknown>> extends Function_<T["__R"]> {
  static __F: <T extends Function_<unknown>>(params: { layer: number; query: T }) => T["__R"] = null as unknown as <T extends Function_<unknown>>(params: { layer: number; query: T }) => T["__R"];
  /** The layer to use */
  layer: number;
  /** The query */
  query: T;

  protected get [id](): number {
    return 0xDA9B0D0D;
  }

  static get [name](): string {
    return "invokeWithLayer"
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

/** Invoke a request without subscribing the used connection for [updates](https://core.telegram.org/api/updates) (this is enabled by default for [file queries](https://core.telegram.org/api/files)). */
export class invokeWithoutUpdates_<T extends Function_<unknown>> extends Function_<T["__R"]> {
  static __F: <T extends Function_<unknown>>(params: { query: T }) => T["__R"] = null as unknown as <T extends Function_<unknown>>(params: { query: T }) => T["__R"];
  /** The query */
  query: T;

  protected get [id](): number {
    return 0xBF9459B7;
  }

  static get [name](): string {
    return "invokeWithoutUpdates"
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

/** Invoke with the given message range */
export class invokeWithMessagesRange_<T extends Function_<unknown>> extends Function_<T["__R"]> {
  static __F: <T extends Function_<unknown>>(params: { range: enums.MessageRange; query: T }) => T["__R"] = null as unknown as <T extends Function_<unknown>>(params: { range: enums.MessageRange; query: T }) => T["__R"];
  /** Message range */
  range: enums.MessageRange;
  /** Query */
  query: T;

  protected get [id](): number {
    return 0x365275F2;
  }

  static get [name](): string {
    return "invokeWithMessagesRange"
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

/** Invoke a method within a [takeout session, see here » for more info](https://core.telegram.org/api/takeout). */
export class invokeWithTakeout_<T extends Function_<unknown>> extends Function_<T["__R"]> {
  static __F: <T extends Function_<unknown>>(params: { takeout_id: bigint; query: T }) => T["__R"] = null as unknown as <T extends Function_<unknown>>(params: { takeout_id: bigint; query: T }) => T["__R"];
  /** [Takeout session ID »](https://core.telegram.org/api/takeout) */
  takeout_id: bigint;
  /** Query */
  query: T;

  protected get [id](): number {
    return 0xACA9FD2E;
  }

  static get [name](): string {
    return "invokeWithTakeout"
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

/** Send the verification code for login */
export class auth_sendCode_ extends Function_<enums.auth.SentCode> {
  static __F: (params: { phone_number: string; api_id: number; api_hash: string; settings: enums.CodeSettings }) => enums.auth.SentCode = null as unknown as (params: { phone_number: string; api_id: number; api_hash: string; settings: enums.CodeSettings }) => enums.auth.SentCode;
  /** Phone number in international format */
  phone_number: string;
  /** Application identifier (see [App configuration](https://core.telegram.org/myapp)) */
  api_id: number;
  /** Application secret hash (see [App configuration](https://core.telegram.org/myapp)) */
  api_hash: string;
  /** Settings for the code type to send */
  settings: enums.CodeSettings;

  protected get [id](): number {
    return 0xA677244F;
  }

  static get [name](): string {
    return "auth.sendCode"
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

/** Registers a validated phone number in the system. */
export class auth_signUp_ extends Function_<enums.auth.Authorization> {
  static __F: (params: { no_joined_notifications?: true; phone_number: string; phone_code_hash: string; first_name: string; last_name: string }) => enums.auth.Authorization = null as unknown as (params: { no_joined_notifications?: true; phone_number: string; phone_code_hash: string; first_name: string; last_name: string }) => enums.auth.Authorization;
  no_joined_notifications?: true;
  /** Phone number in the international format */
  phone_number: string;
  /** SMS-message ID */
  phone_code_hash: string;
  /** New user first name */
  first_name: string;
  /** New user last name */
  last_name: string;

  protected get [id](): number {
    return 0xAAC7B717;
  }

  static get [name](): string {
    return "auth.signUp"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["no_joined_notifications", "true", "flags.0?true"],
      ["phone_number", "string", "string"],
      ["phone_code_hash", "string", "string"],
      ["first_name", "string", "string"],
      ["last_name", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.no_joined_notifications ?? null, "true", "flags.0?true"],
      [this.phone_number, "string", "string"],
      [this.phone_code_hash, "string", "string"],
      [this.first_name, "string", "string"],
      [this.last_name, "string", "string"],
    ];
  }

  constructor(params: { no_joined_notifications?: true; phone_number: string; phone_code_hash: string; first_name: string; last_name: string }) {
    super();
    this.no_joined_notifications = params.no_joined_notifications;
    this.phone_number = params.phone_number;
    this.phone_code_hash = params.phone_code_hash;
    this.first_name = params.first_name;
    this.last_name = params.last_name;
  }
}

/** Signs in a user with a validated phone number. */
export class auth_signIn_ extends Function_<enums.auth.Authorization> {
  static __F: (params: { phone_number: string; phone_code_hash: string; phone_code?: string; email_verification?: enums.EmailVerification }) => enums.auth.Authorization = null as unknown as (params: { phone_number: string; phone_code_hash: string; phone_code?: string; email_verification?: enums.EmailVerification }) => enums.auth.Authorization;
  /** Phone number in the international format */
  phone_number: string;
  /** SMS-message ID, obtained from [auth.sendCode](https://core.telegram.org/method/auth.sendCode) */
  phone_code_hash: string;
  /** Valid numerical code from the SMS-message */
  phone_code?: string;
  /** Email verification code or token */
  email_verification?: enums.EmailVerification;

  protected get [id](): number {
    return 0x8D52A951;
  }

  static get [name](): string {
    return "auth.signIn"
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

/** Logs out the user. */
export class auth_logOut_ extends Function_<enums.auth.LoggedOut> {
  static __F: () => enums.auth.LoggedOut = null as unknown as () => enums.auth.LoggedOut;
  protected get [id](): number {
    return 0x3E72BA19;
  }

  static get [name](): string {
    return "auth.logOut"
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

/** Terminates all user's authorized sessions except for the current one. */
export class auth_resetAuthorizations_ extends Function_<boolean> {
  static __F: () => boolean = null as unknown as () => boolean;
  protected get [id](): number {
    return 0x9FAB0D1A;
  }

  static get [name](): string {
    return "auth.resetAuthorizations"
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

/** Returns data for copying authorization to another data-center. */
export class auth_exportAuthorization_ extends Function_<enums.auth.ExportedAuthorization> {
  static __F: (params: { dc_id: number }) => enums.auth.ExportedAuthorization = null as unknown as (params: { dc_id: number }) => enums.auth.ExportedAuthorization;
  /** Number of a target data-center */
  dc_id: number;

  protected get [id](): number {
    return 0xE5BFFFCD;
  }

  static get [name](): string {
    return "auth.exportAuthorization"
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

/** Logs in a user using a key transmitted from his native data-center. */
export class auth_importAuthorization_ extends Function_<enums.auth.Authorization> {
  static __F: (params: { id: bigint; bytes: Uint8Array }) => enums.auth.Authorization = null as unknown as (params: { id: bigint; bytes: Uint8Array }) => enums.auth.Authorization;
  /** User ID */
  id: bigint;
  /** Authorization key */
  bytes: Uint8Array;

  protected get [id](): number {
    return 0xA57A7DAD;
  }

  static get [name](): string {
    return "auth.importAuthorization"
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

/** Binds a temporary authorization key `temp_auth_key_id` to the permanent authorization key `perm_auth_key_id`. Each permanent key may only be bound to one temporary key at a time, binding a new temporary key overwrites the previous one. */
export class auth_bindTempAuthKey_ extends Function_<boolean> {
  static __F: (params: { perm_auth_key_id: bigint; nonce: bigint; expires_at: number; encrypted_message: Uint8Array }) => boolean = null as unknown as (params: { perm_auth_key_id: bigint; nonce: bigint; expires_at: number; encrypted_message: Uint8Array }) => boolean;
  /** Permanent auth\_key\_id to bind to */
  perm_auth_key_id: bigint;
  /** Random long from [Binding message contents](#binding-message-contents) */
  nonce: bigint;
  /** Unix timestamp to invalidate temporary key, see [Binding message contents](#binding-message-contents) */
  expires_at: number;
  /** See [Generating encrypted\_message](#generating-encrypted-message) */
  encrypted_message: Uint8Array;

  protected get [id](): number {
    return 0xCDD42A05;
  }

  static get [name](): string {
    return "auth.bindTempAuthKey"
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

/** Login as a bot */
export class auth_importBotAuthorization_ extends Function_<enums.auth.Authorization> {
  static __F: (params: { flags: number; api_id: number; api_hash: string; bot_auth_token: string }) => enums.auth.Authorization = null as unknown as (params: { flags: number; api_id: number; api_hash: string; bot_auth_token: string }) => enums.auth.Authorization;
  /** Reserved for future use */
  flags: number;
  /** Application identifier (see. [App configuration](https://core.telegram.org/myapp)) */
  api_id: number;
  /** Application identifier hash (see. [App configuration](https://core.telegram.org/myapp)) */
  api_hash: string;
  /** Bot token (see [bots](https://core.telegram.org/bots)) */
  bot_auth_token: string;

  protected get [id](): number {
    return 0x67A3FF2C;
  }

  static get [name](): string {
    return "auth.importBotAuthorization"
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

/** Try logging to an account protected by a [2FA password](https://core.telegram.org/api/srp). */
export class auth_checkPassword_ extends Function_<enums.auth.Authorization> {
  static __F: (params: { password: enums.InputCheckPasswordSRP }) => enums.auth.Authorization = null as unknown as (params: { password: enums.InputCheckPasswordSRP }) => enums.auth.Authorization;
  /** The account's password (see [SRP](https://core.telegram.org/api/srp)) */
  password: enums.InputCheckPasswordSRP;

  protected get [id](): number {
    return 0xD18B4D16;
  }

  static get [name](): string {
    return "auth.checkPassword"
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

/** Request recovery code of a [2FA password](https://core.telegram.org/api/srp), only for accounts with a [recovery email configured](https://core.telegram.org/api/srp#email-verification). */
export class auth_requestPasswordRecovery_ extends Function_<enums.auth.PasswordRecovery> {
  static __F: () => enums.auth.PasswordRecovery = null as unknown as () => enums.auth.PasswordRecovery;
  protected get [id](): number {
    return 0xD897BC66;
  }

  static get [name](): string {
    return "auth.requestPasswordRecovery"
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

/** Reset the [2FA password](https://core.telegram.org/api/srp) using the recovery code sent using [auth.requestPasswordRecovery](https://core.telegram.org/method/auth.requestPasswordRecovery). */
export class auth_recoverPassword_ extends Function_<enums.auth.Authorization> {
  static __F: (params: { code: string; new_settings?: enums.account.PasswordInputSettings }) => enums.auth.Authorization = null as unknown as (params: { code: string; new_settings?: enums.account.PasswordInputSettings }) => enums.auth.Authorization;
  /** Code received via email */
  code: string;
  /** New password */
  new_settings?: enums.account.PasswordInputSettings;

  protected get [id](): number {
    return 0x37096C70;
  }

  static get [name](): string {
    return "auth.recoverPassword"
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

/** Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see [login](https://core.telegram.org/api/auth) for more info. */
export class auth_resendCode_ extends Function_<enums.auth.SentCode> {
  static __F: (params: { phone_number: string; phone_code_hash: string }) => enums.auth.SentCode = null as unknown as (params: { phone_number: string; phone_code_hash: string }) => enums.auth.SentCode;
  /** The phone number */
  phone_number: string;
  /** The phone code hash obtained from [auth.sendCode](https://core.telegram.org/method/auth.sendCode) */
  phone_code_hash: string;

  protected get [id](): number {
    return 0x3EF1A9BF;
  }

  static get [name](): string {
    return "auth.resendCode"
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

/** Cancel the login verification code */
export class auth_cancelCode_ extends Function_<boolean> {
  static __F: (params: { phone_number: string; phone_code_hash: string }) => boolean = null as unknown as (params: { phone_number: string; phone_code_hash: string }) => boolean;
  /** Phone number */
  phone_number: string;
  /** Phone code hash from [auth.sendCode](https://core.telegram.org/method/auth.sendCode) */
  phone_code_hash: string;

  protected get [id](): number {
    return 0x1F040578;
  }

  static get [name](): string {
    return "auth.cancelCode"
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

/** Delete all temporary authorization keys **except for** the ones specified */
export class auth_dropTempAuthKeys_ extends Function_<boolean> {
  static __F: (params: { except_auth_keys: Array<bigint> }) => boolean = null as unknown as (params: { except_auth_keys: Array<bigint> }) => boolean;
  /** The auth keys that **shouldn't** be dropped. */
  except_auth_keys: Array<bigint>;

  protected get [id](): number {
    return 0x8E48A188;
  }

  static get [name](): string {
    return "auth.dropTempAuthKeys"
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

/** Generate a login token, for [login via QR code](https://core.telegram.org/api/qr-login).  
The generated login token should be encoded using base64url, then shown as a `tg://login?token=base64encodedtoken` [deep link »](https://core.telegram.org/api/links#qr-code-login-links) in the QR code. */
export class auth_exportLoginToken_ extends Function_<enums.auth.LoginToken> {
  static __F: (params: { api_id: number; api_hash: string; except_ids: Array<bigint> }) => enums.auth.LoginToken = null as unknown as (params: { api_id: number; api_hash: string; except_ids: Array<bigint> }) => enums.auth.LoginToken;
  /** Application identifier (see. [App configuration](https://core.telegram.org/myapp)) */
  api_id: number;
  /** Application identifier hash (see. [App configuration](https://core.telegram.org/myapp)) */
  api_hash: string;
  /** List of already logged-in user IDs, to prevent logging in twice with the same user */
  except_ids: Array<bigint>;

  protected get [id](): number {
    return 0xB7E085FE;
  }

  static get [name](): string {
    return "auth.exportLoginToken"
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

/** Login using a redirected login token, generated in case of DC mismatch during [QR code login](https://core.telegram.org/api/qr-login). */
export class auth_importLoginToken_ extends Function_<enums.auth.LoginToken> {
  static __F: (params: { token: Uint8Array }) => enums.auth.LoginToken = null as unknown as (params: { token: Uint8Array }) => enums.auth.LoginToken;
  /** Login token */
  token: Uint8Array;

  protected get [id](): number {
    return 0x95AC5CE4;
  }

  static get [name](): string {
    return "auth.importLoginToken"
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

/** Accept QR code login token, logging in the app that generated it. */
export class auth_acceptLoginToken_ extends Function_<enums.Authorization> {
  static __F: (params: { token: Uint8Array }) => enums.Authorization = null as unknown as (params: { token: Uint8Array }) => enums.Authorization;
  /** Login token embedded in QR code, for more info, see [login via QR code](https://core.telegram.org/api/qr-login). */
  token: Uint8Array;

  protected get [id](): number {
    return 0xE894AD4D;
  }

  static get [name](): string {
    return "auth.acceptLoginToken"
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

/** Check if the [2FA recovery code](https://core.telegram.org/api/srp) sent using [auth.requestPasswordRecovery](https://core.telegram.org/method/auth.requestPasswordRecovery) is valid, before passing it to [auth.recoverPassword](https://core.telegram.org/method/auth.recoverPassword). */
export class auth_checkRecoveryPassword_ extends Function_<boolean> {
  static __F: (params: { code: string }) => boolean = null as unknown as (params: { code: string }) => boolean;
  /** Code received via email */
  code: string;

  protected get [id](): number {
    return 0x0D36BF79;
  }

  static get [name](): string {
    return "auth.checkRecoveryPassword"
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

/** Login by importing an authorization token */
export class auth_importWebTokenAuthorization_ extends Function_<enums.auth.Authorization> {
  static __F: (params: { api_id: number; api_hash: string; web_auth_token: string }) => enums.auth.Authorization = null as unknown as (params: { api_id: number; api_hash: string; web_auth_token: string }) => enums.auth.Authorization;
  /** [API ID](https://core.telegram.org/api/obtaining_api_id) */
  api_id: number;
  /** [API hash](https://core.telegram.org/api/obtaining_api_id) */
  api_hash: string;
  /** The authorization token */
  web_auth_token: string;

  protected get [id](): number {
    return 0x2DB873A9;
  }

  static get [name](): string {
    return "auth.importWebTokenAuthorization"
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

/** Request an SMS code via Firebase. */
export class auth_requestFirebaseSms_ extends Function_<boolean> {
  static __F: (params: { phone_number: string; phone_code_hash: string; safety_net_token?: string; ios_push_secret?: string }) => boolean = null as unknown as (params: { phone_number: string; phone_code_hash: string; safety_net_token?: string; ios_push_secret?: string }) => boolean;
  /** Phone number */
  phone_number: string;
  /** Phone code hash returned by [auth.sendCode](https://core.telegram.org/method/auth.sendCode) */
  phone_code_hash: string;
  /** On Android, a JWS object obtained as described in the [auth documentation »](https://core.telegram.org/api/auth) */
  safety_net_token?: string;
  /** Secret token received via an apple push notification */
  ios_push_secret?: string;

  protected get [id](): number {
    return 0x89464B50;
  }

  static get [name](): string {
    return "auth.requestFirebaseSms"
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

/** Reset the [login email »](https://core.telegram.org/api/auth#email-verification). */
export class auth_resetLoginEmail_ extends Function_<enums.auth.SentCode> {
  static __F: (params: { phone_number: string; phone_code_hash: string }) => enums.auth.SentCode = null as unknown as (params: { phone_number: string; phone_code_hash: string }) => enums.auth.SentCode;
  /** Phone number of the account */
  phone_number: string;
  /** Phone code hash, obtained as described in the [documentation »](https://core.telegram.org/api/auth) */
  phone_code_hash: string;

  protected get [id](): number {
    return 0x7E960193;
  }

  static get [name](): string {
    return "auth.resetLoginEmail"
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

/** Register device to receive [PUSH notifications](https://core.telegram.org/api/push-updates) */
export class account_registerDevice_ extends Function_<boolean> {
  static __F: (params: { no_muted?: true; token_type: number; token: string; app_sandbox: boolean; secret: Uint8Array; other_uids: Array<bigint> }) => boolean = null as unknown as (params: { no_muted?: true; token_type: number; token: string; app_sandbox: boolean; secret: Uint8Array; other_uids: Array<bigint> }) => boolean;
  /** Avoid receiving (silent and invisible background) notifications. Useful to save battery. */
  no_muted?: true;
  /** Device token type, see [PUSH updates](https://core.telegram.org/api/push-updates#subscribing-to-notifications) for the possible values. */
  token_type: number;
  /** Device token, see [PUSH updates](https://core.telegram.org/api/push-updates#subscribing-to-notifications) for the possible values. */
  token: string;
  /** If [(boolTrue)](https://core.telegram.org/constructor/boolTrue) is transmitted, a sandbox-certificate will be used during transmission. */
  app_sandbox: boolean;
  /** For FCM and APNS VoIP, optional encryption key used to encrypt push notifications */
  secret: Uint8Array;
  /** List of user identifiers of other users currently using the client */
  other_uids: Array<bigint>;

  protected get [id](): number {
    return 0xEC86017A;
  }

  static get [name](): string {
    return "account.registerDevice"
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

/** Deletes a device by its token, stops sending PUSH-notifications to it. */
export class account_unregisterDevice_ extends Function_<boolean> {
  static __F: (params: { token_type: number; token: string; other_uids: Array<bigint> }) => boolean = null as unknown as (params: { token_type: number; token: string; other_uids: Array<bigint> }) => boolean;
  /** Device token type, see [PUSH updates](https://core.telegram.org/api/push-updates#subscribing-to-notifications) for the possible values. */
  token_type: number;
  /** Device token, see [PUSH updates](https://core.telegram.org/api/push-updates#subscribing-to-notifications) for the possible values. */
  token: string;
  /** List of user identifiers of other users currently using the client */
  other_uids: Array<bigint>;

  protected get [id](): number {
    return 0x6A0D3206;
  }

  static get [name](): string {
    return "account.unregisterDevice"
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

/** Edits notification settings from a given user/group, from all users/all groups. */
export class account_updateNotifySettings_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputNotifyPeer; settings: enums.InputPeerNotifySettings }) => boolean = null as unknown as (params: { peer: enums.InputNotifyPeer; settings: enums.InputPeerNotifySettings }) => boolean;
  /** Notification source */
  peer: enums.InputNotifyPeer;
  /** Notification settings */
  settings: enums.InputPeerNotifySettings;

  protected get [id](): number {
    return 0x84BE5B93;
  }

  static get [name](): string {
    return "account.updateNotifySettings"
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

/** Gets current notification settings for a given user/group, from all users/all groups. */
export class account_getNotifySettings_ extends Function_<enums.PeerNotifySettings> {
  static __F: (params: { peer: enums.InputNotifyPeer }) => enums.PeerNotifySettings = null as unknown as (params: { peer: enums.InputNotifyPeer }) => enums.PeerNotifySettings;
  /** Notification source */
  peer: enums.InputNotifyPeer;

  protected get [id](): number {
    return 0x12B3AD31;
  }

  static get [name](): string {
    return "account.getNotifySettings"
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

/** Resets all notification settings from users and groups. */
export class account_resetNotifySettings_ extends Function_<boolean> {
  static __F: () => boolean = null as unknown as () => boolean;
  protected get [id](): number {
    return 0xDB7E1747;
  }

  static get [name](): string {
    return "account.resetNotifySettings"
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

/** Updates user profile. */
export class account_updateProfile_ extends Function_<enums.User> {
  static __F: (params?: { first_name?: string; last_name?: string; about?: string }) => enums.User = null as unknown as (params?: { first_name?: string; last_name?: string; about?: string }) => enums.User;
  /** New user first name */
  first_name?: string;
  /** New user last name */
  last_name?: string;
  /** New bio */
  about?: string;

  protected get [id](): number {
    return 0x78515775;
  }

  static get [name](): string {
    return "account.updateProfile"
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

/** Updates online user status. */
export class account_updateStatus_ extends Function_<boolean> {
  static __F: (params: { offline: boolean }) => boolean = null as unknown as (params: { offline: boolean }) => boolean;
  /** If [(boolTrue)](https://core.telegram.org/constructor/boolTrue) is transmitted, user status will change to [(userStatusOffline)](https://core.telegram.org/constructor/userStatusOffline). */
  offline: boolean;

  protected get [id](): number {
    return 0x6628562C;
  }

  static get [name](): string {
    return "account.updateStatus"
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

/** Returns a list of available [wallpapers](https://core.telegram.org/api/wallpapers). */
export class account_getWallPapers_ extends Function_<enums.account.WallPapers> {
  static __F: (params: { hash: bigint }) => enums.account.WallPapers = null as unknown as (params: { hash: bigint }) => enums.account.WallPapers;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x07967D36;
  }

  static get [name](): string {
    return "account.getWallPapers"
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

/** Report a peer for violation of telegram's Terms of Service */
export class account_reportPeer_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; reason: enums.ReportReason; message: string }) => boolean = null as unknown as (params: { peer: enums.InputPeer; reason: enums.ReportReason; message: string }) => boolean;
  /** The peer to report */
  peer: enums.InputPeer;
  /** The reason why this peer is being reported */
  reason: enums.ReportReason;
  /** Comment for report moderation */
  message: string;

  protected get [id](): number {
    return 0xC5BA3D86;
  }

  static get [name](): string {
    return "account.reportPeer"
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

/** Validates a username and checks availability. */
export class account_checkUsername_ extends Function_<boolean> {
  static __F: (params: { username: string }) => boolean = null as unknown as (params: { username: string }) => boolean;
  /** username  
  Accepted characters: A-z (case-insensitive), 0-9 and underscores.  
  Length: 5-32 characters. */
  username: string;

  protected get [id](): number {
    return 0x2714D86C;
  }

  static get [name](): string {
    return "account.checkUsername"
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

/** Changes username for the current user. */
export class account_updateUsername_ extends Function_<enums.User> {
  static __F: (params: { username: string }) => enums.User = null as unknown as (params: { username: string }) => enums.User;
  /** username or empty string if username is to be removed  
  Accepted characters: a-z (case-insensitive), 0-9 and underscores.  
  Length: 5-32 characters. */
  username: string;

  protected get [id](): number {
    return 0x3E0BDD7C;
  }

  static get [name](): string {
    return "account.updateUsername"
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

/** Get privacy settings of current account */
export class account_getPrivacy_ extends Function_<enums.account.PrivacyRules> {
  static __F: (params: { key: enums.InputPrivacyKey }) => enums.account.PrivacyRules = null as unknown as (params: { key: enums.InputPrivacyKey }) => enums.account.PrivacyRules;
  /** Peer category whose privacy settings should be fetched */
  key: enums.InputPrivacyKey;

  protected get [id](): number {
    return 0xDADBC950;
  }

  static get [name](): string {
    return "account.getPrivacy"
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

/** Change privacy settings of current account */
export class account_setPrivacy_ extends Function_<enums.account.PrivacyRules> {
  static __F: (params: { key: enums.InputPrivacyKey; rules: Array<enums.InputPrivacyRule> }) => enums.account.PrivacyRules = null as unknown as (params: { key: enums.InputPrivacyKey; rules: Array<enums.InputPrivacyRule> }) => enums.account.PrivacyRules;
  /** New privacy rule */
  key: enums.InputPrivacyKey;
  /** Peers to which the privacy rule will apply. */
  rules: Array<enums.InputPrivacyRule>;

  protected get [id](): number {
    return 0xC9F81CE8;
  }

  static get [name](): string {
    return "account.setPrivacy"
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

/** Delete the user's account from the telegram servers. */
export class account_deleteAccount_ extends Function_<boolean> {
  static __F: (params: { reason: string; password?: enums.InputCheckPasswordSRP }) => boolean = null as unknown as (params: { reason: string; password?: enums.InputCheckPasswordSRP }) => boolean;
  /** Why is the account being deleted, can be empty */
  reason: string;
  /** [2FA password](https://core.telegram.org/api/srp): this field can be omitted even for accounts with 2FA enabled: in this case account account deletion will be delayed by 7 days [as specified in the docs »](https://core.telegram.org/api/account-deletion) */
  password?: enums.InputCheckPasswordSRP;

  protected get [id](): number {
    return 0xA2C0CF74;
  }

  static get [name](): string {
    return "account.deleteAccount"
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

/** Get days to live of account */
export class account_getAccountTTL_ extends Function_<enums.AccountDaysTTL> {
  static __F: () => enums.AccountDaysTTL = null as unknown as () => enums.AccountDaysTTL;
  protected get [id](): number {
    return 0x08FC711D;
  }

  static get [name](): string {
    return "account.getAccountTTL"
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

/** Set account self-destruction period */
export class account_setAccountTTL_ extends Function_<boolean> {
  static __F: (params: { ttl: enums.AccountDaysTTL }) => boolean = null as unknown as (params: { ttl: enums.AccountDaysTTL }) => boolean;
  /** Time to live in days */
  ttl: enums.AccountDaysTTL;

  protected get [id](): number {
    return 0x2442485E;
  }

  static get [name](): string {
    return "account.setAccountTTL"
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

/** Verify a new phone number to associate to the current account */
export class account_sendChangePhoneCode_ extends Function_<enums.auth.SentCode> {
  static __F: (params: { phone_number: string; settings: enums.CodeSettings }) => enums.auth.SentCode = null as unknown as (params: { phone_number: string; settings: enums.CodeSettings }) => enums.auth.SentCode;
  /** New phone number */
  phone_number: string;
  /** Phone code settings */
  settings: enums.CodeSettings;

  protected get [id](): number {
    return 0x82574AE5;
  }

  static get [name](): string {
    return "account.sendChangePhoneCode"
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

/** Change the phone number of the current account */
export class account_changePhone_ extends Function_<enums.User> {
  static __F: (params: { phone_number: string; phone_code_hash: string; phone_code: string }) => enums.User = null as unknown as (params: { phone_number: string; phone_code_hash: string; phone_code: string }) => enums.User;
  /** New phone number */
  phone_number: string;
  /** Phone code hash received when calling [account.sendChangePhoneCode](https://core.telegram.org/method/account.sendChangePhoneCode) */
  phone_code_hash: string;
  /** Phone code received when calling [account.sendChangePhoneCode](https://core.telegram.org/method/account.sendChangePhoneCode) */
  phone_code: string;

  protected get [id](): number {
    return 0x70C32EDB;
  }

  static get [name](): string {
    return "account.changePhone"
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

/** When client-side passcode lock feature is enabled, will not show message texts in incoming [PUSH notifications](https://core.telegram.org/api/push-updates). */
export class account_updateDeviceLocked_ extends Function_<boolean> {
  static __F: (params: { period: number }) => boolean = null as unknown as (params: { period: number }) => boolean;
  /** Inactivity period after which to start hiding message texts in [PUSH notifications](https://core.telegram.org/api/push-updates). */
  period: number;

  protected get [id](): number {
    return 0x38DF3532;
  }

  static get [name](): string {
    return "account.updateDeviceLocked"
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

/** Get logged-in sessions */
export class account_getAuthorizations_ extends Function_<enums.account.Authorizations> {
  static __F: () => enums.account.Authorizations = null as unknown as () => enums.account.Authorizations;
  protected get [id](): number {
    return 0xE320C158;
  }

  static get [name](): string {
    return "account.getAuthorizations"
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

/** Log out an active [authorized session](https://core.telegram.org/api/auth) by its hash */
export class account_resetAuthorization_ extends Function_<boolean> {
  static __F: (params: { hash: bigint }) => boolean = null as unknown as (params: { hash: bigint }) => boolean;
  /** Session hash */
  hash: bigint;

  protected get [id](): number {
    return 0xDF77F3BC;
  }

  static get [name](): string {
    return "account.resetAuthorization"
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

/** Obtain configuration for two-factor authorization with password */
export class account_getPassword_ extends Function_<enums.account.Password> {
  static __F: () => enums.account.Password = null as unknown as () => enums.account.Password;
  protected get [id](): number {
    return 0x548A30F5;
  }

  static get [name](): string {
    return "account.getPassword"
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

/** Get private info associated to the password info (recovery email, telegram [passport](https://core.telegram.org/passport) info & so on) */
export class account_getPasswordSettings_ extends Function_<enums.account.PasswordSettings> {
  static __F: (params: { password: enums.InputCheckPasswordSRP }) => enums.account.PasswordSettings = null as unknown as (params: { password: enums.InputCheckPasswordSRP }) => enums.account.PasswordSettings;
  /** The password (see [SRP](https://core.telegram.org/api/srp)) */
  password: enums.InputCheckPasswordSRP;

  protected get [id](): number {
    return 0x9CD4EAF9;
  }

  static get [name](): string {
    return "account.getPasswordSettings"
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

/** Set a new 2FA password */
export class account_updatePasswordSettings_ extends Function_<boolean> {
  static __F: (params: { password: enums.InputCheckPasswordSRP; new_settings: enums.account.PasswordInputSettings }) => boolean = null as unknown as (params: { password: enums.InputCheckPasswordSRP; new_settings: enums.account.PasswordInputSettings }) => boolean;
  /** The old password (see [SRP](https://core.telegram.org/api/srp)) */
  password: enums.InputCheckPasswordSRP;
  /** The new password (see [SRP](https://core.telegram.org/api/srp)) */
  new_settings: enums.account.PasswordInputSettings;

  protected get [id](): number {
    return 0xA59B102F;
  }

  static get [name](): string {
    return "account.updatePasswordSettings"
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

/** Send confirmation code to cancel account deletion, for more info [click here »](https://core.telegram.org/api/account-deletion) */
export class account_sendConfirmPhoneCode_ extends Function_<enums.auth.SentCode> {
  static __F: (params: { hash: string; settings: enums.CodeSettings }) => enums.auth.SentCode = null as unknown as (params: { hash: string; settings: enums.CodeSettings }) => enums.auth.SentCode;
  /** The hash from the service notification, for more info [click here »](https://core.telegram.org/api/account-deletion) */
  hash: string;
  /** Phone code settings */
  settings: enums.CodeSettings;

  protected get [id](): number {
    return 0x1B3FAA88;
  }

  static get [name](): string {
    return "account.sendConfirmPhoneCode"
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

/** Confirm a phone number to cancel account deletion, for more info [click here »](https://core.telegram.org/api/account-deletion) */
export class account_confirmPhone_ extends Function_<boolean> {
  static __F: (params: { phone_code_hash: string; phone_code: string }) => boolean = null as unknown as (params: { phone_code_hash: string; phone_code: string }) => boolean;
  /** Phone code hash, for more info [click here »](https://core.telegram.org/api/account-deletion) */
  phone_code_hash: string;
  /** SMS code, for more info [click here »](https://core.telegram.org/api/account-deletion) */
  phone_code: string;

  protected get [id](): number {
    return 0x5F2178C3;
  }

  static get [name](): string {
    return "account.confirmPhone"
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

/** Get temporary payment password */
export class account_getTmpPassword_ extends Function_<enums.account.TmpPassword> {
  static __F: (params: { password: enums.InputCheckPasswordSRP; period: number }) => enums.account.TmpPassword = null as unknown as (params: { password: enums.InputCheckPasswordSRP; period: number }) => enums.account.TmpPassword;
  /** SRP password parameters */
  password: enums.InputCheckPasswordSRP;
  /** Time during which the temporary password will be valid, in seconds; should be between 60 and 86400 */
  period: number;

  protected get [id](): number {
    return 0x449E0B51;
  }

  static get [name](): string {
    return "account.getTmpPassword"
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

/** Get web [login widget](https://core.telegram.org/widgets/login) authorizations */
export class account_getWebAuthorizations_ extends Function_<enums.account.WebAuthorizations> {
  static __F: () => enums.account.WebAuthorizations = null as unknown as () => enums.account.WebAuthorizations;
  protected get [id](): number {
    return 0x182E6D6F;
  }

  static get [name](): string {
    return "account.getWebAuthorizations"
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

/** Log out an active web [telegram login](https://core.telegram.org/widgets/login) session */
export class account_resetWebAuthorization_ extends Function_<boolean> {
  static __F: (params: { hash: bigint }) => boolean = null as unknown as (params: { hash: bigint }) => boolean;
  /** [Session](https://core.telegram.org/constructor/webAuthorization) hash */
  hash: bigint;

  protected get [id](): number {
    return 0x2D01B9EF;
  }

  static get [name](): string {
    return "account.resetWebAuthorization"
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

/** Reset all active web [telegram login](https://core.telegram.org/widgets/login) sessions */
export class account_resetWebAuthorizations_ extends Function_<boolean> {
  static __F: () => boolean = null as unknown as () => boolean;
  protected get [id](): number {
    return 0x682D2594;
  }

  static get [name](): string {
    return "account.resetWebAuthorizations"
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

/** Get all saved [Telegram Passport](https://core.telegram.org/passport) documents, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
export class account_getAllSecureValues_ extends Function_<enums.SecureValue[]> {
  static __F: () => enums.SecureValue[] = null as unknown as () => enums.SecureValue[];
  protected get [id](): number {
    return 0xB288BC7D;
  }

  static get [name](): string {
    return "account.getAllSecureValues"
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

/** Get saved [Telegram Passport](https://core.telegram.org/passport) document, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
export class account_getSecureValue_ extends Function_<enums.SecureValue[]> {
  static __F: (params: { types: Array<enums.SecureValueType> }) => enums.SecureValue[] = null as unknown as (params: { types: Array<enums.SecureValueType> }) => enums.SecureValue[];
  /** Requested value types */
  types: Array<enums.SecureValueType>;

  protected get [id](): number {
    return 0x73665BC2;
  }

  static get [name](): string {
    return "account.getSecureValue"
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

/** Securely save [Telegram Passport](https://core.telegram.org/passport) document, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
export class account_saveSecureValue_ extends Function_<enums.SecureValue> {
  static __F: (params: { value: enums.InputSecureValue; secure_secret_id: bigint }) => enums.SecureValue = null as unknown as (params: { value: enums.InputSecureValue; secure_secret_id: bigint }) => enums.SecureValue;
  /** Secure value, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
  value: enums.InputSecureValue;
  /** Passport secret hash, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
  secure_secret_id: bigint;

  protected get [id](): number {
    return 0x899FE31D;
  }

  static get [name](): string {
    return "account.saveSecureValue"
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

/** Delete stored [Telegram Passport](https://core.telegram.org/passport) documents, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
export class account_deleteSecureValue_ extends Function_<boolean> {
  static __F: (params: { types: Array<enums.SecureValueType> }) => boolean = null as unknown as (params: { types: Array<enums.SecureValueType> }) => boolean;
  /** Document types to delete */
  types: Array<enums.SecureValueType>;

  protected get [id](): number {
    return 0xB880BC4B;
  }

  static get [name](): string {
    return "account.deleteSecureValue"
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

/** Returns a Telegram Passport authorization form for sharing data with a service */
export class account_getAuthorizationForm_ extends Function_<enums.account.AuthorizationForm> {
  static __F: (params: { bot_id: bigint; scope: string; public_key: string }) => enums.account.AuthorizationForm = null as unknown as (params: { bot_id: bigint; scope: string; public_key: string }) => enums.account.AuthorizationForm;
  /** User identifier of the service's bot */
  bot_id: bigint;
  /** Telegram Passport element types requested by the service */
  scope: string;
  /** Service's public key */
  public_key: string;

  protected get [id](): number {
    return 0xA929597A;
  }

  static get [name](): string {
    return "account.getAuthorizationForm"
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

/** Sends a Telegram Passport authorization form, effectively sharing data with the service */
export class account_acceptAuthorization_ extends Function_<boolean> {
  static __F: (params: { bot_id: bigint; scope: string; public_key: string; value_hashes: Array<enums.SecureValueHash>; credentials: enums.SecureCredentialsEncrypted }) => boolean = null as unknown as (params: { bot_id: bigint; scope: string; public_key: string; value_hashes: Array<enums.SecureValueHash>; credentials: enums.SecureCredentialsEncrypted }) => boolean;
  /** Bot ID */
  bot_id: bigint;
  /** Telegram Passport element types requested by the service */
  scope: string;
  /** Service's public key */
  public_key: string;
  /** Types of values sent and their hashes */
  value_hashes: Array<enums.SecureValueHash>;
  /** Encrypted values */
  credentials: enums.SecureCredentialsEncrypted;

  protected get [id](): number {
    return 0xF3ED4C73;
  }

  static get [name](): string {
    return "account.acceptAuthorization"
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

/** Send the verification phone code for telegram [passport](https://core.telegram.org/passport). */
export class account_sendVerifyPhoneCode_ extends Function_<enums.auth.SentCode> {
  static __F: (params: { phone_number: string; settings: enums.CodeSettings }) => enums.auth.SentCode = null as unknown as (params: { phone_number: string; settings: enums.CodeSettings }) => enums.auth.SentCode;
  /** The phone number to verify */
  phone_number: string;
  /** Phone code settings */
  settings: enums.CodeSettings;

  protected get [id](): number {
    return 0xA5A356F9;
  }

  static get [name](): string {
    return "account.sendVerifyPhoneCode"
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

/** Verify a phone number for telegram [passport](https://core.telegram.org/passport). */
export class account_verifyPhone_ extends Function_<boolean> {
  static __F: (params: { phone_number: string; phone_code_hash: string; phone_code: string }) => boolean = null as unknown as (params: { phone_number: string; phone_code_hash: string; phone_code: string }) => boolean;
  /** Phone number */
  phone_number: string;
  /** Phone code hash received from the call to [account.sendVerifyPhoneCode](https://core.telegram.org/method/account.sendVerifyPhoneCode) */
  phone_code_hash: string;
  /** Code received after the call to [account.sendVerifyPhoneCode](https://core.telegram.org/method/account.sendVerifyPhoneCode) */
  phone_code: string;

  protected get [id](): number {
    return 0x4DD3A7F6;
  }

  static get [name](): string {
    return "account.verifyPhone"
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

/** Send an email verification code. */
export class account_sendVerifyEmailCode_ extends Function_<enums.account.SentEmailCode> {
  static __F: (params: { purpose: enums.EmailVerifyPurpose; email: string }) => enums.account.SentEmailCode = null as unknown as (params: { purpose: enums.EmailVerifyPurpose; email: string }) => enums.account.SentEmailCode;
  /** Verification purpose. */
  purpose: enums.EmailVerifyPurpose;
  /** The email where to send the code. */
  email: string;

  protected get [id](): number {
    return 0x98E037BB;
  }

  static get [name](): string {
    return "account.sendVerifyEmailCode"
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

/** Verify an email address. */
export class account_verifyEmail_ extends Function_<enums.account.EmailVerified> {
  static __F: (params: { purpose: enums.EmailVerifyPurpose; verification: enums.EmailVerification }) => enums.account.EmailVerified = null as unknown as (params: { purpose: enums.EmailVerifyPurpose; verification: enums.EmailVerification }) => enums.account.EmailVerified;
  /** Verification purpose */
  purpose: enums.EmailVerifyPurpose;
  /** Email verification code or token */
  verification: enums.EmailVerification;

  protected get [id](): number {
    return 0x032DA4CF;
  }

  static get [name](): string {
    return "account.verifyEmail"
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

/** Initialize a [takeout session, see here » for more info](https://core.telegram.org/api/takeout). */
export class account_initTakeoutSession_ extends Function_<enums.account.Takeout> {
  static __F: (params?: { contacts?: true; message_users?: true; message_chats?: true; message_megagroups?: true; message_channels?: true; files?: true; file_max_size?: bigint }) => enums.account.Takeout = null as unknown as (params?: { contacts?: true; message_users?: true; message_chats?: true; message_megagroups?: true; message_channels?: true; files?: true; file_max_size?: bigint }) => enums.account.Takeout;
  /** Whether to export contacts */
  contacts?: true;
  /** Whether to export messages in private chats */
  message_users?: true;
  /** Whether to export messages in [basic groups](https://core.telegram.org/api/channel#basic-groups) */
  message_chats?: true;
  /** Whether to export messages in [supergroups](https://core.telegram.org/api/channel#supergroups) */
  message_megagroups?: true;
  /** Whether to export messages in [channels](https://core.telegram.org/api/channel#channels) */
  message_channels?: true;
  /** Whether to export files */
  files?: true;
  /** Maximum size of files to export */
  file_max_size?: bigint;

  protected get [id](): number {
    return 0x8EF3EAB0;
  }

  static get [name](): string {
    return "account.initTakeoutSession"
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

/** Terminate a [takeout session, see here » for more info](https://core.telegram.org/api/takeout). */
export class account_finishTakeoutSession_ extends Function_<boolean> {
  static __F: (params?: { success?: true }) => boolean = null as unknown as (params?: { success?: true }) => boolean;
  /** Data exported successfully */
  success?: true;

  protected get [id](): number {
    return 0x1D2652EE;
  }

  static get [name](): string {
    return "account.finishTakeoutSession"
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

/** Verify an email to use as [2FA recovery method](https://core.telegram.org/api/srp). */
export class account_confirmPasswordEmail_ extends Function_<boolean> {
  static __F: (params: { code: string }) => boolean = null as unknown as (params: { code: string }) => boolean;
  /** The phone code that was received after [setting a recovery email](https://core.telegram.org/api/srp#email-verification) */
  code: string;

  protected get [id](): number {
    return 0x8FDF1920;
  }

  static get [name](): string {
    return "account.confirmPasswordEmail"
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

/** Resend the code to verify an email to use as [2FA recovery method](https://core.telegram.org/api/srp). */
export class account_resendPasswordEmail_ extends Function_<boolean> {
  static __F: () => boolean = null as unknown as () => boolean;
  protected get [id](): number {
    return 0x7A7F2A15;
  }

  static get [name](): string {
    return "account.resendPasswordEmail"
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

/** Cancel the code that was sent to verify an email to use as [2FA recovery method](https://core.telegram.org/api/srp). */
export class account_cancelPasswordEmail_ extends Function_<boolean> {
  static __F: () => boolean = null as unknown as () => boolean;
  protected get [id](): number {
    return 0xC1CBD5B6;
  }

  static get [name](): string {
    return "account.cancelPasswordEmail"
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

/** Whether the user will receive notifications when contacts sign up */
export class account_getContactSignUpNotification_ extends Function_<boolean> {
  static __F: () => boolean = null as unknown as () => boolean;
  protected get [id](): number {
    return 0x9F07C728;
  }

  static get [name](): string {
    return "account.getContactSignUpNotification"
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

/** Toggle contact sign up notifications */
export class account_setContactSignUpNotification_ extends Function_<boolean> {
  static __F: (params: { silent: boolean }) => boolean = null as unknown as (params: { silent: boolean }) => boolean;
  /** Whether to disable contact sign up notifications */
  silent: boolean;

  protected get [id](): number {
    return 0xCFF43F61;
  }

  static get [name](): string {
    return "account.setContactSignUpNotification"
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

/** Returns list of chats with non-default notification settings */
export class account_getNotifyExceptions_ extends Function_<enums.Updates> {
  static __F: (params?: { compare_sound?: true; compare_stories?: true; peer?: enums.InputNotifyPeer }) => enums.Updates = null as unknown as (params?: { compare_sound?: true; compare_stories?: true; peer?: enums.InputNotifyPeer }) => enums.Updates;
  /** If set, chats with non-default sound will be returned */
  compare_sound?: true;
  /** If set, chats with non-default notification settings for stories will be returned */
  compare_stories?: true;
  /** If specified, only chats of the specified category will be returned */
  peer?: enums.InputNotifyPeer;

  protected get [id](): number {
    return 0x53577479;
  }

  static get [name](): string {
    return "account.getNotifyExceptions"
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

/** Get info about a certain [wallpaper](https://core.telegram.org/api/wallpapers) */
export class account_getWallPaper_ extends Function_<enums.WallPaper> {
  static __F: (params: { wallpaper: enums.InputWallPaper }) => enums.WallPaper = null as unknown as (params: { wallpaper: enums.InputWallPaper }) => enums.WallPaper;
  /** The [wallpaper](https://core.telegram.org/api/wallpapers) to get info about */
  wallpaper: enums.InputWallPaper;

  protected get [id](): number {
    return 0xFC8DDBEA;
  }

  static get [name](): string {
    return "account.getWallPaper"
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

/** Create and upload a new [wallpaper](https://core.telegram.org/api/wallpapers) */
export class account_uploadWallPaper_ extends Function_<enums.WallPaper> {
  static __F: (params: { for_chat?: true; file: enums.InputFile; mime_type: string; settings: enums.WallPaperSettings }) => enums.WallPaper = null as unknown as (params: { for_chat?: true; file: enums.InputFile; mime_type: string; settings: enums.WallPaperSettings }) => enums.WallPaper;
  /** Set this flag when uploading wallpapers to be passed to [messages.setChatWallPaper](https://core.telegram.org/method/messages.setChatWallPaper). */
  for_chat?: true;
  /** The JPG/PNG wallpaper */
  file: enums.InputFile;
  /** MIME type of uploaded wallpaper */
  mime_type: string;
  /** Wallpaper settings */
  settings: enums.WallPaperSettings;

  protected get [id](): number {
    return 0xE39A8F03;
  }

  static get [name](): string {
    return "account.uploadWallPaper"
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

/** Install/uninstall [wallpaper](https://core.telegram.org/api/wallpapers) */
export class account_saveWallPaper_ extends Function_<boolean> {
  static __F: (params: { wallpaper: enums.InputWallPaper; unsave: boolean; settings: enums.WallPaperSettings }) => boolean = null as unknown as (params: { wallpaper: enums.InputWallPaper; unsave: boolean; settings: enums.WallPaperSettings }) => boolean;
  /** [Wallpaper](https://core.telegram.org/api/wallpapers) to install or uninstall */
  wallpaper: enums.InputWallPaper;
  /** Uninstall wallpaper? */
  unsave: boolean;
  /** Wallpaper settings */
  settings: enums.WallPaperSettings;

  protected get [id](): number {
    return 0x6C5A5B37;
  }

  static get [name](): string {
    return "account.saveWallPaper"
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

/** Install [wallpaper](https://core.telegram.org/api/wallpapers) */
export class account_installWallPaper_ extends Function_<boolean> {
  static __F: (params: { wallpaper: enums.InputWallPaper; settings: enums.WallPaperSettings }) => boolean = null as unknown as (params: { wallpaper: enums.InputWallPaper; settings: enums.WallPaperSettings }) => boolean;
  /** [Wallpaper](https://core.telegram.org/api/wallpapers) to install */
  wallpaper: enums.InputWallPaper;
  /** [Wallpaper](https://core.telegram.org/api/wallpapers) settings */
  settings: enums.WallPaperSettings;

  protected get [id](): number {
    return 0xFEED5769;
  }

  static get [name](): string {
    return "account.installWallPaper"
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

/** Delete all installed [wallpapers](https://core.telegram.org/api/wallpapers), reverting to the default wallpaper set. */
export class account_resetWallPapers_ extends Function_<boolean> {
  static __F: () => boolean = null as unknown as () => boolean;
  protected get [id](): number {
    return 0xBB3B9804;
  }

  static get [name](): string {
    return "account.resetWallPapers"
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

/** Get media autodownload settings */
export class account_getAutoDownloadSettings_ extends Function_<enums.account.AutoDownloadSettings> {
  static __F: () => enums.account.AutoDownloadSettings = null as unknown as () => enums.account.AutoDownloadSettings;
  protected get [id](): number {
    return 0x56DA0B3F;
  }

  static get [name](): string {
    return "account.getAutoDownloadSettings"
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

/** Change media autodownload settings */
export class account_saveAutoDownloadSettings_ extends Function_<boolean> {
  static __F: (params: { low?: true; high?: true; settings: enums.AutoDownloadSettings }) => boolean = null as unknown as (params: { low?: true; high?: true; settings: enums.AutoDownloadSettings }) => boolean;
  /** Whether to save media in the low data usage preset */
  low?: true;
  /** Whether to save media in the high data usage preset */
  high?: true;
  /** Media autodownload settings */
  settings: enums.AutoDownloadSettings;

  protected get [id](): number {
    return 0x76F36233;
  }

  static get [name](): string {
    return "account.saveAutoDownloadSettings"
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

/** Upload theme */
export class account_uploadTheme_ extends Function_<enums.Document> {
  static __F: (params: { file: enums.InputFile; thumb?: enums.InputFile; file_name: string; mime_type: string }) => enums.Document = null as unknown as (params: { file: enums.InputFile; thumb?: enums.InputFile; file_name: string; mime_type: string }) => enums.Document;
  /** [Previously uploaded](https://core.telegram.org/api/themes#uploading-theme-files) theme file with platform-specific colors for UI components, can be left unset when creating themes that only modify the wallpaper or accent colors. */
  file: enums.InputFile;
  /** Thumbnail */
  thumb?: enums.InputFile;
  /** File name */
  file_name: string;
  /** MIME type, must be `application/x-tgtheme-{format}`, where `format` depends on the client */
  mime_type: string;

  protected get [id](): number {
    return 0x1C3DB333;
  }

  static get [name](): string {
    return "account.uploadTheme"
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

/** Create a theme */
export class account_createTheme_ extends Function_<enums.Theme> {
  static __F: (params: { slug: string; title: string; document?: enums.InputDocument; settings?: Array<enums.InputThemeSettings> }) => enums.Theme = null as unknown as (params: { slug: string; title: string; document?: enums.InputDocument; settings?: Array<enums.InputThemeSettings> }) => enums.Theme;
  /** Unique theme ID used to generate [theme deep links](https://core.telegram.org/api/links#theme-links), can be empty to autogenerate a random ID. */
  slug: string;
  /** Theme name */
  title: string;
  /** Theme file */
  document?: enums.InputDocument;
  /** Theme settings, multiple values can be provided for the different base themes (day/night mode, etc). */
  settings?: Array<enums.InputThemeSettings>;

  protected get [id](): number {
    return 0x652E4400;
  }

  static get [name](): string {
    return "account.createTheme"
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

/** Update theme */
export class account_updateTheme_ extends Function_<enums.Theme> {
  static __F: (params: { format: string; theme: enums.InputTheme; slug?: string; title?: string; document?: enums.InputDocument; settings?: Array<enums.InputThemeSettings> }) => enums.Theme = null as unknown as (params: { format: string; theme: enums.InputTheme; slug?: string; title?: string; document?: enums.InputDocument; settings?: Array<enums.InputThemeSettings> }) => enums.Theme;
  /** Theme format, a string that identifies the theming engines supported by the client */
  format: string;
  /** Theme to update */
  theme: enums.InputTheme;
  /** Unique theme ID */
  slug?: string;
  /** Theme name */
  title?: string;
  /** Theme file */
  document?: enums.InputDocument;
  /** Theme settings */
  settings?: Array<enums.InputThemeSettings>;

  protected get [id](): number {
    return 0x2BF40CCC;
  }

  static get [name](): string {
    return "account.updateTheme"
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

/** Save a theme */
export class account_saveTheme_ extends Function_<boolean> {
  static __F: (params: { theme: enums.InputTheme; unsave: boolean }) => boolean = null as unknown as (params: { theme: enums.InputTheme; unsave: boolean }) => boolean;
  /** Theme to save */
  theme: enums.InputTheme;
  /** Unsave */
  unsave: boolean;

  protected get [id](): number {
    return 0xF257106C;
  }

  static get [name](): string {
    return "account.saveTheme"
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

/** Install a theme */
export class account_installTheme_ extends Function_<boolean> {
  static __F: (params?: { dark?: true; theme?: enums.InputTheme; format?: string; base_theme?: enums.BaseTheme }) => boolean = null as unknown as (params?: { dark?: true; theme?: enums.InputTheme; format?: string; base_theme?: enums.BaseTheme }) => boolean;
  /** Whether to install the dark version */
  dark?: true;
  /** Theme to install */
  theme?: enums.InputTheme;
  /** Theme format, a string that identifies the theming engines supported by the client */
  format?: string;
  /** Indicates a basic theme provided by all clients */
  base_theme?: enums.BaseTheme;

  protected get [id](): number {
    return 0xC727BB3B;
  }

  static get [name](): string {
    return "account.installTheme"
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

/** Get theme information */
export class account_getTheme_ extends Function_<enums.Theme> {
  static __F: (params: { format: string; theme: enums.InputTheme }) => enums.Theme = null as unknown as (params: { format: string; theme: enums.InputTheme }) => enums.Theme;
  /** Theme format, a string that identifies the theming engines supported by the client */
  format: string;
  /** Theme */
  theme: enums.InputTheme;

  protected get [id](): number {
    return 0x3A5869EC;
  }

  static get [name](): string {
    return "account.getTheme"
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

/** Get installed themes */
export class account_getThemes_ extends Function_<enums.account.Themes> {
  static __F: (params: { format: string; hash: bigint }) => enums.account.Themes = null as unknown as (params: { format: string; hash: bigint }) => enums.account.Themes;
  /** Theme format, a string that identifies the theming engines supported by the client */
  format: string;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x7206E458;
  }

  static get [name](): string {
    return "account.getThemes"
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

/** Set sensitive content settings (for viewing or hiding NSFW content) */
export class account_setContentSettings_ extends Function_<boolean> {
  static __F: (params?: { sensitive_enabled?: true }) => boolean = null as unknown as (params?: { sensitive_enabled?: true }) => boolean;
  /** Enable NSFW content */
  sensitive_enabled?: true;

  protected get [id](): number {
    return 0xB574B16B;
  }

  static get [name](): string {
    return "account.setContentSettings"
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

/** Get sensitive content settings */
export class account_getContentSettings_ extends Function_<enums.account.ContentSettings> {
  static __F: () => enums.account.ContentSettings = null as unknown as () => enums.account.ContentSettings;
  protected get [id](): number {
    return 0x8B9B4DAE;
  }

  static get [name](): string {
    return "account.getContentSettings"
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

/** Get info about multiple [wallpapers](https://core.telegram.org/api/wallpapers) */
export class account_getMultiWallPapers_ extends Function_<enums.WallPaper[]> {
  static __F: (params: { wallpapers: Array<enums.InputWallPaper> }) => enums.WallPaper[] = null as unknown as (params: { wallpapers: Array<enums.InputWallPaper> }) => enums.WallPaper[];
  /** [Wallpapers](https://core.telegram.org/api/wallpapers) to fetch info about */
  wallpapers: Array<enums.InputWallPaper>;

  protected get [id](): number {
    return 0x65AD71DC;
  }

  static get [name](): string {
    return "account.getMultiWallPapers"
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

/** Get global privacy settings */
export class account_getGlobalPrivacySettings_ extends Function_<enums.GlobalPrivacySettings> {
  static __F: () => enums.GlobalPrivacySettings = null as unknown as () => enums.GlobalPrivacySettings;
  protected get [id](): number {
    return 0xEB2B4CF6;
  }

  static get [name](): string {
    return "account.getGlobalPrivacySettings"
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

/** Set global privacy settings */
export class account_setGlobalPrivacySettings_ extends Function_<enums.GlobalPrivacySettings> {
  static __F: (params: { settings: enums.GlobalPrivacySettings }) => enums.GlobalPrivacySettings = null as unknown as (params: { settings: enums.GlobalPrivacySettings }) => enums.GlobalPrivacySettings;
  /** Global privacy settings */
  settings: enums.GlobalPrivacySettings;

  protected get [id](): number {
    return 0x1EDAAAC2;
  }

  static get [name](): string {
    return "account.setGlobalPrivacySettings"
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

/** Report a profile photo of a dialog */
export class account_reportProfilePhoto_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; photo_id: enums.InputPhoto; reason: enums.ReportReason; message: string }) => boolean = null as unknown as (params: { peer: enums.InputPeer; photo_id: enums.InputPhoto; reason: enums.ReportReason; message: string }) => boolean;
  /** The dialog */
  peer: enums.InputPeer;
  /** Dialog photo ID */
  photo_id: enums.InputPhoto;
  /** Report reason */
  reason: enums.ReportReason;
  /** Comment for report moderation */
  message: string;

  protected get [id](): number {
    return 0xFA8CC6F5;
  }

  static get [name](): string {
    return "account.reportProfilePhoto"
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

/** Initiate a 2FA password reset: can only be used if the user is already logged-in, [see here for more info »](https://core.telegram.org/api/srp#password-reset) */
export class account_resetPassword_ extends Function_<enums.account.ResetPasswordResult> {
  static __F: () => enums.account.ResetPasswordResult = null as unknown as () => enums.account.ResetPasswordResult;
  protected get [id](): number {
    return 0x9308CE1B;
  }

  static get [name](): string {
    return "account.resetPassword"
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

/** Abort a pending 2FA password reset, [see here for more info »](https://core.telegram.org/api/srp#password-reset) */
export class account_declinePasswordReset_ extends Function_<boolean> {
  static __F: () => boolean = null as unknown as () => boolean;
  protected get [id](): number {
    return 0x4C9409F6;
  }

  static get [name](): string {
    return "account.declinePasswordReset"
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

/** Get all available chat [themes »](https://core.telegram.org/api/themes). */
export class account_getChatThemes_ extends Function_<enums.account.Themes> {
  static __F: (params: { hash: bigint }) => enums.account.Themes = null as unknown as (params: { hash: bigint }) => enums.account.Themes;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0xD638DE89;
  }

  static get [name](): string {
    return "account.getChatThemes"
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

/** Set time-to-live of current session */
export class account_setAuthorizationTTL_ extends Function_<boolean> {
  static __F: (params: { authorization_ttl_days: number }) => boolean = null as unknown as (params: { authorization_ttl_days: number }) => boolean;
  /** Time-to-live of current session in days */
  authorization_ttl_days: number;

  protected get [id](): number {
    return 0xBF899AA0;
  }

  static get [name](): string {
    return "account.setAuthorizationTTL"
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

/** Change settings related to a session. */
export class account_changeAuthorizationSettings_ extends Function_<boolean> {
  static __F: (params: { confirmed?: true; hash: bigint; encrypted_requests_disabled?: boolean; call_requests_disabled?: boolean }) => boolean = null as unknown as (params: { confirmed?: true; hash: bigint; encrypted_requests_disabled?: boolean; call_requests_disabled?: boolean }) => boolean;
  /** If set, [confirms a newly logged in session »](https://core.telegram.org/api/auth#confirming-login). */
  confirmed?: true;
  /** Session ID from the [authorization](https://core.telegram.org/constructor/authorization) constructor, fetchable using [account.getAuthorizations](https://core.telegram.org/method/account.getAuthorizations) */
  hash: bigint;
  /** Whether to enable or disable receiving encrypted chats: if the flag is not set, the previous setting is not changed */
  encrypted_requests_disabled?: boolean;
  /** Whether to enable or disable receiving calls: if the flag is not set, the previous setting is not changed */
  call_requests_disabled?: boolean;

  protected get [id](): number {
    return 0x40F48462;
  }

  static get [name](): string {
    return "account.changeAuthorizationSettings"
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

/** Fetch saved notification sounds */
export class account_getSavedRingtones_ extends Function_<enums.account.SavedRingtones> {
  static __F: (params: { hash: bigint }) => enums.account.SavedRingtones = null as unknown as (params: { hash: bigint }) => enums.account.SavedRingtones;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0xE1902288;
  }

  static get [name](): string {
    return "account.getSavedRingtones"
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

/** Save or remove saved notification sound. */
export class account_saveRingtone_ extends Function_<enums.account.SavedRingtone> {
  static __F: (params: { id: enums.InputDocument; unsave: boolean }) => enums.account.SavedRingtone = null as unknown as (params: { id: enums.InputDocument; unsave: boolean }) => enums.account.SavedRingtone;
  /** Notification sound uploaded using [account.uploadRingtone](https://core.telegram.org/method/account.uploadRingtone) */
  id: enums.InputDocument;
  /** Whether to add or delete the notification sound */
  unsave: boolean;

  protected get [id](): number {
    return 0x3DEA5B03;
  }

  static get [name](): string {
    return "account.saveRingtone"
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

/** Upload notification sound, use [account.saveRingtone](https://core.telegram.org/method/account.saveRingtone) to convert it and add it to the list of saved notification sounds. */
export class account_uploadRingtone_ extends Function_<enums.Document> {
  static __F: (params: { file: enums.InputFile; file_name: string; mime_type: string }) => enums.Document = null as unknown as (params: { file: enums.InputFile; file_name: string; mime_type: string }) => enums.Document;
  /** Notification sound */
  file: enums.InputFile;
  /** File name */
  file_name: string;
  /** MIME type of file */
  mime_type: string;

  protected get [id](): number {
    return 0x831A83A2;
  }

  static get [name](): string {
    return "account.uploadRingtone"
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

/** Set an [emoji status](https://core.telegram.org/api/emoji-status) */
export class account_updateEmojiStatus_ extends Function_<boolean> {
  static __F: (params: { emoji_status: enums.EmojiStatus }) => boolean = null as unknown as (params: { emoji_status: enums.EmojiStatus }) => boolean;
  /** [Emoji status](https://core.telegram.org/api/emoji-status) to set */
  emoji_status: enums.EmojiStatus;

  protected get [id](): number {
    return 0xFBD3DE6B;
  }

  static get [name](): string {
    return "account.updateEmojiStatus"
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

/** Get a list of default suggested [emoji statuses](https://core.telegram.org/api/emoji-status) */
export class account_getDefaultEmojiStatuses_ extends Function_<enums.account.EmojiStatuses> {
  static __F: (params: { hash: bigint }) => enums.account.EmojiStatuses = null as unknown as (params: { hash: bigint }) => enums.account.EmojiStatuses;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0xD6753386;
  }

  static get [name](): string {
    return "account.getDefaultEmojiStatuses"
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

/** Get recently used [emoji statuses](https://core.telegram.org/api/emoji-status) */
export class account_getRecentEmojiStatuses_ extends Function_<enums.account.EmojiStatuses> {
  static __F: (params: { hash: bigint }) => enums.account.EmojiStatuses = null as unknown as (params: { hash: bigint }) => enums.account.EmojiStatuses;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x0F578105;
  }

  static get [name](): string {
    return "account.getRecentEmojiStatuses"
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

/** Clears list of recently used [emoji statuses](https://core.telegram.org/api/emoji-status) */
export class account_clearRecentEmojiStatuses_ extends Function_<boolean> {
  static __F: () => boolean = null as unknown as () => boolean;
  protected get [id](): number {
    return 0x18201AAE;
  }

  static get [name](): string {
    return "account.clearRecentEmojiStatuses"
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

/** Reorder usernames associated with the currently logged-in user. */
export class account_reorderUsernames_ extends Function_<boolean> {
  static __F: (params: { order: Array<string> }) => boolean = null as unknown as (params: { order: Array<string> }) => boolean;
  /** The new order for active usernames. All active usernames must be specified. */
  order: Array<string>;

  protected get [id](): number {
    return 0xEF500EAB;
  }

  static get [name](): string {
    return "account.reorderUsernames"
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

/** Activate or deactivate a purchased [fragment.com](https://fragment.com) username associated to the currently logged-in user. */
export class account_toggleUsername_ extends Function_<boolean> {
  static __F: (params: { username: string; active: boolean }) => boolean = null as unknown as (params: { username: string; active: boolean }) => boolean;
  /** Username */
  username: string;
  /** Whether to activate or deactivate it */
  active: boolean;

  protected get [id](): number {
    return 0x58D6B376;
  }

  static get [name](): string {
    return "account.toggleUsername"
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

/** Get a set of suggested [custom emoji stickers](https://core.telegram.org/api/custom-emoji) that can be [used as profile picture](https://core.telegram.org/api/files#sticker-profile-pictures) */
export class account_getDefaultProfilePhotoEmojis_ extends Function_<enums.EmojiList> {
  static __F: (params: { hash: bigint }) => enums.EmojiList = null as unknown as (params: { hash: bigint }) => enums.EmojiList;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0xE2750328;
  }

  static get [name](): string {
    return "account.getDefaultProfilePhotoEmojis"
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

/** Get a set of suggested [custom emoji stickers](https://core.telegram.org/api/custom-emoji) that can be [used as group picture](https://core.telegram.org/api/files#sticker-profile-pictures) */
export class account_getDefaultGroupPhotoEmojis_ extends Function_<enums.EmojiList> {
  static __F: (params: { hash: bigint }) => enums.EmojiList = null as unknown as (params: { hash: bigint }) => enums.EmojiList;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x915860AE;
  }

  static get [name](): string {
    return "account.getDefaultGroupPhotoEmojis"
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

/** Get autosave settings */
export class account_getAutoSaveSettings_ extends Function_<enums.account.AutoSaveSettings> {
  static __F: () => enums.account.AutoSaveSettings = null as unknown as () => enums.account.AutoSaveSettings;
  protected get [id](): number {
    return 0xADCBBCDA;
  }

  static get [name](): string {
    return "account.getAutoSaveSettings"
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

/** Modify autosave settings */
export class account_saveAutoSaveSettings_ extends Function_<boolean> {
  static __F: (params: { users?: true; chats?: true; broadcasts?: true; peer?: enums.InputPeer; settings: enums.AutoSaveSettings }) => boolean = null as unknown as (params: { users?: true; chats?: true; broadcasts?: true; peer?: enums.InputPeer; settings: enums.AutoSaveSettings }) => boolean;
  /** Whether the new settings should affect all private chats */
  users?: true;
  /** Whether the new settings should affect all groups */
  chats?: true;
  /** Whether the new settings should affect all [channels](https://core.telegram.org/api/channel) */
  broadcasts?: true;
  /** Whether the new settings should affect a specific peer */
  peer?: enums.InputPeer;
  /** The new autosave settings */
  settings: enums.AutoSaveSettings;

  protected get [id](): number {
    return 0xD69B8361;
  }

  static get [name](): string {
    return "account.saveAutoSaveSettings"
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

/** Clear all peer-specific autosave settings. */
export class account_deleteAutoSaveExceptions_ extends Function_<boolean> {
  static __F: () => boolean = null as unknown as () => boolean;
  protected get [id](): number {
    return 0x53BC0020;
  }

  static get [name](): string {
    return "account.deleteAutoSaveExceptions"
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

/** Invalidate the specified login codes, see [here »](https://core.telegram.org/api/auth#invalidating-login-codes) for more info. */
export class account_invalidateSignInCodes_ extends Function_<boolean> {
  static __F: (params: { codes: Array<string> }) => boolean = null as unknown as (params: { codes: Array<string> }) => boolean;
  /** The login codes to invalidate. */
  codes: Array<string>;

  protected get [id](): number {
    return 0xCA8AE8BA;
  }

  static get [name](): string {
    return "account.invalidateSignInCodes"
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

/** Update the [accent color and background custom emoji »](https://core.telegram.org/api/colors) of the current account. */
export class account_updateColor_ extends Function_<boolean> {
  static __F: (params?: { for_profile?: true; color?: number; background_emoji_id?: bigint }) => boolean = null as unknown as (params?: { for_profile?: true; color?: number; background_emoji_id?: bigint }) => boolean;
  /** Whether to change the accent color emoji pattern of the profile page; otherwise, the accent color and emoji pattern of messages will be changed. */
  for_profile?: true;
  /** [ID of the accent color palette »](https://core.telegram.org/api/colors) to use (not RGB24, see [here »](https://core.telegram.org/api/colors) for more info). */
  color?: number;
  /** Custom emoji ID used in the accent color pattern. */
  background_emoji_id?: bigint;

  protected get [id](): number {
    return 0x7CEFA15D;
  }

  static get [name](): string {
    return "account.updateColor"
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

/** Get a set of suggested [custom emoji stickers](https://core.telegram.org/api/custom-emoji) that can be used in an [accent color pattern](https://core.telegram.org/api/colors). */
export class account_getDefaultBackgroundEmojis_ extends Function_<enums.EmojiList> {
  static __F: (params: { hash: bigint }) => enums.EmojiList = null as unknown as (params: { hash: bigint }) => enums.EmojiList;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0xA60AB9CE;
  }

  static get [name](): string {
    return "account.getDefaultBackgroundEmojis"
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

/** Get a list of default suggested [channel emoji statuses](https://core.telegram.org/api/emoji-status). */
export class account_getChannelDefaultEmojiStatuses_ extends Function_<enums.account.EmojiStatuses> {
  static __F: (params: { hash: bigint }) => enums.account.EmojiStatuses = null as unknown as (params: { hash: bigint }) => enums.account.EmojiStatuses;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x7727A7D5;
  }

  static get [name](): string {
    return "account.getChannelDefaultEmojiStatuses"
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

/** Returns fetch the full list of [custom emoji IDs »](https://core.telegram.org/api/custom-emoji) that cannot be used in [channel emoji statuses »](https://core.telegram.org/api/emoji-status). */
export class account_getChannelRestrictedStatusEmojis_ extends Function_<enums.EmojiList> {
  static __F: (params: { hash: bigint }) => enums.EmojiList = null as unknown as (params: { hash: bigint }) => enums.EmojiList;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x35A9E0D5;
  }

  static get [name](): string {
    return "account.getChannelRestrictedStatusEmojis"
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

/** Returns basic user info according to their identifiers. */
export class users_getUsers_ extends Function_<enums.User[]> {
  static __F: (params: { id: Array<enums.InputUser> }) => enums.User[] = null as unknown as (params: { id: Array<enums.InputUser> }) => enums.User[];
  /** List of user identifiers */
  id: Array<enums.InputUser>;

  protected get [id](): number {
    return 0x0D91A548;
  }

  static get [name](): string {
    return "users.getUsers"
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

/** Returns extended user info by ID. */
export class users_getFullUser_ extends Function_<enums.users.UserFull> {
  static __F: (params: { id: enums.InputUser }) => enums.users.UserFull = null as unknown as (params: { id: enums.InputUser }) => enums.users.UserFull;
  /** User ID */
  id: enums.InputUser;

  protected get [id](): number {
    return 0xB60F5918;
  }

  static get [name](): string {
    return "users.getFullUser"
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

/** Notify the user that the sent [passport](https://core.telegram.org/passport) data contains some errors The user will not be able to re-submit their Passport data to you until the errors are fixed (the contents of the field for which you returned the error must change). */
export class users_setSecureValueErrors_ extends Function_<boolean> {
  static __F: (params: { id: enums.InputUser; errors: Array<enums.SecureValueError> }) => boolean = null as unknown as (params: { id: enums.InputUser; errors: Array<enums.SecureValueError> }) => boolean;
  /** The user */
  id: enums.InputUser;
  /** Errors */
  errors: Array<enums.SecureValueError>;

  protected get [id](): number {
    return 0x90C894B5;
  }

  static get [name](): string {
    return "users.setSecureValueErrors"
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

export class users_getIsPremiumRequiredToContact_ extends Function_<boolean[]> {
  static __F: (params: { id: Array<enums.InputUser> }) => boolean[] = null as unknown as (params: { id: Array<enums.InputUser> }) => boolean[];
  id: Array<enums.InputUser>;

  protected get [id](): number {
    return 0xA622AA10;
  }

  static get [name](): string {
    return "users.getIsPremiumRequiredToContact"
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

/** Get the telegram IDs of all contacts.  
Returns an array of Telegram user IDs for all contacts (0 if a contact does not have an associated Telegram account or have hidden their account using privacy settings). */
export class contacts_getContactIDs_ extends Function_<number[]> {
  static __F: (params: { hash: bigint }) => number[] = null as unknown as (params: { hash: bigint }) => number[];
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x7ADC669D;
  }

  static get [name](): string {
    return "contacts.getContactIDs"
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

/** Use this method to obtain the online statuses of all contacts with an accessible Telegram account. */
export class contacts_getStatuses_ extends Function_<enums.ContactStatus[]> {
  static __F: () => enums.ContactStatus[] = null as unknown as () => enums.ContactStatus[];
  protected get [id](): number {
    return 0xC4A353EE;
  }

  static get [name](): string {
    return "contacts.getStatuses"
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

/** Returns the current user's contact list. */
export class contacts_getContacts_ extends Function_<enums.contacts.Contacts> {
  static __F: (params: { hash: bigint }) => enums.contacts.Contacts = null as unknown as (params: { hash: bigint }) => enums.contacts.Contacts;
  /** If there already is a full contact list on the client, a [hash](https://core.telegram.org/api/offsets#hash-generation) of a the list of contact IDs in ascending order may be passed in this parameter. If the contact set was not changed, [(contacts.contactsNotModified)](https://core.telegram.org/constructor/contacts.contactsNotModified) will be returned. */
  hash: bigint;

  protected get [id](): number {
    return 0x5DD69E12;
  }

  static get [name](): string {
    return "contacts.getContacts"
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

/** Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info. */
export class contacts_importContacts_ extends Function_<enums.contacts.ImportedContacts> {
  static __F: (params: { contacts: Array<enums.InputContact> }) => enums.contacts.ImportedContacts = null as unknown as (params: { contacts: Array<enums.InputContact> }) => enums.contacts.ImportedContacts;
  /** List of contacts to import */
  contacts: Array<enums.InputContact>;

  protected get [id](): number {
    return 0x2C800BE5;
  }

  static get [name](): string {
    return "contacts.importContacts"
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

/** Deletes several contacts from the list. */
export class contacts_deleteContacts_ extends Function_<enums.Updates> {
  static __F: (params: { id: Array<enums.InputUser> }) => enums.Updates = null as unknown as (params: { id: Array<enums.InputUser> }) => enums.Updates;
  /** User ID list */
  id: Array<enums.InputUser>;

  protected get [id](): number {
    return 0x096A0E00;
  }

  static get [name](): string {
    return "contacts.deleteContacts"
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

/** Delete contacts by phone number */
export class contacts_deleteByPhones_ extends Function_<boolean> {
  static __F: (params: { phones: Array<string> }) => boolean = null as unknown as (params: { phones: Array<string> }) => boolean;
  /** Phone numbers */
  phones: Array<string>;

  protected get [id](): number {
    return 0x1013FD9E;
  }

  static get [name](): string {
    return "contacts.deleteByPhones"
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

/** Adds a peer to a blocklist, see [here »](https://core.telegram.org/api/block) for more info. */
export class contacts_block_ extends Function_<boolean> {
  static __F: (params: { my_stories_from?: true; id: enums.InputPeer }) => boolean = null as unknown as (params: { my_stories_from?: true; id: enums.InputPeer }) => boolean;
  /** Whether the peer should be added to the story blocklist; if not set, the peer will be added to the main blocklist, see [here »](https://core.telegram.org/api/block) for more info. */
  my_stories_from?: true;
  /** Peer */
  id: enums.InputPeer;

  protected get [id](): number {
    return 0x2E2E8734;
  }

  static get [name](): string {
    return "contacts.block"
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

/** Deletes a peer from a blocklist, see [here »](https://core.telegram.org/api/block) for more info. */
export class contacts_unblock_ extends Function_<boolean> {
  static __F: (params: { my_stories_from?: true; id: enums.InputPeer }) => boolean = null as unknown as (params: { my_stories_from?: true; id: enums.InputPeer }) => boolean;
  /** Whether the peer should be removed from the story blocklist; if not set, the peer will be removed from the main blocklist, see [here »](https://core.telegram.org/api/block) for more info. */
  my_stories_from?: true;
  /** Peer */
  id: enums.InputPeer;

  protected get [id](): number {
    return 0xB550D328;
  }

  static get [name](): string {
    return "contacts.unblock"
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

/** Returns the list of blocked users. */
export class contacts_getBlocked_ extends Function_<enums.contacts.Blocked> {
  static __F: (params: { my_stories_from?: true; offset: number; limit: number }) => enums.contacts.Blocked = null as unknown as (params: { my_stories_from?: true; offset: number; limit: number }) => enums.contacts.Blocked;
  /** Whether to fetch the story blocklist; if not set, will fetch the main blocklist. See [here »](https://core.telegram.org/api/block) for differences between the two. */
  my_stories_from?: true;
  /** The number of list elements to be skipped */
  offset: number;
  /** The number of list elements to be returned */
  limit: number;

  protected get [id](): number {
    return 0x9A868F80;
  }

  static get [name](): string {
    return "contacts.getBlocked"
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

/** Returns users found by username substring. */
export class contacts_search_ extends Function_<enums.contacts.Found> {
  static __F: (params: { q: string; limit: number }) => enums.contacts.Found = null as unknown as (params: { q: string; limit: number }) => enums.contacts.Found;
  /** Target substring */
  q: string;
  /** Maximum number of users to be returned */
  limit: number;

  protected get [id](): number {
    return 0x11F812D8;
  }

  static get [name](): string {
    return "contacts.search"
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

/** Resolve a @username to get peer info */
export class contacts_resolveUsername_ extends Function_<enums.contacts.ResolvedPeer> {
  static __F: (params: { username: string }) => enums.contacts.ResolvedPeer = null as unknown as (params: { username: string }) => enums.contacts.ResolvedPeer;
  /** @username to resolve */
  username: string;

  protected get [id](): number {
    return 0xF93CCBA3;
  }

  static get [name](): string {
    return "contacts.resolveUsername"
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

/** Get most used peers */
export class contacts_getTopPeers_ extends Function_<enums.contacts.TopPeers> {
  static __F: (params: { correspondents?: true; bots_pm?: true; bots_inline?: true; phone_calls?: true; forward_users?: true; forward_chats?: true; groups?: true; channels?: true; offset: number; limit: number; hash: bigint }) => enums.contacts.TopPeers = null as unknown as (params: { correspondents?: true; bots_pm?: true; bots_inline?: true; phone_calls?: true; forward_users?: true; forward_chats?: true; groups?: true; channels?: true; offset: number; limit: number; hash: bigint }) => enums.contacts.TopPeers;
  /** Users we've chatted most frequently with */
  correspondents?: true;
  /** Most used bots */
  bots_pm?: true;
  /** Most used inline bots */
  bots_inline?: true;
  /** Most frequently called users */
  phone_calls?: true;
  /** Users to which the users often forwards messages to */
  forward_users?: true;
  /** Chats to which the users often forwards messages to */
  forward_chats?: true;
  /** Often-opened groups and supergroups */
  groups?: true;
  /** Most frequently visited channels */
  channels?: true;
  /** Offset for [pagination](https://core.telegram.org/api/offsets) */
  offset: number;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x973478B6;
  }

  static get [name](): string {
    return "contacts.getTopPeers"
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

/** Reset [rating](https://core.telegram.org/api/top-rating) of top peer */
export class contacts_resetTopPeerRating_ extends Function_<boolean> {
  static __F: (params: { category: enums.TopPeerCategory; peer: enums.InputPeer }) => boolean = null as unknown as (params: { category: enums.TopPeerCategory; peer: enums.InputPeer }) => boolean;
  /** Top peer category */
  category: enums.TopPeerCategory;
  /** Peer whose rating should be reset */
  peer: enums.InputPeer;

  protected get [id](): number {
    return 0x1AE373AC;
  }

  static get [name](): string {
    return "contacts.resetTopPeerRating"
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

/** Removes all contacts without an associated Telegram account. */
export class contacts_resetSaved_ extends Function_<boolean> {
  static __F: () => boolean = null as unknown as () => boolean;
  protected get [id](): number {
    return 0x879537F1;
  }

  static get [name](): string {
    return "contacts.resetSaved"
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

/** Get all contacts, requires a [takeout session, see here » for more info](https://core.telegram.org/api/takeout). */
export class contacts_getSaved_ extends Function_<enums.SavedContact[]> {
  static __F: () => enums.SavedContact[] = null as unknown as () => enums.SavedContact[];
  protected get [id](): number {
    return 0x82F1E39F;
  }

  static get [name](): string {
    return "contacts.getSaved"
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

/** Enable/disable [top peers](https://core.telegram.org/api/top-rating) */
export class contacts_toggleTopPeers_ extends Function_<boolean> {
  static __F: (params: { enabled: boolean }) => boolean = null as unknown as (params: { enabled: boolean }) => boolean;
  /** Enable/disable */
  enabled: boolean;

  protected get [id](): number {
    return 0x8514BDDA;
  }

  static get [name](): string {
    return "contacts.toggleTopPeers"
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

/** Add an existing telegram user as contact. */
export class contacts_addContact_ extends Function_<enums.Updates> {
  static __F: (params: { add_phone_privacy_exception?: true; id: enums.InputUser; first_name: string; last_name: string; phone: string }) => enums.Updates = null as unknown as (params: { add_phone_privacy_exception?: true; id: enums.InputUser; first_name: string; last_name: string; phone: string }) => enums.Updates;
  /** Allow the other user to see our phone number? */
  add_phone_privacy_exception?: true;
  /** Telegram ID of the other user */
  id: enums.InputUser;
  /** First name */
  first_name: string;
  /** Last name */
  last_name: string;
  /** User's phone number, may be omitted to simply add the user to the contact list, without a phone number. */
  phone: string;

  protected get [id](): number {
    return 0xE8F463D0;
  }

  static get [name](): string {
    return "contacts.addContact"
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

/** If the [add contact action bar is active](https://core.telegram.org/api/action-bar#add-contact), add that user as contact */
export class contacts_acceptContact_ extends Function_<enums.Updates> {
  static __F: (params: { id: enums.InputUser }) => enums.Updates = null as unknown as (params: { id: enums.InputUser }) => enums.Updates;
  /** The user to add as contact */
  id: enums.InputUser;

  protected get [id](): number {
    return 0xF831A20F;
  }

  static get [name](): string {
    return "contacts.acceptContact"
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

/** Get users and geochats near you, see [here »](https://core.telegram.org/api/nearby) for more info. */
export class contacts_getLocated_ extends Function_<enums.Updates> {
  static __F: (params: { background?: true; geo_point: enums.InputGeoPoint; self_expires?: number }) => enums.Updates = null as unknown as (params: { background?: true; geo_point: enums.InputGeoPoint; self_expires?: number }) => enums.Updates;
  /** While the geolocation of the current user is public, clients should update it in the background every half-an-hour or so, while setting this flag.  
  Do this only if the new location is more than 1 KM away from the previous one, or if the previous location is unknown. */
  background?: true;
  /** Geolocation */
  geo_point: enums.InputGeoPoint;
  /** If set, the geolocation of the current user will be public for the specified number of seconds; pass 0x7fffffff to disable expiry, 0 to make the current geolocation private; if the flag isn't set, no changes will be applied. */
  self_expires?: number;

  protected get [id](): number {
    return 0xD348BC44;
  }

  static get [name](): string {
    return "contacts.getLocated"
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

/** Stop getting notifications about [discussion replies](https://core.telegram.org/api/discussion) of a certain user in `@replies` */
export class contacts_blockFromReplies_ extends Function_<enums.Updates> {
  static __F: (params: { delete_message?: true; delete_history?: true; report_spam?: true; msg_id: number }) => enums.Updates = null as unknown as (params: { delete_message?: true; delete_history?: true; report_spam?: true; msg_id: number }) => enums.Updates;
  /** Whether to delete the specified message as well */
  delete_message?: true;
  /** Whether to delete all `@replies` messages from this user as well */
  delete_history?: true;
  /** Whether to also report this user for spam */
  report_spam?: true;
  /** ID of the message in the [@replies](https://core.telegram.org/api/discussion#replies) chat */
  msg_id: number;

  protected get [id](): number {
    return 0x29A8962C;
  }

  static get [name](): string {
    return "contacts.blockFromReplies"
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

/** Resolve a phone number to get user info, if their privacy settings allow it. */
export class contacts_resolvePhone_ extends Function_<enums.contacts.ResolvedPeer> {
  static __F: (params: { phone: string }) => enums.contacts.ResolvedPeer = null as unknown as (params: { phone: string }) => enums.contacts.ResolvedPeer;
  /** Phone number in international format, possibly obtained from a [phone number deep link](https://core.telegram.org/api/links#phone-number-links). */
  phone: string;

  protected get [id](): number {
    return 0x8AF94344;
  }

  static get [name](): string {
    return "contacts.resolvePhone"
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

/** Generates a [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links) for the currently logged-in user. */
export class contacts_exportContactToken_ extends Function_<enums.ExportedContactToken> {
  static __F: () => enums.ExportedContactToken = null as unknown as () => enums.ExportedContactToken;
  protected get [id](): number {
    return 0xF8654027;
  }

  static get [name](): string {
    return "contacts.exportContactToken"
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

/** Obtain user info from a [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links). */
export class contacts_importContactToken_ extends Function_<enums.User> {
  static __F: (params: { token: string }) => enums.User = null as unknown as (params: { token: string }) => enums.User;
  /** The token extracted from the [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links). */
  token: string;

  protected get [id](): number {
    return 0x13005788;
  }

  static get [name](): string {
    return "contacts.importContactToken"
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

/** Edit the [close friends list, see here »](https://core.telegram.org/api/privacy) for more info. */
export class contacts_editCloseFriends_ extends Function_<boolean> {
  static __F: (params: { id: Array<bigint> }) => boolean = null as unknown as (params: { id: Array<bigint> }) => boolean;
  /** Full list of user IDs of close friends, see [here](https://core.telegram.org/api/privacy) for more info. */
  id: Array<bigint>;

  protected get [id](): number {
    return 0xBA6705F0;
  }

  static get [name](): string {
    return "contacts.editCloseFriends"
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

/** Replace the contents of an entire [blocklist, see here for more info »](https://core.telegram.org/api/block). */
export class contacts_setBlocked_ extends Function_<boolean> {
  static __F: (params: { my_stories_from?: true; id: Array<enums.InputPeer>; limit: number }) => boolean = null as unknown as (params: { my_stories_from?: true; id: Array<enums.InputPeer>; limit: number }) => boolean;
  /** Whether to edit the story blocklist; if not set, will edit the main blocklist. See [here »](https://core.telegram.org/api/block) for differences between the two. */
  my_stories_from?: true;
  /** Full content of the blocklist. */
  id: Array<enums.InputPeer>;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0x94C65C76;
  }

  static get [name](): string {
    return "contacts.setBlocked"
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

/** Returns the list of messages by their IDs. */
export class messages_getMessages_ extends Function_<enums.messages.Messages> {
  static __F: (params: { id: Array<enums.InputMessage> }) => enums.messages.Messages = null as unknown as (params: { id: Array<enums.InputMessage> }) => enums.messages.Messages;
  /** Message ID list */
  id: Array<enums.InputMessage>;

  protected get [id](): number {
    return 0x63C66506;
  }

  static get [name](): string {
    return "messages.getMessages"
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

/** Returns the current user dialog list. */
export class messages_getDialogs_ extends Function_<enums.messages.Dialogs> {
  static __F: (params: { exclude_pinned?: true; folder_id?: number; offset_date: number; offset_id: number; offset_peer: enums.InputPeer; limit: number; hash: bigint }) => enums.messages.Dialogs = null as unknown as (params: { exclude_pinned?: true; folder_id?: number; offset_date: number; offset_id: number; offset_peer: enums.InputPeer; limit: number; hash: bigint }) => enums.messages.Dialogs;
  /** Exclude pinned dialogs */
  exclude_pinned?: true;
  /** [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) */
  folder_id?: number;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_date: number;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) (`top_message` ID used for pagination) */
  offset_id: number;
  /** [Offset peer for pagination](https://core.telegram.org/api/offsets) */
  offset_peer: enums.InputPeer;
  /** Number of list elements to be returned */
  limit: number;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0xA0F4CB4F;
  }

  static get [name](): string {
    return "messages.getDialogs"
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

/** Returns the conversation history with one interlocutor / within a chat */
export class messages_getHistory_ extends Function_<enums.messages.Messages> {
  static __F: (params: { peer: enums.InputPeer; offset_id: number; offset_date: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) => enums.messages.Messages = null as unknown as (params: { peer: enums.InputPeer; offset_id: number; offset_date: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) => enums.messages.Messages;
  /** Target peer */
  peer: enums.InputPeer;
  /** Only return messages starting from the specified message ID */
  offset_id: number;
  /** Only return messages sent before the specified date */
  offset_date: number;
  /** Number of list elements to be skipped, negative values are also accepted. */
  add_offset: number;
  /** Number of results to return */
  limit: number;
  /** If a positive value was transferred, the method will return only messages with IDs less than **max\_id** */
  max_id: number;
  /** If a positive value was transferred, the method will return only messages with IDs more than **min\_id** */
  min_id: number;
  /** [Result hash](https://core.telegram.org/api/offsets) */
  hash: bigint;

  protected get [id](): number {
    return 0x4423E6C5;
  }

  static get [name](): string {
    return "messages.getHistory"
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

/** Search for messages. */
export class messages_search_ extends Function_<enums.messages.Messages> {
  static __F: (params: { peer: enums.InputPeer; q: string; from_id?: enums.InputPeer; saved_peer_id?: enums.InputPeer; saved_reaction?: Array<enums.Reaction>; top_msg_id?: number; filter: enums.MessagesFilter; min_date: number; max_date: number; offset_id: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) => enums.messages.Messages = null as unknown as (params: { peer: enums.InputPeer; q: string; from_id?: enums.InputPeer; saved_peer_id?: enums.InputPeer; saved_reaction?: Array<enums.Reaction>; top_msg_id?: number; filter: enums.MessagesFilter; min_date: number; max_date: number; offset_id: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) => enums.messages.Messages;
  /** User or chat, histories with which are searched, or [(inputPeerEmpty)](https://core.telegram.org/constructor/inputPeerEmpty) constructor to search in all private chats and [normal groups (not channels) »](https://core.telegram.org/api/channel). Use [messages.searchGlobal](https://core.telegram.org/method/messages.searchGlobal) to search globally in all chats, groups, supergroups and channels. */
  peer: enums.InputPeer;
  /** Text search request */
  q: string;
  /** Only return messages sent by the specified user ID */
  from_id?: enums.InputPeer;
  /** Search within the [saved message dialog »](https://core.telegram.org/api/saved-messages) with this ID. */
  saved_peer_id?: enums.InputPeer;
  saved_reaction?: Array<enums.Reaction>;
  /** [Thread ID](https://core.telegram.org/api/threads) */
  top_msg_id?: number;
  /** Filter to return only specified message types */
  filter: enums.MessagesFilter;
  /** If a positive value was transferred, only messages with a sending date bigger than the transferred one will be returned */
  min_date: number;
  /** If a positive value was transferred, only messages with a sending date smaller than the transferred one will be returned */
  max_date: number;
  /** Only return messages starting from the specified message ID */
  offset_id: number;
  /** [Additional offset](https://core.telegram.org/api/offsets) */
  add_offset: number;
  /** [Number of results to return](https://core.telegram.org/api/offsets) */
  limit: number;
  /** [Maximum message ID to return](https://core.telegram.org/api/offsets) */
  max_id: number;
  /** [Minimum message ID to return](https://core.telegram.org/api/offsets) */
  min_id: number;
  /** [Hash](https://core.telegram.org/api/offsets) */
  hash: bigint;

  protected get [id](): number {
    return 0x29EE847A;
  }

  static get [name](): string {
    return "messages.search"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "InputPeer"],
      ["q", "string", "string"],
      ["from_id", types._InputPeer, "flags.0?InputPeer"],
      ["saved_peer_id", types._InputPeer, "flags.2?InputPeer"],
      ["saved_reaction", [types._Reaction], "flags.3?Vector<Reaction>"],
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
      [this.saved_peer_id ?? null, types._InputPeer, "flags.2?InputPeer"],
      [this.saved_reaction ?? null, [types._Reaction], "flags.3?Vector<Reaction>"],
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

  constructor(params: { peer: enums.InputPeer; q: string; from_id?: enums.InputPeer; saved_peer_id?: enums.InputPeer; saved_reaction?: Array<enums.Reaction>; top_msg_id?: number; filter: enums.MessagesFilter; min_date: number; max_date: number; offset_id: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) {
    super();
    this.peer = params.peer;
    this.q = params.q;
    this.from_id = params.from_id;
    this.saved_peer_id = params.saved_peer_id;
    this.saved_reaction = params.saved_reaction;
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

/** Marks message history as read. */
export class messages_readHistory_ extends Function_<enums.messages.AffectedMessages> {
  static __F: (params: { peer: enums.InputPeer; max_id: number }) => enums.messages.AffectedMessages = null as unknown as (params: { peer: enums.InputPeer; max_id: number }) => enums.messages.AffectedMessages;
  /** Target user or group */
  peer: enums.InputPeer;
  /** If a positive value is passed, only messages with identifiers less or equal than the given one will be read */
  max_id: number;

  protected get [id](): number {
    return 0x0E306D3A;
  }

  static get [name](): string {
    return "messages.readHistory"
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

/** Deletes communication history. */
export class messages_deleteHistory_ extends Function_<enums.messages.AffectedHistory> {
  static __F: (params: { just_clear?: true; revoke?: true; peer: enums.InputPeer; max_id: number; min_date?: number; max_date?: number }) => enums.messages.AffectedHistory = null as unknown as (params: { just_clear?: true; revoke?: true; peer: enums.InputPeer; max_id: number; min_date?: number; max_date?: number }) => enums.messages.AffectedHistory;
  /** Just clear history for the current user, without actually removing messages for every chat user */
  just_clear?: true;
  /** Whether to delete the message history for all chat participants */
  revoke?: true;
  /** User or chat, communication history of which will be deleted */
  peer: enums.InputPeer;
  /** Maximum ID of message to delete */
  max_id: number;
  /** Delete all messages newer than this UNIX timestamp */
  min_date?: number;
  /** Delete all messages older than this UNIX timestamp */
  max_date?: number;

  protected get [id](): number {
    return 0xB08F922A;
  }

  static get [name](): string {
    return "messages.deleteHistory"
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

/** Deletes messages by their identifiers. */
export class messages_deleteMessages_ extends Function_<enums.messages.AffectedMessages> {
  static __F: (params: { revoke?: true; id: Array<number> }) => enums.messages.AffectedMessages = null as unknown as (params: { revoke?: true; id: Array<number> }) => enums.messages.AffectedMessages;
  /** Whether to delete messages for all participants of the chat */
  revoke?: true;
  /** Message ID list */
  id: Array<number>;

  protected get [id](): number {
    return 0xE58E95D2;
  }

  static get [name](): string {
    return "messages.deleteMessages"
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

/** Confirms receipt of messages by a client, cancels PUSH-notification sending. */
export class messages_receivedMessages_ extends Function_<enums.ReceivedNotifyMessage[]> {
  static __F: (params: { max_id: number }) => enums.ReceivedNotifyMessage[] = null as unknown as (params: { max_id: number }) => enums.ReceivedNotifyMessage[];
  /** Maximum message ID available in a client. */
  max_id: number;

  protected get [id](): number {
    return 0x05A954C0;
  }

  static get [name](): string {
    return "messages.receivedMessages"
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

/** Sends a current user typing event (see [SendMessageAction](https://core.telegram.org/type/SendMessageAction) for all event types) to a conversation partner or group. */
export class messages_setTyping_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; top_msg_id?: number; action: enums.SendMessageAction }) => boolean = null as unknown as (params: { peer: enums.InputPeer; top_msg_id?: number; action: enums.SendMessageAction }) => boolean;
  /** Target user or group */
  peer: enums.InputPeer;
  /** [Topic ID](https://core.telegram.org/api/threads) */
  top_msg_id?: number;
  /** Type of action */
  action: enums.SendMessageAction;

  protected get [id](): number {
    return 0x58943EE2;
  }

  static get [name](): string {
    return "messages.setTyping"
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

/** Sends a message to a chat */
export class messages_sendMessage_ extends Function_<enums.Updates> {
  static __F: (params: { no_webpage?: true; silent?: true; background?: true; clear_draft?: true; noforwards?: true; update_stickersets_order?: true; invert_media?: true; peer: enums.InputPeer; reply_to?: enums.InputReplyTo; message: string; random_id: bigint; reply_markup?: enums.ReplyMarkup; entities?: Array<enums.MessageEntity>; schedule_date?: number; send_as?: enums.InputPeer }) => enums.Updates = null as unknown as (params: { no_webpage?: true; silent?: true; background?: true; clear_draft?: true; noforwards?: true; update_stickersets_order?: true; invert_media?: true; peer: enums.InputPeer; reply_to?: enums.InputReplyTo; message: string; random_id: bigint; reply_markup?: enums.ReplyMarkup; entities?: Array<enums.MessageEntity>; schedule_date?: number; send_as?: enums.InputPeer }) => enums.Updates;
  /** Set this flag to disable generation of the webpage preview */
  no_webpage?: true;
  /** Send this message silently (no notifications for the receivers) */
  silent?: true;
  /** Send this message as background message */
  background?: true;
  /** Clear the draft field */
  clear_draft?: true;
  /** Only for bots, disallows forwarding and saving of the messages, even if the destination chat doesn't have [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) enabled */
  noforwards?: true;
  /** Whether to move used stickersets to top, [see here for more info on this flag »](https://core.telegram.org/api/stickers#recent-stickersets) */
  update_stickersets_order?: true;
  /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
  invert_media?: true;
  /** The destination where the message will be sent */
  peer: enums.InputPeer;
  /** If set, indicates that the message should be sent in reply to the specified message or story. */
  reply_to?: enums.InputReplyTo;
  /** The message */
  message: string;
  /** Unique client message ID required to prevent message resending */
  random_id: bigint;
  /** Reply markup for sending bot buttons */
  reply_markup?: enums.ReplyMarkup;
  /** Message [entities](https://core.telegram.org/api/entities) for sending styled text */
  entities?: Array<enums.MessageEntity>;
  /** Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages) */
  schedule_date?: number;
  /** Send this message as the specified peer */
  send_as?: enums.InputPeer;

  protected get [id](): number {
    return 0x280D096F;
  }

  static get [name](): string {
    return "messages.sendMessage"
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

/** Send a media */
export class messages_sendMedia_ extends Function_<enums.Updates> {
  static __F: (params: { silent?: true; background?: true; clear_draft?: true; noforwards?: true; update_stickersets_order?: true; invert_media?: true; peer: enums.InputPeer; reply_to?: enums.InputReplyTo; media: enums.InputMedia; message: string; random_id: bigint; reply_markup?: enums.ReplyMarkup; entities?: Array<enums.MessageEntity>; schedule_date?: number; send_as?: enums.InputPeer }) => enums.Updates = null as unknown as (params: { silent?: true; background?: true; clear_draft?: true; noforwards?: true; update_stickersets_order?: true; invert_media?: true; peer: enums.InputPeer; reply_to?: enums.InputReplyTo; media: enums.InputMedia; message: string; random_id: bigint; reply_markup?: enums.ReplyMarkup; entities?: Array<enums.MessageEntity>; schedule_date?: number; send_as?: enums.InputPeer }) => enums.Updates;
  /** Send message silently (no notification should be triggered) */
  silent?: true;
  /** Send message in background */
  background?: true;
  /** Clear the draft */
  clear_draft?: true;
  /** Only for bots, disallows forwarding and saving of the messages, even if the destination chat doesn't have [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) enabled */
  noforwards?: true;
  /** Whether to move used stickersets to top, [see here for more info on this flag »](https://core.telegram.org/api/stickers#recent-stickersets) */
  update_stickersets_order?: true;
  /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
  invert_media?: true;
  /** Destination */
  peer: enums.InputPeer;
  /** If set, indicates that the message should be sent in reply to the specified message or story. */
  reply_to?: enums.InputReplyTo;
  /** Attached media */
  media: enums.InputMedia;
  /** Caption */
  message: string;
  /** Random ID to avoid resending the same message */
  random_id: bigint;
  /** Reply markup for bot keyboards */
  reply_markup?: enums.ReplyMarkup;
  /** Message [entities](https://core.telegram.org/api/entities) for styled text */
  entities?: Array<enums.MessageEntity>;
  /** Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages) */
  schedule_date?: number;
  /** Send this message as the specified peer */
  send_as?: enums.InputPeer;

  protected get [id](): number {
    return 0x72CCC23D;
  }

  static get [name](): string {
    return "messages.sendMedia"
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

/** Forwards messages by their IDs. */
export class messages_forwardMessages_ extends Function_<enums.Updates> {
  static __F: (params: { silent?: true; background?: true; with_my_score?: true; drop_author?: true; drop_media_captions?: true; noforwards?: true; from_peer: enums.InputPeer; id: Array<number>; random_id: Array<bigint>; to_peer: enums.InputPeer; top_msg_id?: number; schedule_date?: number; send_as?: enums.InputPeer }) => enums.Updates = null as unknown as (params: { silent?: true; background?: true; with_my_score?: true; drop_author?: true; drop_media_captions?: true; noforwards?: true; from_peer: enums.InputPeer; id: Array<number>; random_id: Array<bigint>; to_peer: enums.InputPeer; top_msg_id?: number; schedule_date?: number; send_as?: enums.InputPeer }) => enums.Updates;
  /** Whether to send messages silently (no notification will be triggered on the destination clients) */
  silent?: true;
  /** Whether to send the message in background */
  background?: true;
  /** When forwarding games, whether to include your score in the game */
  with_my_score?: true;
  /** Whether to forward messages without quoting the original author */
  drop_author?: true;
  /** Whether to strip captions from media */
  drop_media_captions?: true;
  /** Only for bots, disallows further re-forwarding and saving of the messages, even if the destination chat doesn't have [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) enabled */
  noforwards?: true;
  /** Source of messages */
  from_peer: enums.InputPeer;
  /** IDs of messages */
  id: Array<number>;
  /** Random ID to prevent resending of messages */
  random_id: Array<bigint>;
  /** Destination peer */
  to_peer: enums.InputPeer;
  /** Destination [forum topic](https://core.telegram.org/api/forum#forum-topics) */
  top_msg_id?: number;
  /** Scheduled message date for scheduled messages */
  schedule_date?: number;
  /** Forward the messages as the specified peer */
  send_as?: enums.InputPeer;

  protected get [id](): number {
    return 0xC661BBC4;
  }

  static get [name](): string {
    return "messages.forwardMessages"
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

/** Report a new incoming chat for spam, if the [peer settings](https://core.telegram.org/constructor/peerSettings) of the chat allow us to do that */
export class messages_reportSpam_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer }) => boolean = null as unknown as (params: { peer: enums.InputPeer }) => boolean;
  /** Peer to report */
  peer: enums.InputPeer;

  protected get [id](): number {
    return 0xCF1592DB;
  }

  static get [name](): string {
    return "messages.reportSpam"
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

/** Get peer settings */
export class messages_getPeerSettings_ extends Function_<enums.messages.PeerSettings> {
  static __F: (params: { peer: enums.InputPeer }) => enums.messages.PeerSettings = null as unknown as (params: { peer: enums.InputPeer }) => enums.messages.PeerSettings;
  /** The peer */
  peer: enums.InputPeer;

  protected get [id](): number {
    return 0xEFD9A6A2;
  }

  static get [name](): string {
    return "messages.getPeerSettings"
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

/** Report a message in a chat for violation of telegram's Terms of Service */
export class messages_report_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; id: Array<number>; reason: enums.ReportReason; message: string }) => boolean = null as unknown as (params: { peer: enums.InputPeer; id: Array<number>; reason: enums.ReportReason; message: string }) => boolean;
  /** Peer */
  peer: enums.InputPeer;
  /** IDs of messages to report */
  id: Array<number>;
  /** Why are these messages being reported */
  reason: enums.ReportReason;
  /** Comment for report moderation */
  message: string;

  protected get [id](): number {
    return 0x8953AB4E;
  }

  static get [name](): string {
    return "messages.report"
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

/** Returns chat basic info on their IDs. */
export class messages_getChats_ extends Function_<enums.messages.Chats> {
  static __F: (params: { id: Array<bigint> }) => enums.messages.Chats = null as unknown as (params: { id: Array<bigint> }) => enums.messages.Chats;
  /** List of chat IDs */
  id: Array<bigint>;

  protected get [id](): number {
    return 0x49E9528F;
  }

  static get [name](): string {
    return "messages.getChats"
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

/** Get full info about a [basic group](https://core.telegram.org/api/channel#basic-groups). */
export class messages_getFullChat_ extends Function_<enums.messages.ChatFull> {
  static __F: (params: { chat_id: bigint }) => enums.messages.ChatFull = null as unknown as (params: { chat_id: bigint }) => enums.messages.ChatFull;
  /** [Basic group](https://core.telegram.org/api/channel#basic-groups) ID. */
  chat_id: bigint;

  protected get [id](): number {
    return 0xAEB00B34;
  }

  static get [name](): string {
    return "messages.getFullChat"
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

/** Changes chat name and sends a service message on it. */
export class messages_editChatTitle_ extends Function_<enums.Updates> {
  static __F: (params: { chat_id: bigint; title: string }) => enums.Updates = null as unknown as (params: { chat_id: bigint; title: string }) => enums.Updates;
  /** Chat ID */
  chat_id: bigint;
  /** New chat name, different from the old one */
  title: string;

  protected get [id](): number {
    return 0x73783FFD;
  }

  static get [name](): string {
    return "messages.editChatTitle"
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

/** Changes chat photo and sends a service message on it */
export class messages_editChatPhoto_ extends Function_<enums.Updates> {
  static __F: (params: { chat_id: bigint; photo: enums.InputChatPhoto }) => enums.Updates = null as unknown as (params: { chat_id: bigint; photo: enums.InputChatPhoto }) => enums.Updates;
  /** Chat ID */
  chat_id: bigint;
  /** Photo to be set */
  photo: enums.InputChatPhoto;

  protected get [id](): number {
    return 0x35DDD674;
  }

  static get [name](): string {
    return "messages.editChatPhoto"
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

/** Adds a user to a chat and sends a service message on it. */
export class messages_addChatUser_ extends Function_<enums.Updates> {
  static __F: (params: { chat_id: bigint; user_id: enums.InputUser; fwd_limit: number }) => enums.Updates = null as unknown as (params: { chat_id: bigint; user_id: enums.InputUser; fwd_limit: number }) => enums.Updates;
  /** Chat ID */
  chat_id: bigint;
  /** User ID to be added */
  user_id: enums.InputUser;
  /** Number of last messages to be forwarded */
  fwd_limit: number;

  protected get [id](): number {
    return 0xF24753E3;
  }

  static get [name](): string {
    return "messages.addChatUser"
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

/** Deletes a user from a chat and sends a service message on it. */
export class messages_deleteChatUser_ extends Function_<enums.Updates> {
  static __F: (params: { revoke_history?: true; chat_id: bigint; user_id: enums.InputUser }) => enums.Updates = null as unknown as (params: { revoke_history?: true; chat_id: bigint; user_id: enums.InputUser }) => enums.Updates;
  /** Remove the entire chat history of the specified user in this chat. */
  revoke_history?: true;
  /** Chat ID */
  chat_id: bigint;
  /** User ID to be deleted */
  user_id: enums.InputUser;

  protected get [id](): number {
    return 0xA2185CAB;
  }

  static get [name](): string {
    return "messages.deleteChatUser"
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

/** Creates a new chat. */
export class messages_createChat_ extends Function_<enums.Updates> {
  static __F: (params: { users: Array<enums.InputUser>; title: string; ttl_period?: number }) => enums.Updates = null as unknown as (params: { users: Array<enums.InputUser>; title: string; ttl_period?: number }) => enums.Updates;
  /** List of user IDs to be invited */
  users: Array<enums.InputUser>;
  /** Chat name */
  title: string;
  /** Time-to-live of all messages that will be sent in the chat: once message.date+message.ttl\_period === time(), the message will be deleted on the server, and must be deleted locally as well. You can use [messages.setDefaultHistoryTTL](https://core.telegram.org/method/messages.setDefaultHistoryTTL) to edit this value later. */
  ttl_period?: number;

  protected get [id](): number {
    return 0x0034A818;
  }

  static get [name](): string {
    return "messages.createChat"
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

/** Returns configuration parameters for Diffie-Hellman key generation. Can also return a random sequence of bytes of required length. */
export class messages_getDhConfig_ extends Function_<enums.messages.DhConfig> {
  static __F: (params: { version: number; random_length: number }) => enums.messages.DhConfig = null as unknown as (params: { version: number; random_length: number }) => enums.messages.DhConfig;
  /** Value of the **version** parameter from [messages.dhConfig](https://core.telegram.org/constructor/messages.dhConfig), available at the client */
  version: number;
  /** Length of the required random sequence */
  random_length: number;

  protected get [id](): number {
    return 0x26CF8950;
  }

  static get [name](): string {
    return "messages.getDhConfig"
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

/** Sends a request to start a secret chat to the user. */
export class messages_requestEncryption_ extends Function_<enums.EncryptedChat> {
  static __F: (params: { user_id: enums.InputUser; random_id: number; g_a: Uint8Array }) => enums.EncryptedChat = null as unknown as (params: { user_id: enums.InputUser; random_id: number; g_a: Uint8Array }) => enums.EncryptedChat;
  /** User ID */
  user_id: enums.InputUser;
  /** Unique client request ID required to prevent resending. This also doubles as the chat ID. */
  random_id: number;
  /** `A = g ^ a mod p`, see [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) */
  g_a: Uint8Array;

  protected get [id](): number {
    return 0xF64DAF43;
  }

  static get [name](): string {
    return "messages.requestEncryption"
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

/** Confirms creation of a secret chat */
export class messages_acceptEncryption_ extends Function_<enums.EncryptedChat> {
  static __F: (params: { peer: enums.InputEncryptedChat; g_b: Uint8Array; key_fingerprint: bigint }) => enums.EncryptedChat = null as unknown as (params: { peer: enums.InputEncryptedChat; g_b: Uint8Array; key_fingerprint: bigint }) => enums.EncryptedChat;
  /** Secret chat ID */
  peer: enums.InputEncryptedChat;
  /** `B = g ^ b mod p`, see [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) */
  g_b: Uint8Array;
  /** 64-bit fingerprint of the received key */
  key_fingerprint: bigint;

  protected get [id](): number {
    return 0x3DBC0415;
  }

  static get [name](): string {
    return "messages.acceptEncryption"
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

/** Cancels a request for creation and/or delete info on secret chat. */
export class messages_discardEncryption_ extends Function_<boolean> {
  static __F: (params: { delete_history?: true; chat_id: number }) => boolean = null as unknown as (params: { delete_history?: true; chat_id: number }) => boolean;
  /** Whether to delete the entire chat history for the other user as well */
  delete_history?: true;
  /** Secret chat ID */
  chat_id: number;

  protected get [id](): number {
    return 0xF393AEA0;
  }

  static get [name](): string {
    return "messages.discardEncryption"
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

/** Send typing event by the current user to a secret chat. */
export class messages_setEncryptedTyping_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputEncryptedChat; typing: boolean }) => boolean = null as unknown as (params: { peer: enums.InputEncryptedChat; typing: boolean }) => boolean;
  /** Secret chat ID */
  peer: enums.InputEncryptedChat;
  /** Typing.  
  **Possible values**:  
  [(boolTrue)](https://core.telegram.org/constructor/boolTrue), if the user started typing and more than **5 seconds** have passed since the last request  
  [(boolFalse)](https://core.telegram.org/constructor/boolFalse), if the user stopped typing */
  typing: boolean;

  protected get [id](): number {
    return 0x791451ED;
  }

  static get [name](): string {
    return "messages.setEncryptedTyping"
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

/** Marks message history within a secret chat as read. */
export class messages_readEncryptedHistory_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputEncryptedChat; max_date: number }) => boolean = null as unknown as (params: { peer: enums.InputEncryptedChat; max_date: number }) => boolean;
  /** Secret chat ID */
  peer: enums.InputEncryptedChat;
  /** Maximum date value for received messages in history */
  max_date: number;

  protected get [id](): number {
    return 0x7F4B690A;
  }

  static get [name](): string {
    return "messages.readEncryptedHistory"
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

/** Sends a text message to a secret chat. */
export class messages_sendEncrypted_ extends Function_<enums.messages.SentEncryptedMessage> {
  static __F: (params: { silent?: true; peer: enums.InputEncryptedChat; random_id: bigint; data: Uint8Array }) => enums.messages.SentEncryptedMessage = null as unknown as (params: { silent?: true; peer: enums.InputEncryptedChat; random_id: bigint; data: Uint8Array }) => enums.messages.SentEncryptedMessage;
  /** Send encrypted message without a notification */
  silent?: true;
  /** Secret chat ID */
  peer: enums.InputEncryptedChat;
  /** Unique client message ID, necessary to avoid message resending */
  random_id: bigint;
  /** TL-serialization of [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage) type, encrypted with a key that was created during chat initialization */
  data: Uint8Array;

  protected get [id](): number {
    return 0x44FA7A15;
  }

  static get [name](): string {
    return "messages.sendEncrypted"
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

/** Sends a message with a file attachment to a secret chat */
export class messages_sendEncryptedFile_ extends Function_<enums.messages.SentEncryptedMessage> {
  static __F: (params: { silent?: true; peer: enums.InputEncryptedChat; random_id: bigint; data: Uint8Array; file: enums.InputEncryptedFile }) => enums.messages.SentEncryptedMessage = null as unknown as (params: { silent?: true; peer: enums.InputEncryptedChat; random_id: bigint; data: Uint8Array; file: enums.InputEncryptedFile }) => enums.messages.SentEncryptedMessage;
  /** Whether to send the file without triggering a notification */
  silent?: true;
  /** Secret chat ID */
  peer: enums.InputEncryptedChat;
  /** Unique client message ID necessary to prevent message resending */
  random_id: bigint;
  /** TL-serialization of [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage) type, encrypted with a key generated during chat initialization */
  data: Uint8Array;
  /** File attachment for the secret chat */
  file: enums.InputEncryptedFile;

  protected get [id](): number {
    return 0x5559481D;
  }

  static get [name](): string {
    return "messages.sendEncryptedFile"
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

/** Sends a service message to a secret chat. */
export class messages_sendEncryptedService_ extends Function_<enums.messages.SentEncryptedMessage> {
  static __F: (params: { peer: enums.InputEncryptedChat; random_id: bigint; data: Uint8Array }) => enums.messages.SentEncryptedMessage = null as unknown as (params: { peer: enums.InputEncryptedChat; random_id: bigint; data: Uint8Array }) => enums.messages.SentEncryptedMessage;
  /** Secret chat ID */
  peer: enums.InputEncryptedChat;
  /** Unique client message ID required to prevent message resending */
  random_id: bigint;
  /** TL-serialization of [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage) type, encrypted with a key generated during chat initialization */
  data: Uint8Array;

  protected get [id](): number {
    return 0x32D439A4;
  }

  static get [name](): string {
    return "messages.sendEncryptedService"
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

/** Confirms receipt of messages in a secret chat by client, cancels push notifications.  
The method returns a list of **random\_id**s of messages for which push notifications were cancelled. */
export class messages_receivedQueue_ extends Function_<bigint[]> {
  static __F: (params: { max_qts: number }) => bigint[] = null as unknown as (params: { max_qts: number }) => bigint[];
  /** Maximum qts value available at the client */
  max_qts: number;

  protected get [id](): number {
    return 0x55A5BB66;
  }

  static get [name](): string {
    return "messages.receivedQueue"
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

/** Report a secret chat for spam */
export class messages_reportEncryptedSpam_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputEncryptedChat }) => boolean = null as unknown as (params: { peer: enums.InputEncryptedChat }) => boolean;
  /** The secret chat to report */
  peer: enums.InputEncryptedChat;

  protected get [id](): number {
    return 0x4B0C8C0F;
  }

  static get [name](): string {
    return "messages.reportEncryptedSpam"
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

/** Notifies the sender about the recipient having listened a voice message or watched a video. */
export class messages_readMessageContents_ extends Function_<enums.messages.AffectedMessages> {
  static __F: (params: { id: Array<number> }) => enums.messages.AffectedMessages = null as unknown as (params: { id: Array<number> }) => enums.messages.AffectedMessages;
  /** Message ID list */
  id: Array<number>;

  protected get [id](): number {
    return 0x36A73F77;
  }

  static get [name](): string {
    return "messages.readMessageContents"
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

/** Get stickers by emoji */
export class messages_getStickers_ extends Function_<enums.messages.Stickers> {
  static __F: (params: { emoticon: string; hash: bigint }) => enums.messages.Stickers = null as unknown as (params: { emoticon: string; hash: bigint }) => enums.messages.Stickers;
  /** The emoji */
  emoticon: string;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0xD5A5D3A1;
  }

  static get [name](): string {
    return "messages.getStickers"
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

/** Get all installed stickers */
export class messages_getAllStickers_ extends Function_<enums.messages.AllStickers> {
  static __F: (params: { hash: bigint }) => enums.messages.AllStickers = null as unknown as (params: { hash: bigint }) => enums.messages.AllStickers;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0xB8A0A1A8;
  }

  static get [name](): string {
    return "messages.getAllStickers"
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

/** Get preview of webpage */
export class messages_getWebPagePreview_ extends Function_<enums.MessageMedia> {
  static __F: (params: { message: string; entities?: Array<enums.MessageEntity> }) => enums.MessageMedia = null as unknown as (params: { message: string; entities?: Array<enums.MessageEntity> }) => enums.MessageMedia;
  /** Message from which to extract the preview */
  message: string;
  /** [Message entities for styled text](https://core.telegram.org/api/entities) */
  entities?: Array<enums.MessageEntity>;

  protected get [id](): number {
    return 0x8B68B0CC;
  }

  static get [name](): string {
    return "messages.getWebPagePreview"
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

/** Export an invite link for a chat */
export class messages_exportChatInvite_ extends Function_<enums.ExportedChatInvite> {
  static __F: (params: { legacy_revoke_permanent?: true; request_needed?: true; peer: enums.InputPeer; expire_date?: number; usage_limit?: number; title?: string }) => enums.ExportedChatInvite = null as unknown as (params: { legacy_revoke_permanent?: true; request_needed?: true; peer: enums.InputPeer; expire_date?: number; usage_limit?: number; title?: string }) => enums.ExportedChatInvite;
  /** Legacy flag, reproducing legacy behavior of this method: if set, revokes all previous links before creating a new one. Kept for bot API BC, should not be used by modern clients. */
  legacy_revoke_permanent?: true;
  /** Whether admin confirmation is required before admitting each separate user into the chat */
  request_needed?: true;
  /** Chat */
  peer: enums.InputPeer;
  /** Expiration date */
  expire_date?: number;
  /** Maximum number of users that can join using this link */
  usage_limit?: number;
  /** Description of the invite link, visible only to administrators */
  title?: string;

  protected get [id](): number {
    return 0xA02CE5D5;
  }

  static get [name](): string {
    return "messages.exportChatInvite"
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

/** Check the validity of a chat invite link and get basic info about it */
export class messages_checkChatInvite_ extends Function_<enums.ChatInvite> {
  static __F: (params: { hash: string }) => enums.ChatInvite = null as unknown as (params: { hash: string }) => enums.ChatInvite;
  /** Invite hash from [chat invite deep link »](https://core.telegram.org/api/links#chat-invite-links). */
  hash: string;

  protected get [id](): number {
    return 0x3EADB1BB;
  }

  static get [name](): string {
    return "messages.checkChatInvite"
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

/** Import a chat invite and join a private chat/supergroup/channel */
export class messages_importChatInvite_ extends Function_<enums.Updates> {
  static __F: (params: { hash: string }) => enums.Updates = null as unknown as (params: { hash: string }) => enums.Updates;
  /** `hash` from a [chat invite deep link](https://core.telegram.org/api/links#chat-invite-links) */
  hash: string;

  protected get [id](): number {
    return 0x6C50051C;
  }

  static get [name](): string {
    return "messages.importChatInvite"
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

/** Get info about a stickerset */
export class messages_getStickerSet_ extends Function_<enums.messages.StickerSet> {
  static __F: (params: { stickerset: enums.InputStickerSet; hash: number }) => enums.messages.StickerSet = null as unknown as (params: { stickerset: enums.InputStickerSet; hash: number }) => enums.messages.StickerSet;
  /** Stickerset */
  stickerset: enums.InputStickerSet;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: number;

  protected get [id](): number {
    return 0xC8A0EC74;
  }

  static get [name](): string {
    return "messages.getStickerSet"
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

/** Install a stickerset */
export class messages_installStickerSet_ extends Function_<enums.messages.StickerSetInstallResult> {
  static __F: (params: { stickerset: enums.InputStickerSet; archived: boolean }) => enums.messages.StickerSetInstallResult = null as unknown as (params: { stickerset: enums.InputStickerSet; archived: boolean }) => enums.messages.StickerSetInstallResult;
  /** Stickerset to install */
  stickerset: enums.InputStickerSet;
  /** Whether to archive stickerset */
  archived: boolean;

  protected get [id](): number {
    return 0xC78FE460;
  }

  static get [name](): string {
    return "messages.installStickerSet"
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

/** Uninstall a stickerset */
export class messages_uninstallStickerSet_ extends Function_<boolean> {
  static __F: (params: { stickerset: enums.InputStickerSet }) => boolean = null as unknown as (params: { stickerset: enums.InputStickerSet }) => boolean;
  /** The stickerset to uninstall */
  stickerset: enums.InputStickerSet;

  protected get [id](): number {
    return 0xF96E55DE;
  }

  static get [name](): string {
    return "messages.uninstallStickerSet"
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

/** Start a conversation with a bot using a [deep linking parameter](https://core.telegram.org/api/links#bot-links) */
export class messages_startBot_ extends Function_<enums.Updates> {
  static __F: (params: { bot: enums.InputUser; peer: enums.InputPeer; random_id: bigint; start_param: string }) => enums.Updates = null as unknown as (params: { bot: enums.InputUser; peer: enums.InputPeer; random_id: bigint; start_param: string }) => enums.Updates;
  /** The bot */
  bot: enums.InputUser;
  /** The chat where to start the bot, can be the bot's private chat or a group */
  peer: enums.InputPeer;
  /** Random ID to avoid resending the same message */
  random_id: bigint;
  /** [Deep linking parameter](https://core.telegram.org/api/links#bot-links) */
  start_param: string;

  protected get [id](): number {
    return 0xE6DF7378;
  }

  static get [name](): string {
    return "messages.startBot"
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

/** Get and increase the view counter of a message sent or forwarded from a [channel](https://core.telegram.org/api/channel) */
export class messages_getMessagesViews_ extends Function_<enums.messages.MessageViews> {
  static __F: (params: { peer: enums.InputPeer; id: Array<number>; increment: boolean }) => enums.messages.MessageViews = null as unknown as (params: { peer: enums.InputPeer; id: Array<number>; increment: boolean }) => enums.messages.MessageViews;
  /** Peer where the message was found */
  peer: enums.InputPeer;
  /** ID of message */
  id: Array<number>;
  /** Whether to mark the message as viewed and increment the view counter */
  increment: boolean;

  protected get [id](): number {
    return 0x5784D3E1;
  }

  static get [name](): string {
    return "messages.getMessagesViews"
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

/** Make a user admin in a [basic group](https://core.telegram.org/api/channel#basic-groups). */
export class messages_editChatAdmin_ extends Function_<boolean> {
  static __F: (params: { chat_id: bigint; user_id: enums.InputUser; is_admin: boolean }) => boolean = null as unknown as (params: { chat_id: bigint; user_id: enums.InputUser; is_admin: boolean }) => boolean;
  /** The ID of the group */
  chat_id: bigint;
  /** The user to make admin */
  user_id: enums.InputUser;
  /** Whether to make them admin */
  is_admin: boolean;

  protected get [id](): number {
    return 0xA85BD1C2;
  }

  static get [name](): string {
    return "messages.editChatAdmin"
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

/** Turn a [basic group into a supergroup](https://core.telegram.org/api/channel#migration) */
export class messages_migrateChat_ extends Function_<enums.Updates> {
  static __F: (params: { chat_id: bigint }) => enums.Updates = null as unknown as (params: { chat_id: bigint }) => enums.Updates;
  /** [Basic group](https://core.telegram.org/api/channel#basic-groups) to migrate */
  chat_id: bigint;

  protected get [id](): number {
    return 0xA2875319;
  }

  static get [name](): string {
    return "messages.migrateChat"
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

/** Search for messages and peers globally */
export class messages_searchGlobal_ extends Function_<enums.messages.Messages> {
  static __F: (params: { folder_id?: number; q: string; filter: enums.MessagesFilter; min_date: number; max_date: number; offset_rate: number; offset_peer: enums.InputPeer; offset_id: number; limit: number }) => enums.messages.Messages = null as unknown as (params: { folder_id?: number; q: string; filter: enums.MessagesFilter; min_date: number; max_date: number; offset_rate: number; offset_peer: enums.InputPeer; offset_id: number; limit: number }) => enums.messages.Messages;
  /** [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) */
  folder_id?: number;
  /** Query */
  q: string;
  /** Global search filter */
  filter: enums.MessagesFilter;
  /** If a positive value was specified, the method will return only messages with date bigger than min\_date */
  min_date: number;
  /** If a positive value was transferred, the method will return only messages with date smaller than max\_date */
  max_date: number;
  /** Initially 0, then set to the [`next_rate` parameter of messages.messagesSlice](https://core.telegram.org/constructor/messages.messagesSlice) */
  offset_rate: number;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_peer: enums.InputPeer;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_id: number;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0x4BC6589A;
  }

  static get [name](): string {
    return "messages.searchGlobal"
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

/** Reorder installed stickersets */
export class messages_reorderStickerSets_ extends Function_<boolean> {
  static __F: (params: { masks?: true; emojis?: true; order: Array<bigint> }) => boolean = null as unknown as (params: { masks?: true; emojis?: true; order: Array<bigint> }) => boolean;
  /** Reorder mask stickersets */
  masks?: true;
  /** Reorder [custom emoji stickersets](https://core.telegram.org/api/custom-emoji) */
  emojis?: true;
  /** New stickerset order by stickerset IDs */
  order: Array<bigint>;

  protected get [id](): number {
    return 0x78337739;
  }

  static get [name](): string {
    return "messages.reorderStickerSets"
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

/** Get a document by its SHA256 hash, mainly used for gifs */
export class messages_getDocumentByHash_ extends Function_<enums.Document> {
  static __F: (params: { sha256: Uint8Array; size: bigint; mime_type: string }) => enums.Document = null as unknown as (params: { sha256: Uint8Array; size: bigint; mime_type: string }) => enums.Document;
  /** SHA256 of file */
  sha256: Uint8Array;
  /** Size of the file in bytes */
  size: bigint;
  /** Mime type */
  mime_type: string;

  protected get [id](): number {
    return 0xB1F2061F;
  }

  static get [name](): string {
    return "messages.getDocumentByHash"
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

/** Get saved GIFs */
export class messages_getSavedGifs_ extends Function_<enums.messages.SavedGifs> {
  static __F: (params: { hash: bigint }) => enums.messages.SavedGifs = null as unknown as (params: { hash: bigint }) => enums.messages.SavedGifs;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x5CF09635;
  }

  static get [name](): string {
    return "messages.getSavedGifs"
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

/** Add GIF to saved gifs list */
export class messages_saveGif_ extends Function_<boolean> {
  static __F: (params: { id: enums.InputDocument; unsave: boolean }) => boolean = null as unknown as (params: { id: enums.InputDocument; unsave: boolean }) => boolean;
  /** GIF to save */
  id: enums.InputDocument;
  /** Whether to remove GIF from saved gifs list */
  unsave: boolean;

  protected get [id](): number {
    return 0x327A30CB;
  }

  static get [name](): string {
    return "messages.saveGif"
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

/** Query an inline bot */
export class messages_getInlineBotResults_ extends Function_<enums.messages.BotResults> {
  static __F: (params: { bot: enums.InputUser; peer: enums.InputPeer; geo_point?: enums.InputGeoPoint; query: string; offset: string }) => enums.messages.BotResults = null as unknown as (params: { bot: enums.InputUser; peer: enums.InputPeer; geo_point?: enums.InputGeoPoint; query: string; offset: string }) => enums.messages.BotResults;
  /** The bot to query */
  bot: enums.InputUser;
  /** The currently opened chat */
  peer: enums.InputPeer;
  /** The geolocation, if requested */
  geo_point?: enums.InputGeoPoint;
  /** The query */
  query: string;
  /** The offset within the results, will be passed directly as-is to the bot. */
  offset: string;

  protected get [id](): number {
    return 0x514E999D;
  }

  static get [name](): string {
    return "messages.getInlineBotResults"
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

/** Answer an inline query, for bots only */
export class messages_setInlineBotResults_ extends Function_<boolean> {
  static __F: (params: { gallery?: true; private?: true; query_id: bigint; results: Array<enums.InputBotInlineResult>; cache_time: number; next_offset?: string; switch_pm?: enums.InlineBotSwitchPM; switch_webview?: enums.InlineBotWebView }) => boolean = null as unknown as (params: { gallery?: true; private?: true; query_id: bigint; results: Array<enums.InputBotInlineResult>; cache_time: number; next_offset?: string; switch_pm?: enums.InlineBotSwitchPM; switch_webview?: enums.InlineBotWebView }) => boolean;
  /** Set this flag if the results are composed of media files */
  gallery?: true;
  /** Set this flag if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query */
  private?: true;
  /** Unique identifier for the answered query */
  query_id: bigint;
  /** Vector of results for the inline query */
  results: Array<enums.InputBotInlineResult>;
  /** The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. */
  cache_time: number;
  /** Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes. */
  next_offset?: string;
  /** If passed, clients will display a button on top of the remaining inline result list with the specified text, that switches the user to a private chat with the bot and sends the bot a start message with a certain parameter. */
  switch_pm?: enums.InlineBotSwitchPM;
  /** If passed, clients will display a button on top of the remaining inline result list with the specified text, that switches the user to the specified [inline mode mini app](https://core.telegram.org/api/bots/webapps#inline-mode-mini-apps). */
  switch_webview?: enums.InlineBotWebView;

  protected get [id](): number {
    return 0xBB12A419;
  }

  static get [name](): string {
    return "messages.setInlineBotResults"
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

/** Send a result obtained using [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults). */
export class messages_sendInlineBotResult_ extends Function_<enums.Updates> {
  static __F: (params: { silent?: true; background?: true; clear_draft?: true; hide_via?: true; peer: enums.InputPeer; reply_to?: enums.InputReplyTo; random_id: bigint; query_id: bigint; id: string; schedule_date?: number; send_as?: enums.InputPeer }) => enums.Updates = null as unknown as (params: { silent?: true; background?: true; clear_draft?: true; hide_via?: true; peer: enums.InputPeer; reply_to?: enums.InputReplyTo; random_id: bigint; query_id: bigint; id: string; schedule_date?: number; send_as?: enums.InputPeer }) => enums.Updates;
  /** Whether to send the message silently (no notification will be triggered on the other client) */
  silent?: true;
  /** Whether to send the message in background */
  background?: true;
  /** Whether to clear the [draft](https://core.telegram.org/api/drafts) */
  clear_draft?: true;
  /** Whether to hide the `via @botname` in the resulting message (only for bot usernames encountered in the [config](https://core.telegram.org/constructor/config)) */
  hide_via?: true;
  /** Destination */
  peer: enums.InputPeer;
  /** If set, indicates that the message should be sent in reply to the specified message or story. */
  reply_to?: enums.InputReplyTo;
  /** Random ID to avoid resending the same query */
  random_id: bigint;
  /** Query ID from [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults) */
  query_id: bigint;
  /** Result ID from [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults) */
  id: string;
  /** Scheduled message date for scheduled messages */
  schedule_date?: number;
  /** Send this message as the specified peer */
  send_as?: enums.InputPeer;

  protected get [id](): number {
    return 0xF7BC68BA;
  }

  static get [name](): string {
    return "messages.sendInlineBotResult"
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

/** Find out if a media message's caption can be edited */
export class messages_getMessageEditData_ extends Function_<enums.messages.MessageEditData> {
  static __F: (params: { peer: enums.InputPeer; id: number }) => enums.messages.MessageEditData = null as unknown as (params: { peer: enums.InputPeer; id: number }) => enums.messages.MessageEditData;
  /** Peer where the media was sent */
  peer: enums.InputPeer;
  /** ID of message */
  id: number;

  protected get [id](): number {
    return 0xFDA68D36;
  }

  static get [name](): string {
    return "messages.getMessageEditData"
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

/** Edit message */
export class messages_editMessage_ extends Function_<enums.Updates> {
  static __F: (params: { no_webpage?: true; invert_media?: true; peer: enums.InputPeer; id: number; message?: string; media?: enums.InputMedia; reply_markup?: enums.ReplyMarkup; entities?: Array<enums.MessageEntity>; schedule_date?: number }) => enums.Updates = null as unknown as (params: { no_webpage?: true; invert_media?: true; peer: enums.InputPeer; id: number; message?: string; media?: enums.InputMedia; reply_markup?: enums.ReplyMarkup; entities?: Array<enums.MessageEntity>; schedule_date?: number }) => enums.Updates;
  /** Disable webpage preview */
  no_webpage?: true;
  /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
  invert_media?: true;
  /** Where was the message sent */
  peer: enums.InputPeer;
  /** ID of the message to edit */
  id: number;
  /** New message */
  message?: string;
  /** New attached media */
  media?: enums.InputMedia;
  /** Reply markup for inline keyboards */
  reply_markup?: enums.ReplyMarkup;
  /** [Message entities for styled text](https://core.telegram.org/api/entities) */
  entities?: Array<enums.MessageEntity>;
  /** Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages) */
  schedule_date?: number;

  protected get [id](): number {
    return 0x48F71778;
  }

  static get [name](): string {
    return "messages.editMessage"
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

/** Edit an inline bot message */
export class messages_editInlineBotMessage_ extends Function_<boolean> {
  static __F: (params: { no_webpage?: true; invert_media?: true; id: enums.InputBotInlineMessageID; message?: string; media?: enums.InputMedia; reply_markup?: enums.ReplyMarkup; entities?: Array<enums.MessageEntity> }) => boolean = null as unknown as (params: { no_webpage?: true; invert_media?: true; id: enums.InputBotInlineMessageID; message?: string; media?: enums.InputMedia; reply_markup?: enums.ReplyMarkup; entities?: Array<enums.MessageEntity> }) => boolean;
  /** Disable webpage preview */
  no_webpage?: true;
  /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
  invert_media?: true;
  /** Sent inline message ID */
  id: enums.InputBotInlineMessageID;
  /** Message */
  message?: string;
  /** Media */
  media?: enums.InputMedia;
  /** Reply markup for inline keyboards */
  reply_markup?: enums.ReplyMarkup;
  /** [Message entities for styled text](https://core.telegram.org/api/entities) */
  entities?: Array<enums.MessageEntity>;

  protected get [id](): number {
    return 0x83557DBA;
  }

  static get [name](): string {
    return "messages.editInlineBotMessage"
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

/** Press an inline callback button and get a callback answer from the bot */
export class messages_getBotCallbackAnswer_ extends Function_<enums.messages.BotCallbackAnswer> {
  static __F: (params: { game?: true; peer: enums.InputPeer; msg_id: number; data?: Uint8Array; password?: enums.InputCheckPasswordSRP }) => enums.messages.BotCallbackAnswer = null as unknown as (params: { game?: true; peer: enums.InputPeer; msg_id: number; data?: Uint8Array; password?: enums.InputCheckPasswordSRP }) => enums.messages.BotCallbackAnswer;
  /** Whether this is a "play game" button */
  game?: true;
  /** Where was the inline keyboard sent */
  peer: enums.InputPeer;
  /** ID of the Message with the inline keyboard */
  msg_id: number;
  /** Callback data */
  data?: Uint8Array;
  /** For buttons [requiring you to verify your identity with your 2FA password](https://core.telegram.org/constructor/keyboardButtonCallback), the SRP payload generated using [SRP](https://core.telegram.org/api/srp). */
  password?: enums.InputCheckPasswordSRP;

  protected get [id](): number {
    return 0x9342CA07;
  }

  static get [name](): string {
    return "messages.getBotCallbackAnswer"
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

/** Set the callback answer to a user button press (bots only) */
export class messages_setBotCallbackAnswer_ extends Function_<boolean> {
  static __F: (params: { alert?: true; query_id: bigint; message?: string; url?: string; cache_time: number }) => boolean = null as unknown as (params: { alert?: true; query_id: bigint; message?: string; url?: string; cache_time: number }) => boolean;
  /** Whether to show the message as a popup instead of a toast notification */
  alert?: true;
  /** Query ID */
  query_id: bigint;
  /** Popup to show */
  message?: string;
  /** URL to open */
  url?: string;
  /** Cache validity */
  cache_time: number;

  protected get [id](): number {
    return 0xD58F130A;
  }

  static get [name](): string {
    return "messages.setBotCallbackAnswer"
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

/** Get dialog info of specified peers */
export class messages_getPeerDialogs_ extends Function_<enums.messages.PeerDialogs> {
  static __F: (params: { peers: Array<enums.InputDialogPeer> }) => enums.messages.PeerDialogs = null as unknown as (params: { peers: Array<enums.InputDialogPeer> }) => enums.messages.PeerDialogs;
  /** Peers */
  peers: Array<enums.InputDialogPeer>;

  protected get [id](): number {
    return 0xE470BCFD;
  }

  static get [name](): string {
    return "messages.getPeerDialogs"
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

/** Save a message [draft](https://core.telegram.org/api/drafts) associated to a chat. */
export class messages_saveDraft_ extends Function_<boolean> {
  static __F: (params: { no_webpage?: true; invert_media?: true; reply_to?: enums.InputReplyTo; peer: enums.InputPeer; message: string; entities?: Array<enums.MessageEntity>; media?: enums.InputMedia }) => boolean = null as unknown as (params: { no_webpage?: true; invert_media?: true; reply_to?: enums.InputReplyTo; peer: enums.InputPeer; message: string; entities?: Array<enums.MessageEntity>; media?: enums.InputMedia }) => boolean;
  /** Disable generation of the webpage preview */
  no_webpage?: true;
  /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
  invert_media?: true;
  /** If set, indicates that the message should be sent in reply to the specified message or story. */
  reply_to?: enums.InputReplyTo;
  /** Destination of the message that should be sent */
  peer: enums.InputPeer;
  /** The draft */
  message: string;
  /** Message [entities](https://core.telegram.org/api/entities) for styled text */
  entities?: Array<enums.MessageEntity>;
  /** Attached media */
  media?: enums.InputMedia;

  protected get [id](): number {
    return 0x7FF3B806;
  }

  static get [name](): string {
    return "messages.saveDraft"
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

/** Return all message [drafts](https://core.telegram.org/api/drafts).  
Returns all the latest [updateDraftMessage](https://core.telegram.org/constructor/updateDraftMessage) updates related to all chats with drafts. */
export class messages_getAllDrafts_ extends Function_<enums.Updates> {
  static __F: () => enums.Updates = null as unknown as () => enums.Updates;
  protected get [id](): number {
    return 0x6A3F8D65;
  }

  static get [name](): string {
    return "messages.getAllDrafts"
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

/** Get featured stickers */
export class messages_getFeaturedStickers_ extends Function_<enums.messages.FeaturedStickers> {
  static __F: (params: { hash: bigint }) => enums.messages.FeaturedStickers = null as unknown as (params: { hash: bigint }) => enums.messages.FeaturedStickers;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x64780B14;
  }

  static get [name](): string {
    return "messages.getFeaturedStickers"
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

/** Mark new featured stickers as read */
export class messages_readFeaturedStickers_ extends Function_<boolean> {
  static __F: (params: { id: Array<bigint> }) => boolean = null as unknown as (params: { id: Array<bigint> }) => boolean;
  /** IDs of stickersets to mark as read */
  id: Array<bigint>;

  protected get [id](): number {
    return 0x5B118126;
  }

  static get [name](): string {
    return "messages.readFeaturedStickers"
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

/** Get recent stickers */
export class messages_getRecentStickers_ extends Function_<enums.messages.RecentStickers> {
  static __F: (params: { attached?: true; hash: bigint }) => enums.messages.RecentStickers = null as unknown as (params: { attached?: true; hash: bigint }) => enums.messages.RecentStickers;
  /** Get stickers recently attached to photo or video files */
  attached?: true;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x9DA9403B;
  }

  static get [name](): string {
    return "messages.getRecentStickers"
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

/** Add/remove sticker from recent stickers list */
export class messages_saveRecentSticker_ extends Function_<boolean> {
  static __F: (params: { attached?: true; id: enums.InputDocument; unsave: boolean }) => boolean = null as unknown as (params: { attached?: true; id: enums.InputDocument; unsave: boolean }) => boolean;
  /** Whether to add/remove stickers recently attached to photo or video files */
  attached?: true;
  /** Sticker */
  id: enums.InputDocument;
  /** Whether to save or unsave the sticker */
  unsave: boolean;

  protected get [id](): number {
    return 0x392718F8;
  }

  static get [name](): string {
    return "messages.saveRecentSticker"
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

/** Clear recent stickers */
export class messages_clearRecentStickers_ extends Function_<boolean> {
  static __F: (params?: { attached?: true }) => boolean = null as unknown as (params?: { attached?: true }) => boolean;
  /** Set this flag to clear the list of stickers recently attached to photo or video files */
  attached?: true;

  protected get [id](): number {
    return 0x8999602D;
  }

  static get [name](): string {
    return "messages.clearRecentStickers"
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

/** Get all archived stickers */
export class messages_getArchivedStickers_ extends Function_<enums.messages.ArchivedStickers> {
  static __F: (params: { masks?: true; emojis?: true; offset_id: bigint; limit: number }) => enums.messages.ArchivedStickers = null as unknown as (params: { masks?: true; emojis?: true; offset_id: bigint; limit: number }) => enums.messages.ArchivedStickers;
  /** Get [mask stickers](https://core.telegram.org/api/stickers#mask-stickers) */
  masks?: true;
  /** Get [custom emoji stickers](https://core.telegram.org/api/custom-emoji) */
  emojis?: true;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_id: bigint;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0x57F17692;
  }

  static get [name](): string {
    return "messages.getArchivedStickers"
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

/** Get installed mask stickers */
export class messages_getMaskStickers_ extends Function_<enums.messages.AllStickers> {
  static __F: (params: { hash: bigint }) => enums.messages.AllStickers = null as unknown as (params: { hash: bigint }) => enums.messages.AllStickers;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x640F82B8;
  }

  static get [name](): string {
    return "messages.getMaskStickers"
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

/** Get stickers attached to a photo or video */
export class messages_getAttachedStickers_ extends Function_<enums.StickerSetCovered[]> {
  static __F: (params: { media: enums.InputStickeredMedia }) => enums.StickerSetCovered[] = null as unknown as (params: { media: enums.InputStickeredMedia }) => enums.StickerSetCovered[];
  /** Stickered media */
  media: enums.InputStickeredMedia;

  protected get [id](): number {
    return 0xCC5B67CC;
  }

  static get [name](): string {
    return "messages.getAttachedStickers"
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

/** Use this method to set the score of the specified user in a game sent as a normal message (bots only). */
export class messages_setGameScore_ extends Function_<enums.Updates> {
  static __F: (params: { edit_message?: true; force?: true; peer: enums.InputPeer; id: number; user_id: enums.InputUser; score: number }) => enums.Updates = null as unknown as (params: { edit_message?: true; force?: true; peer: enums.InputPeer; id: number; user_id: enums.InputUser; score: number }) => enums.Updates;
  /** Set this flag if the game message should be automatically edited to include the current scoreboard */
  edit_message?: true;
  /** Set this flag if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
  force?: true;
  /** Unique identifier of target chat */
  peer: enums.InputPeer;
  /** Identifier of the sent message */
  id: number;
  /** User identifier */
  user_id: enums.InputUser;
  /** New score */
  score: number;

  protected get [id](): number {
    return 0x8EF8ECC0;
  }

  static get [name](): string {
    return "messages.setGameScore"
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

/** Use this method to set the score of the specified user in a game sent as an inline message (bots only). */
export class messages_setInlineGameScore_ extends Function_<boolean> {
  static __F: (params: { edit_message?: true; force?: true; id: enums.InputBotInlineMessageID; user_id: enums.InputUser; score: number }) => boolean = null as unknown as (params: { edit_message?: true; force?: true; id: enums.InputBotInlineMessageID; user_id: enums.InputUser; score: number }) => boolean;
  /** Set this flag if the game message should be automatically edited to include the current scoreboard */
  edit_message?: true;
  /** Set this flag if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
  force?: true;
  /** ID of the inline message */
  id: enums.InputBotInlineMessageID;
  /** User identifier */
  user_id: enums.InputUser;
  /** New score */
  score: number;

  protected get [id](): number {
    return 0x15AD9F64;
  }

  static get [name](): string {
    return "messages.setInlineGameScore"
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

/** Get highscores of a game */
export class messages_getGameHighScores_ extends Function_<enums.messages.HighScores> {
  static __F: (params: { peer: enums.InputPeer; id: number; user_id: enums.InputUser }) => enums.messages.HighScores = null as unknown as (params: { peer: enums.InputPeer; id: number; user_id: enums.InputUser }) => enums.messages.HighScores;
  /** Where was the game sent */
  peer: enums.InputPeer;
  /** ID of message with game media attachment */
  id: number;
  /** Get high scores made by a certain user */
  user_id: enums.InputUser;

  protected get [id](): number {
    return 0xE822649D;
  }

  static get [name](): string {
    return "messages.getGameHighScores"
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

/** Get highscores of a game sent using an inline bot */
export class messages_getInlineGameHighScores_ extends Function_<enums.messages.HighScores> {
  static __F: (params: { id: enums.InputBotInlineMessageID; user_id: enums.InputUser }) => enums.messages.HighScores = null as unknown as (params: { id: enums.InputBotInlineMessageID; user_id: enums.InputUser }) => enums.messages.HighScores;
  /** ID of inline message */
  id: enums.InputBotInlineMessageID;
  /** Get high scores of a certain user */
  user_id: enums.InputUser;

  protected get [id](): number {
    return 0x0F635E1B;
  }

  static get [name](): string {
    return "messages.getInlineGameHighScores"
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

/** Get chats in common with a user */
export class messages_getCommonChats_ extends Function_<enums.messages.Chats> {
  static __F: (params: { user_id: enums.InputUser; max_id: bigint; limit: number }) => enums.messages.Chats = null as unknown as (params: { user_id: enums.InputUser; max_id: bigint; limit: number }) => enums.messages.Chats;
  /** User ID */
  user_id: enums.InputUser;
  /** Maximum ID of chat to return (see [pagination](https://core.telegram.org/api/offsets)) */
  max_id: bigint;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0xE40CA104;
  }

  static get [name](): string {
    return "messages.getCommonChats"
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

/** Get [instant view](https://instantview.telegram.org) page */
export class messages_getWebPage_ extends Function_<enums.messages.WebPage> {
  static __F: (params: { url: string; hash: number }) => enums.messages.WebPage = null as unknown as (params: { url: string; hash: number }) => enums.messages.WebPage;
  /** URL of IV page to fetch */
  url: string;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: number;

  protected get [id](): number {
    return 0x8D9692A3;
  }

  static get [name](): string {
    return "messages.getWebPage"
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

/** Pin/unpin a dialog */
export class messages_toggleDialogPin_ extends Function_<boolean> {
  static __F: (params: { pinned?: true; peer: enums.InputDialogPeer }) => boolean = null as unknown as (params: { pinned?: true; peer: enums.InputDialogPeer }) => boolean;
  /** Whether to pin or unpin the dialog */
  pinned?: true;
  /** The dialog to pin */
  peer: enums.InputDialogPeer;

  protected get [id](): number {
    return 0xA731E257;
  }

  static get [name](): string {
    return "messages.toggleDialogPin"
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

/** Reorder pinned dialogs */
export class messages_reorderPinnedDialogs_ extends Function_<boolean> {
  static __F: (params: { force?: true; folder_id: number; order: Array<enums.InputDialogPeer> }) => boolean = null as unknown as (params: { force?: true; folder_id: number; order: Array<enums.InputDialogPeer> }) => boolean;
  /** If set, dialogs pinned server-side but not present in the `order` field will be unpinned. */
  force?: true;
  /** [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) */
  folder_id: number;
  /** New dialog order */
  order: Array<enums.InputDialogPeer>;

  protected get [id](): number {
    return 0x3B1ADF37;
  }

  static get [name](): string {
    return "messages.reorderPinnedDialogs"
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

/** Get pinned dialogs */
export class messages_getPinnedDialogs_ extends Function_<enums.messages.PeerDialogs> {
  static __F: (params: { folder_id: number }) => enums.messages.PeerDialogs = null as unknown as (params: { folder_id: number }) => enums.messages.PeerDialogs;
  /** [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) */
  folder_id: number;

  protected get [id](): number {
    return 0xD6B94DF2;
  }

  static get [name](): string {
    return "messages.getPinnedDialogs"
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

/** If you sent an invoice requesting a shipping address and the parameter is\_flexible was specified, the bot will receive an [updateBotShippingQuery](https://core.telegram.org/constructor/updateBotShippingQuery) update. Use this method to reply to shipping queries. */
export class messages_setBotShippingResults_ extends Function_<boolean> {
  static __F: (params: { query_id: bigint; error?: string; shipping_options?: Array<enums.ShippingOption> }) => boolean = null as unknown as (params: { query_id: bigint; error?: string; shipping_options?: Array<enums.ShippingOption> }) => boolean;
  /** Unique identifier for the query to be answered */
  query_id: bigint;
  /** Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable"). Telegram will display this message to the user. */
  error?: string;
  /** A vector of available shipping options. */
  shipping_options?: Array<enums.ShippingOption>;

  protected get [id](): number {
    return 0xE5F672FA;
  }

  static get [name](): string {
    return "messages.setBotShippingResults"
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

/** Once the user has confirmed their payment and shipping details, the bot receives an [updateBotPrecheckoutQuery](https://core.telegram.org/constructor/updateBotPrecheckoutQuery) update.  
Use this method to respond to such pre-checkout queries.  
**Note**: Telegram must receive an answer within 10 seconds after the pre-checkout query was sent. */
export class messages_setBotPrecheckoutResults_ extends Function_<boolean> {
  static __F: (params: { success?: true; query_id: bigint; error?: string }) => boolean = null as unknown as (params: { success?: true; query_id: bigint; error?: string }) => boolean;
  /** Set this flag if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order, otherwise do not set it, and set the `error` field, instead */
  success?: true;
  /** Unique identifier for the query to be answered */
  query_id: bigint;
  /** Required if the `success` isn't set. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user. */
  error?: string;

  protected get [id](): number {
    return 0x09C2DD95;
  }

  static get [name](): string {
    return "messages.setBotPrecheckoutResults"
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

/** Upload a file and associate it to a chat (without actually sending it to the chat) */
export class messages_uploadMedia_ extends Function_<enums.MessageMedia> {
  static __F: (params: { peer: enums.InputPeer; media: enums.InputMedia }) => enums.MessageMedia = null as unknown as (params: { peer: enums.InputPeer; media: enums.InputMedia }) => enums.MessageMedia;
  /** The chat, can be [inputPeerEmpty](https://core.telegram.org/constructor/inputPeerEmpty) for bots and [inputPeerSelf](https://core.telegram.org/constructor/inputPeerSelf) for users. */
  peer: enums.InputPeer;
  /** File uploaded in chunks as described in [files »](https://core.telegram.org/api/files) */
  media: enums.InputMedia;

  protected get [id](): number {
    return 0x519BC2B1;
  }

  static get [name](): string {
    return "messages.uploadMedia"
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

/** Notify the other user in a private chat that a screenshot of the chat was taken */
export class messages_sendScreenshotNotification_ extends Function_<enums.Updates> {
  static __F: (params: { peer: enums.InputPeer; reply_to: enums.InputReplyTo; random_id: bigint }) => enums.Updates = null as unknown as (params: { peer: enums.InputPeer; reply_to: enums.InputReplyTo; random_id: bigint }) => enums.Updates;
  /** Other user */
  peer: enums.InputPeer;
  /** Indicates the message that was screenshotted (the specified message ID can also be `0` to avoid indicating any specific message). */
  reply_to: enums.InputReplyTo;
  /** Random ID to avoid message resending */
  random_id: bigint;

  protected get [id](): number {
    return 0xA1405817;
  }

  static get [name](): string {
    return "messages.sendScreenshotNotification"
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

/** Get faved stickers */
export class messages_getFavedStickers_ extends Function_<enums.messages.FavedStickers> {
  static __F: (params: { hash: bigint }) => enums.messages.FavedStickers = null as unknown as (params: { hash: bigint }) => enums.messages.FavedStickers;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x04F1AAA9;
  }

  static get [name](): string {
    return "messages.getFavedStickers"
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

/** Mark or unmark a sticker as favorite */
export class messages_faveSticker_ extends Function_<boolean> {
  static __F: (params: { id: enums.InputDocument; unfave: boolean }) => boolean = null as unknown as (params: { id: enums.InputDocument; unfave: boolean }) => boolean;
  /** Sticker in question */
  id: enums.InputDocument;
  /** Whether to add or remove a sticker from favorites */
  unfave: boolean;

  protected get [id](): number {
    return 0xB9FFC55B;
  }

  static get [name](): string {
    return "messages.faveSticker"
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

/** Get unread messages where we were mentioned */
export class messages_getUnreadMentions_ extends Function_<enums.messages.Messages> {
  static __F: (params: { peer: enums.InputPeer; top_msg_id?: number; offset_id: number; add_offset: number; limit: number; max_id: number; min_id: number }) => enums.messages.Messages = null as unknown as (params: { peer: enums.InputPeer; top_msg_id?: number; offset_id: number; add_offset: number; limit: number; max_id: number; min_id: number }) => enums.messages.Messages;
  /** Peer where to look for mentions */
  peer: enums.InputPeer;
  /** If set, considers only messages within the specified [forum topic](https://core.telegram.org/api/forum#forum-topics) */
  top_msg_id?: number;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_id: number;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  add_offset: number;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;
  /** Maximum message ID to return, [see pagination](https://core.telegram.org/api/offsets) */
  max_id: number;
  /** Minimum message ID to return, [see pagination](https://core.telegram.org/api/offsets) */
  min_id: number;

  protected get [id](): number {
    return 0xF107E790;
  }

  static get [name](): string {
    return "messages.getUnreadMentions"
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

/** Mark mentions as read */
export class messages_readMentions_ extends Function_<enums.messages.AffectedHistory> {
  static __F: (params: { peer: enums.InputPeer; top_msg_id?: number }) => enums.messages.AffectedHistory = null as unknown as (params: { peer: enums.InputPeer; top_msg_id?: number }) => enums.messages.AffectedHistory;
  /** Dialog */
  peer: enums.InputPeer;
  /** Mark as read only mentions within the specified [forum topic](https://core.telegram.org/api/forum#forum-topics) */
  top_msg_id?: number;

  protected get [id](): number {
    return 0x36E5BF4D;
  }

  static get [name](): string {
    return "messages.readMentions"
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

/** Get live location history of a certain user */
export class messages_getRecentLocations_ extends Function_<enums.messages.Messages> {
  static __F: (params: { peer: enums.InputPeer; limit: number; hash: bigint }) => enums.messages.Messages = null as unknown as (params: { peer: enums.InputPeer; limit: number; hash: bigint }) => enums.messages.Messages;
  /** User */
  peer: enums.InputPeer;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x702A40E0;
  }

  static get [name](): string {
    return "messages.getRecentLocations"
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

/** Send an [album or grouped media](https://core.telegram.org/api/files#albums-grouped-media) */
export class messages_sendMultiMedia_ extends Function_<enums.Updates> {
  static __F: (params: { silent?: true; background?: true; clear_draft?: true; noforwards?: true; update_stickersets_order?: true; invert_media?: true; peer: enums.InputPeer; reply_to?: enums.InputReplyTo; multi_media: Array<enums.InputSingleMedia>; schedule_date?: number; send_as?: enums.InputPeer }) => enums.Updates = null as unknown as (params: { silent?: true; background?: true; clear_draft?: true; noforwards?: true; update_stickersets_order?: true; invert_media?: true; peer: enums.InputPeer; reply_to?: enums.InputReplyTo; multi_media: Array<enums.InputSingleMedia>; schedule_date?: number; send_as?: enums.InputPeer }) => enums.Updates;
  /** Whether to send the album silently (no notification triggered) */
  silent?: true;
  /** Send in background? */
  background?: true;
  /** Whether to clear [drafts](https://core.telegram.org/api/drafts) */
  clear_draft?: true;
  /** Only for bots, disallows forwarding and saving of the messages, even if the destination chat doesn't have [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) enabled */
  noforwards?: true;
  /** Whether to move used stickersets to top, [see here for more info on this flag »](https://core.telegram.org/api/stickers#recent-stickersets) */
  update_stickersets_order?: true;
  /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
  invert_media?: true;
  /** The destination chat */
  peer: enums.InputPeer;
  /** If set, indicates that the message should be sent in reply to the specified message or story. */
  reply_to?: enums.InputReplyTo;
  /** The medias to send: note that they must be separately uploaded using [messages.uploadMedia](https://core.telegram.org/method/messages.uploadMedia) first, using raw `inputMediaUploaded*` constructors is not supported. */
  multi_media: Array<enums.InputSingleMedia>;
  /** Scheduled message date for scheduled messages */
  schedule_date?: number;
  /** Send this message as the specified peer */
  send_as?: enums.InputPeer;

  protected get [id](): number {
    return 0x456E8987;
  }

  static get [name](): string {
    return "messages.sendMultiMedia"
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

/** Upload encrypted file and associate it to a secret chat */
export class messages_uploadEncryptedFile_ extends Function_<enums.EncryptedFile> {
  static __F: (params: { peer: enums.InputEncryptedChat; file: enums.InputEncryptedFile }) => enums.EncryptedFile = null as unknown as (params: { peer: enums.InputEncryptedChat; file: enums.InputEncryptedFile }) => enums.EncryptedFile;
  /** The secret chat to associate the file to */
  peer: enums.InputEncryptedChat;
  /** The file */
  file: enums.InputEncryptedFile;

  protected get [id](): number {
    return 0x5057C497;
  }

  static get [name](): string {
    return "messages.uploadEncryptedFile"
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

/** Search for stickersets */
export class messages_searchStickerSets_ extends Function_<enums.messages.FoundStickerSets> {
  static __F: (params: { exclude_featured?: true; q: string; hash: bigint }) => enums.messages.FoundStickerSets = null as unknown as (params: { exclude_featured?: true; q: string; hash: bigint }) => enums.messages.FoundStickerSets;
  /** Exclude featured stickersets from results */
  exclude_featured?: true;
  /** Query string */
  q: string;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x35705B8A;
  }

  static get [name](): string {
    return "messages.searchStickerSets"
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

/** Get message ranges for saving the user's chat history */
export class messages_getSplitRanges_ extends Function_<enums.MessageRange[]> {
  static __F: () => enums.MessageRange[] = null as unknown as () => enums.MessageRange[];
  protected get [id](): number {
    return 0x1CFF7E08;
  }

  static get [name](): string {
    return "messages.getSplitRanges"
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

/** Manually mark dialog as unread */
export class messages_markDialogUnread_ extends Function_<boolean> {
  static __F: (params: { unread?: true; peer: enums.InputDialogPeer }) => boolean = null as unknown as (params: { unread?: true; peer: enums.InputDialogPeer }) => boolean;
  /** Mark as unread/read */
  unread?: true;
  /** Dialog */
  peer: enums.InputDialogPeer;

  protected get [id](): number {
    return 0xC286D98F;
  }

  static get [name](): string {
    return "messages.markDialogUnread"
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

/** Get dialogs manually marked as unread */
export class messages_getDialogUnreadMarks_ extends Function_<enums.DialogPeer[]> {
  static __F: () => enums.DialogPeer[] = null as unknown as () => enums.DialogPeer[];
  protected get [id](): number {
    return 0x22E24E22;
  }

  static get [name](): string {
    return "messages.getDialogUnreadMarks"
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

/** Clear all [drafts](https://core.telegram.org/api/drafts). */
export class messages_clearAllDrafts_ extends Function_<boolean> {
  static __F: () => boolean = null as unknown as () => boolean;
  protected get [id](): number {
    return 0x7E58EE9C;
  }

  static get [name](): string {
    return "messages.clearAllDrafts"
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

/** Pin a message */
export class messages_updatePinnedMessage_ extends Function_<enums.Updates> {
  static __F: (params: { silent?: true; unpin?: true; pm_oneside?: true; peer: enums.InputPeer; id: number }) => enums.Updates = null as unknown as (params: { silent?: true; unpin?: true; pm_oneside?: true; peer: enums.InputPeer; id: number }) => enums.Updates;
  /** Pin the message silently, without triggering a notification */
  silent?: true;
  /** Whether the message should unpinned or pinned */
  unpin?: true;
  /** Whether the message should only be pinned on the local side of a one-to-one chat */
  pm_oneside?: true;
  /** The peer where to pin the message */
  peer: enums.InputPeer;
  /** The message to pin or unpin */
  id: number;

  protected get [id](): number {
    return 0xD2AAF7EC;
  }

  static get [name](): string {
    return "messages.updatePinnedMessage"
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

/** Vote in a [poll](https://core.telegram.org/constructor/poll) */
export class messages_sendVote_ extends Function_<enums.Updates> {
  static __F: (params: { peer: enums.InputPeer; msg_id: number; options: Array<Uint8Array> }) => enums.Updates = null as unknown as (params: { peer: enums.InputPeer; msg_id: number; options: Array<Uint8Array> }) => enums.Updates;
  /** The chat where the poll was sent */
  peer: enums.InputPeer;
  /** The message ID of the poll */
  msg_id: number;
  /** The options that were chosen */
  options: Array<Uint8Array>;

  protected get [id](): number {
    return 0x10EA6184;
  }

  static get [name](): string {
    return "messages.sendVote"
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

/** Get poll results */
export class messages_getPollResults_ extends Function_<enums.Updates> {
  static __F: (params: { peer: enums.InputPeer; msg_id: number }) => enums.Updates = null as unknown as (params: { peer: enums.InputPeer; msg_id: number }) => enums.Updates;
  /** Peer where the poll was found */
  peer: enums.InputPeer;
  /** Message ID of poll message */
  msg_id: number;

  protected get [id](): number {
    return 0x73BB643B;
  }

  static get [name](): string {
    return "messages.getPollResults"
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

/** Get count of online users in a chat */
export class messages_getOnlines_ extends Function_<enums.ChatOnlines> {
  static __F: (params: { peer: enums.InputPeer }) => enums.ChatOnlines = null as unknown as (params: { peer: enums.InputPeer }) => enums.ChatOnlines;
  /** The chat */
  peer: enums.InputPeer;

  protected get [id](): number {
    return 0x6E2BE050;
  }

  static get [name](): string {
    return "messages.getOnlines"
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

/** Edit the description of a [group/supergroup/channel](https://core.telegram.org/api/channel). */
export class messages_editChatAbout_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; about: string }) => boolean = null as unknown as (params: { peer: enums.InputPeer; about: string }) => boolean;
  /** The [group/supergroup/channel](https://core.telegram.org/api/channel). */
  peer: enums.InputPeer;
  /** The new description */
  about: string;

  protected get [id](): number {
    return 0xDEF60797;
  }

  static get [name](): string {
    return "messages.editChatAbout"
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

/** Edit the default banned rights of a [channel/supergroup/group](https://core.telegram.org/api/channel). */
export class messages_editChatDefaultBannedRights_ extends Function_<enums.Updates> {
  static __F: (params: { peer: enums.InputPeer; banned_rights: enums.ChatBannedRights }) => enums.Updates = null as unknown as (params: { peer: enums.InputPeer; banned_rights: enums.ChatBannedRights }) => enums.Updates;
  /** The peer */
  peer: enums.InputPeer;
  /** The new global rights */
  banned_rights: enums.ChatBannedRights;

  protected get [id](): number {
    return 0xA5866B41;
  }

  static get [name](): string {
    return "messages.editChatDefaultBannedRights"
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

/** Get localized [emoji keywords »](https://core.telegram.org/api/custom-emoji#emoji-keywords). */
export class messages_getEmojiKeywords_ extends Function_<enums.EmojiKeywordsDifference> {
  static __F: (params: { lang_code: string }) => enums.EmojiKeywordsDifference = null as unknown as (params: { lang_code: string }) => enums.EmojiKeywordsDifference;
  /** Language code */
  lang_code: string;

  protected get [id](): number {
    return 0x35A0E062;
  }

  static get [name](): string {
    return "messages.getEmojiKeywords"
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

/** Get changed [emoji keywords »](https://core.telegram.org/api/custom-emoji#emoji-keywords). */
export class messages_getEmojiKeywordsDifference_ extends Function_<enums.EmojiKeywordsDifference> {
  static __F: (params: { lang_code: string; from_version: number }) => enums.EmojiKeywordsDifference = null as unknown as (params: { lang_code: string; from_version: number }) => enums.EmojiKeywordsDifference;
  /** Language code */
  lang_code: string;
  /** Previous stored emoji keyword list `version` */
  from_version: number;

  protected get [id](): number {
    return 0x1508B6AF;
  }

  static get [name](): string {
    return "messages.getEmojiKeywordsDifference"
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

/** Obtain a list of related languages that must be used when fetching [emoji keyword lists »](https://core.telegram.org/api/custom-emoji#emoji-keywords). */
export class messages_getEmojiKeywordsLanguages_ extends Function_<enums.EmojiLanguage[]> {
  static __F: (params: { lang_codes: Array<string> }) => enums.EmojiLanguage[] = null as unknown as (params: { lang_codes: Array<string> }) => enums.EmojiLanguage[];
  /** The user's language codes */
  lang_codes: Array<string>;

  protected get [id](): number {
    return 0x4E9963B2;
  }

  static get [name](): string {
    return "messages.getEmojiKeywordsLanguages"
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

/** Returns an HTTP URL which can be used to automatically log in into translation platform and suggest new [emoji keywords »](https://core.telegram.org/api/custom-emoji#emoji-keywords). The URL will be valid for 30 seconds after generation. */
export class messages_getEmojiURL_ extends Function_<enums.EmojiURL> {
  static __F: (params: { lang_code: string }) => enums.EmojiURL = null as unknown as (params: { lang_code: string }) => enums.EmojiURL;
  /** Language code for which the emoji keywords will be suggested */
  lang_code: string;

  protected get [id](): number {
    return 0xD5B10C26;
  }

  static get [name](): string {
    return "messages.getEmojiURL"
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

/** Get the number of results that would be found by a [messages.search](https://core.telegram.org/method/messages.search) call with the same parameters */
export class messages_getSearchCounters_ extends Function_<enums.messages.SearchCounter[]> {
  static __F: (params: { peer: enums.InputPeer; saved_peer_id?: enums.InputPeer; top_msg_id?: number; filters: Array<enums.MessagesFilter> }) => enums.messages.SearchCounter[] = null as unknown as (params: { peer: enums.InputPeer; saved_peer_id?: enums.InputPeer; top_msg_id?: number; filters: Array<enums.MessagesFilter> }) => enums.messages.SearchCounter[];
  /** Peer where to search */
  peer: enums.InputPeer;
  /** Search within the [saved message dialog »](https://core.telegram.org/api/saved-messages) with this ID. */
  saved_peer_id?: enums.InputPeer;
  /** If set, consider only messages within the specified [forum topic](https://core.telegram.org/api/forum#forum-topics) */
  top_msg_id?: number;
  /** Search filters */
  filters: Array<enums.MessagesFilter>;

  protected get [id](): number {
    return 0x1BBCF300;
  }

  static get [name](): string {
    return "messages.getSearchCounters"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "InputPeer"],
      ["saved_peer_id", types._InputPeer, "flags.2?InputPeer"],
      ["top_msg_id", "number", "flags.0?int"],
      ["filters", [types._MessagesFilter], "Vector<MessagesFilter>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.saved_peer_id ?? null, types._InputPeer, "flags.2?InputPeer"],
      [this.top_msg_id ?? null, "number", "flags.0?int"],
      [this.filters, [types._MessagesFilter], "Vector<MessagesFilter>"],
    ];
  }

  constructor(params: { peer: enums.InputPeer; saved_peer_id?: enums.InputPeer; top_msg_id?: number; filters: Array<enums.MessagesFilter> }) {
    super();
    this.peer = params.peer;
    this.saved_peer_id = params.saved_peer_id;
    this.top_msg_id = params.top_msg_id;
    this.filters = params.filters;
  }
}

/** Get more info about a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization) */
export class messages_requestUrlAuth_ extends Function_<enums.UrlAuthResult> {
  static __F: (params?: { peer?: enums.InputPeer; msg_id?: number; button_id?: number; url?: string }) => enums.UrlAuthResult = null as unknown as (params?: { peer?: enums.InputPeer; msg_id?: number; button_id?: number; url?: string }) => enums.UrlAuthResult;
  /** Peer where the message is located */
  peer?: enums.InputPeer;
  /** The message */
  msg_id?: number;
  /** The ID of the button with the authorization request */
  button_id?: number;
  /** URL used for [link URL authorization, click here for more info »](https://core.telegram.org/api/url-authorization#link-url-authorization) */
  url?: string;

  protected get [id](): number {
    return 0x198FB446;
  }

  static get [name](): string {
    return "messages.requestUrlAuth"
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

/** Use this to accept a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization) */
export class messages_acceptUrlAuth_ extends Function_<enums.UrlAuthResult> {
  static __F: (params?: { write_allowed?: true; peer?: enums.InputPeer; msg_id?: number; button_id?: number; url?: string }) => enums.UrlAuthResult = null as unknown as (params?: { write_allowed?: true; peer?: enums.InputPeer; msg_id?: number; button_id?: number; url?: string }) => enums.UrlAuthResult;
  /** Set this flag to allow the bot to send messages to you (if requested) */
  write_allowed?: true;
  /** The location of the message */
  peer?: enums.InputPeer;
  /** Message ID of the message with the login button */
  msg_id?: number;
  /** ID of the login button */
  button_id?: number;
  /** URL used for [link URL authorization, click here for more info »](https://core.telegram.org/api/url-authorization#link-url-authorization) */
  url?: string;

  protected get [id](): number {
    return 0xB12C7125;
  }

  static get [name](): string {
    return "messages.acceptUrlAuth"
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

/** Should be called after the user hides the [report spam/add as contact bar](https://core.telegram.org/api/action-bar) of a new chat, effectively prevents the user from executing the actions specified in the [action bar »](https://core.telegram.org/api/action-bar). */
export class messages_hidePeerSettingsBar_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer }) => boolean = null as unknown as (params: { peer: enums.InputPeer }) => boolean;
  /** Peer */
  peer: enums.InputPeer;

  protected get [id](): number {
    return 0x4FACB138;
  }

  static get [name](): string {
    return "messages.hidePeerSettingsBar"
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

/** Get scheduled messages */
export class messages_getScheduledHistory_ extends Function_<enums.messages.Messages> {
  static __F: (params: { peer: enums.InputPeer; hash: bigint }) => enums.messages.Messages = null as unknown as (params: { peer: enums.InputPeer; hash: bigint }) => enums.messages.Messages;
  /** Peer */
  peer: enums.InputPeer;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0xF516760B;
  }

  static get [name](): string {
    return "messages.getScheduledHistory"
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

/** Get scheduled messages */
export class messages_getScheduledMessages_ extends Function_<enums.messages.Messages> {
  static __F: (params: { peer: enums.InputPeer; id: Array<number> }) => enums.messages.Messages = null as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => enums.messages.Messages;
  /** Peer */
  peer: enums.InputPeer;
  /** IDs of scheduled messages */
  id: Array<number>;

  protected get [id](): number {
    return 0xBDBB0464;
  }

  static get [name](): string {
    return "messages.getScheduledMessages"
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

/** Send scheduled messages right away */
export class messages_sendScheduledMessages_ extends Function_<enums.Updates> {
  static __F: (params: { peer: enums.InputPeer; id: Array<number> }) => enums.Updates = null as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => enums.Updates;
  /** Peer */
  peer: enums.InputPeer;
  /** Scheduled message IDs */
  id: Array<number>;

  protected get [id](): number {
    return 0xBD38850A;
  }

  static get [name](): string {
    return "messages.sendScheduledMessages"
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

/** Delete scheduled messages */
export class messages_deleteScheduledMessages_ extends Function_<enums.Updates> {
  static __F: (params: { peer: enums.InputPeer; id: Array<number> }) => enums.Updates = null as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => enums.Updates;
  /** Peer */
  peer: enums.InputPeer;
  /** Scheduled message IDs */
  id: Array<number>;

  protected get [id](): number {
    return 0x59AE2B16;
  }

  static get [name](): string {
    return "messages.deleteScheduledMessages"
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

/** Get poll results for non-anonymous polls */
export class messages_getPollVotes_ extends Function_<enums.messages.VotesList> {
  static __F: (params: { peer: enums.InputPeer; id: number; option?: Uint8Array; offset?: string; limit: number }) => enums.messages.VotesList = null as unknown as (params: { peer: enums.InputPeer; id: number; option?: Uint8Array; offset?: string; limit: number }) => enums.messages.VotesList;
  /** Chat where the poll was sent */
  peer: enums.InputPeer;
  /** Message ID */
  id: number;
  /** Get only results for the specified poll `option` */
  option?: Uint8Array;
  /** Offset for results, taken from the `next_offset` field of [messages.votesList](https://core.telegram.org/constructor/messages.votesList), initially an empty string.  
  Note: if no more results are available, the method call will return an empty `next_offset`; thus, avoid providing the `next_offset` returned in [messages.votesList](https://core.telegram.org/constructor/messages.votesList) if it is empty, to avoid an infinite loop. */
  offset?: string;
  /** Number of results to return */
  limit: number;

  protected get [id](): number {
    return 0xB86E380E;
  }

  static get [name](): string {
    return "messages.getPollVotes"
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

/** Apply changes to multiple stickersets */
export class messages_toggleStickerSets_ extends Function_<boolean> {
  static __F: (params: { uninstall?: true; archive?: true; unarchive?: true; stickersets: Array<enums.InputStickerSet> }) => boolean = null as unknown as (params: { uninstall?: true; archive?: true; unarchive?: true; stickersets: Array<enums.InputStickerSet> }) => boolean;
  /** Uninstall the specified stickersets */
  uninstall?: true;
  /** Archive the specified stickersets */
  archive?: true;
  /** Unarchive the specified stickersets */
  unarchive?: true;
  /** Stickersets to act upon */
  stickersets: Array<enums.InputStickerSet>;

  protected get [id](): number {
    return 0xB5052FEA;
  }

  static get [name](): string {
    return "messages.toggleStickerSets"
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

/** Get [folders](https://core.telegram.org/api/folders) */
export class messages_getDialogFilters_ extends Function_<enums.DialogFilter[]> {
  static __F: () => enums.DialogFilter[] = null as unknown as () => enums.DialogFilter[];
  protected get [id](): number {
    return 0xF19ED96D;
  }

  static get [name](): string {
    return "messages.getDialogFilters"
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

/** Get [suggested folders](https://core.telegram.org/api/folders) */
export class messages_getSuggestedDialogFilters_ extends Function_<enums.DialogFilterSuggested[]> {
  static __F: () => enums.DialogFilterSuggested[] = null as unknown as () => enums.DialogFilterSuggested[];
  protected get [id](): number {
    return 0xA29CD42C;
  }

  static get [name](): string {
    return "messages.getSuggestedDialogFilters"
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

/** Update [folder](https://core.telegram.org/api/folders) */
export class messages_updateDialogFilter_ extends Function_<boolean> {
  static __F: (params: { id: number; filter?: enums.DialogFilter }) => boolean = null as unknown as (params: { id: number; filter?: enums.DialogFilter }) => boolean;
  /** [Folder](https://core.telegram.org/api/folders) ID */
  id: number;
  /** [Folder](https://core.telegram.org/api/folders) info */
  filter?: enums.DialogFilter;

  protected get [id](): number {
    return 0x1AD4A04A;
  }

  static get [name](): string {
    return "messages.updateDialogFilter"
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

/** Reorder [folders](https://core.telegram.org/api/folders) */
export class messages_updateDialogFiltersOrder_ extends Function_<boolean> {
  static __F: (params: { order: Array<number> }) => boolean = null as unknown as (params: { order: Array<number> }) => boolean;
  /** New [folder](https://core.telegram.org/api/folders) order */
  order: Array<number>;

  protected get [id](): number {
    return 0xC563C1E4;
  }

  static get [name](): string {
    return "messages.updateDialogFiltersOrder"
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

/** Method for fetching previously featured stickers */
export class messages_getOldFeaturedStickers_ extends Function_<enums.messages.FeaturedStickers> {
  static __F: (params: { offset: number; limit: number; hash: bigint }) => enums.messages.FeaturedStickers = null as unknown as (params: { offset: number; limit: number; hash: bigint }) => enums.messages.FeaturedStickers;
  /** Offset */
  offset: number;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x7ED094A1;
  }

  static get [name](): string {
    return "messages.getOldFeaturedStickers"
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

/** Get messages in a reply thread */
export class messages_getReplies_ extends Function_<enums.messages.Messages> {
  static __F: (params: { peer: enums.InputPeer; msg_id: number; offset_id: number; offset_date: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) => enums.messages.Messages = null as unknown as (params: { peer: enums.InputPeer; msg_id: number; offset_id: number; offset_date: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) => enums.messages.Messages;
  /** Peer */
  peer: enums.InputPeer;
  /** Message ID */
  msg_id: number;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_id: number;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_date: number;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  add_offset: number;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;
  /** If a positive value was transferred, the method will return only messages with ID smaller than max\_id */
  max_id: number;
  /** If a positive value was transferred, the method will return only messages with ID bigger than min\_id */
  min_id: number;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x22DDD30C;
  }

  static get [name](): string {
    return "messages.getReplies"
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

/** Get [discussion message](https://core.telegram.org/api/threads) from the [associated discussion group](https://core.telegram.org/api/discussion) of a channel to show it on top of the comment section, without actually joining the group */
export class messages_getDiscussionMessage_ extends Function_<enums.messages.DiscussionMessage> {
  static __F: (params: { peer: enums.InputPeer; msg_id: number }) => enums.messages.DiscussionMessage = null as unknown as (params: { peer: enums.InputPeer; msg_id: number }) => enums.messages.DiscussionMessage;
  /** [Channel ID](https://core.telegram.org/api/channel) */
  peer: enums.InputPeer;
  /** Message ID */
  msg_id: number;

  protected get [id](): number {
    return 0x446972FD;
  }

  static get [name](): string {
    return "messages.getDiscussionMessage"
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

/** Mark a [thread](https://core.telegram.org/api/threads) as read */
export class messages_readDiscussion_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; msg_id: number; read_max_id: number }) => boolean = null as unknown as (params: { peer: enums.InputPeer; msg_id: number; read_max_id: number }) => boolean;
  /** Group ID */
  peer: enums.InputPeer;
  /** ID of message that started the thread */
  msg_id: number;
  /** ID up to which thread messages were read */
  read_max_id: number;

  protected get [id](): number {
    return 0xF731A9F4;
  }

  static get [name](): string {
    return "messages.readDiscussion"
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

/** [Unpin](https://core.telegram.org/api/pin) all pinned messages */
export class messages_unpinAllMessages_ extends Function_<enums.messages.AffectedHistory> {
  static __F: (params: { peer: enums.InputPeer; top_msg_id?: number }) => enums.messages.AffectedHistory = null as unknown as (params: { peer: enums.InputPeer; top_msg_id?: number }) => enums.messages.AffectedHistory;
  /** Chat where to unpin */
  peer: enums.InputPeer;
  /** [Forum topic](https://core.telegram.org/api/forum#forum-topics) where to unpin */
  top_msg_id?: number;

  protected get [id](): number {
    return 0xEE22B9A8;
  }

  static get [name](): string {
    return "messages.unpinAllMessages"
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

/** Delete a [chat](https://core.telegram.org/api/channel) */
export class messages_deleteChat_ extends Function_<boolean> {
  static __F: (params: { chat_id: bigint }) => boolean = null as unknown as (params: { chat_id: bigint }) => boolean;
  /** Chat ID */
  chat_id: bigint;

  protected get [id](): number {
    return 0x5BD0EE50;
  }

  static get [name](): string {
    return "messages.deleteChat"
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

/** Delete the entire phone call history. */
export class messages_deletePhoneCallHistory_ extends Function_<enums.messages.AffectedFoundMessages> {
  static __F: (params?: { revoke?: true }) => enums.messages.AffectedFoundMessages = null as unknown as (params?: { revoke?: true }) => enums.messages.AffectedFoundMessages;
  /** Whether to remove phone call history for participants as well */
  revoke?: true;

  protected get [id](): number {
    return 0xF9CBE409;
  }

  static get [name](): string {
    return "messages.deletePhoneCallHistory"
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

/** Obtains information about a chat export file, generated by a foreign chat app, [click here for more info about imported chats »](https://core.telegram.org/api/import). */
export class messages_checkHistoryImport_ extends Function_<enums.messages.HistoryImportParsed> {
  static __F: (params: { import_head: string }) => enums.messages.HistoryImportParsed = null as unknown as (params: { import_head: string }) => enums.messages.HistoryImportParsed;
  /** Beginning of the message file; up to 100 lines. */
  import_head: string;

  protected get [id](): number {
    return 0x43FE19F3;
  }

  static get [name](): string {
    return "messages.checkHistoryImport"
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

/** Import chat history from a foreign chat app into a specific Telegram chat, [click here for more info about imported chats »](https://core.telegram.org/api/import). */
export class messages_initHistoryImport_ extends Function_<enums.messages.HistoryImport> {
  static __F: (params: { peer: enums.InputPeer; file: enums.InputFile; media_count: number }) => enums.messages.HistoryImport = null as unknown as (params: { peer: enums.InputPeer; file: enums.InputFile; media_count: number }) => enums.messages.HistoryImport;
  /** The Telegram chat where the [history should be imported](https://core.telegram.org/api/import). */
  peer: enums.InputPeer;
  /** File with messages to import. */
  file: enums.InputFile;
  /** Number of media files associated with the chat that will be uploaded using [messages.uploadImportedMedia](https://core.telegram.org/method/messages.uploadImportedMedia). */
  media_count: number;

  protected get [id](): number {
    return 0x34090C3B;
  }

  static get [name](): string {
    return "messages.initHistoryImport"
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

/** Upload a media file associated with an [imported chat, click here for more info »](https://core.telegram.org/api/import). */
export class messages_uploadImportedMedia_ extends Function_<enums.MessageMedia> {
  static __F: (params: { peer: enums.InputPeer; import_id: bigint; file_name: string; media: enums.InputMedia }) => enums.MessageMedia = null as unknown as (params: { peer: enums.InputPeer; import_id: bigint; file_name: string; media: enums.InputMedia }) => enums.MessageMedia;
  /** The Telegram chat where the media will be imported */
  peer: enums.InputPeer;
  /** Identifier of a [history import session](https://core.telegram.org/api/import), returned by [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport) */
  import_id: bigint;
  /** File name */
  file_name: string;
  /** Media metadata */
  media: enums.InputMedia;

  protected get [id](): number {
    return 0x2A862092;
  }

  static get [name](): string {
    return "messages.uploadImportedMedia"
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

/** Complete the [history import process](https://core.telegram.org/api/import), importing all messages into the chat.  
To be called only after initializing the import with [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport) and uploading all files using [messages.uploadImportedMedia](https://core.telegram.org/method/messages.uploadImportedMedia). */
export class messages_startHistoryImport_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; import_id: bigint }) => boolean = null as unknown as (params: { peer: enums.InputPeer; import_id: bigint }) => boolean;
  /** The Telegram chat where the messages should be [imported, click here for more info »](https://core.telegram.org/api/import) */
  peer: enums.InputPeer;
  /** Identifier of a history import session, returned by [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport). */
  import_id: bigint;

  protected get [id](): number {
    return 0xB43DF344;
  }

  static get [name](): string {
    return "messages.startHistoryImport"
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

/** Get info about the chat invites of a specific chat */
export class messages_getExportedChatInvites_ extends Function_<enums.messages.ExportedChatInvites> {
  static __F: (params: { revoked?: true; peer: enums.InputPeer; admin_id: enums.InputUser; offset_date?: number; offset_link?: string; limit: number }) => enums.messages.ExportedChatInvites = null as unknown as (params: { revoked?: true; peer: enums.InputPeer; admin_id: enums.InputUser; offset_date?: number; offset_link?: string; limit: number }) => enums.messages.ExportedChatInvites;
  /** Whether to fetch revoked chat invites */
  revoked?: true;
  /** Chat */
  peer: enums.InputPeer;
  /** Whether to only fetch chat invites from this admin */
  admin_id: enums.InputUser;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_date?: number;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_link?: string;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0xA2B5A3F6;
  }

  static get [name](): string {
    return "messages.getExportedChatInvites"
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

/** Get info about a chat invite */
export class messages_getExportedChatInvite_ extends Function_<enums.messages.ExportedChatInvite> {
  static __F: (params: { peer: enums.InputPeer; link: string }) => enums.messages.ExportedChatInvite = null as unknown as (params: { peer: enums.InputPeer; link: string }) => enums.messages.ExportedChatInvite;
  /** Chat */
  peer: enums.InputPeer;
  /** Invite link */
  link: string;

  protected get [id](): number {
    return 0x73746F5C;
  }

  static get [name](): string {
    return "messages.getExportedChatInvite"
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

/** Edit an exported chat invite */
export class messages_editExportedChatInvite_ extends Function_<enums.messages.ExportedChatInvite> {
  static __F: (params: { revoked?: true; peer: enums.InputPeer; link: string; expire_date?: number; usage_limit?: number; request_needed?: boolean; title?: string }) => enums.messages.ExportedChatInvite = null as unknown as (params: { revoked?: true; peer: enums.InputPeer; link: string; expire_date?: number; usage_limit?: number; request_needed?: boolean; title?: string }) => enums.messages.ExportedChatInvite;
  /** Whether to revoke the chat invite */
  revoked?: true;
  /** Chat */
  peer: enums.InputPeer;
  /** Invite link */
  link: string;
  /** New expiration date */
  expire_date?: number;
  /** Maximum number of users that can join using this link */
  usage_limit?: number;
  /** Whether admin confirmation is required before admitting each separate user into the chat */
  request_needed?: boolean;
  /** Description of the invite link, visible only to administrators */
  title?: string;

  protected get [id](): number {
    return 0xBDCA2F75;
  }

  static get [name](): string {
    return "messages.editExportedChatInvite"
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

/** Delete all revoked chat invites */
export class messages_deleteRevokedExportedChatInvites_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; admin_id: enums.InputUser }) => boolean = null as unknown as (params: { peer: enums.InputPeer; admin_id: enums.InputUser }) => boolean;
  /** Chat */
  peer: enums.InputPeer;
  /** ID of the admin that originally generated the revoked chat invites */
  admin_id: enums.InputUser;

  protected get [id](): number {
    return 0x56987BD5;
  }

  static get [name](): string {
    return "messages.deleteRevokedExportedChatInvites"
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

/** Delete a chat invite */
export class messages_deleteExportedChatInvite_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; link: string }) => boolean = null as unknown as (params: { peer: enums.InputPeer; link: string }) => boolean;
  /** Peer */
  peer: enums.InputPeer;
  /** Invite link */
  link: string;

  protected get [id](): number {
    return 0xD464A42B;
  }

  static get [name](): string {
    return "messages.deleteExportedChatInvite"
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

/** Get info about chat invites generated by admins. */
export class messages_getAdminsWithInvites_ extends Function_<enums.messages.ChatAdminsWithInvites> {
  static __F: (params: { peer: enums.InputPeer }) => enums.messages.ChatAdminsWithInvites = null as unknown as (params: { peer: enums.InputPeer }) => enums.messages.ChatAdminsWithInvites;
  /** Chat */
  peer: enums.InputPeer;

  protected get [id](): number {
    return 0x3920E6EF;
  }

  static get [name](): string {
    return "messages.getAdminsWithInvites"
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

/** Get info about the users that joined the chat using a specific chat invite */
export class messages_getChatInviteImporters_ extends Function_<enums.messages.ChatInviteImporters> {
  static __F: (params: { requested?: true; peer: enums.InputPeer; link?: string; q?: string; offset_date: number; offset_user: enums.InputUser; limit: number }) => enums.messages.ChatInviteImporters = null as unknown as (params: { requested?: true; peer: enums.InputPeer; link?: string; q?: string; offset_date: number; offset_user: enums.InputUser; limit: number }) => enums.messages.ChatInviteImporters;
  /** If set, only returns info about users with pending [join requests »](https://core.telegram.org/api/invites#join-requests) */
  requested?: true;
  /** Chat */
  peer: enums.InputPeer;
  /** Invite link */
  link?: string;
  /** Search for a user in the pending [join requests »](https://core.telegram.org/api/invites#join-requests) list: only available when the `requested` flag is set, cannot be used together with a specific `link`. */
  q?: string;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_date: number;
  /** User ID for [pagination](https://core.telegram.org/api/offsets): if set, `offset_date` must also be set. */
  offset_user: enums.InputUser;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0xDF04DD4E;
  }

  static get [name](): string {
    return "messages.getChatInviteImporters"
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

/** Set maximum Time-To-Live of all messages in the specified chat */
export class messages_setHistoryTTL_ extends Function_<enums.Updates> {
  static __F: (params: { peer: enums.InputPeer; period: number }) => enums.Updates = null as unknown as (params: { peer: enums.InputPeer; period: number }) => enums.Updates;
  /** The dialog */
  peer: enums.InputPeer;
  /** Automatically delete all messages sent in the chat after this many seconds */
  period: number;

  protected get [id](): number {
    return 0xB80E5FE4;
  }

  static get [name](): string {
    return "messages.setHistoryTTL"
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

/** Check whether chat history exported from another chat app can be [imported into a specific Telegram chat, click here for more info »](https://core.telegram.org/api/import). */
export class messages_checkHistoryImportPeer_ extends Function_<enums.messages.CheckedHistoryImportPeer> {
  static __F: (params: { peer: enums.InputPeer }) => enums.messages.CheckedHistoryImportPeer = null as unknown as (params: { peer: enums.InputPeer }) => enums.messages.CheckedHistoryImportPeer;
  /** The chat where we want to [import history »](https://core.telegram.org/api/import). */
  peer: enums.InputPeer;

  protected get [id](): number {
    return 0x5DC60F03;
  }

  static get [name](): string {
    return "messages.checkHistoryImportPeer"
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

/** Change the chat theme of a certain chat */
export class messages_setChatTheme_ extends Function_<enums.Updates> {
  static __F: (params: { peer: enums.InputPeer; emoticon: string }) => enums.Updates = null as unknown as (params: { peer: enums.InputPeer; emoticon: string }) => enums.Updates;
  /** Private chat where to change theme */
  peer: enums.InputPeer;
  /** Emoji, identifying a specific chat theme; a list of chat themes can be fetched using [account.getChatThemes](https://core.telegram.org/method/account.getChatThemes) */
  emoticon: string;

  protected get [id](): number {
    return 0xE63BE13F;
  }

  static get [name](): string {
    return "messages.setChatTheme"
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

/** Get which users read a specific message: only available for groups and supergroups with less than [`chat_read_mark_size_threshold` members](https://core.telegram.org/api/config#chat-read-mark-size-threshold), read receipts will be stored for [`chat_read_mark_expire_period` seconds after the message was sent](https://core.telegram.org/api/config#chat-read-mark-expire-period), see [client configuration for more info »](https://core.telegram.org/api/config#client-configuration). */
export class messages_getMessageReadParticipants_ extends Function_<enums.ReadParticipantDate[]> {
  static __F: (params: { peer: enums.InputPeer; msg_id: number }) => enums.ReadParticipantDate[] = null as unknown as (params: { peer: enums.InputPeer; msg_id: number }) => enums.ReadParticipantDate[];
  /** Dialog */
  peer: enums.InputPeer;
  /** Message ID */
  msg_id: number;

  protected get [id](): number {
    return 0x31C1C44F;
  }

  static get [name](): string {
    return "messages.getMessageReadParticipants"
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

/** Returns information about the next messages of the specified type in the chat split by days. */
export class messages_getSearchResultsCalendar_ extends Function_<enums.messages.SearchResultsCalendar> {
  static __F: (params: { peer: enums.InputPeer; saved_peer_id?: enums.InputPeer; filter: enums.MessagesFilter; offset_id: number; offset_date: number }) => enums.messages.SearchResultsCalendar = null as unknown as (params: { peer: enums.InputPeer; saved_peer_id?: enums.InputPeer; filter: enums.MessagesFilter; offset_id: number; offset_date: number }) => enums.messages.SearchResultsCalendar;
  /** Peer where to search */
  peer: enums.InputPeer;
  /** Search within the [saved message dialog »](https://core.telegram.org/api/saved-messages) with this ID. */
  saved_peer_id?: enums.InputPeer;
  /** Message filter, [inputMessagesFilterEmpty](https://core.telegram.org/constructor/inputMessagesFilterEmpty), [inputMessagesFilterMyMentions](https://core.telegram.org/constructor/inputMessagesFilterMyMentions) filters are not supported by this method. */
  filter: enums.MessagesFilter;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_id: number;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_date: number;

  protected get [id](): number {
    return 0x6AA3F6BD;
  }

  static get [name](): string {
    return "messages.getSearchResultsCalendar"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "InputPeer"],
      ["saved_peer_id", types._InputPeer, "flags.2?InputPeer"],
      ["filter", types._MessagesFilter, "MessagesFilter"],
      ["offset_id", "number", "int"],
      ["offset_date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.saved_peer_id ?? null, types._InputPeer, "flags.2?InputPeer"],
      [this.filter, types._MessagesFilter, "MessagesFilter"],
      [this.offset_id, "number", "int"],
      [this.offset_date, "number", "int"],
    ];
  }

  constructor(params: { peer: enums.InputPeer; saved_peer_id?: enums.InputPeer; filter: enums.MessagesFilter; offset_id: number; offset_date: number }) {
    super();
    this.peer = params.peer;
    this.saved_peer_id = params.saved_peer_id;
    this.filter = params.filter;
    this.offset_id = params.offset_id;
    this.offset_date = params.offset_date;
  }
}

/** Returns sparse positions of messages of the specified type in the chat to be used for shared media scroll implementation. */
export class messages_getSearchResultsPositions_ extends Function_<enums.messages.SearchResultsPositions> {
  static __F: (params: { peer: enums.InputPeer; saved_peer_id?: enums.InputPeer; filter: enums.MessagesFilter; offset_id: number; limit: number }) => enums.messages.SearchResultsPositions = null as unknown as (params: { peer: enums.InputPeer; saved_peer_id?: enums.InputPeer; filter: enums.MessagesFilter; offset_id: number; limit: number }) => enums.messages.SearchResultsPositions;
  /** Peer where to search */
  peer: enums.InputPeer;
  /** Search within the [saved message dialog »](https://core.telegram.org/api/saved-messages) with this ID. */
  saved_peer_id?: enums.InputPeer;
  /** Message filter, [inputMessagesFilterEmpty](https://core.telegram.org/constructor/inputMessagesFilterEmpty), [inputMessagesFilterMyMentions](https://core.telegram.org/constructor/inputMessagesFilterMyMentions) filters are not supported by this method. */
  filter: enums.MessagesFilter;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_id: number;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0x9C7F2F10;
  }

  static get [name](): string {
    return "messages.getSearchResultsPositions"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "InputPeer"],
      ["saved_peer_id", types._InputPeer, "flags.2?InputPeer"],
      ["filter", types._MessagesFilter, "MessagesFilter"],
      ["offset_id", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.saved_peer_id ?? null, types._InputPeer, "flags.2?InputPeer"],
      [this.filter, types._MessagesFilter, "MessagesFilter"],
      [this.offset_id, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { peer: enums.InputPeer; saved_peer_id?: enums.InputPeer; filter: enums.MessagesFilter; offset_id: number; limit: number }) {
    super();
    this.peer = params.peer;
    this.saved_peer_id = params.saved_peer_id;
    this.filter = params.filter;
    this.offset_id = params.offset_id;
    this.limit = params.limit;
  }
}

/** Dismiss or approve a chat [join request](https://core.telegram.org/api/invites#join-requests) related to a specific chat or channel. */
export class messages_hideChatJoinRequest_ extends Function_<enums.Updates> {
  static __F: (params: { approved?: true; peer: enums.InputPeer; user_id: enums.InputUser }) => enums.Updates = null as unknown as (params: { approved?: true; peer: enums.InputPeer; user_id: enums.InputUser }) => enums.Updates;
  /** Whether to dismiss or approve the chat [join request »](https://core.telegram.org/api/invites#join-requests) */
  approved?: true;
  /** The chat or channel */
  peer: enums.InputPeer;
  /** The user whose [join request »](https://core.telegram.org/api/invites#join-requests) should be dismissed or approved */
  user_id: enums.InputUser;

  protected get [id](): number {
    return 0x7FE7E815;
  }

  static get [name](): string {
    return "messages.hideChatJoinRequest"
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

/** Dismiss or approve all [join requests](https://core.telegram.org/api/invites#join-requests) related to a specific chat or channel. */
export class messages_hideAllChatJoinRequests_ extends Function_<enums.Updates> {
  static __F: (params: { approved?: true; peer: enums.InputPeer; link?: string }) => enums.Updates = null as unknown as (params: { approved?: true; peer: enums.InputPeer; link?: string }) => enums.Updates;
  /** Whether to dismiss or approve all chat [join requests »](https://core.telegram.org/api/invites#join-requests) */
  approved?: true;
  /** The chat or channel */
  peer: enums.InputPeer;
  /** Only dismiss or approve [join requests »](https://core.telegram.org/api/invites#join-requests) initiated using this invite link */
  link?: string;

  protected get [id](): number {
    return 0xE085F4EA;
  }

  static get [name](): string {
    return "messages.hideAllChatJoinRequests"
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

/** Enable or disable [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) on a channel or chat */
export class messages_toggleNoForwards_ extends Function_<enums.Updates> {
  static __F: (params: { peer: enums.InputPeer; enabled: boolean }) => enums.Updates = null as unknown as (params: { peer: enums.InputPeer; enabled: boolean }) => enums.Updates;
  /** The chat or channel */
  peer: enums.InputPeer;
  /** Enable or disable content protection */
  enabled: boolean;

  protected get [id](): number {
    return 0xB11EAFA2;
  }

  static get [name](): string {
    return "messages.toggleNoForwards"
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

/** Change the default peer that should be used when sending messages, reactions, poll votes to a specific group */
export class messages_saveDefaultSendAs_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; send_as: enums.InputPeer }) => boolean = null as unknown as (params: { peer: enums.InputPeer; send_as: enums.InputPeer }) => boolean;
  /** Group */
  peer: enums.InputPeer;
  /** The default peer that should be used when sending messages to the group */
  send_as: enums.InputPeer;

  protected get [id](): number {
    return 0xCCFDDF96;
  }

  static get [name](): string {
    return "messages.saveDefaultSendAs"
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

/** React to message. */
export class messages_sendReaction_ extends Function_<enums.Updates> {
  static __F: (params: { big?: true; add_to_recent?: true; peer: enums.InputPeer; msg_id: number; reaction?: Array<enums.Reaction> }) => enums.Updates = null as unknown as (params: { big?: true; add_to_recent?: true; peer: enums.InputPeer; msg_id: number; reaction?: Array<enums.Reaction> }) => enums.Updates;
  /** Whether a bigger and longer reaction should be shown */
  big?: true;
  /** Whether to add this reaction to the [recent reactions list »](https://core.telegram.org/api/reactions#recent-reactions). */
  add_to_recent?: true;
  /** Peer */
  peer: enums.InputPeer;
  /** Message ID to react to */
  msg_id: number;
  /** A list of reactions */
  reaction?: Array<enums.Reaction>;

  protected get [id](): number {
    return 0xD30D78D4;
  }

  static get [name](): string {
    return "messages.sendReaction"
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

/** Get [message reactions »](https://core.telegram.org/api/reactions) */
export class messages_getMessagesReactions_ extends Function_<enums.Updates> {
  static __F: (params: { peer: enums.InputPeer; id: Array<number> }) => enums.Updates = null as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => enums.Updates;
  /** Peer */
  peer: enums.InputPeer;
  /** Message IDs */
  id: Array<number>;

  protected get [id](): number {
    return 0x8BBA90E6;
  }

  static get [name](): string {
    return "messages.getMessagesReactions"
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

/** Get [message reaction](https://core.telegram.org/api/reactions) list, along with the sender of each reaction. */
export class messages_getMessageReactionsList_ extends Function_<enums.messages.MessageReactionsList> {
  static __F: (params: { peer: enums.InputPeer; id: number; reaction?: enums.Reaction; offset?: string; limit: number }) => enums.messages.MessageReactionsList = null as unknown as (params: { peer: enums.InputPeer; id: number; reaction?: enums.Reaction; offset?: string; limit: number }) => enums.messages.MessageReactionsList;
  /** Peer */
  peer: enums.InputPeer;
  /** Message ID */
  id: number;
  /** Get only reactions of this type */
  reaction?: enums.Reaction;
  /** Offset for pagination (taken from the `next_offset` field of the returned [messages.MessageReactionsList](https://core.telegram.org/type/messages.MessageReactionsList)); empty in the first request. */
  offset?: string;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0x461B3F48;
  }

  static get [name](): string {
    return "messages.getMessageReactionsList"
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

/** Change the set of [message reactions »](https://core.telegram.org/api/reactions) that can be used in a certain group, supergroup or channel */
export class messages_setChatAvailableReactions_ extends Function_<enums.Updates> {
  static __F: (params: { peer: enums.InputPeer; available_reactions: enums.ChatReactions }) => enums.Updates = null as unknown as (params: { peer: enums.InputPeer; available_reactions: enums.ChatReactions }) => enums.Updates;
  /** Group where to apply changes */
  peer: enums.InputPeer;
  /** Allowed reaction emojis */
  available_reactions: enums.ChatReactions;

  protected get [id](): number {
    return 0xFEB16771;
  }

  static get [name](): string {
    return "messages.setChatAvailableReactions"
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

/** Obtain available [message reactions »](https://core.telegram.org/api/reactions) */
export class messages_getAvailableReactions_ extends Function_<enums.messages.AvailableReactions> {
  static __F: (params: { hash: number }) => enums.messages.AvailableReactions = null as unknown as (params: { hash: number }) => enums.messages.AvailableReactions;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: number;

  protected get [id](): number {
    return 0x18DEA0AC;
  }

  static get [name](): string {
    return "messages.getAvailableReactions"
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

/** Change default emoji reaction to use in the quick reaction menu: the value is synced across devices and can be fetched using [help.getConfig, `reactions_default` field](https://core.telegram.org/method/help.getConfig). */
export class messages_setDefaultReaction_ extends Function_<boolean> {
  static __F: (params: { reaction: enums.Reaction }) => boolean = null as unknown as (params: { reaction: enums.Reaction }) => boolean;
  /** New emoji reaction */
  reaction: enums.Reaction;

  protected get [id](): number {
    return 0x4F47A016;
  }

  static get [name](): string {
    return "messages.setDefaultReaction"
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

/** Translate a given text. */
export class messages_translateText_ extends Function_<enums.messages.TranslatedText> {
  static __F: (params: { peer?: enums.InputPeer; id?: Array<number>; text?: Array<enums.TextWithEntities>; to_lang: string }) => enums.messages.TranslatedText = null as unknown as (params: { peer?: enums.InputPeer; id?: Array<number>; text?: Array<enums.TextWithEntities>; to_lang: string }) => enums.messages.TranslatedText;
  /** If the text is a chat message, the peer ID */
  peer?: enums.InputPeer;
  /** A list of message IDs to translate */
  id?: Array<number>;
  /** A list of styled messages to translate */
  text?: Array<enums.TextWithEntities>;
  /** Two-letter ISO 639-1 language code of the language to which the message is translated */
  to_lang: string;

  protected get [id](): number {
    return 0x63183030;
  }

  static get [name](): string {
    return "messages.translateText"
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

/** Get unread reactions to messages you sent */
export class messages_getUnreadReactions_ extends Function_<enums.messages.Messages> {
  static __F: (params: { peer: enums.InputPeer; top_msg_id?: number; offset_id: number; add_offset: number; limit: number; max_id: number; min_id: number }) => enums.messages.Messages = null as unknown as (params: { peer: enums.InputPeer; top_msg_id?: number; offset_id: number; add_offset: number; limit: number; max_id: number; min_id: number }) => enums.messages.Messages;
  /** Peer */
  peer: enums.InputPeer;
  /** If set, considers only reactions to messages within the specified [forum topic](https://core.telegram.org/api/forum#forum-topics) */
  top_msg_id?: number;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_id: number;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  add_offset: number;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;
  /** Only return reactions for messages up until this message ID */
  max_id: number;
  /** Only return reactions for messages starting from this message ID */
  min_id: number;

  protected get [id](): number {
    return 0x3223495B;
  }

  static get [name](): string {
    return "messages.getUnreadReactions"
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

/** Mark [message reactions »](https://core.telegram.org/api/reactions) as read */
export class messages_readReactions_ extends Function_<enums.messages.AffectedHistory> {
  static __F: (params: { peer: enums.InputPeer; top_msg_id?: number }) => enums.messages.AffectedHistory = null as unknown as (params: { peer: enums.InputPeer; top_msg_id?: number }) => enums.messages.AffectedHistory;
  /** Peer */
  peer: enums.InputPeer;
  /** Mark as read only reactions to messages within the specified [forum topic](https://core.telegram.org/api/forum#forum-topics) */
  top_msg_id?: number;

  protected get [id](): number {
    return 0x54AA7F8E;
  }

  static get [name](): string {
    return "messages.readReactions"
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

/** View and search recently sent media.  
This method does not support pagination. */
export class messages_searchSentMedia_ extends Function_<enums.messages.Messages> {
  static __F: (params: { q: string; filter: enums.MessagesFilter; limit: number }) => enums.messages.Messages = null as unknown as (params: { q: string; filter: enums.MessagesFilter; limit: number }) => enums.messages.Messages;
  /** Optional search query */
  q: string;
  /** Message filter */
  filter: enums.MessagesFilter;
  /** Maximum number of results to return (max 100). */
  limit: number;

  protected get [id](): number {
    return 0x107E31A0;
  }

  static get [name](): string {
    return "messages.searchSentMedia"
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

/** Returns installed attachment menu [bot mini apps »](https://core.telegram.org/api/bots/attach) */
export class messages_getAttachMenuBots_ extends Function_<enums.AttachMenuBots> {
  static __F: (params: { hash: bigint }) => enums.AttachMenuBots = null as unknown as (params: { hash: bigint }) => enums.AttachMenuBots;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x16FCC2CB;
  }

  static get [name](): string {
    return "messages.getAttachMenuBots"
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

/** Returns attachment menu entry for a [bot mini app that can be launched from the attachment menu »](https://core.telegram.org/api/bots/attach) */
export class messages_getAttachMenuBot_ extends Function_<enums.AttachMenuBotsBot> {
  static __F: (params: { bot: enums.InputUser }) => enums.AttachMenuBotsBot = null as unknown as (params: { bot: enums.InputUser }) => enums.AttachMenuBotsBot;
  /** Bot ID */
  bot: enums.InputUser;

  protected get [id](): number {
    return 0x77216192;
  }

  static get [name](): string {
    return "messages.getAttachMenuBot"
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

/** Enable or disable [web bot attachment menu »](https://core.telegram.org/api/bots/attach) */
export class messages_toggleBotInAttachMenu_ extends Function_<boolean> {
  static __F: (params: { write_allowed?: true; bot: enums.InputUser; enabled: boolean }) => boolean = null as unknown as (params: { write_allowed?: true; bot: enums.InputUser; enabled: boolean }) => boolean;
  /** Whether the user authorizes the bot to write messages to them, if requested by [attachMenuBot](https://core.telegram.org/constructor/attachMenuBot).`request_write_access` */
  write_allowed?: true;
  /** Bot ID */
  bot: enums.InputUser;
  /** Toggle */
  enabled: boolean;

  protected get [id](): number {
    return 0x69F59D69;
  }

  static get [name](): string {
    return "messages.toggleBotInAttachMenu"
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

/** Open a [bot mini app](https://core.telegram.org/bots/webapps), sending over user information after user confirmation. */
export class messages_requestWebView_ extends Function_<enums.WebViewResult> {
  static __F: (params: { from_bot_menu?: true; silent?: true; peer: enums.InputPeer; bot: enums.InputUser; url?: string; start_param?: string; theme_params?: enums.DataJSON; platform: string; reply_to?: enums.InputReplyTo; send_as?: enums.InputPeer }) => enums.WebViewResult = null as unknown as (params: { from_bot_menu?: true; silent?: true; peer: enums.InputPeer; bot: enums.InputUser; url?: string; start_param?: string; theme_params?: enums.DataJSON; platform: string; reply_to?: enums.InputReplyTo; send_as?: enums.InputPeer }) => enums.WebViewResult;
  /** Whether the webview was opened by clicking on the bot's [menu button »](https://core.telegram.org/api/bots/menu). */
  from_bot_menu?: true;
  /** Whether the inline message that will be sent by the bot on behalf of the user once the web app interaction is [terminated](https://core.telegram.org/method/messages.sendWebViewResultMessage) should be sent silently (no notifications for the receivers). */
  silent?: true;
  /** Dialog where the web app is being opened, and where the resulting message will be sent (see the [docs for more info »](https://core.telegram.org/api/bots/webapps)). */
  peer: enums.InputPeer;
  /** Bot that owns the [web app](https://core.telegram.org/api/bots/webapps) */
  bot: enums.InputUser;
  /** [Web app URL](https://core.telegram.org/api/bots/webapps) */
  url?: string;
  /** If the web app was opened from the attachment menu using a [attachment menu deep link](https://core.telegram.org/api/links#bot-attachment-or-side-menu-links), `start_param` should contain the `data` from the `startattach` parameter. */
  start_param?: string;
  /** [Theme parameters »](https://core.telegram.org/api/bots/webapps#theme-parameters) */
  theme_params?: enums.DataJSON;
  /** Short name of the application; 0-64 English letters, digits, and underscores */
  platform: string;
  /** If set, indicates that the inline message that will be sent by the bot on behalf of the user once the web app interaction is [terminated](https://core.telegram.org/method/messages.sendWebViewResultMessage) should be sent in reply to the specified message or story. */
  reply_to?: enums.InputReplyTo;
  /** Open the web app as the specified peer, sending the resulting the message as the specified peer. */
  send_as?: enums.InputPeer;

  protected get [id](): number {
    return 0x269DC2C1;
  }

  static get [name](): string {
    return "messages.requestWebView"
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

/** Indicate to the server (from the user side) that the user is still using a web app. */
export class messages_prolongWebView_ extends Function_<boolean> {
  static __F: (params: { silent?: true; peer: enums.InputPeer; bot: enums.InputUser; query_id: bigint; reply_to?: enums.InputReplyTo; send_as?: enums.InputPeer }) => boolean = null as unknown as (params: { silent?: true; peer: enums.InputPeer; bot: enums.InputUser; query_id: bigint; reply_to?: enums.InputReplyTo; send_as?: enums.InputPeer }) => boolean;
  /** Whether the inline message that will be sent by the bot on behalf of the user once the web app interaction is [terminated](https://core.telegram.org/method/messages.sendWebViewResultMessage) should be sent silently (no notifications for the receivers). */
  silent?: true;
  /** Dialog where the web app was opened. */
  peer: enums.InputPeer;
  /** Bot that owns the [web app](https://core.telegram.org/api/bots/webapps) */
  bot: enums.InputUser;
  /** Web app interaction ID obtained from [messages.requestWebView](https://core.telegram.org/method/messages.requestWebView) */
  query_id: bigint;
  /** If set, indicates that the inline message that will be sent by the bot on behalf of the user once the web app interaction is [terminated](https://core.telegram.org/method/messages.sendWebViewResultMessage) should be sent in reply to the specified message or story. */
  reply_to?: enums.InputReplyTo;
  /** Open the web app as the specified peer */
  send_as?: enums.InputPeer;

  protected get [id](): number {
    return 0xB0D81A83;
  }

  static get [name](): string {
    return "messages.prolongWebView"
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

/** Open a [bot mini app](https://core.telegram.org/api/bots/webapps). */
export class messages_requestSimpleWebView_ extends Function_<enums.SimpleWebViewResult> {
  static __F: (params: { from_switch_webview?: true; from_side_menu?: true; bot: enums.InputUser; url?: string; start_param?: string; theme_params?: enums.DataJSON; platform: string }) => enums.SimpleWebViewResult = null as unknown as (params: { from_switch_webview?: true; from_side_menu?: true; bot: enums.InputUser; url?: string; start_param?: string; theme_params?: enums.DataJSON; platform: string }) => enums.SimpleWebViewResult;
  /** Whether the webapp was opened by clicking on the `switch_webview` button shown on top of the inline results list returned by [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults). */
  from_switch_webview?: true;
  /** Set this flag if opening the Mini App from the installed [side menu entry »](https://core.telegram.org/api/bots/attach) or from a [Mini App link »](https://core.telegram.org/api/links#mini-app-links). */
  from_side_menu?: true;
  /** Bot that owns the mini app */
  bot: enums.InputUser;
  /** Web app URL, if opening from a keyboard button or inline result */
  url?: string;
  /** Start parameter, if opening from a [Mini App link »](https://core.telegram.org/api/links#mini-app-links). */
  start_param?: string;
  /** [Theme parameters »](https://core.telegram.org/api/bots/webapps#theme-parameters) */
  theme_params?: enums.DataJSON;
  /** Short name of the application; 0-64 English letters, digits, and underscores */
  platform: string;

  protected get [id](): number {
    return 0x1A46500A;
  }

  static get [name](): string {
    return "messages.requestSimpleWebView"
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

/** Terminate webview interaction started with [messages.requestWebView](https://core.telegram.org/method/messages.requestWebView), sending the specified message to the chat on behalf of the user. */
export class messages_sendWebViewResultMessage_ extends Function_<enums.WebViewMessageSent> {
  static __F: (params: { bot_query_id: string; result: enums.InputBotInlineResult }) => enums.WebViewMessageSent = null as unknown as (params: { bot_query_id: string; result: enums.InputBotInlineResult }) => enums.WebViewMessageSent;
  /** Webview interaction ID obtained from [messages.requestWebView](https://core.telegram.org/method/messages.requestWebView) */
  bot_query_id: string;
  /** Message to send */
  result: enums.InputBotInlineResult;

  protected get [id](): number {
    return 0x0A4314F5;
  }

  static get [name](): string {
    return "messages.sendWebViewResultMessage"
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

/** Used by the user to relay data from an opened [reply keyboard bot mini app](https://core.telegram.org/api/bots/webapps) to the bot that owns it. */
export class messages_sendWebViewData_ extends Function_<enums.Updates> {
  static __F: (params: { bot: enums.InputUser; random_id: bigint; button_text: string; data: string }) => enums.Updates = null as unknown as (params: { bot: enums.InputUser; random_id: bigint; button_text: string; data: string }) => enums.Updates;
  /** Bot that owns the web app */
  bot: enums.InputUser;
  /** Unique client message ID to prevent duplicate sending of the same event */
  random_id: bigint;
  /** Text of the [keyboardButtonSimpleWebView](https://core.telegram.org/constructor/keyboardButtonSimpleWebView) that was pressed to open the web app. */
  button_text: string;
  /** Data to relay to the bot, obtained from a [`web_app_data_send` JS event](https://core.telegram.org/api/web-events#web-app-data-send). */
  data: string;

  protected get [id](): number {
    return 0xDC0242C8;
  }

  static get [name](): string {
    return "messages.sendWebViewData"
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

/** [Transcribe voice message](https://core.telegram.org/api/transcribe) */
export class messages_transcribeAudio_ extends Function_<enums.messages.TranscribedAudio> {
  static __F: (params: { peer: enums.InputPeer; msg_id: number }) => enums.messages.TranscribedAudio = null as unknown as (params: { peer: enums.InputPeer; msg_id: number }) => enums.messages.TranscribedAudio;
  /** Peer ID where the voice message was sent */
  peer: enums.InputPeer;
  /** Voice message ID */
  msg_id: number;

  protected get [id](): number {
    return 0x269E9A49;
  }

  static get [name](): string {
    return "messages.transcribeAudio"
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

/** Rate [transcribed voice message](https://core.telegram.org/api/transcribe) */
export class messages_rateTranscribedAudio_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; msg_id: number; transcription_id: bigint; good: boolean }) => boolean = null as unknown as (params: { peer: enums.InputPeer; msg_id: number; transcription_id: bigint; good: boolean }) => boolean;
  /** Peer where the voice message was sent */
  peer: enums.InputPeer;
  /** Message ID */
  msg_id: number;
  /** Transcription ID */
  transcription_id: bigint;
  /** Whether the transcription was correct */
  good: boolean;

  protected get [id](): number {
    return 0x7F1D072F;
  }

  static get [name](): string {
    return "messages.rateTranscribedAudio"
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

/** Fetch [custom emoji stickers »](https://core.telegram.org/api/custom-emoji). */
export class messages_getCustomEmojiDocuments_ extends Function_<enums.Document[]> {
  static __F: (params: { document_id: Array<bigint> }) => enums.Document[] = null as unknown as (params: { document_id: Array<bigint> }) => enums.Document[];
  /** [Custom emoji](https://core.telegram.org/api/custom-emoji) IDs from a [messageEntityCustomEmoji](https://core.telegram.org/constructor/messageEntityCustomEmoji). */
  document_id: Array<bigint>;

  protected get [id](): number {
    return 0xD9AB0F54;
  }

  static get [name](): string {
    return "messages.getCustomEmojiDocuments"
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

/** Gets the list of currently installed [custom emoji stickersets](https://core.telegram.org/api/custom-emoji). */
export class messages_getEmojiStickers_ extends Function_<enums.messages.AllStickers> {
  static __F: (params: { hash: bigint }) => enums.messages.AllStickers = null as unknown as (params: { hash: bigint }) => enums.messages.AllStickers;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0xFBFCA18F;
  }

  static get [name](): string {
    return "messages.getEmojiStickers"
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

/** Gets featured custom emoji stickersets. */
export class messages_getFeaturedEmojiStickers_ extends Function_<enums.messages.FeaturedStickers> {
  static __F: (params: { hash: bigint }) => enums.messages.FeaturedStickers = null as unknown as (params: { hash: bigint }) => enums.messages.FeaturedStickers;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x0ECF6736;
  }

  static get [name](): string {
    return "messages.getFeaturedEmojiStickers"
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

/** Report a [message reaction](https://core.telegram.org/api/reactions) */
export class messages_reportReaction_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; id: number; reaction_peer: enums.InputPeer }) => boolean = null as unknown as (params: { peer: enums.InputPeer; id: number; reaction_peer: enums.InputPeer }) => boolean;
  /** Peer where the message was sent */
  peer: enums.InputPeer;
  /** Message ID */
  id: number;
  /** Peer that sent the reaction */
  reaction_peer: enums.InputPeer;

  protected get [id](): number {
    return 0x3F64C076;
  }

  static get [name](): string {
    return "messages.reportReaction"
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

/** Got popular [message reactions](https://core.telegram.org/api/reactions) */
export class messages_getTopReactions_ extends Function_<enums.messages.Reactions> {
  static __F: (params: { limit: number; hash: bigint }) => enums.messages.Reactions = null as unknown as (params: { limit: number; hash: bigint }) => enums.messages.Reactions;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0xBB8125BA;
  }

  static get [name](): string {
    return "messages.getTopReactions"
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

/** Get recently used [message reactions](https://core.telegram.org/api/reactions) */
export class messages_getRecentReactions_ extends Function_<enums.messages.Reactions> {
  static __F: (params: { limit: number; hash: bigint }) => enums.messages.Reactions = null as unknown as (params: { limit: number; hash: bigint }) => enums.messages.Reactions;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x39461DB2;
  }

  static get [name](): string {
    return "messages.getRecentReactions"
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

/** Clear recently used [message reactions](https://core.telegram.org/api/reactions) */
export class messages_clearRecentReactions_ extends Function_<boolean> {
  static __F: () => boolean = null as unknown as () => boolean;
  protected get [id](): number {
    return 0x9DFEEFB4;
  }

  static get [name](): string {
    return "messages.clearRecentReactions"
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

/** Get information about extended media */
export class messages_getExtendedMedia_ extends Function_<enums.Updates> {
  static __F: (params: { peer: enums.InputPeer; id: Array<number> }) => enums.Updates = null as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => enums.Updates;
  /** Peer */
  peer: enums.InputPeer;
  /** Message IDs */
  id: Array<number>;

  protected get [id](): number {
    return 0x84F80814;
  }

  static get [name](): string {
    return "messages.getExtendedMedia"
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

/** Changes the default value of the Time-To-Live setting, applied to all new chats. */
export class messages_setDefaultHistoryTTL_ extends Function_<boolean> {
  static __F: (params: { period: number }) => boolean = null as unknown as (params: { period: number }) => boolean;
  /** The new default Time-To-Live of all messages sent in new chats. */
  period: number;

  protected get [id](): number {
    return 0x9EB51445;
  }

  static get [name](): string {
    return "messages.setDefaultHistoryTTL"
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

/** Gets the default value of the Time-To-Live setting, applied to all new chats. */
export class messages_getDefaultHistoryTTL_ extends Function_<enums.DefaultHistoryTTL> {
  static __F: () => enums.DefaultHistoryTTL = null as unknown as () => enums.DefaultHistoryTTL;
  protected get [id](): number {
    return 0x658B7188;
  }

  static get [name](): string {
    return "messages.getDefaultHistoryTTL"
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

/** Send one or more chosen peers, as requested by a [keyboardButtonRequestPeer](https://core.telegram.org/constructor/keyboardButtonRequestPeer) button. */
export class messages_sendBotRequestedPeer_ extends Function_<enums.Updates> {
  static __F: (params: { peer: enums.InputPeer; msg_id: number; button_id: number; requested_peers: Array<enums.InputPeer> }) => enums.Updates = null as unknown as (params: { peer: enums.InputPeer; msg_id: number; button_id: number; requested_peers: Array<enums.InputPeer> }) => enums.Updates;
  /** The bot that sent the [keyboardButtonRequestPeer](https://core.telegram.org/constructor/keyboardButtonRequestPeer) button. */
  peer: enums.InputPeer;
  /** ID of the message that contained the reply keyboard with the [keyboardButtonRequestPeer](https://core.telegram.org/constructor/keyboardButtonRequestPeer) button. */
  msg_id: number;
  /** The `button_id` field from the [keyboardButtonRequestPeer](https://core.telegram.org/constructor/keyboardButtonRequestPeer) constructor. */
  button_id: number;
  /** The chosen peers. */
  requested_peers: Array<enums.InputPeer>;

  protected get [id](): number {
    return 0x91B2D060;
  }

  static get [name](): string {
    return "messages.sendBotRequestedPeer"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types._InputPeer, "InputPeer"],
      ["msg_id", "number", "int"],
      ["button_id", "number", "int"],
      ["requested_peers", [types._InputPeer], "Vector<InputPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types._InputPeer, "InputPeer"],
      [this.msg_id, "number", "int"],
      [this.button_id, "number", "int"],
      [this.requested_peers, [types._InputPeer], "Vector<InputPeer>"],
    ];
  }

  constructor(params: { peer: enums.InputPeer; msg_id: number; button_id: number; requested_peers: Array<enums.InputPeer> }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.button_id = params.button_id;
    this.requested_peers = params.requested_peers;
  }
}

/** Represents a list of [emoji categories](https://core.telegram.org/api/custom-emoji#emoji-categories), to be used when selecting [custom emojis](https://core.telegram.org/api/custom-emoji). */
export class messages_getEmojiGroups_ extends Function_<enums.messages.EmojiGroups> {
  static __F: (params: { hash: number }) => enums.messages.EmojiGroups = null as unknown as (params: { hash: number }) => enums.messages.EmojiGroups;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: number;

  protected get [id](): number {
    return 0x7488CE5B;
  }

  static get [name](): string {
    return "messages.getEmojiGroups"
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

/** Represents a list of [emoji categories](https://core.telegram.org/api/custom-emoji#emoji-categories), to be used when selecting custom emojis to set as [custom emoji status](https://core.telegram.org/api). */
export class messages_getEmojiStatusGroups_ extends Function_<enums.messages.EmojiGroups> {
  static __F: (params: { hash: number }) => enums.messages.EmojiGroups = null as unknown as (params: { hash: number }) => enums.messages.EmojiGroups;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: number;

  protected get [id](): number {
    return 0x2ECD56CD;
  }

  static get [name](): string {
    return "messages.getEmojiStatusGroups"
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

/** Represents a list of [emoji categories](https://core.telegram.org/api/custom-emoji#emoji-categories), to be used when selecting custom emojis to set as [profile picture](https://core.telegram.org/api/files#sticker-profile-pictures). */
export class messages_getEmojiProfilePhotoGroups_ extends Function_<enums.messages.EmojiGroups> {
  static __F: (params: { hash: number }) => enums.messages.EmojiGroups = null as unknown as (params: { hash: number }) => enums.messages.EmojiGroups;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: number;

  protected get [id](): number {
    return 0x21A548F3;
  }

  static get [name](): string {
    return "messages.getEmojiProfilePhotoGroups"
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

/** Look for [custom emojis](https://core.telegram.org/api/custom-emoji) associated to a UTF8 emoji */
export class messages_searchCustomEmoji_ extends Function_<enums.EmojiList> {
  static __F: (params: { emoticon: string; hash: bigint }) => enums.EmojiList = null as unknown as (params: { emoticon: string; hash: bigint }) => enums.EmojiList;
  /** The emoji */
  emoticon: string;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x2C11C0D7;
  }

  static get [name](): string {
    return "messages.searchCustomEmoji"
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

/** Show or hide the [real-time chat translation popup](https://core.telegram.org/api/translation) for a certain chat */
export class messages_togglePeerTranslations_ extends Function_<boolean> {
  static __F: (params: { disabled?: true; peer: enums.InputPeer }) => boolean = null as unknown as (params: { disabled?: true; peer: enums.InputPeer }) => boolean;
  /** Whether to disable or enable the real-time chat translation popup */
  disabled?: true;
  /** The peer */
  peer: enums.InputPeer;

  protected get [id](): number {
    return 0xE47CB579;
  }

  static get [name](): string {
    return "messages.togglePeerTranslations"
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

/** Obtain information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps) */
export class messages_getBotApp_ extends Function_<enums.messages.BotApp> {
  static __F: (params: { app: enums.InputBotApp; hash: bigint }) => enums.messages.BotApp = null as unknown as (params: { app: enums.InputBotApp; hash: bigint }) => enums.messages.BotApp;
  /** Bot app information obtained from a [Direct Mini App deep link »](https://core.telegram.org/api/links#direct-mini-app-links). */
  app: enums.InputBotApp;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x34FDC5C3;
  }

  static get [name](): string {
    return "messages.getBotApp"
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

/** Open a [bot mini app](https://core.telegram.org/bots/webapps) from a [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links), sending over user information after user confirmation. */
export class messages_requestAppWebView_ extends Function_<enums.AppWebViewResult> {
  static __F: (params: { write_allowed?: true; peer: enums.InputPeer; app: enums.InputBotApp; start_param?: string; theme_params?: enums.DataJSON; platform: string }) => enums.AppWebViewResult = null as unknown as (params: { write_allowed?: true; peer: enums.InputPeer; app: enums.InputBotApp; start_param?: string; theme_params?: enums.DataJSON; platform: string }) => enums.AppWebViewResult;
  /** Set this flag if the bot is asking permission to send messages to the user as specified in the [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links) docs, and the user agreed. */
  write_allowed?: true;
  /** If the client has clicked on the link in a Telegram chat, pass the chat's peer information; otherwise pass the bot's peer information, instead. */
  peer: enums.InputPeer;
  /** The app obtained by invoking [messages.getBotApp](https://core.telegram.org/method/messages.getBotApp) as specified in the [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links) docs. */
  app: enums.InputBotApp;
  /** If the `startapp` query string parameter is present in the [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links), pass it to `start_param`. */
  start_param?: string;
  /** [Theme parameters »](https://core.telegram.org/api/bots/webapps#theme-parameters) */
  theme_params?: enums.DataJSON;
  /** Short name of the application; 0-64 English letters, digits, and underscores */
  platform: string;

  protected get [id](): number {
    return 0x8C5A3B3C;
  }

  static get [name](): string {
    return "messages.requestAppWebView"
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

/** Set a custom [wallpaper »](https://core.telegram.org/api/wallpapers) in a specific private chat with another user. */
export class messages_setChatWallPaper_ extends Function_<enums.Updates> {
  static __F: (params: { for_both?: true; revert?: true; peer: enums.InputPeer; wallpaper?: enums.InputWallPaper; settings?: enums.WallPaperSettings; id?: number }) => enums.Updates = null as unknown as (params: { for_both?: true; revert?: true; peer: enums.InputPeer; wallpaper?: enums.InputWallPaper; settings?: enums.WallPaperSettings; id?: number }) => enums.Updates;
  /** Only for [Premium](https://core.telegram.org/api/premium) users, sets the specified wallpaper for both users of the chat, without requiring confirmation from the other user. */
  for_both?: true;
  /** If we don't like the new wallpaper the other user of the chat has chosen for us using the `for_both` flag, we can re-set our previous wallpaper just on our side using this flag. */
  revert?: true;
  /** The private chat where the wallpaper will be set */
  peer: enums.InputPeer;
  /** The [wallpaper »](https://core.telegram.org/api/wallpapers), obtained as described in the [wallpaper documentation »](https://core.telegram.org/api/wallpapers#uploading-wallpapers); must **not** be provided when installing a wallpaper obtained from a [messageActionSetChatWallPaper](https://core.telegram.org/constructor/messageActionSetChatWallPaper) service message (`id` must be provided, instead). */
  wallpaper?: enums.InputWallPaper;
  /** Wallpaper settings, obtained as described in the [wallpaper documentation »](https://core.telegram.org/api/wallpapers#uploading-wallpapers) or from [messageActionSetChatWallPaper](https://core.telegram.org/constructor/messageActionSetChatWallPaper).`wallpaper`.`settings`. */
  settings?: enums.WallPaperSettings;
  /** If the wallpaper was obtained from a [messageActionSetChatWallPaper](https://core.telegram.org/constructor/messageActionSetChatWallPaper) service message, must contain the ID of that message. */
  id?: number;

  protected get [id](): number {
    return 0x8FFACAE1;
  }

  static get [name](): string {
    return "messages.setChatWallPaper"
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

/** Search for [custom emoji stickersets »](https://core.telegram.org/api/custom-emoji) */
export class messages_searchEmojiStickerSets_ extends Function_<enums.messages.FoundStickerSets> {
  static __F: (params: { exclude_featured?: true; q: string; hash: bigint }) => enums.messages.FoundStickerSets = null as unknown as (params: { exclude_featured?: true; q: string; hash: bigint }) => enums.messages.FoundStickerSets;
  /** Exclude featured stickersets from results */
  exclude_featured?: true;
  /** Query string */
  q: string;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x92B4494C;
  }

  static get [name](): string {
    return "messages.searchEmojiStickerSets"
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

/** Returns the current saved dialog list, see [here »](https://core.telegram.org/api/saved-messages) for more info. */
export class messages_getSavedDialogs_ extends Function_<enums.messages.SavedDialogs> {
  static __F: (params: { exclude_pinned?: true; offset_date: number; offset_id: number; offset_peer: enums.InputPeer; limit: number; hash: bigint }) => enums.messages.SavedDialogs = null as unknown as (params: { exclude_pinned?: true; offset_date: number; offset_id: number; offset_peer: enums.InputPeer; limit: number; hash: bigint }) => enums.messages.SavedDialogs;
  /** Exclude pinned dialogs */
  exclude_pinned?: true;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_date: number;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) (`top_message` ID used for pagination) */
  offset_id: number;
  /** [Offset peer for pagination](https://core.telegram.org/api/offsets) */
  offset_peer: enums.InputPeer;
  /** Number of list elements to be returned */
  limit: number;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: bigint;

  protected get [id](): number {
    return 0x5381D21A;
  }

  static get [name](): string {
    return "messages.getSavedDialogs"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["exclude_pinned", "true", "flags.0?true"],
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
      [this.offset_date, "number", "int"],
      [this.offset_id, "number", "int"],
      [this.offset_peer, types._InputPeer, "InputPeer"],
      [this.limit, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { exclude_pinned?: true; offset_date: number; offset_id: number; offset_peer: enums.InputPeer; limit: number; hash: bigint }) {
    super();
    this.exclude_pinned = params.exclude_pinned;
    this.offset_date = params.offset_date;
    this.offset_id = params.offset_id;
    this.offset_peer = params.offset_peer;
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

/** Returns [saved messages »](https://core.telegram.org/api/saved-messages) forwarded from a specific peer */
export class messages_getSavedHistory_ extends Function_<enums.messages.Messages> {
  static __F: (params: { peer: enums.InputPeer; offset_id: number; offset_date: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) => enums.messages.Messages = null as unknown as (params: { peer: enums.InputPeer; offset_id: number; offset_date: number; add_offset: number; limit: number; max_id: number; min_id: number; hash: bigint }) => enums.messages.Messages;
  /** Target peer */
  peer: enums.InputPeer;
  /** Only return messages starting from the specified message ID */
  offset_id: number;
  /** Only return messages sent before the specified date */
  offset_date: number;
  /** Number of list elements to be skipped, negative values are also accepted. */
  add_offset: number;
  /** Number of results to return */
  limit: number;
  /** If a positive value was transferred, the method will return only messages with IDs less than **max\_id** */
  max_id: number;
  /** If a positive value was transferred, the method will return only messages with IDs more than **min\_id** */
  min_id: number;
  /** [Result hash](https://core.telegram.org/api/offsets) */
  hash: bigint;

  protected get [id](): number {
    return 0x3D9A414D;
  }

  static get [name](): string {
    return "messages.getSavedHistory"
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

/** Deletes messages forwarded from a specific peer to [saved messages »](https://core.telegram.org/api/saved-messages). */
export class messages_deleteSavedHistory_ extends Function_<enums.messages.AffectedHistory> {
  static __F: (params: { peer: enums.InputPeer; max_id: number; min_date?: number; max_date?: number }) => enums.messages.AffectedHistory = null as unknown as (params: { peer: enums.InputPeer; max_id: number; min_date?: number; max_date?: number }) => enums.messages.AffectedHistory;
  /** Peer, whose messages will be deleted from [saved messages »](https://core.telegram.org/api/saved-messages) */
  peer: enums.InputPeer;
  /** Maximum ID of message to delete */
  max_id: number;
  /** Delete all messages newer than this UNIX timestamp */
  min_date?: number;
  /** Delete all messages older than this UNIX timestamp */
  max_date?: number;

  protected get [id](): number {
    return 0x6E98102B;
  }

  static get [name](): string {
    return "messages.deleteSavedHistory"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "InputPeer"],
      ["max_id", "number", "int"],
      ["min_date", "number", "flags.2?int"],
      ["max_date", "number", "flags.3?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.max_id, "number", "int"],
      [this.min_date ?? null, "number", "flags.2?int"],
      [this.max_date ?? null, "number", "flags.3?int"],
    ];
  }

  constructor(params: { peer: enums.InputPeer; max_id: number; min_date?: number; max_date?: number }) {
    super();
    this.peer = params.peer;
    this.max_id = params.max_id;
    this.min_date = params.min_date;
    this.max_date = params.max_date;
  }
}

/** Get pinned [saved dialogs, see here »](https://core.telegram.org/api/saved-messages) for more info. */
export class messages_getPinnedSavedDialogs_ extends Function_<enums.messages.SavedDialogs> {
  static __F: () => enums.messages.SavedDialogs = null as unknown as () => enums.messages.SavedDialogs;
  protected get [id](): number {
    return 0xD63D94E0;
  }

  static get [name](): string {
    return "messages.getPinnedSavedDialogs"
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

/** Pin or unpin a [saved message dialog »](https://core.telegram.org/api/saved-messages). */
export class messages_toggleSavedDialogPin_ extends Function_<boolean> {
  static __F: (params: { pinned?: true; peer: enums.InputDialogPeer }) => boolean = null as unknown as (params: { pinned?: true; peer: enums.InputDialogPeer }) => boolean;
  /** Whether to pin or unpin the dialog */
  pinned?: true;
  /** The dialog to pin */
  peer: enums.InputDialogPeer;

  protected get [id](): number {
    return 0xAC81BBDE;
  }

  static get [name](): string {
    return "messages.toggleSavedDialogPin"
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

/** Reorder pinned [saved message dialogs »](https://core.telegram.org/api/saved-messages). */
export class messages_reorderPinnedSavedDialogs_ extends Function_<boolean> {
  static __F: (params: { force?: true; order: Array<enums.InputDialogPeer> }) => boolean = null as unknown as (params: { force?: true; order: Array<enums.InputDialogPeer> }) => boolean;
  /** If set, dialogs pinned server-side but not present in the `order` field will be unpinned. */
  force?: true;
  /** New dialog order */
  order: Array<enums.InputDialogPeer>;

  protected get [id](): number {
    return 0x8B716587;
  }

  static get [name](): string {
    return "messages.reorderPinnedSavedDialogs"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["force", "true", "flags.0?true"],
      ["order", [types._InputDialogPeer], "Vector<InputDialogPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.force ?? null, "true", "flags.0?true"],
      [this.order, [types._InputDialogPeer], "Vector<InputDialogPeer>"],
    ];
  }

  constructor(params: { force?: true; order: Array<enums.InputDialogPeer> }) {
    super();
    this.force = params.force;
    this.order = params.order;
  }
}

export class messages_getSavedReactionTags_ extends Function_<enums.messages.SavedReactionTags> {
  static __F: (params: { peer?: enums.InputPeer; hash: bigint }) => enums.messages.SavedReactionTags = null as unknown as (params: { peer?: enums.InputPeer; hash: bigint }) => enums.messages.SavedReactionTags;
  peer?: enums.InputPeer;
  hash: bigint;

  protected get [id](): number {
    return 0x3637E05B;
  }

  static get [name](): string {
    return "messages.getSavedReactionTags"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types._InputPeer, "flags.0?InputPeer"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer ?? null, types._InputPeer, "flags.0?InputPeer"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { peer?: enums.InputPeer; hash: bigint }) {
    super();
    this.peer = params.peer;
    this.hash = params.hash;
  }
}

export class messages_updateSavedReactionTag_ extends Function_<boolean> {
  static __F: (params: { reaction: enums.Reaction; title?: string }) => boolean = null as unknown as (params: { reaction: enums.Reaction; title?: string }) => boolean;
  reaction: enums.Reaction;
  title?: string;

  protected get [id](): number {
    return 0x60297DEC;
  }

  static get [name](): string {
    return "messages.updateSavedReactionTag"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["reaction", types._Reaction, "Reaction"],
      ["title", "string", "flags.0?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.reaction, types._Reaction, "Reaction"],
      [this.title ?? null, "string", "flags.0?string"],
    ];
  }

  constructor(params: { reaction: enums.Reaction; title?: string }) {
    super();
    this.reaction = params.reaction;
    this.title = params.title;
  }
}

export class messages_getDefaultTagReactions_ extends Function_<enums.messages.Reactions> {
  static __F: (params: { hash: bigint }) => enums.messages.Reactions = null as unknown as (params: { hash: bigint }) => enums.messages.Reactions;
  hash: bigint;

  protected get [id](): number {
    return 0xBDF93428;
  }

  static get [name](): string {
    return "messages.getDefaultTagReactions"
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

export class messages_getOutboxReadDate_ extends Function_<enums.OutboxReadDate> {
  static __F: (params: { peer: enums.InputPeer; msg_id: number }) => enums.OutboxReadDate = null as unknown as (params: { peer: enums.InputPeer; msg_id: number }) => enums.OutboxReadDate;
  peer: enums.InputPeer;
  msg_id: number;

  protected get [id](): number {
    return 0x8C4BFE5D;
  }

  static get [name](): string {
    return "messages.getOutboxReadDate"
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

/** Returns a current state of updates. */
export class updates_getState_ extends Function_<enums.updates.State> {
  static __F: () => enums.updates.State = null as unknown as () => enums.updates.State;
  protected get [id](): number {
    return 0xEDD4882A;
  }

  static get [name](): string {
    return "updates.getState"
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

/** Get new [updates](https://core.telegram.org/api/updates). */
export class updates_getDifference_ extends Function_<enums.updates.Difference> {
  static __F: (params: { pts: number; pts_limit?: number; pts_total_limit?: number; date: number; qts: number; qts_limit?: number }) => enums.updates.Difference = null as unknown as (params: { pts: number; pts_limit?: number; pts_total_limit?: number; date: number; qts: number; qts_limit?: number }) => enums.updates.Difference;
  /** PTS, see [updates](https://core.telegram.org/api/updates). */
  pts: number;
  /** PTS limit */
  pts_limit?: number;
  /** For fast updating: if provided and `pts + pts_total_limit < remote pts`, [updates.differenceTooLong](https://core.telegram.org/constructor/updates.differenceTooLong) will be returned.  
  Simply tells the server to not return the difference if it is bigger than `pts_total_limit`  
  If the remote pts is too big (> ~4000000), this field will default to 1000000 */
  pts_total_limit?: number;
  /** date, see [updates](https://core.telegram.org/api/updates). */
  date: number;
  /** QTS, see [updates](https://core.telegram.org/api/updates). */
  qts: number;
  /** QTS limit */
  qts_limit?: number;

  protected get [id](): number {
    return 0x19C2F763;
  }

  static get [name](): string {
    return "updates.getDifference"
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

/** Returns the difference between the current state of updates of a certain channel and transmitted. */
export class updates_getChannelDifference_ extends Function_<enums.updates.ChannelDifference> {
  static __F: (params: { force?: true; channel: enums.InputChannel; filter: enums.ChannelMessagesFilter; pts: number; limit: number }) => enums.updates.ChannelDifference = null as unknown as (params: { force?: true; channel: enums.InputChannel; filter: enums.ChannelMessagesFilter; pts: number; limit: number }) => enums.updates.ChannelDifference;
  /** Set to true to skip some possibly unneeded updates and reduce server-side load */
  force?: true;
  /** The channel */
  channel: enums.InputChannel;
  /** Messsage filter */
  filter: enums.ChannelMessagesFilter;
  /** Persistent timestamp (see [updates](https://core.telegram.org/api/updates)) */
  pts: number;
  /** How many updates to fetch, max `100000`  
  Ordinary (non-bot) users are supposed to pass `10-100` */
  limit: number;

  protected get [id](): number {
    return 0x03173D78;
  }

  static get [name](): string {
    return "updates.getChannelDifference"
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

/** Installs a previously uploaded photo as a profile photo. */
export class photos_updateProfilePhoto_ extends Function_<enums.photos.Photo> {
  static __F: (params: { fallback?: true; bot?: enums.InputUser; id: enums.InputPhoto }) => enums.photos.Photo = null as unknown as (params: { fallback?: true; bot?: enums.InputUser; id: enums.InputPhoto }) => enums.photos.Photo;
  /** If set, the chosen profile photo will be shown to users that can't display your main profile photo due to your privacy settings. */
  fallback?: true;
  /** Can contain info of a bot we own, to change the profile photo of that bot, instead of the current user. */
  bot?: enums.InputUser;
  /** Input photo */
  id: enums.InputPhoto;

  protected get [id](): number {
    return 0x09E82039;
  }

  static get [name](): string {
    return "photos.updateProfilePhoto"
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

/** Updates current user profile photo. */
export class photos_uploadProfilePhoto_ extends Function_<enums.photos.Photo> {
  static __F: (params?: { fallback?: true; bot?: enums.InputUser; file?: enums.InputFile; video?: enums.InputFile; video_start_ts?: number; video_emoji_markup?: enums.VideoSize }) => enums.photos.Photo = null as unknown as (params?: { fallback?: true; bot?: enums.InputUser; file?: enums.InputFile; video?: enums.InputFile; video_start_ts?: number; video_emoji_markup?: enums.VideoSize }) => enums.photos.Photo;
  /** If set, the chosen profile photo will be shown to users that can't display your main profile photo due to your privacy settings. */
  fallback?: true;
  /** Can contain info of a bot we own, to change the profile photo of that bot, instead of the current user. */
  bot?: enums.InputUser;
  /** Profile photo */
  file?: enums.InputFile;
  /** [Animated profile picture](https://core.telegram.org/api/files#animated-profile-pictures) video */
  video?: enums.InputFile;
  /** Floating point UNIX timestamp in seconds, indicating the frame of the video/sticker that should be used as static preview; can only be used if `video` or `video_emoji_markup` is set. */
  video_start_ts?: number;
  /** Animated sticker profile picture, must contain either a [videoSizeEmojiMarkup](https://core.telegram.org/constructor/videoSizeEmojiMarkup) or a [videoSizeStickerMarkup](https://core.telegram.org/constructor/videoSizeStickerMarkup) constructor. */
  video_emoji_markup?: enums.VideoSize;

  protected get [id](): number {
    return 0x0388A3B5;
  }

  static get [name](): string {
    return "photos.uploadProfilePhoto"
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

/** Deletes profile photos. The method returns a list of successfully deleted photo IDs. */
export class photos_deletePhotos_ extends Function_<bigint[]> {
  static __F: (params: { id: Array<enums.InputPhoto> }) => bigint[] = null as unknown as (params: { id: Array<enums.InputPhoto> }) => bigint[];
  /** Input photos to delete */
  id: Array<enums.InputPhoto>;

  protected get [id](): number {
    return 0x87CF7F2F;
  }

  static get [name](): string {
    return "photos.deletePhotos"
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

/** Returns the list of user photos. */
export class photos_getUserPhotos_ extends Function_<enums.photos.Photos> {
  static __F: (params: { user_id: enums.InputUser; offset: number; max_id: bigint; limit: number }) => enums.photos.Photos = null as unknown as (params: { user_id: enums.InputUser; offset: number; max_id: bigint; limit: number }) => enums.photos.Photos;
  /** User ID */
  user_id: enums.InputUser;
  /** Number of list elements to be skipped */
  offset: number;
  /** If a positive value was transferred, the method will return only photos with IDs less than the set one. This parameter is often useful when [refetching file references »](https://core.telegram.org/api/file_reference), as in conjuction with `limit=1` and `offset=-1` the [photo](https://core.telegram.org/constructor/photo) object with the `id` specified in `max_id` can be fetched. */
  max_id: bigint;
  /** Number of list elements to be returned */
  limit: number;

  protected get [id](): number {
    return 0x91CD32A8;
  }

  static get [name](): string {
    return "photos.getUserPhotos"
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

/** Upload a custom profile picture for a contact, or suggest a new profile picture to a contact. */
export class photos_uploadContactProfilePhoto_ extends Function_<enums.photos.Photo> {
  static __F: (params: { suggest?: true; save?: true; user_id: enums.InputUser; file?: enums.InputFile; video?: enums.InputFile; video_start_ts?: number; video_emoji_markup?: enums.VideoSize }) => enums.photos.Photo = null as unknown as (params: { suggest?: true; save?: true; user_id: enums.InputUser; file?: enums.InputFile; video?: enums.InputFile; video_start_ts?: number; video_emoji_markup?: enums.VideoSize }) => enums.photos.Photo;
  /** If set, will send a [messageActionSuggestProfilePhoto](https://core.telegram.org/constructor/messageActionSuggestProfilePhoto) service message to `user_id`, suggesting them to use the specified profile picture; otherwise, will set a personal profile picture for the user (only visible to the current user). */
  suggest?: true;
  /** If set, removes a previously set personal profile picture (does not affect suggested profile pictures, to remove them simply deleted the [messageActionSuggestProfilePhoto](https://core.telegram.org/constructor/messageActionSuggestProfilePhoto) service message with [messages.deleteMessages](https://core.telegram.org/method/messages.deleteMessages)). */
  save?: true;
  /** The contact */
  user_id: enums.InputUser;
  /** Profile photo */
  file?: enums.InputFile;
  /** [Animated profile picture](https://core.telegram.org/api/files#animated-profile-pictures) video */
  video?: enums.InputFile;
  /** Floating point UNIX timestamp in seconds, indicating the frame of the video/sticker that should be used as static preview; can only be used if `video` or `video_emoji_markup` is set. */
  video_start_ts?: number;
  /** Animated sticker profile picture, must contain either a [videoSizeEmojiMarkup](https://core.telegram.org/constructor/videoSizeEmojiMarkup) or a [videoSizeStickerMarkup](https://core.telegram.org/constructor/videoSizeStickerMarkup) constructor. */
  video_emoji_markup?: enums.VideoSize;

  protected get [id](): number {
    return 0xE14C4A71;
  }

  static get [name](): string {
    return "photos.uploadContactProfilePhoto"
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

/** Saves a part of file for further sending to one of the methods. */
export class upload_saveFilePart_ extends Function_<boolean> {
  static __F: (params: { file_id: bigint; file_part: number; bytes: Uint8Array }) => boolean = null as unknown as (params: { file_id: bigint; file_part: number; bytes: Uint8Array }) => boolean;
  /** Random file identifier created by the client */
  file_id: bigint;
  /** Numerical order of a part */
  file_part: number;
  /** Binary data, content of a part */
  bytes: Uint8Array;

  protected get [id](): number {
    return 0xB304A621;
  }

  static get [name](): string {
    return "upload.saveFilePart"
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

/** Returns content of a whole file or its part. */
export class upload_getFile_ extends Function_<enums.upload.File> {
  static __F: (params: { precise?: true; cdn_supported?: true; location: enums.InputFileLocation; offset: bigint; limit: number }) => enums.upload.File = null as unknown as (params: { precise?: true; cdn_supported?: true; location: enums.InputFileLocation; offset: bigint; limit: number }) => enums.upload.File;
  /** Disable some checks on limit and offset values, useful for example to stream videos by keyframes */
  precise?: true;
  /** Whether the current client supports [CDN downloads](https://core.telegram.org/cdn) */
  cdn_supported?: true;
  /** File location */
  location: enums.InputFileLocation;
  /** Number of bytes to be skipped */
  offset: bigint;
  /** Number of bytes to be returned */
  limit: number;

  protected get [id](): number {
    return 0xBE5335BE;
  }

  static get [name](): string {
    return "upload.getFile"
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

/** Saves a part of a large file (over 10 MB in size) to be later passed to one of the methods. */
export class upload_saveBigFilePart_ extends Function_<boolean> {
  static __F: (params: { file_id: bigint; file_part: number; file_total_parts: number; bytes: Uint8Array }) => boolean = null as unknown as (params: { file_id: bigint; file_part: number; file_total_parts: number; bytes: Uint8Array }) => boolean;
  /** Random file id, created by the client */
  file_id: bigint;
  /** Part sequence number */
  file_part: number;
  /** Total number of parts */
  file_total_parts: number;
  /** Binary data, part contents */
  bytes: Uint8Array;

  protected get [id](): number {
    return 0xDE7B673D;
  }

  static get [name](): string {
    return "upload.saveBigFilePart"
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

/** Returns content of a web file, by proxying the request through telegram, see the [webfile docs for more info](https://core.telegram.org/api/files#downloading-webfiles). */
export class upload_getWebFile_ extends Function_<enums.upload.WebFile> {
  static __F: (params: { location: enums.InputWebFileLocation; offset: number; limit: number }) => enums.upload.WebFile = null as unknown as (params: { location: enums.InputWebFileLocation; offset: number; limit: number }) => enums.upload.WebFile;
  /** The file to download */
  location: enums.InputWebFileLocation;
  /** Number of bytes to be skipped */
  offset: number;
  /** Number of bytes to be returned */
  limit: number;

  protected get [id](): number {
    return 0x24E6818D;
  }

  static get [name](): string {
    return "upload.getWebFile"
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

/** Download a [CDN](https://core.telegram.org/cdn) file. */
export class upload_getCdnFile_ extends Function_<enums.upload.CdnFile> {
  static __F: (params: { file_token: Uint8Array; offset: bigint; limit: number }) => enums.upload.CdnFile = null as unknown as (params: { file_token: Uint8Array; offset: bigint; limit: number }) => enums.upload.CdnFile;
  /** File token */
  file_token: Uint8Array;
  /** Offset of chunk to download */
  offset: bigint;
  /** Length of chunk to download */
  limit: number;

  protected get [id](): number {
    return 0x395F69DA;
  }

  static get [name](): string {
    return "upload.getCdnFile"
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

/** Request a reupload of a certain file to a [CDN DC](https://core.telegram.org/cdn). */
export class upload_reuploadCdnFile_ extends Function_<enums.FileHash[]> {
  static __F: (params: { file_token: Uint8Array; request_token: Uint8Array }) => enums.FileHash[] = null as unknown as (params: { file_token: Uint8Array; request_token: Uint8Array }) => enums.FileHash[];
  /** File token */
  file_token: Uint8Array;
  /** Request token */
  request_token: Uint8Array;

  protected get [id](): number {
    return 0x9B2754A8;
  }

  static get [name](): string {
    return "upload.reuploadCdnFile"
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

/** Get SHA256 hashes for verifying downloaded [CDN](https://core.telegram.org/cdn) files */
export class upload_getCdnFileHashes_ extends Function_<enums.FileHash[]> {
  static __F: (params: { file_token: Uint8Array; offset: bigint }) => enums.FileHash[] = null as unknown as (params: { file_token: Uint8Array; offset: bigint }) => enums.FileHash[];
  /** File */
  file_token: Uint8Array;
  /** Offset from which to start getting hashes */
  offset: bigint;

  protected get [id](): number {
    return 0x91DC3F31;
  }

  static get [name](): string {
    return "upload.getCdnFileHashes"
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

/** Get SHA256 hashes for verifying downloaded files */
export class upload_getFileHashes_ extends Function_<enums.FileHash[]> {
  static __F: (params: { location: enums.InputFileLocation; offset: bigint }) => enums.FileHash[] = null as unknown as (params: { location: enums.InputFileLocation; offset: bigint }) => enums.FileHash[];
  /** File */
  location: enums.InputFileLocation;
  /** Offset from which to get file hashes */
  offset: bigint;

  protected get [id](): number {
    return 0x9156982A;
  }

  static get [name](): string {
    return "upload.getFileHashes"
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

/** Returns current configuration, including data center configuration. */
export class help_getConfig_ extends Function_<enums.Config> {
  static __F: () => enums.Config = null as unknown as () => enums.Config;
  protected get [id](): number {
    return 0xC4F9186B;
  }

  static get [name](): string {
    return "help.getConfig"
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

/** Returns info on data center nearest to the user. */
export class help_getNearestDc_ extends Function_<enums.NearestDc> {
  static __F: () => enums.NearestDc = null as unknown as () => enums.NearestDc;
  protected get [id](): number {
    return 0x1FB33026;
  }

  static get [name](): string {
    return "help.getNearestDc"
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

/** Returns information on update availability for the current application. */
export class help_getAppUpdate_ extends Function_<enums.help.AppUpdate> {
  static __F: (params: { source: string }) => enums.help.AppUpdate = null as unknown as (params: { source: string }) => enums.help.AppUpdate;
  /** Source */
  source: string;

  protected get [id](): number {
    return 0x522D5A7D;
  }

  static get [name](): string {
    return "help.getAppUpdate"
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

/** Returns localized text of a text message with an invitation. */
export class help_getInviteText_ extends Function_<enums.help.InviteText> {
  static __F: () => enums.help.InviteText = null as unknown as () => enums.help.InviteText;
  protected get [id](): number {
    return 0x4D392343;
  }

  static get [name](): string {
    return "help.getInviteText"
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

/** Returns the support user for the "ask a question" feature. */
export class help_getSupport_ extends Function_<enums.help.Support> {
  static __F: () => enums.help.Support = null as unknown as () => enums.help.Support;
  protected get [id](): number {
    return 0x9CDF08CD;
  }

  static get [name](): string {
    return "help.getSupport"
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

/** Informs the server about the number of pending bot updates if they haven't been processed for a long time; for bots only */
export class help_setBotUpdatesStatus_ extends Function_<boolean> {
  static __F: (params: { pending_updates_count: number; message: string }) => boolean = null as unknown as (params: { pending_updates_count: number; message: string }) => boolean;
  /** Number of pending updates */
  pending_updates_count: number;
  /** Error message, if present */
  message: string;

  protected get [id](): number {
    return 0xEC22CFCD;
  }

  static get [name](): string {
    return "help.setBotUpdatesStatus"
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

/** Get configuration for [CDN](https://core.telegram.org/cdn) file downloads. */
export class help_getCdnConfig_ extends Function_<enums.CdnConfig> {
  static __F: () => enums.CdnConfig = null as unknown as () => enums.CdnConfig;
  protected get [id](): number {
    return 0x52029342;
  }

  static get [name](): string {
    return "help.getCdnConfig"
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

/** Get recently used `t.me` links. */
export class help_getRecentMeUrls_ extends Function_<enums.help.RecentMeUrls> {
  static __F: (params: { referer: string }) => enums.help.RecentMeUrls = null as unknown as (params: { referer: string }) => enums.help.RecentMeUrls;
  /** Referrer */
  referer: string;

  protected get [id](): number {
    return 0x3DC0F114;
  }

  static get [name](): string {
    return "help.getRecentMeUrls"
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

/** Look for updates of telegram's terms of service */
export class help_getTermsOfServiceUpdate_ extends Function_<enums.help.TermsOfServiceUpdate> {
  static __F: () => enums.help.TermsOfServiceUpdate = null as unknown as () => enums.help.TermsOfServiceUpdate;
  protected get [id](): number {
    return 0x2CA51FD1;
  }

  static get [name](): string {
    return "help.getTermsOfServiceUpdate"
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

/** Accept the new terms of service */
export class help_acceptTermsOfService_ extends Function_<boolean> {
  static __F: (params: { id: enums.DataJSON }) => boolean = null as unknown as (params: { id: enums.DataJSON }) => boolean;
  /** ID of terms of service */
  id: enums.DataJSON;

  protected get [id](): number {
    return 0xEE72F79A;
  }

  static get [name](): string {
    return "help.acceptTermsOfService"
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

/** Get info about an unsupported deep link, see [here for more info »](https://core.telegram.org/api/links#unsupported-links). */
export class help_getDeepLinkInfo_ extends Function_<enums.help.DeepLinkInfo> {
  static __F: (params: { path: string }) => enums.help.DeepLinkInfo = null as unknown as (params: { path: string }) => enums.help.DeepLinkInfo;
  /** Path component of a `tg:` link */
  path: string;

  protected get [id](): number {
    return 0x3FEDC75F;
  }

  static get [name](): string {
    return "help.getDeepLinkInfo"
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

/** Get app-specific configuration, see [client configuration](https://core.telegram.org/api/config#client-configuration) for more info on the result. */
export class help_getAppConfig_ extends Function_<enums.help.AppConfig> {
  static __F: (params: { hash: number }) => enums.help.AppConfig = null as unknown as (params: { hash: number }) => enums.help.AppConfig;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: number;

  protected get [id](): number {
    return 0x61E3F854;
  }

  static get [name](): string {
    return "help.getAppConfig"
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

/** Saves logs of application on the server. */
export class help_saveAppLog_ extends Function_<boolean> {
  static __F: (params: { events: Array<enums.InputAppEvent> }) => boolean = null as unknown as (params: { events: Array<enums.InputAppEvent> }) => boolean;
  /** List of input events */
  events: Array<enums.InputAppEvent>;

  protected get [id](): number {
    return 0x6F02F748;
  }

  static get [name](): string {
    return "help.saveAppLog"
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

/** Get [passport](https://core.telegram.org/passport) configuration */
export class help_getPassportConfig_ extends Function_<enums.help.PassportConfig> {
  static __F: (params: { hash: number }) => enums.help.PassportConfig = null as unknown as (params: { hash: number }) => enums.help.PassportConfig;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: number;

  protected get [id](): number {
    return 0xC661AD08;
  }

  static get [name](): string {
    return "help.getPassportConfig"
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

/** Get localized name of the telegram support user */
export class help_getSupportName_ extends Function_<enums.help.SupportName> {
  static __F: () => enums.help.SupportName = null as unknown as () => enums.help.SupportName;
  protected get [id](): number {
    return 0xD360E72C;
  }

  static get [name](): string {
    return "help.getSupportName"
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

/** Can only be used by TSF members to obtain internal information. */
export class help_getUserInfo_ extends Function_<enums.help.UserInfo> {
  static __F: (params: { user_id: enums.InputUser }) => enums.help.UserInfo = null as unknown as (params: { user_id: enums.InputUser }) => enums.help.UserInfo;
  /** User ID */
  user_id: enums.InputUser;

  protected get [id](): number {
    return 0x038A08D3;
  }

  static get [name](): string {
    return "help.getUserInfo"
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

/** Internal use */
export class help_editUserInfo_ extends Function_<enums.help.UserInfo> {
  static __F: (params: { user_id: enums.InputUser; message: string; entities: Array<enums.MessageEntity> }) => enums.help.UserInfo = null as unknown as (params: { user_id: enums.InputUser; message: string; entities: Array<enums.MessageEntity> }) => enums.help.UserInfo;
  /** User */
  user_id: enums.InputUser;
  /** Message */
  message: string;
  /** [Message entities for styled text](https://core.telegram.org/api/entities) */
  entities: Array<enums.MessageEntity>;

  protected get [id](): number {
    return 0x66B91B70;
  }

  static get [name](): string {
    return "help.editUserInfo"
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

/** Get MTProxy/Public Service Announcement information */
export class help_getPromoData_ extends Function_<enums.help.PromoData> {
  static __F: () => enums.help.PromoData = null as unknown as () => enums.help.PromoData;
  protected get [id](): number {
    return 0xC0977421;
  }

  static get [name](): string {
    return "help.getPromoData"
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

/** Hide MTProxy/Public Service Announcement information */
export class help_hidePromoData_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer }) => boolean = null as unknown as (params: { peer: enums.InputPeer }) => boolean;
  /** Peer to hide */
  peer: enums.InputPeer;

  protected get [id](): number {
    return 0x1E251C95;
  }

  static get [name](): string {
    return "help.hidePromoData"
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

/** Dismiss a [suggestion, see here for more info »](https://core.telegram.org/api/config#suggestions). */
export class help_dismissSuggestion_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; suggestion: string }) => boolean = null as unknown as (params: { peer: enums.InputPeer; suggestion: string }) => boolean;
  /** In the case of pending suggestions in [channels](https://core.telegram.org/constructor/channelFull), the channel ID. */
  peer: enums.InputPeer;
  /** [Suggestion, see here for more info »](https://core.telegram.org/api/config#suggestions). */
  suggestion: string;

  protected get [id](): number {
    return 0xF50DBAA1;
  }

  static get [name](): string {
    return "help.dismissSuggestion"
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

/** Get name, ISO code, localized name and phone codes/patterns of all available countries */
export class help_getCountriesList_ extends Function_<enums.help.CountriesList> {
  static __F: (params: { lang_code: string; hash: number }) => enums.help.CountriesList = null as unknown as (params: { lang_code: string; hash: number }) => enums.help.CountriesList;
  /** Language code of the current user */
  lang_code: string;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: number;

  protected get [id](): number {
    return 0x735787A8;
  }

  static get [name](): string {
    return "help.getCountriesList"
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

/** Get Telegram Premium promotion information */
export class help_getPremiumPromo_ extends Function_<enums.help.PremiumPromo> {
  static __F: () => enums.help.PremiumPromo = null as unknown as () => enums.help.PremiumPromo;
  protected get [id](): number {
    return 0xB81B93D4;
  }

  static get [name](): string {
    return "help.getPremiumPromo"
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

/** Get the set of [accent color palettes »](https://core.telegram.org/api/colors) that can be used for message accents. */
export class help_getPeerColors_ extends Function_<enums.help.PeerColors> {
  static __F: (params: { hash: number }) => enums.help.PeerColors = null as unknown as (params: { hash: number }) => enums.help.PeerColors;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: number;

  protected get [id](): number {
    return 0xDA80F42F;
  }

  static get [name](): string {
    return "help.getPeerColors"
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

/** Get the set of [accent color palettes »](https://core.telegram.org/api/colors) that can be used in profile page backgrounds. */
export class help_getPeerProfileColors_ extends Function_<enums.help.PeerColors> {
  static __F: (params: { hash: number }) => enums.help.PeerColors = null as unknown as (params: { hash: number }) => enums.help.PeerColors;
  /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
  hash: number;

  protected get [id](): number {
    return 0xABCFA9FD;
  }

  static get [name](): string {
    return "help.getPeerProfileColors"
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

/** Mark [channel/supergroup](https://core.telegram.org/api/channel) history as read */
export class channels_readHistory_ extends Function_<boolean> {
  static __F: (params: { channel: enums.InputChannel; max_id: number }) => boolean = null as unknown as (params: { channel: enums.InputChannel; max_id: number }) => boolean;
  /** [Channel/supergroup](https://core.telegram.org/api/channel) */
  channel: enums.InputChannel;
  /** ID of message up to which messages should be marked as read */
  max_id: number;

  protected get [id](): number {
    return 0xCC104937;
  }

  static get [name](): string {
    return "channels.readHistory"
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

/** Delete messages in a [channel/supergroup](https://core.telegram.org/api/channel) */
export class channels_deleteMessages_ extends Function_<enums.messages.AffectedMessages> {
  static __F: (params: { channel: enums.InputChannel; id: Array<number> }) => enums.messages.AffectedMessages = null as unknown as (params: { channel: enums.InputChannel; id: Array<number> }) => enums.messages.AffectedMessages;
  /** [Channel/supergroup](https://core.telegram.org/api/channel) */
  channel: enums.InputChannel;
  /** IDs of messages to delete */
  id: Array<number>;

  protected get [id](): number {
    return 0x84C1FD4E;
  }

  static get [name](): string {
    return "channels.deleteMessages"
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

/** Reports some messages from a user in a supergroup as spam; requires administrator rights in the supergroup */
export class channels_reportSpam_ extends Function_<boolean> {
  static __F: (params: { channel: enums.InputChannel; participant: enums.InputPeer; id: Array<number> }) => boolean = null as unknown as (params: { channel: enums.InputChannel; participant: enums.InputPeer; id: Array<number> }) => boolean;
  /** Supergroup */
  channel: enums.InputChannel;
  /** Participant whose messages should be reported */
  participant: enums.InputPeer;
  /** IDs of spam messages */
  id: Array<number>;

  protected get [id](): number {
    return 0xF44A8315;
  }

  static get [name](): string {
    return "channels.reportSpam"
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

/** Get [channel/supergroup](https://core.telegram.org/api/channel) messages */
export class channels_getMessages_ extends Function_<enums.messages.Messages> {
  static __F: (params: { channel: enums.InputChannel; id: Array<enums.InputMessage> }) => enums.messages.Messages = null as unknown as (params: { channel: enums.InputChannel; id: Array<enums.InputMessage> }) => enums.messages.Messages;
  /** Channel/supergroup */
  channel: enums.InputChannel;
  /** IDs of messages to get */
  id: Array<enums.InputMessage>;

  protected get [id](): number {
    return 0xAD8C9A23;
  }

  static get [name](): string {
    return "channels.getMessages"
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

/** Get the participants of a [supergroup/channel](https://core.telegram.org/api/channel) */
export class channels_getParticipants_ extends Function_<enums.channels.ChannelParticipants> {
  static __F: (params: { channel: enums.InputChannel; filter: enums.ChannelParticipantsFilter; offset: number; limit: number; hash: bigint }) => enums.channels.ChannelParticipants = null as unknown as (params: { channel: enums.InputChannel; filter: enums.ChannelParticipantsFilter; offset: number; limit: number; hash: bigint }) => enums.channels.ChannelParticipants;
  /** Channel */
  channel: enums.InputChannel;
  /** Which participant types to fetch */
  filter: enums.ChannelParticipantsFilter;
  /** [Offset](https://core.telegram.org/api/offsets) */
  offset: number;
  /** [Limit](https://core.telegram.org/api/offsets) */
  limit: number;
  /** [Hash](https://core.telegram.org/api/offsets) */
  hash: bigint;

  protected get [id](): number {
    return 0x77CED9D0;
  }

  static get [name](): string {
    return "channels.getParticipants"
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

/** Get info about a [channel/supergroup](https://core.telegram.org/api/channel) participant */
export class channels_getParticipant_ extends Function_<enums.channels.ChannelParticipant> {
  static __F: (params: { channel: enums.InputChannel; participant: enums.InputPeer }) => enums.channels.ChannelParticipant = null as unknown as (params: { channel: enums.InputChannel; participant: enums.InputPeer }) => enums.channels.ChannelParticipant;
  /** Channel/supergroup */
  channel: enums.InputChannel;
  /** Participant to get info about */
  participant: enums.InputPeer;

  protected get [id](): number {
    return 0xA0AB6CC6;
  }

  static get [name](): string {
    return "channels.getParticipant"
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

/** Get info about [channels/supergroups](https://core.telegram.org/api/channel) */
export class channels_getChannels_ extends Function_<enums.messages.Chats> {
  static __F: (params: { id: Array<enums.InputChannel> }) => enums.messages.Chats = null as unknown as (params: { id: Array<enums.InputChannel> }) => enums.messages.Chats;
  /** IDs of channels/supergroups to get info about */
  id: Array<enums.InputChannel>;

  protected get [id](): number {
    return 0x0A7F6BBB;
  }

  static get [name](): string {
    return "channels.getChannels"
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

/** Get full info about a [supergroup](https://core.telegram.org/api/channel#supergroups), [gigagroup](https://core.telegram.org/api/channel#gigagroups) or [channel](https://core.telegram.org/api/channel#channels) */
export class channels_getFullChannel_ extends Function_<enums.messages.ChatFull> {
  static __F: (params: { channel: enums.InputChannel }) => enums.messages.ChatFull = null as unknown as (params: { channel: enums.InputChannel }) => enums.messages.ChatFull;
  /** The [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups) or [gigagroup](https://core.telegram.org/api/channel#gigagroups) to get info about */
  channel: enums.InputChannel;

  protected get [id](): number {
    return 0x08736A09;
  }

  static get [name](): string {
    return "channels.getFullChannel"
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

/** Create a [supergroup/channel](https://core.telegram.org/api/channel). */
export class channels_createChannel_ extends Function_<enums.Updates> {
  static __F: (params: { broadcast?: true; megagroup?: true; for_import?: true; forum?: true; title: string; about: string; geo_point?: enums.InputGeoPoint; address?: string; ttl_period?: number }) => enums.Updates = null as unknown as (params: { broadcast?: true; megagroup?: true; for_import?: true; forum?: true; title: string; about: string; geo_point?: enums.InputGeoPoint; address?: string; ttl_period?: number }) => enums.Updates;
  /** Whether to create a [channel](https://core.telegram.org/api/channel) */
  broadcast?: true;
  /** Whether to create a [supergroup](https://core.telegram.org/api/channel) */
  megagroup?: true;
  /** Whether the supergroup is being created to import messages from a foreign chat service using [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport) */
  for_import?: true;
  /** Whether to create a [forum](https://core.telegram.org/api/forum) */
  forum?: true;
  /** Channel title */
  title: string;
  /** Channel description */
  about: string;
  /** Geogroup location, see [here »](https://core.telegram.org/api/nearby) for more info on geogroups. */
  geo_point?: enums.InputGeoPoint;
  /** Geogroup address, see [here »](https://core.telegram.org/api/nearby) for more info on geogroups. */
  address?: string;
  /** Time-to-live of all messages that will be sent in the supergroup: once message.date+message.ttl\_period === time(), the message will be deleted on the server, and must be deleted locally as well. You can use [messages.setDefaultHistoryTTL](https://core.telegram.org/method/messages.setDefaultHistoryTTL) to edit this value later. */
  ttl_period?: number;

  protected get [id](): number {
    return 0x91006707;
  }

  static get [name](): string {
    return "channels.createChannel"
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

/** Modify the admin rights of a user in a [supergroup/channel](https://core.telegram.org/api/channel). */
export class channels_editAdmin_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; user_id: enums.InputUser; admin_rights: enums.ChatAdminRights; rank: string }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; user_id: enums.InputUser; admin_rights: enums.ChatAdminRights; rank: string }) => enums.Updates;
  /** The [supergroup/channel](https://core.telegram.org/api/channel). */
  channel: enums.InputChannel;
  /** The ID of the user whose admin rights should be modified */
  user_id: enums.InputUser;
  /** The admin rights */
  admin_rights: enums.ChatAdminRights;
  /** Indicates the role (rank) of the admin in the group: just an arbitrary string */
  rank: string;

  protected get [id](): number {
    return 0xD33C8902;
  }

  static get [name](): string {
    return "channels.editAdmin"
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

/** Edit the name of a [channel/supergroup](https://core.telegram.org/api/channel) */
export class channels_editTitle_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; title: string }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; title: string }) => enums.Updates;
  /** Channel/supergroup */
  channel: enums.InputChannel;
  /** New name */
  title: string;

  protected get [id](): number {
    return 0x566DECD0;
  }

  static get [name](): string {
    return "channels.editTitle"
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

/** Change the photo of a [channel/supergroup](https://core.telegram.org/api/channel) */
export class channels_editPhoto_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; photo: enums.InputChatPhoto }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; photo: enums.InputChatPhoto }) => enums.Updates;
  /** Channel/supergroup whose photo should be edited */
  channel: enums.InputChannel;
  /** New photo */
  photo: enums.InputChatPhoto;

  protected get [id](): number {
    return 0xF12E57C9;
  }

  static get [name](): string {
    return "channels.editPhoto"
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

/** Check if a username is free and can be assigned to a channel/supergroup */
export class channels_checkUsername_ extends Function_<boolean> {
  static __F: (params: { channel: enums.InputChannel; username: string }) => boolean = null as unknown as (params: { channel: enums.InputChannel; username: string }) => boolean;
  /** The [channel/supergroup](https://core.telegram.org/api/channel) that will assigned the specified username */
  channel: enums.InputChannel;
  /** The username to check */
  username: string;

  protected get [id](): number {
    return 0x10E6BD2C;
  }

  static get [name](): string {
    return "channels.checkUsername"
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

/** Change or remove the username of a supergroup/channel */
export class channels_updateUsername_ extends Function_<boolean> {
  static __F: (params: { channel: enums.InputChannel; username: string }) => boolean = null as unknown as (params: { channel: enums.InputChannel; username: string }) => boolean;
  /** Channel */
  channel: enums.InputChannel;
  /** New username, pass an empty string to remove the username */
  username: string;

  protected get [id](): number {
    return 0x3514B3DE;
  }

  static get [name](): string {
    return "channels.updateUsername"
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

/** Join a channel/supergroup */
export class channels_joinChannel_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel }) => enums.Updates;
  /** Channel/supergroup to join */
  channel: enums.InputChannel;

  protected get [id](): number {
    return 0x24B524C5;
  }

  static get [name](): string {
    return "channels.joinChannel"
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

/** Leave a [channel/supergroup](https://core.telegram.org/api/channel) */
export class channels_leaveChannel_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel }) => enums.Updates;
  /** [Channel/supergroup](https://core.telegram.org/api/channel) to leave */
  channel: enums.InputChannel;

  protected get [id](): number {
    return 0xF836AA95;
  }

  static get [name](): string {
    return "channels.leaveChannel"
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

/** Invite users to a channel/supergroup */
export class channels_inviteToChannel_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; users: Array<enums.InputUser> }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; users: Array<enums.InputUser> }) => enums.Updates;
  /** Channel/supergroup */
  channel: enums.InputChannel;
  /** Users to invite */
  users: Array<enums.InputUser>;

  protected get [id](): number {
    return 0x199F3A6C;
  }

  static get [name](): string {
    return "channels.inviteToChannel"
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

/** Delete a [channel/supergroup](https://core.telegram.org/api/channel) */
export class channels_deleteChannel_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel }) => enums.Updates;
  /** [Channel/supergroup](https://core.telegram.org/api/channel) to delete */
  channel: enums.InputChannel;

  protected get [id](): number {
    return 0xC0111FE3;
  }

  static get [name](): string {
    return "channels.deleteChannel"
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

/** Get link and embed info of a message in a [channel/supergroup](https://core.telegram.org/api/channel) */
export class channels_exportMessageLink_ extends Function_<enums.ExportedMessageLink> {
  static __F: (params: { grouped?: true; thread?: true; channel: enums.InputChannel; id: number }) => enums.ExportedMessageLink = null as unknown as (params: { grouped?: true; thread?: true; channel: enums.InputChannel; id: number }) => enums.ExportedMessageLink;
  /** Whether to include other grouped media (for albums) */
  grouped?: true;
  /** Whether to also include a thread ID, if available, inside of the link */
  thread?: true;
  /** Channel */
  channel: enums.InputChannel;
  /** Message ID */
  id: number;

  protected get [id](): number {
    return 0xE63FADEB;
  }

  static get [name](): string {
    return "channels.exportMessageLink"
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

/** Enable/disable message signatures in channels */
export class channels_toggleSignatures_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates;
  /** Channel */
  channel: enums.InputChannel;
  /** Value */
  enabled: boolean;

  protected get [id](): number {
    return 0x1F69B606;
  }

  static get [name](): string {
    return "channels.toggleSignatures"
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

/** Get [channels/supergroups/geogroups](https://core.telegram.org/api/channel) we're admin in. Usually called when the user exceeds the [limit](https://core.telegram.org/constructor/config) for owned public [channels/supergroups/geogroups](https://core.telegram.org/api/channel), and the user is given the choice to remove one of his channels/supergroups/geogroups. */
export class channels_getAdminedPublicChannels_ extends Function_<enums.messages.Chats> {
  static __F: (params?: { by_location?: true; check_limit?: true }) => enums.messages.Chats = null as unknown as (params?: { by_location?: true; check_limit?: true }) => enums.messages.Chats;
  /** Get geogroups */
  by_location?: true;
  /** If set and the user has reached the limit of owned public [channels/supergroups/geogroups](https://core.telegram.org/api/channel), instead of returning the channel list one of the specified [errors](#possible-errors) will be returned.  
  Useful to check if a new public channel can indeed be created, even before asking the user to enter a channel username to use in [channels.checkUsername](https://core.telegram.org/method/channels.checkUsername)/[channels.updateUsername](https://core.telegram.org/method/channels.updateUsername). */
  check_limit?: true;

  protected get [id](): number {
    return 0xF8B036AF;
  }

  static get [name](): string {
    return "channels.getAdminedPublicChannels"
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

/** Ban/unban/kick a user in a [supergroup/channel](https://core.telegram.org/api/channel). */
export class channels_editBanned_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; participant: enums.InputPeer; banned_rights: enums.ChatBannedRights }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; participant: enums.InputPeer; banned_rights: enums.ChatBannedRights }) => enums.Updates;
  /** The [supergroup/channel](https://core.telegram.org/api/channel). */
  channel: enums.InputChannel;
  /** Participant to ban */
  participant: enums.InputPeer;
  /** The banned rights */
  banned_rights: enums.ChatBannedRights;

  protected get [id](): number {
    return 0x96E6CD81;
  }

  static get [name](): string {
    return "channels.editBanned"
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

/** Get the admin log of a [channel/supergroup](https://core.telegram.org/api/channel) */
export class channels_getAdminLog_ extends Function_<enums.channels.AdminLogResults> {
  static __F: (params: { channel: enums.InputChannel; q: string; events_filter?: enums.ChannelAdminLogEventsFilter; admins?: Array<enums.InputUser>; max_id: bigint; min_id: bigint; limit: number }) => enums.channels.AdminLogResults = null as unknown as (params: { channel: enums.InputChannel; q: string; events_filter?: enums.ChannelAdminLogEventsFilter; admins?: Array<enums.InputUser>; max_id: bigint; min_id: bigint; limit: number }) => enums.channels.AdminLogResults;
  /** Channel */
  channel: enums.InputChannel;
  /** Search query, can be empty */
  q: string;
  /** Event filter */
  events_filter?: enums.ChannelAdminLogEventsFilter;
  /** Only show events from these admins */
  admins?: Array<enums.InputUser>;
  /** Maximum ID of message to return (see [pagination](https://core.telegram.org/api/offsets)) */
  max_id: bigint;
  /** Minimum ID of message to return (see [pagination](https://core.telegram.org/api/offsets)) */
  min_id: bigint;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0x33DDF480;
  }

  static get [name](): string {
    return "channels.getAdminLog"
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

/** Associate a stickerset to the supergroup */
export class channels_setStickers_ extends Function_<boolean> {
  static __F: (params: { channel: enums.InputChannel; stickerset: enums.InputStickerSet }) => boolean = null as unknown as (params: { channel: enums.InputChannel; stickerset: enums.InputStickerSet }) => boolean;
  /** Supergroup */
  channel: enums.InputChannel;
  /** The stickerset to associate */
  stickerset: enums.InputStickerSet;

  protected get [id](): number {
    return 0xEA8CA4F9;
  }

  static get [name](): string {
    return "channels.setStickers"
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

/** Mark [channel/supergroup](https://core.telegram.org/api/channel) message contents as read */
export class channels_readMessageContents_ extends Function_<boolean> {
  static __F: (params: { channel: enums.InputChannel; id: Array<number> }) => boolean = null as unknown as (params: { channel: enums.InputChannel; id: Array<number> }) => boolean;
  /** [Channel/supergroup](https://core.telegram.org/api/channel) */
  channel: enums.InputChannel;
  /** IDs of messages whose contents should be marked as read */
  id: Array<number>;

  protected get [id](): number {
    return 0xEAB5DC38;
  }

  static get [name](): string {
    return "channels.readMessageContents"
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

/** Delete the history of a [supergroup](https://core.telegram.org/api/channel) */
export class channels_deleteHistory_ extends Function_<enums.Updates> {
  static __F: (params: { for_everyone?: true; channel: enums.InputChannel; max_id: number }) => enums.Updates = null as unknown as (params: { for_everyone?: true; channel: enums.InputChannel; max_id: number }) => enums.Updates;
  /** Whether the history should be deleted for everyone */
  for_everyone?: true;
  /** [Supergroup](https://core.telegram.org/api/channel) whose history must be deleted */
  channel: enums.InputChannel;
  /** ID of message **up to which** the history must be deleted */
  max_id: number;

  protected get [id](): number {
    return 0x9BAA9647;
  }

  static get [name](): string {
    return "channels.deleteHistory"
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

/** Hide/unhide message history for new channel/supergroup users */
export class channels_togglePreHistoryHidden_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates;
  /** Channel/supergroup */
  channel: enums.InputChannel;
  /** Hide/unhide */
  enabled: boolean;

  protected get [id](): number {
    return 0xEABBB94C;
  }

  static get [name](): string {
    return "channels.togglePreHistoryHidden"
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

/** Get a list of [channels/supergroups](https://core.telegram.org/api/channel) we left, requires a [takeout session, see here » for more info](https://core.telegram.org/api/takeout). */
export class channels_getLeftChannels_ extends Function_<enums.messages.Chats> {
  static __F: (params: { offset: number }) => enums.messages.Chats = null as unknown as (params: { offset: number }) => enums.messages.Chats;
  /** Offset for [pagination](https://core.telegram.org/api/offsets) */
  offset: number;

  protected get [id](): number {
    return 0x8341ECC0;
  }

  static get [name](): string {
    return "channels.getLeftChannels"
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

/** Get all groups that can be used as [discussion groups](https://core.telegram.org/api/discussion). */
export class channels_getGroupsForDiscussion_ extends Function_<enums.messages.Chats> {
  static __F: () => enums.messages.Chats = null as unknown as () => enums.messages.Chats;
  protected get [id](): number {
    return 0xF5DAD378;
  }

  static get [name](): string {
    return "channels.getGroupsForDiscussion"
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

/** Associate a group to a channel as [discussion group](https://core.telegram.org/api/discussion) for that channel */
export class channels_setDiscussionGroup_ extends Function_<boolean> {
  static __F: (params: { broadcast: enums.InputChannel; group: enums.InputChannel }) => boolean = null as unknown as (params: { broadcast: enums.InputChannel; group: enums.InputChannel }) => boolean;
  /** Channel */
  broadcast: enums.InputChannel;
  /** [Discussion group](https://core.telegram.org/api/discussion) to associate to the channel */
  group: enums.InputChannel;

  protected get [id](): number {
    return 0x40582BB2;
  }

  static get [name](): string {
    return "channels.setDiscussionGroup"
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

/** Transfer channel ownership */
export class channels_editCreator_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; user_id: enums.InputUser; password: enums.InputCheckPasswordSRP }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; user_id: enums.InputUser; password: enums.InputCheckPasswordSRP }) => enums.Updates;
  /** Channel */
  channel: enums.InputChannel;
  /** New channel owner */
  user_id: enums.InputUser;
  /** [2FA password](https://core.telegram.org/api/srp) of account */
  password: enums.InputCheckPasswordSRP;

  protected get [id](): number {
    return 0x8F38CD1F;
  }

  static get [name](): string {
    return "channels.editCreator"
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

/** Edit location of geogroup, see [here »](https://core.telegram.org/api/nearby) for more info on geogroups. */
export class channels_editLocation_ extends Function_<boolean> {
  static __F: (params: { channel: enums.InputChannel; geo_point: enums.InputGeoPoint; address: string }) => boolean = null as unknown as (params: { channel: enums.InputChannel; geo_point: enums.InputGeoPoint; address: string }) => boolean;
  /** [Geogroup](https://core.telegram.org/api/channel) */
  channel: enums.InputChannel;
  /** New geolocation */
  geo_point: enums.InputGeoPoint;
  /** Address string */
  address: string;

  protected get [id](): number {
    return 0x58E63F6D;
  }

  static get [name](): string {
    return "channels.editLocation"
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

/** Toggle supergroup slow mode: if enabled, users will only be able to send one message every `seconds` seconds */
export class channels_toggleSlowMode_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; seconds: number }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; seconds: number }) => enums.Updates;
  /** The [supergroup](https://core.telegram.org/api/channel) */
  channel: enums.InputChannel;
  /** Users will only be able to send one message every `seconds` seconds, `0` to disable the limitation */
  seconds: number;

  protected get [id](): number {
    return 0xEDD49EF0;
  }

  static get [name](): string {
    return "channels.toggleSlowMode"
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

/** Get inactive channels and supergroups */
export class channels_getInactiveChannels_ extends Function_<enums.messages.InactiveChats> {
  static __F: () => enums.messages.InactiveChats = null as unknown as () => enums.messages.InactiveChats;
  protected get [id](): number {
    return 0x11E831EE;
  }

  static get [name](): string {
    return "channels.getInactiveChannels"
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

/** Convert a [supergroup](https://core.telegram.org/api/channel) to a [gigagroup](https://core.telegram.org/api/channel), when requested by [channel suggestions](https://core.telegram.org/api/config#channel-suggestions). */
export class channels_convertToGigagroup_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel }) => enums.Updates;
  /** The [supergroup](https://core.telegram.org/api/channel) to convert */
  channel: enums.InputChannel;

  protected get [id](): number {
    return 0x0B290C69;
  }

  static get [name](): string {
    return "channels.convertToGigagroup"
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

/** Mark a specific sponsored message as read */
export class channels_viewSponsoredMessage_ extends Function_<boolean> {
  static __F: (params: { channel: enums.InputChannel; random_id: Uint8Array }) => boolean = null as unknown as (params: { channel: enums.InputChannel; random_id: Uint8Array }) => boolean;
  /** Peer */
  channel: enums.InputChannel;
  /** Message ID */
  random_id: Uint8Array;

  protected get [id](): number {
    return 0xBEAEDB94;
  }

  static get [name](): string {
    return "channels.viewSponsoredMessage"
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

/** Get a list of sponsored messages */
export class channels_getSponsoredMessages_ extends Function_<enums.messages.SponsoredMessages> {
  static __F: (params: { channel: enums.InputChannel }) => enums.messages.SponsoredMessages = null as unknown as (params: { channel: enums.InputChannel }) => enums.messages.SponsoredMessages;
  /** Peer */
  channel: enums.InputChannel;

  protected get [id](): number {
    return 0xEC210FBF;
  }

  static get [name](): string {
    return "channels.getSponsoredMessages"
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

/** Obtains a list of peers that can be used to send messages in a specific group */
export class channels_getSendAs_ extends Function_<enums.channels.SendAsPeers> {
  static __F: (params: { peer: enums.InputPeer }) => enums.channels.SendAsPeers = null as unknown as (params: { peer: enums.InputPeer }) => enums.channels.SendAsPeers;
  /** The group where we intend to send messages */
  peer: enums.InputPeer;

  protected get [id](): number {
    return 0x0DC770EE;
  }

  static get [name](): string {
    return "channels.getSendAs"
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

/** Delete all messages sent by a specific participant of a given supergroup */
export class channels_deleteParticipantHistory_ extends Function_<enums.messages.AffectedHistory> {
  static __F: (params: { channel: enums.InputChannel; participant: enums.InputPeer }) => enums.messages.AffectedHistory = null as unknown as (params: { channel: enums.InputChannel; participant: enums.InputPeer }) => enums.messages.AffectedHistory;
  /** Supergroup */
  channel: enums.InputChannel;
  /** The participant whose messages should be deleted */
  participant: enums.InputPeer;

  protected get [id](): number {
    return 0x367544DB;
  }

  static get [name](): string {
    return "channels.deleteParticipantHistory"
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

/** Set whether all users [should join a discussion group in order to comment on a post »](https://core.telegram.org/api/discussion#requiring-users-to-join-the-group) */
export class channels_toggleJoinToSend_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates;
  /** Discussion group */
  channel: enums.InputChannel;
  /** Toggle */
  enabled: boolean;

  protected get [id](): number {
    return 0xE4CB9580;
  }

  static get [name](): string {
    return "channels.toggleJoinToSend"
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

/** Set whether all users should [request admin approval to join the group »](https://core.telegram.org/api/invites#join-requests). */
export class channels_toggleJoinRequest_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates;
  /** Group */
  channel: enums.InputChannel;
  /** Toggle */
  enabled: boolean;

  protected get [id](): number {
    return 0x4C2985B6;
  }

  static get [name](): string {
    return "channels.toggleJoinRequest"
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

/** Reorder active usernames */
export class channels_reorderUsernames_ extends Function_<boolean> {
  static __F: (params: { channel: enums.InputChannel; order: Array<string> }) => boolean = null as unknown as (params: { channel: enums.InputChannel; order: Array<string> }) => boolean;
  /** The supergroup or channel */
  channel: enums.InputChannel;
  /** The new order for active usernames. All active usernames must be specified. */
  order: Array<string>;

  protected get [id](): number {
    return 0xB45CED1D;
  }

  static get [name](): string {
    return "channels.reorderUsernames"
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

/** Activate or deactivate a purchased [fragment.com](https://fragment.com) username associated to a [supergroup or channel](https://core.telegram.org/api/channel) we own. */
export class channels_toggleUsername_ extends Function_<boolean> {
  static __F: (params: { channel: enums.InputChannel; username: string; active: boolean }) => boolean = null as unknown as (params: { channel: enums.InputChannel; username: string; active: boolean }) => boolean;
  /** [Supergroup or channel](https://core.telegram.org/api/channel) */
  channel: enums.InputChannel;
  /** Username */
  username: string;
  /** Whether to activate or deactivate the username */
  active: boolean;

  protected get [id](): number {
    return 0x50F24105;
  }

  static get [name](): string {
    return "channels.toggleUsername"
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

/** Disable all purchased usernames of a supergroup or channel */
export class channels_deactivateAllUsernames_ extends Function_<boolean> {
  static __F: (params: { channel: enums.InputChannel }) => boolean = null as unknown as (params: { channel: enums.InputChannel }) => boolean;
  /** Supergroup or channel */
  channel: enums.InputChannel;

  protected get [id](): number {
    return 0x0A245DD3;
  }

  static get [name](): string {
    return "channels.deactivateAllUsernames"
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

/** Enable or disable [forum functionality](https://core.telegram.org/api/forum) in a supergroup. */
export class channels_toggleForum_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates;
  /** Supergroup ID */
  channel: enums.InputChannel;
  /** Enable or disable forum functionality */
  enabled: boolean;

  protected get [id](): number {
    return 0xA4298B29;
  }

  static get [name](): string {
    return "channels.toggleForum"
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

/** Create a [forum topic](https://core.telegram.org/api/forum); requires [`manage_topics` rights](https://core.telegram.org/api/rights). */
export class channels_createForumTopic_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; title: string; icon_color?: number; icon_emoji_id?: bigint; random_id: bigint; send_as?: enums.InputPeer }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; title: string; icon_color?: number; icon_emoji_id?: bigint; random_id: bigint; send_as?: enums.InputPeer }) => enums.Updates;
  /** [The forum](https://core.telegram.org/api/forum) */
  channel: enums.InputChannel;
  /** Topic title (maximum UTF-8 length: 128) */
  title: string;
  /** If no custom emoji icon is specified, specifies the color of the fallback topic icon (RGB), one of `0x6FB9F0`, `0xFFD67E`, `0xCB86DB`, `0x8EEE98`, `0xFF93B2`, or `0xFB6F5F`. */
  icon_color?: number;
  /** ID of the [custom emoji](https://core.telegram.org/api/custom-emoji) used as topic icon. [Telegram Premium](https://core.telegram.org/api/premium) users can use any custom emoji, other users can only use the custom emojis contained in the [inputStickerSetEmojiDefaultTopicIcons](https://core.telegram.org/constructor/inputStickerSetEmojiDefaultTopicIcons) emoji pack. */
  icon_emoji_id?: bigint;
  /** Unique client message ID to prevent duplicate sending of the same event */
  random_id: bigint;
  /** Create the topic as the specified peer */
  send_as?: enums.InputPeer;

  protected get [id](): number {
    return 0xF40C0224;
  }

  static get [name](): string {
    return "channels.createForumTopic"
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

/** Get [topics of a forum](https://core.telegram.org/api/forum) */
export class channels_getForumTopics_ extends Function_<enums.messages.ForumTopics> {
  static __F: (params: { channel: enums.InputChannel; q?: string; offset_date: number; offset_id: number; offset_topic: number; limit: number }) => enums.messages.ForumTopics = null as unknown as (params: { channel: enums.InputChannel; q?: string; offset_date: number; offset_id: number; offset_topic: number; limit: number }) => enums.messages.ForumTopics;
  /** Supergroup */
  channel: enums.InputChannel;
  /** Search query */
  q?: string;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets), date of the last message of the last found topic. Use 0 or any date in the future to get results from the last topic. */
  offset_date: number;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets), ID of the last message of the last found topic (or initially `0`). */
  offset_id: number;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets), ID of the last found topic (or initially `0`). */
  offset_topic: number;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets). For optimal performance, the number of returned topics is chosen by the server and can be smaller than the specified limit. */
  limit: number;

  protected get [id](): number {
    return 0x0DE560D1;
  }

  static get [name](): string {
    return "channels.getForumTopics"
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

/** Get forum topics by their ID */
export class channels_getForumTopicsByID_ extends Function_<enums.messages.ForumTopics> {
  static __F: (params: { channel: enums.InputChannel; topics: Array<number> }) => enums.messages.ForumTopics = null as unknown as (params: { channel: enums.InputChannel; topics: Array<number> }) => enums.messages.ForumTopics;
  /** Forum */
  channel: enums.InputChannel;
  /** Topic IDs */
  topics: Array<number>;

  protected get [id](): number {
    return 0xB0831EB9;
  }

  static get [name](): string {
    return "channels.getForumTopicsByID"
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

/** Edit [forum topic](https://core.telegram.org/api/forum); requires [`manage_topics` rights](https://core.telegram.org/api/rights). */
export class channels_editForumTopic_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; topic_id: number; title?: string; icon_emoji_id?: bigint; closed?: boolean; hidden?: boolean }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; topic_id: number; title?: string; icon_emoji_id?: bigint; closed?: boolean; hidden?: boolean }) => enums.Updates;
  /** Supergroup */
  channel: enums.InputChannel;
  /** Topic ID */
  topic_id: number;
  /** If present, will update the topic title (maximum UTF-8 length: 128). */
  title?: string;
  /** If present, updates the [custom emoji](https://core.telegram.org/api/custom-emoji) used as topic icon. [Telegram Premium](https://core.telegram.org/api/premium) users can use any custom emoji, other users can only use the custom emojis contained in the [inputStickerSetEmojiDefaultTopicIcons](https://core.telegram.org/constructor/inputStickerSetEmojiDefaultTopicIcons) emoji pack. Pass 0 to switch to the fallback topic icon. */
  icon_emoji_id?: bigint;
  /** If present, will update the open/closed status of the topic. */
  closed?: boolean;
  /** If present, will hide/unhide the topic (only valid for the "General" topic, `id=1`). */
  hidden?: boolean;

  protected get [id](): number {
    return 0xF4DFA185;
  }

  static get [name](): string {
    return "channels.editForumTopic"
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

/** Pin or unpin [forum topics](https://core.telegram.org/api/forum) */
export class channels_updatePinnedForumTopic_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; topic_id: number; pinned: boolean }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; topic_id: number; pinned: boolean }) => enums.Updates;
  /** Supergroup ID */
  channel: enums.InputChannel;
  /** [Forum topic ID](https://core.telegram.org/api/forum) */
  topic_id: number;
  /** Whether to pin or unpin the topic */
  pinned: boolean;

  protected get [id](): number {
    return 0x6C2D9026;
  }

  static get [name](): string {
    return "channels.updatePinnedForumTopic"
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

/** Delete message history of a [forum topic](https://core.telegram.org/api/forum) */
export class channels_deleteTopicHistory_ extends Function_<enums.messages.AffectedHistory> {
  static __F: (params: { channel: enums.InputChannel; top_msg_id: number }) => enums.messages.AffectedHistory = null as unknown as (params: { channel: enums.InputChannel; top_msg_id: number }) => enums.messages.AffectedHistory;
  /** Forum */
  channel: enums.InputChannel;
  /** Topic ID */
  top_msg_id: number;

  protected get [id](): number {
    return 0x34435F2D;
  }

  static get [name](): string {
    return "channels.deleteTopicHistory"
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

/** Reorder pinned forum topics */
export class channels_reorderPinnedForumTopics_ extends Function_<enums.Updates> {
  static __F: (params: { force?: true; channel: enums.InputChannel; order: Array<number> }) => enums.Updates = null as unknown as (params: { force?: true; channel: enums.InputChannel; order: Array<number> }) => enums.Updates;
  /** If not set, the order of only the topics present both server-side and in `order` will be changed (i.e. mentioning topics not pinned server-side in `order` will not pin them, and not mentioning topics pinned server-side will not unpin them).  
  If set, the entire server-side pinned topic list will be replaced with `order` (i.e. mentioning topics not pinned server-side in `order` will pin them, and not mentioning topics pinned server-side will unpin them) */
  force?: true;
  /** Supergroup ID */
  channel: enums.InputChannel;
  /** [Topic IDs »](https://core.telegram.org/api/forum) */
  order: Array<number>;

  protected get [id](): number {
    return 0x2950A18F;
  }

  static get [name](): string {
    return "channels.reorderPinnedForumTopics"
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

/** Enable or disable the [native antispam system](https://core.telegram.org/api/antispam). */
export class channels_toggleAntiSpam_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates;
  /** Supergroup ID. The specified supergroup must have at least `telegram_antispam_group_size_min` members to enable antispam functionality, as specified by the [client configuration parameters](https://core.telegram.org/api/config#client-configuration). */
  channel: enums.InputChannel;
  /** Enable or disable the native antispam system. */
  enabled: boolean;

  protected get [id](): number {
    return 0x68F3E4EB;
  }

  static get [name](): string {
    return "channels.toggleAntiSpam"
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

/** Report a [native antispam](https://core.telegram.org/api/antispam) false positive */
export class channels_reportAntiSpamFalsePositive_ extends Function_<boolean> {
  static __F: (params: { channel: enums.InputChannel; msg_id: number }) => boolean = null as unknown as (params: { channel: enums.InputChannel; msg_id: number }) => boolean;
  /** Supergroup ID */
  channel: enums.InputChannel;
  /** Message ID that was mistakenly deleted by the [native antispam](https://core.telegram.org/api/antispam) system, taken from the [admin log](https://core.telegram.org/api/recent-actions) */
  msg_id: number;

  protected get [id](): number {
    return 0xA850A693;
  }

  static get [name](): string {
    return "channels.reportAntiSpamFalsePositive"
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

/** Hide or display the participants list in a [supergroup](https://core.telegram.org/api/channel). */
export class channels_toggleParticipantsHidden_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates;
  /** Supergroup ID */
  channel: enums.InputChannel;
  /** If true, will hide the participants list; otherwise will unhide it. */
  enabled: boolean;

  protected get [id](): number {
    return 0x6A6E7854;
  }

  static get [name](): string {
    return "channels.toggleParticipantsHidden"
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

/** Informs the server that the user has either: */
export class channels_clickSponsoredMessage_ extends Function_<boolean> {
  static __F: (params: { channel: enums.InputChannel; random_id: Uint8Array }) => boolean = null as unknown as (params: { channel: enums.InputChannel; random_id: Uint8Array }) => boolean;
  /** Channel where the sponsored message was posted */
  channel: enums.InputChannel;
  /** Message ID */
  random_id: Uint8Array;

  protected get [id](): number {
    return 0x18AFBC93;
  }

  static get [name](): string {
    return "channels.clickSponsoredMessage"
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

/** Update the [accent color and background custom emoji »](https://core.telegram.org/api/colors) of a channel. */
export class channels_updateColor_ extends Function_<enums.Updates> {
  static __F: (params: { for_profile?: true; channel: enums.InputChannel; color?: number; background_emoji_id?: bigint }) => enums.Updates = null as unknown as (params: { for_profile?: true; channel: enums.InputChannel; color?: number; background_emoji_id?: bigint }) => enums.Updates;
  /** Whether to change the accent color emoji pattern of the profile page; otherwise, the accent color and emoji pattern of messages will be changed. */
  for_profile?: true;
  /** Channel whose accent color should be changed. */
  channel: enums.InputChannel;
  /** [ID of the accent color palette »](https://core.telegram.org/api/colors) to use (not RGB24, see [here »](https://core.telegram.org/api/colors) for more info); if not set, the default palette is used. */
  color?: number;
  /** Custom emoji ID used in the accent color pattern. */
  background_emoji_id?: bigint;

  protected get [id](): number {
    return 0xD8AA3671;
  }

  static get [name](): string {
    return "channels.updateColor"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["for_profile", "true", "flags.1?true"],
      ["channel", types._InputChannel, "InputChannel"],
      ["color", "number", "flags.2?int"],
      ["background_emoji_id", "bigint", "flags.0?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.for_profile ?? null, "true", "flags.1?true"],
      [this.channel, types._InputChannel, "InputChannel"],
      [this.color ?? null, "number", "flags.2?int"],
      [this.background_emoji_id ?? null, "bigint", "flags.0?long"],
    ];
  }

  constructor(params: { for_profile?: true; channel: enums.InputChannel; color?: number; background_emoji_id?: bigint }) {
    super();
    this.for_profile = params.for_profile;
    this.channel = params.channel;
    this.color = params.color;
    this.background_emoji_id = params.background_emoji_id;
  }
}

/** Users may also choose to display messages from all topics of a [forum](https://core.telegram.org/api/forum) as if they were sent to a normal group, using a "View as messages" setting in the local client: this setting only affects the current account, and is synced to other logged in sessions using this method. */
export class channels_toggleViewForumAsMessages_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; enabled: boolean }) => enums.Updates;
  /** The forum */
  channel: enums.InputChannel;
  /** The new value of the `view_forum_as_messages` flag. */
  enabled: boolean;

  protected get [id](): number {
    return 0x9738BB15;
  }

  static get [name](): string {
    return "channels.toggleViewForumAsMessages"
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

/** Obtain a list of similarly themed public channels, selected based on similarities in their **subscriber bases**. */
export class channels_getChannelRecommendations_ extends Function_<enums.messages.Chats> {
  static __F: (params: { channel: enums.InputChannel }) => enums.messages.Chats = null as unknown as (params: { channel: enums.InputChannel }) => enums.messages.Chats;
  /** The method will return channels related to the passed `channel`. */
  channel: enums.InputChannel;

  protected get [id](): number {
    return 0x83B70D97;
  }

  static get [name](): string {
    return "channels.getChannelRecommendations"
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

/** Set an [emoji status](https://core.telegram.org/api/emoji-status) for a channel. */
export class channels_updateEmojiStatus_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; emoji_status: enums.EmojiStatus }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; emoji_status: enums.EmojiStatus }) => enums.Updates;
  /** The channel, must have at least [`channel_emoji_status_level_min` boosts](https://core.telegram.org/api/config#channel-emoji-status-level-min). */
  channel: enums.InputChannel;
  /** [Emoji status](https://core.telegram.org/api/emoji-status) to set */
  emoji_status: enums.EmojiStatus;

  protected get [id](): number {
    return 0xF0D3E6A8;
  }

  static get [name](): string {
    return "channels.updateEmojiStatus"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["emoji_status", types._EmojiStatus, "EmojiStatus"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.emoji_status, types._EmojiStatus, "EmojiStatus"],
    ];
  }

  constructor(params: { channel: enums.InputChannel; emoji_status: enums.EmojiStatus }) {
    super();
    this.channel = params.channel;
    this.emoji_status = params.emoji_status;
  }
}

export class channels_setBoostsToUnblockRestrictions_ extends Function_<enums.Updates> {
  static __F: (params: { channel: enums.InputChannel; boosts: number }) => enums.Updates = null as unknown as (params: { channel: enums.InputChannel; boosts: number }) => enums.Updates;
  channel: enums.InputChannel;
  boosts: number;

  protected get [id](): number {
    return 0xAD399CEE;
  }

  static get [name](): string {
    return "channels.setBoostsToUnblockRestrictions"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["boosts", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.boosts, "number", "int"],
    ];
  }

  constructor(params: { channel: enums.InputChannel; boosts: number }) {
    super();
    this.channel = params.channel;
    this.boosts = params.boosts;
  }
}

export class channels_setEmojiStickers_ extends Function_<boolean> {
  static __F: (params: { channel: enums.InputChannel; stickerset: enums.InputStickerSet }) => boolean = null as unknown as (params: { channel: enums.InputChannel; stickerset: enums.InputStickerSet }) => boolean;
  channel: enums.InputChannel;
  stickerset: enums.InputStickerSet;

  protected get [id](): number {
    return 0x3CD930B7;
  }

  static get [name](): string {
    return "channels.setEmojiStickers"
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

/** Sends a custom request; for bots only */
export class bots_sendCustomRequest_ extends Function_<enums.DataJSON> {
  static __F: (params: { custom_method: string; params: enums.DataJSON }) => enums.DataJSON = null as unknown as (params: { custom_method: string; params: enums.DataJSON }) => enums.DataJSON;
  /** The method name */
  custom_method: string;
  /** JSON-serialized method parameters */
  params: enums.DataJSON;

  protected get [id](): number {
    return 0xAA2769ED;
  }

  static get [name](): string {
    return "bots.sendCustomRequest"
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

/** Answers a custom query; for bots only */
export class bots_answerWebhookJSONQuery_ extends Function_<boolean> {
  static __F: (params: { query_id: bigint; data: enums.DataJSON }) => boolean = null as unknown as (params: { query_id: bigint; data: enums.DataJSON }) => boolean;
  /** Identifier of a custom query */
  query_id: bigint;
  /** JSON-serialized answer to the query */
  data: enums.DataJSON;

  protected get [id](): number {
    return 0xE6213F4D;
  }

  static get [name](): string {
    return "bots.answerWebhookJSONQuery"
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

/** Set bot command list */
export class bots_setBotCommands_ extends Function_<boolean> {
  static __F: (params: { scope: enums.BotCommandScope; lang_code: string; commands: Array<enums.BotCommand> }) => boolean = null as unknown as (params: { scope: enums.BotCommandScope; lang_code: string; commands: Array<enums.BotCommand> }) => boolean;
  /** Command scope */
  scope: enums.BotCommandScope;
  /** Language code */
  lang_code: string;
  /** Bot commands */
  commands: Array<enums.BotCommand>;

  protected get [id](): number {
    return 0x0517165A;
  }

  static get [name](): string {
    return "bots.setBotCommands"
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

/** Clear bot commands for the specified bot scope and language code */
export class bots_resetBotCommands_ extends Function_<boolean> {
  static __F: (params: { scope: enums.BotCommandScope; lang_code: string }) => boolean = null as unknown as (params: { scope: enums.BotCommandScope; lang_code: string }) => boolean;
  /** Command scope */
  scope: enums.BotCommandScope;
  /** Language code */
  lang_code: string;

  protected get [id](): number {
    return 0x3D8DE0F9;
  }

  static get [name](): string {
    return "bots.resetBotCommands"
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

/** Obtain a list of bot commands for the specified bot scope and language code */
export class bots_getBotCommands_ extends Function_<enums.BotCommand[]> {
  static __F: (params: { scope: enums.BotCommandScope; lang_code: string }) => enums.BotCommand[] = null as unknown as (params: { scope: enums.BotCommandScope; lang_code: string }) => enums.BotCommand[];
  /** Command scope */
  scope: enums.BotCommandScope;
  /** Language code */
  lang_code: string;

  protected get [id](): number {
    return 0xE34C0DD6;
  }

  static get [name](): string {
    return "bots.getBotCommands"
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

/** Sets the [menu button action »](https://core.telegram.org/api/bots/menu) for a given user or for all users */
export class bots_setBotMenuButton_ extends Function_<boolean> {
  static __F: (params: { user_id: enums.InputUser; button: enums.BotMenuButton }) => boolean = null as unknown as (params: { user_id: enums.InputUser; button: enums.BotMenuButton }) => boolean;
  /** User ID */
  user_id: enums.InputUser;
  /** Bot menu button action */
  button: enums.BotMenuButton;

  protected get [id](): number {
    return 0x4504D54F;
  }

  static get [name](): string {
    return "bots.setBotMenuButton"
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

/** Gets the menu button action for a given user or for all users, previously set using [bots.setBotMenuButton](https://core.telegram.org/method/bots.setBotMenuButton); users can see this information in the [botInfo](https://core.telegram.org/constructor/botInfo) constructor. */
export class bots_getBotMenuButton_ extends Function_<enums.BotMenuButton> {
  static __F: (params: { user_id: enums.InputUser }) => enums.BotMenuButton = null as unknown as (params: { user_id: enums.InputUser }) => enums.BotMenuButton;
  /** User ID or empty for the default menu button. */
  user_id: enums.InputUser;

  protected get [id](): number {
    return 0x9C60EB28;
  }

  static get [name](): string {
    return "bots.getBotMenuButton"
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

/** Set the default [suggested admin rights](https://core.telegram.org/api/rights#suggested-bot-rights) for bots being added as admins to channels, see [here for more info on how to handle them »](https://core.telegram.org/api/rights#suggested-bot-rights). */
export class bots_setBotBroadcastDefaultAdminRights_ extends Function_<boolean> {
  static __F: (params: { admin_rights: enums.ChatAdminRights }) => boolean = null as unknown as (params: { admin_rights: enums.ChatAdminRights }) => boolean;
  /** Admin rights */
  admin_rights: enums.ChatAdminRights;

  protected get [id](): number {
    return 0x788464E1;
  }

  static get [name](): string {
    return "bots.setBotBroadcastDefaultAdminRights"
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

/** Set the default [suggested admin rights](https://core.telegram.org/api/rights#suggested-bot-rights) for bots being added as admins to groups, see [here for more info on how to handle them »](https://core.telegram.org/api/rights#suggested-bot-rights). */
export class bots_setBotGroupDefaultAdminRights_ extends Function_<boolean> {
  static __F: (params: { admin_rights: enums.ChatAdminRights }) => boolean = null as unknown as (params: { admin_rights: enums.ChatAdminRights }) => boolean;
  /** Admin rights */
  admin_rights: enums.ChatAdminRights;

  protected get [id](): number {
    return 0x925EC9EA;
  }

  static get [name](): string {
    return "bots.setBotGroupDefaultAdminRights"
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

/** Set localized name, about text and description of a bot (or of the current account, if called by a bot). */
export class bots_setBotInfo_ extends Function_<boolean> {
  static __F: (params: { bot?: enums.InputUser; lang_code: string; name?: string; about?: string; description?: string }) => boolean = null as unknown as (params: { bot?: enums.InputUser; lang_code: string; name?: string; about?: string; description?: string }) => boolean;
  /** If called by a user, **must** contain the peer of a bot we own. */
  bot?: enums.InputUser;
  /** Language code, if left empty update the fallback about text and description */
  lang_code: string;
  /** New bot name */
  name?: string;
  /** New about text */
  about?: string;
  /** New description */
  description?: string;

  protected get [id](): number {
    return 0x10CF3123;
  }

  static get [name](): string {
    return "bots.setBotInfo"
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

/** Get localized name, about text and description of a bot (or of the current account, if called by a bot). */
export class bots_getBotInfo_ extends Function_<enums.bots.BotInfo> {
  static __F: (params: { bot?: enums.InputUser; lang_code: string }) => enums.bots.BotInfo = null as unknown as (params: { bot?: enums.InputUser; lang_code: string }) => enums.bots.BotInfo;
  /** If called by a user, **must** contain the peer of a bot we own. */
  bot?: enums.InputUser;
  /** Language code, if left empty this method will return the fallback about text and description. */
  lang_code: string;

  protected get [id](): number {
    return 0xDCD914FD;
  }

  static get [name](): string {
    return "bots.getBotInfo"
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

/** Reorder usernames associated to a bot we own. */
export class bots_reorderUsernames_ extends Function_<boolean> {
  static __F: (params: { bot: enums.InputUser; order: Array<string> }) => boolean = null as unknown as (params: { bot: enums.InputUser; order: Array<string> }) => boolean;
  /** The bot */
  bot: enums.InputUser;
  /** The new order for active usernames. All active usernames must be specified. */
  order: Array<string>;

  protected get [id](): number {
    return 0x9709B1C2;
  }

  static get [name](): string {
    return "bots.reorderUsernames"
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

/** Activate or deactivate a purchased [fragment.com](https://fragment.com) username associated to a bot we own. */
export class bots_toggleUsername_ extends Function_<boolean> {
  static __F: (params: { bot: enums.InputUser; username: string; active: boolean }) => boolean = null as unknown as (params: { bot: enums.InputUser; username: string; active: boolean }) => boolean;
  /** The bot */
  bot: enums.InputUser;
  /** Username */
  username: string;
  /** Whether to activate or deactivate it */
  active: boolean;

  protected get [id](): number {
    return 0x053CA973;
  }

  static get [name](): string {
    return "bots.toggleUsername"
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

/** Check whether the specified bot can send us messages */
export class bots_canSendMessage_ extends Function_<boolean> {
  static __F: (params: { bot: enums.InputUser }) => boolean = null as unknown as (params: { bot: enums.InputUser }) => boolean;
  /** The bot */
  bot: enums.InputUser;

  protected get [id](): number {
    return 0x1359F4E6;
  }

  static get [name](): string {
    return "bots.canSendMessage"
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

/** Allow the specified bot to send us messages */
export class bots_allowSendMessage_ extends Function_<enums.Updates> {
  static __F: (params: { bot: enums.InputUser }) => enums.Updates = null as unknown as (params: { bot: enums.InputUser }) => enums.Updates;
  /** The bot */
  bot: enums.InputUser;

  protected get [id](): number {
    return 0xF132E3EF;
  }

  static get [name](): string {
    return "bots.allowSendMessage"
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

/** Send a custom request from a [mini bot app](https://core.telegram.org/api/bots/webapps), triggered by a [web\_app\_invoke\_custom\_method event »](https://core.telegram.org/api/web-events#web-app-invoke-custom-method). */
export class bots_invokeWebViewCustomMethod_ extends Function_<enums.DataJSON> {
  static __F: (params: { bot: enums.InputUser; custom_method: string; params: enums.DataJSON }) => enums.DataJSON = null as unknown as (params: { bot: enums.InputUser; custom_method: string; params: enums.DataJSON }) => enums.DataJSON;
  /** Identifier of the bot associated to the [mini bot app](https://core.telegram.org/api/bots/webapps) */
  bot: enums.InputUser;
  /** Identifier of the custom method to invoke */
  custom_method: string;
  /** Method parameters */
  params: enums.DataJSON;

  protected get [id](): number {
    return 0x087FC5E7;
  }

  static get [name](): string {
    return "bots.invokeWebViewCustomMethod"
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

/** Get a payment form */
export class payments_getPaymentForm_ extends Function_<enums.payments.PaymentForm> {
  static __F: (params: { invoice: enums.InputInvoice; theme_params?: enums.DataJSON }) => enums.payments.PaymentForm = null as unknown as (params: { invoice: enums.InputInvoice; theme_params?: enums.DataJSON }) => enums.payments.PaymentForm;
  /** Invoice */
  invoice: enums.InputInvoice;
  /** A JSON object with the following keys, containing color theme information (integers, RGB24) to pass to the payment provider, to apply in eventual verification pages:  
  `bg_color` - Background color  
  `text_color` - Text color  
  `hint_color` - Hint text color  
  `link_color` - Link color  
  `button_color` - Button color  
  `button_text_color` - Button text color */
  theme_params?: enums.DataJSON;

  protected get [id](): number {
    return 0x37148DBB;
  }

  static get [name](): string {
    return "payments.getPaymentForm"
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

/** Get payment receipt */
export class payments_getPaymentReceipt_ extends Function_<enums.payments.PaymentReceipt> {
  static __F: (params: { peer: enums.InputPeer; msg_id: number }) => enums.payments.PaymentReceipt = null as unknown as (params: { peer: enums.InputPeer; msg_id: number }) => enums.payments.PaymentReceipt;
  /** The peer where the payment receipt was sent */
  peer: enums.InputPeer;
  /** Message ID of receipt */
  msg_id: number;

  protected get [id](): number {
    return 0x2478D1CC;
  }

  static get [name](): string {
    return "payments.getPaymentReceipt"
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

/** Submit requested order information for validation */
export class payments_validateRequestedInfo_ extends Function_<enums.payments.ValidatedRequestedInfo> {
  static __F: (params: { save?: true; invoice: enums.InputInvoice; info: enums.PaymentRequestedInfo }) => enums.payments.ValidatedRequestedInfo = null as unknown as (params: { save?: true; invoice: enums.InputInvoice; info: enums.PaymentRequestedInfo }) => enums.payments.ValidatedRequestedInfo;
  /** Save order information to re-use it for future orders */
  save?: true;
  /** Invoice */
  invoice: enums.InputInvoice;
  /** Requested order information */
  info: enums.PaymentRequestedInfo;

  protected get [id](): number {
    return 0xB6C8F12B;
  }

  static get [name](): string {
    return "payments.validateRequestedInfo"
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

/** Send compiled payment form */
export class payments_sendPaymentForm_ extends Function_<enums.payments.PaymentResult> {
  static __F: (params: { form_id: bigint; invoice: enums.InputInvoice; requested_info_id?: string; shipping_option_id?: string; credentials: enums.InputPaymentCredentials; tip_amount?: bigint }) => enums.payments.PaymentResult = null as unknown as (params: { form_id: bigint; invoice: enums.InputInvoice; requested_info_id?: string; shipping_option_id?: string; credentials: enums.InputPaymentCredentials; tip_amount?: bigint }) => enums.payments.PaymentResult;
  /** Form ID */
  form_id: bigint;
  /** Invoice */
  invoice: enums.InputInvoice;
  /** ID of saved and validated [order info](https://core.telegram.org/constructor/payments.validatedRequestedInfo) */
  requested_info_id?: string;
  /** Chosen shipping option ID */
  shipping_option_id?: string;
  /** Payment credentials */
  credentials: enums.InputPaymentCredentials;
  /** Tip, in the smallest units of the currency (integer, not float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
  tip_amount?: bigint;

  protected get [id](): number {
    return 0x2D03522F;
  }

  static get [name](): string {
    return "payments.sendPaymentForm"
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

/** Get saved payment information */
export class payments_getSavedInfo_ extends Function_<enums.payments.SavedInfo> {
  static __F: () => enums.payments.SavedInfo = null as unknown as () => enums.payments.SavedInfo;
  protected get [id](): number {
    return 0x227D824B;
  }

  static get [name](): string {
    return "payments.getSavedInfo"
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

/** Clear saved payment information */
export class payments_clearSavedInfo_ extends Function_<boolean> {
  static __F: (params?: { credentials?: true; info?: true }) => boolean = null as unknown as (params?: { credentials?: true; info?: true }) => boolean;
  /** Remove saved payment credentials */
  credentials?: true;
  /** Clear the last order settings saved by the user */
  info?: true;

  protected get [id](): number {
    return 0xD83D70C1;
  }

  static get [name](): string {
    return "payments.clearSavedInfo"
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

/** Get info about a credit card */
export class payments_getBankCardData_ extends Function_<enums.payments.BankCardData> {
  static __F: (params: { number: string }) => enums.payments.BankCardData = null as unknown as (params: { number: string }) => enums.payments.BankCardData;
  /** Credit card number */
  number: string;

  protected get [id](): number {
    return 0x2E79D779;
  }

  static get [name](): string {
    return "payments.getBankCardData"
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

/** Generate an [invoice deep link](https://core.telegram.org/api/links#invoice-links) */
export class payments_exportInvoice_ extends Function_<enums.payments.ExportedInvoice> {
  static __F: (params: { invoice_media: enums.InputMedia }) => enums.payments.ExportedInvoice = null as unknown as (params: { invoice_media: enums.InputMedia }) => enums.payments.ExportedInvoice;
  /** Invoice */
  invoice_media: enums.InputMedia;

  protected get [id](): number {
    return 0x0F91B065;
  }

  static get [name](): string {
    return "payments.exportInvoice"
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

/** Informs server about a purchase made through the App Store: for official applications only. */
export class payments_assignAppStoreTransaction_ extends Function_<enums.Updates> {
  static __F: (params: { receipt: Uint8Array; purpose: enums.InputStorePaymentPurpose }) => enums.Updates = null as unknown as (params: { receipt: Uint8Array; purpose: enums.InputStorePaymentPurpose }) => enums.Updates;
  /** Receipt */
  receipt: Uint8Array;
  /** Payment purpose */
  purpose: enums.InputStorePaymentPurpose;

  protected get [id](): number {
    return 0x80ED747D;
  }

  static get [name](): string {
    return "payments.assignAppStoreTransaction"
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

/** Informs server about a purchase made through the Play Store: for official applications only. */
export class payments_assignPlayMarketTransaction_ extends Function_<enums.Updates> {
  static __F: (params: { receipt: enums.DataJSON; purpose: enums.InputStorePaymentPurpose }) => enums.Updates = null as unknown as (params: { receipt: enums.DataJSON; purpose: enums.InputStorePaymentPurpose }) => enums.Updates;
  /** Receipt */
  receipt: enums.DataJSON;
  /** Payment purpose */
  purpose: enums.InputStorePaymentPurpose;

  protected get [id](): number {
    return 0xDFFD50D3;
  }

  static get [name](): string {
    return "payments.assignPlayMarketTransaction"
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

/** Checks whether Telegram Premium purchase is possible. Must be called before in-store Premium purchase, official apps only. */
export class payments_canPurchasePremium_ extends Function_<boolean> {
  static __F: (params: { purpose: enums.InputStorePaymentPurpose }) => boolean = null as unknown as (params: { purpose: enums.InputStorePaymentPurpose }) => boolean;
  /** Payment purpose */
  purpose: enums.InputStorePaymentPurpose;

  protected get [id](): number {
    return 0x9FC19EB6;
  }

  static get [name](): string {
    return "payments.canPurchasePremium"
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

/** Obtain a list of Telegram Premium [giveaway/gift code »](https://core.telegram.org/api/giveaways) options. */
export class payments_getPremiumGiftCodeOptions_ extends Function_<enums.PremiumGiftCodeOption[]> {
  static __F: (params?: { boost_peer?: enums.InputPeer }) => enums.PremiumGiftCodeOption[] = null as unknown as (params?: { boost_peer?: enums.InputPeer }) => enums.PremiumGiftCodeOption[];
  /** The channel that will start the giveaway */
  boost_peer?: enums.InputPeer;

  protected get [id](): number {
    return 0x2757BA54;
  }

  static get [name](): string {
    return "payments.getPremiumGiftCodeOptions"
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

/** Obtain information about a [Telegram Premium giftcode »](https://core.telegram.org/api/giveaways) */
export class payments_checkGiftCode_ extends Function_<enums.payments.CheckedGiftCode> {
  static __F: (params: { slug: string }) => enums.payments.CheckedGiftCode = null as unknown as (params: { slug: string }) => enums.payments.CheckedGiftCode;
  /** The giftcode to check */
  slug: string;

  protected get [id](): number {
    return 0x8E51B4C1;
  }

  static get [name](): string {
    return "payments.checkGiftCode"
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

/** Apply a [Telegram Premium giftcode »](https://core.telegram.org/api/giveaways) */
export class payments_applyGiftCode_ extends Function_<enums.Updates> {
  static __F: (params: { slug: string }) => enums.Updates = null as unknown as (params: { slug: string }) => enums.Updates;
  /** The code to apply */
  slug: string;

  protected get [id](): number {
    return 0xF6E26854;
  }

  static get [name](): string {
    return "payments.applyGiftCode"
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

/** Obtain information about a [Telegram Premium giveaway »](https://core.telegram.org/api/giveaways). */
export class payments_getGiveawayInfo_ extends Function_<enums.payments.GiveawayInfo> {
  static __F: (params: { peer: enums.InputPeer; msg_id: number }) => enums.payments.GiveawayInfo = null as unknown as (params: { peer: enums.InputPeer; msg_id: number }) => enums.payments.GiveawayInfo;
  /** The peer where the giveaway was posted. */
  peer: enums.InputPeer;
  /** Message ID of the [messageActionGiveawayLaunch](https://core.telegram.org/constructor/messageActionGiveawayLaunch) service message */
  msg_id: number;

  protected get [id](): number {
    return 0xF4239425;
  }

  static get [name](): string {
    return "payments.getGiveawayInfo"
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

/** Launch a [prepaid giveaway »](https://core.telegram.org/api/giveaways). */
export class payments_launchPrepaidGiveaway_ extends Function_<enums.Updates> {
  static __F: (params: { peer: enums.InputPeer; giveaway_id: bigint; purpose: enums.InputStorePaymentPurpose }) => enums.Updates = null as unknown as (params: { peer: enums.InputPeer; giveaway_id: bigint; purpose: enums.InputStorePaymentPurpose }) => enums.Updates;
  /** The peer where to launch the giveaway. */
  peer: enums.InputPeer;
  /** The prepaid giveaway ID. */
  giveaway_id: bigint;
  /** Giveway parameters */
  purpose: enums.InputStorePaymentPurpose;

  protected get [id](): number {
    return 0x5FF58F20;
  }

  static get [name](): string {
    return "payments.launchPrepaidGiveaway"
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

/** Create a stickerset, bots only. */
export class stickers_createStickerSet_ extends Function_<enums.messages.StickerSet> {
  static __F: (params: { masks?: true; animated?: true; videos?: true; emojis?: true; text_color?: true; user_id: enums.InputUser; title: string; short_name: string; thumb?: enums.InputDocument; stickers: Array<enums.InputStickerSetItem>; software?: string }) => enums.messages.StickerSet = null as unknown as (params: { masks?: true; animated?: true; videos?: true; emojis?: true; text_color?: true; user_id: enums.InputUser; title: string; short_name: string; thumb?: enums.InputDocument; stickers: Array<enums.InputStickerSetItem>; software?: string }) => enums.messages.StickerSet;
  /** Whether this is a mask stickerset */
  masks?: true;
  /** Whether this is an animated stickerset */
  animated?: true;
  /** Whether this is a video stickerset */
  videos?: true;
  /** Whether this is a [custom emoji](https://core.telegram.org/api/custom-emoji) stickerset. */
  emojis?: true;
  /** Whether the color of TGS custom emojis contained in this set should be changed to the text color when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context. For custom emoji stickersets only. */
  text_color?: true;
  /** Stickerset owner */
  user_id: enums.InputUser;
  /** Stickerset name, `1-64` chars */
  title: string;
  /** Short name of sticker set, to be used in [sticker deep links »](https://core.telegram.org/api/links#stickerset-links). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and, **if called by a bot**, must end in `"_by_<bot_username>"`. `<bot_username>` is case insensitive. 1-64 characters. */
  short_name: string;
  /** Thumbnail */
  thumb?: enums.InputDocument;
  /** Stickers */
  stickers: Array<enums.InputStickerSetItem>;
  /** Used when [importing stickers using the sticker import SDKs](https://core.telegram.org/import-stickers), specifies the name of the software that created the stickers */
  software?: string;

  protected get [id](): number {
    return 0x9021AB67;
  }

  static get [name](): string {
    return "stickers.createStickerSet"
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

/** Remove a sticker from the set where it belongs, bots only. The sticker set must have been created by the bot. */
export class stickers_removeStickerFromSet_ extends Function_<enums.messages.StickerSet> {
  static __F: (params: { sticker: enums.InputDocument }) => enums.messages.StickerSet = null as unknown as (params: { sticker: enums.InputDocument }) => enums.messages.StickerSet;
  /** The sticker to remove */
  sticker: enums.InputDocument;

  protected get [id](): number {
    return 0xF7760F51;
  }

  static get [name](): string {
    return "stickers.removeStickerFromSet"
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

/** Changes the absolute position of a sticker in the set to which it belongs; for bots only. The sticker set must have been created by the bot */
export class stickers_changeStickerPosition_ extends Function_<enums.messages.StickerSet> {
  static __F: (params: { sticker: enums.InputDocument; position: number }) => enums.messages.StickerSet = null as unknown as (params: { sticker: enums.InputDocument; position: number }) => enums.messages.StickerSet;
  /** The sticker */
  sticker: enums.InputDocument;
  /** The new position of the sticker, zero-based */
  position: number;

  protected get [id](): number {
    return 0xFFB6D4CA;
  }

  static get [name](): string {
    return "stickers.changeStickerPosition"
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

/** Add a sticker to a stickerset, bots only. The sticker set must have been created by the bot. */
export class stickers_addStickerToSet_ extends Function_<enums.messages.StickerSet> {
  static __F: (params: { stickerset: enums.InputStickerSet; sticker: enums.InputStickerSetItem }) => enums.messages.StickerSet = null as unknown as (params: { stickerset: enums.InputStickerSet; sticker: enums.InputStickerSetItem }) => enums.messages.StickerSet;
  /** The stickerset */
  stickerset: enums.InputStickerSet;
  /** The sticker */
  sticker: enums.InputStickerSetItem;

  protected get [id](): number {
    return 0x8653FEBE;
  }

  static get [name](): string {
    return "stickers.addStickerToSet"
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

/** Set stickerset thumbnail */
export class stickers_setStickerSetThumb_ extends Function_<enums.messages.StickerSet> {
  static __F: (params: { stickerset: enums.InputStickerSet; thumb?: enums.InputDocument; thumb_document_id?: bigint }) => enums.messages.StickerSet = null as unknown as (params: { stickerset: enums.InputStickerSet; thumb?: enums.InputDocument; thumb_document_id?: bigint }) => enums.messages.StickerSet;
  /** Stickerset */
  stickerset: enums.InputStickerSet;
  /** Thumbnail (only for normal stickersets, not custom emoji stickersets). */
  thumb?: enums.InputDocument;
  /** Only for [custom emoji stickersets](https://core.telegram.org/api/custom-emoji), ID of a custom emoji present in the set to use as thumbnail; pass 0 to fallback to the first custom emoji of the set. */
  thumb_document_id?: bigint;

  protected get [id](): number {
    return 0xA76A5392;
  }

  static get [name](): string {
    return "stickers.setStickerSetThumb"
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

/** Check whether the given short name is available */
export class stickers_checkShortName_ extends Function_<boolean> {
  static __F: (params: { short_name: string }) => boolean = null as unknown as (params: { short_name: string }) => boolean;
  /** Short name */
  short_name: string;

  protected get [id](): number {
    return 0x284B3639;
  }

  static get [name](): string {
    return "stickers.checkShortName"
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

/** Suggests a short name for a given stickerpack name */
export class stickers_suggestShortName_ extends Function_<enums.stickers.SuggestedShortName> {
  static __F: (params: { title: string }) => enums.stickers.SuggestedShortName = null as unknown as (params: { title: string }) => enums.stickers.SuggestedShortName;
  /** Sticker pack name */
  title: string;

  protected get [id](): number {
    return 0x4DAFC503;
  }

  static get [name](): string {
    return "stickers.suggestShortName"
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

/** Update the keywords, emojis or [mask coordinates](https://core.telegram.org/api/stickers#mask-stickers) of a sticker, bots only. */
export class stickers_changeSticker_ extends Function_<enums.messages.StickerSet> {
  static __F: (params: { sticker: enums.InputDocument; emoji?: string; mask_coords?: enums.MaskCoords; keywords?: string }) => enums.messages.StickerSet = null as unknown as (params: { sticker: enums.InputDocument; emoji?: string; mask_coords?: enums.MaskCoords; keywords?: string }) => enums.messages.StickerSet;
  /** The sticker */
  sticker: enums.InputDocument;
  /** If set, updates the emoji list associated to the sticker */
  emoji?: string;
  /** If set, updates the [mask coordinates](https://core.telegram.org/api/stickers#mask-stickers) */
  mask_coords?: enums.MaskCoords;
  /** If set, updates the sticker keywords (separated by commas). Can't be provided for mask stickers. */
  keywords?: string;

  protected get [id](): number {
    return 0xF5537EBC;
  }

  static get [name](): string {
    return "stickers.changeSticker"
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

/** Renames a stickerset, bots only. */
export class stickers_renameStickerSet_ extends Function_<enums.messages.StickerSet> {
  static __F: (params: { stickerset: enums.InputStickerSet; title: string }) => enums.messages.StickerSet = null as unknown as (params: { stickerset: enums.InputStickerSet; title: string }) => enums.messages.StickerSet;
  /** Stickerset to rename */
  stickerset: enums.InputStickerSet;
  /** New stickerset title */
  title: string;

  protected get [id](): number {
    return 0x124B1C00;
  }

  static get [name](): string {
    return "stickers.renameStickerSet"
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

/** Deletes a stickerset we created, bots only. */
export class stickers_deleteStickerSet_ extends Function_<boolean> {
  static __F: (params: { stickerset: enums.InputStickerSet }) => boolean = null as unknown as (params: { stickerset: enums.InputStickerSet }) => boolean;
  /** Stickerset to delete */
  stickerset: enums.InputStickerSet;

  protected get [id](): number {
    return 0x87704394;
  }

  static get [name](): string {
    return "stickers.deleteStickerSet"
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

/** Get phone call configuration to be passed to libtgvoip's shared config */
export class phone_getCallConfig_ extends Function_<enums.DataJSON> {
  static __F: () => enums.DataJSON = null as unknown as () => enums.DataJSON;
  protected get [id](): number {
    return 0x55451FA9;
  }

  static get [name](): string {
    return "phone.getCallConfig"
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

/** Start a telegram phone call */
export class phone_requestCall_ extends Function_<enums.phone.PhoneCall> {
  static __F: (params: { video?: true; user_id: enums.InputUser; random_id: number; g_a_hash: Uint8Array; protocol: enums.PhoneCallProtocol }) => enums.phone.PhoneCall = null as unknown as (params: { video?: true; user_id: enums.InputUser; random_id: number; g_a_hash: Uint8Array; protocol: enums.PhoneCallProtocol }) => enums.phone.PhoneCall;
  /** Whether to start a video call */
  video?: true;
  /** Destination of the phone call */
  user_id: enums.InputUser;
  /** Random ID to avoid resending the same object */
  random_id: number;
  /** [Parameter for E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) */
  g_a_hash: Uint8Array;
  /** Phone call settings */
  protocol: enums.PhoneCallProtocol;

  protected get [id](): number {
    return 0x42FF96ED;
  }

  static get [name](): string {
    return "phone.requestCall"
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

/** Accept incoming call */
export class phone_acceptCall_ extends Function_<enums.phone.PhoneCall> {
  static __F: (params: { peer: enums.InputPhoneCall; g_b: Uint8Array; protocol: enums.PhoneCallProtocol }) => enums.phone.PhoneCall = null as unknown as (params: { peer: enums.InputPhoneCall; g_b: Uint8Array; protocol: enums.PhoneCallProtocol }) => enums.phone.PhoneCall;
  /** The call to accept */
  peer: enums.InputPhoneCall;
  /** [Parameter for E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) */
  g_b: Uint8Array;
  /** Phone call settings */
  protocol: enums.PhoneCallProtocol;

  protected get [id](): number {
    return 0x3BD2B4A0;
  }

  static get [name](): string {
    return "phone.acceptCall"
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

/** [Complete phone call E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) */
export class phone_confirmCall_ extends Function_<enums.phone.PhoneCall> {
  static __F: (params: { peer: enums.InputPhoneCall; g_a: Uint8Array; key_fingerprint: bigint; protocol: enums.PhoneCallProtocol }) => enums.phone.PhoneCall = null as unknown as (params: { peer: enums.InputPhoneCall; g_a: Uint8Array; key_fingerprint: bigint; protocol: enums.PhoneCallProtocol }) => enums.phone.PhoneCall;
  /** The phone call */
  peer: enums.InputPhoneCall;
  /** [Parameter for E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) */
  g_a: Uint8Array;
  /** Key fingerprint */
  key_fingerprint: bigint;
  /** Phone call settings */
  protocol: enums.PhoneCallProtocol;

  protected get [id](): number {
    return 0x2EFE1722;
  }

  static get [name](): string {
    return "phone.confirmCall"
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

/** Optional: notify the server that the user is currently busy in a call: this will automatically refuse all incoming phone calls until the current phone call is ended. */
export class phone_receivedCall_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPhoneCall }) => boolean = null as unknown as (params: { peer: enums.InputPhoneCall }) => boolean;
  /** The phone call we're currently in */
  peer: enums.InputPhoneCall;

  protected get [id](): number {
    return 0x17D54F61;
  }

  static get [name](): string {
    return "phone.receivedCall"
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

/** Refuse or end running call */
export class phone_discardCall_ extends Function_<enums.Updates> {
  static __F: (params: { video?: true; peer: enums.InputPhoneCall; duration: number; reason: enums.PhoneCallDiscardReason; connection_id: bigint }) => enums.Updates = null as unknown as (params: { video?: true; peer: enums.InputPhoneCall; duration: number; reason: enums.PhoneCallDiscardReason; connection_id: bigint }) => enums.Updates;
  /** Whether this is a video call */
  video?: true;
  /** The phone call */
  peer: enums.InputPhoneCall;
  /** Call duration */
  duration: number;
  /** Why was the call discarded */
  reason: enums.PhoneCallDiscardReason;
  /** Preferred libtgvoip relay ID */
  connection_id: bigint;

  protected get [id](): number {
    return 0xB2CBC1C0;
  }

  static get [name](): string {
    return "phone.discardCall"
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

/** Rate a call, returns info about the rating message sent to the official VoIP bot. */
export class phone_setCallRating_ extends Function_<enums.Updates> {
  static __F: (params: { user_initiative?: true; peer: enums.InputPhoneCall; rating: number; comment: string }) => enums.Updates = null as unknown as (params: { user_initiative?: true; peer: enums.InputPhoneCall; rating: number; comment: string }) => enums.Updates;
  /** Whether the user decided on their own initiative to rate the call */
  user_initiative?: true;
  /** The call to rate */
  peer: enums.InputPhoneCall;
  /** Rating in `1-5` stars */
  rating: number;
  /** An additional comment */
  comment: string;

  protected get [id](): number {
    return 0x59EAD627;
  }

  static get [name](): string {
    return "phone.setCallRating"
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

/** Send phone call debug data to server */
export class phone_saveCallDebug_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPhoneCall; debug: enums.DataJSON }) => boolean = null as unknown as (params: { peer: enums.InputPhoneCall; debug: enums.DataJSON }) => boolean;
  /** Phone call */
  peer: enums.InputPhoneCall;
  /** Debug statistics obtained from libtgvoip */
  debug: enums.DataJSON;

  protected get [id](): number {
    return 0x277ADD7E;
  }

  static get [name](): string {
    return "phone.saveCallDebug"
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

/** Send VoIP signaling data */
export class phone_sendSignalingData_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPhoneCall; data: Uint8Array }) => boolean = null as unknown as (params: { peer: enums.InputPhoneCall; data: Uint8Array }) => boolean;
  /** Phone call */
  peer: enums.InputPhoneCall;
  /** Signaling payload */
  data: Uint8Array;

  protected get [id](): number {
    return 0xFF7A9383;
  }

  static get [name](): string {
    return "phone.sendSignalingData"
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

/** Create a group call or livestream */
export class phone_createGroupCall_ extends Function_<enums.Updates> {
  static __F: (params: { rtmp_stream?: true; peer: enums.InputPeer; random_id: number; title?: string; schedule_date?: number }) => enums.Updates = null as unknown as (params: { rtmp_stream?: true; peer: enums.InputPeer; random_id: number; title?: string; schedule_date?: number }) => enums.Updates;
  /** Whether RTMP stream support should be enabled: only the [group/supergroup/channel](https://core.telegram.org/api/channel) owner can use this flag. */
  rtmp_stream?: true;
  /** Associate the group call or livestream to the provided [group/supergroup/channel](https://core.telegram.org/api/channel) */
  peer: enums.InputPeer;
  /** Unique client message ID required to prevent creation of duplicate group calls */
  random_id: number;
  /** Call title */
  title?: string;
  /** For scheduled group call or livestreams, the absolute date when the group call will start */
  schedule_date?: number;

  protected get [id](): number {
    return 0x48CDC6D8;
  }

  static get [name](): string {
    return "phone.createGroupCall"
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

/** Join a group call */
export class phone_joinGroupCall_ extends Function_<enums.Updates> {
  static __F: (params: { muted?: true; video_stopped?: true; call: enums.InputGroupCall; join_as: enums.InputPeer; invite_hash?: string; params: enums.DataJSON }) => enums.Updates = null as unknown as (params: { muted?: true; video_stopped?: true; call: enums.InputGroupCall; join_as: enums.InputPeer; invite_hash?: string; params: enums.DataJSON }) => enums.Updates;
  /** If set, the user will be muted by default upon joining. */
  muted?: true;
  /** If set, the user's video will be disabled by default upon joining. */
  video_stopped?: true;
  /** The group call */
  call: enums.InputGroupCall;
  /** Join the group call, presenting yourself as the specified user/channel */
  join_as: enums.InputPeer;
  /** The invitation hash from the [invite link »](https://core.telegram.org/api/links#video-chat-livestream-links), if provided allows speaking in a livestream or muted group chat. */
  invite_hash?: string;
  /** WebRTC parameters */
  params: enums.DataJSON;

  protected get [id](): number {
    return 0xB132FF7B;
  }

  static get [name](): string {
    return "phone.joinGroupCall"
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

/** Leave a group call */
export class phone_leaveGroupCall_ extends Function_<enums.Updates> {
  static __F: (params: { call: enums.InputGroupCall; source: number }) => enums.Updates = null as unknown as (params: { call: enums.InputGroupCall; source: number }) => enums.Updates;
  /** The group call */
  call: enums.InputGroupCall;
  /** Your source ID */
  source: number;

  protected get [id](): number {
    return 0x500377F9;
  }

  static get [name](): string {
    return "phone.leaveGroupCall"
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

/** Invite a set of users to a group call. */
export class phone_inviteToGroupCall_ extends Function_<enums.Updates> {
  static __F: (params: { call: enums.InputGroupCall; users: Array<enums.InputUser> }) => enums.Updates = null as unknown as (params: { call: enums.InputGroupCall; users: Array<enums.InputUser> }) => enums.Updates;
  /** The group call */
  call: enums.InputGroupCall;
  /** The users to invite. */
  users: Array<enums.InputUser>;

  protected get [id](): number {
    return 0x7B393160;
  }

  static get [name](): string {
    return "phone.inviteToGroupCall"
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

/** Terminate a group call */
export class phone_discardGroupCall_ extends Function_<enums.Updates> {
  static __F: (params: { call: enums.InputGroupCall }) => enums.Updates = null as unknown as (params: { call: enums.InputGroupCall }) => enums.Updates;
  /** The group call to terminate */
  call: enums.InputGroupCall;

  protected get [id](): number {
    return 0x7A777135;
  }

  static get [name](): string {
    return "phone.discardGroupCall"
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

/** Change group call settings */
export class phone_toggleGroupCallSettings_ extends Function_<enums.Updates> {
  static __F: (params: { reset_invite_hash?: true; call: enums.InputGroupCall; join_muted?: boolean }) => enums.Updates = null as unknown as (params: { reset_invite_hash?: true; call: enums.InputGroupCall; join_muted?: boolean }) => enums.Updates;
  /** Invalidate existing invite links */
  reset_invite_hash?: true;
  /** Group call */
  call: enums.InputGroupCall;
  /** Whether all users will that join this group call are muted by default upon joining the group call */
  join_muted?: boolean;

  protected get [id](): number {
    return 0x74BBB43D;
  }

  static get [name](): string {
    return "phone.toggleGroupCallSettings"
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

/** Get info about a group call */
export class phone_getGroupCall_ extends Function_<enums.phone.GroupCall> {
  static __F: (params: { call: enums.InputGroupCall; limit: number }) => enums.phone.GroupCall = null as unknown as (params: { call: enums.InputGroupCall; limit: number }) => enums.phone.GroupCall;
  /** The group call */
  call: enums.InputGroupCall;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0x041845DB;
  }

  static get [name](): string {
    return "phone.getGroupCall"
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

/** Get group call participants */
export class phone_getGroupParticipants_ extends Function_<enums.phone.GroupParticipants> {
  static __F: (params: { call: enums.InputGroupCall; ids: Array<enums.InputPeer>; sources: Array<number>; offset: string; limit: number }) => enums.phone.GroupParticipants = null as unknown as (params: { call: enums.InputGroupCall; ids: Array<enums.InputPeer>; sources: Array<number>; offset: string; limit: number }) => enums.phone.GroupParticipants;
  /** Group call */
  call: enums.InputGroupCall;
  /** If specified, will fetch group participant info about the specified peers */
  ids: Array<enums.InputPeer>;
  /** If specified, will fetch group participant info about the specified WebRTC source IDs */
  sources: Array<number>;
  /** Offset for results, taken from the `next_offset` field of [phone.groupParticipants](https://core.telegram.org/constructor/phone.groupParticipants), initially an empty string.  
  Note: if no more results are available, the method call will return an empty `next_offset`; thus, avoid providing the `next_offset` returned in [phone.groupParticipants](https://core.telegram.org/constructor/phone.groupParticipants) if it is empty, to avoid an infinite loop. */
  offset: string;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0xC558D8AB;
  }

  static get [name](): string {
    return "phone.getGroupParticipants"
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

/** Check whether the group call Server Forwarding Unit is currently receiving the streams with the specified WebRTC source IDs.  
Returns an intersection of the source IDs specified in `sources`, and the source IDs currently being forwarded by the SFU. */
export class phone_checkGroupCall_ extends Function_<number[]> {
  static __F: (params: { call: enums.InputGroupCall; sources: Array<number> }) => number[] = null as unknown as (params: { call: enums.InputGroupCall; sources: Array<number> }) => number[];
  /** Group call */
  call: enums.InputGroupCall;
  /** Source IDs */
  sources: Array<number>;

  protected get [id](): number {
    return 0xB59CF977;
  }

  static get [name](): string {
    return "phone.checkGroupCall"
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

/** Start or stop recording a group call: the recorded audio and video streams will be automatically sent to `Saved messages` (the chat with ourselves). */
export class phone_toggleGroupCallRecord_ extends Function_<enums.Updates> {
  static __F: (params: { start?: true; video?: true; call: enums.InputGroupCall; title?: string; video_portrait?: boolean }) => enums.Updates = null as unknown as (params: { start?: true; video?: true; call: enums.InputGroupCall; title?: string; video_portrait?: boolean }) => enums.Updates;
  /** Whether to start or stop recording */
  start?: true;
  /** Whether to also record video streams */
  video?: true;
  /** The group call or livestream */
  call: enums.InputGroupCall;
  /** Recording title */
  title?: string;
  /** If video stream recording is enabled, whether to record in portrait or landscape mode */
  video_portrait?: boolean;

  protected get [id](): number {
    return 0xF128C708;
  }

  static get [name](): string {
    return "phone.toggleGroupCallRecord"
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

/** Edit information about a given group call participant */
export class phone_editGroupCallParticipant_ extends Function_<enums.Updates> {
  static __F: (params: { call: enums.InputGroupCall; participant: enums.InputPeer; muted?: boolean; volume?: number; raise_hand?: boolean; video_stopped?: boolean; video_paused?: boolean; presentation_paused?: boolean }) => enums.Updates = null as unknown as (params: { call: enums.InputGroupCall; participant: enums.InputPeer; muted?: boolean; volume?: number; raise_hand?: boolean; video_stopped?: boolean; video_paused?: boolean; presentation_paused?: boolean }) => enums.Updates;
  /** The group call */
  call: enums.InputGroupCall;
  /** The group call participant (can also be the user itself) */
  participant: enums.InputPeer;
  /** Whether to mute or unmute the specified participant */
  muted?: boolean;
  /** New volume */
  volume?: number;
  /** Raise or lower hand */
  raise_hand?: boolean;
  /** Start or stop the video stream */
  video_stopped?: boolean;
  /** Pause or resume the video stream */
  video_paused?: boolean;
  /** Pause or resume the screen sharing stream */
  presentation_paused?: boolean;

  protected get [id](): number {
    return 0xA5273ABF;
  }

  static get [name](): string {
    return "phone.editGroupCallParticipant"
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

/** Edit the title of a group call or livestream */
export class phone_editGroupCallTitle_ extends Function_<enums.Updates> {
  static __F: (params: { call: enums.InputGroupCall; title: string }) => enums.Updates = null as unknown as (params: { call: enums.InputGroupCall; title: string }) => enums.Updates;
  /** Group call */
  call: enums.InputGroupCall;
  /** New title */
  title: string;

  protected get [id](): number {
    return 0x1CA6AC0A;
  }

  static get [name](): string {
    return "phone.editGroupCallTitle"
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

/** Get a list of peers that can be used to join a group call, presenting yourself as a specific user/channel. */
export class phone_getGroupCallJoinAs_ extends Function_<enums.phone.JoinAsPeers> {
  static __F: (params: { peer: enums.InputPeer }) => enums.phone.JoinAsPeers = null as unknown as (params: { peer: enums.InputPeer }) => enums.phone.JoinAsPeers;
  /** The dialog whose group call or livestream we're trying to join */
  peer: enums.InputPeer;

  protected get [id](): number {
    return 0xEF7C213A;
  }

  static get [name](): string {
    return "phone.getGroupCallJoinAs"
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

/** Get an [invite link](https://core.telegram.org/api/links#video-chat-livestream-links) for a group call or livestream */
export class phone_exportGroupCallInvite_ extends Function_<enums.phone.ExportedGroupCallInvite> {
  static __F: (params: { can_self_unmute?: true; call: enums.InputGroupCall }) => enums.phone.ExportedGroupCallInvite = null as unknown as (params: { can_self_unmute?: true; call: enums.InputGroupCall }) => enums.phone.ExportedGroupCallInvite;
  /** For livestreams or muted group chats, if set, users that join using this link will be able to speak without explicitly requesting permission by (for example by raising their hand). */
  can_self_unmute?: true;
  /** The group call */
  call: enums.InputGroupCall;

  protected get [id](): number {
    return 0xE6AA647F;
  }

  static get [name](): string {
    return "phone.exportGroupCallInvite"
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

/** Subscribe or unsubscribe to a scheduled group call */
export class phone_toggleGroupCallStartSubscription_ extends Function_<enums.Updates> {
  static __F: (params: { call: enums.InputGroupCall; subscribed: boolean }) => enums.Updates = null as unknown as (params: { call: enums.InputGroupCall; subscribed: boolean }) => enums.Updates;
  /** Scheduled group call */
  call: enums.InputGroupCall;
  /** Enable or disable subscription */
  subscribed: boolean;

  protected get [id](): number {
    return 0x219C34E6;
  }

  static get [name](): string {
    return "phone.toggleGroupCallStartSubscription"
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

/** Start a scheduled group call. */
export class phone_startScheduledGroupCall_ extends Function_<enums.Updates> {
  static __F: (params: { call: enums.InputGroupCall }) => enums.Updates = null as unknown as (params: { call: enums.InputGroupCall }) => enums.Updates;
  /** The scheduled group call */
  call: enums.InputGroupCall;

  protected get [id](): number {
    return 0x5680E342;
  }

  static get [name](): string {
    return "phone.startScheduledGroupCall"
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

/** Set the default peer that will be used to join a group call in a specific dialog. */
export class phone_saveDefaultGroupCallJoinAs_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; join_as: enums.InputPeer }) => boolean = null as unknown as (params: { peer: enums.InputPeer; join_as: enums.InputPeer }) => boolean;
  /** The dialog */
  peer: enums.InputPeer;
  /** The default peer that will be used to join group calls in this dialog, presenting yourself as a specific user/channel. */
  join_as: enums.InputPeer;

  protected get [id](): number {
    return 0x575E1F8C;
  }

  static get [name](): string {
    return "phone.saveDefaultGroupCallJoinAs"
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

/** Start screen sharing in a call */
export class phone_joinGroupCallPresentation_ extends Function_<enums.Updates> {
  static __F: (params: { call: enums.InputGroupCall; params: enums.DataJSON }) => enums.Updates = null as unknown as (params: { call: enums.InputGroupCall; params: enums.DataJSON }) => enums.Updates;
  /** The group call */
  call: enums.InputGroupCall;
  /** WebRTC parameters */
  params: enums.DataJSON;

  protected get [id](): number {
    return 0xCBEA6BC4;
  }

  static get [name](): string {
    return "phone.joinGroupCallPresentation"
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

/** Stop screen sharing in a group call */
export class phone_leaveGroupCallPresentation_ extends Function_<enums.Updates> {
  static __F: (params: { call: enums.InputGroupCall }) => enums.Updates = null as unknown as (params: { call: enums.InputGroupCall }) => enums.Updates;
  /** The group call */
  call: enums.InputGroupCall;

  protected get [id](): number {
    return 0x1C50D144;
  }

  static get [name](): string {
    return "phone.leaveGroupCallPresentation"
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

/** Get info about RTMP streams in a group call or livestream.  
This method should be invoked to the same group/channel-related DC used for [downloading livestream chunks](https://core.telegram.org/api/files#downloading-files).  
As usual, the media DC is preferred, if available. */
export class phone_getGroupCallStreamChannels_ extends Function_<enums.phone.GroupCallStreamChannels> {
  static __F: (params: { call: enums.InputGroupCall }) => enums.phone.GroupCallStreamChannels = null as unknown as (params: { call: enums.InputGroupCall }) => enums.phone.GroupCallStreamChannels;
  /** Group call or livestream */
  call: enums.InputGroupCall;

  protected get [id](): number {
    return 0x1AB21940;
  }

  static get [name](): string {
    return "phone.getGroupCallStreamChannels"
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

/** Get RTMP URL and stream key for RTMP livestreams. Can be used even before creating the actual RTMP livestream with [phone.createGroupCall](https://core.telegram.org/method/phone.createGroupCall) (the `rtmp_stream` flag must be set). */
export class phone_getGroupCallStreamRtmpUrl_ extends Function_<enums.phone.GroupCallStreamRtmpUrl> {
  static __F: (params: { peer: enums.InputPeer; revoke: boolean }) => enums.phone.GroupCallStreamRtmpUrl = null as unknown as (params: { peer: enums.InputPeer; revoke: boolean }) => enums.phone.GroupCallStreamRtmpUrl;
  /** Peer to livestream into */
  peer: enums.InputPeer;
  /** Whether to revoke the previous stream key or simply return the existing one */
  revoke: boolean;

  protected get [id](): number {
    return 0xDEB3ABBF;
  }

  static get [name](): string {
    return "phone.getGroupCallStreamRtmpUrl"
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

/** Save phone call debug information */
export class phone_saveCallLog_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPhoneCall; file: enums.InputFile }) => boolean = null as unknown as (params: { peer: enums.InputPhoneCall; file: enums.InputFile }) => boolean;
  /** Phone call */
  peer: enums.InputPhoneCall;
  /** Logs */
  file: enums.InputFile;

  protected get [id](): number {
    return 0x41248786;
  }

  static get [name](): string {
    return "phone.saveCallLog"
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

/** Get localization pack strings */
export class langpack_getLangPack_ extends Function_<enums.LangPackDifference> {
  static __F: (params: { lang_pack: string; lang_code: string }) => enums.LangPackDifference = null as unknown as (params: { lang_pack: string; lang_code: string }) => enums.LangPackDifference;
  /** Language pack name, usually obtained from a [language pack link](https://core.telegram.org/api/links#language-pack-links) */
  lang_pack: string;
  /** Language code */
  lang_code: string;

  protected get [id](): number {
    return 0xF2F2330A;
  }

  static get [name](): string {
    return "langpack.getLangPack"
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

/** Get strings from a language pack */
export class langpack_getStrings_ extends Function_<enums.LangPackString[]> {
  static __F: (params: { lang_pack: string; lang_code: string; keys: Array<string> }) => enums.LangPackString[] = null as unknown as (params: { lang_pack: string; lang_code: string; keys: Array<string> }) => enums.LangPackString[];
  /** Language pack name, usually obtained from a [language pack link](https://core.telegram.org/api/links#language-pack-links) */
  lang_pack: string;
  /** Language code */
  lang_code: string;
  /** Strings to get */
  keys: Array<string>;

  protected get [id](): number {
    return 0xEFEA3803;
  }

  static get [name](): string {
    return "langpack.getStrings"
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

/** Get new strings in language pack */
export class langpack_getDifference_ extends Function_<enums.LangPackDifference> {
  static __F: (params: { lang_pack: string; lang_code: string; from_version: number }) => enums.LangPackDifference = null as unknown as (params: { lang_pack: string; lang_code: string; from_version: number }) => enums.LangPackDifference;
  /** Language pack */
  lang_pack: string;
  /** Language code */
  lang_code: string;
  /** Previous localization pack version */
  from_version: number;

  protected get [id](): number {
    return 0xCD984AA5;
  }

  static get [name](): string {
    return "langpack.getDifference"
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

/** Get information about all languages in a localization pack */
export class langpack_getLanguages_ extends Function_<enums.LangPackLanguage[]> {
  static __F: (params: { lang_pack: string }) => enums.LangPackLanguage[] = null as unknown as (params: { lang_pack: string }) => enums.LangPackLanguage[];
  /** Language pack */
  lang_pack: string;

  protected get [id](): number {
    return 0x42C6978F;
  }

  static get [name](): string {
    return "langpack.getLanguages"
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

/** Get information about a language in a localization pack */
export class langpack_getLanguage_ extends Function_<enums.LangPackLanguage> {
  static __F: (params: { lang_pack: string; lang_code: string }) => enums.LangPackLanguage = null as unknown as (params: { lang_pack: string; lang_code: string }) => enums.LangPackLanguage;
  /** Language pack name, usually obtained from a [language pack link](https://core.telegram.org/api/links#language-pack-links) */
  lang_pack: string;
  /** Language code */
  lang_code: string;

  protected get [id](): number {
    return 0x6A596502;
  }

  static get [name](): string {
    return "langpack.getLanguage"
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

/** Edit peers in [peer folder](https://core.telegram.org/api/folders#peer-folders) */
export class folders_editPeerFolders_ extends Function_<enums.Updates> {
  static __F: (params: { folder_peers: Array<enums.InputFolderPeer> }) => enums.Updates = null as unknown as (params: { folder_peers: Array<enums.InputFolderPeer> }) => enums.Updates;
  /** New peer list */
  folder_peers: Array<enums.InputFolderPeer>;

  protected get [id](): number {
    return 0x6847D0AB;
  }

  static get [name](): string {
    return "folders.editPeerFolders"
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

/** Get [channel statistics](https://core.telegram.org/api/stats) */
export class stats_getBroadcastStats_ extends Function_<enums.stats.BroadcastStats> {
  static __F: (params: { dark?: true; channel: enums.InputChannel }) => enums.stats.BroadcastStats = null as unknown as (params: { dark?: true; channel: enums.InputChannel }) => enums.stats.BroadcastStats;
  /** Whether to enable dark theme for graph colors */
  dark?: true;
  /** The channel */
  channel: enums.InputChannel;

  protected get [id](): number {
    return 0xAB42441A;
  }

  static get [name](): string {
    return "stats.getBroadcastStats"
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

/** Load [channel statistics graph](https://core.telegram.org/api/stats) asynchronously */
export class stats_loadAsyncGraph_ extends Function_<enums.StatsGraph> {
  static __F: (params: { token: string; x?: bigint }) => enums.StatsGraph = null as unknown as (params: { token: string; x?: bigint }) => enums.StatsGraph;
  /** Graph token from [statsGraphAsync](https://core.telegram.org/constructor/statsGraphAsync) constructor */
  token: string;
  /** Zoom value, if required */
  x?: bigint;

  protected get [id](): number {
    return 0x621D5FA0;
  }

  static get [name](): string {
    return "stats.loadAsyncGraph"
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

/** Get [supergroup statistics](https://core.telegram.org/api/stats) */
export class stats_getMegagroupStats_ extends Function_<enums.stats.MegagroupStats> {
  static __F: (params: { dark?: true; channel: enums.InputChannel }) => enums.stats.MegagroupStats = null as unknown as (params: { dark?: true; channel: enums.InputChannel }) => enums.stats.MegagroupStats;
  /** Whether to enable dark theme for graph colors */
  dark?: true;
  /** [Supergroup ID](https://core.telegram.org/api/channel) */
  channel: enums.InputChannel;

  protected get [id](): number {
    return 0xDCDF8607;
  }

  static get [name](): string {
    return "stats.getMegagroupStats"
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

/** Obtains a list of messages, indicating to which other public channels was a channel message forwarded.  
Will return a list of [messages](https://core.telegram.org/constructor/message) with `peer_id` equal to the public channel to which this message was forwarded. */
export class stats_getMessagePublicForwards_ extends Function_<enums.stats.PublicForwards> {
  static __F: (params: { channel: enums.InputChannel; msg_id: number; offset: string; limit: number }) => enums.stats.PublicForwards = null as unknown as (params: { channel: enums.InputChannel; msg_id: number; offset: string; limit: number }) => enums.stats.PublicForwards;
  /** Source channel */
  channel: enums.InputChannel;
  /** Source message ID */
  msg_id: number;
  /** Offset for [pagination](https://core.telegram.org/api/offsets), empty string on first call, then use the `next_offset` field of the returned constructor (if present, otherwise no more results are available). */
  offset: string;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0x5F150144;
  }

  static get [name](): string {
    return "stats.getMessagePublicForwards"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types._InputChannel, "InputChannel"],
      ["msg_id", "number", "int"],
      ["offset", "string", "string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types._InputChannel, "InputChannel"],
      [this.msg_id, "number", "int"],
      [this.offset, "string", "string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { channel: enums.InputChannel; msg_id: number; offset: string; limit: number }) {
    super();
    this.channel = params.channel;
    this.msg_id = params.msg_id;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

/** Get [message statistics](https://core.telegram.org/api/stats) */
export class stats_getMessageStats_ extends Function_<enums.stats.MessageStats> {
  static __F: (params: { dark?: true; channel: enums.InputChannel; msg_id: number }) => enums.stats.MessageStats = null as unknown as (params: { dark?: true; channel: enums.InputChannel; msg_id: number }) => enums.stats.MessageStats;
  /** Whether to enable dark theme for graph colors */
  dark?: true;
  /** Channel ID */
  channel: enums.InputChannel;
  /** Message ID */
  msg_id: number;

  protected get [id](): number {
    return 0xB6E0A3F5;
  }

  static get [name](): string {
    return "stats.getMessageStats"
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

/** Get [statistics](https://core.telegram.org/api/stats) for a certain [story](https://core.telegram.org/api/stories). */
export class stats_getStoryStats_ extends Function_<enums.stats.StoryStats> {
  static __F: (params: { dark?: true; peer: enums.InputPeer; id: number }) => enums.stats.StoryStats = null as unknown as (params: { dark?: true; peer: enums.InputPeer; id: number }) => enums.stats.StoryStats;
  /** Whether to enable the dark theme for graph colors */
  dark?: true;
  /** The peer that posted the story */
  peer: enums.InputPeer;
  /** Story ID */
  id: number;

  protected get [id](): number {
    return 0x374FEF40;
  }

  static get [name](): string {
    return "stats.getStoryStats"
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

/** Obtain forwards of a [story](https://core.telegram.org/api/stories) as a message to public chats and reposts by public channels. */
export class stats_getStoryPublicForwards_ extends Function_<enums.stats.PublicForwards> {
  static __F: (params: { peer: enums.InputPeer; id: number; offset: string; limit: number }) => enums.stats.PublicForwards = null as unknown as (params: { peer: enums.InputPeer; id: number; offset: string; limit: number }) => enums.stats.PublicForwards;
  /** Peer where the story was originally posted */
  peer: enums.InputPeer;
  /** [Story](https://core.telegram.org/api/stories) ID */
  id: number;
  /** Offset for pagination, from [stats.PublicForwards](https://core.telegram.org/constructor/stats.publicForwards).`next_offset`. */
  offset: string;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0xA6437EF6;
  }

  static get [name](): string {
    return "stats.getStoryPublicForwards"
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

/** Export a [folder »](https://core.telegram.org/api/folders), creating a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export class chatlists_exportChatlistInvite_ extends Function_<enums.chatlists.ExportedChatlistInvite> {
  static __F: (params: { chatlist: enums.InputChatlist; title: string; peers: Array<enums.InputPeer> }) => enums.chatlists.ExportedChatlistInvite = null as unknown as (params: { chatlist: enums.InputChatlist; title: string; peers: Array<enums.InputPeer> }) => enums.chatlists.ExportedChatlistInvite;
  /** The folder to export */
  chatlist: enums.InputChatlist;
  /** An optional name for the link */
  title: string;
  /** The list of channels, group and supergroups to share with the link. Basic groups will automatically be [converted to supergroups](https://core.telegram.org/api/channel#migration) when invoking the method. */
  peers: Array<enums.InputPeer>;

  protected get [id](): number {
    return 0x8472478E;
  }

  static get [name](): string {
    return "chatlists.exportChatlistInvite"
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

/** Delete a previously created [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export class chatlists_deleteExportedInvite_ extends Function_<boolean> {
  static __F: (params: { chatlist: enums.InputChatlist; slug: string }) => boolean = null as unknown as (params: { chatlist: enums.InputChatlist; slug: string }) => boolean;
  /** The related folder */
  chatlist: enums.InputChatlist;
  /** `slug` obtained from the [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
  slug: string;

  protected get [id](): number {
    return 0x719C5C5E;
  }

  static get [name](): string {
    return "chatlists.deleteExportedInvite"
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

/** Edit a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export class chatlists_editExportedInvite_ extends Function_<enums.ExportedChatlistInvite> {
  static __F: (params: { chatlist: enums.InputChatlist; slug: string; title?: string; peers?: Array<enums.InputPeer> }) => enums.ExportedChatlistInvite = null as unknown as (params: { chatlist: enums.InputChatlist; slug: string; title?: string; peers?: Array<enums.InputPeer> }) => enums.ExportedChatlistInvite;
  /** Folder ID */
  chatlist: enums.InputChatlist;
  /** `slug` obtained from the [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
  slug: string;
  /** If set, sets a new name for the link */
  title?: string;
  /** If set, changes the list of peers shared with the link */
  peers?: Array<enums.InputPeer>;

  protected get [id](): number {
    return 0x653DB63D;
  }

  static get [name](): string {
    return "chatlists.editExportedInvite"
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

/** List all [chat folder deep links »](https://core.telegram.org/api/links#chat-folder-links) associated to a folder */
export class chatlists_getExportedInvites_ extends Function_<enums.chatlists.ExportedInvites> {
  static __F: (params: { chatlist: enums.InputChatlist }) => enums.chatlists.ExportedInvites = null as unknown as (params: { chatlist: enums.InputChatlist }) => enums.chatlists.ExportedInvites;
  /** The folder */
  chatlist: enums.InputChatlist;

  protected get [id](): number {
    return 0xCE03DA83;
  }

  static get [name](): string {
    return "chatlists.getExportedInvites"
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

/** Obtain information about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export class chatlists_checkChatlistInvite_ extends Function_<enums.chatlists.ChatlistInvite> {
  static __F: (params: { slug: string }) => enums.chatlists.ChatlistInvite = null as unknown as (params: { slug: string }) => enums.chatlists.ChatlistInvite;
  /** `slug` obtained from the [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links) */
  slug: string;

  protected get [id](): number {
    return 0x41C10FFF;
  }

  static get [name](): string {
    return "chatlists.checkChatlistInvite"
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

/** Import a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links), joining some or all the chats in the folder. */
export class chatlists_joinChatlistInvite_ extends Function_<enums.Updates> {
  static __F: (params: { slug: string; peers: Array<enums.InputPeer> }) => enums.Updates = null as unknown as (params: { slug: string; peers: Array<enums.InputPeer> }) => enums.Updates;
  /** `slug` obtained from a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
  slug: string;
  /** List of new chats to join, fetched using [chatlists.checkChatlistInvite](https://core.telegram.org/method/chatlists.checkChatlistInvite) and filtered as specified in the [documentation »](https://core.telegram.org/api/folders#shared-folders). */
  peers: Array<enums.InputPeer>;

  protected get [id](): number {
    return 0xA6B1E39A;
  }

  static get [name](): string {
    return "chatlists.joinChatlistInvite"
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

/** Fetch new chats associated with an imported [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). Must be invoked at most every `chatlist_update_period` seconds (as per the related [client configuration parameter »](https://core.telegram.org/api/config#chatlist-update-period)). */
export class chatlists_getChatlistUpdates_ extends Function_<enums.chatlists.ChatlistUpdates> {
  static __F: (params: { chatlist: enums.InputChatlist }) => enums.chatlists.ChatlistUpdates = null as unknown as (params: { chatlist: enums.InputChatlist }) => enums.chatlists.ChatlistUpdates;
  /** The folder */
  chatlist: enums.InputChatlist;

  protected get [id](): number {
    return 0x89419521;
  }

  static get [name](): string {
    return "chatlists.getChatlistUpdates"
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

/** Join channels and supergroups recently added to a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export class chatlists_joinChatlistUpdates_ extends Function_<enums.Updates> {
  static __F: (params: { chatlist: enums.InputChatlist; peers: Array<enums.InputPeer> }) => enums.Updates = null as unknown as (params: { chatlist: enums.InputChatlist; peers: Array<enums.InputPeer> }) => enums.Updates;
  /** The folder */
  chatlist: enums.InputChatlist;
  /** List of new chats to join, fetched using [chatlists.getChatlistUpdates](https://core.telegram.org/method/chatlists.getChatlistUpdates) and filtered as specified in the [documentation »](https://core.telegram.org/api/folders#shared-folders). */
  peers: Array<enums.InputPeer>;

  protected get [id](): number {
    return 0xE089F8F5;
  }

  static get [name](): string {
    return "chatlists.joinChatlistUpdates"
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

/** Dismiss new pending peers recently added to a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export class chatlists_hideChatlistUpdates_ extends Function_<boolean> {
  static __F: (params: { chatlist: enums.InputChatlist }) => boolean = null as unknown as (params: { chatlist: enums.InputChatlist }) => boolean;
  /** The folder */
  chatlist: enums.InputChatlist;

  protected get [id](): number {
    return 0x66E486FB;
  }

  static get [name](): string {
    return "chatlists.hideChatlistUpdates"
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

/** Returns identifiers of pinned or always included chats from a chat folder imported using a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links), which are suggested to be left when the chat folder is deleted. */
export class chatlists_getLeaveChatlistSuggestions_ extends Function_<enums.Peer[]> {
  static __F: (params: { chatlist: enums.InputChatlist }) => enums.Peer[] = null as unknown as (params: { chatlist: enums.InputChatlist }) => enums.Peer[];
  /** Folder ID */
  chatlist: enums.InputChatlist;

  protected get [id](): number {
    return 0xFDBCD714;
  }

  static get [name](): string {
    return "chatlists.getLeaveChatlistSuggestions"
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

/** Delete a folder imported using a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links) */
export class chatlists_leaveChatlist_ extends Function_<enums.Updates> {
  static __F: (params: { chatlist: enums.InputChatlist; peers: Array<enums.InputPeer> }) => enums.Updates = null as unknown as (params: { chatlist: enums.InputChatlist; peers: Array<enums.InputPeer> }) => enums.Updates;
  /** Folder ID */
  chatlist: enums.InputChatlist;
  /** Also leave the specified channels and groups */
  peers: Array<enums.InputPeer>;

  protected get [id](): number {
    return 0x74FAE13A;
  }

  static get [name](): string {
    return "chatlists.leaveChatlist"
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

/** Check whether we can post stories as the specified peer. */
export class stories_canSendStory_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer }) => boolean = null as unknown as (params: { peer: enums.InputPeer }) => boolean;
  /** The peer from which we wish to post stories. */
  peer: enums.InputPeer;

  protected get [id](): number {
    return 0xC7DFDFDD;
  }

  static get [name](): string {
    return "stories.canSendStory"
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

/** Uploads a [Telegram Story](https://core.telegram.org/api/stories). */
export class stories_sendStory_ extends Function_<enums.Updates> {
  static __F: (params: { pinned?: true; noforwards?: true; fwd_modified?: true; peer: enums.InputPeer; media: enums.InputMedia; media_areas?: Array<enums.MediaArea>; caption?: string; entities?: Array<enums.MessageEntity>; privacy_rules: Array<enums.InputPrivacyRule>; random_id: bigint; period?: number; fwd_from_id?: enums.InputPeer; fwd_from_story?: number }) => enums.Updates = null as unknown as (params: { pinned?: true; noforwards?: true; fwd_modified?: true; peer: enums.InputPeer; media: enums.InputMedia; media_areas?: Array<enums.MediaArea>; caption?: string; entities?: Array<enums.MessageEntity>; privacy_rules: Array<enums.InputPrivacyRule>; random_id: bigint; period?: number; fwd_from_id?: enums.InputPeer; fwd_from_story?: number }) => enums.Updates;
  /** Whether to add the story to the profile automatically upon expiration. If not set, the story will only be added to the archive, see [here »](https://core.telegram.org/api/stories) for more info. */
  pinned?: true;
  /** If set, disables forwards, screenshots, and downloads. */
  noforwards?: true;
  /** Set this flag when reposting stories with `fwd_from_id`+`fwd_from_id`, if the `media` was modified before reposting. */
  fwd_modified?: true;
  /** The peer to send the story as. */
  peer: enums.InputPeer;
  /** The story media. */
  media: enums.InputMedia;
  /** [Media areas](https://core.telegram.org/api/stories#media-areas) associated to the story, see [here »](https://core.telegram.org/api/stories#media-areas) for more info. */
  media_areas?: Array<enums.MediaArea>;
  /** Story caption. */
  caption?: string;
  /** [Message entities for styled text](https://core.telegram.org/api/entities), if allowed by the [`stories_entities` client configuration parameter »](https://core.telegram.org/api/config#stories-entities). */
  entities?: Array<enums.MessageEntity>;
  /** [Privacy rules](https://core.telegram.org/api/privacy) for the story, indicating who can or can't view the story. */
  privacy_rules: Array<enums.InputPrivacyRule>;
  /** Unique client message ID required to prevent message resending. */
  random_id: bigint;
  /** Period after which the story is moved to archive (and to the profile if `pinned` is set), in seconds; must be one of `6 * 3600`, `12 * 3600`, `86400`, or `2 * 86400` for Telegram Premium users, and `86400` otherwise. */
  period?: number;
  /** If set, indicates that this story is a repost of story with ID `fwd_from_story` posted by the peer in `fwd_from_id`. */
  fwd_from_id?: enums.InputPeer;
  /** If set, indicates that this story is a repost of story with ID `fwd_from_story` posted by the peer in `fwd_from_id`. */
  fwd_from_story?: number;

  protected get [id](): number {
    return 0xE4E6694B;
  }

  static get [name](): string {
    return "stories.sendStory"
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

/** Edit an uploaded [story](https://core.telegram.org/api/stories) */
export class stories_editStory_ extends Function_<enums.Updates> {
  static __F: (params: { peer: enums.InputPeer; id: number; media?: enums.InputMedia; media_areas?: Array<enums.MediaArea>; caption?: string; entities?: Array<enums.MessageEntity>; privacy_rules?: Array<enums.InputPrivacyRule> }) => enums.Updates = null as unknown as (params: { peer: enums.InputPeer; id: number; media?: enums.InputMedia; media_areas?: Array<enums.MediaArea>; caption?: string; entities?: Array<enums.MessageEntity>; privacy_rules?: Array<enums.InputPrivacyRule> }) => enums.Updates;
  /** Peer where the story was posted. */
  peer: enums.InputPeer;
  /** ID of story to edit. */
  id: number;
  /** If specified, replaces the story media. */
  media?: enums.InputMedia;
  /** [Media areas](https://core.telegram.org/api/stories#media-areas) associated to the story, see [here »](https://core.telegram.org/api/stories#media-areas) for more info. */
  media_areas?: Array<enums.MediaArea>;
  /** If specified, replaces the story caption. */
  caption?: string;
  /** [Message entities for styled text in the caption](https://core.telegram.org/api/entities), if allowed by the [`stories_entities` client configuration parameter »](https://core.telegram.org/api/config#stories-entities). */
  entities?: Array<enums.MessageEntity>;
  /** If specified, alters the [privacy settings »](https://core.telegram.org/api/privacy) of the story, changing who can or can't view the story. */
  privacy_rules?: Array<enums.InputPrivacyRule>;

  protected get [id](): number {
    return 0xB583BA46;
  }

  static get [name](): string {
    return "stories.editStory"
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

/** Deletes some posted [stories](https://core.telegram.org/api/stories). */
export class stories_deleteStories_ extends Function_<number[]> {
  static __F: (params: { peer: enums.InputPeer; id: Array<number> }) => number[] = null as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => number[];
  /** Channel/user from where to delete stories. */
  peer: enums.InputPeer;
  /** IDs of stories to delete. */
  id: Array<number>;

  protected get [id](): number {
    return 0xAE59DB5F;
  }

  static get [name](): string {
    return "stories.deleteStories"
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

/** Pin or unpin one or more stories */
export class stories_togglePinned_ extends Function_<number[]> {
  static __F: (params: { peer: enums.InputPeer; id: Array<number>; pinned: boolean }) => number[] = null as unknown as (params: { peer: enums.InputPeer; id: Array<number>; pinned: boolean }) => number[];
  /** Peer where to pin or unpin stories */
  peer: enums.InputPeer;
  /** IDs of stories to pin or unpin */
  id: Array<number>;
  /** Whether to pin or unpin the stories */
  pinned: boolean;

  protected get [id](): number {
    return 0x9A75A1EF;
  }

  static get [name](): string {
    return "stories.togglePinned"
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

/** Fetch the List of active (or active and hidden) stories, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info on watching stories. */
export class stories_getAllStories_ extends Function_<enums.stories.AllStories> {
  static __F: (params?: { next?: true; hidden?: true; state?: string }) => enums.stories.AllStories = null as unknown as (params?: { next?: true; hidden?: true; state?: string }) => enums.stories.AllStories;
  /** If `next` and `state` are both set, uses the passed `state` to paginate to the next results; if neither `state` nor `next` are set, fetches the initial page; if `state` is set and `next` is not set, check for changes in the active/hidden peerset, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info on the full flow. */
  next?: true;
  /** If set, fetches the hidden active story list, otherwise fetches the active story list, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info on the full flow. */
  hidden?: true;
  /** If `next` and `state` are both set, uses the passed `state` to paginate to the next results; if neither `state` nor `next` are set, fetches the initial page; if `state` is set and `next` is not set, check for changes in the active/hidden peerset, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info on the full flow. */
  state?: string;

  protected get [id](): number {
    return 0xEEB0D625;
  }

  static get [name](): string {
    return "stories.getAllStories"
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

/** Fetch the [stories](https://core.telegram.org/api/stories#pinned-or-archived-stories) pinned on a peer's profile. */
export class stories_getPinnedStories_ extends Function_<enums.stories.Stories> {
  static __F: (params: { peer: enums.InputPeer; offset_id: number; limit: number }) => enums.stories.Stories = null as unknown as (params: { peer: enums.InputPeer; offset_id: number; limit: number }) => enums.stories.Stories;
  /** Peer whose pinned stories should be fetched */
  peer: enums.InputPeer;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_id: number;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0x5821A5DC;
  }

  static get [name](): string {
    return "stories.getPinnedStories"
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

/** Fetch the [story archive »](https://core.telegram.org/api/stories#pinned-or-archived-stories) of a peer we control. */
export class stories_getStoriesArchive_ extends Function_<enums.stories.Stories> {
  static __F: (params: { peer: enums.InputPeer; offset_id: number; limit: number }) => enums.stories.Stories = null as unknown as (params: { peer: enums.InputPeer; offset_id: number; limit: number }) => enums.stories.Stories;
  /** Peer whose archived stories should be fetched */
  peer: enums.InputPeer;
  /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
  offset_id: number;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0xB4352016;
  }

  static get [name](): string {
    return "stories.getStoriesArchive"
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

/** Obtain full info about a set of [stories](https://core.telegram.org/api/stories) by their IDs. */
export class stories_getStoriesByID_ extends Function_<enums.stories.Stories> {
  static __F: (params: { peer: enums.InputPeer; id: Array<number> }) => enums.stories.Stories = null as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => enums.stories.Stories;
  /** Peer where the stories were posted */
  peer: enums.InputPeer;
  /** Story IDs */
  id: Array<number>;

  protected get [id](): number {
    return 0x5774CA74;
  }

  static get [name](): string {
    return "stories.getStoriesByID"
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

/** Hide the active stories of a specific peer, preventing them from being displayed on the action bar on the homescreen. */
export class stories_toggleAllStoriesHidden_ extends Function_<boolean> {
  static __F: (params: { hidden: boolean }) => boolean = null as unknown as (params: { hidden: boolean }) => boolean;
  /** Whether to hide or unhide all active stories of the peer */
  hidden: boolean;

  protected get [id](): number {
    return 0x7C2557C4;
  }

  static get [name](): string {
    return "stories.toggleAllStoriesHidden"
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

/** Mark all stories up to a certain ID as read, for a given peer; will emit an [updateReadStories](https://core.telegram.org/constructor/updateReadStories) update to all logged-in sessions. */
export class stories_readStories_ extends Function_<number[]> {
  static __F: (params: { peer: enums.InputPeer; max_id: number }) => number[] = null as unknown as (params: { peer: enums.InputPeer; max_id: number }) => number[];
  /** The peer whose stories should be marked as read. */
  peer: enums.InputPeer;
  /** Mark all stories up to and including this ID as read */
  max_id: number;

  protected get [id](): number {
    return 0xA556DAC8;
  }

  static get [name](): string {
    return "stories.readStories"
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

/** Increment the view counter of one or more stories. */
export class stories_incrementStoryViews_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; id: Array<number> }) => boolean = null as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => boolean;
  /** Peer where the stories were posted. */
  peer: enums.InputPeer;
  /** IDs of the stories (maximum 200 at a time). */
  id: Array<number>;

  protected get [id](): number {
    return 0xB2028AFB;
  }

  static get [name](): string {
    return "stories.incrementStoryViews"
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

/** Obtain the list of users that have viewed a specific [story we posted](https://core.telegram.org/api/stories) */
export class stories_getStoryViewsList_ extends Function_<enums.stories.StoryViewsList> {
  static __F: (params: { just_contacts?: true; reactions_first?: true; forwards_first?: true; peer: enums.InputPeer; q?: string; id: number; offset: string; limit: number }) => enums.stories.StoryViewsList = null as unknown as (params: { just_contacts?: true; reactions_first?: true; forwards_first?: true; peer: enums.InputPeer; q?: string; id: number; offset: string; limit: number }) => enums.stories.StoryViewsList;
  /** Whether to only fetch view reaction/views made by our [contacts](https://core.telegram.org/api/contacts) */
  just_contacts?: true;
  /** Whether to return [storyView](https://core.telegram.org/constructor/storyView) info about users that reacted to the story (i.e. if set, the server will first sort results by view date as usual, and then also additionally sort the list by putting [storyView](https://core.telegram.org/constructor/storyView)s with an associated reaction first in the list). Ignored if `forwards_first` is set. */
  reactions_first?: true;
  /** If set, returns forwards and reposts first, then reactions, then other views; otherwise returns interactions sorted just by interaction date. */
  forwards_first?: true;
  /** Peer where the story was posted */
  peer: enums.InputPeer;
  /** Search for specific peers */
  q?: string;
  /** Story ID */
  id: number;
  /** Offset for pagination, obtained from [stories.storyViewsList](https://core.telegram.org/constructor/stories.storyViewsList).`next_offset` */
  offset: string;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0x7ED23C57;
  }

  static get [name](): string {
    return "stories.getStoryViewsList"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["just_contacts", "true", "flags.0?true"],
      ["reactions_first", "true", "flags.2?true"],
      ["forwards_first", "true", "flags.3?true"],
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
      [this.forwards_first ?? null, "true", "flags.3?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.q ?? null, "string", "flags.1?string"],
      [this.id, "number", "int"],
      [this.offset, "string", "string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { just_contacts?: true; reactions_first?: true; forwards_first?: true; peer: enums.InputPeer; q?: string; id: number; offset: string; limit: number }) {
    super();
    this.just_contacts = params.just_contacts;
    this.reactions_first = params.reactions_first;
    this.forwards_first = params.forwards_first;
    this.peer = params.peer;
    this.q = params.q;
    this.id = params.id;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

/** Obtain info about the view count, forward count, reactions and recent viewers of one or more [stories](https://core.telegram.org/api/stories). */
export class stories_getStoriesViews_ extends Function_<enums.stories.StoryViews> {
  static __F: (params: { peer: enums.InputPeer; id: Array<number> }) => enums.stories.StoryViews = null as unknown as (params: { peer: enums.InputPeer; id: Array<number> }) => enums.stories.StoryViews;
  /** Peer whose stories should be fetched */
  peer: enums.InputPeer;
  /** Story IDs */
  id: Array<number>;

  protected get [id](): number {
    return 0x28E16CC8;
  }

  static get [name](): string {
    return "stories.getStoriesViews"
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

/** Generate a [story deep link](https://core.telegram.org/api/links#story-links) for a specific story */
export class stories_exportStoryLink_ extends Function_<enums.ExportedStoryLink> {
  static __F: (params: { peer: enums.InputPeer; id: number }) => enums.ExportedStoryLink = null as unknown as (params: { peer: enums.InputPeer; id: number }) => enums.ExportedStoryLink;
  /** Peer where the story was posted */
  peer: enums.InputPeer;
  /** Story ID */
  id: number;

  protected get [id](): number {
    return 0x7B8DEF20;
  }

  static get [name](): string {
    return "stories.exportStoryLink"
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

/** Report a story. */
export class stories_report_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; id: Array<number>; reason: enums.ReportReason; message: string }) => boolean = null as unknown as (params: { peer: enums.InputPeer; id: Array<number>; reason: enums.ReportReason; message: string }) => boolean;
  /** The peer that uploaded the story. */
  peer: enums.InputPeer;
  /** IDs of the stories to report. */
  id: Array<number>;
  /** Why are these storeis being reported. */
  reason: enums.ReportReason;
  /** Comment for report moderation */
  message: string;

  protected get [id](): number {
    return 0x1923FA8C;
  }

  static get [name](): string {
    return "stories.report"
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

/** Activates [stories stealth mode](https://core.telegram.org/api/stories#stealth-mode), see [here »](https://core.telegram.org/api/stories#stealth-mode) for more info. */
export class stories_activateStealthMode_ extends Function_<enums.Updates> {
  static __F: (params?: { past?: true; future?: true }) => enums.Updates = null as unknown as (params?: { past?: true; future?: true }) => enums.Updates;
  /** Whether to erase views from any stories opened in the past [`stories_stealth_past_period` seconds »](https://core.telegram.org/api/config#stories-stealth-past-period), as specified by the [client configuration](https://core.telegram.org/api/config#client-configuration). */
  past?: true;
  /** Whether to hide future story views for the next [`stories_stealth_future_period` seconds »](https://core.telegram.org/api/config#stories-stealth-future-period), as specified by the [client configuration](https://core.telegram.org/api/config#client-configuration). */
  future?: true;

  protected get [id](): number {
    return 0x57BBD166;
  }

  static get [name](): string {
    return "stories.activateStealthMode"
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

/** React to a story. */
export class stories_sendReaction_ extends Function_<enums.Updates> {
  static __F: (params: { add_to_recent?: true; peer: enums.InputPeer; story_id: number; reaction: enums.Reaction }) => enums.Updates = null as unknown as (params: { add_to_recent?: true; peer: enums.InputPeer; story_id: number; reaction: enums.Reaction }) => enums.Updates;
  /** Whether to add this reaction to the [recent reactions list »](https://core.telegram.org/api/reactions#recent-reactions). */
  add_to_recent?: true;
  /** The peer that sent the story */
  peer: enums.InputPeer;
  /** ID of the story to react to */
  story_id: number;
  /** Reaction */
  reaction: enums.Reaction;

  protected get [id](): number {
    return 0x7FD736B2;
  }

  static get [name](): string {
    return "stories.sendReaction"
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

/** Fetch the full active [story list](https://core.telegram.org/api/stories#watching-stories) of a specific peer. */
export class stories_getPeerStories_ extends Function_<enums.stories.PeerStories> {
  static __F: (params: { peer: enums.InputPeer }) => enums.stories.PeerStories = null as unknown as (params: { peer: enums.InputPeer }) => enums.stories.PeerStories;
  /** Peer whose stories should be fetched */
  peer: enums.InputPeer;

  protected get [id](): number {
    return 0x2C4ADA50;
  }

  static get [name](): string {
    return "stories.getPeerStories"
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

/** Obtain the latest read story ID for all peers when first logging in, returned as a list of [updateReadStories](https://core.telegram.org/constructor/updateReadStories) updates, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info. */
export class stories_getAllReadPeerStories_ extends Function_<enums.Updates> {
  static __F: () => enums.Updates = null as unknown as () => enums.Updates;
  protected get [id](): number {
    return 0x9B5AE7F9;
  }

  static get [name](): string {
    return "stories.getAllReadPeerStories"
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

/** Get the IDs of the maximum read stories for a set of peers. */
export class stories_getPeerMaxIDs_ extends Function_<number[]> {
  static __F: (params: { id: Array<enums.InputPeer> }) => number[] = null as unknown as (params: { id: Array<enums.InputPeer> }) => number[];
  /** Peers */
  id: Array<enums.InputPeer>;

  protected get [id](): number {
    return 0x535983C3;
  }

  static get [name](): string {
    return "stories.getPeerMaxIDs"
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

/** Obtain a list of channels where the user can post [stories](https://core.telegram.org/api/stories) */
export class stories_getChatsToSend_ extends Function_<enums.messages.Chats> {
  static __F: () => enums.messages.Chats = null as unknown as () => enums.messages.Chats;
  protected get [id](): number {
    return 0xA56A8B60;
  }

  static get [name](): string {
    return "stories.getChatsToSend"
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

/** Hide the active stories of a user, preventing them from being displayed on the action bar on the homescreen, see [here »](https://core.telegram.org/api/stories#hiding-stories-of-other-users) for more info. */
export class stories_togglePeerStoriesHidden_ extends Function_<boolean> {
  static __F: (params: { peer: enums.InputPeer; hidden: boolean }) => boolean = null as unknown as (params: { peer: enums.InputPeer; hidden: boolean }) => boolean;
  /** Peer whose stories should be (un)hidden. */
  peer: enums.InputPeer;
  /** Whether to hide or unhide stories. */
  hidden: boolean;

  protected get [id](): number {
    return 0xBD0415C4;
  }

  static get [name](): string {
    return "stories.togglePeerStoriesHidden"
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

/** Get the [reaction](https://core.telegram.org/api/reactions) and interaction list of a [story](https://core.telegram.org/api/stories) posted to a channel, along with the sender of each reaction. */
export class stories_getStoryReactionsList_ extends Function_<enums.stories.StoryReactionsList> {
  static __F: (params: { forwards_first?: true; peer: enums.InputPeer; id: number; reaction?: enums.Reaction; offset?: string; limit: number }) => enums.stories.StoryReactionsList = null as unknown as (params: { forwards_first?: true; peer: enums.InputPeer; id: number; reaction?: enums.Reaction; offset?: string; limit: number }) => enums.stories.StoryReactionsList;
  /** If set, returns forwards and reposts first, then reactions, then other views; otherwise returns interactions sorted just by interaction date. */
  forwards_first?: true;
  /** Channel */
  peer: enums.InputPeer;
  /** [Story](https://core.telegram.org/api/stories) ID */
  id: number;
  /** Get only reactions of this type */
  reaction?: enums.Reaction;
  /** Offset for pagination (taken from the `next_offset` field of the returned [stories.StoryReactionsList](https://core.telegram.org/type/stories.StoryReactionsList)); empty in the first request. */
  offset?: string;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0xB9B2881F;
  }

  static get [name](): string {
    return "stories.getStoryReactionsList"
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["forwards_first", "true", "flags.2?true"],
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
      [this.forwards_first ?? null, "true", "flags.2?true"],
      [this.peer, types._InputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.reaction ?? null, types._Reaction, "flags.0?Reaction"],
      [this.offset ?? null, "string", "flags.1?string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { forwards_first?: true; peer: enums.InputPeer; id: number; reaction?: enums.Reaction; offset?: string; limit: number }) {
    super();
    this.forwards_first = params.forwards_first;
    this.peer = params.peer;
    this.id = params.id;
    this.reaction = params.reaction;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

/** Obtains info about the boosts that were applied to a certain channel (admins only) */
export class premium_getBoostsList_ extends Function_<enums.premium.BoostsList> {
  static __F: (params: { gifts?: true; peer: enums.InputPeer; offset: string; limit: number }) => enums.premium.BoostsList = null as unknown as (params: { gifts?: true; peer: enums.InputPeer; offset: string; limit: number }) => enums.premium.BoostsList;
  /** Whether to return only info about boosts received from [gift codes and giveaways created by the channel »](https://core.telegram.org/api/giveaways) */
  gifts?: true;
  /** The channel */
  peer: enums.InputPeer;
  /** Offset for pagination, obtained from [premium.boostsList](https://core.telegram.org/constructor/premium.boostsList).`next_offset` */
  offset: string;
  /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
  limit: number;

  protected get [id](): number {
    return 0x60F67660;
  }

  static get [name](): string {
    return "premium.getBoostsList"
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

/** Obtain which peers are we currently [boosting](https://core.telegram.org/api/boost), and how many [boost slots](https://core.telegram.org/api/boost) we have left. */
export class premium_getMyBoosts_ extends Function_<enums.premium.MyBoosts> {
  static __F: () => enums.premium.MyBoosts = null as unknown as () => enums.premium.MyBoosts;
  protected get [id](): number {
    return 0x0BE77B4A;
  }

  static get [name](): string {
    return "premium.getMyBoosts"
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

/** Apply one or more [boosts »](https://core.telegram.org/api/boost) to a peer. */
export class premium_applyBoost_ extends Function_<enums.premium.MyBoosts> {
  static __F: (params: { slots?: Array<number>; peer: enums.InputPeer }) => enums.premium.MyBoosts = null as unknown as (params: { slots?: Array<number>; peer: enums.InputPeer }) => enums.premium.MyBoosts;
  /** Which [boost slots](https://core.telegram.org/api/boost) to assign to this peer. */
  slots?: Array<number>;
  /** The peer to boost. */
  peer: enums.InputPeer;

  protected get [id](): number {
    return 0x6B7DA746;
  }

  static get [name](): string {
    return "premium.applyBoost"
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

/** Gets the current [number of boosts](https://core.telegram.org/api/boost) of a channel. */
export class premium_getBoostsStatus_ extends Function_<enums.premium.BoostsStatus> {
  static __F: (params: { peer: enums.InputPeer }) => enums.premium.BoostsStatus = null as unknown as (params: { peer: enums.InputPeer }) => enums.premium.BoostsStatus;
  /** The peer. */
  peer: enums.InputPeer;

  protected get [id](): number {
    return 0x042F1F61;
  }

  static get [name](): string {
    return "premium.getBoostsStatus"
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

/** Returns the lists of boost that were applied to a channel by a specific user (admins only) */
export class premium_getUserBoosts_ extends Function_<enums.premium.BoostsList> {
  static __F: (params: { peer: enums.InputPeer; user_id: enums.InputUser }) => enums.premium.BoostsList = null as unknown as (params: { peer: enums.InputPeer; user_id: enums.InputUser }) => enums.premium.BoostsList;
  /** The channel */
  peer: enums.InputPeer;
  /** The user */
  user_id: enums.InputUser;

  protected get [id](): number {
    return 0x39854D1F;
  }

  static get [name](): string {
    return "premium.getUserBoosts"
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
    getChannelDefaultEmojiStatuses: account_getChannelDefaultEmojiStatuses_,
    getChannelRestrictedStatusEmojis: account_getChannelRestrictedStatusEmojis_,
  },
  users: {
    getUsers: users_getUsers_,
    getFullUser: users_getFullUser_,
    setSecureValueErrors: users_setSecureValueErrors_,
    getIsPremiumRequiredToContact: users_getIsPremiumRequiredToContact_,
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
    getSavedDialogs: messages_getSavedDialogs_,
    getSavedHistory: messages_getSavedHistory_,
    deleteSavedHistory: messages_deleteSavedHistory_,
    getPinnedSavedDialogs: messages_getPinnedSavedDialogs_,
    toggleSavedDialogPin: messages_toggleSavedDialogPin_,
    reorderPinnedSavedDialogs: messages_reorderPinnedSavedDialogs_,
    getSavedReactionTags: messages_getSavedReactionTags_,
    updateSavedReactionTag: messages_updateSavedReactionTag_,
    getDefaultTagReactions: messages_getDefaultTagReactions_,
    getOutboxReadDate: messages_getOutboxReadDate_,
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
    updateEmojiStatus: channels_updateEmojiStatus_,
    setBoostsToUnblockRestrictions: channels_setBoostsToUnblockRestrictions_,
    setEmojiStickers: channels_setEmojiStickers_,
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
    getStoryReactionsList: stories_getStoryReactionsList_,
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
    type getChannelDefaultEmojiStatuses = account_getChannelDefaultEmojiStatuses_;
    type getChannelRestrictedStatusEmojis = account_getChannelRestrictedStatusEmojis_;
  }
  namespace users {
    type getUsers = users_getUsers_;
    type getFullUser = users_getFullUser_;
    type setSecureValueErrors = users_setSecureValueErrors_;
    type getIsPremiumRequiredToContact = users_getIsPremiumRequiredToContact_;
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
    type getSavedDialogs = messages_getSavedDialogs_;
    type getSavedHistory = messages_getSavedHistory_;
    type deleteSavedHistory = messages_deleteSavedHistory_;
    type getPinnedSavedDialogs = messages_getPinnedSavedDialogs_;
    type toggleSavedDialogPin = messages_toggleSavedDialogPin_;
    type reorderPinnedSavedDialogs = messages_reorderPinnedSavedDialogs_;
    type getSavedReactionTags = messages_getSavedReactionTags_;
    type updateSavedReactionTag = messages_updateSavedReactionTag_;
    type getDefaultTagReactions = messages_getDefaultTagReactions_;
    type getOutboxReadDate = messages_getOutboxReadDate_;
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
    type updateEmojiStatus = channels_updateEmojiStatus_;
    type setBoostsToUnblockRestrictions = channels_setBoostsToUnblockRestrictions_;
    type setEmojiStickers = channels_setEmojiStickers_;
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
    type getStoryReactionsList = stories_getStoryReactionsList_;
  }
  namespace premium {
    type getBoostsList = premium_getBoostsList_;
    type getMyBoosts = premium_getMyBoosts_;
    type applyBoost = premium_applyBoost_;
    type getBoostsStatus = premium_getBoostsStatus_;
    type getUserBoosts = premium_getUserBoosts_;
  }
}
