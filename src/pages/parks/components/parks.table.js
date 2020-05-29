import React, {useCallback, useEffect, useState, Fragment} from "react";
import {Table} from "antd";
import {inject, observer} from "mobx-react";
import {emptyData} from "~/consts/text.const";
import {ModalComponent} from "~/components/modal.component";
import {ParkModalTab} from "./park.modal.tab";
import {sysViewNameNo} from "~/consts/text.const";
import {warningModalNames} from "~/consts/modal.const";
import {getStorage} from "../../../services/storage.service";

export const ParksTable = inject("store")(
  observer(({store: {parks}}) => {
    const [showModal, setModal] = useState(false);
    const [data, setData] = useState([]);
    const [item, setItem] = useState({});

    useEffect(() => {
      if (getStorage("activeFilter")) {
        parks.updateActiveFilter(getStorage("activeFilter"));
      }
      parks.getParks();
      setInterval(() => {
        parks.getParks();
      }, 20000);
    }, [parks]);

    useEffect(() => {
      const elements = parks.data && parks.data.map((item) => ({...item, key: item.id}));
      setData(elements);
    }, [parks.data]);

    useEffect(() => {
      if (
        parks.singlePark.updatedColor &&
        parks.singlePark.crowdColor !== parks.singlePark.updatedColor
      ) {
        parks.setWarningModalName(warningModalNames.edit);
      }
    }, [parks.singlePark]);

    const rowSelection = {
      selectedRowKeys: parks.selectedIds,
      onChange: (selectedRowKeys) => {
        parks.selectItems(data.filter((i) => selectedRowKeys.includes(i.id)));
        parks.selectItemIds(selectedRowKeys);
      },
    };

    const onRow = useCallback(
      (record) => {
        setModal(true);
        setItem(record);
        parks.setSelectedPark(record);
      },
      [parks]
    );

    const isAvailableToChange = () =>
      parks.singlePark.sysViewName !== sysViewNameNo &&
      parks.singlePark.crowdColor === "red";

    const hideOkButton = () => parks.singlePark.sysViewName === sysViewNameNo;

    return (
      <Fragment>
        <ModalComponent
          handleCancel={() => setModal(false)}
          width={800}
          okText={
            hideOkButton()
              ? null
              : `${isAvailableToChange() ? "Закрыть" : "Открыть"} парк`
          }
          handleOk={() => {
            setModal(false);
            if (parks.singlePark.crowdColor === "red") {
              parks.setWarningModalName(warningModalNames.closed);
            } else {
              parks.setWarningModalName(warningModalNames.open);
            }
          }}
          visible={showModal}
          danger={isAvailableToChange()}
          title={item.name || "title"}
        >
          <ParkModalTab />
        </ModalComponent>

        <Table
          scroll={{x: 2000}}
          rowClassName={(record) => record.crowdColor}
          rowSelection={rowSelection}
          columns={parks.columns.filter((i) => i.isActive)}
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
