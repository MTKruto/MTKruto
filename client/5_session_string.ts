import { base64DecodeUrlSafe, base64EncodeUrlSafe, rleDecode, rleEncode } from "../1_utilities.ts";
import { TLReader, TLWriter } from "../2_tl.ts";
import { Client } from "./4_client.ts";

export async function exportSessionString(client: Client) {
  const [dc, authKey] = await Promise.all([client.storage.getDc(), client.storage.getAuthKey()]);
  if (dc == null || authKey == null) {
    throw new Error("Client not authorized");
  }
  const writer = new TLWriter();
  writer.writeString(dc);
  writer.writeBytes(authKey);
  const data = rleEncode(writer.buffer);
  return base64EncodeUrlSafe(data);
}

export async function importSessionString(client: Client, string: string) {
  const data = rleDecode(base64DecodeUrlSafe(string));
  const reader = new TLReader(data);
  const dc = reader.readString();
  const authKey = reader.readBytes();
  await client.storage.initialize();
  await client.storage.setDc(dc);
  await client.storage.setAuthKey(authKey);
}
