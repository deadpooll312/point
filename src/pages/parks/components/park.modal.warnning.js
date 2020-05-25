import React from "react";
import {Table} from "antd";
import {WarningIcon} from "../../../icons/warning.icon";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Название обьекта",
    dataIndex: "name",
    key: "id",
  },
];

export const ParkModalWarning = ({isForOpening, selectedItems}) => {
  return (
    <div className="park-modal-warning">
      <WarningIcon />
      <p>Внимание!</p>
      <p>
        Вы собираетесь {`${isForOpening ? "открыть" : "закрыть "}`}
        {`${selectedItems.length < 1 ? " территорию" : " сразу несколько территорий"}`}!
        Вы уверены?
      </p>
      <Table dataSource={selectedItems} columns={columns} pagination={false} />
    </div>
  );
};
