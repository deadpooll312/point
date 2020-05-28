import React, {useState} from "react";
import {Select} from "antd";
import {PaginateComponent} from "./paginate.component";
const {Option} = Select;

// eslint-disable-next-line react/prop-types
export const PaginationComponent = ({onChange, onSize, parks}) => {
  const options = [10, 20, 50];
  const [count, setCount] = useState(options[0]);

  return (
    <div className="pagination-wrapper">
      <span className="pagination-color">Показывать:</span>
      <Select
        defaultValue={10}
        onChange={(size) => {
          onSize(size);
          setCount(size);
        }}
        bordered={false}
      >
        {options.map((value) => (
          <Option key={value} value={value} className="pagination-color">
            {value}
          </Option>
        ))}
      </Select>
      <PaginateComponent
        totalItemsCount={parks.data.left < 9 ? 9 : 450}
        onChange={onChange}
        count={count}
      />
    </div>
  );
};
