import React, {useState} from "react";
import {Select} from "antd";
import Pagination from "react-js-pagination";
const {Option} = Select;

// eslint-disable-next-line react/prop-types
export const PaginationComponent = ({onChange, onSize, parks}) => {
  const options = [10, 20, 50];
  const [count, setCount] = useState(options[0]);
  const [page, setPage] = useState(1);

  return (
    <div className="pagination-wrapper">
      <span>Показывать:</span>
      <Select
        defaultValue={10}
        onChange={(size) => {
          onSize(size);
          setCount(size);
        }}
        bordered={false}
      >
        {options.map((value) => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </Select>
      <Pagination
        activePage={page}
        itemsCountPerPage={count}
        totalItemsCount={parks.data.left < 9 ? 9 : 450}
        hideFirstLastPages
        pageRangeDisplayed={4}
        onChange={(page) => {
          setPage(page);
          onChange(page);
        }}
      />
    </div>
  );
};
