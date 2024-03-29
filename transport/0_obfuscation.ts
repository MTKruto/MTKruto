import { bufferFromBigInt, concat, CTR } from "../1_utilities.ts";
import { Connection } from "../2_connection.ts";

export async function getObfuscationParameters(protocol: number, connection: Connection) {
  let init: Uint8Array;

  while (true) {
    init = concat(crypto.getRandomValues(new Uint8Array(56)), bufferFromBigInt(protocol, 4, false), crypto.getRandomValues(new Uint8Array(4)));

    if (init[0] == 0xEF) {
      continue;
    }

    const dataView = new DataView(init.buffer, init.byteOffset, init.byteLength);
    const firstInt = dataView.getInt32(0);
    if ([0x44414548, 0x54534F50, 0x20544547, 0x4954504F, 0x02010316, 0xDDDDDDDD, 0xEEEEEEEE].includes(firstInt)) {
      continue;
    }

    const secondInt = dataView.getInt32(4);
    if (secondInt == 0x00000000) {
      continue;
    }

    break;
  }

  const encryptKey = init.slice(8, 8 + 32);
  const encryptIv = init.slice(40, 40 + 16);
  const encryptionCTR = new CTR(encryptKey, encryptIv);

  const encryptedInit = new Uint8Array(init);
  encryptionCTR.call(encryptedInit);

  const initRev = new Uint8Array(init).reverse();
  const decryptKey = initRev.slice(8, 8 + 32);
  const decryptIv = initRev.slice(40, 40 + 16);
  const decryptionCTR = new CTR(decryptKey, decryptIv);

  await connection.write(concat(init.subarray(0, 56), encryptedInit.subarray(56, 56 + 8)));

  return { encryptionCTR, decryptionCTR };
}
