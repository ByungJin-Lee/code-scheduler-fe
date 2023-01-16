import { useState } from "react";
import AddFolderIcon from "../Icons/AddFolderIcon";
import ScheduleModal from "../ScheduleModal";
import { useLanguagePack } from "../../contexts/LanguageContext";

type NewScheduleButtonProps = {};

const NewScheduleButton = ({}: NewScheduleButtonProps) => {
  const { NEW_SCHEDULE } = useLanguagePack();

  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        {NEW_SCHEDULE}
      </button>

      <ScheduleModal opened={open} close={handleClose} />
    </>
  );
};

NewScheduleButton.defaultProps = {};

export default NewScheduleButton;
