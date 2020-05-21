import React, {useEffect, useState} from "react";
import {Table} from "antd";
import {inject, observer} from "mobx-react";
import {emptyData} from "../../../consts/text.const";

export const ParksTable = inject("store")(
  observer(({store: {parks}}) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    // useEffect(() => {
    //   console.log(parks);
    //   parks.getParks();
    // }, []);

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
        columns={parks.columns}
        locale={{emptyText: emptyData}}
        dataSource={parks.data}
        pagination={false}
        onChange={onChange}
      />
    );
  })
);
