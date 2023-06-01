export interface WebAppInfo {
  url: string;
}

export function constructWebAppInfo(url: string): WebAppInfo {
  return { url };
}
