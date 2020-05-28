import React, {useState} from "react";
import Pagination from "react-js-pagination";

export const PaginateComponent = ({onChange, count, totalItemsCount}) => {
  const [page, setPage] = useState(1);

  return (
    <div className="pagination-wrapper">
      <Pagination
        activePage={page}
        itemsCountPerPage={count}
        totalItemsCount={totalItemsCount}
        hideFirstLastPages
        pageRangeDisplayed={5}
        onChange={(page) => {
          setPage(page);
          onChange(page);
        }}
      />
    </div>
  );
};
