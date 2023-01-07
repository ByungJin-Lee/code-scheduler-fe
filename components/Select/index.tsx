import { useRef, useState } from "react";
import getElementPosition from "../../utils/position";
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import SelectItem from "./SelectItem";

type SelectOption = {
  value: any;
  display: string;
};

type SelectProps = {
  options: SelectOption[];
  value: any;
  setValue: (value: any) => void;
  className: string;
};

const Select = ({ options, value, setValue, className }: SelectProps) => {
  if (!Array.isArray(options)) throw Error("select options type 'array'");

  const ref = useRef<HTMLDivElement>(null);

  const [opened, setOpen] = useState(false);

  const toggle = () => setOpen((p) => !p);

  const handleSelect = (d: any, v: any) => {
    setValue(v);
    setOpen(false);
  };

  return (
    <div className="inline-block cursor-pointer">
      <div
        ref={ref}
        className={`flex items-center justify-between border ${className}`}
        onClick={toggle}
      >
        <SelectItem value={value}>
          {options.find((opt) => opt.value === value)?.display}
        </SelectItem>
        <span
          className={`transition-transform duration-200 ${
            opened ? "rotate-180" : "rotate-0"
          }`}
        >
          <ArrowDownIcon />
        </span>
      </div>
      <ul
        className={`bg-inherit absolute border ${
          opened ? "" : "hidden"
        } ${className}`}
        style={{
          top: ref.current
            ? `${getElementPosition(ref.current).bottom}px`
            : "0px",
        }}
      >
        {options.map((opt) => (
          <SelectItem
            item
            key={opt.value}
            value={opt.value}
            onSelected={handleSelect}
          >
            {opt.display}
          </SelectItem>
        ))}
      </ul>
    </div>

    // <select
    //   className="outline-none"
    //   value={value}
    //   onChange={(e) => setValue(e.target.value)}
    // >
    //   {options.map((opt) => (
    //     <option key={opt.value} value={opt.value}>
    //       {opt.display}
    //     </option>
    //   ))}
    // </select>
  );
};

Select.defaultProps = {
  className: "",
  options: [{ value: "", display: "입력해주세요" }],
};

export default Select;

export function makeOption(value: any, display: string) {
  return {
    display,
    value,
  } as SelectOption;
}
