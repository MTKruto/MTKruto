import { assert, assertEquals, ige256Encrypt } from "../deps.ts";
import { bigIntFromBuffer, modExp } from "./0_bigint.ts";
import { bufferFromBigInt, concat, sha256 } from "./0_buffer.ts";

export async function rsaPad(
  data: Uint8Array,
  [serverKey, exponent]: [bigint, bigint],
) {
  assert(data.length <= 144);

  let keyAesEncryptedInt: bigint;
  let tries = 0;

  do {
    if (++tries == 10) {
      throw new Error("Out of tries");
    }

    const dataWithPadding = concat(data, new Uint8Array(192 - data.length));
    const dataPadReversed = new Uint8Array(dataWithPadding).reverse();

    const tempKey = crypto.getRandomValues(new Uint8Array(32));

    // deno-fmt-ignore
    const dataWithHash = concat(dataPadReversed, await sha256(concat(tempKey, dataWithPadding)));
    // deno-fmt-ignore
    const aesEncrypted = ige256Encrypt(dataWithHash, tempKey, new Uint8Array(32));

    const aesEncryptedSha256 = await sha256(aesEncrypted);
    const tempKeyXor = tempKey.map((v, i) => v ^ aesEncryptedSha256[i]);

    const keyAesEncrypted = concat(tempKeyXor, aesEncrypted);
    assertEquals(keyAesEncrypted.length, 256);

    keyAesEncryptedInt = bigIntFromBuffer(keyAesEncrypted, false, false);
  } while (keyAesEncryptedInt >= serverKey);

  const encryptedDataInt = modExp(keyAesEncryptedInt, exponent, serverKey);
  const encryptedData = bufferFromBigInt(encryptedDataInt, 256, false, false);
  assertEquals(encryptedData.length, 256);

  return encryptedData;
}
