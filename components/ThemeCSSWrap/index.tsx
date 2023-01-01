import { ReactNode, useEffect } from "react";
import { useThemeValue } from "../../contexts/ThemeContext";

type ThemeCSSWrapProps = {
  children: ReactNode;
};

const ThemeCSSWrap = ({ children }: ThemeCSSWrapProps) => {
  const theme = useThemeValue();

  useEffect(() => {
    if (theme === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [theme]);

  // return <div className={`${theme === "dark" ? "dark" : ""}`}>{children}</div>;
  return <>{children}</>;
};

export default ThemeCSSWrap;
