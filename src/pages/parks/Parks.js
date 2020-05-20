import React, {useCallback, useEffect, useState, Fragment} from "react";
import {Table, Button} from "antd";
import {ParksHeader} from "./components/parks.header";
import {ParksActions} from "./components/parks.actions";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Address",
    dataIndex: "address",
    // eslint-disable-next-line react/display-name
    render: (value) => {
      console.log(value);
      return <span>Span London, Park Lane {value}</span>;
    },
  },
  {
    title: "Age",
    dataIndex: "age",
  },
];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: i,
  });
}

export const Parks = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="parks">
      <ParksHeader />
      <ParksActions />
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};
