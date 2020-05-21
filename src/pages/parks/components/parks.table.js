import React, {useCallback, useEffect, useState} from "react";
import {Table} from "antd";
import {inject, observer} from "mobx-react";
import {emptyData} from "../../../consts/text.const";

export const ParksTable = inject("store")(
  observer(({store: {parks}}) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
      parks.getParks();
    }, []);

    useEffect(() => {
      const elements =
        parks.data && parks.data.map((item) => ({...item, key: item.territoryCode}));

      setData(elements);
    }, [parks.data]);

    const onChange = useCallback((select, filter, sorter) => {
      console.log(select, filter, sorter);
    });

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
        dataSource={data}
        pagination={false}
        onChange={onChange}
      />
    );
  })
);
