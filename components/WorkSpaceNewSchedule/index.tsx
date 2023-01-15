import { useState } from "react";
import AddFolderIcon from "../Icons/AddFolderIcon";
import ScheduleModal from "../ScheduleModal";
import { useLanguagePack } from "../../contexts/LanguageContext";

type WorkSpaceNewScheduleProps = {};

const WorkSpaceNewSchedule = ({}: WorkSpaceNewScheduleProps) => {
  const { NEW_SCHEDULE } = useLanguagePack();

  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className="content flex items-center justify-center flex-col"
        onClick={handleClick}
      >
        <div className="rounded-full bg-lime-300">
          <AddFolderIcon />
        </div>
        <p>{NEW_SCHEDULE}</p>
      </div>
      <ScheduleModal opened={open} close={handleClose} />
    </>
  );
};

WorkSpaceNewSchedule.defaultProps = {};

export default WorkSpaceNewSchedule;
