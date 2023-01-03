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

  const selectOptions = useMemo(
    () => [makeOption(15, "15개"), makeOption(30, "30개")],
    []
  );

  const displayedItems = useMemo(() => {
    if (!pagination) return items;
    const { start, end } = getItemScope(items.length, page, perPage);
    return items.slice(start, end);
  }, [page, perPage, items, pagination]);

  return (
    <div className={className}>
      <Select value={perPage} setValue={setPerPage} options={selectOptions} />
      {displayedItems &&
        displayedItems.map((item) => (
          <WorkSpaceItem key={item.id} data={item} />
        ))}
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
