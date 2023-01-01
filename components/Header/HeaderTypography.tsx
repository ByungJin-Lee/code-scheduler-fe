import { DetailedHTMLProps, HTMLAttributes } from "react";

type HeaderTypographyProps = {
  logo: boolean;
  children: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const HeaderTypography = ({
  logo,
  children,
  className,
  ...injectedProps
}: HeaderTypographyProps) => {
  return (
    <div
      {...injectedProps}
      className={`${className} inline-block ${logo ? "px-1" : ""}`}
    >
      {children}
    </div>
  );
};

HeaderTypography.defaultProps = {
  logo: false,
  children: "",
};

export default HeaderTypography;
