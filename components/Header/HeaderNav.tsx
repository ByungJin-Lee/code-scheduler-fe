import Link from "next/link";
import ChangeThemeButton from "../ChangeThemeButton";

type HeaderNavProps = {};

const HeaderNav = ({}: HeaderNavProps) => {
  return (
    <div className="flex gap-4">
      <Link href="/login">Login</Link>
      <ChangeThemeButton />
    </div>
  );
};

HeaderNav.defaultProps = {};

export default HeaderNav;
