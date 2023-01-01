import { useCallback, useState } from "react";
import {
  ContextState,
  defaultContextState,
  ThemeContext,
} from "../../contexts/ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ContextState["theme"]>(
    defaultContextState.theme
  );

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      return "light";
    });
  }, [setTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
