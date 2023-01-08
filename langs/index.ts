import kor from "./kor";
import eng from "./eng";

export type LangType = "kor" | "eng";

export interface ILanguage {
  CONTEXT_ERROR: string;
  CONFIRM_TEXT: string;
  CANCEL_TEXT: string;
}

export default function getLanguagePack(lang: LangType = "kor"): ILanguage {
  switch (lang) {
    case "kor":
      return kor;
    case "eng":
      return eng;
  }
}
