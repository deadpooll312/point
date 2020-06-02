import React from "react";
import {Select} from "antd";
const {Option} = Select;

/*
 * type -  может быть multiple
 * defaultValue - может быть [string] || [number] || string || number
 * labelInValue - true будет показывать label в выбранном значении
 * */

export const SelectComponent = ({
  handleChange,
  placeholder,
  data,
  type,
  value,
  labelInValue,
  width,
  disabled,
  selectClassName,
}) => {
  return (
    <Select
      className={`simple-select ${selectClassName}`}
      mode={type}
      value={value}
      style={{width: width || 240}}
      placeholder={placeholder}
      bordered={false}
      onChange={handleChange}
      disabled={disabled}
      labelInValue={labelInValue}
    >
      {data.map((item) => (
        <Option key={item.value} className={item.className}>
          {item.label}
        </Option>
      ))}
    </Select>
  );
};
