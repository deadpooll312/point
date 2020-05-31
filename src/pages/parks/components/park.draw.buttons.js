import React, {useCallback} from "react";
import {Button} from "antd";
import {tableColumns} from "../../../consts/parks.const";

export const ParkDrawButtons = ({parks, cards}) => {
  const redesign = useCallback(
    (value) => {
      parks.updateColumns(value ? cards : tableColumns);
    },
    [cards, parks]
  );

  return (
    <div className="buttons">
      <Button
        type="primary"
        className="filter-button-rename"
        onClick={() => redesign(true)}
      >
        Переоформить
      </Button>
      <Button className="filter-button-default" onClick={() => redesign(false)}>
        По умолчанию
      </Button>
    </div>
  );
};
