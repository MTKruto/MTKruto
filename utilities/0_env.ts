const prefix = "MTKRUTO__";

// deno-lint-ignore no-explicit-any
const global_ = globalThis as any;
export function getString(name: string): string | null {
  const globalName = prefix + name;
  if (globalName in global_) {
    const value = global_[globalName];
    if (value) {
      const string = value + "";
      if (string) {
        return string;
      }
    }
    return null;
  } else if ("Deno" in global_) {
    return global_.Deno.env.get(name) ?? null;
  } else if ("process" in global_) {
    return global_.process.env[name] ?? null;
  } else {
    return null;
  }
}

export function getNumber(name: string) {
  const value = getString(name);
  if (value == null) {
    return null;
  }
  const number = Number(value);
  if (isNaN(number)) {
    return null;
  } else {
    return number;
  }
}
