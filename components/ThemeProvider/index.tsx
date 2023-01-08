import { useCallback, useEffect, useState } from "react";
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
      const updated = prev === "light" ? "dark" : "light";

      window.localStorage.setItem("bgMode", updated);

      return updated;
    });
  }, [setTheme]);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("bgMode");
    if (storedTheme && (storedTheme === "dark" || storedTheme === "light")) {
      setTheme(storedTheme);
    }
  }, []);

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
