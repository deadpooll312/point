import React from "react";
import {SelectComponent} from "../../../components/select";

export const ParksFilters = () => {
  const area = [
    {
      key: "value1",
      value: "value1",
      label: "Округ 1",
    },
    {
      key: "value2",
      value: "value2",
      label: "Округ 2",
    },
    {
      key: "value3",
      value: "value3",
      label: "Округ 3",
    },
  ];

  const region = [
    {
      key: "value1",
      value: "value1",
      label: "Регион 1",
    },
    {
      key: "value2",
      value: "value2",
      label: "Регион 2",
    },
    {
      key: "value3",
      value: "value3",
      label: "Регион 3",
    },
  ];

  return (
    <div className="park-filters">
      <label>
        <span>По округу</span>
        <SelectComponent
          data={area}
          labelInValue={true}
          handleChange={({value}) => console.log(value)}
          placeholder="Выберите округ"
        />
      </label>

      <label>
        <span>По району</span>
        <SelectComponent
          data={region}
          labelInValue={true}
          handleChange={({value}) => console.log(value)}
          placeholder="Выберите район"
        />
      </label>
    </div>
  );
};
