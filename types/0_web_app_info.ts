/** The necessary information to launch a web app. */
export interface WebAppInfo {
  /** An HTTPS URL of the Web App to be opened with additional data. */
  url: string;
}

export function constructWebAppInfo(url: string): WebAppInfo {
  return { url };
}
