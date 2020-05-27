import React, {useCallback, useEffect, useState, Fragment} from "react";
import {Table} from "antd";
import {inject, observer} from "mobx-react";
import {emptyData} from "~/consts/text.const";
import {ModalComponent} from "~/components/modal.component";
import {ParkModalTab} from "./park.modal.tab";
import {sysViewNameNo} from "~/consts/text.const";
import {ParkModalWarning} from "./park.modal.warnning";

export const ParksTable = inject("store")(
  observer(({store: {parks}}) => {
    const [showModal, setModal] = useState(false);
    const [confirm, setConfirm] = useState(false);
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
          width={700}
          okText={
            hideOkButton()
              ? null
              : `${isAvailableToChange() ? "Закрыть" : "Открыть"} парк`
          }
          handleOk={() => setModal(false)}
          visible={showModal}
          danger={isAvailableToChange()}
          title={item.name || "title"}
          dangerEdit
          editText={
            parks.singlePark.updatedColor &&
            parks.singlePark.crowdColor !== parks.singlePark.updatedColor
              ? "Изменить состояние"
              : null
          }
          handleEdit={() => {
            setModal(false);
            setConfirm(true);
          }}
        >
          <ParkModalTab />
        </ModalComponent>

        <ModalComponent
          title={"Изменить состояние"}
          okText={"Да, открыть"}
          danger
          visible={confirm}
          handleCancel={() => setConfirm(false)}
          handleOk={() => {
            setConfirm(false);
            parks.updateParkRepaint();
          }}
          cancelText="Отмена"
        >
          <ParkModalWarning
            text={`Вы собираетесь изменить Состояние территорий Вы уверены?`}
          />
        </ModalComponent>

        <Table
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
