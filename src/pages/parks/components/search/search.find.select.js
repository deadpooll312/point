import React from "react";
import {SearchSelect} from "../../../../components/search.select";

// eslint-disable-next-line react/display-name
export const SearchFindSelect = ({value, data, id, handleSearch, handleChange}) => {
  if (value) {
    return (
      <SearchSelect
        placeholder={"Введите название парка"}
        styles={{width: 300}}
        data={data}
        value={id}
        handleSearch={handleSearch}
        handleChange={handleChange}
      />
    );
  } else {
    return null;
  }
};
