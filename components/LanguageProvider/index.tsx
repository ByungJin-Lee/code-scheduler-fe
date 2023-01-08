import React, { useEffect, useMemo, useState } from "react";
import {
  defaultContextState,
  LanguageContext,
} from "../../contexts/LanguageContext";
import getLanguagePack, { LangType } from "../../langs";

type LanguageProviderProps = { children: React.ReactNode };

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [lang, _setLanguage] = useState(defaultContextState.lang);

  const setLanguage = (code: LangType) => {
    window.localStorage.setItem("lang", code);
    _setLanguage({
      code,
      pack: getLanguagePack(code),
    });
  };

  useEffect(() => {
    const storedCode = window.localStorage.getItem("lang");
    if (storedCode) setLanguage(storedCode as LangType);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.defaultProps = {};

export default LanguageProvider;
