import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderWrap from "./HeaderWrap";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  return (
    <HeaderWrap responsiveScroll>
      <HeaderLogo />
      <HeaderNav />
    </HeaderWrap>
  );
};

Header.defaultProps = {};

export default Header;
