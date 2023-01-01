import Link from "next/link";
import HeaderTypography from "./HeaderTypography";

type HeaderLogoProps = {};

const HeaderLogo = ({}: HeaderLogoProps) => {
  return (
    <Link
      id="logo"
      href="/"
      className="block border-solid border-[1px] border-slate-400"
    >
      <HeaderTypography logo className="bg-slate-400">
        Code
      </HeaderTypography>
      <HeaderTypography logo>Scheduler</HeaderTypography>
    </Link>
  );
};

HeaderLogo.defaultProps = {};

export default HeaderLogo;
