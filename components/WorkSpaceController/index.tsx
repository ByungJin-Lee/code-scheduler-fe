import { ScheduledItem } from "../../@types";

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
  return <div className={`content ${className}`}>hello</div>;
};

WorkSpaceController.defaultProps = {
  className: "",
};

export default WorkSpaceController;
