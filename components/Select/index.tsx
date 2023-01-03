type SelectOption = {
  value: any;
  display: string;
};

type SelectProps = {
  options: SelectOption[];
  value: any;
  setValue: (value: any) => void;
};

export function makeOption(value: any, display: string) {
  return {
    display,
    value,
  } as SelectOption;
}

const Select = ({ options, value, setValue }: SelectProps) => {
  if (!Array.isArray(options)) throw Error("select options type 'array'");

  return (
    <select value={value} onChange={(e) => setValue(e.target.value)}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.display}
        </option>
      ))}
    </select>
  );
};

Select.defaultProps = {
  options: [{ value: "", display: "입력해주세요" }],
};

export default Select;
