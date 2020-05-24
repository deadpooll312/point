import React from "react";
import {Pagination, Select} from "antd";
const {Option} = Select;

// eslint-disable-next-line react/prop-types
export const PaginationComponent = ({onChange, onSize}) => {
  return (
    <div className="pagination-wrapper">
      <span>Показывать:</span>
      <Select defaultValue={10} onChange={onSize}>
        <Option value={10}>10</Option>
        <Option value={20}>20</Option>
        <Option value={50}>50</Option>
      </Select>
      <Pagination onChange={onChange} defaultCurrent={1} total={50} />
    </div>
  );
};
