import {Table} from "antd";
import React from "react";

const columns = [
  {title: "Материалы", dataIndex: "name"},
  {title: "ID", dataIndex: "age"},
  {title: "Источник", dataIndex: "address"},
  {title: "Геоданные", dataIndex: "description"},
];

const data = [
  {
    key: 1,
    name: "Картинка",
    age: 32,
    address: "Балансодержатель",
    description: "[123123, 123123]",
  },
  {
    key: 2,
    name: "Картинка",
    age: 32,
    address: "Балансодержатель",
    description: "[123123, 123123]",
  },
];

export const ParkCluster = () => {
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
      dataSource={data}
    />
  );
};
