import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { ILanguage, LangType } from "../langs";
import kor from "../langs/kor";

export type ContextState = {
  lang: {
    code: LangType;
    pack: ILanguage;
  };
  setLanguage(langType: LangType): void;
};

export const defaultContextState: ContextState = {
  lang: {
    code: "kor",
    pack: kor,
  },
  setLanguage() {},
};

const LanguageContext = createContext<ContextState>(defaultContextState);

function useLanguageState(): ContextState {
  const state = useContext(LanguageContext);
  if (!state) throw Error("Context Error!");
  return state;
}

function useLanguageValue(): ContextState["lang"] {
  return useLanguageState().lang;
}

function useLanguageFn(): ContextState["setLanguage"] {
  return useLanguageState().setLanguage;
}

function useLanguagePack(): ILanguage {
  return useLanguageState().lang.pack;
}

export {
  LanguageContext,
  useLanguageState,
  useLanguageFn,
  useLanguageValue,
  useLanguagePack,
};
