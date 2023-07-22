import { flags, id, ParamDesc, paramDesc, Params, params, TLObject } from "./1_tl_object.ts";
import * as types from "./2_types.ts";

export abstract class Function<T> extends TLObject {
  __R: T = Symbol() as unknown as T; // virtual member
}

export class ReqPQMulti extends Function<types.ResPQ> {
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

export class ReqDHParams extends Function<types.ServerDHParamsOK> {
  nonce: bigint;
  serverNonce: bigint;
  p: Uint8Array;
  q: Uint8Array;
  publicKeyFingerprint: bigint;
  encryptedData: Uint8Array;

  protected get [id]() {
    return 0xD712E4BE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["nonce", "bigint", "int128"],
      ["serverNonce", "bigint", "int128"],
      ["p", Uint8Array, "bytes"],
      ["q", Uint8Array, "bytes"],
      ["publicKeyFingerprint", "bigint", "long"],
      ["encryptedData", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.nonce, "bigint", "int128"],
      [this.serverNonce, "bigint", "int128"],
      [this.p, Uint8Array, "bytes"],
      [this.q, Uint8Array, "bytes"],
      [this.publicKeyFingerprint, "bigint", "long"],
      [this.encryptedData, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { nonce: bigint; serverNonce: bigint; p: Uint8Array; q: Uint8Array; publicKeyFingerprint: bigint; encryptedData: Uint8Array }) {
    super();
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.p = params.p;
    this.q = params.q;
    this.publicKeyFingerprint = params.publicKeyFingerprint;
    this.encryptedData = params.encryptedData;
  }
}

export class SetClientDHParams extends Function<types.TypeSetClientDHParamsAnswer> {
  nonce: bigint;
  serverNonce: bigint;
  encryptedData: Uint8Array;

  protected get [id]() {
    return 0xF5045F1F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["nonce", "bigint", "int128"],
      ["serverNonce", "bigint", "int128"],
      ["encryptedData", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.nonce, "bigint", "int128"],
      [this.serverNonce, "bigint", "int128"],
      [this.encryptedData, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { nonce: bigint; serverNonce: bigint; encryptedData: Uint8Array }) {
    super();
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.encryptedData = params.encryptedData;
  }
}

export class RPCDropAnswer extends Function<types.TypeRpcDropAnswer> {
  reqMsgId: bigint;

  protected get [id]() {
    return 0x58E4A740;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["reqMsgId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.reqMsgId, "bigint", "long"],
    ];
  }

  constructor(params: { reqMsgId: bigint }) {
    super();
    this.reqMsgId = params.reqMsgId;
  }
}

export class GetFutureSalts extends Function<types.FutureSalts> {
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

export class Ping extends Function<types.Pong> {
  pingId: bigint;

  protected get [id]() {
    return 0x7ABE77EC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["pingId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.pingId, "bigint", "long"],
    ];
  }

  constructor(params: { pingId: bigint }) {
    super();
    this.pingId = params.pingId;
  }
}

export class PingDelayDisconnect extends Function<types.Pong> {
  pingId: bigint;
  disconnectDelay: number;

  protected get [id]() {
    return 0xF3427B8C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["pingId", "bigint", "long"],
      ["disconnectDelay", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.pingId, "bigint", "long"],
      [this.disconnectDelay, "number", "int"],
    ];
  }

  constructor(params: { pingId: bigint; disconnectDelay: number }) {
    super();
    this.pingId = params.pingId;
    this.disconnectDelay = params.disconnectDelay;
  }
}

export class DestroySession extends Function<types.TypeDestroySessionRes> {
  sessionId: bigint;

  protected get [id]() {
    return 0xE7512126;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["sessionId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.sessionId, "bigint", "long"],
    ];
  }

  constructor(params: { sessionId: bigint }) {
    super();
    this.sessionId = params.sessionId;
  }
}

export class DestroyAuthKey extends Function<types.TypeDestroyAuthKeyRes> {
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

export class InvokeAfterMsg<T extends Function<unknown>> extends Function<T["__R"]> {
  msgId: bigint;
  query: T;

  protected get [id]() {
    return 0xCB9F372D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msgId", "bigint", "long"],
      ["query", types.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.msgId, "bigint", "long"],
      [this.query, types.TypeX, "!X"],
    ];
  }

  constructor(params: { msgId: bigint; query: T }) {
    super();
    this.msgId = params.msgId;
    this.query = params.query;
  }
}

export class InvokeAfterMsgs<T extends Function<unknown>> extends Function<T["__R"]> {
  msgIds: Array<bigint>;
  query: T;

  protected get [id]() {
    return 0x3DC4B4F0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msgIds", ["bigint"], "Vector<long>"],
      ["query", types.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.msgIds, ["bigint"], "Vector<long>"],
      [this.query, types.TypeX, "!X"],
    ];
  }

  constructor(params: { msgIds: Array<bigint>; query: T }) {
    super();
    this.msgIds = params.msgIds;
    this.query = params.query;
  }
}

export class InitConnection<T extends Function<unknown>> extends Function<T["__R"]> {
  apiId: number;
  deviceModel: string;
  systemVersion: string;
  appVersion: string;
  systemLangCode: string;
  langPack: string;
  langCode: string;
  proxy?: types.TypeInputClientProxy;
  params?: types.TypeJSONValue;
  query: T;

  protected get [id]() {
    return 0xC1CD5EA9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["apiId", "number", "int"],
      ["deviceModel", "string", "string"],
      ["systemVersion", "string", "string"],
      ["appVersion", "string", "string"],
      ["systemLangCode", "string", "string"],
      ["langPack", "string", "string"],
      ["langCode", "string", "string"],
      ["proxy", types.TypeInputClientProxy, "flags.0?InputClientProxy"],
      ["params", types.TypeJSONValue, "flags.1?JSONValue"],
      ["query", types.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.apiId, "number", "int"],
      [this.deviceModel, "string", "string"],
      [this.systemVersion, "string", "string"],
      [this.appVersion, "string", "string"],
      [this.systemLangCode, "string", "string"],
      [this.langPack, "string", "string"],
      [this.langCode, "string", "string"],
      [this.proxy ?? null, types.TypeInputClientProxy, "flags.0?InputClientProxy"],
      [this.params ?? null, types.TypeJSONValue, "flags.1?JSONValue"],
      [this.query, types.TypeX, "!X"],
    ];
  }

  constructor(params: { apiId: number; deviceModel: string; systemVersion: string; appVersion: string; systemLangCode: string; langPack: string; langCode: string; proxy?: types.TypeInputClientProxy; params?: types.TypeJSONValue; query: T }) {
    super();
    this.apiId = params.apiId;
    this.deviceModel = params.deviceModel;
    this.systemVersion = params.systemVersion;
    this.appVersion = params.appVersion;
    this.systemLangCode = params.systemLangCode;
    this.langPack = params.langPack;
    this.langCode = params.langCode;
    this.proxy = params.proxy;
    this.params = params.params;
    this.query = params.query;
  }
}

export class InvokeWithLayer<T extends Function<unknown>> extends Function<T["__R"]> {
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

export class InvokeWithoutUpdates<T extends Function<unknown>> extends Function<T["__R"]> {
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

export class InvokeWithMessagesRange<T extends Function<unknown>> extends Function<T["__R"]> {
  range: types.TypeMessageRange;
  query: T;

  protected get [id]() {
    return 0x365275F2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["range", types.TypeMessageRange, "MessageRange"],
      ["query", types.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.range, types.TypeMessageRange, "MessageRange"],
      [this.query, types.TypeX, "!X"],
    ];
  }

  constructor(params: { range: types.TypeMessageRange; query: T }) {
    super();
    this.range = params.range;
    this.query = params.query;
  }
}

export class InvokeWithTakeout<T extends Function<unknown>> extends Function<T["__R"]> {
  takeoutId: bigint;
  query: T;

  protected get [id]() {
    return 0xACA9FD2E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["takeoutId", "bigint", "long"],
      ["query", types.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.takeoutId, "bigint", "long"],
      [this.query, types.TypeX, "!X"],
    ];
  }

  constructor(params: { takeoutId: bigint; query: T }) {
    super();
    this.takeoutId = params.takeoutId;
    this.query = params.query;
  }
}

export class AuthSendCode extends Function<types.TypeAuthSentCode> {
  phoneNumber: string;
  apiId: number;
  apiHash: string;
  settings: types.TypeCodeSettings;

  protected get [id]() {
    return 0xA677244F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneNumber", "string", "string"],
      ["apiId", "number", "int"],
      ["apiHash", "string", "string"],
      ["settings", types.TypeCodeSettings, "CodeSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneNumber, "string", "string"],
      [this.apiId, "number", "int"],
      [this.apiHash, "string", "string"],
      [this.settings, types.TypeCodeSettings, "CodeSettings"],
    ];
  }

  constructor(params: { phoneNumber: string; apiId: number; apiHash: string; settings: types.TypeCodeSettings }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.apiId = params.apiId;
    this.apiHash = params.apiHash;
    this.settings = params.settings;
  }
}

export class AuthSignUp extends Function<types.TypeAuthAuthorization> {
  phoneNumber: string;
  phoneCodeHash: string;
  firstName: string;
  lastName: string;

  protected get [id]() {
    return 0x80EEE427;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneNumber", "string", "string"],
      ["phoneCodeHash", "string", "string"],
      ["firstName", "string", "string"],
      ["lastName", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneNumber, "string", "string"],
      [this.phoneCodeHash, "string", "string"],
      [this.firstName, "string", "string"],
      [this.lastName, "string", "string"],
    ];
  }

  constructor(params: { phoneNumber: string; phoneCodeHash: string; firstName: string; lastName: string }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.phoneCodeHash = params.phoneCodeHash;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
  }
}

export class AuthSignIn extends Function<types.TypeAuthAuthorization> {
  phoneNumber: string;
  phoneCodeHash: string;
  phoneCode?: string;
  emailVerification?: types.TypeEmailVerification;

  protected get [id]() {
    return 0x8D52A951;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["phoneNumber", "string", "string"],
      ["phoneCodeHash", "string", "string"],
      ["phoneCode", "string", "flags.0?string"],
      ["emailVerification", types.TypeEmailVerification, "flags.1?EmailVerification"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.phoneNumber, "string", "string"],
      [this.phoneCodeHash, "string", "string"],
      [this.phoneCode ?? null, "string", "flags.0?string"],
      [this.emailVerification ?? null, types.TypeEmailVerification, "flags.1?EmailVerification"],
    ];
  }

  constructor(params: { phoneNumber: string; phoneCodeHash: string; phoneCode?: string; emailVerification?: types.TypeEmailVerification }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.phoneCodeHash = params.phoneCodeHash;
    this.phoneCode = params.phoneCode;
    this.emailVerification = params.emailVerification;
  }
}

export class AuthLogOut extends Function<types.AuthLoggedOut> {
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

export class AuthResetAuthorizations extends Function<boolean> {
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

export class AuthExportAuthorization extends Function<types.AuthExportedAuthorization> {
  dcId: number;

  protected get [id]() {
    return 0xE5BFFFCD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["dcId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.dcId, "number", "int"],
    ];
  }

  constructor(params: { dcId: number }) {
    super();
    this.dcId = params.dcId;
  }
}

export class AuthImportAuthorization extends Function<types.TypeAuthAuthorization> {
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

export class AuthBindTempAuthKey extends Function<boolean> {
  permAuthKeyId: bigint;
  nonce: bigint;
  expiresAt: number;
  encryptedMessage: Uint8Array;

  protected get [id]() {
    return 0xCDD42A05;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["permAuthKeyId", "bigint", "long"],
      ["nonce", "bigint", "long"],
      ["expiresAt", "number", "int"],
      ["encryptedMessage", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.permAuthKeyId, "bigint", "long"],
      [this.nonce, "bigint", "long"],
      [this.expiresAt, "number", "int"],
      [this.encryptedMessage, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { permAuthKeyId: bigint; nonce: bigint; expiresAt: number; encryptedMessage: Uint8Array }) {
    super();
    this.permAuthKeyId = params.permAuthKeyId;
    this.nonce = params.nonce;
    this.expiresAt = params.expiresAt;
    this.encryptedMessage = params.encryptedMessage;
  }
}

export class AuthImportBotAuthorization extends Function<types.TypeAuthAuthorization> {
  flags: number;
  apiId: number;
  apiHash: string;
  botAuthToken: string;

  protected get [id]() {
    return 0x67A3FF2C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", "number", "int"],
      ["apiId", "number", "int"],
      ["apiHash", "string", "string"],
      ["botAuthToken", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.flags, "number", "int"],
      [this.apiId, "number", "int"],
      [this.apiHash, "string", "string"],
      [this.botAuthToken, "string", "string"],
    ];
  }

  constructor(params: { flags: number; apiId: number; apiHash: string; botAuthToken: string }) {
    super();
    this.flags = params.flags;
    this.apiId = params.apiId;
    this.apiHash = params.apiHash;
    this.botAuthToken = params.botAuthToken;
  }
}

export class AuthCheckPassword extends Function<types.TypeAuthAuthorization> {
  password: types.TypeInputCheckPasswordSRP;

  protected get [id]() {
    return 0xD18B4D16;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["password", types.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.password, types.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  constructor(params: { password: types.TypeInputCheckPasswordSRP }) {
    super();
    this.password = params.password;
  }
}

export class AuthRequestPasswordRecovery extends Function<types.AuthPasswordRecovery> {
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

export class AuthRecoverPassword extends Function<types.TypeAuthAuthorization> {
  code: string;
  newSettings?: types.TypeAccountPasswordInputSettings;

  protected get [id]() {
    return 0x37096C70;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["code", "string", "string"],
      ["newSettings", types.TypeAccountPasswordInputSettings, "flags.0?account.PasswordInputSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.code, "string", "string"],
      [this.newSettings ?? null, types.TypeAccountPasswordInputSettings, "flags.0?account.PasswordInputSettings"],
    ];
  }

  constructor(params: { code: string; newSettings?: types.TypeAccountPasswordInputSettings }) {
    super();
    this.code = params.code;
    this.newSettings = params.newSettings;
  }
}

export class AuthResendCode extends Function<types.TypeAuthSentCode> {
  phoneNumber: string;
  phoneCodeHash: string;

  protected get [id]() {
    return 0x3EF1A9BF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneNumber", "string", "string"],
      ["phoneCodeHash", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneNumber, "string", "string"],
      [this.phoneCodeHash, "string", "string"],
    ];
  }

  constructor(params: { phoneNumber: string; phoneCodeHash: string }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.phoneCodeHash = params.phoneCodeHash;
  }
}

export class AuthCancelCode extends Function<boolean> {
  phoneNumber: string;
  phoneCodeHash: string;

  protected get [id]() {
    return 0x1F040578;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneNumber", "string", "string"],
      ["phoneCodeHash", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneNumber, "string", "string"],
      [this.phoneCodeHash, "string", "string"],
    ];
  }

  constructor(params: { phoneNumber: string; phoneCodeHash: string }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.phoneCodeHash = params.phoneCodeHash;
  }
}

export class AuthDropTempAuthKeys extends Function<boolean> {
  exceptAuthKeys: Array<bigint>;

  protected get [id]() {
    return 0x8E48A188;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["exceptAuthKeys", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.exceptAuthKeys, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { exceptAuthKeys: Array<bigint> }) {
    super();
    this.exceptAuthKeys = params.exceptAuthKeys;
  }
}

export class AuthExportLoginToken extends Function<types.TypeAuthLoginToken> {
  apiId: number;
  apiHash: string;
  exceptIds: Array<bigint>;

  protected get [id]() {
    return 0xB7E085FE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["apiId", "number", "int"],
      ["apiHash", "string", "string"],
      ["exceptIds", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.apiId, "number", "int"],
      [this.apiHash, "string", "string"],
      [this.exceptIds, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { apiId: number; apiHash: string; exceptIds: Array<bigint> }) {
    super();
    this.apiId = params.apiId;
    this.apiHash = params.apiHash;
    this.exceptIds = params.exceptIds;
  }
}

export class AuthImportLoginToken extends Function<types.TypeAuthLoginToken> {
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

export class AuthAcceptLoginToken extends Function<types.Authorization> {
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

export class AuthCheckRecoveryPassword extends Function<boolean> {
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

export class AuthImportWebTokenAuthorization extends Function<types.TypeAuthAuthorization> {
  apiId: number;
  apiHash: string;
  webAuthToken: string;

  protected get [id]() {
    return 0x2DB873A9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["apiId", "number", "int"],
      ["apiHash", "string", "string"],
      ["webAuthToken", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.apiId, "number", "int"],
      [this.apiHash, "string", "string"],
      [this.webAuthToken, "string", "string"],
    ];
  }

  constructor(params: { apiId: number; apiHash: string; webAuthToken: string }) {
    super();
    this.apiId = params.apiId;
    this.apiHash = params.apiHash;
    this.webAuthToken = params.webAuthToken;
  }
}

export class AuthRequestFirebaseSms extends Function<boolean> {
  phoneNumber: string;
  phoneCodeHash: string;
  safetyNetToken?: string;
  iosPushSecret?: string;

  protected get [id]() {
    return 0x89464B50;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["phoneNumber", "string", "string"],
      ["phoneCodeHash", "string", "string"],
      ["safetyNetToken", "string", "flags.0?string"],
      ["iosPushSecret", "string", "flags.1?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.phoneNumber, "string", "string"],
      [this.phoneCodeHash, "string", "string"],
      [this.safetyNetToken ?? null, "string", "flags.0?string"],
      [this.iosPushSecret ?? null, "string", "flags.1?string"],
    ];
  }

  constructor(params: { phoneNumber: string; phoneCodeHash: string; safetyNetToken?: string; iosPushSecret?: string }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.phoneCodeHash = params.phoneCodeHash;
    this.safetyNetToken = params.safetyNetToken;
    this.iosPushSecret = params.iosPushSecret;
  }
}

export class AuthResetLoginEmail extends Function<types.TypeAuthSentCode> {
  phoneNumber: string;
  phoneCodeHash: string;

  protected get [id]() {
    return 0x7E960193;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneNumber", "string", "string"],
      ["phoneCodeHash", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneNumber, "string", "string"],
      [this.phoneCodeHash, "string", "string"],
    ];
  }

  constructor(params: { phoneNumber: string; phoneCodeHash: string }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.phoneCodeHash = params.phoneCodeHash;
  }
}

export class AccountRegisterDevice extends Function<boolean> {
  noMuted?: true;
  tokenType: number;
  token: string;
  appSandbox: boolean;
  secret: Uint8Array;
  otherUids: Array<bigint>;

  protected get [id]() {
    return 0xEC86017A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["noMuted", "true", "flags.0?true"],
      ["tokenType", "number", "int"],
      ["token", "string", "string"],
      ["appSandbox", "boolean", "Bool"],
      ["secret", Uint8Array, "bytes"],
      ["otherUids", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.noMuted ?? null, "true", "flags.0?true"],
      [this.tokenType, "number", "int"],
      [this.token, "string", "string"],
      [this.appSandbox, "boolean", "Bool"],
      [this.secret, Uint8Array, "bytes"],
      [this.otherUids, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { noMuted?: true; tokenType: number; token: string; appSandbox: boolean; secret: Uint8Array; otherUids: Array<bigint> }) {
    super();
    this.noMuted = params.noMuted;
    this.tokenType = params.tokenType;
    this.token = params.token;
    this.appSandbox = params.appSandbox;
    this.secret = params.secret;
    this.otherUids = params.otherUids;
  }
}

export class AccountUnregisterDevice extends Function<boolean> {
  tokenType: number;
  token: string;
  otherUids: Array<bigint>;

  protected get [id]() {
    return 0x6A0D3206;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["tokenType", "number", "int"],
      ["token", "string", "string"],
      ["otherUids", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.tokenType, "number", "int"],
      [this.token, "string", "string"],
      [this.otherUids, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { tokenType: number; token: string; otherUids: Array<bigint> }) {
    super();
    this.tokenType = params.tokenType;
    this.token = params.token;
    this.otherUids = params.otherUids;
  }
}

export class AccountUpdateNotifySettings extends Function<boolean> {
  peer: types.TypeInputNotifyPeer;
  settings: types.TypeInputPeerNotifySettings;

  protected get [id]() {
    return 0x84BE5B93;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputNotifyPeer, "InputNotifyPeer"],
      ["settings", types.TypeInputPeerNotifySettings, "InputPeerNotifySettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputNotifyPeer, "InputNotifyPeer"],
      [this.settings, types.TypeInputPeerNotifySettings, "InputPeerNotifySettings"],
    ];
  }

  constructor(params: { peer: types.TypeInputNotifyPeer; settings: types.TypeInputPeerNotifySettings }) {
    super();
    this.peer = params.peer;
    this.settings = params.settings;
  }
}

export class AccountGetNotifySettings extends Function<types.PeerNotifySettings> {
  peer: types.TypeInputNotifyPeer;

  protected get [id]() {
    return 0x12B3AD31;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputNotifyPeer, "InputNotifyPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputNotifyPeer, "InputNotifyPeer"],
    ];
  }

  constructor(params: { peer: types.TypeInputNotifyPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class AccountResetNotifySettings extends Function<boolean> {
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

export class AccountUpdateProfile extends Function<types.TypeUser> {
  firstName?: string;
  lastName?: string;
  about?: string;

  protected get [id]() {
    return 0x78515775;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["firstName", "string", "flags.0?string"],
      ["lastName", "string", "flags.1?string"],
      ["about", "string", "flags.2?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.firstName ?? null, "string", "flags.0?string"],
      [this.lastName ?? null, "string", "flags.1?string"],
      [this.about ?? null, "string", "flags.2?string"],
    ];
  }

  constructor(params: { firstName?: string; lastName?: string; about?: string }) {
    super();
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.about = params.about;
  }
}

export class AccountUpdateStatus extends Function<boolean> {
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

export class AccountGetWallPapers extends Function<types.TypeAccountWallPapers> {
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

export class AccountReportPeer extends Function<boolean> {
  peer: types.TypeInputPeer;
  reason: types.TypeReportReason;
  message: string;

  protected get [id]() {
    return 0xC5BA3D86;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["reason", types.TypeReportReason, "ReportReason"],
      ["message", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.reason, types.TypeReportReason, "ReportReason"],
      [this.message, "string", "string"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; reason: types.TypeReportReason; message: string }) {
    super();
    this.peer = params.peer;
    this.reason = params.reason;
    this.message = params.message;
  }
}

export class AccountCheckUsername extends Function<boolean> {
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

export class AccountUpdateUsername extends Function<types.TypeUser> {
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

export class AccountGetPrivacy extends Function<types.AccountPrivacyRules> {
  key: types.TypeInputPrivacyKey;

  protected get [id]() {
    return 0xDADBC950;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["key", types.TypeInputPrivacyKey, "InputPrivacyKey"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.key, types.TypeInputPrivacyKey, "InputPrivacyKey"],
    ];
  }

  constructor(params: { key: types.TypeInputPrivacyKey }) {
    super();
    this.key = params.key;
  }
}

export class AccountSetPrivacy extends Function<types.AccountPrivacyRules> {
  key: types.TypeInputPrivacyKey;
  rules: Array<types.TypeInputPrivacyRule>;

  protected get [id]() {
    return 0xC9F81CE8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["key", types.TypeInputPrivacyKey, "InputPrivacyKey"],
      ["rules", [types.TypeInputPrivacyRule], "Vector<InputPrivacyRule>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.key, types.TypeInputPrivacyKey, "InputPrivacyKey"],
      [this.rules, [types.TypeInputPrivacyRule], "Vector<InputPrivacyRule>"],
    ];
  }

  constructor(params: { key: types.TypeInputPrivacyKey; rules: Array<types.TypeInputPrivacyRule> }) {
    super();
    this.key = params.key;
    this.rules = params.rules;
  }
}

export class AccountDeleteAccount extends Function<boolean> {
  reason: string;
  password?: types.TypeInputCheckPasswordSRP;

  protected get [id]() {
    return 0xA2C0CF74;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["reason", "string", "string"],
      ["password", types.TypeInputCheckPasswordSRP, "flags.0?InputCheckPasswordSRP"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.reason, "string", "string"],
      [this.password ?? null, types.TypeInputCheckPasswordSRP, "flags.0?InputCheckPasswordSRP"],
    ];
  }

  constructor(params: { reason: string; password?: types.TypeInputCheckPasswordSRP }) {
    super();
    this.reason = params.reason;
    this.password = params.password;
  }
}

export class AccountGetAccountTTL extends Function<types.AccountDaysTTL> {
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

export class AccountSetAccountTTL extends Function<boolean> {
  ttl: types.TypeAccountDaysTTL;

  protected get [id]() {
    return 0x2442485E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["ttl", types.TypeAccountDaysTTL, "AccountDaysTTL"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.ttl, types.TypeAccountDaysTTL, "AccountDaysTTL"],
    ];
  }

  constructor(params: { ttl: types.TypeAccountDaysTTL }) {
    super();
    this.ttl = params.ttl;
  }
}

export class AccountSendChangePhoneCode extends Function<types.TypeAuthSentCode> {
  phoneNumber: string;
  settings: types.TypeCodeSettings;

  protected get [id]() {
    return 0x82574AE5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneNumber", "string", "string"],
      ["settings", types.TypeCodeSettings, "CodeSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneNumber, "string", "string"],
      [this.settings, types.TypeCodeSettings, "CodeSettings"],
    ];
  }

  constructor(params: { phoneNumber: string; settings: types.TypeCodeSettings }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.settings = params.settings;
  }
}

export class AccountChangePhone extends Function<types.TypeUser> {
  phoneNumber: string;
  phoneCodeHash: string;
  phoneCode: string;

  protected get [id]() {
    return 0x70C32EDB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneNumber", "string", "string"],
      ["phoneCodeHash", "string", "string"],
      ["phoneCode", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneNumber, "string", "string"],
      [this.phoneCodeHash, "string", "string"],
      [this.phoneCode, "string", "string"],
    ];
  }

  constructor(params: { phoneNumber: string; phoneCodeHash: string; phoneCode: string }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.phoneCodeHash = params.phoneCodeHash;
    this.phoneCode = params.phoneCode;
  }
}

export class AccountUpdateDeviceLocked extends Function<boolean> {
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

export class AccountGetAuthorizations extends Function<types.AccountAuthorizations> {
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

export class AccountResetAuthorization extends Function<boolean> {
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

export class AccountGetPassword extends Function<types.AccountPassword> {
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

export class AccountGetPasswordSettings extends Function<types.AccountPasswordSettings> {
  password: types.TypeInputCheckPasswordSRP;

  protected get [id]() {
    return 0x9CD4EAF9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["password", types.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.password, types.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  constructor(params: { password: types.TypeInputCheckPasswordSRP }) {
    super();
    this.password = params.password;
  }
}

export class AccountUpdatePasswordSettings extends Function<boolean> {
  password: types.TypeInputCheckPasswordSRP;
  newSettings: types.TypeAccountPasswordInputSettings;

  protected get [id]() {
    return 0xA59B102F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["password", types.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
      ["newSettings", types.TypeAccountPasswordInputSettings, "account.PasswordInputSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.password, types.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
      [this.newSettings, types.TypeAccountPasswordInputSettings, "account.PasswordInputSettings"],
    ];
  }

  constructor(params: { password: types.TypeInputCheckPasswordSRP; newSettings: types.TypeAccountPasswordInputSettings }) {
    super();
    this.password = params.password;
    this.newSettings = params.newSettings;
  }
}

export class AccountSendConfirmPhoneCode extends Function<types.TypeAuthSentCode> {
  hash: string;
  settings: types.TypeCodeSettings;

  protected get [id]() {
    return 0x1B3FAA88;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "string", "string"],
      ["settings", types.TypeCodeSettings, "CodeSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "string", "string"],
      [this.settings, types.TypeCodeSettings, "CodeSettings"],
    ];
  }

  constructor(params: { hash: string; settings: types.TypeCodeSettings }) {
    super();
    this.hash = params.hash;
    this.settings = params.settings;
  }
}

export class AccountConfirmPhone extends Function<boolean> {
  phoneCodeHash: string;
  phoneCode: string;

  protected get [id]() {
    return 0x5F2178C3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneCodeHash", "string", "string"],
      ["phoneCode", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneCodeHash, "string", "string"],
      [this.phoneCode, "string", "string"],
    ];
  }

  constructor(params: { phoneCodeHash: string; phoneCode: string }) {
    super();
    this.phoneCodeHash = params.phoneCodeHash;
    this.phoneCode = params.phoneCode;
  }
}

export class AccountGetTmpPassword extends Function<types.AccountTmpPassword> {
  password: types.TypeInputCheckPasswordSRP;
  period: number;

  protected get [id]() {
    return 0x449E0B51;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["password", types.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
      ["period", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.password, types.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
      [this.period, "number", "int"],
    ];
  }

  constructor(params: { password: types.TypeInputCheckPasswordSRP; period: number }) {
    super();
    this.password = params.password;
    this.period = params.period;
  }
}

export class AccountGetWebAuthorizations extends Function<types.AccountWebAuthorizations> {
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

export class AccountResetWebAuthorization extends Function<boolean> {
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

export class AccountResetWebAuthorizations extends Function<boolean> {
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

export class AccountGetAllSecureValues extends Function<types.SecureValue[]> {
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

export class AccountGetSecureValue extends Function<types.SecureValue[]> {
  types: Array<types.TypeSecureValueType>;

  protected get [id]() {
    return 0x73665BC2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["types", [types.TypeSecureValueType], "Vector<SecureValueType>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.types, [types.TypeSecureValueType], "Vector<SecureValueType>"],
    ];
  }

  constructor(params: { types: Array<types.TypeSecureValueType> }) {
    super();
    this.types = params.types;
  }
}

export class AccountSaveSecureValue extends Function<types.SecureValue> {
  value: types.TypeInputSecureValue;
  secureSecretId: bigint;

  protected get [id]() {
    return 0x899FE31D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["value", types.TypeInputSecureValue, "InputSecureValue"],
      ["secureSecretId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.value, types.TypeInputSecureValue, "InputSecureValue"],
      [this.secureSecretId, "bigint", "long"],
    ];
  }

  constructor(params: { value: types.TypeInputSecureValue; secureSecretId: bigint }) {
    super();
    this.value = params.value;
    this.secureSecretId = params.secureSecretId;
  }
}

export class AccountDeleteSecureValue extends Function<boolean> {
  types: Array<types.TypeSecureValueType>;

  protected get [id]() {
    return 0xB880BC4B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["types", [types.TypeSecureValueType], "Vector<SecureValueType>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.types, [types.TypeSecureValueType], "Vector<SecureValueType>"],
    ];
  }

  constructor(params: { types: Array<types.TypeSecureValueType> }) {
    super();
    this.types = params.types;
  }
}

export class AccountGetAuthorizationForm extends Function<types.AccountAuthorizationForm> {
  botId: bigint;
  scope: string;
  publicKey: string;

  protected get [id]() {
    return 0xA929597A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["botId", "bigint", "long"],
      ["scope", "string", "string"],
      ["publicKey", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.botId, "bigint", "long"],
      [this.scope, "string", "string"],
      [this.publicKey, "string", "string"],
    ];
  }

  constructor(params: { botId: bigint; scope: string; publicKey: string }) {
    super();
    this.botId = params.botId;
    this.scope = params.scope;
    this.publicKey = params.publicKey;
  }
}

export class AccountAcceptAuthorization extends Function<boolean> {
  botId: bigint;
  scope: string;
  publicKey: string;
  valueHashes: Array<types.TypeSecureValueHash>;
  credentials: types.TypeSecureCredentialsEncrypted;

  protected get [id]() {
    return 0xF3ED4C73;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["botId", "bigint", "long"],
      ["scope", "string", "string"],
      ["publicKey", "string", "string"],
      ["valueHashes", [types.TypeSecureValueHash], "Vector<SecureValueHash>"],
      ["credentials", types.TypeSecureCredentialsEncrypted, "SecureCredentialsEncrypted"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.botId, "bigint", "long"],
      [this.scope, "string", "string"],
      [this.publicKey, "string", "string"],
      [this.valueHashes, [types.TypeSecureValueHash], "Vector<SecureValueHash>"],
      [this.credentials, types.TypeSecureCredentialsEncrypted, "SecureCredentialsEncrypted"],
    ];
  }

  constructor(params: { botId: bigint; scope: string; publicKey: string; valueHashes: Array<types.TypeSecureValueHash>; credentials: types.TypeSecureCredentialsEncrypted }) {
    super();
    this.botId = params.botId;
    this.scope = params.scope;
    this.publicKey = params.publicKey;
    this.valueHashes = params.valueHashes;
    this.credentials = params.credentials;
  }
}

export class AccountSendVerifyPhoneCode extends Function<types.TypeAuthSentCode> {
  phoneNumber: string;
  settings: types.TypeCodeSettings;

  protected get [id]() {
    return 0xA5A356F9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneNumber", "string", "string"],
      ["settings", types.TypeCodeSettings, "CodeSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneNumber, "string", "string"],
      [this.settings, types.TypeCodeSettings, "CodeSettings"],
    ];
  }

  constructor(params: { phoneNumber: string; settings: types.TypeCodeSettings }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.settings = params.settings;
  }
}

export class AccountVerifyPhone extends Function<boolean> {
  phoneNumber: string;
  phoneCodeHash: string;
  phoneCode: string;

  protected get [id]() {
    return 0x4DD3A7F6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneNumber", "string", "string"],
      ["phoneCodeHash", "string", "string"],
      ["phoneCode", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneNumber, "string", "string"],
      [this.phoneCodeHash, "string", "string"],
      [this.phoneCode, "string", "string"],
    ];
  }

  constructor(params: { phoneNumber: string; phoneCodeHash: string; phoneCode: string }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.phoneCodeHash = params.phoneCodeHash;
    this.phoneCode = params.phoneCode;
  }
}

export class AccountSendVerifyEmailCode extends Function<types.AccountSentEmailCode> {
  purpose: types.TypeEmailVerifyPurpose;
  email: string;

  protected get [id]() {
    return 0x98E037BB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["purpose", types.TypeEmailVerifyPurpose, "EmailVerifyPurpose"],
      ["email", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.purpose, types.TypeEmailVerifyPurpose, "EmailVerifyPurpose"],
      [this.email, "string", "string"],
    ];
  }

  constructor(params: { purpose: types.TypeEmailVerifyPurpose; email: string }) {
    super();
    this.purpose = params.purpose;
    this.email = params.email;
  }
}

export class AccountVerifyEmail extends Function<types.TypeAccountEmailVerified> {
  purpose: types.TypeEmailVerifyPurpose;
  verification: types.TypeEmailVerification;

  protected get [id]() {
    return 0x032DA4CF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["purpose", types.TypeEmailVerifyPurpose, "EmailVerifyPurpose"],
      ["verification", types.TypeEmailVerification, "EmailVerification"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.purpose, types.TypeEmailVerifyPurpose, "EmailVerifyPurpose"],
      [this.verification, types.TypeEmailVerification, "EmailVerification"],
    ];
  }

  constructor(params: { purpose: types.TypeEmailVerifyPurpose; verification: types.TypeEmailVerification }) {
    super();
    this.purpose = params.purpose;
    this.verification = params.verification;
  }
}

export class AccountInitTakeoutSession extends Function<types.AccountTakeout> {
  contacts?: true;
  messageUsers?: true;
  messageChats?: true;
  messageMegagroups?: true;
  messageChannels?: true;
  files?: true;
  fileMaxSize?: bigint;

  protected get [id]() {
    return 0x8EF3EAB0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["contacts", "true", "flags.0?true"],
      ["messageUsers", "true", "flags.1?true"],
      ["messageChats", "true", "flags.2?true"],
      ["messageMegagroups", "true", "flags.3?true"],
      ["messageChannels", "true", "flags.4?true"],
      ["files", "true", "flags.5?true"],
      ["fileMaxSize", "bigint", "flags.5?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.contacts ?? null, "true", "flags.0?true"],
      [this.messageUsers ?? null, "true", "flags.1?true"],
      [this.messageChats ?? null, "true", "flags.2?true"],
      [this.messageMegagroups ?? null, "true", "flags.3?true"],
      [this.messageChannels ?? null, "true", "flags.4?true"],
      [this.files ?? null, "true", "flags.5?true"],
      [this.fileMaxSize ?? null, "bigint", "flags.5?long"],
    ];
  }

  constructor(params: { contacts?: true; messageUsers?: true; messageChats?: true; messageMegagroups?: true; messageChannels?: true; files?: true; fileMaxSize?: bigint }) {
    super();
    this.contacts = params.contacts;
    this.messageUsers = params.messageUsers;
    this.messageChats = params.messageChats;
    this.messageMegagroups = params.messageMegagroups;
    this.messageChannels = params.messageChannels;
    this.files = params.files;
    this.fileMaxSize = params.fileMaxSize;
  }
}

export class AccountFinishTakeoutSession extends Function<boolean> {
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

  constructor(params: { success?: true }) {
    super();
    this.success = params.success;
  }
}

export class AccountConfirmPasswordEmail extends Function<boolean> {
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

export class AccountResendPasswordEmail extends Function<boolean> {
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

export class AccountCancelPasswordEmail extends Function<boolean> {
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

export class AccountGetContactSignUpNotification extends Function<boolean> {
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

export class AccountSetContactSignUpNotification extends Function<boolean> {
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

export class AccountGetNotifyExceptions extends Function<types.TypeUpdates> {
  compareSound?: true;
  compareStories?: true;
  peer?: types.TypeInputNotifyPeer;

  protected get [id]() {
    return 0x53577479;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["compareSound", "true", "flags.1?true"],
      ["compareStories", "true", "flags.2?true"],
      ["peer", types.TypeInputNotifyPeer, "flags.0?InputNotifyPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.compareSound ?? null, "true", "flags.1?true"],
      [this.compareStories ?? null, "true", "flags.2?true"],
      [this.peer ?? null, types.TypeInputNotifyPeer, "flags.0?InputNotifyPeer"],
    ];
  }

  constructor(params: { compareSound?: true; compareStories?: true; peer?: types.TypeInputNotifyPeer }) {
    super();
    this.compareSound = params.compareSound;
    this.compareStories = params.compareStories;
    this.peer = params.peer;
  }
}

export class AccountGetWallPaper extends Function<types.TypeWallPaper> {
  wallpaper: types.TypeInputWallPaper;

  protected get [id]() {
    return 0xFC8DDBEA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["wallpaper", types.TypeInputWallPaper, "InputWallPaper"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.wallpaper, types.TypeInputWallPaper, "InputWallPaper"],
    ];
  }

  constructor(params: { wallpaper: types.TypeInputWallPaper }) {
    super();
    this.wallpaper = params.wallpaper;
  }
}

export class AccountUploadWallPaper extends Function<types.TypeWallPaper> {
  forChat?: true;
  file: types.TypeInputFile;
  mimeType: string;
  settings: types.TypeWallPaperSettings;

  protected get [id]() {
    return 0xE39A8F03;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["forChat", "true", "flags.0?true"],
      ["file", types.TypeInputFile, "InputFile"],
      ["mimeType", "string", "string"],
      ["settings", types.TypeWallPaperSettings, "WallPaperSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.forChat ?? null, "true", "flags.0?true"],
      [this.file, types.TypeInputFile, "InputFile"],
      [this.mimeType, "string", "string"],
      [this.settings, types.TypeWallPaperSettings, "WallPaperSettings"],
    ];
  }

  constructor(params: { forChat?: true; file: types.TypeInputFile; mimeType: string; settings: types.TypeWallPaperSettings }) {
    super();
    this.forChat = params.forChat;
    this.file = params.file;
    this.mimeType = params.mimeType;
    this.settings = params.settings;
  }
}

export class AccountSaveWallPaper extends Function<boolean> {
  wallpaper: types.TypeInputWallPaper;
  unsave: boolean;
  settings: types.TypeWallPaperSettings;

  protected get [id]() {
    return 0x6C5A5B37;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["wallpaper", types.TypeInputWallPaper, "InputWallPaper"],
      ["unsave", "boolean", "Bool"],
      ["settings", types.TypeWallPaperSettings, "WallPaperSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.wallpaper, types.TypeInputWallPaper, "InputWallPaper"],
      [this.unsave, "boolean", "Bool"],
      [this.settings, types.TypeWallPaperSettings, "WallPaperSettings"],
    ];
  }

  constructor(params: { wallpaper: types.TypeInputWallPaper; unsave: boolean; settings: types.TypeWallPaperSettings }) {
    super();
    this.wallpaper = params.wallpaper;
    this.unsave = params.unsave;
    this.settings = params.settings;
  }
}

export class AccountInstallWallPaper extends Function<boolean> {
  wallpaper: types.TypeInputWallPaper;
  settings: types.TypeWallPaperSettings;

  protected get [id]() {
    return 0xFEED5769;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["wallpaper", types.TypeInputWallPaper, "InputWallPaper"],
      ["settings", types.TypeWallPaperSettings, "WallPaperSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.wallpaper, types.TypeInputWallPaper, "InputWallPaper"],
      [this.settings, types.TypeWallPaperSettings, "WallPaperSettings"],
    ];
  }

  constructor(params: { wallpaper: types.TypeInputWallPaper; settings: types.TypeWallPaperSettings }) {
    super();
    this.wallpaper = params.wallpaper;
    this.settings = params.settings;
  }
}

export class AccountResetWallPapers extends Function<boolean> {
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

export class AccountGetAutoDownloadSettings extends Function<types.AccountAutoDownloadSettings> {
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

export class AccountSaveAutoDownloadSettings extends Function<boolean> {
  low?: true;
  high?: true;
  settings: types.TypeAutoDownloadSettings;

  protected get [id]() {
    return 0x76F36233;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["low", "true", "flags.0?true"],
      ["high", "true", "flags.1?true"],
      ["settings", types.TypeAutoDownloadSettings, "AutoDownloadSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.low ?? null, "true", "flags.0?true"],
      [this.high ?? null, "true", "flags.1?true"],
      [this.settings, types.TypeAutoDownloadSettings, "AutoDownloadSettings"],
    ];
  }

  constructor(params: { low?: true; high?: true; settings: types.TypeAutoDownloadSettings }) {
    super();
    this.low = params.low;
    this.high = params.high;
    this.settings = params.settings;
  }
}

export class AccountUploadTheme extends Function<types.TypeDocument> {
  file: types.TypeInputFile;
  thumb?: types.TypeInputFile;
  fileName: string;
  mimeType: string;

  protected get [id]() {
    return 0x1C3DB333;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["file", types.TypeInputFile, "InputFile"],
      ["thumb", types.TypeInputFile, "flags.0?InputFile"],
      ["fileName", "string", "string"],
      ["mimeType", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.file, types.TypeInputFile, "InputFile"],
      [this.thumb ?? null, types.TypeInputFile, "flags.0?InputFile"],
      [this.fileName, "string", "string"],
      [this.mimeType, "string", "string"],
    ];
  }

  constructor(params: { file: types.TypeInputFile; thumb?: types.TypeInputFile; fileName: string; mimeType: string }) {
    super();
    this.file = params.file;
    this.thumb = params.thumb;
    this.fileName = params.fileName;
    this.mimeType = params.mimeType;
  }
}

export class AccountCreateTheme extends Function<types.Theme> {
  slug: string;
  title: string;
  document?: types.TypeInputDocument;
  settings?: Array<types.TypeInputThemeSettings>;

  protected get [id]() {
    return 0x652E4400;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["slug", "string", "string"],
      ["title", "string", "string"],
      ["document", types.TypeInputDocument, "flags.2?InputDocument"],
      ["settings", [types.TypeInputThemeSettings], "flags.3?Vector<InputThemeSettings>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.slug, "string", "string"],
      [this.title, "string", "string"],
      [this.document ?? null, types.TypeInputDocument, "flags.2?InputDocument"],
      [this.settings ?? null, [types.TypeInputThemeSettings], "flags.3?Vector<InputThemeSettings>"],
    ];
  }

  constructor(params: { slug: string; title: string; document?: types.TypeInputDocument; settings?: Array<types.TypeInputThemeSettings> }) {
    super();
    this.slug = params.slug;
    this.title = params.title;
    this.document = params.document;
    this.settings = params.settings;
  }
}

export class AccountUpdateTheme extends Function<types.Theme> {
  format: string;
  theme: types.TypeInputTheme;
  slug?: string;
  title?: string;
  document?: types.TypeInputDocument;
  settings?: Array<types.TypeInputThemeSettings>;

  protected get [id]() {
    return 0x2BF40CCC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["format", "string", "string"],
      ["theme", types.TypeInputTheme, "InputTheme"],
      ["slug", "string", "flags.0?string"],
      ["title", "string", "flags.1?string"],
      ["document", types.TypeInputDocument, "flags.2?InputDocument"],
      ["settings", [types.TypeInputThemeSettings], "flags.3?Vector<InputThemeSettings>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.format, "string", "string"],
      [this.theme, types.TypeInputTheme, "InputTheme"],
      [this.slug ?? null, "string", "flags.0?string"],
      [this.title ?? null, "string", "flags.1?string"],
      [this.document ?? null, types.TypeInputDocument, "flags.2?InputDocument"],
      [this.settings ?? null, [types.TypeInputThemeSettings], "flags.3?Vector<InputThemeSettings>"],
    ];
  }

  constructor(params: { format: string; theme: types.TypeInputTheme; slug?: string; title?: string; document?: types.TypeInputDocument; settings?: Array<types.TypeInputThemeSettings> }) {
    super();
    this.format = params.format;
    this.theme = params.theme;
    this.slug = params.slug;
    this.title = params.title;
    this.document = params.document;
    this.settings = params.settings;
  }
}

export class AccountSaveTheme extends Function<boolean> {
  theme: types.TypeInputTheme;
  unsave: boolean;

  protected get [id]() {
    return 0xF257106C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["theme", types.TypeInputTheme, "InputTheme"],
      ["unsave", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.theme, types.TypeInputTheme, "InputTheme"],
      [this.unsave, "boolean", "Bool"],
    ];
  }

  constructor(params: { theme: types.TypeInputTheme; unsave: boolean }) {
    super();
    this.theme = params.theme;
    this.unsave = params.unsave;
  }
}

export class AccountInstallTheme extends Function<boolean> {
  dark?: true;
  theme?: types.TypeInputTheme;
  format?: string;
  baseTheme?: types.TypeBaseTheme;

  protected get [id]() {
    return 0xC727BB3B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["dark", "true", "flags.0?true"],
      ["theme", types.TypeInputTheme, "flags.1?InputTheme"],
      ["format", "string", "flags.2?string"],
      ["baseTheme", types.TypeBaseTheme, "flags.3?BaseTheme"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.dark ?? null, "true", "flags.0?true"],
      [this.theme ?? null, types.TypeInputTheme, "flags.1?InputTheme"],
      [this.format ?? null, "string", "flags.2?string"],
      [this.baseTheme ?? null, types.TypeBaseTheme, "flags.3?BaseTheme"],
    ];
  }

  constructor(params: { dark?: true; theme?: types.TypeInputTheme; format?: string; baseTheme?: types.TypeBaseTheme }) {
    super();
    this.dark = params.dark;
    this.theme = params.theme;
    this.format = params.format;
    this.baseTheme = params.baseTheme;
  }
}

export class AccountGetTheme extends Function<types.Theme> {
  format: string;
  theme: types.TypeInputTheme;

  protected get [id]() {
    return 0x3A5869EC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["format", "string", "string"],
      ["theme", types.TypeInputTheme, "InputTheme"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.format, "string", "string"],
      [this.theme, types.TypeInputTheme, "InputTheme"],
    ];
  }

  constructor(params: { format: string; theme: types.TypeInputTheme }) {
    super();
    this.format = params.format;
    this.theme = params.theme;
  }
}

export class AccountGetThemes extends Function<types.TypeAccountThemes> {
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

export class AccountSetContentSettings extends Function<boolean> {
  sensitiveEnabled?: true;

  protected get [id]() {
    return 0xB574B16B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["sensitiveEnabled", "true", "flags.0?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.sensitiveEnabled ?? null, "true", "flags.0?true"],
    ];
  }

  constructor(params: { sensitiveEnabled?: true }) {
    super();
    this.sensitiveEnabled = params.sensitiveEnabled;
  }
}

export class AccountGetContentSettings extends Function<types.AccountContentSettings> {
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

export class AccountGetMultiWallPapers extends Function<types.TypeWallPaper[]> {
  wallpapers: Array<types.TypeInputWallPaper>;

  protected get [id]() {
    return 0x65AD71DC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["wallpapers", [types.TypeInputWallPaper], "Vector<InputWallPaper>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.wallpapers, [types.TypeInputWallPaper], "Vector<InputWallPaper>"],
    ];
  }

  constructor(params: { wallpapers: Array<types.TypeInputWallPaper> }) {
    super();
    this.wallpapers = params.wallpapers;
  }
}

export class AccountGetGlobalPrivacySettings extends Function<types.GlobalPrivacySettings> {
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

export class AccountSetGlobalPrivacySettings extends Function<types.GlobalPrivacySettings> {
  settings: types.TypeGlobalPrivacySettings;

  protected get [id]() {
    return 0x1EDAAAC2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["settings", types.TypeGlobalPrivacySettings, "GlobalPrivacySettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.settings, types.TypeGlobalPrivacySettings, "GlobalPrivacySettings"],
    ];
  }

  constructor(params: { settings: types.TypeGlobalPrivacySettings }) {
    super();
    this.settings = params.settings;
  }
}

export class AccountReportProfilePhoto extends Function<boolean> {
  peer: types.TypeInputPeer;
  photoId: types.TypeInputPhoto;
  reason: types.TypeReportReason;
  message: string;

  protected get [id]() {
    return 0xFA8CC6F5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["photoId", types.TypeInputPhoto, "InputPhoto"],
      ["reason", types.TypeReportReason, "ReportReason"],
      ["message", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.photoId, types.TypeInputPhoto, "InputPhoto"],
      [this.reason, types.TypeReportReason, "ReportReason"],
      [this.message, "string", "string"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; photoId: types.TypeInputPhoto; reason: types.TypeReportReason; message: string }) {
    super();
    this.peer = params.peer;
    this.photoId = params.photoId;
    this.reason = params.reason;
    this.message = params.message;
  }
}

export class AccountResetPassword extends Function<types.TypeAccountResetPasswordResult> {
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

export class AccountDeclinePasswordReset extends Function<boolean> {
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

export class AccountGetChatThemes extends Function<types.TypeAccountThemes> {
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

export class AccountSetAuthorizationTTL extends Function<boolean> {
  authorizationTtlDays: number;

  protected get [id]() {
    return 0xBF899AA0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["authorizationTtlDays", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.authorizationTtlDays, "number", "int"],
    ];
  }

  constructor(params: { authorizationTtlDays: number }) {
    super();
    this.authorizationTtlDays = params.authorizationTtlDays;
  }
}

export class AccountChangeAuthorizationSettings extends Function<boolean> {
  hash: bigint;
  encryptedRequestsDisabled?: boolean;
  callRequestsDisabled?: boolean;

  protected get [id]() {
    return 0x40F48462;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["hash", "bigint", "long"],
      ["encryptedRequestsDisabled", "boolean", "flags.0?Bool"],
      ["callRequestsDisabled", "boolean", "flags.1?Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.hash, "bigint", "long"],
      [this.encryptedRequestsDisabled ?? null, "boolean", "flags.0?Bool"],
      [this.callRequestsDisabled ?? null, "boolean", "flags.1?Bool"],
    ];
  }

  constructor(params: { hash: bigint; encryptedRequestsDisabled?: boolean; callRequestsDisabled?: boolean }) {
    super();
    this.hash = params.hash;
    this.encryptedRequestsDisabled = params.encryptedRequestsDisabled;
    this.callRequestsDisabled = params.callRequestsDisabled;
  }
}

export class AccountGetSavedRingtones extends Function<types.TypeAccountSavedRingtones> {
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

export class AccountSaveRingtone extends Function<types.TypeAccountSavedRingtone> {
  id: types.TypeInputDocument;
  unsave: boolean;

  protected get [id]() {
    return 0x3DEA5B03;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types.TypeInputDocument, "InputDocument"],
      ["unsave", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types.TypeInputDocument, "InputDocument"],
      [this.unsave, "boolean", "Bool"],
    ];
  }

  constructor(params: { id: types.TypeInputDocument; unsave: boolean }) {
    super();
    this.id = params.id;
    this.unsave = params.unsave;
  }
}

export class AccountUploadRingtone extends Function<types.TypeDocument> {
  file: types.TypeInputFile;
  fileName: string;
  mimeType: string;

  protected get [id]() {
    return 0x831A83A2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["file", types.TypeInputFile, "InputFile"],
      ["fileName", "string", "string"],
      ["mimeType", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.file, types.TypeInputFile, "InputFile"],
      [this.fileName, "string", "string"],
      [this.mimeType, "string", "string"],
    ];
  }

  constructor(params: { file: types.TypeInputFile; fileName: string; mimeType: string }) {
    super();
    this.file = params.file;
    this.fileName = params.fileName;
    this.mimeType = params.mimeType;
  }
}

export class AccountUpdateEmojiStatus extends Function<boolean> {
  emojiStatus: types.TypeEmojiStatus;

  protected get [id]() {
    return 0xFBD3DE6B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["emojiStatus", types.TypeEmojiStatus, "EmojiStatus"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.emojiStatus, types.TypeEmojiStatus, "EmojiStatus"],
    ];
  }

  constructor(params: { emojiStatus: types.TypeEmojiStatus }) {
    super();
    this.emojiStatus = params.emojiStatus;
  }
}

export class AccountGetDefaultEmojiStatuses extends Function<types.TypeAccountEmojiStatuses> {
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

export class AccountGetRecentEmojiStatuses extends Function<types.TypeAccountEmojiStatuses> {
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

export class AccountClearRecentEmojiStatuses extends Function<boolean> {
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

export class AccountReorderUsernames extends Function<boolean> {
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

export class AccountToggleUsername extends Function<boolean> {
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

export class AccountGetDefaultProfilePhotoEmojis extends Function<types.TypeEmojiList> {
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

export class AccountGetDefaultGroupPhotoEmojis extends Function<types.TypeEmojiList> {
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

export class AccountGetAutoSaveSettings extends Function<types.AccountAutoSaveSettings> {
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

export class AccountSaveAutoSaveSettings extends Function<boolean> {
  users?: true;
  chats?: true;
  broadcasts?: true;
  peer?: types.TypeInputPeer;
  settings: types.TypeAutoSaveSettings;

  protected get [id]() {
    return 0xD69B8361;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["users", "true", "flags.0?true"],
      ["chats", "true", "flags.1?true"],
      ["broadcasts", "true", "flags.2?true"],
      ["peer", types.TypeInputPeer, "flags.3?InputPeer"],
      ["settings", types.TypeAutoSaveSettings, "AutoSaveSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.users ?? null, "true", "flags.0?true"],
      [this.chats ?? null, "true", "flags.1?true"],
      [this.broadcasts ?? null, "true", "flags.2?true"],
      [this.peer ?? null, types.TypeInputPeer, "flags.3?InputPeer"],
      [this.settings, types.TypeAutoSaveSettings, "AutoSaveSettings"],
    ];
  }

  constructor(params: { users?: true; chats?: true; broadcasts?: true; peer?: types.TypeInputPeer; settings: types.TypeAutoSaveSettings }) {
    super();
    this.users = params.users;
    this.chats = params.chats;
    this.broadcasts = params.broadcasts;
    this.peer = params.peer;
    this.settings = params.settings;
  }
}

export class AccountDeleteAutoSaveExceptions extends Function<boolean> {
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

export class AccountInvalidateSignInCodes extends Function<boolean> {
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

export class UsersGetUsers extends Function<types.TypeUser[]> {
  id: Array<types.TypeInputUser>;

  protected get [id]() {
    return 0x0D91A548;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [types.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [types.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  constructor(params: { id: Array<types.TypeInputUser> }) {
    super();
    this.id = params.id;
  }
}

export class UsersGetFullUser extends Function<types.UsersUserFull> {
  id: types.TypeInputUser;

  protected get [id]() {
    return 0xB60F5918;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { id: types.TypeInputUser }) {
    super();
    this.id = params.id;
  }
}

export class UsersSetSecureValueErrors extends Function<boolean> {
  id: types.TypeInputUser;
  errors: Array<types.TypeSecureValueError>;

  protected get [id]() {
    return 0x90C894B5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types.TypeInputUser, "InputUser"],
      ["errors", [types.TypeSecureValueError], "Vector<SecureValueError>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types.TypeInputUser, "InputUser"],
      [this.errors, [types.TypeSecureValueError], "Vector<SecureValueError>"],
    ];
  }

  constructor(params: { id: types.TypeInputUser; errors: Array<types.TypeSecureValueError> }) {
    super();
    this.id = params.id;
    this.errors = params.errors;
  }
}

export class UsersGetStoriesMaxIDs extends Function<number[]> {
  id: Array<types.TypeInputUser>;

  protected get [id]() {
    return 0xCA1CB9AB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [types.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [types.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  constructor(params: { id: Array<types.TypeInputUser> }) {
    super();
    this.id = params.id;
  }
}

export class ContactsGetContactIDs extends Function<number[]> {
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

export class ContactsGetStatuses extends Function<types.ContactStatus[]> {
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

export class ContactsGetContacts extends Function<types.TypeContactsContacts> {
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

export class ContactsImportContacts extends Function<types.ContactsImportedContacts> {
  contacts: Array<types.TypeInputContact>;

  protected get [id]() {
    return 0x2C800BE5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["contacts", [types.TypeInputContact], "Vector<InputContact>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.contacts, [types.TypeInputContact], "Vector<InputContact>"],
    ];
  }

  constructor(params: { contacts: Array<types.TypeInputContact> }) {
    super();
    this.contacts = params.contacts;
  }
}

export class ContactsDeleteContacts extends Function<types.TypeUpdates> {
  id: Array<types.TypeInputUser>;

  protected get [id]() {
    return 0x096A0E00;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [types.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [types.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  constructor(params: { id: Array<types.TypeInputUser> }) {
    super();
    this.id = params.id;
  }
}

export class ContactsDeleteByPhones extends Function<boolean> {
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

export class ContactsBlock extends Function<boolean> {
  id: types.TypeInputPeer;

  protected get [id]() {
    return 0x68CC1411;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { id: types.TypeInputPeer }) {
    super();
    this.id = params.id;
  }
}

export class ContactsUnblock extends Function<boolean> {
  id: types.TypeInputPeer;

  protected get [id]() {
    return 0xBEA65D50;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { id: types.TypeInputPeer }) {
    super();
    this.id = params.id;
  }
}

export class ContactsGetBlocked extends Function<types.TypeContactsBlocked> {
  offset: number;
  limit: number;

  protected get [id]() {
    return 0xF57C350F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { offset: number; limit: number }) {
    super();
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class ContactsSearch extends Function<types.ContactsFound> {
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

export class ContactsResolveUsername extends Function<types.ContactsResolvedPeer> {
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

export class ContactsGetTopPeers extends Function<types.TypeContactsTopPeers> {
  correspondents?: true;
  botsPm?: true;
  botsInline?: true;
  phoneCalls?: true;
  forwardUsers?: true;
  forwardChats?: true;
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
      ["botsPm", "true", "flags.1?true"],
      ["botsInline", "true", "flags.2?true"],
      ["phoneCalls", "true", "flags.3?true"],
      ["forwardUsers", "true", "flags.4?true"],
      ["forwardChats", "true", "flags.5?true"],
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
      [this.botsPm ?? null, "true", "flags.1?true"],
      [this.botsInline ?? null, "true", "flags.2?true"],
      [this.phoneCalls ?? null, "true", "flags.3?true"],
      [this.forwardUsers ?? null, "true", "flags.4?true"],
      [this.forwardChats ?? null, "true", "flags.5?true"],
      [this.groups ?? null, "true", "flags.10?true"],
      [this.channels ?? null, "true", "flags.15?true"],
      [this.offset, "number", "int"],
      [this.limit, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { correspondents?: true; botsPm?: true; botsInline?: true; phoneCalls?: true; forwardUsers?: true; forwardChats?: true; groups?: true; channels?: true; offset: number; limit: number; hash: bigint }) {
    super();
    this.correspondents = params.correspondents;
    this.botsPm = params.botsPm;
    this.botsInline = params.botsInline;
    this.phoneCalls = params.phoneCalls;
    this.forwardUsers = params.forwardUsers;
    this.forwardChats = params.forwardChats;
    this.groups = params.groups;
    this.channels = params.channels;
    this.offset = params.offset;
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

export class ContactsResetTopPeerRating extends Function<boolean> {
  category: types.TypeTopPeerCategory;
  peer: types.TypeInputPeer;

  protected get [id]() {
    return 0x1AE373AC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["category", types.TypeTopPeerCategory, "TopPeerCategory"],
      ["peer", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.category, types.TypeTopPeerCategory, "TopPeerCategory"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { category: types.TypeTopPeerCategory; peer: types.TypeInputPeer }) {
    super();
    this.category = params.category;
    this.peer = params.peer;
  }
}

export class ContactsResetSaved extends Function<boolean> {
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

export class ContactsGetSaved extends Function<types.SavedPhoneContact[]> {
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

export class ContactsToggleTopPeers extends Function<boolean> {
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

export class ContactsAddContact extends Function<types.TypeUpdates> {
  addPhonePrivacyException?: true;
  id: types.TypeInputUser;
  firstName: string;
  lastName: string;
  phone: string;

  protected get [id]() {
    return 0xE8F463D0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["addPhonePrivacyException", "true", "flags.0?true"],
      ["id", types.TypeInputUser, "InputUser"],
      ["firstName", "string", "string"],
      ["lastName", "string", "string"],
      ["phone", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.addPhonePrivacyException ?? null, "true", "flags.0?true"],
      [this.id, types.TypeInputUser, "InputUser"],
      [this.firstName, "string", "string"],
      [this.lastName, "string", "string"],
      [this.phone, "string", "string"],
    ];
  }

  constructor(params: { addPhonePrivacyException?: true; id: types.TypeInputUser; firstName: string; lastName: string; phone: string }) {
    super();
    this.addPhonePrivacyException = params.addPhonePrivacyException;
    this.id = params.id;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.phone = params.phone;
  }
}

export class ContactsAcceptContact extends Function<types.TypeUpdates> {
  id: types.TypeInputUser;

  protected get [id]() {
    return 0xF831A20F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { id: types.TypeInputUser }) {
    super();
    this.id = params.id;
  }
}

export class ContactsGetLocated extends Function<types.TypeUpdates> {
  background?: true;
  geoPoint: types.TypeInputGeoPoint;
  selfExpires?: number;

  protected get [id]() {
    return 0xD348BC44;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["background", "true", "flags.1?true"],
      ["geoPoint", types.TypeInputGeoPoint, "InputGeoPoint"],
      ["selfExpires", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.background ?? null, "true", "flags.1?true"],
      [this.geoPoint, types.TypeInputGeoPoint, "InputGeoPoint"],
      [this.selfExpires ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { background?: true; geoPoint: types.TypeInputGeoPoint; selfExpires?: number }) {
    super();
    this.background = params.background;
    this.geoPoint = params.geoPoint;
    this.selfExpires = params.selfExpires;
  }
}

export class ContactsBlockFromReplies extends Function<types.TypeUpdates> {
  deleteMessage?: true;
  deleteHistory?: true;
  reportSpam?: true;
  msgId: number;

  protected get [id]() {
    return 0x29A8962C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["deleteMessage", "true", "flags.0?true"],
      ["deleteHistory", "true", "flags.1?true"],
      ["reportSpam", "true", "flags.2?true"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.deleteMessage ?? null, "true", "flags.0?true"],
      [this.deleteHistory ?? null, "true", "flags.1?true"],
      [this.reportSpam ?? null, "true", "flags.2?true"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { deleteMessage?: true; deleteHistory?: true; reportSpam?: true; msgId: number }) {
    super();
    this.deleteMessage = params.deleteMessage;
    this.deleteHistory = params.deleteHistory;
    this.reportSpam = params.reportSpam;
    this.msgId = params.msgId;
  }
}

export class ContactsResolvePhone extends Function<types.ContactsResolvedPeer> {
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

export class ContactsExportContactToken extends Function<types.ExportedContactToken> {
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

export class ContactsImportContactToken extends Function<types.TypeUser> {
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

export class ContactsEditCloseFriends extends Function<boolean> {
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

export class ContactsToggleStoriesHidden extends Function<boolean> {
  id: types.TypeInputUser;
  hidden: boolean;

  protected get [id]() {
    return 0x753FB865;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types.TypeInputUser, "InputUser"],
      ["hidden", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types.TypeInputUser, "InputUser"],
      [this.hidden, "boolean", "Bool"],
    ];
  }

  constructor(params: { id: types.TypeInputUser; hidden: boolean }) {
    super();
    this.id = params.id;
    this.hidden = params.hidden;
  }
}

export class MessagesGetMessages extends Function<types.TypeMessagesMessages> {
  id: Array<types.TypeInputMessage>;

  protected get [id]() {
    return 0x63C66506;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [types.TypeInputMessage], "Vector<InputMessage>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [types.TypeInputMessage], "Vector<InputMessage>"],
    ];
  }

  constructor(params: { id: Array<types.TypeInputMessage> }) {
    super();
    this.id = params.id;
  }
}

export class MessagesGetDialogs extends Function<types.TypeMessagesDialogs> {
  excludePinned?: true;
  folderId?: number;
  offsetDate: number;
  offsetId: number;
  offsetPeer: types.TypeInputPeer;
  limit: number;
  hash: bigint;

  protected get [id]() {
    return 0xA0F4CB4F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["excludePinned", "true", "flags.0?true"],
      ["folderId", "number", "flags.1?int"],
      ["offsetDate", "number", "int"],
      ["offsetId", "number", "int"],
      ["offsetPeer", types.TypeInputPeer, "InputPeer"],
      ["limit", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.excludePinned ?? null, "true", "flags.0?true"],
      [this.folderId ?? null, "number", "flags.1?int"],
      [this.offsetDate, "number", "int"],
      [this.offsetId, "number", "int"],
      [this.offsetPeer, types.TypeInputPeer, "InputPeer"],
      [this.limit, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { excludePinned?: true; folderId?: number; offsetDate: number; offsetId: number; offsetPeer: types.TypeInputPeer; limit: number; hash: bigint }) {
    super();
    this.excludePinned = params.excludePinned;
    this.folderId = params.folderId;
    this.offsetDate = params.offsetDate;
    this.offsetId = params.offsetId;
    this.offsetPeer = params.offsetPeer;
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

export class MessagesGetHistory extends Function<types.TypeMessagesMessages> {
  peer: types.TypeInputPeer;
  offsetId: number;
  offsetDate: number;
  addOffset: number;
  limit: number;
  maxId: number;
  minId: number;
  hash: bigint;

  protected get [id]() {
    return 0x4423E6C5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["offsetId", "number", "int"],
      ["offsetDate", "number", "int"],
      ["addOffset", "number", "int"],
      ["limit", "number", "int"],
      ["maxId", "number", "int"],
      ["minId", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.offsetId, "number", "int"],
      [this.offsetDate, "number", "int"],
      [this.addOffset, "number", "int"],
      [this.limit, "number", "int"],
      [this.maxId, "number", "int"],
      [this.minId, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; offsetId: number; offsetDate: number; addOffset: number; limit: number; maxId: number; minId: number; hash: bigint }) {
    super();
    this.peer = params.peer;
    this.offsetId = params.offsetId;
    this.offsetDate = params.offsetDate;
    this.addOffset = params.addOffset;
    this.limit = params.limit;
    this.maxId = params.maxId;
    this.minId = params.minId;
    this.hash = params.hash;
  }
}

export class MessagesSearch extends Function<types.TypeMessagesMessages> {
  peer: types.TypeInputPeer;
  q: string;
  fromId?: types.TypeInputPeer;
  topMsgId?: number;
  filter: types.TypeMessagesFilter;
  minDate: number;
  maxDate: number;
  offsetId: number;
  addOffset: number;
  limit: number;
  maxId: number;
  minId: number;
  hash: bigint;

  protected get [id]() {
    return 0xA0FDA762;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["q", "string", "string"],
      ["fromId", types.TypeInputPeer, "flags.0?InputPeer"],
      ["topMsgId", "number", "flags.1?int"],
      ["filter", types.TypeMessagesFilter, "MessagesFilter"],
      ["minDate", "number", "int"],
      ["maxDate", "number", "int"],
      ["offsetId", "number", "int"],
      ["addOffset", "number", "int"],
      ["limit", "number", "int"],
      ["maxId", "number", "int"],
      ["minId", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.q, "string", "string"],
      [this.fromId ?? null, types.TypeInputPeer, "flags.0?InputPeer"],
      [this.topMsgId ?? null, "number", "flags.1?int"],
      [this.filter, types.TypeMessagesFilter, "MessagesFilter"],
      [this.minDate, "number", "int"],
      [this.maxDate, "number", "int"],
      [this.offsetId, "number", "int"],
      [this.addOffset, "number", "int"],
      [this.limit, "number", "int"],
      [this.maxId, "number", "int"],
      [this.minId, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; q: string; fromId?: types.TypeInputPeer; topMsgId?: number; filter: types.TypeMessagesFilter; minDate: number; maxDate: number; offsetId: number; addOffset: number; limit: number; maxId: number; minId: number; hash: bigint }) {
    super();
    this.peer = params.peer;
    this.q = params.q;
    this.fromId = params.fromId;
    this.topMsgId = params.topMsgId;
    this.filter = params.filter;
    this.minDate = params.minDate;
    this.maxDate = params.maxDate;
    this.offsetId = params.offsetId;
    this.addOffset = params.addOffset;
    this.limit = params.limit;
    this.maxId = params.maxId;
    this.minId = params.minId;
    this.hash = params.hash;
  }
}

export class MessagesReadHistory extends Function<types.MessagesAffectedMessages> {
  peer: types.TypeInputPeer;
  maxId: number;

  protected get [id]() {
    return 0x0E306D3A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["maxId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.maxId, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; maxId: number }) {
    super();
    this.peer = params.peer;
    this.maxId = params.maxId;
  }
}

export class MessagesDeleteHistory extends Function<types.MessagesAffectedHistory> {
  justClear?: true;
  revoke?: true;
  peer: types.TypeInputPeer;
  maxId: number;
  minDate?: number;
  maxDate?: number;

  protected get [id]() {
    return 0xB08F922A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["justClear", "true", "flags.0?true"],
      ["revoke", "true", "flags.1?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["maxId", "number", "int"],
      ["minDate", "number", "flags.2?int"],
      ["maxDate", "number", "flags.3?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.justClear ?? null, "true", "flags.0?true"],
      [this.revoke ?? null, "true", "flags.1?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.maxId, "number", "int"],
      [this.minDate ?? null, "number", "flags.2?int"],
      [this.maxDate ?? null, "number", "flags.3?int"],
    ];
  }

  constructor(params: { justClear?: true; revoke?: true; peer: types.TypeInputPeer; maxId: number; minDate?: number; maxDate?: number }) {
    super();
    this.justClear = params.justClear;
    this.revoke = params.revoke;
    this.peer = params.peer;
    this.maxId = params.maxId;
    this.minDate = params.minDate;
    this.maxDate = params.maxDate;
  }
}

export class MessagesDeleteMessages extends Function<types.MessagesAffectedMessages> {
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

export class MessagesReceivedMessages extends Function<types.ReceivedNotifyMessage[]> {
  maxId: number;

  protected get [id]() {
    return 0x05A954C0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["maxId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.maxId, "number", "int"],
    ];
  }

  constructor(params: { maxId: number }) {
    super();
    this.maxId = params.maxId;
  }
}

export class MessagesSetTyping extends Function<boolean> {
  peer: types.TypeInputPeer;
  topMsgId?: number;
  action: types.TypeSendMessageAction;

  protected get [id]() {
    return 0x58943EE2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["topMsgId", "number", "flags.0?int"],
      ["action", types.TypeSendMessageAction, "SendMessageAction"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
      [this.action, types.TypeSendMessageAction, "SendMessageAction"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; topMsgId?: number; action: types.TypeSendMessageAction }) {
    super();
    this.peer = params.peer;
    this.topMsgId = params.topMsgId;
    this.action = params.action;
  }
}

export class MessagesSendMessage extends Function<types.TypeUpdates> {
  noWebpage?: true;
  silent?: true;
  background?: true;
  clearDraft?: true;
  noforwards?: true;
  updateStickersetsOrder?: true;
  peer: types.TypeInputPeer;
  replyTo?: types.TypeInputReplyTo;
  message: string;
  randomId: bigint;
  replyMarkup?: types.TypeReplyMarkup;
  entities?: Array<types.TypeMessageEntity>;
  scheduleDate?: number;
  sendAs?: types.TypeInputPeer;

  protected get [id]() {
    return 0x280D096F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["noWebpage", "true", "flags.1?true"],
      ["silent", "true", "flags.5?true"],
      ["background", "true", "flags.6?true"],
      ["clearDraft", "true", "flags.7?true"],
      ["noforwards", "true", "flags.14?true"],
      ["updateStickersetsOrder", "true", "flags.15?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["replyTo", types.TypeInputReplyTo, "flags.0?InputReplyTo"],
      ["message", "string", "string"],
      ["randomId", "bigint", "long"],
      ["replyMarkup", types.TypeReplyMarkup, "flags.2?ReplyMarkup"],
      ["entities", [types.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
      ["scheduleDate", "number", "flags.10?int"],
      ["sendAs", types.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.noWebpage ?? null, "true", "flags.1?true"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.background ?? null, "true", "flags.6?true"],
      [this.clearDraft ?? null, "true", "flags.7?true"],
      [this.noforwards ?? null, "true", "flags.14?true"],
      [this.updateStickersetsOrder ?? null, "true", "flags.15?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.replyTo ?? null, types.TypeInputReplyTo, "flags.0?InputReplyTo"],
      [this.message, "string", "string"],
      [this.randomId, "bigint", "long"],
      [this.replyMarkup ?? null, types.TypeReplyMarkup, "flags.2?ReplyMarkup"],
      [this.entities ?? null, [types.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
      [this.scheduleDate ?? null, "number", "flags.10?int"],
      [this.sendAs ?? null, types.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { noWebpage?: true; silent?: true; background?: true; clearDraft?: true; noforwards?: true; updateStickersetsOrder?: true; peer: types.TypeInputPeer; replyTo?: types.TypeInputReplyTo; message: string; randomId: bigint; replyMarkup?: types.TypeReplyMarkup; entities?: Array<types.TypeMessageEntity>; scheduleDate?: number; sendAs?: types.TypeInputPeer }) {
    super();
    this.noWebpage = params.noWebpage;
    this.silent = params.silent;
    this.background = params.background;
    this.clearDraft = params.clearDraft;
    this.noforwards = params.noforwards;
    this.updateStickersetsOrder = params.updateStickersetsOrder;
    this.peer = params.peer;
    this.replyTo = params.replyTo;
    this.message = params.message;
    this.randomId = params.randomId;
    this.replyMarkup = params.replyMarkup;
    this.entities = params.entities;
    this.scheduleDate = params.scheduleDate;
    this.sendAs = params.sendAs;
  }
}

export class MessagesSendMedia extends Function<types.TypeUpdates> {
  silent?: true;
  background?: true;
  clearDraft?: true;
  noforwards?: true;
  updateStickersetsOrder?: true;
  peer: types.TypeInputPeer;
  replyTo?: types.TypeInputReplyTo;
  media: types.TypeInputMedia;
  message: string;
  randomId: bigint;
  replyMarkup?: types.TypeReplyMarkup;
  entities?: Array<types.TypeMessageEntity>;
  scheduleDate?: number;
  sendAs?: types.TypeInputPeer;

  protected get [id]() {
    return 0x72CCC23D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.5?true"],
      ["background", "true", "flags.6?true"],
      ["clearDraft", "true", "flags.7?true"],
      ["noforwards", "true", "flags.14?true"],
      ["updateStickersetsOrder", "true", "flags.15?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["replyTo", types.TypeInputReplyTo, "flags.0?InputReplyTo"],
      ["media", types.TypeInputMedia, "InputMedia"],
      ["message", "string", "string"],
      ["randomId", "bigint", "long"],
      ["replyMarkup", types.TypeReplyMarkup, "flags.2?ReplyMarkup"],
      ["entities", [types.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
      ["scheduleDate", "number", "flags.10?int"],
      ["sendAs", types.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.background ?? null, "true", "flags.6?true"],
      [this.clearDraft ?? null, "true", "flags.7?true"],
      [this.noforwards ?? null, "true", "flags.14?true"],
      [this.updateStickersetsOrder ?? null, "true", "flags.15?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.replyTo ?? null, types.TypeInputReplyTo, "flags.0?InputReplyTo"],
      [this.media, types.TypeInputMedia, "InputMedia"],
      [this.message, "string", "string"],
      [this.randomId, "bigint", "long"],
      [this.replyMarkup ?? null, types.TypeReplyMarkup, "flags.2?ReplyMarkup"],
      [this.entities ?? null, [types.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
      [this.scheduleDate ?? null, "number", "flags.10?int"],
      [this.sendAs ?? null, types.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { silent?: true; background?: true; clearDraft?: true; noforwards?: true; updateStickersetsOrder?: true; peer: types.TypeInputPeer; replyTo?: types.TypeInputReplyTo; media: types.TypeInputMedia; message: string; randomId: bigint; replyMarkup?: types.TypeReplyMarkup; entities?: Array<types.TypeMessageEntity>; scheduleDate?: number; sendAs?: types.TypeInputPeer }) {
    super();
    this.silent = params.silent;
    this.background = params.background;
    this.clearDraft = params.clearDraft;
    this.noforwards = params.noforwards;
    this.updateStickersetsOrder = params.updateStickersetsOrder;
    this.peer = params.peer;
    this.replyTo = params.replyTo;
    this.media = params.media;
    this.message = params.message;
    this.randomId = params.randomId;
    this.replyMarkup = params.replyMarkup;
    this.entities = params.entities;
    this.scheduleDate = params.scheduleDate;
    this.sendAs = params.sendAs;
  }
}

export class MessagesForwardMessages extends Function<types.TypeUpdates> {
  silent?: true;
  background?: true;
  withMyScore?: true;
  dropAuthor?: true;
  dropMediaCaptions?: true;
  noforwards?: true;
  fromPeer: types.TypeInputPeer;
  id: Array<number>;
  randomId: Array<bigint>;
  toPeer: types.TypeInputPeer;
  topMsgId?: number;
  scheduleDate?: number;
  sendAs?: types.TypeInputPeer;

  protected get [id]() {
    return 0xC661BBC4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.5?true"],
      ["background", "true", "flags.6?true"],
      ["withMyScore", "true", "flags.8?true"],
      ["dropAuthor", "true", "flags.11?true"],
      ["dropMediaCaptions", "true", "flags.12?true"],
      ["noforwards", "true", "flags.14?true"],
      ["fromPeer", types.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
      ["randomId", ["bigint"], "Vector<long>"],
      ["toPeer", types.TypeInputPeer, "InputPeer"],
      ["topMsgId", "number", "flags.9?int"],
      ["scheduleDate", "number", "flags.10?int"],
      ["sendAs", types.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.background ?? null, "true", "flags.6?true"],
      [this.withMyScore ?? null, "true", "flags.8?true"],
      [this.dropAuthor ?? null, "true", "flags.11?true"],
      [this.dropMediaCaptions ?? null, "true", "flags.12?true"],
      [this.noforwards ?? null, "true", "flags.14?true"],
      [this.fromPeer, types.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
      [this.randomId, ["bigint"], "Vector<long>"],
      [this.toPeer, types.TypeInputPeer, "InputPeer"],
      [this.topMsgId ?? null, "number", "flags.9?int"],
      [this.scheduleDate ?? null, "number", "flags.10?int"],
      [this.sendAs ?? null, types.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { silent?: true; background?: true; withMyScore?: true; dropAuthor?: true; dropMediaCaptions?: true; noforwards?: true; fromPeer: types.TypeInputPeer; id: Array<number>; randomId: Array<bigint>; toPeer: types.TypeInputPeer; topMsgId?: number; scheduleDate?: number; sendAs?: types.TypeInputPeer }) {
    super();
    this.silent = params.silent;
    this.background = params.background;
    this.withMyScore = params.withMyScore;
    this.dropAuthor = params.dropAuthor;
    this.dropMediaCaptions = params.dropMediaCaptions;
    this.noforwards = params.noforwards;
    this.fromPeer = params.fromPeer;
    this.id = params.id;
    this.randomId = params.randomId;
    this.toPeer = params.toPeer;
    this.topMsgId = params.topMsgId;
    this.scheduleDate = params.scheduleDate;
    this.sendAs = params.sendAs;
  }
}

export class MessagesReportSpam extends Function<boolean> {
  peer: types.TypeInputPeer;

  protected get [id]() {
    return 0xCF1592DB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class MessagesGetPeerSettings extends Function<types.MessagesPeerSettings> {
  peer: types.TypeInputPeer;

  protected get [id]() {
    return 0xEFD9A6A2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class MessagesReport extends Function<boolean> {
  peer: types.TypeInputPeer;
  id: Array<number>;
  reason: types.TypeReportReason;
  message: string;

  protected get [id]() {
    return 0x8953AB4E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
      ["reason", types.TypeReportReason, "ReportReason"],
      ["message", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
      [this.reason, types.TypeReportReason, "ReportReason"],
      [this.message, "string", "string"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; id: Array<number>; reason: types.TypeReportReason; message: string }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.reason = params.reason;
    this.message = params.message;
  }
}

export class MessagesGetChats extends Function<types.TypeMessagesChats> {
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

export class MessagesGetFullChat extends Function<types.MessagesChatFull> {
  chatId: bigint;

  protected get [id]() {
    return 0xAEB00B34;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
    ];
  }

  constructor(params: { chatId: bigint }) {
    super();
    this.chatId = params.chatId;
  }
}

export class MessagesEditChatTitle extends Function<types.TypeUpdates> {
  chatId: bigint;
  title: string;

  protected get [id]() {
    return 0x73783FFD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
      [this.title, "string", "string"],
    ];
  }

  constructor(params: { chatId: bigint; title: string }) {
    super();
    this.chatId = params.chatId;
    this.title = params.title;
  }
}

export class MessagesEditChatPhoto extends Function<types.TypeUpdates> {
  chatId: bigint;
  photo: types.TypeInputChatPhoto;

  protected get [id]() {
    return 0x35DDD674;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
      ["photo", types.TypeInputChatPhoto, "InputChatPhoto"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
      [this.photo, types.TypeInputChatPhoto, "InputChatPhoto"],
    ];
  }

  constructor(params: { chatId: bigint; photo: types.TypeInputChatPhoto }) {
    super();
    this.chatId = params.chatId;
    this.photo = params.photo;
  }
}

export class MessagesAddChatUser extends Function<types.TypeUpdates> {
  chatId: bigint;
  userId: types.TypeInputUser;
  fwdLimit: number;

  protected get [id]() {
    return 0xF24753E3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
      ["userId", types.TypeInputUser, "InputUser"],
      ["fwdLimit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.fwdLimit, "number", "int"],
    ];
  }

  constructor(params: { chatId: bigint; userId: types.TypeInputUser; fwdLimit: number }) {
    super();
    this.chatId = params.chatId;
    this.userId = params.userId;
    this.fwdLimit = params.fwdLimit;
  }
}

export class MessagesDeleteChatUser extends Function<types.TypeUpdates> {
  revokeHistory?: true;
  chatId: bigint;
  userId: types.TypeInputUser;

  protected get [id]() {
    return 0xA2185CAB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["revokeHistory", "true", "flags.0?true"],
      ["chatId", "bigint", "long"],
      ["userId", types.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.revokeHistory ?? null, "true", "flags.0?true"],
      [this.chatId, "bigint", "long"],
      [this.userId, types.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { revokeHistory?: true; chatId: bigint; userId: types.TypeInputUser }) {
    super();
    this.revokeHistory = params.revokeHistory;
    this.chatId = params.chatId;
    this.userId = params.userId;
  }
}

export class MessagesCreateChat extends Function<types.TypeUpdates> {
  users: Array<types.TypeInputUser>;
  title: string;
  ttlPeriod?: number;

  protected get [id]() {
    return 0x0034A818;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["users", [types.TypeInputUser], "Vector<InputUser>"],
      ["title", "string", "string"],
      ["ttlPeriod", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.users, [types.TypeInputUser], "Vector<InputUser>"],
      [this.title, "string", "string"],
      [this.ttlPeriod ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { users: Array<types.TypeInputUser>; title: string; ttlPeriod?: number }) {
    super();
    this.users = params.users;
    this.title = params.title;
    this.ttlPeriod = params.ttlPeriod;
  }
}

export class MessagesGetDhConfig extends Function<types.TypeMessagesDhConfig> {
  version: number;
  randomLength: number;

  protected get [id]() {
    return 0x26CF8950;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["version", "number", "int"],
      ["randomLength", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.version, "number", "int"],
      [this.randomLength, "number", "int"],
    ];
  }

  constructor(params: { version: number; randomLength: number }) {
    super();
    this.version = params.version;
    this.randomLength = params.randomLength;
  }
}

export class MessagesRequestEncryption extends Function<types.TypeEncryptedChat> {
  userId: types.TypeInputUser;
  randomId: number;
  gA: Uint8Array;

  protected get [id]() {
    return 0xF64DAF43;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", types.TypeInputUser, "InputUser"],
      ["randomId", "number", "int"],
      ["gA", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.randomId, "number", "int"],
      [this.gA, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { userId: types.TypeInputUser; randomId: number; gA: Uint8Array }) {
    super();
    this.userId = params.userId;
    this.randomId = params.randomId;
    this.gA = params.gA;
  }
}

export class MessagesAcceptEncryption extends Function<types.TypeEncryptedChat> {
  peer: types.TypeInputEncryptedChat;
  gB: Uint8Array;
  keyFingerprint: bigint;

  protected get [id]() {
    return 0x3DBC0415;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputEncryptedChat, "InputEncryptedChat"],
      ["gB", Uint8Array, "bytes"],
      ["keyFingerprint", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputEncryptedChat, "InputEncryptedChat"],
      [this.gB, Uint8Array, "bytes"],
      [this.keyFingerprint, "bigint", "long"],
    ];
  }

  constructor(params: { peer: types.TypeInputEncryptedChat; gB: Uint8Array; keyFingerprint: bigint }) {
    super();
    this.peer = params.peer;
    this.gB = params.gB;
    this.keyFingerprint = params.keyFingerprint;
  }
}

export class MessagesDiscardEncryption extends Function<boolean> {
  deleteHistory?: true;
  chatId: number;

  protected get [id]() {
    return 0xF393AEA0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["deleteHistory", "true", "flags.0?true"],
      ["chatId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.deleteHistory ?? null, "true", "flags.0?true"],
      [this.chatId, "number", "int"],
    ];
  }

  constructor(params: { deleteHistory?: true; chatId: number }) {
    super();
    this.deleteHistory = params.deleteHistory;
    this.chatId = params.chatId;
  }
}

export class MessagesSetEncryptedTyping extends Function<boolean> {
  peer: types.TypeInputEncryptedChat;
  typing: boolean;

  protected get [id]() {
    return 0x791451ED;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputEncryptedChat, "InputEncryptedChat"],
      ["typing", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputEncryptedChat, "InputEncryptedChat"],
      [this.typing, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: types.TypeInputEncryptedChat; typing: boolean }) {
    super();
    this.peer = params.peer;
    this.typing = params.typing;
  }
}

export class MessagesReadEncryptedHistory extends Function<boolean> {
  peer: types.TypeInputEncryptedChat;
  maxDate: number;

  protected get [id]() {
    return 0x7F4B690A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputEncryptedChat, "InputEncryptedChat"],
      ["maxDate", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputEncryptedChat, "InputEncryptedChat"],
      [this.maxDate, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputEncryptedChat; maxDate: number }) {
    super();
    this.peer = params.peer;
    this.maxDate = params.maxDate;
  }
}

export class MessagesSendEncrypted extends Function<types.TypeMessagesSentEncryptedMessage> {
  silent?: true;
  peer: types.TypeInputEncryptedChat;
  randomId: bigint;
  data: Uint8Array;

  protected get [id]() {
    return 0x44FA7A15;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.0?true"],
      ["peer", types.TypeInputEncryptedChat, "InputEncryptedChat"],
      ["randomId", "bigint", "long"],
      ["data", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.0?true"],
      [this.peer, types.TypeInputEncryptedChat, "InputEncryptedChat"],
      [this.randomId, "bigint", "long"],
      [this.data, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { silent?: true; peer: types.TypeInputEncryptedChat; randomId: bigint; data: Uint8Array }) {
    super();
    this.silent = params.silent;
    this.peer = params.peer;
    this.randomId = params.randomId;
    this.data = params.data;
  }
}

export class MessagesSendEncryptedFile extends Function<types.TypeMessagesSentEncryptedMessage> {
  silent?: true;
  peer: types.TypeInputEncryptedChat;
  randomId: bigint;
  data: Uint8Array;
  file: types.TypeInputEncryptedFile;

  protected get [id]() {
    return 0x5559481D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.0?true"],
      ["peer", types.TypeInputEncryptedChat, "InputEncryptedChat"],
      ["randomId", "bigint", "long"],
      ["data", Uint8Array, "bytes"],
      ["file", types.TypeInputEncryptedFile, "InputEncryptedFile"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.0?true"],
      [this.peer, types.TypeInputEncryptedChat, "InputEncryptedChat"],
      [this.randomId, "bigint", "long"],
      [this.data, Uint8Array, "bytes"],
      [this.file, types.TypeInputEncryptedFile, "InputEncryptedFile"],
    ];
  }

  constructor(params: { silent?: true; peer: types.TypeInputEncryptedChat; randomId: bigint; data: Uint8Array; file: types.TypeInputEncryptedFile }) {
    super();
    this.silent = params.silent;
    this.peer = params.peer;
    this.randomId = params.randomId;
    this.data = params.data;
    this.file = params.file;
  }
}

export class MessagesSendEncryptedService extends Function<types.TypeMessagesSentEncryptedMessage> {
  peer: types.TypeInputEncryptedChat;
  randomId: bigint;
  data: Uint8Array;

  protected get [id]() {
    return 0x32D439A4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputEncryptedChat, "InputEncryptedChat"],
      ["randomId", "bigint", "long"],
      ["data", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputEncryptedChat, "InputEncryptedChat"],
      [this.randomId, "bigint", "long"],
      [this.data, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { peer: types.TypeInputEncryptedChat; randomId: bigint; data: Uint8Array }) {
    super();
    this.peer = params.peer;
    this.randomId = params.randomId;
    this.data = params.data;
  }
}

export class MessagesReceivedQueue extends Function<bigint[]> {
  maxQts: number;

  protected get [id]() {
    return 0x55A5BB66;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["maxQts", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.maxQts, "number", "int"],
    ];
  }

  constructor(params: { maxQts: number }) {
    super();
    this.maxQts = params.maxQts;
  }
}

export class MessagesReportEncryptedSpam extends Function<boolean> {
  peer: types.TypeInputEncryptedChat;

  protected get [id]() {
    return 0x4B0C8C0F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputEncryptedChat, "InputEncryptedChat"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputEncryptedChat, "InputEncryptedChat"],
    ];
  }

  constructor(params: { peer: types.TypeInputEncryptedChat }) {
    super();
    this.peer = params.peer;
  }
}

export class MessagesReadMessageContents extends Function<types.MessagesAffectedMessages> {
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

export class MessagesGetStickers extends Function<types.TypeMessagesStickers> {
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

export class MessagesGetAllStickers extends Function<types.TypeMessagesAllStickers> {
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

export class MessagesGetWebPagePreview extends Function<types.TypeMessageMedia> {
  message: string;
  entities?: Array<types.TypeMessageEntity>;

  protected get [id]() {
    return 0x8B68B0CC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["message", "string", "string"],
      ["entities", [types.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.message, "string", "string"],
      [this.entities ?? null, [types.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
    ];
  }

  constructor(params: { message: string; entities?: Array<types.TypeMessageEntity> }) {
    super();
    this.message = params.message;
    this.entities = params.entities;
  }
}

export class MessagesExportChatInvite extends Function<types.TypeExportedChatInvite> {
  legacyRevokePermanent?: true;
  requestNeeded?: true;
  peer: types.TypeInputPeer;
  expireDate?: number;
  usageLimit?: number;
  title?: string;

  protected get [id]() {
    return 0xA02CE5D5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["legacyRevokePermanent", "true", "flags.2?true"],
      ["requestNeeded", "true", "flags.3?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["expireDate", "number", "flags.0?int"],
      ["usageLimit", "number", "flags.1?int"],
      ["title", "string", "flags.4?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.legacyRevokePermanent ?? null, "true", "flags.2?true"],
      [this.requestNeeded ?? null, "true", "flags.3?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.expireDate ?? null, "number", "flags.0?int"],
      [this.usageLimit ?? null, "number", "flags.1?int"],
      [this.title ?? null, "string", "flags.4?string"],
    ];
  }

  constructor(params: { legacyRevokePermanent?: true; requestNeeded?: true; peer: types.TypeInputPeer; expireDate?: number; usageLimit?: number; title?: string }) {
    super();
    this.legacyRevokePermanent = params.legacyRevokePermanent;
    this.requestNeeded = params.requestNeeded;
    this.peer = params.peer;
    this.expireDate = params.expireDate;
    this.usageLimit = params.usageLimit;
    this.title = params.title;
  }
}

export class MessagesCheckChatInvite extends Function<types.TypeChatInvite> {
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

export class MessagesImportChatInvite extends Function<types.TypeUpdates> {
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

export class MessagesGetStickerSet extends Function<types.TypeMessagesStickerSet> {
  stickerset: types.TypeInputStickerSet;
  hash: number;

  protected get [id]() {
    return 0xC8A0EC74;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", types.TypeInputStickerSet, "InputStickerSet"],
      ["hash", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, types.TypeInputStickerSet, "InputStickerSet"],
      [this.hash, "number", "int"],
    ];
  }

  constructor(params: { stickerset: types.TypeInputStickerSet; hash: number }) {
    super();
    this.stickerset = params.stickerset;
    this.hash = params.hash;
  }
}

export class MessagesInstallStickerSet extends Function<types.TypeMessagesStickerSetInstallResult> {
  stickerset: types.TypeInputStickerSet;
  archived: boolean;

  protected get [id]() {
    return 0xC78FE460;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", types.TypeInputStickerSet, "InputStickerSet"],
      ["archived", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, types.TypeInputStickerSet, "InputStickerSet"],
      [this.archived, "boolean", "Bool"],
    ];
  }

  constructor(params: { stickerset: types.TypeInputStickerSet; archived: boolean }) {
    super();
    this.stickerset = params.stickerset;
    this.archived = params.archived;
  }
}

export class MessagesUninstallStickerSet extends Function<boolean> {
  stickerset: types.TypeInputStickerSet;

  protected get [id]() {
    return 0xF96E55DE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", types.TypeInputStickerSet, "InputStickerSet"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, types.TypeInputStickerSet, "InputStickerSet"],
    ];
  }

  constructor(params: { stickerset: types.TypeInputStickerSet }) {
    super();
    this.stickerset = params.stickerset;
  }
}

export class MessagesStartBot extends Function<types.TypeUpdates> {
  bot: types.TypeInputUser;
  peer: types.TypeInputPeer;
  randomId: bigint;
  startParam: string;

  protected get [id]() {
    return 0xE6DF7378;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", types.TypeInputUser, "InputUser"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["randomId", "bigint", "long"],
      ["startParam", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, types.TypeInputUser, "InputUser"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.randomId, "bigint", "long"],
      [this.startParam, "string", "string"],
    ];
  }

  constructor(params: { bot: types.TypeInputUser; peer: types.TypeInputPeer; randomId: bigint; startParam: string }) {
    super();
    this.bot = params.bot;
    this.peer = params.peer;
    this.randomId = params.randomId;
    this.startParam = params.startParam;
  }
}

export class MessagesGetMessagesViews extends Function<types.MessagesMessageViews> {
  peer: types.TypeInputPeer;
  id: Array<number>;
  increment: boolean;

  protected get [id]() {
    return 0x5784D3E1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
      ["increment", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
      [this.increment, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; id: Array<number>; increment: boolean }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.increment = params.increment;
  }
}

export class MessagesEditChatAdmin extends Function<boolean> {
  chatId: bigint;
  userId: types.TypeInputUser;
  isAdmin: boolean;

  protected get [id]() {
    return 0xA85BD1C2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
      ["userId", types.TypeInputUser, "InputUser"],
      ["isAdmin", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.isAdmin, "boolean", "Bool"],
    ];
  }

  constructor(params: { chatId: bigint; userId: types.TypeInputUser; isAdmin: boolean }) {
    super();
    this.chatId = params.chatId;
    this.userId = params.userId;
    this.isAdmin = params.isAdmin;
  }
}

export class MessagesMigrateChat extends Function<types.TypeUpdates> {
  chatId: bigint;

  protected get [id]() {
    return 0xA2875319;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
    ];
  }

  constructor(params: { chatId: bigint }) {
    super();
    this.chatId = params.chatId;
  }
}

export class MessagesSearchGlobal extends Function<types.TypeMessagesMessages> {
  folderId?: number;
  q: string;
  filter: types.TypeMessagesFilter;
  minDate: number;
  maxDate: number;
  offsetRate: number;
  offsetPeer: types.TypeInputPeer;
  offsetId: number;
  limit: number;

  protected get [id]() {
    return 0x4BC6589A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["folderId", "number", "flags.0?int"],
      ["q", "string", "string"],
      ["filter", types.TypeMessagesFilter, "MessagesFilter"],
      ["minDate", "number", "int"],
      ["maxDate", "number", "int"],
      ["offsetRate", "number", "int"],
      ["offsetPeer", types.TypeInputPeer, "InputPeer"],
      ["offsetId", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.folderId ?? null, "number", "flags.0?int"],
      [this.q, "string", "string"],
      [this.filter, types.TypeMessagesFilter, "MessagesFilter"],
      [this.minDate, "number", "int"],
      [this.maxDate, "number", "int"],
      [this.offsetRate, "number", "int"],
      [this.offsetPeer, types.TypeInputPeer, "InputPeer"],
      [this.offsetId, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { folderId?: number; q: string; filter: types.TypeMessagesFilter; minDate: number; maxDate: number; offsetRate: number; offsetPeer: types.TypeInputPeer; offsetId: number; limit: number }) {
    super();
    this.folderId = params.folderId;
    this.q = params.q;
    this.filter = params.filter;
    this.minDate = params.minDate;
    this.maxDate = params.maxDate;
    this.offsetRate = params.offsetRate;
    this.offsetPeer = params.offsetPeer;
    this.offsetId = params.offsetId;
    this.limit = params.limit;
  }
}

export class MessagesReorderStickerSets extends Function<boolean> {
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

export class MessagesGetDocumentByHash extends Function<types.TypeDocument> {
  sha256: Uint8Array;
  size: bigint;
  mimeType: string;

  protected get [id]() {
    return 0xB1F2061F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["sha256", Uint8Array, "bytes"],
      ["size", "bigint", "long"],
      ["mimeType", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.sha256, Uint8Array, "bytes"],
      [this.size, "bigint", "long"],
      [this.mimeType, "string", "string"],
    ];
  }

  constructor(params: { sha256: Uint8Array; size: bigint; mimeType: string }) {
    super();
    this.sha256 = params.sha256;
    this.size = params.size;
    this.mimeType = params.mimeType;
  }
}

export class MessagesGetSavedGifs extends Function<types.TypeMessagesSavedGifs> {
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

export class MessagesSaveGif extends Function<boolean> {
  id: types.TypeInputDocument;
  unsave: boolean;

  protected get [id]() {
    return 0x327A30CB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types.TypeInputDocument, "InputDocument"],
      ["unsave", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types.TypeInputDocument, "InputDocument"],
      [this.unsave, "boolean", "Bool"],
    ];
  }

  constructor(params: { id: types.TypeInputDocument; unsave: boolean }) {
    super();
    this.id = params.id;
    this.unsave = params.unsave;
  }
}

export class MessagesGetInlineBotResults extends Function<types.MessagesBotResults> {
  bot: types.TypeInputUser;
  peer: types.TypeInputPeer;
  geoPoint?: types.TypeInputGeoPoint;
  query: string;
  offset: string;

  protected get [id]() {
    return 0x514E999D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["bot", types.TypeInputUser, "InputUser"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["geoPoint", types.TypeInputGeoPoint, "flags.0?InputGeoPoint"],
      ["query", "string", "string"],
      ["offset", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.bot, types.TypeInputUser, "InputUser"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.geoPoint ?? null, types.TypeInputGeoPoint, "flags.0?InputGeoPoint"],
      [this.query, "string", "string"],
      [this.offset, "string", "string"],
    ];
  }

  constructor(params: { bot: types.TypeInputUser; peer: types.TypeInputPeer; geoPoint?: types.TypeInputGeoPoint; query: string; offset: string }) {
    super();
    this.bot = params.bot;
    this.peer = params.peer;
    this.geoPoint = params.geoPoint;
    this.query = params.query;
    this.offset = params.offset;
  }
}

export class MessagesSetInlineBotResults extends Function<boolean> {
  gallery?: true;
  private?: true;
  queryId: bigint;
  results: Array<types.TypeInputBotInlineResult>;
  cacheTime: number;
  nextOffset?: string;
  switchPm?: types.TypeInlineBotSwitchPM;
  switchWebview?: types.TypeInlineBotWebView;

  protected get [id]() {
    return 0xBB12A419;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["gallery", "true", "flags.0?true"],
      ["private", "true", "flags.1?true"],
      ["queryId", "bigint", "long"],
      ["results", [types.TypeInputBotInlineResult], "Vector<InputBotInlineResult>"],
      ["cacheTime", "number", "int"],
      ["nextOffset", "string", "flags.2?string"],
      ["switchPm", types.TypeInlineBotSwitchPM, "flags.3?InlineBotSwitchPM"],
      ["switchWebview", types.TypeInlineBotWebView, "flags.4?InlineBotWebView"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.gallery ?? null, "true", "flags.0?true"],
      [this.private ?? null, "true", "flags.1?true"],
      [this.queryId, "bigint", "long"],
      [this.results, [types.TypeInputBotInlineResult], "Vector<InputBotInlineResult>"],
      [this.cacheTime, "number", "int"],
      [this.nextOffset ?? null, "string", "flags.2?string"],
      [this.switchPm ?? null, types.TypeInlineBotSwitchPM, "flags.3?InlineBotSwitchPM"],
      [this.switchWebview ?? null, types.TypeInlineBotWebView, "flags.4?InlineBotWebView"],
    ];
  }

  constructor(params: { gallery?: true; private?: true; queryId: bigint; results: Array<types.TypeInputBotInlineResult>; cacheTime: number; nextOffset?: string; switchPm?: types.TypeInlineBotSwitchPM; switchWebview?: types.TypeInlineBotWebView }) {
    super();
    this.gallery = params.gallery;
    this.private = params.private;
    this.queryId = params.queryId;
    this.results = params.results;
    this.cacheTime = params.cacheTime;
    this.nextOffset = params.nextOffset;
    this.switchPm = params.switchPm;
    this.switchWebview = params.switchWebview;
  }
}

export class MessagesSendInlineBotResult extends Function<types.TypeUpdates> {
  silent?: true;
  background?: true;
  clearDraft?: true;
  hideVia?: true;
  peer: types.TypeInputPeer;
  replyTo?: types.TypeInputReplyTo;
  randomId: bigint;
  queryId: bigint;
  id: string;
  scheduleDate?: number;
  sendAs?: types.TypeInputPeer;

  protected get [id]() {
    return 0xF7BC68BA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.5?true"],
      ["background", "true", "flags.6?true"],
      ["clearDraft", "true", "flags.7?true"],
      ["hideVia", "true", "flags.11?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["replyTo", types.TypeInputReplyTo, "flags.0?InputReplyTo"],
      ["randomId", "bigint", "long"],
      ["queryId", "bigint", "long"],
      ["id", "string", "string"],
      ["scheduleDate", "number", "flags.10?int"],
      ["sendAs", types.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.background ?? null, "true", "flags.6?true"],
      [this.clearDraft ?? null, "true", "flags.7?true"],
      [this.hideVia ?? null, "true", "flags.11?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.replyTo ?? null, types.TypeInputReplyTo, "flags.0?InputReplyTo"],
      [this.randomId, "bigint", "long"],
      [this.queryId, "bigint", "long"],
      [this.id, "string", "string"],
      [this.scheduleDate ?? null, "number", "flags.10?int"],
      [this.sendAs ?? null, types.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { silent?: true; background?: true; clearDraft?: true; hideVia?: true; peer: types.TypeInputPeer; replyTo?: types.TypeInputReplyTo; randomId: bigint; queryId: bigint; id: string; scheduleDate?: number; sendAs?: types.TypeInputPeer }) {
    super();
    this.silent = params.silent;
    this.background = params.background;
    this.clearDraft = params.clearDraft;
    this.hideVia = params.hideVia;
    this.peer = params.peer;
    this.replyTo = params.replyTo;
    this.randomId = params.randomId;
    this.queryId = params.queryId;
    this.id = params.id;
    this.scheduleDate = params.scheduleDate;
    this.sendAs = params.sendAs;
  }
}

export class MessagesGetMessageEditData extends Function<types.MessagesMessageEditData> {
  peer: types.TypeInputPeer;
  id: number;

  protected get [id]() {
    return 0xFDA68D36;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.id, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; id: number }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class MessagesEditMessage extends Function<types.TypeUpdates> {
  noWebpage?: true;
  peer: types.TypeInputPeer;
  id: number;
  message?: string;
  media?: types.TypeInputMedia;
  replyMarkup?: types.TypeReplyMarkup;
  entities?: Array<types.TypeMessageEntity>;
  scheduleDate?: number;

  protected get [id]() {
    return 0x48F71778;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["noWebpage", "true", "flags.1?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["message", "string", "flags.11?string"],
      ["media", types.TypeInputMedia, "flags.14?InputMedia"],
      ["replyMarkup", types.TypeReplyMarkup, "flags.2?ReplyMarkup"],
      ["entities", [types.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
      ["scheduleDate", "number", "flags.15?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.noWebpage ?? null, "true", "flags.1?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.message ?? null, "string", "flags.11?string"],
      [this.media ?? null, types.TypeInputMedia, "flags.14?InputMedia"],
      [this.replyMarkup ?? null, types.TypeReplyMarkup, "flags.2?ReplyMarkup"],
      [this.entities ?? null, [types.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
      [this.scheduleDate ?? null, "number", "flags.15?int"],
    ];
  }

  constructor(params: { noWebpage?: true; peer: types.TypeInputPeer; id: number; message?: string; media?: types.TypeInputMedia; replyMarkup?: types.TypeReplyMarkup; entities?: Array<types.TypeMessageEntity>; scheduleDate?: number }) {
    super();
    this.noWebpage = params.noWebpage;
    this.peer = params.peer;
    this.id = params.id;
    this.message = params.message;
    this.media = params.media;
    this.replyMarkup = params.replyMarkup;
    this.entities = params.entities;
    this.scheduleDate = params.scheduleDate;
  }
}

export class MessagesEditInlineBotMessage extends Function<boolean> {
  noWebpage?: true;
  id: types.TypeInputBotInlineMessageID;
  message?: string;
  media?: types.TypeInputMedia;
  replyMarkup?: types.TypeReplyMarkup;
  entities?: Array<types.TypeMessageEntity>;

  protected get [id]() {
    return 0x83557DBA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["noWebpage", "true", "flags.1?true"],
      ["id", types.TypeInputBotInlineMessageID, "InputBotInlineMessageID"],
      ["message", "string", "flags.11?string"],
      ["media", types.TypeInputMedia, "flags.14?InputMedia"],
      ["replyMarkup", types.TypeReplyMarkup, "flags.2?ReplyMarkup"],
      ["entities", [types.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.noWebpage ?? null, "true", "flags.1?true"],
      [this.id, types.TypeInputBotInlineMessageID, "InputBotInlineMessageID"],
      [this.message ?? null, "string", "flags.11?string"],
      [this.media ?? null, types.TypeInputMedia, "flags.14?InputMedia"],
      [this.replyMarkup ?? null, types.TypeReplyMarkup, "flags.2?ReplyMarkup"],
      [this.entities ?? null, [types.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
    ];
  }

  constructor(params: { noWebpage?: true; id: types.TypeInputBotInlineMessageID; message?: string; media?: types.TypeInputMedia; replyMarkup?: types.TypeReplyMarkup; entities?: Array<types.TypeMessageEntity> }) {
    super();
    this.noWebpage = params.noWebpage;
    this.id = params.id;
    this.message = params.message;
    this.media = params.media;
    this.replyMarkup = params.replyMarkup;
    this.entities = params.entities;
  }
}

export class MessagesGetBotCallbackAnswer extends Function<types.MessagesBotCallbackAnswer> {
  game?: true;
  peer: types.TypeInputPeer;
  msgId: number;
  data?: Uint8Array;
  password?: types.TypeInputCheckPasswordSRP;

  protected get [id]() {
    return 0x9342CA07;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["game", "true", "flags.1?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["data", Uint8Array, "flags.0?bytes"],
      ["password", types.TypeInputCheckPasswordSRP, "flags.2?InputCheckPasswordSRP"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.game ?? null, "true", "flags.1?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.data ?? null, Uint8Array, "flags.0?bytes"],
      [this.password ?? null, types.TypeInputCheckPasswordSRP, "flags.2?InputCheckPasswordSRP"],
    ];
  }

  constructor(params: { game?: true; peer: types.TypeInputPeer; msgId: number; data?: Uint8Array; password?: types.TypeInputCheckPasswordSRP }) {
    super();
    this.game = params.game;
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.data = params.data;
    this.password = params.password;
  }
}

export class MessagesSetBotCallbackAnswer extends Function<boolean> {
  alert?: true;
  queryId: bigint;
  message?: string;
  url?: string;
  cacheTime: number;

  protected get [id]() {
    return 0xD58F130A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["alert", "true", "flags.1?true"],
      ["queryId", "bigint", "long"],
      ["message", "string", "flags.0?string"],
      ["url", "string", "flags.2?string"],
      ["cacheTime", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.alert ?? null, "true", "flags.1?true"],
      [this.queryId, "bigint", "long"],
      [this.message ?? null, "string", "flags.0?string"],
      [this.url ?? null, "string", "flags.2?string"],
      [this.cacheTime, "number", "int"],
    ];
  }

  constructor(params: { alert?: true; queryId: bigint; message?: string; url?: string; cacheTime: number }) {
    super();
    this.alert = params.alert;
    this.queryId = params.queryId;
    this.message = params.message;
    this.url = params.url;
    this.cacheTime = params.cacheTime;
  }
}

export class MessagesGetPeerDialogs extends Function<types.MessagesPeerDialogs> {
  peers: Array<types.TypeInputDialogPeer>;

  protected get [id]() {
    return 0xE470BCFD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peers", [types.TypeInputDialogPeer], "Vector<InputDialogPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peers, [types.TypeInputDialogPeer], "Vector<InputDialogPeer>"],
    ];
  }

  constructor(params: { peers: Array<types.TypeInputDialogPeer> }) {
    super();
    this.peers = params.peers;
  }
}

export class MessagesSaveDraft extends Function<boolean> {
  noWebpage?: true;
  replyToMsgId?: number;
  topMsgId?: number;
  peer: types.TypeInputPeer;
  message: string;
  entities?: Array<types.TypeMessageEntity>;

  protected get [id]() {
    return 0xB4331E3F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["noWebpage", "true", "flags.1?true"],
      ["replyToMsgId", "number", "flags.0?int"],
      ["topMsgId", "number", "flags.2?int"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["message", "string", "string"],
      ["entities", [types.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.noWebpage ?? null, "true", "flags.1?true"],
      [this.replyToMsgId ?? null, "number", "flags.0?int"],
      [this.topMsgId ?? null, "number", "flags.2?int"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.message, "string", "string"],
      [this.entities ?? null, [types.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
    ];
  }

  constructor(params: { noWebpage?: true; replyToMsgId?: number; topMsgId?: number; peer: types.TypeInputPeer; message: string; entities?: Array<types.TypeMessageEntity> }) {
    super();
    this.noWebpage = params.noWebpage;
    this.replyToMsgId = params.replyToMsgId;
    this.topMsgId = params.topMsgId;
    this.peer = params.peer;
    this.message = params.message;
    this.entities = params.entities;
  }
}

export class MessagesGetAllDrafts extends Function<types.TypeUpdates> {
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

export class MessagesGetFeaturedStickers extends Function<types.TypeMessagesFeaturedStickers> {
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

export class MessagesReadFeaturedStickers extends Function<boolean> {
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

export class MessagesGetRecentStickers extends Function<types.TypeMessagesRecentStickers> {
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

export class MessagesSaveRecentSticker extends Function<boolean> {
  attached?: true;
  id: types.TypeInputDocument;
  unsave: boolean;

  protected get [id]() {
    return 0x392718F8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["attached", "true", "flags.0?true"],
      ["id", types.TypeInputDocument, "InputDocument"],
      ["unsave", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.attached ?? null, "true", "flags.0?true"],
      [this.id, types.TypeInputDocument, "InputDocument"],
      [this.unsave, "boolean", "Bool"],
    ];
  }

  constructor(params: { attached?: true; id: types.TypeInputDocument; unsave: boolean }) {
    super();
    this.attached = params.attached;
    this.id = params.id;
    this.unsave = params.unsave;
  }
}

export class MessagesClearRecentStickers extends Function<boolean> {
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

  constructor(params: { attached?: true }) {
    super();
    this.attached = params.attached;
  }
}

export class MessagesGetArchivedStickers extends Function<types.MessagesArchivedStickers> {
  masks?: true;
  emojis?: true;
  offsetId: bigint;
  limit: number;

  protected get [id]() {
    return 0x57F17692;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["masks", "true", "flags.0?true"],
      ["emojis", "true", "flags.1?true"],
      ["offsetId", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.masks ?? null, "true", "flags.0?true"],
      [this.emojis ?? null, "true", "flags.1?true"],
      [this.offsetId, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { masks?: true; emojis?: true; offsetId: bigint; limit: number }) {
    super();
    this.masks = params.masks;
    this.emojis = params.emojis;
    this.offsetId = params.offsetId;
    this.limit = params.limit;
  }
}

export class MessagesGetMaskStickers extends Function<types.TypeMessagesAllStickers> {
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

export class MessagesGetAttachedStickers extends Function<types.TypeStickerSetCovered[]> {
  media: types.TypeInputStickeredMedia;

  protected get [id]() {
    return 0xCC5B67CC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["media", types.TypeInputStickeredMedia, "InputStickeredMedia"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.media, types.TypeInputStickeredMedia, "InputStickeredMedia"],
    ];
  }

  constructor(params: { media: types.TypeInputStickeredMedia }) {
    super();
    this.media = params.media;
  }
}

export class MessagesSetGameScore extends Function<types.TypeUpdates> {
  editMessage?: true;
  force?: true;
  peer: types.TypeInputPeer;
  id: number;
  userId: types.TypeInputUser;
  score: number;

  protected get [id]() {
    return 0x8EF8ECC0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["editMessage", "true", "flags.0?true"],
      ["force", "true", "flags.1?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["userId", types.TypeInputUser, "InputUser"],
      ["score", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.editMessage ?? null, "true", "flags.0?true"],
      [this.force ?? null, "true", "flags.1?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.score, "number", "int"],
    ];
  }

  constructor(params: { editMessage?: true; force?: true; peer: types.TypeInputPeer; id: number; userId: types.TypeInputUser; score: number }) {
    super();
    this.editMessage = params.editMessage;
    this.force = params.force;
    this.peer = params.peer;
    this.id = params.id;
    this.userId = params.userId;
    this.score = params.score;
  }
}

export class MessagesSetInlineGameScore extends Function<boolean> {
  editMessage?: true;
  force?: true;
  id: types.TypeInputBotInlineMessageID;
  userId: types.TypeInputUser;
  score: number;

  protected get [id]() {
    return 0x15AD9F64;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["editMessage", "true", "flags.0?true"],
      ["force", "true", "flags.1?true"],
      ["id", types.TypeInputBotInlineMessageID, "InputBotInlineMessageID"],
      ["userId", types.TypeInputUser, "InputUser"],
      ["score", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.editMessage ?? null, "true", "flags.0?true"],
      [this.force ?? null, "true", "flags.1?true"],
      [this.id, types.TypeInputBotInlineMessageID, "InputBotInlineMessageID"],
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.score, "number", "int"],
    ];
  }

  constructor(params: { editMessage?: true; force?: true; id: types.TypeInputBotInlineMessageID; userId: types.TypeInputUser; score: number }) {
    super();
    this.editMessage = params.editMessage;
    this.force = params.force;
    this.id = params.id;
    this.userId = params.userId;
    this.score = params.score;
  }
}

export class MessagesGetGameHighScores extends Function<types.MessagesHighScores> {
  peer: types.TypeInputPeer;
  id: number;
  userId: types.TypeInputUser;

  protected get [id]() {
    return 0xE822649D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["userId", types.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.userId, types.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; id: number; userId: types.TypeInputUser }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.userId = params.userId;
  }
}

export class MessagesGetInlineGameHighScores extends Function<types.MessagesHighScores> {
  id: types.TypeInputBotInlineMessageID;
  userId: types.TypeInputUser;

  protected get [id]() {
    return 0x0F635E1B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types.TypeInputBotInlineMessageID, "InputBotInlineMessageID"],
      ["userId", types.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types.TypeInputBotInlineMessageID, "InputBotInlineMessageID"],
      [this.userId, types.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { id: types.TypeInputBotInlineMessageID; userId: types.TypeInputUser }) {
    super();
    this.id = params.id;
    this.userId = params.userId;
  }
}

export class MessagesGetCommonChats extends Function<types.TypeMessagesChats> {
  userId: types.TypeInputUser;
  maxId: bigint;
  limit: number;

  protected get [id]() {
    return 0xE40CA104;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", types.TypeInputUser, "InputUser"],
      ["maxId", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.maxId, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { userId: types.TypeInputUser; maxId: bigint; limit: number }) {
    super();
    this.userId = params.userId;
    this.maxId = params.maxId;
    this.limit = params.limit;
  }
}

export class MessagesGetWebPage extends Function<types.TypeWebPage> {
  url: string;
  hash: number;

  protected get [id]() {
    return 0x32CA8F91;
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

export class MessagesToggleDialogPin extends Function<boolean> {
  pinned?: true;
  peer: types.TypeInputDialogPeer;

  protected get [id]() {
    return 0xA731E257;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pinned", "true", "flags.0?true"],
      ["peer", types.TypeInputDialogPeer, "InputDialogPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pinned ?? null, "true", "flags.0?true"],
      [this.peer, types.TypeInputDialogPeer, "InputDialogPeer"],
    ];
  }

  constructor(params: { pinned?: true; peer: types.TypeInputDialogPeer }) {
    super();
    this.pinned = params.pinned;
    this.peer = params.peer;
  }
}

export class MessagesReorderPinnedDialogs extends Function<boolean> {
  force?: true;
  folderId: number;
  order: Array<types.TypeInputDialogPeer>;

  protected get [id]() {
    return 0x3B1ADF37;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["force", "true", "flags.0?true"],
      ["folderId", "number", "int"],
      ["order", [types.TypeInputDialogPeer], "Vector<InputDialogPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.force ?? null, "true", "flags.0?true"],
      [this.folderId, "number", "int"],
      [this.order, [types.TypeInputDialogPeer], "Vector<InputDialogPeer>"],
    ];
  }

  constructor(params: { force?: true; folderId: number; order: Array<types.TypeInputDialogPeer> }) {
    super();
    this.force = params.force;
    this.folderId = params.folderId;
    this.order = params.order;
  }
}

export class MessagesGetPinnedDialogs extends Function<types.MessagesPeerDialogs> {
  folderId: number;

  protected get [id]() {
    return 0xD6B94DF2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["folderId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.folderId, "number", "int"],
    ];
  }

  constructor(params: { folderId: number }) {
    super();
    this.folderId = params.folderId;
  }
}

export class MessagesSetBotShippingResults extends Function<boolean> {
  queryId: bigint;
  error?: string;
  shippingOptions?: Array<types.TypeShippingOption>;

  protected get [id]() {
    return 0xE5F672FA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["queryId", "bigint", "long"],
      ["error", "string", "flags.0?string"],
      ["shippingOptions", [types.TypeShippingOption], "flags.1?Vector<ShippingOption>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.queryId, "bigint", "long"],
      [this.error ?? null, "string", "flags.0?string"],
      [this.shippingOptions ?? null, [types.TypeShippingOption], "flags.1?Vector<ShippingOption>"],
    ];
  }

  constructor(params: { queryId: bigint; error?: string; shippingOptions?: Array<types.TypeShippingOption> }) {
    super();
    this.queryId = params.queryId;
    this.error = params.error;
    this.shippingOptions = params.shippingOptions;
  }
}

export class MessagesSetBotPrecheckoutResults extends Function<boolean> {
  success?: true;
  queryId: bigint;
  error?: string;

  protected get [id]() {
    return 0x09C2DD95;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["success", "true", "flags.1?true"],
      ["queryId", "bigint", "long"],
      ["error", "string", "flags.0?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.success ?? null, "true", "flags.1?true"],
      [this.queryId, "bigint", "long"],
      [this.error ?? null, "string", "flags.0?string"],
    ];
  }

  constructor(params: { success?: true; queryId: bigint; error?: string }) {
    super();
    this.success = params.success;
    this.queryId = params.queryId;
    this.error = params.error;
  }
}

export class MessagesUploadMedia extends Function<types.TypeMessageMedia> {
  peer: types.TypeInputPeer;
  media: types.TypeInputMedia;

  protected get [id]() {
    return 0x519BC2B1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["media", types.TypeInputMedia, "InputMedia"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.media, types.TypeInputMedia, "InputMedia"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; media: types.TypeInputMedia }) {
    super();
    this.peer = params.peer;
    this.media = params.media;
  }
}

export class MessagesSendScreenshotNotification extends Function<types.TypeUpdates> {
  peer: types.TypeInputPeer;
  replyTo: types.TypeInputReplyTo;
  randomId: bigint;

  protected get [id]() {
    return 0xA1405817;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["replyTo", types.TypeInputReplyTo, "InputReplyTo"],
      ["randomId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.replyTo, types.TypeInputReplyTo, "InputReplyTo"],
      [this.randomId, "bigint", "long"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; replyTo: types.TypeInputReplyTo; randomId: bigint }) {
    super();
    this.peer = params.peer;
    this.replyTo = params.replyTo;
    this.randomId = params.randomId;
  }
}

export class MessagesGetFavedStickers extends Function<types.TypeMessagesFavedStickers> {
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

export class MessagesFaveSticker extends Function<boolean> {
  id: types.TypeInputDocument;
  unfave: boolean;

  protected get [id]() {
    return 0xB9FFC55B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types.TypeInputDocument, "InputDocument"],
      ["unfave", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types.TypeInputDocument, "InputDocument"],
      [this.unfave, "boolean", "Bool"],
    ];
  }

  constructor(params: { id: types.TypeInputDocument; unfave: boolean }) {
    super();
    this.id = params.id;
    this.unfave = params.unfave;
  }
}

export class MessagesGetUnreadMentions extends Function<types.TypeMessagesMessages> {
  peer: types.TypeInputPeer;
  topMsgId?: number;
  offsetId: number;
  addOffset: number;
  limit: number;
  maxId: number;
  minId: number;

  protected get [id]() {
    return 0xF107E790;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["topMsgId", "number", "flags.0?int"],
      ["offsetId", "number", "int"],
      ["addOffset", "number", "int"],
      ["limit", "number", "int"],
      ["maxId", "number", "int"],
      ["minId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
      [this.offsetId, "number", "int"],
      [this.addOffset, "number", "int"],
      [this.limit, "number", "int"],
      [this.maxId, "number", "int"],
      [this.minId, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; topMsgId?: number; offsetId: number; addOffset: number; limit: number; maxId: number; minId: number }) {
    super();
    this.peer = params.peer;
    this.topMsgId = params.topMsgId;
    this.offsetId = params.offsetId;
    this.addOffset = params.addOffset;
    this.limit = params.limit;
    this.maxId = params.maxId;
    this.minId = params.minId;
  }
}

export class MessagesReadMentions extends Function<types.MessagesAffectedHistory> {
  peer: types.TypeInputPeer;
  topMsgId?: number;

  protected get [id]() {
    return 0x36E5BF4D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["topMsgId", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; topMsgId?: number }) {
    super();
    this.peer = params.peer;
    this.topMsgId = params.topMsgId;
  }
}

export class MessagesGetRecentLocations extends Function<types.TypeMessagesMessages> {
  peer: types.TypeInputPeer;
  limit: number;
  hash: bigint;

  protected get [id]() {
    return 0x702A40E0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["limit", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.limit, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; limit: number; hash: bigint }) {
    super();
    this.peer = params.peer;
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

export class MessagesSendMultiMedia extends Function<types.TypeUpdates> {
  silent?: true;
  background?: true;
  clearDraft?: true;
  noforwards?: true;
  updateStickersetsOrder?: true;
  peer: types.TypeInputPeer;
  replyTo?: types.TypeInputReplyTo;
  multiMedia: Array<types.TypeInputSingleMedia>;
  scheduleDate?: number;
  sendAs?: types.TypeInputPeer;

  protected get [id]() {
    return 0x456E8987;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.5?true"],
      ["background", "true", "flags.6?true"],
      ["clearDraft", "true", "flags.7?true"],
      ["noforwards", "true", "flags.14?true"],
      ["updateStickersetsOrder", "true", "flags.15?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["replyTo", types.TypeInputReplyTo, "flags.0?InputReplyTo"],
      ["multiMedia", [types.TypeInputSingleMedia], "Vector<InputSingleMedia>"],
      ["scheduleDate", "number", "flags.10?int"],
      ["sendAs", types.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.background ?? null, "true", "flags.6?true"],
      [this.clearDraft ?? null, "true", "flags.7?true"],
      [this.noforwards ?? null, "true", "flags.14?true"],
      [this.updateStickersetsOrder ?? null, "true", "flags.15?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.replyTo ?? null, types.TypeInputReplyTo, "flags.0?InputReplyTo"],
      [this.multiMedia, [types.TypeInputSingleMedia], "Vector<InputSingleMedia>"],
      [this.scheduleDate ?? null, "number", "flags.10?int"],
      [this.sendAs ?? null, types.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { silent?: true; background?: true; clearDraft?: true; noforwards?: true; updateStickersetsOrder?: true; peer: types.TypeInputPeer; replyTo?: types.TypeInputReplyTo; multiMedia: Array<types.TypeInputSingleMedia>; scheduleDate?: number; sendAs?: types.TypeInputPeer }) {
    super();
    this.silent = params.silent;
    this.background = params.background;
    this.clearDraft = params.clearDraft;
    this.noforwards = params.noforwards;
    this.updateStickersetsOrder = params.updateStickersetsOrder;
    this.peer = params.peer;
    this.replyTo = params.replyTo;
    this.multiMedia = params.multiMedia;
    this.scheduleDate = params.scheduleDate;
    this.sendAs = params.sendAs;
  }
}

export class MessagesUploadEncryptedFile extends Function<types.TypeEncryptedFile> {
  peer: types.TypeInputEncryptedChat;
  file: types.TypeInputEncryptedFile;

  protected get [id]() {
    return 0x5057C497;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputEncryptedChat, "InputEncryptedChat"],
      ["file", types.TypeInputEncryptedFile, "InputEncryptedFile"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputEncryptedChat, "InputEncryptedChat"],
      [this.file, types.TypeInputEncryptedFile, "InputEncryptedFile"],
    ];
  }

  constructor(params: { peer: types.TypeInputEncryptedChat; file: types.TypeInputEncryptedFile }) {
    super();
    this.peer = params.peer;
    this.file = params.file;
  }
}

export class MessagesSearchStickerSets extends Function<types.TypeMessagesFoundStickerSets> {
  excludeFeatured?: true;
  q: string;
  hash: bigint;

  protected get [id]() {
    return 0x35705B8A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["excludeFeatured", "true", "flags.0?true"],
      ["q", "string", "string"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.excludeFeatured ?? null, "true", "flags.0?true"],
      [this.q, "string", "string"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { excludeFeatured?: true; q: string; hash: bigint }) {
    super();
    this.excludeFeatured = params.excludeFeatured;
    this.q = params.q;
    this.hash = params.hash;
  }
}

export class MessagesGetSplitRanges extends Function<types.MessageRange[]> {
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

export class MessagesMarkDialogUnread extends Function<boolean> {
  unread?: true;
  peer: types.TypeInputDialogPeer;

  protected get [id]() {
    return 0xC286D98F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["unread", "true", "flags.0?true"],
      ["peer", types.TypeInputDialogPeer, "InputDialogPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.unread ?? null, "true", "flags.0?true"],
      [this.peer, types.TypeInputDialogPeer, "InputDialogPeer"],
    ];
  }

  constructor(params: { unread?: true; peer: types.TypeInputDialogPeer }) {
    super();
    this.unread = params.unread;
    this.peer = params.peer;
  }
}

export class MessagesGetDialogUnreadMarks extends Function<types.TypeDialogPeer[]> {
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

export class MessagesClearAllDrafts extends Function<boolean> {
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

export class MessagesUpdatePinnedMessage extends Function<types.TypeUpdates> {
  silent?: true;
  unpin?: true;
  pmOneside?: true;
  peer: types.TypeInputPeer;
  id: number;

  protected get [id]() {
    return 0xD2AAF7EC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.0?true"],
      ["unpin", "true", "flags.1?true"],
      ["pmOneside", "true", "flags.2?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.0?true"],
      [this.unpin ?? null, "true", "flags.1?true"],
      [this.pmOneside ?? null, "true", "flags.2?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.id, "number", "int"],
    ];
  }

  constructor(params: { silent?: true; unpin?: true; pmOneside?: true; peer: types.TypeInputPeer; id: number }) {
    super();
    this.silent = params.silent;
    this.unpin = params.unpin;
    this.pmOneside = params.pmOneside;
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class MessagesSendVote extends Function<types.TypeUpdates> {
  peer: types.TypeInputPeer;
  msgId: number;
  options: Array<Uint8Array>;

  protected get [id]() {
    return 0x10EA6184;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["options", [Uint8Array], "Vector<bytes>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.options, [Uint8Array], "Vector<bytes>"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; msgId: number; options: Array<Uint8Array> }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.options = params.options;
  }
}

export class MessagesGetPollResults extends Function<types.TypeUpdates> {
  peer: types.TypeInputPeer;
  msgId: number;

  protected get [id]() {
    return 0x73BB643B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; msgId: number }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
  }
}

export class MessagesGetOnlines extends Function<types.ChatOnlines> {
  peer: types.TypeInputPeer;

  protected get [id]() {
    return 0x6E2BE050;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class MessagesEditChatAbout extends Function<boolean> {
  peer: types.TypeInputPeer;
  about: string;

  protected get [id]() {
    return 0xDEF60797;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["about", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.about, "string", "string"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; about: string }) {
    super();
    this.peer = params.peer;
    this.about = params.about;
  }
}

export class MessagesEditChatDefaultBannedRights extends Function<types.TypeUpdates> {
  peer: types.TypeInputPeer;
  bannedRights: types.TypeChatBannedRights;

  protected get [id]() {
    return 0xA5866B41;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["bannedRights", types.TypeChatBannedRights, "ChatBannedRights"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.bannedRights, types.TypeChatBannedRights, "ChatBannedRights"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; bannedRights: types.TypeChatBannedRights }) {
    super();
    this.peer = params.peer;
    this.bannedRights = params.bannedRights;
  }
}

export class MessagesGetEmojiKeywords extends Function<types.EmojiKeywordsDifference> {
  langCode: string;

  protected get [id]() {
    return 0x35A0E062;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["langCode", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.langCode, "string", "string"],
    ];
  }

  constructor(params: { langCode: string }) {
    super();
    this.langCode = params.langCode;
  }
}

export class MessagesGetEmojiKeywordsDifference extends Function<types.EmojiKeywordsDifference> {
  langCode: string;
  fromVersion: number;

  protected get [id]() {
    return 0x1508B6AF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["langCode", "string", "string"],
      ["fromVersion", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.langCode, "string", "string"],
      [this.fromVersion, "number", "int"],
    ];
  }

  constructor(params: { langCode: string; fromVersion: number }) {
    super();
    this.langCode = params.langCode;
    this.fromVersion = params.fromVersion;
  }
}

export class MessagesGetEmojiKeywordsLanguages extends Function<types.EmojiLanguage[]> {
  langCodes: Array<string>;

  protected get [id]() {
    return 0x4E9963B2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["langCodes", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.langCodes, ["string"], "Vector<string>"],
    ];
  }

  constructor(params: { langCodes: Array<string> }) {
    super();
    this.langCodes = params.langCodes;
  }
}

export class MessagesGetEmojiURL extends Function<types.EmojiURL> {
  langCode: string;

  protected get [id]() {
    return 0xD5B10C26;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["langCode", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.langCode, "string", "string"],
    ];
  }

  constructor(params: { langCode: string }) {
    super();
    this.langCode = params.langCode;
  }
}

export class MessagesGetSearchCounters extends Function<types.MessagesSearchCounter[]> {
  peer: types.TypeInputPeer;
  topMsgId?: number;
  filters: Array<types.TypeMessagesFilter>;

  protected get [id]() {
    return 0x00AE7CC1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["topMsgId", "number", "flags.0?int"],
      ["filters", [types.TypeMessagesFilter], "Vector<MessagesFilter>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
      [this.filters, [types.TypeMessagesFilter], "Vector<MessagesFilter>"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; topMsgId?: number; filters: Array<types.TypeMessagesFilter> }) {
    super();
    this.peer = params.peer;
    this.topMsgId = params.topMsgId;
    this.filters = params.filters;
  }
}

export class MessagesRequestURLAuth extends Function<types.TypeURLAuthResult> {
  peer?: types.TypeInputPeer;
  msgId?: number;
  buttonId?: number;
  url?: string;

  protected get [id]() {
    return 0x198FB446;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types.TypeInputPeer, "flags.1?InputPeer"],
      ["msgId", "number", "flags.1?int"],
      ["buttonId", "number", "flags.1?int"],
      ["url", "string", "flags.2?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer ?? null, types.TypeInputPeer, "flags.1?InputPeer"],
      [this.msgId ?? null, "number", "flags.1?int"],
      [this.buttonId ?? null, "number", "flags.1?int"],
      [this.url ?? null, "string", "flags.2?string"],
    ];
  }

  constructor(params: { peer?: types.TypeInputPeer; msgId?: number; buttonId?: number; url?: string }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.buttonId = params.buttonId;
    this.url = params.url;
  }
}

export class MessagesAcceptURLAuth extends Function<types.TypeURLAuthResult> {
  writeAllowed?: true;
  peer?: types.TypeInputPeer;
  msgId?: number;
  buttonId?: number;
  url?: string;

  protected get [id]() {
    return 0xB12C7125;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["writeAllowed", "true", "flags.0?true"],
      ["peer", types.TypeInputPeer, "flags.1?InputPeer"],
      ["msgId", "number", "flags.1?int"],
      ["buttonId", "number", "flags.1?int"],
      ["url", "string", "flags.2?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.writeAllowed ?? null, "true", "flags.0?true"],
      [this.peer ?? null, types.TypeInputPeer, "flags.1?InputPeer"],
      [this.msgId ?? null, "number", "flags.1?int"],
      [this.buttonId ?? null, "number", "flags.1?int"],
      [this.url ?? null, "string", "flags.2?string"],
    ];
  }

  constructor(params: { writeAllowed?: true; peer?: types.TypeInputPeer; msgId?: number; buttonId?: number; url?: string }) {
    super();
    this.writeAllowed = params.writeAllowed;
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.buttonId = params.buttonId;
    this.url = params.url;
  }
}

export class MessagesHidePeerSettingsBar extends Function<boolean> {
  peer: types.TypeInputPeer;

  protected get [id]() {
    return 0x4FACB138;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class MessagesGetScheduledHistory extends Function<types.TypeMessagesMessages> {
  peer: types.TypeInputPeer;
  hash: bigint;

  protected get [id]() {
    return 0xF516760B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; hash: bigint }) {
    super();
    this.peer = params.peer;
    this.hash = params.hash;
  }
}

export class MessagesGetScheduledMessages extends Function<types.TypeMessagesMessages> {
  peer: types.TypeInputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0xBDBB0464;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class MessagesSendScheduledMessages extends Function<types.TypeUpdates> {
  peer: types.TypeInputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0xBD38850A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class MessagesDeleteScheduledMessages extends Function<types.TypeUpdates> {
  peer: types.TypeInputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0x59AE2B16;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class MessagesGetPollVotes extends Function<types.MessagesVotesList> {
  peer: types.TypeInputPeer;
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
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["option", Uint8Array, "flags.0?bytes"],
      ["offset", "string", "flags.1?string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.option ?? null, Uint8Array, "flags.0?bytes"],
      [this.offset ?? null, "string", "flags.1?string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; id: number; option?: Uint8Array; offset?: string; limit: number }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.option = params.option;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class MessagesToggleStickerSets extends Function<boolean> {
  uninstall?: true;
  archive?: true;
  unarchive?: true;
  stickersets: Array<types.TypeInputStickerSet>;

  protected get [id]() {
    return 0xB5052FEA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["uninstall", "true", "flags.0?true"],
      ["archive", "true", "flags.1?true"],
      ["unarchive", "true", "flags.2?true"],
      ["stickersets", [types.TypeInputStickerSet], "Vector<InputStickerSet>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.uninstall ?? null, "true", "flags.0?true"],
      [this.archive ?? null, "true", "flags.1?true"],
      [this.unarchive ?? null, "true", "flags.2?true"],
      [this.stickersets, [types.TypeInputStickerSet], "Vector<InputStickerSet>"],
    ];
  }

  constructor(params: { uninstall?: true; archive?: true; unarchive?: true; stickersets: Array<types.TypeInputStickerSet> }) {
    super();
    this.uninstall = params.uninstall;
    this.archive = params.archive;
    this.unarchive = params.unarchive;
    this.stickersets = params.stickersets;
  }
}

export class MessagesGetDialogFilters extends Function<types.TypeDialogFilter[]> {
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

export class MessagesGetSuggestedDialogFilters extends Function<types.DialogFilterSuggested[]> {
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

export class MessagesUpdateDialogFilter extends Function<boolean> {
  id: number;
  filter?: types.TypeDialogFilter;

  protected get [id]() {
    return 0x1AD4A04A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["id", "number", "int"],
      ["filter", types.TypeDialogFilter, "flags.0?DialogFilter"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.id, "number", "int"],
      [this.filter ?? null, types.TypeDialogFilter, "flags.0?DialogFilter"],
    ];
  }

  constructor(params: { id: number; filter?: types.TypeDialogFilter }) {
    super();
    this.id = params.id;
    this.filter = params.filter;
  }
}

export class MessagesUpdateDialogFiltersOrder extends Function<boolean> {
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

export class MessagesGetOldFeaturedStickers extends Function<types.TypeMessagesFeaturedStickers> {
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

export class MessagesGetReplies extends Function<types.TypeMessagesMessages> {
  peer: types.TypeInputPeer;
  msgId: number;
  offsetId: number;
  offsetDate: number;
  addOffset: number;
  limit: number;
  maxId: number;
  minId: number;
  hash: bigint;

  protected get [id]() {
    return 0x22DDD30C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["offsetId", "number", "int"],
      ["offsetDate", "number", "int"],
      ["addOffset", "number", "int"],
      ["limit", "number", "int"],
      ["maxId", "number", "int"],
      ["minId", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.offsetId, "number", "int"],
      [this.offsetDate, "number", "int"],
      [this.addOffset, "number", "int"],
      [this.limit, "number", "int"],
      [this.maxId, "number", "int"],
      [this.minId, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; msgId: number; offsetId: number; offsetDate: number; addOffset: number; limit: number; maxId: number; minId: number; hash: bigint }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.offsetId = params.offsetId;
    this.offsetDate = params.offsetDate;
    this.addOffset = params.addOffset;
    this.limit = params.limit;
    this.maxId = params.maxId;
    this.minId = params.minId;
    this.hash = params.hash;
  }
}

export class MessagesGetDiscussionMessage extends Function<types.MessagesDiscussionMessage> {
  peer: types.TypeInputPeer;
  msgId: number;

  protected get [id]() {
    return 0x446972FD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; msgId: number }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
  }
}

export class MessagesReadDiscussion extends Function<boolean> {
  peer: types.TypeInputPeer;
  msgId: number;
  readMaxId: number;

  protected get [id]() {
    return 0xF731A9F4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["readMaxId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.readMaxId, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; msgId: number; readMaxId: number }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.readMaxId = params.readMaxId;
  }
}

export class MessagesUnpinAllMessages extends Function<types.MessagesAffectedHistory> {
  peer: types.TypeInputPeer;
  topMsgId?: number;

  protected get [id]() {
    return 0xEE22B9A8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["topMsgId", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; topMsgId?: number }) {
    super();
    this.peer = params.peer;
    this.topMsgId = params.topMsgId;
  }
}

export class MessagesDeleteChat extends Function<boolean> {
  chatId: bigint;

  protected get [id]() {
    return 0x5BD0EE50;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
    ];
  }

  constructor(params: { chatId: bigint }) {
    super();
    this.chatId = params.chatId;
  }
}

export class MessagesDeletePhoneCallHistory extends Function<types.MessagesAffectedFoundMessages> {
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

  constructor(params: { revoke?: true }) {
    super();
    this.revoke = params.revoke;
  }
}

export class MessagesCheckHistoryImport extends Function<types.MessagesHistoryImportParsed> {
  importHead: string;

  protected get [id]() {
    return 0x43FE19F3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["importHead", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.importHead, "string", "string"],
    ];
  }

  constructor(params: { importHead: string }) {
    super();
    this.importHead = params.importHead;
  }
}

export class MessagesInitHistoryImport extends Function<types.MessagesHistoryImport> {
  peer: types.TypeInputPeer;
  file: types.TypeInputFile;
  mediaCount: number;

  protected get [id]() {
    return 0x34090C3B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["file", types.TypeInputFile, "InputFile"],
      ["mediaCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.file, types.TypeInputFile, "InputFile"],
      [this.mediaCount, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; file: types.TypeInputFile; mediaCount: number }) {
    super();
    this.peer = params.peer;
    this.file = params.file;
    this.mediaCount = params.mediaCount;
  }
}

export class MessagesUploadImportedMedia extends Function<types.TypeMessageMedia> {
  peer: types.TypeInputPeer;
  importId: bigint;
  fileName: string;
  media: types.TypeInputMedia;

  protected get [id]() {
    return 0x2A862092;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["importId", "bigint", "long"],
      ["fileName", "string", "string"],
      ["media", types.TypeInputMedia, "InputMedia"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.importId, "bigint", "long"],
      [this.fileName, "string", "string"],
      [this.media, types.TypeInputMedia, "InputMedia"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; importId: bigint; fileName: string; media: types.TypeInputMedia }) {
    super();
    this.peer = params.peer;
    this.importId = params.importId;
    this.fileName = params.fileName;
    this.media = params.media;
  }
}

export class MessagesStartHistoryImport extends Function<boolean> {
  peer: types.TypeInputPeer;
  importId: bigint;

  protected get [id]() {
    return 0xB43DF344;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["importId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.importId, "bigint", "long"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; importId: bigint }) {
    super();
    this.peer = params.peer;
    this.importId = params.importId;
  }
}

export class MessagesGetExportedChatInvites extends Function<types.MessagesExportedChatInvites> {
  revoked?: true;
  peer: types.TypeInputPeer;
  adminId: types.TypeInputUser;
  offsetDate?: number;
  offsetLink?: string;
  limit: number;

  protected get [id]() {
    return 0xA2B5A3F6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["revoked", "true", "flags.3?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["adminId", types.TypeInputUser, "InputUser"],
      ["offsetDate", "number", "flags.2?int"],
      ["offsetLink", "string", "flags.2?string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.revoked ?? null, "true", "flags.3?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.adminId, types.TypeInputUser, "InputUser"],
      [this.offsetDate ?? null, "number", "flags.2?int"],
      [this.offsetLink ?? null, "string", "flags.2?string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { revoked?: true; peer: types.TypeInputPeer; adminId: types.TypeInputUser; offsetDate?: number; offsetLink?: string; limit: number }) {
    super();
    this.revoked = params.revoked;
    this.peer = params.peer;
    this.adminId = params.adminId;
    this.offsetDate = params.offsetDate;
    this.offsetLink = params.offsetLink;
    this.limit = params.limit;
  }
}

export class MessagesGetExportedChatInvite extends Function<types.TypeMessagesExportedChatInvite> {
  peer: types.TypeInputPeer;
  link: string;

  protected get [id]() {
    return 0x73746F5C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["link", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.link, "string", "string"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; link: string }) {
    super();
    this.peer = params.peer;
    this.link = params.link;
  }
}

export class MessagesEditExportedChatInvite extends Function<types.TypeMessagesExportedChatInvite> {
  revoked?: true;
  peer: types.TypeInputPeer;
  link: string;
  expireDate?: number;
  usageLimit?: number;
  requestNeeded?: boolean;
  title?: string;

  protected get [id]() {
    return 0xBDCA2F75;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["revoked", "true", "flags.2?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["link", "string", "string"],
      ["expireDate", "number", "flags.0?int"],
      ["usageLimit", "number", "flags.1?int"],
      ["requestNeeded", "boolean", "flags.3?Bool"],
      ["title", "string", "flags.4?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.revoked ?? null, "true", "flags.2?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.link, "string", "string"],
      [this.expireDate ?? null, "number", "flags.0?int"],
      [this.usageLimit ?? null, "number", "flags.1?int"],
      [this.requestNeeded ?? null, "boolean", "flags.3?Bool"],
      [this.title ?? null, "string", "flags.4?string"],
    ];
  }

  constructor(params: { revoked?: true; peer: types.TypeInputPeer; link: string; expireDate?: number; usageLimit?: number; requestNeeded?: boolean; title?: string }) {
    super();
    this.revoked = params.revoked;
    this.peer = params.peer;
    this.link = params.link;
    this.expireDate = params.expireDate;
    this.usageLimit = params.usageLimit;
    this.requestNeeded = params.requestNeeded;
    this.title = params.title;
  }
}

export class MessagesDeleteRevokedExportedChatInvites extends Function<boolean> {
  peer: types.TypeInputPeer;
  adminId: types.TypeInputUser;

  protected get [id]() {
    return 0x56987BD5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["adminId", types.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.adminId, types.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; adminId: types.TypeInputUser }) {
    super();
    this.peer = params.peer;
    this.adminId = params.adminId;
  }
}

export class MessagesDeleteExportedChatInvite extends Function<boolean> {
  peer: types.TypeInputPeer;
  link: string;

  protected get [id]() {
    return 0xD464A42B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["link", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.link, "string", "string"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; link: string }) {
    super();
    this.peer = params.peer;
    this.link = params.link;
  }
}

export class MessagesGetAdminsWithInvites extends Function<types.MessagesChatAdminsWithInvites> {
  peer: types.TypeInputPeer;

  protected get [id]() {
    return 0x3920E6EF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class MessagesGetChatInviteImporters extends Function<types.MessagesChatInviteImporters> {
  requested?: true;
  peer: types.TypeInputPeer;
  link?: string;
  q?: string;
  offsetDate: number;
  offsetUser: types.TypeInputUser;
  limit: number;

  protected get [id]() {
    return 0xDF04DD4E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["requested", "true", "flags.0?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["link", "string", "flags.1?string"],
      ["q", "string", "flags.2?string"],
      ["offsetDate", "number", "int"],
      ["offsetUser", types.TypeInputUser, "InputUser"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.requested ?? null, "true", "flags.0?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.link ?? null, "string", "flags.1?string"],
      [this.q ?? null, "string", "flags.2?string"],
      [this.offsetDate, "number", "int"],
      [this.offsetUser, types.TypeInputUser, "InputUser"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { requested?: true; peer: types.TypeInputPeer; link?: string; q?: string; offsetDate: number; offsetUser: types.TypeInputUser; limit: number }) {
    super();
    this.requested = params.requested;
    this.peer = params.peer;
    this.link = params.link;
    this.q = params.q;
    this.offsetDate = params.offsetDate;
    this.offsetUser = params.offsetUser;
    this.limit = params.limit;
  }
}

export class MessagesSetHistoryTTL extends Function<types.TypeUpdates> {
  peer: types.TypeInputPeer;
  period: number;

  protected get [id]() {
    return 0xB80E5FE4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["period", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.period, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; period: number }) {
    super();
    this.peer = params.peer;
    this.period = params.period;
  }
}

export class MessagesCheckHistoryImportPeer extends Function<types.MessagesCheckedHistoryImportPeer> {
  peer: types.TypeInputPeer;

  protected get [id]() {
    return 0x5DC60F03;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class MessagesSetChatTheme extends Function<types.TypeUpdates> {
  peer: types.TypeInputPeer;
  emoticon: string;

  protected get [id]() {
    return 0xE63BE13F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["emoticon", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.emoticon, "string", "string"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; emoticon: string }) {
    super();
    this.peer = params.peer;
    this.emoticon = params.emoticon;
  }
}

export class MessagesGetMessageReadParticipants extends Function<types.ReadParticipantDate[]> {
  peer: types.TypeInputPeer;
  msgId: number;

  protected get [id]() {
    return 0x31C1C44F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; msgId: number }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
  }
}

export class MessagesGetSearchResultsCalendar extends Function<types.MessagesSearchResultsCalendar> {
  peer: types.TypeInputPeer;
  filter: types.TypeMessagesFilter;
  offsetId: number;
  offsetDate: number;

  protected get [id]() {
    return 0x49F0BDE9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["filter", types.TypeMessagesFilter, "MessagesFilter"],
      ["offsetId", "number", "int"],
      ["offsetDate", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.filter, types.TypeMessagesFilter, "MessagesFilter"],
      [this.offsetId, "number", "int"],
      [this.offsetDate, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; filter: types.TypeMessagesFilter; offsetId: number; offsetDate: number }) {
    super();
    this.peer = params.peer;
    this.filter = params.filter;
    this.offsetId = params.offsetId;
    this.offsetDate = params.offsetDate;
  }
}

export class MessagesGetSearchResultsPositions extends Function<types.MessagesSearchResultsPositions> {
  peer: types.TypeInputPeer;
  filter: types.TypeMessagesFilter;
  offsetId: number;
  limit: number;

  protected get [id]() {
    return 0x6E9583A3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["filter", types.TypeMessagesFilter, "MessagesFilter"],
      ["offsetId", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.filter, types.TypeMessagesFilter, "MessagesFilter"],
      [this.offsetId, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; filter: types.TypeMessagesFilter; offsetId: number; limit: number }) {
    super();
    this.peer = params.peer;
    this.filter = params.filter;
    this.offsetId = params.offsetId;
    this.limit = params.limit;
  }
}

export class MessagesHideChatJoinRequest extends Function<types.TypeUpdates> {
  approved?: true;
  peer: types.TypeInputPeer;
  userId: types.TypeInputUser;

  protected get [id]() {
    return 0x7FE7E815;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["approved", "true", "flags.0?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["userId", types.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.approved ?? null, "true", "flags.0?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.userId, types.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { approved?: true; peer: types.TypeInputPeer; userId: types.TypeInputUser }) {
    super();
    this.approved = params.approved;
    this.peer = params.peer;
    this.userId = params.userId;
  }
}

export class MessagesHideAllChatJoinRequests extends Function<types.TypeUpdates> {
  approved?: true;
  peer: types.TypeInputPeer;
  link?: string;

  protected get [id]() {
    return 0xE085F4EA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["approved", "true", "flags.0?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["link", "string", "flags.1?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.approved ?? null, "true", "flags.0?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.link ?? null, "string", "flags.1?string"],
    ];
  }

  constructor(params: { approved?: true; peer: types.TypeInputPeer; link?: string }) {
    super();
    this.approved = params.approved;
    this.peer = params.peer;
    this.link = params.link;
  }
}

export class MessagesToggleNoForwards extends Function<types.TypeUpdates> {
  peer: types.TypeInputPeer;
  enabled: boolean;

  protected get [id]() {
    return 0xB11EAFA2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; enabled: boolean }) {
    super();
    this.peer = params.peer;
    this.enabled = params.enabled;
  }
}

export class MessagesSaveDefaultSendAs extends Function<boolean> {
  peer: types.TypeInputPeer;
  sendAs: types.TypeInputPeer;

  protected get [id]() {
    return 0xCCFDDF96;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["sendAs", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.sendAs, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; sendAs: types.TypeInputPeer }) {
    super();
    this.peer = params.peer;
    this.sendAs = params.sendAs;
  }
}

export class MessagesSendReaction extends Function<types.TypeUpdates> {
  big?: true;
  addToRecent?: true;
  peer: types.TypeInputPeer;
  msgId: number;
  reaction?: Array<types.TypeReaction>;

  protected get [id]() {
    return 0xD30D78D4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["big", "true", "flags.1?true"],
      ["addToRecent", "true", "flags.2?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["reaction", [types.TypeReaction], "flags.0?Vector<Reaction>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.big ?? null, "true", "flags.1?true"],
      [this.addToRecent ?? null, "true", "flags.2?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.reaction ?? null, [types.TypeReaction], "flags.0?Vector<Reaction>"],
    ];
  }

  constructor(params: { big?: true; addToRecent?: true; peer: types.TypeInputPeer; msgId: number; reaction?: Array<types.TypeReaction> }) {
    super();
    this.big = params.big;
    this.addToRecent = params.addToRecent;
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.reaction = params.reaction;
  }
}

export class MessagesGetMessagesReactions extends Function<types.TypeUpdates> {
  peer: types.TypeInputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0x8BBA90E6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class MessagesGetMessageReactionsList extends Function<types.MessagesMessageReactionsList> {
  peer: types.TypeInputPeer;
  id: number;
  reaction?: types.TypeReaction;
  offset?: string;
  limit: number;

  protected get [id]() {
    return 0x461B3F48;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["reaction", types.TypeReaction, "flags.0?Reaction"],
      ["offset", "string", "flags.1?string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.reaction ?? null, types.TypeReaction, "flags.0?Reaction"],
      [this.offset ?? null, "string", "flags.1?string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; id: number; reaction?: types.TypeReaction; offset?: string; limit: number }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.reaction = params.reaction;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class MessagesSetChatAvailableReactions extends Function<types.TypeUpdates> {
  peer: types.TypeInputPeer;
  availableReactions: types.TypeChatReactions;

  protected get [id]() {
    return 0xFEB16771;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["availableReactions", types.TypeChatReactions, "ChatReactions"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.availableReactions, types.TypeChatReactions, "ChatReactions"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; availableReactions: types.TypeChatReactions }) {
    super();
    this.peer = params.peer;
    this.availableReactions = params.availableReactions;
  }
}

export class MessagesGetAvailableReactions extends Function<types.TypeMessagesAvailableReactions> {
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

export class MessagesSetDefaultReaction extends Function<boolean> {
  reaction: types.TypeReaction;

  protected get [id]() {
    return 0x4F47A016;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["reaction", types.TypeReaction, "Reaction"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.reaction, types.TypeReaction, "Reaction"],
    ];
  }

  constructor(params: { reaction: types.TypeReaction }) {
    super();
    this.reaction = params.reaction;
  }
}

export class MessagesTranslateText extends Function<types.MessagesTranslateResult> {
  peer?: types.TypeInputPeer;
  id?: Array<number>;
  text?: Array<types.TypeTextWithEntities>;
  toLang: string;

  protected get [id]() {
    return 0x63183030;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types.TypeInputPeer, "flags.0?InputPeer"],
      ["id", ["number"], "flags.0?Vector<int>"],
      ["text", [types.TypeTextWithEntities], "flags.1?Vector<TextWithEntities>"],
      ["toLang", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer ?? null, types.TypeInputPeer, "flags.0?InputPeer"],
      [this.id ?? null, ["number"], "flags.0?Vector<int>"],
      [this.text ?? null, [types.TypeTextWithEntities], "flags.1?Vector<TextWithEntities>"],
      [this.toLang, "string", "string"],
    ];
  }

  constructor(params: { peer?: types.TypeInputPeer; id?: Array<number>; text?: Array<types.TypeTextWithEntities>; toLang: string }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.text = params.text;
    this.toLang = params.toLang;
  }
}

export class MessagesGetUnreadReactions extends Function<types.TypeMessagesMessages> {
  peer: types.TypeInputPeer;
  topMsgId?: number;
  offsetId: number;
  addOffset: number;
  limit: number;
  maxId: number;
  minId: number;

  protected get [id]() {
    return 0x3223495B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["topMsgId", "number", "flags.0?int"],
      ["offsetId", "number", "int"],
      ["addOffset", "number", "int"],
      ["limit", "number", "int"],
      ["maxId", "number", "int"],
      ["minId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
      [this.offsetId, "number", "int"],
      [this.addOffset, "number", "int"],
      [this.limit, "number", "int"],
      [this.maxId, "number", "int"],
      [this.minId, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; topMsgId?: number; offsetId: number; addOffset: number; limit: number; maxId: number; minId: number }) {
    super();
    this.peer = params.peer;
    this.topMsgId = params.topMsgId;
    this.offsetId = params.offsetId;
    this.addOffset = params.addOffset;
    this.limit = params.limit;
    this.maxId = params.maxId;
    this.minId = params.minId;
  }
}

export class MessagesReadReactions extends Function<types.MessagesAffectedHistory> {
  peer: types.TypeInputPeer;
  topMsgId?: number;

  protected get [id]() {
    return 0x54AA7F8E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["topMsgId", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; topMsgId?: number }) {
    super();
    this.peer = params.peer;
    this.topMsgId = params.topMsgId;
  }
}

export class MessagesSearchSentMedia extends Function<types.TypeMessagesMessages> {
  q: string;
  filter: types.TypeMessagesFilter;
  limit: number;

  protected get [id]() {
    return 0x107E31A0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["q", "string", "string"],
      ["filter", types.TypeMessagesFilter, "MessagesFilter"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.q, "string", "string"],
      [this.filter, types.TypeMessagesFilter, "MessagesFilter"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { q: string; filter: types.TypeMessagesFilter; limit: number }) {
    super();
    this.q = params.q;
    this.filter = params.filter;
    this.limit = params.limit;
  }
}

export class MessagesGetAttachMenuBots extends Function<types.TypeAttachMenuBots> {
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

export class MessagesGetAttachMenuBot extends Function<types.AttachMenuBotsBot> {
  bot: types.TypeInputUser;

  protected get [id]() {
    return 0x77216192;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", types.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, types.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { bot: types.TypeInputUser }) {
    super();
    this.bot = params.bot;
  }
}

export class MessagesToggleBotInAttachMenu extends Function<boolean> {
  writeAllowed?: true;
  bot: types.TypeInputUser;
  enabled: boolean;

  protected get [id]() {
    return 0x69F59D69;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["writeAllowed", "true", "flags.0?true"],
      ["bot", types.TypeInputUser, "InputUser"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.writeAllowed ?? null, "true", "flags.0?true"],
      [this.bot, types.TypeInputUser, "InputUser"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { writeAllowed?: true; bot: types.TypeInputUser; enabled: boolean }) {
    super();
    this.writeAllowed = params.writeAllowed;
    this.bot = params.bot;
    this.enabled = params.enabled;
  }
}

export class MessagesRequestWebView extends Function<types.WebViewResultURL> {
  fromBotMenu?: true;
  silent?: true;
  peer: types.TypeInputPeer;
  bot: types.TypeInputUser;
  url?: string;
  startParam?: string;
  themeParams?: types.TypeDataJSON;
  platform: string;
  replyTo?: types.TypeInputReplyTo;
  sendAs?: types.TypeInputPeer;

  protected get [id]() {
    return 0x269DC2C1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["fromBotMenu", "true", "flags.4?true"],
      ["silent", "true", "flags.5?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["bot", types.TypeInputUser, "InputUser"],
      ["url", "string", "flags.1?string"],
      ["startParam", "string", "flags.3?string"],
      ["themeParams", types.TypeDataJSON, "flags.2?DataJSON"],
      ["platform", "string", "string"],
      ["replyTo", types.TypeInputReplyTo, "flags.0?InputReplyTo"],
      ["sendAs", types.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.fromBotMenu ?? null, "true", "flags.4?true"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.bot, types.TypeInputUser, "InputUser"],
      [this.url ?? null, "string", "flags.1?string"],
      [this.startParam ?? null, "string", "flags.3?string"],
      [this.themeParams ?? null, types.TypeDataJSON, "flags.2?DataJSON"],
      [this.platform, "string", "string"],
      [this.replyTo ?? null, types.TypeInputReplyTo, "flags.0?InputReplyTo"],
      [this.sendAs ?? null, types.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { fromBotMenu?: true; silent?: true; peer: types.TypeInputPeer; bot: types.TypeInputUser; url?: string; startParam?: string; themeParams?: types.TypeDataJSON; platform: string; replyTo?: types.TypeInputReplyTo; sendAs?: types.TypeInputPeer }) {
    super();
    this.fromBotMenu = params.fromBotMenu;
    this.silent = params.silent;
    this.peer = params.peer;
    this.bot = params.bot;
    this.url = params.url;
    this.startParam = params.startParam;
    this.themeParams = params.themeParams;
    this.platform = params.platform;
    this.replyTo = params.replyTo;
    this.sendAs = params.sendAs;
  }
}

export class MessagesProlongWebView extends Function<boolean> {
  silent?: true;
  peer: types.TypeInputPeer;
  bot: types.TypeInputUser;
  queryId: bigint;
  replyTo?: types.TypeInputReplyTo;
  sendAs?: types.TypeInputPeer;

  protected get [id]() {
    return 0xB0D81A83;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.5?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["bot", types.TypeInputUser, "InputUser"],
      ["queryId", "bigint", "long"],
      ["replyTo", types.TypeInputReplyTo, "flags.0?InputReplyTo"],
      ["sendAs", types.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.bot, types.TypeInputUser, "InputUser"],
      [this.queryId, "bigint", "long"],
      [this.replyTo ?? null, types.TypeInputReplyTo, "flags.0?InputReplyTo"],
      [this.sendAs ?? null, types.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { silent?: true; peer: types.TypeInputPeer; bot: types.TypeInputUser; queryId: bigint; replyTo?: types.TypeInputReplyTo; sendAs?: types.TypeInputPeer }) {
    super();
    this.silent = params.silent;
    this.peer = params.peer;
    this.bot = params.bot;
    this.queryId = params.queryId;
    this.replyTo = params.replyTo;
    this.sendAs = params.sendAs;
  }
}

export class MessagesRequestSimpleWebView extends Function<types.SimpleWebViewResultURL> {
  fromSwitchWebview?: true;
  bot: types.TypeInputUser;
  url: string;
  themeParams?: types.TypeDataJSON;
  platform: string;

  protected get [id]() {
    return 0x299BEC8E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["fromSwitchWebview", "true", "flags.1?true"],
      ["bot", types.TypeInputUser, "InputUser"],
      ["url", "string", "string"],
      ["themeParams", types.TypeDataJSON, "flags.0?DataJSON"],
      ["platform", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.fromSwitchWebview ?? null, "true", "flags.1?true"],
      [this.bot, types.TypeInputUser, "InputUser"],
      [this.url, "string", "string"],
      [this.themeParams ?? null, types.TypeDataJSON, "flags.0?DataJSON"],
      [this.platform, "string", "string"],
    ];
  }

  constructor(params: { fromSwitchWebview?: true; bot: types.TypeInputUser; url: string; themeParams?: types.TypeDataJSON; platform: string }) {
    super();
    this.fromSwitchWebview = params.fromSwitchWebview;
    this.bot = params.bot;
    this.url = params.url;
    this.themeParams = params.themeParams;
    this.platform = params.platform;
  }
}

export class MessagesSendWebViewResultMessage extends Function<types.WebViewMessageSent> {
  botQueryId: string;
  result: types.TypeInputBotInlineResult;

  protected get [id]() {
    return 0x0A4314F5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["botQueryId", "string", "string"],
      ["result", types.TypeInputBotInlineResult, "InputBotInlineResult"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.botQueryId, "string", "string"],
      [this.result, types.TypeInputBotInlineResult, "InputBotInlineResult"],
    ];
  }

  constructor(params: { botQueryId: string; result: types.TypeInputBotInlineResult }) {
    super();
    this.botQueryId = params.botQueryId;
    this.result = params.result;
  }
}

export class MessagesSendWebViewData extends Function<types.TypeUpdates> {
  bot: types.TypeInputUser;
  randomId: bigint;
  buttonText: string;
  data: string;

  protected get [id]() {
    return 0xDC0242C8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", types.TypeInputUser, "InputUser"],
      ["randomId", "bigint", "long"],
      ["buttonText", "string", "string"],
      ["data", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, types.TypeInputUser, "InputUser"],
      [this.randomId, "bigint", "long"],
      [this.buttonText, "string", "string"],
      [this.data, "string", "string"],
    ];
  }

  constructor(params: { bot: types.TypeInputUser; randomId: bigint; buttonText: string; data: string }) {
    super();
    this.bot = params.bot;
    this.randomId = params.randomId;
    this.buttonText = params.buttonText;
    this.data = params.data;
  }
}

export class MessagesTranscribeAudio extends Function<types.MessagesTranscribedAudio> {
  peer: types.TypeInputPeer;
  msgId: number;

  protected get [id]() {
    return 0x269E9A49;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; msgId: number }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
  }
}

export class MessagesRateTranscribedAudio extends Function<boolean> {
  peer: types.TypeInputPeer;
  msgId: number;
  transcriptionId: bigint;
  good: boolean;

  protected get [id]() {
    return 0x7F1D072F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["transcriptionId", "bigint", "long"],
      ["good", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.transcriptionId, "bigint", "long"],
      [this.good, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; msgId: number; transcriptionId: bigint; good: boolean }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.transcriptionId = params.transcriptionId;
    this.good = params.good;
  }
}

export class MessagesGetCustomEmojiDocuments extends Function<types.TypeDocument[]> {
  documentId: Array<bigint>;

  protected get [id]() {
    return 0xD9AB0F54;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["documentId", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.documentId, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { documentId: Array<bigint> }) {
    super();
    this.documentId = params.documentId;
  }
}

export class MessagesGetEmojiStickers extends Function<types.TypeMessagesAllStickers> {
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

export class MessagesGetFeaturedEmojiStickers extends Function<types.TypeMessagesFeaturedStickers> {
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

export class MessagesReportReaction extends Function<boolean> {
  peer: types.TypeInputPeer;
  id: number;
  reactionPeer: types.TypeInputPeer;

  protected get [id]() {
    return 0x3F64C076;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["reactionPeer", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.reactionPeer, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; id: number; reactionPeer: types.TypeInputPeer }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.reactionPeer = params.reactionPeer;
  }
}

export class MessagesGetTopReactions extends Function<types.TypeMessagesReactions> {
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

export class MessagesGetRecentReactions extends Function<types.TypeMessagesReactions> {
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

export class MessagesClearRecentReactions extends Function<boolean> {
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

export class MessagesGetExtendedMedia extends Function<types.TypeUpdates> {
  peer: types.TypeInputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0x84F80814;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class MessagesSetDefaultHistoryTTL extends Function<boolean> {
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

export class MessagesGetDefaultHistoryTTL extends Function<types.DefaultHistoryTTL> {
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

export class MessagesSendBotRequestedPeer extends Function<types.TypeUpdates> {
  peer: types.TypeInputPeer;
  msgId: number;
  buttonId: number;
  requestedPeer: types.TypeInputPeer;

  protected get [id]() {
    return 0xFE38D01B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["buttonId", "number", "int"],
      ["requestedPeer", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.buttonId, "number", "int"],
      [this.requestedPeer, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; msgId: number; buttonId: number; requestedPeer: types.TypeInputPeer }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.buttonId = params.buttonId;
    this.requestedPeer = params.requestedPeer;
  }
}

export class MessagesGetEmojiGroups extends Function<types.TypeMessagesEmojiGroups> {
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

export class MessagesGetEmojiStatusGroups extends Function<types.TypeMessagesEmojiGroups> {
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

export class MessagesGetEmojiProfilePhotoGroups extends Function<types.TypeMessagesEmojiGroups> {
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

export class MessagesSearchCustomEmoji extends Function<types.TypeEmojiList> {
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

export class MessagesTogglePeerTranslations extends Function<boolean> {
  disabled?: true;
  peer: types.TypeInputPeer;

  protected get [id]() {
    return 0xE47CB579;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["disabled", "true", "flags.0?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.disabled ?? null, "true", "flags.0?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { disabled?: true; peer: types.TypeInputPeer }) {
    super();
    this.disabled = params.disabled;
    this.peer = params.peer;
  }
}

export class MessagesGetBotApp extends Function<types.MessagesBotApp> {
  app: types.TypeInputBotApp;
  hash: bigint;

  protected get [id]() {
    return 0x34FDC5C3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["app", types.TypeInputBotApp, "InputBotApp"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.app, types.TypeInputBotApp, "InputBotApp"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { app: types.TypeInputBotApp; hash: bigint }) {
    super();
    this.app = params.app;
    this.hash = params.hash;
  }
}

export class MessagesRequestAppWebView extends Function<types.AppWebViewResultURL> {
  writeAllowed?: true;
  peer: types.TypeInputPeer;
  app: types.TypeInputBotApp;
  startParam?: string;
  themeParams?: types.TypeDataJSON;
  platform: string;

  protected get [id]() {
    return 0x8C5A3B3C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["writeAllowed", "true", "flags.0?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["app", types.TypeInputBotApp, "InputBotApp"],
      ["startParam", "string", "flags.1?string"],
      ["themeParams", types.TypeDataJSON, "flags.2?DataJSON"],
      ["platform", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.writeAllowed ?? null, "true", "flags.0?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.app, types.TypeInputBotApp, "InputBotApp"],
      [this.startParam ?? null, "string", "flags.1?string"],
      [this.themeParams ?? null, types.TypeDataJSON, "flags.2?DataJSON"],
      [this.platform, "string", "string"],
    ];
  }

  constructor(params: { writeAllowed?: true; peer: types.TypeInputPeer; app: types.TypeInputBotApp; startParam?: string; themeParams?: types.TypeDataJSON; platform: string }) {
    super();
    this.writeAllowed = params.writeAllowed;
    this.peer = params.peer;
    this.app = params.app;
    this.startParam = params.startParam;
    this.themeParams = params.themeParams;
    this.platform = params.platform;
  }
}

export class MessagesSetChatWallPaper extends Function<types.TypeUpdates> {
  peer: types.TypeInputPeer;
  wallpaper?: types.TypeInputWallPaper;
  settings?: types.TypeWallPaperSettings;
  id?: number;

  protected get [id]() {
    return 0x8FFACAE1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["wallpaper", types.TypeInputWallPaper, "flags.0?InputWallPaper"],
      ["settings", types.TypeWallPaperSettings, "flags.2?WallPaperSettings"],
      ["id", "number", "flags.1?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.wallpaper ?? null, types.TypeInputWallPaper, "flags.0?InputWallPaper"],
      [this.settings ?? null, types.TypeWallPaperSettings, "flags.2?WallPaperSettings"],
      [this.id ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; wallpaper?: types.TypeInputWallPaper; settings?: types.TypeWallPaperSettings; id?: number }) {
    super();
    this.peer = params.peer;
    this.wallpaper = params.wallpaper;
    this.settings = params.settings;
    this.id = params.id;
  }
}

export class UpdatesGetState extends Function<types.UpdatesState> {
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

export class UpdatesGetDifference extends Function<types.TypeUpdatesDifference> {
  pts: number;
  ptsLimit?: number;
  ptsTotalLimit?: number;
  date: number;
  qts: number;
  qtsLimit?: number;

  protected get [id]() {
    return 0x19C2F763;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pts", "number", "int"],
      ["ptsLimit", "number", "flags.1?int"],
      ["ptsTotalLimit", "number", "flags.0?int"],
      ["date", "number", "int"],
      ["qts", "number", "int"],
      ["qtsLimit", "number", "flags.2?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pts, "number", "int"],
      [this.ptsLimit ?? null, "number", "flags.1?int"],
      [this.ptsTotalLimit ?? null, "number", "flags.0?int"],
      [this.date, "number", "int"],
      [this.qts, "number", "int"],
      [this.qtsLimit ?? null, "number", "flags.2?int"],
    ];
  }

  constructor(params: { pts: number; ptsLimit?: number; ptsTotalLimit?: number; date: number; qts: number; qtsLimit?: number }) {
    super();
    this.pts = params.pts;
    this.ptsLimit = params.ptsLimit;
    this.ptsTotalLimit = params.ptsTotalLimit;
    this.date = params.date;
    this.qts = params.qts;
    this.qtsLimit = params.qtsLimit;
  }
}

export class UpdatesGetChannelDifference extends Function<types.TypeUpdatesChannelDifference> {
  force?: true;
  channel: types.TypeInputChannel;
  filter: types.TypeChannelMessagesFilter;
  pts: number;
  limit: number;

  protected get [id]() {
    return 0x03173D78;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["force", "true", "flags.0?true"],
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["filter", types.TypeChannelMessagesFilter, "ChannelMessagesFilter"],
      ["pts", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.force ?? null, "true", "flags.0?true"],
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.filter, types.TypeChannelMessagesFilter, "ChannelMessagesFilter"],
      [this.pts, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { force?: true; channel: types.TypeInputChannel; filter: types.TypeChannelMessagesFilter; pts: number; limit: number }) {
    super();
    this.force = params.force;
    this.channel = params.channel;
    this.filter = params.filter;
    this.pts = params.pts;
    this.limit = params.limit;
  }
}

export class PhotosUpdateProfilePhoto extends Function<types.PhotosPhoto> {
  fallback?: true;
  bot?: types.TypeInputUser;
  id: types.TypeInputPhoto;

  protected get [id]() {
    return 0x09E82039;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["fallback", "true", "flags.0?true"],
      ["bot", types.TypeInputUser, "flags.1?InputUser"],
      ["id", types.TypeInputPhoto, "InputPhoto"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.fallback ?? null, "true", "flags.0?true"],
      [this.bot ?? null, types.TypeInputUser, "flags.1?InputUser"],
      [this.id, types.TypeInputPhoto, "InputPhoto"],
    ];
  }

  constructor(params: { fallback?: true; bot?: types.TypeInputUser; id: types.TypeInputPhoto }) {
    super();
    this.fallback = params.fallback;
    this.bot = params.bot;
    this.id = params.id;
  }
}

export class PhotosUploadProfilePhoto extends Function<types.PhotosPhoto> {
  fallback?: true;
  bot?: types.TypeInputUser;
  file?: types.TypeInputFile;
  video?: types.TypeInputFile;
  videoStartTs?: number;
  videoEmojiMarkup?: types.TypeVideoSize;

  protected get [id]() {
    return 0x0388A3B5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["fallback", "true", "flags.3?true"],
      ["bot", types.TypeInputUser, "flags.5?InputUser"],
      ["file", types.TypeInputFile, "flags.0?InputFile"],
      ["video", types.TypeInputFile, "flags.1?InputFile"],
      ["videoStartTs", "number", "flags.2?double"],
      ["videoEmojiMarkup", types.TypeVideoSize, "flags.4?VideoSize"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.fallback ?? null, "true", "flags.3?true"],
      [this.bot ?? null, types.TypeInputUser, "flags.5?InputUser"],
      [this.file ?? null, types.TypeInputFile, "flags.0?InputFile"],
      [this.video ?? null, types.TypeInputFile, "flags.1?InputFile"],
      [this.videoStartTs ?? null, "number", "flags.2?double"],
      [this.videoEmojiMarkup ?? null, types.TypeVideoSize, "flags.4?VideoSize"],
    ];
  }

  constructor(params: { fallback?: true; bot?: types.TypeInputUser; file?: types.TypeInputFile; video?: types.TypeInputFile; videoStartTs?: number; videoEmojiMarkup?: types.TypeVideoSize }) {
    super();
    this.fallback = params.fallback;
    this.bot = params.bot;
    this.file = params.file;
    this.video = params.video;
    this.videoStartTs = params.videoStartTs;
    this.videoEmojiMarkup = params.videoEmojiMarkup;
  }
}

export class PhotosDeletePhotos extends Function<bigint[]> {
  id: Array<types.TypeInputPhoto>;

  protected get [id]() {
    return 0x87CF7F2F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [types.TypeInputPhoto], "Vector<InputPhoto>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [types.TypeInputPhoto], "Vector<InputPhoto>"],
    ];
  }

  constructor(params: { id: Array<types.TypeInputPhoto> }) {
    super();
    this.id = params.id;
  }
}

export class PhotosGetUserPhotos extends Function<types.TypePhotosPhotos> {
  userId: types.TypeInputUser;
  offset: number;
  maxId: bigint;
  limit: number;

  protected get [id]() {
    return 0x91CD32A8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", types.TypeInputUser, "InputUser"],
      ["offset", "number", "int"],
      ["maxId", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.offset, "number", "int"],
      [this.maxId, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { userId: types.TypeInputUser; offset: number; maxId: bigint; limit: number }) {
    super();
    this.userId = params.userId;
    this.offset = params.offset;
    this.maxId = params.maxId;
    this.limit = params.limit;
  }
}

export class PhotosUploadContactProfilePhoto extends Function<types.PhotosPhoto> {
  suggest?: true;
  save?: true;
  userId: types.TypeInputUser;
  file?: types.TypeInputFile;
  video?: types.TypeInputFile;
  videoStartTs?: number;
  videoEmojiMarkup?: types.TypeVideoSize;

  protected get [id]() {
    return 0xE14C4A71;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["suggest", "true", "flags.3?true"],
      ["save", "true", "flags.4?true"],
      ["userId", types.TypeInputUser, "InputUser"],
      ["file", types.TypeInputFile, "flags.0?InputFile"],
      ["video", types.TypeInputFile, "flags.1?InputFile"],
      ["videoStartTs", "number", "flags.2?double"],
      ["videoEmojiMarkup", types.TypeVideoSize, "flags.5?VideoSize"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.suggest ?? null, "true", "flags.3?true"],
      [this.save ?? null, "true", "flags.4?true"],
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.file ?? null, types.TypeInputFile, "flags.0?InputFile"],
      [this.video ?? null, types.TypeInputFile, "flags.1?InputFile"],
      [this.videoStartTs ?? null, "number", "flags.2?double"],
      [this.videoEmojiMarkup ?? null, types.TypeVideoSize, "flags.5?VideoSize"],
    ];
  }

  constructor(params: { suggest?: true; save?: true; userId: types.TypeInputUser; file?: types.TypeInputFile; video?: types.TypeInputFile; videoStartTs?: number; videoEmojiMarkup?: types.TypeVideoSize }) {
    super();
    this.suggest = params.suggest;
    this.save = params.save;
    this.userId = params.userId;
    this.file = params.file;
    this.video = params.video;
    this.videoStartTs = params.videoStartTs;
    this.videoEmojiMarkup = params.videoEmojiMarkup;
  }
}

export class UploadSaveFilePart extends Function<boolean> {
  fileId: bigint;
  filePart: number;
  bytes: Uint8Array;

  protected get [id]() {
    return 0xB304A621;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["fileId", "bigint", "long"],
      ["filePart", "number", "int"],
      ["bytes", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.fileId, "bigint", "long"],
      [this.filePart, "number", "int"],
      [this.bytes, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { fileId: bigint; filePart: number; bytes: Uint8Array }) {
    super();
    this.fileId = params.fileId;
    this.filePart = params.filePart;
    this.bytes = params.bytes;
  }
}

export class UploadGetFile extends Function<types.TypeUploadFile> {
  precise?: true;
  cdnSupported?: true;
  location: types.TypeInputFileLocation;
  offset: bigint;
  limit: number;

  protected get [id]() {
    return 0xBE5335BE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["precise", "true", "flags.0?true"],
      ["cdnSupported", "true", "flags.1?true"],
      ["location", types.TypeInputFileLocation, "InputFileLocation"],
      ["offset", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.precise ?? null, "true", "flags.0?true"],
      [this.cdnSupported ?? null, "true", "flags.1?true"],
      [this.location, types.TypeInputFileLocation, "InputFileLocation"],
      [this.offset, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { precise?: true; cdnSupported?: true; location: types.TypeInputFileLocation; offset: bigint; limit: number }) {
    super();
    this.precise = params.precise;
    this.cdnSupported = params.cdnSupported;
    this.location = params.location;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class UploadSaveBigFilePart extends Function<boolean> {
  fileId: bigint;
  filePart: number;
  fileTotalParts: number;
  bytes: Uint8Array;

  protected get [id]() {
    return 0xDE7B673D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["fileId", "bigint", "long"],
      ["filePart", "number", "int"],
      ["fileTotalParts", "number", "int"],
      ["bytes", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.fileId, "bigint", "long"],
      [this.filePart, "number", "int"],
      [this.fileTotalParts, "number", "int"],
      [this.bytes, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { fileId: bigint; filePart: number; fileTotalParts: number; bytes: Uint8Array }) {
    super();
    this.fileId = params.fileId;
    this.filePart = params.filePart;
    this.fileTotalParts = params.fileTotalParts;
    this.bytes = params.bytes;
  }
}

export class UploadGetWebFile extends Function<types.UploadWebFile> {
  location: types.TypeInputWebFileLocation;
  offset: number;
  limit: number;

  protected get [id]() {
    return 0x24E6818D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["location", types.TypeInputWebFileLocation, "InputWebFileLocation"],
      ["offset", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.location, types.TypeInputWebFileLocation, "InputWebFileLocation"],
      [this.offset, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { location: types.TypeInputWebFileLocation; offset: number; limit: number }) {
    super();
    this.location = params.location;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class UploadGetCdnFile extends Function<types.TypeUploadCdnFile> {
  fileToken: Uint8Array;
  offset: bigint;
  limit: number;

  protected get [id]() {
    return 0x395F69DA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["fileToken", Uint8Array, "bytes"],
      ["offset", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.fileToken, Uint8Array, "bytes"],
      [this.offset, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { fileToken: Uint8Array; offset: bigint; limit: number }) {
    super();
    this.fileToken = params.fileToken;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class UploadReuploadCdnFile extends Function<types.FileHash[]> {
  fileToken: Uint8Array;
  requestToken: Uint8Array;

  protected get [id]() {
    return 0x9B2754A8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["fileToken", Uint8Array, "bytes"],
      ["requestToken", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.fileToken, Uint8Array, "bytes"],
      [this.requestToken, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { fileToken: Uint8Array; requestToken: Uint8Array }) {
    super();
    this.fileToken = params.fileToken;
    this.requestToken = params.requestToken;
  }
}

export class UploadGetCdnFileHashes extends Function<types.FileHash[]> {
  fileToken: Uint8Array;
  offset: bigint;

  protected get [id]() {
    return 0x91DC3F31;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["fileToken", Uint8Array, "bytes"],
      ["offset", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.fileToken, Uint8Array, "bytes"],
      [this.offset, "bigint", "long"],
    ];
  }

  constructor(params: { fileToken: Uint8Array; offset: bigint }) {
    super();
    this.fileToken = params.fileToken;
    this.offset = params.offset;
  }
}

export class UploadGetFileHashes extends Function<types.FileHash[]> {
  location: types.TypeInputFileLocation;
  offset: bigint;

  protected get [id]() {
    return 0x9156982A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["location", types.TypeInputFileLocation, "InputFileLocation"],
      ["offset", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.location, types.TypeInputFileLocation, "InputFileLocation"],
      [this.offset, "bigint", "long"],
    ];
  }

  constructor(params: { location: types.TypeInputFileLocation; offset: bigint }) {
    super();
    this.location = params.location;
    this.offset = params.offset;
  }
}

export class HelpGetConfig extends Function<types.Config> {
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

export class HelpGetNearestDc extends Function<types.NearestDc> {
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

export class HelpGetAppUpdate extends Function<types.TypeHelpAppUpdate> {
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

export class HelpGetInviteText extends Function<types.HelpInviteText> {
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

export class HelpGetSupport extends Function<types.HelpSupport> {
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

export class HelpGetAppChangelog extends Function<types.TypeUpdates> {
  prevAppVersion: string;

  protected get [id]() {
    return 0x9010EF6F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevAppVersion", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevAppVersion, "string", "string"],
    ];
  }

  constructor(params: { prevAppVersion: string }) {
    super();
    this.prevAppVersion = params.prevAppVersion;
  }
}

export class HelpSetBotUpdatesStatus extends Function<boolean> {
  pendingUpdatesCount: number;
  message: string;

  protected get [id]() {
    return 0xEC22CFCD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["pendingUpdatesCount", "number", "int"],
      ["message", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.pendingUpdatesCount, "number", "int"],
      [this.message, "string", "string"],
    ];
  }

  constructor(params: { pendingUpdatesCount: number; message: string }) {
    super();
    this.pendingUpdatesCount = params.pendingUpdatesCount;
    this.message = params.message;
  }
}

export class HelpGetCdnConfig extends Function<types.CdnConfig> {
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

export class HelpGetRecentMeURLs extends Function<types.HelpRecentMeURLs> {
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

export class HelpGetTermsOfServiceUpdate extends Function<types.TypeHelpTermsOfServiceUpdate> {
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

export class HelpAcceptTermsOfService extends Function<boolean> {
  id: types.TypeDataJSON;

  protected get [id]() {
    return 0xEE72F79A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", types.TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, types.TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { id: types.TypeDataJSON }) {
    super();
    this.id = params.id;
  }
}

export class HelpGetDeepLinkInfo extends Function<types.TypeHelpDeepLinkInfo> {
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

export class HelpGetAppConfig extends Function<types.TypeHelpAppConfig> {
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

export class HelpSaveAppLog extends Function<boolean> {
  events: Array<types.TypeInputAppEvent>;

  protected get [id]() {
    return 0x6F02F748;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["events", [types.TypeInputAppEvent], "Vector<InputAppEvent>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.events, [types.TypeInputAppEvent], "Vector<InputAppEvent>"],
    ];
  }

  constructor(params: { events: Array<types.TypeInputAppEvent> }) {
    super();
    this.events = params.events;
  }
}

export class HelpGetPassportConfig extends Function<types.TypeHelpPassportConfig> {
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

export class HelpGetSupportName extends Function<types.HelpSupportName> {
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

export class HelpGetUserInfo extends Function<types.TypeHelpUserInfo> {
  userId: types.TypeInputUser;

  protected get [id]() {
    return 0x038A08D3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", types.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, types.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { userId: types.TypeInputUser }) {
    super();
    this.userId = params.userId;
  }
}

export class HelpEditUserInfo extends Function<types.TypeHelpUserInfo> {
  userId: types.TypeInputUser;
  message: string;
  entities: Array<types.TypeMessageEntity>;

  protected get [id]() {
    return 0x66B91B70;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", types.TypeInputUser, "InputUser"],
      ["message", "string", "string"],
      ["entities", [types.TypeMessageEntity], "Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.message, "string", "string"],
      [this.entities, [types.TypeMessageEntity], "Vector<MessageEntity>"],
    ];
  }

  constructor(params: { userId: types.TypeInputUser; message: string; entities: Array<types.TypeMessageEntity> }) {
    super();
    this.userId = params.userId;
    this.message = params.message;
    this.entities = params.entities;
  }
}

export class HelpGetPromoData extends Function<types.TypeHelpPromoData> {
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

export class HelpHidePromoData extends Function<boolean> {
  peer: types.TypeInputPeer;

  protected get [id]() {
    return 0x1E251C95;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class HelpDismissSuggestion extends Function<boolean> {
  peer: types.TypeInputPeer;
  suggestion: string;

  protected get [id]() {
    return 0xF50DBAA1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["suggestion", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.suggestion, "string", "string"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; suggestion: string }) {
    super();
    this.peer = params.peer;
    this.suggestion = params.suggestion;
  }
}

export class HelpGetCountriesList extends Function<types.TypeHelpCountriesList> {
  langCode: string;
  hash: number;

  protected get [id]() {
    return 0x735787A8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["langCode", "string", "string"],
      ["hash", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.langCode, "string", "string"],
      [this.hash, "number", "int"],
    ];
  }

  constructor(params: { langCode: string; hash: number }) {
    super();
    this.langCode = params.langCode;
    this.hash = params.hash;
  }
}

export class HelpGetPremiumPromo extends Function<types.HelpPremiumPromo> {
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

export class ChannelsReadHistory extends Function<boolean> {
  channel: types.TypeInputChannel;
  maxId: number;

  protected get [id]() {
    return 0xCC104937;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["maxId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.maxId, "number", "int"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; maxId: number }) {
    super();
    this.channel = params.channel;
    this.maxId = params.maxId;
  }
}

export class ChannelsDeleteMessages extends Function<types.MessagesAffectedMessages> {
  channel: types.TypeInputChannel;
  id: Array<number>;

  protected get [id]() {
    return 0x84C1FD4E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; id: Array<number> }) {
    super();
    this.channel = params.channel;
    this.id = params.id;
  }
}

export class ChannelsReportSpam extends Function<boolean> {
  channel: types.TypeInputChannel;
  participant: types.TypeInputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0xF44A8315;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["participant", types.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.participant, types.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; participant: types.TypeInputPeer; id: Array<number> }) {
    super();
    this.channel = params.channel;
    this.participant = params.participant;
    this.id = params.id;
  }
}

export class ChannelsGetMessages extends Function<types.TypeMessagesMessages> {
  channel: types.TypeInputChannel;
  id: Array<types.TypeInputMessage>;

  protected get [id]() {
    return 0xAD8C9A23;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["id", [types.TypeInputMessage], "Vector<InputMessage>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.id, [types.TypeInputMessage], "Vector<InputMessage>"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; id: Array<types.TypeInputMessage> }) {
    super();
    this.channel = params.channel;
    this.id = params.id;
  }
}

export class ChannelsGetParticipants extends Function<types.TypeChannelsChannelParticipants> {
  channel: types.TypeInputChannel;
  filter: types.TypeChannelParticipantsFilter;
  offset: number;
  limit: number;
  hash: bigint;

  protected get [id]() {
    return 0x77CED9D0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["filter", types.TypeChannelParticipantsFilter, "ChannelParticipantsFilter"],
      ["offset", "number", "int"],
      ["limit", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.filter, types.TypeChannelParticipantsFilter, "ChannelParticipantsFilter"],
      [this.offset, "number", "int"],
      [this.limit, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; filter: types.TypeChannelParticipantsFilter; offset: number; limit: number; hash: bigint }) {
    super();
    this.channel = params.channel;
    this.filter = params.filter;
    this.offset = params.offset;
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

export class ChannelsGetParticipant extends Function<types.ChannelsChannelParticipant> {
  channel: types.TypeInputChannel;
  participant: types.TypeInputPeer;

  protected get [id]() {
    return 0xA0AB6CC6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["participant", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.participant, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; participant: types.TypeInputPeer }) {
    super();
    this.channel = params.channel;
    this.participant = params.participant;
  }
}

export class ChannelsGetChannels extends Function<types.TypeMessagesChats> {
  id: Array<types.TypeInputChannel>;

  protected get [id]() {
    return 0x0A7F6BBB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [types.TypeInputChannel], "Vector<InputChannel>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [types.TypeInputChannel], "Vector<InputChannel>"],
    ];
  }

  constructor(params: { id: Array<types.TypeInputChannel> }) {
    super();
    this.id = params.id;
  }
}

export class ChannelsGetFullChannel extends Function<types.MessagesChatFull> {
  channel: types.TypeInputChannel;

  protected get [id]() {
    return 0x08736A09;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class ChannelsCreateChannel extends Function<types.TypeUpdates> {
  broadcast?: true;
  megagroup?: true;
  forImport?: true;
  forum?: true;
  title: string;
  about: string;
  geoPoint?: types.TypeInputGeoPoint;
  address?: string;
  ttlPeriod?: number;

  protected get [id]() {
    return 0x91006707;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["broadcast", "true", "flags.0?true"],
      ["megagroup", "true", "flags.1?true"],
      ["forImport", "true", "flags.3?true"],
      ["forum", "true", "flags.5?true"],
      ["title", "string", "string"],
      ["about", "string", "string"],
      ["geoPoint", types.TypeInputGeoPoint, "flags.2?InputGeoPoint"],
      ["address", "string", "flags.2?string"],
      ["ttlPeriod", "number", "flags.4?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.broadcast ?? null, "true", "flags.0?true"],
      [this.megagroup ?? null, "true", "flags.1?true"],
      [this.forImport ?? null, "true", "flags.3?true"],
      [this.forum ?? null, "true", "flags.5?true"],
      [this.title, "string", "string"],
      [this.about, "string", "string"],
      [this.geoPoint ?? null, types.TypeInputGeoPoint, "flags.2?InputGeoPoint"],
      [this.address ?? null, "string", "flags.2?string"],
      [this.ttlPeriod ?? null, "number", "flags.4?int"],
    ];
  }

  constructor(params: { broadcast?: true; megagroup?: true; forImport?: true; forum?: true; title: string; about: string; geoPoint?: types.TypeInputGeoPoint; address?: string; ttlPeriod?: number }) {
    super();
    this.broadcast = params.broadcast;
    this.megagroup = params.megagroup;
    this.forImport = params.forImport;
    this.forum = params.forum;
    this.title = params.title;
    this.about = params.about;
    this.geoPoint = params.geoPoint;
    this.address = params.address;
    this.ttlPeriod = params.ttlPeriod;
  }
}

export class ChannelsEditAdmin extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  userId: types.TypeInputUser;
  adminRights: types.TypeChatAdminRights;
  rank: string;

  protected get [id]() {
    return 0xD33C8902;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["userId", types.TypeInputUser, "InputUser"],
      ["adminRights", types.TypeChatAdminRights, "ChatAdminRights"],
      ["rank", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.adminRights, types.TypeChatAdminRights, "ChatAdminRights"],
      [this.rank, "string", "string"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; userId: types.TypeInputUser; adminRights: types.TypeChatAdminRights; rank: string }) {
    super();
    this.channel = params.channel;
    this.userId = params.userId;
    this.adminRights = params.adminRights;
    this.rank = params.rank;
  }
}

export class ChannelsEditTitle extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  title: string;

  protected get [id]() {
    return 0x566DECD0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.title, "string", "string"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; title: string }) {
    super();
    this.channel = params.channel;
    this.title = params.title;
  }
}

export class ChannelsEditPhoto extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  photo: types.TypeInputChatPhoto;

  protected get [id]() {
    return 0xF12E57C9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["photo", types.TypeInputChatPhoto, "InputChatPhoto"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.photo, types.TypeInputChatPhoto, "InputChatPhoto"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; photo: types.TypeInputChatPhoto }) {
    super();
    this.channel = params.channel;
    this.photo = params.photo;
  }
}

export class ChannelsCheckUsername extends Function<boolean> {
  channel: types.TypeInputChannel;
  username: string;

  protected get [id]() {
    return 0x10E6BD2C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["username", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.username, "string", "string"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; username: string }) {
    super();
    this.channel = params.channel;
    this.username = params.username;
  }
}

export class ChannelsUpdateUsername extends Function<boolean> {
  channel: types.TypeInputChannel;
  username: string;

  protected get [id]() {
    return 0x3514B3DE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["username", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.username, "string", "string"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; username: string }) {
    super();
    this.channel = params.channel;
    this.username = params.username;
  }
}

export class ChannelsJoinChannel extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;

  protected get [id]() {
    return 0x24B524C5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class ChannelsLeaveChannel extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;

  protected get [id]() {
    return 0xF836AA95;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class ChannelsInviteToChannel extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  users: Array<types.TypeInputUser>;

  protected get [id]() {
    return 0x199F3A6C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["users", [types.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.users, [types.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; users: Array<types.TypeInputUser> }) {
    super();
    this.channel = params.channel;
    this.users = params.users;
  }
}

export class ChannelsDeleteChannel extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;

  protected get [id]() {
    return 0xC0111FE3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class ChannelsExportMessageLink extends Function<types.ExportedMessageLink> {
  grouped?: true;
  thread?: true;
  channel: types.TypeInputChannel;
  id: number;

  protected get [id]() {
    return 0xE63FADEB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["grouped", "true", "flags.0?true"],
      ["thread", "true", "flags.1?true"],
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.grouped ?? null, "true", "flags.0?true"],
      [this.thread ?? null, "true", "flags.1?true"],
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.id, "number", "int"],
    ];
  }

  constructor(params: { grouped?: true; thread?: true; channel: types.TypeInputChannel; id: number }) {
    super();
    this.grouped = params.grouped;
    this.thread = params.thread;
    this.channel = params.channel;
    this.id = params.id;
  }
}

export class ChannelsToggleSignatures extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0x1F69B606;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class ChannelsGetAdminedPublicChannels extends Function<types.TypeMessagesChats> {
  byLocation?: true;
  checkLimit?: true;

  protected get [id]() {
    return 0xF8B036AF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["byLocation", "true", "flags.0?true"],
      ["checkLimit", "true", "flags.1?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.byLocation ?? null, "true", "flags.0?true"],
      [this.checkLimit ?? null, "true", "flags.1?true"],
    ];
  }

  constructor(params: { byLocation?: true; checkLimit?: true }) {
    super();
    this.byLocation = params.byLocation;
    this.checkLimit = params.checkLimit;
  }
}

export class ChannelsEditBanned extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  participant: types.TypeInputPeer;
  bannedRights: types.TypeChatBannedRights;

  protected get [id]() {
    return 0x96E6CD81;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["participant", types.TypeInputPeer, "InputPeer"],
      ["bannedRights", types.TypeChatBannedRights, "ChatBannedRights"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.participant, types.TypeInputPeer, "InputPeer"],
      [this.bannedRights, types.TypeChatBannedRights, "ChatBannedRights"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; participant: types.TypeInputPeer; bannedRights: types.TypeChatBannedRights }) {
    super();
    this.channel = params.channel;
    this.participant = params.participant;
    this.bannedRights = params.bannedRights;
  }
}

export class ChannelsGetAdminLog extends Function<types.ChannelsAdminLogResults> {
  channel: types.TypeInputChannel;
  q: string;
  eventsFilter?: types.TypeChannelAdminLogEventsFilter;
  admins?: Array<types.TypeInputUser>;
  maxId: bigint;
  minId: bigint;
  limit: number;

  protected get [id]() {
    return 0x33DDF480;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["q", "string", "string"],
      ["eventsFilter", types.TypeChannelAdminLogEventsFilter, "flags.0?ChannelAdminLogEventsFilter"],
      ["admins", [types.TypeInputUser], "flags.1?Vector<InputUser>"],
      ["maxId", "bigint", "long"],
      ["minId", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.q, "string", "string"],
      [this.eventsFilter ?? null, types.TypeChannelAdminLogEventsFilter, "flags.0?ChannelAdminLogEventsFilter"],
      [this.admins ?? null, [types.TypeInputUser], "flags.1?Vector<InputUser>"],
      [this.maxId, "bigint", "long"],
      [this.minId, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; q: string; eventsFilter?: types.TypeChannelAdminLogEventsFilter; admins?: Array<types.TypeInputUser>; maxId: bigint; minId: bigint; limit: number }) {
    super();
    this.channel = params.channel;
    this.q = params.q;
    this.eventsFilter = params.eventsFilter;
    this.admins = params.admins;
    this.maxId = params.maxId;
    this.minId = params.minId;
    this.limit = params.limit;
  }
}

export class ChannelsSetStickers extends Function<boolean> {
  channel: types.TypeInputChannel;
  stickerset: types.TypeInputStickerSet;

  protected get [id]() {
    return 0xEA8CA4F9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["stickerset", types.TypeInputStickerSet, "InputStickerSet"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.stickerset, types.TypeInputStickerSet, "InputStickerSet"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; stickerset: types.TypeInputStickerSet }) {
    super();
    this.channel = params.channel;
    this.stickerset = params.stickerset;
  }
}

export class ChannelsReadMessageContents extends Function<boolean> {
  channel: types.TypeInputChannel;
  id: Array<number>;

  protected get [id]() {
    return 0xEAB5DC38;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; id: Array<number> }) {
    super();
    this.channel = params.channel;
    this.id = params.id;
  }
}

export class ChannelsDeleteHistory extends Function<types.TypeUpdates> {
  forEveryone?: true;
  channel: types.TypeInputChannel;
  maxId: number;

  protected get [id]() {
    return 0x9BAA9647;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["forEveryone", "true", "flags.0?true"],
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["maxId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.forEveryone ?? null, "true", "flags.0?true"],
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.maxId, "number", "int"],
    ];
  }

  constructor(params: { forEveryone?: true; channel: types.TypeInputChannel; maxId: number }) {
    super();
    this.forEveryone = params.forEveryone;
    this.channel = params.channel;
    this.maxId = params.maxId;
  }
}

export class ChannelsTogglePreHistoryHidden extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0xEABBB94C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class ChannelsGetLeftChannels extends Function<types.TypeMessagesChats> {
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

export class ChannelsGetGroupsForDiscussion extends Function<types.TypeMessagesChats> {
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

export class ChannelsSetDiscussionGroup extends Function<boolean> {
  broadcast: types.TypeInputChannel;
  group: types.TypeInputChannel;

  protected get [id]() {
    return 0x40582BB2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["broadcast", types.TypeInputChannel, "InputChannel"],
      ["group", types.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.broadcast, types.TypeInputChannel, "InputChannel"],
      [this.group, types.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { broadcast: types.TypeInputChannel; group: types.TypeInputChannel }) {
    super();
    this.broadcast = params.broadcast;
    this.group = params.group;
  }
}

export class ChannelsEditCreator extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  userId: types.TypeInputUser;
  password: types.TypeInputCheckPasswordSRP;

  protected get [id]() {
    return 0x8F38CD1F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["userId", types.TypeInputUser, "InputUser"],
      ["password", types.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.password, types.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; userId: types.TypeInputUser; password: types.TypeInputCheckPasswordSRP }) {
    super();
    this.channel = params.channel;
    this.userId = params.userId;
    this.password = params.password;
  }
}

export class ChannelsEditLocation extends Function<boolean> {
  channel: types.TypeInputChannel;
  geoPoint: types.TypeInputGeoPoint;
  address: string;

  protected get [id]() {
    return 0x58E63F6D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["geoPoint", types.TypeInputGeoPoint, "InputGeoPoint"],
      ["address", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.geoPoint, types.TypeInputGeoPoint, "InputGeoPoint"],
      [this.address, "string", "string"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; geoPoint: types.TypeInputGeoPoint; address: string }) {
    super();
    this.channel = params.channel;
    this.geoPoint = params.geoPoint;
    this.address = params.address;
  }
}

export class ChannelsToggleSlowMode extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  seconds: number;

  protected get [id]() {
    return 0xEDD49EF0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["seconds", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.seconds, "number", "int"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; seconds: number }) {
    super();
    this.channel = params.channel;
    this.seconds = params.seconds;
  }
}

export class ChannelsGetInactiveChannels extends Function<types.MessagesInactiveChats> {
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

export class ChannelsConvertToGigagroup extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;

  protected get [id]() {
    return 0x0B290C69;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class ChannelsViewSponsoredMessage extends Function<boolean> {
  channel: types.TypeInputChannel;
  randomId: Uint8Array;

  protected get [id]() {
    return 0xBEAEDB94;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["randomId", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.randomId, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; randomId: Uint8Array }) {
    super();
    this.channel = params.channel;
    this.randomId = params.randomId;
  }
}

export class ChannelsGetSponsoredMessages extends Function<types.TypeMessagesSponsoredMessages> {
  channel: types.TypeInputChannel;

  protected get [id]() {
    return 0xEC210FBF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class ChannelsGetSendAs extends Function<types.ChannelsSendAsPeers> {
  peer: types.TypeInputPeer;

  protected get [id]() {
    return 0x0DC770EE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class ChannelsDeleteParticipantHistory extends Function<types.MessagesAffectedHistory> {
  channel: types.TypeInputChannel;
  participant: types.TypeInputPeer;

  protected get [id]() {
    return 0x367544DB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["participant", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.participant, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; participant: types.TypeInputPeer }) {
    super();
    this.channel = params.channel;
    this.participant = params.participant;
  }
}

export class ChannelsToggleJoinToSend extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0xE4CB9580;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class ChannelsToggleJoinRequest extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0x4C2985B6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class ChannelsReorderUsernames extends Function<boolean> {
  channel: types.TypeInputChannel;
  order: Array<string>;

  protected get [id]() {
    return 0xB45CED1D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["order", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.order, ["string"], "Vector<string>"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; order: Array<string> }) {
    super();
    this.channel = params.channel;
    this.order = params.order;
  }
}

export class ChannelsToggleUsername extends Function<boolean> {
  channel: types.TypeInputChannel;
  username: string;
  active: boolean;

  protected get [id]() {
    return 0x50F24105;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["username", "string", "string"],
      ["active", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.username, "string", "string"],
      [this.active, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; username: string; active: boolean }) {
    super();
    this.channel = params.channel;
    this.username = params.username;
    this.active = params.active;
  }
}

export class ChannelsDeactivateAllUsernames extends Function<boolean> {
  channel: types.TypeInputChannel;

  protected get [id]() {
    return 0x0A245DD3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class ChannelsToggleForum extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0xA4298B29;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class ChannelsCreateForumTopic extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  title: string;
  iconColor?: number;
  iconEmojiId?: bigint;
  randomId: bigint;
  sendAs?: types.TypeInputPeer;

  protected get [id]() {
    return 0xF40C0224;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["title", "string", "string"],
      ["iconColor", "number", "flags.0?int"],
      ["iconEmojiId", "bigint", "flags.3?long"],
      ["randomId", "bigint", "long"],
      ["sendAs", types.TypeInputPeer, "flags.2?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.title, "string", "string"],
      [this.iconColor ?? null, "number", "flags.0?int"],
      [this.iconEmojiId ?? null, "bigint", "flags.3?long"],
      [this.randomId, "bigint", "long"],
      [this.sendAs ?? null, types.TypeInputPeer, "flags.2?InputPeer"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; title: string; iconColor?: number; iconEmojiId?: bigint; randomId: bigint; sendAs?: types.TypeInputPeer }) {
    super();
    this.channel = params.channel;
    this.title = params.title;
    this.iconColor = params.iconColor;
    this.iconEmojiId = params.iconEmojiId;
    this.randomId = params.randomId;
    this.sendAs = params.sendAs;
  }
}

export class ChannelsGetForumTopics extends Function<types.MessagesForumTopics> {
  channel: types.TypeInputChannel;
  q?: string;
  offsetDate: number;
  offsetId: number;
  offsetTopic: number;
  limit: number;

  protected get [id]() {
    return 0x0DE560D1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["q", "string", "flags.0?string"],
      ["offsetDate", "number", "int"],
      ["offsetId", "number", "int"],
      ["offsetTopic", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.q ?? null, "string", "flags.0?string"],
      [this.offsetDate, "number", "int"],
      [this.offsetId, "number", "int"],
      [this.offsetTopic, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; q?: string; offsetDate: number; offsetId: number; offsetTopic: number; limit: number }) {
    super();
    this.channel = params.channel;
    this.q = params.q;
    this.offsetDate = params.offsetDate;
    this.offsetId = params.offsetId;
    this.offsetTopic = params.offsetTopic;
    this.limit = params.limit;
  }
}

export class ChannelsGetForumTopicsByID extends Function<types.MessagesForumTopics> {
  channel: types.TypeInputChannel;
  topics: Array<number>;

  protected get [id]() {
    return 0xB0831EB9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["topics", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.topics, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; topics: Array<number> }) {
    super();
    this.channel = params.channel;
    this.topics = params.topics;
  }
}

export class ChannelsEditForumTopic extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  topicId: number;
  title?: string;
  iconEmojiId?: bigint;
  closed?: boolean;
  hidden?: boolean;

  protected get [id]() {
    return 0xF4DFA185;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["topicId", "number", "int"],
      ["title", "string", "flags.0?string"],
      ["iconEmojiId", "bigint", "flags.1?long"],
      ["closed", "boolean", "flags.2?Bool"],
      ["hidden", "boolean", "flags.3?Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.topicId, "number", "int"],
      [this.title ?? null, "string", "flags.0?string"],
      [this.iconEmojiId ?? null, "bigint", "flags.1?long"],
      [this.closed ?? null, "boolean", "flags.2?Bool"],
      [this.hidden ?? null, "boolean", "flags.3?Bool"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; topicId: number; title?: string; iconEmojiId?: bigint; closed?: boolean; hidden?: boolean }) {
    super();
    this.channel = params.channel;
    this.topicId = params.topicId;
    this.title = params.title;
    this.iconEmojiId = params.iconEmojiId;
    this.closed = params.closed;
    this.hidden = params.hidden;
  }
}

export class ChannelsUpdatePinnedForumTopic extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  topicId: number;
  pinned: boolean;

  protected get [id]() {
    return 0x6C2D9026;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["topicId", "number", "int"],
      ["pinned", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.topicId, "number", "int"],
      [this.pinned, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; topicId: number; pinned: boolean }) {
    super();
    this.channel = params.channel;
    this.topicId = params.topicId;
    this.pinned = params.pinned;
  }
}

export class ChannelsDeleteTopicHistory extends Function<types.MessagesAffectedHistory> {
  channel: types.TypeInputChannel;
  topMsgId: number;

  protected get [id]() {
    return 0x34435F2D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["topMsgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.topMsgId, "number", "int"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; topMsgId: number }) {
    super();
    this.channel = params.channel;
    this.topMsgId = params.topMsgId;
  }
}

export class ChannelsReorderPinnedForumTopics extends Function<types.TypeUpdates> {
  force?: true;
  channel: types.TypeInputChannel;
  order: Array<number>;

  protected get [id]() {
    return 0x2950A18F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["force", "true", "flags.0?true"],
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["order", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.force ?? null, "true", "flags.0?true"],
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.order, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { force?: true; channel: types.TypeInputChannel; order: Array<number> }) {
    super();
    this.force = params.force;
    this.channel = params.channel;
    this.order = params.order;
  }
}

export class ChannelsToggleAntiSpam extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0x68F3E4EB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class ChannelsReportAntiSpamFalsePositive extends Function<boolean> {
  channel: types.TypeInputChannel;
  msgId: number;

  protected get [id]() {
    return 0xA850A693;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; msgId: number }) {
    super();
    this.channel = params.channel;
    this.msgId = params.msgId;
  }
}

export class ChannelsToggleParticipantsHidden extends Function<types.TypeUpdates> {
  channel: types.TypeInputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0x6A6E7854;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class ChannelsClickSponsoredMessage extends Function<boolean> {
  channel: types.TypeInputChannel;
  randomId: Uint8Array;

  protected get [id]() {
    return 0x18AFBC93;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["randomId", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.randomId, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; randomId: Uint8Array }) {
    super();
    this.channel = params.channel;
    this.randomId = params.randomId;
  }
}

export class BotsSendCustomRequest extends Function<types.DataJSON> {
  customMethod: string;
  params: types.TypeDataJSON;

  protected get [id]() {
    return 0xAA2769ED;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["customMethod", "string", "string"],
      ["params", types.TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.customMethod, "string", "string"],
      [this.params, types.TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { customMethod: string; params: types.TypeDataJSON }) {
    super();
    this.customMethod = params.customMethod;
    this.params = params.params;
  }
}

export class BotsAnswerWebhookJSONQuery extends Function<boolean> {
  queryId: bigint;
  data: types.TypeDataJSON;

  protected get [id]() {
    return 0xE6213F4D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["queryId", "bigint", "long"],
      ["data", types.TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.queryId, "bigint", "long"],
      [this.data, types.TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { queryId: bigint; data: types.TypeDataJSON }) {
    super();
    this.queryId = params.queryId;
    this.data = params.data;
  }
}

export class BotsSetBotCommands extends Function<boolean> {
  scope: types.TypeBotCommandScope;
  langCode: string;
  commands: Array<types.TypeBotCommand>;

  protected get [id]() {
    return 0x0517165A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["scope", types.TypeBotCommandScope, "BotCommandScope"],
      ["langCode", "string", "string"],
      ["commands", [types.TypeBotCommand], "Vector<BotCommand>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.scope, types.TypeBotCommandScope, "BotCommandScope"],
      [this.langCode, "string", "string"],
      [this.commands, [types.TypeBotCommand], "Vector<BotCommand>"],
    ];
  }

  constructor(params: { scope: types.TypeBotCommandScope; langCode: string; commands: Array<types.TypeBotCommand> }) {
    super();
    this.scope = params.scope;
    this.langCode = params.langCode;
    this.commands = params.commands;
  }
}

export class BotsResetBotCommands extends Function<boolean> {
  scope: types.TypeBotCommandScope;
  langCode: string;

  protected get [id]() {
    return 0x3D8DE0F9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["scope", types.TypeBotCommandScope, "BotCommandScope"],
      ["langCode", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.scope, types.TypeBotCommandScope, "BotCommandScope"],
      [this.langCode, "string", "string"],
    ];
  }

  constructor(params: { scope: types.TypeBotCommandScope; langCode: string }) {
    super();
    this.scope = params.scope;
    this.langCode = params.langCode;
  }
}

export class BotsGetBotCommands extends Function<types.BotCommand[]> {
  scope: types.TypeBotCommandScope;
  langCode: string;

  protected get [id]() {
    return 0xE34C0DD6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["scope", types.TypeBotCommandScope, "BotCommandScope"],
      ["langCode", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.scope, types.TypeBotCommandScope, "BotCommandScope"],
      [this.langCode, "string", "string"],
    ];
  }

  constructor(params: { scope: types.TypeBotCommandScope; langCode: string }) {
    super();
    this.scope = params.scope;
    this.langCode = params.langCode;
  }
}

export class BotsSetBotMenuButton extends Function<boolean> {
  userId: types.TypeInputUser;
  button: types.TypeBotMenuButton;

  protected get [id]() {
    return 0x4504D54F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", types.TypeInputUser, "InputUser"],
      ["button", types.TypeBotMenuButton, "BotMenuButton"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.button, types.TypeBotMenuButton, "BotMenuButton"],
    ];
  }

  constructor(params: { userId: types.TypeInputUser; button: types.TypeBotMenuButton }) {
    super();
    this.userId = params.userId;
    this.button = params.button;
  }
}

export class BotsGetBotMenuButton extends Function<types.TypeBotMenuButton> {
  userId: types.TypeInputUser;

  protected get [id]() {
    return 0x9C60EB28;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", types.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, types.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { userId: types.TypeInputUser }) {
    super();
    this.userId = params.userId;
  }
}

export class BotsSetBotBroadcastDefaultAdminRights extends Function<boolean> {
  adminRights: types.TypeChatAdminRights;

  protected get [id]() {
    return 0x788464E1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["adminRights", types.TypeChatAdminRights, "ChatAdminRights"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.adminRights, types.TypeChatAdminRights, "ChatAdminRights"],
    ];
  }

  constructor(params: { adminRights: types.TypeChatAdminRights }) {
    super();
    this.adminRights = params.adminRights;
  }
}

export class BotsSetBotGroupDefaultAdminRights extends Function<boolean> {
  adminRights: types.TypeChatAdminRights;

  protected get [id]() {
    return 0x925EC9EA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["adminRights", types.TypeChatAdminRights, "ChatAdminRights"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.adminRights, types.TypeChatAdminRights, "ChatAdminRights"],
    ];
  }

  constructor(params: { adminRights: types.TypeChatAdminRights }) {
    super();
    this.adminRights = params.adminRights;
  }
}

export class BotsSetBotInfo extends Function<boolean> {
  bot?: types.TypeInputUser;
  langCode: string;
  name?: string;
  about?: string;
  description?: string;

  protected get [id]() {
    return 0x10CF3123;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["bot", types.TypeInputUser, "flags.2?InputUser"],
      ["langCode", "string", "string"],
      ["name", "string", "flags.3?string"],
      ["about", "string", "flags.0?string"],
      ["description", "string", "flags.1?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.bot ?? null, types.TypeInputUser, "flags.2?InputUser"],
      [this.langCode, "string", "string"],
      [this.name ?? null, "string", "flags.3?string"],
      [this.about ?? null, "string", "flags.0?string"],
      [this.description ?? null, "string", "flags.1?string"],
    ];
  }

  constructor(params: { bot?: types.TypeInputUser; langCode: string; name?: string; about?: string; description?: string }) {
    super();
    this.bot = params.bot;
    this.langCode = params.langCode;
    this.name = params.name;
    this.about = params.about;
    this.description = params.description;
  }
}

export class BotsGetBotInfo extends Function<types.BotsBotInfo> {
  bot?: types.TypeInputUser;
  langCode: string;

  protected get [id]() {
    return 0xDCD914FD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["bot", types.TypeInputUser, "flags.0?InputUser"],
      ["langCode", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.bot ?? null, types.TypeInputUser, "flags.0?InputUser"],
      [this.langCode, "string", "string"],
    ];
  }

  constructor(params: { bot?: types.TypeInputUser; langCode: string }) {
    super();
    this.bot = params.bot;
    this.langCode = params.langCode;
  }
}

export class BotsReorderUsernames extends Function<boolean> {
  bot: types.TypeInputUser;
  order: Array<string>;

  protected get [id]() {
    return 0x9709B1C2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", types.TypeInputUser, "InputUser"],
      ["order", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, types.TypeInputUser, "InputUser"],
      [this.order, ["string"], "Vector<string>"],
    ];
  }

  constructor(params: { bot: types.TypeInputUser; order: Array<string> }) {
    super();
    this.bot = params.bot;
    this.order = params.order;
  }
}

export class BotsToggleUsername extends Function<boolean> {
  bot: types.TypeInputUser;
  username: string;
  active: boolean;

  protected get [id]() {
    return 0x053CA973;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", types.TypeInputUser, "InputUser"],
      ["username", "string", "string"],
      ["active", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, types.TypeInputUser, "InputUser"],
      [this.username, "string", "string"],
      [this.active, "boolean", "Bool"],
    ];
  }

  constructor(params: { bot: types.TypeInputUser; username: string; active: boolean }) {
    super();
    this.bot = params.bot;
    this.username = params.username;
    this.active = params.active;
  }
}

export class PaymentsGetPaymentForm extends Function<types.PaymentsPaymentForm> {
  invoice: types.TypeInputInvoice;
  themeParams?: types.TypeDataJSON;

  protected get [id]() {
    return 0x37148DBB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["invoice", types.TypeInputInvoice, "InputInvoice"],
      ["themeParams", types.TypeDataJSON, "flags.0?DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.invoice, types.TypeInputInvoice, "InputInvoice"],
      [this.themeParams ?? null, types.TypeDataJSON, "flags.0?DataJSON"],
    ];
  }

  constructor(params: { invoice: types.TypeInputInvoice; themeParams?: types.TypeDataJSON }) {
    super();
    this.invoice = params.invoice;
    this.themeParams = params.themeParams;
  }
}

export class PaymentsGetPaymentReceipt extends Function<types.PaymentsPaymentReceipt> {
  peer: types.TypeInputPeer;
  msgId: number;

  protected get [id]() {
    return 0x2478D1CC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; msgId: number }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
  }
}

export class PaymentsValidateRequestedInfo extends Function<types.PaymentsValidatedRequestedInfo> {
  save?: true;
  invoice: types.TypeInputInvoice;
  info: types.TypePaymentRequestedInfo;

  protected get [id]() {
    return 0xB6C8F12B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["save", "true", "flags.0?true"],
      ["invoice", types.TypeInputInvoice, "InputInvoice"],
      ["info", types.TypePaymentRequestedInfo, "PaymentRequestedInfo"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.save ?? null, "true", "flags.0?true"],
      [this.invoice, types.TypeInputInvoice, "InputInvoice"],
      [this.info, types.TypePaymentRequestedInfo, "PaymentRequestedInfo"],
    ];
  }

  constructor(params: { save?: true; invoice: types.TypeInputInvoice; info: types.TypePaymentRequestedInfo }) {
    super();
    this.save = params.save;
    this.invoice = params.invoice;
    this.info = params.info;
  }
}

export class PaymentsSendPaymentForm extends Function<types.TypePaymentsPaymentResult> {
  formId: bigint;
  invoice: types.TypeInputInvoice;
  requestedInfoId?: string;
  shippingOptionId?: string;
  credentials: types.TypeInputPaymentCredentials;
  tipAmount?: bigint;

  protected get [id]() {
    return 0x2D03522F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["formId", "bigint", "long"],
      ["invoice", types.TypeInputInvoice, "InputInvoice"],
      ["requestedInfoId", "string", "flags.0?string"],
      ["shippingOptionId", "string", "flags.1?string"],
      ["credentials", types.TypeInputPaymentCredentials, "InputPaymentCredentials"],
      ["tipAmount", "bigint", "flags.2?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.formId, "bigint", "long"],
      [this.invoice, types.TypeInputInvoice, "InputInvoice"],
      [this.requestedInfoId ?? null, "string", "flags.0?string"],
      [this.shippingOptionId ?? null, "string", "flags.1?string"],
      [this.credentials, types.TypeInputPaymentCredentials, "InputPaymentCredentials"],
      [this.tipAmount ?? null, "bigint", "flags.2?long"],
    ];
  }

  constructor(params: { formId: bigint; invoice: types.TypeInputInvoice; requestedInfoId?: string; shippingOptionId?: string; credentials: types.TypeInputPaymentCredentials; tipAmount?: bigint }) {
    super();
    this.formId = params.formId;
    this.invoice = params.invoice;
    this.requestedInfoId = params.requestedInfoId;
    this.shippingOptionId = params.shippingOptionId;
    this.credentials = params.credentials;
    this.tipAmount = params.tipAmount;
  }
}

export class PaymentsGetSavedInfo extends Function<types.PaymentsSavedInfo> {
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

export class PaymentsClearSavedInfo extends Function<boolean> {
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

  constructor(params: { credentials?: true; info?: true }) {
    super();
    this.credentials = params.credentials;
    this.info = params.info;
  }
}

export class PaymentsGetBankCardData extends Function<types.PaymentsBankCardData> {
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

export class PaymentsExportInvoice extends Function<types.PaymentsExportedInvoice> {
  invoiceMedia: types.TypeInputMedia;

  protected get [id]() {
    return 0x0F91B065;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["invoiceMedia", types.TypeInputMedia, "InputMedia"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.invoiceMedia, types.TypeInputMedia, "InputMedia"],
    ];
  }

  constructor(params: { invoiceMedia: types.TypeInputMedia }) {
    super();
    this.invoiceMedia = params.invoiceMedia;
  }
}

export class PaymentsAssignAppStoreTransaction extends Function<types.TypeUpdates> {
  receipt: Uint8Array;
  purpose: types.TypeInputStorePaymentPurpose;

  protected get [id]() {
    return 0x80ED747D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["receipt", Uint8Array, "bytes"],
      ["purpose", types.TypeInputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.receipt, Uint8Array, "bytes"],
      [this.purpose, types.TypeInputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  constructor(params: { receipt: Uint8Array; purpose: types.TypeInputStorePaymentPurpose }) {
    super();
    this.receipt = params.receipt;
    this.purpose = params.purpose;
  }
}

export class PaymentsAssignPlayMarketTransaction extends Function<types.TypeUpdates> {
  receipt: types.TypeDataJSON;
  purpose: types.TypeInputStorePaymentPurpose;

  protected get [id]() {
    return 0xDFFD50D3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["receipt", types.TypeDataJSON, "DataJSON"],
      ["purpose", types.TypeInputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.receipt, types.TypeDataJSON, "DataJSON"],
      [this.purpose, types.TypeInputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  constructor(params: { receipt: types.TypeDataJSON; purpose: types.TypeInputStorePaymentPurpose }) {
    super();
    this.receipt = params.receipt;
    this.purpose = params.purpose;
  }
}

export class PaymentsCanPurchasePremium extends Function<boolean> {
  purpose: types.TypeInputStorePaymentPurpose;

  protected get [id]() {
    return 0x9FC19EB6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["purpose", types.TypeInputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.purpose, types.TypeInputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  constructor(params: { purpose: types.TypeInputStorePaymentPurpose }) {
    super();
    this.purpose = params.purpose;
  }
}

export class StickersCreateStickerSet extends Function<types.TypeMessagesStickerSet> {
  masks?: true;
  animated?: true;
  videos?: true;
  emojis?: true;
  textColor?: true;
  userId: types.TypeInputUser;
  title: string;
  shortName: string;
  thumb?: types.TypeInputDocument;
  stickers: Array<types.TypeInputStickerSetItem>;
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
      ["textColor", "true", "flags.6?true"],
      ["userId", types.TypeInputUser, "InputUser"],
      ["title", "string", "string"],
      ["shortName", "string", "string"],
      ["thumb", types.TypeInputDocument, "flags.2?InputDocument"],
      ["stickers", [types.TypeInputStickerSetItem], "Vector<InputStickerSetItem>"],
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
      [this.textColor ?? null, "true", "flags.6?true"],
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.title, "string", "string"],
      [this.shortName, "string", "string"],
      [this.thumb ?? null, types.TypeInputDocument, "flags.2?InputDocument"],
      [this.stickers, [types.TypeInputStickerSetItem], "Vector<InputStickerSetItem>"],
      [this.software ?? null, "string", "flags.3?string"],
    ];
  }

  constructor(params: { masks?: true; animated?: true; videos?: true; emojis?: true; textColor?: true; userId: types.TypeInputUser; title: string; shortName: string; thumb?: types.TypeInputDocument; stickers: Array<types.TypeInputStickerSetItem>; software?: string }) {
    super();
    this.masks = params.masks;
    this.animated = params.animated;
    this.videos = params.videos;
    this.emojis = params.emojis;
    this.textColor = params.textColor;
    this.userId = params.userId;
    this.title = params.title;
    this.shortName = params.shortName;
    this.thumb = params.thumb;
    this.stickers = params.stickers;
    this.software = params.software;
  }
}

export class StickersRemoveStickerFromSet extends Function<types.TypeMessagesStickerSet> {
  sticker: types.TypeInputDocument;

  protected get [id]() {
    return 0xF7760F51;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["sticker", types.TypeInputDocument, "InputDocument"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.sticker, types.TypeInputDocument, "InputDocument"],
    ];
  }

  constructor(params: { sticker: types.TypeInputDocument }) {
    super();
    this.sticker = params.sticker;
  }
}

export class StickersChangeStickerPosition extends Function<types.TypeMessagesStickerSet> {
  sticker: types.TypeInputDocument;
  position: number;

  protected get [id]() {
    return 0xFFB6D4CA;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["sticker", types.TypeInputDocument, "InputDocument"],
      ["position", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.sticker, types.TypeInputDocument, "InputDocument"],
      [this.position, "number", "int"],
    ];
  }

  constructor(params: { sticker: types.TypeInputDocument; position: number }) {
    super();
    this.sticker = params.sticker;
    this.position = params.position;
  }
}

export class StickersAddStickerToSet extends Function<types.TypeMessagesStickerSet> {
  stickerset: types.TypeInputStickerSet;
  sticker: types.TypeInputStickerSetItem;

  protected get [id]() {
    return 0x8653FEBE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", types.TypeInputStickerSet, "InputStickerSet"],
      ["sticker", types.TypeInputStickerSetItem, "InputStickerSetItem"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, types.TypeInputStickerSet, "InputStickerSet"],
      [this.sticker, types.TypeInputStickerSetItem, "InputStickerSetItem"],
    ];
  }

  constructor(params: { stickerset: types.TypeInputStickerSet; sticker: types.TypeInputStickerSetItem }) {
    super();
    this.stickerset = params.stickerset;
    this.sticker = params.sticker;
  }
}

export class StickersSetStickerSetThumb extends Function<types.TypeMessagesStickerSet> {
  stickerset: types.TypeInputStickerSet;
  thumb?: types.TypeInputDocument;
  thumbDocumentId?: bigint;

  protected get [id]() {
    return 0xA76A5392;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["stickerset", types.TypeInputStickerSet, "InputStickerSet"],
      ["thumb", types.TypeInputDocument, "flags.0?InputDocument"],
      ["thumbDocumentId", "bigint", "flags.1?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.stickerset, types.TypeInputStickerSet, "InputStickerSet"],
      [this.thumb ?? null, types.TypeInputDocument, "flags.0?InputDocument"],
      [this.thumbDocumentId ?? null, "bigint", "flags.1?long"],
    ];
  }

  constructor(params: { stickerset: types.TypeInputStickerSet; thumb?: types.TypeInputDocument; thumbDocumentId?: bigint }) {
    super();
    this.stickerset = params.stickerset;
    this.thumb = params.thumb;
    this.thumbDocumentId = params.thumbDocumentId;
  }
}

export class StickersCheckShortName extends Function<boolean> {
  shortName: string;

  protected get [id]() {
    return 0x284B3639;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["shortName", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.shortName, "string", "string"],
    ];
  }

  constructor(params: { shortName: string }) {
    super();
    this.shortName = params.shortName;
  }
}

export class StickersSuggestShortName extends Function<types.StickersSuggestedShortName> {
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

export class StickersChangeSticker extends Function<types.TypeMessagesStickerSet> {
  sticker: types.TypeInputDocument;
  emoji?: string;
  maskCoords?: types.TypeMaskCoords;
  keywords?: string;

  protected get [id]() {
    return 0xF5537EBC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["sticker", types.TypeInputDocument, "InputDocument"],
      ["emoji", "string", "flags.0?string"],
      ["maskCoords", types.TypeMaskCoords, "flags.1?MaskCoords"],
      ["keywords", "string", "flags.2?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.sticker, types.TypeInputDocument, "InputDocument"],
      [this.emoji ?? null, "string", "flags.0?string"],
      [this.maskCoords ?? null, types.TypeMaskCoords, "flags.1?MaskCoords"],
      [this.keywords ?? null, "string", "flags.2?string"],
    ];
  }

  constructor(params: { sticker: types.TypeInputDocument; emoji?: string; maskCoords?: types.TypeMaskCoords; keywords?: string }) {
    super();
    this.sticker = params.sticker;
    this.emoji = params.emoji;
    this.maskCoords = params.maskCoords;
    this.keywords = params.keywords;
  }
}

export class StickersRenameStickerSet extends Function<types.TypeMessagesStickerSet> {
  stickerset: types.TypeInputStickerSet;
  title: string;

  protected get [id]() {
    return 0x124B1C00;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", types.TypeInputStickerSet, "InputStickerSet"],
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, types.TypeInputStickerSet, "InputStickerSet"],
      [this.title, "string", "string"],
    ];
  }

  constructor(params: { stickerset: types.TypeInputStickerSet; title: string }) {
    super();
    this.stickerset = params.stickerset;
    this.title = params.title;
  }
}

export class StickersDeleteStickerSet extends Function<boolean> {
  stickerset: types.TypeInputStickerSet;

  protected get [id]() {
    return 0x87704394;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", types.TypeInputStickerSet, "InputStickerSet"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, types.TypeInputStickerSet, "InputStickerSet"],
    ];
  }

  constructor(params: { stickerset: types.TypeInputStickerSet }) {
    super();
    this.stickerset = params.stickerset;
  }
}

export class PhoneGetCallConfig extends Function<types.DataJSON> {
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

export class PhoneRequestCall extends Function<types.PhonePhoneCall> {
  video?: true;
  userId: types.TypeInputUser;
  randomId: number;
  gAHash: Uint8Array;
  protocol: types.TypePhoneCallProtocol;

  protected get [id]() {
    return 0x42FF96ED;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["video", "true", "flags.0?true"],
      ["userId", types.TypeInputUser, "InputUser"],
      ["randomId", "number", "int"],
      ["gAHash", Uint8Array, "bytes"],
      ["protocol", types.TypePhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.video ?? null, "true", "flags.0?true"],
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.randomId, "number", "int"],
      [this.gAHash, Uint8Array, "bytes"],
      [this.protocol, types.TypePhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  constructor(params: { video?: true; userId: types.TypeInputUser; randomId: number; gAHash: Uint8Array; protocol: types.TypePhoneCallProtocol }) {
    super();
    this.video = params.video;
    this.userId = params.userId;
    this.randomId = params.randomId;
    this.gAHash = params.gAHash;
    this.protocol = params.protocol;
  }
}

export class PhoneAcceptCall extends Function<types.PhonePhoneCall> {
  peer: types.TypeInputPhoneCall;
  gB: Uint8Array;
  protocol: types.TypePhoneCallProtocol;

  protected get [id]() {
    return 0x3BD2B4A0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPhoneCall, "InputPhoneCall"],
      ["gB", Uint8Array, "bytes"],
      ["protocol", types.TypePhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPhoneCall, "InputPhoneCall"],
      [this.gB, Uint8Array, "bytes"],
      [this.protocol, types.TypePhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  constructor(params: { peer: types.TypeInputPhoneCall; gB: Uint8Array; protocol: types.TypePhoneCallProtocol }) {
    super();
    this.peer = params.peer;
    this.gB = params.gB;
    this.protocol = params.protocol;
  }
}

export class PhoneConfirmCall extends Function<types.PhonePhoneCall> {
  peer: types.TypeInputPhoneCall;
  gA: Uint8Array;
  keyFingerprint: bigint;
  protocol: types.TypePhoneCallProtocol;

  protected get [id]() {
    return 0x2EFE1722;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPhoneCall, "InputPhoneCall"],
      ["gA", Uint8Array, "bytes"],
      ["keyFingerprint", "bigint", "long"],
      ["protocol", types.TypePhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPhoneCall, "InputPhoneCall"],
      [this.gA, Uint8Array, "bytes"],
      [this.keyFingerprint, "bigint", "long"],
      [this.protocol, types.TypePhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  constructor(params: { peer: types.TypeInputPhoneCall; gA: Uint8Array; keyFingerprint: bigint; protocol: types.TypePhoneCallProtocol }) {
    super();
    this.peer = params.peer;
    this.gA = params.gA;
    this.keyFingerprint = params.keyFingerprint;
    this.protocol = params.protocol;
  }
}

export class PhoneReceivedCall extends Function<boolean> {
  peer: types.TypeInputPhoneCall;

  protected get [id]() {
    return 0x17D54F61;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPhoneCall, "InputPhoneCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPhoneCall, "InputPhoneCall"],
    ];
  }

  constructor(params: { peer: types.TypeInputPhoneCall }) {
    super();
    this.peer = params.peer;
  }
}

export class PhoneDiscardCall extends Function<types.TypeUpdates> {
  video?: true;
  peer: types.TypeInputPhoneCall;
  duration: number;
  reason: types.TypePhoneCallDiscardReason;
  connectionId: bigint;

  protected get [id]() {
    return 0xB2CBC1C0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["video", "true", "flags.0?true"],
      ["peer", types.TypeInputPhoneCall, "InputPhoneCall"],
      ["duration", "number", "int"],
      ["reason", types.TypePhoneCallDiscardReason, "PhoneCallDiscardReason"],
      ["connectionId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.video ?? null, "true", "flags.0?true"],
      [this.peer, types.TypeInputPhoneCall, "InputPhoneCall"],
      [this.duration, "number", "int"],
      [this.reason, types.TypePhoneCallDiscardReason, "PhoneCallDiscardReason"],
      [this.connectionId, "bigint", "long"],
    ];
  }

  constructor(params: { video?: true; peer: types.TypeInputPhoneCall; duration: number; reason: types.TypePhoneCallDiscardReason; connectionId: bigint }) {
    super();
    this.video = params.video;
    this.peer = params.peer;
    this.duration = params.duration;
    this.reason = params.reason;
    this.connectionId = params.connectionId;
  }
}

export class PhoneSetCallRating extends Function<types.TypeUpdates> {
  userInitiative?: true;
  peer: types.TypeInputPhoneCall;
  rating: number;
  comment: string;

  protected get [id]() {
    return 0x59EAD627;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["userInitiative", "true", "flags.0?true"],
      ["peer", types.TypeInputPhoneCall, "InputPhoneCall"],
      ["rating", "number", "int"],
      ["comment", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.userInitiative ?? null, "true", "flags.0?true"],
      [this.peer, types.TypeInputPhoneCall, "InputPhoneCall"],
      [this.rating, "number", "int"],
      [this.comment, "string", "string"],
    ];
  }

  constructor(params: { userInitiative?: true; peer: types.TypeInputPhoneCall; rating: number; comment: string }) {
    super();
    this.userInitiative = params.userInitiative;
    this.peer = params.peer;
    this.rating = params.rating;
    this.comment = params.comment;
  }
}

export class PhoneSaveCallDebug extends Function<boolean> {
  peer: types.TypeInputPhoneCall;
  debug: types.TypeDataJSON;

  protected get [id]() {
    return 0x277ADD7E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPhoneCall, "InputPhoneCall"],
      ["debug", types.TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPhoneCall, "InputPhoneCall"],
      [this.debug, types.TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { peer: types.TypeInputPhoneCall; debug: types.TypeDataJSON }) {
    super();
    this.peer = params.peer;
    this.debug = params.debug;
  }
}

export class PhoneSendSignalingData extends Function<boolean> {
  peer: types.TypeInputPhoneCall;
  data: Uint8Array;

  protected get [id]() {
    return 0xFF7A9383;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPhoneCall, "InputPhoneCall"],
      ["data", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPhoneCall, "InputPhoneCall"],
      [this.data, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { peer: types.TypeInputPhoneCall; data: Uint8Array }) {
    super();
    this.peer = params.peer;
    this.data = params.data;
  }
}

export class PhoneCreateGroupCall extends Function<types.TypeUpdates> {
  rtmpStream?: true;
  peer: types.TypeInputPeer;
  randomId: number;
  title?: string;
  scheduleDate?: number;

  protected get [id]() {
    return 0x48CDC6D8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["rtmpStream", "true", "flags.2?true"],
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["randomId", "number", "int"],
      ["title", "string", "flags.0?string"],
      ["scheduleDate", "number", "flags.1?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.rtmpStream ?? null, "true", "flags.2?true"],
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.randomId, "number", "int"],
      [this.title ?? null, "string", "flags.0?string"],
      [this.scheduleDate ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(params: { rtmpStream?: true; peer: types.TypeInputPeer; randomId: number; title?: string; scheduleDate?: number }) {
    super();
    this.rtmpStream = params.rtmpStream;
    this.peer = params.peer;
    this.randomId = params.randomId;
    this.title = params.title;
    this.scheduleDate = params.scheduleDate;
  }
}

export class PhoneJoinGroupCall extends Function<types.TypeUpdates> {
  muted?: true;
  videoStopped?: true;
  call: types.TypeInputGroupCall;
  joinAs: types.TypeInputPeer;
  inviteHash?: string;
  params: types.TypeDataJSON;

  protected get [id]() {
    return 0xB132FF7B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["muted", "true", "flags.0?true"],
      ["videoStopped", "true", "flags.2?true"],
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
      ["joinAs", types.TypeInputPeer, "InputPeer"],
      ["inviteHash", "string", "flags.1?string"],
      ["params", types.TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.muted ?? null, "true", "flags.0?true"],
      [this.videoStopped ?? null, "true", "flags.2?true"],
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
      [this.joinAs, types.TypeInputPeer, "InputPeer"],
      [this.inviteHash ?? null, "string", "flags.1?string"],
      [this.params, types.TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { muted?: true; videoStopped?: true; call: types.TypeInputGroupCall; joinAs: types.TypeInputPeer; inviteHash?: string; params: types.TypeDataJSON }) {
    super();
    this.muted = params.muted;
    this.videoStopped = params.videoStopped;
    this.call = params.call;
    this.joinAs = params.joinAs;
    this.inviteHash = params.inviteHash;
    this.params = params.params;
  }
}

export class PhoneLeaveGroupCall extends Function<types.TypeUpdates> {
  call: types.TypeInputGroupCall;
  source: number;

  protected get [id]() {
    return 0x500377F9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
      ["source", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
      [this.source, "number", "int"],
    ];
  }

  constructor(params: { call: types.TypeInputGroupCall; source: number }) {
    super();
    this.call = params.call;
    this.source = params.source;
  }
}

export class PhoneInviteToGroupCall extends Function<types.TypeUpdates> {
  call: types.TypeInputGroupCall;
  users: Array<types.TypeInputUser>;

  protected get [id]() {
    return 0x7B393160;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
      ["users", [types.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
      [this.users, [types.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  constructor(params: { call: types.TypeInputGroupCall; users: Array<types.TypeInputUser> }) {
    super();
    this.call = params.call;
    this.users = params.users;
  }
}

export class PhoneDiscardGroupCall extends Function<types.TypeUpdates> {
  call: types.TypeInputGroupCall;

  protected get [id]() {
    return 0x7A777135;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  constructor(params: { call: types.TypeInputGroupCall }) {
    super();
    this.call = params.call;
  }
}

export class PhoneToggleGroupCallSettings extends Function<types.TypeUpdates> {
  resetInviteHash?: true;
  call: types.TypeInputGroupCall;
  joinMuted?: boolean;

  protected get [id]() {
    return 0x74BBB43D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["resetInviteHash", "true", "flags.1?true"],
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
      ["joinMuted", "boolean", "flags.0?Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.resetInviteHash ?? null, "true", "flags.1?true"],
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
      [this.joinMuted ?? null, "boolean", "flags.0?Bool"],
    ];
  }

  constructor(params: { resetInviteHash?: true; call: types.TypeInputGroupCall; joinMuted?: boolean }) {
    super();
    this.resetInviteHash = params.resetInviteHash;
    this.call = params.call;
    this.joinMuted = params.joinMuted;
  }
}

export class PhoneGetGroupCall extends Function<types.PhoneGroupCall> {
  call: types.TypeInputGroupCall;
  limit: number;

  protected get [id]() {
    return 0x041845DB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { call: types.TypeInputGroupCall; limit: number }) {
    super();
    this.call = params.call;
    this.limit = params.limit;
  }
}

export class PhoneGetGroupParticipants extends Function<types.PhoneGroupParticipants> {
  call: types.TypeInputGroupCall;
  ids: Array<types.TypeInputPeer>;
  sources: Array<number>;
  offset: string;
  limit: number;

  protected get [id]() {
    return 0xC558D8AB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
      ["ids", [types.TypeInputPeer], "Vector<InputPeer>"],
      ["sources", ["number"], "Vector<int>"],
      ["offset", "string", "string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
      [this.ids, [types.TypeInputPeer], "Vector<InputPeer>"],
      [this.sources, ["number"], "Vector<int>"],
      [this.offset, "string", "string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { call: types.TypeInputGroupCall; ids: Array<types.TypeInputPeer>; sources: Array<number>; offset: string; limit: number }) {
    super();
    this.call = params.call;
    this.ids = params.ids;
    this.sources = params.sources;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class PhoneCheckGroupCall extends Function<number[]> {
  call: types.TypeInputGroupCall;
  sources: Array<number>;

  protected get [id]() {
    return 0xB59CF977;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
      ["sources", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
      [this.sources, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { call: types.TypeInputGroupCall; sources: Array<number> }) {
    super();
    this.call = params.call;
    this.sources = params.sources;
  }
}

export class PhoneToggleGroupCallRecord extends Function<types.TypeUpdates> {
  start?: true;
  video?: true;
  call: types.TypeInputGroupCall;
  title?: string;
  videoPortrait?: boolean;

  protected get [id]() {
    return 0xF128C708;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["start", "true", "flags.0?true"],
      ["video", "true", "flags.2?true"],
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
      ["title", "string", "flags.1?string"],
      ["videoPortrait", "boolean", "flags.2?Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.start ?? null, "true", "flags.0?true"],
      [this.video ?? null, "true", "flags.2?true"],
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
      [this.title ?? null, "string", "flags.1?string"],
      [this.videoPortrait ?? null, "boolean", "flags.2?Bool"],
    ];
  }

  constructor(params: { start?: true; video?: true; call: types.TypeInputGroupCall; title?: string; videoPortrait?: boolean }) {
    super();
    this.start = params.start;
    this.video = params.video;
    this.call = params.call;
    this.title = params.title;
    this.videoPortrait = params.videoPortrait;
  }
}

export class PhoneEditGroupCallParticipant extends Function<types.TypeUpdates> {
  call: types.TypeInputGroupCall;
  participant: types.TypeInputPeer;
  muted?: boolean;
  volume?: number;
  raiseHand?: boolean;
  videoStopped?: boolean;
  videoPaused?: boolean;
  presentationPaused?: boolean;

  protected get [id]() {
    return 0xA5273ABF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
      ["participant", types.TypeInputPeer, "InputPeer"],
      ["muted", "boolean", "flags.0?Bool"],
      ["volume", "number", "flags.1?int"],
      ["raiseHand", "boolean", "flags.2?Bool"],
      ["videoStopped", "boolean", "flags.3?Bool"],
      ["videoPaused", "boolean", "flags.4?Bool"],
      ["presentationPaused", "boolean", "flags.5?Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
      [this.participant, types.TypeInputPeer, "InputPeer"],
      [this.muted ?? null, "boolean", "flags.0?Bool"],
      [this.volume ?? null, "number", "flags.1?int"],
      [this.raiseHand ?? null, "boolean", "flags.2?Bool"],
      [this.videoStopped ?? null, "boolean", "flags.3?Bool"],
      [this.videoPaused ?? null, "boolean", "flags.4?Bool"],
      [this.presentationPaused ?? null, "boolean", "flags.5?Bool"],
    ];
  }

  constructor(params: { call: types.TypeInputGroupCall; participant: types.TypeInputPeer; muted?: boolean; volume?: number; raiseHand?: boolean; videoStopped?: boolean; videoPaused?: boolean; presentationPaused?: boolean }) {
    super();
    this.call = params.call;
    this.participant = params.participant;
    this.muted = params.muted;
    this.volume = params.volume;
    this.raiseHand = params.raiseHand;
    this.videoStopped = params.videoStopped;
    this.videoPaused = params.videoPaused;
    this.presentationPaused = params.presentationPaused;
  }
}

export class PhoneEditGroupCallTitle extends Function<types.TypeUpdates> {
  call: types.TypeInputGroupCall;
  title: string;

  protected get [id]() {
    return 0x1CA6AC0A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
      [this.title, "string", "string"],
    ];
  }

  constructor(params: { call: types.TypeInputGroupCall; title: string }) {
    super();
    this.call = params.call;
    this.title = params.title;
  }
}

export class PhoneGetGroupCallJoinAs extends Function<types.PhoneJoinAsPeers> {
  peer: types.TypeInputPeer;

  protected get [id]() {
    return 0xEF7C213A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class PhoneExportGroupCallInvite extends Function<types.PhoneExportedGroupCallInvite> {
  canSelfUnmute?: true;
  call: types.TypeInputGroupCall;

  protected get [id]() {
    return 0xE6AA647F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["canSelfUnmute", "true", "flags.0?true"],
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.canSelfUnmute ?? null, "true", "flags.0?true"],
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  constructor(params: { canSelfUnmute?: true; call: types.TypeInputGroupCall }) {
    super();
    this.canSelfUnmute = params.canSelfUnmute;
    this.call = params.call;
  }
}

export class PhoneToggleGroupCallStartSubscription extends Function<types.TypeUpdates> {
  call: types.TypeInputGroupCall;
  subscribed: boolean;

  protected get [id]() {
    return 0x219C34E6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
      ["subscribed", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
      [this.subscribed, "boolean", "Bool"],
    ];
  }

  constructor(params: { call: types.TypeInputGroupCall; subscribed: boolean }) {
    super();
    this.call = params.call;
    this.subscribed = params.subscribed;
  }
}

export class PhoneStartScheduledGroupCall extends Function<types.TypeUpdates> {
  call: types.TypeInputGroupCall;

  protected get [id]() {
    return 0x5680E342;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  constructor(params: { call: types.TypeInputGroupCall }) {
    super();
    this.call = params.call;
  }
}

export class PhoneSaveDefaultGroupCallJoinAs extends Function<boolean> {
  peer: types.TypeInputPeer;
  joinAs: types.TypeInputPeer;

  protected get [id]() {
    return 0x575E1F8C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["joinAs", types.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.joinAs, types.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; joinAs: types.TypeInputPeer }) {
    super();
    this.peer = params.peer;
    this.joinAs = params.joinAs;
  }
}

export class PhoneJoinGroupCallPresentation extends Function<types.TypeUpdates> {
  call: types.TypeInputGroupCall;
  params: types.TypeDataJSON;

  protected get [id]() {
    return 0xCBEA6BC4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
      ["params", types.TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
      [this.params, types.TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { call: types.TypeInputGroupCall; params: types.TypeDataJSON }) {
    super();
    this.call = params.call;
    this.params = params.params;
  }
}

export class PhoneLeaveGroupCallPresentation extends Function<types.TypeUpdates> {
  call: types.TypeInputGroupCall;

  protected get [id]() {
    return 0x1C50D144;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  constructor(params: { call: types.TypeInputGroupCall }) {
    super();
    this.call = params.call;
  }
}

export class PhoneGetGroupCallStreamChannels extends Function<types.PhoneGroupCallStreamChannels> {
  call: types.TypeInputGroupCall;

  protected get [id]() {
    return 0x1AB21940;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", types.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, types.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  constructor(params: { call: types.TypeInputGroupCall }) {
    super();
    this.call = params.call;
  }
}

export class PhoneGetGroupCallStreamRtmpURL extends Function<types.PhoneGroupCallStreamRtmpURL> {
  peer: types.TypeInputPeer;
  revoke: boolean;

  protected get [id]() {
    return 0xDEB3ABBF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPeer, "InputPeer"],
      ["revoke", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPeer, "InputPeer"],
      [this.revoke, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: types.TypeInputPeer; revoke: boolean }) {
    super();
    this.peer = params.peer;
    this.revoke = params.revoke;
  }
}

export class PhoneSaveCallLog extends Function<boolean> {
  peer: types.TypeInputPhoneCall;
  file: types.TypeInputFile;

  protected get [id]() {
    return 0x41248786;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", types.TypeInputPhoneCall, "InputPhoneCall"],
      ["file", types.TypeInputFile, "InputFile"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, types.TypeInputPhoneCall, "InputPhoneCall"],
      [this.file, types.TypeInputFile, "InputFile"],
    ];
  }

  constructor(params: { peer: types.TypeInputPhoneCall; file: types.TypeInputFile }) {
    super();
    this.peer = params.peer;
    this.file = params.file;
  }
}

export class LangpackGetLangPack extends Function<types.LangPackDifference> {
  langPack: string;
  langCode: string;

  protected get [id]() {
    return 0xF2F2330A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["langPack", "string", "string"],
      ["langCode", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.langPack, "string", "string"],
      [this.langCode, "string", "string"],
    ];
  }

  constructor(params: { langPack: string; langCode: string }) {
    super();
    this.langPack = params.langPack;
    this.langCode = params.langCode;
  }
}

export class LangpackGetStrings extends Function<types.TypeLangPackString[]> {
  langPack: string;
  langCode: string;
  keys: Array<string>;

  protected get [id]() {
    return 0xEFEA3803;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["langPack", "string", "string"],
      ["langCode", "string", "string"],
      ["keys", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.langPack, "string", "string"],
      [this.langCode, "string", "string"],
      [this.keys, ["string"], "Vector<string>"],
    ];
  }

  constructor(params: { langPack: string; langCode: string; keys: Array<string> }) {
    super();
    this.langPack = params.langPack;
    this.langCode = params.langCode;
    this.keys = params.keys;
  }
}

export class LangpackGetDifference extends Function<types.LangPackDifference> {
  langPack: string;
  langCode: string;
  fromVersion: number;

  protected get [id]() {
    return 0xCD984AA5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["langPack", "string", "string"],
      ["langCode", "string", "string"],
      ["fromVersion", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.langPack, "string", "string"],
      [this.langCode, "string", "string"],
      [this.fromVersion, "number", "int"],
    ];
  }

  constructor(params: { langPack: string; langCode: string; fromVersion: number }) {
    super();
    this.langPack = params.langPack;
    this.langCode = params.langCode;
    this.fromVersion = params.fromVersion;
  }
}

export class LangpackGetLanguages extends Function<types.LangPackLanguage[]> {
  langPack: string;

  protected get [id]() {
    return 0x42C6978F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["langPack", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.langPack, "string", "string"],
    ];
  }

  constructor(params: { langPack: string }) {
    super();
    this.langPack = params.langPack;
  }
}

export class LangpackGetLanguage extends Function<types.LangPackLanguage> {
  langPack: string;
  langCode: string;

  protected get [id]() {
    return 0x6A596502;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["langPack", "string", "string"],
      ["langCode", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.langPack, "string", "string"],
      [this.langCode, "string", "string"],
    ];
  }

  constructor(params: { langPack: string; langCode: string }) {
    super();
    this.langPack = params.langPack;
    this.langCode = params.langCode;
  }
}

export class FoldersEditPeerFolders extends Function<types.TypeUpdates> {
  folderPeers: Array<types.TypeInputFolderPeer>;

  protected get [id]() {
    return 0x6847D0AB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["folderPeers", [types.TypeInputFolderPeer], "Vector<InputFolderPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.folderPeers, [types.TypeInputFolderPeer], "Vector<InputFolderPeer>"],
    ];
  }

  constructor(params: { folderPeers: Array<types.TypeInputFolderPeer> }) {
    super();
    this.folderPeers = params.folderPeers;
  }
}

export class StatsGetBroadcastStats extends Function<types.StatsBroadcastStats> {
  dark?: true;
  channel: types.TypeInputChannel;

  protected get [id]() {
    return 0xAB42441A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["dark", "true", "flags.0?true"],
      ["channel", types.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.dark ?? null, "true", "flags.0?true"],
      [this.channel, types.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { dark?: true; channel: types.TypeInputChannel }) {
    super();
    this.dark = params.dark;
    this.channel = params.channel;
  }
}

export class StatsLoadAsyncGraph extends Function<types.TypeStatsGraph> {
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

export class StatsGetMegagroupStats extends Function<types.StatsMegagroupStats> {
  dark?: true;
  channel: types.TypeInputChannel;

  protected get [id]() {
    return 0xDCDF8607;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["dark", "true", "flags.0?true"],
      ["channel", types.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.dark ?? null, "true", "flags.0?true"],
      [this.channel, types.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { dark?: true; channel: types.TypeInputChannel }) {
    super();
    this.dark = params.dark;
    this.channel = params.channel;
  }
}

export class StatsGetMessagePublicForwards extends Function<types.TypeMessagesMessages> {
  channel: types.TypeInputChannel;
  msgId: number;
  offsetRate: number;
  offsetPeer: types.TypeInputPeer;
  offsetId: number;
  limit: number;

  protected get [id]() {
    return 0x5630281B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["msgId", "number", "int"],
      ["offsetRate", "number", "int"],
      ["offsetPeer", types.TypeInputPeer, "InputPeer"],
      ["offsetId", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.msgId, "number", "int"],
      [this.offsetRate, "number", "int"],
      [this.offsetPeer, types.TypeInputPeer, "InputPeer"],
      [this.offsetId, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { channel: types.TypeInputChannel; msgId: number; offsetRate: number; offsetPeer: types.TypeInputPeer; offsetId: number; limit: number }) {
    super();
    this.channel = params.channel;
    this.msgId = params.msgId;
    this.offsetRate = params.offsetRate;
    this.offsetPeer = params.offsetPeer;
    this.offsetId = params.offsetId;
    this.limit = params.limit;
  }
}

export class StatsGetMessageStats extends Function<types.StatsMessageStats> {
  dark?: true;
  channel: types.TypeInputChannel;
  msgId: number;

  protected get [id]() {
    return 0xB6E0A3F5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["dark", "true", "flags.0?true"],
      ["channel", types.TypeInputChannel, "InputChannel"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.dark ?? null, "true", "flags.0?true"],
      [this.channel, types.TypeInputChannel, "InputChannel"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { dark?: true; channel: types.TypeInputChannel; msgId: number }) {
    super();
    this.dark = params.dark;
    this.channel = params.channel;
    this.msgId = params.msgId;
  }
}

export class ChatlistsExportChatlistInvite extends Function<types.ChatlistsExportedChatlistInvite> {
  chatlist: types.TypeInputChatlist;
  title: string;
  peers: Array<types.TypeInputPeer>;

  protected get [id]() {
    return 0x8472478E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatlist", types.TypeInputChatlist, "InputChatlist"],
      ["title", "string", "string"],
      ["peers", [types.TypeInputPeer], "Vector<InputPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatlist, types.TypeInputChatlist, "InputChatlist"],
      [this.title, "string", "string"],
      [this.peers, [types.TypeInputPeer], "Vector<InputPeer>"],
    ];
  }

  constructor(params: { chatlist: types.TypeInputChatlist; title: string; peers: Array<types.TypeInputPeer> }) {
    super();
    this.chatlist = params.chatlist;
    this.title = params.title;
    this.peers = params.peers;
  }
}

export class ChatlistsDeleteExportedInvite extends Function<boolean> {
  chatlist: types.TypeInputChatlist;
  slug: string;

  protected get [id]() {
    return 0x719C5C5E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatlist", types.TypeInputChatlist, "InputChatlist"],
      ["slug", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatlist, types.TypeInputChatlist, "InputChatlist"],
      [this.slug, "string", "string"],
    ];
  }

  constructor(params: { chatlist: types.TypeInputChatlist; slug: string }) {
    super();
    this.chatlist = params.chatlist;
    this.slug = params.slug;
  }
}

export class ChatlistsEditExportedInvite extends Function<types.ExportedChatlistInvite> {
  chatlist: types.TypeInputChatlist;
  slug: string;
  title?: string;
  peers?: Array<types.TypeInputPeer>;

  protected get [id]() {
    return 0x653DB63D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["chatlist", types.TypeInputChatlist, "InputChatlist"],
      ["slug", "string", "string"],
      ["title", "string", "flags.1?string"],
      ["peers", [types.TypeInputPeer], "flags.2?Vector<InputPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.chatlist, types.TypeInputChatlist, "InputChatlist"],
      [this.slug, "string", "string"],
      [this.title ?? null, "string", "flags.1?string"],
      [this.peers ?? null, [types.TypeInputPeer], "flags.2?Vector<InputPeer>"],
    ];
  }

  constructor(params: { chatlist: types.TypeInputChatlist; slug: string; title?: string; peers?: Array<types.TypeInputPeer> }) {
    super();
    this.chatlist = params.chatlist;
    this.slug = params.slug;
    this.title = params.title;
    this.peers = params.peers;
  }
}

export class ChatlistsGetExportedInvites extends Function<types.ChatlistsExportedInvites> {
  chatlist: types.TypeInputChatlist;

  protected get [id]() {
    return 0xCE03DA83;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatlist", types.TypeInputChatlist, "InputChatlist"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatlist, types.TypeInputChatlist, "InputChatlist"],
    ];
  }

  constructor(params: { chatlist: types.TypeInputChatlist }) {
    super();
    this.chatlist = params.chatlist;
  }
}

export class ChatlistsCheckChatlistInvite extends Function<types.TypeChatlistsChatlistInvite> {
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

export class ChatlistsJoinChatlistInvite extends Function<types.TypeUpdates> {
  slug: string;
  peers: Array<types.TypeInputPeer>;

  protected get [id]() {
    return 0xA6B1E39A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["slug", "string", "string"],
      ["peers", [types.TypeInputPeer], "Vector<InputPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.slug, "string", "string"],
      [this.peers, [types.TypeInputPeer], "Vector<InputPeer>"],
    ];
  }

  constructor(params: { slug: string; peers: Array<types.TypeInputPeer> }) {
    super();
    this.slug = params.slug;
    this.peers = params.peers;
  }
}

export class ChatlistsGetChatlistUpdates extends Function<types.ChatlistsChatlistUpdates> {
  chatlist: types.TypeInputChatlist;

  protected get [id]() {
    return 0x89419521;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatlist", types.TypeInputChatlist, "InputChatlist"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatlist, types.TypeInputChatlist, "InputChatlist"],
    ];
  }

  constructor(params: { chatlist: types.TypeInputChatlist }) {
    super();
    this.chatlist = params.chatlist;
  }
}

export class ChatlistsJoinChatlistUpdates extends Function<types.TypeUpdates> {
  chatlist: types.TypeInputChatlist;
  peers: Array<types.TypeInputPeer>;

  protected get [id]() {
    return 0xE089F8F5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatlist", types.TypeInputChatlist, "InputChatlist"],
      ["peers", [types.TypeInputPeer], "Vector<InputPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatlist, types.TypeInputChatlist, "InputChatlist"],
      [this.peers, [types.TypeInputPeer], "Vector<InputPeer>"],
    ];
  }

  constructor(params: { chatlist: types.TypeInputChatlist; peers: Array<types.TypeInputPeer> }) {
    super();
    this.chatlist = params.chatlist;
    this.peers = params.peers;
  }
}

export class ChatlistsHideChatlistUpdates extends Function<boolean> {
  chatlist: types.TypeInputChatlist;

  protected get [id]() {
    return 0x66E486FB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatlist", types.TypeInputChatlist, "InputChatlist"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatlist, types.TypeInputChatlist, "InputChatlist"],
    ];
  }

  constructor(params: { chatlist: types.TypeInputChatlist }) {
    super();
    this.chatlist = params.chatlist;
  }
}

export class ChatlistsGetLeaveChatlistSuggestions extends Function<types.TypePeer[]> {
  chatlist: types.TypeInputChatlist;

  protected get [id]() {
    return 0xFDBCD714;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatlist", types.TypeInputChatlist, "InputChatlist"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatlist, types.TypeInputChatlist, "InputChatlist"],
    ];
  }

  constructor(params: { chatlist: types.TypeInputChatlist }) {
    super();
    this.chatlist = params.chatlist;
  }
}

export class ChatlistsLeaveChatlist extends Function<types.TypeUpdates> {
  chatlist: types.TypeInputChatlist;
  peers: Array<types.TypeInputPeer>;

  protected get [id]() {
    return 0x74FAE13A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatlist", types.TypeInputChatlist, "InputChatlist"],
      ["peers", [types.TypeInputPeer], "Vector<InputPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatlist, types.TypeInputChatlist, "InputChatlist"],
      [this.peers, [types.TypeInputPeer], "Vector<InputPeer>"],
    ];
  }

  constructor(params: { chatlist: types.TypeInputChatlist; peers: Array<types.TypeInputPeer> }) {
    super();
    this.chatlist = params.chatlist;
    this.peers = params.peers;
  }
}

export class StoriesSendStory extends Function<types.TypeUpdates> {
  pinned?: true;
  noforwards?: true;
  media: types.TypeInputMedia;
  caption?: string;
  entities?: Array<types.TypeMessageEntity>;
  privacyRules: Array<types.TypeInputPrivacyRule>;
  randomId: bigint;
  period?: number;

  protected get [id]() {
    return 0x424CD47A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pinned", "true", "flags.2?true"],
      ["noforwards", "true", "flags.4?true"],
      ["media", types.TypeInputMedia, "InputMedia"],
      ["caption", "string", "flags.0?string"],
      ["entities", [types.TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
      ["privacyRules", [types.TypeInputPrivacyRule], "Vector<InputPrivacyRule>"],
      ["randomId", "bigint", "long"],
      ["period", "number", "flags.3?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pinned ?? null, "true", "flags.2?true"],
      [this.noforwards ?? null, "true", "flags.4?true"],
      [this.media, types.TypeInputMedia, "InputMedia"],
      [this.caption ?? null, "string", "flags.0?string"],
      [this.entities ?? null, [types.TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
      [this.privacyRules, [types.TypeInputPrivacyRule], "Vector<InputPrivacyRule>"],
      [this.randomId, "bigint", "long"],
      [this.period ?? null, "number", "flags.3?int"],
    ];
  }

  constructor(params: { pinned?: true; noforwards?: true; media: types.TypeInputMedia; caption?: string; entities?: Array<types.TypeMessageEntity>; privacyRules: Array<types.TypeInputPrivacyRule>; randomId: bigint; period?: number }) {
    super();
    this.pinned = params.pinned;
    this.noforwards = params.noforwards;
    this.media = params.media;
    this.caption = params.caption;
    this.entities = params.entities;
    this.privacyRules = params.privacyRules;
    this.randomId = params.randomId;
    this.period = params.period;
  }
}

export class StoriesEditStory extends Function<types.TypeUpdates> {
  id: number;
  media?: types.TypeInputMedia;
  caption?: string;
  entities?: Array<types.TypeMessageEntity>;
  privacyRules?: Array<types.TypeInputPrivacyRule>;

  protected get [id]() {
    return 0x2AAE7A41;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["id", "number", "int"],
      ["media", types.TypeInputMedia, "flags.0?InputMedia"],
      ["caption", "string", "flags.1?string"],
      ["entities", [types.TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
      ["privacyRules", [types.TypeInputPrivacyRule], "flags.2?Vector<InputPrivacyRule>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.id, "number", "int"],
      [this.media ?? null, types.TypeInputMedia, "flags.0?InputMedia"],
      [this.caption ?? null, "string", "flags.1?string"],
      [this.entities ?? null, [types.TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
      [this.privacyRules ?? null, [types.TypeInputPrivacyRule], "flags.2?Vector<InputPrivacyRule>"],
    ];
  }

  constructor(params: { id: number; media?: types.TypeInputMedia; caption?: string; entities?: Array<types.TypeMessageEntity>; privacyRules?: Array<types.TypeInputPrivacyRule> }) {
    super();
    this.id = params.id;
    this.media = params.media;
    this.caption = params.caption;
    this.entities = params.entities;
    this.privacyRules = params.privacyRules;
  }
}

export class StoriesDeleteStories extends Function<number[]> {
  id: Array<number>;

  protected get [id]() {
    return 0xB5D501D7;
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

export class StoriesTogglePinned extends Function<number[]> {
  id: Array<number>;
  pinned: boolean;

  protected get [id]() {
    return 0x51602944;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", ["number"], "Vector<int>"],
      ["pinned", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, ["number"], "Vector<int>"],
      [this.pinned, "boolean", "Bool"],
    ];
  }

  constructor(params: { id: Array<number>; pinned: boolean }) {
    super();
    this.id = params.id;
    this.pinned = params.pinned;
  }
}

export class StoriesGetAllStories extends Function<types.TypeStoriesAllStories> {
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

  constructor(params: { next?: true; hidden?: true; state?: string }) {
    super();
    this.next = params.next;
    this.hidden = params.hidden;
    this.state = params.state;
  }
}

export class StoriesGetUserStories extends Function<types.StoriesUserStories> {
  userId: types.TypeInputUser;

  protected get [id]() {
    return 0x96D528E0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", types.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, types.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { userId: types.TypeInputUser }) {
    super();
    this.userId = params.userId;
  }
}

export class StoriesGetPinnedStories extends Function<types.StoriesStories> {
  userId: types.TypeInputUser;
  offsetId: number;
  limit: number;

  protected get [id]() {
    return 0x0B471137;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", types.TypeInputUser, "InputUser"],
      ["offsetId", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.offsetId, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { userId: types.TypeInputUser; offsetId: number; limit: number }) {
    super();
    this.userId = params.userId;
    this.offsetId = params.offsetId;
    this.limit = params.limit;
  }
}

export class StoriesGetStoriesArchive extends Function<types.StoriesStories> {
  offsetId: number;
  limit: number;

  protected get [id]() {
    return 0x1F5BC5D2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["offsetId", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offsetId, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { offsetId: number; limit: number }) {
    super();
    this.offsetId = params.offsetId;
    this.limit = params.limit;
  }
}

export class StoriesGetStoriesByID extends Function<types.StoriesStories> {
  userId: types.TypeInputUser;
  id: Array<number>;

  protected get [id]() {
    return 0x6A15CF46;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", types.TypeInputUser, "InputUser"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { userId: types.TypeInputUser; id: Array<number> }) {
    super();
    this.userId = params.userId;
    this.id = params.id;
  }
}

export class StoriesToggleAllStoriesHidden extends Function<boolean> {
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

export class StoriesGetAllReadUserStories extends Function<types.TypeUpdates> {
  protected get [id]() {
    return 0x729C562C;
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

export class StoriesReadStories extends Function<number[]> {
  userId: types.TypeInputUser;
  maxId: number;

  protected get [id]() {
    return 0xEDC5105B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", types.TypeInputUser, "InputUser"],
      ["maxId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.maxId, "number", "int"],
    ];
  }

  constructor(params: { userId: types.TypeInputUser; maxId: number }) {
    super();
    this.userId = params.userId;
    this.maxId = params.maxId;
  }
}

export class StoriesIncrementStoryViews extends Function<boolean> {
  userId: types.TypeInputUser;
  id: Array<number>;

  protected get [id]() {
    return 0x22126127;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", types.TypeInputUser, "InputUser"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { userId: types.TypeInputUser; id: Array<number> }) {
    super();
    this.userId = params.userId;
    this.id = params.id;
  }
}

export class StoriesGetStoryViewsList extends Function<types.StoriesStoryViewsList> {
  id: number;
  offsetDate: number;
  offsetId: bigint;
  limit: number;

  protected get [id]() {
    return 0x4B3B5E97;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "number", "int"],
      ["offsetDate", "number", "int"],
      ["offsetId", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "number", "int"],
      [this.offsetDate, "number", "int"],
      [this.offsetId, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { id: number; offsetDate: number; offsetId: bigint; limit: number }) {
    super();
    this.id = params.id;
    this.offsetDate = params.offsetDate;
    this.offsetId = params.offsetId;
    this.limit = params.limit;
  }
}

export class StoriesGetStoriesViews extends Function<types.StoriesStoryViews> {
  id: Array<number>;

  protected get [id]() {
    return 0x9A75D6A6;
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

export class StoriesExportStoryLink extends Function<types.ExportedStoryLink> {
  userId: types.TypeInputUser;
  id: number;

  protected get [id]() {
    return 0x16E443CE;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", types.TypeInputUser, "InputUser"],
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.id, "number", "int"],
    ];
  }

  constructor(params: { userId: types.TypeInputUser; id: number }) {
    super();
    this.userId = params.userId;
    this.id = params.id;
  }
}

export class StoriesReport extends Function<boolean> {
  userId: types.TypeInputUser;
  id: Array<number>;
  reason: types.TypeReportReason;
  message: string;

  protected get [id]() {
    return 0xC95BE06A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", types.TypeInputUser, "InputUser"],
      ["id", ["number"], "Vector<int>"],
      ["reason", types.TypeReportReason, "ReportReason"],
      ["message", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, types.TypeInputUser, "InputUser"],
      [this.id, ["number"], "Vector<int>"],
      [this.reason, types.TypeReportReason, "ReportReason"],
      [this.message, "string", "string"],
    ];
  }

  constructor(params: { userId: types.TypeInputUser; id: Array<number>; reason: types.TypeReportReason; message: string }) {
    super();
    this.userId = params.userId;
    this.id = params.id;
    this.reason = params.reason;
    this.message = params.message;
  }
}
