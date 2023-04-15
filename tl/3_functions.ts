import { flags, id, ParamDesc, paramDesc, Params, params, TLObject } from "./1_tl_object.ts";
import * as constructors from "./2_constructors.ts";

export abstract class Function extends TLObject {
}

export class ReqPqMulti extends Function {
  nonce: bigint;

  protected get [id]() {
    return 0xbe7e8ef1;
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

export class ReqDHParams extends Function {
  nonce: bigint;
  serverNonce: bigint;
  p: Uint8Array;
  q: Uint8Array;
  publicKeyFingerprint: bigint;
  encryptedData: Uint8Array;

  protected get [id]() {
    return 0xd712e4be;
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

export class SetClientDHParams extends Function {
  nonce: bigint;
  serverNonce: bigint;
  encryptedData: Uint8Array;

  protected get [id]() {
    return 0xf5045f1f;
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

export class RpcDropAnswer extends Function {
  reqMsgId: bigint;

  protected get [id]() {
    return 0x58e4a740;
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

export class GetFutureSalts extends Function {
  num: number;

  protected get [id]() {
    return 0xb921bd04;
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

export class Ping extends Function {
  pingId: bigint;

  protected get [id]() {
    return 0x7abe77ec;
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

export class PingDelayDisconnect extends Function {
  pingId: bigint;
  disconnectDelay: number;

  protected get [id]() {
    return 0xf3427b8c;
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

export class DestroySession extends Function {
  sessionId: bigint;

  protected get [id]() {
    return 0xe7512126;
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

export class DestroyAuthKey extends Function {
  protected get [id]() {
    return 0xd1435160;
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

export class InvokeAfterMsg extends Function {
  msgId: bigint;
  query: constructors.TypeX;

  protected get [id]() {
    return 0xcb9f372d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msgId", "bigint", "long"],
      ["query", constructors.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.msgId, "bigint", "long"],
      [this.query, constructors.TypeX, "!X"],
    ];
  }

  constructor(params: { msgId: bigint; query: constructors.TypeX }) {
    super();
    this.msgId = params.msgId;
    this.query = params.query;
  }
}

export class InvokeAfterMsgs extends Function {
  msgIds: Array<bigint>;
  query: constructors.TypeX;

  protected get [id]() {
    return 0x3dc4b4f0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msgIds", ["bigint"], "Vector<long>"],
      ["query", constructors.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.msgIds, ["bigint"], "Vector<long>"],
      [this.query, constructors.TypeX, "!X"],
    ];
  }

  constructor(params: { msgIds: Array<bigint>; query: constructors.TypeX }) {
    super();
    this.msgIds = params.msgIds;
    this.query = params.query;
  }
}

export class InitConnection extends Function {
  apiId: number;
  deviceModel: string;
  systemVersion: string;
  appVersion: string;
  systemLangCode: string;
  langPack: string;
  langCode: string;
  proxy?: constructors.TypeInputClientProxy;
  params?: constructors.TypeJSONValue;
  query: constructors.TypeX;

  protected get [id]() {
    return 0xc1cd5ea9;
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
      ["proxy", constructors.TypeInputClientProxy, "flags.0?InputClientProxy"],
      ["params", constructors.TypeJSONValue, "flags.1?JSONValue"],
      ["query", constructors.TypeX, "!X"],
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
      [this.proxy ?? null, constructors.TypeInputClientProxy, "flags.0?InputClientProxy"],
      [this.params ?? null, constructors.TypeJSONValue, "flags.1?JSONValue"],
      [this.query, constructors.TypeX, "!X"],
    ];
  }

  constructor(params: { apiId: number; deviceModel: string; systemVersion: string; appVersion: string; systemLangCode: string; langPack: string; langCode: string; proxy?: constructors.TypeInputClientProxy; params?: constructors.TypeJSONValue; query: constructors.TypeX }) {
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

export class InvokeWithLayer extends Function {
  layer: number;
  query: constructors.TypeX;

  protected get [id]() {
    return 0xda9b0d0d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["layer", "number", "int"],
      ["query", constructors.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.layer, "number", "int"],
      [this.query, constructors.TypeX, "!X"],
    ];
  }

  constructor(params: { layer: number; query: constructors.TypeX }) {
    super();
    this.layer = params.layer;
    this.query = params.query;
  }
}

export class InvokeWithoutUpdates extends Function {
  query: constructors.TypeX;

  protected get [id]() {
    return 0xbf9459b7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["query", constructors.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.query, constructors.TypeX, "!X"],
    ];
  }

  constructor(params: { query: constructors.TypeX }) {
    super();
    this.query = params.query;
  }
}

export class InvokeWithMessagesRange extends Function {
  range: constructors.TypeMessageRange;
  query: constructors.TypeX;

  protected get [id]() {
    return 0x365275f2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["range", constructors.TypeMessageRange, "MessageRange"],
      ["query", constructors.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.range, constructors.TypeMessageRange, "MessageRange"],
      [this.query, constructors.TypeX, "!X"],
    ];
  }

  constructor(params: { range: constructors.TypeMessageRange; query: constructors.TypeX }) {
    super();
    this.range = params.range;
    this.query = params.query;
  }
}

export class InvokeWithTakeout extends Function {
  takeoutId: bigint;
  query: constructors.TypeX;

  protected get [id]() {
    return 0xaca9fd2e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["takeoutId", "bigint", "long"],
      ["query", constructors.TypeX, "!X"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.takeoutId, "bigint", "long"],
      [this.query, constructors.TypeX, "!X"],
    ];
  }

  constructor(params: { takeoutId: bigint; query: constructors.TypeX }) {
    super();
    this.takeoutId = params.takeoutId;
    this.query = params.query;
  }
}

export class AuthSendCode extends Function {
  phoneNumber: string;
  apiId: number;
  apiHash: string;
  settings: constructors.TypeCodeSettings;

  protected get [id]() {
    return 0xa677244f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneNumber", "string", "string"],
      ["apiId", "number", "int"],
      ["apiHash", "string", "string"],
      ["settings", constructors.TypeCodeSettings, "CodeSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneNumber, "string", "string"],
      [this.apiId, "number", "int"],
      [this.apiHash, "string", "string"],
      [this.settings, constructors.TypeCodeSettings, "CodeSettings"],
    ];
  }

  constructor(params: { phoneNumber: string; apiId: number; apiHash: string; settings: constructors.TypeCodeSettings }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.apiId = params.apiId;
    this.apiHash = params.apiHash;
    this.settings = params.settings;
  }
}

export class AuthSignUp extends Function {
  phoneNumber: string;
  phoneCodeHash: string;
  firstName: string;
  lastName: string;

  protected get [id]() {
    return 0x80eee427;
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

export class AuthSignIn extends Function {
  phoneNumber: string;
  phoneCodeHash: string;
  phoneCode?: string;
  emailVerification?: constructors.TypeEmailVerification;

  protected get [id]() {
    return 0x8d52a951;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["phoneNumber", "string", "string"],
      ["phoneCodeHash", "string", "string"],
      ["phoneCode", "string", "flags.0?string"],
      ["emailVerification", constructors.TypeEmailVerification, "flags.1?EmailVerification"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.phoneNumber, "string", "string"],
      [this.phoneCodeHash, "string", "string"],
      [this.phoneCode ?? null, "string", "flags.0?string"],
      [this.emailVerification ?? null, constructors.TypeEmailVerification, "flags.1?EmailVerification"],
    ];
  }

  constructor(params: { phoneNumber: string; phoneCodeHash: string; phoneCode?: string; emailVerification?: constructors.TypeEmailVerification }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.phoneCodeHash = params.phoneCodeHash;
    this.phoneCode = params.phoneCode;
    this.emailVerification = params.emailVerification;
  }
}

export class AuthLogOut extends Function {
  protected get [id]() {
    return 0x3e72ba19;
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

export class AuthResetAuthorizations extends Function {
  protected get [id]() {
    return 0x9fab0d1a;
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

export class AuthExportAuthorization extends Function {
  dcId: number;

  protected get [id]() {
    return 0xe5bfffcd;
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

export class AuthImportAuthorization extends Function {
  id: bigint;
  bytes: Uint8Array;

  protected get [id]() {
    return 0xa57a7dad;
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

export class AuthBindTempAuthKey extends Function {
  permAuthKeyId: bigint;
  nonce: bigint;
  expiresAt: number;
  encryptedMessage: Uint8Array;

  protected get [id]() {
    return 0xcdd42a05;
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

export class AuthImportBotAuthorization extends Function {
  flags: number;
  apiId: number;
  apiHash: string;
  botAuthToken: string;

  protected get [id]() {
    return 0x67a3ff2c;
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

export class AuthCheckPassword extends Function {
  password: constructors.TypeInputCheckPasswordSRP;

  protected get [id]() {
    return 0xd18b4d16;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["password", constructors.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.password, constructors.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  constructor(params: { password: constructors.TypeInputCheckPasswordSRP }) {
    super();
    this.password = params.password;
  }
}

export class AuthRequestPasswordRecovery extends Function {
  protected get [id]() {
    return 0xd897bc66;
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

export class AuthRecoverPassword extends Function {
  code: string;
  newSettings?: constructors.TypeAccountPasswordInputSettings;

  protected get [id]() {
    return 0x37096c70;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["code", "string", "string"],
      ["newSettings", constructors.TypeAccountPasswordInputSettings, "flags.0?account.PasswordInputSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.code, "string", "string"],
      [this.newSettings ?? null, constructors.TypeAccountPasswordInputSettings, "flags.0?account.PasswordInputSettings"],
    ];
  }

  constructor(params: { code: string; newSettings?: constructors.TypeAccountPasswordInputSettings }) {
    super();
    this.code = params.code;
    this.newSettings = params.newSettings;
  }
}

export class AuthResendCode extends Function {
  phoneNumber: string;
  phoneCodeHash: string;

  protected get [id]() {
    return 0x3ef1a9bf;
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

export class AuthCancelCode extends Function {
  phoneNumber: string;
  phoneCodeHash: string;

  protected get [id]() {
    return 0x1f040578;
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

export class AuthDropTempAuthKeys extends Function {
  exceptAuthKeys: Array<bigint>;

  protected get [id]() {
    return 0x8e48a188;
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

export class AuthExportLoginToken extends Function {
  apiId: number;
  apiHash: string;
  exceptIds: Array<bigint>;

  protected get [id]() {
    return 0xb7e085fe;
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

export class AuthImportLoginToken extends Function {
  token: Uint8Array;

  protected get [id]() {
    return 0x95ac5ce4;
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

export class AuthAcceptLoginToken extends Function {
  token: Uint8Array;

  protected get [id]() {
    return 0xe894ad4d;
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

export class AuthCheckRecoveryPassword extends Function {
  code: string;

  protected get [id]() {
    return 0x0d36bf79;
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

export class AuthImportWebTokenAuthorization extends Function {
  apiId: number;
  apiHash: string;
  webAuthToken: string;

  protected get [id]() {
    return 0x2db873a9;
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

export class AuthRequestFirebaseSms extends Function {
  phoneNumber: string;
  phoneCodeHash: string;
  safetyNetToken?: string;
  iosPushSecret?: string;

  protected get [id]() {
    return 0x89464b50;
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

export class AccountRegisterDevice extends Function {
  noMuted?: true;
  tokenType: number;
  token: string;
  appSandbox: boolean;
  secret: Uint8Array;
  otherUids: Array<bigint>;

  protected get [id]() {
    return 0xec86017a;
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

export class AccountUnregisterDevice extends Function {
  tokenType: number;
  token: string;
  otherUids: Array<bigint>;

  protected get [id]() {
    return 0x6a0d3206;
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

export class AccountUpdateNotifySettings extends Function {
  peer: constructors.TypeInputNotifyPeer;
  settings: constructors.TypeInputPeerNotifySettings;

  protected get [id]() {
    return 0x84be5b93;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputNotifyPeer, "InputNotifyPeer"],
      ["settings", constructors.TypeInputPeerNotifySettings, "InputPeerNotifySettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputNotifyPeer, "InputNotifyPeer"],
      [this.settings, constructors.TypeInputPeerNotifySettings, "InputPeerNotifySettings"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputNotifyPeer; settings: constructors.TypeInputPeerNotifySettings }) {
    super();
    this.peer = params.peer;
    this.settings = params.settings;
  }
}

export class AccountGetNotifySettings extends Function {
  peer: constructors.TypeInputNotifyPeer;

  protected get [id]() {
    return 0x12b3ad31;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputNotifyPeer, "InputNotifyPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputNotifyPeer, "InputNotifyPeer"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputNotifyPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class AccountResetNotifySettings extends Function {
  protected get [id]() {
    return 0xdb7e1747;
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

export class AccountUpdateProfile extends Function {
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

export class AccountUpdateStatus extends Function {
  offline: boolean;

  protected get [id]() {
    return 0x6628562c;
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

export class AccountGetWallPapers extends Function {
  hash: bigint;

  protected get [id]() {
    return 0x07967d36;
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

export class AccountReportPeer extends Function {
  peer: constructors.TypeInputPeer;
  reason: constructors.TypeReportReason;
  message: string;

  protected get [id]() {
    return 0xc5ba3d86;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["reason", constructors.TypeReportReason, "ReportReason"],
      ["message", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.reason, constructors.TypeReportReason, "ReportReason"],
      [this.message, "string", "string"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; reason: constructors.TypeReportReason; message: string }) {
    super();
    this.peer = params.peer;
    this.reason = params.reason;
    this.message = params.message;
  }
}

export class AccountCheckUsername extends Function {
  username: string;

  protected get [id]() {
    return 0x2714d86c;
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

export class AccountUpdateUsername extends Function {
  username: string;

  protected get [id]() {
    return 0x3e0bdd7c;
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

export class AccountGetPrivacy extends Function {
  key: constructors.TypeInputPrivacyKey;

  protected get [id]() {
    return 0xdadbc950;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["key", constructors.TypeInputPrivacyKey, "InputPrivacyKey"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.key, constructors.TypeInputPrivacyKey, "InputPrivacyKey"],
    ];
  }

  constructor(params: { key: constructors.TypeInputPrivacyKey }) {
    super();
    this.key = params.key;
  }
}

export class AccountSetPrivacy extends Function {
  key: constructors.TypeInputPrivacyKey;
  rules: Array<constructors.TypeInputPrivacyRule>;

  protected get [id]() {
    return 0xc9f81ce8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["key", constructors.TypeInputPrivacyKey, "InputPrivacyKey"],
      ["rules", [constructors.TypeInputPrivacyRule], "Vector<InputPrivacyRule>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.key, constructors.TypeInputPrivacyKey, "InputPrivacyKey"],
      [this.rules, [constructors.TypeInputPrivacyRule], "Vector<InputPrivacyRule>"],
    ];
  }

  constructor(params: { key: constructors.TypeInputPrivacyKey; rules: Array<constructors.TypeInputPrivacyRule> }) {
    super();
    this.key = params.key;
    this.rules = params.rules;
  }
}

export class AccountDeleteAccount extends Function {
  reason: string;
  password?: constructors.TypeInputCheckPasswordSRP;

  protected get [id]() {
    return 0xa2c0cf74;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["reason", "string", "string"],
      ["password", constructors.TypeInputCheckPasswordSRP, "flags.0?InputCheckPasswordSRP"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.reason, "string", "string"],
      [this.password ?? null, constructors.TypeInputCheckPasswordSRP, "flags.0?InputCheckPasswordSRP"],
    ];
  }

  constructor(params: { reason: string; password?: constructors.TypeInputCheckPasswordSRP }) {
    super();
    this.reason = params.reason;
    this.password = params.password;
  }
}

export class AccountGetAccountTTL extends Function {
  protected get [id]() {
    return 0x08fc711d;
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

export class AccountSetAccountTTL extends Function {
  ttl: constructors.TypeAccountDaysTTL;

  protected get [id]() {
    return 0x2442485e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["ttl", constructors.TypeAccountDaysTTL, "AccountDaysTTL"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.ttl, constructors.TypeAccountDaysTTL, "AccountDaysTTL"],
    ];
  }

  constructor(params: { ttl: constructors.TypeAccountDaysTTL }) {
    super();
    this.ttl = params.ttl;
  }
}

export class AccountSendChangePhoneCode extends Function {
  phoneNumber: string;
  settings: constructors.TypeCodeSettings;

  protected get [id]() {
    return 0x82574ae5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneNumber", "string", "string"],
      ["settings", constructors.TypeCodeSettings, "CodeSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneNumber, "string", "string"],
      [this.settings, constructors.TypeCodeSettings, "CodeSettings"],
    ];
  }

  constructor(params: { phoneNumber: string; settings: constructors.TypeCodeSettings }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.settings = params.settings;
  }
}

export class AccountChangePhone extends Function {
  phoneNumber: string;
  phoneCodeHash: string;
  phoneCode: string;

  protected get [id]() {
    return 0x70c32edb;
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

export class AccountUpdateDeviceLocked extends Function {
  period: number;

  protected get [id]() {
    return 0x38df3532;
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

export class AccountGetAuthorizations extends Function {
  protected get [id]() {
    return 0xe320c158;
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

export class AccountResetAuthorization extends Function {
  hash: bigint;

  protected get [id]() {
    return 0xdf77f3bc;
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

export class AccountGetPassword extends Function {
  protected get [id]() {
    return 0x548a30f5;
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

export class AccountGetPasswordSettings extends Function {
  password: constructors.TypeInputCheckPasswordSRP;

  protected get [id]() {
    return 0x9cd4eaf9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["password", constructors.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.password, constructors.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  constructor(params: { password: constructors.TypeInputCheckPasswordSRP }) {
    super();
    this.password = params.password;
  }
}

export class AccountUpdatePasswordSettings extends Function {
  password: constructors.TypeInputCheckPasswordSRP;
  newSettings: constructors.TypeAccountPasswordInputSettings;

  protected get [id]() {
    return 0xa59b102f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["password", constructors.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
      ["newSettings", constructors.TypeAccountPasswordInputSettings, "account.PasswordInputSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.password, constructors.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
      [this.newSettings, constructors.TypeAccountPasswordInputSettings, "account.PasswordInputSettings"],
    ];
  }

  constructor(params: { password: constructors.TypeInputCheckPasswordSRP; newSettings: constructors.TypeAccountPasswordInputSettings }) {
    super();
    this.password = params.password;
    this.newSettings = params.newSettings;
  }
}

export class AccountSendConfirmPhoneCode extends Function {
  hash: string;
  settings: constructors.TypeCodeSettings;

  protected get [id]() {
    return 0x1b3faa88;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "string", "string"],
      ["settings", constructors.TypeCodeSettings, "CodeSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "string", "string"],
      [this.settings, constructors.TypeCodeSettings, "CodeSettings"],
    ];
  }

  constructor(params: { hash: string; settings: constructors.TypeCodeSettings }) {
    super();
    this.hash = params.hash;
    this.settings = params.settings;
  }
}

export class AccountConfirmPhone extends Function {
  phoneCodeHash: string;
  phoneCode: string;

  protected get [id]() {
    return 0x5f2178c3;
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

export class AccountGetTmpPassword extends Function {
  password: constructors.TypeInputCheckPasswordSRP;
  period: number;

  protected get [id]() {
    return 0x449e0b51;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["password", constructors.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
      ["period", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.password, constructors.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
      [this.period, "number", "int"],
    ];
  }

  constructor(params: { password: constructors.TypeInputCheckPasswordSRP; period: number }) {
    super();
    this.password = params.password;
    this.period = params.period;
  }
}

export class AccountGetWebAuthorizations extends Function {
  protected get [id]() {
    return 0x182e6d6f;
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

export class AccountResetWebAuthorization extends Function {
  hash: bigint;

  protected get [id]() {
    return 0x2d01b9ef;
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

export class AccountResetWebAuthorizations extends Function {
  protected get [id]() {
    return 0x682d2594;
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

export class AccountGetAllSecureValues extends Function {
  protected get [id]() {
    return 0xb288bc7d;
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

export class AccountGetSecureValue extends Function {
  types: Array<constructors.TypeSecureValueType>;

  protected get [id]() {
    return 0x73665bc2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["types", [constructors.TypeSecureValueType], "Vector<SecureValueType>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.types, [constructors.TypeSecureValueType], "Vector<SecureValueType>"],
    ];
  }

  constructor(params: { types: Array<constructors.TypeSecureValueType> }) {
    super();
    this.types = params.types;
  }
}

export class AccountSaveSecureValue extends Function {
  value: constructors.TypeInputSecureValue;
  secureSecretId: bigint;

  protected get [id]() {
    return 0x899fe31d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["value", constructors.TypeInputSecureValue, "InputSecureValue"],
      ["secureSecretId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.value, constructors.TypeInputSecureValue, "InputSecureValue"],
      [this.secureSecretId, "bigint", "long"],
    ];
  }

  constructor(params: { value: constructors.TypeInputSecureValue; secureSecretId: bigint }) {
    super();
    this.value = params.value;
    this.secureSecretId = params.secureSecretId;
  }
}

export class AccountDeleteSecureValue extends Function {
  types: Array<constructors.TypeSecureValueType>;

  protected get [id]() {
    return 0xb880bc4b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["types", [constructors.TypeSecureValueType], "Vector<SecureValueType>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.types, [constructors.TypeSecureValueType], "Vector<SecureValueType>"],
    ];
  }

  constructor(params: { types: Array<constructors.TypeSecureValueType> }) {
    super();
    this.types = params.types;
  }
}

export class AccountGetAuthorizationForm extends Function {
  botId: bigint;
  scope: string;
  publicKey: string;

  protected get [id]() {
    return 0xa929597a;
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

export class AccountAcceptAuthorization extends Function {
  botId: bigint;
  scope: string;
  publicKey: string;
  valueHashes: Array<constructors.TypeSecureValueHash>;
  credentials: constructors.TypeSecureCredentialsEncrypted;

  protected get [id]() {
    return 0xf3ed4c73;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["botId", "bigint", "long"],
      ["scope", "string", "string"],
      ["publicKey", "string", "string"],
      ["valueHashes", [constructors.TypeSecureValueHash], "Vector<SecureValueHash>"],
      ["credentials", constructors.TypeSecureCredentialsEncrypted, "SecureCredentialsEncrypted"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.botId, "bigint", "long"],
      [this.scope, "string", "string"],
      [this.publicKey, "string", "string"],
      [this.valueHashes, [constructors.TypeSecureValueHash], "Vector<SecureValueHash>"],
      [this.credentials, constructors.TypeSecureCredentialsEncrypted, "SecureCredentialsEncrypted"],
    ];
  }

  constructor(params: { botId: bigint; scope: string; publicKey: string; valueHashes: Array<constructors.TypeSecureValueHash>; credentials: constructors.TypeSecureCredentialsEncrypted }) {
    super();
    this.botId = params.botId;
    this.scope = params.scope;
    this.publicKey = params.publicKey;
    this.valueHashes = params.valueHashes;
    this.credentials = params.credentials;
  }
}

export class AccountSendVerifyPhoneCode extends Function {
  phoneNumber: string;
  settings: constructors.TypeCodeSettings;

  protected get [id]() {
    return 0xa5a356f9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneNumber", "string", "string"],
      ["settings", constructors.TypeCodeSettings, "CodeSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneNumber, "string", "string"],
      [this.settings, constructors.TypeCodeSettings, "CodeSettings"],
    ];
  }

  constructor(params: { phoneNumber: string; settings: constructors.TypeCodeSettings }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.settings = params.settings;
  }
}

export class AccountVerifyPhone extends Function {
  phoneNumber: string;
  phoneCodeHash: string;
  phoneCode: string;

  protected get [id]() {
    return 0x4dd3a7f6;
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

export class AccountSendVerifyEmailCode extends Function {
  purpose: constructors.TypeEmailVerifyPurpose;
  email: string;

  protected get [id]() {
    return 0x98e037bb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["purpose", constructors.TypeEmailVerifyPurpose, "EmailVerifyPurpose"],
      ["email", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.purpose, constructors.TypeEmailVerifyPurpose, "EmailVerifyPurpose"],
      [this.email, "string", "string"],
    ];
  }

  constructor(params: { purpose: constructors.TypeEmailVerifyPurpose; email: string }) {
    super();
    this.purpose = params.purpose;
    this.email = params.email;
  }
}

export class AccountVerifyEmail extends Function {
  purpose: constructors.TypeEmailVerifyPurpose;
  verification: constructors.TypeEmailVerification;

  protected get [id]() {
    return 0x032da4cf;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["purpose", constructors.TypeEmailVerifyPurpose, "EmailVerifyPurpose"],
      ["verification", constructors.TypeEmailVerification, "EmailVerification"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.purpose, constructors.TypeEmailVerifyPurpose, "EmailVerifyPurpose"],
      [this.verification, constructors.TypeEmailVerification, "EmailVerification"],
    ];
  }

  constructor(params: { purpose: constructors.TypeEmailVerifyPurpose; verification: constructors.TypeEmailVerification }) {
    super();
    this.purpose = params.purpose;
    this.verification = params.verification;
  }
}

export class AccountInitTakeoutSession extends Function {
  contacts?: true;
  messageUsers?: true;
  messageChats?: true;
  messageMegagroups?: true;
  messageChannels?: true;
  files?: true;
  fileMaxSize?: bigint;

  protected get [id]() {
    return 0x8ef3eab0;
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

export class AccountFinishTakeoutSession extends Function {
  success?: true;

  protected get [id]() {
    return 0x1d2652ee;
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

export class AccountConfirmPasswordEmail extends Function {
  code: string;

  protected get [id]() {
    return 0x8fdf1920;
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

export class AccountResendPasswordEmail extends Function {
  protected get [id]() {
    return 0x7a7f2a15;
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

export class AccountCancelPasswordEmail extends Function {
  protected get [id]() {
    return 0xc1cbd5b6;
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

export class AccountGetContactSignUpNotification extends Function {
  protected get [id]() {
    return 0x9f07c728;
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

export class AccountSetContactSignUpNotification extends Function {
  silent: boolean;

  protected get [id]() {
    return 0xcff43f61;
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

export class AccountGetNotifyExceptions extends Function {
  compareSound?: true;
  peer?: constructors.TypeInputNotifyPeer;

  protected get [id]() {
    return 0x53577479;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["compareSound", "true", "flags.1?true"],
      ["peer", constructors.TypeInputNotifyPeer, "flags.0?InputNotifyPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.compareSound ?? null, "true", "flags.1?true"],
      [this.peer ?? null, constructors.TypeInputNotifyPeer, "flags.0?InputNotifyPeer"],
    ];
  }

  constructor(params: { compareSound?: true; peer?: constructors.TypeInputNotifyPeer }) {
    super();
    this.compareSound = params.compareSound;
    this.peer = params.peer;
  }
}

export class AccountGetWallPaper extends Function {
  wallpaper: constructors.TypeInputWallPaper;

  protected get [id]() {
    return 0xfc8ddbea;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["wallpaper", constructors.TypeInputWallPaper, "InputWallPaper"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.wallpaper, constructors.TypeInputWallPaper, "InputWallPaper"],
    ];
  }

  constructor(params: { wallpaper: constructors.TypeInputWallPaper }) {
    super();
    this.wallpaper = params.wallpaper;
  }
}

export class AccountUploadWallPaper extends Function {
  file: constructors.TypeInputFile;
  mimeType: string;
  settings: constructors.TypeWallPaperSettings;

  protected get [id]() {
    return 0xdd853661;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["file", constructors.TypeInputFile, "InputFile"],
      ["mimeType", "string", "string"],
      ["settings", constructors.TypeWallPaperSettings, "WallPaperSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.file, constructors.TypeInputFile, "InputFile"],
      [this.mimeType, "string", "string"],
      [this.settings, constructors.TypeWallPaperSettings, "WallPaperSettings"],
    ];
  }

  constructor(params: { file: constructors.TypeInputFile; mimeType: string; settings: constructors.TypeWallPaperSettings }) {
    super();
    this.file = params.file;
    this.mimeType = params.mimeType;
    this.settings = params.settings;
  }
}

export class AccountSaveWallPaper extends Function {
  wallpaper: constructors.TypeInputWallPaper;
  unsave: boolean;
  settings: constructors.TypeWallPaperSettings;

  protected get [id]() {
    return 0x6c5a5b37;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["wallpaper", constructors.TypeInputWallPaper, "InputWallPaper"],
      ["unsave", "boolean", "Bool"],
      ["settings", constructors.TypeWallPaperSettings, "WallPaperSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.wallpaper, constructors.TypeInputWallPaper, "InputWallPaper"],
      [this.unsave, "boolean", "Bool"],
      [this.settings, constructors.TypeWallPaperSettings, "WallPaperSettings"],
    ];
  }

  constructor(params: { wallpaper: constructors.TypeInputWallPaper; unsave: boolean; settings: constructors.TypeWallPaperSettings }) {
    super();
    this.wallpaper = params.wallpaper;
    this.unsave = params.unsave;
    this.settings = params.settings;
  }
}

export class AccountInstallWallPaper extends Function {
  wallpaper: constructors.TypeInputWallPaper;
  settings: constructors.TypeWallPaperSettings;

  protected get [id]() {
    return 0xfeed5769;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["wallpaper", constructors.TypeInputWallPaper, "InputWallPaper"],
      ["settings", constructors.TypeWallPaperSettings, "WallPaperSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.wallpaper, constructors.TypeInputWallPaper, "InputWallPaper"],
      [this.settings, constructors.TypeWallPaperSettings, "WallPaperSettings"],
    ];
  }

  constructor(params: { wallpaper: constructors.TypeInputWallPaper; settings: constructors.TypeWallPaperSettings }) {
    super();
    this.wallpaper = params.wallpaper;
    this.settings = params.settings;
  }
}

export class AccountResetWallPapers extends Function {
  protected get [id]() {
    return 0xbb3b9804;
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

export class AccountGetAutoDownloadSettings extends Function {
  protected get [id]() {
    return 0x56da0b3f;
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

export class AccountSaveAutoDownloadSettings extends Function {
  low?: true;
  high?: true;
  settings: constructors.TypeAutoDownloadSettings;

  protected get [id]() {
    return 0x76f36233;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["low", "true", "flags.0?true"],
      ["high", "true", "flags.1?true"],
      ["settings", constructors.TypeAutoDownloadSettings, "AutoDownloadSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.low ?? null, "true", "flags.0?true"],
      [this.high ?? null, "true", "flags.1?true"],
      [this.settings, constructors.TypeAutoDownloadSettings, "AutoDownloadSettings"],
    ];
  }

  constructor(params: { low?: true; high?: true; settings: constructors.TypeAutoDownloadSettings }) {
    super();
    this.low = params.low;
    this.high = params.high;
    this.settings = params.settings;
  }
}

export class AccountUploadTheme extends Function {
  file: constructors.TypeInputFile;
  thumb?: constructors.TypeInputFile;
  fileName: string;
  mimeType: string;

  protected get [id]() {
    return 0x1c3db333;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["file", constructors.TypeInputFile, "InputFile"],
      ["thumb", constructors.TypeInputFile, "flags.0?InputFile"],
      ["fileName", "string", "string"],
      ["mimeType", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.file, constructors.TypeInputFile, "InputFile"],
      [this.thumb ?? null, constructors.TypeInputFile, "flags.0?InputFile"],
      [this.fileName, "string", "string"],
      [this.mimeType, "string", "string"],
    ];
  }

  constructor(params: { file: constructors.TypeInputFile; thumb?: constructors.TypeInputFile; fileName: string; mimeType: string }) {
    super();
    this.file = params.file;
    this.thumb = params.thumb;
    this.fileName = params.fileName;
    this.mimeType = params.mimeType;
  }
}

export class AccountCreateTheme extends Function {
  slug: string;
  title: string;
  document?: constructors.TypeInputDocument;
  settings?: Array<constructors.TypeInputThemeSettings>;

  protected get [id]() {
    return 0x652e4400;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["slug", "string", "string"],
      ["title", "string", "string"],
      ["document", constructors.TypeInputDocument, "flags.2?InputDocument"],
      ["settings", [constructors.TypeInputThemeSettings], "flags.3?Vector<InputThemeSettings>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.slug, "string", "string"],
      [this.title, "string", "string"],
      [this.document ?? null, constructors.TypeInputDocument, "flags.2?InputDocument"],
      [this.settings ?? null, [constructors.TypeInputThemeSettings], "flags.3?Vector<InputThemeSettings>"],
    ];
  }

  constructor(params: { slug: string; title: string; document?: constructors.TypeInputDocument; settings?: Array<constructors.TypeInputThemeSettings> }) {
    super();
    this.slug = params.slug;
    this.title = params.title;
    this.document = params.document;
    this.settings = params.settings;
  }
}

export class AccountUpdateTheme extends Function {
  format: string;
  theme: constructors.TypeInputTheme;
  slug?: string;
  title?: string;
  document?: constructors.TypeInputDocument;
  settings?: Array<constructors.TypeInputThemeSettings>;

  protected get [id]() {
    return 0x2bf40ccc;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["format", "string", "string"],
      ["theme", constructors.TypeInputTheme, "InputTheme"],
      ["slug", "string", "flags.0?string"],
      ["title", "string", "flags.1?string"],
      ["document", constructors.TypeInputDocument, "flags.2?InputDocument"],
      ["settings", [constructors.TypeInputThemeSettings], "flags.3?Vector<InputThemeSettings>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.format, "string", "string"],
      [this.theme, constructors.TypeInputTheme, "InputTheme"],
      [this.slug ?? null, "string", "flags.0?string"],
      [this.title ?? null, "string", "flags.1?string"],
      [this.document ?? null, constructors.TypeInputDocument, "flags.2?InputDocument"],
      [this.settings ?? null, [constructors.TypeInputThemeSettings], "flags.3?Vector<InputThemeSettings>"],
    ];
  }

  constructor(params: { format: string; theme: constructors.TypeInputTheme; slug?: string; title?: string; document?: constructors.TypeInputDocument; settings?: Array<constructors.TypeInputThemeSettings> }) {
    super();
    this.format = params.format;
    this.theme = params.theme;
    this.slug = params.slug;
    this.title = params.title;
    this.document = params.document;
    this.settings = params.settings;
  }
}

export class AccountSaveTheme extends Function {
  theme: constructors.TypeInputTheme;
  unsave: boolean;

  protected get [id]() {
    return 0xf257106c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["theme", constructors.TypeInputTheme, "InputTheme"],
      ["unsave", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.theme, constructors.TypeInputTheme, "InputTheme"],
      [this.unsave, "boolean", "Bool"],
    ];
  }

  constructor(params: { theme: constructors.TypeInputTheme; unsave: boolean }) {
    super();
    this.theme = params.theme;
    this.unsave = params.unsave;
  }
}

export class AccountInstallTheme extends Function {
  dark?: true;
  theme?: constructors.TypeInputTheme;
  format?: string;
  baseTheme?: constructors.TypeBaseTheme;

  protected get [id]() {
    return 0xc727bb3b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["dark", "true", "flags.0?true"],
      ["theme", constructors.TypeInputTheme, "flags.1?InputTheme"],
      ["format", "string", "flags.2?string"],
      ["baseTheme", constructors.TypeBaseTheme, "flags.3?BaseTheme"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.dark ?? null, "true", "flags.0?true"],
      [this.theme ?? null, constructors.TypeInputTheme, "flags.1?InputTheme"],
      [this.format ?? null, "string", "flags.2?string"],
      [this.baseTheme ?? null, constructors.TypeBaseTheme, "flags.3?BaseTheme"],
    ];
  }

  constructor(params: { dark?: true; theme?: constructors.TypeInputTheme; format?: string; baseTheme?: constructors.TypeBaseTheme }) {
    super();
    this.dark = params.dark;
    this.theme = params.theme;
    this.format = params.format;
    this.baseTheme = params.baseTheme;
  }
}

export class AccountGetTheme extends Function {
  format: string;
  theme: constructors.TypeInputTheme;

  protected get [id]() {
    return 0x3a5869ec;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["format", "string", "string"],
      ["theme", constructors.TypeInputTheme, "InputTheme"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.format, "string", "string"],
      [this.theme, constructors.TypeInputTheme, "InputTheme"],
    ];
  }

  constructor(params: { format: string; theme: constructors.TypeInputTheme }) {
    super();
    this.format = params.format;
    this.theme = params.theme;
  }
}

export class AccountGetThemes extends Function {
  format: string;
  hash: bigint;

  protected get [id]() {
    return 0x7206e458;
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

export class AccountSetContentSettings extends Function {
  sensitiveEnabled?: true;

  protected get [id]() {
    return 0xb574b16b;
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

export class AccountGetContentSettings extends Function {
  protected get [id]() {
    return 0x8b9b4dae;
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

export class AccountGetMultiWallPapers extends Function {
  wallpapers: Array<constructors.TypeInputWallPaper>;

  protected get [id]() {
    return 0x65ad71dc;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["wallpapers", [constructors.TypeInputWallPaper], "Vector<InputWallPaper>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.wallpapers, [constructors.TypeInputWallPaper], "Vector<InputWallPaper>"],
    ];
  }

  constructor(params: { wallpapers: Array<constructors.TypeInputWallPaper> }) {
    super();
    this.wallpapers = params.wallpapers;
  }
}

export class AccountGetGlobalPrivacySettings extends Function {
  protected get [id]() {
    return 0xeb2b4cf6;
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

export class AccountSetGlobalPrivacySettings extends Function {
  settings: constructors.TypeGlobalPrivacySettings;

  protected get [id]() {
    return 0x1edaaac2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["settings", constructors.TypeGlobalPrivacySettings, "GlobalPrivacySettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.settings, constructors.TypeGlobalPrivacySettings, "GlobalPrivacySettings"],
    ];
  }

  constructor(params: { settings: constructors.TypeGlobalPrivacySettings }) {
    super();
    this.settings = params.settings;
  }
}

export class AccountReportProfilePhoto extends Function {
  peer: constructors.TypeInputPeer;
  photoId: constructors.TypeInputPhoto;
  reason: constructors.TypeReportReason;
  message: string;

  protected get [id]() {
    return 0xfa8cc6f5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["photoId", constructors.TypeInputPhoto, "InputPhoto"],
      ["reason", constructors.TypeReportReason, "ReportReason"],
      ["message", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.photoId, constructors.TypeInputPhoto, "InputPhoto"],
      [this.reason, constructors.TypeReportReason, "ReportReason"],
      [this.message, "string", "string"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; photoId: constructors.TypeInputPhoto; reason: constructors.TypeReportReason; message: string }) {
    super();
    this.peer = params.peer;
    this.photoId = params.photoId;
    this.reason = params.reason;
    this.message = params.message;
  }
}

export class AccountResetPassword extends Function {
  protected get [id]() {
    return 0x9308ce1b;
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

export class AccountDeclinePasswordReset extends Function {
  protected get [id]() {
    return 0x4c9409f6;
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

export class AccountGetChatThemes extends Function {
  hash: bigint;

  protected get [id]() {
    return 0xd638de89;
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

export class AccountSetAuthorizationTTL extends Function {
  authorizationTtlDays: number;

  protected get [id]() {
    return 0xbf899aa0;
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

export class AccountChangeAuthorizationSettings extends Function {
  hash: bigint;
  encryptedRequestsDisabled?: boolean;
  callRequestsDisabled?: boolean;

  protected get [id]() {
    return 0x40f48462;
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

export class AccountGetSavedRingtones extends Function {
  hash: bigint;

  protected get [id]() {
    return 0xe1902288;
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

export class AccountSaveRingtone extends Function {
  id: constructors.TypeInputDocument;
  unsave: boolean;

  protected get [id]() {
    return 0x3dea5b03;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", constructors.TypeInputDocument, "InputDocument"],
      ["unsave", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, constructors.TypeInputDocument, "InputDocument"],
      [this.unsave, "boolean", "Bool"],
    ];
  }

  constructor(params: { id: constructors.TypeInputDocument; unsave: boolean }) {
    super();
    this.id = params.id;
    this.unsave = params.unsave;
  }
}

export class AccountUploadRingtone extends Function {
  file: constructors.TypeInputFile;
  fileName: string;
  mimeType: string;

  protected get [id]() {
    return 0x831a83a2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["file", constructors.TypeInputFile, "InputFile"],
      ["fileName", "string", "string"],
      ["mimeType", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.file, constructors.TypeInputFile, "InputFile"],
      [this.fileName, "string", "string"],
      [this.mimeType, "string", "string"],
    ];
  }

  constructor(params: { file: constructors.TypeInputFile; fileName: string; mimeType: string }) {
    super();
    this.file = params.file;
    this.fileName = params.fileName;
    this.mimeType = params.mimeType;
  }
}

export class AccountUpdateEmojiStatus extends Function {
  emojiStatus: constructors.TypeEmojiStatus;

  protected get [id]() {
    return 0xfbd3de6b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["emojiStatus", constructors.TypeEmojiStatus, "EmojiStatus"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.emojiStatus, constructors.TypeEmojiStatus, "EmojiStatus"],
    ];
  }

  constructor(params: { emojiStatus: constructors.TypeEmojiStatus }) {
    super();
    this.emojiStatus = params.emojiStatus;
  }
}

export class AccountGetDefaultEmojiStatuses extends Function {
  hash: bigint;

  protected get [id]() {
    return 0xd6753386;
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

export class AccountGetRecentEmojiStatuses extends Function {
  hash: bigint;

  protected get [id]() {
    return 0x0f578105;
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

export class AccountClearRecentEmojiStatuses extends Function {
  protected get [id]() {
    return 0x18201aae;
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

export class AccountReorderUsernames extends Function {
  order: Array<string>;

  protected get [id]() {
    return 0xef500eab;
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

export class AccountToggleUsername extends Function {
  username: string;
  active: boolean;

  protected get [id]() {
    return 0x58d6b376;
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

export class AccountGetDefaultProfilePhotoEmojis extends Function {
  hash: bigint;

  protected get [id]() {
    return 0xe2750328;
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

export class AccountGetDefaultGroupPhotoEmojis extends Function {
  hash: bigint;

  protected get [id]() {
    return 0x915860ae;
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

export class AccountGetAutoSaveSettings extends Function {
  protected get [id]() {
    return 0xadcbbcda;
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

export class AccountSaveAutoSaveSettings extends Function {
  users?: true;
  chats?: true;
  broadcasts?: true;
  peer?: constructors.TypeInputPeer;
  settings: constructors.TypeAutoSaveSettings;

  protected get [id]() {
    return 0xd69b8361;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["users", "true", "flags.0?true"],
      ["chats", "true", "flags.1?true"],
      ["broadcasts", "true", "flags.2?true"],
      ["peer", constructors.TypeInputPeer, "flags.3?InputPeer"],
      ["settings", constructors.TypeAutoSaveSettings, "AutoSaveSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.users ?? null, "true", "flags.0?true"],
      [this.chats ?? null, "true", "flags.1?true"],
      [this.broadcasts ?? null, "true", "flags.2?true"],
      [this.peer ?? null, constructors.TypeInputPeer, "flags.3?InputPeer"],
      [this.settings, constructors.TypeAutoSaveSettings, "AutoSaveSettings"],
    ];
  }

  constructor(params: { users?: true; chats?: true; broadcasts?: true; peer?: constructors.TypeInputPeer; settings: constructors.TypeAutoSaveSettings }) {
    super();
    this.users = params.users;
    this.chats = params.chats;
    this.broadcasts = params.broadcasts;
    this.peer = params.peer;
    this.settings = params.settings;
  }
}

export class AccountDeleteAutoSaveExceptions extends Function {
  protected get [id]() {
    return 0x53bc0020;
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

export class UsersGetUsers extends Function {
  id: Array<constructors.TypeInputUser>;

  protected get [id]() {
    return 0x0d91a548;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [constructors.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [constructors.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  constructor(params: { id: Array<constructors.TypeInputUser> }) {
    super();
    this.id = params.id;
  }
}

export class UsersGetFullUser extends Function {
  id: constructors.TypeInputUser;

  protected get [id]() {
    return 0xb60f5918;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", constructors.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, constructors.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { id: constructors.TypeInputUser }) {
    super();
    this.id = params.id;
  }
}

export class UsersSetSecureValueErrors extends Function {
  id: constructors.TypeInputUser;
  errors: Array<constructors.TypeSecureValueError>;

  protected get [id]() {
    return 0x90c894b5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", constructors.TypeInputUser, "InputUser"],
      ["errors", [constructors.TypeSecureValueError], "Vector<SecureValueError>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, constructors.TypeInputUser, "InputUser"],
      [this.errors, [constructors.TypeSecureValueError], "Vector<SecureValueError>"],
    ];
  }

  constructor(params: { id: constructors.TypeInputUser; errors: Array<constructors.TypeSecureValueError> }) {
    super();
    this.id = params.id;
    this.errors = params.errors;
  }
}

export class ContactsGetContactIDs extends Function {
  hash: bigint;

  protected get [id]() {
    return 0x7adc669d;
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

export class ContactsGetStatuses extends Function {
  protected get [id]() {
    return 0xc4a353ee;
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

export class ContactsGetContacts extends Function {
  hash: bigint;

  protected get [id]() {
    return 0x5dd69e12;
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

export class ContactsImportContacts extends Function {
  contacts: Array<constructors.TypeInputContact>;

  protected get [id]() {
    return 0x2c800be5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["contacts", [constructors.TypeInputContact], "Vector<InputContact>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.contacts, [constructors.TypeInputContact], "Vector<InputContact>"],
    ];
  }

  constructor(params: { contacts: Array<constructors.TypeInputContact> }) {
    super();
    this.contacts = params.contacts;
  }
}

export class ContactsDeleteContacts extends Function {
  id: Array<constructors.TypeInputUser>;

  protected get [id]() {
    return 0x096a0e00;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [constructors.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [constructors.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  constructor(params: { id: Array<constructors.TypeInputUser> }) {
    super();
    this.id = params.id;
  }
}

export class ContactsDeleteByPhones extends Function {
  phones: Array<string>;

  protected get [id]() {
    return 0x1013fd9e;
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

export class ContactsBlock extends Function {
  id: constructors.TypeInputPeer;

  protected get [id]() {
    return 0x68cc1411;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { id: constructors.TypeInputPeer }) {
    super();
    this.id = params.id;
  }
}

export class ContactsUnblock extends Function {
  id: constructors.TypeInputPeer;

  protected get [id]() {
    return 0xbea65d50;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { id: constructors.TypeInputPeer }) {
    super();
    this.id = params.id;
  }
}

export class ContactsGetBlocked extends Function {
  offset: number;
  limit: number;

  protected get [id]() {
    return 0xf57c350f;
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

export class ContactsSearch extends Function {
  q: string;
  limit: number;

  protected get [id]() {
    return 0x11f812d8;
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

export class ContactsResolveUsername extends Function {
  username: string;

  protected get [id]() {
    return 0xf93ccba3;
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

export class ContactsGetTopPeers extends Function {
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
    return 0x973478b6;
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

export class ContactsResetTopPeerRating extends Function {
  category: constructors.TypeTopPeerCategory;
  peer: constructors.TypeInputPeer;

  protected get [id]() {
    return 0x1ae373ac;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["category", constructors.TypeTopPeerCategory, "TopPeerCategory"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.category, constructors.TypeTopPeerCategory, "TopPeerCategory"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { category: constructors.TypeTopPeerCategory; peer: constructors.TypeInputPeer }) {
    super();
    this.category = params.category;
    this.peer = params.peer;
  }
}

export class ContactsResetSaved extends Function {
  protected get [id]() {
    return 0x879537f1;
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

export class ContactsGetSaved extends Function {
  protected get [id]() {
    return 0x82f1e39f;
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

export class ContactsToggleTopPeers extends Function {
  enabled: boolean;

  protected get [id]() {
    return 0x8514bdda;
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

export class ContactsAddContact extends Function {
  addPhonePrivacyException?: true;
  id: constructors.TypeInputUser;
  firstName: string;
  lastName: string;
  phone: string;

  protected get [id]() {
    return 0xe8f463d0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["addPhonePrivacyException", "true", "flags.0?true"],
      ["id", constructors.TypeInputUser, "InputUser"],
      ["firstName", "string", "string"],
      ["lastName", "string", "string"],
      ["phone", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.addPhonePrivacyException ?? null, "true", "flags.0?true"],
      [this.id, constructors.TypeInputUser, "InputUser"],
      [this.firstName, "string", "string"],
      [this.lastName, "string", "string"],
      [this.phone, "string", "string"],
    ];
  }

  constructor(params: { addPhonePrivacyException?: true; id: constructors.TypeInputUser; firstName: string; lastName: string; phone: string }) {
    super();
    this.addPhonePrivacyException = params.addPhonePrivacyException;
    this.id = params.id;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.phone = params.phone;
  }
}

export class ContactsAcceptContact extends Function {
  id: constructors.TypeInputUser;

  protected get [id]() {
    return 0xf831a20f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", constructors.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, constructors.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { id: constructors.TypeInputUser }) {
    super();
    this.id = params.id;
  }
}

export class ContactsGetLocated extends Function {
  background?: true;
  geoPoint: constructors.TypeInputGeoPoint;
  selfExpires?: number;

  protected get [id]() {
    return 0xd348bc44;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["background", "true", "flags.1?true"],
      ["geoPoint", constructors.TypeInputGeoPoint, "InputGeoPoint"],
      ["selfExpires", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.background ?? null, "true", "flags.1?true"],
      [this.geoPoint, constructors.TypeInputGeoPoint, "InputGeoPoint"],
      [this.selfExpires ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { background?: true; geoPoint: constructors.TypeInputGeoPoint; selfExpires?: number }) {
    super();
    this.background = params.background;
    this.geoPoint = params.geoPoint;
    this.selfExpires = params.selfExpires;
  }
}

export class ContactsBlockFromReplies extends Function {
  deleteMessage?: true;
  deleteHistory?: true;
  reportSpam?: true;
  msgId: number;

  protected get [id]() {
    return 0x29a8962c;
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

export class ContactsResolvePhone extends Function {
  phone: string;

  protected get [id]() {
    return 0x8af94344;
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

export class ContactsExportContactToken extends Function {
  protected get [id]() {
    return 0xf8654027;
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

export class ContactsImportContactToken extends Function {
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

export class MessagesGetMessages extends Function {
  id: Array<constructors.TypeInputMessage>;

  protected get [id]() {
    return 0x63c66506;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [constructors.TypeInputMessage], "Vector<InputMessage>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [constructors.TypeInputMessage], "Vector<InputMessage>"],
    ];
  }

  constructor(params: { id: Array<constructors.TypeInputMessage> }) {
    super();
    this.id = params.id;
  }
}

export class MessagesGetDialogs extends Function {
  excludePinned?: true;
  folderId?: number;
  offsetDate: number;
  offsetId: number;
  offsetPeer: constructors.TypeInputPeer;
  limit: number;
  hash: bigint;

  protected get [id]() {
    return 0xa0f4cb4f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["excludePinned", "true", "flags.0?true"],
      ["folderId", "number", "flags.1?int"],
      ["offsetDate", "number", "int"],
      ["offsetId", "number", "int"],
      ["offsetPeer", constructors.TypeInputPeer, "InputPeer"],
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
      [this.offsetPeer, constructors.TypeInputPeer, "InputPeer"],
      [this.limit, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { excludePinned?: true; folderId?: number; offsetDate: number; offsetId: number; offsetPeer: constructors.TypeInputPeer; limit: number; hash: bigint }) {
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

export class MessagesGetHistory extends Function {
  peer: constructors.TypeInputPeer;
  offsetId: number;
  offsetDate: number;
  addOffset: number;
  limit: number;
  maxId: number;
  minId: number;
  hash: bigint;

  protected get [id]() {
    return 0x4423e6c5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
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
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.offsetId, "number", "int"],
      [this.offsetDate, "number", "int"],
      [this.addOffset, "number", "int"],
      [this.limit, "number", "int"],
      [this.maxId, "number", "int"],
      [this.minId, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; offsetId: number; offsetDate: number; addOffset: number; limit: number; maxId: number; minId: number; hash: bigint }) {
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

export class MessagesSearch extends Function {
  peer: constructors.TypeInputPeer;
  q: string;
  fromId?: constructors.TypeInputPeer;
  topMsgId?: number;
  filter: constructors.TypeMessagesFilter;
  minDate: number;
  maxDate: number;
  offsetId: number;
  addOffset: number;
  limit: number;
  maxId: number;
  minId: number;
  hash: bigint;

  protected get [id]() {
    return 0xa0fda762;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["q", "string", "string"],
      ["fromId", constructors.TypeInputPeer, "flags.0?InputPeer"],
      ["topMsgId", "number", "flags.1?int"],
      ["filter", constructors.TypeMessagesFilter, "MessagesFilter"],
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
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.q, "string", "string"],
      [this.fromId ?? null, constructors.TypeInputPeer, "flags.0?InputPeer"],
      [this.topMsgId ?? null, "number", "flags.1?int"],
      [this.filter, constructors.TypeMessagesFilter, "MessagesFilter"],
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

  constructor(params: { peer: constructors.TypeInputPeer; q: string; fromId?: constructors.TypeInputPeer; topMsgId?: number; filter: constructors.TypeMessagesFilter; minDate: number; maxDate: number; offsetId: number; addOffset: number; limit: number; maxId: number; minId: number; hash: bigint }) {
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

export class MessagesReadHistory extends Function {
  peer: constructors.TypeInputPeer;
  maxId: number;

  protected get [id]() {
    return 0x0e306d3a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["maxId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.maxId, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; maxId: number }) {
    super();
    this.peer = params.peer;
    this.maxId = params.maxId;
  }
}

export class MessagesDeleteHistory extends Function {
  justClear?: true;
  revoke?: true;
  peer: constructors.TypeInputPeer;
  maxId: number;
  minDate?: number;
  maxDate?: number;

  protected get [id]() {
    return 0xb08f922a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["justClear", "true", "flags.0?true"],
      ["revoke", "true", "flags.1?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
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
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.maxId, "number", "int"],
      [this.minDate ?? null, "number", "flags.2?int"],
      [this.maxDate ?? null, "number", "flags.3?int"],
    ];
  }

  constructor(params: { justClear?: true; revoke?: true; peer: constructors.TypeInputPeer; maxId: number; minDate?: number; maxDate?: number }) {
    super();
    this.justClear = params.justClear;
    this.revoke = params.revoke;
    this.peer = params.peer;
    this.maxId = params.maxId;
    this.minDate = params.minDate;
    this.maxDate = params.maxDate;
  }
}

export class MessagesDeleteMessages extends Function {
  revoke?: true;
  id: Array<number>;

  protected get [id]() {
    return 0xe58e95d2;
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

export class MessagesReceivedMessages extends Function {
  maxId: number;

  protected get [id]() {
    return 0x05a954c0;
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

export class MessagesSetTyping extends Function {
  peer: constructors.TypeInputPeer;
  topMsgId?: number;
  action: constructors.TypeSendMessageAction;

  protected get [id]() {
    return 0x58943ee2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["topMsgId", "number", "flags.0?int"],
      ["action", constructors.TypeSendMessageAction, "SendMessageAction"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
      [this.action, constructors.TypeSendMessageAction, "SendMessageAction"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; topMsgId?: number; action: constructors.TypeSendMessageAction }) {
    super();
    this.peer = params.peer;
    this.topMsgId = params.topMsgId;
    this.action = params.action;
  }
}

export class MessagesSendMessage extends Function {
  noWebpage?: true;
  silent?: true;
  background?: true;
  clearDraft?: true;
  noforwards?: true;
  updateStickersetsOrder?: true;
  peer: constructors.TypeInputPeer;
  replyToMsgId?: number;
  topMsgId?: number;
  message: string;
  randomId: bigint;
  replyMarkup?: constructors.TypeReplyMarkup;
  entities?: Array<constructors.TypeMessageEntity>;
  scheduleDate?: number;
  sendAs?: constructors.TypeInputPeer;

  protected get [id]() {
    return 0x1cc20387;
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
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["replyToMsgId", "number", "flags.0?int"],
      ["topMsgId", "number", "flags.9?int"],
      ["message", "string", "string"],
      ["randomId", "bigint", "long"],
      ["replyMarkup", constructors.TypeReplyMarkup, "flags.2?ReplyMarkup"],
      ["entities", [constructors.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
      ["scheduleDate", "number", "flags.10?int"],
      ["sendAs", constructors.TypeInputPeer, "flags.13?InputPeer"],
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
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.replyToMsgId ?? null, "number", "flags.0?int"],
      [this.topMsgId ?? null, "number", "flags.9?int"],
      [this.message, "string", "string"],
      [this.randomId, "bigint", "long"],
      [this.replyMarkup ?? null, constructors.TypeReplyMarkup, "flags.2?ReplyMarkup"],
      [this.entities ?? null, [constructors.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
      [this.scheduleDate ?? null, "number", "flags.10?int"],
      [this.sendAs ?? null, constructors.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { noWebpage?: true; silent?: true; background?: true; clearDraft?: true; noforwards?: true; updateStickersetsOrder?: true; peer: constructors.TypeInputPeer; replyToMsgId?: number; topMsgId?: number; message: string; randomId: bigint; replyMarkup?: constructors.TypeReplyMarkup; entities?: Array<constructors.TypeMessageEntity>; scheduleDate?: number; sendAs?: constructors.TypeInputPeer }) {
    super();
    this.noWebpage = params.noWebpage;
    this.silent = params.silent;
    this.background = params.background;
    this.clearDraft = params.clearDraft;
    this.noforwards = params.noforwards;
    this.updateStickersetsOrder = params.updateStickersetsOrder;
    this.peer = params.peer;
    this.replyToMsgId = params.replyToMsgId;
    this.topMsgId = params.topMsgId;
    this.message = params.message;
    this.randomId = params.randomId;
    this.replyMarkup = params.replyMarkup;
    this.entities = params.entities;
    this.scheduleDate = params.scheduleDate;
    this.sendAs = params.sendAs;
  }
}

export class MessagesSendMedia extends Function {
  silent?: true;
  background?: true;
  clearDraft?: true;
  noforwards?: true;
  updateStickersetsOrder?: true;
  peer: constructors.TypeInputPeer;
  replyToMsgId?: number;
  topMsgId?: number;
  media: constructors.TypeInputMedia;
  message: string;
  randomId: bigint;
  replyMarkup?: constructors.TypeReplyMarkup;
  entities?: Array<constructors.TypeMessageEntity>;
  scheduleDate?: number;
  sendAs?: constructors.TypeInputPeer;

  protected get [id]() {
    return 0x7547c966;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.5?true"],
      ["background", "true", "flags.6?true"],
      ["clearDraft", "true", "flags.7?true"],
      ["noforwards", "true", "flags.14?true"],
      ["updateStickersetsOrder", "true", "flags.15?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["replyToMsgId", "number", "flags.0?int"],
      ["topMsgId", "number", "flags.9?int"],
      ["media", constructors.TypeInputMedia, "InputMedia"],
      ["message", "string", "string"],
      ["randomId", "bigint", "long"],
      ["replyMarkup", constructors.TypeReplyMarkup, "flags.2?ReplyMarkup"],
      ["entities", [constructors.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
      ["scheduleDate", "number", "flags.10?int"],
      ["sendAs", constructors.TypeInputPeer, "flags.13?InputPeer"],
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
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.replyToMsgId ?? null, "number", "flags.0?int"],
      [this.topMsgId ?? null, "number", "flags.9?int"],
      [this.media, constructors.TypeInputMedia, "InputMedia"],
      [this.message, "string", "string"],
      [this.randomId, "bigint", "long"],
      [this.replyMarkup ?? null, constructors.TypeReplyMarkup, "flags.2?ReplyMarkup"],
      [this.entities ?? null, [constructors.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
      [this.scheduleDate ?? null, "number", "flags.10?int"],
      [this.sendAs ?? null, constructors.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { silent?: true; background?: true; clearDraft?: true; noforwards?: true; updateStickersetsOrder?: true; peer: constructors.TypeInputPeer; replyToMsgId?: number; topMsgId?: number; media: constructors.TypeInputMedia; message: string; randomId: bigint; replyMarkup?: constructors.TypeReplyMarkup; entities?: Array<constructors.TypeMessageEntity>; scheduleDate?: number; sendAs?: constructors.TypeInputPeer }) {
    super();
    this.silent = params.silent;
    this.background = params.background;
    this.clearDraft = params.clearDraft;
    this.noforwards = params.noforwards;
    this.updateStickersetsOrder = params.updateStickersetsOrder;
    this.peer = params.peer;
    this.replyToMsgId = params.replyToMsgId;
    this.topMsgId = params.topMsgId;
    this.media = params.media;
    this.message = params.message;
    this.randomId = params.randomId;
    this.replyMarkup = params.replyMarkup;
    this.entities = params.entities;
    this.scheduleDate = params.scheduleDate;
    this.sendAs = params.sendAs;
  }
}

export class MessagesForwardMessages extends Function {
  silent?: true;
  background?: true;
  withMyScore?: true;
  dropAuthor?: true;
  dropMediaCaptions?: true;
  noforwards?: true;
  fromPeer: constructors.TypeInputPeer;
  id: Array<number>;
  randomId: Array<bigint>;
  toPeer: constructors.TypeInputPeer;
  topMsgId?: number;
  scheduleDate?: number;
  sendAs?: constructors.TypeInputPeer;

  protected get [id]() {
    return 0xc661bbc4;
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
      ["fromPeer", constructors.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
      ["randomId", ["bigint"], "Vector<long>"],
      ["toPeer", constructors.TypeInputPeer, "InputPeer"],
      ["topMsgId", "number", "flags.9?int"],
      ["scheduleDate", "number", "flags.10?int"],
      ["sendAs", constructors.TypeInputPeer, "flags.13?InputPeer"],
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
      [this.fromPeer, constructors.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
      [this.randomId, ["bigint"], "Vector<long>"],
      [this.toPeer, constructors.TypeInputPeer, "InputPeer"],
      [this.topMsgId ?? null, "number", "flags.9?int"],
      [this.scheduleDate ?? null, "number", "flags.10?int"],
      [this.sendAs ?? null, constructors.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { silent?: true; background?: true; withMyScore?: true; dropAuthor?: true; dropMediaCaptions?: true; noforwards?: true; fromPeer: constructors.TypeInputPeer; id: Array<number>; randomId: Array<bigint>; toPeer: constructors.TypeInputPeer; topMsgId?: number; scheduleDate?: number; sendAs?: constructors.TypeInputPeer }) {
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

export class MessagesReportSpam extends Function {
  peer: constructors.TypeInputPeer;

  protected get [id]() {
    return 0xcf1592db;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class MessagesGetPeerSettings extends Function {
  peer: constructors.TypeInputPeer;

  protected get [id]() {
    return 0xefd9a6a2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class MessagesReport extends Function {
  peer: constructors.TypeInputPeer;
  id: Array<number>;
  reason: constructors.TypeReportReason;
  message: string;

  protected get [id]() {
    return 0x8953ab4e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
      ["reason", constructors.TypeReportReason, "ReportReason"],
      ["message", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
      [this.reason, constructors.TypeReportReason, "ReportReason"],
      [this.message, "string", "string"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; id: Array<number>; reason: constructors.TypeReportReason; message: string }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.reason = params.reason;
    this.message = params.message;
  }
}

export class MessagesGetChats extends Function {
  id: Array<bigint>;

  protected get [id]() {
    return 0x49e9528f;
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

export class MessagesGetFullChat extends Function {
  chatId: bigint;

  protected get [id]() {
    return 0xaeb00b34;
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

export class MessagesEditChatTitle extends Function {
  chatId: bigint;
  title: string;

  protected get [id]() {
    return 0x73783ffd;
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

export class MessagesEditChatPhoto extends Function {
  chatId: bigint;
  photo: constructors.TypeInputChatPhoto;

  protected get [id]() {
    return 0x35ddd674;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
      ["photo", constructors.TypeInputChatPhoto, "InputChatPhoto"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
      [this.photo, constructors.TypeInputChatPhoto, "InputChatPhoto"],
    ];
  }

  constructor(params: { chatId: bigint; photo: constructors.TypeInputChatPhoto }) {
    super();
    this.chatId = params.chatId;
    this.photo = params.photo;
  }
}

export class MessagesAddChatUser extends Function {
  chatId: bigint;
  userId: constructors.TypeInputUser;
  fwdLimit: number;

  protected get [id]() {
    return 0xf24753e3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
      ["userId", constructors.TypeInputUser, "InputUser"],
      ["fwdLimit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
      [this.userId, constructors.TypeInputUser, "InputUser"],
      [this.fwdLimit, "number", "int"],
    ];
  }

  constructor(params: { chatId: bigint; userId: constructors.TypeInputUser; fwdLimit: number }) {
    super();
    this.chatId = params.chatId;
    this.userId = params.userId;
    this.fwdLimit = params.fwdLimit;
  }
}

export class MessagesDeleteChatUser extends Function {
  revokeHistory?: true;
  chatId: bigint;
  userId: constructors.TypeInputUser;

  protected get [id]() {
    return 0xa2185cab;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["revokeHistory", "true", "flags.0?true"],
      ["chatId", "bigint", "long"],
      ["userId", constructors.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.revokeHistory ?? null, "true", "flags.0?true"],
      [this.chatId, "bigint", "long"],
      [this.userId, constructors.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { revokeHistory?: true; chatId: bigint; userId: constructors.TypeInputUser }) {
    super();
    this.revokeHistory = params.revokeHistory;
    this.chatId = params.chatId;
    this.userId = params.userId;
  }
}

export class MessagesCreateChat extends Function {
  users: Array<constructors.TypeInputUser>;
  title: string;
  ttlPeriod?: number;

  protected get [id]() {
    return 0x0034a818;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["users", [constructors.TypeInputUser], "Vector<InputUser>"],
      ["title", "string", "string"],
      ["ttlPeriod", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.users, [constructors.TypeInputUser], "Vector<InputUser>"],
      [this.title, "string", "string"],
      [this.ttlPeriod ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { users: Array<constructors.TypeInputUser>; title: string; ttlPeriod?: number }) {
    super();
    this.users = params.users;
    this.title = params.title;
    this.ttlPeriod = params.ttlPeriod;
  }
}

export class MessagesGetDhConfig extends Function {
  version: number;
  randomLength: number;

  protected get [id]() {
    return 0x26cf8950;
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

export class MessagesRequestEncryption extends Function {
  userId: constructors.TypeInputUser;
  randomId: number;
  gA: Uint8Array;

  protected get [id]() {
    return 0xf64daf43;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", constructors.TypeInputUser, "InputUser"],
      ["randomId", "number", "int"],
      ["gA", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, constructors.TypeInputUser, "InputUser"],
      [this.randomId, "number", "int"],
      [this.gA, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { userId: constructors.TypeInputUser; randomId: number; gA: Uint8Array }) {
    super();
    this.userId = params.userId;
    this.randomId = params.randomId;
    this.gA = params.gA;
  }
}

export class MessagesAcceptEncryption extends Function {
  peer: constructors.TypeInputEncryptedChat;
  gB: Uint8Array;
  keyFingerprint: bigint;

  protected get [id]() {
    return 0x3dbc0415;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputEncryptedChat, "InputEncryptedChat"],
      ["gB", Uint8Array, "bytes"],
      ["keyFingerprint", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputEncryptedChat, "InputEncryptedChat"],
      [this.gB, Uint8Array, "bytes"],
      [this.keyFingerprint, "bigint", "long"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputEncryptedChat; gB: Uint8Array; keyFingerprint: bigint }) {
    super();
    this.peer = params.peer;
    this.gB = params.gB;
    this.keyFingerprint = params.keyFingerprint;
  }
}

export class MessagesDiscardEncryption extends Function {
  deleteHistory?: true;
  chatId: number;

  protected get [id]() {
    return 0xf393aea0;
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

export class MessagesSetEncryptedTyping extends Function {
  peer: constructors.TypeInputEncryptedChat;
  typing: boolean;

  protected get [id]() {
    return 0x791451ed;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputEncryptedChat, "InputEncryptedChat"],
      ["typing", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputEncryptedChat, "InputEncryptedChat"],
      [this.typing, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputEncryptedChat; typing: boolean }) {
    super();
    this.peer = params.peer;
    this.typing = params.typing;
  }
}

export class MessagesReadEncryptedHistory extends Function {
  peer: constructors.TypeInputEncryptedChat;
  maxDate: number;

  protected get [id]() {
    return 0x7f4b690a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputEncryptedChat, "InputEncryptedChat"],
      ["maxDate", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputEncryptedChat, "InputEncryptedChat"],
      [this.maxDate, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputEncryptedChat; maxDate: number }) {
    super();
    this.peer = params.peer;
    this.maxDate = params.maxDate;
  }
}

export class MessagesSendEncrypted extends Function {
  silent?: true;
  peer: constructors.TypeInputEncryptedChat;
  randomId: bigint;
  data: Uint8Array;

  protected get [id]() {
    return 0x44fa7a15;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.0?true"],
      ["peer", constructors.TypeInputEncryptedChat, "InputEncryptedChat"],
      ["randomId", "bigint", "long"],
      ["data", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.0?true"],
      [this.peer, constructors.TypeInputEncryptedChat, "InputEncryptedChat"],
      [this.randomId, "bigint", "long"],
      [this.data, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { silent?: true; peer: constructors.TypeInputEncryptedChat; randomId: bigint; data: Uint8Array }) {
    super();
    this.silent = params.silent;
    this.peer = params.peer;
    this.randomId = params.randomId;
    this.data = params.data;
  }
}

export class MessagesSendEncryptedFile extends Function {
  silent?: true;
  peer: constructors.TypeInputEncryptedChat;
  randomId: bigint;
  data: Uint8Array;
  file: constructors.TypeInputEncryptedFile;

  protected get [id]() {
    return 0x5559481d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.0?true"],
      ["peer", constructors.TypeInputEncryptedChat, "InputEncryptedChat"],
      ["randomId", "bigint", "long"],
      ["data", Uint8Array, "bytes"],
      ["file", constructors.TypeInputEncryptedFile, "InputEncryptedFile"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.0?true"],
      [this.peer, constructors.TypeInputEncryptedChat, "InputEncryptedChat"],
      [this.randomId, "bigint", "long"],
      [this.data, Uint8Array, "bytes"],
      [this.file, constructors.TypeInputEncryptedFile, "InputEncryptedFile"],
    ];
  }

  constructor(params: { silent?: true; peer: constructors.TypeInputEncryptedChat; randomId: bigint; data: Uint8Array; file: constructors.TypeInputEncryptedFile }) {
    super();
    this.silent = params.silent;
    this.peer = params.peer;
    this.randomId = params.randomId;
    this.data = params.data;
    this.file = params.file;
  }
}

export class MessagesSendEncryptedService extends Function {
  peer: constructors.TypeInputEncryptedChat;
  randomId: bigint;
  data: Uint8Array;

  protected get [id]() {
    return 0x32d439a4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputEncryptedChat, "InputEncryptedChat"],
      ["randomId", "bigint", "long"],
      ["data", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputEncryptedChat, "InputEncryptedChat"],
      [this.randomId, "bigint", "long"],
      [this.data, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputEncryptedChat; randomId: bigint; data: Uint8Array }) {
    super();
    this.peer = params.peer;
    this.randomId = params.randomId;
    this.data = params.data;
  }
}

export class MessagesReceivedQueue extends Function {
  maxQts: number;

  protected get [id]() {
    return 0x55a5bb66;
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

export class MessagesReportEncryptedSpam extends Function {
  peer: constructors.TypeInputEncryptedChat;

  protected get [id]() {
    return 0x4b0c8c0f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputEncryptedChat, "InputEncryptedChat"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputEncryptedChat, "InputEncryptedChat"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputEncryptedChat }) {
    super();
    this.peer = params.peer;
  }
}

export class MessagesReadMessageContents extends Function {
  id: Array<number>;

  protected get [id]() {
    return 0x36a73f77;
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

export class MessagesGetStickers extends Function {
  emoticon: string;
  hash: bigint;

  protected get [id]() {
    return 0xd5a5d3a1;
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

export class MessagesGetAllStickers extends Function {
  hash: bigint;

  protected get [id]() {
    return 0xb8a0a1a8;
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

export class MessagesGetWebPagePreview extends Function {
  message: string;
  entities?: Array<constructors.TypeMessageEntity>;

  protected get [id]() {
    return 0x8b68b0cc;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["message", "string", "string"],
      ["entities", [constructors.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.message, "string", "string"],
      [this.entities ?? null, [constructors.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
    ];
  }

  constructor(params: { message: string; entities?: Array<constructors.TypeMessageEntity> }) {
    super();
    this.message = params.message;
    this.entities = params.entities;
  }
}

export class MessagesExportChatInvite extends Function {
  legacyRevokePermanent?: true;
  requestNeeded?: true;
  peer: constructors.TypeInputPeer;
  expireDate?: number;
  usageLimit?: number;
  title?: string;

  protected get [id]() {
    return 0xa02ce5d5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["legacyRevokePermanent", "true", "flags.2?true"],
      ["requestNeeded", "true", "flags.3?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
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
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.expireDate ?? null, "number", "flags.0?int"],
      [this.usageLimit ?? null, "number", "flags.1?int"],
      [this.title ?? null, "string", "flags.4?string"],
    ];
  }

  constructor(params: { legacyRevokePermanent?: true; requestNeeded?: true; peer: constructors.TypeInputPeer; expireDate?: number; usageLimit?: number; title?: string }) {
    super();
    this.legacyRevokePermanent = params.legacyRevokePermanent;
    this.requestNeeded = params.requestNeeded;
    this.peer = params.peer;
    this.expireDate = params.expireDate;
    this.usageLimit = params.usageLimit;
    this.title = params.title;
  }
}

export class MessagesCheckChatInvite extends Function {
  hash: string;

  protected get [id]() {
    return 0x3eadb1bb;
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

export class MessagesImportChatInvite extends Function {
  hash: string;

  protected get [id]() {
    return 0x6c50051c;
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

export class MessagesGetStickerSet extends Function {
  stickerset: constructors.TypeInputStickerSet;
  hash: number;

  protected get [id]() {
    return 0xc8a0ec74;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", constructors.TypeInputStickerSet, "InputStickerSet"],
      ["hash", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, constructors.TypeInputStickerSet, "InputStickerSet"],
      [this.hash, "number", "int"],
    ];
  }

  constructor(params: { stickerset: constructors.TypeInputStickerSet; hash: number }) {
    super();
    this.stickerset = params.stickerset;
    this.hash = params.hash;
  }
}

export class MessagesInstallStickerSet extends Function {
  stickerset: constructors.TypeInputStickerSet;
  archived: boolean;

  protected get [id]() {
    return 0xc78fe460;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", constructors.TypeInputStickerSet, "InputStickerSet"],
      ["archived", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, constructors.TypeInputStickerSet, "InputStickerSet"],
      [this.archived, "boolean", "Bool"],
    ];
  }

  constructor(params: { stickerset: constructors.TypeInputStickerSet; archived: boolean }) {
    super();
    this.stickerset = params.stickerset;
    this.archived = params.archived;
  }
}

export class MessagesUninstallStickerSet extends Function {
  stickerset: constructors.TypeInputStickerSet;

  protected get [id]() {
    return 0xf96e55de;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", constructors.TypeInputStickerSet, "InputStickerSet"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, constructors.TypeInputStickerSet, "InputStickerSet"],
    ];
  }

  constructor(params: { stickerset: constructors.TypeInputStickerSet }) {
    super();
    this.stickerset = params.stickerset;
  }
}

export class MessagesStartBot extends Function {
  bot: constructors.TypeInputUser;
  peer: constructors.TypeInputPeer;
  randomId: bigint;
  startParam: string;

  protected get [id]() {
    return 0xe6df7378;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", constructors.TypeInputUser, "InputUser"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["randomId", "bigint", "long"],
      ["startParam", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, constructors.TypeInputUser, "InputUser"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.randomId, "bigint", "long"],
      [this.startParam, "string", "string"],
    ];
  }

  constructor(params: { bot: constructors.TypeInputUser; peer: constructors.TypeInputPeer; randomId: bigint; startParam: string }) {
    super();
    this.bot = params.bot;
    this.peer = params.peer;
    this.randomId = params.randomId;
    this.startParam = params.startParam;
  }
}

export class MessagesGetMessagesViews extends Function {
  peer: constructors.TypeInputPeer;
  id: Array<number>;
  increment: boolean;

  protected get [id]() {
    return 0x5784d3e1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
      ["increment", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
      [this.increment, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; id: Array<number>; increment: boolean }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.increment = params.increment;
  }
}

export class MessagesEditChatAdmin extends Function {
  chatId: bigint;
  userId: constructors.TypeInputUser;
  isAdmin: boolean;

  protected get [id]() {
    return 0xa85bd1c2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
      ["userId", constructors.TypeInputUser, "InputUser"],
      ["isAdmin", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
      [this.userId, constructors.TypeInputUser, "InputUser"],
      [this.isAdmin, "boolean", "Bool"],
    ];
  }

  constructor(params: { chatId: bigint; userId: constructors.TypeInputUser; isAdmin: boolean }) {
    super();
    this.chatId = params.chatId;
    this.userId = params.userId;
    this.isAdmin = params.isAdmin;
  }
}

export class MessagesMigrateChat extends Function {
  chatId: bigint;

  protected get [id]() {
    return 0xa2875319;
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

export class MessagesSearchGlobal extends Function {
  folderId?: number;
  q: string;
  filter: constructors.TypeMessagesFilter;
  minDate: number;
  maxDate: number;
  offsetRate: number;
  offsetPeer: constructors.TypeInputPeer;
  offsetId: number;
  limit: number;

  protected get [id]() {
    return 0x4bc6589a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["folderId", "number", "flags.0?int"],
      ["q", "string", "string"],
      ["filter", constructors.TypeMessagesFilter, "MessagesFilter"],
      ["minDate", "number", "int"],
      ["maxDate", "number", "int"],
      ["offsetRate", "number", "int"],
      ["offsetPeer", constructors.TypeInputPeer, "InputPeer"],
      ["offsetId", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.folderId ?? null, "number", "flags.0?int"],
      [this.q, "string", "string"],
      [this.filter, constructors.TypeMessagesFilter, "MessagesFilter"],
      [this.minDate, "number", "int"],
      [this.maxDate, "number", "int"],
      [this.offsetRate, "number", "int"],
      [this.offsetPeer, constructors.TypeInputPeer, "InputPeer"],
      [this.offsetId, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { folderId?: number; q: string; filter: constructors.TypeMessagesFilter; minDate: number; maxDate: number; offsetRate: number; offsetPeer: constructors.TypeInputPeer; offsetId: number; limit: number }) {
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

export class MessagesReorderStickerSets extends Function {
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

export class MessagesGetDocumentByHash extends Function {
  sha256: Uint8Array;
  size: bigint;
  mimeType: string;

  protected get [id]() {
    return 0xb1f2061f;
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

export class MessagesGetSavedGifs extends Function {
  hash: bigint;

  protected get [id]() {
    return 0x5cf09635;
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

export class MessagesSaveGif extends Function {
  id: constructors.TypeInputDocument;
  unsave: boolean;

  protected get [id]() {
    return 0x327a30cb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", constructors.TypeInputDocument, "InputDocument"],
      ["unsave", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, constructors.TypeInputDocument, "InputDocument"],
      [this.unsave, "boolean", "Bool"],
    ];
  }

  constructor(params: { id: constructors.TypeInputDocument; unsave: boolean }) {
    super();
    this.id = params.id;
    this.unsave = params.unsave;
  }
}

export class MessagesGetInlineBotResults extends Function {
  bot: constructors.TypeInputUser;
  peer: constructors.TypeInputPeer;
  geoPoint?: constructors.TypeInputGeoPoint;
  query: string;
  offset: string;

  protected get [id]() {
    return 0x514e999d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["bot", constructors.TypeInputUser, "InputUser"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["geoPoint", constructors.TypeInputGeoPoint, "flags.0?InputGeoPoint"],
      ["query", "string", "string"],
      ["offset", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.bot, constructors.TypeInputUser, "InputUser"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.geoPoint ?? null, constructors.TypeInputGeoPoint, "flags.0?InputGeoPoint"],
      [this.query, "string", "string"],
      [this.offset, "string", "string"],
    ];
  }

  constructor(params: { bot: constructors.TypeInputUser; peer: constructors.TypeInputPeer; geoPoint?: constructors.TypeInputGeoPoint; query: string; offset: string }) {
    super();
    this.bot = params.bot;
    this.peer = params.peer;
    this.geoPoint = params.geoPoint;
    this.query = params.query;
    this.offset = params.offset;
  }
}

export class MessagesSetInlineBotResults extends Function {
  gallery?: true;
  private?: true;
  queryId: bigint;
  results: Array<constructors.TypeInputBotInlineResult>;
  cacheTime: number;
  nextOffset?: string;
  switchPm?: constructors.TypeInlineBotSwitchPM;
  switchWebview?: constructors.TypeInlineBotWebView;

  protected get [id]() {
    return 0xbb12a419;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["gallery", "true", "flags.0?true"],
      ["private", "true", "flags.1?true"],
      ["queryId", "bigint", "long"],
      ["results", [constructors.TypeInputBotInlineResult], "Vector<InputBotInlineResult>"],
      ["cacheTime", "number", "int"],
      ["nextOffset", "string", "flags.2?string"],
      ["switchPm", constructors.TypeInlineBotSwitchPM, "flags.3?InlineBotSwitchPM"],
      ["switchWebview", constructors.TypeInlineBotWebView, "flags.4?InlineBotWebView"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.gallery ?? null, "true", "flags.0?true"],
      [this.private ?? null, "true", "flags.1?true"],
      [this.queryId, "bigint", "long"],
      [this.results, [constructors.TypeInputBotInlineResult], "Vector<InputBotInlineResult>"],
      [this.cacheTime, "number", "int"],
      [this.nextOffset ?? null, "string", "flags.2?string"],
      [this.switchPm ?? null, constructors.TypeInlineBotSwitchPM, "flags.3?InlineBotSwitchPM"],
      [this.switchWebview ?? null, constructors.TypeInlineBotWebView, "flags.4?InlineBotWebView"],
    ];
  }

  constructor(params: { gallery?: true; private?: true; queryId: bigint; results: Array<constructors.TypeInputBotInlineResult>; cacheTime: number; nextOffset?: string; switchPm?: constructors.TypeInlineBotSwitchPM; switchWebview?: constructors.TypeInlineBotWebView }) {
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

export class MessagesSendInlineBotResult extends Function {
  silent?: true;
  background?: true;
  clearDraft?: true;
  hideVia?: true;
  peer: constructors.TypeInputPeer;
  replyToMsgId?: number;
  topMsgId?: number;
  randomId: bigint;
  queryId: bigint;
  id: string;
  scheduleDate?: number;
  sendAs?: constructors.TypeInputPeer;

  protected get [id]() {
    return 0xd3fbdccb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.5?true"],
      ["background", "true", "flags.6?true"],
      ["clearDraft", "true", "flags.7?true"],
      ["hideVia", "true", "flags.11?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["replyToMsgId", "number", "flags.0?int"],
      ["topMsgId", "number", "flags.9?int"],
      ["randomId", "bigint", "long"],
      ["queryId", "bigint", "long"],
      ["id", "string", "string"],
      ["scheduleDate", "number", "flags.10?int"],
      ["sendAs", constructors.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.background ?? null, "true", "flags.6?true"],
      [this.clearDraft ?? null, "true", "flags.7?true"],
      [this.hideVia ?? null, "true", "flags.11?true"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.replyToMsgId ?? null, "number", "flags.0?int"],
      [this.topMsgId ?? null, "number", "flags.9?int"],
      [this.randomId, "bigint", "long"],
      [this.queryId, "bigint", "long"],
      [this.id, "string", "string"],
      [this.scheduleDate ?? null, "number", "flags.10?int"],
      [this.sendAs ?? null, constructors.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { silent?: true; background?: true; clearDraft?: true; hideVia?: true; peer: constructors.TypeInputPeer; replyToMsgId?: number; topMsgId?: number; randomId: bigint; queryId: bigint; id: string; scheduleDate?: number; sendAs?: constructors.TypeInputPeer }) {
    super();
    this.silent = params.silent;
    this.background = params.background;
    this.clearDraft = params.clearDraft;
    this.hideVia = params.hideVia;
    this.peer = params.peer;
    this.replyToMsgId = params.replyToMsgId;
    this.topMsgId = params.topMsgId;
    this.randomId = params.randomId;
    this.queryId = params.queryId;
    this.id = params.id;
    this.scheduleDate = params.scheduleDate;
    this.sendAs = params.sendAs;
  }
}

export class MessagesGetMessageEditData extends Function {
  peer: constructors.TypeInputPeer;
  id: number;

  protected get [id]() {
    return 0xfda68d36;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.id, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; id: number }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class MessagesEditMessage extends Function {
  noWebpage?: true;
  peer: constructors.TypeInputPeer;
  id: number;
  message?: string;
  media?: constructors.TypeInputMedia;
  replyMarkup?: constructors.TypeReplyMarkup;
  entities?: Array<constructors.TypeMessageEntity>;
  scheduleDate?: number;

  protected get [id]() {
    return 0x48f71778;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["noWebpage", "true", "flags.1?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["message", "string", "flags.11?string"],
      ["media", constructors.TypeInputMedia, "flags.14?InputMedia"],
      ["replyMarkup", constructors.TypeReplyMarkup, "flags.2?ReplyMarkup"],
      ["entities", [constructors.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
      ["scheduleDate", "number", "flags.15?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.noWebpage ?? null, "true", "flags.1?true"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.message ?? null, "string", "flags.11?string"],
      [this.media ?? null, constructors.TypeInputMedia, "flags.14?InputMedia"],
      [this.replyMarkup ?? null, constructors.TypeReplyMarkup, "flags.2?ReplyMarkup"],
      [this.entities ?? null, [constructors.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
      [this.scheduleDate ?? null, "number", "flags.15?int"],
    ];
  }

  constructor(params: { noWebpage?: true; peer: constructors.TypeInputPeer; id: number; message?: string; media?: constructors.TypeInputMedia; replyMarkup?: constructors.TypeReplyMarkup; entities?: Array<constructors.TypeMessageEntity>; scheduleDate?: number }) {
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

export class MessagesEditInlineBotMessage extends Function {
  noWebpage?: true;
  id: constructors.TypeInputBotInlineMessageID;
  message?: string;
  media?: constructors.TypeInputMedia;
  replyMarkup?: constructors.TypeReplyMarkup;
  entities?: Array<constructors.TypeMessageEntity>;

  protected get [id]() {
    return 0x83557dba;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["noWebpage", "true", "flags.1?true"],
      ["id", constructors.TypeInputBotInlineMessageID, "InputBotInlineMessageID"],
      ["message", "string", "flags.11?string"],
      ["media", constructors.TypeInputMedia, "flags.14?InputMedia"],
      ["replyMarkup", constructors.TypeReplyMarkup, "flags.2?ReplyMarkup"],
      ["entities", [constructors.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.noWebpage ?? null, "true", "flags.1?true"],
      [this.id, constructors.TypeInputBotInlineMessageID, "InputBotInlineMessageID"],
      [this.message ?? null, "string", "flags.11?string"],
      [this.media ?? null, constructors.TypeInputMedia, "flags.14?InputMedia"],
      [this.replyMarkup ?? null, constructors.TypeReplyMarkup, "flags.2?ReplyMarkup"],
      [this.entities ?? null, [constructors.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
    ];
  }

  constructor(params: { noWebpage?: true; id: constructors.TypeInputBotInlineMessageID; message?: string; media?: constructors.TypeInputMedia; replyMarkup?: constructors.TypeReplyMarkup; entities?: Array<constructors.TypeMessageEntity> }) {
    super();
    this.noWebpage = params.noWebpage;
    this.id = params.id;
    this.message = params.message;
    this.media = params.media;
    this.replyMarkup = params.replyMarkup;
    this.entities = params.entities;
  }
}

export class MessagesGetBotCallbackAnswer extends Function {
  game?: true;
  peer: constructors.TypeInputPeer;
  msgId: number;
  data?: Uint8Array;
  password?: constructors.TypeInputCheckPasswordSRP;

  protected get [id]() {
    return 0x9342ca07;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["game", "true", "flags.1?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["data", Uint8Array, "flags.0?bytes"],
      ["password", constructors.TypeInputCheckPasswordSRP, "flags.2?InputCheckPasswordSRP"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.game ?? null, "true", "flags.1?true"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.data ?? null, Uint8Array, "flags.0?bytes"],
      [this.password ?? null, constructors.TypeInputCheckPasswordSRP, "flags.2?InputCheckPasswordSRP"],
    ];
  }

  constructor(params: { game?: true; peer: constructors.TypeInputPeer; msgId: number; data?: Uint8Array; password?: constructors.TypeInputCheckPasswordSRP }) {
    super();
    this.game = params.game;
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.data = params.data;
    this.password = params.password;
  }
}

export class MessagesSetBotCallbackAnswer extends Function {
  alert?: true;
  queryId: bigint;
  message?: string;
  url?: string;
  cacheTime: number;

  protected get [id]() {
    return 0xd58f130a;
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

export class MessagesGetPeerDialogs extends Function {
  peers: Array<constructors.TypeInputDialogPeer>;

  protected get [id]() {
    return 0xe470bcfd;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peers", [constructors.TypeInputDialogPeer], "Vector<InputDialogPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peers, [constructors.TypeInputDialogPeer], "Vector<InputDialogPeer>"],
    ];
  }

  constructor(params: { peers: Array<constructors.TypeInputDialogPeer> }) {
    super();
    this.peers = params.peers;
  }
}

export class MessagesSaveDraft extends Function {
  noWebpage?: true;
  replyToMsgId?: number;
  topMsgId?: number;
  peer: constructors.TypeInputPeer;
  message: string;
  entities?: Array<constructors.TypeMessageEntity>;

  protected get [id]() {
    return 0xb4331e3f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["noWebpage", "true", "flags.1?true"],
      ["replyToMsgId", "number", "flags.0?int"],
      ["topMsgId", "number", "flags.2?int"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["message", "string", "string"],
      ["entities", [constructors.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.noWebpage ?? null, "true", "flags.1?true"],
      [this.replyToMsgId ?? null, "number", "flags.0?int"],
      [this.topMsgId ?? null, "number", "flags.2?int"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.message, "string", "string"],
      [this.entities ?? null, [constructors.TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
    ];
  }

  constructor(params: { noWebpage?: true; replyToMsgId?: number; topMsgId?: number; peer: constructors.TypeInputPeer; message: string; entities?: Array<constructors.TypeMessageEntity> }) {
    super();
    this.noWebpage = params.noWebpage;
    this.replyToMsgId = params.replyToMsgId;
    this.topMsgId = params.topMsgId;
    this.peer = params.peer;
    this.message = params.message;
    this.entities = params.entities;
  }
}

export class MessagesGetAllDrafts extends Function {
  protected get [id]() {
    return 0x6a3f8d65;
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

export class MessagesGetFeaturedStickers extends Function {
  hash: bigint;

  protected get [id]() {
    return 0x64780b14;
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

export class MessagesReadFeaturedStickers extends Function {
  id: Array<bigint>;

  protected get [id]() {
    return 0x5b118126;
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

export class MessagesGetRecentStickers extends Function {
  attached?: true;
  hash: bigint;

  protected get [id]() {
    return 0x9da9403b;
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

export class MessagesSaveRecentSticker extends Function {
  attached?: true;
  id: constructors.TypeInputDocument;
  unsave: boolean;

  protected get [id]() {
    return 0x392718f8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["attached", "true", "flags.0?true"],
      ["id", constructors.TypeInputDocument, "InputDocument"],
      ["unsave", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.attached ?? null, "true", "flags.0?true"],
      [this.id, constructors.TypeInputDocument, "InputDocument"],
      [this.unsave, "boolean", "Bool"],
    ];
  }

  constructor(params: { attached?: true; id: constructors.TypeInputDocument; unsave: boolean }) {
    super();
    this.attached = params.attached;
    this.id = params.id;
    this.unsave = params.unsave;
  }
}

export class MessagesClearRecentStickers extends Function {
  attached?: true;

  protected get [id]() {
    return 0x8999602d;
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

export class MessagesGetArchivedStickers extends Function {
  masks?: true;
  emojis?: true;
  offsetId: bigint;
  limit: number;

  protected get [id]() {
    return 0x57f17692;
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

export class MessagesGetMaskStickers extends Function {
  hash: bigint;

  protected get [id]() {
    return 0x640f82b8;
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

export class MessagesGetAttachedStickers extends Function {
  media: constructors.TypeInputStickeredMedia;

  protected get [id]() {
    return 0xcc5b67cc;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["media", constructors.TypeInputStickeredMedia, "InputStickeredMedia"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.media, constructors.TypeInputStickeredMedia, "InputStickeredMedia"],
    ];
  }

  constructor(params: { media: constructors.TypeInputStickeredMedia }) {
    super();
    this.media = params.media;
  }
}

export class MessagesSetGameScore extends Function {
  editMessage?: true;
  force?: true;
  peer: constructors.TypeInputPeer;
  id: number;
  userId: constructors.TypeInputUser;
  score: number;

  protected get [id]() {
    return 0x8ef8ecc0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["editMessage", "true", "flags.0?true"],
      ["force", "true", "flags.1?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["userId", constructors.TypeInputUser, "InputUser"],
      ["score", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.editMessage ?? null, "true", "flags.0?true"],
      [this.force ?? null, "true", "flags.1?true"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.userId, constructors.TypeInputUser, "InputUser"],
      [this.score, "number", "int"],
    ];
  }

  constructor(params: { editMessage?: true; force?: true; peer: constructors.TypeInputPeer; id: number; userId: constructors.TypeInputUser; score: number }) {
    super();
    this.editMessage = params.editMessage;
    this.force = params.force;
    this.peer = params.peer;
    this.id = params.id;
    this.userId = params.userId;
    this.score = params.score;
  }
}

export class MessagesSetInlineGameScore extends Function {
  editMessage?: true;
  force?: true;
  id: constructors.TypeInputBotInlineMessageID;
  userId: constructors.TypeInputUser;
  score: number;

  protected get [id]() {
    return 0x15ad9f64;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["editMessage", "true", "flags.0?true"],
      ["force", "true", "flags.1?true"],
      ["id", constructors.TypeInputBotInlineMessageID, "InputBotInlineMessageID"],
      ["userId", constructors.TypeInputUser, "InputUser"],
      ["score", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.editMessage ?? null, "true", "flags.0?true"],
      [this.force ?? null, "true", "flags.1?true"],
      [this.id, constructors.TypeInputBotInlineMessageID, "InputBotInlineMessageID"],
      [this.userId, constructors.TypeInputUser, "InputUser"],
      [this.score, "number", "int"],
    ];
  }

  constructor(params: { editMessage?: true; force?: true; id: constructors.TypeInputBotInlineMessageID; userId: constructors.TypeInputUser; score: number }) {
    super();
    this.editMessage = params.editMessage;
    this.force = params.force;
    this.id = params.id;
    this.userId = params.userId;
    this.score = params.score;
  }
}

export class MessagesGetGameHighScores extends Function {
  peer: constructors.TypeInputPeer;
  id: number;
  userId: constructors.TypeInputUser;

  protected get [id]() {
    return 0xe822649d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["userId", constructors.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.userId, constructors.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; id: number; userId: constructors.TypeInputUser }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.userId = params.userId;
  }
}

export class MessagesGetInlineGameHighScores extends Function {
  id: constructors.TypeInputBotInlineMessageID;
  userId: constructors.TypeInputUser;

  protected get [id]() {
    return 0x0f635e1b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", constructors.TypeInputBotInlineMessageID, "InputBotInlineMessageID"],
      ["userId", constructors.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, constructors.TypeInputBotInlineMessageID, "InputBotInlineMessageID"],
      [this.userId, constructors.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { id: constructors.TypeInputBotInlineMessageID; userId: constructors.TypeInputUser }) {
    super();
    this.id = params.id;
    this.userId = params.userId;
  }
}

export class MessagesGetCommonChats extends Function {
  userId: constructors.TypeInputUser;
  maxId: bigint;
  limit: number;

  protected get [id]() {
    return 0xe40ca104;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", constructors.TypeInputUser, "InputUser"],
      ["maxId", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, constructors.TypeInputUser, "InputUser"],
      [this.maxId, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { userId: constructors.TypeInputUser; maxId: bigint; limit: number }) {
    super();
    this.userId = params.userId;
    this.maxId = params.maxId;
    this.limit = params.limit;
  }
}

export class MessagesGetAllChats extends Function {
  exceptIds: Array<bigint>;

  protected get [id]() {
    return 0x875f74be;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["exceptIds", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.exceptIds, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { exceptIds: Array<bigint> }) {
    super();
    this.exceptIds = params.exceptIds;
  }
}

export class MessagesGetWebPage extends Function {
  url: string;
  hash: number;

  protected get [id]() {
    return 0x32ca8f91;
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

export class MessagesToggleDialogPin extends Function {
  pinned?: true;
  peer: constructors.TypeInputDialogPeer;

  protected get [id]() {
    return 0xa731e257;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pinned", "true", "flags.0?true"],
      ["peer", constructors.TypeInputDialogPeer, "InputDialogPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pinned ?? null, "true", "flags.0?true"],
      [this.peer, constructors.TypeInputDialogPeer, "InputDialogPeer"],
    ];
  }

  constructor(params: { pinned?: true; peer: constructors.TypeInputDialogPeer }) {
    super();
    this.pinned = params.pinned;
    this.peer = params.peer;
  }
}

export class MessagesReorderPinnedDialogs extends Function {
  force?: true;
  folderId: number;
  order: Array<constructors.TypeInputDialogPeer>;

  protected get [id]() {
    return 0x3b1adf37;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["force", "true", "flags.0?true"],
      ["folderId", "number", "int"],
      ["order", [constructors.TypeInputDialogPeer], "Vector<InputDialogPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.force ?? null, "true", "flags.0?true"],
      [this.folderId, "number", "int"],
      [this.order, [constructors.TypeInputDialogPeer], "Vector<InputDialogPeer>"],
    ];
  }

  constructor(params: { force?: true; folderId: number; order: Array<constructors.TypeInputDialogPeer> }) {
    super();
    this.force = params.force;
    this.folderId = params.folderId;
    this.order = params.order;
  }
}

export class MessagesGetPinnedDialogs extends Function {
  folderId: number;

  protected get [id]() {
    return 0xd6b94df2;
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

export class MessagesSetBotShippingResults extends Function {
  queryId: bigint;
  error?: string;
  shippingOptions?: Array<constructors.TypeShippingOption>;

  protected get [id]() {
    return 0xe5f672fa;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["queryId", "bigint", "long"],
      ["error", "string", "flags.0?string"],
      ["shippingOptions", [constructors.TypeShippingOption], "flags.1?Vector<ShippingOption>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.queryId, "bigint", "long"],
      [this.error ?? null, "string", "flags.0?string"],
      [this.shippingOptions ?? null, [constructors.TypeShippingOption], "flags.1?Vector<ShippingOption>"],
    ];
  }

  constructor(params: { queryId: bigint; error?: string; shippingOptions?: Array<constructors.TypeShippingOption> }) {
    super();
    this.queryId = params.queryId;
    this.error = params.error;
    this.shippingOptions = params.shippingOptions;
  }
}

export class MessagesSetBotPrecheckoutResults extends Function {
  success?: true;
  queryId: bigint;
  error?: string;

  protected get [id]() {
    return 0x09c2dd95;
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

export class MessagesUploadMedia extends Function {
  peer: constructors.TypeInputPeer;
  media: constructors.TypeInputMedia;

  protected get [id]() {
    return 0x519bc2b1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["media", constructors.TypeInputMedia, "InputMedia"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.media, constructors.TypeInputMedia, "InputMedia"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; media: constructors.TypeInputMedia }) {
    super();
    this.peer = params.peer;
    this.media = params.media;
  }
}

export class MessagesSendScreenshotNotification extends Function {
  peer: constructors.TypeInputPeer;
  replyToMsgId: number;
  randomId: bigint;

  protected get [id]() {
    return 0xc97df020;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["replyToMsgId", "number", "int"],
      ["randomId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.replyToMsgId, "number", "int"],
      [this.randomId, "bigint", "long"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; replyToMsgId: number; randomId: bigint }) {
    super();
    this.peer = params.peer;
    this.replyToMsgId = params.replyToMsgId;
    this.randomId = params.randomId;
  }
}

export class MessagesGetFavedStickers extends Function {
  hash: bigint;

  protected get [id]() {
    return 0x04f1aaa9;
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

export class MessagesFaveSticker extends Function {
  id: constructors.TypeInputDocument;
  unfave: boolean;

  protected get [id]() {
    return 0xb9ffc55b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", constructors.TypeInputDocument, "InputDocument"],
      ["unfave", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, constructors.TypeInputDocument, "InputDocument"],
      [this.unfave, "boolean", "Bool"],
    ];
  }

  constructor(params: { id: constructors.TypeInputDocument; unfave: boolean }) {
    super();
    this.id = params.id;
    this.unfave = params.unfave;
  }
}

export class MessagesGetUnreadMentions extends Function {
  peer: constructors.TypeInputPeer;
  topMsgId?: number;
  offsetId: number;
  addOffset: number;
  limit: number;
  maxId: number;
  minId: number;

  protected get [id]() {
    return 0xf107e790;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
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
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
      [this.offsetId, "number", "int"],
      [this.addOffset, "number", "int"],
      [this.limit, "number", "int"],
      [this.maxId, "number", "int"],
      [this.minId, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; topMsgId?: number; offsetId: number; addOffset: number; limit: number; maxId: number; minId: number }) {
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

export class MessagesReadMentions extends Function {
  peer: constructors.TypeInputPeer;
  topMsgId?: number;

  protected get [id]() {
    return 0x36e5bf4d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["topMsgId", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; topMsgId?: number }) {
    super();
    this.peer = params.peer;
    this.topMsgId = params.topMsgId;
  }
}

export class MessagesGetRecentLocations extends Function {
  peer: constructors.TypeInputPeer;
  limit: number;
  hash: bigint;

  protected get [id]() {
    return 0x702a40e0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["limit", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.limit, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; limit: number; hash: bigint }) {
    super();
    this.peer = params.peer;
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

export class MessagesSendMultiMedia extends Function {
  silent?: true;
  background?: true;
  clearDraft?: true;
  noforwards?: true;
  updateStickersetsOrder?: true;
  peer: constructors.TypeInputPeer;
  replyToMsgId?: number;
  topMsgId?: number;
  multiMedia: Array<constructors.TypeInputSingleMedia>;
  scheduleDate?: number;
  sendAs?: constructors.TypeInputPeer;

  protected get [id]() {
    return 0xb6f11a1c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.5?true"],
      ["background", "true", "flags.6?true"],
      ["clearDraft", "true", "flags.7?true"],
      ["noforwards", "true", "flags.14?true"],
      ["updateStickersetsOrder", "true", "flags.15?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["replyToMsgId", "number", "flags.0?int"],
      ["topMsgId", "number", "flags.9?int"],
      ["multiMedia", [constructors.TypeInputSingleMedia], "Vector<InputSingleMedia>"],
      ["scheduleDate", "number", "flags.10?int"],
      ["sendAs", constructors.TypeInputPeer, "flags.13?InputPeer"],
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
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.replyToMsgId ?? null, "number", "flags.0?int"],
      [this.topMsgId ?? null, "number", "flags.9?int"],
      [this.multiMedia, [constructors.TypeInputSingleMedia], "Vector<InputSingleMedia>"],
      [this.scheduleDate ?? null, "number", "flags.10?int"],
      [this.sendAs ?? null, constructors.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { silent?: true; background?: true; clearDraft?: true; noforwards?: true; updateStickersetsOrder?: true; peer: constructors.TypeInputPeer; replyToMsgId?: number; topMsgId?: number; multiMedia: Array<constructors.TypeInputSingleMedia>; scheduleDate?: number; sendAs?: constructors.TypeInputPeer }) {
    super();
    this.silent = params.silent;
    this.background = params.background;
    this.clearDraft = params.clearDraft;
    this.noforwards = params.noforwards;
    this.updateStickersetsOrder = params.updateStickersetsOrder;
    this.peer = params.peer;
    this.replyToMsgId = params.replyToMsgId;
    this.topMsgId = params.topMsgId;
    this.multiMedia = params.multiMedia;
    this.scheduleDate = params.scheduleDate;
    this.sendAs = params.sendAs;
  }
}

export class MessagesUploadEncryptedFile extends Function {
  peer: constructors.TypeInputEncryptedChat;
  file: constructors.TypeInputEncryptedFile;

  protected get [id]() {
    return 0x5057c497;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputEncryptedChat, "InputEncryptedChat"],
      ["file", constructors.TypeInputEncryptedFile, "InputEncryptedFile"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputEncryptedChat, "InputEncryptedChat"],
      [this.file, constructors.TypeInputEncryptedFile, "InputEncryptedFile"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputEncryptedChat; file: constructors.TypeInputEncryptedFile }) {
    super();
    this.peer = params.peer;
    this.file = params.file;
  }
}

export class MessagesSearchStickerSets extends Function {
  excludeFeatured?: true;
  q: string;
  hash: bigint;

  protected get [id]() {
    return 0x35705b8a;
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

export class MessagesGetSplitRanges extends Function {
  protected get [id]() {
    return 0x1cff7e08;
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

export class MessagesMarkDialogUnread extends Function {
  unread?: true;
  peer: constructors.TypeInputDialogPeer;

  protected get [id]() {
    return 0xc286d98f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["unread", "true", "flags.0?true"],
      ["peer", constructors.TypeInputDialogPeer, "InputDialogPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.unread ?? null, "true", "flags.0?true"],
      [this.peer, constructors.TypeInputDialogPeer, "InputDialogPeer"],
    ];
  }

  constructor(params: { unread?: true; peer: constructors.TypeInputDialogPeer }) {
    super();
    this.unread = params.unread;
    this.peer = params.peer;
  }
}

export class MessagesGetDialogUnreadMarks extends Function {
  protected get [id]() {
    return 0x22e24e22;
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

export class MessagesClearAllDrafts extends Function {
  protected get [id]() {
    return 0x7e58ee9c;
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

export class MessagesUpdatePinnedMessage extends Function {
  silent?: true;
  unpin?: true;
  pmOneside?: true;
  peer: constructors.TypeInputPeer;
  id: number;

  protected get [id]() {
    return 0xd2aaf7ec;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.0?true"],
      ["unpin", "true", "flags.1?true"],
      ["pmOneside", "true", "flags.2?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.0?true"],
      [this.unpin ?? null, "true", "flags.1?true"],
      [this.pmOneside ?? null, "true", "flags.2?true"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.id, "number", "int"],
    ];
  }

  constructor(params: { silent?: true; unpin?: true; pmOneside?: true; peer: constructors.TypeInputPeer; id: number }) {
    super();
    this.silent = params.silent;
    this.unpin = params.unpin;
    this.pmOneside = params.pmOneside;
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class MessagesSendVote extends Function {
  peer: constructors.TypeInputPeer;
  msgId: number;
  options: Array<Uint8Array>;

  protected get [id]() {
    return 0x10ea6184;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["options", [Uint8Array], "Vector<bytes>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.options, [Uint8Array], "Vector<bytes>"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; msgId: number; options: Array<Uint8Array> }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.options = params.options;
  }
}

export class MessagesGetPollResults extends Function {
  peer: constructors.TypeInputPeer;
  msgId: number;

  protected get [id]() {
    return 0x73bb643b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; msgId: number }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
  }
}

export class MessagesGetOnlines extends Function {
  peer: constructors.TypeInputPeer;

  protected get [id]() {
    return 0x6e2be050;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class MessagesEditChatAbout extends Function {
  peer: constructors.TypeInputPeer;
  about: string;

  protected get [id]() {
    return 0xdef60797;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["about", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.about, "string", "string"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; about: string }) {
    super();
    this.peer = params.peer;
    this.about = params.about;
  }
}

export class MessagesEditChatDefaultBannedRights extends Function {
  peer: constructors.TypeInputPeer;
  bannedRights: constructors.TypeChatBannedRights;

  protected get [id]() {
    return 0xa5866b41;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["bannedRights", constructors.TypeChatBannedRights, "ChatBannedRights"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.bannedRights, constructors.TypeChatBannedRights, "ChatBannedRights"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; bannedRights: constructors.TypeChatBannedRights }) {
    super();
    this.peer = params.peer;
    this.bannedRights = params.bannedRights;
  }
}

export class MessagesGetEmojiKeywords extends Function {
  langCode: string;

  protected get [id]() {
    return 0x35a0e062;
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

export class MessagesGetEmojiKeywordsDifference extends Function {
  langCode: string;
  fromVersion: number;

  protected get [id]() {
    return 0x1508b6af;
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

export class MessagesGetEmojiKeywordsLanguages extends Function {
  langCodes: Array<string>;

  protected get [id]() {
    return 0x4e9963b2;
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

export class MessagesGetEmojiURL extends Function {
  langCode: string;

  protected get [id]() {
    return 0xd5b10c26;
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

export class MessagesGetSearchCounters extends Function {
  peer: constructors.TypeInputPeer;
  topMsgId?: number;
  filters: Array<constructors.TypeMessagesFilter>;

  protected get [id]() {
    return 0x00ae7cc1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["topMsgId", "number", "flags.0?int"],
      ["filters", [constructors.TypeMessagesFilter], "Vector<MessagesFilter>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
      [this.filters, [constructors.TypeMessagesFilter], "Vector<MessagesFilter>"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; topMsgId?: number; filters: Array<constructors.TypeMessagesFilter> }) {
    super();
    this.peer = params.peer;
    this.topMsgId = params.topMsgId;
    this.filters = params.filters;
  }
}

export class MessagesRequestUrlAuth extends Function {
  peer?: constructors.TypeInputPeer;
  msgId?: number;
  buttonId?: number;
  url?: string;

  protected get [id]() {
    return 0x198fb446;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", constructors.TypeInputPeer, "flags.1?InputPeer"],
      ["msgId", "number", "flags.1?int"],
      ["buttonId", "number", "flags.1?int"],
      ["url", "string", "flags.2?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer ?? null, constructors.TypeInputPeer, "flags.1?InputPeer"],
      [this.msgId ?? null, "number", "flags.1?int"],
      [this.buttonId ?? null, "number", "flags.1?int"],
      [this.url ?? null, "string", "flags.2?string"],
    ];
  }

  constructor(params: { peer?: constructors.TypeInputPeer; msgId?: number; buttonId?: number; url?: string }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.buttonId = params.buttonId;
    this.url = params.url;
  }
}

export class MessagesAcceptUrlAuth extends Function {
  writeAllowed?: true;
  peer?: constructors.TypeInputPeer;
  msgId?: number;
  buttonId?: number;
  url?: string;

  protected get [id]() {
    return 0xb12c7125;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["writeAllowed", "true", "flags.0?true"],
      ["peer", constructors.TypeInputPeer, "flags.1?InputPeer"],
      ["msgId", "number", "flags.1?int"],
      ["buttonId", "number", "flags.1?int"],
      ["url", "string", "flags.2?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.writeAllowed ?? null, "true", "flags.0?true"],
      [this.peer ?? null, constructors.TypeInputPeer, "flags.1?InputPeer"],
      [this.msgId ?? null, "number", "flags.1?int"],
      [this.buttonId ?? null, "number", "flags.1?int"],
      [this.url ?? null, "string", "flags.2?string"],
    ];
  }

  constructor(params: { writeAllowed?: true; peer?: constructors.TypeInputPeer; msgId?: number; buttonId?: number; url?: string }) {
    super();
    this.writeAllowed = params.writeAllowed;
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.buttonId = params.buttonId;
    this.url = params.url;
  }
}

export class MessagesHidePeerSettingsBar extends Function {
  peer: constructors.TypeInputPeer;

  protected get [id]() {
    return 0x4facb138;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class MessagesGetScheduledHistory extends Function {
  peer: constructors.TypeInputPeer;
  hash: bigint;

  protected get [id]() {
    return 0xf516760b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; hash: bigint }) {
    super();
    this.peer = params.peer;
    this.hash = params.hash;
  }
}

export class MessagesGetScheduledMessages extends Function {
  peer: constructors.TypeInputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0xbdbb0464;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class MessagesSendScheduledMessages extends Function {
  peer: constructors.TypeInputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0xbd38850a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class MessagesDeleteScheduledMessages extends Function {
  peer: constructors.TypeInputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0x59ae2b16;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class MessagesGetPollVotes extends Function {
  peer: constructors.TypeInputPeer;
  id: number;
  option?: Uint8Array;
  offset?: string;
  limit: number;

  protected get [id]() {
    return 0xb86e380e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["option", Uint8Array, "flags.0?bytes"],
      ["offset", "string", "flags.1?string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.option ?? null, Uint8Array, "flags.0?bytes"],
      [this.offset ?? null, "string", "flags.1?string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; id: number; option?: Uint8Array; offset?: string; limit: number }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.option = params.option;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class MessagesToggleStickerSets extends Function {
  uninstall?: true;
  archive?: true;
  unarchive?: true;
  stickersets: Array<constructors.TypeInputStickerSet>;

  protected get [id]() {
    return 0xb5052fea;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["uninstall", "true", "flags.0?true"],
      ["archive", "true", "flags.1?true"],
      ["unarchive", "true", "flags.2?true"],
      ["stickersets", [constructors.TypeInputStickerSet], "Vector<InputStickerSet>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.uninstall ?? null, "true", "flags.0?true"],
      [this.archive ?? null, "true", "flags.1?true"],
      [this.unarchive ?? null, "true", "flags.2?true"],
      [this.stickersets, [constructors.TypeInputStickerSet], "Vector<InputStickerSet>"],
    ];
  }

  constructor(params: { uninstall?: true; archive?: true; unarchive?: true; stickersets: Array<constructors.TypeInputStickerSet> }) {
    super();
    this.uninstall = params.uninstall;
    this.archive = params.archive;
    this.unarchive = params.unarchive;
    this.stickersets = params.stickersets;
  }
}

export class MessagesGetDialogFilters extends Function {
  protected get [id]() {
    return 0xf19ed96d;
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

export class MessagesGetSuggestedDialogFilters extends Function {
  protected get [id]() {
    return 0xa29cd42c;
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

export class MessagesUpdateDialogFilter extends Function {
  id: number;
  filter?: constructors.TypeDialogFilter;

  protected get [id]() {
    return 0x1ad4a04a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["id", "number", "int"],
      ["filter", constructors.TypeDialogFilter, "flags.0?DialogFilter"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.id, "number", "int"],
      [this.filter ?? null, constructors.TypeDialogFilter, "flags.0?DialogFilter"],
    ];
  }

  constructor(params: { id: number; filter?: constructors.TypeDialogFilter }) {
    super();
    this.id = params.id;
    this.filter = params.filter;
  }
}

export class MessagesUpdateDialogFiltersOrder extends Function {
  order: Array<number>;

  protected get [id]() {
    return 0xc563c1e4;
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

export class MessagesGetOldFeaturedStickers extends Function {
  offset: number;
  limit: number;
  hash: bigint;

  protected get [id]() {
    return 0x7ed094a1;
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

export class MessagesGetReplies extends Function {
  peer: constructors.TypeInputPeer;
  msgId: number;
  offsetId: number;
  offsetDate: number;
  addOffset: number;
  limit: number;
  maxId: number;
  minId: number;
  hash: bigint;

  protected get [id]() {
    return 0x22ddd30c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
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
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
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

  constructor(params: { peer: constructors.TypeInputPeer; msgId: number; offsetId: number; offsetDate: number; addOffset: number; limit: number; maxId: number; minId: number; hash: bigint }) {
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

export class MessagesGetDiscussionMessage extends Function {
  peer: constructors.TypeInputPeer;
  msgId: number;

  protected get [id]() {
    return 0x446972fd;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; msgId: number }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
  }
}

export class MessagesReadDiscussion extends Function {
  peer: constructors.TypeInputPeer;
  msgId: number;
  readMaxId: number;

  protected get [id]() {
    return 0xf731a9f4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["readMaxId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.readMaxId, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; msgId: number; readMaxId: number }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.readMaxId = params.readMaxId;
  }
}

export class MessagesUnpinAllMessages extends Function {
  peer: constructors.TypeInputPeer;
  topMsgId?: number;

  protected get [id]() {
    return 0xee22b9a8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["topMsgId", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; topMsgId?: number }) {
    super();
    this.peer = params.peer;
    this.topMsgId = params.topMsgId;
  }
}

export class MessagesDeleteChat extends Function {
  chatId: bigint;

  protected get [id]() {
    return 0x5bd0ee50;
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

export class MessagesDeletePhoneCallHistory extends Function {
  revoke?: true;

  protected get [id]() {
    return 0xf9cbe409;
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

export class MessagesCheckHistoryImport extends Function {
  importHead: string;

  protected get [id]() {
    return 0x43fe19f3;
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

export class MessagesInitHistoryImport extends Function {
  peer: constructors.TypeInputPeer;
  file: constructors.TypeInputFile;
  mediaCount: number;

  protected get [id]() {
    return 0x34090c3b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["file", constructors.TypeInputFile, "InputFile"],
      ["mediaCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.file, constructors.TypeInputFile, "InputFile"],
      [this.mediaCount, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; file: constructors.TypeInputFile; mediaCount: number }) {
    super();
    this.peer = params.peer;
    this.file = params.file;
    this.mediaCount = params.mediaCount;
  }
}

export class MessagesUploadImportedMedia extends Function {
  peer: constructors.TypeInputPeer;
  importId: bigint;
  fileName: string;
  media: constructors.TypeInputMedia;

  protected get [id]() {
    return 0x2a862092;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["importId", "bigint", "long"],
      ["fileName", "string", "string"],
      ["media", constructors.TypeInputMedia, "InputMedia"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.importId, "bigint", "long"],
      [this.fileName, "string", "string"],
      [this.media, constructors.TypeInputMedia, "InputMedia"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; importId: bigint; fileName: string; media: constructors.TypeInputMedia }) {
    super();
    this.peer = params.peer;
    this.importId = params.importId;
    this.fileName = params.fileName;
    this.media = params.media;
  }
}

export class MessagesStartHistoryImport extends Function {
  peer: constructors.TypeInputPeer;
  importId: bigint;

  protected get [id]() {
    return 0xb43df344;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["importId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.importId, "bigint", "long"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; importId: bigint }) {
    super();
    this.peer = params.peer;
    this.importId = params.importId;
  }
}

export class MessagesGetExportedChatInvites extends Function {
  revoked?: true;
  peer: constructors.TypeInputPeer;
  adminId: constructors.TypeInputUser;
  offsetDate?: number;
  offsetLink?: string;
  limit: number;

  protected get [id]() {
    return 0xa2b5a3f6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["revoked", "true", "flags.3?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["adminId", constructors.TypeInputUser, "InputUser"],
      ["offsetDate", "number", "flags.2?int"],
      ["offsetLink", "string", "flags.2?string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.revoked ?? null, "true", "flags.3?true"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.adminId, constructors.TypeInputUser, "InputUser"],
      [this.offsetDate ?? null, "number", "flags.2?int"],
      [this.offsetLink ?? null, "string", "flags.2?string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { revoked?: true; peer: constructors.TypeInputPeer; adminId: constructors.TypeInputUser; offsetDate?: number; offsetLink?: string; limit: number }) {
    super();
    this.revoked = params.revoked;
    this.peer = params.peer;
    this.adminId = params.adminId;
    this.offsetDate = params.offsetDate;
    this.offsetLink = params.offsetLink;
    this.limit = params.limit;
  }
}

export class MessagesGetExportedChatInvite extends Function {
  peer: constructors.TypeInputPeer;
  link: string;

  protected get [id]() {
    return 0x73746f5c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["link", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.link, "string", "string"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; link: string }) {
    super();
    this.peer = params.peer;
    this.link = params.link;
  }
}

export class MessagesEditExportedChatInvite extends Function {
  revoked?: true;
  peer: constructors.TypeInputPeer;
  link: string;
  expireDate?: number;
  usageLimit?: number;
  requestNeeded?: boolean;
  title?: string;

  protected get [id]() {
    return 0xbdca2f75;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["revoked", "true", "flags.2?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
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
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.link, "string", "string"],
      [this.expireDate ?? null, "number", "flags.0?int"],
      [this.usageLimit ?? null, "number", "flags.1?int"],
      [this.requestNeeded ?? null, "boolean", "flags.3?Bool"],
      [this.title ?? null, "string", "flags.4?string"],
    ];
  }

  constructor(params: { revoked?: true; peer: constructors.TypeInputPeer; link: string; expireDate?: number; usageLimit?: number; requestNeeded?: boolean; title?: string }) {
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

export class MessagesDeleteRevokedExportedChatInvites extends Function {
  peer: constructors.TypeInputPeer;
  adminId: constructors.TypeInputUser;

  protected get [id]() {
    return 0x56987bd5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["adminId", constructors.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.adminId, constructors.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; adminId: constructors.TypeInputUser }) {
    super();
    this.peer = params.peer;
    this.adminId = params.adminId;
  }
}

export class MessagesDeleteExportedChatInvite extends Function {
  peer: constructors.TypeInputPeer;
  link: string;

  protected get [id]() {
    return 0xd464a42b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["link", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.link, "string", "string"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; link: string }) {
    super();
    this.peer = params.peer;
    this.link = params.link;
  }
}

export class MessagesGetAdminsWithInvites extends Function {
  peer: constructors.TypeInputPeer;

  protected get [id]() {
    return 0x3920e6ef;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class MessagesGetChatInviteImporters extends Function {
  requested?: true;
  peer: constructors.TypeInputPeer;
  link?: string;
  q?: string;
  offsetDate: number;
  offsetUser: constructors.TypeInputUser;
  limit: number;

  protected get [id]() {
    return 0xdf04dd4e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["requested", "true", "flags.0?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["link", "string", "flags.1?string"],
      ["q", "string", "flags.2?string"],
      ["offsetDate", "number", "int"],
      ["offsetUser", constructors.TypeInputUser, "InputUser"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.requested ?? null, "true", "flags.0?true"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.link ?? null, "string", "flags.1?string"],
      [this.q ?? null, "string", "flags.2?string"],
      [this.offsetDate, "number", "int"],
      [this.offsetUser, constructors.TypeInputUser, "InputUser"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { requested?: true; peer: constructors.TypeInputPeer; link?: string; q?: string; offsetDate: number; offsetUser: constructors.TypeInputUser; limit: number }) {
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

export class MessagesSetHistoryTTL extends Function {
  peer: constructors.TypeInputPeer;
  period: number;

  protected get [id]() {
    return 0xb80e5fe4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["period", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.period, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; period: number }) {
    super();
    this.peer = params.peer;
    this.period = params.period;
  }
}

export class MessagesCheckHistoryImportPeer extends Function {
  peer: constructors.TypeInputPeer;

  protected get [id]() {
    return 0x5dc60f03;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class MessagesSetChatTheme extends Function {
  peer: constructors.TypeInputPeer;
  emoticon: string;

  protected get [id]() {
    return 0xe63be13f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["emoticon", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.emoticon, "string", "string"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; emoticon: string }) {
    super();
    this.peer = params.peer;
    this.emoticon = params.emoticon;
  }
}

export class MessagesGetMessageReadParticipants extends Function {
  peer: constructors.TypeInputPeer;
  msgId: number;

  protected get [id]() {
    return 0x31c1c44f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; msgId: number }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
  }
}

export class MessagesGetSearchResultsCalendar extends Function {
  peer: constructors.TypeInputPeer;
  filter: constructors.TypeMessagesFilter;
  offsetId: number;
  offsetDate: number;

  protected get [id]() {
    return 0x49f0bde9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["filter", constructors.TypeMessagesFilter, "MessagesFilter"],
      ["offsetId", "number", "int"],
      ["offsetDate", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.filter, constructors.TypeMessagesFilter, "MessagesFilter"],
      [this.offsetId, "number", "int"],
      [this.offsetDate, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; filter: constructors.TypeMessagesFilter; offsetId: number; offsetDate: number }) {
    super();
    this.peer = params.peer;
    this.filter = params.filter;
    this.offsetId = params.offsetId;
    this.offsetDate = params.offsetDate;
  }
}

export class MessagesGetSearchResultsPositions extends Function {
  peer: constructors.TypeInputPeer;
  filter: constructors.TypeMessagesFilter;
  offsetId: number;
  limit: number;

  protected get [id]() {
    return 0x6e9583a3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["filter", constructors.TypeMessagesFilter, "MessagesFilter"],
      ["offsetId", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.filter, constructors.TypeMessagesFilter, "MessagesFilter"],
      [this.offsetId, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; filter: constructors.TypeMessagesFilter; offsetId: number; limit: number }) {
    super();
    this.peer = params.peer;
    this.filter = params.filter;
    this.offsetId = params.offsetId;
    this.limit = params.limit;
  }
}

export class MessagesHideChatJoinRequest extends Function {
  approved?: true;
  peer: constructors.TypeInputPeer;
  userId: constructors.TypeInputUser;

  protected get [id]() {
    return 0x7fe7e815;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["approved", "true", "flags.0?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["userId", constructors.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.approved ?? null, "true", "flags.0?true"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.userId, constructors.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { approved?: true; peer: constructors.TypeInputPeer; userId: constructors.TypeInputUser }) {
    super();
    this.approved = params.approved;
    this.peer = params.peer;
    this.userId = params.userId;
  }
}

export class MessagesHideAllChatJoinRequests extends Function {
  approved?: true;
  peer: constructors.TypeInputPeer;
  link?: string;

  protected get [id]() {
    return 0xe085f4ea;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["approved", "true", "flags.0?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["link", "string", "flags.1?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.approved ?? null, "true", "flags.0?true"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.link ?? null, "string", "flags.1?string"],
    ];
  }

  constructor(params: { approved?: true; peer: constructors.TypeInputPeer; link?: string }) {
    super();
    this.approved = params.approved;
    this.peer = params.peer;
    this.link = params.link;
  }
}

export class MessagesToggleNoForwards extends Function {
  peer: constructors.TypeInputPeer;
  enabled: boolean;

  protected get [id]() {
    return 0xb11eafa2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; enabled: boolean }) {
    super();
    this.peer = params.peer;
    this.enabled = params.enabled;
  }
}

export class MessagesSaveDefaultSendAs extends Function {
  peer: constructors.TypeInputPeer;
  sendAs: constructors.TypeInputPeer;

  protected get [id]() {
    return 0xccfddf96;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["sendAs", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.sendAs, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; sendAs: constructors.TypeInputPeer }) {
    super();
    this.peer = params.peer;
    this.sendAs = params.sendAs;
  }
}

export class MessagesSendReaction extends Function {
  big?: true;
  addToRecent?: true;
  peer: constructors.TypeInputPeer;
  msgId: number;
  reaction?: Array<constructors.TypeReaction>;

  protected get [id]() {
    return 0xd30d78d4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["big", "true", "flags.1?true"],
      ["addToRecent", "true", "flags.2?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["reaction", [constructors.TypeReaction], "flags.0?Vector<Reaction>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.big ?? null, "true", "flags.1?true"],
      [this.addToRecent ?? null, "true", "flags.2?true"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.reaction ?? null, [constructors.TypeReaction], "flags.0?Vector<Reaction>"],
    ];
  }

  constructor(params: { big?: true; addToRecent?: true; peer: constructors.TypeInputPeer; msgId: number; reaction?: Array<constructors.TypeReaction> }) {
    super();
    this.big = params.big;
    this.addToRecent = params.addToRecent;
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.reaction = params.reaction;
  }
}

export class MessagesGetMessagesReactions extends Function {
  peer: constructors.TypeInputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0x8bba90e6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class MessagesGetMessageReactionsList extends Function {
  peer: constructors.TypeInputPeer;
  id: number;
  reaction?: constructors.TypeReaction;
  offset?: string;
  limit: number;

  protected get [id]() {
    return 0x461b3f48;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["reaction", constructors.TypeReaction, "flags.0?Reaction"],
      ["offset", "string", "flags.1?string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.reaction ?? null, constructors.TypeReaction, "flags.0?Reaction"],
      [this.offset ?? null, "string", "flags.1?string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; id: number; reaction?: constructors.TypeReaction; offset?: string; limit: number }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.reaction = params.reaction;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class MessagesSetChatAvailableReactions extends Function {
  peer: constructors.TypeInputPeer;
  availableReactions: constructors.TypeChatReactions;

  protected get [id]() {
    return 0xfeb16771;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["availableReactions", constructors.TypeChatReactions, "ChatReactions"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.availableReactions, constructors.TypeChatReactions, "ChatReactions"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; availableReactions: constructors.TypeChatReactions }) {
    super();
    this.peer = params.peer;
    this.availableReactions = params.availableReactions;
  }
}

export class MessagesGetAvailableReactions extends Function {
  hash: number;

  protected get [id]() {
    return 0x18dea0ac;
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

export class MessagesSetDefaultReaction extends Function {
  reaction: constructors.TypeReaction;

  protected get [id]() {
    return 0x4f47a016;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["reaction", constructors.TypeReaction, "Reaction"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.reaction, constructors.TypeReaction, "Reaction"],
    ];
  }

  constructor(params: { reaction: constructors.TypeReaction }) {
    super();
    this.reaction = params.reaction;
  }
}

export class MessagesTranslateText extends Function {
  peer?: constructors.TypeInputPeer;
  id?: Array<number>;
  text?: Array<constructors.TypeTextWithEntities>;
  toLang: string;

  protected get [id]() {
    return 0x63183030;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", constructors.TypeInputPeer, "flags.0?InputPeer"],
      ["id", ["number"], "flags.0?Vector<int>"],
      ["text", [constructors.TypeTextWithEntities], "flags.1?Vector<TextWithEntities>"],
      ["toLang", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer ?? null, constructors.TypeInputPeer, "flags.0?InputPeer"],
      [this.id ?? null, ["number"], "flags.0?Vector<int>"],
      [this.text ?? null, [constructors.TypeTextWithEntities], "flags.1?Vector<TextWithEntities>"],
      [this.toLang, "string", "string"],
    ];
  }

  constructor(params: { peer?: constructors.TypeInputPeer; id?: Array<number>; text?: Array<constructors.TypeTextWithEntities>; toLang: string }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.text = params.text;
    this.toLang = params.toLang;
  }
}

export class MessagesGetUnreadReactions extends Function {
  peer: constructors.TypeInputPeer;
  topMsgId?: number;
  offsetId: number;
  addOffset: number;
  limit: number;
  maxId: number;
  minId: number;

  protected get [id]() {
    return 0x3223495b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
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
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
      [this.offsetId, "number", "int"],
      [this.addOffset, "number", "int"],
      [this.limit, "number", "int"],
      [this.maxId, "number", "int"],
      [this.minId, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; topMsgId?: number; offsetId: number; addOffset: number; limit: number; maxId: number; minId: number }) {
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

export class MessagesReadReactions extends Function {
  peer: constructors.TypeInputPeer;
  topMsgId?: number;

  protected get [id]() {
    return 0x54aa7f8e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["topMsgId", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; topMsgId?: number }) {
    super();
    this.peer = params.peer;
    this.topMsgId = params.topMsgId;
  }
}

export class MessagesSearchSentMedia extends Function {
  q: string;
  filter: constructors.TypeMessagesFilter;
  limit: number;

  protected get [id]() {
    return 0x107e31a0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["q", "string", "string"],
      ["filter", constructors.TypeMessagesFilter, "MessagesFilter"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.q, "string", "string"],
      [this.filter, constructors.TypeMessagesFilter, "MessagesFilter"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { q: string; filter: constructors.TypeMessagesFilter; limit: number }) {
    super();
    this.q = params.q;
    this.filter = params.filter;
    this.limit = params.limit;
  }
}

export class MessagesGetAttachMenuBots extends Function {
  hash: bigint;

  protected get [id]() {
    return 0x16fcc2cb;
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

export class MessagesGetAttachMenuBot extends Function {
  bot: constructors.TypeInputUser;

  protected get [id]() {
    return 0x77216192;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", constructors.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, constructors.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { bot: constructors.TypeInputUser }) {
    super();
    this.bot = params.bot;
  }
}

export class MessagesToggleBotInAttachMenu extends Function {
  writeAllowed?: true;
  bot: constructors.TypeInputUser;
  enabled: boolean;

  protected get [id]() {
    return 0x69f59d69;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["writeAllowed", "true", "flags.0?true"],
      ["bot", constructors.TypeInputUser, "InputUser"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.writeAllowed ?? null, "true", "flags.0?true"],
      [this.bot, constructors.TypeInputUser, "InputUser"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { writeAllowed?: true; bot: constructors.TypeInputUser; enabled: boolean }) {
    super();
    this.writeAllowed = params.writeAllowed;
    this.bot = params.bot;
    this.enabled = params.enabled;
  }
}

export class MessagesRequestWebView extends Function {
  fromBotMenu?: true;
  silent?: true;
  peer: constructors.TypeInputPeer;
  bot: constructors.TypeInputUser;
  url?: string;
  startParam?: string;
  themeParams?: constructors.TypeDataJSON;
  platform: string;
  replyToMsgId?: number;
  topMsgId?: number;
  sendAs?: constructors.TypeInputPeer;

  protected get [id]() {
    return 0x178b480b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["fromBotMenu", "true", "flags.4?true"],
      ["silent", "true", "flags.5?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["bot", constructors.TypeInputUser, "InputUser"],
      ["url", "string", "flags.1?string"],
      ["startParam", "string", "flags.3?string"],
      ["themeParams", constructors.TypeDataJSON, "flags.2?DataJSON"],
      ["platform", "string", "string"],
      ["replyToMsgId", "number", "flags.0?int"],
      ["topMsgId", "number", "flags.9?int"],
      ["sendAs", constructors.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.fromBotMenu ?? null, "true", "flags.4?true"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.bot, constructors.TypeInputUser, "InputUser"],
      [this.url ?? null, "string", "flags.1?string"],
      [this.startParam ?? null, "string", "flags.3?string"],
      [this.themeParams ?? null, constructors.TypeDataJSON, "flags.2?DataJSON"],
      [this.platform, "string", "string"],
      [this.replyToMsgId ?? null, "number", "flags.0?int"],
      [this.topMsgId ?? null, "number", "flags.9?int"],
      [this.sendAs ?? null, constructors.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { fromBotMenu?: true; silent?: true; peer: constructors.TypeInputPeer; bot: constructors.TypeInputUser; url?: string; startParam?: string; themeParams?: constructors.TypeDataJSON; platform: string; replyToMsgId?: number; topMsgId?: number; sendAs?: constructors.TypeInputPeer }) {
    super();
    this.fromBotMenu = params.fromBotMenu;
    this.silent = params.silent;
    this.peer = params.peer;
    this.bot = params.bot;
    this.url = params.url;
    this.startParam = params.startParam;
    this.themeParams = params.themeParams;
    this.platform = params.platform;
    this.replyToMsgId = params.replyToMsgId;
    this.topMsgId = params.topMsgId;
    this.sendAs = params.sendAs;
  }
}

export class MessagesProlongWebView extends Function {
  silent?: true;
  peer: constructors.TypeInputPeer;
  bot: constructors.TypeInputUser;
  queryId: bigint;
  replyToMsgId?: number;
  topMsgId?: number;
  sendAs?: constructors.TypeInputPeer;

  protected get [id]() {
    return 0x7ff34309;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["silent", "true", "flags.5?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["bot", constructors.TypeInputUser, "InputUser"],
      ["queryId", "bigint", "long"],
      ["replyToMsgId", "number", "flags.0?int"],
      ["topMsgId", "number", "flags.9?int"],
      ["sendAs", constructors.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.silent ?? null, "true", "flags.5?true"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.bot, constructors.TypeInputUser, "InputUser"],
      [this.queryId, "bigint", "long"],
      [this.replyToMsgId ?? null, "number", "flags.0?int"],
      [this.topMsgId ?? null, "number", "flags.9?int"],
      [this.sendAs ?? null, constructors.TypeInputPeer, "flags.13?InputPeer"],
    ];
  }

  constructor(params: { silent?: true; peer: constructors.TypeInputPeer; bot: constructors.TypeInputUser; queryId: bigint; replyToMsgId?: number; topMsgId?: number; sendAs?: constructors.TypeInputPeer }) {
    super();
    this.silent = params.silent;
    this.peer = params.peer;
    this.bot = params.bot;
    this.queryId = params.queryId;
    this.replyToMsgId = params.replyToMsgId;
    this.topMsgId = params.topMsgId;
    this.sendAs = params.sendAs;
  }
}

export class MessagesRequestSimpleWebView extends Function {
  fromSwitchWebview?: true;
  bot: constructors.TypeInputUser;
  url: string;
  themeParams?: constructors.TypeDataJSON;
  platform: string;

  protected get [id]() {
    return 0x299bec8e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["fromSwitchWebview", "true", "flags.1?true"],
      ["bot", constructors.TypeInputUser, "InputUser"],
      ["url", "string", "string"],
      ["themeParams", constructors.TypeDataJSON, "flags.0?DataJSON"],
      ["platform", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.fromSwitchWebview ?? null, "true", "flags.1?true"],
      [this.bot, constructors.TypeInputUser, "InputUser"],
      [this.url, "string", "string"],
      [this.themeParams ?? null, constructors.TypeDataJSON, "flags.0?DataJSON"],
      [this.platform, "string", "string"],
    ];
  }

  constructor(params: { fromSwitchWebview?: true; bot: constructors.TypeInputUser; url: string; themeParams?: constructors.TypeDataJSON; platform: string }) {
    super();
    this.fromSwitchWebview = params.fromSwitchWebview;
    this.bot = params.bot;
    this.url = params.url;
    this.themeParams = params.themeParams;
    this.platform = params.platform;
  }
}

export class MessagesSendWebViewResultMessage extends Function {
  botQueryId: string;
  result: constructors.TypeInputBotInlineResult;

  protected get [id]() {
    return 0x0a4314f5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["botQueryId", "string", "string"],
      ["result", constructors.TypeInputBotInlineResult, "InputBotInlineResult"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.botQueryId, "string", "string"],
      [this.result, constructors.TypeInputBotInlineResult, "InputBotInlineResult"],
    ];
  }

  constructor(params: { botQueryId: string; result: constructors.TypeInputBotInlineResult }) {
    super();
    this.botQueryId = params.botQueryId;
    this.result = params.result;
  }
}

export class MessagesSendWebViewData extends Function {
  bot: constructors.TypeInputUser;
  randomId: bigint;
  buttonText: string;
  data: string;

  protected get [id]() {
    return 0xdc0242c8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", constructors.TypeInputUser, "InputUser"],
      ["randomId", "bigint", "long"],
      ["buttonText", "string", "string"],
      ["data", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, constructors.TypeInputUser, "InputUser"],
      [this.randomId, "bigint", "long"],
      [this.buttonText, "string", "string"],
      [this.data, "string", "string"],
    ];
  }

  constructor(params: { bot: constructors.TypeInputUser; randomId: bigint; buttonText: string; data: string }) {
    super();
    this.bot = params.bot;
    this.randomId = params.randomId;
    this.buttonText = params.buttonText;
    this.data = params.data;
  }
}

export class MessagesTranscribeAudio extends Function {
  peer: constructors.TypeInputPeer;
  msgId: number;

  protected get [id]() {
    return 0x269e9a49;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; msgId: number }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
  }
}

export class MessagesRateTranscribedAudio extends Function {
  peer: constructors.TypeInputPeer;
  msgId: number;
  transcriptionId: bigint;
  good: boolean;

  protected get [id]() {
    return 0x7f1d072f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["transcriptionId", "bigint", "long"],
      ["good", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.transcriptionId, "bigint", "long"],
      [this.good, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; msgId: number; transcriptionId: bigint; good: boolean }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.transcriptionId = params.transcriptionId;
    this.good = params.good;
  }
}

export class MessagesGetCustomEmojiDocuments extends Function {
  documentId: Array<bigint>;

  protected get [id]() {
    return 0xd9ab0f54;
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

export class MessagesGetEmojiStickers extends Function {
  hash: bigint;

  protected get [id]() {
    return 0xfbfca18f;
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

export class MessagesGetFeaturedEmojiStickers extends Function {
  hash: bigint;

  protected get [id]() {
    return 0x0ecf6736;
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

export class MessagesReportReaction extends Function {
  peer: constructors.TypeInputPeer;
  id: number;
  reactionPeer: constructors.TypeInputPeer;

  protected get [id]() {
    return 0x3f64c076;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["id", "number", "int"],
      ["reactionPeer", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.id, "number", "int"],
      [this.reactionPeer, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; id: number; reactionPeer: constructors.TypeInputPeer }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
    this.reactionPeer = params.reactionPeer;
  }
}

export class MessagesGetTopReactions extends Function {
  limit: number;
  hash: bigint;

  protected get [id]() {
    return 0xbb8125ba;
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

export class MessagesGetRecentReactions extends Function {
  limit: number;
  hash: bigint;

  protected get [id]() {
    return 0x39461db2;
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

export class MessagesClearRecentReactions extends Function {
  protected get [id]() {
    return 0x9dfeefb4;
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

export class MessagesGetExtendedMedia extends Function {
  peer: constructors.TypeInputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0x84f80814;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; id: Array<number> }) {
    super();
    this.peer = params.peer;
    this.id = params.id;
  }
}

export class MessagesSetDefaultHistoryTTL extends Function {
  period: number;

  protected get [id]() {
    return 0x9eb51445;
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

export class MessagesGetDefaultHistoryTTL extends Function {
  protected get [id]() {
    return 0x658b7188;
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

export class MessagesSendBotRequestedPeer extends Function {
  peer: constructors.TypeInputPeer;
  msgId: number;
  buttonId: number;
  requestedPeer: constructors.TypeInputPeer;

  protected get [id]() {
    return 0xfe38d01b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["buttonId", "number", "int"],
      ["requestedPeer", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.buttonId, "number", "int"],
      [this.requestedPeer, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; msgId: number; buttonId: number; requestedPeer: constructors.TypeInputPeer }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.buttonId = params.buttonId;
    this.requestedPeer = params.requestedPeer;
  }
}

export class MessagesGetEmojiGroups extends Function {
  hash: number;

  protected get [id]() {
    return 0x7488ce5b;
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

export class MessagesGetEmojiStatusGroups extends Function {
  hash: number;

  protected get [id]() {
    return 0x2ecd56cd;
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

export class MessagesGetEmojiProfilePhotoGroups extends Function {
  hash: number;

  protected get [id]() {
    return 0x21a548f3;
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

export class MessagesSearchCustomEmoji extends Function {
  emoticon: string;
  hash: bigint;

  protected get [id]() {
    return 0x2c11c0d7;
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

export class MessagesTogglePeerTranslations extends Function {
  disabled?: true;
  peer: constructors.TypeInputPeer;

  protected get [id]() {
    return 0xe47cb579;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["disabled", "true", "flags.0?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.disabled ?? null, "true", "flags.0?true"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { disabled?: true; peer: constructors.TypeInputPeer }) {
    super();
    this.disabled = params.disabled;
    this.peer = params.peer;
  }
}

export class MessagesGetBotApp extends Function {
  app: constructors.TypeInputBotApp;
  hash: bigint;

  protected get [id]() {
    return 0x34fdc5c3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["app", constructors.TypeInputBotApp, "InputBotApp"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.app, constructors.TypeInputBotApp, "InputBotApp"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { app: constructors.TypeInputBotApp; hash: bigint }) {
    super();
    this.app = params.app;
    this.hash = params.hash;
  }
}

export class MessagesRequestAppWebView extends Function {
  writeAllowed?: true;
  peer: constructors.TypeInputPeer;
  app: constructors.TypeInputBotApp;
  startParam?: string;
  themeParams?: constructors.TypeDataJSON;
  platform: string;

  protected get [id]() {
    return 0x8c5a3b3c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["writeAllowed", "true", "flags.0?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["app", constructors.TypeInputBotApp, "InputBotApp"],
      ["startParam", "string", "flags.1?string"],
      ["themeParams", constructors.TypeDataJSON, "flags.2?DataJSON"],
      ["platform", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.writeAllowed ?? null, "true", "flags.0?true"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.app, constructors.TypeInputBotApp, "InputBotApp"],
      [this.startParam ?? null, "string", "flags.1?string"],
      [this.themeParams ?? null, constructors.TypeDataJSON, "flags.2?DataJSON"],
      [this.platform, "string", "string"],
    ];
  }

  constructor(params: { writeAllowed?: true; peer: constructors.TypeInputPeer; app: constructors.TypeInputBotApp; startParam?: string; themeParams?: constructors.TypeDataJSON; platform: string }) {
    super();
    this.writeAllowed = params.writeAllowed;
    this.peer = params.peer;
    this.app = params.app;
    this.startParam = params.startParam;
    this.themeParams = params.themeParams;
    this.platform = params.platform;
  }
}

export class UpdatesGetState extends Function {
  protected get [id]() {
    return 0xedd4882a;
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

export class UpdatesGetDifference extends Function {
  pts: number;
  ptsTotalLimit?: number;
  date: number;
  qts: number;

  protected get [id]() {
    return 0x25939651;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pts", "number", "int"],
      ["ptsTotalLimit", "number", "flags.0?int"],
      ["date", "number", "int"],
      ["qts", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pts, "number", "int"],
      [this.ptsTotalLimit ?? null, "number", "flags.0?int"],
      [this.date, "number", "int"],
      [this.qts, "number", "int"],
    ];
  }

  constructor(params: { pts: number; ptsTotalLimit?: number; date: number; qts: number }) {
    super();
    this.pts = params.pts;
    this.ptsTotalLimit = params.ptsTotalLimit;
    this.date = params.date;
    this.qts = params.qts;
  }
}

export class UpdatesGetChannelDifference extends Function {
  force?: true;
  channel: constructors.TypeInputChannel;
  filter: constructors.TypeChannelMessagesFilter;
  pts: number;
  limit: number;

  protected get [id]() {
    return 0x03173d78;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["force", "true", "flags.0?true"],
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["filter", constructors.TypeChannelMessagesFilter, "ChannelMessagesFilter"],
      ["pts", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.force ?? null, "true", "flags.0?true"],
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.filter, constructors.TypeChannelMessagesFilter, "ChannelMessagesFilter"],
      [this.pts, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { force?: true; channel: constructors.TypeInputChannel; filter: constructors.TypeChannelMessagesFilter; pts: number; limit: number }) {
    super();
    this.force = params.force;
    this.channel = params.channel;
    this.filter = params.filter;
    this.pts = params.pts;
    this.limit = params.limit;
  }
}

export class PhotosUpdateProfilePhoto extends Function {
  fallback?: true;
  id: constructors.TypeInputPhoto;

  protected get [id]() {
    return 0x1c3d5956;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["fallback", "true", "flags.0?true"],
      ["id", constructors.TypeInputPhoto, "InputPhoto"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.fallback ?? null, "true", "flags.0?true"],
      [this.id, constructors.TypeInputPhoto, "InputPhoto"],
    ];
  }

  constructor(params: { fallback?: true; id: constructors.TypeInputPhoto }) {
    super();
    this.fallback = params.fallback;
    this.id = params.id;
  }
}

export class PhotosUploadProfilePhoto extends Function {
  fallback?: true;
  file?: constructors.TypeInputFile;
  video?: constructors.TypeInputFile;
  videoStartTs?: number;
  videoEmojiMarkup?: constructors.TypeVideoSize;

  protected get [id]() {
    return 0x093c9a51;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["fallback", "true", "flags.3?true"],
      ["file", constructors.TypeInputFile, "flags.0?InputFile"],
      ["video", constructors.TypeInputFile, "flags.1?InputFile"],
      ["videoStartTs", "number", "flags.2?double"],
      ["videoEmojiMarkup", constructors.TypeVideoSize, "flags.4?VideoSize"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.fallback ?? null, "true", "flags.3?true"],
      [this.file ?? null, constructors.TypeInputFile, "flags.0?InputFile"],
      [this.video ?? null, constructors.TypeInputFile, "flags.1?InputFile"],
      [this.videoStartTs ?? null, "number", "flags.2?double"],
      [this.videoEmojiMarkup ?? null, constructors.TypeVideoSize, "flags.4?VideoSize"],
    ];
  }

  constructor(params: { fallback?: true; file?: constructors.TypeInputFile; video?: constructors.TypeInputFile; videoStartTs?: number; videoEmojiMarkup?: constructors.TypeVideoSize }) {
    super();
    this.fallback = params.fallback;
    this.file = params.file;
    this.video = params.video;
    this.videoStartTs = params.videoStartTs;
    this.videoEmojiMarkup = params.videoEmojiMarkup;
  }
}

export class PhotosDeletePhotos extends Function {
  id: Array<constructors.TypeInputPhoto>;

  protected get [id]() {
    return 0x87cf7f2f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [constructors.TypeInputPhoto], "Vector<InputPhoto>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [constructors.TypeInputPhoto], "Vector<InputPhoto>"],
    ];
  }

  constructor(params: { id: Array<constructors.TypeInputPhoto> }) {
    super();
    this.id = params.id;
  }
}

export class PhotosGetUserPhotos extends Function {
  userId: constructors.TypeInputUser;
  offset: number;
  maxId: bigint;
  limit: number;

  protected get [id]() {
    return 0x91cd32a8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", constructors.TypeInputUser, "InputUser"],
      ["offset", "number", "int"],
      ["maxId", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, constructors.TypeInputUser, "InputUser"],
      [this.offset, "number", "int"],
      [this.maxId, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { userId: constructors.TypeInputUser; offset: number; maxId: bigint; limit: number }) {
    super();
    this.userId = params.userId;
    this.offset = params.offset;
    this.maxId = params.maxId;
    this.limit = params.limit;
  }
}

export class PhotosUploadContactProfilePhoto extends Function {
  suggest?: true;
  save?: true;
  userId: constructors.TypeInputUser;
  file?: constructors.TypeInputFile;
  video?: constructors.TypeInputFile;
  videoStartTs?: number;
  videoEmojiMarkup?: constructors.TypeVideoSize;

  protected get [id]() {
    return 0xe14c4a71;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["suggest", "true", "flags.3?true"],
      ["save", "true", "flags.4?true"],
      ["userId", constructors.TypeInputUser, "InputUser"],
      ["file", constructors.TypeInputFile, "flags.0?InputFile"],
      ["video", constructors.TypeInputFile, "flags.1?InputFile"],
      ["videoStartTs", "number", "flags.2?double"],
      ["videoEmojiMarkup", constructors.TypeVideoSize, "flags.5?VideoSize"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.suggest ?? null, "true", "flags.3?true"],
      [this.save ?? null, "true", "flags.4?true"],
      [this.userId, constructors.TypeInputUser, "InputUser"],
      [this.file ?? null, constructors.TypeInputFile, "flags.0?InputFile"],
      [this.video ?? null, constructors.TypeInputFile, "flags.1?InputFile"],
      [this.videoStartTs ?? null, "number", "flags.2?double"],
      [this.videoEmojiMarkup ?? null, constructors.TypeVideoSize, "flags.5?VideoSize"],
    ];
  }

  constructor(params: { suggest?: true; save?: true; userId: constructors.TypeInputUser; file?: constructors.TypeInputFile; video?: constructors.TypeInputFile; videoStartTs?: number; videoEmojiMarkup?: constructors.TypeVideoSize }) {
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

export class UploadSaveFilePart extends Function {
  fileId: bigint;
  filePart: number;
  bytes: Uint8Array;

  protected get [id]() {
    return 0xb304a621;
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

export class UploadGetFile extends Function {
  precise?: true;
  cdnSupported?: true;
  location: constructors.TypeInputFileLocation;
  offset: bigint;
  limit: number;

  protected get [id]() {
    return 0xbe5335be;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["precise", "true", "flags.0?true"],
      ["cdnSupported", "true", "flags.1?true"],
      ["location", constructors.TypeInputFileLocation, "InputFileLocation"],
      ["offset", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.precise ?? null, "true", "flags.0?true"],
      [this.cdnSupported ?? null, "true", "flags.1?true"],
      [this.location, constructors.TypeInputFileLocation, "InputFileLocation"],
      [this.offset, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { precise?: true; cdnSupported?: true; location: constructors.TypeInputFileLocation; offset: bigint; limit: number }) {
    super();
    this.precise = params.precise;
    this.cdnSupported = params.cdnSupported;
    this.location = params.location;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class UploadSaveBigFilePart extends Function {
  fileId: bigint;
  filePart: number;
  fileTotalParts: number;
  bytes: Uint8Array;

  protected get [id]() {
    return 0xde7b673d;
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

export class UploadGetWebFile extends Function {
  location: constructors.TypeInputWebFileLocation;
  offset: number;
  limit: number;

  protected get [id]() {
    return 0x24e6818d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["location", constructors.TypeInputWebFileLocation, "InputWebFileLocation"],
      ["offset", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.location, constructors.TypeInputWebFileLocation, "InputWebFileLocation"],
      [this.offset, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { location: constructors.TypeInputWebFileLocation; offset: number; limit: number }) {
    super();
    this.location = params.location;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class UploadGetCdnFile extends Function {
  fileToken: Uint8Array;
  offset: bigint;
  limit: number;

  protected get [id]() {
    return 0x395f69da;
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

export class UploadReuploadCdnFile extends Function {
  fileToken: Uint8Array;
  requestToken: Uint8Array;

  protected get [id]() {
    return 0x9b2754a8;
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

export class UploadGetCdnFileHashes extends Function {
  fileToken: Uint8Array;
  offset: bigint;

  protected get [id]() {
    return 0x91dc3f31;
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

export class UploadGetFileHashes extends Function {
  location: constructors.TypeInputFileLocation;
  offset: bigint;

  protected get [id]() {
    return 0x9156982a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["location", constructors.TypeInputFileLocation, "InputFileLocation"],
      ["offset", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.location, constructors.TypeInputFileLocation, "InputFileLocation"],
      [this.offset, "bigint", "long"],
    ];
  }

  constructor(params: { location: constructors.TypeInputFileLocation; offset: bigint }) {
    super();
    this.location = params.location;
    this.offset = params.offset;
  }
}

export class HelpGetConfig extends Function {
  protected get [id]() {
    return 0xc4f9186b;
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

export class HelpGetNearestDc extends Function {
  protected get [id]() {
    return 0x1fb33026;
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

export class HelpGetAppUpdate extends Function {
  source: string;

  protected get [id]() {
    return 0x522d5a7d;
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

export class HelpGetInviteText extends Function {
  protected get [id]() {
    return 0x4d392343;
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

export class HelpGetSupport extends Function {
  protected get [id]() {
    return 0x9cdf08cd;
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

export class HelpGetAppChangelog extends Function {
  prevAppVersion: string;

  protected get [id]() {
    return 0x9010ef6f;
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

export class HelpSetBotUpdatesStatus extends Function {
  pendingUpdatesCount: number;
  message: string;

  protected get [id]() {
    return 0xec22cfcd;
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

export class HelpGetCdnConfig extends Function {
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

export class HelpGetRecentMeUrls extends Function {
  referer: string;

  protected get [id]() {
    return 0x3dc0f114;
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

export class HelpGetTermsOfServiceUpdate extends Function {
  protected get [id]() {
    return 0x2ca51fd1;
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

export class HelpAcceptTermsOfService extends Function {
  id: constructors.TypeDataJSON;

  protected get [id]() {
    return 0xee72f79a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", constructors.TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, constructors.TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { id: constructors.TypeDataJSON }) {
    super();
    this.id = params.id;
  }
}

export class HelpGetDeepLinkInfo extends Function {
  path: string;

  protected get [id]() {
    return 0x3fedc75f;
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

export class HelpGetAppConfig extends Function {
  hash: number;

  protected get [id]() {
    return 0x61e3f854;
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

export class HelpSaveAppLog extends Function {
  events: Array<constructors.TypeInputAppEvent>;

  protected get [id]() {
    return 0x6f02f748;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["events", [constructors.TypeInputAppEvent], "Vector<InputAppEvent>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.events, [constructors.TypeInputAppEvent], "Vector<InputAppEvent>"],
    ];
  }

  constructor(params: { events: Array<constructors.TypeInputAppEvent> }) {
    super();
    this.events = params.events;
  }
}

export class HelpGetPassportConfig extends Function {
  hash: number;

  protected get [id]() {
    return 0xc661ad08;
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

export class HelpGetSupportName extends Function {
  protected get [id]() {
    return 0xd360e72c;
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

export class HelpGetUserInfo extends Function {
  userId: constructors.TypeInputUser;

  protected get [id]() {
    return 0x038a08d3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", constructors.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, constructors.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { userId: constructors.TypeInputUser }) {
    super();
    this.userId = params.userId;
  }
}

export class HelpEditUserInfo extends Function {
  userId: constructors.TypeInputUser;
  message: string;
  entities: Array<constructors.TypeMessageEntity>;

  protected get [id]() {
    return 0x66b91b70;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", constructors.TypeInputUser, "InputUser"],
      ["message", "string", "string"],
      ["entities", [constructors.TypeMessageEntity], "Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, constructors.TypeInputUser, "InputUser"],
      [this.message, "string", "string"],
      [this.entities, [constructors.TypeMessageEntity], "Vector<MessageEntity>"],
    ];
  }

  constructor(params: { userId: constructors.TypeInputUser; message: string; entities: Array<constructors.TypeMessageEntity> }) {
    super();
    this.userId = params.userId;
    this.message = params.message;
    this.entities = params.entities;
  }
}

export class HelpGetPromoData extends Function {
  protected get [id]() {
    return 0xc0977421;
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

export class HelpHidePromoData extends Function {
  peer: constructors.TypeInputPeer;

  protected get [id]() {
    return 0x1e251c95;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class HelpDismissSuggestion extends Function {
  peer: constructors.TypeInputPeer;
  suggestion: string;

  protected get [id]() {
    return 0xf50dbaa1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["suggestion", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.suggestion, "string", "string"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; suggestion: string }) {
    super();
    this.peer = params.peer;
    this.suggestion = params.suggestion;
  }
}

export class HelpGetCountriesList extends Function {
  langCode: string;
  hash: number;

  protected get [id]() {
    return 0x735787a8;
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

export class HelpGetPremiumPromo extends Function {
  protected get [id]() {
    return 0xb81b93d4;
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

export class ChannelsReadHistory extends Function {
  channel: constructors.TypeInputChannel;
  maxId: number;

  protected get [id]() {
    return 0xcc104937;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["maxId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.maxId, "number", "int"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; maxId: number }) {
    super();
    this.channel = params.channel;
    this.maxId = params.maxId;
  }
}

export class ChannelsDeleteMessages extends Function {
  channel: constructors.TypeInputChannel;
  id: Array<number>;

  protected get [id]() {
    return 0x84c1fd4e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; id: Array<number> }) {
    super();
    this.channel = params.channel;
    this.id = params.id;
  }
}

export class ChannelsReportSpam extends Function {
  channel: constructors.TypeInputChannel;
  participant: constructors.TypeInputPeer;
  id: Array<number>;

  protected get [id]() {
    return 0xf44a8315;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["participant", constructors.TypeInputPeer, "InputPeer"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.participant, constructors.TypeInputPeer, "InputPeer"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; participant: constructors.TypeInputPeer; id: Array<number> }) {
    super();
    this.channel = params.channel;
    this.participant = params.participant;
    this.id = params.id;
  }
}

export class ChannelsGetMessages extends Function {
  channel: constructors.TypeInputChannel;
  id: Array<constructors.TypeInputMessage>;

  protected get [id]() {
    return 0xad8c9a23;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["id", [constructors.TypeInputMessage], "Vector<InputMessage>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.id, [constructors.TypeInputMessage], "Vector<InputMessage>"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; id: Array<constructors.TypeInputMessage> }) {
    super();
    this.channel = params.channel;
    this.id = params.id;
  }
}

export class ChannelsGetParticipants extends Function {
  channel: constructors.TypeInputChannel;
  filter: constructors.TypeChannelParticipantsFilter;
  offset: number;
  limit: number;
  hash: bigint;

  protected get [id]() {
    return 0x77ced9d0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["filter", constructors.TypeChannelParticipantsFilter, "ChannelParticipantsFilter"],
      ["offset", "number", "int"],
      ["limit", "number", "int"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.filter, constructors.TypeChannelParticipantsFilter, "ChannelParticipantsFilter"],
      [this.offset, "number", "int"],
      [this.limit, "number", "int"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; filter: constructors.TypeChannelParticipantsFilter; offset: number; limit: number; hash: bigint }) {
    super();
    this.channel = params.channel;
    this.filter = params.filter;
    this.offset = params.offset;
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

export class ChannelsGetParticipant extends Function {
  channel: constructors.TypeInputChannel;
  participant: constructors.TypeInputPeer;

  protected get [id]() {
    return 0xa0ab6cc6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["participant", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.participant, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; participant: constructors.TypeInputPeer }) {
    super();
    this.channel = params.channel;
    this.participant = params.participant;
  }
}

export class ChannelsGetChannels extends Function {
  id: Array<constructors.TypeInputChannel>;

  protected get [id]() {
    return 0x0a7f6bbb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", [constructors.TypeInputChannel], "Vector<InputChannel>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, [constructors.TypeInputChannel], "Vector<InputChannel>"],
    ];
  }

  constructor(params: { id: Array<constructors.TypeInputChannel> }) {
    super();
    this.id = params.id;
  }
}

export class ChannelsGetFullChannel extends Function {
  channel: constructors.TypeInputChannel;

  protected get [id]() {
    return 0x08736a09;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class ChannelsCreateChannel extends Function {
  broadcast?: true;
  megagroup?: true;
  forImport?: true;
  forum?: true;
  title: string;
  about: string;
  geoPoint?: constructors.TypeInputGeoPoint;
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
      ["geoPoint", constructors.TypeInputGeoPoint, "flags.2?InputGeoPoint"],
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
      [this.geoPoint ?? null, constructors.TypeInputGeoPoint, "flags.2?InputGeoPoint"],
      [this.address ?? null, "string", "flags.2?string"],
      [this.ttlPeriod ?? null, "number", "flags.4?int"],
    ];
  }

  constructor(params: { broadcast?: true; megagroup?: true; forImport?: true; forum?: true; title: string; about: string; geoPoint?: constructors.TypeInputGeoPoint; address?: string; ttlPeriod?: number }) {
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

export class ChannelsEditAdmin extends Function {
  channel: constructors.TypeInputChannel;
  userId: constructors.TypeInputUser;
  adminRights: constructors.TypeChatAdminRights;
  rank: string;

  protected get [id]() {
    return 0xd33c8902;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["userId", constructors.TypeInputUser, "InputUser"],
      ["adminRights", constructors.TypeChatAdminRights, "ChatAdminRights"],
      ["rank", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.userId, constructors.TypeInputUser, "InputUser"],
      [this.adminRights, constructors.TypeChatAdminRights, "ChatAdminRights"],
      [this.rank, "string", "string"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; userId: constructors.TypeInputUser; adminRights: constructors.TypeChatAdminRights; rank: string }) {
    super();
    this.channel = params.channel;
    this.userId = params.userId;
    this.adminRights = params.adminRights;
    this.rank = params.rank;
  }
}

export class ChannelsEditTitle extends Function {
  channel: constructors.TypeInputChannel;
  title: string;

  protected get [id]() {
    return 0x566decd0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.title, "string", "string"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; title: string }) {
    super();
    this.channel = params.channel;
    this.title = params.title;
  }
}

export class ChannelsEditPhoto extends Function {
  channel: constructors.TypeInputChannel;
  photo: constructors.TypeInputChatPhoto;

  protected get [id]() {
    return 0xf12e57c9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["photo", constructors.TypeInputChatPhoto, "InputChatPhoto"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.photo, constructors.TypeInputChatPhoto, "InputChatPhoto"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; photo: constructors.TypeInputChatPhoto }) {
    super();
    this.channel = params.channel;
    this.photo = params.photo;
  }
}

export class ChannelsCheckUsername extends Function {
  channel: constructors.TypeInputChannel;
  username: string;

  protected get [id]() {
    return 0x10e6bd2c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["username", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.username, "string", "string"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; username: string }) {
    super();
    this.channel = params.channel;
    this.username = params.username;
  }
}

export class ChannelsUpdateUsername extends Function {
  channel: constructors.TypeInputChannel;
  username: string;

  protected get [id]() {
    return 0x3514b3de;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["username", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.username, "string", "string"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; username: string }) {
    super();
    this.channel = params.channel;
    this.username = params.username;
  }
}

export class ChannelsJoinChannel extends Function {
  channel: constructors.TypeInputChannel;

  protected get [id]() {
    return 0x24b524c5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class ChannelsLeaveChannel extends Function {
  channel: constructors.TypeInputChannel;

  protected get [id]() {
    return 0xf836aa95;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class ChannelsInviteToChannel extends Function {
  channel: constructors.TypeInputChannel;
  users: Array<constructors.TypeInputUser>;

  protected get [id]() {
    return 0x199f3a6c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["users", [constructors.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.users, [constructors.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; users: Array<constructors.TypeInputUser> }) {
    super();
    this.channel = params.channel;
    this.users = params.users;
  }
}

export class ChannelsDeleteChannel extends Function {
  channel: constructors.TypeInputChannel;

  protected get [id]() {
    return 0xc0111fe3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class ChannelsExportMessageLink extends Function {
  grouped?: true;
  thread?: true;
  channel: constructors.TypeInputChannel;
  id: number;

  protected get [id]() {
    return 0xe63fadeb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["grouped", "true", "flags.0?true"],
      ["thread", "true", "flags.1?true"],
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.grouped ?? null, "true", "flags.0?true"],
      [this.thread ?? null, "true", "flags.1?true"],
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.id, "number", "int"],
    ];
  }

  constructor(params: { grouped?: true; thread?: true; channel: constructors.TypeInputChannel; id: number }) {
    super();
    this.grouped = params.grouped;
    this.thread = params.thread;
    this.channel = params.channel;
    this.id = params.id;
  }
}

export class ChannelsToggleSignatures extends Function {
  channel: constructors.TypeInputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0x1f69b606;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class ChannelsGetAdminedPublicChannels extends Function {
  byLocation?: true;
  checkLimit?: true;

  protected get [id]() {
    return 0xf8b036af;
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

export class ChannelsEditBanned extends Function {
  channel: constructors.TypeInputChannel;
  participant: constructors.TypeInputPeer;
  bannedRights: constructors.TypeChatBannedRights;

  protected get [id]() {
    return 0x96e6cd81;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["participant", constructors.TypeInputPeer, "InputPeer"],
      ["bannedRights", constructors.TypeChatBannedRights, "ChatBannedRights"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.participant, constructors.TypeInputPeer, "InputPeer"],
      [this.bannedRights, constructors.TypeChatBannedRights, "ChatBannedRights"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; participant: constructors.TypeInputPeer; bannedRights: constructors.TypeChatBannedRights }) {
    super();
    this.channel = params.channel;
    this.participant = params.participant;
    this.bannedRights = params.bannedRights;
  }
}

export class ChannelsGetAdminLog extends Function {
  channel: constructors.TypeInputChannel;
  q: string;
  eventsFilter?: constructors.TypeChannelAdminLogEventsFilter;
  admins?: Array<constructors.TypeInputUser>;
  maxId: bigint;
  minId: bigint;
  limit: number;

  protected get [id]() {
    return 0x33ddf480;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["q", "string", "string"],
      ["eventsFilter", constructors.TypeChannelAdminLogEventsFilter, "flags.0?ChannelAdminLogEventsFilter"],
      ["admins", [constructors.TypeInputUser], "flags.1?Vector<InputUser>"],
      ["maxId", "bigint", "long"],
      ["minId", "bigint", "long"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.q, "string", "string"],
      [this.eventsFilter ?? null, constructors.TypeChannelAdminLogEventsFilter, "flags.0?ChannelAdminLogEventsFilter"],
      [this.admins ?? null, [constructors.TypeInputUser], "flags.1?Vector<InputUser>"],
      [this.maxId, "bigint", "long"],
      [this.minId, "bigint", "long"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; q: string; eventsFilter?: constructors.TypeChannelAdminLogEventsFilter; admins?: Array<constructors.TypeInputUser>; maxId: bigint; minId: bigint; limit: number }) {
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

export class ChannelsSetStickers extends Function {
  channel: constructors.TypeInputChannel;
  stickerset: constructors.TypeInputStickerSet;

  protected get [id]() {
    return 0xea8ca4f9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["stickerset", constructors.TypeInputStickerSet, "InputStickerSet"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.stickerset, constructors.TypeInputStickerSet, "InputStickerSet"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; stickerset: constructors.TypeInputStickerSet }) {
    super();
    this.channel = params.channel;
    this.stickerset = params.stickerset;
  }
}

export class ChannelsReadMessageContents extends Function {
  channel: constructors.TypeInputChannel;
  id: Array<number>;

  protected get [id]() {
    return 0xeab5dc38;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["id", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.id, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; id: Array<number> }) {
    super();
    this.channel = params.channel;
    this.id = params.id;
  }
}

export class ChannelsDeleteHistory extends Function {
  forEveryone?: true;
  channel: constructors.TypeInputChannel;
  maxId: number;

  protected get [id]() {
    return 0x9baa9647;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["forEveryone", "true", "flags.0?true"],
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["maxId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.forEveryone ?? null, "true", "flags.0?true"],
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.maxId, "number", "int"],
    ];
  }

  constructor(params: { forEveryone?: true; channel: constructors.TypeInputChannel; maxId: number }) {
    super();
    this.forEveryone = params.forEveryone;
    this.channel = params.channel;
    this.maxId = params.maxId;
  }
}

export class ChannelsTogglePreHistoryHidden extends Function {
  channel: constructors.TypeInputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0xeabbb94c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class ChannelsGetLeftChannels extends Function {
  offset: number;

  protected get [id]() {
    return 0x8341ecc0;
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

export class ChannelsGetGroupsForDiscussion extends Function {
  protected get [id]() {
    return 0xf5dad378;
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

export class ChannelsSetDiscussionGroup extends Function {
  broadcast: constructors.TypeInputChannel;
  group: constructors.TypeInputChannel;

  protected get [id]() {
    return 0x40582bb2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["broadcast", constructors.TypeInputChannel, "InputChannel"],
      ["group", constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.broadcast, constructors.TypeInputChannel, "InputChannel"],
      [this.group, constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { broadcast: constructors.TypeInputChannel; group: constructors.TypeInputChannel }) {
    super();
    this.broadcast = params.broadcast;
    this.group = params.group;
  }
}

export class ChannelsEditCreator extends Function {
  channel: constructors.TypeInputChannel;
  userId: constructors.TypeInputUser;
  password: constructors.TypeInputCheckPasswordSRP;

  protected get [id]() {
    return 0x8f38cd1f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["userId", constructors.TypeInputUser, "InputUser"],
      ["password", constructors.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.userId, constructors.TypeInputUser, "InputUser"],
      [this.password, constructors.TypeInputCheckPasswordSRP, "InputCheckPasswordSRP"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; userId: constructors.TypeInputUser; password: constructors.TypeInputCheckPasswordSRP }) {
    super();
    this.channel = params.channel;
    this.userId = params.userId;
    this.password = params.password;
  }
}

export class ChannelsEditLocation extends Function {
  channel: constructors.TypeInputChannel;
  geoPoint: constructors.TypeInputGeoPoint;
  address: string;

  protected get [id]() {
    return 0x58e63f6d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["geoPoint", constructors.TypeInputGeoPoint, "InputGeoPoint"],
      ["address", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.geoPoint, constructors.TypeInputGeoPoint, "InputGeoPoint"],
      [this.address, "string", "string"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; geoPoint: constructors.TypeInputGeoPoint; address: string }) {
    super();
    this.channel = params.channel;
    this.geoPoint = params.geoPoint;
    this.address = params.address;
  }
}

export class ChannelsToggleSlowMode extends Function {
  channel: constructors.TypeInputChannel;
  seconds: number;

  protected get [id]() {
    return 0xedd49ef0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["seconds", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.seconds, "number", "int"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; seconds: number }) {
    super();
    this.channel = params.channel;
    this.seconds = params.seconds;
  }
}

export class ChannelsGetInactiveChannels extends Function {
  protected get [id]() {
    return 0x11e831ee;
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

export class ChannelsConvertToGigagroup extends Function {
  channel: constructors.TypeInputChannel;

  protected get [id]() {
    return 0x0b290c69;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class ChannelsViewSponsoredMessage extends Function {
  channel: constructors.TypeInputChannel;
  randomId: Uint8Array;

  protected get [id]() {
    return 0xbeaedb94;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["randomId", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.randomId, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; randomId: Uint8Array }) {
    super();
    this.channel = params.channel;
    this.randomId = params.randomId;
  }
}

export class ChannelsGetSponsoredMessages extends Function {
  channel: constructors.TypeInputChannel;

  protected get [id]() {
    return 0xec210fbf;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class ChannelsGetSendAs extends Function {
  peer: constructors.TypeInputPeer;

  protected get [id]() {
    return 0x0dc770ee;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class ChannelsDeleteParticipantHistory extends Function {
  channel: constructors.TypeInputChannel;
  participant: constructors.TypeInputPeer;

  protected get [id]() {
    return 0x367544db;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["participant", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.participant, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; participant: constructors.TypeInputPeer }) {
    super();
    this.channel = params.channel;
    this.participant = params.participant;
  }
}

export class ChannelsToggleJoinToSend extends Function {
  channel: constructors.TypeInputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0xe4cb9580;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class ChannelsToggleJoinRequest extends Function {
  channel: constructors.TypeInputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0x4c2985b6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class ChannelsReorderUsernames extends Function {
  channel: constructors.TypeInputChannel;
  order: Array<string>;

  protected get [id]() {
    return 0xb45ced1d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["order", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.order, ["string"], "Vector<string>"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; order: Array<string> }) {
    super();
    this.channel = params.channel;
    this.order = params.order;
  }
}

export class ChannelsToggleUsername extends Function {
  channel: constructors.TypeInputChannel;
  username: string;
  active: boolean;

  protected get [id]() {
    return 0x50f24105;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["username", "string", "string"],
      ["active", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.username, "string", "string"],
      [this.active, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; username: string; active: boolean }) {
    super();
    this.channel = params.channel;
    this.username = params.username;
    this.active = params.active;
  }
}

export class ChannelsDeactivateAllUsernames extends Function {
  channel: constructors.TypeInputChannel;

  protected get [id]() {
    return 0x0a245dd3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel }) {
    super();
    this.channel = params.channel;
  }
}

export class ChannelsToggleForum extends Function {
  channel: constructors.TypeInputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0xa4298b29;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class ChannelsCreateForumTopic extends Function {
  channel: constructors.TypeInputChannel;
  title: string;
  iconColor?: number;
  iconEmojiId?: bigint;
  randomId: bigint;
  sendAs?: constructors.TypeInputPeer;

  protected get [id]() {
    return 0xf40c0224;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["title", "string", "string"],
      ["iconColor", "number", "flags.0?int"],
      ["iconEmojiId", "bigint", "flags.3?long"],
      ["randomId", "bigint", "long"],
      ["sendAs", constructors.TypeInputPeer, "flags.2?InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.title, "string", "string"],
      [this.iconColor ?? null, "number", "flags.0?int"],
      [this.iconEmojiId ?? null, "bigint", "flags.3?long"],
      [this.randomId, "bigint", "long"],
      [this.sendAs ?? null, constructors.TypeInputPeer, "flags.2?InputPeer"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; title: string; iconColor?: number; iconEmojiId?: bigint; randomId: bigint; sendAs?: constructors.TypeInputPeer }) {
    super();
    this.channel = params.channel;
    this.title = params.title;
    this.iconColor = params.iconColor;
    this.iconEmojiId = params.iconEmojiId;
    this.randomId = params.randomId;
    this.sendAs = params.sendAs;
  }
}

export class ChannelsGetForumTopics extends Function {
  channel: constructors.TypeInputChannel;
  q?: string;
  offsetDate: number;
  offsetId: number;
  offsetTopic: number;
  limit: number;

  protected get [id]() {
    return 0x0de560d1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channel", constructors.TypeInputChannel, "InputChannel"],
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
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.q ?? null, "string", "flags.0?string"],
      [this.offsetDate, "number", "int"],
      [this.offsetId, "number", "int"],
      [this.offsetTopic, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; q?: string; offsetDate: number; offsetId: number; offsetTopic: number; limit: number }) {
    super();
    this.channel = params.channel;
    this.q = params.q;
    this.offsetDate = params.offsetDate;
    this.offsetId = params.offsetId;
    this.offsetTopic = params.offsetTopic;
    this.limit = params.limit;
  }
}

export class ChannelsGetForumTopicsByID extends Function {
  channel: constructors.TypeInputChannel;
  topics: Array<number>;

  protected get [id]() {
    return 0xb0831eb9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["topics", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.topics, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; topics: Array<number> }) {
    super();
    this.channel = params.channel;
    this.topics = params.topics;
  }
}

export class ChannelsEditForumTopic extends Function {
  channel: constructors.TypeInputChannel;
  topicId: number;
  title?: string;
  iconEmojiId?: bigint;
  closed?: boolean;
  hidden?: boolean;

  protected get [id]() {
    return 0xf4dfa185;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channel", constructors.TypeInputChannel, "InputChannel"],
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
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.topicId, "number", "int"],
      [this.title ?? null, "string", "flags.0?string"],
      [this.iconEmojiId ?? null, "bigint", "flags.1?long"],
      [this.closed ?? null, "boolean", "flags.2?Bool"],
      [this.hidden ?? null, "boolean", "flags.3?Bool"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; topicId: number; title?: string; iconEmojiId?: bigint; closed?: boolean; hidden?: boolean }) {
    super();
    this.channel = params.channel;
    this.topicId = params.topicId;
    this.title = params.title;
    this.iconEmojiId = params.iconEmojiId;
    this.closed = params.closed;
    this.hidden = params.hidden;
  }
}

export class ChannelsUpdatePinnedForumTopic extends Function {
  channel: constructors.TypeInputChannel;
  topicId: number;
  pinned: boolean;

  protected get [id]() {
    return 0x6c2d9026;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["topicId", "number", "int"],
      ["pinned", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.topicId, "number", "int"],
      [this.pinned, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; topicId: number; pinned: boolean }) {
    super();
    this.channel = params.channel;
    this.topicId = params.topicId;
    this.pinned = params.pinned;
  }
}

export class ChannelsDeleteTopicHistory extends Function {
  channel: constructors.TypeInputChannel;
  topMsgId: number;

  protected get [id]() {
    return 0x34435f2d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["topMsgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.topMsgId, "number", "int"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; topMsgId: number }) {
    super();
    this.channel = params.channel;
    this.topMsgId = params.topMsgId;
  }
}

export class ChannelsReorderPinnedForumTopics extends Function {
  force?: true;
  channel: constructors.TypeInputChannel;
  order: Array<number>;

  protected get [id]() {
    return 0x2950a18f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["force", "true", "flags.0?true"],
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["order", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.force ?? null, "true", "flags.0?true"],
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.order, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { force?: true; channel: constructors.TypeInputChannel; order: Array<number> }) {
    super();
    this.force = params.force;
    this.channel = params.channel;
    this.order = params.order;
  }
}

export class ChannelsToggleAntiSpam extends Function {
  channel: constructors.TypeInputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0x68f3e4eb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class ChannelsReportAntiSpamFalsePositive extends Function {
  channel: constructors.TypeInputChannel;
  msgId: number;

  protected get [id]() {
    return 0xa850a693;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; msgId: number }) {
    super();
    this.channel = params.channel;
    this.msgId = params.msgId;
  }
}

export class ChannelsToggleParticipantsHidden extends Function {
  channel: constructors.TypeInputChannel;
  enabled: boolean;

  protected get [id]() {
    return 0x6a6e7854;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["enabled", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.enabled, "boolean", "Bool"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; enabled: boolean }) {
    super();
    this.channel = params.channel;
    this.enabled = params.enabled;
  }
}

export class BotsSendCustomRequest extends Function {
  customMethod: string;
  params: constructors.TypeDataJSON;

  protected get [id]() {
    return 0xaa2769ed;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["customMethod", "string", "string"],
      ["params", constructors.TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.customMethod, "string", "string"],
      [this.params, constructors.TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { customMethod: string; params: constructors.TypeDataJSON }) {
    super();
    this.customMethod = params.customMethod;
    this.params = params.params;
  }
}

export class BotsAnswerWebhookJSONQuery extends Function {
  queryId: bigint;
  data: constructors.TypeDataJSON;

  protected get [id]() {
    return 0xe6213f4d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["queryId", "bigint", "long"],
      ["data", constructors.TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.queryId, "bigint", "long"],
      [this.data, constructors.TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { queryId: bigint; data: constructors.TypeDataJSON }) {
    super();
    this.queryId = params.queryId;
    this.data = params.data;
  }
}

export class BotsSetBotCommands extends Function {
  scope: constructors.TypeBotCommandScope;
  langCode: string;
  commands: Array<constructors.TypeBotCommand>;

  protected get [id]() {
    return 0x0517165a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["scope", constructors.TypeBotCommandScope, "BotCommandScope"],
      ["langCode", "string", "string"],
      ["commands", [constructors.TypeBotCommand], "Vector<BotCommand>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.scope, constructors.TypeBotCommandScope, "BotCommandScope"],
      [this.langCode, "string", "string"],
      [this.commands, [constructors.TypeBotCommand], "Vector<BotCommand>"],
    ];
  }

  constructor(params: { scope: constructors.TypeBotCommandScope; langCode: string; commands: Array<constructors.TypeBotCommand> }) {
    super();
    this.scope = params.scope;
    this.langCode = params.langCode;
    this.commands = params.commands;
  }
}

export class BotsResetBotCommands extends Function {
  scope: constructors.TypeBotCommandScope;
  langCode: string;

  protected get [id]() {
    return 0x3d8de0f9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["scope", constructors.TypeBotCommandScope, "BotCommandScope"],
      ["langCode", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.scope, constructors.TypeBotCommandScope, "BotCommandScope"],
      [this.langCode, "string", "string"],
    ];
  }

  constructor(params: { scope: constructors.TypeBotCommandScope; langCode: string }) {
    super();
    this.scope = params.scope;
    this.langCode = params.langCode;
  }
}

export class BotsGetBotCommands extends Function {
  scope: constructors.TypeBotCommandScope;
  langCode: string;

  protected get [id]() {
    return 0xe34c0dd6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["scope", constructors.TypeBotCommandScope, "BotCommandScope"],
      ["langCode", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.scope, constructors.TypeBotCommandScope, "BotCommandScope"],
      [this.langCode, "string", "string"],
    ];
  }

  constructor(params: { scope: constructors.TypeBotCommandScope; langCode: string }) {
    super();
    this.scope = params.scope;
    this.langCode = params.langCode;
  }
}

export class BotsSetBotMenuButton extends Function {
  userId: constructors.TypeInputUser;
  button: constructors.TypeBotMenuButton;

  protected get [id]() {
    return 0x4504d54f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", constructors.TypeInputUser, "InputUser"],
      ["button", constructors.TypeBotMenuButton, "BotMenuButton"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, constructors.TypeInputUser, "InputUser"],
      [this.button, constructors.TypeBotMenuButton, "BotMenuButton"],
    ];
  }

  constructor(params: { userId: constructors.TypeInputUser; button: constructors.TypeBotMenuButton }) {
    super();
    this.userId = params.userId;
    this.button = params.button;
  }
}

export class BotsGetBotMenuButton extends Function {
  userId: constructors.TypeInputUser;

  protected get [id]() {
    return 0x9c60eb28;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", constructors.TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, constructors.TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { userId: constructors.TypeInputUser }) {
    super();
    this.userId = params.userId;
  }
}

export class BotsSetBotBroadcastDefaultAdminRights extends Function {
  adminRights: constructors.TypeChatAdminRights;

  protected get [id]() {
    return 0x788464e1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["adminRights", constructors.TypeChatAdminRights, "ChatAdminRights"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.adminRights, constructors.TypeChatAdminRights, "ChatAdminRights"],
    ];
  }

  constructor(params: { adminRights: constructors.TypeChatAdminRights }) {
    super();
    this.adminRights = params.adminRights;
  }
}

export class BotsSetBotGroupDefaultAdminRights extends Function {
  adminRights: constructors.TypeChatAdminRights;

  protected get [id]() {
    return 0x925ec9ea;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["adminRights", constructors.TypeChatAdminRights, "ChatAdminRights"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.adminRights, constructors.TypeChatAdminRights, "ChatAdminRights"],
    ];
  }

  constructor(params: { adminRights: constructors.TypeChatAdminRights }) {
    super();
    this.adminRights = params.adminRights;
  }
}

export class BotsSetBotInfo extends Function {
  langCode: string;
  about?: string;
  description?: string;

  protected get [id]() {
    return 0xa365df7a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["langCode", "string", "string"],
      ["about", "string", "flags.0?string"],
      ["description", "string", "flags.1?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.langCode, "string", "string"],
      [this.about ?? null, "string", "flags.0?string"],
      [this.description ?? null, "string", "flags.1?string"],
    ];
  }

  constructor(params: { langCode: string; about?: string; description?: string }) {
    super();
    this.langCode = params.langCode;
    this.about = params.about;
    this.description = params.description;
  }
}

export class BotsGetBotInfo extends Function {
  langCode: string;

  protected get [id]() {
    return 0x75ec12e6;
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

export class PaymentsGetPaymentForm extends Function {
  invoice: constructors.TypeInputInvoice;
  themeParams?: constructors.TypeDataJSON;

  protected get [id]() {
    return 0x37148dbb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["invoice", constructors.TypeInputInvoice, "InputInvoice"],
      ["themeParams", constructors.TypeDataJSON, "flags.0?DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.invoice, constructors.TypeInputInvoice, "InputInvoice"],
      [this.themeParams ?? null, constructors.TypeDataJSON, "flags.0?DataJSON"],
    ];
  }

  constructor(params: { invoice: constructors.TypeInputInvoice; themeParams?: constructors.TypeDataJSON }) {
    super();
    this.invoice = params.invoice;
    this.themeParams = params.themeParams;
  }
}

export class PaymentsGetPaymentReceipt extends Function {
  peer: constructors.TypeInputPeer;
  msgId: number;

  protected get [id]() {
    return 0x2478d1cc;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; msgId: number }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
  }
}

export class PaymentsValidateRequestedInfo extends Function {
  save?: true;
  invoice: constructors.TypeInputInvoice;
  info: constructors.TypePaymentRequestedInfo;

  protected get [id]() {
    return 0xb6c8f12b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["save", "true", "flags.0?true"],
      ["invoice", constructors.TypeInputInvoice, "InputInvoice"],
      ["info", constructors.TypePaymentRequestedInfo, "PaymentRequestedInfo"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.save ?? null, "true", "flags.0?true"],
      [this.invoice, constructors.TypeInputInvoice, "InputInvoice"],
      [this.info, constructors.TypePaymentRequestedInfo, "PaymentRequestedInfo"],
    ];
  }

  constructor(params: { save?: true; invoice: constructors.TypeInputInvoice; info: constructors.TypePaymentRequestedInfo }) {
    super();
    this.save = params.save;
    this.invoice = params.invoice;
    this.info = params.info;
  }
}

export class PaymentsSendPaymentForm extends Function {
  formId: bigint;
  invoice: constructors.TypeInputInvoice;
  requestedInfoId?: string;
  shippingOptionId?: string;
  credentials: constructors.TypeInputPaymentCredentials;
  tipAmount?: bigint;

  protected get [id]() {
    return 0x2d03522f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["formId", "bigint", "long"],
      ["invoice", constructors.TypeInputInvoice, "InputInvoice"],
      ["requestedInfoId", "string", "flags.0?string"],
      ["shippingOptionId", "string", "flags.1?string"],
      ["credentials", constructors.TypeInputPaymentCredentials, "InputPaymentCredentials"],
      ["tipAmount", "bigint", "flags.2?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.formId, "bigint", "long"],
      [this.invoice, constructors.TypeInputInvoice, "InputInvoice"],
      [this.requestedInfoId ?? null, "string", "flags.0?string"],
      [this.shippingOptionId ?? null, "string", "flags.1?string"],
      [this.credentials, constructors.TypeInputPaymentCredentials, "InputPaymentCredentials"],
      [this.tipAmount ?? null, "bigint", "flags.2?long"],
    ];
  }

  constructor(params: { formId: bigint; invoice: constructors.TypeInputInvoice; requestedInfoId?: string; shippingOptionId?: string; credentials: constructors.TypeInputPaymentCredentials; tipAmount?: bigint }) {
    super();
    this.formId = params.formId;
    this.invoice = params.invoice;
    this.requestedInfoId = params.requestedInfoId;
    this.shippingOptionId = params.shippingOptionId;
    this.credentials = params.credentials;
    this.tipAmount = params.tipAmount;
  }
}

export class PaymentsGetSavedInfo extends Function {
  protected get [id]() {
    return 0x227d824b;
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

export class PaymentsClearSavedInfo extends Function {
  credentials?: true;
  info?: true;

  protected get [id]() {
    return 0xd83d70c1;
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

export class PaymentsGetBankCardData extends Function {
  number: string;

  protected get [id]() {
    return 0x2e79d779;
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

export class PaymentsExportInvoice extends Function {
  invoiceMedia: constructors.TypeInputMedia;

  protected get [id]() {
    return 0x0f91b065;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["invoiceMedia", constructors.TypeInputMedia, "InputMedia"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.invoiceMedia, constructors.TypeInputMedia, "InputMedia"],
    ];
  }

  constructor(params: { invoiceMedia: constructors.TypeInputMedia }) {
    super();
    this.invoiceMedia = params.invoiceMedia;
  }
}

export class PaymentsAssignAppStoreTransaction extends Function {
  receipt: Uint8Array;
  purpose: constructors.TypeInputStorePaymentPurpose;

  protected get [id]() {
    return 0x80ed747d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["receipt", Uint8Array, "bytes"],
      ["purpose", constructors.TypeInputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.receipt, Uint8Array, "bytes"],
      [this.purpose, constructors.TypeInputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  constructor(params: { receipt: Uint8Array; purpose: constructors.TypeInputStorePaymentPurpose }) {
    super();
    this.receipt = params.receipt;
    this.purpose = params.purpose;
  }
}

export class PaymentsAssignPlayMarketTransaction extends Function {
  receipt: constructors.TypeDataJSON;
  purpose: constructors.TypeInputStorePaymentPurpose;

  protected get [id]() {
    return 0xdffd50d3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["receipt", constructors.TypeDataJSON, "DataJSON"],
      ["purpose", constructors.TypeInputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.receipt, constructors.TypeDataJSON, "DataJSON"],
      [this.purpose, constructors.TypeInputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  constructor(params: { receipt: constructors.TypeDataJSON; purpose: constructors.TypeInputStorePaymentPurpose }) {
    super();
    this.receipt = params.receipt;
    this.purpose = params.purpose;
  }
}

export class PaymentsCanPurchasePremium extends Function {
  purpose: constructors.TypeInputStorePaymentPurpose;

  protected get [id]() {
    return 0x9fc19eb6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["purpose", constructors.TypeInputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.purpose, constructors.TypeInputStorePaymentPurpose, "InputStorePaymentPurpose"],
    ];
  }

  constructor(params: { purpose: constructors.TypeInputStorePaymentPurpose }) {
    super();
    this.purpose = params.purpose;
  }
}

export class StickersCreateStickerSet extends Function {
  masks?: true;
  animated?: true;
  videos?: true;
  emojis?: true;
  textColor?: true;
  userId: constructors.TypeInputUser;
  title: string;
  shortName: string;
  thumb?: constructors.TypeInputDocument;
  stickers: Array<constructors.TypeInputStickerSetItem>;
  software?: string;

  protected get [id]() {
    return 0x9021ab67;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["masks", "true", "flags.0?true"],
      ["animated", "true", "flags.1?true"],
      ["videos", "true", "flags.4?true"],
      ["emojis", "true", "flags.5?true"],
      ["textColor", "true", "flags.6?true"],
      ["userId", constructors.TypeInputUser, "InputUser"],
      ["title", "string", "string"],
      ["shortName", "string", "string"],
      ["thumb", constructors.TypeInputDocument, "flags.2?InputDocument"],
      ["stickers", [constructors.TypeInputStickerSetItem], "Vector<InputStickerSetItem>"],
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
      [this.userId, constructors.TypeInputUser, "InputUser"],
      [this.title, "string", "string"],
      [this.shortName, "string", "string"],
      [this.thumb ?? null, constructors.TypeInputDocument, "flags.2?InputDocument"],
      [this.stickers, [constructors.TypeInputStickerSetItem], "Vector<InputStickerSetItem>"],
      [this.software ?? null, "string", "flags.3?string"],
    ];
  }

  constructor(params: { masks?: true; animated?: true; videos?: true; emojis?: true; textColor?: true; userId: constructors.TypeInputUser; title: string; shortName: string; thumb?: constructors.TypeInputDocument; stickers: Array<constructors.TypeInputStickerSetItem>; software?: string }) {
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

export class StickersRemoveStickerFromSet extends Function {
  sticker: constructors.TypeInputDocument;

  protected get [id]() {
    return 0xf7760f51;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["sticker", constructors.TypeInputDocument, "InputDocument"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.sticker, constructors.TypeInputDocument, "InputDocument"],
    ];
  }

  constructor(params: { sticker: constructors.TypeInputDocument }) {
    super();
    this.sticker = params.sticker;
  }
}

export class StickersChangeStickerPosition extends Function {
  sticker: constructors.TypeInputDocument;
  position: number;

  protected get [id]() {
    return 0xffb6d4ca;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["sticker", constructors.TypeInputDocument, "InputDocument"],
      ["position", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.sticker, constructors.TypeInputDocument, "InputDocument"],
      [this.position, "number", "int"],
    ];
  }

  constructor(params: { sticker: constructors.TypeInputDocument; position: number }) {
    super();
    this.sticker = params.sticker;
    this.position = params.position;
  }
}

export class StickersAddStickerToSet extends Function {
  stickerset: constructors.TypeInputStickerSet;
  sticker: constructors.TypeInputStickerSetItem;

  protected get [id]() {
    return 0x8653febe;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", constructors.TypeInputStickerSet, "InputStickerSet"],
      ["sticker", constructors.TypeInputStickerSetItem, "InputStickerSetItem"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, constructors.TypeInputStickerSet, "InputStickerSet"],
      [this.sticker, constructors.TypeInputStickerSetItem, "InputStickerSetItem"],
    ];
  }

  constructor(params: { stickerset: constructors.TypeInputStickerSet; sticker: constructors.TypeInputStickerSetItem }) {
    super();
    this.stickerset = params.stickerset;
    this.sticker = params.sticker;
  }
}

export class StickersSetStickerSetThumb extends Function {
  stickerset: constructors.TypeInputStickerSet;
  thumb?: constructors.TypeInputDocument;
  thumbDocumentId?: bigint;

  protected get [id]() {
    return 0xa76a5392;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["stickerset", constructors.TypeInputStickerSet, "InputStickerSet"],
      ["thumb", constructors.TypeInputDocument, "flags.0?InputDocument"],
      ["thumbDocumentId", "bigint", "flags.1?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.stickerset, constructors.TypeInputStickerSet, "InputStickerSet"],
      [this.thumb ?? null, constructors.TypeInputDocument, "flags.0?InputDocument"],
      [this.thumbDocumentId ?? null, "bigint", "flags.1?long"],
    ];
  }

  constructor(params: { stickerset: constructors.TypeInputStickerSet; thumb?: constructors.TypeInputDocument; thumbDocumentId?: bigint }) {
    super();
    this.stickerset = params.stickerset;
    this.thumb = params.thumb;
    this.thumbDocumentId = params.thumbDocumentId;
  }
}

export class StickersCheckShortName extends Function {
  shortName: string;

  protected get [id]() {
    return 0x284b3639;
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

export class StickersSuggestShortName extends Function {
  title: string;

  protected get [id]() {
    return 0x4dafc503;
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

export class StickersChangeSticker extends Function {
  sticker: constructors.TypeInputDocument;
  emoji?: string;
  maskCoords?: constructors.TypeMaskCoords;
  keywords?: string;

  protected get [id]() {
    return 0xf5537ebc;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["sticker", constructors.TypeInputDocument, "InputDocument"],
      ["emoji", "string", "flags.0?string"],
      ["maskCoords", constructors.TypeMaskCoords, "flags.1?MaskCoords"],
      ["keywords", "string", "flags.2?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.sticker, constructors.TypeInputDocument, "InputDocument"],
      [this.emoji ?? null, "string", "flags.0?string"],
      [this.maskCoords ?? null, constructors.TypeMaskCoords, "flags.1?MaskCoords"],
      [this.keywords ?? null, "string", "flags.2?string"],
    ];
  }

  constructor(params: { sticker: constructors.TypeInputDocument; emoji?: string; maskCoords?: constructors.TypeMaskCoords; keywords?: string }) {
    super();
    this.sticker = params.sticker;
    this.emoji = params.emoji;
    this.maskCoords = params.maskCoords;
    this.keywords = params.keywords;
  }
}

export class StickersRenameStickerSet extends Function {
  stickerset: constructors.TypeInputStickerSet;
  title: string;

  protected get [id]() {
    return 0x124b1c00;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", constructors.TypeInputStickerSet, "InputStickerSet"],
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, constructors.TypeInputStickerSet, "InputStickerSet"],
      [this.title, "string", "string"],
    ];
  }

  constructor(params: { stickerset: constructors.TypeInputStickerSet; title: string }) {
    super();
    this.stickerset = params.stickerset;
    this.title = params.title;
  }
}

export class StickersDeleteStickerSet extends Function {
  stickerset: constructors.TypeInputStickerSet;

  protected get [id]() {
    return 0x87704394;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", constructors.TypeInputStickerSet, "InputStickerSet"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, constructors.TypeInputStickerSet, "InputStickerSet"],
    ];
  }

  constructor(params: { stickerset: constructors.TypeInputStickerSet }) {
    super();
    this.stickerset = params.stickerset;
  }
}

export class PhoneGetCallConfig extends Function {
  protected get [id]() {
    return 0x55451fa9;
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

export class PhoneRequestCall extends Function {
  video?: true;
  userId: constructors.TypeInputUser;
  randomId: number;
  gAHash: Uint8Array;
  protocol: constructors.TypePhoneCallProtocol;

  protected get [id]() {
    return 0x42ff96ed;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["video", "true", "flags.0?true"],
      ["userId", constructors.TypeInputUser, "InputUser"],
      ["randomId", "number", "int"],
      ["gAHash", Uint8Array, "bytes"],
      ["protocol", constructors.TypePhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.video ?? null, "true", "flags.0?true"],
      [this.userId, constructors.TypeInputUser, "InputUser"],
      [this.randomId, "number", "int"],
      [this.gAHash, Uint8Array, "bytes"],
      [this.protocol, constructors.TypePhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  constructor(params: { video?: true; userId: constructors.TypeInputUser; randomId: number; gAHash: Uint8Array; protocol: constructors.TypePhoneCallProtocol }) {
    super();
    this.video = params.video;
    this.userId = params.userId;
    this.randomId = params.randomId;
    this.gAHash = params.gAHash;
    this.protocol = params.protocol;
  }
}

export class PhoneAcceptCall extends Function {
  peer: constructors.TypeInputPhoneCall;
  gB: Uint8Array;
  protocol: constructors.TypePhoneCallProtocol;

  protected get [id]() {
    return 0x3bd2b4a0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPhoneCall, "InputPhoneCall"],
      ["gB", Uint8Array, "bytes"],
      ["protocol", constructors.TypePhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPhoneCall, "InputPhoneCall"],
      [this.gB, Uint8Array, "bytes"],
      [this.protocol, constructors.TypePhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPhoneCall; gB: Uint8Array; protocol: constructors.TypePhoneCallProtocol }) {
    super();
    this.peer = params.peer;
    this.gB = params.gB;
    this.protocol = params.protocol;
  }
}

export class PhoneConfirmCall extends Function {
  peer: constructors.TypeInputPhoneCall;
  gA: Uint8Array;
  keyFingerprint: bigint;
  protocol: constructors.TypePhoneCallProtocol;

  protected get [id]() {
    return 0x2efe1722;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPhoneCall, "InputPhoneCall"],
      ["gA", Uint8Array, "bytes"],
      ["keyFingerprint", "bigint", "long"],
      ["protocol", constructors.TypePhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPhoneCall, "InputPhoneCall"],
      [this.gA, Uint8Array, "bytes"],
      [this.keyFingerprint, "bigint", "long"],
      [this.protocol, constructors.TypePhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPhoneCall; gA: Uint8Array; keyFingerprint: bigint; protocol: constructors.TypePhoneCallProtocol }) {
    super();
    this.peer = params.peer;
    this.gA = params.gA;
    this.keyFingerprint = params.keyFingerprint;
    this.protocol = params.protocol;
  }
}

export class PhoneReceivedCall extends Function {
  peer: constructors.TypeInputPhoneCall;

  protected get [id]() {
    return 0x17d54f61;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPhoneCall, "InputPhoneCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPhoneCall, "InputPhoneCall"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPhoneCall }) {
    super();
    this.peer = params.peer;
  }
}

export class PhoneDiscardCall extends Function {
  video?: true;
  peer: constructors.TypeInputPhoneCall;
  duration: number;
  reason: constructors.TypePhoneCallDiscardReason;
  connectionId: bigint;

  protected get [id]() {
    return 0xb2cbc1c0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["video", "true", "flags.0?true"],
      ["peer", constructors.TypeInputPhoneCall, "InputPhoneCall"],
      ["duration", "number", "int"],
      ["reason", constructors.TypePhoneCallDiscardReason, "PhoneCallDiscardReason"],
      ["connectionId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.video ?? null, "true", "flags.0?true"],
      [this.peer, constructors.TypeInputPhoneCall, "InputPhoneCall"],
      [this.duration, "number", "int"],
      [this.reason, constructors.TypePhoneCallDiscardReason, "PhoneCallDiscardReason"],
      [this.connectionId, "bigint", "long"],
    ];
  }

  constructor(params: { video?: true; peer: constructors.TypeInputPhoneCall; duration: number; reason: constructors.TypePhoneCallDiscardReason; connectionId: bigint }) {
    super();
    this.video = params.video;
    this.peer = params.peer;
    this.duration = params.duration;
    this.reason = params.reason;
    this.connectionId = params.connectionId;
  }
}

export class PhoneSetCallRating extends Function {
  userInitiative?: true;
  peer: constructors.TypeInputPhoneCall;
  rating: number;
  comment: string;

  protected get [id]() {
    return 0x59ead627;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["userInitiative", "true", "flags.0?true"],
      ["peer", constructors.TypeInputPhoneCall, "InputPhoneCall"],
      ["rating", "number", "int"],
      ["comment", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.userInitiative ?? null, "true", "flags.0?true"],
      [this.peer, constructors.TypeInputPhoneCall, "InputPhoneCall"],
      [this.rating, "number", "int"],
      [this.comment, "string", "string"],
    ];
  }

  constructor(params: { userInitiative?: true; peer: constructors.TypeInputPhoneCall; rating: number; comment: string }) {
    super();
    this.userInitiative = params.userInitiative;
    this.peer = params.peer;
    this.rating = params.rating;
    this.comment = params.comment;
  }
}

export class PhoneSaveCallDebug extends Function {
  peer: constructors.TypeInputPhoneCall;
  debug: constructors.TypeDataJSON;

  protected get [id]() {
    return 0x277add7e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPhoneCall, "InputPhoneCall"],
      ["debug", constructors.TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPhoneCall, "InputPhoneCall"],
      [this.debug, constructors.TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPhoneCall; debug: constructors.TypeDataJSON }) {
    super();
    this.peer = params.peer;
    this.debug = params.debug;
  }
}

export class PhoneSendSignalingData extends Function {
  peer: constructors.TypeInputPhoneCall;
  data: Uint8Array;

  protected get [id]() {
    return 0xff7a9383;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPhoneCall, "InputPhoneCall"],
      ["data", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPhoneCall, "InputPhoneCall"],
      [this.data, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPhoneCall; data: Uint8Array }) {
    super();
    this.peer = params.peer;
    this.data = params.data;
  }
}

export class PhoneCreateGroupCall extends Function {
  rtmpStream?: true;
  peer: constructors.TypeInputPeer;
  randomId: number;
  title?: string;
  scheduleDate?: number;

  protected get [id]() {
    return 0x48cdc6d8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["rtmpStream", "true", "flags.2?true"],
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["randomId", "number", "int"],
      ["title", "string", "flags.0?string"],
      ["scheduleDate", "number", "flags.1?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.rtmpStream ?? null, "true", "flags.2?true"],
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.randomId, "number", "int"],
      [this.title ?? null, "string", "flags.0?string"],
      [this.scheduleDate ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(params: { rtmpStream?: true; peer: constructors.TypeInputPeer; randomId: number; title?: string; scheduleDate?: number }) {
    super();
    this.rtmpStream = params.rtmpStream;
    this.peer = params.peer;
    this.randomId = params.randomId;
    this.title = params.title;
    this.scheduleDate = params.scheduleDate;
  }
}

export class PhoneJoinGroupCall extends Function {
  muted?: true;
  videoStopped?: true;
  call: constructors.TypeInputGroupCall;
  joinAs: constructors.TypeInputPeer;
  inviteHash?: string;
  params: constructors.TypeDataJSON;

  protected get [id]() {
    return 0xb132ff7b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["muted", "true", "flags.0?true"],
      ["videoStopped", "true", "flags.2?true"],
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
      ["joinAs", constructors.TypeInputPeer, "InputPeer"],
      ["inviteHash", "string", "flags.1?string"],
      ["params", constructors.TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.muted ?? null, "true", "flags.0?true"],
      [this.videoStopped ?? null, "true", "flags.2?true"],
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
      [this.joinAs, constructors.TypeInputPeer, "InputPeer"],
      [this.inviteHash ?? null, "string", "flags.1?string"],
      [this.params, constructors.TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { muted?: true; videoStopped?: true; call: constructors.TypeInputGroupCall; joinAs: constructors.TypeInputPeer; inviteHash?: string; params: constructors.TypeDataJSON }) {
    super();
    this.muted = params.muted;
    this.videoStopped = params.videoStopped;
    this.call = params.call;
    this.joinAs = params.joinAs;
    this.inviteHash = params.inviteHash;
    this.params = params.params;
  }
}

export class PhoneLeaveGroupCall extends Function {
  call: constructors.TypeInputGroupCall;
  source: number;

  protected get [id]() {
    return 0x500377f9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
      ["source", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
      [this.source, "number", "int"],
    ];
  }

  constructor(params: { call: constructors.TypeInputGroupCall; source: number }) {
    super();
    this.call = params.call;
    this.source = params.source;
  }
}

export class PhoneInviteToGroupCall extends Function {
  call: constructors.TypeInputGroupCall;
  users: Array<constructors.TypeInputUser>;

  protected get [id]() {
    return 0x7b393160;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
      ["users", [constructors.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
      [this.users, [constructors.TypeInputUser], "Vector<InputUser>"],
    ];
  }

  constructor(params: { call: constructors.TypeInputGroupCall; users: Array<constructors.TypeInputUser> }) {
    super();
    this.call = params.call;
    this.users = params.users;
  }
}

export class PhoneDiscardGroupCall extends Function {
  call: constructors.TypeInputGroupCall;

  protected get [id]() {
    return 0x7a777135;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  constructor(params: { call: constructors.TypeInputGroupCall }) {
    super();
    this.call = params.call;
  }
}

export class PhoneToggleGroupCallSettings extends Function {
  resetInviteHash?: true;
  call: constructors.TypeInputGroupCall;
  joinMuted?: boolean;

  protected get [id]() {
    return 0x74bbb43d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["resetInviteHash", "true", "flags.1?true"],
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
      ["joinMuted", "boolean", "flags.0?Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.resetInviteHash ?? null, "true", "flags.1?true"],
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
      [this.joinMuted ?? null, "boolean", "flags.0?Bool"],
    ];
  }

  constructor(params: { resetInviteHash?: true; call: constructors.TypeInputGroupCall; joinMuted?: boolean }) {
    super();
    this.resetInviteHash = params.resetInviteHash;
    this.call = params.call;
    this.joinMuted = params.joinMuted;
  }
}

export class PhoneGetGroupCall extends Function {
  call: constructors.TypeInputGroupCall;
  limit: number;

  protected get [id]() {
    return 0x041845db;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { call: constructors.TypeInputGroupCall; limit: number }) {
    super();
    this.call = params.call;
    this.limit = params.limit;
  }
}

export class PhoneGetGroupParticipants extends Function {
  call: constructors.TypeInputGroupCall;
  ids: Array<constructors.TypeInputPeer>;
  sources: Array<number>;
  offset: string;
  limit: number;

  protected get [id]() {
    return 0xc558d8ab;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
      ["ids", [constructors.TypeInputPeer], "Vector<InputPeer>"],
      ["sources", ["number"], "Vector<int>"],
      ["offset", "string", "string"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
      [this.ids, [constructors.TypeInputPeer], "Vector<InputPeer>"],
      [this.sources, ["number"], "Vector<int>"],
      [this.offset, "string", "string"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { call: constructors.TypeInputGroupCall; ids: Array<constructors.TypeInputPeer>; sources: Array<number>; offset: string; limit: number }) {
    super();
    this.call = params.call;
    this.ids = params.ids;
    this.sources = params.sources;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}

export class PhoneCheckGroupCall extends Function {
  call: constructors.TypeInputGroupCall;
  sources: Array<number>;

  protected get [id]() {
    return 0xb59cf977;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
      ["sources", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
      [this.sources, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { call: constructors.TypeInputGroupCall; sources: Array<number> }) {
    super();
    this.call = params.call;
    this.sources = params.sources;
  }
}

export class PhoneToggleGroupCallRecord extends Function {
  start?: true;
  video?: true;
  call: constructors.TypeInputGroupCall;
  title?: string;
  videoPortrait?: boolean;

  protected get [id]() {
    return 0xf128c708;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["start", "true", "flags.0?true"],
      ["video", "true", "flags.2?true"],
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
      ["title", "string", "flags.1?string"],
      ["videoPortrait", "boolean", "flags.2?Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.start ?? null, "true", "flags.0?true"],
      [this.video ?? null, "true", "flags.2?true"],
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
      [this.title ?? null, "string", "flags.1?string"],
      [this.videoPortrait ?? null, "boolean", "flags.2?Bool"],
    ];
  }

  constructor(params: { start?: true; video?: true; call: constructors.TypeInputGroupCall; title?: string; videoPortrait?: boolean }) {
    super();
    this.start = params.start;
    this.video = params.video;
    this.call = params.call;
    this.title = params.title;
    this.videoPortrait = params.videoPortrait;
  }
}

export class PhoneEditGroupCallParticipant extends Function {
  call: constructors.TypeInputGroupCall;
  participant: constructors.TypeInputPeer;
  muted?: boolean;
  volume?: number;
  raiseHand?: boolean;
  videoStopped?: boolean;
  videoPaused?: boolean;
  presentationPaused?: boolean;

  protected get [id]() {
    return 0xa5273abf;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
      ["participant", constructors.TypeInputPeer, "InputPeer"],
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
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
      [this.participant, constructors.TypeInputPeer, "InputPeer"],
      [this.muted ?? null, "boolean", "flags.0?Bool"],
      [this.volume ?? null, "number", "flags.1?int"],
      [this.raiseHand ?? null, "boolean", "flags.2?Bool"],
      [this.videoStopped ?? null, "boolean", "flags.3?Bool"],
      [this.videoPaused ?? null, "boolean", "flags.4?Bool"],
      [this.presentationPaused ?? null, "boolean", "flags.5?Bool"],
    ];
  }

  constructor(params: { call: constructors.TypeInputGroupCall; participant: constructors.TypeInputPeer; muted?: boolean; volume?: number; raiseHand?: boolean; videoStopped?: boolean; videoPaused?: boolean; presentationPaused?: boolean }) {
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

export class PhoneEditGroupCallTitle extends Function {
  call: constructors.TypeInputGroupCall;
  title: string;

  protected get [id]() {
    return 0x1ca6ac0a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
      [this.title, "string", "string"],
    ];
  }

  constructor(params: { call: constructors.TypeInputGroupCall; title: string }) {
    super();
    this.call = params.call;
    this.title = params.title;
  }
}

export class PhoneGetGroupCallJoinAs extends Function {
  peer: constructors.TypeInputPeer;

  protected get [id]() {
    return 0xef7c213a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class PhoneExportGroupCallInvite extends Function {
  canSelfUnmute?: true;
  call: constructors.TypeInputGroupCall;

  protected get [id]() {
    return 0xe6aa647f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["canSelfUnmute", "true", "flags.0?true"],
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.canSelfUnmute ?? null, "true", "flags.0?true"],
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  constructor(params: { canSelfUnmute?: true; call: constructors.TypeInputGroupCall }) {
    super();
    this.canSelfUnmute = params.canSelfUnmute;
    this.call = params.call;
  }
}

export class PhoneToggleGroupCallStartSubscription extends Function {
  call: constructors.TypeInputGroupCall;
  subscribed: boolean;

  protected get [id]() {
    return 0x219c34e6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
      ["subscribed", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
      [this.subscribed, "boolean", "Bool"],
    ];
  }

  constructor(params: { call: constructors.TypeInputGroupCall; subscribed: boolean }) {
    super();
    this.call = params.call;
    this.subscribed = params.subscribed;
  }
}

export class PhoneStartScheduledGroupCall extends Function {
  call: constructors.TypeInputGroupCall;

  protected get [id]() {
    return 0x5680e342;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  constructor(params: { call: constructors.TypeInputGroupCall }) {
    super();
    this.call = params.call;
  }
}

export class PhoneSaveDefaultGroupCallJoinAs extends Function {
  peer: constructors.TypeInputPeer;
  joinAs: constructors.TypeInputPeer;

  protected get [id]() {
    return 0x575e1f8c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["joinAs", constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.joinAs, constructors.TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; joinAs: constructors.TypeInputPeer }) {
    super();
    this.peer = params.peer;
    this.joinAs = params.joinAs;
  }
}

export class PhoneJoinGroupCallPresentation extends Function {
  call: constructors.TypeInputGroupCall;
  params: constructors.TypeDataJSON;

  protected get [id]() {
    return 0xcbea6bc4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
      ["params", constructors.TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
      [this.params, constructors.TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { call: constructors.TypeInputGroupCall; params: constructors.TypeDataJSON }) {
    super();
    this.call = params.call;
    this.params = params.params;
  }
}

export class PhoneLeaveGroupCallPresentation extends Function {
  call: constructors.TypeInputGroupCall;

  protected get [id]() {
    return 0x1c50d144;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  constructor(params: { call: constructors.TypeInputGroupCall }) {
    super();
    this.call = params.call;
  }
}

export class PhoneGetGroupCallStreamChannels extends Function {
  call: constructors.TypeInputGroupCall;

  protected get [id]() {
    return 0x1ab21940;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", constructors.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, constructors.TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  constructor(params: { call: constructors.TypeInputGroupCall }) {
    super();
    this.call = params.call;
  }
}

export class PhoneGetGroupCallStreamRtmpUrl extends Function {
  peer: constructors.TypeInputPeer;
  revoke: boolean;

  protected get [id]() {
    return 0xdeb3abbf;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPeer, "InputPeer"],
      ["revoke", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPeer, "InputPeer"],
      [this.revoke, "boolean", "Bool"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPeer; revoke: boolean }) {
    super();
    this.peer = params.peer;
    this.revoke = params.revoke;
  }
}

export class PhoneSaveCallLog extends Function {
  peer: constructors.TypeInputPhoneCall;
  file: constructors.TypeInputFile;

  protected get [id]() {
    return 0x41248786;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", constructors.TypeInputPhoneCall, "InputPhoneCall"],
      ["file", constructors.TypeInputFile, "InputFile"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, constructors.TypeInputPhoneCall, "InputPhoneCall"],
      [this.file, constructors.TypeInputFile, "InputFile"],
    ];
  }

  constructor(params: { peer: constructors.TypeInputPhoneCall; file: constructors.TypeInputFile }) {
    super();
    this.peer = params.peer;
    this.file = params.file;
  }
}

export class LangpackGetLangPack extends Function {
  langPack: string;
  langCode: string;

  protected get [id]() {
    return 0xf2f2330a;
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

export class LangpackGetStrings extends Function {
  langPack: string;
  langCode: string;
  keys: Array<string>;

  protected get [id]() {
    return 0xefea3803;
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

export class LangpackGetDifference extends Function {
  langPack: string;
  langCode: string;
  fromVersion: number;

  protected get [id]() {
    return 0xcd984aa5;
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

export class LangpackGetLanguages extends Function {
  langPack: string;

  protected get [id]() {
    return 0x42c6978f;
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

export class LangpackGetLanguage extends Function {
  langPack: string;
  langCode: string;

  protected get [id]() {
    return 0x6a596502;
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

export class FoldersEditPeerFolders extends Function {
  folderPeers: Array<constructors.TypeInputFolderPeer>;

  protected get [id]() {
    return 0x6847d0ab;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["folderPeers", [constructors.TypeInputFolderPeer], "Vector<InputFolderPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.folderPeers, [constructors.TypeInputFolderPeer], "Vector<InputFolderPeer>"],
    ];
  }

  constructor(params: { folderPeers: Array<constructors.TypeInputFolderPeer> }) {
    super();
    this.folderPeers = params.folderPeers;
  }
}

export class StatsGetBroadcastStats extends Function {
  dark?: true;
  channel: constructors.TypeInputChannel;

  protected get [id]() {
    return 0xab42441a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["dark", "true", "flags.0?true"],
      ["channel", constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.dark ?? null, "true", "flags.0?true"],
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { dark?: true; channel: constructors.TypeInputChannel }) {
    super();
    this.dark = params.dark;
    this.channel = params.channel;
  }
}

export class StatsLoadAsyncGraph extends Function {
  token: string;
  x?: bigint;

  protected get [id]() {
    return 0x621d5fa0;
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

export class StatsGetMegagroupStats extends Function {
  dark?: true;
  channel: constructors.TypeInputChannel;

  protected get [id]() {
    return 0xdcdf8607;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["dark", "true", "flags.0?true"],
      ["channel", constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.dark ?? null, "true", "flags.0?true"],
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
    ];
  }

  constructor(params: { dark?: true; channel: constructors.TypeInputChannel }) {
    super();
    this.dark = params.dark;
    this.channel = params.channel;
  }
}

export class StatsGetMessagePublicForwards extends Function {
  channel: constructors.TypeInputChannel;
  msgId: number;
  offsetRate: number;
  offsetPeer: constructors.TypeInputPeer;
  offsetId: number;
  limit: number;

  protected get [id]() {
    return 0x5630281b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["msgId", "number", "int"],
      ["offsetRate", "number", "int"],
      ["offsetPeer", constructors.TypeInputPeer, "InputPeer"],
      ["offsetId", "number", "int"],
      ["limit", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.msgId, "number", "int"],
      [this.offsetRate, "number", "int"],
      [this.offsetPeer, constructors.TypeInputPeer, "InputPeer"],
      [this.offsetId, "number", "int"],
      [this.limit, "number", "int"],
    ];
  }

  constructor(params: { channel: constructors.TypeInputChannel; msgId: number; offsetRate: number; offsetPeer: constructors.TypeInputPeer; offsetId: number; limit: number }) {
    super();
    this.channel = params.channel;
    this.msgId = params.msgId;
    this.offsetRate = params.offsetRate;
    this.offsetPeer = params.offsetPeer;
    this.offsetId = params.offsetId;
    this.limit = params.limit;
  }
}

export class StatsGetMessageStats extends Function {
  dark?: true;
  channel: constructors.TypeInputChannel;
  msgId: number;

  protected get [id]() {
    return 0xb6e0a3f5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["dark", "true", "flags.0?true"],
      ["channel", constructors.TypeInputChannel, "InputChannel"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.dark ?? null, "true", "flags.0?true"],
      [this.channel, constructors.TypeInputChannel, "InputChannel"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { dark?: true; channel: constructors.TypeInputChannel; msgId: number }) {
    super();
    this.dark = params.dark;
    this.channel = params.channel;
    this.msgId = params.msgId;
  }
}
