import React from "react";
import {Select} from "antd";
const {Option} = Select;

export const SearchSelect = ({
  handleSearch,
  handleChange,
  data,
  placeholder,
  value,
  styles,
}) => {
  return (
    <Select
      showSearch
      value={value}
      placeholder={placeholder}
      style={styles}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={(text) => {
        handleChange(text);
      }}
    >
      {data.map((item) => (
        <Option key={item.value} value={item.value}>
          {item.name || item.label}
        </Option>
      ))}
    </Select>
  );
};
