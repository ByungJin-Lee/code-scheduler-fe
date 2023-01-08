import { useState } from "react";
import AddFolderIcon from "../Icons/AddFolderIcon";
import ScheduleModal from "../ScheduleModal";

type WorkSpaceNewScheduleProps = {};

const WorkSpaceNewSchedule = ({}: WorkSpaceNewScheduleProps) => {
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
        <p>새 스케쥴 추가하기...</p>
      </div>
      <ScheduleModal opened={open} close={handleClose} />
    </>
  );
};

WorkSpaceNewSchedule.defaultProps = {};

export default WorkSpaceNewSchedule;
