import { Thumbnail } from "./0_thumbnail.ts";

export interface Document {
  fileId: string;
  fileUniqueId: string;
  thumbnails: Thumbnail[];
  fileName: string;
  mimeType: string;
  fileSize: number;
}
