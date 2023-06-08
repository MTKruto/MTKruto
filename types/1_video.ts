import { Thumbnail } from "./0_thumbnail.ts";

export interface Video {
  fileId: string;
  fileUniqueId: string;
  width: number;
  height: number;
  duration: number;
  thumbnail: Thumbnail;
  fileName: string;
  mimeType: string;
  fileSize: number;
}
