import Link from "next/link";
import ChangeThemeButton from "../ChangeThemeButton";
import LanguageSelect from "../LanguageSelect";

type HeaderNavProps = {};

const HeaderNav = ({}: HeaderNavProps) => {
  return (
    <div className="flex gap-4 items-center">
      <LanguageSelect />
      <Link href="/login">Login</Link>
      <ChangeThemeButton />
    </div>
  );
};

HeaderNav.defaultProps = {};

export default HeaderNav;
