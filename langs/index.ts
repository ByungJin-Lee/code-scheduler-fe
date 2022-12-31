import kor from "./kor";
import eng from "./eng";

export type LangType = "kor" | "eng";

export interface ILanguage {
  CONTEXT_ERROR: string;
}
let current: LangType = "kor";
let pack: ILanguage | null = null;

export default function getLanguagePack(lang: LangType = "kor"): ILanguage {
  const updated = current !== lang;

  if (updated) current = lang;

  if (updated || !pack) {
    switch (current) {
      case "kor":
        pack = kor;
        break;
      case "eng":
        pack = eng;
        break;
    }
  }
  return pack;
}
