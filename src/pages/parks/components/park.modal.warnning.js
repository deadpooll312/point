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

export const ParkModalWarning = ({selectedItems, text}) => {
  return (
    <div className="park-modal-warning">
      <WarningIcon />
      <p>Внимание!</p>
      <p>{text}</p>
      {selectedItems && (
        <Table dataSource={selectedItems} columns={columns} pagination={false} />
      )}
    </div>
  );
};
