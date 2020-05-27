import {Button, Space} from "antd";
import React, {useEffect, useState} from "react";
import {sysViewNameNo} from "../../../consts/text.const";

export const ParksActionButtons = ({parks, onSelectedItems}) => {
  const [actionType, setActionType] = useState("DISABLED");

  useEffect(() => {
    parks.selectedItems.forEach((item) => {
      if (item.sysViewName === sysViewNameNo) {
        setActionType("DISABLED");
      } else {
        item.crowdColor === "red" ? setActionType("CLOSE") : setActionType("OPEN");
      }
    });
  }, [parks.selectedItems]);

  return (
    <Space size={10}>
      <Button
        disabled={!(actionType === "OPEN")}
        type="primary"
        onClick={() => onSelectedItems(true)}
      >
        Открыть выбранное
      </Button>
      <Button
        disabled={!(actionType === "CLOSE")}
        danger
        onClick={() => onSelectedItems(false)}
      >
        Закрыть выбранные
      </Button>
    </Space>
  );
};