import { ReactNode } from "react";
import { useThemeValue } from "../../contexts/ThemeContext";

type ThemeCSSWrapProps = {
  children: ReactNode;
};

const ThemeCSSWrap = ({ children }: ThemeCSSWrapProps) => {
  const theme = useThemeValue();

  return <div className={`${theme === "dark" ? "dark" : ""}`}>{children}</div>;
};

export default ThemeCSSWrap;
