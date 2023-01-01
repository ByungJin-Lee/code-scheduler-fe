import { useCallback, useState } from "react";
import useWindowEvent from "../../hooks/useWindowEvent";

type HeaderWrapProps = {
  responsiveScroll: boolean;
  children: React.ReactNode;
};

const HeaderWrap = ({ responsiveScroll, children }: HeaderWrapProps) => {
  const [open, setOpen] = useState(true);

  useWindowEvent(
    "wheel",
    useCallback(
      (e) => {
        if (responsiveScroll && e) setOpen((e as WheelEvent).deltaY < 0);
      },
      [responsiveScroll]
    )
  );

  return (
    <header
      className={`flex sticky backdrop-blur py-2 justify-around will-change-transform transition-transform duration-500 border-solid border-b border-slate-900/10 dark:border-slate-300/10 ${
        !open ? "-translate-y-full" : ""
      }`}
    >
      {children}
    </header>
  );
};

HeaderWrap.defaultProps = {
  responsiveScroll: false,
};

export default HeaderWrap;
