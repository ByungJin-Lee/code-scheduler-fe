import Link from "next/link";
import { ScheduledItem } from "../../@types";
import ChangeActiveButton from "../ChangeActiveButton";
import Active from "../Indicator/Active";
import Inactive from "../Indicator/Inactive";

type WorkSpaceItemProps = {
  data: ScheduledItem;
};

const WorkSpaceItem = ({ data }: WorkSpaceItemProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
          <Link href={`/workspace/${data.id}`}>{data.name}</Link>
        </p>
        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
          {data.description}
        </p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        <ChangeActiveButton id={data.id} active={data.active} />
      </div>
    </div>
  );
};

WorkSpaceItem.defaultProps = {};

export default WorkSpaceItem;
