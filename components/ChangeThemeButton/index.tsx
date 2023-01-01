import { DetailedHTMLProps, HTMLAttributes } from "react";
import { useThemeState } from "../../contexts/ThemeContext";
import MoonIcon from "../Icons/MoonIcon";
import SunIcon from "../Icons/SunIcon";

type ChangeThemeButtonProps = {} & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const ChangeThemeButton = ({ ...injectedProps }: ChangeThemeButtonProps) => {
  const { theme, toggleTheme } = useThemeState();

  return (
    <div {...injectedProps}>
      <button onClick={toggleTheme}>
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};

ChangeThemeButton.defaultProps = {};

export default ChangeThemeButton;
