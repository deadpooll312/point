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
  width,
}) => {
  return (
    <Select
      className="simple-select"
      mode={type}
      value={defaultValue}
      style={{width: width || 240}}
      placeholder={placeholder}
      onChange={handleChange}
      labelInValue={labelInValue}
    >
      {data.map((item) => {
        //let className = "";
        //className = "select-low";
        // switch (item.label) {
        //   case "Низкий риск (Открыто)":
        //     className = "select-low";
        //     break;
        //   case "Высокий риск (Нарушения)":
        //     className = "select-high";
        //     break;
        //   case "Критическое (Только выход!)":
        //     className = "select-critical";
        //     break;
        // }
        return (
          <Option key={item.value} className="select-low">
            {item.label}
          </Option>
        );
      })}
    </Select>
  );
};
