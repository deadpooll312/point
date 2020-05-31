import React from "react";
import {Button} from "antd";

export const ParkDrawButtonsFiltres = ({submit, refresh, params}) => {
  return (
    <div className="buttons">
      <Button
        type="primary"
        onClick={submit}
        disabled={!params.groupType && !params.regionCode}
      >
        Показать
      </Button>
      <Button onClick={refresh}>Сбросить фильтры</Button>
    </div>
  );
};
