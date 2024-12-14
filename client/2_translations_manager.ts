import { C } from "./1_types.ts";
import { Api, is, isOneOf } from "../2_tl.ts";
import { unreachable } from "../0_deps.ts";
import { Queue } from "../1_utilities.ts";
import { constructTranslation, Translation, Update } from "../3_types.ts";

const translationsManagerUpdates = [
  "updateLangPackTooLong",
  "updateLangPack",
] as const;

type TranslationsManagerUpdate = Api.Types[(typeof translationsManagerUpdates)[number]];

export class TranslationsManager {
  #c: C;

  constructor(c: C) {
    this.#c = c;
  }

  static canHandleUpdate(update: Api.Update): update is TranslationsManagerUpdate {
    return isOneOf(translationsManagerUpdates, update);
  }

  async getTranslations(platform: string, language: string) {
    return await this.#getTranslationsInner(platform, language);
  }

  async #getTranslationsInner(platform: string, language: string, assert = false): Promise<Translation[]> {
    const maybeTranslations = await this.#c.messageStorage.getTranslations(platform, language);
    if (maybeTranslations != null) {
      return maybeTranslations[1];
    } else if (assert) {
      unreachable();
    } else {
      await this.#updateTranslations(platform, language);
      return await this.#getTranslationsInner(platform, language, true);
    }
  }

  #updateTranslationsQueue = new Queue("updateTranslations");
  async #updateTranslations(platform: string, language: string) {
    await new Promise<void>((resolve, reject) => {
      this.#updateTranslationsQueue.add(async () => {
        try {
          const maybeTranslations = await this.#c.messageStorage.getTranslations(platform, language);
          if (maybeTranslations != null) {
            const difference = await this.#c.invoke({ _: "langpack.getDifference", lang_pack: platform, lang_code: language, from_version: maybeTranslations[0] });
            const newTranslations = this.#applyLangPackDifference(maybeTranslations[1], difference.strings);
            await this.#c.messageStorage.setTranslations(platform, language, difference.version, newTranslations);
          } else {
            const pack = await this.#c.invoke({ _: "langpack.getLangPack", lang_pack: platform, lang_code: language });
            const version = pack.version;
            const translations = pack.strings.map(constructTranslation);
            await this.#c.messageStorage.setTranslations(platform, language, version, translations);
          }
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    });
  }

  async #applyLangPackDifferenceAndSave(platform: string, language: string, version: number, fromVersion: number, strings: Api.LangPackString[]) {
    const result = await new Promise<Translation[] | null | "mustUpdate">((resolve, reject) => {
      this.#updateTranslationsQueue.add(async () => {
        try {
          const maybeTranslations = await this.#c.messageStorage.getTranslations(platform, language);
          let newTranslations: Translation[] | null = null;
          if (maybeTranslations) {
            if (fromVersion != maybeTranslations[0]) {
              resolve("mustUpdate");
              return;
            }
            newTranslations = this.#applyLangPackDifference(maybeTranslations[1], strings);
            await this.#c.messageStorage.setTranslations(platform, language, version, newTranslations);
          }
          resolve(newTranslations);
        } catch (err) {
          reject(err);
        }
      });
    });
    if (result == "mustUpdate") {
      await this.#updateTranslations(platform, language);
      return await this.#getTranslationsInner(platform, language, true);
    } else {
      return result;
    }
  }

  #applyLangPackDifference(translations: Translation[], strings: Api.LangPackString[]) {
    for (const string of strings) {
      if (is("langPackStringDeleted", string)) {
        translations = translations.filter((v) => v.key != string.key);
      } else {
        const newTranslation = constructTranslation(string);
        const currentTranslation = translations.find((v) => v.key == string.key);
        if (currentTranslation) {
          Object.assign(currentTranslation, newTranslation);
        } else {
          translations.push(newTranslation);
        }
      }
    }
    return translations;
  }

  async handleUpdate(update: TranslationsManagerUpdate): Promise<Update | null> {
    if (!this.#c.langPack) {
      return null;
    }
    if (is("updateLangPackTooLong", update)) {
      await this.#updateTranslations(this.#c.langPack, update.lang_code);
      const translations = await this.#getTranslationsInner(this.#c.langPack, update.lang_code, true);
      return { platform: this.#c.langPack, language: update.lang_code, translations };
    } else if (is("updateLangPack", update)) {
      if (!this.#c.langCode) {
        return null;
      }
      const translations = await this.#applyLangPackDifferenceAndSave(this.#c.langPack, this.#c.langCode, update.difference.version, update.difference.from_version, update.difference.strings);
      if (!translations) {
        return null;
      } else {
        return { platform: this.#c.langPack, language: this.#c.langCode, translations };
      }
    }
    return null;
  }
}
