import { useLanguageState } from "../../contexts/LanguageContext";
import Select from "../Select";

type LanguageSelectProps = {};

const options = [
  {
    display: "한국어",
    value: "kor",
  },
  {
    display: "English",
    value: "eng",
  },
];

const LanguageSelect = ({}: LanguageSelectProps) => {
  const { lang, setLanguage } = useLanguageState();

  return (
    <Select
      className=" p-1 w-[100px]"
      options={options}
      value={lang.code}
      setValue={setLanguage}
    />
  );
};

LanguageSelect.defaultProps = {};

export default LanguageSelect;
