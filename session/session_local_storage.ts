import { Session } from "./session.ts";

export class SessionLocalStorage extends Session implements Session {
  constructor(private readonly key: string) {
    if (typeof localStorage == "undefined") {
      throw new Error("Unavailable in current environment");
    }
    super();
  }

  load() {
    const { dc = null, authKey = null } = JSON.parse(localStorage.getItem(this.key) ?? "{}");
    this.dc = dc;
    if (authKey != null) {
      this.authKey = new Uint8Array(authKey.split(/([0-9a-f]{2})/).filter((v: string) => v).map((v: string) => parseInt(v, 16)));
    }
  }

  save() {
    const authKey = this.authKey == null ? undefined : Array.from(this.authKey).map((v) => v.toString(16)).map((v) => v.padStart(2, "0")).join("");
    localStorage.setItem(this.key, JSON.stringify({ dc: this.dc, authKey }));
  }
}
