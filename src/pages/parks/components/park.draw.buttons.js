import React, {useCallback} from "react";
import {Button} from "antd";
import {tableColumns} from "../../../consts/parks.const";

export const ParkDrawButtons = ({parks, cards}) => {
  const redesign = useCallback(
    (value) => parks.updateColumns(value ? cards : tableColumns),
    [cards]
  );

  return (
    <div className="buttons">
      <Button type="primary" onClick={() => redesign(true)}>
        Переоформить
      </Button>
      <Button onClick={() => redesign(false)}>По-умолчанию</Button>
    </div>
  );
};
