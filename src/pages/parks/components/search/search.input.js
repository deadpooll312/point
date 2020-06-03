import React from "react";
import {Input} from "antd";

// eslint-disable-next-line react/display-name
export const SearchInput = ({value, id, onChange}) => {
  if (value) {
    return (
      <div className="search-input">
        <Input
          type="number"
          placeholder="Введите ID парка"
          value={id}
          onChange={onChange}
        />
      </div>
    );
  } else {
    return null;
  }
};
