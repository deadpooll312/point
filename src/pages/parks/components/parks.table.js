import React, {useEffect, useState} from "react";
import {Table} from "antd";
import {inject, observer} from "mobx-react";

const data = [];
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    defaultSortOrder: "descend",
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: "Название объекта",
    dataIndex: "name",
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: "Статус",
    dataIndex: "status",
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: "Тип объекта",
    dataIndex: "type",
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: "Возм. места скопления людей",
    dataIndex: "crowPoint",
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: "Количество входов",
    dataIndex: "enterCount",
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: "Операции",
    dataIndex: null,
  },
];

const item = {
  key: 1,
  camCount: 0,
  countyCode: 0,
  countyName: "string",
  crowPoint: true,
  department: "string",
  districtCode: 0,
  districtName: "string",
  email1: "string",
  email2: "string",
  enterCount: 0,
  fence: true,
  groupType: "string",
  id: 0,
  inn: "string",
  name: "string",
  organization: "string",
  phone1: "string",
  phone2: "string",
  respName1: "string",
  respName2: "string",
  scam: 0,
  ssnif: 0,
  ssum: 0,
  standard: 0,
  type: "string",
};

data.push(item);
data.push(item);
data.push(item);
data.push(item);

export const ParksTable = inject("store")(
  observer(({store: {parks}}) => {
    // useEffect(() => {
    //   console.log(parks);
    //   parks.getParks();
    // }, []);

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onChange = (select, filter, sorter) => {
      console.log(select);
      console.log(filter);
      console.log(sorter);
    };

    const rowSelection = {
      selectedRowKeys,
      onChange: (selectedRowKeys) => {
        setSelectedRowKeys(selectedRowKeys);
      },
    };

    return (
      <Table
        rowSelection={rowSelection}
        columns={columns}
        locale={{emptyText: "Данных не найдено"}}
        dataSource={data}
        pagination={false}
        onChange={onChange}
      />
    );
  })
);
