import { Card } from "flowbite-react";
import { useMemo, useState } from "react";
import { ScheduledItem } from "../../@types";
import { getPageLimit, getItemScope } from "../../utils/page";
import Pagination from "../Pagination";
import Select, { makeOption } from "../Select";
import WorkSpaceItem from "../WorkSpaceItem";

type WorkSpaceViewProps = {
  items: ScheduledItem[];
  perCount: number;
  pagination: boolean;
  hidePagination: boolean;
  className: string;
};

const WorkSpaceView = ({
  items,
  perCount,
  pagination,
  hidePagination,
  className,
}: WorkSpaceViewProps) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(perCount);

  const displayedItems = useMemo(() => {
    if (!pagination) return items;
    const { start, end } = getItemScope(items.length, page, perPage);
    return items.slice(start, end);
  }, [page, perPage, items, pagination]);

  return (
    <div className={`content ${className}`}>
      <Card>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {displayedItems &&
              displayedItems.map((item) => (
                <li key={item.id} className="py-3 sm:py-4">
                  <WorkSpaceItem data={item} />
                </li>
              ))}
          </ul>
        </div>
      </Card>

      {pagination && !hidePagination && (
        <Pagination
          limit={getPageLimit(items.length, perPage)}
          page={page}
          pageMargin={3}
          setPage={setPage}
        />
      )}
    </div>
  );
};

WorkSpaceView.defaultProps = {
  perCount: 15,
  pagination: false,
  hidePagination: false,
  className: "",
};

export default WorkSpaceView;
