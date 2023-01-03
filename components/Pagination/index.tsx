import { MouseEvent, useCallback } from "react";

type PaginationProps = {
  limit: number;
  page: number;
  pageMargin: number;
  setPage(value: number): void;
};

const Pagination = ({ page, pageMargin, setPage, limit }: PaginationProps) => {
  const start = Math.max(1, page - pageMargin);
  const end = Math.min(limit, page + pageMargin);

  const scope = Array(end - start + 1).map((value, idx) => idx + start);

  const handlePageClick = useCallback(
    (e: MouseEvent) => {
      if (e) setPage(parseInt((e.target as HTMLElement).dataset.cursor || "1"));
    },
    [setPage]
  );

  return (
    <div className="flex justify-center">
      {scope.map((value) => (
        <span key={value} data-cursor={value} onClick={handlePageClick}>
          {value}
        </span>
      ))}
    </div>
  );
};

Pagination.defaultProps = {
  pageMargin: 3,
};

export default Pagination;
