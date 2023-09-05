/** Describes a Web App */
export interface WebAppInfo {
  /** An HTTPS URL of a Web App to be opened with additional data */
  url: string;
}

export function constructWebAppInfo(url: string): WebAppInfo {
  return { url };
}
