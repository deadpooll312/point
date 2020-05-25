import React, {useCallback, useEffect, useState, Fragment} from "react";
import {Table} from "antd";
import {inject, observer} from "mobx-react";
import {emptyData} from "~/consts/text.const";
import {ModalComponent} from "~/components/modal.component";
import {ParkModalTab} from "./park.modal.tab";

export const ParksTable = inject("store")(
  observer(({store: {parks}}) => {
    const [showModal, setModal] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [data, setData] = useState([]);
    const [item, setItem] = useState({});

    useEffect(() => {
      parks.getParks();
    }, []);

    useEffect(() => {
      const elements = parks.data && parks.data.map((item) => ({...item, key: item.id}));

      setData(elements);
    }, [parks.data]);

    const rowSelection = {
      selectedRowKeys,
      onChange: (selectedRowKeys) => {
        setSelectedRowKeys(selectedRowKeys);
      },
    };

    const onRow = useCallback((record) => {
      setModal(true);
      setItem(record);
    }, []);

    return (
      <Fragment>
        <ModalComponent
          handleCancel={() => setModal(false)}
          width={700}
          okText={"Закрыть парк"}
          handleOk={() => setModal(false)}
          visible={showModal}
          danger
          title={item.name || "title"}
        >
          <ParkModalTab />
        </ModalComponent>

        <Table
          rowSelection={rowSelection}
          columns={parks.columns}
          locale={{emptyText: emptyData}}
          dataSource={data}
          onRow={(record) => ({
            onClick: () => onRow(record),
          })}
          pagination={false}
        />
      </Fragment>
    );
  })
);
