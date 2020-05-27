import {Table} from "antd";
import React from "react";

const columns = [
  {title: "Материалы", dataIndex: "providerType"},
  {title: "Источник", dataIndex: "longitude"},
  {title: "Геоданные", dataIndex: "latitude"},
];

export const ParkCluster = ({park}) => {
  // TODO переделать в кастомную таблицу
  return (
    <Table
      columns={columns}
      expandIconColumnIndex={-2}
      expandIcon={() => null}
      expandIconAsCell={false}
      expandRowByClick={true}
      defaultExpandAllRows={false}
      expandable={{
        expandedRowRender: (record) => <p style={{margin: 0}}>{record.name}</p>,
        onExpand: (e, record) => console.log(record.key),
      }}
      dataSource={[]}
      pagination={false}
    />
  );
};
