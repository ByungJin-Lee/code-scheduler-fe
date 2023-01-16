import { ScheduledItem } from "../../@types";
import NewScheduleButton from "../NewScheduleButton";

type WorkSpaceControllerProps = {
  setOriginItems(items: ScheduledItem[]): void;
  setViewItems(items: ScheduledItem[]): void;
  className: string;
};

const WorkSpaceController = ({
  setOriginItems,
  setViewItems,
  className,
}: WorkSpaceControllerProps) => {
  return (
    <div className={`content mt-4 ${className}`}>
      <NewScheduleButton />
    </div>
  );
};

WorkSpaceController.defaultProps = {
  className: "",
};

export default WorkSpaceController;
