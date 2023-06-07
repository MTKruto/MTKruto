export interface Photo {
  fileId: string;
  fileUniqueId: string;
  width: number;
  height: number;
  fileSize: number;
  thumbnails: Omit<Omit<Photo, "thumbnails">, "fileUniqueId">[];
}
