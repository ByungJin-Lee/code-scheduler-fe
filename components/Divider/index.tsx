type DividerProps = {
  className: string;
};

const Divider = ({ className }: DividerProps) => {
  return <hr className={className} />;
};

Divider.defaultProps = {
  className: "",
};

export default Divider;
