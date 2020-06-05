import React, {useCallback, useEffect, useState, Fragment} from "react";
import {Table} from "antd";
import {inject, observer} from "mobx-react";
import {emptyData} from "../../../../consts/text.const";
import {ModalComponent} from "../../../../components/modal.component";
import {sysViewNameNo} from "../../../../consts/text.const";
import {warningModalNames} from "../../../../consts/modal.const";
import {ParkModalTab} from "../tab/park.modal.tab";
import {authRoles} from "../../../../consts/auth.const";

export const ParksTable = inject("store")(
  observer(({store: {parks, auth}}) => {
    const [showModal, setModal] = useState(false);
    const [data, setData] = useState([]);
    const [item, setItem] = useState({});

    useEffect(() => {
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
      hideSelectAll: true,
      onChange: (selectedRowKeys) => {
        // TODO hardcode сделать как будет массовое закрытие парка
        const isSingle = auth.authRole === authRoles.parkGroup;
        if (isSingle) {
          selectSingle(selectedRowKeys);
        } else {
          parks.selectItems(data.filter((i) => selectedRowKeys.includes(i.id)));
          parks.selectItemIds(selectedRowKeys);
        }
      },
    };

    const selectSingle = (selectedRowKeys) => {
      if (selectedRowKeys.length) {
        const selectedId = selectedRowKeys[selectedRowKeys.length - 1];
        parks.selectItems(data.filter((i) => i.id === selectedId));
        parks.selectItemIds([selectedId]);
        // TODO hardcode сделать как будет массовое закрытие парка
        parks.setSelectedPark(data.find((item) => item.id === selectedId));
        parks.updateSinglePark(data.find((item) => item.id === selectedId));
      } else {
        parks.selectItems([]);
        parks.selectItemIds([]);
      }
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
          rowClassName={(record) =>
            record.available === "true" ? record.crowdColor : "gray"
          }
          rowSelection={rowSelection}
          columns={parks.parkTableColumns}
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
