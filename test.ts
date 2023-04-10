import { AccountRegisterDevice } from "./tl/3_functions.ts";

const serialized = new AccountRegisterDevice({
  appSandbox: false,
  otherUids: [],
  secret: new Uint8Array(32),
  token: "a",
  tokenType: 29343,
}).serialize();

console.log(serialized);
