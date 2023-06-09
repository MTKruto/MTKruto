/** Describes a [Web App](https://core.telegram.org/bots/webapps). */
export interface WebAppInfo {
  /** An HTTPS URL of a Web App to be opened with additional data as specified in [Initializing Web Apps](https://core.telegram.org/bots/webapps#initializing-web-apps) */
  url: string;
}

export function constructWebAppInfo(url: string): WebAppInfo {
  return { url };
}
