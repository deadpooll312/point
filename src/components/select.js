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
  defaultValue,
  labelInValue,
}) => {
  return (
    <Select
      className="simple-select"
      mode={type}
      style={{width: 200}}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={handleChange}
      labelInValue={labelInValue}
      optionLabelProp="value"
    >
      {data.map((item) => {
        return (
          <Option key={item.value} className={item.className}>
            {item.label}
          </Option>
        );
      })}
    </Select>
  );
};
