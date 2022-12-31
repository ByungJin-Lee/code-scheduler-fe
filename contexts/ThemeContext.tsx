import { createContext, useContext } from "react";
import getLanguagePack from "../langs";

export type ContextState = {
  theme: "dark" | "light";
  toggleTheme(): void;
};

export const defaultContextState: ContextState = {
  theme: "light",
  toggleTheme() {},
};

const ThemeContext = createContext<ContextState>(defaultContextState);

function useThemeState(): ContextState {
  const state = useContext(ThemeContext);
  if (!state) throw Error(getLanguagePack().CONTEXT_ERROR);
  return state;
}

function useThemeValue(): ContextState["theme"] {
  return useThemeState().theme;
}

function useThemeFn(): ContextState["toggleTheme"] {
  return useThemeState().toggleTheme;
}

export { ThemeContext, useThemeState, useThemeFn, useThemeValue };
