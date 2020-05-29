import React, {useState} from "react";
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
  width,
}) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <Select
      className={`simple-select simple-select-${value.value}`}
      mode={type}
      value={value}
      style={{width: width || 240}}
      placeholder={placeholder}
      bordered={false}
      onChange={(v) => {
        setValue(v);
        handleChange(v);
      }}
      labelInValue={labelInValue}
    >
      {data.map((item) => (
        <Option
          key={item.value}
          onClick={() => {
            console.log(item);
          }}
          className={item.className}
        >
          {item.label}
        </Option>
      ))}
    </Select>
  );
};
