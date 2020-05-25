import React from "react";
import {WarningIcon} from "../../../icons/warning.icon";

export const ParkModalWarning = ({isForOpening, isSingle}) => {
  return (
    <div>
      <WarningIcon />
      <p>Внимание!</p>
      <p>
        Вы собираетесь {`${isForOpening ? "открыть" : "закрыть "}`}
        {`${isSingle ? " территорию" : " сразу несколько территорий"}`}! Вы уверены?
      </p>
    </div>
  );
};
