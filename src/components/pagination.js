import React from "react";
import {Pagination, Select} from "antd";
const {Option} = Select;

// eslint-disable-next-line react/prop-types
export const PaginationComponent = ({onChange, onSize}) => {
  const options = [10, 20, 50];

  return (
    <div className="pagination-wrapper">
      <span>Показывать:</span>
      <Select defaultValue={10} onChange={onSize}>
        {options.map((value) => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </Select>
      <Pagination onChange={onChange} defaultCurrent={1} total={50} />
    </div>
  );
};
