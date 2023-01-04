import React from "react";

type SelectItemProps = {
  value: any;
  item: boolean;
  onSelected(display: any, value: any): void;
  children: React.ReactNode;
};

const SelectItem = ({ children, value, onSelected, item }: SelectItemProps) => {
  const className = "";

  return React.createElement(
    !item ? "span" : "li",
    {
      className,
      onClick: () => onSelected(children, value),
    },
    children
  );

  // <span onClick={() => onSelected(children, value)}>{children}</span>
};

SelectItem.defaultProps = {
  item: false,
  onSelected: () => {},
};

export default SelectItem;
