import { Api, is } from "../2_tl.ts";

/** A translation. */
export interface Translation {
  key: string;
  value: string;
  one?: string;
  zero?: string;
  two?: string;
  few?: string;
  many?: string;
}

export function constructTranslation(langPackString: Api.LangPackString): Translation {
  if (is("langPackString", langPackString)) {
    return {
      key: langPackString.key,
      value: langPackString.value,
    };
  } else if (is("langPackStringPluralized", langPackString)) {
    return {
      key: langPackString.key,
      value: langPackString.other_value,
      one: langPackString.one_value,
      zero: langPackString.zero_value,
      two: langPackString.two_value,
      few: langPackString.few_value,
      many: langPackString.many_value,
    };
  } else {
    return {
      key: langPackString.key,
      value: "",
    };
  }
}
