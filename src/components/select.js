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
  // const text = data.find(
  //   (item) =>
  //     value &&
  //     item.value === value.value &&
  //     item.description &&
  //     item.description.length > 32
  // );
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
        <Option key={item.value} className={item.className} title={item.label}>
          {item.label}
        </Option>
      ))}
    </Select>
  );
};
